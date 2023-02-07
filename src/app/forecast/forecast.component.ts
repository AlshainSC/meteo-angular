import { Component } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent {
  title = 'Weather Forecast';
  forecasts = [
    { day: 'Monday', date: 'Feb 7', temp: 20, icon: 'cloud' },
    { day: 'Tuesday', date: 'Feb 8', icon: 'cloud' },
    { day: 'Wednesday', date: 'Feb 9', temp: 22, icon: 'cloud' },
    { day: 'Thursday', date: 'Feb 10', temp: 23, icon: 'cloud' },
  ];
  constructor() {}
}
