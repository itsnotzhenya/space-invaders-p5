let ship;
let aliens = [];
let projectiles = [];
let shipImage;
let projectileImage;

function setup() {
  createCanvas(600, 400);
  shipImage = loadImage('ship.png');
  projectileImage = loadImage('shot.png');
  ship = new Ship();
  for (let i = 0; i < 6; i++) {
    aliens[i] = new Alien(i * 80 + 80, 40);
  }
}

function draw() {
  background(51);
  imageMode(CENTER);
  ship.show();
  ship.move();

  // projectiles
  for (let i = 0; i < projectiles.length; i++) {
    projectiles[i].show();
    projectiles[i].move();
    for (let j = 0; j < aliens.length; j++) {
      if (projectiles[i].hits(aliens[j])) {
        aliens[j].disappear();
        projectiles[i].disappear();
      }
    }
  }
  // alien move
  let edge = false;

  for (let i = 0; i < aliens.length; i++) {
    aliens[i].show();
    aliens[i].move();

    // check if it edge
    if (aliens[i].x + aliens[i].r > width || aliens[i].x - aliens[i].r < 0) {
      edge = true;
    }
  }
  if (edge) {
    for (let i = 0; i < aliens.length; i++) {
      aliens[i].shiftDown();
    }
  }

  // delete projectile
  for (let i = 0; i < projectiles.length; i++) {
    if (projectiles[i].toDelete) {
      projectiles.splice(i, 1);
    }
  }

  // delete alien
  for (let i = 0; i < aliens.length; i++) {
    if (aliens[i].toDelete) {
      aliens.splice(i, 1);
    }
  }

  // win
  if (aliens.length === 0) {
    console.log('you win');
  }

  // lose
  const deadLine = ship.y - ship.height / 2;

  for (let i = 0; i < aliens.length; i++) {
    if (aliens[i].y + aliens[i].r >= deadLine) {
      console.log('loose');
    }
  }
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) ship.setDir(0);
}

function keyPressed() {
  if (keyCode === 32) {
    projectiles.push(new Projectile(ship.x, height - 40));
  }
  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}
