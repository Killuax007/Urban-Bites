const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  firstname: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
  otp: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "otp",
  },
  cart: { type: mongoose.Schema.Types.ObjectId, ref: "cart" },
  order: { type: mongoose.Schema.Types.ObjectId, ref: "order" },
});
const otpSchema = mongoose.Schema({
  otp: { type: String },
  expiration: { type: Date, default: Date.now, expires: 86400 },
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
const foodSchema = mongoose.Schema({
  id: { type: Number },
  name: { type: String },
  img: { type: String },
  category: { type: String },
  Rating: { type: Number },
});

const cartSchema = mongoose.Schema({
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  foods: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "foods",
    required: true,
    unique: true,
  },
});
const orderSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  phone: { type: String, unique: true },
  street: { type: String },
  city: { type: String },
  state: { type: String },
  pincode: { type: String },
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  items: { type: [mongoose.Schema.Types.Mixed] },
});
const cart = mongoose.model("cart", cartSchema);
const order = mongoose.model("order", orderSchema);
const User = mongoose.model("User", userSchema);
const otp = mongoose.model("otp", otpSchema);
const foods = mongoose.model("foods", foodSchema);

module.exports = { User, otp, foods, cart, order };
