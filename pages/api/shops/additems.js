import mongoose from "mongoose";
import connect from "../../../database/connect";
import Items from "../../../models/items";

export default async function handler(req, res) {
    if(req.method === "POST") {
        await connect.connect();
        const { name, email, shirt, top, bottom, suit, dress, child , bedsheet } = req.body;
        
        const newItems = new Items({
            name,
            email,
            shirt,
            top,
            bottom,
            suit,
            dress,
            child,
            bedsheet,
            
        });
        await newItems.save();
        const existingItems = await Items.findOne({
            $or: [{ email }],
          });
      
          if (existingItems) {
            res.status(200).json({message: "Added successfully"}); ;
          }
            else {
                  res.status(409).json({ message: "Something went wrong"});
    }
        
    }
}
