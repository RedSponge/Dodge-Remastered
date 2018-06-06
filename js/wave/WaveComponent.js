
class WaveComponent {
	
	constructor(timeBeforeExecute) {
		this.timeBeforeExecute = timeBeforeExecute;
		this.currentTimer = 0;
		this.done = false;
	}

	tick() {
		this.currentTimer++;
		if(this.currentTimer >= this.timeBeforeExecute) {
			this.trigger();
		}
	}

	trigger() {
		
	}
	
	isDone() {
		return false;
	}

}