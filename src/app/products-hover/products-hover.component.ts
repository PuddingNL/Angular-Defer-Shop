import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponentHover } from '../card-hover/card-hover.component';
import { products } from '../../assets/products';
import { items } from '../../interfaces/items';

@Component({
  selector: 'app-products-hover',
  templateUrl: './products-hover.component.html',
  styleUrls: ['./products-hover.component.css'],
  standalone: true,
  imports: [CommonModule, CardComponentHover],
})
export class ProductsComponentHover {
    items: items[] = [];

    constructor() {
      this.items = products;
    }
}
