document.onkeydown = keyDown;
function keyDown(event) {
	updatePlayerMovement(event.keyCode, true);
}

document.onkeyup = keyUp;
function keyUp(event) {
	updatePlayerMovement(event.keyCode, false);
}

canvas.onmousedown = mouseDown;
function mouseDown(event) {
	Mouse.pressed[event.button] = true;
}

canvas.onmouseup = mouseUp;
function mouseUp(event) {
	Mouse.pressed[event.button] = false;
}

canvas.onmousemove = mouseMove;
function mouseMove(event) {
	Mouse.x = event.clientX - canvas.offsetLeft;
	Mouse.y = event.clientY - canvas.offsetTop;
}

const Mouse = {
	x:0,
	y:0,
	pressed:[],
	toRect: () => {return new Rectangle(Mouse.x, Mouse.y, 1, 1)}
}

function updatePlayerMovement(key, setTo) {
	if(key == 37) {
		player.movement.left = setTo;
	}
	if(key == 38) {
		player.movement.up = setTo;
	}
	if(key == 39) {
		player.movement.right = setTo;
	}
	if(key == 40) {
		player.movement.down = setTo;
	}
}