(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{qmPg:function(t,n,i){"use strict";i.r(n),i.d(n,"BlogPageModule",(function(){return v}));var e=i("ofXK"),o=i("3Pt+"),c=i("TEn/"),r=i("sYmb"),s=i("PCNd"),l=i("tyNb"),b=i("i9vM"),a=i("fXoL"),u=i("EnSQ");function d(t,n){if(1&t){const t=a.Nb();a.Mb(0,"ion-chip",14),a.Ub("click",(function(){return a.gc(t),a.Wb(2).removeTextFilter()})),a.Mb(1,"ion-label"),a.mc(2),a.Lb(),a.Ib(3,"ion-icon",15),a.Lb()}if(2&t){const t=a.Wb(2);a.xb(2),a.oc('"',t.filter.text,'"')}}function f(t,n){if(1&t){const t=a.Nb();a.Mb(0,"ion-chip",14),a.Ub("click",(function(){a.gc(t);const i=n.$implicit;return a.Wb(2).removeTagFilter(i.name)})),a.Mb(1,"ion-label"),a.mc(2),a.Xb(3,"translate"),a.Lb(),a.Ib(4,"ion-icon",15),a.Lb()}if(2&t){const t=n.$implicit;a.xb(2),a.nc(a.Yb(3,1,t.label))}}function p(t,n){if(1&t&&(a.Mb(0,"ion-row"),a.Mb(1,"ion-col"),a.Mb(2,"p",11),a.lc(3,d,4,1,"ion-chip",12),a.lc(4,f,5,3,"ion-chip",13),a.Lb(),a.Lb(),a.Lb()),2&t){const t=a.Wb();a.xb(3),a.dc("ngIf",t.filter.text),a.xb(1),a.dc("ngForOf",t.filter.selectedTags)}}function g(t,n){if(1&t){const t=a.Nb();a.Mb(0,"ion-chip",23),a.Ub("click",(function(i){a.gc(t);const e=n.$implicit;return a.Wb(2).filterByTag(e.name,i)})),a.mc(1),a.Xb(2,"translate"),a.Lb()}if(2&t){const t=n.$implicit;a.xb(1),a.nc(a.Yb(2,1,t.label))}}const h=function(t){return["/",t]};function M(t,n){if(1&t&&(a.Mb(0,"ion-col",16),a.Mb(1,"a",17),a.Mb(2,"ion-card"),a.Ib(3,"ion-img",18),a.Mb(4,"ion-card-header"),a.Ib(5,"ion-card-title",19),a.Lb(),a.Mb(6,"div",20),a.Mb(7,"ion-label",21),a.mc(8),a.Xb(9,"date"),a.Lb(),a.Mb(10,"div"),a.lc(11,g,3,3,"ion-chip",22),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb()),2&t){const t=n.$implicit,i=a.Wb();a.xb(1),a.dc("routerLink",a.ec(10,h,t.id)),a.xb(2),a.dc("src",t.imageSrc),a.xb(2),a.dc("innerHtml",t.title,a.hc),a.xb(3),a.nc(a.ac(9,5,t.date,"mediumDate","",i.locale)),a.xb(3),a.dc("ngForOf",t.tags)}}const m=[{path:"",component:(()=>{class t extends b.a{constructor(t,n,i,e,o,c,r){super(n,t,i,e,o,c,r),this.menuCtrl=t,this.platform=n,this.alertCtrl=i,this.toastCtrl=e,this.loadingCtrl=o,this.translateService=c,this.dataService=r}ngOnInit(){this.postsSubscription=this.dataService.postsObservable.subscribe(t=>{this.posts=t.filter(t=>!t.preview)}),this.filterSubscription=this.dataService.filterObservable.subscribe(t=>this.filter=t)}ngOnDestroy(){this.postsSubscription&&this.postsSubscription.unsubscribe(),this.filterSubscription&&this.filterSubscription.unsubscribe()}get locale(){return this.dataService.locale}filterByTag(t,n){this.filter.setTagSelection(t,!0),this.dataService.reloadPosts(),n.preventDefault(),n.stopPropagation()}removeTagFilter(t){this.filter.setTagSelection(t,!1),this.dataService.reloadPosts()}removeTextFilter(){this.filter.clearText(),this.dataService.reloadPosts()}refresh(t){this.dataService.reloadPosts(),t.target.complete()}}return t.\u0275fac=function(n){return new(n||t)(a.Hb(c.J),a.Hb(c.K),a.Hb(c.b),a.Hb(c.O),a.Hb(c.I),a.Hb(r.d),a.Hb(u.a))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-blog"]],features:[a.ub],decls:16,vars:5,consts:[[1,"header"],["slot","start"],[3,"click"],["slot","icon-only","name","menu-outline"],["slot","end"],["slot","icon-only","name","search-outline"],["color","tertiary",1,"ion-text-center","ion-text-uppercase"],["fullscreen","true","scrollEvents","false"],["fixed","true"],[4,"ngIf"],["size","12","sizeMd","6","sizeLg","4","sizeXl","3",4,"ngFor","ngForOf"],[1,"filter"],["outline","","color","tertiary",3,"click",4,"ngIf"],["outline","","color","tertiary",3,"click",4,"ngFor","ngForOf"],["outline","","color","tertiary",3,"click"],["name","close-circle"],["size","12","sizeMd","6","sizeLg","4","sizeXl","3"],[3,"routerLink"],[1,"clickable",3,"src"],["color","primary",1,"ion-text-uppercase","clickable",3,"innerHtml"],[1,"post-info","bottom-positioned"],["color","secondary","slot","start"],["color","tertiary","slot","end",3,"click",4,"ngFor","ngForOf"],["color","tertiary","slot","end",3,"click"]],template:function(t,n){1&t&&(a.Mb(0,"ion-header",0),a.Mb(1,"ion-toolbar"),a.Mb(2,"ion-buttons",1),a.Mb(3,"ion-button",2),a.Ub("click",(function(){return n.openMainMenu()})),a.Ib(4,"ion-icon",3),a.Lb(),a.Lb(),a.Mb(5,"ion-buttons",4),a.Mb(6,"ion-button",2),a.Ub("click",(function(){return n.openSearchMenu()})),a.Ib(7,"ion-icon",5),a.Lb(),a.Lb(),a.Mb(8,"ion-title",6),a.mc(9),a.Xb(10,"translate"),a.Lb(),a.Lb(),a.Lb(),a.Mb(11,"ion-content",7),a.Mb(12,"ion-grid",8),a.lc(13,p,5,2,"ion-row",9),a.Mb(14,"ion-row"),a.lc(15,M,12,12,"ion-col",10),a.Lb(),a.Lb(),a.Lb()),2&t&&(a.xb(9),a.nc(a.Yb(10,3,"title")),a.xb(4),a.dc("ngIf",null==n.filter?null:n.filter.active),a.xb(2),a.dc("ngForOf",n.posts))},directives:[c.q,c.F,c.h,c.g,c.r,c.D,c.o,c.p,e.j,c.y,e.i,c.n,c.m,c.u,l.j,c.M,c.i,c.s,c.k,c.l],pipes:[r.c,e.d],styles:["a[_ngcontent-%COMP%]{text-decoration:none;z-index:1}a[_ngcontent-%COMP%]:hover > ion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{color:var(--ion-color-secondary)}post-info[_ngcontent-%COMP%]{z-index:2}ion-card[_ngcontent-%COMP%]{height:100%;padding-bottom:48px}ion-card[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{text-decoration:none}ion-card[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover   ion-card-title[_ngcontent-%COMP%]{color:var(--ion-color-secondary)}"]}),t})()}];let L=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(n){return new(n||t)},imports:[[l.k.forChild(m)],l.k]}),t})(),v=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(n){return new(n||t)},imports:[[e.b,o.a,c.G,r.b,s.a,L]]}),t})()}}]);