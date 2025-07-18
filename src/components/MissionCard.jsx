export default function MissionCard({ title, description }) {
  return (
    <div className="bg-[#0A1440] text-white w-[300px] h-[320px] rounded-md shadow-md flex flex-col justify-center items-center text-center px-6 py-10">
      <h4
        className="font-bold text-[32px] leading-[150%] mb-6"
        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
      >
        {title}{" "}
      </h4>

      <p
        className="text-[20px] leading-[150%] mb-4"
        style={{ fontFamily: "Helvetica, Arial, sans-serif", fontWeight: 400 }}
      >
        {description}{" "}
      </p>
    </div>
  );
}
