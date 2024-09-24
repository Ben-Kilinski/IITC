// Products array (already provided)
const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Smartphone', price: 600 },
    { id: 3, name: 'Headphones', price: 100 },
    { id: 4, name: 'Keyboard', price: 50 },
    { id: 5, name: 'Mouse', price: 30 },
    { id: 6, name: 'Monitor', price: 300 },
    { id: 7, name: 'Printer', price: 150 },
    { id: 8, name: 'Webcam', price: 80 },
    { id: 9, name: 'USB Cable', price: 10 },
    { id: 10, name: 'External Hard Drive', price: 120 },
  ];
  
  // Track added products
  const addedProducts = {};
  
  // Reference table and product list
  const tableBody = document.querySelector('#product-table tbody');
  const totalPriceEl = document.getElementById('total-price');
  const productList = document.getElementById('product-list');
  
  // Initialize product buttons
  products.forEach(product => {
    const button = document.createElement('button');
    button.textContent = `${product.name} - $${product.price}`;
    button.addEventListener('click', () => addProductToTable(product));
    productList.appendChild(button);
  });
  
  // Add product to table
  function addProductToTable(product) {
    if (addedProducts[product.id]) {
      // Increase quantity if product already exists
      const row = addedProducts[product.id].row;
      const quantityInput = row.querySelector('.quantity');
      quantityInput.value = parseInt(quantityInput.value) + 1;
      updateRowTotal(row, product.price);
    } else {
      // Create new row for the product
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${product.name}</td>
        <td>$${product.price}</td>
        <td><input type="number" class="quantity" value="1" min="1"></td>
        <td class="row-total">$${product.price}</td>
        <td><button class="remove">Remove</button></td>
      `;
      tableBody.appendChild(row);
  
      // Store product reference
      addedProducts[product.id] = { product, row };
  
      // Add event listeners
      row.querySelector('.quantity').addEventListener('input', (e) => updateRowTotal(row, product.price));
      row.querySelector('.remove').addEventListener('click', () => removeProduct(row, product.id));
    }
  
    updateTotalPrice();
  }
  
  // Update row total
  function updateRowTotal(row, price) {
    const quantity = parseInt(row.querySelector('.quantity').value);
    const total = price * quantity;
    row.querySelector('.row-total').textContent = `$${total}`;
    updateTotalPrice();
  }
  
  // Remove product
  function removeProduct(row, productId) {
    row.remove();
    delete addedProducts[productId];
    updateTotalPrice();
  }
  
  // Update total price for all products
  function updateTotalPrice() {
    let totalPrice = 0;
    Object.values(addedProducts).forEach(({ row, product }) => {
      const quantity = parseInt(row.querySelector('.quantity').value);
      totalPrice += product.price * quantity;
    });
    totalPriceEl.textContent = `$${totalPrice}`;
  }
  