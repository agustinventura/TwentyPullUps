function showSetScreen() {
	hideAllScreens();
	setSetScreenListeners();
	setSetScreenText();
    $("#setScreen").show();
}

function setSetScreenListeners() {
	setRotaryListener(setEnd);
	setClickListener($("#setDone"), setEnd);
}

function setSetScreenText() {
	$("#set").text(set+1);
	var setPullUps = currentLevel[session][set];
	if (setPullUps === 0) {
		setPullUps = "MAX"
	}
	$("#setPullUps").text(setPullUps);
}

function setEnd() {
	if (set === 4) {
		if (session === 18) {
			updateDay();
			updateSession();
			showEndScreen();
		} else {
			updateDay();
			updateSession();
			showEndSessionScreen();
		}
	} else {
		set++;
		showRestScreen();
	}
}