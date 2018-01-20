import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';


/**
 * Generated class for the BabyCareMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;
@IonicPage()

@Component({
  selector: 'page-baby-care-map',
  templateUrl: 'baby-care-map.html',
})
export class BabyCareMapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, private spinnerDialog: SpinnerDialog) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.spinnerDialog.show(null, null, true)
    this.geolocation.getCurrentPosition().then((position) => {
      console.log(position);
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addMarker();
      this.spinnerDialog.hide();
    }, (err) => {
      console.log(err);
      this.spinnerDialog.hide();
    });

  }

  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  addMarker(){

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);

  }

}
