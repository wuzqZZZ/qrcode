webpackJsonp([46],{

/***/ 1583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmtagsummarytechinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_phone_device__ = __webpack_require__(106);
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
 * Generated class for the LmtagsummarytechinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmtagsummarytechinfoPage = /** @class */ (function () {
    function LmtagsummarytechinfoPage(navCtrl, navParams, phoneDevice, trusturl, platform, httpService, alertCtrl, toastCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.phoneDevice = phoneDevice;
        this.trusturl = trusturl;
        this.platform = platform;
        this.httpService = httpService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.tag = false;
        this.info = {};
        this.src = '/report/view/html/';
        this.code = 'lmtagSummaryTech';
        this.hasFetchBackRole = false;
        this.hasSaveRole = true;
        this.loading = false;
        this.info = this.navParams.get('item');
        console.log(this.info);
        if (this.info['summaryid']) {
            this.src = "" + __WEBPACK_IMPORTED_MODULE_3__providers_config__["a" /* ConfigProvider */].apiUrl + this.src + this.code + "?id=" + this.info['summaryid'];
            // this.trustsrc = this.trusturl.bypassSecurityTrustResourceUrl(this.src);
            this.loading = true;
            this.httpService.getBlob(this.src, function (res) {
                _this.loading = false;
                console.log("res => ", res);
                if (res != '' && res != null && res.size != 0) {
                    _this.trustsrc = _this.trusturl.bypassSecurityTrustResourceUrl(URL.createObjectURL(res));
                    _this.autoComputeIframe();
                }
                else {
                    _this.trustsrc = null;
                }
            });
        }
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
    }
    // 因为iframe 加载是在页面dom节点完全生成完成之后所以要加上延迟函数
    LmtagsummarytechinfoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.findProjectInfo();
        this.events.subscribe('workflowPage', function (flag, time) {
            console.log('workflowPage: ' + flag, time);
            _this.updateWfstatus();
        });
        if (this.info['wfid']) {
            this.getButtonControl();
            this.checkFetchBack();
        }
    };
    LmtagsummarytechinfoPage.prototype.autoComputeIframe = function () {
        var _this = this;
        setTimeout(function () {
            console.log('platform is ios ? ', _this.platform.is('ios'));
            // 按照设备高度填充剩余空间
            var len = $('.main').length - 1;
            var height = $('.main')[len].offsetHeight - $('.main')[len].children[0].offsetHeight - 20;
            $('#iframeHeight').css('height', height);
            $('#iframe').css('visibility', 'visible');
            if ($('#iframe').length == 0 || $('#iframe')[0].contentWindow.document.body.children.length == 0) {
                return;
            }
            if (_this.platform.is('ios')) {
                $('#iframe')[0].contentWindow.document.body.children[0].style['marginLeft'] = '-20px';
            }
            else {
                $('#iframe')[0].contentWindow.document.body.style['margin'] = '0px';
            }
            // 按照内容实际宽度缩放
            var iframeWidth = $('#iframe')[0].contentWindow.innerWidth;
            var fileWidth = $('#iframe')[0].contentWindow.document.body.children[0].clientWidth;
            var widthScale = (iframeWidth / fileWidth).toFixed(3);
            // 按照内容实际高度裁剪，避免缩放导致的大片空白
            var fileHeight = $('#iframe')[0].contentWindow.document.body.children[0].clientHeight * +widthScale;
            $('#iframe')[0].contentWindow.document.body.style['height'] = "" + fileHeight;
            $('#iframe')[0].contentWindow.document.body.children[0].style['transform'] = "scale(" + widthScale + ")";
            $('#iframe')[0].contentWindow.document.body.children[0].style['transform-origin'] = '0 top 0';
            var touchtime = 0;
            // 模拟ios双击
            $('#iframe')[0].contentWindow.document.body.children[0].onclick = function () {
                // console.log(this.tag);
                if (new Date().getTime() - touchtime < 500) {
                    // console.log('双击了');
                    $('#iframe')[0].contentWindow.document.body.children[0].style['transform'] = 'scale(1,1)';
                    _this.tag = !_this.tag;
                }
                else {
                    if ($('#iframe')[0].contentWindow.innerWidth < 375) {
                        $('#iframe')[0].contentWindow.document.body.children[0].style['transform'] = "scale(" + widthScale + ",.51)";
                    }
                    else {
                        $('#iframe')[0].contentWindow.document.body.children[0].style['transform'] = "scale(" + widthScale + ",.58)";
                    }
                    touchtime = new Date().getTime();
                    _this.tag = !_this.tag;
                }
            };
        }, 1000);
    };
    LmtagsummarytechinfoPage.prototype.showbigcontent = function () {
        $('#iframe')[0].contentWindow.document.body.children[0].style['zoom'] = 2;
    };
    LmtagsummarytechinfoPage.prototype.findProjectInfo = function () {
        var _this = this;
        this.httpService.get('/lmpjProject/findProjectMessage?id=' + this.info['projectid'], null, function (data) {
            if (data.code == 0) {
                _this.info['planendtime'] = data.data['planendtime'].split(' ')[0];
                _this.info['planstarttime'] = data.data['planstarttime'].split(' ')[0];
            }
        });
    };
    //读取用户是否有工作流按钮权限
    LmtagsummarytechinfoPage.prototype.getButtonControl = function () {
        var _this = this;
        this.httpService.workflowCheckAuth(this.info['wfid'], function (res) {
            if (res.code == 0) {
                _this.hasSaveRole = true;
            }
            else {
                _this.hasSaveRole = false;
            }
            console.log('hasSaveRole' + _this.hasSaveRole);
        });
    };
    LmtagsummarytechinfoPage.prototype.send = function () {
        if (this.info['wfid'] != "" && this.info['wfid'] != null && this.hasSaveRole) {
            // 审核流程
            this.navCtrl.push('WorkflowroutePage', { 'busstype': this.code, 'bussid': this.info['summaryid'], 'wfid': this.info['wfid'] });
        }
        else {
            // 发送流程
            this.navCtrl.push('WorkflowstartPage', { 'busstype': this.code, 'bussid': this.info['summaryid'] });
        }
    };
    //读取用户是否有撤回流程权限
    LmtagsummarytechinfoPage.prototype.checkFetchBack = function () {
        var _this = this;
        this.httpService.checkFetchBack(this.info['wfid'], function (res) {
            if (res.code == 0) {
                _this.hasFetchBackRole = true;
            }
            else {
                _this.hasFetchBackRole = false;
            }
            console.log('hasFetchBackRole' + _this.hasFetchBackRole);
        });
    };
    LmtagsummarytechinfoPage.prototype.fetchBack = function () {
        var _this = this;
        this.alertCtrl.create({
            title: '是否撤回流程',
            cssClass: 'AlertList',
            buttons: [{
                    text: '确认',
                    handler: function () {
                        _this.httpService.fecthBack(_this.info['wfid'], function (res) {
                            if (res.code == 0) {
                                _this.toastCtrl.create({
                                    message: '撤回成功',
                                    duration: 1200,
                                    position: 'top'
                                }).present();
                            }
                        });
                    }
                },
                {
                    text: '取消',
                    handler: function () {
                    }
                }
            ]
        }).present();
    };
    LmtagsummarytechinfoPage.prototype.historyview = function () {
        this.navCtrl.push('HistorylistPage', {
            wfid: this.info['wfid'],
            title: '流程历史',
        });
    };
    LmtagsummarytechinfoPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    LmtagsummarytechinfoPage.prototype.updateWfstatus = function () {
        var _this = this;
        var url = "/" + this.code + "/list?sort=summaryid&order=desc&_search=false&rows=&page=&sidx=&sord=asc&projectid=" + this.info['projectid'];
        this.httpService.get(url, null, function (result) {
            if (result != null) {
                var rows = result.rows;
                _this.info['wfstatusname'] = rows.filter(function (item) { return item.summaryid == _this.info['summaryid']; })[0]['wfstatusname'];
            }
        });
    };
    LmtagsummarytechinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmtagsummarytechinfo',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagsummarytech/lmtagsummarytechinfo/lmtagsummarytechinfo.html"*/'<!--\n  Generated template for the LmtagsummaryspecialtyinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">技术监督总结（{{ info[\'wfstatusname\'] }}）</ion-title>\n    <span class="pull-right navbar-right">\n      <span class="pull-right report" (click)="historyview()">历史</span>\n    </span>\n  </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n    <div class="main">\n      <div class="top">\n        <div class="title">{{ info[\'projectname\'] }}</div>\n        <div class="info">\n          <span>检测时间：{{ info[\'planstarttime\'] }} 至 {{ info[\'planendtime\'] }}</span>\n          <span>检测专业：{{ info[\'specialtyname\'] }}</span>\n        </div>\n      </div>\n      <div id="iframeHeight">\n        <iframe *ngIf="loading == false && trustsrc != null" id="iframe" [src]="trustsrc"  frameborder="0" style="width:100%;min-height:100%;visibility: hidden;" ></iframe>\n        <p *ngIf="loading == false && trustsrc == null" style="text-align: center;padding: 16px 0;">暂无文件</p>\n        <p *ngIf="loading" style="text-align: center;padding: 16px 0;">获取数据中...</p>\n      </div>\n    </div>\n  </ion-content>\n\n  <ion-footer id="ionFooter">\n    <ion-toolbar>\n      <p style="widows: 100%;">\n        <button id="saveBtn" [disabled]="!hasSaveRole" (click)="send()" ion-button icon-start round style="width: 45%;position: absolute;">\n          <ion-icon name=\'send\'></ion-icon>\n          发送\n        </button>\n        <button id="back" [disabled]="!hasFetchBackRole" ion-button outline icon-start round style="margin-left:50%;width:45%;" (click)="back()">\n          <ion-icon name=\'create\' is-active="false" ></ion-icon>\n          撤回\n        </button>\n      </p>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmtagsummarytech/lmtagsummarytechinfo/lmtagsummarytechinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_phone_device__["a" /* PhoneDeviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Events */]])
    ], LmtagsummarytechinfoPage);
    return LmtagsummarytechinfoPage;
}());

//# sourceMappingURL=lmtagsummarytechinfo.js.map

/***/ }),

/***/ 958:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmtagsummarytechinfoPageModule", function() { return LmtagsummarytechinfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmtagsummarytechinfo__ = __webpack_require__(1583);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LmtagsummarytechinfoPageModule = /** @class */ (function () {
    function LmtagsummarytechinfoPageModule() {
    }
    LmtagsummarytechinfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmtagsummarytechinfo__["a" /* LmtagsummarytechinfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmtagsummarytechinfo__["a" /* LmtagsummarytechinfoPage */]),
            ],
        })
    ], LmtagsummarytechinfoPageModule);
    return LmtagsummarytechinfoPageModule;
}());

//# sourceMappingURL=lmtagsummarytechinfo.module.js.map

/***/ })

});
//# sourceMappingURL=46.js.map