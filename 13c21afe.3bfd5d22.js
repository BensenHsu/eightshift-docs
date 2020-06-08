(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{105:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(6),o=(r(0),r(158)),i={id:"plugin",title:"Create new WordPress plugin",sidebar_label:"Plugin Setup"},c={id:"plugin",title:"Create new WordPress plugin",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/setup/create-wp-project)",source:"@site/docs/plugin.md",permalink:"/eightshift-docs/docs/plugin",sidebar_label:"Plugin Setup",sidebar:"docs",previous:{title:"Create new WordPress theme",permalink:"/eightshift-docs/docs/theme"},next:{title:"Introduction",permalink:"/eightshift-docs/docs/introduction"}},l=[{value:"Requirements",id:"requirements",children:[]},{value:"Quick start",id:"quick-start",children:[]},{value:"Script arguments",id:"script-arguments",children:[]}],s={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/setup/create-wp-project"}),Object(o.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})))),Object(o.b)("p",null,"Eightshift boilerplate contains all the tools you need to start building a modern WordPress plugin, using all the latest front end development tools."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://infinum.github.io/eightshift-docs/docs/theme/"}),"Please go here if you wish to setup a theme instead"),"."),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"Node.js")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://getcomposer.org/"}),"Composer"))),Object(o.b)("h2",{id:"quick-start"},"Quick start"),Object(o.b)("p",null,"Let's create a ",Object(o.b)("strong",{parentName:"p"},"new plugin"),"!"),Object(o.b)("p",null,"Navigate to your WordPress plugin folder (",Object(o.b)("inlineCode",{parentName:"p"},"wp-content/plugins"),") and run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npx create-wp-project plugin\n")),Object(o.b)("p",null,"Script will prompt you for some info and install a new plugin. After it's finished, you can ",Object(o.b)("strong",{parentName:"p"},"activate the plugin through WP Admin Dashboard"),"."),Object(o.b)("p",null,"To start developing run this command from plugin's root folder:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm start\n")),Object(o.b)("h2",{id:"script-arguments"},"Script arguments"),Object(o.b)("p",null,"You can get a list of available script arguments by running:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npx create-wp-project --help\n")))}p.isMDXComponent=!0},158:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,c({ref:t},s,{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);