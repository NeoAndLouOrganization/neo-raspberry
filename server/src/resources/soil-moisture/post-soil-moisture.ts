import express from "express";
import database from "../../database/database";

const postSoilMoisture = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  console.log("TEST");
  const { soilMoisture } = req.body;
  console.log("Soil: ", soilMoisture);
  database.soilMoisture = soilMoisture;

  const response = {
    banana: "OK",
  };

  res.send(response).end();
};

export default postSoilMoisture;
