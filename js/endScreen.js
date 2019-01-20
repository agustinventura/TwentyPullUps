function showEndScreen() {
	hideAllScreens();
	setEndScreenListeners();
	updateDay();
	$("#endScreen").show();
}

function setEndScreenListeners() {
	setRotaryListener(null);
}