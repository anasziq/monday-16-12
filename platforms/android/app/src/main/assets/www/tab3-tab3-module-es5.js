(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/public/tabsfolder/tab3/tab3.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/public/tabsfolder/tab3/tab3.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <form [formGroup]=\"directionForm\" >\n    <ion-item>\n      <ion-label position=\"floating\">Destination</ion-label>\n      <ion-input formControlName=\"destination\"></ion-input>\n    </ion-item>\n    <ion-button (click) = \"calculateAndDisplayRoute()\" type=\"submit\" [disabled]=\"!directionForm.valid\">Get Direction</ion-button>\n    <ion-button (click) = \"calculateAndDisplayRouteN()\"  type=\"submit\" [disabled]=\"!directionForm.valid\">Get waypoint Direction </ion-button>\n  </form>\n\n\n\n<div #gmap class=\"map\" style=\"width:100%;height:100%\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/public/tabsfolder/tab3/tab3.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/public/tabsfolder/tab3/tab3.module.ts ***!
  \*******************************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab3.page */ "./src/app/public/tabsfolder/tab3/tab3.page.ts");








var routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_7__["Tab3Page"]
    }
];
var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_7__["Tab3Page"]],
            providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/public/tabsfolder/tab3/tab3.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/public/tabsfolder/tab3/tab3.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy90YWJzZm9sZGVyL3RhYjMvdGFiMy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/public/tabsfolder/tab3/tab3.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/public/tabsfolder/tab3/tab3.page.ts ***!
  \*****************************************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _geo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geo.service */ "./src/app/geo.service.ts");


//import { } from '@google/maps';



var Tab3Page = /** @class */ (function () {
    function Tab3Page(fb, geolocation, geo) {
        this.fb = fb;
        this.geolocation = geolocation;
        this.geo = geo;
        this.directionsService = new google.maps.DirectionsService;
        this.directionsRenderer = new google.maps.DirectionsRenderer;
        this.currentLocation = {
            lat: 31.9753,
            lng: 35.1960
        };
        this.createDirectionForm();
    }
    Tab3Page.prototype.createDirectionForm = function () {
        this.directionForm = this.fb.group({
            destination: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Tab3Page.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.currentLocation.lat = resp.coords.latitude;
            _this.currentLocation.lng = resp.coords.longitude;
        });
        var mapOptions = {
            zoom: 10,
            center: this.currentLocation //chicago
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapOptions);
        console.log("lat= ", this.currentLocation.lat, "lng = ", this.currentLocation.lng);
        console.log("i will display");
        this.directionsRenderer.setMap(this.map);
        console.log("finished disp");
    };
    Tab3Page.prototype.calculateAndDisplayRouteN = function () {
        this.findWaypoints();
        var that = this;
        console.log("im here");
        this.directionsService.route({
            origin: this.currentLocation,
            destination: this.directionForm.value.destination,
            waypoints: [
                { location: { lat: 31.9038, lng: 35.2034 }, stopover: true },
                { location: { lat: 31.7683, lng: 35.2137 }, stopover: true },
            ],
            //destination: formValues.destination,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                that.directionsRenderer.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
        console.log("fineshed");
    };
    Tab3Page.prototype.findWaypoints = function () {
        var _this = this;
        this.getUserLocation();
        this.subscription = this.geo.hits
            .subscribe(function (hits) { return _this.markers = hits; });
        //let marker = new Array( this.markers.length);
        //let marker;
        console.log("my markers1 = ", this.markers);
        var i = 0;
        var _loop_1 = function () {
            // add marker to the map at the point from the database.
            var marker = new google.maps.Marker({
                position: { lat: this_1.markers[i].location[0], lng: this_1.markers[i].location[1] },
                map: this_1.map,
                clickable: true
            });
            // adding info window to each marker.   
            marker.infowindow = new google.maps.InfoWindow({
                content: "you are " + Math.round(this_1.markers[i].distance) + "KM from this point",
                maxWidth: 400
            });
            google.maps.event.addListener(marker, 'click', function () {
                marker.infowindow.open(this.map, marker);
            });
        };
        var this_1 = this;
        for (i = 0; i < this.markers.length; i++) {
            _loop_1();
        }
    };
    Tab3Page.prototype.calculateAndDisplayRoute = function () {
        this.findWaypoints();
        console.log("value = ", this.directionForm.value);
        var that = this;
        console.log("im here");
        this.directionsService.route({
            origin: this.currentLocation,
            destination: this.directionForm.value.destination,
            //destination: formValues.destination,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                that.directionsRenderer.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
        console.log("fineshed");
    };
    Tab3Page.prototype.ngOnInit = function () {
        var _this = this;
        this.getUserLocation();
        this.subscription = this.geo.hits
            .subscribe(function (hits) { return _this.markers = hits; });
        var marker;
        this.markers.forEach(function (element) {
            marker = new google.maps.Marker({
                position: { lat: element.location[0], lng: element.location[1] },
                map: _this.map,
            });
        });
        console.log("my markers = ", this.markers);
    };
    Tab3Page.prototype.getUserLocation = function () {
        var _this = this;
        /// locate the user
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.currentLocation.lat = position.coords.latitude;
                _this.currentLocation.lng = position.coords.longitude;
                _this.geo.getLocations(100, [_this.currentLocation.lat, _this.currentLocation.lng]);
            });
        }
    };
    Tab3Page.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"] },
        { type: _geo_service__WEBPACK_IMPORTED_MODULE_4__["GeoService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gmap', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], Tab3Page.prototype, "gmapElement", void 0);
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/public/tabsfolder/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/public/tabsfolder/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"], _geo_service__WEBPACK_IMPORTED_MODULE_4__["GeoService"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map