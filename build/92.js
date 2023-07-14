webpackJsonp([92],{

/***/ 1610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmhomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage__ = __webpack_require__(52);
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
 * Generated class for the ImhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmhomePage = /** @class */ (function () {
    function LmhomePage(navCtrl, storage, navParams, httpService, phoneDevice) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.httpService = httpService;
        this.phoneDevice = phoneDevice;
        this.projectid = '';
        this.projectnameArray = [];
        this.myapplication = [
            { 'title': '检修总览', 'code': 'lmmain', 'src': 'assets/imgs/lm/lmhome/检修总览.png', 'isshow': true, 'skipname': 'LmzlPage' },
            { 'title': '策划总览', 'code': 'lmmain', 'src': 'assets/imgs/lm/lmhome/策划总览.png', 'isshow': true, 'skipname': 'LmchzlPage' },
            { 'title': '今日简报', 'code': 'lmmain', 'src': 'assets/imgs/lm/lmhome/今日简报.png', 'isshow': true, 'skipname': 'LmjrjbPage' },
            { 'title': '安全管控', 'code': 'lmmain', 'src': 'assets/imgs/lm/lmhome/安全管控.png', 'isshow': true, 'skipname': 'LmaqgkPage' },
            { 'title': '质量管控', 'code': 'lmmain', 'src': 'assets/imgs/lm/lmhome/质量管控.png', 'isshow': true, 'skipname': 'LmzlgkPage' },
            { 'title': '进度管控', 'code': 'lmmain', 'src': 'assets/imgs/lm/lmhome/进度管控.png', 'isshow': true, 'skipname': 'LmjdgkPage' },
            { 'title': '成本管控', 'code': 'lmmain', 'src': 'assets/imgs/lm/lmhome/成本管控.png', 'isshow': true, 'skipname': 'LmcbgkPage' },
            { 'title': '督办任务', 'code': 'lmmain', 'src': 'assets/imgs/lm/lmhome/督办任务.png', 'isshow': true, 'skipname': 'LmtagsupervisoryPage' },
        ];
        this.myapplication1 = [
            { 'title': '策划一览表', 'code': 'lmtagPlan', 'src': 'assets/imgs/lm/lmhome/策划一览表.png', 'isshow': true, 'skipname': 'LmtagplanPage' },
            { 'title': '现场定置', 'code': 'lmtagSitePosition', 'src': 'assets/imgs/lm/lmhome/现场定置.png', 'isshow': true, 'skipname': 'LmtagsitepositionPage' },
        ];
        this.myapplication2 = [
            { 'title': '智能扫码', 'code': 'scanner', 'src': 'assets/imgs/lm/lmhome/智能扫码.png', 'isshow': true, 'skipname': 'ScannerPage' },
            { 'title': '检修工单', 'code': 'lmtagWorkorder', 'src': 'assets/imgs/lm/lmhome/检修工单.png', 'isshow': true, 'skipname': 'LmtagworkorderPage' },
            { 'title': '质量验收卡', 'code': 'lmtagQualityInspection', 'src': 'assets/imgs/lm/lmhome/质量验收卡.png', 'isshow': true, 'skipname': 'LmtagqualityinspectionPage' },
            { 'title': '不符合项', 'code': 'lmtagNonConformity', 'src': 'assets/imgs/lm/lmhome/不符合项.png', 'isshow': true, 'skipname': 'LmtagnonconformityPage' },
        ];
        this.myapplication3 = [
            { 'title': '检修日报', 'code': 'lmtagReportDaily', 'src': 'assets/imgs/lm/lmhome/检修日报.png', 'isshow': true, 'skipname': 'LmtagreportdailyPage' },
            { 'title': '检修周报', 'code': 'lmtagReportWeek', 'src': 'assets/imgs/lm/lmhome/检修周报.png', 'isshow': true, 'skipname': 'LmtagreportweekPage' },
            { 'title': '会议纪要', 'code': 'lmpjMeeting', 'src': 'assets/imgs/lm/lmhome/会议纪要.png', 'isshow': true, 'skipname': 'LmpjMeetingPage' },
            { 'title': '督办任务', 'code': 'lmtagSupervisory', 'src': 'assets/imgs/lm/lmhome/督办任务.png', 'isshow': true, 'skipname': 'LmtagsupervisoryPage' },
            { 'title': '现场直击', 'code': 'lmtagInteractive', 'src': 'assets/imgs/lm/lmhome/lmxc_active.png', 'isshow': true, 'skipname': 'LmsitePage' },
        ];
        this.myapplication4 = [
            { 'title': '检修立项', 'code': 'lmpjProject', 'src': 'assets/imgs/lm/lmhome/检修立项.png', 'isshow': true, 'skipname': 'LmpjProjectPage' }
        ];
        this.myapplication5 = [
            { 'title': '检修项目', 'code': 'lmtagProject', 'src': 'assets/imgs/lm/lmhome/检修项目.png', 'isshow': true, 'skipname': 'LmtagprojectPage' },
            { 'title': '检修文件包', 'code': 'lmtagFile', 'src': 'assets/imgs/lm/lmhome/检修文件包.png', 'isshow': true, 'skipname': 'LmtagfilelistPage' },
            { 'title': '工具', 'code': 'lmpjiItemTool', 'src': 'assets/imgs/lm/lmhome/工具.png', 'isshow': true, 'skipname': 'LmpjiitemtoolPage' },
            { 'title': '材料', 'code': 'lmpjmMtPurch', 'src': 'assets/imgs/lm/lmhome/物料.png', 'isshow': true, 'skipname': 'LmpjmmtpurchPage' },
            { 'title': '备件', 'code': 'lmtagFileSpare', 'src': 'assets/imgs/lm/lmhome/备件.png', 'isshow': true, 'skipname': 'LmtagfilesparePage' },
            { 'title': '施工方案', 'code': 'lmpjifiles', 'src': 'assets/imgs/lm/lmhome/施工方案.png', 'isshow': true, 'skipname': 'LmpjifilesPage' },
            { 'title': '开工报告', 'code': 'lmtagStartupReport', 'src': 'assets/imgs/lm/lmhome/报告.png', 'isshow': true, 'skipname': 'LmtagstartupreportPage' },
            { 'title': '培训与交底', 'code': 'lmtagtraininghandover', 'src': 'assets/imgs/lm/lmhome/培训与交底.png', 'isshow': true, 'skipname': 'LmtagtraininghandoverPage' }
        ];
        this.myapplication6 = [
            { 'title': '检修总结', 'code': 'lmtagSummary', 'src': 'assets/imgs/lm/lmhome/检修总结.png', 'isshow': true, 'skipname': 'LmtagsummaryPage' },
            { 'title': '专业总结', 'code': 'lmtagSummarySpecialty', 'src': 'assets/imgs/lm/lmhome/专业总结.png', 'isshow': true, 'skipname': 'LmtagsummaryspecialtyPage' },
            { 'title': '技术监督总结', 'code': 'lmtagSummaryTech', 'src': 'assets/imgs/lm/lmhome/技术监督总结.png', 'isshow': true, 'skipname': 'LmtagsummarytechPage' },
            { 'title': '总结归档', 'code': 'lmtagArchiveManage', 'src': 'assets/imgs/lm/lmhome/总结归档.png', 'isshow': true, 'skipname': 'LmtagarchivemanagePage' },
        ];
        this.appAuthority = [];
        this.isshowApplication = true;
        this.isshowApplication1 = true;
        this.isshowApplication2 = true;
        this.isshowApplication3 = true;
        this.isshowApplication4 = true;
        this.isshowApplication5 = true;
        this.isshowApplication6 = true;
        this.pjstagename = '';
        this.remaindate = 0;
        this.phoneDevice.phoneBacktoRoot(this.navCtrl);
        // this.projectid = this.storage.get(StorageProvider.LM_PROJECTID);
        // console.log(this.projectid)
        // this.initproject();
        // this.getApps(this.myapplication);
        // this.getApps(this.myapplication1);
        // this.getApps(this.myapplication2);
        // this.getApps(this.myapplication3);
        // this.getApps(this.myapplication4);
        // this.getApps(this.myapplication5);
        // this.getApps(this.myapplication6);
    }
    LmhomePage.prototype.ionViewWillEnter = function () {
        this.projectid = this.storage.get(__WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */].LM_PROJECTID);
        this.initproject();
        this.getApps(this.myapplication1);
        this.getApps(this.myapplication2);
        this.getApps(this.myapplication3);
        this.getApps(this.myapplication4);
        this.getApps(this.myapplication5);
        this.getApps(this.myapplication6);
    };
    LmhomePage.prototype.initproject = function () {
        var _this = this;
        this.httpService.get('/query/lmpj/lmpjProject/headlist?format=list', null, function (result) {
            if (_this.projectid == '' || _this.projectid == null || _this.projectid == undefined) {
                _this.projectid = result[0]['projectid'];
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */].LM_PROJECTID, result[0]['projectid']);
            }
            _this.projectnameArray = result;
            _this.selectChange(_this.projectid);
            // this.initlist(1);
        });
    };
    LmhomePage.prototype.getApps = function (arrylist) {
        var _this = this;
        var url = '/cache/getApps?authtype=FUNTION';
        this.httpService.get(url, null, function (res) {
            if (res.code == 0) {
                for (var i = 0; i < res.data.length; i++) {
                    _this.appAuthority.push(res.data[i]);
                }
            }
            for (var i = 0; i < arrylist.length; i++) {
                _this.compare(_this.appAuthority, arrylist[i]);
            }
        });
    };
    LmhomePage.prototype.compare = function (arrlist, obj) {
        for (var i = 0; i < arrlist.length; i++) {
            if (obj['code'] == arrlist[i]['code']) {
                obj['isshow'] = true;
                obj['title'] = arrlist[i]['name'];
            }
        }
    };
    LmhomePage.prototype.skippage = function (item, value) {
        if (value === void 0) { value = null; }
        if (item.skipname != '') {
            if (item['pushdata']) {
                this.navCtrl.push(item.skipname, { 'defaultValue': value, 'title': item.title, 'data': item['pushdata'], 'code': item['code'] });
            }
            else {
                this.navCtrl.push(item.skipname, { 'defaultValue': value, 'title': item.title });
            }
        }
        else {
            this.navCtrl.parent.select(1);
        }
    };
    LmhomePage.prototype.showApplication = function () {
        this.isshowApplication = !this.isshowApplication;
    };
    LmhomePage.prototype.showApplication1 = function () {
        this.isshowApplication1 = !this.isshowApplication1;
    };
    LmhomePage.prototype.showApplication2 = function () {
        this.isshowApplication2 = !this.isshowApplication2;
    };
    LmhomePage.prototype.showApplication3 = function () {
        this.isshowApplication3 = !this.isshowApplication3;
    };
    LmhomePage.prototype.showApplication4 = function () {
        this.isshowApplication4 = !this.isshowApplication4;
    };
    LmhomePage.prototype.showApplication5 = function () {
        this.isshowApplication5 = !this.isshowApplication5;
    };
    LmhomePage.prototype.showApplication6 = function () {
        this.isshowApplication6 = !this.isshowApplication6;
    };
    LmhomePage.prototype.selectChange = function (e) {
        var _this = this;
        this.storage.set(__WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */].LM_PROJECTID, e);
        var _a = this.projectnameArray.filter(function (item) { return item.projectid == e; })[0], pjstage = _a.pjstage, planendtime = _a.planendtime;
        this.httpService.getDictName('LMPJ_PROJECT_STAGE', pjstage, function (res) {
            if (res != '') {
                console.log("selectChange  res => ", res);
                _this.pjstagename = res;
            }
        });
        this.remaindate = this.daysDiff(planendtime);
    };
    // 格式化剩余日期
    LmhomePage.prototype.daysDiff = function (planendtime) {
        if (planendtime) {
            var days = Math.ceil((+new Date(planendtime) - +new Date) / 86400000);
            // console.log('planendtime', '=> 剩余日期 => ', days);
            return days < 0 ? 0 : days;
        }
        return 0;
    };
    LmhomePage.prototype.gohomePage = function () {
        this.navCtrl.push('TabsPage', {
            curTabIndex: 1
        });
    };
    LmhomePage.prototype.planmore = function () {
        // 项目详情页面
        this.navCtrl.push('LmpjProjectinfoPage', {
            type: 'edit',
            id: this.projectid
        });
    };
    LmhomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmhome',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmhome/lmhome.html"*/'<!--\n  Generated template for the LmhomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <span class="pull-left navbar-left"  >\n      <!-- <ion-icon name=\'ios-arrow-back\' is-active="false" (click)="gohomePage()"></ion-icon> -->\n    </span>\n    <ion-title class="cptitle">应用中心</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="mainbox">\n    <div class="mainboxbg"></div>\n    <div class="maincontent">\n      <div class="">\n        <ion-item class="lmpjswitch">\n          <ion-label class="newtag">\n            <img class="add-element" src="assets/imgs/lm/lmhome/lmnewtag.png" alt="">\n            <span>最新</span>\n          </ion-label>\n          <ion-select interface=\'action-sheet\' cancelText="取消" okText="确定"\n            placeholder="请选择"  [(ngModel)]="projectid" (ngModelChange)="selectChange($event)"  style="max-width: 100%; padding-left: 40px;\n            width: 100%;">\n            <div *ngFor="let typeData of projectnameArray">\n              <ion-option  value="{{typeData?.projectid}}">\n                {{typeData?.pjname}}</ion-option>\n            </div>\n          </ion-select> \n        </ion-item> \n      </div>\n      <!-- <div class="step-header">\n        <ul>\n          <li class="active"><div class="date">22-08-09</div><span></span><div class="name">立项</div></li>\n          <li><div class="date"></div><span></span><div class="name">策划</div></li>\n          <li><div class="date"></div><span></span><div class="name">准备</div></li>\n          <li><div class="date"></div><span></span><div class="name">执行</div></li>\n          <li><div class="date"></div><span></span><div class="name">总结</div></li>\n        </ul>\n      </div> -->\n      <div class="lmpjinfo">\n        <div>阶段： <span>{{pjstagename || \'-\'}}</span> </div>\n        <div>剩余工期： <span>{{remaindate || \'-\'}}</span> 天</div>\n      </div>\n      <div class="detailinfo"  (click)="planmore()">详细</div>\n    </div>\n  </div>\n  <div class="mainbox">\n    <div class="maincontent">\n      <nav class="applicationappnav">\n        <div class="appnav">\n            <div class="appnavtitle">管控中台</div>\n            <div class="appnavedit" (click)="showApplication()" *ngIf="isshowApplication">收起</div>\n            <div class="appnavedit" (click)="showApplication()" *ngIf="!isshowApplication">展开</div>\n        </div>\n        <div *ngFor="let item of myapplication">\n          <span class="applicationsquare" (click)="skippage(item,item.defalutvalue)" *ngIf="item.isshow && isshowApplication">\n            <img src="{{item.src}}" alt="">\n              <h2>{{item.title}}</h2>\n          </span>\n        </div>\n     </nav>\n    </div>\n  </div>\n  <div class="mainbox">\n    <div class="maincontent">\n      <nav class="applicationappnav">\n        <div class="appnav">\n            <div class="appnavtitle">检修立项</div>\n            <div class="appnavedit" (click)="showApplication4()" *ngIf="isshowApplication4">收起</div>\n            <div class="appnavedit" (click)="showApplication4()" *ngIf="!isshowApplication4">展开</div>\n        </div>\n        <div *ngFor="let item of myapplication4">\n          <span class="applicationsquare" (click)="skippage(item,item.defalutvalue)" *ngIf="item.isshow && isshowApplication">\n            <img src="{{item.src}}" alt="">\n              <h2>{{item.title}}</h2>\n          </span>\n        </div>\n     </nav>\n    </div>\n  </div>\n  <div class="mainbox">\n    <div class="maincontent">\n      <nav class="applicationappnav">\n        <div class="appnav">\n            <div class="appnavtitle">检修策划</div>\n            <div class="appnavedit" (click)="showApplication1()" *ngIf="isshowApplication1">收起</div>\n            <div class="appnavedit" (click)="showApplication1()" *ngIf="!isshowApplication1">展开</div>\n        </div>\n        <div *ngFor="let item of myapplication1">\n          <span class="applicationsquare" (click)="skippage(item,item.defalutvalue)" *ngIf="item.isshow && isshowApplication1">\n            <img src="{{item.src}}" alt="">\n              <h2>{{item.title}}</h2>\n          </span>\n        </div>\n     </nav>\n    </div>\n  </div>\n  <div class="mainbox">\n    <div class="maincontent">\n      <nav class="applicationappnav">\n        <div class="appnav">\n            <div class="appnavtitle">检修准备</div>\n            <div class="appnavedit" (click)="showApplication5()" *ngIf="isshowApplication5">收起</div>\n            <div class="appnavedit" (click)="showApplication5()" *ngIf="!isshowApplication5">展开</div>\n        </div>\n        <div *ngFor="let item of myapplication5">\n          <span class="applicationsquare" (click)="skippage(item,item.defalutvalue)" *ngIf="item.isshow && isshowApplication5">\n            <img src="{{item.src}}" alt="">\n              <h2>{{item.title}}</h2>\n          </span>\n        </div>\n     </nav>\n    </div>\n  </div>\n  <div class="mainbox">\n    <div class="maincontent">\n      <nav class="applicationappnav">\n        <div class="appnav">\n            <div class="appnavtitle">检修执行</div>\n            <div class="appnavedit" (click)="showApplication2()" *ngIf="isshowApplication2">收起</div>\n            <div class="appnavedit" (click)="showApplication2()" *ngIf="!isshowApplication2">展开</div>\n        </div>\n        <div *ngFor="let item of myapplication2">\n          <span class="applicationsquare" (click)="skippage(item,item.defalutvalue)" *ngIf="item.isshow && isshowApplication2">\n            <img src="{{item.src}}" alt="">\n              <h2>{{item.title}}</h2>\n          </span>\n        </div>\n     </nav>\n    </div>\n  </div>\n  <div class="mainbox">\n    <div class="maincontent">\n      <nav class="applicationappnav">\n        <div class="appnav">\n            <div class="appnavtitle">评价总结</div>\n            <div class="appnavedit" (click)="showApplication6()" *ngIf="isshowApplication6">收起</div>\n            <div class="appnavedit" (click)="showApplication6()" *ngIf="!isshowApplication6">展开</div>\n        </div>\n        <div *ngFor="let item of myapplication6">\n          <span class="applicationsquare" (click)="skippage(item,item.defalutvalue)" *ngIf="item.isshow && isshowApplication6">\n            <img src="{{item.src}}" alt="">\n              <h2>{{item.title}}</h2>\n          </span>\n        </div>\n     </nav>\n    </div>\n  </div>\n  <div class="mainbox" style="margin-bottom: 20px;">\n    <div class="maincontent">\n      <nav class="applicationappnav">\n        <div class="appnav">\n            <div class="appnavtitle">综合管理</div>\n            <div class="appnavedit" (click)="showApplication3()" *ngIf="isshowApplication3">收起</div>\n            <div class="appnavedit" (click)="showApplication3()" *ngIf="!isshowApplication3">展开</div>\n        </div>\n        <div *ngFor="let item of myapplication3">\n          <span class="applicationsquare" (click)="skippage(item,item.defalutvalue)" *ngIf="item.isshow && isshowApplication3">\n            <img src="{{item.src}}" alt="">\n              <h2>{{item.title}}</h2>\n          </span>\n        </div>\n     </nav>\n    </div>\n  </div>\n</ion-content>\n\n<!-- <ion-footer id="ionFooter">\n  <ion-toolbar>\n    <div id="customtabbar" class="customtabbar">\n      <div class="baritem active" (click)="handleTabbar(0)">\n        <img src="assets/imgs/lm/lmhome/lmhome.png" alt="">\n        <span>工作台</span>\n      </div>\n      <div class="baritem active" (click)="handleTabbar(1)">\n        <img src="assets/imgs/lm/lmhome/lmapp_active.png" alt="">\n        <span>应用</span>\n      </div>\n      <div class="baritem" (click)="handleTabbar(2)">\n        <img src="assets/imgs/lm/lmhome/lmxc.png" alt="">\n        <span>现场</span>\n      </div>\n      <div class="baritem" (click)="handleTabbar(3)">\n        <img src="assets/imgs/lm/lmhome/lmdb.png" alt="">\n        <span>督办</span>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-footer> -->\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmhome/lmhome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__["a" /* PhoneDeviceProvider */]])
    ], LmhomePage);
    return LmhomePage;
}());

//# sourceMappingURL=lmhome.js.map

/***/ }),

/***/ 983:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImhomePageModule", function() { return ImhomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmhome__ = __webpack_require__(1610);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImhomePageModule = /** @class */ (function () {
    function ImhomePageModule() {
    }
    ImhomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmhome__["a" /* LmhomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmhome__["a" /* LmhomePage */]),
            ],
        })
    ], ImhomePageModule);
    return ImhomePageModule;
}());

//# sourceMappingURL=lmhome.module.js.map

/***/ })

});
//# sourceMappingURL=92.js.map