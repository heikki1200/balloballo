import Phaser from 'phaser'

export default class Text extends Phaser.Text {
  constructor ({game, x, y, text, style}) {
    super(game, x, y, text, style)
  }
}
