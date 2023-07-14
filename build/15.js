webpackJsonp([15],{

/***/ 1011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkreportPageModule", function() { return WorkreportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workreport__ = __webpack_require__(1638);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WorkreportPageModule = /** @class */ (function () {
    function WorkreportPageModule() {
    }
    WorkreportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__workreport__["a" /* WorkreportPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__workreport__["a" /* WorkreportPage */]),
            ],
        })
    ], WorkreportPageModule);
    return WorkreportPageModule;
}());

//# sourceMappingURL=workreport.module.js.map

/***/ }),

/***/ 1638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkreportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WorkreportPage = /** @class */ (function () {
    function WorkreportPage(navCtrl, navParams, calendar, httpService, actionsheet, events, storageProvide, toastCtrl, http, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.calendar = calendar;
        this.httpService = httpService;
        this.actionsheet = actionsheet;
        this.events = events;
        this.storageProvide = storageProvide;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.WEEKTABLE = [{
                cn: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
                cns: ['日', '一', '二', '三', '四', '五', '六'],
                en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            }, {
                cn: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
                cns: ['一', '二', '三', '四', '五', '六', '日'],
                en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }];
        this.daylist = [];
        this.itemType = [];
        this.itemTaskList = [];
        this.itemNameList = [];
        this.workTimelist = [];
        this.uuid = '';
        this.data = {};
        this.weekBiginTime = '';
        this.weekEndTime = '';
        this.dataList = [];
        this.weekDay = '';
        this.completeDayList = [];
        this.isShowbutton = true;
        this.date = new Date();
        this.year = this.date.getFullYear();
        this.month = this.date.getMonth();
        this.day = this.date.getDate();
        this.uuid = this.storageProvide.get(__WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */].ME_USERINFO)['id'];
        this.getOnedayData();
        this.getItemtype();
        this.workTimetype();
        // this.dataList.push(this.data); 
        // this.isShowbutton=true;
        this.getMonthRecord();
    }
    WorkreportPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
        });
        this.days = this.getMonthDays(this.year, this.month + 1);
        console.log(this.completeDayList);
        console.log(this.daylist);
        // console.log(this.getMonthDaysArray(this.year, this.month + 1, this.day, 0));
        console.log(this.uuid);
        this.weekBiginTime = this.searchBegintime();
        this.weekEndTime = this.searchEndtime();
        // this.isshowDeleteButton();
    };
    //是否能显示删除按钮
    // isshowDeleteButton(){
    //   let date=new Date().getDate();
    //   if(date-this.day>6){
    //     this.isShowbutton=false;
    //   }else{
    //     this.isShowbutton=true;
    //   }
    // }
    //查询本周开始时间，
    WorkreportPage.prototype.searchBegintime = function () {
        var weeknum = this.getWeekday(this.year, this.month + 1, this.day);
        var beginDate = this.day - weeknum + 1;
        var beginmonth = this.month;
        var year = this.year;
        if (beginDate <= 0) {
            beginmonth--;
            if (beginmonth < 0) {
                year--;
                beginDate = this.getMonthDays(year, 12) + beginDate;
                return year + '-' + 12 + '-' + beginDate;
            }
            else {
                beginDate = this.getMonthDays(year, beginmonth + 1) + beginDate;
                beginmonth++;
                return year + '-' + beginmonth + '-' + beginDate;
            }
        }
        else {
            beginmonth++;
            return year + '-' + beginmonth + '-' + beginDate;
        }
    };
    //查询本周结束时间
    WorkreportPage.prototype.searchEndtime = function () {
        var weeknum = this.getWeekday(this.year, this.month + 1, this.day);
        var endDate = this.day + 7 - weeknum;
        var endmonth = this.month;
        var endyear = this.year;
        if (endDate > weeknum) {
            endmonth++;
            if (endmonth > 11) {
                endyear++;
                endDate = endDate % weeknum;
                return endyear + '-' + 0 + 1 + '-' + endDate;
            }
            else {
                endDate = endDate % weeknum;
                endmonth++;
                if (endmonth < 10) {
                    endmonth = 0 + endmonth;
                }
                return endyear + '-' + endmonth + '-' + endDate;
            }
        }
        else {
            endmonth++;
            if (endmonth < 10) {
                endmonth = 0 + endmonth;
            }
            return endyear + '-' + endmonth + '-' + endDate;
        }
    };
    //某月一共有多少天
    WorkreportPage.prototype.getMonthDays = function (year, month) {
        return new Date(year, month, 0).getDate();
    };
    //获取某日是星期几
    WorkreportPage.prototype.getWeekday = function (year, month, day) {
        return new Date(year, month - 1, day).getDay();
    };
    WorkreportPage.prototype.getweeksInMonth = function (year, month) {
        var days = this.getMonthDays(year, month);
        var FirstDayWeekday = this.getWeekday(year, month, 1);
        //向上取整
        return Math.ceil(days + FirstDayWeekday);
    };
    WorkreportPage.prototype.getMonthDaysArray = function (year, month, day, type) {
        if (typeof day === 'undefined' && year === 'YEAR' && month === 'MONTH')
            day = 'DAY';
        var dayArrays = [];
        var days = this.getMonthDays(year, month), preDays = this.getMonthDays(year, month - 1);
        var thisMonthFirstDayInWeek = this.getWeekday(year, month, 1), thisMonthLastDayInWeek = this.getWeekday(year, month, days);
        // type = !type || type !== 1 ? 0 : 1;
        //上月在当月日历面板中的排列
        for (var i = 0; i < thisMonthFirstDayInWeek; i++) {
            dayArrays.push({
                dayNum: (preDays - thisMonthFirstDayInWeek + i + 1),
                weekDay: this.WEEKTABLE[type].cn[i],
                flag: false,
            });
        }
        //当月日历面板中的排列
        for (var i = 1; i <= days; i++) {
            var weekDayFlag = (thisMonthFirstDayInWeek + i - 1) % 7;
            dayArrays.push({
                dayNum: i,
                weekDay: this.WEEKTABLE[type].cn[weekDayFlag],
                selected: i === +day,
                isThisMonth: true,
                complete: false,
                flag: false,
            });
        }
        ;
        //下月在当月日历面板中的排列
        for (var i = 1; i <= (6 - thisMonthLastDayInWeek); i++) {
            var weekDayFlag = (thisMonthFirstDayInWeek + days + i - 1) % 7;
            dayArrays.push({
                dayNum: i,
                flag: false,
                weekDay: this.WEEKTABLE[type].cn[weekDayFlag]
            });
        }
        ;
        return dayArrays;
    };
    WorkreportPage.prototype.changeActive = function (item) {
        if (item['isThisMonth']) {
            for (var i = 0; i < this.daylist.length; i++) {
                this.daylist[i]['selected'] = false;
            }
            this.day = item['dayNum'];
            item['selected'] = !item['selected'];
            this.weekDay = item['weekDay'];
            this.getOnedayData();
        }
        var date = new Date().getDate();
        if (date - item['dayNum'] > 6 || date - item['dayNum'] < 0) {
            this.isShowbutton = false;
            console.log(__WEBPACK_IMPORTED_MODULE_6_jquery__('.scroll-content'));
            if (__WEBPACK_IMPORTED_MODULE_6_jquery__('.scroll-content').length > 1) {
                __WEBPACK_IMPORTED_MODULE_6_jquery__('.scroll-content')[1].style['marginBottom'] = '0px';
            }
            else {
                __WEBPACK_IMPORTED_MODULE_6_jquery__('.scroll-content')[0].style['marginBottom'] = '0px';
            }
        }
        else {
            this.isShowbutton = true;
            if (__WEBPACK_IMPORTED_MODULE_6_jquery__('.scroll-content').length > 1) {
                __WEBPACK_IMPORTED_MODULE_6_jquery__('.scroll-content')[1].style['marginBottom'] = '93px';
            }
            else {
                __WEBPACK_IMPORTED_MODULE_6_jquery__('.scroll-content')[0].style['marginBottom'] = '93px';
            }
        }
        // this.getMonthRecord();
    };
    WorkreportPage.prototype.getOnedayData = function () {
        var _this = this;
        this.dataList = [];
        var date = '';
        var month = this.month + 1;
        date = this.year + '-' + month + '-' + this.day;
        var url = '/prjRecord/list?uid=' + this.uuid + '&workdate=' + date;
        this.httpService.get(url, null, function (res) {
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    // res.rows[i]['index']=i+1;
                    _this.dataList.unshift(res.rows[i]);
                }
            }
            else {
                if (_this.isShowbutton == true) {
                    _this.data = _this.initdata();
                    // this.data['isshow']=false;
                    _this.dataList.unshift(_this.data);
                }
            }
            for (var i = 0; i < _this.dataList.length; i++) {
                _this.dataList[i]['index'] = _this.dataList.length - i;
                if (_this.dataList.length == 1) {
                    _this.dataList[i]['isshow'] = true;
                }
                else {
                    _this.dataList[i]['isshow'] = false;
                }
            }
        });
    };
    WorkreportPage.prototype.showMoreInfo = function (item) {
        item['isshow'] = !item['isshow'];
    };
    WorkreportPage.prototype.prevMonth = function () {
        this.daylist = [];
        this.month--;
        if (this.month < 0) {
            this.month = 11;
            this.year--;
        }
        this.daylist = this.getMonthDaysArray(this.year, this.month + 1, this.day, 0);
        this.getMonthRecord();
    };
    WorkreportPage.prototype.nextMonth = function () {
        this.month++;
        if (this.month > 11) {
            this.year++;
            this.month = 0;
        }
        this.daylist = this.getMonthDaysArray(this.year, this.month + 1, this.day, 0);
        this.getMonthRecord();
        for (var i = 0; i < this.daylist.length; i++) {
            this.daylist[i]['flag'] = false;
        }
    };
    WorkreportPage.prototype.getItemtype = function () {
        var _this = this;
        this.itemType = [];
        this.httpService.getDict('PRJ_RECORD_TYPE', function (res) {
            if (res.length > 0) {
                for (var i = 0; i < res.length; i++) {
                    _this.itemType.push(res[i]);
                }
            }
        });
    };
    WorkreportPage.prototype.getTaskName = function () {
        var _this = this;
        var url = '/prjMain/myList?sort=projectcode&order=desc&_search=false&nd=1559026915459&rows=15&page=1&sidx=&sord=asc';
        this.httpService.get(url, null, function (res) {
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.itemTaskList.push(res.rows[i]);
                }
            }
        });
    };
    //获取当月记录
    WorkreportPage.prototype.getMonthRecord = function () {
        var _this = this;
        var month;
        var day;
        day = this.getMonthDays(this.year, this.month + 1);
        console.log(day);
        month = this.month + 1;
        this.completeDayList = [];
        if (month < 10) {
            month = '0' + month;
        }
        var obj = {
            "nw_startdate": this.year + '-' + month + '-' + '01',
            "nw_enddate": this.year + '-' + month + '-' + day,
        };
        var myobj = JSON.stringify(obj);
        var url = 'prjRecord/list?_search=false&nd=1559205191671&rows=100&page=1&sidx=&sord=asc&fuzzysearch=&uid=' + this.uuid + '&where=' + encodeURIComponent(myobj);
        // url=encodeURIComponent(url);
        this.httpService.get(url, null, function (res) {
            // let date=new Date().getDate();
            for (var i = 0; i < res.rows.length; i++) {
                _this.completeDayList.push(parseInt(res.rows[i]['workdate'].substring(8, 10)).toString());
                console.log(_this.completeDayList);
            }
            _this.daylist = _this.getMonthDaysArray(_this.year, _this.month + 1, _this.day, 0);
            for (var i = 0; i < _this.daylist.length; i++) {
                if (_this.daylist[i]['selected'] == true) {
                    _this.weekDay = _this.daylist[i]['weekDay'];
                }
                for (var j = 0; j < _this.completeDayList.length; j++) {
                    if (_this.completeDayList[j] == _this.daylist[i]['dayNum'] && _this.daylist[i]['complete'] == false) {
                        _this.daylist[i]['complete'] = true;
                    }
                }
                if (_this.daylist[i]['dayNum'] == new Date().getDate() && _this.month == new Date().getMonth() && _this.year == new Date().getFullYear() && _this.daylist[i]['isThisMonth'] == true) {
                    for (var j = i - 6; j < i + 1; j++) {
                        console.log(j);
                        console.log(_this.daylist[j]);
                        // if(j>=0){
                        _this.daylist[j]['flag'] = true;
                        // }
                    }
                }
            }
            console.log(_this.daylist);
        });
    };
    WorkreportPage.prototype.workTimetype = function () {
        var _this = this;
        this.workTimelist = [];
        this.httpService.getDict('PRJ_RECORD_WORKTYPE', function (res) {
            if (res.length > 0) {
                for (var i = 0; i < res.length; i++) {
                    _this.workTimelist.push(res[i]);
                }
            }
        });
    };
    WorkreportPage.prototype.openActionsheet = function (item) {
        var _this = this;
        var buttons = [];
        var _loop_1 = function (i) {
            buttons.push({
                text: this_1.itemType[i]['name'],
                role: 'destructive',
                handler: function () {
                    item['type'] = _this.itemType[i]['value'];
                    item['typename'] = _this.itemType[i]['name'];
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.itemType.length; i++) {
            _loop_1(i);
        }
        this.actionsheet.create({
            buttons: buttons,
        }).present();
    };
    WorkreportPage.prototype.chooseWorktype = function (item) {
        var _this = this;
        var buttons = [];
        var _loop_2 = function (i) {
            buttons.push({
                text: this_2.workTimelist[i]['name'],
                role: 'destructive',
                handler: function () {
                    item['worktype'] = _this.workTimelist[i]['value'];
                    item['worktypename'] = _this.workTimelist[i]['name'];
                }
            });
        };
        var this_2 = this;
        for (var i = 0; i < this.workTimelist.length; i++) {
            _loop_2(i);
        }
        this.actionsheet.create({
            buttons: buttons,
        }).present();
    };
    WorkreportPage.prototype.initdata = function () {
        var data = {};
        return data = {
            checkby: "",
            checkdate: "",
            hours: "",
            info: "",
            leadtask: "1",
            memo: "",
            projectid: "",
            projectname: "",
            rate: "",
            recordid: "",
            result: "",
            seqnum: "",
            taskid: "",
            taskname: "",
            type: "01",
            typename: '项目',
            userid: "",
            weekday: "",
            workdate: "",
            workstatus: "INPRG",
            worktype: "02",
            worktypename: '非现场',
            index: '1',
            isshow: true,
        };
    };
    WorkreportPage.prototype.saveData = function () {
        var _this = this;
        var month = this.month + 1;
        var workdate = '';
        var day = '';
        if (this.day < 10) {
            day = '0' + this.day;
        }
        else {
            day = this.day;
        }
        if (this.month < 9) {
            workdate = this.year + '-' + 0 + month + '-' + day;
        }
        else {
            workdate = this.year + '-' + month + '-' + day;
        }
        var flag = false;
        var message = '';
        for (var i = 0; i < this.dataList.length; i++) {
            this.dataList[i]['workdate'] = workdate;
            this.dataList[i]['weekday'] = this.weekDay;
            this.dataList[i]['userid'] = this.uuid;
            if (this.dataList[i]['taskname'] == '') {
                flag = true;
                message = message + '任务名称不能为空,';
            }
            else if (this.dataList[i]['hours'] == '') {
                flag = true;
                message = message + ' ' + '工作时间不能为空,';
            }
            else if (this.dataList[i]['rate'] > '100.00') {
                flag = true;
                message = message + ' ' + '任务进度不能大于100%';
            }
        }
        if (flag == false) {
            var url = 'prjRecord/prjRecordService/saveList';
            this.httpService.post(url, this.dataList, function (res) {
                if (res.code == 0) {
                    _this.toastCtrl.create({
                        message: '保存成功',
                        position: 'bottom',
                        duration: 1000,
                    }).present();
                    _this.getMonthRecord();
                    _this.getOnedayData();
                }
            });
        }
        else {
            this.toastCtrl.create({
                message: message,
                position: 'top',
                duration: 1500
            }).present();
        }
    };
    WorkreportPage.prototype.chooseItemname = function (item) {
        var _this = this;
        this.events.subscribe('chooseItemname', function (chooseItemname) {
            console.log(chooseItemname);
            item['projectid'] = chooseItemname[0]['projectid'];
            // item['locationtocode']=chooseItemname[0]['locationcode'];
            item['projectname'] = chooseItemname[0]['projectname'];
            _this.events.unsubscribe('chooseItemname');
        });
        this.navCtrl.push('MmitemPage', { 'type': 'chooseItemname', 'title': '选择项目名称' });
    };
    WorkreportPage.prototype.chooseTaskname = function (item) {
        var _this = this;
        this.events.subscribe('chooseTaskname', function (chooseItemname) {
            console.log(chooseItemname);
            item['taskid'] = chooseItemname[0]['taskid'];
            item['taskname'] = chooseItemname[0]['taskname'];
            item['projectid'] = chooseItemname[0]['projectid'];
            item['projectname'] = chooseItemname[0]['projectname'];
            _this.events.unsubscribe('chooseTaskname');
        });
        var url = '/prjTask/singleWeeklyTask?searchfrom=prjRecord&sort=updatetime&order=desc&where=&_search=false&rows=50&page=1&sidx=&sord=asc&curpersonid=' + this.uuid + '&projectid=' + item['projectid'];
        // +'&date1='+this.weekBiginTime+'&date2='+this.weekEndTime
        this.navCtrl.push('MmitemPage', { 'type': 'chooseTaskname', 'title': '选择任务名称', 'url': url });
    };
    WorkreportPage.prototype.addTask = function () {
        var data = this.initdata();
        this.dataList.unshift(data);
        for (var i = 0; i < this.dataList.length; i++) {
            this.dataList[i]['index'] = this.dataList.length - i;
        }
    };
    WorkreportPage.prototype.delete = function (item) {
        var _this = this;
        console.log(1111);
        this.alertCtrl.create({
            cssClass: 'AlertList',
            buttons: [{
                    text: '确定',
                    handler: function () {
                        if (item.recordid != '') {
                            //   let url='/prjRecord/remove?ids='+item['recordid'];
                            //   this.http.post(url,null,{headers:this.httpService.formurlencodeheaders}).subscribe((res)=>{
                            //     console.log(2222);
                            //   if(res.json().code==0){
                            //     console.log(3333);
                            //     this.toastCtrl.create({
                            //       message:'删除成功',
                            //       position:'top',
                            //       duration:1200,
                            //     }).present();
                            //   }
                            //     this.getMonthRecord();
                            //     this.getOnedayData();
                            // })    
                            _this.httpService.removeIds(item.recordid, function (res) {
                                if (res.code == 0) {
                                    _this.toastCtrl.create({
                                        message: '删除成功',
                                        position: 'top',
                                        duration: 1200,
                                    }).present();
                                    _this.getMonthRecord();
                                    _this.getOnedayData();
                                }
                            });
                        }
                        else {
                            for (var i = 0; i < _this.dataList.length; i++) {
                                if (item['index'] == _this.dataList[i]['index']) {
                                    _this.dataList.splice(i, 1);
                                }
                            }
                        }
                    }
                }, {
                    text: '取消'
                }],
            // title:'是否确定删除当前任务',
            subTitle: '是否确定删除当前任务',
        }).present();
    };
    WorkreportPage.prototype.controllWorkingTime = function (item) {
        if (item['hours'] > 24) {
            this.toastCtrl.create({
                message: '最大时间为24小时',
                duration: 1000,
                position: 'top'
            }).present();
            item['hours'] = 24;
        }
        if (item['hours'] < 0) {
            this.toastCtrl.create({
                message: '最小时间为0小时',
                duration: 1000,
                position: 'top'
            }).present();
            item['hours'] = 0;
        }
    };
    WorkreportPage.prototype.controllPercent = function (item) {
        if (item['rate'] > 100) {
            this.toastCtrl.create({
                message: '百分比最大为100',
                duration: 1000,
                position: 'top'
            }).present();
            item['rate'] = 100;
        }
        if (item['rate'] < 0) {
            this.toastCtrl.create({
                message: '百分比最小为0',
                duration: 1000,
                position: 'top'
            }).present();
            item['rate'] = 0;
        }
    };
    WorkreportPage.prototype.select = function (event, value) {
        console.log(event);
        console.log(value);
        // event.select();,this
    };
    WorkreportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-workreport',template:/*ion-inline-start:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/workreport/workreport.html"*/'\n<ion-header>\n\n  <ion-navbar class="mytoolbar">\n    <ion-title class="cptitle">日报</ion-title>\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="month">      \n    <ul>\n      <li class="prev" (click)="prevMonth()">❮</li>\n      <li class="next" (click)="nextMonth()">❯</li>\n      <li style="text-align:center">\n        {{month+1}}月<br>\n        <span style="font-size:18px">{{year}}年</span>\n      </li>\n    </ul>\n  </div>\n  \n  <ul class="weekdays">\n    <li>日</li>\n    <li>一</li>\n    <li>二</li>\n    <li>三</li>\n    <li>四</li>\n    <li>五</li>\n    <li>六</li>\n  </ul>\n  \n  <ul class="days">  \n    <li *ngFor="let item of daylist" \n    [ngClass]="{\'active\':item[\'selected\']==true}" \n    (click)="changeActive(item)" \n    [ngStyle]="{\'color\':item[\'flag\']==true?\'black\':\'#dedede\'}"\n    style="position: relative;"\n    >{{item[\'dayNum\']}}\n  <span *ngIf="item[\'complete\']==true " style="position: absolute;font-size:10px;width:100%;right:10px;top:0px;display: inline-block;height: 5px;width: 5px;border-radius: 5px;background: #0099FF"></span>\n  </li>\n  </ul>\n  <section *ngFor="let item of dataList ">\n    <div style="width:100%;margin-top:10px;background: white;position: relative;padding:8px 19px 8px 16px" (click)="showMoreInfo(item)">\n      <span style="color: black" *ngIf="item[\'index\']">{{item[\'index\']}}.</span>\n      <span *ngIf="item[\'index\']" style="color:black">{{item[\'taskname\']}}/{{item[\'rate\']}}%/{{item[\'hours\']}}h</span>\n      <ion-icon (click)="delete(item)"  *ngIf="isShowbutton==true" name="ios-trash-outline" style="color:red;font-size: 22px;position: absolute;right: 10px;top:10px;"></ion-icon>\n    </div>\n    <!-- <div class="workreport-content" >\n      <span >工作日期</span>\n      <span style="margin-right: 10px;float:right;">{{year}}/{{month+1}}/{{day}}</span>\n    </div> -->\n    <div *ngIf="item[\'isshow\']==true">\n    <div class="workreport-content" (click)="openActionsheet(item)">\n      <span>类型</span>\n      <span   style="height: 36px;width:20%;float:right;margin-right:10px;text-align: right;color:#0099FF">{{item[\'typename\']}}</span>\n    </div>\n    <div class="workreport-content" style="position: relative;" >\n        <span>工作内容 <i style="color:red">*</i></span>\n        <input  placeholder="请选择或者输入工作内容" type="text" style="border-width:0px; outline: none;text-align: right;height: 36px;width:70%;padding-right:20px;float:right;margin-right:10px;color:#0099FF" [(ngModel)]="item[\'taskname\']">\n        <ion-icon name="ios-search" style="text-align: right;position: absolute;right:10px; top:5px;font-size: 24px;"(click)="chooseTaskname(item)"></ion-icon>\n      </div>\n    <div class="workreport-content" (click)="chooseItemname(item)">\n      <span>项目名称</span>\n      <input placeholder="请选择项目名称" type="text" style="border-width:0px;outline: none;text-align: right;width:70%;color:#0099FF;height: 36px;float:right;margin-right:10px;" [(ngModel)]="item[\'projectname\']">\n    </div>\n    \n    <div class="workreport-content"  (click)="chooseWorktype(item)">\n      <span>工时类型</span>\n      <span style="text-align: right;height: 36px;float:right;margin-right:10px;width: 20%;color:#0099FF">{{item[\'worktypename\']}}</span>\n    </div>\n    <div class="workreport-content">\n      <span>工时（小时）<i style="color:red">*</i></span>\n      <input (click)="select($event,this)" onfocus="this.select()" placeholder="" type="text" name="price" οnkeyup= "if( ! /^d*(?:.d{0,2})?$/.test(this.value)){this.value=\'\';}"  (blur)="controllWorkingTime(item)" placeholder="请输入工作时间" min="1" max="24" style="border-width:0px;outline: none; text-align: right;height: 36px;float:right;margin-right:10px;width: 50%;color:#0099FF" [(ngModel)]="item[\'hours\']" >\n    </div>\n    <div class="workreport-content">\n      <span>进度（%）</span>\n      <input type="number" placeholder="请输入进度百分比" onfocus="this.select()" name="points" (blur)="controllPercent(item)" style="border-width:0px; outline: none;text-align: right;height: 36px;float:right;margin-right:10px;width: 50%;color:#0099FF" min="1" max="100" oninput="this.value=this.value.replace(/[^0-9-]+/,\'\');" [(ngModel)]="item[\'rate\']">\n    </div>\n    <div style="background: white;height: 100px;">  \n      <!-- <span style="vertical-align:center">完成情况</span> -->\n      <textarea [(ngModel)]="item[\'result\']" style="border-width:0px;outline: none;padding-left: 16px;width: 100%;color:#0099FF;height: 100px;" placeholder="任务完成情况"></textarea>\n    </div>\n  </div>\n  </section>\n</ion-content>\n<ion-footer *ngIf="isShowbutton==true">\n  <ion-toolbar>\n    <p style="widows: 100%;" >\n      <button id="workflowStart" ion-button icon-start round style="width: 45%;position: absolute;left: 2%;"\n        (click)="addTask()">\n        <ion-icon name=\'send\'></ion-icon>\n        添加\n      </button>\n      <button id="saveBtn" ion-button outline icon-start round style="margin-left:52%;width:45%;" (click)="saveData()">\n        <ion-icon name=\'create\' is-active="false"></ion-icon>\n        保存\n      </button>\n    </p>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/zhimu/Desktop/svn/nsdc/trunk/nsdcapp/src/pages/workreport/workreport.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__["a" /* Calendar */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */]])
    ], WorkreportPage);
    return WorkreportPage;
}());

//# sourceMappingURL=workreport.js.map

/***/ })

});
//# sourceMappingURL=15.js.map