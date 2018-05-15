
class EnemyWaveComponent extends WaveComponent{
	
	constructor(enemy, timeBeforeSpawning) {
		super(timeBeforeSpawning);
		this.enemy = enemy;
	}
	
	trigger() {
		this.enemy.spawn();
	}
	
	static delayComponent(delay) {
		return new EnemyWaveComponent(new Enemy(-9999999999, -9999999999, 0, 0, "", 0, 0, false, 0), delay);
	}
}
