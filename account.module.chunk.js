webpackJsonp(["account.module"],{

/***/ "../../../../../src/app/account/account-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/account/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/account/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mail_validation_mail_validation_component__ = __webpack_require__("../../../../../src/app/account/mail-validation/mail-validation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__check_your_mail_check_your_mail_component__ = __webpack_require__("../../../../../src/app/account/check-your-mail/check-your-mail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AccountRoutes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'mail-validation/:mailValidationToken',
        component: __WEBPACK_IMPORTED_MODULE_4__mail_validation_mail_validation_component__["a" /* MailValidationComponent */]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up_component__["a" /* SignUpComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'checkmail',
        component: __WEBPACK_IMPORTED_MODULE_5__check_your_mail_check_your_mail_component__["a" /* CheckYourMailComponent */]
    }
];
var AccountRoutingModule = (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(AccountRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]
            ]
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/account/account.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_routing_module__ = __webpack_require__("../../../../../src/app/account/account-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/account/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/account/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mail_validation_mail_validation_component__ = __webpack_require__("../../../../../src/app/account/mail-validation/mail-validation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__account_service__ = __webpack_require__("../../../../../src/app/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ui_components_ui_components_module__ = __webpack_require__("../../../../../src/app/ui-components/ui-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__check_your_mail_check_your_mail_component__ = __webpack_require__("../../../../../src/app/account/check-your-mail/check-your-mail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AccountModule = (function () {
    function AccountModule(authService, router) {
        this.authService = authService;
        this.router = router;
        // No access to account module pages if you're already logged in
        if (authService.isLoggedIn) {
            this.router.navigate(['/timeline']);
        }
    }
    AccountModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__account_routing_module__["a" /* AccountRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_11__ui_components_ui_components_module__["a" /* UiComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_9__mail_validation_mail_validation_component__["a" /* MailValidationComponent */], __WEBPACK_IMPORTED_MODULE_7__sign_up_sign_up_component__["a" /* SignUpComponent */], __WEBPACK_IMPORTED_MODULE_14__check_your_mail_check_your_mail_component__["a" /* CheckYourMailComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_10__account_service__["a" /* AccountService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12__core_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_13__angular_router__["d" /* Router */]])
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "../../../../../src/app/account/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_ErrorObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/ErrorObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
        this.HEADER = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }) };
    }
    AccountService.prototype.signup = function (subscriptionRequest) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].servicesUrls.accountService + 'account/', subscriptionRequest, this.HEADER)
            .map(function (response) {
            console.log(response.json());
        })
            .catch(this.handleError);
    };
    AccountService.prototype.validateMail = function (validateMailRequest) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].servicesUrls.accountService + 'account/validation', validateMailRequest, this.HEADER)
            .catch(this.handleError);
    };
    AccountService.prototype.handleError = function (error) {
        // TODO use a remote logging infrastructure in the futur
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */].create(errMsg);
    };
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "../../../../../src/app/account/api/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sign_request__ = __webpack_require__("../../../../../src/app/account/api/sign-request.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sign_request__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subscription_request__ = __webpack_require__("../../../../../src/app/account/api/subscription-request.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__subscription_request__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validate_mail_request__ = __webpack_require__("../../../../../src/app/account/api/validate-mail-request.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__validate_mail_request__["a"]; });





/***/ }),

/***/ "../../../../../src/app/account/api/sign-request.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignRequest; });
var SignRequest = (function () {
    function SignRequest(email, password) {
        this.email = email;
        this.password = password;
    }
    return SignRequest;
}());



/***/ }),

/***/ "../../../../../src/app/account/api/subscription-request.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionRequest; });
var SubscriptionRequest = (function () {
    function SubscriptionRequest(email, password, dateOfBirth) {
        if (email === void 0) { email = ''; }
        if (password === void 0) { password = ''; }
        if (dateOfBirth === void 0) { dateOfBirth = void 0; }
        this.email = email;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
    }
    return SubscriptionRequest;
}());



/***/ }),

/***/ "../../../../../src/app/account/api/validate-mail-request.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateMailRequest; });
var ValidateMailRequest = (function () {
    function ValidateMailRequest(validationToken) {
        this.validationToken = validationToken;
    }
    return ValidateMailRequest;
}());



/***/ }),

/***/ "../../../../../src/app/account/check-your-mail/check-your-mail.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ui-full-page-form-container>\n  <div class=\"message\">\n    We sent you an email to validate your account<br>\n    Please check your mailbox\n  </div>\n</app-ui-full-page-form-container>\n"

/***/ }),

/***/ "../../../../../src/app/account/check-your-mail/check-your-mail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".message {\n  text-align: center;\n  font-size: 1.3em;\n  padding: 2em 2em 2em 2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/check-your-mail/check-your-mail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckYourMailComponent; });
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

var CheckYourMailComponent = (function () {
    function CheckYourMailComponent() {
    }
    CheckYourMailComponent.prototype.ngOnInit = function () {
    };
    CheckYourMailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-check-your-mail',
            template: __webpack_require__("../../../../../src/app/account/check-your-mail/check-your-mail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/check-your-mail/check-your-mail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckYourMailComponent);
    return CheckYourMailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/account/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ui-full-page-form-container>\n\n  <div [ngSwitch]=\"formStatus\" fxLayout=\"column\" fxLayoutAlign=\"center stretch\">\n\n    <div *ngSwitchCase=\"0\" fxLayout=\"column\">\n      <div class=\"form-title\">Log In</div>\n\n      <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\" fxLayout=\"column\">\n\n        <mat-form-field>\n          <input matInput placeholder=\"Email address\" required type=\"email\" [(ngModel)]=\"model.email\" name=\"email\">\n          <mat-error>Email is required</mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput required placeholder=\"Password\" type=\"password\" [(ngModel)]=\"model.password\" name=\"password\">\n          <mat-error>Password is required</mat-error>\n        </mat-form-field>\n\n        <button fxFlex=\"100%\" mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!loginForm.form.valid\" class=\"submit-button\">Log In</button>\n\n      </form>\n\n        <div class=\"form-subtitle tm-text-centered\">\n          Don't have an account ? <a [routerLinkActive]=\"['active']\" [routerLink]=\"['/account/signup']\">Sign Up</a>\n        </div>\n\n    </div>\n\n    <!-- submitting -->\n    <div fxLayout fxLayoutAlign=\"center center\" *ngSwitchCase=\"1\">\n      <mat-spinner></mat-spinner>\n    </div>\n\n    <!-- submitted: nothing -->\n    <!-- failure -->\n    <app-ui-simple-view *ngSwitchCase=\"3\" title=\"Oops ! \" message=\"{{serverMessage}}\" [button]=\"true\" buttonMessage=\"Try Again\" (buttonClick)=\"formStatus=0\">\n    </app-ui-simple-view>\n  </div>\n\n</app-ui-full-page-form-container>\n"

/***/ }),

/***/ "../../../../../src/app/account/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tm-gradient {\n  background-image: linear-gradient(to right, #9cb5e3, #5b5ba4); }\n\n.tm-link-blue {\n  color: #7893c8;\n  text-decoration: none; }\n  .tm-link-blue:hover {\n    text-decoration: underline;\n    color: #7893c8; }\n\n.tm-text-centered {\n  text-align: center; }\n\n.tm-text-grey-mid {\n  color: #464646; }\n\n.tm-text-link:hover {\n  cursor: pointer;\n  text-decoration: underline; }\n\n.tm-text-link:focus, .tm-text-link:active {\n  outline: 0; }\n\n.tm-gray-button {\n  text-decoration: none;\n  font-size: 20px;\n  line-height: 50px;\n  text-align: center;\n  font-weight: 500;\n  color: #1e1e1e;\n  border-radius: 2px;\n  border-style: solid;\n  border-color: transparent;\n  background-color: #e3e3e3;\n  transition: all 0.2s ease; }\n  .tm-gray-button:hover {\n    cursor: pointer;\n    background-color: #f0f0f0;\n    transition: all 0.2s ease; }\n\n.tm-clickable:hover {\n  cursor: pointer; }\n\n.tm-clickable:focus, .tm-clickable:active {\n  outline: 0; }\n\n.tm-noselect {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently supported by Chrome and Opera */ }\n\n.debug-flex {\n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  background-color: #d06e6e; }\n\n.debug-flexx {\n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  background-color: #6f6fa4; }\n\n.debug-flexxx {\n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  background-color: #55b76c; }\n\n.form-title {\n  font-size: 3em;\n  color: #1e1e1e;\n  text-align: center;\n  padding-bottom: 1em;\n  padding-top: 0.5em; }\n\n.form-subtitle {\n  font-size: 1em;\n  padding-bottom: 2em;\n  padding-top: 2em;\n  color: #323232; }\n\n.submit-button {\n  margin-top: 2em;\n  margin-bottom: 2em; }\n\na {\n  font-size: 1.2em;\n  text-decoration: none;\n  color: #9cb5e3; }\n\na:hover {\n  cursor: pointer; }\n\nmat-spinner {\n  height: 3em; }\n\nmat-form-field {\n  min-width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__("../../../../../src/app/account/api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__api__["a" /* SignRequest */](undefined, undefined);
        this.formStatus = __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* RequestStatus */].IDLE;
        this.serverMessage = '';
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formStatus = __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* RequestStatus */].LOADING;
        this.authService.login(this.model).subscribe(function (success) {
            _this.serverMessage = JSON.stringify(success) + ' you will now be redirected to your account..';
            _this.formStatus = __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* RequestStatus */].SUCCESS;
            // Get the redirect URL from our auth service & Redirect the user
            _this.router.navigate([_this.authService.redirectUrl]);
        }, function (error) {
            _this.serverMessage = error.message;
            _this.formStatus = __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* RequestStatus */].FAILURE;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/account/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/styles.scss"), __webpack_require__("../../../../../src/app/account/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__core_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/account/mail-validation/mail-validation.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ui-full-page-form-container>\n\n  <div fxFlex class=\"title\">Mail Validation</div>\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" [ngSwitch]=\"serverResponseStatus\" class=\"padding\">\n\n    <div *ngSwitchCase=\"1\">\n      <mat-spinner></mat-spinner>\n    </div>\n\n    <div *ngSwitchCase=\"2\" fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"2em\">\n      <div class=\"text\">Your email has been confirmed !</div>\n      <button mat-raised-button color=\"primary\" (click)=\"redirectToTimeline()\">GO TO TIMELINE</button>\n    </div>\n\n    <div *ngSwitchCase=\"3\" class=\"error text\">This link is invalid</div>\n\n  </div>\n\n</app-ui-full-page-form-container>\n"

/***/ }),

/***/ "../../../../../src/app/account/mail-validation/mail-validation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tm-gradient {\n  background-image: linear-gradient(to right, #9cb5e3, #5b5ba4); }\n\n.tm-link-blue {\n  color: #7893c8;\n  text-decoration: none; }\n  .tm-link-blue:hover {\n    text-decoration: underline;\n    color: #7893c8; }\n\n.tm-text-centered {\n  text-align: center; }\n\n.tm-text-grey-mid {\n  color: #464646; }\n\n.tm-text-link:hover {\n  cursor: pointer;\n  text-decoration: underline; }\n\n.tm-text-link:focus, .tm-text-link:active {\n  outline: 0; }\n\n.tm-gray-button {\n  text-decoration: none;\n  font-size: 20px;\n  line-height: 50px;\n  text-align: center;\n  font-weight: 500;\n  color: #1e1e1e;\n  border-radius: 2px;\n  border-style: solid;\n  border-color: transparent;\n  background-color: #e3e3e3;\n  transition: all 0.2s ease; }\n  .tm-gray-button:hover {\n    cursor: pointer;\n    background-color: #f0f0f0;\n    transition: all 0.2s ease; }\n\n.tm-clickable:hover {\n  cursor: pointer; }\n\n.tm-clickable:focus, .tm-clickable:active {\n  outline: 0; }\n\n.tm-noselect {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently supported by Chrome and Opera */ }\n\n.debug-flex {\n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  background-color: #d06e6e; }\n\n.debug-flexx {\n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  background-color: #6f6fa4; }\n\n.debug-flexxx {\n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  background-color: #55b76c; }\n\n.form-title {\n  font-size: 3em;\n  color: #1e1e1e;\n  text-align: center;\n  padding-bottom: 1em;\n  padding-top: 0.5em; }\n\n.form-subtitle {\n  font-size: 1em;\n  padding-bottom: 2em;\n  padding-top: 2em;\n  color: #323232; }\n\n.submit-button {\n  margin-top: 2em;\n  margin-bottom: 2em; }\n\na {\n  font-size: 1.2em;\n  text-decoration: none;\n  color: #9cb5e3; }\n\na:hover {\n  cursor: pointer; }\n\nmat-spinner {\n  height: 3em; }\n\n.text {\n  font-size: 1.5em;\n  text-align: center; }\n\n.error {\n  color: darkred;\n  font-weight: 600; }\n\n.title {\n  padding-top: 1.5em;\n  font-size: 1.5em;\n  text-align: center; }\n\n.padding {\n  padding-bottom: 3em;\n  padding-top: 3em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/mail-validation/mail-validation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailValidationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_service__ = __webpack_require__("../../../../../src/app/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api__ = __webpack_require__("../../../../../src/app/account/api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// Example route : http://localhost:4200/account/mail-validation/523b9d09-6508-4a47-81c7-eedf9650c86e
var MailValidationComponent = (function () {
    function MailValidationComponent(activatedRoute, accountService, router) {
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.router = router;
        this.serverResponseStatus = __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* RequestStatus */].LOADING;
        this.serverResponseMessage = '';
    }
    MailValidationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .switchMap(function (params) {
            _this.serverResponseStatus = __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* RequestStatus */].LOADING;
            return _this.accountService.validateMail(new __WEBPACK_IMPORTED_MODULE_4__api__["c" /* ValidateMailRequest */](params['mailValidationToken']));
        })
            .subscribe(function () {
            _this.serverResponseStatus = __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* RequestStatus */].SUCCESS;
            _this.serverResponseMessage = 'Your email account has been confirmed, you can now use Timeline !';
        }, function (error) {
            _this.serverResponseStatus = __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* RequestStatus */].FAILURE;
            _this.serverResponseMessage = error;
        });
    };
    MailValidationComponent.prototype.redirectToTimeline = function () {
        this.router.navigate(['/timeline']);
    };
    MailValidationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mail-validation',
            template: __webpack_require__("../../../../../src/app/account/mail-validation/mail-validation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/mail-validation/mail-validation.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], MailValidationComponent);
    return MailValidationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/account/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ui-full-page-form-container>\n\n  <div [ngSwitch]=\"formStatus\" fxLayout=\"column\" fxLayoutAlign=\"center stretch\">\n\n    <!-- idle -->\n    <div *ngSwitchCase=\"0\">\n\n      <div class=\"form-title\">Join Us !</div>\n\n      <form (ngSubmit)=\"onSubmit()\" #subscribeForm=\"ngForm\" fxLayout=\"column\">\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [(ngModel)]=\"model.email\" >\n          <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n            Please enter a valid email address\n          </mat-error>\n          <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n            Email is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput required placeholder=\"Password\" type=\"password\" minlength=\"8\" [(ngModel)]=\"model.password\" name=\"password\">\n          <mat-error>Password must be at least 8 characters long</mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input matInput required [matDatepicker]=\"picker\" placeholder=\"Birth date\" [(ngModel)]=\"model.dateOfBirth\" name=\"birthdate\" [max]=\"today\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        </mat-form-field>\n        <mat-datepicker #picker></mat-datepicker>\n\n        <div class=\"form-subsitle terms tm-text-centered\">\n          By subscribing to Timeline, you agree to our <a [routerLinkActive]=\"['active']\" [routerLink]=\"['/tos']\">Terms of Services</a>\n        </div>\n\n        <button fxFlex=\"100%\" mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!subscribeForm.form.valid || !emailFormControl.valid\" class=\"submit-button\">Submit</button>\n\n      </form>\n\n      <div class=\"form-subtitle tm-text-centered\">\n        Have an account ? <a [routerLinkActive]=\"['active']\" [routerLink]=\"['/account/login']\">Log In</a>\n      </div>\n    </div>\n\n    <!-- submitting -->\n    <div fxLayout fxLayoutAlign=\"center center\" *ngSwitchCase=\"1\">\n      <mat-spinner></mat-spinner>\n    </div>\n\n    <!-- submitted -->\n    <div *ngSwitchCase=\"2\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n      <div class=\"small-title\">You're almost there !</div>\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"padding\">\n        <mat-icon class=\"email-icon\">email</mat-icon>\n        <div class=\"text\">Please check your mailbox to confirm your subscription</div>\n      </div>\n    </div>\n\n    <!-- failure -->\n    <app-ui-simple-view *ngSwitchCase=\"3\" title=\"Oops ! \" message=\"{{serverMessage}}\" [button]=\"true\" buttonMessage=\"Try Again\" (buttonClick)=\"formStatus=0\">\n    </app-ui-simple-view>\n\n  </div>\n\n</app-ui-full-page-form-container>\n"

/***/ }),

/***/ "../../../../../src/app/account/sign-up/sign-up.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tm-gradient {\n  background-image: linear-gradient(to right, #9cb5e3, #5b5ba4); }\n\n.tm-link-blue {\n  color: #7893c8;\n  text-decoration: none; }\n  .tm-link-blue:hover {\n    text-decoration: underline;\n    color: #7893c8; }\n\n.tm-text-centered {\n  text-align: center; }\n\n.tm-text-grey-mid {\n  color: #464646; }\n\n.tm-text-link:hover {\n  cursor: pointer;\n  text-decoration: underline; }\n\n.tm-text-link:focus, .tm-text-link:active {\n  outline: 0; }\n\n.tm-gray-button {\n  text-decoration: none;\n  font-size: 20px;\n  line-height: 50px;\n  text-align: center;\n  font-weight: 500;\n  color: #1e1e1e;\n  border-radius: 2px;\n  border-style: solid;\n  border-color: transparent;\n  background-color: #e3e3e3;\n  transition: all 0.2s ease; }\n  .tm-gray-button:hover {\n    cursor: pointer;\n    background-color: #f0f0f0;\n    transition: all 0.2s ease; }\n\n.tm-clickable:hover {\n  cursor: pointer; }\n\n.tm-clickable:focus, .tm-clickable:active {\n  outline: 0; }\n\n.tm-noselect {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently supported by Chrome and Opera */ }\n\n.debug-flex {\n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  background-color: #d06e6e; }\n\n.debug-flexx {\n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  background-color: #6f6fa4; }\n\n.debug-flexxx {\n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  background-color: #55b76c; }\n\n.form-title {\n  font-size: 3em;\n  color: #1e1e1e;\n  text-align: center;\n  padding-bottom: 1em;\n  padding-top: 0.5em; }\n\n.form-subtitle {\n  font-size: 1em;\n  padding-bottom: 2em;\n  padding-top: 2em;\n  color: #323232; }\n\n.submit-button {\n  margin-top: 2em;\n  margin-bottom: 2em; }\n\na {\n  font-size: 1.2em;\n  text-decoration: none;\n  color: #9cb5e3; }\n\na:hover {\n  cursor: pointer; }\n\nmat-spinner {\n  height: 3em; }\n\nmat-form-field {\n  min-width: 100%; }\n\n.text {\n  font-size: 1.5em;\n  text-align: center; }\n\n.small-title {\n  padding-top: 1.5em;\n  font-size: 1.5em;\n  text-align: center; }\n\n.padding {\n  padding-bottom: 3em;\n  padding-top: 3em; }\n\n.email-icon {\n  width: 4em;\n  height: 1em;\n  padding-bottom: 0.5em;\n  font-size: 4em;\n  text-align: center;\n  color: #464646; }\n\nmat-select {\n  padding-top: 1em;\n  padding-bottom: 1.5em; }\n\n.terms {\n  padding-left: 2em;\n  padding-right: 2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__("../../../../../src/app/account/api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_service__ = __webpack_require__("../../../../../src/app/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignUpComponent = (function () {
    function SignUpComponent(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__api__["b" /* SubscriptionRequest */]();
        this.formStatus = __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* RequestStatus */].IDLE;
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].email,
        ]);
        this.serverMessage = '';
        this.today = new Date();
    }
    SignUpComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formStatus = __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* RequestStatus */].LOADING;
        this.accountService.signup(this.model).subscribe(function () {
            _this.formStatus = __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* RequestStatus */].SUCCESS;
            _this.router.navigate(['/account/checkmail']);
        }, function (error) {
            _this.serverMessage = error;
            _this.formStatus = __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* RequestStatus */].FAILURE;
        });
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-up',
            template: __webpack_require__("../../../../../src/app/account/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/styles.scss"), __webpack_require__("../../../../../src/app/account/sign-up/sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/account/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tm-gradient {\n  background-image: linear-gradient(to right, #9cb5e3, #5b5ba4); }\n\n.tm-link-blue {\n  color: #7893c8;\n  text-decoration: none; }\n  .tm-link-blue:hover {\n    text-decoration: underline;\n    color: #7893c8; }\n\n.tm-text-centered {\n  text-align: center; }\n\n.tm-text-grey-mid {\n  color: #464646; }\n\n.tm-text-link:hover {\n  cursor: pointer;\n  text-decoration: underline; }\n\n.tm-text-link:focus, .tm-text-link:active {\n  outline: 0; }\n\n.tm-gray-button {\n  text-decoration: none;\n  font-size: 20px;\n  line-height: 50px;\n  text-align: center;\n  font-weight: 500;\n  color: #1e1e1e;\n  border-radius: 2px;\n  border-style: solid;\n  border-color: transparent;\n  background-color: #e3e3e3;\n  transition: all 0.2s ease; }\n  .tm-gray-button:hover {\n    cursor: pointer;\n    background-color: #f0f0f0;\n    transition: all 0.2s ease; }\n\n.tm-clickable:hover {\n  cursor: pointer; }\n\n.tm-clickable:focus, .tm-clickable:active {\n  outline: 0; }\n\n.tm-noselect {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently supported by Chrome and Opera */ }\n\n.debug-flex {\n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  background-color: #d06e6e; }\n\n.debug-flexx {\n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  background-color: #6f6fa4; }\n\n.debug-flexxx {\n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  background-color: #55b76c; }\n\n.form-title {\n  font-size: 3em;\n  color: #1e1e1e;\n  text-align: center;\n  padding-bottom: 1em;\n  padding-top: 0.5em; }\n\n.form-subtitle {\n  font-size: 1em;\n  padding-bottom: 2em;\n  padding-top: 2em;\n  color: #323232; }\n\n.submit-button {\n  margin-top: 2em;\n  margin-bottom: 2em; }\n\na {\n  font-size: 1.2em;\n  text-decoration: none;\n  color: #9cb5e3; }\n\na:hover {\n  cursor: pointer; }\n\nmat-spinner {\n  height: 3em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_status_enum__ = __webpack_require__("../../../../../src/app/shared/request-status.enum.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__request_status_enum__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_message__ = __webpack_require__("../../../../../src/app/shared/error-message.ts");
/* unused harmony namespace reexport */





/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/switchMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/operator/switchMap.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_switchMap PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.switchMap = __WEBPACK_IMPORTED_MODULE_1__operator_switchMap__["a" /* switchMap */];
//# sourceMappingURL=switchMap.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/switchMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = switchMap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/operators/switchMap.js");
/** PURE_IMPORTS_START .._operators_switchMap PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, emitting values only from the most recently projected Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link switch}.</span>
 *
 * <img src="./img/switchMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each time it observes one of these
 * inner Observables, the output Observable begins emitting the items emitted by
 * that inner Observable. When a new inner Observable is emitted, `switchMap`
 * stops emitting items from the earlier-emitted inner Observable and begins
 * emitting items from the new one. It continues to behave like this for
 * subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switch}
 * @see {@link switchMapTo}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking only the values from the most recently
 * projected inner Observable.
 * @method switchMap
 * @owner Observable
 */
function switchMap(project, resultSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_switchMap__["a" /* switchMap */])(project, resultSelector)(this);
}
//# sourceMappingURL=switchMap.js.map 


/***/ })

});
//# sourceMappingURL=account.module.chunk.js.map