"use strict";(self.webpackChunk_lls_web_app=self.webpackChunk_lls_web_app||[]).push([[4280],{42818:(Ue,Ct,P)=>{P.r(Ct),P.d(Ct,{AssertionError:()=>$,SB1File:()=>Re,ValidationError:()=>Et});class $ extends Error{}class Et extends ${}const y=function(s,t){if(!s)throw new $(t)};y.validate=function(s,t){if(!s)throw new Et(t)};class R{constructor(t,e=0){this.buffer=t,this.position=e,this.uint8a=new Uint8Array(this.buffer)}read(t){const e=t.read(this.uint8a,this.position);return t.size===0?this.position+=t.sizeOf(this.uint8a,this.position):this.position+=t.size,e}readStruct(t){const e=new t(this.uint8a,this.position);return this.position+=t.size,e}resize(t){if(this.buffer.byteLength<t){const e=this.uint8a,r=Math.pow(2,Math.ceil(Math.log(t)/Math.log(2)));this.buffer=new ArrayBuffer(r),this.uint8a=new Uint8Array(this.buffer),this.uint8a.set(e)}}write(t,e){return t.size===0?this.resize(this.position+t.writeSizeOf(e)):this.resize(this.position+t.size),t.write(this.uint8a,this.position,e),t.size===0?this.position+=t.writeSizeOf(this.uint8a,this.position):this.position+=t.size,e}writeStruct(t,e){this.resize(this.position+t.size);const r=Object.assign(new t(this.uint8a,this.position),e);return this.position+=t.size,r}writeBytes(t,e=0,r=t.length){y(t instanceof Uint8Array,"writeBytes must be passed an Uint8Array"),this.resize(this.position+(r-e));for(let n=e;n<r;n++)this.uint8a[this.position+n-e]=t[n];return this.position+=r-e,t}}class St{constructor(t,e=1/0){this.iter=t,this.maxPosition=e}[Symbol.iterator](){return this}next(){return this.iter.stream.position>=this.maxPosition?{value:null,done:!0}:this.iter.next()}}const gt=()=>{throw new Error("Not implemented")},N=(()=>{const s=new Uint16Array(1),t=new Uint8Array(s.buffer);return s[0]=43707,t[0]===187})();class C{constructor({size:t=0,sizeOf:e=()=>t,writeSizeOf:r=gt,toBytes:n=new Uint8Array(1),read:i,write:a=gt}){this.size=t,this.sizeOf=e,this.writeSizeOf=r,this.toBytes=n,this.bytes=new Uint8Array(n.buffer),this.read=i,this.write=a}asPropertyObject(t){const e=this;return{get(){return e.read(this.uint8a,t+this.offset)},set(r){return e.write(this.uint8a,t+this.offset,r)},enumerable:!0}}read(){return null}}const S=new C({size:1,read(s,t){return s[t]},write(s,t,e){return s[t]=e,e}}),yt={size:2,read(s,t){return this.bytes[1]=s[t+0],this.bytes[0]=s[t+1],this.toBytes[0]},write(s,t,e){return this.toBytes[0]=e,s[t+0]=this.bytes[1],s[t+1]=this.bytes[0],e}},bt={size:2,read(s,t){return this.bytes[0]=s[t+0],this.bytes[1]=s[t+1],this.toBytes[0]},write(s,t,e){return this.toBytes[0]=e,s[t+0]=this.bytes[0],s[t+1]=this.bytes[1],e}};let k;N?k=yt:k=bt;const ke=new C(Object.assign({},k,{toBytes:new Uint16Array(1)})),G=new C(Object.assign({},k,{toBytes:new Int16Array(1)})),At={size:4,read(s,t){return this.bytes[3]=s[t+0],this.bytes[2]=s[t+1],this.bytes[1]=s[t+2],this.bytes[0]=s[t+3],this.toBytes[0]},write(s,t,e){return this.toBytes[0]=e,s[t+0]=this.bytes[3],s[t+1]=this.bytes[2],s[t+2]=this.bytes[1],s[t+3]=this.bytes[0],e}},wt={size:4,read(s,t){return this.bytes[0]=s[t+0],this.bytes[1]=s[t+1],this.bytes[2]=s[t+2],this.bytes[3]=s[t+3],this.toBytes[0]},write(s,t,e){return this.toBytes[0]=e,s[t+0]=this.bytes[0],s[t+1]=this.bytes[1],s[t+2]=this.bytes[2],s[t+3]=this.bytes[3],e}};let H;N?H=At:H=wt;const B=new C(Object.assign({},H,{toBytes:new Int32Array(1)})),c=new C(Object.assign({},H,{toBytes:new Uint32Array(1)}));let q;N?q=bt:q=yt;const _=new C(Object.assign({},q,{toBytes:new Uint16Array(1)}));let K;N?K=wt:K=At;const D=new C(Object.assign({},K,{toBytes:new Uint32Array(1)})),kt={size:8,read(s,t){return this.bytes[7]=s[t+0],this.bytes[6]=s[t+1],this.bytes[5]=s[t+2],this.bytes[4]=s[t+3],this.bytes[3]=s[t+4],this.bytes[2]=s[t+5],this.bytes[1]=s[t+6],this.bytes[0]=s[t+7],this.toBytes[0]}},Gt={size:8,read(s,t){return this.bytes[7]=s[t+0],this.bytes[6]=s[t+1],this.bytes[5]=s[t+2],this.bytes[4]=s[t+3],this.bytes[3]=s[t+4],this.bytes[2]=s[t+5],this.bytes[1]=s[t+6],this.bytes[0]=s[t+7],this.toBytes[0]}};let Z;N?Z=kt:Z=Gt;const Ht=new C(Object.assign({},Z,{toBytes:new Float64Array(1)}));class T extends C{constructor(t){super({size:t,read(e,r){let n="";for(let i=0;i<t;i++){const a=e[r+i];y(a<=127,"Non-ascii character in FixedAsciiString"),n+=String.fromCharCode(a)}return n},write(e,r,n){for(let i=0;i<t;i++){const a=n.charCodeAt(i);y(a<=127,"Non-ascii character in FixedAsciiString"),e[r+i]=a}return n}})}}var jt=P(52087);const O=10*1024*1024;let Q;N?Q=new C({size:3,read(s,t){return s[t+0]<<16|s[t+1]<<8|s[t+2]}}):Q=new C({size:3,read(s,t){return s[t+2]<<16|s[t+1]<<8|s[t+0]}});const Tt=new C({sizeOf(s,t){const e=G.read(s,t);return G.size+e},read(s,t){let e=0,r=0;const n=G.read(s,t);for(let i=0;i<n;i++)e=e+r*S.read(s,t++),r*=256;return e}}),It=new C({sizeOf(s,t){const e=c.read(s,t);return c.size+e},read(s,t){const e=c.read(s,t);y(e<O,"asciiString too big"),t+=4;let r="";for(let n=0;n<e;n++)r+=String.fromCharCode(s[t++]);return r}}),Vt=new C({sizeOf(s,t){return c.size+c.read(s,t)},read(s,t){const e=c.read(s,t);return y(e<O,"bytes too big"),t+=c.size,y(e<O,"uint8a array too big"),new Uint8Array(s.buffer,t,e)}}),Yt=new C({sizeOf(s,t){return c.size+c.read(s,t)*2},read(s,t){const e=c.read(s,t);y(e<O,"sound too big"),t+=c.size;const r=e*2;return y(r<O,"uint8a array too big"),new Uint8Array(s.buffer,t,r)}}),Jt=new C({sizeOf(s,t){return c.size+c.read(s,t)*c.size},read(s,t){const e=c.read(s,t);y(e<O,"bitmap too big"),t+=c.size,y(e<O,"uint8a array too big");const r=new Uint32Array(e);for(let n=0;n<e;n++)r[n]=c.read(s,t),t+=c.size;return r}});let tt;typeof TextDecoder=="undefined"?tt=new jt.TextDecoder:tt=new TextDecoder;const Wt=new C({sizeOf(s,t){return c.size+c.read(s,t)},read(s,t){const e=c.read(s,t);return y(e<O,"utf8 too big"),t+=c.size,y(e<O,"uint8a array too big"),tt.decode(new Uint8Array(s.buffer,t,e))}}),Xt=new C({size:4,read(s,t){const e=c.read(s,t),r=255,n=e>>22&255,i=e>>12&255,a=e>>2&255;return(r<<24|n<<16|i<<8|a)>>>0}}),$t=new C({size:5,read(s,t){const e=c.read(s,t),r=S.read(s,t),n=e>>22&255,i=e>>12&255,a=e>>2&255;return(r<<24|n<<16|i<<8|a)>>>0}}),o={NULL:1,TRUE:2,FALSE:3,SMALL_INT:4,SMALL_INT_16:5,LARGE_INT_POSITIVE:6,LARGE_INT_NEGATIVE:7,FLOATING:8,STRING:9,SYMBOL:10,BYTES:11,SOUND:12,BITMAP:13,UTF8:14,ARRAY:20,ORDERED_COLLECTION:21,SET:22,IDENTITY_SET:23,DICTIONARY:24,IDENTITY_DICTIONARY:25,COLOR:30,TRANSLUCENT_COLOR:31,POINT:32,RECTANGLE:33,FORM:34,SQUEAK:35,OBJECT_REF:99,MORPH:100,ALIGNMENT:104,STATIC_STRING:105,UPDATING_STRING:106,SAMPLED_SOUND:109,IMAGE_MORPH:110,SPRITE:124,STAGE:125,WATCHER:155,IMAGE_MEDIA:162,SOUND_MEDIA:164,MULTILINE_STRING:171,WATCHER_READOUT_FRAME:173,WATCHER_SLIDER:174,LIST_WATCHER:175},qt=Object.entries(o).reduce((s,[t,e])=>(s[e]=t,s),{});class et{constructor(t,e){this.classId=t,this.position=e}}const st=s=>typeof s=="object"&&s?s.valueOf():s;class Kt extends et{constructor(t,e,r){super(t,e);this.value=r}valueOf(){return this.value}toJSON(){return this.classId===o.TRANSLUCENT_COLOR||this.classId===o.COLOR?this.value&16777215:this.value}toString(){return this.value}}class A extends et{constructor(t,e,r){super(t,e);this.size=r}}class Ot extends et{constructor(t,e,r){super(t,e);this.index=r}valueOf(){return`Ref(${this.index})`}}class Zt extends A{constructor(t,e){super(t,e,0)}}class mt extends A{constructor(t,e,r,n){super(t,e,n);this.version=r}}class pt{constructor({type:t=Kt,read:e,value:r=e?n=>n.read(e):null}){this.type=t,this.value=r}next(t,e,r){return{value:new this.type(e,r,this.value(t)),done:!1}}}const Bt={[o.NULL]:{value:()=>null},[o.TRUE]:{value:()=>!0},[o.FALSE]:{value:()=>!1},[o.SMALL_INT]:{read:B},[o.SMALL_INT_16]:{read:G},[o.LARGE_INT_POSITIVE]:{read:Tt},[o.LARGE_INT_NEGATIVE]:{read:Tt},[o.FLOATING]:{read:Ht},[o.STRING]:{read:It},[o.SYMBOL]:{read:It},[o.BYTES]:{read:Vt},[o.SOUND]:{read:Yt},[o.BITMAP]:{read:Jt},[o.UTF8]:{read:Wt},[o.ARRAY]:{type:A,read:B},[o.ORDERED_COLLECTION]:{type:A,read:B},[o.SET]:{type:A,read:B},[o.IDENTITY_SET]:{type:A,read:B},[o.DICTIONARY]:{type:A,value:s=>s.read(B)*2},[o.IDENTITY_DICTIONARY]:{type:A,value:s=>s.read(B)*2},[o.COLOR]:{read:Xt},[o.TRANSLUCENT_COLOR]:{read:$t},[o.POINT]:{type:A,value:()=>2},[o.RECTANGLE]:{type:A,value:()=>4},[o.FORM]:{type:A,value:()=>5},[o.SQUEAK]:{type:A,value:()=>6},[o.OBJECT_REF]:{type:Ot,read:Q}},Qt=Array.from({length:256},(s,t)=>Bt[t]?new pt(Bt[t]):null),te=new pt({type:Zt,value:()=>null});class Lt{constructor(t,e){this.buffer=t,this.stream=new R(t,e)}[Symbol.iterator](){return this}next(){if(this.stream.position>=this.stream.uint8a.length)return{value:null,done:!0};const t=this.stream.position,e=this.stream.read(S),r=Qt[e];if(r!==null)return r.next(this.stream,e,t);if(e<o.OBJECT_REF)return te.next(this.stream,e,t);const n=this.stream.read(S),i=this.stream.read(S);return{value:new mt(e,t,n,i),done:!1}}}const ee=s=>s.toLowerCase().replace(/_(\w)/g,([,t])=>t.toUpperCase());class E{constructor({classId:t,version:e,fields:r}){this.classId=t,this.version=e,this.fields=r}get FIELDS(){return[]}get RAW_FIELDS(){return this.fields}string(t){return String(this.fields[t])}number(t){return+this.fields[t]}boolean(t){return!!this.fields[t]}toString(){return this.constructor===E?`${this.constructor.name} ${this.classId} ${qt[this.classId]}`:this.constructor.name}static define(t,e=E){class r extends e{get FIELDS(){return t}static get FIELDS(){return t}}return Object.keys(t).forEach(n=>{const i=t[n];Object.defineProperty(r.prototype,ee(n),{get(){return this.fields[i]}})}),r}}class rt{constructor(){this.bit=new Uint32Array(1),this.crc=0,this.c=0,this.table=[];let t;for(let e=0;e<256;e++){t=e;for(let r=0;r<8;r++)t=t&1?3988292384^t>>>1:t>>>1;this.table[e]=t>>>0}}update(t,e=0,r=t.length){let n=~this.crc>>>0;for(let i=0;i<r;i++)n=n>>>8^this.table[(n^t[e+i])&255];return this.crc=~n>>>0,this}get digest(){return this.crc}}const se=[0,4278190080,4294967295,4286611584,4294901760,4278255360,4278190335,4278255615,4294967040,4294902015,4280295456,4282400832,4284506208,4288651167,4290756543,4292861919,4278716424,4279242768,4279769112,4280821800,4281348144,4281874488,4282927176,4283453520,4283979864,4285032552,4285558896,4286085240,4287072135,4287598479,4288124823,4289177511,4289703855,4290230199,4291282887,4291809231,4292335575,4293388263,4293914607,4294440951,4278190080,4278203136,4278216192,4278229248,4278242304,4278255360,4278190131,4278203187,4278216243,4278229299,4278242355,4278255411,4278190182,4278203238,4278216294,4278229350,4278242406,4278255462,4278190233,4278203289,4278216345,4278229401,4278242457,4278255513,4278190284,4278203340,4278216396,4278229452,4278242508,4278255564,4278190335,4278203391,4278216447,4278229503,4278242559,4278255615,4281532416,4281545472,4281558528,4281571584,4281584640,4281597696,4281532467,4281545523,4281558579,4281571635,4281584691,4281597747,4281532518,4281545574,4281558630,4281571686,4281584742,4281597798,4281532569,4281545625,4281558681,4281571737,4281584793,4281597849,4281532620,4281545676,4281558732,4281571788,4281584844,4281597900,4281532671,4281545727,4281558783,4281571839,4281584895,4281597951,4284874752,4284887808,4284900864,4284913920,4284926976,4284940032,4284874803,4284887859,4284900915,4284913971,4284927027,4284940083,4284874854,4284887910,4284900966,4284914022,4284927078,4284940134,4284874905,4284887961,4284901017,4284914073,4284927129,4284940185,4284874956,4284888012,4284901068,4284914124,4284927180,4284940236,4284875007,4284888063,4284901119,4284914175,4284927231,4284940287,4288217088,4288230144,4288243200,4288256256,4288269312,4288282368,4288217139,4288230195,4288243251,4288256307,4288269363,4288282419,4288217190,4288230246,4288243302,4288256358,4288269414,4288282470,4288217241,4288230297,4288243353,4288256409,4288269465,4288282521,4288217292,4288230348,4288243404,4288256460,4288269516,4288282572,4288217343,4288230399,4288243455,4288256511,4288269567,4288282623,4291559424,4291572480,4291585536,4291598592,4291611648,4291624704,4291559475,4291572531,4291585587,4291598643,4291611699,4291624755,4291559526,4291572582,4291585638,4291598694,4291611750,4291624806,4291559577,4291572633,4291585689,4291598745,4291611801,4291624857,4291559628,4291572684,4291585740,4291598796,4291611852,4291624908,4291559679,4291572735,4291585791,4291598847,4291611903,4291624959,4294901760,4294914816,4294927872,4294940928,4294953984,4294967040,4294901811,4294914867,4294927923,4294940979,4294954035,4294967091,4294901862,4294914918,4294927974,4294941030,4294954086,4294967142,4294901913,4294914969,4294928025,4294941081,4294954137,4294967193,4294901964,4294915020,4294928076,4294941132,4294954188,4294967244,4294902015,4294915071,4294928127,4294941183,4294954239,4294967295],re=[4294967295,4278190080],Rt=new C({sizeOf(s,t){const e=s[t];return e<=223?1:e<=254?2:5},read(s,t){const e=s[t];return e<=223?e:e<=254?(e-224)*256+s[t+1]:c.read(s,t+1)}});class ne{decode(t,e,r,n,i){const a=this.decodePixels(n,r===32);if(r<=8)return i||(i=r===1?re:se),this.unpackPixels(a,t,e,r,i);if(r===16)return this.raster16To32(a,t,e);if(r===32)return a;throw new Error("Unhandled Squeak Image depth.")}decodePixels(t,e){let r;if(Array.isArray(t)||t instanceof Uint32Array){if(r=new Uint32Array(t),e)for(let u=0;u<r.length;u++)r[u]!==0&&(r[u]=4278190080|r[u]);return r}const n=new R(t.buffer,t.byteOffset),i=n.read(Rt);r=new Uint32Array(i);let a=0;for(;a<i;){const u=n.read(Rt),g=u>>2,b=u&3;let h;switch(b){case 0:a+=g;break;case 1:h=n.read(S),h=h<<24|h<<16|h<<8|h,e&&h!==0&&(h|=4278190080);for(let f=0;f<g;f++)r[a++]=h;break;case 2:h=n.read(c),e&&h!==0&&(h|=4278190080);for(let f=0;f<g;f++)r[a++]=h;break;case 3:for(let f=0;f<g;f++)h=n.read(c),e&&h!==0&&(h|=4278190080),r[a++]=h}}return r}unpackPixels(t,e,r,n,i){const a=new Uint32Array(e*r),u=(1<<n)-1,g=32/n;let b=0,h=0;for(let f=0;f<r;f++){let p,I=-1;for(let L=0;L<e;L++)I<0&&(I=n*(g-1),p=t[h++]),a[b++]=i[p>>I&u],I-=n}return a}raster16To32(t,e,r){const n=new Uint32Array(2*t.length);let i,a,u,g=0,b=0;for(let h=0;h<r;h++){i=-1;for(let f=0;f<e;f++){if(i<0&&(i=16,a=t[g++]),u=a>>i&65535,u!==0){const p=u>>7&248,I=u>>2&248,L=u<<3&248;u=4278190080|p<<16|I<<8|L}n[b++]=u,i-=16}}return n}buildCustomColormap(t,e,r){const n=new Uint32Array(1<<t);for(let i=0;i<e.length;i++)n[i]=r[e[i].index-1];return n}}const ie=[7,8,9,10,11,12,13,14,16,17,19,21,23,25,28,31,34,37,41,45,50,55,60,66,73,80,88,97,107,118,130,143,157,173,190,209,230,253,279,307,337,371,408,449,494,544,598,658,724,796,876,963,1060,1166,1282,1411,1552,1707,1878,2066,2272,2499,2749,3024,3327,3660,4026,4428,4871,5358,5894,6484,7132,7845,8630,9493,10442,11487,12635,13899,15289,16818,18500,20350,22385,24623,27086,29794,32767],Fe={2:[-1,2,-1,2],3:[-1,-1,2,4,-1,-1,2,4],4:[-1,-1,-1,-1,2,4,6,8,-1,-1,-1,-1,2,4,6,8],5:[-1,-1,-1,-1,-1,-1,-1,-1,1,2,4,6,8,10,13,16,-1,-1,-1,-1,-1,-1,-1,-1,1,2,4,6,8,10,13,16]};class Nt{constructor(t){this.bitsPerSample=t,this.indexTable=Fe[t],this.signMask=1<<t-1,this.valueMask=this.signMask-1,this.valueHighBit=this.signMask>>1,this.bitPosition=0,this.currentByte=0,this.stream=null,this.end=0}decode(t){this.bitPosition=0,this.currentByte=0,this.stream=new R(t.buffer,t.byteOffset),this.end=t.byteOffset+t.length;const e=Math.floor(t.length*8/this.bitsPerSample),r=new Int16Array(e);let n=0,i=0;for(let a=0;a<e;a++){const u=this.nextCode();y(u>=0,"Ran out of bits in Squeak Sound");let g=ie[i],b=0;for(let h=this.valueHighBit;h>0;h=h>>1)(u&h)!==0&&(b+=g),g=g>>1;b+=g,n+=(u&this.signMask)===0?b:-b,i+=this.indexTable[u],i<0&&(i=0),i>88&&(i=88),n>32767&&(n=32767),n<-32768&&(n=-32768),r[a]=n}return r}nextCode(){let t=this.bitsPerSample,e=t-this.bitPosition,r=e<0?this.currentByte>>-e:this.currentByte<<e;for(;e>0;){if(t-=this.bitPosition,this.end-this.stream.position>0)this.currentByte=this.stream.read(S),this.bitPosition=8;else return this.currentByte=0,this.bitPosition=0,-1;e=t-this.bitPosition,r+=e<0?this.currentByte>>-e:this.currentByte<<e}return this.bitPosition-=t,this.currentByte=this.currentByte&255>>8-this.bitPosition,r}static samples(t,e){return e.length*8/t}}class l{constructor(t=new Uint8Array(this.size),e=0){this.uint8a=t,this.offset=e}equals(t){for(const e in t)if(this[e]!==t[e])return!1;return!0}view(){const t=this.constructor.name,e={toString(){return t}};for(const r in this.shape)e[r]=this[r];return e}static initConstructor(t){return t.size=t.prototype.size,t}static extend(t){const e=class extends l{get shape(){return t}};let r=0;return Object.keys(t).forEach(n=>{if(Object.defineProperty(e.prototype,n,t[n].asPropertyObject(r)),t[n].size===0)throw new Error("Packet cannot be defined with variable sized members.");r+=t[n].size}),e.prototype.size=r,e.size=r,e}}class z extends l.extend({riff:new T(4),length:D,wave:new T(4)}){}l.initConstructor(z);class m extends l.extend({chunkType:new T(4),length:D}){}l.initConstructor(m);class j extends l.extend({format:_,channels:_,sampleRate:D,bytesPerSec:D,blockAlignment:_,bitsPerSample:_}){}l.initConstructor(j);class nt{encode(t,{channels:e=1,sampleRate:r=22050}={}){const n=new Uint8Array(t.buffer,t.byteOffset,t.byteLength),i=z.size+m.size+j.size+m.size+n.length,a=new R(new ArrayBuffer(i));return a.writeStruct(z,{riff:"RIFF",length:i-8,wave:"WAVE"}),a.writeStruct(m,{chunkType:"fmt ",length:j.size}),a.writeStruct(j,{format:1,channels:e,sampleRate:r,bytesPerSec:r*2*e,blockAlignment:e*2,bitsPerSample:16}),a.writeStruct(m,{chunkType:"data",length:i-a.position-m.size}),a.writeBytes(n),a.uint8a}static encode(t,e){return new nt().encode(t,e)}static samples(t){const e=new m(t,z.size).length;return new m(t,z.size+m.size+e).length/2}}var ae=P(32775),_t=P.n(ae);class oe extends E.define({X:0,Y:1}){}class ce extends E.define({X:0,Y:1,X2:2,Y2:3}){get width(){return this.x2-this.x}get height(){return this.y2-this.y}}const he=s=>{for(let t=0;t<s.length;t+=4){const e=s[t+2],r=s[t+0];s[t+2]=r,s[t+0]=e}return s};class V extends E.define({WIDTH:0,HEIGHT:1,DEPTH:2,BYTES:4,COLORMAP:5}){get decoded(){return this._decoded||(this._decoded=he(new Uint8Array(new ne().decode(this.width.value,this.height.value,this.depth.value,this.bytes.value,this.colormap&&this.colormap.map(t=>t.valueOf())).buffer))),this._decoded}get extension(){return"uncompressed"}}class Mt extends E.define({STAGE_CONTENTS:2,OBJ_NAME:6,VARS:7,BLOCKS_BIN:8,IS_CLONE:9,MEDIA:10,CURRENT_COSTUME:11,ZOOM:12,H_PAN:13,V_PAN:14,OBSOLETE_SAVED_STATE:15,SPRITE_ORDER_IN_LIBRARY:16,VOLUME:17,TEMPO_BPM:18,SCENE_STATES:19,LISTS:20}){get spriteOrderInLibrary(){return this.fields[this.FIELDS.SPRITE_ORDER_IN_LIBRARY]||null}get tempoBPM(){return this.fields[this.FIELDS.TEMPO_BPM]||0}get lists(){return this.fields[this.FIELDS.LISTS]||[]}}class it extends E.define({BOX:0,PARENT:1,COLOR:3,VISIBLE:4,OBJ_NAME:6,VARS:7,BLOCKS_BIN:8,IS_CLONE:9,MEDIA:10,CURRENT_COSTUME:11,VISIBILITY:12,SCALE_POINT:13,ROTATION_DEGREES:14,ROTATION_STYLE:15,VOLUME:16,TEMPO_BPM:17,DRAGGABLE:18,SCENE_STATES:19,LISTS:20}){get scratchX(){return this.box.x+this.currentCostume.rotationCenter.x-240}get scratchY(){return 180-(this.box.y+this.currentCostume.rotationCenter.y)}get visible(){return(this.fields[this.FIELDS.VISIBLE]&1)===0}get tempoBPM(){return this.fields[this.FIELDS.TEMPO_BPM]||0}get lists(){return this.fields[this.FIELDS.LISTS]||[]}}class Ge extends E.define({RECTANGLE:0,FONT:8,COLOR:9,LINES:11}){}class Y extends E.define({COSTUME_NAME:0,BITMAP:1,ROTATION_CENTER:2,TEXT_DETAILS:3,BASE_LAYER_DATA:4,OLD_COMPOSITE:5}){get image(){return this.oldComposite instanceof V?this.oldComposite:this.baseLayerData.value?null:this.bitmap}get width(){return this.image===null?-1:this.image.width}get height(){return this.image===null?-1:this.image.height}get rawBytes(){return this.image===null?this.baseLayerData.value.slice():this.image.bytes.value}get decoded(){return this.image===null?this.baseLayerData.value.slice():this.image.decoded}get crc(){if(!this._crc){const t=new rt().update(new Uint8Array(new Uint32Array([this.bitmap.width]).buffer)).update(new Uint8Array(new Uint32Array([this.bitmap.height]).buffer)).update(new Uint8Array(new Uint32Array([this.bitmap.depth]).buffer)).update(this.rawBytes);this._crc=t.digest}return this._crc}get extension(){return this.oldComposite instanceof V?"uncompressed":this.baseLayerData.value?"jpg":"uncompressed"}toString(){return`ImageMediaData "${this.costumeName}"`}}class ue extends E.define({DATA:3,RATE:4}){}const le=s=>{const t=new Uint8Array(s);for(let e=0;e<t.length;e+=2)t[e]=s[e+1],t[e+1]=s[e];return t};class J extends E.define({NAME:0,UNCOMPRESSED:1,RATE:4,BITS_PER_SAMPLE:5,DATA:6}){get rate(){return this.uncompressed.data.value.length!==0?this.uncompressed.rate:this.fields[this.FIELDS.RATE]}get rawBytes(){return this.data&&this.data.value?this.data.value:this.uncompressed.data.value}get decoded(){return this._decoded||(this.data&&this.data.value?this._decoded=new Nt(this.bitsPerSample.value).decode(this.data.value):this._decoded=new Int16Array(le(this.uncompressed.data.value.slice()).buffer)),this._decoded}get crc(){return this._crc||(this._crc=new rt().update(new Uint32Array([this.rate])).update(this.rawBytes).digest),this._crc}get sampleCount(){return this.data&&this.data.value?Nt.samples(this.bitsPerSample.value,this.data.value):this.uncompressed.data.value.length/2}get extension(){return"pcm"}get wavEncodedData(){return this._wavEncodedData||(this._wavEncodedData=new Uint8Array(nt.encode(this.decoded,{sampleRate:this.rate&&this.rate.value}))),this._wavEncodedData}get md5(){return this._md5||(this._md5=_t()(this.wavEncodedData)),this._md5}toString(){return`SoundMediaData "${this.name}"`}}class de extends E.define({BOX:0,HIDDEN_WHEN_NULL:1,LIST_NAME:8,CONTENTS:9,TARGET:10}){get x(){return st(this.hiddenWhenNull)===null?5:this.box.x+1}get y(){return st(this.hiddenWhenNull)===null?5:this.box.y+1}get width(){return this.box.width-2}get height(){return this.box.height-2}}class fe extends E.define({BOX:0,PARENT:1,FRAMES:2,COLOR:3,DIRECTION:8,ALIGNMENT:9}){}class xe extends E.define({BOX:0,PARENT:1,COLOR:3}){}class Ce extends E.define({BOX:0,COLOR:3,VALUE:8}){}class Ee extends E.define({BOX:0,READOUT_FRAME:1,COLOR:3,FONT:6,VALUE:8,TARGET:10,CMD:11,PARAM:13}){}class Se extends E.define({BOX:0}){}const Ft={NORMAL:1,LARGE:2,SLIDER:3,TEXT:4};class ge extends E.define({BOX:0,TARGET:1,SHAPE:2,READOUT:14,READOUT_FRAME:15,SLIDER:16,ALIGNMENT:17,SLIDER_MIN:20,SLIDER_MAX:21}){get x(){return this.box.x}get y(){return this.box.y}get mode(){return st(this.slider)===null?this.readoutFrame.box.height<=14?Ft.NORMAL:Ft.LARGE:Ft.SLIDER}get isDiscrete(){return Math.floor(this.sliderMin)===this.sliderMin&&Math.floor(this.sliderMax)===this.sliderMax&&Math.floor(this.readout.value)===this.readout.value}}const ye={[o.POINT]:oe,[o.RECTANGLE]:ce,[o.FORM]:V,[o.SQUEAK]:V,[o.SAMPLED_SOUND]:ue,[o.SPRITE]:it,[o.STAGE]:Mt,[o.IMAGE_MEDIA]:Y,[o.SOUND_MEDIA]:J,[o.ALIGNMENT]:fe,[o.MORPH]:xe,[o.WATCHER_READOUT_FRAME]:Se,[o.STATIC_STRING]:Ce,[o.UPDATING_STRING]:Ee,[o.WATCHER]:ge,[o.LIST_WATCHER]:de},vt=Array.from({length:256},(s,t)=>ye[t]||null);class Pt{constructor(t){this.valueIterator=t}[Symbol.iterator](){return this}next(){const t=this.valueIterator.next();if(t.done)return t;const e=t.value,{classId:r}=e;let n=e;if(e instanceof A){n=[];for(let i=0;i<e.size;i++)n.push(this.next().value)}if(vt[r]!==null||e instanceof mt){const i=vt[e.classId]||E;n=new i({classId:e.classId,version:e.version,fields:n})}return{value:n,done:!1}}}class Dt{constructor(t){this.table=Array.from(t),this.fixed=this.fix(this.table)}fix(){const t=[];for(let e=0;e<this.table.length;e++)this.fixItem(this.table[e]),t.push(this.table[e]);return t}fixItem(t){if(typeof t.fields!="undefined"&&(t=t.fields),Array.isArray(t))for(let e=0;e<t.length;e++)t[e]=this.deref(t[e])}deref(t){return t instanceof Ot?this.table[t.index-1]:t}}class at extends l.extend({support8Bit:S,png:new T(3),dosLineEnding:new T(2),dosEndOfFile:new T(1),unixLineEnding:new T(1)}){static validate(){y(this.equals({support8Bit:137,png:"PNG",dosLineEnding:`\r
`,dosEndOfFile:"",unixLineEnding:`
`}),"PNGSignature does not match the expected values")}}l.initConstructor(at);class ot extends l.extend({length:c,chunkType:new T(4)}){}l.initConstructor(ot);class ct extends l.extend({checksum:c}){}l.initConstructor(ct);class ht extends l.extend({width:c,height:c,bitDepth:S,colorType:S,compressionMethod:S,filterMethod:S,interlaceMethod:S}){}l.initConstructor(ht);class W extends l.extend({method:S}){}l.initConstructor(W);class be{constructor(){this.adler=1}update(t,e,r){let n=this.adler&65535,i=this.adler>>>16;for(let a=0;a<r;a++)n=(n+t[e+a])%65521,i=(i+n)%65521;return this.adler=i<<16|n,this}get digest(){return this.adler}}const ut=65535;class lt extends l.extend({cmf:S,flag:S}){}l.initConstructor(lt);class X extends l.extend({lastPacket:S,length:_,lengthCheck:_}){}l.initConstructor(X);class dt extends l.extend({checksum:D}){}l.initConstructor(dt);class zt{constructor(t){this.stream=t}get uint8a(){return this.stream.uint8a}set uint8a(t){return this.stream.uint8a=t,this.stream.uint8a}get position(){return this.stream.position}set position(t){return this.stream.position=t,this.stream.position}writeStruct(t,e){return this.stream.writeStruct(t,e)}writeBytes(t,e=0,r=t.length){return this.stream.writeBytes(t,e,r)}}class Ut extends zt{constructor(t){super(t);this.stream.writeStruct(lt,{cmf:8,flag:29}),this.adler=new be,this.chunk=this.stream.writeStruct(X,{lastPacket:0,length:0,lengthCheck:0^65535})}get _deflateIndex(){return this.chunk.length}set _deflateIndex(t){return this.chunk.length=t,this.chunk.lengthCheck=t^65535,this.chunk.length}writeStruct(t,e){this.writeBytes(Object.assign(new t,e).uint8a)}writeBytes(t,e=0,r=t.length){let n=e;for(;r-n>0;){this._deflateIndex===ut&&(this.chunk=this.stream.writeStruct(X,{lastPacket:0,length:0,lengthCheck:0^65535}));const i=Math.min(r-n,ut-this._deflateIndex);this.stream.writeBytes(t,n,n+i),this._deflateIndex+=i,n+=i}this.adler.update(t,e,r-e)}finish(){this.chunk.lastPacket=1,this.stream.writeStruct(dt,{checksum:this.adler.digest})}static estimateSize(t){const e=Math.ceil(t/ut);return lt.size+e*X.size+dt.size+t}}class M extends zt{constructor(t,e="IHDR"){super(t);this.start=this.stream.writeStruct(ot,{length:0,chunkType:e}),this.crc=new rt}finish(){const t=this.start.offset+this.start.size,e=this.position-t;this.start.length=e,this.crc.update(this.stream.uint8a,t-c.size,e+c.size),this.stream.writeStruct(ct,{checksum:this.crc.digest})}static size(t){return ot.size+t+ct.size}}class ft{encode(t,e,r){const n=t*4+W.size,i=n*e,a=at.size+M.size(ht.size)+M.size(Ut.estimateSize(i))+M.size(0),u=new R(new ArrayBuffer(a));u.writeStruct(at,{support8Bit:137,png:"PNG",dosLineEnding:`\r
`,dosEndOfFile:"",unixLineEnding:`
`});const g=new M(u,"IHDR");g.writeStruct(ht,{width:t,height:e,bitDepth:8,colorType:6,compressionMethod:0,filterMethod:0,interlaceMethod:0}),g.finish();const b=new M(u,"IDAT"),h=new Ut(b);let f=0;for(;f<r.length;){h.writeStruct(W,{method:0});const I=Math.min(r.length-f,n-W.size);h.writeBytes(r,f,f+I),f+=I}return h.finish(),b.finish(),new M(u,"IEND").finish(),u.buffer}static encode(t,e,r){return new ft().encode(t,e,r)}}class Ae{constructor(t){this.file=t}async(t){return y(t==="uint8array","SB1FakeZipFile only supports uint8array"),Promise.resolve(this.file.bytes)}}class we{constructor(t){this.files=t}file(t){if(t in this.files)return new Ae(this.files[t])}}const Te=s=>s.extension==="uncompressed"?"png":"jpg",Ie=s=>s.extension==="uncompressed"?new Uint8Array(ft.encode(s.width,s.height,s.decoded)):s.decoded,Oe=s=>s.wavEncodedData,me=({images:s,sounds:t})=>{const e={};let r=0;for(const n of s)e[`${r++}.${Te(n)}`]={bytes:Ie(n)};r=0;for(const n of t)e[`${r++}.wav`]={bytes:Oe(n)};return new we(e)},U=s=>{const t=String(s[s.length-1]),e=s.length-1;return t==="mouse"?s[e]="_mouse_":t==="edge"?s[e]="_edge_":s[s.length-1]instanceof Mt&&(s[e]="_stage_"),s},pe={getParam:([s,t,e,r])=>[s,t,e,r||"r"],changeVariable:s=>[s[2],s[1],s[3]],EventHatMorph:s=>String(s[1])==="Scratch-StartClicked"?["whenGreenFlag"]:["whenIReceive",s[1]],MouseClickEventHatMorph:()=>["whenClicked"],KeyEventHatMorph:s=>["whenKeyPressed",s[1]],stopScripts:s=>String(s[1])==="other scripts"?[s[0],"other scripts in sprite"]:s,abs:s=>["computeFunction:of:","abs",s[1]],sqrt:s=>["computeFunction:of:","sqrt",s[1]],"\\\\":s=>["%",...s.slice(1)],doReturn:()=>["stopScripts","this script"],stopAll:()=>["stopScripts","all"],"showBackground:":s=>["startScene",s[1]],nextBackground:()=>["nextScene"],doForeverIf:s=>["doForever",[["doIf",s[1],s[2]]]],"getAttribute:of:":U,"gotoSpriteOrMouse:":U,"distanceTo:":U,"pointTowards:":U,"touching:":U},Be=s=>typeof s=="object"&&s?s.valueOf():s,Le=s=>{const{info:t,stageData:e,images:r,sounds:n}=s,i=F=>{const d=[];for(let x=0;x<F.length;x+=2)d.push([F[x],F[x+1]]);return d},a=([F,d])=>({name:F,value:d,isPersistent:!1}),u=([,{listName:F,contents:d,x,y:w,width:Pe,height:De,hiddenWhenNull:ze}])=>({listName:F,contents:d,isPersistent:!1,x,y:w,width:Pe,height:De,visible:Be(ze)!==null}),g=F=>{const d=n.findIndex(x=>x.crc===F.crc);return{soundName:F.name,soundID:d,md5:`${F.md5}.wav`,sampleCount:F.sampleCount,rate:F.rate,format:""}},b=F=>F.extension==="uncompressed"?"png":"jpg",h=F=>{const d=r.findIndex(x=>x.crc===F.crc);return{costumeName:F.costumeName,baseLayerID:d,baseLayerMD5:`${_t()(F.rawBytes)}.${b(F)}`,bitmapResolution:1,rotationCenterX:F.rotationCenter.x,rotationCenterY:F.rotationCenter.y}},f=F=>{let d=F.map(I);const x=pe[d[0]];return x&&(d=x(d)),d},p=F=>F.map(f),I=F=>F instanceof it?F.objName:Array.isArray(F)?F.length===0||Array.isArray(F[0])?p(F):f(F):F,L=F=>[F[0].x,F[0].y,p(F[1])],Ne=F=>{const d=F.media.filter(w=>w instanceof Y),x=F.media.filter(w=>w instanceof J);return{objName:F.objName,variables:i(F.vars).map(a),lists:i(F.lists).map(u),scripts:F.blocksBin.map(L),costumes:d.map(h),currentCostumeIndex:d.findIndex(w=>w.crc===F.currentCostume.crc),sounds:x.map(g),scratchX:F.scratchX,scratchY:F.scratchY,scale:F.scalePoint.x,direction:Math.round(F.rotationDegrees*1e6)/1e6-270,rotationStyle:F.rotationStyle,isDraggable:F.draggable,indexInLibrary:e.spriteOrderInLibrary.indexOf(F),visible:F.visible,spriteInfo:{}}},_e=F=>F instanceof it?Ne(F):null,Me=F=>{const d=F.media.filter(w=>w instanceof Y),x=F.media.filter(w=>w instanceof J);return{objName:F.objName,variables:i(F.vars).map(a),lists:i(F.lists).map(u),scripts:F.blocksBin.map(L),costumes:d.map(h),currentCostumeIndex:d.findIndex(w=>w.crc===F.currentCostume.crc),sounds:x.map(g),penLayerMD5:"5c81a336fab8be57adc039a8a2b33ca9.png",penLayerID:0,tempoBPM:F.tempoBPM,videoAlpha:.5,children:F.stageContents.map(_e).filter(Boolean).reverse()}},ve=F=>{const d={};for(let x=0;x<F.length;x+=2)String(F[x])!=="thumbnail"&&(d[String(F[x])]=String(F[x+1]));return d};return JSON.parse(JSON.stringify(Object.assign(Me(e),{info:ve(t)})))};class xt extends l.extend({version:new T(10),infoByteLength:c}){validate(){y.validate(this.equals({version:"ScratchV01"})||this.equals({version:"ScratchV02"}),"Invalid Scratch file signature.")}}l.initConstructor(xt);class v extends l.extend({ObjS:new T(4),ObjSValue:S,Stch:new T(4),StchValue:S,numObjects:c}){validate(){y.validate(this.equals({ObjS:"ObjS",ObjSValue:1,Stch:"Stch",StchValue:1}),"Invalid Scratch file info packet header.")}}l.initConstructor(v);class Re{constructor(t){this.buffer=t,this.stream=new R(t),this.signature=this.stream.readStruct(xt),this.signature.validate(),this.infoHeader=this.stream.readStruct(v),this.infoHeader.validate(),this.stream.position+=this.signature.infoByteLength-v.size,this.dataHeader=this.stream.readStruct(v),this.dataHeader.validate()}get json(){return Le({info:this.info(),stageData:this.data(),images:this.images(),sounds:this.sounds()})}get zip(){return me({images:this.images(),sounds:this.sounds()})}view(){return{signature:this.signature,infoHeader:this.infoHeader,dataHeader:this.dataHeader,toString(){return"SB1File"}}}infoRaw(){return new St(new Lt(this.buffer,this.infoHeader.offset+v.size),this.signature.infoByteLength+xt.size)}infoTable(){return new Pt(this.infoRaw())}info(){return this._info||(this._info=new Dt(this.infoTable()).table[0]),this._info}dataRaw(){return new St(new Lt(this.buffer,this.dataHeader.offset+v.size),this.stream.uint8a.length)}dataTable(){return new Pt(this.dataRaw())}dataFixed(){return this._data||(this._data=new Dt(this.dataTable()).table),this._data}data(){return this.dataFixed()[0]}images(){const t=new Set;return this.dataFixed().filter(e=>e instanceof Y?t.has(e.crc)?!1:(t.add(e.crc),!0):!1)}sounds(){const t=new Set;return this.dataFixed().filter(e=>e instanceof J?t.has(e.crc)?!1:(t.add(e.crc),!0):!1)}}}}]);
