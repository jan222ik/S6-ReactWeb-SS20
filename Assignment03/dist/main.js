var EntryPoint=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(o,a),o.locals?o.locals:{});e.exports=i},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function u(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],c=t.base?a[0]+t.base:a[0],s=n[c]||0,l="".concat(c," ").concat(s);n[c]=s+1;var d=u(l),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:l,updater:g(f,t),references:1}),r.push(l)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function v(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function g(e,t){var n,r,o;if(t.singleton){var a=m++;n=p||(p=s(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=s(t),r=v.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=u(n[r]);i[o].references--}for(var a=c(e,t),s=0;s<n.length;s++){var l=u(n[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=a}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"body{background:#212121}nav{width:100vw;background:#212121;top:0;height:4vh;position:fixed}nav button{float:right;margin-top:1vh;margin-right:10vw}nav button:last-of-type{margin-right:10px}button{background:#0d7377;border-radius:25px;border-width:0;transition-duration:0.4s;outline:none;color:#111}button:hover{background:#14ffec}.gone{display:none}.container{margin:4vh 5vw 0}.msg{background:#323232;border-radius:25px;padding-left:25px;padding-right:25px;padding-bottom:10px;transition-duration:300ms}.msg h3{padding-top:10px}.msg p{border-radius:25px;padding:5px 10px 10px 25px;margin:0}h3,p{color:#FFF}#totalMessages{color:red}.unread{background:#4c4c4c;transition-duration:300ms}form label{color:#FFF}::-webkit-scrollbar{width:10px}::-webkit-scrollbar-track{background:#212121}::-webkit-scrollbar-thumb{background:#323232}::-webkit-scrollbar-thumb:hover{background:#0d7377}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,u,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";n.r(t),n.d(t,"run",(function(){return v})),n.d(t,"demo",(function(){return c}));n(0);var r,o=function(){function e(e){this._value=e,this.observers=[]}return Object.defineProperty(e.prototype,"value",{get:function(){return this._value},enumerable:!0,configurable:!0}),e.prototype.createObserver=function(e){console.log(e),this.observers.push(e)},e.prototype.update=function(e){var t=this._value;this._value=e,this.notifyObservers(t)},e.prototype.notifyObservers=function(e){var t=this;this.observers.forEach((function(n){n(t._value,e)}))},e}(),a=function(e,t,n){this.msgTitle=e,this.msgBody=t,this.msgRead=new o(!1),this.msgRead.createObserver(n)},i=new o(new Array);function u(e,t){r&&e!=t&&(e?r.update(r.value-1):r.update(r.value+1))}var c=function(e){void 0===e&&(e=10),console.log("Create DemoData");for(var t=new Array(0),n=0;n<e;n++){var r=new a("Msg "+n,"Msg Body "+n,u);t.push(r)}i.update(t)};function s(e){var t=document.getElementById("newMsgLabel"),n=e>5?"5+":e.toString();t.textContent=e<1?"":"("+n+" new)"}function l(){document.getElementById("totalMessages").textContent="You have "+r.value+" unread messages out of "+i.value.length+" messages."}function d(){var e=document.getElementById("message-overview-container");e.innerHTML="",i.value.forEach((function(t){return e.append(function(e){var t=document.createElement("div");t.className="msg"+(e.msgRead.value?"":" unread"),t.addEventListener("click",(function(){console.log("Clicked"),e.msgRead.update(!e.msgRead.value),t.className="msg"+(e.msgRead.value?"":" unread")}));var n=document.createElement("h3");n.textContent=e.msgTitle;var r=document.createElement("p");return r.textContent=e.msgBody,t.append(n,r),t}(t))}))}function f(e){var t=document.getElementById("message-overview-layout"),n=document.getElementById("message-compose-container");e?(n.className="",t.className="gone"):(n.className="gone",t.className="")}var v=function(){console.log("Start Setup"),(r=new o(i.value.filter((function(e){return 1!=e.msgRead.value})).length)).createObserver((function(e){s(e),l()})),i.createObserver((function(){return d()})),s(r.value),l(),d(),document.getElementById("composeForm").addEventListener("submit",(function(e){e.preventDefault();var t=document.getElementById("composeForm"),n=new FormData(t),o=n.get("msgtitle"),c=n.get("msgbody"),s=new a(o,c,u);r.update(r.value+1),i.value.push(s),i.notifyObservers(null),t.reset()})),function(){document.getElementById("messageOverviewBtn").addEventListener("click",(function(){return f(!1)})),document.getElementById("messageComposeBtn").addEventListener("click",(function(){return f(!0)}));var e=new URLSearchParams(window.location.search).get("navTarget");f(e&&"compose"==e)}(),console.log(i)}}]);