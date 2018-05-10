class Entity {
	constructor(x, y, width, height, color, speedx, speedy) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
		this.speedx = speedx;
		this.speedy = speedy;
		this.id = Math.random();
	}
	
	render(ctx) {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.fill();
	}
	
	move() {
		this.x += this.speedx;
		this.y += this.speedy;
	}
	
	tick() {
		this.move();
	}
	
	toRectangle() {
		return new Rectangle(this.x, this.y, this.width, this.height);
	}
}