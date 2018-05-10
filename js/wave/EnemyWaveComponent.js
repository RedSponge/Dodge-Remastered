
class EnemyWaveComponent {
	
	constructor(enemy, timeBeforeSpawning) {
		this.enemy = enemy;
		this.timeBeforeSpawning = timeBeforeSpawning;
		this.currentTimer = 0
		this.done = false;
	}
	
	tick() {
		this.currentTimer++;
		if(this.currentTimer >= this.timeBeforeSpawning) {
			this.enemy.spawn()
			this.done = true;
		}
	}
	
}