const projectList = [
  { name: "Solar System", url: "https://izacpeterson.github.io/solSystem/", desc: "A realtime visual representation of our solar system", skills: ["HTML Canvas", "Javascript"] },
  { name: "DevFlix", url: "https://devflix.io/", desc: "An app to browse, save, and share your favorite movies", skills: ["Javascript", "HTML", "SASS", "Firebase"] },
  { name: "Color Palettes", url: "https://color.izacpeterson.com/", desc: "Create and share color palettes", skills: ["ReactJS", "Semantic UI", "Firebase"] },
  { name: "CryptoChat", url: "https://izac-crypto-chat.herokuapp.com/", desc: "A simple and secure chat app", skills: ["NodeJS", "Vue", "SQLite"] },
];
class Project {
  constructor(name, url, desc, skills) {
    this.name = name;
    this.url = url;
    this.desc = desc;
    this.skills = skills;
  }
  render() {
    document.querySelector("#projectList").innerHTML += `
      <div class="project">
        <h3><a href="${this.url}" target="_blank">${this.name}</a></h3>
        <span class='desc'>${this.desc}</span>
        <h4>Skills used:</h4>
        <ul>
          ${this.skills
            .map((skill) => {
              return `<li>${skill}</li>`;
            })
            .join("")}
        </ul>
      </div>
    
    `;
  }
}

projectList.forEach((project) => {
  new Project(project.name, project.url, project.desc, project.skills).render();
});
