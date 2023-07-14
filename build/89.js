webpackJsonp([89],{

/***/ 1549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmnewsinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_permissions__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(77);
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
 * Generated class for the LmnewsinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmnewsinfoPage = /** @class */ (function () {
    function LmnewsinfoPage(navCtrl, storage, navParams, httpService, permission, platform, file, transfer, toastCtrl, loadingCtrl, fileopen, phoneDevice) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.httpService = httpService;
        this.permission = permission;
        this.platform = platform;
        this.file = file;
        this.transfer = transfer;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.fileopen = fileopen;
        this.phoneDevice = phoneDevice;
        this.focusList = [];
        this.forminfo = {};
        this.id = '';
        this.filepath = '';
        this.phoneDevice.phoneBacktoRoot(this.navCtrl);
        this.id = this.navParams.get('interactiveid');
        console.log("this.id => ", this.id);
        this.initinfo();
        this.initfiles();
    }
    LmnewsinfoPage.prototype.ionViewWillEnter = function () {
    };
    LmnewsinfoPage.prototype.initinfo = function () {
        var _this = this;
        var url = '/lmtagInteractive/detail/' + this.id;
        this.httpService.get(url, null, function (res) {
            if (res.code == 0) {
                _this.forminfo = res.data;
                _this.httpService.initUserName(res.data.creater, 'creatername', _this.forminfo);
                _this.initfiletypename(res.data.filetype);
                _this.forminfo['zan'] = Math.floor(Math.random() * 80) + 1;
                _this.forminfo['read'] = Math.floor(Math.random() * 100) + 80;
            }
        });
    };
    LmnewsinfoPage.prototype.initfiles = function () {
        var _this = this;
        this.httpService.getFiles('lmtagInteractive', this.id, function (res) {
            if (res.code == 0) {
                _this.focusList = res.data;
            }
        });
    };
    LmnewsinfoPage.prototype.initfiletypename = function (filetype) {
        var _this = this;
        this.httpService.getDictName('LMTAG_INTERACTIVE_FILETYPE', filetype, function (res) {
            if (res != '') {
                _this.forminfo['filetypename'] = res;
            }
        });
    };
    LmnewsinfoPage.prototype.handlelike = function () {
        this.forminfo['zan']++;
    };
    LmnewsinfoPage.prototype.checkPermissions = function () {
        this.permission.requestPermission(this.permission.PERMISSION.READ_EXTERNAL_STORAGE).then(function (res) { console.log(res); });
        this.permission.requestPermission(this.permission.PERMISSION.WRITE_EXTERNAL_STORAGE).then(function (res) { console.log(res); });
    };
    LmnewsinfoPage.prototype.openFile = function (item) {
        var _this = this;
        console.log("openFile  item => ", item);
        if (item.filetype == 'gif' || item.filetype == 'jpg' || item.filetype == 'jpeg' || item.filetype == 'png' || item.filetype == 'bmp') {
            this.phoneDevice.showBigimage(item['url']);
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: '下载中，请稍等...',
                enableBackdropDismiss: true,
            });
            loading_1.present();
            var now_1 = 0;
            var url = item['url'];
            var name_1 = item['name'];
            if (this.platform.is('ios')) {
                this.filepath = this.file.dataDirectory + item['url'];
            }
            else {
                if (item['name'].substr(0, 1) == '#') {
                    name_1 = name_1.replace('#', ' ');
                }
                // this.file.externalApplicationStorageDirectory
                if (name_1.lastIndexOf('.') != -1) {
                    this.filepath = this.file.externalApplicationStorageDirectory + name_1;
                }
                else {
                    this.filepath = this.file.externalApplicationStorageDirectory + name_1 + '.' + item['filetype'];
                }
            }
            var filetransfer = this.transfer.create();
            filetransfer.onProgress(function (progressEvent) {
                if (progressEvent.lengthComputable) {
                    now_1 = progressEvent.loaded / progressEvent.total * 100;
                }
            });
            filetransfer.download(url, this.filepath, true).then(function (res) {
                _this.checkPermissions();
                loading_1.dismiss();
                _this.fileopen.open(_this.filepath, _this.httpService.getFileMimeType(item['filetype'])).then(function (data) {
                }, function (err) {
                    // loading.dismiss();
                    _this.toastCtrl.create({
                        position: 'top',
                        message: '文件打开失败/无' + _this.httpService.getFileMimeType(item['filetype']) + '查看器',
                        duration: 2000
                    }).present();
                });
            }, function (err) {
                loading_1.dismiss();
                _this.toastCtrl.create({
                    position: 'top',
                    message: '文件下载失败',
                    duration: 1200
                }).present();
            });
        }
    };
    LmnewsinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmnewsinfo',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmnews/lmnewsinfo/lmnewsinfo.html"*/'<!--\n  Generated template for the LmnewsinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="mytoolbar">\n    <!-- <span class="pull-left navbar-left"  >\n      <ion-icon name=\'ios-arrow-back\' is-active="false" (click)="gohomePage()"></ion-icon>\n    </span> -->\n    <ion-title class="cptitle">现场直击</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="newsbox">\n    <div class="newscontent">\n      <div class="newstitle">{{ forminfo[\'description\'] }}</div>\n      <div class="newstips">\n        <span>{{ forminfo[\'creatername\'] || \'-\' }}</span>\n        <span>{{ forminfo[\'createtime\'] }}</span>\n        <span>发表</span>\n      </div>\n      <ion-slides *ngIf="focusList.length>0" class="focus" pager="true"  loop="true"  autoplay="2500">\n        <ion-slide *ngFor="let item of focusList">\n          <video *ngIf="item.filetype == \'mp4\'; else default" [src]="item.downurl" (click)="openFile(item)"></video>\n          <ng-template #default>\n            <img [src]="item.downurl" alt="封面图" (click)="openFile(item)">\n          </ng-template>\n          <div class="mask"></div>\n        </ion-slide>\n      </ion-slides>\n      <form>\n        <ion-item>\n          <ion-label>文件类型：</ion-label>\n          <div item-content style="flex: 1;	color: #8e8e8e;text-align: right;">{{ forminfo[\'filetypename\'] }}</div>\n        </ion-item>\n      </form>\n      <div class="newsfooter">\n        <div class="read">阅读 <span>{{ forminfo[\'read\'] }}</span> </div>\n        <div class="zan">\n          <img src="assets/imgs/lm/lmhome/zan.png" alt="点赞" (click)="handlelike()">\n          <span>{{ forminfo[\'zan\'] }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmnews/lmnewsinfo/lmnewsinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__["a" /* PhoneDeviceProvider */]])
    ], LmnewsinfoPage);
    return LmnewsinfoPage;
}());

//# sourceMappingURL=lmnewsinfo.js.map

/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmnewsinfoPageModule", function() { return LmnewsinfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmnewsinfo__ = __webpack_require__(1549);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LmnewsinfoPageModule = /** @class */ (function () {
    function LmnewsinfoPageModule() {
    }
    LmnewsinfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmnewsinfo__["a" /* LmnewsinfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmnewsinfo__["a" /* LmnewsinfoPage */]),
            ],
        })
    ], LmnewsinfoPageModule);
    return LmnewsinfoPageModule;
}());

//# sourceMappingURL=lmnewsinfo.module.js.map

/***/ })

});
//# sourceMappingURL=89.js.map