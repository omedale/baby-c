import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AppointmentDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointment-detail',
  templateUrl: 'appointment-detail.html',
})
export class AppointmentDetailPage {
  clinic: any;
  category: string;
  about: any;
  name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.clinic = navParams.get('clinic');
    this.category = navParams.get('category');
    this.about = navParams.get('about');
    this.name = navParams.get('name')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentDetailPage');
  }

}
