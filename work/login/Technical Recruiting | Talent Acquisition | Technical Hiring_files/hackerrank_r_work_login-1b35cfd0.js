(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{"/SFx":function(e,t,n){var a={"./en-SG":"zavE","./en-SG.js":"zavE","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-nz":"b1Dy","./en-nz.js":"b1Dy"};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id="/SFx"},"1plc":function(e,t,n){},24:function(e,t){},"69bn":function(e,t,n){var a=n("y3w9"),o=n("2OiF"),r=n("K0xU")("species");e.exports=function(e,t){var n,s=a(e).constructor;return void 0===s||null==(n=a(s)[r])?t:o(n)}},CX2u:function(e,t,n){"use strict";var a=n("XKFU"),o=n("g3g5"),r=n("dyZX"),s=n("69bn"),i=n("vKrd");a(a.P+a.R,"Promise",{finally:function(e){var t=s(this,o.Promise||r.Promise),n="function"==typeof e;return this.then(n?function(n){return i(t,e()).then((function(){return n}))}:e,n?function(n){return i(t,e()).then((function(){throw n}))}:e)}})},E9Fz:function(e,t,n){},O6dN:function(e,t,n){"use strict";n.r(t);var a=n("w13Q"),o=n("ANjH"),r=n("2Q8W"),s=n("Jycj"),i=n("Rcrt"),c=n("+/cD"),l=n("eOGF"),u=n("BEOS");const m=[{path:"work",name:"work",className:function(){return"work-static-login"},onEnter:function(e,t,n){const a=Object(r.a)(e).blockOldStyles;Object(l.G)()&&a(),n()},childRoutes:[{path:"login",name:u.l,category:"login",pageViewId:"LoginContainer",metaData:{title:"Technical Recruiting | Talent Acquisition | Technical Hiring"},onEnter:function(e,t,n){const a=Object(r.a)(e).store.getState().work.user,o=e.location.query;if(!Object(i.z)(a)){t(Object(c.d)(a,o))}n()},getComponents:function(e,t){(()=>{const a=Object(r.a)(e),i=a.addScriptToPreload,c=a.store,l=a.fullManifest,u=a.assetMap,m=c.getState(),d=Object(o.a)(s.a,c.dispatch).loadManifest,h=m.metadata.bundles,g={fullManifest:l,assetMap:u};"function"==typeof i&&i("hackerrank_r_work_login.js");const p=t,f=()=>{Promise.resolve().then((e=>{const a=n("qDYC").default;t(null,a)}).bind(null,n)).catch(p)};h["hackerrank_r_work_login.js"]||"function"!=typeof d?f():d(Object.assign({},g,{bundles:["hackerrank_r_work_login.js"]})).then(f,p)})()}},{path:"reset_password",name:"Reset Password",category:"reset_password",pageViewId:"LoginContainer",metaData:{title:"Technical Recruiting | Talent Acquisition | Technical Hiring"},childRoutes:[{path:":reset_id",name:"Reset Password",category:"reset_password",pageViewId:"LoginContainer",metaData:{title:"Technical Recruiting | Talent Acquisition | Technical Hiring"},getComponents:function(e,t){const a=e.location.query,o=a.expires_at,r=a.uid,s=e.params.reset_id;if(Object(c.i)(o)){const e=u.b.EXPIREDTOKEN,a=n("qDYC").FailedForgotPassword;t(null,()=>a(e))}else{const e=n("qDYC").ResetPassword;t(null,()=>e(r,s))}}}]}]}];t.default=m,Object(a.d)("hackerrank_r_work_login.js")},SbGS:function(e,t,n){},o1Ub:function(e,t,n){},pbhE:function(e,t,n){"use strict";var a=n("2OiF");function o(e){var t,n;this.promise=new e((function(e,a){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=a})),this.resolve=a(t),this.reject=a(n)}e.exports.f=function(e){return new o(e)}},qDYC:function(e,t,n){"use strict";n.r(t);var a=n("lSNA"),o=n.n(a),r=n("cDcd"),s=n.n(r),i=n("6BPK"),c=n.n(i),l=n("+/cD");n("1plc");var u=function(){return s.a.createElement("a",{href:"/products"},s.a.createElement("div",{className:"login-logo"}))},m=n("pVnL"),d=n.n(m),h=(n("CX2u"),n("OEX3")),g=n("f0wr"),p=n("g+WX"),f=n("YZNL"),E=n("wqqT"),b=n("xNbf"),k=n("EfbJ");var w=function(e){const t=e.children;return s.a.createElement("p",{className:"login-form__header d-flex"},t)};var v=function(e){const t=e.children;return s.a.createElement("p",{className:"login-form__subtitle"},t)},S=n("vN+2"),_=n.n(S);function y(e){const t=e.onClickHandler,n=e.children,a=e.className;return s.a.createElement("span",{className:"custom-link "+a,role:"button",type:"button",onClick:t},n)}y.defaultProps={className:"",onClickHander:_.a};var C=y;function F(e){const t=e.email,n=e.onChangeEmail;return s.a.createElement(v,null,t,s.a.createElement(C,{onClickHandler:n},"Change"))}F.defaultProps={email:"",onChangeEmail:_.a};var O=F;function N(e){const t=e.title,n=e.onFormSubmit,a=e.children;return s.a.createElement("form",{onSubmit:n,noValidate:!0},s.a.createElement(w,null,t),a)}N.defaultProps={title:"Login Form",onFormSubmit:_.a};var P=N,T=(n("OG14"),n("MGin"));function L(e){const t=e.onBackClick,n=e.children,a=e.appUtil.location.search,o=void 0===a?"":a;return s.a.createElement(r.Fragment,null,n,s.a.createElement(T.Link,{to:"/work/login"+o,className:"custom-link custom-link--secondary",onClick:t},"Back to Login"))}L.defaultProps={onBackClick:_.a};var D=Object(k.b)(L),j=n("BEOS");n("o1Ub");function R(){return s.a.createElement("section",{className:"form-footer"},s.a.createElement("p",{className:"form-footer__content"},"Click"," ",s.a.createElement("a",{className:"form-footer__link",target:"_blank",href:j.h},"here")," ","to learn more about how you can secure your account."))}var M=function(){return s.a.createElement("section",{className:"form-footer"},s.a.createElement("div",{className:"form-footer__content"},s.a.createElement("p",{className:"form-footer__title"},"Don't have an account?"),s.a.createElement("p",null,"Contact your administrator or"," ",s.a.createElement("a",{className:"form-footer__link",target:"_blank",href:j.u},"Sign Up for a Free Trial"))))},I=n("QILm"),x=n.n(I),A=n("1OM/");var q=e=>{let t=e.value,n=e.onChange,a=e.step,o=e.type,r=e.name,i=e.error,c=x()(e,["value","onChange","step","type","name","error"]);const l=j.f[a],u=l.ICON,m=void 0===u?"":u,h=l.PLACEHOLDER,g=void 0===h?"":h;return s.a.createElement(A.b,d()({size:"large",theme:"theme-m",type:o,name:r,placeholder:g,icon:m,onChange:n,error:i,value:t,autoFocus:!0,autoCapitalize:"off",spellCheck:!1},c))},U=n("J4zp"),z=n.n(U),B=n("eRat");var H=()=>{const e=Object(r.useState)(!0),t=z()(e,2),n=t[0],a=t[1],o=()=>a(!1);return s.a.createElement(B.a,{title:"Thank you!",content:"Your account has been created. Click the link below to get started",buttons:s.a.createElement(h.d,{onClick:o},"Log in"),open:n,onClose:o})};n("SbGS");function Y(e){const t=e.onClickHandler;return s.a.createElement(r.Fragment,null,s.a.createElement("span",null,"Your account is not yet activated. Please click on the activation link sent to your email."," "),s.a.createElement(h.c,{className:"resend-activation__link",onClick:t,role:"link"},"Click here"),s.a.createElement("span",null," to resend the e-mail."))}function G(e){const t=e.lockedBy,n=e.lockedAt,a=e.lockedByEmail;return t&&n&&a?s.a.createElement(s.a.Fragment,null,"Your account was locked by ",t," <",a,"> on"," ",new Date(parseInt(n,10)).toLocaleString("en-US",{month:"long",day:"numeric",year:"numeric"}),". Please contact your team to unlock your account."):s.a.createElement(s.a.Fragment,null,"Your account seems to be locked. Please contact your company owner for more details.")}class X extends r.Component{constructor(e){var t,n,a;super(e),t=this,o()(this,"handleCheckboxChange",e=>{const t=e.target;this.setState({[t.name]:t.checked})}),o()(this,"handleInputChange",e=>{const t=e.target;this.setState({[t.name]:t.value})}),o()(this,"showEmailForm",()=>{this.setState({step:j.a,password:"",inputError:""})}),o()(this,"showPasswordForm",()=>{this.setState({step:j.n,inputError:""})}),o()(this,"showAlreadySignedInPage",()=>{this.setState({step:j.i,inputError:""})}),o()(this,"showForgotPasswordForm",()=>{this.setState({step:j.d,inputError:""})}),o()(this,"onForgotPasswordSuccess",e=>{const t=e.message,n=void 0===t?"":t;return this.setState({step:j.e,apiMessage:n,inputError:""}),e}),o()(this,"onResetPasswordSuccess",e=>{const t=e.message,n=void 0===t?"":t;return this.setState({step:j.s,apiMessage:n,inputError:""}),e}),o()(this,"onResetPasswordFail",e=>{const t=e.message,n=void 0===t?"":t,a=e.invalidPassword;void 0!==a&&a?this.showErrorMessage({error:e}):this.setState({step:j.p,apiMessage:n,inputError:""})}),o()(this,"onCancelForceLogin",()=>this.setState({step:j.a,password:""})),o()(this,"showErrorMessage",(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=e.key,a=void 0===n?"DEFAULTERR":n,o=e.error,r=void 0===o?null:o,i=e.locked_by_user_name,c=e.locked_at_timestamp,u=e.locked_by_user_email;let m="";m="ACCUNACT"===a?s.a.createElement(Y,{onClickHandler:t.resendActivation}):"LOCKEDACC"===a?s.a.createElement(G,{lockedBy:i,lockedByEmail:u,lockedAt:c}):r&&r.message||Object(l.c)(a),t.setState({inputError:m})})),o()(this,"resendActivation",e=>{e.preventDefault();const t={email:this.state.email,showMessage:this.showErrorMessage};this.makeAPIRequest(l.l,t)}),o()(this,"submitForm",e=>{e.preventDefault();const t=this.state,n=t.email,a=t.password,o=t.step,r=t.fingerprint,s=t.rememberMe,i={email:n,password:a,target:Object(l.g)(),rememberMe:JSON.stringify(s),fingerprint:r,currentStep:o,onSuccess:this.handleLoginSuccess,onError:this.showErrorMessage,nextStep:this.showPasswordForm};this.makeAPIRequest(l.k,i)}),o()(this,"forceLogin",e=>{e.preventDefault();const t=this.state,n=t.email,a=t.password,o=t.step,r=t.fingerprint,s=t.rememberMe,i={email:n,password:a,target:Object(l.g)(),rememberMe:JSON.stringify(s),fingerprint:r,logout_all_sessions:!0,currentStep:o,onSuccess:this.handleLoginSuccess,onError:this.showErrorMessage,nextStep:this.showPasswordForm};this.makeAPIRequest(l.k,i)}),o()(this,"submitForgotPassword",e=>{e.preventDefault();const t={email:this.state.email,onSuccess:this.onForgotPasswordSuccess,onError:this.showErrorMessage};this.makeAPIRequest(l.j,t)}),o()(this,"submitResetPassword",e=>{e.preventDefault();const t=this.state.password,n=this.props,a=n.resetToken,o={uid:n.uid,password:t,reset_token:a,onSuccess:this.onResetPasswordSuccess,onError:this.onResetPasswordFail};this.makeAPIRequest(l.m,o)}),o()(this,"makeAPIRequest",(e,t)=>{this.setState({loading:!0});const n=e(t);n&&n.finally(()=>this.setState({loading:!1}))}),o()(this,"renderLoginLimitReachedForm",e=>{let t=e.title,n=e.subTitle,a=e.buttonText,o=e.analytics;const i=s.a.createElement(r.Fragment,null,s.a.createElement("div",{className:"login-form__img"}),s.a.createElement("span",null,t));return s.a.createElement(P,{title:i,key:j.i,onFormSubmit:this.forceLogin},s.a.createElement(v,null,n),s.a.createElement(v,null,"Click on ",s.a.createElement("span",{className:"bold"},"Continue")," if you want to logout from other active sessions and login here."),s.a.createElement(h.d,d()({className:"login-form__button",type:"submit"},o),a),s.a.createElement(C,{onClickHandler:this.onCancelForceLogin},"Cancel"))}),o()(this,"handleLoginSuccess",e=>{const t=e.status,n=e.errors,a=e.locked_at_timestamp,o=e.locked_by_user_name,r=e.locked_by_user_email,s=e.target,i=e.url,c=e.currentStep,u=e.onError,m=e.nextStep;if(t){const t=Object(l.f)(i,s);return this.setState({showLoginSuccessTransition:!0}),Object(l.n)(t),e}const d=n.join("");return c===j.n&&n.indexOf("ACTIVE_SESSION_LIMIT")>-1?this.showAlreadySignedInPage():c!==j.a||n.indexOf("ATTLIMIT")>-1?u({key:d,locked_at_timestamp:a,locked_by_user_name:o,locked_by_user_email:r}):m(),e});const i=e.formStep,c=void 0===i?j.a:i,u=e.message,m=void 0===u?"":u,p=e.appUtil.location;this.successToast=new g.a({type:"success_strong",placement:"topCenter",icon:"ui-icon-success",duration:5,closable:!1}),this.state={email:null!==(n=null==p||null===(a=p.query)||void 0===a?void 0:a.email)&&void 0!==n?n:"",password:"",step:c,rememberMe:!1,fingerprint:null,inputError:"",apiMessage:m,loading:!1,showLoginSuccessTransition:!1,buttonDisabled:!0}}componentDidMount(){const e=Object(l.e)();e&&this.successToast.update({message:atob(e)}),this.setState({buttonDisabled:!1}),Object(l.b)(e=>{this.setState({fingerprint:e})})}getLoginFormContent(){const e=this.state,t=e.step,n=e.email,a=e.password,o=e.apiMessage,r=e.inputError,i=e.rememberMe,c=j.f[t],l=c.TITLE,u=void 0===l?"":l,m=c.LOCATION,g=void 0===m?"":m,f=c.BUTTON,E=void 0===f?"":f,b=c.SUBTITLE,k=void 0===b?"":b,S={"data-event-category":"HRW Login Page","data-event-action":"Click","data-event-label":`${g} - ${E}`};switch(t){case j.a:return s.a.createElement(P,{title:u,key:j.a,onFormSubmit:this.submitForm},s.a.createElement(v,null,k),s.a.createElement(q,{step:t,onChange:this.handleInputChange,error:r,value:n,type:"email",name:"email",disabled:this.state.loading}),s.a.createElement(p.a,{className:"login-form__checkbox",label:"Remember me",checked:i,onChange:this.handleCheckboxChange,name:"rememberMe"}),s.a.createElement(h.d,d()({disabled:this.state.buttonDisabled,className:"login-form__button",type:"submit"},S),E));case j.d:return s.a.createElement(P,{title:u,key:j.d,onFormSubmit:this.submitForgotPassword},s.a.createElement(v,null,k),s.a.createElement(q,{step:t,onChange:this.handleInputChange,error:r,value:n,type:"email",name:"email",disabled:this.state.loading}),s.a.createElement(h.d,d()({className:"login-form__button",type:"submit"},S),E));case j.n:return s.a.createElement(P,{title:u,key:j.n,onFormSubmit:this.submitForm},s.a.createElement(O,{onChangeEmail:this.showEmailForm,email:n}),s.a.createElement(q,{onChange:this.handleInputChange,error:r,value:a,step:t,type:"password",name:"password"}),s.a.createElement(h.d,d()({className:"login-form__button",type:"submit"},S),E),s.a.createElement(C,{onClickHandler:this.showForgotPasswordForm},"Forgot your password?"));case j.i:return this.renderLoginLimitReachedForm({title:u,subTitle:k,buttonText:E,analytics:S});case j.r:return s.a.createElement(P,{title:u,key:j.r,onFormSubmit:this.submitResetPassword},s.a.createElement(v,null,k),s.a.createElement(q,{onChange:this.handleInputChange,error:r,value:a,step:t,type:"password",name:"password",disabled:this.state.loading}),s.a.createElement(h.d,d()({disabled:this.state.buttonDisabled,className:"login-form__button",type:"submit"},S),E));default:return s.a.createElement(D,{onBackClick:this.showEmailForm},s.a.createElement(w,null,u),s.a.createElement(v,null,o))}}getFooterContent(){const e=this.state.step===j.i?R:M;return s.a.createElement(e,null)}render(){var e;const t=this.getLoginFormContent(),n=this.getFooterContent(),a=this.state,o=a.loading,r=a.showLoginSuccessTransition,i=this.props.appUtil.location,c="trial"===(null==i||null===(e=i.query)||void 0===e?void 0:e.signup);return s.a.createElement(s.a.Fragment,null,s.a.createElement(f.a,{className:"theme-m login-form"},s.a.createElement("div",{className:"theme-m login-form__body"},t),n,o&&s.a.createElement("div",{className:"d-flex justify-content-center login-form--loading"},s.a.createElement(E.a,{diameter:40})),r&&s.a.createElement("div",{className:"d-flex align-items-center justify-content-center text-align-center z-index-10 login-form--success"},s.a.createElement(b.a,null))),c&&s.a.createElement(H,null))}}var K=Object(k.b)(X),J=n("RKWz");n("E9Fz");function V(){return s.a.createElement("div",{className:"promotion-fallback"},s.a.createElement("div",{className:"promotion-fallback__img"}))}class W extends r.PureComponent{constructor(){super(...arguments),o()(this,"state",{loadSuccessful:!1,showDefault:!1,htmlDoc:""}),o()(this,"handleLoadSuccess",e=>{this.setState({loadSuccessful:!0,htmlDoc:e})})}componentDidMount(){Object(J.c)().then(this.handleLoadSuccess,e=>{console.error("[HRW-LOGIN]: Marketing Content: ",e),this.setState({loadSuccessful:!1,showDefault:!0})})}render(){const e=this.props.src,t=this.state,n=t.loadSuccessful,a=t.htmlDoc,o=t.showDefault;return s.a.createElement(r.Fragment,null,n?s.a.createElement("iframe",{title:"marketing-promo",srcDoc:a,src:e,scrolling:"no"}):null,!n&&o?s.a.createElement(V,null):null)}}var Z=W;n("n2yS"),n("yZIX");function Q(e){const t=e.formStep,n=e.message,a=e.resetToken,o=e.uid;return s.a.createElement("div",{className:"d-flex align-items-center col-lg-7 work-login--left work-login--centered"},s.a.createElement("div",{className:"login-container"},s.a.createElement(u,null),s.a.createElement(K,{message:n,formStep:t,resetToken:a,uid:o})))}function $(){return s.a.createElement("div",{className:"col-lg-9 work-login--right"},s.a.createElement(Z,{src:j.m}))}function ee(e,t){return s.a.createElement(ne,{formStep:j.r,resetToken:t,uid:e})}function te(e){return s.a.createElement(ne,{formStep:j.p,message:e})}n.d(t,"LoginContentLeft",(function(){return Q})),n.d(t,"LoginContentRight",(function(){return $})),n.d(t,"ResetPassword",(function(){return ee})),n.d(t,"FailedForgotPassword",(function(){return te}));class ne extends r.Component{componentDidMount(){try{c.a.get(j.c,l.a)}catch(e){console.error(e)}}render(){const e=this.props,t=e.formStep,n=e.message,a=e.resetToken,o=e.uid;return s.a.createElement("div",{className:"row work-login"},s.a.createElement(Q,{message:n,formStep:t,resetToken:a,uid:o}),s.a.createElement($,null))}}o()(ne,"defaultProps",{formStep:j.a,message:"",resetToken:"",uid:""});t.default=ne},vKrd:function(e,t,n){var a=n("y3w9"),o=n("0/R4"),r=n("pbhE");e.exports=function(e,t){if(a(e),o(t)&&t.constructor===e)return t;var n=r.f(e);return(0,n.resolve)(t),n.promise}},yZIX:function(e,t,n){}}]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/hackerrank_r_work_login-1b35cfd0.js.map