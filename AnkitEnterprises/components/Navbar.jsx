// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// export const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <motion.nav
//       className="shadow-lg shadow-[#3f0d0c]"
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//     >
//       <div className="flex justify-between items-center py-3 px-4 sm:px-8 md:px-16">
//         <div className="text-[#3f0d0c] text-2xl font-bold tracking-tight">
//           Ankit Enterprises
//         </div>

//         {/* Desktop Navigation Links */}
//         <ul className="hidden sm:flex gap-8 text-base text-[#3f0d0c] font-medium">
//           <li className="relative group cursor-pointer transition-all duration-200">
//             <Link to="/">Home</Link>
//             <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-0 bg-[#3f0d0c] transition-all duration-300 group-hover:w-full"></span>
//           </li>
//           <li className="relative group cursor-pointer transition-all duration-200">
//             <Link to="/OurServices">Our services</Link>
//             <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-0 bg-[#3f0d0c] transition-all duration-300 group-hover:w-full"></span>
//           </li>
//           <li className="relative group cursor-pointer transition-all duration-200">
//             <Link to="/AboutUsPage"> About Us </Link>
//             <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-0 bg-[#3f0d0c]  transition-all duration-300 group-hover:w-full"></span>
//           </li>
//           <li className="relative group cursor-pointer transition-all duration-200">
//             <Link to="/ContactPage">Contact</Link>
//             <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-0 bg-[#3f0d0c] transition-all duration-300 group-hover:w-full"></span>
//           </li>
//         </ul>

//         {/* Hamburger Menu Button */}
//         <button
//           className="sm:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 group"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           <span
//             className={`w-6 h-0.5 bg-[#3f0d0c] transition-all duration-300 ${
//               isMenuOpen ? "rotate-45 translate-y-2" : ""
//             }`}
//           ></span>
//           <span
//             className={`w-6 h-0.5 bg-[#3f0d0c]  transition-all duration-300 ${
//               isMenuOpen ? "opacity-0" : ""
//             }`}
//           ></span>
//           <span
//             className={`w-6 h-0.5 bg-[#3f0d0c] transition-all duration-300 ${
//               isMenuOpen ? "-rotate-45 -translate-y-2" : ""
//             }`}
//           ></span>
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu with animation */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="sm:hidden overflow-hidden"
//           >
//             <div className="px-4 py-4 border-t border-[#3f0d0c] shadow-lg text-center">
//               <ul className="space-y-4 text-base text-[#3f0d0c] font-medium">
//                 <li className="relative group cursor-pointer py-2 transition-all duration-200 hover:text-[#8d6f57]">
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li className="relative group cursor-pointer py-2 transition-all duration-200 hover:text-[#8d6f57]">
//                   <Link to="/OurServices">Our services</Link>
//                 </li>
//                 <li className="relative group cursor-pointer py-2 transition-all duration-200 hover:text-[#8d6f57]">
//                   <Link to="/AboutUsPage"> About Us </Link>
//                 </li>
//                 <li className="relative group cursor-pointer py-2 transition-all duration-200 hover:text-[#8d6f57]">
//                   <Link to="/ContactPage">Contact</Link>
//                 </li>
//               </ul>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <motion.nav
//       className="shadow-lg shadow-[#3f0d0c]"
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//     >
//       <div className="flex justify-between items-center py-3 px-4 sm:px-8 md:px-16">
//         <div className="text-[#3f0d0c] text-2xl font-bold tracking-tight">
//           Ankit Enterprises
//         </div>

//         {/* Desktop Navigation Links */}
//         <ul className="hidden sm:flex gap-8 text-base text-[#3f0d0c] font-medium">
//           <li className="relative group cursor-pointer transition-all duration-200">
//             <Link to="/">Home</Link>
//             <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-0 bg-[#3f0d0c] transition-all duration-300 group-hover:w-full"></span>
//           </li>
//           <li className="relative group cursor-pointer transition-all duration-200">
//             <Link to="/OurServices">Our services</Link>
//             <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-0 bg-[#3f0d0c] transition-all duration-300 group-hover:w-full"></span>
//           </li>
//           <li className="relative group cursor-pointer transition-all duration-200">
//             <Link to="/AboutUsPage"> About Us </Link>
//             <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-0 bg-[#3f0d0c]  transition-all duration-300 group-hover:w-full"></span>
//           </li>
//           <li className="relative group cursor-pointer transition-all duration-200">
//             <Link to="/ContactPage">Contact</Link>
//             <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-0 bg-[#3f0d0c] transition-all duration-300 group-hover:w-full"></span>
//           </li>
//         </ul>

//         {/* Hamburger Menu Button */}
//         <button
//           className="sm:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 group"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           <span
//             className={`w-6 h-0.5 bg-[#3f0d0c] transition-all duration-300 ${
//               isMenuOpen ? "rotate-45 translate-y-2" : ""
//             }`}
//           ></span>
//           <span
//             className={`w-6 h-0.5 bg-[#3f0d0c]  transition-all duration-300 ${
//               isMenuOpen ? "opacity-0" : ""
//             }`}
//           ></span>
//           <span
//             className={`w-6 h-0.5 bg-[#3f0d0c] transition-all duration-300 ${
//               isMenuOpen ? "-rotate-45 -translate-y-2" : ""
//             }`}
//           ></span>
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu with animation */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="sm:hidden overflow-hidden"
//           >
//             <div className="px-4 py-4 border-t border-[#3f0d0c] shadow-lg text-center">
//               <ul className="space-y-4 text-base text-[#3f0d0c] font-medium">
//                 <li className="relative group cursor-pointer py-2 transition-all duration-200 hover:text-[#8d6f57]">
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li className="relative group cursor-pointer py-2 transition-all duration-200 hover:text-[#8d6f57]">
//                   <Link to="/OurServices">Our services</Link>
//                 </li>
//                 <li className="relative group cursor-pointer py-2 transition-all duration-200 hover:text-[#8d6f57]">
//                   <Link to="/AboutUsPage"> About Us </Link>
//                 </li>
//                 <li className="relative group cursor-pointer py-2 transition-all duration-200 hover:text-[#8d6f57]">
//                   <Link to="/ContactPage">Contact</Link>
//                 </li>
//               </ul>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;

// language
import React, { useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
// Language Context
const LanguageContext = createContext();

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "english" ? "gujarati" : "english"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Translations object
const translations = {
  english: {
    companyName: "Ankit Enterprises",
    home: "Home",
    ourServices: "Our Services",
    aboutUs: "About Us",
    contact: "Contact",
    language: "ગુજરાતી", // Shows Gujarati when current language is English
  },
  gujarati: {
    companyName: "અંકિત એન્ટરપ્રાઇઝિસ",
    home: "હોમ",
    ourServices: "અમારી સેવાઓ",
    aboutUs: "અમારા વિશે",
    contact: "સંપર્ક",
    language: "English", // Shows English when current language is Gujarati
  },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();

  return (
    <motion.nav
      className="shadow-lg shadow-[#3f0d0c]"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center py-3 px-4 sm:px-8 md:px-16">
        <div className="text-[#3f0d0c] text-2xl font-bold tracking-tight">
          {t.companyName}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex items-center gap-8">
          <ul className="flex gap-8 text-base text-[#3f0d0c] font-medium">
            <li className="relative group cursor-pointer transition-all duration-200">
              <a onClick={() => navigate("/")}>{t.home}</a>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-0 bg-[#3f0d0c] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group cursor-pointer transition-all duration-200">
              <a onClick={() => navigate("/OurServices")}>{t.ourServices}</a>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-0 bg-[#3f0d0c] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group cursor-pointer transition-all duration-200">
              <a onClick={() => navigate("/AboutUsPage")}>{t.aboutUs}</a>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-0 bg-[#3f0d0c] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group cursor-pointer transition-all duration-200">
              <a onClick={() => navigate("/ContactPage")}>{t.contact}</a>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-0 bg-[#3f0d0c] transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 text-[#3f0d0c] font-medium transition-all duration-200 hover:bg-[#3f0d0c] hover:text-white rounded-md border border-[#3f0d0c]"
            aria-label="Toggle language"
          >
            <Globe size={16} />
            <span className="text-sm">{t.language}</span>
          </button>
        </div>

        {/* Mobile Menu Button and Language Toggle */}
        <div className="sm:hidden flex items-center gap-3">
          {/* Mobile Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2 py-1 text-[#3f0d0c] font-medium transition-all duration-200 hover:bg-[#3f0d0c] hover:text-white rounded border border-[#3f0d0c]"
            aria-label="Toggle language"
          >
            <Globe size={14} />
            <span className="text-xs">{t.language}</span>
          </button>

          {/* Hamburger Menu Button */}
          <button
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-[#3f0d0c] transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-[#3f0d0c] transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-[#3f0d0c] transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden overflow-hidden"
          >
            <div className="px-4 py-4 border-t border-[#3f0d0c] shadow-lg text-center">
              <ul className="space-y-4 text-base text-[#3f0d0c] font-medium">
                <li className="relative group cursor-pointer py-2 transition-all duration-200 hover:text-[#8d6f57]">
                  <a onClick={() => navigate("/")}>{t.home}</a>
                </li>
                <li className="relative group cursor-pointer py-2 transition-all duration-200 hover:text-[#8d6f57]">
                  <a onClick={() => navigate("/OurServices")}>
                    {t.ourServices}
                  </a>
                </li>
                <li className="relative group cursor-pointer py-2 transition-all duration-200 hover:text-[#8d6f57]">
                  <a onClick={() => navigate("/AboutUsPage")}>{t.aboutUs}</a>
                </li>
                <li className="relative group cursor-pointer py-2 transition-all duration-200 hover:text-[#8d6f57]">
                  <a onClick={() => navigate("/ContactPage")}>{t.contact}</a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
