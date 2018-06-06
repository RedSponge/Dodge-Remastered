
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
		
		ctx.font = "100px Capitals";
		ctx.fillStyle = "lightblue";
		
		ctx.save();
		
		ctx.translate(WIDTH / 4*2.9, HEIGHT / 4 * 1.1)
		ctx.rotate(-5 * Math.PI / 180)
		ctx.fillText("I", 0, 0);
		
		ctx.rotate(10 * Math.PI / 180)
		ctx.fillText("I", 20, 0);
		
		ctx.restore();
		
		this.startButton.render(ctx);
		
		ctx.font = "16px Comic sans ms";
		ctx.fillStyle = "white";
		ctx.fillText("Version " + metadata.stage + "-" + metadata.version, WIDTH / 2, HEIGHT - 40);
		ctx.fillText("Made by " + metadata.authorList, WIDTH / 2, HEIGHT - 20);
	}
	
	getName() {
		return "menu";
	}
	
}