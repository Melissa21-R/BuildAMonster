class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.monsterContainer = this.add.container(this.bodyX, this.bodyY);
        my.sprite.body = this.add.sprite(0, 0, "monsterParts", "body_blueB.png");
        my.sprite.rightFeet = this.add.sprite(80, 130, "monsterParts", "leg_blueA.png");
        my.sprite.leftFeet = this.add.sprite(-80, 130, "monsterParts", "leg_blueA.png");
        my.sprite.leftFeet.flipX = true;
        my.sprite.rightArm = this.add.sprite(120, 30, "monsterParts", "arm_whiteE.png");
        my.sprite.rightArm.angle += -35;
    
        my.sprite.leftArm = this.add.sprite(-120, 30, "monsterParts", "arm_whiteE.png");
        my.sprite.leftArm.angle += 35;
        my.sprite.leftArm.flipX = true;

        my.sprite.eye1 = this.add.sprite(0, -20, "monsterParts", "eye_cute_light.png");
        my.sprite.mouth = this.add.sprite(0, 40, "monsterParts", "mouthA.png");

        my.sprite.horn1 = this.add.sprite(50, -75, "monsterParts", "detail_blue_horn_small.png");
        my.sprite.horn2 = this.add.sprite(-50, -75, "monsterParts", "detail_blue_horn_small.png");
        my.sprite.horn2.flipX = true;

        my.sprite.monsterContainer.add(
            [
                my.sprite.body,
                my.sprite.rightFeet,
                my.sprite.leftFeet,
                my.sprite.rightArm,
                my.sprite.leftArm,
                my.sprite.eye1,
                my.sprite.mouth,
                my.sprite.horn1,
                my.sprite.horn2
            ]
        );

        this.input.keyboard.start(); 
        this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A); 
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }
    update() {
        let my = this.my;    // create an alias to this.my for readability
        if(this.sKey.isDown)
        {
            my.sprite.mouth.setFrame("mouthA.png"); 
        }
        else if(this.fKey.isDown)
        {
            my.sprite.mouth.setFrame("mouthB.png"); 
        }

        if(this.aKey.isDown)
        {
            my.sprite.monsterContainer.x -= 7;
        }
        else if(this.dKey.isDown)
        {
            my.sprite.monsterContainer.x += 7;
        }

       
    }

}