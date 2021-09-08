/** @format */
setInterval(changeColor, 100);

function changeColor() {
  let color = { r: $("#red").val(), g: $("#green").val(), b: $("#blue").val() };
  $("body")
    .get(0)
    .style.setProperty("--fore_color", `rgb(${color.r},${color.g},${color.b})`);
  $("#colorBox").css(
    "background-color",
    `rgb(${color.r},${color.g},${color.b})`
  );
}

function darkMode() {
  if (!$("#darkCheck").is(":checked")) {
    document.documentElement.style.setProperty("--back_color", "white");
    document.documentElement.style.setProperty("--text_color", "black");
    document.documentElement.style.setProperty(
      "--back_secondary_color",
      "#DDD"
    );
  } else {
    document.documentElement.style.setProperty("--back_color", "#222");
    document.documentElement.style.setProperty("--text_color", "white");
    document.documentElement.style.setProperty(
      "--back_secondary_color",
      "#202020"
    );
  }
}
