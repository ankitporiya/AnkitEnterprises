// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// const AboutUsPage = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const { scrollYProgress } = useScroll();

//   const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
//   const y = useSpring(
//     useTransform(scrollYProgress, [0, 1], [0, -50]),
//     springConfig
//   );
//   const scale = useSpring(
//     useTransform(scrollYProgress, [0, 0.5], [1, 1.1]),
//     springConfig
//   );

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth - 0.5) * 2,
//         y: (e.clientY / window.innerHeight - 0.5) * 2,
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12,
//       },
//     },
//   };

//   const cardVariants = {
//     rest: {
//       scale: 1,
//       rotateY: 0,
//       z: 0,
//     },
//     hover: {
//       scale: 1.05,
//       rotateY: 10,
//       z: 50,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 25,
//       },
//     },
//   };

//   const floatingVariants = {
//     animate: {
//       y: 0,
//       transition: {
//         duration: 0,
//       },
//     },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#d8d0c5] via-[#d9c4a9] to-[#d9b061] overflow-hidden">
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="relative z-10 container mx-auto px-4 py-8 sm:py-16"
//       >
//         {/* Hero Section */}
//         <motion.div
//           variants={itemVariants}
//           className="text-center mb-16 sm:mb-24"
//         >
//           <motion.h1
//             className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 text-[#3f0d0c]"
//             style={{ y, scale }}
//           >
//             About Us
//           </motion.h1>
//           <motion.div
//             className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#8d6f57] to-[#3f0d0c] mx-auto mb-8"
//             initial={{ width: 0 }}
//             animate={{ width: "auto" }}
//             transition={{ duration: 1, delay: 0.5 }}
//           />
//           <motion.p
//             className="text-lg sm:text-xl lg:text-2xl text-[#8d6f57] mx-auto leading-relaxed"
//             variants={itemVariants}
//           >
//             Crafting excellence through innovation and dedication, we transform
//             visions into reality
//           </motion.p>
//         </motion.div>

//         {/* Company Story */}
//         <motion.div variants={itemVariants} className="mb-16 sm:mb-24">
//           <motion.div
//             className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 sm:p-12 shadow-2xl border border-white/30"
//             whileHover={{
//               scale: 1.02,
//               boxShadow: "0 25px 50px -12px rgba(63, 13, 12, 0.3)",
//             }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//           >
//             <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3f0d0c] mb-6 sm:mb-8">
//               Our Story
//             </motion.h2>
//             <motion.p
//               className="text-base sm:text-lg lg:text-xl text-[#8d6f57] leading-relaxed mb-6"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8 }}
//             >
//               With over 20 years of experience in the construction industry,
//               we’ve built a reputation for quality, trust, and craftsmanship.
//               What began as a small team with a clear vision and strong work
//               ethic has grown into a reliable construction partner for countless
//               clients.
//             </motion.p>
//             <motion.p
//               className="text-base sm:text-lg lg:text-xl text-[#8d6f57] leading-relaxed"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               From interiors to structural work, we bring care,
//               precision, and a commitment to excellence in everything we do. Our
//               journey is shaped by long-lasting relationships, attention to
//               detail, and a drive to turn every space into something special. At
//               Ankit Enterprises, we don’t just construct, we create with
//               purpose.
//             </motion.p>
//           </motion.div>
//         </motion.div>

//         {/* Founders Section */}
//         <motion.div variants={itemVariants} className="mb-16 sm:mb-24">
//           <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3f0d0c] text-center mb-12 sm:mb-16">
//             Meet Our Founders
//           </motion.h2>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
//             {/* Founder 1 */}
//             <motion.div
//               variants={cardVariants}
//               initial="rest"
//               whileHover="hover"
//               className="group cursor-pointer"
//             >
//               <div className="bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 h-full">
//                 <motion.div
//                   className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-lg"
//                   whileHover={{
//                     scale: 1.1,
//                     rotate: 5,
//                     boxShadow: "0 20px 40px -8px rgba(63, 13, 12, 0.4)",
//                   }}
//                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 >
//                   <div className="w-full h-full bg-gradient-to-br from-[#d9b061] to-[#8d6f57] flex items-center justify-center">
//                     <span className="text-4xl sm:text-5xl font-bold text-white">
//                       KP
//                     </span>
//                   </div>
//                 </motion.div>

//                 <motion.h3 className="text-2xl sm:text-3xl font-bold text-[#3f0d0c] text-center mb-3">
//                   Kanji N Poriya
//                 </motion.h3>
//                 <motion.p
//                   className="text-lg sm:text-xl text-[#8d6f57] text-center mb-4 font-semibold"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   Founder & CEO
//                 </motion.p>
//                 <motion.p
//                   className="text-sm sm:text-base text-[#8d6f57] text-center leading-relaxed"
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ duration: 0.8, delay: 0.2 }}
//                 >
//                  A visionary leader and contractor, he laid the foundation of the business, driving growth by managing client relations, on-site execution, workforce and team coordination, and project delivery.
//                 </motion.p>
//               </div>
//             </motion.div>

//             {/* Founder 2 */}
//             <motion.div
//               variants={cardVariants}
//               initial="rest"
//               whileHover="hover"
//               className="group cursor-pointer"
//             >
//               <div className="bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 h-full">
//                 <motion.div
//                   className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-lg"
//                   whileHover={{
//                     scale: 1.1,
//                     rotate: -5,
//                     boxShadow: "0 20px 40px -8px rgba(63, 13, 12, 0.4)",
//                   }}
//                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 >
//                   <div className="w-full h-full bg-gradient-to-br from-[#8d6f57] to-[#3f0d0c] flex items-center justify-center">
//                     <span className="text-4xl sm:text-5xl font-bold text-white">
//                       AP
//                     </span>
//                   </div>
//                 </motion.div>

//                 <motion.h3 className="text-2xl sm:text-3xl font-bold text-[#3f0d0c] text-center mb-3">
//                   Ankit K Poriya
//                 </motion.h3>
//                 <motion.p
//                   className="text-lg sm:text-xl text-[#8d6f57] text-center mb-4 font-semibold"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   Co-Founder, CTO & CFO
//                 </motion.p>
//                 <motion.p
//                   className="text-sm sm:text-base text-[#8d6f57] text-center leading-relaxed"
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ duration: 0.8, delay: 0.2 }}
//                 >
//                   A strategic thinker with a tech-savvy approach, he built the company’s digital presence and ensures smooth financial management, enabling sustainable growth and operational efficiency.
//                 </motion.p>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Values Section */}
//         <motion.div variants={itemVariants} className="mb-16 sm:mb-24">
//           <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3f0d0c] text-center mb-12 sm:mb-16">
//             Our Values
//           </motion.h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
//             {[
//               {
//                 title: "Trust",
//                 desc: "We operate with honesty and transparency-earning trust by delivering what we promise, maintaining clear communication, and standing accountable on every project site.",
//               },
//               {
//                 title: "Excellence",
//                 desc: "We commit to high-quality work-ensuring strong, long-lasting results through precise execution, timely completion, and attention to every construction detail.",
//               },
//               {
//                 title: "Innovation",
//                 desc: "We adopt modern methods and materials to improve efficiency, functionality, and design-creating smarter spaces that serve today’s needs and tomorrow’s vision.",
//               },
//             ].map((value, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-xl border border-white/30 text-center"
//                 initial={{ opacity: 0, y: 50, rotateX: -45 }}
//                 whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
//                 whileHover={{
//                   scale: 1.05,
//                   rotateY: 5,
//                   boxShadow: "0 20px 40px -8px rgba(63, 13, 12, 0.3)",
//                 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: index * 0.2,
//                   type: "spring",
//                   stiffness: 200,
//                   damping: 20,
//                 }}
//               >
//                 <motion.div
//                   className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-[#d9b061] to-[#8d6f57] flex items-center justify-center"
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <span className="text-2xl sm:text-3xl font-bold text-white">
//                     {value.title.charAt(0)}
//                   </span>
//                 </motion.div>
//                 <h3 className="text-xl sm:text-2xl font-bold text-[#3f0d0c] mb-3 sm:mb-4">
//                   {value.title}
//                 </h3>
//                 <p className="text-sm sm:text-base text-[#8d6f57] leading-relaxed">
//                   {value.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div variants={itemVariants} className="text-center">
//           <motion.div
//             className="bg-gradient-to-r from-[#3f0d0c] to-[#8d6f57] rounded-3xl p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto"
//             whileHover={{
//               scale: 1.02,
//               boxShadow: "0 30px 60px -12px rgba(63, 13, 12, 0.4)",
//             }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//           >
//             <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
//               Ready to Work Together?
//             </motion.h2>
//             <motion.p
//               className="text-lg sm:text-xl text-[#d9c4a9] mb-8 leading-relaxed"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8 }}
//             >
//               Let's create something extraordinary together. Get in touch and
//               let's discuss your next project.
//             </motion.p>
//             <motion.button
//               className="bg-white text-[#3f0d0c] px-8 sm:px-12 py-4 sm:py-6 rounded-2xl font-bold text-lg sm:text-xl shadow-lg"
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 15px 30px -5px rgba(255, 255, 255, 0.3)",
//                 y: -5,
//               }}
//               whileTap={{ scale: 0.95 }}
//               transition={{ type: "spring", stiffness: 400, damping: 25 }}
//             >
//               <Link to="/ContactPage">Contact Us</Link>
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default AboutUsPage;












import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useLanguage } from './Navbar';
import { useNavigate } from "react-router-dom";
const AboutUsPage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -50]),
    springConfig
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [1, 1.1]),
    springConfig
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const cardVariants = {
    rest: {
      scale: 1,
      rotateY: 0,
      z: 0,
    },
    hover: {
      scale: 1.05,
      rotateY: 10,
      z: 50,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: 0,
      transition: {
        duration: 0,
      },
    },
  };

  // Translation content
  const translations = {
    english: {
      aboutUs: "About Us",
      heroSubtitle: "Crafting excellence through innovation and dedication, we transform visions into reality",
      ourStory: "Our Story",
      storyPara1: "With over 20 years of experience in the construction industry, we've built a reputation for quality, trust, and craftsmanship. What began as a small team with a clear vision and strong work ethic has grown into a reliable construction partner for countless clients.",
      storyPara2: "From interiors to structural work, we bring care, precision, and a commitment to excellence in everything we do. Our journey is shaped by long-lasting relationships, attention to detail, and a drive to turn every space into something special. At Ankit Enterprises, we don't just construct, we create with purpose.",
      meetFounders: "Meet Our Founders",
      founder1Name: "Kanji N Poriya",
      founder1Role: "Founder & CEO",
      founder1Desc: "A visionary leader and contractor, he laid the foundation of the business, driving growth by managing client relations, on-site execution, workforce and team coordination, and project delivery.",
      founder2Name: "Ankit K Poriya",
      founder2Role: "Co-Founder, CTO & CFO",
      founder2Desc: "A strategic thinker with a tech-savvy approach, he built the company's digital presence and ensures smooth financial management, enabling sustainable growth and operational efficiency.",
      ourValues: "Our Values",
      trustTitle: "Trust",
      trustDesc: "We operate with honesty and transparency-earning trust by delivering what we promise, maintaining clear communication, and standing accountable on every project site.",
      excellenceTitle: "Excellence",
      excellenceDesc: "We commit to high-quality work-ensuring strong, long-lasting results through precise execution, timely completion, and attention to every construction detail.",
      innovationTitle: "Innovation",
      innovationDesc: "We adopt modern methods and materials to improve efficiency, functionality, and design-creating smarter spaces that serve today's needs and tomorrow's vision.",
      ctaTitle: "Ready to Work Together?",
      ctaSubtitle: "Let's create something extraordinary together. Get in touch and let's discuss your next project.",
      contactUs: "Contact Us"
    },
    gujarati: {
      aboutUs: "અમારા વિશે",
      heroSubtitle: "નવીનતા અને સમર્પણ દ્વારા ઉત્કૃષ્ટતાનું નિર્માણ, અમે દ્રષ્ટિકોણને વાસ્તવિકતામાં બદલીએ છીએ",
      ourStory: "અમારી વાર્તા",
      storyPara1: "બાંધકામ ઉદ્યોગમાં 20 વર્ષથી વધુના અનુભવ સાથે, અમે ગુણવત્તા, વિશ્વાસ અને કારીગરી માટે પ્રતિષ્ઠા બનાવી છે. એક નાની ટીમ તરીકે સ્પષ્ટ દ્રષ્ટિકોણ અને મજબૂત કાર્ય નીતિ સાથે શરૂઆત કરીને, અસંખ્ય ક્લાયન્ટ્સ માટે વિશ્વસનીય બાંધકામ ભાગીદાર બની છે.",
      storyPara2: "આંતરિક સજાવટથી માંડીને માળખાકીય કામ સુધી, અમે અમારા દરેક કામમાં કાળજી, ચોકસાઈ અને ઉત્કૃષ્ટતાની પ્રતિબદ્ધતા લાવીએ છીએ. અમારી યાત્રા લાંબા સમયથી ચાલતા સંબંધો, વિગતોનું ધ્યાન અને દરેક જગ્યાને કંઈક ખાસ બનાવવાની દ્રાઇવ દ્વારા આકાર લે છે. અંકિત એન્ટરપ્રાઇઝમાં, અમે માત્ર બાંધકામ નથી કરતા, અમે હેતુ સાથે બનાવીએ છીએ.",
      meetFounders: "અમારા સ્થાપકોને મળો",
      founder1Name: "કાંજી એન પોરિયા",
      founder1Role: "સ્થાપક અને સીઇઓ",
      founder1Desc: "એક દ્રષ્ટિસંપન્ન નેતા અને કોન્ટ્રાક્ટર, તેમણે વ્યવસાયનો પાયો નાખ્યો, ક્લાયન્ટ સંબંધો, સાઇટ પર અમલીકરણ, કાર્યબળ અને ટીમ સંકલન અને પ્રોજેક્ટ ડિલિવરીનું સંચાલન કરીને વૃદ્ધિને આગળ ધપાવી.",
      founder2Name: "અંકિત કે પોરિયા",
      founder2Role: "સહ-સ્થાપક, સીટીઓ અને સીએફઓ",
      founder2Desc: "ટેક-સેવી અભિગમ સાથેના વ્યૂહાત્મક વિચારક, તેમણે કંપનીની ડિજિટલ હાજરી બનાવી અને સરળ નાણાકીય વ્યવસ્થાપન સુનિશ્ચિત કર્યું, ટકાઉ વૃદ્ધિ અને કામગીરીની કાર્યક્ષમતાને સક્ષમ બનાવી.",
      ourValues: "અમારા મૂલ્યો",
      trustTitle: "વિશ્વાસ",
      trustDesc: "અમે પ્રામાણિકતા અને પારદર્શિતા સાથે કામ કરીએ છીએ - અમે જે વચન આપીએ છીએ તે પહોંચાડીને, સ્પષ્ટ સંદેશાવ્યવહાર જાળવીને અને દરેક પ્રોજેક્ટ સાઇટ પર જવાબદાર રહીને વિશ્વાસ મેળવીએ છીએ.",
      excellenceTitle: "ઉત્કૃષ્ટતા",
      excellenceDesc: "અમે ઉચ્ચ ગુણવત્તાના કામ માટે પ્રતિબદ્ધ છીએ - ચોક્કસ અમલીકરણ, સમયસર પૂર્ણતા અને દરેક બાંધકામ વિગતનું ધ્યાન રાખીને મજબૂત, લાંબા સમય સુધી ચાલતા પરિણામો સુનિશ્ચિત કરીએ છીએ.",
      innovationTitle: "નવીનતા",
      innovationDesc: "અમે કાર્યક્ષમતા, કાર્યક્ષમતા અને ડિઝાઇનને સુધારવા માટે આધુનિક પદ્ધતિઓ અને સામગ્રીને અપનાવીએ છીએ - આજની જરૂરિયાતો અને આવતીકાલના દ્રષ્ટિકોણને પૂરી પાડતી સ્માર્ટ જગ્યાઓ બનાવીએ છીએ.",
      ctaTitle: "સાથે કામ કરવા માટે તૈયાર છો?",
      ctaSubtitle: "ચાલો સાથે મળીને કંઈક અસાધારણ બનાવીએ. સંપર્ક કરો અને ચાલો તમારા આગામી પ્રોજેક્ટ વિશે વાત કરીએ.",
      contactUs: "સંપર્ક કરો"
    }
  };

  const t = translations[language] || translations.english;

  return (
    // <div className="min-h-screen bg-gradient-to-br from-[#d8d0c5] via-[#d9c4a9] to-[#d9b061] overflow-hidden">
      <div className="min-h-screen overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 py-8 sm:py-16"
      >
        {/* Hero Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16 sm:mb-24"
        >
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 text-[#3f0d0c]"
            style={{ y, scale }}
          >
            {t.aboutUs}
          </motion.h1>
          <motion.div
            className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#8d6f57] to-[#3f0d0c] mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-[#3f0d0c] mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {t.heroSubtitle}
          </motion.p>
        </motion.div>

        {/* Company Story */}
        <motion.div variants={itemVariants} className="mb-16 sm:mb-24">
          <motion.div
            className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 sm:p-12 shadow-2xl border border-white/30"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(63, 13, 12, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3f0d0c] mb-6 sm:mb-8">
              {t.ourStory}
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-[#8d6f57] leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {t.storyPara1}
            </motion.p>
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-[#8d6f57] leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.storyPara2}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Founders Section */}
        <motion.div variants={itemVariants} className="mb-16 sm:mb-24">
          <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3f0d0c] text-center mb-12 sm:mb-16">
            {t.meetFounders}
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {/* Founder 1 */}
            <motion.div
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 h-full">
                <motion.div
                  className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-lg"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0 20px 40px -8px rgba(63, 13, 12, 0.4)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#d9b061] to-[#8d6f57] flex items-center justify-center">
                    <span className="text-4xl sm:text-5xl font-bold text-white">
                      KP
                    </span>
                  </div>
                </motion.div>

                <motion.h3 className="text-2xl sm:text-3xl font-bold text-[#3f0d0c] text-center mb-3">
                  {t.founder1Name}
                </motion.h3>
                <motion.p
                  className="text-lg sm:text-xl text-[#8d6f57] text-center mb-4 font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {t.founder1Role}
                </motion.p>
                <motion.p
                  className="text-sm sm:text-base text-[#8d6f57] text-center leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {t.founder1Desc}
                </motion.p>
              </div>
            </motion.div>

            {/* Founder 2 */}
            <motion.div
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 h-full">
                <motion.div
                  className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-lg"
                  whileHover={{
                    scale: 1.1,
                    rotate: -5,
                    boxShadow: "0 20px 40px -8px rgba(63, 13, 12, 0.4)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#8d6f57] to-[#3f0d0c] flex items-center justify-center">
                    <span className="text-4xl sm:text-5xl font-bold text-white">
                      AP
                    </span>
                  </div>
                </motion.div>

                <motion.h3 className="text-2xl sm:text-3xl font-bold text-[#3f0d0c] text-center mb-3">
                  {t.founder2Name}
                </motion.h3>
                <motion.p
                  className="text-lg sm:text-xl text-[#8d6f57] text-center mb-4 font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {t.founder2Role}
                </motion.p>
                <motion.p
                  className="text-sm sm:text-base text-[#8d6f57] text-center leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {t.founder2Desc}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div variants={itemVariants} className="mb-16 sm:mb-24">
          <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3f0d0c] text-center mb-12 sm:mb-16">
            {t.ourValues}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: t.trustTitle,
                desc: t.trustDesc,
              },
              {
                title: t.excellenceTitle,
                desc: t.excellenceDesc,
              },
              {
                title: t.innovationTitle,
                desc: t.innovationDesc,
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-xl border border-white/30 text-center"
                initial={{ opacity: 0, y: 50, rotateX: -45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 40px -8px rgba(63, 13, 12, 0.3)",
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
              >
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-[#d9b061] to-[#8d6f57] flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-2xl sm:text-3xl font-bold text-white">
                    {value.title.charAt(0)}
                  </span>
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#3f0d0c] mb-3 sm:mb-4">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-[#8d6f57] leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center">
          <motion.div
            className="bg-gradient-to-r from-[#3f0d0c] to-[#8d6f57] rounded-3xl p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 30px 60px -12px rgba(63, 13, 12, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t.ctaTitle}
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-[#d9c4a9] mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {t.ctaSubtitle}
            </motion.p>
            <motion.button
              className="bg-white text-[#3f0d0c] px-8 sm:px-12 py-4 sm:py-6 rounded-2xl font-bold text-lg sm:text-xl shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px -5px rgba(255, 255, 255, 0.3)",
                y: -5,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <button onClick={() => navigate('/ContactPage')}>{t.contactUs}</button>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUsPage;