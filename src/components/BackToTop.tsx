import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              scrollToTop();
              e.preventDefault();
            }
          }}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-[hsl(var(--primary))] text-white shadow-lg 
          hover:bg-[hsl(var(--primary)_/_0.9)] transition-all duration-300 
          hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] 
          focus:ring-offset-2 z-50"
          aria-label="Scroll to top (shortcut: Home key)"
          tabIndex={0}
        >
          <FiArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
