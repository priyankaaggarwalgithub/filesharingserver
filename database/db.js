import mongoose from "mongoose";

const DBConnection = async () => {
  const MONGODB_URI = `mongodb://admin:admin@ac-9eolsil-shard-00-00.azqgkar.mongodb.net:27017,ac-9eolsil-shard-00-01.azqgkar.mongodb.net:27017,ac-9eolsil-shard-00-02.azqgkar.mongodb.net:27017/?ssl=true&replicaSet=atlas-eop64n-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.error(`Error while connecting with databse `, error.message);
  }
};

export default DBConnection;
