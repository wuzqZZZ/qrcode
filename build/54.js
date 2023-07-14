webpackJsonp([54],{

/***/ 1577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmtagsitepositioninfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tools__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_Utils__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_workflow_service__ = __webpack_require__(426);
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
 * Generated class for the LmtagsitepositioninfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmtagsitepositioninfoPage = /** @class */ (function () {
    function LmtagsitepositioninfoPage(events, storage, navCtrl, toastCtrl, navParams, httpService, workflow, tools, phoneDevice) {
        this.events = events;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.workflow = workflow;
        this.tools = tools;
        this.phoneDevice = phoneDevice;
        this.formdata = [
            { 'name': '专业', 'index': 'specialty', 'type': 'select', 'dicttype': 'BKC_SPECAIL', "placeholder": '请选择专业', 'starttoggle': true, 'toggleindex': 'filename', 'plantitle': '基本信息' },
            { 'name': '区域', 'index': 'region', 'type': 'text', 'placeholder': '请输入区域' },
            { 'name': '说明', 'index': 'description', 'type': 'textarea', 'placeholder': '请输入说明' },
            { 'name': '附件', 'index': 'filename', 'type': 'uploadify', 'placeholder': '', 'busstype': 'lmtagSitePosition', 'endtoggle': true },
            { 'name': '编制人', 'index': 'editorname', 'indexId': 'editor', 'type': 'selectUser', "placeholder": '请选择编制人', 'starttoggle': true, 'toggleindex': 'uploadtime', 'plantitle': '相关信息', 'linkfield': 'phone' },
            { 'name': '联系电话', 'index': 'phone', 'type': 'text', 'disabled': true, "placeholder": '联系电话' },
            { 'name': '上传人', 'index': 'uploadername', 'indexId': 'uploader', 'type': 'selectUser', "placeholder": '请选择上传人' },
            { 'name': '上传时间', 'index': 'uploadtime', 'type': 'datetime', 'format': 'YYYY-MM-DD HH:mm:ss', "placeholder": '请选择上传时间' }
        ];
        this.forminfo = {};
        this.id = '';
        this.type = '';
        this.wfstatusname = '';
        // public btnhide = false;
        this.pageControl = {};
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
        this.id = this.navParams.get('id');
        this.type = this.navParams.get('type');
        this.initinfo();
    }
    LmtagsitepositioninfoPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad PiinoutinfoPage');
    };
    LmtagsitepositioninfoPage.prototype.initinfo = function () {
        var _this = this;
        var that = this;
        if (this.type == 'edit') {
            var url = "/query/danger/lmtagSitePosition/findOne?id=" + this.id;
            this.httpService.get(url, null, function (result) {
                // console.log(result)
                if (result.code == 0) {
                    if (result.data.length > 0) {
                        _this.forminfo = result.data[0];
                        _this.inituser(result.data[0].editor);
                        _this.httpService.initUserName(result.data[0].editor, 'editorname', _this.forminfo);
                        _this.httpService.initUserName(result.data[0].uploader, 'uploadername', _this.forminfo);
                        if (_this.forminfo['uploadtime'] != null && _this.forminfo['uploadtime'] != '') {
                            _this.forminfo['uploadtime'] = new Date(new Date(_this.forminfo['uploadtime']).getTime() + 8 * 60 * 60 * 1000).toISOString();
                        }
                    }
                }
            });
        }
        else {
            this.id = __WEBPACK_IMPORTED_MODULE_6__providers_Utils__["a" /* Utils */].getUuid(); //id
            this.forminfo = {
                specialty: '',
                description: '',
                standard: '',
                phone: '',
                editor: '',
                uploader: '',
                uploadtime: ''
            };
            var userinfo = this.storage.get(__WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */].ME_USERINFO); //读取登录人的储存信息
            this.forminfo['phone'] = userinfo.phone;
            this.forminfo['editorname'] = userinfo.name;
            this.forminfo['editor'] = userinfo.id;
            this.forminfo['uploader'] = userinfo.id;
            this.forminfo['uploadername'] = userinfo.name;
            this.forminfo['uploadtime'] = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toISOString();
            this.forminfo['projectid'] = this.storage.get(__WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */].LM_PROJECTID);
            this.forminfo['positionid'] = this.id;
        }
    };
    LmtagsitepositioninfoPage.prototype.inituser = function (sigman) {
        var _this = this;
        var url = "/query/pi/piInOut/findUserInfo?sigman=" + sigman;
        this.httpService.get(url, null, function (result) {
            if (result.code == 0) {
                _this.forminfo['phone'] = result.data[0]['phone'];
            }
        });
    };
    LmtagsitepositioninfoPage.prototype.submit = function () {
        var _this = this;
        if (this.forminfo['uploadtime'] != null && this.forminfo['uploadtime'] != '' && this.forminfo['uploadtime'] != undefined) {
            this.forminfo['uploadtime'] = this.forminfo['uploadtime'].replace(/T/, ' ').replace(/Z/, '');
        }
        this.httpService.postform('/lmtagSitePosition/save', 'lmtagSitePosition', this.forminfo, function (res) {
            if (res.code == 0) {
                _this.toastCtrl.create({
                    position: 'bottom',
                    duration: 1500,
                    message: '保存成功',
                }).present();
                _this.type = 'edit';
                _this.initinfo();
            }
            else {
                _this.toastCtrl.create({
                    position: 'bottom',
                    duration: 1500,
                    message: '保存失败',
                }).present();
            }
        });
        return true;
    };
    LmtagsitepositioninfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmtagsitepositioninfo',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagsiteposition/lmtagsitepositioninfo/lmtagsitepositioninfo.html"*/'<!--\n  Generated template for the LmtagsitepositioninfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">现场定置</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="formwarp lmform" style="margin-bottom: 120px;">\n    <div class="wrapper">\n      <form>\n        <mform [formdata]="formdata" code="lmtagSitePosition"  [formVal] = "forminfo" [id]="id" [navCtrl]="navCtrl" ></mform>\n      </form>\n    </div>\n  </div>\n</ion-content>\n<ion-footer id="ionFooter" *ngIf="!btnhide">\n  <ion-toolbar>\n      <button id="saveBtn" ion-button outline icon-start round style="width:100% !important;margin-left: 0 !important;" (click)="submit()">\n        <ion-icon name=\'create\' is-active="false" ></ion-icon>\n        保存\n      </button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagsiteposition/lmtagsitepositioninfo/lmtagsitepositioninfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_workflow_service__["a" /* WorkflowServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__["a" /* PhoneDeviceProvider */]])
    ], LmtagsitepositioninfoPage);
    return LmtagsitepositioninfoPage;
}());

//# sourceMappingURL=lmtagsitepositioninfo.js.map

/***/ }),

/***/ 952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmtagsitepositioninfoPageModule", function() { return LmtagsitepositioninfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmtagsitepositioninfo__ = __webpack_require__(1577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LmtagsitepositioninfoPageModule = /** @class */ (function () {
    function LmtagsitepositioninfoPageModule() {
    }
    LmtagsitepositioninfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmtagsitepositioninfo__["a" /* LmtagsitepositioninfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmtagsitepositioninfo__["a" /* LmtagsitepositioninfoPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], LmtagsitepositioninfoPageModule);
    return LmtagsitepositioninfoPageModule;
}());

//# sourceMappingURL=lmtagsitepositioninfo.module.js.map

/***/ })

});
//# sourceMappingURL=54.js.map