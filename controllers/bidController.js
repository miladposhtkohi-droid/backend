const Bid = require("../models/Bid");
const Project = require("../models/Project");

// Skapa en ny bud  
exports.createBid = async (req, res) => {
  try {
    const { projectId, amount, message } = req.body;
    const companyId = req.user.id;

    // Kontrollera att projektet finns
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Skapa det nya budet
   const bid = await Bid.create({
      project: projectId,
      company: companyId,
      amount,
      message,
    });

    await bid.save();
    res.status(201).json({ message: "Bid created successfully", bid });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Customer hämta alla bud för ett specifikt projekt
exports.getBidsByProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const bids = await Bid.find({ project: projectId }).populate("company", "name email");
    res.status(200).json({ message: "Bids retrieved successfully", bids });
  }
    catch (error) { 
    res.status(500).json({ message: error.message });
  }
};
//company hämta alla bud som de har lagt
exports.getBidsByCompany = async (req, res) => {
  try {
    const companyId = req.user.id;
    const bids = await Bid.find({ company: companyId }).populate
    ("project", "title description");
    res.status(200).json({ message: "Bids retrieved successfully", bids });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};