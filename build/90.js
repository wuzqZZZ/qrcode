webpackJsonp([90],{

/***/ 1547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmnewsPage; });
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the LmnewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LmnewsPage = /** @class */ (function () {
    function LmnewsPage(navCtrl, storage, navParams, httpService, phoneDevice) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.httpService = httpService;
        this.phoneDevice = phoneDevice;
        this.newslist = [];
        this.projectid = '';
        this.phoneDevice.phoneBacktoRoot(this.navCtrl);
        this.projectid = this.storage.get(__WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */].LM_PROJECTID);
        // this.initlist()
    }
    LmnewsPage.prototype.ionViewWillEnter = function () {
        this.initlist();
    };
    LmnewsPage.prototype.initlist = function () {
        var _this = this;
        var url = '/lmtagInteractive/list?projectid=' + this.projectid + '&sort=code&order=desc&_search=false&nd=1681442055425&rows=15&page=1&sidx=&sord=asc';
        this.httpService.get(url, null, function (res) { return __awaiter(_this, void 0, void 0, function () {
            var i, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(res.rows.length > 0)) return [3 /*break*/, 5];
                        i = 0;
                        _b.label = 1;
                    case 1:
                        if (!(i < res.rows.length)) return [3 /*break*/, 4];
                        _a = res.rows[i];
                        return [4 /*yield*/, this.initfiles(res.rows[i].interactiveid)];
                    case 2:
                        _a.coverfile = _b.sent();
                        _b.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        console.log(res.rows);
                        this.newslist = res.rows;
                        setTimeout(function () {
                            $('page-lmnews .newsbox').show();
                        }, 1);
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    };
    // initfiles(id, index, key) {
    //   this.httpService.getFiles('lmtagInteractive', id, res => {
    //     if (res.code == 0) {
    //       this.newslist[index][key] = res.data[0]
    //     }
    //   })
    // }
    LmnewsPage.prototype.initfiles = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.httpService.getFiles('lmtagInteractive', id, function (res) {
                if (res.code == 0 && res.data.length > 0) {
                    resolve(res.data[0]);
                }
                else {
                    resolve(null);
                }
            });
        });
    };
    LmnewsPage.prototype.gohomePage = function () {
        this.navCtrl.push('TabsPage', {
            curTabIndex: 1
        });
    };
    LmnewsPage.prototype.planmore = function (id) {
        this.navCtrl.push('LmnewsinfoPage', {
            type: 'edit',
            interactiveid: id,
        });
    };
    LmnewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lmnews',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmnews/lmnews.html"*/'<!--\n  Generated template for the LmnewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="mytoolbar">\n    <span class="pull-left navbar-left"  >\n      <!-- <ion-icon name=\'ios-arrow-back\' is-active="false" (click)="gohomePage()"></ion-icon> -->\n    </span>\n    <ion-title class="cptitle">现场直击</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="newsbox" *ngFor="let news of newslist" style="display: none;">\n    <div class="newsdate">{{ news.createtime || \'-\' }}</div>\n    <div class="newscontent" (click)="planmore(news.interactiveid)">\n      <div *ngIf="news.coverfile != null || news.coverfile != undefined">\n        <video *ngIf="news.coverfile.filetype == \'mp4\'; else default" [src]="news.coverfile.downurl"></video>\n        <ng-template #default>\n          <img [src]="news.coverfile.downurl" alt="封面图">\n        </ng-template>\n      </div>\n      <div class="newstitle">{{ news.description }}</div>\n    </div>\n  </div>\n  <div class="tips">没有更多了...</div>\n</ion-content>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/lm/lmnews/lmnews.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_phone_device__["a" /* PhoneDeviceProvider */]])
    ], LmnewsPage);
    return LmnewsPage;
}());

//# sourceMappingURL=lmnews.js.map

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmnewsPageModule", function() { return LmnewsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lmnews__ = __webpack_require__(1547);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LmnewsPageModule = /** @class */ (function () {
    function LmnewsPageModule() {
    }
    LmnewsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lmnews__["a" /* LmnewsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lmnews__["a" /* LmnewsPage */]),
            ],
        })
    ], LmnewsPageModule);
    return LmnewsPageModule;
}());

//# sourceMappingURL=lmnews.module.js.map

/***/ })

});
//# sourceMappingURL=90.js.map