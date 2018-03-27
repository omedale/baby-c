import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { ConnectivityProvider } from '../../providers/connectivity/connectivity';
import { LocationsProvider } from '../../providers/locations/locations';
import { DoctorListPage } from '../doctor-list/doctor-list';


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
  windowInfo: any;
  loadedMap: any;
  mockLocation: any;

  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, private spinnerDialog: SpinnerDialog, public connectivityService: ConnectivityProvider, public locationServices: LocationsProvider) {
    this.mockLocation = [
      {
        "title": "City Hall",
        "latitude": 40.713484,
        "longitude": -74.006739
      },
      {
        "title": "Brooklyn Bridge",
        "latitude": 40.712801,
        "longitude": -74.004936
      },
      {
        "title": "NYPD",
        "latitude": 40.712199,
        "longitude": -74.001675
      },
      {
        "title": "The Woolworth Building",
        "latitude": 40.712443,
        "longitude": -74.008369
      },
      {
        "title": "Foley Square",
        "latitude": 40.714541,
        "longitude": -74.003091
      },
      {
        "title": "Sazon",
        "latitude": 40.715631,
        "longitude": -74.008498
      },
      {
        "title": "Southbridge Towers",
        "latitude": 40.709206,
        "longitude": -74.003434
      },
      {
        "title": "Wall St",
        "latitude": 40.707612,
        "longitude": -74.011996
      },
      {
        "title": "Tribeca Grill",
        "latitude": 40.719518,
        "longitude": -74.009807
      }
    ]
  }

  ionViewDidLoad() {
    //  this.locationServices.load();
    // console.log(this.loadedMap);
    this.platform.ready().then(() => {
      this.loadMap();
    });

  }

  loadMap() {
    this.spinnerDialog.show(null, null, true)
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      // this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      let service = new google.maps.places.PlacesService(this.map);

      service.nearbySearch({
        location: latLng,
        radius: 500,
        type: ['hospital']
      }, this.callback.bind(this));
      this.spinnerDialog.hide();
    }, (err) => {
      this.spinnerDialog.hide();
    });

  }

  callMacker() {
    for (var i = 0; i < this.mockLocation.length; i++) {
      this.addMarker(this.mockLocation[i].latitude, this.mockLocation[i].longitude, this.mockLocation[i].title, i);
    }
    // console.log('--------------------------');
    // console.log(this.mockLocation);
  }

  callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        this.mockLocation.push({ title: results[i].name, latitude: results[i].geometry.location.lat(), longitude: results[i].geometry.location.lng()})
      }
    }
    this.callMacker();
  }

  createMarker(place) {
    var marker = new google.maps.Marker({
      map: this.map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function () {
      this.windowInfo.setContent(place.name);
      this.windowInfo.open(this.map, this);
    });
  }

  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      this.spinnerDialog.show(null, null, true)
      infoWindow.open(this.map, marker);
    });

    google.maps.event.addListener(infoWindow, "domready", () => {
      let selectedLocation=[];
      let locationCord = infoWindow.content.split('"')[1].split("-");
      const selectedLat = parseFloat(locationCord[1]);
      const selectedLong = parseFloat(locationCord[2]);
      selectedLocation = this.mockLocation.filter(location => location.latitude === selectedLat && location.longitude === selectedLong);
      if(selectedLocation.length > 0) {
        this.navCtrl.push(DoctorListPage, {selectedLocation});
        this.spinnerDialog.hide();
      }
    });
  }

  addMarker(lat, lng, title, i) {
    let latLng = new google.maps.LatLng(lat, lng);

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });

    let content = `<h4 id="tap-${lat}-${lng}">${title}</h4>`;

    this.addInfoWindow(marker, content);

  }


  sayHello() {
    console.log('hurray')
    alert('hurrey');
  }

}
