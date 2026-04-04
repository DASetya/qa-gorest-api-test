import { deleteRequest, getRequest, postRequest } from "../helpers/http";
import { endpoint } from "./endpoint";

// GET USERS
export const getUsers = () => {
  return getRequest(endpoint.users);
};

// CREATE USER
export const createUser = (data: any) => {
  return postRequest(endpoint.users, data);
};

// DELETE USER
export const deleteUser = (id: number) => {
  return deleteRequest(`${endpoint.users}/${id}`);
};