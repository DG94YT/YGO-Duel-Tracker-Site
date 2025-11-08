let isAdding = false;

function toggleAdd() {
	
	isAdding = !isAdding;
	console.log("isAdding: ", isAdding);

	const updateButtons = (className, amount) => {

		const buttons = document.getElementsByClassName(className);
		for (let btn of buttons) {
			btn.textContent = isAdding ? `+${amount}` : `-${amount}`;
		}
	};

	updateButtons("btn1000", 1000);
	updateButtons("btn500", 500);
	updateButtons("btn100", 100);
	updateButtons("btn50", 50);

	let p1Custom = document.getElementById("customP1");
	let p2Custom = document.getElementById("customP2");

	p1Custom.innerText = isAdding ? "Custom number (+)" : "Custom number (-)";
	p2Custom.innerText = isAdding ? "Custom number (+)" : "Custom number (-)";
}

function modifyLP(inputID, amount) {

	const inputField = document.getElementById(inputID);
	let currentLP = parseInt(inputField.value, 10);
	const newLP = isAdding ? currentLP + amount : currentLP - amount;
	if (newLP < 0) {

		inputField.value = 0;
		return;
	}
	inputField.value = newLP;
}

function customLP(inputID, amountID) {

	const inputField = document.getElementById(inputID);
	let currentLP = parseInt(inputField.value, 10);
	const amountField = document.getElementById(amountID);
	let amount = parseInt(amountField.value, 10);

	const newLP = isAdding ? currentLP + amount : currentLP - amount;
	if (newLP < 0) {

		inputField.value = 0;
		return;
	}
	inputField.value = newLP;
	amountField.value = 0;
}

function resetLP(inputID) {

	const inputField = document.getElementById(inputID);
	inputField.value = 8000;
}

function resetAllLP(inputID, input2ID) {

	const inputField = document.getElementById(inputID);
	const input2Field = document.getElementById(input2ID);
	inputField.value = 8000;
	input2Field.value = 8000;
}

function closePanel(elementID) {

	document.getElementById(elementID).style.display = "none";
}

function openPanel(elementID) {

	document.getElementById(elementID).style.display = "block";
}

function tossCoin() {

	const result = Math.random() < 0.5 ? "Heads" : "Tails";
	alert("The coin toss result is ", result);
}

function rollDie() {

	const result = Math.floor(Math.random() * 6) + 1;
	alert("Die rolled a ", result);
}