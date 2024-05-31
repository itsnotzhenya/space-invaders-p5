function Alien(x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;

  this.toDelete = false;

  this.xdir = 1;

  this.boom = function () {
    this.r += 2;
  };

  this.disappear = function () {
    this.toDelete = true;
  };

  this.move = function () {
    this.x += this.xdir;
  };

  this.shiftDown = function () {
    this.xdir *= -1;
    this.y += this.r;
  };

  this.show = function () {
    noStroke();
    fill(255, 0, 200, 150);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };
}
