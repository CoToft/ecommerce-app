import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent {

  cartItems: any[] = [];

  constructor(public cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
  }
}