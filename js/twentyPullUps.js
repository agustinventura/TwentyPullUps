var day = 0;
LevelEnum = {
		EASY: 1,
		MEDIUM: 2,
		HARD: 3
}
var currentLevel = null;
var pullUps = 0;

function init() {
	setBackKeyListener();
	hideAllScreens();
	loadDay();
	loadCurrentLevel();
	if (day === 0) {
		showWelcomeScreen();
	} else if (day === 10) {
		showTestScreen();
	} else {
		showSetScreen();
	}
}

function setCurrentLevel() {
	if (pullUps < 6) {
		currentLevel = LevelEnum.EASY;
	} else if (pullUps > 5 && pullUps <10) {
		currentLevel = LevelEnum.MEDIUM;
	} else {
		currentLevel = LevelEnum.HARD;
	}
	showTestEndScreen();
}

function loadDay() {
	day = getIntFromLocalStorage("pullUpsDay");
}

function loadCurrentLevel() {
	currentLevel = getIntFromLocalStorage("pullUpsLevel");
}

function updateDay() {
	day = getIntFromLocalStorage("pullUpsDay");
	day++;
	saveIntToLocalStorage("pullUpsDay", day)
}

$(document).ready(init);