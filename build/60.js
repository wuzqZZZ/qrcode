webpackJsonp([60],{

/***/ 1621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmtagqualityinspectioninfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_Utils__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_workflow_service__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_phone_device__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_tools__ = __webpack_require__(427);
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
 * Generated class for the LmtagqualityinspectioninfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmtagqualityinspectioninfoPage = /** @class */ (function () {
    function LmtagqualityinspectioninfoPage(events, storage, navCtrl, toastCtrl, navParams, httpService, workflow, tools, phoneDevice) {
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
            // { 'name': '检修项目', 'index':'projectname','indexId':'prjid','type':'choose',"placeholder":'请选择检修项目','starttoggle':true,'toggleindex':'realworkday','plantitle':'基本信息'},
            // {'name':'检修工单','index':'workordername','type':'text',"placeholder":'请选择检修工单'},
            { 'name': '检修任务', 'index': 'projectname', 'type': 'text', "placeholder": '请选择检修任务' },
            { 'name': '检修工序', 'index': 'workseq', 'type': 'text', 'placeholder': '请输入检修工序' },
        ];
        this.formdata4 = [
            { 'name': 'W/H点', 'index': 'instype', 'type': 'text', "placeholder": '请输入W/H点' },
            { 'name': '验收等级', 'index': 'acceptlevel', 'type': 'select', 'dicttype': 'LMPJ_ACCEPTANCE_LEVEL', "placeholder": '请选择验收等级' },
            { 'name': '监督点', 'index': 'content', 'type': 'textarea', "placeholder": '请输入监督点' },
            { 'name': '质量标准', 'index': 'standard', 'type': 'textarea', "placeholder": '请输入质量标准' },
        ];
        this.formdata5 = [
            { 'name': '检查/检修记录（修复）', 'index': 'conformityname', 'type': 'select', 'dicttype': 'LM_TAG_INSPECTION_CHECK_RESULT', "placeholder": '请选择检修结果' },
            { 'name': '不符合项', 'index': 'conformitycode', 'type': 'text', "placeholder": '请选择不符合项' },
            { 'name': '工作负责人确认', 'index': '', 'type': 'choosesign', "placeholder": '点击签名' },
        ];
        this.formdata1 = [
            { 'name': '零星一级验收说明', 'index': 'checkdesc1', 'type': 'textarea', "placeholder": '请输入零星一级验收说明' },
            // {'name':'验收结果','index':'checkresult1','type':'switch','placeholder':'请选择验收结果'},
            // {'name':'验收类型','index':'checktype1','type':'select','dicttype':'LMTAG_WORKORDER_CHECKTYPE','placeholder':'请选择验收类型'},
            { 'name': '验收人', 'index': 'level1name', 'indexId': 'level1', 'type': 'choosesign', 'placeholder': '点击签名' },
            { 'name': '验收日期', 'index': 'accepttime1', 'type': 'datetime', 'format': 'YYYY-MM-DD', 'placeholder': '请选择验收日期' },
        ];
        this.formdata2 = [
            { 'name': '零星二级验收说明', 'index': 'checkdesc2', 'type': 'textarea', "placeholder": '请输入零星二级验收说明' },
            // {'name':'验收结果','index':'checkresult2','type':'switch','placeholder':'请选择验收结果'},
            // {'name':'验收类型','index':'checktype2','type':'select','dicttype':'LMTAG_WORKORDER_CHECKTYPE','placeholder':'请选择验收类型'},
            { 'name': '验收人', 'index': 'level2name', 'indexId': 'level2', 'type': 'choosesign', 'placeholder': '点击签名' },
            { 'name': '验收日期', 'index': 'accepttime2', 'type': 'datetime', 'format': 'YYYY-MM-DD', 'placeholder': '请选择验收日期' },
        ];
        this.formdata3 = [
            { 'name': '零星三级验收说明', 'index': 'checkresult3', 'type': 'textarea', "placeholder": '请输入零星三级验收说明' },
            // {'name':'验收结果','index':'checkresult3','type':'switch','placeholder':'请选择验收结果'},
            // {'name':'验收类型','index':'checktype3','type':'select','dicttype':'LMTAG_WORKORDER_CHECKTYPE','placeholder':'请选择验收类型'},
            { 'name': '验收人', 'index': 'level3name', 'indexId': 'level3', 'type': 'choosesign', 'placeholder': '点击签名' },
            { 'name': '验收日期', 'index': 'accepttime3', 'type': 'datetime', 'format': 'YYYY-MM-DD', 'placeholder': '请选择验收日期' },
        ];
        this.forminfo = {};
        this.id = '';
        this.type = '';
        this.wfstatusname = '';
        // public btnhide = false;
        this.pageControl = {};
        this.checkresultDict = [];
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
        this.id = this.navParams.get('id');
        this.type = this.navParams.get('type');
        this.initinfo();
    }
    LmtagqualityinspectioninfoPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad PiinoutinfoPage');
    };
    LmtagqualityinspectioninfoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.events.subscribe('workflowPage', function (data, time) {
            if (data) {
                _this.initinfo();
                _this.events.unsubscribe('workflowPage');
            }
        });
    };
    //  initPrjname(id){
    //   this.httpService.get('/lmtagProject/detail/'+id, null, (result) => {
    //     if(result.code == 0){
    //       this.forminfo['prjname'] =result.data.projectname;
    //     }
    //   })
    //  }
    LmtagqualityinspectioninfoPage.prototype.collapseClick = function (index) {
        $('page-lmtagqualityinspectioninfo #collapse' + index).toggle();
        $('page-lmtagqualityinspectioninfo .collapse_show_icon' + index).toggle();
        $('page-lmtagqualityinspectioninfo .collapse_hide_icon' + index).toggle();
    };
    LmtagqualityinspectioninfoPage.prototype.pageElementControl = function (data) {
        this.pageControl = data;
    };
    LmtagqualityinspectioninfoPage.prototype.pageElement = function (wfstatus, wfid) {
        return __awaiter(this, void 0, void 0, function () {
            var data, array;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpService.getPageControlElementAnsy("lmtagQualityInspection_form", wfstatus, wfid)];
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
    LmtagqualityinspectioninfoPage.prototype.initstatus = function (status) {
        var _this = this;
        this.httpService.getDictName("LMTAG_QUALITY_INSPECTION_WFSTATUS", status, function (res) {
            // console.log(res)
            if (res !== "") {
                _this.forminfo['wfstatusname'] = res;
            }
        });
    };
    LmtagqualityinspectioninfoPage.prototype.initConformitycode = function (conformityid) {
        var _this = this;
        var that = this;
        if (conformityid == null || conformityid == '') {
            $('#_conformitycode').html('<a id="conformitycodename" style="width: max-content;display: block;background-color: #084a84;padding: 0.2rem 0.8rem;color: #fff;border-radius: 5px;float: right; ">新建</a>');
            $('#conformitycodename').click(function () {
                that.navCtrl.push('LmtagnonconformityinfoPage', {});
            });
            return false;
        }
        this.httpService.get('/lmtagNonConformity/detail/' + conformityid, null, function (result) {
            if (result.code == 0) {
                var wfstatus = result.data.wfstatus;
                var code = result.data.code;
                _this.httpService.getDict("LMTAG_NON_CONFORMITY_WFSTATUS", function (res) {
                    if (res != null && res.length > 0) {
                        for (var i = 0; i < res.length; i++) {
                            if (res[i].value == wfstatus) {
                                $('#_conformitycode').html('<a id="conformitycodename" style="width: 100%;text-align: right;display: block;">' + code + '(' + res[i].name + ')' + '</a>');
                                $('#conformitycodename').click(function () {
                                    that.navCtrl.push('LmtagnonconformityinfoPage', {
                                        type: 'edit',
                                        id: conformityid
                                    });
                                });
                            }
                        }
                    }
                });
            }
        });
    };
    LmtagqualityinspectioninfoPage.prototype.selectitem = function (item) {
        // if(item.index == 'acceptlevel'){
        //   if(this.forminfo['acceptlevel'] == "LEVEL2"){
        //   }
        // }
        // console.log(item)
    };
    LmtagqualityinspectioninfoPage.prototype.initinfo = function () {
        var _this = this;
        var that = this;
        if (this.type == 'edit') {
            var url = "/lmtagQualityInspection/detail/" + this.id;
            this.httpService.get(url, null, function (result) {
                console.log(result);
                if (result.code == 0) {
                    _this.forminfo = result.data;
                    _this.pageElement(result.data.wfstatus, result.data.wfid);
                    _this.initstatus(result.data.wfstatus);
                    _this.initqualityinfo(result.data.qualityid);
                    // this.initPrjname(result.data.prjid);
                    _this.initConformitycode(result.data.conformityid);
                    // if(result.data[0].checkresult == "HG"){
                    //   this.forminfo['checkresult'] =  1;
                    // }
                    // if(result.data[0].checkresult == "BHG"){
                    //   this.forminfo['checkresult'] =  0;
                    // }
                    // this.httpService.initDeptName(result.data[0].resgroup,'resgroupname',this.forminfo )
                    _this.httpService.initUserName(result.data.resperson, 'respersonname', _this.forminfo);
                    _this.httpService.initUserName(result.data.checkperson, 'checkpersonname', _this.forminfo);
                    _this.httpService.initUserName(result.data.level1, 'level1name', _this.forminfo);
                    _this.httpService.initUserName(result.data.level2, 'level2name', _this.forminfo);
                    _this.httpService.initUserName(result.data.level3, 'level3name', _this.forminfo);
                    _this.httpService.inittime('startdate', _this.forminfo);
                    _this.httpService.inittime('enddate', _this.forminfo);
                    // this.httpService.inittime('planworkday',this.forminfo);
                    // this.httpService.inittime('realworkday',this.forminfo);
                    _this.httpService.inittime('checktime', _this.forminfo);
                    _this.httpService.inittime('accepttime1', _this.forminfo);
                    _this.httpService.inittime('accepttime2', _this.forminfo);
                    _this.httpService.inittime('accepttime3', _this.forminfo);
                    _this.workflow.workflowcheckAuth(_this.forminfo, 'page-lmtagQualityInspectioninfo'); //检查流程  
                }
            });
        }
        else {
            this.id = __WEBPACK_IMPORTED_MODULE_3__providers_Utils__["a" /* Utils */].getUuid(); //id
            this.forminfo = {
                inspectionid: this.id,
                plancontent: '',
                standard: '',
                planfinishtime: '',
                resgroup: '',
                resperson: '',
                wfstatus: 'NEW'
            };
            this.initstatus('NEW');
            this.pageElement('NEW', null);
        }
        // this.initDict();
    };
    LmtagqualityinspectioninfoPage.prototype.initqualityinfo = function (id) {
        var _this = this;
        var url = '/lmtagQuality/detail/' + id;
        this.httpService.get(url, null, function (result) {
            if (result.code == 0) {
                _this.forminfo['projectname'] = result.data.projectname;
            }
        });
    };
    LmtagqualityinspectioninfoPage.prototype.submit = function () {
        var _this = this;
        if (this.tools.initform(this.formdata, this.forminfo)) {
            this.httpService.initsavetime('startdate', this.forminfo);
            this.httpService.initsavetime('enddate', this.forminfo);
            // this.httpService.initsavetime('planworkday',this.forminfo);
            // this.httpService.initsavetime('realworkday',this.forminfo);
            this.httpService.initsavetime('checktime', this.forminfo);
            this.httpService.initsavetime('accepttime1', this.forminfo);
            this.httpService.initsavetime('accepttime2', this.forminfo);
            this.httpService.initsavetime('accepttime3', this.forminfo);
            if (this.forminfo['checkresult'] == 1) {
                this.forminfo['checkresult'] = "HG";
            }
            if (this.forminfo['checkresult'] == 0) {
                this.forminfo['checkresult'] = "BHG";
            }
            // this.initcheckresultname(this.forminfo['conformityname']);
            // this.forminfo['conformityname'] = this.checkresultDict.filter(item => item.value == this.forminfo['conformityid'])[0].name;
            this.httpService.postform('/lmtagQualityInspection/save', 'lmtagQualityInspection', this.forminfo, function (res) {
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
    LmtagqualityinspectioninfoPage.prototype.initcheckresultname = function (status) {
        var _this = this;
        this.httpService.getDictName('LM_TAG_INSPECTION_CHECK_RESULT', status, function (res) {
            if (res != '') {
                _this.forminfo['checkresultname'] = res;
            }
        });
    };
    LmtagqualityinspectioninfoPage.prototype.historyview = function () {
        this.navCtrl.push('HistorylistPage', {
            wfid: this.forminfo['wfid'],
            title: '流程历史',
        });
    };
    LmtagqualityinspectioninfoPage.prototype.workflowStart = function () {
        // this.saveStr = "true";
        if (this.submit() != false) {
            // if (this.forminfo['wfid'] != "" && this.forminfo['wfid'] != null) {
            //   this.navCtrl.push('WorkflowroutePage', { 'busstype': 'lmtagQualityInspection', 'bussid': this.id, 'wfid': this.forminfo['wfid'] });
            // } else {
            //   //发送流程
            //   this.navCtrl.push('WorkflowstartPage', { 'busstype': 'lmtagQualityInspection', 'bussid': this.id });
            // }
            this.navCtrl.pop().then(function () {
                // ...
            });
        }
    };
    LmtagqualityinspectioninfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmtagqualityinspectioninfo',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagqualityinspection/lmtagqualityinspectioninfo/lmtagqualityinspectioninfo.html"*/'<!--\n  Generated template for the LmtagqualityinspectioninfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">质量验收卡（{{forminfo[\'wfstatusname\']}}）</ion-title>\n    <span class="pull-right navbar-right"  >\n      <span class="pull-right report" (click)="historyview()">历史</span>\n    </span>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="formwarp lmform" style="margin-bottom: 120px;">\n    <div class="wrapper">\n      <form>\n        <div class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="header_folder" (click)="collapseClick(1)">\n            <div class="header__title myclass">基本信息</div>\n            <div class="header__icon">\n              <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n              <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n            </div>\n          </div>\n          <div class="content_folder" id="collapse1">\n            <div class="box">\n              <mform [formdata]="formdata" code="lmtagQualityInspection"  (selectFrom)="selectitem($event)"  indexId=\'true\'   [formVal] = "forminfo" [id]="id"  [navCtrl]="navCtrl" ></mform>\n            </div>\n          </div>\n        </div>\n        <div class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="content_folder" id="collapse1">\n            <div class="box">\n              <mform [formdata]="formdata4" code="lmtagQualityInspection"  (selectFrom)="selectitem($event)"  indexId=\'true\'   [formVal] = "forminfo" [id]="id"  [navCtrl]="navCtrl" ></mform>\n            </div>\n          </div>\n        </div>\n        <div class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="header_folder" (click)="collapseClick(2)">\n            <div class="header__title myclass">检查记录</div>\n            <div class="header__icon">\n              <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n              <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n            </div>\n          </div>\n          <div class="content_folder" id="collapse2">\n            <div class="box">\n              <mform [formdata]="formdata5" code="lmtagQualityInspection"  (selectFrom)="selectitem($event)"  indexId=\'true\'   [formVal] = "forminfo" [id]="id"  [navCtrl]="navCtrl" ></mform>\n            </div>\n          </div>\n        </div>\n        <div class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="header_folder" (click)="collapseClick(3)">\n            <div class="header__title myclass">质量验收</div>\n            <div class="header__icon">  \n              <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n              <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n            </div>\n          </div>\n          <div class="content_folder" id="collapse3">\n            <div class="box">\n              <mform [formdata]="formdata1" code="lmtagQualityInspection1" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl"  ></mform>\n            </div>\n            <div class="box" *ngIf="forminfo[\'acceptlevel\'] == \'LEVEL2\' || forminfo[\'acceptlevel\'] == \'LEVEL3\'">\n              <mform [formdata]="formdata2" code="lmtagQualityInspection2" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl"  ></mform>\n            </div>\n            <div class="box" *ngIf="forminfo[\'acceptlevel\'] == \'LEVEL3\'">\n              <mform [formdata]="formdata3" code="lmtagQualityInspection3" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl"  ></mform>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer id="ionFooter" *ngIf="!btnhide">\n  <ion-toolbar>\n    <div class="newformfooter">\n      <div class="footer-left">\n        <div (click)="submit()">\n          <img src="assets/imgs/lm/lmhome/saveform.svg" alt="">\n          <span>保存</span>\n        </div>\n      </div>\n      <button class="footer-right" id="saveBtn" ion-button outline icon-start round (click)="workflowStart()">\n        保存并确认\n      </button>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagqualityinspection/lmtagqualityinspectioninfo/lmtagqualityinspectioninfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_5__providers_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_workflow_service__["a" /* WorkflowServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_phone_device__["a" /* PhoneDeviceProvider */]])
    ], LmtagqualityinspectioninfoPage);
    return LmtagqualityinspectioninfoPage;
}());

//# sourceMappingURL=lmtagqualityinspectioninfo.js.map

/***/ }),

/***/ 994:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmtagqualityinspectioninfoPageModule", function() { return LmtagqualityinspectioninfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmtagqualityinspectioninfo__ = __webpack_require__(1621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LmtagqualityinspectioninfoPageModule = /** @class */ (function () {
    function LmtagqualityinspectioninfoPageModule() {
    }
    LmtagqualityinspectioninfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmtagqualityinspectioninfo__["a" /* LmtagqualityinspectioninfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmtagqualityinspectioninfo__["a" /* LmtagqualityinspectioninfoPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], LmtagqualityinspectioninfoPageModule);
    return LmtagqualityinspectioninfoPageModule;
}());

//# sourceMappingURL=lmtagqualityinspectioninfo.module.js.map

/***/ })

});
//# sourceMappingURL=60.js.map