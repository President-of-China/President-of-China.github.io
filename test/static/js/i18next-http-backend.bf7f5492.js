(self.webpackChunk_lls_web_app=self.webpackChunk_lls_web_app||[]).push([[5528],{5483:function(S,b){var w=typeof self!="undefined"?self:this,v=function(){function d(){this.fetch=!1,this.DOMException=w.DOMException}return d.prototype=w,new d}();(function(d){var N=function(c){var l={searchParams:"URLSearchParams"in d,iterable:"Symbol"in d&&"iterator"in Symbol,blob:"FileReader"in d&&"Blob"in d&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in d,arrayBuffer:"ArrayBuffer"in d};function L(e){return e&&DataView.prototype.isPrototypeOf(e)}if(l.arrayBuffer)var X=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],H=ArrayBuffer.isView||function(e){return e&&X.indexOf(Object.prototype.toString.call(e))>-1};function _(e){if(typeof e!="string"&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function B(e){return typeof e!="string"&&(e=String(e)),e}function A(e){var t={next:function(){var r=e.shift();return{done:r===void 0,value:r}}};return l.iterable&&(t[Symbol.iterator]=function(){return t}),t}function u(e){this.map={},e instanceof u?e.forEach(function(t,r){this.append(r,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}u.prototype.append=function(e,t){e=_(e),t=B(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},u.prototype.delete=function(e){delete this.map[_(e)]},u.prototype.get=function(e){return e=_(e),this.has(e)?this.map[e]:null},u.prototype.has=function(e){return this.map.hasOwnProperty(_(e))},u.prototype.set=function(e,t){this.map[_(e)]=B(t)},u.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},u.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),A(e)},u.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),A(e)},u.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),A(e)},l.iterable&&(u.prototype[Symbol.iterator]=u.prototype.entries);function O(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function R(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function q(e){var t=new FileReader,r=R(t);return t.readAsArrayBuffer(e),r}function j(e){var t=new FileReader,r=R(t);return t.readAsText(e),r}function C(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}function D(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function M(){return this.bodyUsed=!1,this._initBody=function(e){this._bodyInit=e,e?typeof e=="string"?this._bodyText=e:l.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:l.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:l.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():l.arrayBuffer&&l.blob&&L(e)?(this._bodyArrayBuffer=D(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):l.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||H(e))?this._bodyArrayBuffer=D(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||(typeof e=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):l.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},l.blob&&(this.blob=function(){var e=O(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?O(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(q)}),this.text=function(){var e=O(this);if(e)return e;if(this._bodyBlob)return j(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(C(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},l.formData&&(this.formData=function(){return this.text().then(I)}),this.json=function(){return this.text().then(JSON.parse)},this}var F=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function U(e){var t=e.toUpperCase();return F.indexOf(t)>-1?t:e}function E(e,t){t=t||{};var r=t.body;if(e instanceof E){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new u(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!r&&e._bodyInit!=null&&(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new u(t.headers)),this.method=U(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}E.prototype.clone=function(){return new E(this,{body:this._bodyInit})};function I(e){var t=new FormData;return e.trim().split("&").forEach(function(r){if(r){var n=r.split("="),o=n.shift().replace(/\+/g," "),i=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(o),decodeURIComponent(i))}}),t}function x(e){var t=new u,r=e.replace(/\r?\n[\t ]+/g," ");return r.split(/\r?\n/).forEach(function(n){var o=n.split(":"),i=o.shift().trim();if(i){var f=o.join(":").trim();t.append(i,f)}}),t}M.call(E.prototype);function m(e,t){t||(t={}),this.type="default",this.status=t.status===void 0?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new u(t.headers),this.url=t.url||"",this._initBody(e)}M.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},m.error=function(){var e=new m(null,{status:0,statusText:""});return e.type="error",e};var k=[301,302,303,307,308];m.redirect=function(e,t){if(k.indexOf(t)===-1)throw new RangeError("Invalid status code");return new m(null,{status:t,headers:{location:e}})},c.DOMException=d.DOMException;try{new c.DOMException}catch(e){c.DOMException=function(t,r){this.message=t,this.name=r;var n=Error(t);this.stack=n.stack},c.DOMException.prototype=Object.create(Error.prototype),c.DOMException.prototype.constructor=c.DOMException}function s(e,t){return new Promise(function(r,n){var o=new E(e,t);if(o.signal&&o.signal.aborted)return n(new c.DOMException("Aborted","AbortError"));var i=new XMLHttpRequest;function f(){i.abort()}i.onload=function(){var a={status:i.status,statusText:i.statusText,headers:x(i.getAllResponseHeaders()||"")};a.url="responseURL"in i?i.responseURL:a.headers.get("X-Request-URL");var y="response"in i?i.response:i.responseText;r(new m(y,a))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.onabort=function(){n(new c.DOMException("Aborted","AbortError"))},i.open(o.method,o.url,!0),o.credentials==="include"?i.withCredentials=!0:o.credentials==="omit"&&(i.withCredentials=!1),"responseType"in i&&l.blob&&(i.responseType="blob"),o.headers.forEach(function(a,y){i.setRequestHeader(y,a)}),o.signal&&(o.signal.addEventListener("abort",f),i.onreadystatechange=function(){i.readyState===4&&o.signal.removeEventListener("abort",f)}),i.send(typeof o._bodyInit=="undefined"?null:o._bodyInit)})}return s.polyfill=!0,d.fetch||(d.fetch=s,d.Headers=u,d.Request=E,d.Response=m),c.Headers=u,c.Request=E,c.Response=m,c.fetch=s,Object.defineProperty(c,"__esModule",{value:!0}),c}({})})(v),v.fetch.ponyfill=!0,delete v.fetch.polyfill;var p=v;b=p.fetch,b.default=p.fetch,b.fetch=p.fetch,b.Headers=p.Headers,b.Request=p.Request,b.Response=p.Response,S.exports=b},49656:(S,b,w)=>{var v;if(typeof fetch=="function"&&(typeof w.g!="undefined"&&w.g.fetch?v=w.g.fetch:typeof window!="undefined"&&window.fetch&&(v=window.fetch)),typeof window=="undefined"||typeof window.document=="undefined"){var p=v||w(5483);p.default&&(p=p.default),b.default=p,S.exports=b.default}},1391:(S,b,w)=>{"use strict";w.d(b,{Z:()=>k});function v(s){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?v=function(t){return typeof t}:v=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(s)}var p=[],d=p.forEach,N=p.slice;function c(s){return d.call(N.call(arguments,1),function(e){if(e)for(var t in e)s[t]===void 0&&(s[t]=e[t])}),s}function l(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest=="undefined"?"undefined":v(XMLHttpRequest))==="object"}function L(s){return!!s&&typeof s.then=="function"}function X(s){return L(s)?s:Promise.resolve(s)}var H=w(49656),_=w.t(H,2),B=w(23716);function A(s){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?A=function(t){return typeof t}:A=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(s)}var u;typeof fetch=="function"&&(typeof global!="undefined"&&global.fetch?u=global.fetch:typeof window!="undefined"&&window.fetch&&(u=window.fetch));var O;l&&(typeof global!="undefined"&&global.XMLHttpRequest?O=global.XMLHttpRequest:typeof window!="undefined"&&window.XMLHttpRequest&&(O=window.XMLHttpRequest));var R;typeof ActiveXObject=="function"&&(typeof global!="undefined"&&global.ActiveXObject?R=global.ActiveXObject:typeof window!="undefined"&&window.ActiveXObject&&(R=window.ActiveXObject)),!u&&_&&!O&&!R&&(u=H||_),typeof u!="function"&&(u=void 0);var q=function(e,t){if(t&&A(t)==="object"){var r="";for(var n in t)r+="&"+encodeURIComponent(n)+"="+encodeURIComponent(t[n]);if(!r)return e;e=e+(e.indexOf("?")!==-1?"&":"?")+r.slice(1)}return e},j=function(e,t,r,n){e.queryStringParams&&(t=q(t,e.queryStringParams));var o=c({},typeof e.customHeaders=="function"?e.customHeaders():e.customHeaders);r&&(o["Content-Type"]="application/json"),u(t,c({method:r?"POST":"GET",body:r?e.stringify(r):void 0,headers:o},typeof e.requestOptions=="function"?e.requestOptions(r):e.requestOptions)).then(function(i){if(!i.ok)return n(i.statusText||"Error",{status:i.status});i.text().then(function(f){n(null,{status:i.status,data:f})}).catch(n)}).catch(n)},C=function(e,t,r,n){r&&A(r)==="object"&&(r=q("",r).slice(1)),e.queryStringParams&&(t=q(t,e.queryStringParams));try{var o;O?o=new O:o=new R("MSXML2.XMLHTTP.3.0"),o.open(r?"POST":"GET",t,1),e.crossDomain||o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.withCredentials=!!e.withCredentials,r&&o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.overrideMimeType&&o.overrideMimeType("application/json");var i=e.customHeaders;if(i=typeof i=="function"?i():i,i)for(var f in i)o.setRequestHeader(f,i[f]);o.onreadystatechange=function(){o.readyState>3&&n(o.status>=400?o.statusText:null,{status:o.status,data:o.responseText})},o.send(r)}catch(a){B&&B.log(a)}},D=function(e,t,r,n){if(typeof r=="function"&&(n=r,r=void 0),n=n||function(){},u)return j(e,t,r,n);if(l||typeof ActiveXObject=="function")return C(e,t,r,n)};const M=D;function F(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function U(s,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(s,r.key,r)}}function E(s,e,t){return e&&U(s.prototype,e),t&&U(s,t),s}function I(s,e,t){return e in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}var x=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",allowMultiLoading:!1,parse:function(t){return JSON.parse(t)},stringify:JSON.stringify,parsePayload:function(t,r,n){return I({},r,n||"")},request:M,reloadInterval:typeof window!="undefined"?!1:60*60*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},m=function(){function s(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};F(this,s),this.services=e,this.options=t,this.allOptions=r,this.type="backend",this.init(e,t,r)}return E(s,[{key:"init",value:function(t){var r=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=t,this.options=c(n,this.options||{},x()),this.allOptions=o,this.services&&this.options.reloadInterval&&setInterval(function(){return r.reload()},this.options.reloadInterval)}},{key:"readMulti",value:function(t,r,n){this._readAny(t,t,r,r,n)}},{key:"read",value:function(t,r,n){this._readAny([t],t,[r],r,n)}},{key:"_readAny",value:function(t,r,n,o,i){var f=this,a=this.options.loadPath;typeof this.options.loadPath=="function"&&(a=this.options.loadPath(t,n)),a=X(a),a.then(function(y){var h=f.services.interpolator.interpolate(y,{lng:t.join("+"),ns:n.join("+")});f.loadUrl(h,i,r,o)})}},{key:"loadUrl",value:function(t,r,n,o){var i=this;this.options.request(this.options,t,void 0,function(f,a){if(a&&(a.status>=500&&a.status<600||!a.status))return r("failed loading "+t+"; status code: "+a.status,!0);if(a&&a.status>=400&&a.status<500)return r("failed loading "+t+"; status code: "+a.status,!1);if(!a&&f&&f.message&&f.message.indexOf("Failed to fetch")>-1)return r("failed loading "+t+": "+f.message,!0);if(f)return r(f,!1);var y,h;try{typeof a.data=="string"?y=i.options.parse(a.data,n,o):y=a.data}catch(g){h="failed parsing "+t+" to json"}if(h)return r(h,!1);r(null,y)})}},{key:"create",value:function(t,r,n,o,i){var f=this;if(!!this.options.addPath){typeof t=="string"&&(t=[t]);var a=this.options.parsePayload(r,n,o),y=0,h=[],g=[];t.forEach(function(P){var T=f.options.addPath;typeof f.options.addPath=="function"&&(T=f.options.addPath(P,r));var G=f.services.interpolator.interpolate(T,{lng:P,ns:r});f.options.request(f.options,G,a,function(V,W){y+=1,h.push(V),g.push(W),y===t.length&&i&&i(h,g)})})}}},{key:"reload",value:function(){var t=this,r=this.services,n=r.backendConnector,o=r.languageUtils,i=r.logger,f=n.language;if(!(f&&f.toLowerCase()==="cimode")){var a=[],y=function(g){var P=o.toResolveHierarchy(g);P.forEach(function(T){a.indexOf(T)<0&&a.push(T)})};y(f),this.allOptions.preload&&this.allOptions.preload.forEach(function(h){return y(h)}),a.forEach(function(h){t.allOptions.ns.forEach(function(g){n.read(h,g,"read",null,null,function(P,T){P&&i.warn("loading namespace ".concat(g," for language ").concat(h," failed"),P),!P&&T&&i.log("loaded namespace ".concat(g," for language ").concat(h),T),n.loaded("".concat(h,"|").concat(g),P,T)})})})}}}]),s}();m.type="backend";const k=m}}]);
