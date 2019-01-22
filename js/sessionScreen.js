function showSessionScreen() {
	hideAllScreens();
	setSessionScreenListeners();
	setSessionScreenText();
	tizen.humanactivitymonitor.start('HRM', hrmListener);
	tizen.power.request("SCREEN", "SCREEN_NORMAL");
    $("#sessionScreen").show();
}

function setSessionScreenListeners() {
	setRotaryListener(showSetScreen);
	setClickListener($("#sessionDone"), showSetScreen);
}

function setSessionScreenText() {
	$("#sessionNumber").text(session+1);
}