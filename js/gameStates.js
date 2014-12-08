/**
 * Created by DrTone on 07/12/2014.
 */
//Game states
function Intro(name) {
    State.call(this, name);
}

Intro.prototype = new State(name);

Intro.prototype.init = function() {
    //Set up state
    this.stateTime = 50;
};

function Menu(name) {
    State.call(this, name);
}

Menu.prototype = new State(name);

Menu.prototype.init = function() {
    //Set up state
};

function Play(name) {
    State.call(this, name);
}

Play.prototype = new State(name);

Play.prototype.init = function() {
    //Set up state
};