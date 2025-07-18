import Button from "./shared/Button";
import { siteConfig } from "../config/navbarHero";

export default function HeroSection() {
  return (
    <section className="bg-white min-h-[400px]  pt-[80px] sm:pt-[100px] md:pt-[120px] lg:pt-[130px] px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between">
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
            <Button
              className="bg-transparent text-[rgba(55,115,236,1)] underline-offset-4 transition duration-300 ease-in-out hover:bg-[rgba(55,115,236,1)] hover:text-white "
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              {siteConfig.hero.secondaryLink}
            </Button>
          </div>
        </div>

        <div className="w-full max-w-[500px] px-2 md:px-0 mt-10 md:mt-0">
          <img
            src={siteConfig.hero.image}
            alt="ASME NIT Rourkela team members"
            className="rounded-md shadow-lg object-cover w-full h-auto"
          />

          <img
            src={siteConfig.hero.image1}
            alt="Background figure 1"
            className="absolute"
            style={{
              width: "705px",
              height: "705px",
              top: "-234px",
              left: "-151px",
              opacity: 0.36,
            }}
          />

          <img
            src={siteConfig.hero.image2}
            alt="Background figure 2"
            className="absolute hidden min-[980px]:block"
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
