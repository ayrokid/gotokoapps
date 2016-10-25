import { Component, ViewChild } from '@angular/core';
import { Slides, NavController } from 'ionic-angular';

import { Home } from '../home/home';

/*
  Generated class for the Slides page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-slides',
  templateUrl: 'welcome.html'
})
export class Welcome {

  rootPage: any;

  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

  @ViewChild('mySlider') slider: Slides;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Slides Page');
  }

  mySlideOptions = {
    initialSlide: 0,
    autoplay:5000
  }

  exitSlide() {
    this.slider.slideTo(3, 500);
  }

  goHome() {
    //this.rootPage = Home;
    //this.navCtrl.setRoot(Home);
    this.navCtrl.setRoot(Home);
  }
}
