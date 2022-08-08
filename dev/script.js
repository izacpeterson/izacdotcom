let projects = [
  {
    name: "Dev Flix",
    desc: "Get detailed information about movies, see what's new, like and share your favorites! Built using HTML, CSS, and JavaScript.",
    url: "",
  },
  {
    name: "Solar System",
    desc: "See a live illustration of our solar system! (not to scale). Built with HTML Canvas and JavaScript",
    url: "",
  },
  {
    name: "Prime Numbers",
    desc: "Generate a list of prime numbers up to a given number. Built with JavaScript and HTML.",
    url: "",
  },
  {
    name: "ISS Locator",
    desc: "View the current location of the International Space Station. Built using HTML, Javascript and maps",
    url: "",
  },
  {
    name: "Cookbook",
    desc: "Save your favorites recipes, view popular recipes, and share them with your friends! Built using Vue and Tailwind.",
    url: "",
  },
  //   { name: "", desc: "", url: "" },
];

projects.forEach((project) => {
  document.querySelector("#projectList").innerHTML += `
    <a href="${project.url}" class="w-1/4 bg-zinc-800 p-5 m-5 rounded-sm shadow-md hover:shadow-lg">
        <h2 class="text-2xl underline mb-2">${project.name}</h2>
        <p>${project.desc}</p>
    </a>
  `;
});
