import mongoose from "mongoose";
function getDecimalNumber(val) {    return (val/1000000); }
function setDecimalNumber(val) {    return (val*1000000); }
const agentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  phone:{ type: String, required: true },
  city:{ type: String, required: true },
  services: { type: [String], default: [] },
  rating:{type: Number, default: 0.0, get: getDecimalNumber, set: setDecimalNumber},
  address: { type: String ,default:"" },
  imageUrl: { type: String ,default:"/images/agent.jpg" },
  
});

const Agents = mongoose.models.agents || mongoose.model("agents", agentSchema);

export default Agents;
