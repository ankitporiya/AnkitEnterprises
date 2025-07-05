// import React, { useState } from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   ArrowUp,
// } from "lucide-react";
// import { useLanguage } from "./Navbar";

// const Footer = () => {
//   const [emailSubscription, setEmailSubscription] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const { language } = useLanguage();
//   // Add this state for email validation
//   const [emailError, setEmailError] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
//   // Email validation function
//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };
//   // Handle email change with validation
//   const handleEmailChange = (e) => {
//     const email = e.target.value;
//     setEmailSubscription(email);

//     if (email && !validateEmail(email)) {
//       setEmailError("Please enter a valid email address");
//     } else {
//       setEmailError("");
//     }
//   };

//   const content = {
//     english: {
//       companyName: "Ankit Enterprises",
//       companyDescription:
//         "Building extraordinary spaces with trust, excellence, and innovation. We transform visions into reality through meticulous craftsmanship and modern techniques.",
//       phone: "+91 8779556675",
//       email: "ankitenterprises@gmail.com",
//       address: "Kurar Village, Malad East, Mumbai - 400097",
//       servicesTitle: "Our Services",
//       services: [
//         "Residential Construction",
//         "Commercial Building",
//         "Renovation & Remodeling",
//         "Project Management",
//         "Design Consultation",
//       ],
//       newsletterTitle: "Stay Updated",
//       newsletterDescription:
//         "Subscribe to our newsletter for the latest updates and construction insights.",
//       emailPlaceholder: "Enter your email",
//       subscribeButton: "Subscribe Now",
//       followUs: "Follow Us",
//       copyright: "© 2025 Ankit Enterprises. All rights reserved.",
//       privacyPolicy: "Privacy Policy",
//       termsOfService: "Terms of Service",
//       cookiePolicy: "Cookie Policy",
//       builtWith: "Built with excellence",
//       subscribeSuccess: "Thank you for subscribing!",
//     },
//     gujarati: {
//       companyName: "અંકિત એન્ટરપ્રાઇઝિસ",
//       companyDescription:
//         "વિશ્વાસ, શ્રેષ્ઠતા અને નવીનતા સાથે અસાધારણ જગ્યાઓ બનાવવી. અમે ઝીણવટભરી કારીગરી અને આધુનિક તકનીકો દ્વારા દ્રષ્ટિકોણને વાસ્તવિકતામાં રૂપાંતરિત કરીએ છીએ.",
//       phone: "+91 8779556675",
//       email: "ankitenterprises@gmail.com",
//       address: "Kurar Village, Malad East, Mumbai - 400097",
//       servicesTitle: "અમારી સેવાઓ",
//       services: [
//         "રેસિડેન્શિયલ કન્સ્ટ્રક્શન",
//         "કોમર્શિયલ બિલ્ડિંગ",
//         "નવીનીકરણ અને રીમોડેલિંગ",
//         "પ્રોજેક્ટ મેનેજમેન્ટ",
//         "ડિઝાઇન કન્સલ્ટેશન",
//       ],
//       newsletterTitle: "અપડેટ રહો",
//       newsletterDescription:
//         "નવીનતમ અપડેટ્સ અને કન્સ્ટ્રક્શન આંતરદૃષ્ટિ માટે અમારા ન્યૂઝલેટરને સબ્સ્ક્રાઇબ કરો.",
//       emailPlaceholder: "તમારું ઇમેઇલ દાખલ કરો",
//       subscribeButton: "હવે સબ્સ્ક્રાઇબ કરો",
//       followUs: "અમને ફોલો કરો",
//       copyright: "© ૨૦૨૫ અંકિત એન્ટરપ્રાઇઝિસ. બધા અધિકારો સુરક્ષિત.",
//       privacyPolicy: "ગોપનીયતા નીતિ",
//       termsOfService: "સેવાની શરતો",
//       cookiePolicy: "કૂકી નીતિ",
//       builtWith: "શ્રેષ્ઠતા સાથે બનાવેલ",
//       subscribeSuccess: "સબ્સ્ક્રાઇબ કરવા બદલ આભાર!",
//     },
//   };

//   const currentContent = content[language];

//   React.useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleSubscribe = async () => {
//     if (emailSubscription.trim() && !emailError) {
//       setIsSubmitting(true);
//       try {
//         const response = await fetch(`${baseUrl}/api/subscribe`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: emailSubscription.trim()
//           }),
//         });

//         if (response.ok) {
//           setShowModal(true);
//           setEmailSubscription("");
//           setTimeout(() => setShowModal(false), 3000);
//         } else {
//           // Handle error response
//           const errorData = await response.json();
//           console.error('Subscription error:', errorData);
//           // You can add error handling here if needed
//         }
//       } catch (error) {
//         console.error('Network error:', error);
//         // You can add error handling here if needed
//       } finally {
//         setIsSubmitting(false);
//       }
//     }
//   };

//   return (
//     <footer className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100 overflow-hidden">
//       {/* Marble background pattern */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/40 via-transparent to-amber-300/40"></div>
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-yellow-300/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-amber-400/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Main Footer Content */}
//         <div className="py-16 lg:py-20">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
//             {/* Company Info */}
//             <div className="lg:col-span-2">
//               <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
//                 <h3 className="text-2xl lg:text-3xl font-bold text-amber-900 mb-4">
//                   {currentContent.companyName}
//                 </h3>
//                 <p className="text-amber-800/80 text-base lg:text-lg leading-relaxed mb-6">
//                   {currentContent.companyDescription}
//                 </p>
//               </div>

//               {/* Contact Info */}
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-3 group cursor-pointer">
//                   <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
//                     <Phone className="w-5 h-5 text-white" />
//                   </div>
//                   <span className="text-amber-800 group-hover:text-amber-900 transition-colors duration-300">
//                     {currentContent.phone}
//                   </span>
//                 </div>

//                 <div className="flex items-center space-x-3 group cursor-pointer">
//                   <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
//                     <Mail className="w-5 h-5 text-white" />
//                   </div>
//                   <span className="text-amber-800 group-hover:text-amber-900 transition-colors duration-300">
//                     {currentContent.email}
//                   </span>
//                 </div>

//                 <div className="flex items-center space-x-3 group cursor-pointer">
//                   <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
//                     <MapPin className="w-5 h-5 text-white" />
//                   </div>
//                   <span className="text-amber-800 group-hover:text-amber-900 transition-colors duration-300">
//                     {currentContent.address}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Services */}
//             <div className="transform hover:translate-y-[-4px] transition-transform duration-300">
//               <h4 className="text-xl font-semibold text-amber-900 mb-6">
//                 {currentContent.servicesTitle}
//               </h4>
//               <ul className="space-y-3">
//                 {currentContent.services.map((service, index) => (
//                   <li key={index} className="group">
//                     <a
//                       href="#"
//                       className="text-amber-800/80 hover:text-amber-900 transition-all duration-300 flex items-center space-x-2"
//                     >
//                       <span className="w-1.5 h-1.5 bg-amber-600 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
//                       <span>{service}</span>
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Newsletter */}
//             <div className="transform hover:translate-y-[-4px] transition-transform duration-300">
//               <h4 className="text-xl font-semibold text-amber-900 mb-6">
//                 {currentContent.newsletterTitle}
//               </h4>
//               <p className="text-amber-800/80 mb-6">
//                 {currentContent.newsletterDescription}
//               </p>

//               {/* // Updated subscription form with validation */}
//               <div className="space-y-4">
//                 <div className="relative">
//                   <input
//                     type="email"
//                     value={emailSubscription}
//                     onChange={handleEmailChange}
//                     placeholder={currentContent.emailPlaceholder}
//                     className={`w-full px-4 py-3 bg-white/70 border-2 rounded-lg focus:outline-none transition-all duration-300 text-amber-900 placeholder-amber-600/60 ${
//                       emailError
//                         ? "border-red-400 focus:border-red-500"
//                         : "border-amber-200 focus:border-amber-500"
//                     }`}
//                   />
//                   {emailError && (
//                     <p className="mt-1 text-sm text-red-600 font-medium">
//                       {emailError}
//                     </p>
//                   )}
//                 </div>
//                 <button
//                   onClick={handleSubscribe}
//                   disabled={!emailSubscription || emailError}
//                   className={`w-full py-3 px-6 rounded-lg font-semibold transform transition-all duration-300 shadow-lg ${
//                     !emailSubscription || emailError
//                       ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                       : "bg-gradient-to-r from-amber-600 to-yellow-600 text-white hover:from-amber-700 hover:to-yellow-700 hover:scale-105 hover:shadow-xl"
//                   }`}
//                 >
//                   {currentContent.subscribeButton}
//                 </button>
//               </div>

//               {/* Social Links */}
//               <div className="mt-8">
//                 <h5 className="text-lg font-medium text-amber-900 mb-4">
//                   {currentContent.followUs}
//                 </h5>
//                 <div className="flex space-x-4">
//                   {[
//                     { icon: Facebook, color: "hover:bg-blue-600" },
//                     { icon: Twitter, color: "hover:bg-sky-500" },
//                     { icon: Instagram, color: "hover:bg-pink-600" },
//                     { icon: Linkedin, color: "hover:bg-blue-700" },
//                   ].map(({ icon: Icon, color }, index) => (
//                     <a
//                       key={index}
//                       href="#"
//                       className={`w-12 h-12 bg-amber-600 ${color} rounded-full flex items-center justify-center text-white transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl`}
//                     >
//                       <Icon className="w-5 h-5" />
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-amber-300/50 py-8">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
//               <p className="text-amber-800/80 text-center md:text-left">
//                 {currentContent.copyright}
//               </p>
//               <div className="flex space-x-6">
//                 <a
//                   href="#"
//                   className="text-amber-800/80 hover:text-amber-900 transition-colors duration-300 text-sm"
//                 >
//                   {currentContent.privacyPolicy}
//                 </a>
//                 <a
//                   href="#"
//                   className="text-amber-800/80 hover:text-amber-900 transition-colors duration-300 text-sm"
//                 >
//                   {currentContent.termsOfService}
//                 </a>
//                 <a
//                   href="#"
//                   className="text-amber-800/80 hover:text-amber-900 transition-colors duration-300 text-sm"
//                 >
//                   {currentContent.cookiePolicy}
//                 </a>
//               </div>
//             </div>

//             <div className="flex items-center space-x-4">
//               <span className="text-amber-800/60 text-sm">
//                 {currentContent.builtWith}
//               </span>
//               <div className="flex space-x-1">
//                 <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>
//                 <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce delay-100"></div>
//                 <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-200"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll to Top Button */}
//       <button
//         onClick={scrollToTop}
//         className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 z-50 ${
//           isScrolled ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
//         } hover:scale-110 hover:-translate-y-1`}
//       >
//         <ArrowUp className="w-6 h-6 mx-auto" />
//       </button>

//       {/* Success Modal */}
//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           <div
//             className="absolute inset-0 bg-black/50 backdrop-blur-sm"
//             onClick={() => setShowModal(false)}
//           ></div>
//           <div className="relative bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform scale-100 opacity-100 transition-all duration-300">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
//                 <svg
//                   className="w-8 h-8 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold text-amber-900 mb-2">
//                 {currentContent.subscribeSuccess}
//               </h3>
//               <p className="text-amber-800/80 mb-6">
//                 {language === "english"
//                   ? "We'll keep you updated with our latest news and insights."
//                   : "અમે તમને અમારા નવીનતમ સમાચાર અને આંતરદૃષ્ટિ સાથે અપડેટ રાખીશું."}
//               </p>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-6 py-2 rounded-lg font-medium hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
//               >
//                 {language === "english" ? "Close" : "બંધ કરો"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Additional CSS for animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }

//         .bg-gradient-radial {
//           background: radial-gradient(circle, var(--tw-gradient-stops));
//         }

//         @media (max-width: 768px) {
//           .grid-cols-1 > div {
//             margin-bottom: 2rem;
//           }
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;





import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import { useLanguage } from "./Navbar";

const Footer = () => {
  const [emailSubscription, setEmailSubscription] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { language } = useLanguage();
  // Add this state for email validation
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  // Handle email change with validation
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmailSubscription(email);

    if (email && !validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const content = {
    english: {
      companyName: "Ankit Enterprises",
      companyDescription:
        "Building extraordinary spaces with trust, excellence, and innovation. We transform visions into reality through meticulous craftsmanship and modern techniques.",
      phone: "+91 8779556675",
      email: "ankitenterprises@gmail.com",
      address: "Kurar Village, Malad East, Mumbai - 400097",
      servicesTitle: "Our Services",
      services: [
        "Residential Construction",
        "Commercial Building",
        "Renovation & Remodeling",
        "Project Management",
        "Design Consultation",
      ],
      newsletterTitle: "Stay Updated",
      newsletterDescription:
        "Subscribe to our newsletter for the latest updates and construction insights.",
      emailPlaceholder: "Enter your email",
      subscribeButton: "Subscribe Now",
      followUs: "Follow Us",
      copyright: "© 2025 Ankit Enterprises. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      cookiePolicy: "Cookie Policy",
      builtWith: "Built with excellence",
      subscribeSuccess: "Thank you for subscribing!",
      emailAlreadyExists: "Email already exists",
    },
    gujarati: {
      companyName: "અંકિત એન્ટરપ્રાઇઝિસ",
      companyDescription:
        "વિશ્વાસ, શ્રેષ્ઠતા અને નવીનતા સાથે અસાધારણ જગ્યાઓ બનાવવી. અમે ઝીણવટભરી કારીગરી અને આધુનિક તકનીકો દ્વારા દ્રષ્ટિકોણને વાસ્તવિકતામાં રૂપાંતરિત કરીએ છીએ.",
      phone: "+91 8779556675",
      email: "ankitenterprises@gmail.com",
      address: "Kurar Village, Malad East, Mumbai - 400097",
      servicesTitle: "અમારી સેવાઓ",
      services: [
        "રેસિડેન્શિયલ કન્સ્ટ્રક્શન",
        "કોમર્શિયલ બિલ્ડિંગ",
        "નવીનીકરણ અને રીમોડેલિંગ",
        "પ્રોજેક્ટ મેનેજમેન્ટ",
        "ડિઝાઇન કન્સલ્ટેશન",
      ],
      newsletterTitle: "અપડેટ રહો",
      newsletterDescription:
        "નવીનતમ અપડેટ્સ અને કન્સ્ટ્રક્શન આંતરદૃષ્ટિ માટે અમારા ન્યૂઝલેટરને સબ્સ્ક્રાઇબ કરો.",
      emailPlaceholder: "તમારું ઇમેઇલ દાખલ કરો",
      subscribeButton: "હવે સબ્સ્ક્રાઇબ કરો",
      followUs: "અમને ફોલો કરો",
      copyright: "© ૨૦૨૫ અંકિત એન્ટરપ્રાઇઝિસ. બધા અધિકારો સુરક્ષિત.",
      privacyPolicy: "ગોપનીયતા નીતિ",
      termsOfService: "સેવાની શરતો",
      cookiePolicy: "કૂકી નીતિ",
      builtWith: "શ્રેષ્ઠતા સાથે બનાવેલ",
      subscribeSuccess: "સબ્સ્ક્રાઇબ કરવા બદલ આભાર!",
      emailAlreadyExists: "ઇમેઇલ પહેલેથી જ અસ્તિત્વમાં છે",
    },
  };

  const currentContent = content[language];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = async () => {
    if (emailSubscription.trim() && !emailError) {
      setIsSubmitting(true);
      try {
        const response = await fetch(`${baseUrl}/api/subscribe`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: emailSubscription.trim()
          }),
        });

        if (response.ok) {
          setShowModal(true);
          setEmailSubscription("");
          setTimeout(() => setShowModal(false), 3000);
        } else {
          // Handle error response
          const errorData = await response.json();
          console.error('Subscription error:', errorData);
          // Check if it's a 409 conflict (email already exists)
          if (response.status === 409) {
            setEmailError(currentContent.emailAlreadyExists);
          }
        }
      } catch (error) {
        console.error('Network error:', error);
        // You can add error handling here if needed
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100 overflow-hidden">
      {/* Marble background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/40 via-transparent to-amber-300/40"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-yellow-300/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-amber-400/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl lg:text-3xl font-bold text-amber-900 mb-4">
                  {currentContent.companyName}
                </h3>
                <p className="text-amber-800/80 text-base lg:text-lg leading-relaxed mb-6">
                  {currentContent.companyDescription}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-amber-800 group-hover:text-amber-900 transition-colors duration-300">
                    {currentContent.phone}
                  </span>
                </div>

                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-amber-800 group-hover:text-amber-900 transition-colors duration-300">
                    {currentContent.email}
                  </span>
                </div>

                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-amber-800 group-hover:text-amber-900 transition-colors duration-300">
                    {currentContent.address}
                  </span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="transform hover:translate-y-[-4px] transition-transform duration-300">
              <h4 className="text-xl font-semibold text-amber-900 mb-6">
                {currentContent.servicesTitle}
              </h4>
              <ul className="space-y-3">
                {currentContent.services.map((service, index) => (
                  <li key={index} className="group">
                    <a
                      href="#"
                      className="text-amber-800/80 hover:text-amber-900 transition-all duration-300 flex items-center space-x-2"
                    >
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                      <span>{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="transform hover:translate-y-[-4px] transition-transform duration-300">
              <h4 className="text-xl font-semibold text-amber-900 mb-6">
                {currentContent.newsletterTitle}
              </h4>
              <p className="text-amber-800/80 mb-6">
                {currentContent.newsletterDescription}
              </p>

              {/* // Updated subscription form with validation */}
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={emailSubscription}
                    onChange={handleEmailChange}
                    placeholder={currentContent.emailPlaceholder}
                    className={`w-full px-4 py-3 bg-white/70 border-2 rounded-lg focus:outline-none transition-all duration-300 text-amber-900 placeholder-amber-600/60 ${
                      emailError
                        ? "border-red-400 focus:border-red-500"
                        : "border-amber-200 focus:border-amber-500"
                    }`}
                  />
                  {emailError && (
                    <p className="mt-1 text-sm text-red-600 font-medium">
                      {emailError}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleSubscribe}
                  disabled={!emailSubscription || emailError}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transform transition-all duration-300 shadow-lg ${
                    !emailSubscription || emailError
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-amber-600 to-yellow-600 text-white hover:from-amber-700 hover:to-yellow-700 hover:scale-105 hover:shadow-xl"
                  }`}
                >
                  {currentContent.subscribeButton}
                </button>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h5 className="text-lg font-medium text-amber-900 mb-4">
                  {currentContent.followUs}
                </h5>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, color: "hover:bg-blue-600" },
                    { icon: Twitter, color: "hover:bg-sky-500" },
                    { icon: Instagram, color: "hover:bg-pink-600" },
                    { icon: Linkedin, color: "hover:bg-blue-700" },
                  ].map(({ icon: Icon, color }, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`w-12 h-12 bg-amber-600 ${color} rounded-full flex items-center justify-center text-white transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-300/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-amber-800/80 text-center md:text-left">
                {currentContent.copyright}
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-amber-800/80 hover:text-amber-900 transition-colors duration-300 text-sm"
                >
                  {currentContent.privacyPolicy}
                </a>
                <a
                  href="#"
                  className="text-amber-800/80 hover:text-amber-900 transition-colors duration-300 text-sm"
                >
                  {currentContent.termsOfService}
                </a>
                <a
                  href="#"
                  className="text-amber-800/80 hover:text-amber-900 transition-colors duration-300 text-sm"
                >
                  {currentContent.cookiePolicy}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-amber-800/60 text-sm">
                {currentContent.builtWith}
              </span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 z-50 ${
          isScrolled ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        } hover:scale-110 hover:-translate-y-1`}
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </button>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="relative bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform scale-100 opacity-100 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                {currentContent.subscribeSuccess}
              </h3>
              <p className="text-amber-800/80 mb-6">
                {language === "english"
                  ? "We'll keep you updated with our latest news and insights."
                  : "અમે તમને અમારા નવીનતમ સમાચાર અને આંતરદૃષ્ટિ સાથે અપડેટ રાખીશું."}
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-6 py-2 rounded-lg font-medium hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
              >
                {language === "english" ? "Close" : "બંધ કરો"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Additional CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }

        @media (max-width: 768px) {
          .grid-cols-1 > div {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;