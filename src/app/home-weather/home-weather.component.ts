import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../common/api-service.service';
import { IForecast } from '../common/interfaces';

@Component({
  selector: 'app-home-weather',
  templateUrl: './home-weather.component.html',
  styleUrls: ['./home-weather.component.scss'],
})
export class HomeWeatherComponent implements OnInit {
  current: any;
  forecast: any = [];
  weatherDescription: string = '';

  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {
    this.getWeather();
    this.getForecast();
  }

  getWeather() {
    this.apiService.current().subscribe((data) => {
      if (data) {
        this.current = data;
        console.log('current object ::', this.current);
      }
    });
  }

  getForecast() {
    this.apiService.daily().subscribe((data: any) => {
      console.log('data ::', data);
      if (data) {
        this.forecast = this.mapForecast(data.daily);
        console.log('forecast object ::', this.forecast);
      }
      // console.log('forecast object ::', this.forecast);
    });
  }

  mapForecast(forecast: any): IForecast[] {
    return forecast.time.map((time: any, index: string | number) => ({
      time,
      weathercode: forecast.weathercode[index],
      minTemperature: forecast.apparent_temperature_min[index],
      maxTemperature: forecast.apparent_temperature_max[index],
      windspeed: forecast.windspeed_10m_max[index],
    }));
  }

  mapDateToDay(date: string) {
    const day = new Date(date).toLocaleString('en-us', { weekday: 'long' });
    return day;
  }

  mapWeatherCode(code: number) {
    switch (code) {
      case 0:
        this.weatherDescription = 'Clear Skies';
        return '01';
      case 1 || 2 || 3:
        this.weatherDescription = 'Partly Cloudy';
        return '02';
      case 45 || 48:
        this.weatherDescription = 'Fog';
        return '50';
      case 51 || 53 || 55:
        this.weatherDescription = 'Light Rain';
        return '10';
      case 56 || 57:
        this.weatherDescription = 'Snow / Freezing Rain';
        return '13';
      case 61 || 63 || 65:
        this.weatherDescription = 'Rain';
        return '09';
      case 66 || 67:
        this.weatherDescription = 'Snow / Freezing Rain';
        return '13';
      case 71 || 73 || 75:
        this.weatherDescription = 'Snow';
        return '13';
      case 77:
        this.weatherDescription = 'Snow';
        return '13';
      case 80 || 81 || 82:
        this.weatherDescription = 'Rain';
        return '09';
      case 85 || 86:
        this.weatherDescription = 'Snow';
        return '13';
      case 95:
        this.weatherDescription = 'Thunderstorm';
        return '11';
      case 96 || 99:
        this.weatherDescription = 'Heavy Thunderstorm';
        return '11';
      default:
        this.weatherDescription = 'Clear Skies';
        return '01';
    }
  }
}

// Code	Description
// 0	Clear sky
// 1, 2, 3	Mainly clear, partly cloudy, and overcast
// 45, 48	Fog and depositing rime fog
// 51, 53, 55	Drizzle: Light, moderate, and dense intensity
// 56, 57	Freezing Drizzle: Light and dense intensity
// 61, 63, 65	Rain: Slight, moderate and heavy intensity
// 66, 67	Freezing Rain: Light and heavy intensity
// 71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
// 77	Snow grains
// 80, 81, 82	Rain showers: Slight, moderate, and violent
// 85, 86	Snow showers slight and heavy
// 95 *	Thunderstorm: Slight or moderate
// 96, 99 *	Thunderstorm with slight and heavy hail
