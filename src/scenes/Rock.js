class Rock extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue)
    {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
       this.rockSpeed = 7;
       this.points = pointValue 
    }

    update() {
       this.x -= this.rockSpeed
        if (this.points > 100)
        {
            this.rockSpeed = 12;
        }
        if (this.points > 200)
        {
            this.rockSpeed = 15;
        }
    }
    
    reset()
    {
        this.x = game.config.width
        this.setX(Phaser.Math.Between(game.config.width/0.2, game.config.width * 0.4));
        this.setY(Phaser.Math.Between(game.config.height/1.05, game.config.height + 25));
    
    }
}
