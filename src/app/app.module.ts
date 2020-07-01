import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NoVacantComponent } from './no-vacant/no-vacant.component';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';
import { RequestsNotFoundComponent } from './requests-not-found/requests-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    NoVacantComponent,
    AdminWelcomeComponent,
    RequestsNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
