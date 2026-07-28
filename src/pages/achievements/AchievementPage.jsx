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
              "url('https://res.cloudinary.com/dc7tu3hzv/image/upload/v1785234333/WhatsApp_Image_2026-06-29_at_18.22.43_mjqlt2.jpg')",
            // eslint-disable-next-line no-dupe-keys
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
