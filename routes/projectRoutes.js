const express = require("express");
const {protect} = require("../middleware/authMiddleware");
const {onlyCompany} = require("../middleware/companyMiddleware");
const {onlyCustomer} = require("../middleware/customerMiddleware");
const {getAllProjects , createProject, getMyProjects} = require("../controllers/projectController");

const router = express.Router();

router.get("/", protect ,onlyCompany, getAllProjects);
router.post("/", protect, onlyCustomer, createProject);
router.get("/my-projects", protect, onlyCustomer, getMyProjects);

//exportera router
module.exports = router;


