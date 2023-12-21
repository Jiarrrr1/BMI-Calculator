// Get the elements and make it variables

const finalResult = document.querySelector('.bmi-description');
const weightInput = document.querySelector('#inputweight');
const heightInput = document.querySelector('#inputheight');
const btnCalcBmi = document.querySelector('.btnCalc');
const btnResetInput = document.querySelector('.btnReset');
const bmiResult = document.querySelector('.bmi-value');
const resultForm = document.querySelector('.sub-con');
const inputWeightform = document.querySelector('.height-input');
const inputHeightform = document.querySelector('.weight-input');

// Start the functions when the button clicked
btnCalcBmi.addEventListener('click', function () {
    // Calculating the inputs
    const weight = weightInput.value;
    const height = heightInput.value;
    const bmiValue = weight / (height * height);

    heightInput.addEventListener('click', resetHeightInput);
    weightInput.addEventListener('click', resetWeightInput);

    // Displaying the functions/outputs
    blankInput()
    changeColor();
    NaNvalue(bmiValue)
    const lastResults = checkStatus(Math.round(bmiValue));
    console.log(lastResults);
    finalResult.textContent = lastResults;


    // Declaring the funtions that change the theme color based on users BMI
    function changeColor() {
        btnCalcBmi.classList.remove('default', 'green', 'red', 'orange', 'black');
        btnResetInput.classList.remove('default', 'green', 'red', 'orange', 'black');
        bmiResult.classList.remove('default', 'green', 'red', 'orange', 'black');
        resultForm.classList.remove('default', 'green', 'red', 'orange', 'black');
        inputWeightform.classList.remove('default', 'green', 'red', 'orange', 'black');
        inputHeightform.classList.remove('default', 'green', 'red', 'orange', 'black');

        if (isNaN(bmiValue)) {
            btnCalcBmi.classList.add('default');
            btnResetInput.classList.add('default');
            bmiResult.classList.add('default');
            resultForm.classList.add('default');
            inputWeightform.classList.add('default');
            inputHeightform.classList.add('default');
        }
        if (bmiValue <= 18.4) {
            btnCalcBmi.classList.add('red');
            btnResetInput.classList.add('red');
            bmiResult.classList.add('red');
            resultForm.classList.add('red');
            inputWeightform.classList.add('red');
            inputHeightform.classList.add('red');

        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
            btnCalcBmi.classList.add('green');
            btnResetInput.classList.add('green');
            bmiResult.classList.add('green');
            resultForm.classList.add('green');
            inputWeightform.classList.add('green');
            inputHeightform.classList.add('green');
        } else if (bmiValue >= 25 && bmiValue <= 39.9) {
            btnCalcBmi.classList.add('orange');
            btnResetInput.classList.add('orange');
            bmiResult.classList.add('orange');
            resultForm.classList.add('orange');
            inputWeightform.classList.add('orange');
            inputHeightform.classList.add('orange');

        } else {
            btnCalcBmi.classList.add('black');
            btnResetInput.classList.add('black');
            bmiResult.classList.add('black');
            resultForm.classList.add('black');
            inputWeightform.classList.add('black');
            inputHeightform.classList.add('black');
        }
    }
});

function NaNvalue(bmiValue) {
    if (isNaN(bmiValue)) {
        bmiResult.textContent = "00";
    }



    else {
        bmiResult.textContent = Math.round(bmiValue);
    }

};

// Declare function to check the status of your BMI
function checkStatus(bmiValue) {
    if (isNaN(bmiValue)) {
        return `Please Input the valid weight and height`;
    }
    else if (bmiValue <= 18.4) {
        return `Oops! looks like you are Underweight`;
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        return ` Yay! you are Normal`;
    } else if (bmiValue >= 25 && bmiValue <= 39.9) {
        return `Oops! looks like you are Overweight`;
    } else {
        return `Oops! looks like and you are Obese`;
    }
}

function blankInput() {
    if (weightInput == '') {
        return `Please Input your weight`;


    }

    else if (heightInput == '') {
        return `Please Input your height`;

    }
}



function resetWeightInput() {
    // Clear input values using value property
    weightInput.value = '';

}

function resetHeightInput() {
    // Clear input values using value property

    heightInput.value = '';
}

// Reset the inputs when reset button clicked
btnResetInput.addEventListener('click', function () {
    weightInput.value = '';
    heightInput.value = '';
    bmiResult.textContent = '00';
    finalResult.textContent = '';
    btnCalcBmi.classList.add('default');
    btnResetInput.classList.add('default');
    bmiResult.classList.add('default');
    resultForm.classList.add('default');
    inputWeightform.classList.add('default');
    inputHeightform.classList.add('default');
});

