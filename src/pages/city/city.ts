import { Component, OnInit, OnChanges } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl, Validator } from '@angular/forms';

import { APIService } from '../../services/api.service';
import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from 'rxjs/Objserable';
import 'rxjs/add/operator/map';

import { HomePage } from '../pages/home/home';

/**
 * Generated class for the City page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-city',
  templateUrl: 'city.html',
})
export class City {

  cityNames:any = [
    {
      'key': '',
      'locationName': ''
    }
  ];
  cityName:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private API: APIService) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad City');
  }
  callCity(){
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

}
