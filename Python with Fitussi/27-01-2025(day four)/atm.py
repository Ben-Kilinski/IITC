import tkinter as tk
from tkinter import messagebox

balance = 0  # Initial balance

def update_balance_label():
    balance_label.config(text=f"Current Balance: {balance}")

def deposit():
    global balance
    try:
        amount = float(amount_entry.get())
        balance += amount
        messagebox.showinfo("Deposit", f"You successfully deposited {amount}!")
        update_balance_label()
    except ValueError:
        messagebox.showerror("Error", "Please enter a valid amount!")

def withdraw():
    global balance
    try:
        amount = float(amount_entry.get())
        if amount > balance:
            messagebox.showerror("Error", "Insufficient funds!")
        else:
            balance -= amount
            messagebox.showinfo("Withdraw", f"You successfully withdrew {amount}!")
            update_balance_label()
    except ValueError:
        messagebox.showerror("Error", "Please enter a valid amount!")



# GUI
root = tk.Tk()
root.title("Simple ATM")

tk.Label(root, text="Amount:").grid(row=0, column=0, padx=10, pady=5)
amount_entry = tk.Entry(root)  # Creates an entry field
amount_entry.grid(row=0, column=1, padx=10, pady=5)

tk.Button(root, text="Deposit", command=deposit).grid(row=1, column=0, pady=10)
tk.Button(root, text="Withdraw", command=withdraw).grid(row=1, column=1, pady=10)

balance_label = tk.Label(root, text="Current Balance: 0")
balance_label.grid(row=2, column=0, columnspan=2, pady=10)

root.mainloop()
