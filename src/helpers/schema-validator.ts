import Ajv from "ajv";
import userSchema from "../schema/user.schema.json";

const ajv = new Ajv();

export const validateUserSchema = (data: any) => {
  const validate = ajv.compile(userSchema);
  const valid = validate(data);

  if (!valid) {
    console.error(validate.errors);
    throw new Error("Schema validation failed");
  }

  return true;
};