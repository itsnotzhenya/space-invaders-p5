function Projectile(x, y) {
  this.x = x;
  this.y = y;
  this.height = 11;
  this.width = 8;
  this.r = 4;
  this.isRemoved = false;

  this.show = function () {
    image(projectileImg, this.x, this.y, this.width, this.height, 2, 1, 5, 7);
  }

  this.hits = function (alien) {
    const d = dist(this.x, this.y, alien.x, alien.y);
    const hit = d < this.r + alien.r;
    return hit;
  }

  this.move = function () {
    this.y -= 5;
  }

  this.disappear = function () {
    this.isRemoved = true;
  }

}