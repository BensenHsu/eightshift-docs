(window.webpackJsonp=window.webpackJsonp||[]).push([[20,13],{120:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return i}));var n=t(0),c=t.n(n),s=t(166),r=t(183);function i(){return c.a.createElement(s.a,null,c.a.createElement(r.a,null))}},164:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(0),c=t.n(n);function s(e){const{componentClass:a,size:t="default",children:s}=e;return c.a.createElement(n.Fragment,null,s&&c.a.createElement("div",{className:`\n          shift-container\n          shift-container__size--${t}\n          ${a}__shift-container\n        `},s))}},168:function(e,a,t){"use strict";t(12);var n=t(0),c=t.n(n),s=t(160),r=t.n(s),i=t(159),l=t(163);a.a=e=>{const[a,s]=Object(n.useState)(!1),o=Object(n.useRef)(null),{siteConfig:u={}}=Object(i.a)(),{themeConfig:{algolia:m}}=u,d=Object(l.b)();const h=(e=!0)=>{a||Promise.all([t.e(59).then(t.t.bind(null,170,7)),t.e(43).then(t.t.bind(null,173,7))]).then(([{default:a}])=>{s(!0),window.docsearch=a,function(e){window.docsearch({appId:m.appId,apiKey:m.apiKey,indexName:m.indexName,inputSelector:"#search_input_react",algoliaOptions:m.algoliaOptions,handleSelected:(e,a,t)=>{const n=document.createElement("a");n.href=t.url;const c="#__docusaurus"===n.hash?""+n.pathname:`${n.pathname}${n.hash}`;d.push(c)}}),e&&o.current.focus()}(e)})},p=Object(n.useCallback)(()=>{h(),a&&o.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]),b=Object(n.useCallback)(()=>{e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]),g=Object(n.useCallback)(e=>{const a="mouseover"!==e.type;h(a)});return c.a.createElement("div",{className:"navbar__search",key:"search-box"},c.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:r()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),c.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:r()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:g,onFocus:g,onBlur:b,ref:o}))}},169:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(0),c=t.n(n);function s(e){const a="shift-heading",{componentClass:t,title:s,subtitle:r,align:i="center",titleSize:l="default"}=e;return c.a.createElement(n.Fragment,null,s&&c.a.createElement("div",{className:`\n          ${a}\n          ${t}__${a}\n          ${a}__align--${i}\n        `},s&&c.a.createElement("div",{className:`${a}__title ${a}__title-size--${l}`},s),r&&c.a.createElement("div",{className:a+"__subtitle"},r)))}},175:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0),c=t.n(n),s=t(161);function r(e){const{componentClass:a}=e;return c.a.createElement("img",{className:` shift-arrow ${a}__shift-arrow`,src:Object(s.a)("img/ic-arrow.svg")})}},183:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(0),c=t.n(n),s=t(161),r=t(169),i=t(164),l=t(175);function o(){const e="shift-get-started",a=[{bg:Object(s.a)("img/ic-theme-bg.svg"),icon:Object(s.a)("img/ic-theme.svg"),type:"theme",label:`I want a new WordPress <span class="${e}__label-highlight">theme</span>`,link:Object(s.a)("/docs/theme")},{bg:Object(s.a)("img/ic-plugin-bg.svg"),icon:Object(s.a)("img/ic-plugin.svg"),type:"plugin",label:`I want a new WordPress <span class="${e}__label-highlight">plugin</span>`,link:Object(s.a)("/docs/plugin")}].map((a,t)=>{const{bg:n,icon:s,type:r,label:i,link:o}=a;return c.a.createElement("div",{className:`${e}__item ${e}__item--${r}`,key:t},c.a.createElement("a",{className:e+"__link",href:o},c.a.createElement("div",{className:e+"__icon"},c.a.createElement("img",{className:e+"__icon-bg",src:n}),c.a.createElement("img",{className:e+"__icon-img",src:s})),c.a.createElement("div",{className:e+"__label",dangerouslySetInnerHTML:{__html:i}}),c.a.createElement(l.a,{componentClass:e})))});return c.a.createElement("div",{className:e},c.a.createElement(i.a,{componentClass:e,size:"small"},c.a.createElement(r.a,{componentClass:e,title:"Choose one of the options to get started",subtitle:"We've built a bot to automate the tedious process of adding project contributors, so you can focus on your project instead of managing your ReadMe."}),c.a.createElement("div",{className:e+"__content"},a)))}}}]);