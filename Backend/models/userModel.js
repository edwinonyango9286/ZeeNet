const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const {
  Schema,
  Types: { ObjectId },
} = require("mongoose");
const crypto = require("crypto");

var userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 16,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (value) {
          return /^[a-zA-Z\s]+$/.test(value);
        },
        message: "Name should only contain letters and whitespaces",
      },
    },
    lastname: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 16,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (value) {
          return /^[a-zA-Z\s]+$/.test(value);
        },
        message: "Name should only contain letters and whitespaces",
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, "Please provide a valid email address"],
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      maxlength:[10],
      minlength:[10],
    },
    password: {
      type: String,
      required: true,
      // minlength: [8, "Password must be at least 8 characters long"],
      // maxlength: [16, "Password must be less than 16 characters long"],
      // validate: {
      //   validator: function(value) {
      //     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/.test(value);
      //   },
      //   message: 'Password must be between 8 and 16 characters long, and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.'
      // }
    },
    role: {
      type: String,
      default: "user",
      lowercase: true,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    cart: {
      type: Array,
      default: [],
    },
    address: {
      type: String,
      default: null,
    },
    wishlist: [
      {
        type: ObjectId,
        ref: "Product",
      },
    ],
    refreshToken: {
      type: String,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },

  { timestamps: true }
);

// Because of the  pre() method this piece of code is going to be executed before the user is saved in the database.
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.isPasswordMatched = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.createPasswordResetToken = async function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetExpires = Date.now() + 30 * 60 * 1000;
  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
