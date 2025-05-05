

/**
 * Interface representing a summary of a drink.
 * This is typically used for displaying a list of drinks.
 */
export interface DrinkSummary {
  /**
   * The unique identifier for the drink.
   */
  idDrink: string;

  /**
   * The name of the drink.
   */
  strDrink: string;

  /**
   * The URL of the thumbnail image for the drink.
   */
  strDrinkThumb: string;
}

/**
 * Interface representing detailed information about a drink.
 * This is typically used for displaying drink details.
 */
export interface DrinkDetail {
  /**
   * The unique identifier for the drink.
   */
  idDrink: string;

  /**
   * The name of the drink.
   */
  strDrink: string;

  /**
   * The URL of the thumbnail image for the drink.
   */
  strDrinkThumb: string;

  /**
   * Instructions for preparing the drink.
   */
  strInstructions: string;

  /**
   * Additional dynamic properties for the drink, such as ingredients and measurements.
   */
  [key: string]: any;
}
