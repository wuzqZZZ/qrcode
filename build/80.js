webpackJsonp([80],{

/***/ 1558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmsiteinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tools__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_workflow_service__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_Utils__ = __webpack_require__(192);
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
 * Generated class for the LmsiteinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmsiteinfoPage = /** @class */ (function () {
    function LmsiteinfoPage(events, storage, navCtrl, toastCtrl, navParams, httpService, workflow, tools, phoneDevice) {
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
            { 'name': '检修阶段', 'index': 'stage', 'type': 'select', 'dicttype': 'LMPJ_PROJECT_STAGE', 'placeholder': '请选择检修阶段' },
            { 'name': '文件类型', 'index': 'filetype', 'type': 'select', 'dicttype': 'LMTAG_INTERACTIVE_FILETYPE', 'placeholder': '请输入文件类型' },
            { 'name': '说明', 'index': 'description', 'type': 'textarea', 'placeholder': '请输入工作内容' },
            { 'name': '附件', 'index': 'interactiveid', 'type': 'uploadify', 'placeholder': '', 'busstype': 'lmtagInteractive' },
        ];
        this.formdata2 = [
            { 'name': '填报人', 'index': 'creatername', 'indexId': 'creater', 'type': 'selectUser', 'placeholder': '请选择填报人' },
            { 'name': '填报时间', 'index': 'createtime', 'type': 'datetime', 'placeholder': '填报时间', 'format': 'YYYY-MM-DD HH:mm:ss' },
            { 'name': '发布人', 'index': 'uploadername', 'indexId': 'uploader', 'type': 'selectUser', 'placeholder': '请选择发布人' },
            { 'name': '发布时间', 'index': 'uploadtime', 'type': 'datetime', 'placeholder': '发布时间', 'format': 'YYYY-MM-DD HH:mm:ss' },
        ];
        this.id = "";
        this.type = "";
        this.forminfo = {};
        this.pageControl = {};
        this.projectid = '';
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
        this.id = this.navParams.get('interactiveid');
        this.type = this.navParams.get('type');
        this.projectid = this.storage.get(__WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */].LM_PROJECTID);
        if (this.type == 'edit') {
            this.initinfo();
        }
        else {
            this.id = __WEBPACK_IMPORTED_MODULE_7__providers_Utils__["a" /* Utils */].getUuid();
            var userinfo = this.storage.get(__WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */].ME_USERINFO); //读取登录人的储存信息
            this.forminfo = {
                interactiveid: this.id,
                projectid: this.projectid,
                wfstatus: 'NEW',
                uploader: userinfo.id,
                uploadtime: __WEBPACK_IMPORTED_MODULE_7__providers_Utils__["a" /* Utils */].dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss')
            };
            this.initprojectinfo();
        }
    }
    LmsiteinfoPage.prototype.ionViewWillEnter = function () {
    };
    LmsiteinfoPage.prototype.initinfo = function () {
        var _this = this;
        var url = "/lmtagInteractive/detail/" + this.id;
        this.httpService.get(url, null, function (result) {
            if (result.code == 0) {
                _this.forminfo = result.data;
                console.log('------', _this.forminfo);
                _this.httpService.initUserName(result.data.creater, 'creatername', _this.forminfo);
                _this.httpService.initUserName(result.data.uploader, 'uploadername', _this.forminfo);
                _this.httpService.inittime('createtime', _this.forminfo);
                _this.httpService.inittime('uploadtime', _this.forminfo);
            }
        });
    };
    LmsiteinfoPage.prototype.initprojectinfo = function () {
        var _this = this;
        var url = '/lmpjProject/findProjectMessage?id=' + this.projectid;
        this.httpService.get(url, null, function (result) {
            if (result.code == 0) {
                _this.forminfo['stage'] = result.data.pjstage;
                console.log('------', result.data.pjstage);
            }
        });
    };
    LmsiteinfoPage.prototype.submit = function () {
        var _this = this;
        if (this.type == 'edit') {
            this.httpService.initsavetime('createtime', this.forminfo);
            this.httpService.initsavetime('uploadtime', this.forminfo);
        }
        var url = '/lmtagInteractive/save';
        this.httpService.postform(url, 'lmtagInteractive', this.forminfo, function (res) {
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
    LmsiteinfoPage.prototype.workflowStart = function () {
        // this.saveStr = "true";
        this.submit();
        if (this.forminfo['wfid'] != "" && this.forminfo['wfid'] != null) {
            this.navCtrl.push('WorkflowroutePage', { 'busstype': 'lmtagInteractive', 'bussid': this.forminfo['interactiveid'], 'wfid': this.forminfo['wfid'] });
        }
        else {
            //发送流程
            this.navCtrl.push('WorkflowstartPage', { 'busstype': 'lmtagInteractive', 'bussid': this.forminfo['interactiveid'] });
        }
    };
    LmsiteinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmsiteinfo',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmsite/lmsiteinfo/lmsiteinfo.html"*/'<!--\n  Generated template for the LmsiteinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">现场直击</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="formwarp lmform" style="margin-bottom: 120px;">\n    <div class="wrapper">\n      <form>\n        <div class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="header_folder" (click)="collapseClick(1)">\n            <div class="header__title myclass">基本信息</div>\n            <div class="header__icon">\n              <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n              <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n            </div>\n          </div>\n          <div class="content_folder" id="collapse1">\n            <div class="box">\n              <mform [formdata]="formdata" code="lmtagWorkorder" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl" (chooseFromChild)="chooseitem($event)"></mform>\n            </div>\n          </div>\n        </div>\n        <div class="container" style="margin-top:10px;margin-bottom:0;">\n          <div class="header_folder" (click)="collapseClick(1)">\n            <div class="header__title myclass">相关信息</div>\n            <div class="header__icon">\n              <span class="collapse_hide_icon1" style="display: none;"><ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n              <span class="collapse_show_icon1"><ion-icon name="ios-arrow-up-outline" ></ion-icon></span>\n            </div>\n          </div>\n          <div class="content_folder" id="collapse1">\n            <div class="box">\n              <mform [formdata]="formdata2" code="lmtagWorkorder" [formVal] = "forminfo" [id]="id" indexId=\'true\' [navCtrl]="navCtrl" (chooseFromChild)="chooseitem($event)"></mform>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer id="ionFooter" *ngIf="!btnhide">\n  <ion-toolbar>\n    <div class="newformfooter">\n      <div class="footer-left">\n        <div (click)="submit()">\n          <img src="assets/imgs/lm/lmhome/saveform.svg" alt="">\n          <span>保存</span>\n        </div>\n      </div>\n      <button class="footer-right" id="saveBtn" ion-button outline icon-start round (click)="workflowStart()">\n        发送\n      </button>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmsite/lmsiteinfo/lmsiteinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_workflow_service__["a" /* WorkflowServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__["a" /* PhoneDeviceProvider */]])
    ], LmsiteinfoPage);
    return LmsiteinfoPage;
}());

//# sourceMappingURL=lmsiteinfo.js.map

/***/ }),

/***/ 933:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmsiteinfoPageModule", function() { return LmsiteinfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmsiteinfo__ = __webpack_require__(1558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LmsiteinfoPageModule = /** @class */ (function () {
    function LmsiteinfoPageModule() {
    }
    LmsiteinfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmsiteinfo__["a" /* LmsiteinfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmsiteinfo__["a" /* LmsiteinfoPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], LmsiteinfoPageModule);
    return LmsiteinfoPageModule;
}());

//# sourceMappingURL=lmsiteinfo.module.js.map

/***/ })

});
//# sourceMappingURL=80.js.map