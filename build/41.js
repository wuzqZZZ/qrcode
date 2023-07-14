webpackJsonp([41],{

/***/ 1003:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmtagworkorderPageModule", function() { return LmtagworkorderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmtagworkorder__ = __webpack_require__(1630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LmtagworkorderPageModule = /** @class */ (function () {
    function LmtagworkorderPageModule() {
    }
    LmtagworkorderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmtagworkorder__["a" /* LmtagworkorderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmtagworkorder__["a" /* LmtagworkorderPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */], __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], LmtagworkorderPageModule);
    return LmtagworkorderPageModule;
}());

//# sourceMappingURL=lmtagworkorder.module.js.map

/***/ }),

/***/ 1630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmtagworkorderPage; });
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
 * Generated class for the LmtagworkorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmtagworkorderPage = /** @class */ (function () {
    function LmtagworkorderPage(navCtrl, storage, navParams, httpService, phoneDevice) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.httpService = httpService;
        this.phoneDevice = phoneDevice;
        this.formdata = [
            { 'name': '工作负责人', 'index': 'toinc_respersonname_equal', 'indexId': 'toinc_resperson_equal', 'type': 'selectUser', "placeholder": '请选择工作负责人' },
            { 'name': '检修专业', 'index': 'toinc_specialty_equal', 'type': 'select', 'dicttype': 'BKC_SPECAIL', "placeholder": '请选择检修专业' },
            { 'name': '项目类型', 'index': 'toinc_projecttype_equal', 'type': 'select', 'dicttype': 'LMTAG_PROJECT_PROJECTTYPE', 'placeholder': '请输入项目类型' },
            { 'name': '流程状态', 'index': 'toinc_planstatus_equal', 'type': 'select', 'dicttype': '', "placeholder": '请选择流程状态' },
            { 'name': '责任部门', 'index': 'toinc_resdeptname_equal', 'indexId': 'toinc_resdept_equal', 'type': 'selectDept', "placeholder": '请选择责任部门' },
            { 'name': '检修类型', 'index': 'toinc_checktype_equal', 'type': 'select', 'dicttype': 'LMTAG_CHECK_TYPE', "placeholder": '请选择计检修类型' },
            { 'name': '验收等级', 'index': 'toinc_checklevel_equal', 'type': 'select', 'dicttype': 'LMPJ_ACCEPTANCE_LEVEL', "placeholder": '请选择验收等级' },
        ];
        this.tabNameList = [{ 'name': '我的', 'code': '', 'value': '' }, { 'name': '完成', 'code': '', 'value': '' }, { 'name': '未完成', 'code': '', 'value': '' }, { 'name': '正常', 'code': '', 'value': '' }, { 'name': '超期', 'code': '', 'value': '' }];
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
        this.forminfo = {};
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
        this.projectid = this.storage.get(__WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */].LM_PROJECTID);
    }
    LmtagworkorderPage.prototype.ionViewWillEnter = function () {
        this.list = [];
        this.initlist(1);
    };
    LmtagworkorderPage.prototype.searchClick = function () {
        $('.searchWarp').toggle();
        $('.searchbox').toggle();
        $('.searchWarp').css({ 'height': 'auto' });
        var display = $('.searchWarp').css('display');
        if (display == 'block') {
            document.getElementById('topest').scrollIntoView();
        }
        this.description = '';
        this.searchlist = [];
    };
    // 搜索+防抖
    LmtagworkorderPage.prototype.handleSearch = function () {
        var _this = this;
        this.list = [];
        // console.log(this.search);
        clearTimeout(this.timer);
        if (this.description == '') {
            this.initlist(1);
            return false;
        }
        this.timer = setTimeout(function () {
            var fuzzysearch = encodeURIComponent(_this.description);
            var url = '/lmtagProject/list?projectid=' + _this.projectid + '&rows=-1&page=1&sidx=&sord=code&sord=asc&fuzzysearch=' + fuzzysearch;
            _this.initsearchlist(url);
            _this.timer = null;
        }, 300);
    };
    // 筛选搜索
    LmtagworkorderPage.prototype.handleFilterSearch = function () {
        if (JSON.stringify(this.forminfo) != '{}') {
            console.log(this.forminfo, encodeURIComponent(JSON.stringify(this.forminfo)));
            var where = encodeURIComponent(encodeURIComponent(JSON.stringify(this.forminfo)));
            var url = '/lmtagProject/list?projectid=' + this.projectid + '&rows=-1&page=1&sidx=&sord=code&sord=asc&where=' + where;
            this.initsearchlist(url);
        }
    };
    LmtagworkorderPage.prototype.clearSearch = function (type) {
        this.description = '';
        this.searchlist = [];
        this.forminfo = {};
        // $('.searchWarp').hide();
        // $('.tab-nav').show();
        this.list = [];
        this.initlist(this.mCurrentPage);
        if (type == 1) {
            this.searchClick();
        }
    };
    LmtagworkorderPage.prototype.clickInfo = function (id) {
        this.description = '';
        this.searchlist = [];
        // $('.searchWarp').hide();
        // $('.tab-nav').show();
        this.list = [];
        // this.initlist(this.mCurrentPage)
        this.navCtrl.push('LmtagworkorderinfoPage', {
            type: 'edit',
            prjid: id,
        });
    };
    LmtagworkorderPage.prototype.addClick = function () {
        this.navCtrl.push('LmtagworkorderinfoPage', {
            type: 'add'
        });
    };
    LmtagworkorderPage.prototype.initsearchlist = function (url) {
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
    LmtagworkorderPage.prototype.initlist = function (page) {
        var _this = this;
        var url = '';
        if (this.currentTab == 0) {
            url = '/lmtagProject/list?projectid=' + this.projectid + '&sort=code&_search=false&rows=20&page=' + page + '&sidx=&sord=asc&nw_resperson1=my';
        }
        if (this.currentTab == 1) {
            url = '/lmtagProject/list?projectid=' + this.projectid + '&sort=code&_search=false&rows=20&page=' + page + '&sidx=&sord=asc&nw_status=1';
        }
        if (this.currentTab == 2) {
            url = '/lmtagProject/list?projectid=' + this.projectid + '&sort=code&_search=false&rows=20&page=' + page + '&sidx=&sord=asc&nw_status=2';
        }
        if (this.currentTab == 3) {
            url = '/lmtagProject/list?projectid=' + this.projectid + '&sort=code&_search=false&rows=20&page=' + page + '&sidx=&sord=asc&nw_status=3';
        }
        if (this.currentTab == 4) {
            url = '/lmtagProject/list?projectid=' + this.projectid + '&sort=code&_search=false&rows=20&page=' + page + '&sidx=&sord=asc&nw_status=4';
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
                for (var i = 0; i < rows.length; i++) {
                    // if(rows[i].planfinishtime != '' && rows[i].planfinishtime != null){
                    //   rows[i].planfinishtime = Utils.dateFormat(new Date(rows[i].planfinishtime ), 'yyyy-MM-dd');
                    // }
                    // if(rows[i].checktime != '' && rows[i].checktime != null){
                    //   rows[i].checktime = Utils.dateFormat(new Date(rows[i].checktime ), 'yyyy-MM-dd hh:mm');
                    // }
                    var projectsourcenameArr = _this.lmprojectsourcelist.filter(function (item) { return item.value == rows[i].projectsource; });
                    if (projectsourcenameArr.length > 0) {
                        rows[i].projectsourcename = _this.lmprojectsourcelist.filter(function (item) { return item.value == rows[i].projectsource; })[0].name;
                    }
                    else {
                        rows[i].projectsourcename = null;
                    }
                }
                that.dataList = rows;
                lists = lists.concat(that.dataList);
                that.list = lists;
                that.mCurrentPage = page;
            }
        });
        this.getDict();
    };
    LmtagworkorderPage.prototype.chooseStatus = function (value, index) {
        $('.tab-nav .nav-item:eq(' + index + ')').addClass('active').siblings().removeClass('active');
        $('.screenBox .item').removeClass('active');
        // let url = '';
        // /piInOut/list?sort=num&order=desc&sigman=
        // let obj={"nw_wfstatus":value};
        // var where = '';
        if (this.currentTab == index) {
            return false;
        }
        else {
            this.currentTab = index;
        }
        // where = encodeURIComponent(JSON.stringify(obj));
        // this.where = where;
        // this.status = value;
        this.list = [];
        // this.htIllegallist = [];
        this.initlist(1);
    };
    LmtagworkorderPage.prototype.doRefresh = function (refresher) {
        this.list = [];
        this.lmprojectsourcelist = [];
        this.initlist(1);
        setTimeout(function () {
            refresher.complete(); //停止下拉刷新
        }, 2000);
    };
    LmtagworkorderPage.prototype.doInfinite = function (infiniteScroll) {
        this.initlist(this.mCurrentPage + 1);
        infiniteScroll.complete(); //停止上拉加载
        if (this.stops == 'true') {
            infiniteScroll.enable(false); //停止上拉加载
        }
        // infiniteScroll.enable(false);//停止上拉加载
    };
    LmtagworkorderPage.prototype.getDict = function () {
        var _this = this;
        // var that = this;
        this.httpService.getDict("LMTAG_PROJECT_SOURCE", function (data) {
            if (data !== "") {
                _this.lmprojectsourcelist = data;
            }
        });
    };
    LmtagworkorderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmtagworkorder',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagworkorder/lmtagworkorder.html"*/'<!--\n  Generated template for the LmtagworkorderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">检修工单</ion-title>\n    <span class="pull-right navbar-right"  >\n      <span class="pull-right report" (click)="searchClick()">筛选</span>\n    </span>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="刷新...">\n    </ion-refresher-content>\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n  <!-- 搜索 -->\n  <div class="searchWarp" id="topest">\n    <div class="search">\n      <div class="box">\n        <mform [formdata]="formdata" code="lmtagWorkorder" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl" (chooseFromChild)="chooseitem($event)" ></mform>\n      </div>\n      <div class="box">\n        <span class="searchbtn" (click)="handleFilterSearch()">搜索</span>\n        <span class="clearbtn" (click)="clearSearch(1)">清空</span>\n      </div>\n    </div>\n  </div>\n  <div class="cheader">\n    <div class="searchbox">\n      <input type="text" placeholder="请输入编号/名称" [(ngModel)]="description" (ngModelChange)="handleSearch()" clear>\n      <span class="clearbtn" (click)="clearSearch()">清空</span>\n    </div>\n    <!-- tab -->\n    <div class="tabbox">\n      <span *ngFor="let tab of tabNameList; let i = index" [ngClass]="{\'active\': currentTab == i}" (click)="chooseStatus(tab.code, i)">{{ tab.name }}</span>\n    </div>\n  </div>\n  <!-- 列表 -->\n  <div class="listWarp lmwarp">\n    <div class="list-box"  (click)="clickInfo(item.prjid)" *ngFor="let item of list; let i = index ">\n      <div class="title">\n        <div class="textspace">{{item.projectname}}</div>\n        <div class="wfstatusname bg" [ngClass]="{normaltext: item.wfstatusname==\'已完成\'}" >{{item.wfstatusname}}</div>\n      </div>\n      <div class="list-content">\n        <div class="list-info">\n          <span class="bg" *ngIf="item.code != \'\' && item.code != null">{{item.code}}</span>\n          <span class="bg" *ngIf="item.projectsourcename != \'\' && item.projectsourcename != null">{{item.projectsourcename}}</span>\n          <span class="bg" *ngIf="item.checktypename != \'\' && item.checktypename != null">{{item.checktypename}}</span>\n          <span class="bg" *ngIf="item.checklevidname != \'\' && item.checklevidname != null">{{item.checklevidname}}</span>\n          <span class="bg" *ngIf="item.acceptlevelname != \'\' && item.acceptlevelname != null">{{item.acceptlevelname}}</span>\n        </div>\n        <div class="list-info lm-info">\n          <div class="pull-left wp33"><p>{{item.projecttypename ? item.projecttypename.replace(\'项目\',\'\') : \'-\'}}</p><p>工作类型</p></div>\n          <div class="pull-left wp33"><p>{{item.respersonname || \'-\'}}</p><p>工作负责人</p></div>\n          <div class="pull-left wp33"><p>{{item.techprogramname || \'-\'}}</p><p>技术方案</p></div>\n        </div>\n        <div class="list-info">\n          <div class="pull-left">计划状态 <span [ngClass]="{normaltext: item.planstatusname==\'正常\', warntext: item.planstatusname==\'已延期\'}">{{item.planstatusname || \'-\'}}</span></div>\n          <div class="pull-right">计划完成时间 <span>{{ item.planendtime | sliceString:\'0\':\'-3\' }}</span></div>\n        </div>\n      </div>\n    </div> \n    <div class="tips">没有更多了...</div>\n  </div>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n     <ion-infinite-scroll-content\n         loadingSpinner="bubbles"\n         loadingText="加载中...">\n    </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagworkorder/lmtagworkorder.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_phone_device__["a" /* PhoneDeviceProvider */]])
    ], LmtagworkorderPage);
    return LmtagworkorderPage;
}());

//# sourceMappingURL=lmtagworkorder.js.map

/***/ })

});
//# sourceMappingURL=41.js.map