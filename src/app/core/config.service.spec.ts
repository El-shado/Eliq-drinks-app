import { TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { ConfigService } from './config.service';


describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(() => {
    // Set up the testing module and inject the ConfigService
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi()) // Use the recommended method to provide HttpClient
      ]
    });
    service = TestBed.inject(ConfigService); // Inject the ConfigService instance
  });

  it('should be created', () => {
    // Test to ensure the ConfigService is created successfully
    expect(service).toBeTruthy(); // Check if the service instance is truthy
  });
});
