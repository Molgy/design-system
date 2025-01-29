import{j as d}from"./jsx-runtime-BjG_zV1W.js";import{g as dr,r as f,e as mr}from"./index-C33_amOP.js";import{F as gr,a as vr,H as yr}from"./HelpMessage-D9o_4RmS.js";import{u as br}from"./useInputClassModifier-B4SXY78l.js";import{g as he}from"./getComponentClassName-CfMiunrP.js";import{a as B,b as W,c as hr}from"./tslib.es6-Duv2rsQ1.js";import{B as Dr}from"./Button-DUnKpr_8.js";var Ve={exports:{}},Fr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",xr=Fr,jr=xr;function Ue(){}function Ge(){}Ge.resetWarningCache=Ue;var wr=function(){function e(t,a,o,u,l,g){if(g!==jr){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function r(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:Ge,resetWarningCache:Ue};return n.PropTypes=n,n};Ve.exports=wr();var Or=Ve.exports;const p=dr(Or);var _r=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function U(e,r){var n=Tr(e);if(typeof n.path!="string"){var t=e.webkitRelativePath;Object.defineProperty(n,"path",{value:typeof r=="string"?r:typeof t=="string"&&t.length>0?t:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}function Tr(e){var r=e.name,n=r&&r.lastIndexOf(".")!==-1;if(n&&!e.type){var t=r.split(".").pop().toLowerCase(),a=_r.get(t);a&&Object.defineProperty(e,"type",{value:a,writable:!1,configurable:!1,enumerable:!0})}return e}var Ar=[".DS_Store","Thumbs.db"];function Er(e){return B(this,void 0,void 0,function(){return W(this,function(r){return ne(e)&&Cr(e)?[2,Rr(e.dataTransfer,e.type)]:Pr(e)?[2,Ir(e)]:Array.isArray(e)&&e.every(function(n){return"getFile"in n&&typeof n.getFile=="function"})?[2,kr(e)]:[2,[]]})})}function Cr(e){return ne(e.dataTransfer)}function Pr(e){return ne(e)&&ne(e.target)}function ne(e){return typeof e=="object"&&e!==null}function Ir(e){return ge(e.target.files).map(function(r){return U(r)})}function kr(e){return B(this,void 0,void 0,function(){var r;return W(this,function(n){switch(n.label){case 0:return[4,Promise.all(e.map(function(t){return t.getFile()}))];case 1:return r=n.sent(),[2,r.map(function(t){return U(t)})]}})})}function Rr(e,r){return B(this,void 0,void 0,function(){var n,t;return W(this,function(a){switch(a.label){case 0:return e===null?[2,[]]:e.items?(n=ge(e.items).filter(function(o){return o.kind==="file"}),r!=="drop"?[2,n]:[4,Promise.all(n.map(Sr))]):[3,2];case 1:return t=a.sent(),[2,Re(Ye(t))];case 2:return[2,Re(ge(e.files).map(function(o){return U(o)}))]}})})}function Re(e){return e.filter(function(r){return Ar.indexOf(r.name)===-1})}function ge(e){if(e===null)return[];for(var r=[],n=0;n<e.length;n++){var t=e[n];r.push(t)}return r}function Sr(e){if(typeof e.webkitGetAsEntry!="function")return Se(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?Je(r):Se(e)}function Ye(e){return e.reduce(function(r,n){return hr(r,Array.isArray(n)?Ye(n):[n])},[])}function Se(e){var r=e.getAsFile();if(!r)return Promise.reject(e+" is not a File");var n=U(r);return Promise.resolve(n)}function zr(e){return B(this,void 0,void 0,function(){return W(this,function(r){return[2,e.isDirectory?Je(e):Lr(e)]})})}function Je(e){var r=e.createReader();return new Promise(function(n,t){var a=[];function o(){var u=this;r.readEntries(function(l){return B(u,void 0,void 0,function(){var g,h,x;return W(this,function(b){switch(b.label){case 0:if(l.length)return[3,5];b.label=1;case 1:return b.trys.push([1,3,,4]),[4,Promise.all(a)];case 2:return g=b.sent(),n(g),[3,4];case 3:return h=b.sent(),t(h),[3,4];case 4:return[3,6];case 5:x=Promise.all(l.map(zr)),a.push(x),o(),b.label=6;case 6:return[2]}})})},function(l){t(l)})}o()})}function Lr(e){return B(this,void 0,void 0,function(){return W(this,function(r){return[2,new Promise(function(n,t){e.file(function(a){var o=U(a,e.fullPath);n(o)},function(a){t(a)})})]})})}var qr=function(e,r){if(e&&r){var n=Array.isArray(r)?r:r.split(","),t=e.name||"",a=(e.type||"").toLowerCase(),o=a.replace(/\/.*$/,"");return n.some(function(u){var l=u.trim().toLowerCase();return l.charAt(0)==="."?t.toLowerCase().endsWith(l):l.endsWith("/*")?o===l.replace(/\/.*$/,""):a===l})}return!0};function ze(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,t)}return n}function Le(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?ze(Object(n),!0).forEach(function(t){Qe(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ze(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Qe(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function qe(e,r){return $r(e)||Kr(e,r)||Mr(e,r)||Nr()}function Nr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mr(e,r){if(e){if(typeof e=="string")return Ne(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ne(e,r)}}function Ne(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function Kr(e,r){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var t=[],a=!0,o=!1,u,l;try{for(n=n.call(e);!(a=(u=n.next()).done)&&(t.push(u.value),!(r&&t.length===r));a=!0);}catch(g){o=!0,l=g}finally{try{!a&&n.return!=null&&n.return()}finally{if(o)throw l}}return t}}function $r(e){if(Array.isArray(e))return e}var Br="file-invalid-type",Wr="file-too-large",Hr="file-too-small",Vr="too-many-files",Ur=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var n=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:Br,message:"File type must be ".concat(n)}},Me=function(r){return{code:Wr,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},Ke=function(r){return{code:Hr,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},Gr={code:Vr,message:"Too many files"};function Xe(e,r){var n=e.type==="application/x-moz-file"||qr(e,r);return[n,n?null:Ur(r)]}function Ze(e,r,n){if(V(e.size))if(V(r)&&V(n)){if(e.size>n)return[!1,Me(n)];if(e.size<r)return[!1,Ke(r)]}else{if(V(r)&&e.size<r)return[!1,Ke(r)];if(V(n)&&e.size>n)return[!1,Me(n)]}return[!0,null]}function V(e){return e!=null}function Yr(e){var r=e.files,n=e.accept,t=e.minSize,a=e.maxSize,o=e.multiple,u=e.maxFiles;return!o&&r.length>1||o&&u>=1&&r.length>u?!1:r.every(function(l){var g=Xe(l,n),h=qe(g,1),x=h[0],b=Ze(l,t,a),_=qe(b,1),T=_[0];return x&&T})}function te(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function re(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function $e(e){e.preventDefault()}function Jr(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function Qr(e){return e.indexOf("Edge/")!==-1}function Xr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Jr(e)||Qr(e)}function O(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return function(t){for(var a=arguments.length,o=new Array(a>1?a-1:0),u=1;u<a;u++)o[u-1]=arguments[u];return r.some(function(l){return!te(t)&&l&&l.apply(void 0,[t].concat(o)),te(t)})}}function Be(){return"showOpenFilePicker"in window}function Zr(e){return e=typeof e=="string"?e.split(","):e,[{description:"everything",accept:Array.isArray(e)?e.filter(function(r){return r==="audio/*"||r==="video/*"||r==="image/*"||r==="text/*"||/\w+\/[-+.\w]+/g.test(r)}).reduce(function(r,n){return Le(Le({},r),{},Qe({},n,[]))},{}):{}}]}var en=["children"],rn=["open"],nn=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],tn=["refKey","onChange","onClick"];function an(e){return ln(e)||sn(e)||er(e)||on()}function on(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ln(e){if(Array.isArray(e))return ve(e)}function me(e,r){return fn(e)||cn(e,r)||er(e,r)||un()}function un(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function er(e,r){if(e){if(typeof e=="string")return ve(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ve(e,r)}}function ve(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function cn(e,r){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var t=[],a=!0,o=!1,u,l;try{for(n=n.call(e);!(a=(u=n.next()).done)&&(t.push(u.value),!(r&&t.length===r));a=!0);}catch(g){o=!0,l=g}finally{try{!a&&n.return!=null&&n.return()}finally{if(o)throw l}}return t}}function fn(e){if(Array.isArray(e))return e}function We(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,t)}return n}function m(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?We(Object(n),!0).forEach(function(t){ye(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):We(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ye(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function ie(e,r){if(e==null)return{};var n=pn(e,r),t,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function pn(e,r){if(e==null)return{};var n={},t=Object.keys(e),a,o;for(o=0;o<t.length;o++)a=t[o],!(r.indexOf(a)>=0)&&(n[a]=e[a]);return n}var De=f.forwardRef(function(e,r){var n=e.children,t=ie(e,en),a=nr(t),o=a.open,u=ie(a,rn);return f.useImperativeHandle(r,function(){return{open:o}},[o]),mr.createElement(f.Fragment,null,n(m(m({},u),{},{open:o})))});De.displayName="Dropzone";var rr={disabled:!1,getFilesFromEvent:Er,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!1};De.defaultProps=rr;De.propTypes={children:p.func,accept:p.oneOfType([p.string,p.arrayOf(p.string)]),multiple:p.bool,preventDropOnDocument:p.bool,noClick:p.bool,noKeyboard:p.bool,noDrag:p.bool,noDragEventsBubbling:p.bool,minSize:p.number,maxSize:p.number,maxFiles:p.number,disabled:p.bool,getFilesFromEvent:p.func,onFileDialogCancel:p.func,onFileDialogOpen:p.func,useFsAccessApi:p.bool,onDragEnter:p.func,onDragLeave:p.func,onDragOver:p.func,onDrop:p.func,onDropAccepted:p.func,onDropRejected:p.func,validator:p.func};var be={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function nr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=m(m({},rr),e),n=r.accept,t=r.disabled,a=r.getFilesFromEvent,o=r.maxSize,u=r.minSize,l=r.multiple,g=r.maxFiles,h=r.onDragEnter,x=r.onDragLeave,b=r.onDragOver,_=r.onDrop,T=r.onDropAccepted,I=r.onDropRejected,k=r.onFileDialogCancel,R=r.onFileDialogOpen,A=r.useFsAccessApi,E=r.preventDropOnDocument,L=r.noClick,S=r.noKeyboard,q=r.noDrag,F=r.noDragEventsBubbling,z=r.validator,C=f.useMemo(function(){return typeof R=="function"?R:He},[R]),P=f.useMemo(function(){return typeof k=="function"?k:He},[k]),v=f.useRef(null),c=f.useRef(null),ae=f.useReducer(dn,be),G=me(ae,2),Y=G[0],j=G[1],sr=Y.isFocused,Fe=Y.isFileDialogActive,xe=Y.draggedFiles,je=function(){Fe&&setTimeout(function(){if(c.current){var s=c.current.files;s.length||(j({type:"closeDialog"}),P())}},300)};f.useEffect(function(){return A&&Be()?function(){}:(window.addEventListener("focus",je,!1),function(){window.removeEventListener("focus",je,!1)})},[c,Fe,P,A]);var N=f.useRef([]),we=function(s){v.current&&v.current.contains(s.target)||(s.preventDefault(),N.current=[])};f.useEffect(function(){return E&&(document.addEventListener("dragover",$e,!1),document.addEventListener("drop",we,!1)),function(){E&&(document.removeEventListener("dragover",$e),document.removeEventListener("drop",we))}},[v,E]);var Oe=f.useCallback(function(i){i.preventDefault(),i.persist(),Z(i),N.current=[].concat(an(N.current),[i.target]),re(i)&&Promise.resolve(a(i)).then(function(s){te(i)&&!F||(j({draggedFiles:s,isDragActive:!0,type:"setDraggedFiles"}),h&&h(i))})},[a,h,F]),_e=f.useCallback(function(i){i.preventDefault(),i.persist(),Z(i);var s=re(i);if(s&&i.dataTransfer)try{i.dataTransfer.dropEffect="copy"}catch{}return s&&b&&b(i),!1},[b,F]),Te=f.useCallback(function(i){i.preventDefault(),i.persist(),Z(i);var s=N.current.filter(function(D){return v.current&&v.current.contains(D)}),y=s.indexOf(i.target);y!==-1&&s.splice(y,1),N.current=s,!(s.length>0)&&(j({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),re(i)&&x&&x(i))},[v,x,F]),J=f.useCallback(function(i,s){var y=[],D=[];i.forEach(function(w){var H=Xe(w,n),$=me(H,2),se=$[0],le=$[1],ue=Ze(w,u,o),ee=me(ue,2),ce=ee[0],fe=ee[1],pe=z?z(w):null;if(se&&ce&&!pe)y.push(w);else{var de=[le,fe];pe&&(de=de.concat(pe)),D.push({file:w,errors:de.filter(function(pr){return pr})})}}),(!l&&y.length>1||l&&g>=1&&y.length>g)&&(y.forEach(function(w){D.push({file:w,errors:[Gr]})}),y.splice(0)),j({acceptedFiles:y,fileRejections:D,type:"setFiles"}),_&&_(y,D,s),D.length>0&&I&&I(D,s),y.length>0&&T&&T(y,s)},[j,l,n,u,o,g,_,T,I,z]),Q=f.useCallback(function(i){i.preventDefault(),i.persist(),Z(i),N.current=[],re(i)&&Promise.resolve(a(i)).then(function(s){te(i)&&!F||J(s,i)}),j({type:"reset"})},[a,J,F]),M=f.useCallback(function(){if(A&&Be()){j({type:"openDialog"}),C();var i={multiple:l,types:Zr(n)};window.showOpenFilePicker(i).then(function(s){return a(s)}).then(function(s){return J(s,null)}).catch(function(s){return P(s)}).finally(function(){return j({type:"closeDialog"})});return}c.current&&(j({type:"openDialog"}),C(),c.current.value=null,c.current.click())},[j,C,P,A,J,n,l]),Ae=f.useCallback(function(i){!v.current||!v.current.isEqualNode(i.target)||(i.keyCode===32||i.keyCode===13)&&(i.preventDefault(),M())},[v,c,M]),Ee=f.useCallback(function(){j({type:"focus"})},[]),Ce=f.useCallback(function(){j({type:"blur"})},[]),Pe=f.useCallback(function(){L||(Xr()?setTimeout(M,0):M())},[c,L,M]),K=function(s){return t?null:s},oe=function(s){return S?null:K(s)},X=function(s){return q?null:K(s)},Z=function(s){F&&s.stopPropagation()},lr=f.useMemo(function(){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=i.refKey,y=s===void 0?"ref":s,D=i.role,w=i.onKeyDown,H=i.onFocus,$=i.onBlur,se=i.onClick,le=i.onDragEnter,ue=i.onDragOver,ee=i.onDragLeave,ce=i.onDrop,fe=ie(i,nn);return m(m(ye({onKeyDown:oe(O(w,Ae)),onFocus:oe(O(H,Ee)),onBlur:oe(O($,Ce)),onClick:K(O(se,Pe)),onDragEnter:X(O(le,Oe)),onDragOver:X(O(ue,_e)),onDragLeave:X(O(ee,Te)),onDrop:X(O(ce,Q)),role:typeof D=="string"&&D!==""?D:"button"},y,v),!t&&!S?{tabIndex:0}:{}),fe)}},[v,Ae,Ee,Ce,Pe,Oe,_e,Te,Q,S,q,t]),ur=f.useCallback(function(i){i.stopPropagation()},[]),cr=f.useMemo(function(){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=i.refKey,y=s===void 0?"ref":s,D=i.onChange,w=i.onClick,H=ie(i,tn),$=ye({accept:n,multiple:l,type:"file",style:{display:"none"},onChange:K(O(D,Q)),onClick:K(O(w,ur)),autoComplete:"off",tabIndex:-1},y,c);return m(m({},$),H)}},[c,n,l,Q,t]),Ie=xe.length,ke=Ie>0&&Yr({files:xe,accept:n,minSize:u,maxSize:o,multiple:l,maxFiles:g}),fr=Ie>0&&!ke;return m(m({},Y),{},{isDragAccept:ke,isDragReject:fr,isFocused:sr&&!t,getRootProps:lr,getInputProps:cr,rootRef:v,inputRef:c,open:K(M)})}function dn(e,r){switch(r.type){case"focus":return m(m({},e),{},{isFocused:!0});case"blur":return m(m({},e),{},{isFocused:!1});case"openDialog":return m(m({},be),{},{isFileDialogActive:!0});case"closeDialog":return m(m({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var n=r.isDragActive,t=r.draggedFiles;return m(m({},e),{},{draggedFiles:t,isDragActive:n});case"setFiles":return m(m({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return m({},be);default:return e}}function He(){}const tr=({className:e,classModifier:r,id:n,name:t,disabled:a,onChange:o,multiple:u=!0,maxSize:l=2e7,minSize:g=0,accept:h,readOnly:x,placeholder:b="Glissez/déposez vos fichiers",label:_="Parcourir",icon:T="open",...I})=>{const k=f.useId(),R=f.useId(),A=(F,z)=>{if(!o)return;const C=F.map(c=>({id:k,file:{...c,lastModified:c.lastModified,name:c.name,type:c.type,size:c.size,stream:c.stream,arrayBuffer:c.arrayBuffer,slice:c.slice,text:c.text,preview:URL.createObjectURL(c)}})),P=z.map(c=>({id:R,file:{errors:c.errors,file:{...c.file,lastModified:c.file.lastModified,name:c.file.name,type:c.file.type,size:c.file.size}}}));o({values:C,errors:P,name:t,id:n})},{getRootProps:E,getInputProps:L,open:S}=nr({onDrop:A,minSize:g,maxSize:l,multiple:u,accept:h,disabled:a}),q=he(e,r,"af-form__file-input");return d.jsxs("div",{className:q,children:[d.jsxs("div",{...E({className:"drop-box"}),children:[d.jsx("input",{...L({id:n,name:t,readOnly:x,...I})}),d.jsx("div",{children:b})]}),d.jsxs(Dr,{type:"button",className:"af-btn",classModifier:"file hasIconLeft",onClick:S,disabled:a,children:[d.jsx("i",{className:`glyphicon glyphicon-${T}`})," ",_]})]})};tr.__docgenInfo={description:"",methods:[],displayName:"File",props:{classModifier:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Parcourir"',computed:!1}},icon:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"open"',computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: onChangeProps) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id?: string;
  name?: string;
  values: CustomFile[];
  errors?: CustomFile<FileRejection>[];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"values",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  file: T;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"file",value:{name:"T",required:!0}}]}}],raw:"CustomFile[]",required:!0}},{key:"errors",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  file: T;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"file",value:{name:"T",required:!0}}]}}],raw:"CustomFile<FileRejection>[]",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},multiple:{defaultValue:{value:"true",computed:!1},required:!1},maxSize:{defaultValue:{value:"20000000",computed:!1},required:!1},minSize:{defaultValue:{value:"0",computed:!1},required:!1},placeholder:{defaultValue:{value:'"Glissez/déposez vos fichiers"',computed:!1},required:!1}}};const ir=({className:e,classModifier:r,file:n,disabled:t,id:a,onClick:o})=>{const u=he(e,r,"af-form__file-line");return d.jsxs("li",{className:u,children:[n&&n.type&&n.type.startsWith("image")?d.jsx("i",{className:"glyphicon glyphicon-picture"}):d.jsx("i",{className:"glyphicon glyphicon-file"}),d.jsx("span",{children:n.name}),d.jsx("span",{children:n.size}),d.jsx("button",{disabled:t,type:"button",className:"af-link af-link--delete-file",onClick:()=>o(a),children:d.jsx("span",{className:"af-link__text",children:"Supprimer"})})]})};ir.__docgenInfo={description:"",methods:[],displayName:"FileLine",props:{id:{required:!0,tsType:{name:"string"},description:""},file:{required:!0,tsType:{name:"T"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},classModifier:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const ar=({errors:e})=>d.jsxs("div",{className:"af-form__file-errors",children:[d.jsx("span",{children:"Le chargement de certains fichiers a échoué : "}),d.jsx("ul",{className:"af-form__file-errors-list",children:e&&e.map(r=>d.jsxs("li",{children:[r.file.name," (",r.file.size,")"]},r.file.name))})]});ar.__docgenInfo={description:"",methods:[],displayName:"FileErrors",props:{errors:{required:!1,tsType:{name:"Array",elements:[{name:"FileRejection"}],raw:"FileRejection[]"},description:""}}};const or=({errors:e,values:r,className:n,classModifier:t,disabled:a,onClick:o})=>{const u=he(n,t,"custom-table-file af-file-table");return d.jsxs("div",{className:u,children:[e&&e.length>0&&d.jsx(ar,{errors:e}),r&&r.length>0&&d.jsx("ul",{className:"af-form__file-list",children:r.map(({file:l,id:g})=>d.jsx(ir,{disabled:a,file:l,onClick:o,id:g},g))})]})};or.__docgenInfo={description:"",methods:[],displayName:"FileTable",props:{errors:{required:!1,tsType:{name:"Array",elements:[{name:"FileRejection"}],raw:"FileRejection[]"},description:""},values:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  file: T;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"file",value:{name:"T",required:!0}}]}}],raw:"CustomFile[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""},classModifier:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const mn=({values:e=[],name:r="",onChange:n,classModifier:t="",message:a,children:o,helpMessage:u,id:l="",forceDisplayMessage:g,messageType:h,classNameContainerLabel:x,classNameContainerInput:b,label:_,isVisible:T,className:I,errors:k,fileLabel:R,disabled:A=!1,required:E,...L})=>{const S=(v,c)=>{const ae=e.filter(G=>G.id!==v);n({values:ae,name:r,id:c})},q=f.useId(),F=l??q,{inputClassModifier:z,inputFieldClassModifier:C}=br(t,A,!!o,E),P=`${C} label-top`;return d.jsxs(gr,{label:_,id:F,message:a,messageType:h,isVisible:T,forceDisplayMessage:g,className:I,classModifier:P,classNameContainerLabel:x,classNameContainerInput:b,children:[d.jsxs(vr,{className:"af-form__file",classModifier:C,children:[d.jsx(tr,{id:F,name:r,onChange:n,disabled:A,classModifier:z,label:R,required:E||(t==null?void 0:t.includes("required")),...L}),o]}),d.jsx(yr,{message:u,isVisible:!a}),d.jsx(or,{errors:k,values:e,onClick:v=>S(v,F),classModifier:t})]})};mn.__docgenInfo={description:"",methods:[],displayName:"FileInput",props:{fileLabel:{required:!1,tsType:{name:"string"},description:""},helpMessage:{required:!1,tsType:{name:"ReactNode"},description:""},values:{defaultValue:{value:"[]",computed:!1},required:!1},name:{defaultValue:{value:'""',computed:!1},required:!1},classModifier:{defaultValue:{value:'""',computed:!1},required:!1},id:{defaultValue:{value:'""',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};export{mn as F,tr as a,or as b};
