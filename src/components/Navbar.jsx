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
      className={`w-full px-0 min-[1100px]:sticky fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1920px] w-screen mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-3 flex items-center text-black font-['Helvetica'] font-normal text-[20px] leading-[100%] tracking-[-0.015em]">
        <div className="flex items-center space-x-3 min-[900px]:space-x-6 flex-shrink-0">
          <img
            src={siteConfig.navigation.logo}
            alt="Logo"
            className="h-16 w-auto"
          />
        </div>

        <nav
          className="hidden min-[1100px]:flex absolute left-1/2 transform -translate-x-1/2 justify-center space-x-6"
          style={{ letterSpacing: "-1.5%" }}
        >
          {siteConfig.navigation.links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition-colors hover:text-[rgba(55,115,236,1)]"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden min-[1100px]:flex items-center space-x-4 text-sm flex-shrink-0 ml-auto ">
          <Button
            backgroundColor="white"
            textColor="black"
            className="border border-black px-3 py-1.5 text-sm transition duration-300 ease-in-out hover:bg-[rgba(55,115,236,1)] hover:text-white hover:border-none"
            onClick={handleJoinUsClick}
          >
            Join Us
          </Button>

          <Button
            backgroundColor="rgba(6,25,70,1)"
            textColor="white"
            className="px-3 py-1.5 text-sm transition duration-300 ease-in-out hover:bg-white hover:text-[rgba(6,25,70,1)]"
            onClick={handleContactUsClick}
          >
            Contact Us
          </Button>
        </div>

        <button
          className="min-[1100px]:hidden ml-auto flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {!mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            ) : null}
          </svg>
        </button>
      </div>

      <div
        className={`min-[1100px]:hidden fixed inset-0 px-6 py-6 z-40 overflow-auto text-white bg-[#173477ec] transition-all duration-500 ease-in-out
          ${
            mobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-8 pointer-events-none"
          }`}
        style={{ willChange: "opacity, transform" }}
      >
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg
            className="w-8 h-8"
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

        <nav className="mt-14 flex flex-col w-full">
          {siteConfig.navigation.links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="w-full py-4 text-lg font-semibold text-center text-white hover:text-blue-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="mt-8 flex flex-col space-y-4 pt-6 w-full">
          <Button
            backgroundColor="transparent"
            textColor="white"
            className="w-full border border-white px-4 py-3 text-center text-base transition duration-300 hover:bg-white hover:text-[rgba(6,25,70,1)]"
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
            className="w-full px-4 py-3 text-center text-base transition duration-300 hover:bg-blue-100"
            onClick={() => {
              handleContactUsClick();
              setMobileMenuOpen(false);
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}
