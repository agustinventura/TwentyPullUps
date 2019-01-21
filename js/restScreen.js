var restEndAudio = null;
var restTimer = null;
var restTimeOffset = null;
var restSeconds = null;
var restTime = 120;

function showRestScreen() {
	hideAllScreens();
	//loadRestEndAudio();
	setRestScreenListeners();
	stopRestChrono();
	startRest();
    $("#restScreen").show();
}

function loadRestEndAudio() {
    restEndAudio = document.createElement('audio');
    restEndAudio.src = 'snd/shipbell.mp3';
    restEndAudio.name = 'shipbell';
}

function setRestScreenListeners() {
	setRotaryListener(restEnd);
	setClickListener($("#restDone"), restEnd);
}

function restPause() {
	stopRestChrono();
	showPauseScreen("restScreen");
}

function restResume() {
	hideAllScreens();
	setRestScreenListeners();
	startRestChrono();
	$("#restScreen").show();
}

function restEnd() {
	clearRestState();
	showSetScreen();
}

function clearRestState() {
	stopRestChrono();
	restEndAudio = null;
	restSeconds = null;
	//tizen.power.release("SCREEN");
}

function stopRestChrono() {
	clearInterval(restTimer);
	restTimer = null;
}

function startRest() {
	//tizen.power.request("SCREEN", "SCREEN_NORMAL");
	restTimeOffset = -10;
	restSeconds = new Date(restTime*1000);
	startRestChrono();
}

function startRestChrono() {
	restTimer = setInterval(refreshRestMilliseconds, 10);
}

function refreshRestMilliseconds() {
	restSeconds.setMilliseconds(restSeconds.getMilliseconds() + restTimeOffset);
	if (restSeconds.getMilliseconds() === 0 && restSeconds.getSeconds() === 0 && restSeconds.getMinutes() === 0) {
		restTimeOffset = 10;
		//restEndAudio.load();
		//restEndAudio.play();
		//navigator.vibrate([1000, 1000, 1000]);
	}
	setCurrentRestFormattedTime();
}

function setCurrentRestFormattedTime() {
	var formattedMinutes = preprendZerosIfNeeded(restSeconds.getMinutes(), 2);
	$("#restMinutes").text(formattedMinutes);
	var formattedSeconds = preprendZerosIfNeeded(restSeconds.getSeconds(), 2);
	$("#restSeconds").text(formattedSeconds);
}