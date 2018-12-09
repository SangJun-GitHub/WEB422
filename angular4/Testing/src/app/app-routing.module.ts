import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './start.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { BearComponent } from './bear.component';


const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'bear', component: BearComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
