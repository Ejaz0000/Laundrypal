import mongoose from "mongoose";
import connect from "../../../database/connect";
import Agents from "../../../models/agent";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connect.connect();

    const {email} = req.body;
    const agent = await Agents.findOne({email: email});
    if (agent) {
      res.status(200).json(agent);
    } else {
      res.status(409).json({ message: "Something went wrong"});
    }
  }
}
