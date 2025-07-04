// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useLanguage } from "../components/Navbar";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// const OurServices = () => {
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [hoveredCard, setHoveredCard] = useState(null);
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
//   // Sample blog data
//   const blogPosts = [
//     {
//       id: 1,
//       title: "The Future of Web Development",
//       description:
//         "Exploring cutting-edge technologies and frameworks that are shaping the future of web development, including AI integration and advanced animations.",
//       image:
//         "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&h=300&fit=crop&crop=entropy&auto=format",
//       category: "Technology",
//       readTime: "5 min read",
//       date: "May 20, 2025",
//     },
//     {
//       id: 2,
//       title: "Mastering React Animations",
//       description:
//         "A comprehensive guide to creating stunning animations in React using Framer Motion and other powerful libraries for enhanced user experience.",
//       image:
//         "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&crop=entropy&auto=format",
//       category: "Development",
//       readTime: "8 min read",
//       date: "May 18, 2025",
//     },
//     {
//       id: 3,
//       title: "Design Systems at Scale",
//       description:
//         "Building and maintaining consistent design systems across large organizations while ensuring flexibility and developer experience.",
//       image:
//         "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&h=300&fit=crop&crop=entropy&auto=format",
//       category: "Design",
//       readTime: "6 min read",
//       date: "May 15, 2025",
//     },
//     {
//       id: 4,
//       title: "AI in Modern Applications",
//       description:
//         "Integrating artificial intelligence into web applications to create smarter, more intuitive user experiences and automated workflows.",
//       image:
//         "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop&crop=entropy&auto=format",
//       category: "AI",
//       readTime: "7 min read",
//       date: "May 12, 2025",
//     },
//     {
//       id: 5,
//       title: "Mobile-First Development",
//       description:
//         "Best practices for creating responsive, mobile-first applications that provide excellent user experiences across all device sizes.",
//       image:
//         "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop&crop=entropy&auto=format",
//       category: "Mobile",
//       readTime: "4 min read",
//       date: "May 10, 2025",
//     },
//     {
//       id: 6,
//       title: "Performance Optimization",
//       description:
//         "Advanced techniques for optimizing web application performance, including code splitting, lazy loading, and efficient state management.",
//       image:
//         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=entropy&auto=format",
//       category: "Performance",
//       readTime: "9 min read",
//       date: "May 8, 2025",
//     },
//     {
//       id: 7,
//       title: "Cybersecurity Essentials",
//       description:
//         "Essential security practices for modern web applications, including authentication, data protection, and vulnerability prevention.",
//       image:
//         "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop&crop=entropy&auto=format",
//       category: "Security",
//       readTime: "6 min read",
//       date: "May 5, 2025",
//     },
//     {
//       id: 8,
//       title: "Cloud Architecture Patterns",
//       description:
//         "Exploring scalable cloud architecture patterns and microservices design for building robust, distributed applications.",
//       image:
//         "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop&crop=entropy&auto=format",
//       category: "Cloud",
//       readTime: "10 min read",
//       date: "May 3, 2025",
//     },
//     {
//       id: 9,
//       title: "User Experience Innovation",
//       description:
//         "Revolutionary approaches to user experience design that create memorable and engaging digital interactions.",
//       image:
//         "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&h=300&fit=crop&crop=entropy&auto=format",
//       category: "UX",
//       readTime: "5 min read",
//       date: "May 1, 2025",
//     },
//     {
//       id: 10,
//       title: "Data Visualization Mastery",
//       description:
//         "Creating compelling data visualizations that tell stories and provide actionable insights through interactive charts and graphs.",
//       image:
//         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=entropy&auto=format",
//       category: "Data",
//       readTime: "7 min read",
//       date: "Apr 28, 2025",
//     },
//     {
//       id: 11,
//       title: "Sustainable Development",
//       description:
//         "Building environmentally conscious applications with green coding practices and energy-efficient development approaches.",
//       image:
//         "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&h=300&fit=crop&crop=entropy&auto=format",
//       category: "Sustainability",
//       readTime: "6 min read",
//       date: "Apr 25, 2025",
//     },
//     {
//       id: 12,
//       title: "Future of Remote Work",
//       description:
//         "How technology is reshaping remote work culture and the tools that enable seamless collaboration across distributed teams.",
//       image:
//         "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=300&fit=crop&crop=entropy&auto=format",
//       category: "Remote",
//       readTime: "8 min read",
//       date: "Apr 22, 2025",
//     },
//   ];

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: {
//       opacity: 0,
//       y: 50,
//       rotateX: -15,
//       scale: 0.9,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       rotateX: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//     hover: {
//       y: -10,
//       rotateX: 5,
//       rotateY: 5,
//       scale: 1.02,
//       transition: {
//         duration: 0.3,
//         ease: "easeOut",
//       },
//     },
//   };

//   const overlayVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//     exit: { opacity: 0 },
//   };

//   const modalVariants = {
//     hidden: {
//       opacity: 0,
//       scale: 0.8,
//       rotateY: -15,
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       rotateY: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.8,
//       rotateY: 15,
//       transition: {
//         duration: 0.3,
//       },
//     },
//   };

//   return (
//     <>
//       {/* <Navbar/> */}
//       <div className="min-h-screen bg-gradient-to-br from-[#3f0d0c] via-[#8d6f57] to-[#d8d0c5] relative overflow-hidden">
//         {/* Animated background elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <motion.div
//             className="absolute -top-40 -right-40 w-80 h-80 bg-[#d9b061] rounded-full mix-blend-multiply filter blur-xl opacity-40"
//             animate={{
//               scale: [1, 1.2, 1],
//               rotate: [0, 180, 360],
//             }}
//             transition={{
//               duration: 20,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//           <motion.div
//             className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#d9c4a9] rounded-full mix-blend-multiply filter blur-xl opacity-40"
//             animate={{
//               scale: [1.2, 1, 1.2],
//               rotate: [360, 180, 0],
//             }}
//             transition={{
//               duration: 25,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//         </div>

//         {/* Header */}
//         <motion.header
//           className="relative z-10 text-center py-12 px-4"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl md:text-6xl font-bold text-[#d8d0c5] mb-8 leading-tight bg-gradient-to-r from-[#d9b061] to-[#d9c4a9] bg-clip-text text-transparent">
//             Our Services
//           </h1>
//           <motion.div
//             className="max-w-7xl h-1 bg-gradient-to-r from-[#d9b061] to-[#d9c4a9] mx-auto mb-8"
//             initial={{ width: 0 }}
//             animate={{ width: "auto" }}
//             transition={{ duration: 1, delay: 0.5 }}
//           />
//         </motion.header>

//         {/* Blog Grid */}
//         <motion.div
//           className="relative z-10 max-w-7xl mx-auto px-4 pb-16"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {blogPosts.map((post) => (
//               <motion.div
//                 key={post.id}
//                 variants={cardVariants}
//                 whileHover="hover"
//                 className="bg-[#d8d0c5]/20 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer group border border-[#d9c4a9]/30"
//                 style={{
//                   transformStyle: "preserve-3d",
//                   perspective: "1000px",
//                 }}
//                 onMouseEnter={() => setHoveredCard(post.id)}
//                 onMouseLeave={() => setHoveredCard(null)}
//                 onClick={() => setSelectedCard(post)}
//               >
//                 {/* Image */}
//                 <div className="relative overflow-hidden h-48">
//                   <motion.img
//                     src={post.image}
//                     alt={post.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-t from-[#3f0d0c]/60 to-transparent"
//                     initial={{ opacity: 0 }}
//                     whileHover={{ opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                   <motion.div
//                     className="absolute top-4 left-4"
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.2 }}
//                   >
//                     <span className="bg-[#d9b061] text-[#3f0d0c] px-3 py-1 rounded-full text-sm font-semibold">
//                       {post.category}
//                     </span>
//                   </motion.div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <motion.h3
//                     className="text-xl font-bold text-[#d8d0c5] mb-3 line-clamp-2"
//                     layoutId={`title-${post.id}`}
//                   >
//                     {post.title}
//                   </motion.h3>
//                   <motion.p
//                     className="text-[#d9c4a9] text-sm mb-4 line-clamp-3"
//                     layoutId={`description-${post.id}`}
//                   >
//                     {post.description}
//                   </motion.p>
//                   <div className="flex justify-between items-center text-xs text-[#8d6f57]">
//                     <span>{post.readTime}</span>
//                     <span>{post.date}</span>
//                   </div>
//                 </div>

//                 {/* Hover effect overlay */}
//                 <motion.div
//                   className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//                   style={{
//                     background:
//                       hoveredCard === post.id
//                         ? "linear-gradient(45deg, rgba(217, 176, 97, 0.1), rgba(217, 196, 169, 0.1))"
//                         : "transparent",
//                   }}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Modal */}
//         <AnimatePresence>
//           {selectedCard && (
//             <motion.div
//               className="fixed inset-0 bg-[#3f0d0c]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//               variants={overlayVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               onClick={() => setSelectedCard(null)}
//             >
//               <motion.div
//                 className="bg-[#d8d0c5]/20 backdrop-blur-md rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#d9c4a9]/30"
//                 variants={modalVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 onClick={(e) => e.stopPropagation()}
//                 style={{
//                   transformStyle: "preserve-3d",
//                 }}
//               >
//                 <div className="relative">
//                   <img
//                     src={selectedCard.image}
//                     alt={selectedCard.title}
//                     className="w-full h-64 object-cover rounded-t-2xl"
//                   />
//                   <button
//                     onClick={() => setSelectedCard(null)}
//                     className="absolute top-4 right-4 bg-[#3f0d0c]/50 text-[#d8d0c5] w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#3f0d0c]/70 transition-colors"
//                   >
//                     ×
//                   </button>
//                 </div>
//                 <div className="p-8">
//                   <div className="flex items-center gap-4 mb-4">
//                     <span className="bg-[#d9b061] text-[#3f0d0c] px-3 py-1 rounded-full text-sm font-semibold">
//                       {selectedCard.category}
//                     </span>
//                     <span className="text-[#8d6f57] text-sm">
//                       {selectedCard.readTime}
//                     </span>
//                     <span className="text-[#8d6f57] text-sm">
//                       {selectedCard.date}
//                     </span>
//                   </div>
//                   <motion.h2
//                     className="text-3xl font-bold text-[#d8d0c5] mb-6"
//                     layoutId={`title-${selectedCard.id}`}
//                   >
//                     {selectedCard.title}
//                   </motion.h2>
//                   <motion.p
//                     className="text-[#d9c4a9] text-lg leading-relaxed mb-6"
//                     layoutId={`description-${selectedCard.id}`}
//                   >
//                     {selectedCard.description}
//                   </motion.p>
//                   <motion.button
//                     className="bg-gradient-to-r from-[#d9b061] to-[#d9c4a9] text-[#3f0d0c] px-8 py-3 rounded-lg font-semibold hover:from-[#d9c4a9] hover:to-[#d9b061] transition-all duration-300"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Read Full Article
//                   </motion.button>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//           {/* Call to Action */}
//           <motion.div variants={itemVariants} className="text-center">
//             <motion.div
//               className="bg-gradient-to-r from-[#3f0d0c] to-[#8d6f57] rounded-3xl p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto mb-6"
//               whileHover={{
//                 scale: 1.02,
//                 boxShadow: "0 30px 60px -12px rgba(63, 13, 12, 0.4)",
//               }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             >
//               <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
//                 Ready to Work Together?
//               </motion.h2>
//               <motion.p
//                 className="text-lg sm:text-xl text-[#d9c4a9] mb-8 leading-relaxed"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 Let's create something extraordinary together. Get in touch and
//                 let's discuss your next project.
//               </motion.p>
//               <motion.button
//                 className="bg-white text-[#3f0d0c] px-8 sm:px-12 py-4 sm:py-6 rounded-2xl font-bold text-lg sm:text-xl shadow-lg"
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 15px 30px -5px rgba(255, 255, 255, 0.3)",
//                   y: -5,
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 25 }}
//               >
//                 <Link to="/ContactPage">Contact Us</Link>
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </>
//   );
// };

// export default OurServices;






// // language
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useLanguage } from './Navbar';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import flooring from '../src/assets/flooring.webp'; 
// import granite from '../src/assets/granite.jpg';
// import marble from '../src/assets/marble.jpg';
// import kitchenplatform from '../src/assets/kitchenplatform.jpg';
// import walltile from "../src/assets/walltile.jpg"
// import windowframe from "../src/assets/windowframe.jpg"
// import waterproofing from "../src/assets/waterproofing.jpg"
// import plumbing from "../src/assets/plumbing.jpg"
// import electricwork from "../src/assets/electricwork.jpg"
// import carpentry from "../src/assets/carpentry.jpg"
// import painting from "../src/assets/painting.webp"
// import falseceiling from "../src/assets/falseceiling.webp"
// const OurServices = () => {
//   const { language } = useLanguage();
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [hoveredCard, setHoveredCard] = useState(null);
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

//   // Translations
//   const translations = {
//     english: {
//       title: "Our Services",
//       readFullArticle: "Read Full Article",
//       readyToWork: "Ready to Work Together?",
//       letsTalk: "Let's create something extraordinary together. Get in touch and let's discuss your next project.",
//       contactUs: "Contact Us",
//       blogPosts: [
//         {
//           id: 1,
//           title: "Premium Flooring Solutions",
//           description: "We provide expert flooring installation services using high-quality materials such as tiles, wooden flooring, and vinyl, ensuring durability and aesthetic appeal.",
//           category: "Flooring",
//         },
//         {
//           id: 2,
//           title: "Elegant Granite Installation",
//           description: "We specialize in granite surface installations for kitchen platforms, flooring, and cladding, offering elegance with long-lasting strength.",
//           category: "Granite",
//         },
//         {
//           id: 3,
//           title: "Marble Fitting and Polishing",
//           description: "Add a touch of luxury with our fine marble work, from installation to finishing and polishing, for homes and offices.",
//           category: "Marble",
//         },
//         {
//           id: 4,
//           title: "Custom Kitchen Platforms",
//           description: "We design and install kitchen platforms using granite, marble, or quartz tailored to your kitchen layout and style.",
//           category: "Kitchen Platform",
//         },
//         {
//           id: 5,
//           title: "Wall Tiling Excellence",
//           description: "Our wall tiling services enhance interiors and exteriors with precise alignment, superior finish, and moisture resistance.",
//           category: "Wall Tiling",
//         },
//         {
//           id: 6,
//           title: "Sturdy Window Frames & Hardware",
//           description: "We offer installation of durable aluminum, UPVC, and wooden window frames along with high-quality fittings and locks.",
//           category: "Window Frames & Fittings",
//         },
//         {
//           id: 7,
//           title: "Expert Waterproofing Solutions",
//           description: "Our waterproofing services protect your property from water damage, leakage, and dampness using reliable methods and materials.",
//           category: "Waterproofing",
//         },
//         {
//           id: 8,
//           title: "Complete Plumbing Work",
//           description: "From new pipe installations to bathroom fittings and leak repairs, we handle all your plumbing needs with skilled professionals.",
//           category: "Plumbing",
//         },
//         {
//           id: 9,
//           title: "Safe & Efficient Electrical Services",
//           description: "We handle all types of electrical installations and repairs for homes and offices with a focus on safety and reliability.",
//           category: "Electrical Work",
//         },
//         {
//           id: 10,
//           title: " Custom Carpentry & Modular Furniture",
//           description: "We craft custom furniture, wardrobes, modular kitchens, and more with precision and design that matches your taste.",
//           category: "Furniture & Carpentry",
//         },
//         {
//           id: 11,
//           title: "Interior & Exterior Painting Services",
//           description: "We offer high-quality interior and exterior painting using weatherproof and washable paints, giving your property a vibrant and long-lasting look.",
//           category: "Painting Work",
//         },
//         {
//           id: 12,
//           title: "Modern False Ceiling Design & Setup",
//           description: "We design and install stylish false ceilings with POP, gypsum, or wooden materials to enhance lighting and overall aesthetics of interiors.",
//           category: "False Ceiling",
//         },
//       ]
//     },
//     gujarati: {
//       title: "અમારી સેવાઓ",
//       readFullArticle: "સંપૂર્ણ લેખ વાંચો",
//       readyToWork: "સાથે કામ કરવા તૈયાર છો?",
//       letsTalk: "ચાલો સાથે મળીને કંઈક અસાધારણ બનાવીએ. સંપર્ક કરો અને ચાલો તમારા આગામી પ્રોજેક્ટ વિશે વાત કરીએ.",
//       contactUs: "સંપર્ક કરો",
//       blogPosts: [
//         {
//           id: 1,
//           title: "ઉચ્ચ ગુણવત્તાવાળા ફ્લોરિંગ સોલ્યુશન્સ",
//           description: "અમે ટાઇલ્સ, લાકડાની અને વિનાઇલ જેવી ઉચ્ચ ગુણવત્તાવાળી સામગ્રીથી ટકાઉ અને આકર્ષક ફ્લોરિંગ ઇન્સ્ટોલેશન સેવા પ્રદાન કરીએ છીએ.",
//           category: "ફ્લોરિંગ",
//         },
//         {
//           id: 2,
//           title: "ભવ્ય ગ્રેનાઇટ ઇન્સ્ટોલેશન",
//           description: "અમે રસોડાના પ્લેટફોર્મ, ફ્લોરિંગ અને ક્લેડિંગ માટે ગ્રેનાઇટ ઇન્સ્ટોલેશનમાં નિષ્ણાત છીએ, જે ભવ્યતા અને લાંબાગાળાની મજબૂતતા આપે છે.",
//           category: "ગ્રેનાઇટ",
//         },
//         {
//           id: 3,
//           title: "માર્બલ ફિટિંગ અને પોલિશિંગ",
//           description: "ઘરો અને ઑફિસ માટે માર્બલ ઇન્સ્ટોલેશનથી લઇને પૉલિશિંગ સુધીની અમારી નમણિયાળ અને ભવ્ય સેવા સાથે ભવ્યતા ઉમેરો.",
//           category: "માર્બલ",
//         },
//         {
//           id: 4,
//           title: "કસ્ટમાઇઝ્ડ કિચન પ્લેટફોર્મ",
//           description: "અમે તમારા રસોડાના ડિઝાઇન અને જરૂરિયાત મુજબ ગ્રેનાઇટ, માર્બલ કે ક્વાર્ટઝથી કસ્ટમાઇઝ્ડ કિચન પ્લેટફોર્મ બનાવીએ છીએ.",
//           category: "રસોડું પ્લેટફોર્મ",
//         },
//         {
//           id: 5,
//           title: "શ્રેષ્ઠ દિવાલ ટાઇલિંગ",
//           description: "અમે અંદરની અને બહારની દિવાલ ટાઇલિંગમાં નિપુણતા સાથે, ચોકસાઈથી અને શ્રેષ્ઠ ફિનિશ સાથે ભવ્ય લુક તૈયાર કરીએ છીએ.",
//           category: "દિવાલ ટાઇલિંગ",
//         },
//         {
//           id: 6,
//           title: "મજબૂત વિન્ડો ફ્રેમ્સ અને ફિટિંગ્સ",
//           description: "અમે એલ્યુમિનિયમ, UPVC અને લાકડાની મજબૂત વિન્ડો ફ્રેમ્સ સાથે શ્રેષ્ઠ ફિટિંગ્સ અને લૉક્સ ઇન્સ્ટોલ કરીએ છીએ.",
//           category: "વિન્ડો ફ્રેમ્સ અને ફિટિંગ્સ",
//         },
//         {
//           id: 7,
//           title: "નિષ્ણાત વોટરપ્રૂફિંગ સોલ્યુશન્સ",
//           description: "અમે તમારા મકાનને લીકેજ, ભેજ અને પાણીથી થતી નુકશાનથી બચાવવા માટે ભરોસાપાત્ર વોટરપ્રૂફિંગ પદ્ધતિઓ ઉપયોગ કરીએ છીએ.",
//           category: "વોટરપ્રૂફિંગ",
//         },
//         {
//           id: 8,
//           title: "સંપૂર્ણ પ્લમ્બિંગ કામગીરી",
//           description: "નવા પાઇપિંગથી માંડીને બાથરૂમ ફિટિંગ્સ અને લીક રિપેર સુધી, અમે તમારી તમામ પ્લમ્બિંગ જરૂરિયાતો નિષ્ણાતોથી પૂર્ણ કરીએ છીએ.",
//           category: "પ્લમ્બિંગ",
//         },
//         {
//           id: 9,
//           title: "સુરક્ષિત અને કાર્યક્ષમ ઇલેક્ટ્રીકલ સેવાઓ",
//           description: "અમે ઘરો અને ઑફિસ માટે તમામ પ્રકારના ઇલેક્ટ્રીકલ ઇન્સ્ટોલેશન અને રિપેર કામ સુરક્ષિત રીતે અને નિર્ભરતાપૂર્વક કરીએ છીએ.",
//           category: "ઇલેક્ટ્રીકલ કામ",
//         },
//         {
//           id: 10,
//           title: "કસ્ટમ કાર્પેન્ટરી અને મોડ્યુલર ફર્નિચર",
//           description: "અમે તમારા પસંદ અનુસાર કસ્ટમ ફર્નિચર, વોર્ડ્રોબ્સ, મોડ્યુલર કિચન વગેરે ડિઝાઇન અને ચોકસાઇથી તૈયાર કરીએ છીએ.",
//           category: "ફર્નિચર અને કાર્પેન્ટરી",
//         },
//         {
//           id: 11,
//           title: "અંદર અને બહારનું પેઇન્ટિંગ",
//           description: "અમે અંદર અને બહારના ભાગ માટે હવામાનપ્રૂફ અને ધોવાઈ શકાય તેવી પેઇન્ટથી ઉચ્ચ ગુણવત્તાવાળું પેઇન્ટિંગ કામ કરીએ છીએ, જે તમારા મકાનને દીર્ઘકાળ સુધી ચમકાવે છે.",
//           category: "પેઇન્ટિંગ કામ",
//         },
//         {
//           id: 12,
//           title: "આધુનિક ફોલ્સ સીલિંગ ડિઝાઇન અને ઇન્સ્ટોલેશન",
//           description: "અમે POP, જિપ્સમ કે લાકડાની સામગ્રીથી આધુનિક ફોલ્સ સીલિંગ ડિઝાઇન અને ઇન્સ્ટોલ કરીએ છીએ, જે ઘરના અંદરના લુક અને લાઇટિંગને વધુ ભવ્ય બનાવે છે.",
//           category: "ફોલ્સ સીલિંગ",
//         },
//       ]
//     }
//   };

//   const currentTranslations = translations[language];
//   const currentBlogPosts = currentTranslations.blogPosts.map((post, index) => ({
//     ...post,
//     image: [
//       flooring,
//       granite,
//       marble,
//       kitchenplatform,
//       walltile,
//       windowframe,
//       waterproofing,
//       plumbing,
//       electricwork,
//       carpentry,
//       painting,
//       falseceiling
//     ][index]
//   }));

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: {
//       opacity: 0,
//       y: 50,
//       rotateX: -15,
//       scale: 0.9,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       rotateX: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//     hover: {
//       y: -10,
//       rotateX: 5,
//       rotateY: 5,
//       scale: 1.02,
//       transition: {
//         duration: 0.3,
//         ease: "easeOut",
//       },
//     },
//   };

//   const overlayVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//     exit: { opacity: 0 },
//   };

//   const modalVariants = {
//     hidden: {
//       opacity: 0,
//       scale: 0.8,
//       rotateY: -15,
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       rotateY: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.8,
//       rotateY: 15,
//       transition: {
//         duration: 0.3,
//       },
//     },
//   };

//   return (
//     <>
//       {/* <Navbar/> */}
//       <div className="min-h-screen bg-gradient-to-br from-[#d8d0c5] via-[#d9c4a9] to-[#d9b061] relative overflow-hidden">
//         {/* Animated background elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <motion.div
//             className="absolute -top-40 -right-40 w-80 h-80 bg-[#d9b061] rounded-full mix-blend-multiply filter blur-xl opacity-40"
//             animate={{
//               scale: [1, 1.2, 1],
//               rotate: [0, 180, 360],
//             }}
//             transition={{
//               duration: 20,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//           <motion.div
//             className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#d9c4a9] rounded-full mix-blend-multiply filter blur-xl opacity-40"
//             animate={{
//               scale: [1.2, 1, 1.2],
//               rotate: [360, 180, 0],
//             }}
//             transition={{
//               duration: 25,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//         </div>

//         {/* Header */}
//         <motion.header
//           className="relative z-10 text-center py-16 px-4"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="py-4 text-4xl md:text-6xl font-bold text-[#3f0d0c] mb-2 leading-tight bg-gradient-to-r from-[#d9b061] to-[#d9c4a9] bg-clip-text text-transparent">
//             {currentTranslations.title}
//           </h1>
//           <motion.div
//             className="max-w-7xl h-1 bg-gradient-to-r from-[#d9b061] to-[#d9c4a9] mx-auto mb-8"
//             initial={{ width: 0 }}
//             animate={{ width: "auto" }}
//             transition={{ duration: 1, delay: 0.5 }}
//           />
//         </motion.header>

//         {/* Blog Grid */}
//         <motion.div
//           className="relative z-10 max-w-7xl mx-auto px-4 pb-16"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {currentBlogPosts.map((post) => (
//               <motion.div
//                 key={post.id}
//                 variants={cardVariants}
//                 whileHover="hover"
//                 className="bg-[#d8d0c5]/20 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer group border border-[#d9c4a9]/30"
//                 style={{
//                   transformStyle: "preserve-3d",
//                   perspective: "1000px",
//                 }}
//                 onMouseEnter={() => setHoveredCard(post.id)}
//                 onMouseLeave={() => setHoveredCard(null)}
//                 onClick={() => setSelectedCard(post)}
//               >
//                 {/* Image */}
//                 <div className="relative overflow-hidden h-48">
//                   <motion.img
//                     src={post.image}
//                     alt={post.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-t from-[#3f0d0c]/60 to-transparent"
//                     initial={{ opacity: 0 }}
//                     whileHover={{ opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                   <motion.div
//                     className="absolute top-4 left-4"
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.2 }}
//                   >
//                     <span className="bg-[#d9b061] text-[#3f0d0c] px-3 py-1 rounded-full text-sm font-semibold">
//                       {post.category}
//                     </span>
//                   </motion.div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <motion.h3
//                     className="text-xl font-bold text-[#d8d0c5] mb-3 line-clamp-2"
//                     layoutId={`title-${post.id}`}
//                   >
//                     {post.title}
//                   </motion.h3>
//                   <motion.p
//                     className="text-[#d9c4a9] text-sm mb-4 line-clamp-3"
//                     layoutId={`description-${post.id}`}
//                   >
//                     {post.description}
//                   </motion.p>
//                 </div>

//                 {/* Hover effect overlay */}
//                 <motion.div
//                   className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//                   style={{
//                     background:
//                       hoveredCard === post.id
//                         ? "linear-gradient(45deg, rgba(217, 176, 97, 0.1), rgba(217, 196, 169, 0.1))"
//                         : "transparent",
//                   }}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Modal */}
//         <AnimatePresence>
//           {selectedCard && (
//             <motion.div
//               className="fixed inset-0 bg-[#3f0d0c]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//               variants={overlayVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               onClick={() => setSelectedCard(null)}
//             >
//               <motion.div
//                 className="bg-[#d8d0c5]/20 backdrop-blur-md rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#d9c4a9]/30"
//                 variants={modalVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 onClick={(e) => e.stopPropagation()}
//                 style={{
//                   transformStyle: "preserve-3d",
//                 }}
//               >
//                 <div className="relative">
//                   <img
//                     src={selectedCard.image}
//                     alt={selectedCard.title}
//                     className="w-full h-64 object-cover rounded-t-2xl"
//                   />
//                   <button
//                     onClick={() => setSelectedCard(null)}
//                     className="absolute top-4 right-4 bg-[#3f0d0c]/50 text-[#d8d0c5] w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#3f0d0c]/70 transition-colors"
//                   >
//                     ×
//                   </button>
//                 </div>
//                 <div className="p-8">
//                   <div className="flex items-center gap-4 mb-4">
//                     <span className="bg-[#d9b061] text-[#3f0d0c] px-3 py-1 rounded-full text-sm font-semibold">
//                       {selectedCard.category}
//                     </span>
//                   </div>
//                   <motion.h2
//                     className="text-3xl font-bold text-[#d8d0c5] mb-6"
//                     layoutId={`title-${selectedCard.id}`}
//                   >
//                     {selectedCard.title}
//                   </motion.h2>
//                   <motion.p
//                     className="text-[#d9c4a9] text-lg leading-relaxed mb-6"
//                     layoutId={`description-${selectedCard.id}`}
//                   >
//                     {selectedCard.description}
//                   </motion.p>
//                   <motion.button
//                     className="bg-gradient-to-r from-[#d9b061] to-[#d9c4a9] text-[#3f0d0c] px-8 py-3 rounded-lg font-semibold hover:from-[#d9c4a9] hover:to-[#d9b061] transition-all duration-300"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     {currentTranslations.readFullArticle}
//                   </motion.button>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//           {/* Call to Action */}
//           <motion.div variants={itemVariants} className="text-center">
//             <motion.div
//               className="bg-gradient-to-r from-[#3f0d0c] to-[#8d6f57] rounded-3xl p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto mb-6"
//               whileHover={{
//                 scale: 1.02,
//                 boxShadow: "0 30px 60px -12px rgba(63, 13, 12, 0.4)",
//               }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             >
//               <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
//                 {currentTranslations.readyToWork}
//               </motion.h2>
//               <motion.p
//                 className="text-lg sm:text-xl text-[#d9c4a9] mb-8 leading-relaxed"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 {currentTranslations.letsTalk}
//               </motion.p>
//               <motion.button
//                 className="bg-white text-[#3f0d0c] px-8 sm:px-12 py-4 sm:py-6 rounded-2xl font-bold text-lg sm:text-xl shadow-lg"
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 15px 30px -5px rgba(255, 255, 255, 0.3)",
//                   y: -5,
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 25 }}
//               >
//                 <Link to="/ContactPage">{currentTranslations.contactUs}</Link>
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </>
//   );
// };

// export default OurServices;






// language
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from './Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import flooring from '../src/assets/flooring.webp'; 
import granite from '../src/assets/granite.jpg';
import marble from '../src/assets/marble.jpg';
import kitchenplatform from '../src/assets/kitchenplatform.jpg';
import walltile from "../src/assets/walltile.jpg"
import windowframe from "../src/assets/windowframe.jpg"
import waterproofing from "../src/assets/waterproofing.jpg"
import plumbing from "../src/assets/plumbing.jpg"
import electricwork from "../src/assets/electricwork.jpg"
import carpentry from "../src/assets/carpentry.jpg"
import painting from "../src/assets/painting.webp"
import falseceiling from "../src/assets/falseceiling.webp"
const OurServices = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
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

  // Translations
  const translations = {
    english: {
      title: "Our Services",
      readFullArticle: "Read Full Article",
      readyToWork: "Ready to Work Together?",
      letsTalk: "Let's create something extraordinary together. Get in touch and let's discuss your next project.",
      contactUs: "Contact Us",
      blogPosts: [
        {
          id: 1,
          title: "Premium Flooring Solutions",
          description: "We provide expert flooring installation services using high-quality materials such as tiles, wooden flooring, and vinyl, ensuring durability and aesthetic appeal.",
          category: "Flooring",
        },
        {
          id: 2,
          title: "Elegant Granite Installation",
          description: "We specialize in granite surface installations for kitchen platforms, flooring, and cladding, offering elegance with long-lasting strength.",
          category: "Granite",
        },
        {
          id: 3,
          title: "Marble Fitting and Polishing",
          description: "Add a touch of luxury with our fine marble work, from installation to finishing and polishing, for homes and offices.",
          category: "Marble",
        },
        {
          id: 4,
          title: "Custom Kitchen Platforms",
          description: "We design and install kitchen platforms using granite, marble, or quartz tailored to your kitchen layout and style.",
          category: "Kitchen Platform",
        },
        {
          id: 5,
          title: "Wall Tiling Excellence",
          description: "Our wall tiling services enhance interiors and exteriors with precise alignment, superior finish, and moisture resistance.",
          category: "Wall Tiling",
        },
        {
          id: 6,
          title: "Sturdy Window Frames & Hardware",
          description: "We offer installation of durable aluminum, UPVC, and wooden window frames along with high-quality fittings and locks.",
          category: "Window Frames & Fittings",
        },
        {
          id: 7,
          title: "Expert Waterproofing Solutions",
          description: "Our waterproofing services protect your property from water damage, leakage, and dampness using reliable methods and materials.",
          category: "Waterproofing",
        },
        {
          id: 8,
          title: "Complete Plumbing Work",
          description: "From new pipe installations to bathroom fittings and leak repairs, we handle all your plumbing needs with skilled professionals.",
          category: "Plumbing",
        },
        {
          id: 9,
          title: "Safe & Efficient Electrical Services",
          description: "We handle all types of electrical installations and repairs for homes and offices with a focus on safety and reliability.",
          category: "Electrical Work",
        },
        {
          id: 10,
          title: " Custom Carpentry & Modular Furniture",
          description: "We craft custom furniture, wardrobes, modular kitchens, and more with precision and design that matches your taste.",
          category: "Furniture & Carpentry",
        },
        {
          id: 11,
          title: "Interior & Exterior Painting Services",
          description: "We offer high-quality interior and exterior painting using weatherproof and washable paints, giving your property a vibrant and long-lasting look.",
          category: "Painting Work",
        },
        {
          id: 12,
          title: "Modern False Ceiling Design & Setup",
          description: "We design and install stylish false ceilings with POP, gypsum, or wooden materials to enhance lighting and overall aesthetics of interiors.",
          category: "False Ceiling",
        },
      ]
    },
    gujarati: {
      title: "અમારી સેવાઓ",
      readFullArticle: "સંપૂર્ણ લેખ વાંચો",
      readyToWork: "સાથે કામ કરવા તૈયાર છો?",
      letsTalk: "ચાલો સાથે મળીને કંઈક અસાધારણ બનાવીએ. સંપર્ક કરો અને ચાલો તમારા આગામી પ્રોજેક્ટ વિશે વાત કરીએ.",
      contactUs: "સંપર્ક કરો",
      blogPosts: [
        {
          id: 1,
          title: "ઉચ્ચ ગુણવત્તાવાળા ફ્લોરિંગ સોલ્યુશન્સ",
          description: "અમે ટાઇલ્સ, લાકડાની અને વિનાઇલ જેવી ઉચ્ચ ગુણવત્તાવાળી સામગ્રીથી ટકાઉ અને આકર્ષક ફ્લોરિંગ ઇન્સ્ટોલેશન સેવા પ્રદાન કરીએ છીએ.",
          category: "ફ્લોરિંગ",
        },
        {
          id: 2,
          title: "ભવ્ય ગ્રેનાઇટ ઇન્સ્ટોલેશન",
          description: "અમે રસોડાના પ્લેટફોર્મ, ફ્લોરિંગ અને ક્લેડિંગ માટે ગ્રેનાઇટ ઇન્સ્ટોલેશનમાં નિષ્ણાત છીએ, જે ભવ્યતા અને લાંબાગાળાની મજબૂતતા આપે છે.",
          category: "ગ્રેનાઇટ",
        },
        {
          id: 3,
          title: "માર્બલ ફિટિંગ અને પોલિશિંગ",
          description: "ઘરો અને ઑફિસ માટે માર્બલ ઇન્સ્ટોલેશનથી લઇને પૉલિશિંગ સુધીની અમારી નમણિયાળ અને ભવ્ય સેવા સાથે ભવ્યતા ઉમેરો.",
          category: "માર્બલ",
        },
        {
          id: 4,
          title: "કસ્ટમાઇઝ્ડ કિચન પ્લેટફોર્મ",
          description: "અમે તમારા રસોડાના ડિઝાઇન અને જરૂરિયાત મુજબ ગ્રેનાઇટ, માર્બલ કે ક્વાર્ટઝથી કસ્ટમાઇઝ્ડ કિચન પ્લેટફોર્મ બનાવીએ છીએ.",
          category: "રસોડું પ્લેટફોર્મ",
        },
        {
          id: 5,
          title: "શ્રેષ્ઠ દિવાલ ટાઇલિંગ",
          description: "અમે અંદરની અને બહારની દિવાલ ટાઇલિંગમાં નિપુણતા સાથે, ચોકસાઈથી અને શ્રેષ્ઠ ફિનિશ સાથે ભવ્ય લુક તૈયાર કરીએ છીએ.",
          category: "દિવાલ ટાઇલિંગ",
        },
        {
          id: 6,
          title: "મજબૂત વિન્ડો ફ્રેમ્સ અને ફિટિંગ્સ",
          description: "અમે એલ્યુમિનિયમ, UPVC અને લાકડાની મજબૂત વિન્ડો ફ્રેમ્સ સાથે શ્રેષ્ઠ ફિટિંગ્સ અને લૉક્સ ઇન્સ્ટોલ કરીએ છીએ.",
          category: "વિન્ડો ફ્રેમ્સ અને ફિટિંગ્સ",
        },
        {
          id: 7,
          title: "નિષ્ણાત વોટરપ્રૂફિંગ સોલ્યુશન્સ",
          description: "અમે તમારા મકાનને લીકેજ, ભેજ અને પાણીથી થતી નુકશાનથી બચાવવા માટે ભરોસાપાત્ર વોટરપ્રૂફિંગ પદ્ધતિઓ ઉપયોગ કરીએ છીએ.",
          category: "વોટરપ્રૂફિંગ",
        },
        {
          id: 8,
          title: "સંપૂર્ણ પ્લમ્બિંગ કામગીરી",
          description: "નવા પાઇપિંગથી માંડીને બાથરૂમ ફિટિંગ્સ અને લીક રિપેર સુધી, અમે તમારી તમામ પ્લમ્બિંગ જરૂરિયાતો નિષ્ણાતોથી પૂર્ણ કરીએ છીએ.",
          category: "પ્લમ્બિંગ",
        },
        {
          id: 9,
          title: "સુરક્ષિત અને કાર્યક્ષમ ઇલેક્ટ્રીકલ સેવાઓ",
          description: "અમે ઘરો અને ઑફિસ માટે તમામ પ્રકારના ઇલેક્ટ્રીકલ ઇન્સ્ટોલેશન અને રિપેર કામ સુરક્ષિત રીતે અને નિર્ભરતાપૂર્વક કરીએ છીએ.",
          category: "ઇલેક્ટ્રીકલ કામ",
        },
        {
          id: 10,
          title: "કસ્ટમ કાર્પેન્ટરી અને મોડ્યુલર ફર્નિચર",
          description: "અમે તમારા પસંદ અનુસાર કસ્ટમ ફર્નિચર, વોર્ડ્રોબ્સ, મોડ્યુલર કિચન વગેરે ડિઝાઇન અને ચોકસાઇથી તૈયાર કરીએ છીએ.",
          category: "ફર્નિચર અને કાર્પેન્ટરી",
        },
        {
          id: 11,
          title: "અંદર અને બહારનું પેઇન્ટિંગ",
          description: "અમે અંદર અને બહારના ભાગ માટે હવામાનપ્રૂફ અને ધોવાઈ શકાય તેવી પેઇન્ટથી ઉચ્ચ ગુણવત્તાવાળું પેઇન્ટિંગ કામ કરીએ છીએ, જે તમારા મકાનને દીર્ઘકાળ સુધી ચમકાવે છે.",
          category: "પેઇન્ટિંગ કામ",
        },
        {
          id: 12,
          title: "આધુનિક ફોલ્સ સીલિંગ ડિઝાઇન અને ઇન્સ્ટોલેશન",
          description: "અમે POP, જિપ્સમ કે લાકડાની સામગ્રીથી આધુનિક ફોલ્સ સીલિંગ ડિઝાઇન અને ઇન્સ્ટોલ કરીએ છીએ, જે ઘરના અંદરના લુક અને લાઇટિંગને વધુ ભવ્ય બનાવે છે.",
          category: "ફોલ્સ સીલિંગ",
        },
      ]
    }
  };

  const currentTranslations = translations[language];
  const currentBlogPosts = currentTranslations.blogPosts.map((post, index) => ({
    ...post,
    image: [
      flooring,
      granite,
      marble,
      kitchenplatform,
      walltile,
      windowframe,
      waterproofing,
      plumbing,
      electricwork,
      carpentry,
      painting,
      falseceiling
    ][index]
  }));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -15,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      rotateX: 5,
      rotateY: 5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotateY: 15,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      {/* <Navbar/> */}
      <div className="min-h-screen relative overflow-hidden">
   

        {/* Header */}
        <motion.header
          className="relative z-10 text-center py-16 px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className=" text-5xl md:text-7xl font-bold text-[#3f0d0c] mb-2 leading-tight">
            {currentTranslations.title}
          </h1>
          <motion.div
            className="max-w-7xl h-1 bg-gradient-to-r from-[#8d6f57] to-[#3f0d0c] mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.header>

        {/* Blog Grid */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 pb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentBlogPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer group border border-white/30"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
                onMouseEnter={() => setHoveredCard(post.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedCard(post)}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#3f0d0c]/60 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute top-4 left-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="bg-[#d9b061] text-[#3f0d0c] px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-bold text-[#3f0d0c] mb-3 line-clamp-2"
                    layoutId={`title-${post.id}`}
                  >
                    {post.title}
                  </motion.h3>
                  <motion.p
                    className="text-[#4a392c] text-sm mb-4 line-clamp-3"
                    layoutId={`description-${post.id}`}
                  >
                    {post.description}
                  </motion.p>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      hoveredCard === post.id
                        ? "linear-gradient(45deg, rgba(217, 176, 97, 0.1), rgba(217, 196, 169, 0.1))"
                        : "transparent",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCard && (
            <motion.div
              className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4 "
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSelectedCard(null)}
            >
              <motion.div
                className="bg-white/20 backdrop-blur-md rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/30"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative">
                  <img
                    src={selectedCard.image}
                    alt={selectedCard.title}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="absolute top-4 right-4 bg-[#3f0d0c]/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#3f0d0c]/70 transition-colors"
                  >
                    ×
                  </button>
                </div>
                <div className="p-8 bg-[#d8d0c5]">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-[#d9b061] text-[#3f0d0c] px-3 py-1 rounded-full text-sm font-semibold">
                      {selectedCard.category}
                    </span>
                  </div>
                  <motion.h2
                    className="text-3xl font-bold text-[#3f0d0c] mb-6"
                    layoutId={`title-${selectedCard.id}`}
                  >
                    {selectedCard.title}
                  </motion.h2>
                  <motion.p
                    className="text-[#8d6f57] text-lg leading-relaxed mb-6"
                    layoutId={`description-${selectedCard.id}`}
                  >
                    {selectedCard.description}
                  </motion.p>
                  {/* <motion.button
                    className="bg-gradient-to-r from-[#d9b061] to-[#d9c4a9] text-[#3f0d0c] px-8 py-3 rounded-lg font-semibold hover:from-[#d9c4a9] hover:to-[#d9b061] transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {currentTranslations.readFullArticle}
                  </motion.button> */}
                </div>
              </motion.div>
            </motion.div>
          )}
          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mx-4">
            <motion.div
              className="bg-gradient-to-r from-[#3f0d0c] to-[#8d6f57] rounded-3xl p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto mb-6"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 30px 60px -12px rgba(63, 13, 12, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                {currentTranslations.readyToWork}
              </motion.h2>
              <motion.p
                className="text-lg sm:text-xl text-[#d9c4a9] mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {currentTranslations.letsTalk}
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
                <button onClick={() => navigate('/ContactPage')}>{currentTranslations.contactUs}</button>
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default OurServices;