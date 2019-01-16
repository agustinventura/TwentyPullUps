function showTestScreen() {
	hideAllScreens();
	setTestScreenListeners();
    $("#testScreen").show();
}

function setTestScreenListeners() {
	setRotaryListener(showPullUpsScreen);
	setClickListener($("#testDone"), showPullUpsScreen);
}