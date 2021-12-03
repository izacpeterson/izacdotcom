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
new Project("DevFlix", "https://devflix.io/", "./img/logo_short_512.png");
// new Project("WorldWide Holidays", "https://worldwide-holidays.netlify.app/", "https://image.flaticon.com/icons/png/512/814/814513.png");
new Project("ISS Tracker", "https://izac-iss.netlify.app/", "https://image.flaticon.com/icons/png/512/1086/1086135.png");
new Project("Prime Number Generator", "https://izacpeterson.github.io/primegen/", "https://cdn-icons-png.flaticon.com/512/752/752673.png");
new Project("Countdown", "https://izacpeterson.github.io/countdown/", "https://cdn-icons.flaticon.com/png/512/2408/premium/2408971.png?token=exp=1638551812~hmac=4b46ca504ca518177c5965cc5f00a3f0");
// new Project("Wind Chimes", "https://izac-windchimes.netlify.app/", "https://image.flaticon.com/icons/png/512/3946/3946256.png");
