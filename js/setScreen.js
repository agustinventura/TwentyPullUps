function showSetScreen() {
	hideAllScreens();
	setSetScreenListeners();
    $("#setScreen").show();
}

function setSetScreenListeners() {
	setRotaryListener(setEnd);
	setClickListener($("#setDone"), setEnd);
}

function setEnd() {
	if (set === 5) {
		showEndScreen();
	} else {
		set++;
		showRestScreen();
	}
}