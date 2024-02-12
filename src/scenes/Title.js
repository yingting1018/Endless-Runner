class Title extends Phaser.Scene {
    constructor() 
    {
        super("titleScene")
    }
    preload() {
        this.load.image('kittycover', './assets/img/kittycover.png')
    }
    create() {
        this.sprite = this.add.tileSprite(0, 0, 800, 500, 'kittycover').setOrigin(0,0);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
       

    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyUP))
        {
            this.scene.start("kittyScene");
        }
    }
}