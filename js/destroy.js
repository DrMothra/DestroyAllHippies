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

    //Add states
    this.stateSystem = new StateSystem();
    var state = 0;
    this.stateSystem.addState(new Intro());
    this.stateSystem.addState(new KeyPress());
    this.stateSystem.addState(new Menu());
    this.stateSystem.addState(new Start());
    this.stateSystem.changeState();
};

Destroy.prototype.update = function() {
    BaseApp.prototype.update.call(this);

    //State updates
    if (this.stateSystem.update(this.elapsedTime)) {
        //Change state
        console.log('State changed');
        this.stateSystem.changeState();
    }
};

Destroy.prototype.createScene = function() {
    //Init base createsScene
    BaseApp.prototype.createScene.call(this);
    this.stateSystem.setScene(this.scene);
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
