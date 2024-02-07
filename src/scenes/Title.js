class Title extends Phaser.Scene {
    constructor() 
    {
        super("titleScene")
    }

    create() {
        this.add.text(20, 20, "Meow")
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
       

    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyUP))
        {
            this.scene.start("kittyScene");
        }
    }
}