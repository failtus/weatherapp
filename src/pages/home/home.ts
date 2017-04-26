import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { APIService } from '../../services/api.service';
import { Geolocation } from '@ionic-native/geolocation';

import { City } from '../city/city';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
})
export class HomePage {
	lat:any;
	lon:any;
  celcious:any = true;
	myLocation: any;
	locationKey:any;
	weatherClass: any;
	currentWeather:any = {
			"coord": {
				"lon": '',
				"lat": ''
			},
		"weather": [
				{
					"id": '',
					"main": '',
					"description": '',
					"icon": ''
				}
			],
		"base": "stations",
		"main": {
			"temp": '',
			"pressure": '',
			"humidity": '',
			"temp_min": '',
			"temp_max": ''
		},
		"visibility": '',
		"wind": {
			"speed": '',
			"deg": ''
		},
		"clouds": {
			"all": ''
		},
		"dt": '',
		"sys": {
			"type": '',
			"id": '',
			"message": '',
			"country": '',
			"sunrise": '',
			"sunset": ''
		},
		"id": '',
		"name": '',
		"cod": ''
	};
	constructor (public navCtrl: NavController, private apiService: APIService, private geolocation: Geolocation) {

	}
	ionViewWillEnter(){
		this.geolocation.getCurrentPosition().then((resp) => {
			this.lat = resp.coords.latitude;
			this.lon = resp.coords.longitude;
			this.apiService.getWeatherInfo(this.lat, this.lon).subscribe(weather => {
				this.currentWeather = weather;
			}, error => console.log("Error: ", error));
		}).catch((error) => {
				this.navCtrl.push(City);
				console.log('Error getting location', error);
			});
	}
	OnInit(){
			// this.navCtrl.push(City);
	}
	fetchData(i){
		// let weather = this.apiService.getWeatherInfo(this.locationKey);
		// weather.subscribe(weather => this.currentWeather = weather[0], error => console.log("Error: ", error));
		// let datakey = this.apiService.getLocationKey(this.myLocation);
		// datakey.subscribe(data => this.locationKey = data.Key, error => console.log("Error: ", error));
	}
	// ionViewDidEnter(){
	//   this.apiService.getLocationKey().subscribe(data => this.locationKey = data.Key, error => console.log("Error: ", error), () => console.log("onComplete"));
	//   this.apiService.getWeatherInfo(this.locationKey).subscribe(weather => this.currentWeather = weather[0], error => console.log("Error: ", error), () => console.log("onComplete"));
	// }
}
