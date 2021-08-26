(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{239:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(9),o=(r(0),r(308)),s={id:"blocks-patterns",title:"Patterns"},c={id:"basics/blocks-patterns",title:"Patterns",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)",source:"@site/docs/basics/blocks-patterns.md",permalink:"/eightshift-docs/docs/basics/blocks-patterns",sidebar:"docs",previous:{title:"Variations",permalink:"/eightshift-docs/docs/basics/blocks-variations"},next:{title:"Transforms",permalink:"/eightshift-docs/docs/basics/blocks-transforms"}},i=[{value:"Remove all core patterns",id:"remove-all-core-patterns",children:[]}],l={rightToc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/"}),Object(o.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})))),Object(o.b)("p",null,"Block Patterns are predefined block layouts, ready to insert and tweak."),Object(o.b)("p",null,"You can check the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.wordpress.org/block-editor/developers/block-api/block-patterns/"}),"WordPress documentation")," on this subject."),Object(o.b)("p",null,"Patterns are (as we understand them) the same thing as block variations. The main difference is that you can provide full layouts with patterns, as described in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"blocks-variations#limitations"}),"this chapter"),". You can also provide the full page layouts with our variations."),Object(o.b)("p",null,"This means that the only differences between our variations and block patterns are:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Variations")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Variations provide data using our manifest.json file (the rest is handled using JavaScript)."),Object(o.b)("li",{parentName:"ul"},"Variations appear in the editor next to the regular blocks.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Patterns")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Patterns are registered using PHP."),Object(o.b)("li",{parentName:"ul"},"Patterns appear in the editor inside the special tab for patterns.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"We will soon provide WP-CLI command to automaticity create block patterns, boilerplate class, for you to use.")),Object(o.b)("h3",{id:"remove-all-core-patterns"},"Remove all core patterns"),Object(o.b)("p",null,"If you don't use core blocks, core patterns won't work. Don't confuse your users and remove them (but feel free to add new patterns based on your own custom blocks!)"),Object(o.b)("p",null,"To remove all core patterns add this code to you ",Object(o.b)("inlineCode",{parentName:"p"},"src/Blocks/Blocks.php")," class."),Object(o.b)("p",null,"Filter goes in the register method:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"// Remove block patterns.\nadd_filter('block_editor_settings', [$this, 'removeCorePatterns']);\n")),Object(o.b)("p",null,"Callback method:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"/**\n    * Remove core block patterns\n    *\n    * @param array $settings Array of block editor settings to filter out.\n    *\n    * @return array Filtered array.\n    */\npublic function removeCorePatterns(array $settings): array\n{\n    $settings['__experimentalBlockPatterns'] = [];\n\n    return $settings;\n}\n")))}p.isMDXComponent=!0},308:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,f=b["".concat(s,".").concat(d)]||b[d]||u[d]||o;return r?a.a.createElement(f,c({ref:t},l,{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);