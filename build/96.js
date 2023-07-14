webpackJsonp([96],{

/***/ 1540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogPitaskitemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { PitaskinfoPage } from '../../pi/pitask/pitaskinfo/pitaskinfo';
// import { PiTasklocPage } from '../../../pages/pi/pitask/pi-taskloc/pi-taskloc';
var DialogPitaskitemsPage = /** @class */ (function () {
    function DialogPitaskitemsPage(navParams, view, navCtrl, loadingCtrl, event, toastCtrl) {
        this.navParams = navParams;
        this.view = view;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.event = event;
        this.toastCtrl = toastCtrl;
        this.title = this.navParams.get('title');
        this.errorDescription = this.navParams.get('errorDescription');
        this.isshow = this.navParams.get('isshow');
        this.taskid = this.navParams.get('taskid');
    }
    DialogPitaskitemsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var contentloading = this.loadingCtrl.create({
            content: '请等待...',
        });
        contentloading.present();
        this.event.subscribe('commit', function (item) {
            console.log(item);
            if (item == 'ok') {
                contentloading.dismiss();
                _this.toastCtrl.create({
                    message: '保存成功',
                    duration: 2000,
                }).present();
            }
            else if (item == 'no') {
                contentloading.dismiss();
                _this.toastCtrl.create({
                    message: '保存失败',
                    duration: 2000
                }).present();
            }
            _this.event.unsubscribe('commit');
        });
        this.event.subscribe('navCtrl', function (item) {
            _this.navCtrl = item;
        });
    };
    //关闭modal
    DialogPitaskitemsPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    //返回上一层
    DialogPitaskitemsPage.prototype.backTo = function () {
        this.view.dismiss();
        this.navCtrl.pop();
        // this.navCtrl.push(PiTasklocPage, {
        //   'taskid': this.taskid,
        //   'locid':this.navParams.get('locid')
        // })
        // .then(
        //   ()=>{
        //     this.view.dismiss();
        //   }
        // );
        // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
    };
    DialogPitaskitemsPage.prototype.nextPiasset = function () {
    };
    DialogPitaskitemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dialog-pitaskitems',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/dialog/dialog-pitaskitems/dialog-pitaskitems.html"*/'<!--\n  Generated template for the DialogPitaskitemsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<div >\n  <div class="content"></div>\n  <div class="back">\n    <h6 style="font-weight:bold; padding-left: 20px;">{{title}}</h6>\n    <div class="descript">{{errorDescription}}</div>\n    <div>\n      <button (click)="closeModal()" class="btn-close">取消</button>\n      <button (click)="backTo()" class="btn-back">返回</button>\n    </div>\n  </div>\n  <!-- <div *ngIf="isshow==true" (click)="nextPiasset( )">下一个点巡检设备</div> -->\n</div>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/dialog/dialog-pitaskitems/dialog-pitaskitems.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */]])
    ], DialogPitaskitemsPage);
    return DialogPitaskitemsPage;
}());

//# sourceMappingURL=dialog-pitaskitems.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogPitaskitemsPageModule", function() { return DialogPitaskitemsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_pitaskitems__ = __webpack_require__(1540);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DialogPitaskitemsPageModule = /** @class */ (function () {
    function DialogPitaskitemsPageModule() {
    }
    DialogPitaskitemsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dialog_pitaskitems__["a" /* DialogPitaskitemsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dialog_pitaskitems__["a" /* DialogPitaskitemsPage */]),
            ],
        })
    ], DialogPitaskitemsPageModule);
    return DialogPitaskitemsPageModule;
}());

//# sourceMappingURL=dialog-pitaskitems.module.js.map

/***/ })

});
//# sourceMappingURL=96.js.map