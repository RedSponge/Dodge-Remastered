
class Button {
	constructor(txt, x, y, width, height, normColor, hoverColor, font, whenClicked) {
		this.x = x;
		this.txt = txt;
		this.font = font;
		this.y = y;
		this.width = width;
		this.height = height;
		this.normColor = normColor;
		this.hoverColor = hoverColor;
		this.selected = false;
		this.whenClicked = whenClicked;
	}
	
	tick() {
		if(this.toRect().overlaps(Mouse.toRect())){
			this.selected = true;
			if(Mouse.pressed[0]) {
				this.selected = false;
				this.whenClicked();
			}
		} else {
			this.selected = false;
		}
	}	
	
	render(ctx) {
		ctx.beginPath();
		var textColor = this.hoverColor;
		var buttonColor = this.normColor;
		if(this.selected) {
			textColor = this.normColor;
			buttonColor = this.hoverColor;
		}
		ctx.fillStyle = buttonColor;
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.fillStyle = textColor;
		ctx.textAlign = "center";
		ctx.font = this.font;
		ctx.fillText(this.txt, this.x+this.width / 2, this.y+this.height / 4*2.5);
	
	}
	
	toRect() {
		return new Rectangle(this.x, this.y, this.width, this.height);
	}
}

class AutoPositionedButton extends Button {
	constructor(txt, getX, getY, width, height, normColor, hoverColor, font, whenClicked) {
		super(txt, getX(), getY(), width, height, normColor, hoverColor, font, whenClicked)
		this.getX = getX;
		this.getY = getY;
	}
	
	tick() {
		super.tick();
		this.x = this.getX();
		this.y = this.getY();
	}
}