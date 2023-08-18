import mongoose from "mongoose";

const acceptedOrdersSchema = new mongoose.Schema({
  client: { type: String },
  clientEmail: { type: String },
  clientPhone: { type: String },
  agent: { type: String },
  agentEmail: { type: String },
  pickup: { type: String },
  delivery: { type: String },
  
  
});

const AcceptedOrders = mongoose.models.acceptedOrders || mongoose.model("acceptedOrders", acceptedOrdersSchema);

export default AcceptedOrders;
