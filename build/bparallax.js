parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"HaVE":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function n(){var i=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=o.identifier,a=void 0===r?".parallax-element":r,c=o.strechFactor,l=void 0===c?1:c;if(t(this,n),e(this,"traverseStyle",function(t,e){var n=t.currentStyle||window.getComputedStyle(t);e.style.marginTop="".concat(parseInt(n.marginTop),"px"),e.style.marginLeft="".concat(parseInt(n.marginLeft),"px"),e.style.marginRight="".concat(parseInt(n.marginRight),"px"),e.style.marginBottom="".concat(parseInt(n.marginBottom),"px")}),e(this,"initiateAllElements",function(t){t.forEach(function(t){var e=t.clientHeight,n=t.clientWidth,o=t.parentNode,r=document.createElement("div");r.className="wrapper",i.traverseStyle(t,r),t.style.margin="0px",r.style.height="".concat(e,"px"),r.style.width="".concat(n,"px"),r.style.overflow="hidden",r.style.display="flex",r.style.justifyContent="center",r.style.alignItems="center",t.style.height="".concat(e+e*i.strechFactor,"px"),r.appendChild(t),o.appendChild(r)})}),e(this,"init",function(){if(!window||!document)return console.error("window / document object not found");var t=document.querySelectorAll(i.identifier);if(0!=t.length){var e=window.innerHeight,n=0;i.initiateAllElements(t),window.addEventListener("scroll",function(i){n=window.scrollY,t.forEach(function(t,i){var o=t.offsetTop,r=t.parentNode.clientHeight,a=e-r,c=t.clientHeight-r,l=(n-o)/(c+Math.abs(a));a>c&&(l=(n-o)/a),t.style.transform="translateY(".concat(l*c,"px)")})}),window.addEventListener("resize",function(t){e=window.innerHeight},!1)}}),!window||!document)return console.error("window / document object not found");this.identifier=a,this.strechFactor=l},i=n;exports.default=i;
},{}]},{},["HaVE"], null)
//# sourceMappingURL=/bparallax.js.map