webpackJsonp([66],{

/***/ 1620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmtagnonconformityinfoPage; });
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
 * Generated class for the LmtagnonconformityinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmtagnonconformityinfoPage = /** @class */ (function () {
    function LmtagnonconformityinfoPage(events, storage, navCtrl, toastCtrl, navParams, httpService, workflow, tools, phoneDevice) {
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
            { 'name': '检修工单', 'index': 'workordername', 'type': 'text', "placeholder": '请选择检修工单', 'starttoggle': true, 'toggleindex': 'createtime', 'plantitle': '基本信息' },
            { 'name': '质检点', 'index': 'inspectionname', 'type': 'text', "placeholder": '请选择检质检点', 'toggleindex': 'createtime' },
            { 'name': '不符合项编号', 'index': 'code', 'type': 'text', "placeholder": '请选择不符合项编号', 'disabled': true },
            { 'name': '不符合项描述', 'index': 'description', 'type': 'textarea', 'placeholder': '请输入不符合项描述' },
            { 'name': '附件', 'index': 'file', 'type': 'uploadify', 'placeholder': '', 'busstype': 'lmtagNonConformity' },
            { 'name': '异常等级', 'index': 'abnormallevel', 'type': 'select', 'dicttype': 'LMTAG_NON_CONFORMITY_LEVEL', "placeholder": '请选择异常等级' },
            { 'name': '要求完成时间', 'index': 'requirefinishtime', 'type': 'datetime', 'format': 'YYYY-MM-DD', "placeholder": '请选择要求完成时间' },
            { 'name': '工作负责人', 'index': 'woperson', 'indexId': 'wopersonname', 'type': 'selectUser', "placeholder": '请选择工作负责人' },
            { 'name': '检修单位', 'index': 'wounit', 'type': 'selectDept', "placeholder": '请输入检修单位' },
            { 'name': '发现时间', 'index': 'findtime', 'type': 'datetime', 'format': 'YYYY-MM-DD hh:mm:ss', "placeholder": '请选择发现时间' },
            { 'name': '检查人', 'index': 'creatername', 'indexId': 'creater', 'type': 'selectUser', "placeholder": '请选择检查人' },
            { 'name': '检查时间', 'index': 'createtime', 'type': 'datetime', 'format': 'YYYY-MM-DD hh:mm:ss', 'placeholder': '请选择检查时间', 'endtoggle': true }
        ];
        this.formdata1 = [
            { 'name': '试运人员', 'index': 'trialrunpersonname', 'indexId': 'trialrunperson', 'type': 'selectUser', "placeholder": '请选择试运人员' },
            { 'name': '通知时间', 'index': 'noticetime', 'type': 'datetime', 'format': 'YYYY-MM-DD hh:mm:ss', 'placeholder': '请选择通知时间' },
            { 'name': '被通知人', 'index': 'noticepersonname', 'indexId': 'noticeperson', 'type': 'selectUser', 'placeholder': '请选择验收类型' },
            { 'name': '被通知时间', 'index': 'noticetime1', 'type': 'datetime', 'format': 'YYYY-MM-DD hh:mm:ss', 'placeholder': '请选择被通知时间' },
        ];
        this.formdata2 = [
            { 'name': '设计部意见', 'index': 'assetdeptcomment', 'type': 'select', 'dicttype': 'LMTAG_NON_CONFORMITY_COMMENT', "placeholder": '请选择设计部意见' },
            { 'name': '审核说明', 'index': 'description1', 'type': 'textarea', 'placeholder': '请输入审核说明' },
            { 'name': '设计部人员', 'index': 'assetdeptpersonname', 'indexId': 'assetdeptperson', 'type': 'selectUser', 'placeholder': '请选择设计部人员' },
            { 'name': '审核日期', 'index': 'checktime', 'type': 'datetime', 'format': 'YYYY-MM-DD', 'placeholder': '请选择审核日期' },
        ];
        this.formdata3 = [
            { 'name': '总工程师意见（重大）', 'index': 'chiefcomment', 'type': 'textarea', "placeholder": '请输入总工程师意见' },
            { 'name': '总工程师', 'index': 'chiefname', 'indexId': 'chief', 'type': 'selectUser', 'placeholder': '请选择总工程师' },
            { 'name': '审核日期', 'index': 'checktime1', 'type': 'datetime', 'format': 'YYYY-MM-DD', 'placeholder': '请选择审核日期' },
        ];
        this.formdata4 = [
            { 'name': '处理结果', 'index': 'description2', 'type': 'textarea', "placeholder": '请输入处理结果' },
            { 'name': '工作负责人', 'index': 'workpersonname', 'indexId': 'workperson', 'type': 'selectUser', 'placeholder': '请选择工作负责人' },
            { 'name': '汇报日期', 'index': 'checktime1', 'type': 'datetime', 'format': 'YYYY-MM-DD', 'placeholder': '请选择汇报日期' },
        ];
        this.formdata5 = [
            { 'name': '设备部验收意见', 'index': 'assetdeptcomment1', 'type': 'textarea', "placeholder": '请输入设备部验收意见' },
            { 'name': '验收人', 'index': 'checkpersonname', 'indexId': 'checkperson', 'type': 'selectUser', 'placeholder': '请选择验收人' },
            { 'name': '验收日期', 'index': 'checktime2', 'type': 'datetime', 'format': 'YYYY-MM-DD', 'placeholder': '请选择验收日期' },
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
    LmtagnonconformityinfoPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad PiinoutinfoPage');
    };
    LmtagnonconformityinfoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.events.subscribe('workflowPage', function (data, time) {
            if (data) {
                _this.initinfo();
                _this.events.unsubscribe('workflowPage');
            }
        });
    };
    LmtagnonconformityinfoPage.prototype.initPrjname = function (id) {
        var _this = this;
        this.httpService.get('/lmtagProject/detail/' + id, null, function (result) {
            if (result.code == 0) {
                _this.forminfo['prjname'] = result.data.projectname;
            }
        });
        // 
    };
    LmtagnonconformityinfoPage.prototype.initWorkordername = function () {
        var that = this;
        if (this.forminfo['workorderid'] != "") {
            this.httpService.get("/lmtagWorkorder/detail/" + this.forminfo['workorderid'], null, function (result) {
                if (result.code == 0) {
                    that.httpService.initUserName(result.data.directorid, 'woperson', that.forminfo);
                    that.httpService.initDeptName(result.data.dutydepartmentid, 'wounit', that.forminfo);
                }
            });
        }
    };
    LmtagnonconformityinfoPage.prototype.collapseClick = function (index) {
        $('page-lmtagNonConformityinfo #collapse' + index).toggle();
        $('page-lmtagNonConformityinfo .collapse_show_icon' + index).toggle();
        $('page-lmtagNonConformityinfo .collapse_hide_icon' + index).toggle();
    };
    LmtagnonconformityinfoPage.prototype.pageElementControl = function (data) {
        this.pageControl = data;
    };
    LmtagnonconformityinfoPage.prototype.pageElement = function (wfstatus, wfid) {
        return __awaiter(this, void 0, void 0, function () {
            var data, array;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpService.getPageControlElementAnsy("lmtagNonConformity_form", wfstatus, wfid)];
                    case 1:
                        data = _a.sent();
                        this.pageElementControl(data);
                        array = this.httpService.pageDate(data);
                        this.formdata = this.httpService.getpagedata(this.formdata, array);
                        if (!(this.pageControl['page_hide_area2'] != '' && this.pageControl['page_hide_area2'])) {
                            this.formdata1 = this.httpService.getpagedata(this.formdata1, array);
                            this.formdata2 = this.httpService.getpagedata(this.formdata2, array);
                            this.formdata3 = this.httpService.getpagedata(this.formdata3, array);
                            this.formdata4 = this.httpService.getpagedata(this.formdata4, array);
                            this.formdata5 = this.httpService.getpagedata(this.formdata5, array);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LmtagnonconformityinfoPage.prototype.initstatus = function (status) {
        var _this = this;
        this.httpService.getDictName("LMTAG_NON_CONFORMITY_WFSTATUS", status, function (res) {
            // console.log(res)
            if (res !== "") {
                _this.forminfo['wfstatusname'] = res;
            }
        });
    };
    LmtagnonconformityinfoPage.prototype.initConformitycode = function (conformityid) {
        var _this = this;
        this.httpService.get('/lmtagNonConformity/detail/' + conformityid, null, function (result) {
            if (result.code == 0) {
                var wfstatus = result.data.wfstatus;
                var code = result.data.code;
                _this.httpService.getDict("LMTAG_NON_CONFORMITY_WFSTATUS", function (res) {
                    if (res != null && res.length > 0) {
                        for (var i = 0; i < res.length; i++) {
                            if (res[i].value == wfstatus) {
                                $('#_conformitycode').html('<a id="conformitycodename" style="width: 100%;text-align: right;display: block;">' + code + '(' + res[i].name + ')' + '</a>');
                                // $('#_conformitycode').val(code + '('+res[i].name+')');
                                $('#conformitycodename').click(function () {
                                    console.log(23456);
                                });
                            }
                        }
                    }
                });
            }
            // if(result.code == 0){
            //   this.forminfo['prjname'] =result.data.projectname;
            // }
        });
    };
    LmtagnonconformityinfoPage.prototype.selectitem = function (item) {
        // if(item.index == 'acceptlevel'){
        //   if(this.forminfo['acceptlevel'] == "LEVEL2"){
        //   }
        // }
        // console.log(item)
    };
    LmtagnonconformityinfoPage.prototype.initinfo = function () {
        var _this = this;
        var that = this;
        if (this.type == 'edit') {
            var url = "/query/danger/lmtagNonConformity/findOne?id=" + this.id;
            this.httpService.get(url, null, function (result) {
                console.log(result);
                if (result.code == 0) {
                    if (result.data.length > 0) {
                        _this.forminfo = result.data[0];
                        _this.pageElement(result.data[0].wfstatus, result.data[0].wfid);
                        _this.initstatus(result.data[0].wfstatus);
                        _this.initPrjname(result.data[0].prjid);
                        _this.initConformitycode(result.data[0].conformityid);
                        if (result.data[0].checkresult == "HG") {
                            _this.forminfo['checkresult'] = 1;
                        }
                        if (result.data[0].checkresult == "BHG") {
                            _this.forminfo['checkresult'] = 0;
                        }
                        _this.initWorkordername();
                        // this.httpService.initDeptName(result.data[0].resgroup,'resgroupname',this.forminfo )
                        // this.httpService.initUserName(result.data[0].woperson,'wopersonname',this.forminfo )
                        _this.httpService.initUserName(result.data[0].creater, 'creatername', _this.forminfo);
                        _this.httpService.initUserName(result.data[0].trialrunperson, 'trialrunpersonname', _this.forminfo);
                        _this.httpService.initUserName(result.data[0].noticeperson, 'noticepersonname', _this.forminfo);
                        _this.httpService.initUserName(result.data[0].assetdeptperson, 'assetdeptpersonname', _this.forminfo);
                        _this.httpService.initUserName(result.data[0].chief, 'chiefname', _this.forminfo);
                        _this.httpService.initUserName(result.data[0].workperson, 'workpersonname', _this.forminfo);
                        _this.httpService.initUserName(result.data[0].checkperson, 'checkpersonname', _this.forminfo);
                        _this.httpService.inittime('requirefinishtime', _this.forminfo);
                        _this.httpService.inittime('findtime', _this.forminfo);
                        _this.httpService.inittime('createtime', _this.forminfo);
                        _this.httpService.inittime('noticetime', _this.forminfo);
                        _this.httpService.inittime('noticetime1', _this.forminfo);
                        _this.httpService.inittime('checktime', _this.forminfo);
                        _this.httpService.inittime('checktime1', _this.forminfo);
                        _this.httpService.inittime('checktime2', _this.forminfo);
                        _this.workflow.workflowcheckAuth(_this.forminfo, 'page-lmtagNonConformityinfo'); //检查流程  
                    }
                }
            });
        }
        else {
            this.id = __WEBPACK_IMPORTED_MODULE_6__providers_Utils__["a" /* Utils */].getUuid(); //id
            this.forminfo = {
                conformityid: this.id,
                prjid: '',
                prjname: '',
                code: '',
                description: '',
                abnormallevel: '',
                requirefinishtime: '',
                woperson: '',
                wounitname: '',
                wounit: '',
                findtime: '',
                creater: '',
                createtime: '',
                wfstatus: 'NEW'
            };
            this.initstatus('NEW');
            this.pageElement('NEW', null);
        }
    };
    LmtagnonconformityinfoPage.prototype.submit = function () {
        var _this = this;
        if (this.tools.initform(this.formdata, this.forminfo) && this.tools.initform(this.formdata1, this.forminfo) && this.tools.initform(this.formdata2, this.forminfo) && this.tools.initform(this.formdata3, this.forminfo) && this.tools.initform(this.formdata4, this.forminfo) && this.tools.initform(this.formdata5, this.forminfo)) {
            this.httpService.initsavetime('requirefinishtime', this.forminfo);
            this.httpService.initsavetime('findtime', this.forminfo);
            this.httpService.initsavetime('createtime', this.forminfo);
            this.httpService.initsavetime('noticetime', this.forminfo);
            this.httpService.initsavetime('noticetime1', this.forminfo);
            this.httpService.initsavetime('checktime', this.forminfo);
            this.httpService.initsavetime('checktime1', this.forminfo);
            this.httpService.initsavetime('checktime2', this.forminfo);
            this.httpService.postform('/lmtagNonConformity/save', 'lmtagNonConformity', this.forminfo, function (res) {
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
    LmtagnonconformityinfoPage.prototype.historyview = function () {
        this.navCtrl.push('HistorylistPage', {
            wfid: this.forminfo['wfid'],
            title: '流程历史',
        });
    };
    LmtagnonconformityinfoPage.prototype.workflowStart = function () {
        // this.saveStr = "true";
        if (this.submit() != false) {
            if (this.forminfo['wfid'] != "" && this.forminfo['wfid'] != null) {
                this.navCtrl.push('WorkflowroutePage', { 'busstype': 'lmtagNonConformity', 'bussid': this.id, 'wfid': this.forminfo['wfid'] });
            }
            else {
                //发送流程
                this.navCtrl.push('WorkflowstartPage', { 'busstype': 'lmtagNonConformity', 'bussid': this.id });
            }
        }
    };
    LmtagnonconformityinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmtagnonconformityinfo',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagnonconformity/lmtagnonconformityinfo/lmtagnonconformityinfo.html"*/'<!--\n  Generated template for the LmtagnonconformityinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">不符合项（{{forminfo[\'wfstatusname\']}}）</ion-title>\n    <span class="pull-right navbar-right"  >\n      <span class="pull-right report" (click)="historyview()">历史</span>\n    </span>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="formwarp lmform" style="margin-bottom: 120px;">\n    <div class="wrapper">\n      <form>\n        <mform [formdata]="formdata" code="lmtagQualityInspection"  [formVal] = "forminfo" [id]="id" [navCtrl]="navCtrl" ></mform>\n        <!-- <mform [formdata]="formdata" code="lmtagQualityInspection"  (selectFrom)="selectitem($event)"     [formVal] = "forminfo" [id]="id"  [navCtrl]="navCtrl" ></mform> -->\n     \n      <div class="container" style="margin-top:10px;margin-bottom:0;" *ngIf="!(pageControl.page_hide_area2 !=\'\' && pageControl.page_hide_area2)">\n        <div class="header_folder" (click)="collapseClick(11)">\n          <div class="header__title myclass">审核及处理</div>\n          <div class="header__icon">\n            <span class="collapse_hide_icon11" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n            <span class="collapse_show_icon11"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n          </div>\n        </div>\n        <div class="content_folder" id="collapse11">\n          <div class="box">\n            <mform [formdata]="formdata1" code="lmtagQualityInspection1" [formVal] = "forminfo" [id]="id"  indexId=\'true\' [navCtrl]="navCtrl"  ></mform>\n          </div>\n          <div class="box" >\n            <mform [formdata]="formdata2" code="lmtagQualityInspection2" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl"  ></mform>\n          </div>\n          <div class="box">\n            <mform [formdata]="formdata3" code="lmtagQualityInspection3" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl"  ></mform>\n          </div>\n          <div class="box">\n            <mform [formdata]="formdata4" code="lmtagQualityInspection4" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl"  ></mform>\n          </div>\n          <div class="box">\n            <mform [formdata]="formdata5" code="lmtagQualityInspection5" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl"  ></mform>\n          </div>\n        </div>\n      </div>\n      </form>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer id="ionFooter" *ngIf="!btnhide">\n  <ion-toolbar>\n    <div class="newformfooter">\n      <div class="footer-left">\n        <div (click)="submit()">\n          <img src="assets/imgs/lm/lmhome/saveform.svg" alt="">\n          <span>保存</span>\n        </div>\n      </div>\n      <button class="footer-right" id="saveBtn" ion-button outline icon-start round (click)="workflowStart()">\n        保存并确认\n      </button>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagnonconformity/lmtagnonconformityinfo/lmtagnonconformityinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_workflow_service__["a" /* WorkflowServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__["a" /* PhoneDeviceProvider */]])
    ], LmtagnonconformityinfoPage);
    return LmtagnonconformityinfoPage;
}());

//# sourceMappingURL=lmtagnonconformityinfo.js.map

/***/ }),

/***/ 993:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmtagnonconformityinfoPageModule", function() { return LmtagnonconformityinfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmtagnonconformityinfo__ = __webpack_require__(1620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LmtagnonconformityinfoPageModule = /** @class */ (function () {
    function LmtagnonconformityinfoPageModule() {
    }
    LmtagnonconformityinfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmtagnonconformityinfo__["a" /* LmtagnonconformityinfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmtagnonconformityinfo__["a" /* LmtagnonconformityinfoPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], LmtagnonconformityinfoPageModule);
    return LmtagnonconformityinfoPageModule;
}());

//# sourceMappingURL=lmtagnonconformityinfo.module.js.map

/***/ })

});
//# sourceMappingURL=66.js.map