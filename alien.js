function Alien(x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;
  this.isRemoved = false;

  this.dirX = 1;

  this.show = function () {
    noStroke();
    fill(255, 0, 200, 250);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  this.disappear = function () {
    this.isRemoved = true;
  }

  this.move = function () {
    this.x += this.dirX;
  }

  this.shiftDown = function () {
    this.dirX *= -1; 
    this.y += this.r;
  }

}