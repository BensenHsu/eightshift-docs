"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[6864],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return k}});var n=o(7294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),k=l,h=d["".concat(i,".").concat(k)]||d[k]||u[k]||a;return o?n.createElement(h,r(r({ref:t},p),{},{components:o})):n.createElement(h,r({ref:t},p))}));function k(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=o.length,r=new Array(a);r[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var c=2;c<a;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3788:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return k}});var n=o(7462),l=o(3366),a=(o(7294),o(3905)),r=["components"],s={id:"blocks-special-use-cases",title:"Special Use Cases",sidebar_label:"Special Use Cases"},i=void 0,c={unversionedId:"legacy/v5/basics/blocks-special-use-cases",id:"legacy/v5/basics/blocks-special-use-cases",title:"Special Use Cases",description:"docs-source",source:"@site/docs/legacy/v5/basics/blocks-special-use-cases.md",sourceDirName:"legacy/v5/basics",slug:"/legacy/v5/basics/blocks-special-use-cases",permalink:"/eightshift-docs/docs/legacy/v5/basics/blocks-special-use-cases",tags:[],version:"current",frontMatter:{id:"blocks-special-use-cases",title:"Special Use Cases",sidebar_label:"Special Use Cases"},sidebar:"docs",previous:{title:"Hooks",permalink:"/eightshift-docs/docs/legacy/v5/basics/blocks-hooks"},next:{title:"Reusable Blocks",permalink:"/eightshift-docs/docs/legacy/v5/basics/blocks-reusable"}},p={},u=[{value:"Change innerBlock attributes",id:"change-innerblock-attributes",level:2},{value:"Provide simple wrapper to all innerBlock",id:"provide-simple-wrapper-to-all-innerblock",level:2},{value:"Override innerBlock attributes only on the front end",id:"override-innerblock-attributes-only-on-the-front-end",level:2},{value:"Add CSS selectors on the parent component inside the block editor",id:"add-css-selectors-on-the-parent-component-inside-the-block-editor",level:2},{value:"How to only use my custom blocks",id:"how-to-only-use-my-custom-blocks",level:2},{value:"I want to use my custom blocks but add some core or third party plugins blocks",id:"i-want-to-use-my-custom-blocks-but-add-some-core-or-third-party-plugins-blocks",level:2},{value:"I want to enable blocks only on specific custom post type",id:"i-want-to-enable-blocks-only-on-specific-custom-post-type",level:2}],d={toc:u};function k(e){var t=e.components,o=(0,l.Z)(e,r);return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,a.kt)("p",null,"In our clients' projects, we noticed that sometimes you need to provide something special to your blocks, like changing the block editor block DOM structure or the attributes added inside the inner blocks."),(0,a.kt)("p",null,"These are some of the examples we would like to share with you. We will list all of them and gradually add more."),(0,a.kt)("h2",{id:"change-innerblock-attributes"},"Change innerBlock attributes"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Change attributes in the block editor and on the front-end."),(0,a.kt)("li",{parentName:"ul"},"Set attributes in the database.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Use Case:")),(0,a.kt)("p",null,"Let's say you have a carousel block, and you have a generic image block that you can use as a standalone block. You create a carousel block and set in its manifest limitation to show only the image block to be inserted as an inner block. This is easy to do: you just add your image block to an ",(0,a.kt)("inlineCode",{parentName:"p"},"allowedBlocks")," array inside the carousel block and everything will work."),(0,a.kt)("p",null,"But now you have some default attributes set in that image block that you don't want to be set if the block is added using the innerBlock in the carousel. You can change that using our ",(0,a.kt)("a",{parentName:"p",href:"helpers-javascript#overrideinnerblockattributes"},"overrideInnerBlockAttributes")," helper. Just add this helper to your block entry point, add the attributes you want to change, and you are all set."),(0,a.kt)("p",null,"Keep in mind that this will be applied to all innerBlocks inside your carousel block. If you want to limit this to a specific block only, you will need to fiddle around with that block's conditions (you can get that specific block name from the props)."),(0,a.kt)("p",null,"The next time you add your image to the carousel, it will automatically change those attributes."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Important note: If for some reason, you copy the inner block from the carousel to the top-level editor, this helper will not fire and not change back to original attributes. You have to manually remove those attributes from the Code editor in the admin.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Implementation")),(0,a.kt)("p",null,"Here you can see our example of this helper used in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/blob/develop/blocks/init/src/Blocks/custom/carousel/carousel-block.js"},"carousel block"),"."),(0,a.kt)("h2",{id:"provide-simple-wrapper-to-all-innerblock"},"Provide simple wrapper to all innerBlock"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Change attributes in the block editor and on the front end."),(0,a.kt)("li",{parentName:"ul"},"Set attributes in the database.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Use Case:")),(0,a.kt)("p",null,"All of our blocks come with the wrapper implemented, which is awesome. But sometimes you just don't want to use the wrapper, and you want only to use the simple version of the wrapper. You can provide the attribute overrides in your block, and you are good to go."),(0,a.kt)("p",null,"But if you need to change attributes in the block added as an innerBlock, you'll have a little problem. You can use the same helper as we did in the previous chapter, or you can use our abstraction of that helper called ",(0,a.kt)("a",{parentName:"p",href:"helpers-javascript#overrideinnerblocksimplewrapperattributes"},"overrideInnerBlockSimpleWrapperAttributes"),"."),(0,a.kt)("p",null,"This helper will set the wrapper to a simple variant in all your innerBlocks."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Implementation")),(0,a.kt)("p",null,"Here you can see our example of this helper used in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/blob/develop/blocks/init/src/Blocks/custom/column/column-block.js"},"column block"),"."),(0,a.kt)("h2",{id:"override-innerblock-attributes-only-on-the-front-end"},"Override innerBlock attributes only on the front end"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Change attributes on the front end only."),(0,a.kt)("li",{parentName:"ul"},"Don't set attributes in the database.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Use Case:")),(0,a.kt)("p",null,"If you have a block containing inner blocks and only want to change the attributes on the front end of the implementation and not in the block editor. The standard way is really hard because all the inner blocks are rendered on the front end as an HTML string, and you don't have access to any of the attributes before it is rendered."),(0,a.kt)("p",null,"Luckily, WordPress core has provided us with the filter that can change any block before it is rendered. This filter will provide you an array of blocks and inner blocks, along with the innerBlock and all attributes if you use it correctly."),(0,a.kt)("p",null,"The filter is called: ",(0,a.kt)("inlineCode",{parentName:"p"},"render_block_data"),", and you can put your implementation in the ",(0,a.kt)("inlineCode",{parentName:"p"},"class-blocks.php")," file. You can find the documentation on this ",(0,a.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/hooks/render_block_data/"},"link"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Implementation")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Implementation coming soon.")),(0,a.kt)("h2",{id:"add-css-selectors-on-the-parent-component-inside-the-block-editor"},"Add CSS selectors on the parent component inside the block editor"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Change attributes on the front end only."),(0,a.kt)("li",{parentName:"ul"},"Don't set attributes in the database.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Use Case:")),(0,a.kt)("p",null,"If you tried to create any grid in your block on the front end, you know it is easy, but it is not so with the block editor. The problem is that in the block editor DOM, there are additional divs added over your block that break your HTML structure, and all your styles from flex or grid will not work correctly. If your block depends on some special selector placed in a specific place, you can run into some problems in the block editor."),(0,a.kt)("p",null,"With WordPress' block editor hooks, we can fix this by not adding the selector to its original location as we do on the front end but adding them to the Block Editor's parent component."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Implementation")),(0,a.kt)("p",null,"Here you can see our example of this hook used in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/blob/develop/blocks/init/src/Blocks/custom/column/column-hooks.js"},"column block"),"."),(0,a.kt)("h2",{id:"how-to-only-use-my-custom-blocks"},"How to only use my custom blocks"),(0,a.kt)("p",null,"You can remove all core blocks and any other blocks provided by third-party plugins by adding this filter to your ",(0,a.kt)("inlineCode",{parentName:"p"},"src/Blocks/Blocks.php")," class."),(0,a.kt)("p",null,"Filter goes in the register method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// Limits the usage of only custom project blocks.\nadd_filter('allowed_block_types', [ $this, 'getAllBlocksList' ], 10, 2);\n")),(0,a.kt)("p",null,"The callback method is set in the parent ",(0,a.kt)("inlineCode",{parentName:"p"},"AbstractBlocks")," class."),(0,a.kt)("h2",{id:"i-want-to-use-my-custom-blocks-but-add-some-core-or-third-party-plugins-blocks"},"I want to use my custom blocks but add some core or third party plugins blocks"),(0,a.kt)("p",null,"You create a new callback method for the ",(0,a.kt)("inlineCode",{parentName:"p"},"allowed_block_types")," filter. There you can allow all your custom blocks + any other 3rd party / core block you want."),(0,a.kt)("p",null,"Filter goes in the register method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// Limits the usage of only custom project blocks.\nadd_filter('allowed_block_types', [ $this, 'allowedBlocks' ], 10, 2);\n")),(0,a.kt)("p",null,"Custom callback method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"/**\n  * Filter which blocks are displayed in the block editor.\n  *\n  * @param array|bool $allowedBlockTypes Array of block type slugs, or boolean to enable/disable all.\n  * @param object     $post The post resource data.\n  *\n  * @return array\n  */\npublic function allowedBlocks($allowedBlockTypes, object $post): array\n{\n  return array_merge(\n    $this->getAllBlocksList($allowedBlockTypes, $post),\n    [\n      'core/paragraph',\n    ]\n  );\n}\n")),(0,a.kt)("h2",{id:"i-want-to-enable-blocks-only-on-specific-custom-post-type"},"I want to enable blocks only on specific custom post type"),(0,a.kt)("p",null,"You create a new callback method for the ",(0,a.kt)("inlineCode",{parentName:"p"},"allowed_block_types")," filter."),(0,a.kt)("p",null,"Filter goes in the register method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// Limits the usage of only custom project blocks.\nadd_filter('allowed_block_types', [ $this, 'allowedBlockTypes' ], 10, 2);\n")),(0,a.kt)("p",null,"Custom callback method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"/**\n  * Filter which blocks are allowed in what post type.\n  *\n  * @param array|bool $allowedBlockTypes Array of block type slugs, or boolean to enable/disable all.\n  * @param object     $post The post resource data.\n  *\n  * @return array\n  */\npublic function allowedBlockTypes($allowedBlockTypes, object $post): array\n{\n  $output = [];\n  $settings = $this->getSettings();\n  $namespace = $settings['namespace'];\n\n  switch ($post->post_type) { // phpcs:ignore Squiz.NamingConventions.ValidVariableName.NotCamelCaps\n    case 'faq':\n      $output = [\n        \"{$namespace}/paragraph\",\n      ];\n      break;\n    default:\n      $output = $this->getAllBlocksList($allowedBlockTypes, $post);\n      break;\n  }\n\n  return $output;\n}\n")),(0,a.kt)("div",{class:"legacy-badge legacy-badge--v5"}))}k.isMDXComponent=!0}}]);