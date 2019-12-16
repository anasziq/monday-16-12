import { Injectable, DoBootstrap } from '@angular/core';

import { GeoFire} from "geofire";
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class GeoService {
 
  dbRef: any;
  geoFire: any;

  hits = new BehaviorSubject([]);

  constructor(private db: AngularFireDatabase) {

    console.log("i entered the geo");
    this.dbRef = this.db.list<any>("/locations").query.ref; //database.ref;//this.db.object;
    console.log("Ali_ozreil ", this.dbRef);

    this.geoFire = new GeoFire(this.dbRef);
   }  

   /// Adds GeoFire data to database
   setLocation(key:string, coords: Array<number>) {
     this.geoFire.set(key, coords)
         .then(_ => console.log('location updated'))
         .catch(err => console.log(err))
   }


   /// Queries database for nearby locations
   /// Maps results to the hits BehaviorSubject
   getLocations(radius: number, coords: Array<number>) {
    this.geoFire.query({
      center: coords,
      radius: radius
    })
    .on('key_entered', (key, location, distance) => {
      let hit = {
        location: location,
        distance: distance,
        key:key
      }

      let currentHits = this.hits.value
      currentHits.push(hit)
      this.hits.next(currentHits)
    })
   }

}
