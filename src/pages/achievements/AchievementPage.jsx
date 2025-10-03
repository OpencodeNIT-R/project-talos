import Timeline from "../../components/Timeline";
// import { achivementTop } from "../../config/achievement";

const AchievementPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100">
      <div className="relative overflow-hidden w-full h-200">
        {/* Background Image - Cropped from top */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dsjxx976j/image/upload/v1756624821/DSC00743_p4z0ld.jpg')",
            backgroundPosition: "center 90%",
          }}
        ></div>
      </div>

      <div className="relative bg-white">
        <Timeline />
      </div>
    </div>
  );
};

export default AchievementPage;
