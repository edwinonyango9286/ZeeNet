const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Database Error");
  }
};

module.exports = dbConnect;


// # Connection to the database
// PORT = 8000
// MONGODB_URL="mongodb+srv://ookoedwin29:50569286@zeenet.fnwyzxo.mongodb.net/?retryWrites=true&w=majority&appName=ZeeNet"
// JWT_SECRET="dev@git~init"

// # Email configurations
// MAIL_ID="technologieszeenet@gmail.com"
// MP="cpnt qdva rpsh vdsq"

// # Cloudinary configurations
// CLOUD_NAME="dem7gpfhh"
// API_KEY="735559773893977"
// API_SECRET="Mzv3BmxU-6eG_Pl8yYrFndTxSzE"
