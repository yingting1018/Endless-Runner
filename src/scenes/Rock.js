class Rock extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame)
    {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        // this.moveSpeed = game.settings.bowSpeed
       this.rockSpeed = 10;
    }

    update() {
       this.x -= this.rockSpeed
    }
    
    reset()
    {
        this.x = game.config.width
    }
}
