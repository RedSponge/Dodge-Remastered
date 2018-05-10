stateTypes = ["", "Game", "GameOver","Menu"]
for(stateType of stateTypes) {
	new ExtensionJS("state", "State" + stateType);
}
loadMainDelayed();