function showPullUpsScreen() {
	hideAllScreens();
	setPullUpsScreenListeners();
    $("#pullUpsScreen").show();
}

function setPullUpsScreenListeners() {
	setRotaryListener(pullUpsChange);
	setClickListener($("#decreasePullUpsArrow"), decreasePullUps);
	setClickListener($("#increasePullUpsArrow"), increasePullUps);
	setClickListener($("#upArrowPullUps"), increasePullUps);
	setClickListener($("#downArrowPullUps"), decreasePullUps);
	setClickListener($("#pullUpsDone"), setCurrentLevel);
}

function pullUpsChange(ev) {
	var direction = ev.detail.direction;
    if (direction === "CW") {
        increasePullUps();
    } else {
        decreasePullUps();
    }
}

function decreasePullUps() {
    if (pullUps > 1) {
        pullUps--;
        $("#pullUps").text(pullUps);
    }
}

function increasePullUps() {
    pullUps++;
    $("#pullUps").text(pullUps);
}

function setCurrentLevel() {
	if (pullUps < 6) {
		currentLevel = LevelEnum.EASY;
	} else if (pullUps > 5 && pullUps <10) {
		currentLevel = LevelEnum.MEDIUM;
	} else {
		currentLevel = LevelEnum.HARD;
    }
    saveToLocalStorage("pullUpsCurrentLevel", currentLevel);
	showTestEndScreen();
}