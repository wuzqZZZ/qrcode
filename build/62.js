webpackJsonp([62],{

/***/ 1573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmtagprojectloglistPage; });
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
 * Generated class for the LmtagprojectloglistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmtagprojectloglistPage = /** @class */ (function () {
    function LmtagprojectloglistPage(navCtrl, storage, navParams, httpService, phoneDevice) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.httpService = httpService;
        this.phoneDevice = phoneDevice;
        this.tabNameList = [{ 'name': '我的', 'code': '', 'value': '' }, { 'name': '已完成', 'code': '', 'value': '' }, { 'name': '未完成', 'code': '', 'value': '' }];
        this.id = '';
        this.list = []; //列表
        this.dataList = []; //缓存页码数据（上拉加载）
        this.mCurrentPage = 0; //默认page
        this.where = ''; //搜索
        this.description = ''; //搜索输入框内容
        this.searchlist = [];
        this.stops = ''; //无数据加载完毕
        this.currentTab = 0; //tab默认第一个
        this.itemTab = 99;
        this.status = '';
        this.images = [];
        this.lmprojectsourcelist = [];
        this.projectid = '';
        this.timer = null;
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
        this.projectid = this.storage.get(__WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */].LM_PROJECTID);
        this.id = this.navParams.get('prjid');
    }
    LmtagprojectloglistPage.prototype.ionViewWillEnter = function () {
        this.list = [];
        this.initlist(1);
    };
    // 搜索+防抖
    LmtagprojectloglistPage.prototype.handleSearch = function () {
        var _this = this;
        this.list = [];
        clearTimeout(this.timer);
        if (this.description == '') {
            this.initlist(1);
            return false;
        }
        this.timer = setTimeout(function () {
            var fuzzysearch = encodeURIComponent(_this.description);
            var url = '/lmtagProjectLog/list?prjid=' + _this.id + '&rows=-1&page=1&sidx=&sord=code&sord=asc&fuzzysearch=' + fuzzysearch;
            _this.initsearchlist(url);
            _this.timer = null;
        }, 300);
    };
    LmtagprojectloglistPage.prototype.clickInfo = function (id) {
        this.description = '';
        this.searchlist = [];
        this.list = [];
        this.navCtrl.push('LmtagprojectlogPage', {
            type: 'edit',
            logid: id,
        });
    };
    LmtagprojectloglistPage.prototype.addClick = function () {
        this.navCtrl.push('LmtagworkorderinfoPage', {
            type: 'add'
        });
    };
    LmtagprojectloglistPage.prototype.initsearchlist = function (url) {
        var that = this;
        $('.tab-nav').hide();
        that.httpService.get(url, null, function (result) {
            if (result != null && result.rows.length > 0) {
                var rows = result.rows;
                that.list = rows;
            }
            else {
                $('.searchWarp .listWarp').html('没有搜索到相关数据').css({ 'text-align': 'center' });
            }
        });
    };
    LmtagprojectloglistPage.prototype.initlist = function (page) {
        var _this = this;
        var url = '';
        if (this.currentTab == 0) {
            url = '/lmtagProjectLog/list?prjid=' + this.id + '&sort=entertime&_search=false&rows=20&page=' + page + '&sidx=&sord=asc';
        }
        if (this.currentTab == 1) {
            url = '/lmtagProjectLog/list?prjid=' + this.id + +'&sort=code&_search=false&rows=20&page=' + page + '&sidx=&sord=asc&nw_status=1';
        }
        if (this.currentTab == 2) {
            url = '/lmtagProjectLog/list?prjid=' + this.id + +'&sort=code&_search=false&rows=20&page=' + page + '&sidx=&sord=asc&nw_status=2';
        }
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
    LmtagprojectloglistPage.prototype.chooseStatus = function (value, index) {
        $('.tab-nav .nav-item:eq(' + index + ')').addClass('active').siblings().removeClass('active');
        $('.screenBox .item').removeClass('active');
        if (this.currentTab == index) {
            return false;
        }
        else {
            this.currentTab = index;
        }
        this.list = [];
        this.initlist(1);
    };
    LmtagprojectloglistPage.prototype.doRefresh = function (refresher) {
        this.list = [];
        this.lmprojectsourcelist = [];
        this.initlist(1);
        setTimeout(function () {
            refresher.complete(); //停止下拉刷新
        }, 2000);
    };
    LmtagprojectloglistPage.prototype.doInfinite = function (infiniteScroll) {
        this.initlist(this.mCurrentPage + 1);
        infiniteScroll.complete(); //停止上拉加载
        if (this.stops == 'true') {
            infiniteScroll.enable(false); //停止上拉加载
        }
    };
    LmtagprojectloglistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmtagprojectloglist',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagprojectlog/lmtagprojectloglist/lmtagprojectloglist.html"*/'<!--\n  Generated template for the LmtagprojectloglistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">检修日志</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding >\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="刷新...">\n    </ion-refresher-content>\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n  <!-- 搜索 -->\n  <div class="cheader">\n    <div class="searchbox">\n      <input type="text" placeholder="请输入编号/名称" [(ngModel)]="description" (ngModelChange)="handleSearch()" clear>\n      <span class="clearbtn" (click)="clearSearch()">清空</span>\n    </div>\n    <!-- tab -->\n    <div class="tabbox">\n      <span *ngFor="let tab of tabNameList; let i = index" [ngClass]="{\'active\': currentTab == i}" (click)="chooseStatus(tab.code, i)">{{ tab.name }}</span>\n    </div>\n  </div>\n  <!-- 列表 -->\n  <div class="listWarp lmwarp">\n    <div class="list-box"  (click)="clickInfo(item.logid)" *ngFor="let item of list; let i = index ">\n      <div class="title">\n        <div class="textspace">{{item.projectname}}</div>\n        <div class="wfstatusname bg" [ngClass]="{finish: item.wfstatusname==\'已完成\'}" >{{item.wfstatusname}}</div>\n      </div>\n      <div class="list-content">\n        <!-- <div class="list-info">\n          <span class="bg" *ngIf="item.code != \'\' && item.code != null">{{item.code}}</span>\n          <span class="bg" *ngIf="item.projectsourcename != \'\' && item.projectsourcename != null">{{item.projectsourcename}}</span>\n          <span class="bg" *ngIf="item.code != \'\' && item.code != null">检修类型</span>\n          <span class="bg" *ngIf="item.checklevidname != \'\' && item.checklevidname != null">{{item.checklevidname}}</span>\n        </div> -->\n        <div class="list-info lm-info">\n          <div class="pull-left wp33"><p>{{item.enterperson}}</p><p>{{item.edittypename}}人数</p></div>\n          <div class="pull-left wp33"><p> - </p><p>{{item.edittypename}}工具项数</p></div>\n          <div class="pull-left wp33"><p> - </p><p>工作负责人</p></div>\n        </div>\n        <div class="list-info">\n          <div class="pull-left">登记类型 <span>{{item.edittypename}}</span></div>\n          <div class="pull-right">记录时间 <span>{{item.createtime}}</span></div>\n        </div>\n      </div>\n    </div> \n  </div>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n     <ion-infinite-scroll-content\n         loadingSpinner="bubbles"\n         loadingText="加载中...">\n    </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagprojectlog/lmtagprojectloglist/lmtagprojectloglist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_phone_device__["a" /* PhoneDeviceProvider */]])
    ], LmtagprojectloglistPage);
    return LmtagprojectloglistPage;
}());

//# sourceMappingURL=lmtagprojectloglist.js.map

/***/ }),

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmtagprojectloglistPageModule", function() { return LmtagprojectloglistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmtagprojectloglist__ = __webpack_require__(1573);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LmtagprojectloglistPageModule = /** @class */ (function () {
    function LmtagprojectloglistPageModule() {
    }
    LmtagprojectloglistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmtagprojectloglist__["a" /* LmtagprojectloglistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmtagprojectloglist__["a" /* LmtagprojectloglistPage */]),
            ],
        })
    ], LmtagprojectloglistPageModule);
    return LmtagprojectloglistPageModule;
}());

//# sourceMappingURL=lmtagprojectloglist.module.js.map

/***/ })

});
//# sourceMappingURL=62.js.map