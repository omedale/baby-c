import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DoctorListPage } from '../doctor-list/doctor-list';
import { BabyCareMapPage } from '../baby-care-map/baby-care-map';
import { CareCalenderPage } from '../care-calender/care-calender';
import { CareOnlinePage } from '../care-online/care-online';
import { CareAboutPage } from '../care-about/care-about';
import { CareSettingsPage } from '../care-settings/care-settings';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root: any = BabyCareMapPage;
  tab2Root: any = CareCalenderPage;
  tab3Root: any = CareOnlinePage;
  tab4Root: any = CareAboutPage;
  tab5Root: any = CareSettingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
