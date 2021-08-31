/** @format */
$("#header").load("./common/header.html");

getQuote();
async function getQuote() {
  var url = "https://api.quotable.io/random";
  let response = await fetch(url);
  jsonResponse = await response.json();
  console.log(jsonResponse);
  $(".quote").append("<i>" + jsonResponse.content + "</i>");
  $(".quote").append("<p><em> -" + jsonResponse.author + "</em>");
}

$("header").hover(
  function () {
    $("header").css("max-width", "500px");
    $("#Z").css("transform", "translate(25% , -100%)");
    $("#A").css("transform", "translate(50% , -200%)");
    $("#C").css("transform", "translate(75% , -300%)");
    $("#html").css("color", "rgb(48, 48, 48)");
  },
  function () {
    $("header").css("max-width", "50px");
    $("#Z").css("transform", "translate(0)");
    $("#A").css("transform", "translate(0)");
    $("#C").css("transform", "translate(0)");
    $("#html").css("color", "darkgrey");
  }
);
