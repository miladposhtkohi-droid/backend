exports.onlyCompany = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not authorized, no user" });
  }
  // check if user is company
  if (req.user.role !== "company") {
    return res.status(403).json({ message: "Access denied, company only" });
  }
};
