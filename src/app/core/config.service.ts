import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { AppConfig } from '../models/app-config';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private config!: AppConfig; // Holds the application configuration loaded from the server

  constructor(private http: HttpClient) {}

  loadConfig(): Promise<void> {
    // Loads the application configuration from a JSON file and stores it in the config property
    return firstValueFrom(this.http.get<AppConfig>('assets/config/config.json')).then(data => {
      this.config = data; // Assign the loaded configuration to the config property
    });
  }

  getConfig(): AppConfig {
    // Returns the loaded application configuration
    return this.config; // Provides access to the configuration data
  }
}
