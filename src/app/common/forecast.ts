export class Forecast {
  constructor(
    public date: string,
    public weatherCode: number,
    public minTemperature: number,
    public maxTemperature: number,
    public windSpeed: number
  ) {}
}
