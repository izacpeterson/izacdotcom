/** @format */

function addProject(name, img, url) {
  $("#projectList").append(` 
<a href=${url} class="cardLink">
<div class="card">
<img src=${img}></img>
<h2>${name}</h2>
</div>
</a>

  `);
}

let projects = [];
projects.push({
  name: "Worldwide Holidays",
  img: "https://image.flaticon.com/icons/png/512/814/814513.png",
  url: "https://worldwide-holidays.netlify.app/",
});
projects.push({
  name: "To-do List",
  img: "https://image.flaticon.com/icons/png/512/839/839608.png",
  url: "https://izac-todo-list.netlify.app/",
});
projects.push({
  name: "Password Generator",
  img: "https://image.flaticon.com/icons/png/512/891/891399.png",
  url: "https://izac-password-generator.netlify.app/",
});
projects.push({
  name: "ISS Tracker",
  img: "https://image.flaticon.com/icons/png/512/1086/1086135.png",
  url: "https://izac-iss.netlify.app/",
});

projects.push({
  name: "WindChimes",
  img: "https://image.flaticon.com/icons/png/512/3946/3946256.png",
  url: "https://izac-windchimes.netlify.app/",
});

projects.push({
  name: "Prime Number Generator",
  img: "https://image.flaticon.com/icons/png/512/752/752666.png",
  url: "https://izacpeterson.github.io/primegen/index.html",
});

projects.push({
  name: "Countdown",
  img: "https://image.flaticon.com/icons/png/512/850/850960.png",
  url: "https://izacpeterson.github.io/countdown/",
});

//image.flaticon.com/icons/png/512/850/850960.png

projects.forEach((i) => {
  addProject(i.name, i.img, i.url);
});
