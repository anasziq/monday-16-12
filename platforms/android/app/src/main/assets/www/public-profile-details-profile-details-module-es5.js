(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-profile-details-profile-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/public/profile-details/profile-details.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/public/profile-details/profile-details.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>lalalal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding\">\n  <ion-icon name=\"\" size=\"large\"></ion-icon>\n  <p>ppppppppppppppppppppppppppppppppppppppppppppppppppp</p>\n</ion-content>"

/***/ }),

/***/ "./src/app/public/profile-details/profile-details.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/public/profile-details/profile-details.module.ts ***!
  \******************************************************************/
/*! exports provided: ProfileDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailsPageModule", function() { return ProfileDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-details.page */ "./src/app/public/profile-details/profile-details.page.ts");







var routes = [
    {
        path: '',
        component: _profile_details_page__WEBPACK_IMPORTED_MODULE_6__["ProfileDetailsPage"]
    }
];
var ProfileDetailsPageModule = /** @class */ (function () {
    function ProfileDetailsPageModule() {
    }
    ProfileDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_details_page__WEBPACK_IMPORTED_MODULE_6__["ProfileDetailsPage"]]
        })
    ], ProfileDetailsPageModule);
    return ProfileDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/public/profile-details/profile-details.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/public/profile-details/profile-details.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9wcm9maWxlLWRldGFpbHMvcHJvZmlsZS1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/public/profile-details/profile-details.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/public/profile-details/profile-details.page.ts ***!
  \****************************************************************/
/*! exports provided: ProfileDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailsPage", function() { return ProfileDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileDetailsPage = /** @class */ (function () {
    function ProfileDetailsPage() {
    }
    ProfileDetailsPage.prototype.ngOnInit = function () {
    };
    ProfileDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-details',
            template: __webpack_require__(/*! raw-loader!./profile-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/public/profile-details/profile-details.page.html"),
            styles: [__webpack_require__(/*! ./profile-details.page.scss */ "./src/app/public/profile-details/profile-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileDetailsPage);
    return ProfileDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=public-profile-details-profile-details-module-es5.js.map