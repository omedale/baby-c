import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookAppointmentPage } from '../book-appointment/book-appointment';

@IonicPage()
@Component({
  selector: 'page-doctor-list',
  templateUrl: 'doctor-list.html',
})
export class DoctorListPage {
  selectedClinic: any;
  clinicName: string;
  categories = [
    'Dentist',
    'Surgeon',
    'Nurse',
    'Mid Wife',
    'Doctor',
    'Aneastetic'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedClinic = navParams.get('selectedLocation');
    this.clinicName = this.selectedClinic[0].title
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorListPage');
  }

  categorySelected(category: string) {
    this.navCtrl.push(BookAppointmentPage, {category, clinic: this.selectedClinic});
  }
}
