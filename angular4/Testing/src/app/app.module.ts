import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BearComponent } from './bear.component';
import { ContentComponent } from './content.component';
import { FooterComponent } from './footer.component';
import { StartComponent } from './start.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { NavmainComponent } from './navmain.component';
import { HeaderComponent } from './header.component';
import { GuideComponent } from './guide.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BearComponent,
    ContentComponent,
    FooterComponent,
    StartComponent,
    PageNotFoundComponent,
    NavmainComponent,
    HeaderComponent,
    GuideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
