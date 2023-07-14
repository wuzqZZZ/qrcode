webpackJsonp([17],{

/***/ 1007:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistPageModule", function() { return TodolistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todolist__ = __webpack_require__(1634);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TodolistPageModule = /** @class */ (function () {
    function TodolistPageModule() {
    }
    TodolistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__todolist__["a" /* TodolistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__todolist__["a" /* TodolistPage */]),
            ],
        })
    ], TodolistPageModule);
    return TodolistPageModule;
}());

//# sourceMappingURL=todolist.module.js.map

/***/ }),

/***/ 1634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodolistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ImdefectinfoPage } from '../../im/imdefect/imdefectinfo/imdefectinfo';


// import { ToolinventorylocinfoPage } from '../../tm/toolinventory/toolinventorylocinfo/toolinventorylocinfo'; 
var TodolistPage = /** @class */ (function () {
    function TodolistPage(navCtrl, navParams, platform, httpServices, phoneDevice, toastCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.httpServices = httpServices;
        this.phoneDevice = phoneDevice;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.todolist = [];
        this.page = 1;
        this.maxpage = 1;
        this.backclick = function () {
            _this.navCtrl.popToRoot();
        };
        this.indefectid = this.navParams.get('indefect');
        this.wfcode = this.navParams.get('wfcode');
        if (this.wfcode == 'ImDefect') {
            this.navCtrl.push('ImdefectinfoPage', { 'indefect': this.indefectid });
        }
    }
    TodolistPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.popToRoot();
        });
        this.initTodoList();
        this.navBar.backButtonClick = this.backclick;
    };
    TodolistPage.prototype.initTodoList = function () {
        var _this = this;
        if (this.page < this.maxpage + 1) {
            var url = '/workflow/task/todo/list?sort=id&order=asc&_search=false&nd=1545701948211&rows=10&sidx=&sord=asc&page=' + this.page;
            this.httpServices.get(url, null, function (res) {
                console.log(11111);
                // if (res.rows.length > 0) {
                //   this.maxpage = res.total;
                //   for (let i = 0; i < res.rows.length; i++) {
                //     if (res.rows[i]['detail']) {
                //       res.rows[i]['detail']['flag'] = 1;
                //       this.todolist.push(res.rows[i]);
                //     }
                //   }
                // }
                if (res) {
                    _this.maxpage = res.total;
                    _this.todolist = res.rows;
                }
                _this.page++;
            });
        }
    };
    TodolistPage.prototype.loadtodolist = function (infiniteScroll) {
        // if (this.page < this.maxpage + 1) {
        this.initTodoList();
        // } else {
        // infiniteScroll.target.disabled = true;
        // }
    };
    TodolistPage.prototype.skiptoImdefectInfo = function (item) {
        console.log('skiptoImdefectInfo =>', item);
        if (item.busstype == 'leave' || item.description == '找不到业务记录信息') {
            return this.toastCtrl.create({
                message: '找不到业务记录信息',
                position: 'middle',
                duration: 1000
            }).present();
        }
        if (item['wfcode'] == 'ImDefect') {
            var wfstatusname = '';
            // 'indefect': Imdefect['defectid'],
            // 'from': 'imdefect',
            // 'wfstatusname':Imdefect['wfstatusname']
            if (item['detail']['wfstatus'] == 'WAPPR_SHPG') {
                wfstatusname = '审核派工';
            }
            else if (item['detail']['wfstatus'] == 'NEW') {
                wfstatusname = '故障填报';
            }
            else if (item['detail']['wfstatus'] == 'INPRG_GZCLHB') {
                wfstatusname = '故障处理';
            }
            else if (item['detail']['wfstatus'] == 'IPC_CHECK') {
                wfstatusname = 'IPQC确认';
            }
            else if (item['detail']['wfstatus'] == 'ZX_CHECK') {
                wfstatusname = 'ZX维修确认';
            }
            else if (item['detail']['wfstatus'] == 'CHECK') {
                wfstatusname = '验收总结';
            }
            else if (item['detail']['wfstatus'] == 'COMP_GZYS') {
                wfstatusname = '领导审核';
            }
            else if (item['detail']['wfstatus'] == 'CLOSE') {
                wfstatusname = '已完成';
            }
            else if (item['detail']['wfstatus'] == 'CANCEL') {
                wfstatusname = '已取消';
            }
            this.navCtrl.push('ImdefectinfoPage', { 'indefect': item['bussid'], 'from': 'todolist', 'wfstatusname': wfstatusname });
        }
        else if (item['wfcode'] == 'TmToolInventory') {
            var disabled = void 0;
            if (item['nodename'] == '已关闭' || item['nodename'] == '已取消') {
                disabled = false;
            }
            else {
                disabled = true;
            }
            this.navCtrl.push('ToolinventorylocinfoPage', { 'inventoryId': item['bussid'], 'wfid': item['wfid'], 'disabled': disabled });
        }
        else if (item['wfcode'] == 'PmProject') {
            // options['title']['staticText']='工程计划单';
            this.navCtrl.push('PmworkflowPage', { 'title': '工程计划单', 'bussid': item['bussid'], 'bussytype': 'pmProject', 'projectinfo': item['detail'] });
            // this.phoneDevice.openInAppBrower(item['bussid'],'PmProject',options,item);
        }
        else if (item['wfcode'] == 'CmJmtcContract') {
            // options['title']['staticText']='工程合同';
            this.navCtrl.push('PmworkflowPage', { 'title': '工程合同', 'bussid': item['bussid'], 'bussytype': 'cmJmtcContract', 'projectinfo': item['detail'] });
            // this.phoneDevice.openInAppBrower(item['bussid'],'CmJmtcContract',options,item);
        }
        else if (item['wfcode'] == 'PmFixedReceipt') {
            // options['title']['staticText']='固定资产验收单流程';
            this.navCtrl.push('PmworkinfoPage', {
                'title': '固定资产验收单流程',
                'bussid': item['bussid'],
                'bussytype': 'pmFixedReceipt',
                'projectinfo': item['detail'],
                'formCode': 'pmFixedReceipt_form',
                'id': item['detail']['pjid'],
                'wfstatus': item['detail']['wfstatus']
            });
            // this.phoneDevice.openInAppBrower(item['bussid'],'PmFixedReceipt',options,item);
        }
        else if (item['wfcode'] == 'PmFixedProject') {
            // options['title']['staticText']='固定资产计划单流程';
            this.navCtrl.push('PmworkflowPage', {
                'title': '固定资产计划单流程',
                'bussid': item['bussid'],
                'bussytype': 'pmFixedProject',
                'projectinfo': item['detail'],
                'formCode': 'pmFixedReceipt_form',
                'wfstatus': item['detail']['wfstatus']
            });
            // this.phoneDevice.openInAppBrower(item['bussid'],'PmFixedProject',options,item);
        }
        else if (item['wfcode'] == 'PmReceipt') {
            // options['title']['staticText']='工程验收单流程';
            this.navCtrl.push('PmworkinfoPage', {
                'title': '工程验收单流程	',
                'bussid': item['bussid'],
                'bussytype': 'pmReceipt',
                'projectinfo': item['detail'],
                'formCode': 'pmReceipt_form',
                'id': item['detail']['pjid'],
                'wfstatus': item['detail']['wfstatus']
            });
            // this.phoneDevice.openInAppBrower(item['bussid'],'PmReceipt',options,item);
        }
        else if (item['wfcode'] == 'CmJmtcFixedContract') {
            // options['title']['staticText']='结算合同流程';
            this.navCtrl.push('PmworkflowPage', { 'title': '结算合同流程', 'bussid': item['bussid'], 'bussytype': 'cmJmtcFixedContract', 'projectinfo': item['detail'] });
            // this.phoneDevice.openInAppBrower(item['bussid'],'CmJmtcFixedContract',options,item);
        }
        else if (item['wfcode'] == 'InvMr') {
            if (!item['detail']['requestedbyname']) {
                this.httpServices.getUserName(item['detail']['requestedby'], function (res) {
                    item['detail']['requestedbyname'] = res.data;
                });
            }
            if (!item['detail']['wfstatusname']) {
                this.httpServices.getDictName('INV_MR_STATUS', item['detail']['wfstatus'], function (res) {
                    item['detail']['wfstatusname'] = res;
                });
            }
            this.navCtrl.push('InvmrinfoPage', { 'datainfo': item['detail'] });
        }
        else if (item['wfcode'] == 'lmtagFile') {
            this.navCtrl.push('LmtagfileinfoPage', {
                type: 'edit',
                fileid: item.bussid
            });
        }
        else if (item['wfcode'] == 'lmtagProject') {
            this.navCtrl.push('LmtagworkorderinfoPage', {
                type: 'edit',
                prjid: item.bussid
            });
        }
        else if (item['wfcode'] == 'lmtagNonConformity') {
            this.navCtrl.push('LmtagnonconformityinfoPage', {
                type: 'edit',
                id: item.bussid
            });
        }
        else if (item['wfcode'] == 'lmtagQuality') {
            this.navCtrl.push('LmtagqualityinspectioninfoPage', {
                type: 'edit',
                id: item.bussid
            });
        }
        else if (item['wfcode'] == 'lmtagWorkorder') {
            this.navCtrl.push('LmtagworkorderinfoPage', {
                type: 'edit',
                prjid: item.bussid
            });
        }
        else if (item['wfcode'] == 'lmtagInteractive') {
            this.navCtrl.push('LmsiteinfoPage', {
                type: 'edit',
                interactiveid: item.bussid
            });
        }
        else {
            var pageName = void 0;
            switch (item.wfcode) {
                case 'lmtagQualityInspection':
                    pageName = 'LmtagqualityinspectioninfoPage';
                    break;
                case 'lmtagReportDaily':
                    pageName = 'LmtagreportdailyinfoPage';
                    break;
                case 'lmtagSummary':
                    pageName = 'LmtagsummaryinfoPage';
                    break;
                case 'lmtagSummarySpecialty':
                    pageName = 'LmtagsummaryspecialtyinfoPage';
                    break;
                case 'lmtagSummaryTech':
                    pageName = 'LmtagsummarytechinfoPage';
                    break;
                case 'lmpjProject':
                    pageName = 'LmpjProjectinfoPage';
                    break;
                case 'KmApplyForm':
                    pageName = 'KmapplyforminfoPage';
                    break;
                case 'lmtagPlan':
                    pageName = 'LmtagplaninfoPage';
                default:
                    break;
            }
            if (!pageName || !item.bussid) {
                return this.toastCtrl.create({
                    message: '请登录PC端系统进行处理',
                    position: 'middle',
                    duration: 1000
                }).present();
            }
            this.navCtrl.push(pageName, {
                type: 'edit',
                id: item.bussid,
                item: item.detail
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Navbar */])
    ], TodolistPage.prototype, "navBar", void 0);
    TodolistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-todolist',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/workflow/todolist/todolist.html"*/'<!--\n  Generated template for the MyworkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar class="mytoolbar">\n      <ion-title class="cptitle">待办任务</ion-title>\n    </ion-navbar>\n  \n</ion-header>\n  <ion-content>\n      <!-- <ion-list>\n        <ion-item *ngFor="let item of todolist" (click)="skiptoImdefectInfo(item)">\n          <div>\n            <span style="color:#0099FF">{{item[\'description\']}}</span>\n          </div>\n          <div style="color:gray;font-size: 14px;"><span>流程节点：{{item[\'nodename\']}}</span>\n             \n          </div>\n          <div style="color:gray;font-size: 14px;">\n              <span >审批时间： {{item[\'createTime\']}}</span>\n          </div>\n        </ion-item>\n      </ion-list> -->\n      <div class="appworkbox">\n        <div *ngFor="let item of todolist" class="workitem" (click)="skiptoImdefectInfo(item)">\n          <div><span style="color:#0099FF;font-size: 16px;">{{item[\'description\']}}</span></div>\n          <div>流程名称：{{item.wfname}}</div>\n          <div class="w60">流程节点：{{item.nodename}}</div>\n          <div class="w40">审批人：{{item.detail?item.detail.wfpersonname:\'-\'}}</div>\n          <div>送达时间：{{item.detail?item.detail.wftime:\'-\'}}</div>\n        </div>\n      </div>\n  <ion-infinite-scroll (ionInfinite)="loadtodolist($event)" threshold="1px">\n          <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data...">\n          </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  </ion-content>\n  '/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/workflow/todolist/todolist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__["a" /* PhoneDeviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], TodolistPage);
    return TodolistPage;
}());

//# sourceMappingURL=todolist.js.map

/***/ })

});
//# sourceMappingURL=17.js.map