import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation}    from 'ionic-native';

/*
  Generated class for the Imaps page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var google;

@Component({
  selector: 'page-imaps',
  templateUrl: 'imaps.html'
})
export class Imaps {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('from') fromElement: ElementRef;
  @ViewChild('to') toElement: ElementRef;
  map: any;
  fromValue: string;
  toValue: string;
  marker: any;
  infowindow: any;

  constructor(public navCtrl: NavController) {
    this.fromValue = "";
    this.toValue = "";
    this.marker = "";
    this.infowindow = "";
  }

  clearFrom() {
    this.fromValue = "";
  }

  clearTo() {
    this.toValue = "";
  }
  /*
  ngOnInit(){

    // get the two fields
    let input_from = (<HTMLInputElement>document.getElementById("journey_from"));
    let input_to = (<HTMLInputElement>document.getElementById("journey_to"));

    // set the options
    let options = {
    types: [],
    componentRestrictions: {country: "id"}
    };

    // create the two autocompletes on the from and to fields
    let autocomplete1 = new google.maps.places.Autocomplete(input_from, options);
    let autocomplete2 = new google.maps.places.Autocomplete(input_to, options);

    // we need to save a reference to this as we lose it in the callbacks
    let self = this;

    // add the first listener
    google.maps.event.addListener(autocomplete1, 'place_changed', function() {

      let place = autocomplete1.getPlace();
      let geometry = place.geometry;
      if ((geometry) !== undefined) {

      console.log(place.name);

      console.log(geometry.location.lng());

      console.log(geometry.location.lat());
      }

    });
    // add the second listener
    google.maps.event.addListener(autocomplete2, 'place_changed', function() {
    let place = autocomplete2.getPlace();
    let geometry = place.geometry;

    if ((geometry) !== undefined) {

    console.log(place.name);

    console.log(geometry.location.lng());

    console.log(geometry.location.lat());
    }

    });

  }
  */
  ionViewDidLoad() {
    console.log('Hello MyMaps Page');
    this.loadMap();
  }

  ionViewLoaded(){
    this.loadMap();
  }
 
  loadMap(){
 
    Geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        componentRestrictions: {country: "id"},
        travelMode : google.maps.TravelMode.DRIVING
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
    }, (err) => {
      console.log(err);
    });

    let options = {
    types: [],
    componentRestrictions: {country: "id"}
    };

    // create the two autocompletes on the from and to fields
    let autocomplete1 = new google.maps.places.Autocomplete(this.fromElement.nativeElement, options);
    let autocomplete2 = new google.maps.places.Autocomplete(this.toElement.nativeElement, options);
    this.infowindow = new google.maps.InfoWindow();
    this.marker = new google.maps.Marker({
      map: this.map,
      draggable: true
    });

    google.maps.event.addListener(autocomplete1, 'place_changed', () => {
      let place = autocomplete1.getPlace();
      let geometry = place.geometry;

      if ((geometry) !== 'undefined') {
        this.addMarker(geometry.location, place.name);
        //this.marker.setPosition(geometry.location);
      }

    });

    google.maps.event.addListener(autocomplete2, 'place_changed', () => {
      let place = autocomplete2.getPlace();
      let geometry = place.geometry;

      if ((geometry) !== 'undefined') {
        this.addMarker(geometry.location, place.name);
      }

    });
  }

  addMarker(location, place){
      let marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: location,
          draggable: true,
          anchorPoint: new google.maps.Point(0, -29),
      });

      let content = "<h4>"+place+"</h4>";

      this.addInfoWindow(marker, content);
  }

  addInfoWindow(marker, content){
      let infoWindow = new google.maps.InfoWindow({
          content: content
      });

      google.maps.event.addListener(marker, 'click', () => {
          infoWindow.open(this.map, marker);
      });
  }

}
