webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/account/account.module": [
		"../../../../../src/app/account/account.module.ts",
		"account.module"
	],
	"app/public-pages/public-pages.module": [
		"../../../../../src/app/public-pages/public-pages.module.ts"
	],
	"app/root/root.module": [
		"../../../../../src/app/root/root.module.ts",
		"root.module"
	],
	"app/timeline/timeline.module": [
		"../../../../../src/app/timeline/timeline.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_guard_service__ = __webpack_require__("../../../../../src/app/core/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__public_pages_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/public-pages/page-not-found/page-not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    {
        path: '',
        loadChildren: 'app/root/root.module#RootModule',
    },
    {
        path: 'account',
        loadChildren: 'app/account/account.module#AccountModule'
    },
    {
        path: 'timeline',
        loadChildren: 'app/timeline/timeline.module#TimelineModule',
        canLoad: [__WEBPACK_IMPORTED_MODULE_2__core_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_3__public_pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forRoot(appRoutes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* PreloadAllModules */] })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n  <mat-sidenav #sidenav>\n    <app-timeline-sidenav [sidenav]=\"sidenav\"></app-timeline-sidenav>\n  </mat-sidenav>\n  <app-ui-full-page-container>\n    <router-outlet></router-outlet>\n  </app-ui-full-page-container>\n  <app-footer></app-footer>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(titleService) {
        this.titleService = titleService;
        this.titleService.setTitle('Timeline');
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* Title */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core__ = __webpack_require__("../../../../../src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__public_pages_public_pages_module__ = __webpack_require__("../../../../../src/app/public-pages/public-pages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ui_components_ui_components_module__ = __webpack_require__("../../../../../src/app/ui-components/ui-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sidenav_service__ = __webpack_require__("../../../../../src/app/sidenav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__timeline_timeline_module__ = __webpack_require__("../../../../../src/app/timeline/timeline.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








 // To access 404 page





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__core__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__public_pages_public_pages_module__["PublicPagesModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["o" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_13__timeline_timeline_module__["TimelineModule"],
                __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["a" /* CookieModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__ui_components_ui_components_module__["a" /* UiComponentsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__sidenav_service__["a" /* SidenavService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        if (this.authService.isLoggedIn) {
            return true;
        }
        else {
            this.redirectToLoginPage(url);
            return false;
        }
    };
    AuthGuardService.prototype.redirectToLoginPage = function (urlToRedirectAterLogin) {
        if (urlToRedirectAterLogin === void 0) { urlToRedirectAterLogin = 'timeline'; }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = urlToRedirectAterLogin;
        // Navigate to the login page with extras
        this.router.navigate(['/account']);
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/core/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_ErrorObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/ErrorObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_error_message__ = __webpack_require__("../../../../../src/app/shared/error-message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = (function () {
    function AuthService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this._sessionToken = void 0;
        this.HEADER = { headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }) };
        // store the URL so we can redirect after logging in
        // Leaving the possibility to override the default one
        this.defaultRedirectUrl = '/timeline';
        this.askedRedirectUrl = void 0;
        this.sessionToken = cookieService.get('token');
    }
    Object.defineProperty(AuthService.prototype, "redirectUrl", {
        get: function () {
            if (this.askedRedirectUrl !== void 0) {
                var url = this.askedRedirectUrl;
                this.askedRedirectUrl = void 0;
                return url;
            }
            else {
                return this.defaultRedirectUrl;
            }
        },
        set: function (url) {
            this.askedRedirectUrl = url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return (this.sessionToken !== void 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "sessionToken", {
        get: function () {
            return this._sessionToken;
        },
        set: function (sessionToken) {
            this._sessionToken = sessionToken;
            this.cookieService.put('token', sessionToken);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "authorizationHeaderValue", {
        get: function () {
            return 'Bearer ' + this._sessionToken;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (signRequest) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].servicesUrls.sessionService + 'session', signRequest, this.HEADER)
            .map(function (response) {
            var serverResponse1 = response.json();
            _this.sessionToken = serverResponse1.token;
            return serverResponse1;
        })
            .catch(function (errorResponse) {
            switch (errorResponse.status) {
                case 401:
                case 403:
                    var body = errorResponse.json();
                    return __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */].create(new __WEBPACK_IMPORTED_MODULE_6__shared_error_message__["a" /* ErrorMessage */]('Login Failed:' + body.error));
                default:
                    return __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */].create(new __WEBPACK_IMPORTED_MODULE_6__shared_error_message__["a" /* ErrorMessage */]('unknown error:'
                        + errorResponse.statusText
                        + ':' + errorResponse.toString()));
            }
        });
    };
    AuthService.prototype.logout = function () {
        this.cookieService.remove('token');
        this.sessionToken = void 0;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_7_ngx_cookie__["b" /* CookieService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/core/browser-infos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserInfosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browser_enum__ = __webpack_require__("../../../../../src/app/core/browser.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrowserInfosService = (function () {
    function BrowserInfosService() {
        this.browser = __WEBPACK_IMPORTED_MODULE_1__browser_enum__["a" /* BROWSER */].OTHER;
        // The ID of the extension we want to talk to.
        this.timelineChromeExtensionId = 'ddjdjlnhahphcmdbmgjlhcocgcghempa';
        this.browser = this.getBrowser();
    }
    BrowserInfosService.prototype.getBrowser = function () {
        // Firefox 1.0+
        var isFirefox = typeof InstallTrigger !== 'undefined';
        // Chrome 1+
        var isChrome = !!window.chrome && !!window.chrome.webstore;
        if (isChrome && !isFirefox) {
            return __WEBPACK_IMPORTED_MODULE_1__browser_enum__["a" /* BROWSER */].CHROME;
        }
        else if (isFirefox && !isChrome) {
            return __WEBPACK_IMPORTED_MODULE_1__browser_enum__["a" /* BROWSER */].FIREFOX;
        }
        else {
            // We play it safe here
            return __WEBPACK_IMPORTED_MODULE_1__browser_enum__["a" /* BROWSER */].OTHER;
        }
    };
    BrowserInfosService.prototype.isBrowserCompatibleWithExtension = function () {
        var browser = this.getBrowser();
        return (browser === __WEBPACK_IMPORTED_MODULE_1__browser_enum__["a" /* BROWSER */].CHROME || browser === __WEBPACK_IMPORTED_MODULE_1__browser_enum__["a" /* BROWSER */].FIREFOX);
    };
    // TODO: only for CHROME atm
    BrowserInfosService.prototype.isExtensionLoaded = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.browser === __WEBPACK_IMPORTED_MODULE_1__browser_enum__["a" /* BROWSER */].CHROME) {
                // Make a simple request:
                chrome.runtime.sendMessage(_this.timelineChromeExtensionId, { query: 'health' }, function (response) {
                    if (response !== void 0 && response.health === 'OK') {
                        resolve(true);
                    }
                    else {
                        resolve(false);
                    }
                });
            }
            else {
                reject('Not 100% sure its loaded'); // IF we're not 100% sure, we throw an error.
            }
        });
    };
    BrowserInfosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BrowserInfosService);
    return BrowserInfosService;
}());



/***/ }),

/***/ "../../../../../src/app/core/browser.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BROWSER; });
var BROWSER;
(function (BROWSER) {
    BROWSER[BROWSER["FIREFOX"] = 0] = "FIREFOX";
    BROWSER[BROWSER["CHROME"] = 1] = "CHROME";
    BROWSER[BROWSER["OTHER"] = 2] = "OTHER";
})(BROWSER || (BROWSER = {}));


/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_guard_service__ = __webpack_require__("../../../../../src/app/core/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__browser_infos_service__ = __webpack_require__("../../../../../src/app/core/browser-infos.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var CoreModule = (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* Title */],
                __WEBPACK_IMPORTED_MODULE_3__auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_6__browser_infos_service__["a" /* BrowserInfosService */]
            ],
            declarations: []
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__core_module__["a"]; });



/***/ }),

/***/ "../../../../../src/app/public-pages/page-about/page-about.component.html":
/***/ (function(module, exports) {

module.exports = "<app-public-navbar *ngIf=\"!authService.isLoggedIn\"></app-public-navbar>\n<app-go-back-to-timeline-bar *ngIf=\"authService.isLoggedIn\"></app-go-back-to-timeline-bar>\n\n<app-ui-full-page-container class=\"page-about\">\n\n  <div class=\"title\">Our Mission</div>\n  <div class=\"subtitle\">Make music memories a reality</div>\n  <app-ui-responsive-middle-column>\n    <div class=\"maintext\">\n      During the last decades, the music we love moved from our shelves to the cloud.\n      Our favorite CDs, vinyls and tapes <strong>disappeared</strong> in favour of big data centers storing the music of everyone, for everyone.\n      In the process we lost what made music an object of <strong>sentimental value</strong> : the physical possession of it.\n      That's why we made <strong>Timeline</strong>. To make sure music we listen still leaves a footprint, because they are part of what we are.\n    </div>\n  </app-ui-responsive-middle-column>\n\n  <div class=\"photos\">\n    <div fxLayout.gt-md=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"center center\">\n\n      <div fxFlexAlign=\"center center\" fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"aboutusphotocontainer\">\n        <div class=\"aboutusphoto aboutusphoto-maxime\">\n          <div class=\"overlay\" fxLayout=\"column\" fxLayoutAlign=\"center stretch\">\n            <a class=\"link\" href=\"mailto:maxime.touroute@gmail.com\">Contact me !</a>\n          </div>\n        </div>\n        <div class=\"underphoto\">Maxime Touroute</div>\n        <div class=\"underphoto small\">Piano beginner</div>\n        <div class=\"underphoto smaller\">(and Project Director)</div>\n      </div>\n\n      <div fxFlexAlign=\"center center\" fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"aboutusphotocontainer\">\n        <div class=\"aboutusphoto aboutusphoto-marc\">\n          <div class=\"overlay\" fxLayout=\"column\" fxLayoutAlign=\"center stretch\">\n            <a class=\"link\" href=\"mailto:marc.karassev@yahoo.fr\">Contact me !</a>\n          </div>\n        </div>\n        <div class=\"underphoto\">Marc Karassev</div>\n        <div class=\"underphoto small\">Synthwave Fanboy</div>\n        <div class=\"underphoto smaller\">(and Scala Developer)</div>\n      </div>\n    </div>\n  </div>\n\n</app-ui-full-page-container>\n\n"

/***/ }),

/***/ "../../../../../src/app/public-pages/page-about/page-about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-about {\n  padding-top: 5em;\n  background-color: #646464; }\n  .page-about .aboutusphotocontainer {\n    padding-left: 1em;\n    padding-right: 1em;\n    padding-bottom: 2em;\n    padding-top: 2em; }\n    .page-about .aboutusphotocontainer .aboutusphoto {\n      width: 200px;\n      height: 200px;\n      border-radius: 0.3em; }\n      .page-about .aboutusphotocontainer .aboutusphoto-maxime {\n        background: url(" + __webpack_require__("../../../../../src/assets/profile_max.jpg") + ") no-repeat center center;\n        background-size: contain; }\n      .page-about .aboutusphotocontainer .aboutusphoto-marc {\n        background: url(" + __webpack_require__("../../../../../src/assets/profile_marc.jpg") + ") no-repeat center center;\n        background-size: contain; }\n      .page-about .aboutusphotocontainer .aboutusphoto .overlay {\n        width: 200px;\n        height: 200px;\n        border-radius: 0.3em;\n        transition: all 0.3s ease; }\n        .page-about .aboutusphotocontainer .aboutusphoto .overlay:hover {\n          cursor: pointer;\n          background: rgba(0, 0, 0, 0.4);\n          transition: all 0.3s ease; }\n        .page-about .aboutusphotocontainer .aboutusphoto .overlay:hover > .link {\n          display: block; }\n        .page-about .aboutusphotocontainer .aboutusphoto .overlay .link {\n          display: none;\n          font-size: 1.5em;\n          text-align: center;\n          color: #fafafa;\n          text-decoration: none; }\n    .page-about .aboutusphotocontainer .underphoto {\n      font-weight: 400;\n      width: 250px;\n      color: #464646;\n      text-align: center;\n      font-size: 1.3em;\n      padding-top: 0.5em;\n      padding-bottom: 0.5em; }\n      .page-about .aboutusphotocontainer .underphoto.small {\n        font-weight: 600;\n        font-size: 1em;\n        padding-top: 0.5em;\n        padding-bottom: 0.5em; }\n      .page-about .aboutusphotocontainer .underphoto.smaller {\n        font-weight: 400;\n        font-size: 0.9em;\n        padding-top: 0.5em;\n        padding-bottom: 0.5em; }\n\n.title {\n  margin-left: 1em;\n  margin-right: 1em;\n  font-size: 4em;\n  font-weight: 400;\n  text-align: center;\n  margin-top: 3em;\n  margin-bottom: 1em; }\n\n.subtitle {\n  margin-left: 1em;\n  margin-right: 1em;\n  font-size: 2em;\n  font-weight: 400;\n  text-align: center;\n  margin-top: 1em;\n  margin-bottom: 1em; }\n\n.maintext {\n  font-size: 1.4em;\n  font-weight: 400;\n  text-align: justify;\n  padding: 1em 1em 1em 1em; }\n\n.bold {\n  font-weight: 900; }\n\n.text {\n  font-size: 1.8em; }\n\n.center {\n  text-align: center; }\n\n.photos {\n  margin-bottom: 3em;\n  margin-top: 3em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/public-pages/page-about/page-about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageAboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageAboutComponent = (function () {
    function PageAboutComponent(authService) {
        this.authService = authService;
    }
    PageAboutComponent.prototype.ngOnInit = function () {
    };
    PageAboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/public-pages/page-about/page-about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/public-pages/page-about/page-about.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]])
    ], PageAboutComponent);
    return PageAboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/public-pages/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ui-full-page-container>\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"padding\">\n\n    <div class=\"text medium-sized\"> Are you lost ?</div>\n    <br><br>\n    <a [routerLink]=\"['/']\" class=\"small-sized tm-link-blue\"> Get me back home !</a>\n\n  </div>\n</app-ui-full-page-container>\n\n"

/***/ }),

/***/ "../../../../../src/app/public-pages/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tm-gradient {\n  background-image: linear-gradient(to right, #9cb5e3, #5b5ba4); }\n\n.tm-link-blue {\n  color: #7893c8;\n  text-decoration: none; }\n  .tm-link-blue:hover {\n    text-decoration: underline;\n    color: #7893c8; }\n\n.tm-text-centered {\n  text-align: center; }\n\n.tm-text-grey-mid {\n  color: #464646; }\n\n.tm-text-link:hover {\n  cursor: pointer;\n  text-decoration: underline; }\n\n.tm-text-link:focus, .tm-text-link:active {\n  outline: 0; }\n\n.tm-gray-button {\n  text-decoration: none;\n  font-size: 20px;\n  line-height: 50px;\n  text-align: center;\n  font-weight: 500;\n  color: #1e1e1e;\n  border-radius: 2px;\n  border-style: solid;\n  border-color: transparent;\n  background-color: #e3e3e3;\n  transition: all 0.2s ease; }\n  .tm-gray-button:hover {\n    cursor: pointer;\n    background-color: #f0f0f0;\n    transition: all 0.2s ease; }\n\n.tm-clickable:hover {\n  cursor: pointer; }\n\n.tm-clickable:focus, .tm-clickable:active {\n  outline: 0; }\n\n.tm-noselect {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently supported by Chrome and Opera */ }\n\n.debug-flex {\n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  background-color: #d06e6e; }\n\n.debug-flexx {\n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  background-color: #6f6fa4; }\n\n.debug-flexxx {\n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  background-color: #55b76c; }\n\n.text {\n  color: #646464;\n  text-align: center; }\n\n.medium-sized {\n  font-size: 7vh; }\n\n.small-sized {\n  font-size: 5vh; }\n\n.padding {\n  padding-top: 20vh;\n  padding-bottom: 20vh;\n  padding-left: 1em;\n  padding-right: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/public-pages/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/public-pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/public-pages/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/public-pages/page-showcase/page-showcase.component.html":
/***/ (function(module, exports) {

module.exports = "<app-public-navbar cssBackground=\"transparent\"></app-public-navbar>\n\n<div class=\"showcasePage\" fxLayout=\"column\">\n  <div fxLayout=\"column\" fxLayoutAlign=\"space-between center\" class=\"titleBlock\">\n    <div class=\"title-photo\"></div>\n    <div class=\"line-photo\"></div>\n    <div class=\"punchline tm-text-centered\">Your CD Shelf for the 21st century</div>\n    <div class=\"white-button\" (click)=\"goToSubscribePage()\">Get Started</div>\n  </div>\n\n  <app-ui-responsive-middle-column fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"area white\">\n    <div class=\"headline center\">The Concept</div>\n    <div class=\"text center\">\n      In a world of dematerialized music, Timeline gathers all the musics you listen to in one place so you can access it easily, whenever you want\n    </div>\n  </app-ui-responsive-middle-column>\n\n  <app-ui-responsive-middle-column fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"area deepOrange\">\n    <div class=\"headline white\">Your Library</div>\n    <div class=\"text white\">Looking for some music you've heard recently ?<br/>\n      Your library is your musical past<br/>\n      You can find back and listen to any song you've heard with ease\n    </div>\n  </app-ui-responsive-middle-column>\n\n  <app-ui-responsive-middle-column fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"area gray\">\n    <div class=\"headline\">It's automatic !</div>\n    <div class=\"text\">\n      Install the app, and then, <strong>relax !</strong><br/>\n      Timeline works under the hood and gathers all the songs you listen automatically from all major music platforms !<br/>\n    </div>\n  </app-ui-responsive-middle-column>\n\n  <app-ui-responsive-middle-column fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"area white\">\n    <div class=\"headline\">Discover new musics</div>\n    <div class=\"text\">Looking for something new ?<br/>\n      Explore what's being listened in real-time to discover new artists at every instant</div>\n  </app-ui-responsive-middle-column>\n\n  <app-ui-responsive-middle-column fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"area deepBlue\">\n    <div class=\"headline white\">No more boundaries</div>\n    <div class=\"text white\">\n      Timeline works with YouTube, Soundcloud, Spotify, Deezer, and more to come<br/>\n      Listen wherever you want, we've got you covered !\n    </div>\n  </app-ui-responsive-middle-column>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/public-pages/page-showcase/page-showcase.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes flickerAnimation {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0.5; }\n  100% {\n    opacity: 1; } }\n\n@keyframes flickerAnimation {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0.5; }\n  100% {\n    opacity: 1; } }\n\n.showcasePage .titleBlock {\n  height: 80vh;\n  background: url(" + __webpack_require__("../../../../../src/assets/gradient36LR.png") + ") no-repeat center center;\n  background-size: cover; }\n  @media (max-width: 959px) {\n    .showcasePage .titleBlock {\n      padding-left: 1em;\n      padding-right: 1em; } }\n  .showcasePage .titleBlock div {\n    margin-top: 20px;\n    margin-bottom: 20px; }\n    .showcasePage .titleBlock div:first-child {\n      margin-top: 113px; }\n    .showcasePage .titleBlock div:last-child {\n      margin-top: 40px;\n      margin-bottom: 40px; }\n    .showcasePage .titleBlock div.title-photo {\n      background: url(" + __webpack_require__("../../../../../src/assets/title.png") + ") no-repeat center center;\n      background-size: contain;\n      width: 350px;\n      height: 91.80102241px; }\n      @media (max-width: 599px) {\n        .showcasePage .titleBlock div.title-photo {\n          width: 280px;\n          height: 73.44081793px; } }\n    .showcasePage .titleBlock div.line-photo {\n      background: url(" + __webpack_require__("../../../../../src/assets/line.png") + ") no-repeat center center;\n      background-size: contain;\n      width: 600px;\n      height: 90px; }\n      @media (max-width: 599px) {\n        .showcasePage .titleBlock div.line-photo {\n          background: url(" + __webpack_require__("../../../../../src/assets/square_logo_mask.png") + ") no-repeat center center;\n          background-size: contain;\n          width: 180px;\n          height: 180px; } }\n    .showcasePage .titleBlock div.punchline {\n      font-size: 2em;\n      font-weight: 900;\n      color: #fafafa; }\n    .showcasePage .titleBlock div.white-button {\n      background: transparent;\n      font-weight: 600;\n      text-transform: uppercase;\n      text-decoration: none;\n      font-size: 1.5em;\n      text-align: center;\n      padding: 1em 1.4em;\n      color: rgba(250, 250, 250, 0.7);\n      border: 2px solid rgba(250, 250, 250, 0.7);\n      border-radius: 6px;\n      transition: all 0.2s ease;\n      -webkit-animation: flickerAnimation 2s infinite;\n              animation: flickerAnimation 2s infinite; }\n      .showcasePage .titleBlock div.white-button:hover {\n        cursor: pointer;\n        color: #fafafa;\n        border-color: #fafafa;\n        transition: all 0.3s ease;\n        -webkit-animation: none;\n                animation: none; }\n      .showcasePage .titleBlock div.white-button:active {\n        color: rgba(250, 250, 250, 0.5);\n        border-color: rgba(250, 250, 250, 0.5);\n        transition: all 0.2s ease;\n        -webkit-animation: none;\n                animation: none; }\n\n.showcasePage .area {\n  min-height: 60vh;\n  padding-bottom: 5em;\n  padding-top: 5em;\n  padding-left: 2em;\n  padding-right: 2em;\n  text-align: left; }\n  @media (max-width: 959px) {\n    .showcasePage .area {\n      padding-left: 1em;\n      padding-right: 1em; } }\n  @media (min-width: 1280px) {\n    .showcasePage .area {\n      padding-left: 5em;\n      padding-right: 5em; } }\n  .showcasePage .area.white {\n    background-color: #fafafa;\n    border: solid 10px #e3e3e3; }\n  .showcasePage .area.gray {\n    background-color: #f0f0f0;\n    border: solid 10px #7893c8;\n    /* &:hover {\n        border: solid 10px #80a2e8;\n        transition: all ease-in-out 0.2s;\n      }\n      */ }\n  .showcasePage .area.deepBlue {\n    background-color: #2c3261;\n    box-shadow: inset 0 0 20px 0px rgba(0, 0, 0, 0.52);\n    color: white; }\n  .showcasePage .area.deepOrange {\n    background-color: #4b58a0;\n    box-shadow: inset 0 0 20px 0px rgba(0, 0, 0, 0.39);\n    color: white; }\n  .showcasePage .area div:not(:last-child) {\n    margin-bottom: 0.5em; }\n  .showcasePage .area .headline {\n    font-weight: 900;\n    font-size: 4em;\n    text-align: center;\n    color: #7893c8; }\n    @media (max-width: 40rem) {\n      .showcasePage .area .headline {\n        font-size: 2em; } }\n    .showcasePage .area .headline.white {\n      color: white; }\n  .showcasePage .area .text {\n    color: #1e1e1e;\n    font-size: 1.5em;\n    padding-left: 1em;\n    padding-right: 1em;\n    text-align: center; }\n    .showcasePage .area .text.white {\n      color: white; }\n    @media (max-width: 40rem) {\n      .showcasePage .area .text {\n        font-size: 1em; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/public-pages/page-showcase/page-showcase.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageShowcaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageShowcaseComponent = (function () {
    function PageShowcaseComponent(router) {
        this.router = router;
        this.musicNewsContent = 'No more following here and there, no more digging news. Timeline keeps you informed based on what you listen. Simple.';
        this.musicUnifiedContent = 'All your music life gathered in a single place. We unify your musics from all major listening platforms';
        this.musicMemoryContent = "What's best to remember the past than listening to it ? Every one of your sound memories is a click away with Timeline.";
    }
    PageShowcaseComponent.prototype.ngOnInit = function () {
    };
    PageShowcaseComponent.prototype.goToSubscribePage = function () {
        this.router.navigate(['account/signup']);
    };
    PageShowcaseComponent.prototype.goToLoginPage = function () {
        this.router.navigate(['account/login']);
    };
    PageShowcaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-showcase',
            template: __webpack_require__("../../../../../src/app/public-pages/page-showcase/page-showcase.component.html"),
            styles: [__webpack_require__("../../../../../src/app/public-pages/page-showcase/page-showcase.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], PageShowcaseComponent);
    return PageShowcaseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/public-pages/page-terms-of-service/page-terms-of-service.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ui-full-page-container>\n  <app-go-back-to-timeline-bar></app-go-back-to-timeline-bar>\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"start center\">\n    <h2 class=\"tm-text-centered title\">Terms of Service</h2>\n    <br>\n    <div fxFlex.lt-lg=\"100%\" fxFlex.gt-md=\"30em\" style=\"overflow:auto;\" class=\"textarea\">\n      <p>\n        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus\n        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus\n        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus\n        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus\n        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus\n        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus\n        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus\n        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus\n        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus\n        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus\n        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus\n        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus\n        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus\n        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus\n      </p>\n    </div>\n  </div>\n\n</app-ui-full-page-container>\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/public-pages/page-terms-of-service/page-terms-of-service.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".textarea {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n  border: solid #e3e3e3 2px;\n  font-size: 18px;\n  line-height: 30px;\n  text-align: justify; }\n  @media (min-width: 1280px) {\n    .textarea {\n      width: 70em;\n      min-height: 70vh; } }\n\np {\n  padding: 20px 20px 20px 20px; }\n\n.title {\n  font-size: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/public-pages/page-terms-of-service/page-terms-of-service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTermsOfServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageTermsOfServiceComponent = (function () {
    function PageTermsOfServiceComponent(authService) {
        this.authService = authService;
    }
    PageTermsOfServiceComponent.prototype.ngOnInit = function () {
    };
    PageTermsOfServiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-terms-of-service',
            template: __webpack_require__("../../../../../src/app/public-pages/page-terms-of-service/page-terms-of-service.component.html"),
            styles: [__webpack_require__("../../../../../src/app/public-pages/page-terms-of-service/page-terms-of-service.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]])
    ], PageTermsOfServiceComponent);
    return PageTermsOfServiceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/public-pages/public-navbar/public-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\" [ngStyle]=\"{'background-color': cssBackground}\" fxLayout=\"row\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"logo\" [routerLink]=\"['/']\">\n    <div class=\"square-mask\"></div>\n    <div class=\"title-photo\" fxHide.lt-md></div>\n  </div>\n\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"end center\">\n    <a [routerLinkActive]=\"['active']\" [routerLink]=\"['/about']\"\n          class=\"button\">About Us</a>\n    <a [routerLink]=\"['/account/login']\"\n          class=\"button\">Log In</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/public-pages/public-navbar/public-navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 5em;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: #fafafa; }\n  .navbar div a {\n    text-decoration: none;\n    font-size: 1.2em;\n    text-transform: uppercase;\n    font-weight: 400;\n    color: rgba(250, 250, 250, 0.7);\n    padding-left: 0.8em;\n    padding-right: 0.8em;\n    transition: all 0.1s ease; }\n    @media (max-width: 40rem) {\n      .navbar div a {\n        font-size: 1em; } }\n    .navbar div a:focus {\n      outline: 0; }\n    .navbar div a:hover {\n      color: #fafafa;\n      cursor: pointer;\n      transition: all 0.1s ease; }\n    .navbar div a.active {\n      color: #fafafa;\n      font-weight: 900; }\n    .navbar div a:last-child {\n      margin-right: 1em; }\n  .navbar .logo div {\n    margin-left: 1em; }\n    .navbar .logo div.square-mask {\n      background: url(" + __webpack_require__("../../../../../src/assets/square_logo_mask.png") + ") no-repeat center;\n      background-size: contain;\n      width: 5em;\n      height: 5em; }\n    .navbar .logo div.title-photo {\n      background: url(" + __webpack_require__("../../../../../src/assets/title.png") + ") no-repeat center;\n      background-size: contain;\n      width: 7.62518741em;\n      height: 2em;\n      margin-bottom: 7px; }\n  .navbar .logo:hover {\n    cursor: pointer; }\n  .navbar .logo:focus {\n    outline: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/public-pages/public-navbar/public-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PublicNavbarComponent = (function () {
    function PublicNavbarComponent() {
        this.cssBackground = 'rgba(0,0,0,0.5)';
    }
    PublicNavbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], PublicNavbarComponent.prototype, "cssBackground", void 0);
    PublicNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-public-navbar',
            template: __webpack_require__("../../../../../src/app/public-pages/public-navbar/public-navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/public-pages/public-navbar/public-navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PublicNavbarComponent);
    return PublicNavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/public-pages/public-pages-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicPagesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_showcase_page_showcase_component__ = __webpack_require__("../../../../../src/app/public-pages/page-showcase/page-showcase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_about_page_about_component__ = __webpack_require__("../../../../../src/app/public-pages/page-about/page-about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_terms_of_service_page_terms_of_service_component__ = __webpack_require__("../../../../../src/app/public-pages/page-terms-of-service/page-terms-of-service.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var publicPagesRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__page_showcase_page_showcase_component__["a" /* PageShowcaseComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_3__page_about_page_about_component__["a" /* PageAboutComponent */]
    },
    {
        path: 'tos',
        component: __WEBPACK_IMPORTED_MODULE_4__page_terms_of_service_page_terms_of_service_component__["a" /* PageTermsOfServiceComponent */]
    }
];
var PublicPagesRoutingModule = (function () {
    function PublicPagesRoutingModule() {
    }
    PublicPagesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(publicPagesRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]
            ]
        })
    ], PublicPagesRoutingModule);
    return PublicPagesRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/public-pages/public-pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicPagesModule", function() { return PublicPagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_showcase_page_showcase_component__ = __webpack_require__("../../../../../src/app/public-pages/page-showcase/page-showcase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_about_page_about_component__ = __webpack_require__("../../../../../src/app/public-pages/page-about/page-about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/public-pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_terms_of_service_page_terms_of_service_component__ = __webpack_require__("../../../../../src/app/public-pages/page-terms-of-service/page-terms-of-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__public_pages_routing_module__ = __webpack_require__("../../../../../src/app/public-pages/public-pages-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ui_components_ui_components_module__ = __webpack_require__("../../../../../src/app/ui-components/ui-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__public_navbar_public_navbar_component__ = __webpack_require__("../../../../../src/app/public-pages/public-navbar/public-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var PublicPagesModule = (function () {
    function PublicPagesModule() {
    }
    PublicPagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__public_pages_routing_module__["a" /* PublicPagesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_8__ui_components_ui_components_module__["a" /* UiComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["g" /* MatIconModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page_showcase_page_showcase_component__["a" /* PageShowcaseComponent */],
                __WEBPACK_IMPORTED_MODULE_3__page_about_page_about_component__["a" /* PageAboutComponent */],
                __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_5__page_terms_of_service_page_terms_of_service_component__["a" /* PageTermsOfServiceComponent */],
                __WEBPACK_IMPORTED_MODULE_9__public_navbar_public_navbar_component__["a" /* PublicNavbarComponent */]
            ]
        })
    ], PublicPagesModule);
    return PublicPagesModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/dumb-components/navbar/navbar-item-layout.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarItemLayout; });
var NavbarItemLayout;
(function (NavbarItemLayout) {
    NavbarItemLayout[NavbarItemLayout["LEFT"] = 0] = "LEFT";
    NavbarItemLayout[NavbarItemLayout["MIDDLE"] = 1] = "MIDDLE";
    NavbarItemLayout[NavbarItemLayout["RIGHT"] = 2] = "RIGHT";
})(NavbarItemLayout || (NavbarItemLayout = {}));


/***/ }),

/***/ "../../../../../src/app/shared/dumb-components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start strech\">\n\n  <mat-toolbar flex=\"33\">\n    <span>{{title}} &nbsp;</span>\n    <div *ngFor=\"let item of getLeftItems()\">\n      <button mat-button [routerLinkActive]=\"['active']\" [routerLink]=\"[ item.route ]\">{{item.name}}</button>\n    </div>\n  </mat-toolbar>\n\n  <mat-toolbar flex=\"33\">\n\n    <span class=\"fill-remaining-space\"></span>\n    <div *ngFor=\"let item of getMiddleItems()\">\n      <button mat-button [routerLinkActive]=\"['active']\" [routerLink]=\"[ item.route ]\">{{item.name}}</button>\n    </div>\n    <span class=\"fill-remaining-space\"></span>\n\n  </mat-toolbar>\n\n  <mat-toolbar flex>\n    <!-- This fills the remaining space of the current row -->\n    <span class=\"fill-remaining-space\"></span>\n    <div *ngFor=\"let item of getRightItems()\">\n      <button mat-button [routerLinkActive]=\"['active']\" [routerLink]=\"[ item.route ]\">{{item.name}}</button>\n    </div>\n\n  </mat-toolbar>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/dumb-components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-toolbar {\n  background-color: #454545;\n  color: white;\n  box-shadow: 0 1px 0px 0px #929292; }\n\n.active {\n  background-color: #787878; }\n\n.leftLayout {\n  float: left; }\n\n.rightLayout {\n  float: right; }\n\n.fill-remaining-space {\n  /*This fills the remaining space, by using flexbox.\n Every toolbar row uses a flexbox row layout. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/dumb-components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_item_layout_enum__ = __webpack_require__("../../../../../src/app/shared/dumb-components/navbar/navbar-item-layout.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent() {
        this.defaultItems = [{ name: 'CONFIGURE', route: '', layout: __WEBPACK_IMPORTED_MODULE_1__navbar_item_layout_enum__["a" /* NavbarItemLayout */].LEFT },
            { name: 'YOUR', route: '', layout: __WEBPACK_IMPORTED_MODULE_1__navbar_item_layout_enum__["a" /* NavbarItemLayout */].MIDDLE },
            { name: 'NAVBAR-ITEMS', route: '', layout: __WEBPACK_IMPORTED_MODULE_1__navbar_item_layout_enum__["a" /* NavbarItemLayout */].RIGHT }
        ];
        this.defaultTitle = 'No-Title app';
        this.navbarItems = this.defaultItems;
        this.title = this.defaultTitle;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.getLeftItems = function () {
        return this.navbarItems.filter(function (item) { return item.layout === __WEBPACK_IMPORTED_MODULE_1__navbar_item_layout_enum__["a" /* NavbarItemLayout */].LEFT; });
    };
    NavbarComponent.prototype.getRightItems = function () {
        return this.navbarItems.filter(function (item) { return item.layout === __WEBPACK_IMPORTED_MODULE_1__navbar_item_layout_enum__["a" /* NavbarItemLayout */].RIGHT; });
    };
    NavbarComponent.prototype.getMiddleItems = function () {
        return this.navbarItems.filter(function (item) { return item.layout === __WEBPACK_IMPORTED_MODULE_1__navbar_item_layout_enum__["a" /* NavbarItemLayout */].MIDDLE; });
    };
    // For fxLayoutAlign
    NavbarComponent.prototype.getFxLayoutAlignClass = function (navbarItem) {
        console.log('fine');
        if (navbarItem.layout === __WEBPACK_IMPORTED_MODULE_1__navbar_item_layout_enum__["a" /* NavbarItemLayout */].RIGHT) {
            return 'end center';
        }
        else if (navbarItem.layout === __WEBPACK_IMPORTED_MODULE_1__navbar_item_layout_enum__["a" /* NavbarItemLayout */].LEFT) {
            return 'start center';
        }
        else {
            console.error('unknown layout');
            return 'start center';
        }
    };
    NavbarComponent.prototype.getNavbarItemClasses = function (navbarItem) {
        if (navbarItem.layout === __WEBPACK_IMPORTED_MODULE_1__navbar_item_layout_enum__["a" /* NavbarItemLayout */].RIGHT) {
            return 'rightLayout';
        }
        else if (navbarItem.layout === __WEBPACK_IMPORTED_MODULE_1__navbar_item_layout_enum__["a" /* NavbarItemLayout */].LEFT) {
            return 'leftLayout';
        }
        else {
            console.error('unknown layout');
            return 'leftLayout';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], NavbarComponent.prototype, "navbarItems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "title", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/shared/dumb-components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/dumb-components/navbar/navbar.component.scss")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/dumb-components/router-button/router-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-button [routerLinkActive]=\"['active']\" [routerLink]=\"[ route ]\">{{name}}</button>\n"

/***/ }),

/***/ "../../../../../src/app/shared/dumb-components/router-button/router-button.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/dumb-components/router-button/router-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RouterButtonComponent = (function () {
    function RouterButtonComponent() {
    }
    RouterButtonComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], RouterButtonComponent.prototype, "route", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], RouterButtonComponent.prototype, "name", void 0);
    RouterButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-router-button',
            template: __webpack_require__("../../../../../src/app/shared/dumb-components/router-button/router-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/dumb-components/router-button/router-button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RouterButtonComponent);
    return RouterButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/error-message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorMessage; });
var ErrorMessage = (function () {
    function ErrorMessage(message) {
        this.message = '';
        this.message = message;
    }
    return ErrorMessage;
}());



/***/ }),

/***/ "../../../../../src/app/shared/request-status.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestStatus; });
var RequestStatus;
(function (RequestStatus) {
    RequestStatus[RequestStatus["IDLE"] = 0] = "IDLE";
    RequestStatus[RequestStatus["LOADING"] = 1] = "LOADING";
    RequestStatus[RequestStatus["SUCCESS"] = 2] = "SUCCESS";
    RequestStatus[RequestStatus["FAILURE"] = 3] = "FAILURE";
})(RequestStatus || (RequestStatus = {}));


/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dumb_components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/dumb-components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dumb_components_router_button_router_button_component__ = __webpack_require__("../../../../../src/app/shared/dumb-components/router-button/router-button.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dumb_components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dumb_components_router_button_router_button_component__["a" /* RouterButtonComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__dumb_components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dumb_components_router_button_router_button_component__["a" /* RouterButtonComponent */]
            ],
            providers: [],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/sidenav.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidenavService = (function () {
    function SidenavService() {
        this.openSidenavStream = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    SidenavService.prototype.openSidenav = function () {
        console.log('ask open sidenav');
        this.openSidenavStream.next();
    };
    SidenavService.prototype.sidenavOpened = function () {
        console.log('ask sidenav opened access');
        return this.openSidenavStream;
    };
    SidenavService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SidenavService);
    return SidenavService;
}());



/***/ }),

/***/ "../../../../../src/app/timeline/album-view/album-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"album-fixed-size-container\">\n  <div class=\"album-view\" fxFlexFill fxLayout=\"column\">\n    <div class=\"album-cover\" fxFlex=\"100px\"></div>\n    <div fxFlex>\n      <bdi class=\"music-title\">{{music.title}}</bdi>\n      <br>\n      <bdi class=\"music-artist\">by {{music.artist}} </bdi>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/timeline/album-view/album-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".album-fixed-size-container {\n  height: 150px;\n  width: 100px; }\n\n.album-cover {\n  background-color: #b8d2ff; }\n\n.music-title {\n  color: black; }\n\n.music-artist {\n  color: gray; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timeline/album-view/album-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlbumViewComponent = (function () {
    function AlbumViewComponent() {
    }
    AlbumViewComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], AlbumViewComponent.prototype, "music", void 0);
    AlbumViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-album-view',
            template: __webpack_require__("../../../../../src/app/timeline/album-view/album-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/timeline/album-view/album-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AlbumViewComponent);
    return AlbumViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/timeline/api/music-domain-enum-aware.decorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = MusicDomainEnumAware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__music_domain_enum__ = __webpack_require__("../../../../../src/app/timeline/api/music-domain.enum.ts");

function MusicDomainEnumAware(constructor) {
    constructor.prototype.MusicDomain = __WEBPACK_IMPORTED_MODULE_0__music_domain_enum__["a" /* MusicDomain */];
}


/***/ }),

/***/ "../../../../../src/app/timeline/api/music-domain.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicDomain; });
var MusicDomain;
(function (MusicDomain) {
    MusicDomain[MusicDomain["YOUTUBE"] = 0] = "YOUTUBE";
    MusicDomain[MusicDomain["SOUNDCLOUD"] = 1] = "SOUNDCLOUD";
    MusicDomain[MusicDomain["DEEZER"] = 2] = "DEEZER";
    MusicDomain[MusicDomain["SPOTIFY"] = 3] = "SPOTIFY";
    MusicDomain[MusicDomain["UNKNOWN"] = 4] = "UNKNOWN";
})(MusicDomain || (MusicDomain = {}));


/***/ }),

/***/ "../../../../../src/app/timeline/deprecated/music-card-carroussel/music-card-carroussel.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\n\n  <div *ngIf=\"data.length > numberOfElementsPerPage\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"carroussel-icon-container -left\" (click)=\"previous()\">\n    <mat-icon class=\"carroussel-icon\">keyboard_arrow_left</mat-icon>\n  </div>\n\n  <app-music-card *ngFor=\"let music of data.slice(lastListeningsOffset,lastListeningsOffset+numberOfElementsPerPage);\" [music]=\"music\"></app-music-card>\n\n  <div *ngIf=\"data.length > numberOfElementsPerPage\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"carroussel-icon-container\" (click)=\"next()\">\n    <mat-icon class=\"carroussel-icon\">keyboard_arrow_right</mat-icon>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/timeline/deprecated/music-card-carroussel/music-card-carroussel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carroussel-icon {\n  font-size: 5em; }\n\n.carroussel-icon-container {\n  color: #646464;\n  margin-bottom: 9em; }\n  .carroussel-icon-container.-left {\n    margin-right: 3em; }\n\n.carroussel-icon-container:hover {\n  cursor: pointer;\n  color: #323232;\n  transition: all 0.2s ease; }\n\napp-music-card {\n  margin-right: 2em;\n  margin-left: 2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timeline/deprecated/music-card-carroussel/music-card-carroussel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicCardCarrousselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MusicCardCarrousselComponent = (function () {
    function MusicCardCarrousselComponent() {
        this.numberOfElementsPerPage = 3;
        this.data = [];
        this._lastListeningsOffset = 0;
    }
    Object.defineProperty(MusicCardCarrousselComponent.prototype, "lastListeningsOffset", {
        get: function () {
            return this._lastListeningsOffset;
        },
        set: function (newOffset) {
            if (newOffset < 0) {
                this._lastListeningsOffset = 0;
            }
            else if (newOffset >= this.data.length - 1 - this.numberOfElementsPerPage) {
                this._lastListeningsOffset = this.data.length - 1 - this.numberOfElementsPerPage;
            }
            else {
                this._lastListeningsOffset = newOffset;
            }
        },
        enumerable: true,
        configurable: true
    });
    MusicCardCarrousselComponent.prototype.ngOnInit = function () {
    };
    MusicCardCarrousselComponent.prototype.next = function () {
        this.lastListeningsOffset += this.numberOfElementsPerPage;
    };
    MusicCardCarrousselComponent.prototype.previous = function () {
        this.lastListeningsOffset -= this.numberOfElementsPerPage;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], MusicCardCarrousselComponent.prototype, "numberOfElementsPerPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MusicCardCarrousselComponent.prototype, "data", void 0);
    MusicCardCarrousselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-music-card-carroussel',
            template: __webpack_require__("../../../../../src/app/timeline/deprecated/music-card-carroussel/music-card-carroussel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/timeline/deprecated/music-card-carroussel/music-card-carroussel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MusicCardCarrousselComponent);
    return MusicCardCarrousselComponent;
}());



/***/ }),

/***/ "../../../../../src/app/timeline/deprecated/music-card/music-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"music === undefined\" class=\"music-card\">\n\n  <div (click)=\"openTab(music.url)\" class=\"cover\">\n    <div class=\"overcover\" fxLayout=\"column\" fxLayoutAlign=\"center stretch\">\n      <div class=\"title\">\n        {{music.title}}\n        <div class=\"artist\">{{music.artist}}</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"infos\">\n    <div>2mn ago</div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/timeline/deprecated/music-card/music-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".music-card {\n  height: 17.5em em;\n  width: 12.5em; }\n  .music-card .cover {\n    width: 12.5em;\n    height: 12.5em;\n    background: linear-gradient(to bottom right, #dbbd8c, #a66460);\n    transition: all 0.2s ease; }\n    .music-card .cover .overcover {\n      width: 12.5em;\n      height: 12.5em;\n      background-color: transparent;\n      color: #1e1e1e;\n      transition: all 0.2s ease; }\n    .music-card .cover .overcover:hover {\n      cursor: pointer;\n      background-color: rgba(0, 0, 0, 0.2);\n      color: #fafafa;\n      transition: all 0.2s ease; }\n    .music-card .cover .overcover:focus {\n      background-color: rgba(0, 0, 0, 0.6);\n      transition: all 0.2s ease; }\n    .music-card .cover .title {\n      padding: 1em 1em 1em 1em;\n      font-size: 1.2em;\n      font-weight: 600;\n      text-align: center;\n      /* Hide overflow text */\n      /*  overflow:hidden;\n        display:inline-block;\n        text-overflow: ellipsis;\n        white-space: nowrap;*/ }\n      .music-card .cover .title .artist {\n        font-weight: 400;\n        padding: 1em 1em 1em 1em;\n        text-align: center;\n        font-size: 0.8em; }\n  .music-card .infos {\n    width: 12.5em;\n    height: 5em;\n    padding-top: 0.5em;\n    padding-bottom: 0.5em;\n    text-align: center;\n    color: #646464; }\n    .music-card .infos div {\n      padding-top: 0.5em;\n      padding-bottom: 0.5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timeline/deprecated/music-card/music-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MusicCardComponent = (function () {
    function MusicCardComponent() {
        this.music = void 0;
    }
    MusicCardComponent.prototype.ngOnInit = function () {
    };
    MusicCardComponent.prototype.openTab = function (url) {
        window.open(url, '_blank');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MusicCardComponent.prototype, "music", void 0);
    MusicCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-music-card',
            template: __webpack_require__("../../../../../src/app/timeline/deprecated/music-card/music-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/timeline/deprecated/music-card/music-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MusicCardComponent);
    return MusicCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/timeline/extension-checker/extension-checker.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"needsToAppear\" fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"warn-bar\">\n  <p fxFlex class=\"message tm-text-centered\">It seems like you don't have Timeline extension :( you need it to fill your music library !</p>\n  <button mat-button (click)=\"installExtension()\">INSTALL IT HERE</button>\n  <p fxFlex (click)=\"hideBar()\" class=\"link tm-text-link tm-text-centered\">Maybe later</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/timeline/extension-checker/extension-checker.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".warn-bar {\n  border-radius: 7px;\n  margin-top: 4rem;\n  margin-bottom: 2rem;\n  padding-bottom: 0.5em;\n  padding-top: 0.5em;\n  background-color: #ffa875; }\n  .warn-bar button {\n    color: #1e1e1e;\n    font-weight: 900;\n    font-size: 1em;\n    margin-top: 0.3em;\n    margin-bottom: 0.3em; }\n  .warn-bar p.message {\n    margin-top: 0.7em;\n    margin-bottom: 0.7em;\n    color: #1e1e1e;\n    font-weight: 400;\n    font-size: 1.1em; }\n    @media (min-width: 1280px) {\n      .warn-bar p.message {\n        margin-left: 1em;\n        margin-right: 1em; } }\n    @media (max-width: 599px) {\n      .warn-bar p.message {\n        margin-left: 0.4em;\n        margin-right: 0.4em; } }\n  .warn-bar p.link {\n    margin-top: 0.3em;\n    margin-bottom: 0.3em;\n    color: #1e1e1e;\n    font-size: 0.9em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timeline/extension-checker/extension-checker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtensionCheckerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_browser_infos_service__ = __webpack_require__("../../../../../src/app/core/browser-infos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExtensionCheckerComponent = (function () {
    function ExtensionCheckerComponent(browserInfos, router) {
        this.browserInfos = browserInfos;
        this.router = router;
        this.needsToAppear = false;
    }
    ExtensionCheckerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.browserInfos.isBrowserCompatibleWithExtension()) {
            this.browserInfos.isExtensionLoaded().then(function (isExtensionLoaded) {
                if (!isExtensionLoaded) {
                    _this.needsToAppear = true;
                }
            }).catch(function (error) {
                // In case of error, bar stays hidden. Better than showing it by mistake
            });
        }
        else {
            // Browser not compatible with extension
        }
    };
    ExtensionCheckerComponent.prototype.installExtension = function () {
        this.hideBar();
        window.open('https://chrome.google.com/webstore/detail/timeline/khnipnegdfealajagefmbfgdmdcgmhjd?hl=fr', '_blank');
    };
    ExtensionCheckerComponent.prototype.hideBar = function () {
        this.needsToAppear = false;
    };
    ExtensionCheckerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-extension-checker',
            template: __webpack_require__("../../../../../src/app/timeline/extension-checker/extension-checker.component.html"),
            styles: [__webpack_require__("../../../../../src/app/timeline/extension-checker/extension-checker.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_browser_infos_service__["a" /* BrowserInfosService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]])
    ], ExtensionCheckerComponent);
    return ExtensionCheckerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/timeline/listening-session/listening-session.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"listeningSession != undefined\" fxLayout=\"column\" class=\"session tm-clickable\" (click)=\"toggleList()\">\n  <div class=\"bottom\">\n    <div fxLayout=\"row\" class=\"header\">\n      <div fxFlex=\"80%\" fxLayout=\"column\">\n        <div fxFlex class=\"title\">{{listeningSession.name}}</div>\n        <div fxFlex class=\"subtitle\">{{listeningSession.musics.length}} musics - From {{listeningSession.startDate | date:'shortTime'}} To {{listeningSession.endDate | date:'shortTime'}}</div>\n      </div>\n    </div>\n  </div>\n  <app-music-list fxFlex *ngIf=\"showTracks\" [musics]=\"listeningSession.musics\" class=\"content\"></app-music-list>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/timeline/listening-session/listening-session.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".session {\n  -o-box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.4);\n  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.4);\n  background-color: #f0f0f0; }\n  .session .bottom {\n    border-bottom: solid 1px #cecece; }\n  .session .header {\n    padding-top: 1em;\n    padding-left: 1em;\n    padding-right: 1em;\n    padding-bottom: 1em;\n    margin-bottom: 1em; }\n    .session .header .title {\n      font-size: 1.4em;\n      padding-top: 1em;\n      padding-bottom: 0.5em;\n      padding-left: 1em; }\n    .session .header .subtitle {\n      font-size: 1em;\n      padding-top: 0.5em;\n      padding-bottom: 1em;\n      padding-left: 1.7em; }\n  .session .content {\n    padding-bottom: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timeline/listening-session/listening-session.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListeningSessionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListeningSessionComponent = (function () {
    function ListeningSessionComponent() {
        this.listeningSession = void 0;
        this.showTracks = false;
    }
    ListeningSessionComponent.prototype.ngOnInit = function () {
    };
    ListeningSessionComponent.prototype.toggleList = function () {
        this.showTracks = !this.showTracks;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ListeningSessionComponent.prototype, "listeningSession", void 0);
    ListeningSessionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-listening-session',
            template: __webpack_require__("../../../../../src/app/timeline/listening-session/listening-session.component.html"),
            styles: [__webpack_require__("../../../../../src/app/timeline/listening-session/listening-session.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListeningSessionComponent);
    return ListeningSessionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/timeline/listening-sessions/listening-sessions-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ui-title title=\"YOUR SESSIONS\" alignment=\"center\"></app-ui-title>\n\n    <div *ngFor=\"let session of currentSessions\">\n      <app-listening-session [listeningSession]=\"session\"></app-listening-session>\n    </div>\n    <app-request-status-display [requestStatus]=\"listeningSessionRequestStatus\" idleButtonTitle=\"LOAD MORE\" (retryRequest)=\"loadMore()\" (tryRequest)=\"loadMore()\"></app-request-status-display>\n    <div *ngIf=\"hasLoadedEverything\" class=\"tm-text-centered tm-text-grey-dark\">You got it all !</div>\n\n<div class=\"load-more-area\" appIsVisible (becameVisible)=\"loadMore()\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/timeline/listening-sessions/listening-sessions-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".load-more-area {\n  height: 5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timeline/listening-sessions/listening-sessions-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListeningSessionsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_request_status_enum__ = __webpack_require__("../../../../../src/app/shared/request-status.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listening_sessions_service__ = __webpack_require__("../../../../../src/app/timeline/listening-sessions/listening-sessions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListeningSessionsListComponent = (function () {
    function ListeningSessionsListComponent(listeningSessionsService) {
        this.listeningSessionsService = listeningSessionsService;
        this.listeningSessionsStream = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.loadMoreListeningSessionsStream = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.listeningSessionRequestStatus = __WEBPACK_IMPORTED_MODULE_2__shared_request_status_enum__["a" /* RequestStatus */].IDLE;
        this.lastListeningSession = void 0;
        this.numberOfListeningSessionsPerRequest = 5;
        this.hasLoadedEverything = false;
        this.currentSessions = [];
    }
    ListeningSessionsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listeningSessionsStream.subscribe(function (sessions) {
            sessions.forEach(function (session) { return _this.currentSessions.push(session); });
        });
        this.listeningSessionRequestStream = this.loadMoreListeningSessionsStream.asObservable()
            .map(function () {
            if (_this.lastListeningSession !== void 0) {
                return _this.lastListeningSession.startDate;
            }
            else {
                return new Date(Date.now());
            }
        });
        this.listeningSessionRequestStream.subscribe(function (startDate) {
            if (_this.hasLoadedEverything) {
                return;
            }
            _this.listeningSessionRequestStatus = __WEBPACK_IMPORTED_MODULE_2__shared_request_status_enum__["a" /* RequestStatus */].LOADING;
            _this.listeningSessionsService.listeningSessionsByDescendingDate(startDate, _this.numberOfListeningSessionsPerRequest).subscribe(function (sessions) {
                if (sessions.length === 0) {
                    _this.hasLoadedEverything = true;
                    _this.listeningSessionRequestStatus = __WEBPACK_IMPORTED_MODULE_2__shared_request_status_enum__["a" /* RequestStatus */].SUCCESS;
                }
                else {
                    _this.lastListeningSession = sessions.slice(-1).pop();
                    _this.listeningSessionsStream.next(sessions);
                }
            }, function (error) {
                _this.listeningSessionRequestStatus = __WEBPACK_IMPORTED_MODULE_2__shared_request_status_enum__["a" /* RequestStatus */].FAILURE;
            });
        });
        this.listeningSessionsStream.subscribe(function (_) { return _this.listeningSessionRequestStatus = __WEBPACK_IMPORTED_MODULE_2__shared_request_status_enum__["a" /* RequestStatus */].IDLE; });
        // Start with something
        this.loadMore();
    };
    ListeningSessionsListComponent.prototype.loadMore = function () {
        this.loadMoreListeningSessionsStream.next();
    };
    ListeningSessionsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-listening-sessions-list',
            template: __webpack_require__("../../../../../src/app/timeline/listening-sessions/listening-sessions-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/timeline/listening-sessions/listening-sessions-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__listening_sessions_service__["a" /* ListeningSessionsService */]])
    ], ListeningSessionsListComponent);
    return ListeningSessionsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/timeline/listening-sessions/listening-sessions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListeningSessionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__timeline_utils__ = __webpack_require__("../../../../../src/app/timeline/timeline-utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListeningSessionsService = (function () {
    function ListeningSessionsService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    ListeningSessionsService.prototype.listeningSessionsByDescendingDate = function (date, number) {
        if (number === void 0) { number = 3; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': this.auth.authorizationHeaderValue });
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].servicesUrls.streamService + ("listeningSession/byDescendingDate/" + date.toISOString() + "/" + number), options)
            .map(function (res) { return res.json(); })
            .map(function (sessions) { return sessions.map(function (session) { return Object.assign({
            startDate: new Date(session.startDate),
            endDate: new Date(session.endDate),
            name: session.name,
            musics: session.musics.map(function (dirtyMusic) { return Object.assign({
                title: dirtyMusic.title,
                artist: dirtyMusic.artist,
                url: dirtyMusic.url,
                listenedDate: new Date(dirtyMusic.date),
                domain: __WEBPACK_IMPORTED_MODULE_6__timeline_utils__["a" /* TimelineUtils */].handleDomain(dirtyMusic.domain)
            }); })
        }); }); });
    };
    ListeningSessionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]])
    ], ListeningSessionsService);
    return ListeningSessionsService;
}());



/***/ }),

/***/ "../../../../../src/app/timeline/music-history/music-history.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <app-ui-title title=\"YOUR HISTORY\" alignment=\"center\"></app-ui-title>\n\n\n  <div *ngFor=\"let dayMusics of orderedByDayListeningHistory\" class=\"row\">\n    <div class=\"date\">{{dayMusics.date | date: 'dd/MM/yyyy'}}</div>\n  <app-music-list fxFlex [musics]=\"dayMusics.musics\"></app-music-list>\n  </div>\n\n\n  <app-request-status-display [requestStatus]=\"listeningHistoryRequestStatus\" idleButtonTitle=\"LOAD MORE\" (retryRequest)=\"loadMore()\" (tryRequest)=\"loadMore()\"></app-request-status-display>\n  <div *ngIf=\"hasLoadedEverything\" class=\"tm-text-centered tm-text-grey-dark\">You got it all !</div>\n  <div class=\"load-more-area\" appIsVisible (becameVisible)=\"loadMore()\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/timeline/music-history/music-history.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".load-more-area {\n  height: 5em; }\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .row .date {\n    text-align: center;\n    font-size: 1.5em;\n    margin-top: 1em;\n    margin-bottom: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timeline/music-history/music-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_request_status_enum__ = __webpack_require__("../../../../../src/app/shared/request-status.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_library_library_service__ = __webpack_require__("../../../../../src/app/timeline/page-library/library.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MusicHistoryComponent = (function () {
    function MusicHistoryComponent(pastService) {
        this.pastService = pastService;
        this.listeningHistoryStream = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        this.loadMoreListeningHistoryStream = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        this.listeningHistoryRequestStatus = __WEBPACK_IMPORTED_MODULE_1__shared_request_status_enum__["a" /* RequestStatus */].IDLE;
        this.lastMusic = void 0;
        this.numberOfMusicsByRequest = 5;
        this.hasLoadedEverything = false;
        this.orderedByDayListeningHistory = [];
    }
    MusicHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Requests button
        this.listeningHistoryRequestStream = this.loadMoreListeningHistoryStream.asObservable()
            .map(function () {
            if (_this.lastMusic !== void 0) {
                return _this.lastMusic.listenedDate;
            }
            else {
                return new Date(Date.now());
            }
        });
        // Handle request stream
        this.listeningHistoryRequestStream.subscribe(function (startDate) {
            if (_this.hasLoadedEverything) {
                return;
            }
            _this.listeningHistoryRequestStatus = __WEBPACK_IMPORTED_MODULE_1__shared_request_status_enum__["a" /* RequestStatus */].LOADING;
            _this.pastService.musicHistoryByDescendingDate(startDate, _this.numberOfMusicsByRequest).subscribe(function (musics) {
                if (musics.length === 0) {
                    _this.hasLoadedEverything = true;
                    _this.listeningHistoryRequestStatus = __WEBPACK_IMPORTED_MODULE_1__shared_request_status_enum__["a" /* RequestStatus */].SUCCESS;
                }
                else {
                    _this.lastMusic = musics.slice(-1).pop();
                    _this.listeningHistoryStream.next(musics);
                }
            }, function (error) {
                _this.listeningHistoryRequestStatus = __WEBPACK_IMPORTED_MODULE_1__shared_request_status_enum__["a" /* RequestStatus */].FAILURE;
            });
        });
        this.listeningHistoryStream.subscribe(function (_) { return _this.listeningHistoryRequestStatus = __WEBPACK_IMPORTED_MODULE_1__shared_request_status_enum__["a" /* RequestStatus */].IDLE; });
        // Fill up ordered list with raw stream
        this.listeningHistoryStream.subscribe(function (newMusics) {
            _this.addMusicsToOrderedArray(newMusics);
        });
        // Start with something
        this.loadMore();
    };
    MusicHistoryComponent.prototype.loadMore = function () {
        this.loadMoreListeningHistoryStream.next();
    };
    MusicHistoryComponent.prototype.addMusicsToOrderedArray = function (newMusics) {
        // Case array empty
        if (this.orderedByDayListeningHistory.length === 0) {
            var firstMusicToAdd = newMusics[0];
            newMusics.shift();
            var newDailyMusics = {
                musics: [firstMusicToAdd],
                date: firstMusicToAdd.listenedDate
            };
            this.orderedByDayListeningHistory.push(newDailyMusics);
        }
        // Sort by day algo
        var lastDailyMusicsDate = this.dateToDayString(this.orderedByDayListeningHistory[this.orderedByDayListeningHistory.length - 1].date);
        for (var _i = 0, newMusics_1 = newMusics; _i < newMusics_1.length; _i++) {
            var newMusic = newMusics_1[_i];
            var newMusicDate = this.dateToDayString(newMusic.listenedDate);
            if (lastDailyMusicsDate === newMusicDate) {
                this.orderedByDayListeningHistory[this.orderedByDayListeningHistory.length - 1].musics.push(newMusic);
            }
            else {
                var newDailyMusics = {
                    musics: [newMusic],
                    date: newMusic.listenedDate
                };
                this.orderedByDayListeningHistory.push(newDailyMusics);
                lastDailyMusicsDate = this.dateToDayString(newMusic.listenedDate);
            }
        }
    };
    MusicHistoryComponent.prototype.dateToDayString = function (date) {
        return date.toISOString().slice(0, 10).replace(/-/g, '');
    };
    MusicHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-music-history',
            template: __webpack_require__("../../../../../src/app/timeline/music-history/music-history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/timeline/music-history/music-history.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__page_library_library_service__["a" /* LibraryService */]])
    ], MusicHistoryComponent);
    return MusicHistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/timeline/music-list/music-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"musicList\">\n  <div *ngFor=\"let music of musics\" class=\"smallMusic\" (click)=\"openTabWithMusic(music.url)\">\n    <div class=\"albumCover\"></div>\n    <div class=\"musicInfos\">\n      <span class=\"title\">{{music.title}}</span>\n      <span class=\"artist\">{{music.artist}}</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/timeline/music-list/music-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".domain-soundcloud {\n  border-right: 5px solid orange; }\n\n.domain-youtube {\n  border-right: 5px solid red; }\n\n.domain-deezer {\n  border-right: 5px solid hotpink; }\n\n.domain-spotify {\n  border-right: 5px solid limegreen; }\n\n.domain-unknown {\n  border-right: 5px solid dimgray; }\n\n.musicList {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  @media (max-width: 40rem) {\n    .musicList {\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      min-width: 100%; } }\n\n.smallMusic {\n  transition: all 0.1s ease;\n  font-size: 1rem;\n  border: solid 1px #e3e3e3;\n  margin-bottom: 0.4em;\n  width: 100%;\n  max-width: 40rem;\n  margin-left: 1em;\n  margin-right: 1em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n  @media (max-width: 40rem) {\n    .smallMusic {\n      margin-left: 0;\n      margin-right: 0; } }\n  .smallMusic:active {\n    background-color: #bebebe; }\n  .smallMusic:hover {\n    background-color: #f0f0f0;\n    cursor: pointer;\n    transition: all 0.1s ease; }\n  .smallMusic .albumCover {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    -ms-flex-preferred-size: auto;\n        flex-basis: auto;\n    width: 4em;\n    height: 4em;\n    background-color: darkolivegreen;\n    margin-right: 1.5em; }\n  .smallMusic .musicInfos {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    /* align horizontal */\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    /* align vertical */\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding-right: 1em;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    min-width: 0; }\n    .smallMusic .musicInfos .title {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      min-width: 0;\n      font-size: 1em;\n      color: #1e1e1e;\n      min-width: 0; }\n    .smallMusic .musicInfos .artist {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      min-width: 0;\n      font-size: 0.8em;\n      color: #464646;\n      min-width: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timeline/music-list/music-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_music_domain_enum_aware_decorator__ = __webpack_require__("../../../../../src/app/timeline/api/music-domain-enum-aware.decorator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_music_domain_enum__ = __webpack_require__("../../../../../src/app/timeline/api/music-domain.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MusicListComponent = (function () {
    function MusicListComponent() {
        this.musics = [];
    }
    MusicListComponent.prototype.ngOnInit = function () {
    };
    MusicListComponent.prototype.openTabWithMusic = function (url) {
        window.open(url, '_blank');
    };
    MusicListComponent.prototype.musicClass = function (music) {
        switch (music.domain) {
            case __WEBPACK_IMPORTED_MODULE_2__api_music_domain_enum__["a" /* MusicDomain */].YOUTUBE:
                return 'domain-youtube';
            case __WEBPACK_IMPORTED_MODULE_2__api_music_domain_enum__["a" /* MusicDomain */].SOUNDCLOUD:
                return 'domain-soundcloud';
            case __WEBPACK_IMPORTED_MODULE_2__api_music_domain_enum__["a" /* MusicDomain */].DEEZER:
                return 'domain-deezer';
            case __WEBPACK_IMPORTED_MODULE_2__api_music_domain_enum__["a" /* MusicDomain */].UNKNOWN:
                return 'domain-unknown';
            default:
                return 'domain-unknown';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MusicListComponent.prototype, "musics", void 0);
    MusicListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-music-list',
            template: __webpack_require__("../../../../../src/app/timeline/music-list/music-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/timeline/music-list/music-list.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_1__api_music_domain_enum_aware_decorator__["a" /* MusicDomainEnumAware */],
        __metadata("design:paramtypes", [])
    ], MusicListComponent);
    return MusicListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/timeline/page-explore/explore.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExploreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timeline_utils__ = __webpack_require__("../../../../../src/app/timeline/timeline-utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExploreService = (function () {
    function ExploreService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    ExploreService.prototype.lastListenings = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': this.auth.authorizationHeaderValue });
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].servicesUrls.streamService + "social/lastListenings/", options)
            .map(function (res) { return res.json(); })
            .map(function (dirtyMusics) { return dirtyMusics.map(function (dirtyMusic) { return Object.assign({}, {
            title: dirtyMusic.title,
            artist: dirtyMusic.artist,
            url: dirtyMusic.url,
            listenedDate: new Date(dirtyMusic.date),
            domain: __WEBPACK_IMPORTED_MODULE_4__timeline_utils__["a" /* TimelineUtils */].handleDomain(dirtyMusic.domain)
        }); }); });
    };
    ExploreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]])
    ], ExploreService);
    return ExploreService;
}());



/***/ }),

/***/ "../../../../../src/app/timeline/page-explore/page-explore.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ui-title title=\"Listenings arround you\"></app-ui-title>\n<app-music-list [musics]=\"lastListenings\"></app-music-list>\n<app-request-status-display [requestStatus]=\"lastListeningsRequestStatus\" (tryRequest)=\"loadLastListenings()\" (retryRequest)=\"retryLoadLastListenings()\"></app-request-status-display>\n"

/***/ }),

/***/ "../../../../../src/app/timeline/page-explore/page-explore.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".big-text {\n  font-size: 40px;\n  color: #5a5a5a;\n  text-align: center; }\n\n.arround-you {\n  background-color: #cecece; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timeline/page-explore/page-explore.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageExploreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_request_status_enum__ = __webpack_require__("../../../../../src/app/shared/request-status.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__explore_service__ = __webpack_require__("../../../../../src/app/timeline/page-explore/explore.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageExploreComponent = (function () {
    function PageExploreComponent(exploreService) {
        this.exploreService = exploreService;
        this.lastListenings = [];
        this.lastListeningsRequestStatus = __WEBPACK_IMPORTED_MODULE_1__shared_request_status_enum__["a" /* RequestStatus */].IDLE;
    }
    PageExploreComponent.prototype.ngOnInit = function () {
        this.lastListeningsRequestStatus = __WEBPACK_IMPORTED_MODULE_1__shared_request_status_enum__["a" /* RequestStatus */].LOADING;
        this.loadLastListenings();
    };
    PageExploreComponent.prototype.loadLastListenings = function () {
        var _this = this;
        this.lastListeningsObservable = this.exploreService.lastListenings().subscribe(function (musics) {
            _this.lastListeningsRequestStatus = __WEBPACK_IMPORTED_MODULE_1__shared_request_status_enum__["a" /* RequestStatus */].SUCCESS;
            _this.lastListenings = musics;
            console.log('got last listenings musics:' + JSON.stringify(musics));
        }, function (error) {
            console.log('error' + JSON.stringify(error));
            console.log(error);
            _this.lastListeningsRequestStatus = __WEBPACK_IMPORTED_MODULE_1__shared_request_status_enum__["a" /* RequestStatus */].FAILURE;
        });
    };
    PageExploreComponent.prototype.retryLoadLastListenings = function () {
        this.lastListeningsObservable.unsubscribe();
        this.loadLastListenings();
    };
    PageExploreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-present',
            template: __webpack_require__("../../../../../src/app/timeline/page-explore/page-explore.component.html"),
            styles: [__webpack_require__("../../../../../src/app/timeline/page-explore/page-explore.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__explore_service__["a" /* ExploreService */]])
    ], PageExploreComponent);
    return PageExploreComponent;
}());



/***/ }),

/***/ "../../../../../src/app/timeline/page-library/library.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__timeline_utils__ = __webpack_require__("../../../../../src/app/timeline/timeline-utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LibraryService = (function () {
    function LibraryService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    LibraryService.prototype.musicHistoryLasts = function (number) {
        if (number === void 0) { number = 10; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': this.auth.authorizationHeaderValue });
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].servicesUrls.streamService + ("musics/last/" + number + "/"), options)
            .map(function (res) { return res.json(); })
            .map(function (dirtyMusics) { return dirtyMusics.map(function (dirtyMusic) { return Object.assign({
            title: dirtyMusic.title,
            artist: dirtyMusic.artist,
            url: dirtyMusic.url,
            listenedDate: new Date(dirtyMusic.date),
            domain: __WEBPACK_IMPORTED_MODULE_6__timeline_utils__["a" /* TimelineUtils */].handleDomain(dirtyMusic.domain)
        }); }); });
    };
    LibraryService.prototype.musicHistoryByDescendingDate = function (date, number) {
        if (number === void 0) { number = 10; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': this.auth.authorizationHeaderValue });
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].servicesUrls.streamService + ("musics/byDescendingDate/" + date.toISOString() + "/" + number), options)
            .map(function (res) { return res.json(); })
            .map(function (dirtyMusics) { return dirtyMusics.map(function (dirtyMusic) { return Object.assign({
            title: dirtyMusic.title,
            artist: dirtyMusic.artist,
            url: dirtyMusic.url,
            listenedDate: new Date(dirtyMusic.date),
            domain: __WEBPACK_IMPORTED_MODULE_6__timeline_utils__["a" /* TimelineUtils */].handleDomain(dirtyMusic.domain)
        }); }); });
    };
    LibraryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]])
    ], LibraryService);
    return LibraryService;
}());



/***/ }),

/***/ "../../../../../src/app/timeline/page-library/page-library.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"end end\">\n\n  <div class=\"switch-icon-container tm-clickable icon\" (click)=\"switchView(1)\" matTooltip=\"History\" matTooltipPosition=\"above\" [ngClass]=\"{'icon-active': viewState===1}\">\n    <mat-icon class=\"icon\">reorder</mat-icon>\n  </div>\n\n  <div class=\"switch-icon-container tm-clickable icon\" (click)=\"switchView(0)\" matTooltip=\"Listening Sessions\" matTooltipPosition=\"above\" [ngClass]=\"{'icon-active': viewState===0}\">\n    <mat-icon class=\"icon\">view_agenda</mat-icon>\n  </div>\n\n</div>\n\n<div *ngIf=\"viewState === 0\">\n  <app-listening-sessions-list></app-listening-sessions-list>\n</div>\n\n<div *ngIf=\"viewState === 1\">\n  <app-music-history></app-music-history>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/timeline/page-library/page-library.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".switch-icon-container {\n  color: #cecece;\n  padding: 1em 1em 1em 1em;\n  transition: all 0.1s ease; }\n  .switch-icon-container:hover {\n    color: #636bae;\n    transition: all 0.1s ease; }\n  .switch-icon-container:active {\n    color: #5b5ba4;\n    transition: all 0.1s ease; }\n  .switch-icon-container .icon {\n    font-size: 2em; }\n\n.icon-active {\n  color: #5b5ba4; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timeline/page-library/page-library.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageLibraryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__library_service__ = __webpack_require__("../../../../../src/app/timeline/page-library/library.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageLibraryComponent = (function () {
    function PageLibraryComponent(libraryService) {
        this.libraryService = libraryService;
        this.hasLoadedEverything = false;
        this.viewState = 0;
    }
    PageLibraryComponent.prototype.ngOnInit = function () {
    };
    PageLibraryComponent.prototype.switchView = function (newValue) {
        this.viewState = newValue;
    };
    PageLibraryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-past',
            template: __webpack_require__("../../../../../src/app/timeline/page-library/page-library.component.html"),
            styles: [__webpack_require__("../../../../../src/app/timeline/page-library/page-library.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__library_service__["a" /* LibraryService */]])
    ], PageLibraryComponent);
    return PageLibraryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/timeline/timeline-navbar/timeline-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxHide.lt-md=\"true\">\n\n  <div class=\"square-logo-mask\"></div>\n\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <div [routerLinkActive]=\"['item-active']\" [routerLink]=\"['explore']\" class=\"tm-clickable item\">EXPLORE<div class=\"arrow-down\"></div></div>\n    <div [routerLinkActive]=\"['item-active']\" [routerLink]=\"['library']\" class=\"tm-clickable item\">MY LIBRARY<div class=\"arrow-down\"></div></div>\n  </div>\n\n  <div fxFlexAlign=\"end end\" fxLayout=\"row\" fxLayoutAlign=\"end end\">\n    <mat-menu #navbarMenuMore=\"matMenu\" class=\"tm-text-centered\" [overlapTrigger]=\"false\">\n      <button mat-menu-item [routerLink]=\"['/about']\"> About </button>\n      <button mat-menu-item (click)=\"openWelcomeDialog()\"> Help </button>\n      <button mat-menu-item (click)=\"logOut()\"> Log Out </button>\n    </mat-menu>\n    <div class=\"tm-clickable button\" [matMenuTriggerFor]=\"navbarMenuMore\">\n      <mat-icon>more_vert</mat-icon>\n    </div>\n  </div>\n</div>\n\n<div class=\"navbar\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxHide.gt-sm=\"true\">\n\n  <div class=\"tm-clickable button\" (click)=\"openSidenav()\">\n    <mat-icon>menu</mat-icon>\n  </div>\n\n  <div>Timeline</div>\n\n  <div fxFlex fxFlexAlign=\"end end\" fxLayout=\"row\" fxLayoutAlign=\"end end\">\n    <mat-menu #navbarMenuMore=\"matMenu\" class=\"tm-text-centered\" [overlapTrigger]=\"false\">\n      <button mat-menu-item [routerLink]=\"['/about']\"> About </button>\n      <button mat-menu-item (click)=\"openWelcomeDialog()\"> Help </button>\n      <button mat-menu-item (click)=\"logOut()\"> Log Out </button>\n    </mat-menu>\n    <div class=\"tm-clickable button\" [matMenuTriggerFor]=\"navbarMenuMore\">\n      <mat-icon>more_vert</mat-icon>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/timeline/timeline-navbar/timeline-navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tm-gradient {\n  background-image: linear-gradient(to right, #9cb5e3, #5b5ba4); }\n\n.tm-link-blue {\n  color: #7893c8;\n  text-decoration: none; }\n  .tm-link-blue:hover {\n    text-decoration: underline;\n    color: #7893c8; }\n\n.tm-text-centered {\n  text-align: center; }\n\n.tm-text-grey-mid {\n  color: #464646; }\n\n.tm-text-link:hover {\n  cursor: pointer;\n  text-decoration: underline; }\n\n.tm-text-link:focus, .tm-text-link:active {\n  outline: 0; }\n\n.tm-gray-button {\n  text-decoration: none;\n  font-size: 20px;\n  line-height: 50px;\n  text-align: center;\n  font-weight: 500;\n  color: #1e1e1e;\n  border-radius: 2px;\n  border-style: solid;\n  border-color: transparent;\n  background-color: #e3e3e3;\n  transition: all 0.2s ease; }\n  .tm-gray-button:hover {\n    cursor: pointer;\n    background-color: #f0f0f0;\n    transition: all 0.2s ease; }\n\n.tm-clickable:hover {\n  cursor: pointer; }\n\n.tm-clickable:focus, .tm-clickable:active {\n  outline: 0; }\n\n.tm-noselect {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently supported by Chrome and Opera */ }\n\n.debug-flex {\n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  background-color: #d06e6e; }\n\n.debug-flexx {\n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  background-color: #6f6fa4; }\n\n.debug-flexxx {\n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  background-color: #55b76c; }\n\n.navbar {\n  background-image: linear-gradient(to right, #9cb5e3, #5b5ba4);\n  color: #fafafa;\n  font-weight: 600;\n  height: 5rem; }\n  @media (max-width: 40rem) {\n    .navbar {\n      padding-left: 0.3rem;\n      padding-right: 0.3rem; } }\n  @media (min-width: 41rem) and (max-width: 65rem) {\n    .navbar {\n      padding-left: 2em;\n      padding-right: 2em; } }\n  @media (min-width: 65rem) {\n    .navbar {\n      padding-left: 2em;\n      padding-right: 2em; } }\n  .navbar .square-logo-mask {\n    background-image: url(" + __webpack_require__("../../../../../src/assets/square_logo_mask.png") + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 5rem 5rem;\n    height: 5rem;\n    width: 5rem; }\n    @media (max-width: 40rem) {\n      .navbar .square-logo-mask {\n        display: none; } }\n  .navbar .item {\n    color: #cecece;\n    height: 5rem;\n    padding-left: 1em;\n    padding-right: 1em;\n    font-weight: 400;\n    display: -ms-grid;\n    display: grid;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    text-align: center;\n    font-size: 1em;\n    position: relative; }\n    @media (max-width: 40rem) {\n      .navbar .item {\n        width: 5em; } }\n    @media (min-width: 41rem) and (max-width: 65rem) {\n      .navbar .item {\n        width: 9em; } }\n    @media (min-width: 65rem) {\n      .navbar .item {\n        width: 9em; } }\n    .navbar .item:hover {\n      color: #fafafa; }\n    .navbar .item .arrow-down {\n      display: none; }\n  .navbar .item-active {\n    color: #fafafa;\n    font-weight: 900;\n    font-size: 1.2em; }\n    .navbar .item-active .arrow-down {\n      display: block;\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-left: 10px solid transparent;\n      border-right: 10px solid transparent;\n      border-bottom: 10px solid #fafafa;\n      bottom: 0;\n      left: 45%; }\n  .navbar .button {\n    background-color: transparent;\n    border: none;\n    color: #fafafa;\n    height: 2em;\n    width: 2em;\n    padding: 1em; }\n    .navbar .button mat-icon {\n      font-size: 2em; }\n    .navbar .button:hover {\n      color: #fafafa; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timeline/timeline-navbar/timeline-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_dialog_welcome_dialog_component__ = __webpack_require__("../../../../../src/app/timeline/welcome-dialog/welcome-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidenav_service__ = __webpack_require__("../../../../../src/app/sidenav.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TimelineNavbarComponent = (function () {
    function TimelineNavbarComponent(authService, sidenavService, router, dialog) {
        this.authService = authService;
        this.sidenavService = sidenavService;
        this.router = router;
        this.dialog = dialog;
    }
    TimelineNavbarComponent.prototype.ngOnInit = function () {
    };
    TimelineNavbarComponent.prototype.logOut = function () {
        this.authService.logout();
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        var redirect = '/';
        // Redirect the user
        this.router.navigate([redirect]);
    };
    TimelineNavbarComponent.prototype.openWelcomeDialog = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__welcome_dialog_welcome_dialog_component__["a" /* WelcomeDialogComponent */]);
    };
    TimelineNavbarComponent.prototype.openSidenav = function () {
        this.sidenavService.openSidenav();
    };
    TimelineNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-timeline-navbar',
            template: __webpack_require__("../../../../../src/app/timeline/timeline-navbar/timeline-navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/timeline/timeline-navbar/timeline-navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__sidenav_service__["a" /* SidenavService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialog */]])
    ], TimelineNavbarComponent);
    return TimelineNavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/timeline/timeline-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timeline_component__ = __webpack_require__("../../../../../src/app/timeline/timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_explore_page_explore_component__ = __webpack_require__("../../../../../src/app/timeline/page-explore/page-explore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_library_page_library_component__ = __webpack_require__("../../../../../src/app/timeline/page-library/page-library.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TimelineRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__timeline_component__["a" /* TimelineComponent */],
        children: [
            { path: '', redirectTo: 'explore', pathMatch: 'prefix' },
            { path: 'explore', component: __WEBPACK_IMPORTED_MODULE_3__page_explore_page_explore_component__["a" /* PageExploreComponent */] },
            { path: 'library', component: __WEBPACK_IMPORTED_MODULE_4__page_library_page_library_component__["a" /* PageLibraryComponent */] }
        ] },
];
var TimelineRoutingModule = (function () {
    function TimelineRoutingModule() {
    }
    TimelineRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(TimelineRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]
            ]
        })
    ], TimelineRoutingModule);
    return TimelineRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/timeline/timeline-sidenav/timeline-sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"sidenav\">\n  <div [routerLinkActive]=\"['item-active']\" [routerLink]=\"['timeline/explore']\" class=\"tm-clickable item\" (click)=\"sidenav.close()\">EXPLORE</div>\n  <div [routerLinkActive]=\"['item-active']\" [routerLink]=\"['timeline/library']\" class=\"tm-clickable item\" (click)=\"sidenav.close()\">MY LIBRARY</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/timeline/timeline-sidenav/timeline-sidenav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tm-gradient {\n  background-image: linear-gradient(to right, #9cb5e3, #5b5ba4); }\n\n.tm-link-blue {\n  color: #7893c8;\n  text-decoration: none; }\n  .tm-link-blue:hover {\n    text-decoration: underline;\n    color: #7893c8; }\n\n.tm-text-centered {\n  text-align: center; }\n\n.tm-text-grey-mid {\n  color: #464646; }\n\n.tm-text-link:hover {\n  cursor: pointer;\n  text-decoration: underline; }\n\n.tm-text-link:focus, .tm-text-link:active {\n  outline: 0; }\n\n.tm-gray-button {\n  text-decoration: none;\n  font-size: 20px;\n  line-height: 50px;\n  text-align: center;\n  font-weight: 500;\n  color: #1e1e1e;\n  border-radius: 2px;\n  border-style: solid;\n  border-color: transparent;\n  background-color: #e3e3e3;\n  transition: all 0.2s ease; }\n  .tm-gray-button:hover {\n    cursor: pointer;\n    background-color: #f0f0f0;\n    transition: all 0.2s ease; }\n\n.tm-clickable:hover {\n  cursor: pointer; }\n\n.tm-clickable:focus, .tm-clickable:active {\n  outline: 0; }\n\n.tm-noselect {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently supported by Chrome and Opera */ }\n\n.debug-flex {\n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  background-color: #d06e6e; }\n\n.debug-flexx {\n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  background-color: #6f6fa4; }\n\n.debug-flexxx {\n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  background-color: #55b76c; }\n\n.sidenav {\n  width: 100%;\n  padding-top: 10em;\n  padding-left: 4em;\n  padding-right: 4em; }\n  .sidenav .item {\n    font-size: 1.5em;\n    padding-top: 1em;\n    padding-bottom: 1em;\n    text-align: center;\n    margin-top: 1em;\n    margin-bottom: 1em; }\n\n.item-active {\n  font-weight: 900; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timeline/timeline-sidenav/timeline-sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineSidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidenav_service__ = __webpack_require__("../../../../../src/app/sidenav.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimelineSidenavComponent = (function () {
    function TimelineSidenavComponent(sidenavService) {
        this.sidenavService = sidenavService;
    }
    TimelineSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sidenavService.sidenavOpened().subscribe(function () {
            _this.sidenav.open();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatSidenav */])
    ], TimelineSidenavComponent.prototype, "sidenav", void 0);
    TimelineSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-timeline-sidenav',
            template: __webpack_require__("../../../../../src/app/timeline/timeline-sidenav/timeline-sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/timeline/timeline-sidenav/timeline-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__sidenav_service__["a" /* SidenavService */]])
    ], TimelineSidenavComponent);
    return TimelineSidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/timeline/timeline-utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineUtils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_music_domain_enum__ = __webpack_require__("../../../../../src/app/timeline/api/music-domain.enum.ts");

var TimelineUtils = (function () {
    function TimelineUtils() {
    }
    TimelineUtils.handleDomain = function (domainString) {
        switch (domainString) {
            case 'spotify':
                return __WEBPACK_IMPORTED_MODULE_0__api_music_domain_enum__["a" /* MusicDomain */].SPOTIFY;
            case 'youtube':
                return __WEBPACK_IMPORTED_MODULE_0__api_music_domain_enum__["a" /* MusicDomain */].YOUTUBE;
            case 'deezer':
                return __WEBPACK_IMPORTED_MODULE_0__api_music_domain_enum__["a" /* MusicDomain */].DEEZER;
            case 'soundcloud':
                return __WEBPACK_IMPORTED_MODULE_0__api_music_domain_enum__["a" /* MusicDomain */].SOUNDCLOUD;
            default:
                return __WEBPACK_IMPORTED_MODULE_0__api_music_domain_enum__["a" /* MusicDomain */].UNKNOWN;
        }
    };
    return TimelineUtils;
}());



/***/ }),

/***/ "../../../../../src/app/timeline/timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<app-timeline-navbar></app-timeline-navbar>\n\n<div class=\"middle-column\">\n  <app-extension-checker></app-extension-checker>\n</div>\n<div class=\"middle-column marginBottom\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/timeline/timeline.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".middle-column {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin: auto;\n  margin-top: 2rem;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n  justify-self: center; }\n  @media (max-width: 40rem) {\n    .middle-column {\n      width: 98%; } }\n  @media (min-width: 41rem) and (max-width: 65rem) {\n    .middle-column {\n      width: 80%; } }\n  @media (min-width: 65rem) {\n    .middle-column {\n      width: 60em; } }\n\n.marginBottom {\n  margin-bottom: 10rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timeline/timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimelineComponent = (function () {
    function TimelineComponent(titleService, router) {
        this.titleService = titleService;
        this.router = router;
        this.titleService.setTitle('Home');
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-timeline',
            template: __webpack_require__("../../../../../src/app/timeline/timeline.component.html"),
            styles: [__webpack_require__("../../../../../src/app/timeline/timeline.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* Title */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/timeline/timeline.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineModule", function() { return TimelineModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timeline_routing_module__ = __webpack_require__("../../../../../src/app/timeline/timeline-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timeline_component__ = __webpack_require__("../../../../../src/app/timeline/timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_library_page_library_component__ = __webpack_require__("../../../../../src/app/timeline/page-library/page-library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_explore_page_explore_component__ = __webpack_require__("../../../../../src/app/timeline/page-explore/page-explore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__music_list_music_list_component__ = __webpack_require__("../../../../../src/app/timeline/music-list/music-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__album_view_album_view_component__ = __webpack_require__("../../../../../src/app/timeline/album-view/album-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_library_library_service__ = __webpack_require__("../../../../../src/app/timeline/page-library/library.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__timeline_navbar_timeline_navbar_component__ = __webpack_require__("../../../../../src/app/timeline/timeline-navbar/timeline-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ui_components_ui_components_module__ = __webpack_require__("../../../../../src/app/ui-components/ui-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__welcome_dialog_welcome_dialog_component__ = __webpack_require__("../../../../../src/app/timeline/welcome-dialog/welcome-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__extension_checker_extension_checker_component__ = __webpack_require__("../../../../../src/app/timeline/extension-checker/extension-checker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_browser_infos_service__ = __webpack_require__("../../../../../src/app/core/browser-infos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__page_explore_explore_service__ = __webpack_require__("../../../../../src/app/timeline/page-explore/explore.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__deprecated_music_card_music_card_component__ = __webpack_require__("../../../../../src/app/timeline/deprecated/music-card/music-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__deprecated_music_card_carroussel_music_card_carroussel_component__ = __webpack_require__("../../../../../src/app/timeline/deprecated/music-card-carroussel/music-card-carroussel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__listening_sessions_listening_sessions_list_component__ = __webpack_require__("../../../../../src/app/timeline/listening-sessions/listening-sessions-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__listening_sessions_listening_sessions_service__ = __webpack_require__("../../../../../src/app/timeline/listening-sessions/listening-sessions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__listening_session_listening_session_component__ = __webpack_require__("../../../../../src/app/timeline/listening-session/listening-session.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__music_history_music_history_component__ = __webpack_require__("../../../../../src/app/timeline/music-history/music-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__timeline_sidenav_timeline_sidenav_component__ = __webpack_require__("../../../../../src/app/timeline/timeline-sidenav/timeline-sidenav.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var TimelineModule = (function () {
    function TimelineModule() {
    }
    TimelineModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__timeline_routing_module__["a" /* TimelineRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_app_shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["q" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["p" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["k" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["r" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_13__ui_components_ui_components_module__["a" /* UiComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["o" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["i" /* MatMenuModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__timeline_component__["a" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_5__page_library_page_library_component__["a" /* PageLibraryComponent */],
                __WEBPACK_IMPORTED_MODULE_6__page_explore_page_explore_component__["a" /* PageExploreComponent */],
                __WEBPACK_IMPORTED_MODULE_7__music_list_music_list_component__["a" /* MusicListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__album_view_album_view_component__["a" /* AlbumViewComponent */],
                __WEBPACK_IMPORTED_MODULE_11__timeline_navbar_timeline_navbar_component__["a" /* TimelineNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__welcome_dialog_welcome_dialog_component__["a" /* WelcomeDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_15__extension_checker_extension_checker_component__["a" /* ExtensionCheckerComponent */],
                __WEBPACK_IMPORTED_MODULE_18__deprecated_music_card_music_card_component__["a" /* MusicCardComponent */],
                __WEBPACK_IMPORTED_MODULE_19__deprecated_music_card_carroussel_music_card_carroussel_component__["a" /* MusicCardCarrousselComponent */],
                __WEBPACK_IMPORTED_MODULE_21__listening_sessions_listening_sessions_list_component__["a" /* ListeningSessionsListComponent */],
                __WEBPACK_IMPORTED_MODULE_23__listening_session_listening_session_component__["a" /* ListeningSessionComponent */],
                __WEBPACK_IMPORTED_MODULE_24__music_history_music_history_component__["a" /* MusicHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_25__timeline_sidenav_timeline_sidenav_component__["a" /* TimelineSidenavComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_25__timeline_sidenav_timeline_sidenav_component__["a" /* TimelineSidenavComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__page_library_library_service__["a" /* LibraryService */], __WEBPACK_IMPORTED_MODULE_16__core_browser_infos_service__["a" /* BrowserInfosService */], __WEBPACK_IMPORTED_MODULE_17__page_explore_explore_service__["a" /* ExploreService */], __WEBPACK_IMPORTED_MODULE_22__listening_sessions_listening_sessions_service__["a" /* ListeningSessionsService */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_14__welcome_dialog_welcome_dialog_component__["a" /* WelcomeDialogComponent */]]
        })
    ], TimelineModule);
    return TimelineModule;
}());



/***/ }),

/***/ "../../../../../src/app/timeline/welcome-dialog/welcome-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"margin responsiveSize\">\n\n  <div *ngIf=\"showOne\" fxFlex=\"100%\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n    <div fxFlex class=\"title\">Welcome to Timeline !</div>\n    <hr/>\n    <div fxFlex class=\"text tm-text-centered\">Let's do a quick tour of your home</div>\n    <button mat-raised-button color=\"primary\" (click)=\"two()\">START THE TOUR<mat-icon>keyboard_arrow_right</mat-icon></button>\n  </div>\n\n  <div *ngIf=\"showTwo\"  fxFlex=\"100%\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n    <div fxFlex class=\"title\">Your library</div>\n    <hr/>\n    <div fxFlex class=\"tm-text-centered text\">Your library gathers all your previous music listenings. <br>Looking for a song you've heard ? Look it up there !</div>\n    <button mat-raised-button color=\"primary\" (click)=\"three()\">NEXT<mat-icon>keyboard_arrow_right</mat-icon></button>\n  </div>\n\n  <div *ngIf=\"showThree\"  fxFlex=\"100%\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n    <div fxFlex class=\"title\">Explore</div>\n    <hr/>\n    <div fxFlex class=\"tm-text-centered text\">The explore tab is your door through discovery. <br>Looking for something new ? It's probably there !</div>\n    <button mat-raised-button color=\"primary\" (click)=\"four()\">NEXT<mat-icon>keyboard_arrow_right</mat-icon></button>\n  </div>\n\n\n  <div *ngIf=\"showFour\"  fxFlex=\"100%\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n\n    <div fxFlex class=\"title\">That's it for now</div>\n    <hr/>\n    <div fxFlex class=\"text\">Timeline will get new features, stay tuned !</div>\n    <button fxFlexAlign=\"end center\" mat-raised-button color=\"primary\" (click)=\"close()\">GOT IT !</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/timeline/welcome-dialog/welcome-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin {\n  margin: 4em; }\n  @media (max-width: 40rem) {\n    .margin {\n      margin-left: 1em;\n      margin-right: 1em; } }\n\n.responsiveSize {\n  font-size: 1em; }\n  @media (max-width: 40rem) {\n    .responsiveSize {\n      font-size: 1em; } }\n\n.title {\n  font-size: 2em;\n  color: #1e1e1e;\n  text-align: center; }\n\n.hidden {\n  height: 1px; }\n\n.text {\n  font-size: 1em; }\n\nbutton {\n  margin: 2em;\n  margin-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timeline/welcome-dialog/welcome-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeDialogComponent = (function () {
    function WelcomeDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.showOne = true;
        this.showTwo = false;
        this.showThree = false;
        this.showFour = false;
    }
    WelcomeDialogComponent.prototype.two = function () {
        this.showOne = false;
        this.showThree = false;
        this.showTwo = true;
        this.showFour = false;
    };
    WelcomeDialogComponent.prototype.three = function () {
        this.showOne = false;
        this.showTwo = false;
        this.showThree = true;
        this.showFour = false;
    };
    WelcomeDialogComponent.prototype.four = function () {
        this.showOne = false;
        this.showTwo = false;
        this.showThree = false;
        this.showFour = true;
    };
    WelcomeDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    WelcomeDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome-dialog',
            template: __webpack_require__("../../../../../src/app/timeline/welcome-dialog/welcome-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/timeline/welcome-dialog/welcome-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */]])
    ], WelcomeDialogComponent);
    return WelcomeDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ui-components/concat-streams/concat-streams.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConcatStreamsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConcatStreamsPipe = (function () {
    function ConcatStreamsPipe() {
        this.allData = [];
    }
    ConcatStreamsPipe.prototype.transform = function (values) {
        if (values) {
            (_a = this.allData).push.apply(_a, values);
            return this.allData;
        }
        var _a;
    };
    ConcatStreamsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'concatStreams',
            pure: true
        })
    ], ConcatStreamsPipe);
    return ConcatStreamsPipe;
}());



/***/ }),

/***/ "../../../../../src/app/ui-components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n  <div class=\"footer\" fxFlex=\"400px\" fxLayout=\"column\">\n\n    <div fxFlex=\"50px\"></div>\n    <div fxFlex=\"200px\" fxLayout=\"row\">\n      <div fxFlex=\"50%\" fxFlexOffset=\"10%\" fxLayout=\"column\">\n        <div fxFlex=\"100px\" class=\"title-photo-footer\" [routerLink]=\"['/']\"></div>\n        <a fxFlex [routerLink]=\"['/about']\" class=\"padding\">About us</a>\n        <a fxFlex [routerLink]=\"['/tos']\" class=\"padding\">Terms of service</a>\n        <a fxFlex [routerLink]=\"['/']\" class=\"padding\">Contact us</a>\n\n      </div>\n    </div>\n\n    <div fxFlex=\"20%\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\" class=\"tm-text-centered lightgray-text\">\n      © 2017 - Timeline Team\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  background-color: #272727;\n  color: white; }\n\na {\n  color: #cecece;\n  text-decoration: none; }\n\na:hover {\n  color: #f0f0f0;\n  text-decoration: none; }\n\n.lightgray-text {\n  color: #464646; }\n\n.padding {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.title-photo-footer {\n  background: url(" + __webpack_require__("../../../../../src/assets/title.png") + ") no-repeat;\n  background-size: contain;\n  width: 250px; }\n\n.title-photo-footer:focus {\n  outline: 0; }\n\n.title-photo-footer:hover {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function FooterComponent(router) {
        this.router = router;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/ui-components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui-components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ui-components/go-back-to-timeline-bar/go-back-to-timeline-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\" (click)=\"redirectToTimeline()\" class=\"text-button\">\n    <mat-icon>arrow_back</mat-icon>\n    <div>Go Back</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/go-back-to-timeline-bar/go-back-to-timeline-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  height: 65px;\n  background-image: linear-gradient(to right, #9cb5e3, #5b5ba4);\n  color: #fafafa;\n  font-weight: 900;\n  padding-left: 4em;\n  padding-right: 2em; }\n  .navbar .text {\n    font-size: 1.3em; }\n  .navbar .text-button {\n    color: rgba(250, 250, 250, 0.7);\n    font-size: 1.5em;\n    transition: all 0.2s ease; }\n  .navbar .text-button:hover {\n    cursor: pointer;\n    color: #fafafa;\n    transition: all 0.2s ease; }\n  .navbar mat-icon {\n    font-size: 1.4em;\n    padding-bottom: 0.2em;\n    padding-right: 0.6em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/go-back-to-timeline-bar/go-back-to-timeline-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoBackToTimelineBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoBackToTimelineBarComponent = (function () {
    function GoBackToTimelineBarComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    GoBackToTimelineBarComponent.prototype.ngOnInit = function () {
    };
    GoBackToTimelineBarComponent.prototype.redirectToTimeline = function () {
        if (this.authService.isLoggedIn) {
            this.router.navigate(['/timeline']);
        }
        else {
            this.router.navigate(['/']);
        }
    };
    GoBackToTimelineBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-go-back-to-timeline-bar',
            template: __webpack_require__("../../../../../src/app/ui-components/go-back-to-timeline-bar/go-back-to-timeline-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui-components/go-back-to-timeline-bar/go-back-to-timeline-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]])
    ], GoBackToTimelineBarComponent);
    return GoBackToTimelineBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ui-components/is-visible.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsVisibleDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IsVisibleDirective = (function () {
    function IsVisibleDirective(el) {
        this.becameVisible = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.oldIsVisible = false;
        this.isVisible = false;
        this.el = el;
    }
    IsVisibleDirective.prototype.isElementInViewport = function (el) {
        var rect = this.el.nativeElement.getBoundingClientRect();
        return (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth));
    };
    IsVisibleDirective.prototype.checkVisibility = function () {
        this.oldIsVisible = this.isVisible;
        this.isVisible = this.isElementInViewport(this.el);
        if (this.isVisible && !this.oldIsVisible) {
            this.becameVisible.emit(this.isVisible);
        }
    };
    // TODO: throttle shits a bit
    IsVisibleDirective.prototype.onScroll = function () {
        this.checkVisibility();
    };
    IsVisibleDirective.prototype.onResize = function () {
        this.checkVisibility();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], IsVisibleDirective.prototype, "becameVisible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], IsVisibleDirective.prototype, "onScroll", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], IsVisibleDirective.prototype, "onResize", null);
    IsVisibleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appIsVisible]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], IsVisibleDirective);
    return IsVisibleDirective;
}());



/***/ }),

/***/ "../../../../../src/app/ui-components/navbar-title/navbar-title.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Fixed height -->\n<div fxLayout=\"column\" class=\"navbar\">\n  <div fxFlex=\"65px\" fxLayout=\"row\" fxLayoutAlign=\"center stretch\" [routerLink]=\"['/']\" class=\"tm-clickable\">\n    <div fxFlex=\"50px\" class=\"square-logo-mask\"></div>\n    <div fxFlex=\"20px\"></div>\n    <div fxFlex=\"200px\" class=\"title-photo-navbar\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/navbar-title/navbar-title.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-toolbar {\n  background-color: transparent;\n  background: transparent; }\n\n.text-button {\n  color: rgba(250, 250, 250, 0.7);\n  font-size: 20px;\n  transition: all 0.2s ease; }\n\n.text-button:hover {\n  cursor: pointer;\n  color: #fafafa;\n  transition: all 0.2s ease; }\n\nbutton {\n  background: transparent; }\n\nspan {\n  font-weight: 900; }\n\n.navbar {\n  background-image: linear-gradient(to right, #9cb5e3, #5b5ba4);\n  color: #fafafa;\n  font-weight: 900; }\n\n.square-logo-mask {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/square_logo_mask.png") + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 80px 80px; }\n\n.title-photo-navbar {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/title.png") + ");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: -20px 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/navbar-title/navbar-title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarTitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarTitleComponent = (function () {
    function NavbarTitleComponent() {
    }
    NavbarTitleComponent.prototype.ngOnInit = function () {
    };
    NavbarTitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar-title',
            template: __webpack_require__("../../../../../src/app/ui-components/navbar-title/navbar-title.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui-components/navbar-title/navbar-title.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarTitleComponent);
    return NavbarTitleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ui-components/observable-data-hander/observable-data-handler.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- Fill parent container -->\n<div fxLayout=\"column\" fxLayoutAlign=\"stretch stretch\">\n\n  <div fxFlex [ngSwitch]=\"subscriptionStatus\">\n\n    <!-- idle -->\n    <div fxFlexFill *ngSwitchCase=\"0\" class=\"tm-text-centered\">\n      IDLE\n    </div>\n\n    <!-- loading -->\n    <div fxFlexFill *ngSwitchCase=\"1\" class=\"tm-text-centered gray-text\">\n      LOADING\n    </div>\n\n    <!-- success: empty div -->\n    <div fxFlex=\"0px\" *ngSwitchCase=\"2\">\n    </div>\n\n    <!-- failure -->\n    <div fxFlexFill *ngSwitchCase=\"3\">\n      <!-- Horizontally centered -->\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <!-- same width as history list, so same fxFlex properties -->\n        <div fxFlex=\"60%\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n          <h2 fxFlex class=\"tm-text-centered big-text gray-text\">OOPS, an error occured</h2>\n          <p fxFlex class=\"tm-text-centered\">Sorry about that, our developer team has been notified to fix the problem.<br>\n          {{error}}</p>\n          <div fxFlex=\"130px\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n            <div fxFlex=\"200px\" (click)=\"retry()\" class=\"tm-gray-button\">TRY AGAIN</div>\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/observable-data-hander/observable-data-handler.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gray-text {\n  color: #505050; }\n\n.big-text {\n  font-size: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/observable-data-hander/observable-data-handler.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObservableDataHandlerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_request_status_enum__ = __webpack_require__("../../../../../src/app/shared/request-status.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Handles idle - loading - failure cases of an observable & display corresponding UI for it
// Improvement idea : start-idle state controled by @Input(), could be the equivalent of a "see more" button
// COuld even be controlled by parent
/*
 Example usage :
 <!--
 <app-request-status-display [requestStatus]="listeningHistoryRequestStatus" (retryRequest)="retry()"></app-request-status-display>
 <app-music-list fxFlex [musics]="listeningHistory"></app-music-list>
 -->
 */
var ObservableDataHandlerComponent = (function () {
    function ObservableDataHandlerComponent() {
        this.dataSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.subscriptionStatus = __WEBPACK_IMPORTED_MODULE_2__shared_request_status_enum__["a" /* RequestStatus */].IDLE;
    }
    Object.defineProperty(ObservableDataHandlerComponent.prototype, "observableData", {
        get: function () {
            return this.dataSubject;
        },
        enumerable: true,
        configurable: true
    });
    ObservableDataHandlerComponent.prototype.ngOnInit = function () {
        this.initSubscription();
    };
    ObservableDataHandlerComponent.prototype.initSubscription = function () {
        var _this = this;
        this.subscriptionStatus = __WEBPACK_IMPORTED_MODULE_2__shared_request_status_enum__["a" /* RequestStatus */].LOADING;
        this.subscription = this.observable.subscribe(function (data) {
            _this.dataSubject.next(data);
            _this.subscriptionStatus = __WEBPACK_IMPORTED_MODULE_2__shared_request_status_enum__["a" /* RequestStatus */].SUCCESS;
        }, function (error) {
            _this.error = error;
            _this.subscriptionStatus = __WEBPACK_IMPORTED_MODULE_2__shared_request_status_enum__["a" /* RequestStatus */].FAILURE;
        });
    };
    ObservableDataHandlerComponent.prototype.retry = function () {
        this.subscription.unsubscribe();
        this.subscriptionStatus = __WEBPACK_IMPORTED_MODULE_2__shared_request_status_enum__["a" /* RequestStatus */].IDLE;
        this.initSubscription();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"])
    ], ObservableDataHandlerComponent.prototype, "observable", void 0);
    ObservableDataHandlerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-observable-content',
            template: __webpack_require__("../../../../../src/app/ui-components/observable-data-hander/observable-data-handler.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui-components/observable-data-hander/observable-data-handler.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ObservableDataHandlerComponent);
    return ObservableDataHandlerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ui-components/request-status-display/request-status-display.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- Fill parent container -->\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"\">\n\n  <div fxFlex [ngSwitch]=\"requestStatus\" class=\"\">\n\n    <!-- idle -->\n    <div fxFlexFill *ngSwitchCase=\"0\">\n      <button mat-button (click)=\"try()\">{{idleButtonTitle}}</button>\n    </div>\n\n    <!-- loading -->\n    <div fxFlexFill *ngSwitchCase=\"1\">\n      <mat-spinner></mat-spinner>\n    </div>\n\n    <!-- success: empty div -->\n    <div fxFlex *ngSwitchCase=\"2\">\n    </div>\n\n    <!-- failure -->\n    <div fxFlexFill *ngSwitchCase=\"3\">\n\n      <!-- Horizontally centered -->\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <!-- same width as history list, so same fxFlex properties -->\n        <div fxFlex=\"90%\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n          <h2 fxFlex=\"50%\" class=\"tm-text-centered title\">OOPS, an error occured</h2>\n          <p fxFlex=\"50%\" class=\"tm-text-centered\">Sorry about that, our developer team has been notified to fix the problem</p>\n          <button mat-button (click)=\"retry()\">TRY AGAIN</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/request-status-display/request-status-display.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-spinner {\n  height: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/request-status-display/request-status-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestStatusDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_request_status_enum__ = __webpack_require__("../../../../../src/app/shared/request-status.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Handles idle - loading - failure cases of an observable & display corresponding UI for it
// Improvement idea : start-idle state controled by @Input(), could be the equivalent of a "see more" button
// COuld even be controlled by parent
/*
 Example usage :
 <!--
 <app-request-status-display [requestStatus]="listeningHistoryRequestStatus" (retryRequest)="retry()"></app-request-status-display>
 <app-music-list fxFlex [musics]="listeningHistory"></app-music-list>
 -->
 */
var RequestStatusDisplayComponent = (function () {
    function RequestStatusDisplayComponent() {
        this.idleButtonTitle = 'LOAD';
        this.retryRequest = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.tryRequest = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    RequestStatusDisplayComponent.prototype.ngOnInit = function () {
    };
    RequestStatusDisplayComponent.prototype.retry = function () {
        this.retryRequest.emit();
    };
    RequestStatusDisplayComponent.prototype.try = function () {
        this.tryRequest.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], RequestStatusDisplayComponent.prototype, "requestStatus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], RequestStatusDisplayComponent.prototype, "idleButtonTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], RequestStatusDisplayComponent.prototype, "retryRequest", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], RequestStatusDisplayComponent.prototype, "tryRequest", void 0);
    RequestStatusDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-request-status-display',
            template: __webpack_require__("../../../../../src/app/ui-components/request-status-display/request-status-display.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui-components/request-status-display/request-status-display.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RequestStatusDisplayComponent);
    return RequestStatusDisplayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ui-components/reverse-pipe/reverse.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReversePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReversePipe = (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (values) {
        if (values) {
            return values.reverse();
        }
    };
    ReversePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'reverse',
            pure: false
        })
    ], ReversePipe);
    return ReversePipe;
}());



/***/ }),

/***/ "../../../../../src/app/ui-components/ui-components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__go_back_to_timeline_bar_go_back_to_timeline_bar_component__ = __webpack_require__("../../../../../src/app/ui-components/go-back-to-timeline-bar/go-back-to-timeline-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__observable_data_hander_observable_data_handler_component__ = __webpack_require__("../../../../../src/app/ui-components/observable-data-hander/observable-data-handler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__request_status_display_request_status_display_component__ = __webpack_require__("../../../../../src/app/ui-components/request-status-display/request-status-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_simple_view_ui_simple_view_component__ = __webpack_require__("../../../../../src/app/ui-components/ui-simple-view/ui-simple-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("../../../../../src/app/ui-components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navbar_title_navbar_title_component__ = __webpack_require__("../../../../../src/app/ui-components/navbar-title/navbar-title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reverse_pipe_reverse_pipe__ = __webpack_require__("../../../../../src/app/ui-components/reverse-pipe/reverse.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__concat_streams_concat_streams_pipe__ = __webpack_require__("../../../../../src/app/ui-components/concat-streams/concat-streams.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__is_visible_directive__ = __webpack_require__("../../../../../src/app/ui-components/is-visible.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ui_title_ui_title_component__ = __webpack_require__("../../../../../src/app/ui-components/ui-title/ui-title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ui_dropdown_menu_ui_dropdown_menu_component__ = __webpack_require__("../../../../../src/app/ui-components/ui-dropdown-menu/ui-dropdown-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ui_full_page_form_container_ui_full_page_form_container_component__ = __webpack_require__("../../../../../src/app/ui-components/ui-full-page-form-container/ui-full-page-form-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ui_full_page_container_ui_full_page_container_component__ = __webpack_require__("../../../../../src/app/ui-components/ui-full-page-container/ui-full-page-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ui_responsive_middle_column_ui_responsive_middle_column_component__ = __webpack_require__("../../../../../src/app/ui-components/ui-responsive-middle-column/ui-responsive-middle-column.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var UiComponentsModule = (function () {
    function UiComponentsModule() {
    }
    UiComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["k" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["g" /* MatIconModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__go_back_to_timeline_bar_go_back_to_timeline_bar_component__["a" /* GoBackToTimelineBarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__observable_data_hander_observable_data_handler_component__["a" /* ObservableDataHandlerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__request_status_display_request_status_display_component__["a" /* RequestStatusDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_6__ui_simple_view_ui_simple_view_component__["a" /* UiSimpleViewComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__navbar_title_navbar_title_component__["a" /* NavbarTitleComponent */],
                __WEBPACK_IMPORTED_MODULE_10__reverse_pipe_reverse_pipe__["a" /* ReversePipe */],
                __WEBPACK_IMPORTED_MODULE_11__concat_streams_concat_streams_pipe__["a" /* ConcatStreamsPipe */],
                __WEBPACK_IMPORTED_MODULE_13__is_visible_directive__["a" /* IsVisibleDirective */],
                __WEBPACK_IMPORTED_MODULE_14__ui_title_ui_title_component__["a" /* UiTitleComponent */],
                __WEBPACK_IMPORTED_MODULE_15__ui_dropdown_menu_ui_dropdown_menu_component__["a" /* UiDropdownMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_16__ui_full_page_form_container_ui_full_page_form_container_component__["a" /* UiFullPageFormContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_17__ui_full_page_container_ui_full_page_container_component__["a" /* UiFullPageContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_18__ui_responsive_middle_column_ui_responsive_middle_column_component__["a" /* UiResponsiveMiddleColumnComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__go_back_to_timeline_bar_go_back_to_timeline_bar_component__["a" /* GoBackToTimelineBarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__observable_data_hander_observable_data_handler_component__["a" /* ObservableDataHandlerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__request_status_display_request_status_display_component__["a" /* RequestStatusDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_6__ui_simple_view_ui_simple_view_component__["a" /* UiSimpleViewComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__navbar_title_navbar_title_component__["a" /* NavbarTitleComponent */],
                __WEBPACK_IMPORTED_MODULE_10__reverse_pipe_reverse_pipe__["a" /* ReversePipe */],
                __WEBPACK_IMPORTED_MODULE_11__concat_streams_concat_streams_pipe__["a" /* ConcatStreamsPipe */],
                __WEBPACK_IMPORTED_MODULE_13__is_visible_directive__["a" /* IsVisibleDirective */],
                __WEBPACK_IMPORTED_MODULE_14__ui_title_ui_title_component__["a" /* UiTitleComponent */],
                __WEBPACK_IMPORTED_MODULE_16__ui_full_page_form_container_ui_full_page_form_container_component__["a" /* UiFullPageFormContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_17__ui_full_page_container_ui_full_page_container_component__["a" /* UiFullPageContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_18__ui_responsive_middle_column_ui_responsive_middle_column_component__["a" /* UiResponsiveMiddleColumnComponent */]
            ]
        })
    ], UiComponentsModule);
    return UiComponentsModule;
}());



/***/ }),

/***/ "../../../../../src/app/ui-components/ui-dropdown-menu/ui-dropdown-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div #dropdownButton (click)=\"dropdownButtonTrigger()\">\n  <button  mat-button>\n    MORE\n  </button>\n</div>\n<!-- Container for dropdown popup -->\n<div #dropdownMenu [fxShow]=\"showDropdown\" class=\"button-navbar-dropdown\">\n  <!-- Second container for dropdown popup -->\n  <div fxFlex class=\"dropdown-popup\" fxLayout=\"column\">\n    <div *ngFor=\"let element of elements ; let i = index\" fxFlex=\"50px\" (click)=\"onDropdownButtonClick(1)\" class=\"dropdown-button\">\n      {{element}}\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/ui-dropdown-menu/ui-dropdown-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span {\n  font-weight: 900; }\n\nmat-toolbar {\n  background-color: transparent;\n  background: transparent; }\n\nbutton {\n  background: transparent; }\n\n.button-navbar-dropdown {\n  position: relative; }\n\n.dropdown-popup {\n  position: absolute;\n  top: 5px;\n  right: 0px;\n  width: 150px;\n  border-width: 1px;\n  border-color: #e3e3e3;\n  border-style: solid;\n  cursor: pointer;\n  color: #1e1e1e; }\n\n.button-dropdown:hover {\n  background-color: #d2d2d2; }\n\n.dropdown-button {\n  background-color: #fafafa;\n  font-size: 14px;\n  font-weight: 500;\n  text-align: center;\n  /* must be the same as container height */\n  line-height: 50px; }\n\n.dropdown-button:hover {\n  background-color: #d2d2d2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/ui-dropdown-menu/ui-dropdown-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiDropdownMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UiDropdownMenuComponent = (function () {
    function UiDropdownMenuComponent() {
        this.elements = [];
        this.dropdownButtonClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.showDropdown = false;
    }
    UiDropdownMenuComponent.prototype.ngOnInit = function () {
    };
    UiDropdownMenuComponent.prototype.dropdownButtonTrigger = function () {
        this.showDropdown = !this.showDropdown;
    };
    UiDropdownMenuComponent.prototype.onDocumentClick = function (e) {
        if (!((this.dropdownMenu.nativeElement).contains(e.target) || (this.dropdownButton.nativeElement).contains(e.target)) && this.showDropdown) {
            this.closeDropdown();
        }
    };
    UiDropdownMenuComponent.prototype.closeDropdown = function () {
        this.showDropdown = false;
    };
    UiDropdownMenuComponent.prototype.onDropdownButtonClick = function (index) {
        console.log('dropdown click on' + index);
        this.dropdownButtonClick.emit(index);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('dropdownMenu'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], UiDropdownMenuComponent.prototype, "dropdownMenu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('dropdownButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], UiDropdownMenuComponent.prototype, "dropdownButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], UiDropdownMenuComponent.prototype, "elements", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], UiDropdownMenuComponent.prototype, "dropdownButtonClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], UiDropdownMenuComponent.prototype, "onDocumentClick", null);
    UiDropdownMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ui-dropdown-menu',
            template: __webpack_require__("../../../../../src/app/ui-components/ui-dropdown-menu/ui-dropdown-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui-components/ui-dropdown-menu/ui-dropdown-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UiDropdownMenuComponent);
    return UiDropdownMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ui-components/ui-full-page-container/ui-full-page-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-page\">\n<ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/ui-full-page-container/ui-full-page-container.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-page {\n  min-height: 100vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/ui-full-page-container/ui-full-page-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiFullPageContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UiFullPageContainerComponent = (function () {
    function UiFullPageContainerComponent() {
    }
    UiFullPageContainerComponent.prototype.ngOnInit = function () {
    };
    UiFullPageContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ui-full-page-container',
            template: __webpack_require__("../../../../../src/app/ui-components/ui-full-page-container/ui-full-page-container.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui-components/ui-full-page-container/ui-full-page-container.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UiFullPageContainerComponent);
    return UiFullPageContainerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ui-components/ui-full-page-form-container/ui-full-page-form-container.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Colored background, and filled height -->\n<div class=\"form-page\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <!-- Responsive positionment of form -->\n  <div fxFlex.lt-sm=\"100%\" fxFlex.gt-xs=\"35em\" class=\"form\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\n    <ng-content fxFlex></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/ui-full-page-form-container/ui-full-page-form-container.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-page {\n  min-height: 100vh;\n  background-image: linear-gradient(to bottom, #e3e3e3, #d2d2d2); }\n\n.form {\n  background-color: #fafafa;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #d2d2d2;\n  padding-left: 4em;\n  padding-right: 4em; }\n  @media (max-width: 599px) {\n    .form {\n      padding-left: 1em;\n      padding-right: 1em; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/ui-full-page-form-container/ui-full-page-form-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiFullPageFormContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UiFullPageFormContainerComponent = (function () {
    function UiFullPageFormContainerComponent() {
    }
    UiFullPageFormContainerComponent.prototype.ngOnInit = function () {
    };
    UiFullPageFormContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ui-full-page-form-container',
            template: __webpack_require__("../../../../../src/app/ui-components/ui-full-page-form-container/ui-full-page-form-container.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui-components/ui-full-page-form-container/ui-full-page-form-container.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UiFullPageFormContainerComponent);
    return UiFullPageFormContainerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ui-components/ui-responsive-middle-column/ui-responsive-middle-column.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Responsive width -->\n<!-- Music list - width control container -->\n<div fxLayout=\"row\" fxLayoutAlign=\"center start\">\n  <div fxFlex.xs=\"100%\" fxFlex.sm=\"100%\" fxFlex.md=\"950px\" fxFlex.lg=\"950px\" fxFlex.xl=\"1000px\" fxLayout=\"column\" fxLayoutAlign=\"center stretch\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/ui-responsive-middle-column/ui-responsive-middle-column.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/ui-responsive-middle-column/ui-responsive-middle-column.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiResponsiveMiddleColumnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UiResponsiveMiddleColumnComponent = (function () {
    function UiResponsiveMiddleColumnComponent() {
    }
    UiResponsiveMiddleColumnComponent.prototype.ngOnInit = function () {
    };
    UiResponsiveMiddleColumnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ui-responsive-middle-column',
            template: __webpack_require__("../../../../../src/app/ui-components/ui-responsive-middle-column/ui-responsive-middle-column.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui-components/ui-responsive-middle-column/ui-responsive-middle-column.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UiResponsiveMiddleColumnComponent);
    return UiResponsiveMiddleColumnComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ui-components/ui-simple-view/ui-simple-view.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- width margins -->\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"container\">\n  <!-- height margins -->\n  <div fxFlex=\"5%\"></div>\n  <div fxFlex=\"90%\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div fxFlex=\"80%\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n\n      <div fxFlex class=\"title\">{{title}}</div>\n      <div fxFlex class=\"message\">{{message}}</div>\n      <div fxFlex *ngIf=\"button\" (click)=\"sendButtonClickEvent()\" class=\"tm-gray-button\">\n        {{buttonMessage}}\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/ui-simple-view/ui-simple-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  color: #1e1e1e; }\n\n.title {\n  font-size: 2em;\n  color: #323232;\n  text-align: center; }\n\n.message {\n  font-size: 1.4em;\n  color: #1e1e1e;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/ui-simple-view/ui-simple-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiSimpleViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UiSimpleViewComponent = (function () {
    function UiSimpleViewComponent() {
        this.title = '';
        this.message = '';
        this.button = false;
        this.buttonMessage = 'BUTTON';
        this.buttonClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    UiSimpleViewComponent.prototype.ngOnInit = function () {
    };
    UiSimpleViewComponent.prototype.sendButtonClickEvent = function () {
        this.buttonClick.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], UiSimpleViewComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], UiSimpleViewComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], UiSimpleViewComponent.prototype, "button", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], UiSimpleViewComponent.prototype, "buttonMessage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], UiSimpleViewComponent.prototype, "buttonClick", void 0);
    UiSimpleViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ui-simple-view',
            template: __webpack_require__("../../../../../src/app/ui-components/ui-simple-view/ui-simple-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui-components/ui-simple-view/ui-simple-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UiSimpleViewComponent);
    return UiSimpleViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ui-components/ui-title/ui-title.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Horizontally centered -->\n<div class=\"title\">\n  <h2 [ngStyle]=\"{ 'font-size': fontSize+'em', 'text-align': alignment, 'margin-bottom': fontSize/2+'em'}\">{{title}}</h2>\n  <hr/>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/ui-title/ui-title.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  padding-top: 2em;\n  padding-bottom: 2em;\n  text-transform: uppercase;\n  color: #1e1e1e; }\n  .title h2 {\n    font-weight: 200;\n    padding-left: 1em;\n    padding-right: 1em; }\n  .title .separator {\n    background-color: #cecece; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/ui-title/ui-title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiTitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UiTitleComponent = (function () {
    function UiTitleComponent() {
        this.title = 'TITLE';
        this.fontSize = 2;
        this.alignment = 'center';
    }
    UiTitleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], UiTitleComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], UiTitleComponent.prototype, "fontSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], UiTitleComponent.prototype, "alignment", void 0);
    UiTitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ui-title',
            template: __webpack_require__("../../../../../src/app/ui-components/ui-title/ui-title.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui-components/ui-title/ui-title.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UiTitleComponent);
    return UiTitleComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/gradient36LR.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gradient36LR.37592f44646f66aa7cae.png";

/***/ }),

/***/ "../../../../../src/assets/line.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "line.d0d2ab7df1a825ab191a.png";

/***/ }),

/***/ "../../../../../src/assets/profile_marc.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "profile_marc.f80512f2029e05600469.jpg";

/***/ }),

/***/ "../../../../../src/assets/profile_max.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "profile_max.2ef1d951fda342520248.jpg";

/***/ }),

/***/ "../../../../../src/assets/square_logo_mask.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "square_logo_mask.e87ffc307a343a07f19f.png";

/***/ }),

/***/ "../../../../../src/assets/title.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "title.437f41ef1d6c3dfbcee2.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    servicesUrls: {
        accountService: 'http://localhost:8083/',
        sessionService: 'https://localhost:8082/',
        streamService: 'http://localhost:3000/',
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map