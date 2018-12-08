import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BearComponent } from "./bear.component";
import { LizardComponent } from "./lizard.component";
import { HorseComponent } from "./horse.component";
import { EagleComponent } from "./eagle.component";
import { DolphinComponent} from "./dolphin.component";
import { StartComponent } from "./start.component";
import { PageNotFoundComponent } from "./page-not-found.component";

const routes: Routes = [
  {path: 'horse', component: HorseComponent},
  {path: 'lizard', component: LizardComponent},
  {path: 'bear', component: BearComponent},
  {path: 'eagle', component: EagleComponent},
  {path: 'dolphin', component: DolphinComponent},
  {path: 'start', component: StartComponent},
  {path: '', redirectTo:'/start', pathMatch:'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
