import MissionCard from "./MissionCard";
import { siteConfig } from "../config/navbarHero";

export default function MissionSection() {
  return (
    <section className="w-full bg-white py-20 flex justify-center">
      <div className="w-full max-w-none mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  max-[1250px]:px-6 gap-14 place-items-center">
        {siteConfig.missions.map(({ title, description }, index) => (
          <MissionCard key={index} title={title} description={description} />
        ))}
      </div>
    </section>
  );
}
