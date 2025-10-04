// Import all year-based images
import img2014 from "../assets/2014.png";
import img2014_2 from "../assets/2014 (2).png";
import img2014_3 from "../assets/2014 (3).png";
import img2016 from "../assets/2016.png";
import img2016_2 from "../assets/2016 (2).png";
import img2017 from "../assets/2017.png";
import img2017_2 from "../assets/2017 (2).png";
import img2017_3 from "../assets/2017 (3).png";
import img2022 from "../assets/2022.png";
import img2023 from "../assets/2023.png";
import img2023_2 from "../assets/2023 (2).png";
import img2024 from "../assets/2024.png";
import img2025 from "../assets/2025.png";
import img2025_2 from "../assets/2025 (2).png";
import img2025_3 from "../assets/2025 (3).png";
import img2025_4 from "../assets/2025 (4).png";
import img2025_5 from "../assets/2025 (5).png";
import img2025_6 from "../assets/2025 (6).png";
import img2015 from "../assets/2015.jpeg";

// Organize images by year
const yearImages = {
  2014: [img2014, img2014_2, img2014_3],
  2015: [img2015],
  2016: [img2016, img2016_2],
  2017: [img2017, img2017_2, img2017_3],
  2022: [img2022],
  2023: [img2023, img2023_2],
  2024: [img2024],
  2025: [img2025, img2025_2, img2025_3, img2025_4],
  "2025a": [img2025_5, img2025_6],
};

const achievementsData = [
  {
    id: 1,
    title: "Human Powered Vehicle Competition",
    description:
      "Secured 3rd Position Globally in Critical Design Review and 1st Position among Indian Colleges.",
    year: "2021",
    category: "HPVC",
    rank: "3rd Global",
    images: yearImages["2021"] || null,
  },
  {
    id: 2,
    title: "Human Powered Vehicle Competition",
    description:
      "2nd Position Globally in Critical Design and 3rd Position in Innovation- BlueStreak 9.0.",
    year: "2022",
    category: "HPVC",
    rank: "2nd Global",
    images: yearImages["2022"] || null,
  },
  {
    id: 3,
    title: "IAM3D",
    description: "Secured 9th Place Globally (Hovercraft Project).",
    year: "2023",
    category: "Design",
    rank: "9th Global",
    images: yearImages["2023"] || null,
  },
  {
    id: 4,
    title: "ASME XRC 2024",
    description:
      "Team BlueBird Secured 1st Position in Extended Reality Challenge For Sustainable innovations in ocean cleanup.",
    year: "2024",
    category: "XRC",
    rank: "1st Place",
    images: yearImages["2024"] || null,
  },
  {
    id: 5,
    title: "Human Powered Vehicle Competition",
    description:
      "Team BlueStreak 11.0 Secured 3rd Position in Design Presentation, The Best Innovation Award, 3rd Position in Drag Race and 3rd Position Overall in e-HPVC.",
    year: "2025",
    category: "HPVC",
    rank: "3rd Overall",
    images: yearImages["2025"] || null,
  },
  {
    id: 6,
    title: "Human Powered Vehicle Competition",
    description:
      "Secured 9th in Endurance and 13th Overall in E-Fest Asia Pacific",
    year: "2019",
    category: "HPVC",
    rank: "13th Overall",
    images: yearImages["2019"] || null,
  },
  {
    id: 7,
    title: "Human Powered Vehicle Competition",
    description:
      "Secured 20th in men's endurance race and 24th in female drag race out of 43 teams, HPVC ASIA PACIFIC.",
    year: "2017",
    category: "HPVC",
    rank: "20th Place",
    images: yearImages["2017"] || null,
  },
  {
    id: 8,
    title: "Human Powered Vehicle Competition",
    description:
      "Secured 2nd Position in design event and 9th in overall, HPVC ASIA PACIFIC VIT VELLORE.",
    year: "2016",
    category: "HPVC",
    rank: "2nd Design",
    images: yearImages["2016"] || null,
  },
  {
    id: 9,
    title: "Human Powered Vehicle Competition",
    description: "Highest Innovation Score, HPVC India at DTU.",
    year: "2015",
    category: "HPVC",
    rank: "Best Innovation",
    images: yearImages["2015"] || null,
  },
  {
    id: 10,
    title: "Human Powered Vehicle Competition",
    description:
      "First International Participation at HPVC East, University of Central Florida and Highest marks in Analysis Section, HPV India at IIT Delhi.",
    year: "2014",
    category: "HPVC",
    rank: "Best Analysis",
    images: yearImages["2014"] || null,
  },
  {
    id: 11,
    title: "IAM3D",
    description:
      "Secured 2nd Position Overall, Team BluePrint 3.0 (FPV Drone Project).",
    year: "2025",
    category: "Design",
    rank: "2nd Overall",
    images: yearImages["2025a"] || null,
  },
];

export const achivementTop = {
  link: "https://res.cloudinary.com/dsjxx976j/image/upload/v1755452142/DSC00743_sw9grt.jpg",
};

export default achievementsData;
