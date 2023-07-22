import mongoose from "mongoose";
import connect from "../../../database/connect";
import Users from "../../../models/users";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connect.connect();
    const {name} = req.body;
    const existingUser = await Users.findOne({name:name});
    if (existingUser) {
      res.status(200).json(existingUser);
    } else {
      res.status(409).json({ message: "Invalid user"});
    }
  }
}
