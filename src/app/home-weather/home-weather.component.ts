import { Component, OnInit } from '@angular/core';
import { ForecastComponent } from '../forecast/forecast.component';
import { ApiServiceService } from '../common/api-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-weather',
  templateUrl: './home-weather.component.html',
  styleUrls: ['./home-weather.component.scss'],
})
export class HomeWeatherComponent implements OnInit {
  weather: any;

  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {
    this.apiService.all().subscribe((data) => {
      this.weather = data;
      console.log(this.weather);
    });
  }
}
