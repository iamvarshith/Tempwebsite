(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"2Ica":function(e,t,n){"use strict";var s=n("pVnL"),o=n.n(s),r=n("QILm"),c=n.n(r),i=n("lSNA"),a=n.n(i),l=n("cDcd"),u=n.n(l),d=n("TSYQ"),p=n.n(d),m=n("37OS"),h=n.n(m),f=n("WEWv"),I=n("I53q");const w=["className","children","dropdownContext","element"];class C extends l.PureComponent{constructor(){super(...arguments),a()(this,"handleClick",e=>{if("keydown"===e.type){if(e.key!==I.a.Enter&&e.key!==I.a.Space)return;e.preventDefault()}const t=this.props,n=t.onClick,s=t.dropdownContext,o=s.disabled,r=s.open,c=s.setOpenState;n&&n(e),o||c(!r)})}render(){const e=this.props,t=e.className,n=e.children,s=e.dropdownContext,r=s.open,i=s.as,a=e.element,l=c()(e,w);return u.a.createElement(a,o()({},l,{"aria-haspopup":i,"aria-expanded":r,className:p()("dropdown-handle",t),onClick:this.handleClick,onKeyDown:this.handleClick}),n)}}a()(C,"defaultProps",{onClick:h.a,element:"div"}),t.a=Object(f.c)("DropdownHandle can be only used inside Dropdown scope.")(C)},ECpG:function(e,t,n){},I53q:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));const s={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight",Home:"Home",End:"End",PageUp:"PageUp",PageDown:"PageDown",Tab:"Tab",Space:" ",Enter:"Enter",Escape:"Escape"}},LD1s:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var s=n("lSNA"),o=n.n(s),r=n("cDcd"),c=n("TSYQ"),i=n.n(c),a=n("37OS"),l=n.n(a),u=n("WEWv");n("ECpG");const d={LISTBOX:"listbox",MENU:"menu"};class p extends r.PureComponent{static getDerivedStateFromProps(e,t){const n=e.disabled,s=e.open;return n||e.open!==t.openValueFromProps?{open:!n&&s,openValueFromProps:e.open}:null}constructor(e){super(e),o()(this,"setOpenState",e=>{if(this.state.open===e)return;const t=this.props,n=t.onOpen,s=t.onClose;this.setState({open:e},e?n:s)}),this.state={open:e.open,openValueFromProps:e.open}}render(){const e=this.props,t=e.className,n=e.children,s=e.closeHandleSelector,o=e.disabled,c=e.as,a=this.state.open,l={open:a,closeHandleSelector:s,disabled:o,setOpenState:this.setOpenState,as:c};return r.createElement(u.b,{value:l},r.createElement("div",{className:i()("dropdown",t,{open:a})},n))}}o()(p,"defaultProps",{onOpen:l.a,onClose:l.a,open:!1,disabled:!1,as:d.MENU}),t.b=p},WEWv:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return a}));var s=n("cDcd"),o=n("f/Vi");const r=Object(s.createContext)(),c=r.Provider,i=r.Consumer;function a(e){return Object(o.a)(e,i,"dropdownContext")}},cwrU:function(e,t,n){},e6Ar:function(e,t,n){"use strict";var s=n("pVnL"),o=n.n(s),r=n("QILm"),c=n.n(r),i=n("lSNA"),a=n.n(i),l=n("cDcd"),u=n.n(l),d=n("TSYQ"),p=n.n(d),m=n("Wwog"),h=n("2Ica"),f=n("hF3m"),I=n("LD1s"),w=n("WEWv");const C=Object(l.createContext)(),v=C.Provider,b=C.Consumer;var x=n("f/Vi");n("cwrU");const S=["menuContext","className","children","value","onClick","clickableSelector"],k={[I.a.LISTBOX]:"option",[I.a.MENU]:"menuitem"};class E extends l.PureComponent{constructor(){super(...arguments),a()(this,"wrapperRef",Object(l.createRef)()),a()(this,"onClick",e=>{const t=this.props,n=t.menuContext,s=t.onClick;n.onItemClick(this),s&&s(e)}),a()(this,"onMouseOver",()=>{this.props.menuContext.onFocusItem(this)})}componentDidMount(){this.props.menuContext.register(this)}componentWillUnmount(){this.props.menuContext.unregister(this)}gotoClickableItem(){const e=this.props.clickableSelector,t=this.wrapperRef.current;if(e&&t){const n=t.querySelector(e);n&&n.click()}}render(){const e=this.props,t=e.menuContext,n=t.focussedItem,s=t.as,r=e.className,i=e.children,a=(e.value,e.onClick,e.clickableSelector,c()(e,S)),l=n===this,d=p()("selectable-menu-item",r,{"selectable-menu-item--focussed":l}),m="function"==typeof i?i({isFocussed:l}):i;return u.a.createElement("div",o()({role:k[s]},a,{ref:this.wrapperRef,className:d,onClick:this.onClick,onMouseOver:this.onMouseOver,onFocus:this.onMouseOver,"aria-selected":l,tabIndex:l?0:-1}),m)}}a()(E,"defaultProps",{clickableSelector:"a, button"});var D=Object(x.a)("Menu.Item should be used inside Menu",b,"menuContext")(E),g=n("I53q");n("tfTX");n.d(t,"a",(function(){return y}));const O=["menuClassName","direction","title","handleElement","menuProps","children","as","selectedValue","onSelect"],P=["selectedValue","title","menuClassName","direction","menuProps","className","theme","as"];class N extends l.Component{constructor(){var e;super(...arguments),e=this,a()(this,"isFocussed",!1),a()(this,"menuRef",u.a.createRef()),a()(this,"menuItems",[]),a()(this,"memoizedProvider",Object(m.a)(this.getProviderValue.bind(this))),a()(this,"state",{focussedItemIndex:-1}),a()(this,"focusItem",e=>{this.setState({focussedItemIndex:this.menuItems.indexOf(e)})}),a()(this,"onItemClick",(function(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const s=e.props.onSelect,o=t.props.value;s&&s(o),n&&t.gotoClickableItem()})),a()(this,"onKeyDown",e=>{if(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey)return;const t=this.state.focussedItemIndex,n=this.props.dropdownContext.setOpenState;let s=t;switch(e.key){case g.a.Escape:return e.preventDefault(),void n(!1);case g.a.ArrowUp:case g.a.PageUp:case g.a.Home:{e.preventDefault(),0===t&&(s=this.menuItems.length);const n=this.menuItems[e.key===g.a.ArrowUp?s-1:0];return void this.focusItem(n)}case g.a.ArrowDown:case g.a.PageDown:case g.a.End:{e.preventDefault(),t===this.menuItems.length-1&&(s=-1);const n=this.menuItems[e.key===g.a.ArrowDown?s+1:this.menuItems.length-1];return void this.focusItem(n)}case g.a.Enter:case g.a.Space:{e.preventDefault();(0,this.props.dropdownContext.setOpenState)(!1);const n=this.menuItems[t];return void this.onItemClick(n,!0)}default:return}}),a()(this,"registerMenuItem",e=>{this.menuItems.push(e);this.props.selectedValue===e.props.value&&this.setState({focussedItemIndex:this.menuItems.length-1})}),a()(this,"unregisterMenuItem",e=>{const t=this.props.selectedValue;this.menuItems=this.menuItems.filter(t=>t!==e);const n=this.state.focussedItemIndex,s=this.menuItems.findIndex(e=>e.props.value===t);s!==n&&this.setState({focussedItemIndex:s})})}componentDidMount(){this.focusMenu()}componentDidUpdate(e,t){const n=e.selectedValue,s=e.dropdownContext,o=this.props,r=o.dropdownContext,c=o.selectedValue,i=this.state.focussedItemIndex;if(s.open!==r.open&&this.focusMenu(),t.focussedItemIndex!==i&&this.menuRef.current){const e=this.menuRef.current.querySelector('[aria-selected="true"]');if(e&&e.focus&&e.focus(),e&&e.scrollIntoView)return void e.scrollIntoView({behavior:"smooth",block:"nearest"})}if(n!==c){const e=this.menuItems.find(e=>e.props.value===c);if(!e)return;this.focusItem(e)}}focusMenu(){const e=this.props.dropdownContext.open,t=this.menuRef.current;e&&t&&document.activeElement!==t&&t.focus()}getProviderValue(e){const t=this.props.as;return{focussedItem:e<0||e>=this.menuItems.length?null:this.menuItems[e],register:this.registerMenuItem,unregister:this.unregisterMenuItem,onFocusItem:this.focusItem,onItemClick:this.onItemClick,as:t}}render(){const e=this.state.focussedItemIndex,t=this.props,n=t.menuClassName,s=t.direction,r=void 0===s?"down":s,i=t.title,a=t.handleElement,l=t.menuProps,d=void 0===l?{}:l,m=t.children,I=t.as,w=(t.selectedValue,t.onSelect,c()(t,O)),C=p()("dropdown-menu selectable-dropdown-menu__list",n,"selectable-dropdown-menu__list--"+r);return u.a.createElement(v,{value:this.memoizedProvider(e)},u.a.createElement(h.a,o()({},w,{element:a,className:"selectable-dropdown-menu__toggle"}),i),u.a.createElement(f.a,{role:void 0,tabIndex:void 0},u.a.createElement("div",o()({},d,{ref:this.menuRef,tabIndex:"-1",role:I,className:C,onKeyDown:this.onKeyDown}),m)))}}function y(e){e.selectedValue,e.title,e.menuClassName,e.direction,e.menuProps;const t=e.className,n=e.theme,s=e.as,r=void 0===s?I.a.LISTBOX:s,i=c()(e,P),a="dark"===n?"selectable-dropdown-menu--dark":"";return u.a.createElement(I.b,o()({className:p()("selectable-dropdown-menu",a,t)},i,{closeHandleSelector:".selectable-menu-item",as:r}),u.a.createElement(w.a,null,t=>u.a.createElement(N,o()({},e,{dropdownContext:t}))))}a()(N,"defaultProps",{as:I.a.LISTBOX}),y.Item=D},"f/Vi":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var s=n("eHHv");function o(e,t,n){return Object(s.b)(t,t=>{if(!t)throw new Error(e);return{[n]:t}})}},hF3m:function(e,t,n){"use strict";var s=n("pVnL"),o=n.n(s),r=n("QILm"),c=n.n(r),i=n("lSNA"),a=n.n(i),l=n("cDcd"),u=n.n(l),d=n("TSYQ"),p=n.n(d),m=n("dvg7"),h=n.n(m),f=n("WEWv");const I=["className","children","dropdownContext"];class w extends l.PureComponent{constructor(){super(...arguments),a()(this,"containerRef",u.a.createRef()),a()(this,"handleClick",e=>{const t=this.props.dropdownContext,n=t.closeHandleSelector,s=t.setOpenState;n&&e.target.closest(n)&&s(!1)}),a()(this,"closeDropdown",e=>{const t=this.props.dropdownContext.setOpenState;setTimeout(()=>t(!1))})}componentDidMount(){this.props.dropdownContext.open&&this.containerRef.current&&this.containerRef.current.container.focus()}componentDidUpdate(e){let t=e.dropdownContext;const n=this.props.dropdownContext;t.open!==n.open&&n.open&&this.containerRef.current&&this.containerRef.current.container.focus()}render(){const e=this.props,t=e.className,n=e.children,s=e.dropdownContext,r=s.open,i=s.as,a=c()(e,I);return r?u.a.createElement(h.a,o()({role:i,tabIndex:-1},a,{className:p()("dropdown-body",t),ref:this.containerRef,"aria-hidden":r?"false":"true",onClick:this.handleClick,onClickOutside:this.closeDropdown}),n):null}}t.a=Object(f.c)("DropdownBody can be only used inside Dropdown scope.")(w)},tfTX:function(e,t,n){}}]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/modules~hackerrank_r_community~hackerrank_r_testinvite~hackerrank_r_testquestions~hackerrank_r_work-bdfe8415.js.map