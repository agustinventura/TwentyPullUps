function showRestScreen() {
	hideAllScreens();
	setRestScreenListeners();
    $("#restScreen").show();
}

function setRestScreenListeners() {
	setRotaryListener(showSetScreen);
	setClickListener($("#restDone"), showSetScreen);
}