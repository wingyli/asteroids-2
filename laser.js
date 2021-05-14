// laser.js file

class Laser {
  constructor(laserX, laserY, laserDX, laserDY) {
    this.x = laserX
    this.y = laserY
    this.dx = laserDX
    this.dy = laserDY
  }
  step() {
    this.x += this.dx
    this.y += this.dy
  }
  draw() {
    ctx.fillStyle = 'red'
    ctx.beginPath()
    ctx.arc(this.x, this.y, 3, 0, 2 * Math.PI)
    ctx.fill()
  }
}