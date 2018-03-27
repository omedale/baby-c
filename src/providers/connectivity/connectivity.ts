import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Platform, AlertController } from 'ionic-angular';

declare var Connection;

@Injectable()
export class ConnectivityProvider {

  onDevice: boolean;

  constructor(public http: HttpClient, public platform: Platform, private network: Network, public alertCtrl: AlertController) {
    this.onDevice = this.platform.is('cordova');

    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
      let alert = this.alertCtrl.create({
          title: 'Network was disconnected :-(',
          subTitle: 'Please check your connection. And try again',
          buttons: ['OK']
        });
        alert.present();
    });

    // watch network for a connection
    let connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('network connected!'); 
      let alert = this.alertCtrl.create({
          title: 'Network connected!',
          subTitle: 'Hurrah!',
          buttons: ['OK']
        });
        alert.present();
      // We just got a connection but we need to wait briefly
       // before we determine the connection type.  Might need to wait 
      // prior to doing any api requests as well.

    });
  }
}
