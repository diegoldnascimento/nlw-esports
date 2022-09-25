import { Request, Response } from "express";

export class HealthcheckController {
  async handleRequest(request: Request, response: Response) {
    const data = {
      status: "ok",
    };

    return response.status(200).json(data);
  }
}
