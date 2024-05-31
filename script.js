let ship
let aliens = [];
let projectiles = [];
let shipImg;
function setup() {
  createCanvas(600, 400);
  shipImg = loadImage('ship.png');
  projectileImg = loadImage('bullet.png');
  ship = new Ship();
  for (let i = 0; i < 6; i++) {
    aliens.push(new Alien(i * 80 + 90, 60));
  }
}

function draw() {
  background(51);
  ship.show();
  ship.move();
  imageMode(CENTER)
  // Aliens
  let edge = false;
  for (let i = 0; i < aliens.length; i++) {
    aliens[i].show();
    aliens[i].move();
    if ((aliens[i].x + aliens[i].r) > width || (aliens[i].x - aliens[i].r) < 0) {
      edge = true;
    }
  }

  if (edge) {
    for (let i = 0; i < aliens.length; i++) {
      aliens[i].shiftDown();
    }
  }

  // Projectiles
  for (let i = 0; i < projectiles.length; i++) {
    projectiles[i].show();
    projectiles[i].move()
    for (let j = 0; j < aliens.length; j++) {
      if (projectiles[i].hits(aliens[j])) {
        aliens[j].disappear();
        projectiles[i].disappear();
      }
    }
  }

  // Remove projectiles 
  for (let i = 0; i < projectiles.length; i++) {
    if (projectiles[i].isRemoved) {
      projectiles.splice(i, 1);
    }
  }

  for (let i = 0; i < aliens.length; i++) {
    if (aliens[i].isRemoved) {
      aliens.splice(i, 1);
    }
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  } else if (key === ' ') {
    projectiles.push(new Projectile(ship.x, height - 20));
  }
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
    ship.setDir(0);
  }
}