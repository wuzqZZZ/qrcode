webpackJsonp([27],{

/***/ 1597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeptdialogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import * as $ from 'jquery'; //引用jq
/**
 * Generated class for the DeptdialogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DeptdialogPage = /** @class */ (function () {
    function DeptdialogPage(navCtrl, navParams, httpService, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.events = events;
        this.id = '';
        this.typeid = '';
        this.typename = '';
        this.id = this.navParams.get('id');
        this.typeid = this.navParams.get('typeid');
        this.typename = this.navParams.get('typename');
    }
    DeptdialogPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad DeptdialogPage');
        //设置区域网格树
        this.initTree();
    };
    //树初始化
    DeptdialogPage.prototype.initTree = function () {
        var _this = this;
        $('#myzTree').empty(); //清空树区域
        var setting = {
            check: {
                enable: true,
                chkStyle: "radio",
                radioType: "all"
            },
            data: {
                simpleData: {
                    enable: true,
                }
            },
            view: {
                dblClickExpand: false
            },
            callback: {
                beforeClick: function (e, treeId, treeNode) {
                    // var zTree = $.fn.zTree.getZTreeObj('myzTree');
                    //  zTree.checkNode(treeNode, !treeNode.checked, null, true);
                    _this.navCtrl.pop();
                    treeId.typeid = _this.typeid;
                    treeId.typename = _this.typename;
                    if (treeId.oldname != undefined && treeId.oldname != null && treeId.oldname != '') {
                        treeId.name = treeId.oldname;
                    }
                    _this.events.publish('dept:deptinfo', treeId, Date.now());
                    return false;
                },
                onCheck: function (e, treeId, treeNode) {
                    var zTree = $.fn.zTree.getZTreeObj('myzTree');
                    var nodes = zTree.getCheckedNodes(true);
                    // console.log()
                    treeNode.typeid = _this.typeid;
                    treeNode.typename = _this.typename;
                    if (treeNode.oldname != undefined && treeNode.oldname != null && treeNode.oldname != '') {
                        treeNode.name = treeNode.oldname;
                    }
                    _this.navCtrl.pop();
                    _this.events.publish('dept:deptinfo', treeNode, Date.now());
                }
            }
        };
        this.httpService.get('/cache/deptTreeList', null, function (result) {
            for (var i = 0; i < result.data.length; i++) {
                if (result.data[i].id == _this.id) {
                    result.data[i].checked = true;
                }
                else {
                    result.data[i].checked = false;
                }
            }
            $.fn.zTree.init($("#myzTree"), setting, result.data);
            fuzzySearch('myzTree', '#search', null, true);
        });
    };
    DeptdialogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-deptdialog',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/system/deptdialog/deptdialog.html"*/'<!--\n  Generated template for the DeptdialogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">选择组织</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n<!-- 点击选择树 -->\n\n<div style="width:100%;height:100%;" class="ztreeBox">\n  <div class="searchBox"><input type="text" id="search" placeholder="输入关键词搜索"></div>\n    <ul id="myzTree"  class="ztree"></ul>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/system/deptdialog/deptdialog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], DeptdialogPage);
    return DeptdialogPage;
}());

//# sourceMappingURL=deptdialog.js.map

/***/ }),

/***/ 972:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeptdialogPageModule", function() { return DeptdialogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deptdialog__ = __webpack_require__(1597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_index_list__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DeptdialogPageModule = /** @class */ (function () {
    function DeptdialogPageModule() {
    }
    DeptdialogPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__deptdialog__["a" /* DeptdialogPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__deptdialog__["a" /* DeptdialogPage */]), __WEBPACK_IMPORTED_MODULE_3_ionic3_index_list__["a" /* IndexListModule */]
            ],
        })
    ], DeptdialogPageModule);
    return DeptdialogPageModule;
}());

//# sourceMappingURL=deptdialog.module.js.map

/***/ })

});
//# sourceMappingURL=27.js.map