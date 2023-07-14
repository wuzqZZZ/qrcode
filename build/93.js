webpackJsonp([93],{

/***/ 1543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExceleditorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__ = __webpack_require__(106);
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
 * Generated class for the ExceleditorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExceleditorPage = /** @class */ (function () {
    function ExceleditorPage(navCtrl, navParams, httpService, phoneDevice, events, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.phoneDevice = phoneDevice;
        this.events = events;
        this.toastCtrl = toastCtrl;
        // 默认自动保存间隔
        this.defaultAutoSaveInterval = 1000 * 30;
        // 空模版配置
        this.defaultOption = {
            container: 'luckysheet',
            lang: 'zh',
            "row": 5,
            "column": 5,
            "defaultRowHeight": 32,
            "defaultColWidth": 78,
            data: [{ "name": "Sheet1" }]
        };
        // 移动端纯净配置,只保留表格内容
        this.cleanLuckySheelOption = {
            sheetFormulaBar: false,
            showstatisticBar: false,
            showsheetbar: false,
            enableAddBackTop: false,
            showinfobar: false,
            showstatisticBarConfig: {
                zoom: true,
            },
            rowHeaderWidth: 0,
            columnHeaderHeight: 0,
            showtoolbar: false
        };
        this.isLoadEmptyTemplate = false;
        // this.phoneDevice.phoneBacktoPop(this.navCtrl);
        this.options = this.navParams.get('options');
        console.log("constructor  this.options => ", this.options);
    }
    ExceleditorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExceleditorPage');
    };
    ExceleditorPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var _a = this.options, jsonStr = _a.jsonStr, autoSaveInterval = _a.autoSaveInterval;
        if (jsonStr) {
            this.jsonObj = JSON.parse(jsonStr.replace(/&nbsp;/g, ' '));
            console.log("ionViewWillEnter  this.jsonObj => ", this.jsonObj);
            console.log(__assign({}, this.jsonObj, this.cleanLuckySheelOption));
            // 读取数据
            window['luckysheet'].create(__assign({}, this.jsonObj, this.cleanLuckySheelOption));
        }
        else {
            this.isLoadEmptyTemplate = true;
            // 加载空模版
            window['luckysheet'].create(__assign({}, this.defaultOption, this.cleanLuckySheelOption));
        }
        // 定时提交
        this.timer = setInterval(function () {
            _this.commitExcelJson();
        }, autoSaveInterval || this.defaultAutoSaveInterval);
    };
    ExceleditorPage.prototype.ionViewWillUnload = function () {
        console.log('ionViewWillUnload ExceleditorPage');
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    ExceleditorPage.prototype.commitExcelJson = function (saveAndBack) {
        if (saveAndBack === void 0) { saveAndBack = false; }
        var saveCallback = this.options.saveCallback;
        var exceldata = window['luckysheet'].toJson().data;
        // 去除没用的数据
        delete exceldata[0].data;
        delete exceldata[0].luckysheet_select_save;
        delete exceldata[0].visibledatacolumn;
        delete exceldata[0].visibledatarow;
        // console.log(`commitExcelJson  exceldata => `, exceldata)
        var emitData;
        if (this.isLoadEmptyTemplate) {
            // 是空模版时，直接返回excel数据
            emitData = exceldata;
        }
        else {
            // 有初始数据，还原原来的配置数据，只改变cell数据
            emitData = __assign({}, this.jsonObj, { data: exceldata });
        }
        // console.log(emitData);
        if (typeof saveCallback == 'function') {
            saveCallback(JSON.stringify(emitData));
        }
        saveAndBack && this.back();
    };
    ExceleditorPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ExceleditorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-exceleditor',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/excel/exceleditor/exceleditor.html"*/'<!--\n  Generated template for the ExceleditorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Excel编辑器</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div id="luckysheet" style="padding:0px;height:100%;width:100%;"></div>\n</ion-content>\n\n<ion-footer id="ionFooter">\n  <ion-toolbar class="dbbutton">\n    <button id="saveBtn" ion-button outline icon-start style="width: 45% !important;\n    margin-left: 10px !important;"round (click)="commitExcelJson(true)">\n      保存\n    </button>\n    <button id="sendBtn" ion-button outline icon-start round style="width: 45% !important;\n    margin-left: 10px !important;" (click)="back()">\n      返回\n    </button>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/excel/exceleditor/exceleditor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__["a" /* PhoneDeviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */]])
    ], ExceleditorPage);
    return ExceleditorPage;
}());

//# sourceMappingURL=exceleditor.js.map

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceleditorPageModule", function() { return ExceleditorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exceleditor__ = __webpack_require__(1543);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExceleditorPageModule = /** @class */ (function () {
    function ExceleditorPageModule() {
    }
    ExceleditorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__exceleditor__["a" /* ExceleditorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exceleditor__["a" /* ExceleditorPage */]),
            ],
        })
    ], ExceleditorPageModule);
    return ExceleditorPageModule;
}());

//# sourceMappingURL=exceleditor.module.js.map

/***/ })

});
//# sourceMappingURL=93.js.map