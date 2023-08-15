import express from "express";
import activateWaterPump from "../resources/water-pump/activate-water-pump";
import enableWaterPump from "../resources/water-pump/enable-water-pump";
import disableWaterPump from "../resources/water-pump/disable-water-pump";

const waterPumpRoute: string = "/water-pump/";
const waterPumpRouter: express.Router = express.Router();

const activateWaterPumpRoute: string = `${waterPumpRoute}/activate`;
const enableWaterPumpRoute: string = `${waterPumpRoute}/enable`;
const disableWaterPumpRoute: string = `${waterPumpRoute}/disable`;

waterPumpRouter.post(activateWaterPumpRoute, activateWaterPump);
waterPumpRouter.post(enableWaterPumpRoute, enableWaterPump);
waterPumpRouter.post(disableWaterPumpRoute, disableWaterPump);

export { waterPumpRouter };
