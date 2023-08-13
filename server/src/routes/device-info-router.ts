import express from "express";
import getDeviceInfo from "../resources/device-info/get-device-info";

const deviceInfoRoute: string = "/device-info/";
const deviceInfoRouter: express.Router = express.Router();

deviceInfoRouter.get(deviceInfoRoute, getDeviceInfo);

export { deviceInfoRouter };
