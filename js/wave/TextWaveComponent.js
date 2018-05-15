class TextWaveComponent extends WaveComponent {
	
	constructor(str, font, x, y, fadeIn, timeOnScreen, fadeOut, color, timeBeforeShowing) {
		super(timeBeforeShowing)
		this.str = str;
		this.font = font;
		this.x = x;
		this.y = y;
		this.fadeIn = fadeIn;
		this.timeOnScreen = timeOnScreen;
		this.fadeOut = fadeOut;
		this.color = color;
	}
	
	trigger() {
		this.done = false;
		this.state = DisplayState.FADEIN;
		console.log(this.state);
	}	
}

const DisplayState = Object.freeze(
	{
		FADEIN: 1,
		WAIT: 2,
		FADEOUT: 3
	}
)