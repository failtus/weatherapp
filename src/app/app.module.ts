import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { City } from '../pages/city/city';

import { APIService } from '../services/api.service';
import { Geolocation } from '@ionic-native/geolocation';

import { CelciousToFahrenheit } from '../pipes/celcious.pipe';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    City,
    CelciousToFahrenheit
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    City
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    APIService, Geolocation

  ]
})
export class AppModule {}
