!function(t,e){function n(){var t=m.elements;return"string"==typeof t?t.split(" "):t}function i(t){var e=d[t[f]];return e||(e={},h++,t[f]=h,d[h]=e),e}function r(t,n,r){return n||(n=e),l?n.createElement(t):(r||(r=i(n)),n=r.cache[t]?r.cache[t].cloneNode():p.test(t)?(r.cache[t]=r.createElem(t)).cloneNode():r.createElem(t),n.canHaveChildren&&!u.test(t)?r.frag.appendChild(n):n)}function o(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return m.shivMethods?r(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/\w+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(m,e.frag)}function s(t){t||(t=e);var n=i(t);if(m.shivCSS&&!a&&!n.hasCSS){var r,s=t;r=s.createElement("p"),s=s.getElementsByTagName("head")[0]||s.documentElement,r.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>",r=s.insertBefore(r.lastChild,s.firstChild),n.hasCSS=!!r}return l||o(t,n),t}var a,l,c=t.html5||{},u=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f="_html5shiv",h=0,d={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",a="hidden"in t;var n;if(!(n=1==t.childNodes.length)){e.createElement("a");var i=e.createDocumentFragment();n="undefined"==typeof i.cloneNode||"undefined"==typeof i.createDocumentFragment||"undefined"==typeof i.createElement}l=n}catch(r){l=a=!0}}();var m={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",version:"3.6.2pre",shivCSS:!1!==c.shivCSS,supportsUnknownElements:l,shivMethods:!1!==c.shivMethods,type:"default",shivDocument:s,createElement:r,createDocumentFragment:function(t,r){if(t||(t=e),l)return t.createDocumentFragment();for(var r=r||i(t),o=r.frag.cloneNode(),s=0,a=n(),c=a.length;c>s;s++)o.createElement(a[s]);return o}};t.html5=m,s(e)}(this,document);