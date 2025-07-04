const express = require('express');
const router = express.Router();
const { subscribeUser, getAllSubscriptions,
  deleteSubscriptionById,
  deleteAllSubscriptions } = require('../controllers/subscribeController');

// POST route to handle email subscription
router.post('/', subscribeUser);

// Admin routes – for managing subscriptions
router.get('/all', getAllSubscriptions);         // Get all subscribed emails
router.delete('/all', deleteAllSubscriptions);   // Delete all subscriptions
router.delete('/:id', deleteSubscriptionById);   // Delete a specific subscription by ID

module.exports = router;
