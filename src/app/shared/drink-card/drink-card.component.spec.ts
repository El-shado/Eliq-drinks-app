import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinkSummary } from '../../models/drink.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  standalone: true,
  selector: 'app-drink-card',
  imports: [CommonModule],
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.css']
})
export class DrinkCardComponent {
  @Input() drink!: DrinkSummary;
}


describe('DrinkCardComponent', () => {
  let component: DrinkCardComponent;
  let fixture: ComponentFixture<DrinkCardComponent>;

  beforeEach(async () => {
    // Set up the testing module and inject the DrinkCardComponent
    await TestBed.configureTestingModule({
      imports: [DrinkCardComponent] // Import the standalone DrinkCardComponent
    }).compileComponents(); // Compile the component and its dependencies

    fixture = TestBed.createComponent(DrinkCardComponent); // Create the component fixture
    component = fixture.componentInstance; // Get the component instance
  });

  it('should create the component', () => {
    // Test to ensure the DrinkCardComponent is created successfully
    expect(component).toBeTruthy(); // Check if the component instance is truthy
  });

  it('should display drink details correctly', () => {
    // Test to ensure the drink details are displayed correctly in the DOM
    const mockDrink: DrinkSummary = {
      idDrink: '1',
      strDrink: 'Mock Drink',
      strDrinkThumb: 'mock-image-url.jpg'
    }; // Mock drink data
    component.drink = mockDrink; // Set the mock drink data
    fixture.detectChanges(); // Trigger change detection

    const compiled = fixture.nativeElement as HTMLElement; // Get the compiled DOM
    expect(compiled.querySelector('h2')?.textContent).toContain('Mock Drink'); // Check if the drink name is displayed
    expect(compiled.querySelector('img')?.getAttribute('src')).toBe('mock-image-url.jpg'); // Check if the drink image is displayed
  });
});
