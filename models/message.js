const mongoose = require("mongoose");
const validator = require("validator");

const messageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email Address");
      }
    },
  },
  phone: {
    type: Number,
    required: true,
    min: 10,
    Max: 10,
  },
  message: {
    type: String,
    required: true,
    minLength: 3,
  },
  date:{
      type: Date,
      default: Date.now
  }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
