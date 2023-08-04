import mongoose from "mongoose";
import connect from "../../../database/connect";
import Items from "../../../models/items";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connect.connect();

    const {email} = req.body;
    const items = await Items.findOne({email: email});
    if (items) {
      res.status(200).json(items);
    } else {
      res.status(409).json({ message: "Something went wrong"});
    }
  }
}
