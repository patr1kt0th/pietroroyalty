!function(){function t(n,e){return(t=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(n,e)}function n(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,i=o(t);if(n){var c=o(this).constructor;r=Reflect.construct(i,arguments,c)}else r=i.apply(this,arguments);return e(this,r)}}function e(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,n,e){return n&&i(t.prototype,n),e&&i(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/uT1":function(e,o,i){"use strict";i.r(o),i.d(o,"PostPageModule",(function(){return E}));var a,s=i("ofXK"),l=i("3Pt+"),b=i("TEn/"),f=i("sYmb"),u=i("PCNd"),d=i("tyNb"),p=i("mrSG"),g=i("i9vM"),h=i("fXoL"),v=i("EnSQ"),m=i("jhN1"),y=((a=function(){function t(n){r(this,t),this.sanitizer=n}return c(t,[{key:"transform",value:function(t){return this.sanitizer.bypassSecurityTrustResourceUrl(t)}}]),t}()).\u0275fac=function(t){return new(t||a)(h.Hb(m.b))},a.\u0275pipe=h.Gb({name:"safe",type:a,pure:!0}),a),x=["slider"];function M(t,n){if(1&t&&(h.Mb(0,"ion-card"),h.Ib(1,"ion-img",10),h.Lb()),2&t){var e=h.Wb();h.xb(1),h.dc("src",e.post.imageSrc)}}function w(t,n){if(1&t){var e=h.Nb();h.Mb(0,"div",17),h.Ub("click",(function(){return h.gc(e),h.Wb(2).slidePrev()})),h.Ib(1,"ion-icon",18),h.Lb()}}function O(t,n){if(1&t){var e=h.Nb();h.Mb(0,"div",19),h.Ub("click",(function(){return h.gc(e),h.Wb(2).slideNext()})),h.Ib(1,"ion-icon",20),h.Lb()}}function P(t,n){if(1&t&&(h.Mb(0,"ion-slide"),h.Mb(1,"ion-card"),h.Ib(2,"ion-img",10),h.Lb(),h.Lb()),2&t){var e=n.index,o=h.Wb(2);h.xb(2),h.dc("src",o.post.getImageSrc(e))}}function C(t,n){if(1&t&&(h.Mb(0,"div",11),h.lc(1,w,2,0,"div",12),h.lc(2,O,2,0,"div",13),h.Mb(3,"ion-slides",14,15),h.lc(5,P,3,1,"ion-slide",16),h.Lb(),h.Lb()),2&t){var e=h.Wb();h.xb(1),h.dc("ngIf",e.isPlatformDesktop),h.xb(1),h.dc("ngIf",e.isPlatformDesktop),h.xb(1),h.dc("pager",!e.isPlatformDesktop),h.xb(2),h.dc("ngForOf",e.post.images)}}function L(t,n){1&t&&h.Ib(0,"ion-text",26),2&t&&h.dc("innerHtml",n.$implicit,h.hc)}function k(t,n){if(1&t&&(h.Mb(0,"div",28),h.Ib(1,"iframe",29),h.Xb(2,"safe"),h.Lb()),2&t){var e=n.$implicit;h.xb(1),h.dc("src",h.Yb(2,1,e),h.ic)}}function _(t,n){if(1&t&&(h.Mb(0,"div"),h.lc(1,k,3,3,"div",27),h.Lb()),2&t){var e=h.Wb(2);h.xb(1),h.dc("ngForOf",e.post.video)}}function I(t,n){if(1&t&&(h.Mb(0,"ion-chip",30),h.mc(1),h.Xb(2,"translate"),h.Lb()),2&t){var e=n.$implicit;h.xb(1),h.nc(h.Yb(2,1,e.label))}}function H(t,n){if(1&t&&(h.Mb(0,"ion-card"),h.Mb(1,"ion-card-header"),h.Ib(2,"ion-card-title",21),h.Lb(),h.Mb(3,"ion-card-content"),h.lc(4,L,1,1,"ion-text",22),h.lc(5,_,2,1,"div",7),h.Mb(6,"div",23),h.Mb(7,"ion-label",24),h.mc(8),h.Xb(9,"date"),h.Lb(),h.Mb(10,"div"),h.lc(11,I,3,3,"ion-chip",25),h.Lb(),h.Lb(),h.Lb(),h.Lb()),2&t){var e=h.Wb();h.xb(2),h.dc("innerHtml",e.post.title,h.hc),h.xb(2),h.dc("ngForOf",e.post.text),h.xb(1),h.dc("ngIf",!!e.post.video),h.xb(3),h.nc(h.Zb(9,5,e.post.date,"mediumDate")),h.xb(3),h.dc("ngForOf",e.post.tags)}}var F,j,z,S=[{path:"",component:(F=function(e){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&t(n,e)}(i,e);var o=n(i);function i(t,n,e,c,a,s,l,b,f,u,d){var p;return r(this,i),(p=o.call(this,t,n,e,c,a,b,d)).platform=t,p.menuCtrl=n,p.alertCtrl=e,p.toastCtrl=c,p.loadingCtrl=a,p.popoverCtrl=s,p.actionSheetCtrl=l,p.translateService=b,p.router=f,p.route=u,p.dataService=d,p}return c(i,[{key:"ngOnInit",value:function(){var t=this;this.route.params.subscribe((function(n){t.post=t.dataService.getPost(n.id)}))}},{key:"slideNext",value:function(){var t=this;this.slider.isEnd().then((function(n){n?t.slider.slideTo(0):t.slider.slideNext()}))}},{key:"slidePrev",value:function(){var t=this;this.slider.isBeginning().then((function(n){n?t.slider.length().then((function(n){return t.slider.slideTo(n-1)})):t.slider.slidePrev()}))}},{key:"share",value:function(t){return Object(p.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.actionSheetCtrl.create({header:location.href,cssClass:"action-sheet",buttons:[{text:"Facebook",icon:"logo-facebook",handler:function(){console.log("Facebook clicked")}},{text:"Twitter",icon:"logo-twitter",handler:function(){console.log("Twitter clicked")}},{text:"Instagram",icon:"logo-instagram",handler:function(){console.log("Instagram clicked")}},{text:this.translateService.instant("button.close"),icon:"close",role:"cancel",handler:function(){}}]});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}}),t,this)})))}}]),i}(g.a),F.\u0275fac=function(t){return new(t||F)(h.Hb(b.K),h.Hb(b.J),h.Hb(b.b),h.Hb(b.O),h.Hb(b.I),h.Hb(b.L),h.Hb(b.a),h.Hb(f.d),h.Hb(d.g),h.Hb(d.a),h.Hb(v.a))},F.\u0275cmp=h.Bb({type:F,selectors:[["app-post"]],viewQuery:function(t,n){var e;1&t&&h.pc(x,!0),2&t&&h.fc(e=h.Vb())&&(n.slider=e.first)},features:[h.ub],decls:14,vars:3,consts:[[1,"header"],["slot","start"],["text","","defaultHref","/"],["color","tertiary",1,"ion-text-center","ion-text-uppercase"],["fullscreen","true","scrollEvents","false"],["fixed","true"],["size","12","sizeMd","6","sizeLg","4","sizeXl","6"],[4,"ngIf"],["style","position: relative;",4,"ngIf"],["size","12","sizeMd","6","sizeLg","8","sizeXl","6"],[3,"src"],[2,"position","relative"],["class","arrow left",3,"click",4,"ngIf"],["class","arrow right",3,"click",4,"ngIf"],[3,"pager"],["slider",""],[4,"ngFor","ngForOf"],[1,"arrow","left",3,"click"],["name","chevron-back-circle"],[1,"arrow","right",3,"click"],["name","chevron-forward-circle"],["color","primary",1,"ion-text-uppercase",3,"innerHtml"],["color","primary",3,"innerHtml",4,"ngFor","ngForOf"],[1,"post-info"],["color","secondary","slot","start"],["color","tertiary","slot","end","style","cursor: auto",4,"ngFor","ngForOf"],["color","primary",3,"innerHtml"],["class","video-container",4,"ngFor","ngForOf"],[1,"video-container"],["frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",1,"video",3,"src"],["color","tertiary","slot","end",2,"cursor","auto"]],template:function(t,n){1&t&&(h.Mb(0,"ion-header",0),h.Mb(1,"ion-toolbar"),h.Mb(2,"ion-buttons",1),h.Ib(3,"ion-back-button",2),h.Lb(),h.Mb(4,"ion-title",3),h.mc(5,"Pietro Royalty"),h.Lb(),h.Lb(),h.Lb(),h.Mb(6,"ion-content",4),h.Mb(7,"ion-grid",5),h.Mb(8,"ion-row"),h.Mb(9,"ion-col",6),h.lc(10,M,2,1,"ion-card",7),h.lc(11,C,6,4,"div",8),h.Lb(),h.Mb(12,"ion-col",9),h.lc(13,H,12,8,"ion-card",7),h.Lb(),h.Lb(),h.Lb(),h.Lb()),2&t&&(h.xb(10),h.dc("ngIf",n.post&&1===n.post.images.length),h.xb(1),h.dc("ngIf",n.post&&n.post.images.length>1),h.xb(2),h.dc("ngIf",n.post))},directives:[b.q,b.F,b.h,b.e,b.f,b.D,b.o,b.p,b.y,b.n,s.j,b.i,b.s,b.B,s.i,b.r,b.A,b.k,b.l,b.j,b.u,b.C,b.m],pipes:[s.d,y,f.c],styles:["ion-card[_ngcontent-%COMP%]{padding-top:32px}ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{padding-top:0}ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding-bottom:64px}ion-card[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{display:block;font-size:16px;margin-top:16px}.arrow[_ngcontent-%COMP%]{position:absolute;top:50%;font-size:50px;z-index:2;color:#fff}.arrow.left[_ngcontent-%COMP%]{left:20px}.arrow.right[_ngcontent-%COMP%]{right:20px}.arrow[_ngcontent-%COMP%]:hover{cursor:pointer}.video-container[_ngcontent-%COMP%]{position:relative;width:100%;padding-top:56.25%;margin-top:16px}.video[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;border:0}@media (min-width:768px){ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{padding:0 0 20px}ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding-left:0;padding-right:0}ion-card[_ngcontent-%COMP%]   .post-info[_ngcontent-%COMP%]{margin:0}}"]}),F)}],R=((z=function t(){r(this,t)}).\u0275mod=h.Fb({type:z}),z.\u0275inj=h.Eb({factory:function(t){return new(t||z)},imports:[[d.j.forChild(S)],d.j]}),z),E=((j=function t(){r(this,t)}).\u0275mod=h.Fb({type:j}),j.\u0275inj=h.Eb({factory:function(t){return new(t||j)},imports:[[s.b,l.a,b.G,f.b,u.a,R]]}),j)}}])}();