import { useEffect, useRef } from "react";

const useKeyboardNav = (
  menuItems: { id: string; label: string }[],
  setActiveSection: (id: string) => void
) => {
  const isKeyboardNav = useRef(false);
  const timeoutRef = useRef<number>(undefined);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (
        ["input", "textarea"].includes(
          (e.target as HTMLElement).tagName.toLowerCase()
        )
      ) {
        return;
      }

      const key = e.key.toLowerCase();

      // Numbers 1-9 for quick navigation
      if (!isNaN(parseInt(key)) && parseInt(key) <= menuItems.length) {
        e.preventDefault();
        const index = parseInt(key) - 1;
        const section = document.getElementById(menuItems[index].id);

        if (section) {
          // Clear any existing timeout
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }

          isKeyboardNav.current = true;
          setActiveSection(menuItems[index].id);
          section.scrollIntoView({ behavior: "smooth" });

          // Keep keyboard nav flag true longer
          timeoutRef.current = setTimeout(() => {
            isKeyboardNav.current = false;
          }, 1500); // Increased delay to prevent Intersection Observer interference
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [menuItems, setActiveSection]);

  return isKeyboardNav;
};

export default useKeyboardNav;
