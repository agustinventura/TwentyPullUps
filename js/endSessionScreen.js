function showEndSessionScreen() {
	hideAllScreens();
	setEndSessionScreenListeners();
	$("#endSessionScreen").show();
}

function setEndSessionScreenListeners() {
	setRotaryListener(null);
}