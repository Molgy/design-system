import{j as wt}from"./jsx-runtime-BjG_zV1W.js";import{r as ke}from"./index-C33_amOP.js";import{_ as Ze}from"./tslib.es6-Duv2rsQ1.js";/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var Lt=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,nn=/\\([\u000b\u0020-\u00ff])/g,rn=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,on=an;function an(i){if(!i)throw new TypeError("argument string is required");var t=typeof i=="object"?sn(i):i;if(typeof t!="string")throw new TypeError("argument string is required to be a string");var o=t.indexOf(";"),r=o!==-1?t.slice(0,o).trim():t.trim();if(!rn.test(r))throw new TypeError("invalid media type");var l=new ln(r.toLowerCase());if(o!==-1){var p,f,u;for(Lt.lastIndex=o;f=Lt.exec(t);){if(f.index!==o)throw new TypeError("invalid parameter format");o+=f[0].length,p=f[1].toLowerCase(),u=f[2],u.charCodeAt(0)===34&&(u=u.slice(1,-1),u.indexOf("\\")!==-1&&(u=u.replace(nn,"$1"))),l.parameters[p]=u}if(o!==t.length)throw new TypeError("invalid parameter format")}return l}function sn(i){var t;if(typeof i.getHeader=="function"?t=i.getHeader("content-type"):typeof i.headers=="object"&&(t=i.headers&&i.headers["content-type"]),typeof t!="string")throw new TypeError("content-type header is missing from object");return t}function ln(i){this.parameters=Object.create(null),this.type=i}var ge=new Map,zt=function(t){return t.cloneNode(!0)},Ot=function(){return window.location.protocol==="file:"},Wt=function(t,o,r){var l=new XMLHttpRequest;l.onreadystatechange=function(){try{if(!/\.svg/i.test(t)&&l.readyState===2){var p=l.getResponseHeader("Content-Type");if(!p)throw new Error("Content type not found");var f=on(p).type;if(!(f==="image/svg+xml"||f==="text/plain"))throw new Error("Invalid content type: ".concat(f))}if(l.readyState===4){if(l.status===404||l.responseXML===null)throw new Error(Ot()?"Note: SVG injection ajax calls do not work locally without adjusting security settings in your browser. Or consider using a local webserver.":"Unable to load SVG file: "+t);if(l.status===200||Ot()&&l.status===0)r(null,l);else throw new Error("There was a problem injecting the SVG: "+l.status+" "+l.statusText)}}catch(u){if(l.abort(),u instanceof Error)r(u,l);else throw u}},l.open("GET",t),l.withCredentials=o,l.overrideMimeType&&l.overrideMimeType("text/xml"),l.send()},Z={},Nt=function(t,o){Z[t]=Z[t]||[],Z[t].push(o)},cn=function(t){for(var o=function(f,u){setTimeout(function(){if(Array.isArray(Z[t])){var g=ge.get(t),R=Z[t][f];g instanceof SVGSVGElement&&R(null,zt(g)),g instanceof Error&&R(g),f===Z[t].length-1&&delete Z[t]}},0)},r=0,l=Z[t].length;r<l;r++)o(r)},fn=function(t,o,r){if(ge.has(t)){var l=ge.get(t);if(l===void 0){Nt(t,r);return}if(l instanceof SVGSVGElement){r(null,zt(l));return}}ge.set(t,void 0),Nt(t,r),Wt(t,o,function(p,f){var u;p?ge.set(t,p):((u=f.responseXML)===null||u===void 0?void 0:u.documentElement)instanceof SVGSVGElement&&ge.set(t,f.responseXML.documentElement),cn(t)})},un=function(t,o,r){Wt(t,o,function(l,p){var f;l?r(l):((f=p.responseXML)===null||f===void 0?void 0:f.documentElement)instanceof SVGSVGElement&&r(null,p.responseXML.documentElement)})},pn=0,mn=function(){return++pn},j=[],Ct={},dn="http://www.w3.org/2000/svg",Ke="http://www.w3.org/1999/xlink",Dt=function(t,o,r,l,p,f,u){var g=t.getAttribute("data-src")||t.getAttribute("src");if(!g){u(new Error("Invalid data-src or src attribute"));return}if(j.indexOf(t)!==-1){j.splice(j.indexOf(t),1),t=null;return}j.push(t),t.setAttribute("src","");var R=l?fn:un;R(g,p,function(M,m){if(!m){j.splice(j.indexOf(t),1),t=null,u(M);return}var P=t.getAttribute("id");P&&m.setAttribute("id",P);var H=t.getAttribute("title");H&&m.setAttribute("title",H);var k=t.getAttribute("width");k&&m.setAttribute("width",k);var K=t.getAttribute("height");K&&m.setAttribute("height",K);var ie=Array.from(new Set(Ze(Ze(Ze([],(m.getAttribute("class")||"").split(" "),!0),["injected-svg"],!1),(t.getAttribute("class")||"").split(" "),!0))).join(" ").trim();m.setAttribute("class",ie);var Q=t.getAttribute("style");Q&&m.setAttribute("style",Q),m.setAttribute("data-src",g);var oe=[].filter.call(t.attributes,function(N){return/^data-\w[\w-]*$/.test(N.name)});if(Array.prototype.forEach.call(oe,function(N){N.name&&N.value&&m.setAttribute(N.name,N.value)}),r){var U={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],path:[],pattern:["fill","stroke"],radialGradient:["fill","stroke"]},T,v,G,ae,se;Object.keys(U).forEach(function(N){T=N,G=U[N],v=m.querySelectorAll(T+"[id]");for(var We=function(E,je){ae=v[E].id,se=ae+"-"+mn();var d;Array.prototype.forEach.call(G,function(ne){d=m.querySelectorAll("["+ne+'*="'+ae+'"]');for(var I=0,ye=d.length;I<ye;I++){var ue=d[I].getAttribute(ne);ue&&!ue.match(new RegExp('url\\("?#'+ae+'"?\\)'))||d[I].setAttribute(ne,"url(#"+se+")")}});for(var Y=m.querySelectorAll("[*|href]"),ee=[],te=0,_e=Y.length;te<_e;te++){var Se=Y[te].getAttributeNS(Ke,"href");Se&&Se.toString()==="#"+v[E].id&&ee.push(Y[te])}for(var fe=0,$=ee.length;fe<$;fe++)ee[fe].setAttributeNS(Ke,"href","#"+se);v[E].id=se},ce=0,A=v.length;ce<A;ce++)We(ce)})}m.removeAttribute("xmlns:a");for(var J=m.querySelectorAll("script"),le=[],O,q,z=0,Te=J.length;z<Te;z++)q=J[z].getAttribute("type"),(!q||q==="application/ecmascript"||q==="application/javascript"||q==="text/javascript")&&(O=J[z].innerText||J[z].textContent,O&&le.push(O),m.removeChild(J[z]));if(le.length>0&&(o==="always"||o==="once"&&!Ct[g])){for(var Ae=0,Ge=le.length;Ae<Ge;Ae++)new Function(le[Ae])(window);Ct[g]=!0}var ze=m.querySelectorAll("style");if(Array.prototype.forEach.call(ze,function(N){N.textContent+=""}),m.setAttribute("xmlns",dn),m.setAttribute("xmlns:xlink",Ke),f(m),!t.parentNode){j.splice(j.indexOf(t),1),t=null,u(new Error("Parent node is null"));return}t.parentNode.replaceChild(m,t),j.splice(j.indexOf(t),1),t=null,u(null,m)})},hn=function(t,o){var r=o===void 0?{}:o,l=r.afterAll,p=l===void 0?function(){}:l,f=r.afterEach,u=f===void 0?function(){}:f,g=r.beforeEach,R=g===void 0?function(){}:g,M=r.cacheRequests,m=M===void 0?!0:M,P=r.evalScripts,H=P===void 0?"never":P,k=r.httpRequestWithCredentials,K=k===void 0?!1:k,ie=r.renumerateIRIElements,Q=ie===void 0?!0:ie;if(t&&"length"in t)for(var oe=0,U=0,T=t.length;U<T;U++)Dt(t[U],H,Q,m,K,R,function(v,G){u(v,G),t&&"length"in t&&t.length===++oe&&p(oe)});else t?Dt(t,H,Q,m,K,R,function(v,G){u(v,G),p(1),t=null}):p(0)};/*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */const{entries:Bt,setPrototypeOf:Mt,isFrozen:En,getPrototypeOf:gn,getOwnPropertyDescriptor:Tn}=Object;let{freeze:L,seal:x,create:jt}=Object,{apply:rt,construct:it}=typeof Reflect<"u"&&Reflect;L||(L=function(t){return t});x||(x=function(t){return t});rt||(rt=function(t,o,r){return t.apply(o,r)});it||(it=function(t,o){return new t(...o)});const Ue=D(Array.prototype.forEach),It=D(Array.prototype.pop),we=D(Array.prototype.push),He=D(String.prototype.toLowerCase),Qe=D(String.prototype.toString),xt=D(String.prototype.match),Le=D(String.prototype.replace),An=D(String.prototype.indexOf),_n=D(String.prototype.trim),F=D(Object.prototype.hasOwnProperty),w=D(RegExp.prototype.test),Oe=Sn(TypeError);function D(i){return function(t){for(var o=arguments.length,r=new Array(o>1?o-1:0),l=1;l<o;l++)r[l-1]=arguments[l];return rt(i,t,r)}}function Sn(i){return function(){for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return it(i,o)}}function c(i,t){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:He;Mt&&Mt(i,null);let r=t.length;for(;r--;){let l=t[r];if(typeof l=="string"){const p=o(l);p!==l&&(En(t)||(t[r]=p),l=p)}i[l]=!0}return i}function yn(i){for(let t=0;t<i.length;t++)F(i,t)||(i[t]=null);return i}function re(i){const t=jt(null);for(const[o,r]of Bt(i))F(i,o)&&(Array.isArray(r)?t[o]=yn(r):r&&typeof r=="object"&&r.constructor===Object?t[o]=re(r):t[o]=r);return t}function Ne(i,t){for(;i!==null;){const r=Tn(i,t);if(r){if(r.get)return D(r.get);if(typeof r.value=="function")return D(r.value)}i=gn(i)}function o(){return null}return o}const Pt=L(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Je=L(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),et=L(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Rn=L(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),tt=L(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),vn=L(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),kt=L(["#text"]),Ut=L(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),nt=L(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ft=L(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Fe=L(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),bn=x(/\{\{[\w\W]*|[\w\W]*\}\}/gm),wn=x(/<%[\w\W]*|[\w\W]*%>/gm),Ln=x(/\${[\w\W]*}/gm),On=x(/^data-[\-\w.\u00B7-\uFFFF]/),Nn=x(/^aria-[\-\w]+$/),qt=x(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Cn=x(/^(?:\w+script|data):/i),Dn=x(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Yt=x(/^html$/i),Mn=x(/^[a-z][.\w]*(-[.\w]+)+$/i);var Ht=Object.freeze({__proto__:null,MUSTACHE_EXPR:bn,ERB_EXPR:wn,TMPLIT_EXPR:Ln,DATA_ATTR:On,ARIA_ATTR:Nn,IS_ALLOWED_URI:qt,IS_SCRIPT_OR_DATA:Cn,ATTR_WHITESPACE:Dn,DOCTYPE_NAME:Yt,CUSTOM_ELEMENT:Mn});const Ce={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},In=function(){return typeof window>"u"?null:window},xn=function(t,o){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let r=null;const l="data-tt-policy-suffix";o&&o.hasAttribute(l)&&(r=o.getAttribute(l));const p="dompurify"+(r?"#"+r:"");try{return t.createPolicy(p,{createHTML(f){return f},createScriptURL(f){return f}})}catch{return console.warn("TrustedTypes policy "+p+" could not be created."),null}};function Xt(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:In();const t=s=>Xt(s);if(t.version="3.1.7",t.removed=[],!i||!i.document||i.document.nodeType!==Ce.document)return t.isSupported=!1,t;let{document:o}=i;const r=o,l=r.currentScript,{DocumentFragment:p,HTMLTemplateElement:f,Node:u,Element:g,NodeFilter:R,NamedNodeMap:M=i.NamedNodeMap||i.MozNamedAttrMap,HTMLFormElement:m,DOMParser:P,trustedTypes:H}=i,k=g.prototype,K=Ne(k,"cloneNode"),ie=Ne(k,"remove"),Q=Ne(k,"nextSibling"),oe=Ne(k,"childNodes"),U=Ne(k,"parentNode");if(typeof f=="function"){const s=o.createElement("template");s.content&&s.content.ownerDocument&&(o=s.content.ownerDocument)}let T,v="";const{implementation:G,createNodeIterator:ae,createDocumentFragment:se,getElementsByTagName:J}=o,{importNode:le}=r;let O={};t.isSupported=typeof Bt=="function"&&typeof U=="function"&&G&&G.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:q,ERB_EXPR:z,TMPLIT_EXPR:Te,DATA_ATTR:Ae,ARIA_ATTR:Ge,IS_SCRIPT_OR_DATA:ze,ATTR_WHITESPACE:N,CUSTOM_ELEMENT:We}=Ht;let{IS_ALLOWED_URI:ce}=Ht,A=null;const Be=c({},[...Pt,...Je,...et,...tt,...kt]);let E=null;const je=c({},[...Ut,...nt,...Ft,...Fe]);let d=Object.seal(jt(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Y=null,ee=null,te=!0,_e=!0,Se=!1,fe=!0,$=!1,ne=!0,I=!1,ye=!1,ue=!1,pe=!1,De=!1,Me=!1,ot=!0,at=!1;const Vt="user-content-";let qe=!0,Re=!1,me={},de=null;const st=c({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let lt=null;const ct=c({},["audio","video","img","source","image","track"]);let Ye=null;const ft=c({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ie="http://www.w3.org/1998/Math/MathML",xe="http://www.w3.org/2000/svg",X="http://www.w3.org/1999/xhtml";let he=X,Xe=!1,Ve=null;const $t=c({},[Ie,xe,X],Qe);let ve=null;const Zt=["application/xhtml+xml","text/html"],Kt="text/html";let _=null,Ee=null;const Qt=o.createElement("form"),ut=function(e){return e instanceof RegExp||e instanceof Function},$e=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Ee&&Ee===e)){if((!e||typeof e!="object")&&(e={}),e=re(e),ve=Zt.indexOf(e.PARSER_MEDIA_TYPE)===-1?Kt:e.PARSER_MEDIA_TYPE,_=ve==="application/xhtml+xml"?Qe:He,A=F(e,"ALLOWED_TAGS")?c({},e.ALLOWED_TAGS,_):Be,E=F(e,"ALLOWED_ATTR")?c({},e.ALLOWED_ATTR,_):je,Ve=F(e,"ALLOWED_NAMESPACES")?c({},e.ALLOWED_NAMESPACES,Qe):$t,Ye=F(e,"ADD_URI_SAFE_ATTR")?c(re(ft),e.ADD_URI_SAFE_ATTR,_):ft,lt=F(e,"ADD_DATA_URI_TAGS")?c(re(ct),e.ADD_DATA_URI_TAGS,_):ct,de=F(e,"FORBID_CONTENTS")?c({},e.FORBID_CONTENTS,_):st,Y=F(e,"FORBID_TAGS")?c({},e.FORBID_TAGS,_):{},ee=F(e,"FORBID_ATTR")?c({},e.FORBID_ATTR,_):{},me=F(e,"USE_PROFILES")?e.USE_PROFILES:!1,te=e.ALLOW_ARIA_ATTR!==!1,_e=e.ALLOW_DATA_ATTR!==!1,Se=e.ALLOW_UNKNOWN_PROTOCOLS||!1,fe=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,$=e.SAFE_FOR_TEMPLATES||!1,ne=e.SAFE_FOR_XML!==!1,I=e.WHOLE_DOCUMENT||!1,pe=e.RETURN_DOM||!1,De=e.RETURN_DOM_FRAGMENT||!1,Me=e.RETURN_TRUSTED_TYPE||!1,ue=e.FORCE_BODY||!1,ot=e.SANITIZE_DOM!==!1,at=e.SANITIZE_NAMED_PROPS||!1,qe=e.KEEP_CONTENT!==!1,Re=e.IN_PLACE||!1,ce=e.ALLOWED_URI_REGEXP||qt,he=e.NAMESPACE||X,d=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&ut(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(d.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ut(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(d.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(d.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),$&&(_e=!1),De&&(pe=!0),me&&(A=c({},kt),E=[],me.html===!0&&(c(A,Pt),c(E,Ut)),me.svg===!0&&(c(A,Je),c(E,nt),c(E,Fe)),me.svgFilters===!0&&(c(A,et),c(E,nt),c(E,Fe)),me.mathMl===!0&&(c(A,tt),c(E,Ft),c(E,Fe))),e.ADD_TAGS&&(A===Be&&(A=re(A)),c(A,e.ADD_TAGS,_)),e.ADD_ATTR&&(E===je&&(E=re(E)),c(E,e.ADD_ATTR,_)),e.ADD_URI_SAFE_ATTR&&c(Ye,e.ADD_URI_SAFE_ATTR,_),e.FORBID_CONTENTS&&(de===st&&(de=re(de)),c(de,e.FORBID_CONTENTS,_)),qe&&(A["#text"]=!0),I&&c(A,["html","head","body"]),A.table&&(c(A,["tbody"]),delete Y.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!="function")throw Oe('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Oe('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');T=e.TRUSTED_TYPES_POLICY,v=T.createHTML("")}else T===void 0&&(T=xn(H,l)),T!==null&&typeof v=="string"&&(v=T.createHTML(""));L&&L(e),Ee=e}},pt=c({},["mi","mo","mn","ms","mtext"]),mt=c({},["annotation-xml"]),Jt=c({},["title","style","font","a","script"]),dt=c({},[...Je,...et,...Rn]),ht=c({},[...tt,...vn]),en=function(e){let n=U(e);(!n||!n.tagName)&&(n={namespaceURI:he,tagName:"template"});const a=He(e.tagName),h=He(n.tagName);return Ve[e.namespaceURI]?e.namespaceURI===xe?n.namespaceURI===X?a==="svg":n.namespaceURI===Ie?a==="svg"&&(h==="annotation-xml"||pt[h]):!!dt[a]:e.namespaceURI===Ie?n.namespaceURI===X?a==="math":n.namespaceURI===xe?a==="math"&&mt[h]:!!ht[a]:e.namespaceURI===X?n.namespaceURI===xe&&!mt[h]||n.namespaceURI===Ie&&!pt[h]?!1:!ht[a]&&(Jt[a]||!dt[a]):!!(ve==="application/xhtml+xml"&&Ve[e.namespaceURI]):!1},W=function(e){we(t.removed,{element:e});try{U(e).removeChild(e)}catch{ie(e)}},Pe=function(e,n){try{we(t.removed,{attribute:n.getAttributeNode(e),from:n})}catch{we(t.removed,{attribute:null,from:n})}if(n.removeAttribute(e),e==="is"&&!E[e])if(pe||De)try{W(n)}catch{}else try{n.setAttribute(e,"")}catch{}},Et=function(e){let n=null,a=null;if(ue)e="<remove></remove>"+e;else{const S=xt(e,/^[\r\n\t ]+/);a=S&&S[0]}ve==="application/xhtml+xml"&&he===X&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const h=T?T.createHTML(e):e;if(he===X)try{n=new P().parseFromString(h,ve)}catch{}if(!n||!n.documentElement){n=G.createDocument(he,"template",null);try{n.documentElement.innerHTML=Xe?v:h}catch{}}const y=n.body||n.documentElement;return e&&a&&y.insertBefore(o.createTextNode(a),y.childNodes[0]||null),he===X?J.call(n,I?"html":"body")[0]:I?n.documentElement:y},gt=function(e){return ae.call(e.ownerDocument||e,e,R.SHOW_ELEMENT|R.SHOW_COMMENT|R.SHOW_TEXT|R.SHOW_PROCESSING_INSTRUCTION|R.SHOW_CDATA_SECTION,null)},Tt=function(e){return e instanceof m&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof M)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},At=function(e){return typeof u=="function"&&e instanceof u},V=function(e,n,a){O[e]&&Ue(O[e],h=>{h.call(t,n,a,Ee)})},_t=function(e){let n=null;if(V("beforeSanitizeElements",e,null),Tt(e))return W(e),!0;const a=_(e.nodeName);if(V("uponSanitizeElement",e,{tagName:a,allowedTags:A}),e.hasChildNodes()&&!At(e.firstElementChild)&&w(/<[/\w]/g,e.innerHTML)&&w(/<[/\w]/g,e.textContent)||e.nodeType===Ce.progressingInstruction||ne&&e.nodeType===Ce.comment&&w(/<[/\w]/g,e.data))return W(e),!0;if(!A[a]||Y[a]){if(!Y[a]&&yt(a)&&(d.tagNameCheck instanceof RegExp&&w(d.tagNameCheck,a)||d.tagNameCheck instanceof Function&&d.tagNameCheck(a)))return!1;if(qe&&!de[a]){const h=U(e)||e.parentNode,y=oe(e)||e.childNodes;if(y&&h){const S=y.length;for(let C=S-1;C>=0;--C){const B=K(y[C],!0);B.__removalCount=(e.__removalCount||0)+1,h.insertBefore(B,Q(e))}}}return W(e),!0}return e instanceof g&&!en(e)||(a==="noscript"||a==="noembed"||a==="noframes")&&w(/<\/no(script|embed|frames)/i,e.innerHTML)?(W(e),!0):($&&e.nodeType===Ce.text&&(n=e.textContent,Ue([q,z,Te],h=>{n=Le(n,h," ")}),e.textContent!==n&&(we(t.removed,{element:e.cloneNode()}),e.textContent=n)),V("afterSanitizeElements",e,null),!1)},St=function(e,n,a){if(ot&&(n==="id"||n==="name")&&(a in o||a in Qt))return!1;if(!(_e&&!ee[n]&&w(Ae,n))){if(!(te&&w(Ge,n))){if(!E[n]||ee[n]){if(!(yt(e)&&(d.tagNameCheck instanceof RegExp&&w(d.tagNameCheck,e)||d.tagNameCheck instanceof Function&&d.tagNameCheck(e))&&(d.attributeNameCheck instanceof RegExp&&w(d.attributeNameCheck,n)||d.attributeNameCheck instanceof Function&&d.attributeNameCheck(n))||n==="is"&&d.allowCustomizedBuiltInElements&&(d.tagNameCheck instanceof RegExp&&w(d.tagNameCheck,a)||d.tagNameCheck instanceof Function&&d.tagNameCheck(a))))return!1}else if(!Ye[n]){if(!w(ce,Le(a,N,""))){if(!((n==="src"||n==="xlink:href"||n==="href")&&e!=="script"&&An(a,"data:")===0&&lt[e])){if(!(Se&&!w(ze,Le(a,N,"")))){if(a)return!1}}}}}}return!0},yt=function(e){return e!=="annotation-xml"&&xt(e,We)},Rt=function(e){V("beforeSanitizeAttributes",e,null);const{attributes:n}=e;if(!n)return;const a={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:E};let h=n.length;for(;h--;){const y=n[h],{name:S,namespaceURI:C,value:B}=y,be=_(S);let b=S==="value"?B:_n(B);if(a.attrName=be,a.attrValue=b,a.keepAttr=!0,a.forceKeepAttr=void 0,V("uponSanitizeAttribute",e,a),b=a.attrValue,a.forceKeepAttr||(Pe(S,e),!a.keepAttr))continue;if(!fe&&w(/\/>/i,b)){Pe(S,e);continue}$&&Ue([q,z,Te],bt=>{b=Le(b,bt," ")});const vt=_(e.nodeName);if(St(vt,be,b)){if(at&&(be==="id"||be==="name")&&(Pe(S,e),b=Vt+b),ne&&w(/((--!?|])>)|<\/(style|title)/i,b)){Pe(S,e);continue}if(T&&typeof H=="object"&&typeof H.getAttributeType=="function"&&!C)switch(H.getAttributeType(vt,be)){case"TrustedHTML":{b=T.createHTML(b);break}case"TrustedScriptURL":{b=T.createScriptURL(b);break}}try{C?e.setAttributeNS(C,S,b):e.setAttribute(S,b),Tt(e)?W(e):It(t.removed)}catch{}}}V("afterSanitizeAttributes",e,null)},tn=function s(e){let n=null;const a=gt(e);for(V("beforeSanitizeShadowDOM",e,null);n=a.nextNode();)V("uponSanitizeShadowNode",n,null),!_t(n)&&(n.content instanceof p&&s(n.content),Rt(n));V("afterSanitizeShadowDOM",e,null)};return t.sanitize=function(s){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=null,a=null,h=null,y=null;if(Xe=!s,Xe&&(s="<!-->"),typeof s!="string"&&!At(s))if(typeof s.toString=="function"){if(s=s.toString(),typeof s!="string")throw Oe("dirty is not a string, aborting")}else throw Oe("toString is not a function");if(!t.isSupported)return s;if(ye||$e(e),t.removed=[],typeof s=="string"&&(Re=!1),Re){if(s.nodeName){const B=_(s.nodeName);if(!A[B]||Y[B])throw Oe("root node is forbidden and cannot be sanitized in-place")}}else if(s instanceof u)n=Et("<!---->"),a=n.ownerDocument.importNode(s,!0),a.nodeType===Ce.element&&a.nodeName==="BODY"||a.nodeName==="HTML"?n=a:n.appendChild(a);else{if(!pe&&!$&&!I&&s.indexOf("<")===-1)return T&&Me?T.createHTML(s):s;if(n=Et(s),!n)return pe?null:Me?v:""}n&&ue&&W(n.firstChild);const S=gt(Re?s:n);for(;h=S.nextNode();)_t(h)||(h.content instanceof p&&tn(h.content),Rt(h));if(Re)return s;if(pe){if(De)for(y=se.call(n.ownerDocument);n.firstChild;)y.appendChild(n.firstChild);else y=n;return(E.shadowroot||E.shadowrootmode)&&(y=le.call(r,y,!0)),y}let C=I?n.outerHTML:n.innerHTML;return I&&A["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&w(Yt,n.ownerDocument.doctype.name)&&(C="<!DOCTYPE "+n.ownerDocument.doctype.name+`>
`+C),$&&Ue([q,z,Te],B=>{C=Le(C,B," ")}),T&&Me?T.createHTML(C):C},t.setConfig=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};$e(s),ye=!0},t.clearConfig=function(){Ee=null,ye=!1},t.isValidAttribute=function(s,e,n){Ee||$e({});const a=_(s),h=_(e);return St(a,h,n)},t.addHook=function(s,e){typeof e=="function"&&(O[s]=O[s]||[],we(O[s],e))},t.removeHook=function(s){if(O[s])return It(O[s])},t.removeHooks=function(s){O[s]&&(O[s]=[])},t.removeAllHooks=function(){O={}},t}var Pn=Xt();const kn=["fill","stroke"],Un=(i,t)=>{const o={};i==null||i.getAttributeNames().forEach(r=>{(r.startsWith("aria-")||kn.includes(r))&&(o[r]=i.getAttribute(r))}),Object.keys(o).forEach(r=>{t.setAttribute(r,o[r])})},Fn=(i,{beforeEach:t=()=>{},...o}={})=>{hn(i,{...o,beforeEach:r=>{Pn.sanitize(r,{USE_PROFILES:{svg:!0,svgFilters:!0},IN_PLACE:!0}),Un(i,r),t(r)}})},Gt=(i,t)=>{i.getAttributeNames().forEach(r=>{t.setAttribute(r,i.getAttribute(r))})},Hn=({src:i,alt:t,width:o=24,height:r=24,...l})=>{const p=ke.useRef(null),[f,u]=ke.useState(!1);return ke.useLayoutEffect(()=>{f&&u(!1)},[i]),ke.useLayoutEffect(()=>{if(f)return;const g=p.current;if(g){const R=document.createElement("div"),M=document.createElement("svg");R.appendChild(M),Gt(g,M),M.setAttribute("width",o.toString()),M.setAttribute("height",r.toString()),Fn(M,{afterEach:(m,P)=>{m&&u(!0),P&&(g.innerHTML=P.innerHTML,Gt(P,g))}})}},[i,o,r,f]),f?t?wt.jsx("span",{...l,children:t}):null:wt.jsx("svg",{ref:p,"data-src":i,...l})};Hn.__docgenInfo={description:"",methods:[],displayName:"Svg",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},width:{defaultValue:{value:"24",computed:!1},required:!1},height:{defaultValue:{value:"24",computed:!1},required:!1}}};export{Hn as S};
