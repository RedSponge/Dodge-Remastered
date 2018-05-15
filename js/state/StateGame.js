
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
		this.waves = [];
		for(var wave in waves) {
			this.waves.push(waves[wave]());
		}
		this.currentWave = 0;
		this.wave = null;
		console.log("Generate Waves");
	}
	
	tick() {
		player.tick();
		for(var enemy in enemies) {
			enemies[enemy].tick();
		}
		if(this.wave != null) {
			this.wave.tick();
			if(this.wave.done) {
				this.currentWave++;
				this.wave = this.waves[this.currentWave]
			}
		} else {
			console.log(this.currentWave);
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