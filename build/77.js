webpackJsonp([77],{

/***/ 1618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmtagfilecomplereportPage; });
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
 * Generated class for the LmtagfilecomplereportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmtagfilecomplereportPage = /** @class */ (function () {
    function LmtagfilecomplereportPage(events, storage, navCtrl, toastCtrl, navParams, httpService, workflow, tools, phoneDevice) {
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
            // { 'name': '开工时间', 'index': 'starttime', 'type': 'datetime', 'format': 'YYYY-MM-DD HH:mm:ss' },
            { 'name': '完工时间', 'index': 'endtime', 'type': 'datetime', 'format': 'YYYY-MM-DD', 'placeholder': '请输入完工时间' },
            { 'name': '实际工期（工日）', 'index': 'realtime', 'type': 'text', 'placeholder': '请输入实际工期（工日）' },
            { 'name': '计划偏差率', 'index': 'difftime', 'type': 'text', 'placeholder': '请输入计划偏差率' },
            { 'name': '实际工时(人日)', 'index': 'realworkhour', 'type': 'text', 'placeholder': '请输入实际工时' },
            { 'name': '工时成本(万元)', 'index': 'allpersonprice', 'type': 'text', 'placeholder': '请输入工时成本' },
            { 'name': '备件成本(万元)', 'index': 'allmaterialprice', 'type': 'text', 'placeholder': '请输入物料成本' },
            { 'name': '总成本(万元)', 'index': 'allprice', 'type': 'text', 'placeholder': '请输入总成本' },
            { 'name': '完工说明', 'index': 'description12', 'type': 'textarea', 'placeholder': '请输入完工说明' },
            { 'name': '附件', 'index': 'wghbfile', 'type': 'uploadify', 'placeholder': '', 'busstype': 'lmtagFile' },
        ];
        this.formdata2 = [
            { 'name': '设备信息收集', 'index': 'description4', 'type': 'textarea', 'placeholder': '请输入设备信息收集' },
            { 'name': '修前情况', 'index': 'description5', 'type': 'textarea', 'placeholder': '请输入修前情况' },
            { 'name': '检修情况', 'index': 'description6', 'type': 'textarea', 'placeholder': '请输入检修情况' },
            { 'name': '发现的主要缺陷及处理情况', 'index': 'description7', 'type': 'textarea', 'placeholder': '请输入发现的主要缺陷及处理情况' },
            { 'name': '遗留问题及采取措施', 'index': 'description8', 'type': 'textarea', 'placeholder': '请输入遗留问题及采取措施' },
            { 'name': '异动情况', 'index': 'description9', 'type': 'textarea', 'placeholder': '请输入异动情况' },
            { 'name': '让步接受情况', 'index': 'description10', 'type': 'textarea', 'placeholder': '请输入让步接受情况' },
            { 'name': '修后总体评价', 'index': 'evaluationresult', 'type': 'select', 'dicttype': 'LMTAG_WORKORDER_EVALRESULT' },
        ];
        this.formdata3 = [
            { 'name': '检修工作负责人', 'index': 'test1', 'type': 'text', 'placeholder': '请输入设备信息收集' },
            { 'name': '专业工程师', 'index': 'test2', 'type': 'text', 'placeholder': '请输入修前情况' },
        ];
        this.sparePartslists = [];
        this.wslists = [];
        this.toollist = [];
        this.sparelist = [];
        this.modifylist = [];
        this.materiallist = [];
        this.curStepIndex = 0;
        this.id = '';
        this.prjid = '';
        this.forminfo = {};
        this.projectinfo = {};
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
        this.id = this.navParams.get('id');
        // this.prjid = this.navParams.get('prjid');
    }
    LmtagfilecomplereportPage.prototype.ionViewWillEnter = function () {
        this.initinfo();
    };
    LmtagfilecomplereportPage.prototype.radiorightclick = function (e, index) {
        if (e) {
            this.forminfo[index] = 1;
        }
        else {
            this.forminfo[index] = 0;
        }
        console.log(this.forminfo);
    };
    LmtagfilecomplereportPage.prototype.initinfo = function () {
        var _this = this;
        var url = "/lmtagFile/detail/" + this.id;
        this.httpService.get(url, null, function (result) {
            _this.forminfo = result.data;
            // this.forminfo['starttime'] && this.httpService.inittime('starttime', this.forminfo)
            _this.httpService.inittime('endtime', _this.forminfo);
            // 自动计算工期，完工-开工
            if (_this.forminfo['realtime'] == '' || _this.forminfo['realtime'] == null) {
                _this.initprojectinfo();
            }
            // 自动带入完工时间
            if (_this.forminfo['endtime'] == '' || _this.forminfo['endtime'] == null) {
                _this.forminfo['endtime'] = __WEBPACK_IMPORTED_MODULE_3__providers_Utils__["a" /* Utils */].dateFormat(new Date(), 'yyyy-MM-dd');
                _this.httpService.inittime('endtime', _this.forminfo);
            }
            _this.initWSlist(); // 工序
            _this.initModify();
            _this.initSparepart();
            // 明细
            _this.initTool();
            _this.initMaterial();
            _this.initSpare();
            var qrdata = {
                type: 'signperson',
                text: '测试签名'
            };
            _this.createQrcodeSignBtn('test1', '章三', qrdata);
            _this.createQrcodeSignBtn('test2', '李四', qrdata);
        });
    };
    LmtagfilecomplereportPage.prototype.initprojectinfo = function () {
        var _this = this;
        var url = "/lmtagProject/detail/" + this.forminfo['prjid'];
        this.httpService.get(url, null, function (result) {
            if (result.code == 0) {
                var _a = result.data, planstarttime = _a.planstarttime, planendtime = _a.planendtime;
                _this.forminfo['realtime'] = Math.ceil((+new Date(planendtime) - +new Date(planstarttime)) / 86400000);
            }
        });
    };
    LmtagfilecomplereportPage.prototype.initSparepart = function () {
        var _this = this;
        var url = '/lmtagFileSparepart/list?standardcode=' + this.id + '&sort=seqnum&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc';
        this.httpService.get(url, null, function (result) {
            _this.sparePartslists = result.rows;
        });
    };
    // 数值加减按钮
    LmtagfilecomplereportPage.prototype.handleValueChange = function (operator, index, key) {
        if (operator == '+') {
            if (this.sparePartslists[index]['num'] == this.sparePartslists[index][key]) {
                return false;
            }
            this.sparePartslists[index][key]++;
        }
        else if (operator == '-') {
            if (this.sparePartslists[index][key] == 0) {
                return false;
            }
            this.sparePartslists[index][key]--;
        }
    };
    LmtagfilecomplereportPage.prototype.submit = function () {
        var _this = this;
        if (this.tools.initform(this.formdata, this.forminfo) && this.tools.initform(this.formdata2, this.forminfo)) {
            this.httpService.initsavetime('endtime', this.forminfo);
            var obj = {
                master: this.forminfo,
                lmtagFileMaterialService: this.materiallist.concat(this.sparelist),
                lmtagFileModifyService: this.modifylist,
                lmtagFileSparepartService: this.sparePartslists,
                lmtagFileTooldetailService: this.toollist,
                lmtagFileWSService: this.wslists,
            };
            this.httpService.post('/lmtag/lmtagFileService/saveMasterSlave', obj, function (res) {
                if (res.code == 0) {
                    _this.toastCtrl.create({
                        position: 'bottom',
                        duration: 1500,
                        message: '保存成功',
                    }).present();
                    _this.initinfo();
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
    LmtagfilecomplereportPage.prototype.createQrcodeSignBtn = function (eId, value, qrdata) {
        var _this = this;
        if (eId != null && value != '' && qrdata != null) {
            $('#_' + eId).html('<a id="sign_' + eId + '" style="width: max-content;color: #084a84;float:right; ">签名</a>');
            $('#sign_' + eId).click(function () {
                _this.createQRcode('#signQRcode', qrdata);
                $('#signQRcodeBox').show();
            });
            return false;
        }
    };
    // openSignQRcode(data) {
    //   this.createQRcode('#signQRcode', data);
    //   $('#signQRcodeBox').show();
    // }
    LmtagfilecomplereportPage.prototype.closeSignQRcode = function () {
        $('#signQRcodeBox').hide();
    };
    LmtagfilecomplereportPage.prototype.createQRcode = function (selector, text) {
        // console.log(`createQRcode  selector, text => `, selector, text)
        var h = $(selector).height();
        var w = $(selector).width();
        $(selector).html('');
        var qrcode = new QRCode($(selector)[0], {
            text: text,
            width: w,
            height: h,
            correctLevel: QRCode.CorrectLevel.H,
            src: 'assets/lm/lmhome/qrcode_logo.png'
        });
    };
    LmtagfilecomplereportPage.prototype.workflowStart = function () {
        if (this.submit() != false) {
            if (this.forminfo['wfid'] != "" && this.forminfo['wfid'] != null) {
                this.navCtrl.push('WorkflowroutePage', { 'busstype': 'lmtagFile', 'bussid': this.id, 'wfid': this.forminfo['wfid'] });
            }
            else {
                //发送流程
                this.navCtrl.push('WorkflowstartPage', { 'busstype': 'lmtagFile', 'bussid': this.id });
            }
        }
    };
    LmtagfilecomplereportPage.prototype.initWSlist = function () {
        var _this = this;
        var url = "/lmtagFileWS/list?standardcode=" + this.id + "&sort=seqnum&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc";
        this.httpService.get(url, null, function (result) {
            if (result.records > 0) {
                _this.wslists = result.rows;
            }
        });
    };
    LmtagfilecomplereportPage.prototype.initTool = function () {
        var _this = this;
        var url = "/lmtagFileTooldetail/list?standardcode=" + this.id + "&tooltype=tool&sort=seqnum&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc";
        this.httpService.get(url, null, function (result) {
            if (result.rows.length > 0) {
                _this.toollist = result.rows;
            }
        });
    };
    LmtagfilecomplereportPage.prototype.initSpare = function () {
        var _this = this;
        var url = "/lmtagFileMaterial/list?standardcode=" + this.id + "&materialtype=spare&sort=seqnum&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc";
        this.httpService.get(url, null, function (result) {
            if (result.rows.length > 0) {
                _this.sparelist = result.rows;
            }
        });
    };
    LmtagfilecomplereportPage.prototype.initMaterial = function () {
        var _this = this;
        var url = "/lmtagFileMaterial/list?standardcode=" + this.id + "&materialtype=material&sort=seqnum&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc";
        this.httpService.get(url, null, function (result) {
            if (result.rows.length > 0) {
                _this.materiallist = result.rows;
            }
        });
    };
    LmtagfilecomplereportPage.prototype.initModify = function () {
        var _this = this;
        var url = "/lmtagFileModify/list?fileid=" + this.id + "&sort=createtime&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc";
        this.httpService.get(url, null, function (result) {
            if (result.rows.length > 0) {
                _this.modifylist = result.rows;
                console.log("this.httpService.get  this.modifylist => ", _this.modifylist);
            }
        });
    };
    LmtagfilecomplereportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmtagfilecomplereport',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagfile/lmtagfilecomplereport/lmtagfilecomplereport.html"*/'<!--\n  Generated template for the LmtagfilecomplereportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">完工报告</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="formwarp lmform" style="margin-bottom: 120px;position: relative;">\n    <div class="wrapper">\n      <form>\n        <div id="" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="header_folder" (click)="collapseClick(1)">\n            <div class="header__title myclass">完工汇报</div>\n            <div class="header__icon">\n              <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n              <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n            </div>\n          </div>\n          <div class="content_folder" id="collapse1">\n            <div class="box">\n              <mform [formdata]="formdata" code="lmtagFile" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl" (chooseFromChild)="chooseitem($event)"></mform>\n            </div>\n          </div>\n        </div>\n        <div id="" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="header_folder" (click)="collapseClick(1)">\n            <div class="header__title myclass">备件消耗统计</div>\n            <div class="header__icon">\n              <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n              <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n            </div>\n          </div>\n          <div class="content_folder" id="collapse1">\n            <div class="box">\n              <div class="box cslist">\n                <ion-item class="cstitle">\n                  <ion-note item-start class="" style="flex: 1;">备件名称</ion-note>\n                  <ion-note item-start class="tcenter" style="width: 20%;">领用数量</ion-note>\n                  <ion-note item-start class="tcenter" style="width: 24%;">消耗数量</ion-note>\n                </ion-item>\n                <div class="csitem" *ngFor="let sparePart of sparePartslists;let i = index">\n                  <ion-item>\n                    <ion-note item-start class="" style="flex: 1;">\n                      {{ sparePart.name }}\n                    </ion-note>\n                    <ion-note item-start class="tcenter" style="width: 20%;">{{ sparePart.num }}</ion-note>\n                    <ion-note item-start class="tcenter" style="width: 24%;">\n                      <button (click)="handleValueChange(\'+\', i, \'consume\')">+</button>\n                      <span style="margin: 0 .4rem;">{{ sparePart.consume }}</span>\n                      <button (click)="handleValueChange(\'-\', i, \'consume\')">-</button>\n                    </ion-note>\n                  </ion-item>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div id="" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="header_folder" (click)="collapseClick(2)">\n            <div class="header__title myclass">完工明细</div>\n            <div class="header__icon">\n              <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n              <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n            </div>\n          </div>\n          <div class="content_folder" id="collapse2">\n            <div class="box">\n              <mform [formdata]="formdata2" code="lmtagFile" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl" (chooseFromChild)="chooseitem($event)"></mform>\n            </div>\n          </div>\n        </div>\n        <div id="" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="header_folder" (click)="collapseClick(3)">\n            <div class="header__title myclass">签字</div>\n            <div class="header__icon">\n              <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n              <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n            </div>\n          </div>\n          <div class="content_folder" id="collapse3">\n            <div class="box">\n              <!-- <ion-item >\n                <ion-label>检修工作负责人</ion-label>\n                <ion-label style="text-align: right;color: #014886 !important;" (click)="openSignQRcode(\'李四\')">李四</ion-label>\n              </ion-item>\n              <ion-item >\n                <ion-label>专业工程师</ion-label>\n                <ion-label style="text-align: right;color: #014886 !important;" (click)="openSignQRcode(\'章三\')">章三</ion-label>\n              </ion-item> -->\n              <mform [formdata]="formdata3" code="lmtagFile" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl" (chooseFromChild)="chooseitem($event)"></mform>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class="mark"></div>\n</ion-content>\n\n<ion-footer id="ionFooter" *ngIf="!btnhide">\n  <!-- 签名 -->\n  <div id="signQRcodeBox" class="qrcode">\n    <div class="closebtn" (click)="closeSignQRcode()">x</div>\n    <div class="qrcodeTitle">扫码签名</div>\n    <div id="signQRcode"></div>\n  </div>\n  <ion-toolbar>\n    <div class="newformfooter">\n      <div class="footer-left">\n        <div (click)="submit()">\n          <img src="assets/imgs/lm/lmhome/saveform.svg" alt="">\n          <span>保存</span>\n        </div>\n      </div>\n      <button class="footer-right" id="saveBtn" ion-button outline icon-start round (click)="workflowStart()">\n        保存并确认\n      </button>\n    </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagfile/lmtagfilecomplereport/lmtagfilecomplereport.html"*/,
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
    ], LmtagfilecomplereportPage);
    return LmtagfilecomplereportPage;
}());

//# sourceMappingURL=lmtagfilecomplereport.js.map

/***/ }),

/***/ 991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmtagfilecomplereportPageModule", function() { return LmtagfilecomplereportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmtagfilecomplereport__ = __webpack_require__(1618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LmtagfilecomplereportPageModule = /** @class */ (function () {
    function LmtagfilecomplereportPageModule() {
    }
    LmtagfilecomplereportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmtagfilecomplereport__["a" /* LmtagfilecomplereportPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmtagfilecomplereport__["a" /* LmtagfilecomplereportPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], LmtagfilecomplereportPageModule);
    return LmtagfilecomplereportPageModule;
}());

//# sourceMappingURL=lmtagfilecomplereport.module.js.map

/***/ })

});
//# sourceMappingURL=77.js.map