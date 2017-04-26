import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import 'rxjs/add/operator/map'
@Injectable()
export class APIService {
  APIKey:any = 'VHCp5y7QIJYhCthQcSf4TlxOPO3mUP8z';
  ApiKey:any = '4fc9b7febf8ffc2aaa3011d71166c086';

  constructor(public http: Http, private geolocation: Geolocation) {

   }
   getWeatherInfo(lat, lon){
     return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lon +'&units=metric&appid='+ this.ApiKey)
     .map(res => res.json());
   }
  //  getWeatherInfo(locationsKey){
  //    return this.http.get('http://dataservice.accuweather.com/currentconditions/v1/'+ locationsKey +'?apikey='+this.APIKey)
  //     // Call map on the response observable to get the parsed people object
  //     .map(res => res.json());
  //  }
  //  getLocationKey(currentLocation){
  //    return this.http.get('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey='+ this.APIKey+'&q=' + currentLocation)
  //     // Call map on the response observable to get the parsed people object
  //     .map(res => res.json());
  //  }
  //  getCity(qeary){
  //    return this.http.get('http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=' + this.APIKey +'&q=' + qeary)
  //     // Call map on the response observable to get the parsed people object
  //     .map(res => res.json());
  //  }
}
