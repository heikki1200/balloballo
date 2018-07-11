import Phaser from 'phaser'

export default class Instructions extends Phaser.State {
  create () {
    this.instructions = {
      content: 'MOVEMENT\n\nMobile:\nMove player by touching the screen\n\nDesktop/LaptopComputer:\nMove player by pressing cursor\n\nMECHANICS\n\nGet points by collecting BALLS, watch out for the SQUARES',
      close: 'Close',
      contentStyle: {
        font: 'bold 16px Arial',
        fill: '#fff',
        wordWrap: true,
        wordWrapWidth: this.world.width - 20
      },
      closeStyle: {
        backgroundColor: '#ff0000',
        font: 'bold 22px Arial',
        fill: '#fff'
      }
    }

    this.instructionsText = this.add.text(
      this.world.centerX,
      this.world.centerY,
      this.instructions.content,
      this.instructions.contentStyle
    )
    this.instructionsText.anchor.set(0.5)

    this.instructionsButtonClose = this.add.text(
      this.world.centerX,
      this.world.height - 25,
      this.instructions.close,
      this.instructions.closeStyle
    )
    this.instructionsButtonClose.anchor.set(0.5)
    this.instructionsButtonClose.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 2)
    this.instructionsButtonClose.inputEnabled = true
    this.instructionsButtonClose.events.onInputDown.add(this.close, this)
  }

  close () {
    this.state.start('Menu')
  }
}
