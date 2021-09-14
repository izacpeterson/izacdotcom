/** @format */

$("nav").hover(
  () => {
    $("nav").css("max-width", "100vw");
  },
  () => {
    $("nav").css("max-width", "50px");
  }
);

// $("#navHome").on("click", changePage());
$(document).on("click", ".navLink", function () {
  switch (this.id) {
    case "navHome":
      changePage("../html/home.html");
      break;
    case "navProjects":
      changePage("../html/projects.html");

      break;
  }
});

function changePage(page) {
  $("#main").css("opacity", "0");
  setTimeout(() => {
    $("#main").load(page);
  }, 200);
  setTimeout(() => {
    $("#main").css("opacity", "1");
  }, 200);
}
