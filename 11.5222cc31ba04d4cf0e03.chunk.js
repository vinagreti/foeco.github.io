webpackJsonp([11,18],{AsXK:function(t,n,l){"use strict";l.d(n,"a",function(){return e});var e=["md-card[_ngcontent-%COMP%]{margin-top:20px}md-chip-list[_ngcontent-%COMP%]{display:inline-block}md-chip-list[_ngcontent-%COMP%]   md-chip[_ngcontent-%COMP%]{padding:3px 10px}.card-media[_ngcontent-%COMP%], .card-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}"]},M1Kx:function(t,n,l){"use strict";l.d(n,"a",function(){return e});var e=function(){function t(){}return t}()},jN5h:function(t,n,l){"use strict";var e=l("Fzro"),i=l("fvVN");l.d(n,"a",function(){return o});var u=function(){function t(t){void 0===t&&(t=0),this.img_index=0,this.img_index=t}return t}(),o=function(){function t(t,n){this.db=t,this.http=n,this.carrouselControls={},this.postKinds=[{kind:"ask_question",ptBr:"Pergunta",color:"accent"},{kind:"ask_knowledge",ptBr:"Busca conhecimento",color:"accent"},{kind:"ask_product",ptBr:"Busca produto",color:"accent"},{kind:"ask_seed",ptBr:"Busca semente ou muda",color:"accent"},{kind:"ask_talent",ptBr:"Busca talento",color:"accent"},{kind:"ask_alternative",ptBr:"Busca alternativa",color:"primary"},{kind:"talent",ptBr:"Oferece o talento",color:"primary"},{kind:"knowledge",ptBr:"Oferece conhecimento",color:"primary"},{kind:"product",ptBr:"Oferece produto",color:"primary"},{kind:"seed",ptBr:"Oferece semente ou muda",color:"primary"},{kind:"alternative",ptBr:"Oferece alternativa",color:"primary"}],this.likeTheNew=function(){alert("like the new")}}return t.prototype.ngOnInit=function(){var t=this;this.db.list("post",{limitToLast:200}).subscribe(function(n){console.log(n),t.feed=n.sort(function(t,n){return n.date-t.date})})},t.prototype.getPostKind=function(t){return this.postKinds.find(function(n){return n.kind==t})},t.prototype.getCarrouselConfig=function(t){var n=this.carrouselControls[t];return n||(n=new u,this.carrouselControls[t]=n),n},t.prototype.setCarrouselConfig=function(t,n){this.getCarrouselConfig(t).img_index=n},t.ctorParameters=function(){return[{type:i.a},{type:e.k}]},t}()},pky9:function(t,n,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=l("3j3K"),i=l("M1Kx"),u=l("2Je8"),o=l("5oXY"),r=l("rGuA"),_=l("fYnu"),d=l("NVOs"),a=l("Fzro"),c=l("r6yP"),s=l("ZWsw"),p=l("Qbdm"),h=l("jN5h");l.d(n,"FeedModuleNgFactory",function(){return g});var f=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var l in n)n.hasOwnProperty(l)&&(t[l]=n[l])};return function(n,l){function e(){this.constructor=n}t(n,l),n.prototype=null===l?Object.create(l):(e.prototype=l.prototype,new e)}}(),m=function(t){function n(n){return t.call(this,n,[c.a,s.a,s.b,s.c,s.d],[])||this}return f(n,t),Object.defineProperty(n.prototype,"_NgLocalization_43",{get:function(){return null==this.__NgLocalization_43&&(this.__NgLocalization_43=new u.a(this.parent.get(e.LOCALE_ID))),this.__NgLocalization_43},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ScrollDispatcher_45",{get:function(){return null==this.__ScrollDispatcher_45&&(this.__ScrollDispatcher_45=_.b(this.parent.get(_.c,null),this.parent.get(e.NgZone))),this.__ScrollDispatcher_45},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵh_46",{get:function(){return null==this.__ɵh_46&&(this.__ɵh_46=_.d(this.parent.get(_.e,null),this._ScrollDispatcher_45)),this.__ɵh_46},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_OverlayContainer_47",{get:function(){return null==this.__OverlayContainer_47&&(this.__OverlayContainer_47=_.f(this.parent.get(_.g,null))),this.__OverlayContainer_47},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵk_48",{get:function(){return null==this.__ɵk_48&&(this.__ɵk_48=new _.h(this._ɵh_46)),this.__ɵk_48},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Overlay_49",{get:function(){return null==this.__Overlay_49&&(this.__Overlay_49=new _.i(this._OverlayContainer_47,this.componentFactoryResolver,this._ɵk_48,this.parent.get(e.ApplicationRef),this,this.parent.get(e.NgZone))),this.__Overlay_49},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_FocusOriginMonitor_50",{get:function(){return null==this.__FocusOriginMonitor_50&&(this.__FocusOriginMonitor_50=_.j(this.parent.get(_.k,null),this.parent.get(e.NgZone))),this.__FocusOriginMonitor_50},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵi_51",{get:function(){return null==this.__ɵi_51&&(this.__ɵi_51=new d.a),this.__ɵi_51},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_UniqueSelectionDispatcher_52",{get:function(){return null==this.__UniqueSelectionDispatcher_52&&(this.__UniqueSelectionDispatcher_52=_.l(this.parent.get(_.m,null))),this.__UniqueSelectionDispatcher_52},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Platform_53",{get:function(){return null==this.__Platform_53&&(this.__Platform_53=new _.n),this.__Platform_53},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_InteractivityChecker_54",{get:function(){return null==this.__InteractivityChecker_54&&(this.__InteractivityChecker_54=new _.o(this._Platform_53)),this.__InteractivityChecker_54},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_FocusTrapFactory_55",{get:function(){return null==this.__FocusTrapFactory_55&&(this.__FocusTrapFactory_55=new _.p(this._InteractivityChecker_54,this.parent.get(e.NgZone))),this.__FocusTrapFactory_55},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_LiveAnnouncer_56",{get:function(){return null==this.__LiveAnnouncer_56&&(this.__LiveAnnouncer_56=_.q(this.parent.get(_.r,null),this.parent.get(_.s,null))),this.__LiveAnnouncer_56},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_MdDialog_57",{get:function(){return null==this.__MdDialog_57&&(this.__MdDialog_57=new _.t(this._Overlay_49,this,this.parent.get(_.t,null))),this.__MdDialog_57},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_BrowserXhr_58",{get:function(){return null==this.__BrowserXhr_58&&(this.__BrowserXhr_58=new a.a),this.__BrowserXhr_58},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ResponseOptions_59",{get:function(){return null==this.__ResponseOptions_59&&(this.__ResponseOptions_59=new a.b),this.__ResponseOptions_59},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_XSRFStrategy_60",{get:function(){return null==this.__XSRFStrategy_60&&(this.__XSRFStrategy_60=a.c()),this.__XSRFStrategy_60},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_XHRBackend_61",{get:function(){return null==this.__XHRBackend_61&&(this.__XHRBackend_61=new a.d(this._BrowserXhr_58,this._ResponseOptions_59,this._XSRFStrategy_60)),this.__XHRBackend_61},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_RequestOptions_62",{get:function(){return null==this.__RequestOptions_62&&(this.__RequestOptions_62=new a.e),this.__RequestOptions_62},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Http_63",{get:function(){return null==this.__Http_63&&(this.__Http_63=a.f(this._XHRBackend_61,this._RequestOptions_62)),this.__Http_63},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_MdIconRegistry_64",{get:function(){return null==this.__MdIconRegistry_64&&(this.__MdIconRegistry_64=_.u(this.parent.get(_.v,null),this._Http_63,this.parent.get(p.p))),this.__MdIconRegistry_64},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_HAMMER_GESTURE_CONFIG_65",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_65&&(this.__HAMMER_GESTURE_CONFIG_65=new _.a),this.__HAMMER_GESTURE_CONFIG_65},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_MdSnackBar_66",{get:function(){return null==this.__MdSnackBar_66&&(this.__MdSnackBar_66=new _.w(this._Overlay_49,this._LiveAnnouncer_56,this.parent.get(_.w,null))),this.__MdSnackBar_66},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._CommonModule_0=new u.e,this._RouterModule_1=new o.q(this.parent.get(o.r,null),this.parent.get(o.g,null)),this._FeedRoutingModule_2=new r.a,this._CompatibilityModule_3=new _.y(this.parent.get(p.c,null)),this._MdRippleModule_4=new _.z,this._MdSelectionModule_5=new _.A,this._MdOptionModule_6=new _.B,this._PortalModule_7=new _.C,this._OverlayModule_8=new _.D,this._MdAutocompleteModule_9=new _.E,this._StyleModule_10=new _.F,this._MdButtonModule_11=new _.G,this._ɵba_12=new d.c,this._FormsModule_13=new d.d,this._MdButtonToggleModule_14=new _.H,this._MdCardModule_15=new _.I,this._MdChipsModule_16=new _.J,this._MdCheckboxModule_17=new _.K,this._PlatformModule_18=new _.L,this._A11yModule_19=new _.M,this._MdDialogModule_20=new _.N,this._MdLineModule_21=new _.O,this._MdGridListModule_22=new _.P,this._HttpModule_23=new a.g,this._MdIconModule_24=new _.Q,this._MdInputModule_25=new _.R,this._MdListModule_26=new _.S,this._MdMenuModule_27=new _.T,this._MdProgressBarModule_28=new _.U,this._MdProgressSpinnerModule_29=new _.V,this._MdRadioModule_30=new _.W,this._MdSelectModule_31=new _.X,this._MdSidenavModule_32=new _.Y,this._RtlModule_33=new _.Z,this._MdSliderModule_34=new _._0,this._MdSlideToggleModule_35=new _._1,this._MdSnackBarModule_36=new _._2,this._ObserveContentModule_37=new _._3,this._MdTabsModule_38=new _._4,this._MdToolbarModule_39=new _._5,this._MdTooltipModule_40=new _._6,this._MaterialModule_41=new _._7,this._FeedModule_42=new i.a,this._ROUTES_44=[[{path:"",component:h.a}]],this._FeedModule_42},n.prototype.getInternal=function(t,n){return t===u.e?this._CommonModule_0:t===o.q?this._RouterModule_1:t===r.a?this._FeedRoutingModule_2:t===_.y?this._CompatibilityModule_3:t===_.z?this._MdRippleModule_4:t===_.A?this._MdSelectionModule_5:t===_.B?this._MdOptionModule_6:t===_.C?this._PortalModule_7:t===_.D?this._OverlayModule_8:t===_.E?this._MdAutocompleteModule_9:t===_.F?this._StyleModule_10:t===_.G?this._MdButtonModule_11:t===d.c?this._ɵba_12:t===d.d?this._FormsModule_13:t===_.H?this._MdButtonToggleModule_14:t===_.I?this._MdCardModule_15:t===_.J?this._MdChipsModule_16:t===_.K?this._MdCheckboxModule_17:t===_.L?this._PlatformModule_18:t===_.M?this._A11yModule_19:t===_.N?this._MdDialogModule_20:t===_.O?this._MdLineModule_21:t===_.P?this._MdGridListModule_22:t===a.g?this._HttpModule_23:t===_.Q?this._MdIconModule_24:t===_.R?this._MdInputModule_25:t===_.S?this._MdListModule_26:t===_.T?this._MdMenuModule_27:t===_.U?this._MdProgressBarModule_28:t===_.V?this._MdProgressSpinnerModule_29:t===_.W?this._MdRadioModule_30:t===_.X?this._MdSelectModule_31:t===_.Y?this._MdSidenavModule_32:t===_.Z?this._RtlModule_33:t===_._0?this._MdSliderModule_34:t===_._1?this._MdSlideToggleModule_35:t===_._2?this._MdSnackBarModule_36:t===_._3?this._ObserveContentModule_37:t===_._4?this._MdTabsModule_38:t===_._5?this._MdToolbarModule_39:t===_._6?this._MdTooltipModule_40:t===_._7?this._MaterialModule_41:t===i.a?this._FeedModule_42:t===u.g?this._NgLocalization_43:t===o.u?this._ROUTES_44:t===_.c?this._ScrollDispatcher_45:t===_.e?this._ɵh_46:t===_.g?this._OverlayContainer_47:t===_.h?this._ɵk_48:t===_.i?this._Overlay_49:t===_.k?this._FocusOriginMonitor_50:t===d.a?this._ɵi_51:t===_.m?this._UniqueSelectionDispatcher_52:t===_.n?this._Platform_53:t===_.o?this._InteractivityChecker_54:t===_.p?this._FocusTrapFactory_55:t===_.r?this._LiveAnnouncer_56:t===_.t?this._MdDialog_57:t===a.a?this._BrowserXhr_58:t===a.h?this._ResponseOptions_59:t===a.i?this._XSRFStrategy_60:t===a.d?this._XHRBackend_61:t===a.j?this._RequestOptions_62:t===a.k?this._Http_63:t===_.v?this._MdIconRegistry_64:t===p.q?this._HAMMER_GESTURE_CONFIG_65:t===_.w?this._MdSnackBar_66:n},n.prototype.destroyInternal=function(){},n}(e["ɵNgModuleInjector"]),g=new e.NgModuleFactory(m,i.a)},r6yP:function(t,n,l){"use strict";function e(t){return p["ɵvid"](0,[(t()(),p["ɵeld"](0,null,null,1,"img",[["md-card-avatar",""],["src","/assets/img/cat-spin.gif"]],[[8,"src",4],[8,"title",0],[2,"mat-card-avatar",null]],null,null,null,null)),p["ɵdid"](8192,null,0,h._70,[],null,null)],null,function(t,n){t(n,0,0,n.parent.parent.context.$implicit.author.picture,n.parent.parent.context.$implicit.author.name,!0)})}function i(t){return p["ɵvid"](0,[(t()(),p["ɵeld"](0,null,null,3,"div",[],null,null,null,null,null)),(t()(),p["ɵted"](null,["\n\t\t\t\t  \t\t\t"])),(t()(),p["ɵeld"](0,null,null,0,"img",[["src","/assets/img/cat-spin.gif"]],[[8,"src",4],[8,"title",0]],null,null,null,null)),(t()(),p["ɵted"](null,["\n\t\t\t\t  \t\t"]))],null,function(t,n){t(n,2,0,n.parent.parent.parent.context.$implicit.media[0].url,n.parent.parent.parent.context.$implicit.media[0].filename)})}function u(t){return p["ɵvid"](0,[(t()(),p["ɵeld"](0,null,null,3,"div",[["class","col-phone-8 col-tablet-6 col-laptop-4 col-tv-4 col-gutter-2"]],null,[[null,"click"]],function(t,n,l){var e=!0,i=t.component;if("click"===n){e=!1!==i.setCarrouselConfig(t.parent.parent.parent.parent.context.index,t.context.index)&&e}return e},null,null)),(t()(),p["ɵted"](null,["\n\t\t\t\t  \t\t\t\t\t"])),(t()(),p["ɵeld"](0,null,null,0,"img",[["class","click"],["src","/assets/img/cat-spin.gif"]],[[8,"src",4],[8,"title",0]],null,null,null,null)),(t()(),p["ɵted"](null,["\n\t\t\t\t  \t\t\t\t"]))],null,function(t,n){t(n,2,0,n.context.$implicit.url,n.parent.parent.parent.parent.context.$implicit.text)})}function o(t){return p["ɵvid"](0,[(t()(),p["ɵeld"](0,null,null,15,"div",[],null,null,null,null,null)),(t()(),p["ɵted"](null,["\n\t\t\t\t  \t\t\t"])),(t()(),p["ɵeld"](0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(t()(),p["ɵted"](null,["\n\t\t\t\t  \t\t\t\t"])),(t()(),p["ɵeld"](0,null,null,3,"div",[["class","col-phone-24 col-gutter-2"]],null,null,null,null,null)),(t()(),p["ɵted"](null,["\n\t\t\t\t  \t\t\t\t\t"])),(t()(),p["ɵeld"](0,null,null,0,"img",[["src","/assets/img/cat-spin.gif"]],[[8,"src",4],[8,"title",0]],null,null,null,null)),(t()(),p["ɵted"](null,["\n\t\t\t\t  \t\t\t\t"])),(t()(),p["ɵted"](null,["\n\t\t\t\t  \t\t\t"])),(t()(),p["ɵted"](null,["\n\t\t\t\t  \t\t\t"])),(t()(),p["ɵeld"](0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(t()(),p["ɵted"](null,["\n\t\t\t\t  \t\t\t\t"])),(t()(),p["ɵand"](8388608,null,null,1,null,u)),p["ɵdid"](401408,null,0,f.j,[p.ViewContainerRef,p.TemplateRef,p.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(t()(),p["ɵted"](null,["\n\t\t\t\t  \t\t\t"])),(t()(),p["ɵted"](null,["\n\t\t\t\t  \t\t"]))],function(t,n){t(n,13,0,n.parent.parent.parent.context.$implicit.media)},function(t,n){var l=n.component;t(n,6,0,n.parent.parent.parent.context.$implicit.media[l.getCarrouselConfig(n.parent.parent.parent.context.index).img_index].url,n.parent.parent.parent.context.$implicit.media[l.mediaToShow?l.mediaToShow:0].filename)})}function r(t){return p["ɵvid"](0,[(t()(),p["ɵeld"](0,null,null,11,"div",[["class","card-media"]],null,null,null,null,null)),(t()(),p["ɵted"](null,["\n\t\t\t\t  \t"])),(t()(),p["ɵeld"](0,null,null,8,"div",[],null,null,null,null,null)),p["ɵdid"](8192,null,0,f.k,[],{ngSwitch:[0,"ngSwitch"]},null),(t()(),p["ɵted"](null,["\n\t\t\t\t  \t\t"])),(t()(),p["ɵand"](8388608,null,null,1,null,i)),p["ɵdid"](139264,null,0,f.l,[p.ViewContainerRef,p.TemplateRef,f.k],{ngSwitchCase:[0,"ngSwitchCase"]},null),(t()(),p["ɵted"](null,["\n\t\t\t\t  \t\t"])),(t()(),p["ɵand"](8388608,null,null,1,null,o)),p["ɵdid"](139264,null,0,f.l,[p.ViewContainerRef,p.TemplateRef,f.k],{ngSwitchCase:[0,"ngSwitchCase"]},null),(t()(),p["ɵted"](null,["\n\t\t\t\t  \t"])),(t()(),p["ɵted"](null,["\n\t\t\t\t  "]))],function(t,n){t(n,3,0,n.parent.parent.context.$implicit.media.length>1),t(n,6,0,!1),t(n,9,0,!0)},null)}function _(t){return p["ɵvid"](0,[(t()(),p["ɵeld"](0,null,null,98,"md-card",[],[[2,"mat-card",null]],null,null,m.i,m.j)),p["ɵdid"](8192,null,0,h._9,[[2,h._10]],null,null),p["ɵdid"](24576,null,0,h._23,[],null,null),(t()(),p["ɵted"](0,["\n\t\t\t\t  "])),(t()(),p["ɵeld"](0,null,0,36,"md-card-header",[["class","primary-bg"]],[[2,"mat-card-header",null]],null,null,m.k,m.l)),p["ɵdid"](8192,null,0,h._9,[[2,h._10]],null,null),p["ɵdid"](24576,null,0,h._24,[],null,null),(t()(),p["ɵted"](2,["\n\t\t\t\t    "])),(t()(),p["ɵand"](8388608,null,0,1,null,e)),p["ɵdid"](8192,null,0,f.i,[p.ViewContainerRef,p.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),p["ɵted"](2,["\n\t\t\t\t    "])),(t()(),p["ɵeld"](0,null,1,11,"md-card-title",[],[[2,"mat-card-title",null]],null,null,null,null)),p["ɵdid"](8192,null,0,h._9,[[2,h._10]],null,null),p["ɵdid"](8192,null,0,h._72,[],null,null),(t()(),p["ɵted"](null,["","\n\t\t\t\t\t\t"])),(t()(),p["ɵeld"](0,null,null,6,"md-chip-list",[["role","listbox"],["tabindex","0"]],[[2,"mat-chip-list",null]],[[null,"focus"],[null,"keydown"]],function(t,n,l){var e=!0;if("focus"===n){e=!1!==p["ɵnov"](t,16).focus()&&e}if("keydown"===n){e=!1!==p["ɵnov"](t,16)._keydown(l)&&e}return e},m.q,m.r)),p["ɵdid"](548864,null,1,h._26,[p.ElementRef],null,null),p["ɵqud"](301989888,1,{chips:1}),(t()(),p["ɵeld"](0,null,0,3,"md-chip",[["role","option"],["selected","true"],["tabindex","-1"]],[[2,"mat-chip",null],[2,"mat-chip-selected",null],[1,"disabled",0],[1,"aria-disabled",0]],[[null,"click"]],function(t,n,l){var e=!0;if("click"===n){e=!1!==p["ɵnov"](t,20)._handleClick(l)&&e}return e},m.s,m.t)),p["ɵdid"](8192,null,0,h._9,[[2,h._10]],null,null),p["ɵdid"](122880,[[1,4]],0,h._27,[p.Renderer,p.ElementRef],{selected:[0,"selected"],color:[1,"color"]},null),(t()(),p["ɵted"](0,["",""])),(t()(),p["ɵted"](null,["\n\t\t\t\t    "])),(t()(),p["ɵted"](2,["\n\t\t\t\t    "])),(t()(),p["ɵeld"](0,null,1,15,"md-card-subtitle",[],[[2,"mat-card-subtitle",null]],null,null,null,null)),p["ɵdid"](8192,null,0,h._9,[[2,h._10]],null,null),p["ɵdid"](8192,null,0,h._73,[],null,null),(t()(),p["ɵted"](null,["\n\t\t\t\t    \t"])),(t()(),p["ɵeld"](0,null,null,4,"span",[["class","click"],["title","Pessoas que gostaram"]],null,null,null,null,null)),(t()(),p["ɵted"](null,["10 "])),(t()(),p["ɵeld"](0,null,null,2,"md-icon",[["color","primary"],["fontIcon","fa-heart"],["fontSet","fa"],["role","img"]],[[2,"mat-icon",null]],null,null,m.g,m.h)),p["ɵdid"](8192,null,0,h._9,[[2,h._10]],null,null),p["ɵdid"](4513792,null,0,h._13,[p.ElementRef,p.Renderer,h.v],{fontSet:[0,"fontSet"],fontIcon:[1,"fontIcon"],color:[2,"color"]},null),(t()(),p["ɵted"](null,["\n\t\t\t\t    \t"])),(t()(),p["ɵeld"](0,null,null,4,"span",[["class","click"],["title","Comentários"]],null,null,null,null,null)),(t()(),p["ɵted"](null,["3 "])),(t()(),p["ɵeld"](0,null,null,2,"md-icon",[["color","primary"],["fontIcon","fa-comments-o"],["fontSet","fa"],["role","img"]],[[2,"mat-icon",null]],null,null,m.g,m.h)),p["ɵdid"](8192,null,0,h._9,[[2,h._10]],null,null),p["ɵdid"](4513792,null,0,h._13,[p.ElementRef,p.Renderer,h.v],{fontSet:[0,"fontSet"],fontIcon:[1,"fontIcon"],color:[2,"color"]},null),(t()(),p["ɵted"](null,["\n\t\t\t\t    "])),(t()(),p["ɵted"](2,["\n\t\t\t\t  "])),(t()(),p["ɵted"](0,["\n\t\t\t\t  \n\t\t\t\t  "])),(t()(),p["ɵeld"](0,null,0,9,"md-card-content",[],[[2,"mat-card-content",null]],null,null,null,null)),p["ɵdid"](8192,null,0,h._9,[[2,h._10]],null,null),p["ɵdid"](8192,null,0,h._74,[],null,null),(t()(),p["ɵted"](null,["\n\t\t\t\t  \t"])),(t()(),p["ɵeld"](0,null,null,1,"h3",[],null,null,null,null,null)),(t()(),p["ɵted"](null,["",""])),(t()(),p["ɵted"](null,["\n\t\t\t\t  \t"])),(t()(),p["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(t()(),p["ɵted"](null,["",""])),(t()(),p["ɵted"](null,["\n\t\t\t\t  "])),(t()(),p["ɵted"](0,["\n\n\t\t\t\t  "])),(t()(),p["ɵand"](8388608,null,0,1,null,r)),p["ɵdid"](8192,null,0,f.i,[p.ViewContainerRef,p.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),p["ɵted"](0,["\n\n\t\t\t\t  "])),(t()(),p["ɵeld"](0,null,0,41,"div",[["class","action-buttons"]],null,null,null,null,null)),(t()(),p["ɵted"](null,["\n\t\t\t\t\t"])),(t()(),p["ɵeld"](0,null,null,8,"button",[["class","call-btn"],["color","primary"],["md-icon-button",""]],[[8,"disabled",0],[2,"mat-icon-button",null]],[[null,"click"]],function(t,n,l){var e=!0,i=t.component;if("click"===n){e=!1!==i.likeTheNew(i.new)&&e}return e},m.e,m.f)),p["ɵdid"](8192,null,0,h._9,[[2,h._10]],null,null),p["ɵdid"](90112,null,0,h._11,[p.ElementRef,p.Renderer,h.k],{color:[0,"color"]},null),p["ɵdid"](8192,null,0,h._12,[],null,null),(t()(),p["ɵted"](0,["\n\t\t\t\t\t  "])),(t()(),p["ɵeld"](0,null,0,2,"md-icon",[["fontIcon","fa-heart"],["fontSet","fa"],["role","img"]],[[2,"mat-icon",null]],null,null,m.g,m.h)),p["ɵdid"](8192,null,0,h._9,[[2,h._10]],null,null),p["ɵdid"](4513792,null,0,h._13,[p.ElementRef,p.Renderer,h.v],{fontSet:[0,"fontSet"],fontIcon:[1,"fontIcon"]},null),(t()(),p["ɵted"](0,["\n\t\t\t\t\t"])),(t()(),p["ɵted"](null,["\n\t\t\t\t\t"])),(t()(),p["ɵeld"](0,null,null,8,"button",[["class","call-btn"],["color","primary"],["md-icon-button",""]],[[8,"disabled",0],[2,"mat-icon-button",null]],[[null,"click"]],function(t,n,l){var e=!0,i=t.component;if("click"===n){e=!1!==i.likeTheNew(i.new)&&e}return e},m.e,m.f)),p["ɵdid"](8192,null,0,h._9,[[2,h._10]],null,null),p["ɵdid"](90112,null,0,h._11,[p.ElementRef,p.Renderer,h.k],{color:[0,"color"]},null),p["ɵdid"](8192,null,0,h._12,[],null,null),(t()(),p["ɵted"](0,["\n\t\t\t\t\t  "])),(t()(),p["ɵeld"](0,null,0,2,"md-icon",[["fontIcon","fa-comments"],["fontSet","fa"],["role","img"]],[[2,"mat-icon",null]],null,null,m.g,m.h)),p["ɵdid"](8192,null,0,h._9,[[2,h._10]],null,null),p["ɵdid"](4513792,null,0,h._13,[p.ElementRef,p.Renderer,h.v],{fontSet:[0,"fontSet"],fontIcon:[1,"fontIcon"]},null),(t()(),p["ɵted"](0,["\n\t\t\t\t\t"])),(t()(),p["ɵted"](null,["\n\t\t\t\t\t"])),(t()(),p["ɵeld"](0,null,null,8,"button",[["class","call-btn"],["color","primary"],["md-icon-button",""]],[[8,"disabled",0],[2,"mat-icon-button",null]],[[null,"click"]],function(t,n,l){var e=!0,i=t.component;if("click"===n){e=!1!==i.likeTheNew(i.new)&&e}return e},m.e,m.f)),p["ɵdid"](8192,null,0,h._9,[[2,h._10]],null,null),p["ɵdid"](90112,null,0,h._11,[p.ElementRef,p.Renderer,h.k],{color:[0,"color"]},null),p["ɵdid"](8192,null,0,h._12,[],null,null),(t()(),p["ɵted"](0,["\n\t\t\t\t\t  "])),(t()(),p["ɵeld"](0,null,0,2,"md-icon",[["fontIcon","fa-trophy"],["fontSet","fa"],["role","img"]],[[2,"mat-icon",null]],null,null,m.g,m.h)),p["ɵdid"](8192,null,0,h._9,[[2,h._10]],null,null),p["ɵdid"](4513792,null,0,h._13,[p.ElementRef,p.Renderer,h.v],{fontSet:[0,"fontSet"],fontIcon:[1,"fontIcon"]},null),(t()(),p["ɵted"](0,["\n\t\t\t\t\t"])),(t()(),p["ɵted"](null,["\n\t\t\t\t\t"])),(t()(),p["ɵeld"](0,null,null,8,"button",[["class","call-btn"],["color","primary"],["md-icon-button",""]],[[8,"disabled",0],[2,"mat-icon-button",null]],[[null,"click"]],function(t,n,l){var e=!0,i=t.component;if("click"===n){e=!1!==i.likeTheNew(i.new)&&e}return e},m.e,m.f)),p["ɵdid"](8192,null,0,h._9,[[2,h._10]],null,null),p["ɵdid"](90112,null,0,h._11,[p.ElementRef,p.Renderer,h.k],{color:[0,"color"]},null),p["ɵdid"](8192,null,0,h._12,[],null,null),(t()(),p["ɵted"](0,["\n\t\t\t\t\t  "])),(t()(),p["ɵeld"](0,null,0,2,"md-icon",[["fontIcon","fa-thumbs-down"],["fontSet","fa"],["role","img"]],[[2,"mat-icon",null]],null,null,m.g,m.h)),p["ɵdid"](8192,null,0,h._9,[[2,h._10]],null,null),p["ɵdid"](4513792,null,0,h._13,[p.ElementRef,p.Renderer,h.v],{fontSet:[0,"fontSet"],fontIcon:[1,"fontIcon"]},null),(t()(),p["ɵted"](0,["\n\t\t\t\t\t"])),(t()(),p["ɵted"](null,["\n\t\t\t\t  "])),(t()(),p["ɵted"](0,["\n\t\t\t\t"]))],function(t,n){var l=n.component;t(n,9,0,n.parent.context.$implicit.author.picture),t(n,20,0,"true",l.getPostKind(n.parent.context.$implicit.kind).color),t(n,32,0,"fa","fa-heart","primary"),t(n,38,0,"fa","fa-comments-o","primary"),t(n,54,0,n.parent.context.$implicit.media),t(n,60,0,"primary"),t(n,65,0,"fa","fa-heart"),t(n,70,0,"primary"),t(n,75,0,"fa","fa-comments"),t(n,80,0,"primary"),t(n,85,0,"fa","fa-trophy"),t(n,90,0,"primary"),t(n,95,0,"fa","fa-thumbs-down")},function(t,n){var l=n.component;t(n,0,0,!0),t(n,4,0,!0),t(n,11,0,!0),t(n,14,0,n.parent.context.$implicit.author.name),t(n,15,0,!0),t(n,18,0,!0,p["ɵnov"](n,20).selected,p["ɵnov"](n,20).disabled,p["ɵnov"](n,20)._isAriaDisabled),t(n,21,0,l.getPostKind(n.parent.context.$implicit.kind).ptBr),t(n,24,0,!0),t(n,30,0,!0),t(n,36,0,!0),t(n,42,0,!0),t(n,47,0,n.parent.context.$implicit.title),t(n,50,0,n.parent.context.$implicit.text),t(n,58,0,p["ɵnov"](n,60).disabled,!0),t(n,63,0,!0),t(n,68,0,p["ɵnov"](n,70).disabled,!0),t(n,73,0,!0),t(n,78,0,p["ɵnov"](n,80).disabled,!0),t(n,83,0,!0),t(n,88,0,p["ɵnov"](n,90).disabled,!0),t(n,93,0,!0)})}function d(t){return p["ɵvid"](0,[(t()(),p["ɵeld"](0,null,null,7,"div",[["class","col-phone-24 col-tablet-20 col-tablet-offset-2 col-laptop-18 col-laptop-offset-3 col-desktop-16 col-desktop-offset-4 col-tv-10 col-tv-offset-7"]],null,null,null,null,null)),(t()(),p["ɵted"](null,["\n\t\t\t"])),(t()(),p["ɵeld"](0,null,null,4,"div",[["class","news-wrapper"]],null,null,null,null,null)),(t()(),p["ɵted"](null,["\n\n\t\t\t\t"])),(t()(),p["ɵand"](8388608,null,null,1,null,_)),p["ɵdid"](8192,null,0,f.i,[p.ViewContainerRef,p.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),p["ɵted"](null,["\n\t\t\t"])),(t()(),p["ɵted"](null,["\n\t\t"]))],function(t,n){t(n,5,0,n.context.$implicit.title)},null)}function a(t){return p["ɵvid"](0,[(t()(),p["ɵeld"](0,null,null,7,"div",[["class","feed-wrapper"]],null,null,null,null,null)),(t()(),p["ɵted"](null,["\n\t"])),(t()(),p["ɵeld"](0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(t()(),p["ɵted"](null,["\n\t\t"])),(t()(),p["ɵand"](8388608,null,null,1,null,d)),p["ɵdid"](401408,null,0,f.j,[p.ViewContainerRef,p.TemplateRef,p.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(t()(),p["ɵted"](null,["\n\t"])),(t()(),p["ɵted"](null,["\n"])),(t()(),p["ɵted"](null,["\n"]))],function(t,n){t(n,5,0,n.component.feed)},null)}function c(t){return p["ɵvid"](0,[(t()(),p["ɵeld"](0,null,null,1,"app-feed",[],null,null,null,a,w)),p["ɵdid"](57344,null,0,g.a,[M.a,y.k],null,null)],function(t,n){t(n,1,0)},null)}var s=l("AsXK"),p=l("3j3K"),h=l("fYnu"),f=l("2Je8"),m=l("ZWsw"),g=l("jN5h"),M=l("fvVN"),y=l("Fzro");l.d(n,"a",function(){return v});var b=[s.a],w=p["ɵcrt"]({encapsulation:0,styles:b,data:{}}),v=p["ɵccf"]("app-feed",g.a,c,{dialogRefClose:"dialogRefClose"},{},[])},rGuA:function(t,n,l){"use strict";var e=l("jN5h");l.d(n,"a",function(){return i});var i=(e.a,function(){function t(){}return t}())}});