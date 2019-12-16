import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
//import { } from '@google/maps';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { analytics } from 'firebase';
import { UrlHandlingStrategy } from '@angular/router';
import { AngularFireDatabase, AngularFireList,AngularFireAction  } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
//import { TextToSpeech } from '@ionic-native/text-to-speech';

declare var google;


@Component({
  selector: 'ta',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit, AfterViewInit {

  @ViewChild('gmap', { static: false }) gmapElement: ElementRef;
  //directionsService = new google.maps.DirectionsService;
  //directionsRenderer = new google.maps.DirectionsRenderer;
  //placesService = new  google.maps.places.PlacesService;
  directionForm: FormGroup;
  currentLocation: any = {
    lat: 31.9753,
    lng: 35.1960
  };
  photo;
  markers: any;
  subscription: any;
  points: any;
  map: any;
  plac_id: any;
  lastSearch;
  language;
  fromMoreInfo;
  constructor(
    private db: AngularFireDatabase,
    private fireauth: AngularFireAuth,
    private fb: FormBuilder, 
    private geolocation: Geolocation, 
    // private tts:TextToSpeech
     ) {
    this.createDirectionForm();
  }


  createDirectionForm() {
    this.directionForm = this.fb.group({
      destination: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {

    
    const mapOptions = {
      zoom: 10,
      center: this.currentLocation//chicago
    }
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapOptions);
    console.log("lat= ", this.currentLocation.lat, "lng = ", this.currentLocation.lng);
    console.log("i will display");

    this.geolocation.getCurrentPosition().then((resp) => {
      this.currentLocation.lat = resp.coords.latitude;
      this.currentLocation.lng = resp.coords.longitude;
      let marker = new google.maps.Marker({
        map: this.map,
        position: this.currentLocation,
        clickable: true,
      });

    });
    


    //this.directionsRenderer.setMap(this.map);



    console.log("finished disp");
  }

  dispRoutes() {
    // this.calculateAndDisplayRouteN();
    //this.calculateAndDisplayRoute();
  }



  calculateAndDisplayRouteN() {
    //  let Value;
    // this.findWaypoints();
    console.log("in calculate and dis");

    let request = {
      query: this.directionForm.value.destination,
      fields: ["geometry", "photos", "rating", "place_id", "name"],

    };

    const map = this.map;
    let loc = {
      lat: 31.9753,
      lng: 35.1960
    };
    this.geolocation.getCurrentPosition().then((resp) => {
      loc.lat = resp.coords.latitude;
      loc.lng = resp.coords.longitude;
    });
    
    let service = new google.maps.places.PlacesService(map);
    let pho;
    service.findPlaceFromQuery(request, function (result, status) {
      //service.getDetails(request, function (result, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log("I entered teh display function value ", result);

        console.log("name ", result[0].name);
        console.log("photo ref ", result[0]);
        let marker = new google.maps.Marker({
          map: map,
          position: result[0].geometry.location,
          clickable: true,
        });
        let phot = result[0].photos[0].getUrl({ maxWidth: 300, maxHeight: 350 });
        pho = phot;// result[0].photos[0].getUrl({maxWidth: 300, maxHeight: 350});
        console.log("photo link", pho);
        let contentHeader = '<h1>' + result[0].name + '</h1>';
        let contentPhoto = '<img src="' + phot + '" alt="what"> ';
        let contentBody = '';
        console.log(phot);
        marker.infowindow = new google.maps.InfoWindow({
          maxWidth: 800,
          content: contentHeader + contentPhoto + contentBody +
            '<button onclick="myFunction()">clck me</button>'
        });
        google.maps.event.addListener(marker, 'click', function () {
          marker.infowindow.open(this.map, marker);
        });


        let directionsService = new google.maps.DirectionsService;
        let directionsRenderer = new google.maps.DirectionsRenderer;
        directionsRenderer.setMap(map);

        const that = this;
        console.log("im here N ", result);
        console.log("I entered teh display function value ", result[0].geometry.location);

        directionsService.route({
          origin: loc,
          destination: result[0].geometry.location,
          waypoints: [
            { location: { lat: 31.9038, lng: 35.2034 }, stopover: true },
            { location: { lat: 31.7683, lng: 35.2137 }, stopover: true },
          ],
          //destination: formValues.destination,
          travelMode: 'DRIVING'
        }, (response, status) => {
          if (status === 'OK') {

            directionsRenderer.setOptions({
              polylineOptions: {
                strokeColor: 'gray',
              }
            });
            directionsRenderer.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
        console.log("fineshed");
      }
    });
    console.log("photototo link", pho);

  }

  findWaypoints() {

    // this.getUserLocation();
    // this.subscription = this.geo.hits
    //   .subscribe(hits => this.markers = hits);

  //  let infowindow = new Array(this.markers.length);
    //let marker = new Array( this.markers.length);
    //let marker;
    //console.log("my markers1 = ", this.markers);
    // let i = 0;
    // for (i = 0; i < this.markers.length; i++) {
    //   // add marker to the map at the point from the database.
    //   let marker = new google.maps.Marker({
    //     position: { lat: this.markers[i].location[0], lng: this.markers[i].location[1] },
    //     map: this.map,
    //     clickable: true
    //   });
      // adding info window to each marker.   
      // marker.infowindow = new google.maps.InfoWindow({
      //   maxWidth: 400,
      //   content: //`<p>you are` + Math.round(this.markers[i].distance) + `KM from this point</p>` +
      //     `<button onclick="myFunction()>click me</button>`

      // });

      // google.maps.event.addListener(marker, 'click', function () {
      //   marker.infowindow.open(this.map, marker);
      // });

  //  }


  }

  tfunc() {

    console.log("ChIJ-ciH5nvYAhURHCYk1XvDYNA", this.plac_id);
    // let request = {
    //   placeId: "ChIJ-ciH5nvYAhURHCYk1XvDYNA",
    //   fields: ["geometry", "photos", "rating","place_id", "name"],

    // };

    // let service = new google.maps.places.PlacesService(this.map);
    // service.getDetails(request, function (place, status) {


    // }



  }


  // myFunction() {
  //   console.log("button clicked");

  //   this.tts.speak({
  //     text: 'what are we doing ',
  //     rate: 1,
  //     locale: 'en-US'
  //   })
  //     .then(() => console.log('Success'))
  //     .catch((reason: any) => console.log(reason));

  //   this.tts.speak({
  //     text: 'ماذا هنالك يا غلام',
  //     rate: 1,
  //     locale: 'ar'
  //   })
  //     .then(() => console.log('Success'))
  //     .catch((reason: any) => console.log(reason));
  

  //   //responsiveVoice.cancel();
  //  // responsiveVoice.speak("hello world", "UK English Male");

  //   // // Imports the Google Cloud client library
  //   // const textToSpeech = require('@google-cloud/text-to-speech');

  //   // // Import other required libraries
  //   // const fs = require('fs');
  //   // const util = require('util');
  //   // async function main() {
  //   //   // Creates a client
  //   //   const client = new textToSpeech.TextToSpeechClient();

  //   //   // The text to synthesize
  //   //   const text = 'Hello, world!';

  //   //   // Construct the request
  //   //   const request = {
  //   //     input: { text: text },
  //   //     // Select the language and SSML Voice Gender (optional)
  //   //     voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
  //   //     // Select the type of audio encoding
  //   //     audioConfig: { audioEncoding: 'MP3' },
  //   //   };

  //   //   // Performs the Text-to-Speech request
  //   //   const [response] = await client.synthesizeSpeech(request);
  //   //   // Write the binary audio content to a local file
  //   //   const writeFile = util.promisify(fs.writeFile);
  //   //   await writeFile('output.mp3', response.audioContent, 'binary');
  //   //   console.log('Audio content written to file: output.mp3');
  //   // }
    
  // }

  calculateAndDisplayRoute(x) {


    this.findWaypoints();

    //  let Value;
    // this.findWaypoints();
    console.log("in calculate and dis");

    let request = {
      query: x,
      fields: ["geometry", "photos", "rating", "place_id", "name"],
    };

    const map = this.map;
    let loc = {
      lat: 31.9753,
      lng: 35.1960
    };
    this.geolocation.getCurrentPosition().then((resp) => {
      loc.lat = resp.coords.latitude;
      loc.lng = resp.coords.longitude;
    });
    let service = new google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request, function (result, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log("I entered teh display function value ", result);

        console.log("name ", result[0].name);
        console.log("photo ref ", result[0]);
        let marker = new google.maps.Marker({
          map: map,
          position: result[0].geometry.location,
          clickable: true,
        });
        let phot = result[0].photos[0].getUrl({ maxWidth: 300, maxHeight: 350 });
        console.log("place id ", result[0].place_id);
        //this.plac_id = result[0].place_id;
        let contentHeader = '<h1>' + result[0].name + '</h1>';
        let contentPhoto = '<img src="' + phot + '" alt="what"> ';
        console.log(phot);
        marker.infowindow = new google.maps.InfoWindow({
          maxWidth: 800,
          content: contentHeader + contentPhoto +
            '<ion-button (click)="myFunction()"><ion-icon name="mic"></ion-icon></ion-button>'
        });
        google.maps.event.addListener(marker, 'click', function () {
          marker.infowindow.open(this.map, marker);
        });


        let directionsService = new google.maps.DirectionsService;
        let directionsRenderer = new google.maps.DirectionsRenderer;
        directionsRenderer.setMap(map);

        const that = this;
        console.log("im here N ", result);
        console.log("I entered teh display function value ", result[0].geometry.location);

        directionsService.route({
          origin: loc,
          destination: result[0].geometry.location,
          //destination: formValues.destination,
          travelMode: 'DRIVING'
        }, (response, status) => {
          if (status === 'OK') {
            directionsRenderer.setOptions({
              polylineOptions: {
                strokeColor: 'blue',
              },
              suppressMarkers: true
            });
            directionsRenderer.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });

        
        console.log("fineshed");
      }
    });


  }

  ngOnInit() {
    this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid).once('value',(snapshot)=>{
      this.lastSearch = snapshot.val().lastSearch;
      this.language = snapshot.val().language;
      this.fromMoreInfo = snapshot.val().fromMoreInfo;
      if(this.fromMoreInfo == 'yes'){
        this.calculateAndDisplayRoute(this.lastSearch);
      }
    });
    
    // this.getUserLocation();
    // this.subscription = this.geo.hits
    //   .subscribe(hits => this.markers = hits);

    let marker;
    // this.markers.forEach(element => {
    //   marker = new google.maps.Marker({
    //     position: { lat: element.location[0], lng: element.location[1] },
    //     map: this.map,
    //   });
    // });

    console.log("my markers = ", this.markers);

  }

  private getUserLocation() {
    /// locate the user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.currentLocation.lat = position.coords.latitude;
        this.currentLocation.lng = position.coords.longitude;

      //  this.geo.getLocations(100, [this.currentLocation.lat, this.currentLocation.lng]);

      });
    }
  }


}
