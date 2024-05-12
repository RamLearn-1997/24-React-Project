import { Request, Response } from "express";
import { Code } from "../models/Code";
import { dbClose, dbConnect } from "../lib/dbConnect";

export const saveCode = async (req: Request, res: Response) => {
  const { fullCode } = req.body;
    // Open Connection to DB  
    await dbConnect();
    await Code.create({
      fullCode: fullCode,
    }).then((resp) => {
       console.log("Successfully created Code!!!!" + resp);
       res.status(200).send({ url: resp._id, status: "Saved!" });
    }).catch((err_resp) => {
      console.log("Failed to create Code!!!!");
      console.log(err_resp);
       res.status(500).send({ message: "Error saving code" + err_resp });
    }).finally( async () => {
      // Close connection to DB after work
      await dbClose();
    });
};

export const loadCode = async (req: Request, res: Response) => {
  const { urlId } = req.body;
  // Open Connection to DB  
  await dbConnect();    
  // console.log("LOADCODE: After dbConnect ~~~ ");
  await Code.findById(urlId).exec()
  .then((resp) => {
    console.log("Successfully fetched code! : " + resp );
    res.status(200).send({fullCode: resp?.fullCode });
  }).catch((err) => {
    console.log("Failed to fetch Code ! : " + err);
    res.status(500).send({ message : "Error loading code" + err});
  }).finally( () => {
    // Close connection to DB after work
    //dbClose();
  })
};
