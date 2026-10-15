import HeroImage from "/assets/portfolio-img-1-1.jpeg";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

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
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import InvestMe from "/assets/proyek/InvestMe.webp";
import VinCraft from "/assets/proyek/VinCraft.webp";
import BookMart from "/assets/proyek/BookMart.png";
import WebsiteDev from "/assets/proyek/WebsiteDev.png";
import DashGarment from "/assets/proyek/DashGarment.png";
import Comserv from "/assets/proyek/Comserv.webp";

export const listProyek = [
  {
    id: 1,
    gambar: InvestMe,
    nama: "InvestMe",
    desk: "A UI/UX design group project of 3 developed for a competition focused on empowering MSMEs through investment opportunities. The platform allows MSMEs to seek investors for their businesses, while investors can discover MSMEs to invest in. I was responsible for designing the MSME interface.",
    tools: ["Figma"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Comserv,
    nama: "Student Activity Management Website",
    desk: "A web-based system developed to manage student community service activities. Students can register for community service events, while administrators can manage events and assign community service hours. My responsibilities included designing and redesigning interfaces, developing dashboard and protest form pages, conducting software testing, and preparing Functional Specification Documents (FSD).",
    tools: ["Figma", "DBeaver", "SQL", "Visual Studio"],
    dad: "300",
  },
  {
    id: 3,
    gambar: VinCraft,
    nama: "VinCraft",
    desk: "A Minecraft community website developed as a programming lab project, where users can share their builds and administrators can manage website content. I contributed to most of the development process, implementing core website functionality, including login, CRUD operations, and administrative features. The website runs locally using PHP and XAMPP.",
    tools: ["PHP", "XAMPP", "SQL", "Visual Studio Code"],
    dad: "400",
  },
  {
    id: 4,
    gambar: WebsiteDev,
    nama: "Responsive Web Development",
    desk: "A personal project focused on practicing responsive web development using HTML and CSS while following structured coding practices and Git version control. I independently developed the websites using assets provided by Frontend Mentor and published the project repositories on GitHub. The websites can be run locally.",
    tools: ["HTML", "CSS", "Visual Studio COde", "Git", "Github"],
    dad: "500",
  },
  {
    id: 5,
    gambar: DashGarment,
    nama: "PT. Dash Garment Database Analysis",
    desk: "A database analysis and design project for PT. Dash Garment, focusing on developing a structured database based on established design practices, including Third Normal Form (3NF) normalization. I contributed throughout the design process, from conceptual modeling to logical database design, and helped prepare the project documentation.",
    tools: ["Microsoft Word", "SQL"],
    dad: "600",
  },
  {
    id: 6,
    gambar: BookMart,
    nama: "BookMart System Security Analysis",
    desk: "A system security planning project for the DIGIN competition organized by HIMSISFO, addressing a bookstore system following a data breach. My contributions included analyzing vulnerabilities in multi-platform integrations, identifying attack vectors involving human error, and structuring an OTP/MFA authentication workflow. The findings and proposed security measures were documented in a formal report.",
    tools: ["Microsoft Word"],
    dad: "700",
  },
];
