// import "./App.css";
// // import Home from "../components/Home";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// import HomePage from "../components/HomePage";

// function App() {
//   return (
//     <>
// <HomePage/>
//     </>
//   );
// }

// export default App;

// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "../components/HomePage";
// import bgImage from "./assets/bk.png"; // Adjust path as per your structure
// import OurServices from "../components/OurServices";
// import ContactPage from "../components/ContactPage";
// import AboutUsPage from "../components/AboutUsPage";
// import Navbar from "../components/Navbar";
// import { LanguageProvider } from "../components/Navbar";

// function App() {
//   return (
//     <LanguageProvider>
//       <Router>
//         <div style={{ position: "relative", height: "200vh", width: "100vw" }}>
//           <div
//             style={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               backgroundImage: `url(${bgImage})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//               opacity: 0.9,
//               zIndex: -1,
//             }}
//           />
//           <Navbar />
//           {/* <HomePage /> */}
//           {/* <OurServices/> */}
//           {/* <ContactPage/> */}
//           {/* <AboutUsPage/> */}

//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/OurServices" element={<OurServices />} />
//             <Route path="/AboutUsPage" element={<AboutUsPage />} />
//             <Route path="/ContactPage" element={<ContactPage />} />
//           </Routes>
//         </div>
//       </Router>
//     </LanguageProvider>
//   );
// }

// export default App;






import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "../components/HomePage";
import bgImage from './assets/bk.png'; // Adjust path as per your structure
import OurServices from "../components/OurServices";
import ContactPage from "../components/ContactPage";
import AboutUsPage from "../components/AboutUsPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import { LanguageProvider } from '../components/Navbar';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div style={{ 
          position: 'relative', 
          minHeight: '100vh', 
          width: '100vw',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}>
          {/* Optional: Dark overlay for better text readability */}
          <div
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.1)', // Adjust opacity as needed
              zIndex: 0,
            }}
          />
          
          {/* Content wrapper */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Navbar/>
            
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/OurServices" element={<OurServices />} />
              <Route path="/AboutUsPage" element={<AboutUsPage />} />
              <Route path="/ContactPage" element={<ContactPage />} />
              <Route path="/Projects" element={<Projects />} />
            </Routes>
            <Footer/>
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;