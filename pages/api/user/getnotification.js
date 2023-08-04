import mongoose from "mongoose";
import connect from "../../../database/connect";
import AcceptedOrders from "../../../models/acceptedOrders";


export default async function handler(req, res) {
  if (req.method === "POST") {
    await connect.connect();
    const {user} = req.body;
   
      const notifications = await AcceptedOrders.find({client: user});
      if (notifications) {
        res.status(200).json(notifications.reverse());
      } else {
        res.status(409).json({ message: "Something went wrong"});
      }
    
    
    
  }
}
