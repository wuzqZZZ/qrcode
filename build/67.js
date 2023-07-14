webpackJsonp([67],{

/***/ 1569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmtagnonconformityPage; });
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
 * Generated class for the LmtagnonconformityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmtagnonconformityPage = /** @class */ (function () {
    function LmtagnonconformityPage(navCtrl, storage, navParams, httpService, phoneDevice) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.httpService = httpService;
        this.phoneDevice = phoneDevice;
        this.tabNameList = [{ 'name': '我的', 'code': '', 'value': '' }, { 'name': '待审核', 'code': '', 'value': '' }, { 'name': '处理中', 'code': '', 'value': '' }, { 'name': '待验收', 'code': '', 'value': '' }, { 'name': '已完成', 'code': '', 'value': '' }];
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
    LmtagnonconformityPage.prototype.ionViewWillEnter = function () {
        this.list = [];
        this.initlist(1);
    };
    LmtagnonconformityPage.prototype.searchClick = function () {
        $('.searchWarp').toggle();
        $('.searchWarp').css({ 'height': 'auto' });
        var display = $('.searchWarp').css('display');
        if (display == 'block') {
            document.getElementById('topest').scrollIntoView();
        }
        this.description = '';
        this.searchlist = [];
    };
    LmtagnonconformityPage.prototype.search = function () {
        if (this.description != '') {
            var fuzzysearch = encodeURIComponent(this.description);
            var url = '/lmtagNonConformity/list?projectid=' + this.projectid + '&sort=code&order=desc&_search=false&rows=15&page=1&sidx=&sord=asc&fuzzysearch=' + fuzzysearch;
            $('.searchWarp').css({ 'height': '100%' });
            this.initsearchlist(url);
        }
    };
    LmtagnonconformityPage.prototype.searchBack = function () {
        this.description = '';
        this.searchlist = [];
        $('.searchWarp').hide();
    };
    LmtagnonconformityPage.prototype.clickInfo = function (id) {
        this.description = '';
        this.searchlist = [];
        $('.searchWarp').hide();
        this.navCtrl.push('LmtagnonconformityinfoPage', {
            type: 'edit',
            id: id
        });
    };
    LmtagnonconformityPage.prototype.addClick = function () {
        this.navCtrl.push('LmtagnonconformityinfoPage', {
            type: 'add'
        });
    };
    LmtagnonconformityPage.prototype.showscanner = function () {
        this.navCtrl.push('ScannerPage', { 'type': 'piinout' }, { "animate": false });
    };
    LmtagnonconformityPage.prototype.initsearchlist = function (url) {
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
    LmtagnonconformityPage.prototype.initlist = function (page) {
        var _this = this;
        var url = '';
        if (this.currentTab == 0) {
            url = '/lmtagNonConformity/list?projectid=' + this.projectid + '&sort=code&order=asc&_search=false&rows=20&page=' + page + '&sidx=&sord=asc&nw_resperson1=my';
        }
        if (this.currentTab == 1) {
            url = '/lmtagNonConformity/list?projectid=' + this.projectid + '&sort=code&order=asc&_search=false&rows=20&page=' + page + '&sidx=&sord=asc&nw_wfstatus=DSH';
        }
        if (this.currentTab == 2) {
            url = '/lmtagNonConformity/list?projectid=' + this.projectid + '&sort=code&order=asc&_search=false&rows=20&page=' + page + '&sidx=&sord=asc&nw_wfstatus=CLZ';
        }
        if (this.currentTab == 3) {
            url = '/lmtagNonConformity/list?projectid=' + this.projectid + '&sort=code&order=asc&_search=false&rows=20&page=' + page + '&sidx=&sord=asc&nw_wfstatus=DYS';
        }
        if (this.currentTab == 4) {
            url = '/lmtagNonConformity/list?projectid=' + this.projectid + '&sort=code&order=asc&_search=false&rows=20&page=' + page + '&sidx=&sord=asc&nw_wfstatus=YWC';
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
                // for(var i=0;i<rows.length;i++){
                //   if(rows[i].planfinishtime != '' && rows[i].planfinishtime != null){
                //     rows[i].planfinishtime = Utils.dateFormat(new Date(rows[i].planfinishtime ), 'yyyy-MM-dd');
                //   }
                //   if(rows[i].realfinishtime != '' && rows[i].realfinishtime != null){
                //     rows[i].realfinishtime = Utils.dateFormat(new Date(rows[i].realfinishtime ), 'yyyy-MM-dd');
                //   }
                // }
                that.dataList = rows;
                lists = lists.concat(that.dataList);
                that.list = lists;
                that.mCurrentPage = page;
            }
        });
    };
    LmtagnonconformityPage.prototype.chooseStatus = function (value, index) {
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
    LmtagnonconformityPage.prototype.doRefresh = function (refresher) {
        this.list = [];
        this.htIllegallist = [];
        this.initlist(1);
        setTimeout(function () {
            refresher.complete(); //停止下拉刷新
        }, 2000);
    };
    LmtagnonconformityPage.prototype.doInfinite = function (infiniteScroll) {
        this.initlist(this.mCurrentPage + 1);
        infiniteScroll.complete(); //停止上拉加载
        if (this.stops == 'true') {
            infiniteScroll.enable(false); //停止上拉加载
        }
        // infiniteScroll.enable(false);//停止上拉加载
    };
    LmtagnonconformityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmtagnonconformity',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagnonconformity/lmtagnonconformity.html"*/'<!--\n  Generated template for the LmtagnonconformityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">不符合项</ion-title>\n    <span class="pull-right navbar-right"  >\n      <ion-icon name="ios-search-outline" (click)="searchClick()" style="margin-right: 5px;"></ion-icon>\n      <span class="icon-add-outline"  (click)="addClick()"><ion-icon name="ios-add-outline" ></ion-icon></span>\n    </span>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="刷新...">\n    </ion-refresher-content>\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class="searchWarp" id="topest">\n    <div class="search">\n        <div class="search-panel-fields">\n          <ion-icon name="ios-search-outline"></ion-icon>\n          <input type="search"  [(ngModel)]="description"  placeholder="请输入编号/名称">\n        </div>\n        <div class="search-button"><button (click)="search()">搜索</button></div>\n        <div class="search-back" (click)="searchBack()">取消</div>\n    </div>\n    <div class="listWarp lmwarp">\n    </div>\n  </div>\n  <div class="tab-nav">\n    <div *ngFor="let item of tabNameList; let i = index "  [class]="i == 0 ? \'active nav-item\' : \'nav-item\' " >\n      <span  (click)="chooseStatus(item.code,i)">{{item.name}}<span class="supVal">{{item.value}}</span></span>\n    </div>\n  </div>\n  <div class="listWarp lmwarp">\n    <div class="list-box"  (click)="clickInfo(item.conformityid)" *ngFor="let item of list; let i = index ">\n      <div class="title">\n        <div class="textspace">{{item.projectname}}</div>\n        <div class="wfstatusname" >{{item.wfstatusname}}</div>\n      </div>\n      <div class="list-content">\n        <div class="list-info">\n          <span class="bg">{{item.code}}</span>\n          <span class="bg" *ngIf="item.wtid != \'\' && item.wtid != null">{{item.wtid}}</span>\n        </div>\n        <div class="list-info lm-info">\n          <div class="pull-left wp33"><p class="tover">{{item.inspectioncode}}</p><p>质检点</p></div>\n          <div class="pull-left wp33"><p>{{item.directorname}}</p><p>工作负责人</p></div>\n          <div class="pull-left wp33"><p>{{item.abnormallevel}}</p><p>异常等级</p></div>\n        </div>\n        <div class="list-info">\n          <div class="pull-left">检查人：<span>{{item.creatername}}</span></div>\n          <div class="pull-right">检查时间：<span>{{item.createtime}}</span></div>\n        </div>\n      </div>\n    </div> \n  </div>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n     <ion-infinite-scroll-content\n         loadingSpinner="bubbles"\n         loadingText="加载中...">\n    </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagnonconformity/lmtagnonconformity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_phone_device__["a" /* PhoneDeviceProvider */]])
    ], LmtagnonconformityPage);
    return LmtagnonconformityPage;
}());

//# sourceMappingURL=lmtagnonconformity.js.map

/***/ }),

/***/ 944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmtagnonconformityPageModule", function() { return LmtagnonconformityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmtagnonconformity__ = __webpack_require__(1569);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LmtagnonconformityPageModule = /** @class */ (function () {
    function LmtagnonconformityPageModule() {
    }
    LmtagnonconformityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmtagnonconformity__["a" /* LmtagnonconformityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmtagnonconformity__["a" /* LmtagnonconformityPage */]),
            ],
        })
    ], LmtagnonconformityPageModule);
    return LmtagnonconformityPageModule;
}());

//# sourceMappingURL=lmtagnonconformity.module.js.map

/***/ })

});
//# sourceMappingURL=67.js.map