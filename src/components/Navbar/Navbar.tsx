import { useState, useRef, useEffect, useMemo } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { MenuItem } from "../../types/types";
import { useScroll } from "../../hooks/useScroll";
import useKeyboardNav from "../../hooks/useKeyboardNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const isScrolled = useScroll(50);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const menuItems = useMemo<MenuItem[]>(
    () => [
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "experience", label: "Experience" },
      { id: "education", label: "Education" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const isKeyboardNav = useKeyboardNav(menuItems, setActiveSection);

  const handleKeyDown = (e: React.KeyboardEvent, sectionId: string) => {
    if (e.key === "Enter" || e.key === " ") {
      handleMenuItemClick(sectionId);
      e.preventDefault();
    }
  };

  const handleMenuItemClick = (sectionId: string): void => {
    // Clear any existing timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Set keyboard nav flag to true temporarily to prevent intersection observer
    isKeyboardNav.current = true;
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    // Reset keyboard nav flag after scroll animation
    timeoutRef.current = window.setTimeout(() => {
      isKeyboardNav.current = false;
    }, 1000); // Duration should match scroll animation
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only update active section if not currently using keyboard navigation
          if (entry.isIntersecting && !isKeyboardNav.current) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      menuItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [menuItems, isKeyboardNav]);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg dark:bg-gray-900/80"
          : "bg-transparent"
      }`}
    >
      <div className="py-5 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#about"
          className="text-lg font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:ring-offset-2 rounded-md px-2"
          onClick={(e) => {
            e.preventDefault();
            handleMenuItemClick("about");
          }}
        >
          <span className="text-primary-500 dark:text-white">Harsimran </span>
          <span className="text-primary-500">Singh</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8" role="menubar">
          {menuItems.map((item) => (
            <li
              key={item.id}
              role="none"
              className="cursor-pointer transition-colors"
            >
              <button
                role="menuitem"
                onClick={(e) => {
                  handleMenuItemClick(item.id);
                  // Remove focus after click
                  (e.target as HTMLElement).blur();
                }}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                aria-current={activeSection === item.id ? "page" : undefined}
                tabIndex={0}
                className={`px-3 py-2 rounded-md transition-colors outline-none
    ${
      activeSection === item.id
        ? "text-[hsl(var(--primary))] font-medium bg-[hsl(var(--primary)_/_0.1)]"
        : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)_/_0.05)]"
    }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://www.linkedin.com/in/harsimran888/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <FiX className="text-2xl" />
          ) : (
            <FiMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          role="menu"
          className="absolute top-16 left-1/2 transform -translate-x-1/2 w-11/12 bg-white dark:bg-gray-900 rounded-lg shadow-lg md:hidden border border-gray-200 dark:border-gray-700"
        >
          <ul className="py-2">
            {menuItems.map((item) => (
              <li key={item.id} className="px-4">
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                  tabIndex={0}
                  className={`w-full text-left py-3 px-4 rounded-md transition-colors
    ${
      activeSection === item.id
        ? "text-[hsl(var(--primary))] font-medium bg-[hsl(var(--primary)_/_0.1)]"
        : "text-gray-600 dark:text-gray-300 hover:text-primary-500 hover:bg-[hsl(var(--primary)_/_0.05)]"
    }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="px-4 py-3 border-t border-gray-100 dark:border-gray-800">
              <a
                href="https://www.linkedin.com/in/harsimran888/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
              >
                <FaLinkedin size={24} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
