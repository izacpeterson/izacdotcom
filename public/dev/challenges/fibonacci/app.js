const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

let max = params.max;
if (max > 35) {
  alert("That'll take a while. Try a smaller number.");
} else {
  let final = "";
  for (let i = 1; i <= max; i++) {
    final += `<li class="m-5 w-10">${fib(i)}</li>`;
  }

  function fib(n) {
    if (n <= 1) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
  }

  document.querySelector("#fibonacciList").innerHTML = final;
}
