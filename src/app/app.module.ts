import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DrinkCardComponent } from './shared/drink-card/drink-card.component';

import { AppRoutingModule } from './app-routing.module';
import { DrinkListComponent } from './pages/drink-list/drink-list.component';
import { DrinkDetailsComponent } from './pages/drink-detail/drink-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinkListComponent,
    DrinkDetailsComponent,
    DrinkCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    RouterModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }