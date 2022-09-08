let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let characterArray = [];

ctx.font = "20px arial";

for (let i = 0; i < 500; i++) {
  characterArray.push({
    char: "",
    x: Math.floor(Math.random() * window.innerWidth),
    y: Math.floor(Math.random() * window.innerHeight),
    speed: Math.random(),
  });
}

console.log(characterArray);
draw();

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  characterArray.forEach((character) => {
    ctx.fillStyle = `rgba(0,255,0,${character.speed})`;
    ctx.fillText(character.char, character.x, character.y);
  });
}

function update() {
  characterArray.forEach((character, index) => {
    characterArray[index].y += characterArray[index].speed * 20;
    characterArray[index].char = String.fromCharCode(Math.floor(Math.random() * 8959));
    if (characterArray[index].y >= window.innerHeight) {
      characterArray[index].y = 0;
    }
  });
  draw();
}

setInterval(update, 100);
