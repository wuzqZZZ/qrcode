webpackJsonp([49],{

/***/ 1580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmtagsummaryspecialtyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage__ = __webpack_require__(52);
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
 * Generated class for the LlmtagsummaryspecialtyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmtagsummaryspecialtyPage = /** @class */ (function () {
    function LmtagsummaryspecialtyPage(navCtrl, navParams, httpService, phoneDevice, events, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.phoneDevice = phoneDevice;
        this.events = events;
        this.storage = storage;
        this.list = []; // 列表
        this.projectid = '';
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
    }
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad LmtagsummaryPage');
    //   // this.initData()
    // }
    LmtagsummaryspecialtyPage.prototype.ionViewWillEnter = function () {
        this.projectid = this.storage.get(__WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */].LM_PROJECTID);
        console.log("%c%s", "color:blue", "[Debug] ~ LmtagsummaryspecialtyPage ~ ionViewWillEnter ~ this.projectid", this.projectid);
        this.list = [];
        // this.initproject();
        this.initData();
    };
    // initproject() {
    //   this.httpService.get('/query/lmpj/lmpjProject/headlist?format=list', null, (result) => {
    //     this.projectid = result[0]['projectid'];
    //     this.initData();
    //   });
    // }
    LmtagsummaryspecialtyPage.prototype.initData = function () {
        var _this = this;
        this.list = [];
        var url = "/lmtagSummarySpecialty/list?sort=summaryid&order=desc&_search=false&rows=15&page=1&sidx=&sord=asc&projectid=" + this.projectid;
        this.httpService.get(url, null, function (result) {
            if (result != null) {
                var rows = result.rows;
                _this.list = rows;
                console.log(_this.list);
            }
        });
    };
    LmtagsummaryspecialtyPage.prototype.handleInfo = function (item) {
        // const { projectname, specialtyname, code, summaryid, wfstatusname } = item
        this.navCtrl.push('LmtagsummaryspecialtyinfoPage', { item: item });
    };
    LmtagsummaryspecialtyPage.prototype.doRefresh = function (refresher) {
        this.initData();
        setTimeout(function () {
            refresher.complete(); //停止下拉刷新
        }, 1500);
    };
    LmtagsummaryspecialtyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmtagsummaryspecialty',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagsummaryspecialty/lmtagsummaryspecialty.html"*/'<!--\n  Generated template for the LmtagsummaryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">专业总结</ion-title>\n  </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="刷新...">\n    </ion-refresher-content>\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div class="main">\n    <div class="itembox" *ngFor="let item of list" (click)="handleInfo(item)">\n      <div class="boxtop">\n        <div>\n          <span class="arrow">{{ item.unittypename }}</span>\n          <span class="arrow">{{ item.overhaullevelname }}修</span>\n          <span>{{ item.specialtyname && item.specialtyname + \'专业\' }}</span>\n        </div>\n        <span class="imred status">{{ item.wfstatusname }}</span>\n      </div>\n      <div class="boxbtm">\n        <div class="mw30">\n          <p class="imblue">{{ item.resdeptname }}</p>\n          <p>所属部门</p>\n        </div>\n        <div class="mw30">\n          <p>{{ item.editorname }}</p>\n          <p>填报人</p>\n        </div>\n        <div>\n          <p>{{ item.edittime }}</p>\n          <p>填报时间</p>\n        </div>\n      </div>\n    </div>\n    <div class="tips" *ngIf="list.length == 0">暂无数据...</div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagsummaryspecialty/lmtagsummaryspecialty.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__["a" /* PhoneDeviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */]])
    ], LmtagsummaryspecialtyPage);
    return LmtagsummaryspecialtyPage;
}());

//# sourceMappingURL=lmtagsummaryspecialty.js.map

/***/ }),

/***/ 955:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmtagsummaryspecialtyPageModule", function() { return LmtagsummaryspecialtyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmtagsummaryspecialty__ = __webpack_require__(1580);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LmtagsummaryspecialtyPageModule = /** @class */ (function () {
    function LmtagsummaryspecialtyPageModule() {
    }
    LmtagsummaryspecialtyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmtagsummaryspecialty__["a" /* LmtagsummaryspecialtyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmtagsummaryspecialty__["a" /* LmtagsummaryspecialtyPage */]),
            ],
        })
    ], LmtagsummaryspecialtyPageModule);
    return LmtagsummaryspecialtyPageModule;
}());

//# sourceMappingURL=lmtagsummaryspecialty.module.js.map

/***/ })

});
//# sourceMappingURL=49.js.map