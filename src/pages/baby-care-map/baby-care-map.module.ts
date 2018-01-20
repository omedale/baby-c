import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BabyCareMapPage } from './baby-care-map';

@NgModule({
  declarations: [
    BabyCareMapPage,
  ],
  imports: [
    IonicPageModule.forChild(BabyCareMapPage),
  ],
})
export class BabyCareMapPageModule {}
