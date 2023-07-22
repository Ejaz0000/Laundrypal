import mongoose from "mongoose";
import connect from "../../../database/connect";
import Agents from "../../../models/agent";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connect.connect();
    const {email, password} = req.body;
    const existingAgent = await Agents.findOne({email:email , password:password});
    if (existingAgent) {
      res.status(200).json(existingAgent);
    } else {
      res.status(409).json({ message: "Invalid username or password"});
    }
  }
}
