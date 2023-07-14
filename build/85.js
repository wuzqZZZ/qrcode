webpackJsonp([85],{

/***/ 1616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmpjProjectinfoPage; });
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
 * Generated class for the lmpjProjectinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmpjProjectinfoPage = /** @class */ (function () {
    function LmpjProjectinfoPage(events, storage, navCtrl, toastCtrl, navParams, httpService, workflow, tools, phoneDevice) {
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
            { 'name': '项目名称', 'index': 'pjname', 'type': 'text', 'disabled': true, "placeholder": '', 'starttoggle': true, 'toggleindex': 'respunitname', 'plantitle': '基本信息' },
            { 'name': '检修机组', 'index': 'unittypename', 'type': 'text', 'disabled': true, "placeholder": '' },
            { 'name': '投产日期', 'index': 'planstarttime', 'type': 'text', 'disabled': true, "placeholder": '' },
            { 'name': '检修等级', 'index': 'overhaullevelname', 'type': 'text', 'disabled': true, "placeholder": '' },
            { 'name': '检修次数', 'index': 'repaircount', 'type': 'customhref', 'disabled': true, "placeholder": '' },
            { 'name': '项目类型', 'index': 'pjtypename', 'type': 'text', 'disabled': true, "placeholder": '' },
            { 'name': '项目负责人', 'index': 'resppersonname', 'type': 'text', 'disabled': true, "placeholder": '' },
            { 'name': '联系电话', 'index': 'resppersonphone', 'type': 'text', 'disabled': true, "placeholder": '' },
            { 'name': '责任部门', 'index': 'respunitname', 'type': 'text', 'disabled': true, 'endtoggle': true, "placeholder": '' },
            { 'name': '计划开始时间', 'index': 'planstarttime', 'type': 'text', 'disabled': true, "placeholder": '', 'starttoggle': true, 'toggleindex': 'nearaccount', 'plantitle': '计划与投资' },
            { 'name': '计划结束时间', 'index': 'planendtime', 'type': 'text', 'disabled': true, "placeholder": '' },
            { 'name': '计划工期(天)', 'index': 'planworkhour1', 'type': 'text', 'disabled': true, "placeholder": '' },
            { 'name': '最近检修工期(天)', 'index': 'nearcheckworkhour', 'type': 'text', 'disabled': true, "placeholder": '' },
            { 'name': '施工主线专业', 'index': 'specialtyname', 'type': 'text', 'disabled': true, "placeholder": '' },
            { 'name': '策划完成时间', 'index': 'planendtime', 'type': 'text', 'disabled': true, "placeholder": '' },
            { 'name': '策划工期(天)', 'index': 'planworkhour', 'type': 'text', 'disabled': true, "placeholder": '' },
            { 'name': '上次策划工期(天)', 'index': 'lastplanworkhour', 'type': 'text', 'disabled': true, "placeholder": '' },
            { 'name': '计划年度', 'index': 'planyear', 'type': 'text', 'disabled': true, "placeholder": '' },
            { 'name': '跨年度?', 'index': 'crossyear', 'type': 'text', 'disabled': true, "placeholder": '' },
            { 'name': '当年投资(万元)', 'index': 'plantotalinvest', 'type': 'text', 'disabled': true, "placeholder": '' },
            { 'name': '下年投资(万元)', 'index': 'plantotalinvest', 'type': 'text', 'disabled': true, "placeholder": '' },
            { 'name': '计划总投资(万元)', 'index': 'plantotalinvest', 'type': 'text', 'disabled': true, "placeholder": '' },
            { 'name': '平均总投资(万元)', 'index': 'avgaccount', 'type': 'text', 'disabled': true, "placeholder": '' },
            { 'name': '最近总投资(万元)', 'index': 'nearaccount', 'type': 'text', 'disabled': true, "placeholder": '', 'endtoggle': true },
            { 'name': '项目主要内容', 'index': 'mancontent', 'type': 'textarea', 'disabled': true, "placeholder": '', 'starttoggle': true, 'toggleindex': 'remark', 'plantitle': '项目内容' },
            { 'name': '立项资料', 'index': 'filename', 'type': 'uploadify', 'placeholder': '', 'busstype': 'lmpjProject' },
            { 'name': '检修原则', 'index': 'expectedresults', 'type': 'textarea', 'disabled': true, "placeholder": '' },
            { 'name': '检修政策', 'index': 'constructionplan', 'type': 'textarea', 'disabled': true, "placeholder": '' },
            { 'name': '备注', 'index': 'remark', 'type': 'textarea', 'disabled': true, "placeholder": '' },
        ];
        this.forminfo = {};
        this.tasklist = [];
        this.tasklistlength = 0;
        this.grouplist = [];
        this.grouplistlength = 0;
        this.id = '';
        this.wfstatusname = '';
        // public btnhide = false;
        this.pageControl = {};
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
        this.id = this.navParams.get('id');
        this.initinfo();
        this.initlmpjProjectTaskList();
        this.initlmpjProjectGroupList();
    }
    LmpjProjectinfoPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad PiinoutinfoPage');
    };
    LmpjProjectinfoPage.prototype.pageElementControl = function (data) {
        this.pageControl = data;
    };
    LmpjProjectinfoPage.prototype.pageElement = function (wfstatus, wfid) {
        return __awaiter(this, void 0, void 0, function () {
            var data, array;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpService.getPageControlElementAnsy("lmpjProject_form", wfstatus, wfid)];
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
    LmpjProjectinfoPage.prototype.initstatus = function (status) {
        var _this = this;
        this.httpService.getDictName("LMPJ_PROJECT_STATUS", status, function (res) {
            if (res !== "") {
                _this.forminfo['wfstatusname'] = res;
            }
        });
    };
    LmpjProjectinfoPage.prototype.initinfo = function () {
        var _this = this;
        var that = this;
        var url = "/query/danger/lmpjProject/findOne?id=" + this.id;
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
                    $('#_repaircount').html('<div  style="width: 100%;text-align: right;    opacity: .4;"><span style="margin-right:8px;">A:' + result.data[0].arepaircount + '</span><span style="margin-right:8px;">B:' + result.data[0].brepaircount + '</span>C:' + result.data[0].crepaircount + '</div>');
                    // var _this = this;
                    _this.httpService.getDictName("IM_DEFECT_ASSETTYPE", result.data[0].unittype, function (res) {
                        if (res !== "") {
                            that.forminfo['unittypename'] = res;
                        }
                    });
                    _this.httpService.getDictName("LMPJ_PROJECT_TYPE", result.data[0].pjtype, function (res) {
                        if (res !== "") {
                            that.forminfo['pjtypename'] = res;
                        }
                    });
                    _this.httpService.getDictName("LMPJ_MAINTENANCE_GRADES", result.data[0].overhaullevel, function (res) {
                        if (res !== "") {
                            that.forminfo['overhaullevelname'] = res;
                        }
                    });
                    _this.httpService.getDictName("BKC_SPECAIL", result.data[0].specialty, function (res) {
                        if (res !== "") {
                            that.forminfo['specialtyname'] = res;
                        }
                    });
                    if (_this.forminfo['planfinishtime'] != null && _this.forminfo['planfinishtime'] != '') {
                        _this.forminfo['planfinishtime'] = new Date(new Date(_this.forminfo['planfinishtime']).getTime() + 8 * 60 * 60 * 1000).toISOString();
                    }
                    if (_this.forminfo['realfinishtime'] != null && _this.forminfo['realfinishtime'] != '') {
                        _this.forminfo['realfinishtime'] = new Date(new Date(_this.forminfo['realfinishtime']).getTime() + 8 * 60 * 60 * 1000).toISOString();
                    }
                    if (_this.forminfo['checktime'] != null && _this.forminfo['checktime'] != '') {
                        _this.forminfo['checktime'] = new Date(new Date(_this.forminfo['checktime']).getTime() + 8 * 60 * 60 * 1000).toISOString();
                    }
                    _this.workflow.workflowcheckAuth(_this.forminfo, 'page-lmpjProjectinfo'); //检查流程  
                }
            }
        });
    };
    LmpjProjectinfoPage.prototype.collapseClick = function (index) {
        $('page-lmpjProjectinfo #collapse' + index).toggle();
        $('page-lmpjProjectinfo .collapse_show_icon' + index).toggle();
        $('page-lmpjProjectinfo .collapse_hide_icon' + index).toggle();
    };
    /**
     * 里程碑节点列表
     */
    LmpjProjectinfoPage.prototype.initlmpjProjectTaskList = function () {
        var _this = this;
        var url = "/lmtagProject/list?milestone=1&sort=code&order=asc&rows=-1&projectid=" + this.id;
        this.httpService.get(url, null, function (res) {
            _this.tasklist = res.rows;
            _this.tasklistlength = res.records;
        });
    };
    /**
     * 相关单位列表
     */
    LmpjProjectinfoPage.prototype.initlmpjProjectGroupList = function () {
        var _this = this;
        var url = "/lmpjProjectGroup/list?projectid=" + this.id;
        this.httpService.get(url, null, function (res) {
            _this.grouplist = res.rows;
            _this.grouplistlength = res.records;
        });
    };
    LmpjProjectinfoPage.prototype.submit = function () {
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
            this.httpService.postform('/lmpjProject/save', 'lmpjProject', this.forminfo, function (res) {
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
    LmpjProjectinfoPage.prototype.workflowStart = function () {
        // this.saveStr = "true";
        this.submit();
        if (this.submit() != undefined && this.submit() != false) {
            if (this.forminfo['wfid'] != "" && this.forminfo['wfid'] != null) {
                this.navCtrl.push('WorkflowroutePage', { 'busstype': 'lmpjProject', 'bussid': this.id, 'wfid': this.forminfo['wfid'] });
            }
            else {
                //发送流程
                this.navCtrl.push('WorkflowstartPage', { 'busstype': 'lmpjProject', 'bussid': this.id });
            }
        }
    };
    LmpjProjectinfoPage.prototype.historyview = function () {
        this.navCtrl.push('HistorylistPage', {
            wfid: this.forminfo['wfid'],
            title: '流程历史',
        });
    };
    LmpjProjectinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmpjProjectinfo',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmpjProject/lmpjProjectinfo/lmpjProjectinfo.html"*/'<!--\n  Generated template for the LmpjProjectinfoinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">检修立项（{{forminfo[\'wfstatusname\']}}）</ion-title>\n    <span class="pull-right navbar-right"  >\n      <span class="pull-right report" (click)="historyview()">历史</span>\n    </span>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="formwarp lmform" style="margin-bottom: 120px;">\n    <div class="wrapper">\n        <mform [formdata]="formdata" code="lmpjProjectinfo"  [formVal] = "forminfo" [id]="projectid" [navCtrl]="navCtrl" ></mform>\n    </div>\n    <div class="container" style="margin-top:10px;margin-bottom:0;padding: 0 10px;">\n      <div class="header_folder" (click)="collapseClick(4)">\n        <div class="header__title myclass">里程碑节点</div>\n        <div class="header__icon">\n          <span class="collapse_hide_icon4" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n          <span class="collapse_show_icon4"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n        </div>\n      </div>\n      <div class="content_folder" id="collapse4">\n        <div class="folder-content" style="border-top:none;">\n          <div class="folder-content__inner ">\n          <div class="nolist" *ngIf=\'tasklistlength == 0\'>暂无数据</div>\n          <div *ngIf=\'tasklistlength > 0\'>\n            <div class="itemlist"  style="border-bottom:1px solid #dcdcdc;">\n              <div class="pull-left wp10">序号</div>\n              <div class="pull-left wp70">检修任务</div>\n              <div class="pull-left wp20">执行状态</div>\n            </div>\n            <div class="itemlist"  style="border-bottom:1px solid #dcdcdc;"*ngFor="let asset of tasklist;let i = index;">\n              <div class="pull-left wp10">{{i+1}}</div>\n              <div class="pull-left wp70">{{asset.projectname}}</div>\n              <div class="pull-left wp20">{{asset.projectstatusname}}</div>\n            </div>\n          </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="container" style="margin-top:10px;margin-bottom:0;padding: 0 10px;">\n      <div class="header_folder" (click)="collapseClick(5)">\n        <div class="header__title myclass">相关单位</div>\n        <div class="header__icon">\n          <span class="collapse_hide_icon5" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n          <span class="collapse_show_icon5"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n        </div>\n      </div>\n      <div class="content_folder" id="collapse5">\n        <div class="folder-content" style="border-top:none;">\n          <div class="folder-content__inner ">\n          <div class="nolist" *ngIf=\'grouplistlength == 0\'>暂无数据</div>\n          <div *ngIf=\'grouplistlength > 0\'>\n            <div class="itemlist"  style="border-bottom:1px solid #dcdcdc;">\n              <div class="pull-left wp10">序号</div>\n              <div class="pull-left wp70">单位名称</div>\n              <div class="pull-left wp20">单位职责</div>\n            </div>\n            <div class="itemlist"  style="border-bottom:1px solid #dcdcdc;"*ngFor="let asset of grouplist;let i = index;">\n              <div class="pull-left wp10">{{i+1}}</div>\n              <div class="pull-left wp70">{{asset.companyname}}</div>\n              <div class="pull-left wp20">{{asset.responname}}</div>\n            </div>\n          </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n<ion-footer id="ionFooter" *ngIf="!btnhide">\n  <ion-toolbar>\n    <p style="widows: 100%;">\n      <button id="workflowStart"  (click)="workflowStart()" ion-button icon-start round style="width: 45%;position: absolute;">\n        <ion-icon name=\'send\'></ion-icon>\n       发送\n      </button>\n      <button id="saveBtn" ion-button outline icon-start round style="margin-left:50%;width:45%;" (click)="submit()">\n        <ion-icon name=\'create\' is-active="false" ></ion-icon>\n        保存\n      </button>\n    </p>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmpjProject/lmpjProjectinfo/lmpjProjectinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_workflow_service__["a" /* WorkflowServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__["a" /* PhoneDeviceProvider */]])
    ], LmpjProjectinfoPage);
    return LmpjProjectinfoPage;
}());

//# sourceMappingURL=lmpjProjectinfo.js.map

/***/ }),

/***/ 989:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmpjProjectinfoPageModule", function() { return LmpjProjectinfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmpjProjectinfo__ = __webpack_require__(1616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LmpjProjectinfoPageModule = /** @class */ (function () {
    function LmpjProjectinfoPageModule() {
    }
    LmpjProjectinfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmpjProjectinfo__["a" /* LmpjProjectinfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmpjProjectinfo__["a" /* LmpjProjectinfoPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], LmpjProjectinfoPageModule);
    return LmpjProjectinfoPageModule;
}());

//# sourceMappingURL=lmpjProjectinfo.module.js.map

/***/ })

});
//# sourceMappingURL=85.js.map