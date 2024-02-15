class Title extends Phaser.Scene {
    constructor() 
    {
        super("titleScene")
    }
    preload() {
        this.load.audio('beep', './assets/audio/beep.wav')
        this.load.audio('loop', './assets/audio/loop.mp3')
        this.load.image('kittycover', './assets/img/kittycover.png')
    }
    create() {
        this.sprite = this.add.tileSprite(0, 0, 800, 500, 'kittycover').setOrigin(0,0);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        let bgmusic = this.sound.add('loop', { volume: 0.3});
        bgmusic.play();
        bgmusic.setLoop(true);

    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyUP))
        {
            this.sound.play('beep');
            this.scene.start("kittyScene");
            this.sound.stopByKey('start');
            let bgmusic = this.sound.add('loop', { volume: 0.1});
            bgmusic.play();
            bgmusic.setLoop(true);

        }
    }
}