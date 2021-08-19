function search() {
  if (document.getElementById("selectSearch").value == "Google") {
    var q = document.getElementById("searchText").value;
    window.open("https://www.google.com/search?q=" + q, "_blank");
  } else if (document.getElementById("selectSearch").value == "Bing") {
    var q = document.getElementById("searchText").value;
    window.open("https://www.bing.com/search?q=" + q, "_blank");
  }
}
document.body.requestFullscreen();
