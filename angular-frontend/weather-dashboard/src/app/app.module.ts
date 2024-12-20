import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Enables HTTP requests
    FormsModule,      // Enables two-way binding
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }


