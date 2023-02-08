import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWeatherComponent } from './home-weather.component';
import { ApiServiceService } from '../common/api-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
// import { IForecast } from '../common/interfaces';

describe('HomeWeatherComponent', () => {
  let component: HomeWeatherComponent;
  let fixture: ComponentFixture<HomeWeatherComponent>;
  let apiService: ApiServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeWeatherComponent],
      imports: [HttpClientTestingModule],
      providers: [apiService],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeWeatherComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiServiceService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get current weather report on init', () => {
    spyOn(apiService, 'current').and.returnValue(of({ temperature: 20 }));

    fixture.detectChanges();

    expect(apiService.current).toHaveBeenCalled();

    expect(component.current).toEqual({ temperature: 20 });
  });
  it('should get daily forecast on init', () => {
    spyOn(apiService, 'daily').and.returnValue(
      of({ daily: [{ time: '2023-02-08' }] })
    );

    fixture.detectChanges();

    expect(apiService.daily).toHaveBeenCalled();
    expect(component.forecast).toEqual([{ time: '2023-02-08' }]);
  });

  it('should map the forecast correctly', () => {
    const forecast = {
      time: ['2023-02-08', '2023-02-09'],
      weathercode: [1, 2],
      apparent_temperature_max: [20, 25],
      apparent_temperature_min: [15, 18],
      windspeed_10m_max: [5, 10],
    };

    const expectedResult = [
      {
        time: '2023-02-08',
        weathercode: 1,
        minTemperature: 20,
        maxTemperature: 15,
        windspeed: 5,
      },
      {
        time: '2023-02-09',
        weathercode: 2,
        minTemperature: 25,
        maxTemperature: 18,
        windspeed: 10,
      },
    ];

    //@ts-ignore
    expect(component.mapForecast(forecast)).toEqual(expectedResult);
  });
});
