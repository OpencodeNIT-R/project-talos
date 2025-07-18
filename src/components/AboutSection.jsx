import Button from "./shared/Button";
import { siteConfig } from "../config/navbarHero";

export default function AboutSection() {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-y-10 gap-x-10 xl:gap-x-12 2xl:gap-x-14">
        <div className="w-full max-w-[500px] px-2 md:px-0 mt-10 md:mt-0">
          <img
            src={siteConfig.about.image}
            alt="ASME NIT Rourkela team members"
            className="rounded-md shadow-lg object-cover w-full h-auto"
          />
        </div>

        <div className="w-full  text-center md:text-left space-y-4 max-w-[700px]">
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
            <Button
              className="bg-white text-blue-600 px-10 shadow-lg py-2 rounded-md border border-black transition duration-300 ease-in-out hover:bg-[rgba(6,25,70,1)] hover:text-white"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              {siteConfig.about.button}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
