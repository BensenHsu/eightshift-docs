(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(1),a=(n(0),n(158));const o={id:"menu",title:"Menu"},i={id:"guides/menu",title:"Menu",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--boilerplate-red?style=for-the-badge&logo=wordpress&labelColor=2a2a2a)](https://github.com/infinum/eightshift-boilerplate/blob/develop/src/menu/class-menu.php)",source:"@site/docs/guides/menu.md",permalink:"/eightshift-docs/docs/guides/menu",sidebar:"docs",previous:{title:"Media",permalink:"/eightshift-docs/docs/guides/media"},next:{title:"Rest Intro",permalink:"/eightshift-docs/docs/guides/rest-intro"}},c=[{value:"BEM Menu helper",id:"bem-menu-helper",children:[]}],s={rightToc:c};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-boilerplate/blob/develop/src/menu/class-menu.php"}),Object(a.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--boilerplate-red?style=for-the-badge&logo=wordpress&labelColor=2a2a2a",alt:"docs-source"})))),Object(a.b)("p",null,"Menu class is located in ",Object(a.b)("inlineCode",{parentName:"p"},"project"),". It extends ",Object(a.b)("inlineCode",{parentName:"p"},"Eightshift_Libs\\Menu\\Menu")," class."),Object(a.b)("p",null,"This class is used to add all custom project implementation for menus."),Object(a.b)("p",null,"To add the custom menu, you must provide an array for custom menu locations as explained in the documentation from the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.wordpress.org/reference/functions/register_nav_menus/"}),"official WordPress docs"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"/**\n   * Return all menu poistions\n   *\n   * @return array Of menu positions with name and slug.\n   *\n   * @since 1.0.0\n   */\n  public function get_menu_positions() : array {\n    return [\n      'header_main_default' => esc_html__( 'Header Main', 'eightshift-boilerplate' ),\n    ];\n  }\n")),Object(a.b)("h2",{id:"bem-menu-helper"},"BEM Menu helper"),Object(a.b)("p",null,"We are providing a BEM menu helper that will create a normal WordPress menu but with HTML classes specific to the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://getbem.com/"}),"BEM methodology"),"."),Object(a.b)("p",null,"To use it just call this helper in your template."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"use Eightshift_Libs\\Menu\\Menu;\n\nMenu::bem_menu( 'header_main_default', 'main-navigation' );\n")),Object(a.b)("p",null,"You can also provide multiple parameters to the helper. All the details are ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-libs/blob/404aeab50beef38f788c864d7c0312858b097e81/src/menu/class-menu.php#L69"}),"found here"),"."))}l.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(d,c({ref:t},l,{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);