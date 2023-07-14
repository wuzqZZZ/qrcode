webpackJsonp([38],{

/***/ 1587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmtagworkorderqualityinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tools__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_workflow_service__ = __webpack_require__(426);
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
 * Generated class for the LmtagworkorderqualityinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmtagworkorderqualityinfoPage = /** @class */ (function () {
    function LmtagworkorderqualityinfoPage(events, storage, navCtrl, toastCtrl, navParams, httpService, workflow, platform, tools, phoneDevice) {
        this.events = events;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.workflow = workflow;
        this.platform = platform;
        this.tools = tools;
        this.phoneDevice = phoneDevice;
        this.qualitylists = [];
        this.id = '';
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
        this.id = this.navParams.get('qualityid');
        this.initQuality();
    }
    LmtagworkorderqualityinfoPage.prototype.initQuality = function () {
        var _this = this;
        var url = "/lmtagQualityInspection/list3?qualityid=" + this.id + "&sort=workseq&order=asc&_search=false&nd=1682149599768&rows=-1&page=1&sidx=&sord=asc";
        this.httpService.get(url, null, function (result) {
            if (result.rows.length > 0) {
                _this.qualitylists = result.rows;
            }
        });
    };
    LmtagworkorderqualityinfoPage.prototype.handleQualityinspection = function (id) {
        this.navCtrl.push('LmtagqualityinspectioninfoPage', {
            type: 'edit',
            id: id
        });
    };
    LmtagworkorderqualityinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmtagworkorderqualityinfo',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagworkorder/lmtagworkorderinfo/components/lmtagworkorderqualityinfo/lmtagworkorderqualityinfo.html"*/'<!--\n  Generated template for the LmtagworkorderqualityinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">检修质量验收卡</ion-title>\n    <!-- <span class="pull-right navbar-right"  >\n      <span class="pull-right report" (click)="historyview()">历史</span>\n    </span> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="formwarp lmform" style="margin-bottom: 120px;">\n    <div class="wrapper">\n      <form>\n        <div id="qualityAcceptanceCard" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="content_folder" id="collapse1">\n            <div class="box cslist">\n              <ion-item class="cstitle">\n                <ion-note item-start class="tcenter" style="width: 10%;">序号</ion-note>\n                <ion-note item-start class="tcenter" style="width: 15%;">W/H点</ion-note>\n                <ion-note item-start style="flex: 1;">监督点</ion-note>\n                <ion-note item-start class="tcenter" style="width: 20%;">执行结果</ion-note>\n              </ion-item>\n              <div class="csitem" *ngFor="let quaitem of qualitylists; let i = index">\n                <ion-item (click)="handleQualityinspection(quaitem.inspectionid)">\n                  <ion-note item-start class="tcenter" style="width: 10%;">{{ i+1 }}</ion-note>\n                  <ion-note item-start class="tcenter" style="width: 15%;">{{ quaitem?.instypename }}</ion-note>\n                  <ion-note item-start style="flex: 1;"> {{ quaitem?.content }}</ion-note>\n                  <ion-note item-start class="tcenter" style="width: 20%;">{{ quaitem?.conformityname || \'-\' }}</ion-note>\n                </ion-item>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagworkorder/lmtagworkorderinfo/components/lmtagworkorderqualityinfo/lmtagworkorderqualityinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_workflow_service__["a" /* WorkflowServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__["a" /* PhoneDeviceProvider */]])
    ], LmtagworkorderqualityinfoPage);
    return LmtagworkorderqualityinfoPage;
}());

//# sourceMappingURL=lmtagworkorderqualityinfo.js.map

/***/ }),

/***/ 962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmtagworkorderqualityinfoPageModule", function() { return LmtagworkorderqualityinfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmtagworkorderqualityinfo__ = __webpack_require__(1587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LmtagworkorderqualityinfoPageModule = /** @class */ (function () {
    function LmtagworkorderqualityinfoPageModule() {
    }
    LmtagworkorderqualityinfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmtagworkorderqualityinfo__["a" /* LmtagworkorderqualityinfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmtagworkorderqualityinfo__["a" /* LmtagworkorderqualityinfoPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], LmtagworkorderqualityinfoPageModule);
    return LmtagworkorderqualityinfoPageModule;
}());

//# sourceMappingURL=lmtagworkorderqualityinfo.module.js.map

/***/ })

});
//# sourceMappingURL=38.js.map