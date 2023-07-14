webpackJsonp([87],{

/***/ 1553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmpjMeetinginfoPage; });
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
 * Generated class for the lmpjMeetinginfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmpjMeetinginfoPage = /** @class */ (function () {
    function LmpjMeetinginfoPage(events, storage, navCtrl, toastCtrl, navParams, httpService, workflow, tools, phoneDevice) {
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
            { 'name': '会议名称', 'index': 'meetname', 'type': 'text', 'disabled': true, "placeholder": '', 'starttoggle': true, 'toggleindex': 'respunitname', 'plantitle': '会议信息' },
            { 'name': '会议时间', 'index': 'meettime', 'type': 'text', 'disabled': true, "placeholder": '' },
            { 'name': '会议类型', 'index': 'meettypename', 'type': 'text', 'disabled': true, "placeholder": '' },
            { 'name': '与会人员', 'index': 'meetperson', 'indexId': 'meetperson', 'type': 'choosemore', 'indexnum': 'meetpersonlength', 'arrayindex': 'userlist', 'span': true, 'placeholder': '请选择成员' },
            { 'name': '主要决议', 'index': 'description', 'type': 'textarea', "placeholder": '' },
            { 'name': '立项资料', 'index': 'filename', 'type': 'uploadify', 'placeholder': '', 'busstype': 'lmpjMeeting' },
        ];
        this.forminfo = {};
        this.tasklist = [];
        this.grouplist = [];
        this.id = '';
        this.wfstatusname = '';
        // public btnhide = false;
        this.pageControl = {};
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
        this.id = this.navParams.get('id');
        this.initinfo();
    }
    LmpjMeetinginfoPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad PiinoutinfoPage');
    };
    LmpjMeetinginfoPage.prototype.pageElementControl = function (data) {
        this.pageControl = data;
    };
    LmpjMeetinginfoPage.prototype.pageElement = function (wfstatus, wfid) {
        return __awaiter(this, void 0, void 0, function () {
            var data, array;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpService.getPageControlElementAnsy("lmpjMeeting_form", wfstatus, wfid)];
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
    LmpjMeetinginfoPage.prototype.chooseitem = function (item) {
        if (item.index == 'meetperson') {
            this.navCtrl.push('UserdialogPage', {
                typeid: '',
                type: 'multiple',
                typename: item.index,
            });
            this.events.subscribe('user:userinfo', function (data, time) {
                console.log(data);
            });
        }
    };
    LmpjMeetinginfoPage.prototype.initstatus = function (status) {
        var _this = this;
        this.httpService.getDictName("LMPJ_PROJECT_STATUS", status, function (res) {
            if (res !== "") {
                _this.forminfo['wfstatusname'] = res;
            }
        });
    };
    LmpjMeetinginfoPage.prototype.initinfo = function () {
        var _this = this;
        var that = this;
        var url = "/query/danger/lmpjMeeting/findOne?id=" + this.id;
        this.httpService.get(url, null, function (result) {
            console.log(result);
            if (result.code == 0) {
                if (result.data.length > 0) {
                    _this.forminfo = result.data[0];
                    _this.pageElement(result.data[0].wfstatus, result.data[0].wfid);
                    // this.inituser(result.data[0].sigman);
                    // this.initlocation(result.data[0].location);
                    _this.initstatus(result.data[0].wfstatus);
                    _this.httpService.initDeptName(result.data[0].respunit, 'respunitname', _this.forminfo);
                    _this.httpService.initUserName(result.data[0].respperson, 'resppersonname', _this.forminfo);
                    _this.httpService.initUserName(result.data[0].checkperson, 'checkpersonname', _this.forminfo);
                    // var _this = this;
                    _this.httpService.getDictName("LMPJ_MEET_TYPE", result.data[0].meettype, function (res) {
                        if (res !== "") {
                            that.forminfo['meettypename'] = res;
                        }
                    });
                    if (_this.forminfo['planfinishtime'] != null && _this.forminfo['planfinishtime'] != '') {
                        _this.forminfo['planfinishtime'] = new Date(new Date(_this.forminfo['planfinishtime']).getTime() + 8 * 60 * 60 * 1000).toISOString();
                    }
                    _this.workflow.workflowcheckAuth(_this.forminfo, 'page-lmpjMeetinginfo'); //检查流程  
                }
            }
        });
    };
    LmpjMeetinginfoPage.prototype.submit = function () {
        var _this = this;
        if (this.tools.initform(this.formdata, this.forminfo)) {
            if (this.forminfo['planfinishtime'] != null && this.forminfo['planfinishtime'] != '' && this.forminfo['planfinishtime'] != undefined) {
                this.forminfo['planfinishtime'] = this.forminfo['planfinishtime'].replace(/T/, ' ').replace(/Z/, '');
            }
            if (this.forminfo['realfinishtime'] != null && this.forminfo['realfinishtime'] != '' && this.forminfo['realfinishtime'] != undefined) {
                this.forminfo['realfinishtime'] = this.forminfo['realfinishtime'].replace(/T/, ' ').replace(/Z/, '');
            }
            if (this.forminfo['checktime'] != null && this.forminfo['checktime'] != '' && this.forminfo['checktime'] != undefined) {
                this.forminfo['checktime'] = this.forminfo['checktime'].replace(/T/, ' ').replace(/Z/, '');
            }
            this.httpService.postform('/lmpjMeeting/save', 'lmpjMeeting', this.forminfo, function (res) {
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
            return true;
        }
        else {
            return false;
        }
    };
    LmpjMeetinginfoPage.prototype.workflowStart = function () {
        // this.saveStr = "true";
        this.submit();
        if (this.submit() != undefined && this.submit() != false) {
            if (this.forminfo['wfid'] != "" && this.forminfo['wfid'] != null) {
                this.navCtrl.push('WorkflowroutePage', { 'busstype': 'lmpjMeeting', 'bussid': this.id, 'wfid': this.forminfo['wfid'] });
            }
            else {
                //发送流程
                this.navCtrl.push('WorkflowstartPage', { 'busstype': 'lmpjMeeting', 'bussid': this.id });
            }
        }
    };
    LmpjMeetinginfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmpjMeetinginfo',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmpjMeeting/lmpjMeetinginfo/lmpjMeetinginfo.html"*/'<!--\n  Generated template for the LmpjMeetingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">会议纪要</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="formwarp lmform" style="margin-bottom: 120px;">\n    <div class="wrapper">\n      <form>\n        <mform [formdata]="formdata" code="lmpjMeetinginfo"  [formVal] = "forminfo" [id]="id" [navCtrl]="navCtrl" (chooseFromChild)="chooseitem($event)"></mform>\n        \n\n      </form>\n    </div>\n\n  </div>\n</ion-content>\n<ion-footer id="ionFooter" *ngIf="!btnhide">\n  <ion-toolbar>\n      <button id="saveBtn" ion-button outline icon-start round style="width:100% !important;margin-left: 0 !important;" (click)="submit()">\n        <ion-icon name=\'create\' is-active="false" ></ion-icon>\n        保存\n      </button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmpjMeeting/lmpjMeetinginfo/lmpjMeetinginfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_workflow_service__["a" /* WorkflowServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__["a" /* PhoneDeviceProvider */]])
    ], LmpjMeetinginfoPage);
    return LmpjMeetinginfoPage;
}());

//# sourceMappingURL=lmpjMeetinginfo.js.map

/***/ }),

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmpjMeetinginfoPageModule", function() { return LmpjMeetinginfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmpjMeetinginfo__ = __webpack_require__(1553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LmpjMeetinginfoPageModule = /** @class */ (function () {
    function LmpjMeetinginfoPageModule() {
    }
    LmpjMeetinginfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmpjMeetinginfo__["a" /* LmpjMeetinginfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmpjMeetinginfo__["a" /* LmpjMeetinginfoPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], LmpjMeetinginfoPageModule);
    return LmpjMeetinginfoPageModule;
}());

//# sourceMappingURL=lmpjMeetinginfo.module.js.map

/***/ })

});
//# sourceMappingURL=87.js.map