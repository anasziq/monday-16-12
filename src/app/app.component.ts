import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import {AngularFireAuth} from "@angular/fire/auth"
import { Validators, FormBuilder, FormGroup } from '@angular/forms'; 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent  {
 
 
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private fireAuth: AngularFireAuth
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.fireAuth.auth.onAuthStateChanged(user => {
        if (user) {
          this.router.navigate(["/register"]);
          this.splashScreen.hide();
        }
        else {
          this.router.navigate(["/register"]);
          this.splashScreen.hide();
        }
      })

    
    });
  }
}
