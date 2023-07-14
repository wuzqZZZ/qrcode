webpackJsonp([25],{

/***/ 1597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectdialogPage; });
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
 * Generated class for the ProjectdialogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProjectdialogPage = /** @class */ (function () {
    // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
    function ProjectdialogPage(navCtrl, navParams, httpServices, platform, phonedevice, modalCtrl, events, storage, ele) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpServices = httpServices;
        this.platform = platform;
        this.phonedevice = phonedevice;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.storage = storage;
        this.ele = ele;
        this.nowPage = 1;
        this.maxPage = 1;
        this.projectList = [];
        this.showleassetinfo = false;
        this.assetLevel = [];
        this.assetStatus = [];
        this.assetType = [];
        this.tag = false;
        this.level = '';
        this.type = '';
        this.status = '';
        this.title = '';
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
        });
        this.projectid = this.storage.get(__WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */].LM_PROJECTID);
    }
    ProjectdialogPage.prototype.ionViewWillEnter = function () {
        this.initProjectList();
    };
    ProjectdialogPage.prototype.ionViewDidEnter = function () {
        // setTimeout(() => {
        //   console.log(this.myinput);
        //   this.myinput.setFocus();
        // }, 300);
    };
    ProjectdialogPage.prototype.doRefresh = function (event) {
        this.initProjectList();
    };
    ProjectdialogPage.prototype.doInfinite = function (event) {
        console.log(this.nowPage, this.maxPage);
        if (this.nowPage < this.maxPage) {
            event.enable(true);
            this.initProjectList();
            event.complete();
            console.log(this.nowPage);
        }
        else if (this.nowPage == this.maxPage) {
            this.event = event;
            this.initProjectList();
            event.enable(false);
        }
    };
    ProjectdialogPage.prototype.initProjectList = function () {
        var _this = this;
        if (this.description == undefined) {
            this.description = '';
        }
        if (this.nowPage <= this.maxPage) {
            if (this.event) {
                this.event.enable(true);
            }
            var url = '/lmtagProject/list?sort=code&order=asc&_search=false&rows=15&projectid=' + this.projectid + '&page=' + this.nowPage + '&sidx=&sord=asc' + '&fuzzysearch=' + encodeURIComponent(this.description);
            this.httpServices.get(url, null, function (res) {
                if (res['rows'].length > 0) {
                    _this.maxPage = res['total'];
                    for (var i = 0; i < res['rows'].length; i++) {
                        _this.projectList.push(res['rows'][i]);
                    }
                }
                _this.nowPage++;
            });
        }
    };
    ProjectdialogPage.prototype.finddescription = function () {
        this.projectList = [];
        this.nowPage = 1;
        this.initProjectList();
    };
    ProjectdialogPage.prototype.commit = function (item) {
        this.events.publish('project', item);
        console.log(item['projectid']);
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Navbar */])
    ], ProjectdialogPage.prototype, "navbar", void 0);
    ProjectdialogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-projectdialog',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/system/projectdialog/projectdialog.html"*/'<!--\n  Generated template for the LeassetdialogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">项目列表</ion-title>\n    <!-- <i class="iconfont icon-shuzhuangtu_o" (click)="openMenu()" style="font-size:24px;float: right;margin-right: 10px;"></i> -->\n  </ion-navbar>\n  <!-- <img (click)="phonedevice.doScan()" src="assets/svg/application/scanner.svg" style="width:24px;height:24px;position: absolute;right: 15px;bottom: 25%" alt=""> -->\n</ion-header>\n<ion-content padding>\n\n      <!-- <div class="page-title">设备列表\n      </div> -->\n      <ion-item style="padding-left:0px;padding-right:50px;">\n        <ion-input #leassetInput [(ngModel)]="description" aria-placeholder="请输入关键字"></ion-input>\n       \n      </ion-item>\n      <div (click)="finddescription()" style="color:#0099ff;font-size:16px;position:absolute;right:10px;top: 10px;">\n        搜索\n      </div>\n      <!-- <div class="header">\n          <ion-icon name="ios-arrow-back-outline" style="font-size: 22px;margin-left: 10px;" (click)="backpop()"></ion-icon>\n          <div class="search">\n              <ion-icon name="search" class="ion-search"></ion-icon>\n              <input  id="leassetInput" type="text" placeholder="请输入设备名称" [(ngModel)]="description" >\n          </div>\n              <span class="cancel" (click)="finddescription()">搜索</span>\n      </div> -->\n    <ion-refresher (ionRefresh)="doRefresh($event)"> \n        <ion-refresher-content\n            pullingIcon="arrow-dropdown"\n            pullingText="下拉刷新"\n            refreshingSpinner="circles"\n            refreshingText="刷新..."> \n        </ion-refresher-content>\n        <ion-refresher-content > \n        </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-card *ngFor="let item of projectList" (click)="commit(item)">\n      <ion-item>\n        <!-- <div><span>tenanid:</span><span>{{item.tenantid}}</span></div> -->\n        <div style="white-space: initial;">\n          {{item.projectname}}\n          <span>(编号：</span>\n          <span style="color:green">{{item.code}}</span>)\n        </div>\n        <div><span>项目类型:</span><span>{{item.projecttypename}}</span></div>\n        <div><span>验收等级:</span><span>{{item.acceptlevelname}}</span></div>\n        <div><span>检修专业:</span><span>{{item.specialtyname}}</span></div>\n      </ion-item>\n    </ion-card>\n\n<ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n     <ion-infinite-scroll-content\n         loadingSpinner="bubbles"\n         loadingText="加载中...">\n    </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n   \n</ion-content>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/system/projectdialog/projectdialog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__["a" /* PhoneDeviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ProjectdialogPage);
    return ProjectdialogPage;
}());

//# sourceMappingURL=projectdialog.js.map

/***/ }),

/***/ 972:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectdialogPageModule", function() { return ProjectdialogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projectdialog__ = __webpack_require__(1597);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProjectdialogPageModule = /** @class */ (function () {
    function ProjectdialogPageModule() {
    }
    ProjectdialogPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__projectdialog__["a" /* ProjectdialogPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__projectdialog__["a" /* ProjectdialogPage */]),
            ],
        })
    ], ProjectdialogPageModule);
    return ProjectdialogPageModule;
}());

//# sourceMappingURL=projectdialog.module.js.map

/***/ })

});
//# sourceMappingURL=25.js.map