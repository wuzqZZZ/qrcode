webpackJsonp([24],{

/***/ 1599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_phone_device__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
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
 * Generated class for the ReportviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportviewPage = /** @class */ (function () {
    function ReportviewPage(navCtrl, navParams, phoneDevice, trusturl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.phoneDevice = phoneDevice;
        this.trusturl = trusturl;
        this.platform = platform;
        this.tag = false;
        this.name = '';
        this.id = '';
        this.title = '';
        this.code = '';
        this.src = '/report/view/html/';
        this.name = this.navParams.get('name'); //id
        this.id = this.navParams.get('id'); //id
        this.code = this.navParams.get('code');
        if (this.name == undefined) {
            this.title = '暂无预览';
        }
        else {
            this.title = this.name + '检(维)修工作票';
            this.src = __WEBPACK_IMPORTED_MODULE_3__providers_config__["a" /* ConfigProvider */].apiUrl + this.src + this.code + '?' + 'id=' + this.id;
            // this.src=this.src+this.data[Object.keys(this.data)[0]];
            this.trustsrc = this.trusturl.bypassSecurityTrustResourceUrl(this.src);
            // this.trustsrc ='/report/view/html/ttWorkticketElecParent?id=335b128172a8400f84b2e81f1dd029cd'
        }
        this.phoneDevice.phoneBacktoPop(this.navCtrl);
    }
    // 因为iframe 加载是在页面dom节点完全生成完成之后所以要加上延迟函数
    ReportviewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            console.log('platform is ios ? ', _this.platform.is('ios'));
            // 按照设备高度填充剩余空间
            var len = __WEBPACK_IMPORTED_MODULE_5_jquery__('.main').length - 1;
            var height = __WEBPACK_IMPORTED_MODULE_5_jquery__('.main')[len].offsetHeight - __WEBPACK_IMPORTED_MODULE_5_jquery__('.main')[len].children[0].offsetHeight - 20;
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#iframeHeight').css('height', height);
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#iframe').css('visibility', 'visible');
            if (__WEBPACK_IMPORTED_MODULE_5_jquery__('#iframe')[0].contentWindow.document.body.children.length == 0) {
                return;
            }
            if (_this.platform.is('ios')) {
                __WEBPACK_IMPORTED_MODULE_5_jquery__('#iframe')[0].contentWindow.document.body.children[0].style['marginLeft'] = '-20px';
            }
            else {
                __WEBPACK_IMPORTED_MODULE_5_jquery__('#iframe')[0].contentWindow.document.body.style['margin'] = '0px';
            }
            // 按照内容实际宽度缩放
            var iframeWidth = __WEBPACK_IMPORTED_MODULE_5_jquery__('#iframe')[0].contentWindow.innerWidth;
            var fileWidth = __WEBPACK_IMPORTED_MODULE_5_jquery__('#iframe')[0].contentWindow.document.body.children[0].clientWidth;
            var widthScale = (iframeWidth / fileWidth).toFixed(3);
            // 按照内容实际高度裁剪，避免缩放导致的大片空白
            var fileHeight = __WEBPACK_IMPORTED_MODULE_5_jquery__('#iframe')[0].contentWindow.document.body.children[0].clientHeight * +widthScale;
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#iframe')[0].contentWindow.document.body.style['height'] = "" + fileHeight;
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#iframe')[0].contentWindow.document.body.children[0].style['transform'] = "scale(" + widthScale + ")";
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#iframe')[0].contentWindow.document.body.children[0].style['transform-origin'] = '0 top 0';
            var touchtime = 0;
            // 模拟ios双击
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#iframe')[0].contentWindow.document.body.children[0].onclick = function () {
                console.log(_this.tag);
                if (new Date().getTime() - touchtime < 500) {
                    // console.log('双击了');
                    __WEBPACK_IMPORTED_MODULE_5_jquery__('#iframe')[0].contentWindow.document.body.children[0].style['transform'] = 'scale(1,1)';
                    _this.tag = !_this.tag;
                }
                else {
                    if (__WEBPACK_IMPORTED_MODULE_5_jquery__('#iframe')[0].contentWindow.innerWidth < 375) {
                        __WEBPACK_IMPORTED_MODULE_5_jquery__('#iframe')[0].contentWindow.document.body.children[0].style['transform'] = "scale(" + widthScale + ",.51)";
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_5_jquery__('#iframe')[0].contentWindow.document.body.children[0].style['transform'] = "scale(" + widthScale + ",.58)";
                    }
                    touchtime = new Date().getTime();
                    _this.tag = !_this.tag;
                }
            };
        }, 1000);
    };
    ReportviewPage.prototype.showbigcontent = function () {
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#iframe')[0].contentWindow.document.body.children[0].style['zoom'] = 2;
    };
    ReportviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reportview',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/system/reportview/reportview.html"*/'<!--\n  Generated template for the ReportviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div id="iframeHeight">\n    <iframe  id="iframe" [src]="trustsrc"  frameborder="0" style="width:100%;min-height:100%;visibility: hidden;"  ></iframe>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/system/reportview/reportview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_phone_device__["a" /* PhoneDeviceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */]])
    ], ReportviewPage);
    return ReportviewPage;
}());

//# sourceMappingURL=reportview.js.map

/***/ }),

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportviewPageModule", function() { return ReportviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportview__ = __webpack_require__(1599);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReportviewPageModule = /** @class */ (function () {
    function ReportviewPageModule() {
    }
    ReportviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reportview__["a" /* ReportviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reportview__["a" /* ReportviewPage */]),
            ],
        })
    ], ReportviewPageModule);
    return ReportviewPageModule;
}());

//# sourceMappingURL=reportview.module.js.map

/***/ })

});
//# sourceMappingURL=24.js.map