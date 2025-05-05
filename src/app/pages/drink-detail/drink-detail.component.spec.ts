import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DrinkDetail } from '../../models/drink.model';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { DrinkDetailsComponent } from './drink-detail.component';


describe('DrinkDetailsComponent', () => {
  let component: DrinkDetailsComponent;
  let fixture: ComponentFixture<DrinkDetailsComponent>;

  beforeEach(async () => {
    // Set up the testing module and inject the DrinkDetailsComponent
    await TestBed.configureTestingModule({
      imports: [DrinkDetailsComponent], // Import the component to be tested
      providers: [
        provideHttpClientTesting(), // Use the recommended method to provide HttpClientTesting
        {
          provide: ActivatedRoute, // Mock the ActivatedRoute to provide test route parameters
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => '1', // Mock the route parameter retrieval
              },
            },
          },
        },
      ]
    })
    .compileComponents(); // Compile the component and its dependencies

    fixture = TestBed.createComponent(DrinkDetailsComponent); // Create the component fixture
    component = fixture.componentInstance; // Get the component instance
    component.drink = {
      idDrink: '1',
      strDrink: 'Mock Drink',
      strDrinkThumb: 'mock-image-url.jpg',
      strInstructions: 'Mix ingredients and serve.',
      strIngredient1: 'Ingredient 1',
      strMeasure1: '1 oz',
      strIngredient2: 'Ingredient 2',
      strMeasure2: '2 oz'
    } as DrinkDetail; // Mock the drink details
    component.ingredients = ['1 oz Ingredient 1', '2 oz Ingredient 2']; // Mock the ingredients list
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create', () => {
    // Test to ensure the DrinkDetailsComponent is created successfully
    expect(component).toBeTruthy(); // Check if the component instance is truthy
  });

  it('should display drink details', () => {
    // Test to ensure the drink details are displayed correctly in the DOM
    const mockDrink: DrinkDetail = {
      idDrink: '1',
      strDrink: 'Mock Drink',
      strDrinkThumb: 'mock-image-url.jpg',
      strInstructions: 'Mix ingredients and serve.',
      strIngredient1: 'Ingredient 1',
      strMeasure1: '1 oz',
      strIngredient2: 'Ingredient 2',
      strMeasure2: '2 oz'
    };
    component.drink = mockDrink; // Set the mock drink details
    component.ingredients = ['1 oz Ingredient 1', '2 oz Ingredient 2']; // Set the mock ingredients list
    fixture.detectChanges(); // Trigger change detection

    const compiled = fixture.nativeElement as HTMLElement; // Get the compiled DOM
    expect(compiled.querySelector('h2')?.textContent).toContain('Mock Drink'); // Check if the drink name is displayed
    expect(compiled.querySelector('img')?.getAttribute('src')).toContain('mock-image-url.jpg'); // Check if the drink image is displayed
  });
});
