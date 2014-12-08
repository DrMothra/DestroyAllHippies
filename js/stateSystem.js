/**
 * Created by DrTone on 07/12/2014.
 */
//State system
function StateSystem() {
    this.states = [];
    this.stateNames = [];
    this.currentState = null;
}

StateSystem.prototype.addState = function(state) {
    this.states.push(state);
    this.stateNames.push(state.getName());
};

StateSystem.prototype.update = function(elapsedTime) {
    if (this.currentState == null)
        return false;

    return this.currentState.update(elapsedTime);
};

StateSystem.prototype.changeState = function(stateName) {
    //See if state exists
    var foundState = false;
    for(var i=0; i<this.states.length; ++i) {
        if(this.stateNames[i] == stateName) {
            foundState = true;
            break;
        }
    }
    if(!foundState) {
        console.log('State does not exist');
        return;
    }
    this.currentState = this.states[i];
    this.currentState.init();

    //DEBUG
    console.log('Changed state to', stateName);
};