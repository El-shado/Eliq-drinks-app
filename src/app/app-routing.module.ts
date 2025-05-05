import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkListComponent } from './pages/drink-list/drink-list.component';
import { DrinkDetailsComponent } from './pages/drink-detail/drink-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'drinks', pathMatch: 'full' },
  { path: 'drinks', component: DrinkListComponent },
  { path: 'drink/:id', component: DrinkDetailsComponent } // this line
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
