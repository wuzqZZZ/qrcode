webpackJsonp([35],{

/***/ 1589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_Utils__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AnnexPage = /** @class */ (function () {
    function AnnexPage(navCtrl, navParams, storage, transfer, httpServices, photoView) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.transfer = transfer;
        this.httpServices = httpServices;
        this.photoView = photoView;
        this.ImdefectList = [];
        this.imageurllist = [];
        this.progressBar = 0;
        this.onProcess = 0;
    }
    AnnexPage.prototype.ionViewDidLeave = function () {
        var completeItem = [];
        if (this.ImdefectList != null) {
            for (var i = 0; i < this.ImdefectList.length; i++) {
                if (this.ImdefectList[i]['num'] == this.ImdefectList[i]['imageurllist'].length) {
                    completeItem.push(i);
                }
            }
            for (var i = 0; i < completeItem.length; i++) {
                this.ImdefectList.splice(completeItem[i], 1);
            }
            this.storage.set(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].Me_IMDEFECTIMG, this.ImdefectList);
        }
    };
    AnnexPage.prototype.ionViewWillEnter = function () {
        this.ImdefectList = this.storage.get(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].Me_IMDEFECTIMG);
        if (this.ImdefectList != null) {
            console.log(this.ImdefectList);
            this.imageurllist = this.ImdefectList[0]['imageurllist'];
            this.isoffwifi = this.storage.get(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].ISOFFWIFILOAD);
            console.log(this.isoffwifi);
        }
    };
    AnnexPage.prototype.uploadify = function (busstype, bussid, imageData, callback) {
        var fileTransfer = this.transfer.create();
        var api = '/uploadify/upload?busstype=' + busstype + "&bussid=" + bussid;
        api = __WEBPACK_IMPORTED_MODULE_4__providers_Utils__["a" /* Utils */].dealUrl(api);
        var filename = __WEBPACK_IMPORTED_MODULE_4__providers_Utils__["a" /* Utils */].dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss');
        var options = {
            fileKey: 'file',
            fileName: filename + '.jpg',
            mimeType: 'image/jpeg',
            httpMethod: "POST",
        };
        fileTransfer.onProgress(function (progressEvent) {
            if (progressEvent.lengthComputable) {
                imageData['progressBar'] = progressEvent.loaded / progressEvent.total * 10;
            }
        });
        fileTransfer.upload(imageData['url'], encodeURI(api), options).then(function (result) {
            callback(result);
        });
    };
    AnnexPage.prototype.upload = function (item) {
        var _this = this;
        for (var i = 0; i < item['imageurllist'].length; i++) {
            if (item['imageurllist']) {
                if (this.onProcess < item['imageurllist'].length) {
                    this.uploadify('imDefect', item['imdefectid'], item['imageurllist'][i], function (res) {
                        console.log(_this.ImdefectList);
                        _this.storage.set(__WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */].Me_IMDEFECTIMG, _this.ImdefectList);
                    });
                }
            }
        }
    };
    AnnexPage.prototype.showBigimg = function (url) {
        this.photoView.show(url);
    };
    AnnexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-annex',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/me/annex/annex.html"*/'<!--\n  Generated template for the AnnexPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">待上传附件</ion-title>\n  </ion-navbar>\n  <div class="choose-button">选择</div>\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="ImdefectList==null || ImdefectList==underfined || ImdefectList== \'\' " class="pitaskimg">\n    <img src="assets/imgs/application/pitaskpage/nullstatus.png" alt="">\n    <span>暂无待上传附件</span>\n  </div>\n  <!-- <div class="content-box">\n    <img src="" alt="" style="height:64px;width:64px;">\n    <div class="content">\n        <div>故障编号：</div>\n        <div style="color:#666666">故障名称：</div>\n        <div style="color:#666666">某某故障：</div>\n    </div>\n    <img src="" alt="" style="height:26px;width:26px;position: absolute;top: 34px;right: 14px;">\n    <div class="upload-button">上传</div>\n    <div class="round-circle"></div>\n  </div> -->\n</ion-content>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/me/annex/annex.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__["a" /* PhotoViewer */]])
    ], AnnexPage);
    return AnnexPage;
}());

//# sourceMappingURL=annex.js.map

/***/ }),

/***/ 964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnexPageModule", function() { return AnnexPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__annex__ = __webpack_require__(1589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AnnexPageModule = /** @class */ (function () {
    function AnnexPageModule() {
    }
    AnnexPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__annex__["a" /* AnnexPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__annex__["a" /* AnnexPage */]),
            ],
        })
    ], AnnexPageModule);
    return AnnexPageModule;
}());

//# sourceMappingURL=annex.module.js.map

/***/ })

});
//# sourceMappingURL=35.js.map