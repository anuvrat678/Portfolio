export const EMAIL = "anuvratrajpurohit@gmail.com";
export const L = {
  github: "https://github.com/anuvrat678",
  linkedin: "https://www.linkedin.com/in/anuvrat-rajpurohit-a4b3b7251/",
  turfRepo: "https://github.com/anuvrat678/TurfBook",
  turfLive: "https://turf-book-inky.vercel.app/",
  farmRepo: "https://github.com/anuvrat678/Farm-Dashboard-using-Mern",
};
export const NAV = ["Home", "About", "Skills", "Education", "Projects", "Contact"];
export const SKILLS = {
  "Frontend": ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Responsive web design"],
  "Backend": ["Node.js", "Express.js", "REST API development", "JWT authentication", "Server-side fundamentals"],
  "Database": ["MongoDB", "MySQL", "Database fundamentals", "CRUD operations", "Data modelling fundamentals"],
  "Tools": ["Git", "GitHub", "Vite", "Browser developer tools"],
  "Concepts": ["Component-based architecture", "Form handling and validation", "Authentication and authorization basics", "Debugging and problem-solving", "Version control", "Performance and accessibility basics"],
};
export const PROJECTS = [
  {
    name: "TurfBook", kind: "Turf and ground booking website", featured: true,
    text: "A full-stack MERN application where users search sports grounds by location, view ground details and book through a time-slot system with availability validation. Includes JWT authentication with bcrypt password hashing, and an admin dashboard for managing grounds and bookings.",
    tech: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "React Hook Form"],
    live: L.turfLive, repo: L.turfRepo,
  },
  {
    name: "Farm Management Dashboard", kind: "MERN stack dashboard",
    text: "A farm management dashboard built with the MERN stack for organising farm product data. Source code is available on GitHub.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    repo: L.farmRepo,
  },
];
export const RESUME = "/Anuvrat_Rajpurohit_Resume.pdf";
