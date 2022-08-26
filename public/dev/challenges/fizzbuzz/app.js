const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

let max = params.max;
let fizz = 3;
let buzz = 5;
let output = "";

for (let i = 1; i <= max; i++) {
  if (i % fizz === 0 && i % buzz !== 0) {
    output = "Fizz";
  } else if (i % buzz === 0 && i % fizz !== 0) {
    output = "Buzz";
  } else if (i % fizz == 0 && i % buzz === 0) {
    output = "FizzBuzz";
  } else {
    output = `${i}`;
  }

  document.querySelector(
    "#fizzbuzzList"
  ).innerHTML += `<li class="m-5 w-10">${output}</li>`;
}
