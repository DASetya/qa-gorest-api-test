import { expect } from "chai";

export const expectStatus = (actual: number, expected: number) => {
  expect(actual).to.equal(expected);
};

export const expectNotEmpty = (data: any) => {
  expect(data).to.not.be.null;
  expect(data).to.not.be.undefined;
};

export const expectArray = (data: any) => {
  expect(data).to.be.an("array");
};