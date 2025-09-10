import { useState, useEffect } from "react";
import Button from "./shared/Button";
import { siteConfig } from "../config/navbarHero";

export default function HeroSection() {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowFirst((prev) => !prev), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white min-h-[400px] pt-[40px] sm:pt-[30px] md:pt-[80px] lg:pt-[130px] px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-8">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between md:gap-x-12">
        <div className="w-full max-w-[700px] px-2 md:px-0 space-y-4 text-center md:text-left">
          <p
            className="text-xl sm:text-2xl md:text-3xl font-normal text-black leading-[120%]"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            {siteConfig.hero.title}
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-[47px] lg:text-[56px] xl:text-[64px] font-bold uppercase text-black leading-[120%]"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            {siteConfig.hero.subtitle}
          </h1>
          <p
            className="text-base sm:text-lg text-[rgba(106,106,106,1)] leading-[150%] mt-4 max-w-2xl mx-auto md:mx-0"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            {siteConfig.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start items-center mt-6 gap-4">
            <Button
              className="bg-[rgba(6,25,70,1)] text-white px-14 py-2 rounded-md transition duration-300 ease-in-out hover:bg-white hover:text-[rgba(6,25,70,1)]"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              {siteConfig.hero.primaryButton}
            </Button>
            <a
              href="#about"
              role="button"
              tabIndex={0}
              className="h-12 justify-center items-center flex bg-gradient-to-r from-blue-900 to-blue-950 text-[#e2cede] underline-offset-4 transition duration-300 ease-in-out hover:bg-none hover:bg-white hover:text-[#061946] font-semibold py-2 px-4 rounded"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              {siteConfig.hero.secondaryLink}
            </a>
          </div>
        </div>

        <div className="w-full max-w-[1600px] px-2 md:px-0 relative h-[350px] md:h-[500px] flex justify-center items-center">
          <div className="w-full max-w-[1600px] mt-0 px-2 md:px-0 relative flex justify-center items-center h-[300px] sm:h-[350px] md:h-[500px]">
            {" "}
            <img
              src={siteConfig.about.image}
              alt="Hero image 2"
              className={`rounded-md shadow-lg object-cover w-full h-full absolute top-0 left-0 right-0 bottom-0 m-auto transition-opacity duration-1000  ${
                showFirst ? "opacity-0 z-0" : "opacity-100 z-10"
              }`}
            />
            <img
              src={siteConfig.hero.image}
              alt="Hero image 1 fade"
              className={`rounded-md shadow-lg object-cover w-full h-full absolute top-0 left-0 right-0 bottom-0 m-auto transition-opacity duration-1000  ${
                showFirst ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          </div>

          <img
            src={siteConfig.hero.image1}
            alt="Background figure 1"
            className="absolute"
            style={{
              width: "705px",
              height: "705px",
              top: "-234px",
              left: "-800px",
              opacity: 0.36,
            }}
          />
          <img
            src={siteConfig.hero.image2}
            alt="Background figure 2"
            className="absolute hidden min-[1800px]:block"
            style={{
              width: "478px",
              height: "478px",
              top: "189px",
              left: "481px",
              opacity: 0.36,
            }}
          />
        </div>
      </div>
    </section>
  );
}
