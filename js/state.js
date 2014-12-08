/**
 * Created by DrTone on 07/12/2014.
 */
//State pattern for game state

function State(name) {
    this.stateName = name;
}

State.prototype.getName = function() {
    return this.stateName;
};

State.prototype.update = function(elapsedTime, keyState) {
    return (this.stateTime > 0 && elapsedTime > this.stateTime);
};

State.prototype.init = function() {
    //State variables
    this.stateTime = -1;
};
