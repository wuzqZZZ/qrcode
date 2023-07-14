webpackJsonp([76],{

/***/ 1008:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmtagfileinfoPageModule", function() { return LmtagfileinfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmtagfileinfo__ = __webpack_require__(1635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LmtagfileinfoPageModule = /** @class */ (function () {
    function LmtagfileinfoPageModule() {
    }
    LmtagfileinfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmtagfileinfo__["a" /* LmtagfileinfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmtagfileinfo__["a" /* LmtagfileinfoPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], LmtagfileinfoPageModule);
    return LmtagfileinfoPageModule;
}());

//# sourceMappingURL=lmtagfileinfo.module.js.map

/***/ }),

/***/ 1635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmtagfileinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_phone_device__ = __webpack_require__(106);
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
 * Generated class for the LmtagfileinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmtagfileinfoPage = /** @class */ (function () {
    function LmtagfileinfoPage(events, storage, navCtrl, toastCtrl, navParams, httpService, workflow, tools, phoneDevice) {
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
            { 'name': '检修任务', 'index': 'projectname', 'type': 'text', 'placeholder': '请输入检修任务' },
            { 'name': '主要工作内容', 'index': 'projectdesc', 'type': 'textarea', 'placeholder': '请输入工作内容', 'disabled': true, 'autoheight': true },
        ];
        this.formdata1 = [
            { 'name': '适用范围', 'index': 'workcontent', 'type': 'textarea', 'placeholder': '请输入适用范围', 'disabled': true, 'autoheight': true },
        ];
        this.formdata2 = [
            { 'name': '作业条件', 'index': 'notes', 'type': 'textarea', 'placeholder': '请输入作业条件', 'disabled': true, 'autoheight': true },
        ];
        this.formdata3 = [
            { 'name': '检修总体危害辨识', 'index': 'dangerdesc', 'type': 'textarea', 'placeholder': '请输入检修总体危害辨识', 'disabled': true, 'autoheight': true },
        ];
        this.formdata4 = [
            { 'name': '工具明细', 'index': '_toolready', 'type': 'customswitch', 'pagecode': 'LmtagfiletoolPage' },
            { 'name': '材料明细', 'index': '_materialready', 'type': 'customswitch', 'pagecode': 'LmtagfilematerialPage' },
        ];
        this.formdata5 = [
            { 'name': '备件明细', 'index': '_spareready', 'type': 'customswitch', 'pagecode': 'LmtagfilesparelistPage' },
        ];
        // public formdata6 = [
        //   { 'name': '', 'index': 'wslists', 'type': 'customswitchlist', 'pagecode': '', 'listindex': 'wslists' },
        // ]
        this.formdata7 = [
            // { 'name': '开工时间', 'index': 'starttime', 'type': 'datetime','format': 'YYYY-MM-DD HH:mm:ss' },
            { 'name': '完工时间', 'index': 'endtime', 'type': 'datetime', 'format': 'YYYY-MM-DD', 'placeholder': '请选择完工时间' },
            { 'name': '实际工期（工日）', 'index': 'realtime', 'type': 'text', 'placeholder': '请输入实际工期（工日）' },
            { 'name': '修后总体评价', 'index': 'evaluationresult', 'type': 'select', 'dicttype': 'LMTAG_WORKORDER_EVALRESULT' },
        ];
        // public formdata8 = [
        //   { 'name': '本文件包修前准备修改', 'index': 'isready', 'type': 'customswitch' },
        //   { 'name': '本文件包修前准备修改', 'index': 'isready', 'type': 'customswitch' },
        //   { 'name': '本文件包修前准备修改', 'index': 'isready', 'type': 'customswitch' },
        // ]
        this.id = "";
        this.forminfo = {};
        this.wtaddsafetylength = 0;
        this.wtaddsafety = [];
        this.wstablelength = 0;
        this.wstable = [];
        this.pageControl = {};
        this.projectloglist = []; // 检修日志
        this.wslists = [];
        this.qualitylists = [];
        this.techDatalists = [];
        this.techAssetlists = [];
        // public tagProjectinfo = {}; // 检修项目
        this.toollist = [];
        this.materiallist = [];
        this.sparelist = [];
        this.modifylist = [];
        this.nonConformitylist = [];
        this.trialrunlist = [];
        this.modifytypelist = [];
        this.sparepartlist = [];
        this.nextStepIndex = 0;
        this.checkresultdict = [];
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
        this.id = this.navParams.get('fileid');
        // console.log(`this.id => `, this.id)
        // this.initinfo();
        this.addflat(); // 兼容Array.flat
        this.initcheckresultdict();
    }
    LmtagfileinfoPage.prototype.ionViewWillEnter = function () {
        // this.events.subscribe('workflowPage', (data, time) => {
        //   if (data) {
        //     this.initinfo();
        //     this.events.unsubscribe('workflowPage');
        //     return;
        //   }
        // })
        this.initinfo();
    };
    LmtagfileinfoPage.prototype.pageElementControl = function (data) {
        this.pageControl = data;
    };
    LmtagfileinfoPage.prototype.pageElement = function (wfstatus, wfid) {
        return __awaiter(this, void 0, void 0, function () {
            var data, array;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpService.getPageControlElementAnsy("lmtagFile_form", wfstatus, wfid)];
                    case 1:
                        data = _a.sent();
                        this.pageElementControl(data);
                        array = this.httpService.pageDate(data);
                        this.formdata = this.httpService.getpagedata(this.formdata, array);
                        // this.formdata1 = this.httpService.getpagedata(this.formdata1, array);
                        // this.formdata2 = this.httpService.getpagedata(this.formdata2, array);
                        // this.formdata3 = this.httpService.getpagedata(this.formdata3, array);
                        this.formdata4 = this.httpService.getpagedata(this.formdata4, array);
                        this.formdata5 = this.httpService.getpagedata(this.formdata5, array);
                        // this.formdata6 = this.httpService.getpagedata(this.formdata6, array);
                        this.formdata7 = this.httpService.getpagedata(this.formdata7, array);
                        return [2 /*return*/];
                }
            });
        });
    };
    LmtagfileinfoPage.prototype.planmore = function () {
        var _this = this;
        this.navCtrl.push('LmtagworkorderplanbaseinfoPage', {
            type: 'edit',
            prjid: this.forminfo['prjid'],
        });
        this.events.subscribe('workorderplanbase:forminfo', function (data, time) {
            _this.forminfo = data;
            console.log('subscribe => ', _this.forminfo);
            _this.events.unsubscribe('workorderplan:forminfo');
        });
    };
    LmtagfileinfoPage.prototype.planmore2 = function () {
        var _this = this;
        this.navCtrl.push('LmtagfilecomplereportPage', {
            type: 'edit',
            id: this.id
        });
        this.events.subscribe('filecomplereport:forminfo', function (data, time) {
            _this.forminfo = data;
            console.log('subscribe => ', _this.forminfo);
            _this.events.unsubscribe('filecomplereport:forminfo');
        });
    };
    LmtagfileinfoPage.prototype.handleNonConformInfo = function (id) {
        this.navCtrl.push('LmtagnonconformityinfoPage', {
            type: 'edit',
            id: id
        });
    };
    LmtagfileinfoPage.prototype.handleQualityinspection = function (id) {
        this.navCtrl.push('LmtagqualityinspectioninfoPage', {
            type: 'edit',
            id: id
        });
    };
    // 初始化
    LmtagfileinfoPage.prototype.initinfo = function () {
        var _this = this;
        var url = "/lmtagFile/detail/" + this.id;
        this.httpService.get(url, null, function (result) {
            if (result.code == 0) {
                _this.forminfo = result.data;
                console.log("this.httpService.get  this.forminfo => ", _this.forminfo);
                _this.httpService.initAsset('machineid', _this.forminfo, 'machinename');
                _this.httpService.inittime('endtime', _this.forminfo);
                _this.initstatusname(result.data.wfstatus);
                _this.initprojectinfo();
                _this.initWSlists(); // 工序
                _this.initQuality(); // 验收卡
                _this.initTechAsset(); // 数据记录
                _this.initModify();
                _this.initModifytypelist(_this.forminfo['modifytype']);
                _this.initNonConformity(result.data['prjid']);
                _this.initTrialrun(result.data['prjid']);
                _this.initSparepartlist();
                _this.pageElement(result.data.wfstatus, result.data.wfid);
                // 明细
                _this.forminfo['_toolready'] = '';
                _this.forminfo['_spareready'] = '';
                _this.forminfo['_materialready'] = '';
                _this.initTool();
                _this.initMaterial();
                _this.initSpare();
            }
        });
    };
    LmtagfileinfoPage.prototype.initprojectinfo = function () {
        var _this = this;
        var url = "/lmtagProject/detail/" + this.forminfo['prjid'];
        this.httpService.get(url, null, function (result) {
            if (result.code == 0) {
                _this.forminfo['projectdesc'] = result.data['projectdesc'];
            }
        });
    };
    LmtagfileinfoPage.prototype.initstatusname = function (status) {
        var _this = this;
        this.httpService.getDictName("LMTAG_FILE_WFSTATUS", status, function (res) {
            if (res !== "") {
                _this.forminfo['wfstatusname'] = res;
            }
        });
    };
    LmtagfileinfoPage.prototype.initWSlists = function () {
        var _this = this;
        var url = "/lmtagFileWS/list?standardcode=" + this.id + "&sort=seqnum&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc";
        this.httpService.get(url, null, function (result) {
            if (result.rows.length > 0) {
                // for (let i = 0; i < result.rows.length; i++) {
                //   const item = result.rows[i];
                //   item.ready = item.ready == '' ? 0 : 1 
                // }
                _this.wslists = result.rows;
                // console.log(`this.httpService.get  this.wslists => `, this.wslists)
                // 获取下一步未完成的步骤（过滤已完成的）
                _this.nextStepIndex = result.rows.findIndex(function (item) { return item.ready != 1; });
                // console.log('下一步未完成的步骤', this.nextStepIndex);
                if (_this.nextStepIndex == -1) {
                    $('page-lmtagfileinfo #saveBtn .button-inner').html('完成，填写完工报告');
                }
                else if (_this.nextStepIndex != 0) {
                    $('page-lmtagfileinfo #saveBtn .button-inner').html('继续执行');
                }
                else {
                    $('page-lmtagfileinfo #saveBtn .button-inner').html('开始执行');
                }
            }
        });
    };
    LmtagfileinfoPage.prototype.initQuality = function () {
        var _this = this;
        var url = "/lmtagQualityInspection/list3?fileid=" + this.id + "&sort=workseq&order=asc&_search=false&nd=1680859409359&rows=-1&page=1&sidx=&sord=asc";
        this.httpService.get(url, null, function (result) {
            if (result.rows.length > 0) {
                var _loop_1 = function (i) {
                    // const element = result.rows[i];
                    if (result.rows[i].conformityname != '' && result.rows[i].conformityname != null) {
                        result.rows[i]['checkresultname'] = _this.checkresultdict.filter(function (item) { return item.value == result.rows[i]['conformityname']; })[0].name;
                    }
                };
                for (var i = 0; i < result.rows.length; i++) {
                    _loop_1(i);
                }
                _this.qualitylists = result.rows;
                // console.log(`this.httpService.get  this.qualitylists => `, this.qualitylists)
            }
        });
    };
    LmtagfileinfoPage.prototype.initcheckresultdict = function () {
        var _this = this;
        this.httpService.getDict('LM_TAG_INSPECTION_CHECK_RESULT', function (res) {
            if (res != '') {
                _this.checkresultdict = res;
            }
        });
    };
    LmtagfileinfoPage.prototype.initTechData = function (id, index) {
        var _this = this;
        var url = "/lmtagTechData/list?bussid=" + id + "&sort=seqnum&order=asc&_search=false&nd=1681087338414&rows=-1&page=1&sidx=&sord=asc";
        this.httpService.get(url, null, function (result) {
            if (result.rows) {
                _this.techAssetlists[index].tassetlist = result.rows;
            }
        });
    };
    LmtagfileinfoPage.prototype.initTechAsset = function () {
        var _this = this;
        var url = '/lmtagTechAsset/list?bussid=' + this.id + '&sort=seqnum&order=asc&_search=false&nd=1681307120521&rows=-1&page=1&sidx=&sord=asc';
        this.httpService.get(url, null, function (result) {
            if (result.rows.length > 0) {
                _this.techAssetlists = result.rows;
                // this.initTechData();
                for (var i = 0; i < _this.techAssetlists.length; i++) {
                    var item = _this.techAssetlists[i];
                    _this.initTechData(item.tassetid, i);
                }
                // console.log(`this.httpService.get  this.techAssetlists => `, this.techAssetlists)
            }
        });
    };
    LmtagfileinfoPage.prototype.initTool = function () {
        var _this = this;
        var url = "/lmtagFileTooldetail/list?standardcode=" + this.id + "&tooltype=tool&sort=seqnum&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc";
        this.httpService.get(url, null, function (result) {
            if (result.rows.length > 0) {
                _this.toollist = result.rows;
                _this.formdata4[0].name = '工具明细（' + result.records + '）';
                // console.log(`this.httpService.get  this.toollist => `, this.toollist)
                _this.forminfo['_toolready'] = !result.rows.some(function (item) { return item.ready != 1; }); // 工具是否全部准备好了
                // console.log(`this.httpService.get  this.forminfo['_toolready'] => `, this.forminfo['_toolready'])
            }
        });
    };
    LmtagfileinfoPage.prototype.initSpare = function () {
        var _this = this;
        var url = "/lmtagFileMaterial/list?standardcode=" + this.id + "&materialtype=spare&sort=seqnum&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc";
        this.httpService.get(url, null, function (result) {
            if (result.rows.length > 0) {
                _this.sparelist = result.rows;
                _this.formdata5[0].name = '备件明细（' + result.records + '）';
                // console.log(`this.httpService.get  this.sparelist => `, this.sparelist)
                _this.forminfo['_spareready'] = !result.rows.some(function (item) { return item.ready != 1; }); // 是否全部准备好了
                // console.log(`this.httpService.get  this.forminfo['_spareready'] => `, this.forminfo['_spareready'])
            }
        });
    };
    LmtagfileinfoPage.prototype.initMaterial = function () {
        var _this = this;
        var url = "/lmtagFileMaterial/list?standardcode=" + this.id + "&materialtype=material&sort=seqnum&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc";
        this.httpService.get(url, null, function (result) {
            if (result.rows.length > 0) {
                _this.materiallist = result.rows;
                _this.formdata4[1].name = '材料明细（' + result.records + '）';
                // console.log(`this.httpService.get  this.materiallist => `, this.materiallist)
                _this.forminfo['_materialready'] = !result.rows.some(function (item) { return item.ready != 1; }); // 是否全部准备好了
                // console.log(`this.httpService.get  this.forminfo['_materialready'] => `, this.forminfo['_materialready'])
            }
        });
    };
    LmtagfileinfoPage.prototype.initModify = function () {
        var _this = this;
        var url = "/lmtagFileModify/list?fileid=" + this.id + "&sort=createtime&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc";
        this.httpService.get(url, null, function (result) {
            if (result.rows.length > 0) {
                _this.modifylist = result.rows.filter(function (item) { return (item.content || item.reason); });
                // console.log(`this.httpService.get  this.modifylist => `, this.modifylist)
            }
        });
    };
    LmtagfileinfoPage.prototype.initNonConformity = function (id) {
        var _this = this;
        var url = "/lmtagNonConformity/list?workorderid=" + id + "&sort=code&order=desc&_search=false&rows=-1&page=1&sidx=&sord=asc";
        this.httpService.get(url, null, function (result) {
            if (result.rows.length > 0) {
                _this.nonConformitylist = result.rows;
                // console.log(`this.httpService.get  this.nonConformitylist => `, this.nonConformitylist)
            }
        });
    };
    LmtagfileinfoPage.prototype.initTrialrun = function (id) {
        var _this = this;
        var url = "/lmtagTrialrun/list?workorderid=" + id + "&sort=code&order=desc&_search=false&rows=-1&page=1&sidx=&sord=asc";
        this.httpService.get(url, null, function (result) {
            if (result.rows.length > 0) {
                _this.trialrunlist = result.rows;
                // console.log(`this.httpService.get  this.trialrunlist => `, this.trialrunlist)
            }
        });
    };
    LmtagfileinfoPage.prototype.initModifytypelist = function (mftypeStr) {
        var _this = this;
        // this.modifytypelist = [];
        this.httpService.getDict('LMTAG_FILE_MODIFYTYPE', function (data) {
            if (data !== "") {
                data.map(function (d) {
                    if (mftypeStr != null && mftypeStr.indexOf(d.value) != -1) {
                        d.ready = 1;
                    }
                    else {
                        d.ready = 0;
                    }
                });
                _this.modifytypelist = data;
                // console.log(this.modifytypelist);
            }
        });
    };
    LmtagfileinfoPage.prototype.initSparepartlist = function () {
        var _this = this;
        var url = "/lmtagFileSparepart/list?standardcode=" + this.id + "&sort=seqnum&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc";
        this.httpService.get(url, null, function (result) {
            if (result.rows.length > 0) {
                _this.sparepartlist = result.rows;
            }
        });
    };
    // 初始化 end
    LmtagfileinfoPage.prototype.collapseClick = function (index) {
        $('page-lmtagfileinfo #collapse' + index).toggle();
        $('page-lmtagfileinfo .collapse_show_icon' + index).toggle();
        $('page-lmtagfileinfo .collapse_hide_icon' + index).toggle();
    };
    // 检修工序、工艺及质量标准(只读)
    LmtagfileinfoPage.prototype.handleLabelToPage = function (step) {
        this.navCtrl.push('LmtagfileoverhaulPage', {
            curStepIndex: step,
            id: this.id
        });
    };
    LmtagfileinfoPage.prototype.radiorightclick = function (list, index, key) {
        console.log("radiorightclick  list, index, key => ", list, index, key);
        if (list[index][key] === '' || list[index][key] === null) {
            list[index][key] = '1';
        }
        else if (list[index][key] === 0) {
            list[index][key] = 1;
        }
        else if (list[index][key] === 1) {
            list[index][key] = 0;
        }
        else if (list[index][key] === '0') {
            list[index][key] = '1';
        }
        else if (list[index][key] === '1') {
            list[index][key] = '0';
        }
        // list[index][key] = list[index][key] ? '1' : ''
        console.log(list);
    };
    // 菜单
    LmtagfileinfoPage.prototype.toggleFileMenuList = function () {
        $('#menulist').toggle();
        $('#menulistImg').siblings('span').toggleClass('primaryColor');
        if ($('#menulist')[0].style.display == 'block') {
            $('#menulistImg')[0].src = 'assets/imgs/lm/lmhome/menulist_active.svg';
        }
        else {
            $('#menulistImg')[0].src = 'assets/imgs/lm/lmhome/menulist.svg';
        }
    };
    LmtagfileinfoPage.prototype.menuJumpClick = function (e) {
        $(e.target).addClass('currentmenu').siblings('li').removeClass('currentmenu');
        var mDivID = $(e.target).attr('data-mid');
        if (!mDivID) {
            return false;
        }
        document.querySelector('#' + mDivID).scrollIntoView({
            behavior: "smooth"
        });
        this.toggleFileMenuList();
    };
    // 菜单 end
    LmtagfileinfoPage.prototype.submitTechAsset = function (data) {
        var _this = this;
        console.log("submitTechAsset  data => ", data);
        var obj = {
            master: data
        };
        this.httpService.post('/lmtag/lmtagTechDataService/saveMasterSlave', obj, function (res) {
            if (res.code == 0) {
                // this.toastCtrl.create({
                //   position: 'bottom',
                //   duration: 1500,
                //   message: '保存成功',
                // }).present();
            }
            else {
                _this.toastCtrl.create({
                    position: 'bottom',
                    duration: 1500,
                    message: '技术数据记录-保存失败',
                }).present();
            }
        });
    };
    // 一键准备（就绪）
    LmtagfileinfoPage.prototype.oneClickPreparation = function (list, key, value) {
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            item[key] = value ? '1' : '';
        }
    };
    // 提交保存
    // isStartJob 是否是执行工序（判断未完成工序）
    LmtagfileinfoPage.prototype.submit = function (isStartJob) {
        var _this = this;
        if (isStartJob === void 0) { isStartJob = false; }
        if (this.techAssetlists.length > 0) {
            var allTassetlist = this.techAssetlists.map(function (item) { return item.tassetlist; })['flat']();
            allTassetlist.map(function (tasset) {
                _this.submitTechAsset(tasset);
            });
        }
        this.forminfo['modifytype'] = '';
        var modifytype = [];
        this.modifytypelist.map(function (d) {
            if (d.ready == 1) {
                modifytype.push(d.value);
            }
        });
        if (modifytype.length > 0) {
            this.forminfo['modifytype'] = modifytype.join(',');
        }
        // console.log(this.forminfo['modifytype']);
        this.oneClickPreparation(this.toollist, 'ready', this.forminfo['_toolready']);
        this.oneClickPreparation(this.sparelist, 'ready', this.forminfo['_spareready']);
        this.oneClickPreparation(this.materiallist, 'ready', this.forminfo['_materialready']);
        // console.log(this.toollist, this.sparelist, this.materiallist);
        this.httpService.initsavetime('endtime', this.forminfo);
        var obj = {
            master: this.forminfo,
            lmtagFileMaterialService: this.materiallist.concat(this.sparelist),
            lmtagFileModifyService: this.modifylist,
            lmtagFileSparepartService: this.sparepartlist,
            lmtagFileTooldetailService: this.toollist,
            lmtagFileWSService: this.wslists,
        };
        this.httpService.post('/lmtag/lmtagFileService/saveMasterSlave', obj, function (res) {
            if (res.code == 0) {
                if (isStartJob) {
                    if (_this.nextStepIndex == -1) {
                        _this.navCtrl.push('LmtagfilecomplereportPage', {
                            id: _this.id
                        });
                        return false;
                    }
                    _this.navCtrl.push('LmtagfileoverhaulPage', {
                        // curStepIndex: this.nextStepIndex,
                        type: 'edit',
                        id: _this.id
                    });
                    return false;
                }
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
    LmtagfileinfoPage.prototype.addflat = function () {
        if (Array.prototype['flat'] instanceof Function) {
            console.log('Array.protype.flat IS Exist');
        }
        else {
            Array.prototype['flat'] = function (i) {
                if (i === void 0) { i = 1; }
                var RES = [];
                var ii = 0;
                (function f(arr, ii) {
                    var arr = JSON.parse(JSON.stringify(arr));
                    for (var j = 0; j < arr.length; j++) {
                        if (Array.isArray(arr[j]) && ii < i) {
                            f(arr[j], ii + 1);
                        }
                        else {
                            RES.push(arr[j]);
                        }
                    }
                })(this, 0);
                return RES;
            };
        }
    };
    // 历史
    LmtagfileinfoPage.prototype.historyview = function () {
        this.navCtrl.push('HistorylistPage', {
            wfid: this.forminfo['wfid'],
            title: '流程历史',
        });
    };
    // 技术数据记录 start
    LmtagfileinfoPage.prototype.handleTassetInfo = function (datas) {
        this.navCtrl.push('LmtagfiletechdatarecordinfoPage', {
            type: 'edit',
            tassetid: datas.tassetid,
            forminfo: datas,
            fileid: this.id
        });
    };
    LmtagfileinfoPage.prototype.handleTassetDetail = function (id, datas) {
        this.navCtrl.push('LmtagfiletechdatarecorddetailPage', {
            type: 'edit',
            id: id,
            forminfo: datas
        });
    };
    LmtagfileinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmtagfileinfo',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagfile/lmtagfileinfo/lmtagfileinfo.html"*/'<!--\n  Generated template for the lmtagFileinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">检修文件包（{{forminfo[\'wfstatusname\']}}）</ion-title>\n    <span class="pull-right navbar-right"  >\n      <!-- <span class="pull-right report" style="margin-right: 5px;" (click)="historyview()">日志</span> -->\n      <span class="pull-right report" (click)="historyview()">历史</span>\n    </span>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="formwarp lmform" style="margin-bottom: 120px;">\n    <div class="wrapper">\n      <form>\n        <div id="baseinfo" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="header_folder" (click)="collapseClick(1)">\n            <div class="header__title myclass">基本信息</div>\n            <div class="header__icon">\n              <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n              <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n            </div>\n          </div>\n          <div class="content_folder" id="collapse1">\n            <div class="box">\n              <mform [formdata]="formdata" code="lmtagFile" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl"></mform>\n              <div class="detailinfo"  (click)="planmore()">详细</div>\n            </div>\n          </div>\n        </div>\n        <div id="scopeOfApplication" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="header_folder" (click)="collapseClick(2)">\n            <div class="header__title myclass">适用范围</div>\n            <div class="header__icon">\n              <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n              <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n            </div>\n          </div>\n          <div class="content_folder" id="collapse2">\n            <div class="box">\n              <mform [formdata]="formdata1" code="lmtagFile" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl"></mform>\n            </div>\n          </div>\n        </div>\n        <div id="operatingConditions" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="header_folder" (click)="collapseClick(3)">\n            <div class="header__title myclass">作业条件</div>\n            <div class="header__icon">\n              <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n              <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n            </div>\n          </div>\n          <div class="content_folder" id="collapse3">\n            <div class="box">\n              <mform [formdata]="formdata2" code="lmtagFile" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl"></mform>\n            </div>\n          </div>\n        </div>\n        <div id="hazardIdentification" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="header_folder" (click)="collapseClick(4)">\n            <div class="header__title myclass">检修总体危害辨识</div>\n            <div class="header__icon">\n              <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n              <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n            </div>\n          </div>\n          <div class="content_folder" id="collapse4">\n            <div class="box">\n              <mform [formdata]="formdata3" code="lmtagFile" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl"></mform>\n            </div>\n          </div>\n        </div>\n        <div id="toolsAndMaterialsDetails" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="header_folder" (click)="collapseClick(5)">\n            <div class="header__title myclass">工具、材料明细</div>\n            <div class="header__icon">\n              <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n              <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n            </div>\n          </div>\n          <div class="content_folder" id="collapse5">\n            <div class="box">\n              <mform [formdata]="formdata4" code="lmtagFile" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl"></mform>\n            </div>\n          </div>\n        </div>\n        <div id="sparePartsDetails" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="header_folder" (click)="collapseClick(6)">\n            <div class="header__title myclass">备品备件明细</div>\n            <div class="header__icon">\n              <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n              <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n            </div>\n          </div>\n          <div class="content_folder" id="collapse6">\n            <div class="box">\n              <mform [formdata]="formdata5" code="lmtagFile" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl"></mform>\n            </div>\n          </div>\n        </div>\n        <div id="overhaul" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="header_folder" (click)="collapseClick(7)">\n            <div class="header__title myclass">检修工序、工艺及质量标准</div>\n            <div class="header__icon">\n              <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n              <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n            </div>\n          </div>\n          <div class="content_folder" id="collapse7">\n            <div class="box cslist">\n              <ion-item class="cstitle">\n                <ion-note item-start style="width: 10%;">序号</ion-note>\n                <ion-note item-start style="flex: 1;">检修内容</ion-note>\n                <ion-note item-start class="tcenter" style="width: 20%;">执行结果</ion-note>\n              </ion-item>\n              <div class="csitem" *ngFor="let wsitem of wslists; let i = index">\n                <ion-item>\n                  <ion-note item-start class="tcenter" style="width: 10%;">{{ i+1 }}</ion-note>\n                  <ion-note item-start class="tover" style="flex: 1;" (click)="handleLabelToPage(i)"> {{ wsitem?.content }}</ion-note>\n                  <ion-note item-start class="tcenter opacity0" style="width: 20%;">\n                    <ion-toggle [checked]="wsitem.ready ? true : false" (ionChange)="radiorightclick(wslists, i, \'ready\')" color="secondary" item-end></ion-toggle>\n                    <!-- <ion-toggle name="ready" [(ngModel)]="wsitem.ready" color="secondary" item-end style="width: 20%;"></ion-toggle> -->\n                  </ion-note>\n                </ion-item>\n                <div class="imgbox">\n                  <img *ngIf="wsitem.ready == 0 || wsitem.ready == null; else default" src="assets/imgs/lm/lmhome/selectedmark.svg" alt="">\n                  <ng-template #default>\n                    <img src="assets/imgs/lm/lmhome/selectedmark_active.svg" alt="">\n                  </ng-template>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div id="qualityAcceptanceCard" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="header_folder" (click)="collapseClick(8)">\n            <div class="header__title myclass">设备检修质量验收卡</div>\n            <div class="header__icon">\n              <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n              <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n            </div>\n          </div>\n          <div class="content_folder" id="collapse8">\n            <div class="box cslist">\n              <ion-item class="cstitle">\n                <ion-note item-start class="tcenter" style="width: 10%;">序号</ion-note>\n                <ion-note item-start class="tcenter" style="width: 15%;">W/H点</ion-note>\n                <ion-note item-start style="flex: 1;">监督点</ion-note>\n                <ion-note item-start class="tcenter" style="width: 20%;">执行结果</ion-note>\n              </ion-item>\n              <div class="csitem" *ngFor="let quaitem of qualitylists; let i = index">\n                <ion-item (click)="handleQualityinspection(quaitem.inspectionid)">\n                  <ion-note item-start class="tcenter" style="width: 10%;">{{ i+1 }}</ion-note>\n                  <ion-note item-start class="tcenter" style="width: 15%;">{{ quaitem?.instypename }}</ion-note>\n                  <ion-note item-start style="flex: 1;"> {{ quaitem?.content }}</ion-note>\n                  <ion-note item-start class="tcenter" style="width: 20%;">{{ quaitem?.checkresultname || \'-\' }}</ion-note>\n                </ion-item>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div id="technicalDataRecord" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="header_folder" (click)="collapseClick(9)">\n            <div class="header__title myclass">技术数据记录</div>\n            <div class="header__icon">\n              <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n              <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n            </div>\n          </div>\n          <div class="content_folder" id="collapse9">\n            <div class="box cslist" *ngFor="let asset of techAssetlists">\n              <div class="csheader" (click)="handleTassetInfo(asset)">{{asset.assetname}}</div>\n              <ion-item class="cstitle">\n                <ion-note item-start class="tcenter" style="width: 10%;">序号</ion-note>\n                <ion-note item-start style="flex: 1;">测量点名称</ion-note>\n                <ion-note item-start class="tcenter" style="width: 20%;">填报结果</ion-note>\n              </ion-item>\n              <div class="csitem" *ngFor="let subitem of asset.tassetlist; let i = index">\n                <ion-item>\n                  <ion-note item-start class="tcenter" style="width: 10%;">{{ i+1 }}</ion-note>\n                  <ion-note item-start class="tover" style="flex: 1;" (click)="handleTassetDetail(subitem.dataid, asset)"> {{ subitem?.measurename }}</ion-note>\n                  <ion-note item-start class="tcenter opacity0" style="width: 20%;">\n                    <ion-toggle [checked]="subitem.ready == 1 ? true : false" (ionChange)="radiorightclick(asset.tassetlist, i, \'ready\')" color="secondary" item-end></ion-toggle>\n                  </ion-note>\n                </ion-item>\n                <div class="imgbox">\n                  <img *ngIf="subitem.ready == 0 || subitem.ready == null; else default" src="assets/imgs/lm/lmhome/selectedmark.svg" alt="">\n                  <ng-template #default>\n                    <img src="assets/imgs/lm/lmhome/selectedmark_active.svg" alt="">\n                  </ng-template>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div id="completionReport" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="header_folder" (click)="collapseClick(10)">\n            <div class="header__title myclass">完工报告单</div>\n            <div class="header__icon">\n              <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n              <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n            </div>\n          </div>\n          <div class="content_folder" id="collapse10">\n            <div class="box">\n              <mform [formdata]="formdata7" code="lmtagFile" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl"></mform>\n              <div class="detailinfo"  (click)="planmore2()">详细</div>\n            </div>\n          </div>\n        </div>\n        <div id="modificationRecord" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="header_folder" (click)="collapseClick(11)">\n            <div class="header__title myclass">文件包修改记录</div>\n            <div class="header__icon">\n              <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n              <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n            </div>\n          </div>\n          <div class="content_folder" id="collapse11">\n            <div class="box cslist nolink">\n              <div class="csitem" *ngFor="let item of modifytypelist">\n                <ion-item>\n                  <ion-note item-start class="tover" style="flex: 1;">{{ item?.name }}</ion-note>\n                  <ion-note item-start class="tcenter opacity0" style="width: 20%;">\n                    <ion-toggle name="ready"\n                    [(ngModel)]="item.ready" color="secondary" item-end style="width: 20%;"></ion-toggle>\n                  </ion-note>\n                </ion-item>\n                <div class="imgbox">\n                  <img *ngIf="item.ready == 0 || item.ready == null; else default" src="assets/imgs/lm/lmhome/selectedmark.svg" alt="">\n                  <ng-template #default>\n                    <img src="assets/imgs/lm/lmhome/selectedmark_active.svg" alt="">\n                  </ng-template>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="content_folder" id="collapse11">\n            <div class="box cslist nolink">\n              <ion-item class="cstitle">\n                <ion-note item-start style="flex: 1;">原内容</ion-note>\n                <ion-note item-start class="tright" style="width: 40%;">修改理由</ion-note>\n              </ion-item>\n              <div class="csitem">\n                <ion-item *ngFor="let item of modifylist; let i = index">\n                  <ion-note item-start style="flex: 1;">{{ item.content || \'-\' }}</ion-note>\n                  <ion-note item-start class="tright" style="width: 40%;">{{ item.reason || \'-\' }}</ion-note>\n                </ion-item>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div id="nonConformity" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="header_folder" (click)="collapseClick(12)">\n            <div class="header__title myclass">不符合项通知及处理单</div>\n            <div class="header__icon">\n              <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n              <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n            </div>\n          </div>\n          <div class="content_folder" id="collapse12">\n            <div class="box cslist">\n              <ion-item class="cstitle">\n                <ion-note item-start style="flex: 1;">不符合情况描述</ion-note>\n                <ion-note item-start class="tcenter" style="width: 20%;">状态</ion-note>\n              </ion-item>\n              <div class="csitem">\n                <ion-item *ngFor="let item of nonConformitylist; let i = index" (click)="handleNonConformInfo(item.conformityid)">\n                  <ion-note item-start style="flex: 1;">{{item.description}}</ion-note>\n                  <ion-note item-start class="tcenter" style="width: 20%;">{{item.wfstatusname}}</ion-note>\n                </ion-item>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div id="trialRunApplicationForm" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="header_folder" (click)="collapseClick(13)">\n            <div class="header__title myclass">设备试运行申请表</div>\n            <div class="header__icon">\n              <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n              <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n            </div>\n          </div>\n          <div class="content_folder" id="collapse13">\n            <div class="box cslist nolink">\n              <ion-item class="cstitle">\n                <ion-note item-start style="flex: 1;">设备名称</ion-note>\n                <ion-note item-start class="tcenter" style="width: 20%;">状态</ion-note>\n              </ion-item>\n              <div class="csitem">\n                <ion-item *ngFor="let item of trialrunlist">\n                  <ion-note item-start style="flex: 1;">{{ item.assetname }}</ion-note>\n                  <ion-note item-start class="tcenter" style="width: 20%;">{{item.wfstatusname}}</ion-note>\n                </ion-item>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</ion-content>\n<ion-footer id="ionFooter" *ngIf="!btnhide">\n  <ion-toolbar>\n    <div class="newformfooter">\n      <div class="footer-left">\n        <div (click)="toggleFileMenuList()">\n          <img id="menulistImg" src="assets/imgs/lm/lmhome/menulist.svg" alt="">\n          <span>目录</span>\n        </div>\n        <div (click)="submit()">\n          <img src="assets/imgs/lm/lmhome/saveform.svg" alt="">\n          <span>保存</span>\n        </div>\n      </div>\n      <button class="footer-right" id="saveBtn" ion-button outline icon-start round (click)="submit(true)">\n        开始执行\n      </button>\n    </div>\n  </ion-toolbar>\n\n  <div id="menulist" class="menulist">\n    <ul (click)="menuJumpClick($event)">\n      <li class="currentmenu" data-mid="scopeOfApplication">1、适用范围</li>\n      <li data-mid="operatingConditions">2、作业条件</li>\n      <li data-mid="hazardIdentification">3、检修总体危害辨识</li>\n      <li data-mid="toolsAndMaterialsDetails">4、工具、材料明细</li>\n      <li data-mid="sparePartsDetails">5、备品备件明细</li>\n      <li data-mid="overhaul">6、检修工序、工艺及质量标准</li>\n      <li data-mid="qualityAcceptanceCard">7、设备检修质量验收卡</li>\n      <li data-mid="technicalDataRecord">8、技术数据记录</li>\n      <li data-mid="completionReport">9、完工报告单</li>\n      <li data-mid="modificationRecord">10、文件包修改记录</li>\n      <li data-mid="nonConformity">11、不符合项通知及处理单</li>\n      <li data-mid="trialRunApplicationForm">12、设备试运行申请表</li>\n    </ul>\n  </div>\n</ion-footer>'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagfile/lmtagfileinfo/lmtagfileinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_workflow_service__["a" /* WorkflowServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_phone_device__["a" /* PhoneDeviceProvider */]])
    ], LmtagfileinfoPage);
    return LmtagfileinfoPage;
}());

//# sourceMappingURL=lmtagfileinfo.js.map

/***/ })

});
//# sourceMappingURL=76.js.map