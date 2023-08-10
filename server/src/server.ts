import cors from "cors";
import express from "express";
import fs from "fs";
import https from "https";
import path from "path";
// import http from "http";

const app: express.Application = express();

const host = "localhost";
const PORT = 4443;

app.use(express.json());

app.use(cors());

const database = {
  soilMoisture: 0,
};

app.get(
  "/api/soil-moisture",
  async (req: express.Request, res: express.Response) => {
    return res.send(database).end();
  }
);

app.post(
  "/api/soil-moisture",
  async (req: express.Request, res: express.Response) => {
    console.log("TEST");
    const { soilMoisture } = req.body;
    console.log("Soil: ", soilMoisture);
    database.soilMoisture = soilMoisture;

    const response = {
      banana: "OK",
    };

    // req;

    return res.send(response).end();
  }
);

// const requestListener = function (req: any, res: any) {
//   // res.writeHead(200);
//   // res.end("My first server!");
//   next();
// };

// const server = http.createServer(app);
// server.listen(PORT, host, () => {
//   console.log(`Server is running on http://${host}:${PORT}`);
// });

// const server = http.createServer();
// server.listen(PORT, host, () => {
//   console.log(`Server is running on ${PORT}`);
// });

https
  .createServer(
    {
      key: fs.readFileSync(
        path.resolve(__dirname, "../../certs/vvasylkovskyi_com.key")
      ),
      cert: fs.readFileSync(
        path.resolve(__dirname, "../../certs/vvasylkovskyi_com.pem")
      ),
    },
    app
  )
  .listen(PORT, function () {
    console.info(`Server is running on http://${host}:${PORT}`);
  });

// https.createServer(app).listen(PORT, function () {
//   console.info(`Server is running on http://${host}:${PORT}`);
// });
