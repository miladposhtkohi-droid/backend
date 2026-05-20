exports.onlyAdmin = (req, res, next) => {
  
  //check if protect added req.user
  if (!req.user) {
    return res.status(401).json({ message: "Not authorized, no user" });
  }
  // check if user is admin
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied, admin only" });
  }

  next();



};