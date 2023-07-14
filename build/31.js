webpackJsonp([31],{

/***/ 1594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemsetupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services__ = __webpack_require__(37);
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
 * Generated class for the SystemsetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SystemsetupPage = /** @class */ (function () {
    function SystemsetupPage(navCtrl, navParams, actionSheetCtrl, storage, events, httpService, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.events = events;
        this.httpService = httpService;
        this.platform = platform;
        this.videoshowtype = '每次提醒';
        this.systemConfig = [];
        this.getSystemConfig();
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.popToRoot();
        });
        var offlinepi = this.storage.get(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].OFFLINE_PI);
        if (offlinepi == 1) {
            this.pioffline = true;
        }
        else {
            this.pioffline = false;
        }
    }
    SystemsetupPage.prototype.ionViewWillEnter = function () {
    };
    SystemsetupPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '',
            cssClass: 'bottomChoice',
            buttons: [
                {
                    text: '每次提醒',
                    // icon: 'ios-radio-button-off',
                    cssClass: 'normal',
                    //role: 'destructive',
                    handler: function () {
                        console.log('Destructive clicked');
                        _this.videoshowtype = '每次提醒';
                        _this.storage.set(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].ISOFFWIFILOAD, false);
                        _this.events.publish('wifiConfig', '每次提醒');
                    }
                }, {
                    text: '不提醒',
                    // icon: 'ios-radio-button-off',
                    cssClass: 'normal',
                    handler: function () {
                        console.log('Archive clicked');
                        _this.videoshowtype = '不提醒';
                        _this.storage.set(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].ISOFFWIFILOAD, true);
                        _this.events.publish('wifiConfig', '不提醒');
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    cssClass: 'normal',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    SystemsetupPage.prototype.ionViewDidLeave = function () {
        var url = '/system/shortcutService/saveList?code=APP_PERSONAL_CONFIG';
        this.httpService.post(url, this.systemConfig, function (res) {
            if (res.code == 0) {
                console.log('修改配置成功');
            }
        });
    };
    SystemsetupPage.prototype.isAutoLogin = function () {
        var _this = this;
        this.isAutoLoginConfig = !this.isAutoLoginConfig;
        // let data={scvalue:'isAutoLogin',remark:this.isAutoLoginConfig};
        this.systemConfig.forEach(function (element) {
            if (element['scvalue'] == 'isAutoLogin') {
                element['remark'] = _this.isAutoLoginConfig;
            }
        });
        this.storage.set(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].SYSTEM_CONFIG, this.systemConfig);
    };
    SystemsetupPage.prototype.getSystemConfig = function () {
        var data = [{ scvalue: 'isAutoLogin', remark: true }];
        this.systemConfig = this.storage.get(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].SYSTEM_CONFIG);
        if (this.systemConfig == null || this.systemConfig.length == 0) {
            this.systemConfig = data;
        }
        this.isAutoLoginConfig = this.initSingleConfig('isAutoLogin', true);
    };
    SystemsetupPage.prototype.initSingleConfig = function (configName, defaultvalue) {
        var obj = { scvalue: configName, remark: defaultvalue };
        var value;
        var flag = this.systemConfig.some(function (element) {
            if (element['scvalue'] == configName) {
                value = element['remark'];
            }
            else {
                value = true;
            }
            return element['scvalue'] == configName;
        });
        if (flag == false) {
            this.systemConfig.push(obj);
        }
        return value;
    };
    SystemsetupPage.prototype.piOfflineOpen = function (event) {
        if (event.checked) {
            this.pioffline = true;
            this.storage.set(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].OFFLINE_PI, 1);
        }
        else {
            this.pioffline = false;
            this.storage.set(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].OFFLINE_PI, 0);
        }
    };
    SystemsetupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-systemsetup',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/me/systemsetup/systemsetup.html"*/'<!--\n  Generated template for the SystemsetupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header  class="whiteheader">\n  <ion-navbar>\n    <ion-title>系统设置</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content  class="pagebg">\n    <ion-list inset class="user_list mylistmd">    \n      <ion-item >\n          <ion-label>开启离线巡检</ion-label>\n          <ion-toggle [(ngModel)]="pioffline" (ionChange)="piOfflineOpen($event)" color="secondary" item-end></ion-toggle>\n      </ion-item>\n    </ion-list>\n\n    <ion-list inset class="user_list mylistmd">  \n      <!--\n      <ion-item >\n          <span>清理缓存</span>\n          <span item-end class="fc999">230kb</span>\n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n      -->  \n      <ion-item >\n          <ion-label>是否开启自动登陆</ion-label>\n          <ion-toggle checked="isAutoLoginConfig" color="secondary" (ionChange)="isAutoLogin()" item-end></ion-toggle>\n      </ion-item>\n      <!--\n      <ion-item >\n          <ion-label>无痕浏览</ion-label>\n          <ion-toggle checked="false" color="secondary" item-end></ion-toggle>\n      </ion-item>\n      <ion-item >\n          <ion-label>启动时打开上次的页面</ion-label>\n          <ion-toggle checked="true" color="secondary"  item-end></ion-toggle>\n      </ion-item>\n      -->\n    </ion-list>\n    <!--\n    <ion-list inset class="user_list mylistmd">    \n      <ion-item >\n          <span>字体大小</span>\n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n      <ion-item >\n          <span>语音设置</span>\n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n    </ion-list>\n    -->\n    <ion-list inset class="user_list mylistmd">    \n      <ion-item (click)="presentActionSheet()">\n          <span>非wifi网络流量</span>\n          <span item-end class="fc999">{{videoshowtype}}</span>\n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n      <ion-item (click)="presentActionSheet()">\n          <span>非wifi网络播放</span>\n          <span item-end class="fc999">提醒一次</span>\n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n      <!--\n      <ion-item >\n          <span>同步设置</span>\n          <span item-end class="fc999">wifi自动云同步</span>\n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n      <ion-item >\n          <span>推送通知</span>\n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n      -->\n    </ion-list>\n    <!-- <div padding>\n      <button block ion-button  round class="loginoutbtn btn-linear-blue" (click)="loginout()">退出登录</button>\n    </div> -->\n</ion-content>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/me/systemsetup/systemsetup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */]])
    ], SystemsetupPage);
    return SystemsetupPage;
}());

//# sourceMappingURL=systemsetup.js.map

/***/ }),

/***/ 969:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemsetupPageModule", function() { return SystemsetupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__systemsetup__ = __webpack_require__(1594);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SystemsetupPageModule = /** @class */ (function () {
    function SystemsetupPageModule() {
    }
    SystemsetupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__systemsetup__["a" /* SystemsetupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__systemsetup__["a" /* SystemsetupPage */]),
            ],
        })
    ], SystemsetupPageModule);
    return SystemsetupPageModule;
}());

//# sourceMappingURL=systemsetup.module.js.map

/***/ })

});
//# sourceMappingURL=31.js.map