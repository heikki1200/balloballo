import Phaser from 'phaser'

export default class Preloader extends Phaser.State {
  preload () {
    // These are the assets we loaded in Boot.js
    // this.loader = this.add.sprite(this.world.centerX, this.world.centerY, 'loaderBar')
    // this.loader.anchor.setTo(0.5)

    // // Sets a basic loading bar
    // this.load.setPreloadSprite(this.loader)

    this.loadText = this.add.bitmapText(
      this.world.centerX,
      this.world.centerY,
      'carrier_command',
      'Loading',
      32
    )

    this.loadText.anchor.set(0.5)

    // Load any assets for the game here
    this.load.spritesheet('dude', 'assets/images/dude.png', 32, 32, 8)
    this.load.audio('death', 'assets/audios/fall_death.wav')
    this.load.audio('collect', 'assets/audios/sfx_collect.wav')
    this.load.audio('music', ['assets/audios/balloballo-loop-lofi.mp3', 'assets/audios/balloballo-loop-lofi.ogg'
    ])
  }

  create () {
    this.state.start('Menu')
  }
}
