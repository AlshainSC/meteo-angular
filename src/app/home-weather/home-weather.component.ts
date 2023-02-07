import { Component } from '@angular/core';
import { ForecastComponent } from '../forecast/forecast.component';

@Component({
  selector: 'app-home-weather',
  templateUrl: './home-weather.component.html',
  styleUrls: ['./home-weather.component.scss'],
})
export class HomeWeatherComponent {
  title = 'Weather Forecast';
  forecasts = [
    { day: 'Monday', date: 'Feb 7', temp: 20, icon: 'cloud' },
    { day: 'Tuesday', date: 'Feb 8', icon: 'cloud' },
    { day: 'Wednesday', date: 'Feb 9', temp: 22, icon: 'cloud' },
    { day: 'Thursday', date: 'Feb 10', temp: 23, icon: 'cloud' },
  ];
  constructor() {}
}
