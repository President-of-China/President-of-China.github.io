(self.webpackChunk_lls_web_app=self.webpackChunk_lls_web_app||[]).push([[8217],{77160:function(F){(function(p,u){F.exports=u()})(this,function(){return function(p){var u={};function l(a){if(u[a])return u[a].exports;var n=u[a]={i:a,l:!1,exports:{}};return p[a].call(n.exports,n,n.exports,l),n.l=!0,n.exports}return l.m=p,l.c=u,l.d=function(a,n,i){l.o(a,n)||Object.defineProperty(a,n,{enumerable:!0,get:i})},l.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},l.t=function(a,n){if(1&n&&(a=l(a)),8&n||4&n&&typeof a=="object"&&a&&a.__esModule)return a;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:a}),2&n&&typeof a!="string")for(var c in a)l.d(i,c,function(e){return a[e]}.bind(null,c));return i},l.n=function(a){var n=a&&a.__esModule?function(){return a.default}:function(){return a};return l.d(n,"a",n),n},l.o=function(a,n){return Object.prototype.hasOwnProperty.call(a,n)},l.p="",l(l.s=90)}({17:function(p,u,l){"use strict";u.__esModule=!0,u.default=void 0;var a=l(18),n=function(){function i(){}return i.getFirstMatch=function(c,e){var t=e.match(c);return t&&t.length>0&&t[1]||""},i.getSecondMatch=function(c,e){var t=e.match(c);return t&&t.length>1&&t[2]||""},i.matchAndReturnConst=function(c,e,t){if(c.test(e))return t},i.getWindowsVersionName=function(c){switch(c){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},i.getMacOSVersionName=function(c){var e=c.split(".").splice(0,2).map(function(t){return parseInt(t,10)||0});if(e.push(0),e[0]===10)switch(e[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},i.getAndroidVersionName=function(c){var e=c.split(".").splice(0,2).map(function(t){return parseInt(t,10)||0});if(e.push(0),!(e[0]===1&&e[1]<5))return e[0]===1&&e[1]<6?"Cupcake":e[0]===1&&e[1]>=6?"Donut":e[0]===2&&e[1]<2?"Eclair":e[0]===2&&e[1]===2?"Froyo":e[0]===2&&e[1]>2?"Gingerbread":e[0]===3?"Honeycomb":e[0]===4&&e[1]<1?"Ice Cream Sandwich":e[0]===4&&e[1]<4?"Jelly Bean":e[0]===4&&e[1]>=4?"KitKat":e[0]===5?"Lollipop":e[0]===6?"Marshmallow":e[0]===7?"Nougat":e[0]===8?"Oreo":e[0]===9?"Pie":void 0},i.getVersionPrecision=function(c){return c.split(".").length},i.compareVersions=function(c,e,t){t===void 0&&(t=!1);var r=i.getVersionPrecision(c),h=i.getVersionPrecision(e),o=Math.max(r,h),s=0,d=i.map([c,e],function(f){var g=o-i.getVersionPrecision(f),v=f+new Array(g+1).join(".0");return i.map(v.split("."),function(M){return new Array(20-M.length).join("0")+M}).reverse()});for(t&&(s=o-Math.min(r,h)),o-=1;o>=s;){if(d[0][o]>d[1][o])return 1;if(d[0][o]===d[1][o]){if(o===s)return 0;o-=1}else if(d[0][o]<d[1][o])return-1}},i.map=function(c,e){var t,r=[];if(Array.prototype.map)return Array.prototype.map.call(c,e);for(t=0;t<c.length;t+=1)r.push(e(c[t]));return r},i.find=function(c,e){var t,r;if(Array.prototype.find)return Array.prototype.find.call(c,e);for(t=0,r=c.length;t<r;t+=1){var h=c[t];if(e(h,t))return h}},i.assign=function(c){for(var e,t,r=c,h=arguments.length,o=new Array(h>1?h-1:0),s=1;s<h;s++)o[s-1]=arguments[s];if(Object.assign)return Object.assign.apply(Object,[c].concat(o));var d=function(){var f=o[e];typeof f=="object"&&f!==null&&Object.keys(f).forEach(function(g){r[g]=f[g]})};for(e=0,t=o.length;e<t;e+=1)d();return c},i.getBrowserAlias=function(c){return a.BROWSER_ALIASES_MAP[c]},i.getBrowserTypeByAlias=function(c){return a.BROWSER_MAP[c]||""},i}();u.default=n,p.exports=u.default},18:function(p,u,l){"use strict";u.__esModule=!0,u.ENGINE_MAP=u.OS_MAP=u.PLATFORMS_MAP=u.BROWSER_MAP=u.BROWSER_ALIASES_MAP=void 0,u.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},u.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},u.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},u.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},u.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(p,u,l){"use strict";u.__esModule=!0,u.default=void 0;var a,n=(a=l(91))&&a.__esModule?a:{default:a},i=l(18);function c(t,r){for(var h=0;h<r.length;h++){var o=r[h];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var e=function(){function t(){}var r,h,o;return t.getParser=function(s,d){if(d===void 0&&(d=!1),typeof s!="string")throw new Error("UserAgent should be a string");return new n.default(s,d)},t.parse=function(s){return new n.default(s).getResult()},r=t,o=[{key:"BROWSER_MAP",get:function(){return i.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return i.ENGINE_MAP}},{key:"OS_MAP",get:function(){return i.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return i.PLATFORMS_MAP}}],(h=null)&&c(r.prototype,h),o&&c(r,o),t}();u.default=e,p.exports=u.default},91:function(p,u,l){"use strict";u.__esModule=!0,u.default=void 0;var a=t(l(92)),n=t(l(93)),i=t(l(94)),c=t(l(95)),e=t(l(17));function t(h){return h&&h.__esModule?h:{default:h}}var r=function(){function h(s,d){if(d===void 0&&(d=!1),s==null||s==="")throw new Error("UserAgent parameter can't be empty");this._ua=s,this.parsedResult={},d!==!0&&this.parse()}var o=h.prototype;return o.getUA=function(){return this._ua},o.test=function(s){return s.test(this._ua)},o.parseBrowser=function(){var s=this;this.parsedResult.browser={};var d=e.default.find(a.default,function(f){if(typeof f.test=="function")return f.test(s);if(f.test instanceof Array)return f.test.some(function(g){return s.test(g)});throw new Error("Browser's test function is not valid")});return d&&(this.parsedResult.browser=d.describe(this.getUA())),this.parsedResult.browser},o.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},o.getBrowserName=function(s){return s?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},o.getBrowserVersion=function(){return this.getBrowser().version},o.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},o.parseOS=function(){var s=this;this.parsedResult.os={};var d=e.default.find(n.default,function(f){if(typeof f.test=="function")return f.test(s);if(f.test instanceof Array)return f.test.some(function(g){return s.test(g)});throw new Error("Browser's test function is not valid")});return d&&(this.parsedResult.os=d.describe(this.getUA())),this.parsedResult.os},o.getOSName=function(s){var d=this.getOS().name;return s?String(d).toLowerCase()||"":d||""},o.getOSVersion=function(){return this.getOS().version},o.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},o.getPlatformType=function(s){s===void 0&&(s=!1);var d=this.getPlatform().type;return s?String(d).toLowerCase()||"":d||""},o.parsePlatform=function(){var s=this;this.parsedResult.platform={};var d=e.default.find(i.default,function(f){if(typeof f.test=="function")return f.test(s);if(f.test instanceof Array)return f.test.some(function(g){return s.test(g)});throw new Error("Browser's test function is not valid")});return d&&(this.parsedResult.platform=d.describe(this.getUA())),this.parsedResult.platform},o.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},o.getEngineName=function(s){return s?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},o.parseEngine=function(){var s=this;this.parsedResult.engine={};var d=e.default.find(c.default,function(f){if(typeof f.test=="function")return f.test(s);if(f.test instanceof Array)return f.test.some(function(g){return s.test(g)});throw new Error("Browser's test function is not valid")});return d&&(this.parsedResult.engine=d.describe(this.getUA())),this.parsedResult.engine},o.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},o.getResult=function(){return e.default.assign({},this.parsedResult)},o.satisfies=function(s){var d=this,f={},g=0,v={},M=0;if(Object.keys(s).forEach(function(m){var b=s[m];typeof b=="string"?(v[m]=b,M+=1):typeof b=="object"&&(f[m]=b,g+=1)}),g>0){var _=Object.keys(f),S=e.default.find(_,function(m){return d.isOS(m)});if(S){var w=this.satisfies(f[S]);if(w!==void 0)return w}var A=e.default.find(_,function(m){return d.isPlatform(m)});if(A){var P=this.satisfies(f[A]);if(P!==void 0)return P}}if(M>0){var O=Object.keys(v),y=e.default.find(O,function(m){return d.isBrowser(m,!0)});if(y!==void 0)return this.compareVersion(v[y])}},o.isBrowser=function(s,d){d===void 0&&(d=!1);var f=this.getBrowserName().toLowerCase(),g=s.toLowerCase(),v=e.default.getBrowserTypeByAlias(g);return d&&v&&(g=v.toLowerCase()),g===f},o.compareVersion=function(s){var d=[0],f=s,g=!1,v=this.getBrowserVersion();if(typeof v=="string")return s[0]===">"||s[0]==="<"?(f=s.substr(1),s[1]==="="?(g=!0,f=s.substr(2)):d=[],s[0]===">"?d.push(1):d.push(-1)):s[0]==="="?f=s.substr(1):s[0]==="~"&&(g=!0,f=s.substr(1)),d.indexOf(e.default.compareVersions(v,f,g))>-1},o.isOS=function(s){return this.getOSName(!0)===String(s).toLowerCase()},o.isPlatform=function(s){return this.getPlatformType(!0)===String(s).toLowerCase()},o.isEngine=function(s){return this.getEngineName(!0)===String(s).toLowerCase()},o.is=function(s,d){return d===void 0&&(d=!1),this.isBrowser(s,d)||this.isOS(s)||this.isPlatform(s)},o.some=function(s){var d=this;return s===void 0&&(s=[]),s.some(function(f){return d.is(f)})},h}();u.default=r,p.exports=u.default},92:function(p,u,l){"use strict";u.__esModule=!0,u.default=void 0;var a,n=(a=l(17))&&a.__esModule?a:{default:a},i=/version\/(\d+(\.?_?\d+)+)/i,c=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=n.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=n.default.getFirstMatch(i,e)||n.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=n.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=n.default.getFirstMatch(i,e)||n.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=n.default.getFirstMatch(i,e)||n.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=n.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=n.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=n.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=n.default.getFirstMatch(i,e)||n.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(e){var t={name:"Opera Touch"},r=n.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=n.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=n.default.getFirstMatch(i,e)||n.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=n.default.getFirstMatch(i,e)||n.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=n.default.getFirstMatch(i,e)||n.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=n.default.getFirstMatch(i,e)||n.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=n.default.getFirstMatch(i,e)||n.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=n.default.getFirstMatch(i,e)||n.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=n.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=n.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=n.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},r=n.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=n.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=n.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=n.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=n.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=n.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=n.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=n.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=n.default.getFirstMatch(i,e)||n.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=n.default.getFirstMatch(i,e)||n.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=n.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=n.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=n.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=n.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe:function(e){var t={name:"Electron"},r=n.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MiuiBrowser/i],describe:function(e){var t={name:"Miui"},r=n.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=n.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=n.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},r=n.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},r=n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=n.default.getFirstMatch(i,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){var t=e.search("\\(")!==-1?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:n.default.getFirstMatch(t,e),version:n.default.getSecondMatch(t,e)}}}];u.default=c,p.exports=u.default},93:function(p,u,l){"use strict";u.__esModule=!0,u.default=void 0;var a,n=(a=l(17))&&a.__esModule?a:{default:a},i=l(18),c=[{test:[/Roku\/DVP/],describe:function(e){var t=n.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:i.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=n.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:i.OS_MAP.WindowsPhone,version:t}}},{test:[/windows /i],describe:function(e){var t=n.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=n.default.getWindowsVersionName(t);return{name:i.OS_MAP.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(e){var t={name:i.OS_MAP.iOS},r=n.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return r&&(t.version=r),t}},{test:[/macintosh/i],describe:function(e){var t=n.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=n.default.getMacOSVersionName(t),h={name:i.OS_MAP.MacOS,version:t};return r&&(h.versionName=r),h}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=n.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:i.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=n.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=n.default.getAndroidVersionName(t),h={name:i.OS_MAP.Android,version:t};return r&&(h.versionName=r),h}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=n.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:i.OS_MAP.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=n.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||n.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||n.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:i.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=n.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:i.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=n.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:i.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:i.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:i.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=n.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:i.OS_MAP.PlayStation4,version:t}}}];u.default=c,p.exports=u.default},94:function(p,u,l){"use strict";u.__esModule=!0,u.default=void 0;var a,n=(a=l(17))&&a.__esModule?a:{default:a},i=l(18),c=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=n.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:i.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:i.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:i.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:i.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:i.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:i.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:i.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=n.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:i.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:i.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:i.PLATFORMS_MAP.mobile}}},{test:function(e){return e.getBrowserName(!0)==="blackberry"},describe:function(){return{type:i.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return e.getBrowserName(!0)==="bada"},describe:function(){return{type:i.PLATFORMS_MAP.mobile}}},{test:function(e){return e.getBrowserName()==="windows phone"},describe:function(){return{type:i.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return e.getOSName(!0)==="android"&&t>=3},describe:function(){return{type:i.PLATFORMS_MAP.tablet}}},{test:function(e){return e.getOSName(!0)==="android"},describe:function(){return{type:i.PLATFORMS_MAP.mobile}}},{test:function(e){return e.getOSName(!0)==="macos"},describe:function(){return{type:i.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return e.getOSName(!0)==="windows"},describe:function(){return{type:i.PLATFORMS_MAP.desktop}}},{test:function(e){return e.getOSName(!0)==="linux"},describe:function(){return{type:i.PLATFORMS_MAP.desktop}}},{test:function(e){return e.getOSName(!0)==="playstation 4"},describe:function(){return{type:i.PLATFORMS_MAP.tv}}},{test:function(e){return e.getOSName(!0)==="roku"},describe:function(){return{type:i.PLATFORMS_MAP.tv}}}];u.default=c,p.exports=u.default},95:function(p,u,l){"use strict";u.__esModule=!0,u.default=void 0;var a,n=(a=l(17))&&a.__esModule?a:{default:a},i=l(18),c=[{test:function(e){return e.getBrowserName(!0)==="microsoft edge"},describe:function(e){if(/\sedg\//i.test(e))return{name:i.ENGINE_MAP.Blink};var t=n.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:i.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:i.ENGINE_MAP.Trident},r=n.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:i.ENGINE_MAP.Presto},r=n.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:i.ENGINE_MAP.Gecko},r=n.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:i.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:i.ENGINE_MAP.WebKit},r=n.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];u.default=c,p.exports=u.default}})})}}]);
