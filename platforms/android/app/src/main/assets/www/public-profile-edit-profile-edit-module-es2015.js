(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-profile-edit-profile-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/public/profile-edit/profile-edit.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/public/profile-edit/profile-edit.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-content padding>\n  <ion-card-header>\n    <ion-card-title>Choose Images to Upload</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <div class=\"fileUpload btn btn-primary\">\n      <span>Upload</span>\n      <input\n        id=\"uploadBtn\"\n        type=\"file\"\n        class=\"upload\"\n        (change)=\"uploadFile($event.target.files)\"\n      />\n    </div>\n  </ion-card-content>\n</ion-content> -->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Ionic 4 Crop Upload\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <img *ngIf=\"!fileUrl\" src=\"assets/no-image.jpeg\"/>\n    <img *ngIf=\"fileUrl\" src=\"{{fileUrl}}\"/>\n    <div> {{fileUrl}} </div>\n    <ion-card-content>\n      <ion-button color=\"medium\" size=\"large\" (click)=\"cropUpload()\">\n        <ion-icon slot=\"icon-only\" name=\"camera\"></ion-icon>\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n\n<ion-content padding>\n      <form [formGroup]=\"profileForm\" (ngSubmit)=\"save(profileForm.value)\">\n        <ion-list margin-bottom padding-bottom>\n        \n          <section text-center class=\"profile-picture\">\n            <!-- <app-mycomponent [url]= 'image'> </app-mycomponent> -->\n            <img  [src]=\"fileUrl\" class=\"profile-picture__image\" width=\"100px\" height=\"100px\" alt=\"Profile Picture\">\n         \n          </section>\n          <ion-item>\n            <ion-label>First name</ion-label>\n            <ion-input type=\"text\" formControlName=\"firstName\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Last name</ion-label>\n            <ion-input type=\"text\" formControlName=\"lastName\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Password</ion-label>\n            <ion-input type=\"text\" formControlName=\"password\"></ion-input>\n          </ion-item>\n          <button ion-button block type=\"submit\">Save</button>\n          <button ion-button block (click)=\"backToUser()\" >Back</button>\n        </ion-list>\n      </form>\n      <div>image URL IS {{image}}</div>\n    </ion-content>\n    "

/***/ }),

/***/ "./src/app/public/profile-edit/profile-edit.module.ts":
/*!************************************************************!*\
  !*** ./src/app/public/profile-edit/profile-edit.module.ts ***!
  \************************************************************/
/*! exports provided: ProfileEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditPageModule", function() { return ProfileEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-edit.page */ "./src/app/public/profile-edit/profile-edit.page.ts");







const routes = [
    {
        path: '',
        component: _profile_edit_page__WEBPACK_IMPORTED_MODULE_6__["ProfileEditPage"]
    }
];
let ProfileEditPageModule = class ProfileEditPageModule {
};
ProfileEditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_profile_edit_page__WEBPACK_IMPORTED_MODULE_6__["ProfileEditPage"]]
    })
], ProfileEditPageModule);



/***/ }),

/***/ "./src/app/public/profile-edit/profile-edit.page.scss":
/*!************************************************************!*\
  !*** ./src/app/public/profile-edit/profile-edit.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-home .profile-picture {\n  position: relative;\n}\npage-home .Background-picture__icon {\n  font-size: 3rem;\n  text-align: right;\n}\npage-home .profile-picture__icon {\n  border-radius: 50%;\n  font-size: 2rem;\n  position: absolute;\n  left: 55%;\n  width: 32px;\n  height: 32px;\n  padding-top: 3px;\n}\npage-home .profile-picture__image {\n  border-radius: 50%;\n  height: 128px;\n  width: 128px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL3Byb2ZpbGUtZWRpdC9DOlxcVXNlcnNcXGFuYXMgemlxXFxEZXNrdG9wXFxUZWFtXFxUZWFtV29yay1tYXN0ZXIvc3JjXFxhcHBcXHB1YmxpY1xccHJvZmlsZS1lZGl0XFxwcm9maWxlLWVkaXQucGFnZS5zY3NzIiwic3JjL2FwcC9wdWJsaWMvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxrQkFBQTtBQ0FOO0FERU07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREdNO0VBQ0Usa0JBQUE7RUFFQSxlQUFBO0VBRUEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0hSO0FETU07RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLWhvbWUge1xyXG4gICAgLnByb2ZpbGUtcGljdHVyZSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgICAgLkJhY2tncm91bmQtcGljdHVyZV9faWNvbntcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnByb2ZpbGUtcGljdHVyZV9faWNvbiB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICBcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTUlO1xyXG4gICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5wcm9maWxlLXBpY3R1cmVfX2ltYWdlIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjhweDtcclxuICAgICAgICB3aWR0aDogMTI4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAiLCJwYWdlLWhvbWUgLnByb2ZpbGUtcGljdHVyZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbnBhZ2UtaG9tZSAuQmFja2dyb3VuZC1waWN0dXJlX19pY29uIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbnBhZ2UtaG9tZSAucHJvZmlsZS1waWN0dXJlX19pY29uIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDJyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTUlO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xufVxucGFnZS1ob21lIC5wcm9maWxlLXBpY3R1cmVfX2ltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDEyOHB4O1xuICB3aWR0aDogMTI4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/public/profile-edit/profile-edit.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/public/profile-edit/profile-edit.page.ts ***!
  \**********************************************************/
/*! exports provided: ProfileEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditPage", function() { return ProfileEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");













let ProfileEditPage = class ProfileEditPage {
    constructor(navCtrl, actionSheetCtrl, loadingCtrl, fb, camera, afDb, afAuth, router, storage, database, zone, imagePicker, crop, transfer) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.camera = camera;
        this.afDb = afDb;
        this.afAuth = afAuth;
        this.router = router;
        this.storage = storage;
        this.database = database;
        this.zone = zone;
        this.imagePicker = imagePicker;
        this.crop = crop;
        this.transfer = transfer;
        this.fileUrl = null;
        this.isUploading = false;
        this.isUploaded = false;
        this.imageCollection = database.collection('UserImages');
        this.images = this.imageCollection.valueChanges();
        this.profileForm = this.fb.group({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        });
    }
    ngOnInit() {
        this.image = this.afAuth.auth.currentUser.photoURL;
    }
    // uploadFile(event: FileList) {
    //   // The File object
    //   const file = event.item(0);
    //    // Validation for Images Only
    //   if (file.type.split('/')[0] !== 'image') { 
    //    console.error('unsupported file type :( ')
    //    return;
    //   }
    //    this.isUploading = true;
    //   this.isUploaded = false;
    //   this.fileName = file.name;
    //   // The storage path
    //   const path = 'UserImages/U'+this.afAuth.auth.currentUser.uid;  
    //   // Totally optional metadata
    //   const customMetadata = { app: 'User images for Torusim app' };
    //   //File reference
    //   const fileRef = this.storage.ref(path);
    //   // The main task
    //   this.task = this.storage.upload(path, file, { customMetadata });
    //   // Get file progress percentage
    //   this.percentage = this.task.percentageChanges();
    //   this.snapshot = this.task.snapshotChanges().pipe(
    //       finalize(() => {
    //       // Get uploaded file storage path
    //       this.UploadedFileURL = fileRef.getDownloadURL();
    //       this.UploadedFileURL.subscribe(resp=>{
    //         this.addImagetoDB({
    //           name: file.name,
    //           filepath: resp,
    //           size: this.fileSize
    //         });
    //         this.image =  "https://firebasestorage.googleapis.com/v0/b/graduation-project-35720.appspot.com/o/UserImages%2FU"+this.afAuth.auth.currentUser.uid +"?alt=media&token=cbc23518-1ca8-4358-8c72-1b836620e2f6";          let userRef =this.afDb.database.ref('users/' + this.afAuth.auth.currentUser.uid);
    //         userRef.update({
    //           'imageURL':  "https://firebasestorage.googleapis.com/v0/b/graduation-project-35720.appspot.com/o/UserImages%2FU"+this.afAuth.auth.currentUser.uid +"?alt=media&token=cbc23518-1ca8-4358-8c72-1b836620e2f6"
    //         });
    //       },error=>{
    //         console.error(error);
    //       })
    //     }),
    //     tap(snap => {
    //         this.fileSize = snap.totalBytes;
    //     })
    //   )
    // }
    // addImagetoDB(image: MyData) {
    //   //Create an ID for document
    //   const id = this.database.createId();
    //   //Set document id with value in database
    //   this.imageCollection.doc(id).set(image).then(resp => {
    //     console.log(resp);
    //   }).catch(error => {
    //     console.log("error " + error);
    //   });
    // }
    backToUser() {
        this.router.navigate(["/tabs"]);
    }
    save(profile) {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                if (profile.firstName != "") {
                    user.updateProfile({
                        displayName: profile.firstName + " " + profile.lastName,
                    });
                    if (profile.password != "") {
                        user.updatePassword(profile.password);
                    }
                }
            }
        });
    }
    cropUpload() {
        this.imagePicker.getPictures({ maximumImagesCount: 1, outputType: 0 }).then((results) => {
            for (let i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
                this.crop.crop(results[i], { quality: 100 })
                    .then(newImage => {
                    console.log('new image path is: ' + newImage);
                    const fileTransfer = this.transfer.create();
                    const uploadOpts = {
                        fileKey: 'file',
                        fileName: newImage.substr(newImage.lastIndexOf('/') + 1)
                    };
                    fileTransfer.upload(newImage, 'http://192.168.0.7:3000/api/upload', uploadOpts)
                        .then((data) => {
                        console.log(data);
                        this.respData = JSON.parse(data.response);
                        console.log(this.respData);
                        this.fileUrl = this.respData.fileUrl;
                    }, (err) => {
                        console.log(err);
                    });
                }, error => console.error('Error cropping image', error));
            }
        }, (err) => { console.log(err); });
    }
};
ProfileEditPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_11__["ImagePicker"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__["Crop"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__["FileTransfer"] }
];
ProfileEditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-edit',
        template: __webpack_require__(/*! raw-loader!./profile-edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/public/profile-edit/profile-edit.page.html"),
        styles: [__webpack_require__(/*! ./profile-edit.page.scss */ "./src/app/public/profile-edit/profile-edit.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_11__["ImagePicker"],
        _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__["Crop"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__["FileTransfer"]])
], ProfileEditPage);



/***/ })

}]);
//# sourceMappingURL=public-profile-edit-profile-edit-module-es2015.js.map