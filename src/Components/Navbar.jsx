import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropOpen, setIsDropOpen] = useState(false);
  const dropdownRef = useRef(null);

  const sections = [
  { id: "about", label: "About" },
  { id: "dr.-ajo", label: "Dr. Ajo Babu George" },
  { id: "publications", label: "Publications" },
  { id: "research-group", label: "Research Group" },
  { id: "contact", label: "Contact" },
];
    

  const menuItems = [
    {
      name: "Image Requisition Form",
      type: "navigate",
      target: "/imagescanrequisition",
    },
    {
      name: "Prescription Generator",
      type: "navigate",
      target: "/prescriptiongenerator",
    },
  ];

  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    if (item.type === "scroll") {
      scrollToSection(item.target);
    } else if (item.type === "navigate") {
      navigate(item.target);
    }
    setIsMenuOpen(false);
  };

  // Close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // for color change on scroll
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed w-full top-0 z-50 px-6 py-4 transition-all duration-500 border-b
        ${scrolled? "bg-gradient-to-b from-blue-900/95 to-blue-900/80 shadow-lg backdrop-blur-md border-white/10":
        "bg-transparent border-transparent"} text-white`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div
            className={`${!scrolled? "text-xl font-bold cursor-pointer tracking-tight hover:opacity-90 transition text-white"
              : "text-xl font-bold cursor-pointer tracking-tight hover:opacity-90 transition bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
              } focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900/40`}
            onClick={() => scrollToSection("hero")} >
              DiceMed
          </div>

          <div className="hidden md:flex gap-8">
            {["about", "dr.-ajo", "publications", "research-group"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative hover:text-blue-300 transition duration-300
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
                  after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900/40"
              >
                {item.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </button>
            ))}

            <div className="relative inline-block" ref={dropdownRef}>
              {/* Menu Button */}
              <button
                onClick={() => setIsDropOpen(!isDropOpen)}
                className="group flex items-center gap-1 px-4 py-1 rounded-full border border-white/10
                  hover:border-white/20 hover:bg-white/5 transition-all duration-300
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900/40"
              >
                <button className="hover:text-blue-300 transition duration-300">Tools</button>
                <ChevronDown
                  size={16}
                  className={`transform transition-transform duration-200 group-hover:translate-y-0.5 ${isDropOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 backdrop-blur-md border border-white/20
                  rounded-xl shadow-2xl z-50 overflow-hidden bg-gradient-to-b from-white/10 to-white/5"
                >
                  <div className="py-2">
                    {menuItems.map((item, index) => (
                      <button
                        key={item.name}
                        onClick={() => handleMenuClick(item)}
                        className="w-full text-left px-6 py-3 text-white hover:bg-white/10 transition-all duration-200 
                          border-b border-white/5 last:border-b-0 group hover:translate-x-0.5
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900/40"
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`${
                              scrolled ? "text-black" : "text-white"
                            } text-lg font-medium group-hover:text-blue-300 transition-colors duration-200`}
                          >
                            {item.name}
                          </span>
                          {item.type === "navigate" && (
                            <div className="w-2 h-2 bg-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-200"></div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {["contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative hover:text-blue-300 transition duration-300
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
                  after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900/40"
              >
                {item.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </button>
            ))}
          </div>

          <div className="xl:hidden flex gap-8 xl:gap-0" />

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900/40"
            >
              <i
                className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl transition duration-300 hover:scale-110 active:scale-95`}
              ></i>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900/70 to-blue-900/70
              backdrop-blur-md text-white flex flex-col items-center justify-center gap-8 py-4 md:hidden z-50"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900/40"
            >
              <i className="fas fa-times"></i>
            </button>

             {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsDropOpen(false);
                  // wait a tick so overlay closes, then scroll
                  requestAnimationFrame(() => scrollToSection(id));
                }}
                className="relative text-xl font-medium hover:text-blue-300 transition duration-300
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
                  after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900/40"
              >
                {label}
              </button>
              )
            )}

            <div className="relative inline-block" ref={dropdownRef}>
              {/* Menu Button */}
              <button
                onClick={() => setIsDropOpen(!isDropOpen)}
                className="group flex items-center gap-1 px-4 py-1 text-white transition-all duration-300
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900/40"
              >
                <button className="text-xl font-medium hover:text-blue-300 transition duration-300">
                  Tools
                </button>
                <ChevronDown
                  size={16}
                  className={`transform transition-transform duration-200 group-hover:translate-y-0.5 ${isDropOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 backdrop-blur-md border border-white/20
                  rounded-xl shadow-2xl z-50 overflow-hidden bg-gradient-to-b from-white/10 to-white/5"
                >
                  <div className="py-2">
                    {menuItems.map((item, index) => (
                      <button
                        key={item.name}
                        onClick={() => handleMenuClick(item)}
                        className="w-full text-left px-6 py-3 text-white hover:bg-white/10 transition-all duration-200 
                          border-b border-white/5 last:border-b-0 group hover:translate-x-0.5
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900/40"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-medium group-hover:text-blue-300 transition-colors duration-200">
                            {item.name}
                          </span>
                          {item.type === "navigate" && (
                            <div className="w-2 h-2 bg-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-200"></div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
