import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Configures the application's routing using the defined routes
    provideHttpClient(withInterceptorsFromDi()) // Configures the HTTP client with dependency injection interceptors
  ]
};
