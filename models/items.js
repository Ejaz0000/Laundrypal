import mongoose from "mongoose";

const itemsSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true},
  shirt: {
    name: { type: String },
    wash: { type: String },
    dryClean: { type: String },
    iron: { type: String },
  },

  top: {
    name: { type: String },
    wash: { type: String },
    dryClean: { type: String },
    iron: { type: String },
  },

  bottom: {
    name: { type: String },
    wash: { type: String },
    dryClean: { type: String },
    iron: { type: String },
  },

  suit: {
    name: { type: String },
    wash: { type: String },
    dryClean: { type: String },
    iron: { type: String },
  },

  dress: {
    name: { type: String },
    wash: { type: String },
    dryClean: { type: String },
    iron: { type: String },
  },

  child: {
    name: { type: String },
    wash: { type: String },
    dryClean: { type: String },
    iron: { type: String },
  },

  bedsheet: {
    name: { type: String },
    wash: { type: String },
    dryClean: { type: String },
    iron: { type: String },
  }



  



  
});

const Items = mongoose.models.items || mongoose.model("items", itemsSchema);

export default Items;
