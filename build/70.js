webpackJsonp([70],{

/***/ 1565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmtagfiletechdatarecorddetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_phone_device__ = __webpack_require__(106);
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
 * Generated class for the LmtagfiletechdatarecorddetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmtagfiletechdatarecorddetailPage = /** @class */ (function () {
    function LmtagfiletechdatarecorddetailPage(navCtrl, storage, navParams, httpService, phoneDevice, toastCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.httpService = httpService;
        this.phoneDevice = phoneDevice;
        this.toastCtrl = toastCtrl;
        this.formdata = [
            { 'name': '设备名称', 'index': 'assetname', 'type': 'text', 'placeholder': '请输入设备名称', 'disabled': true },
            { 'name': '附件', 'index': 'imgfile', 'type': 'uploadify', 'placeholder': '', 'busstype': 'lmtagTechData' },
        ];
        this.formdata2 = [
            { 'name': '测量点名称', 'index': 'measurename', 'type': 'text', 'placeholder': '请输入测量点名称', 'disabled': true },
        ];
        this.defaultOption = {
            container: 'luckysheet',
            lang: 'zh',
            showsheetbar: false,
            enableAddBackTop: false,
            showinfobar: false,
            "row": 8,
            "column": 5,
            "defaultRowHeight": 32,
            "defaultColWidth": 78,
            sheetFormulaBar: false,
            showstatisticBar: false,
            showstatisticBarConfig: {
                zoom: true,
            },
            rowHeaderWidth: 0,
            columnHeaderHeight: 0,
            showtoolbar: false,
            defaultFontSize: 12,
            data: [{ "name": "Sheet1" }]
        };
        this.id = '';
        this.forminfo = {};
        this.forminfo2 = {};
        // this.phoneDevice.phoneBacktoPop(this.navCtrl);
        this.id = this.navParams.get('id');
        this.forminfo = this.navParams.get('forminfo');
    }
    LmtagfiletechdatarecorddetailPage.prototype.ionViewWillEnter = function () {
        this.initinfo();
    };
    LmtagfiletechdatarecorddetailPage.prototype.initDomHeight = function () {
        var viewHeight = $('page-lmtagfiletechdatarecorddetail .scroll-content').height();
        var baseDivHeight = $('page-lmtagfiletechdatarecorddetail #baseinfo').height();
        var baseDiv2Height = $('page-lmtagfiletechdatarecorddetail #baseinfo2').height();
        var exceleditorboxHeight = viewHeight - baseDivHeight - baseDiv2Height - 30;
        $('page-lmtagfiletechdatarecorddetail #exceleditorbox').height(exceleditorboxHeight);
    };
    LmtagfiletechdatarecorddetailPage.prototype.initinfo = function () {
        var _this = this;
        var url = "/lmtagTechData/detail/" + this.id;
        this.httpService.get(url, null, function (result) {
            _this.forminfo2 = result.data;
            _this.jsonstr = result.data.tabledata;
            _this.initDomHeight();
            if (_this.jsonstr != '' && _this.jsonstr != null) {
                window['luckysheet'].create(__assign({}, _this.defaultOption, JSON.parse(_this.jsonstr.replace(/&nbsp;/g, ' '))));
            }
            else {
                // 加载空模版
                window['luckysheet'].create(_this.defaultOption);
            }
        });
    };
    LmtagfiletechdatarecorddetailPage.prototype.getExcelJson = function () {
        var exceldata = window['luckysheet'].toJson();
        // 去除没用的数据
        delete exceldata.data[0].data;
        delete exceldata.data[0].luckysheet_select_save;
        delete exceldata.data[0].visibledatacolumn;
        delete exceldata.data[0].visibledatarow;
        return JSON.stringify(exceldata);
    };
    LmtagfiletechdatarecorddetailPage.prototype.submit = function () {
        var _this = this;
        this.forminfo2['tabledata'] = this.getExcelJson();
        var obj = {
            master: this.forminfo2
        };
        this.httpService.post('/lmtag/lmtagTechDataService/saveMasterSlave', obj, function (res) {
            if (res.code == 0) {
                _this.initinfo();
                _this.toastCtrl.create({
                    position: 'bottom',
                    duration: 1500,
                    message: '保存成功',
                }).present();
            }
            else {
                _this.toastCtrl.create({
                    position: 'bottom',
                    duration: 1500,
                    message: '保存失败',
                }).present();
            }
        });
    };
    LmtagfiletechdatarecorddetailPage.prototype.workflowStart = function () {
        var _this = this;
        this.forminfo2['tabledata'] = this.getExcelJson();
        var obj = {
            master: this.forminfo2
        };
        this.httpService.post('/lmtag/lmtagTechDataService/saveMasterSlave', obj, function (res) {
            if (res.code == 0) {
                // this.initinfo();
                _this.toastCtrl.create({
                    position: 'bottom',
                    duration: 1500,
                    message: '保存成功',
                }).present();
                _this.navCtrl.pop();
            }
            else {
                _this.toastCtrl.create({
                    position: 'bottom',
                    duration: 1500,
                    message: '保存失败',
                }).present();
            }
        });
    };
    LmtagfiletechdatarecorddetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmtagfiletechdatarecorddetail',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagfile/lmtagfiletechdatarecord/lmtagfiletechdatarecorddetail/lmtagfiletechdatarecorddetail.html"*/'<!--\n  Generated template for the LmtagfiletechdatarecorddetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">技术数据记录详情</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <div class="formwarp lmform" style="">\n    <div class="wrapper">\n      <form>\n        <div id="baseinfo" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="content_folder" id="collapse1">\n            <div class="box">\n              <mform [formdata]="formdata" code="lmtagTechData" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl" (chooseFromChild)="chooseitem($event)"></mform>\n            </div>\n          </div>\n        </div>\n        <div id="" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="content_folder" id="collapse1">\n            <div id="baseinfo2" class="box">\n              <mform [formdata]="formdata2" code="lmtagTechData" [formVal] = "forminfo2" [id]="id" indexId=\'true\' [navCtrl]="navCtrl" (chooseFromChild)="chooseitem($event)"></mform>\n            </div>\n            <div id="exceleditorbox" class="box" style="height: 38rem;width: 100%;padding: 0;background-color: white;">\n              <!-- <excel-editor id="exceleditor" [jsonStr]="jsonstr"></excel-editor> -->\n              <div id="luckysheet" style="margin:0px;padding:0px;height:100%;width:100%;"></div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer id="ionFooter" *ngIf="!btnhide">\n  <ion-toolbar>\n    <div class="newformfooter">\n      <div class="footer-left">\n        <!-- <div (click)="submit()">\n          <img src="assets/imgs/lm/lmhome/saveform.svg" alt="">\n          <span>保存</span>\n        </div> -->\n        <div (click)="submit()">\n          <img src="assets/imgs/lm/lmhome/saveform.svg" alt="">\n          <span>保存</span>\n        </div>\n      </div>\n      <button class="footer-right" id="saveBtn" ion-button outline icon-start round (click)="workflowStart()">\n        保存并确认\n      </button>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagfile/lmtagfiletechdatarecord/lmtagfiletechdatarecorddetail/lmtagfiletechdatarecorddetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_phone_device__["a" /* PhoneDeviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */]])
    ], LmtagfiletechdatarecorddetailPage);
    return LmtagfiletechdatarecorddetailPage;
}());

//# sourceMappingURL=lmtagfiletechdatarecorddetail.js.map

/***/ }),

/***/ 940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmtagfiletechdatarecorddetailPageModule", function() { return LmtagfiletechdatarecorddetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmtagfiletechdatarecorddetail__ = __webpack_require__(1565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LmtagfiletechdatarecorddetailPageModule = /** @class */ (function () {
    function LmtagfiletechdatarecorddetailPageModule() {
    }
    LmtagfiletechdatarecorddetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmtagfiletechdatarecorddetail__["a" /* LmtagfiletechdatarecorddetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmtagfiletechdatarecorddetail__["a" /* LmtagfiletechdatarecorddetailPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], LmtagfiletechdatarecorddetailPageModule);
    return LmtagfiletechdatarecorddetailPageModule;
}());

//# sourceMappingURL=lmtagfiletechdatarecorddetail.module.js.map

/***/ })

});
//# sourceMappingURL=70.js.map