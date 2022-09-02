"use strict";(self.webpackChunk_lls_web_app=self.webpackChunk_lls_web_app||[]).push([[7944],{13592:(re,B,I)=>{I.d(B,{Db:()=>X,$G:()=>K,Zh:()=>ae});var P=I(2784),ie=I(12897),Z=I(9249),$=I(87371),E=I(37584),O={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},C,k,M=P.createContext();function se(e){k=e}function W(){return k}function Y(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};O=(0,E.Z)({},O,e)}function G(){return O}var J=function(){function e(){(0,Z.Z)(this,e),this.usedNamespaces={}}return(0,$.Z)(e,[{key:"addUsedNamespaces",value:function(a){var r=this;a.forEach(function(i){r.usedNamespaces[i]||(r.usedNamespaces[i]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function Q(e){C=e}function A(){return C}var X={type:"3rdParty",init:function(t){Y(t.options.react),Q(t)}};function oe(e){return function(t){return new Promise(function(a){var r=q();e.getInitialProps?e.getInitialProps(t).then(function(i){a(_objectSpread({},i,r))}):a(r)})}}function q(){var e=A(),t=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],a={},r={};return e.languages.forEach(function(i){r[i]={},t.forEach(function(n){r[i][n]=e.getResourceBundle(i,n)||{}})}),a.initialI18nStore=r,a.initialLanguage=e.language,a}var T=I(23716);function _(){if(T&&T.warn){for(var e,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];typeof a[0]=="string"&&(a[0]="react-i18next:: ".concat(a[0])),(e=T).warn.apply(e,a)}}var L={};function U(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];typeof t[0]=="string"&&L[t[0]]||(typeof t[0]=="string"&&(L[t[0]]=new Date),_.apply(void 0,t))}function F(e,t,a){e.loadNamespaces(t,function(){if(e.isInitialized)a();else{var r=function i(){setTimeout(function(){e.off("initialized",i)},0),a()};e.on("initialized",r)}})}function ee(e,t){if(!t.languages||!t.languages.length)return U("i18n.languages were undefined or empty",t.languages),!0;var a=t.languages[0],r=t.options?t.options.fallbackLng:!1,i=t.languages[t.languages.length-1];if(a.toLowerCase()==="cimode")return!0;var n=function(f,l){var v=t.services.backendConnector.state["".concat(f,"|").concat(l)];return v===-1||v===2};return!!(t.hasResourceBundle(a,e)||!t.services.backendConnector.backend||n(a,e)&&(!r||n(i,e)))}function te(e){return e.displayName||e.name||(typeof e=="string"&&e.length>0?e:"Unknown")}function N(e){return e&&(e.children||e.props&&e.props.children)}function R(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function ne(e){return Object.prototype.toString.call(e)!=="[object Array]"?!1:e.every(function(t){return React.isValidElement(t)})}function z(e,t,a,r){if(!t)return"";Object.prototype.toString.call(t)!=="[object Array]"&&(t=[t]);var i=r.transKeepBasicHtmlNodesFor||[];return t.forEach(function(n,o){var f="".concat(o);if(typeof n=="string")e="".concat(e).concat(n);else if(N(n)){var l=i.indexOf(n.type)>-1&&Object.keys(n.props).length===1&&typeof N(n)=="string"?n.type:f;n.props&&n.props.i18nIsDynamicList?e="".concat(e,"<").concat(l,"></").concat(l,">"):e="".concat(e,"<").concat(l,">").concat(z("",R(n),o+1,r),"</").concat(l,">")}else if(React.isValidElement(n))i.indexOf(n.type)>-1&&Object.keys(n.props).length===0?e="".concat(e,"<").concat(n.type,"/>"):e="".concat(e,"<").concat(f,"></").concat(f,">");else if(_typeof(n)==="object"){var v=_objectSpread({},n),p=v.format;delete v.format;var u=Object.keys(v);p&&u.length===1?e="".concat(e,"{{").concat(u[0],", ").concat(p,"}}"):u.length===1?e="".concat(e,"{{").concat(u[0],"}}"):warn("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",n)}else warn("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",n)}),e}function D(e,t,a,r){if(t==="")return[];var i=r.transKeepBasicHtmlNodesFor||[],n=t&&new RegExp(i.join("|")).test(t);if(!e&&!n)return[t];var o={};function f(u){Object.prototype.toString.call(u)!=="[object Array]"&&(u=[u]),u.forEach(function(d){typeof d!="string"&&(N(d)?f(R(d)):_typeof(d)==="object"&&!React.isValidElement(d)&&Object.assign(o,d))})}f(e),t=a.services.interpolator.interpolate(t,o,a.language);var l=HTML.parse("<0>".concat(t,"</0>"));function v(u,d){return Object.prototype.toString.call(u)!=="[object Array]"&&(u=[u]),Object.prototype.toString.call(d)!=="[object Array]"&&(d=[d]),d.reduce(function(y,c,b){var S=c.children&&c.children[0]&&c.children[0].content;if(c.type==="tag"){var s=u[parseInt(c.name,10)]||{},g=React.isValidElement(s);if(typeof s=="string")y.push(s);else if(N(s)){var m=R(s),h=v(m,c.children),x=ne(m)&&h.length===0?m:h;s.dummy&&(s.children=x),y.push(React.cloneElement(s,_objectSpread({},s.props,{key:b}),x))}else if(n&&_typeof(s)==="object"&&s.dummy&&!g){var j=v(u,c.children);y.push(React.cloneElement(s,_objectSpread({},s.props,{key:b}),j))}else if(isNaN(c.name)&&r.transSupportBasicHtmlNodes)if(c.voidElement)y.push(React.createElement(c.name,{key:"".concat(c.name,"-").concat(b)}));else{var w=v(u,c.children);y.push(React.createElement(c.name,{key:"".concat(c.name,"-").concat(b)},w))}else if(_typeof(s)==="object"&&!g){var V=c.children[0]?S:null;V&&y.push(V)}else c.children.length===1&&S?y.push(React.cloneElement(s,_objectSpread({},s.props,{key:b}),S)):y.push(s)}else c.type==="text"&&y.push(c.content);return y},[])}var p=v([{dummy:!0,children:e}],l);return R(p[0])}function ue(e){var t=e.children,a=e.count,r=e.parent,i=e.i18nKey,n=e.tOptions,o=e.values,f=e.defaults,l=e.components,v=e.ns,p=e.i18n,u=e.t,d=_objectWithoutProperties(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),y=getHasUsedI18nextProvider()?useContext(I18nContext):{},c=y.i18n,b=p||c||getI18n();if(!b)return warnOnce("You will need pass in an i18next instance by using i18nextReactModule"),t;var S=u||b.t.bind(b),s=_objectSpread({},getDefaults(),b.options&&b.options.react),g=r!==void 0?r:s.defaultTransParent,m=f||z("",t,0,s)||s.transEmptyNodeValue,h=s.hashTransKey,x=i||(h?h(m):m),j=o?{}:{interpolation:{prefix:"#$?",suffix:"?$#"}},w=x?S(x,_objectSpread({},n,o,j,{defaultValue:m,count:a,ns:v})):m;return g?React.createElement(g,d,D(l||t,w,b,s)):D(l||t,w,b,s)}var H=I(2867);function K(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.i18n,r=W()?(0,P.useContext)(M):{},i=r.i18n,n=a||i||A();if(n&&!n.reportNamespaces&&(n.reportNamespaces=new J),!n){U("You will need pass in an i18next instance by using initReactI18next");var o=[function(g){return g},{},!0];return o.t=function(g){return g},o.i18n={},o.ready=!0,o}var f=(0,E.Z)({},G(),n.options.react),l=t.useSuspense,v=l===void 0?f.useSuspense:l,p=e||n.options&&n.options.defaultNS;p=typeof p=="string"?[p]:p||["translation"],n.reportNamespaces.addUsedNamespaces&&n.reportNamespaces.addUsedNamespaces(p);var u=(n.isInitialized||n.initializedStoreOnce)&&p.every(function(g){return ee(g,n)}),d=(0,P.useState)({t:n.getFixedT(null,p[0])}),y=(0,H.Z)(d,2),c=y[0],b=y[1];function S(){b({t:n.getFixedT(null,p[0])})}(0,P.useEffect)(function(){var g=!0,m=f.bindI18n,h=f.bindI18nStore;!u&&!v&&F(n,p,function(){g&&S()});function x(){g&&S()}return m&&n&&n.on(m,x),h&&n&&n.store.on(h,x),function(){g=!1,m&&n&&m.split(" ").forEach(function(j){return n.off(j,x)}),h&&n&&h.split(" ").forEach(function(j){return n.store.off(j,x)})}});var s=[c.t,n,u];if(s.t=c.t,s.i18n=n,s.ready=u,u||!u&&!v)return s;throw new Promise(function(g){F(n,p,function(){S(),g()})})}function ae(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return function(r){function i(n,o){var f=K(e,n),l=(0,H.Z)(f,3),v=l[0],p=l[1],u=l[2],d=(0,E.Z)({},n,{t:v,i18n:p,tReady:u});return t.withRef&&o&&(d.ref=o),P.createElement(r,d)}return i.displayName="withI18nextTranslation(".concat(te(r),")"),t.withRef?P.forwardRef(i):i}}function ce(e){var t=e.ns,a=e.children,r=_objectWithoutProperties(e,["ns","children"]),i=useTranslation(t,r),n=_slicedToArray(i,3),o=n[0],f=n[1],l=n[2];return a(o,{i18n:f,lng:f.language},l)}function le(e){var t=e.i18n,a=e.children;return usedI18nextProvider(!0),React.createElement(I18nContext.Provider,{value:{i18n:t}},a)}function fe(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.i18n,i=getHasUsedI18nextProvider()?useContext(I18nContext):{},n=i.i18n,o=r||n||getI18n();e&&!o.initializedStoreOnce&&(o.services.resourceStore.data=e,o.initializedStoreOnce=!0),t&&!o.initializedLanguageOnce&&(o.changeLanguage(t),o.initializedLanguageOnce=!0)}function pe(){return function(t){function a(r){var i=r.initialI18nStore,n=r.initialLanguage,o=_objectWithoutProperties(r,["initialI18nStore","initialLanguage"]);return useSSR(i,n),React.createElement(t,_objectSpread({},o))}return a.getInitialProps=composeInitialProps(t),a.displayName="withI18nextSSR(".concat(getDisplayName(t),")"),a}}}}]);
