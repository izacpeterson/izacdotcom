/** @format */
let width = window.innerWidth;
let height = window.innerHeight;

window.requestAnimationFrame(draw);
var c = document.getElementById("canvas");
c.setAttribute("width", width);
c.setAttribute("height", height);
var ctx = c.getContext("2d");
ctx.save();

let speed = 2;
let points = [];
for (let i = 0; i < 30; i++) {
  let point = {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
    xdir: Math.random() * speed - speed / 2,
    ydir: Math.random() * speed - speed / 2,
  };
  points.push(point);
}

setInterval(move, 16);
function move() {
  for (let i = 0; i < points.length - 1; i++) {
    points[i].x += points[i].xdir;
    points[i].y += points[i].ydir;

    if (points[i].x > width || points[i].x < 0) {
      points[i].xdir *= -1;
    }
    if (points[i].y > height || points[i].y < 0) {
      points[i].ydir *= -1;
    }
    ctx.clearRect(0, 0, width, height);

    draw();
  }
}

function draw() {
  for (let i = 0; i < points.length - 1; i++) {
    for (let j = 0; j < points.length - 1; j++) {
      if (isCloser(points[i], points[j])) {
        ctx.strokeStyle = `#404040`;
        ctx.lineWidth = 0.5;

        ctx.fillStyle = "#505050";

        ctx.beginPath();

        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[j].x, points[j].y);
        ctx.closePath();
        ctx.stroke();
        ctx.arc(points[i].x, points[i].y, 5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
}
function isClose(pointA, pointB) {
  var dist = Math.sqrt(
    Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2)
  );
  if (dist < 200) {
    return true;
  } else {
    return false;
  }
}
function isCloser(pointA, pointB) {
  let max = 300;

  if (
    pointA.x + max < pointB.x ||
    pointA.x - max > pointB.x ||
    pointA.y + max < pointB.y ||
    pointA.y - max > pointB.y
  ) {
    return false;
  } else {
    return true;
  }
}
function isCloserer(a, b) {
  return true;
}
