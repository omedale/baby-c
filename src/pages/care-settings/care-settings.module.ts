import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CareSettingsPage } from './care-settings';

@NgModule({
  declarations: [
    CareSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(CareSettingsPage),
  ],
})
export class CareSettingsPageModule {}
