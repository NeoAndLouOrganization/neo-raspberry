import express from "express";
import database from "../../database/database";

const getSoilMoisture = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  res.send(database.soilMoisture).end();
};

export default getSoilMoisture;
