import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ConfigService } from './core/config.service';
import { of } from 'rxjs';


describe('AppComponent', () => {
  // This block sets up the testing environment for the AppComponent
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // Import the AppComponent to be tested
      providers: [
        provideHttpClient(withInterceptorsFromDi()), // Provide HTTP client with interceptors
        { 
          provide: ConfigService, // Mock the ConfigService to provide a test configuration
          useValue: { loadConfig: () => of({ appTitle: 'eliq-drinks-app', themeColor: '#000000' }) } 
        }
      ]
    }).compileComponents(); // Compile the component and its dependencies
  });

  it('should create the app', () => {
    // Test to ensure the AppComponent is created successfully
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy(); // Check if the app instance is truthy
  });

  it(`should have the 'eliq-drinks-app' title`, async () => {
    // Test to verify the title property of the AppComponent
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection
    await fixture.whenStable(); // Wait for async operations to complete
    expect(app.title).toEqual('eliq-drinks-app'); // Check if the title matches the expected value
  });

  it('should render title', () => {
    // Test to ensure the title is rendered in the DOM
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Trigger change detection
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('eliq-drinks-app'); // Check if the rendered title contains the expected text
  });

  it('should have a defined title property', () => {
    // Test to ensure the title property is defined in the AppComponent
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toBeDefined(); // Check if the title property is defined
  });
});
