import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NoVacantComponent } from './no-vacant/no-vacant.component';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';
import { RequestsNotFoundComponent } from './requests-not-found/requests-not-found.component';
import { CourseSelectComponent } from './course-select/course-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    NoVacantComponent,
    AdminWelcomeComponent,
    RequestsNotFoundComponent,
    CourseSelectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CourseSelectComponent]
})
export class AppModule { }
