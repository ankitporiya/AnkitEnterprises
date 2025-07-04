// import React from "react";
// import { Navbar } from "./Navbar";
// import Carousel from "./Carousel";
// import { motion } from "framer-motion";
// export default function HomePage() {
//   return (
//     <div className="bg-gray-50 min-h-screen font-sans">
//       <Navbar />
//       <main className="flex flex-col items-center text-center px-4 sm:px-6 md:px-8">
//         <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-5 leading-snug sm:leading-tight">
//           Ankit Enterprises{" "}
//           <span className="block text-3xl sm:text-4xl md:text-4xl text-green-600 mt-1 sm:mt-0">
//             20+ Years of Experience
//           </span>
//         </h1>

//         <p className="mt-4 text-gray-600 max-w-3xl text-base sm:text-lg leading-relaxed">
//           Flooring | Granite | Marbel | Kitchen Platform | Wall Tiling | Window
//           Frames & Fittings | Waterproofing | Plumbing | Electrical Work |
//           Furniture & Carpentry | And More...
//         </p>

//         {/* Compact Why Choose Us section with 2-column layout */}
//         <div className="bg-white border border-gray-200 px-5 py-5 max-w-xl mx-auto mt-5 text-left rounded-lg shadow-sm">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
//             Why Choose Us?
//           </h2>
//           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-gray-700 text-base list-none">
//             <li className="flex items-center">
//               <span className="text-green-500 mr-2">✅</span>
//               <span>End-to-End Management</span>
//             </li>
//             <li className="flex items-center">
//               <span className="text-green-500 mr-2">✅</span>
//               <span>Experienced Team</span>
//             </li>
//             <li className="flex items-center">
//               <span className="text-green-500 mr-2">✅</span>
//               <span>Quality Materials</span>
//             </li>
//             <li className="flex items-center">
//               <span className="text-green-500 mr-2">✅</span>
//               <span>On-Time Completion</span>
//             </li>
//             <li className="flex items-center sm:col-span-2 sm:justify-center">
//               <span className="text-green-500 mr-2">✅</span>
//               <span>Customer Satisfaction Guaranteed</span>
//             </li>
//           </ul>
//         </div>

//         <motion.div
//           className="flex justify-center mt-3"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             className="bg-green-600 text-white px-6 py-2 rounded-full"
//           >
//             Explore
//           </motion.button>
//         </motion.div>

//         <div className="mt-4 w-full">
//           <Carousel />
//         </div>
//       </main>
//     </div>
//   );
// }

////with animation

// import React from "react";
// import { Navbar } from "./Navbar";
// import Carousel from "./Carousel";
// import { motion } from "framer-motion";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// export default function HomePage() {
//   return (
//     // <div className="min-h-screen font-sans">
//     <div className="font-sans">
//       {/* <Navbar /> */}
//       <main className="flex flex-col items-center text-center px-4 sm:px-6 md:px-8">
//         <motion.h1
//           className="text-[#3f0d0c] text-4xl sm:text-5xl md:text-7xl font-bold mt-5 leading-snug sm:leading-tight"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Ankit Enterprises{" "}
//           <motion.span
//             className="block text-3xl sm:text-4xl md:text-4xl text-[#8d6f57] mt-1 sm:mt-0"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             20+ Years of Experience
//           </motion.span>
//         </motion.h1>

//         <motion.p
//           className="mt-4 text-[#3f0d0c] max-w-3xl text-base sm:text-lg leading-relaxed"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           Flooring | Granite | Marbel | Kitchen Platform | Wall Tiling | Window
//           Frames & Fittings | Waterproofing | Plumbing | Electrical Work |
//           Furniture & Carpentry | And More...
//         </motion.p>

// {/* <WhyChooseUs></WhyChooseUs> */}
//         {/* Animated Why Choose Us section */}
//         <motion.div
//           className="border border-[#3f0d0c] px-5 py-5 max-w-xl mx-auto mt-5 text-left rounded-2xl shadow-lg"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//         >
//           <h2 className="text-xl font-semibold text-[#3f0d0c] mb-4 text-center">
//             Why Choose Us?
//           </h2>
//           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-[#3f0d0c] text-base list-none">
//             <li className="flex items-center">
//               <span className="text-green-500 mr-2">✅</span>
//               <span>End-to-End Management</span>
//             </li>
//             <li className="flex items-center">
//               <span className="text-green-500 mr-2">✅</span>
//               <span>Experienced Team</span>
//             </li>
//             <li className="flex items-center">
//               <span className="text-green-500 mr-2">✅</span>
//               <span>Quality Materials</span>
//             </li>
//             <li className="flex items-center">
//               <span className="text-green-500 mr-2">✅</span>
//               <span>On-Time Completion</span>
//             </li>
//             <li className="flex items-center sm:col-span-2 sm:justify-center">
//               <span className="text-green-500 mr-2">✅</span>
//               <span>Customer Satisfaction Guaranteed</span>
//             </li>
//           </ul>
//         </motion.div>

//         <motion.div
//           className="flex justify-center mt-3"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.75, ease: "easeOut", delay: 0.5 }}
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             className="bg-[#8d6f57] text-white px-6 py-2 rounded-full"
//           >
//             <Link to="/OurServices">Explore</Link>
//           </motion.button>
//         </motion.div>

//         <div className="mt-3 w-full">
//           <Carousel />
//         </div>
//       </main>
//     </div>
//   );
// }

// import React from "react";
// import { LanguageProvider } from "../components/Navbar";
// import Carousel from "./Carousel";
// import { motion } from "framer-motion";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import WhyChooseUs from "./WhyChooseUs";
// const HomePage = () => {
//   return (
//     // <div className="min-h-screen font-sans">
//     <div className="font-sans">
//       {/* <Navbar /> */}
//       <main className="flex flex-col items-center text-center px-4 sm:px-6 md:px-8">
//         <motion.h1
//           className="text-[#3f0d0c] text-4xl sm:text-5xl md:text-7xl font-bold mt-5 leading-snug sm:leading-tight"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Ankit Enterprises{" "}
//           <motion.span
//             className="block text-3xl sm:text-4xl md:text-4xl text-[#8d6f57] mt-1 sm:mt-0"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             20+ Years of Experience
//           </motion.span>
//         </motion.h1>

//         <motion.p
//           className="mt-4 text-[#3f0d0c] max-w-3xl text-base sm:text-lg leading-relaxed"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           Flooring | Granite | Marbel | Kitchen Platform | Wall Tiling | Window
//           Frames & Fittings | Waterproofing | Plumbing | Electrical Work |
//           Furniture & Carpentry | And More...
//         </motion.p>
//         <motion.div
//           className="flex justify-center mt-2 mb-2"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.75, ease: "easeOut", delay: 0.5 }}
//         >
//           <motion.button
//             whileHover={{
//               scale: 1.05,
//               boxShadow:
//                 "0 0 20px rgba(101, 67, 33, 0.8), 0 0 40px rgba(101, 67, 33, 0.6), 0 0 60px rgba(101, 67, 33, 0.4)",
//             }}
//             transition={{ type: "spring", stiffness: 300 }}
//             className="bg-[#8d6f57] text-white px-6 py-2 rounded-full shadow-xl relative"
//             style={{
//               boxShadow:
//                 "0 0 10px rgba(101, 67, 33, 0.5), 0 0 20px rgba(101, 67, 33, 0.3), 0 0 30px rgba(101, 67, 33, 0.2)",
//             }}
//           >
//             <Link to="/OurServices">Explore Our Services</Link>
//           </motion.button>
//         </motion.div>
//         {/* Animated Why Choose Us section */}
//         <WhyChooseUs></WhyChooseUs>

//         <div className="mt-1 w-full">
//           <Carousel />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default HomePage;





// language:
import React from "react";
import bgImage from '../src/assets/bk.png'; // Adjust path as per your structure
import { useLanguage } from "../components/Navbar";
import Carousel from "./Carousel";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WhyChooseUs from "./WhyChooseUs";
import { useNavigate } from "react-router-dom";

// Translations object
const translations = {
  english: {
    companyName: "Ankit Enterprises",
    experience: "20+ Years of Experience",
    services: "Flooring | Granite | Marbel | Kitchen Platform | Wall Tiling | Window Frames & Fittings | Waterproofing | Plumbing | Electrical Work | Furniture & Carpentry | Painting | False Ceiling | And More...",
    exploreButton: "Explore Our Services"
  },
  gujarati: {
    companyName: "અંકિત એન્ટરપ્રાઇઝિસ",
    experience: "20+ વર્ષનો અનુભવ",
    services: "ફ્લોરિંગ | ગ્રેનાઇટ | માર્બલ | કિચન પ્લેટફોર્મ | વોલ ટાઇલિંગ | વિન્ડો ફ્રેમ્સ અને ફિટિંગ્સ | વોટરપ્રૂફિંગ | પ્લમ્બિંગ | ઇલેક્ટ્રિકલ વર્ક | ફર્નિચર અને કાર્પેન્ટ્રી | પેઇન્ટિંગ | ફોલ્સ સીલિંગ | અને વધુ...",
    exploreButton: "અમારી સેવાઓ જુઓ"
  }
};

const HomePage = () => {
  const { language } = useLanguage();
  const t = translations[language];
const navigate = useNavigate();
  return (
    <>
    {/* // <div className="min-h-screen font-sans"> */}
    <div className="font-sans">
      {/* <Navbar /> */}
      <main className="flex flex-col items-center text-center px-4 sm:px-6 md:px-8">
        <motion.h1
          className="text-[#3f0d0c] text-4xl sm:text-5xl md:text-7xl font-bold mt-5 leading-snug sm:leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t.companyName}{" "}
          <motion.span
            className="block text-3xl sm:text-4xl md:text-4xl text-[#8d6f57] mt-1 sm:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.experience}
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-4 text-[#3f0d0c] max-w-3xl text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t.services}
        </motion.p>
        <motion.div
          className="flex justify-center mt-2 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.5 }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 0 20px rgba(101, 67, 33, 0.8), 0 0 40px rgba(101, 67, 33, 0.6), 0 0 60px rgba(101, 67, 33, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#8d6f57] text-white px-6 py-2 rounded-full shadow-xl relative"
            style={{
              boxShadow:
                "0 0 10px rgba(101, 67, 33, 0.5), 0 0 20px rgba(101, 67, 33, 0.3), 0 0 30px rgba(101, 67, 33, 0.2)",
            }}
          >
            <button onClick={() => navigate("/OurServices")}>{t.exploreButton}</button>
          </motion.button>
        </motion.div>
        {/* Animated Why Choose Us section */}
        <WhyChooseUs></WhyChooseUs>

        <div className="mt-1 w-full">
          <Carousel />
        </div>
      </main>
    </div>
    </>
  );
};

export default HomePage;
