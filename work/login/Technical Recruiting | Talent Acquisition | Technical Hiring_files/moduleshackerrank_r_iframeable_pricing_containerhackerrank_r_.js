(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"A/Ik":function(e,t,n){"use strict";var r=n("pVnL"),i=n.n(r),s=n("QILm"),a=n.n(s),o=n("cDcd"),l=n.n(o),c=n("HV62"),h=n("gWsE"),d=n("6lvD"),p=n.n(d),u=n("hoWH"),m=n.n(u),g=n("eOGF"),f=n("BkND");const x=["isBold","children","color","href","underline","variant"],b=Object(c.b)(f.a,{"&:hover":{color:"$primary400"},variants:{underline:{hover:{"text-decoration-line":"none","&:hover":{"text-decoration-line":"underline"}},none:{"text-decoration-line":"none"}},isDisabled:{true:{cursor:"default","&:hover":{color:"inherit"}}},isFocusVisible:{true:{br:"$1",outline:"$secondary200 auto 2px"}}}}),y=Object(o.forwardRef)((e,t)=>{let n=e.isBold,r=e.children,s=e.color,o=e.href,c=void 0===o?"#":o,d=e.underline,u=void 0===d?"always":d,f=e.variant,y=void 0===f?"text":f,v=a()(e,x);const O=Object(h.d)(),w=O.isFocusVisible,S=O.focusProps,j=p()({isFocusVisible:w},S,v);"_blank"===v.target&&m()(j,"rel","noopener noreferrer");return l.a.createElement(b,i()({isBold:n,css:{color:s||"$secondary500"},renderAs:"a",href:c,onKeyUp:e=>{"Enter"!==e.key||Object(g.G)()||(window.location.href=c)},ref:t,underline:u,variant:y},j),r)});t.a=y},BkND:function(e,t,n){"use strict";var r=n("pVnL"),i=n.n(r),s=n("QILm"),a=n.n(s),o=n("cDcd"),l=n.n(o),c=n("HV62"),h=n("bVBV"),d=n("gmFn");const p=["children","variant","renderAs","isBold","align","sx"],u=Object(c.b)("p",{all:"revert",margin:0,padding:0,color:"$neutral800",fontFamily:"$sans",fontWeight:"$1",variants:{size:{text:{fontSize:"$3",lineHeight:"1.75rem"},textXs:{fontSize:"$1",lineHeight:"1rem"},textSm:{fontSize:"$2",lineHeight:"1.5rem"},textLg:{fontSize:"$4",lineHeight:"2rem"},h5:{fontSize:"$5",lineHeight:"2.5rem"},h4:{fontSize:"$6",lineHeight:"3.5rem"},h3:{fontSize:"$7",lineHeight:"3.75rem"},h2:{fontSize:"$8",lineHeight:"4rem"},h1:{fontSize:"$9",lineHeight:"4.5rem"},label:{fontSize:"$2",lineHeight:"1.5rem",fontWeight:"$2"},"section-headline":{fontSize:"$2",fontWeight:"$2",lineHeight:"$1",letterSpacing:"0.3rem",textTransform:"uppercase"},hint:{fontSize:"$2",lineHeight:"1.5rem"},input:{fontSize:"$3",lineHeight:"1.23rem"}},align:{center:{textAlign:"center"},justify:{textAlign:"justify"},left:{textAlign:"left"},right:{textAlign:"right"},inherit:{textAlign:"inherit"}},isBold:{true:{fontWeight:"$3"}}},compoundVariants:[{size:"text",isBold:!0,css:{fontWeight:"$2"}},{size:"textSm",isBold:!0,css:{fontWeight:"$2"}}]}),m=Object(o.forwardRef)((e,t)=>{let n=e.children,r=e.variant,s=e.renderAs,o=e.isBold,c=void 0!==o&&o,m=e.align,g=void 0===m?"inherit":m,f=e.sx,x=void 0===f?{}:f,b=a()(e,p);const y=((e,t)=>{switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":return{size:e,renderAs:t||e};case"text-l":return{size:"textLg",renderAs:t||"p"};case"text":return{size:"text",renderAs:t||"p"};case"text-sm":return{size:"textSm",renderAs:t||"p"};case"text-xs":return{size:"textXs",renderAs:t||"p"};case"label":case"hint":case"input":case"section-headline":return{size:e,renderAs:t||"span"};default:return{size:"text",renderAs:t||"p"}}})(r,s),v=y.size,O=y.renderAs,w=Object(h.b)(x,d.a.Typography);return l.a.createElement(u,i()({},b,{as:O,size:v,align:g,isBold:c,ref:t,css:w}),n)});t.a=m},HN7a:function(e,t,n){"use strict";n("rGqo");var r=n("pVnL"),i=n.n(r),s=n("lSNA"),a=n.n(s),o=n("QILm"),l=n.n(o),c=n("cDcd"),h=n.n(c),d=n("TdS1"),p=n("HV62"),u=n("6lvD"),m=n.n(u),g=n("9keU"),f=n.n(g),x=n("A/Ik"),b=n("BkND");var y=Object(p.b)("p",{px:"$1",variants:{useIcon:{true:{fontSize:"$1"}}}});const v=["children","href","separator","isCurrent"];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const S=Object(p.b)("li",{color:"$neutral800",display:"inline-flex",alignItems:"center"}),j=Object(p.b)(b.a,{a:{color:"unset",cursor:"pointer",fontWeight:"normal",pointerEvents:"all",textDecoration:"none","&:hover":{color:"$primary400"}},variants:{isCurrent:{true:{a:{fontWeight:"$2",pointerEvents:"none","&:hover":{color:"initial"}}}}}});t.a=function(e){const t=e.children,n=e.href,r=e.separator,s=e.isCurrent,a=l()(e,v),o=Object(c.useRef)(),p=Object(d.a)(w(w({},f()(e,["separator","href"])),{},{elementType:x.a}),o).itemProps,u=m()(a,p),g=n?x.a:j,b=n?{color:"inherit",href:n,underline:"none",isDisabled:s}:{isCurrent:s};return h.a.createElement(S,null,h.a.createElement(g,i()({isBold:s,ref:o,variant:"text-sm"},b,u),t),!s&&h.a.createElement(y,{"aria-hidden":"true",role:"presentation",useIcon:"string"!=typeof r},r))}},HV62:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n("AOmq");const i={colors:{baseWhite:"hsl(0, 0%, 100%)",baseBlack:"hsl(221, 69%, 6%)",primary50:"hsl(140, 60%, 95%)",primary100:"hsl(141, 61%, 89%)",primary200:"hsl(141, 59%, 69%)",primary300:"hsl(141, 60%, 49%)",primary400:"hsl(141, 72%, 38%)",primary500:"hsl(140, 92%, 28%)",primary600:"hsl(141, 92%, 25%)",primary700:"hsl(140, 92%, 20%)",primary800:"hsl(141, 92%, 15%)",primary900:"hsl(140, 92%, 10%)",secondary50:"hsl(196, 100%, 97%)",secondary100:"hsl(194, 100%, 90%)",secondary200:"hsl(194, 100%, 64%)",secondary300:"hsl(194, 100%, 44%)",secondary400:"hsl(202, 91%, 39%)",secondary500:"hsl(205, 80%, 34%)",secondary600:"hsl(222, 62%, 32%)",secondary700:"hsl(222, 62%, 25%)",secondary800:"hsl(223, 61%, 20%)",secondary900:"hsl(222, 61%, 15%)",neutral50:"hsl(180, 20%, 96%)",neutral100:"hsl(187, 20%, 92%)",neutral200:"hsl(189, 17%, 76%)",neutral300:"hsl(187, 13%, 63%)",neutral400:"hsl(187, 13%, 51%)",neutral700:"hsl(201, 13%, 39%)",neutral800:"hsl(214, 16%, 26%)",neutral900:"hsl(218, 36%, 9%)",critical50:"hsl(350, 75%, 98%)",critical100:"hsl(353, 69%, 95%)",critical200:"hsl(356, 68%, 91%)",critical300:"hsl(355, 67%, 87%)",critical400:"hsl(355, 66%, 83%)",critical500:"hsl(355, 67%, 77%)",critical600:"hsl(355, 66%, 71%)",critical700:"hsl(355, 67%, 62%)",critical800:"hsl(355, 74%, 47%)",critical900:"hsl(355, 100%, 26%)",warning50:"hsl(30, 67%, 98%)",warning100:"hsl(25, 67%, 93%)",warning200:"hsl(24, 68%, 88%)",warning300:"hsl(25, 67%, 82%)",warning400:"hsl(25, 66%, 76%)",warning500:"hsl(25, 66%, 68%)",warning600:"hsl(25, 67%, 60%)",warning700:"hsl(25, 71%, 48%)",warning800:"hsl(25, 100%, 35%)",warning900:"hsl(25, 100%, 21%)",success50:"hsl(175, 67%, 96%)",success100:"hsl(175, 66%, 88%)",success200:"hsl(175, 67%, 80%)",success300:"hsl(175, 66%, 69%)",success400:"hsl(175, 67%, 55%)",success500:"hsl(175, 100%, 39%)",success600:"hsl(175, 100%, 35%)",success700:"hsl(175, 100%, 30%)",success800:"hsl(175, 100%, 24%)",success900:"hsl(175, 100%, 14%)"},fonts:{sans:"Open Sans, Arial, Helvetica, sans-serif",mono:"Source Code pro, monaco, Courier, monospace"},space:{1:"4px",2:"8px",3:"16px",4:"24px",5:"32px",6:"48px",7:"96px"},sizes:{1:"4px",2:"8px",3:"16px",4:"24px",5:"32px",6:"48px",7:"64px",8:"96px",buttonHeightSm:"32px",buttonHeight:"40px",buttonHeightLg:"48px",inputHeight:"40px",inputWidth:"320px",minInputWidth:"180px",containerSm:"416px",containerMd:"636px",containerLg:"856px"},fontSizes:{1:"0.75rem",2:"0.875rem",3:"1rem",4:"1.25rem",5:"1.563rem",6:"1.953rem",7:"2.441rem",8:"3.052rem",9:"3.815rem",button:"1rem",buttonSm:"0.812rem"},fontWeights:{1:"400",2:"600",3:"700"},lineHeights:{0:"1rem",1:"1.25rem",2:"1.5rem",3:"1.75rem",4:"2rem",5:"2.5rem",6:"3.5rem",7:"3.75rem",8:"4rem",9:"4.5rem"},radii:{1:"4px",round:"50%",pill:"9999px"},zIndices:{1:"100",2:"200",3:"300",4:"400",max:"999"},shadows:{1:"0px 1px 4px rgba(37, 69, 105, 0.05), 0px 2px 8px rgba(37, 69, 105, 0.05)",2:"0px 1px 4px rgba(37, 69, 105, 0.1), 0px 3px 12px rgba(37, 69, 105, 0.1)"}},s=Object(r.a)({theme:i,media:{sm:"@media (min-width: 576px)",md:"@media (min-width: 768px)",lg:"@media (min-width: 992px)",xl:"@media (min-width: 1200px)",xxl:"@media (min-width: 1400px)"},utils:{p:e=>({paddingTop:e,paddingBottom:e,paddingLeft:e,paddingRight:e}),pt:e=>({paddingTop:e}),pr:e=>({paddingRight:e}),pb:e=>({paddingBottom:e}),pl:e=>({paddingLeft:e}),px:e=>({paddingLeft:e,paddingRight:e}),py:e=>({paddingTop:e,paddingBottom:e}),m:e=>({marginTop:e,marginBottom:e,marginLeft:e,marginRight:e}),mt:e=>({marginTop:e}),mr:e=>({marginRight:e}),mb:e=>({marginBottom:e}),ml:e=>({marginLeft:e}),mx:e=>({marginLeft:e,marginRight:e}),my:e=>({marginTop:e,marginBottom:e}),ta:e=>({textAlign:e}),fd:e=>({flexDirection:e}),fw:e=>({flexWrap:e}),ai:e=>({alignItems:e}),ac:e=>({alignContent:e}),jc:e=>({justifyContent:e}),as:e=>({alignSelf:e}),fg:e=>({flexGrow:e}),fs:e=>({flexShrink:e}),fb:e=>({flexBasis:e}),bgColor:e=>({backgroundColor:e}),br:e=>({borderRadius:e}),bs:e=>({boxShadow:e}),lh:e=>({lineHeight:e}),ox:e=>({overflowX:e}),oy:e=>({overflowY:e}),size:e=>({width:e,height:e})}}),a=s.styled,o=(s.css,s.getCssText,s.globalCss,s.keyframes)},"HVf+":function(e,t,n){"use strict";var r=n("pVnL"),i=n.n(r),s=n("cDcd"),a=n.n(s),o=n("TdS1"),l=n("HV62"),c=n("BkND");const h=Object(l.b)("ol",{listStyleType:"none",px:"0",m:"0"});t.a=function(e){let t=e.children,n=e.separator,r=void 0===n?"/":n,l=e.title,d=void 0===l?"":l;const p=Object(o.b)({children:t}).navProps;return a.a.createElement("nav",i()({"aria-label":"breadcrumb"},p),a.a.createElement(h,null,s.Children.map(t,(e,n)=>Object(s.cloneElement)(e,{separator:r,isCurrent:n===t.length-1}))),d&&a.a.createElement(c.a,{variant:"h4"},d))}},HfZf:function(e,t,n){"use strict";var r=n("lSNA"),i=n.n(r),s=n("cDcd"),a=n.n(s),o=n("eOGF"),l=n("0e0P");class c extends s.PureComponent{getHtml(){const e=this.props,t=e.html,n=e.id,r=e.isAppMounted;if(Object(o.G)()||r)return t;const i=document.getElementById(n);return i?i.innerHTML:t}render(){const e=this.props,t=e.element,n=e.id,r=e.className,i=this.getHtml();return a.a.createElement(t,{id:n,className:r,dangerouslySetInnerHTML:{__html:i}})}}i()(c,"defaultProps",{element:"div"}),t.a=Object(l.a)(c)},MHyG:function(e,t,n){"use strict";var r=n("pVnL"),i=n.n(r),s=n("QILm"),a=n.n(s),o=n("cDcd"),l=n.n(o),c=n("9keU"),h=n.n(c),d=n("wBNj");const p=["sx"];Object(d.setConfiguration)({breakpoints:[576,768,992,1200,1400],containerWidths:[540,720,960,1140,1320],gutterWidth:24});t.a=e=>{let t=e.sx,n=a()(e,p);const r=(t||{}).minWidth;return l.a.createElement(d.Container,i()({},h()(n,["md","sm","xs"]),{style:{minWidth:r}}))}},XzeZ:function(e,t,n){"use strict";let r,i;n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));try{r=localStorage,i=sessionStorage}catch(e){r={},i={}}function s(e){const t={set:function(t,n,r){const i=Date.now()/1e3,s={updatedTime:i,data:n};r&&(s.expireOn=i+r),e[t]=JSON.stringify(s)},get:function(n,r){let i=e[n];try{i=JSON.parse(i)}catch(e){i={data:i}}if(!(i.expireOn&&i.expireOn<Date.now()/1e3))return r||!("data"in i)?i:i.data;t.delete(n)},delete:function(t){e[t]&&delete e[t]}};return t}const a=s(r),o=s(i)},bVBV:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return c}));n("rGqo");var r=n("cDcd"),i=n.n(r),s=n("gmFn");function a(e){0}function o(e){e.label||e["aria-label"]||e["aria-labelledby"]||a()}function l(e,t,n){const r=[];return i.a.Children.forEach(e,e=>{const n=e.type,i=n.displayName,s=n.name;t.includes(i)||t.includes(s)?r.push(e):a()}),r}function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!e||Object.keys(e).length<1)return null;const n={};return[...s.b,...t].forEach(t=>{t in e&&(n[t]=e[t])}),n}},gmFn:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));n("rGqo");const r=Object.keys({margin:"",marginTop:"",marginBottom:"",marginLeft:"",marginRight:"",flex:"",flexGrow:"",flexShrink:"",flexBasis:""}),i={Typography:["color","display"]}}}]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/modules~hackerrank_r_iframeable_pricing_container~hackerrank_r_work~hackerrank_r_work_login-5a52b718.js.map