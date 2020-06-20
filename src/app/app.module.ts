import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';
import { RequestsNotFoundComponent } from './requests-not-found/requests-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminWelcomeComponent,
    RequestsNotFoundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RequestsNotFoundComponent]
})
export class AppModule { }
