const mongoose = require("mongoose");

const validateMongodbId = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) {
    throw new Error("Id is not valid Id");
  }
};

module.exports = validateMongodbId;
