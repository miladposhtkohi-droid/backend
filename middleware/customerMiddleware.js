exports.onlyCustomer = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not authorized, no user" });
  }
  // check if user is customer
  if (req.user.role !== "customer") {
    return res.status(403).json({ message: "Access denied, customer only" });
  }
};
