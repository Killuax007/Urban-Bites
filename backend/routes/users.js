const { Router } = require("express");
const { User, otp, foods, cart, order } = require("../db/users");
const zod = require("zod");
const JWT = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;
const router = Router();
const auth = require("../middleware/auth");
const OTP = require("../middleware/otp");
const { sendMail } = require("../services");
const { code } = require("../services");

const signUpSchema = zod.object({
  firstname: zod.string(),
  email: zod.string().email(),
  password: zod.string(),
});
const signinSchema = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});
router.get("/", function (req, res) {
  res.send("Welcome you reached user route");
});
router.post("/signup", async function (req, res) {
  const { firstname, email, password } = req.body;
  const { success } = signUpSchema.safeParse({ firstname, email, password });
  const userExist = await User.findOne({ email: email });
  if (!success && userExist) {
    res.status(500).send({ message: "Invalid credentials..." });
  } else {
    try {
      const refOtp = await otp.create({ otp: code });
      const response = await User.create({
        firstname,
        email,
        password,
        otp: refOtp._id,
      });
      const userId = response._id;
      const token = JWT.sign({ UserId: userId }, JWT_KEY);
      const subject = "OTP Verification code for Urban-Bites ";
      const html = `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
      <div style="margin:20px auto;width:70%;padding:20px 0">
      <a href="" ><img src="https://i.ibb.co/yQfz8B1/IMG-20240818-153158-007.jpg" alt="IMG-20240818-153158-007" border="0" style="border-radius:50%; height:50px; "></a>
        <div style="display:flex; justify-content:space-between; border-bottom:1px solid #eee">
          <a href="" style="font-size:2.4em;color: #00466a;text-decoration:none;font-weight:600">Urban-Bites</a>
          
        </div>
        <p style="font-size:1.1em">Hi User,</p>
        <p style="font-size:1.4em font-weight:300">${email}</p>
        <p> Use the following OTP to complete your Sign Up procedures. OTP is valid for 5 minutes</p>
        <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${code}</h2>
        <p style="font-size:0.9em;">Regards,<br />Urban-Bites</p>
        <hr style="border:none;border-top:1px solid #eee" />

      </div>
    </div>`;

      await sendMail({
        to: email,
        subject,
        html,
      });
      res.send({
        response,
        message: "User signup successfully",
        token: token,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Check your network connection..");
    }
  }
});
router.post("/signin", async function (req, res) {
  const { email, password } = req.body;
  const { success } = signinSchema.safeParse({ email, password });
  const userExist = await User.findOne({ email: email });
  const token = JWT.sign({ UserId: userExist._id }, JWT_KEY);

  if (success && userExist && userExist.password == password) {
    res.status(200).send({
      message: "User logged in successfully...",
      token: token,
      id: userExist._id,
    });
  } else {
    res.status(500).send({ message: "Invalid credentials....." });
  }
});

router.get("/auth", OTP, async function (req, res) {
  console.log(req.user);
  res.send({ message: "User signin successfully", user: req.user });
});
router.get("/:id", async function (req, res) {
  const { id } = req.params;
  const user = await User.findOne({ _id: id }).populate("order");
  res.send(user);
});

router.get("/foods", async (req, res) => {
  const Food = await foods.find();
  res.send(Food);
});
router.post("/address", async (req, res) => {
  const user = await order.create(req.body.item);
  await User.findByIdAndUpdate({ _id: user.User }, { order: user._id });
  res.send(user);
});

router.get("/foods/:id", async (req, res) => {
  const { id } = req.params;
  const Food = await foods.findOne({ id: Number(id) });
  res.send(Food);
});
router.get("/order/:id", async (req, res) => {
  const { id } = req.params;
  const item = await order.findOne({ User: id });
  res.json(item);
});

router.post("/cart", async (req, res) => {
  const { User, foods } = req.body.item;
  try {
    const result = await cart.create({ User: User, foods: foods });

    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.get("/carts/:id", async (req, res) => {
  const { id } = req.params;
  const result = await cart.find({ User: id }).populate("foods");
  res.json(result);
});
router.delete("/carts/:id", async (req, res) => {
  const { id } = req.params;
  const result = await cart.deleteOne({ _id: id });
  res.json(result);
});
module.exports = router;
