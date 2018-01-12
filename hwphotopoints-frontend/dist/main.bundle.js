webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingRoutingModule = (function () {
    function AppRoutingRoutingModule() {
    }
    return AppRoutingRoutingModule;
}());
AppRoutingRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingRoutingModule);

//# sourceMappingURL=app-routing-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_auth_login_login_component__ = __webpack_require__("../../../../../src/app/component/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_home_home_component__ = __webpack_require__("../../../../../src/app/component/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_imageupload_imageupload_component__ = __webpack_require__("../../../../../src/app/component/imageupload/imageupload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_photopoints_photopoints_component__ = __webpack_require__("../../../../../src/app/component/photopoints/photopoints.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_thumbnailsphoto_thumbnailsphoto_component__ = __webpack_require__("../../../../../src/app/component/thumbnailsphoto/thumbnailsphoto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_saplingsurvival_saplingsurvival_component__ = __webpack_require__("../../../../../src/app/component/saplingsurvival/saplingsurvival.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_longterm_longterm_component__ = __webpack_require__("../../../../../src/app/component/longterm/longterm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_auth_password_password_component__ = __webpack_require__("../../../../../src/app/component/auth/password/password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_imagedetails_imagedetails_component__ = __webpack_require__("../../../../../src/app/component/imagedetails/imagedetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_legalprivacy_legalprivacy_component__ = __webpack_require__("../../../../../src/app/component/legalprivacy/legalprivacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_auth_resetpassword_resetpassword_component__ = __webpack_require__("../../../../../src/app/component/auth/resetpassword/resetpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_updatethumbnailsphoto_updatethumbnailsphoto_component__ = __webpack_require__("../../../../../src/app/component/updatethumbnailsphoto/updatethumbnailsphoto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_batchupload_batchupload_component__ = __webpack_require__("../../../../../src/app/component/batchupload/batchupload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_batchupload_csv_batchupload_csv_component__ = __webpack_require__("../../../../../src/app/component/batchupload-csv/batchupload-csv.component.ts");
/* unused harmony export AlwaysAuthGuard */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routingcomponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 //--- ==== import for routing



//--- === conponent import for routing














var AlwaysAuthGuard = (function () {
    function AlwaysAuthGuard(router, _cookieService, sd) {
        this.router = router;
        this._cookieService = _cookieService;
        this.sd = sd;
    }
    AlwaysAuthGuard.prototype.canActivate = function () {
        var loggedinUser = this._cookieService.get("hwUserToken");
        if (loggedinUser) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AlwaysAuthGuard;
}());
AlwaysAuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_data_service__["a" /* SharedDataService */]) === "function" && _c || Object])
], AlwaysAuthGuard);

//--- === define routing path 
var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__component_auth_login_login_component__["a" /* LoginComponent */] },
    { path: 'recoverpassword', component: __WEBPACK_IMPORTED_MODULE_13__component_auth_password_password_component__["a" /* PasswordComponent */] },
    { path: 'reset/password/:key', component: __WEBPACK_IMPORTED_MODULE_16__component_auth_resetpassword_resetpassword_component__["a" /* ResetpasswordComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__component_home_home_component__["a" /* HomeComponent */], canActivate: [AlwaysAuthGuard] },
    { path: 'legalprivacy', component: __WEBPACK_IMPORTED_MODULE_15__component_legalprivacy_legalprivacy_component__["a" /* LegalPrivacyComponent */], canActivate: [AlwaysAuthGuard] },
    { path: 'imageupload', component: __WEBPACK_IMPORTED_MODULE_8__component_imageupload_imageupload_component__["a" /* ImageuploadComponent */], canActivate: [AlwaysAuthGuard] },
    { path: 'photopoints', component: __WEBPACK_IMPORTED_MODULE_9__component_photopoints_photopoints_component__["a" /* PhotopointsComponent */], canActivate: [AlwaysAuthGuard] },
    { path: 'thumbnailsphotos/:title', component: __WEBPACK_IMPORTED_MODULE_10__component_thumbnailsphoto_thumbnailsphoto_component__["a" /* ThumbnailsphotoComponent */], canActivate: [AlwaysAuthGuard] },
    { path: 'saplingsurvival', component: __WEBPACK_IMPORTED_MODULE_11__component_saplingsurvival_saplingsurvival_component__["a" /* SaplingsurvivalComponent */], canActivate: [AlwaysAuthGuard] },
    { path: 'longterm', component: __WEBPACK_IMPORTED_MODULE_12__component_longterm_longterm_component__["a" /* LongtermComponent */], canActivate: [AlwaysAuthGuard] },
    { path: 'imagedetails/:id', component: __WEBPACK_IMPORTED_MODULE_14__component_imagedetails_imagedetails_component__["a" /* ImagedetailsComponent */], canActivate: [AlwaysAuthGuard] },
    { path: 'Updatethumbnails', component: __WEBPACK_IMPORTED_MODULE_17__component_updatethumbnailsphoto_updatethumbnailsphoto_component__["a" /* UpdatethumbnailsphotoComponent */], canActivate: [AlwaysAuthGuard] },
    { path: 'batchimagesupload', component: __WEBPACK_IMPORTED_MODULE_18__component_batchupload_batchupload_component__["a" /* BatchuploadComponent */], canActivate: [AlwaysAuthGuard] },
    { path: 'batchuploadcsv', component: __WEBPACK_IMPORTED_MODULE_19__component_batchupload_csv_batchupload_csv_component__["a" /* BatchuploadCsvComponent */], canActivate: [AlwaysAuthGuard] },
    { path: 'updateimage/:id', component: __WEBPACK_IMPORTED_MODULE_17__component_updatethumbnailsphoto_updatethumbnailsphoto_component__["a" /* UpdatethumbnailsphotoComponent */], canActivate: [AlwaysAuthGuard] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__app_routing_routing_module__["a" /* AppRoutingRoutingModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
        declarations: [],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]],
        providers: [AlwaysAuthGuard]
    })
], AppRoutingModule);

//--- === export component by routingcomponent and import in app.modole.ts
var routingcomponent = [
    __WEBPACK_IMPORTED_MODULE_7__component_home_home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_6__component_auth_login_login_component__["a" /* LoginComponent */],
    __WEBPACK_IMPORTED_MODULE_13__component_auth_password_password_component__["a" /* PasswordComponent */],
    __WEBPACK_IMPORTED_MODULE_8__component_imageupload_imageupload_component__["a" /* ImageuploadComponent */],
    __WEBPACK_IMPORTED_MODULE_9__component_photopoints_photopoints_component__["a" /* PhotopointsComponent */],
    __WEBPACK_IMPORTED_MODULE_10__component_thumbnailsphoto_thumbnailsphoto_component__["a" /* ThumbnailsphotoComponent */],
    __WEBPACK_IMPORTED_MODULE_11__component_saplingsurvival_saplingsurvival_component__["a" /* SaplingsurvivalComponent */],
    __WEBPACK_IMPORTED_MODULE_12__component_longterm_longterm_component__["a" /* LongtermComponent */],
    __WEBPACK_IMPORTED_MODULE_14__component_imagedetails_imagedetails_component__["a" /* ImagedetailsComponent */],
    __WEBPACK_IMPORTED_MODULE_15__component_legalprivacy_legalprivacy_component__["a" /* LegalPrivacyComponent */],
    __WEBPACK_IMPORTED_MODULE_16__component_auth_resetpassword_resetpassword_component__["a" /* ResetpasswordComponent */],
    __WEBPACK_IMPORTED_MODULE_17__component_updatethumbnailsphoto_updatethumbnailsphoto_component__["a" /* UpdatethumbnailsphotoComponent */],
    __WEBPACK_IMPORTED_MODULE_18__component_batchupload_batchupload_component__["a" /* BatchuploadComponent */],
    __WEBPACK_IMPORTED_MODULE_19__component_batchupload_csv_batchupload_csv_component__["a" /* BatchuploadCsvComponent */]
];
var _a, _b, _c;
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-area{\n    width: 100%;\n    display: block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- === header component import === -->\n<app-new-header class=\"header-area\"></app-new-header>\n<!-- <app-header></app-header> -->\n<div class=\"body-data\">\n<router-outlet></router-outlet>\n</div>\n<app-footer class=\"footer-area\"></app-footer> "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/component/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__authguard_service__ = __webpack_require__("../../../../../src/app/authguard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_shared_header_header_component__ = __webpack_require__("../../../../../src/app/component/shared/header/header.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 //its using for form


 //---import component by app-routing module


//---=== import cookeieservice  

//--- === Shared component import



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_app_routing_module__["a" /* routingcomponent */],
            __WEBPACK_IMPORTED_MODULE_8__component_shared_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__component_shared_header_header_component__["a" /* NewHeaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_app_routing_module__["b" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__authguard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_6__shared_data_service__["a" /* SharedDataService */], __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_core__["CookieService"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/authguard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //--- ==== import for routing

var AuthGuard = (function () {
    function AuthGuard(router, _cookieService) {
        this.router = router;
        this._cookieService = _cookieService;
    }
    AuthGuard.prototype.logOut = function (error) {
        if (error.statusText == "Unauthorized") {
            this._cookieService.remove("hwUserToken", '/');
            this._cookieService.remove("userDetail", '/');
            this.router.navigate(['/login']);
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=authguard.service.js.map

/***/ }),

/***/ "../../../../../src/app/component/auth/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".checkbox input[type=checkbox]{\n    position: static;\n    margin-left: 0px;\n}\nform.ng-pristine  .form-control {\n  border: 1px solid #afaaaa!important;\n}\n.form-group.login-signup-link a {\n    color: #fff;\n}\n\n.form-control.ng-valid {\n  border: 1px solid #42A948;\nborder-left: 5px solid #42A948!important; /* green */\n}\n\n.form-control.ng-invalid:not(form)  {\n  border: 1px solid #a94442;\n    border-left: 5px solid #a94442!important; /* red */\n}\n.error{\n  padding: 12px;\n  color: red;\n}\n.loginerror {\n    color: #c30606;\n    font-size: 16px;\n}\n.login-email {\n    position: relative;\n}\n\n.login-email .fa {\n    position: absolute;\n    top: 6px;\n    right: 12px;\n    font-size: 25px;\n    margin: auto;\n    vertical-align: middle;\n    display: inline-block;\n}\n.form-control {\n    height: 40px;\n    font-size: 16px;\n    border-radius: 4px;\n    box-shadow: 0px;\n}\n.loginpage-layout {\n    background-color: #f8f8f8;\n    margin-top: 20px;\n    margin-bottom: 40px;\n    padding: 40px;\n    width: 40%;\n}\n.checkbox{\n    text-align: center;\n}\n.login-signup-link {\n    text-align: center;\n}\n.form-group.row.checkbox span {\n    vertical-align: text-bottom;\n    margin: 0 0 0 5px;\n}\n\n.login-signup-link\n .btn {\n    width: 49%;\n    font-size: 14px;\n    height: 40px;\n    border-radius: 0;\n}\n.login-signup-link:after {\n   content: \"\";\n    position: absolute;\n    top: -1px;\n    left: 0;\n    right: 0;\n    margin: auto;\n    background: #f8f8f8;\n    width: 40px;\n    border-radius: 50%;\n    height: 42px;\n    line-height: 47px;\n}\n.login-signup-link{\n    position: relative;\n\n}\n.login-signup-link a{\n    line-height: 25px;\n}\n.checkbox{\n    position: relative;\n    display: block;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n.login-title {\n    text-align: center;\n    text-transform: uppercase;\n    color: #246f24;\n    font-size: 32px;\n    font-weight: 500;\n    margin-top: 25px;\n}\n.form-group {\n    margin-bottom: 30px;\n}\n/*---===Media Query Start Here---===*/\n@media only screen and (max-width: 992px) {\n    .loginpage-layout{\n        width: 60%;\n    }\n}\n@media only screen and (max-width: 767px) {\n    .loginpage-layout{\n        width: 100%;\n    }\n    .login-signup-link\n .btn {\n    width: 49%;\n    font-size: 12px;\n\n}\n}\n@media only screen and (max-width: 370px) {\n.login-signup-link:after {\n    width: 20px;\n}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- === Login page === -->\n<div class=\"container \">\n  <h2 class=\"login-title\">{{title}}</h2>\n</div>\n<div class=\"container loginpage-layout\">\n  <!-- === Enter Email and Password for Login === -->\n\n    <form [formGroup]=\"logininfo\" (ngSubmit)=\"onSubmit(logininfo.value,logininfo.valid)\">\n      <p class=\"loginerror\">{{loginerror}}</p>\n      <div class=\"form-group login-email\">\n        <input type=\"email\" placeholder=\"email\" class=\"form-control\" id=\"email\" name=\"email\" formControlName=\"email\">\n        <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n      </div>\n      <div class=\"form-group login-password login-email\">\n        <input type=\"password\" placeholder=\"password\" class=\"form-control\" id=\"password\" name=\"password\" formControlName=\"password\">\n        <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n      </div>\n    <!-- === Remember and Forgate-Password ===-->\n      <div class=\"form-group row checkbox\">\n        <div class=\"col-xs-12\">\n         <input formcontrolname=\"sidekick\" type=\"checkbox\" ng-reflect-name=\"sidekick\" class=\"\" name=\"checkbox\"><span>Remember me</span>\n      </div>\n       \n      </div>\n    <!-- === Link For Login and Forget-Pasword === -->\n     \t<div class=\"form-group login-signup-link\">\n  \t      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!logininfo.valid\">Login</button>\n          <a class=\"btn btn-success\"  routerLink=\"/recoverpassword\">Forget Password ?</a>\n    \t</div>\n\n    </form>\n </div>"

/***/ }),

/***/ "../../../../../src/app/component/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validation_service__ = __webpack_require__("../../../../../src/app/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_service__ = __webpack_require__("../../../../../src/app/component/auth/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //--- ==== import for routing
 //its using for form
 //--=== Validation srevice import for email


var LoginComponent = (function () {
    function LoginComponent(router, _cookieService, formData, _loginservice, CmService) {
        this.router = router;
        this._cookieService = _cookieService;
        this.formData = formData;
        this._loginservice = _loginservice;
        this.CmService = CmService;
        //--=== Validation for email and password--===
        this.logininfo = formData.group({
            'email': ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validation_service__["a" /* ValidationService */].emailValidator]],
            'password': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
        });
    }
    //--- get cookiesservice data ---
    LoginComponent.prototype.getCookie = function (key) {
        return this._cookieService.get(key);
    };
    // --===submit form data --===
    LoginComponent.prototype.onSubmit = function (logininfo) {
        var _this = this;
        this.loginerror = "";
        this._loginservice.logindetails(logininfo).subscribe(function (res) {
            if (res.status) {
                console.log("user", res.user.role);
                _this._cookieService.put("hwUserToken", res.token, '/');
                var user_str = JSON.stringify(res.user);
                _this._cookieService.put("userDetail", user_str, '/');
                _this.CmService.hitLogin(false, res.user);
                _this.router.navigate(['']);
            }
            else {
                console.log("err");
                _this.loginerror = res.error;
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/component/auth/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/auth/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_data_service__["a" /* SharedDataService */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/auth/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authguard_service__ = __webpack_require__("../../../../../src/app/authguard.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginService = (function () {
    function LoginService(_http, auth) {
        this._http = _http;
        this.auth = auth;
    }
    LoginService.prototype.logindetails = function (formdata) {
        var _url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'user/login';
        return this._http.post(_url, formdata)
            .map(function (response) {
            return response.json();
        }).catch(function (error) {
            if (error.status === 401) {
                return __WEBPACK_IMPORTED_MODULE_6_rxjs__["Observable"].throw(error);
            }
        });
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__authguard_service__["a" /* AuthGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__authguard_service__["a" /* AuthGuard */]) === "function" && _b || Object])
], LoginService);

var _a, _b;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/component/auth/password/forgetpassword.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetpasswordService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgetpasswordService = (function () {
    function ForgetpasswordService(_http) {
        this._http = _http;
    }
    ForgetpasswordService.prototype.passworddetails = function (formdata) {
        var _url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'forgetpassword';
        return this._http.post(_url, formdata)
            .map(function (response) {
            return response.json();
        });
    };
    return ForgetpasswordService;
}());
ForgetpasswordService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ForgetpasswordService);

var _a;
//# sourceMappingURL=forgetpassword.service.js.map

/***/ }),

/***/ "../../../../../src/app/component/auth/password/password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-email {\n    position: relative;\n}\n\n.login-email .fa {\n    position: absolute;\n    top: 6px;\n    right: 12px;\n    font-size: 25px;\n    margin: auto;\n    vertical-align: middle;\n    display: inline-block;\n}\n.login-title {\n    text-align: center;\n    text-transform: uppercase;\n    color: #246f24;\n    font-size: 32px;\n    font-weight: 500;\n    margin-top: 35px;\n}\n.password-recover {\n    width: 50%;\n    background-color: #f8f8f8;\n    padding: 10px 30px 40px;\n    margin: 45px auto;\n}\n.password-recover p {\n    margin: 17px 0;\n    line-height: 25px;\n}\n.form-group button {\n    text-align: center;\n    margin: 15px 0 0 0;\n}\n.form-control.ng-valid {\n  border: 1px solid #42A948;\nborder-left: 5px solid #42A948!important; /* green */\n}\n\n.form-control.ng-invalid:not(form)  {\n  border: 1px solid #a94442;\n    border-left: 5px solid #a94442!important; /* red */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/auth/password/password.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- === recover-password === -->\n<div class=\"container password-recover\">\n  <h2 class=\"login-title\">{{title}}</h2>\n  <p>Enter the username or email address you used when you created your account and we will send you further instructions.\n  </p>\n<!--=== Email for recover-password ===-->\n  <form [formGroup]=\"passwordinfo\"  (ngSubmit)=\"onSubmit(passwordinfo.value,passwordinfo.valid)\">\n    <p class=\"loginerror\">{{error}}</p>\n      <p class=\"loginerror\">{{success}}</p>\n     <div class=\"form-group login-email\">\n      <input type=\"email\" placeholder=\"email\" class=\"form-control\" id=\"email\" name=\"email\" formControlName=\"email\">\n      <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n    </div>\n  <!-- === send instruction ===-->\n  \t<div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!passwordinfo.valid\"> Send instructions</button>\n  \t</div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/auth/password/password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validation_service__ = __webpack_require__("../../../../../src/app/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgetpassword_service__ = __webpack_require__("../../../../../src/app/component/auth/password/forgetpassword.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //--===its using for form
 //--=== Validation srevice import for email

var PasswordComponent = (function () {
    function PasswordComponent(forgetpassword, formData) {
        this.forgetpassword = forgetpassword;
        this.formData = formData;
        this.title = "PASSWORD RECOVERY";
        //--=== Validation for email--===
        this.passwordinfo = formData.group({
            'email': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__validation_service__["a" /* ValidationService */].emailValidator]],
        });
    }
    // --===submit data on click function --===
    PasswordComponent.prototype.onSubmit = function (passwordinfo) {
        var _this = this;
        this.error = "";
        this.success = "";
        this.forgetpassword.passworddetails(passwordinfo).subscribe(function (res) {
            if (res.status == "true") {
                _this.success = res.msg;
            }
            else {
                _this.error = res.msg;
            }
        });
    };
    return PasswordComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PasswordComponent.prototype, "title", void 0);
PasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-password',
        template: __webpack_require__("../../../../../src/app/component/auth/password/password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/auth/password/password.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__forgetpassword_service__["a" /* ForgetpasswordService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__forgetpassword_service__["a" /* ForgetpasswordService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__forgetpassword_service__["a" /* ForgetpasswordService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object])
], PasswordComponent);

var _a, _b;
//# sourceMappingURL=password.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/auth/resetpassword/resetpassword.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".checkbox input[type=checkbox]{\n    position: static;\n    margin-left: 0px;\n}\nform.ng-pristine  .form-control {\n  border: 1px solid #afaaaa!important;\n}\n.form-group.login-signup-link a {\n    color: #fff;\n}\n\n.form-control.ng-valid {\n  border: 1px solid #42A948;\nborder-left: 5px solid #42A948!important; /* green */\n}\n\n.form-control.ng-invalid:not(form)  {\n  border: 1px solid #a94442;\n    border-left: 5px solid #a94442!important; /* red */\n}\n.error{\n  padding: 12px;\n  color: red;\n}\n.loginerror {\n    color: #c30606;\n    text-transform: capitalize;\n    font-size: 16px;\n}\n.login-email {\n    position: relative;\n}\n\n.login-email .fa {\n    position: absolute;\n    top: 6px;\n    right: 12px;\n    font-size: 25px;\n    margin: auto;\n    vertical-align: middle;\n    display: inline-block;\n}\n.form-control {\n    height: 40px;\n    font-size: 16px;\n    border-radius: 4px;\n    box-shadow: 0;\n    text-transform: capitalize;\n}\n.loginpage-layout {\n    background-color: #f8f8f8;\n    margin-top: 20px;\n    margin-bottom: 40px;\n    padding: 40px;\n    width: 40%;\n}\n.checkbox{\n    text-align: center;\n}\n.login-signup-link {\n    text-align: center;\n}\n.form-group.row.checkbox span {\n    vertical-align: text-bottom;\n    margin: 0 0 0 5px;\n}\n\n.login-signup-link\n .btn {\n    width: 49%;\n    font-size: 14px;\n    height: 40px;\n    border-radius: 0;\n}\n.login-signup-link:after {\n   content: \"\";\n    position: absolute;\n    top: -1px;\n    left: 0;\n    right: 0;\n    margin: auto;\n    background: #f8f8f8;\n    width: 40px;\n    border-radius: 50%;\n    height: 42px;\n    line-height: 47px;\n}\n.login-signup-link{\n    position: relative;\n\n}\n.login-signup-link a{\n    line-height: 25px;\n}\n.checkbox{\n    position: relative;\n    display: block;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n.login-title {\n    text-align: center;\n    text-transform: uppercase;\n    color: #246f24;\n    font-size: 32px;\n    font-weight: 500;\n    margin-top: 25px;\n}\n.form-group {\n    margin-bottom: 30px;\n}\n/*---===Media Query Start Here---===*/\n@media only screen and (max-width: 992px) {\n    .loginpage-layout{\n        width: 60%;\n    }\n}\n@media only screen and (max-width: 767px) {\n    .loginpage-layout{\n        width: 100%;\n    }\n    .login-signup-link\n .btn {\n    width: 49%;\n    font-size: 12px;\n\n}\n}\n@media only screen and (max-width: 370px) {\n.login-signup-link:after {\n    width: 20px;\n}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/auth/resetpassword/resetpassword.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- === Login page === -->\n<div class=\"container \">\n  <h2 class=\"login-title\">{{title}}</h2>\n</div>\n<div class=\"container loginpage-layout\">\n  <!-- === Enter Email and Password for Login === -->\n\n      <p class=\"loginerror\">{{error}}</p>\n      <p class=\"loginerror\">{{success}}</p>\n    <form [formGroup]=\"resetinfo\" (ngSubmit)=\"onSubmit(resetinfo.value,resetinfo.valid)\" *ngIf=\"formVaidate\">\n      <div class=\"form-group login-email\">\n        <input type=\"password\" placeholder=\"Password\" class=\"form-control\" id=\"email\" name=\"password\" formControlName=\"password\">\n         <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n      </div>\n      <div class=\"form-group login-password login-email\">\n        <input type=\"password\" placeholder=\"Confirm Password\" class=\"form-control\" id=\"password\" name=\"cpassword\" formControlName=\"cpassword\">\n        <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n      </div>\n    \n    <!-- === Link For Login and Forget-Pasword === -->\n     \t<div class=\"form-group login-signup-link\">\n  \t      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!resetinfo.valid\">Submit</button>\n          <a class=\"btn btn-success\"  routerLink=\"/login\">Login</a>\n    \t</div>\n\n    </form>\n </div>"

/***/ }),

/***/ "../../../../../src/app/component/auth/resetpassword/resetpassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resetpassword_service__ = __webpack_require__("../../../../../src/app/component/auth/resetpassword/resetpassword.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //its using for form


var ResetpasswordComponent = (function () {
    function ResetpasswordComponent(route, resetpassword, formData) {
        this.route = route;
        this.resetpassword = resetpassword;
        this.formData = formData;
        this.data = [];
        this.formVaidate = true;
        this.resetinfo = formData.group({
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'cpassword': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
        });
    }
    ResetpasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.key = this.route.snapshot.params['key'];
        var URL = 'resetpassword/key/' + this.key;
        this.resetpassword.checkkey(URL).subscribe(function (res) {
            if (res.status == "false") {
                _this.error = res.msg;
                _this.formVaidate = false;
            }
            else {
                _this.formVaidate = true;
            }
        });
    };
    ResetpasswordComponent.prototype.onSubmit = function (resetinfo) {
        var _this = this;
        this.error = "";
        if (resetinfo.password == resetinfo.cpassword) {
            this.data = ({ key: this.key, password: resetinfo.password });
            var URL = "reset/password";
            this.resetpassword.resetdetails(this.data, URL).subscribe(function (res) {
                if (res.status == "true") {
                    _this.success = res.msg;
                }
                else {
                    _this.error = res.msg;
                }
            });
        }
        else {
            this.error = "Confirm password should be same as Password.";
        }
    };
    return ResetpasswordComponent;
}());
ResetpasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-resetpassword',
        template: __webpack_require__("../../../../../src/app/component/auth/resetpassword/resetpassword.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/auth/resetpassword/resetpassword.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__resetpassword_service__["a" /* ResetpasswordService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__resetpassword_service__["a" /* ResetpasswordService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__resetpassword_service__["a" /* ResetpasswordService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object])
], ResetpasswordComponent);

var _a, _b, _c;
//# sourceMappingURL=resetpassword.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/auth/resetpassword/resetpassword.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpasswordService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResetpasswordService = (function () {
    function ResetpasswordService(_http) {
        this._http = _http;
    }
    ResetpasswordService.prototype.resetdetails = function (formdata, url) {
        var _url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + url;
        return this._http.post(_url, formdata)
            .map(function (response) {
            return response.json();
        });
    };
    ResetpasswordService.prototype.checkkey = function (url) {
        var _url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + url;
        return this._http.get(_url)
            .map(function (response) {
            return response.json();
        });
    };
    return ResetpasswordService;
}());
ResetpasswordService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ResetpasswordService);

var _a;
//# sourceMappingURL=resetpassword.service.js.map

/***/ }),

/***/ "../../../../../src/app/component/batchupload-csv/batchupload-csv.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".choose-file .fa {\n    font-size: 33px;\n    border: 1px solid #246f24;\n    padding: 15px;\n    border-radius: 50%;\n    margin: 20px 0 20px 0;\n    color: #999696;\n}\n.btn {\n    padding: 11px 22px;\n    font-size: 16px;\n    border-radius: 3px;\n}\nbutton a{\n    color: #fff;\n}\nh2 {\n    font-size: 30px;\n    text-align: center;\n    margin: 40px 0 30px 0;\n    color: #246f24;\n}\n.image-upload{\n    display: none;\n     padding: 20px;\n    border: 1px solid #cfcdcd;\n    font-size: 18px;\n    color: #246f24;\n}\n.select {\n    width: 65%;\n    margin: 0 10px 20px 0;\n    outline: 0;\n    padding: 5px;\n}\n.save-cancle button {\n    margin: 0 25px 0 0;\n}\n.img-info img {\n    width: 150px;\n    vertical-align: text-top;\n}\n.img-info {\n    margin: 20px 0 0 0;\n}\nimg.loader {\n    max-width: 50px;\n}\n.form-group.form-controls {\n    max-width: 65%;\n}\n.pull-right.cancel {\n    margin: 0 20px 0 0;\n}\n.response-data span {\n    word-break: break-all;\n}\n.response-img img {\n    max-width: 300px;\n    max-height: 300px;\n}\n.uploaded-links {\n    margin-top: 20px;\n}\n.uploaded-links a {\n    color: #fff;\n    margin-right: 10px;\n}\n.batchupload {\n    margin-top: 35px;\n}\n\n.images-list li{\n    display: inline-block;\n    width: auto;\n    max-width: 250px;\n    padding:  0 20px;\n}\n\n.controls-area{\n    padding: 30px 0;\n}\n.after-upload p{\n    color: #246f24;\n    font-size: 16px;\n}\n.msg{\n    color: red;\n}\n/*.choose-file {\n\n    margin: 30px 0 0;\n}\n*/\n.batch-img {\n    margin: 60px 0 0 0;\n    \n}\n\n.photo-id {\n    text-align: center;\n}\n.btn-success, .btn-success:focus {\n    background-color: #255625;\n    border-color: #255625;\n    margin: 0 5px 0;\n    outline: 0;\n}\n.tab-btn .btn-success.active{\n    background-color: #265726;\n    color: #fff;\n}\n\n.tab-btn .btn{\n    padding: 10px 18px;\n    font-size: 14px;\n    background: #f9f9f8;\n    color: #000;\n    margin: 0;\n    border: 1px solid #fff;\n    border-radius: 0;\n}\n.after-upload{\n    margin-top: 30px;\n}\n.dwn {\n    color: green;\n    margin-left: 10px;\n    font-weight: bold;\n}\n.error{\n    color: red;\n    margin-top: 20px;\n}\n.instruction ul {\n    padding: 0;\n    list-style-type: circle;\n    margin: 0 0 30px;\n}\n.instruction h4 {\n    font-size: 16px;\n    font-weight: bold;\n}\n.tabs-section {\n    background: #efefef;\n        float: left;\n    width: 100%;\n    padding: 0 0 50px 0;\n}\n\n.tab-btn {\n    border-bottom: 2px solid #fff;\n}\n.file-show{\n    margin: 0;\n}\n#myProgress {\n  width: 100%;\n  background-color: #ddd;\n}\n\n#myBar {\n    width: 1%;\n    height: 30px;\n    background-color: #255625;\n    text-align: right;\n    color:#fff;\n    font-weight: bold;\n}\n.progress {\n    max-width: 700px;\n    margin: 0 auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/batchupload-csv/batchupload-csv.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h2>Multiple Images Upload</h2>\n\n\t<div class=\"row instruction\">\n<div class=\"col-sm-8 col-sm-offset-4\">\n\t\t<h4>Please follow these instructions for batch upload.</h4>\n\t\t<ul>\n\t\t\t<li>Select \"Choose Multiple Files\" option to upload the batch of images. </li>\n\t\t\t<li>Please click the \"Upload\" button to upload the images.</li>\n\t\t\t<li>After image upload, you will see a link to a CSV file.</li>\n\t\t\t<li>Click on the link to download and save the CSV file to your PC.</li>\n\t\t\t<li>Update the downloaded CSV with image information.</li>\n\t\t\t<li>For series enter P, S or L</li>\n\t\t\t<li>For year enter the full year e.g. 2018</li>\n\t\t\t<li>For location, enter full name e.g. P001A</li>\n\t\t\t<li>For season enter WIN, SPR, SUM or AUT</li>\n\t\t\t<li>For image type enter SIN or PAN for single or panoramic</li>\n\t\t\t<li>For view enter full description e.g. S120 or PAN001</li>\n\t\t\t<li>Click on \"Upload CSV\" button.</li>\n\t\t\t<li>Click on \"Choose CSV File\", select the CSV file with image data and then click upload.\"</li>\n\n\t\t</ul>\t\n\t</div>\t\n\t</div>\n\t<div class=\"tabs-section\">\n\t<div class=\"text-center tab-btn\">\n\t\t<button type=\"\"  class=\"btn btn-success\" [class.active]=\"thisActive\" (click)=\"activeimage('img')\">Upload Images </button>\n\t\t<button type=\"\" class=\"btn btn-success\" [class.active]=\"!thisActive\" (click)=\"activeimage('csv')\">Upload CSV</button>\t\n\t</div>\n\t<div class=\"row error text-center\">\n\t\t{{error}}\n\t</div>\n\t<div class=\"row after-upload text-center\">\n\t\t<p [innerHTML]=\"theHtmlString\"></p>\n\t</div>\n\t<div class=\"row \" *ngIf=\"imageUploded\">\n\t\t\n\t\t<form #imageinfo=\"ngForm\"  >\n\t\t\t<!-- === Multiple Images upload ===-->\n\t\t\t<div class=\"col-sm-12 photo-id form-group text-center\" *ngIf=\"thisActive\">\n\t\t\t\t<input name=\"myFile\" #fileInput class=\"image-upload\" type=\"file\" hidden (change)=\"uploadFile($event)\" ngModel accept=\"image/*\" multiple/>\n\t\t\t\t<div class=\"choose-file\">\n\t\t\t\t\t<p><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i></p>\n\t\t\t\t\t<a (click)=\"chooseFileEnable()\"  class=\"btn btn-success\">Choose Multiple Files</a>\n\t\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t<div class=\"row file-show\">\n\t\t\t<ul class=\"images-list\">\n\t\t\t\t<li *ngFor=\"let image of imagesList; let i = index\">\n\t\t\t\t\t<img [src]=\"image\">\n\t\t\t\t\t<p>{{imagesName[i]}}</p>\n\t\t\t\t</li>\n\t\t\t</ul>\t\t\t\t\t\t\n\t\t</div>\n\n\t\t<!-- ==loaging img== -->\n\t\t<div class=\"progress\" *ngIf=\"progressStatus\">\n\t\t\t<div id=\"myProgress\">\n\t\t\t  <div id=\"myBar\" [style.width]=\"progressingWidth\">{{progressingWidth}}</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group form-controls text-center controls-area\">\n\t\t\t<!-- <img class=\"loader\" src=\"../../../assets/images/loader.gif\" *ngIf=\"loadingimg\"> -->\n\t\t\t<!-- === Button for save and cancle the process === -->\n\t\t\t<button [disabled]=\"disabledButton\"  (click)=\"onSubmit(imageinfo.value)\" type=\"submit\" class=\"btn btn-success pull-right\" *ngIf=\"formSubmit\">Upload</button>\n\t\t\t<button type=\"\" (click)=\"flushSelectedData()\" class=\"btn btn-success pull-right cancel\"  *ngIf=\"imageUplodedStatus\">Cancel</button>\n\t\t</div>\n\t</form>\n\t\n\t</div>\n\t<div *ngIf=\"csvUploded\">\n\t\t<form #csvinfo=\"ngForm\"   >\n\t\t\t\n\t\t\t<!-- ===CSV File upload===-->\n\t\t\t<div class=\"col-sm-12 form-group photo-id text-center\">\n\t\t\t\t<input name=\"myFile\" #CsvfileInput class=\"image-upload\" type=\"file\" hidden (change)=\"uploadCsvFile($event)\" ngModel accept=\".csv\"/>\n\t\t\t\t\t<div class=\"choose-file\">\n\t\t\t\t\t\t<p><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i></p>\n\t\t\t\t\t\t<a (click)=\"choosecsvEnable()\"  class=\"btn btn-success\">Choose CSV File</a>\n\t\t\t\t\t\t<div class=\"img-info\">\n\t\t\t\t\t\t\t<p>{{CsvName}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"progress\" *ngIf=\"progressStatus\">\n\t\t\t\t\t\t<div id=\"myProgress\">\n\t\t\t\t\t\t  <div id=\"myBar\" [style.width]=\"progressingWidth\">{{progressingWidth}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- ==loaging img== -->\n\t\t\t<div class=\"form-group form-controls text-center controls-area\">\n\t\t\t\t<!-- <img class=\"loader\" src=\"../../../assets/images/loader.gif\" *ngIf=\"loadingimg\"> -->\n\t\t\t\t<!-- === Button for save and cancle the process === -->\n\t\t\t\t<button [disabled]=\"disabledButton\" type=\"submit\" class=\"btn btn-success pull-right\" *ngIf=\"formSubmit\" (click)=\"onCsvSubmit(csvinfo.value)\">Upload</button>\n\t\t\t\t<button type=\"\" (click)=\"flushSelectedData()\" class=\"btn btn-success pull-right cancel\"  *ngIf=\"imageUplodedStatus\">Cancel</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/batchupload-csv/batchupload-csv.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__batchupload_csv_service__ = __webpack_require__("../../../../../src/app/component/batchupload-csv/batchupload-csv.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatchuploadCsvComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BatchuploadCsvComponent = (function () {
    // ---constructor--
    function BatchuploadCsvComponent(Batchupload) {
        this.Batchupload = Batchupload;
        this.formData = [];
        this.csvformData = [];
        this.fileUrl = "";
        this.imageName = "";
        this.imagesList = [];
        this.imagesName = [];
        this.imageUploded = true;
        this.csvUploded = false;
        this.imageUplodedStatus = false;
        this.disabledButton = false;
        this.formSubmit = false;
        this.loadingimg = false;
        this.formData = new FormData();
        this.csvformData = new FormData();
        this.CsvUploaded = false;
        this.ImageUploaded = false;
        this.thisActive = true;
        this.progressingWidth = "2%";
        this.progressingWidthCount = 2;
    }
    BatchuploadCsvComponent.prototype.chooseFileEnable = function () {
        this.fileInput.nativeElement.click();
    };
    BatchuploadCsvComponent.prototype.choosecsvEnable = function () {
        this.CsvfileInput.nativeElement.click();
    };
    BatchuploadCsvComponent.prototype.ngOnInit = function () {
        this.backendUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].endpoint + "csv-example.csv";
    };
    BatchuploadCsvComponent.prototype.activeimage = function (area) {
        this.theHtmlString = "";
        this.error = "";
        if (area == 'img') {
            this.imageUploded = true;
            this.csvUploded = false;
            this.thisActive = true;
        }
        else {
            this.imageUploded = false;
            this.csvUploded = true;
            this.thisActive = false;
        }
    };
    // --===upload multiple file--===
    BatchuploadCsvComponent.prototype.uploadFile = function (event) {
        var _this = this;
        //   this.formData.delete("fileIndex[]");
        this.formData = new FormData();
        this.imagesList = [];
        this.imagesName = [];
        var element = event.target;
        this.imagesList = [];
        var fileList = event.target.files;
        if (fileList.length > 20) {
            this.message = "Please select maximum 20 images.";
            return false;
        }
        var fileIndex = [];
        var _loop_1 = function (i) {
            var reader = new FileReader();
            reader.onload = function (e) {
                _this.imagesList.push(e.target.result);
                _this.imagesName.push(element.files[i].name);
            };
            var file = fileList[i];
            var bytes = event.target.files[i].size;
            if (bytes < 20000000) {
                this_1.formData.append('fileIndex[]', file);
                reader.readAsDataURL(event.target.files[i]); //---=== this function used for show upload image---
            }
            else {
                this_1.error = element.files[i].name + " image size is greater than 20MB, please select a smaller image size.";
            }
        };
        var this_1 = this;
        for (var i = 0; i < fileList.length; i++) {
            _loop_1(i);
        }
        this.ImageUploaded = true;
        if (this.ImageUploaded) {
            this.disabledButton = false;
            this.formSubmit = true;
        }
        this.imageUplodedStatus = true;
    };
    // ---== Submit all images---===
    BatchuploadCsvComponent.prototype.progressbar = function () {
        this.progressingWidthCount = this.progressingWidthCount + Math.floor(Math.random() * 3) + 1;
        if (this.progressingWidthCount < 95) {
            this.progressingWidth = this.progressingWidthCount + "%";
        }
        else {
            clearInterval(this.progressing);
        }
    };
    BatchuploadCsvComponent.prototype.onSubmit = function () {
        var _this = this;
        this.message = "";
        this.error = "";
        this.disabledButton = true;
        this.loadingimg = true;
        this.progressStatus = true;
        this.progressingWidthCount = 2;
        this.progressingWidth = "2%";
        this.progressing = setInterval(function () { _this.progressbar(); }, 1000);
        this.Batchupload.getInfo(this.formData, 'uploadbatchdata').subscribe(function (res) {
            clearInterval(_this.progressing);
            _this.progressingWidth = "100%";
            _this.progressStatus = false;
            if (res.status == 'true') {
                _this.loadingimg = false;
                //var down = res.msg+"Please download this csv file and update it with series information "+"<a class='dwn' style='font-weight:bold;color:#246f24' href='"+res.url+"' download >Click here to download</a>";
                var down = res.msg + " Please download this csv file and update it with series information. " + "<a class='dwn' style='font-weight:bold;color:#246f24' href='" + res.url + "' download >Click here to download</a>";
                _this.theHtmlString = down;
                _this.imageUploded = false;
                _this.csvUploded = false;
                _this.formData.delete("fileIndex[]");
                _this.imagesList = [];
                _this.formSubmit = false;
            }
            else {
                _this.loadingimg = false;
                _this.error = res.msg;
                _this.disabledButton = false;
            }
        });
    };
    // --===CSV file upload--===
    BatchuploadCsvComponent.prototype.uploadCsvFile = function (csvevent) {
        this.csvformData = new FormData();
        var fileList = csvevent.target.files;
        var file = fileList[0];
        this.csvformData.append('csv', file);
        var element = csvevent.target;
        this.CsvName = element.files[0].name;
        this.disabledButton = false;
        this.formSubmit = true;
        this.imageUplodedStatus = true;
    };
    BatchuploadCsvComponent.prototype.onCsvSubmit = function () {
        var _this = this;
        this.message = "";
        this.error = "";
        this.disabledButton = true;
        this.loadingimg = true;
        this.progressStatus = true;
        this.progressingWidthCount = 2;
        this.progressingWidth = "2%";
        this.progressing = setInterval(function () { _this.progressbar(); }, 1000);
        this.Batchupload.getInfo(this.csvformData, 'uploadcsvbatchdata').subscribe(function (res) {
            clearInterval(_this.progressing);
            _this.progressingWidth = "100%";
            _this.progressStatus = false;
            if (res.status == 'true') {
                _this.loadingimg = false;
                _this.theHtmlString = res.msg;
                _this.csvUploded = false;
                _this.csvformData.delete('csv');
                _this.CsvName = "";
            }
            else {
                _this.loadingimg = false;
                _this.error = res.msg;
                _this.disabledButton = false;
            }
        });
    };
    BatchuploadCsvComponent.prototype.flushSelectedData = function () {
        this.formData = new FormData();
        this.csvformData = new FormData();
        this.imagesList = [];
        this.CsvName = "";
    };
    return BatchuploadCsvComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], BatchuploadCsvComponent.prototype, "fileInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('CsvfileInput'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], BatchuploadCsvComponent.prototype, "CsvfileInput", void 0);
BatchuploadCsvComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-batchupload-csv',
        template: __webpack_require__("../../../../../src/app/component/batchupload-csv/batchupload-csv.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/batchupload-csv/batchupload-csv.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__batchupload_csv_service__["a" /* BatchuploadCsvService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__batchupload_csv_service__["a" /* BatchuploadCsvService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__batchupload_csv_service__["a" /* BatchuploadCsvService */]) === "function" && _c || Object])
], BatchuploadCsvComponent);

var _a, _b, _c;
//# sourceMappingURL=batchupload-csv.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/batchupload-csv/batchupload-csv.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authguard_service__ = __webpack_require__("../../../../../src/app/authguard.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatchuploadCsvService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BatchuploadCsvService = (function () {
    function BatchuploadCsvService(_http, _cookieService, auth) {
        this._http = _http;
        this._cookieService = _cookieService;
        this.auth = auth;
    }
    // --- === upload image save in database (note:pass perameter with type)---
    BatchuploadCsvService.prototype.getInfo = function (formdata, url) {
        var _this = this;
        var token = this._cookieService.get("hwUserToken");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
                'Accept': 'application/json',
                'Authorization': 'Bearer' + token,
            })
        });
        var _url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + url;
        return this._http.post(_url, formdata, options)
            .map(function (response) {
            return response.json();
        }).catch(function (error) {
            if (error.status === 401) {
                _this.auth.logOut(error);
            }
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error);
        });
    };
    return BatchuploadCsvService;
}());
BatchuploadCsvService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__authguard_service__["a" /* AuthGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__authguard_service__["a" /* AuthGuard */]) === "function" && _c || Object])
], BatchuploadCsvService);

var _a, _b, _c;
//# sourceMappingURL=batchupload-csv.service.js.map

/***/ }),

/***/ "../../../../../src/app/component/batchupload/batchupload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".choose-file .fa {\n    font-size: 33px;\n    border: 1px solid #246f24;\n    padding: 15px;\n    border-radius: 50%;\n    margin: 0 0 28px 0;\n    color: #999696;\n}\n.btn {\n    padding: 11px 22px;\n    font-size: 16px;\n    border-radius: 3px;\n}\nbutton a{\n    color: #fff;\n}\nh2 {\n    font-size: 30px;\n    text-align: center;\n    margin: 40px 0 50px 0;\n    color: #246f24;\n}\n.image-upload{\n    display: none;\n     padding: 20px;\n    border: 1px solid #cfcdcd;\n    font-size: 18px;\n    color: #246f24;\n}\n.select {\n    width: 65%;\n    margin: 0 10px 20px 0;\n    outline: 0;\n    padding: 5px;\n}\n.save-cancle button {\n    margin: 0 25px 0 0;\n}\n.img-info img {\n    width: 150px;\n    vertical-align: text-top;\n}\n.img-info {\n    margin: 20px 0 0 0;\n}\nimg.loader {\n    max-width: 50px;\n}\n.form-group.form-controls {\n    max-width: 65%;\n}\n.pull-right.cancel {\n    margin: 0 20px 0 0;\n}\n.response-data span {\n    word-break: break-all;\n}\n.response-img img {\n    max-width: 300px;\n    max-height: 300px;\n}\n.uploaded-links {\n    margin-top: 20px;\n}\n.uploaded-links a {\n    color: #fff;\n    margin-right: 10px;\n}\n.batchupload {\n    margin-top: 35px;\n}\n\n.images-list li{\n    display: inline-block;\n    width: auto;\n    max-width: 250px;\n    padding:  0 20px;\n}\n\n.controls-area{\n    padding: 30px 0;\n}\n.after-upload p{\n    color: #246f24;\n    font-size: 16px;\n}\n.msg{\n    color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/batchupload/batchupload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h2>Multiple Images Upload</h2>\n\t<div class=\"row\" *ngIf=\"!imageUploded\">\n\t\t<p class=\"text-center msg\">{{message}}</p>\n\t\t<form #imageinfo=\"ngForm\"  (ngSubmit)=\"onSubmit(imageinfo.value)\" >\n\t\t\t<!-- === Multiple Images upload ===-->\n\t\t\t<div class=\"col-sm-6 photo-id form-group text-center\">\n\t\t\t\t<input name=\"myFile\" #fileInput class=\"image-upload\" type=\"file\" hidden (change)=\"uploadFile($event)\" ngModel accept=\"image/*\" multiple/>\n\t\t\t\t<div class=\"choose-file\">\n\t\t\t\t\t<p><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i></p>\n\t\t\t\t\t<a (click)=\"chooseFileEnable()\"  class=\"btn btn-success\">Choose Multiple File</a>\n\t\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t<!-- ===CSV File upload===-->\n\t\t<div class=\"col-sm-6 form-group photo-id text-center\">\n\t\t\t<input name=\"myFile\" #CsvfileInput class=\"image-upload\" type=\"file\" hidden (change)=\"uploadCsvFile($event)\" ngModel accept=\".csv\"/>\n\t\t\t\t<div class=\"choose-file\">\n\t\t\t\t\t<p><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i></p>\n\t\t\t\t\t<a (click)=\"choosecsvEnable()\"  class=\"btn btn-success\">Choose CSV File</a>\n\t\t\t\t\t<div class=\"img-info\">\n\t\t\t\t\t\t<img [src]=\"CsvFile\">\n\t\t\t\t\t\t<p>{{CsvName}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<ul class=\"images-list\">\n\t\t\t\t<li *ngFor=\"let image of imagesList; let i = index\">\n\t\t\t\t\t<img [src]=\"image\">\n\t\t\t\t\t<p>{{imagesName[i]}}</p>\n\t\t\t\t</li>\n\t\t\t</ul>\t\t\t\t\t\t\n\t\t</div>\n\n\t\t<!-- ==loaging img== -->\n\t\t<div class=\"form-group form-controls text-center controls-area\">\n\t\t\t<img class=\"loader\" src=\"../../../assets/images/loader.gif\" *ngIf=\"loadingimg\">\n\t\t\t<!-- === Button for save and cancle the process === -->\n\t\t\t<button [disabled]=\"disabledButton\" type=\"submit\" class=\"btn btn-success pull-right\" *ngIf=\"formSubmit\">save</button>\n\t\t\t<button type=\"\" (click)=\"flushSelectedData()\" class=\"btn btn-success pull-right cancel\"  *ngIf=\"imageUplodedStatus\">cancel</button>\n\t\t</div>\n\t</form>\n\t</div>\n\t<div class=\"row after-upload text-center\" *ngIf=\"imageUploded\">\n\t\t<p>{{message}}</p>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/batchupload/batchupload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__batchupload_service__ = __webpack_require__("../../../../../src/app/component/batchupload/batchupload.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatchuploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BatchuploadComponent = (function () {
    // ---constructor--
    function BatchuploadComponent(Batchupload) {
        this.Batchupload = Batchupload;
        this.formData = [];
        this.imageinfo = [];
        this.fileUrl = "";
        this.imageName = "";
        this.imagesList = [];
        this.imagesName = [];
        this.imageUploded = false;
        this.imageUplodedStatus = false;
        this.disabledButton = false;
        this.formSubmit = false;
        this.loadingimg = false;
        this.formData = new FormData();
        this.CsvUploaded = false;
        this.ImageUploaded = false;
    }
    BatchuploadComponent.prototype.chooseFileEnable = function () {
        this.fileInput.nativeElement.click();
    };
    BatchuploadComponent.prototype.choosecsvEnable = function () {
        this.CsvfileInput.nativeElement.click();
    };
    BatchuploadComponent.prototype.ngOnInit = function () {
    };
    // --===upload multiple file--===
    BatchuploadComponent.prototype.uploadFile = function (event) {
        var _this = this;
        this.imagesList = [];
        var fileList = event.target.files;
        if (fileList.length > 20) {
            this.message = "Please select maximum 20 images.";
            return false;
        }
        var fileIndex = [];
        for (var i = 0; i < fileList.length; i++) {
            var reader = new FileReader();
            reader.onload = function (e) {
                _this.imagesList.push(e.target.result);
            };
            var file = fileList[i];
            var bytes = event.target.files[i].size;
            console.log(bytes);
            if (bytes < 20000000) {
                this.formData.append('fileIndex[]', file);
                reader.readAsDataURL(event.target.files[i]); //---=== this function used for show upload image---
                var element = event.target;
                this.imagesName.push(element.files[i].name);
            }
            else {
                this.message = "Image size is greater than 20MB, please select image size less than it.";
            }
        }
        this.ImageUploaded = true;
        if (this.CsvUploaded && this.ImageUploaded) {
            this.disabledButton = false;
            this.formSubmit = true;
        }
        this.imageUplodedStatus = true;
    };
    // --===CSV file upload--===
    BatchuploadComponent.prototype.uploadCsvFile = function (csvevent) {
        var fileList = csvevent.target.files;
        var file = fileList[0];
        this.formData.append('csv', file);
        var element = csvevent.target;
        this.CsvName = element.files[0].name;
        this.CsvUploaded = true;
        if (this.CsvUploaded && this.ImageUploaded) {
            this.disabledButton = false;
            this.formSubmit = true;
        }
        this.imageUplodedStatus = true;
    };
    BatchuploadComponent.prototype.flushSelectedData = function () {
        this.formData.delete("fileIndex[]");
        this.formData.delete('csv');
        this.imagesList = [];
        this.CsvName = "";
    };
    // ---== Submit all images---===
    BatchuploadComponent.prototype.onSubmit = function () {
        var _this = this;
        this.message = "";
        this.error = "";
        this.disabledButton = true;
        this.loadingimg = true;
        this.Batchupload.getInfo(this.formData, 'uploadbatchdata').subscribe(function (res) {
            if (res.status == 'true') {
                _this.loadingimg = false;
                _this.message = res.msg;
                _this.imageUploded = true;
            }
            else {
                _this.loadingimg = false;
                _this.error = res.msg;
            }
        });
    };
    return BatchuploadComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], BatchuploadComponent.prototype, "fileInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('CsvfileInput'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], BatchuploadComponent.prototype, "CsvfileInput", void 0);
BatchuploadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-batchupload',
        template: __webpack_require__("../../../../../src/app/component/batchupload/batchupload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/batchupload/batchupload.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__batchupload_service__["a" /* BatchuploadService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__batchupload_service__["a" /* BatchuploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__batchupload_service__["a" /* BatchuploadService */]) === "function" && _c || Object])
], BatchuploadComponent);

var _a, _b, _c;
//# sourceMappingURL=batchupload.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/batchupload/batchupload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authguard_service__ = __webpack_require__("../../../../../src/app/authguard.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatchuploadService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BatchuploadService = (function () {
    function BatchuploadService(_http, _cookieService, auth) {
        this._http = _http;
        this._cookieService = _cookieService;
        this.auth = auth;
    }
    // --- === upload image save in database (note:pass perameter with type)---
    BatchuploadService.prototype.getInfo = function (formdata, url) {
        var _this = this;
        var token = this._cookieService.get("hwUserToken");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
                'Accept': 'application/json',
                'Authorization': 'Bearer' + token,
            })
        });
        var _url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + url;
        return this._http.post(_url, formdata, options)
            .map(function (response) {
            return response.json();
        }).catch(function (error) {
            if (error.status === 401) {
                _this.auth.logOut(error);
            }
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error);
        });
    };
    return BatchuploadService;
}());
BatchuploadService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__authguard_service__["a" /* AuthGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__authguard_service__["a" /* AuthGuard */]) === "function" && _c || Object])
], BatchuploadService);

var _a, _b, _c;
//# sourceMappingURL=batchupload.service.js.map

/***/ }),

/***/ "../../../../../src/app/component/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".series{\n\tmargin: 20px 0 20px 0;\n}\n.series li {\n    padding: 7px 0;\n}\n\n.series .fa {\n    font-size: 15px;\n    color: #246f24;\n    margin-right: 5px;\n}\n.series span, .map-img {\n    font-size: 18px;\n    font-weight: 600;\n}\n.home-title {\n    font-size: 32px;\n    color: #246f24;\n    text-transform: capitalize;\n    margin: 40px 0 15px 0;\n}\n#test h2{\n    font-size: 32px;\n    color: #246f24;\n    text-transform: capitalize;\n    margin: 40px 0 15px 0;\n}\np {\n    line-height: 26px;\n}\n h3 {\n    font-size: 22px;\n    font-weight: normal;\n    color: #246f24;\n}\n.photopoints-map {\n    margin-top: 25px;\n}\n\n@media only screen and (max-width: 767px) {\n    .home-title{\n        font-size: 25px;\n    }\n    .photopoints-map{\n        margin-top: 0;\n    }\n}\n@media only screen and (max-width: 420px) {\n\n    .home-title {\n        font-size: 22px;\n    }\n    h3 {\n        font-size: 22px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"container\"  [innerHTML]=\"temp\">\n\t \n</div> \n"

/***/ }),

/***/ "../../../../../src/app/component/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__("../../../../../src/app/component/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(_homeservice, serve, _sanitizer) {
        this._homeservice = _homeservice;
        this.serve = serve;
        this._sanitizer = _sanitizer;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.serve.hitLogin(false);
        this._homeservice.gethomedata()
            .subscribe(function (res) {
            _this.pageContent = res;
            console.log(_this._sanitizer.bypassSecurityTrustHtml(_this.pageContent.data.description));
            _this.temp = _this._sanitizer.bypassSecurityTrustHtml(_this.pageContent.data.description);
        }, function (error) {
            console.log(error);
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/component/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/home/home.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* SharedDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/home/home.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authguard_service__ = __webpack_require__("../../../../../src/app/authguard.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomeService = (function () {
    function HomeService(_http, _cookieService, auth) {
        this._http = _http;
        this._cookieService = _cookieService;
        this.auth = auth;
    }
    HomeService.prototype.gethomedata = function () {
        var _this = this;
        var token = this._cookieService.get("hwUserToken");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
                'Accept': 'application/json',
                'Authorization': 'Bearer' + token,
            })
        });
        var _url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + "page/1";
        return this._http.get(_url, options)
            .map(function (response) {
            return response.json();
        }).catch(function (error) {
            if (error.status === 401) {
                _this.auth.logOut(error);
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error);
        });
    };
    return HomeService;
}());
HomeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_core__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__authguard_service__["a" /* AuthGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__authguard_service__["a" /* AuthGuard */]) === "function" && _c || Object])
], HomeService);

var _a, _b, _c;
//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ "../../../../../src/app/component/imagedetails/imagedetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n    font-size: 32px;\n    text-align: center;\n    margin: 30px 0 40px 0;\n    color: #246f24;\n}\n.row.imagedawnload p {\n    font-weight: bold;\n    font-size: 18px;\n}\n\n.row.imagedawnload {\n    margin-bottom: 20px;\n}\n\n.row.imagedawnload a {\n    color: #246f24;\n    font-size: 16px;\n}\n\n.row.imagedawnload a{\n    margin-right: 9px;\n    border-right: 2px solid #246f24;\n    padding-right: 10px;\n}\n.row.imagedawnload a:last-child {\n    border-right: 0;\n}\n\n.row.imagedawnload a:hover {\n    color: #000;\n}\n.row.imagedetails {\n    margin-top: 25px;\n    margin-bottom: 20px;\n}\n.row.imagedetails a {\n    color: #246f24;\n    font-size: 17px;\n}\n.row.imagedetails ul li {\n    line-height: 28px;\n}\n@media only screen and (max-width: 767px) {\n\n    h2{\n        font-size: 30;\n        margin: 20px 0;\n    }\n    .imagedawnload .col-xs-12 {\n        text-align: center; \n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/imagedetails/imagedetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"thumbpoints-title\">{{title}}</h2>\n  <div class=\"row imagedawnload\">\n\t\t<div class=\"col-xs-12 col-sm-4 \" *ngIf=\"imageView\">  \n\t\t\t<p>{{imageName}}</p> \n\t\t</div>\n\t <!-- === Delete and dawnload image link ===-->\n\t\t<div class=\"col-xs-12 col-sm-8 text-right\" *ngIf=\"imageView\"> \n\t\t\t<a *ngIf=\"userPermissions\" routerLink=\"/updateimage/{{imageId}}\" >Edit Image</a> \n\t\t\t\n\t\t\t<a *ngIf=\"userPermissions\" (click)=\"deleteImage()\">Delete Image</a> \n\n\t\t\t<a target=\"_blank\" href=\"{{imageUrl}}\" download=\"{{imageUrl}}\">\n\t\t    Download Image</a>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\" class=\"message\" *ngIf=\"Message\">\n\t\t<div class=\"col-xs-12\">  \n\t\t\t<h3>{{Message}}</h3>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\" *ngIf=\"imageView\">\n\t\t<img src=\"{{imageUrl}}\" />\n\t</div>\n\n\t<!-- === Image detail info ===-->\n\t  <div class=\"row imagedetails\" *ngIf=\"imageView\">\n\t\t<div class=\"col-xs-6\">  \n\t\t\t<a  (click)=\"showExifdata()\" >Show Exif Data</a> \n\t\t\t<ul *ngIf=\"exifData\">\n\t\t  \t\t<li *ngFor=\"let data of exifArray;\">\n\t\t  \t\t\t {{data.key}} : {{data.val}}\n\t\t  \t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"col-xs-6\">  \n\t\t  \t<a  (click)=\"showFiledata()\" >Show File Data</a> \n\t\t  \t<ul *ngIf=\"fileData\">\n\t\t\t\t<li><strong>Uploaded By:</strong> {{allFileData.uploaded_by}}</li>\n\t\t  \t\t<li><strong>ID:</strong> {{allFileData.id}}</li>\n\t\t\t\t<li><strong>File Name:</strong> {{allFileData.file_name}}</li>\n\t\t\t\t<li><strong>Original Image Location:</strong> {{allFileData.file_location_aws}}</li>\n\t\t\t\t<li><strong>Thumb Image Location:</strong> {{allFileData.file_thumb_location_aws}}</li>\n\t\t\t\t<li><strong>Series:</strong> {{allFileData.series}}</li>\n\t\t\t\t<li><strong>Post Name:</strong> {{allFileData.post_name}}</li>\n\t\t\t\t<li><strong>Year:</strong> {{allFileData.year}}</li>\n\t\t\t\t<li><strong>Season: </strong>{{allFileData.season}}</li>\n\t\t\t\t<li><strong>Image View:</strong> {{allFileData.image_view}}</li>\n\t\t\t\t<li><strong>Views:</strong> {{allFileData.views}}</li>\n\t\t\t\t<li><strong>Uploaded Date:</strong> {{allFileData.uploading_date}}</li>\n\t\t\t\t\n\t\t  \t</ul>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/imagedetails/imagedetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imagedetails_service__ = __webpack_require__("../../../../../src/app/component/imagedetails/imagedetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagedetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImagedetailsComponent = (function () {
    function ImagedetailsComponent(route, imageDetail, CMService) {
        this.route = route;
        this.imageDetail = imageDetail;
        this.CMService = CMService;
        this.title = "View Image"; //--- ===create input for title 
        this.imageId = 0;
        this.imageName = "Loading";
        this.imageUrl = "";
        this.Message = "";
        this.allFileData = [];
        this.exifArray = [];
        this.userPermissions = true;
        this.exifData = false;
        this.fileData = false;
        this.imageView = true;
        console.log(CMService.currentUser.role);
        if (CMService.currentUser.role == "visitor") {
            this.userPermissions = false;
        }
    }
    ImagedetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imageId = this.route.snapshot.params['id'];
        var URL = 'imagedetail/' + this.imageId;
        this.imageDetail.getImageInfo(URL).subscribe(function (res) {
            if (res.status == "true") {
                _this.allFileData = res.mediaInfo;
                var mediaInfo = res.mediaInfo;
                if (mediaInfo.image_view) {
                    _this.imageName = mediaInfo.year + '-' + mediaInfo.season + '-' + mediaInfo.series + '-' + mediaInfo.post_name + '-' + mediaInfo.image_view + '-' + mediaInfo.views;
                }
                else {
                    _this.imageName = mediaInfo.year + '-' + mediaInfo.series + '-' + mediaInfo.post_name;
                }
                _this.imageId = mediaInfo.id;
                _this.imageUrl = mediaInfo.file_location_aws;
                var url = 'http://wphackstop.com/exif.php?imageurl=' + _this.imageUrl;
                _this.imageDetail.getExifInfo(url).subscribe(function (result) {
                    _this.exifArray = result;
                });
            }
            else {
                _this.imageView = false;
                _this.Message = res.msg;
                _this.imageName = "";
                _this.imageId = 0;
            }
        });
    };
    // ---=== Delete image ---===
    ImagedetailsComponent.prototype.deleteImage = function () {
        var _this = this;
        if (this.imageId != 0) {
            if (confirm("Are you sure you want to delete this?")) {
                this.imageDetail.getImageInfo('deletemedia/' + this.imageId).subscribe(function (res) {
                    if (res.status == "true") {
                        _this.imageView = false;
                        _this.Message = res.msg;
                    }
                    else {
                        _this.Message = res.msg;
                    }
                });
            }
            else {
                return false;
            }
        }
    };
    // ---=== Show Image data ---=== 
    ImagedetailsComponent.prototype.showExifdata = function () {
        this.exifData = true;
        this.fileData = false;
    };
    ImagedetailsComponent.prototype.showFiledata = function () {
        this.fileData = true;
        this.exifData = false;
    };
    return ImagedetailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ImagedetailsComponent.prototype, "title", void 0);
ImagedetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-imagedetails',
        template: __webpack_require__("../../../../../src/app/component/imagedetails/imagedetails.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/imagedetails/imagedetails.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__imagedetails_service__["a" /* ImageDetailService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__imagedetails_service__["a" /* ImageDetailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__imagedetails_service__["a" /* ImageDetailService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* SharedDataService */]) === "function" && _c || Object])
], ImagedetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=imagedetails.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/imagedetails/imagedetails.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authguard_service__ = __webpack_require__("../../../../../src/app/authguard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageDetailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ImageDetailService = (function () {
    function ImageDetailService(_http, _cookieService, auth) {
        this._http = _http;
        this._cookieService = _cookieService;
        this.auth = auth;
    }
    // --- === upload image save in database (note:pass perameter with type)---
    ImageDetailService.prototype.getImageInfo = function (url) {
        var _this = this;
        var token = this._cookieService.get("hwUserToken");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
                'Accept': 'application/json',
                'Authorization': 'Bearer' + token
            })
        });
        var _url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + url;
        return this._http.get(_url, options)
            .map(function (response) {
            console.log(response.status, "st");
            return response.json();
        }).catch(function (error) {
            if (error.status === 401) {
                _this.auth.logOut(error);
            }
            return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(error);
        });
    };
    ImageDetailService.prototype.getExifInfo = function (url) {
        return this._http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    return ImageDetailService;
}());
ImageDetailService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__authguard_service__["a" /* AuthGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__authguard_service__["a" /* AuthGuard */]) === "function" && _c || Object])
], ImageDetailService);

var _a, _b, _c;
//# sourceMappingURL=imagedetails.service.js.map

/***/ }),

/***/ "../../../../../src/app/component/imageupload/imageupload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".choose-file .fa {\n    font-size: 33px;\n    border: 1px solid #246f24;\n    padding: 15px;\n    border-radius: 50%;\n    margin: 0 0 28px 0;\n    color: #999696;\n}\n.btn {\n    padding: 11px 22px;\n    font-size: 16px;\n    border-radius: 3px;\n}\nbutton a{\n    color: #fff;\n}\nh2 {\n    font-size: 30px;\n    text-align: center;\n    margin: 40px 0 50px 0;\n    color: #246f24;\n}\n.image-upload{\n    display: none;\n     padding: 20px;\n    border: 1px solid #cfcdcd;\n    font-size: 18px;\n    color: #246f24;\n}\n.select {\n    width: 65%;\n    margin: 0 10px 20px 0;\n    outline: 0;\n    padding: 5px;\n}\n.save-cancle button {\n    margin: 0 25px 0 0;\n}\n.img-info img {\n    width: 150px;\n    vertical-align: text-top;\n}\n.img-info {\n    margin: 20px 0 0 0;\n}\nimg.loader {\n    max-width: 50px;\n}\n.form-group.form-controls {\n    max-width: 65%;\n}\n.pull-right.cancel {\n    margin: 0 20px 0 0;\n}\n.response-data span {\n    word-break: break-all;\n}\n.response-img img {\n    max-width: 300px;\n    max-height: 300px;\n}\n.uploaded-links {\n    margin-top: 20px;\n}\n.uploaded-links a {\n    color: #fff;\n    margin-right: 10px;\n}\n.batchupload {\n    margin-top: 35px;\n}\n.msg{\n    color: red;\n}\n/*---=== Media Query Start Here ---===*/\n@media only screen and (max-width: 992px) {\n    .imgselectoption .btn{\n        padding: 6px 10px;\n        font-size: 14px;\n    }\n}\n\n@media only screen and (max-width: 767px) {\n    .imgselectoption {\n        text-align: center;\n        margin-top: 25px;\n    }\n    h2{\n        margin: 20px 0;\n    }\n}\n\n@media only screen and (max-width: 420px) {\n    .select{\n    width: 100%;\n    margin: 0 10px 20px 0;\n}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/imageupload/imageupload.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n\t<div class=\"row\" *ngIf=\"userPermissions\">\n\t\t<div class=\"col-sm-8\">\n\t\t<h2>Image Upload</h2>\n\t\t</div>\n\t\t<!-- <div class=\"col-sm-2 text-right\" >\n\t\t\t<a class=\"btn btn-success  batchupload\" routerLink=\"/batchimagesupload\" >Batch Upload</a>\n\t\t</div> -->\n\t\t<div class=\"col-sm-2 text-right\" >\n\t\t\t<a class=\"btn btn-success  batchupload\" routerLink=\"/batchuploadcsv\" >Batch Upload</a>\n\t\t</div>\n\t</div>\n\t\n\t<div class=\"row\" *ngIf=\"!imageUploded\">\n\t\t<p class=\"text-center msg\" > {{message}}</p>\n\t\t<div *ngIf=\"userPermissions\">\n\t\t<form #imageinfo=\"ngForm\"  (ngSubmit)=\"onSubmit(imageinfo.value)\" >\n\t\t\t<div class=\"col-sm-4 photo-id form-group text-center\">\n\t\t\t<!-- === select file (note:if we want single image select remove multiple in input) === -->\n\t\t\t\t<input name=\"myFile\" #fileInput class=\"image-upload\" type=\"file\" hidden (change)=\"uploadFile($event)\" ngModel accept=\"image/*\" />\n\t\t\t\t<div class=\"choose-file\">\n\t\t\t\t<p><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i></p>\n\t\t\t\t<a (click)=\"chooseFileEnable()\"  class=\"btn btn-success\">Choose File</a>\n\t\t\t\t\t<div class=\"img-info\">\n\t\t\t\t\t\t<img *ngIf=\"logo\" [src]=\"logo\">\n\t\t\t\t\t\t<p>{{name}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- === select serise and more option === -->\n\t\t\t<div class=\"col-sm-8 imgselectoption\" *ngIf=\"!uploadValidation\" >\n\t\t\t\t\n\t\t\t\t<div class=\"form-group\">      \n\t\t\t\t<div *ngIf=\"imageUplodedStatus\" class=\"selectseriesoption\">\n\t\t\t\t\t<select name=\"series\" class=\"select\" placeholder=\"Series\" #seriesType (change)=\"onItemChange(seriesType.value)\" ngModel>\n\t\t\t\t\t  <option value=\"\">--Select Series--</option>\n\t\t\t\t\t  <option value=\"P\">P</option>\n\t\t\t\t\t  <option value=\"S\">S</option>\n\t\t\t\t\t  <option value=\"L\">L</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\n\n\t\t\t<!-- === These select input show when above select choose any option === -->\n\t\t\t<div class=\"form-group\">      \n\t\t\t\t<select name=\"year\" class=\"select select-year\" #year *ngIf=\"selectyearoption\" (change)=\"onyearChange(year.value)\" ngModel>\n\t\t\t\t  <option value=\"\">--Select year--</option>\n\t\t\t\t  <option *ngFor=\"let year of allYears; let i = index\" value=\"{{year}}\">{{year}}</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">      \n\t\t\t\t<select name=\"Season\" class=\"select select-year\" #season *ngIf=\"selectspringoption\" (change)=\"onSeasonChange(season.value)\" ngModel>\n\t\t\t\t  <option value=\"\">----Select Season----</option>\n\t\t\t\t  <option value=\"WIN\">Winter</option>\n\t\t\t\t  <option value=\"SPR\">Spring</option>\n\t\t\t\t  <option value=\"SUM\">Summer</option>\n\t\t\t\t  <option value=\"AUT\">Autumn</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">      \n\t\t\t\t<select name=\"Location\" class=\"select select-year\" #location *ngIf=\"selectlocationoption\" (change)=\"onLocationChange(location.value)\" ngModel>\n\t\t\t\t  <option value=\"\">----Select Location----</option>\n\t\t\t\t  <option *ngFor=\"let post of allPosts; let i = index\" value=\"{{post.title}}\">{{post.title}}</option>\n\t\t\t\t  \n\t\t\t\t</select>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">      \n\t\t\t\t<select name=\"Image\" class=\"select select-year\" #imageType *ngIf=\"selectimagetype\" (change)=\"onImageChange(imageType.value)\" ngModel>\n\t\t\t\t  <option value=\"\">----Select Image Type----</option>\n\t\t\t\t  <option *ngFor=\"let type of allImageType; let i = index\" value=\"{{type}}\">\n\t\t\t\t  \t\t<span *ngIf=\"type == 'PAN'\">Panorama</span>\n\t\t\t\t  \t\t<span *ngIf=\"type == 'SIN'\">Single</span>\n\t\t\t\t  </option>\n\t\t\t\n\t\t\t\t</select>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">      \n\t\t\t\t<select name=\"View\" class=\"select select-year\" #view *ngIf=\"selectview\" (change)=\"onViewChange(view.value)\" ngModel>\n\t\t\t\t  <option value=\"\">----Select View----</option>\n\t\t\t\t  <option *ngFor=\"let values of allvalues; let i = index\" value=\"{{values}}\">{{values}}</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\n\n\t\t\t\t<div class=\"form-group form-controls\">\n\t\t\t\t\t<img class=\"loader\" src=\"../../../assets/images/loader.gif\" *ngIf=\"loadingimg\">\n\t\t\t\t\t<!-- === Button for save and cancle the process === -->\n\t\t\t\t\t<button [disabled]=\"disabledButton\" type=\"submit\" class=\"btn btn-success pull-right\" *ngIf=\"formSubmit\"><a>save</a></button>\n\t\t\t\t\t<button type=\"\" class=\"btn btn-success pull-right cancel\"  *ngIf=\"imageUplodedStatus\"><a routerLink=\"\">cancel</a></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t\t</div>\n\t</div>\n\n\n\t<!-- When Image uploaded successfully -->\n\t<div class=\"row\" *ngIf=\"imageUploded\">\n\t\t<div class=\"col-xs-10 col-xs-offset-1\">\n\t\t\t<div class=\"col-xs-12 \">\n\t\t\t\t<p>Username: Developer</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-10 col-xs-offset-1\">\n\t\t\t<div class=\"col-xs-12 \">\n\t\t\t\t<span>File uploaded successfully with following details.</span>\n\t\t\t\t<br><br>\n\t\t\t</div>\t\t\n\t\t\t<div class=\"col-xs-4 filename\">\n\t\t\t\t<label>File Name:</label>\n\t\t\t\t<div class=\"response-data\">\n\t\t\t\t\t<span>{{fileUrl}}</span>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t<div class=\"col-xs-6 filename\">\n\t\t\t\t<label>Uploaded Image:</label>\n\t\t\t\t<div class=\" response-img\">\n\t\t\t\t\t<img src=\"{{fileUrl}}\"/>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t</div>\t\n\n\t</div>\n\t<div class=\"row uploaded-links\" *ngIf=\"imageUploded\">\n\t\t<div class=\"col-xs-10 col-xs-offset-1 \" >\n\t\t\t<a class=\"btn btn-success\" routerLink=\"/imagedetails/{{imageId}}\" >View Full Details</a>\n\t\t\t<a class=\"btn btn-success\" (click)=\"AddAnotherImage()\">Add Another Image</a>\n\t\t\t<a class=\"btn btn-success\" routerLink=\"\">Back to Home Page</a>\n\t\t</div>\t\n\t</div>\t\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/imageupload/imageupload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imageupload_service__ = __webpack_require__("../../../../../src/app/component/imageupload/imageupload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageuploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //---import service ---

var ImageuploadComponent = (function () {
    function ImageuploadComponent(imageupload, CMService) {
        this.imageupload = imageupload;
        this.CMService = CMService;
        this.formData = [];
        this.allYears = [];
        this.allPosts = [];
        this.allImageType = [];
        this.allvalues = [];
        this.imageinfo = [];
        this.fileUrl = "";
        this.imageName = "";
        this.allValuesObject = {};
        this.userPermissions = true;
        this.imageUploded = false;
        this.imageUplodedStatus = false;
        this.disabledButton = false;
        this.selectyearoption = false;
        this.selectspringoption = false;
        this.selectlocationoption = false;
        this.selectimagetype = false;
        this.selectview = false;
        this.formSubmit = false;
        this.loadingimg = false;
        this.uploadValidation = false;
        //this.formData = new FormData();    
        if (CMService.currentUser.role == "visitor") {
            this.userPermissions = false;
            this.message = "you don't have permission to access this page.";
        }
    }
    //--- === this function used for show the title of upload image---
    ImageuploadComponent.prototype.ngOnInit = function () {
    };
    ImageuploadComponent.prototype.chooseFileEnable = function () {
        this.fileInput.nativeElement.click();
    };
    // ---=== select image send to service ---
    ImageuploadComponent.prototype.uploadFile = function (event) {
        var _this = this;
        this.name = "";
        this.uploadValidation = false;
        this.message = "";
        var fileList = event.target.files;
        this.file = fileList[0];
        //this.formData.append('image', file);
        this.logo = event.target.files[0];
        var bytes = event.target.files[0].size;
        if (bytes > 20000000) {
            this.message = "Image size is greater than 20MB, please select a smaller image size.";
            this.uploadValidation = true;
            return false;
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.logo = e.target.result;
        };
        reader.readAsDataURL(event.target.files[0]); //---=== this function used for show upload image---
        this.imageUplodedStatus = true; //---===when it true it show right(select) section
        var element = event.target;
        this.name = element.files[0].name;
    };
    //---=== Right section functionality 
    ImageuploadComponent.prototype.onItemChange = function (seriesType) {
        var _this = this;
        this.selectimagetype = false;
        this.selectview = false;
        this.selectlocationoption = false;
        this.selectspringoption = false;
        this.selectyearoption = false;
        if (seriesType == "") {
            return false;
        }
        this.loadingimg = true;
        this.SeriesName = seriesType;
        this.allValuesObject['series'] = seriesType;
        this.imageupload.getInfo(this.allValuesObject, 'year').subscribe(function (res) {
            if (res.years != null) {
                _this.allYears = [];
                var minYear = parseInt(res.years.start_year);
                var maxYear = minYear + 99;
                _this.selectyearoption = true;
                for (minYear; minYear < maxYear; minYear++) {
                    _this.allYears.push(minYear);
                }
            }
            else {
                var minYear = 2017;
                var maxYear = 2099;
                _this.allYears = [];
                for (minYear; minYear < maxYear; minYear++) {
                    _this.allYears.push(minYear);
                }
                _this.selectyearoption = true;
            }
            _this.loadingimg = false;
        });
    };
    //---on year change
    ImageuploadComponent.prototype.onyearChange = function (year) {
        var _this = this;
        this.selectimagetype = false;
        this.selectview = false;
        this.selectlocationoption = false;
        this.selectspringoption = false;
        if (year == "") {
            return false;
        }
        this.allValuesObject['year'] = year;
        //let SelectedSeries = this.formData.get('series');
        var SelectedSeries = this.SeriesName;
        if (SelectedSeries != "P") {
            this.imageupload.getInfo(this.allValuesObject, 'posts').subscribe(function (res) {
                if (res.posts != null) {
                    _this.allPosts = res.posts;
                    _this.selectlocationoption = true;
                }
            });
        }
        else {
            this.selectspringoption = true;
        }
    };
    //---on season change
    ImageuploadComponent.prototype.onSeasonChange = function (season) {
        var _this = this;
        this.selectimagetype = false;
        this.selectview = false;
        this.selectlocationoption = false;
        if (season == "") {
            return false;
        }
        this.loadingimg = true;
        this.allValuesObject['season'] = season;
        this.imageupload.getInfo(this.allValuesObject, 'posts').subscribe(function (res) {
            if (res.posts != null) {
                _this.allPosts = res.posts;
                _this.selectlocationoption = true;
            }
            _this.loadingimg = false;
        });
    };
    //---on location change show image type
    ImageuploadComponent.prototype.onLocationChange = function (location) {
        var _this = this;
        this.selectimagetype = false;
        this.selectview = false;
        if (location == "") {
            return false;
        }
        this.loadingimg = true;
        this.allValuesObject['location'] = location;
        //let SelectedSeries = this.formData.get('series');
        var SelectedSeries = this.SeriesName;
        if (SelectedSeries != "P") {
            this.loadingimg = false;
            this.formSubmit = true;
        }
        else {
            this.imageupload.getInfo(this.allValuesObject, 'imagetype').subscribe(function (res) {
                if (res.types != null) {
                    _this.allImageType = res.types;
                    _this.selectimagetype = true;
                }
                _this.loadingimg = false;
            });
        }
    };
    //---on imageType change show view
    ImageuploadComponent.prototype.onImageChange = function (imageType) {
        var _this = this;
        this.formSubmit = false;
        this.selectview = false;
        if (imageType == "") {
            return false;
        }
        this.loadingimg = true;
        this.allValuesObject['image_view'] = imageType;
        this.imageupload.getInfo(this.allValuesObject, 'values').subscribe(function (res) {
            if (res.values != null) {
                _this.allvalues = res.values;
                console.log(_this.allvalues, "allvalues");
                _this.selectview = true;
                _this.allvalues = res.values;
                _this.selectview = true;
            }
            _this.loadingimg = false;
        });
    };
    //---on view
    ImageuploadComponent.prototype.onViewChange = function (view) {
        if (view == "") {
            return false;
        }
        this.formSubmit = true;
        this.allValuesObject['view'] = view;
    };
    ImageuploadComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formData = new FormData();
        this.formData.append('image', this.file);
        this.formData.append('series', this.allValuesObject['series']);
        this.formData.append('year', this.allValuesObject['year']);
        this.formData.append('season', this.allValuesObject['season']);
        this.formData.append('location', this.allValuesObject['location']);
        this.formData.append('image_view', this.allValuesObject['image_view']);
        this.formData.append('view', this.allValuesObject['view']);
        this.disabledButton = true;
        this.loadingimg = true;
        this.imageupload.getInfo(this.formData, 'uploaddata').subscribe(function (res) {
            if (res.response == 'succes') {
                _this.fileUrl = "";
                _this.fileUrl = res.thumbImageUrl;
                _this.imageName = res.image_name;
                _this.imageId = res.imageId;
                _this.imageUploded = true;
                _this.loadingimg = false;
            }
            else {
                _this.message = res.msg;
                _this.loadingimg = false;
            }
        });
    };
    ImageuploadComponent.prototype.AddAnotherImage = function () {
        this.imageUploded = false;
        this.disabledButton = false;
        this.selectimagetype = false;
        this.selectview = false;
        this.selectlocationoption = false;
        this.selectspringoption = false;
        this.selectyearoption = false;
        this.logo = "";
        this.name = "";
        this.fileUrl = "";
        this.imageName = "";
        this.imageId = 0;
    };
    return ImageuploadComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ImageuploadComponent.prototype, "fileInput", void 0);
ImageuploadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-imageupload',
        template: __webpack_require__("../../../../../src/app/component/imageupload/imageupload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/imageupload/imageupload.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__imageupload_service__["a" /* ImageuploadService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__imageupload_service__["a" /* ImageuploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__imageupload_service__["a" /* ImageuploadService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_data_service__["a" /* SharedDataService */]) === "function" && _c || Object])
], ImageuploadComponent);

var _a, _b, _c;
//# sourceMappingURL=imageupload.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/imageupload/imageupload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authguard_service__ = __webpack_require__("../../../../../src/app/authguard.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageuploadService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ImageuploadService = (function () {
    function ImageuploadService(_http, _cookieService, auth) {
        this._http = _http;
        this._cookieService = _cookieService;
        this.auth = auth;
    }
    // --- === upload image save in database (note:pass perameter with type)---
    ImageuploadService.prototype.getInfo = function (formdata, url) {
        var _this = this;
        var token = this._cookieService.get("hwUserToken");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
                'Accept': 'application/json',
                'Authorization': 'Bearer' + token,
            })
        });
        var _url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + url;
        return this._http.post(_url, formdata, options)
            .map(function (response) {
            return response.json();
        }).catch(function (error) {
            if (error.status === 401) {
                _this.auth.logOut(error);
            }
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error);
        });
    };
    return ImageuploadService;
}());
ImageuploadService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__authguard_service__["a" /* AuthGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__authguard_service__["a" /* AuthGuard */]) === "function" && _c || Object])
], ImageuploadService);

var _a, _b, _c;
//# sourceMappingURL=imageupload.service.js.map

/***/ }),

/***/ "../../../../../src/app/component/legalprivacy/legalprivacy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".series{\n\tmargin: 20px 0 20px 0;\n}\n.series li {\n    padding: 7px 0;\n}\n\n.series .fa {\n    font-size: 15px;\n    color: #246f24;\n    margin-right: 5px;\n}\n.series span, .map-img {\n    font-size: 18px;\n    font-weight: 600;\n}\n.home-title {\n    font-size: 32px;\n    color: #246f24;\n    text-transform: capitalize;\n    margin: 40px 0 15px 0;\n}\n#test h2{\n    font-size: 32px;\n    color: #246f24;\n    text-transform: capitalize;\n    margin: 40px 0 15px 0;\n}\np {\n    line-height: 26px;\n}\n h3 {\n    font-size: 22px;\n    font-weight: normal;\n    color: #246f24;\n}\n.photopoints-map {\n    margin-top: 25px;\n}\n\n@media only screen and (max-width: 767px) {\n    .home-title{\n        font-size: 25px;\n    }\n    .photopoints-map{\n        margin-top: 0;\n    }\n}\n@media only screen and (max-width: 420px) {\n\n    .home-title {\n        font-size: 22px;\n    }\n    h3 {\n        font-size: 22px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/legalprivacy/legalprivacy.component.html":
/***/ (function(module, exports) {

module.exports = "<!--  <div class=\"container\" [innerHTML]=\"pageContent?.data.description\">\n\t\n</div> \n -->\n  <div class=\"container\"  [innerHTML]=\"temp\">\n\t \n</div> \n"

/***/ }),

/***/ "../../../../../src/app/component/legalprivacy/legalprivacy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__legalprivacy_service__ = __webpack_require__("../../../../../src/app/component/legalprivacy/legalprivacy.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegalPrivacyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LegalPrivacyComponent = (function () {
    function LegalPrivacyComponent(_legalservice, _sanitizer) {
        this._legalservice = _legalservice;
        this._sanitizer = _sanitizer;
    }
    LegalPrivacyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._legalservice.gethomedata()
            .subscribe(function (res) {
            _this.pageContent = res;
            console.log(_this._sanitizer.bypassSecurityTrustHtml(_this.pageContent.data.description));
            _this.temp = _this._sanitizer.bypassSecurityTrustHtml(_this.pageContent.data.description);
        }, function (error) {
            console.log(error);
        });
    };
    return LegalPrivacyComponent;
}());
LegalPrivacyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/component/legalprivacy/legalprivacy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/legalprivacy/legalprivacy.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__legalprivacy_service__["a" /* LegalPrivacy */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__legalprivacy_service__["a" /* LegalPrivacy */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__legalprivacy_service__["a" /* LegalPrivacy */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object])
], LegalPrivacyComponent);

var _a, _b;
//# sourceMappingURL=legalprivacy.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/legalprivacy/legalprivacy.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authguard_service__ = __webpack_require__("../../../../../src/app/authguard.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegalPrivacy; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LegalPrivacy = (function () {
    function LegalPrivacy(_http, _cookieService, auth) {
        this._http = _http;
        this._cookieService = _cookieService;
        this.auth = auth;
    }
    LegalPrivacy.prototype.gethomedata = function () {
        var _this = this;
        var token = this._cookieService.get("hwUserToken");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
                'Accept': 'application/json',
                'Authorization': 'Bearer' + token,
            })
        });
        var _url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + "page/2";
        return this._http.get(_url, options)
            .map(function (response) {
            return response.json();
        }).catch(function (error) {
            if (error.status === 401) {
                _this.auth.logOut(error);
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error);
        });
    };
    return LegalPrivacy;
}());
LegalPrivacy = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_core__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__authguard_service__["a" /* AuthGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__authguard_service__["a" /* AuthGuard */]) === "function" && _c || Object])
], LegalPrivacy);

var _a, _b, _c;
//# sourceMappingURL=legalprivacy.service.js.map

/***/ }),

/***/ "../../../../../src/app/component/longterm/longterm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n    font-size: 32px;\n    text-align: center;\n    margin: 30px 0 40px 0;\n    color: #246f24;\n}\nh3 {\n    margin-bottom: 30px;\n}\n h4 {\n    text-transform: uppercase;\n}\nul.saplingview li {\n    display: inline-block;\n    width: 200px;\n    padding: 0 10px;\n}\n.photopoints-info {\n    margin-bottom: 10px;\n}\nimg.loader {\n    width: auto;\n    max-width: 80px;\n    margin: 0 auto;\n    max-height: 140px;\n}\nimg{\n    max-height: 120px;\n    margin: 0 auto;\n}\n.img-cover{\n    text-align: center;\n}\n.loading-img {\n    text-align: center;\n    padding: 40px 0;\n}\n.sl-view-name {\n    min-height: 130px;\n}\n\n\n#sarea {\n    max-width: 100%;\n    overflow-y: scroll;\n    \n}\nul#year-list{\n    position: absolute;\n}\n.years-list{\n    overflow: hidden;\n    position: relative;\n    height: 40px;\n    margin-left: 30px;\n}\n.view-list{\n    position: relative;\n    overflow: hidden;\n    height: 100%;\n}\n.view-area{\n    position: absolute;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/longterm/longterm.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h2>Long Term</h2>\n  <div class=\"row photo-points-space\">\n  <!-- View Id show on left-->\n    <div class=\"col-xs-1\">\n     <h4>View</h4>\n    </div>\n    <!--===Year show on top  -->\n    <div class=\"col-xs-10 years-list\">\n      <ul id=\"year-list\" class=\"saplingview \" [style.width] =\"saplingWidth\">\n        <li class=\"text-center\" *ngFor=\"let year of years\">\n          <h4>{{year.year}}</h4>\n        </li> \n      </ul>       \n    </div>\n  </div>\n<!--=== loading show when data load ===-->\n  <div class=\"loading-img\" *ngIf=\"loadingimg\">\n    <img class=\"loader\" src=\"../../../assets/images/loader.gif\" >\n  </div>\n<!--===images section show according to season ===-->\n\n  <div class=\"loading-view\" *ngIf=\"!loadingimg\">\n \n        <div class=\"col-xs-1 view-list\" [style.height]=\"containerHeight\">\n          <div class=\"view-area\">\n            <div class=\"row photopoints-info sl-view-name\" *ngFor=\"let postData of seriesData\">\n              <p *ngIf=\"postData.view != ''\"> {{postData.view}}</p>\n            </div>\n          </div>\n        </div>  \n\n        <div class=\"col-xs-11 ss-scroll\">\n           <div id=\"sarea\" [style.width]=\"containerWidth\" [style.height]=\"containerHeight\" >\n        <!-- <div class=\"col-xs-1\">\n            <p *ngIf=\"postData.view != ''\"> {{postData.view}}</p>\n          </div>\n         -->  \n          <div class=\"row photopoints-info\" *ngFor=\"let postData of seriesData\">\n            <ul class=\"saplingview\" [style.width] =\"saplingWidth\">\n              <li  *ngFor=\"let year of years\">\n                <div class=\"img-cover\"  *ngFor=\"let imageData of postData.data\">  \n                  <a *ngIf = \"year.year==imageData.year\" [routerLink]=\"['/imagedetails',imageData.id]\">\n                    <img src=\"{{imageData.file_thumb_location_aws}}\" />\n                  </a>\n              </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>  \n   </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/longterm/longterm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__longterm_service__ = __webpack_require__("../../../../../src/app/component/longterm/longterm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LongtermComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LongtermComponent = (function () {
    function LongtermComponent(route, sphotoService) {
        this.route = route;
        this.sphotoService = sphotoService;
        // --=== Variable defined--===
        this.seriesData = [];
        this.years = [];
        this.formData = [];
        this.formData = new FormData();
        this.loadingimg = false;
    }
    //--response from service--=== 
    LongtermComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingimg = true;
        var URL = 'seriesdetail';
        this.formData.append('seriesname', 'L');
        this.sphotoService.thumbnailsphotoinfo(this.formData, URL).subscribe(function (res) {
            _this.seriesData = res.seriesData;
            _this.years = res.years;
            _this.years = res.years;
            var wid = _this.years.length * 200 + 200;
            _this.saplingWidth = wid.toString() + "px";
            __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].interval(1000)
                .takeWhile(function () { return _this.loadingimg = false; })
                .subscribe(function (i) {
            });
        });
    };
    LongtermComponent.prototype.ngAfterViewChecked = function () {
        var wid = $(window).height() - 100;
        var hei = $(window).width();
        this.containerHeight = wid.toString() + "px";
        this.containerWidth = hei.toString() + "px";
        $('#sarea').scroll(function () {
            var left = $(this).scrollLeft();
            var top = $(this).scrollTop();
            console.log(left);
            $(".view-area").css("top", "-" + top + "px");
            $("ul#year-list").css("left", "-" + left + "px");
        });
    };
    return LongtermComponent;
}());
LongtermComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-longterm',
        template: __webpack_require__("../../../../../src/app/component/longterm/longterm.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/longterm/longterm.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__longterm_service__["a" /* LongtermService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__longterm_service__["a" /* LongtermService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__longterm_service__["a" /* LongtermService */]) === "function" && _b || Object])
], LongtermComponent);

var _a, _b;
//# sourceMappingURL=longterm.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/longterm/longterm.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authguard_service__ = __webpack_require__("../../../../../src/app/authguard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LongtermService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LongtermService = (function () {
    function LongtermService(_http, _cookieService, auth) {
        this._http = _http;
        this._cookieService = _cookieService;
        this.auth = auth;
    }
    LongtermService.prototype.thumbnailsphotoinfo = function (formdata, url) {
        var _this = this;
        var token = this._cookieService.get("hwUserToken");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
                'Accept': 'application/json',
                'Authorization': 'Bearer' + token
            })
        });
        var _url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + url;
        return this._http.post(_url, formdata, options)
            .map(function (response) {
            console.log(response.status, "st");
            return response.json();
        }).catch(function (error) {
            if (error.status === 401) {
                _this.auth.logOut(error);
            }
            return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(error);
        });
    };
    return LongtermService;
}());
LongtermService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__authguard_service__["a" /* AuthGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__authguard_service__["a" /* AuthGuard */]) === "function" && _c || Object])
], LongtermService);

var _a, _b, _c;
//# sourceMappingURL=longterm.service.js.map

/***/ }),

/***/ "../../../../../src/app/component/photopoints/photopoints.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".photopoints ul li\n a {\n    color: #000;\n}\n\n.photopoints ul li {\n    line-height: 30px;\n}\n.photopoints ul li a:hover {\n    color: #104810;\n}\n.photopoints {\n    margin-bottom: 35px;\n}\n.loader{\n    max-width: 80px;\n}\nh2 {\n    font-size: 32px;\n    text-align: center;\n    margin: 30px 0 40px 0;\n    color: #246f24;\n}\n@media only screen and (max-width: 767px) {\n    .photopointslink {\n        text-align: center;\n    }\n    h2{\n    font-size: 30px;\n    margin: 20px 0 20px 0;\n    }\n    .photopointslink {\n        border-bottom: 1px dashed #246f24;\n        margin: 18px 0;\n        padding: 0 16px;\n    }\n\n    .photopointslink:last-child {\n        border: 0;\n        margin: 0;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/photopoints/photopoints.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- === here are link for view === -->\n\n<div class=\"container\">\n\t<div class=\"row photopoints\">\n\t\t<h2>Photo Points</h2>\n\t\t\n\t\t<div class=\"loading-img text-center\" *ngIf=\"loadingimg\">\n\t\t    <img class=\"loader\" src=\"../../../assets/images/loader.gif\" >\n\t\t  </div>\n\t\t<div class=\"col-sm-4 photopointslink\" *ngIf=\"!loadingimg\">\n\t\t\t<ul>\n\t\t\t\t<li *ngFor=\"let series of pageContent | slice:0:splitNumber \">\n\t\t\t\t\t<a routerLink=\"/thumbnailsphotos/{{series.post_name}}\">CLICK HERE TO VIEW {{series.post_name}}</a>\n\t\t\t\t</li>\n\t\t\n\t\t\t</ul>\t\n\n\t\t</div>\n\t\t<div class=\"col-sm-4 photopointslink\" *ngIf=\"!loadingimg\">\n\t\t\t<ul>\n\t\t\t\t<li *ngFor=\"let series of pageContent | slice:splitNumber:next \">\n\t\t\t\t\t<a routerLink=\"/thumbnailsphotos/{{series.post_name}}\">CLICK HERE TO VIEW {{series.post_name}}</a>\n\t\t\t\t</li>\n\t\t\n\t\t\t</ul>\t\n\t\t\t\n\t\t</div>\n\t\t<div class=\"col-sm-4 photopointslink\" *ngIf=\"!loadingimg\">\n\t\t\t<ul>\n\t\t\t\t<li *ngFor=\"let series of pageContent | slice:next\">\n\t\t\t\t\t<a routerLink=\"/thumbnailsphotos/{{series.post_name}}\">CLICK HERE TO VIEW {{series.post_name}}</a>\n\t\t\t\t</li>\n\t\t\n\t\t\t</ul>\t\n\t\t\t\n\t\t</div>\n\t\t\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/photopoints/photopoints.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__photopoints_service__ = __webpack_require__("../../../../../src/app/component/photopoints/photopoints.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotopointsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotopointsComponent = (function () {
    function PhotopointsComponent(_photopointsservice) {
        this._photopointsservice = _photopointsservice;
        this.pageContent = [];
        this.loadingimg = true;
    }
    PhotopointsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._photopointsservice.getSeriesData().subscribe(function (res) {
            _this.pageContent = res.posts;
            var length = _this.pageContent.length;
            var each = length / 3;
            _this.splitNumber = Math.floor(each);
            if (length < 6) {
                _this.splitNumber = 6;
            }
            _this.next = _this.splitNumber + _this.splitNumber;
            _this.loadingimg = false;
        }, function (error) {
            console.log(error);
        });
    };
    return PhotopointsComponent;
}());
PhotopointsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-photopoints',
        template: __webpack_require__("../../../../../src/app/component/photopoints/photopoints.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/photopoints/photopoints.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__photopoints_service__["a" /* PhotopointsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__photopoints_service__["a" /* PhotopointsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__photopoints_service__["a" /* PhotopointsService */]) === "function" && _a || Object])
], PhotopointsComponent);

var _a;
//# sourceMappingURL=photopoints.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/photopoints/photopoints.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authguard_service__ = __webpack_require__("../../../../../src/app/authguard.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotopointsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PhotopointsService = (function () {
    function PhotopointsService(_http, _cookieService, auth) {
        this._http = _http;
        this._cookieService = _cookieService;
        this.auth = auth;
    }
    PhotopointsService.prototype.getSeriesData = function () {
        var _this = this;
        var token = this._cookieService.get("hwUserToken");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
                'Accept': 'application/json',
                'Authorization': 'Bearer' + token,
            })
        });
        // --GET Data from data base---
        var _url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + "pseries";
        return this._http.get(_url, options)
            .map(function (response) {
            return response.json();
        }).catch(function (error) {
            if (error.status === 401) {
                _this.auth.logOut(error);
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error);
        });
    };
    return PhotopointsService;
}());
PhotopointsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_core__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__authguard_service__["a" /* AuthGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__authguard_service__["a" /* AuthGuard */]) === "function" && _c || Object])
], PhotopointsService);

var _a, _b, _c;
//# sourceMappingURL=photopoints.service.js.map

/***/ }),

/***/ "../../../../../src/app/component/saplingsurvival/saplingsurvival.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n    font-size: 32px;\n    text-align: center;\n    margin: 30px 0 40px 0;\n    color: #246f24;\n}\nh3 {\n    margin-bottom: 30px;\n}\n h4 {\n    text-transform: uppercase;\n}\nul.saplingview li {\n    display: inline-block;\n    width: 200px;\n    padding: 0 10px;\n}\n.photopoints-info {\n    margin-bottom: 10px;\n}\nimg.loader {\n    width: auto;\n    max-width: 80px;\n    margin: 0 auto;\n    max-height: 140px;\n}\nimg{\n    max-height: 120px;\n    margin: 0 auto;\n}\n.img-cover{\n    text-align: center;\n}\n.loading-img {\n    text-align: center;\n    padding: 40px 0;\n}\n.sl-view-name {\n    min-height: 130px;\n}\n\n\n#sarea {\n    max-width: 100%;\n    overflow-y: scroll;\n    \n}\nul#year-list{\n    position: absolute;\n}\n.years-list{\n    overflow: hidden;\n    position: relative;\n    height: 40px;\n    margin-left: 30px;\n}\n.view-list{\n    position: relative;\n    overflow: hidden;\n    height: 100%;\n}\n.view-area{\n    position: absolute;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/saplingsurvival/saplingsurvival.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h2>Sapling Survival</h2>\n  <div class=\"row photo-points-space\">\n  <!-- View Id show on left-->\n  \t<div class=\"col-xs-1\">\n  \t <h4>View</h4>\n  \t</div>\n    <!--===Year show on top  -->\n  \t<div class=\"col-xs-10 years-list\">\n      <ul id=\"year-list\" class=\"saplingview \" [style.width] =\"saplingWidth\">\n        <li class=\"text-center\" *ngFor=\"let year of years\">\n          <h4>{{year.year}}</h4>\n        </li> \n      </ul>  \t\t\t\n  \t</div>\n  </div>\n<!--=== loading show when data load ===-->\n  <div class=\"loading-img\" *ngIf=\"loadingimg\">\n    <img class=\"loader\" src=\"../../../assets/images/loader.gif\" >\n  </div>\n<!--===images section show according to season ===-->\n\n  <div class=\"loading-view\" *ngIf=\"!loadingimg\">\n \n        <div class=\"col-xs-1 view-list\" [style.height]=\"containerHeight\">\n          <div class=\"view-area\">\n            <div class=\"row photopoints-info sl-view-name\" *ngFor=\"let postData of seriesData\">\n              <p *ngIf=\"postData.view != ''\"> {{postData.view}}</p>\n            </div>\n          </div>\n        </div>  \n\n        <div class=\"col-xs-11 ss-scroll\">\n           <div id=\"sarea\" [style.width]=\"containerWidth\" [style.height]=\"containerHeight\" >\n        <!-- <div class=\"col-xs-1\">\n            <p *ngIf=\"postData.view != ''\"> {{postData.view}}</p>\n          </div>\n         -->  \n          <div class=\"row photopoints-info\" *ngFor=\"let postData of seriesData\">\n            <ul class=\"saplingview\" [style.width] =\"saplingWidth\">\n              <li  *ngFor=\"let year of years\">\n                <div class=\"img-cover\"  *ngFor=\"let imageData of postData.data\">  \n                  <a *ngIf = \"year.year==imageData.year\" [routerLink]=\"['/imagedetails',imageData.id]\">\n                    <img src=\"{{imageData.file_thumb_location_aws}}\" />\n                  </a>\n              </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>  \n   </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/saplingsurvival/saplingsurvival.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__saplingsurvival_service__ = __webpack_require__("../../../../../src/app/component/saplingsurvival/saplingsurvival.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaplingsurvivalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SaplingsurvivalComponent = (function () {
    function SaplingsurvivalComponent(route, sphotoService) {
        this.route = route;
        this.sphotoService = sphotoService;
        // --=== Variable defined--===
        this.seriesData = [];
        this.years = [];
        this.formData = [];
        this.formData = new FormData();
        this.loadingimg = false;
    }
    //--response from service--=== 
    SaplingsurvivalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingimg = true;
        var URL = 'seriesdetail';
        this.formData.append('seriesname', 'S');
        this.sphotoService.thumbnailsphotoinfo(this.formData, URL).subscribe(function (res) {
            _this.seriesData = res.seriesData;
            _this.years = res.years;
            _this.years = res.years;
            var wid = _this.years.length * 200 + 200;
            _this.saplingWidth = wid.toString() + "px";
            __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].interval(1000)
                .takeWhile(function () { return _this.loadingimg = false; })
                .subscribe(function (i) {
            });
        });
    };
    SaplingsurvivalComponent.prototype.ngAfterViewChecked = function () {
        var wid = $(window).height() - 100;
        var hei = $(window).width();
        this.containerHeight = wid.toString() + "px";
        this.containerWidth = hei.toString() + "px";
        $('#sarea').scroll(function () {
            var left = $(this).scrollLeft();
            var top = $(this).scrollTop();
            console.log(left);
            $(".view-area").css("top", "-" + top + "px");
            $("ul#year-list").css("left", "-" + left + "px");
        });
    };
    return SaplingsurvivalComponent;
}());
SaplingsurvivalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-saplingsurvival',
        template: __webpack_require__("../../../../../src/app/component/saplingsurvival/saplingsurvival.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/saplingsurvival/saplingsurvival.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__saplingsurvival_service__["a" /* SaplingsurvivalService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__saplingsurvival_service__["a" /* SaplingsurvivalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__saplingsurvival_service__["a" /* SaplingsurvivalService */]) === "function" && _b || Object])
], SaplingsurvivalComponent);

var _a, _b;
//# sourceMappingURL=saplingsurvival.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/saplingsurvival/saplingsurvival.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authguard_service__ = __webpack_require__("../../../../../src/app/authguard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaplingsurvivalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SaplingsurvivalService = (function () {
    function SaplingsurvivalService(_http, _cookieService, auth) {
        this._http = _http;
        this._cookieService = _cookieService;
        this.auth = auth;
    }
    SaplingsurvivalService.prototype.thumbnailsphotoinfo = function (formdata, url) {
        var _this = this;
        var token = this._cookieService.get("hwUserToken");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
                'Accept': 'application/json',
                'Authorization': 'Bearer' + token
            })
        });
        var _url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + url;
        return this._http.post(_url, formdata, options)
            .map(function (response) {
            console.log(response.status, "st");
            return response.json();
        }).catch(function (error) {
            if (error.status === 401) {
                _this.auth.logOut(error);
            }
            return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(error);
        });
    };
    return SaplingsurvivalService;
}());
SaplingsurvivalService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__authguard_service__["a" /* AuthGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__authguard_service__["a" /* AuthGuard */]) === "function" && _c || Object])
], SaplingsurvivalService);

var _a, _b, _c;
//# sourceMappingURL=saplingsurvival.service.js.map

/***/ }),

/***/ "../../../../../src/app/component/shared/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fixed-footer.copyright{\n\tposition: fixed;\n\tbottom: 0;\n\twidth: 100%;\n}\n\n\n.copyright {\n    background-color: #f8f8f8;\n    padding: 20px 0 10px;\n    margin-top: 35px;\n}\n\n.copyright p {\n    text-align: center;\n}\n@media only screen and (max-width: 767px) {\n.copyright{\n    margin-top: 15px;\n}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"copyright\">\n\t<!-- {{CmService.data}} -->\n\t<p>©{{year}} All Rights Reserved</p>\n\t<p><a routerLink=\"legalprivacy\" style=\"color:#246f24\">{{footerTitle}}</a></p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_service__ = __webpack_require__("../../../../../src/app/component/shared/footer/footer.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = (function () {
    function FooterComponent(CmService, _footerService) {
        this.CmService = CmService;
        this._footerService = _footerService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.year = (new Date()).getFullYear();
        this._footerService.getfooterservice().subscribe(function (res) {
            _this.footerTitle = res.data[1];
        });
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/component/shared/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/shared/footer/footer.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__footer_service__["a" /* FooterService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* SharedDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__footer_service__["a" /* FooterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__footer_service__["a" /* FooterService */]) === "function" && _b || Object])
], FooterComponent);

var _a, _b;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/shared/footer/footer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FooterService = (function () {
    function FooterService(_http) {
        this._http = _http;
    }
    FooterService.prototype.getfooterservice = function () {
        var _url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + "pages/title";
        return this._http.get(_url)
            .map(function (response) {
            return response.json();
        });
    };
    return FooterService;
}());
FooterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], FooterService);

var _a;
//# sourceMappingURL=footer.service.js.map

/***/ }),

/***/ "../../../../../src/app/component/shared/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.photopoints-logo {\n    font-size: 40px;\n    font-weight: 600;\n    line-height: normal;\n    text-align: center;\n}\n.photopoints-logo a {\n    display: inline-block;\n    color: #246f24;\n    cursor: pointer;\n}\n.photopoints-logo a:hover{\n    color: #104810;\n}\n.photopoints-description {\n    font-size: 15px;\n    text-transform: capitalize;\n    font-weight: 100;\n    color: #333;\n    display: block;\n}\n\n.navbar-default .navbar-nav>li>a {\n    color: #246f24;\n    font-size: 14px;\n    text-transform: uppercase;\n    font-weight: 600;\n}\n\n\n.navbar-default .navbar-nav>li.active a {\n    color: #fff;\n    background-color: #104810;\n    border: 0;\n}\n.navbar-default .navbar-nav>li>a:hover{\n    color: #fff;\n}\n.navbar-default .navbar-nav>li:hover{\n    background-color: #104810;\n}\n.navbar-right {\n    margin-top: 0;\n}\n.btn {\n    padding: 14px 25px;\n    font-size: 14px;\n    border-radius: 3px;\n}\n.navbar-header {\n    width: 100%;\n}\n\nbutton a{\n    color: #fff;\n}\n\n.navbar-collapse{\n    padding: 0;\n}\n.navbar-right {\n    margin-right: 0;\n}\n.menu-toggle {\n    text-align: right;\n    float: right;\n    display: inline-block;\n}\n.mobileview{\n    display: inline-block;\n}\n.menu-toggle .navbar-toggle {\n    float: none;\n    margin-right: 0;\n}\n.active .collapse {\n    display: none;\n}\n/*---=== Media Query Start Here ---===*/\n@media only screen and (max-width: 767px) {\n   .navbar-nav {\n        margin: 7.5px 0;\n    }\n    .loginpage-layout{\n        width: 100%;\n    }\n    .photopoints-logo{\n        font-size: 32px;\n    }\n    .photopoints-description{\n        font-size: 12px;\n    }\n    .navbar-default .navbar-toggle {\n    border-color: #246f24;\n    background-color: #246f24;\n    color: #fff;\n    }\n    .navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {\n        background-color: #246f24;\n    }\n    .navbar-toggle {\n    padding: 14px 15px;\n    margin-top: 0;\n    margin-bottom: 0;\n    }\n}\n@media only screen and (max-width: 420px) {\n    .photopoints-logo{\n        font-size: 26px;\n    }\n    .loginpage-layout{\n    padding: 25px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- === Project title === -->\n<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-sm-12\">\n  <h1 class=\"photopoints-logo\">\n\n    <a  routerLink=\".\"> HWPhotoPoints.org.uk \n    <span class=\"photopoints-description\">The Image Storage Site for Heartwood Forest Volunteers</span></a>\n  </h1>\n  </div>\n  </div>\n</div>\n<!-- === nav section start ===-->\n\n  <nav class=\"navbar navbar-default photo-nav\">\n      <div class=\"container\">\n      <div class=\"row\">\n      <!--=== Toggle header after 767 ===-->\n      <div class=\"col-sm-12\">\n          <div class=\"navbar-header\">\n          <!-- === for mobile view === -->\n          <div class=\"navbar-left hidden-sm hidden-md hidden-lg mobileview\">\n              <button type=\"submit\" class=\"btn btn-success\" *ngIf=\"serve.data\"><a routerLink=\"login\">Login</a></button>\n              <button type=\"submit\" (click)=\"logoutUser()\" class=\"btn btn-success\" *ngIf=\"!serve.data\">Logout</button>\n          </div>\n\n          <div class=\"menu-toggle\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\" >\n              <span class=\"sr-only\">Toggle navigation</span>\n              <i class=\"fa fa-bars\"></i>\n            </button>\n          </div>\n      <!--=== nav link section start ===-->\n            <div id=\"navbar\" class=\"navbar-collapse collapse\" *ngIf=\"!menuiconshow\">\n              <ul class=\"nav navbar-nav header-link\">\n                <li  routerLink=\"\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a  >Home</a></li>\n                <li routerLink=\"imageupload\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a>Image Upload</a></li>\n                <li routerLink=\"photopoints\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a>Photo Points</a></li>\n                <li routerLink=\"saplingsurvival\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a>Sapling Survival</a></li>\n                <li routerLink=\"longterm\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a>Long Term</a></li>\n              </ul>\n\n      <!--=== login Sign-up button === -->\n              <div class=\"navbar-right hidden-xs\">\n                <button type=\"submit\" class=\"btn btn-success\" *ngIf=\"serve.data\"><a routerLink=\"login\">Login</a></button>\n                <button type=\"submit\" (click)=\"logoutUser()\" class=\"btn btn-success\" *ngIf=\"!serve.data\">Logout</button>\n              </div>\n            <!--/.nav-collapse -->\n              </div>\n             </div>\n          </div>\n      </div>\n    </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/component/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //--- ==== import for routing


// ---===import for animation---===

var NewHeaderComponent = (function () {
    // menuiconshow:boolean;
    function NewHeaderComponent(router, _cookieService, serve) {
        this.router = router;
        this._cookieService = _cookieService;
        this.serve = serve;
        // ---=== These are animation states---===
        this.state = 'open';
        var loggedinUser = this._cookieService.get("hwUserToken");
        var currentUser = this._cookieService.get("userDetail");
        if (currentUser) {
            this.userDetail = JSON.parse(currentUser);
        }
        console.log(this.userDetail);
        if (loggedinUser) {
            this.serve.hitLogin(false, this.userDetail);
        }
        else
            this.serve.hitLogin(true, false);
    }
    NewHeaderComponent.prototype.ngOnInit = function () {
    };
    NewHeaderComponent.prototype.logoutUser = function () {
        this.serve.hitLogin(true, false);
        this._cookieService.remove("hwUserToken", '/');
        this._cookieService.remove("userDetail", '/');
        this.router.navigate(['/login']);
    };
    return NewHeaderComponent;
}());
NewHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-header',
        template: __webpack_require__("../../../../../src/app/component/shared/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/shared/header/header.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])("fadeInOut", [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])("open", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])("closed", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])("open <=> closed", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])("3000ms")),
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* SharedDataService */]) === "function" && _c || Object])
], NewHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/thumbnailsphoto/thumbnailsphoto.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container.thirdcontainer {\n    width: 100%;\n} \nh4 {\n    text-transform: uppercase;\n    text-align: center;\n    font-size: 16px;\n}\n.photo-points-space {\n    margin-top: 20px;\n    margin-bottom: 35px;\n}\n.photopoints-info {\n    border-bottom: 1px dashed #cac9c9;\n    margin-bottom: 10px;\n    padding-bottom: 10px;\n}\nh2 {\n    font-size: 32px;\n    text-align: center;\n    margin: 30px 0 30px 0;\n    color: #246f24;\n}\n.row.second-view-space\n p {\n    font-weight: bold;\n}\n.thirdoption-year:first-child {\n    border: 0;\n}\n.winter {\n    text-align: right;\n    border-top: 1px solid #eaeaea;\n}\n\n.winter .btn {\n    width: 100%;\n    text-align: center;\n    border-radius: 0;\n\n}\n.winter .col-sm-2 {\n    padding: 0;\n    text-align: center;\n}\n.photo-points-winter {\n    margin-bottom: 30px;\n    margin-top: 20px;\n}\n.photo-points-winter h4 {\n    line-height: 90px;\n    vertical-align: middle;\n    display: block;\n}\n\n.photo-points-space {\n    border-top: 1px solid #eaeaea;\n}\n.year-winter-list {\n    padding-left: 0;\n}\n.second-view{\n    margin: 20px 0;\n}\n.yearlist {\n    /*width: 2000px;*/\n    margin: 0;\n}\n.yearlist-c{\n\n    margin: 0;\n}\n.year-con{\n    width: 100%;\n    overflow: hidden;\n    float: left;\n    height: 37px;\n    position: relative;\n}\n.year-winter-list ul\n li {\n    display: inline-block;\n    width: 200px;\n    padding-left: 10px;\n    box-sizing: border-box;\n    \n}\n.year-winter-list ul\n li img{\n    width: 100%;\n    max-height: 140px;\n    min-height: 140px;\n }\n.csectionview .winterview-list li ul li {\n    width: 200px!important;\n    padding: 0 2px;\n}\n\n.year-winter-list li.season-group {\n    width: 440px!important;\n}\n.thirdoption-years li {\n    min-width: 800px;\n    padding-left: 0!important;\n    margin-right: 10px;\n    margin-left: 10px;\n\n}\n.thirdoption-view li:nth-child(4n){\n    margin-right: 5px;\n}\n.space-photo-points{\n    padding: 18px 0;\n    border-top: 1px solid #eaeaea;\n/*    width: 2000px;*/\n}\n\n.yearlist.second-img-view, .photo-pointssecond,.yearlist-c.second-img-view{\n    border-top: 1px solid #eaeaea;\n    border-bottom: 1px solid #eaeaea;\n    margin-bottom: 30px;\n}\n\n.winterview-list {\n    margin: 0 0 25px 0;\n   /* width: 2000px;*/\n}\n.photo-points-id{\n    padding: 38px 0 0 0;\n    text-align: center;\n    min-height: 140px;\n    margin-bottom: 25px;\n}\n.winter h4 {\n    margin: 0;\n    padding: 10px 0 9px;\n    min-height: 34px;\n}\n/*---=== option B select ===---*/\n\n.viwe-option img {\n    width: 35px;\n    display: inline-block;\n}\n.viwe-option a {\n    display: inline-block;\n    line-height: 55px;\n}\n.thirdoption-year {\n    border-top: 1px solid #eaeaea;\n}\n.thirdoption-view .winterview-list li\n a {\n    min-height: auto;\n    display: inline-block;\n    line-height: 115px;\n}\n.season-space{\n    min-height: 169px;\n    padding: 30px 0;\n    margin-bottom: 0;\n}\n.second-view .winter-img.spring-view ul {\n    margin-bottom: 0;\n    width: 1500px;\n    border-bottom: 1px dashed #eaeaea;\n    padding:15px 0;\n}\n.photo-points-border {\n    border-top: 1px solid #eaeaea;\n\n    margin-top: 15px;\n    margin-bottom: 35px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.thirdoption-scroll {\n    height: 579px;\n    overflow-y: scroll;\n    overflow-x: hidden;\n}\n.yearlist-section li {\n    width: 187px;\n    display: inline-block;\n}\n.Asectionview {\n    overflow-x: scroll;\n}\n\n.yearlist-section {\n    width: 1500px;\n}\n.Asectionview .photo-points-space{\n    margin-top: 20px;\n    margin-bottom: 0; \n}\n.second-view-space.season-space.thirdview{\n    padding: 30px 0 0 0;\n    min-height: 152px;\n    margin-bottom: 20px;\n    line-height: 60px;\n}\n.second-view-space p {\n    margin: 30px 0 10px;\n}\nimg.loader {\n    width: auto;\n    max-width: 80px;\n    margin: 0 auto;\n}\n\n.loading-img {\n    text-align: center;\n    padding: 40px 0;\n}\n.winterview-list li\n a {\n    min-height: 104px;\n    display: inline-block;\n    line-height: 150px;\n}\n.viwe-option .active {\n    border-bottom: 2px solid #256f24;\n}\nul.season-list {\n    width: 850px;\n    display: inline-block;\n    padding-left: 10px;\n}\n\nbody .year-winter-list .season-area .season-list li {\n    width: 24%!important;\n    display: inline-block;\n    text-align: center;\n}\n\n.season-list li {\n    width: 195px!important;\n    text-align: center;\n    font-weight: bold;\n}\n.photo-points-border .year-winter-list li.season-group.third-views {\n    width: 850px!important;\n    vertical-align: top;\n}\n\n.year-winter-list .winterview-list .img-cover{\n    min-height: 140px!important;\n    max-height: 140px!important;\n    text-align: center;\n}\n.year-winter-list .winterview-list .img-cover img{\n    height: auto;\n    min-height: auto;\n    margin: 0 auto;\n}\n#sarea{\n    max-width: 100%;\n    overflow-y: scroll;\n}\n.year-img-con{\n    position: relative;\n}\n#year-list{\n    position: absolute;\n}\n.season-view {\n    position: relative;\n    overflow: hidden;\n    border-top: 1px solid #eaeaea;\n}\n.season-view-list{\n    position: absolute;\n}\n.year-pad {\n    margin-right: 0;\n    padding-right: 0;\n}\n.year-pad .photo-pointssecond,.year-pad .photo-pointssecond{\n    margin-bottom: 0!important;\n}\n.second-view .year-con {\n    height: 39px;\n    border-bottom: 1px solid #eaeaea;\n}   \n.second-view  .season-view {\n    border:0;\n}\n.third-view .year-img-con .year-con{\n    height: 40px;\nborder-bottom: 1px solid #eaeaea;\n}\n@media only screen and (max-width: 767px) {\n\n.row.photo-points-winter h4{\n    line-height: normal;\n    padding-bottom: 10px;\n}\n.row.photo-points-winter{\n    margin-top: 10px;\n}\n.second-option-id {\n    line-height: 32px;\n}\n/*--section C--*/\n.row.photo-points-space\n h4 {\n    font-size: 12px;\n    padding: 0;\n}\n.row.photo-points-space .col-xs-2 {\n    padding-left: 0;\n}\n}\n\n@media only screen and (max-width: 767px) {\n\n.row.photo-points-winter{\n    margin-bottom: 15px;\n}\n.row.photo-points-space{\n    margin-bottom: 20px;\n}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/thumbnailsphoto/thumbnailsphoto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container thirdcontainer\">\n  <h2 class=\"thumbpoints-title\">{{title}}</h2>\n  <div class=\"row select-option\">\n  <div class=\"col-xs-12 col-sm-9\">\n    <h3>Location Post : {{sphotoTitle}}</h3>\n  </div>\n<!-- === View Options ===-->\n  <div class=\"col-xs-4 col-sm-1 viwe-option\">\n   <a (click)=\"firstoption()\" [class.active]=\"selectfirstoption\" title=\"Season x Year\">\n      <img src=\"../../../assets/images/Group1.png\" />\n    </a>   \n  </div>\n  <div class=\"col-xs-4 col-sm-1 viwe-option\" title=\"View x Year\">\n   <a  (click)=\"secondoption()\" [class.active]=\"selectsecondoption\" ><img src=\"../../../assets/images/Group2.png\" /></a>\n  </div>\n  <div class=\"col-xs-4 col-sm-1 viwe-option\" title=\"Chronological\">\n   <a  (click)=\"thirdoption()\" [class.active]=\"selectthirdoption\"><img src=\"../../../assets/images/Group3.png\" /></a>\n  </div>\n  </div>\n<!-- ===Show loading image === -->\n<div class=\"loading-img\" *ngIf=\"loadingimg\">\n  <img class=\"loader\" src=\"../../../assets/images/loader.gif\" >\n</div>\n<!-- === This section after loading -->\n<div class=\"views-section\" *ngIf=\"!loadingimg\">\n<!-- === selectfirstoption Show when click on first option ===-->\n<div class=\"\" *ngIf=\"selectfirstoption\">\n  <div class=\"row photo-points-space\">\n    <div class=\" col-sm-3 year-pad\" >\n        <h4>Year</h4> \n        <!-- === view id and season show leftside and year show:on top -->\n        <div class=\"season-view\" [style.height]=\"containerHeight\">\n          <div class=\"season-view-list\">\n            <div class=\"row winter\">\n              <div class=\" col-sm-6\">\n                <button class=\"btn btn-success\">WINTER</button>\n              </div>\n                <div class=\"col-xs-6\">\n                <h4>view</h4> \n              </div>\n              <div class=\"col-sm-6 col-sm-offset-6 photo-points-id\" *ngFor=\"let winteryear of winterData\">\n                {{winteryear.view}}\n              </div>              \n            </div>\n\n             <div class=\"row winter\">\n              <div class=\"col-sm-6\">\n                <button class=\"btn btn-success\">SPRING</button>\n              </div>\n              <div class=\"col-xs-6\">\n                <h4>view</h4> \n              </div>\n               <div class=\"col-sm-6 col-sm-offset-6 photo-points-id\" *ngFor=\"let spring of springData\">\n                {{spring.view}}\n              </div> \n                  \n            </div>\n\n            <div class=\"row winter\">\n              <div class=\" col-sm-6\">\n                <button class=\"btn btn-success\">SUMMER</button>\n              </div>\n               <div class=\"col-xs-6\">\n                <h4>view</h4> \n              </div>\n              <div class=\"col-sm-6 col-sm-offset-6 photo-points-id\" *ngFor=\"let summer of summerData\">\n                {{summer.view}}\n              </div>    \n            </div>\n           \n            <div class=\"row winter\">\n              <div class=\"col-sm-6\">\n                <button class=\"btn btn-success\">AUTUMN</button>\n              </div>\n                <div class=\"col-xs-6\">\n                <h4>view</h4> \n              </div>\n              <div class=\"col-sm-6 col-sm-offset-6 photo-points-id\" *ngFor=\"let autumn of autumnData\">\n                {{autumn.view}}\n              </div>      \n            </div>\n          </div>  \n        </div>  \n    </div>\n    <div class=\" col-sm-9 year-winter-list year-img-con\" >\n      <div class=\"year-con\">\n        <ul id=\"year-list\" class=\"yearlist\" [style.width]=\"firstViewWidth\">\n           <li  *ngFor=\"let year of years\">\n          <h4>{{year.year}}</h4>\n          </li>\n        </ul>\n      </div>  \n      <!-- ===selectfirstoption image section === -->\n      <div id=\"sarea\" [style.width]=\"containerWidth\" [style.height]=\"containerHeight\">\n        <div class=\"space-photo-points\" [style.width]=\"firstViewWidth\"></div>\n        <div class=\"row winter-img\">\n          <div class=\"\" *ngFor=\"let winter of winterData\" >\n            <ul class=\"winterview-list\" [style.width]=\"firstViewWidth\">\n              <li *ngFor=\"let mainyear of years\" >\n                <div class=\"\" *ngFor=\"let imagesData of winter.data\">\n                  <a class=\"img-cover\" *ngIf = \"mainyear.year==imagesData.year\" routerLink=\"/imagedetails/{{imagesData.id}}\" >\n                    <img  src=\"{{imagesData.file_thumb_location_aws}}\" /> \n                  </a>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"space-photo-points\" [style.width]=\"firstViewWidth\"></div>\n        <div class=\"row spring-img\">\n          <div class=\"\" *ngFor=\"let spring of springData\" >\n            <ul class=\"winterview-list\" [style.width]=\"firstViewWidth\">\n              <li *ngFor=\"let mainyear of years\" >\n                <div *ngFor=\"let sprimagesData of spring.data\">\n                  <a class=\"img-cover\" *ngIf = \"mainyear.year==sprimagesData.year\" routerLink=\"/imagedetails/{{sprimagesData.id}}\" >\n                    <img  src=\"{{sprimagesData.file_thumb_location_aws}}\" /> \n                  </a>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div> \n        \n        <div class=\"space-photo-points\" [style.width]=\"firstViewWidth\"></div>\n        <div class=\"row summer-img\">\n          <div class=\"\" *ngFor=\"let summer of summerData\" >\n            <ul class=\"winterview-list\" [style.width]=\"firstViewWidth\">\n              <li *ngFor=\"let mainyear of years\" >\n                <div *ngFor=\"let simagesData of summer.data\">\n                  <a class=\"img-cover\" *ngIf = \"mainyear.year==simagesData.year\" routerLink=\"/imagedetails/{{simagesData.id}}\" >\n                    <img  src=\"{{simagesData.file_thumb_location_aws}}\" /> \n                  </a>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n        \n\n         <div class=\"space-photo-points\" [style.width]=\"firstViewWidth\"></div>\n        <div class=\"row autumn-img\">\n          <div class=\"\" *ngFor=\"let autumn of autumnData\" >\n            <ul class=\"winterview-list\" [style.width]=\"firstViewWidth\">\n              <li *ngFor=\"let mainyear of years\" >\n                <div *ngFor=\"let aimagesData of autumn.data\" id=\"{{aimagesData.id}}\">\n                <a class=\"img-cover\" *ngIf = \"mainyear.year==aimagesData.year\" routerLink=\"/imagedetails/{{aimagesData.id}}\" >\n                  <img  src=\"{{aimagesData.file_thumb_location_aws}}\" /> \n                </a>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- === selectsecondoption view Show when click on second option ===-->\n\n<div class=\"second-view\" *ngIf=\"selectsecondoption\">\n  <div class=\"row\">\n    <div class=\" col-sm-3 year-pad\" >   \n      <div class=\"row photo-pointssecond\">\n        <div class=\"col-sm-6\">\n          <h4>VIEW</h4>\n        </div>\n        <div class=\"col-xs-6\">\n          <h4>SEASON</h4> \n        </div>  \n      </div>\n<!-- === selectsecondoption view  leftside:id and season and top show:year ===--> \n      <div class=\"season-view\" [style.height]=\"containerHeight\">\n        <div class=\"season-view-list\">\n          <div class=\"row second-view-space  text-center\" *ngFor=\"let viewData of secondViewsData\" >   \n          <div class=\" col-sm-6 \">\n            <p>{{viewData.view}}</p>\n          </div>     \n          <div class=\"col-sm-6 rightsectionview\">\n            <div class=\"row second-view-space text-center season-space\" *ngFor=\"let seasonData of viewData.data\">\n              <div class=\"\">\n                {{seasonData.season}}\n              </div>     \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-9 year-winter-list year-img-con\" >\n     <div class=\"year-con\">\n        <ul id=\"year-list\" class=\"yearlist second-img-view\" [style.width]=\"secondViewWidth\">\n          <li  *ngFor=\"let year of secondviewyears\">\n          <h4>{{year.year}}</h4>\n          </li>\n        </ul>\n      </div>\n <!-- selectsecondoption Image section -->\n      <div id=\"sarea\" [style.width]=\"containerWidth\" [style.height]=\"containerHeight\">  \n          <div class=\"Bsectionview\">\n              <div class=\"row winter-img spring-view\" *ngFor=\"let imagesData of secondViewImagesData\">\n                <div class=\"col-xs-12\" >\n                   <ul class=\"winterview-list\" [style.width]=\"secondViewWidth\">\n                     <li *ngFor=\"let secondviewyear of secondviewyears\">\n                      <div *ngFor=\"let mediainfo of imagesData.info\">\n                        <a class=\"img-cover\" *ngIf = \"secondviewyear.year==mediainfo.year\" routerLink=\"/imagedetails/{{mediainfo.id}}\" >\n                          <img src=\"{{mediainfo.file_thumb_location_aws}}\" /> \n                        </a>\n                      </div>\n                      </li>\n                    </ul>\n                </div>\n              </div> \n          </div>\n        </div>  \n    </div>\n  </div>\n</div>\n\n<!-- === selectthirdoption Show when click on third option ===-->\n  <div class=\"third-view\" *ngIf=\"selectthirdoption\">\n     <div class=\"row photo-points-border\">\n        <div class=\" col-sm-2 year-pad\" >   \n        <div class=\"row photo-pointssecond\">\n          <div class=\"col-sm-12\">\n            <h4>VIEW</h4>\n          </div>  \n        </div>\n        <div class=\"season-view\" [style.height]=\"containerHeight\">\n          <div class=\"season-view-list\">\n            <div *ngFor=\"let viewData of thirdViewsData\" class=\"row second-view-space season-space thirdview text-center\">   \n              <div class=\" col-sm-12 \">\n                <p>{{viewData.name}}</p>\n              </div>    \n            </div> \n          </div>\n        </div>    \n\n      </div> \n    <!-- ===view section by id=== -->\n      <div class=\"col-sm-10 year-winter-list year-img-con\">\n        <div class=\"year-con\">\n          <ul id=\"year-list\" class=\"yearlist-c second-img-view thirdoption-years\" [style.width]=\"thirdViewWidth\">\n            <li *ngFor=\"let year of thirdviewyears\">\n              <h4>{{year.year}}</h4>\n            </li>     \n          </ul>\n        </div>  \n    <!-- selectthirdoption Image section -->\n      <div class=\"csectionview\">\n        <div class=\"year-con\">\n          <div id=\"year-list\" class=\"row option-c-view year-season \" [style.width]=\"thirdViewWidth\">\n            <div class=\"season-area\" >\n                <ul class=\"season-list\" *ngFor=\"let year of thirdviewyears\">\n                  <li  *ngFor=\"let season of seasonOrder\">\n                      {{season}}\n                  </li>\n                </ul>      \n            </div>\n          </div> \n        </div> \n\n           <div id=\"sarea\" [style.width]=\"containerWidth\" [style.height]=\"containerHeight\">\n            <div class=\"row option-c-view\" [style.width]=\"thirdViewWidth\">\n              <div class=\"col-xs-12\" >\n            \n\n               <div class=\"thirdoption-view\" *ngFor=\"let viewData of thirdViewsData\">\n                  <ul class=\"winterview-list\" >\n                    <li class=\"season-group third-views\" *ngFor=\"let years of thirdviewyears\">\n                      <ul class=\" list-view-c\" *ngFor=\"let imagesData of viewData.data\">\n                        <div *ngIf=\"imagesData.year == years.year\">\n                          <li  *ngFor=\"let season of totalSeason\"> \n                            <div  *ngFor=\"let seasonData of imagesData.data\">\n                              <a class=\"img-cover\"  *ngIf=\"season==seasonData.season\" routerLink=\"/imagedetails/{{seasonData.id}}\">\n                                <img src=\"{{seasonData.file_thumb_location_aws}}\" />\n                              </a>\n                            </div>\n                          </li>\n                        </div>\n                      </ul>\n                    </li>    \n                  </ul>\n                </div>                \n              </div>\n            </div> \n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/thumbnailsphoto/thumbnailsphoto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thumbnailsphoto_service__ = __webpack_require__("../../../../../src/app/component/thumbnailsphoto/thumbnailsphoto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThumbnailsphotoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThumbnailsphotoComponent = (function () {
    function ThumbnailsphotoComponent(route, sphotoService) {
        this.route = route;
        this.sphotoService = sphotoService;
        this.title = "View Thumbnails Photo Points"; //--- ===create input for title 
        this.sphotoTitle = [];
        this.formData = [];
        this.pageContent = [];
        this.years = [];
        this.winterData = [];
        this.summerData = [];
        this.springData = [];
        this.autumnData = [];
        this.secondViewsData = [];
        this.secondviewyears = [];
        this.secondViewImagesData = [];
        this.thirdviewyears = [];
        this.thirdViewsData = [];
        this.seasonOrder = [];
        this.selectfirstoption = true;
        this.selectsecondoption = false;
        this.selectthirdoption = false;
        this.loadingimg = false;
        this.formData = new FormData();
        this.seasonOrder.push('Winter', 'Spring', 'Summer', 'Autumn');
    }
    ThumbnailsphotoComponent.prototype.ngOnInit = function () {
        this.sphotoTitle = this.route.snapshot.params['title'];
        this.getFirstView();
    };
    // --- responce from service---===
    ThumbnailsphotoComponent.prototype.getFirstView = function () {
        var _this = this;
        this.loadingimg = true;
        var URL = 'pseriesdetail/firstview';
        this.formData.append('postname', this.sphotoTitle);
        this.sphotoService.thumbnailsphotoinfo(this.formData, URL).subscribe(function (res) {
            _this.winterData = "";
            _this.summerData = "";
            _this.autumnData = "";
            _this.springData = "";
            _this.winterData = res.winterData;
            _this.summerData = res.summerData;
            _this.autumnData = res.autumnData;
            _this.springData = res.springData;
            _this.years = res.years;
            var wid = _this.years.length * 190 + 200;
            console.log(wid, "wid");
            _this.firstViewWidth = wid.toString() + "px";
            __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].interval(1000)
                .takeWhile(function () { return _this.loadingimg = false; })
                .subscribe(function (i) {
            });
        });
    };
    // ---=== first View option select---====
    ThumbnailsphotoComponent.prototype.firstoption = function () {
        this.selectfirstoption = true;
        this.selectsecondoption = false;
        this.selectthirdoption = false;
        this.getFirstView();
    };
    // ---=== secondoption select---====
    ThumbnailsphotoComponent.prototype.secondoption = function () {
        var _this = this;
        this.loadingimg = true;
        this.selectsecondoption = true;
        this.selectfirstoption = false;
        this.selectthirdoption = false;
        this.sphotoTitle = this.route.snapshot.params['title'];
        var URL = 'pseriesdetail/secondview';
        this.formData.append('postname', this.sphotoTitle);
        this.sphotoService.thumbnailsphotoinfo(this.formData, URL).subscribe(function (res) {
            _this.secondviewyears = res.years;
            _this.secondViewsData = res.ViewsData;
            _this.secondViewImagesData = res.information;
            var wid = _this.secondviewyears.length * 185 + 200;
            _this.secondViewWidth = wid.toString() + "px";
            __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].interval(1000)
                .takeWhile(function () { return _this.loadingimg = false; })
                .subscribe(function (i) {
            });
        });
    };
    // ---=== thirdoption select---==== 
    ThumbnailsphotoComponent.prototype.thirdoption = function () {
        var _this = this;
        this.loadingimg = true;
        this.selectthirdoption = true;
        this.selectsecondoption = false;
        this.selectfirstoption = false;
        this.sphotoTitle = this.route.snapshot.params['title'];
        var URL = 'pseriesdetail/thirdview';
        this.formData.append('postname', this.sphotoTitle);
        this.sphotoService.thumbnailsphotoinfo(this.formData, URL).subscribe(function (res) {
            _this.thirdviewyears = res.years;
            _this.thirdViewsData = res.ViewsData;
            _this.totalSeason = ["WIN", "SPR", "SUM", "AUT"];
            var wid = _this.thirdviewyears.length * 900;
            _this.thirdViewWidth = wid.toString() + "px";
            console.log(_this.thirdViewWidth);
            __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].interval(1000)
                .takeWhile(function () { return _this.loadingimg = false; })
                .subscribe(function (i) {
            });
        });
    };
    ThumbnailsphotoComponent.prototype.ngAfterViewChecked = function () {
        var wid = $(window).height() - 100;
        var hei = $(window).width();
        this.containerHeight = wid.toString() + "px";
        this.containerWidth = hei.toString() + "px";
        $('#sarea').scroll(function () {
            var left = $(this).scrollLeft();
            var top = $(this).scrollTop();
            $(".season-view-list").css("top", "-" + top + "px");
            $("#year-list,.year-season").css("left", "-" + left + "px");
        });
    };
    return ThumbnailsphotoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ThumbnailsphotoComponent.prototype, "title", void 0);
ThumbnailsphotoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-thumbnailsphoto',
        template: __webpack_require__("../../../../../src/app/component/thumbnailsphoto/thumbnailsphoto.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/thumbnailsphoto/thumbnailsphoto.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__thumbnailsphoto_service__["a" /* ThumbnailsphotoService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__thumbnailsphoto_service__["a" /* ThumbnailsphotoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__thumbnailsphoto_service__["a" /* ThumbnailsphotoService */]) === "function" && _b || Object])
], ThumbnailsphotoComponent);

var _a, _b;
//# sourceMappingURL=thumbnailsphoto.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/thumbnailsphoto/thumbnailsphoto.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authguard_service__ = __webpack_require__("../../../../../src/app/authguard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThumbnailsphotoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ThumbnailsphotoService = (function () {
    function ThumbnailsphotoService(_http, _cookieService, auth) {
        this._http = _http;
        this._cookieService = _cookieService;
        this.auth = auth;
    }
    ThumbnailsphotoService.prototype.thumbnailsphotoinfo = function (formdata, url) {
        var _this = this;
        var token = this._cookieService.get("hwUserToken");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
                'Accept': 'application/json',
                'Authorization': 'Bearer' + token
            })
        });
        var _url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + url;
        return this._http.post(_url, formdata, options)
            .map(function (response) {
            console.log(response.status, "st");
            return response.json();
        }).catch(function (error) {
            if (error.status === 401) {
                _this.auth.logOut(error);
            }
            return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(error);
        });
    };
    return ThumbnailsphotoService;
}());
ThumbnailsphotoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__authguard_service__["a" /* AuthGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__authguard_service__["a" /* AuthGuard */]) === "function" && _c || Object])
], ThumbnailsphotoService);

var _a, _b, _c;
//# sourceMappingURL=thumbnailsphoto.service.js.map

/***/ }),

/***/ "../../../../../src/app/component/updatethumbnailsphoto/updatethumbnailsphoto.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".choose-file .fa {\n    font-size: 33px;\n    border: 1px solid #246f24;\n    padding: 15px;\n    border-radius: 50%;\n    margin: 0 0 28px 0;\n    color: #999696;\n}\n.btn {\n    padding: 11px 22px;\n    font-size: 16px;\n    border-radius: 3px;\n}\nbutton a{\n    color: #fff;\n}\nh2 {\n    font-size: 30px;\n    text-align: center;\n    margin: 40px 0 50px 0;\n    color: #246f24;\n}\n.image-upload{\n    display: none;\n     padding: 20px;\n    border: 1px solid #cfcdcd;\n    font-size: 18px;\n    color: #246f24;\n}\n.select {\n    width: 65%;\n    margin: 0 10px 20px 0;\n    outline: 0;\n    padding: 5px;\n}\n.save-cancle button {\n    margin: 0 25px 0 0;\n}\n.img-info img {\n    width: 150px;\n    vertical-align: text-top;\n}\n.img-info {\n    margin: 20px 0 0 0;\n}\nimg.loader {\n    max-width: 50px;\n}\n.form-group.form-controls {\n    max-width: 65%;\n}\n.pull-right.cancel {\n    margin: 0 20px 0 0;\n}\n.response-data span {\n    word-break: break-all;\n}\n.response-img img {\n    max-width: 300px;\n    max-height: 300px;\n}\n.uploaded-links {\n    margin-top: 20px;\n}\n.uploaded-links a {\n    color: #fff;\n    margin-right: 10px;\n}\n.msg{\n    color: red;\n}\n/*---=== Media Query Start Here ---===*/\n@media only screen and (max-width: 992px) {\n    .imgselectoption .btn{\n        padding: 6px 10px;\n        font-size: 14px;\n    }\n}\n\n@media only screen and (max-width: 767px) {\n    .imgselectoption {\n        text-align: center;\n        margin-top: 25px;\n    }\n    h2{\n        margin: 20px 0;\n    }\n}\n\n@media only screen and (max-width: 420px) {\n    .select{\n    width: 100%;\n    margin: 0 10px 20px 0;\n}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/updatethumbnailsphoto/updatethumbnailsphoto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container bg-img\" *ngIf=\"!userPermissions\">\n\t<p class=\"text-center\">{{Message}}</p>\n</div>\n\n<div class=\"container bg-img\" *ngIf=\"userPermissions\">\n\t<h2>Update Post Data</h2>\n\t<div class=\"row text-center\" *ngIf=\"pageload\">\n\t\t<img class=\"loader\" src=\"../../../assets/images/loader.gif\" >\n\t</div>\n\t<div *ngIf=\"!pageload\">\n\t<div class=\"row\" *ngIf=\"!imageUploded\" >\n\t<p class=\"text-center msg\" > {{message}}</p>\n\t\t<form #imageinfo=\"ngForm\"  (ngSubmit)=\"onSubmit(imageinfo.value)\" >\n\t\t\t<div class=\"col-sm-4 photo-id form-group text-center\">\n\t\t\t<!-- === select file (note:if we want single image select remove multiple in input) === -->\n\t\t\t\t<input name=\"myFile\" #fileInput class=\"image-upload\" type=\"file\" hidden (change)=\"uploadFile($event)\" ngModel accept=\"image/*\" />\n\t\t\t\t<div class=\"choose-file\">\n\t\t\t\t<p><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i></p>\n\t\t\t\t<a (click)=\"chooseFileEnable()\"  class=\"btn btn-success\">Change Image</a>\n\t\t\t\t\t<div class=\"img-info\">\n\t\t\t\t\t\t<img [src]=\"imageUrl\">\n\t\t\t\t\t\t<p>{{name}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- === select serise and more option === -->\n\t\t\t<div class=\"col-sm-8 imgselectoption\" >\n\t\t\t\t\n\t\t\t\t<div class=\"form-group\">      \n\t\t\t\t<div *ngIf=\"imageUplodedStatus\" class=\"selectseriesoption\">\n\t\t\t\t\t<select name=\"series\" class=\"select\" placeholder=\"Series\" #seriesType (change)=\"onItemChange(seriesType.value)\" [(ngModel)]=\"mediaInfo.series\">\n\t\t\t\t\t  <option value=\"\">--Select Series--</option>\n\t\t\t\t\t  <option  [selected]=\"mediaInfo.series == 'P'\"  value=\"P\">P</option>\n\t\t\t\t\t  <option [selected]=\"mediaInfo.series == 'S'\"  value=\"S\">S</option>\n\t\t\t\t\t  <option  [selected]=\"mediaInfo.series == 'L'\" value=\"L\">L</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\n\n\t\t\t<!-- === These select input show when above select choose any option === -->\n\t\t\t<div class=\"form-group\">      \n\t\t\t\t<select name=\"year\" class=\"select select-year\" #year *ngIf=\"selectyearoption\" (change)=\"onyearChange(year.value)\" [(ngModel)]=\"mediaInfo.year\" >\n\t\t\t\t  <option value=\"\">--Select year--</option>\n\t\t\t\t  <option *ngFor=\"let year of allYears; let i = index\" [selected]=\"mediaInfo.year == year\" value=\"{{year}}\" >{{year}}</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">      \n\t\t\t\t<select name=\"Season\" class=\"select select-year\" #season *ngIf=\"selectspringoption\" (change)=\"onSeasonChange(season.value)\" [(ngModel)]=\"mediaInfo.season\" >\n\t\t\t\t  <option value=\"\">----Select Season----</option>\n\t\t\t\t  <option  [selected]=\"mediaInfo.season === 'WIN' \"  value=\"WIN\">Winter</option>\n\t\t\t\t  <option  [selected]=\"mediaInfo.season === 'SPR'\"  value=\"SPR\">Spring</option>\n\t\t\t\t  <option  [selected]=\"mediaInfo.season === 'SUM'\" value=\"SUM\">Summer</option>\n\t\t\t\t  <option  [selected]=\"mediaInfo.season === 'AUT'\" value=\"AUT\">Autumn</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">      \n\t\t\t\t<select name=\"Location\" class=\"select select-year\" #location *ngIf=\"selectlocationoption\" (change)=\"onLocationChange(location.value)\" [(ngModel)]=\"mediaInfo.post_name\">\n\t\t\t\t  <option value=\"\">----Select Location----</option>\n\t\t\t\t  <option *ngFor=\"let post of allPosts\" value=\"{{post.title}}\" [selected]=\"post.title == mediaInfo.post_name\">{{post.title}}</option>\n\t\t\t\t  \n\t\t\t\t</select>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">      \n\t\t\t\t<select name=\"Image\" class=\"select select-year\" #imageType *ngIf=\"selectimagetype\" (change)=\"onImageChange(imageType.value)\" [(ngModel)]=\"mediaInfo.image_view\">\n\t\t\t\t  <option value=\"\">----Select Image Type----</option>\n\t\t\t\t  <option *ngFor=\"let type of allImageType; let i = index\" value=\"{{type}}\" [selected]=\"type == mediaInfo.image_view\">{{type}}</option>\n\t\t\t\n\t\t\t\t</select>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">    \n\t\t\t\t<select name=\"View\" class=\"select select-year\" #view *ngIf=\"selectview\" (change)=\"onViewChange(view.value)\" [(ngModel)]=\"mediaInfo.views\">\n\t\t\t\t  <option value=\"\">----Select View----</option>\n\t\t\t\t  <option *ngFor=\"let values of allvalues; let i = index\" value=\"{{values}}\" [selected]=\"values == mediaInfo.views\" id=\"{{values}}\">{{values}}</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\n\n\t\t\t\t<div class=\"form-group form-controls\">\n\t\t\t\t\t<img class=\"loader\" src=\"../../../assets/images/loader.gif\" *ngIf=\"loadingimg\">\n\t\t\t\t\t<!-- === Button for save and cancle the process === -->\n\t\t\t\t\t<button [disabled]=\"disabledButton\" type=\"submit\" class=\"btn btn-success pull-right\" *ngIf=\"formSubmit\"><a>save</a></button>\n\t\t\t\t\t<button type=\"\" class=\"btn btn-success pull-right cancel\"  *ngIf=\"imageUplodedStatus\"><a routerLink=\"\">cancel</a></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n\n\n\t<!-- When Image uploaded successfully -->\n\t<div class=\"row\" *ngIf=\"imageUploded\">\n\t\t<div class=\"col-xs-10 col-xs-offset-1\">\n\t\t\t<div class=\"col-xs-12 \">\n\t\t\t\t<p>Username: Developer</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-10 col-xs-offset-1\">\n\t\t\t<div class=\"col-xs-12 \">\n\t\t\t\t<span>File uploaded successfully with following details.</span>\n\t\t\t\t<br><br>\n\t\t\t</div>\t\t\n\t\t\t<div class=\"col-xs-4 filename\">\n\t\t\t\t<label>File Name:</label>\n\t\t\t\t<div class=\"response-data\">\n\t\t\t\t\t<span>{{fileUrl}}</span>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t<div class=\"col-xs-6 filename\">\n\t\t\t\t<label>Uploaded Image:</label>\n\t\t\t\t<div class=\" response-img\">\n\t\t\t\t\t<img src=\"{{fileUrl}}\"/>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t</div>\t\n\n\t</div>\n\t<div class=\"row uploaded-links\" *ngIf=\"imageUploded\">\n\t\t<div class=\"col-xs-10 col-xs-offset-1 \" >\n\t\t\t<a class=\"btn btn-success\" routerLink=\"/imagedetails/{{imageId}}\" >View Full Details</a>\n\t\t\t<a class=\"btn btn-success\" (click)=\"AddAnotherImage()\">Add Another Image</a>\n\t\t\t<a class=\"btn btn-success\" routerLink=\"\">Back to Home Page</a>\n\t\t</div>\t\n\t</div>\t\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/component/updatethumbnailsphoto/updatethumbnailsphoto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__updatethumbnailsphoto_service__ = __webpack_require__("../../../../../src/app/component/updatethumbnailsphoto/updatethumbnailsphoto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_service__ = __webpack_require__("../../../../../src/app/shared-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatethumbnailsphotoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdatethumbnailsphotoComponent = (function () {
    function UpdatethumbnailsphotoComponent(route, updatethumbnails, CMService) {
        this.route = route;
        this.updatethumbnails = updatethumbnails;
        this.CMService = CMService;
        this.formData = [];
        this.allYears = [];
        this.allPosts = [];
        this.allImageType = [];
        this.allvalues = [];
        this.imageinfo = [];
        this.fileUrl = "";
        this.imageName = "";
        this.allFileData = [];
        this.mediaInfo = [];
        this.userPermissions = true;
        this.pageload = false;
        this.imageUploded = false;
        this.imageUplodedStatus = true;
        this.disabledButton = false;
        this.selectyearoption = true;
        this.selectspringoption = true;
        this.selectlocationoption = true;
        this.selectimagetype = true;
        this.selectview = true;
        this.formSubmit = false;
        this.loadingimg = false;
        this.formData = new FormData();
        if (CMService.currentUser.role == "visitor") {
            this.userPermissions = false;
            this.Message = "You don't have permission to access this page.";
        }
    }
    //--- === this function used for show the title of upload image---
    UpdatethumbnailsphotoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageload = true;
        this.imageId = this.route.snapshot.params['id'];
        var URL = 'imagedetail/' + this.imageId;
        this.updatethumbnails.getImageInfo(URL).subscribe(function (res) {
            if (res.status == "true") {
                _this.allFileData = res.mediaInfo;
                _this.mediaInfo = res.mediaInfo;
                if (_this.mediaInfo.image_view) {
                    _this.imageName = _this.mediaInfo.year + '-' + _this.mediaInfo.season + '-' + _this.mediaInfo.series + '-' + _this.mediaInfo.post_name + '-' + _this.mediaInfo.image_view + '-' + _this.mediaInfo.views;
                }
                else {
                    _this.imageName = _this.mediaInfo.year + '-' + _this.mediaInfo.series + '-' + _this.mediaInfo.post_name;
                }
                _this.imageId = _this.mediaInfo.id;
                _this.imageUrl = _this.mediaInfo.file_location_aws;
            }
            else {
                _this.imageView = false;
                _this.Message = res.msg;
                _this.imageName = "";
                _this.imageId = 0;
            }
            _this.formData.delete('media_id');
            _this.formData.append('media_id', _this.imageId);
            _this.onItemChange(_this.mediaInfo.series);
            _this.onyearChange(_this.mediaInfo.year);
            _this.onSeasonChange(_this.mediaInfo.season);
            _this.onLocationChange(_this.mediaInfo.post_name);
            if (_this.mediaInfo.series == "P") {
                _this.onImageChange(_this.mediaInfo.image_view);
                _this.onViewChange(_this.mediaInfo.views);
            }
            _this.pageload = false;
        });
    };
    UpdatethumbnailsphotoComponent.prototype.chooseFileEnable = function () {
        this.fileInput.nativeElement.click();
    };
    // ---=== select image send to service ---
    UpdatethumbnailsphotoComponent.prototype.uploadFile = function (event) {
        var _this = this;
        var fileList = event.target.files;
        var file = fileList[0];
        this.formData.delete('image');
        this.formData.append('image', file);
        this.logo = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(event.target.files[0]); //---=== this function used for show upload image---
        this.imageUplodedStatus = true; //---===when it true it show right(select) section
        var element = event.target;
        this.name = element.files[0].name;
        if (element.files.length > 0) {
            if (element.files.length > 0) {
            }
        }
    };
    //---=== Right section functionality 
    UpdatethumbnailsphotoComponent.prototype.onItemChange = function (seriesType) {
        var _this = this;
        this.selectimagetype = false;
        this.selectview = false;
        this.selectlocationoption = false;
        this.selectspringoption = false;
        this.selectyearoption = false;
        if (seriesType == "") {
            return false;
        }
        this.loadingimg = true;
        this.formData.delete('series');
        this.formData.append('series', seriesType);
        this.updatethumbnails.getInfo(this.formData, 'year').subscribe(function (res) {
            if (res.years != null) {
                _this.allYears = [];
                var minYear = parseInt(res.years.start_year);
                var maxYear = minYear + 99;
                _this.selectyearoption = true;
                for (minYear; minYear < maxYear; minYear++) {
                    _this.allYears.push(minYear);
                }
            }
            else {
                var minYear = 2017;
                var maxYear = 2099;
                _this.allYears = [];
                for (minYear; minYear < maxYear; minYear++) {
                    _this.allYears.push(minYear);
                }
                _this.selectyearoption = true;
            }
            _this.loadingimg = false;
        });
    };
    //---on year change
    UpdatethumbnailsphotoComponent.prototype.onyearChange = function (year) {
        var _this = this;
        this.selectimagetype = false;
        this.selectview = false;
        this.selectlocationoption = false;
        this.selectspringoption = false;
        if (year == "") {
            return false;
        }
        this.formData.delete('year');
        this.formData.append('year', year);
        var SelectedSeries = this.formData.get('series');
        if (SelectedSeries != "P") {
            this.updatethumbnails.getInfo(this.formData, 'posts').subscribe(function (res) {
                if (res.posts != null) {
                    _this.allPosts = res.posts;
                    console.log(_this.allPosts, "allPosts");
                    _this.selectlocationoption = true;
                }
            });
        }
        else {
            this.selectspringoption = true;
        }
    };
    //---on season change
    UpdatethumbnailsphotoComponent.prototype.onSeasonChange = function (season) {
        var _this = this;
        this.selectimagetype = false;
        this.selectview = false;
        this.selectlocationoption = false;
        if (season == "") {
            return false;
        }
        this.loadingimg = true;
        this.formData.delete('season');
        this.formData.append('season', season);
        this.updatethumbnails.getInfo(this.formData, 'posts').subscribe(function (res) {
            if (res.posts != null) {
                _this.allPosts = res.posts;
                _this.selectlocationoption = true;
            }
            _this.loadingimg = false;
        });
    };
    //---on location change show image type
    UpdatethumbnailsphotoComponent.prototype.onLocationChange = function (location) {
        var _this = this;
        console.log(location, "location");
        this.selectimagetype = false;
        this.selectview = false;
        if (location == "") {
            return false;
        }
        this.loadingimg = true;
        this.formData.delete('location');
        this.formData.append('location', location);
        var SelectedSeries = this.formData.get('series');
        if (SelectedSeries != "P") {
            this.loadingimg = false;
            this.formSubmit = true;
        }
        else {
            this.updatethumbnails.getInfo(this.formData, 'imagetype').subscribe(function (res) {
                if (res.types != null) {
                    _this.allImageType = res.types;
                    _this.selectimagetype = true;
                }
                _this.loadingimg = false;
            });
        }
    };
    //---on imageType change show view
    UpdatethumbnailsphotoComponent.prototype.onImageChange = function (imageType) {
        var _this = this;
        this.formSubmit = false;
        this.selectview = false;
        if (imageType == "") {
            return false;
        }
        console.log("imageChange");
        this.loadingimg = true;
        this.formData.delete('image_view');
        this.formData.append('image_view', imageType);
        this.updatethumbnails.getInfo(this.formData, 'values').subscribe(function (res) {
            if (res.values != null) {
                _this.allvalues = res.values;
                _this.selectview = true;
            }
            _this.loadingimg = false;
        });
    };
    //---on view
    UpdatethumbnailsphotoComponent.prototype.onViewChange = function (view) {
        if (view == "") {
            return false;
        }
        this.formSubmit = true;
        this.formData.delete('view');
        this.formData.append('view', view);
    };
    UpdatethumbnailsphotoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.disabledButton = false;
        this.loadingimg = true;
        this.updatethumbnails.getInfo(this.formData, 'updatemediadata').subscribe(function (res) {
            if (res.response == 'succes') {
                _this.fileUrl = res.thumbImageUrl;
                _this.imageName = res.image_name;
                _this.imageId = res.imageId;
                _this.imageUploded = true;
                _this.loadingimg = false;
                _this.disabledButton = false;
            }
            else {
                _this.message = res.msg;
                _this.loadingimg = false;
            }
        });
    };
    UpdatethumbnailsphotoComponent.prototype.AddAnotherImage = function () {
        this.imageUploded = false;
        this.disabledButton = false;
        this.selectimagetype = false;
        this.selectview = false;
        this.selectlocationoption = false;
        this.selectspringoption = false;
        this.selectyearoption = false;
        this.imageUrl = "";
        this.name = "";
        this.fileUrl = "";
        this.imageName = "";
        this.imageId = 0;
    };
    return UpdatethumbnailsphotoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], UpdatethumbnailsphotoComponent.prototype, "fileInput", void 0);
UpdatethumbnailsphotoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-updatethumbnailsphoto',
        template: __webpack_require__("../../../../../src/app/component/updatethumbnailsphoto/updatethumbnailsphoto.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/updatethumbnailsphoto/updatethumbnailsphoto.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__updatethumbnailsphoto_service__["a" /* Updatethumbnailsphotoservice */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__updatethumbnailsphoto_service__["a" /* Updatethumbnailsphotoservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__updatethumbnailsphoto_service__["a" /* Updatethumbnailsphotoservice */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_data_service__["a" /* SharedDataService */]) === "function" && _d || Object])
], UpdatethumbnailsphotoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=updatethumbnailsphoto.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/updatethumbnailsphoto/updatethumbnailsphoto.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authguard_service__ = __webpack_require__("../../../../../src/app/authguard.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Updatethumbnailsphotoservice; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Updatethumbnailsphotoservice = (function () {
    function Updatethumbnailsphotoservice(_http, _cookieService, auth) {
        this._http = _http;
        this._cookieService = _cookieService;
        this.auth = auth;
    }
    // --- === upload image save in database (note:pass perameter with type)---
    Updatethumbnailsphotoservice.prototype.getInfo = function (formdata, url) {
        var _this = this;
        var token = this._cookieService.get("hwUserToken");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
                'Accept': 'application/json',
                'Authorization': 'Bearer' + token,
            })
        });
        var _url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + url;
        return this._http.post(_url, formdata, options)
            .map(function (response) {
            return response.json();
        }).catch(function (error) {
            if (error.status === 401) {
                _this.auth.logOut(error);
            }
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error);
        });
    };
    Updatethumbnailsphotoservice.prototype.getImageInfo = function (url) {
        var _this = this;
        var token = this._cookieService.get("hwUserToken");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
                'Accept': 'application/json',
                'Authorization': 'Bearer' + token
            })
        });
        var _url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + url;
        return this._http.get(_url, options)
            .map(function (response) {
            return response.json();
        }).catch(function (error) {
            if (error.status === 401) {
                _this.auth.logOut(error);
            }
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error);
        });
    };
    return Updatethumbnailsphotoservice;
}());
Updatethumbnailsphotoservice = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__authguard_service__["a" /* AuthGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__authguard_service__["a" /* AuthGuard */]) === "function" && _c || Object])
], Updatethumbnailsphotoservice);

var _a, _b, _c;
//# sourceMappingURL=updatethumbnailsphoto.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedDataService = (function () {
    function SharedDataService() {
        this.data = true;
    }
    SharedDataService.prototype.hitLogin = function (val, user) {
        this.data = val;
        this.currentUser = user;
    };
    return SharedDataService;
}());
SharedDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SharedDataService);

//# sourceMappingURL=shared-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': "Minimum length " + validatorValue.requiredLength
        };
        return config[validatorName];
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    return ValidationService;
}());
ValidationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidationService);

//# sourceMappingURL=validation.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    endpoint: 'http://backend.wphackstop.com/',
    apiEndpoint: 'http://backend.wphackstop.com/api/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map