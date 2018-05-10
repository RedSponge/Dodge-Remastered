var canvas;
var ctx;

var running = false;

const fps = 60;
const tps = 60;

var doTicking = true;
var doRendering = true;

var WIDTH = HEIGHT = 500;

setup();
function setup() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext('2d');
	ctx.clearScreen = () => {
		ctx.beginPath();
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
	console.log("START");
	EntityManager();
	createStates();
	ScreenUtils.updateScreen();
	setInterval(()=>{running=true},1)
	setTimeout(()=>{
		tick();
		render();
	},2);
}

function tick() {
	if(!running) {
		return;
	}
	currentState.tick();
	if(doTicking) {
		setTimeout(() => {
			tick();
		}, 1000/tps);
	}
}

function render() {
	if(!running) {
		return;
	}
	currentState.render(ctx);
	if(doRendering) {setTimeout(render, 1000/fps);}
}

function clearScreen() {
	ctx.beginPath();
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}