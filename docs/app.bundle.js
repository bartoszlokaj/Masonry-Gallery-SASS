!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){var o,i;function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */!function(s,a){"use strict";o=[n(1)],void 0===(i=function(t){return function(t,e){var n=t.jQuery,o=t.console;function i(t,e){for(var n in e)t[n]=e[n];return t}var s=Array.prototype.slice;function a(t,e,c){if(!(this instanceof a))return new a(t,e,c);var u,h=t;("string"==typeof t&&(h=document.querySelectorAll(t)),h)?(this.elements=(u=h,Array.isArray(u)?u:"object"==r(u)&&"number"==typeof u.length?s.call(u):[u]),this.options=i({},this.options),"function"==typeof e?c=e:i(this.options,e),c&&this.on("always",c),this.getImages(),n&&(this.jqDeferred=new n.Deferred),setTimeout(this.check.bind(this))):o.error("Bad element for imagesLoaded "+(h||t))}a.prototype=Object.create(e.prototype),a.prototype.options={},a.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},a.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&c[e]){for(var n=t.querySelectorAll("img"),o=0;o<n.length;o++){var i=n[o];this.addImage(i)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(o=0;o<r.length;o++){var s=r[o];this.addElementBackgroundImages(s)}}}};var c={1:!0,9:!0,11:!0};function u(t){this.img=t}function h(t,e){this.url=t,this.element=e,this.img=new Image}return a.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var n=/url\((['"])?(.*?)\1\)/gi,o=n.exec(e.backgroundImage);null!==o;){var i=o&&o[2];i&&this.addBackground(i,t),o=n.exec(e.backgroundImage)}},a.prototype.addImage=function(t){var e=new u(t);this.images.push(e)},a.prototype.addBackground=function(t,e){var n=new h(t,e);this.images.push(n)},a.prototype.check=function(){var t=this;function e(e,n,o){setTimeout((function(){t.progress(e,n,o)}))}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach((function(t){t.once("progress",e),t.check()})):this.complete()},a.prototype.progress=function(t,e,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&o&&o.log("progress: "+n,t,e)},a.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},u.prototype=Object.create(e.prototype),u.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},u.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},u.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},u.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},u.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},u.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},u.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},h.prototype=Object.create(u.prototype),h.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},h.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},h.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},a.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((n=e).fn.imagesLoaded=function(t,e){return new a(this,t,e).jqDeferred.promise(n(this))})},a.makeJQueryPlugin(),a}(s,t)}.apply(e,o))||(t.exports=i)}("undefined"!=typeof window?window:this)},function(t,e,n){var o,i;"undefined"!=typeof window&&window,void 0===(i="function"==typeof(o=function(){"use strict";function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var n=this._events=this._events||{},o=n[t]=n[t]||[];return-1==o.indexOf(e)&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var n=this._onceEvents=this._onceEvents||{};return(n[t]=n[t]||{})[e]=!0,this}},e.off=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){var o=n.indexOf(e);return-1!=o&&n.splice(o,1),this}},e.emitEvent=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){n=n.slice(0),e=e||[];for(var o=this._onceEvents&&this._onceEvents[t],i=0;i<n.length;i++){var r=n[i];o&&o[r]&&(this.off(t,r),delete o[r]),r.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t})?o.call(e,n,e,t):o)||(t.exports=i)},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=function(){var t=document.querySelector("#current");document.querySelectorAll(".tile").forEach((function(e){e.addEventListener("click",(function(){var n=e.firstChild.src;t.src=n}))}))};o();var i=function(){var t=document.querySelectorAll(".tile"),e=document.querySelector(".backdrop"),n=document.querySelector(".modal"),o=document.querySelector(".close");t.forEach((function(t){t.addEventListener("click",(function(){e.style.animation="backdropIn .2s ease-in-out forwards",n.style.animation="modalIn .2s ease-in-out forwards"}))})),e.addEventListener("click",(function(){e.style.animation="backdropOut .2s ease-in-out forwards",n.style.animation="modalOut .2s ease-in-out forwards"})),o.addEventListener("click",(function(){e.style.animation="backdropOut .2s ease-in-out forwards",n.style.animation="modalOut .2s ease-in-out forwards"}))};i();var r=n(0),s=function(t,e,n,o,i,r){console.log("hello from masonry");var s,a=document.querySelector(t),c=document.querySelectorAll(e),u=c.length,h=0;for(s=0;s<u;++s)h+=c[s].offsetHeight+parseInt(n);window.screen.width>=1024?a.style.height=h/o+h/(u+1)+"px":window.screen.width<1024&&window.screen.width>=768?a.style.height=h/i+h/(u+1)+"px":a.style.height=h/r+h/(u+1)+"px"};["resize","load"].forEach((function(t){window.addEventListener(t,(function(){r(document.querySelector(".grid"),(function(){s(".grid",".tile",5,3,2,1)}))}))}));n(2);console.log("Hello from app.js")}]);