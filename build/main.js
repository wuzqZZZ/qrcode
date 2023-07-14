webpackJsonp([99],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneDeviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_library__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_media_capture__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_streaming_media__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_photo_viewer__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_video_editor__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_themeable_browser__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_config__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_gallery_modal__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { BarcodeScanner } from '@ionic-native/barcode-scanner';













// import { ScannerPage } from '../pages/scanner/scanner';
var PhoneDeviceProvider = /** @class */ (function () {
    function PhoneDeviceProvider(camera, network, photolibrary, media, file, mediaCapture, streamingMedia, photoviewer, videoeditor, 
        // public barcodeScanner:BarcodeScanner,
        // public qrscanner:QRScanner,
        brower, modalCtrl, fileTransfer, platform) {
        this.camera = camera;
        this.network = network;
        this.photolibrary = photolibrary;
        this.media = media;
        this.file = file;
        this.mediaCapture = mediaCapture;
        this.streamingMedia = streamingMedia;
        this.photoviewer = photoviewer;
        this.videoeditor = videoeditor;
        this.brower = brower;
        this.modalCtrl = modalCtrl;
        this.fileTransfer = fileTransfer;
        this.platform = platform;
    }
    /**
     * 手机扫码功能
     */
    PhoneDeviceProvider.prototype.doScan = function (navctrl) {
        navctrl.push('ScannerPage', null, { "animate": false, "type": 'leasset' });
    };
    /**
     * 手机拍照
     */
    PhoneDeviceProvider.prototype.doPicture = function () {
        this.doCamera(this.camera.PictureSourceType.CAMERA);
        return this.imagedata;
    };
    /**
     * 从相册中获取图片
     */
    PhoneDeviceProvider.prototype.doPhotolibray = function () {
        this.doCamera(this.camera.PictureSourceType.PHOTOLIBRARY);
        return this.imagedata;
    };
    /**
     *
     * @param sourceType
     */
    PhoneDeviceProvider.prototype.doCamera = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: sourceType,
            correctOrientation: true,
            // mediaType: this.camera.MediaType.PICTURE,
            //allowEdit:true,
            targetWidth: 1024,
            targetHeight: 1024
        };
        var that = this;
        this.camera.getPicture(options).then(function (imageData) {
            console.log(imageData);
            that.imagedata = imageData;
            _this.photolibrary.saveImage(imageData, '天开云');
        }, function (err) {
            console.log('camera error');
        });
    };
    /**
     * 显示大图
     * @param url 图片地址数组
     * @param index 第一张图片的位置
     */
    PhoneDeviceProvider.prototype.showBigimage = function (itemList, index) {
        if (index === void 0) { index = 0; }
        var photos = [];
        // photos.push({url:itemList});
        console.log(itemList + "\n" + index);
        if (Array.isArray(itemList) == true) {
            for (var i = 0; i < itemList.length; i++) {
                photos.push({ url: itemList[i]['url'] });
            }
        }
        else {
            photos.push({ url: itemList });
        }
        // photos.push({url:item});
        // let src='file:///android_asset/www/'+document.getElementsByClassName('pitaskitems-image')[0].getAttribute('src');
        // let api = 'http://192.168.1.21:8100/assets/imgs/application/pitaskinfoPage/assetTest.png';
        // this.photoView.show(item,'设备指引图片',{share:true});
        // this.photoView.show('https://img.zcool.cn/community/0161eb554909920000019ae934d5c2.jpg@1280w_1l_2o_100sh.jpg');
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12_ionic_gallery_modal__["a" /* GalleryModal */], { photos: photos, initialSlide: index, closeIcon: 'ios-close-outline' });
        modal.present();
    };
    /**
     * @param bussid id
     * @param busstype 类型
     * @param options 参数
     * @param data
     */
    PhoneDeviceProvider.prototype.openInAppBrower = function (bussid, busstype, options, data) {
        var url = '';
        var exceptHead = '';
        for (var i = 1; i < busstype.length; i++) {
            exceptHead += busstype[i];
        }
        var bussname = busstype[0].toLocaleLowerCase() + exceptHead;
        if (bussid == undefined || bussid == '') {
            url = __WEBPACK_IMPORTED_MODULE_11__providers_config__["a" /* ConfigProvider */].apiUrl + '/' + bussname + '/edit/' + data[Object.keys(data)[0]];
        }
        else {
            url = __WEBPACK_IMPORTED_MODULE_11__providers_config__["a" /* ConfigProvider */].apiUrl + '/' + bussname + '/edit/' + bussid;
        }
        console.log(url);
        var browser = this.brower.create(url, '_blank', options);
    };
    /**
     * @param url
     * @param filename
     *
     * @param callback 回调函数
     */
    PhoneDeviceProvider.prototype.filedownLoad = function (url, filename, callback) {
        var filetransfer = this.fileTransfer.create();
        //本地文件路径
        var filepath = this.file.externalCacheDirectory + filename;
        filetransfer.download(url, this.file.externalCacheDirectory + filename).then(function () {
            callback(filepath);
        });
    };
    /**
     * 硬件的物理返回
     *
     */
    PhoneDeviceProvider.prototype.phoneBacktoRoot = function (navctrl) {
        this.platform.registerBackButtonAction(function () {
            navctrl.popToRoot();
        });
    };
    PhoneDeviceProvider.prototype.phoneBacktoPop = function (navctrl) {
        this.platform.registerBackButtonAction(function () {
            navctrl.pop();
        });
    };
    PhoneDeviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_library__["a" /* PhotoLibrary */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_media_capture__["a" /* MediaCapture */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_video_editor__["a" /* VideoEditor */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_themeable_browser__["a" /* ThemeableBrowser */],
            __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["s" /* Platform */]])
    ], PhoneDeviceProvider);
    return PhoneDeviceProvider;
}());

//# sourceMappingURL=phone-device.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
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
 * Created by Administrator on 2017/5/3 0003.
 */



/**
 * Utils类存放和业务无关的公共方法
 * @description
 */
var Utils = /** @class */ (function () {
    function Utils() {
        /**
         * 每次调用sequence加1
         * @type {()=>number}
         */
        this.getSequence = (function () {
            var sequence = 100;
            return function () {
                return ++sequence;
            };
        })();
    }
    Utils_1 = Utils;
    Utils.dealUrl = function (url) {
        if (!(Utils_1.startWith(url, "http:") || Utils_1.startWith(url, "https:"))) {
            if (Utils_1.startWith(url, "/")) {
                url = __WEBPACK_IMPORTED_MODULE_1__config__["a" /* ConfigProvider */].apiUrl + url;
            }
            else {
                url = __WEBPACK_IMPORTED_MODULE_1__config__["a" /* ConfigProvider */].apiUrl + "/" + url;
            }
        }
        if (url.indexOf("?") == -1) {
            url = url + "?jstime=" + new Date().getTime();
        }
        else {
            url = url + "&jstime=" + new Date().getTime();
        }
        return url;
    };
    Utils.isEmpty = function (value) {
        return value == null || typeof value === 'string' && value.length === 0;
    };
    Utils.isNotEmpty = function (value) {
        return !Utils_1.isEmpty(value);
    };
    /**
     * 格式“是”or“否”
     * @param value
     * @returns {string|string}
     */
    Utils.formatYesOrNo = function (value) {
        return value == 1 ? '是' : (value == '0' ? '否' : null);
    };
    /**
     * 判断字符串以**结束
     * @param str
     * @param s
     */
    Utils.endWith = function (str, s) {
        if (s == null || s == "" || str.length == 0 || s.length > str.length)
            return false;
        if (str.substring(str.length - s.length) == s) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     *
     * @param str
     *
     */
    Utils.endWithWhat = function (str) {
        return str.substring(str.lastIndexOf('.') + 1);
    };
    /**
     * 判断字符串以**开始
     * @param str
     * @param s
     */
    Utils.startWith = function (str, s) {
        if (s == null || s == "" || str.length == 0 || s.length > str.length) {
            return false;
        }
        if (str.substr(0, s.length) == s) {
            return true;
        }
        else {
            return false;
        }
    };
    Utils.getUuid = function () {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";
        var uuid = s.join("");
        return uuid.replace(new RegExp("-", "gm"), "");
    };
    /**
     * 日期对象转为日期字符串
     * @param date 需要格式化的日期对象
     * @param sFormat 输出格式,默认为yyyy-MM-dd                         年：y，月：M，日：d，时：h，分：m，秒：s
     * @example  dateFormat(new Date())                                "2017-02-28"
     * @example  dateFormat(new Date(),'yyyy-MM-dd')                   "2017-02-28"
     * @example  dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss')         "2017-02-28 09:24:00"
     * @example  dateFormat(new Date(),'hh:mm')                       "09:24"
     * @example  dateFormat(new Date(),'yyyy-MM-ddThh:mm:ss+08:00')   "2017-02-28T09:24:00+08:00"
     * @returns {string}
     */
    Utils.dateFormat = function (date, sFormat) {
        if (sFormat === void 0) { sFormat = 'yyyy-MM-dd'; }
        var time = {
            Year: 0,
            TYear: '0',
            Month: 0,
            TMonth: '0',
            Day: 0,
            TDay: '0',
            Hour: 0,
            THour: '0',
            hour: 0,
            Thour: '0',
            Minute: 0,
            TMinute: '0',
            Second: 0,
            TSecond: '0',
            Millisecond: 0
        };
        time.Year = date.getFullYear();
        time.TYear = String(time.Year).substr(2);
        time.Month = date.getMonth() + 1;
        time.TMonth = time.Month < 10 ? "0" + time.Month : String(time.Month);
        time.Day = date.getDate();
        time.TDay = time.Day < 10 ? "0" + time.Day : String(time.Day);
        time.Hour = date.getHours();
        time.THour = time.Hour < 10 ? "0" + time.Hour : String(time.Hour);
        time.hour = time.Hour < 13 ? time.Hour : time.Hour;
        time.Thour = time.hour < 10 ? "0" + time.hour : String(time.hour);
        time.Minute = date.getMinutes();
        time.TMinute = time.Minute < 10 ? "0" + time.Minute : String(time.Minute);
        time.Second = date.getSeconds();
        time.TSecond = time.Second < 10 ? "0" + time.Second : String(time.Second);
        time.Millisecond = date.getMilliseconds();
        return sFormat.replace(/yyyy/ig, String(time.Year))
            .replace(/yyy/ig, String(time.Year))
            .replace(/yy/ig, time.TYear)
            .replace(/y/ig, time.TYear)
            .replace(/MM/g, time.TMonth)
            .replace(/M/g, String(time.Month))
            .replace(/dd/ig, time.TDay)
            .replace(/d/ig, String(time.Day))
            .replace(/HH/g, time.THour)
            .replace(/H/g, String(time.Hour))
            .replace(/hh/g, time.Thour)
            .replace(/h/g, String(time.hour))
            .replace(/mm/g, time.TMinute)
            .replace(/m/g, String(time.Minute))
            .replace(/ss/ig, time.TSecond)
            .replace(/s/ig, String(time.Second))
            .replace(/fff/ig, String(time.Millisecond));
    };
    /**
     * 数组去掉版本号
     * @param 需要去掉version的数组
     * @example arry[];
     * @returns arry新数组
     */
    Utils.deleteVersion = function (arry) {
        for (var i = 0; i < arry.length; i++) {
            delete arry[i]['version'];
        }
        return arry;
    };
    /**
     * @string 需要格式化的日期
     */
    Utils.DateFormate = function (str) {
        if (str !== '' && str !== null) {
            return str.substring(0, 10);
        }
        else {
            return str;
        }
    };
    Utils.textAreaConfig = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__('textarea').each(function () {
            console.log(this.scrollHeight);
            this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;width:100%;display:block');
        }).on('input', function () {
            this.style.height = 'auto';
            console.log(this.scrollHeight);
            this.style.height = (this.scrollHeight) + 'px';
        });
    };
    /**
     * @string 去重
     */
    Utils.unique = function (arr, type) {
        var res = new Map();
        return arr.filter(function (a) { return !res.has(a[type]) && res.set(a[type], 1); });
    };
    Utils = Utils_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Utils);
    return Utils;
    var Utils_1;
}());

//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 209;

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dialog/dialog-changepassword/dialog-changepassword.module": [
		913,
		98
	],
	"../pages/dialog/dialog-first/dialog-first.module": [
		914,
		97
	],
	"../pages/dialog/dialog-pitaskitems/dialog-pitaskitems.module": [
		915,
		96
	],
	"../pages/dialog/leasset-dialog/leasset-dialog.module": [
		916,
		95
	],
	"../pages/edit-application/edit-application.module": [
		917,
		94
	],
	"../pages/excel/exceleditor/exceleditor.module": [
		918,
		93
	],
	"../pages/lm/lmhome/lmhome.module": [
		983,
		92
	],
	"../pages/lm/lmmain/lmaqgk/lmaqgk.module": [
		984,
		12
	],
	"../pages/lm/lmmain/lmcbgk/lmcbgk.module": [
		985,
		11
	],
	"../pages/lm/lmmain/lmchzl/lmchzl.module": [
		919,
		10
	],
	"../pages/lm/lmmain/lmjdgk/lmjdgk.module": [
		920,
		9
	],
	"../pages/lm/lmmain/lmjrjb/lmjrjb.module": [
		921,
		8
	],
	"../pages/lm/lmmain/lmtagsupervisory2/lmtagsupervisory2.module": [
		922,
		91
	],
	"../pages/lm/lmmain/lmzl/lmzl.module": [
		986,
		7
	],
	"../pages/lm/lmmain/lmzlgk/lmzlgk.module": [
		987,
		6
	],
	"../pages/lm/lmnews/lmnews.module": [
		923,
		90
	],
	"../pages/lm/lmnews/lmnewsinfo/lmnewsinfo.module": [
		924,
		89
	],
	"../pages/lm/lmpjMeeting/lmpjMeeting.module": [
		927,
		88
	],
	"../pages/lm/lmpjMeeting/lmpjMeetinginfo/lmpjMeetinginfo.module": [
		928,
		87
	],
	"../pages/lm/lmpjProject/lmpjProject.module": [
		931,
		86
	],
	"../pages/lm/lmpjProject/lmpjProjectinfo/lmpjProjectinfo.module": [
		989,
		85
	],
	"../pages/lm/lmpjifiles/lmpjifiles.module": [
		988,
		84
	],
	"../pages/lm/lmpjiitemtool/lmpjiitemtool.module": [
		925,
		5
	],
	"../pages/lm/lmpjiitemtool/lmpjiitemtoolinfo/lmpjiitemtoolinfo.module": [
		926,
		83
	],
	"../pages/lm/lmpjmmtpurch/lmpjmmtpurch.module": [
		929,
		4
	],
	"../pages/lm/lmpjmmtpurch/lmpjmmtpurchinfo/lmpjmmtpurchinfo.module": [
		930,
		82
	],
	"../pages/lm/lmsite/lmsite.module": [
		932,
		81
	],
	"../pages/lm/lmsite/lmsiteinfo/lmsiteinfo.module": [
		933,
		80
	],
	"../pages/lm/lmtabs/lmtabs.module": [
		934,
		79
	],
	"../pages/lm/lmtagarchivemanage/lmtagarchivemanage.module": [
		990,
		78
	],
	"../pages/lm/lmtagfile/lmtagfile.module": [
		935,
		3
	],
	"../pages/lm/lmtagfile/lmtagfilecomplereport/lmtagfilecomplereport.module": [
		991,
		77
	],
	"../pages/lm/lmtagfile/lmtagfileinfo/lmtagfileinfo.module": [
		1008,
		76
	],
	"../pages/lm/lmtagfile/lmtagfilelist/lmtagfilelist.module": [
		937,
		75
	],
	"../pages/lm/lmtagfile/lmtagfilematerial/lmtagfilematerial.module": [
		936,
		74
	],
	"../pages/lm/lmtagfile/lmtagfileoverhaul/lmtagfileoverhaul.module": [
		992,
		73
	],
	"../pages/lm/lmtagfile/lmtagfilesparelist/lmtagfilesparelist.module": [
		938,
		72
	],
	"../pages/lm/lmtagfile/lmtagfiletechdatarecord/lmtagfiletechdatarecord.module": [
		939,
		71
	],
	"../pages/lm/lmtagfile/lmtagfiletechdatarecord/lmtagfiletechdatarecorddetail/lmtagfiletechdatarecorddetail.module": [
		940,
		70
	],
	"../pages/lm/lmtagfile/lmtagfiletechdatarecord/lmtagfiletechdatarecordinfo/lmtagfiletechdatarecordinfo.module": [
		941,
		69
	],
	"../pages/lm/lmtagfile/lmtagfiletool/lmtagfiletool.module": [
		942,
		68
	],
	"../pages/lm/lmtagfilespare/lmtagfilespare.module": [
		943,
		2
	],
	"../pages/lm/lmtagnonconformity/lmtagnonconformity.module": [
		944,
		67
	],
	"../pages/lm/lmtagnonconformity/lmtagnonconformityinfo/lmtagnonconformityinfo.module": [
		993,
		66
	],
	"../pages/lm/lmtagplan/lmtagplan.module": [
		945,
		65
	],
	"../pages/lm/lmtagplan/lmtagplaninfo/lmtagplaninfo.module": [
		946,
		64
	],
	"../pages/lm/lmtagproject/lmtagproject.module": [
		947,
		1
	],
	"../pages/lm/lmtagprojectlog/lmtagprojectlog.module": [
		994,
		63
	],
	"../pages/lm/lmtagprojectlog/lmtagprojectloglist/lmtagprojectloglist.module": [
		948,
		62
	],
	"../pages/lm/lmtagqualityinspection/lmtagqualityinspection.module": [
		949,
		61
	],
	"../pages/lm/lmtagqualityinspection/lmtagqualityinspectioninfo/lmtagqualityinspectioninfo.module": [
		995,
		60
	],
	"../pages/lm/lmtagreportdaily/lmtagreportdaily.module": [
		950,
		59
	],
	"../pages/lm/lmtagreportdaily/lmtagreportdailyinfo/lmtagreportdailyinfo.module": [
		996,
		58
	],
	"../pages/lm/lmtagreportweek/lmtagreportweek.module": [
		951,
		57
	],
	"../pages/lm/lmtagreportweek/lmtagreportweekinfo/lmtagreportweekinfo.module": [
		997,
		56
	],
	"../pages/lm/lmtagsiteposition/lmtagsiteposition.module": [
		952,
		55
	],
	"../pages/lm/lmtagsiteposition/lmtagsitepositioninfo/lmtagsitepositioninfo.module": [
		953,
		54
	],
	"../pages/lm/lmtagstartupreport/lmtagstartupreport.module": [
		998,
		53
	],
	"../pages/lm/lmtagstartupreport/lmtagstartupreportinfo/lmtagstartupreportinfo.module": [
		999,
		52
	],
	"../pages/lm/lmtagsummary/lmtagsummary.module": [
		955,
		51
	],
	"../pages/lm/lmtagsummary/lmtagsummaryinfo/lmtagsummaryinfo.module": [
		954,
		50
	],
	"../pages/lm/lmtagsummaryspecialty/lmtagsummaryspecialty.module": [
		956,
		49
	],
	"../pages/lm/lmtagsummaryspecialty/lmtagsummaryspecialtyinfo/lmtagsummaryspecialtyinfo.module": [
		957,
		48
	],
	"../pages/lm/lmtagsummarytech/lmtagsummarytech.module": [
		958,
		47
	],
	"../pages/lm/lmtagsummarytech/lmtagsummarytechinfo/lmtagsummarytechinfo.module": [
		959,
		46
	],
	"../pages/lm/lmtagsupervisory/lmtagsupervisory.module": [
		960,
		45
	],
	"../pages/lm/lmtagsupervisory/lmtagsupervisoryinfo/lmtagsupervisoryinfo.module": [
		1000,
		44
	],
	"../pages/lm/lmtagtraininghandover/lmtagtraininghandover.module": [
		1001,
		43
	],
	"../pages/lm/lmtagtraininghandover/lmtagtraininghandoverinfo/lmtagtraininghandoverinfo.module": [
		1002,
		42
	],
	"../pages/lm/lmtagworkorder/lmtagworkorder.module": [
		1003,
		41
	],
	"../pages/lm/lmtagworkorder/lmtagworkorderinfo/components/lmtagworkorderplanbaseinfo/lmtagworkorderplanbaseinfo.module": [
		961,
		40
	],
	"../pages/lm/lmtagworkorder/lmtagworkorderinfo/components/lmtagworkorderplaninfo/lmtagworkorderplaninfo.module": [
		963,
		39
	],
	"../pages/lm/lmtagworkorder/lmtagworkorderinfo/components/lmtagworkorderqualityinfo/lmtagworkorderqualityinfo.module": [
		962,
		38
	],
	"../pages/lm/lmtagworkorder/lmtagworkorderinfo/lmtagworkorderinfo.module": [
		1009,
		37
	],
	"../pages/lm/lmworkbench/lmworkbench.module": [
		1004,
		0
	],
	"../pages/me/aboutus/aboutus.module": [
		964,
		36
	],
	"../pages/me/annex/annex.module": [
		965,
		35
	],
	"../pages/me/changepassword/changepassword.module": [
		966,
		34
	],
	"../pages/me/login/login.module": [
		1005,
		13
	],
	"../pages/me/me.module": [
		967,
		33
	],
	"../pages/me/securityset/securityset.module": [
		968,
		32
	],
	"../pages/me/systemsetup/systemsetup.module": [
		969,
		31
	],
	"../pages/paper/paperinfosearch/collectionfile/collectionfile.module": [
		970,
		30
	],
	"../pages/paper/paperinfosearch/paperinfosearch.module": [
		1006,
		29
	],
	"../pages/scanner/scanner.module": [
		1010,
		28
	],
	"../pages/system/deptdialog/deptdialog.module": [
		971,
		27
	],
	"../pages/system/equipmentdialog/equipmentdialog.module": [
		972,
		26
	],
	"../pages/system/projectdialog/projectdialog.module": [
		973,
		25
	],
	"../pages/system/reportview/reportview.module": [
		974,
		24
	],
	"../pages/system/search/search.module": [
		975,
		23
	],
	"../pages/system/signaturepad/signaturepad.module": [
		977,
		14
	],
	"../pages/system/system.module": [
		976,
		22
	],
	"../pages/system/userdialog/userdialog.module": [
		978,
		21
	],
	"../pages/workflow/activiti/workflowroute/workflowroute.module": [
		979,
		20
	],
	"../pages/workflow/activiti/workflowstart/workflowstart.module": [
		980,
		19
	],
	"../pages/workflow/historylist/historylist.module": [
		981,
		18
	],
	"../pages/workflow/todolist/todolist.module": [
		1007,
		17
	],
	"../pages/workflow/workflow.module": [
		982,
		16
	],
	"../pages/workreport/workreport.module": [
		1011,
		15
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 252;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inputoverflow_inputoverflow__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keyboardoverlay_keyboardoverlay__ = __webpack_require__(747);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__keyboardoverlay_keyboardoverlay__["a" /* KeyboardoverlayDirective */],
                __WEBPACK_IMPORTED_MODULE_1__inputoverflow_inputoverflow__["a" /* InputOverflowDirective */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__keyboardoverlay_keyboardoverlay__["a" /* KeyboardoverlayDirective */],
                __WEBPACK_IMPORTED_MODULE_1__inputoverflow_inputoverflow__["a" /* InputOverflowDirective */]
            ]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_version__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__phone_device__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Utils__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HttpServicesProvider = /** @class */ (function () {
    function HttpServicesProvider(http, jsonp, config, transfer, alertCtrl, appVersion, loading, file, fileopen, toastCtrl, permission, events, phoneDevice, platform, storage, app) {
        this.http = http;
        this.jsonp = jsonp;
        this.config = config;
        this.transfer = transfer;
        this.alertCtrl = alertCtrl;
        this.appVersion = appVersion;
        this.loading = loading;
        this.file = file;
        this.fileopen = fileopen;
        this.toastCtrl = toastCtrl;
        this.permission = permission;
        this.events = events;
        this.phoneDevice = phoneDevice;
        this.platform = platform;
        this.storage = storage;
        this.app = app;
        this.JwtToken = '';
        /**
         * 全局变量，保证userCheck 监听器方法，只执行一次
         * @type {boolean} true可以执行， false不可以执行
         */
        this.userCheckNum = true;
        this.CONTENTTYPE_FORMURLENCODE = 'application/x-www-form-urlencoded;charset=UTF-8';
        //设置post的格式
        this.formurlencodeheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' });
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=UTF-8' });
        this.environment = {};
        this.timer = null;
    }
    HttpServicesProvider_1 = HttpServicesProvider;
    HttpServicesProvider.prototype.initToken = function () {
        var userinfo = this.storage.get(__WEBPACK_IMPORTED_MODULE_11__storage__["a" /* StorageProvider */].ME_USERINFO); //读取登录人的储存信息
        if (userinfo != null) {
            this.JwtToken = userinfo.JwtToken;
            this.formurlencodeheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', 'JwtToken': this.JwtToken });
            this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=UTF-8', 'JwtToken': this.JwtToken });
        }
    };
    //手机权限检查
    HttpServicesProvider.prototype.checkPermissions = function () {
        this.permission.requestPermission(this.permission.PERMISSION.READ_EXTERNAL_STORAGE).then(function (res) { console.log(res); });
        this.permission.requestPermission(this.permission.PERMISSION.WRITE_EXTERNAL_STORAGE).then(function (res) { console.log(res); });
    };
    //检查是否需要更新
    HttpServicesProvider.prototype.Upgrader = function () {
        var _this = this;
        this.initToken();
        this.appVersion.getVersionNumber().then(function (app) {
            var url = 'http://www.pgyer.com/apiv2/app/getByShortcut';
            _this.http.post(url, 'buildShortcutUrl=' + _this.environment['shortcut'] + '&&_api_key=' + _this.environment['apikey'], { headers: _this.formurlencodeheaders }).subscribe(function (res) {
                // console.log(res.json());
                if (res.json().data.buildVersion) {
                    // console.log(res.json().data.buildVersion);
                    if (app < res.json().data.buildVersion) {
                        _this.showUpdateComfirm(res.json().data);
                    }
                }
            });
        });
    };
    //检查蒲公英版本更新
    HttpServicesProvider.prototype.showUpdateComfirm = function (appdata) {
        var _this = this;
        var now = 0;
        this.alertCtrl.create({
            title: '发现新版本v' + appdata.buildVersion + '   大小:' + ((appdata.buildFileSize) / 1024 / 1024).toFixed(1) + 'MB',
            subTitle: appdata.buildUpdateDescription,
            cssClass: 'AlertList',
            buttons: [{
                    text: '确定更新',
                    handler: function () {
                        var loading = _this.loading.create({
                            content: '下载进度:0%',
                            dismissOnPageChange: true
                        });
                        loading.present();
                        var url = 'http://www.pgyer.com/apiv2/app/install?appKey=' + _this.environment['appkey'] + '&_api_key=' + _this.environment['apikey'] + '&buildPassword=bkc';
                        _this.filepath = _this.file.externalDataDirectory + 'tiankaiyun.apk';
                        var filetransfer = _this.transfer.create();
                        filetransfer.onProgress(function (progressEvent) {
                            if (progressEvent.lengthComputable) {
                                now = progressEvent.loaded / progressEvent.total * 100;
                            }
                        });
                        filetransfer.download(url, _this.filepath, true).then(function () {
                            _this.checkPermissions();
                            _this.fileopen.open(_this.filepath, 'application/vnd.android.package-archive').then(function (data) {
                                // console.log(data + '1111111');
                            }, function (err) {
                                // console.log(err);
                                // console.log('文件打开失败');
                                _this.toastCtrl.create({
                                    position: 'middle',
                                    message: '文件打开失败',
                                    duration: 2000
                                }).present();
                            });
                        }, function (err) {
                            _this.toastCtrl.create({
                                position: 'middle',
                                message: '文件下载失败',
                                duration: 2000
                            }).present();
                        });
                        var timer = setInterval(function () {
                            loading.setContent('下载进度:' + Math.floor(now) + '%');
                            if (now > 100) {
                                clearInterval(timer);
                                console.log('filePath' + _this.filepath);
                            }
                        }, 300);
                    }
                }, {
                    text: '稍后更新',
                    handler: function () {
                    }
                }]
        }).present();
    };
    /**
     *
     * @param url
     * // apiUrl :   api/focus
       // apiUrl :   api/plist?page=1
     * @param paramMap
     * @param callback
     */
    HttpServicesProvider.prototype.get = function (url, paramMap, callback) {
        var _this = this;
        // console.log(222)
        this.initToken();
        url = __WEBPACK_IMPORTED_MODULE_12__Utils__["a" /* Utils */].dealUrl(url);
        this.http.get(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            search: HttpServicesProvider_1.buildURLSearchParams(paramMap),
            headers: this.headers,
        })).map(function (res) {
            // console.log(`get  res => `, res)
            // cookie超时/无数据返回/重定向登录页面
            if (res.url.includes('/login') && res.headers.get('content-type') == 'text/html;charset=UTF-8' && res['_body'].includes('enterlogin()')) {
                console.log('连接超时，重新登录');
                return _this.post('/logout', null, function (res) {
                    _this.storage.remove(__WEBPACK_IMPORTED_MODULE_11__storage__["a" /* StorageProvider */].ME_USERINFO);
                    _this.storage.remove(__WEBPACK_IMPORTED_MODULE_11__storage__["a" /* StorageProvider */].ME_LOGIN_USERINFO);
                    _this.storage.remove(__WEBPACK_IMPORTED_MODULE_11__storage__["a" /* StorageProvider */].HOME_APPAUTHORITY);
                    _this.storage.remove(__WEBPACK_IMPORTED_MODULE_11__storage__["a" /* StorageProvider */].SYSTEM_CONFIG);
                    _this.app.getRootNav().setRoot('LoginPage');
                });
            }
            return res.json();
        }).subscribe(function (data) {
            // console.log(data)
            callback(data);
        }, function (err) {
            // console.log(err);
            // if(err.status == 404){
            // }
        });
    };
    HttpServicesProvider.prototype.getpdf = function (url, paramMap, callback) {
        // console.log(222)
        this.initToken();
        url = __WEBPACK_IMPORTED_MODULE_12__Utils__["a" /* Utils */].dealUrl(url);
        this.http.get(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            search: HttpServicesProvider_1.buildURLSearchParams(paramMap),
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'text/plain; charset=x-user-defined', 'JwtToken': this.JwtToken }),
        })).map(function (res) { return res.json(); }).subscribe(function (data) {
            // console.log(data)
            // console.log( JSON.stringify(data) );
            callback(data);
        }, function (err) {
            // console.log(err);
            // if(err.status == 404){
            // }
        });
    };
    HttpServicesProvider.prototype.uncookiepost = function (url, data, callback, contenttype) {
        this.initToken();
        url = __WEBPACK_IMPORTED_MODULE_12__Utils__["a" /* Utils */].dealUrl(url);
        var posthead = null;
        var postdata = null;
        if (contenttype != null && contenttype == this.CONTENTTYPE_FORMURLENCODE) {
            posthead = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' });
            postdata = null;
            postdata = Object.keys(data).map(function (key) {
                return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
            }).join("&");
        }
        else {
            posthead = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=UTF-8' });
            postdata = JSON.stringify(data);
        }
        console.log(JSON.stringify(postdata));
        // console.log(url)
        this.http.post(url, postdata, { headers: posthead }).subscribe(function (result) {
            // console.log(JSON.stringify(result))
            callback(result.json());
        });
    };
    HttpServicesProvider.prototype.getBlob = function (url, callback) {
        this.initToken();
        url = __WEBPACK_IMPORTED_MODULE_12__Utils__["a" /* Utils */].dealUrl(url);
        this.http.get(url, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'JwtToken': this.JwtToken
            }),
            responseType: 3
        }).map(function (res) { return res.json(); }).subscribe(function (data) {
            // console.log(data);
            callback(data);
        });
    };
    //post 提交数据
    HttpServicesProvider.prototype.post = function (url, data, callback, contenttype) {
        this.initToken();
        url = __WEBPACK_IMPORTED_MODULE_12__Utils__["a" /* Utils */].dealUrl(url);
        var posthead = null;
        var postdata = null;
        if (contenttype != null && contenttype == this.CONTENTTYPE_FORMURLENCODE) {
            posthead = this.formurlencodeheaders;
            postdata = null;
            postdata = Object.keys(data).map(function (key) {
                return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
            }).join("&");
        }
        else {
            posthead = this.headers;
            postdata = JSON.stringify(data);
        }
        this.http.post(url, postdata, { headers: posthead }).subscribe(function (result) {
            // console.log(result)
            if (callback != null) {
                if (result != null && result != undefined) {
                    try {
                        callback(result.json());
                    }
                    catch (err) {
                        console.error("url:" + url + ",接口访问出错,请检查api");
                        callback(null);
                    }
                }
                else {
                    callback(null);
                }
            }
        });
    };
    HttpServicesProvider.prototype.postform = function (url, prefix, data, callback) {
        this.initToken();
        url = __WEBPACK_IMPORTED_MODULE_12__Utils__["a" /* Utils */].dealUrl(url);
        var posthead = this.formurlencodeheaders;
        var postdata = Object.keys(data).map(function (key) {
            if (prefix == null || prefix == "") {
                return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
            }
            else {
                var value = encodeURIComponent(data[key]);
                if (value == null || value == 'null') {
                    value = "";
                }
                if (key == 'version') {
                    return encodeURIComponent(key) + "=" + value;
                }
                else {
                    return encodeURIComponent(prefix + "." + key) + "=" + value;
                }
            }
        }).join("&");
        // console.log(postdata);
        this.http.post(url, postdata, { headers: posthead }).subscribe(function (result) {
            if (callback != null) {
                if (result != null && result != undefined) {
                    try {
                        callback(result.json());
                    }
                    catch (err) {
                        console.error("url:" + url + ",接口访问出错,请检查api");
                        callback(null);
                    }
                }
                else {
                    callback(null);
                }
            }
        });
    };
    // formdata数据
    HttpServicesProvider.prototype.postFormData = function (url, formdata, callback) {
        this.initToken();
        url = __WEBPACK_IMPORTED_MODULE_12__Utils__["a" /* Utils */].dealUrl(url);
        this.http.post(url, formdata, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'JwtToken': this.JwtToken
            })
        }).subscribe(function (result) {
            if (callback != null) {
                if (result != null && result != undefined) {
                    try {
                        callback(result.json());
                    }
                    catch (err) {
                        console.error("url:" + url + ",接口访问出错,请检查api");
                        callback(null);
                    }
                }
                else {
                    callback(null);
                }
            }
        });
    };
    /**
     * 上传附件图片
     * @param busstype
     * @param bussid
     * @param imageData
     */
    HttpServicesProvider.prototype.uploadify = function (busstype, bussid, imageData, callback) {
        this.initToken();
        var fileTransfer = this.transfer.create();
        var api = '/uploadify/upload?busstype=' + busstype + "&bussid=" + bussid;
        api = __WEBPACK_IMPORTED_MODULE_12__Utils__["a" /* Utils */].dealUrl(api);
        var filename = __WEBPACK_IMPORTED_MODULE_12__Utils__["a" /* Utils */].dateFormat(new Date(), 'yyyy-MM-dd hh_mm_ss');
        var options = {
            fileKey: 'file',
            fileName: filename + '.jpg',
            mimeType: 'image/jpeg',
            httpMethod: "POST",
            headers: { 'JwtToken': this.JwtToken }
        };
        fileTransfer.upload(imageData, encodeURI(api), options).then(function (result) {
            callback(result);
        });
    };
    HttpServicesProvider.prototype.uploadifyAwait = function (busstype, bussid, imageData) {
        this.initToken();
        var fileTransfer = this.transfer.create();
        var api = '/uploadify/upload?busstype=' + busstype + "&bussid=" + bussid;
        api = __WEBPACK_IMPORTED_MODULE_12__Utils__["a" /* Utils */].dealUrl(api);
        var filename = __WEBPACK_IMPORTED_MODULE_12__Utils__["a" /* Utils */].dateFormat(new Date(), 'yyyy-MM-dd hh_mm_ss');
        var options = {
            fileKey: 'file',
            fileName: filename + '.jpg',
            mimeType: 'image/jpeg',
            httpMethod: "POST",
            headers: { 'JwtToken': this.JwtToken }
        };
        return fileTransfer.upload(imageData, encodeURI(api), options);
    };
    /**
     * 上传视频文件
     * @param busstype
     * @param bussid
     * @param imageData
     * @param callback
     */
    HttpServicesProvider.prototype.uploadvideo = function (busstype, bussid, imageData, callback) {
        this.initToken();
        var fileTransfer = this.transfer.create();
        var api = '/uploadify/upload?busstype=' + busstype + "&bussid=" + bussid;
        api = __WEBPACK_IMPORTED_MODULE_12__Utils__["a" /* Utils */].dealUrl(api);
        var filename = __WEBPACK_IMPORTED_MODULE_12__Utils__["a" /* Utils */].dateFormat(new Date(), 'yyyy-MM-ddhh:mm:ss');
        filename = filename.replace(/:/g, "-");
        var options = {
            fileKey: 'file',
            fileName: filename + '.mp4',
            mimeType: 'video/mp4',
            headers: { 'JwtToken': this.JwtToken }
        };
        fileTransfer.upload(imageData, encodeURI(api), options).then(function (res) {
            callback(res);
        }).then(function (err) {
            console.log(err);
        });
    };
    /**
     * 上传音频文件
     * @param busstype
     * @param bussid
     * @param callback
     */
    HttpServicesProvider.prototype.uploadmedia = function (busstype, bussid, imageData, filename, callback) {
        this.initToken();
        var fileTransfer = this.transfer.create();
        var api = '/uploadify/upload?busstype=' + busstype + "&bussid=" + bussid;
        api = __WEBPACK_IMPORTED_MODULE_12__Utils__["a" /* Utils */].dealUrl(api);
        if (filename == null) {
            filename = __WEBPACK_IMPORTED_MODULE_12__Utils__["a" /* Utils */].dateFormat(new Date(), 'yyyy-MM-ddhh:mm:ss');
        }
        // let filename = Utils.dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss');
        var options = {
            fileKey: 'file',
            fileName: filename,
            mimeType: 'audio/wav',
            headers: { 'JwtToken': this.JwtToken }
        };
        fileTransfer.upload(imageData, encodeURI(api), options).then(function (res) {
            callback(res);
        }).then(function (err) {
            console.log(err);
        });
    };
    /**
     * 获取附件列表信息
     * @param busstype
     * @param bussid
     * @param callback
     */
    HttpServicesProvider.prototype.getFiles = function (busstype, bussid, callback) {
        var url = "/kindeditor/initfiles?busstype=" + busstype + "&bussid=" + bussid;
        this.post(url, null, function (result) {
            if (result != null && result != undefined) {
                if (result.code == 0) {
                    for (var i = 0; i < result.data.length; i++) {
                        if (result.data.length > 0) {
                            result.data[i]['url'] = __WEBPACK_IMPORTED_MODULE_9__config__["a" /* ConfigProvider */].apiUrl + '/attach/download/' + result.data[i].busstype + '/' + result.data[i]['id'];
                        }
                    }
                }
                callback(result);
            }
        }, null);
    };
    /**
     * @param bussid
     * @param busstype
     *
     * @param callback
     */
    HttpServicesProvider.prototype.getOtherFiles = function (bussid, busstype, callback) {
        var url = '/kindeditor/initfiles';
        var obj = { "bussid": bussid, "busstype": busstype };
        // let data =JSON.stringify
        this.post(url, obj, function (res) {
            callback(res);
        }, this.CONTENTTYPE_FORMURLENCODE);
    };
    HttpServicesProvider.buildURLSearchParams = function (paramMap) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        if (!paramMap) {
            return params;
        }
        for (var key in paramMap) {
            var val = paramMap[key];
            if (val instanceof Date) {
                val = __WEBPACK_IMPORTED_MODULE_12__Utils__["a" /* Utils */].dateFormat(val, 'yyyy-MM-dd hh:mm:ss');
            }
            params.set(key, val);
        }
        return params;
    };
    HttpServicesProvider.prototype.initSite = function (callback) {
        var url = '/site/authlist';
        this.get(url, null, function (res) {
            if (res.code == 0) {
                callback(res);
                // this.forminfo['siteid']=res.data[0]['siteid'];
            }
        });
    };
    //获取数据字典信息
    HttpServicesProvider.prototype.getDict = function (dictcode, callback) {
        var url = "/dict/getDict/" + dictcode;
        return this.get(url, null, function (result) {
            return callback(result);
        });
    };
    //获取数据字典名称
    HttpServicesProvider.prototype.getDictName = function (dictcode, dictvalue, callback) {
        var url = "/dict/getDict/" + dictcode;
        this.get(url, null, function (result) {
            var dictname = "";
            if (result.length > 0) {
                for (var i = 0; i < result.length; i++) {
                    if (result[i].value == dictvalue) {
                        dictname = result[i].name;
                    }
                }
            }
            callback(dictname);
        });
    };
    //根据部门id获取部门名称
    HttpServicesProvider.prototype.getDeptName = function (deptid, callback) {
        var url = "/dept/getDeptName/" + deptid;
        this.get(url, null, function (result) {
            callback(result);
        });
    };
    HttpServicesProvider.prototype.ajaxGet = function (url, callback) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.get(url, null, function (result) {
                if (result.code == 0) {
                    callback(result);
                    console.log(result);
                    resolve(result.data);
                }
            });
        });
    };
    //获取用户名称同步
    HttpServicesProvider.prototype.getUsername = function (userid, callback) {
        var _this = this;
        var url = "/user/getUserName/" + userid;
        return new Promise(function (resolve, reject) {
            _this.get(url, null, function (result) {
                if (result.code == 0) {
                    // callback(result);
                    resolve(result.data);
                }
            });
        });
    };
    //获取用户名称
    HttpServicesProvider.prototype.getUserName = function (userid, callback) {
        var url = "/user/getUserName/" + userid;
        this.get(url, null, function (result) {
            if (result.code == 0) {
                callback(result);
            }
        });
    };
    /**
      * 初始化设备名称
      * @param assetid
      */
    HttpServicesProvider.prototype.initAsset = function (assetid, forminfo, name) {
        if (assetid != '' && assetid != undefined) {
            var url = "/query/le/leAsset/findOne?id=" + assetid;
            this.get(url, null, function (result) {
                if (result.code == 0) {
                    if (result.data.length > 0) {
                        forminfo[name] = result.data[0].description;
                    }
                }
            });
        }
    };
    HttpServicesProvider.prototype.initDeptName = function (id, idname, forminfo) {
        if (id != '' && id != null) {
            this.getDeptName(id, function (res) {
                if (res.code == 0) {
                    forminfo[idname] = res.data;
                }
            });
        }
    };
    HttpServicesProvider.prototype.initUserName = function (id, idname, forminfo) {
        if (id != '' && id != null) {
            this.getUserName(id, function (res) {
                if (res.code == 0) {
                    forminfo[idname] = res.data;
                }
            });
        }
    };
    //根据prjid获取项目名称
    HttpServicesProvider.prototype.initPrjName = function (prjid, key, forminfo) {
        if (prjid != '' && prjid != null) {
            var url = "/lmtagProject/detail/" + prjid;
            this.get(url, null, function (res) {
                if (res.code == 0) {
                    forminfo[key] = res.data.projectname;
                }
            });
        }
    };
    //根据workorderid获取工作班组成员
    HttpServicesProvider.prototype.initWorkmembers = function (wtid, key, forminfo) {
        if (wtid != '' && wtid != null) {
            var url = "/query/tt/ttWorkticketWorkmembers/findWorkmembersByWtid?wtid=" + wtid;
            this.get(url, null, function (res) {
                if (res.code == 0) {
                    forminfo[key] = res.data;
                }
            });
        }
    };
    //获取根据id获取厂站信息
    HttpServicesProvider.prototype.getSiteName = function (siteid, callback) {
        var url = "/query/system/site/findOne?id=" + siteid;
        this.get(url, null, function (result) {
            callback(result);
        });
    };
    //获取企业信息目录名称
    HttpServicesProvider.prototype.getEnterprise = function (enterid, callback) {
        var url = "/query/bdm/bdmEnterprisedir/findOne?id=" + enterid;
        this.get(url, null, function (result) {
            callback(result);
        });
    };
    //获取表单控制
    HttpServicesProvider.prototype.getPageControl = function (pagecode, wfstatus, callback) {
        var url = "/page/pageControl/" + pagecode;
        if (wfstatus != null || wfstatus != "") {
            url = url + "?wfstatus=" + wfstatus;
        }
        this.get(url, null, function (result) {
            callback(result);
        });
    };
    //获取表单控制
    HttpServicesProvider.prototype.getPageControlElement = function (pagecode, wfstatus, wfid, callback) {
        var url = "/page/pageControl/" + pagecode;
        // console.log()
        // if (wfstatus != null && wfstatus != "" && wfstatus != undefined && wfid =="") {
        //   url = url + "?wfstatus=" + wfstatus;
        // }
        if (wfid != null && wfid != "" && wfid != undefined) {
            url = url + "?wfstatus=" + wfstatus + "&wfid=" + wfid;
        }
        if ((wfid == null || wfid == "") && wfstatus != undefined) {
            url = url + "?wfstatus=" + wfstatus;
        }
        this.get(url, null, function (result) {
            callback(result);
        });
    };
    //获取表单控制
    HttpServicesProvider.prototype.getPageControlElementAnsy = function (pagecode, wfstatus, wfid) {
        var _this = this;
        var url = "/page/pageControl/" + pagecode;
        if (wfid != null && wfid != "" && wfid != undefined) {
            url = url + "?wfstatus=" + wfstatus + "&wfid=" + wfid;
        }
        if ((wfid == null || wfid == "") && wfstatus != undefined) {
            url = url + "?wfstatus=" + wfstatus;
        }
        // console.log(url)
        return new Promise(function (resolve, reject) {
            _this.get(url, null, function (result) {
                if (result.code == 0) {
                    // console.log(result)
                    // callback(result);
                    resolve(result.data);
                }
            });
        });
    };
    HttpServicesProvider.prototype.pageDate = function (res) {
        // console.log( res.data.data)
        var datas = res;
        var arr = [];
        for (var i_1 in datas) {
            arr.push({ 'title': i_1, 'value': datas[i_1], 'substr': i_1.substr(0, 11), 'name': i_1.substr(11) });
        }
        var array = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].substr == 'page_title_') {
                var name = arr[i].name;
                array.push({ 'name': name });
            }
        }
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < array.length; j++) {
                if (arr[i].title == 'page_title_' + array[j].name) {
                    array[j].title = arr[i].value;
                }
                if (arr[i].title == 'page_hide_' + array[j].name) {
                    array[j].hide = arr[i].value;
                }
                if (arr[i].title == 'page_required_' + array[j].name) {
                    if (arr[i].value == 'required') {
                        array[j].required = true;
                    }
                    else {
                        array[j].required = false;
                    }
                }
                if (arr[i].title == 'page_readonly_' + array[j].name) {
                    if (arr[i].value == 'readonly') {
                        array[j].readonly = true;
                    }
                    else {
                        array[j].readonly = false;
                    }
                }
            }
        }
        return array;
    };
    HttpServicesProvider.prototype.getpagedata = function (rows, result) {
        for (var i = 0; i < rows.length; i++) {
            for (var j = 0; j < result.length; j++) {
                if (rows[i].type == 'selectUser' || rows[i].type == 'selectDept' || rows[i].type == 'choose' || rows[i].type == 'chooseasset' || rows[i].type == 'choosemore') {
                    // rows[i].required =result[j].required;
                    if (rows[i].indexId == result[j].name) {
                        rows[i].required = result[j].required;
                        rows[i].label = result[j].title;
                        rows[i].disabled = result[j].readonly;
                        rows[i].hide = result[j].hide;
                    }
                    if (rows[i].type == 'choose') {
                        if (rows[i].index == result[j].name) {
                            rows[i].required = result[j].required;
                            rows[i].label = result[j].title;
                            rows[i].disabled = result[j].readonly;
                            rows[i].hide = result[j].hide;
                        }
                    }
                }
                else if (rows[i].index == result[j].name) {
                    if (rows[i].type == 'choosesign') {
                        if (rows[i].indexId == result[j].name) {
                            rows[i].mandisabled = result[j].readonly;
                        }
                    }
                    rows[i].required = result[j].required;
                    rows[i].label = result[j].title;
                    rows[i].disabled = result[j].readonly;
                    rows[i].hide = result[j].hide;
                }
            }
        }
        return rows;
    };
    /**获取物资编码
     * @param 表明tablecode
     * @param 列名colcode
     * @param 回调callback
     */
    HttpServicesProvider.prototype.getSeqNum = function (tablecode, colcode, callback) {
        var url = '/seqnum/siteCodeGenerator/' + tablecode + '/' + colcode;
        this.get(url, null, function (res) {
            if (res.code == 0) {
                callback(res.data);
            }
            else {
                callback('');
            }
        });
    };
    /**获取我的任务
     * @param key string类型用可以传多个用字符串隔开
     * @param callback
     */
    HttpServicesProvider.prototype.getTodoList = function (key, callback) {
        if (key === void 0) { key = ''; }
        var url = '/workflow/task/todo/list';
        if (key != '') {
            url = url + '?key=' + key;
        }
        this.get(url, null, function (res) {
            callback(res);
        });
    };
    //删除附件
    HttpServicesProvider.prototype.deleteImage = function (data, callback, contenttype) {
        var url = '/attach/removeids';
        url = __WEBPACK_IMPORTED_MODULE_12__Utils__["a" /* Utils */].dealUrl(url);
        var posthead = null;
        var postdata = null;
        if (contenttype != null && contenttype == this.CONTENTTYPE_FORMURLENCODE) {
            posthead = this.formurlencodeheaders;
            postdata = null;
            postdata = Object.keys(data).map(function (key) {
                return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
            }).join("&");
        }
        else {
            posthead = this.headers;
            postdata = JSON.stringify(data);
        }
        this.http.post(url, postdata, { headers: posthead }).subscribe(function (result) {
            callback(result.json());
        });
    };
    //删除tableids
    HttpServicesProvider.prototype.removeTableIds = function (code, data, callback, contenttype) {
        var url = '/' + code + '/remove?ids=' + data;
        var $url = '/' + code + '/remove';
        url = __WEBPACK_IMPORTED_MODULE_12__Utils__["a" /* Utils */].dealUrl($url);
        // console.log(url)
        var posthead = null;
        var postdata = null;
        if (contenttype != null && contenttype == this.CONTENTTYPE_FORMURLENCODE) {
            posthead = this.formurlencodeheaders;
            postdata = null;
            postdata = Object.keys(data).map(function (key) {
                return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
            }).join("&");
        }
        else {
            posthead = this.headers;
            postdata = JSON.stringify(data);
        }
        this.http.post(url, postdata, { headers: posthead }).subscribe(function (result) {
            callback(result.json());
        });
    };
    //删除ids
    HttpServicesProvider.prototype.removeIds = function (data, callback, contenttype) {
        var url = '/prjRecord/remove?ids=' + data;
        url = __WEBPACK_IMPORTED_MODULE_12__Utils__["a" /* Utils */].dealUrl(url);
        var posthead = null;
        var postdata = null;
        if (contenttype != null && contenttype == this.CONTENTTYPE_FORMURLENCODE) {
            posthead = this.formurlencodeheaders;
            postdata = null;
            postdata = Object.keys(data).map(function (key) {
                return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
            }).join("&");
        }
        else {
            posthead = this.headers;
            postdata = JSON.stringify(data);
        }
        this.http.post(url, null, { headers: posthead }).subscribe(function (result) {
            callback(result.json());
        });
    };
    HttpServicesProvider.prototype.remove = function (data, callback, contenttype) {
        var url = '/prjRecord/remove?ids=' + data;
        url = __WEBPACK_IMPORTED_MODULE_12__Utils__["a" /* Utils */].dealUrl(url);
        var posthead = null;
        var postdata = null;
        if (contenttype != null && contenttype == this.CONTENTTYPE_FORMURLENCODE) {
            posthead = this.formurlencodeheaders;
            postdata = null;
            postdata = Object.keys(data).map(function (key) {
                return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
            }).join("&");
        }
        else {
            posthead = this.headers;
            postdata = JSON.stringify(data);
        }
        this.http.post(url, null, { headers: posthead }).subscribe(function (result) {
            callback(result.json());
        });
    };
    //获取工作流页面配置
    HttpServicesProvider.prototype.workflowPageControl = function (formcode, wfstatus, wfid, callback) {
        var url = '/page/pageControl/' + formcode + '?' + 'wfstatus=' + wfstatus + '&wfid=' + wfid;
        this.get(url, null, function (res) {
            callback(res);
        });
    };
    //检查工作流是否存在
    HttpServicesProvider.prototype.workflowCheckAuth = function (wfid, callback) {
        var url = '/workflow/checkAuth/' + wfid;
        this.get(url, null, function (res) {
            callback(res);
        });
    };
    //检查工作流程节点
    HttpServicesProvider.prototype.checkFetchBack = function (wfid, callback) {
        var url = '/workflow/checkFetchbackAuth/' + wfid;
        this.get(url, null, function (res) {
            callback(res);
        });
    };
    //工作流状态
    HttpServicesProvider.prototype.fecthBack = function (wfid, callback) {
        var url = '/workflow/fetchback/' + wfid;
        this.get(url, null, function (res) {
            callback(res);
        });
    };
    //更新密码
    HttpServicesProvider.prototype.updatePassword = function (user, callback) {
        var url = '/user/updatePassword';
        // user=JSON.stringify(user);
        url = __WEBPACK_IMPORTED_MODULE_12__Utils__["a" /* Utils */].dealUrl(url);
        var obj = Object.keys(user).map(function (value) {
            return encodeURIComponent('user' + '.' + value) + '=' + encodeURIComponent(user[value]);
        }).join('&');
        console.log(obj);
        this.http.post(url, obj, { headers: this.formurlencodeheaders }).subscribe(function (res) {
            callback(res.json());
        });
    };
    /**
     *
     * @param fileType 获取文件类型mimetype
     */
    HttpServicesProvider.prototype.getFileMimeType = function (fileType) {
        var mimeType = '';
        switch (fileType) {
            case 'txt':
                mimeType = 'text/plain';
                break;
            case 'docx':
                mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
                break;
            case 'doc':
                mimeType = 'application/msword';
                break;
            case 'pptx':
                mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
                break;
            case 'ppt':
                mimeType = 'application/vnd.ms-powerpoint';
                break;
            case 'xlsx':
                mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                break;
            case 'xls':
                mimeType = 'application/vnd.ms-excel';
                break;
            case 'zip':
                mimeType = 'application/x-zip-compressed';
                break;
            case 'rar':
                mimeType = 'application/octet-stream';
                break;
            case 'pdf':
                mimeType = 'application/pdf';
                break;
            case 'jpg':
                mimeType = 'image/jpeg';
                break;
            case 'png':
                mimeType = 'image/png';
                break;
            case 'doc':
                mimeType = 'application/msword';
                break;
            default:
                mimeType = 'application/' + fileType;
                break;
        }
        return mimeType;
    };
    //打开文件
    HttpServicesProvider.prototype.openFiles = function (item) {
        var _this = this;
        if (item['filetype'] == 'png' || item['filetype'] == 'gif' || item['filetype'] == "jpg" || item['filetype'] == "jpeg") {
            this.phoneDevice.showBigimage(__WEBPACK_IMPORTED_MODULE_9__config__["a" /* ConfigProvider */].apiUrl + item['url']);
        }
        else {
            var now_1 = 0;
            // var url = 'http://jmtc.gdwm.cn:4434' + item['url'];
            var url = 'http://120.79.223.161' + item['downurl'];
            if (this.platform.is('ios')) {
                this.filepath = this.file.dataDirectory + item['downurl'];
            }
            else {
                this.filepath = this.file.externalDataDirectory + item['name'];
            }
            var filetransfer = this.transfer.create();
            filetransfer.onProgress(function (progressEvent) {
                if (progressEvent.lengthComputable) {
                    now_1 = progressEvent.loaded / progressEvent.total * 100;
                }
            });
            filetransfer.download(url, this.filepath, true).then(function () {
                _this.checkPermissions();
                _this.fileopen.open(_this.filepath, _this.getFileMimeType(item['filetype'])).then(function (data) {
                    console.log(data + '1111111');
                }, function (err) {
                    console.log(err);
                    console.log('文件打开失败');
                    _this.toastCtrl.create({
                        position: 'middle',
                        message: '文件打开失败',
                        duration: 2000
                    }).present();
                });
            }, function (err) {
                _this.toastCtrl.create({
                    position: 'middle',
                    message: '文件下载失败',
                    duration: 2000
                }).present();
            });
        }
    };
    /**
   * input 框输入 延迟请求
   */
    HttpServicesProvider.prototype.delayRequest = function (time) {
        var _this = this;
        if (this.timer != null) {
            clearTimeout(this.timer);
        }
        return new Promise(function (res, rej) {
            _this.timer = setTimeout(function () {
                res(1);
            }, time);
        });
    };
    /**
    * timeindex :时间字段
    * forminfo :数组
    */
    HttpServicesProvider.prototype.inittime = function (timeindex, forminfo) {
        if (forminfo[timeindex] != null && forminfo[timeindex] != '') {
            forminfo[timeindex] = new Date(new Date(forminfo[timeindex]).getTime() + 8 * 60 * 60 * 1000).toISOString();
        }
    };
    /**
    * timeindex :时间字段
    * forminfo :数组
    */
    HttpServicesProvider.prototype.initsavetime = function (timeindex, forminfo) {
        if (forminfo[timeindex] != null && forminfo[timeindex] != '') {
            forminfo[timeindex] = new Date(new Date(forminfo[timeindex]).getTime() - 8 * 60 * 60 * 1000).toISOString();
            forminfo[timeindex] = __WEBPACK_IMPORTED_MODULE_12__Utils__["a" /* Utils */].dateFormat(new Date(forminfo[timeindex]), 'YYYY-MM-DD hh:mm:ss');
        }
    };
    // 工作票
    //头部定位
    HttpServicesProvider.prototype.inithrefhearer = function (workstage, page) {
        // console.log(workstage)
        if (workstage == 'DRAFT') {
            $(page + ' #cehua').addClass('on');
        }
        else if (workstage == 'WAPPR') {
            $(page + ' #cehua').addClass('actioned');
            $(page + ' #qianfa').addClass('on');
        }
        else if (workstage == 'WAPPR_JS' || workstage == 'WAPPR_XK') {
            $(page + ' #cehua,' + page + ' #qianfa').addClass('actioned');
            $(page + ' #xuke').addClass('on');
        }
        else if (workstage == 'INNER' || workstage == 'INNER_YP') {
            $(page + ' #cehua,' + page + ' #qianfa,' + page + ' #xuke').addClass('actioned');
            $(page + ' #zhixing').addClass('on');
        }
        else if (workstage == 'COMP') {
            $(page + ' #cehua,' + page + ' #qianfa,' + page + ' #xuke,' + page + ' #zhixing').addClass('actioned');
            $(page + ' #yanshou').addClass('on');
        }
        else if (workstage == 'CLOSE') {
            $(page + ' #cehua,' + page + ' #qianfa,' + page + ' #xuke,' + page + ' #zhixing,' + page + ' #yanshou').addClass('actioned');
        }
    };
    //安全措施执行
    HttpServicesProvider.prototype.radiorightclick = function (item, executeman, executemanname) {
        var userinfo = this.storage.get(__WEBPACK_IMPORTED_MODULE_11__storage__["a" /* StorageProvider */].ME_LOGIN_USERINFO);
        executeman = userinfo.id;
        executeman = userinfo.name;
        if (item != 1) {
            item = 1;
        }
        else {
            item = 0;
        }
    };
    //跳转工作票
    HttpServicesProvider.prototype.gotoOperate = function (navctrl, item) {
        if (item.ottype != 'Electric') {
            navctrl.push('TtoperatethermalinfoPage', {
                type: 'edit',
                id: item.opid,
                title: '热力机械操作票',
                code: 'ttOperateThermal',
                wfstatusname: item.wfstatusname
            });
        }
        else {
            navctrl.push('TtoperatethermalinfoPage', {
                type: 'edit',
                id: item.opid,
                title: '电气倒闸操作票',
                code: 'ttOperateElectric',
                wfstatusname: item.wfstatusname
            });
        }
        // 
    };
    HttpServicesProvider = HttpServicesProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */],
            __WEBPACK_IMPORTED_MODULE_9__config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["l" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_10__phone_device__["a" /* PhoneDeviceProvider */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_11__storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* App */]])
    ], HttpServicesProvider);
    return HttpServicesProvider;
    var HttpServicesProvider_1;
}());

//# sourceMappingURL=http-services.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JpushUtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jiguang_ionic_jpush__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_services__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { ImdefectinfoPage } from '../pages/im/imdefect/imdefectinfo/imdefectinfo';
// import { TodolistPage } from '../pages/workflow/todolist/todolist';
// import { PitaskinfoPage } from '../pages/pi/pitask/pitaskinfo/pitaskinfo';


/*
  Generated class for the JpushServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var JpushUtilProvider = /** @class */ (function () {
    function JpushUtilProvider(jpush, events, storage, httpServices) {
        this.jpush = jpush;
        this.events = events;
        this.storage = storage;
        this.httpServices = httpServices;
        this.sequence = 0;
        this.middleValue = false;
        this.tagResultHandler = function (result) {
            var sequence = result.sequence;
            var tags = result.tags == null ? [] : result.tags;
            console.log('Success!' + '\nSequence: ' + sequence + '\nTags: ' + tags.toString(), '标签设置回调');
        };
        this.aliasResultHandler = function (result) {
            var sequence = result.sequence;
            var alias = result.alias;
            console.log('Success!' + '\nSequence: ' + sequence + '\nAlias: ' + alias, '别名设置回调');
        };
        this.errorHandler = function (err) {
            // var sequence: number = err.sequence;
            // var code = err.code;
        };
    }
    JpushUtilProvider.prototype.initResumeAndPause = function () {
        var _this = this;
        console.log('查看前后台展示');
        document.addEventListener('resume', function () {
            console.log('进入前台展示');
            if (_this.storage.get(__WEBPACK_IMPORTED_MODULE_4__storage__["a" /* StorageProvider */].ME_LOGIN_USERINFO)) {
                _this.httpServices.post('/login', _this.storage.get(__WEBPACK_IMPORTED_MODULE_4__storage__["a" /* StorageProvider */].ME_LOGIN_USERINFO), function (res) {
                }, _this.httpServices.CONTENTTYPE_FORMURLENCODE);
            }
            if (_this.timer) {
                clearInterval(_this.timer);
            }
        }, false);
        document.addEventListener('pause', function () {
            console.log('进入后台展示');
            _this.timer = setInterval(function () {
                _this.httpServices.post('/login', _this.storage.get(__WEBPACK_IMPORTED_MODULE_4__storage__["a" /* StorageProvider */].ME_LOGIN_USERINFO), function (res) {
                }, _this.httpServices.CONTENTTYPE_FORMURLENCODE);
            }, 600000);
        }, false);
    };
    JpushUtilProvider.prototype.initPush = function (navCtrl) {
        /**接收消息触发 */
        document.addEventListener('jpush.receiveNotification', function (event) {
            debugger;
            console.log(JSON.stringify(event), 'Receive notification');
        }, false);
        /**打开消息触发 */
        document.addEventListener('jpush.openNotification', function (event) {
            if (event['extras']['busstype'] == 'ImDefect') {
                navCtrl.push('ImdefectinfoPage', { 'indefect': event['extras']['bussid'], 'wfcode': event['extras']['wfcode'], 'from': 'todolist' });
            }
            else if (event['extras']['busstype'] == 'piTask') {
                navCtrl.push('PitaskinfoPage', { 'taskid': event['extras']['bussid'] });
            }
        }, true);
        /**接收本地消息 */
        document.addEventListener('jpush.receiveLocalNotification', function (event) {
            debugger;
            console.log(JSON.stringify(event), 'receive local notification');
        }, false);
        document.addEventListener('jpush.receiveMessage', function (event) {
            debugger;
            console.log(JSON.stringify(event), 'receive receiveMessage');
        }, false);
    };
    /**
     * 设备的id
     */
    JpushUtilProvider.prototype.getRegistrationID = function () {
        var _this = this;
        this.jpush.getRegistrationID()
            .then(function (rId) {
            _this.registrationId = rId;
        });
    };
    /**
     * 设置标签
     * tags:['Tag1', 'Tag2']
     */
    JpushUtilProvider.prototype.setTags = function (tags) {
        this.jpush.setTags({ sequence: this.sequence++, tags: tags })
            .then(this.tagResultHandler)
            .catch(this.errorHandler);
    };
    /**
     * 添加标签
     * tags:['Tag3', 'Tag4']
     */
    JpushUtilProvider.prototype.addTags = function (tags) {
        this.jpush.addTags({ sequence: this.sequence++, tags: tags })
            .then(this.tagResultHandler)
            .catch(this.errorHandler);
    };
    /**
     * 检测标签状态
     * * @param tag
     */
    JpushUtilProvider.prototype.checkTagBindState = function (tag) {
        this.jpush.checkTagBindState({ sequence: this.sequence++, tag: tag })
            .then(function (result) {
            var sequence = result.sequence;
            var tag = result.tag;
            var isBind = result.isBind;
            console.log('Sequence: ' + sequence + '\nTag: ' + tag + '\nIsBind: ' + isBind, '标签状态');
        }).catch(this.errorHandler);
    };
    /**
     *
     * @param tag 删除标签
     */
    JpushUtilProvider.prototype.deleteTags = function (tag) {
        this.jpush.deleteTags({ sequence: this.sequence++, tags: tag })
            .then(this.tagResultHandler)
            .catch(this.errorHandler);
    };
    /**
     *
     * 获取所有标签
     */
    JpushUtilProvider.prototype.getAllTags = function () {
        this.jpush.getAllTags({ sequence: this.sequence++ })
            .then(this.tagResultHandler)
            .catch(this.errorHandler);
    };
    /**
     *
     *清空所有标签
     */
    JpushUtilProvider.prototype.cleanTags = function () {
        this.jpush.cleanTags({ sequence: this.sequence++ })
            .then(this.tagResultHandler)
            .catch(this.errorHandler);
    };
    /**
     *
     * @param alias 设置别名
     */
    JpushUtilProvider.prototype.setAlias = function (alias) {
        this.jpush.setAlias({ sequence: this.sequence ? this.sequence++ : 1, alias: alias })
            .then(this.aliasResultHandler)
            .catch(this.errorHandler);
    };
    /**
     *
     * 获取所有别名
     */
    JpushUtilProvider.prototype.getAlias = function () {
        this.jpush.getAlias({ sequence: this.sequence++ })
            .then(this.aliasResultHandler)
            .catch(this.errorHandler);
    };
    /**
     *
     * 删除所有别名
     */
    JpushUtilProvider.prototype.deleteAlias = function () {
        this.jpush.deleteAlias({ sequence: this.sequence++ })
            .then(this.aliasResultHandler)
            .catch(this.errorHandler);
    };
    JpushUtilProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__jiguang_ionic_jpush__["a" /* JPush */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_5__http_services__["a" /* HttpServicesProvider */]])
    ], JpushUtilProvider);
    return JpushUtilProvider;
}());

//# sourceMappingURL=jpush-util.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ion_folder_ion_folder__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lmsummary_list_lmsummary_list__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mform_mform__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__normal_select_normal_select__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_head_page_head__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__progress_bar_progress_bar__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ringslide_ringslide__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__starscore_starscore__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__toggle_model_toggle_model__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tree_node_tree_node__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__excel_editor_excel_editor__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__excel_to_table_excel_to_table__ = __webpack_require__(759);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_12__toggle_model_toggle_model__["a" /* ToggleModelComponent */],
                __WEBPACK_IMPORTED_MODULE_9__progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__page_head_page_head__["a" /* PageHeadComponent */],
                __WEBPACK_IMPORTED_MODULE_11__starscore_starscore__["a" /* StarscoreComponent */],
                __WEBPACK_IMPORTED_MODULE_13__tree_node_tree_node__["a" /* TreeNodeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__normal_select_normal_select__["a" /* NormalSelectComponent */],
                __WEBPACK_IMPORTED_MODULE_10__ringslide_ringslide__["a" /* RingslideComponent */],
                __WEBPACK_IMPORTED_MODULE_4__ion_folder_ion_folder__["a" /* IonFolderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__mform_mform__["a" /* MformComponent */],
                __WEBPACK_IMPORTED_MODULE_5__lmsummary_list_lmsummary_list__["a" /* LmsummaryListComponent */],
                __WEBPACK_IMPORTED_MODULE_14__excel_editor_excel_editor__["a" /* ExcelEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_15__excel_to_table_excel_to_table__["a" /* ExcelToTableComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* DirectivesModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_12__toggle_model_toggle_model__["a" /* ToggleModelComponent */],
                __WEBPACK_IMPORTED_MODULE_9__progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__page_head_page_head__["a" /* PageHeadComponent */],
                __WEBPACK_IMPORTED_MODULE_11__starscore_starscore__["a" /* StarscoreComponent */],
                __WEBPACK_IMPORTED_MODULE_13__tree_node_tree_node__["a" /* TreeNodeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__normal_select_normal_select__["a" /* NormalSelectComponent */],
                __WEBPACK_IMPORTED_MODULE_10__ringslide_ringslide__["a" /* RingslideComponent */],
                __WEBPACK_IMPORTED_MODULE_4__ion_folder_ion_folder__["a" /* IonFolderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__mform_mform__["a" /* MformComponent */],
                __WEBPACK_IMPORTED_MODULE_14__excel_editor_excel_editor__["a" /* ExcelEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_15__excel_to_table_excel_to_table__["a" /* ExcelToTableComponent */],
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the WorkflowServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WorkflowServiceProvider = /** @class */ (function () {
    function WorkflowServiceProvider(httpService) {
        this.httpService = httpService;
        console.log('Hello WorkflowServiceProvider Provider');
    }
    WorkflowServiceProvider.prototype.checkAuth = function (wfid, callback) {
        this.httpService.get("/workflow/checkAuth/" + wfid, null, function (result) {
            callback(result);
        });
    };
    /*提交流程*/
    WorkflowServiceProvider.prototype.workflowStart = function (busstype, bussid, callback) {
        this.httpService.get("/workflow/start/" + busstype + "/" + busstype + "?code=" + busstype, null, callback);
    };
    /*流程审批选项*/
    WorkflowServiceProvider.prototype.workflowWay = function (wfid, callback) {
        var url = "/workflow/way/" + wfid;
        this.httpService.get(url, null, function (result) {
            callback(result);
        });
    };
    /*发送流程*/
    WorkflowServiceProvider.prototype.startAndSenf = function (busstype, bussid, callback) {
        this.httpService.post("/workflow/startAndSenf/" + busstype + "/" + busstype, null, function (result) {
            callback(result);
        });
    };
    /*流程历史*/
    WorkflowServiceProvider.prototype.historylist = function (wfid, callback) {
        var url = "/workflow/historylist/" + wfid + "?sort=id&order=desc";
        this.httpService.get(url, null, function (result) {
            callback(result);
        });
    };
    // 检查流程
    WorkflowServiceProvider.prototype.workflowcheckAuth = function (forminfo, page) {
        // console.log(forminfo)
        if (forminfo['wfid'] != "" && forminfo['wfid'] != null) {
            this.checkAuth(forminfo['wfid'], function (data) {
                if (data.code == 1) {
                    if (page != null) {
                        $(page + ' #saveBtn').hide();
                        $(page + ' #workflowStart').hide();
                        $(page + ' #ionFooter').hide();
                        $(page + ' .scroll-content').css({ 'margin-bottom': '0' });
                    }
                    else {
                        $('#saveBtn').hide();
                        $('#workflowStart').hide();
                        $('#ionFooter').hide();
                        $('.scroll-content').css({ 'margin-bottom': '0' });
                    }
                }
            });
            if (forminfo['wfstatus'] == "CLOSE") {
                if (page != null) {
                    $(page + ' #ionFooter').hide();
                    $(page + ' .scroll-content').css({ 'margin-bottom': '0' });
                    $(page + ' #saveBtn').hide();
                }
                else {
                    $(' #ionFooter').hide();
                    $('.scroll-content').css({ 'margin-bottom': '0' });
                    $('#saveBtn').hide();
                }
            }
        }
    };
    WorkflowServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_services__["a" /* HttpServicesProvider */]])
    ], WorkflowServiceProvider);
    return WorkflowServiceProvider;
}());

//# sourceMappingURL=workflow-service.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ts_md5_dist_md5__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ts_md5_dist_md5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//配置文件

//npm install ts-md5 --save

/*
  Generated class for the ToolsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ToolsProvider = /** @class */ (function () {
    function ToolsProvider(http, storage, toastCtrl) {
        this.http = http;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        console.log('Hello ToolsProvider Provider');
    }
    //获取用户信息
    ToolsProvider.prototype.getUserInfo = function () {
        var userinfo = this.storage.get('userinfo');
        if (userinfo) {
            return userinfo;
        }
        else {
            return null;
        }
    };
    ToolsProvider.prototype.getUserId = function () {
        var userinfo = this.getUserInfo();
        if (userinfo != null) {
            return userinfo['id'];
        }
    };
    ToolsProvider.prototype.getUserDepartmentId = function () {
        var userinfo = this.getUserInfo();
        if (userinfo != null) {
            return userinfo['departmentId'];
        }
    };
    ToolsProvider.prototype.sign = function (json) {
        //
        // console.log(Md5.hashStr("123456"));
        // json={
        //   age:20,name:'zhangsan'
        // }
        var tempArr = [];
        for (var attr in json) {
            tempArr.push(attr);
        }
        //排序
        tempArr = tempArr.sort();
        var tempStr = '';
        for (var i = 0; i < tempArr.length; i++) {
            tempStr += tempArr[i] + json[tempArr[i]];
        }
        return __WEBPACK_IMPORTED_MODULE_5_ts_md5_dist_md5__["Md5"].hashStr(tempStr);
    };
    ToolsProvider.prototype.InitSelectMultiple = function (type, forminfo) {
        if (forminfo[type] != null && forminfo[type] != '') {
            forminfo[type] = forminfo[type].split(",");
        }
    };
    ToolsProvider.prototype.SaveSelectMultiple = function (type, forminfo) {
        if (forminfo[type] != null && forminfo[type] != '' && forminfo[type] instanceof Array) {
            forminfo[type] = forminfo[type].join(",");
        }
    };
    ToolsProvider.prototype.initform = function (formdata, forminfo) {
        for (var i = 0; i < formdata.length; i++) {
            if (formdata[i].required && !formdata[i].hide) {
                if (formdata[i].type == 'selectUser' || formdata[i].type == 'selectDept') {
                    if (forminfo[formdata[i].indexId] == "") {
                        this.toastCtrl.create({
                            position: 'top',
                            duration: 1500,
                            message: formdata[i].placeholder != '' && formdata[i].placeholder != undefined ? formdata[i].placeholder : formdata[i].name + '不为空',
                        }).present();
                        return false;
                    }
                }
                else if (forminfo[formdata[i].index] == "" || forminfo[formdata[i].index] == null) {
                    // if(formdata[i].type == 'choosesign'){
                    //   this.toastCtrl.create({
                    //     position:'top',
                    //     duration:1500,
                    //     message:formdata[i].placeholder != '' && formdata[i].placeholder != undefined ?  formdata[i].name + formdata[i].placeholder : formdata[i].name+'不为空',
                    //   }).present();
                    // }else{
                    this.toastCtrl.create({
                        position: 'top',
                        duration: 1500,
                        message: formdata[i].placeholder != '' && formdata[i].placeholder != undefined ? formdata[i].placeholder : formdata[i].name + '不为空',
                    }).present();
                    // }
                    return false;
                }
            }
        }
        return true;
    };
    ToolsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* ToastController */]])
    ], ToolsProvider);
    return ToolsProvider;
}());

//# sourceMappingURL=tools.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__split_string_split_string__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slice_string_slice_string__ = __webpack_require__(761);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__split_string_split_string__["a" /* SplitStringPipe */],
                __WEBPACK_IMPORTED_MODULE_2__slice_string_slice_string__["a" /* SliceStringPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__split_string_split_string__["a" /* SplitStringPipe */],
                __WEBPACK_IMPORTED_MODULE_2__slice_string_slice_string__["a" /* SliceStringPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SqliteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SqliteProvider = /** @class */ (function () {
    function SqliteProvider(sqlite) {
        this.sqlite = sqlite;
        this.initDb();
    }
    SqliteProvider.prototype.insert = function (sql, params, callback) {
        this.database.executeSql(sql, params).then(function (data) {
            if (callback != null) {
                callback(1);
            }
        }, function (error) {
            if (callback != null) {
                callback(0);
            }
            console.log('插入错误' + JSON.stringify(error) + ",sql:" + sql);
        });
    };
    SqliteProvider.prototype.update = function (sql, params, callback) {
        this.database.executeSql(sql, params).then(function (data) {
            if (callback != null) {
                callback(1);
            }
        }, function (error) {
            if (callback != null) {
                callback(0);
            }
            console.log('更新错误' + JSON.stringify(error) + ",sql:" + sql);
        });
    };
    //查询数据结果集
    SqliteProvider.prototype.query = function (sql, params, callback) {
        this.database.executeSql(sql, params).then(function (res) {
            var arrList = [];
            var len = res.rows.length;
            if (len > 0) {
                for (var i = 0; i < len; i++) {
                    arrList.push(res.rows.item(i));
                }
                //console.log('查询脚本:'+sql+',结果:'+JSON.stringify(arrList));
                if (callback != null) {
                    callback(arrList);
                }
            }
            else {
                if (callback != null) {
                    callback(arrList);
                }
            }
        }, function (error) {
            console.log('查询错误' + JSON.stringify(error) + ",sql:" + sql);
            if (callback != null) {
                callback();
            }
        });
    };
    //查询一条数据
    SqliteProvider.prototype.queryOne = function (sql, params, callback) {
        this.database.executeSql(sql, params).then(function (res) {
            var len = res.rows.length;
            if (len > 0) {
                if (callback != null) {
                    callback(res.rows.item(0));
                }
            }
            else {
                if (callback != null) {
                    callback(null);
                }
            }
        }, function (error) {
            console.log('查询错误' + JSON.stringify(error) + ",sql:" + sql);
            if (callback != null) {
                callback(null);
            }
        });
    };
    //删除表
    SqliteProvider.prototype.droptable = function (tablename, callback) {
        var _this = this;
        var drop_table_sql = 'drop table ' + tablename;
        var tableexist = "select count(*) countnum from sqlite_master where type='table' and name = '" + tablename + "'";
        this.query(tableexist, [], function (result) {
            if (result != null && result.length > 0) {
                var countnum = result[0].countnum;
                if (countnum >= 1) {
                    console.log('删除表:' + drop_table_sql);
                    _this.database.executeSql(drop_table_sql, []).then(function (data) {
                        if (callback != null) {
                            callback(1);
                        }
                    }, function (error) {
                        console.log('删除表错误:' + drop_table_sql + ',错误原因:' + JSON.stringify(error));
                        if (callback != null) {
                            callback(null);
                        }
                    });
                }
                else {
                    if (callback != null) {
                        callback(0);
                    }
                }
            }
        });
    };
    //删除数据
    SqliteProvider.prototype.delete = function (delSql, params, callback) {
        this.database.executeSql(delSql, params).then(function (data) {
            if (callback != null) {
                callback(1);
            }
        }, function (error) {
            console.log('删除数据错误:' + delSql + ',错误原因:' + JSON.stringify(error));
            if (callback != null) {
                callback(null);
            }
        });
    };
    //创建表
    SqliteProvider.prototype.createtable = function (sql, tablename, callback) {
        var _this = this;
        var tableexist = "select count(*) countnum from sqlite_master where type='table' and name = '" + tablename + "'";
        this.query(tableexist, [], function (result) {
            if (result != null && result.length > 0) {
                var countnum = result[0].countnum;
                if (countnum < 1) {
                    console.log('创建表:' + sql);
                    _this.database.executeSql(sql, []).then(function (data) {
                        if (callback != null) {
                            callback(1);
                        }
                    }, function (error) {
                        console.log('创建表错误:' + JSON.stringify(error));
                        if (callback != null) {
                            callback(null);
                        }
                    });
                }
                else {
                    if (callback != null) {
                        callback(0);
                    }
                }
            }
        });
    };
    SqliteProvider.prototype.tableExist = function (tablename, callback) {
        var tableexist = "select count(*) countnum from sqlite_master where type='table' and name = '" + tablename + "'";
        this.query(tableexist, [], function (result) {
            callback(result);
        });
    };
    //创建索引
    SqliteProvider.prototype.createindex = function (sql, callback) {
        this.database.executeSql(sql, []).then(function (data) {
            console.log('创建索引:' + sql);
            if (callback != null) {
                callback(1);
            }
        }, function (error) {
            console.log('创建索引错误:' + JSON.stringify(error));
            if (callback != null) {
                callback(null);
            }
        });
    };
    //初始化db
    SqliteProvider.prototype.initDb = function (callback) {
        var _this = this;
        this.sqlite.create({
            name: 'tky.db',
            location: 'default'
        }).then(function (db) {
            _this.database = db;
            if (callback != null) {
                callback();
            }
        }).catch(function (e) {
            console.log("catch2" + JSON.stringify(e));
        });
    };
    SqliteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
    ], SqliteProvider);
    return SqliteProvider;
}());

//# sourceMappingURL=sqlite.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(441);


// import 'web-animations-js/web-animations.min';
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
// enableProdMode();   //加快启动速度
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_gallery_modal__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_directives_module__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_config__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_custom_error_handler__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_phone_device__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_tools__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_qr_scanner__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_file__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_file_transfer__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_jpush_util__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_workflow_service__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_date_picker__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_media__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_media_capture__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_photo_viewer__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_screen_orientation_ngx__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_network__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_photo_library__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_streaming_media__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_app_version__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_video_editor__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_android_permissions__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_file_opener__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__jiguang_ionic_jpush__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ionic3_index_list__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_back_button__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_angular_svg_round_progressbar__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_element_angular__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_android_fingerprint_auth__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_app_minimize__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_themeable_browser__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_app_availability__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_ble__ = __webpack_require__(910);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_calendar__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_nfc__ = __webpack_require__(911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_sqlite__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50_ng2_dragula__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_page_config__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_sqlite__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pipes_pipes_module__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { TabsPage } from '../pages/tabs/tabs';










// import { BarcodeScanner } from '@ionic-native/barcode-scanner';

// import { QRScanner} from '@ionic-native/qr-scanner';









// import { ScreenOrientationOriginal } from '@ionic-native/screen-orientation';

//network

//保存图片到本地

//播放视频

//视频编辑


// import { FileOpener } from '@ionic-native/file-opener';

//极光推送插件




//圆形进度条

//el module 

//指纹识别

//import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
//最小化app

//pdf打开器
// import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
// import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
// import zh from '@angular/common/locales/zh';
// import { registerLocaleData } from '@angular/common';
// registerLocaleData(zh);
//内置浏览器

// import { HomePage } from '../pages/home/home';
//日历插件









//自定义多级联动
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_23__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* JsonpModule */], __WEBPACK_IMPORTED_MODULE_38_ionic3_index_list__["a" /* IndexListModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_gallery_modal__["c" /* GalleryModalModule */],
                // IonicSwipeAllModule,
                __WEBPACK_IMPORTED_MODULE_40_angular_svg_round_progressbar__["RoundProgressModule"],
                __WEBPACK_IMPORTED_MODULE_41_element_angular__["a" /* ElModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_50_ng2_dragula__["a" /* DragulaModule */].forRoot(),
                // NgZorroAntdModule,
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {
                    swipeBackEnabled: 'true',
                    tabsHideOnSubPages: 'true',
                    backButtonText: '',
                    backButtonIcon: 'ios-arrow-back'
                }, {
                    links: [
                        { loadChildren: '../pages/dialog/dialog-changepassword/dialog-changepassword.module#DialogChangepasswordPageModule', name: 'DialogChangepasswordPage', segment: 'dialog-changepassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dialog/dialog-first/dialog-first.module#DialogFirstPageModule', name: 'DialogFirstPage', segment: 'dialog-first', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dialog/dialog-pitaskitems/dialog-pitaskitems.module#DialogPitaskitemsPageModule', name: 'DialogPitaskitemsPage', segment: 'dialog-pitaskitems', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dialog/leasset-dialog/leasset-dialog.module#LeassetDialogPageModule', name: 'LeassetDialogPage', segment: 'leasset-dialog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-application/edit-application.module#EditApplicationPageModule', name: 'EditApplicationPage', segment: 'edit-application', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/excel/exceleditor/exceleditor.module#ExceleditorPageModule', name: 'ExceleditorPage', segment: 'exceleditor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmmain/lmchzl/lmchzl.module#LmchzlPageModule', name: 'LmchzlPage', segment: 'lmchzl', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmmain/lmjdgk/lmjdgk.module#LmjdgkPageModule', name: 'LmjdgkPage', segment: 'lmjdgk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmmain/lmjrjb/lmjrjb.module#LmjrjbPageModule', name: 'LmjrjbPage', segment: 'lmjrjb', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmmain/lmtagsupervisory2/lmtagsupervisory2.module#Lmtagsupervisory2PageModule', name: 'Lmtagsupervisory2Page', segment: 'lmtagsupervisory2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmnews/lmnews.module#LmnewsPageModule', name: 'LmnewsPage', segment: 'lmnews', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmnews/lmnewsinfo/lmnewsinfo.module#LmnewsinfoPageModule', name: 'LmnewsinfoPage', segment: 'lmnewsinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmpjiitemtool/lmpjiitemtool.module#LmpjiitemtoolPageModule', name: 'LmpjiitemtoolPage', segment: 'lmpjiitemtool', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmpjiitemtool/lmpjiitemtoolinfo/lmpjiitemtoolinfo.module#LmpjiitemtoolinfoPageModule', name: 'LmpjiitemtoolinfoPage', segment: 'lmpjiitemtoolinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmpjMeeting/lmpjMeeting.module#LmpjMeetingPageModule', name: 'LmpjMeetingPage', segment: 'lmpjMeeting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmpjMeeting/lmpjMeetinginfo/lmpjMeetinginfo.module#LmpjMeetinginfoPageModule', name: 'LmpjMeetinginfoPage', segment: 'lmpjMeetinginfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmpjmmtpurch/lmpjmmtpurch.module#LmpjmmtpurchPageModule', name: 'LmpjmmtpurchPage', segment: 'lmpjmmtpurch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmpjmmtpurch/lmpjmmtpurchinfo/lmpjmmtpurchinfo.module#LmpjmmtpurchinfoPageModule', name: 'LmpjmmtpurchinfoPage', segment: 'lmpjmmtpurchinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmpjProject/lmpjProject.module#LmpjProjectPageModule', name: 'LmpjProjectPage', segment: 'lmpjProject', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmsite/lmsite.module#LmsitePageModule', name: 'LmsitePage', segment: 'lmsite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmsite/lmsiteinfo/lmsiteinfo.module#LmsiteinfoPageModule', name: 'LmsiteinfoPage', segment: 'lmsiteinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtabs/lmtabs.module#LmtabsPageModule', name: 'LmtabsPage', segment: 'lmtabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagfile/lmtagfile.module#LmtagfilePageModule', name: 'LmtagfilePage', segment: 'lmtagfile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagfile/lmtagfilematerial/lmtagfilematerial.module#LmtagfilematerialPageModule', name: 'LmtagfilematerialPage', segment: 'lmtagfilematerial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagfile/lmtagfilelist/lmtagfilelist.module#LmtagfilelistPageModule', name: 'LmtagfilelistPage', segment: 'lmtagfilelist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagfile/lmtagfilesparelist/lmtagfilesparelist.module#LmtagfilesparelistPageModule', name: 'LmtagfilesparelistPage', segment: 'lmtagfilesparelist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagfile/lmtagfiletechdatarecord/lmtagfiletechdatarecord.module#LmtagfiletechdatarecordPageModule', name: 'LmtagfiletechdatarecordPage', segment: 'lmtagfiletechdatarecord', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagfile/lmtagfiletechdatarecord/lmtagfiletechdatarecorddetail/lmtagfiletechdatarecorddetail.module#LmtagfiletechdatarecorddetailPageModule', name: 'LmtagfiletechdatarecorddetailPage', segment: 'lmtagfiletechdatarecorddetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagfile/lmtagfiletechdatarecord/lmtagfiletechdatarecordinfo/lmtagfiletechdatarecordinfo.module#LmtagfiletechdatarecordinfoPageModule', name: 'LmtagfiletechdatarecordinfoPage', segment: 'lmtagfiletechdatarecordinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagfile/lmtagfiletool/lmtagfiletool.module#LmtagfiletoolPageModule', name: 'LmtagfiletoolPage', segment: 'lmtagfiletool', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagfilespare/lmtagfilespare.module#LmtagfilesparePageModule', name: 'LmtagfilesparePage', segment: 'lmtagfilespare', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagnonconformity/lmtagnonconformity.module#LmtagnonconformityPageModule', name: 'LmtagnonconformityPage', segment: 'lmtagnonconformity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagplan/lmtagplan.module#LmtagplanPageModule', name: 'LmtagplanPage', segment: 'lmtagplan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagplan/lmtagplaninfo/lmtagplaninfo.module#LmtagplaninfoPageModule', name: 'LmtagplaninfoPage', segment: 'lmtagplaninfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagproject/lmtagproject.module#LmtagprojectPageModule', name: 'LmtagprojectPage', segment: 'lmtagproject', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagprojectlog/lmtagprojectloglist/lmtagprojectloglist.module#LmtagprojectloglistPageModule', name: 'LmtagprojectloglistPage', segment: 'lmtagprojectloglist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagqualityinspection/lmtagqualityinspection.module#LmtagqualityinspectionPageModule', name: 'LmtagqualityinspectionPage', segment: 'lmtagqualityinspection', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagreportdaily/lmtagreportdaily.module#LmtagreportdailyPageModule', name: 'LmtagreportdailyPage', segment: 'lmtagreportdaily', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagreportweek/lmtagreportweek.module#LmtagreportweekPageModule', name: 'LmtagreportweekPage', segment: 'lmtagreportweek', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagsiteposition/lmtagsiteposition.module#LmtagsitepositionPageModule', name: 'LmtagsitepositionPage', segment: 'lmtagsiteposition', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagsiteposition/lmtagsitepositioninfo/lmtagsitepositioninfo.module#LmtagsitepositioninfoPageModule', name: 'LmtagsitepositioninfoPage', segment: 'lmtagsitepositioninfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagsummary/lmtagsummaryinfo/lmtagsummaryinfo.module#LmtagsummaryinfoPageModule', name: 'LmtagsummaryinfoPage', segment: 'lmtagsummaryinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagsummary/lmtagsummary.module#LmtagsummaryPageModule', name: 'LmtagsummaryPage', segment: 'lmtagsummary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagsummaryspecialty/lmtagsummaryspecialty.module#LmtagsummaryspecialtyPageModule', name: 'LmtagsummaryspecialtyPage', segment: 'lmtagsummaryspecialty', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagsummaryspecialty/lmtagsummaryspecialtyinfo/lmtagsummaryspecialtyinfo.module#LmtagsummaryspecialtyinfoPageModule', name: 'LmtagsummaryspecialtyinfoPage', segment: 'lmtagsummaryspecialtyinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagsummarytech/lmtagsummarytech.module#LmtagsummarytechPageModule', name: 'LmtagsummarytechPage', segment: 'lmtagsummarytech', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagsummarytech/lmtagsummarytechinfo/lmtagsummarytechinfo.module#LmtagsummarytechinfoPageModule', name: 'LmtagsummarytechinfoPage', segment: 'lmtagsummarytechinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagsupervisory/lmtagsupervisory.module#LmtagsupervisoryPageModule', name: 'LmtagsupervisoryPage', segment: 'lmtagsupervisory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagworkorder/lmtagworkorderinfo/components/lmtagworkorderplanbaseinfo/lmtagworkorderplanbaseinfo.module#LmtagworkorderplanbaseinfoPageModule', name: 'LmtagworkorderplanbaseinfoPage', segment: 'lmtagworkorderplanbaseinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagworkorder/lmtagworkorderinfo/components/lmtagworkorderqualityinfo/lmtagworkorderqualityinfo.module#LmtagworkorderqualityinfoPageModule', name: 'LmtagworkorderqualityinfoPage', segment: 'lmtagworkorderqualityinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagworkorder/lmtagworkorderinfo/components/lmtagworkorderplaninfo/lmtagworkorderplaninfo.module#LmtagworkorderplaninfoPageModule', name: 'LmtagworkorderplaninfoPage', segment: 'lmtagworkorderplaninfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/me/aboutus/aboutus.module#AboutusPageModule', name: 'AboutusPage', segment: 'aboutus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/me/annex/annex.module#AnnexPageModule', name: 'AnnexPage', segment: 'annex', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/me/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/me/me.module#MePageModule', name: 'MePage', segment: 'me', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/me/securityset/securityset.module#SecuritysetPageModule', name: 'SecuritysetPage', segment: 'securityset', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/me/systemsetup/systemsetup.module#SystemsetupPageModule', name: 'SystemsetupPage', segment: 'systemsetup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paper/paperinfosearch/collectionfile/collectionfile.module#CollectionfilePageModule', name: 'CollectionfilePage', segment: 'collectionfile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/system/deptdialog/deptdialog.module#DeptdialogPageModule', name: 'DeptdialogPage', segment: 'deptdialog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/system/equipmentdialog/equipmentdialog.module#EquipmentdialogPageModule', name: 'EquipmentdialogPage', segment: 'equipmentdialog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/system/projectdialog/projectdialog.module#ProjectdialogPageModule', name: 'ProjectdialogPage', segment: 'projectdialog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/system/reportview/reportview.module#ReportviewPageModule', name: 'ReportviewPage', segment: 'reportview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/system/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/system/system.module#SystemPageModule', name: 'SystemPage', segment: 'system', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/system/signaturepad/signaturepad.module#SignaturepadPageModule', name: 'SignaturepadPage', segment: 'signaturepad', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/system/userdialog/userdialog.module#UserdialogPageModule', name: 'UserdialogPage', segment: 'userdialog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workflow/activiti/workflowroute/workflowroute.module#WorkflowroutePageModule', name: 'WorkflowroutePage', segment: 'workflowroute', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workflow/activiti/workflowstart/workflowstart.module#WorkflowstartPageModule', name: 'WorkflowstartPage', segment: 'workflowstart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workflow/historylist/historylist.module#HistorylistPageModule', name: 'HistorylistPage', segment: 'historylist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workflow/workflow.module#WorkflowPageModule', name: 'WorkflowPage', segment: 'workflow', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmhome/lmhome.module#ImhomePageModule', name: 'LmhomePage', segment: 'lmhome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmmain/lmaqgk/lmaqgk.module#LmaqgkPageModule', name: 'LmaqgkPage', segment: 'lmaqgk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmmain/lmcbgk/lmcbgk.module#LmcbgkPageModule', name: 'LmcbgkPage', segment: 'lmcbgk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmmain/lmzl/lmzl.module#LmzlPageModule', name: 'LmzlPage', segment: 'lmzl', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmmain/lmzlgk/lmzlgk.module#LmzlgkPageModule', name: 'LmzlgkPage', segment: 'lmzlgk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmpjifiles/lmpjifiles.module#LmpjifilesPageModule', name: 'LmpjifilesPage', segment: 'lmpjifiles', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmpjProject/lmpjProjectinfo/lmpjProjectinfo.module#LmpjProjectinfoPageModule', name: 'LmpjProjectinfoPage', segment: 'lmpjProjectinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagarchivemanage/lmtagarchivemanage.module#LmtagarchivemanagePageModule', name: 'LmtagarchivemanagePage', segment: 'lmtagarchivemanage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagfile/lmtagfilecomplereport/lmtagfilecomplereport.module#LmtagfilecomplereportPageModule', name: 'LmtagfilecomplereportPage', segment: 'lmtagfilecomplereport', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagfile/lmtagfileoverhaul/lmtagfileoverhaul.module#LmtagfileoverhaulPageModule', name: 'LmtagfileoverhaulPage', segment: 'lmtagfileoverhaul', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagnonconformity/lmtagnonconformityinfo/lmtagnonconformityinfo.module#LmtagnonconformityinfoPageModule', name: 'LmtagnonconformityinfoPage', segment: 'lmtagnonconformityinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagprojectlog/lmtagprojectlog.module#LmtagprojectlogPageModule', name: 'LmtagprojectlogPage', segment: 'lmtagprojectlog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagqualityinspection/lmtagqualityinspectioninfo/lmtagqualityinspectioninfo.module#LmtagqualityinspectioninfoPageModule', name: 'LmtagqualityinspectioninfoPage', segment: 'lmtagqualityinspectioninfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagreportdaily/lmtagreportdailyinfo/lmtagreportdailyinfo.module#LmtagreportdailyinfoPageModule', name: 'LmtagreportdailyinfoPage', segment: 'lmtagreportdailyinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagreportweek/lmtagreportweekinfo/lmtagreportweekinfo.module#LmtagreportweekinfoPageModule', name: 'LmtagreportweekinfoPage', segment: 'lmtagreportweekinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagstartupreport/lmtagstartupreport.module#LmtagstartupreportPageModule', name: 'LmtagstartupreportPage', segment: 'lmtagstartupreport', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagstartupreport/lmtagstartupreportinfo/lmtagstartupreportinfo.module#LmtagstartupreportinfoPageModule', name: 'LmtagstartupreportinfoPage', segment: 'lmtagstartupreportinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagsupervisory/lmtagsupervisoryinfo/lmtagsupervisoryinfo.module#LmtagsupervisoryinfoPageModule', name: 'LmtagsupervisoryinfoPage', segment: 'lmtagsupervisoryinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagtraininghandover/lmtagtraininghandover.module#LmtagtraininghandoverPageModule', name: 'LmtagtraininghandoverPage', segment: 'lmtagtraininghandover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagtraininghandover/lmtagtraininghandoverinfo/lmtagtraininghandoverinfo.module#LmtagtraininghandoverinfoPageModule', name: 'LmtagtraininghandoverinfoPage', segment: 'lmtagtraininghandoverinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagworkorder/lmtagworkorder.module#LmtagworkorderPageModule', name: 'LmtagworkorderPage', segment: 'lmtagworkorder', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmworkbench/lmworkbench.module#LmworkbenchPageModule', name: 'LmworkbenchPage', segment: 'lmworkbench', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/me/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paper/paperinfosearch/paperinfosearch.module#PaperinfosearchPageModule', name: 'PaperinfosearchPage', segment: 'paperinfosearch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workflow/todolist/todolist.module#TodolistPageModule', name: 'TodolistPage', segment: 'todolist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagfile/lmtagfileinfo/lmtagfileinfo.module#LmtagfileinfoPageModule', name: 'LmtagfileinfoPage', segment: 'lmtagfileinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lm/lmtagworkorder/lmtagworkorderinfo/lmtagworkorderinfo.module#LmtagworkorderinfoPageModule', name: 'LmtagworkorderinfoPage', segment: 'lmtagworkorderinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scanner/scanner.module#ScannerPageModule', name: 'ScannerPage', segment: 'scanner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workreport/workreport.module#WorkreportPageModule', name: 'WorkreportPage', segment: 'workreport', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_53__pipes_pipes_module__["a" /* PipesModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            ],
            providers: [
                // ComponentsModule,
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                //FingerprintAIO,
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_android_fingerprint_auth__["a" /* AndroidFingerprintAuth */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
                // BarcodeScanner,
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_media__["a" /* Media */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_media_capture__["a" /* MediaCapture */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_qr_scanner__["a" /* QRScanner */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_video_editor__["a" /* VideoEditor */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_streaming_media__["a" /* StreamingMedia */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_photo_library__["a" /* PhotoLibrary */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_22__providers_jpush_util__["a" /* JpushUtilProvider */],
                __WEBPACK_IMPORTED_MODULE_37__jiguang_ionic_jpush__["a" /* JPush */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_app_minimize__["a" /* AppMinimize */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_themeable_browser__["a" /* ThemeableBrowser */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_screen_orientation_ngx__["a" /* ScreenOrientation */],
                // { provide: NZ_I18N, useValue: zh_CN },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_14__providers_custom_error_handler__["a" /* MyErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["HAMMER_GESTURE_CONFIG"], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_gallery_modal__["b" /* GalleryModalHammerConfig */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_config__["a" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_http_services__["a" /* HttpServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_tools__["a" /* ToolsProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_workflow_service__["a" /* WorkflowServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_16__providers_phone_device__["a" /* PhoneDeviceProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_back_button__["a" /* BackButtonProvider */],
                // DocumentViewer,
                __WEBPACK_IMPORTED_MODULE_40_angular_svg_round_progressbar__["RoundProgressModule"],
                __WEBPACK_IMPORTED_MODULE_50_ng2_dragula__["b" /* DragulaService */],
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_calendar__["a" /* Calendar */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_app_availability__["a" /* AppAvailability */],
                __WEBPACK_IMPORTED_MODULE_51__providers_page_config__["a" /* PageConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_52__providers_sqlite__["a" /* SqliteProvider */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_ble__["a" /* BLE */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_nfc__["a" /* NFC */], __WEBPACK_IMPORTED_MODULE_48__ionic_native_nfc__["b" /* Ndef */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Http } from '@angular/http';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageProvider = /** @class */ (function () {
    function StorageProvider() {
        console.log('Hello StorageProvider Provider');
    }
    StorageProvider_1 = StorageProvider;
    //localStorage
    StorageProvider.prototype.set = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value)); /*对象转换成字符串*/
    };
    StorageProvider.prototype.get = function (key) {
        return JSON.parse(localStorage.getItem(key)); /*字符串转换成对象*/
    };
    StorageProvider.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    // 消息相关
    StorageProvider.prototype.getMessageCount = function () {
        return StorageProvider_1.MESSAGE_COUNT;
    };
    StorageProvider.prototype.setMessageCount = function (num) {
        StorageProvider_1.MESSAGE_COUNT = num;
    };
    StorageProvider.ME_LOGIN_USERINFO = "loginuserinfo";
    StorageProvider.ME_LOGIN_DATE = "exDate"; //登陆时间
    StorageProvider.TOKEN_LIVE_TIME = 30 * 6 * 60 * 60 * 1000; //token30天
    StorageProvider.ME_USERINFO = "userinfo";
    StorageProvider.Me_IMDEFECTIMG = 'imdefectimg';
    StorageProvider.Me_IMAGES = 'images';
    //非wifi状态下  提醒一次为true 每次提醒为false
    StorageProvider.ISOFFWIFILOAD = 'isoffwifiload';
    StorageProvider.LE_LEASSET_SELECTASSET = "LE_LEASSET_SELECTASSET";
    StorageProvider.HOME_APPAUTHORITY = "appAuthority";
    StorageProvider.LOGIN_USERINFO_LIST = "loginUserList";
    StorageProvider.SYSTEM_CONFIG = "systemConfig";
    StorageProvider.ISKEEP_PASSWORD = "isKeepPassword";
    StorageProvider.ALLAPPLICATION = "allApplication";
    StorageProvider.USERINFOACCOUNT = 'userinfoAccount';
    StorageProvider.SETTING_FINGER_LOGIN = "SETTING_FINGER_LOGIN";
    StorageProvider.BLUETOOTH_CONNECTED_DEVICE = "BLUETOOTH_CONNECTED_DEVICE";
    StorageProvider.OFFLINE_PI = "OFFLINE_PI";
    StorageProvider.OFFLINE_PI_UPLOAD_INTERVAL = "OFFLINE_PI_UPLOAD_INTERVAL";
    //巡检tab
    StorageProvider.pitaskicons = "0";
    //巡检人
    StorageProvider.PI_TASK_PATROKMANNAME = "patrolmanname";
    //精益检修项目id
    StorageProvider.LM_PROJECTID = "lmprojectid";
    // 消息
    StorageProvider.MESSAGE_COUNT = 0;
    // 是否在浏览器容器
    StorageProvider.IS_BROWSER = "isBrowser";
    StorageProvider = StorageProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StorageProvider);
    return StorageProvider;
    var StorageProvider_1;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Http } from '@angular/http';

var ConfigProvider = /** @class */ (function () {
    // public static apiUrl = "http://localhost:8100/nsdc"; // 本地
    function ConfigProvider() {
    }
    ConfigProvider.environment = 'blueEnvironment';
    //api请求地址
    // public static apiUrl="http://10.86.8.211"
    //  public static apiUrl="http://183.6.71.21:50555/ahsz"; // 测试外网
    ConfigProvider.apiUrl = "http://192.168.50.90:8888/nsdc"; // 本地ng
    ConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
        // 环境配置主要跟蒲公英发布网址有关。以及图片地址，附件地址。
        ,
        __metadata("design:paramtypes", [])
    ], ConfigProvider);
    return ConfigProvider;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputOverflowDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * 监听mform组建内input text内容溢出，将input换行
 */
var InputOverflowDirective = /** @class */ (function () {
    function InputOverflowDirective(el) {
        this.el = el;
    }
    InputOverflowDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            var target = _this.el.nativeElement.children[0];
            if (target.scrollWidth > target.offsetWidth) {
                // 内容溢出
                _this.el.nativeElement.style.flex = 'none';
                _this.el.nativeElement.parentElement.style.flexWrap = 'wrap';
                $(_this.el.nativeElement).prev()[0].style.marginBottom = 0;
            }
        }, 100);
    };
    InputOverflowDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[input-overflow]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], InputOverflowDirective);
    return InputOverflowDirective;
}());

//# sourceMappingURL=inputoverflow.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardoverlayDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
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
 * Generated class for the KeyboardoverlayDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */

var KeyboardoverlayDirective = /** @class */ (function () {
    function KeyboardoverlayDirective(platform) {
        // cordova.plugins.Keyboard.close();
        this.platform = platform;
        this.height = 0;
        this.offsetTop = 0;
        // console.log('Hello KeyboardoverlayDirective Directive');
        // // window.addEventListener('native.keyboardhide', () => {
        // //   this.keyboardoverlay._elementRef.nativeElement.style.marginTop='0px'
        // // });
        // this.keyboard.show();
    }
    KeyboardoverlayDirective.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener('native.keyboardhide', function () {
            _this.keyboardoverlay._elementRef.nativeElement.style.marginTop = '0px';
            _this.height = 0;
        });
        window.addEventListener('native.keyboardshow', function (e) {
            _this.height = e.keyboardHeight;
            // this.height = 0;
        });
    };
    KeyboardoverlayDirective.prototype.ngOnDestroy = function () {
        // if (this.platform.is('android')) {
        window.removeEventListener('keyboardDidShow', this.keyBoardShow, false);
        window.removeEventListener('keyboardDidHide', this.keyBoardHide, false);
        // }
    };
    KeyboardoverlayDirective.prototype.keyboardShow = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var offsetTop, appEl, appElHeight, warpHeight, offset;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // this.cordova.plugins.Keyboard.isVisible
                        this.offsetTop = 0;
                        return [4 /*yield*/, this.getOffsetTop(event._elementRef.nativeElement.offsetParent)];
                    case 1:
                        offsetTop = _a.sent();
                        appEl = (document.getElementsByTagName('ION-APP')[0]);
                        appElHeight = appEl.clientHeight - 86;
                        warpHeight = this.keyboardoverlay._elementRef.nativeElement.children[1].firstElementChild.clientHeight;
                        !this.keyBoardShow && (window.removeEventListener('keyboardDidShow', this.keyBoardShow, false));
                        !this.keyBoardHide && (window.removeEventListener('keyboardDidHide', this.keyBoardHide, false));
                        offset = $('#' + event._labelId).offset().top;
                        // if()
                        console.log('height==' + this.height);
                        // console.log(event._labelId)
                        this.labelId = event._labelId;
                        if (this.height != 0) {
                            console.log(10000001);
                            if (offsetTop < appElHeight) {
                                if (appElHeight - offsetTop < this.height) {
                                    console.log(1);
                                    this.keyboardoverlay._elementRef.nativeElement.style.marginTop = '-' + (this.height - (appElHeight - offsetTop)) + 'px';
                                }
                                else {
                                    console.log(2);
                                    this.keyboardoverlay._elementRef.nativeElement.style.marginTop = '0px';
                                }
                            }
                            else {
                                if (warpHeight > offsetTop) {
                                    // this.keyboardoverlay._elementRef.nativeElement.style.marginTop=  '-' +  this.height +'px'
                                    if (warpHeight - offsetTop < this.height && offset < 0) {
                                        this.keyboardoverlay._elementRef.nativeElement.style.marginTop = '-' + (this.height - (warpHeight - offsetTop)) + 'px';
                                        console.log(3);
                                    }
                                    else {
                                        if (warpHeight > offsetTop + this.height && offset > 20) {
                                            console.log(36);
                                            this.keyboardoverlay._elementRef.nativeElement.style.marginTop = '-' + (this.height) + 'px';
                                        }
                                        else {
                                            // this.keyboardoverlay.scrollTo(0, offsetTop);
                                            if (150 > offset && offset > 0 || -100 < offset && offset < 0) {
                                                console.log(4);
                                                this.keyboardoverlay._elementRef.nativeElement.style.marginTop = '-' + (this.height - (warpHeight - offsetTop)) + 'px';
                                            }
                                        }
                                    }
                                }
                                else {
                                    console.log(222);
                                    this.keyboardoverlay._elementRef.nativeElement.style.marginTop = '-' + (this.height - (offsetTop - warpHeight) + 10) + 'px';
                                    setTimeout(function () {
                                        document.getElementById(event._labelId).scrollIntoView();
                                    }, 200);
                                }
                            }
                        }
                        this.keyBoardShow = function (e) {
                            console.log(1010);
                            console.log('offsetTop====' + offsetTop);
                            console.log('appElHeight===' + appElHeight);
                            console.log('warpHeight===' + warpHeight);
                            if (offsetTop < appElHeight) {
                                if (appElHeight - offsetTop < e.keyboardHeight) {
                                    console.log(1);
                                    this.keyboardoverlay._elementRef.nativeElement.style.marginTop = '-' + (e.keyboardHeight - (appElHeight - offsetTop)) + 'px';
                                }
                                else {
                                    console.log(2);
                                    this.keyboardoverlay._elementRef.nativeElement.style.marginTop = '0px';
                                }
                            }
                            else {
                                if (warpHeight > offsetTop) {
                                    // this.keyboardoverlay._elementRef.nativeElement.style.marginTop=  '-' +  e.keyboardHeight +'px'
                                    if (warpHeight - offsetTop < e.keyboardHeight && offset < 0) {
                                        this.keyboardoverlay._elementRef.nativeElement.style.marginTop = '-' + (e.keyboardHeight - (warpHeight - offsetTop)) + 'px';
                                        console.log(3);
                                    }
                                    else {
                                        if (warpHeight > offsetTop + e.keyboardHeight && offset > 20) {
                                            console.log(36);
                                            this.keyboardoverlay._elementRef.nativeElement.style.marginTop = '-' + (e.keyboardHeight) + 'px';
                                        }
                                        else {
                                            // this.keyboardoverlay.scrollTo(0, offsetTop);
                                            if (150 > offset && offset > 0 || -100 < offset && offset < 0) {
                                                console.log(4);
                                                this.keyboardoverlay._elementRef.nativeElement.style.marginTop = '-' + (e.keyboardHeight - (warpHeight - offsetTop)) + 'px';
                                            }
                                        }
                                    }
                                }
                                else {
                                    // console.log(222)
                                    this.keyboardoverlay._elementRef.nativeElement.style.marginTop = '-' + (e.keyboardHeight - (offsetTop - warpHeight) + 10) + 'px';
                                    setTimeout(function () {
                                        document.getElementById(event._labelId).scrollIntoView();
                                    }, 200);
                                }
                            }
                        }.bind(this);
                        this.keyBoardHide = function () {
                            this.keyboardoverlay._elementRef.nativeElement.style.marginTop = '0px';
                        }.bind(this);
                        window.addEventListener('keyboardDidShow', this.keyBoardShow, false);
                        window.addEventListener('keyboardDidHide', this.keyBoardHide, false);
                        return [2 /*return*/];
                }
            });
        });
    };
    KeyboardoverlayDirective.prototype.keyboardHide = function (event) {
        // console.log(21111)
        // this.keyboard.hide();
        // Keyboard.hide();
        // if (this.platform.is('android')) {
        window.removeEventListener('keyboardDidShow', this.keyBoardShow, false);
        window.removeEventListener('keyboardDidHide', this.keyBoardHide, false);
        // }
    };
    KeyboardoverlayDirective.prototype.getOffsetTop = function (el) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (el.nodeName !== 'ION-CONTENT') {
                    this.offsetTop += el.offsetTop;
                    return [2 /*return*/, this.getOffsetTop(el.offsetParent)];
                }
                else {
                    return [2 /*return*/, this.offsetTop];
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], KeyboardoverlayDirective.prototype, "keyboardoverlay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('ionFocus', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], KeyboardoverlayDirective.prototype, "keyboardShow", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('ionBlur', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], KeyboardoverlayDirective.prototype, "keyboardHide", null);
    KeyboardoverlayDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[keyboardoverlay]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */]])
    ], KeyboardoverlayDirective);
    return KeyboardoverlayDirective;
}());

//# sourceMappingURL=keyboardoverlay.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonFolderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the IonFolderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var IonFolderComponent = /** @class */ (function () {
    function IonFolderComponent() {
        console.log('Hello IonFolderComponent Component');
        this.text = 'Hello World';
    }
    IonFolderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ion-folder',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/components/ion-folder/ion-folder.html"*/'<!-- Generated template for the IonFolderComponent component -->\n<div  class="folder-container custom-class">\n  <div class="folder-header" (click)="collapse">\n    <div class="folder-header__title myclass">折叠展开</div>\n    <div class="folder-header__icon">\n      箭头\n    </div>\n  </div>\n  <div class="folder-content">\n    <div class="folder-content__inner">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/components/ion-folder/ion-folder.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], IonFolderComponent);
    return IonFolderComponent;
}());

//# sourceMappingURL=ion-folder.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmsummaryListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_http_services__ = __webpack_require__(37);
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
 * Generated class for the LmsummaryListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var LmsummaryListComponent = /** @class */ (function () {
    function LmsummaryListComponent(httpService) {
        this.httpService = httpService;
        this.list = []; // 列表
        this.projectid = '';
    }
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad LmtagsummaryPage');
    //   this.initData()
    // }
    LmsummaryListComponent.prototype.ngOnInit = function () {
        this.list = [];
        this.initproject();
    };
    LmsummaryListComponent.prototype.initproject = function () {
        var _this = this;
        this.httpService.get('/query/lmpj/lmpjProject/headlist?format=list', null, function (result) {
            _this.projectid = result[0]['projectid'];
            _this.initData();
        });
    };
    LmsummaryListComponent.prototype.initData = function () {
        var _this = this;
        var url = "/" + this.code + "/list?sort=summaryid&order=desc&_search=false&rows=15&page=1&sidx=&sord=asc&projectid=" + this.projectid;
        this.httpService.get(url, null, function (result) {
            if (result != null) {
                var rows = result.rows;
                _this.list = rows;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LmsummaryListComponent.prototype, "code", void 0);
    LmsummaryListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lmsummary-list',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/components/lmsummary-list/lmsummary-list.html"*/'<!-- Generated template for the LmsummaryListComponent component -->\n<div class="main">\n  <div class="itembox" *ngFor="let item of list">\n    <div class="boxtop">\n      <div>\n        <span class="arrow">{{ item.unittypename }}</span>\n        <span class="arrow">{{ item.overhaullevelname }}修</span>\n        <span>{{ item.specialtyname || \'暂无\' }}专业</span>\n      </div>\n      <span class="imred status">{{ item.wfstatusname }}</span>\n    </div>\n    <div class="boxbtm">\n      <div class="mw30">\n        <p class="imblue">{{ item.resdeptname }}</p>\n        <p>所属部门</p>\n      </div>\n      <div class="mw30">\n        <p>{{ item.editorname }}</p>\n        <p>填报人</p>\n      </div>\n      <div class="mw40">\n        <p>{{ item.edittime }}</p>\n        <p>填报时间</p>\n      </div>\n    </div>\n  </div>\n  <div class="tips" *ngIf="list.length == 0">暂无数据...</div>\n</div>'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/components/lmsummary-list/lmsummary-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_http_services__["a" /* HttpServicesProvider */]])
    ], LmsummaryListComponent);
    return LmsummaryListComponent;
}());

//# sourceMappingURL=lmsummary-list.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_library__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_phone_device__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_Utils__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_streaming_media__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_video_editor__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_storage__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import {  } from '../../../node_modules/ionic-angular';






// import {PickerColumn} from '@ionic/core';
// : dateTimePicker,
//   getMonthDay:
/**
 * Generated class for the MformComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MformComponent = /** @class */ (function () {
    function MformComponent(httpService, events, actionsheetCtrl, camera, photolibrary, network, alertCtroller, toastCtrl, videoEditor, phonedevice, filetransfer, file, streamMedia, pickercontroller, loadingCtrl, platform, storage, trusturl) {
        this.httpService = httpService;
        this.events = events;
        this.actionsheetCtrl = actionsheetCtrl;
        this.camera = camera;
        this.photolibrary = photolibrary;
        this.network = network;
        this.alertCtroller = alertCtroller;
        this.toastCtrl = toastCtrl;
        this.videoEditor = videoEditor;
        this.phonedevice = phonedevice;
        this.filetransfer = filetransfer;
        this.file = file;
        this.streamMedia = streamMedia;
        this.pickercontroller = pickercontroller;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.storage = storage;
        this.trusturl = trusturl;
        this.formdata = []; //表单数据
        this.formVal = {}; //表单数据值
        this.id = ''; //表单数据值
        this.backvalue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](); //子传父
        this.chooseFromChild = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectFrom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.ionChangedateFrom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectArray = {}; //select下拉框数组
        this.starArray = {}; //star星星数组
        this.imagesArray = {}; //上传图片数组
        this.pageControl = []; //页面资源配置
        this.dateArray = [];
        this.files = [];
        this.obj = {};
        this.videos = [];
        this.foucsarray = {};
        this.timerarray = {};
        this.radioArray = {};
        this.formobj = {};
        this.formobjval = {};
    }
    // public timeid: number;
    MformComponent.prototype.ngOnInit = function () {
        // console.log('--mform ngOnInit--', this.formdata);
        var _this = this;
        this.formobjval[this.code] = this.formVal;
        this.formobj[this.code] = this.formdata;
        var formdata = this.formdata;
        for (var i = 0; i < formdata.length; i++) {
            if (formdata[i].type == 'select') {
                if (formdata[i].dicttype == 'selectDiy') {
                    this.selectArray[formdata[i].index] = formdata[i].array;
                }
                else {
                    this.selectArray[formdata[i].index] = [];
                    this.getDict(formdata[i].index, formdata[i].dicttype); //select
                }
                // this.selectArray.push()
            }
            else if (formdata[i].type == 'radiogroup') {
                this.radioArray[formdata[i].index] = [];
                this.radiogetDict(formdata[i].index, formdata[i].dicttype); //radio
                // this.starscorelist(formdata[i].index,formdata[i].starlen);
            }
            else if (formdata[i].type == 'starscore') {
                this.starArray[formdata[i].index] = [];
                this.starscorelist(formdata[i].index, formdata[i].starlen);
            }
            else if (formdata[i].type == 'uploadify') {
                this.imagesArray[formdata[i].index] = [];
                this.initPicture(formdata[i].busstype, this.id, formdata[i].index);
            }
            else if (formdata[i].type == 'datetime') {
                this.foucsarray[formdata[i].index] = true;
                this.timerarray[formdata[i].index] = '';
                this.dateArray.push({ 'index': formdata[i].index, 'format': formdata[i].format });
            }
        }
        this.formdata = formdata;
        // 监听物理返回按钮事件
        this.platform.registerBackButtonAction(function () {
            // 关闭datetime-picker
            var pickerClearButton = document.getElementsByClassName("picker-button")[0];
            if (pickerClearButton != undefined) {
                var clickEvent = new MouseEvent("click", {
                    "view": window,
                    "bubbles": true,
                    "cancelable": false
                });
                pickerClearButton.dispatchEvent(clickEvent);
            }
            _this.navCtrl.pop();
        });
    };
    MformComponent.prototype.ngOnChanges = function () {
        var that = this;
        var formdata = this.formdata;
        for (var i = 0; i < formdata.length; i++) {
            if (formdata[i].type == 'select') {
                if (formdata[i].dicttype == 'selectDiy') {
                    this.selectArray[formdata[i].index] = formdata[i].array;
                }
                else {
                    this.selectArray[formdata[i].index] = [];
                    this.getDict(formdata[i].index, formdata[i].dicttype); //select
                }
                // this.selectArray.push()
            }
            else if (formdata[i].type == 'datetime') {
                if (this.formVal[formdata[i].index] == undefined || this.formVal[formdata[i].index] == "") {
                    this.formVal[formdata[i].index + formdata[i].index] = new Date(new Date(__WEBPACK_IMPORTED_MODULE_8__providers_Utils__["a" /* Utils */].dateFormat(new Date(), formdata[i].format)).getTime() + 8 * 60 * 60 * 1000).toISOString();
                }
            }
            if (formdata[i].starttoggle) {
                if (__WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + this.code + ' #folder_' + i).length == 1 && __WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + this.code + ' #startcollapse' + formdata[i].toggleindex).length == 0) {
                    __WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + this.code + ' #folder_' + i).before('<div  class="folder-container foldertoggle" id="startcollapse' + formdata[i].toggleindex + '" data-index="' + i + '" data-toggleindex="' + formdata[i].toggleindex + '"><div class="folder-header"><div class="folder-header__title myclass">' + formdata[i].plantitle + '</div><div class="folder-header__icon"><div class="collapse_hide_icon' + i + '" style="display: none;"><ion-icon name="ios-arrow-down-outline" role="img" class="icon icon-md ion-ios-arrow-down-outline" aria-label="arrow down-outline" ng-reflect-name="ios-arrow-down-outline"></ion-icon></div><div class="collapse_show_icon' + i + '"><ion-icon name="ios-arrow-up-outline" role="img" class="icon icon-md ion-ios-arrow-up-outline" aria-label="arrow up-outline" ng-reflect-name="ios-arrow-up-outline"></ion-icon></div></div> </div></div>');
                }
            }
            if (formdata[i].endtoggle) {
                if (__WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + this.code + ' #folder_' + i).length == 1 && __WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + this.code + ' #endcollapse' + formdata[i].index).length == 0) {
                    __WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + this.code + ' #folder_' + i).after('<div class="folder-content" id="endcollapse' + formdata[i].index + '"></div>');
                }
            }
        }
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + this.code + ' .foldertoggle').unbind().click(function () {
            var index = __WEBPACK_IMPORTED_MODULE_5_jquery__(this).attr('data-index');
            var toggleindex = __WEBPACK_IMPORTED_MODULE_5_jquery__(this).attr('data-toggleindex');
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + that.code + ' #startcollapse' + toggleindex).nextUntil('#form_' + that.code + ' #endcollapse' + toggleindex).toggle();
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + that.code + ' .collapse_show_icon' + index).toggle();
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + that.code + ' .collapse_hide_icon' + index).toggle();
        });
    };
    MformComponent.prototype.ngDoCheck = function () {
        var that = this;
        if (__WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + this.code).length == 1) {
            for (var i = 0; i < this.formdata.length; i++) {
                if (this.formdata[i].starttoggle) {
                    if (__WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + this.code + ' #folder_' + i).length == 1 && __WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + this.code + ' #startcollapse' + this.formdata[i].toggleindex).length == 0) {
                        __WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + this.code + ' #folder_' + i).before('<div  class="folder-container foldertoggle" id="startcollapse' + this.formdata[i].toggleindex + '" data-index="' + i + '" data-toggleindex="' + this.formdata[i].toggleindex + '"><div class="folder-header"><div class="folder-header__title myclass">' + this.formdata[i].plantitle + '</div><div class="folder-header__icon"><div class="collapse_hide_icon' + i + '" style="display: none;"><ion-icon name="ios-arrow-down-outline" role="img" class="icon icon-md ion-ios-arrow-down-outline" aria-label="arrow down-outline" ng-reflect-name="ios-arrow-down-outline"></ion-icon></div><div class="collapse_show_icon' + i + '"><ion-icon name="ios-arrow-up-outline" role="img" class="icon icon-md ion-ios-arrow-up-outline" aria-label="arrow up-outline" ng-reflect-name="ios-arrow-up-outline"></ion-icon></div></div> </div></div>');
                    }
                }
                if (this.formdata[i].endtoggle) {
                    if (__WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + this.code + ' #folder_' + i).length == 1 && __WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + this.code + ' #endcollapse' + this.formdata[i].index).length == 0) {
                        __WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + this.code + ' #folder_' + i).after('<div class="folder-content" id="endcollapse' + this.formdata[i].index + '"></div>');
                    }
                }
            }
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + this.code + ' .foldertoggle').unbind().click(function () {
                var index = __WEBPACK_IMPORTED_MODULE_5_jquery__(this).attr('data-index');
                var toggleindex = __WEBPACK_IMPORTED_MODULE_5_jquery__(this).attr('data-toggleindex');
                __WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + that.code + ' #startcollapse' + toggleindex).nextUntil('#form_' + that.code + ' #endcollapse' + toggleindex).toggle();
                __WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + that.code + ' .collapse_show_icon' + index).toggle();
                __WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + that.code + ' .collapse_hide_icon' + index).toggle();
            });
        }
    };
    MformComponent.prototype.ngAfterContentInit = function () {
        var that = this;
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + this.code + ' .foldertoggle').unbind().click(function () {
            var index = __WEBPACK_IMPORTED_MODULE_5_jquery__(this).attr('data-index');
            var toggleindex = __WEBPACK_IMPORTED_MODULE_5_jquery__(this).attr('data-toggleindex');
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + that.code + ' #startcollapse' + toggleindex).nextUntil('#form_' + that.code + ' #endcollapse' + toggleindex).toggle();
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + that.code + ' .collapse_show_icon' + index).toggle();
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#form_' + that.code + ' .collapse_hide_icon' + index).toggle();
        });
        // 圆角
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_5_jquery__('.folder-container.foldertoggle').next().addClass('bTopradius');
            __WEBPACK_IMPORTED_MODULE_5_jquery__('.folder-content').prev('.folder-content__inner').addClass('bBtmradius');
        }, 100);
    };
    MformComponent.prototype.ngAfterViewChecked = function () {
    };
    MformComponent.prototype.ngAfterContentChecked = function () {
        // this.formobjval[this.code]=this.formVal;
        // this.formobj[this.code]=this.formdata;
    };
    // ngAfterContentInit
    MformComponent.prototype.ngAfterViewInit = function () {
        this.getLoc();
        // var formdata = this.formdata;
        // for(var i = 0;i<formdata.length;i++){
        //   if(formdata[i].starttoggle){
        //     if($('#folder_'+i).length == 1 && $('#startcollapse'+formdata[i].toggleindex).length == 0){
        //      $('#folder_'+i).before('<div  class="folder-container foldertoggle" id="startcollapse'+formdata[i].toggleindex+'" data-index="'+i+'" data-toggleindex="'+formdata[i].toggleindex+'"><div class="folder-header"><div class="folder-header__title myclass">'+formdata[i].plantitle+'</div><div class="folder-header__icon"><div class="collapse_hide_icon'+i+'" style="display: none;"><ion-icon name="ios-arrow-down-outline" role="img" class="icon icon-md ion-ios-arrow-down-outline" aria-label="arrow down-outline" ng-reflect-name="ios-arrow-down-outline"></ion-icon></div><div class="collapse_show_icon'+i+'"><ion-icon name="ios-arrow-up-outline" role="img" class="icon icon-md ion-ios-arrow-up-outline" aria-label="arrow up-outline" ng-reflect-name="ios-arrow-up-outline"></ion-icon></div></div> </div></div>')
        //     }
        //   }
        //   if(formdata[i].endtoggle){
        //     if($('#folder_'+i).length == 1 && $('#endcollapse'+formdata[i].index).length == 0){
        //       $('#folder_'+i).after('<div class="folder-content" id="endcollapse'+formdata[i].index+'"></div>')
        //     }
        //   }
        // }
        // $('.foldertoggle').unbind().click(function(){
        //   let index = $(this).attr('data-index');
        //   let toggleindex = $(this).attr('data-toggleindex');
        //   $('#startcollapse'+toggleindex).nextUntil('#endcollapse'+toggleindex).toggle();
        //   $('.collapse_show_icon'+index).toggle();
        //  $('.collapse_hide_icon'+index).toggle();
        // })
    };
    MformComponent.prototype.switchType = function (e, item) {
        var items = {
            index: item.index,
            dicttype: item.dicttype,
            value: e
        };
        this.selectFrom.emit(items);
    };
    // setTimeout("getLoc",5000);
    MformComponent.prototype.getLoc = function () {
        var that = this;
        if (this.dateArray != undefined) {
            for (var i = 0; i < this.dateArray.length; i++) {
                var datetimeindex = this.dateArray[i].index;
                var datetimeformat = this.dateArray[i].format;
                if (this.formVal[datetimeindex] == undefined || this.formVal[datetimeindex] == '') {
                    that.getint(datetimeindex);
                    //   //
                }
                else {
                    clearInterval(this.timerarray[datetimeindex]);
                }
            }
        }
    };
    MformComponent.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy', document.getElementsByClassName("picker-button")[0], this.timer);
        if (this.dateArray != undefined) {
            for (var i = 0; i < this.dateArray.length; i++) {
                var datetimeindex = this.dateArray[i].index;
                clearInterval(this.timerarray[datetimeindex]);
            }
        }
    };
    MformComponent.prototype.getint = function (index) {
        var that = this;
        this.timerarray[index] = setInterval(function () {
            that.formVal[index + index] = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toISOString();
        }, 2000);
    };
    MformComponent.prototype.changeDate = function (e, index) {
        var item = {
            val: e,
            ind: index,
        };
        this.ionChangedateFrom.emit(item);
    };
    MformComponent.prototype.ionCanceldate = function (e, index, i) {
        this.getint(index);
        this.foucsarray[index] = true;
    };
    MformComponent.prototype.ionFocusdate = function (e, index, i) {
        this.foucsarray[index] = false;
        clearInterval(this.timerarray[index]);
    };
    MformComponent.prototype.ionChangedate = function (e, index, format, i) {
        var datetime = e.year + '-' + e.month + '-' + e.day + ' ' + e.hour + ':' + e.minute + ':' + e.second;
        if (clearInterval(this.timerarray[index]) == undefined && !this.foucsarray[index]) {
            this.formVal[index] = new Date(new Date(datetime).getTime() + 8 * 60 * 60 * 1000).toISOString();
        }
    };
    MformComponent.prototype.starscorelist = function (index, starlen) {
        var list = [];
        for (var i = 0; i < 5; i++) {
            list.push({
                index: i,
                isshow: false,
                isleft: starlen == 2 ? true : false,
            });
        }
        this.starArray[index] = list;
    };
    MformComponent.prototype.deluser = function (item, itembox, index, arrayindex) {
        var _this = this;
        // var data = [
        //   {
        //     "name" : "ids",
        //     "value" : id
        //   }];
        if (item.adduser) {
            for (var i = 0; i < itembox.length; i++) {
                if (item.id == itembox[i].id) {
                    itembox.splice(i, 1);
                }
            }
            if (arrayindex = undefined && this.formVal[arrayindex].length > 0) {
                for (var i = 0; i < this.formVal[arrayindex].length; i++) {
                    if (item.id == this.formVal[arrayindex][i].id) {
                        this.formVal[arrayindex].splice(i, 1);
                    }
                }
            }
            this.toastCtrl.create({
                message: '删除成功',
                duration: 1500,
                position: 'top'
            }).present();
        }
        else {
            this.httpService.removeTableIds('ttWorkticketWorkmembers', { 'ids': item.id }, function (res) {
                if (res.code == 0) {
                    // message
                    for (var i = 0; i < itembox.length; i++) {
                        if (item.id == itembox[i].id) {
                            itembox.splice(i, 1);
                        }
                    }
                    if (arrayindex = undefined && arrayindex.length > 0) {
                        for (var i = 0; i < arrayindex.length; i++) {
                            if (item.id == arrayindex[i].id) {
                                arrayindex.splice(i, 1);
                            }
                        }
                    }
                    _this.toastCtrl.create({
                        message: '删除成功',
                        duration: 1500,
                        position: 'top'
                    }).present();
                }
                // console.log(222)
            }, this.httpService.CONTENTTYPE_FORMURLENCODE);
        }
        this.formVal[index] = itembox.length;
        // $.ajax({
        //   url : "/tcny/ttWorkticketWorkmembers/remove",
        //   dataType :"json",
        //   type : "POST",
        //   data : data,
        //   success : function (result) {
        //   },
        //   error : function (JQxhr) {
        //     alert("error");
        //   }
        // });
    };
    MformComponent.prototype.deldutyuser = function (item, itembox, index, arrayindex) {
        var _this = this;
        // var data = [
        //   {
        //     "name" : "ids",
        //     "value" : id
        //   }];
        if (item.adduser) {
            for (var i = 0; i < itembox.length; i++) {
                if (item.id == itembox[i].id) {
                    itembox.splice(i, 1);
                }
            }
            if (arrayindex = undefined && this.formVal[arrayindex].length > 0) {
                for (var i = 0; i < this.formVal[arrayindex].length; i++) {
                    if (item.id == this.formVal[arrayindex][i].id) {
                        this.formVal[arrayindex].splice(i, 1);
                    }
                }
            }
            this.toastCtrl.create({
                message: '删除成功',
                duration: 1500,
                position: 'top'
            }).present();
        }
        else {
            this.httpService.removeTableIds('dutyRunLogPerson', { 'ids': item.id }, function (res) {
                if (res.code == 0) {
                    // message
                    for (var i = 0; i < itembox.length; i++) {
                        if (item.id == itembox[i].id) {
                            itembox.splice(i, 1);
                        }
                    }
                    if (arrayindex = undefined && arrayindex.length > 0) {
                        for (var i = 0; i < arrayindex.length; i++) {
                            if (item.id == arrayindex[i].id) {
                                arrayindex.splice(i, 1);
                            }
                        }
                    }
                    _this.toastCtrl.create({
                        message: '删除成功',
                        duration: 1500,
                        position: 'top'
                    }).present();
                }
                // console.log(222)
            }, this.httpService.CONTENTTYPE_FORMURLENCODE);
        }
        this.formVal[index] = itembox.length;
        // $.ajax({
        //   url : "/tcny/ttWorkticketWorkmembers/remove",
        //   dataType :"json",
        //   type : "POST",
        //   data : data,
        //   success : function (result) {
        //   },
        //   error : function (JQxhr) {
        //     alert("error");
        //   }
        // });
    };
    MformComponent.prototype.delsmuser = function (item, itembox, index, arrayindex) {
        var _this = this;
        // var data = [
        //   {
        //     "name" : "ids",
        //     "value" : id
        //   }];
        if (item.adduser) {
            for (var i = 0; i < itembox.length; i++) {
                if (item.id == itembox[i].id) {
                    itembox.splice(i, 1);
                }
            }
            if (arrayindex = undefined && this.formVal[arrayindex].length > 0) {
                for (var i = 0; i < this.formVal[arrayindex].length; i++) {
                    if (item.id == this.formVal[arrayindex][i].id) {
                        this.formVal[arrayindex].splice(i, 1);
                    }
                }
            }
            this.toastCtrl.create({
                message: '删除成功',
                duration: 1500,
                position: 'top'
            }).present();
        }
        else {
            this.httpService.removeTableIds('smActivityWorkmembers', { 'ids': item.id }, function (res) {
                if (res.code == 0) {
                    // message
                    for (var i = 0; i < itembox.length; i++) {
                        if (item.id == itembox[i].id) {
                            itembox.splice(i, 1);
                        }
                    }
                    if (arrayindex = undefined && arrayindex.length > 0) {
                        for (var i = 0; i < arrayindex.length; i++) {
                            if (item.id == arrayindex[i].id) {
                                arrayindex.splice(i, 1);
                            }
                        }
                    }
                    _this.toastCtrl.create({
                        message: '删除成功',
                        duration: 1500,
                        position: 'top'
                    }).present();
                }
                // console.log(222)
            }, this.httpService.CONTENTTYPE_FORMURLENCODE);
        }
        this.formVal[index] = itembox.length;
        // $.ajax({
        //   url : "/tcny/ttWorkticketWorkmembers/remove",
        //   dataType :"json",
        //   type : "POST",
        //   data : data,
        //   success : function (result) {
        //   },
        //   error : function (JQxhr) {
        //     alert("error");
        //   }
        // });
    };
    MformComponent.prototype.radiorightclick = function (index) {
        if (this.formVal[index] === '' || this.formVal[index] === null) {
            this.formVal[index] = 1;
        }
        if (this.formVal[index] === 0) {
            this.formVal[index] = 1;
        }
        else if (this.formVal[index] === 1) {
            this.formVal[index] = 0;
        }
        else if (this.formVal[index] === '0') {
            this.formVal[index] = '1';
        }
        else if (this.formVal[index] === '1') {
            this.formVal[index] = '0';
        }
        console.log(this.formVal[index]);
    };
    MformComponent.prototype.changeToggle = function (value, index, key) {
        if (key) {
            if (value) {
                this.formVal[index][key] = 1;
            }
            else {
                this.formVal[index][key] = 0;
            }
        }
        else {
            if (value) {
                this.formVal[index] = 1;
            }
            else {
                this.formVal[index] = 0;
            }
            this.chooseFromChild && this.chooseFromChild.emit({ value: value, index: index });
        }
        // console.log(this.formVal[index]);
    };
    MformComponent.prototype.handleLabelLink = function (pagecode, pageparam) {
        if (pageparam) {
            this.navCtrl.push(pagecode, (_a = {},
                _a[pageparam] = this.formVal[pageparam],
                _a));
            return false;
        }
        this.navCtrl.push(pagecode, {
            id: this.id
        });
        var _a;
    };
    MformComponent.prototype.checkBox = function (e) {
    };
    MformComponent.prototype.getDict = function (index, dicttype) {
        var that = this;
        that.httpService.getDict(dicttype, function (data) {
            if (data !== "") {
                that.selectArray[index] = data;
            }
        });
    };
    MformComponent.prototype.radiogetDict = function (index, dicttype) {
        var that = this;
        that.httpService.getDict(dicttype, function (data) {
            if (data !== "") {
                that.radioArray[index] = data;
            }
        });
    };
    MformComponent.prototype.collapseClick = function (index) {
        // $('#collapse'+index).toggle();
        __WEBPACK_IMPORTED_MODULE_5_jquery__('.collapse_show_icon' + index).toggle();
        __WEBPACK_IMPORTED_MODULE_5_jquery__('.collapse_hide_icon' + index).toggle();
    };
    // 选择设备
    MformComponent.prototype.chooseitem = function (item) {
        this.chooseFromChild.emit(item);
    };
    //星星评分
    MformComponent.prototype.chooseOne = function (item, event, index, starlen) {
        for (var i = 0; i < 5; i++) {
            this.starArray[index][i].isshow = false;
            this.starArray[index][i].isleft = false;
        }
        for (var i = 0; i <= item.index; i++) {
            this.starArray[index][i].isshow = true;
        }
        // let positionX=event.clientX;
        // let elementX=document.getElementsByClassName('rating')[item.index].getBoundingClientRect().left;
        if (starlen != 2) {
            item.isleft = false;
            this.backvalue.emit(item.index + 1);
        }
        else {
            item.isleft = true;
            this.backvalue.emit(item.index + 0.5);
        }
    };
    /**
    * 选择组织/部门
    */
    MformComponent.prototype.choosedepartment = function (id, name) {
        var _this = this;
        this.navCtrl.push('DeptdialogPage', {
            typeid: id,
            id: this.formVal[id],
            typename: name
        });
        this.events.subscribe('dept:deptinfo', function (data, time) {
            _this.formVal[data.typename] = data.name;
            _this.formVal[data.typeid] = data.id;
            _this.events.unsubscribe('dept:deptinfo');
        });
    };
    /**
     * 选择人员
     */
    MformComponent.prototype.chooseperson = function (id, name, multiple, linkfield) {
        var _this = this;
        if (!multiple) {
            multiple = 'single'; //单选
        }
        else {
            multiple = 'multiple';
        }
        this.navCtrl.push('UserdialogPage', {
            typeid: id,
            type: multiple,
            typename: name
        });
        this.events.subscribe('user:userinfo', function (data, time) {
            // console.log(`this.events.subscribe  data => `, data)
            _this.formVal[data.typename] = data.name;
            _this.formVal[data.typeid] = data.id;
            // linkfield 联动字段，用于选择人员后需要同步更新值的字段，例如 phone...
            if (linkfield && data[linkfield]) {
                console.log('联动字段:', linkfield, data[linkfield]);
                _this.formVal[linkfield] = data[linkfield];
            }
            _this.events.unsubscribe('user:userinfo');
        });
    };
    /**
     * 选择设备
     */
    MformComponent.prototype.chooseAsset = function (id, name) {
        var _this = this;
        this.navCtrl.push('LeassetdialogPage');
        this.events.subscribe('leasset', function (item) {
            _this.formVal[name] = item.description;
            _this.formVal[id] = item.id;
            _this.events.unsubscribe('leasset');
        });
        // this.navCtrl.push('UserdialogPage',{
        //   typeid:id,
        //   typename:name
        // });
        // this.events.subscribe('user:userinfo', (data, time) => {
        //   this.formVal[data.typename] =data.name;
        //   this.formVal[data.typeid] = data.id;
        // })
    };
    /**
     * 选择签名
     */
    MformComponent.prototype.chooseSign = function (index, item) {
        var _this = this;
        this.navCtrl.push('SignaturepadPage', {
            typeindex: index,
        });
        this.events.subscribe('signatureImage:signatureImageinfo', function (data, time) {
            _this.formVal[data.typeind] = data.img;
            if (item.indextime != undefined) {
                _this.formVal[item.indextime] = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toISOString();
            }
            _this.events.unsubscribe('signatureImage:signatureImageinfo');
        });
    };
    MformComponent.prototype.chooseSignMultiple = function (index) {
        var _this = this;
        this.navCtrl.push('SignaturepadPage', {
            typeindex: index,
        });
        this.events.subscribe('signatureImage:signatureImageinfo', function (data, time) {
            if (_this.formVal[data.typeind] != "" && _this.formVal[data.typeind] != undefined) {
                _this.formVal[data.typeind] = _this.formVal[data.typeind] + '|' + data.img;
            }
            else {
                _this.formVal[data.typeind] = _this.formVal[data.typeind] + data.img;
            }
            var str8 = '';
            var strArr = _this.formVal[data.typeind].split("|");
            // console.log(strArr.length)
            if (strArr.length > 1) {
                for (var j = 0, len = strArr.length; j < len; j++) {
                    str8 = str8 + '<img style="width:100px;height:30px;padding:0 2px;"  id="imgworkmembersbase" src="' + strArr[j] + '"/>';
                }
                ;
            }
            else {
                str8 = '<img style="width:100px;height:30px;"  id="imgworkmembersbase"  src="' + _this.formVal[data.typeind] + '"/>';
            }
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#row_' + data.typeind).html(str8);
            _this.events.unsubscribe('signatureImage:signatureImageinfo');
        });
    };
    // 选择项目
    MformComponent.prototype.chooseItemname = function (id, name) {
        var _this = this;
        this.navCtrl.push('ProjectdialogPage', {});
        this.events.subscribe('project', function (item) {
            _this.formVal[name] = item['projectname'];
            _this.formVal[id] = item['prjid'];
            _this.events.unsubscribe('project');
            _this.chooseFromChild.emit(item);
        });
    };
    MformComponent.prototype.photo = function (busstype, idx, video) {
        var _this = this;
        var isBrowser = this.storage.get(__WEBPACK_IMPORTED_MODULE_14__providers_storage__["a" /* StorageProvider */].IS_BROWSER);
        if (isBrowser) {
            this.browserPhoto(busstype, idx, video);
            return false;
        }
        var actionsheet = this.actionsheetCtrl.create({
            // cssClass:'headChoice',
            buttons: [
                {
                    text: '拍照',
                    role: 'destructive',
                    cssClass: 'normal',
                    handler: function () {
                        _this.doCamera(_this.camera.PictureSourceType.CAMERA, busstype, idx, video);
                    }
                }, {
                    text: '从手机相册中选择',
                    cssClass: 'normal',
                    handler: function () {
                        _this.doCamera(_this.camera.PictureSourceType.PHOTOLIBRARY, busstype, idx, video);
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    cssClass: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionsheet.present();
    };
    MformComponent.prototype.doCamera = function (sourceType, busstype, idx, video) {
        var _this = this;
        var mediatype = 0;
        if (video) {
            mediatype = 1;
        }
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: sourceType,
            mediaType: mediatype,
            correctOrientation: true,
            // mediaType: this.camera.MediaType.PICTURE,
            //allowEdit:true,
            targetWidth: 1024,
            targetHeight: 1024
        };
        // let that = this;
        var obj = {};
        this.camera.getPicture(options).then(function (imageData) {
            obj['bussid'] = _this.id;
            obj['bussty'] = busstype;
            obj['url'] = imageData;
            //是否上传标记
            obj['flag'] = false;
            obj['isWifiSubmit'] = false;
            console.log(JSON.stringify(imageData));
            if (video) {
                _this.photolibrary.saveImage(imageData, '天开云');
                _this.httpService.uploadvideo(busstype, obj['bussid'], imageData, function (result) {
                    _this.initPicture(busstype, obj['bussid'], idx);
                });
            }
            else {
                _this.httpService.uploadify(busstype, obj['bussid'], imageData, function (result) {
                    _this.initPicture(busstype, obj['bussid'], idx);
                });
            }
            _this.files.push(obj);
            // $('.addImage').css('margin-left','10px');
        });
    };
    MformComponent.prototype.showVideo = function (item) {
        var _this = this;
        var loading;
        var now = 0;
        var datafilesUrl = item['url'];
        var fileTransfer = this.filetransfer.create();
        fileTransfer.onProgress(function (progressEvent) {
            if (progressEvent.lengthComputable) {
                now = progressEvent.loaded / progressEvent.total * 100;
            }
        });
        loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: '视频加载中'
        });
        loading.present();
        fileTransfer.download(datafilesUrl, this.file.dataDirectory + '.mp4').then(function (entry) {
            // this.toastCtrl.create({
            //   message: '视频加载成功',
            //   duration: 1000
            // }).present();
            loading.dismiss();
            item['fileurl'] = _this.file.dataDirectory + '.mp4';
            // let options: CreateThumbnailOptions = {
            //   fileUri: this.obj['fileurl'],
            //   outputFileName: new Date().getTime().toString() + '1',
            //   atTime: 0
            // }
            // this.videoEditor.createThumbnail(options).then((thumbnailurl) => {
            //   item['image'] = thumbnailurl;
            // })
            _this.streamMedia.playVideo(item['fileurl']);
        }, function (err) {
        });
        console.log(JSON.stringify(item));
    };
    MformComponent.prototype.initPicture = function (busstype, bussid, idx) {
        var _this = this;
        this.imagesArray[idx] = [];
        this.httpService.getFiles(busstype, bussid, function (result) {
            if (result != null && result != undefined) {
                var datafiles = result.data;
                var index = 0;
                // this.files = [];
                if (datafiles != null && datafiles.length > 0) {
                    for (var i = 0; i < datafiles.length; i++) {
                        var filename = datafiles[i]['name'];
                        if (__WEBPACK_IMPORTED_MODULE_8__providers_Utils__["a" /* Utils */].endWith(filename, ".bmp") || __WEBPACK_IMPORTED_MODULE_8__providers_Utils__["a" /* Utils */].endWith(filename, ".png") || __WEBPACK_IMPORTED_MODULE_8__providers_Utils__["a" /* Utils */].endWith(filename, ".gif") || __WEBPACK_IMPORTED_MODULE_8__providers_Utils__["a" /* Utils */].endWith(filename, ".jpg") || __WEBPACK_IMPORTED_MODULE_8__providers_Utils__["a" /* Utils */].endWith(filename, ".jpeg")) {
                            datafiles[i]['img'] = true;
                            _this.imagesArray[idx].push(datafiles[i]);
                            __WEBPACK_IMPORTED_MODULE_5_jquery__('#btn_' + idx).css('width', '75px');
                            __WEBPACK_IMPORTED_MODULE_5_jquery__('#btn_' + idx).css('margin-left', '0px');
                        }
                        else if (__WEBPACK_IMPORTED_MODULE_8__providers_Utils__["a" /* Utils */].endWith(filename, ".mp4")) {
                            // let loading =  null;
                            // if(loading != null){
                            //   loading = this.loadingCtrl.create({
                            //     spinner: 'dots',
                            //     // LoadingOptions:'dots'
                            //   content: '视频加载中'
                            //   });loading.present();
                            // }
                            var now = 0;
                            datafiles[i]['video'] = true;
                            // let datafilesUrl = datafiles[i]['url'];
                            // let fileTransfer: FileTransferObject = this.filetransfer.create();
                            //       fileTransfer.onProgress((progressEvent) => {
                            //         if (progressEvent.lengthComputable) {
                            //           now = progressEvent.loaded / progressEvent.total * 100;
                            //         }
                            //       })
                            //       fileTransfer.download(datafilesUrl, this.file.dataDirectory + '.mp4').then((entry) => {
                            //         // this.toastCtrl.create({
                            //         //   message: '视频加载成功',
                            //         //   duration: 1000
                            //         // }).present();
                            //         if(loading != null){
                            //         loading.dismiss();
                            //         }
                            //         this.obj['url'] = this.file.dataDirectory + '.mp4';
                            //         this.obj['video'] = true;
                            //         let options: CreateThumbnailOptions = {
                            //           fileUri: this.obj['url'],
                            //           outputFileName: new Date().getTime().toString() + '1',
                            //           atTime: 0
                            //         }
                            //         this.videoEditor.createThumbnail(options).then((thumbnailurl) => {
                            //           this.obj['image'] = thumbnailurl;
                            //           console.log(JSON.stringify(thumbnailurl))
                            //         })
                            //       }, (err) => {
                            //       })
                            _this.imagesArray[idx].push(datafiles[i]);
                            // this.alertCtroller.create({
                            //   title: '发现视频是否加载',
                            //   cssClass: 'AlertList',
                            //   buttons: [{
                            //     text: '确定加载',
                            //     handler: () => {
                            //       // this.obj = {};
                            //       // this.videos.push();
                            //     }
                            //   }, {
                            //     text: '暂不加载',
                            //     handler: () => {
                            //     }
                            //   }]
                            // }).present();
                        }
                    }
                }
            }
        });
    };
    MformComponent.prototype.deleteImage = function (item, index) {
        var _this = this;
        this.alertCtroller.create({
            title: '是否确定删除当前图片/视频',
            cssClass: 'AlertList',
            buttons: [{
                    text: '确定',
                    handler: function () {
                        // if(item['flag']==false){
                        //   for(let i=0;i<this.files.length;i++){
                        //     if(item['id']==this.files[i]['url']){
                        //       this.files.splice(i,1);
                        //     }
                        //   }
                        // }else{
                        _this.httpService.deleteImage({ 'ids': item['id'] }, function (res) {
                            if (res.code == 0) {
                                for (var i = 0; i < _this.imagesArray[index].length; i++) {
                                    if (item['url'] == _this.imagesArray[index][i]['url']) {
                                        _this.imagesArray[index].splice(i, 1);
                                    }
                                }
                                _this.toastCtrl.create({
                                    message: '删除成功',
                                    duration: 1500,
                                    position: 'top'
                                }).present();
                            }
                        }, _this.httpService.CONTENTTYPE_FORMURLENCODE);
                        // }
                    }
                }, {
                    text: '取消',
                    handler: function () {
                    }
                }]
        }).present();
    };
    MformComponent.prototype.browserPhoto = function (busstype, idx, video) {
        var _this = this;
        // 创建文件标签并插入body
        var fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        if (video) {
            fileInput.accept = 'video/*';
        }
        fileInput.style.display = 'none';
        document.body.appendChild(fileInput);
        // 监听文件选择
        fileInput.addEventListener('change', function (event) {
            var file = event.target['files'][0];
            console.log("fileInput.addEventListener  file => ", file);
            var url = _this.trusturl.bypassSecurityTrustResourceUrl(URL.createObjectURL(file));
            var obj = {};
            obj['bussid'] = _this.id;
            obj['bussty'] = busstype;
            obj['url'] = url;
            //是否上传标记
            obj['flag'] = false;
            obj['isWifiSubmit'] = false;
            console.log(JSON.stringify(url));
            if (video) {
                // this.httpService.uploadvideo(busstype, obj['bussid'], imageData, (result) => {
                //   this.initPicture(busstype, obj['bussid'], idx);
                // });
            }
            else {
                var formdata = new FormData();
                formdata.append('file', file);
                formdata.append('busstype', busstype);
                formdata.append('folderid', '');
                formdata.append('bussid', _this.id);
                _this.httpService.postFormData('/uploadify/upload', formdata, function (res) {
                    console.log(res);
                    if (res.error == 0) {
                        _this.toastCtrl.create({
                            position: 'top',
                            message: '上传成功',
                            duration: 1200
                        }).present();
                        _this.initPicture(busstype, obj['bussid'], idx);
                    }
                    document.body.removeChild(fileInput);
                });
            }
            _this.files.push(obj);
        });
        fileInput.click();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* Content */])
    ], MformComponent.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* NavController */])
    ], MformComponent.prototype, "navCtrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MformComponent.prototype, "code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MformComponent.prototype, "formdata", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MformComponent.prototype, "formVal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MformComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MformComponent.prototype, "backvalue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MformComponent.prototype, "chooseFromChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MformComponent.prototype, "selectFrom", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MformComponent.prototype, "ionChangedateFrom", void 0);
    MformComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mform',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/components/mform/mform.html"*/'<!-- Generated template for the MformComponent component -->\n<div class="wrapper" [id]="\'form_\'+code" #content>\n  <div [class]="item.hidden ? \'folder-content__inner hide\':item.hide ? \'folder-content__inner hide\' : \'folder-content__inner \'" [id]="\'folder_\'+i"  *ngFor="let item of formdata;let i = index;">\n    <div class="textarea_box" *ngIf="item.type == \'textarea\' ">\n      <span class="title">{{item?.name}}<span *ngIf="item?.required" class="required">*</span></span>\n      <div class="textarea_border" [ngClass]="{\'textarea_disable_border\': item.disabled,\'autoheight\': item.autoheight}">\n        <textarea *ngIf="!item.disabled" [placeholder]="item.placeholder"   [disabled] = "item.disabled"  [name]="item.index" [(ngModel)]="formVal[item.index]"  [id]="\'_\'+item.index"></textarea>\n        <div *ngIf="item.disabled" style="white-space: pre-wrap;">{{formVal[item.index]}}</div>\n      </div>\n    </div>\n    <div class="itembox" *ngIf="item.type == \'deftextarea\' " style="margin-bottom: 10px;">\n      <textarea [placeholder]="item.placeholder"  [disabled] = "item.disabled"  [name]="item.index" [id]="\'_\'+item.index" class="deftextarea" [(ngModel)]="formVal[item.index]" ></textarea>\n    </div>\n    <div class="itembox" *ngIf="item.type == \'select\' ">\n      <ion-item >\n        <ion-label>{{item?.name}}<span *ngIf="item?.required" class="required">*</span></ion-label>\n        <ion-select [multiple]="item.multiple ? true:false" interface=\'action-sheet\' cancelText="取消" (ngModelChange)="switchType($event,item)" okText="确定"\n          placeholder="请选择" [name]="item.index" [disabled] = "item.disabled" [(ngModel)]="formVal[item.index]" >\n         <ion-option *ngIf="!item.required &&  !item.multiple" >{{item.placeholder}}</ion-option>\n          <div *ngFor="let typeData of selectArray[item.index]">\n            <ion-option  value="{{typeData?.value}}">\n              {{typeData?.name}}</ion-option>\n          </div>\n        </ion-select>\n      </ion-item>\n    </div>\n    <div class="itembox " *ngIf="item.type == \'datetime\' ">\n      <div [class]="formVal[item.index] != undefined && formVal[item.index] != \'\' ? \'datebox\':\'\'" >\n        <ion-item>\n          <ion-label>{{item?.name}}<span *ngIf="item?.required" class="required">*</span></ion-label>\n          <ion-datetime *ngIf="formVal[item.index] == undefined || formVal[item.index] == \'\' || formVal[item.index] == null" [displayFormat]="item.format"\n          [name]="item.index"  [(ngModel)]="formVal[item.index +item.index]" [disabled] = "item.disabled" cancelText="取消"\n            doneText="确认" (ionFocus)="ionFocusdate($event,item.index,i)" (ionCancel)= "ionCanceldate($event,item.index,format,i)" (ngModelChange)="changeDate($event,item.index)" (ionChange)="ionChangedate($event,item.index,format,i)" style="opacity: 0;"></ion-datetime>\n          <ion-datetime *ngIf="formVal[item.index] != undefined && formVal[item.index] != \'\' && formVal[item.index] != null" [displayFormat]="item.format"\n          [name]="item.index" [placeholder]="item?.placeholder"  [(ngModel)]="formVal[item.index]" [disabled] = "item.disabled" cancelText="取消"\n            doneText="确认" ></ion-datetime>\n\n          <ion-input type="text" *ngIf="formVal[item.index] == undefined || formVal[item.index] == \'\'"  [placeholder]="item?.placeholder"   [readonly]="true" style="position: absolute;display: inline;display: inline; width: auto;right: 0;top: 0;z-index: -1;"></ion-input>\n\n        </ion-item>\n      </div>\n    </div>\n    <div class="starbox"  *ngIf="item.type == \'starscore\' ">\n      <div class="pull-left title">{{item?.name}}<span *ngIf="item?.required" class="required">*</span></div>\n      <div class="pull-left" >\n        <div style="position: absolute;top: 50%;margin-top: -12px;"   *ngIf="!item.disabled" >\n          <div class="rating" *ngFor="let subitem of starArray[item.index]" (click)="chooseOne(subitem,$event,item.index,item.starlen)">\n            <ion-icon name="ios-star-outline" class="backStar" *ngIf="subitem[\'isshow\']==false"></ion-icon>\n            <ion-icon name="ios-star" class="actuallStar" *ngIf="subitem[\'isshow\']==true && subitem[\'isleft\']== false"></ion-icon>\n            <ion-icon name="ios-star-half-outline" class="backStar" *ngIf="subitem[\'isleft\']==true && subitem[\'isshow\']==true"></ion-icon>\n          </div>\n        </div>\n        <div style="position: absolute;top: 50%;margin-top: -12px;"   *ngIf="item.disabled" >\n          <div class="rating" *ngFor="let subitem of starArray[item.index]">\n            <ion-icon name="ios-star-outline" class="backStar" *ngIf="subitem[\'isshow\']==false"></ion-icon>\n            <ion-icon name="ios-star" class="actuallStar" *ngIf="subitem[\'isshow\']==true && subitem[\'isleft\']== false"></ion-icon>\n            <ion-icon name="ios-star-half-outline" class="backStar" *ngIf="subitem[\'isleft\']==true && subitem[\'isshow\']==true"></ion-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="itembox" *ngIf="item.type == \'selectUser\' ">\n      <ion-item>\n        <ion-label>{{item?.name}}<span *ngIf="item?.required" class="required">*</span></ion-label>\n        <ion-input type="text" [placeholder]="item?.placeholder"   [readonly]="true" [id]="\'_\'+item.index" *ngIf="!item.disabled" [name]="item.index"  [(ngModel)]="formVal[item.index]" (ionFocus)="chooseperson(item.indexId,item.index,item.multiple,item.linkfield)" style="padding-right: 11px;"></ion-input>\n        <ion-input type="text"  [class]="item.disabled ? \'input_disable\' : \'\' " [readonly]="true" [id]="\'_\'+item.index" *ngIf="item.disabled" [name]="item.index"  [(ngModel)]="formVal[item.index]"></ion-input>\n      </ion-item>\n      <ion-icon *ngIf="!item.disabled" class="innericon" name="ios-arrow-forward-outline"></ion-icon>\n\n    </div>\n    <div class="itembox" *ngIf="item.type == \'selectDept\' ">\n      <ion-item>\n        <ion-label>{{item?.name}}<span *ngIf="item?.required" class="required">*</span></ion-label>\n        <ion-input type="text" [placeholder]="item?.placeholder"   [readonly]="true" [id]="\'_\'+item.index"  *ngIf="!item.disabled" [name]="item.index"  [(ngModel)]="formVal[item.index]" (ionFocus)="choosedepartment(item.indexId,item.index)" style="padding-right: 11px;"></ion-input>\n        <ion-input type="text" [class]="item.disabled ? \'input_disable\' : \'\' " [readonly]="true" [id]="\'_\'+item.index"  *ngIf="item.disabled" [name]="item.index"  [(ngModel)]="formVal[item.index]" ></ion-input>\n      </ion-item>\n      <ion-icon *ngIf="!item.disabled" class="innericon" name="ios-arrow-forward-outline"></ion-icon>\n    </div>\n    <div class="itembox" *ngIf="item.type == \'text\'">\n      <ion-item>\n        <ion-label>{{item?.name}}<span *ngIf="item?.required" class="required">*</span></ion-label>\n        <ion-input *ngIf="!item.disabled" [placeholder]="item?.placeholder"  type="text" [class]="item.disabled ? \'input_disable\' : \'\' "  [id]="\'_\'+item.index" [name]="item.index"  [(ngModel)]="formVal[item.index]"></ion-input>\n        <!-- <ion-label *ngIf="formVal[item.index] == \'undefined\' "></ion-label> -->\n        <div *ngIf="item.disabled" item-content style="flex: 1;	color: #8e8e8e;text-align: right;">{{ formVal[item.index] }}</div>\n      </ion-item>\n    </div>\n    <div class="itembox" *ngIf="item.type == \'distext\'">\n      <ion-item>\n        <ion-label>{{item?.name}}<span *ngIf="item?.required" class="required">*</span></ion-label>\n        <ion-label style="text-align: right;padding-right:10px;">{{formVal[item.index]}}</ion-label>\n        <!-- <ion-label *ngIf="formVal[item.index] == \'undefined\' "></ion-label> -->\n\n      </ion-item>\n    </div>\n    <div class="itembox" *ngIf="item.type == \'money\'">\n      <ion-item>\n        <ion-label>{{item?.name}}<span *ngIf="item?.required" class="required">*</span></ion-label>\n        <ion-input [placeholder]="item?.placeholder"  type="text" [class]="item.disabled ? \'input_disable\' : \'\' "  [id]="\'_\'+item.index"  [disabled] = "item.disabled" [name]="item.index"  [(ngModel)]="formVal[item.index]" ></ion-input>\n        <!-- <ion-label *ngIf="formVal[item.index] == \'undefined\' "></ion-label> -->\n\n      </ion-item>\n    </div>\n    <div class="itembox" *ngIf="item.type == \'number\' ">\n      <ion-item >\n        <ion-label>{{item?.name}}<span *ngIf="item?.required" class="required">*</span></ion-label>\n        <ion-input type="number" [class]="item.disabled ? \'input_disable\' : \'\' "  [id]="\'_\'+item.index"  [disabled] = "item.disabled" [name]="item.index"  [(ngModel)]="formVal[item.index]" ></ion-input>\n      </ion-item>\n    </div>\n    <div class="itembox" *ngIf="item.type == \'chooseasset\' ">\n      <ion-item>\n        <ion-label>{{item?.name}}<span *ngIf="item?.required" class="required">*</span></ion-label>\n        <ion-input type="text" [class]="item.disabled ? \'input_disable\' : \'\' "  *ngIf="!item.disabled" [placeholder]="item.placeholder" [id]="\'_\'+item.index" [name]="item.index"  [(ngModel)]="formVal[item.index]" (ionFocus)="chooseAsset(item.indexId,item.index)"  style="padding-right: 11px;"></ion-input>\n        <ion-input type="text" [class]="item.disabled ? \'input_disable\' : \'\' " [disabled] = "item.disabled"  *ngIf="item.disabled" [placeholder]="item.placeholder" [name]="item.index"  [id]="\'_\'+item.index"  [(ngModel)]="formVal[item.index]" ></ion-input>\n      </ion-item>\n      <ion-icon *ngIf="!item.disabled" class="innericon" name="ios-arrow-forward-outline"></ion-icon>\n\n    </div>\n    <div class="itembox" *ngIf="item.type == \'chooseitemname\' ">\n      <ion-item>\n        <ion-label>{{item?.name}}<span *ngIf="item?.required" class="required">*</span></ion-label>\n        <ion-input type="text" [class]="item.disabled ? \'input_disable\' : \'\' "  *ngIf="!item.disabled" [placeholder]="item.placeholder" [id]="\'_\'+item.index" [name]="item.index"  [(ngModel)]="formVal[item.index]" (ionFocus)="chooseItemname(item.indexId, item.index)"  style="padding-right: 11px;"></ion-input>\n        <ion-input type="text" [class]="item.disabled ? \'input_disable\' : \'\' " [disabled] = "item.disabled"  *ngIf="item.disabled" [placeholder]="item.placeholder" [name]="item.index"  [id]="\'_\'+item.index"  [(ngModel)]="formVal[item.index]" ></ion-input>\n      </ion-item>\n      <ion-icon *ngIf="!item.disabled" class="innericon" name="ios-arrow-forward-outline"></ion-icon>\n\n    </div>\n    <div class="itembox" *ngIf="item.type == \'choose\'">\n      <ion-item>\n        <ion-label>{{item?.name}}<span *ngIf="item?.required" class="required">*</span></ion-label>\n        <ion-input type="text" [readonly]="true" [class]="item.disabled ? \'input_disable\' : \'\' "  *ngIf="!item.disabled" [placeholder]="item.placeholder" [id]="\'_\'+item.index" [name]="item.index"  [(ngModel)]="formVal[item.index]" (ionFocus)="chooseitem(item)"  style="padding-right: 11px;"></ion-input>\n        <ion-input type="text" [class]="item.disabled ? \'input_disable\' : \'\' " [disabled] = "item.disabled"  *ngIf="item.disabled" [placeholder]="item.placeholder" [name]="item.index"  [id]="\'_\'+item.index"  [(ngModel)]="formVal[item.index]" ></ion-input>\n      </ion-item>\n      <ion-icon *ngIf="!item.disabled" class="innericon" name="ios-arrow-forward-outline"></ion-icon>\n\n    </div>\n    <div class="itembox" *ngIf="item.choose">\n      <ion-item>\n        <ion-label>{{item?.name}}<span *ngIf="item?.required" class="required">*</span></ion-label>\n        <ion-input [type]="item.ptype"  [class]="item.disabled ? \'input_disable\' : \'\' "  *ngIf="!item.disabled" [placeholder]="item.placeholder" [id]="\'_\'+item.index" [name]="item.index"  [(ngModel)]="formVal[item.index]" (ionFocus)="chooseitem(item)" ></ion-input>\n        <ion-input [type]="item.ptype" [class]="item.disabled ? \'input_disable\' : \'\' " [disabled] = "item.disabled"  *ngIf="item.disabled" [placeholder]="item.placeholder" [name]="item.index"  [id]="\'_\'+item.index"  [(ngModel)]="formVal[item.index]" ></ion-input>\n      </ion-item>\n      <!-- <ion-icon *ngIf="!item.disabled" class="innericon" name="ios-arrow-forward-outline"></ion-icon> -->\n\n    </div>\n    <div class="itembox" *ngIf="item.type == \'choosesign\' ">\n      <ion-item style="width: 35%;float: left;">\n        <ion-label>{{item?.name}}<span *ngIf="item?.required" class="required">*</span></ion-label>\n\n        <!-- <ion-input type="text" *ngIf="!item.disabled" [placeholder]="item.placeholder" [name]="item.index"  [id]="\'_\'+item.index"  [(ngModel)]="formVal[item.index]" ></ion-input>  -->\n      </ion-item>\n      <span *ngIf="item.index1 != undefined && item.index1 != \'\'" >\n        <ion-input style="width: 35%;float: right;border-right:1px solid #dedede;" type="text" [class]="item.disabled ? \'input_disable\' : \'\' "  *ngIf="!item.disabled " [placeholder]="item.placeholder1" [name]="item.index1"  [id]="\'_ind\'+item.index1"  [(ngModel)]="formVal[item.index1]" (ionFocus)="chooseperson(item.indexId,item.index1,item.multiple)"></ion-input>\n        <ion-input  *ngIf="item.disabled"  style="width: 35%;float: right;border-right:1px solid #dedede;" type="text" class="input_disable"   [placeholder]="item.placeholder1" [name]="item.index1"  [id]="\'_ind\'+item.index1"  [(ngModel)]="formVal[item.index1]" [disabled] = "item.disabled" ></ion-input>\n      </span>\n        <ion-input style="width: 30%;float: right;" type="text" [class]="item.disabled ? \'input_disable\' : \'\' "  *ngIf="!item.disabled && (formVal[item.index] == null || formVal[item.index] == \'\')" [placeholder]="item.placeholder"   [id]="\'_\'+item.index" [name]="item.index"  [(ngModel)]="formVal[item.index]" (ionFocus)="chooseSign(item.index,item)"></ion-input>\n        <ion-input  *ngIf="item.disabled && formVal[item.index] == null" style="width: 30%;float: right;" type="text" class="input_disable "  [placeholder]="item.placeholder"   [id]="\'_\'+item.index" [name]="item.index"  [(ngModel)]="formVal[item.index]" [disabled] = "item.disabled" ></ion-input>\n\n      <img class="signimg" [src]="formVal[item.index]" *ngIf="!item.disabled && formVal[item.index] != null  && formVal[item.index] != \'\'" (click)="chooseSign(item.index,item)" />\n      <img class="signimg" [src]="formVal[item.index]" *ngIf="item.disabled && formVal[item.index] != null && formVal[item.index] != \'\'" />\n    </div>\n    <div class="itembox" *ngIf="item.type == \'choosesignmultiple\' ">\n      <ion-item style="width: 35%;float: left;">\n        <ion-label>{{item?.name}}<span *ngIf="item?.required" class="required">*</span></ion-label>\n      </ion-item>\n\n      <span  *ngIf="!item.disabled "   (click)="chooseSignMultiple(item.index)" style=" position: absolute; right: 15px;top: 7px;color: #fff;background-color: #488aff; padding: 5px 10px; border-radius: 4px;">签名</span>\n      <div [id]="\'row_\'+item.index" class="itembox" style="border-top:1px solid #dedede;border-bottom:none;padding:3px;">\n\n      </div>\n    </div>\n    <div class="itembox" *ngIf="item.type == \'radio\' ">\n      <ion-item >\n        <ion-label> {{item?.name}}<span *ngIf="item?.required" class="required">*</span></ion-label>\n        <ion-checkbox   [disabled] = "item.disabled"   (click)="radiorightclick(item.index)" [checked]="formVal[item.index] ==1?true:false"></ion-checkbox>\n      </ion-item>\n    </div>\n    <div class="itembox" *ngIf="item.type == \'switch\' ">\n      <ion-item >\n        <ion-label> {{item?.name}}<span *ngIf="item?.required" class="required">*</span></ion-label>\n        <ion-toggle [checked]="formVal[item.index] == 1?true:false" (ionChange)="radiorightclick(item.index)" color="secondary" item-end></ion-toggle>\n      </ion-item>\n    </div>\n    <div class="itembox" *ngIf="item.type == \'radiogroup\' ">\n      <ion-item >\n        <ion-label> {{item?.name}}<span *ngIf="item?.required" class="required">*</span></ion-label>\n    </ion-item>\n    <ul class="checkgroup">\n      <li *ngFor="let typeData of radioArray[item.index]" >\n        <input type="checkbox" [name]="item.index"  [id]="typeData.id" (click)="checkBox($event)" data-value="formVal[item.index]"  [value]="typeData.value">\n        <label [for]="typeData.id">{{typeData.name}}</label>\n      </li>\n    </ul>\n\n    </div>\n    <div class="itembox" [id]="\'_\'+item.index"  style="padding: 0 15px;" *ngIf="item.type == \'customhtml\' ">\n      <!-- <ion-icon name="ios-checkmark-outline" class="icon-checked"></ion-icon> -->\n    </div>\n    <div class="itembox" *ngIf="item.type == \'customhref\' ">\n      <ion-item >\n        <ion-label> {{item?.name}}<span *ngIf="item?.required" class="required">*</span></ion-label>\n        <ion-label [id]="\'_\'+item.index" item-end></ion-label>\n        <!-- <ion-toggle [checked]="formVal[item.index] ==1 || formVal[item.index] == \'1\'  ?true:false" (ionChange)="radiorightclick(item.index)" color="secondary" item-end></ion-toggle> -->\n\n      </ion-item>\n    </div>\n    <div class="itembox"  *ngIf="item.type == \'uploadify\'" style="padding-bottom: 10px;margin-top: 10px;">\n      <div class="addimage" style="border-radius: 8px;" *ngIf="!item.disabled">\n        <div *ngFor="let subitem of imagesArray[item.index];let n = index">\n          <div *ngIf="subitem.img"> \n            <img class="image"   (click)="phonedevice.showBigimage(imagesArray[item.index],n)"\n            (press)="deleteImage(subitem,item.index)" [src]="subitem[\'url\']" alt=""\n            style="height:75px;width: 75px; margin-right: 10px;">\n            </div>\n            <div  *ngIf="subitem.img != true"\n            style="height:75px;width: 75px; margin-right: 10px;border:1px solid #dcdcdc;margin-bottom: 4px;position: relative;float: left;"\n            (click)="showVideo(subitem)"(press)="deleteImage(subitem,item.index)">\n            <img src="assets/imgs/files/video-movie.png" style=" height: 75px; width: 75px;" alt="">\n            <!-- <img src="{{subitem[\'url\']}}" style=" height: 75px; width: 75px;" alt=""> -->\n            <!-- <img [src]="subitem[\'image\']" style=" height: 75px; width: 75px;" alt=""> -->\n            <ion-icon name="logo-youtube" style="position: absolute; top: 40%;left: 38%;"></ion-icon>\n            </div>          \n        </div>\n       <!-- <img class="image" *ngFor="let subitem of imagesArray[item.index]"  (click)="phonedevice.showBigimage(item[\'url\'])"\n          (press)="deleteImage(subitem[\'url\'],item.index)" [src]="subitem[\'url\']" alt=""\n          style="height:75px;width: 75px; margin-right: 10px;"> -->\n\n          <div [id]="\'btn_\'+item.index"  *ngIf="item.video != true" class="Button" (click)="photo(item.busstype,item.index)" >\n              <div\n                style="position: absolute;width:100%;top: 50%;left:50%;transform: translate(-50%,-50%);text-align: center;">\n                <img class="add-element" src="assets/imgs/application/imdefect/视频.png" alt="">\n                <div class="font">添加附件</div>\n              </div>\n          </div>\n          <div [id]="\'btn_\'+item.index" *ngIf="item.video"  class="Button" (click)="photo(item.busstype,item.index,item.video)" >\n            <div\n              style="position: absolute;width:100%;top: 50%;left:50%;transform: translate(-50%,-50%);text-align: center;">\n              <img class="add-element" src="assets/imgs/application/imdefect/视频.png" alt="">\n              <div class="font">上传视频</div>\n            </div>\n        </div>\n      </div>\n      <div [class]="imagesArray[item.index].length == 0 ? \'addimage height\':\'addimage\'" style="border-radius: 8px;" *ngIf="item.disabled">\n        <div *ngIf="imagesArray[item.index].length == 0" style="padding:5px 15px;">暂无附件</div>\n        <img class="image" *ngFor="let subitem of imagesArray[item.index]"  (click)="phonedevice.showBigimage(item[\'url\'])"\n            [src]="subitem[\'url\']" alt=""\n           style="height:75px;width: 75px; margin-right: 10px;">\n       </div>\n    </div>\n    <div class="itembox" *ngIf="item.type == \'choosemore\'">\n      <ion-item>\n        <ion-label>{{item?.name}}<span *ngIf="formVal[item.indexnum] != null&&formVal[item.indexnum] != undefined ">({{formVal[item.indexnum]}})</span><span *ngIf="item?.required" class="required">*</span></ion-label>\n        <ion-label  style="text-align: right;padding-right: 10px; color: rgb(51 51 51 / 57%);"  *ngIf="!item.disabled" (click)="chooseitem(item)">{{item.placeholder}}</ion-label>\n        <!-- <ion-label class="ionlabellist" *ngIf="item.disabled"></ion-label> -->\n      </ion-item>\n      <ion-icon *ngIf="!item.disabled" class="innericon" name="ios-arrow-forward-outline" style="top:25px"></ion-icon>\n      <div class="ionlabellist" *ngIf="formVal[item.index] !=null && formVal[item.index] !=\'\'&& formVal[item.index] !=undefined" >\n        <!-- {{formVal[item.index]}} -->\n        <div class="userbox" *ngFor="let useritem of formVal[item.index]">\n          <span>{{useritem.name}}</span>\n          <ion-icon name="ios-close-outline" *ngIf="!item.disabled" (click)="deluser(useritem,formVal[item.index],item.indexnum,item?.arrayindex)"></ion-icon>\n        </div>\n      </div>\n      <div class="ionlabellist"  *ngIf="item.supplement">\n        <div class="textarea_box">\n          <span class="title">{{item?.supplementtitle}}</span>\n          <div [class]="item.disabled ? \'textarea_disable_border textarea_border\' : \'textarea_border\' " style="height: 75px;">\n            <textarea placeholder="仅限当前系统无账号的用户，多人请用、隔开"  [disabled] = "item.disabled"  [name]="item.supplementindex" [(ngModel)]="formVal[item.supplementindex]"  [id]="\'_\'+item.supplementindex"></textarea>\n          </div>\n        </div>\n        <!-- <textarea placeholder="仅限当前系统无账号的用户，多人请用、隔开"    [disabled] = "item.disabled"  [name]="item.supplementindex" [(ngModel)]="formVal[item.supplementindex]"  [id]="\'_\'+item.supplementindex"></textarea> -->\n      </div>\n    </div>\n    <div class="itembox" *ngIf="item.type == \'choosedutyuser\'">\n      <ion-item>\n        <ion-label>{{item?.name}}<span *ngIf="formVal[item.indexnum] != null&&formVal[item.indexnum] != undefined ">({{formVal[item.indexnum]}})</span><span *ngIf="item?.required" class="required">*</span></ion-label>\n        <ion-label  style="text-align: right;padding-right: 10px; color: rgb(51 51 51 / 57%);"  *ngIf="!item.disabled" (click)="chooseitem(item)">{{item.placeholder}}</ion-label>\n        <!-- <ion-label class="ionlabellist" *ngIf="item.disabled"></ion-label> -->\n      </ion-item>\n      <ion-icon *ngIf="!item.disabled" class="innericon" name="ios-arrow-forward-outline" style="top:25px"></ion-icon>\n      <div class="ionlabellist" *ngIf="formVal[item.index] !=null && formVal[item.index] !=\'\'&& formVal[item.index] !=undefined" >\n        <!-- {{formVal[item.index]}} -->\n        <div class="userbox" *ngFor="let useritem of formVal[item.index]">\n          <span>{{useritem.name}}</span>\n          <ion-icon name="ios-close-outline" *ngIf="!item.disabled" (click)="deldutyuser(useritem,formVal[item.index],item.indexnum,item?.arrayindex)"></ion-icon>\n        </div>\n      </div>\n      <div class="ionlabellist"  *ngIf="item.supplement">\n        <div class="textarea_box">\n          <span class="title">{{item?.supplementtitle}}</span>\n          <div [class]="item.disabled ? \'textarea_disable_border textarea_border\' : \'textarea_border\' " style="height: 75px;">\n            <textarea placeholder="仅限当前系统无账号的用户，多人请用、隔开"  [disabled] = "item.disabled"  [name]="item.supplementindex" [(ngModel)]="formVal[item.supplementindex]"  [id]="\'_\'+item.supplementindex"></textarea>\n          </div>\n        </div>\n        <!-- <textarea placeholder="仅限当前系统无账号的用户，多人请用、隔开"    [disabled] = "item.disabled"  [name]="item.supplementindex" [(ngModel)]="formVal[item.supplementindex]"  [id]="\'_\'+item.supplementindex"></textarea> -->\n      </div>\n    </div>\n    <div class="itembox" *ngIf="item.type == \'choosesmuser\'">\n      <ion-item>\n        <ion-label>{{item?.name}}<span *ngIf="formVal[item.indexnum] != null&&formVal[item.indexnum] != undefined ">({{formVal[item.indexnum]}})</span><span *ngIf="item?.required" class="required">*</span></ion-label>\n        <ion-label  style="text-align: right;padding-right: 10px; color: rgb(51 51 51 / 57%);"  *ngIf="!item.disabled" (click)="chooseitem(item)">{{item.placeholder}}</ion-label>\n        <!-- <ion-label class="ionlabellist" *ngIf="item.disabled"></ion-label> -->\n      </ion-item>\n      <ion-icon *ngIf="!item.disabled" class="innericon" name="ios-arrow-forward-outline" style="top:25px"></ion-icon>\n      <div class="ionlabellist" *ngIf="formVal[item.index] !=null && formVal[item.index] !=\'\'&& formVal[item.index] !=undefined" >\n        <!-- {{formVal[item.index]}} -->\n        <div class="userbox" *ngFor="let useritem of formVal[item.index]">\n          <span>{{useritem.name}}</span>\n          <ion-icon name="ios-close-outline" *ngIf="!item.disabled" (click)="delsmuser(useritem,formVal[item.index],item.indexnum,item?.arrayindex)"></ion-icon>\n        </div>\n      </div>\n      <div class="ionlabellist"  *ngIf="item.supplement">\n        <div class="textarea_box">\n          <span class="title">{{item?.supplementtitle}}</span>\n          <div [class]="item.disabled ? \'textarea_disable_border textarea_border\' : \'textarea_border\' " style="height: 75px;">\n            <textarea placeholder="仅限当前系统无账号的用户，多人请用、隔开"  [disabled] = "item.disabled"  [name]="item.supplementindex" [(ngModel)]="formVal[item.supplementindex]"  [id]="\'_\'+item.supplementindex"></textarea>\n          </div>\n        </div>\n        <!-- <textarea placeholder="仅限当前系统无账号的用户，多人请用、隔开"    [disabled] = "item.disabled"  [name]="item.supplementindex" [(ngModel)]="formVal[item.supplementindex]"  [id]="\'_\'+item.supplementindex"></textarea> -->\n      </div>\n    </div>\n    <!-- <div class="folder-content" [id]="\'collapse\'+i" *ngIf="item.endtoggle">结束</div> -->\n    <div class="itembox customswitch" *ngIf="item.type == \'customswitch\' ">\n      <ion-item >\n        <ion-label *ngIf="!item.pagecode"> {{item?.name}}<span *ngIf="item?.required" class="required">*</span></ion-label>\n        <ion-label *ngIf="item.pagecode" style="color: #014886 !important;" (click)="handleLabelLink(item.pagecode, item.pageparam)"> {{item?.name}}<span *ngIf="item?.required" class="required">*</span></ion-label>\n        <ion-toggle [name]="item.index" [(ngModel)]="formVal[item.index]" (ngModelChange)="changeToggle($event, item.index)" color="secondary" item-end></ion-toggle>\n      </ion-item>\n      <div class="imgbox">\n        <img *ngIf="formVal[item.index] == 0 || formVal[item.index] == null; else default" src="assets/imgs/lm/lmhome/selectedmark.svg" alt="">\n        <ng-template #default>\n          <img src="assets/imgs/lm/lmhome/selectedmark_active.svg" alt="">\n        </ng-template>\n      </div>\n    </div>\n    <div class="itembox" *ngIf="item.type == \'clicklink\' ">\n      <ion-item (click)="handleLabelLink(item.pagecode, item.pageparam)">\n        <ion-label style="color: #014886 !important;"> {{item?.name}}<span *ngIf="item?.required" class="required">*</span></ion-label>\n        <ion-label style="text-align: right;padding-right:10px;color: #014886 !important;">{{formVal[item.index]}}</ion-label>\n      </ion-item>\n    </div>\n    <div class="itembox cslist" *ngIf="item.type == \'customSwitchList\'">\n      <div class="csheader" *ngIf="item.title">{{ item.title }}</div>\n      <ion-item class="cstitle">\n        <ion-note item-start class="tcenter" style="width: 10%;">{{ item.theader[0] }}</ion-note>\n        <ion-note item-start style="flex: 1;">{{ item.theader[1]</ion-note>\n        <ion-note item-start class="tcenter" style="width: 20%;">{{ item.theader[2]</ion-note>\n      </ion-item>\n      <div class="csitem" *ngFor="let sitem of item.index; let i = index">\n        <ion-item>\n          <ion-note item-start class="tcenter" style="width: 10%;">{{ i }}</ion-note>\n          <ion-note item-start class="tover" style="flex: 1;">{{ sitem?.index1 }}</ion-note>\n          <ion-note item-start class="tcenter" style="width: 20%;">\n            <ion-toggle [name]="item.index2" [(ngModel)]="sitem[item.index2]" (ngModelChange)="changeToggle($event, i, item.index2)"  color="secondary" item-end style="width: 20%;"></ion-toggle>\n          </ion-note>\n        </ion-item>\n        <div class="imgbox">\n          <img *ngIf="sitem[item.index2] == 0 || sitem[item.index2] == null; else default2" src="assets/imgs/lm/lmhome/selectedmark.svg" alt="">\n          <ng-template #default2>\n            <img src="assets/imgs/lm/lmhome/selectedmark_active.svg" alt="">\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/components/mform/mform.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_library__["a" /* PhotoLibrary */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_video_editor__["a" /* VideoEditor */],
            __WEBPACK_IMPORTED_MODULE_7__providers_phone_device__["a" /* PhoneDeviceProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* PickerController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_14__providers_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["DomSanitizer"]])
    ], MformComponent);
    return MformComponent;
}());

//# sourceMappingURL=mform.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NormalSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
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
 * Generated class for the NormalSelectComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var NormalSelectComponent = /** @class */ (function () {
    function NormalSelectComponent() {
        this.backValue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectItem = "最近一周";
        this.isshow = false;
    }
    NormalSelectComponent.prototype.ngOnInit = function () {
    };
    NormalSelectComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        __WEBPACK_IMPORTED_MODULE_1_jquery__('page-newleasset').on('click', function (e) {
            if (!__WEBPACK_IMPORTED_MODULE_1_jquery__('#normalSelect').is(e.target) && __WEBPACK_IMPORTED_MODULE_1_jquery__('#normalSelect').has(e.target).length === 0) {
                // console.log(222222222222222222);
                that.isshow = false;
            }
        });
    };
    NormalSelectComponent.prototype.ngOnDestroy = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__('page-newleasset').off('click');
    };
    NormalSelectComponent.prototype.showItemList = function () {
        this.isshow = !this.isshow;
        if (this.isshow == true) {
        }
    };
    NormalSelectComponent.prototype.chooseItem = function (item, index) {
        console.log(item);
        this.selectItem = item;
        this.isshow = false;
        this.backValue.emit(item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NormalSelectComponent.prototype, "SelectList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NormalSelectComponent.prototype, "backValue", void 0);
    NormalSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'normal-select',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/components/normal-select/normal-select.html"*/'\n<div style="position: relative;display: flex;flex-direction: row-reverse;" id="normalSelect">\n    <div (click)="showItemList()" class="font" style="background:#0099ff;color:white; border:1px solid white;height:30px;line-height:30px;width: 120px;padding-left: 10px;">\n        {{selectItem}}\n        <ion-icon name="md-arrow-dropdown" style="float:right;margin-top: 5px;margin-right: 5px;"></ion-icon>\n    </div>\n    <div *ngIf="isshow==true" id="selectComponent" style="background:rgb(185, 163, 163);color:#0099ffd8;padding-left: 10px;border:1px solid rgba(128, 128, 128, 0.295);position: absolute;top: 30px;background: white;width: 120px;">\n      <div *ngFor="let item of SelectList,let i = index " (click)="chooseItem(item,i)">\n        {{item}}\n      </div>\n    </div>\n</div>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/components/normal-select/normal-select.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], NormalSelectComponent);
    return NormalSelectComponent;
}());

//# sourceMappingURL=normal-select.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageHeadComponent = /** @class */ (function () {
    function PageHeadComponent() {
        console.log(this.title);
    }
    PageHeadComponent.prototype.ngOnInit = function () {
        console.log(this.title);
    };
    PageHeadComponent.prototype.ngOnChanges = function () {
        console.log(this.title);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PageHeadComponent.prototype, "title", void 0);
    PageHeadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-head',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/components/page-head/page-head.html"*/'<ion-header>\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">{{title}}</ion-title>\n  </ion-navbar> \n</ion-header>\n\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/components/page-head/page-head.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PageHeadComponent);
    return PageHeadComponent;
}());

//# sourceMappingURL=page-head.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the ProgressBar page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        this.length = {
            'width': '0%',
            'transition': 'width 1s',
            '-webkit-transition': 'width 1s'
        };
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
        this.setData();
    };
    /**
     * 设置数据
     */
    ProgressBarComponent.prototype.setData = function () {
        var _this = this;
        this.proportion = Math.round(this.amount / this.total * 100);
        if (this.proportion) {
            this.proportion += '%';
        }
        else {
            this.proportion = '0%';
        }
        setTimeout(function () {
            _this.length.width = _this.proportion;
        }, 100); //设置延迟，让动画动起来
    };
    /**
     * 数据变化
     */
    ProgressBarComponent.prototype.ngOnChanges = function () {
        //重新更新数据
        this.setData();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "total", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "amount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "length", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "proportion", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'progress-bar',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/components/progress-bar/progress-bar.html"*/'<div class="Bars"> \n    <div [ngStyle]="length"> \n        <span>{{proportion}}</span> \n    </div> \n</div> '/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/components/progress-bar/progress-bar.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RingslideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
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
 * Generated class for the RingslideComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RingslideComponent = /** @class */ (function () {
    function RingslideComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.isshow = false;
        this.isshow2 = false;
    }
    RingslideComponent.prototype.ngOnInit = function () {
        // this.slidePlay();
        if (this.slideType == 'piRisk') {
            this.isshow = true;
        }
        else if (this.slideType == 'imDefect') {
            this.isshow2 = true;
        }
    };
    RingslideComponent.prototype.ngOnChanges = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.slideList && _this.slideList.length > 4) {
                // this.slideList.push(this.slideList[0]);
                _this.slidePlay();
            }
        }, 0);
    };
    RingslideComponent.prototype.ngAfterViewChecked = function () {
        //  console.log(this.slideList);
        // setTimeout(this.slidePlay,300);
        // console.log(new Date())
    };
    RingslideComponent.prototype.ngOnDestroy = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    RingslideComponent.prototype.slidePlay = function () {
        var _this = this;
        var index = 0;
        var startPosition = 0;
        var singleHeight = 35;
        var endPostion;
        if (!this.timer) {
            this.timer = setInterval(function () {
                index++;
                endPostion = startPosition - index * singleHeight;
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.actual-slidelist').animate({ 'margin-top': endPostion + 'px' }, 500, function () {
                    if (index == _this.slideList.length - 4) {
                        index = 0;
                        endPostion = 0;
                        __WEBPACK_IMPORTED_MODULE_1_jquery__('.actual-slidelist').css('margin-top', startPosition + 'px');
                    }
                });
            }, 3000);
        }
    };
    RingslideComponent.prototype.skiptoNewpage = function (item) {
        var type = item['type'];
        if (type == 'imDefect') {
            this.navCtrl.push('ImdefectinfoPage', { 'inDefect': item['id'] });
        }
        else if (type == 'leAbnormal') {
            this.navCtrl.push('AbnormalinfoPage', { 'abnormalInfo': item });
        }
    };
    RingslideComponent.prototype.onclickimDefect = function (item) {
        this.navCtrl.push('ImdefectinfoPage', { 'inDefect': item['defectid'], 'readControll': false });
    };
    RingslideComponent.prototype.showScroll = function () {
        clearInterval(this.timer);
        // this.slideList.splice(0,4);
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.slide-content').css('overflow', 'scroll');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RingslideComponent.prototype, "slideList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], RingslideComponent.prototype, "slideTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], RingslideComponent.prototype, "slideType", void 0);
    RingslideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ringslide',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/components/ringslide/ringslide.html"*/'<!-- Generated template for the RingslideComponent component -->\n<div class="slide" *ngIf="isshow==false && isshow2==false" >\n  <div class="title">{{slideTitle}}</div>\n  <div class="slide-content" (click)="showScroll()">\n    <ul class="actual-slidelist">\n      <li *ngFor="let item of slideList" style="height: 35px;line-height:35px;"(click)="skiptoNewpage(item)">\n        <span style="color:#666666;width:50px;vertical-align: 12px;">【{{item[\'typename\']}}】</span>\n        <span style="color:#0459E0;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;display: inline-block;">{{item[\'description\']}}</span>\n        <span style="color:#999999;vertical-align: 12px;">{{item[\'datatime\']}}</span>\n      </li>\n    </ul>\n  </div>\n</div>\n  <div class="slide2" *ngIf="isshow==true" >\n    <div class="title">{{slideTitle}}</div>\n    <div class="slide-content" (click)="showScroll()">\n      <ul class="actual-slidelist">\n        <li *ngFor="let item of slideList" style="height: 35px;line-height:35px;"(click)="skiptoNewpage(item)">\n          <span style="color:#666666;width:50px;vertical-align: 12px;">【{{item[\'risktypename\']}}】</span>\n          <span style="color:#666666;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;display: inline-block;">{{item[\'description\']}}</span>\n          <!-- <span style="color:#999999;vertical-align: 12px;">{{item[\'risklevelname\']}}</span> -->\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class="slide2" *ngIf="isshow2==true" >\n    <div class="title">{{slideTitle}}</div>\n    <div class="slide-content" (click)="showScroll()">\n      <ul class="actual-slidelist">\n        <li *ngFor="let item of slideList" style="height: 35px;line-height:35px;"(click)="onclickimDefect(item)">\n          <span style="color:#666666;width:50px;vertical-align: 12px;">【{{item[\'defectnum\']}}】</span>\n          <span style="color:#0459E0;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;display: inline-block;">{{item[\'description\']}}</span>\n          <!-- <span style="color:#999999;vertical-align: 12px;">{{item[\'risklevelname\']}}</span> -->\n        </li>\n      </ul>\n    </div>\n  </div>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/components/ringslide/ringslide.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */]])
    ], RingslideComponent);
    return RingslideComponent;
}());

//# sourceMappingURL=ringslide.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarscoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the StarscoreComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var StarscoreComponent = /** @class */ (function () {
    function StarscoreComponent() {
        this.backvalue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.list = [];
        console.log('this is in constructor' + this.value);
    }
    StarscoreComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < 5; i++) {
            this.list.push({
                index: i,
                isshow: false,
                isleft: false,
            });
        }
        if (this.value == '' || this.value == undefined || this.value == null) {
            for (var i = 0; i < 5; i++) {
                this.list[i].isshow = false;
                this.list[i].isleft = false;
            }
        }
        else {
            for (var i = 0; i < this.value; i++) {
                this.list[i].isshow = true;
                if (this.value != parseInt(this.value)) {
                    this.list[parseInt(this.value)].isleft = true;
                }
            }
        }
    };
    //星星评分
    //  chooseOne(item,event){
    //   // console.log(event.clientX);
    //   // let positionX=event.clientX;
    //   // let elementX=document.getElementsByClassName('rating')[item.index].getBoundingClientRect().left;
    //   // if(starlen !=2 ){
    //   //   item.isleft=false
    //   //   this.backvalue.emit(item.index+1);
    //   // }else{
    //   //   item.isleft=true;
    //   //   this.backvalue.emit(item.index+0.5);
    //   // }
    // }
    StarscoreComponent.prototype.chooseOne = function (item, event) {
        for (var i = 0; i < 5; i++) {
            this.list[i].isshow = false;
            this.list[i].isleft = false;
        }
        for (var i = 0; i <= item.index; i++) {
            this.list[i].isshow = true;
        }
        if (this.len == 2) {
            console.log(2);
            item.isleft = false;
            this.backvalue.emit(item.index + 1);
        }
        else {
            var positionX = event.clientX;
            var elementX = document.getElementsByClassName('rating')[item.index].getBoundingClientRect().left;
            if (positionX - elementX > 25) {
                item.isleft = false;
                this.backvalue.emit(item.index + 1);
            }
            else {
                item.isleft = true;
                this.backvalue.emit(item.index + 0.5);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], StarscoreComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], StarscoreComponent.prototype, "len", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], StarscoreComponent.prototype, "ishidden", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StarscoreComponent.prototype, "readtype", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], StarscoreComponent.prototype, "backvalue", void 0);
    StarscoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'starscore',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/components/starscore/starscore.html"*/'<!-- Generated template for the StarscoreComponent component -->\n<!-- <div style="height: 40px;line-height:40px;"> -->\n<div *ngIf="readtype==\'\'" style="position: absolute;top: 50%;margin-top: -12px;">\n    <div class="rating" *ngFor="let item of list"  (click)="chooseOne(item,$event)">\n      <ion-icon name="ios-star-outline" class="backStar" *ngIf="item[\'isshow\']==false"></ion-icon>\n      <ion-icon name="ios-star" class="actuallStar" *ngIf="item[\'isshow\']==true && item[\'isleft\']==false"></ion-icon>\n      <ion-icon name="ios-star-half-outline" class="backStar" *ngIf="item[\'isleft\']==true && item[\'isshow\']==true"></ion-icon>\n    </div>\n\n</div>\n<div *ngIf="readtype==\'readonly\'">\n    <div class="rating" *ngFor="let item of list" style="display: inline-block;height:43px;">\n        <ion-icon name="ios-star-outline" class="backStar" *ngIf="item[\'isshow\']==false"></ion-icon>\n        <ion-icon name="ios-star" class="actuallStar" *ngIf="item[\'isshow\']==true && item[\'isleft\']==false"></ion-icon>\n        <ion-icon name="ios-star-half-outline" class="backStar" *ngIf="item[\'isleft\']==true && item[\'isshow\']==true"></ion-icon>\n      </div>\n</div>\n<!-- </div> -->\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/components/starscore/starscore.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], StarscoreComponent);
    return StarscoreComponent;
}());

//# sourceMappingURL=starscore.js.map

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleModelComponent; });
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

// import { TitleCasePipe } from '@angular/common';



/**
 * Generated class for the ToggleModelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ToggleModelComponent = /** @class */ (function () {
    function ToggleModelComponent(navCtrl, httpService, toastCrtl, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this.toastCrtl = toastCrtl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        //子组件向父组件传值；
        this.cancle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
    }
    ToggleModelComponent.prototype.ngOnInit = function () {
        if (this.msg.a == '正常') {
            this.defaultvalue == null || this.defaultvalue == false ? this.ischeckbox = false : this.ischeckbox = true;
        }
        else {
            this.defaultvalue == false ? this.ischeckbox = false : this.ischeckbox = true;
        }
    };
    ToggleModelComponent.prototype.check = function () {
        var _this = this;
        console.log(this.test);
        if (this.ischeckbox == true && this.msg.a == '正常') {
            var alertctrl = this.alertCtrl.create({
                title: '确认当前异常信息',
                cssClass: 'AlertList',
                buttons: [{
                        text: '异常登记',
                        handler: function () {
                            _this.ischeckbox = !_this.ischeckbox;
                            _this.cancle.emit('确认');
                        }
                    }, {
                        text: '返回',
                        handler: function () {
                            _this.cancle.emit('取消');
                        }
                    }]
            });
            alertctrl.present();
        }
        else {
            this.ischeckbox = !this.ischeckbox;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ToggleModelComponent.prototype, "msg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ToggleModelComponent.prototype, "defaultvalue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ToggleModelComponent.prototype, "key", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ToggleModelComponent.prototype, "test", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ToggleModelComponent.prototype, "cancle", void 0);
    ToggleModelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'toggle-model',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/components/toggle-model/toggle-model.html"*/'<section class="serchBox" (click)="check()" [ngClass]="{\'serchBox-left\':ischeckbox,\'serchBox-right\':!ischeckbox}">\n    <div class="serch-btn"   [ngClass]="{\'serch-btn-right\':!ischeckbox,\'serch-btn-left\':ischeckbox}">\n    </div>\n    <div *ngIf="ischeckbox" class="normal-checkbox">{{msg.a}}</div>\n    <div *ngIf="!ischeckbox" class="unnormal-checkbox">{{msg.b}}</div>\n</section>'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/components/toggle-model/toggle-model.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */]])
    ], ToggleModelComponent);
    return ToggleModelComponent;
}());

//# sourceMappingURL=toggle-model.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeNodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
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
 * Generated class for the TreeNodeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TreeNodeComponent = /** @class */ (function () {
    function TreeNodeComponent(httpService) {
        this.httpService = httpService;
        this.assetinfo = {};
        this.isShow = true;
        this.ClickPositionId = '';
        this.nodeInfo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.nodeList = [];
    }
    TreeNodeComponent.prototype.ngOnInit = function () {
        // console.log(this.assetinfo);
        if (this.assetinfo['isParent'] == 1) {
            this.hasChildNode = true;
        }
        else if (this.assetinfo['isParent']) {
            this.hasChildNode = false;
        }
    };
    TreeNodeComponent.prototype.getNodeList = function (item) {
        var _this = this;
        if (this.hasChildNode == true) {
            var url = '/query/leAsset/leAsset/tree?format=list';
            this.httpService.post(url, { id: item['id'] }, function (res) {
                if (res.length > 0) {
                    _this.nodeList = res;
                }
            }, this.httpService.CONTENTTYPE_FORMURLENCODE);
            this.isShow = !this.isShow;
        }
        else {
            this.navCtrl.push('LeassetinfoPage', { 'assetinfo': this.assetinfo });
        }
    };
    TreeNodeComponent.prototype.getNodeInfo = function (assetinfo) {
        if (this.ClickPositionId != '') {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#' + this.ClickPositionId).css({ 'backgroundColor': 'white', 'color': 'black' });
        }
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#' + assetinfo['id']).css({ 'backgroundColor': '#0099ff', 'color': 'white' });
        console.log(assetinfo);
        this.nodeInfo.emit(assetinfo);
    };
    TreeNodeComponent.prototype.saveInfo = function (event) {
        // console.log(event);
        this.nodeInfo.emit(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], TreeNodeComponent.prototype, "hasChildNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TreeNodeComponent.prototype, "assetinfo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], TreeNodeComponent.prototype, "isShow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TreeNodeComponent.prototype, "Image", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */])
    ], TreeNodeComponent.prototype, "navCtrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TreeNodeComponent.prototype, "ClickPositionId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TreeNodeComponent.prototype, "nodeInfo", void 0);
    TreeNodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tree-node',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/components/tree-node/tree-node.html"*/'\n<div style="margin-left: 20px;line-height: 30px;" >\n    <ion-icon  (click)="getNodeList(assetinfo)" name="ios-arrow-forward" *ngIf="hasChildNode==true && isShow==false" style="float: right;width: 30px;margin-right: 10px;text-align: center;line-height: 30px;"></ion-icon>\n    <ion-icon (click)="getNodeList(assetinfo)" name="ios-arrow-down-outline" *ngIf="hasChildNode==true && isShow==true" style="float: right;width: 30px;margin-right: 10px;text-align: center;line-height: 30px;"></ion-icon>\n    <i class="iconfont" [ngClass]="assetinfo[\'nodetype\']==\'l\'?\'icon-locate\':\'icon-config\'" [ngStyle]="{\'color\':assetinfo[\'nodetype\']==\'l\'?\'#0459e0\':\'#0f0cf7\'}"></i>\n    <span [id]="assetinfo[\'id\']" (click)="getNodeInfo(assetinfo)">{{assetinfo[\'name\']}}</span>\n    <div *ngIf="isShow==true">\n        <tree-node *ngFor="let item of nodeList" [assetinfo]="item" [isShow]="false" [navCtrl]="navCtrl" (nodeInfo)="saveInfo($event)" [ClickPositionId]="ClickPositionId">\n      \n        </tree-node>\n    </div>\n  \n</div>\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/components/tree-node/tree-node.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_http_services__["a" /* HttpServicesProvider */]])
    ], TreeNodeComponent);
    return TreeNodeComponent;
}());

//# sourceMappingURL=tree-node.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcelEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_http_services__ = __webpack_require__(37);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import LuckyExcel from 'luckyexcel';

/**
 * Generated class for the ExcelEditorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ExcelEditorComponent = /** @class */ (function () {
    function ExcelEditorComponent(httpService) {
        this.httpService = httpService;
        this.showBtn = false;
        this.saveJson = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](); // 子传父
        // public defaultAutoSaveInterval = 1000 * 60 * 1
        this.defaultOption = {
            container: 'luckysheet',
            lang: 'zh',
            showsheetbar: false,
            enableAddBackTop: false,
            showinfobar: false,
            "row": 24,
            "column": 5,
            "defaultRowHeight": 32,
            "defaultColWidth": 78,
            sheetFormulaBar: false,
            showstatisticBar: false,
            showstatisticBarConfig: {
                zoom: true,
            },
            rowHeaderWidth: 0,
            columnHeaderHeight: 0,
            showtoolbar: false,
            // showtoolbarConfig: {
            //   print: false,
            //   screenshot: false, // '截图'
            //   chart: false
            // },
            data: [{ "name": "Sheet1" }]
        };
        this.isLoadEmptyTemplate = false;
        console.log('Hello ExcelEditorComponent Component');
    }
    // initExcelData() {
    //   this.httpService.get('/lmtagBriefIntroduction/detail/' + this.id, null, data => {
    //     if (data) {
    //       // this.exceloptionJson = data.data.param
    //       window['luckysheet'].create({
    //         ...this.defaultOption,
    //         ...JSON.parse(data.data.param.replaceAll('&nbsp;', ' '))
    //       });
    //     }
    //   })
    // }
    ExcelEditorComponent.prototype.ngOnChanges = function () {
        var _this = this;
        console.log('ngOnChanges => ', this.jsonStr);
        // const { json, autoSaveInterval } = this.options
        if (this.jsonStr != '' && this.jsonStr != null) {
            // console.log(JSON.parse(this.jsonStr.replaceAll('&nbsp;', ' ')));
            // 读取数据
            window['luckysheet'].create(__assign({}, this.defaultOption, JSON.parse(this.jsonStr.replaceAll('&nbsp;', ' '))));
        }
        else {
            this.isLoadEmptyTemplate = true;
            // 加载空模版
            window['luckysheet'].create(this.defaultOption);
        }
        // 定时提交
        if (this.autoSaveInterval) {
            setInterval(function () {
                _this.commitExcelJson();
            }, this.autoSaveInterval);
        }
    };
    ExcelEditorComponent.prototype.commitExcelJson = function () {
        // const { saveCallback } = this.options
        var exceldata = window['luckysheet'].toJson();
        // 去除没用的数据
        delete exceldata.data[0].data;
        delete exceldata.data[0].luckysheet_select_save;
        delete exceldata.data[0].visibledatacolumn;
        delete exceldata.data[0].visibledatarow;
        // // 判断是否有输入数据，没有输入不做处理
        // const isHasCelldata = JSON.stringify(window['luckysheet'].getSheetData().flat(Infinity).filter(Boolean)).includes('"v":"')
        // if (isHasCelldata) {
        //   return this.saveJson.emit(JSON.stringify(exceldata));
        //   // saveCallback(JSON.stringify(exceldata))
        // }
        // // saveCallback(JSON.stringify(exceldata))
        // return this.saveJson.emit('');
        this.saveJson.emit(JSON.stringify(exceldata));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ExcelEditorComponent.prototype, "jsonStr", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ExcelEditorComponent.prototype, "autoSaveInterval", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ExcelEditorComponent.prototype, "showBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ExcelEditorComponent.prototype, "saveJson", void 0);
    ExcelEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'excel-editor',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/components/excel-editor/excel-editor.html"*/'<!-- Generated template for the ExcelEditorComponent component -->\n<div style="display: flex;flex-direction: column;height: 100%;padding: 8px;">\n  <div id="luckysheet" style="margin:0px;padding:0px;height:100%;width:100%;"></div>\n  <div *ngIf="showBtn">\n    <button id="saveBtn" ion-button outline icon-start round style="width: 50%;" (click)="commitExcelJson()">\n      <ion-icon name=\'create\' is-active="false" ></ion-icon>\n      保存\n    </button>\n    <button id="backBtn" ion-button outline icon-start round style="width: 45% !important;margin-left: 10px !important;" (click)="back()">\n      返回\n    </button>\n  </div>\n</div>'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/components/excel-editor/excel-editor.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_http_services__["a" /* HttpServicesProvider */]])
    ], ExcelEditorComponent);
    return ExcelEditorComponent;
}());

//# sourceMappingURL=excel-editor.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcelToTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the ExcelToTableComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ExcelToTableComponent = /** @class */ (function () {
    function ExcelToTableComponent() {
        this.text = 'Hello World';
    }
    ExcelToTableComponent.prototype.ngOnInit = function () {
        // console.log(this.jsondata);
        this.readerTable(this.jsondata);
    };
    ExcelToTableComponent.prototype.readerTable = function (json) {
        var excelObj = JSON.parse(json);
        var tableData = excelObj['data'];
        var tRows = excelObj['row'];
        var tCols = excelObj['column'];
        var rowHeight = excelObj['defaultRowHeight'];
        var colWidth = excelObj['defaultColWidth'];
        var celldata = tableData[0]['celldata'];
        console.log(celldata);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ExcelToTableComponent.prototype, "jsondata", void 0);
    ExcelToTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'excel-to-table',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/components/excel-to-table/excel-to-table.html"*/'<!-- Generated template for the ExcelToTableComponent component -->\n<div>\n  {{text}}\n</div>\n<div>\n  <table width="100%" border="1" cellspacing="0" cellpadding="0" id="table">\n    <tr height="48">\n      <td height="48" width="72">选择</td>\n      <td width="72">积分表编号</td>\n      <td width="72">应用对象</td>\n      <td width="72">所属线条</td>\n      <td width="72">事件分类</td>\n      <td width="72">事件等次</td>\n      <td width="68">事件积分</td>\n      <td width="135">评分说明</td>\n      <td width="72">发文依据</td>\n      <td width="72">条款编号（非必填）</td>\n      <td width="40">备注</td>\n    </tr>\n  </table>\n</div>'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/components/excel-to-table/excel-to-table.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ExcelToTableComponent);
    return ExcelToTableComponent;
}());

//# sourceMappingURL=excel-to-table.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitStringPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SplitStringPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SplitStringPipe = /** @class */ (function () {
    function SplitStringPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SplitStringPipe.prototype.transform = function (value, symbol, index) {
        if (symbol === void 0) { symbol = ' '; }
        if (index === void 0) { index = 0; }
        if (value == '' || value == null) {
            return '-';
        }
        return value.split(symbol)[index];
    };
    SplitStringPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'splitString',
        })
    ], SplitStringPipe);
    return SplitStringPipe;
}());

//# sourceMappingURL=split-string.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliceStringPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SliceStringPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SliceStringPipe = /** @class */ (function () {
    function SliceStringPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SliceStringPipe.prototype.transform = function (value, start, end) {
        if (start === void 0) { start = '0'; }
        if (end === void 0) { end = '1'; }
        if (value == '' || value == null) {
            return '-';
        }
        if (typeof value != 'string') {
            return value;
        }
        return value.slice(+start, +end);
    };
    SliceStringPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sliceString',
        })
    ], SliceStringPipe);
    return SliceStringPipe;
}());

//# sourceMappingURL=slice-string.js.map

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jiguang_ionic_jpush__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_jpush_util__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_storage__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, device, httpservice, jpush, jpushUtil, storage, events, ionicApp) {
        // document.addEventListener('deviceready',()=>{
        //   // this.statusBar.hide();
        //   console.log(this.statusBar.isVisible);
        //   console.log('deviceready is ready');
        //   if(ConfigProvider.environment !='blueEnvironment'){
        //       //延迟隐藏闪屏 防止有白屏
        //       window.setTimeout(() => {
        //         this.splashScreen.hide();
        //         this.statusBar.show();
        //         this.statusBar.overlaysWebView(false);
        //         this.statusBar.backgroundColorByName('white');
        //         this.statusBar.styleDefault();
        //       }, 500);
        //   }
        //   // statusBar.backgroundColorByHexString("#00FFFFFF");
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.device = device;
        this.httpservice = httpservice;
        this.jpush = jpush;
        this.jpushUtil = jpushUtil;
        this.storage = storage;
        this.events = events;
        this.ionicApp = ionicApp;
        this.sequence = 0;
        // },false)
        if (__WEBPACK_IMPORTED_MODULE_5__providers_config__["a" /* ConfigProvider */].environment == 'formalEnvironment' || __WEBPACK_IMPORTED_MODULE_5__providers_config__["a" /* ConfigProvider */].environment == 'jmtcEnvironment' || __WEBPACK_IMPORTED_MODULE_5__providers_config__["a" /* ConfigProvider */].environment == 'delopmentEnvironment') {
            this.jpush.getRegistrationID().then(function (regid) {
                console.log(regid);
            });
        }
        this.platform.ready().then(function () {
            if (__WEBPACK_IMPORTED_MODULE_5__providers_config__["a" /* ConfigProvider */].environment == 'blueEnvironment') {
                statusBar.overlaysWebView(true);
                splashScreen.hide(); //启动页
                _this.splashScreen.hide();
                _this.statusBar.styleBlackTranslucent();
                _this.statusBar.backgroundColorByHexString('rgba(0,0,0,0)');
            }
            // this.statusBar.backgroundColorByName('white');
            var offlinepi = _this.storage.get(__WEBPACK_IMPORTED_MODULE_9__providers_storage__["a" /* StorageProvider */].OFFLINE_PI);
            if (offlinepi == null) {
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_9__providers_storage__["a" /* StorageProvider */].OFFLINE_PI, 1);
            }
            var fingeruser = _this.storage.get(__WEBPACK_IMPORTED_MODULE_9__providers_storage__["a" /* StorageProvider */].SETTING_FINGER_LOGIN);
            console.log(fingeruser);
            console.log(123333);
            if (fingeruser != null) {
                _this.rootPage = 'LoginPage';
            }
            else {
                if (_this.storage.get(__WEBPACK_IMPORTED_MODULE_9__providers_storage__["a" /* StorageProvider */].ME_LOGIN_USERINFO)) {
                    _this.rootPage = 'LmtabsPage';
                    // this.rootPage = 'TabsPage';
                }
                else {
                    _this.rootPage = 'LoginPage';
                }
            }
            if (__WEBPACK_IMPORTED_MODULE_5__providers_config__["a" /* ConfigProvider */].environment == 'formalEnvironment' || __WEBPACK_IMPORTED_MODULE_5__providers_config__["a" /* ConfigProvider */].environment == 'jmtcEnvironment' || __WEBPACK_IMPORTED_MODULE_5__providers_config__["a" /* ConfigProvider */].environment == 'delopmentEnvironment' || __WEBPACK_IMPORTED_MODULE_5__providers_config__["a" /* ConfigProvider */].environment == 'yskbEnvironment') {
                _this.httpservice.Upgrader();
                /**极光推送开启 */
                _this.jpush.init();
                //插件初始化
                _this.jpush.setDebugMode(true);
                /*消息推送配置**/
                //监听初始化
                var userinfo = _this.storage.get(__WEBPACK_IMPORTED_MODULE_9__providers_storage__["a" /* StorageProvider */].ME_LOGIN_USERINFO);
                _this.jpushUtil.initResumeAndPause();
                _this.jpushUtil.setAlias(userinfo['account']);
                console.log('app.component.ts中');
            }
            // 当按下后退按钮时，将消除任何形式的模态，重叠或吐司
            // this.platform.registerBackButtonAction(() => {
            //   console.log('registerBackButtonAction');
            //   let activePortal = this.ionicApp._loadingPortal.getActive() ||
            //     this.ionicApp._modalPortal.getActive() ||
            //     this.ionicApp._toastPortal.getActive() ||
            //     this.ionicApp._overlayPortal.getActive();
            //   if (activePortal) {
            //     activePortal.dismiss();
            //   }
            // });
            // 是否在浏览器中运行
            var isBrowser = _this.platform.url().startsWith('http');
            console.log('是否在浏览器中运行？ ', isBrowser);
            _this.storage.set(__WEBPACK_IMPORTED_MODULE_9__providers_storage__["a" /* StorageProvider */].IS_BROWSER, isBrowser);
        });
        this.devicePlatform = this.device.platform;
    }
    MyApp.prototype.ngOninit = function () {
    };
    MyApp.prototype.ionViewDidLoad = function () {
        window.screen.orientation.lock('portrait');
        var fingeruser = this.storage.get(__WEBPACK_IMPORTED_MODULE_9__providers_storage__["a" /* StorageProvider */].SETTING_FINGER_LOGIN);
        console.log(fingeruser);
        console.log(1233334444);
        if (fingeruser != null) {
            this.rootPage = 'LoginPage';
        }
        else {
            if (this.storage.get(__WEBPACK_IMPORTED_MODULE_9__providers_storage__["a" /* StorageProvider */].ME_LOGIN_USERINFO)) {
                this.rootPage = 'LmtabsPage';
            }
            else {
                this.rootPage = 'LoginPage';
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/app/app.html"*/'\n<ion-nav #myNav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/app/app.html"*/
            // template: '<ion-nav #myNav [root]="rootPage"></ion-nav>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_8__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__jiguang_ionic_jpush__["a" /* JPush */],
            __WEBPACK_IMPORTED_MODULE_6__providers_jpush_util__["a" /* JpushUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicApp */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyErrorHandler = /** @class */ (function () {
    function MyErrorHandler(events) {
        this.events = events;
    }
    MyErrorHandler.prototype.handleError = function (err) {
        if (err.status === 401) {
            this.events.publish('userCheck');
        }
        // do something with the errorswitch (res.status) {
    };
    MyErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], MyErrorHandler);
    return MyErrorHandler;
}());

//# sourceMappingURL=custom.error.handler.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackButtonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the BackButtonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BackButtonProvider = /** @class */ (function () {
    function BackButtonProvider(http, platform, alertCtrl) {
        this.http = http;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.backButtonPressed = false;
    }
    BackButtonProvider.prototype.registerBackButtonAction = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            if (_this.backButtonPressed == true) {
                _this.showExitApp();
            }
            _this.backButtonPressed = true;
            setTimeout(function () {
                _this.backButtonPressed = false;
            }, 1000);
        });
    };
    BackButtonProvider.prototype.showExitApp = function () {
        var _this = this;
        this.alertCtrl.create({
            title: '是否确定推出应用',
            cssClass: 'AlertList',
            buttons: [{
                    text: '确定',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }, {
                    text: '取消',
                    handler: function () {
                    }
                }]
        }).present();
    };
    BackButtonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], BackButtonProvider);
    return BackButtonProvider;
}());

//# sourceMappingURL=back-button.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the PageConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PageConfigProvider = /** @class */ (function () {
    function PageConfigProvider(http) {
        this.http = http;
        console.log('Hello PageConfigProvider Provider');
    }
    /**
     * login登陆页图片配置信息
     */
    PageConfigProvider.LoginPagePicture = "/assets/imgs/me/login/login-logotitle.png";
    /**
     * home页面轮播图配置信息
     */
    PageConfigProvider.HomePageTogglePicture = [{ "picurl": "assets/imgs/home/slider01.jpg" }, { "picurl": "assets/imgs/home/slider02.jpg" }, { "picurl": "assets/imgs/home/slider03.jpg" }];
    PageConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PageConfigProvider);
    return PageConfigProvider;
}());

//# sourceMappingURL=page-config.js.map

/***/ })

},[436]);
//# sourceMappingURL=main.js.map