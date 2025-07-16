import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  MapPin,
  Calendar,
  ArrowRight,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./Navbar";
import project1_img1 from "../src/projects_image/project1_img1.png";
import project1_img2 from "../src/projects_image/project1_img2.jpeg";
import project2_img1 from "../src/projects_image/project2_img1.png";
import project2_img2 from "../src/projects_image/project2_img2.png";
import project2_img3 from "../src/projects_image/project2_img3.png";
import project2_img4 from "../src/projects_image/project2_img4.png";

const ProjectsShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { language } = useLanguage();

  // Translations object
  const translations = {
    english: {
      ourProjects: "Our Projects",
      residential: "Residential",
      gallery: "Gallery",
      viewProjectDetails: "View Project Details",
      imageCounter: "of",
      projects: [
        {
          id: 1,
          projectName: "Punita Apartments",
          subtitle: "Developer: Lakshachandi Realty Pvt. Ltd",
          description:
            "Ankit Enterprises successfully delivered complete interior work for the entire building, including Italian marble mirror-polish flooring, skirting, vitrified tiling, kitchen platform, stair tread-riser, door frame patti, polishing, acid wash, and compound granite work etc.",
          location: "Kandivali West, Mumbai",
          completedDate: "January 2024 - March 2025",
          category: "Residential",
        },
        {
          id: 2,
          projectName: "Shree Shakun Heights",
          subtitle: "Developer: Shree Shakun Realty Pvt. Ltd",
          description:
            "Executed complete interior works across the entire building, including vitrified and ceramic wall tiling, marble dado, kitchen counters, window sills, single/double patti, Dhar polish, door jambas, staircase work, and terrace granite finishing etc.",
          location: "Goregaon East, Mumbai",
          completedDate: "January 2019 - April 2021",
          category: "Residential",
        },
      ],
    },
    gujarati: {
      ourProjects: "અમારા પ્રોજેક્ટ્સ",
      residential: "રેસિડેન્શિયલ",
      gallery: "ગેલરી",
      viewProjectDetails: "પ્રોજેક્ટ વિગતો જુઓ",
      imageCounter: "ના",
      projects: [
        {
          id: 1,
          projectName: "પુણિતા એપાર્ટમેન્ટ્સ",
          subtitle: "ડેવલપર: લક્ષચંડી રિયલ્ટી પ્રા. લિ.",
          description:
            "અંકિત એન્ટરપ્રાઇઝેઝે આખી બિલ્ડિંગના તમામ આંતરિક કામો સફળતાપૂર્વક પૂર્ણ કર્યા જેમાં ઇટાલિયન માર્બલ મિરર પોલિશ ફલોરિંગ, સ્કર્ટિંગ, વિટ્રિફાઇડ ટાઇલિંગ, કિચન પ્લેટફોર્મ, સ્ટેર ટ્રેડ-રાઇઝર, ડોર ફ્રેમ પત્તી, પોલિશિંગ, એસિડ વોશ અને કમ્પાઉન્ડ ગ્રેનાઇટનું કામ સામેલ હતું.",
          location: "કાંદિવલી પશ્ચિમ, મુંબઈ",
          completedDate: "જાન્યુઆરી 2024 - માર્ચ 2025",
          category: "રેસિડેન્શિયલ",
        },
        {
          id: 2,
          projectName: "શ્રી શકુન હાઇટ્સ",
          subtitle: "ડેવલપર: શ્રી શકુન રિયલ્ટી પ્રા. લિ.",
          description:
            "આખી બિલ્ડિંગ માટેનું આંતરિક કાર્ય સફળતાપૂર્વક પૂર્ણ કર્યું જેમાં વિટ્રિફાઇડ અને સેરામિક વોલ ટાઇલિંગ, માર્બલ ડેડો, કિચન કાઉન્ટર, વિન્ડો સિલ, સિંગલ/ડબલ પત્તી, ધર પોલિશ, ડોર જામ્બાસ, સીડીઓનું કામ અને ટેરેસ ગ્રેનાઇટ સમાપ્તીનો સમાવેશ થાય છે.",
          location: "ગોરેગાંવ પૂર્વ, મુંબઈ",
          completedDate: "જાન્યુઆરી 2019 - એપ્રિલ 2021",
          category: "રેસિડેન્શિયલ",
        },
      ],
    },
  };

  const t = translations[language];

  // Sample project data with images
  // const projectsWithImages = t.projects.map((project, index) => ({
  //   ...project,
  //   mainImage:
  //     index === 0
  //       ? project1_img1
  //       : project2_img1,
  //   additionalImages:
  //     index === 0
  //       ? [
  //           project1_img1,
  //           "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
  //           "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?w=400&h=300&fit=crop",
  //           "https://images.unsplash.com/photo-1556909045-f61a99eed0cc?w=400&h=300&fit=crop",
  //         ]
  //       : [
  //           project2_img1,
  //           project2_img2,
  //           project2_img3,
  //           project2_img4,
  //         ],
  // }));

  // Define image sets for each project
  const projectImages = [
    {
      main: project1_img1,
      additional: [project1_img1,project1_img2],
    },
    {
      main: project2_img1,
      additional: [project2_img1, project2_img2, project2_img3, project2_img4],
    },
    // Add more project image objects here for future projects
  ];

  // Combine project data with image sets
  const projectsWithImages = t.projects.map((project, index) => ({
    ...project,
    mainImage: projectImages[index]?.main || "", // fallback if not available
    additionalImages: projectImages[index]?.additional || [],
  }));

  const openModal = (project) => {
    setSelectedProject(project);
    setSelectedImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setSelectedImageIndex(0);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === selectedProject.additionalImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? selectedProject.additionalImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-transparent p-4 md:p-8">
      {/* Header */}
      <motion.header
        className="relative z-10 text-center py-8 px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-[#3f0d0c] mb-2 leading-tight"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t.ourProjects}
        </motion.h1>
        <motion.div
          className="max-w-7xl h-1 bg-gradient-to-r from-[#8d6f57] to-[#3f0d0c] mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.header>

      {/* Projects Masonry Layout */}
      <div className="max-w-7xl mx-auto">
        {/* Regular Projects - Alternating Layout */}
        <div className="space-y-16">
          {projectsWithImages.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              {/* Project Image */}
              <motion.div
                className="flex-1 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <motion.img
                    src={project.mainImage}
                    alt={project.projectName}
                    className="w-full h-64 md:h-80 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div className="flex gap-2">
                        {project.additionalImages
                          .slice(0, 3)
                          .map((img, idx) => (
                            <motion.img
                              key={idx}
                              src={img}
                              alt={`${project.projectName} ${idx + 1}`}
                              className="w-12 h-12 object-cover rounded-lg border-2 border-white/50"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                            />
                          ))}
                        {project.additionalImages.length > 3 && (
                          <motion.div
                            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="text-white text-xs">
                              +{project.additionalImages.length - 3}
                            </span>
                          </motion.div>
                        )}
                      </div>
                      <motion.button
                        onClick={() => openModal(project)}
                        className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye size={16} />
                        {t.gallery}
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Project Info */}
              <motion.div
                className="flex-1 space-y-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2 + 0.3,
                  ease: "easeOut",
                }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <motion.span
                      className="px-3 py-1 bg-[#d9b061] text-[#3f0d0c] rounded-full text-sm font-medium"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    >
                      {project.category}
                    </motion.span>
                    <motion.div
                      className="flex items-center gap-1 text-sm text-gray-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                    >
                      <Calendar size={14} />
                      {project.completedDate}
                    </motion.div>
                  </div>
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold text-[#3f0d0c] mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  >
                    {project.projectName}
                  </motion.h3>
                  <motion.p
                    className="text-lg text-[#8B4513] font-semibold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  >
                    {project.subtitle}
                  </motion.p>
                </div>

                <motion.p
                  className="text-[#4a392c] leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="flex items-center gap-1 text-gray-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                >
                  <MapPin size={16} />
                  {project.location}
                </motion.div>

                <motion.button
                  onClick={() => openModal(project)}
                  className="inline-flex items-center gap-2 bg-[#8d6f57] text-white px-6 py-3 rounded-full hover:bg-[#b79d8b] transition-colors duration-200 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t.viewProjectDetails}
                  <ArrowRight size={16} />
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-[#d8d0c5] rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Modal Header */}
              <motion.div
                className="relative p-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="pr-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#3f0d0c] mb-2">
                    {selectedProject.projectName}
                  </h2>
                  <p className="text-[#8B4513] font-semibold text-lg">
                    {selectedProject.subtitle}
                  </p>
                </div>
                <motion.button
                  onClick={closeModal}
                  className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
              </motion.div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Main Image Display */}
                <motion.div
                  className="relative mb-6 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <motion.img
                    key={selectedImageIndex}
                    src={selectedProject.additionalImages[selectedImageIndex]}
                    alt={`${selectedProject.projectName} ${
                      selectedImageIndex + 1
                    }`}
                    className="w-full h-64 md:h-96 object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Navigation Buttons */}
                  <motion.button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft size={24} />
                  </motion.button>
                  <motion.button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight size={24} />
                  </motion.button>

                  {/* Image Counter */}
                  <motion.div
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    {selectedImageIndex + 1} {t.imageCounter}{" "}
                    {selectedProject.additionalImages.length}
                  </motion.div>
                </motion.div>

                {/* Thumbnail Gallery */}
                <motion.div
                  className="grid grid-cols-4 gap-3 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  {selectedProject.additionalImages.map((img, idx) => (
                    <motion.div
                      key={idx}
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img
                        src={img}
                        alt={`${selectedProject.projectName} ${idx + 1}`}
                        className={`w-full h-20 object-cover rounded-lg cursor-pointer transition-all duration-200 ${
                          idx === selectedImageIndex
                            ? "ring-4 ring-[#8B4513] scale-105"
                            : "hover:scale-105 hover:ring-2 hover:ring-[#8B4513]"
                        }`}
                        onClick={() => setSelectedImageIndex(idx)}
                      />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Project Details */}
                <motion.div
                  className="bg-gray-50 rounded-2xl p-6 space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 bg-[#d9b061] text-[#3f0d0c] rounded-full text-sm font-medium">
                      {selectedProject.category}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin size={14} />
                      {selectedProject.location}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar size={14} />
                      {selectedProject.completedDate}
                    </div>
                  </div>

                  <p className="text-[#4a392c] leading-relaxed">
                    {selectedProject.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsShowcase;
