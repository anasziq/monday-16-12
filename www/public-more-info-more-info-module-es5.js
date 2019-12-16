(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-more-info-more-info-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/public/more-info/more-info.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/public/more-info/more-info.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tab2\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>More Information</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-slides>\n  <ion-slide>\n    <img src=\"http://placehold.it/300x300/ff0000/ffffff\" alt=\"\">\n  </ion-slide>\n  <ion-slide>\n    <img src=\"http://placehold.it/300x300/ffcc33/ffffff\" alt=\"\">\n  </ion-slide>\n  <ion-slide>\n    <img src=\"http://placehold.it/300x300/336699/ffffff\" alt=\"\">\n  </ion-slide>\n  <ion-slide>\n    <img src=\"http://placehold.it/300x300/33ccff/ffffff\" alt=\"\">\n  </ion-slide>\n</ion-slides>\n\n<ion-content class=\"ion-padding\">\n  <ion-text>\n    <h2>History : </h2>\n    <p>\n      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.                  Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.\n      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.\n      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.\n      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.\n    </p>\n  </ion-text>\n  <ion-button expand=\"block\">See it in the Map</ion-button>\n</ion-content>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/public/more-info/more-info.module.ts":
/*!******************************************************!*\
  !*** ./src/app/public/more-info/more-info.module.ts ***!
  \******************************************************/
/*! exports provided: MoreInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreInfoPageModule", function() { return MoreInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _more_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more-info.page */ "./src/app/public/more-info/more-info.page.ts");







var routes = [
    {
        path: '',
        component: _more_info_page__WEBPACK_IMPORTED_MODULE_6__["MoreInfoPage"]
    }
];
var MoreInfoPageModule = /** @class */ (function () {
    function MoreInfoPageModule() {
    }
    MoreInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_more_info_page__WEBPACK_IMPORTED_MODULE_6__["MoreInfoPage"]]
        })
    ], MoreInfoPageModule);
    return MoreInfoPageModule;
}());



/***/ }),

/***/ "./src/app/public/more-info/more-info.page.scss":
/*!******************************************************!*\
  !*** ./src/app/public/more-info/more-info.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9tb3JlLWluZm8vbW9yZS1pbmZvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/public/more-info/more-info.page.ts":
/*!****************************************************!*\
  !*** ./src/app/public/more-info/more-info.page.ts ***!
  \****************************************************/
/*! exports provided: MoreInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreInfoPage", function() { return MoreInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MoreInfoPage = /** @class */ (function () {
    function MoreInfoPage() {
    }
    MoreInfoPage.prototype.ngOnInit = function () {
    };
    MoreInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-more-info',
            template: __webpack_require__(/*! raw-loader!./more-info.page.html */ "./node_modules/raw-loader/index.js!./src/app/public/more-info/more-info.page.html"),
            styles: [__webpack_require__(/*! ./more-info.page.scss */ "./src/app/public/more-info/more-info.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MoreInfoPage);
    return MoreInfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=public-more-info-more-info-module-es5.js.map