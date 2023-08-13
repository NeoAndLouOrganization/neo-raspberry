import http, { Server as HttpServer } from "http";
import https, { Server as HttpsServer } from "https";

import { Application } from "express";

import isProd from "./isProd";
import path from "path";
import fs from "fs";

const getServerOptions = () => ({
  key: fs.readFileSync(
    path.resolve(__dirname, "../../../certs/vvasylkovskyi_com.key")
  ),
  cert: fs.readFileSync(
    path.resolve(__dirname, "../../../certs/vvasylkovskyi_com.pem")
  ),
});

const getServer = (app: Application): HttpServer | HttpsServer => {
  let server: HttpServer | HttpsServer;
  if (isProd()) {
    server = http.createServer(app);
  } else {
    const { cert, key } = getServerOptions();
    server = https.createServer({ cert, key }, app);
  }

  return server;
};

export default getServer;
