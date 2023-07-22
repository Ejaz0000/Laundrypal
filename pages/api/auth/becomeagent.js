import mongoose from "mongoose";
import connect from "../../../database/connect";
import Agents from "../../../models/agent";

export default async function handler(req, res) {
    if(req.method === "POST") {
        await connect.connect();
        const { name, email, password, phone, city, address, services } = req.body;
        const existingAgent = await Agents.findOne({
            $or: [{ email }],
          });
      
          if (existingAgent) {
            return res
              .status(409)
              .json({ message: "An account with this email already exists" });
          }
        const newAgent = new Agents({
            name,
            email,
            password,
            phone,
            city,
            address,
            services
        });
        await newAgent.save();
        res.status(200).json("Account created successfully");
    }
}
