(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"+wNj":function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("+wNj");function r(e,t){if(null==e)return{};var n,r,i=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},"J/Ev":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/controlbox",function(){return n("QMQK")}])},Km8e:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},QMQK:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n("cxan"),r=n("HbGN"),i=n("ERkP"),b=n.n(i),c=n("ZVZ0"),l=(b.a.createElement,{}),o="wrapper";function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)(o,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"ControlBox"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"ControlBox")," provides style props to change it's styles based on a sibling ",Object(c.b)("inlineCode",{parentName:"p"},"checkbox")," or ",Object(c.b)("inlineCode",{parentName:"p"},"radio")," input. It relies on a ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://dev.to/lkopacz/create-custom-keyboard-accessible-checkboxes-2036"}),"common CSS technique")," for styling custom controls."),Object(c.b)("p",null,"For this component to work, it should have a sibling ",Object(c.b)("inlineCode",{parentName:"p"},"input")," and be contained in a ",Object(c.b)("inlineCode",{parentName:"p"},"label"),"."),Object(c.b)("h2",null,"Usage"),Object(c.b)("h4",null,"Creating a custom checkbox component"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<label>\n  {/* This is the sibling input, it\'s visually hidden */}\n  <VisuallyHidden as="input" type="checkbox" defaultChecked />\n\n  {/* This is the control box with a check icon as children */}\n  <ControlBox\n    border="1"\n    borderRadius="sm"\n    width="6x"\n    height="6x"\n    verticalAlign="middle"\n    _checked={{ bg: "green:50", color: "white", borderColor: "green:50" }}\n    _focus={{ borderColor: "green:60", boxShadow: "rgba(66, 153, 225, 0.6) 0px 0px 0px 3px" }}\n  >\n    <Icon name="_core.check" size="4x" />\n  </ControlBox>\n\n  {/* You can pass additional text */}\n  <Text ml="2x" userSelect="none">\n    Label text\n  </Text>\n</label>\n')),Object(c.b)("h4",null,"Creating a custom radio component"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<label>\n  {/* This is the sibling input, it\'s visually hidden */}\n  <VisuallyHidden type="radio" as="input" />\n\n  {/* This is the control box with a circle as children */}\n  <ControlBox\n    type="radio"\n    border="2"\n    borderRadius="circle"\n    borderColor="inherit"\n    bg="inherit"\n    width="6x"\n    height="6x"\n    verticalAlign="middle"\n    _checked={{ bg: "green:50", borderColor: "green:50" }}\n    _focus={{ boxShadow: "rgba(66, 153, 225, 0.6) 0px 0px 0px 3px" }}\n    _hover={{ borderColor: "gray:30" }}\n    _disabled={{ opacity: "40%" }}\n  >\n    <Box size="50%" bg="white" borderRadius="circle" />\n  </ControlBox>\n\n  {/* You can pass additional text */}\n  <Text ml="2x">\n    Label text\n  </Text>\n</label>\n')),Object(c.b)("h2",null,"Props"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"ControlBox")," composes the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"./box"}),Object(c.b)("inlineCode",{parentName:"a"},"Box"))," component."),Object(c.b)("p",null,"By default, it toggles the opacity of the ",Object(c.b)("inlineCode",{parentName:"p"},"ControlBox")," children by setting ",Object(c.b)("inlineCode",{parentName:"p"},"_child")," to ",Object(c.b)("inlineCode",{parentName:"p"},"{ opacity: 0 }")," and ",Object(c.b)("inlineCode",{parentName:"p"},"_checkedAndChild")," to ",Object(c.b)("inlineCode",{parentName:"p"},"{ opacity: 1 }"),"."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Selector"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"_","child"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"[input] + & > *")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Styles for the child of the ",Object(c.b)("inlineCode",{parentName:"td"},"ControlBox"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"_","disabled"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"[input]:disabled + &")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Styles for when the sibling ",Object(c.b)("inlineCode",{parentName:"td"},"input")," is disabled.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"_","focus"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"[input]:focus + &")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Styles for when the sibling ",Object(c.b)("inlineCode",{parentName:"td"},"input")," is focused.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"_","hover"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"[input]:hover:not(:disabled):not(:checked):not(:focus) + &")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Styles for when the sibling ",Object(c.b)("inlineCode",{parentName:"td"},"input")," is hovered.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"_","checked"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"[input]:checked + &")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Styles for when the sibling ",Object(c.b)("inlineCode",{parentName:"td"},"input")," is checked.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"_","checkedAndActive"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"[input]:checked:active:not(:disabled):not(:focus) + &")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Styles for when the sibling ",Object(c.b)("inlineCode",{parentName:"td"},"input")," is checked and actived.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"_","checkedAndChild"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"[input]:checked + & > *")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Styles for the child of the ",Object(c.b)("inlineCode",{parentName:"td"},"ControlBox")," when the sibling ",Object(c.b)("inlineCode",{parentName:"td"},"input")," is checked.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"_","checkedAndDisabled"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"[input]:checked:disabled + &")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Styles for when the sibling ",Object(c.b)("inlineCode",{parentName:"td"},"input")," is checked and disabled.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"_","checkedAndFocus"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"[input]:checked:focus + &")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Styles for when the sibling ",Object(c.b)("inlineCode",{parentName:"td"},"input")," is checked and focused.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"_","checkedAndHover"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"[input]:checked:hover:not(:disabled):not(:focus) + &")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Styles for when the sibling ",Object(c.b)("inlineCode",{parentName:"td"},"input")," is checked and hovered.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"_","indeterminate"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"[input][data-indeterminate=true] + &")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Styles for when the sibling ",Object(c.b)("inlineCode",{parentName:"td"},"input")," is indeterminate.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"_","indeterminateAndActive"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"[input][data-indeterminate=true]:active:not(:disabled):not(:focus) + &")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Styles for when the sibling ",Object(c.b)("inlineCode",{parentName:"td"},"input")," is indeterminate and actived.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"_","indeterminateAndChild"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"[input][data-indeterminate=true] + & > *")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Styles for the child of the ",Object(c.b)("inlineCode",{parentName:"td"},"ControlBox")," when the sibling ",Object(c.b)("inlineCode",{parentName:"td"},"input")," is indeterminate.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"_","indeterminateAndDisabled"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"[input][data-indeterminate=true]:disabled + &")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Styles for when the sibling ",Object(c.b)("inlineCode",{parentName:"td"},"input")," is indeterminate and disabled.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"_","indeterminateAndFocus"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"[input][data-indeterminate=true]:focus + &")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Styles for when the sibling ",Object(c.b)("inlineCode",{parentName:"td"},"input")," is indeterminate and focused.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"_","indeterminateAndHover"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"[input][data-indeterminate=true]:hover:not(:disabled):not(:focus) + &")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Styles for when the sibling ",Object(c.b)("inlineCode",{parentName:"td"},"input")," is indeterminate and hovered.")))))}d.isMDXComponent=!0},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n("ERkP"),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O="mdxType",j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=d(n),O=a,s=p["".concat(b,".").concat(O)]||p[O]||j[O]||i;return n?r.a.createElement(s,c(c({ref:t},o),{},{components:n})):r.a.createElement(s,c({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var i=n.length,b=new Array(i);b[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[O]="string"===typeof e?e:a,b[1]=c;for(var o=2;o<i;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))}},[["J/Ev",0,1]]]);