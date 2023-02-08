import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ApiServiceService } from './api-service.service';
import { currentWeatherMock, dailyWeatherMock } from './mocks';

const currentURL =
  'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,apparent_temperature,rain,showers,snowfall,weathercode,windspeed_10m,winddirection_10m,temperature_80m,temperature_120m,temperature_180m&current_weather=true';
const dailyURL =
  'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,windspeed_10m_max&timezone=Europe%2FBerlin';

describe('ApiServiceService', () => {
  let service: ApiServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiServiceService],
    });

    service = TestBed.inject(ApiServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET request for current weather', () => {
    service.current().subscribe((data) => {
      expect(data).toEqual(currentWeatherMock);
    });
    const req = httpMock.expectOne(currentURL);
    expect(req.request.method).toEqual('GET');
    req.flush(currentWeatherMock);
  });

  it('should make a GET request for forecast weather', () => {
    service.daily().subscribe((data) => {
      expect(data).toEqual(dailyWeatherMock);
    });
    const req = httpMock.expectOne(dailyURL);
    expect(req.request.method).toEqual('GET');
    req.flush(dailyWeatherMock);
  });
});
