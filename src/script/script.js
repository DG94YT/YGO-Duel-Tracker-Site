let isAdding = false;

function toggleAdd() {
	
	isAdding = !isAdding;
	console.log("isAdding: ", isAdding);

	const btn_1000 = document.getElementById("btn1000");
	btn_1000.textContent = isAdding ? "-1000" : "+1000";
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
