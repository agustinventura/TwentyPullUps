function hideAllScreens() {
	$("#welcomeScreen").hide();
	$("#testScreen").hide();
	$("#pullUpsScreen").hide();
	$("#pauseScreen").hide();
	$("#setScreen").hide();
	$("#restScreen").hide();
	$("#endScreen").hide();
}

function setClickListener(element, listener) {
	element.off("click");
	element.click(listener);
}

function setRotaryListener(listener) {
	$(document).off('rotarydetent');
	$(document).on('rotarydetent', listener);
}

function setBackKeyListener() {
	$(window).off('tizenhwkey');
    $(window).on('tizenhwkey', function(e) {
    	backPressed(e);
    });
}

function backPressed(e) {
    var activeDivId = $('.clock:visible').not(":hidden").prop("id")
    if (e.originalEvent.keyName === 'back') {
		goBack(activeDivId);
    }
}

function goBack(activeDivId) {
	switch (activeDivId) {
		case "welcomeScreen":
			exit();
			break;
		case "testScreen":
			showWelcomeScreen();
			break;
		case "pullUpsScreen":
			showTestScreen();
			break;
		case "setScreen":
			showPauseScreen(activeDivId);
			break;
		case "restScreenScreen":
			restPause(activeDivId);
			break;
		case "pauseScreen":
			pauseResume(activeDivId);
			break;
		case "endScreen":
			showWelcomeScreen();
			break;
	}
}

function exit() {
	tizen.power.release("SCREEN");
	tizen.humanactivitymonitor.stop('HRM');
    tizen.application.getCurrentApplication().exit();
}

function hrmListener(hrmInfo) {
	var currentHeartRate = preprendZerosIfNeeded(hrmInfo.heartRate, 3);
	$("#setBPM").text(currentHeartRate);
	$("#restBPM").text(currentHeartRate);
}