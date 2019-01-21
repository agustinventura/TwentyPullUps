function showSessionScreen() {
	hideAllScreens();
	setSessionScreenListeners();
	setSessionScreenText();
    $("#sessionScreen").show();
}

function setSessionScreenListeners() {
	setRotaryListener(showSetScreen);
	setClickListener($("#sessionDone"), showSetScreen);
}

function setSessionScreenText() {
	$("#sessionNumber").text(session+1);
}