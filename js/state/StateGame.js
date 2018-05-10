
class StateGame extends State {
	
	constructor(player) {
		super();
		this.player = player;
		this.wave = null;
		this.waves = [];
	}
	
	show() {
		enemies = {};
		ScreenUtils.setBorderRadius(0);
		this.currentWave = 0;
		this.waves = [];
		this.waves.push(
			new Wave(
				new EnemyWaveComponent(new Enemy(100, 100, 20, 20, "red", 1, 1, true, 100), 100)
			)
		);
		this.waves.push(
			new Wave(
				new EnemyWaveComponent(new Enemy(100, 100, 20, 20, "red", 1, 1, true, 2000), 1000)
			)
		)
	}
	
	tick() {
		player.tick();
		for(var enemy in enemies) {
			enemies[enemy].tick();
		}
		if(this.wave != null) {
			this.wave.tick();
			if(this.wave.done) {
				console.log("Done");
				this.currentWave++;
				this.wave = this.waves[this.currentWave]
			}
		} else {
			this.wave = this.waves[this.currentWave]
		}
	}
	
	render(ctx) {
		ctx.clearScreen();
		player.render(ctx);
		for(var enemy in enemies) {
			enemies[enemy].render(ctx);
		}
	}
	
	getName() {
		return "game";
	}

}