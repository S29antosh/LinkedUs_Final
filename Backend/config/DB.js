import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/jobs";

const connect = () => {
  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connected to the database!");
    })
    .catch((error) => {
      console.log("Cannot connect to the database!", error);
      process.exit();
    });
};

export default connect;
