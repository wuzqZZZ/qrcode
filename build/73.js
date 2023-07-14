webpackJsonp([73],{

/***/ 1619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmtagfileoverhaulPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_Utils__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_phone_device__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_tools__ = __webpack_require__(427);
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
 * Generated class for the LmtagfileoverhaulPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmtagfileoverhaulPage = /** @class */ (function () {
    function LmtagfileoverhaulPage(events, storage, navCtrl, toastCtrl, navParams, httpService, workflow, tools, phoneDevice) {
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
            { 'name': '检修内容', 'index': 'content', 'type': 'textarea', 'placeholder': '请输入检修内容', 'disabled': true },
            { 'name': '质量要求', 'index': 'requirement', 'type': 'textarea', 'placeholder': '请输入质量要求', 'disabled': true, 'autoheight': true },
        ];
        this.formdata2 = [
            { 'name': '执行结果', 'index': 'ready', 'type': 'customswitch', 'placeholder': '请输入检修任务' },
            { 'name': '执行人', 'index': 'readypersonname', 'type': 'text', 'placeholder': '请输入执行人', 'disabled': true },
            { 'name': '执行时间', 'index': 'readytime', 'type': 'datetime', 'format': 'YYYY-MM-DD HH:mm', 'placeholder': '请输入执行时间', 'disabled': true },
            { 'name': '附件', 'index': 'workmanshipid', 'type': 'uploadify', 'placeholder': '', 'busstype': 'lmtagFileWS' },
        ];
        this.curStepIndex = 0;
        this.id = '';
        this.forminfo = {};
        this.allStepCount = 0;
        this.wslists = [];
        this.toollist = [];
        this.materiallist = [];
        this.sparelist = [];
        this.modifylist = [];
        this.sparepartlist = [];
        this.master = {};
        this.type = '';
        this.btnhide = false;
        this.inspectioninfo = {};
        this.timer = -1;
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
        this.id = this.navParams.get('id');
        this.type = this.navParams.get('type');
        // 不是编辑模式，禁用下一步
        if (this.type != 'edit') {
            this.curStepIndex = this.navParams.get('curStepIndex');
            setTimeout(function () {
                $('page-lmtagfileoverhaul #saveBtn').attr('disabled', true);
            }, 1);
        }
        this.initinfo();
    }
    LmtagfileoverhaulPage.prototype.ionViewWillEnter = function () {
    };
    LmtagfileoverhaulPage.prototype.ngOnDestroy = function () {
        clearInterval(this.timer);
    };
    LmtagfileoverhaulPage.prototype.chooseitem = function (_a) {
        var value = _a.value, index = _a.index;
        console.log("chooseitem  value, key => ", value, index);
        // 执行结果为true，自动带入数据
        if (value == 1 && index == 'ready') {
            var userinfo = this.storage.get(__WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */].ME_USERINFO);
            this.forminfo['readyperson'] = userinfo.id;
            this.forminfo['readypersonname'] = userinfo.name;
            this.forminfo['readytime'] = __WEBPACK_IMPORTED_MODULE_3__providers_Utils__["a" /* Utils */].dateFormat(new Date(), 'yyyy-MM-dd HH:mm');
            this.httpService.inittime('readytime', this.forminfo);
            // const QRdata = {
            //   type: 'lmtagQualityInspection',
            //   id: this.forminfo['inspectionid']
            // }
            // this.forminfo['hpoint'] != null && this.createQRcode('#hqrcode', JSON.stringify(QRdata))
            // this.forminfo['wpoint'] != null && this.createQRcode('#wqrcode', JSON.stringify(QRdata))
            // // 轮询获取质检点结果
            // this.timer = setInterval(() => {
            //   this.initinspectionInfo();
            // }, 2000)
            this.renderQCqrcode();
        }
    };
    LmtagfileoverhaulPage.prototype.radiorightclick = function (e, index) {
        if (e) {
            this.forminfo[index] = 1;
            if (index == 'ready') {
                $('page-lmtagfileoverhaul #saveBtn').attr('disabled', false);
            }
        }
        else {
            this.forminfo[index] = 0;
            if (index == 'ready') {
                $('page-lmtagfileoverhaul #saveBtn').attr('disabled', true);
            }
        }
        //   if (this.forminfo[index] === '' || this.forminfo[index] === null) {
        //     this.forminfo[index] = 1;
        //   } else if (this.forminfo[index] === 0) {
        //     this.forminfo[index] = 1;
        //   } else if (this.forminfo[index] === 1) {
        //     this.forminfo[index] = 0;
        //   } else if (this.forminfo[index] === '0') {
        //     this.forminfo[index] = '1';
        //   } else if (this.forminfo[index] === '1') {
        //     this.forminfo[index] = '0';
        //   }
        console.log(this.forminfo[index]);
    };
    LmtagfileoverhaulPage.prototype.submit = function () {
        var _this = this;
        console.log("this.forminfo => ", this.forminfo, this.forminfo['ready']);
        if (this.forminfo['ready'] != 1) {
            this.toastCtrl.create({
                position: 'bottom',
                duration: 1500,
                message: '未确认工序执行结果',
            }).present();
            return false;
        }
        // 有质检点
        if (JSON.stringify(this.inspectioninfo) != '{}' && this.inspectioninfo['conformityname'] != 1) {
            this.toastCtrl.create({
                position: 'bottom',
                duration: 1500,
                message: '质检点未合格',
            }).present();
            return false;
        }
        clearInterval(this.timer);
        this.timer = -1;
        this.httpService.initsavetime('readytime', this.forminfo);
        var obj = {
            master: this.master,
            lmtagFileMaterialService: this.materiallist.concat(this.sparelist),
            lmtagFileModifyService: this.modifylist,
            lmtagFileSparepartService: this.sparepartlist,
            lmtagFileTooldetailService: this.toollist,
            lmtagFileWSService: this.wslists,
        };
        this.httpService.post('/lmtag/lmtagFileService/saveMasterSlave', obj, function (res) {
            if (res.code == 0) {
                if (_this.curStepIndex + 1 >= _this.allStepCount) {
                    clearInterval(_this.timer);
                    // 完工
                    _this.navCtrl.push('LmtagfilecomplereportPage', {
                        id: _this.id
                    });
                    return false;
                }
                // 重置数据、二维码
                _this.curStepIndex = null;
                $('#wqrcode').html('').hide();
                $('#hqrcode').html('').hide();
                _this.inspectioninfo = {};
                _this.initinfo();
                document.querySelector('page-lmtagfileoverhaul #overhaulstep').scrollIntoView(true);
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
    LmtagfileoverhaulPage.prototype.createQRcode = function (selector, text) {
        console.log("createQRcode  selector, text => ", selector, text);
        var h = $(".qrcode").height();
        var w = $(".qrcode").width();
        var el = $(selector);
        el.html('').show();
        var qrcode = new QRCode(el[0], {
            text: text,
            width: w,
            height: h,
            correctLevel: QRCode.CorrectLevel.H,
            src: 'assets/lm/lmhome/qrcode_logo.png'
        });
    };
    LmtagfileoverhaulPage.prototype.renderQCqrcode = function () {
        var _this = this;
        var QRdata = {
            type: 'lmtagQualityInspection',
            id: this.forminfo['inspectionid']
        };
        // this.forminfo['hpoint'] != null && this.createQRcode('#hqrcode', JSON.stringify(QRdata))
        // this.forminfo['wpoint'] != null && this.createQRcode('#wqrcode', JSON.stringify(QRdata))
        if (this.forminfo['hpoint'] != null && this.inspectioninfo['instypename']) {
            this.createQRcode('#hqrcode', JSON.stringify(QRdata));
        }
        if (this.forminfo['wpoint'] != null && this.inspectioninfo['instypename']) {
            this.createQRcode('#wqrcode', JSON.stringify(QRdata));
        }
        // 有质检点 && 质检未合格，轮询获取最新结果
        if (JSON.stringify(this.inspectioninfo) != '{}' && this.inspectioninfo['conformityname'] != 1) {
            this.timer = setInterval(function () {
                _this.initinspectionInfo();
            }, 2000);
        }
    };
    // 通知质检
    LmtagfileoverhaulPage.prototype.notifyToQC = function () {
    };
    // 数据记录
    LmtagfileoverhaulPage.prototype.openTechDataRecord = function () {
        this.navCtrl.push('LmtagfiletechdatarecordPage', {
            type: 'edit',
            id: this.id
        });
    };
    LmtagfileoverhaulPage.prototype.handleInspectionInfo = function (id) {
        this.navCtrl.push('LmtagqualityinspectioninfoPage', {
            type: 'edit',
            id: id
        });
    };
    // 初始化数据
    LmtagfileoverhaulPage.prototype.initinfo = function () {
        var _this = this;
        var url = "/lmtagFile/detail/" + this.id;
        this.httpService.get(url, null, function (result) {
            _this.master = result.data;
            _this.initlist(); // 工序
            _this.initModify();
            _this.initSparepartlist();
            // 明细
            _this.initTool();
            _this.initMaterial();
            _this.initSpare();
        });
    };
    LmtagfileoverhaulPage.prototype.initlist = function () {
        var _this = this;
        var url = "/lmtagFileWS/list?standardcode=" + this.id + "&sort=seqnum&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc";
        this.httpService.get(url, null, function (result) {
            if (result.records > 0) {
                _this.wslists = result.rows;
                _this.allStepCount = result.records;
                // 获取下一步未完成的步骤（过滤已完成的）
                if (_this.type == 'edit') {
                    _this.curStepIndex = result.rows.findIndex(function (item) { return item.ready != 1; });
                    if (_this.curStepIndex == -1) {
                        // 没找到未完成的工序，直接去完工报告
                        _this.navCtrl.push('LmtagfilecomplereportPage', {
                            id: _this.id
                        });
                        return false;
                    }
                }
                _this.forminfo = result.rows[_this.curStepIndex];
                console.log(_this.forminfo);
                _this.initQualityInspection();
                _this.httpService.inittime('readytime', _this.forminfo);
                // 当前是最后一步
                console.log(_this.curStepIndex);
                if (_this.curStepIndex + 1 == _this.allStepCount) {
                    $('page-lmtagfileoverhaul #saveBtn .button-inner').html('完成，填写完工报告');
                }
                else {
                    $('page-lmtagfileoverhaul #saveBtn .button-inner').html('完成，执行下一工序');
                }
            }
        });
    };
    LmtagfileoverhaulPage.prototype.initTool = function () {
        var _this = this;
        var url = "/lmtagFileTooldetail/list?standardcode=" + this.id + "&tooltype=tool&sort=seqnum&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc";
        this.httpService.get(url, null, function (result) {
            if (result.rows.length > 0) {
                _this.toollist = result.rows;
            }
        });
    };
    LmtagfileoverhaulPage.prototype.initSpare = function () {
        var _this = this;
        var url = "/lmtagFileMaterial/list?standardcode=" + this.id + "&materialtype=spare&sort=seqnum&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc";
        this.httpService.get(url, null, function (result) {
            if (result.rows.length > 0) {
                _this.sparelist = result.rows;
            }
        });
    };
    LmtagfileoverhaulPage.prototype.initMaterial = function () {
        var _this = this;
        var url = "/lmtagFileMaterial/list?standardcode=" + this.id + "&materialtype=material&sort=seqnum&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc";
        this.httpService.get(url, null, function (result) {
            if (result.rows.length > 0) {
                _this.materiallist = result.rows;
            }
        });
    };
    LmtagfileoverhaulPage.prototype.initModify = function () {
        var _this = this;
        var url = "/lmtagFileModify/list?fileid=" + this.id + "&sort=createtime&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc";
        this.httpService.get(url, null, function (result) {
            if (result.rows.length > 0) {
                _this.modifylist = result.rows;
                console.log("this.httpService.get  this.modifylist => ", _this.modifylist);
            }
        });
    };
    LmtagfileoverhaulPage.prototype.initSparepartlist = function () {
        var _this = this;
        var url = "/lmtagFileSparepart/list?standardcode=" + this.id + "&sort=seqnum&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc";
        this.httpService.get(url, null, function (result) {
            if (result.rows.length > 0) {
                _this.sparepartlist = result.rows;
            }
        });
    };
    LmtagfileoverhaulPage.prototype.initQualityInspection = function () {
        var _this = this;
        var url = "/lmtagQualityInspection/list3?fileid=" + this.id + "&sort=workseq&order=asc&_search=false&nd=1680859409359&rows=-1&page=1&sidx=&sord=asc";
        this.httpService.get(url, null, function (result) {
            if (result.rows.length > 0) {
                var filterArr = result.rows.filter(function (item) { return item.workseq == _this.forminfo['seqnum']; });
                if (filterArr.length > 0) {
                    _this.forminfo['inspectionid'] = filterArr[0]['inspectionid'];
                    _this.inspectioninfo = filterArr[0];
                    _this.initinspectionInfo();
                    // 执行结果已就绪，并有质检点，直接渲染二维码
                    if (_this.forminfo['ready'] == 1 && _this.inspectioninfo['instypename']) {
                        _this.renderQCqrcode();
                    }
                }
            }
        });
    };
    LmtagfileoverhaulPage.prototype.initcheckresultname = function (status) {
        var _this = this;
        this.httpService.getDictName('LM_TAG_INSPECTION_CHECK_RESULT', status, function (res) {
            if (res != '') {
                _this.inspectioninfo['checkresultname'] = res;
            }
        });
    };
    // 质检点信息
    LmtagfileoverhaulPage.prototype.initinspectionInfo = function () {
        var _this = this;
        var url = "/lmtagQualityInspection/detail/" + this.forminfo['inspectionid'];
        this.httpService.get(url, null, function (result) {
            if (result.code == 0) {
                _this.inspectioninfo['conformityname'] = result.data.conformityname;
                result.data.conformityname != '' && _this.initcheckresultname(result.data.conformityname);
                // 质检已合格
                if (result.data.conformityname == 1 && _this.timer != -1) {
                    clearInterval(_this.timer);
                    _this.timer = -1;
                    _this.toastCtrl.create({
                        position: 'bottom',
                        duration: 1500,
                        message: '质检点已合格',
                    }).present();
                }
            }
        });
    };
    LmtagfileoverhaulPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmtagfileoverhaul',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagfile/lmtagfileoverhaul/lmtagfileoverhaul.html"*/'<!--\n  Generated template for the LmtagfileoverhaulPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">检修工序、工艺及质量标准</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="formwarp lmform" style="margin-bottom: 120px;">\n    <div class="wrapper">\n      <form>\n        <div class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="content_folder" id="collapse1">\n            <div class="box">\n              <div id="overhaulstep" class="overhaul_step">\n                <span>检修工序</span>\n                <span>当前工序 <span class="curstep">{{ curStepIndex + 1 }}</span> </span>\n                <span>总工序 <span class="allstep">{{ allStepCount }}</span> </span>\n              </div>\n              <mform [formdata]="formdata" code="lmtagFile" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl" (chooseFromChild)="chooseitem($event)"></mform>\n            </div>\n          </div>\n        </div>\n        <div id="" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="content_folder" id="collapse1">\n            <div class="box">\n              <mform [formdata]="formdata2" code="lmtagFile" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl" (chooseFromChild)="chooseitem($event)"></mform>\n            </div>\n          </div>\n        </div>\n        <div id="" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="content_folder" id="collapse1">\n            <div class="box whpointbox">\n              <div class="wpoint" *ngIf="forminfo[\'wpoint\'] != null">\n                <div style="position: relative;">\n                  <ion-item >\n                    <ion-label style="color: #014886 !important;" (click)="handleInspectionInfo(forminfo.inspectionid)">{{ inspectioninfo[\'instypename\'] }}（{{ inspectioninfo[\'checkresultname\'] || \'待质检\' }}）</ion-label>\n                    <ion-toggle name="wpoint"\n                    [(ngModel)]="forminfo.wpoint" (ngModelChange)="radiorightclick($event, \'wpoint\')" color="secondary" item-end style="pointer-events: none;"></ion-toggle>\n                  </ion-item>\n                  <div class="imgbox">\n                    <img *ngIf="!forminfo.wpoint; else default" src="assets/imgs/lm/lmhome/selectedmark.svg" alt="">\n                    <ng-template #default>\n                      <img src="assets/imgs/lm/lmhome/selectedmark_active.svg" alt="">\n                  </ng-template>\n                  </div>\n                </div>\n                <div id="wqrcode" class="qrcode" style="display: none;"></div>\n              </div>\n              <div class="hpoint" *ngIf="forminfo[\'hpoint\'] != null">\n                <div style="position: relative;">\n                  <ion-item >\n                    <ion-label style="color: #014886 !important;" (click)="handleInspectionInfo(forminfo.inspectionid)">{{ inspectioninfo[\'instypename\'] }}（{{ inspectioninfo[\'checkresultname\'] || \'待质检\' }}）</ion-label>\n                    <ion-toggle name="hpoint"\n                    [(ngModel)]="forminfo.hpoint" (ngModelChange)="radiorightclick($event, \'hpoint\')" color="secondary" item-end style="pointer-events: none;"></ion-toggle>\n                  </ion-item>\n                  <div class="imgbox">\n                    <img *ngIf="!forminfo.hpoint; else default" src="assets/imgs/lm/lmhome/selectedmark.svg" alt="">\n                    <ng-template #default>\n                      <img src="assets/imgs/lm/lmhome/selectedmark_active.svg" alt="">\n                  </ng-template>\n                  </div>\n                </div>\n                <div id="hqrcode" class="qrcode" style="display: none;"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer id="ionFooter" *ngIf="!btnhide">\n  <ion-toolbar>\n    <div class="newformfooter">\n      <div class="footer-left">\n        <div (click)="openTechDataRecord()">\n          <img id="menulistImg" src="assets/imgs/lm/lmhome/jilu.png" alt="">\n          <span>数据记录</span>\n        </div>\n        <div (click)="notifyToQC()">\n          <img src="assets/imgs/lm/lmhome/jianchaxiang.png" alt="">\n          <span>通知质检</span>\n        </div>\n      </div>\n      <button class="footer-right" id="saveBtn" ion-button outline icon-start round (click)="submit()">\n        完成，执行下一步工序\n      </button>\n    </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagfile/lmtagfileoverhaul/lmtagfileoverhaul.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_workflow_service__["a" /* WorkflowServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_phone_device__["a" /* PhoneDeviceProvider */]])
    ], LmtagfileoverhaulPage);
    return LmtagfileoverhaulPage;
}());

//# sourceMappingURL=lmtagfileoverhaul.js.map

/***/ }),

/***/ 992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmtagfileoverhaulPageModule", function() { return LmtagfileoverhaulPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmtagfileoverhaul__ = __webpack_require__(1619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LmtagfileoverhaulPageModule = /** @class */ (function () {
    function LmtagfileoverhaulPageModule() {
    }
    LmtagfileoverhaulPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmtagfileoverhaul__["a" /* LmtagfileoverhaulPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmtagfileoverhaul__["a" /* LmtagfileoverhaulPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], LmtagfileoverhaulPageModule);
    return LmtagfileoverhaulPageModule;
}());

//# sourceMappingURL=lmtagfileoverhaul.module.js.map

/***/ })

});
//# sourceMappingURL=73.js.map