/**
 * Created by DrTone on 07/12/2014.
 */
//State pattern for game state

function State(name) {
    this.stateName = name;
}

State.prototype.init = function(scene) {
    //State variables
    this.stateTime = -1;
};

State.prototype.getName = function() {
    return this.stateName;
};

State.prototype.update = function(elapsedTime, keyState) {
    return (this.stateTime > 0 && elapsedTime > this.stateTime);
};

State.prototype.end = function() {
    //Do any transition from this state
    return null;
};


