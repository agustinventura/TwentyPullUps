function showSessionScreen() {
	hideAllScreens();
	setSessionScreenListeners();
    $("#sessionScreen").show();
}

function setSessionScreenListeners() {
	setRotaryListener(showSetScreen);
	setClickListener($("#sessionDone"), showSetScreen);
}