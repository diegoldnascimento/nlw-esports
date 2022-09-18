import express, { Request, Response } from "express";
import { Ad } from "../domain/entity/ad";
import { httpResponse } from "../presentation/http/httpResponse";

const app = express();

app.get("/", (req: Request, res: Response) => {
  const response = {
    status: "ok",
  };

  res.status(200).json(response);
});

app.get("/ads", (req: Request, res: Response) => {
  const response: Ad[] = [];

  for (let i = 0; i < 5; i++) {
    response.push(
      new Ad({
        name: `Anuncio ${i}`,
        createdAt: new Date(),
      })
    );
  }

  res.status(200).json(httpResponse(response));
});

app.listen("3000", () => {
  console.log(`NWL eSports API is running at port ${3000}`);
});
