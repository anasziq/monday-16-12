import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList,AngularFireAction  } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth'
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import {BehaviorSubject} from 'rxjs';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import { GeoService } from '../../../geo.service';
import { User } from '../../models/User'
import { AlertController } from '@ionic/angular';
import { TabsPage} from './../tabs/tabs.page'

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  markers: any;
  subscription: any;
  points: any;
  currentLocation: any = {
    lat: 31.9753,
    lng: 35.1960
  };

  items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>; //added
  size$: BehaviorSubject<string|null>;//added
  
  location$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>; //added
  sizeL$: BehaviorSubject<string|null>;//added
  numberOfPlaces = 15;
  visited = false; 
  numVisit=0;
  mostPop = false;
  near = false ; 
  saved = false;
  allplaces = true;
  wherIam = "All places";
  wherIama = "جميع الاماكن";
  visitedplaces : string[]= []
  savedplaces : string[]= []
  locationname; l0 ; l1;
  arrayVisit: number[]=[];
  language;
  constructor(
    private router: Router,
    private db: AngularFireDatabase,
    private fireauth: AngularFireAuth,
    public toastController: ToastController,
    private geo: GeoService,
    public alertController: AlertController,
    private c : TabsPage

  ) { 
    this.size$ = new BehaviorSubject(null); //added
    this.items$ = this.size$.switchMap(size =>  //added
      db.list('/places', ref =>  //added
        size ? ref.orderByChild('size').equalTo(size) : ref  //added
      ).snapshotChanges() //added
    );
    this.sizeL$ = new BehaviorSubject(null); //added
    this.location$ = this.size$.switchMap(size =>  //added
      db.list('/locations', ref =>  //added
        size ? ref.orderByChild('size').equalTo(size) : ref  //added
      ).snapshotChanges() //added
    );

    this.items$.subscribe(actions => {
      actions.forEach(action => {
    
      //  this.locationname = action.payload.val().location; 
         
      //  console.log("name befoe is "+this.locationname );

});      
});

  }
  ngOnInit() {
    console.log("tab2");
  }
  goToTab2(){
    console.log("tab 2");

    this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid).once('value',(snapshot)=>{
      this.language = snapshot.val().language;
    
    });
    console.log(this.language);
  }
  moreInfo(name){
    console.log(name);
      let userRef =this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid);
      userRef.update({
        'lastSearch':  name
      });
    
    
    this.router.navigate(["/more-info"]);
  }


  findNearPoints(){

    this.getUserLocation();
    console.log(this.geo.hits);
    this.subscription = this.geo.hits
        .subscribe(hits => this.markers = hits);
  }

  private getUserLocation() {
    /// locate the user
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
        this.currentLocation.lat = position.coords.latitude;
        this.currentLocation.lng = position.coords.longitude;
 
        this.geo.getLocations(100, [this.currentLocation.lat, this.currentLocation.lng]);
 
      });
    }
  }
 
  addToVisited(namePlace){
    let flag = true;
    this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid).once('value',(snapshot)=>{
      this.visitedplaces = snapshot.val().vistedPlaces;
      for(let i =0 ; i < this.visitedplaces.length ; ++i){
        if( this.visitedplaces[i] == namePlace  )
          flag = false;
      }
      if(flag)
      {
      this.visitedplaces.push(namePlace);
      let userRef =this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid);
      userRef.update({
        'vistedPlaces':  this.visitedplaces
      });
      let i=1; 
      for(;i< this.numberOfPlaces+1 ; ++i){
        this.db.database.ref('places/place'+i).once('value',(snapshot)=>{
           if(snapshot.val().name  == namePlace )
           {
            this.numVisit = snapshot.val().visited;
             this.numVisit++;
             let placeRef =this.db.database.ref('places/place' + i);
            placeRef.update({
             'visited' : this.numVisit
            })
           }
         });
       }


    }
    });

 
   

  }

  async presentAlertConfirm(namePlace) {
    const alert = await this.alertController.create({
      header: 'Confirm deleting',
      message: 'Are you sure ?!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          handler: () => {
            this.deleteSaved(namePlace);
            console.log('Confirm Delete');
          }
        }
      ]
    });

    await alert.present();
  }



  deleteSaved(namePlace){
    this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid).once('value',(snapshot)=>{
      this.savedplaces = snapshot.val().savedPlaces;
      for(let i =0 ; i < this.savedplaces.length ; ++i){
        if( this.savedplaces[i] == namePlace  )
        this.savedplaces[i]="";
      }
      let userRef =this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid);
      userRef.update({
        'savedPlaces':  this.savedplaces
      });
    
    });
  }
  addToSaved(namePlace){
    let flag = true;
    this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid).once('value',(snapshot)=>{
      this.savedplaces = snapshot.val().savedPlaces;
      for(let i =0 ; i < this.savedplaces.length ; ++i){
        if( this.savedplaces[i] == namePlace  )
          flag = false;
      }
      if(flag)
      {
      this.savedplaces.push(namePlace);
      let userRef =this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid);
      userRef.update({
        'savedPlaces':  this.savedplaces
      });
    }
    });

  }
  getNear(){
    this.findNearPoints();
    console.log("this.markers");
    console.log(this.markers);
      this.wherIam = " Near Places To You"; 
      this.wherIama = "الاماكن القريبة منك";
      this.near = true;
    this.visited =false;
    this.mostPop = false; 
    this.saved = false;
    this.allplaces = false;
    this.markers.forEach(element => {
      console.log("place = ",element.key);

    });
  }
  getVisited(){
    this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid).once('value',(snapshot)=>{
      this.visitedplaces = snapshot.val().vistedPlaces;
    })
    
      this.wherIam = "Visited Places"; 
     this.wherIama = "الاماكن التي زرتها";
    this.near = false;
    this.visited =true;
    this.mostPop = false; 
    this.saved = false;
    this.allplaces = false;


  }
  getMostPopular(){
    let i=1; 
    for(;i< this.numberOfPlaces+1 ; ++i){
      this.db.database.ref('places/place'+i).once('value',(snapshot)=>{
       
          this.arrayVisit[i] = snapshot.val().visited;
          
       });
     }
     var sortedArray = this.arrayVisit.sort((n1,n2) => {
      if (n1< n2) {
          return 1;
      }
  
      if (n1 > n2) {
          return -1;
      }
  
      return 0;
  }); 
  this.arrayVisit = sortedArray;
  console.log(this.arrayVisit);
    this.wherIam = " Most Popular Places"; 
  this.wherIama = "الاماكن الاكثر زيارة";
    this.near = false;
    this.visited =false;
    this.mostPop = true; 
    this.saved = false;
    this.allplaces = false;

  }
  getSaved(){
    this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid).once('value',(snapshot)=>{
      this.savedplaces = snapshot.val().savedPlaces;
    });
      this.wherIam = " Saved Places"; 
    this.wherIama = "الاماكن المحفوظة";
    this.near = false;
    this.visited =false;
    this.mostPop = false; 
    this.saved = true;
    this.allplaces = false;

  }
  getAllPlaces(){
    if(this.c.language == "English")
      this.wherIam = "All Places";
    this.wherIama = "جميع الاماكن";
    this.near = false;
    this.visited =false;
    this.mostPop = false; 
    this.saved = false;
    this.allplaces = true;

  }
}
