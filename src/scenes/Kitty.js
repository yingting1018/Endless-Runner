class Kitty extends Phaser.Scene {
    constructor() {
        super("kittyScene")
    }

    init(){
       this.PLAYER_VELOCITY = 350
    }
    preload() {
        this.load.spritesheet('kittysheet', './assets/img/kittysheet.png', 
        {
        frameWidth: 30,
        frameHeight: 30
        });
    }

    create() {
      this.cameras.main.setBackgroundColor(0xADD8E6)
        // create anims
      //  this.kitty = new Kitty(this, game.config.width/2, game.config.height - borderUIsize - borderPadding, 'walk', 0, 10).setOrigin(0, 0);
        // this.kitty = this.add.sprite(300,300, 'kittysheet').setOrigin(0).setScale(7,5)
        this.add.rectangle(0, 0, game.config.width, borderUIsize / 2, 0xF4CCCC).setOrigin(0, 0)
        this.add.rectangle(0, game.config.height - borderUIsize / 2, game.config.width, borderUIsize, 0xF4CCCC).setOrigin(0, 0)
        this.add.rectangle(0, 0, borderUIsize / 2, game.config.height, 0xF4CCCC).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUIsize / 2, 0, borderUIsize, game.config.height, 0xF4CCCC).setOrigin(0, 0)
        
        this.cameras.main.setBackgroundColor(0xDDDDDD)
        // create anims
        this.anims.create({
          key: 'idle-down', 
          frameRate: 0,
          repeat: -1,
          frames: this.anims.generateFrameNumbers('kittysheet', {
          start: 1,
          end: 1
            })
          })
      
              this.anims.create({
                  key: 'walk-down', 
                  frameRate: 5,
                  repeat: -1,
                  frames: this.anims.generateFrameNumbers('kittysheet', {
                      start: 2,
                      end: 0
                  })
              })
              this.anims.create({
                key: 'walk-up', 
                frameRate: 5,
                repeat: -1,
                frames: this.anims.generateFrameNumbers('kittysheet', {
                    start: 2,
                    end: 0
                })
            })
            this.anims.create({
              key: 'walk-left', 
              frameRate: 5,
              repeat: -1,
              frames: this.anims.generateFrameNumbers('kittysheet', {
                  start: 2,
                  end: 0
              })
            })
            this.anims.create({
              key: 'walk-right', 
              frameRate: 5,
              repeat: -1,
              frames: this.anims.generateFrameNumbers('kittysheet', {
                  start: 2,
                  end: 0
              })
            })
      
              this.player = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'kittysheet', 1).setScale(2)
              this.player.body.setCollideWorldBounds(true)
      
              this.player.body.setSize(30, 30).setOffset(8, 16)
              cursors = this.input.keyboard.createCursorKeys()
          }
      
          update() {
              let playerVector = new Phaser.Math.Vector2(0, 0)
              let playerDirection = 'Down'
              // handle left/right
              if(cursors.left.isDown){
                  playerVector.x = -1
                  playerDirection = 'left'
              } else if (cursors.right.isDown) {
                  playerVector.x = 1
                  playerDirection = 'right'
              }
              // handle up down
              if(cursors.up.isDown){
                  playerVector.y = -1
                  playerDirection = 'up'
              }else if (cursors.down.isDown) {
                  playerVector.y = 1
                  playerDirection = 'down'
              }

              
      
              playerVector.normalize()
      
              this.player.setVelocity(this.PLAYER_VELOCITY * playerVector.x, this.PLAYER_VELOCITY * playerVector.y)
      
              let playerMovement
              playerVector.length() ? playerMovement = 'walk' : playerMovement = 'idle'
              this.player.play(playerMovement + '-' + playerDirection, true)
              // this.player.x += playerVector.x * this.PLAYER_VELOCITY
              // this.player.y += playerVector.y * this.PLAYER_VELOCITY
          }
      }