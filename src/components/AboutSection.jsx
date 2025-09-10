import { useState, useEffect } from "react";
import { siteConfig } from "../config/navbarHero";

export default function AboutSection() {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowFirst((prev) => !prev), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="bg-white px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16"
    >
      <div className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-x-10 xl:gap-x-12 2xl:gap-x-14">
        <div className="w-full px-4 relative flex justify-center items-center  h-[300px] sm:h-[350px] md:h-[500px]">
          <img
            src={siteConfig.about.image}
            alt="About image 1 fade"
            className={` rounded-md shadow-lg mb-10 object-cover w-full h-full absolute top-0 left-0 right-0 bottom-0 m-auto transition-opacity duration-1000 ${
              showFirst ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
          <img
            src={siteConfig.hero.image}
            alt="About image 2 fade"
            className={`rounded-md shadow-lg mb-10 object-cover w-full h-full absolute top-0 left-0 right-0 bottom-0 m-auto transition-opacity duration-1000 ${
              showFirst ? "opacity-0 z-0" : "opacity-100 z-10"
            }`}
          />
        </div>

        <div className="w-full text-center md:text-left space-y-4 max-w-[700px]">
          <h1
            className="text-3xl sm:text-4xl md:text-[47px] lg:text-[56px] font-bold uppercase text-black leading-[120%]"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            {siteConfig.about.title}
          </h1>

          <p
            className="text-base sm:text-lg text-[rgba(106,106,106,1)] leading-[150%] mt-4 max-w-2xl mx-auto md:mx-0"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            {siteConfig.about.description}
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start items-center mt-6 gap-4">
            <a
              href="#cards"
              role="button"
              tabIndex={0}
              className="text-2xl h-12 justify-center items-center flex bg-[rgba(6,25,70,1)] text-[#ccc0c0] underline-offset-4 transition duration-300 ease-in-out hover:bg-none hover:bg-white hover:text-[#061946] font-semibold py-2 px-4 rounded"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              {siteConfig.about.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
