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
    $("#sideNav").css("max-width", "50vw");
    $("#sideNav").css("width", "50vw");
    $("#sideNav").css("box-shadow", "0 50px 50px #111");
    navOpen = true;
  } else if (navOpen) {
    $("#sideNav").css("left", "-60px");
    $("#sideNav").css("max-width", "60px");
    $("#sideNav").css("width", "60px");
    $("#sideNav").css("box-shadow", "0 0 5px #111");

    navOpen = false;
  }
});
