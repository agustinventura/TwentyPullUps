var originScreen = null;

function showPauseScreen(origin) {
	hideAllScreens();
	originScreen = origin;
	setPauseScreenListeners();
    $("#pauseScreen").show();
}

function setPauseScreenListeners() {
	setRotaryListener(null);
	setClickListener($("#endSession"), exit);
	setClickListener($("#continueSession"), hidePauseScreen);
}

function hidePauseScreen() {
	$("#pauseScreen").hide();
	if (originScreen === "restScreen") {
		restResume();
	} else if (originScreen === "setScreen") {
		showSetScreen();
	}
}