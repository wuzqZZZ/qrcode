webpackJsonp([28],{

/***/ 1010:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerPageModule", function() { return ScannerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scanner__ = __webpack_require__(1637);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ScannerPageModule = /** @class */ (function () {
    function ScannerPageModule() {
    }
    ScannerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__scanner__["a" /* ScannerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__scanner__["a" /* ScannerPage */]),
            ],
        })
    ], ScannerPageModule);
    return ScannerPageModule;
}());

//# sourceMappingURL=scanner.module.js.map

/***/ }),

/***/ 1637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_qr_scanner__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sqlite__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ScannerPage = /** @class */ (function () {
    function ScannerPage(navCtrl, navParams, qrscanner, platform, storage, sqlite, toastCtrl, loadingCtrl, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrscanner = qrscanner;
        this.platform = platform;
        this.storage = storage;
        this.sqlite = sqlite;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.httpService = httpService;
        this.lightFlag = false;
        this.type = '';
        this.taskid = '';
        this.isBrowser = false;
        this.loading = null;
        this.offlinepi = this.storage.get(__WEBPACK_IMPORTED_MODULE_5__providers_storage__["a" /* StorageProvider */].OFFLINE_PI);
    }
    ScannerPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.popToRoot();
        });
        this.lightFlag = false;
        // 判断是不是浏览器环境
        this.isBrowser = this.storage.get(__WEBPACK_IMPORTED_MODULE_5__providers_storage__["a" /* StorageProvider */].IS_BROWSER);
        if (this.isBrowser) {
            console.log('== 浏览器H5扫码 ==');
            this.browserQRScanner();
        }
        else {
            console.log('== APP插件扫码 ==');
            this.qrscanner.destroy();
            this.scanQRScanner();
        }
        this.type = this.navParams.get('type');
        this.taskid = this.navParams.get('taskid');
    };
    ScannerPage.prototype.ionViewDidLeave = function () {
        if (this.isBrowser) {
            this.onScanStop();
        }
        else {
            this.qrscanner.hide();
            this.qrscanner.destroy();
        }
    };
    //回退按钮
    ScannerPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    //调用插件开始扫码
    ScannerPage.prototype.scanQRScanner = function () {
        var _this = this;
        if (typeof this.qrscanner != undefined) {
            this.qrscanner.prepare().then(function (status) {
                if (status.authorized) {
                    // alert('成功授权');
                    var scanSub_1 = _this.qrscanner.scan().subscribe(function (text) {
                        // alert(text);
                        console.log('scanQRScanner扫描获取的数据：', text, ';扫码类型code：', _this.type);
                        if (_this.type === 'leasset') {
                            var url = '/query/le/leAsset/findOne?id=' + text;
                            _this.httpService.get(url, null, function (res) {
                                if (res.code === 0) {
                                    if (res.data[0]['locationtype'] != 'system') {
                                        _this.navCtrl.push('LeassetinfoPage', { 'assetinfo': res.data[0] });
                                    }
                                    else {
                                        _this.navCtrl.push('LeassetPage', { 'nodetypeCA': true, 'description': res.data[0].description, 'globalnum': res.data[0].gobalnum });
                                    }
                                }
                            });
                        }
                        if (_this.type === 'pitask') {
                            if ((_this.platform.is('android') || _this.platform.is('ios')) && _this.platform.is('cordova') && _this.offlinepi == 1) {
                                _this.sqlite.initDb(function () {
                                    var query_findlastresult = "select * from pi_task_loc where taskid = ? and assetnum=?";
                                    _this.sqlite.queryOne(query_findlastresult, [_this.taskid, text], function (result) {
                                        if (result != null && result != undefined) {
                                            _this.navCtrl.push('PiTasklocPage', {
                                                'taskid': result['taskid'],
                                                'locid': result['locid'],
                                                'tasklocid': result['tasklocid'],
                                                'patrolmanname': _this.navParams.get('patrolmanname'),
                                                'offlienfrom': _this.navParams.get('offlienfrom')
                                            });
                                        }
                                    });
                                });
                            }
                            else {
                                _this.httpService.get('query/pi/piTaskLoc/findTaskLoc?taskid=' + _this.taskid + '&locationnum=' + text, null, function (res) {
                                    if (res.code === 0) {
                                        _this.navCtrl.push('PiTasklocPage', {
                                            'taskid': _this.taskid,
                                            'locid': res.data[0].locid,
                                            'tasklocid': res.data[0].tasklocid,
                                            'patrolmanname': _this.navParams.get('patrolmanname'),
                                            'offlienfrom': _this.navParams.get('offlienfrom')
                                        });
                                    }
                                });
                            }
                        }
                        if (_this.type === 'piinout') {
                            _this.httpService.get('/piInOut/qrcodePiInOut?locationnum=' + text, null, function (res) {
                                if (res.code === 0) {
                                    _this.navCtrl.push('PiinoutinfoPage', {
                                        id: res.data[0].id
                                    });
                                }
                            });
                        }
                        if (_this.type === 'tmtool') {
                            _this.httpService.get('/query/tm/tmTool/findTmToolCode?code=' + text, null, function (res) {
                                if (res.code === 0) {
                                    _this.navCtrl.push('TmtoolinfoPage', { 'title': res.data[0].description, 'tool': res.data[0] });
                                }
                            });
                        }
                        if (_this.type === 'fmtoolplan') {
                            _this.httpService.get('/query/fm/fmToolPlan/findFmToolPlanByCode?code=' + text, null, function (res) {
                                if (res.code === 0) {
                                    _this.navCtrl.push('FmtoolplaninfoPage', { 'toolplaninfo': res.data[0] });
                                }
                            });
                        }
                        if (_this.type === 'tmtoolplan') {
                            _this.httpService.get('/query/tm/tmToolPlan/findTmToolPlanByCode?code=' + text, null, function (res) {
                                if (res.code === 0) {
                                    _this.navCtrl.push('TmtoolplaninfoPage', { 'toolplaninfo': res.data[0] });
                                }
                            });
                        }
                        if (_this.type === 'tmToolInventory') {
                            _this.httpService.get('/tmToolInventory/qrcodeTmTool?id=' + _this.navParams.get('id') + '&toolcode=' + text, null, function (res) {
                                if (res.code === 0) {
                                    _this.navCtrl.push('TmtoolinventorytabledetailsPage', {
                                        id: res.data[0].id
                                    });
                                }
                            });
                        }
                        if (_this.type === 'tmToolRecord') {
                            // /tmToolRecord/qrcodeTmTool?id=维修单ID&toolcode=工器具编号
                            // /tmToolRecord/qrcodeTmTool?id=维修单ID&toolcode=工器具编号
                            _this.httpService.get('/tmToolRecord/qrcodeTmTool?id=' + _this.navParams.get('id') + '&toolcode=' + text, null, function (res) {
                                if (res.code === 0) {
                                    _this.navCtrl.push('TmtoolrecordinfotabledetailsPage', {
                                        id: res.data[0].id
                                    });
                                    // this.navCtrl.push('TmtoolinventorytabledetailsPage',{});
                                }
                            });
                        }
                        if (_this.type === 'fmToolInventory') {
                            _this.httpService.get('/fmToolInventory/qrcodeInventory?id=' + _this.navParams.get('id') + '&code=' + text, null, function (res) {
                                if (res.code === 0) {
                                    _this.navCtrl.push('FmtoolinventorytabledetailsPage', {
                                        id: res.data[0].id
                                    });
                                    // this.navCtrl.push('TmtoolinventorytabledetailsPage',{});
                                }
                            });
                        }
                        if (_this.type === 'fmToolInventory') {
                            _this.httpService.get('/fmToolInventory/qrcodeInventory?id=' + _this.navParams.get('id') + '&code=' + text, null, function (res) {
                                if (res.code === 0) {
                                    _this.navCtrl.push('FmtoolinventorytabledetailsPage', {
                                        id: res.data[0].id
                                    });
                                    // this.navCtrl.push('TmtoolinventorytabledetailsPage',{});
                                }
                            });
                        }
                        if (_this.type === 'Emgtoolinventory') {
                            _this.httpService.get('/emgSuppliesInventory/qrcodeInventory?id=' + _this.navParams.get('id') + '&code=' + text, null, function (res) {
                                if (res.code === 0) {
                                    _this.navCtrl.push('EmgtoolinventorytabledetailsPage', {
                                        id: res.data[0].id
                                    });
                                    // this.navCtrl.push('TmtoolinventorytabledetailsPage',{});
                                }
                            });
                        }
                        if (_this.type === 'EmgsuppliesPage') {
                            _this.httpService.get('/query/emg/emgSupplies/findEmgSuppliesByCode?code=' + text, null, function (res) {
                                if (res.code === 0) {
                                    _this.navCtrl.push('EmgsuppliesinfoPage', {
                                        id: res.data[0].id,
                                        type: 'edit'
                                    });
                                    // this.navCtrl.push('TmtoolinventorytabledetailsPage',{});
                                }
                            });
                        }
                        if (_this.type === 'semInspectionTask') {
                            _this.httpService.get('/semInspectionTask/list?kksnum=' + text, null, function (res) {
                                if (res.total > 0) {
                                    _this.navCtrl.push('SeminspectionrecordmanifestPage', {
                                        taskid: res.rows[0].taskid,
                                        type: 'edit'
                                    });
                                }
                                else {
                                    _this.navCtrl.push('SeminspectionrecordmanifestPage', {
                                        kksnum: text,
                                        type: 'add'
                                    });
                                }
                            });
                        }
                        // 其他
                        var qrdata = JSON.parse(text);
                        if (qrdata.type == 'lmtagQualityInspection') {
                            setTimeout(function () {
                                _this.navCtrl.push('LmtagqualityinspectioninfoPage', {
                                    type: 'edit',
                                    id: qrdata.id
                                });
                            }, 1);
                        }
                        _this.qrscanner.hide();
                        scanSub_1.unsubscribe();
                        _this.qrscanner.destroy();
                        _this.navCtrl.pop();
                    });
                    // this.qrscanner.show();
                }
                else if (status.denied) {
                    //提醒用户权限没有开启  
                    // alert('没有权限开启')
                    _this.qrscanner.openSettings();
                }
                else {
                }
            }, function (err) {
                alert('出错了' + err);
            });
        }
        else {
        }
    };
    //手机手电筒控制
    ScannerPage.prototype.openlight = function () {
        this.lightFlag = !this.lightFlag;
        if (this.lightFlag == true) {
            this.qrscanner.enableLight();
        }
        else {
            this.qrscanner.disableLight();
        }
    };
    /**
     * Resolves the QR code data and performs specific actions based on the type of QR code.
     * @param {string} text - The QR code text to be resolved.
     */
    ScannerPage.prototype.resolveQrCodeData = function (text) {
        var _this = this;
        if (this.type === 'leasset') {
            var url = '/query/le/leAsset/findOne?id=' + text;
            this.httpService.get(url, null, function (res) {
                if (res.code === 0) {
                    if (res.data[0]['locationtype'] != 'system') {
                        _this.navCtrl.push('LeassetinfoPage', { 'assetinfo': res.data[0] });
                    }
                    else {
                        _this.navCtrl.push('LeassetPage', { 'nodetypeCA': true, 'description': res.data[0].description, 'globalnum': res.data[0].gobalnum });
                    }
                }
            });
        }
        if (this.type === 'pitask') {
            if ((this.platform.is('android') || this.platform.is('ios')) && this.platform.is('cordova') && this.offlinepi == 1) {
                this.sqlite.initDb(function () {
                    var query_findlastresult = "select * from pi_task_loc where taskid = ? and assetnum=?";
                    _this.sqlite.queryOne(query_findlastresult, [_this.taskid, text], function (result) {
                        if (result != null && result != undefined) {
                            _this.navCtrl.push('PiTasklocPage', {
                                'taskid': result['taskid'],
                                'locid': result['locid'],
                                'tasklocid': result['tasklocid'],
                                'patrolmanname': _this.navParams.get('patrolmanname'),
                                'offlienfrom': _this.navParams.get('offlienfrom')
                            });
                        }
                    });
                });
            }
            else {
                this.httpService.get('query/pi/piTaskLoc/findTaskLoc?taskid=' + this.taskid + '&locationnum=' + text, null, function (res) {
                    if (res.code === 0) {
                        _this.navCtrl.push('PiTasklocPage', {
                            'taskid': _this.taskid,
                            'locid': res.data[0].locid,
                            'tasklocid': res.data[0].tasklocid,
                            'patrolmanname': _this.navParams.get('patrolmanname'),
                            'offlienfrom': _this.navParams.get('offlienfrom')
                        });
                    }
                });
            }
        }
        if (this.type === 'piinout') {
            this.httpService.get('/piInOut/qrcodePiInOut?locationnum=' + text, null, function (res) {
                if (res.code === 0) {
                    _this.navCtrl.push('PiinoutinfoPage', {
                        id: res.data[0].id
                    });
                }
            });
        }
        if (this.type === 'tmtool') {
            this.httpService.get('/query/tm/tmTool/findTmToolCode?code=' + text, null, function (res) {
                if (res.code === 0) {
                    _this.navCtrl.push('TmtoolinfoPage', { 'title': res.data[0].description, 'tool': res.data[0] });
                }
            });
        }
        if (this.type === 'fmtoolplan') {
            this.httpService.get('/query/fm/fmToolPlan/findFmToolPlanByCode?code=' + text, null, function (res) {
                if (res.code === 0) {
                    _this.navCtrl.push('FmtoolplaninfoPage', { 'toolplaninfo': res.data[0] });
                }
            });
        }
        if (this.type === 'tmtoolplan') {
            this.httpService.get('/query/tm/tmToolPlan/findTmToolPlanByCode?code=' + text, null, function (res) {
                if (res.code === 0) {
                    _this.navCtrl.push('TmtoolplaninfoPage', { 'toolplaninfo': res.data[0] });
                }
            });
        }
        if (this.type === 'tmToolInventory') {
            this.httpService.get('/tmToolInventory/qrcodeTmTool?id=' + this.navParams.get('id') + '&toolcode=' + text, null, function (res) {
                if (res.code === 0) {
                    _this.navCtrl.push('TmtoolinventorytabledetailsPage', {
                        id: res.data[0].id
                    });
                }
            });
        }
        if (this.type === 'tmToolRecord') {
            // /tmToolRecord/qrcodeTmTool?id=维修单ID&toolcode=工器具编号
            // /tmToolRecord/qrcodeTmTool?id=维修单ID&toolcode=工器具编号
            this.httpService.get('/tmToolRecord/qrcodeTmTool?id=' + this.navParams.get('id') + '&toolcode=' + text, null, function (res) {
                if (res.code === 0) {
                    _this.navCtrl.push('TmtoolrecordinfotabledetailsPage', {
                        id: res.data[0].id
                    });
                    // this.navCtrl.push('TmtoolinventorytabledetailsPage',{});
                }
            });
        }
        if (this.type === 'fmToolInventory') {
            this.httpService.get('/fmToolInventory/qrcodeInventory?id=' + this.navParams.get('id') + '&code=' + text, null, function (res) {
                if (res.code === 0) {
                    _this.navCtrl.push('FmtoolinventorytabledetailsPage', {
                        id: res.data[0].id
                    });
                    // this.navCtrl.push('TmtoolinventorytabledetailsPage',{});
                }
            });
        }
        if (this.type === 'fmToolInventory') {
            this.httpService.get('/fmToolInventory/qrcodeInventory?id=' + this.navParams.get('id') + '&code=' + text, null, function (res) {
                if (res.code === 0) {
                    _this.navCtrl.push('FmtoolinventorytabledetailsPage', {
                        id: res.data[0].id
                    });
                    // this.navCtrl.push('TmtoolinventorytabledetailsPage',{});
                }
            });
        }
        if (this.type === 'Emgtoolinventory') {
            this.httpService.get('/emgSuppliesInventory/qrcodeInventory?id=' + this.navParams.get('id') + '&code=' + text, null, function (res) {
                if (res.code === 0) {
                    _this.navCtrl.push('EmgtoolinventorytabledetailsPage', {
                        id: res.data[0].id
                    });
                    // this.navCtrl.push('TmtoolinventorytabledetailsPage',{});
                }
            });
        }
        if (this.type === 'EmgsuppliesPage') {
            this.httpService.get('/query/emg/emgSupplies/findEmgSuppliesByCode?code=' + text, null, function (res) {
                if (res.code === 0) {
                    _this.navCtrl.push('EmgsuppliesinfoPage', {
                        id: res.data[0].id,
                        type: 'edit'
                    });
                    // this.navCtrl.push('TmtoolinventorytabledetailsPage',{});
                }
            });
        }
        if (this.type === 'semInspectionTask') {
            this.httpService.get('/semInspectionTask/list?kksnum=' + text, null, function (res) {
                if (res.total > 0) {
                    _this.navCtrl.push('SeminspectionrecordmanifestPage', {
                        taskid: res.rows[0].taskid,
                        type: 'edit'
                    });
                }
                else {
                    _this.navCtrl.push('SeminspectionrecordmanifestPage', {
                        kksnum: text,
                        type: 'add'
                    });
                }
            });
        }
        // 其他
        var qrdata = JSON.parse(text);
        if (qrdata.type == 'lmtagQualityInspection') {
            setTimeout(function () {
                _this.navCtrl.push('LmtagqualityinspectioninfoPage', {
                    type: 'edit',
                    id: qrdata.id
                });
            }, 1);
        }
    };
    /**
     * Scans for QR code using the browser's camera.
     * @return {void} This function does not return a value.
     */
    ScannerPage.prototype.browserQRScanner = function () {
        var _this = this;
        if (Html5Qrcode) {
            this.loading = this.loadingCtrl.create({
                content: '智能扫码加载中'
            });
            this.loading.present();
            Html5Qrcode.getCameras()
                .then(function (devices) {
                if (devices && devices.length) {
                    var cameraId = "";
                    if (devices.length == 1) {
                        cameraId = devices[0].id; //前置摄像头
                    }
                    else {
                        cameraId = devices[1].id; //后置摄像头
                    }
                    if (cameraId) {
                        _this.startWithCameraId(cameraId);
                    }
                }
                else {
                    _this.startWithoutCameraId();
                }
            })
                .catch(function (err) {
                console.log("没有获取摄像头设备...");
                _this.loading.dismiss();
                _this.toastCtrl.create({
                    message: '没有获取到摄像头设备,请重试',
                    duration: 3000,
                    position: 'top'
                }).present();
            });
        }
    };
    //带相机ID扫描
    ScannerPage.prototype.startWithCameraId = function (cameraId) {
        var _this = this;
        this.qrCode = new Html5Qrcode('reader');
        this.qrCode.start({ deviceId: { exact: cameraId } }, { fps: 10, qrbox: 220 }, this.onScanSuccess, // 扫码成功回调函数
        this.onScanFailure)
            .then(function () {
            // 插件启动成功
            _this.loading.dismiss();
        })
            .catch(function (err) {
            console.log("通过摄像头扫码异常....", err);
            _this.loading.dismiss();
            _this.toastCtrl.create({
                message: '摄像头启动失败,请重试',
                duration: 3000,
                position: 'top'
            }).present();
        });
    };
    //不带相机ID扫描,允许传递约束来代替相机设备 ID
    ScannerPage.prototype.startWithoutCameraId = function () {
        var _this = this;
        this.qrCode = new Html5Qrcode('reader');
        //environment 表示后置摄像头  换成user则表示前置摄像头
        this.qrCode.start({ facingMode: "environment" } || {
            facingMode: { exact: "environment" },
        }, { fps: 10, qrbox: 220 }, this.onScanSuccess, this.onScanFailure)
            .then(function () {
            // 插件启动成功
            _this.loading.dismiss();
        })
            .catch(function (err) {
            console.log("通过摄像头扫码异常....", err);
            _this.loading.dismiss();
            _this.toastCtrl.create({
                message: '摄像头启动失败,请重试',
                duration: 3000,
                position: 'top'
            }).present();
        });
    };
    ScannerPage.prototype.onScanSuccess = function (decodedText, decodedResult) {
        console.log("onScanSuccess  decodedText, decodedResult => ", decodedText, decodedResult);
        this.onScanStop();
        if (decodedText != '' && decodedText != 'undefined') {
            this.resolveQrCodeData(decodedText);
        }
        else {
            this.toastCtrl.create({
                message: '二维码无数据,请重新扫描',
                duration: 3000,
                position: 'top'
            }).present();
        }
    };
    ScannerPage.prototype.onScanFailure = function (error) {
        // console.log(`onScanFailure  error => `, error)
        alert(JSON.stringify(error));
    };
    ScannerPage.prototype.onScanStop = function () {
        var _this = this;
        this.qrCode
            .stop()
            .then(function (ignore) {
            // QR Code scanning is stopped.
            console.log("QR Code scanning stopped.");
            _this.qrCode.clear();
        })
            .catch(function (err) {
            // Stop failed, handle it.
            console.log("Unable to stop scanning.");
        });
    };
    ScannerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-scanner',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/scanner/scanner.html"*/'\n\n<div>\n  <ion-icon name="close" style="font-size: 20px;margin-left:10px;top: 7%;left:7%;position: absolute;color: #fff;\n	z-index: 9;" (click)="back()"></ion-icon>\n</div>\n\n<!-- <div class="scan-content">\n  <div class="line"></div>\n  <div class="font" >将二维码/条码放入框内，可自动扫描</div>\n</div> -->\n\n<ng-template *ngIf="!isBrowser; else default">\n  <div class="scan-content">\n    <div class="line"></div>\n    <div class="font" >将二维码/条码放入框内，可自动扫描</div>\n  </div>\n  <div class="footer">\n    <div style="margin-top:30px;">\n      <img src="assets/imgs/scan/flashlight2.jpg" alt="" (click)="openlight()">\n      <div *ngIf="lightFlag==false" style="color:white;margin-top:10px;">打开手电筒</div>\n      <div *ngIf="lightFlag==true"  style="color:white;margin-top:10px;">关闭手电筒</div>\n    </div>\n  </div>\n</ng-template>\n<ng-template #default>\n  <div style="height: 100%;background-color: #000;">\n    <div id="reader" style="width: 100%;"></div>\n    <div style="text-align: center;color: #fff;width: 100%;" >将二维码/条码放入框内，可自动扫描</div>\n  </div>\n</ng-template>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/scanner/scanner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__providers_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_sqlite__["a" /* SqliteProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_services__["a" /* HttpServicesProvider */]])
    ], ScannerPage);
    return ScannerPage;
}());

//# sourceMappingURL=scanner.js.map

/***/ })

});
//# sourceMappingURL=28.js.map