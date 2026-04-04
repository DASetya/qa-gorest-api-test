const now = new Date().toISOString();
export const logRequest = (method: string, url: string, payload?: any) => {
  console.log(`[${now}]\n[REQUEST] ${method} ${url}`);
  if (payload) {
    console.log("Payload:", JSON.stringify(payload, null, 2));
  }
};

export const logResponse = (response: any) => {
  console.log(`[${now}]\n[RESPONSE] ${response.status}`);
  console.log(JSON.stringify(response.data, null, 2));
};

export const logError = (error: any) => {
  console.error(`[${now}]\n[ERROR]`);
  console.error(error.response?.status);
  console.error(JSON.stringify(error.response?.data, null, 2));
};
