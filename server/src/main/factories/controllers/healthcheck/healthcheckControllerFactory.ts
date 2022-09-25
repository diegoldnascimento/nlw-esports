import { HealthcheckController } from "../../../../application/controllers/healthcheck/healthcheckController";

export const healthcheckControllerFactory = () => {
  const healthcheckController = new HealthcheckController();

  return {
    healthcheckController,
  };
};
