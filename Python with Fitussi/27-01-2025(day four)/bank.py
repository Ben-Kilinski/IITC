### 1. **Bank Account Management System**
# **Objective:**
# Create a `BankAccount` class to simulate basic banking operations
# **Tasks:**
# - Initialize an account with an account holder and an initial balance.
# - Implement methods to deposit, withdraw, and check the account balance.
# - Create an account for a user, perform deposits and withdrawals, and check the balance.

class BankAccount:
    def __init__(self, holder_name, initial_balance=0):
        """
        Initialize the BankAccount object with the account holder's name
        and an optional initial balance (default is 0).
        """
        self.holder_name = holder_name
        self.balance = initial_balance

    def deposit(self, amount):
        """
        Deposit a specified amount into the account.
        """
        if amount > 0:
            self.balance += amount
            print(f"Deposited {amount}. New balance: {self.balance}")
        else:
            print("Deposit amount must be positive.")

    def withdraw(self, amount):
        """
        Withdraw a specified amount from the account if sufficient funds are available.
        """
        if amount > 0:
            if self.balance >= amount:
                self.balance -= amount
                print(f"Withdrew {amount}. New balance: {self.balance}")
            else:
                print("Insufficient balance.")
        else:
            print("Withdrawal amount must be positive.")

    def check_balance(self):
        """
        Print the current account balance.
        """
        print(f"Account Balance: {self.balance}")


# Example Usage:
# Create an account
account = BankAccount("John Doe", 100)

# Perform operations
account.deposit(50)         # Deposit money
account.withdraw(30)        # Withdraw money
account.check_balance()     # Check the balance
account.withdraw(200)       # Try to withdraw more than the balance
account.deposit(-20)        # Invalid deposit

