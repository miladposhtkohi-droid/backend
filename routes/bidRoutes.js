const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { onlyCompany } = require("../middleware/companyMiddleware");
const { onlyCustomer } = require("../middleware/customerMiddleware");
const {
  createBid,
  getBidsByProject,
  getBidsByCompany,
} = require("../controllers/bidController");

const router = express.Router();

//company hämtar alla bud som de har lagt (MÅSTE vara före /:projectId!)
router.get("/company", protect, onlyCompany, getBidsByCompany);
//company lägger bud
router.post("/", protect, onlyCompany, createBid);
//customer hämtar alla bud för ett specifikt projekt
router.get("/:projectId", protect, onlyCustomer, getBidsByProject);

module.exports = router;
