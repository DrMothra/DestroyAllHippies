/**
 * Created by DrTone on 07/12/2014.
 */
//State system
function StateSystem() {
    this.states = [];
    this.stateNames = [];
    this.currentState = null;
    this.currentStateNumber = 0;
}

StateSystem.prototype.setScene = function(scene) {
    this.scene = scene;
};

StateSystem.prototype.addState = function(state) {
    this.states.push(state);
    this.stateNames.push(state.getName());
};

StateSystem.prototype.update = function(elapsedTime) {
    if (this.currentState == null)
        return false;

    return this.currentState.update(elapsedTime);
};

StateSystem.prototype.changeState = function() {
    //Clear down previous state
    if(this.currentState) {
        var nextStateName = this.currentState.end();
    } else {
        //If no state then go to first state
        this.currentState = this.states[this.currentStateNumber];
        this.currentState.init();
        console.log('First state =', this.stateNames[this.currentStateNumber]);
        return;
    }

    //Progress through states unless told otherwise
    if(nextStateName != null) {
        var foundState = false;
        for(var i=0; i<this.states.length; ++i) {
            if(this.stateNames[i] == nextStateName) {
                foundState = true;
                this.currentStateNumber = i;
                break;
            }
        }
        if(!foundState) {
            console.log('State does not exist');
            return;
        }
    } else {
        //Progress to next state
        ++this.currentStateNumber;
    }

    this.currentState = this.states[this.currentStateNumber];
    this.currentState.init(this.scene);

    //DEBUG
    console.log('Changed state to', this.stateNames[this.currentStateNumber]);
};