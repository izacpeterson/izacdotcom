let projectList = document.querySelector("#projectList");

class Project {
  constructor(name, url, img) {
    this.name = name;
    this.url = url;
    this.img = img;
    this.render();
  }
  render() {
    projectList.innerHTML += `
    <li class="project">
        <a href="${this.url}">
            <h3>${this.name}</h3>
            <img src="${this.img}" />
        </a>
    </li>`;
  }
}

new Project("Solar System", "https://izacpeterson.github.io/solSystem/", "https://cdn-icons-png.flaticon.com/512/3533/3533265.png");
new Project("ToDo App", "https://izacpeterson.github.io/todo/", "https://cdn-icons-png.flaticon.com/512/2666/2666505.png");
new Project("DevFlix", "https://devflix.io/", "https://raw.githubusercontent.com/izacpeterson/mtech_movie/main/public/img/logo_512.png");
// new Project("WorldWide Holidays", "https://worldwide-holidays.netlify.app/", "https://image.flaticon.com/icons/png/512/814/814513.png");
new Project("ISS Tracker", "https://izac-iss.netlify.app/", "https://image.flaticon.com/icons/png/512/1086/1086135.png");
// new Project("Wind Chimes", "https://izac-windchimes.netlify.app/", "https://image.flaticon.com/icons/png/512/3946/3946256.png");

// projectList.innerHTML += new Project("Prime Generator").render();
// projectList.innerHTML += new Project("Golf ScoreCard").render();
