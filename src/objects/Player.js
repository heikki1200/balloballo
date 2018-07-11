import Phaser from 'phaser'

export default class Player extends Phaser.Sprite {
  constructor ({game, x, y, asset}) {
    super(game, x, y, asset)
    this.RIGHT = 0
    this.LEFT = 1
    this.MOVESPEED = 150
    this.addPhysics()
    this.addAnimations()
    this.addKeyboard()
  }

  addPhysics () {
    this.anchor.setTo(0.5)
    this.game.physics.p2.enable(this, false)
    this.body.setRectangle(28, 32)
    this.body.collideWorldBounds = true
  }

  addAnimations () {
    this.animations.add('right', [0, 1, 2, 3], 10, true)
    this.animations.add('left', [4, 5, 6, 7], 10, true)
  }

  addKeyboard () {
    this.cursors = this.game.input.keyboard.createCursorKeys()
  }

  moveLeft () {
    this.body.velocity.x = -this.MOVESPEED
    this.body.angle -= 5
    this.animations.play('left')
  }

  moveRight () {
    this.body.velocity.x = this.MOVESPEED
    this.body.angle += 5
    this.animations.play('right')
  }

  stop () {
    this.body.velocity.x = 0
    this.animations.stop()
  }

  update () {
    this.body.velocity.x = 0
    // Keyboard controls
    if (this.cursors.left.isDown) {
      this.moveLeft()
    } else if (this.cursors.right.isDown) {
      this.moveRight()
    } else {
      this.animations.stop()
    }
    // Touch controls controls
    if (this.game.input.activePointer.isDown) {
      if (Math.floor(this.game.input.x / (this.game.width / 2)) === this.LEFT) {
        this.moveRight()
      } else if (Math.floor(this.game.input.x / (this.game.width / 2)) === this.RIGHT) {
        this.moveLeft()
      }
    } else {
      this.animations.stop()
    }
  }
}
