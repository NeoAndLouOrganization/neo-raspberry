import express from "express";
import getSoilMoisture from "../resources/soil-moisture/get-soil-moisture";
import postSoilMoisture from "../resources/soil-moisture/post-soil-moisture";

const soilMoistureRoute: string = "/soil-moisture/";
const soilMoistureRouter: express.Router = express.Router();

soilMoistureRouter.get(soilMoistureRoute, getSoilMoisture);
soilMoistureRouter.post(soilMoistureRoute, postSoilMoisture);

export { soilMoistureRouter };
