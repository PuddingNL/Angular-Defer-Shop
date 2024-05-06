import { Component, Input, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-card-hover',
  standalone: true,
  templateUrl: './card-hover.component.html',
  styleUrl: './card-hover.component.css',
  imports: [MatCardModule, MatButtonModule, MatChipsModule],
})
export class CardComponentHover implements OnInit {
    @Input() title = '';
    @Input() description = '';
    @Input() image = '';

  constructor() { }

  ngOnInit(): void {
  }

}
