const httpStatusCode = {
  CREATED: 201,
  OK: 200,
  INTERNAL_SERVER_ERROR: 500,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
};

const httpResponse = (body: any) => {
  return body;
};

export { httpStatusCode, httpResponse };
