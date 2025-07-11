import MissionCard from "./MissionCard";
import { siteConfig } from "../../config/navbarHero";

export default function MissionSection() {
  return (
    <section className="w-full bg-white py-20 flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 place-items-center">
        {siteConfig.missions.map(({ title, description }, index) => (
          <MissionCard key={index} title={title} description={description} />
        ))}
      </div>
    </section>
  );
}
