!function(){function t(n,e){return(t=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(n,e)}function n(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,r=o(t);if(n){var c=o(this).constructor;i=Reflect.construct(r,arguments,c)}else i=r.apply(this,arguments);return e(this,i)}}function e(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/uT1":function(e,o,r){"use strict";r.r(o),r.d(o,"PostPageModule",(function(){return R}));var a,s=r("ofXK"),l=r("3Pt+"),u=r("TEn/"),b=r("sYmb"),f=r("PCNd"),d=r("tyNb"),p=r("mrSG"),g=r("i9vM"),h=r("fXoL"),v=r("EnSQ"),m=r("jhN1"),x=((a=function(){function t(n){i(this,t),this.sanitizer=n}return c(t,[{key:"transform",value:function(t){return this.sanitizer.bypassSecurityTrustResourceUrl(t)}}]),t}()).\u0275fac=function(t){return new(t||a)(h.Hb(m.b))},a.\u0275pipe=h.Gb({name:"safe",type:a,pure:!0}),a),y=["slider"];function M(t,n){if(1&t&&(h.Mb(0,"ion-card"),h.Ib(1,"ion-img",12),h.Lb()),2&t){var e=h.Wb();h.xb(1),h.cc("src",e.post.imageSrc)}}function k(t,n){if(1&t){var e=h.Nb();h.Mb(0,"div",19),h.Ub("click",(function(){return h.fc(e),h.Wb(2).slidePrev()})),h.Ib(1,"ion-icon",20),h.Lb()}}function w(t,n){if(1&t){var e=h.Nb();h.Mb(0,"div",21),h.Ub("click",(function(){return h.fc(e),h.Wb(2).slideNext()})),h.Ib(1,"ion-icon",22),h.Lb()}}function O(t,n){if(1&t&&(h.Mb(0,"ion-slide"),h.Mb(1,"ion-card"),h.Ib(2,"ion-img",12),h.Lb(),h.Lb()),2&t){var e=n.index,o=h.Wb(2);h.xb(2),h.cc("src",o.post.getImageSrc(e))}}function P(t,n){if(1&t&&(h.Mb(0,"div",13),h.kc(1,k,2,0,"div",14),h.kc(2,w,2,0,"div",15),h.Mb(3,"ion-slides",16,17),h.kc(5,O,3,1,"ion-slide",18),h.Lb(),h.Lb()),2&t){var e=h.Wb();h.xb(1),h.cc("ngIf",e.isPlatformDesktop),h.xb(1),h.cc("ngIf",e.isPlatformDesktop),h.xb(1),h.cc("pager",!e.isPlatformDesktop),h.xb(2),h.cc("ngForOf",e.post.images)}}function L(t,n){1&t&&h.Ib(0,"ion-text",28),2&t&&h.cc("innerHtml",n.$implicit,h.gc)}function C(t,n){if(1&t&&(h.Mb(0,"div",30),h.Ib(1,"iframe",31),h.Xb(2,"safe"),h.Lb()),2&t){var e=n.$implicit;h.xb(1),h.cc("src",h.Yb(2,1,e),h.hc)}}function _(t,n){if(1&t&&(h.Mb(0,"div"),h.kc(1,C,3,3,"div",29),h.Lb()),2&t){var e=h.Wb(2);h.xb(1),h.cc("ngForOf",e.post.video)}}function I(t,n){if(1&t&&(h.Mb(0,"ion-chip",32),h.lc(1),h.Xb(2,"translate"),h.Lb()),2&t){var e=n.$implicit;h.xb(1),h.mc(h.Yb(2,1,e.label))}}function S(t,n){if(1&t&&(h.Mb(0,"ion-card"),h.Mb(1,"ion-card-header"),h.Ib(2,"ion-card-title",23),h.Lb(),h.Mb(3,"ion-card-content"),h.kc(4,L,1,1,"ion-text",24),h.kc(5,_,2,1,"div",9),h.Mb(6,"div",25),h.Mb(7,"ion-label",26),h.lc(8),h.Xb(9,"date"),h.Lb(),h.Mb(10,"div"),h.kc(11,I,3,3,"ion-chip",27),h.Lb(),h.Lb(),h.Lb(),h.Lb()),2&t){var e=h.Wb();h.xb(2),h.cc("innerHtml",e.post.title,h.gc),h.xb(2),h.cc("ngForOf",e.post.text),h.xb(1),h.cc("ngIf",!!e.post.video),h.xb(3),h.mc(h.Zb(9,5,e.post.date,"mediumDate","",e.locale)),h.xb(3),h.cc("ngForOf",e.post.tags)}}var H,F,z,j=[{path:"",component:(H=function(e){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&t(n,e)}(r,e);var o=n(r);function r(t,n,e,c,a,s,l,u,b,f,d){var p;return i(this,r),(p=o.call(this,t,n,e,c,a,u,d)).platform=t,p.menuCtrl=n,p.alertCtrl=e,p.toastCtrl=c,p.loadingCtrl=a,p.popoverCtrl=s,p.actionSheetCtrl=l,p.translateService=u,p.router=b,p.route=f,p.dataService=d,p}return c(r,[{key:"ngOnInit",value:function(){var t=this;this.route.params.subscribe((function(n){var e=n.id;t.postId=e,t.post=t.dataService.getPost(e)}))}},{key:"slideNext",value:function(){var t=this;this.slider.isEnd().then((function(n){n?t.slider.slideTo(0):t.slider.slideNext()}))}},{key:"slidePrev",value:function(){var t=this;this.slider.isBeginning().then((function(n){n?t.slider.length().then((function(n){return t.slider.slideTo(n-1)})):t.slider.slidePrev()}))}},{key:"changeLanguage",value:function(){var t=this;this.dataService.language="en"===this.dataService.language?"sk":"en",this.dataService.loadPosts().subscribe((function(){t.post=t.dataService.getPost(t.postId)}))}},{key:"share",value:function(t){return Object(p.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.actionSheetCtrl.create({header:location.href,cssClass:"action-sheet",buttons:[{text:"Facebook",icon:"logo-facebook",handler:function(){console.log("Facebook clicked")}},{text:"Twitter",icon:"logo-twitter",handler:function(){console.log("Twitter clicked")}},{text:"Instagram",icon:"logo-instagram",handler:function(){console.log("Instagram clicked")}},{text:this.translateService.instant("button.close"),icon:"close",role:"cancel",handler:function(){}}]});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"isEnLanguage",get:function(){return"en"===this.dataService.language}},{key:"locale",get:function(){return this.dataService.locale}}]),r}(g.a),H.\u0275fac=function(t){return new(t||H)(h.Hb(u.I),h.Hb(u.H),h.Hb(u.b),h.Hb(u.M),h.Hb(u.G),h.Hb(u.J),h.Hb(u.a),h.Hb(b.d),h.Hb(d.h),h.Hb(d.a),h.Hb(v.a))},H.\u0275cmp=h.Bb({type:H,selectors:[["app-post"]],viewQuery:function(t,n){var e;1&t&&h.oc(y,!0),2&t&&h.ec(e=h.Vb())&&(n.slider=e.first)},features:[h.ub],decls:18,vars:4,consts:[[1,"header"],["slot","start"],["text","","defaultHref","/"],["slot","end"],[3,"click"],["color","tertiary",1,"ion-text-center","ion-text-uppercase"],["fullscreen","true","scrollEvents","false"],["fixed","true"],["size","12","sizeMd","6","sizeLg","4","sizeXl","6"],[4,"ngIf"],["style","position: relative;",4,"ngIf"],["size","12","sizeMd","6","sizeLg","8","sizeXl","6"],[3,"src"],[2,"position","relative"],["class","arrow left",3,"click",4,"ngIf"],["class","arrow right",3,"click",4,"ngIf"],[3,"pager"],["slider",""],[4,"ngFor","ngForOf"],[1,"arrow","left",3,"click"],["name","chevron-back-circle"],[1,"arrow","right",3,"click"],["name","chevron-forward-circle"],["color","primary",1,"ion-text-uppercase",3,"innerHtml"],["color","primary",3,"innerHtml",4,"ngFor","ngForOf"],[1,"post-info"],["color","secondary","slot","start"],["color","tertiary","slot","end","style","cursor: auto",4,"ngFor","ngForOf"],["color","primary",3,"innerHtml"],["class","video-container",4,"ngFor","ngForOf"],[1,"video-container"],["frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",1,"video",3,"src"],["color","tertiary","slot","end",2,"cursor","auto"]],template:function(t,n){1&t&&(h.Mb(0,"ion-header",0),h.Mb(1,"ion-toolbar"),h.Mb(2,"ion-buttons",1),h.Ib(3,"ion-back-button",2),h.Lb(),h.Mb(4,"ion-buttons",3),h.Mb(5,"ion-button",4),h.Ub("click",(function(){return n.changeLanguage()})),h.Mb(6,"ion-text"),h.lc(7),h.Lb(),h.Lb(),h.Lb(),h.Mb(8,"ion-title",5),h.lc(9,"Pietro Royalty"),h.Lb(),h.Lb(),h.Lb(),h.Mb(10,"ion-content",6),h.Mb(11,"ion-grid",7),h.Mb(12,"ion-row"),h.Mb(13,"ion-col",8),h.kc(14,M,2,1,"ion-card",9),h.kc(15,P,6,4,"div",10),h.Lb(),h.Mb(16,"ion-col",11),h.kc(17,S,12,10,"ion-card",9),h.Lb(),h.Lb(),h.Lb(),h.Lb()),2&t&&(h.xb(7),h.mc(n.isEnLanguage?"SK":"EN"),h.xb(7),h.cc("ngIf",n.post&&1===n.post.images.length),h.xb(1),h.cc("ngIf",n.post&&n.post.images.length>1),h.xb(2),h.cc("ngIf",n.post))},directives:[u.p,u.D,u.g,u.d,u.e,u.f,u.B,u.C,u.n,u.o,u.x,u.m,s.j,u.h,u.r,u.A,s.i,u.q,u.z,u.j,u.k,u.i,u.t,u.l],pipes:[s.d,x,b.c],styles:["ion-text[_ngcontent-%COMP%]{font-size:16px}ion-card[_ngcontent-%COMP%]{padding-top:32px}ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{padding-top:0}ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding-bottom:64px}ion-card[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{display:block;font-size:16px;margin-top:16px}.arrow[_ngcontent-%COMP%]{position:absolute;top:50%;font-size:34px;z-index:2;color:#fff}.arrow.left[_ngcontent-%COMP%]{left:20px}.arrow.right[_ngcontent-%COMP%]{right:20px}.arrow[_ngcontent-%COMP%]:hover{cursor:pointer}.video-container[_ngcontent-%COMP%]{position:relative;width:100%;padding-top:56.25%;margin-top:16px}.video[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;border:0}@media (min-width:768px){ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{padding:0 0 20px}ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding-left:0;padding-right:0}ion-card[_ngcontent-%COMP%]   .post-info[_ngcontent-%COMP%]{margin:0}}"]}),H)}],E=((z=function t(){i(this,t)}).\u0275mod=h.Fb({type:z}),z.\u0275inj=h.Eb({factory:function(t){return new(t||z)},imports:[[d.k.forChild(j)],d.k]}),z),R=((F=function t(){i(this,t)}).\u0275mod=h.Fb({type:F}),F.\u0275inj=h.Eb({factory:function(t){return new(t||F)},imports:[[s.b,l.a,u.E,b.b,f.a,E]]}),F)}}])}();