// Cloudinary image URLs organized by year
const yearImages = {
  2014: [
    "https://res.cloudinary.com/dhtfkpk4r/image/upload/v1757187757/2014_lvi55q.png",
    "https://res.cloudinary.com/dhtfkpk4r/image/upload/v1757187759/2014_2_uvrv9i.png",
    "https://res.cloudinary.com/dhtfkpk4r/image/upload/v1757187729/2014_3_xjukfw.png",
  ],
  2016: [
    "https://res.cloudinary.com/dhtfkpk4r/image/upload/v1757187724/2016_pfpnzc.png",
    "https://res.cloudinary.com/dhtfkpk4r/image/upload/v1757187726/2016_2_zgd5q5.png",
  ],
  2017: [
    "https://res.cloudinary.com/dhtfkpk4r/image/upload/v1757187728/2017_i9i11q.png",
    "https://res.cloudinary.com/dhtfkpk4r/image/upload/v1757187726/2017_2_yjopnq.png",
    "https://res.cloudinary.com/dhtfkpk4r/image/upload/v1757187713/2017_3_tqnc6m.png",
  ],
  2022: [
    "https://res.cloudinary.com/dhtfkpk4r/image/upload/v1757187760/2022_akbqkt.png",
  ],
  2023: [
    "https://res.cloudinary.com/dhtfkpk4r/image/upload/v1757187763/2023_vigtpz.png",
    "https://res.cloudinary.com/dhtfkpk4r/image/upload/v1757187748/2023_2_rfuelk.png",
  ],
  2024: [
    "https://res.cloudinary.com/dhtfkpk4r/image/upload/v1757187740/2024_f5wbea.png",
  ],
  2025: [
    "https://res.cloudinary.com/dhtfkpk4r/image/upload/v1757187786/2025_nkufbt.png",
    "https://res.cloudinary.com/dhtfkpk4r/image/upload/v1757187763/2025_2_ppf1yz.png",
    "https://res.cloudinary.com/dhtfkpk4r/image/upload/v1757187755/2025_3_c9afsx.png",
    "https://res.cloudinary.com/dhtfkpk4r/image/upload/v1757187767/2025_4_dgi6cv.png",
  ],
  "2025a": [
    "https://res.cloudinary.com/dhtfkpk4r/image/upload/v1757187782/2025_5_hbhjwd.png",
    "https://res.cloudinary.com/dhtfkpk4r/image/upload/v1757187788/2025_6_qjkb5l.png",
  ],
  2019: [],
  2015: [],
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
    images: [],
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
  link: "https://res.cloudinary.com/dhtfkpk4r/image/upload/v1757189128/WhatsApp_Image_2025-09-07_at_01.34.47_ed4b1a9b_whzfyx.jpg",
};

export default achievementsData;
