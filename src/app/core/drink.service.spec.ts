import { TestBed } from '@angular/core/testing';
import { DrinkService } from './services/drink.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


describe('DrinkService', () => {
  let service: DrinkService;

  beforeEach(() => {
    // Set up the testing module and inject the DrinkService
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi()) // Use the recommended method to provide HttpClient
      ]
    });
    service = TestBed.inject(DrinkService); // Inject the DrinkService instance
  });

  it('should be created', () => {
    // Test to ensure the DrinkService is created successfully
    expect(service).toBeTruthy(); // Check if the service instance is truthy
  });
});
