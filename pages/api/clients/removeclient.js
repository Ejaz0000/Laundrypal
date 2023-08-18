import mongoose from "mongoose";
import connect from "../../../database/connect";
import Orders from "../../../models/order";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    await connect.connect();
    const {id} = req.body;
    
    const orderdelete = await Orders.findByIdAndDelete(id);
    if (!orderdelete) {
        return res.status(404).json({ message: 'Item not found' });
      }
     else{
      return res.status(200).json({ message: 'Item deleted successfully' })
     }
    
    
  }
}
