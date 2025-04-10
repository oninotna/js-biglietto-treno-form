// * VARIABILI DI INPUT
const userInfo = document.getElementById("user-info");
const tripDistance = document.getElementById("trip-distance");
const ageRange = document.getElementById("age-range");
const formInput = document.getElementById("form-input");
const generateButton = document.getElementById("generate-btn");
const deleteButton = document.getElementById("delete-btn");
const priceForKm = 0.21;


// * VARIABILI DI OUTPUT
let finalPrice = 0;
const ticketUserInfo = document.getElementById("ticket-user-info");
const ticketPlane = document.getElementById("ticket-plane");
const ticketDiscount = document.getElementById("ticket-discount");
const ticketTripDistance = document.getElementById("ticket-trip-distance");
const ticketFinalPrice = document.getElementById("ticket-final-price");


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

    ticketUserInfo.append(userInfo.value);
    ticketPlane.append(ageRange.value);
    ticketTripDistance.append(tripDistance.value);
    ticketFinalPrice.append(`${finalPrice.toFixed(2)}€`);

    console.log(userInfo.value);
    console.log(tripDistance.value);
    console.log(ageRange.value);
    console.log(totalPrice.toFixed(2)); 
    console.log(finalPrice.toFixed(2));   
});

deleteButton.addEventListener("click", () => {

}); 





// document.getElementById('ticket-discount').innerHTML = `
//         <div>
//         </div>
//     `;


//     const container = document.createElement('div')
//     container.classList.add('container', 'pippo');

//     const row = document.createElement('div');
//     row.classList.add('row');

//     for (let i = 0; i < 5; i++) {
//         const col = document.createElement('div');
//         col.classList.add('col');
//         row.appendChild(col);
//     }

//     container.appendChild(row);
//     ticketUserInfo.append(container);
// function myCreateElement(tagName, classList) {
//     const el = document.createElement(tagName);
//     // ...
//     return el;
// }