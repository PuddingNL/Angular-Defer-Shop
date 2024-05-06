import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [CommonModule, CardComponent],
})
export class ProductsComponent {
    items: {
        title: string,
        description: string,
        image: string
      }[] = [
        {
          title: 'Item 1',
          description: 'Description for item 1',
          image: 'https://placekeanu.com/500/500/a'
        },
        {
          title: 'Item 2',
          description: 'Description for item 2',
          image: 'https://placekeanu.com/500/500/b'
        },
        {
          title: 'Item 3',
          description: 'Description for item 3',
          image: 'https://placekeanu.com/500/500/d'
        },
        {
          title: 'Item 4',
          description: 'Description for item 4',
          image: 'https://placekeanu.com/500/500/r'
        },
        {
            title: 'Item 1',
            description: 'Description for item 1',
            image: 'https://placekeanu.com/500/500/a'
          },
          {
            title: 'Item 2',
            description: 'Description for item 2',
            image: 'https://placekeanu.com/500/500/b'
          },
          {
            title: 'Item 3',
            description: 'Description for item 3',
            image: 'https://placekeanu.com/500/500/d'
          },
          {
            title: 'Item 4',
            description: 'Description for item 4',
            image: 'https://placekeanu.com/500/500/r'
          },
          {
            title: 'Item 1',
            description: 'Description for item 1',
            image: 'https://placekeanu.com/500/500/a'
          },
          {
            title: 'Item 2',
            description: 'Description for item 2',
            image: 'https://placekeanu.com/500/500/b'
          },
          {
            title: 'Item 3',
            description: 'Description for item 3',
            image: 'https://placekeanu.com/500/500/d'
          },
          {
            title: 'Item 4',
            description: 'Description for item 4',
            image: 'https://placekeanu.com/500/500/r'
          },
          {
            title: 'Item 1',
            description: 'Description for item 1',
            image: 'https://placekeanu.com/500/500/a'
          },
          {
            title: 'Item 2',
            description: 'Description for item 2',
            image: 'https://placekeanu.com/500/500/b'
          },
          {
            title: 'Item 3',
            description: 'Description for item 3',
            image: 'https://placekeanu.com/500/500/d'
          },
          {
            title: 'Item 4',
            description: 'Description for item 4',
            image: 'https://placekeanu.com/500/500/r'
          }
      ];
}
