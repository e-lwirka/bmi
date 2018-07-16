const bmiForm = document.querySelector("#bmi-form");
const heightInput = document.querySelector("#height-input");
const weightInput = document.querySelector("#weight-input");

bmiForm.addEventListener("submit", calculateBMI);

function calculateBMI(event) {
    event.preventDefault();

    // BMI = weight [kg] / height [m] ^ 2
    const bmi = weightInput.value / Math.pow(heightInput.value / 100, 2);
    alert(`Twoje BMI wynosi ${bmi}`);
}

