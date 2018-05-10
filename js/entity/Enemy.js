class Enemy extends Entity {
	constructor(x, y, width, height, color, speedx, speedy, bouncesFromWalls, lifetime) {
		super(x, y, width, height, color, speedx, speedy)
		this.lifetime = lifetime;
		this.bouncesFromWalls = bouncesFromWalls;
	}
	
	spawn() {
		enemies[this.id] = this;
	}
	
	kill() {
		delete enemies[this.id]
	}
	
	tick() {
		super.tick();
		if(this.x < 0 || this.x + this.width > canvas.width) {
			if(this.bouncesFromWalls) {
				this.speedx *= -1;
			} else {
				this.kill();
			}
		}
		if(this.y < 0 || this.y + this.height > canvas.height) {
			if(this.bouncesFromWalls) {
				this.speedy *= -1;	
			} else {
				this.kill();
			}
		}
		this.tickLifetime();
		this.tickPlayer();
	}
	
	tickPlayer() {
		if(MathUtils.twoRectsCollision(this.toRectangle(), player.toRectangle())) {
			states["game_over"].setCurrent();
		}
	}
	
	tickLifetime() {
		this.lifetime--;
		if(this.lifetime <= 0) {
			this.kill();
		}
	}
}