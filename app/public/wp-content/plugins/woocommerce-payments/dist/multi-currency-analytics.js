!function(){var r={77766:function(r,t,n){r.exports=n(8065)},2991:function(r,t,n){r.exports=n(61798)},15367:function(r,t,n){n(85906);var e=n(35703);r.exports=e("Array").concat},23866:function(r,t,n){n(68787);var e=n(35703);r.exports=e("Array").map},56043:function(r,t,n){var e=n(15367),o=Array.prototype;r.exports=function(r){var t=r.concat;return r===o||r instanceof Array&&t===o.concat?e:t}},88287:function(r,t,n){var e=n(23866),o=Array.prototype;r.exports=function(r){var t=r.map;return r===o||r instanceof Array&&t===o.map?e:t}},33916:function(r){r.exports=function(r){if("function"!=typeof r)throw TypeError(String(r)+" is not a function");return r}},96059:function(r,t,n){var e=n(10941);r.exports=function(r){if(!e(r))throw TypeError(String(r)+" is not an object");return r}},3610:function(r,t,n){var e=n(86843),o=n(37026),i=n(89678),u=n(43057),c=n(64692),a=[].push,f=function(r){var t=1==r,n=2==r,f=3==r,s=4==r,p=6==r,l=7==r,y=5==r||p;return function(v,m,d,h){for(var b,x,w=i(v),g=o(w),j=e(m,d,3),S=u(g.length),A=0,O=h||c,_=t?O(v,S):n||l?O(v,0):void 0;S>A;A++)if((y||A in g)&&(x=j(b=g[A],A,w),r))if(t)_[A]=x;else if(x)switch(r){case 3:return!0;case 5:return b;case 6:return A;case 2:a.call(_,b)}else switch(r){case 4:return!1;case 7:a.call(_,b)}return p?-1:f||s?s:_}};r.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},50568:function(r,t,n){var e=n(95981),o=n(99813),i=n(53385),u=o("species");r.exports=function(r){return i>=51||!e((function(){var t=[];return(t.constructor={})[u]=function(){return{foo:1}},1!==t[r](Boolean).foo}))}},64692:function(r,t,n){var e=n(10941),o=n(1052),i=n(99813)("species");r.exports=function(r,t){var n;return o(r)&&("function"!=typeof(n=r.constructor)||n!==Array&&!o(n.prototype)?e(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},82532:function(r){var t={}.toString;r.exports=function(r){return t.call(r).slice(8,-1)}},32029:function(r,t,n){var e=n(55746),o=n(65988),i=n(31887);r.exports=e?function(r,t,n){return o.f(r,t,i(1,n))}:function(r,t,n){return r[t]=n,r}},31887:function(r){r.exports=function(r,t){return{enumerable:!(1&r),configurable:!(2&r),writable:!(4&r),value:t}}},55449:function(r,t,n){"use strict";var e=n(46935),o=n(65988),i=n(31887);r.exports=function(r,t,n){var u=e(t);u in r?o.f(r,u,i(0,n)):r[u]=n}},55746:function(r,t,n){var e=n(95981);r.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},61333:function(r,t,n){var e=n(21899),o=n(10941),i=e.document,u=o(i)&&o(i.createElement);r.exports=function(r){return u?i.createElement(r):{}}},6049:function(r,t,n){var e=n(82532),o=n(21899);r.exports="process"==e(o.process)},2861:function(r,t,n){var e=n(626);r.exports=e("navigator","userAgent")||""},53385:function(r,t,n){var e,o,i=n(21899),u=n(2861),c=i.process,a=c&&c.versions,f=a&&a.v8;f?o=(e=f.split("."))[0]+e[1]:u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=e[1]),r.exports=o&&+o},35703:function(r,t,n){var e=n(54058);r.exports=function(r){return e[r+"Prototype"]}},76887:function(r,t,n){"use strict";var e=n(21899),o=n(49677).f,i=n(37252),u=n(54058),c=n(86843),a=n(32029),f=n(47457),s=function(r){var t=function(t,n,e){if(this instanceof r){switch(arguments.length){case 0:return new r;case 1:return new r(t);case 2:return new r(t,n)}return new r(t,n,e)}return r.apply(this,arguments)};return t.prototype=r.prototype,t};r.exports=function(r,t){var n,p,l,y,v,m,d,h,b=r.target,x=r.global,w=r.stat,g=r.proto,j=x?e:w?e[b]:(e[b]||{}).prototype,S=x?u:u[b]||(u[b]={}),A=S.prototype;for(l in t)n=!i(x?l:b+(w?".":"#")+l,r.forced)&&j&&f(j,l),v=S[l],n&&(m=r.noTargetGet?(h=o(j,l))&&h.value:j[l]),y=n&&m?m:t[l],n&&typeof v==typeof y||(d=r.bind&&n?c(y,e):r.wrap&&n?s(y):g&&"function"==typeof y?c(Function.call,y):y,(r.sham||y&&y.sham||v&&v.sham)&&a(d,"sham",!0),S[l]=d,g&&(f(u,p=b+"Prototype")||a(u,p,{}),u[p][l]=y,r.real&&A&&!A[l]&&a(A,l,y)))}},95981:function(r){r.exports=function(r){try{return!!r()}catch(r){return!0}}},86843:function(r,t,n){var e=n(33916);r.exports=function(r,t,n){if(e(r),void 0===t)return r;switch(n){case 0:return function(){return r.call(t)};case 1:return function(n){return r.call(t,n)};case 2:return function(n,e){return r.call(t,n,e)};case 3:return function(n,e,o){return r.call(t,n,e,o)}}return function(){return r.apply(t,arguments)}}},626:function(r,t,n){var e=n(54058),o=n(21899),i=function(r){return"function"==typeof r?r:void 0};r.exports=function(r,t){return arguments.length<2?i(e[r])||i(o[r]):e[r]&&e[r][t]||o[r]&&o[r][t]}},21899:function(r,t,n){var e=function(r){return r&&r.Math==Math&&r};r.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},47457:function(r){var t={}.hasOwnProperty;r.exports=function(r,n){return t.call(r,n)}},2840:function(r,t,n){var e=n(55746),o=n(95981),i=n(61333);r.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},37026:function(r,t,n){var e=n(95981),o=n(82532),i="".split;r.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(r){return"String"==o(r)?i.call(r,""):Object(r)}:Object},1052:function(r,t,n){var e=n(82532);r.exports=Array.isArray||function(r){return"Array"==e(r)}},37252:function(r,t,n){var e=n(95981),o=/#|\.prototype\./,i=function(r,t){var n=c[u(r)];return n==f||n!=a&&("function"==typeof t?e(t):!!t)},u=i.normalize=function(r){return String(r).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";r.exports=i},10941:function(r){r.exports=function(r){return"object"==typeof r?null!==r:"function"==typeof r}},82529:function(r){r.exports=!0},72497:function(r,t,n){var e=n(6049),o=n(53385),i=n(95981);r.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(e?38===o:o>37&&o<41)}))},65988:function(r,t,n){var e=n(55746),o=n(2840),i=n(96059),u=n(46935),c=Object.defineProperty;t.f=e?c:function(r,t,n){if(i(r),t=u(t,!0),i(n),o)try{return c(r,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(r[t]=n.value),r}},49677:function(r,t,n){var e=n(55746),o=n(36760),i=n(31887),u=n(74529),c=n(46935),a=n(47457),f=n(2840),s=Object.getOwnPropertyDescriptor;t.f=e?s:function(r,t){if(r=u(r),t=c(t,!0),f)try{return s(r,t)}catch(r){}if(a(r,t))return i(!o.f.call(r,t),r[t])}},36760:function(r,t){"use strict";var n={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!n.call({1:2},1);t.f=o?function(r){var t=e(this,r);return!!t&&t.enumerable}:n},54058:function(r){r.exports={}},48219:function(r){r.exports=function(r){if(null==r)throw TypeError("Can't call method on "+r);return r}},4911:function(r,t,n){var e=n(21899),o=n(32029);r.exports=function(r,t){try{o(e,r,t)}catch(n){e[r]=t}return t}},63030:function(r,t,n){var e=n(21899),o=n(4911),i="__core-js_shared__",u=e[i]||o(i,{});r.exports=u},68726:function(r,t,n){var e=n(82529),o=n(63030);(r.exports=function(r,t){return o[r]||(o[r]=void 0!==t?t:{})})("versions",[]).push({version:"3.10.2",mode:e?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},74529:function(r,t,n){var e=n(37026),o=n(48219);r.exports=function(r){return e(o(r))}},68459:function(r){var t=Math.ceil,n=Math.floor;r.exports=function(r){return isNaN(r=+r)?0:(r>0?n:t)(r)}},43057:function(r,t,n){var e=n(68459),o=Math.min;r.exports=function(r){return r>0?o(e(r),9007199254740991):0}},89678:function(r,t,n){var e=n(48219);r.exports=function(r){return Object(e(r))}},46935:function(r,t,n){var e=n(10941);r.exports=function(r,t){if(!e(r))return r;var n,o;if(t&&"function"==typeof(n=r.toString)&&!e(o=n.call(r)))return o;if("function"==typeof(n=r.valueOf)&&!e(o=n.call(r)))return o;if(!t&&"function"==typeof(n=r.toString)&&!e(o=n.call(r)))return o;throw TypeError("Can't convert object to primitive value")}},99418:function(r){var t=0,n=Math.random();r.exports=function(r){return"Symbol("+String(void 0===r?"":r)+")_"+(++t+n).toString(36)}},32302:function(r,t,n){var e=n(72497);r.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},99813:function(r,t,n){var e=n(21899),o=n(68726),i=n(47457),u=n(99418),c=n(72497),a=n(32302),f=o("wks"),s=e.Symbol,p=a?s:s&&s.withoutSetter||u;r.exports=function(r){return i(f,r)&&(c||"string"==typeof f[r])||(c&&i(s,r)?f[r]=s[r]:f[r]=p("Symbol."+r)),f[r]}},85906:function(r,t,n){"use strict";var e=n(76887),o=n(95981),i=n(1052),u=n(10941),c=n(89678),a=n(43057),f=n(55449),s=n(64692),p=n(50568),l=n(99813),y=n(53385),v=l("isConcatSpreadable"),m=9007199254740991,d="Maximum allowed index exceeded",h=y>=51||!o((function(){var r=[];return r[v]=!1,r.concat()[0]!==r})),b=p("concat"),x=function(r){if(!u(r))return!1;var t=r[v];return void 0!==t?!!t:i(r)};e({target:"Array",proto:!0,forced:!h||!b},{concat:function(r){var t,n,e,o,i,u=c(this),p=s(u,0),l=0;for(t=-1,e=arguments.length;t<e;t++)if(x(i=-1===t?u:arguments[t])){if(l+(o=a(i.length))>m)throw TypeError(d);for(n=0;n<o;n++,l++)n in i&&f(p,l,i[n])}else{if(l>=m)throw TypeError(d);f(p,l++,i)}return p.length=l,p}})},68787:function(r,t,n){"use strict";var e=n(76887),o=n(3610).map;e({target:"Array",proto:!0,forced:!n(50568)("map")},{map:function(r){return o(this,r,arguments.length>1?arguments[1]:void 0)}})},8065:function(r,t,n){var e=n(56043);r.exports=e},61798:function(r,t,n){var e=n(88287);r.exports=e}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return r[e](i,i.exports,n),i.exports}n.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(t,{a:t}),t},n.d=function(r,t){for(var e in t)n.o(t,e)&&!n.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:t[e]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),n.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},function(){"use strict";function r(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function t(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(t)||function(t,n){if(t){if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var e=n(77766),o=n.n(e),i=n(2991),u=n.n(i),c=window.wp.hooks,a=window.wp.i18n;(0,c.addFilter)("woocommerce_admin_report_table","woocommerce-payments",(function(r){var n,e;if(!r.items||!r.items.data||!r.items.data.length||"orders"!==r.endpoint)return r;var i=o()(n=[]).call(n,t(r.headers),[{isNumeric:!1,isSortable:!0,key:"customer_currency",label:(0,a.__)("Customer Currency","woocommerce-payments"),required:!1,screenReaderLabel:(0,a.__)("Customer Currency","woocommerce-payments")}]),c=u()(e=r.rows).call(e,(function(n,e){var i,u=r.items.data[e],c=u.hasOwnProperty("order_currency")?u.order_currency:"";return o()(i=[]).call(i,t(n),[{display:c,value:c}])}));return r.rows=c,r.headers=i,r}))}()}();