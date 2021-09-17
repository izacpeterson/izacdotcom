/** @format */

getQuote();
async function getQuote() {
  var url = "https://api.quotable.io/random";
  let response = await fetch(url);
  jsonResponse = await response.json();
  console.log(jsonResponse);
  $(".quote").append("<span>" + jsonResponse.content + "</span>");
  $(".quote").append(
    "<div class='greenText'> -" + jsonResponse.author + "</div>"
  );
}
