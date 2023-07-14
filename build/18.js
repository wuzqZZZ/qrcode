webpackJsonp([18],{

/***/ 1608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorylistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_workflow_service__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tools__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_phone_device__ = __webpack_require__(106);
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
 * Generated class for the HistorylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistorylistPage = /** @class */ (function () {
    function HistorylistPage(events, storage, navCtrl, toastCtrl, navParams, httpService, workflow, phoneDevice, tools) {
        this.events = events;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.workflow = workflow;
        this.phoneDevice = phoneDevice;
        this.tools = tools;
        this.title = "";
        this.wfid = "";
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
        this.title = this.navParams.get('title'); //id
        this.wfid = this.navParams.get('wfid'); //id
    }
    HistorylistPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad HistorylistPage');
        this.inithistorylist();
    };
    HistorylistPage.prototype.inithistorylist = function () {
        if (this.wfid == "") {
            $('#historylist').html('<p>暂无流程历史</p>');
            return;
        }
        this.workflow.historylist(this.wfid, function (data) {
            if (data.rows.length > 0) {
                var html = "";
                for (var i = 0; i < data.rows.length; i++) {
                    var username = "";
                    var wfback = "";
                    var timelineClass = "";
                    var spanClass = "";
                    var notesFontClass = "";
                    var memo = "";
                    var startTime = "";
                    var endTime = "";
                    if (data.rows[i].username != null) {
                        username = data.rows[i].username;
                    }
                    if (data.rows[i].memo != null && data.rows[i].memo != undefined && data.rows[i].memo != 'undefined') {
                        memo = data.rows[i].memo;
                    }
                    if (data.rows[i].startTime != null) {
                        startTime = data.rows[i].startTime;
                    }
                    if (data.rows[i].endTime != null) {
                        endTime = data.rows[i].endTime;
                    }
                    if (data.rows[i].wfback == "1") {
                        wfback = '<span style="color:red">不通过<span>';
                    }
                    else if (data.rows[i].wfback == "0") {
                        wfback = '<span style="color:green">通过<span>';
                    }
                    else {
                        wfback = "";
                    }
                    if (i <= 0) {
                        timelineClass = "cd-picture";
                        spanClass = "bg039";
                        notesFontClass = "NotesFont2";
                    }
                    else {
                        timelineClass = "cd-movie";
                        spanClass = "bg038";
                        notesFontClass = "NotesFont";
                    }
                    html += '<div class="cd-timeline-block"><div class="cd-timeline-img ' + timelineClass + '"></div>';
                    html += '<div class="cd-timeline-content"><div class="tips"><span class="' + spanClass + '">' + data.rows[i].nodename + '</span></div><div class="Notes br039">';
                    html += '<div class="' + notesFontClass + '">审批人:' + username + '</div><div class="' + notesFontClass + '">审批结果:' + wfback + '</div><div class="' + notesFontClass + '">审批意见:' + memo + '</div>';
                    html += '<div class="' + notesFontClass + '">开始时间:' + startTime + '</div> <div class="' + notesFontClass + '">完成时间:' + endTime + '</div></div></div></div>';
                }
                $('#historylist').html(html);
            }
            else {
                $('#historylist').html('<p>暂无流程历史</p>');
            }
        });
    };
    HistorylistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-historylist',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/workflow/historylist/historylist.html"*/'<!--\n  Generated template for the HistorylistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div id="historylist"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/workflow/historylist/historylist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_5__providers_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_workflow_service__["a" /* WorkflowServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_phone_device__["a" /* PhoneDeviceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_tools__["a" /* ToolsProvider */]])
    ], HistorylistPage);
    return HistorylistPage;
}());

//# sourceMappingURL=historylist.js.map

/***/ }),

/***/ 981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorylistPageModule", function() { return HistorylistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__historylist__ = __webpack_require__(1608);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HistorylistPageModule = /** @class */ (function () {
    function HistorylistPageModule() {
    }
    HistorylistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__historylist__["a" /* HistorylistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__historylist__["a" /* HistorylistPage */]),
            ],
        })
    ], HistorylistPageModule);
    return HistorylistPageModule;
}());

//# sourceMappingURL=historylist.module.js.map

/***/ })

});
//# sourceMappingURL=18.js.map