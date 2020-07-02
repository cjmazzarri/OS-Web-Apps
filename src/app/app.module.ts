import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NoVacantComponent } from './no-vacant/no-vacant.component';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';
import { RequestsNotFoundComponent } from './requests-not-found/requests-not-found.component';
import { ReturnPasswordComponent } from './return-password/return-password.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    NoVacantComponent,
    AdminWelcomeComponent,
    RequestsNotFoundComponent,
    ReturnPasswordComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [FiltersComponent]
})
export class AppModule { }
