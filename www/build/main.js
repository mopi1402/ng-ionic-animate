webpackJsonp([0],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_animations_animations__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, animationsProvider) {
        this.navCtrl = navCtrl;
        this.animationsProvider = animationsProvider;
        this.animation = 'bounceIn';
        /** selected animation type */
        this._animationType = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.animationType = this._animationType;
        // default select value to animate
        this._animationType.next('bounceIn');
    }
    HomePage.prototype.ionViewDidEnter = function () {
        /** retrive list of possible animations */
        this._getAnimations();
    };
    /** get list of animations from data.json */
    HomePage.prototype._getAnimations = function () {
        var _this = this;
        this.animationsProvider.getAnimations()
            .then(function (data) {
            /** set animations to the response */
            _this.animations = data;
        });
    };
    HomePage.prototype.doAnimate = function (animationType) {
        var _this = this;
        this._animationType.next('');
        setTimeout(function () {
            _this._animationType.next(animationType);
        }, 300);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/Sarah/Apps/ng-ionic-animate/src/pages/home/home.html"*/'<ion-content padding>\n  <h3 text-center>\n    Angular animations within the Ionic framework.\n  </h3>\n\n  <ion-row center>\n    <!-- Animation Selection -->\n    <ion-card color="light">\n      <ion-card-content>\n        <ion-item color="transparent">\n          <ion-select [(ngModel)]="animation" margin-right>\n            <ion-label>Select Animation</ion-label>\n            <span *ngFor="let animation of animations">\n              <p>{{animation?.type}}</p>\n              <ion-option *ngFor="let option of animation.options" [value]="option.name">{{option?.name}}</ion-option>\n            </span>\n          </ion-select>\n          <button ion-button \n            item-right \n            #animateButton\n            large color="primary" \n            (click)="doAnimate(animation)">\n              Animate\n          </button>\n          <button ion-button clear icon-only large item-right>\n            <ion-icon name="code"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </ion-row>\n\n  <!-- Text to Animate -->\n  <h1 text-center *ngIf="animationType | async" [@animationType]="animationType | async">\n    {{animation}}\n  </h1>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="primary">\n    <ion-title>By Sarah Tully. Based on the <a href="https://github.com/daneden/animate.css" ion-text color="light" target="_blank">animate.css</a> library.</ion-title>\n    <ion-buttons end>\n      <button ion-button clear>\n        View on Github\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/Sarah/Apps/ng-ionic-animate/src/pages/home/home.html"*/,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* trigger */])('animationType', [
                /** Bounce **/
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => bounceIn', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                        transition: 'opacity ease-in-out',
                        transform: 'scale3d(.3, .3, .3)',
                        opacity: 0
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ opacity: 0.4, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ opacity: 0.8, transform: 'scale3d(.9, .9, .9)', offset: 0.4 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ opacity: 1, transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'scale3d(.97, .97, .97)', offset: 0.8 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'scale3d(1, 1, 1)', offset: 1.0 })
                    ]))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => bounceInUp', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                        transition: 'opacity ease-in-out',
                        transform: 'translate3d(0, 3000px, 0)',
                        opacity: 0
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.6 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'translate3d(0, 10px, 0)', offset: 0.75 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'translate3d(0, -5px, 0)', offset: 0.9 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'translate3d(0, 0, 0)', offset: 1.0 })
                    ]))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => bounceInRight', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                        transition: 'opacity ease-in-out',
                        transform: 'translate3d(3000px, 0, 0)',
                        opacity: 0
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ opacity: 1, transform: 'translate3d(-25px, 0, 0)', offset: 0.6 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'translate3d(10px, 0, 0)', offset: 0.75 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'translate3d(-5px, 0, 0)', offset: 0.9 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'none', offset: 1.0 })
                    ]))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => bounceInDown', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                        transition: 'opacity ease-in-out',
                        transform: 'translate3d(0, -3000px, 0)',
                        opacity: 0
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ opacity: 1, transform: 'translate3d(0, 25px, 0)', offset: 0.6 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'translate3d(0, -10px, 0)', offset: 0.75 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'translate3d(0, 5px, 0)', offset: 0.9 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'translate3d(0, 0, 0)', offset: 1.0 })
                    ]))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => bounceInLeft', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                        transition: 'opacity ease-in-out',
                        transform: 'translate3d(-3000px, 0, 0)',
                        opacity: 0
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ opacity: 1, transform: 'translate3d(25px, 0, 0)', offset: 0.6 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'translate3d(-10px, 0, 0)', offset: 0.75 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'translate3d(5px, 0, 0)', offset: 0.9 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'none', offset: 1.0 })
                    ]))
                ]),
                /** Fade **/
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => fadeIn', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transition: 'opacity ease-in-out',
                        opacity: 0
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transition: 'opacity ease-in-out',
                        opacity: 1
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => fadeInUp', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transition: 'opacity ease-in-out',
                        transform: 'translate3d(0, 100%, 0)',
                        opacity: 0
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transition: 'opacity ease-in-out',
                        transform: 'none',
                        opacity: 1
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => fadeInUpBig', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transition: 'opacity ease-in-out',
                        transform: 'translate3d(0, 2000px, 0)',
                        opacity: 0
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transition: 'opacity ease-in-out',
                        transform: 'none',
                        opacity: 1
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => fadeInRight', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transition: 'opacity ease-in-out',
                        transform: 'translate3d(100%, 0, 0)',
                        opacity: 0
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transition: 'opacity ease-in-out',
                        transform: 'none',
                        opacity: 1
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => fadeInRightBig', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transition: 'opacity ease-in-out',
                        transform: 'translate3d(2000px, 0, 0)',
                        opacity: 0
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transition: 'opacity ease-in-out',
                        transform: 'none',
                        opacity: 1
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => fadeInDown', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transition: 'opacity ease-in-out',
                        transform: 'translate3d(0, -100%, 0)',
                        opacity: 0
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transition: 'opacity ease-in-out',
                        transform: 'none',
                        opacity: 1
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => fadeInDownBig', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transition: 'opacity ease-in-out',
                        transform: 'translate3d(0, -2000px, 0)',
                        opacity: 0
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transition: 'opacity ease-in-out',
                        transform: 'none',
                        opacity: 1
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => fadeInLeft', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transition: 'opacity ease-in-out',
                        transform: 'translate3d(-100%, 0, 0)',
                        opacity: 0
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transition: 'opacity ease-in-out',
                        transform: 'none',
                        opacity: 1
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => fadeInLeftBig', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transition: 'opacity ease-in-out',
                        transform: 'translate3d(-2000px, 0, 0)',
                        opacity: 0
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transition: 'opacity ease-in-out',
                        transform: 'none',
                        opacity: 1
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => flip', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)',
                        'animation-timing-function': 'ease-out'
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
                            'animation-timing-function': 'ease-out', offset: 0.4 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
                            'animation-timing-function': 'ease-out', offset: 0.5 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'perspective(400px) scale3d(.95, .95, .95)',
                            'animation-timing-function': 'ease-out', offset: 0.8 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'perspective(400px)', offset: 1.0 })
                    ]))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => flipInX', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
                        'animation-timing-function': 'ease-out',
                        opacity: 0
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
                            'animation-timing-function': 'ease-out', offset: 0.4 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', opacity: 1, offset: 0.6 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)', offset: 0.8 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'perspective(400px)', offset: 1.0 })
                    ]))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => flipInY', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
                        'animation-timing-function': 'ease-out',
                        opacity: 0
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)',
                            'animation-timing-function': 'ease-out', offset: 0.4 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: 1, offset: 0.6 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', offset: 0.8 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'perspective(400px)', offset: 1.0 })
                    ]))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => flipOutX', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transform: 'perspective(400px)',
                        opacity: 1
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: 1, offset: 0.3 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: 0, offset: 1.0 })
                    ]))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => flipOutY', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transform: 'perspective(400px)',
                        opacity: 1
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', opacity: 1, offset: 0.3 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: 0, offset: 1.0 })
                    ]))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => lightSpeedIn', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
                        opacity: 0
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('1000ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'skewX(20deg)', opacity: 1, offset: 0.6 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'skewX(-5deg)', offset: 0.8 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({ transform: 'none', offset: 1.0 })
                    ]))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => lightSpeedOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        opacity: 1
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('1000ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'animation-timing-function': 'ease-in',
                        transform: 'translate3d(100%, 0, 0) skewX(30deg)',
                        opacity: 0
                    }))
                ]),
                /** Rotate */
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => rotateIn', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'transform-origin': 'center',
                        transform: 'rotate3d(0, 0, 1, -200deg)',
                        opacity: 0
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'transform-origin': 'center',
                        transform: 'none',
                        opacity: 1
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => rotateInDownLeft', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'transform-origin': 'left bottom',
                        transform: 'rotate3d(0, 0, 1, -45deg)',
                        opacity: 0
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'transform-origin': 'left bottom',
                        transform: 'none',
                        opacity: 1
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => rotateInDownRight', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'transform-origin': 'right bottom',
                        transform: 'rotate3d(0, 0, 1, 45deg)',
                        opacity: 0
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'transform-origin': 'right bottom',
                        transform: 'none',
                        opacity: 1
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => rotateInUpLeft', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'transform-origin': 'left bottom',
                        transform: 'rotate3d(0, 0, 1, 45deg)',
                        opacity: 0
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'transform-origin': 'left bottom',
                        transform: 'none',
                        opacity: 1
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => rotateInUpRight', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'transform-origin': 'right bottom',
                        transform: 'rotate3d(0, 0, 1, -90deg)',
                        opacity: 0
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'transform-origin': 'right bottom',
                        transform: 'none',
                        opacity: 1
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => rotateOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'transform-origin': 'center',
                        opacity: 1
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'transform-origin': 'center',
                        transform: 'rotate3d(0, 0, 1, 200deg)',
                        opacity: 0
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => rotateOutDownLeft', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'transform-origin': 'left bottom',
                        opacity: 1
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'transform-origin': 'left bottom',
                        transform: 'rotate3d(0, 0, 1, 45deg)',
                        opacity: 0
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => rotateOutDownRight', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'transform-origin': 'right bottom',
                        opacity: 1
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'transform-origin': 'right bottom',
                        transform: 'rotate3d(0, 0, 1, -45deg)',
                        opacity: 0
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => rotateOutUpLeft', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'transform-origin': 'left bottom',
                        opacity: 1
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'transform-origin': 'left bottom',
                        transform: 'rotate3d(0, 0, 1, -45deg)',
                        opacity: 0
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => rotateOutUpRight', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'transform-origin': 'right bottom',
                        opacity: 1
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        'transform-origin': 'right bottom',
                        transform: 'rotate3d(0, 0, 1, 90deg)',
                        opacity: 0
                    }))
                ]),
                /** Slide */
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => slideInUp', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transform: 'translate3d(0, 100%, 0)',
                        visibility: 'visible'
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transform: 'translate3d(0, 0, 0)'
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => slideInDown', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transform: 'translate3d(0, -100%, 0)',
                        visibility: 'visible'
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transform: 'translate3d(0, 0, 0)'
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => slideInLeft', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transform: 'translate3d(-100%, 0, 0)',
                        visibility: 'visible'
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transform: 'translate3d(0, 0, 0)'
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => slideInRight', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transform: 'translate3d(100, 0, 0)',
                        visibility: 'visible'
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transform: 'translate3d(0, 0, 0)'
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => slideOutUp', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transform: 'translate3d(0, 0, 0)'
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        visibility: 'hidden',
                        transform: 'translate3d(0, -100%, 0)'
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => slideOutDown', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transform: 'translate3d(0, 0, 0)'
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        visibility: 'hidden',
                        transform: 'translate3d(0, 100%, 0)'
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => slideOutLeft', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transform: 'translate3d(0, 0, 0)'
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        visibility: 'hidden',
                        transform: 'translate3d(-100%, 0, 0)'
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('* => slideOutRight', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        transform: 'translate3d(0, 0, 0)'
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('600ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                        visibility: 'hidden',
                        transform: 'translate3d(100%, 0, 0)'
                    }))
                ]),
            ])
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_animations_animations__["a" /* AnimationsProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnimationsProvider = (function () {
    function AnimationsProvider(http) {
        this.http = http;
    }
    AnimationsProvider.prototype.getAnimations = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('assets/data/data.json')
                .map(function (resp) { return JSON.parse(resp._body); })
                .subscribe(function (data) {
                console.log(data);
                resolve(data);
            });
        });
    };
    return AnimationsProvider;
}());
AnimationsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], AnimationsProvider);

//# sourceMappingURL=animations.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min__);


 // need this for animations to work in safari
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_animations_animations__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_8__providers_animations_animations__["a" /* AnimationsProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            if (platform.is('cordova')) {
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
                statusBar.styleDefault();
                splashScreen.hide();
            }
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Sarah/Apps/ng-ionic-animate/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Sarah/Apps/ng-ionic-animate/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map