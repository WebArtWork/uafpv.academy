import{a as X}from"./chunk-OK7KD74A.js";import{a as S}from"./chunk-QL6QTVP2.js";import{a as w}from"./chunk-LGXCX2LN.js";import{e as K,f as Q,h as W}from"./chunk-JXIBTGPB.js";import{$ as o,$a as H,A as D,B as E,C as P,J as C,Ja as U,Ka as x,L as s,O as a,P as h,Q as T,U as v,W as c,Xa as L,Y as y,Ya as N,_ as n,aa as m,ab as $,ba as A,ca as j,da as B,ea as _,fa as d,gb as R,i as O,k as I,lb as q,oa as u,pa as b,qa as g,u as k,ub as G,vb as J,wa as V,xa as z,z as F}from"./chunk-YN5RWJ6B.js";function re(e,l){if(e&1&&(n(0,"div"),u(1),o()),e&2){let t=d();s(),g(" \u041F\u0435\u0440\u0435\u0434 \u043F\u0440\u043E\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F\u043C \u0446\u044C\u043E\u0433\u043E \u043A\u0443\u0440\u0441\u0443 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0454\u0442\u044C\u0441\u044F \u0441\u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u043F\u0440\u043E\u0439\u0442\u0438 ",t.scs.doc(t.scs.doc(t.session.course).suggestedCourse).name,", \u0449\u043E\u0431 \u043A\u0440\u0430\u0449\u0435 \u043E\u0437\u043D\u0430\u0439\u043E\u043C\u0438\u0442\u0438\u0441\u044F \u0437 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u043E\u043C. ")}}function ue(e,l){if(e&1&&(n(0,"div"),u(1),o()),e&2){let t=d();s(),g(" \u0414\u043B\u044F \u043F\u0440\u043E\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u0446\u044C\u043E\u0433\u043E \u043A\u0443\u0440\u0441\u0443 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E \u0441\u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438 ",t.scs.doc(t.scs.doc(t.session.course).requiredCourse).name,", \u043E\u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u0432\u0456\u043D \u043C\u0456\u0441\u0442\u0438\u0442\u044C \u0432\u0430\u0436\u043B\u0438\u0432\u0456 \u0431\u0430\u0437\u043E\u0432\u0456 \u0437\u043D\u0430\u043D\u043D\u044F. ")}}function ce(e,l){if(e&1){let t=B();n(0,"wbutton",22),_("click",function(i){return F(t),d().buy(),D(i.stopPropagation())}),u(1),V(2,"translate"),o()}if(e&2){let t=d();s(),g("",t.scs.doc(t.session.course).cost?t.scs.doc(t.session.course).cost+"\u0433\u0440\u043D":z(2,1,"Common.Free")," ")}}var Z=(()=>{class e{constructor(t,r,i,p,f){this._scs=t,this.userService=r,this.scs=i,this._http=p,this._router=f,this.url=$.url}go(){this._router.navigateByUrl(`/course/${this.session.course}/${this.session._id}`)}buy(){this._http.post("/api/school/participate",{session:this.session._id,course:this.session.course},t=>{t&&this._scs.fetch(t).subscribe(()=>{this._router.navigateByUrl("/course/"+t.course)})})}static{this.\u0275fac=function(r){return new(r||e)(a(S),a(w),a(K),a(q),a(L))}}static{this.\u0275cmp=h({type:e,selectors:[["app-session"]],inputs:{session:"session"},standalone:!1,decls:32,vars:8,consts:[[1,"courses-wrapper",3,"click"],[1,"courses-img"],["alt","",3,"src"],[1,"courses-text"],[1,"documents__title"],[1,"documents__description"],[1,"courses-text-author"],[1,"courses-text-author__img","courses-icon"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","version","1.1","viewBox","0 0 24 24",0,"xml","space","preserve",2,"enable-background","new 0 0 24 24"],["id","info"],["id","icons"],["id","user"],["cx","12","cy","8","rx","5","ry","6"],["d","M21.8,19.1c-0.9-1.8-2.6-3.3-4.8-4.2c-0.6-0.2-1.3-0.2-1.8,0.1c-1,0.6-2,0.9-3.2,0.9s-2.2-0.3-3.2-0.9    C8.3,14.8,7.6,14.7,7,15c-2.2,0.9-3.9,2.4-4.8,4.2C1.5,20.5,2.6,22,4.1,22h15.8C21.4,22,22.5,20.5,21.8,19.1z"],[1,"courses-text-author__text"],[1,"courses-text-time"],[1,"courses-text-time__img","courses-icon"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","height","512px","id","Layer_1","version","1.1","viewBox","0 0 512 512","width","512px",0,"xml","space","preserve",2,"enable-background","new 0 0 512 512"],["d","M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M273,273H160v-17h96V128h17   V273z"],[1,"courses-text-time__text"],[4,"ngIf"],["class","courses__btn",3,"click",4,"ngIf"],[1,"courses__btn",3,"click"]],template:function(r,i){r&1&&(n(0,"div",0),_("click",function(){return i.go()}),n(1,"div",1),m(2,"img",2),o(),n(3,"div",3)(4,"div",4),u(5),o(),n(6,"div",5),u(7),o(),n(8,"div",6)(9,"div",7),E(),n(10,"svg",8),m(11,"g",9),n(12,"g",10)(13,"g",11),m(14,"ellipse",12)(15,"path",13),o()()()(),P(),n(16,"div",14),u(17," \u0410\u0432\u0442\u043E\u0440 \u043A\u0443\u0440\u0441\u0443: "),n(18,"span"),u(19),o()()(),n(20,"div",15)(21,"div",16),E(),n(22,"svg",17)(23,"g"),m(24,"path",18),o()()(),P(),n(25,"div",19),u(26," \u0422\u0440\u0430\u0432\u0430\u043B\u0456\u0441\u0442\u044C: "),n(27,"span"),u(28),o()()(),v(29,re,2,1,"div",20)(30,ue,2,1,"div",20)(31,ce,3,3,"wbutton",21),o()()),r&2&&(s(2),c("src",i.url+i.scs.doc(i.session.course).thumb,C),s(3),b(i.scs.doc(i.session.course).name),s(2),g(" ",i.scs.doc(i.session.course).description," "),s(12),b(i.userService.doc(i.scs.doc(i.session.course).author).name),s(9),g("",i.scs.doc(i.session.course).duration," \u0433\u043E\u0434."),s(),c("ngIf",i.scs.doc(i.session.course).suggestedCourse),s(),c("ngIf",i.scs.doc(i.session.course).requiredCourse),s(),c("ngIf",i.userService.user.email))},dependencies:[x,J,G],styles:[".courses-wrapper[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap}.courses-img[_ngcontent-%COMP%]{max-width:250px;height:200px}.courses-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:10px}.courses-text[_ngcontent-%COMP%]{flex:1 0;padding-left:30px}.courses-text-author[_ngcontent-%COMP%], .courses-text-lessons[_ngcontent-%COMP%], .courses-text-time[_ngcontent-%COMP%]{display:flex;align-items:center}.courses__btn[_ngcontent-%COMP%]{max-width:230px;width:100%;display:block}.courses-icon[_ngcontent-%COMP%]{width:26px;height:26px}.courses-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%;fill:#c4a459}.courses-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#c4a459}.courses-text-author[_ngcontent-%COMP%], .courses-text-lessons[_ngcontent-%COMP%], .courses-text-time[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:7px}.courses-text-author__img[_ngcontent-%COMP%], .courses-text-lessons__img[_ngcontent-%COMP%], .courses-text-time__img[_ngcontent-%COMP%]{margin-right:10px}.courses-text-author__text[_ngcontent-%COMP%], .courses-text-lessons__text[_ngcontent-%COMP%], .courses-text-time__text[_ngcontent-%COMP%]{color:var(--course-trigger);font-weight:600}.courses-text-author__text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .courses-text-lessons__text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .courses-text-time__text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--c-text-primary)}@media screen and (max-width: 767px){.courses-wrapper[_ngcontent-%COMP%]{display:flex;flex-flow:column wrap}.courses-text[_ngcontent-%COMP%]{flex:0 0 100%;padding-left:0}.courses-img[_ngcontent-%COMP%]{max-width:250px;margin:0 auto 0 0}.courses-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.documents__title[_ngcontent-%COMP%]{padding:10px 0}}"]})}}return e})();function me(e,l){e&1&&(n(0,"p",17),u(1," \u041F\u0440\u0438\u0434\u0431\u0430\u043D\u0456 \u043A\u0443\u0440\u0441\u0438 "),o())}function le(e,l){if(e&1&&(n(0,"div",18),m(1,"app-certificate",19),o()),e&2){let t=l.$implicit;s(),c("certificate",t)}}function pe(e,l){if(e&1&&(A(0),v(1,me,2,0,"p",15)(2,le,2,1,"div",16),j()),e&2){let t=d();s(),c("ngIf",t.certificates.length),s(),c("ngForOf",t.certificates)}}function de(e,l){e&1&&(n(0,"p",17),u(1," \u041A\u0443\u043F\u0438\u0442\u0438 \u043A\u0443\u0440\u0441 "),o())}function _e(e,l){if(e&1&&(n(0,"div",18),m(1,"app-session",20),o()),e&2){let t=l.$implicit;s(),c("session",t)}}var ee=(()=>{class e{constructor(t,r,i,p){this._sss=t,this._scs=r,this.userService=i,this._core=p,this.isMenuOpen=!1,this.sessions=[],this.certificates=[],I([O(this._sss.get({},{name:"public",callback:f=>{this.sessions=f}})),O(this._core.onComplete("schoolcertificate_loaded"))]).subscribe(()=>{this.certificates=this._scs.schoolcertificatesByAuthorstatus[this.userService.user._id+"Pending"]||[];let f=this.certificates.map(M=>M.course);this.sessions=this.sessions.filter(M=>!f.includes(M.course))})}back(){window.history.back()}static{this.\u0275fac=function(r){return new(r||e)(a(X),a(S),a(w),a(R))}}static{this.\u0275cmp=h({type:e,selectors:[["ng-component"]],standalone:!1,decls:19,vars:8,consts:[[1,"documents-wrapper"],[1,"documents-container"],[1,"documents-list"],[1,"documents-header"],[1,"documents-header-left"],[1,"documents-header-left__arrow",3,"click"],[1,"material-icons"],["routerLink","/profile",1,"documents-header-left__avatar"],["alt","",3,"src"],[1,"documents-header__title"],[1,"burger-wrap",3,"click"],[1,"burger"],[1,"documents-main","documents-main--nobar"],[1,"documents-main-content"],[4,"ngIf"],["class","course__title",4,"ngIf"],["class","documents-main-row",4,"ngFor","ngForOf"],[1,"course__title"],[1,"documents-main-row"],[3,"certificate"],[3,"session"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),_("click",function(){return i.back()}),n(6,"span",6),u(7,"arrow_back_ios"),o()(),n(8,"div",7),m(9,"img",8),o()(),n(10,"div",9),u(11,"\u041A\u0443\u0440\u0441\u0438"),o(),n(12,"div",10),_("click",function(){return i.isMenuOpen=!i.isMenuOpen}),m(13,"div",11),o()(),n(14,"div",12)(15,"div",13),v(16,pe,3,2,"ng-container",14)(17,de,2,0,"p",15)(18,_e,2,1,"div",16),o()()()()()),r&2&&(y("documents-wrapper--open",i.isMenuOpen),s(9),c("src",i.userService.thumb,C),s(4),y("burger--close",i.isMenuOpen),s(3),c("ngIf",i.userService.user.email),s(),c("ngIf",i.sessions.length),s(),c("ngForOf",i.sessions))},dependencies:[N,U,x,Q,Z],styles:[".course__title[_ngcontent-%COMP%]{font-size:22px;font-weight:700;color:var(--c-text-primary)}"]})}}return e})();var ge=[{path:"",component:ee}],Ie=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=T({type:e})}static{this.\u0275inj=k({imports:[H.forChild(ge),W]})}}return e})();export{Ie as CoursesModule};
