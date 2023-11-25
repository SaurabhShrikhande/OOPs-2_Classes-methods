class Product {
    constructor(name, price, stockQuantity) {
      this.name = name;
      this.price = price;
      this.stockQuantity = stockQuantity;
    }
  
    reduceStock(quantity) {
      if (quantity <= this.stockQuantity) {
        this.stockQuantity -= quantity;
        return true;
      } else {
        console.log(`Not enough stock available for ${this.name}`);
        return false;
      }
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addToCart(product, quantity) {
      if (product.reduceStock(quantity)) {
        this.items.push({ product, quantity });
        console.log(`${quantity} ${product.name}(s) added to the cart.`);
      }
    }
  
    calculateTotal() {
      return this.items.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0);
    }
  
    checkout() {
      const total = this.calculateTotal();
      console.log(`Total: $${total}`);
      this.items.forEach((item) => {
        console.log(`${item.quantity} ${item.product.name}(s) - $${item.product.price * item.quantity}`);
      });
      console.log('Thank you for shopping with us!');
      this.items = [];
    }
  }
  
  class Customer {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.shoppingCart = new ShoppingCart();
    }
  }
  
  // Example usage:
  
  // Create products
  const laptop = new Product('Laptop', 800, 10);
  const phone = new Product('Phone', 400, 5);
  
  // Create a customer
  const customer = new Customer('John Doe', 'john@example.com');
  
  // Add products to the shopping cart
  customer.shoppingCart.addToCart(laptop, 2);
  customer.shoppingCart.addToCart(phone, 1);
  
  // Checkout
  customer.shoppingCart.checkout();
  
  // Verify stock quantity after checkout
  console.log(`Stock quantity of Laptop: ${laptop.stockQuantity}`);
  console.log(`Stock quantity of Phone: ${phone.stockQuantity}`);