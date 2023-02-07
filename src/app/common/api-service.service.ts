import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiURL =
  'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}

  // Get the weather forecast for the next 5 days using the Open-Meteo API

  all() {
    return this.http.get(apiURL);
  }
}
