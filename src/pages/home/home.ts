import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  //rootPage: any;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    ///this.navCtrl.setRoot(Home);
    console.log('Hello Home Page');
  }

}
