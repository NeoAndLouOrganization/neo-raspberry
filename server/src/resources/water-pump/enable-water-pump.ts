import express from "express";

const enableWaterPump = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  console.log("Enable Water Pump");
};

export default enableWaterPump;
