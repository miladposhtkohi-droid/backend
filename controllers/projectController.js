const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  try {
    console.log("createProject körs");
    console.log("BODY:", req.body);

    // ta emot data från req.body
    const { title, description, category, budget, address, images } = req.body;
    //använda req.user.id för att hitta användaren
    const customer = req.user.id;
    //skapa projekt
    const project = await Project.create({
      title,
      description,
      category,
      budget,
      address,
      images,
      customer,
    });
    //skicka svar
    res.status(201).json({
      message: "Project created successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json({
      message: "Projects retrieved successfully",
      projects,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

exports.getMyProjects = async (req, res) => {
  try {
    const projects = await Project.find({ customer: req.user.id });
    res.status(200).json({
      message: "Projects retrieved successfully",
      projects,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
