import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DrinkService } from '../../core/services/drink.service';
import { DrinkDetail } from '../../models/drink.model';
import { CommonModule } from '@angular/common';

/**
 * Component responsible for displaying the details of a specific drink.
 * It fetches the drink details from the DrinkService and processes the ingredients.
 */
@Component({
  standalone: true,
  selector: 'app-drink-details',
  imports: [CommonModule, RouterModule], 
  templateUrl: './drink-detail.component.html',  
  styleUrls: ['./drink-detail.component.css']   
})
export class DrinkDetailsComponent implements OnInit {
  drink!: DrinkDetail; // Stores the details of the selected drink.
  ingredients: string[] = []; // Stores the list of ingredients for the drink.

  /**
   * Constructor to inject dependencies for route handling and drink data fetching.
   * @param route - Provides access to route parameters.
   * @param drinkService - Service to fetch drink details from the API.
   */
  constructor(
    private route: ActivatedRoute,
    private drinkService: DrinkService
  ) {}

  /**
   * Lifecycle hook that is called after the component is initialized.
   * It fetches the drink details based on the ID from the route parameters.
   */
  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id'); // Get the drink ID from the route.
    if (id) {
      try {
        const drinkObservable = await this.drinkService.getDrinkDetails(id); // Fetch the drink details.
        drinkObservable.subscribe((res: any) => {
          this.drink = res.drinks[0]; // Assign the fetched drink details.
          this.extractIngredients(this.drink); // Extract the ingredients from the drink details.
        });
      } catch (error) {
        console.error('Failed to fetch drink details:', error); // Log the error to the console.
      }
    }
  }

  /**
   * Extracts the list of ingredients and their measurements from the drink details.
   * @param drink - The drink details object containing ingredient and measurement properties.
   */
  extractIngredients(drink: DrinkDetail): void {
    this.ingredients = []; // Clear the ingredients array.
    for (let i = 1; i <= 15; i++) { // Loop through the possible ingredient slots.
      const ingredient = drink[`strIngredient${i}`]; // Get the ingredient name.
      const measure = drink[`strMeasure${i}`]; // Get the measurement for the ingredient.
      if (ingredient) {
        this.ingredients.push(measure ? `${measure.trim()} ${ingredient}` : ingredient); // Add the ingredient and measurement to the list.
      }
    }
  }
}
