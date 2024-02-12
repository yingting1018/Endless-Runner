'use strict';

let config = {
    type: Phaser.AUTO,
    height: 500,
    width: 800,
    render:
    {
        pixelArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        },
    },
    scene: [ Title, Kitty ]
 }

let game = new Phaser.Game(config)
let borderUIsize = game.config.height / 15
let borderPadding = borderUIsize / 3

let keyUP
let cursors