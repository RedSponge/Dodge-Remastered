
var currentState;
const states = {}

function createStates() {
	new StateGame();
	new StateGameOver();
	new StateMenu();
	states["menu"].setCurrent();
}

class State {
	
	constructor() {
		if(states[this.getName()] != null) {
			throw new Error("THE STATE \"" + this.getName() + "\" ALREADY EXISTS!");
		}
		states[this.getName()] = this;
	}
	
	tick() {}
	
	render(ctx) {}
	
	show() {}
	
	hide() {}
	
	getName() {
		return "TEMPLATE";
	}
	
	setCurrent() {
		if(currentState != null) currentState.hide();
		currentState = this;
		this.show();
	}
}