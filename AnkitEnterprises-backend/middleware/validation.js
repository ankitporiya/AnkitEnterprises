const { body, validationResult } = require("express-validator");

const contactValidation = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters")
    .trim()
    .escape(),

  body("email")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail()
    .trim(),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required")
    .matches(/^\d{10}$/)
    .withMessage("Phone number must be a valid 10-digit number"),

  body("subject")
    .notEmpty()
    .withMessage("Subject is required")
    .isLength({ min: 5, max: 200 })
    .withMessage("Subject must be between 5 and 200 characters")
    .trim()
    .escape(),

  body("message")
    .notEmpty()
    .withMessage("Message is required")
    .isLength({ min: 10, max: 1000 })
    .withMessage("Message must be between 10 and 1000 characters")
    .trim()
    .escape(),

  body("language")
    .optional()
    .isIn(["english", "gujarati"])
    .withMessage("Language must be either english or gujarati"),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: errors.array(),
    });
  }
  next();
};

module.exports = {
  contactValidation,
  handleValidationErrors,
};
