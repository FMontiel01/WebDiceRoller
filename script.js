"use strict";

/*
	AI Usage Disclosure:
	ChatGPT assisted with UI structure ideas and JavaScript logic for rolling dice.
	Code was reviewed, understood, and tested by me.
*/

const DIE_MIN = 1;
const DIE_MAX = 6;

let doublesStreak = 0;

function initializeApp() {
	const rollBtn = document.getElementById("rollBtn");
	const resetBtn = document.getElementById("resetBtn");
	const clearBtn = document.getElementById("clearBtn");

	rollBtn.addEventListener("click", rollDice);
	resetBtn.addEventListener("click", resetTurn);
	clearBtn.addEventListener("click", clearAll);

	// Requirement: automatically roll the first time on page load
	rollDice();

	// Requirement: keep Roll focused so Enter rolls again
	rollBtn.focus();
}

function rollDice() {
	const die1 = getRandomIntInclusive(DIE_MIN, DIE_MAX);
	const die2 = getRandomIntInclusive(DIE_MIN, DIE_MAX);
	const sum = die1 + die2;
	const isDouble = die1 === die2;

	document.getElementById("die1").value = die1.toString();
	document.getElementById("die2").value = die2.toString();
	document.getElementById("move").value = sum.toString();
	document.getElementById("isDouble").value = isDouble ? "Yes" : "No";

	if (isDouble) {
		doublesStreak += 1;
	} else {
		doublesStreak = 0;
	}

	document.getElementById("doublesStreak").value = doublesStreak.toString();

	let note = "";
	if (doublesStreak >= 3) {
		note = "3 doubles in a row → Go to Jail";
		// In Monopoly, you go to jail immediately; we can reset streak after showing it
		doublesStreak = 0;
		document.getElementById("doublesStreak").value = "0";
	} else if (isDouble) {
		note = "Double! Roll again in Monopoly.";
	} else {
		note = "Move your token forward by the sum.";
	}

	document.getElementById("note").value = note;
	setStatus(`Rolled: ${die1} + ${die2} = ${sum} | Double: ${isDouble ? "Yes" : "No"}`);

	document.getElementById("rollBtn").focus();
}

function resetTurn() {
	doublesStreak = 0;
	document.getElementById("doublesStreak").value = "0";
	document.getElementById("note").value = "Turn reset. Doubles streak cleared.";
	setStatus("Turn reset. Press Enter or click Roll Dice to roll.");
	document.getElementById("rollBtn").focus();
}

function clearAll() {
	doublesStreak = 0;
	document.getElementById("die1").value = "";
	document.getElementById("die2").value = "";
	document.getElementById("move").value = "";
	document.getElementById("isDouble").value = "";
	document.getElementById("doublesStreak").value = "0";
	document.getElementById("note").value = "";
	setStatus("Cleared. Press Enter or click Roll Dice to roll.");
	document.getElementById("rollBtn").focus();
}

function getRandomIntInclusive(min, max) {
	const low = Math.ceil(min);
	const high = Math.floor(max);
	return Math.floor(Math.random() * (high - low + 1)) + low;
}

function setStatus(message) {
	document.getElementById("status").textContent = message;
}
