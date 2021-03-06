var day = 0;
var session = 0;
var currentLevel = null;
var set = 0;
var pullUps = 1;

LevelEnum = {
		EASY: [
		       [2, 1, 1, 2, 3], [2, 2, 1, 2, 3], [2, 2, 2, 2, 0], 
		       [3, 2, 3, 2, 3], [3, 3, 2, 3, 3], [3, 3, 3, 3, 0], 
		       [4, 3, 4, 3, 4], [5, 3, 4, 3, 5], [6, 5, 4, 3, 0], 
		       [5, 4, 5, 6, 7], [7, 6, 5, 6, 7], [8, 6, 5, 4, 0], 
		       [4, 5, 6, 6, 7], [8, 7, 8, 7, 8], [5, 6, 8, 9, 10], 
		       [5, 6, 7, 8, 9], [8, 9, 10, 11, 12], [13, 11, 9, 7, 0]
		      ],
		MEDIUM: [
			       [4, 3, 2, 4, 5], [4, 3, 3, 4, 5], [4, 4, 4, 3, 0], 
			       [5, 4, 3, 4, 5], [4, 4, 3, 4, 6], [4, 4, 4, 4, 0], 
			       [6, 5, 4, 5, 6], [6, 5, 6, 5, 6], [7, 6, 5, 4, 0], 
			       [5, 6, 7, 8, 9], [7, 6, 7, 8, 9], [10, 8, 7, 6, 0], 
			       [5, 6, 7, 8, 9], [10, 8, 10, 8, 10], [7, 8, 9, 11, 12], 
			       [6, 7, 8, 9, 11], [10, 11, 12, 13, 14], [14, 12, 11, 9, 0]
			      ],
		HARD: [
		       [6, 6, 4, 7, 9], [7, 6, 6, 8, 9], [8, 8, 8, 6, 0], 
		       [8, 7, 6, 7, 8], [8, 7, 7, 6, 10], [8, 8, 7, 7, 0], 
		       [9, 7, 6, 7, 9], [9, 7, 8, 7, 9], [10, 8, 7, 6, 0], 
		       [6, 7, 8, 9, 11], [7, 8, 9, 10, 11], [12, 10, 8, 7, 0], 
		       [6, 7, 8, 9, 11], [12, 10, 12, 10, 12], [10, 11, 12, 13, 15], 
		       [7, 8, 9, 10, 12], [11, 12, 13, 14, 15], [15, 13, 12, 10, 0]
		      ],
}

function init() {
	setBackKeyListener();
	hideAllScreens();
	loadDay();
	loadSession();
	loadCurrentLevel();
	if (day === 0) {
		showWelcomeScreen();
	} else if (day === 10) {
		showTestScreen();
	} else {
		if (session === 18) {
			showEndScreen();
		} else {
			set = 0;
			showSessionScreen();
		}
	}
}

function loadDay() {
	day = getIntFromLocalStorage("pullUpsDay");
}

function loadSession() {
	session = getIntFromLocalStorage("pullUpsSession");
}

function loadCurrentLevel() {
	currentLevel = getFromLocalStorage("pullUpsCurrentLevel");
}

function updateDay() {
	day = getIntFromLocalStorage("pullUpsDay");
	day++;
	saveIntToLocalStorage("pullUpsDay", day)
}

function updateSession() {
	session = getIntFromLocalStorage("pullUpsSession");
	session++;
	saveIntToLocalStorage("pullUpsSession", session)
}

function resetDay() {
	saveIntToLocalStorage("pullUpsDay", 0)
}

function resetSession() {
	saveIntToLocalStorage("pullUpsSession", 0)
}

function resetCurrentLevel() {
	saveToLocalStorage("pullUpsCurrentLevel", null)
}

function repeatLastWeek() {
	session = session - 3;
	saveIntToLocalStorage("pullUpsSession", session);
	day = day - 3;
	saveIntToLocalStorage("pullUpsDay", day);	
	init();
}

$(document).ready(init);