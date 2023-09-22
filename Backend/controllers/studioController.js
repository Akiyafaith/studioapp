const Studio = require('../models/Studio');

// Controller functions for studios
exports.getAllStudios = async (req, res) => {
  try {
    const studios = await Studio.findAll();
    res.json(studios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get a specific studio by ID
exports.getStudioById = async (req, res) => {
  try {
    const { id } = req.params;
    const studio = await Studio.findByPk(id);

    if (!studio) {
      return res.status(404).json({ message: 'Studio not found' });
    }

    res.json(studio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Create a new studio
exports.createStudio = async (req, res) => {
  try {
    const { name, description, cost, location } = req.body;
    const newStudio = await Studio.create({ name, description, cost, location });
    res.status(201).json(newStudio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update an existing studio by ID
exports.updateStudio = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const studio = await Studio.findByPk(id);

    if (!studio) {
      return res.status(404).json({ message: 'Studio not found' });
    }

    studio.name = name;
    studio.description = description;
    await studio.save();

    res.json(studio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete an existing studio by ID
exports.deleteStudio = async (req, res) => {
  try {
    const { id } = req.params;
    const studio = await Studio.findByPk(id);

    if (!studio) {
      return res.status(404).json({ message: 'Studio not found' });
    }

    await studio.destroy();
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
