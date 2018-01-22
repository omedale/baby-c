import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { BabyCareMapPage } from '../pages/baby-care-map/baby-care-map';
import { DoctorListPage } from '../pages/doctor-list/doctor-list';
import { TabsPage } from '../pages/tabs/tabs';
import { CareCalenderPage } from '../pages/care-calender/care-calender';
import { CareSettingsPage } from '../pages/care-settings/care-settings';
import { CareAboutPage } from '../pages/care-about/care-about';
import { CareOnlinePage } from '../pages/care-online/care-online';
import { BookAppointmentPage } from '../pages/book-appointment/book-appointment';
import { AppointmentDetailPage } from '../pages/appointment-detail/appointment-detail';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GithubUsers } from '../providers/github-users/github-users';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { Network } from '@ionic-native/network';
// import { Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ConnectivityProvider } from '../providers/connectivity/connectivity';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { LocationsProvider } from '../providers/locations/locations';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    UserDetailsPage,
    HomePage,
    BabyCareMapPage,
    DoctorListPage,
    TabsPage,
    CareCalenderPage,
    CareOnlinePage,
    CareAboutPage,
    CareSettingsPage,
    BookAppointmentPage,
    AppointmentDetailPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    UserDetailsPage,
    HomePage,
    BabyCareMapPage,
    DoctorListPage,
    TabsPage,
    CareCalenderPage,
    CareOnlinePage,
    CareAboutPage,
    CareSettingsPage,
    BookAppointmentPage,
    AppointmentDetailPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpinnerDialog,
    Geolocation,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubUsers,
    ConnectivityProvider,
    GoogleMapsProvider,
    LocationsProvider
  ]
})
export class AppModule {}
