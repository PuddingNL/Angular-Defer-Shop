import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

import { products } from '../../assets/products';
import { items } from '../../interfaces/items';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [CommonModule, CardComponent],
})
export class ProductsComponent {
    
      items: items[] = [];

      constructor() {
        this.items = products;
      }

      trackByFn(index: number, item: {title: string, description: string, image: string}): string {
          return item.title;
      }

}
