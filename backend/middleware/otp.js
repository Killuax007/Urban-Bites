const { otp, User } = require("../db/users");

const OTP = async (req, res, next) => {
  const code = req.query.otp;
  console.log(code);
  const extractedOtp = await otp.findOne({ otp: code });

  try {
    if (extractedOtp.otp === code) {
      const user = await User.findOne({ otp: extractedOtp._id });
      req.user = user;
      next();
    }
  } catch (error) {
    res.status(500).send({ message: "Sorry bro !!!!!.... Invalid Otp" });
  }
};
module.exports = OTP;
