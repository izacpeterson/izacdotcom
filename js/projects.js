/** @format */
function addProject(name, img) {
  $(".projectList").append(` 
<div class="card">
    <img src=${img} alt="" />
    <h2>${name}</h2>
</div>
  `);
  console.log("added");
}
addProject("Homepage", ".");
