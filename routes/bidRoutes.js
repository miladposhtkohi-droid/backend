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

//company lägger bud
router.post("/", protect, onlyCompany, createBid);
//customer hämtar alla bud för ett specifikt projekt
router.get("/project/:projectId", protect, onlyCustomer, getBidsByProject);
//company hämtar alla bud som de har lagt
router.get("/company", protect, onlyCompany, getBidsByCompany);

module.exports = router;
