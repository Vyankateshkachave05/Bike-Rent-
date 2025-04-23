// Initial stock of bikes
let stock = 100;

// DOM Elements
const stockCount = document.getElementById('stock-count');
const rentalForm = document.getElementById('rental-form');
const returnForm = document.getElementById('return-form');
const billDiv = document.getElementById('bill');

// Rent a bike
rentalForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const numberOfBikes = parseInt(document.getElementById('number-of-bikes').value);
    const rentalBasis = document.getElementById('rental-basis').value.toLowerCase();
    const daysOrWeeks = parseInt(document.getElementById('days-or-weeks').value);

    if (numberOfBikes <= 0) {
        alert("Number of bikes should be positive!");
        return;
    }

    if (numberOfBikes > stock) {
        alert(`Only ${stock} bikes are available to rent.`);
        return;
    }

    // Rent bikes
    stock -= numberOfBikes;
    stockCount.textContent = stock;

    let rate = rentalBasis === 'day' ? 100 : rentalBasis === 'week' ? 500 : 0;
    if (rate === 0) {
        alert("Invalid rental basis.");
        return;
    }

    let total = rate * daysOrWeeks * numberOfBikes;

    // Apply discount for 3-5 bikes
    if (numberOfBikes >= 3 && numberOfBikes <= 5) {
        let discount = total * 0.3;
        total -= discount;
        alert("You are eligible for a 30% discount.");
    }

    billDiv.innerHTML = `Total Bill: ₹${total}`;
});

// Return bikes
returnForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const numberOfBikesReturned = parseInt(document.getElementById('number-of-bikes').value);

    if (numberOfBikesReturned <= 0) {
        alert("Invalid number of bikes.");
        return;
    }

    // Return bikes and update stock
    stock += numberOfBikesReturned;
    stockCount.textContent = stock;

    alert(`You have returned ${numberOfBikesReturned} bikes.`);
    billDiv.innerHTML = ''; // Clear the bill after return
});
