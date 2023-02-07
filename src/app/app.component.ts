import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Weather Forecast';

  links = [{ path: '/home', title: 'Home', icon: 'home' }];

  cities = [
    { name: 'London', id: 2643743 },
    { name: 'Paris', id: 2988507 },
    { name: 'New York', id: 5128581 },
    { name: 'Tokyo', id: 1850147 },
    { name: 'Sydney', id: 2147714 },
  ];

  constructor() {}
}
