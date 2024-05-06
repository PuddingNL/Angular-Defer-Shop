import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'The Defer Productpage';

  // items: string[] = ['item1', 'item2', 'item3'];

items: {
  title: string,
  description: string,
  image: string
}[] = [
  {
    title: 'Item 1',
    description: 'Description for item 1',
    image: 'https://placekeanu.com/500/500/g'
  },
  {
    title: 'Item 2',
    description: 'Description for item 2',
    image: 'https://placekeanu.com/500/500/y'
  },
  {
    title: 'Item 3',
    description: 'Description for item 3',
    image: 'https://placekeanu.com/500/500/x'
  },
  {
    title: 'Item 4',
    description: 'Description for item 4',
    image: 'https://placekeanu.com/500/500/z'
  }
];


}
