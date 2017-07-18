import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

@Injectable()

export class SharedService {
  APIKey: any = 'VHCp5y7QIJYhCthQcSf4TlxOPO3mUP8z'; // aquaweather
  ApiKey: string = '4fc9b7febf8ffc2aaa3011d71166c086'; // openweathermap
  API_URL: string = 'http://api.openweathermap.org/data/2.5';

  cities = [{'name':'dhaka', 'id':1185241}, {'name':'london', 'id':4119617} ];
  currentCity: any;


  constructor(public http: Http, private geolocation: Geolocation, private storage: Storage) {
    this.storage.set('cities', this.cities);
  }
  getWeatherInfo(lat, lon) : Observable<any>{
    return this.http.get(`${this.API_URL}/weather?lat=${lat+'&lon='+lon}&units=metric&appid=${this.ApiKey}`).map(res => res.json());

  }
  getWeatherByCity(city) : Observable<any> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&units=metric&appid=${this.ApiKey}`)
    .map(res => res.json());
  }

  getCities(){
    return this.cities;
  }
  setCities(city){
    this.cities.push(city);
    this.storage.set('cities', this.cities);
    this.setCurrentCity(city.id);
  }
  setCurrentCity(id){
    this.currentCity = this.cities.find(x => x.id === id);
    this.storage.set('currentCity', this.currentCity);
    console.log('current city set to: ', this.currentCity);
  }

}
