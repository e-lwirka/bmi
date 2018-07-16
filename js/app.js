const submitButton = document.querySelector("#submit");
const heightInput = document.querySelector("#height-input");
const weightInput = document.querySelector("#weight-input");

submitButton.addEventListener("click", calculateBMI);

function calculateBMI() {
    // BMI = weight [kg] / height [m] ^ 2
    const bmi = weightInput.value / Math.pow(heightInput.value / 100, 2);
    alert(`Twoje BMI wynosi ${bmi}`);
}

