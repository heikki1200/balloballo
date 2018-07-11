import Phaser from 'phaser'

export default class Audio extends Phaser.Sound {
  constructor ({game, key, volume, loop}) {
    super(game, key, volume, loop)
  }
}
