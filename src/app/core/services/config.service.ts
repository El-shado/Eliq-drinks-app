import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { AppConfig } from '../../models/app-config';

/**
 * Service responsible for loading and providing application configuration.
 * This service fetches configuration data from a JSON file and makes it available throughout the application.
 */
@Injectable({ providedIn: 'root' })
export class ConfigService {
  private config!: AppConfig;

  /**
   * Constructor to inject the HttpClient dependency for making HTTP requests.
   * @param http - Angular's HttpClient for performing HTTP operations.
   */
  constructor(private http: HttpClient) {}

  /**
   * Loads the application configuration from a JSON file.
   * This method should be called during the application initialization phase.
   * @returns A promise that resolves when the configuration is successfully loaded.
   */
  loadConfig(): Promise<void> {
    return firstValueFrom(this.http.get<AppConfig>('assets/config/config.json'))
      .then(data => {
        this.config = data;
      });
  }

  /**
   * Retrieves the loaded application configuration.
   * Throws an error if the configuration has not been loaded yet.
   * @returns The application configuration object.
   */
  getConfig(): AppConfig {
    if (!this.config) {
      throw new Error('Config not loaded. Make sure APP_INITIALIZER is configured.');
    }
    return this.config;
  }
}
