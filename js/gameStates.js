/**
 * Created by DrTone on 07/12/2014.
 */
//Game states
function Intro() {
    State.call(this, 'Intro');
}

Intro.prototype = new State('Intro');

Intro.prototype.init = function(scene) {
    //Set up state
    this.stateTime = 50;
};

function KeyPress() {
    State.call(this, 'KeyPress');
}

KeyPress.prototype = new State('KeyPress');

KeyPress.prototype.init = function(scene) {
    //Wait on key presses
    this.keyPressed = false;
    var _this = this;
    $(document).keydown(function(event) {
        _this.keyDown(event);
    });
    State.prototype.init.call(this);
};

KeyPress.prototype.keyDown = function(event) {
    //Change state on key press;
    //DEBUG
    console.log('Key pressed');
    this.keyPressed = true;
};

KeyPress.prototype.end = function() {
    //Remove keydown handler
    var _this = this;
    $(document).off('keydown');

    //Hide intro screen
    $('#intro').hide();
};

KeyPress.prototype.update = function(elapsedTime) {
    //Change state on key press
    return this.keyPressed;
};

function Menu() {
    State.call(this, 'Menu');
}

Menu.prototype = new State('Menu');

Menu.prototype.init = function(scene) {
    //Set up state
    this.options = ['Start', 'Instructions', 'Controls', 'Scores', 'About'];
    this.selection = 0;
    this.selected = -1;

    $('#menu').show();
    //Handle keypresses
    var _this = this;
    $(document).keydown(function(event) {
        _this.keyDown(event);
    });
};

Menu.prototype.keyDown = function(event) {
    //Handle menu options
    switch(event.keyCode) {
        case 38: //Up arrow
            var elem = $('#'+this.options[this.selection]).removeClass('selected');
            --this.selection;
            if(this.selection < 0) this.selection = this.options.length-1;
            elem = $('#'+this.options[this.selection]).addClass('selected');
            break;
        case 40: //Down arrow
            var elem = $('#'+this.options[this.selection]).removeClass('selected');
            ++this.selection;
            if(this.selection > this.options.length-1) this.selection = 0;
            elem = $('#'+this.options[this.selection]).addClass('selected');
            break;
        case 13: //Enter
            this.selected = this.selection;
            break;
        default:
            break;
    }
};

Menu.prototype.update = function(elapsedTime) {
    //Do any updates
    return this.selected >= 0;
};

Menu.prototype.end = function() {
    //Hide menu
    $('#menu').hide();
    return this.options[this.selection];
};

function Start() {
    State.call(this, 'Start');
}

Start.prototype = new State('Start');

Start.prototype.init = function(scene) {
    //Set up state
    this.yInc = 1;

    //Handle keypresses
    var _this = this;
    $(document).keydown(function(event) {
        _this.keyDown(event);
    });

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
    scene.add(this.ship);
};

Start.prototype.keyDown = function(event) {
    //Handle ship movement
    switch(event.keyCode) {
        case 87: //w
            this.ship.position.y += this.yInc;
            break;
        case 83: //s
            this.ship.position.y -= this.yInc;
            break;
        default:
            break;
    }
};
