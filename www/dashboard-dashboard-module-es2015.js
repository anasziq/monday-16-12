(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/members/dashboard/dashboard.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/members/dashboard/dashboard.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot = \"start\">\n      <ion-button (click) = \"logout()\">\n        <ion-icon slot =\"icon-only\" name =\"log-out\">\n\n        </ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<form [formGroup]=\"directionForm\" (ngSubmit)=\"calculateAndDisplayRoute(directionForm.value)\">\n  <ion-item>\n    <ion-label position=\"floating\">Destination</ion-label>\n    <ion-input formControlName=\"destination\"></ion-input>\n  </ion-item>\n  <ion-button expand=\"full\" type=\"submit\" [disabled]=\"!directionForm.valid\">Get Direction</ion-button>\n</form>\n\n<ion-content>\n  <div #mapElement class=\"map\"></div>  \n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/members/dashboard/dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/members/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/members/dashboard/dashboard.page.ts");








const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_7__["DashboardPage"]
    }
];
let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_7__["DashboardPage"]],
        providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/members/dashboard/dashboard.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/members/dashboard/dashboard.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  position: relative;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9kYXNoYm9hcmQvQzpcXFVzZXJzXFxhbmFzIHppcVxcRGVza3RvcFxcVGVhbVxcVGVhbVdvcmstbWFzdGVyL3NyY1xcYXBwXFxtZW1iZXJzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL21lbWJlcnMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH0iLCIubWFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/members/dashboard/dashboard.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/members/dashboard/dashboard.page.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _geo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geo.service */ "./src/app/geo.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");

//import { Component, OnInit } from '@angular/core';




let DashboardPage = class DashboardPage {
    constructor(geolocation, fb, geo) {
        this.geolocation = geolocation;
        this.fb = fb;
        this.geo = geo;
        this.currentLocation = {
            lat: 0,
            lng: 0
        };
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.createDirectionForm();
    }
    ngOnInit() {
        this.getUserLocation();
        this.subscription = this.geo.hits
            .subscribe(hits => this.markers = hits);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    getUserLocation() {
        /// locate the user
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.currentLocation.lat = position.coords.latitude;
                this.currentLocation.lng = position.coords.longitude;
                this.geo.getLocations(100, [this.currentLocation.lat, this.currentLocation.lng]);
            });
        }
    }
    createDirectionForm() {
        this.directionForm = this.fb.group({
            destination: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngAfterViewInit() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.currentLocation.lat = resp.coords.latitude;
            this.currentLocation.lng = resp.coords.longitude;
            this.map = new google.maps.Map(this.mapNativeElement.nativeElement, {
                center: { lat: this.currentLocation.lat, lng: this.currentLocation.lng },
                zoom: 15
            });
            this.directionsDisplay.setMap(this.map);
            const pos = {
                lat: this.currentLocation.lat,
                lng: this.currentLocation.lng
            };
            const icon = {
                url: 'assets/icon/user.png',
                scaledSize: new google.maps.Size(50, 50),
            };
            const marker = new google.maps.Marker({
                position: pos,
                map: this.map,
                title: 'Hello World!',
                icon: icon
            });
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    calculateAndDisplayRoute(formValues) {
        //const infoWindow = new google.maps.InfoWindow;
        const that = this;
        this.directionsService.route({
            origin: this.currentLocation,
            destination: formValues.destination,
            travelMode: 'DRIVING'
        }, (response, status) => {
            if (status === 'OK') {
                that.directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
        const icon = {
            url: 'assets/icon/user.png',
            scaledSize: new google.maps.Size(50, 50),
        };
        console.log("i'm befor the marker");
        const marker = new google.maps.Marker({
            position: formValues.destination,
            map: this.map,
            title: 'Hello World!',
            icon: icon
        });
        const contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading">Ramallah</h1>' +
            '<div id="bodyContent">' +
            '<img src="assets/icon/user.png" width="200">' +
            '<p><b>Uluru</b>, also referred to as ' +
            'Heritage Site.</p>' +
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
            '(last visited June 22, 2009).</p>' +
            '</div>' +
            '</div>';
        console.log(contentString);
        const infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });
        marker.addListener('click', function () {
            infowindow.open(this.map, marker);
        });
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _geo_service__WEBPACK_IMPORTED_MODULE_3__["GeoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapElement', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], DashboardPage.prototype, "mapNativeElement", void 0);
DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/members/dashboard/dashboard.page.html"),
        styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/members/dashboard/dashboard.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _geo_service__WEBPACK_IMPORTED_MODULE_3__["GeoService"]])
], DashboardPage);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map