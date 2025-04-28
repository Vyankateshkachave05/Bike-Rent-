📒 Bike Rental System
A simple Python-based Bike Rental System where customers can rent bikes on a daily or weekly basis, return them, and receive billing with possible discounts — all through a command-line interface.

🚀 Key Features

🏍️ Rent bikes based on day or week

🔍 View the number of bikes currently in stock

🧾 Return bikes and generate a bill

🏷️ Get a 30% Family Discount when renting between 3 to 5 bikes

❌ Exit the program when done

🛠 Technologies Used
Python 3

💻 How to Run
Ensure Python 3 is installed on your machine.

Copy and save the script in a .py file (e.g., bike_rental.py).

Open Terminal (macOS/Linux) or Command Prompt (Windows).

Navigate to the location of your file.

Run the script:

bash
Copy
Edit
python bike_rental.py
📂 Code Structure
BikeRental class:

Initializes bike stock.

Displays the current number of available bikes.

Customer class (inherits from BikeRental):

Handles renting bikes, validating stock and quantity.

Handles bike returns, calculates total cost based on rental basis (day/week).

Applies a 30% discount if renting between 3 and 5 bikes.

📢 Important Notes
Bikes can only be rented if the requested quantity is positive and available in stock.

The rental basis must be either "day" or "week".

The billing rate:

₹100 per day per bike

₹500 per week per bike

A 30% discount automatically applies if 3 to 5 bikes are rented at once (Family Promotion).

The bike stock updates when bikes are rented and returned.

📊 Example Program Flow
A customer specifies:

Number of bikes

Rental basis ('day' or 'week')

Number of days or weeks for rental

Customer rents bikes (stock decreases).

Customer returns bikes (bill is calculated and displayed).

