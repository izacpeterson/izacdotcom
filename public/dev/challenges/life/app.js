class Cell {
  constructor(x, y, index) {
    this.x = x;
    this.y = y;
    this.index = index;
    this.isAlive = Math.random() > 0.5 ? false : true;
    this.nextLife = false;
  }
  checkAlive() {
    let liveNeighbours = 0;

    if (grid[this.index + 1]) {
      if (grid[this.index + 1].isAlive) liveNeighbours++;
    }
    if (grid[this.index - 1]) {
      if (grid[this.index - 1].isAlive) liveNeighbours++;
    }
    if (grid[this.index + width]) {
      if (grid[this.index + width].isAlive) liveNeighbours++;
    }
    if (grid[this.index - width]) {
      if (grid[this.index - width].isAlive) liveNeighbours++;
    }
    if (grid[this.index + width + 1]) {
      if (grid[this.index + width + 1].isAlive) liveNeighbours++;
    }
    if (grid[this.index + width - 1]) {
      if (grid[this.index + width - 1].isAlive) liveNeighbours++;
    }
    if (grid[this.index - width + 1]) {
      if (grid[this.index - width + 1].isAlive) liveNeighbours++;
    }
    if (grid[this.index - width - 1]) {
      if (grid[this.index - width - 1].isAlive) liveNeighbours++;
    }

    if (liveNeighbours == 2) {
      this.nextLife = this.isAlive;
    } else if (liveNeighbours == 3) {
      this.nextLife = true;
    } else {
      this.nextLife = false;
    }
  }
  draw() {
    if (this.isAlive) {
      ctx.fillStyle = "#DDDDDD";
      ctx.fillRect(
        this.x * cellWidth,
        this.y * cellHeight,
        cellWidth,
        cellHeight
      );
    }
  }
  updateLife() {
    this.isAlive = this.nextLife;
  }
}

const height = window.innerWidth/15;
const width = 50;
let cellWidth = 10;
let cellHeight = 10;

let grid = [];

let index = 0;
for (let x = 0; x < height; x++) {
  for (let y = 0; y < width; y++) {
    grid.push(new Cell(x, y, index));
    index++;
  }
}

let c = document.getElementById("canvas");
c.width = height * cellHeight;
c.height = width * cellWidth;
let ctx = c.getContext("2d");
// ctx.moveTo(0, 0);
// ctx.lineTo(width, height);
// ctx.stroke();

let scale = 2;

grid.forEach((cell) => {
  cell.draw();
});

let generations = 0;
document.getElementById("go").addEventListener("click", () => {
  setInterval(() => {
    generations++;
    ctx.clearRect(0, 0, height * cellHeight, width * cellWidth);
    grid.forEach((cell) => {
      cell.checkAlive();
    });
    grid.forEach((cell) => {
      cell.updateLife();
      cell.draw();
    });
  }, 100);
});

document.getElementById("reset").addEventListener("click", () => {
  grid.forEach((cell) => {
    cell.isAlive = Math.random() > 0.5 ? false : true;
  });
});
