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
    //Animation
    this.animationTime = 0;
    this.rotationInc = Math.PI/32;
    this.totalRot = 0;
    this.waveAmplitude = 1;
    this.WaveDelay = this.rotationInc;
    BaseApp.prototype.init.call(this, container);
};

Destroy.prototype.update = function() {

    BaseApp.prototype.update.call(this);
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
