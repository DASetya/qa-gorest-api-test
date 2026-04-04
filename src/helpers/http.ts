import axios from "axios";
import { logError, logRequest, logResponse } from "./logger";
import { config } from "../config/config";

const api = axios.create({
  baseURL: config.baseURL,
  timeout: 10000,
});

// default header (global)
const defaultHeaders = {
  Authorization: `Bearer ${config.token}`,
  "Content-Type": "application/json",
};

// GET
export const getRequest = async (url: string, headers = {}) => {
  try {
    logRequest("GET", url);

    const response = await api.get(url, {
      headers: { ...defaultHeaders, ...headers },
    });

    logResponse(response);
    return response;
  } catch (error: any) {
    logError(error);
    throw error;
  }
};

// POST
export const postRequest = async (url: string, data: any, headers = {}) => {
  try {
    logRequest("POST", url, data);

    const response = await api.post(url, data, {
      headers: { ...defaultHeaders, ...headers },
    });

    logResponse(response);
    return response;
  } catch (error: any) {
    logError(error);
    throw error;
  }
};

// DELETE
export const deleteRequest = async (url: string, headers = {}) => {
  try {
    logRequest("DELETE", url);

    const response = await api.delete(url, {
      headers: { ...defaultHeaders, ...headers },
    });

    logResponse(response);
    return response;
  } catch (error: any) {
    logError(error);
    throw error;
  }
};
