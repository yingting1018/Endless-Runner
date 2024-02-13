class Rock extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame)
    {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
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
