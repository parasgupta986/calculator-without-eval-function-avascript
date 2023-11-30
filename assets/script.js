let firstNumber
let secondNumber
let step = 0
let operation
let result = 0

let numArray = []
let secondNumberArr = []

let display = document.getElementById('display')

function getNumber(num) {
	if (step === 0 || step === 1) {
		numArray.push(num)
		step = 1
		firstNumber = Number(numArray.join(''))
		display.value = firstNumber
	} else if (step === 2) {
		secondNumberArr.push(num)
		secondNumber = Number(secondNumberArr.join(''))
		display.value = firstNumber + operation + secondNumber
	}
}


function removeElement() {
	if (step === 0 || step === 1) {
		if (numArray.length) {
			numArray.splice(numArray.length - 1, 1);
			// numArray.length = numArray.length - 1;
			firstNumber = Number(numArray.join(''));
			display.value = firstNumber
		}
	} else if (step === 2) {
		if (secondNumberArr.length) {
			secondNumberArr.length = secondNumberArr.length - 1;
			secondNumber = Number(secondNumberArr.join(''))
			if (secondNumberArr.length)
				display.value = firstNumber + operation + secondNumber;
			else display.value = firstNumber + operation;
		} else {
			display.value = firstNumber;
			step = 1;
		}
	}
}

function getOperator(op) {
	console.log(op);
	if (operation) {
		if (secondNumberArr.length)
			calculateResult();
	}
	step = 2
	operation = op
	display.value = firstNumber + operation
}

function calculateResult() {
	console.log('first number', firstNumber, 'second number', secondNumber)
	if (operation === '+') {
		result = firstNumber + secondNumber
		display.value = result
	} else if (operation === '-') {
		result = firstNumber - secondNumber
		display.value = result
	} else if (operation === '*') {
		result = firstNumber * secondNumber
		display.value = result
	} else if (operation === '/') {
		result = firstNumber / secondNumber
		display.value = result
	}
	display.value = result;
	firstNumber = result;
	numArray = firstNumber.toString().split('')

	console.log(numArray)
	secondNumber = null;
	operation = null;
	step = 1;
	secondNumberArr = [];
}


function clearDisplay() {
	display.value = 0
	firstNumber = null
	secondNumber = null
	step = 0
	operation = null
	result = 0
	numArray = []
	secondNumberArr = []
}



function btn_change(key) {
	
	if (key == "0" || key == "1" || key == "2" || key == "3" || key == "4" || key == "5" || key == "6" || key == "7" || key == "8" || key == "9") {
		document.querySelector('.button' + key).classList.add('active');
		setTimeout(() => {
			document.querySelector('.button' + key).classList.remove('active');
		}, 100);
	} else if (key == 'a' || key == 'A') {
		document.querySelector('.Allclear').classList.add('active');
		setTimeout(() => {
			document.querySelector('.Allclear').classList.remove('active');
			console.log(active)
		}, 100);
	} else if (key == "=" || key == "Enter") {
		document.querySelector('.buttone').classList.add('oi');
		setTimeout(() => {
			document.querySelector('.buttone').classList.remove('oi');
		}, 100);
	}else if(key=='+' || key=='-' || key=='*' || key=='/' || key=='%'){
		document.querySelector('.button' + key).classList.add('oi');
		setTimeout(()=>{
			document.querySelector('.button'+key).classList.add('oi')
		},100)
	}
}

document.addEventListener('keyup', (e) => {
		if (e.key == '1' || e.key == '2' || e.key == '3' || e.key == '4' || e.key == '5' || e.key == '6' || e.key == '7' || e.key == '8' || e.key == '9' || e.key == '0') {
			getNumber(e.key);
			btn_change(e.key);
		} else if (e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/') {
			getOperator(e.key);
			btn_change(e.key);
		} else if (e.key == '=' || e.key == 'Enter') {
			calculateResult(e.key);
			btn_change(e.key);
		}
		else if (e.key == 'a' || e.key == 'A') {
			removeElement(e.key);
			btn_change(e.key);
		} else if (e.key == 'Backspace') {
			clearDisplay(e.key);
			btn_change(e.key);
		}
})
