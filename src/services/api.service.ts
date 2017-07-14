import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class APIService {
  APIKey: any = 'VHCp5y7QIJYhCthQcSf4TlxOPO3mUP8z'; // aquaweather
  ApiKey: string = '4fc9b7febf8ffc2aaa3011d71166c086'; // openweathermap
  API_URL: string = 'http://api.openweathermap.org/data/2.5';


  constructor(public http: Http, private geolocation: Geolocation) {

   }
  round(value, decimals:number = 1) {
     const x = Math.pow(10, decimals);
     return Math.round(x * value) / x;
   };
  // apiCall (url): Promise<any> {
  //   return fetch(url)
  //     .then(response => {
  //       if (response.status >= 400) {
  //         return Promise.reject('Invalid response');
  //       }
  //       return response.json();
  //     })
  //     .then(json => {
  //       if (parseInt(json.cod) !== 200) {
  //         return Promise.reject('Invalid response');
  //       }
  //       return json;
  //      });
  //  };



  getWeatherInfo(lat, lon) : Observable<any>{
    return this.http.get(`${this.API_URL}/weather?lat=${lat+'&lon'+lon}&units=metric&appid=${this.ApiKey}`).map(res => res.json());

  }
  getWeatherByCity(city) : Observable<any> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.ApiKey}`)
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
