import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetectAccountComponent } from './detect-account/detect-account.component';

@NgModule({
  declarations: [
    AppComponent,
    DetectAccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DetectAccountComponent]
})
export class AppModule { }
