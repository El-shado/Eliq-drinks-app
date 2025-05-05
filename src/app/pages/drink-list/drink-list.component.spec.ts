import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { DrinkSummary } from '../../models/drink.model';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { DrinkListComponent } from './drink-list.component';
import { DrinkService } from '../../core/services/drink.service';


describe('DrinkListComponent', () => {
  let component: DrinkListComponent;
  let fixture: ComponentFixture<DrinkListComponent>;

  beforeEach(async () => {
    // Set up the testing module and inject the DrinkListComponent
    await TestBed.configureTestingModule({
      imports: [DrinkListComponent], // Import the component to be tested
      providers: [
        DrinkService, // Provide the DrinkService for dependency injection
        provideHttpClient(withInterceptorsFromDi()), // Use the recommended method to provide HttpClient
        {
          provide: ActivatedRoute, // Mock the ActivatedRoute to provide test route parameters
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => null, // Mock implementation for route parameters
              },
            },
          },
        },
      ],
    }).compileComponents(); // Compile the component and its dependencies

    fixture = TestBed.createComponent(DrinkListComponent); // Create the component fixture
    component = fixture.componentInstance; // Get the component instance
    component.drinks = [
      { idDrink: '1', strDrink: 'Drink 1', strDrinkThumb: 'image1.jpg' },
      { idDrink: '2', strDrink: 'Drink 2', strDrinkThumb: 'image2.jpg' },
    ]; // Mock the drinks list
    component.loading = false; // Set the loading state to false
    component.error = null; // Set the error state to null
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create', () => {
    // Test to ensure the DrinkListComponent is created successfully
    expect(component).toBeTruthy(); // Check if the component instance is truthy
  });

  it('should display a list of drinks', () => {
    // Test to ensure the list of drinks is displayed correctly in the DOM
    const mockDrinks: DrinkSummary[] = [
      { idDrink: '1', strDrink: 'Drink 1', strDrinkThumb: 'image1.jpg' },
      { idDrink: '2', strDrink: 'Drink 2', strDrinkThumb: 'image2.jpg' },
    ];
    component.drinks = mockDrinks; // Set the mock drinks list
    fixture.detectChanges(); // Trigger change detection

    const compiled = fixture.nativeElement as HTMLElement; // Get the compiled DOM
    const drinkElements = compiled.querySelectorAll('a app-drink-card'); // Updated selector for drink cards
    expect(drinkElements.length).toBe(mockDrinks.length); // Check if the number of drink elements matches the mock data
  });
});
