import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SaveScheduleComponent } from './save-schedule/save-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    SaveScheduleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [SaveScheduleComponent]
})
export class AppModule { }
