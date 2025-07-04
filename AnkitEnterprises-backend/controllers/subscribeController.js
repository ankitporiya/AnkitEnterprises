const Subscribe = require("../models/Subscribe");

const subscribeUser = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if email is provided
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // // Check for valid email format (optional if schema already validates)
    // const emailRegex = /\S+@\S+\.\S+/;
    // if (!emailRegex.test(email)) {
    //   return res.status(400).json({ message: 'Invalid email format' });
    // }

    // Save email to database
    const subscription = new Subscribe({ email });
    await subscription.save();

    res.status(200).json({ message: "Subscribed successfully" });
  } catch (err) {
    // Handle duplicate email error
    if (err.code === 11000) {
      return res.status(409).json({ message: "Email is already subscribed" });
    }
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// GET /subscriptions
const getAllSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscribe.find().sort({ subscribedAt: -1 });
    res.status(200).json(subscriptions);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch subscriptions", error: err.message });
  }
};

// DELETE /subscription/:id
const deleteSubscriptionById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Subscribe.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Subscription not found" });
    }
    res.status(200).json({ message: "Subscription deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete subscription", error: err.message });
  }
};

// DELETE /subscriptions
const deleteAllSubscriptions = async (req, res) => {
  try {
    await Subscribe.deleteMany({});
    res.status(200).json({ message: "All subscriptions deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Failed to delete all subscriptions",
        error: err.message,
      });
  }
};

module.exports = {
  subscribeUser,
  getAllSubscriptions,
  deleteSubscriptionById,
  deleteAllSubscriptions,
};
