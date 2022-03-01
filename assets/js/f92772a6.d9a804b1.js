"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[4973],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},243:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"blocks-structure-manifest",title:"Manifest Structure"},l=void 0,c={unversionedId:"legacy/v4/guides/blocks-structure-manifest",id:"legacy/v4/guides/blocks-structure-manifest",title:"Manifest Structure",description:"This file contains all the configuration required for a block to work. It's used in WordPress registerBlockType method to register a block. Using manifest.json we can provide a configuration in JavaScript and PHP part of the block in one file.",source:"@site/docs/legacy/v4/guides/blocks-structure-manifest.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/blocks-structure-manifest",permalink:"/eightshift-docs/docs/legacy/v4/guides/blocks-structure-manifest",tags:[],version:"current",frontMatter:{id:"blocks-structure-manifest",title:"Manifest Structure"},sidebar:"docs",previous:{title:"Component Structure",permalink:"/eightshift-docs/docs/legacy/v4/guides/blocks-structure-component"},next:{title:"Creating Block from Components",permalink:"/eightshift-docs/docs/legacy/v4/guides/blocks-block-from-components"}},u={},p=[{value:"Example",id:"example",level:3},{value:"attributes",id:"attributes",level:3},{value:"hasInnerBlocks",id:"hasinnerblocks",level:3},{value:"hasWrapper",id:"haswrapper",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This file contains all the configuration required for a block to work. It's used in WordPress ",(0,a.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/block-editor/developers/block-api/block-registration/"},(0,a.kt)("inlineCode",{parentName:"a"},"registerBlockType"))," method to register a block. Using ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest.json")," we can provide a configuration in JavaScript and PHP part of the block in one file."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "blockName": "heading",\n  "title": "Heading",\n  "description" : "Heading block with custom settings.",\n  "category": "common",\n  "icon": {\n    "src": "heading"\n  },\n  "keywords": [\n    "Header",\n    "Title"\n  ],\n  "attributes": {\n    "content": {\n      "type": "string"\n    },\n    "level": {\n      "type": "number",\n      "default": 2\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Most of the keys are the same as ",(0,a.kt)("inlineCode",{parentName:"p"},"registerBlockType")," method, but we also have some custom attributes here:"),(0,a.kt)("h3",{id:"attributes"},"attributes"),(0,a.kt)("p",null,"Attributes key is an object of attributes that you define and where you set up default values for a block. These attributes are then provided for you in the editor as props, and the PHP view part in the ",(0,a.kt)("inlineCode",{parentName:"p"},"$attributes")," variable.\nWe are using the same structure as described in ",(0,a.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/"},"Block Editor documentation"),"."),(0,a.kt)("h3",{id:"hasinnerblocks"},"hasInnerBlocks"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"default: false")),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"hasInnerBlocks")," key is set to true, blocks ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," method for inner blocks will be used. This method is used if the block has ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WordPress/gutenberg/tree/master/packages/block-editor/src/components/inner-blocks"},(0,a.kt)("inlineCode",{parentName:"a"},"InnerBlocks")),". In PHP you now have ",(0,a.kt)("inlineCode",{parentName:"p"},"$inner_block_content")," variable available. Here is an example of what happens in the back: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  save = () => createElement(InnerBlocks.Content);\n")),(0,a.kt)("h3",{id:"haswrapper"},"hasWrapper"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"default: true")),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"hasWrapper")," key is set to false, blocks PHP render method will not be passed to the wrapper component."),(0,a.kt)("div",{class:"legacy-badge legacy-badge--v4"}))}f.isMDXComponent=!0}}]);