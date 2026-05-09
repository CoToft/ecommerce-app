import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Product {

  products = [
    {
      id: 1,
      name: 'Gaming Laptop',
      price: 1299.99,
      rating: 4.8,
      description: 'High performance gaming laptop with RTX graphics.',
      category: 'Laptops',
      image: '/images/laptop.jpg'
    },

    {
      id: 2,
      name: 'Wireless Headphones',
      price: 199.99,
      rating: 4.5,
      description: 'Noise cancelling wireless headphones.',
      category: 'Accessories',
      image: '/images/headphones.jpg'
    },

    {
      id: 3,
      name: 'Mechanical Keyboard',
      price: 149.99,
      rating: 4.7,
      description: 'RGB mechanical keyboard for gaming and productivity.',
      category: 'Accessories',
      image: '/images/keyboard.jpg'
    },

    {
      id: 4,
      name: 'Gaming Mouse',
      price: 79.99,
      rating: 4.6,
      description: 'High precision gaming mouse with customizable buttons.',
      category: 'Gaming',
      image: '/images/mouse.jpg'
    },

    {
      id: 5,
      name: '4K Monitor',
      price: 399.99,
      rating: 4.4,
      description: 'Ultra HD 4K monitor with vibrant display.',
      category: 'Monitors',
      image: '/images/monitor.jpg'
    },

    {
      id: 6,
      name: 'Smartphone',
      price: 899.99,
      rating: 4.3,
      description: 'Latest generation smartphone with advanced camera system.',
      category: 'Phones',
      image: '/images/phone.jpg'
    }
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
}