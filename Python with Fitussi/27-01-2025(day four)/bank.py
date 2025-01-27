### 1. **Bank Account Management System**
# **Objective:**
# Create a `BankAccount` class to simulate basic banking operations
# **Tasks:**
# - Initialize an account with an account holder and an initial balance.
# - Implement methods to deposit, withdraw, and check the account balance.
# - Create an account for a user, perform deposits and withdrawals, and check the balance.

class BankAccount:
    def __init__(self, holder_name, initial_balance=0):
    
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

class SavingsAccount(BankAccount):
    def deposit(self, amount):
        """
        Deposit a specified amount into the account with a 2% bonus.
        """
        if amount > 0:
            bonus = amount * 0.02  # Calculate 2% bonus
            total_deposit = amount + bonus
            self.balance += total_deposit
            print(f"Deposited {amount} with a 2% bonus of {bonus:.2f}. New balance: {self.balance}")
        else:
            print("Deposit amount must be positive.")


# Example Usage:
# Create a savings account
savings_account = SavingsAccount("Jane Doe", 500)

# Perform operations
savings_account.deposit(100)       # Deposit money with a bonus
savings_account.withdraw(50)       # Withdraw money
savings_account.check_balance()    # Check the balance

account = BankAccount("John Doe", 100)

# Perform operations
account.deposit(50)         # Deposit money
account.withdraw(30)        # Withdraw money
account.check_balance()     # Check the balance
account.withdraw(200)       # Try to withdraw more than the balance
account.deposit(-20)        # Invalid deposit

