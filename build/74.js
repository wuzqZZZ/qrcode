webpackJsonp([74],{

/***/ 1561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmtagfilematerialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_phone_device__ = __webpack_require__(106);
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
 * Generated class for the LmtagfilematerialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmtagfilematerialPage = /** @class */ (function () {
    function LmtagfilematerialPage(navCtrl, storage, navParams, httpService, phoneDevice) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.httpService = httpService;
        this.phoneDevice = phoneDevice;
        this.list = [];
        this.id = '';
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
        // this.projectid = this.storage.get(StorageProvider.LM_PROJECTID);
        this.id = this.navParams.get('id');
    }
    LmtagfilematerialPage.prototype.ionViewWillEnter = function () {
        this.list = [];
        // this.initlist(1);
        this.initlist();
    };
    LmtagfilematerialPage.prototype.initlist = function () {
        var _this = this;
        var url = "/lmtagFileMaterial/list?standardcode=" + this.id + "&materialtype=material&sort=seqnum&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc";
        this.httpService.get(url, null, function (result) {
            if (result.rows.length > 0) {
                _this.list = result.rows;
            }
        });
    };
    LmtagfilematerialPage.prototype.doRefresh = function (refresher) {
        this.initlist();
        setTimeout(function () {
            refresher.complete(); //停止下拉刷新
        }, 2000);
    };
    LmtagfilematerialPage.prototype.doInfinite = function (infiniteScroll) {
        this.initlist();
        infiniteScroll.complete(); //停止上拉加载
        // infiniteScroll.enable(false);//停止上拉加载
    };
    LmtagfilematerialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmtagfilematerial',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagfile/lmtagfilematerial/lmtagfilematerial.html"*/'<!--\n  Generated template for the lmtagFilelistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">材料明细</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="刷新...">\n    </ion-refresher-content>\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <!-- 列表 -->\n  <div class="listWarp lmwarp">\n    <div class="list-box" *ngFor="let item of list; let i = index ">\n      <div class="title">\n        <div class="textspace">{{ item.name }}</div>\n        <div class="wfstatusname" [ngClass]="{finish: item.ready==1}" >{{item.ready==1?\'已确认\':\'未确认\'}}</div>\n      </div>\n      <div class="list-content">\n        <div class="list-info">\n          <span>{{ item.norms }} ; </span>\n          <span>{{ item.requirement }}</span>\n        </div>\n        <div class="list-info lm-info">\n          <div class="pull-left wp20"><p>{{item.unitid || \'-\'}}</p><p>单位</p></div>\n          <div class="pull-left wp20"><p>{{item.price || \'-\'}}</p><p>单价(元)</p></div>\n          <div class="pull-left wp20"><p>{{item.num || \'-\'}}</p><p>需求数量</p></div>\n          <div class="pull-left wp20"><p>{{item.allprice || \'-\'}}</p><p>金额(元)</p></div>\n          <div class="pull-left wp20"><p>{{item.remain || \'-\'}}</p><p>可用数量</p></div>\n        </div>\n        <div class="list-info">\n          <div class="pull-left">到位时间 <span>{{item.readytime}}</span></div>\n        </div>\n      </div>\n    </div> \n  </div>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n     <ion-infinite-scroll-content\n         loadingSpinner="bubbles"\n         loadingText="加载中...">\n    </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagfile/lmtagfilematerial/lmtagfilematerial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_phone_device__["a" /* PhoneDeviceProvider */]])
    ], LmtagfilematerialPage);
    return LmtagfilematerialPage;
}());

//# sourceMappingURL=lmtagfilematerial.js.map

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmtagfilematerialPageModule", function() { return LmtagfilematerialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmtagfilematerial__ = __webpack_require__(1561);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LmtagfilematerialPageModule = /** @class */ (function () {
    function LmtagfilematerialPageModule() {
    }
    LmtagfilematerialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmtagfilematerial__["a" /* LmtagfilematerialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmtagfilematerial__["a" /* LmtagfilematerialPage */]),
            ],
        })
    ], LmtagfilematerialPageModule);
    return LmtagfilematerialPageModule;
}());

//# sourceMappingURL=lmtagfilematerial.module.js.map

/***/ })

});
//# sourceMappingURL=74.js.map