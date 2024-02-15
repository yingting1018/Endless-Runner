class Bow extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue)
    {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        // this.moveSpeed = game.settings.bowSpeed
       this.bowSpeed = 10;
       this.points = pointValue 
    }

    update() {
       this.x -= this.bowSpeed
    }
    
    reset()
    {
        this.x = game.config.width
        this.setX(Phaser.Math.Between(game.config.width/0.2, game.config.width * 0.4));
        this.setY(Phaser.Math.Between(game.config.height/1.05, game.config.height + 25));
    
    }
}
