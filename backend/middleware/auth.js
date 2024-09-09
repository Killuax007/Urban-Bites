const JWT = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;

const authMiddleware = async (req, res, next) => {
  const extractedToken = req.headers.authorization.split(" ")[1];
  if (!extractedToken) {
    res
      .status(500)
      .send({ message: "wtf ...!!! where your goddamn token you MF ..." });
  }
  try {
    const response = JWT.verify(extractedToken, JWT_KEY);
    req.userId = response.UserId;
    next();
  } catch (error) {
    res.status(403).send({ message: error.message });
  }
};
module.exports = authMiddleware;
