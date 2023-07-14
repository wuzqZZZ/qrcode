webpackJsonp([78],{

/***/ 1617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmtagarchivemanagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_android_permissions__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_config__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_phone_device__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_storage__ = __webpack_require__(52);
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
 * Generated class for the LlmtagarchivemanagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmtagarchivemanagePage = /** @class */ (function () {
    function LmtagarchivemanagePage(navCtrl, navParams, httpService, phoneDevice, platform, toastCtrl, permission, file, transfer, fileopen, loadingCtrl, configProvider, menuCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.phoneDevice = phoneDevice;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.permission = permission;
        this.file = file;
        this.transfer = transfer;
        this.fileopen = fileopen;
        this.loadingCtrl = loadingCtrl;
        this.configProvider = configProvider;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.list = []; // 列表
        this.lmtagStatusList = [{ name: '全部', value: 'all', count: 0 }];
        this.projectid = '';
        this.filepath = '';
        this.currentTab = 0;
        this.search = '';
        this.status = 'all';
        this.timer = null;
        this.archiveid = null;
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
    }
    LmtagarchivemanagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LmtagarchivemanagePage');
    };
    LmtagarchivemanagePage.prototype.ionViewWillEnter = function () {
        this.list = [];
        // this.lmtagStatusList = [];
        // this.initproject();
        this.projectid = this.storage.get(__WEBPACK_IMPORTED_MODULE_9__providers_storage__["a" /* StorageProvider */].LM_PROJECTID);
        this.getDict();
        if (this.projectid) {
            this.initlist();
            this.initTree();
        }
    };
    LmtagarchivemanagePage.prototype.doRefresh = function (refresher) {
        // this.initproject()
        this.getDict();
        this.initlist();
        setTimeout(function () {
            refresher.complete(); //停止下拉刷新
        }, 1500);
    };
    LmtagarchivemanagePage.prototype.changeTab = function (status, i) {
        this.currentTab = i;
        this.status = status;
        this.initlist();
    };
    // 搜索+防抖
    LmtagarchivemanagePage.prototype.handleSearch = function () {
        var _this = this;
        // console.log(this.search);
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            _this.initlist();
            _this.timer = null;
        }, 300);
    };
    // 获取最新一组项目的projectid
    // initproject() {
    //   this.httpService.get('/query/lmpj/lmpjProject/headlist?format=list', null, (result) => {
    //     this.projectid = result[0]['projectid'];
    //     this.getDict();
    //     this.initlist();
    //   });
    // }
    LmtagarchivemanagePage.prototype.initlist = function () {
        var _this = this;
        var url = "/lmtagArchiveManage/list?sort=manageid&order=desc&projectid=" + this.projectid + "&_search=false&rows=50&page=1&sidx=&sord=asc&fuzzysearch=" + this.search;
        if (this.status != 'all') {
            var where = { 'toint_amstatus_equal': this.status };
            url = url + ("&where=" + encodeURI(JSON.stringify(where)));
        }
        if (this.archiveid) {
            url += "&archiveid=" + this.archiveid;
        }
        this.httpService.get(url, null, function (result) {
            if (result != null) {
                _this.list = result.rows;
            }
        });
    };
    LmtagarchivemanagePage.prototype.getDict = function () {
        var _this = this;
        this.httpService.getDict('LMTAG_ARCHIVE_STATUS', function (data) {
            if (data !== "") {
                _this.lmtagStatusList = _this.lmtagStatusList.concat(data);
                _this.getCount();
            }
        });
    };
    LmtagarchivemanagePage.prototype.getCount = function () {
        var _this = this;
        var url = "/query/lmtag/lmtagArchiveManage/findManageCount?projectid=" + this.projectid;
        this.httpService.get(url, null, function (result) {
            if (result != null) {
                var data_1 = result.data[0];
                _this.lmtagStatusList.map(function (item) {
                    if (item.value == 'all') {
                        item.count = data_1['allcount'];
                    }
                    if (item.value == '4') {
                        item.count = data_1['count4'];
                    }
                    if (item.value == '0') {
                        item.count = data_1['count0'] || 0;
                    }
                    if (item.value == '3') {
                        item.count = data_1['count3'];
                    }
                    if (item.value == '1') {
                        item.count = data_1['count1'] || 0;
                    }
                    if (item.value == '5') {
                        item.count = data_1['count5'];
                    }
                });
                console.log(_this.lmtagStatusList);
            }
        });
    };
    // 一键更新
    LmtagarchivemanagePage.prototype.autoArchive = function () {
        var _this = this;
        var url = "/lmtagArchiveManage/autoArchive?projectid=" + this.projectid;
        var loading = this.loadingCtrl.create({
            content: '正在加载中...',
            enableBackdropDismiss: true,
        });
        loading.present();
        this.httpService.get(url, null, function (result) {
            loading.dismiss();
            if (result != null && result.success) {
                _this.toastCtrl.create({
                    position: 'middle',
                    message: result.message,
                    duration: 2000
                }).present();
            }
        });
    };
    // 归档上传
    LmtagarchivemanagePage.prototype.archiveUpload = function () {
        console.log('归档上传');
    };
    LmtagarchivemanagePage.prototype.removeFile = function (item) {
        var _this = this;
        var url = '/lmtagArchiveManage/remove';
        this.httpService.post(url, { ids: item.manageid }, function (result) {
            if (result != null && result.success) {
                _this.toastCtrl.create({
                    position: 'middle',
                    message: result.message,
                    duration: 2000
                }).present();
            }
        });
    };
    // 下载相关函数
    LmtagarchivemanagePage.prototype.checkPermissions = function () {
        this.permission.requestPermission(this.permission.PERMISSION.READ_EXTERNAL_STORAGE).then(function (res) { console.log(res); });
        this.permission.requestPermission(this.permission.PERMISSION.WRITE_EXTERNAL_STORAGE).then(function (res) { console.log(res); });
    };
    LmtagarchivemanagePage.prototype.openFile = function (item) {
        var _this = this;
        item['url'] = __WEBPACK_IMPORTED_MODULE_6__providers_config__["a" /* ConfigProvider */].apiUrl + "/attach/download/site/" + item.attachid;
        // item['url'] =Utils.dealUrl('/attach/download/paperinfo/073b393ffd2c4bf096df6d57c5ca1448')
        // "/bkc/attach/download/paperinfo/073b393ffd2c4bf096df6d57c5ca1448"
        if (item.amtype == 'gif' || item.amtype == 'jpg' || item.amtype == 'jpeg' || item.amtype == 'png' || item.amtype == 'bmp') {
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
            var name_1 = item['papername'];
            if (this.platform.is('ios')) {
                this.filepath = this.file.dataDirectory + item['url'];
            }
            else {
                if (item['papername'].substr(0, 1) == '#') {
                    name_1 = name_1.replace('#', ' ');
                }
                // this.file.externalApplicationStorageDirectory
                if (name_1.lastIndexOf('.') != -1) {
                    this.filepath = this.file.externalApplicationStorageDirectory + name_1;
                }
                else {
                    this.filepath = this.file.externalApplicationStorageDirectory + name_1 + '.' + item['amtype'];
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
                _this.fileopen.open(_this.filepath, _this.httpService.getFileMimeType(item['amtype'])).then(function (data) {
                }, function (err) {
                    // loading.dismiss();
                    _this.toastCtrl.create({
                        position: 'middle',
                        message: '文件打开失败/无' + _this.httpService.getFileMimeType(item['amtype']) + '查看器',
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
    // 下载相关函数 end
    // 树
    //树初始化
    LmtagarchivemanagePage.prototype.initTree = function () {
        var that = this;
        $('#myzTree').empty(); // 清空树区域
        var setting = {
            data: {
                simpleData: {
                    enable: true,
                    idKey: "id",
                    pIdKey: "pId"
                }
            },
            view: {
                dblClickExpand: false
            },
            callback: {
                onClick: function (event, treeId, treeNode) {
                    that.archiveid = null;
                    if (treeNode.parentTId) {
                        that.archiveid = treeNode.id;
                        that.initlist();
                    }
                    else {
                        that.initlist();
                    }
                    that.menuCtrl.close();
                }
            }
        };
        this.httpService.post("/query/lmtag/lmtagArchive/findTree?projectid=" + this.projectid, null, function (result) {
            $.fn.zTree.init($("#myzTree"), setting, result.data);
            fuzzySearch('myzTree', '#search', null, true);
        });
    };
    LmtagarchivemanagePage.prototype.datafilter = function (treeId, parentNode, childNodes) {
        return childNodes.data;
    };
    LmtagarchivemanagePage.prototype.openMenu = function () {
        this.menuCtrl.enable(true, 'combo');
        // this.menuCtrl.enable(false,'comboTree');
        this.menuCtrl.open();
        var appEl = (document.getElementsByTagName('ION-APP')[0]);
        var appElHeight = appEl.clientHeight - 66;
        $('#myzTree').css({ 'height': appElHeight + 'px' });
    };
    LmtagarchivemanagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmtagarchivemanage',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagarchivemanage/lmtagarchivemanage.html"*/'<!--\n  Generated template for the LlmtagarchivemanagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">总结归档</ion-title>\n    <i class="iconfont icon-shuzhuangtu_o" (click)="openMenu()" style="font-size:24px;float: right;margin-right: 10px;"></i>\n  </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="刷新...">\n    </ion-refresher-content>\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div class="container">\n    <div class="header">\n      <div class="searchbox">\n        <input type="text" placeholder="搜索文件" [(ngModel)]="search" (ngModelChange)="handleSearch()" clear>\n      </div>\n      <div class="tabbox">\n        <span *ngFor="let tab of lmtagStatusList; let i = index" [ngClass]="{\'active\': currentTab == i}" (click)="changeTab(tab.value, i)">{{ tab.name }}（{{ tab.count || 0 }}）</span>\n        <!-- <span>归档失败（10）</span> -->\n        <!-- <span>已归档（10）</span> -->\n      </div>\n    </div>\n    <div class="card">\n      <div class="card_item" *ngFor="let item of list">\n        <!-- <img class="preimg" src="assets/imgs/lm/lmhome/pdf.png"/> -->\n        <div class="preimg">\n          <img src="assets/imgs/files/DWG.png" class="pic" *ngIf="item.amtype == \'dwg\'">\n          <img src="assets/imgs/files/edition.png" class="pic" *ngIf="item.amtype != \'dwg\' && item.amtype != \'jpg\' && item.amtype != \'jpeg\' && item.amtype != \'png\'&& item.amtype != \'bmp\' && item.amtype != \'gif\'\n          && item.amtype != \'doc\' && item.amtype != \'docx\' &&item.amtype != \'dotx\' && item.amtype != \'xls\' && item.amtype != \'xlsx\'\n          && item.amtype != \'pptx\' && item.amtype != \'ppt\' && item.amtype != \'tif\' &&  item.amtype != \'pdf\'">\n          <img src="assets/imgs/files/jpg.png" class="pic" *ngIf="item.amtype == \'jpg\' || item.amtype == \'jpeg\' || item.amtype == \'png\'|| item.amtype == \'bmp\' || item.amtype == \'gif\' ">\n          <img src="assets/imgs/files/word2.png" class="pic" *ngIf="item.amtype == \'doc\' || item.amtype == \'docx\' ||item.amtype == \'dotx\' ">\n          <img src="assets/imgs/files/xls.png" class="pic" *ngIf="item.amtype == \'xls\' || item.amtype == \'xlsx\' ">\n          <img src="assets/imgs/lm/lmhome/pdf.png" class="pic" *ngIf="item.amtype == \'pdf\' ">\n          <img src="assets/imgs/files/ppt.png" class="pic" *ngIf="item.amtype == \'pptx\' || item.amtype == \'ppt\' ">\n          <img src="assets/imgs/files/tif.png" class="pic" *ngIf="item.amtype == \'tif\' ">\n          <img src="assets/imgs/files/dwl.png" class="pic" *ngIf="item.amtype == \'dwl\' || item.amtype == \'dwl2\' ">\n        </div>\n        <div class="rightbox">\n          <div class="rightbox_title">\n            <span class="filename">{{ item.description }}</span>\n            <span class="state" [style.color]="item.amstatuscolor">{{ item.amstatusname }}</span>\n          </div>\n          <div class="rightbox_main">\n            <div class="mr-bm-3">目录：{{ item.locationname }}</div>\n            <div>大小：{{ item.filesize }}</div>\n          </div>\n          <div class="btnbox">\n            <span class="blue" (click)="openFile(item)">下载</span>\n            <span class="vertical blue">|</span>\n            <span class="red" (click)="removeFile(item)">删除</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="tips" *ngIf="list.length == 0">暂无数据...</div>\n  </div>\n\n</ion-content>\n\n<ion-footer id="ionFooter">\n  <ion-toolbar>\n    <div class="btngroup">\n      <div class="upload_btn" (click)="archiveUpload()">\n        <img src="assets/imgs/lm/lmhome/归档上传.svg" alt="">\n        <span>归档上传</span>\n      </div>\n      <div class="update_btn" (click)="autoArchive()">\n        <img src="assets/imgs/lm/lmhome/一键更新.png" alt="">\n        <span>一键更新</span>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n\n<ion-menu id="combo" side="left" [content]="myc" style="background: white;">\n  <section>\n    <div style="width:100%;height:100%;" class="ztreeBox">\n      <div class="searchBox">\n        <input type="text" id="search" placeholder="输入关键词搜索">\n      </div>\n      <ul id="myzTree"  class="ztree"></ul>\n    </div>\n  </section>\n</ion-menu>\n<ion-nav #myc [root]="LmtagarchivemanagePage"></ion-nav>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagarchivemanage/lmtagarchivemanage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_phone_device__["a" /* PhoneDeviceProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_storage__["a" /* StorageProvider */]])
    ], LmtagarchivemanagePage);
    return LmtagarchivemanagePage;
}());

//# sourceMappingURL=lmtagarchivemanage.js.map

/***/ }),

/***/ 990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmtagarchivemanagePageModule", function() { return LmtagarchivemanagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmtagarchivemanage__ = __webpack_require__(1617);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LmtagarchivemanagePageModule = /** @class */ (function () {
    function LmtagarchivemanagePageModule() {
    }
    LmtagarchivemanagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmtagarchivemanage__["a" /* LmtagarchivemanagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmtagarchivemanage__["a" /* LmtagarchivemanagePage */]),
            ],
        })
    ], LmtagarchivemanagePageModule);
    return LmtagarchivemanagePageModule;
}());

//# sourceMappingURL=lmtagarchivemanage.module.js.map

/***/ })

});
//# sourceMappingURL=78.js.map