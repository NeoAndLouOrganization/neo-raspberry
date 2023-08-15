import express from "express";

const activateWaterPump = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  console.log("Activate Water Pump");
};

export default activateWaterPump;
