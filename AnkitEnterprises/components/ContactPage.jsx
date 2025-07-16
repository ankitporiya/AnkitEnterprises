













import React, { useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react";
import { useLanguage } from "./Navbar";

const ContactPage = () => {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (error) {
      setError("");
    }
    // Clear specific field error when user starts typing
    if (fieldErrors[e.target.name]) {
      setFieldErrors({
        ...fieldErrors,
        [e.target.name]: ""
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setFieldErrors({});
    
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
      const response = await fetch(`${baseUrl}/api/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          language: language
        }),
      });
      
      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        }, 3000);
      } else {
        // Check if there are specific field errors
        if (data.errors && Array.isArray(data.errors)) {
          const errors = {};
          data.errors.forEach(error => {
            if (error.path) {
              errors[error.path] = error.msg;
            }
          });
          setFieldErrors(errors);
        } else {
          setError(data.message_confirmation || 'Failed to send message');
        }
      }
    } catch (error) {
      // console.error('Network error:', error);
      setError("Network error, please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const translations = {
    english: {
      title: "Contact Us",
      getInTouch: "Get In Touch",
      email: "Email",
      phone: "Phone",
      address: "Address",
      sendMessage: "Send us a Message",
      name: "Name",
      namePlaceholder: "Your Name",
      emailPlaceholder: "your@email.com",
      phonePlaceholder: "Your Phone Number",
      subject: "Subject",
      subjectPlaceholder: "What's this about?",
      message: "Message",
      messagePlaceholder: "Tell us about your project...",
      sendBtn: "Send Message",
      sendingBtn: "Sending...",
      messageSent: "Message Sent!",
      thankYou: "Thank you for reaching out. We'll get back to you soon.",
      connectWith: "Connect with us",
      errorMessage: "Something went wrong. Please try again.",
    },
    gujarati: {
      title: "સંપર્ક કરો",
      getInTouch: "સંપર્ક કરો",
      email: "ઇમેઇલ",
      phone: "ફોન",
      address: "સરનામું",
      sendMessage: "અમને સંદેશ મોકલો",
      name: "નામ",
      namePlaceholder: "તમારું નામ",
      emailPlaceholder: "તમારી@ઇમેઇલ.com",
      phonePlaceholder: "તમારો ફોન નંબર",
      subject: "વિષય",
      subjectPlaceholder: "આ શેના વિશે છે?",
      message: "સંદેશ",
      messagePlaceholder: "તમારા પ્રોજેક્ટ વિશે જણાવો...",
      sendBtn: "સંદેશ મોકલો",
      sendingBtn: "મોકલી રહ્યા છીએ...",
      messageSent: "સંદેશ મોકલાયો!",
      thankYou: "સંપર્ક કરવા બદલ આભાર. અમે જલ્દીથી તમને જવાબ આપીશું.",
      connectWith: "અમારી સાથે જોડાઓ",
      errorMessage: "કંઈક ખોટું થયું. કૃપા કરીને ફરીથી પ્રયાસ કરો.",
    },
  };

  const t = translations[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      rotateX: 45,
      rotateY: 25,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      rotateX: 0,
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    hover: {
      rotateY: 5,
      rotateX: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
        }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #d9b061 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div className="text-center mb-8 sm:mb-12 lg:mb-16" variants={itemVariants}>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 px-2"
            style={{
              color: "#3f0d0c",
              textShadow: "2px 2px 4px rgba(216, 208, 197, 0.3)",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {t.title}
          </motion.h1>
          <motion.div
            className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-7xl h-1 bg-gradient-to-r from-[#8d6f57] to-[#3f0d0c] mx-auto mb-6 sm:mb-8"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div className="backdrop-blur-sm space-y-6 sm:space-y-8" variants={itemVariants}>
            <motion.div
              className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/20"
              style={{
                background:
                  "linear-gradient(135deg, rgba(217, 176, 97, 0.1), rgba(217, 196, 169, 0.1))",
              }}
              variants={cardVariants}
              whileHover="hover"
            >
              <h2
                className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center sm:text-left"
                style={{ color: "#3f0d0c" }}
              >
                {t.getInTouch}
              </h2>

              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: Mail,
                    title: t.email,
                    translations: "ankitenterprises.group@gmail.com",
                    color: "#d9b061",
                  },
                  {
                    icon: Phone,
                    title: t.phone,
                    translations: "+91 8779556675",
                    color: "#d9c4a9",
                  },
                  {
                    icon: MapPin,
                    title: t.address,
                    translations: "Kurar Village, Malad East, Mumbai - 400097",
                    color: "#8d6f57",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start sm:items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl"
                    style={{ backgroundColor: "rgba(216, 208, 197, 0.1)" }}
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="p-2 sm:p-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-4 h-4 sm:w-5 lg:w-6 sm:h-5 lg:h-6 text-white" />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <h3
                        className="font-semibold text-sm sm:text-base lg:text-lg"
                        style={{ color: "#3f0d0c" }}
                      >
                        {item.title}
                      </h3>
                      <p style={{ color: "#8d6f57" }} className="text-xs sm:text-sm lg:text-base break-words">
                        {item.translations}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Media Cards */}
            <motion.div
              className="backdrop-blur-sm grid grid-cols-2 gap-3 sm:gap-4"
              variants={itemVariants}
            >
              {["LinkedIn", "Twitter"].map((platform, index) => (
                <motion.div
                  key={platform}
                  className="rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-xl border border-white/20 cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, rgba(${
                      index === 0 ? "217, 176, 97" : "141, 111, 87"
                    }, 0.15), rgba(216, 208, 197, 0.1))`,
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h3
                    className="font-bold text-sm sm:text-base lg:text-lg"
                    style={{ color: "#3f0d0c" }}
                  >
                    {platform}
                  </h3>
                  <p style={{ color: "#8d6f57" }} className="text-xs sm:text-sm">
                    {t.connectWith}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.form
              onSubmit={handleSubmit}
              className="backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/20 space-y-4 sm:space-y-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(217, 196, 169, 0.1), rgba(216, 208, 197, 0.1))",
              }}
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.h2
                className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center"
                style={{ color: "#3f0d0c" }}
              >
                {t.sendMessage}
              </motion.h2>

              {/* Error Message */}
              {error && (
                <motion.div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {error}
                </motion.div>
              )}

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <label
                    className="block font-semibold mb-2 text-sm sm:text-base"
                    style={{ color: "#3f0d0c" }}
                  >
                    {t.name}
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5"
                      style={{ color: "#8d6f57" }}
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-xl border-2 placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-all duration-300 text-sm sm:text-base"
                      style={{
                        backgroundColor: "rgba(216, 208, 197, 0.4)",
                        borderColor: fieldErrors.name ? "#ef4444" : "#8d6f57",
                        color: "#3f0d0c",
                      }}
                      placeholder={t.namePlaceholder}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  {fieldErrors.name && (
                    <motion.div
                      className="text-red-500 text-sm mt-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {fieldErrors.name}
                    </motion.div>
                  )}
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <label
                    className="block font-semibold mb-2 text-sm sm:text-base"
                    style={{ color: "#3f0d0c" }}
                  >
                    {t.email}
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5"
                      style={{ color: "#8d6f57" }}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-xl border-2 placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-all duration-300 text-sm sm:text-base"
                      style={{
                        backgroundColor: "rgba(216, 208, 197, 0.4)",
                        borderColor: fieldErrors.email ? "#ef4444" : "#8d6f57",
                        color: "#3f0d0c",
                      }}
                      placeholder={t.emailPlaceholder}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  {fieldErrors.email && (
                    <motion.div
                      className="text-red-500 text-sm mt-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {fieldErrors.email}
                    </motion.div>
                  )}
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
              >
                <label
                  className="block font-semibold mb-2 text-sm sm:text-base"
                  style={{ color: "#3f0d0c" }}
                >
                  {t.phone}
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5"
                    style={{ color: "#8d6f57" }}
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-xl border-2 placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-all duration-300 text-sm sm:text-base"
                    style={{
                      backgroundColor: "rgba(216, 208, 197, 0.4)",
                      borderColor: fieldErrors.phone ? "#ef4444" : "#8d6f57",
                      color: "#3f0d0c",
                    }}
                    placeholder={t.phonePlaceholder}
                    required
                    disabled={isLoading}
                  />
                </div>
                {fieldErrors.phone && (
                  <motion.div
                    className="text-red-500 text-sm mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {fieldErrors.phone}
                  </motion.div>
                )}
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
              >
                <label
                  className="block font-semibold mb-2 text-sm sm:text-base"
                  style={{ color: "#3f0d0c" }}
                >
                  {t.subject}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 sm:py-4 rounded-xl border-2 placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-all duration-300 text-sm sm:text-base"
                  style={{
                    backgroundColor: "rgba(216, 208, 197, 0.4)",
                    borderColor: fieldErrors.subject ? "#ef4444" : "#8d6f57",
                    color: "#3f0d0c",
                  }}
                  placeholder={t.subjectPlaceholder}
                  required
                  disabled={isLoading}
                />
                {fieldErrors.subject && (
                  <motion.div
                    className="text-red-500 text-sm mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {fieldErrors.subject}
                  </motion.div>
                )}
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
              >
                <label
                  className="block font-semibold mb-2 text-sm sm:text-base"
                  style={{ color: "#3f0d0c" }}
                >
                  {t.message}
                </label>
                <div className="relative">
                  <MessageSquare
                    className="absolute left-3 top-4 w-4 h-4 sm:w-5 sm:h-5"
                    style={{ color: "#8d6f57" }}
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-xl border-2 placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-all duration-300 resize-none text-sm sm:text-base"
                    style={{
                      backgroundColor: "rgba(216, 208, 197, 0.4)",
                      borderColor: fieldErrors.message ? "#ef4444" : "#8d6f57",
                      color: "#3f0d0c",
                    }}
                    placeholder={t.messagePlaceholder}
                    required
                    disabled={isLoading}
                  />
                </div>
                {fieldErrors.message && (
                  <motion.div
                    className="text-red-500 text-sm mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {fieldErrors.message}
                  </motion.div>
                )}
              </motion.div>

              <motion.button
                type="submit"
                className="w-full py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-bold text-white text-base sm:text-lg shadow-xl relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #d9b061, #d9c4a9)",
                  opacity: isLoading ? 0.7 : 1,
                }}
                whileHover={{
                  scale: isLoading ? 1 : 1.05,
                  boxShadow: "0 20px 40px rgba(217, 176, 97, 0.4)",
                }}
                whileTap={{ scale: isLoading ? 1 : 0.95 }}
                disabled={isLoading || isSubmitted}
              >
                <motion.div
                  className="flex items-center justify-center space-x-2"
                  animate={isSubmitted ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {isLoading || isSubmitted ? (
                    <>
                      <motion.div
                        className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <span>{isSubmitted ? t.messageSent : t.sendingBtn}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>{t.sendBtn}</span>
                    </>
                  )}
                </motion.div>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-opacity-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-r from-green-400 to-green-600 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl text-white text-center max-w-sm sm:max-w-md mx-4 w-full"
              initial={{ scale: 0, rotateY: 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0, rotateY: 180 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2 }}
              >
                <Send className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{t.messageSent}</h3>
              <p className="text-sm sm:text-base">{t.thankYou}</p>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ContactPage;