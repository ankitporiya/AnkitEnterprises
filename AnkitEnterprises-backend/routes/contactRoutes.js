const express = require('express');
const router = express.Router();
const {
  createContact,
  getAllContacts,
  getContactById,
  updateContactStatus,
  deleteContact
} = require('../controllers/contactController');
const { contactValidation, handleValidationErrors } = require('../middleware/validation');

// Public route - Create contact
router.post('/', contactValidation, handleValidationErrors, createContact);

// Admin routes (you can add authentication middleware later if needed)
router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.put('/:id/status', updateContactStatus);
router.delete('/:id', deleteContact);

module.exports = router;