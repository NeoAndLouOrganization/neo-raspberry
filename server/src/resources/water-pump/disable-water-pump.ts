import express from "express";

const disableWaterPump = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  console.log("Disable Water Pump");
};

export default disableWaterPump;
