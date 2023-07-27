const mongoose = require("mongoose");

var enquirySchema = new mongoose.Schema({

    name:{
        type:String,
        required:true, 
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
    },
    comment:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"Submitted",
        enum:["Submitted","Contacted","In Progress","Resolved"],
    }

})

module.exports = mongoose.model("Enquiry",enquirySchema);