const { Router } = require("express");
const { User, otp, cart, order } = require("../db/users");
const JWT = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;
const router = Router();
const auth = require("../middleware/auth");
const OTP = require("../middleware/otp");
const authMiddleware = require("../middleware/auth");
const { sendMail, hashPassword, compareHashed } = require("../services");
const { code } = require("../services");

router.get("/", function (req, res) {
  res.send("Welcome you reached user route");
});
router.post("/signup", async function (req, res) {
  console.log(firstname + " " + email + " " + password);
  const userExist = await User.findOne({ email: email });
  if (userExist) {
    res.status(500).send({ message: "User Already exists..." });
  } else {
    try {
      password = hashPassword(password);
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
        message: "User signup successfully",
        token: token,
      });
    } catch (error) {
      res.status(503).send("Check your network connection..");
    }
  }
});
router.get("/auth", OTP, async function (req, res) {
  console.log(req.user);
  res.send({ message: "User created successfully", user: req.user });
});
router.post("/signin", async function (req, res) {
  let { email, password } = req.body;
  const userExist = await User.findOne({ email: email });

  if (userExist) {
    if (compareHashed(password, userExist.password)) {
      const token = JWT.sign({ UserId: userExist._id }, JWT_KEY);
      res.status(200).send({
        message: "User logged in successfully...",
        token: token,
      });
    } else {
      res.status(401).send("Wrong  password");
    }
  } else {
    res.status(401).send("Invalid credentials");
  }
});

router.get("/authlogin", authMiddleware, async function (req, res) {
  res.send({ message: "User verified successfully", userId: req.userId });
});

router.post("/address", async (req, res) => {
  const user = await order.create(req.body.item);
  await User.findByIdAndUpdate({ _id: user.User }, { order: user._id });
  res.send(user);
});

router.get("/order/:id", async (req, res) => {
  const { id } = req.params;
  const item = await order.findOne({ User: id });
  res.json(item);
});
router.get("/:id", async function (req, res) {
  const { id } = req.params;
  const user = await User.findOne({ _id: id }).populate("order");
  res.send(user);
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
exports.resetPasswordRequest = async (req, res) => {
  const email = req.body.email;
  const user = await User.findOne({ email: email });
  if (user) {
    const token = crypto.randomBytes(48).toString("hex");
    user.resetPasswordToken = token;
    await user.save();

    // Also set token in email
    const resetPageLink =
      "http://localhost:5173/reset-password?token=" + token + "&email=" + email;
    const subject = "Reset  your Shopeasy password ";
    const html = `<a href="https://ibb.co/VQHrH5R"><img src="https://i.ibb.co/0FB8BvT/Logo-for-e-Commerce-website-shopeasy-1.jpg" alt="Logo-for-e-Commerce-website-shopeasy-1" border="0" style="height:60px; border-radius: 50%;"></a>
    <h2>Hi ${email} user....</h2>
    <h3>We got a request to reset your Shopeasy account password</h3>
    <button
      style="
      background-color: #36A9AE;
      color: #FFFFFF;
  background-image: linear-gradient(#37ADB2, #329CA0);
  border: 1px solid #2A8387;
  border-radius: 4px;
  cursor: pointer;
  font-family: -apple-system,Helvetica Neue,Helvetica,Arial;
  font-size: 17px;
  line-height: 100%;
  padding: 11px 15px 12px;
  text-align: center;
      "
    >
    <a href=${resetPageLink} style="color: #FFFFFF;">Reset password</a> 
    </button>
    <p>if you ignore this message your password will not be changed......</p>`;

    if (email) {
      const response = await sendMail({ to: email, subject, html });
      res.json(response);
    } else {
      res.sendStatus(400);
    }
  } else {
    res.sendStatus(400);
  }
};
