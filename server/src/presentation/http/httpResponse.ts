const httpResponse = (body: any) => {
  const output = {
    statusCode: 201,
    body,
  };

  return output;
};

export { httpResponse };
