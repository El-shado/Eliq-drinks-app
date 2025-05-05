import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinkSummary } from '../../models/drink.model';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-drink-card', 
  imports: [CommonModule, RouterModule], 
  templateUrl: './drink-card.component.html', 
  styleUrls: ['./drink-card.component.css']
})
export class DrinkCardComponent {
  @Input() drink!: DrinkSummary; // Input property to receive drink data from a parent component
}
