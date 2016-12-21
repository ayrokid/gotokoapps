import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { OneSignal } from 'ionic-native';

/*
  Generated class for the MySignal provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MySignal {

  constructor(public http: Http) {
    /*
    OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
    OneSignal.startInit('3b922d4f-0e11-46cd-af9a-95809bee29d5', '1058443701157');
    OneSignal.inFocusDisplaying(OneSignal.OSInFocusDisplayOption.InAppAlert);
    OneSignal.handleNotificationReceived().subscribe(() => {
    // do something when notification is received
    });

    OneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });

    OneSignal.endInit();
    */
    console.log('Hello MySignal Provider');
  }

}
