let ufoImage;
let shipImage;
let ship;
let ufos = [];
let bullets = [];
let stars = [];

let maxHeight = 4000;

let score = 0;

function preload() {
  shipImage = loadImage("images/ship.png");
  ufoImage = loadImage("images/ufo.png");
}

function setup() {
  createCanvas(windowWidth, 4000);
  noSmooth();
  ship = new Ship(windowWidth / 2, 900, shipImage);

  for (let i = 0; i < 5; i++) {
    ufos.push(new UFO(ufoImage));
  }

  for (let i = 0; i < 1000; i++) {
    stars.push(new Star(random(windowWidth), random(maxHeight), random(0.1, 2)));
  }
}

class Ship {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;
  }

  display() {
    let angle = atan2(mouseY - this.y, mouseX - this.x) + PI / 2;

    push();
    translate(this.x, this.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.img, 0, 0, 50, 50);
    pop();
  }

  update() {
    if (windowWidth < 500) return;
    this.x = lerp(this.x, mouseX, 0.05);
    this.y = lerp(this.y, mouseY, 0.05);

    // console.log(this.x, this.y);
  }

  getDirection() {
    return atan2(mouseY - this.y, mouseX - this.x);
  }

  shoot() {}
}

class UFO {
  constructor(img) {
    this.x = random(windowWidth);
    this.y = -100;
    this.img = img;
    this.targetX = ship.x;
    this.targetY = ship.y;
    this.movementSpeed = 0.002;
  }

  display() {
    push();
    imageMode(CENTER);
    image(this.img, this.x, this.y, 50, 50);
    pop();
  }

  update() {
    this.x = lerp(this.x, this.targetX, this.movementSpeed);
    this.y = lerp(this.y, this.targetY, this.movementSpeed);

    if (random(1) < 0.01) {
      this.targetX = ship.x + random(1000) - 500;
      this.targetY = ship.y + random(1000) - 500;
    }
  }
}

class Bullet {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.speed = 30;
  }
  update() {
    this.x += cos(this.direction) * this.speed;
    this.y += sin(this.direction) * this.speed;
  }
  draw() {
    push();

    stroke("#FF0000");
    strokeWeight(5);

    line(this.x, this.y, this.x + cos(this.direction) * 50, this.y + sin(this.direction) * 50);

    pop();
  }
}

class Star {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  display() {
    this.y += this.size;
    if (this.y > maxHeight) this.y = 0;
    push();
    stroke(255);
    strokeWeight(this.size);
    point(this.x, this.y);
    pop();
  }
}

function draw() {
  frameRate(60);
  //   background("#181825");
  clear();
  background(255, 0);

  ship.update();
  ship.display();

  for (let ufo of ufos) {
    ufo.display();
    ufo.update();
  }

  for (let bullet of bullets) {
    bullet.update();
    bullet.draw();
  }

  let toRemove = { ufos: [], bullets: [] };
  let newUfoCount = 0;
  for (let i = ufos.length - 1; i >= 0; i--) {
    for (let j = bullets.length - 1; j >= 0; j--) {
      if (dist(ufos[i].x, ufos[i].y, bullets[j].x, bullets[j].y) < 50) {
        toRemove.ufos.push(i);
        toRemove.bullets.push(j);
        score++;
        console.log(score);
        document.getElementById("score").innerHTML = `Score: ${score}`;
        newUfoCount++;
      }
    }
  }

  toRemove.ufos.forEach((i) => ufos.splice(i, 1));
  toRemove.bullets.forEach((i) => bullets.splice(i, 1));

  for (let i = 0; i < newUfoCount; i++) {
    ufos.push(new UFO(ufoImage));
    if (Math.random() < 0.1) ufos.push(new UFO(ufoImage));
  }

  //   if (mousePressed) {
  //     bullets.push(new Bullet(ship.x, ship.y, ship.getDirection()));
  //   }

  for (let i = bullets.length - 1; i >= 0; i--) {
    if (bullets[i].x < 0 || bullets[i].x > windowWidth || bullets[i].y < 0 || bullets[i].y > maxHeight) {
      bullets.splice(i, 1);
    }
  }

  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
    star.display();
  }
}

function mousePressed() {
  bullets.push(new Bullet(ship.x, ship.y, ship.getDirection()));
}
