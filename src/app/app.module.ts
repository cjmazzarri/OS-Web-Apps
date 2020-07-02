import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NoVacantComponent } from './no-vacant/no-vacant.component';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';
import { RequestsNotFoundComponent } from './requests-not-found/requests-not-found.component';
import { ReturnPasswordComponent } from './return-password/return-password.component';

import { CourseSelectComponent } from './course-select/course-select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatTableModule} from "@angular/material/table";
import { CourseTableComponent } from './course-table/course-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    NoVacantComponent,
    AdminWelcomeComponent,
    RequestsNotFoundComponent,
    CourseSelectComponent,
    CourseTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [CourseSelectComponent]
})
export class AppModule { }
