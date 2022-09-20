const projects = [
  {
    name: "Dev Flix",
    desc: "Get detailed information about movies, see what's new, like and share your favorites! Built using HTML, CSS, and JavaScript.",
    url: "https://devflix.io/",
  },
  {
    name: "Bug Tracker",
    desc: "(work in progress) Report, track, and manage bugs! Built using Vue.js, Node.js, and TailwindCSS.",
    url: "https://bugs.izacpeterson.com",
  },
];

const challenges = [
  {
    name: "Fizz Buzz",
    url: "/dev/challenges/fizzbuzz",
  },
  {
    name: "Fibonacci",
    url: "/dev/challenges/fibonacci",
  },
  {
    name: "Matrix Rain",
    url: "/dev/challenges/matrix",
  },
  {
    name: "Game of Life",
    url: "/dev/challenges/life",
  },
  // {
  //   name: "Prime Numbers",
  //   url: "/challenges/primes",
  // },
];

projects.forEach((project) => {
  document.querySelector("#projectList").innerHTML += `
    <a href="${project.url}" class="w-1/4 bg-zinc-800 p-5 m-5 rounded-sm shadow-md hover:shadow-lg">
        <h2 class="text-2xl underline mb-2">${project.name}</h2>
        <p>${project.desc}</p>
    </a>
  `;
});
challenges.forEach((challenge) => {
  document.querySelector("#challengeList").innerHTML += `
    <a href="${challenge.url}" class="bg-zinc-800 p-5 m-5 rounded-sm shadow-md hover:shadow-lg">
        <h2 class="text-2xl underline mb-2">${challenge.name}</h2>
    </a>
  `;
});
