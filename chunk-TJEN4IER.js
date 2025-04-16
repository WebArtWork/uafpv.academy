import{h as U}from"./chunk-JXIBTGPB.js";import{$ as u,$a as V,A as _,Ab as z,Bb as B,Cb as R,L as v,O as c,P as b,Q as k,U as y,W as T,_ as f,aa as w,cb as W,da as x,db as j,ea as I,eb as N,fa as M,mb as P,oa as C,qa as S,ra as F,sa as A,sb as D,ta as L,u as g,z as d,zb as E}from"./chunk-YN5RWJ6B.js";function Y(s,h){if(s&1&&C(0),s&2){let o=h.$implicit;S(" ",o.components==null?null:o.components.length," ")}}function G(s,h){if(s&1){let o=x();f(0,"label",3)(1,"input",4),I("ngModelChange",function(){let m=d(o).$implicit,l=M();return _(l.changeStatus(m))}),L("ngModelChange",function(m){let l=d(o).$implicit;return A(l.active,m)||(l.active=m),_(m)}),u(),w(2,"span",5),f(3,"span",6),C(4,"Active"),u()()}if(s&2){let o=h.$implicit;v(),F("ngModel",o.active)}}var $=(()=>{class s{get rows(){return this._cfs.customforms}constructor(o,n,m,l){this._translate=o,this._cfs=n,this._alert=m,this._form=l,this.columns=["formId","components","active"],this.form=this._form.getForm("form",{formId:"form",title:"Custom form",components:[{name:"Text",key:"title",focused:!0,fields:[{name:"Placeholder",value:"fill title"},{name:"Label",value:"Title"}]},{name:"Select",key:"formId",fields:[{name:"Placeholder",value:"Select form id"},{name:"Label",value:"Form ID"},{name:"Items",value:this._form.formIds}]}]}),this.components=[],this.formComponents=this._form.getForm("formComponents",{formId:"formComponents",title:"Custom components",components:[{components:this.components},{name:"Select",key:"addComponent",fields:[{name:"Placeholder",value:"Select form componnet"},{name:"Label",value:"Form Component"},{name:"Value",value:"name",skipTranslation:!0},{name:"Items",value:this._form.getTemplateComponentsNames()}]}]}),this.config={create:()=>{this._form.modal(this.form,{label:"Create",click:(t,i)=>{this._cfs.create(t,{callback:i.bind(this)})}}).then(this._cfs.create.bind(this))},update:t=>{this._form.modal(this.form,{label:"Update",click:(i,p)=>{this._cfs.update(i,{callback:p.bind(this)})}},t).then(this._cfs.update.bind(this))},delete:t=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this user?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._cfs.delete(t)}}]})},buttons:[{icon:"text_fields",click:t=>{console.log(this.formComponents),this.components.splice(0,this.components.length);let i={addComponent:"Text"};t.components=t.components||[];for(let e=t.components.length-1;e>=0;e--){let a=this._form.getTemplateFields(t.components[e].name);t.components[e].fields=t.components[e].fields.filter(r=>a.includes(r.name));for(let r of a)t.components[e].fields.find(q=>q.name===r)||t.components[e].fields.push({value:"",name:r});i["key"+e]=t.components[e].key;for(let r of t.components[e].fields)i[r.name+e]=r.value}let p=e=>{this.components.splice(e,1),t.components.splice(e,1),this._cfs.updateAfterWhile(t)};(t.components||[]).forEach(e=>{this.components.push(this._addCustomComponent(e.name,this.components.length,p))}),this._form.modal(this.formComponents,{label:"Add component",click:()=>{let e=i.addComponent;this.components.push(this._addCustomComponent(e,this.components.length,p)),t.components.push({name:i.addComponent,fields:this._form.getTemplateFields(e).map(a=>({value:"",name:a}))})}},i,()=>{},{size:"big"}).then(()=>{for(let e=0;e<t.components.length;e++){t.components[e].key=i["key"+e];for(let a of t.components[e].fields)a.value=i[a.name+e]}this._cfs.updateAfterWhile(t)})}}]}}_addCustomComponent(o,n,m){let l=this._form.getTemplateFields(o).map(i=>({name:this._form.getCustomTemplateFields(o)[i]||"Text",key:i+n,fields:[{name:"Placeholder",value:"fill "+i},{name:"Label",value:i.charAt(0).toUpperCase()+i.slice(1,i.length)}]}));return{class:"d-f mt10",components:[{name:"Text",key:"key"+n,fields:[{name:"Placeholder",value:"fill key"},{name:"Label",value:"Key"}]},...l,{name:"Button",fields:[{name:"Label",value:"Remove"},{name:"Click",value:()=>{m(n)}}]}]}}changeStatus(o){setTimeout(()=>{if(o.active)for(let n of this._cfs.customforms)n._id===o._id||n.formId!==o.formId||n.active&&(n.active=!1,this._cfs.updateAfterWhile(n));this._cfs.updateAfterWhile(o)})}static{this.\u0275fac=function(n){return new(n||s)(c(D),c(B),c(P),c(R))}}static{this.\u0275cmp=b({type:s,selectors:[["ng-component"]],standalone:!1,decls:3,vars:3,consts:[["title","Forms Customization",3,"columns","config","rows"],["cell","components"],["cell","active"],[1,"container-box"],["type","checkbox",1,"w-input__checkbox",3,"ngModelChange","ngModel"],[1,"checkmark"],[1,"checkmark-text"]],template:function(n,m){n&1&&(f(0,"wtable",0),y(1,Y,1,1,"ng-template",1)(2,G,5,1,"ng-template",2),u()),n&2&&T("columns",m.columns)("config",m.config)("rows",m.rows)},dependencies:[W,j,N,z,E],encapsulation:2})}}return s})();var H=[{path:"",component:$}],me=(()=>{class s{static{this.\u0275fac=function(n){return new(n||s)}}static{this.\u0275mod=k({type:s})}static{this.\u0275inj=g({imports:[V.forChild(H),U]})}}return s})();export{me as CustomformsModule};
