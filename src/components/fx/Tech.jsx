
const DV = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";
const ICONS = { "HTML5": "html5/html5-original", "CSS3": "css3/css3-original", "JavaScript": "javascript/javascript-original", "React.js": "react/react-original", "Tailwind CSS": "tailwindcss/tailwindcss-original", "Node.js": "nodejs/nodejs-original", "Express.js": "express/express-original", "MongoDB": "mongodb/mongodb-original", "Git": "git/git-original", "GitHub": "github/github-original", "Vite": "vitejs/vitejs-original", "MySQL": "mysql/mysql-original" };
const MONO = new Set(["Express.js", "GitHub"]);
export function Tech({ n, size = 20 }) {
  const k = ICONS[n];
  if (!k) return null;
  return <img src={`${DV}${k}.svg`} alt="" width={size} height={size} loading="lazy" onError={(e) => (e.currentTarget.style.display = "none")} className={MONO.has(n) ? "dark:invert" : ""} />;
}
