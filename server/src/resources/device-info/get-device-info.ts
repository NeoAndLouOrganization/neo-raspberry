import express from "express";
import database from "../../database/database";

const getDeviceInfo = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  res.send(database).end();
};

export default getDeviceInfo;
