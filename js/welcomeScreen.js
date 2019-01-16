function showWelcomeScreen() {
	hideAllScreens();
	setWelcomeScreenListeners();
    $("#welcomeScreen").show();
}

function setWelcomeScreenListeners() {
	setRotaryListener(showTestScreen);
	setClickListener($("#introDone"), showTestScreen);
}