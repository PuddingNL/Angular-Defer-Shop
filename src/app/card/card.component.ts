import { Component, Input, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  imports: [MatCardModule, MatButtonModule],
})
export class CardComponent implements OnInit {
    @Input() title = '';
    @Input() description = '';
    @Input() image = '';

  constructor() { }

  ngOnInit(): void {
  }

}
