class Credits extends Phaser.Scene {
    constructor() 
    {
        super("creditsScene")
    }
    preload()
    {
        this.load.audio('beep', './assets/audio/beep.wav')
    }
    create() {
        let creditsConfig =
        {
            fontFamily: 'Times New Roman',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.add.text(game.config.width/2, game.config.height/3 - borderUIsize - borderPadding, 'CREDITS:', creditsConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2.5, 'https://freesound.org/people/FoolBoyMedia/sounds/246390/', creditsConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'https://freesound.org/people/Greencouch/sounds/124896/', creditsConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/1.7, 'https://freesound.org/people/nlux/sounds/623688/', creditsConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/1.5, 'https://freesound.org/people/ZenithInfinitiveStudios/sounds/376745/', creditsConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/1.3, 'https://freesound.org/people/Kenneth_Cooney/sounds/609335/', creditsConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/1.15, 'PRESS UP FOR MENU', creditsConfig).setOrigin(0.5);
    }
    update()
    {
        if (Phaser.Input.Keyboard.JustDown(keyUP))
              {
                this.sound.play('beep');
                this.scene.start("titleScene");
              }
    }
}