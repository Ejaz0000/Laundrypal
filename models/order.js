import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
  client: { type: String },
  clientEmail: { type: String},
  clientPhone: { type: String},
  clientLocation: { type: String ,default:"" },
  clientImg: { type: String},
  agent: { type: String },
  forwash: [{}],
  fordryclean: [{}],
  foriron: [{}],
  forwashiron: [{}],
  fordryiron: [{}],
  cost: { type: String }

  
});

const Orders = mongoose.models.orders || mongoose.model("orders", ordersSchema);

export default Orders;
