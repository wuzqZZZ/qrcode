webpackJsonp([84],{

/***/ 1615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmpjifilesPage; });
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










/**
 * Generated class for the LmpjifilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmpjifilesPage = /** @class */ (function () {
    function LmpjifilesPage(navCtrl, navParams, httpService, phoneDevice, platform, toastCtrl, permission, file, transfer, fileopen, loadingCtrl, configProvider, menuCtrl, storage) {
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
        // public lmtagStatusList = []
        this.projectid = '';
        this.filepath = '';
        this.index = 0;
        this.currentTab = 0;
        this.search = '';
        this.status = 'MY';
        this.timer = null;
        // public archiveid = null
        this.page = 1;
        this.maxPage = 1;
        this.lmfilesStatusList = [{ name: '我的', value: 'MY' }, { name: '已就绪', value: 'COMP' }, { name: '未就绪', value: 'UNCOMP' }];
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
    }
    LmpjifilesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LmtagarchivemanagePage');
    };
    LmpjifilesPage.prototype.ionViewWillEnter = function () {
        // this.list = [];
        // this.lmtagStatusList = [];
        // this.initproject();
        this.projectid = this.storage.get(__WEBPACK_IMPORTED_MODULE_9__providers_storage__["a" /* StorageProvider */].LM_PROJECTID);
        // this.getDict();
        if (this.projectid) {
            this.page = 1;
            this.initlist();
            // this.initTree();
        }
    };
    LmpjifilesPage.prototype.doRefresh = function (refresher) {
        // this.initproject()
        // this.getDict();
        this.initlist();
        setTimeout(function () {
            refresher.complete(); //停止下拉刷新
        }, 1500);
    };
    LmpjifilesPage.prototype.doInfinite = function (infiniteScroll) {
        if ((this.page + 1) <= this.maxPage) {
            this.page++;
            this.initlist();
        }
    };
    LmpjifilesPage.prototype.changeTab = function (status, i) {
        this.currentTab = i;
        this.status = status;
        this.initlist();
    };
    // 搜索+防抖
    LmpjifilesPage.prototype.handleSearch = function () {
        var _this = this;
        // console.log(this.search);
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            _this.initlist();
            _this.timer = null;
        }, 300);
    };
    // handleInfo(item) {
    //   this.navCtrl.push('LmtagstartupreportinfoPage', { item })
    // }
    LmpjifilesPage.prototype.initlist = function () {
        var _this = this;
        this.list = [];
        var url = "/lmtagProject/list?techprogram=1&sort=createtime&order=desc&projectid=" + this.projectid + "&_search=false&rows=15&page=" + this.page + "&sidx=&sord=asc&fuzzysearch=" + this.search;
        if (this.status == 'MY') {
            url += '&nw_resperson1=my';
        }
        else {
            var where = { toint_projectstatus_equal: this.status };
            url += '&where=' + encodeURI(JSON.stringify(where));
        }
        var loading = this.loadingCtrl.create({
            content: '正在加载中...',
            enableBackdropDismiss: true,
        });
        loading.present();
        this.httpService.get(url, null, function (result) { return __awaiter(_this, void 0, void 0, function () {
            var index, item, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        loading.dismiss();
                        if (!(result != null)) return [3 /*break*/, 4];
                        this.list = this.list.concat(result.rows);
                        this.maxPage = result.total;
                        index = 0;
                        _c.label = 1;
                    case 1:
                        if (!(index < this.list.length)) return [3 /*break*/, 4];
                        item = this.list[index];
                        _a = item;
                        _b = 'initfiles';
                        return [4 /*yield*/, this.initfiles(item)];
                    case 2:
                        _a[_b] = _c.sent();
                        _c.label = 3;
                    case 3:
                        index++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    LmpjifilesPage.prototype.initfiles = function (item) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.httpService.getFiles('lmtagProject', item['prjid'], function (res) {
                if (res.code == 0) {
                    resolve(res.data);
                }
                resolve([]);
            });
        });
    };
    // 文件上传相关 START
    LmpjifilesPage.prototype.clickUpload = function (i) {
        this.index = i;
        $('#file').click();
    };
    LmpjifilesPage.prototype.beforeUpload = function (e) {
        var _this = this;
        var file = e.target.files[0];
        $('#file')[0].value = '';
        console.log(e.target.files);
        var formdata = new FormData();
        formdata.append('file', file);
        formdata.append('busstype', 'lmtagProject');
        formdata.append('folderid', '');
        formdata.append('bussid', this.list[this.index]['prjid']);
        this.httpService.postFormData('/uploadify/upload', formdata, function (res) {
            console.log(res);
            if (res.error == 0) {
                _this.toastCtrl.create({
                    position: 'top',
                    message: '上传成功',
                    duration: 1200
                }).present();
                _this.page = 1;
                _this.initlist();
            }
        });
    };
    // 文件上传相关 END
    // 文件大小格式化
    LmpjifilesPage.prototype.formatBytes = function (size) {
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
    LmpjifilesPage.prototype.removeFile = function (item) {
        var _this = this;
        this.httpService.deleteImage({ 'ids': item['id'] }, function (res) {
            if (res.code == 0) {
                _this.toastCtrl.create({
                    message: '删除文件成功',
                    duration: 1200,
                    position: 'top'
                }).present();
                _this.page = 1;
                _this.initlist();
            }
        }, this.httpService.CONTENTTYPE_FORMURLENCODE);
    };
    // 下载相关函数
    LmpjifilesPage.prototype.checkPermissions = function () {
        this.permission.requestPermission(this.permission.PERMISSION.READ_EXTERNAL_STORAGE).then(function (res) { console.log(res); });
        this.permission.requestPermission(this.permission.PERMISSION.WRITE_EXTERNAL_STORAGE).then(function (res) { console.log(res); });
    };
    LmpjifilesPage.prototype.openFile = function (item) {
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
    LmpjifilesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmpjifiles',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmpjifiles/lmpjifiles.html"*/'<!--\n  Generated template for the LlmtagarchivemanagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">施工方案</ion-title>\n    <!-- <i class="iconfont icon-shuzhuangtu_o" (click)="openMenu()" style="font-size:24px;float: right;margin-right: 10px;"></i> -->\n    <!-- <span style="color: white;float: right;margin-right: 10px;">上传</span> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="刷新...">\n    </ion-refresher-content>\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div class="main">\n    <div class="header">\n      <div class="searchbox">\n        <input type="text" placeholder="搜索" [(ngModel)]="search" (ngModelChange)="handleSearch()" clear>\n      </div>\n      <div class="tabbox">\n        <span *ngFor="let tab of lmfilesStatusList; let i = index" [ngClass]="{\'active\': currentTab == i}" (click)="changeTab(tab.value, i)">{{ tab.name }}</span>\n      </div>\n    </div>\n    <div class="itembox" *ngFor="let item of list; let i = index">\n      <div class="boxtop">\n        <div>\n          <span>{{ item.projectname }}</span>\n        </div>\n        <span class="imred status">{{ item.wfstatusname }}</span>\n      </div>\n      <div class="boxmid">\n        <span class="status">{{ item.code }}</span>\n        <span class="status" style="margin-left: 5px;">{{ item.projectstatusname }}</span>\n      </div>\n      <div class="boxbtm">\n        <div class="mw30">\n          <p>{{ item.specialtyname || \'暂无\' }}</p>\n          <p>检修专业</p>\n        </div>\n        <div class="mw30">\n          <p>{{ item.respersonname }}</p>\n          <p>负责人</p>\n        </div>\n        <div>\n          <p>{{ item.planstarttime.split(\' \')[0] }}</p>\n          <p>计划开工时间</p>\n        </div>\n      </div>\n      <div class="boxfile">\n        <span style="flex: none;">施工方案:</span>\n        <div style="text-align: end;">\n          <div (click)="clickUpload(i)">\n            <img src="assets/imgs/lm/lmhome/upload.png" style="width: 18px; vertical-align: text-bottom;" alt="上传">\n            上传\n          </div>\n          <!-- 附件列表 -->\n          <div class="boxfilelist">\n            <div *ngFor="let file of item.initfiles">\n              <span (click)="openFile(file)">{{ file.name }}</span>\n              <span class="delete" (click)="removeFile(file)">x</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="tips" *ngIf="list.length == 0">暂无数据...</div>\n  </div>\n\n  <input type="file" name="file" id="file" style="width: 0;" (change)="beforeUpload($event)">\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="page < maxPage">\n         <ion-infinite-scroll-content\n             loadingSpinner="bubbles"\n             loadingText="加载中...">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmpjifiles/lmpjifiles.html"*/,
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
    ], LmpjifilesPage);
    return LmpjifilesPage;
}());

//# sourceMappingURL=lmpjifiles.js.map

/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmpjifilesPageModule", function() { return LmpjifilesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmpjifiles__ = __webpack_require__(1615);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LmpjifilesPageModule = /** @class */ (function () {
    function LmpjifilesPageModule() {
    }
    LmpjifilesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmpjifiles__["a" /* LmpjifilesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmpjifiles__["a" /* LmpjifilesPage */]),
            ],
        })
    ], LmpjifilesPageModule);
    return LmpjifilesPageModule;
}());

//# sourceMappingURL=lmpjifiles.module.js.map

/***/ })

});
//# sourceMappingURL=84.js.map