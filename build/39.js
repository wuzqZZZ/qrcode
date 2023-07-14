webpackJsonp([39],{

/***/ 1587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmtagworkorderplaninfoPage; });
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
 * Generated class for the LmtagworkorderplaninfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmtagworkorderplaninfoPage = /** @class */ (function () {
    function LmtagworkorderplaninfoPage(events, storage, navCtrl, toastCtrl, navParams, httpService, workflow, platform, tools, phoneDevice) {
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
            { 'name': '计划开工日期', 'index': 'planstarttime', 'type': 'datetime', 'format': 'YYYY-MM-DD hh:mm:ss', "placeholder": '请选择计划开工日期' },
            { 'name': '计划完工日期', 'index': 'planendtime', 'type': 'datetime', 'format': 'YYYY-MM-DD hh:mm:ss', "placeholder": '请选择计划完工日期' },
            { 'name': '计划工期(天)', 'index': 'planworkhour', 'type': 'text', 'placeholder': '请输入计划工期天数' },
            { 'name': '计划状态', 'index': 'planstatus', 'type': 'select', 'dicttype': 'LMTAG_PROJECT_PLANSTATUS', 'placeholder': '请输入计划状态' },
            // {'name':'计划工时(人日)','index':'planworkhour','type':'text','placeholder':'请输入计划工时'},
            { 'name': '检修专业', 'index': 'specialty', 'type': 'select', 'dicttype': 'BKC_SPECAIL', "placeholder": '请选择检修专业' },
            // { 'name': '项目负责人', 'index': 'helpdirectorname', 'indexId': 'helpdirectorid', 'type': 'selectUser', "placeholder": '请选择项目负责人' },
            { 'name': '工作负责人', 'index': 'respersonname', 'indexId': 'resperson', 'type': 'selectUser', "placeholder": '请选择工作负责人' },
            { 'name': '配合人', 'index': 'cooperatepersonname', 'indexId': 'cooperateperson', 'type': 'selectUser', "placeholder": '请选择配合人' },
            { 'name': '配合专业', 'index': 'cooperatespecialty', 'type': 'select', 'dicttype': 'BKC_SPECAIL', 'placeholder': '请选择配合专业' },
            { 'name': '技术监督专业', 'index': 'techspecialty', 'type': 'select', 'dicttype': 'BKC_SPECAIL', 'placeholder': '请选择技术监督专业' },
            { 'name': '合同编号', 'index': 'contractcode', 'type': 'text', 'placeholder': '请输入合同编号' },
            { 'name': '合同名称', 'index': 'contractname', 'type': 'text', 'placeholder': '请输入合同名称' },
            { 'name': '试验项目', 'index': 'testproject', 'type': 'select', 'dicttype': 'LMTAG_PROJECT_TESTPROJECT', 'placeholder': '请输入实验项目' },
        ];
        this.formdata2 = [
            { 'name': '外委', 'index': 'outsource', 'type': 'customswitch', "placeholder": '请选择是否外委' },
            { 'name': '主要材料', 'index': 'mainmaterial', 'type': 'textarea', "placeholder": '请输入主要材料', 'disabled': true, 'autoheight': true },
            { 'name': '计划材料费（元）', 'index': 'planmaterialaccount', 'type': 'text', 'placeholder': '请输入计划材料费', 'disabled': true },
            { 'name': '工日数量（日）', 'index': 'workday', 'type': 'text', 'placeholder': '请输入工日数量', 'disabled': true },
            { 'name': '工日单价（元/工日）', 'index': 'workprice', 'type': 'text', 'placeholder': '请输入工日单价', 'disabled': true },
            { 'name': '计划人工费', 'index': 'plantime', 'planpersonaccount': 'text', 'placeholder': '请输入计划人工费', 'disabled': true },
            { 'name': '费用合计', 'index': 'totalaccount', 'type': 'text', 'placeholder': '请输入费用合计', 'disabled': true },
            { 'name': '工作量说明', 'index': 'remark', 'type': 'textarea', "placeholder": '请输入工作量说明', 'disabled': true, 'autoheight': true },
        ];
        this.forminfo = {};
        this.id = '';
        this.type = '';
        this.pageControl = {};
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
        this.id = this.navParams.get('prjid');
        this.type = this.navParams.get('type');
        // this.forminfo = this.navParams.get('forminfo');
        // if (this.forminfo !== '' || this.forminfo !== null) {
        //   this.httpService.inittime('planstarttime', this.forminfo)
        //   this.httpService.inittime('planendtime', this.forminfo)
        //   this.httpService.inittime('filltime', this.forminfo)
        // console.log('navParams => ', this.forminfo);
        // } else {
        //   this.initinfo()
        // }
        this.initinfo();
    }
    LmtagworkorderplaninfoPage.prototype.initinfo = function () {
        var _this = this;
        var url = "/lmtagProject/detail/" + this.id;
        this.httpService.get(url, null, function (result) {
            if (result.code == 0) {
                _this.forminfo = result.data;
                _this.pageElement(result.data.wfstatus, result.data.wfid);
                _this.httpService.inittime('planstarttime', _this.forminfo);
                _this.httpService.inittime('planendtime', _this.forminfo);
                _this.httpService.initUserName(result.data.cooperateperson, 'cooperatepersonname', _this.forminfo);
                _this.httpService.initUserName(result.data.resperson, 'respersonname', _this.forminfo);
            }
        });
    };
    LmtagworkorderplaninfoPage.prototype.pageElementControl = function (data) {
        this.pageControl = data;
    };
    LmtagworkorderplaninfoPage.prototype.pageElement = function (wfstatus, wfid) {
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
                        this.formdata2 = this.httpService.getpagedata(this.formdata2, array);
                        return [2 /*return*/];
                }
            });
        });
    };
    LmtagworkorderplaninfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LmtagworkorderplaninfoPage');
    };
    LmtagworkorderplaninfoPage.prototype.submit = function () {
        var _this = this;
        this.httpService.initsavetime('planstarttime', this.forminfo);
        this.httpService.initsavetime('planendtime', this.forminfo);
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
    LmtagworkorderplaninfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmtagworkorderplaninfo',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagworkorder/lmtagworkorderinfo/components/lmtagworkorderplaninfo/lmtagworkorderplaninfo.html"*/'<!--\n  Generated template for the LmtagworkorderplaninfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">计划安排详细</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="formwarp lmform" style="margin-bottom: 120px;">\n    <div class="wrapper">\n      <form>\n        <mform [formdata]="formdata" code="lmtagWorkorder"  [formVal] = "forminfo" [id]="id" [navCtrl]="navCtrl" ></mform>\n        <mform [formdata]="formdata2" code="lmtagWorkorder"  [formVal] = "forminfo" [id]="id" [navCtrl]="navCtrl" ></mform>\n      </form>\n    </div>\n  </div>\n</ion-content>\n<ion-footer id="ionFooter">\n  <ion-toolbar>\n    <div class="newformfooter">\n      <div class="footer-left">\n        <div>\n          <img src="assets/imgs/lm/lmhome/clear.png" alt="">\n          <span>清除</span>\n        </div>\n      </div>\n      <button class="footer-right" id="saveBtn" ion-button outline icon-start round (click)="submit()">\n        保存\n      </button>\n    </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagworkorder/lmtagworkorderinfo/components/lmtagworkorderplaninfo/lmtagworkorderplaninfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_workflow_service__["a" /* WorkflowServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__["a" /* PhoneDeviceProvider */]])
    ], LmtagworkorderplaninfoPage);
    return LmtagworkorderplaninfoPage;
}());

//# sourceMappingURL=lmtagworkorderplaninfo.js.map

/***/ }),

/***/ 962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmtagworkorderplaninfoPageModule", function() { return LmtagworkorderplaninfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmtagworkorderplaninfo__ = __webpack_require__(1587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LmtagworkorderplaninfoPageModule = /** @class */ (function () {
    function LmtagworkorderplaninfoPageModule() {
    }
    LmtagworkorderplaninfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmtagworkorderplaninfo__["a" /* LmtagworkorderplaninfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmtagworkorderplaninfo__["a" /* LmtagworkorderplaninfoPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], LmtagworkorderplaninfoPageModule);
    return LmtagworkorderplaninfoPageModule;
}());

//# sourceMappingURL=lmtagworkorderplaninfo.module.js.map

/***/ })

});
//# sourceMappingURL=39.js.map