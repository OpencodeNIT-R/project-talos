import { siteConfig } from "../config/navbarHero";
import Button from "./shared/Button";
import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { isDark, subscribeTheme } from "../config/theme";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(isDark());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body overflow when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    return subscribeTheme(() => {
      setDark(isDark());
    });
  }, []);

  const handleJoinUsClick = () => {
    navigate("/applications");
  };

  const handleContactUsClick = () => {
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItemBase =
    "relative text-base font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-slate-50 dark:hover:bg-slate-800 after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-[#0A1440] after:to-[#1A56DB] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100";

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? `
          bg-white dark:bg-slate-900/90
          backdrop-blur-md
          shadow-lg 
          dark:shadow-[0_8px_24px_rgba(0,0,0,0.35)]
          border-b border-gray-200 dark:border-slate-800`
          : `
          bg-white dark:bg-slate-900/10
          shadow-md
          border-b border-gray-100 dark:border-slate-800`
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo Section - Left */}
        <div className="flex items-center flex-shrink-0">
          <img
            src={
              dark
                ? "https://res.cloudinary.com/dswk9scro/image/upload/v1755092506/ASME_NIT_Rourkela_Student_Section_White_T_oe5ox2.png"
                : siteConfig.navigation.logo
            }
            alt="Logo"
            className="h-10 sm:h-12 lg:h-14 w-auto"
          />
        </div>

        {/* Desktop Navigation - Center */}
        <nav className="hidden xl:flex items-center justify-center flex-1 mx-8">
          <div className="flex space-x-8">
            {siteConfig.navigation.links.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `${navItemBase} whitespace-nowrap ${
                    isActive
                      ? "text-[#021640] dark:text-white border-b-2 border-blue-400 pb-1 -translate-y-0.5 after:origin-bottom-left after:scale-x-100"
                      : "text-gray-700 dark:text-gray-200 hover:text-[#021640] dark:hover:text-white hover:-translate-y-1"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Desktop Buttons - Right */}
        <div className="hidden xl:flex items-center space-x-4 flex-shrink-0">
          <ThemeToggle />
          <Button
            className="bg-[#021640] dark:bg-white text-white dark:text-[#021640] px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-300 dark:hover:bg-white/90 hover:bg-[#021640]/90 whitespace-nowrap"
            onClick={handleContactUsClick}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`xl:hidden dark:text-white flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 ${
            scrolled
              ? "hover:bg-gray-100 text-gray-700"
              : "hover:bg-white/20 text-[#021640]"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`xl:hidden fixed inset-0 z-[100] h-dvh w-screen transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-[#021640]/95 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative dark:bg-slate-900 bg-[#021640] h-full overflow-y-auto flex flex-col justify-between">
          <div>
            {/* Header with Close Button */}
            <div className="flex justify-between items-center p-6 border-b border-slate-200/20 dark:border-slate-700">
              <img
                src={
                  dark
                    ? "https://res.cloudinary.com/dswk9scro/image/upload/v1755092506/ASME_NIT_Rourkela_Student_Section_White_T_oe5ox2.png"
                    : siteConfig.navigation.logo
                }
                alt="Logo"
                className="h-10 w-auto"
              />
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <button
                  className="text-white hover:text-gray-300 transition-colors duration-200 p-2 rounded-lg hover:bg-white/10 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="px-6 py-6">
              <div className="space-y-2">
                {siteConfig.navigation.links.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `relative block w-full text-center text-lg font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 text-white hover:bg-white/10 ${
                        isActive ? "bg-white/15 text-blue-300 font-bold" : ""
                      }`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </nav>
          </div>

          {/* Action Buttons */}
          <div className="px-6 pb-8 space-y-3">
            <Button
              backgroundColor="transparent"
              textColor="white"
              className="cursor-pointer w-full border-2 border-white text-white px-6 py-3.5 text-center text-lg font-medium rounded-lg transition-all duration-300 hover:bg-white hover:text-[#021640]"
              onClick={() => {
                handleJoinUsClick();
                setMobileMenuOpen(false);
              }}
            >
              Join Us
            </Button>

            <Button
              backgroundColor="white"
              textColor="#021640"
              className="cursor-pointer w-full bg-white text-[#021640] px-6 py-3.5 text-center text-lg font-medium rounded-lg transition-all duration-300 hover:bg-gray-100"
              onClick={() => {
                handleContactUsClick();
                setMobileMenuOpen(false);
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
