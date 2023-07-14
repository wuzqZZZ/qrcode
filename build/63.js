webpackJsonp([63],{

/***/ 1621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmtagprojectlogPage; });
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
 * Generated class for the LmtagprojectlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmtagprojectlogPage = /** @class */ (function () {
    function LmtagprojectlogPage(events, storage, navCtrl, toastCtrl, navParams, httpService, workflow, tools, phoneDevice, toast) {
        this.events = events;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.workflow = workflow;
        this.tools = tools;
        this.phoneDevice = phoneDevice;
        this.toast = toast;
        this.formdata = [
            { 'name': '检修任务', 'index': 'projectname', 'indexId': 'prjid', 'type': 'chooseitemname', 'placeholder': '请输入检修任务' },
            { 'name': '主要工作内容', 'index': 'projectdesc', 'type': 'textarea', 'placeholder': '请输入工作内容', 'disabled': true, 'autoheight': true },
        ];
        this.formdata2 = [
            { 'name': '入场时间', 'index': 'entertime', 'type': 'datetime', 'format': 'YYYY-MM-DD HH:mm:ss', 'placeholder': '请选择入场时间' },
            { 'name': '出场时间', 'index': 'leavetime', 'type': 'datetime', 'format': 'YYYY-MM-DD HH:mm:ss', 'placeholder': '请选择出场时间' },
            { 'name': '当前登记类型', 'index': 'edittype', 'type': 'select', 'dicttype': 'LMTAG_PROJECT_LOG_EDITTYPE', 'placeholder': '请选择当前登记类型' },
        ];
        this.formdata3 = [
            { 'name': '备注', 'index': 'remark', 'type': 'textarea', 'placeholder': '请填写备注' },
        ];
        this.formdata4 = [
            { 'name': '今日进展', 'index': 'todayprogress', 'type': 'textarea', 'placeholder': '请填写今日进展' },
            { 'name': '附件', 'index': 'logid', 'type': 'uploadify', 'placeholder': '上传附件', 'busstype': 'lmtagProjectLog' },
            { 'name': '明日计划', 'index': 'tomorrowplan', 'type': 'textarea', 'placeholder': '请填写明日计划' },
        ];
        this.id = "";
        this.prjid = '';
        this.forminfo = {};
        this.projectid = '';
        this.type = '';
        this.projectinfo = {};
        this.toollist = [];
        this.pageControl = {};
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
        this.type = this.navParams.get('type');
        this.id = this.navParams.get('logid');
        this.prjid = this.navParams.get('prjid');
        console.log(this.type, this.id, this.prjid);
        if (this.type == 'edit') {
            // 日志信息
            this.initinfo();
        }
        else {
            // 新增
            this.id = __WEBPACK_IMPORTED_MODULE_6__providers_Utils__["a" /* Utils */].getUuid(); // 日志id
            this.forminfo = {
                logid: this.id,
                prjid: this.prjid,
                entertime: __WEBPACK_IMPORTED_MODULE_6__providers_Utils__["a" /* Utils */].dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss'),
                leavetime: '',
                enterpersonready: 0,
                leavepersonready: 0,
                enterperson: 1,
                leaveperson: 1,
                edittype: '1',
                todayprogress: '',
                tomorrowplan: '',
            };
            if (this.prjid != '' && this.prjid != null) {
                this.initprojectinfo(this.prjid);
                this.addlog(); // 预创建日志
            }
            this.httpService.inittime('entertime', this.forminfo);
        }
    }
    LmtagprojectlogPage.prototype.ionViewWillEnter = function () {
    };
    LmtagprojectlogPage.prototype.addlog = function () {
        var _this = this;
        var url = '/lmtagProjectLog/addLog?prjid=' + this.prjid + '&logid=' + this.id;
        this.httpService.get(url, null, function (result) {
            if (result.code == 0) {
                _this.inittoollist();
            }
        });
    };
    LmtagprojectlogPage.prototype.initinfo = function () {
        var _this = this;
        var url = "/lmtagProjectLog/detail/" + this.id;
        this.httpService.get(url, null, function (result) {
            // console.log(result)
            if (result.code == 0) {
                _this.forminfo = result.data;
                _this.prjid = result.data['prjid'];
                _this.httpService.inittime('entertime', _this.forminfo);
                _this.httpService.inittime('leavetime', _this.forminfo);
                _this.forminfo['enterperson'] == null && (_this.forminfo['enterperson'] = 0);
                _this.forminfo['leaveperson'] == null && (_this.forminfo['leaveperson'] = 0);
                _this.pageElement(result.data.wfstatus, result.data.wfid);
                _this.inittoollist();
                _this.initprojectinfo(_this.prjid);
            }
        });
    };
    LmtagprojectlogPage.prototype.initprojectinfo = function (id) {
        var _this = this;
        this.httpService.get('/lmtagProject/detail/' + id, null, function (result) {
            if (result.code == 0) {
                _this.forminfo['projectdesc'] = result.data['projectdesc'];
                _this.forminfo['projectname'] = result.data['projectname'];
                _this.forminfo['prjid'] = result.data['prjid'];
            }
        });
    };
    LmtagprojectlogPage.prototype.inittoollist = function () {
        var _this = this;
        var url = '/lmtagFileTooldetail/list?standardcode=' + this.id + '&tooltype=log&sort=seqnum&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc';
        this.httpService.get(url, null, function (result) {
            if (result.rows && result.rows.length > 0) {
                _this.toollist = result.rows;
            }
        });
    };
    LmtagprojectlogPage.prototype.pageElementControl = function (data) {
        this.pageControl = data;
    };
    LmtagprojectlogPage.prototype.pageElement = function (wfstatus, wfid) {
        return __awaiter(this, void 0, void 0, function () {
            var data, array;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpService.getPageControlElementAnsy("lmtagProjectLog_form", wfstatus, wfid)];
                    case 1:
                        data = _a.sent();
                        this.pageElementControl(data);
                        array = this.httpService.pageDate(data);
                        this.formdata = this.httpService.getpagedata(this.formdata, array);
                        this.formdata2 = this.httpService.getpagedata(this.formdata2, array);
                        this.formdata3 = this.httpService.getpagedata(this.formdata3, array);
                        this.formdata4 = this.httpService.getpagedata(this.formdata4, array);
                        return [2 /*return*/];
                }
            });
        });
    };
    LmtagprojectlogPage.prototype.planmore = function () {
        var _this = this;
        this.navCtrl.push('LmtagworkorderplanbaseinfoPage', {
            type: 'edit',
            prjid: this.prjid,
        });
        this.events.subscribe('workorderplanbase:forminfo', function (data, time) {
            _this.projectinfo = data;
            console.log('subscribe => ', _this.projectinfo);
            _this.events.unsubscribe('workorderplan:forminfo');
        });
    };
    // 选中项目
    LmtagprojectlogPage.prototype.chooseitem = function (event) {
        this.addlog(); // 预创建日志
        this.initprojectinfo(event.prjid);
    };
    LmtagprojectlogPage.prototype.showscanner = function () {
        this.navCtrl.push('ScannerPage', { 'type': 'lmtagProjectLog' }, { "animate": false });
    };
    // getUserName(id) {//根据id获取名称
    //   this.httpService.getUserName(id, res =>
    //     if (res.code == 0) {
    //       this.forminfo['creatername'] = res.data;
    //     }
    //   })
    // }
    // findProjectInfo() {
    //   this.httpService.get('/lmpjProject/findProjectMessage?id=' + this.projectid, null, data => {
    //     if (data.code == 0) {
    //       this.forminfo['projectname'] = data.data['projectname']
    //     }
    //   })
    // }
    LmtagprojectlogPage.prototype.changeToggle = function (value, forminfo, key) {
        if (value) {
            forminfo[key] = 1;
        }
        else {
            forminfo[key] = 0;
        }
        console.log(value, key, forminfo[key]);
    };
    // radiorightclick(forminfo, index, key) {
    //   if (forminfo[index][key] === true) {
    //     forminfo[index][key] = 1;
    //   } else if (forminfo[index][key] === false) {
    //     forminfo[index][key] = 0;
    //   }
    //   console.log(forminfo[index][key]);
    // }
    // changetoolready(value, key, index) {
    //   if (value) {
    //     this.forminfo[index][key] = 1;
    //   } else {
    //     this.forminfo[index][key] = 0;
    //   }
    //   console.log(this.forminfo[index][key]);
    // }
    // 数值加减按钮
    LmtagprojectlogPage.prototype.handleValueChange = function (operator, forminfo, index) {
        if (operator == '+') {
            if (index == 'remain' && forminfo['num'] <= forminfo[index]) {
                return false;
            }
            forminfo[index]++;
        }
        else if (operator == '-') {
            if (forminfo[index] == 0) {
                return false;
            }
            forminfo[index]--;
        }
    };
    LmtagprojectlogPage.prototype.collapseClick = function (index) {
        $('page-lmtagprojectlog #collapse' + index).toggle();
        $('page-lmtagprojectlog .collapse_show_icon' + index).toggle();
        $('page-lmtagprojectlog .collapse_hide_icon' + index).toggle();
    };
    LmtagprojectlogPage.prototype.submit = function () {
        var _this = this;
        if (this.prjid == null || this.prjid == '') {
            return this.toast.create({
                message: '请选择检修任务',
                duration: 1500,
                position: 'bottom'
            }).present();
        }
        // 入场
        if (this.forminfo['edittype'] == 1) {
            if (this.forminfo['enterperson'] == 0) {
                return this.toast.create({
                    message: '入场检修人员人数不能为0',
                    duration: 1500,
                    position: 'bottom'
                }).present();
            }
            if (this.forminfo['enterpersonready'] != 1) {
                return this.toast.create({
                    message: '请确认入场检修人员人数',
                    duration: 1500,
                    position: 'bottom'
                }).present();
            }
            if (this.toollist.length > 0 && this.toollist.findIndex(function (item) { return item.ready != 1; }) != -1) {
                return this.toast.create({
                    message: '请确认入场工具数量',
                    duration: 1500,
                    position: 'bottom'
                }).present();
            }
        }
        // 出场
        if (this.forminfo['edittype'] == 2 && this.forminfo['leavepersonready'] != 1) {
            if (this.forminfo['leavepersonready'] != 1) {
                return this.toast.create({
                    message: '请确认出场检修人员人数',
                    duration: 1500,
                    position: 'bottom'
                }).present();
            }
            if (this.toollist.length > 0 && this.toollist.findIndex(function (item) { return item.ready2 != 1; }) != -1) {
                return this.toast.create({
                    message: '请确认出场工具数量',
                    duration: 1500,
                    position: 'bottom'
                }).present();
            }
        }
        this.httpService.initsavetime('entertime', this.forminfo);
        this.httpService.initsavetime('leavetime', this.forminfo);
        this.forminfo['prjid'] = this.prjid;
        this.toollist.map(function (item) {
            item.ready = +item.ready;
            item.ready2 = +item.ready2;
        });
        var obj = {
            lmtagFileTooldetailService: this.toollist,
            master: this.forminfo
        };
        this.httpService.post('/lmtag/lmtagProjectLogService/saveMasterSlave', obj, function (result) {
            if (result.code == 0) {
                _this.toast.create({
                    message: '保存成功',
                    duration: 1500,
                    position: 'bottom'
                }).present();
                // this.initinfo();
                // this.inittoollist();
                // this.initprojectinfo(this.forminfo['prjid']);
                _this.navCtrl.pop().then(function () {
                    _this.events.publish('projectlogCall', null);
                });
            }
            else {
                _this.toast.create({
                    message: '保存失败',
                    duration: 1500,
                    position: 'bottom'
                }).present();
            }
        });
    };
    LmtagprojectlogPage.prototype.removelog = function () {
        var _this = this;
        this.httpService.removeTableIds('lmtagProjectLog', { ids: this.forminfo['logid'] }, function (res) {
            if (res.code == 0) {
                _this.toastCtrl.create({
                    message: '删除成功',
                    duration: 1200,
                    position: 'top'
                }).present();
                _this.navCtrl.pop().then(function () {
                    _this.events.publish('projectlogCall', null);
                });
            }
        }, this.httpService.CONTENTTYPE_FORMURLENCODE);
    };
    LmtagprojectlogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmtagprojectlog',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagprojectlog/lmtagprojectlog.html"*/'<!--\n  Generated template for the LmtagprojectlogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">检修日志</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<div class="formwarp lmform" style="margin-bottom: 120px;">\n  <div class="wrapper">\n    <form>\n      <div class="container" style="margin-top:10px;margin-bottom:0;">\n        <div class="header_folder" (click)="collapseClick(1)">\n          <div class="header__title myclass">基本信息</div>\n          <div class="header__icon">\n            <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n            <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n          </div>\n        </div>\n        <div class="content_folder" id="collapse1">\n          <div class="box">\n            <mform [formdata]="formdata" code="lmtagProjectLog" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl" (chooseFromChild)="chooseitem($event)"></mform>\n            <div class="detailinfo"  (click)="planmore()">详细</div>\n          </div>\n        </div>\n      </div>\n      <div class="container" style="margin-top:10px;margin-bottom:0;">\n        <div class="header_folder" (click)="collapseClick(2)">\n          <div class="header__title myclass">现场登记</div>\n          <div class="header__icon">\n            <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n            <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n          </div>\n        </div>\n        <div class="content_folder" id="collapse2">\n          <div class="box">\n            <mform [formdata]="formdata2" code="lmtagProjectLog" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl"></mform>\n          </div>\n        </div>\n      </div>\n\n      <!-- 入场 -->\n      <div *ngIf="forminfo[\'edittype\'] == 1" class="container" style="margin-top:10px;margin-bottom:0;">\n        <div class="content_folder" id="collapse2">\n          <div class="box customswitch csitem">\n            <ion-item>\n              <ion-note item-start class="" style="flex: 1;color: #333;">\n                检修人员\n              </ion-note>\n              <ion-note item-start class="tcenter" style="width: 20%;">\n                <button (click)="handleValueChange(\'+\', forminfo, \'enterperson\')">+</button>\n                <span style="margin: 0 .4rem;">{{forminfo[\'enterperson\']}}</span>\n                <button (click)="handleValueChange(\'-\', forminfo, \'enterperson\')">-</button>\n              </ion-note>\n              <ion-note item-start class="tcenter opacity0" style="width: 10%;">\n                <ion-toggle name="enterpersonready" [(ngModel)]="forminfo[\'enterpersonready\']" (ngModelChange)="changeToggle($event, forminfo, \'enterpersonready\')" color="secondary" item-end></ion-toggle>\n              </ion-note>\n            </ion-item>\n            <div class="imgbox">\n              <img *ngIf="forminfo[\'enterpersonready\'] == 0 || forminfo[\'enterpersonready\'] == null; else default" src="assets/imgs/lm/lmhome/selectedmark.svg" alt="确认">\n              <ng-template #default>\n                <img src="assets/imgs/lm/lmhome/selectedmark_active.svg" alt="未确认">\n              </ng-template>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf="forminfo[\'edittype\'] == 1" class="container" style="margin-top:10px;margin-bottom:0;">\n        <div class="header_folder" (click)="collapseClick(3)">\n          <div class="header__title myclass">工具明细</div>\n          <div class="header__icon">\n            <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n            <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n          </div>\n          <!-- <div class="header__btn">一键确认</div> -->\n        </div>\n        <div class="content_folder" id="collapse3">\n          <div class="box cslist">\n            <ion-item class="cstitle">\n              <ion-note item-start style="width: 10%;">序号</ion-note>\n              <ion-note item-start style="flex: 1;">名称</ion-note>\n              <ion-note item-start class="tcenter" style="width: 20%;">入场</ion-note>\n              <ion-note item-start class="tcenter" style="width: 10%;">确认</ion-note>\n            </ion-item>\n            <div class="csitem" *ngFor="let tool of toollist; let i = index">\n              <ion-item>\n                <ion-note item-start class="tcenter" style="width: 10%;color: #333;">{{ i+1 }}</ion-note>\n                <ion-note item-start class="tover" style="flex: 1;color: #333;"> {{ tool?.name }}</ion-note>\n                <ion-note item-start class="tcenter" style="width: 20%;">\n                  <button (click)="handleValueChange(\'+\', tool, \'num\')">+</button>\n                  <span style="margin: 0 .4rem;">{{tool[\'num\'] || 0}}</span>\n                  <button (click)="handleValueChange(\'-\', tool, \'num\')">-</button>\n                </ion-note>\n                <ion-note item-start class="tcenter opacity0" style="width: 10%;">\n                  <ion-toggle name="ready" [(ngModel)]="tool[\'ready\']" color="secondary" item-end></ion-toggle>\n                </ion-note>\n              </ion-item>\n              <div class="imgbox">\n                <img *ngIf="tool.ready == 0 || tool.ready == null; else default" src="assets/imgs/lm/lmhome/selectedmark.svg" alt="">\n                <ng-template #default>\n                  <img src="assets/imgs/lm/lmhome/selectedmark_active.svg" alt="">\n                </ng-template>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- 出场 -->\n      <div *ngIf="forminfo[\'edittype\'] == 2" class="container" style="margin-top:10px;margin-bottom:0;">\n        <div class="content_folder" id="collapse2">\n          <div class="box customswitch csitem">\n            <ion-item>\n              <ion-note item-start class="" style="flex: 1;color: #333;">检修人员</ion-note>\n              <ion-note item-start class="tcenter" style="width: 8%;">{{forminfo[\'enterperson\']}}</ion-note>\n              <ion-note item-start class="tcenter" style="width: 20%;">\n                <button (click)="handleValueChange(\'+\', forminfo, \'leaveperson\')">+</button>\n                <span style="margin: 0 .4rem;">{{forminfo[\'leaveperson\']}}</span>\n                <button (click)="handleValueChange(\'-\', forminfo, \'leaveperson\')">-</button>\n              </ion-note>\n              <ion-note item-start class="tcenter opacity0" style="width: 10%;">\n                <ion-toggle name="leavepersonready" [(ngModel)]="forminfo[\'leavepersonready\']" (ngModelChange)="changeToggle($event, forminfo, \'leavepersonready\')" color="secondary" item-end></ion-toggle>\n              </ion-note>\n            </ion-item>\n            <div class="imgbox">\n              <img *ngIf="forminfo[\'leavepersonready\'] == 0 || forminfo[\'leavepersonready\'] == null; else default" src="assets/imgs/lm/lmhome/selectedmark.svg" alt="确认">\n              <ng-template #default>\n                <img src="assets/imgs/lm/lmhome/selectedmark_active.svg" alt="未确认">\n              </ng-template>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf="forminfo[\'edittype\'] == 2" class="container" style="margin-top:10px;margin-bottom:0;">\n        <div class="header_folder" (click)="collapseClick(3)">\n          <div class="header__title myclass">工具明细</div>\n          <div class="header__icon">\n            <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n            <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n          </div>\n          <!-- <div class="header__btn">一键确认</div> -->\n        </div>\n        <div class="content_folder" id="collapse3">\n          <div class="box cslist">\n            <ion-item class="cstitle">\n              <ion-note item-start style="width: 10%;">序号</ion-note>\n              <ion-note item-start style="flex: 1;">名称</ion-note>\n              <ion-note item-start class="tcenter" style="width: 10%;">入场</ion-note>\n              <ion-note item-start class="tcenter" style="width: 20%;">出场</ion-note>\n              <ion-note item-start class="tcenter" style="width: 10%;">确认</ion-note>\n            </ion-item>\n            <div class="csitem" *ngFor="let tool of toollist; let i = index">\n              <ion-item>\n                <ion-note item-start class="tcenter" style="width: 10%;color: #333;">{{ i + 1 }}</ion-note>\n                <ion-note item-start class="tover" style="flex: 1;color: #333;"> {{ tool?.name }}</ion-note>\n                <ion-note item-start class="tcenter" style="width: 8%;">{{ tool.num || 0 }}</ion-note>\n                <ion-note item-start class="tcenter" style="width: 20%;">\n                  <button (click)="handleValueChange(\'+\', tool, \'remain\')">+</button>\n                  <span style="margin: 0 .4rem;">{{tool[\'remain\'] || 0}}</span>\n                  <button (click)="handleValueChange(\'-\', tool, \'remain\')">-</button>\n                </ion-note>\n                <ion-note item-start class="tcenter opacity0" style="width: 10%;">\n                  <ion-toggle name="ready2" [(ngModel)]="tool[\'ready2\']" color="secondary" item-end></ion-toggle>\n                </ion-note>\n              </ion-item>\n              <div class="imgbox">\n                <img *ngIf="tool.ready2 == 0 || tool.ready2 == null; else default" src="assets/imgs/lm/lmhome/selectedmark.svg" alt="">\n                <ng-template #default>\n                  <img src="assets/imgs/lm/lmhome/selectedmark_active.svg" alt="">\n                </ng-template>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="container" style="margin-top:10px;margin-bottom:0;">\n        <div class="content_folder" id="collapse3">\n          <div class="box">\n            <mform [formdata]="formdata3" code="lmtagProjectLog" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl"></mform>\n          </div>\n        </div>\n      </div>\n      <div *ngIf="forminfo[\'edittype\'] == 2" class="container" style="margin-top:10px;margin-bottom:0;">\n        <div class="header_folder" (click)="collapseClick(4)">\n          <div class="header__title myclass">检修汇报</div>\n          <div class="header__icon">\n            <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n            <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n          </div>\n        </div>\n        <div class="content_folder" id="collapse4">\n          <div class="box">\n            <mform [formdata]="formdata4" code="lmtagProjectLog" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl"></mform>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n</ion-content>\n\n<ion-footer id="ionFooter">\n  <ion-toolbar>\n    <div class="newformfooter">\n      <div class="footer-left">\n        <div (click)="showscanner()" *ngIf="!hidefpbtn">\n          <img id="saoma" src="assets/imgs/lm/lmhome/saoma.png" alt="">\n          <span>扫码</span>\n        </div>\n        <div (click)="removelog()">\n          <img src="assets/imgs/lm/lmhome/saveform.svg" alt="">\n          <span>删除</span>\n        </div>\n      </div>\n      <button class="footer-right" id="saveBtn" ion-button outline icon-start round (click)="submit()">\n        {{ forminfo[\'edittype\'] == 2 ? \'确认填报\' : \'入场\' }}\n      </button>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagprojectlog/lmtagprojectlog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_workflow_service__["a" /* WorkflowServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__["a" /* PhoneDeviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */]])
    ], LmtagprojectlogPage);
    return LmtagprojectlogPage;
}());

//# sourceMappingURL=lmtagprojectlog.js.map

/***/ }),

/***/ 994:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmtagprojectlogPageModule", function() { return LmtagprojectlogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_components_module__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lmtagprojectlog__ = __webpack_require__(1621);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LmtagprojectlogPageModule = /** @class */ (function () {
    function LmtagprojectlogPageModule() {
    }
    LmtagprojectlogPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__lmtagprojectlog__["a" /* LmtagprojectlogPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__lmtagprojectlog__["a" /* LmtagprojectlogPage */]),
                __WEBPACK_IMPORTED_MODULE_2__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], LmtagprojectlogPageModule);
    return LmtagprojectlogPageModule;
}());

//# sourceMappingURL=lmtagprojectlog.module.js.map

/***/ })

});
//# sourceMappingURL=63.js.map