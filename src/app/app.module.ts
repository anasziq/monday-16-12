import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import firebaseconfig from './firebase';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { EmailComposer} from '@ionic-native/email-composer/ngx'

import { AgmCoreModule } from '@agm/core';
import {Facebook } from "@ionic-native/facebook/ngx"
import { Camera } from '@ionic-native/camera/ngx';
import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFireStorage } from '@angular/fire/storage';

import { AngularFireAuth } from '@angular/fire/auth'
import { environment } from '../environments/environment';
import { FileSizeFormatPipe } from '../../src/app/public/profile-edit/file-size-edit-pipe';
import {MycomponentComponent} from '../app/mycomponent/mycomponent.component'
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

import { Crop } from '@ionic-native/crop/ngx';

@NgModule({
  declarations: [AppComponent,FileSizeFormatPipe,MycomponentComponent],
  entryComponents: [],
  imports: 
  [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    FormsModule, 
    ReactiveFormsModule ,    
     AngularFireModule.initializeApp(firebaseconfig) ,
     AgmCoreModule.forRoot({
       apiKey : environment.googleMapsKey
     })
     ,
     AngularFireDatabaseModule,
     AngularFireAuthModule,
     
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    AngularFirestore,
    AngularFireStorage,
    ImagePicker ,
    FileTransfer,
    Crop,
  
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Facebook,
    Camera
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

