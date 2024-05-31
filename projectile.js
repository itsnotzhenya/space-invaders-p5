function Projectile(x, y) {
  this.x = x;
  this.y = y;
  this.r = 4;
  this.width = this.r * 2;
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
    let d = dist(this.x, this.y, alien.x, alien.y);
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
