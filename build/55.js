webpackJsonp([55],{

/***/ 1577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmtagsitepositionPage; });
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
 * Generated class for the LmtagsitepositionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmtagsitepositionPage = /** @class */ (function () {
    function LmtagsitepositionPage(navCtrl, storage, navParams, httpService, phoneDevice) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.httpService = httpService;
        this.phoneDevice = phoneDevice;
        this.list = []; //列表
        this.dataList = []; //缓存页码数据（上拉加载）
        this.mCurrentPage = 0; //默认page
        this.where = ''; //搜索
        this.description = ''; //搜索输入框内容
        this.searchlist = [];
        this.htRegistrationType = []; //隐患类型
        this.stops = ''; //无数据加载完毕
        this.currentTab = 0; //tab默认第一个
        this.itemTab = 99;
        this.status = '';
        this.images = [];
        this.htIllegallist = [];
        this.projectid = '';
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
        this.projectid = this.storage.get(__WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */].LM_PROJECTID);
    }
    LmtagsitepositionPage.prototype.ionViewWillEnter = function () {
        this.list = [];
        this.initlist(1);
    };
    LmtagsitepositionPage.prototype.searchClick = function () {
        $('.searchWarp').toggle();
        $('.searchWarp').css({ 'height': 'auto' });
        var display = $('.searchWarp').css('display');
        if (display == 'block') {
            document.getElementById('topest').scrollIntoView();
        }
        this.description = '';
        this.searchlist = [];
    };
    LmtagsitepositionPage.prototype.search = function () {
        if (this.description != '') {
            var fuzzysearch = encodeURIComponent(this.description);
            var url = '/lmtagSitePosition/list?projectid=' + this.projectid + '&sort=createtime&order=desc&_search=false&rows=-1&page=1&sidx=&sord=asc&fuzzysearch=' + fuzzysearch;
            $('.searchWarp').css({ 'height': '100%' });
            this.initsearchlist(url);
        }
    };
    LmtagsitepositionPage.prototype.searchBack = function () {
        this.description = '';
        this.searchlist = [];
        $('.searchWarp').hide();
    };
    LmtagsitepositionPage.prototype.clickInfo = function (id) {
        this.description = '';
        this.searchlist = [];
        $('.searchWarp').hide();
        this.navCtrl.push('LmtagsitepositioninfoPage', {
            type: 'edit',
            id: id
        });
    };
    LmtagsitepositionPage.prototype.addClick = function () {
        this.navCtrl.push('LmtagsitepositioninfoPage', {
            type: 'add'
        });
    };
    LmtagsitepositionPage.prototype.showscanner = function () {
        this.navCtrl.push('ScannerPage', { 'type': 'piinout' }, { "animate": false });
    };
    LmtagsitepositionPage.prototype.initsearchlist = function (url) {
        var that = this;
        that.httpService.get(url, null, function (result) {
            if (result != null && result.rows.length > 0) {
                var rows = result.rows;
                that.searchlist = rows;
            }
            else {
                $('.searchWarp .listWarp').html('没有搜索到相关数据').css({ 'text-align': 'center' });
            }
        });
    };
    LmtagsitepositionPage.prototype.initlist = function (page) {
        var _this = this;
        var url = '/lmtagSitePosition/list?projectid=' + this.projectid + '&sort=createtime&order=desc&_search=false&rows=15&page=' + page + '&sidx=&sord=asc';
        var that = this;
        var lists = this.list;
        that.httpService.get(url, null, function (result) {
            if (page > result.total) {
                _this.stops = 'true';
                return false;
            }
            if (result != null && result.rows.length > 0) {
                var rows = result.rows;
                that.dataList = rows;
                lists = lists.concat(that.dataList);
                that.list = lists;
                that.mCurrentPage = page;
            }
        });
    };
    LmtagsitepositionPage.prototype.doRefresh = function (refresher) {
        this.list = [];
        this.htIllegallist = [];
        this.initlist(1);
        setTimeout(function () {
            refresher.complete(); //停止下拉刷新
        }, 2000);
    };
    LmtagsitepositionPage.prototype.doInfinite = function (infiniteScroll) {
        this.initlist(this.mCurrentPage + 1);
        infiniteScroll.complete(); //停止上拉加载
        if (this.stops == 'true') {
            infiniteScroll.enable(false); //停止上拉加载
        }
        // infiniteScroll.enable(false);//停止上拉加载
    };
    LmtagsitepositionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmtagsiteposition',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagsiteposition/lmtagsiteposition.html"*/'<!--\n  Generated template for the LmtagsitepositionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">现场定置</ion-title>\n    <span class="pull-right navbar-right"  >\n      <ion-icon name="ios-search-outline" (click)="searchClick()" style="margin-right: 5px;"></ion-icon>\n      <span class="icon-add-outline"  (click)="addClick()"><ion-icon name="ios-add-outline" ></ion-icon></span>\n    </span>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="刷新...">\n    </ion-refresher-content>\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class="searchWarp" id="topest">\n    <div class="search">\n        <div class="search-panel-fields">\n          <ion-icon name="ios-search-outline"></ion-icon>\n          <input type="search"  [(ngModel)]="description"  placeholder="请输入编号/名称">\n        </div>\n        <div class="search-button"><button (click)="search()">搜索</button></div>\n        <div class="search-back" (click)="searchBack()">取消</div>\n    </div>\n    <div class="listWarp lmwarp">\n    </div>\n  </div>\n  <div class="listWarp lmwarp">\n    <div class="list-box"  (click)="clickInfo(item.positionid)" *ngFor="let item of list; let i = index ">\n      <div class="title">\n        <div class="textspace" style="padding-right:0;">{{item.description}}</div>\n       \n      </div>\n      <div class="list-content">\n        <div class="list-info">\n          <span class="bg">{{item.specialtyname}}</span>\n        </div>\n        <div class="list-info lm-info">\n          <div class="pull-left wp33"><p>{{item.region}}</p><p>区域</p></div>\n          <div class="pull-left wp33"><p>{{item.editorname}}</p><p>编制人</p></div>\n          <div class="pull-left wp33"><p>{{item.phone}}</p><p>联系电话</p></div>\n        </div>\n        <div class="list-info">\n          <div class="pull-left">上传人：<span>{{item.uploadername}}</span></div>\n          <div class="pull-right">上传时间：<span>{{item.uploadtime}}</span></div>\n        </div>\n      </div>\n    </div> \n  </div>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n     <ion-infinite-scroll-content\n         loadingSpinner="bubbles"\n         loadingText="加载中...">\n    </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagsiteposition/lmtagsiteposition.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_phone_device__["a" /* PhoneDeviceProvider */]])
    ], LmtagsitepositionPage);
    return LmtagsitepositionPage;
}());

//# sourceMappingURL=lmtagsiteposition.js.map

/***/ }),

/***/ 952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmtagsitepositionPageModule", function() { return LmtagsitepositionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmtagsiteposition__ = __webpack_require__(1577);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LmtagsitepositionPageModule = /** @class */ (function () {
    function LmtagsitepositionPageModule() {
    }
    LmtagsitepositionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmtagsiteposition__["a" /* LmtagsitepositionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmtagsiteposition__["a" /* LmtagsitepositionPage */]),
            ],
        })
    ], LmtagsitepositionPageModule);
    return LmtagsitepositionPageModule;
}());

//# sourceMappingURL=lmtagsiteposition.module.js.map

/***/ })

});
//# sourceMappingURL=55.js.map