const { default: mongoose } = require("mongoose");
require ("dotenv").config();

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Database error");
  }
};

//PORT = 8080;
//MONGODB_URL ="mongodb+srv://edwinonyango:5056@zeenet.rqrvlgb.mongodb.net/?retryWrites=true&w=majority";
//JWT_SECRET = "omollodev";

//CLOUDINARY
//CLOUD_NAME =
//API_KEY =
//API_SECRET =
//GITHUBPERSONALACCESSTOKEN ="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";

module.exports = dbConnect;
