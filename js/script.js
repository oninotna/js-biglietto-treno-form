// * VARIABILI DI INPUT
const userDate = document.getElementById("user-date");
const tripDistance = document.getElementById("trip-distance");
const ageRange = document.getElementById("age-range");
const formInput = document.getElementById("form-input");
const generateButton = document.getElementById("generate-btn");
const priceForKm = 0.21;


// * VARIABILI DI OUTPUT
let finalPrice = 0;

formInput.addEventListener("submit", (event) => {
    event.preventDefault();

    const totalPrice = tripDistance.value * priceForKm;
    
    if (ageRange.value === "minorenne") {
        const discoutnUn = (totalPrice * 20) / 100;
        finalPrice = totalPrice - discoutnUn;
    } 
    else if (ageRange.value === "over65") {
        const discoutnOv = (totalPrice * 40) / 100;
        finalPrice = totalPrice - discoutnOv; 
    }
    else {
        finalPrice = totalPrice;
    }

    console.log(userDate.value);
    console.log(tripDistance.value);
    console.log(ageRange.value);
    console.log(totalPrice.toFixed(2)); 
    console.log(finalPrice.toFixed(2));   
});
