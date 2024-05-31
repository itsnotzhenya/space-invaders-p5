function Ship () {
  this.x = width / 2;
  this.width = 60;
  this.height = 80;
  this.xDir = 0;

  this.show = function () {
    image(shipImg, this.x, height - this.height, this.width, this.height, 28, 17, 72, 97);
  }

  this.setDir = function (dir) {
    this.xDir = dir;
  }
   
  this.move = function () { 
    const nextX = this.x + (10 * this.xDir);
    if (nextX > 0 && nextX < width) {
      this.x = nextX;
    }
  }
}