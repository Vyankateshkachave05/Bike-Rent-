🚲 Bike Rental Shop
Welcome to the Bike Rental Shop project!
This is a simple bike rental system built using HTML, CSS, JavaScript, and Python.
📂 Project Structure
index.html — The main webpage for renting and returning bikes.
![image](https://github.com/user-attachments/assets/4c109d6f-4756-4629-a639-76b88ae2be73)

bike.css — Styles for the bike rental page.
bike.js — JavaScript functionality for renting, billing, and returning bikes.
bike_rental.py — Python classes to simulate the backend logic for bike rentals.
📜 Features
View the number of bikes available.
Rent bikes on a daily or weekly basis.
Get a 30% discount when renting 3 to 5 bikes.
Return bikes and update stock.
Dynamic bill calculation based on rental details.
🖥️ Frontend (HTML, CSS, JavaScript)
index.html
Displays the bike rental form and stock information.
Forms for:
Renting bikes.
Returning bikes.
Displays the final bill.
bike.css
Responsive and centered design.
Clean and minimalistic styles.
Styled input fields, buttons, and sections.
bike.js
Manages the available stock.
Handles form submissions for renting and returning bikes.
Calculates the bill based on:
Rental basis (day → ₹100/day, week → ₹500/week).
Number of bikes.
Duration of rental.
Applies 30% discount for 3–5 bikes.
Updates UI dynamically (stock count, bill).
🐍 Backend Logic (Python)
bike_rental.py
✅ How It Works
View available stock.
Rent bikes by selecting:
Number of bikes.
Rental basis (day/week).
Number of days or weeks.
Bill is calculated and displayed.
Return bikes to update the stock.
Discounts applied automatically if eligible.
📸 Preview
(You can add a screenshot of your webpage here if you want.)
📢 Notes
Only "day" or "week" are accepted as rental basis inputs.
Bill is cleared once bikes are returned.
Rental discount is automatically calculated for 3 to 5 bikes.
