import { siteConfig } from "../config/navbarHero";
import Button from "./shared/Button";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white w-full px-0 min-[1100px]:sticky fixed top-0 left-0 z-50 ">
      <div className="max-w-[1920px] w-screen mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-3 flex items-center text-black font-['Helvetica'] font-normal text-[20px] leading-[100%] tracking-[-0.015em]">
        <div className="flex items-center space-x-3 min-[900px]:space-x-6 flex-shrink-0">
          <img
            src={siteConfig.navigation.logo}
            alt="Logo"
            className="h-10 w-auto"
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
          <Button className="border border-black bg-white text-black px-3 py-1.5 text-sm transition duration-300 ease-in-out hover:bg-[rgba(55,115,236,1)] hover:text-white hover:border-none">
            Join Us
          </Button>
          <Button className="bg-[rgba(6,25,70,1)] text-white px-3 py-1.5 text-sm transition duration-300 ease-in-out hover:bg-white hover:text-[rgba(6,25,70,1)]">
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
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="min-[1100px]:hidden fixed inset-0 bg-[#173477ec] px-6 py-6 z-40 overflow-auto text-white">
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
              xmlns="http://www.w3.org/2000/svg"
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
            <Button className="w-full border border-white bg-transparent text-white px-4 py-3 text-center text-base transition duration-300 hover:bg-white hover:text-[rgba(6,25,70,1)]">
              Join Us
            </Button>
            <Button className="w-full bg-white text-[rgba(6,25,70,1)] px-4 py-3 text-center text-base transition duration-300 hover:bg-blue-100">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
