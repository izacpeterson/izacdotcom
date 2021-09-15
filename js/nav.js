/** @format */
$("#header").load("/html/header.html");
$("#nav").load("/html/nav.html");

$("nav").hover(
  () => {
    $("nav").css("max-width", "100vw");
  },
  () => {
    $("nav").css("max-width", "50px");
  }
);
