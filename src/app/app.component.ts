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
  description: string
}[] = [
  {
    title: 'Item 1',
    description: 'Description for item 1'
  },
  {
    title: 'Item 2',
    description: 'Description for item 2'
  },
  {
    title: 'Item 3',
    description: 'Description for item 3'
  },
  {
    title: 'Item 4',
    description: 'Description for item 4'
  }
];


}
