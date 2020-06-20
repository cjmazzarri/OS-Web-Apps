import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminWelcomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AdminWelcomeComponent]
})
export class AppModule { }
