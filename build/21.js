webpackJsonp([21],{

/***/ 1605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdialogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { transliterate as tr } from 'transliteration';


/**
 * Generated class for the UserdialogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserdialogPage = /** @class */ (function () {
    //public indexs = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    function UserdialogPage(navCtrl, navParams, storage, httpService, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpService = httpService;
        this.events = events;
        this.sections = [];
        this.userList = [];
        this.indexs = [];
        //多选类型
        this.type = 'multiple';
        this.typeid = '';
        this.typename = '';
        this.array = [];
        this.arrayindex = 'userid';
        this.notInUserId = "";
        this.inUserId = "";
        this.count = 0;
        this.url = '';
        if (this.navParams.get('type') != undefined && this.navParams.get('type') != '' && this.navParams.get('type') != null) {
            this.type = this.navParams.get('type');
            this.typeid = this.navParams.get('typeid');
            this.typename = this.navParams.get('typename');
            this.url = this.navParams.get('url');
            if (this.navParams.get('array') != undefined) {
                console.log('navParams ---> ', this.navParams.get('array'), this.navParams.get('arrayindex'));
                this.array = this.navParams.get('array');
                this.count = this.array.length;
                if (this.navParams.get('arrayindex') != undefined) {
                    this.arrayindex = this.navParams.get('arrayindex');
                }
            }
            if (this.navParams.get('notInUserId') != undefined) {
                this.notInUserId = this.navParams.get('notInUserId');
            }
            if (this.navParams.get('inUserId') != undefined) {
                this.inUserId = this.navParams.get('inUserId');
            }
            if (this.type == 'single') {
                __WEBPACK_IMPORTED_MODULE_4_jquery__('.newbuilt').hide();
            }
        }
    }
    UserdialogPage.prototype.ionViewWillEnter = function () {
        this.findDescription();
    };
    UserdialogPage.prototype.findDescription = function () {
        var _this = this;
        this.indexs = [];
        this.sections = [];
        if (this.type == 'single') {
            __WEBPACK_IMPORTED_MODULE_4_jquery__('.newbuilt').hide();
        }
        // console.log(this.notInUserId)
        // console.log(this.array)
        var url = '/user/list?1=1&sort=name&rows=-1&sord=asc';
        if (this.notInUserId != '') {
            url = '/user/list?1=1&notInUserId=' + this.notInUserId + '&sort=status+asc%2C+account&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc';
        }
        if (this.inUserId != '') {
            url = '/user/list?1=1&inUserId=' + this.inUserId + '&sort=status+asc%2C+account&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc';
        }
        if (this.username != undefined && this.username != "") {
            url = url + "&where=&fuzzysearch=" + this.username;
        }
        if (this.navParams.get('url') != '' && this.navParams.get('url') != undefined && this.navParams.get('url') != null) {
            url = this.navParams.get('url');
        }
        this.httpService.get(url, null, function (result) {
            if (result != null && result.rows.length > 0) {
                var rows = result.rows;
                for (var i = 0; i < rows.length; i++) {
                    rows[i].account = rows[i].name;
                    rows[i].status = false;
                    for (var j = 0; j < _this.array.length; j++) {
                        if (rows[i].id == _this.array[j][_this.arrayindex]) {
                            rows[i].status = true;
                        }
                    }
                    rows[i].account = getPinYinByName(rows[i].account).toUpperCase().slice(0, 1);
                    _this.indexs.push(rows[i].account);
                }
                _this.sections = rows;
                _this.indexs = __WEBPACK_IMPORTED_MODULE_4_jquery__["unique"](_this.indexs.sort()); //去重并按字母排序
            }
        });
    };
    //选中人名就执行
    UserdialogPage.prototype.chooseuser = function (item) {
        console.log(item + "----item----");
        if (this.type == 'single') {
            __WEBPACK_IMPORTED_MODULE_4_jquery__('.newbuilt').hide();
            item.typeid = this.typeid;
            item.typename = this.typename;
            this.navCtrl.pop();
            this.events.publish('user:userinfo', item, Date.now());
        }
        else {
            this.userList = [];
            if (this.sections != null && this.sections.length > 0) {
                for (var i = 0; i < this.sections.length; i++) {
                    if (this.sections[i].status == true) {
                        this.userList.push(this.sections[i]);
                    }
                }
                __WEBPACK_IMPORTED_MODULE_4_jquery__("#count").text("(" + this.userList.length + ")");
            }
        }
        //this.navCtrl.pop();
    };
    UserdialogPage.prototype.commitBtn = function () {
        // this.storage.set(StorageProvider.CHOOSE_USERINFODIALOG,this.userList);
        this.navCtrl.pop();
        this.events.publish('user:userinfo', this.userList, Date.now());
    };
    UserdialogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-userdialog',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/system/userdialog/userdialog.html"*/'\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">选择用户</ion-title>\n    <span class="newbuilt" (click)="commitBtn()">完成<div id="count">({{count}})</div></span>\n  </ion-navbar>\n  <div class="hrefhearer">\n    <div class="search-user">\n      <ion-icon name="search" class="ion-search"></ion-icon>\n      <input type="text" style="width:100%;" placeholder="搜索" [(ngModel)]="username" (keyup)="findDescription()">\n      <!-- <ion-icon ios="ios-close-circle" md="md-close-circle" class="close" (click)="removeall()"></ion-icon> -->\n  </div>\n  </div>\n</ion-header>\n\n<ion-content padding class="userdialog">\n  <ion-index-list [hasTop]="true" *ngIf="indexs!=[] && indexs!=null && indexs!=underfined && indexs!=\'\'">\n    <ng-container *ngFor="let i of indexs" >\n      <ion-index-section [index] = "i" >\n        <ng-container *ngFor="let section of sections" >\n          <ion-index-cell *ngIf="section.account==i" >\n              <ion-item>\n                  <ion-label> {{section.name}}</ion-label>\n                  <ion-checkbox [(ngModel)]="section.status" (click)="chooseuser(section)"></ion-checkbox>\n              </ion-item>\n          </ion-index-cell>\n        </ng-container>\n      </ion-index-section>\n    </ng-container>\n  </ion-index-list>\n</ion-content>\n\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/system/userdialog/userdialog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], UserdialogPage);
    return UserdialogPage;
}());

//# sourceMappingURL=userdialog.js.map

/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdialogPageModule", function() { return UserdialogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userdialog__ = __webpack_require__(1605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_index_list__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserdialogPageModule = /** @class */ (function () {
    function UserdialogPageModule() {
    }
    UserdialogPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__userdialog__["a" /* UserdialogPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__userdialog__["a" /* UserdialogPage */]), __WEBPACK_IMPORTED_MODULE_3_ionic3_index_list__["a" /* IndexListModule */]
            ],
        })
    ], UserdialogPageModule);
    return UserdialogPageModule;
}());

//# sourceMappingURL=userdialog.module.js.map

/***/ })

});
//# sourceMappingURL=21.js.map