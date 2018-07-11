import Phaser from 'phaser'

export default class Enemy extends Phaser.Graphics {
  constructor ({game, x, y}) {
    super(game, x, y)
    this.colors = ['ffffff', 'fff000', 'ff0000', 'ff00ff', '00ff00', '0000ff', '00ffff']
    this.verticalSpeeds = [100, 80, 60, 40, 20]
    this.sizes = [20, 30, 40, 50, 60]
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)]
    this.verticalSpeed = this.verticalSpeeds[Math.floor(Math.random() * this.verticalSpeeds.length)]
    this.size = this.sizes[Math.floor(Math.random() * this.sizes.length)]
    this.beginFill(`0x${this.color}`)
    this.drawRect(-this.size / 2, -this.size / 2, this.size, this.size)
    this.endFill()
    this.game.physics.p2.enable(this, false)
    this.body.setRectangle(30, 30)
  }

  update () {
    this.body.velocity.x = this.getHorizontalSpeeds()
    this.body.velocity.y = this.verticalSpeed
    if (this.y > 380) this.destroy()
  }

  getHorizontalSpeeds () {
    const horizontalSpeeds = [-50, -40, -30, -20, -10, 10, 20, 30, 40, 50]
    let horizontalSpeed = horizontalSpeeds[Math.floor(Math.random() * horizontalSpeeds.length)]
    return horizontalSpeed
  }
}
