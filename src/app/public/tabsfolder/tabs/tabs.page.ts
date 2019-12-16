import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList,AngularFireAction  } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth'
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  makeHide;
  constructor(
    private fireauth: AngularFireAuth,
        private db: AngularFireDatabase
  ) { }
  
  ngOnInit() {
    console.log("tabs");
     this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid).once('value',(snapshot)=>{
      this.language = snapshot.val().language;
    });
  }
  language;
  goToTab2(){
    this.makeHide = true;
    this.goToTab();
  }
  goToTab3(){
    this.makeHide = false;
    let userRef =this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid);
      userRef.update({
        'fromMoreInfo': "no"
      });
    this.goToTab();
  }
  goToTab(){
    this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid).once('value',(snapshot)=>{
      this.language = snapshot.val().language;
      console.log(this.language);

    });
  }
 

}
