let string=""
let step = 0;
let result = 0;
let firstNumber
let secondNumber
let operation

let numArray = []
let secondNumberArr = []
let display = document.getElementById('display')
let buttons=document.querySelectorAll('.button')


buttons.forEach((button)=>{
    button.addEventListener('click', function(element) {
		console.log({element, elemss1: element.target.innerHTML})
       if(element.target.innerHTML == '=') {
		   console.log('RESULT = : ', result)
        result=calculateResult()
        document.querySelector('input').value=result
       }
       else if(element.target.innerHTML=='c'){
        result=clearDisplay();
       }
	   else if(element.target.innerHTML=='AC'){
			result=removeElement();
	   }
       else{
		console.log("ELELE")
		getNumber(element)
        string=string+element.target.innerHTML
        document.querySelector('input').value=string
       }
    })
})
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
    return result;
}
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

function removeElement(){
	if (step === 0 || step === 1){
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
