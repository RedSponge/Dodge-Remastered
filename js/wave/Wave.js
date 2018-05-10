class Wave {
	
	constructor(...components) {
		this.components = components;
		console.log(components);
		this.done = false;
		this.begin();
	}
	
	begin() {
		this.running = true;
		this.currentlyRunning = 0;
	}
	
	tick() {
		if(this.done) return;
		this.components[this.currentlyRunning].tick();
		if(this.components[this.currentlyRunning].done) {
			this.currentlyRunning++;
			if(this.components[this.currentlyRunning] == null) {
				this.done = true;
			}
		}
	}
	
}