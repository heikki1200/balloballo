import Phaser from 'phaser'

export default class GameOver extends Phaser.State {
  init (finalScore) {
    this.finalScore = finalScore
  }
  create () {
    this.gameOverHeading = this.add.text(
      this.world.centerX,
      this.world.centerY,
      'Game Over!\nYour score:\n' + this.finalScore,
      {
        font: 'bold 32px Arial',
        fill: '#fff',
        boundsAlignH: 'center',
        boundsAlignV: 'middle'
      }
    )
    this.playAgainButton = this.add.text(
      this.world.centerX,
      this.world.centerY + 100,
      'Play again',
      {
        backgroundColor: '#ff0000',
        font: 'bold 22px Arial',
        fill: '#fff'
      }
    )
    this.playAgainButton.anchor.set(0.5)
    this.gameOverHeading.anchor.set(0.5)
    this.playAgainButton.inputEnabled = true
    this.playAgainButton.events.onInputDown.add(this.playAgain, this)
  }

  playAgain () {
    this.state.start('Play', true, false, this.mute)
  }
}
