import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../services/product';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  products: any[] = [];
  filteredProducts: any[] = [];
  selectedCategory = 'All';

  constructor(private productService: Product) {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  filterCategory(category: string) {
    this.selectedCategory = category;

    if (category === 'All') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(
        product => product.category === category
      );
    }
  }
}