function showTestEndScreen() {
	hideAllScreens();
	setTestEndScreenListeners();
	updateDay();
    $("#testEndScreen").show();
}

function setTestEndScreenListeners() {
	setRotaryListener(null);
}