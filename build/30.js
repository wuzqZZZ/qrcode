webpackJsonp([30],{

/***/ 1594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_android_permissions__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_config__ = __webpack_require__(55);
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
 * Generated class for the CollectionfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CollectionfilePage = /** @class */ (function () {
    function CollectionfilePage(navCtrl, navParams, menuCtrl, httpService, phonedevice, events, storage, platform, toastCtrl, transfer, permission, fileopen, file, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.httpService = httpService;
        this.phonedevice = phonedevice;
        this.events = events;
        this.storage = storage;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.transfer = transfer;
        this.permission = permission;
        this.fileopen = fileopen;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.filepath = '';
        this.list = []; //列表
        this.dataList = []; //缓存页码数据（上拉加载）
        this.mCurrentPage = 0; //默认page
        this.where = ''; //搜索
        this.stops = ''; //无数据加载完毕
        this.id = '';
        this.records = '0';
        this.description = '';
        this.fuzzysearch = '';
        this.phonedevice.phoneBacktoPop(this.navCtrl);
    }
    CollectionfilePage.prototype.finddescription = function () {
        if (this.description != '') {
            var fuzzysearch = encodeURIComponent(this.description);
            this.fuzzysearch = fuzzysearch;
            // this.initdata(fuzzysearch)
        }
        else {
            this.fuzzysearch = '';
        }
        this.list = [];
        this.initlist(1, this.where);
    };
    CollectionfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CollectionfilePage');
        this.initlist(1, '');
    };
    CollectionfilePage.prototype.initlist = function (page, where) {
        var _this = this;
        var userinfo = this.storage.get(__WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */].ME_USERINFO); //读取登录人的储存信息
        // console.log(userinfo)
        var url = '/paperCollect/list?sort=updatetime&order=desc&userId=' + userinfo.id + '&_search=false&rows=15&page=' + page + '&sidx=&sord=asc&fuzzysearch=' + this.fuzzysearch;
        var that = this;
        var lists = this.list;
        that.httpService.get(url, null, function (result) {
            if (page > result.total) {
                _this.stops = 'true';
                return false;
            }
            else {
                _this.stops = '';
            }
            _this.records = result.records;
            console.log(result);
            if (result != null && result.rows.length > 0) {
                var rows = result.rows;
                for (var i = 0; i < rows.length; i++) {
                    rows[i].papertype = rows[i].papertype.toLowerCase().replace(".", "");
                    rows[i].downUrl = '/paperInfo/download/download/' + rows[i].paperid;
                }
                that.dataList = rows;
                lists = lists.concat(that.dataList);
                that.list = lists;
                that.mCurrentPage = page;
            }
        });
    };
    CollectionfilePage.prototype.checkPermissions = function () {
        this.permission.requestPermission(this.permission.PERMISSION.READ_EXTERNAL_STORAGE).then(function (res) { console.log(res); });
        this.permission.requestPermission(this.permission.PERMISSION.WRITE_EXTERNAL_STORAGE).then(function (res) { console.log(res); });
    };
    CollectionfilePage.prototype.openFile = function (item) {
        var _this = this;
        console.log(item);
        item['url'] = __WEBPACK_IMPORTED_MODULE_9__providers_config__["a" /* ConfigProvider */].apiUrl + item['downUrl'];
        // item['url'] =Utils.dealUrl('/attach/download/paperinfo/073b393ffd2c4bf096df6d57c5ca1448')
        // "/bkc/attach/download/paperinfo/073b393ffd2c4bf096df6d57c5ca1448"
        // console.log(item['url'])
        if (item.papertype == 'gif' || item.papertype == 'jpg' || item.papertype == 'jpeg' || item.papertype == 'png' || item.papertype == 'bmp') {
            this.phonedevice.showBigimage(item['url']);
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: '下载中，请稍等...',
                enableBackdropDismiss: true,
            });
            loading_1.present();
            var now_1 = 0;
            var url = item['url'];
            var name_1 = item['papername'];
            console.log(url);
            if (this.platform.is('ios')) {
                this.filepath = this.file.dataDirectory + item['url'];
            }
            else {
                if (item['papername'].substr(0, 1) == '#') {
                    name_1 = name_1.replace('#', ' ');
                }
                if (name_1.lastIndexOf('.') != -1) {
                    this.filepath = this.file.externalApplicationStorageDirectory + name_1;
                }
                else {
                    this.filepath = this.file.externalApplicationStorageDirectory + name_1 + '.' + item['papertype'];
                }
            }
            var filetransfer = this.transfer.create();
            filetransfer.onProgress(function (progressEvent) {
                if (progressEvent.lengthComputable) {
                    now_1 = progressEvent.loaded / progressEvent.total * 100;
                }
            });
            filetransfer.download(url, this.filepath, true).then(function () {
                _this.checkPermissions();
                loading_1.dismiss();
                _this.fileopen.open(_this.filepath, _this.httpService.getFileMimeType(item['papertype'])).then(function (data) {
                }, function (err) {
                    loading_1.dismiss();
                    _this.toastCtrl.create({
                        position: 'middle',
                        message: '文件打开失败/无' + _this.httpService.getFileMimeType(item['papertype']) + '查看器',
                        duration: 2000
                    }).present();
                });
            }, function (err) {
                loading_1.dismiss();
                _this.toastCtrl.create({
                    position: 'middle',
                    message: '文件下载失败',
                    duration: 2000
                }).present();
            });
        }
    };
    CollectionfilePage.prototype.doRefresh = function (refresher) {
        this.list = [];
        this.initlist(1, this.where);
        setTimeout(function () {
            refresher.complete(); //停止下拉刷新
        }, 2000);
    };
    CollectionfilePage.prototype.doInfinite = function (infiniteScroll) {
        this.initlist(this.mCurrentPage + 1, this.where);
        infiniteScroll.complete(); //停止上拉加载
        if (this.stops == 'true') {
            infiniteScroll.enable(false); //停止上拉加载
        }
        // infiniteScroll.enable(false);//停止上拉加载
    };
    CollectionfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-collectionfile',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/paper/paperinfosearch/collectionfile/collectionfile.html"*/'<!--\n  Generated template for the CollectionfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">我的收藏（共{{records}}个文件）</ion-title>\n  </ion-navbar>\n  <div class="searchbox">\n    <input type="search" (keyup)="finddescription()"  [(ngModel)]="description"  placeholder="请输入文件名称">\n  </div>\n    <div class="tips">请先安装CAD工具才能查看CAD文件！</div>\n</ion-header>\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="刷新...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class="listWarp">\n    <div class="list-box"  *ngFor="let item of list; let i = index ">\n      <div class="list-detail">\n        <div class="picture">\n          <img src="assets/imgs/files/DWG.png" class="pic" *ngIf="item.papertype == \'dwg\'  ">\n          <img src="assets/imgs/files/edition.png" class="pic" *ngIf="item.papertype != \'dwg\' && item.papertype != \'jpg\' && item.papertype != \'jpeg\' && item.papertype != \'png\'&& item.papertype != \'bmp\' && item.papertype != \'gif\'\n          && item.papertype != \'doc\' && item.papertype != \'docx\' &&item.papertype != \'dotx\' && item.papertype != \'xls\' && item.papertype != \'xlsx\' \n          && item.papertype != \'pptx\' && item.papertype != \'ppt\' && item.papertype != \'tif\' &&  item.papertype != \'pdf\'">\n          <img src="assets/imgs/files/jpg.png" class="pic" *ngIf="item.papertype == \'jpg\' || item.papertype == \'jpeg\' || item.papertype == \'png\'|| item.papertype == \'bmp\' || item.papertype == \'gif\' ">\n          <img src="assets/imgs/files/word2.png" class="pic" *ngIf="item.papertype == \'doc\' || item.papertype == \'docx\' ||item.papertype == \'dotx\' ">\n          <img src="assets/imgs/files/xls.png" class="pic" *ngIf="item.papertype == \'xls\' || item.papertype == \'xlsx\' ">\n          <img src="assets/imgs/files/pdf2.png" class="pic" *ngIf="item.papertype == \'pdf\' ">\n          <img src="assets/imgs/files/ppt.png" class="pic" *ngIf="item.papertype == \'pptx\' || item.papertype == \'ppt\' ">\n          <img src="assets/imgs/files/tif.png" class="pic" *ngIf="item.papertype == \'tif\' ">\n          <img src="assets/imgs/files/dwl.png" class="pic" *ngIf="item.papertype == \'dwl\' || item.papertype == \'dwl2\' ">\n        </div>\n        <div class="list-content">\n          <div class="list-info color333">图档名称：{{item.papername}}</div>\n          <div class="list-info">\n            <div class="pull-left wp40">文件类型：{{item.papertype}}</div>\n            <div class="pull-left wp40">大小：{{item.papersize}}KB</div>\n            <div class="pull-left wp20"  (click)="openFile(item)" style="color:#0459E0;text-align:right;">下载</div>\n          </div>\n        </div>\n      </div>\n    </div> \n  </div>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n         <ion-infinite-scroll-content\n             loadingSpinner="bubbles"\n             loadingText="加载中...">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <div *ngIf="list.length==0 " class="pitaskimg">\n      <img src="assets/imgs/application/pitaskpage/nullstatus.png" alt="">\n      <span>暂无相关任务</span>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/paper/paperinfosearch/collectionfile/collectionfile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__["a" /* PhoneDeviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */]])
    ], CollectionfilePage);
    return CollectionfilePage;
}());

//# sourceMappingURL=collectionfile.js.map

/***/ }),

/***/ 969:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionfilePageModule", function() { return CollectionfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collectionfile__ = __webpack_require__(1594);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CollectionfilePageModule = /** @class */ (function () {
    function CollectionfilePageModule() {
    }
    CollectionfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__collectionfile__["a" /* CollectionfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__collectionfile__["a" /* CollectionfilePage */]),
            ],
        })
    ], CollectionfilePageModule);
    return CollectionfilePageModule;
}());

//# sourceMappingURL=collectionfile.module.js.map

/***/ })

});
//# sourceMappingURL=30.js.map