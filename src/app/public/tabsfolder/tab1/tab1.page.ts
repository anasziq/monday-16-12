import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { TabsPage} from './../tabs/tabs.page'
export interface Image {
  id: string;
  image: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit  {
  url: any;
  newImage: Image = {
    id: this.afs.createId(), image: ''
  }
  loading: boolean = false;;
  
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
    private afs: AngularFirestore,
    private c : TabsPage
     ) { }
  userName;
  userEmail;
  userRank;
  userphoto;
  language;
  changeLanguage; 
  
  ngOnInit() {
    console.log("enter tab 1");
    this.userName = this.afAuth.auth.currentUser.displayName;
    this.userEmail = this.afAuth.auth.currentUser.email;
    //this.userphoto = this.fireauth.auth.currentUser.photoURL;
    this.afDb.database.ref('users/' + this.afAuth.auth.currentUser.uid).once('value',(snapshot)=>{
      this.userphoto = snapshot.val().imageURL;
      this.language = snapshot.val().language;
    });
    
    this.userRank = 0;
  }
  optionsFn(){
    let userRef =this.afDb.database.ref('users/' + this.afAuth.auth.currentUser.uid);
          userRef.update({
               'language': this.changeLanguage
             });
             this.language = this.changeLanguage;
    }

  getFile(){
    document.getElementById('file').click();
  }
  editprofile(){
    this.router.navigate(['profile-edit']);
  }
  logout(){     
      return this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['login']);
      })
  }


  uploadImage(event) {
    this.loading = true;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
     
      reader.readAsDataURL(event.target.files[0]);
      // For Preview Of Image
      reader.onload = (e:any) => { // called once readAsDataURL is completed
        this.url = e.target.result;
      
        // For Uploading Image To Firebase
        const fileraw = event.target.files[0];
       // console.log(fileraw)
        
        const filePath = '/Image/' + this.newImage.id + '/' + 'Image' + (Math.floor(1000 + Math.random() * 9000) + 1);
        const result = this.SaveImageRef(filePath, fileraw);
        const ref = result.ref;
        result.task.then(a => {
          ref.getDownloadURL().subscribe(a => {
         //   console.log(a); 
            this.newImage.image = a;
            this.loading = false;
          });
          
          this.afs.collection('Image').doc(this.newImage.id).set(this.newImage);
          this.userphoto=this.url;
         // this.afAuth.auth.currentUser.providerData = this.url;
          let userRef =this.afDb.database.ref('users/' + this.afAuth.auth.currentUser.uid);
          userRef.update({
               'imageURL': this.url
             });
             //console.log(this.url)
        });
      }, error => {
        alert("Error");
      }

    }
  }



  SaveImageRef(filePath, file) {

    return {
      task: this.storage.upload(filePath, file)
      , ref: this.storage.ref(filePath)
    };
  }





}
