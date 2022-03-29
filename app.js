const projectList = [
  { name: "Solar System", url: "url", desc: "A visual representation of our solar system", skills: ["HTML Canvas", "Javascript"] },
  { name: "DevFlix", url: "url", desc: "An app to browse, save, and share your favorite movies", skills: ["Javascript", "HTML", "SASS", "Firebase"] },
  { name: "Color Palettes", url: "url", desc: "Create and share color palettes", skills: ["ReactJS", "Semantic UI", "Firebase"] },
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
        <h3>${this.name}</h3>
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
