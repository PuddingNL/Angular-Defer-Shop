import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { MatButtonModule } from '@angular/material/button';

import { products } from '../../assets/products';
import { items } from '../../interfaces/items';

@Component({
  selector: 'app-products-click',
  templateUrl: './products-click.component.html',
  styleUrls: ['./products-click.component.css'],
  standalone: true,
  imports: [CommonModule, CardComponent, MatButtonModule],
})
export class ProductsComponentClick {
    
      items: items[] = [];
      slice: number = 8;

      constructor() {
        this.items = products;
      }

      trackByFn(index: number, item: {title: string, description: string, image: string}): string {
          return item.title;
      }

      loadMoreCards() {
        this.slice += 8;
      }
}
