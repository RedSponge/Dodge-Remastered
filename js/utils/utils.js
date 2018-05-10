const MathUtils = {
	twoRectsCollision: (rect1, rect2) => {
		if(rect1.right > rect2.left && rect1.left < rect2.right && rect1.bottom > rect2.top && rect1.top < rect2.bottom) {
			return true;
		}
		return false;
	}
}

class Rectangle {
	constructor(x, y, width, height){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.right = x + width;
		this.left = x;
		this.top = y;
		this.bottom = y + height;
	}
	
	overlaps(rect) {
		return MathUtils.twoRectsCollision(this, rect);
	}
}