import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { AppointmentDetailPage } from '../appointment-detail/appointment-detail';

@IonicPage()
@Component({
  selector: 'page-book-appointment',
  templateUrl: 'book-appointment.html',
})
export class BookAppointmentPage {
  clinic: any;
  category: string;
  about: any;
  name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    this.clinic = navParams.get('clinic');
    this.category = navParams.get('category');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookAppointmentPage');
  }

  bookAppointment() {
    if (typeof this.about === 'undefined' || typeof this.name === 'undefined' ) {
      let toast = this.toastCtrl.create({
        message: 'Please Fill the Form',
        duration: 3000,
        position: 'bottom',
        showCloseButton: true
      });

      toast.present();
      return;
    }

    if (((this.about).trim()).length < 1 || ((this.name).trim()).length < 1) {
      let toast = this.toastCtrl.create({
        message: 'Invalid Input',
        duration: 3000,
        position: 'bottom',
        showCloseButton: true
      });

      toast.present();
      return;
    }
    this.navCtrl.push(AppointmentDetailPage, {category: this.category, clinic: this.clinic[0], name: this.name, about: this.about});
  }

}
