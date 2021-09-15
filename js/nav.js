/** @format */
$("#header").load("/html/header.html");
$("#sideNav").load("/html/nav.html");

$("#sideNav").hover(
  () => {
    $("#sideNav").css("max-width", "100vw");
  },
  () => {
    $("#sideNav").css("max-width", "50px");
  }
);

let navOpen = false;
$("#mobileHeader").on("click", () => {
  if (!navOpen) {
    $("#sideNav").css("left", "0");
    $("#sideNav").css("max-width", "100vw");
    $("#sideNav").css("width", "100vw");
    navOpen = true;
  } else if (navOpen) {
    $("#sideNav").css("left", "-60px");
    $("#sideNav").css("max-width", "60px");
    $("#sideNav").css("width", "60px");

    navOpen = false;
  }
});
