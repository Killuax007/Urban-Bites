const speakeasy = require("speakeasy");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const bycrypt = require("bcrypt");

const saltRounds = 12;
const secret = speakeasy.generateSecret({ length: 2 });
exports.code = speakeasy.totp({
  secret: secret.base32,
  encoding: "base32",
});

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL,
    pass: process.env.MAIL_PASSWORD,
  },
});

exports.sendMail = async function ({ to, subject, text, html }) {
  let info = await transporter.sendMail({
    from: '"Urban-Bites" <urbanbites07@gmail.com>',
    to,
    subject,
    text,
    html,
  });
  return info;
};

exports.hashPassword = function (password) {
  const salt = bycrypt.genSaltSync(saltRounds);
  return bycrypt.hashSync(password, salt);
};

exports.compareHashed = function (plain, hashed) {
  return bycrypt.compareSync(plain, hashed);
};
