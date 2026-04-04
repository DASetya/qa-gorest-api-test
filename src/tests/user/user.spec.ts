import { expect } from "chai";
import {
  createUser,
  createUserWithoutToken,
  deleteUser,
  getUsers,
} from "../../services/user.service";
import {
  userPayload,
  userPayloadWithoutEmail,
} from "../../data/payload/user.payload";
import { expectArray, expectStatus } from "../../helpers/assertion";
import { statusCode } from "../../data/response/response";
import { validateUserSchema } from "../../helpers/schema-validator";

describe("@User API Tests", () => {
  describe("@Positive-Case Scenarios", () => {
    it("should create a new user", async () => {
      const payload = userPayload();
      const response = await createUser(payload);
      expectStatus(response.status, statusCode.created);
      expect(response.data.name).to.equal(payload.name);
      validateUserSchema(response.data);
    });
    it("should get users successfully", async () => {
      const res = await getUsers();
      expectStatus(res.status, statusCode.success);
      expectArray(res.data);
    });
    it("should delete user successfully", async () => {
      const payload = userPayload();
      const createRes = await createUser(payload);
      const userId = createRes.data.id;
      const res = await deleteUser(userId);
      expectStatus(res.status, statusCode.noContent);
    });
  });
  describe("@Negative-Case Scenarios", () => {
    it("should fail create user without token", async () => {
      try {
        await createUserWithoutToken(userPayload());
      } catch (error: any) {
        expectStatus(error.response.status, statusCode.unauthorized);
      }
    });
    it("should fail create user without email", async () => {
      try {
        const payload = userPayloadWithoutEmail();
        await createUser(payload);
      } catch (error: any) {
        expectStatus(error.response.status, statusCode.dataValidationFailed);
      }
    });
  });
});
