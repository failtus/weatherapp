import { Component, OnInit, OnChanges } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl, Validator } from '@angular/forms';

import { APIService } from '../../services/api.service';
import { SharedService } from '../../services/shared.service';
import { Observable } from 'rxjs/Objserable';
import 'rxjs/add/operator/map';

import { Settings } from '../settings/settings';

@Component({
  selector: 'page-city',
  templateUrl: 'city.html',
})
export class City {

  cityName:any;
  newCity: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private API: APIService, private sharedService: SharedService) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad City');
  }
  callCity(){
    // TODO: Add Auto Fill City
    // let query = this.cityName;
    // let weather = this.API.getCity(query);
    // weather.subscribe(weather =>
    //  {
    //    for (let i = 0; i < weather.length; i++) {
    //      let key = weather[i].Key;
    //      let locationName = weather[i].LocalizedName;
    //      this.cityNames.push({key, locationName});
    //    }
    //  }
    //  , error => console.log("Error: ", error), () => console.log(this.cityNames));
    // console.log(this.cityName,this.cityNames);
  }
  addCity(city) {
    this.sharedService
		.getWeatherByCity(this.cityName)
		.subscribe(weather => {
			this.newCity = {'name': weather.name, 'id': weather.id};
			console.log(this.newCity);
      this.sharedService.setCities(this.newCity);
      console.log('New City Added', this.newCity);
      this.navCtrl.push(Settings);
		}, error => console.log("Error: ", error));
  }

}
