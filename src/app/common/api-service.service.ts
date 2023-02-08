import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const currentURL =
  'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,apparent_temperature,rain,showers,snowfall,weathercode,windspeed_10m,winddirection_10m,temperature_80m,temperature_120m,temperature_180m&current_weather=true';
const dailyURL =
  'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&timezone=Europe%2FBerlin';
@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}

  // Get the weather forecast for the next 5 days using the Open-Meteo API

  current() {
    return this.http.get(currentURL);
  }

  daily() {
    return this.http.get(dailyURL);
  }
}
