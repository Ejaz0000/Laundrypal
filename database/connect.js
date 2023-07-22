import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://ejahmed999:ejahmed999@cluster0.vxnzixt.mongodb.net/"

async function connect() {
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = { connect };

