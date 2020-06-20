import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { InscriptionProcessComponent } from './inscription-process/inscription-process.component';

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    InscriptionProcessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [InscriptionProcessComponent]
})
export class AppModule { }
