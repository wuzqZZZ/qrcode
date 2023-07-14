webpackJsonp([69],{

/***/ 1566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmtagfiletechdatarecordinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_phone_device__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Utils } from '../../../../../providers/Utils';


/**
 * Generated class for the LmtagfiletechdatarecordinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmtagfiletechdatarecordinfoPage = /** @class */ (function () {
    function LmtagfiletechdatarecordinfoPage(events, navCtrl, storage, navParams, httpService, phoneDevice, toastCtrl) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.httpService = httpService;
        this.phoneDevice = phoneDevice;
        this.toastCtrl = toastCtrl;
        this.formdata = [
            { 'name': '检修任务', 'index': 'projectname', 'type': 'text', 'placeholder': '请输入检修任务' },
            { 'name': '主要工作内容', 'index': 'projectdesc', 'type': 'textarea', 'placeholder': '请输入工作内容', 'disabled': true, 'autoheight': true },
        ];
        this.formdata2 = [
            { 'name': '测量人', 'index': 'measuremanname', 'type': 'selectUser', 'indexId': 'measureman', 'placeholder': '请输入测量人' },
            { 'name': '测量时间', 'index': 'measuretime', 'type': 'datetime', 'format': 'YYYY-MM-DD HH:mm:ss', 'placeholder': '请输入测量时间' },
            { 'name': '记录人', 'index': 'recordmanname', 'type': 'selectUser', 'indexId': 'recordman', 'placeholder': '请输入记录人' },
            { 'name': '记录时间', 'index': 'recordtime', 'type': 'datetime', 'format': 'YYYY-MM-DD HH:mm:ss', 'placeholder': '请输入记录时间' },
            { 'name': '审核人', 'index': 'auditmanname', 'type': 'selectUser', 'indexId': 'auditman', 'placeholder': '请输入审核人' },
            { 'name': '审核时间', 'index': 'audittime', 'type': 'datetime', 'format': 'YYYY-MM-DD HH:mm:ss', 'placeholder': '请输入审核时间' },
        ];
        this.tassetid = '';
        this.fileid = '';
        this.forminfo = {};
        this.fileinfo = {};
        this.projectinfo = {};
        this.techdatalists = [];
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
        this.tassetid = this.navParams.get('tassetid'); // 技术数据设备id
        this.fileid = this.navParams.get('fileid'); // 文件包id
    }
    LmtagfiletechdatarecordinfoPage.prototype.ionViewWillEnter = function () {
        this.initinfo();
    };
    LmtagfiletechdatarecordinfoPage.prototype.initinfo = function () {
        var _this = this;
        var url = "/lmtagTechAsset/detail/" + this.tassetid;
        this.httpService.get(url, null, function (result) {
            _this.forminfo = result.data;
            _this.httpService.inittime('measuretime', _this.forminfo);
            _this.httpService.inittime('recordtime', _this.forminfo);
            _this.httpService.inittime('audittime', _this.forminfo);
            _this.httpService.initUserName(_this.forminfo['measureman'], 'measuremanname', _this.forminfo);
            _this.httpService.initUserName(_this.forminfo['recordman'], 'recordmanname', _this.forminfo);
            _this.httpService.initUserName(_this.forminfo['auditman'], 'auditmanname', _this.forminfo);
            _this.initlist();
            _this.initfileinfo();
            var qrdata = {
                type: 'lmtagfiletechdatarecord',
                text: '测试'
            };
            _this.createQRcode('#assetQRcode', JSON.stringify(qrdata));
        });
    };
    LmtagfiletechdatarecordinfoPage.prototype.initlist = function () {
        var _this = this;
        var url = "/lmtagTechData/list?bussid=" + this.tassetid + '&sort=seqnum&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc';
        this.httpService.get(url, null, function (result) {
            _this.techdatalists = result.rows;
        });
    };
    LmtagfiletechdatarecordinfoPage.prototype.initfileinfo = function () {
        var _this = this;
        var url = "/lmtagFile/detail/" + this.fileid;
        this.httpService.get(url, null, function (result) {
            if (result.code == 0) {
                _this.fileinfo = result.data;
                _this.initprojectinfo();
            }
        });
    };
    LmtagfiletechdatarecordinfoPage.prototype.initprojectinfo = function () {
        var _this = this;
        var url = "/lmtagProject/detail/" + this.fileinfo['prjid'];
        this.httpService.get(url, null, function (result) {
            if (result.code == 0) {
                _this.fileinfo['projectdesc'] = result.data['projectdesc'];
            }
        });
    };
    LmtagfiletechdatarecordinfoPage.prototype.submit = function () {
        var _this = this;
        this.submitTechReadyState();
        this.httpService.initsavetime('measuretime', this.forminfo);
        this.httpService.initsavetime('recordtime', this.forminfo);
        this.httpService.initsavetime('audittime', this.forminfo);
        var obj = {
            master: this.forminfo
        };
        this.httpService.post('/lmtag/lmtagTechAssetService/saveMasterSlave', obj, function (res) {
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
    };
    // 保存测量点填报结果
    LmtagfiletechdatarecordinfoPage.prototype.submitTechReadyState = function () {
        var _this = this;
        console.log(this.techdatalists);
        for (var i = 0; i < this.techdatalists.length; i++) {
            var item = this.techdatalists[i];
            var obj = {
                master: item
            };
            this.httpService.post('/lmtag/lmtagTechDataService/saveMasterSlave', obj, function (res) {
                if (res.code == 0) {
                    // ...
                }
                else {
                    _this.toastCtrl.create({
                        position: 'bottom',
                        duration: 1500,
                        message: '保存失败',
                    }).present();
                }
            });
        }
    };
    LmtagfiletechdatarecordinfoPage.prototype.collapseClick = function (index) {
        $('page-lmtagfiletechdatarecordinfo #collapse' + index).toggle();
        $('page-lmtagfiletechdatarecordinfo .collapse_show_icon' + index).toggle();
        $('page-lmtagfiletechdatarecordinfo .collapse_hide_icon' + index).toggle();
    };
    LmtagfiletechdatarecordinfoPage.prototype.radiorightclick = function (e, index, key) {
        if (e) {
            this.techdatalists[index][key] = 1;
        }
        else {
            this.techdatalists[index][key] = 0;
        }
        console.log(this.techdatalists[index][key]);
    };
    LmtagfiletechdatarecordinfoPage.prototype.showscanner = function () {
        this.navCtrl.push('ScannerPage', { 'type': 'lmtagTechData' }, { "animate": false });
    };
    LmtagfiletechdatarecordinfoPage.prototype.planmore = function () {
        var _this = this;
        this.navCtrl.push('LmtagworkorderplanbaseinfoPage', {
            type: 'edit',
            prjid: this.fileinfo['prjid']
        });
        this.events.subscribe('workorderplanbase:forminfo', function (data, time) {
            _this.forminfo = data;
            console.log('subscribe => ', _this.forminfo);
            _this.events.unsubscribe('workorderplan:forminfo');
        });
    };
    LmtagfiletechdatarecordinfoPage.prototype.handleOpenDetail = function (id) {
        this.navCtrl.push('LmtagfiletechdatarecorddetailPage', {
            type: 'edit',
            id: id,
            forminfo: this.forminfo
        });
    };
    LmtagfiletechdatarecordinfoPage.prototype.createQRcode = function (selector, text) {
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
    LmtagfiletechdatarecordinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmtagfiletechdatarecordinfo',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagfile/lmtagfiletechdatarecord/lmtagfiletechdatarecordinfo/lmtagfiletechdatarecordinfo.html"*/'<!--\n  Generated template for the LmtagfiletechdatarecordinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">技术数据记录</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="formwarp lmform" style="margin-bottom: 120px;">\n    <div class="wrapper">\n      <form>\n        <div id="baseinfo" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="header_folder" (click)="collapseClick(1)">\n            <div class="header__title myclass">基本信息</div>\n            <div class="header__icon">\n              <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n              <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n            </div>\n          </div>\n          <div class="content_folder" id="collapse1">\n            <div class="box">\n              <mform [formdata]="formdata" code="lmtagFile" [formVal] = "fileinfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl" (chooseFromChild)="chooseitem($event)"></mform>\n              <div class="detailinfo"  (click)="planmore()">详细</div>\n            </div>\n          </div>\n        </div>\n        <div id="" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="content_folder" id="collapse1">\n            <div class="box cslist nolink">\n              <ion-item class="cstitle">\n                <ion-note item-start>{{ forminfo[\'assetname\'] }}</ion-note>\n              </ion-item>\n              <div class="qrcodeBox">\n                <div id="assetQRcode"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div id="technicalDataRecord" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="content_folder" id="collapse1">\n            <div class="box cslist">\n              <ion-item class="cstitle">\n                <ion-note item-start class="tcenter" style="width: 10%;">序号</ion-note>\n                <ion-note item-start style="flex: 1;">测量点名称</ion-note>\n                <ion-note item-start class="tcenter" style="width: 20%;">填报结果</ion-note>\n              </ion-item>\n              <div class="csitem" *ngFor="let tech of techdatalists; let i = index">\n                <ion-item>\n                  <ion-note item-start class="tcenter" style="width: 10%;">{{ i+1 }}</ion-note>\n                  <ion-note item-start class="tover" style="flex: 1;" (click)="handleOpenDetail(tech.dataid)"> {{ tech?.measurename }}</ion-note>\n                  <ion-note item-start class="tcenter opacity0" style="width: 20%;">\n                    <ion-toggle name="ready"\n                    [(ngModel)]="tech.ready" (ngModelChange)="radiorightclick($event, i, \'ready\')" color="secondary" item-end style="width: 20%;"></ion-toggle>\n                  </ion-note>\n                </ion-item>\n                <div class="imgbox">\n                  <img *ngIf="tech.ready == 0 || tech.ready == null; else default" src="assets/imgs/lm/lmhome/selectedmark.svg" alt="">\n                  <ng-template #default>\n                    <img src="assets/imgs/lm/lmhome/selectedmark_active.svg" alt="">\n                  </ng-template>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div id="" class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="header_folder" (click)="collapseClick(4)">\n            <div class="header__title myclass">过程记录</div>\n            <div class="header__icon">\n              <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n              <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n            </div>\n          </div>\n          <div class="content_folder" id="collapse4">\n            <div class="box">\n              <mform [formdata]="formdata2" code="lmtagTechAsset" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl" (chooseFromChild)="chooseitem($event)"></mform>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</ion-content>\n\n\n<ion-footer id="ionFooter" *ngIf="!btnhide">\n  <ion-toolbar>\n    <div class="newformfooter">\n      <div class="footer-left">\n        <div (click)="showscanner()">\n          <img src="assets/imgs/lm/lmhome/saoma.png" alt="">\n          <span>扫码</span>\n        </div>\n        <div (click)="submit()">\n          <img src="assets/imgs/lm/lmhome/saveform.svg" alt="">\n          <span>保存</span>\n        </div>\n      </div>\n      <button class="footer-right" id="saveBtn" ion-button outline icon-start round (click)="send()">\n        发送\n      </button>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagfile/lmtagfiletechdatarecord/lmtagfiletechdatarecordinfo/lmtagfiletechdatarecordinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_phone_device__["a" /* PhoneDeviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */]])
    ], LmtagfiletechdatarecordinfoPage);
    return LmtagfiletechdatarecordinfoPage;
}());

//# sourceMappingURL=lmtagfiletechdatarecordinfo.js.map

/***/ }),

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmtagfiletechdatarecordinfoPageModule", function() { return LmtagfiletechdatarecordinfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmtagfiletechdatarecordinfo__ = __webpack_require__(1566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LmtagfiletechdatarecordinfoPageModule = /** @class */ (function () {
    function LmtagfiletechdatarecordinfoPageModule() {
    }
    LmtagfiletechdatarecordinfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmtagfiletechdatarecordinfo__["a" /* LmtagfiletechdatarecordinfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmtagfiletechdatarecordinfo__["a" /* LmtagfiletechdatarecordinfoPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], LmtagfiletechdatarecordinfoPageModule);
    return LmtagfiletechdatarecordinfoPageModule;
}());

//# sourceMappingURL=lmtagfiletechdatarecordinfo.module.js.map

/***/ })

});
//# sourceMappingURL=69.js.map