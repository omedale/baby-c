import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CareOnlinePage } from './care-online';

@NgModule({
  declarations: [
    CareOnlinePage,
  ],
  imports: [
    IonicPageModule.forChild(CareOnlinePage),
  ],
})
export class CareOnlinePageModule {}
