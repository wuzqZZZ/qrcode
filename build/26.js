webpackJsonp([26],{

/***/ 1597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipmentdialogPage; });
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
 * Generated class for the EquipmentdialogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EquipmentdialogPage = /** @class */ (function () {
    //public indexs = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    function EquipmentdialogPage(navCtrl, navParams, storage, httpService, menuCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpService = httpService;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.sections = [];
        this.equipmentCheckList = [];
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
        this.topNode = '';
        this.isshowNode = false;
        this.nodeList = [];
        this.leAssetList = [];
        this.nowPage = 1;
        this.maxPage = 1;
        this.timeout = null;
        if (this.navParams.get('type') != undefined && this.navParams.get('type') != '' && this.navParams.get('type') != null) {
            this.type = this.navParams.get('type');
            this.typeid = this.navParams.get('typeid');
            this.typename = this.navParams.get('typename');
            this.url = this.navParams.get('url');
            if (this.navParams.get('array') != undefined) {
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
    EquipmentdialogPage.prototype.ionViewWillEnter = function () {
        this.findDescription();
        this.initComboTree();
    };
    EquipmentdialogPage.prototype.findDescription = function (gobalnum) {
        var _this = this;
        if (gobalnum === void 0) { gobalnum = ''; }
        this.menuCtrl.close();
        // this.indexs = [];
        // this.sections = [];
        if (this.type == 'single') {
            __WEBPACK_IMPORTED_MODULE_4_jquery__('.newbuilt').hide();
        }
        // console.log(this.notInUserId)
        // console.log(this.array)
        var url = '/leAsset/list?1=1&sort=gobalnum&rows=20&sord=asc&page=' + this.nowPage;
        // if (this.notInUserId != '') {
        //   url = '/user/list?1=1&notInUserId=' + this.notInUserId + '&sort=status+asc%2C+account&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc';
        // }
        // if (this.inUserId != '') {
        //   url = '/user/list?1=1&inUserId=' + this.inUserId + '&sort=status+asc%2C+account&order=asc&_search=false&rows=-1&page=1&sidx=&sord=asc';
        // }
        if (this.equipmentname != undefined && this.equipmentname != "") {
            url = url + "&where=&fuzzysearch=" + encodeURIComponent(this.equipmentname);
        }
        if (gobalnum != undefined && gobalnum != '') {
            url = url + "&gobalnum=" + gobalnum;
        }
        // if (this.navParams.get('url') != '' && this.navParams.get('url') != undefined && this.navParams.get('url') != null) {
        //   url = this.navParams.get('url');
        // }
        url = url + '&nodetypeCA=true';
        this.httpService.get(url, null, function (result) {
            if (result != null && result.rows.length > 0) {
                _this.maxPage = result['total'];
                var rows = result.rows;
                for (var i = 0; i < rows.length; i++) {
                    // rows[i].account = rows[i].description;
                    rows[i].status = false;
                    for (var j = 0; j < _this.array.length; j++) {
                        if (rows[i].id == _this.array[j][_this.arrayindex]) {
                            rows[i].status = true;
                        }
                    }
                    // rows[i].account = getPinYinByName(rows[i].description).toUpperCase().slice(0, 1);
                    // this.indexs.push(rows[i].account);
                }
                _this.sections = _this.sections.concat(rows);
                console.log(_this.nowPage, _this.maxPage, _this.sections);
                // this.indexs = $.unique(this.indexs.sort());//去重并按字母排序
            }
        });
    };
    EquipmentdialogPage.prototype.loadleasset = function (event) {
        this.nowPage++;
        if (this.nowPage <= this.maxPage) {
            event.enable(true);
            this.findDescription();
            event.complete();
        }
        else {
            this.event = event;
            event.enable(false);
        }
    };
    EquipmentdialogPage.prototype.keyupSearch = function (e) {
        var _this = this;
        console.log(e);
        this.sections = [];
        this.nowPage = 1;
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(function () {
            _this.findDescription();
        }, 1000);
        this.menuCtrl.close();
    };
    //选中人名就执行
    EquipmentdialogPage.prototype.chooseuser = function (item) {
        console.log(JSON.stringify(item) + "----item----");
        if (this.type == 'single') {
            __WEBPACK_IMPORTED_MODULE_4_jquery__('.newbuilt').hide();
            item.typeid = this.typeid;
            item.typename = this.typename;
            this.navCtrl.pop();
            this.events.publish('user:userinfo', item, Date.now());
        }
        else {
            this.equipmentCheckList = [];
            if (this.sections != null && this.sections.length > 0) {
                for (var i = 0; i < this.sections.length; i++) {
                    if (this.sections[i].status == true) {
                        this.equipmentCheckList.push(this.sections[i]);
                    }
                }
                __WEBPACK_IMPORTED_MODULE_4_jquery__("#count").text("(" + this.equipmentCheckList.length + ")");
            }
        }
        //this.navCtrl.pop();
    };
    EquipmentdialogPage.prototype.commitBtn = function () {
        // this.storage.set(StorageProvider.CHOOSE_USERINFODIALOG,this.equipmentCheckList);
        this.navCtrl.pop();
        this.events.publish('user:userinfo', this.equipmentCheckList, Date.now());
    };
    // zTree
    EquipmentdialogPage.prototype.initComboTree = function () {
        var _this = this;
        var url = '/query/leAsset/leAsset/topTree';
        this.httpService.post(url, null, function (res) {
            if (res.code == 0) {
                if (res.data.length > 0) {
                    res.data.forEach(function (value, index) {
                        if (value['pId'] === '') {
                            _this.topNode = value;
                            res.data.splice(index, 1);
                            console.log(_this.topNode);
                            // return null;
                        }
                    });
                    _this.nodeList = res.data;
                    // console.log(this.nodeList);
                }
            }
        });
    };
    EquipmentdialogPage.prototype.showNodeinfo = function () {
        this.isshowNode = !this.isshowNode;
    };
    EquipmentdialogPage.prototype.openMenu = function () {
        this.menuCtrl.enable(true, 'comboTree1');
        this.menuCtrl.enable(false, 'comboTree');
        this.menuCtrl.open();
    };
    EquipmentdialogPage.prototype.getNodeinfo = function (event) {
        this.menuCtrl.close();
        console.log(event);
        this.nowPage = 1;
        this.sections = [];
        // this.id = event['id'];
        if (event['isParent'] == '1') {
            this.findDescription(event['gobalnum']);
        }
    };
    EquipmentdialogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-equipmentdialog',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/system/equipmentdialog/equipmentdialog.html"*/'\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">选择设备</ion-title>\n    <i class="iconfont icon-shuzhuangtu_o" (click)="openMenu()" style="font-size:24px;float: right;margin-right: 10px;"></i>\n    <span class="newbuilt" (click)="commitBtn()">完成<div id="count">({{count}})</div></span>\n  </ion-navbar>\n  <div class="hrefhearer">\n    <div class="search-user">\n      <ion-icon name="search" class="ion-search"></ion-icon>\n      <input type="text" style="width:100%;" placeholder="搜索" [(ngModel)]="equipmentname" (keyup)="keyupSearch()">\n      <!-- <ion-icon ios="ios-close-circle" md="md-close-circle" class="close" (click)="removeall()"></ion-icon> -->\n  </div>\n  </div>\n</ion-header>\n\n<ion-content padding class="userdialog">\n  <!-- <ion-index-list [hasTop]="true" *ngIf="indexs!=[] && indexs!=null && indexs!=underfined && indexs!=\'\'">\n    <ng-container *ngFor="let i of indexs" >\n      <ion-index-section [index] = "i" >\n        <ng-container *ngFor="let section of sections" >\n          <ion-index-cell *ngIf="section.account==i" >\n              <ion-item>\n                  <ion-label> {{section.description}}</ion-label>\n                  <ion-checkbox [(ngModel)]="section.status" (click)="chooseuser(section)"></ion-checkbox>\n              </ion-item>\n          </ion-index-cell>\n        </ng-container>\n      </ion-index-section>\n    </ng-container>\n  </ion-index-list> -->\n\n  <ion-item *ngFor="let section of sections">\n      <ion-label> {{section.description}}</ion-label>\n      <ion-checkbox [(ngModel)]="section.status" (click)="chooseuser(section)"></ion-checkbox>\n  </ion-item>\n\n  <ion-infinite-scroll (ionInfinite)="loadleasset($event)">\n      <ion-infinite-scroll-content\n      loadingSpinner="bubbles"\n      loadingText="拼命加载中...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n\n<ion-menu id="comboTree1" side="left" [content]="mycontentA" style="background: white;">\n  <!-- <ion-content style="background: white;"> -->\n    <div style="font-size: 18px;text-align: center;margin-top: 10px;">\n      <div>\n        <!-- <img src="assets/imgs/application/app-asset.png" alt="" style="width: 40px;height:40px;position: absolute;top: 10px;left: 20px;">   -->\n      </div>\n    </div>\n      <section>\n        <div (click)="showNodeinfo()" style="font-size: 16px;padding-left: 15px;" >\n          <ion-icon name="ios-arrow-forward" style="float: right;width: 30px;margin-right: 10px;text-align: center" *ngIf="isshowNode==false"></ion-icon>\n          <ion-icon name="ios-arrow-down-outline" style="float: right;width: 30px;margin-right: 10px;text-align: center" *ngIf="isshowNode==true"></ion-icon>\n          <span (click)="finddescription()">\n              <!-- <svg class="icon" aria-hidden="true">\n                  <use xlink:href="#icon-beipinbeijian"></use>\n              </svg> -->\n              <i class="iconfont icon-tubiao-" style="color: #0099ff;font-size: 22px;"></i>\n            {{topNode[\'name\']}}</span>\n        </div>\n        <div *ngIf="isshowNode==true">\n            <div *ngFor="let item of nodeList"  style="margin-left: 10px;">\n                <!-- <span (click)="showItemNodeInfo(item)">{{item[\'name\']}}</span> -->\n                <tree-node [assetinfo]="item" [isShow]="false" [navCtrl]="navCtrl" (nodeInfo)="getNodeinfo($event)" [ClickPositionId]="id"></tree-node>\n                <!-- <ion-icon name="ios-arrow-forward"></ion-icon> -->\n            </div>\n        </div>\n      </section>\n  <!-- </ion-content>   -->\n</ion-menu>\n\n<ion-nav #mycontentA [root]="EquipmentdialogPage" style="z-index: -999;"></ion-nav>\n\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/system/equipmentdialog/equipmentdialog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], EquipmentdialogPage);
    return EquipmentdialogPage;
}());

//# sourceMappingURL=equipmentdialog.js.map

/***/ }),

/***/ 972:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentdialogPageModule", function() { return EquipmentdialogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic3_index_list__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__equipmentdialog__ = __webpack_require__(1597);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EquipmentdialogPageModule = /** @class */ (function () {
    function EquipmentdialogPageModule() {
    }
    EquipmentdialogPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__equipmentdialog__["a" /* EquipmentdialogPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__equipmentdialog__["a" /* EquipmentdialogPage */]), __WEBPACK_IMPORTED_MODULE_2_ionic3_index_list__["a" /* IndexListModule */], __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], EquipmentdialogPageModule);
    return EquipmentdialogPageModule;
}());

//# sourceMappingURL=equipmentdialog.module.js.map

/***/ })

});
//# sourceMappingURL=26.js.map