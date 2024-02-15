class Kitty extends Phaser.Scene {
    constructor() {
        super("kittyScene")
        this.scoreConfig = {
          fontFamily: 'Times New Roman',
          fontSize: '32px',
          align: 'center',
          padding: {
              top: 5,
              bottom: 5,
          },
          fixedWidth: 1000
      };
    }

    init(){
       this.PLAYER_VELOCITY = 350
    }
    preload() {
      this.load.audio('lvlup', './assets/audio/lvlup.wav');
      this.load.audio('end', './assets/audio/end.wav');
      this.load.audio('collect', './assets/audio/collect.wav');
      this.load.image('bow', './assets/img/bow.png');
      this.load.image('rock', './assets/img/rock.png');
      this.load.image('bg', './assets/img/bg.png')
        this.load.spritesheet('kittysheet', './assets/img/kittysheet5.png', 
        {
        frameWidth: 30,
        frameHeight: 30
        });
    }

    create() {
        this.physics.world.drawDebug = false;
        keyRESET = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyCREDITS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        this.sprite = this.add.tileSprite(0, 0, 800, 500, 'bg').setOrigin(0, 0);
        const randomX = Phaser.Math.Between(game.config.width/0.2, game.config.width * 0.4);
        const randomY = Phaser.Math.Between(game.config.height/1.05, game.config.height + 25);
        this.bow01 = new Bow(this, randomX, randomY - borderUIsize - borderPadding, 'bow', 0, 10).setOrigin(0.5, 8);
        this.bow02 = new Bow(this, randomX, randomY - borderUIsize - borderPadding, 'bow', 0, 10).setOrigin(0.5, 8);
        this.rock = new Rock(this, randomX, randomY - borderUIsize - borderPadding, 'rock').setOrigin(0.5, 8);
        this.add.rectangle(0, 0, game.config.width, borderUIsize / 2, 0xF4CCCC).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUIsize / 2, game.config.width, borderUIsize, 0xF4CCCC).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUIsize / 2, game.config.height, 0xF4CCCC).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUIsize / 2, 0, borderUIsize, game.config.height, 0xF4CCCC).setOrigin(0, 0);
        this.gameOver = false;
        this.p1Score = 0;
        this.scoreLeft = this.add.text(200, 10, "Score: " + this.p1Score, this.scoreConfig);
        // create anims
        this.anims.create({
          key: 'idle-Down', 
          frameRate: 0,
          repeat: -1,
          frames: this.anims.generateFrameNumbers('kittysheet', {
          start: 2,
          end: 2
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
                  start: 3,
                  end: 5
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
              if (Phaser.Input.Keyboard.JustDown(keyRESET))
              {
                this.scene.start("titleScene");
              }
              if (Phaser.Input.Keyboard.JustDown(keyCREDITS))
              {
                this.scene.start("creditsScene");
              }
              if (this.checkCollisionR(this.player, this.rock)) {
                this.sound.play('end', { volume: 0.2})
                this.gameOver = true;
                this.add.text(game.config.width / 2, game.config.height / 2, 'GAME OVER', this.scoreConfig).setOrigin(0.5);
                this.add.text(game.config.width / 2, game.config.height / 2 + 64, 'Press (R) to Reset and (C) for Credits', this.scoreConfig).setOrigin(0.5);
                return;
              }
              if (this.p1Score > 100)
              {
                this.sound.play('lvlup');
              }
              if (this.p1Score > 200)
              {
                this.sound.play('lvlup');
              }
              this.bow01.update()
              if (this.bow01.x <= 0) {
                this.bow01.setY(Phaser.Math.Between(game.config.height/1.05, game.config.height + 25));
                this.bow01.reset()
              }
              this.bow02.update()
              if (this.bow02.x <= 0) {
                this.bow02.setY(Phaser.Math.Between(game.config.height/1.05, game.config.height + 25));
                this.bow02.reset()
              }
              this.rock.update()
              if (this.rock.x <= 0) {
                this.rock.setY(Phaser.Math.Between(game.config.height/1.05, game.config.height + 25));
                this.rock.reset()
              }

              if (this.checkCollisionB(this.player, this.bow01)) {
                this.sound.play('collect', { volume: 0.5})
                this.p1Score += this.bow01.points;
                this.scoreLeft.text = "Score: " + this.p1Score
                this.rock.points = this.p1Score;
                this.bow01.reset();
              }
              if (this.checkCollisionB(this.player, this.bow02)) {
                this.sound.play('collect', { volume: 0.5})
                this.p1Score += this.bow02.points;
                this.scoreLeft.text = "Score: " + this.p1Score
                this.rock.points = this.p1Score;
                this.bow02.reset();
              }

              playerVector.normalize()
      
              this.player.setVelocity(this.PLAYER_VELOCITY * playerVector.x, this.PLAYER_VELOCITY * playerVector.y)
      
              let playerMovement
              playerVector.length() ? playerMovement = 'walk' : playerMovement = 'idle'
              this.player.play(playerMovement + '-' + playerDirection, true)
          }
          checkCollisionB(kittysheet, bow) {
            if (kittysheet.x < bow.x + bow.width && 
              kittysheet.x + kittysheet.width > bow.x && 
              kittysheet.y + 250 < bow.y + bow.height &&
              kittysheet.height + kittysheet.y + 250 > bow.y) {
              return true
            } else {
              return false
            }
          }
          checkCollisionR(kittysheet, rock) {
            if (kittysheet.x < rock.x + rock.width && 
              kittysheet.x + kittysheet.width > rock.x && 
              kittysheet.y + 250 < rock.y + rock.height &&
              kittysheet.height + kittysheet.y + 250 > rock.y) {
              return true
            } else {
              return false
            }
          }
      }