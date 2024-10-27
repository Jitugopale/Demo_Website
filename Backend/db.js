
const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/my-app")
    .then(() => console.log("DB Connected"))
    .catch((err) => console.error("DB Connection Error: ", err));
};

module.exports = connectDB;
