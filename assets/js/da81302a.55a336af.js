"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[3350],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,d=p["".concat(l,".").concat(h)]||p[h]||f[h]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},308:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return f},default:function(){return h}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"manifest",title:"Manifest"},l=void 0,c={unversionedId:"basics/manifest",id:"basics/manifest",title:"Manifest",description:"docs-source",source:"@site/docs/basics/manifest.md",sourceDirName:"basics",slug:"/basics/manifest",permalink:"/eightshift-docs/docs/basics/manifest",tags:[],version:"current",frontMatter:{id:"manifest",title:"Manifest"},sidebar:"docs",previous:{title:"The Structure",permalink:"/eightshift-docs/docs/basics/the-structure"},next:{title:"Rest Intro",permalink:"/eightshift-docs/docs/basics/rest"}},u={},f=[{value:"How to use it",id:"how-to-use-it",level:2},{value:"Why not just fetch the asset the old-fashioned way?",id:"why-not-just-fetch-the-asset-the-old-fashioned-way",level:2}],p={toc:f};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,i.kt)("p",null,"In the build process, Webpack creates all the static files from your assets folder and also ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")," inside the public folder. The manifest file contains a key/value list that we use to call the location of the assets dynamically."),(0,i.kt)("p",null,"This class provides ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")," file location and helpers to return the full path for a specific asset."),(0,i.kt)("h2",{id:"how-to-use-it"},"How to use it"),(0,i.kt)("p",null,"First, install the manifest class using this command:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"wp boilerplate create_manifest")),(0,i.kt)("p",null,"You will see a custom filter you can use to fetch the item from the public folder in your class. This is the custom filter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * Manifest item filter name constant.\n *\n * @var string\n */\npublic const MANIFEST_ITEM = 'manifest-item';\n\n/**\n * Register all hooks. Changed filter name to manifest.\n *\n * @return void\n */\npublic function register(): void\n{\n    \\add_filter(static::MANIFEST_ITEM, [ $this, 'getAssetsManifestItem' ]);\n}\n")),(0,i.kt)("p",null,"To use this filter, add the following code and provide the correct name of your asset:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use CoolProject\\Manifest\\Manifest;\n\n$logo = \\apply_filters(Manifest::MANIFEST_ITEM, 'logo.svg');\n")),(0,i.kt)("p",null,"And that's it. This filter will check the public folder for the ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")," file, parse it, and return the value of the provided key."),(0,i.kt)("p",null,"If there is no ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")," file or you provided the wrong asset name, there will be a descriptive message for you."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you are using multiple boilerplates in one project don't forget to change the filter name defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"MANIFEST_ITEM")," constant.")),(0,i.kt)("h2",{id:"why-not-just-fetch-the-asset-the-old-fashioned-way"},"Why not just fetch the asset the old-fashioned way?"),(0,i.kt)("p",null,"By the old-fashioned way, we mean running something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$logo = get_template_directory_uri() . 'public/logo.svg';\n")),(0,i.kt)("p",null,"You can definitely do this. But with our filter, if you want to change the public folder location or public folder name for some reason, you can change it in one place and you're done."),(0,i.kt)("p",null,"If you are using the old-fashioned way, you would need to search and replace the whole project and implement the change. There is always a chance you would miss something, break the project, etc."))}h.isMDXComponent=!0}}]);