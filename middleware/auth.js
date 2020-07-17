const jwt = require("jsonwebtoken");
const config = require("config");

const auth = (req, res, next) => {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if token exists
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    const decodedToken = jwt.verify(token, config.get("jwtToken"));
    req.user = decodedToken;
    next();
  } catch (e) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = auth;
