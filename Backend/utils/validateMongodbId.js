const mongoose = require("mongoose");
//VALIDATE MONGODBID FUNCTIONALITY
const validateMongodbId = (id) => {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
        throw new Error("Id is not valid")
    }
    
}

module.exports = validateMongodbId;