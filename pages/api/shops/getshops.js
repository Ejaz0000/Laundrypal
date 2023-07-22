import mongoose from "mongoose";
import connect from "../../../database/connect";
import Agents from "../../../models/agent";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connect.connect();
    const {search,sortby} = req.body;
    if(sortby==="recent"){
      const agents = await Agents.find({
        $or: [
          { name: { $regex: search, $options: "i" } },
          
          { city: { $regex: search, $options: "i" } }
        ]
      });
      if (agents) {
        res.status(200).json(agents.reverse());
      } else {
        res.status(409).json({ message: "Something went wrong"});
      }
    }
    else if(sortby==="view"){
      const agents = await Agents.find({
        $or: [
            { name: { $regex: search, $options: "i" } },
            
            { city: { $regex: search, $options: "i" } }
        ]
      }).sort({views:-1});
      if (agents) {
        res.status(200).json(agents);
      } else {
        res.status(409).json({ message: "Something went wrong"});
      }
    }
    
  }
}
