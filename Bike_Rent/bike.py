## your code goes here ##
class BikeRental:
    def __init__(self, stock=100):
        self.stock = stock
        print("Welcome to rental bike shop.")

    def displaystock(self):
        print(f"Total number of stock available: {self.stock}")

bike_shop = BikeRental()

class Customer(BikeRental):
  bill = 0
  def __init__(self,number_of_bikes, rentalBasis,number_of_days_or_weeks):
    self.number_of_bikes = number_of_bikes
    self.rentalBasis = rentalBasis.lower()
    self.number_of_days_or_weeks = number_of_days_or_weeks

  def rentBike(self):
    if self.number_of_bikes <= 0:
      print("Number of bikes should be positive!")
    elif self.number_of_bikes > bike_shop.stock:
      print(f" Only {bike_shop.stock} available to rent.")
    else:
      print(f"Number of bikes rented: {self.number_of_bikes}")
      bike_shop.stock -= self.number_of_bikes
      print("Available bikes",bike_shop.stock)

  def returnBike(self):
     if self.rentalBasis == 'day':
      rate = 100
     elif self.rentalBasis == 'week':
      rate = 500
     else:
       print("Invalid rental basis.")
       return
     total = self.number_of_days_or_weeks * rate * self.number_of_bikes

     if 3<= self.number_of_bikes <= 5:
      discount = total * 0.3
      total -= discount
      print("You are eligible for Family rental promotion of 30% discount")

     print(f"Total bill: ₹{total}")
     Customer.bill = total


