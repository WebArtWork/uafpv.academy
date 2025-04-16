import{a as S}from"./chunk-LGXCX2LN.js";import{h as k}from"./chunk-JXIBTGPB.js";import{$a as p,Ab as C,Cb as g,O as r,P as m,Q as u,W as d,aa as f,gb as _,mb as v,nb as y,sb as b,t as c,u as h}from"./chunk-YN5RWJ6B.js";var w={formId:"school",title:"School",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill schools title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill schools description"},{name:"Label",value:"Description"}]},{name:"Text",key:"city",fields:[{name:"Placeholder",value:"fill schools city"},{name:"Label",value:"City"}]},{name:"Text",key:"address",fields:[{name:"Placeholder",value:"fill schools address"},{name:"Label",value:"Address"}]},{name:"Text",key:"phone",fields:[{name:"Placeholder",value:"fill schools phone"},{name:"Label",value:"Phone"}]},{name:"Text",key:"email",fields:[{name:"Placeholder",value:"fill schools email"},{name:"Label",value:"Email"}]},{name:"Text",key:"year",fields:[{name:"Placeholder",value:"fill schools year"},{name:"Label",value:"Year"}]},{name:"Text",key:"signature",fields:[{name:"Placeholder",value:"fill schools signature"},{name:"Label",value:"Signature"}]},{name:"Text",key:"curency",fields:[{name:"Placeholder",value:"fill schools curency"},{name:"Label",value:"Curency"}]},{name:"Select",key:"type",fields:[{name:"Items",value:["Offline","Online"]},{name:"Placeholder",value:"choose schools type"},{name:"Label",value:"Type"},{name:"Multiple",value:!1}]}]};var T=(()=>{class t extends y{constructor(){super({name:"school"}),this.schools=this.getDocs(),this.get()}static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var I=(()=>{class t{get rows(){return this._schoolService.schools}constructor(i,s,o,l,n,F){this._translate=i,this._schoolService=s,this._alert=o,this._form=l,this._core=n,this._us=F,this.columns=["name","city"],this.form=this._form.getForm("school",w),this.config={create:this._us.role("admin")||this._us.role("schoolowner")?()=>{this._form.modal(this.form,{label:"Create",click:(e,a)=>{this._preCreate(e),this._schoolService.create(e),a()}})}:null,update:this._us.role("admin")||this._us.role("schoolowner")?e=>{this._form.modal(this.form,[],e).then(a=>{this._core.copy(a,e),this._schoolService.update(e)})}:null,delete:this._us.role("admin")||this._us.role("schoolowner")?e=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this school?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._schoolService.delete(e)}}]})}:null,buttons:[{icon:"cloud_download",click:e=>{this._form.modalUnique("school","url",e)}},{icon:"auto_stories",hrefFunc:e=>this._roleUrl()+"levels/"+e._id},{icon:"menu_book",hrefFunc:e=>this._roleUrl()+"courses/"+e._id},{icon:"assignment",hrefFunc:e=>this._roleUrl()+"tests/school/"+e._id},{icon:"card_membership",hrefFunc:e=>this._roleUrl()+"certificates/school/"+e._id}],headerButtons:[this._us.role("admin")||this._us.role("schoolowner")?{icon:"playlist_add",click:this._bulkManagement(),class:"playlist"}:null,this._us.role("admin")||this._us.role("schoolowner")?{icon:"edit_note",click:this._bulkManagement(!1),class:"edit"}:null]}}_bulkManagement(i=!0){return()=>{this._form.modalDocs(i?[]:this.rows).then(s=>{if(i)for(let o of s)this._preCreate(o),this._schoolService.create(o);else{for(let o of this.rows)s.find(l=>l._id===o._id)||this._schoolService.delete(o);for(let o of s){let l=this.rows.find(n=>n._id===o._id);l?(this._core.copy(o,l),this._schoolService.update(l)):(this._preCreate(o),this._schoolService.create(o))}}})}}_preCreate(i){delete i.__created}_roleUrl(){return this._us.role("admin")?"/admin/":this._us.role("schoolowner")?"/owner/":this._us.role("schoolteacher")?"/teacher/":"/"}static{this.\u0275fac=function(s){return new(s||t)(r(b),r(T),r(v),r(g),r(_),r(S))}}static{this.\u0275cmp=m({type:t,selectors:[["ng-component"]],standalone:!1,decls:1,vars:3,consts:[["title","Schools",3,"columns","config","rows"]],template:function(s,o){s&1&&f(0,"wtable",0),s&2&&d("columns",o.columns)("config",o.config)("rows",o.rows)},dependencies:[C],encapsulation:2})}}return t})();var P=[{path:"",component:I}],z=(()=>{class t{static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275mod=u({type:t})}static{this.\u0275inj=h({imports:[p.forChild(P),k]})}}return t})();export{z as SchoolsModule};
