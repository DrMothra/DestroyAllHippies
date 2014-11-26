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
