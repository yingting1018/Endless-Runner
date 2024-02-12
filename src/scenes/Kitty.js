class Kitty extends Phaser.Scene {
    constructor() {
        super("kittyScene")
    }

    init(){
       this.PLAYER_VELOCITY = 350
    }
    preload() {
      this.load.image('bow', './assets/img/bow.png');
      this.load.image('rock', './assets/img/rock.png');
      this.load.image('bg', './assets/img/bg.png')
        this.load.spritesheet('kittysheet', './assets/img/kittysheet.png', 
        {
        frameWidth: 30,
        frameHeight: 30
        });
    }

    create() {
        this.sprite = this.add.tileSprite(0, 0, 800, 500, 'bg').setOrigin(0, 0);
        this.bow01 = new Bow(this, game.config.width/0.2, game.config.height/1.05 - borderUIsize - borderPadding, 'bow').setOrigin(0.5, 8);
        this.bow02 = new Bow(this, game.config.width/0.3, game.config.height + 100 - borderUIsize - borderPadding, 'bow').setOrigin(0.5, 8);
        this.rock = new Rock(this, game.config.width/0.3, game.config.height + 100 - borderUIsize - borderPadding, 'rock').setOrigin(0.5, 8);
        this.bow03 = new Bow(this, game.config.width/0.4, game.config.height + 40 - borderUIsize - borderPadding, 'bow').setOrigin(0.5, 8);
        this.add.rectangle(0, 0, game.config.width, borderUIsize / 2, 0xF4CCCC).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUIsize / 2, game.config.width, borderUIsize, 0xF4CCCC).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUIsize / 2, game.config.height, 0xF4CCCC).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUIsize / 2, 0, borderUIsize, game.config.height, 0xF4CCCC).setOrigin(0, 0);
       
        
        this.cameras.main.setBackgroundColor(0xDDDDDD)
        // create anims
        this.anims.create({
          key: 'idle-Down', 
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
      
              this.player = this.physics.add.sprite(game.config.width/12, game.config.height/2, 'kittysheet', 1).setScale(3)
              this.player.body.setCollideWorldBounds(true)
              const middleThirdHeight = game.config.height / 2.5;
              const middleThirdStartY = (game.config.height - middleThirdHeight) / 2;
              this.physics.world.setBounds(0, middleThirdStartY, game.config.width, middleThirdHeight);
              this.player.body.setSize(30, 30).setOffset(4, 4)
              cursors = this.input.keyboard.createCursorKeys()

             
          }
      
          update() {
            this.sprite.tilePositionX += 4;
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
              this.bow01.update()
              this.bow02.update()
              this.bow03.update()

              if (this.checkCollision(this.player, this.bow01)) {
                console.log('kaboom ship 03')
              }
              if (this.checkCollision(this.player, this.bow02)) {
                console.log('kaboom ship 02')
              }
              if (this.checkCollision(this.player, this.bow03)) {
                console.log('kaboom ship 01')
              }
              

              playerVector.normalize()
      
              this.player.setVelocity(this.PLAYER_VELOCITY * playerVector.x, this.PLAYER_VELOCITY * playerVector.y)
      
              let playerMovement
              playerVector.length() ? playerMovement = 'walk' : playerMovement = 'idle'
              this.player.play(playerMovement + '-' + playerDirection, true)
          }

          checkCollision(kittysheet, bow) {
            if (kittysheet.x < bow.x + bow.width && 
              kittysheet.x + kittysheet.width > bow.x && 
              kittysheet.y < bow.y + bow.height &&
              kittysheet.height + kittysheet.y > bow.y) {
              return true
            } else {
              return false
            }
          }
      }