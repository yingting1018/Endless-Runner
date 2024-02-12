class Bow extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue)
    {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        // this.moveSpeed = game.settings.bowSpeed
       this.bowSpeed = 10;
    }

    update() {
       this.x -= this.bowSpeed
    }
    
    reset()
    {
        this.x = game.config.width
    }
}
