import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Settings } from '../pages/settings/settings';
import { City } from '../pages/city/city';
import { RainComponent } from '../component/rain.component';

import { APIService } from '../services/api.service';
import { SharedService } from '../services/shared.service';
import { Geolocation } from '@ionic-native/geolocation';

import { CelciousToFahrenheit } from '../pipes/celcious.pipe';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { CountryCodePipe } from '../pipes/countryCodes.pipe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    City,
    Settings,
    RainComponent,
    CelciousToFahrenheit,
    CapitalizePipe,
    CountryCodePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    City,
    Settings
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    APIService, Geolocation, SharedService

  ]
})
export class AppModule {}
