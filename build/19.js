webpackJsonp([19],{

/***/ 1607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowstartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_workflow_service__ = __webpack_require__(426);
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
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WorkflowstartPage = /** @class */ (function () {
    function WorkflowstartPage(navCtrl, navParams, toastCtrl, httpService, workflow, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.httpService = httpService;
        this.workflow = workflow;
        this.events = events;
        this.workflowinfo = {};
        this.memo = '';
        this.falg = false;
    }
    WorkflowstartPage.prototype.ionViewWillEnter = function () {
        this.bussid = this.navParams.get("bussid");
        this.busstype = this.navParams.get("busstype");
        this.workflowinfo['memo'] = '';
    };
    WorkflowstartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StartPage');
    };
    WorkflowstartPage.prototype.startAndSenf = function () {
        var _this = this;
        this.falg = true;
        this.workflowinfo['memo'] = this.memo;
        var url = '/workflow/startAndSenf/' + this.busstype + '/' + this.bussid;
        this.httpService.postform(url, null, this.workflowinfo, function (result) {
            var toast = null;
            if (result.code == 0) {
                console.log('发送成功');
                toast = _this.toastCtrl.create({
                    message: result.message,
                    duration: 1000,
                    position: 'middle'
                });
            }
            else {
                console.log('发送失败');
                toast = _this.toastCtrl.create({
                    message: result.message,
                    duration: 1000,
                    position: 'middle'
                });
            }
            toast.present();
            _this.navCtrl.pop();
            _this.events.publish('workflowPage', true, Date.now());
            // 
        });
    };
    WorkflowstartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-workflowstart',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/workflow/activiti/workflowstart/workflowstart.html"*/'<!--\n  Generated template for the StartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">发送工作流</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-grid text-center>\n    <!-- <ion-list>\n      <ion-item style=" border-bottom:0 !important">\n        <span>备注</span><a></a>\n      </ion-item>\n    </ion-list> -->\n    <textarea  [(ngModel)]="memo" placeholder="请输入备注" style="border: 0px; \n  outline:none;\n  cursor: pointer;\n  height: 150px;\n  width: 100%;\n  padding-left: 16px;" ></textarea>\n  </ion-grid>\n  <button id="startAndSenf"  [disabled]="falg" ion-button full round class="button button-clear pull-center" color="primary"  (click)="startAndSenf()" >发送</button>\n</ion-content>\n\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/workflow/activiti/workflowstart/workflowstart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_workflow_service__["a" /* WorkflowServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], WorkflowstartPage);
    return WorkflowstartPage;
}());

//# sourceMappingURL=workflowstart.js.map

/***/ }),

/***/ 980:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowstartPageModule", function() { return WorkflowstartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workflowstart__ = __webpack_require__(1607);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WorkflowstartPageModule = /** @class */ (function () {
    function WorkflowstartPageModule() {
    }
    WorkflowstartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__workflowstart__["a" /* WorkflowstartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__workflowstart__["a" /* WorkflowstartPage */]),
            ],
        })
    ], WorkflowstartPageModule);
    return WorkflowstartPageModule;
}());

//# sourceMappingURL=workflowstart.module.js.map

/***/ })

});
//# sourceMappingURL=19.js.map