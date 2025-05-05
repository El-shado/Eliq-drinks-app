import { Component, OnInit } from '@angular/core';
import { ConfigService } from './core/services/config.service';
import { RouterOutlet } from '@angular/router';
import { AppConfig } from './models/app-config';

// The AppComponent serves as the root component of the Angular application.
// It acts as the entry point for the app's UI and contains the base layout and structure.
// This component is bootstrapped in the AppModule and is responsible for rendering child components.
@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.configService.loadConfig().then(() => {
      const config = this.configService.getConfig();
      this.title = config.appTitle;
      document.documentElement.style.setProperty('--theme-color', config.themeColor);
    }).catch((error) => {
      console.error('Failed to load configuration:', error);
    });
  }
}