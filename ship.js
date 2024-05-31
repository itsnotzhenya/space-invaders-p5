function Ship() {
  this.x = width / 2;
  this.y = height - 94;
  this.xdir = 0;
  this.height = 94;
  this.width = 60;

  this.show = function () {
    image(shipImage, this.x, this.y, this.width, this.height, 26, 6, 75, 117);
  };

  this.setDir = function (dir) {
    this.xdir = dir;
  };

  this.move = function () {
    const nextX = this.x + this.xdir * 5;
    if (nextX > 0 && nextX < width) {
      this.x = nextX;
    }
  };
}
