webpackJsonp([94],{

/***/ 1542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditApplicationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditApplicationPage = /** @class */ (function () {
    function EditApplicationPage(navCtrl, navParams, storage, events, dragula) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.events = events;
        this.dragula = dragula;
        this.appAuthority = [];
        this.allApplication = [];
        this.addApplication = [];
        this.subs = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subscription"]();
    }
    EditApplicationPage.prototype.ngOnDestroy = function () {
        // destroy all the subscriptions at once
        this.subs.unsubscribe();
    };
    EditApplicationPage.prototype.ionViewWillEnter = function () {
        this.appAuthority = this.storage.get(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].HOME_APPAUTHORITY);
        console.log(this.appAuthority);
        this.allApplication = this.storage.get(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].ALLAPPLICATION);
        console.log(this.allApplication);
        for (var i = 0; i < this.allApplication.length; i++) {
            // let obj={};
            var flag = 0;
            for (var j = 0; j < this.appAuthority.length; j++) {
                if (this.allApplication[i].code != this.appAuthority[j].code) {
                    flag = flag + 1;
                    if (flag == this.appAuthority.length) {
                        this.addApplication.push(this.allApplication[i]);
                    }
                }
            }
        }
    };
    EditApplicationPage.prototype.keepApplication = function () {
        this.storage.set(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].HOME_APPAUTHORITY, this.appAuthority);
        this.navCtrl.pop();
    };
    EditApplicationPage.prototype.addHomeApplication = function (item, index) {
        console.log(index);
        this.addApplication.splice(index, 1);
        this.appAuthority.push(item);
    };
    EditApplicationPage.prototype.deleteApplication = function (item, index) {
        this.appAuthority.splice(index, 1);
        this.addApplication.push(item);
    };
    EditApplicationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-application',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/edit-application/edit-application.html"*/'\n<ion-header>\n    <ion-navbar class="mytoolbar">\n      <ion-title class="cptitle">管理我的应用</ion-title>\n      <div (click)="keepApplication()" style="    position: relative;\n      top: 12px;color:white;background:#0099ff;width: 60px;text-align: center;font-size: 16px;height: 30px;line-height: 30px;float: right;border-radius: 3px;">\n        完成\n      </div>\n    </ion-navbar> \n  </ion-header>\n\n\n<ion-content>\n    <section class="header" style="font-size: 16px; background:white;padding-top: 10px;padding-bottom: 10px;">\n      <div style="text-align: center">你可以将常用应用添加到app首页,</div>\n      <div style="text-align: center">也可以按住拖动调整应用顺序</div>\n    </section>\n    <nav class="applicationappnav" >\n        <div class="appnav">\n          <div class="appnavtitle">我的应用</div>\n        </div>\n          <ion-grid>\n            <ion-row  >\n              <ion-col col-12 dragula="bag" [(dragulaModel)]="appAuthority">\n                  <span *ngFor="let item of appAuthority ,let i = index">\n                    <h2 style="font-size: 13px;\n                    font-weight: 300;\n                    text-align: center;width: 100%;\n    position: relative;\n    margin: 0;\n    line-height: 30px;\n                    "><img src="{{item.src}}" alt="" style="    position: absolute;\n                    left: 0;\n                    top: 0;width: 28px;height: 28px;">{{item.title}}<ion-icon name="add-circle" \n                      (click)="deleteApplication(item,i)"\n                      style="color: #dedede;transform:rotate(45deg);float: right;position: absolute;right: 10px;"></ion-icon></h2>\n                  </span>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n      </nav>\n      <div style="width: 100%;text-align: center"> 以上应用展示在首页（最多7个）</div>\n      <nav class="applicationappnav">\n          <div class="appnav">\n              <div class="appnavtitle">可添加应用</div>\n            </div>\n            <ion-grid>\n                <ion-row  >\n                  <ion-col col-12 dragula="bag" [(dragulaModel)]="addApplication">\n                      <span *ngFor="let item of addApplication ,let i = index" >\n                        <h2 style="font-size: 13px;\n                        font-weight: 300;\n                        text-align: center;\n                        width: 100%;\n    position: relative;\n    margin: 0;\n    line-height: 30px;"><img src="{{item.src}}" alt="" style=" position: absolute;\n                        left: 0;\n                        top: 0;width: 28px;height: 28px">{{item.title}}<ion-icon name="ios-add-circle-outline" \n                          (click)="addHomeApplication(item,i)"\n                          style="color: #0099ff;float: right;position: absolute;right: 10px;"></ion-icon></h2>\n                      </span>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n      </nav>\n</ion-content>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/edit-application/edit-application.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_dragula__["b" /* DragulaService */]])
    ], EditApplicationPage);
    return EditApplicationPage;
}());

//# sourceMappingURL=edit-application.js.map

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditApplicationPageModule", function() { return EditApplicationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_application__ = __webpack_require__(1542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula__ = __webpack_require__(430);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditApplicationPageModule = /** @class */ (function () {
    function EditApplicationPageModule() {
    }
    EditApplicationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_application__["a" /* EditApplicationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ng2_dragula__["a" /* DragulaModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_application__["a" /* EditApplicationPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3_ng2_dragula__["b" /* DragulaService */]]
        })
    ], EditApplicationPageModule);
    return EditApplicationPageModule;
}());

//# sourceMappingURL=edit-application.module.js.map

/***/ })

});
//# sourceMappingURL=94.js.map