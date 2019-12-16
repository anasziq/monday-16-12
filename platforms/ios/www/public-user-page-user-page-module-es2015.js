(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-user-page-user-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/public/user-page/user-page.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/public/user-page/user-page.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>userPage</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n<ion-item-sliding *ngFor=\"let item of items$   | async json\">\n  </ion-item-sliding>"

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/add/operator/switchMap.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/add/operator/switchMap.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _operator_switchMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/switchMap */ "./node_modules/rxjs-compat/_esm2015/operator/switchMap.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.switchMap = _operator_switchMap__WEBPACK_IMPORTED_MODULE_1__["switchMap"];
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/operator/switchMap.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/operator/switchMap.js ***!
  \*****************************************************************/
/*! exports provided: switchMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchMap", function() { return switchMap; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

function switchMap(project) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(project)(this);
}
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./src/app/public/user-page/user-page.module.ts":
/*!******************************************************!*\
  !*** ./src/app/public/user-page/user-page.module.ts ***!
  \******************************************************/
/*! exports provided: UserPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPagePageModule", function() { return UserPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-page.page */ "./src/app/public/user-page/user-page.page.ts");







const routes = [
    {
        path: '',
        component: _user_page_page__WEBPACK_IMPORTED_MODULE_6__["UserPagePage"]
    }
];
let UserPagePageModule = class UserPagePageModule {
};
UserPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_user_page_page__WEBPACK_IMPORTED_MODULE_6__["UserPagePage"]]
    })
], UserPagePageModule);



/***/ }),

/***/ "./src/app/public/user-page/user-page.page.scss":
/*!******************************************************!*\
  !*** ./src/app/public/user-page/user-page.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy91c2VyLXBhZ2UvdXNlci1wYWdlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/public/user-page/user-page.page.ts":
/*!****************************************************!*\
  !*** ./src/app/public/user-page/user-page.page.ts ***!
  \****************************************************/
/*! exports provided: UserPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPagePage", function() { return UserPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm2015/add/operator/switchMap.js");








let UserPagePage = class UserPagePage {
    constructor(router, db, fireauth, toastController) {
        this.router = router;
        this.db = db;
        this.fireauth = fireauth;
        this.toastController = toastController;
        this.userList = db.list('/User/');
        //added
        this.size$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null); //added
        this.items$ = this.size$.switchMap(size => //added
         db.list('/User', ref => //added
         size ? ref.orderByChild('size').equalTo(size) : ref //added
        ).snapshotChanges() //added
        );
        this.items$.subscribe(actions => {
            actions.forEach(action => {
                // console.log(action.type);
                // console.log(action.key);
                // console.log(action.payload.val());
            });
        });
    }
    ngOnInit() {
        // console.log("1");
        // this.items$.subscribe(actions => {
        //   actions.forEach(action => {
        //     console.log("2");
        //     console.log(action.payload.key);
        //   });
        // });
    }
};
UserPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
UserPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-page',
        template: __webpack_require__(/*! raw-loader!./user-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/public/user-page/user-page.page.html"),
        styles: [__webpack_require__(/*! ./user-page.page.scss */ "./src/app/public/user-page/user-page.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
], UserPagePage);



/***/ })

}]);
//# sourceMappingURL=public-user-page-user-page-module-es2015.js.map