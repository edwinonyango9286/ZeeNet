const jwt = require("jsonwebtoken");

//GENERATE REFRESH TOKEN 
const generateRefreshToken = (id) => {
        return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
}

module.exports = {generateRefreshToken};
