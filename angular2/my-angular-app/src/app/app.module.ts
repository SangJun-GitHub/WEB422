import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BearComponent } from './bear.component';
import { ContentComponent } from './content.component';
import { DolphinComponent } from './dolphin.component';
import { EagleComponent } from './eagle.component';
import { FooterComponent } from './footer.component';
import { GuideComponent } from './guide.component';
import { HeaderComponent } from './header.component';
import { HorseComponent } from './horse.component';
import { LizardComponent } from './lizard.component';
import { NavmainComponent } from './navmain.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { StartComponent } from './start.component';

@NgModule({
  declarations: [
    AppComponent,
    BearComponent,
    ContentComponent,
    DolphinComponent,
    EagleComponent,
    FooterComponent,
    GuideComponent,
    HeaderComponent,
    HorseComponent,
    LizardComponent,
    NavmainComponent,
    PageNotFoundComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
