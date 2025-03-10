
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-navy/90 backdrop-blur-md shadow-md"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          <a 
            href="/" 
            className="text-2xl font-bold text-white-off tracking-tight"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            <span className="text-blue-accent">T</span>hisara
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {["home", "about", "skills", "projects", "experience", "contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-muted-foreground hover:text-blue-accent transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item);
                    }}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white-off hover:text-blue-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-navy-light/95 backdrop-blur-md transition-all duration-300 overflow-hidden glass ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col py-4 px-6 space-y-4">
          {["home", "about", "skills", "projects", "experience", "contact"].map(
            (item) => (
              <li key={item} className="border-b border-white/5 pb-2">
                <a
                  href={`#${item}`}
                  className="text-muted-foreground hover:text-blue-accent transition-colors duration-300 text-sm uppercase tracking-wider font-medium block py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
