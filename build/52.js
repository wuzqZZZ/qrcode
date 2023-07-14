webpackJsonp([52],{

/***/ 1626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmtagstartupreportinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_android_permissions__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_config__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_phone_device__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_storage__ = __webpack_require__(52);
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
 * Generated class for the LmtagstartupreportinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmtagstartupreportinfoPage = /** @class */ (function () {
    // public archiveid = null
    function LmtagstartupreportinfoPage(navCtrl, navParams, httpService, phoneDevice, platform, toastCtrl, permission, file, camera, events, transfer, fileopen, loadingCtrl, configProvider, menuCtrl, actionsheetCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.phoneDevice = phoneDevice;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.permission = permission;
        this.file = file;
        this.camera = camera;
        this.events = events;
        this.transfer = transfer;
        this.fileopen = fileopen;
        this.loadingCtrl = loadingCtrl;
        this.configProvider = configProvider;
        this.menuCtrl = menuCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.storage = storage;
        this.list = []; // 列表
        // public lmtagStatusList = []
        this.projectid = '';
        this.filepath = '';
        // public currentTab = 0
        this.search = '';
        // public status = 1
        this.timer = null;
        this.info = {};
        this.edit = false;
        this.info = this.navParams.get('item');
        this.edit = this.navParams.get('edit');
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
    }
    LmtagstartupreportinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LmtagarchivemanagePage');
    };
    LmtagstartupreportinfoPage.prototype.ionViewWillEnter = function () {
        this.projectid = this.storage.get(__WEBPACK_IMPORTED_MODULE_10__providers_storage__["a" /* StorageProvider */].LM_PROJECTID);
        if (this.projectid) {
            this.initlist();
        }
    };
    LmtagstartupreportinfoPage.prototype.doRefresh = function (refresher) {
        this.initlist();
        setTimeout(function () {
            refresher.complete(); //停止下拉刷新
        }, 1500);
    };
    // 本地搜索+防抖
    LmtagstartupreportinfoPage.prototype.handleSearch = function () {
        var _this = this;
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            if (_this.search) {
                _this.list = _this.list.filter(function (item) { return item.name.includes(_this.search); });
            }
            else {
                _this.initlist();
            }
            _this.timer = null;
        }, 300);
    };
    LmtagstartupreportinfoPage.prototype.initlist = function () {
        var _this = this;
        this.list = [];
        this.httpService.getFiles('lmtagStartupReport', this.info['reportid'], function (res) {
            if (res.code == 0) {
                _this.list = res.data;
            }
        });
    };
    LmtagstartupreportinfoPage.prototype.saveForm = function () {
        var _this = this;
        // 回调列表页，保存整个列表
        this.navCtrl.pop().then(function () {
            _this.events.publish('saveListCall', JSON.stringify(_this.info));
        });
    };
    // 文件上传相关 START
    LmtagstartupreportinfoPage.prototype.clickUpload = function () {
        // $('#file').click()
        this.photo('lmtagStartupReport', false);
    };
    LmtagstartupreportinfoPage.prototype.beforeUpload2 = function (e) {
        var _this = this;
        var file = e.target.files[0];
        console.log(e.target.files);
        if (file.length == 0) {
            return;
        }
        var formdata = new FormData();
        formdata.append('file', file);
        formdata.append('busstype', 'lmtagStartupReport');
        formdata.append('bussid', this.info['reportid']);
        this.httpService.postFormData('/uploadify/upload', formdata, function (res) {
            console.log(res);
            $('#file2')[0].value = '';
            if (res.error == 0) {
                _this.toastCtrl.create({
                    position: 'top',
                    message: '上传成功',
                    duration: 1200
                }).present();
                _this.initlist();
            }
            else {
                _this.toastCtrl.create({
                    position: 'top',
                    message: res.message || '出错了，请重试！',
                    duration: 1200
                }).present();
                _this.initlist();
            }
        });
    };
    LmtagstartupreportinfoPage.prototype.photo = function (busstype, video) {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            // cssClass:'headChoice',
            buttons: [
                {
                    text: '拍照',
                    role: 'destructive',
                    cssClass: 'normal',
                    handler: function () {
                        _this.doCamera(_this.camera.PictureSourceType.CAMERA, busstype, video);
                    }
                }, {
                    text: '从手机相册中选择',
                    cssClass: 'normal',
                    handler: function () {
                        _this.doCamera(_this.camera.PictureSourceType.PHOTOLIBRARY, busstype, video);
                    }
                }, {
                    text: '从文件中选择',
                    cssClass: 'normal',
                    handler: function () {
                        $('#file2').click();
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    cssClass: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionsheet.present();
    };
    LmtagstartupreportinfoPage.prototype.doCamera = function (sourceType, busstype, video) {
        var _this = this;
        var mediatype = 0;
        if (video) {
            mediatype = 1;
        }
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: sourceType,
            mediaType: mediatype,
            correctOrientation: true,
            // mediaType: this.camera.MediaType.PICTURE,
            //allowEdit:true,
            targetWidth: 1024,
            targetHeight: 1024
        };
        // let that = this;
        var obj = {};
        // 获取图片
        this.camera.getPicture(options).then(function (imageData) {
            // 获取成功
            _this.httpService.uploadify(busstype, _this.info['reportid'], imageData, function (result) {
                _this.initlist();
            });
        });
    };
    // 文件上传相关 END
    // 文件大小格式化
    LmtagstartupreportinfoPage.prototype.formatBytes = function (size) {
        var data = "";
        if (size < 0.1 * 1024) {
            data = size.toFixed(2) + "B";
        }
        else if (size < 0.1 * 1024 * 1024) {
            data = (size / 1024).toFixed(2) + "KB";
        }
        else if (size < 0.1 * 1024 * 1024 * 1024) {
            data = (size / (1024 * 1024)).toFixed(2) + "MB";
        }
        else {
            data = (size / (1024 * 1024 * 1024)).toFixed(2) + "GB";
        }
        var sizestr = data + "";
        var len = sizestr.indexOf("\.");
        var dec = sizestr.substring(len + 1, 2);
        if (dec == "00") {
            return sizestr.substring(0, len) + sizestr.substring(len + 3, 2);
        }
        return sizestr;
    };
    LmtagstartupreportinfoPage.prototype.removeFile = function (item) {
        var _this = this;
        this.httpService.deleteImage({ 'ids': item['id'] }, function (res) {
            if (res.code == 0) {
                _this.toastCtrl.create({
                    message: '删除文件成功',
                    duration: 1200,
                    position: 'top'
                }).present();
                _this.initlist();
            }
        }, this.httpService.CONTENTTYPE_FORMURLENCODE);
    };
    // 下载相关函数
    LmtagstartupreportinfoPage.prototype.checkPermissions = function () {
        this.permission.requestPermission(this.permission.PERMISSION.READ_EXTERNAL_STORAGE).then(function (res) { console.log(res); });
        this.permission.requestPermission(this.permission.PERMISSION.WRITE_EXTERNAL_STORAGE).then(function (res) { console.log(res); });
    };
    LmtagstartupreportinfoPage.prototype.openFile = function (item) {
        var _this = this;
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
    LmtagstartupreportinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmtagstartupreportinfo',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagstartupreport/lmtagstartupreportinfo/lmtagstartupreportinfo.html"*/'<!--\n  Generated template for the LlmtagarchivemanagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">开工报告详情</ion-title>\n    <!-- <i class="iconfont icon-shuzhuangtu_o" (click)="openMenu()" style="font-size:24px;float: right;margin-right: 10px;"></i> -->\n    <span style="color: white;float: right;margin-right: 10px;margin-top: 10px;" (click)="clickUpload()">上传</span>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="刷新...">\n    </ion-refresher-content>\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div class="container">\n    <div class="header" *ngIf="!edit">\n      <div class="searchbox">\n        <input type="text" placeholder="搜索文件" [(ngModel)]="search" (ngModelChange)="handleSearch()" clear>\n      </div>\n    </div>\n    <div *ngIf="edit" class="editbox">\n      <ion-item>\n        <ion-label>说明：</ion-label>\n        <ion-input name="region" type="text" [(ngModel)]="info[\'region\']" placeholder="请输入"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>编制人：</ion-label>\n        <ion-input name="uploadername" type="text" [(ngModel)]="info[\'uploadername\']" disabled></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>联系电话：</ion-label>\n        <ion-input name="phone" type="text" [(ngModel)]="info[\'phone\']" disabled></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>上传时间：</ion-label>\n        <ion-input name="uploadtime" type="text" [(ngModel)]="info[\'uploadtime\']" disabled></ion-input>\n      </ion-item>\n    </div>\n    <div class="card">\n      <div class="card_item" *ngFor="let item of list">\n        <div class="preimg">\n          <img src="assets/imgs/files/DWG.png" class="pic" *ngIf="item.filetype == \'dwg\'">\n          <img src="assets/imgs/files/edition.png" class="pic" *ngIf="item.filetype != \'dwg\' && item.filetype != \'jpg\' && item.filetype != \'jpeg\' && item.filetype != \'png\'&& item.filetype != \'bmp\' && item.filetype != \'gif\'\n          && item.filetype != \'doc\' && item.filetype != \'docx\' &&item.filetype != \'dotx\' && item.filetype != \'xls\' && item.filetype != \'xlsx\' \n          && item.filetype != \'pptx\' && item.filetype != \'ppt\' && item.filetype != \'tif\' &&  item.filetype != \'pdf\'">\n          <img src="assets/imgs/files/jpg.png" class="pic" *ngIf="item.filetype == \'jpg\' || item.filetype == \'jpeg\' || item.filetype == \'png\'|| item.filetype == \'bmp\' || item.filetype == \'gif\' ">\n          <img src="assets/imgs/files/word2.png" class="pic" *ngIf="item.filetype == \'doc\' || item.filetype == \'docx\' ||item.filetype == \'dotx\' ">\n          <img src="assets/imgs/files/xls.png" class="pic" *ngIf="item.filetype == \'xls\' || item.filetype == \'xlsx\' ">\n          <img src="assets/imgs/lm/lmhome/pdf2.png" class="pic" *ngIf="item.filetype == \'pdf\' ">\n          <img src="assets/imgs/files/ppt.png" class="pic" *ngIf="item.filetype == \'pptx\' || item.filetype == \'ppt\' ">\n          <img src="assets/imgs/files/tif.png" class="pic" *ngIf="item.filetype == \'tif\' ">\n          <img src="assets/imgs/files/dwl.png" class="pic" *ngIf="item.filetype == \'dwl\' || item.filetype == \'dwl2\' ">\n        </div>\n        <div class="rightbox">\n          <div class="rightbox_title">\n            <span class="filename">{{ item.name }}</span>\n          </div>\n          <div class="rightbox_main">\n            <div class="mr-bm-3" *ngIf="!edit">说明：{{ info.region || \'-\' }}</div>\n            <div>大小：{{ formatBytes(item.filesize) }}</div>\n          </div>\n          <div class="btnbox">\n            <span class="blue" (click)="openFile(item)">预览</span>\n            <span class="vertical blue">|</span>\n            <span class="red" (click)="removeFile(item)">删除</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="tips" *ngIf="list.length == 0">暂无文件...</div>\n  </div>\n\n  <input type="file" name="file" id="file2" style="width: 0;" (change)="beforeUpload2($event)">\n\n</ion-content>\n\n<ion-footer id="ionFooter" *ngIf="edit">\n  <ion-toolbar>\n    <p style="widows: 100%;">\n      <button id="saveBtn" (click)="saveForm()" ion-button icon-start round style="width: 45%;position: absolute;">\n        <ion-icon name=\'send\'></ion-icon>\n        保存\n      </button>\n      <button id="back" ion-button outline icon-start round style="margin-left:50%;width:45%;" (click)="navCtrl.pop()">\n        返回\n      </button>\n    </p>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagstartupreport/lmtagstartupreportinfo/lmtagstartupreportinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_phone_device__["a" /* PhoneDeviceProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_storage__["a" /* StorageProvider */]])
    ], LmtagstartupreportinfoPage);
    return LmtagstartupreportinfoPage;
}());

//# sourceMappingURL=lmtagstartupreportinfo.js.map

/***/ }),

/***/ 999:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmtagstartupreportinfoPageModule", function() { return LmtagstartupreportinfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmtagstartupreportinfo__ = __webpack_require__(1626);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LmtagstartupreportinfoPageModule = /** @class */ (function () {
    function LmtagstartupreportinfoPageModule() {
    }
    LmtagstartupreportinfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmtagstartupreportinfo__["a" /* LmtagstartupreportinfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmtagstartupreportinfo__["a" /* LmtagstartupreportinfoPage */]),
            ],
        })
    ], LmtagstartupreportinfoPageModule);
    return LmtagstartupreportinfoPageModule;
}());

//# sourceMappingURL=lmtagstartupreportinfo.module.js.map

/***/ })

});
//# sourceMappingURL=52.js.map