import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import {Facebook ,FacebookLoginResponse } from "@ionic-native/facebook/ngx" 
import * as firebase from 'firebase';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  password; 
  passagain;
  email;
  name;
  usersList: AngularFireList<any>;
  hasVerifiedEmail = false;
  second = true;;
  signO = true;
  sentTimestamp;

  constructor(
    private router: Router, 
    private fb: FormBuilder,
     private emailComposer: EmailComposer,
    private facebook :Facebook,
    private db: AngularFireDatabase, private fireauth: AngularFireAuth,
     public toastController: ToastController) {

    this.usersList = db.list<any>('/User/');
  }

  loginF(): Promise<any> {
    return this.facebook.login(['email'])
      .then( response => {
        const facebookCredential = firebase.auth.FacebookAuthProvider
          .credential(response.authResponse.accessToken);
  
        firebase.auth().signInWithCredential(facebookCredential)
          .then( success => { 
            console.log("Firebase success: " + JSON.stringify(success)); 
          });
  
      }).catch((error) => { console.log(error) });
  }
  // async loginF() {

  //   this.facebook.login(['email'])
  //     .then((response: FacebookLoginResponse) => {

  //       this.onLoginSuccess(response);
  //       console.log(response.authResponse.accessToken);
  //     }).catch((error) => {
  //       console.log(error)
  //       alert('error:' + error)
  //     });
  // }

  // onLoginSuccess(res: FacebookLoginResponse) {
  //   // const { token} = res;
  //   const credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
  //   this.fireauth.auth.signInWithCredential(credential)
  //     .then((response) => {
  //        console.log("Firebase success: " + JSON.stringify(response)); 
  //       this.router.navigate(["/tabs"]);
  //     })

  // }
  // onLoginError(err) {
  //   console.log(err);
  // }



  // loginF(){

  //       this.fireauth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider()).then(res =>{
  //     console.log("in");
  //     console.log(res);
  //     this.router.navigate(['tabs']);

  //   }).catch(err => {
  //     console.log(err);
  //   })
    
  // }
  loginG(){
    this.fireauth.auth.signOut();
  }
  flag = true;
  ngOnInit() {

    this.fireauth.authState.subscribe(user => {
      if (user) {
        this.hasVerifiedEmail = this.fireauth.auth.currentUser.emailVerified;
        this.second = this.fireauth.auth.currentUser.emailVerified;
        if(!this.second && !this.hasVerifiedEmail ){    
          this.signO = false;
        }
        // if(this.hasVerifiedEmail){
        //   console.log("add user");
         
        //   this.router.navigate(['login']);
    
        // }
      }
    });
    
    
    
  }

  backToLogin() {

    this.router.navigate(['login']);
  }

  signup() {
    if(this.name != null && this.email !=null && this.password !=null && this.passagain !=null){
    if(this.password = this.passagain){
    this.fireauth.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then(res => {
        if (res.user) {
          this.fireauth.authState.subscribe(user => {
            if (user) {
              
              user.updateProfile({
                displayName :this.name,
                photoURL : "../../../../assets/icon/userPic.jpg"
              }).then(function() {
                // Update successful.
              }).catch(function(error) {
                // An error happened.
              });
            
              let userRef =this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid);
              userRef.set({
                'name': this.name,
                'email':  this.fireauth.auth.currentUser.email,
                'key' :this.fireauth.auth.currentUser.uid,
                'imageURL' : "../../../../assets/icon/userPic.jpg" ,
                'vistedPlaces' : ["vistedPlaces"] ,
                'savedPlaces' :["savedPlaces"],
                'lastSearch' : " ",
                'language' : "English",
                'fromMoreInfo' : "no"
              });
             
              // this.usersList.push({
              //   name: this.fireauth.auth.currentUser.displayName,
              //   email: this.fireauth.auth.currentUser.email ,
              //   vistedPlaces: [],
              //   savedPlaces :[]
         
              //   }).then(newUser => { console.log("seucess"); }
              //   , error => { console.log("error") }
              // );
            
            }
          });
        }
      })
      .catch(err => {
        console.log('signup failed ${err}');
        console.log(err.message);
        this.presentToast(err.message);
      });
     
    }
    else{
      this.presentToast("Passwords doesnt match");
    }
  }else{
    this.presentToast("Please fill the field");
  }
  }

  goBack() {
  
   this.db.database.ref('users/'+this.fireauth.auth.currentUser.uid ).remove();
    this.fireauth.auth.currentUser.delete();
    this.hasVerifiedEmail = true;
    this.signO = true;
  }
  goIn() {
    if (this.hasVerifiedEmail) {
      this.usersList.push({
        key_id: new Date().getTime(),
        name: this.name,
        email: this.email,
        password: this.password,

      }).then(newUser => { console.log("success"); }
        , error => { console.log("error") }
      );
      this.signO = true;
    }
    else{
      this.presentToast("Please Verify your Email");
    }
    
   

  }
  async presentToast(m) {
    const toast = await this.toastController.create({
      message: m,
      duration: 5000
    });
    toast.present();
  }
  sendVerificationEmail() {
    this.fireauth.auth.currentUser.sendEmailVerification();
    this.sentTimestamp = new Date();
  }
  
  relload() {
    this.signO = false;
    window.location.reload();
    this.router.navigate(['register']);
  }


}
