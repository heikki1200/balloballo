import 'pixi'
import 'p2'
import Phaser from 'phaser'

import Config from './config'

import Boot from './states/Boot'
import Preloader from './states/Preloader'
import Menu from './states/Menu'
import Instructions from './states/Instructions'
import Play from './states/Play'
import GameOver from './states/GameOver'

class Game extends Phaser.Game {
  constructor () {
    super(Config.worldWidth, Config.worldHeight, Phaser.AUTO, 'game')

    this.state.add('Boot', Boot)
    this.state.add('Preloader', Preloader)
    this.state.add('Menu', Menu)
    this.state.add('Instructions', Instructions)
    this.state.add('Play', Play)
    this.state.add('GameOver', GameOver)

    this.state.start('Boot')
  }
}

window.game = new Game()
