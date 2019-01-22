function showEndSessionScreen() {
	hideAllScreens();
	setEndSessionScreenListeners();
	tizen.power.release("SCREEN");
	tizen.humanactivitymonitor.stop('HRM');
	$("#endSessionScreen").show();
}

function setEndSessionScreenListeners() {
	setRotaryListener(null);
}