(()=>{var t={n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};(()=>{"use strict";const e=flarum.core.compat["common/app"];var n=t.n(e);const o=flarum.core.compat["extensions/afrux-forum-widgets-core/common/extend/Widgets"];var r=t.n(o);function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}const u=flarum.core.compat["extensions/afrux-forum-widgets-core/common/components/Widget"];var c="liplum-html-widget",l=function(t){function e(){return t.apply(this,arguments)||this}var o,r;r=t,(o=e).prototype=Object.create(r.prototype),o.prototype.constructor=o,i(o,r);var u=e.prototype;return u.className=function(){return"liplum-html-widget"},u.icon=function(){return n().forum.attribute("liplum-html-widget.icon")},u.title=function(){return n().forum.attribute("liplum-html-widget.title")},u.content=function(){return m("div",{id:c})},u.oncreate=function(t){var e=n().forum.attribute("liplum-html-widget.innerHtml"),o=document.getElementById(c);o&&(o.innerHTML=e)},e}(t.n(u)());n().initializers.add("liplum-html-widget",(function(){var t;t=n(),(new(r())).add({key:"liplum-html-widget",component:l,isDisabled:!1,isUnique:!0,placement:"end",position:2}).extend(t,"liplum-html-widget")}))})(),module.exports={}})();
//# sourceMappingURL=forum.js.map