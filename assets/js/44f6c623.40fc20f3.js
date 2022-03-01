"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[683],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=l,g=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5271:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return h}});var a=n(7462),l=n(3366),o=(n(7294),n(3905)),r=["components"],s={id:"global-settings",title:"Global Settings",sidebar_label:"Global Settings"},i=void 0,c={unversionedId:"legacy/v5/basics/global-settings",id:"legacy/v5/basics/global-settings",title:"Global Settings",description:"docs-source",source:"@site/docs/legacy/v5/basics/global-settings.md",sourceDirName:"legacy/v5/basics",slug:"/legacy/v5/basics/global-settings",permalink:"/eightshift-docs/docs/legacy/v5/basics/global-settings",tags:[],version:"current",frontMatter:{id:"global-settings",title:"Global Settings",sidebar_label:"Global Settings"},sidebar:"docs",previous:{title:"Library",permalink:"/eightshift-docs/docs/legacy/v5/basics/library"},next:{title:"Writing Styles",permalink:"/eightshift-docs/docs/legacy/v5/basics/writing-styles"}},u={},p=[{value:"Why do we use this?",id:"why-do-we-use-this",level:2},{value:"How does this work?",id:"how-does-this-work",level:2},{value:"Scenario 1:",id:"scenario-1",level:3},{value:"Scenario 2:",id:"scenario-2",level:3},{value:"Scenario 3:",id:"scenario-3",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This chapter is only relevant in setups that don't use CSS variables. If you are using CSS variables please skip to the ",(0,o.kt)("a",{parentName:"p",href:"blocks-styles"},"Blocks Styles chapter")," chapter.")),(0,o.kt)("p",null,"Ok, this is the part that we are incredibly proud of. Did you know that you can pass values from the JSON manifest or some other file directly to SCSS? Yes, we had the same facial expression when we found out. For this to work, we used Webpack and its excellent features."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This feature comes only with the block setup.")),(0,o.kt)("p",null,"If you used the ",(0,o.kt)("inlineCode",{parentName:"p"},"setup_theme")," setup, you are all set. If not, please visit the ",(0,o.kt)("a",{parentName:"p",href:"blocks"},"blocks chapter")," for more details."),(0,o.kt)("h2",{id:"why-do-we-use-this"},"Why do we use this?"),(0,o.kt)("p",null,"Because, with dynamic blocks, you must create your blocks. We got tired of copy/pasting styles from JavaScript/PHP/SCSS files. That is why we created this feature to define some global styles in one spot and use them in all three places."),(0,o.kt)("h2",{id:"how-does-this-work"},"How does this work?"),(0,o.kt)("p",null,"You have the file ",(0,o.kt)("inlineCode",{parentName:"p"},"src/Blocks/manifest.json")," that has a key called ",(0,o.kt)("inlineCode",{parentName:"p"},"globalVariables"),". We use this key and build the SCSS maps that you can use in your style files."),(0,o.kt)("p",null,"Mind-blowing, right?"),(0,o.kt)("p",null,"To use it, write your style in the ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.json")," under the ",(0,o.kt)("inlineCode",{parentName:"p"},"globalVariables")," key, and you can use that variable in your style files like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"$base-col-number: global-settings(maxCols);\n")),(0,o.kt)("p",null,"Keep in mind that the ",(0,o.kt)("inlineCode",{parentName:"p"},"global-settings")," is a function that checks the ",(0,o.kt)("inlineCode",{parentName:"p"},"globalVariables")," map and returns the value depending on the key provided."),(0,o.kt)("p",null,"For example, if you have something like this in your ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "globalVariables": {\n    "maxCols": 12,\n    "gutters": {\n      "none": "0",\n      "default": "25px",\n      "big": "50px"\n    },\n    "colors": [\n      {\n        "name": "Primary",\n        "slug": "primary",\n        "color": "#3E3E3E"\n      },\n      {\n        "name": "Black",\n        "slug": "black",\n        "color": "#000000"\n      },\n    ]\n  }\n}\n')),(0,o.kt)("h3",{id:"scenario-1"},"Scenario 1:"),(0,o.kt)("p",null,"You type this in you SCSS files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"$base-col-number: global-settings(maxCols);\n")),(0,o.kt)("p",null,"the output will be: ",(0,o.kt)("strong",{parentName:"p"},"12")),(0,o.kt)("h3",{id:"scenario-2"},"Scenario 2:"),(0,o.kt)("p",null,"You type this in you SCSS files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"$gutters: global-settings(gutters);\n")),(0,o.kt)("p",null,"the output will be a map that you need to loop or fetch individual files using ",(0,o.kt)("inlineCode",{parentName:"p"},"get-map-strict")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"get-map-deep")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},'$gutters: (\n  "none": "0",\n  "default": "25px",\n  "big": "50px"\n);\n')),(0,o.kt)("p",null,"so you can call it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"width: get-map-strict($gutters, default);\n")),(0,o.kt)("h3",{id:"scenario-3"},"Scenario 3:"),(0,o.kt)("p",null,'"I want to output colors, but they don\'t follow the structure you mentioned before. Why is that?"'),(0,o.kt)("p",null,"Yes, colors are different because we use this manifest to output the colors to the block editors' color palette. Only the colors are like this."),(0,o.kt)("p",null,"Type this into your SCSS files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"$primary-color: global-settings(colors, primary),\n$black-color: global-settings(colors, black),\n")),(0,o.kt)("p",null,"The output will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"$primary-color: #3E3E3E;\n$black-color: #000000;\n")),(0,o.kt)("p",null,"so you use it the normal SCSS way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"color: $primary-color;\nbackground-color: $black-color;\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you add/remove/change any value in the ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.json")," file, please restart your Webpack watch because it won't recognize that change.")),(0,o.kt)("div",{class:"legacy-badge legacy-badge--v5"}))}h.isMDXComponent=!0}}]);