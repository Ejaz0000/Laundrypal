import mongoose from "mongoose";
import connect from "../../../database/connect";
import Orders from "../../../models/order";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connect.connect();
    const {agent,sortby} = req.body;
    if(sortby==="recent"){
      const orders = await Orders.find({agent: agent});
      if (orders) {
        res.status(200).json(orders.reverse());
      } else {
        res.status(409).json({ message: "Something went wrong"});
      }
    }
    
    
  }
}
