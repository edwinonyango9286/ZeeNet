const mongoose = require('mongoose');


var brandSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        index: true,
        trim: true,
        minlength: 2,
        maxlength: 16,
        lowercase: true,
    },

},
    { timestamps: true }
);


module.exports = mongoose.model('Brand', brandSchema);