const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
  try {
    console.log("protect middleware start");
    let token;

    // Check if token exists in headers
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    console.log("token:", token);

    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded:", decoded);

    // Get user from database
    req.user = await User.findById(decoded.id).select("-password");
    console.log("req.user:", req.user);
    // Continue to next middleware
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
};
