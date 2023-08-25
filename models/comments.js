import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({
  client: { type: String },
  clientEmail: { type: String},
  agent: { type: String },
  comment: { type: String }

  
});

const Comments = mongoose.models.comments || mongoose.model("comments", commentsSchema);

export default Comments;
