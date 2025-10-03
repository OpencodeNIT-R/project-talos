import { siteConfig } from "../config/navbarHero";
import Button from "./shared/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

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

  const handleJoinUsClick = () => {
    navigate("/applications");
  };

  const handleContactUsClick = () => {
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg border-b border-gray-200"
          : "bg-white shadow-md border-b border-gray-100"
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo Section - Left */}
        <div className="flex items-center flex-shrink-0">
          <img
            src={siteConfig.navigation.logo}
            alt="Logo"
            className="h-10 sm:h-12 lg:h-14 w-auto"
          />
        </div>

        {/* Desktop Navigation - Center */}
        <nav className="hidden xl:flex items-center justify-center flex-1 mx-8">
          <div className="flex space-x-8">
            {siteConfig.navigation.links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-700 hover:text-[#021640] transition-colors duration-300 whitespace-nowrap px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        {/* Desktop Buttons - Right */}
        <div className="hidden xl:flex items-center space-x-4 flex-shrink-0">
          <Button
            backgroundColor="#021640"
            textColor="white"
            className="bg-[#021640] text-white px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-300 hover:bg-[#021640]/90 whitespace-nowrap"
            onClick={handleContactUsClick}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`xl:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 ${
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
        className={`xl:hidden fixed top-0 left-0 w-full h-full z-40 transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-[#021640]/95 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative bg-[#021640] h-full overflow-y-auto">
          {/* Header with Close Button */}
          <div className="flex justify-between items-center p-6 border-b border-white/20">
            <img
              src={siteConfig.navigation.logo}
              alt="Logo"
              className="h-10 w-auto"
            />
            <button
              className="text-white hover:text-gray-300 transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
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

          {/* Navigation Links */}
          <nav className="px-6 py-8">
            <div className="space-y-2">
              {siteConfig.navigation.links.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block w-full py-4 px-6 text-lg font-medium text-white hover:text-gray-300 hover:bg-white/10 rounded-lg transition-all duration-200 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="px-6 pb-8 space-y-4">
            <Button
              backgroundColor="transparent"
              textColor="white"
              className="w-full border-2 border-white text-white px-6 py-4 text-center text-lg font-medium rounded-lg transition-all duration-300 hover:bg-white hover:text-[#021640]"
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
              className="w-full bg-white text-[#021640] px-6 py-4 text-center text-lg font-medium rounded-lg transition-all duration-300 hover:bg-gray-100"
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
