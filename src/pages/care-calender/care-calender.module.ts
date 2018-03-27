import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CareCalenderPage } from './care-calender';

@NgModule({
  declarations: [
    CareCalenderPage,
  ],
  imports: [
    IonicPageModule.forChild(CareCalenderPage),
  ],
})
export class CareCalenderPageModule {}
