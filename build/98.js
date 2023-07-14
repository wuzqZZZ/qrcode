webpackJsonp([98],{

/***/ 1539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogChangepasswordPage; });
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
 * Generated class for the DialogChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DialogChangepasswordPage = /** @class */ (function () {
    function DialogChangepasswordPage(navCtrl, navParams, storage, httpService, view, toastCtrl, app, alertCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpService = httpService;
        this.view = view;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.oldpassword = '';
        this.newpassword = '';
        this.comfirmpassword = '';
        this.userinfo = {};
        this.account = '';
    }
    DialogChangepasswordPage.prototype.ionViewWillEnter = function () {
        this.userinfo = this.navParams.get('userinfo');
        this.account = this.storage.get(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].ME_LOGIN_USERINFO).account;
    };
    DialogChangepasswordPage.prototype.close = function () {
        this.view.dismiss();
    };
    DialogChangepasswordPage.prototype.keep = function () {
        var _this = this;
        var user = {};
        var obj = {};
        var userList = [];
        user = this.storage.get(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].ME_LOGIN_USERINFO);
        userList = this.storage.get(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].LOGIN_USERINFO_LIST);
        obj['id'] = this.userinfo['id'];
        obj['oldPassword'] = this.oldpassword;
        obj['newPassword'] = this.newpassword;
        obj['newPasswordr'] = this.comfirmpassword;
        // this.httpService.postform('/user/updatePassword','user',this.userinfo,res=>{
        this.httpService.updatePassword(obj, function (res) {
            _this.events.publish('wordChangeMessage', res.message);
            if (res.code == 0) {
                user['password'] = _this.comfirmpassword;
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].ME_LOGIN_USERINFO, user);
                if (userList != undefined && userList != null) {
                    userList.forEach(function (value, index) {
                        if (value['account'] == user['account']) {
                            value['password'] = _this.comfirmpassword;
                        }
                    });
                }
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].LOGIN_USERINFO_LIST, userList);
                _this.view.dismiss();
                _this.events.publish('changeSuccess', '');
            }
        });
        // }
    };
    DialogChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dialog-changepassword',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/dialog/dialog-changepassword/dialog-changepassword.html"*/'\n<section style="background: white;height: 100%;">\n  <div class="title">\n      <span>密码修改</span>\n    </div>\n    <div class="two-column-layout" style="margin-top:20px;">\n      <span class="left-column">账号名</span>\n      <div class="right-column">\n        <input type="text" [(ngModel)]="account" readonly >\n      </div>\n    </div>\n<div class="two-column-layout" style="">\n  <span class="left-column">原密码</span>\n  <div class="right-column">\n    <input type="password" [(ngModel)]="oldpassword" placeholder="输入原密码">\n  </div>\n</div>\n<div class="two-column-layout">\n  <span class="left-column">新密码</span>\n  <div class="right-column">\n    <input type="password" [(ngModel)]="newpassword" placeholder="输入新密码">\n  </div>\n</div>\n<div class="two-column-layout">\n  <span class="left-column">确认密码</span>\n  <div class="right-column"> \n    <input type="password" [(ngModel)]="comfirmpassword" placeholder="请再次输入新密码">\n  </div>\n</div>\n<div style="margin-top: 20px;">\n  <!-- <div style="flex:1"></div> -->\n  <div class="btn-content" >\n    <button class="btn-new btn-blue" (click)="keep()">保存</button>\n  </div>\n  <!-- <div style="flex:1"></div> -->\n  <div class="btn-content">\n    <button class="btn-new" (click)="close()">关闭</button>\n  </div>\n  <!-- <div style="flex:1"></div> -->\n</div>\n</section>'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/dialog/dialog-changepassword/dialog-changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], DialogChangepasswordPage);
    return DialogChangepasswordPage;
}());

//# sourceMappingURL=dialog-changepassword.js.map

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogChangepasswordPageModule", function() { return DialogChangepasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_changepassword__ = __webpack_require__(1539);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DialogChangepasswordPageModule = /** @class */ (function () {
    function DialogChangepasswordPageModule() {
    }
    DialogChangepasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dialog_changepassword__["a" /* DialogChangepasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dialog_changepassword__["a" /* DialogChangepasswordPage */]),
            ],
        })
    ], DialogChangepasswordPageModule);
    return DialogChangepasswordPageModule;
}());

//# sourceMappingURL=dialog-changepassword.module.js.map

/***/ })

});
//# sourceMappingURL=98.js.map