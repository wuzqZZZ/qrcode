webpackJsonp([37],{

/***/ 1009:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmtagworkorderinfoPageModule", function() { return LmtagworkorderinfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmtagworkorderinfo__ = __webpack_require__(1636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LmtagworkorderinfoPageModule = /** @class */ (function () {
    function LmtagworkorderinfoPageModule() {
    }
    LmtagworkorderinfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmtagworkorderinfo__["a" /* LmtagworkorderinfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmtagworkorderinfo__["a" /* LmtagworkorderinfoPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */], __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], LmtagworkorderinfoPageModule);
    return LmtagworkorderinfoPageModule;
}());

//# sourceMappingURL=lmtagworkorderinfo.module.js.map

/***/ }),

/***/ 1636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmtagworkorderinfoPage; });
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
 * Generated class for the LmtagworkorderinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmtagworkorderinfoPage = /** @class */ (function () {
    function LmtagworkorderinfoPage(events, storage, navCtrl, toastCtrl, navParams, httpService, workflow, tools, phoneDevice) {
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
            { 'name': '检修设备', 'index': 'assetname', 'indexId': 'assetid', 'type': 'chooseasset', 'placeholder': '请选择检修设备' },
            { 'name': '项目名称', 'index': 'projectname', 'type': 'text', 'placeholder': '请输入项目名称' },
            { 'name': '主要工作内容', 'index': 'projectdesc', 'type': 'textarea', 'placeholder': '请输入工作内容', 'disabled': true, 'autoheight': true },
            { 'name': '附件', 'index': 'prjid', 'type': 'uploadify', 'placeholder': '', 'busstype': 'lmtagProject' },
        ];
        this.formdata1 = [
            { 'name': '计划开工时间', 'index': 'planstarttime', 'type': 'datetime', 'format': 'YYYY-MM-DD HH:mm', "placeholder": '请选择计划开工日期' },
            { 'name': '计划完工时间', 'index': 'planendtime', 'type': 'datetime', 'format': 'YYYY-MM-DD HH:mm', "placeholder": '请选择计划完工日期' },
            { 'name': '计划状态', 'index': 'planstatus', "placeholder": '请选择计划状态' },
            { 'name': '检修专业', 'index': 'specialty', 'type': 'select', 'dicttype': 'BKC_SPECAIL', "placeholder": '请选择检修专业' },
            { 'name': '工作负责人', 'index': 'respersonname', 'indexId': 'resperson', 'type': 'selectUser', "placeholder": '请选择工作负责人' },
        ];
        this.formdata2 = [];
        // public formdata2_1 = [
        //   { 'name': '检修质量验收卡', 'index': 'isready', 'type': 'customswitch', 'pagecode': "LmtagfilelistPage" },
        // ]
        this.formdata3 = [
            { 'name': '工作票编号', 'index': 'ohnum', 'type': 'text', 'placeholder': '请输入工作票编号' },
            { 'name': '填票时间', 'index': 'edittime', 'type': 'datetime', 'format': 'YYYY-MM-DD HH:mm:ss', "placeholder": '请选择填票时间' },
            { 'name': '许可人', 'index': 'permitmanname', 'indexId': 'permitman', 'type': 'selectUser', "placeholder": '请选择许可人' },
            { 'name': '许可时间', 'index': 'permittime', 'type': 'datetime', 'format': 'YYYY-MM-DD HH:mm:ss', "placeholder": '请选择许可时间' },
            { 'name': '安全技术交底', 'index': 'securitytech', 'type': 'customswitch', 'placeholder': '请选择安全技术交底' },
            { 'name': '交底时间', 'index': 'techtime', 'type': 'datetime', 'format': 'YYYY-MM-DD HH:mm:ss', "placeholder": '请选择交底时间' },
            { 'name': '附件', 'index': 'prjid', 'type': 'uploadify', 'placeholder': '', 'busstype': 'lmtagProjectZB' },
        ];
        this.formdata4 = [
            { 'name': '检修文件包', 'index': 'filewfstatusname', 'type': 'clicklink', 'pagecode': "LmtagfileinfoPage", "pageparam": "fileid" },
        ];
        this.formdata5 = [
            { 'name': '完工时间', 'index': 'endtime', 'type': 'datetime', 'format': 'YYYY-MM-DD', 'placeholder': '请选择完工时间' },
            { 'name': '实际工期(天)', 'index': 'realtime', 'type': 'text', 'placeholder': '请输入实际工期' },
            { 'name': '计划工期(天)', 'index': 'plantime1', 'type': 'text', 'placeholder': '请输入计划工期' },
            { 'name': '工期偏差(天)', 'index': 'difftime', 'type': 'text', 'placeholder': '请输入工期偏差' },
            { 'name': '实际工时(人日)', 'index': 'realworkhour', 'type': 'text', 'placeholder': '请输入实际工时' },
            { 'name': '工时成本(元)', 'index': 'allpersonprice', 'type': 'text', 'placeholder': '请输入工时成本' },
            { 'name': '物料成本(元)', 'index': 'allmaterialprice', 'type': 'text', 'placeholder': '请输入物料成本' },
            { 'name': '总成本(元)', 'index': 'allprice', 'type': 'text', 'placeholder': '请输入总成本' },
            { 'name': '完工说明', 'index': 'description12', 'type': 'textarea', 'placeholder': '请输入完工说明' },
            { 'name': '附件', 'index': 'prjid', 'type': 'uploadify', 'placeholder': '', 'busstype': 'lmtagProjectZX' },
        ];
        this.formdata6 = [
            { 'name': '验收说明', 'index': 'checkdesc', 'type': 'textarea', "placeholder": '请输入验收说明' },
            { 'name': '验收结果', 'index': 'checkresult', 'type': 'select', 'dicttype': '	LMTAG_PROJECT_CHECKRESULT', 'placeholder': '请选择验收结果' },
            { 'name': '设备异动', 'index': 'checkresult1', 'type': 'select', 'placeholder': '请选择设备异动' },
            { 'name': '验收人', 'index': 'checkpersonname', 'indexId': 'checkperson', 'type': 'selectUser', 'placeholder': '请选择验收人' },
            { 'name': '验收日期', 'index': 'checktime', 'type': 'datetime', 'format': 'YYYY-MM-DD', 'placeholder': '请选择验收日期' },
            { 'name': '附件', 'index': 'prjid', 'type': 'uploadify', 'placeholder': '', 'busstype': 'lmtagProjectYS' },
        ];
        this.formdata7 = [
            { 'name': '零星二级验收说明', 'index': 'checkdesc2', 'type': 'textarea', "placeholder": '请输入零星二级验收说明' },
            { 'name': '验收结果', 'index': 'checkresult2', 'type': 'switch', 'placeholder': '请选择验收结果' },
            { 'name': '验收类型', 'index': 'checktype2', 'type': 'select', 'dicttype': 'LMTAG_WORKORDER_CHECKTYPE', 'placeholder': '请选择验收类型' },
            { 'name': '验收人', 'index': 'level2name', 'indexId': 'level2', 'type': 'selectUser', 'placeholder': '请选择验收人' },
            { 'name': '验收日期', 'index': 'accepttime2', 'type': 'datetime', 'format': 'YYYY-MM-DD', 'placeholder': '请选择验收日期' },
        ];
        this.formdata8 = [
            { 'name': '零星三级验收说明', 'index': 'checkresult3', 'type': 'textarea', "placeholder": '请输入零星三级验收说明' },
            { 'name': '验收结果', 'index': 'checkresult3', 'type': 'switch', 'placeholder': '请选择验收结果' },
            { 'name': '验收类型', 'index': 'checktype3', 'type': 'select', 'dicttype': 'LMTAG_WORKORDER_CHECKTYPE', 'placeholder': '请选择验收类型' },
            { 'name': '验收人', 'index': 'level3name', 'indexId': 'level3', 'type': 'selectUser', 'placeholder': '请选择验收人' },
            { 'name': '验收日期', 'index': 'accepttime3', 'type': 'datetime', 'format': 'YYYY-MM-DD', 'placeholder': '请选择验收日期' },
        ];
        this.id = "";
        this.forminfo = {};
        this.wtaddsafetylength = 0;
        this.wtaddsafety = [];
        this.wstablelength = 0;
        this.wstable = [];
        this.pageControl = {};
        this.projectloglist = []; // 检修日志
        this.hidefpbtn = false; // 隐藏文件包filepackage按钮
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
        this.id = this.navParams.get('prjid');
        this.initinfo();
    }
    LmtagworkorderinfoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.events.subscribe('workflowPage', function (data, time) {
            if (data) {
                _this.initinfo();
                _this.events.unsubscribe('workflowPage');
            }
        });
    };
    LmtagworkorderinfoPage.prototype.pageElementControl = function (data) {
        this.pageControl = data;
    };
    LmtagworkorderinfoPage.prototype.pageElement = function (wfstatus, wfid) {
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
                        this.formdata1 = this.httpService.getpagedata(this.formdata1, array);
                        this.formdata2 = this.httpService.getpagedata(this.formdata2, array);
                        this.formdata3 = this.httpService.getpagedata(this.formdata3, array);
                        this.formdata5 = this.httpService.getpagedata(this.formdata5, array);
                        this.formdata6 = this.httpService.getpagedata(this.formdata6, array);
                        this.formdata7 = this.httpService.getpagedata(this.formdata7, array);
                        this.formdata8 = this.httpService.getpagedata(this.formdata8, array);
                        return [2 /*return*/];
                }
            });
        });
    };
    LmtagworkorderinfoPage.prototype.planmore = function () {
        var _this = this;
        this.navCtrl.push('LmtagworkorderplanbaseinfoPage', {
            type: 'edit',
            prjid: this.id,
        });
        this.events.subscribe('workorderplanbase:forminfo', function (data, time) {
            // this.forminfo = data
            _this.initinfo();
            // console.log('subscribe => ', this.forminfo);
            _this.events.unsubscribe('workorderplan:forminfo');
        });
    };
    LmtagworkorderinfoPage.prototype.planmore1 = function () {
        var _this = this;
        this.navCtrl.push('LmtagworkorderplaninfoPage', {
            type: 'edit',
            prjid: this.id,
        });
        this.events.subscribe('workorderplan:forminfo', function (data, time) {
            // this.forminfo = data
            // console.log('subscribe => ', this.forminfo);
            _this.initinfo();
            _this.events.unsubscribe('workorderplan:forminfo');
        });
    };
    LmtagworkorderinfoPage.prototype.handleLabelToPage = function (pagecode) {
        // console.log(pagecode);
        this.navCtrl.push(pagecode, {
            projectid: this.forminfo['projectid'],
            code: this.forminfo['code']
        });
    };
    LmtagworkorderinfoPage.prototype.handleLabelLink = function (pagecode, pageparam) {
        if (pageparam) {
            this.navCtrl.push(pagecode, (_a = {},
                _a[pageparam] = this.forminfo[pageparam],
                _a));
            return false;
        }
        this.navCtrl.push(pagecode, {
            id: this.id
        });
        var _a;
    };
    LmtagworkorderinfoPage.prototype.changeToggle = function (value, index) {
        if (value) {
            this.forminfo[index] = 1;
            if (index == 'fpready' || index == 'yskready') {
                this.autoPrepare();
            }
        }
        else {
            this.forminfo[index] = 0;
        }
        console.log(this.forminfo[index]);
    };
    LmtagworkorderinfoPage.prototype.chooseitem = function (item) {
        var _this = this;
        console.log(item);
        if (item.index == 'workmembers') {
            this.navCtrl.push('UserdialogPage', {
                typeid: item.indexId,
                type: 'multiple',
                typename: item.index,
                array: this.forminfo[item.index],
            });
            this.events.subscribe('user:userinfo', function (data, time) {
                // 去重，添加人员
                var deduplicatedArray = data.filter(function (v1) { return !(_this.forminfo[item.index].some(function (v2) { return v2.userid == v1.id; })); });
                deduplicatedArray.map(function (item) {
                    var postdata = {
                        ids: item.id,
                        names: item.name,
                        wtid: _this.forminfo['workorderid']
                    };
                    _this.httpService.postform('/ttWorkticketWorkmembers/addWorkmembers', null, postdata, function (res) {
                        if (res.code == 0) {
                            _this.httpService.initWorkmembers(_this.forminfo['workorderid'], 'workmembers', _this.forminfo);
                        }
                    });
                });
                // this.forminfo[item.index] = data
                // var str = '';
                // for(var i= 0; i<data.length;i++){
                //   data[i].adduser = true;
                //   if(i != (data.length -1)){
                //     str += data[i].name+','
                //   }else{
                //     str += data[i].name;
                //   }
                // }
                _this.events.unsubscribe('user:userinfo');
            });
        }
        // if (item.index == 'machinename') {
        //   this.navCtrl.push('EquipmentdialogPage', {
        //     typeid: item.indexId,
        //     type: 'single',
        //     typename: item.index
        //   });
        //   this.events.subscribe('user:userinfo', (data, time) => {
        //     console.log(data)
        //     this.forminfo[data.typename] = data.name;
        //     this.forminfo[data.typeid] = data.id;
        //     this.events.unsubscribe('user:userinfo');
        //   })
        // }
    };
    LmtagworkorderinfoPage.prototype.initinfo = function () {
        var _this = this;
        var url = "/lmtagProject/detail/" + this.id;
        this.httpService.get(url, null, function (result) {
            console.log(result);
            if (result.code == 0) {
                // if (result.data.length > 0) {
                _this.forminfo = result.data;
                // this.initDanger();//检修总体危害辨识
                _this.pageElement(result.data.wfstatus, result.data.wfid);
                _this.initFileWfstatus(result.data.fileid);
                // 文件包就绪
                if (result.data.fileid != '' && result.data.fileid != null) {
                    _this.forminfo['fpready'] = 1;
                }
                else {
                    _this.forminfo['fpready'] = 0;
                }
                if (result.data.qualityid != '' && result.data.qualityid != null) {
                    _this.forminfo['yskready'] = 1;
                }
                else {
                    _this.forminfo['yskready'] = 0;
                }
                _this.initwfstatus(result.data.wfstatus);
                _this.inittechprogramname(result.data.techprogram);
                _this.httpService.initAsset(result.data.assetid, _this.forminfo, 'assetname');
                _this.httpService.initUserName(result.data.resperson, 'respersonname', _this.forminfo);
                _this.httpService.initUserName(result.data.permitman, 'permitmanname', _this.forminfo);
                _this.httpService.initUserName(result.data.checkperson, 'checkpersonname', _this.forminfo);
                _this.httpService.inittime('planstarttime', _this.forminfo);
                _this.httpService.inittime('planendtime', _this.forminfo);
                _this.httpService.inittime('endtime', _this.forminfo);
                _this.httpService.inittime('edittime', _this.forminfo);
                _this.httpService.inittime('permittime', _this.forminfo);
                _this.httpService.inittime('techtime', _this.forminfo);
                _this.httpService.inittime('checktime', _this.forminfo);
                console.log('------', _this.forminfo);
                _this.findProjectLog(); // 获取检修项目
                // this.workflow.workflowcheckAuth(this.forminfo, 'page-lmtagworkorderinfo'); //检查流程
            }
        });
    };
    LmtagworkorderinfoPage.prototype.openFilePackagePage = function () {
        this.navCtrl.push('LmtagfileinfoPage', {
            type: 'edit',
            fileid: this.forminfo['fileid']
        });
    };
    // 一键准备
    LmtagworkorderinfoPage.prototype.autoPrepare = function () {
        var _this = this;
        var url = '/lmtagProject/autoPrepareByPrjid?prjid=' + this.id;
        this.httpService.get(url, null, function (result) {
            if (result.code == 0) {
                _this.initinfo();
            }
        });
    };
    LmtagworkorderinfoPage.prototype.initFileWfstatus = function (id) {
        var _this = this;
        var url = '/lmtagFile/detail/' + id;
        this.httpService.get(url, null, function (result) {
            if (result.code == 0) {
                _this.httpService.getDictName("LMTAG_FILE_WFSTATUS", result.data.wfstatus, function (res) {
                    if (res !== "") {
                        console.log(res);
                        _this.forminfo['filewfstatusname'] = res;
                    }
                });
            }
        });
    };
    LmtagworkorderinfoPage.prototype.submit = function () {
        var _this = this;
        console.log(this.forminfo);
        if (this.tools.initform(this.formdata, this.forminfo)) {
            if (this.forminfo['wfstatusname'] == '待开工') {
                if (!this.tools.initform(this.formdata1, this.forminfo)) {
                    return false;
                }
            }
            if (this.forminfo['wfstatusname'] == '验收中') {
                if (!this.tools.initform(this.formdata6, this.forminfo)) {
                    return false;
                }
            }
            if (this.forminfo['wfstatusname'] == '已开工') {
                if (!this.tools.initform(this.formdata5, this.forminfo)) {
                    return false;
                }
            }
            this.forminfo['workmembers'] = '';
            this.httpService.initsavetime('planstarttime', this.forminfo);
            this.httpService.initsavetime('planendtime', this.forminfo);
            this.httpService.initsavetime('edittime', this.forminfo);
            this.httpService.initsavetime('permittime', this.forminfo);
            this.httpService.initsavetime('techtime', this.forminfo);
            this.httpService.initsavetime('endtime', this.forminfo);
            var obj = {
                lmtagProjectLogService: this.projectloglist,
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
                    _this.initinfo();
                }
            });
            return true;
        }
        else {
            return false;
        }
    };
    LmtagworkorderinfoPage.prototype.workflowStart = function () {
        // this.saveStr = "true";
        if (this.submit() != false) {
            if (this.forminfo['wfid'] != "" && this.forminfo['wfid'] != null) {
                this.navCtrl.push('WorkflowroutePage', { 'busstype': 'lmtagProject', 'bussid': this.id, 'wfid': this.forminfo['wfid'] });
            }
            else {
                //发送流程
                this.navCtrl.push('WorkflowstartPage', { 'busstype': 'lmtagProject', 'bussid': this.id });
            }
        }
    };
    LmtagworkorderinfoPage.prototype.initDanger = function () {
        var _this = this;
        this.httpService.get('/lmtagWorkorderDanger/list?standardcode=' + this.id + '&sort=createtime&order=desc&_search=false&rows=-1&page=1&sidx=&sord=asc', null, function (result) {
            _this.wtaddsafety = result.rows;
            _this.wtaddsafetylength = result.records;
        });
        this.httpService.get('/lmtagWorkorderWS/list?standardcode=' + this.id + '&sort=createtime&order=desc&_search=false&rows=-1&page=1&sidx=&sord=asc', null, function (result) {
            _this.wstable = result.rows;
            _this.wstablelength = result.records;
        });
    };
    LmtagworkorderinfoPage.prototype.initwfstatus = function (status) {
        var _this = this;
        this.httpService.getDictName("LMTAG_PROJECT_WFSTATUS", status, function (res) {
            if (res !== "") {
                _this.forminfo['wfstatusname'] = res;
                if (_this.forminfo['wfstatusname'] == '验收中') {
                    if (!_this.hidefpbtn) {
                        $('page-lmtagworkorderinfo #filepackage')[0].src = 'assets/imgs/lm/lmhome/filePackage_green.svg';
                        $('page-lmtagworkorderinfo #filepackage').siblings('span')[0].style.color = '#06DE6D';
                    }
                    $('page-lmtagworkorderinfo #saveBtn').html('验收');
                    setTimeout(function () {
                        $('page-lmtagworkorderinfo .wf_jxzx').show();
                        $('page-lmtagworkorderinfo .wf_ys').show();
                    }, 1);
                }
                if (_this.forminfo['wfstatusname'] == '已开工') {
                    if (!_this.hidefpbtn) {
                        $('page-lmtagworkorderinfo #filepackage')[0].src = 'assets/imgs/lm/lmhome/filePackage_blue.svg';
                        $('page-lmtagworkorderinfo #filepackage').siblings('span')[0].style.color = '#014886';
                    }
                    $('page-lmtagworkorderinfo #saveBtn').html('完工');
                    setTimeout(function () {
                        $('page-lmtagworkorderinfo .wf_jxzx').show();
                    }, 1);
                }
                if (_this.forminfo['wfstatusname'] == '已完成') {
                    if (!_this.hidefpbtn) {
                        $('page-lmtagworkorderinfo #filepackage')[0].src = 'assets/imgs/lm/lmhome/filePackage_green.svg';
                        $('page-lmtagworkorderinfo #filepackage').siblings('span')[0].style.color = '#06DE6D';
                    }
                    $('page-lmtagworkorderinfo #saveBtn').attr('disabled', true).html('已完成');
                    setTimeout(function () {
                        $('page-lmtagworkorderinfo .wf_jxzx').show();
                        $('page-lmtagworkorderinfo .wf_ys').show();
                    }, 1);
                }
            }
        });
    };
    LmtagworkorderinfoPage.prototype.inittechprogramname = function (techprogram) {
        var _this = this;
        this.httpService.getDictName("LMTAG_TECH_PROGRAM", techprogram, function (res) {
            if (res !== "") {
                _this.forminfo['techprogramname'] = res;
                if (_this.forminfo['techprogramname'] == '检修文件包') {
                    _this.formdata2 = [
                        { 'name': '检修文件包', 'index': 'fpready', 'type': 'customswitch', 'pagecode': "LmtagfileinfoPage", "pageparam": "fileid" },
                        { 'name': '工具准备', 'index': 'toolready', 'type': 'customswitch', 'pagecode': "LmpjiitemtoolPage" },
                        { 'name': '材料准备', 'index': 'materialready', 'type': 'customswitch', 'pagecode': "LmpjmmtpurchPage" },
                        { 'name': '备件准备', 'index': 'spareready', 'type': 'customswitch', 'pagecode': "LmtagfilesparePage" },
                    ];
                }
                if (_this.forminfo['techprogramname'] == '质量验收卡') {
                    _this.formdata2 = [
                        { 'name': '检修质量验收卡', 'index': 'yskready', 'type': 'customswitch', 'pagecode': "LmtagworkorderqualityinfoPage", "pageparam": "qualityid" },
                    ];
                    _this.hidefpbtn = true;
                }
                if (_this.forminfo['techprogramname'] == "施工方案") {
                    _this.hidefpbtn = true;
                }
            }
        });
    };
    LmtagworkorderinfoPage.prototype.historyview = function () {
        this.navCtrl.push('HistorylistPage', {
            wfid: this.forminfo['wfid'],
            title: '流程历史',
        });
    };
    LmtagworkorderinfoPage.prototype.collapseClick = function (index) {
        $('page-lmtagworkorderinfo #collapse' + index).toggle();
        $('page-lmtagworkorderinfo .collapse_show_icon' + index).toggle();
        $('page-lmtagworkorderinfo .collapse_hide_icon' + index).toggle();
    };
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad LmtagworkorderinfoPage');
    // }
    /**
     * 1.查找关联的检修项目
     * 2.根据检修项目查找检修日志
     */
    LmtagworkorderinfoPage.prototype.findTagProject = function () {
        var _this = this;
        var projectid = this.storage.get(__WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */].LM_PROJECTID);
        var where = { toint_prjid_equal: this.forminfo['prjid'] };
        this.httpService.get('/lmtagProject/list?projectid=' + projectid + '&where=' + encodeURI(JSON.stringify(where)), null, function (result) {
            console.log("this.httpService.get  result => ", result.rows[0], _this.forminfo);
            if (result.rows.length > 0) {
                // this.tagProjectinfo = result.rows[0]
                // this.findProjectLog(result.rows[0]['prjid'])
            }
        });
    };
    // 检修日志列表
    LmtagworkorderinfoPage.prototype.handleProjectloglist = function () {
        this.navCtrl.push('LmtagprojectloglistPage', {
            type: 'edit',
            prjid: this.id
        });
    };
    LmtagworkorderinfoPage.prototype.findProjectLog = function () {
        var _this = this;
        this.httpService.get('/lmtagProjectLog/list?prjid=' + this.id + '&sort=createtime&order=desc&_search=false&nd=&rows=-1&page=1&sidx=&sord=asc', null, function (result) {
            _this.projectloglist = result.rows;
        });
    };
    LmtagworkorderinfoPage.prototype.handleLogInfo = function (logid, index) {
        var _this = this;
        this.events.subscribe('projectlogCall', function (params) {
            _this.findProjectLog();
            // 取消订阅
            _this.events.unsubscribe('projectlogCall');
        });
        this.navCtrl.push('LmtagprojectlogPage', {
            type: 'edit',
            logid: logid,
        });
    };
    LmtagworkorderinfoPage.prototype.addProjectLog = function (e) {
        var _this = this;
        this.events.subscribe('projectlogCall', function (params) {
            _this.findProjectLog();
            // 取消订阅
            _this.events.unsubscribe('projectlogCall');
        });
        this.navCtrl.push('LmtagprojectlogPage', {
            prjid: this.id
        });
        e.stopPropagation();
    };
    LmtagworkorderinfoPage.prototype.saveProjectLog = function () {
        var _this = this;
        var payload = {
            lmtagProjectLogService: this.projectloglist,
            master: this.forminfo
        };
        this.httpService.post('/lmtag/lmtagProjectService/saveMasterSlave', payload, function (res) {
            console.log(res);
            if (res.code == 0) {
                // this.findTagProject()
                _this.findProjectLog();
            }
        });
    };
    LmtagworkorderinfoPage.prototype.removelog = function (e, logid) {
        var _this = this;
        this.httpService.removeTableIds('lmtagProjectLog', { ids: logid }, function (res) {
            console.log(res);
            if (res.code == 0) {
                _this.toastCtrl.create({
                    message: '删除成功',
                    duration: 1200,
                    position: 'top'
                }).present();
                // this.navCtrl.pop().then(() => {
                //   this.events.publish('projectlogCall', null);
                // });
                _this.findProjectLog();
            }
        }, this.httpService.CONTENTTYPE_FORMURLENCODE);
        e.stopPropagation();
    };
    LmtagworkorderinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmtagworkorderinfo',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagworkorder/lmtagworkorderinfo/lmtagworkorderinfo.html"*/'<!--\n  Generated template for the LmtagworkorderinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">检修工单（{{forminfo?.wfstatusname}}）</ion-title>\n    <span class="pull-right navbar-right"  >\n      <!-- <span class="pull-right report" style="margin-right: 5px;" (click)="historyview()">日志</span> -->\n      <span class="pull-right report" (click)="historyview()">历史</span>\n    </span>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="formwarp lmform" style="margin-bottom: 120px;">\n    <div class="wrapper">\n      <form>\n      <div class="container" style="margin-top:10px;margin-bottom:0;">\n        <div class="header_folder" (click)="collapseClick(1)">\n          <div class="header__title myclass">基本信息</div>\n          <div class="header__icon">\n            <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n            <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n          </div>\n        </div>\n        <div class="content_folder" id="collapse1">\n          <div class="box">\n            <mform [formdata]="formdata" code="lmtagWorkorder" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl" (chooseFromChild)="chooseitem($event)"></mform>\n            <div class="detailinfo"  (click)="planmore()">详细</div>\n          </div>\n        </div>\n      </div>\n      <div class="container" style="margin-top:10px;margin-bottom:0;">\n        <div class="header_folder" (click)="collapseClick(2)">\n          <div class="header__title myclass">计划安排</div>\n          <div class="header__icon">\n            <span class="collapse_hide_icon2" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n            <span class="collapse_show_icon2"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n          </div>\n        </div>\n        <div class="content_folder" id="collapse2">\n          <div class="box">\n            <mform [formdata]="formdata1" code="lmtagWorkorder1" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl" (chooseFromChild)="chooseitem($event)" ></mform>\n            <div class="detailinfo"  (click)="planmore1()">详细</div>\n          </div>\n        </div>\n      </div>\n      <div class="container" style="margin-top:10px;margin-bottom:0;">\n        <div class="header_folder" (click)="collapseClick(3)">\n          <div class="header__title myclass">检修准备</div>\n          <div class="header__icon">\n            <span class="collapse_hide_icon2" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n            <span class="collapse_show_icon2"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n          </div>\n        </div>\n        <div class="content_folder" id="collapse3">\n          <div class="box customswitch" *ngFor="let item of formdata2">\n            <!-- <mform [formdata]="formdata2" code="lmtagWorkorder2" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl" (chooseFromChild)="chooseitem($event)" ></mform> -->\n            <ion-item >\n              <ion-label *ngIf="!item.pagecode"> {{item?.name}}<span *ngIf="item?.required" class="required">*</span></ion-label>\n              <ion-label *ngIf="item.pagecode" style="color: #014886 !important;" (click)="handleLabelLink(item.pagecode, item.pageparam)"> {{item?.name}}<span *ngIf="item?.required" class="required">*</span></ion-label>\n              <ion-toggle [name]="item.index" [(ngModel)]="forminfo[item.index]" (ngModelChange)="changeToggle($event, item.index)" color="secondary" item-end></ion-toggle>\n            </ion-item>\n            <div class="imgbox">\n              <img *ngIf="forminfo[item.index] == 0 || forminfo[item.index] == null; else default" src="assets/imgs/lm/lmhome/selectedmark.svg" alt="">\n              <ng-template #default>\n                <img src="assets/imgs/lm/lmhome/selectedmark_active.svg" alt="">\n              </ng-template>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="container" style="margin-top:10px;margin-bottom:0;">\n        <div class="content_folder" id="collapse4">\n          <div class="box">\n            <mform [formdata]="formdata3" code="lmtagWorkorder3" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl" (chooseFromChild)="chooseitem($event)" ></mform>\n          </div>\n        </div>\n      </div>\n      <!-- 检修执行 -->\n      <div class="container wf_jxzx" style="margin-top:10px;margin-bottom:0; display: none;">\n        <div class="header_folder" (click)="collapseClick(3)">\n          <div class="header__title myclass">检修执行</div>\n          <div class="header__icon">\n            <span class="collapse_hide_icon2" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n            <span class="collapse_show_icon2"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n          </div>\n        </div>\n        <div class="content_folder" id="collapse3" *ngIf="!hidefpbtn">\n          <div class="box">\n            <mform [formdata]="formdata4" code="lmtagWorkorder4" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl" (chooseFromChild)="chooseitem($event)" ></mform>\n          </div>\n        </div>\n      </div>\n      <div class="container wf_jxzx" style="margin-top:10px;margin-bottom:0; display: none;">\n        <div class="content_folder" id="collapse3">\n          <div class="box">\n            <div class="itembox">\n              <ion-item >\n                <ion-label style="color: #014886 !important;" (click)="handleProjectloglist()">检修日志</ion-label>\n                <ion-label style="text-align: right;color: #014886 !important;" (click)="addProjectLog($event)">\n                  <img src="assets/imgs/lm/lmhome/add.svg" alt="" style="vertical-align: sub;">\n                  添加\n                </ion-label>\n              </ion-item>\n            </div>\n            <div class="itembox loglist" *ngIf="projectloglist.length > 0">\n              <ion-item>\n                <div *ngFor="let item of projectloglist;let i = index" class="logitem" (click)="handleLogInfo(item.logid, i)">{{item.createtime }}({{ item[\'edittype\'] == 2 ? \'出场\' : \'入场\' }})<span class="removelog" (click)="removelog($event, item.logid)"></span></div>\n              </ion-item>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="container wf_jxzx" style="margin-top:10px;margin-bottom:0; display: none;">\n        <div class="content_folder" id="collapse3">\n          <div class="box">\n            <mform [formdata]="formdata5" code="lmtagWorkorder4" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl" (chooseFromChild)="chooseitem($event)" ></mform>\n          </div>\n        </div>\n      </div>\n      <!-- 验收 -->\n      <div class="container wf_ys" style="margin-top:10px;margin-bottom:0; display: none;">\n        <div class="content_folder" id="collapse6">\n          <div class="box">\n            <mform [formdata]="formdata6" code="lmtagWorkorder5" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl" (chooseFromChild)="chooseitem($event)" ></mform>\n          </div>\n        </div>\n      </div>\n    </form>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer id="ionFooter">\n  <ion-toolbar>\n    <div class="newformfooter">\n      <div class="footer-left">\n        <div (click)="openFilePackagePage()" *ngIf="!hidefpbtn">\n          <img id="filepackage" src="assets/imgs/lm/lmhome/filePackage.svg" alt="">\n          <span>检修文件包</span>\n        </div>\n        <div (click)="submit()">\n          <img src="assets/imgs/lm/lmhome/saveform.svg" alt="">\n          <span>保存</span>\n        </div>\n      </div>\n      <button class="footer-right" id="saveBtn" ion-button outline icon-start round (click)="workflowStart()">\n        开工\n      </button>\n    </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagworkorder/lmtagworkorderinfo/lmtagworkorderinfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_workflow_service__["a" /* WorkflowServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__["a" /* PhoneDeviceProvider */]])
    ], LmtagworkorderinfoPage);
    return LmtagworkorderinfoPage;
}());

//# sourceMappingURL=lmtagworkorderinfo.js.map

/***/ })

});
//# sourceMappingURL=37.js.map