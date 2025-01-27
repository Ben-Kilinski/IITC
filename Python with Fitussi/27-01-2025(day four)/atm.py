import tkinter as tk
from tkinter import messagebox

balance = 0  # Saldo inicial

def deposit():
    global balance
    try:
        amount = float(amount_entry.get())
        balance += amount
        messagebox.showinfo("Depósito", f"Você depositou {amount} com sucesso!")
        update_balance_label()
    except ValueError:
        messagebox.showerror("Erro", "Insira um valor válido!")

def withdraw():
    global balance
    try:
        amount = float(amount_entry.get())
        if amount > balance:
            messagebox.showerror("Erro", "Saldo insuficiente!")
        else:
            balance -= amount
            messagebox.showinfo("Saque", f"Você sacou {amount} com sucesso!")
            update_balance_label()
    except ValueError:
        messagebox.showerror("Erro", "Insira um valor válido!")

def update_balance_label():
    balance_label.config(text=f"Saldo Atual: {balance}")

# GUI
root = tk.Tk()
root.title("ATM Simples")

tk.Label(root, text="Valor:").grid(row=0, column=0, padx=10, pady=5)
amount_entry = tk.Entry(root) # cria um campo de entrada 
amount_entry.grid(row=0, column=1, padx=10, pady=5)

tk.Button(root, text="Depositar", command=deposit).grid(row=1, column=0, pady=10)
tk.Button(root, text="Sacar", command=withdraw).grid(row=1, column=1, pady=10)

balance_label = tk.Label(root, text="Saldo Atual: 0")
balance_label.grid(row=2, column=0, columnspan=2, pady=10)

root.mainloop()
