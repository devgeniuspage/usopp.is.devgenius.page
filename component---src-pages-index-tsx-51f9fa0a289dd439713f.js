(self.webpackChunkusopp_is_devgenius_page=self.webpackChunkusopp_is_devgenius_page||[]).push([[245],{26:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return zn}});var r=n(159);var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};Object.create;function a(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"==typeof SuppressedError&&SuppressedError;var i=n(833),s=n.n(i),c="-ms-",l="-moz-",u="-webkit-",f="comm",d="rule",p="decl",h="@keyframes",m=Math.abs,g=String.fromCharCode,v=Object.assign;function y(e){return e.trim()}function b(e,t){return(e=t.exec(e))?e[0]:e}function x(e,t,n){return e.replace(t,n)}function w(e,t,n){return e.indexOf(t,n)}function S(e,t){return 0|e.charCodeAt(t)}function E(e,t,n){return e.slice(t,n)}function k(e){return e.length}function $(e){return e.length}function C(e,t){return t.push(e),e}function I(e,t){return e.filter(function(e){return!b(e,t)})}var P=1,A=1,N=0,R=0,_=0,j="";function O(e,t,n,r,o,a,i,s){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:P,column:A,length:i,return:"",siblings:s}}function z(e,t){return v(O("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function D(e){for(;e.root;)e=z(e.root,{children:[e]});C(e,e.siblings)}function M(){return _=R>0?S(j,--R):0,A--,10===_&&(A=1,P--),_}function T(){return _=R<N?S(j,R++):0,A++,10===_&&(A=1,P++),_}function F(){return S(j,R)}function G(){return R}function Y(e,t){return E(j,e,t)}function L(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function B(e){return P=A=1,N=k(j=e),R=0,[]}function W(e){return j="",e}function H(e){return y(Y(R-1,J(91===e?e+2:40===e?e+1:e)))}function U(e){for(;(_=F())&&_<33;)T();return L(e)>2||L(_)>3?"":" "}function q(e,t){for(;--t&&T()&&!(_<48||_>102||_>57&&_<65||_>70&&_<97););return Y(e,G()+(t<6&&32==F()&&32==T()))}function J(e){for(;T();)switch(_){case e:return R;case 34:case 39:34!==e&&39!==e&&J(_);break;case 40:41===e&&J(e);break;case 92:T()}return R}function V(e,t){for(;T()&&e+_!==57&&(e+_!==84||47!==F()););return"/*"+Y(t,R-1)+"*"+g(47===e?e:T())}function K(e){for(;!L(F());)T();return Y(e,R)}function X(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Z(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case p:return e.return=e.return||e.value;case f:return"";case h:return e.return=e.value+"{"+X(e.children,r)+"}";case d:if(!k(e.value=e.props.join(",")))return""}return k(n=X(e.children,r))?e.return=e.value+"{"+n+"}":""}function Q(e,t,n){switch(function(e,t){return 45^S(e,0)?(((t<<2^S(e,0))<<2^S(e,1))<<2^S(e,2))<<2^S(e,3):0}(e,t)){case 5103:return u+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 4789:return l+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+l+e+c+e+e;case 5936:switch(S(e,t+11)){case 114:return u+e+c+x(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return u+e+c+x(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return u+e+c+x(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return u+e+c+e+e;case 6165:return u+e+c+"flex-"+e+e;case 5187:return u+e+x(e,/(\w+).+(:[^]+)/,u+"box-$1$2"+c+"flex-$1$2")+e;case 5443:return u+e+c+"flex-item-"+x(e,/flex-|-self/g,"")+(b(e,/flex-|baseline/)?"":c+"grid-row-"+x(e,/flex-|-self/g,""))+e;case 4675:return u+e+c+"flex-line-pack"+x(e,/align-content|flex-|-self/g,"")+e;case 5548:return u+e+c+x(e,"shrink","negative")+e;case 5292:return u+e+c+x(e,"basis","preferred-size")+e;case 6060:return u+"box-"+x(e,"-grow","")+u+e+c+x(e,"grow","positive")+e;case 4554:return u+x(e,/([^-])(transform)/g,"$1"+u+"$2")+e;case 6187:return x(x(x(e,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),e,"")+e;case 5495:case 3959:return x(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return x(x(e,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+c+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+e+e;case 4200:if(!b(e,/flex-|baseline/))return c+"grid-column-align"+E(e,t)+e;break;case 2592:case 3360:return c+x(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,b(e.props,/grid-\w+-end/)})?~w(e+(n=n[t].value),"span",0)?e:c+x(e,"-start","")+e+c+"grid-row-span:"+(~w(n,"span",0)?b(n,/\d+/):+b(n,/\d+/)-+b(e,/\d+/))+";":c+x(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return b(e.props,/grid-\w+-start/)})?e:c+x(x(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return x(e,/(.+)-inline(.+)/,u+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(k(e)-1-t>6)switch(S(e,t+1)){case 109:if(45!==S(e,t+4))break;case 102:return x(e,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+l+(108==S(e,t+3)?"$3":"$2-$3"))+e;case 115:return~w(e,"stretch",0)?Q(x(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return x(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,o,a,i,s){return c+n+":"+r+s+(o?c+n+"-span:"+(a?i:+i-+r)+s:"")+e});case 4949:if(121===S(e,t+6))return x(e,":",":"+u)+e;break;case 6444:switch(S(e,45===S(e,14)?18:11)){case 120:return x(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+u+(45===S(e,14)?"inline-":"")+"box$3$1"+u+"$2$3$1"+c+"$2box$3")+e;case 100:return x(e,":",":"+c)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return x(e,"scroll-","scroll-snap-")+e}return e}function ee(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case p:return void(e.return=Q(e.value,e.length,n));case h:return X([z(e,{value:x(e.value,"@","@"+u)})],r);case d:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(b(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":D(z(e,{props:[x(t,/:(read-\w+)/,":-moz-$1")]})),D(z(e,{props:[t]})),v(e,{props:I(n,r)});break;case"::placeholder":D(z(e,{props:[x(t,/:(plac\w+)/,":"+u+"input-$1")]})),D(z(e,{props:[x(t,/:(plac\w+)/,":-moz-$1")]})),D(z(e,{props:[x(t,/:(plac\w+)/,c+"input-$1")]})),D(z(e,{props:[t]})),v(e,{props:I(n,r)})}return""})}}function te(e){return W(ne("",null,null,null,[""],e=B(e),0,[0],e))}function ne(e,t,n,r,o,a,i,s,c){for(var l=0,u=0,f=i,d=0,p=0,h=0,v=1,y=1,b=1,E=0,$="",I=o,P=a,A=r,N=$;y;)switch(h=E,E=T()){case 40:if(108!=h&&58==S(N,f-1)){-1!=w(N+=x(H(E),"&","&\f"),"&\f",m(l?s[l-1]:0))&&(b=-1);break}case 34:case 39:case 91:N+=H(E);break;case 9:case 10:case 13:case 32:N+=U(h);break;case 92:N+=q(G()-1,7);continue;case 47:switch(F()){case 42:case 47:C(oe(V(T(),G()),t,n,c),c);break;default:N+="/"}break;case 123*v:s[l++]=k(N)*b;case 125*v:case 59:case 0:switch(E){case 0:case 125:y=0;case 59+u:-1==b&&(N=x(N,/\f/g,"")),p>0&&k(N)-f&&C(p>32?ae(N+";",r,n,f-1,c):ae(x(N," ","")+";",r,n,f-2,c),c);break;case 59:N+=";";default:if(C(A=re(N,t,n,l,u,o,s,$,I=[],P=[],f,a),a),123===E)if(0===u)ne(N,t,A,A,I,a,f,s,P);else switch(99===d&&110===S(N,3)?100:d){case 100:case 108:case 109:case 115:ne(e,A,A,r&&C(re(e,A,A,0,0,o,s,$,o,I=[],f,P),P),o,P,f,s,r?I:P);break;default:ne(N,A,A,A,[""],P,0,s,P)}}l=u=p=0,v=b=1,$=N="",f=i;break;case 58:f=1+k(N),p=h;default:if(v<1)if(123==E)--v;else if(125==E&&0==v++&&125==M())continue;switch(N+=g(E),E*v){case 38:b=u>0?1:(N+="\f",-1);break;case 44:s[l++]=(k(N)-1)*b,b=1;break;case 64:45===F()&&(N+=H(T())),d=F(),u=f=k($=N+=K(G())),E++;break;case 45:45===h&&2==k(N)&&(v=0)}}return a}function re(e,t,n,r,o,a,i,s,c,l,u,f){for(var p=o-1,h=0===o?a:[""],g=$(h),v=0,b=0,w=0;v<r;++v)for(var S=0,k=E(e,p+1,p=m(b=i[v])),C=e;S<g;++S)(C=y(b>0?h[S]+" "+k:x(k,/&\f/g,h[S])))&&(c[w++]=C);return O(e,t,n,0===o?d:s,c,l,u,f)}function oe(e,t,n,r){return O(e,t,n,f,g(_),E(e,2,-2),0,r)}function ae(e,t,n,r,o){return O(e,t,n,p,E(e,0,r),E(e,r+1,-1),r,o)}var ie={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},se="undefined"!=typeof process&&void 0!=={}&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ce="active",le="data-styled-version",ue="6.1.12",fe="/*!sc*/\n",de="undefined"!=typeof window&&"HTMLElement"in window,pe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),he={},me=(new Set,Object.freeze([])),ge=Object.freeze({});function ve(e,t,n){return void 0===n&&(n=ge),e.theme!==n.theme&&e.theme||t||n.theme}var ye=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),be=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xe=/(^-|-$)/g;function we(e){return e.replace(be,"-").replace(xe,"")}var Se=/(a)(d)/gi,Ee=function(e){return String.fromCharCode(e+(e>25?39:97))};function ke(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ee(t%52)+n;return(Ee(t%52)+n).replace(Se,"$1-$2")}var $e,Ce=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ie=function(e){return Ce(5381,e)};function Pe(e){return ke(Ie(e)>>>0)}function Ae(e){return e.displayName||e.name||"Component"}function Ne(e){return"string"==typeof e&&!0}var Re="function"==typeof Symbol&&Symbol.for,_e=Re?Symbol.for("react.memo"):60115,je=Re?Symbol.for("react.forward_ref"):60112,Oe={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ze={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},De={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Me=(($e={})[je]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$e[_e]=De,$e);function Te(e){return("type"in(t=e)&&t.type.$$typeof)===_e?De:"$$typeof"in e?Me[e.$$typeof]:Oe;var t}var Fe=Object.defineProperty,Ge=Object.getOwnPropertyNames,Ye=Object.getOwnPropertySymbols,Le=Object.getOwnPropertyDescriptor,Be=Object.getPrototypeOf,We=Object.prototype;function He(e,t,n){if("string"!=typeof t){if(We){var r=Be(t);r&&r!==We&&He(e,r,n)}var o=Ge(t);Ye&&(o=o.concat(Ye(t)));for(var a=Te(e),i=Te(t),s=0;s<o.length;++s){var c=o[s];if(!(c in ze||n&&n[c]||i&&c in i||a&&c in a)){var l=Le(t,c);try{Fe(e,c,l)}catch(e){}}}}return e}function Ue(e){return"function"==typeof e}function qe(e){return"object"==typeof e&&"styledComponentId"in e}function Je(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ve(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ke(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xe(e,t,n){if(void 0===n&&(n=!1),!n&&!Ke(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Xe(e[r],t[r]);else if(Ke(t))for(var r in t)e[r]=Xe(e[r],t[r]);return e}function Ze(e,t){Object.defineProperty(e,"toString",{value:t})}function Qe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var et=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw Qe(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var a=r;a<o;a++)this.groupSizes[a]=0}for(var i=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,a=r;a<o;a++)t+="".concat(this.tag.getRule(a)).concat(fe);return t},e}(),tt=new Map,nt=new Map,rt=1,ot=function(e){if(tt.has(e))return tt.get(e);for(;nt.has(rt);)rt++;var t=rt++;return tt.set(e,t),nt.set(t,e),t},at=function(e,t){rt=t+1,tt.set(e,t),nt.set(t,e)},it="style[".concat(se,"][").concat(le,'="').concat(ue,'"]'),st=new RegExp("^".concat(se,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ct=function(e,t,n){for(var r,o=n.split(","),a=0,i=o.length;a<i;a++)(r=o[a])&&e.registerName(t,r)},lt=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(fe),o=[],a=0,i=r.length;a<i;a++){var s=r[a].trim();if(s){var c=s.match(st);if(c){var l=0|parseInt(c[1],10),u=c[2];0!==l&&(at(u,l),ct(e,u,c[3]),e.getTag().insertRules(l,o)),o.length=0}else o.push(s)}}},ut=function(e){for(var t=document.querySelectorAll(it),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(se)!==ce&&(lt(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function ft(){return n.nc}var dt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(se,"]")));return t[t.length-1]}(n),a=void 0!==o?o.nextSibling:null;r.setAttribute(se,ce),r.setAttribute(le,ue);var i=ft();return i&&r.setAttribute("nonce",i),n.insertBefore(r,a),r},pt=function(){function e(e){this.element=dt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw Qe(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),ht=function(){function e(e){this.element=dt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),mt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),gt=de,vt={isServer:!de,useCSSOMInjection:!pe},yt=function(){function e(e,t,n){void 0===e&&(e=ge),void 0===t&&(t={});var r=this;this.options=o(o({},vt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&de&&gt&&(gt=!1,ut(this)),Ze(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return nt.get(e)}(n);if(void 0===o)return"continue";var a=e.names.get(o),i=t.getGroup(n);if(void 0===a||!a.size||0===i.length)return"continue";var s="".concat(se,".g").concat(n,'[id="').concat(o,'"]'),c="";void 0!==a&&a.forEach(function(e){e.length>0&&(c+="".concat(e,","))}),r+="".concat(i).concat(s,'{content:"').concat(c,'"}').concat(fe)},a=0;a<n;a++)o(a);return r}(r)})}return e.registerId=function(e){return ot(e)},e.prototype.rehydrate=function(){!this.server&&de&&ut(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(o(o({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new mt(n):t?new pt(n):new ht(n)}(this.options),new et(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(ot(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(ot(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(ot(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),bt=/&/g,xt=/^\s*\/\/.*$/gm;function wt(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=wt(e.children,t)),e})}function St(e){var t,n,r,o=void 0===e?ge:e,a=o.options,i=void 0===a?ge:a,s=o.plugins,c=void 0===s?me:s,l=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},u=c.slice();u.push(function(e){e.type===d&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(bt,n).replace(r,l))}),i.prefix&&u.push(ee),u.push(Z);var f=function(e,o,a,s){void 0===o&&(o=""),void 0===a&&(a=""),void 0===s&&(s="&"),t=s,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var c=e.replace(xt,""),l=te(a||o?"".concat(a," ").concat(o," { ").concat(c," }"):c);i.namespace&&(l=wt(l,i.namespace));var f,d,p,h=[];return X(l,(f=u.concat((p=function(e){return h.push(e)},function(e){e.root||(e=e.return)&&p(e)})),d=$(f),function(e,t,n,r){for(var o="",a=0;a<d;a++)o+=f[a](e,t,n,r)||"";return o})),h};return f.hash=c.length?c.reduce(function(e,t){return t.name||Qe(15),Ce(e,t.name)},5381).toString():"",f}var Et=new yt,kt=St(),$t=r.createContext({shouldForwardProp:void 0,styleSheet:Et,stylis:kt}),Ct=($t.Consumer,r.createContext(void 0));function It(){return(0,r.useContext)($t)}function Pt(e){var t=(0,r.useState)(e.stylisPlugins),n=t[0],o=t[1],a=It().styleSheet,i=(0,r.useMemo)(function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,a]),c=(0,r.useMemo)(function(){return St({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);(0,r.useEffect)(function(){s()(n,e.stylisPlugins)||o(e.stylisPlugins)},[e.stylisPlugins]);var l=(0,r.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:c}},[e.shouldForwardProp,i,c]);return r.createElement($t.Provider,{value:l},r.createElement(Ct.Provider,{value:c},e.children))}var At=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=kt);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Ze(this,function(){throw Qe(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=kt),this.name+e.hash},e}(),Nt=function(e){return e>="A"&&e<="Z"};function Rt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Nt(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var _t=function(e){return null==e||!1===e||""===e},jt=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!_t(i)&&(Array.isArray(i)&&i.isCss||Ue(i)?r.push("".concat(Rt(o),":"),i,";"):Ke(i)?r.push.apply(r,a(a(["".concat(o," {")],jt(i),!1),["}"],!1)):r.push("".concat(Rt(o),": ").concat((t=o,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in ie||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ot(e,t,n,r){return _t(e)?[]:qe(e)?[".".concat(e.styledComponentId)]:Ue(e)?!Ue(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Ot(e(t),t,n,r):e instanceof At?n?(e.inject(n,r),[e.getName(r)]):[e]:Ke(e)?jt(e):Array.isArray(e)?Array.prototype.concat.apply(me,e.map(function(e){return Ot(e,t,n,r)})):[e.toString()];var o}function zt(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ue(n)&&!qe(n))return!1}return!0}var Dt=Ie(ue),Mt=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&zt(e),this.componentId=t,this.baseHash=Ce(Dt,t),this.baseStyle=n,yt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Je(r,this.staticRulesId);else{var o=Ve(Ot(this.rules,e,t,n)),a=ke(Ce(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,a)){var i=n(o,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,i)}r=Je(r,a),this.staticRulesId=a}else{for(var s=Ce(this.baseHash,n.hash),c="",l=0;l<this.rules.length;l++){var u=this.rules[l];if("string"==typeof u)c+=u;else if(u){var f=Ve(Ot(u,e,t,n));s=Ce(s,f+l),c+=f}}if(c){var d=ke(s>>>0);t.hasNameForId(this.componentId,d)||t.insertRules(this.componentId,d,n(c,".".concat(d),void 0,this.componentId)),r=Je(r,d)}}return r},e}(),Tt=r.createContext(void 0);Tt.Consumer;var Ft={};new Set;function Gt(e,t,n){var a=qe(e),i=e,s=!Ne(e),c=t.attrs,l=void 0===c?me:c,u=t.componentId,f=void 0===u?function(e,t){var n="string"!=typeof e?"sc":we(e);Ft[n]=(Ft[n]||0)+1;var r="".concat(n,"-").concat(Pe(ue+n+Ft[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):u,d=t.displayName,p=void 0===d?function(e){return Ne(e)?"styled.".concat(e):"Styled(".concat(Ae(e),")")}(e):d,h=t.displayName&&t.componentId?"".concat(we(t.displayName),"-").concat(t.componentId):t.componentId||f,m=a&&i.attrs?i.attrs.concat(l).filter(Boolean):l,g=t.shouldForwardProp;if(a&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;g=function(e,t){return v(e,t)&&y(e,t)}}else g=v}var b=new Mt(n,h,a?i.componentStyle:void 0);function x(e,t){return function(e,t,n){var a=e.attrs,i=e.componentStyle,s=e.defaultProps,c=e.foldedComponentIds,l=e.styledComponentId,u=e.target,f=r.useContext(Tt),d=It(),p=e.shouldForwardProp||d.shouldForwardProp,h=ve(t,f,s)||ge,m=function(e,t,n){for(var r,a=o(o({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var s=Ue(r=e[i])?r(a):r;for(var c in s)a[c]="className"===c?Je(a[c],s[c]):"style"===c?o(o({},a[c]),s[c]):s[c]}return t.className&&(a.className=Je(a.className,t.className)),a}(a,t,h),g=m.as||u,v={};for(var y in m)void 0===m[y]||"$"===y[0]||"as"===y||"theme"===y&&m.theme===h||("forwardedAs"===y?v.as=m.forwardedAs:p&&!p(y,g)||(v[y]=m[y]));var b=function(e,t){var n=It();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,m),x=Je(c,l);return b&&(x+=" "+b),m.className&&(x+=" "+m.className),v[Ne(g)&&!ye.has(g)?"class":"className"]=x,v.ref=n,(0,r.createElement)(g,v)}(w,e,t)}x.displayName=p;var w=r.forwardRef(x);return w.attrs=m,w.componentStyle=b,w.displayName=p,w.shouldForwardProp=g,w.foldedComponentIds=a?Je(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=h,w.target=a?i.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)Xe(e,o[r],!0);return e}({},i.defaultProps,e):e}}),Ze(w,function(){return".".concat(w.styledComponentId)}),s&&He(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Yt(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Lt=function(e){return Object.assign(e,{isCss:!0})};function Bt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ue(e)||Ke(e))return Lt(Ot(Yt(me,a([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Ot(r):Lt(Ot(Yt(r,t)))}function Wt(e,t,n){if(void 0===n&&(n=ge),!t)throw Qe(1,t);var r=function(r){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,n,Bt.apply(void 0,a([r],o,!1)))};return r.attrs=function(r){return Wt(e,t,o(o({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Wt(e,t,o(o({},n),r))},r}var Ht=function(e){return Wt(Gt,e)},Ut=Ht;ye.forEach(function(e){Ut[e]=Ht(e)});var qt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=zt(e),yt.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var o=r(Ve(Ot(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&yt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Jt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ve(Bt.apply(void 0,a([e],t,!1))),o=Pe(r);return new At(o,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=ft(),r=Ve([n&&'nonce="'.concat(n,'"'),"".concat(se,'="true"'),"".concat(le,'="').concat(ue,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Qe(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Qe(2);var n=e.instance.toString();if(!n)return[];var a=((t={})[se]="",t[le]=ue,t.dangerouslySetInnerHTML={__html:n},t),i=ft();return i&&(a.nonce=i),[r.createElement("style",o({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new yt({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Qe(2);return r.createElement(Pt,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Qe(3)}})(),"__sc-".concat(se,"__");const Vt=Ut.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
`;function Kt(e){let{children:t,className:n,as:o}=e;return r.createElement(Vt,{as:o,className:n},t)}const Xt={default:Bt`
    background: #0b1f3f;
    color: #ffffff;
    border: 1px solid rgba(255,255,255,0.12);
  `,secondary:Bt`
    background: #ffffff;
    color: #0b1f3f;
    border: 1px solid rgba(0,0,0,0.12);
  `,ghost:Bt`
    background: transparent;
    color: #0b1f3f;
    border: 1px solid transparent;
  `},Zt={sm:Bt`
    height: 32px;
    padding: 0 10px;
    font-size: 13px;
    border-radius: 8px;
  `,md:Bt`
    height: 40px;
    padding: 0 14px;
    font-size: 14px;
    border-radius: 10px;
  `,lg:Bt`
    height: 48px;
    padding: 0 16px;
    font-size: 15px;
    border-radius: 12px;
  `},Qt=Ut.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 600;
  transition: opacity .12s ease, transform .12s ease, box-shadow .12s ease;
  ${e=>{let{$variant:t}=e;return Xt[t]}}
  ${e=>{let{$size:t}=e;return Zt[t]}}
  &:hover { opacity: .95; transform: translateY(-1px); }
  &:active { transform: translateY(0); }
`;function en(e){let{variant:t="default",size:n="md",...o}=e;return r.createElement(Qt,Object.assign({$variant:t,$size:n},o))}const tn=Ut.header`
  width: fit-content;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 12px 0;
  margin: 0 auto;
`,nn=Ut.div`
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 9999px;
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 6px 24px rgba(0,0,0,0.06);
  width: fit-content;
  transition: width .22s ease;
  overflow: hidden;
  will-change: width;
`,rn=Ut.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,on=Ut.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  min-width: max-content;

  & button {
    font-size: 18px;
    border-radius: 18px;
    cursor: pointer;
  }
`,an=Ut.span`
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  background: #1c1f24;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
`,sn=Ut.a`
  color: var(--link);
  font-weight: 700;
  font-size: 18px;
  padding: 6px 10px;
  border-radius: 8px;
  transition: color .12s ease, background .12s ease;
  &:hover { color: var(--link-hover); background: var(--hover-bg); }
`,cn=Ut.div`
  display: flex;
  align-items: center;
  gap: 12px;
  transition: opacity .18s ease, transform .18s ease, max-width .22s ease;
  opacity: ${e=>e.$visible?1:0};
  transform: ${e=>e.$visible?"translateY(0)":"translateY(-4px)"};
  pointer-events: ${e=>e.$visible?"auto":"none"};
  overflow: hidden;
  max-width: ${e=>e.$visible?"480px":"0px"};
`,ln=Ut.button`
  width: 36px;
  height: 36px;
  border-radius: 9999px;
  border: 1px solid var(--border);
  background: var(--muted-bg);
  color: var(--text);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: all .5s ease-in-out;
  &:hover { opacity: .95; transform: translateY(-1px); }
`;function un(){const e=(0,r.useRef)(null),t=(0,r.useRef)(0),{0:n,1:o}=(0,r.useState)(!0),{0:a,1:i}=(0,r.useState)(()=>"undefined"==typeof document?"light":"dark"===document.documentElement.getAttribute("data-theme")?"dark":"light");(0,r.useEffect)(()=>{const t=()=>{var t,n;const r=null!==(t=null===(n=e.current)||void 0===n?void 0:n.offsetHeight)&&void 0!==t?t:0;r>0&&document.documentElement.style.setProperty("--header-height",`${r}px`)};requestAnimationFrame(t);const n=()=>requestAnimationFrame(t);return window.addEventListener("resize",n,{passive:!0}),()=>window.removeEventListener("resize",n)},[]),(0,r.useEffect)(()=>{t.current=window.scrollY;const e=()=>{const e=window.scrollY,n=t.current;e>n+4?o(!1):e<n-4&&o(!0),t.current=e};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]);return r.createElement(tn,{ref:e},r.createElement(Kt,null,r.createElement(nn,{$compact:!n},r.createElement(rn,null,r.createElement(an,null,"🔥"),r.createElement(cn,{$visible:n},r.createElement(sn,{href:"#community"},"About"),r.createElement(sn,{href:"#experience"},"Experience"),r.createElement(sn,{href:"#projects"},"Projects"),r.createElement(sn,{href:"#skills"},"Skills"))),r.createElement(on,null,r.createElement(en,{variant:"default",size:"md"},"Contact"),r.createElement(ln,{"aria-label":"Toggle theme",onClick:()=>{const e="dark"===a?"light":"dark";i(e),"undefined"!=typeof document&&document.documentElement.setAttribute("data-theme",e);try{"undefined"!=typeof window&&window.localStorage.setItem("theme",e)}catch{}}},"dark"===a?"🌙":"☀️"),r.createElement(ln,{"aria-label":"Create"},"＋")))))}const fn=Jt`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,dn=Jt`
  0%, 30%, 100% { opacity: 0; box-shadow: 0 0 0vw 0vw yellow; }
  5% { opacity: 1; box-shadow: 0 0 2vw 0.4vw yellow; }
`,pn=Ut.div`
  position: fixed;
  pointer-events: none;
  z-index: 50;
  background: var(--bg);
`,hn=Ut.span`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 0.4vw;
  height: 0.4vw;
  margin: -0.2vw 0 0 9.8vw;
  animation: ease 200s alternate infinite;
  pointer-events: none;
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform-origin: -10vw;
  }
  &::before {
    background: var(--text);
    opacity: 0.4;
    animation: ${fn} ease alternate infinite;
    animation-duration: var(--rotation-duration, 10s);
  }
  &::after {
    background: white;
    opacity: 0;
    box-shadow: 0 0 0vw 0vw yellow;
    animation: ${fn} ease alternate infinite, ${dn} ease infinite;
    animation-duration: var(--rotation-duration, 10s), var(--flash-duration, 6000ms);
    animation-delay: 0ms, var(--flash-delay, 500ms);
  }
`;function mn(){const e=r.useMemo(()=>{const e=(e,t)=>Math.random()*(t-e)+e;let t="";for(let n=1;n<=15;n++){const r=Math.floor(e(16,28));t+=`@keyframes ${`move${n}`} {`;for(let n=0;n<=r;n++){t+=`${(n*(100/r)).toFixed(4)}% { transform: translateX(${(Math.floor(e(0,100))-50).toString()+"vw"}) translateY(${(Math.floor(e(0,100))-50).toString()+"vh"}) scale(${(Math.floor(e(25,100))/100).toFixed(2)}); }`}t+="}"}return t},[]),t=r.useMemo(()=>Array.from({length:15}).map((e,t)=>({key:t+1,moveName:`move${t+1}`,rotationDuration:`${Math.floor(10*Math.random())+8}s`,flashDuration:`${Math.floor(6e3*Math.random())+5e3}ms`,flashDelay:`${Math.floor(8e3*Math.random())+500}ms`})),[15]);return r.createElement(pn,null,r.createElement("style",null,e),t.map(e=>r.createElement(hn,{key:e.key,style:{animationName:e.moveName,"--rotation-duration":e.rotationDuration,"--flash-duration":e.flashDuration,"--flash-delay":e.flashDelay}})))}const gn=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=Bt.apply(void 0,a([e],t,!1)),s="sc-global-".concat(Pe(JSON.stringify(i))),c=new qt(i,s),l=function(e){var t=It(),n=r.useContext(Tt),o=r.useRef(t.styleSheet.allocateGSInstance(s)).current;return t.styleSheet.server&&u(o,e,t.styleSheet,n,t.stylis),r.useLayoutEffect(function(){if(!t.styleSheet.server)return u(o,e,t.styleSheet,n,t.stylis),function(){return c.removeStyles(o,t.styleSheet)}},[o,e,t.styleSheet,n,t.stylis]),null};function u(e,t,n,r,a){if(c.isStatic)c.renderStyles(e,he,n,a);else{var i=o(o({},t),{theme:ve(t,r,l.defaultProps)});c.renderStyles(e,i,n,a)}}return r.memo(l)})`
  html, body, #___gatsby, #gatsby-focus-wrapper { height: 100%; }
  body { margin: 0; font-family: 'Noto Sans JP', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif; background: var(--bg); color: var(--text); }
  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; }
  :root {
    --header-height: 200px;
    --bg: #f7f9fc;
    --text: #0b1f3f;
    --card-bg: #ffffff;
    --border: #e7edf6;
    --muted-bg: #f0f4fb;
    --link: #5a6b85;
    --link-hover: #0b1f3f;
    --hover-bg: #f5f8fd;
  }
  [data-theme="dark"] {
    --bg: #000000ff;
    --text: #e6edf7;
    --card-bg: #121826;
    --border: #2a3340;
    --muted-bg: #1a2233;
    --link: #cbd5e1;
    --link-hover: #ffffff;
    --hover-bg: rgba(255,255,255,0.06);
  }
`,vn=Ut.main`
  min-height: calc(100vh - 140px);
  padding-top: var(--header-height, 200px);
  width: 70%;
  margin: 0 auto;
  color: var(--text);
`,yn=Ut.footer`
`,bn=Ut.div`
  padding: 20px 0;
  font-size: 14px;
  opacity: 0.9;
`;function xn(e){let{children:t}=e;return r.useEffect(()=>{const e="undefined"!=typeof window?window.localStorage.getItem("theme"):null,t="dark"===e||"light"===e?e:"light";"undefined"!=typeof document&&document.documentElement.setAttribute("data-theme",t)},[]),r.createElement(r.Fragment,null,r.createElement(gn,null),r.createElement(mn,null),r.createElement(un,null),r.createElement(vn,null,t),r.createElement(yn,null,r.createElement(Kt,null,r.createElement(bn,null,"© ",(new Date).getFullYear()," USOPP Portfolio"))))}const wn=Ut.article`
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text);
  display: flex;
  flex-direction: column;
  transition: transform .12s ease, box-shadow .12s ease, opacity .12s ease;
  &:hover { transform: translateY(-2px); box-shadow: 0 6px 22px rgba(0,0,0,0.08); opacity: .98; }
  display: flex;
  align-items: center;
  justify-content: center;
`,Sn=(Ut.div`
  padding: 16px 16px 0;
  display: grid;
  gap: 10px;
`,Ut.h3`
  font-size: 18px;
  font-weight: 800;
`,Ut.p`
  font-size: 13px;
  opacity: .9;
`,Ut.div`
  width:100%;
  padding: 12px 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`),En=Ut.div`
  padding: 12px 16px 16px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  border-top: 1px solid var(--border);
`;function kn(e){let{children:t,className:n}=e;return r.createElement(Sn,{className:n},t)}function $n(e){let{children:t,className:n}=e;return r.createElement(En,{className:n},t)}const Cn=Ut.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  padding: 0 8px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 700;
  color: #0b1f3f;
  background: #f0f4fb;
  border: 1px solid #e7edf6;
`;function In(e){let{children:t,className:n}=e;return r.createElement(Cn,{className:n},t)}const Pn=Ut.section`
  padding: 120px 0 60px;
  
  h1 {
    font-size: 2.9rem;
    font-weight: 800;
    line-height: 3.5rem;
  }
    
  h2 {
    font-size: 1.15rem;
    font-weight: 500;
    line-height: 2rem;
  }
`,An=Ut.div`
  display: grid;
  grid-template-columns: 1fr 450px;
  gap: 32px;
  align-items: center;
`,Nn=Ut(function(e){let{children:t,className:n}=e;return r.createElement(wn,{className:n},t)})`
  padding: 25px 0;
`,Rn=Ut.div`
  width: 96px;
  height: 96px;
  border-radius: 24px;
  background: linear-gradient(135deg, #355eff 0%, #a855f7 100%);
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 800;
`,_n=Ut.span`
  display: inline-block;
  font-size: 1.2rem;
`,jn=Ut.div`
`,On=Ut.a`
  color: var(--link);
  text-decoration: none;
  &:hover { color: var(--link-hover); }
`;var zn=()=>r.createElement(xn,null,r.createElement(Pn,null,r.createElement(An,null,r.createElement("div",null,r.createElement("h1",null,"안녕하세요.",r.createElement("br",null),"김건위(@Usopp)입니다."),r.createElement("h2",null,"화면에 가치를 담고 싶어하는 ",r.createElement("b",null,"프론트엔드 개발자"),"로",r.createElement("br",null),"사용자가 마주하는 모든 순간을 의미있게 만들고 있습니다.")),r.createElement(Nn,null,r.createElement(kn,null,r.createElement(Rn,null,"U"),r.createElement(jn,null,r.createElement(_n,null,"김건위(@Usopp)")),r.createElement(jn,null,r.createElement(_n,null,r.createElement(On,{href:"mailto:usopp@danbeeinc.com"},"usopp@danbeeinc.com"))),r.createElement(jn,null,r.createElement(_n,null,"프론트엔드 개발")),r.createElement(jn,null,r.createElement(_n,null,r.createElement(In,null,"danbee inc.")))),r.createElement($n,null)))))},833:function(e){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var u=e[l],f=t[l];if(!1===(o=n?n.call(r,u,f,l):void 0)||void 0===o&&u!==f)return!1}return!0}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-51f9fa0a289dd439713f.js.map