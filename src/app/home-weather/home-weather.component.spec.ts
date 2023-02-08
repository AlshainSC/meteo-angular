import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeWeatherComponent } from './home-weather.component';
import { ApiServiceService } from '../common/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { of } from 'rxjs';
import { MaterialModule } from '../material.module';

// const mockCurrent = {
//   current: {
//     temperature: 10,
//     weathercode: 0,
//   },
// };

describe('HomeWeatherComponent', () => {
  let component: HomeWeatherComponent;
  let fixture: ComponentFixture<HomeWeatherComponent>;
  let apiService: ApiServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeWeatherComponent],
      imports: [MaterialModule, HttpClientModule, HttpClientTestingModule],
      providers: [
        {
          provide: ApiServiceService,
        },
      ],
    });

    fixture = TestBed.createComponent(HomeWeatherComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the current weather method on initialization', () => {
    spyOn(apiService, 'current').and.callThrough();
    fixture.detectChanges();
    expect(apiService.current).toHaveBeenCalled();
  });

  it('should call the forecast weather method on initialization', () => {
    const mockResponse = { temperature: 20, description: 'Sunny' };
    const spy = spyOn(apiService, 'current').and.returnValue(of(mockResponse));

    apiService.current().subscribe((weatherData) => {
      expect(weatherData).toEqual(mockResponse);
    });

    expect(spy).toHaveBeenCalled();
  });

  it('should map the forecast correctly', () => {
    const forecast = {
      time: [1, 2, 3],
      weathercode: [0, 1, 2],
      apparent_temperature_max: [10, 20, 30],
      apparent_temperature_min: [100, 200, 300],
      windspeed_10m_max: [1000, 2000, 3000],
    };

    const mappedForecast = component.mapForecast(forecast);

    expect(mappedForecast).toEqual([
      {
        time: 1,
        weathercode: 0,
        minTemperature: 100,
        maxTemperature: 10,
        windspeed: 1000,
      },
      {
        time: 2,
        weathercode: 1,
        minTemperature: 200,
        maxTemperature: 20,
        windspeed: 2000,
      },
      {
        time: 3,
        weathercode: 2,
        minTemperature: 300,
        maxTemperature: 30,
        windspeed: 3000,
      },
    ]);
  });

  it('should map the weather code correctly', () => {
    const code = 0;
    component.mapWeatherCode(code);
    expect(component.weatherDescription).toEqual('Clear Skies');
  });
});
