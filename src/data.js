import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

// 🧠 Import hình ảnh cho tất cả kỹ năng
import Js from "/assets/tools/js.png";
import Ts from "/assets/tools/ts.png";
import Csharp from "/assets/tools/csharp.png";
import Cpp from "/assets/tools/cpp.png";

import ReactJS from "/assets/tools/reactjs.png";
import StyledComponents from "/assets/tools/styled.png";
import Tailwind from "/assets/tools/tailwind.png";
import NextJs from "/assets/tools/nextjs.png";

import NodeJS from "/assets/tools/nodejs.png";
import Express from "/assets/tools/express.png";
import MongoDB from "/assets/tools/mongo.png";
import MySQL from "/assets/tools/mysql.png";
import Postgresql from "/assets/tools/postgresql.png";
import Redis from "/assets/tools/redis.png";
import Docker from "/assets/tools/docker.png";

import Vscode from "/assets/tools/vscode.png";
import Github from "/assets/tools/github.png";
import Unity from "/assets/tools/unity.jpg";
import Shopify from "/assets/tools/shopify.png";

import FBAds from "/assets/tools/fbads.png";
import IGAds from "/assets/tools/igads.jpg";
import Email from "/assets/tools/email.jpg";
import Influencer from "/assets/tools/influencer.png";


// 🧩 1. Programming Languages
export const programmingLanguages = [
  { id: 1, icon: Js, name: "JavaScript" },
  { id: 2, icon: Ts, name: "TypeScript" },
  { id: 3, icon: Csharp, name: "C#" },
  { id: 4, icon: Cpp, name: "C++" },
];

// 🎨 2. Frontend
export const frontEnd = [
  { id: 1, icon: ReactJS, name: "React JS" },
  { id: 2, icon: StyledComponents, name: "Styled Components" },
  { id: 3, icon: Tailwind, name: "Tailwind CSS" },
  { id: 5, icon: NextJs, name: "Next.js" },
];

// ⚙️ 3. Backend
export const backEnd = [
  { id: 1, icon: NodeJS, name: "Node JS" },
  { id: 2, icon: Express, name: "Express JS" },
  { id: 3, icon: MongoDB, name: "MongoDB" },
  { id: 4, icon: MySQL, name: "MySQL" },
  { id: 5, icon: Postgresql, name: "Postgresql" },
  { id: 6, icon: Redis, name: "Redis" },
  { id: 7, icon: Redis, name: "Docker" },
];

// 🧰 4. Tools
export const tools = [
  { id: 1, icon: Vscode, name: "VS Code" },
  { id: 2, icon: Github, name: "GitHub" },
  { id: 3, icon: Unity, name: "Unity" },
  { id: 4, icon: Shopify, name: "Shopify" },
];

// 📢 5. Marketing
export const marketing = [
  { id: 1, icon: FBAds, name: "Facebook Ads" },
  { id: 2, icon: IGAds, name: "Instagram Ads" },
  { id: 3, icon: Email, name: "Email Marketing" },
  { id: 4, icon: Influencer, name: "Influencer Marketing" },
];
import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.png";
import Proyek6 from "/assets/proyek/proyek6.png";
import Proyek7 from "/assets/proyek/proyek7.png";
import Proyek8 from "/assets/proyek/proyek8.png";
import Proyek9 from "/assets/proyek/proyek9.png";
import Proyek10 from "/assets/proyek/proyek10.png";
export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "Blinkit Clone",
    subtitle: "Full stack eCommerce website with admin dashboard.",
    fullDescription:
      "Full-Stack | React, TypeScript, TailwindCSS, Node.js, Express, MongoDB. Full end-to-end eCommerce system with complete admin dashboard (products, orders, users, revenue). Advanced authentication: JWT, secure cookies, email verification, password reset via verification code. Product catalog, cart, checkout, customer management & analytics. Cloudinary media handling + fully responsive UI/UX.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/trungnguyen1221999/-Blinkit-Clone",
    techstack: [
      "fullstack",
      "react",
      "typescript",
      "tailwindcss",
      "nodejs",
      "mongodb",
    ],
    dad: "100",
  },
  {
    id: 10,
    image: Proyek10,
    title: "Kai's Restaurant",
    subtitle: "Full stack Restaurant website with admin page.",
    fullDescription:
      "A full-stack restaurant management and booking system with a modern, fully responsive UI and complete admin dashboard, built with MongoDB, Express, React, Tailwind, and Node.js; features for users include browsing menu items, viewing categories, searching with pagination, and making table reservations, while the admin dashboard enables category management (create, edit, delete), menu management (create, edit, delete, image upload), reservation management, secure authentication, search and filtering, and pagination, providing a seamless experience for both customers and administrators.",
    borderColor: "#fff500",
    gradient: "linear-gradient(145deg, #fff500, #000)",
    url: "https://github.com/trungnguyen1221999/restaurant-fullstack",
    techstack: [
      "fullstack",
      "javascript",
      "tailwindcss",
      "typescript",
      "react",
      "nodejs",
      "mongodb",
    ],
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "Shopee Clone",
    subtitle: "Full stack eCommerce website.",
    fullDescription:
      "Built with ReactJS, TypeScript, TailwindCSS, React Router, React Hook Form with Yup, React Query, Node.js, Express.js, and MongoDB, this project features JWT authentication with automatic token refresh, form validation, smart pagination, product filtering, keyword-search URL sync, asynchronous data fetching and caching, RESTful APIs for products, users, and carts, as well as protected routes and user session management.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/trungnguyen1221999/Shopee-Clone---Trung-Nguyen",
    techstack: [
      "fullstack",
      "react",
      "typescript",
      "styled-components",
      "nodejs",
      "mongodb",
    ],
    dad: "200",
  },
  {
    id: 8,
    image: Proyek8,
    title: "Personal Portfolio",
    subtitle: "My personal portfolio.",
    fullDescription:
      "A modern personal portfolio website built with Vite, React, TailwindCSS, JavaScript and ReactBits. It showcases my projects, skills, and experience in web development and digital marketing.",
    borderColor: "#00806c",
    gradient: "linear-gradient(145deg, #00806c, #000)",
    url: "https://github.com/trungnguyen1221999/portfolio",
    techstack: ["react", "javascript", "tailwindcss", "shadcn-ui", "reactbits"],
    dad: "100",
  },

  {
    id: 3,
    image: Proyek3,
    title: "VerkkoKauppa Clone",
    subtitle: "Clone homepage of VerkkoKauppa",
    fullDescription:
      "This project is a frontend clone of Verkkokauppa.com – the largest e-commerce website in Finland. The goal of this project is to practice building and structuring a large-scale e-commerce frontend using React and styled-components. Currently, only the homepage has been implemented, and I will continue to expand and improve the website over time.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/trungnguyen1221999/Verkkokauppa",
    techstack: ["frontend", "react", "javascript", "styled-components"],
    dad: "300",
  },
  {
    id: 9,
    image: Proyek9,
    title: "Dashboard Panel",
    subtitle: "Frontend project built with Next.js and Shadcn UI",
    fullDescription:
      "It demonstrates how to structure a modern web application using React, TypeScript, and a component-based design system. 🚀 Tech Stack: Framework: Next.js, UI Library: Shadcn UI, Language: TypeScript. Styling: Tailwind CSS. Deployment: Vercel. 🧠 Project Purpose: This project was created as a personal learning exercise to understand the fundamentals of Next.js (client components, server components), practice using Shadcn UI for building modern, accessible, and reusable components, implement Light/Dark Mode, and explore component-driven development and responsive design with Tailwind CSS.",
    borderColor: "#faff00",
    gradient: "linear-gradient(145deg, #faff00, #000)",
    url: "https://github.com/trungnguyen1221999/next-js-dashboard",
    techstack: ["frontend", "nextjs", "javascript", "tailwindcss", "shadcn-ui"],
    dad: "100",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Tea Showcase",
    subtitle: "Frontend tea shop showcase. Pure HTML, CSS, and JavaScript",
    fullDescription:
      "A simple and elegant **Tea Shop** website built using **pure HTML, CSS, and JavaScript.Features: Responsive layout for desktop and mobile, Smooth hover effects, Clean and modern design, Simple navigation",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/trungnguyen1221999/tea-shop",
    dad: "400",
    techstack: ["frontend",  "javascript"],
  },
  {
    id: 5,
    image: Proyek5,
    title: "VoiceCraft 2 Game",
    subtitle:
      "A space shooter where the player had to collect stolen letters from alien invaders.",
    fullDescription:
      "VoiceCraft 2 is a 2D space-shooter game developed during the summer of 2025, based on a prototype originally built for a game jam. This expanded version takes the core ideas of the original and evolves them into a full-scale arcade experience with 10 levels and 80 unique stages. This game was made with passion and teamwork over the summer, building upon the original game jam vision. We hope you enjoy playing it as much as we enjoyed making it! 👥 Development Team Shun Lei Myat Oo, trungnguyen1221999 (me - Kai), Yan_vuoksi",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/shunlei99/GameJam2",
    techstack: ["unity", "c#"],
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "A classic Pikachu",
    subtitle:
      "The classic Pikachu tile-matching puzzle, can play on both Android & Pc",
    fullDescription:
      "A fun and nostalgic Pikachu tile-matching game, built with ❤️ using Unity and C#, designed for Android devices. ⚠️ For educational purposes only, 🚫 Not for commercial use, All assets (e.g., Pokémon images, sprites) belong to their respective owners.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/trungnguyen1221999/pikachu--android",
    techstack: ["unity", "c#"],
    dad: "600",
  },
  {
    id: 7,
    image: Proyek7,
    title: "Merge Knives",
    subtitle:
      "Merge Knives is a game developed exclusively for the Kauhajoki Museum, can play on both Android & Pc",
    fullDescription:
      "Players merge knives to create stronger versions and then use their best creation to fight a powerful Boss in the second part of the game. Built with Unity and C#, designed for Android devices. The game has no public download link. It was created exclusively for the Kauhajoki Museum and is available only within the museum exhibition.",
    borderColor: "#e44b8d",
    gradient: "linear-gradient(180deg, #e44b8d, #000)",
    url: "https://github.com/mazinstein/knives-merge",
    techstack: ["unity", "c#"],
    dad: "600",
  },
];
