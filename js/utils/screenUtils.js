const ScreenUtils = {
	animationsSpeed:2,
	smoothChangeSize: function(newWidth, newHeight, animationSpeed) {
		var widthChanger = (newWidth > WIDTH)?ScreenUtils.animationsSpeed:-ScreenUtils.animationsSpeed;
		var heightChanger = (newHeight > HEIGHT)?ScreenUtils.animationsSpeed:-ScreenUtils.animationsSpeed;
		var smoothScreenSizeChangeInterval = setInterval(function() {
			if(newWidth != WIDTH) {
				WIDTH += widthChanger;
			}
			if(newHeight != HEIGHT) {
				HEIGHT += heightChanger;
			}
			updateScreen();
			if(newWidth == WIDTH && newHeight == HEIGHT) {
				clearInterval(smoothScreenSizeChangeInterval);
			}
		}, 1);
	},
	updateScreen: function updateScreen() {
		canvas.width = WIDTH;
		canvas.height = HEIGHT;
		canvas.style.width = WIDTH + "px";
		canvas.style.height = HEIGHT + "px";
	},
	chanseSize: function setScreenSize(width, height) {
		WIDTH = width;
		HEIGHT = height;
		updateScreen();
	},
	setBorderRadius: function setBorderRadius(radius) {
		canvas.style.borderRadius = radius + "px";
	}
	
}