import React from "react";
import Navbar from "../../../components/playground/Navbar";
import HeroSection from "../../../components/playground/HeroSection";
import AboutSection from "../../../components/playground/AboutSection";
import MissionSection from "../../../components/playground/MissionSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionSection />
      </main>
    </div>
  );
};

export default Home;
