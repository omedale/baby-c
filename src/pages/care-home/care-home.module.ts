import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CareHomePage } from './care-home';

@NgModule({
  declarations: [
    CareHomePage,
  ],
  imports: [
    IonicPageModule.forChild(CareHomePage),
  ],
})
export class CareHomePageModule {}
