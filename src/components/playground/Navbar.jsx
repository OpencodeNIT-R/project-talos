import { siteConfig } from "../../config/navbarHero";
import Button from "../shared/Button";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white w-full px-0">
      <div className="max-w-[1920px] w-screen mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-3 flex items-center text-black font-['Helvetica'] font-normal text-[20px] leading-[100%] tracking-[-0.015em]">
        <div className="flex items-center space-x-3 min-[900px]:space-x-6 flex-shrink-0">
          <img
            src={siteConfig.navigation.logo}
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>

        <nav
          className="hidden min-[900px]:flex flex-grow justify-center space-x-6"
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

        <div className="hidden min-[900px]:flex items-center space-x-4 text-sm flex-shrink-0">
          <Button className="border border-black bg-white text-black px-3 py-1.5 text-sm transition-colors hover:bg-blue-50 hover:border-blue-600">
            Join Us
          </Button>
          <Button className="bg-[rgba(6,25,70,1)] text-white px-3 py-1.5 text-sm transition-colors hover:bg-[rgba(6,25,70,0.8)]">
            Contact Us
          </Button>
        </div>

        <button
          className="min-[900px]:hidden ml-auto flex items-center"
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
        <div className="min-[900px]:hidden bg-white border-t border-border px-4 py-4 space-y-4">
          <nav className="flex flex-col space-y-3">
            {siteConfig.navigation.links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-black text-lg font-semibold hover:text-[rgba(55,115,236,1)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex space-x-4 pt-4 border-t border-border">
            <Button className="flex-grow border border-black bg-white text-black px-3 py-2">
              Join Us
            </Button>
            <Button className="flex-grow bg-[rgba(6,25,70,1)] text-white px-3 py-2">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
