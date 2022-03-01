"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[123],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6554:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"namespaces",title:"Namespaces",sidebar_label:"Namespaces"},l=void 0,c={unversionedId:"legacy/v5/basics/namespaces",id:"legacy/v5/basics/namespaces",title:"Namespaces",description:"docs-source",source:"@site/docs/legacy/v5/basics/namespaces.md",sourceDirName:"legacy/v5/basics",slug:"/legacy/v5/basics/namespaces",permalink:"/eightshift-docs/docs/legacy/v5/basics/namespaces",tags:[],version:"current",frontMatter:{id:"namespaces",title:"Namespaces",sidebar_label:"Namespaces"},sidebar:"docs",previous:{title:"Backend",permalink:"/eightshift-docs/docs/legacy/v5/basics/backend"},next:{title:"Extending Classes",permalink:"/eightshift-docs/docs/legacy/v5/basics/extending-classes"}},p={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"PHP part of this project lives in ",(0,o.kt)("inlineCode",{parentName:"p"},"EightshiftLibs")," namespace.")),(0,o.kt)("p",null,"Because WordPress lives in a global namespace, we had to provide the way for your project to be unique. That is why we implemented ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/imposter-plugin"},(0,o.kt)("strong",{parentName:"a"},"Imposter"))," script inside ",(0,o.kt)("inlineCode",{parentName:"p"},"composer.json"),". Imposter adds a namespace prefix on all the packages inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"vendor")," folder that uses namespacing."),(0,o.kt)("p",null,"You can change the vendor prefix in your ",(0,o.kt)("inlineCode",{parentName:"p"},"composer.json")," file. But if you do this, make sure you delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"vendor")," folder before running the command to install the composer packages again with the ",(0,o.kt)("inlineCode",{parentName:"p"},"composer install")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"autoload": {\n  "psr-4": {\n    "CustomProject\\\\": "src/"\n  }\n},\n"extra": {\n  "imposter": {\n    "namespace": "EightshiftBoilerplateVendor"\n  }\n}\n')),(0,o.kt)("p",null,"For example, with the default setup, your project will have the namespace you defined in the setup process. But let's say you have the structure from the parent code:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your current namespace is: ",(0,o.kt)("inlineCode",{parentName:"li"},"CustomProject"),"."),(0,o.kt)("li",{parentName:"ul"},"Namespace for all packages used from Eightshift libs is ",(0,o.kt)("inlineCode",{parentName:"li"},"EightshiftBoilerplateVendor\\CustomProject"),"."),(0,o.kt)("li",{parentName:"ul"},"Also, every package you additionally install will follow the same convention: ",(0,o.kt)("inlineCode",{parentName:"li"},"EightshiftBoilerplateVendor\\SomePackageNamespace"),".")),(0,o.kt)("p",null,"To sum it up: you don't need to change the default vendor prefix if you only run one theme or one plugin with Eightshift Boilerplate. But if you have multiple Eightshift Boilerplate powered themes or plugins installed, please change the vendor prefix on each of the projects."),(0,o.kt)("div",{class:"legacy-badge legacy-badge--v5"}))}d.isMDXComponent=!0}}]);