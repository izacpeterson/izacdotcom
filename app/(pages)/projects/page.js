import ProjectCard from "@/app/components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    // {
    //   title: "Twutter - W.I.P.",
    //   description: "A simple but functional twitter clone",
    //   tags: ["Next.js", "Prisma", "PlanetScale", "TypeScript", "Auth.js"],
    //   url: "https://twutter.izac.app/",
    // },
    {
      title: "BugTracker",
      description: "A basic project management app.",
      tags: ["Vue.js", "Node.js", "SQLite", "Express.js"],
      url: "https://bugs.izac.app/",
    },
    {
      title: "CoolBot",
      description: "An OpenAI Chat-GPT powered chat bot, but way cooler",
      tags: ["SvelteKit", "TailwindCSS", "OpenAI"],
      url: "https://chat.izac.app/",
    },
    {
      title: "DevFlix.io",
      description: "Search, discover, and learn more about your favorite movies!",
      tags: ["HTML", "CSS", "JavaScript", "Firebase"],
      url: "https://devflix.io",
    },
    // {
    //   title: "Family Social",
    //   description: "A social network for families",
    //   tags: ["Next.js", "TailwindCSS", "Firebase"],
    //   url: "https://familysocial.vercel.app/",
    // },
    {
      title: "Color Palette Builder",
      description: "Generate beautiful color palettes",
      tags: ["React", "Bootstrap", "Firebase"],
      url: "https://color.izacpeterson.com/",
    },
    {
      title: "Weather App",
      description: "A simple weather app",
      tags: ["SvelteKit", "TailwindCSS", "OpenWeatherMap"],
      url: "https://weather.izac.app/",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-6xl">My Projects</h1>
      <p>Below are some of my favorite projects I&apos;ve built. Feel free to check them out!</p>
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} tags={project.tags} url={project.url} />
        ))}
      </div>
    </div>
  );
}
