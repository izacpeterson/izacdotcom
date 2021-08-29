/** @format */

async function getQuote() {
  var url = "https://api.quotable.io/random";
  let response = await fetch(url);
  jsonResponse = await response.json();
  console.log(jsonResponse);
  $(".quote").append("<i>" + jsonResponse.content + "</i>");
  $(".quote").append("<p><em> -" + jsonResponse.author + "</em>");
}

getQuote();

$("header").hover(
  function () {
    $("#home").append("<span id='homeText'> Home</span>");
    $("#projects").append("<span id='projectText'> Projects</span>");
    $("#about").append("<span id='aboutText'> About</span>");
    $("#contact").append("<span id='contactText'> Contact</span>");
  },
  function () {
    $("#homeText").remove();
    $("#projectText").remove();
    $("#aboutText").remove();
    $("#contactText").remove();
  }
);
