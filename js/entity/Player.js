class Player extends Entity{
	constructor(x, y, width, height, speed) {
		super(x, y, width, height, "lime", speed, speed);
		this.speed = speed;
		this.movement = {right:false,up:false,down:false,left:false};
	}
	
	move() {
		if(this.movement.left) {
			this.x -= this.speed;
		}
		if(this.movement.up) {
			this.y -= this.speed;
		}
		if(this.movement.right) {
			this.x += this.speed;
		}
		if(this.movement.down) {
			this.y += this.speed;
		}
		if(this.y < 0) {
			this.y = 0;
		}
		if(this.x < 0) {
			this.x = 0;
		}
		if(this.y + this.height > canvas.height) {
			this.y = canvas.height - this.height;
		}
		if(this.x + this.width > canvas.width) {
			this.x = canvas.width - this.width;
		}
	}
}