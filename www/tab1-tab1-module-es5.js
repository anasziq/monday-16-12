(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/public/tabsfolder/tab1/tab1.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/public/tabsfolder/tab1/tab1.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ionContTop\" slot=\"fixed\">\n    <div class=\"card\">\n        <div class=\"header\">\n            <div class=\"avatar\">\n                <img [src]='userphoto' alt=\"\">\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"user-meta ion-text-center\">\n                <h3 class=\"playername\">{{ userName}}</h3>\n                <h5 class=\"country\">{{userEmail}}</h5>\n                <h6 class=\"ranking\">Current ranking: \n                    <ion-chip>\n                        <ion-label>{{userRank}}</ion-label>\n                    </ion-chip>\n                </h6>\n            </div>\n        </div>\n    </div>\n\n    <ion-content>  \n            <ion-list>\n                <ion-item button routerLink=\"/profile-details\" onclick=\"showDetail()\">\n                    <ion-icon slot=\"start\" name=\"ios-notifications\"></ion-icon>\n                    <ion-label>\n                        <h3>Notifications</h3>\n                    </ion-label>\n                </ion-item>\n                <ion-item button routerLink=\"/profile-details\" onclick=\"showDetail()\">\n                    <ion-icon slot=\"start\" name=\"md-help\"></ion-icon>\n                    <ion-label>\n                        <h3>App Tasks</h3>\n                    </ion-label>\n                </ion-item>\n                <ion-item button routerLink=\"/profile-edit\">\n                    <ion-icon slot=\"start\" name=\"ios-repeat\"></ion-icon>\n                    <ion-label>\n                        <h3>Edit Profile</h3>\n                    </ion-label>\n                </ion-item>\n                <ion-item button  (click)=\"logout()\">\n                    <ion-icon slot=\"start\" name=\"ios-log-out\"></ion-icon>\n                    <ion-label>\n                        <h3>Log Out</h3>\n                    </ion-label>\n                </ion-item>\n            </ion-list>\n    </ion-content>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/public/tabsfolder/tab1/tab1.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/public/tabsfolder/tab1/tab1.module.ts ***!
  \*******************************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/public/tabsfolder/tab1/tab1.page.ts");







var routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]
    }
];
var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/public/tabsfolder/tab1/tab1.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/public/tabsfolder/tab1/tab1.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ionContTop {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.card {\n  margin: 0 auto;\n}\n\n.card .header {\n  height: 200px;\n}\n\n.card .header .avatar {\n  width: 160px;\n  height: 160px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: calc(-1*(80px + 4px));\n  border: 8px solid blue;\n  background-color: #fff;\n}\n\n.card-body {\n  background-color: #ffffff;\n  padding: 30px;\n  height: 300px;\n  overflow: hidden;\n}\n\n.card-body .user-meta {\n  padding-top: 40px;\n}\n\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: #303940;\n}\n\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL3RhYnNmb2xkZXIvdGFiMS9DOlxcVXNlcnNcXGFuYXMgemlxXFxEZXNrdG9wXFxUZWFtXFxUZWFtV29yay1tYXN0ZXIvc3JjXFxhcHBcXHB1YmxpY1xcdGFic2ZvbGRlclxcdGFiMVxcdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3B1YmxpYy90YWJzZm9sZGVyL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0FDQUo7O0FERUk7RUFDSSxhQUFBO0FDQVI7O0FERVE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0FaOztBREVZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUNBaEI7O0FETUE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURLSTtFQUNJLGlCQUFBO0FDSFI7O0FES1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSFo7O0FETVE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNKWiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy90YWJzZm9sZGVyL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uQ29udFRvcCB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHVybChodHRwczovL2kuaW1ndXIuY29tL0RtUGpoR28uanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlci9jb3ZlciBmaXhlZCwgI2ZmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG5cclxuICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiBjYWxjKC0xKig4MHB4ICsgNHB4KSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDhweCBzb2xpZCBibHVlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIC51c2VyLW1ldGEge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG5cclxuICAgICAgICAucGxheWVybmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMDM5NDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY291bnRyeSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gICAgICAgICAgICBjb2xvcjogIzk0OWVhNjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5pb25Db250VG9wIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNhcmQgLmhlYWRlciB7XG4gIGhlaWdodDogMjAwcHg7XG59XG4uY2FyZCAuaGVhZGVyIC5hdmF0YXIge1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMTYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZCAuaGVhZGVyIC5hdmF0YXIgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IGNhbGMoLTEqKDgwcHggKyA0cHgpKTtcbiAgYm9yZGVyOiA4cHggc29saWQgYmx1ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmNhcmQtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5jYXJkLWJvZHkgLnVzZXItbWV0YSAucGxheWVybmFtZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMDM5NDA7XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEgLmNvdW50cnkge1xuICBmb250LXNpemU6IDkwJTtcbiAgY29sb3I6ICM5NDllYTY7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/public/tabsfolder/tab1/tab1.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/public/tabsfolder/tab1/tab1.page.ts ***!
  \*****************************************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");





var Tab1Page = /** @class */ (function () {
    function Tab1Page(fireauth, router, db) {
        this.fireauth = fireauth;
        this.router = router;
        this.db = db;
    }
    Tab1Page.prototype.ngOnInit = function () {
        var _this = this;
        this.userName = this.fireauth.auth.currentUser.displayName;
        this.userEmail = this.fireauth.auth.currentUser.email;
        //this.userphoto = this.fireauth.auth.currentUser.photoURL;
        this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid).once('value', function (snapshot) {
            _this.userphoto = snapshot.val().imageURL;
        });
        this.userRank = 0;
    };
    Tab1Page.prototype.logout = function () {
        var _this = this;
        console.log(this.fireauth.auth.currentUser.email);
        return this.fireauth.auth.signOut().then(function () {
            _this.router.navigate(['login']);
        });
    };
    Tab1Page.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] }
    ]; };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/public/tabsfolder/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/public/tabsfolder/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map