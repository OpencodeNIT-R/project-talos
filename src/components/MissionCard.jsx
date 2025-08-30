export default function MissionCard({ title, description }) {
  return (
    <div className="bg-[#0A1440] text-white w-80 h-72 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col justify-center items-center text-center hover:scale-105 border border-gray-700/30">
      <h4 className="font-bold text-2xl mb-6 leading-tight">{title}</h4>
      <p className="text-gray-200 text-base leading-relaxed">{description}</p>
    </div>
  );
}
