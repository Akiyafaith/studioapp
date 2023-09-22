const express = require('express');
const router = express.Router();
const studioController = require('../controllers/studioController');

// Define API endpoints for studios
router.get('/studios', studioController.getAllStudios);
router.get('/studios/:id', studioController.getStudioById);
router.post('/studios', studioController.createStudio);
router.put('/studios/:id', studioController.updateStudio);
router.delete('/studios/:id', studioController.deleteStudio);

module.exports = router;
