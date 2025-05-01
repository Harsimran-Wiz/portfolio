import { FC, memo } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MenuItem } from "../../types/types";
import { COMMON_PADDING } from "../../constant/constantStyles";

const Footer: FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const menuItems: MenuItem[] = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer
      className={`py-8 ${COMMON_PADDING} bg-[hsl(var(--background))] border-t border-[hsl(var(--primary)_/_0.1)]`}
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-[hsl(var(--muted-foreground))] text-sm">
            © {currentYear}{" "}
            <span className="text-[hsl(var(--primary))]">Harsimran Singh</span>
            {". "}All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/harsimran888/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-4 text-center text-xs text-[hsl(var(--muted-foreground))]">
          <p>
            Built with{" "}
            <span className="text-[hsl(var(--primary))]">
              React, TypeScript, and Tailwind CSS
            </span>
          </p>
          <p className="hidden md:block">
            Keyboard shortcuts: Press 1-{menuItems.length} to navigate sections,
            Home for top, End for bottom
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
