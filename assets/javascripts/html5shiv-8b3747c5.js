!function(e,t){function n(){var e=m.elements;return"string"==typeof e?e.split(" "):e}function i(e){var t=d[e[p]];return t||(t={},f++,e[p]=f,d[f]=t),t}function r(e,n,r){return n||(n=t),l?n.createElement(e):(r||(r=i(n)),n=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),n.canHaveChildren&&!u.test(e)?r.frag.appendChild(n):n)}function o(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return m.shivMethods?r(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(m,t.frag)}function s(e){e||(e=t);var n=i(e);if(m.shivCSS&&!a&&!n.hasCSS){var r,s=e;r=s.createElement("p"),s=s.getElementsByTagName("head")[0]||s.documentElement,r.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>",r=s.insertBefore(r.lastChild,s.firstChild),n.hasCSS=!!r}return l||o(e,n),e}var a,l,c=e.html5||{},u=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",f=0,d={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",a="hidden"in e;var n;if(!(n=1==e.childNodes.length)){t.createElement("a");var i=t.createDocumentFragment();n="undefined"==typeof i.cloneNode||"undefined"==typeof i.createDocumentFragment||"undefined"==typeof i.createElement}l=n}catch(r){l=a=!0}}();var m={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",version:"3.6.2pre",shivCSS:!1!==c.shivCSS,supportsUnknownElements:l,shivMethods:!1!==c.shivMethods,type:"default",shivDocument:s,createElement:r,createDocumentFragment:function(e,r){if(e||(e=t),l)return e.createDocumentFragment();for(var r=r||i(e),o=r.frag.cloneNode(),s=0,a=n(),c=a.length;c>s;s++)o.createElement(a[s]);return o}};e.html5=m,s(t)}(this,document);