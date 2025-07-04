

// import React, { useRef, useEffect, useState, useCallback } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// // Using placeholder images for demo
// const images = [
//   "../src/assets/react.svg",
//   "/api/placeholder/192/288", 
//   "../src/assets/react.svg",
//   "/api/placeholder/192/288",
//   "../src/assets/react.svg",
//   "/api/placeholder/192/288",
//   "../src/assets/react.svg"
// ];

// export default function Carousel() {
//   const containerRef = useRef(null);
//   const isDragging = useRef(false);
//   const startX = useRef(0);
//   const scrollLeft = useRef(0);
//   const scrollSpeed = useRef(0.5);
//   const lastScrollTime = useRef(0);
//   const [isAutoScrolling, setIsAutoScrolling] = useState(true);

//   // Create enough copies for seamless looping
//   const duplicatedImages = [...images, ...images, ...images, ...images];
//   const imageWidth = 208; // 192px width + 16px gap
//   const singleSetWidth = images.length * imageWidth;

//   // Initialize scroll position
//   useEffect(() => {
//     const container = containerRef.current;
//     if (container) {
//       // Start at the second set
//       container.scrollLeft = singleSetWidth;
//     }
//   }, [singleSetWidth]);

//   // Smooth infinite scroll with requestAnimationFrame
//   const animateScroll = useCallback(() => {
//     const container = containerRef.current;
//     if (!container || isDragging.current || !isAutoScrolling) return;

//     const currentTime = performance.now();
    
//     // Throttle to ~60fps
//     if (currentTime - lastScrollTime.current >= 16) {
//       container.scrollLeft += scrollSpeed.current;
//       lastScrollTime.current = currentTime;

//       // Reset scroll position seamlessly
//       const maxScroll = singleSetWidth * 2; // End of second set
//       if (container.scrollLeft >= maxScroll) {
//         // Jump back to start of first set
//         container.scrollLeft = container.scrollLeft - singleSetWidth;
//       }
//     }

//     if (isAutoScrolling) {
//       requestAnimationFrame(animateScroll);
//     }
//   }, [isAutoScrolling, singleSetWidth]);

//   // Start/stop animation based on auto-scrolling state
//   useEffect(() => {
//     if (isAutoScrolling) {
//       requestAnimationFrame(animateScroll);
//     }
//   }, [isAutoScrolling, animateScroll]);

//   const scrollByAmount = (amount) => {
//     if (containerRef.current) {
//       containerRef.current.scrollBy({
//         left: amount,
//         behavior: "smooth",
//       });
//     }
//   };

//   // Mouse and touch drag functionality
//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const startDragging = (clientX) => {
//       isDragging.current = true;
//       setIsAutoScrolling(false);
//       startX.current = clientX - container.offsetLeft;
//       scrollLeft.current = container.scrollLeft;
//       container.style.cursor = 'grabbing';
//     };

//     const stopDragging = () => {
//       if (isDragging.current) {
//         isDragging.current = false;
//         container.style.cursor = 'grab';
        
//         // Handle position reset after dragging
//         const maxScroll = singleSetWidth * 3;
//         const minScroll = 0;
        
//         if (container.scrollLeft >= maxScroll) {
//           container.scrollLeft = singleSetWidth + (container.scrollLeft - maxScroll);
//         } else if (container.scrollLeft <= minScroll) {
//           container.scrollLeft = singleSetWidth + container.scrollLeft;
//         }
        
//         // Resume auto-scroll after delay
//         setTimeout(() => setIsAutoScrolling(true), 2000);
//       }
//     };

//     const handleDrag = (clientX) => {
//       if (!isDragging.current) return;
      
//       const x = clientX - container.offsetLeft;
//       const walk = (x - startX.current) * 1.5;
//       let newScrollLeft = scrollLeft.current - walk;
      
//       // Handle boundaries during drag
//       const maxScroll = singleSetWidth * 3;
//       const minScroll = 0;
      
//       if (newScrollLeft > maxScroll) {
//         newScrollLeft = singleSetWidth + (newScrollLeft - maxScroll);
//         scrollLeft.current = singleSetWidth;
//         startX.current = x;
//       } else if (newScrollLeft < minScroll) {
//         newScrollLeft = singleSetWidth * 2 + newScrollLeft;
//         scrollLeft.current = singleSetWidth * 2;
//         startX.current = x;
//       }
      
//       container.scrollLeft = newScrollLeft;
//     };

//     // Mouse events
//     const handleMouseDown = (e) => {
//       e.preventDefault();
//       startDragging(e.pageX);
//     };

//     const handleMouseMove = (e) => {
//       if (!isDragging.current) return;
//       e.preventDefault();
//       handleDrag(e.pageX);
//     };

//     const handleMouseUp = () => stopDragging();
//     const handleMouseLeave = () => stopDragging();

//     // Touch events
//     const handleTouchStart = (e) => {
//       startDragging(e.touches[0].pageX);
//     };

//     const handleTouchMove = (e) => {
//       if (!isDragging.current) return;
//       e.preventDefault();
//       handleDrag(e.touches[0].pageX);
//     };

//     const handleTouchEnd = () => stopDragging();

//     // Add event listeners
//     container.addEventListener("mousedown", handleMouseDown);
//     container.addEventListener("mousemove", handleMouseMove);
//     container.addEventListener("mouseup", handleMouseUp);
//     container.addEventListener("mouseleave", handleMouseLeave);
//     container.addEventListener("touchstart", handleTouchStart, { passive: false });
//     container.addEventListener("touchmove", handleTouchMove, { passive: false });
//     container.addEventListener("touchend", handleTouchEnd);

//     return () => {
//       container.removeEventListener("mousedown", handleMouseDown);
//       container.removeEventListener("mousemove", handleMouseMove);
//       container.removeEventListener("mouseup", handleMouseUp);
//       container.removeEventListener("mouseleave", handleMouseLeave);
//       container.removeEventListener("touchstart", handleTouchStart);
//       container.removeEventListener("touchmove", handleTouchMove);
//       container.removeEventListener("touchend", handleTouchEnd);
//     };
//   }, [singleSetWidth]);

//   const handleArrowClick = (direction) => {
//     setIsAutoScrolling(false);
//     scrollByAmount(direction === 'left' ? -imageWidth : imageWidth);
//     setTimeout(() => setIsAutoScrolling(true), 2000);
//   };

//   const toggleAutoScroll = () => {
//     setIsAutoScrolling(!isAutoScrolling);
//   };

//   const changeSpeed = (newSpeed) => {
//     scrollSpeed.current = newSpeed;
//   };

//   return (
//     <div className="relative w-full select-none  py-8">
//       {/* Left Arrow */}
//       {/* <button
//         onClick={() => handleArrowClick('left')}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-200 hover:bg-gray-50"
//       >
//         <ChevronLeft className="w-6 h-6 text-gray-700" />
//       </button> */}

//       {/* Carousel Container */}
//       <div
//         ref={containerRef}
//         className="flex gap-4 overflow-x-hidden px-16 h-75 cursor-grab select-none"
//         style={{ 
//           scrollBehavior: 'auto',
//           scrollbarWidth: 'none',
//           msOverflowStyle: 'none'
//         }}
//       >
//         {duplicatedImages.map((src, idx) => (
//           <div
//             key={`img-${idx}`}
//             className="flex-shrink-0 w-48 h-72 bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
//           >
//             <img
//               src={src}
//               alt={`carousel-${idx % images.length}`}
//               className="w-full h-full object-cover select-none"
//               draggable={false}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Right Arrow */}
//       {/* <button
//         onClick={() => handleArrowClick('right')}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-200 hover:bg-gray-50"
//       >
//         <ChevronRight className="w-6 h-6 text-gray-700" />
//       </button> */}

//       {/* Hide scrollbar */}
//       <style jsx>{`
//         div::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// }








import React, { useRef, useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion"; // ✅ Framer Motion added

// Using placeholder images for demo
const images = [
  "../src/assets/img1.webp",
  "../src/assets/img2.webp", 
  "../src/assets/img3.webp",
  "../src/assets/img4.jpg",
  "../src/assets/img5.webp",
  "../src/assets/img6.jpg",
  "../src/assets/img7.webp"
];

export default function Carousel() {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const scrollSpeed = useRef(0.5);
  const lastScrollTime = useRef(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Create enough copies for seamless looping
  const duplicatedImages = [...images, ...images, ...images, ...images];
  const imageWidth = 208; // 192px width + 16px gap
  const singleSetWidth = images.length * imageWidth;

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft = singleSetWidth;
    }
  }, [singleSetWidth]);

  const animateScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container || isDragging.current || !isAutoScrolling) return;

    const currentTime = performance.now();
    
    if (currentTime - lastScrollTime.current >= 16) {
      container.scrollLeft += scrollSpeed.current;
      lastScrollTime.current = currentTime;

      const maxScroll = singleSetWidth * 2;
      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = container.scrollLeft - singleSetWidth;
      }
    }

    if (isAutoScrolling) {
      requestAnimationFrame(animateScroll);
    }
  }, [isAutoScrolling, singleSetWidth]);

  useEffect(() => {
    if (isAutoScrolling) {
      requestAnimationFrame(animateScroll);
    }
  }, [isAutoScrolling, animateScroll]);

  const scrollByAmount = (amount) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: amount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const startDragging = (clientX) => {
      isDragging.current = true;
      setIsAutoScrolling(false);
      startX.current = clientX - container.offsetLeft;
      scrollLeft.current = container.scrollLeft;
      container.style.cursor = 'grabbing';
    };

    const stopDragging = () => {
      if (isDragging.current) {
        isDragging.current = false;
        container.style.cursor = 'grab';
        
        const maxScroll = singleSetWidth * 3;
        const minScroll = 0;
        
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = singleSetWidth + (container.scrollLeft - maxScroll);
        } else if (container.scrollLeft <= minScroll) {
          container.scrollLeft = singleSetWidth + container.scrollLeft;
        }

        setTimeout(() => setIsAutoScrolling(true), 2000);
      }
    };

    const handleDrag = (clientX) => {
      if (!isDragging.current) return;
      
      const x = clientX - container.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      let newScrollLeft = scrollLeft.current - walk;
      
      const maxScroll = singleSetWidth * 3;
      const minScroll = 0;
      
      if (newScrollLeft > maxScroll) {
        newScrollLeft = singleSetWidth + (newScrollLeft - maxScroll);
        scrollLeft.current = singleSetWidth;
        startX.current = x;
      } else if (newScrollLeft < minScroll) {
        newScrollLeft = singleSetWidth * 2 + newScrollLeft;
        scrollLeft.current = singleSetWidth * 2;
        startX.current = x;
      }
      
      container.scrollLeft = newScrollLeft;
    };

    const handleMouseDown = (e) => {
      e.preventDefault();
      startDragging(e.pageX);
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      handleDrag(e.pageX);
    };

    const handleMouseUp = () => stopDragging();
    const handleMouseLeave = () => stopDragging();

    const handleTouchStart = (e) => {
      startDragging(e.touches[0].pageX);
    };

    const handleTouchMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      handleDrag(e.touches[0].pageX);
    };

    const handleTouchEnd = () => stopDragging();

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("touchstart", handleTouchStart, { passive: false });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [singleSetWidth]);

  const handleArrowClick = (direction) => {
    setIsAutoScrolling(false);
    scrollByAmount(direction === 'left' ? -imageWidth : imageWidth);
    setTimeout(() => setIsAutoScrolling(true), 2000);
  };

  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling);
  };

  const changeSpeed = (newSpeed) => {
    scrollSpeed.current = newSpeed;
  };

  return (
    <div className="relative w-full select-none py-2">
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-hidden px-16 h-75 cursor-grab select-none"
        style={{ 
          scrollBehavior: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {duplicatedImages.map((src, idx) => (
          <motion.div
            key={`img-${idx}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            className="flex-shrink-0 w-60 h-72 bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <img
              src={src}
              alt={`carousel-${idx % images.length}`}
              className="w-full h-full object-cover select-none"
              draggable={false}
            />
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
