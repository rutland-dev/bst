(()=>{"use strict";var t={426:(t,e,r)=>{r.d(e,{Z:()=>s});var n=r(537),o=r.n(n),i=r(645),a=r.n(i)()(o());a.push([t.id,"body {\n    background-color: rgba(0, 0, 0, .9);\n    color: antiquewhite;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,mCAAmC;IACnC,mBAAmB;AACvB",sourcesContent:["body {\n    background-color: rgba(0, 0, 0, .9);\n    color: antiquewhite;\n}"],sourceRoot:""}]);const s=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);n&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},537:t=>{t.exports=function(t){var e=t[1],r=t[3];if(!r)return e;if("function"==typeof btoa){var n=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},379:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var i={},a=[],s=0;s<t.length;s++){var c=t[s],l=n.base?c[0]+n.base:c[0],u=i[l]||0,f="".concat(l," ").concat(u);i[l]=u+1;var d=r(f),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(h);else{var p=o(h,n);n.byIndex=s,e.splice(s,0,{identifier:f,updater:p,references:1})}a.push(f)}return a}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var i=n(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=r(i[a]);e[s].references--}for(var c=n(t,o),l=0;l<i.length;l++){var u=r(i[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=c}}},569:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},334:(t,e,r)=>{function n(t){if(t.length<2)return t;const e=Math.floor(t.length/2),r=t.slice(0,e),o=t.slice(e);return((t,e)=>{const r=[];for(;t.length&&e.length;)t[0]<e[0]?r.push(t.shift()):t[0]>e[0]?r.push(e.shift()):(r.push(t.shift()),e.shift());for(;t.length;)r.push(t.shift());for(;e.length;)r.push(e.shift());return r})(n(r),n(o))}r.d(e,{Z:()=>n})},424:(t,e,r)=>{r.d(e,{Z:()=>n});class n{constructor(t){this.data=t,this.left=null,this.right=null}}},205:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(424),o=r(334);class i{constructor(t){this.sortedArray=(0,o.Z)(t),this.root=this.buildTree(this.sortedArray,0,this.sortedArray.length-1)}buildTree(t,e,r){if(e>r)return null;const o=Math.floor((e+r)/2),i=new n.Z(t[o]);return i.left=this.buildTree(t,e,o-1),i.right=this.buildTree(t,o+1,r),i}insert(t,e){return null==e?new n.Z(t):(t<e.data?e.left=this.insert(t,e.left):e.right=this.insert(t,e.right),e)}delete(t,e){if(null==e)return e;if(t<e.data)return e.left=this.delete(t,e.left),e;if(t>e.data)return e.right=this.delete(t,e.right),e;if(null==e.left){const t=e.right;return e=null,t}if(null==e.right){const t=e.left;return e=null,t}let r=e,n=e.right;for(;null!=n.left;)r=n,n=n.left;return r!==e?r.left=n.right:r.right=n.right,e.data=n.data,r=null,e}find(t,e){return t===e.data?e:t<e.data?this.find(t,e.left):t>e.data?this.find(t,e.right):null}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.nc=void 0,(()=>{var t=r(379),e=r.n(t),n=r(795),o=r.n(n),i=r(569),a=r.n(i),s=r(565),c=r.n(s),l=r(216),u=r.n(l),f=r(589),d=r.n(f),h=r(426),p={};p.styleTagTransform=d(),p.setAttributes=c(),p.insert=a().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=u(),e()(h.Z,p),h.Z&&h.Z.locals&&h.Z.locals;const v=new(r(205).Z)([1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20,21]),g=(t,e="",r=!0)=>{null!==t&&(null!==t.right&&g(t.right,`${e}${r?"│   ":"    "}`,!1),console.log(`${e}${r?"└── ":"┌── "}${t.data}`),null!==t.left&&g(t.left,`${e}${r?"    ":"│   "}`,!0))};g(v.root),g(v.root=v.insert(14,v.root)),g(v.root=v.delete(12,v.root)),console.log(v.find(14,v.root))})()})();
//# sourceMappingURL=index.bundle.js.map