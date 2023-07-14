webpackJsonp([20],{

/***/ 1606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowroutePage; });
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
 * Generated class for the WorkflowroutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WorkflowroutePage = /** @class */ (function () {
    function WorkflowroutePage(navCtrl, navParams, toastCtrl, httpService, workflow, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.httpService = httpService;
        this.workflow = workflow;
        this.events = events;
        this.workflowinfo = {};
        this.data = {};
        this.list = [];
        this.status = '';
        this.falg = false;
    }
    WorkflowroutePage.prototype.chekFun = function (i) {
        var me = this;
        this.list.forEach(function (data, inde, array) {
            if (i == inde) {
                data.chek = true;
                me.data = data;
            }
            else {
                data.chek = false;
            }
        });
    };
    WorkflowroutePage.prototype.ionViewWillEnter = function () {
        this.memo = '';
        this.bussid = this.navParams.get("bussid");
        this.busstype = this.navParams.get("busstype");
        this.wfid = this.navParams.get("wfid");
        this.workflowinfo['memo'] = '';
        this.workflowinfo['transid'] = '';
        this.initway();
        console.log(this.bussid);
        console.log(this.busstype);
        if (this.status == 'CLOSE' || this.status == 'CANCEL') {
        }
    };
    WorkflowroutePage.prototype.initway = function () {
        var _this = this;
        this.workflow.workflowWay(this.wfid, function (data) {
            var rowData = {};
            var chekVale;
            var me = _this;
            for (var i = 0; i < data.length; i++) {
                if (i == 0) {
                    chekVale = true;
                    me.data = data[i];
                }
                else {
                    chekVale = false;
                }
                rowData = {
                    "key": data[i]["key"],
                    "value": data[i]["value"],
                    "chek": chekVale
                };
                _this.list.push(rowData);
            }
        });
    };
    WorkflowroutePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkflowroutePage');
    };
    WorkflowroutePage.prototype.workflowSend = function () {
        var _this = this;
        this.workflowinfo['wfid'] = this.wfid;
        if (JSON.stringify(this.data) != "{}") {
            this.workflowinfo['transid'] = this.data['key'];
        }
        this.workflowinfo['memo'] = this.memo;
        this.falg = true;
        var url = '/workflow/sendwf/' + this.busstype + '/' + this.bussid;
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
        });
    };
    WorkflowroutePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-workflowroute',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/workflow/activiti/workflowroute/workflowroute.html"*/'\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">发送工作流</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <ion-grid text-center>\n    <!-- <ion-row style="font-size: 1.1em;text-align:center;display:flex; align-items:center" > -->\n      <div    *ngFor="let item of list,let i =index" (click)="chekFun(i)" style="background: white; font-size:18px;text-align:left;height:40px;line-height:40px;margin-bottom: 10px;">\n        <ion-icon  name="checkmark-circle"  [ngClass]="{\'button-clear-ios-primary\': item.chek,\'button-clear-ios-my\':!item.chek}">\n        </ion-icon>\n        {{item.value}}&nbsp;\n      </div>\n    <!-- </ion-row> -->\n    <!-- <ion-list>\n      <ion-item style=" border-bottom:0 !important">\n        <span>备注</span><a></a>\n      </ion-item>\n    </ion-list> -->\n    <textarea  [(ngModel)]="memo" placeholder="请输入备注" style="border: 0px; \n  outline:none;\n  cursor: pointer;\n  height: 150px;\n  width: 100%;\n  padding-left: 16px;" ></textarea>\n  </ion-grid>\n  <button id="workflowSend" [disabled]="falg" ion-button full round class="button button-clear pull-center" color="primary"  (click)="workflowSend()" *ngIf="status!=\'CLOSE\' && status!=\'CANCEL\'">发送</button>\n</ion-content>\n\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/workflow/activiti/workflowroute/workflowroute.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_workflow_service__["a" /* WorkflowServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], WorkflowroutePage);
    return WorkflowroutePage;
}());

//# sourceMappingURL=workflowroute.js.map

/***/ }),

/***/ 979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowroutePageModule", function() { return WorkflowroutePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workflowroute__ = __webpack_require__(1606);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WorkflowroutePageModule = /** @class */ (function () {
    function WorkflowroutePageModule() {
    }
    WorkflowroutePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__workflowroute__["a" /* WorkflowroutePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__workflowroute__["a" /* WorkflowroutePage */]),
            ],
        })
    ], WorkflowroutePageModule);
    return WorkflowroutePageModule;
}());

//# sourceMappingURL=workflowroute.module.js.map

/***/ })

});
//# sourceMappingURL=20.js.map