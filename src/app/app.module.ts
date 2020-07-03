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
import { RequestsComponent } from './requests/requests.component';
import { RequestsTableComponent } from './requests-table/requests-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    NoVacantComponent,
    AdminWelcomeComponent,
    RequestsNotFoundComponent,
    ReturnPasswordComponent,
    RequestsComponent,
    RequestsTableComponent,
    RequestDetailComponent
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
  bootstrap: [RequestDetailComponent]
})
export class AppModule { }
