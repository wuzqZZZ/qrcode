webpackJsonp([33],{

/***/ 1592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { LoginPage } from './login/login';





var MePage = /** @class */ (function () {
    function MePage(navCtrl, navParams, httpService, storage, alertCtrl, app, actionsheetCtrl, config, statusBar, camera, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.actionsheetCtrl = actionsheetCtrl;
        this.config = config;
        this.statusBar = statusBar;
        this.camera = camera;
        this.sanitizer = sanitizer;
        this.masterinfo = {};
        this.username = '';
        statusBar.styleDefault();
        this.masterinfo = { "showWall": "assets/imgs/discover/material6.jpg", "head": "assets/imgs/discover/title.png", "name": "金文文" };
    }
    MePage.prototype.ionViewWillEnter = function () {
        this.username = this.storage.get(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].ME_USERINFO)['name'];
        this.getHeadimg();
        this.statusBar.styleDefault();
    };
    MePage.prototype.getHeadimg = function () {
        var _this = this;
        var userinfo = this.storage.get(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].ME_USERINFO);
        this.httpService.getFiles('USER_IMG', userinfo['id'], function (res) {
            if (res.code == 0) {
                if (res.data.length > 0) {
                    // this.headImageUrl = res.data[0]['url'];
                    _this.httpService.getBlob(res.data[0]['url'], function (res) {
                        _this.headImageUrl = _this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(res));
                        // console.log(`getHeadimg  this.headImageUrl => `, this.headImageUrl)
                    });
                }
            }
        });
    };
    MePage.prototype.toggleHeadImage = function () {
    };
    MePage.prototype.SecuritysetPage = function () {
        this.navCtrl.push('SecuritysetPage');
    };
    MePage.prototype.SystemsetupPage = function () {
        this.navCtrl.push('SystemsetupPage');
    };
    MePage.prototype.AboutusPage = function () {
        this.navCtrl.push('AboutusPage');
    };
    MePage.prototype.loginout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '退出提醒',
            subTitle: '您确定要退出吗？',
            buttons: ['取消', {
                    text: '确定',
                    handler: function () {
                        var api = '/logout';
                        _this.storage.remove(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].ME_USERINFO);
                        _this.storage.remove(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].ME_LOGIN_USERINFO);
                        _this.storage.remove(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].HOME_APPAUTHORITY);
                        _this.storage.remove(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].SYSTEM_CONFIG);
                        _this.storage.remove(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].ALLAPPLICATION);
                        _this.storage.remove(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].ISKEEP_PASSWORD);
                        _this.app.getRootNav().setRoot('LoginPage');
                        _this.httpService.post(api, null, function (data) {
                            if (data.code == 0) {
                            }
                        }, null);
                    }
                }]
        });
        alert.present();
    };
    MePage.prototype.doCamera = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: sourceType,
            correctOrientation: true,
            // mediaType: this.camera.MediaType.PICTURE,
            //allowEdit:true,
            targetWidth: 1024,
            targetHeight: 1024
        };
        this.camera.getPicture(options).then(function (imagedata) {
            _this.masterinfo['head'] = imagedata;
        });
    };
    MePage.prototype.changeHeader = function () {
        var _this = this;
        // console.log($('#add').src);
        var actionsheet = this.actionsheetCtrl.create({
            // cssClass:'headChoice',
            buttons: [
                {
                    text: '拍照',
                    role: 'destructive',
                    cssClass: 'normal',
                    handler: function () {
                        _this.doCamera(_this.camera.PictureSourceType.CAMERA);
                    }
                }, {
                    text: '从手机相册中选择',
                    cssClass: 'normal',
                    handler: function () {
                        _this.doCamera(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                }, {
                    text: '录小视频',
                    cssClass: 'normal',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                },
                {
                    text: '录音',
                    cssClass: 'normal',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    cssClass: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionsheet.present();
    };
    MePage.prototype.skiptoAnnex = function () {
        this.navCtrl.push('AnnexPage');
    };
    MePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-me',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/me/me.html"*/'<!--\n  Generated template for the MePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="meioncontent" padding>\n    <div class="user-show-wall" >\n        <div style="height:46px;position: relative;">\n            <img [src]="headImageUrl" style="height:46px;width:46px;border-radius: 4px;" alt="" (click)="toggleHeadImage()">\n            <span style="position: absolute;left: 56px;font-size: 16px;top: 12px;">{{username}}</span>\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </div>\n    </div>\n    <ion-list inset class="user_list mylistmd">\n        \n        <ion-item (click)="skiptoAnnex()">\n            <div class="comfirm-svg " item-start>\n                <img src="assets/imgs/me/上传.png" style="width:25px;height:25px;" alt="">\n            </div>\n            <span style="margin-left:4px;">待上传附件</span>\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n  </ion-list>\n\n  <ion-list inset class="user_list mylistmd">\n        <!-- <ion-item (click)="SecuritysetPage()">\n            <div class="securityset-svg item-svg" item-start></div>\n            <span>安全设置</span>\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item> -->\n        <ion-item (click)="SystemsetupPage()">\n            <div class="system-setup-svg item-svg" item-start></div>\n            <span>系统设置</span>\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n  </ion-list>\n\n  <ion-list inset class="user_list mylistmd">    \n    <ion-item (click)="AboutusPage()">\n        <div class="aboutus-svg item-svg" item-start></div>\n        <span>关于我们</span>\n        <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n    </ion-item>\n   </ion-list>\n    <div padding>\n        <button block  style="background-color:#FF644D;width: 79%;height: 45px;border-radius: 100px;color:white;margin-left:11%;" round class="loginoutbtn" (click)="loginout()">退出登录</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/me/me.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["DomSanitizer"]])
    ], MePage);
    return MePage;
}());

//# sourceMappingURL=me.js.map

/***/ }),

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MePageModule", function() { return MePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__me__ = __webpack_require__(1592);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MePageModule = /** @class */ (function () {
    function MePageModule() {
    }
    MePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__me__["a" /* MePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__me__["a" /* MePage */]),
            ],
        })
    ], MePageModule);
    return MePageModule;
}());

//# sourceMappingURL=me.module.js.map

/***/ })

});
//# sourceMappingURL=33.js.map