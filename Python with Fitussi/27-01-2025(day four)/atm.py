import tkinter as tk
from tkinter import messagebox
import pandas as pd

# Initialize the transaction history file
TRANSACTION_FILE = "transactions.csv"

# Load or create a transaction history DataFrame
try:
    df = pd.read_csv(TRANSACTION_FILE)
except FileNotFoundError:
    df = pd.DataFrame(columns=["Name", "Transaction", "Amount", "Balance"])


class ATM:
    def __init__(self):
        self.balance = 0
        self.name = None

    def create_account(self, name, initial_balance):
        self.name = name
        self.balance = initial_balance
        self.save_transaction("Account Created", initial_balance)
        messagebox.showinfo("Account Created", f"Welcome {name}, your account is ready!")

    def deposit(self, amount):
        self.balance += amount
        self.save_transaction("Deposit", amount)
        messagebox.showinfo("Success", f"{amount} deposited successfully!")

    def withdraw(self, amount):
        if amount > self.balance:
            messagebox.showerror("Error", "Insufficient balance!")
        else:
            self.balance -= amount
            self.save_transaction("Withdrawal", amount)
            messagebox.showinfo("Success", f"{amount} withdrawn successfully!")

    def save_transaction(self, transaction, amount):
        global df
        df = pd.concat(
            [df, pd.DataFrame({"Name": [self.name], "Transaction": [transaction], "Amount": [amount], "Balance": [self.balance]})],
            ignore_index=True,
        )
        df.to_csv(TRANSACTION_FILE, index=False)

    def view_transactions(self):
        if self.name is None:
            messagebox.showerror("Error", "Create an account first!")
            return

        transactions = df[df["Name"] == self.name]
        if transactions.empty:
            messagebox.showinfo("Transactions", "No transactions yet!")
        else:
            messagebox.showinfo("Transactions", transactions.to_string(index=False))


# GUI Implementation
atm = ATM()

def create_account_gui():
    name = name_entry.get()
    initial_balance = balance_entry.get()
    if not name or not initial_balance.isdigit():
        messagebox.showerror("Error", "Invalid input!")
        return

    atm.create_account(name, float(initial_balance))
    balance_label.config(text=f"Balance: {atm.balance}")


def deposit_gui():
    amount = amount_entry.get()
    if not amount.isdigit():
        messagebox.showerror("Error", "Enter a valid amount!")
        return

    atm.deposit(float(amount))
    balance_label.config(text=f"Balance: {atm.balance}")


def withdraw_gui():
    amount = amount_entry.get()
    if not amount.isdigit():
        messagebox.showerror("Error", "Enter a valid amount!")
        return

    atm.withdraw(float(amount))
    balance_label.config(text=f"Balance: {atm.balance}")


def view_transactions_gui():
    atm.view_transactions()


# Tkinter GUI
root = tk.Tk()
root.title("Mini ATM")

# Account creation
tk.Label(root, text="Name:").grid(row=0, column=0, padx=10, pady=5)
name_entry = tk.Entry(root)
name_entry.grid(row=0, column=1, padx=10, pady=5)

tk.Label(root, text="Initial Balance:").grid(row=1, column=0, padx=10, pady=5)
balance_entry = tk.Entry(root)
balance_entry.grid(row=1, column=1, padx=10, pady=5)

tk.Button(root, text="Create Account", command=create_account_gui).grid(row=2, column=0, columnspan=2, pady=10)

# Transactions
tk.Label(root, text="Amount:").grid(row=3, column=0, padx=10, pady=5)
amount_entry = tk.Entry(root)
amount_entry.grid(row=3, column=1, padx=10, pady=5)

tk.Button(root, text="Deposit", command=deposit_gui).grid(row=4, column=0, pady=5)
tk.Button(root, text="Withdraw", command=withdraw_gui).grid(row=4, column=1, pady=5)
tk.Button(root, text="View Transactions", command=view_transactions_gui).grid(row=5, column=0, columnspan=2, pady=10)

# Display balance
balance_label = tk.Label(root, text="Balance: 0")
balance_label.grid(row=6, column=0, columnspan=2, pady=10)

# Run the app
root.mainloop()

