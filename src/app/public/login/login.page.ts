import { Component, OnInit } from '@angular/core';
import {Facebook ,FacebookLoginResponse } from "@ionic-native/facebook/ngx"

import { Router } from '@angular/router';
import { AngularFireDatabase , AngularFireList } from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth'
import { ToastController } from '@ionic/angular';

import { from } from 'rxjs';
import { Profile } from 'selenium-webdriver/firefox';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = ""
  password: string = ""
  userList : AngularFireList<any>;
  users;
  error;

  

  constructor(
     private router: Router,
    private db:AngularFireDatabase , private fireauth :AngularFireAuth,
    public toastController: ToastController , private facebook : Facebook) {
     this.userList= db.list<any>('/User/');
    

     }

  ngOnInit() {
    console.log('login');
  }
  userData = null;
  loginF(){
    this.facebook.login(['email', 'public-profile']).then((response : FacebookLoginResponse)=> {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture-large)',[]).then(profile =>{
          this.userData = {email:profile['email'] , first_name:profile['first_name'],picture: profile['picture_large']['data']['url'],username:profile[name]};
      })
    })
    alert(this.userData.email);
  }
  login(){
    const {email,password}=this;
    console.log("the email is ", email,"the password is ", password);

   this.fireauth.auth.signInWithEmailAndPassword(this.email, this.password)
    .then(res => {
      if (res.user) {
        this.router.navigate(['tabs']);

      }
    })
    .catch(err => {
      this.error = err.message;
      this.presentToast(err.message);
      this.router.navigate(['login']);

    });
   
  }
  GoToRegister(){

    this.router.navigateByUrl('register');
  }
  rememberPassword(){
    this.fireauth.auth.sendPasswordResetEmail(this.email)
      .then(data => {
        console.log(data);
        alert('Password reset email sent');
        this.router.navigateByUrl('/login');
      })
      .catch(err => {
        console.log(' failed ${err}');
        this.error = err.message;
        this.presentToast(err.message);
      });
  }
  async presentToast(m  ) {
    const toast = await this.toastController.create({
      message: m,
      duration: 5000
    });
    toast.present();
  }
}
