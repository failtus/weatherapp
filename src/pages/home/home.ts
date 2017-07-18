import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { APIService } from '../../services/api.service';
import { SharedService } from '../../services/shared.service';
import { Geolocation } from '@ionic-native/geolocation';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Settings } from '../settings/settings';

import * as $ from 'jquery';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
})
export class HomePage implements OnInit {
	city: any;
	cityId: any;
	lat:any;
	lon:any;
  celcious:any = true;
	myLocation: any;
	locationKey:any;
	weatherClass: any;
	currentWeather: any;
	constructor (public navCtrl: NavController, public loadingCtrl: LoadingController, private apiService: APIService, private geolocation: Geolocation, private storage: Storage, private splashScreen: SplashScreen, private sharedService: SharedService) {

	}
	ionViewWillEnter(){
		this.storage.get('currentCity')
		.then((val)=> {
			this.city = val;
			console.log(val);
			if(this.city.name) {
				this.sharedService
				.getWeatherByCity(this.city.name)
				.subscribe(weather => {
					this.currentWeather = weather;
					this.checkWeather();
					this.splashScreen.hide();
					console.log(weather);
				}, error => console.log("Error: ", error));
			} else {
				return
			}
		})
		.catch((error) => {
			console.log('Error getting city', error);
			this.initCall();
		});

	}
	ionViewDidEnter(){
	}
	initCall() {
		this.geolocation.getCurrentPosition({ enableHighAccuracy: true}).then((resp) => {
			this.lat = resp.coords.latitude;
			this.lon = resp.coords.longitude;
			this.sharedService.getWeatherInfo(this.lat, this.lon).subscribe(weather => {
				this.currentWeather = weather;
				this.checkWeather();
				this.splashScreen.hide();
				console.log(weather);
			}, error => console.log("Error: ", error));
		}).catch((error) => {
				this.navCtrl.push(Settings);
				console.log('Error getting location', error);
			});
	}
	checkWeather() {
		if(this.currentWeather) {
			switch(this.currentWeather.weather[0].main) {
		    case "Rain":
	        this.weatherClass = "raining";
	        break;
				case "Thunderstorm":
	        this.weatherClass = "raining";
	        break;
				case "Drizzle":
	        this.weatherClass = "raining";
	        break;
				case "Haze":
					this.weatherClass = "cloudy";
					break;
				case "Snow":
	        this.weatherClass = "snow";
	        break;
				case "Atmosphere":
	        this.weatherClass = "sunny";
	        break;
				case "Clear":
	        this.weatherClass = "sunny";
	        break;
				case "Clouds":
	        this.weatherClass = "cloudy";
	        break;
				case "Extreme":
	        this.weatherClass = "cloudy";
	        break;
				case "Additional":
	        this.weatherClass = "cloudy";
	        break;
		    default:
	        this.weatherClass = "cloudy";
			}
		}

	}
	ngOnInit(){
			// this.navCtrl.push(City);
			this.splashScreen.show();
	}
	openSetting() {
		this.navCtrl.push(Settings);
	}
	onSwipe(){
		let el = $('.bottom');
		el.addClass('open');
		console.log('i am swiped top', el);
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
