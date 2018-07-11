import Phaser from 'phaser'
import Player from '../objects/Player.js'
import Fruit from '../objects/Fruit.js'
import Enemy from '../objects/Enemy.js'
import Text from '../objects/Text.js'
import Audio from '../objects/Audio.js'

export default class Play extends Phaser.State {
  init () {
    this.score = 0
    this.mute = false
  }

  create () {
    this.addLoops()
    this.addPlayer()
    this.addAudios()
    this.addMuteButton()
    this.addTexts()
  }

  addLoops () {
    this.game.time.events.loop(Phaser.Timer.SECOND, this.addFruit, this)
    this.game.time.events.loop(Phaser.Timer.SECOND * 1.75, this.addEnemy, this)
  }

  addAudios () {
    this.deathAudio = new Audio({
      game: this.game,
      key: 'death',
      volume: 1.5,
      loop: false
    })
    this.collectAudio = new Audio({
      game: this.game,
      key: 'collect',
      volume: 0.6,
      loop: false
    })
    this.musicAudio = new Audio({
      game: this.game,
      key: 'music',
      volume: 0.5,
      loop: true
    })
    this.game.add.audio(this.deathAudio)
    this.game.add.audio(this.collectAudio)
    this.game.add.audio(this.musicAudio)
  }

  addMuteButton () {
    this.muteText = new Text({
      game: this.game,
      x: this.world.width - 50,
      y: 50,
      text: 'Mute',
      style: {
        backgroundColor: '#ff0000',
        font: 'bold 18px Arial',
        fill: '#fff'
      }
    })

    this.muteMusic()

    this.game.add.existing(this.muteText)
    this.muteText.anchor.set(0.5)
    this.muteText.inputEnabled = true
    this.muteText.events.onInputDown.add(this.muteMusic, this)
  }

  muteMusic () {
    if (this.mute === true) {
      this.mute = false
      this.musicAudio.pause()
      this.muteText.text = 'Play'
    } else {
      this.mute = true
      this.musicAudio.play()
      this.muteText.text = 'Mute'
    }
  }

  addPlayer () {
    this.player = new Player({
      game: this.game,
      x: 10,
      y: 368,
      asset: 'dude'
    })
    this.game.add.existing(this.player)
  }

  addFruit () {
    this.fruit = new Fruit({
      game: this.game,
      x: Math.floor((Math.random() * 360) + 10),
      y: -50
    })
    this.game.add.existing(this.fruit)
    this.fruit.body.createBodyCallback(this.player, this.addPoints, this)
  }

  addEnemy () {
    this.enemy = new Enemy({
      game: this.game,
      x: Math.floor((Math.random() * 360) + 10),
      y: -50
    })
    this.game.add.existing(this.enemy)
    this.enemy.body.createBodyCallback(this.player, this.endGame, this)
  }

  addTexts () {
    this.scoreText = new Text({
      game: this.game,
      x: 100,
      y: 50,
      text: 'Score: 0',
      style: {
        backgroundColor: '#ff0000',
        font: 'bold 22px Arial',
        fill: '#fff'
      }
    })

    this.game.add.existing(this.scoreText)
    this.scoreText.anchor.set(0.5)
  }

  addPoints (item, player) {
    item.sprite.destroy()
    this.score += 10
    this.scoreText.text = 'Score: ' + this.score
    this.collectAudio.play()
  }

  endGame () {
    this.finalScore = this.score
    this.musicAudio.stop()
    this.deathAudio.play()
    this.state.start('GameOver', true, false, this.finalScore)
  }

  update () {
    this.game.world.bringToTop(this.scoreText)
    this.game.world.bringToTop(this.muteText)
  }
}
