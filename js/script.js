/** @format */
$("#header").load("./common/header.html");
$("#modalBox").load("./common/modal.html");

getQuote();
async function getQuote() {
  var url = "https://api.quotable.io/random";
  let response = await fetch(url);
  jsonResponse = await response.json();
  console.log(jsonResponse);
  $(".quote").append("<i>" + jsonResponse.content + "</i>");
  $(".quote").append("<p><em> -" + jsonResponse.author + "</em>");
}

// $("header").hover(
//   function () {
//     // $("header").css("max-width", "1000px");
//     $("#Z").css("transform", "translate(25% , -100%)");
//     $("#A").css("transform", "translate(50% , -200%)");
//     $("#C").css("transform", "translate(75% , -300%)");
//     $("#html").css("color", "rgb(48, 48, 48)");
//   },
//   function () {
//     // $("header").css("max-width", "50px");
//     $("#Z").css("transform", "translate(0)");
//     $("#A").css("transform", "translate(0)");
//     $("#C").css("transform", "translate(0)");
//     $("#html").css("color", "darkgrey");
//   }
// );
let mobileNavStatus = false;

function toggleMobileNav() {
  if (!mobileNavStatus) {
    $("#header").css("left", "0px");
    $("#header").css("max-width", "100vw");

    mobileNavStatus = true;
  } else {
    $("#header").css("left", "-50px");
    $("#header").css("max-width", "50px");
    mobileNavStatus = false;
  }
}

let modalStatus = false;
function toggleModal() {
  if (!modalStatus) {
    $(".pagemask").css("visibility", "visible");
    modalStatus = true;
    setTimeout(() => {
      $(".pagemask").css("opacity", "1");
    }, 100);
  } else {
    modalStatus = false;
    $(".pagemask").css("visibility", "hidden");
    setTimeout(() => {
      $(".pagemask").css("opacity", "0");
    }, 100);
  }
}
