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
			console.log(this.components[this.currentlyRunning]);
			if(this.components[this.currentlyRunning] == null) {
				this.done = true;
			}
		}
	}
	
	fullyDone() {
		var testing = 0;
		if(this.components[this.currentlyRunning].isDone()) {
			testing++;
			console.log("FINISHED ONE");
		}
	}
	
	addComponent(component) {
		this.components.push(component)
	}
	
	addEnemy(enemy, timeUntilSpawn) {
		this.addComponent(new EnemyWaveComponent(enemy, timeUntilSpawn))
	}
}

const waves = {
	
	"1": () => {
		wave = new Wave();
		wave.addComponent(EnemyWaveComponent.delayComponent(100));
		numEnemies = 10;
		var enemySize = 20;
		var speed = 2;
		for(var i = 0; i < numEnemies; i++) {
			var enemyX = (i % 2 == 0)?0:WIDTH-enemySize;
			var enemyY = HEIGHT / numEnemies * i
			var enemyVX = (i % 2 == 0)?speed:-speed;
			wave.addEnemy(new Enemy(enemyX, enemyY, enemySize, enemySize, "red", enemyVX, 0, false, 1000), 10)
		}
		wave.addEnemy(new Enemy());
		return wave;
	},
	"2": () => {
		wave = new Wave();
		wave.addComponent(EnemyWaveComponent.delayComponent(100));
		wave.addComponent(new TextWaveComponent("Howdy", "32px Comic sans ms", 100, 100, 60, 100, 60, "black", 10));
		wave.addEnemy(new Enemy(100, 100, 20, 20, "blue", 1, 1, false, 1000), 10);
		return wave;
	}
}