"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[2429],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9064:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],l={id:"helpers-components-helpers",title:"Components"},i=void 0,p={unversionedId:"legacy/v4/advanced/helpers-components-helpers",id:"legacy/v4/advanced/helpers-components-helpers",title:"Components",description:"docs-source",source:"@site/docs/legacy/v4/advanced/helpers-components.md",sourceDirName:"legacy/v4/advanced",slug:"/legacy/v4/advanced/helpers-components-helpers",permalink:"/eightshift-docs/docs/legacy/v4/advanced/helpers-components-helpers",tags:[],version:"current",frontMatter:{id:"helpers-components-helpers",title:"Components"},sidebar:"docs",previous:{title:"Object",permalink:"/eightshift-docs/docs/legacy/v4/advanced/helpers-object-helpers"},next:{title:"Shortcode",permalink:"/eightshift-docs/docs/legacy/v4/advanced/helpers-shortcode-helpers"}},c={},u=[{value:"ensure_string",id:"ensure_string",level:2},{value:"classnames",id:"classnames",level:2},{value:"render",id:"render",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs/blob/develop/src/helpers/class-components.php"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,o.kt)("p",null,"Components helper is located in ",(0,o.kt)("inlineCode",{parentName:"p"},"Eightshift Libs"),". To extend it, use ",(0,o.kt)("inlineCode",{parentName:"p"},"Eightshift_Libs\\Helpers\\Components")," class."),(0,o.kt)("p",null,"We have created this simple helper that you can use in any PHP class as a static helper. To see all of the components helpers go ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs/blob/develop/src/helpers/class-components.php"},"here"),"."),(0,o.kt)("h2",{id:"ensure_string"},"ensure_string"),(0,o.kt)("p",null,"Makes sure the output is a string. Useful for converting an array of components into a string."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@param  array|string $variable Variable we need to convert into a string."),(0,o.kt)("li",{parentName:"ul"},"@return string")),(0,o.kt)("h2",{id:"classnames"},"classnames"),(0,o.kt)("p",null,"Converts an array of classes into a string which can be echoed."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@param  array $classes Array of classes."),(0,o.kt)("li",{parentName:"ul"},"@return string")),(0,o.kt)("h2",{id:"render"},"render"),(0,o.kt)("p",null,"Renders components and (optionally) passes some attributes to it."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'Note about "parentClass" attribute'),":\nIf provided, the component will be wrapped with a parent BEM selector. For example, if ",(0,o.kt)("inlineCode",{parentName:"p"},"$attributes['parentClass'] === 'header'")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"$component === 'logo'")," are set, the component will be wrapped with a ",(0,o.kt)("inlineCode",{parentName:"p"},'<div class="header__logo"></div>')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@param  string $component  Component's name or full path (ending with .php)."),(0,o.kt)("li",{parentName:"ul"},"@param  array  $attributes Array of attributes that are implicitly passed to the component."),(0,o.kt)("li",{parentName:"ul"},"@return string")),(0,o.kt)("div",{class:"legacy-badge legacy-badge--v4"}))}m.isMDXComponent=!0}}]);