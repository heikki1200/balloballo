import Phaser from 'phaser'

export default class Fruit extends Phaser.Graphics {
  constructor ({game, x, y, size}) {
    super(game, x, y, size)
    const colors = ['ffffff', 'fff000', 'ff0000', 'ff00ff', '00ff00', '0000ff', '00ffff']
    const verticalSpeeds = [100, 80, 60, 40, 20]
    this.sizes = [20, 30, 40]
    this.color = colors[Math.floor(Math.random() * colors.length)]
    this.verticalSpeed = verticalSpeeds[Math.floor(Math.random() * verticalSpeeds.length)]
    this.size = this.sizes[Math.floor(Math.random() * this.sizes.length)]
    this.beginFill(`0x${this.color}`)
    this.drawCircle(0, 0, this.size)
    this.endFill()
    this.game.physics.p2.enable(this, true)
    this.body.setCircle(10)
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
