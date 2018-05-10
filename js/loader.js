class ExtensionJS {
	constructor(str1, str2) {
		this.loaded = false;
		if(typeof(str2) == "string") {
			this.__initFile(str1, str2);
		} else {
			this.__initFile("", str1);
		}
	}
	
	__initFile(sub, path) {
		var file = document.createElement("script");
		file.src = "js/" + sub + "/" + path + ".js";
		console.log("loaded " + sub + "/" + path + ".js")
		document.body.append(file);
	}
}

var loaders = {};

paths = [
	"META",
	"utils/load",
	"listener/load",
	"ui/load",
	"entity/load",
	"wave/load",
	"state/load",
]

function loadAllScripts() {
	console.log("LOADING SCRIPTS")
	for(path of paths) {
		loaders[path] = new ExtensionJS(path);
	}
	console.log("SUCCESSFULLY LOADED SCRIPTS");
}


function loadMainDelayed() {
	setTimeout(() => {loadMain()}, 100)
}

function loadMain() {
	new ExtensionJS("main");
}

loadAllScripts();