webpackJsonp([32],{

/***/ 1592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecuritysetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_fingerprint_auth__ = __webpack_require__(431);
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
 * Generated class for the SecuritysetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SecuritysetPage = /** @class */ (function () {
    function SecuritysetPage(navCtrl, navParams, httpService, storage, modalCtrl, platform, events, toast, toastCtrl, alertCtrl, androidFingerprintAuth, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.events = events;
        this.toast = toast;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.androidFingerprintAuth = androidFingerprintAuth;
        this.app = app;
        this.password = '';
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.popToRoot();
        });
        var sloginuserinfo = this.storage.get(__WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */].ME_LOGIN_USERINFO);
        if (sloginuserinfo != null) {
            var account = sloginuserinfo.account;
            var openfingerLogin = this.storage.get(__WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */].SETTING_FINGER_LOGIN);
            if (openfingerLogin != null) {
                if (account == openfingerLogin.account) {
                    this.fingerval = true;
                }
                else {
                    this.fingerval = false;
                }
            }
            else {
                this.fingerval = false;
            }
            //当本地缓存中记录信息时       
        }
        else {
            this.fingerval = false;
        }
    }
    SecuritysetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SecuritysetPage');
        this.events.unsubscribe('wordChangeMessage');
    };
    SecuritysetPage.prototype.changePassword = function () {
        var _this = this;
        var user = { id: this.storage.get(__WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */].ME_USERINFO).id,
            oldPassword: this.storage.get(__WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */].ME_LOGIN_USERINFO).password,
        };
        this.events.subscribe('wordChangeMessage', function (data) {
            _this.toastCtrl.create({
                message: data,
                duration: 1200,
                position: 'top',
            }).present();
            // this.events.unsubscribe('wordChangeMessage');
        });
        this.events.subscribe('changeSuccess', function () {
            var api = '/logout';
            _this.httpService.post(api, null, function (data) {
                if (data.code == 0) {
                    _this.alertCtrl.create({
                        title: '下线通知',
                        subTitle: '您的密码已修改，请重新登陆',
                        cssClass: 'AlertList2',
                        buttons: [{
                                text: '确定',
                                handler: function () {
                                    _this.storage.remove(__WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */].ME_USERINFO);
                                    _this.storage.remove(__WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */].ME_LOGIN_USERINFO);
                                    _this.storage.remove(__WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */].HOME_APPAUTHORITY);
                                    _this.storage.remove(__WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */].SYSTEM_CONFIG);
                                    _this.storage.remove(__WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */].ALLAPPLICATION);
                                    _this.storage.remove(__WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */].ISKEEP_PASSWORD);
                                    // this.storage.remove(StorageProvider.ALLAPPLICATION);
                                    _this.app.getRootNav().setRoot('LoginPage');
                                    _this.events.unsubscribe('changeSuccess');
                                }
                            }]
                    }).present();
                }
            }, null);
        });
        var modal = this.modalCtrl.create('DialogChangepasswordPage', { 'userinfo': user });
        modal.present();
    };
    SecuritysetPage.prototype.fingerOpen = function (event) {
        console.log(event.checked);
        if (event.checked) {
            if (this.platform.is('android') || this.platform.is('ios')) {
                this.isAvailueble(event.checked);
            }
        }
        else {
            this.fingerval = false;
            this.storage.remove(__WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */].SETTING_FINGER_LOGIN);
            var toa = this.toast.create({
                message: '指纹登录认证已关闭',
                position: 'middle',
                duration: 3000
            });
            toa.present();
        }
    };
    //开启指纹认证
    SecuritysetPage.prototype.isAvailueble = function (status) {
        var _this = this;
        this.androidFingerprintAuth.isAvailable().then(function (res) {
            if (res.isAvailable) {
                var sloginuserinfo_1 = _this.storage.get(__WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */].ME_LOGIN_USERINFO);
                if (sloginuserinfo_1 != null) {
                    var encryptConfig = {
                        clientId: 'tkyappName',
                        username: sloginuserinfo_1.account,
                        password: sloginuserinfo_1.password,
                        locale: 'zh_CN',
                        maxAttempts: 5,
                        disableBackup: true,
                        dialogTitle: '指纹登录开启',
                    };
                    _this.androidFingerprintAuth.encrypt(encryptConfig).then(function (result) {
                        if (result.withFingerprint) {
                            var fingeruser = {
                                account: sloginuserinfo_1.account,
                                password: sloginuserinfo_1.password,
                                token: result.token
                            };
                            _this.storage.set(__WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */].SETTING_FINGER_LOGIN, fingeruser);
                            _this.fingerval = true;
                            var toa = _this.toast.create({
                                message: '指纹登录认证已开启',
                                position: 'middle',
                                duration: 1000
                            });
                            toa.present();
                        }
                        else {
                            _this.fingerval = false;
                            _this.storage.remove(__WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */].SETTING_FINGER_LOGIN);
                            var toa = _this.toast.create({
                                message: '指纹登录认证失败',
                                position: 'middle',
                                duration: 3000
                            });
                            toa.present();
                        }
                    }, function (error) {
                        _this.fingerval = false;
                        _this.storage.remove(__WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */].SETTING_FINGER_LOGIN);
                        if (error === _this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
                            console.log("FingerprintAuth Dialog Cancelled!");
                        }
                        else if (error === _this.androidFingerprintAuth.ERRORS.FINGERPRINT_ERROR) {
                            var toa = _this.toast.create({
                                message: '指纹认证失败',
                                position: 'middle',
                                duration: 1000
                            });
                            toa.present();
                        }
                        else {
                            console.log("FingerprintAuth Error: " + error);
                        }
                    });
                }
            }
            else {
                _this.fingerval = false;
                _this.storage.remove(__WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */].SETTING_FINGER_LOGIN);
            }
        }).catch(function (error) {
            _this.fingerval = false;
            var toa = _this.toast.create({
                message: '指纹登录认证失败',
                position: 'middle',
                duration: 3000
            });
            toa.present();
        });
    };
    SecuritysetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-securityset',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/me/securityset/securityset.html"*/'<!--\n  Generated template for the SecuritysetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="whiteheader">\n\n  <ion-navbar>\n    <ion-title>安全设置</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="pagebg">\n    <!--\n    <ion-list inset class="user_list mylistmd">    \n      <ion-item >\n          <span>手机号码</span>\n          <span item-end class="fc999">13288751256</span>\n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n    </ion-list>\n    -->\n    <ion-list inset class="user_list mylistmd">    \n      <ion-item (click)="changePassword()">\n          <span>修改密码</span>\n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n      <ion-item >\n          <ion-label>指纹管理</ion-label>\n          <ion-toggle [(ngModel)]="fingerval" (ionChange)="fingerOpen($event)" color="secondary" item-end></ion-toggle>\n      </ion-item>\n      <ion-item >\n          <span>手势管理</span>\n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/me/securityset/securityset.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_fingerprint_auth__["a" /* AndroidFingerprintAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], SecuritysetPage);
    return SecuritysetPage;
}());

//# sourceMappingURL=securityset.js.map

/***/ }),

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecuritysetPageModule", function() { return SecuritysetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__securityset__ = __webpack_require__(1592);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SecuritysetPageModule = /** @class */ (function () {
    function SecuritysetPageModule() {
    }
    SecuritysetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__securityset__["a" /* SecuritysetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__securityset__["a" /* SecuritysetPage */]),
            ],
        })
    ], SecuritysetPageModule);
    return SecuritysetPageModule;
}());

//# sourceMappingURL=securityset.module.js.map

/***/ })

});
//# sourceMappingURL=32.js.map