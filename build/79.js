webpackJsonp([79],{

/***/ 1559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmtabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LmtabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmtabsPage = /** @class */ (function () {
    function LmtabsPage(navCtrl, events, httpService, storage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.httpService = httpService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.tab1Root = 'LmworkbenchPage';
        this.tab2Root = 'LmhomePage';
        this.tab3Root = 'LmnewsPage';
        this.tab4Root = 'MePage';
    }
    LmtabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmtabs',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtabs/lmtabs.html"*/'<ion-tabs >\n  <ion-tab [root]="tab1Root" tabTitle="工作台" tabIcon="tab-lmhome" swipeBackEnabled="true"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="应用" tabIcon="tab-lmapp" swipeBackEnabled="true"></ion-tab>\n  <!-- <ion-tab [root]="tab3Root" tabTitle="发现" tabIcon="md-recording"></ion-tab> -->\n  <ion-tab [root]="tab3Root" tabTitle="现场" tabIcon="tab-lmxc" swipeBackEnabled="true"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="我的" tabIcon="md-person" swipeBackEnabled="true"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtabs/lmtabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */]])
    ], LmtabsPage);
    return LmtabsPage;
}());

//# sourceMappingURL=lmtabs.js.map

/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmtabsPageModule", function() { return LmtabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmtabs__ = __webpack_require__(1559);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LmtabsPageModule = /** @class */ (function () {
    function LmtabsPageModule() {
    }
    LmtabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmtabs__["a" /* LmtabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmtabs__["a" /* LmtabsPage */]),
            ],
        })
    ], LmtabsPageModule);
    return LmtabsPageModule;
}());

//# sourceMappingURL=lmtabs.module.js.map

/***/ })

});
//# sourceMappingURL=79.js.map