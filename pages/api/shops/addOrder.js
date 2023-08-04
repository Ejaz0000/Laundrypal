import mongoose from "mongoose";
import connect from "../../../database/connect";
import Orders from "../../../models/order";

export default async function handler(req, res) {
    if(req.method === "POST") {
        await connect.connect();
        const { client, clientEmail, clientPhone, clientLocation, clientImg, agent, forwash, fordryclean, foriron, forwashiron, fordryiron, cost } = req.body;
        
        const newOrder = new Orders({
            client,
            clientEmail,
            clientPhone,
            clientLocation,
            clientImg,
            agent,
            forwash,
            fordryclean,
            foriron,
            forwashiron,
            fordryiron,
            cost
            
        });
        await newOrder.save();
        const orders = await Orders.find();
    if (orders) {
      res.status(200).json({message: "Order added successfully"});
    } else {
      res.status(409).json({ message: "Something went wrong"});
    }
        
    }
}
