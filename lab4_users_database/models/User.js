const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter full name"],
    trim: true,
  },
  username: {
    type: String,
    required: [true, "Please enter username"],
    trim: true,
    lowercase: true,
    minlength: 4,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
    validate: function (value) {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    },
  },
  address: {
    street: {
      type: String,
      required: [true, "Please enter city"],
    },
    suite: {
      type: String,
      required: [true, "Please enter suite"],
      trim: true,
    },
  },
  city: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: function (value) {
      var cityRegex = /^[a-zA-Z ]*$/;
      return cityRegex.test(value);
    },
  },
  zipcode: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: function (value) {
      var zipcodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
      return zipcodeRegex.test(value);
    },
  },
  geo: {
    lat: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },
  },
  phone: {
    type: Number,
    required: true,
    validate: function (value) {
      var phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
      return phoneRegex.test(value);
    },
  },
  website: {
    type: String,
    required: true,
    format: "uri",
    pattern: /^(https?|wss?|ftp):/,
  },
  company: {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    catchPhrase: { type: String, required: true, trim: true },
    bs: { type: String, required: true, trim: true },
  },
});

UserSchema.post("init", (doc) => {
  console.log("%s has been initialized from the db", doc._id);
});

UserSchema.post("validate", (doc) => {
  console.log("%s has been validated (but not saved yet)", doc._id);
});

UserSchema.post("save", (doc) => {
  console.log("%s has been saved", doc._id);
});

UserSchema.post("remove", (doc) => {
  console.log("%s has been removed", doc._id);
});

const User = mongoose.model("User", UserSchema);
module.exports = User;


