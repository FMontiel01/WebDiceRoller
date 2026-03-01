"use strict";

/*
	AI Usage Disclosure:
	ChatGPT assisted with UI structure ideas and JavaScript logic for rolling dice.
	Code was reviewed, understood, and tested by me.
*/

const DIE_MIN = 1;
const DIE_MAX = 6;

let doublesStreak = 0;

// ===== Server API (Azure Node backend) =====
const API_BASE =
	"https://monopoly-dice-api-chfpcjb5aeayg0hv.centralus-01.azurewebsites.net";

let serverWoke = false;

async function wakeServerOnce() {
	if (serverWoke) return;
	try {
		await fetch(`${API_BASE}/api/health`);
		serverWoke = true;
	} catch (err) {
		// If this fails, rolls will likely fail too, but we keep the message clear.
		setStatus("Wake-up failed. Check API URL / internet connection.");
		throw err;
	}
}

async function getServerRoll() {
	const r = await fetch(`${API_BASE}/api/monopoly/roll`);
	if (!r.ok) throw new Error(`Roll API failed (${r.status})`);
	return r.json();
}

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

	const corsFailBtn = document.getElementById("corsFailBtn");
	corsFailBtn.addEventListener("click", async () => {
	// This should fail in the browser (intentionally), but work in Postman.
	await fetch(`${API_BASE}/api/nocors`);
	});
}

async function rollDice() {
	await wakeServerOnce();

	const data = await getServerRoll();
	const die1 = data.die1;
	const die2 = data.die2;
	const sum = data.sum;
	const isDouble = data.isDouble;

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

function setStatus(message) {
	document.getElementById("status").textContent = message;
}
