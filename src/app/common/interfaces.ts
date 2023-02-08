export interface IForecast {
  time: string | number;
  weathercode: string | number;
  minTemperature: number;
  maxTemperature: number;
  windspeed: number;
}
