import HeroImage from "/assets/portfolio-img-1-1.jpeg";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/tailwind.png";
import Tools4 from "/assets/tools/github.png";
import Tools6 from "/assets/tools/canva.png";
import Tools7 from "/assets/tools/figma.png";
import Tools8 from "/assets/tools/sql-server.png";
import Tools9 from "/assets/tools/excel.png";
import Tools10 from "/assets/tools/tableau.png";
import Tools11 from "/assets/tools/draw.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 5,
    gambar: Tools6,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 6,
    gambar: Tools7,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 7,
    gambar: Tools10,
    nama: "Tableau",
    ket: "Data Visualization",
    dad: "1200",
  },
  {
    id: 8,
    gambar: Tools9,
    nama: "Excel",
    ket: "Data Analysis",
    dad: "1300",
  },
  {
    id: 9,
    gambar: Tools8,
    nama: "Microsoft SQL",
    ket: "Database Management",
    dad: "1400",
  },
  {
    id: 9,
    gambar: Tools11,
    nama: "Draw.io",
    ket: "System Modelling",
    dad: "1500",
  },
];

import InvestMe from "/assets/proyek/InvestMe.webp";
import VinCraft from "/assets/proyek/VinCraft.webp";
import BookMart from "/assets/proyek/BookMart.png";
import WebsiteDev from "/assets/proyek/WebsiteDev.png";
import DashGarment from "/assets/proyek/DashGarment.png";
import Comserv from "/assets/proyek/Comserv.webp";
import gopay from "/assets/proyek/gopay.webp";
import dashboard from "/assets/proyek/dashboard.png";
import damod from "/assets/proyek/damod.png";
import hampiness from "/assets/proyek/hampiness.png";

export const listProyek = [
  {
    id: 1,
    gambar: InvestMe,
    nama: "InvestMe",
    desk: "A UI/UX design group project of 3 developed for a competition focused on empowering MSMEs through investment opportunities. The platform allows MSMEs to seek investors for their businesses, while investors can discover MSMEs to invest in. I was responsible for designing the MSME interface.",
    tools: ["Figma"],
    link: "https://www.figma.com/design/Wmv5oqepOUxvrtgi9d0UEg/InvestMe?node-id=2-2&t=MdUFQ0rPRFqD3B8c-1",
    dad: "200",
  },
  {
    id: 2,
    gambar: Comserv,
    nama: "Student Activity Management Website",
    desk: "A professional project I contributed to during my part-time experience as a System Analyst. The web-based system manages student community service activities, allowing students to register for events while administrators manage events and assign service hours. My responsibilities included designing and refining user interfaces, developing dashboard and request form pages, conducting software testing, and updating Functional Specification Documents (FSD).",
    tools: ["Figma", "DBeaver", "SQL", "Visual Studio"],
    link: "https://www.figma.com/design/2AjaYjXxPS0oFZOd3B4NGH/portfolio?node-id=0-1&t=u0WOxH5GTTfi7ZNR-1",
    dad: "300",
  },
  {
    id: 3,
    gambar: VinCraft,
    nama: "VinCraft",
    desk: "A Minecraft community website developed as a programming lab project, where users can share their builds and administrators can manage website content. I contributed to most of the development process, implementing core website functionality, including login, CRUD operations, and administrative features. The website runs locally using PHP and XAMPP.",
    tools: ["PHP", "XAMPP", "SQL", "Visual Studio Code"],
    link: "https://github.com/TheoPaskah/Vincraft_CampusProject",
    dad: "400",
  },
  {
    id: 4,
    gambar: dashboard,
    nama: "Game Data Dashboard",
    desk: "Developed an interactive Tableau dashboard for a Data Visualization course, using video game data to explore global sales, user ratings, and platform performance. Visualized key metrics and trends through interactive charts to identify patterns and compare sales across different genres and platforms.",
    tools: ["Excel", "Tableau"],
    link : "https://docs.google.com/document/d/137Uk75CeGuSjWIYX_QGawNTGnXflTW_9/edit?usp=sharing&ouid=101230169937740648985&rtpof=true&sd=true",
    dad: "500",
  },
  {
    id: 5,
    gambar: damod,
    nama: "Car Rental Dashboard",
    desk: "Analyzed a car rental dataset in a team of 6 and transformed the data into an interactive Excel dashboard. Organized and visualized key metrics to highlight business trends, support data exploration, and provide insights into car rental performance through interactive visualizations.",
    tools: ["Excel", "Word"],
    link: "https://docs.google.com/document/d/1Orjr0VdAmy9-SlwCxq8WdcNDa2lSpP8_/edit?usp=sharing&ouid=101230169937740648985&rtpof=true&sd=true",
    dad: "600",
  },
  {
    id: 6,
    gambar: gopay,
    nama: "GoPay App Redesign",
    desk: "Redesigned the GoPay app interface through UI/UX analysis and prototyping, focusing on improving usability and the overall user experience. Developed design concepts and prototypes for additional features to explore potential improvements to the existing application.",
    tools: ["Figma", "Notion"],
    link: "https://shelled-rosemary-98e.notion.site/The-Beatles-Group-15306caeaceb8021b87ed6cdb005a1fa",
    dad: "700",
  },
  {
    id: 7,
    gambar: WebsiteDev,
    nama: "Responsive Web Development",
    desk: "A personal project focused on practicing responsive web development using HTML and CSS while following structured coding practices and Git version control. I independently developed the websites using assets provided by Frontend Mentor and published the project repositories on GitHub. The websites can be run locally.",
    tools: ["HTML", "CSS", "Visual Studio COde", "Git", "Github"],
    link: "https://github.com/TheoPaskah/frontend-mentor-practices",
    dad: "800",
  },
  {
    id: 8,
    gambar: DashGarment,
    nama: "PT. Dash Garment Database Analysis",
    desk: "A database analysis and design project for PT. Dash Garment, focusing on developing a structured database based on established design practices, including Third Normal Form (3NF) normalization. I contributed throughout the design process, from conceptual modeling to logical database design, and helped prepare the project documentation.",
    tools: ["Word", "SQL"],
    link: "https://drive.google.com/drive/folders/14xYhuSZZGeSPwXHiMSXqKZViOT7VKsGC?usp=sharing",
    dad: "900",
  },
  {
    id: 9,
    gambar: BookMart,
    nama: "BookMart System Security Analysis",
    desk: "A system security planning project for the DIGIN competition organized by HIMSISFO, addressing a bookstore system following a data breach. My contributions included analyzing vulnerabilities in multi-platform integrations, identifying attack vectors involving human error, and structuring an OTP/MFA authentication workflow. The findings and proposed security measures were documented in a formal report.",
    tools: ["Word"],
    link: "https://drive.google.com/drive/folders/1Wi1VaU0QV4XLokllmbKtK_cMs3SdgC98?usp=sharing",
    dad: "1000",
  },
  {
    id: 10,
    gambar: hampiness,
    nama: "ISAAD LAB Final Project",
    desk: "Created Data Flow Diagrams (DFDs), Fishbone Diagrams, and Sequence Diagrams to model system processes, identify operational issues, and visualize system interactions for the Hampiness information system.",
    tools: ["Word", "Draw.io"],
    link: "https://docs.google.com/document/d/1-22Dr9WQ8kj3s9e0wIP2_VlnR5Kl4GyU/edit?usp=sharing&ouid=101230169937740648985&rtpof=true&sd=true",
    dad: "1100",
  },
];

import Cert1 from "/assets/certificate/techfest.webp";
import Cert2 from "/assets/certificate/digin.png";
import Cert3 from "/assets/certificate/dean.png";
import Cert4 from "/assets/certificate/oracle.webp";
import Cert5 from "/assets/certificate/paud.jpeg";

export const listCertificate = [
  {
    id: 1,
    gambar: Cert1,
    nama: "Participant of Techfest 2025",
    desk: "Issued by HIMTI Binus University · Sep 2025",
    dad: "200",
  },
  {
    id: 2,
    gambar: Cert2,
    nama: "Preliminary Participant of DIG IN HIMSISFO 2024",
    desk: "Issued by HIMSISFO Binus University · Feb 2025",
    dad: "300",
  },
  {
    id: 3,
    gambar: Cert3,
    nama: "Dean's List 2025 at School of Information System",
    desk: "Issued by Binus University · Dec 2025",
    dad: "400",
  },
  {
    id: 4,
    gambar: Cert4,
    nama: "Applied Database Systems using Oracle AI Database",
    desk: "Issued June 2026",
    dad: "500",
  },
  {
    id: 5,
    gambar: Cert5,
    nama: "Fun Learning PAUD",
    desk: "Sep 2025 - Oct 2025",
    dad: "600",
  },
];