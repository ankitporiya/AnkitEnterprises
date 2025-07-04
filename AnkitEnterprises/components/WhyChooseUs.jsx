// import React from "react";
// import { motion } from "framer-motion";
// import { CheckCircle, Award, Clock, Users, Star, Shield } from "lucide-react";

// const WhyChooseUs = () => {
//   const features = [
//     {
//       icon: <Users className="w-6 h-6" />,
//       title: "End-to-End Management",
//     },
//     {
//       icon: <Award className="w-6 h-6" />,
//       title: "Experienced Team",
//     },
//     {
//       icon: <Shield className="w-6 h-6" />,
//       title: "Quality Materials",
//     },
//     {
//       icon: <Clock className="w-6 h-6" />,
//       title: "On-Time Completion",
//     },
//     {
//       icon: <Star className="w-6 h-6" />,
//       title: "Customer Satisfaction",
//     },
//   ];

//   return (
//     <motion.div
//       className="w-full mx-auto px-4 relative"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//     >
//       {/* Main Container */}
//       <div className="relative bg-transparent overflow-hidden">
//         <div className="relative z-10 p-1 lg:p-1">
//           {/* Header */}
//           <motion.div
//             className="text-center mb-2"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2
//               className="text-2xl md:text-2xl lg:text-2xl font-bold mb-2"
//               style={{ color: "#8B4513" }}
//             >
//               Why Choose Us?
//             </h2>
//             <div className="w-34 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto rounded-full shadow-lg" />
//           </motion.div>

//           {/* Features Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 mb-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 lg:p-6 shadow-lg border border-yellow-200/30 overflow-hidden"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.1,
//                 }}
//                 whileHover={{ y: -5 }}
//               >
//                 {/* Content */}
//                 <div className="relative z-10 text-center">
//                   {/* Icon */}
//                   <div className="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 rounded-xl mb-2 text-white shadow-lg mx-auto">
//                     {feature.icon}
//                   </div>

//                   {/* Title */}
//                   <h3
//                     className="text-lg lg:text-xl font-bold mb-2"
//                     style={{ color: "#8B4513" }}
//                   >
//                     {feature.title}
//                   </h3>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default WhyChooseUs;





// language
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Award, Clock, Users, Star, Shield } from "lucide-react";
import { useLanguage } from "../components/Navbar";

// Translations object
const translations = {
  english: {
    title: "Why Choose Us?",
    features: [
      "End-to-End Management",
      "Experienced Team",
      "Quality Materials",
      "On-Time Completion",
      "Customer Satisfaction"
    ]
  },
  gujarati: {
    title: "અમને કેમ પસંદ કરવા?",
    features: [
      "શરૂથી અંત સુધી વ્યવસ્થાપન",
      "અનુભવી ટીમ",
      "ગુણવત્તાયુક્ત સામગ્રી",
      "સમયસર પૂર્ણતા",
      "ગ્રાહક સંતૃપ્તિ"
    ]
  }
};

const WhyChooseUs = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: t.features[0],
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: t.features[1],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t.features[2],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t.features[3],
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: t.features[4],
    },
  ];

  return (
    <motion.div
      className="w-full mx-auto px-4 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Main Container */}
      <div className="relative bg-transparent overflow-hidden">
        <div className="relative z-10 p-1 lg:p-1">
          {/* Header */}
          <motion.div
            className="text-center mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-2xl md:text-2xl lg:text-2xl font-bold mb-2"
              style={{ color: "#8B4513" }}
            >
              {t.title}
            </h2>
            <div className="w-34 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto rounded-full shadow-lg" />
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 lg:p-6 shadow-lg border border-yellow-200/30 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
              >
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 rounded-xl mb-2 text-white shadow-lg mx-auto">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg lg:text-xl font-bold mb-2"
                    style={{ color: "#8B4513" }}
                  >
                    {feature.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;