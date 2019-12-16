import {Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList,AngularFireAction  } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth'
import { Observable } from 'rxjs';
import {BehaviorSubject} from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: 'more-info.page.html',
  styleUrls: ['more-info.page.scss'],
})
export class MoreInfoPage implements OnInit  {
 
  myLocation;
  language;
  items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>; //added
  size$: BehaviorSubject<string|null>;//added
  
  
  ngOnInit() {
    this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid).once('value',(snapshot)=>{
      this.myLocation = snapshot.val().lastSearch;
      this.language = snapshot.val().language;
      console.log(this.language);
    });
  }
  goToMap(){
    let userRef =this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid);
      userRef.update({
        'fromMoreInfo': "yes"
      });
    this.router.navigate(["/tab3"]);
  }

  constructor(
    private db: AngularFireDatabase,
    private fireauth: AngularFireAuth,
    private router: Router
   
  ) {
    this.size$ = new BehaviorSubject(null); //added
    this.items$ = this.size$.switchMap(size =>  //added
      db.list('/places', ref =>  //added
        size ? ref.orderByChild('size').equalTo(size) : ref  //added
      ).snapshotChanges() //added
    );
    
  }

 

}
