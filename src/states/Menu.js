import Phaser from 'phaser'

export default class Menu extends Phaser.State {
  create () {
    this.menu = {
      heading: {
        content: 'BALLO BALLO',
        style: {
          font: 'bold 32px Arial',
          fill: '#fff'
        }
      },
      buttonPlay: {
        content: 'PLAY GAME',
        style: {
          backgroundColor: '#00ff00',
          font: 'bold 22px Arial',
          fill: '#fff'
        }
      },
      buttonInstructions: {
        content: 'Instructions',
        style: {
          backgroundColor: '#ff0000',
          font: 'bold 22px Arial',
          fill: '#fff',
          width: '100%'
        }
      }
    }

    this.menuHeading = this.add.bitmapText(
      this.world.centerX,
      -100,
      'carrier_command',
      this.menu.heading.content,
      28
    )
    this.menuHeading.anchor.set(0.5)

    this.dude = this.game.add.sprite(
      this.world.centerX,
      -100,
      'dude-menu'
    )
    this.dude.anchor.set(0.5)
    this.dude.scale.setTo(2, 2)

    this.menuButtonPlay = this.add.text(
      this.world.centerX,
      -150,
      this.menu.buttonPlay.content,
      this.menu.buttonPlay.style
    )
    this.menuButtonPlay.anchor.set(0.5)
    this.menuButtonPlay.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 2)
    this.menuButtonPlay.inputEnabled = true
    this.menuButtonPlay.events.onInputDown.add(this.play, this)

    this.menuButtonInstructions = this.add.text(
      this.world.centerX,
      this.world.height + 50,
      this.menu.buttonInstructions.content,
      this.menu.buttonInstructions.style
    )
    this.menuButtonInstructions.anchor.set(0.5)
    this.menuButtonInstructions.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 2)
    this.menuButtonInstructions.inputEnabled = true
    this.menuButtonInstructions.events.onInputDown.add(this.instructions, this)

    this.add.tween(this.dude).to({y: this.world.centerY}, 2000, Phaser.Easing.Bounce.Out, true)
    this.add.tween(this.menuHeading).to({y: this.world.centerY + 50}, 2000, Phaser.Easing.Bounce.Out, true, 1000)
    this.add.tween(this.menuButtonPlay).to({y: this.world.centerY + 100}, 2000, Phaser.Easing.Bounce.Out, true, 2000)
    this.add.tween(this.menuButtonInstructions).to({y: this.world.centerY + 150}, 500, null, true, 4000)
  }

  play () {
    this.add.tween(this.menuHeading).to({y: this.game.height * 2}, 1000, null, true)
    this.add.tween(this.menuButtonPlay).to({y: this.game.height * 2}, 1000, null, true)
    this.add.tween(this.dude).to({y: this.game.height * 2}, 1000, null, true)
    this.add.tween(this.menuButtonInstructions).to({y: this.game.height * 2}, 1000, null, true)
    setTimeout(function () {
      this.game.state.start('Play', true, false)
    }, 1500)
  }

  instructions () {
    this.game.state.start('Instructions')
  }
}
