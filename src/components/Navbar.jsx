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
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-3 flex items-center justify-between text-black font-['Helvetica'] font-normal text-[20px] leading-[100%] tracking-[-0.015em]">
        {/* Logo Section */}
        <div className="flex items-center flex-shrink-0">
          <img
            src={siteConfig.navigation.logo}
            alt="Logo"
            className="h-12 sm:h-14 lg:h-16 w-auto"
          />
        </div>

        {/* Desktop Navigation - Hidden on mobile and tablet */}
        <nav className="hidden xl:flex absolute left-1/2 transform -translate-x-1/2 justify-center space-x-6 px-6 py-2">
          {siteConfig.navigation.links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base lg:text-lg font-medium transition-colors hover:text-[rgba(55,115,236,1)] whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons - Hidden on mobile and tablet */}
        <div className="hidden xl:flex items-center space-x-3 flex-shrink-0">
          <Button
            backgroundColor="white"
            textColor="black"
            className="border border-black px-6 py-3 text-sm font-medium rounded-md transition-all duration-300 ease-in-out hover:bg-[rgba(55,115,236,1)] hover:text-white hover:border-[rgba(55,115,236,1)] hover:shadow-lg hover:shadow-[rgba(55,115,236,0.4)] hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            onClick={handleJoinUsClick}
          >
            Join Us
          </Button>

          <Button
            backgroundColor="rgba(6,25,70,1)"
            textColor="white"
            className="px-6 py-3 text-sm font-medium rounded-md transition-all duration-300 ease-in-out hover:bg-white hover:text-[rgba(6,25,70,1)] hover:border hover:border-[rgba(6,25,70,1)] hover:shadow-lg hover:shadow-[rgba(6,25,70,0.4)] hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            onClick={handleContactUsClick}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-black/10 transition-colors duration-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-black"
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
        style={{ willChange: "opacity, transform" }}
      >
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-[rgba(32,53,103,0.95)] backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative bg-[rgba(32,53,103,0.98)] backdrop-blur-md h-full overflow-y-auto">
          {/* Header with Close Button */}
          <div className="flex justify-between items-center p-4 sm:p-6 border-b border-white/20">
            <img
              src={siteConfig.navigation.logo}
              alt="Logo"
              className="h-10 sm:h-12 w-auto"
            />
            <button
              className="text-white hover:text-blue-300 transition-colors duration-200 p-2 rounded-md hover:bg-white/10"
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
          <nav className="px-4 sm:px-6 py-8">
            <div className="space-y-1">
              {siteConfig.navigation.links.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block w-full py-4 px-4 text-lg sm:text-xl font-medium text-white hover:text-blue-300 hover:bg-white/10 rounded-lg transition-all duration-200 text-center border-b border-white/10 last:border-b-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="px-4 sm:px-6 pb-8 space-y-4">
            <Button
              backgroundColor="transparent"
              textColor="white"
              className="w-full border-2 border-white px-6 py-4 text-center text-base sm:text-lg font-medium rounded-lg transition-all duration-300 hover:bg-white hover:text-[rgba(6,25,70,1)] hover:shadow-lg hover:shadow-white/30 hover:-translate-y-0.5 active:translate-y-0"
              onClick={() => {
                handleJoinUsClick();
                setMobileMenuOpen(false);
              }}
            >
              Join Us
            </Button>

            <Button
              backgroundColor="white"
              textColor="rgba(6,25,70,1)"
              className="w-full px-6 py-4 text-center text-base sm:text-lg font-medium rounded-lg transition-all duration-300 hover:bg-[rgba(6,25,70,1)] hover:text-white hover:shadow-lg hover:shadow-[rgba(6,25,70,0.4)] hover:-translate-y-0.5 active:translate-y-0"
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
