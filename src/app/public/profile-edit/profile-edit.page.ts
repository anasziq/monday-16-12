import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ActionSheetController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


export interface Image {
  id: string;
  image: string;
}
@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {


  ngOnInit() {
    console.log("edit profile");
  }

  profileForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController,
    public fb: FormBuilder,
    public camera: Camera,
    public afDb: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public router: Router,
    private storage: AngularFireStorage,
    private afs: AngularFirestore
  ) {
      this.profileForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  }

  backToUser() {
    this.router.navigate(["/tabs"]);

  }
  save(profile) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        if (profile.firstName != "") {
          user.updateProfile({
            displayName: profile.firstName + " " + profile.lastName,
          })
          if (profile.password != "") {
            user.updatePassword(profile.password);
          }
        }

      }
    });


  }


}
