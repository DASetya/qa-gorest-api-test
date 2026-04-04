import dotenv from "dotenv";

const env = process.env.NODE_ENV || "dev";

dotenv.config({
  path: `.env.${env}`,
});

export const config = {
  baseURL: process.env.BASE_URL as string,
  token: process.env.TOKEN as string,
};
