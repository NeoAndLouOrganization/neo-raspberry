import cors from "cors";
import express from "express";

import dotenv from "dotenv";
import { Server as HttpServer } from "http";
import { Server as HttpsServer } from "https";
import getServer from "./utils/getServer";

import { deviceInfoRouter } from "./routes/device-info-router";
import { soilMoistureRouter } from "./routes/soil-moisture-router";
import { waterPumpRouter } from "./routes/water-pump-router";

dotenv.config();

const app: express.Application = express();
const PORT = 4443;

app.use(express.json());
app.use(cors());

app.use(deviceInfoRouter);
app.use(soilMoistureRouter);
app.use(waterPumpRouter);

const server: HttpsServer | HttpServer = getServer(app);

server.on("listening", () => {
  console.log(`Listening on port: ${PORT}`);
});

server.on("error", (error: Error) => console.error("Error:", error));
server.listen(PORT);
