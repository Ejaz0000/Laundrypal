import mongoose from "mongoose";
import connect from "../../../database/connect";
import Users from "../../../models/users";

export default async function handler(req, res) {
    if(req.method === "POST") {
        await connect.connect();
        const { name, email, password, phone, city } = req.body;
        const existingUser = await Users.findOne({
            $or: [{ email }],
          });
      
          if (existingUser) {
            return res
              .status(409)
              .json({ message: "An account with this email already exists" });
          }
        const newUser = new Users({
            name,
            email,
            password,
            phone,
            city
        });
        await newUser.save();
        res.status(200).json("Account created successfully");
    }
}
