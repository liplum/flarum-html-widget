(()=>{var t={n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};(()=>{"use strict";const e=flarum.core.compat["admin/app"];var n=t.n(e);const r=flarum.core.compat["common/app"];var i=t.n(r);const o=flarum.core.compat["extensions/afrux-forum-widgets-core/common/extend/Widgets"];var a=t.n(o);function l(t,e){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},l(t,e)}const p=flarum.core.compat["extensions/afrux-forum-widgets-core/common/components/Widget"];var u="liplum-html-widget",s=function(t){function e(){return t.apply(this,arguments)||this}var n,r;r=t,(n=e).prototype=Object.create(r.prototype),n.prototype.constructor=n,l(n,r);var o=e.prototype;return o.className=function(){return"liplum-html-widget"},o.icon=function(){return i().forum.attribute("liplum-html-widget.icon")},o.title=function(){return i().forum.attribute("liplum-html-widget.title")},o.content=function(){return m("div",{id:u})},o.oncreate=function(t){var e=i().forum.attribute("liplum-html-widget.innerHtml"),n=document.getElementById(u);n&&(n.innerHTML=e)},e}(t.n(p)()),c="liplum-html-widget";n().initializers.add("liplum-html-widget",(function(){var t;t=i(),(new(a())).add({key:"liplum-html-widget",component:s,isDisabled:!1,isUnique:!0,placement:"end",position:2}).extend(t,"liplum-html-widget"),n().extensionData.for(c).registerSetting({setting:c+".icon",label:n().translator.trans(c+".admin.icon.label"),help:n().translator.trans(c+".admin.icon.help"),type:"text"}).registerSetting({setting:c+".title",label:n().translator.trans(c+".admin.title.label"),help:n().translator.trans(c+".admin.title.help"),type:"text"}).registerSetting((function(){return $("#html-textarea").on("keyup",(function(){var t=$("#html-textarea").val();$("#html-live-preview").attr("srcdoc",""+t)})),m("div",null,m("aside",{class:"html-warning"},n().translator.trans(c+".admin.warning")),m("div",{style:{display:"inline-flex"}},m("textarea",{id:"html-textarea",style:{height:"300px",width:"500px",margin:"0 auto",marginBottom:"50px"},bidi:this.setting(c+".innerHtml")}),m("iframe",{id:"html-live-preview",style:{height:"300px",width:"480px",marginLeft:"8px",border:"0px"}})))}))}))})(),module.exports={}})();
//# sourceMappingURL=admin.js.map