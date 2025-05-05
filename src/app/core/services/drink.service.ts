import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../models/app-config';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ConfigService } from '../config.service';
import { map } from 'rxjs/operators';
import { DrinkSummary } from '../../models/drink.model';

/**
 * Service responsible for interacting with the drinks API.
 * This service provides methods to fetch drink summaries and details from the API.
 */
@Injectable({ providedIn: 'root' })
export class DrinkService {
  /**
   * Constructor to inject dependencies for HTTP operations and configuration management.
   * @param http - Angular's HttpClient for performing HTTP requests.
   * @param configService - Service to manage application configuration.
   */
  constructor(private http: HttpClient, private configService: ConfigService) {
    console.log('DrinkService: Initialized');
  }

  /**
   * Retrieves the API base URL from the configuration.
   * Ensures the configuration is loaded before accessing the API URL.
   * @returns A promise that resolves to the API base URL.
   * @throws An error if the API URL is not defined in the configuration.
   */
  private async getApiUrl(): Promise<string> {
    if (!this.configService.getConfig()?.apiUrl) {
      await this.configService.loadConfig();
    }
    const config = this.configService.getConfig();
    if (!config?.apiUrl) {
      throw new Error('API URL is not defined. Ensure configuration is loaded.');
    }
    return config.apiUrl;
  }

  /**
   * Fetches a list of alcoholic drinks from the API.
   * @returns A promise that resolves to an observable emitting an array of drink summaries.
   */
  async getDrinks(): Promise<Observable<DrinkSummary[]>> {
    const apiUrl = await this.getApiUrl();
    return this.http.get<{ drinks: DrinkSummary[] }>(`${apiUrl}/filter.php?a=Alcoholic`).pipe(
      map(response => response.drinks)
    );
  }

  /**
   * Fetches detailed information about a specific drink by its ID.
   * @param id - The unique identifier of the drink.
   * @returns A promise that resolves to an observable emitting the drink details.
   */
  async getDrinkDetails(id: string): Promise<Observable<any>> {
    const apiUrl = await this.getApiUrl();
    return this.http.get(`${apiUrl}/lookup.php?i=${id}`);
  }
}
