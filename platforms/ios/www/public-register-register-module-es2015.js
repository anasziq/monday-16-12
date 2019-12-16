(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/public/register/register.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/public/register/register.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n        <ion-buttons slot = \"start\">\n                <ion-button (click) = \"backToLogin()\">\n                  <ion-icon slot =\"icon-only\" name =\"log-out\">\n                  </ion-icon>\n                </ion-button>\n        </ion-buttons>\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content padding class=\"form-content\">\n    <form [formGroup] = \"myform\">\n        <ion-item>\n            <ion-label position=\"floating\" color=\"success\">Name:</ion-label>\n            <ion-input formControlName=\"name\" type=\"text\"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label position=\"floating\" color=\"success\">Email:</ion-label>\n            <ion-input formControlName=\"email\" type=\"text\" ></ion-input>           \n        </ion-item>\n        <div class=\"error-messages\">\n          <ng-container *ngFor=\"let error of error_messages.email\">\n            <div class=\"error-message\" *ngIf=\"myform.get('email').hasError(error.type) && (myform.get('email').dirty || myform.get('email').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon> {{ error.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <div formGroupName=\"matching_passwords\">\n          <ion-item>\n            <ion-label position=\"floating\" color=\"success\">Password</ion-label>\n            <ion-input type=\"password\" formControlName=\"password\" [(ngModel)]='passread'></ion-input>\n          </ion-item>\n          <div class=\"error-messages\">\n            <ng-container *ngFor=\"let error of error_messages.password\">\n              <div class=\"error-message\" *ngIf=\"myform.get('matching_passwords').get('password').hasError(error.type) && (myform.get('matching_passwords').get('password').dirty || myform.get('matching_passwords').get('password').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ error.message }}\n              </div>\n            </ng-container>\n          </div>\n    \n          <ion-item>\n            <ion-label position=\"floating\" color=\"success\">Confirm Password</ion-label>\n            <ion-input type=\"password\" formControlName=\"repassword\"></ion-input>\n          </ion-item>\n          <div class=\"error-messages\">\n            <ng-container *ngFor=\"let error of error_messages.repassword\">\n              <div class=\"error-message\" *ngIf=\"myform.get('matching_passwords').get('repassword').hasError(error.type) && (myform.get('matching_passwords').get('repassword').dirty || myform.get('matching_passwords').get('repassword').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ error.message }}\n              </div>\n            </ng-container>\n          </div>\n        </div>\n        <!-- These validations are for the form group -->\n        <div class=\"error-messages\">\n          <ng-container *ngFor=\"let error of error_messages.matching_passwords\">\n            <div class=\"error-message\" *ngIf=\"myform.get('matching_passwords').hasError(error.type) && (myform.get('matching_passwords').get('repassword').dirty || myform.get('matching_passwords').get('repassword').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon> {{ error.message }}\n            </div>\n          </ng-container>\n        </div>\n\n       \n       <ion-button [disabled]=\"!myform.valid\" (click) = \"signup()\" expand = \"block\" color=\"success\">Sign up</ion-button>\n\n    </form>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/public/register/register.module.ts":
/*!****************************************************!*\
  !*** ./src/app/public/register/register.module.ts ***!
  \****************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.page */ "./src/app/public/register/register.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/public/register/register.page.scss":
/*!****************************************************!*\
  !*** ./src/app/public/register/register.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\nion-content {\n  --background: url('crop.jpg') no-repeat 100% 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL3JlZ2lzdGVyL0M6XFxVc2Vyc1xcYW5hcyB6aXFcXERlc2t0b3BcXFRlYW1Xb3JrLW1hc3Rlci9zcmNcXGFwcFxccHVibGljXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wdWJsaWMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxpREFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tZXNzYWdlXG57XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbi9jcm9wLmpwZycpIG5vLXJlcGVhdCAxMDAlIDEwMCU7XG59XG4iLCIuZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaWNvbi9jcm9wLmpwZ1wiKSBuby1yZXBlYXQgMTAwJSAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/public/register/register.page.ts":
/*!**************************************************!*\
  !*** ./src/app/public/register/register.page.ts ***!
  \**************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _validators_password_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validators/password.validator */ "./src/app/public/validators/password.validator.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");









let RegisterPage = class RegisterPage {
    constructor(router, fb, emailComposer, db, fireauth, toastController) {
        this.router = router;
        this.fb = fb;
        this.emailComposer = emailComposer;
        this.db = db;
        this.fireauth = fireauth;
        this.toastController = toastController;
        this.error_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Please wnter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 6 characters long.' },
                { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
            ],
            'Repassword': [
                { type: 'required', message: 'Confirm password is required.' }
            ],
            'matching_passwords': [
                { type: 'areEqual', message: 'Password mismatch.' }
            ],
        };
        this.usersList = db.list('/User/');
    }
    ngOnInit() {
        this.matching_passwords_group = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ])),
            repassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        }, (formGroup) => {
            return _validators_password_validator__WEBPACK_IMPORTED_MODULE_4__["PasswordValidator"].areEqual(formGroup);
        });
        this.myform = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            matching_passwords: this.matching_passwords_group
        });
    }
    backToLogin() {
        this.router.navigate(['login']);
    }
    signup() {
        let emal = {
            to: this.myform.value.email,
            cc: [],
            bcc: [],
            attachment: [],
            sublect: "Validation Email",
            body: " 12345 ",
            isHtml: false,
            app: "Gmail"
        };
        this.emailComposer.open(emal);
        console.log("yes");
        // this.usersList.push({
        //        key_id: new Date().getTime(),
        //         name : this.myform.value.name,
        //         email : this.myform.value.email,
        //         password: this.passread,
        // } ).then(newUser => {console.log("seucess");}
        // ,error=>{console.log("error")}
        // );
        // this.fireauth.auth.createUserWithEmailAndPassword(this.myform.value.email, this.passread)
        //   .then(res => {
        //     if (res.user) {
        //       console.log(res.user);
        //       //this.router.navigate(['members','dashboard']);
        //     }
        //   })
        //   .catch(err => {
        //     console.log('signup failed ${err}');
        //     console.log(err.message);
        //     this.presentToast(err.message);
        //   });
    }
    presentToast(m) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: m,
                duration: 5000
            });
            toast.present();
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_8__["EmailComposer"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/public/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/public/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_8__["EmailComposer"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]])
], RegisterPage);



/***/ }),

/***/ "./src/app/public/validators/password.validator.ts":
/*!*********************************************************!*\
  !*** ./src/app/public/validators/password.validator.ts ***!
  \*********************************************************/
/*! exports provided: PasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidator", function() { return PasswordValidator; });
class PasswordValidator {
    // Inspired on: http://plnkr.co/edit/Zcbg2T3tOxYmhxs7vaAm?p=preview
    static areEqual(formGroup) {
        let val;
        let valid = true;
        for (let key in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(key)) {
                let control = formGroup.controls[key];
                if (val === undefined) {
                    val = control.value;
                }
                else {
                    if (val !== control.value) {
                        valid = false;
                        break;
                    }
                }
            }
        }
        if (valid) {
            return null;
        }
        return {
            areEqual: true
        };
    }
}


/***/ })

}]);
//# sourceMappingURL=public-register-register-module-es2015.js.map