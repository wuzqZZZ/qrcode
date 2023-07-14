webpackJsonp([40],{

/***/ 1586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmtagworkorderplanbaseinfoPage; });
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the LmtagworkorderplanbaseinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmtagworkorderplanbaseinfoPage = /** @class */ (function () {
    function LmtagworkorderplanbaseinfoPage(events, storage, navCtrl, toastCtrl, navParams, httpService, workflow, platform, tools, phoneDevice) {
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
        this.formdata = [
            { 'name': '检修设备', 'index': 'assetname', 'indexId': 'assetid', 'type': 'chooseasset', 'placeholder': '请选择检修设备' },
            { 'name': '检修时机', 'index': 'checktiming', 'type': 'select', 'dicttype': 'LMTAG_CHECK_TIMING', 'placeholder': '请输入检修时机' },
            { 'name': '项目类型', 'index': 'projecttype', 'type': 'select', 'dicttype': 'LMTAG_PROJECT_PROJECTTYPE', 'placeholder': '请输入项目类型' },
            { 'name': '项目状态', 'index': 'projectstatusname', 'type': 'text', 'placeholder': '请输入项目状态' },
            { 'name': '项目名称', 'index': 'projectname', 'type': 'text', 'placeholder': '请输入项目名称' },
            { 'name': '主要工作内容', 'index': 'projectdesc', 'type': 'textarea', 'placeholder': '请输入工作内容', 'disabled': true, 'autoheight': true },
            { 'name': '项目来源', 'index': 'projectsource', 'type': 'select', 'dicttype': 'LMTAG_PROJECT_SOURCE', 'placeholder': '请输入项目来源' },
            { 'name': '检修类型', 'index': 'checktype', 'type': 'select', 'dicttype': 'LMTAG_CHECK_TYPE', 'placeholder': '请输入检修类型' },
            { 'name': '资金来源', 'index': 'fundsource', 'type': 'select', 'dicttype': 'LMTAG_FUND_SOURCE', 'placeholder': '请输入资金来源' },
            { 'name': '资金序号', 'index': 'fundnum', 'type': 'text', 'placeholder': '请输入资金序号' },
            { 'name': '里程碑？', 'index': 'milestone', 'type': 'customswitch' },
            { 'name': '另附清单？', 'index': 'islist', 'type': 'customswitch' },
            { 'name': '涉及异动？', 'index': 'isvariations', 'type': 'customswitch' },
            { 'name': '进口物资？', 'index': 'isimport', 'type': 'customswitch' },
            { 'name': '需要BD费用口长周期备件？', 'index': 'isbd', 'type': 'customswitch' },
            { 'name': '附件', 'index': 'prjid', 'type': 'uploadify', 'placeholder': '', 'busstype': 'lmtagProject' },
        ];
        this.forminfo = {};
        this.id = '';
        this.type = '';
        this.pageControl = {};
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
        this.id = this.navParams.get('prjid');
        this.type = this.navParams.get('type');
        this.initinfo();
    }
    LmtagworkorderplanbaseinfoPage.prototype.initinfo = function () {
        var _this = this;
        var url = "/lmtagProject/detail/" + this.id;
        this.httpService.get(url, null, function (result) {
            if (result.code == 0) {
                _this.forminfo = result.data;
                _this.pageElement(result.data.wfstatus, result.data.wfid);
                _this.httpService.initAsset(result.data.assetid, _this.forminfo, 'assetname');
                _this.httpService.initUserName(result.data.resperson, 'respersonname', _this.forminfo);
                _this.httpService.initUserName(result.data.permitman, 'permitmanname', _this.forminfo);
                _this.httpService.inittime('planstarttime', _this.forminfo);
                _this.httpService.inittime('planendtime', _this.forminfo);
                _this.httpService.inittime('endtime', _this.forminfo);
                _this.httpService.inittime('edittime', _this.forminfo);
                _this.httpService.inittime('permittime', _this.forminfo);
                _this.httpService.inittime('techtime', _this.forminfo);
                _this.initprojectstatusname(result.data.projectstatus);
            }
        });
    };
    LmtagworkorderplanbaseinfoPage.prototype.pageElementControl = function (data) {
        this.pageControl = data;
    };
    LmtagworkorderplanbaseinfoPage.prototype.pageElement = function (wfstatus, wfid) {
        return __awaiter(this, void 0, void 0, function () {
            var data, array;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpService.getPageControlElementAnsy("lmtagWorkorder_form", wfstatus, wfid)];
                    case 1:
                        data = _a.sent();
                        this.pageElementControl(data);
                        array = this.httpService.pageDate(data);
                        this.formdata = this.httpService.getpagedata(this.formdata, array);
                        return [2 /*return*/];
                }
            });
        });
    };
    LmtagworkorderplanbaseinfoPage.prototype.submit = function () {
        var _this = this;
        this.httpService.initsavetime('planstarttime', this.forminfo);
        this.httpService.initsavetime('planendtime', this.forminfo);
        this.httpService.initsavetime('endtime', this.forminfo);
        this.httpService.initsavetime('edittime', this.forminfo);
        this.httpService.initsavetime('permittime', this.forminfo);
        this.httpService.initsavetime('techtime', this.forminfo);
        console.log(this.forminfo);
        var obj = {
            master: this.forminfo
        };
        this.httpService.post('/lmtag/lmtagProjectService/saveMasterSlave', obj, function (res) {
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
        this.navCtrl.pop();
        this.events.publish('workorderplan:forminfo', this.forminfo);
    };
    LmtagworkorderplanbaseinfoPage.prototype.initprojectstatusname = function (status) {
        var _this = this;
        this.httpService.getDictName("LMTAG_PROJECT_STATUS", status, function (res) {
            if (res !== "") {
                _this.forminfo['projectstatusname'] = res;
            }
        });
    };
    LmtagworkorderplanbaseinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmtagworkorderplanbaseinfo',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagworkorder/lmtagworkorderinfo/components/lmtagworkorderplanbaseinfo/lmtagworkorderplanbaseinfo.html"*/'<!--\n  Generated template for the LmtagworkorderplaninfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">基础信息详细</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="formwarp lmform" style="margin-bottom: 120px;">\n    <div class="wrapper">\n      <form>\n        <mform [formdata]="formdata" code="lmtagWorkorder"  [formVal] = "forminfo" [id]="id" [navCtrl]="navCtrl" ></mform>\n      </form>\n    </div>\n  </div>\n</ion-content>\n<ion-footer id="ionFooter">\n  <ion-toolbar>\n   <div class="newformfooter">\n      <div class="footer-left">\n        <!-- <div (click)="openFilePackagePage()">\n          <img src="assets/imgs/lm/lmhome/filePackage.svg" alt="">\n          <span>检修文件包</span>\n        </div> -->\n        <div>\n          <img src="assets/imgs/lm/lmhome/clear.png" alt="">\n          <span>清除</span>\n        </div>\n      </div>\n      <button class="footer-right" id="saveBtn" ion-button outline icon-start round (click)="submit()">\n        保存\n      </button>\n    </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagworkorder/lmtagworkorderinfo/components/lmtagworkorderplanbaseinfo/lmtagworkorderplanbaseinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_workflow_service__["a" /* WorkflowServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__["a" /* PhoneDeviceProvider */]])
    ], LmtagworkorderplanbaseinfoPage);
    return LmtagworkorderplanbaseinfoPage;
}());

//# sourceMappingURL=lmtagworkorderplanbaseinfo.js.map

/***/ }),

/***/ 961:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmtagworkorderplanbaseinfoPageModule", function() { return LmtagworkorderplanbaseinfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmtagworkorderplanbaseinfo__ = __webpack_require__(1586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LmtagworkorderplanbaseinfoPageModule = /** @class */ (function () {
    function LmtagworkorderplanbaseinfoPageModule() {
    }
    LmtagworkorderplanbaseinfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmtagworkorderplanbaseinfo__["a" /* LmtagworkorderplanbaseinfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmtagworkorderplanbaseinfo__["a" /* LmtagworkorderplanbaseinfoPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], LmtagworkorderplanbaseinfoPageModule);
    return LmtagworkorderplanbaseinfoPageModule;
}());

//# sourceMappingURL=lmtagworkorderplanbaseinfo.module.js.map

/***/ })

});
//# sourceMappingURL=40.js.map