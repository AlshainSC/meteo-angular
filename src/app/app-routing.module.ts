import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeWeatherComponent } from './home-weather/home-weather.component';
import { ForecastComponent } from './forecast/forecast.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeWeatherComponent,
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
