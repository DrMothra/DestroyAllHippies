/**
 * Created by DrTone on 26/11/2014.
 */
//Destroy all hippies


//Init this app from base
function Destroy() {
    BaseApp.call(this);
}

Destroy.prototype = new BaseApp();

Destroy.prototype.init = function(container) {
    //Initialise base
    BaseApp.prototype.init.call(this, container);

    //Init app
    this.stateNames = ['Intro', 'Menu', 'Play'];
    this.currentState = 0;
    //Add states
    this.stateSystem = new StateSystem();
    var state = 0;
    this.stateSystem.addState(new Intro(this.stateNames[state++]));
    this.stateSystem.addState(new Menu(this.stateNames[state++]));
    this.stateSystem.addState(new Play(this.stateNames[state++]));
    this.stateSystem.changeState(this.stateNames[this.currentState]);
};

Destroy.prototype.update = function() {
    BaseApp.prototype.update.call(this);

    //State updates
    if (this.stateSystem.update(this.elapsedTime)) {
        //Change state
        console.log('State changed');
        this.stateSystem.changeState(this.stateNames[++this.currentState]);
    }
};

Destroy.prototype.createScene = function() {
    //Init base createsScene
    BaseApp.prototype.createScene.call(this);

    //Create space ship
    var shipImage = THREE.ImageUtils.loadTexture('images/spaceship.png');

    var shipMat = new THREE.SpriteMaterial( {
            transparent: true,
            opacity: 0.9,
            useScreenCoordinates: false,
            map: shipImage }
    );
    this.ship = new THREE.Sprite(shipMat);
    this.ship.scale.x = 10;
    this.ship.scale.y = 10;
    this.ship.position.x = -140;
    this.scene.add(this.ship);
    this.ship.visible = false;
};

Destroy.prototype.keydown = function(event) {
    //Control ship
    switch(event.keyCode) {
        case 81: //P
            this.ship.position.y += 5;
            break;
        case 65: //A
            this.ship.position.y -= 5;
            break;
        default:
            break;
    }
};

$(document).ready(function() {
    //Set up visualisation
    var container = document.getElementById("WebGL-Output");
    var app = new Destroy();
    app.init(container);
    app.createScene();
    //app.createGUI();

    app.run();
});
