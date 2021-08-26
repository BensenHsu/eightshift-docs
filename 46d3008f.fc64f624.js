(window.webpackJsonp=window.webpackJsonp||[]).push([[56,25],{193:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return o}));var n=t(0),r=t.n(n),c=t(309),i=t(310),s=t(316),l=t(337);function o(){var e=Object(c.a)().siteConfig,a=void 0===e?{}:e;return r.a.createElement(s.a,{title:"Get Started",description:a.tagline,keywords:a.customFields.keywords,metaImage:Object(i.a)("img/"+a.customFields.image)},r.a.createElement(l.a,null))}},312:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(0),r=t.n(n);function c(e){var a=e.componentClass,t=e.size,c=void 0===t?"default":t,i=e.children;return r.a.createElement(n.Fragment,null,i&&r.a.createElement("div",{className:"\n          shift-container\n          shift-container__size--"+c+"\n          "+a+"__shift-container\n        "},i))}},314:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(0),r=t.n(n);function c(e){var a="shift-heading",t=e.componentClass,c=e.title,i=e.subtitle,s=e.align,l=void 0===s?"center":s,o=e.titleSize,u=void 0===o?"default":o;return r.a.createElement(n.Fragment,null,c&&r.a.createElement("div",{className:"\n          "+a+"\n          "+t+"__"+a+"\n          "+a+"__align--"+l+"\n        "},c&&r.a.createElement("div",{className:a+"__title "+a+"__title-size--"+u},c),i&&r.a.createElement("div",{className:a+"__subtitle",dangerouslySetInnerHTML:{__html:i}})))}},317:function(e,a,t){"use strict";t(51),t(26),t(21),t(22),t(77);var n=t(0),r=t.n(n),c=t(311),i=t.n(c),s=t(309),l=t(313);a.a=function(e){var a=Object(n.useState)(!1),c=a[0],o=a[1],u=Object(n.useRef)(null),d=Object(s.a)().siteConfig,m=(void 0===d?{}:d).themeConfig.algolia,h=Object(l.b)();var p=function(e){void 0===e&&(e=!0),c||Promise.all([t.e(172).then(t.t.bind(null,318,7)),t.e(122).then(t.t.bind(null,320,7))]).then((function(a){var t=a[0].default;o(!0),window.docsearch=t,function(e){window.docsearch({appId:m.appId,apiKey:m.apiKey,indexName:m.indexName,inputSelector:"#search_input_react",algoliaOptions:m.algoliaOptions,handleSelected:function(e,a,t){var n=document.createElement("a");n.href=t.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;h.push(r)}}),e&&u.current.focus()}(e)}))},g=Object(n.useCallback)((function(){p(),c&&u.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),f=Object(n.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),b=Object(n.useCallback)((function(e){var a="mouseover"!==e.type;p(a)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:i()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:g,onKeyDown:g,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:i()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:b,onFocus:b,onBlur:f,ref:u}))}},322:function(e,a,t){"use strict";t(327)("link",(function(e){return function(a){return e(this,"a","href",a)}}))},323:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(0),r=t.n(n),c=t(310);function i(e){var a=e.componentClass;return r.a.createElement("img",{className:" shift-arrow "+a+"__shift-arrow",src:Object(c.a)("img/ic-arrow.svg")})}},327:function(e,a,t){var n=t(12),r=t(13),c=t(28),i=/"/g,s=function(e,a,t,n){var r=String(c(e)),s="<"+a;return""!==t&&(s+=" "+t+'="'+String(n).replace(i,"&quot;")+'"'),s+">"+r+"</"+a+">"};e.exports=function(e,a){var t={};t[e]=a(s),n(n.P+n.F*r((function(){var a=""[e]('"');return a!==a.toLowerCase()||a.split('"').length>3})),"String",t)}},337:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));t(322);var n=t(0),r=t.n(n),c=t(310),i=t(314),s=t(312),l=t(323);function o(){var e="shift-get-started",a=[{bg:Object(c.a)("img/ic-theme-bg.svg"),icon:Object(c.a)("img/ic-theme.svg"),type:"theme",label:'I want a new WordPress <span class="'+e+'__label-highlight">theme</span>',link:Object(c.a)("/docs/theme")},{bg:Object(c.a)("img/ic-plugin-bg.svg"),icon:Object(c.a)("img/ic-plugin.svg"),type:"plugin",label:'I want a new WordPress <span class="'+e+'__label-highlight">plugin</span>',link:Object(c.a)("/docs/plugin")}].map((function(a,t){var n=a.bg,c=a.icon,i=a.type,s=a.label,o=a.link;return r.a.createElement("div",{className:e+"__item "+e+"__item--"+i,key:t},r.a.createElement("a",{className:e+"__link",href:o},r.a.createElement("div",{className:e+"__icon"},r.a.createElement("img",{className:e+"__icon-bg",src:n}),r.a.createElement("img",{className:e+"__icon-img",src:c})),r.a.createElement("div",{className:e+"__label",dangerouslySetInnerHTML:{__html:s}}),r.a.createElement(l.a,{componentClass:e})))}));return r.a.createElement("div",{className:e},r.a.createElement(s.a,{componentClass:e,size:"small"},r.a.createElement(i.a,{componentClass:e,title:"Choose one of the options to get started",subtitle:"We've built a bot to automate the tedious process of setting up a new project, so you can focus on your code. Just choose where you want to start."}),r.a.createElement("div",{className:e+"__content"},a)))}}}]);