/* NAME: Yingting Huang
GAME TITLE: Catquette
HOURS: 30
CREATIVE TILT: I learned how to properly implement collision control with a spritesheet and creating 
               a border within my already premade background which are both things that I had to look 
               outside of class to learn. I'm proud that I was able to not only keep all my creations (bow,
                rock, and cat) inside the border but that they work properly as well. 
VISUAL STYLE: I wanted to implement some of my favorite things, cats, the color pink, and bows, and I think
              I was able to utilize these 3 things well throughout my game, and this was also my first time
              drawing artwork for such a large canvas so im proud of my different pixel arts throughout the game,
              specifically the bows and my cat sprite. Since the game is already pink and fantasy-like, I went with
              fairy sounds to make it seem more fictional and I liked the sounds I chose as well. 
*/
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
    scene: [ Title, Kitty, Credits ]
 }

let game = new Phaser.Game(config)
let borderUIsize = game.config.height / 15
let borderPadding = borderUIsize / 3

let keyUP, keyRESET, keyCREDITS
let cursors