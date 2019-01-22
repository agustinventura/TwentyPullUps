function showEndScreen() {
	hideAllScreens();
	setEndScreenListeners();
	tizen.power.release("SCREEN");
	tizen.humanactivitymonitor.stop('HRM');
	$("#endScreen").show();
}

function setEndScreenListeners() {
	setRotaryListener(null);
	setClickListener($("#repeatLastWeek"), repeatLastWeek);
	setClickListener($("#reset"), reset);
}

function reset() {
	resetDay();
	resetSession();
	resetCurrentLevel();
	init();
}