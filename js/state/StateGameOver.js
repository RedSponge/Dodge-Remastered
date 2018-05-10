class StateGameOver extends State {
	
	constructor() {
		super();
	}
	
	show() {
		ScreenUtils.setBorderRadius(10);
		this.textOpacity = 0;
		this.buttonDelay = 100;
		this.tryAgainButton = new AutoPositionedButton("Try Again", () => {return WIDTH / 2 - 50}, () => {return HEIGHT / 4 * 3 - 25}, 100, 50, "green", "lime", "20px Comic sans ms", () => {states["game"].setCurrent()});
	}
	
	tick() {
		this.textOpacity += 0.01;
		this.buttonDelay--;
		if(this.buttonDelay <= 0)
			this.tryAgainButton.tick();
	}
	
	render(ctx) {
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, WIDTH, HEIGHT);
		
		ctx.textAlign = "center";
		ctx.fillStyle = "rgba(255, 255, 255, " + this.textOpacity + ")";
		ctx.font = "70px Comic sans ms"
		ctx.fillText("Game Over", WIDTH/2, HEIGHT/2 - 100);
		
		if(this.buttonDelay <= 0)
			this.tryAgainButton.render(ctx);
	}
	
	getName() {
		return "game_over"
	}
}