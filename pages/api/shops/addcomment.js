import mongoose from "mongoose";
import connect from "../../../database/connect";
import Comments from "../../../models/comments";

export default async function handler(req, res) {
    if(req.method === "POST") {
        await connect.connect();
        const { client, clientEmail, agent, comment } = req.body;
        
        const newComment = new Comments({
            client,
            clientEmail,
            agent,
            comment
            
        });
        await newComment.save();
        const comments = await Comments.find();
    if (comments) {
      res.status(200).json({message: "Comment added successfully"});
    } else {
      res.status(409).json({ message: "Something went wrong"});
    }
        
    }
}
