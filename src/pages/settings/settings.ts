import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SharedService } from '../../services/shared.service';
import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';
import { City } from '../city/city';


/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  cities = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private storage: Storage, private sharedService: SharedService) {
  }

  ionViewWillEnter() {
    if (this.storage.get('currentCity') !== undefined && null) {
      this.navCtrl.push(HomePage);
    }
    this.cities = this.sharedService.getCities();
    console.log(this.cities);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  setCurrentCity(id){
    this.sharedService.setCurrentCity(id);
    this.navCtrl.push(HomePage);
  }
  addCity(){
    this.navCtrl.push(City);
  }
  showConfirm(id) {
    let confirm = this.alertCtrl.create({
      title: 'Set as current city?',
      message: 'This will set as default city when next time you open this app',
      buttons: [
        {
          text: 'Cancle',
          handler: () => {
            return
          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.setCurrentCity(id);
          }
        }
      ]
    });
    confirm.present();
  }

}
