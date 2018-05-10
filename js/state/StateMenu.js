
class StateMenu extends State {
	
	constructor() {
		super();
	}
	
	show() {
		ScreenUtils.setBorderRadius(50);
		this.startButton = new Button("Begin Game", WIDTH / 2 - 50, HEIGHT / 4 * 3 - 10, 100, 50, "green", "lime", "18px Comic sans ms", () => {states["game"].setCurrent()})
	}
	
	tick() {
		this.startButton.tick();
	}
	
	render(ctx) {
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, WIDTH, HEIGHT);
		
		ctx.fillStyle = "white";
		ctx.font = "64px Comic sans ms"
		ctx.textAlign = "center";
		ctx.fillText("Dodge", WIDTH / 2, HEIGHT / 4)
		ctx.font = "32px Comic sans ms";
		ctx.fillText("Remastered", WIDTH / 2, HEIGHT / 4 * 1.3);
		
		this.startButton.render(ctx);
	}
	
	getName() {
		return "menu";
	}
	
}