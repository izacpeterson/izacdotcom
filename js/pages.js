/** @format */
const urlParams = new URLSearchParams(window.location.search);
const page = urlParams.get("page");

$("#header").load("../html/header.html");
$("#nav").load("../html/nav.html");
// $("#main").load("../html/home.html");
$("#main").load("../html/projects.html");
