import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeWeatherComponent } from './home-weather/home-weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { ExternalHomeComponent } from './externals/external-home/external-home.component';
import { ExternalDetailsComponent } from './externals/external-details/external-details.component';

@NgModule({
  declarations: [AppComponent, HomeWeatherComponent, ForecastComponent, ExternalHomeComponent, ExternalDetailsComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
