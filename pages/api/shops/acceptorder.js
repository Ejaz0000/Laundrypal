import mongoose from "mongoose";
import connect from "../../../database/connect";
import AcceptedOrders from "../../../models/acceptedOrders";

export default async function handler(req, res) {
    if(req.method === "POST") {
        await connect.connect();
        const { client, clientEmail, clientPhone, agent, agentEmail, pickup, delivery} = req.body;
        
        const newAccpted = new AcceptedOrders({
            client,
            clientEmail,
            clientPhone,
            agent,
            agentEmail,
            pickup,
            delivery
            
        });
        await newAccpted.save();
        const accept = await AcceptedOrders.find();
    if (accept) {
      res.status(200).json({message: "Order accepted"});
    } else {
      res.status(409).json({ message: "Something went wrong"});
    }
        
    }
}
