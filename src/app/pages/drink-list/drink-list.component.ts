import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinkSummary } from '../../models/drink.model';
import { RouterModule } from '@angular/router';
import { ConfigService } from '../../core/services/config.service';
import { DrinkService } from '../../core/services/drink.service';
import { DrinkCardComponent } from '../../shared/drink-card/drink-card.component';

/**
 * Component responsible for displaying a list of drinks.
 * It fetches the drinks data from the DrinkService and handles loading and error states.
 */
@Component({
  standalone: true,
  selector: 'app-drink-list',
  imports: [CommonModule, RouterModule, DrinkCardComponent],
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css']
})
export class DrinkListComponent implements OnInit {
  drinks: DrinkSummary[] = [];

  /**
   * Constructor to inject the DrinkService and ConfigService dependencies.
   * @param drinkService - Service to fetch drink data from the API.
   * @param configService - Service to manage application configuration.
   */
  constructor(private drinkService: DrinkService, private configService: ConfigService) {}

  loading = true; // Indicates whether the data is still being loaded.
  error: string | null = null; // Stores any error message encountered during data fetching.

  /**
   * Lifecycle hook that is called after the component is initialized.
   * It loads the configuration and fetches the list of drinks from the API.
   */
  async ngOnInit(): Promise<void> {
    try {
      await this.configService.loadConfig(); // Load the application configuration.
      const drinksObservable = await this.drinkService.getDrinks(); // Fetch the drinks data.
      drinksObservable.subscribe({
        next: (drinks: DrinkSummary[]) => {
          this.drinks = drinks; // Update the drinks list with the fetched data.
          this.loading = false; // Set loading to false after fetching drinks.
        },
        error: (error: unknown) => {
          console.error('Failed to fetch drinks:', error); // Log the error to the console.
          this.error = 'Failed to fetch drinks'; // Set an error message.
          this.loading = false; // Set loading to false even on error.
        }
      });
    } catch (error) {
      console.error('Failed to load configuration or fetch drinks:', error); // Log the error to the console.
      this.error = 'Failed to load configuration or fetch drinks'; // Set an error message.
      this.loading = false; // Set loading to false even on error.
    }
  }
}
