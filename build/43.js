webpackJsonp([43],{

/***/ 1001:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmtagtraininghandoverPageModule", function() { return LmtagtraininghandoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmtagtraininghandover__ = __webpack_require__(1628);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LmtagtraininghandoverPageModule = /** @class */ (function () {
    function LmtagtraininghandoverPageModule() {
    }
    LmtagtraininghandoverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmtagtraininghandover__["a" /* LmtagtraininghandoverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmtagtraininghandover__["a" /* LmtagtraininghandoverPage */]),
            ],
        })
    ], LmtagtraininghandoverPageModule);
    return LmtagtraininghandoverPageModule;
}());

//# sourceMappingURL=lmtagtraininghandover.module.js.map

/***/ }),

/***/ 1628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmtagtraininghandoverPage; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_Utils__ = __webpack_require__(192);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the LmtagstartuptrainingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmtagtraininghandoverPage = /** @class */ (function () {
    function LmtagtraininghandoverPage(navCtrl, navParams, httpService, phoneDevice, platform, toastCtrl, permission, file, camera, transfer, fileopen, loadingCtrl, configProvider, menuCtrl, events, actionsheetCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.phoneDevice = phoneDevice;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.permission = permission;
        this.file = file;
        this.camera = camera;
        this.transfer = transfer;
        this.fileopen = fileopen;
        this.loadingCtrl = loadingCtrl;
        this.configProvider = configProvider;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.actionsheetCtrl = actionsheetCtrl;
        this.storage = storage;
        this.list = []; // 列表
        // public lmtagStatusList = []
        this.projectid = '';
        // public filepath = '';
        // public currentTab = 0
        this.search = '';
        // public status = 1
        this.timer = null;
        // public archiveid = null
        this.training = {};
        this.editItemFlag = false;
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
    }
    LmtagtraininghandoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LmtagarchivemanagePage');
        this.projectid = this.storage.get(__WEBPACK_IMPORTED_MODULE_10__providers_storage__["a" /* StorageProvider */].LM_PROJECTID);
        // this.getDict();
        if (this.projectid) {
            this.initlist();
        }
    };
    LmtagtraininghandoverPage.prototype.ionViewWillEnter = function () {
        // this.projectid = this.storage.get(StorageProvider.LM_PROJECTID);
        // if (this.projectid) {
        //   this.initlist();
        // }
    };
    LmtagtraininghandoverPage.prototype.doRefresh = function (refresher) {
        // this.initproject()
        // this.getDict();
        this.training = {};
        this.editItemFlag = false;
        this.initlist();
        setTimeout(function () {
            refresher.complete(); //停止下拉刷新
        }, 1500);
    };
    // changeTab(status, i) {
    //   this.currentTab = i
    //   this.status = status
    //   this.initlist()
    // }
    // 搜索+防抖
    LmtagtraininghandoverPage.prototype.handleSearch = function () {
        var _this = this;
        // console.log(this.search);
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            _this.initlist();
            _this.timer = null;
        }, 300);
    };
    LmtagtraininghandoverPage.prototype.handleInfo = function (item, edit) {
        var _this = this;
        if (edit === void 0) { edit = false; }
        if (edit) {
            this.events.subscribe('saveListCall', function (params) {
                // console.log(params);
                var outData = JSON.parse(params);
                // 接收B页面发布的数据
                console.log(outData);
                _this.training = outData;
                _this.saveTraining();
                // 取消订阅
                _this.events.unsubscribe('saveListCall');
            });
        }
        this.navCtrl.push('LmtagtraininghandoverinfoPage', { item: item, edit: edit });
    };
    LmtagtraininghandoverPage.prototype.initlist = function () {
        var _this = this;
        this.list = [];
        var url = "/lmtagTrainingHandover/list?sort=createtime&order=desc&projectid=" + this.projectid + "&_search=false&rows=50&page=1&sidx=&sord=asc&fuzzysearch=" + this.search;
        this.httpService.get(url, null, function (result) {
            if (result != null) {
                _this.list = result.rows;
            }
        });
    };
    LmtagtraininghandoverPage.prototype.cancelEidt = function () {
        this.editItemFlag = false;
        this.training['version'] && this.initlist();
        this.training = {};
    };
    // 编辑
    LmtagtraininghandoverPage.prototype.editTraining = function (item, index) {
        // 已经有 编辑/新增项 在操作
        if (this.editItemFlag) {
            return this.toastCtrl.create({
                position: 'top',
                message: '有操作暂未保存',
                duration: 1200
            }).present();
        }
        this.training = __assign({}, item, { uploadtime: __WEBPACK_IMPORTED_MODULE_11__providers_Utils__["a" /* Utils */].dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss') });
        this.list.splice(index, 1);
        this.editItemFlag = true;
    };
    // 新建
    LmtagtraininghandoverPage.prototype.createTraining = function () {
        var userinfo = this.storage.get(__WEBPACK_IMPORTED_MODULE_10__providers_storage__["a" /* StorageProvider */].ME_USERINFO);
        this.training = {
            editor: userinfo.id,
            editorname: userinfo.name,
            description: '',
            uploadtime: __WEBPACK_IMPORTED_MODULE_11__providers_Utils__["a" /* Utils */].dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss'),
            phone: userinfo.phone || '',
            projectid: this.projectid,
            uploader: userinfo.id,
            uploadername: userinfo.name,
            thid: __WEBPACK_IMPORTED_MODULE_11__providers_Utils__["a" /* Utils */].getUuid()
        };
        // this.editItemFlag = true
        this.photo('lmtagTrainingHandover', false); // 拉起
    };
    LmtagtraininghandoverPage.prototype.saveTraining = function (showTip) {
        var _this = this;
        if (showTip === void 0) { showTip = false; }
        console.log(this.training);
        var data = [this.training].concat(this.list);
        this.httpService.post('/lmtag/lmtagTrainingHandoverService/saveList', data, function (res) {
            if (res.code == 0) {
                if (showTip) {
                    _this.toastCtrl.create({
                        position: 'top',
                        duration: 1200,
                        message: '保存成功',
                    }).present();
                }
                _this.editItemFlag = false;
                // this.training = {}
                _this.initlist();
            }
        });
    };
    LmtagtraininghandoverPage.prototype.removeTraining = function (ids) {
        var _this = this;
        this.httpService.removeTableIds('lmtagTrainingHandover', { ids: ids }, function (res) {
            console.log(res);
            if (res.code == 0) {
                _this.toastCtrl.create({
                    message: '删除成功',
                    duration: 1200,
                    position: 'top'
                }).present();
                _this.initlist();
            }
        }, this.httpService.CONTENTTYPE_FORMURLENCODE);
    };
    /**
     * 选择人员
     */
    LmtagtraininghandoverPage.prototype.chooseperson = function (id, name) {
        var _this = this;
        this.navCtrl.push('UserdialogPage', {
            typeid: id,
            type: 'single',
            typename: name
        });
        this.events.subscribe('user:userinfo', function (data, time) {
            console.log(data);
            _this.training[data.typename] = data.name;
            _this.training[data.typeid] = data.id;
            _this.training['phone'] = data.phone;
            _this.events.unsubscribe('user:userinfo');
        });
    };
    LmtagtraininghandoverPage.prototype.beforeUpload = function (e) {
        var _this = this;
        var file = e.target.files[0];
        console.log(e.target.files);
        if (file.length == 0) {
            return;
        }
        var formdata = new FormData();
        formdata.append('file', file);
        formdata.append('busstype', 'lmtagTrainingHandover');
        formdata.append('bussid', this.training['thid']);
        var loading = this.loadingCtrl.create({
            content: '上传中，请稍等...',
            enableBackdropDismiss: true,
        });
        loading.present();
        $('#file')[0].value = '';
        this.httpService.postFormData('/uploadify/upload', formdata, function (res) {
            loading.dismiss();
            if (res.error == 0) {
                _this.handleInfo(_this.training, true); // 携带初始化数据进入详情
                return;
            }
        });
    };
    LmtagtraininghandoverPage.prototype.photo = function (busstype, video) {
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
                        $('#file').click();
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
    LmtagtraininghandoverPage.prototype.doCamera = function (sourceType, busstype, video) {
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
            var loading = _this.loadingCtrl.create({
                content: '上传中，请稍等...',
                enableBackdropDismiss: true,
            });
            loading.present();
            _this.httpService.uploadify(busstype, _this.training['thid'], imageData, function (result) {
                loading.dismiss();
                _this.handleInfo(_this.training, true); // 携带初始化数据进入详情
            });
        });
    };
    LmtagtraininghandoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmtagtraininghandover',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagtraininghandover/lmtagtraininghandover.html"*/'<!--\n  Generated template for the LlmtagarchivemanagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">培训与交底</ion-title>\n    <span class="pull-right navbar-right"  >\n      <ion-icon  *ngIf="editItemFlag" name="create" (click)="saveTraining()" style="margin-right: 15px;"></ion-icon>\n      <ion-icon *ngIf="editItemFlag" name="md-close" (click)="cancelEidt()"></ion-icon>\n      <span  *ngIf="!editItemFlag" class="icon-add-outline" (click)="createTraining()"><ion-icon name="ios-add-outline"></ion-icon></span>\n    </span>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="刷新...">\n    </ion-refresher-content>\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div class="main">\n    <div class="header">\n      <div class="searchbox">\n        <input type="text" placeholder="搜索" [(ngModel)]="search" (ngModelChange)="handleSearch()" clear>\n      </div>\n    </div>\n    <!-- 编辑 -->\n    <div class="itembox eidt-itembox" *ngIf="editItemFlag">\n      <div class="boxtop">\n        <div>\n          <input type="text" placeholder="请输入说明" [(ngModel)]="training.description">\n        </div>\n      </div>\n      <div class="boxbtm">\n        <div style="width:25%;">\n          <!-- <input class="imblue" type="text" placeholder="编制人" [(ngModel)]="training.editorname" (focus)="chooseperson(\'editor\', \'editorname\')" > -->\n          <p class="imblue underline" (click)="chooseperson(\'editor\', \'editorname\')">\n            {{ training.editorname || \'选择\' }}\n            <!-- <span>></span> -->\n          </p>\n          <p>编制人</p>\n        </div>\n        <div style="width:35%;">\n          <!-- <input type="number" placeholder="-" [(ngModel)]="training.phone"> -->\n          <p>{{ training.phone || \'-\' }}</p>\n          <p>联系电话</p>\n        </div>\n        <div style="flex: none;">\n          <p>{{ training.uploadtime }}</p>\n          <p>上传时间</p>\n        </div>\n      </div>\n    </div>\n\n    <ion-list>\n      <ion-item-sliding class="itembox" *ngFor="let item of list; let i = index">\n        <ion-item (click)="handleInfo(item)">\n          <div class="boxtop">\n            <div>\n              <span>{{ item.description || \'-\' }}</span>\n            </div>\n          </div>\n          <div class="boxbtm">\n            <div style="width:25%;">\n              <p class="imblue">{{ item.editorname || \'-\' }}</p>\n              <p>编制人</p>\n            </div>\n            <div style="width:35%;">\n              <p>{{ item.phone || \'-\' }}</p>\n              <p>联系电话</p>\n            </div>\n            <div style="flex: none;">\n              <p>{{ item.uploadtime }}</p>\n              <p>上传时间</p>\n            </div>\n          </div>\n        </ion-item>\n        <ion-item-options style="border: 0;">\n          <button class="imblue" (click)="editTraining(item,i)">编辑</button>\n          <button class="imred" (click)="removeTraining(item.thid)">删除</button>\n        </ion-item-options>\n      </ion-item-sliding>\n      <div class="tips" *ngIf="list.length == 0">暂无数据...</div>\n    </ion-list>\n  </div>\n\n  <input type="file" name="file" id="file" style="width: 0;" (change)="beforeUpload($event)">\n\n</ion-content>\n\n<!-- <div class="itembox" *ngFor="let item of list" (click)="handleInfo(item)">\n  <div class="boxtop">\n    <div>\n      <span>{{ item.region || \'-\' }}</span>\n    </div>\n  </div>\n  <div class="boxbtm">\n    <div class="">\n      <p class="imblue">{{ item.editorname }}</p>\n      <p>编制人</p>\n    </div>\n    <div class="">\n      <p>{{ item.phone || \'-\' }}</p>\n      <p>联系电话</p>\n    </div>\n    <div>\n      <p>{{ item.uploadtime }}</p>\n      <p>上传时间</p>\n    </div>\n  </div>\n</div> -->\n<!-- <div class="tips" *ngIf="list.length == 0">暂无数据...</div> -->\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagtraininghandover/lmtagtraininghandover.html"*/,
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
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_storage__["a" /* StorageProvider */]])
    ], LmtagtraininghandoverPage);
    return LmtagtraininghandoverPage;
}());

//# sourceMappingURL=lmtagtraininghandover.js.map

/***/ })

});
//# sourceMappingURL=43.js.map