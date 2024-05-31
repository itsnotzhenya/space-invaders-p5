function Projectile(x, y) {
  this.r = 4;
  this.x = x;
  this.width = 8;
  this.y = y
  this.height = 52;
  this.toDelete = false;

  this.show = function () {
    image(
      projectileImage,
      this.x,
      this.y,
      this.width,
      this.height,
      57,
      52,
      9,
      58
    );
  };

  this.disappear = function () {
    this.toDelete = true;
  };

  this.hits = function (alien) {
    const projectileY = this.y - this.height / 2 + this.r;
    let d = dist(this.x, projectileY, alien.x, alien.y);
    if (d < this.r + alien.r) {
      return true;
    } else {
      return false;
    }
  };

  this.move = function () {
    this.y -= 5;
  };
}
