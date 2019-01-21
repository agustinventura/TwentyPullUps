function showEndScreen() {
	hideAllScreens();
	setEndScreenListeners();
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