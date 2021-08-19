async function getQuote() {
  var url = "https://api.quotable.io/random";
  let response = await fetch(url);
  jsonResponse = await response.json();
  console.log(jsonResponse);
  $(".quote").append("<i>" + jsonResponse.content + "</i>");
  $(".quote").append("<p><em> -" + jsonResponse.author + "</em>");
}

getQuote();
