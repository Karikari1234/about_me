(self.webpackChunkrealCookieBanner_name_=self.webpackChunkrealCookieBanner_name_||[]).push([[322],{2982:function(e,t,n){"use strict";n.d(t,{f:function(){return a}});var r=n(2835),a=function(e){var t=e.children,n=e.maxWidth,a=void 0===n?"auto":n,c=e.style,o=void 0===c?{}:c;return React.createElement("div",{className:"rcb-config-content",style:(0,r.Z)({maxWidth:"fixed"===a?1300:a},o)},t)}},5646:function(e,t,n){"use strict";n.r(t),n.d(t,{ConfigLicensing:function(){return h}});var r=n(3554),a=n(6187),c=n(3735),o=n(4094),i=n(6315),l=n(8061),s=n(9591),u=n(3804),f=n(4614),d=n(4799),m=n(4342),p=(0,r.Pi)((function(){var e=(0,a.useStores)().pluginUpdateStore,t=e.busy,n=e.pluginUpdate,r=(0,f.m)(),p=r.optionStore,v=r.checklistStore,h=p.slug,g=p.others,y=g.isPro,b=g.showLicenseFormImmediate,E=p.publicUrl;(0,u.useEffect)((function(){return e.setFromSlug(h),function(){e.hideLicense()}}),[]);var Z=(0,u.useCallback)((function(){v.fetchChecklist(),p.setShowLicenseFormImmediate(!1,!0)}),[v,p]),C=(0,u.useCallback)((function(){v.fetchChecklist(),p.setShowLicenseFormImmediate(!1,!1)}),[v,p]),O=(0,u.useCallback)((function(){p.setShowLicenseFormImmediate(!1,!1),n.skip()}),[n,p]);return(0,u.useEffect)((function(){b&&null!=n&&n.hasInteractedWithFormOnce&&O()}),[n,b,O]),t||!n?React.createElement(s.Z,{spinning:!0}):React.createElement(React.Fragment,null,b&&React.createElement("div",{style:{maxWidth:650,textAlign:"center",margin:"0 auto 20px"}},React.createElement(l.C,{src:"".concat(E,"images/logos/real-cookie-banner.svg"),shape:"square",size:130,style:{backgroundColor:"white",padding:25,borderRadius:999}}),!y&&React.createElement("p",{style:{fontSize:15}},(0,d._i)((0,d.__)("Before we start configuring your cookie banner, you can {{strong}}obtain your free license to enjoy all the benefits{{/strong}} of the free version of Real Cookie Banner. The cookies are already waiting for you. Get started now!"),{strong:React.createElement("strong",null)}))),React.createElement(c.Z,{title:React.createElement(React.Fragment,null,y||n.isLicensed?(0,d.__)("License activation"):(0,d.__)("Get your free license")," ",!y&&!b&&React.createElement(m.r,{url:(0,d.__)("https://devowl.io/knowledge-base/real-cookie-banner-upgrade-free-to-pro-version/"),label:(0,d.__)("Upgrade to PRO version")}))},React.createElement(o.Z,{direction:"vertical",size:"large"},!n.isLicensed&&React.createElement("p",{className:"description"},y?(0,d.__)("Activate your Real Cookie Banner PRO license to receive regular updates and support. You find your license key in the customer center of devowl.io."):(0,d._i)((0,d.__)("To use all advantages of Real Cookie Banner {{strong}}you need a free license{{/strong}}. After license activation you will receive answers to support requests and announcements in your plugin (e.g. also notices for discount actions of the PRO version)."),{strong:React.createElement("strong",null)})),React.createElement(a.PluginUpdateEmbed,{formProps:{onSave:Z,onFailure:b&&!y?O:void 0,footer:React.createElement(i.Z.Item,{style:{margin:"25px 0 0",textAlign:b?"center":void 0}},React.createElement("input",{type:"submit",className:"button button-primary",value:b?y?(0,d.__)("Activate license & continue"):(0,d.__)("Activate free license & Continue"):(0,d.__)("Save")}))},listProps:{onDeactivate:C}}))),b&&React.createElement("div",{style:{textAlign:"center",marginTop:20}},React.createElement("a",{className:"button-link",onClick:O},y?(0,d.__)("Continue without regular updates and without any support"):(0,d.__)("Continue without any support and without e.g. discount announcements"))))})),v=n(2982),h=(0,r.Pi)((function(){return React.createElement(v.f,{maxWidth:800,style:{margin:"auto"}},React.createElement(a.Provider,null,React.createElement(p,null)))}))},4342:function(e,t,n){"use strict";n.d(t,{r:function(){return i}});var r=n(6107),a=n(2835),c=n(7088),o=n(4799),i=function(e){var t=e.url,n=e.style,i=void 0===n?void 0:n,l=e.label,s=void 0===l?(0,o.__)("Learn more"):l,u=(0,a.Z)({cursor:"pointer"},i);return React.createElement(r.Z,{style:u,onClick:function(){return window.open(t,"_blank")}},React.createElement(c.Z,null)," ",s)}},7088:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(3804),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 00-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"}}]},name:"question-circle",theme:"filled"},c=n(6002),o=function(e,t){return r.createElement(c.Z,Object.assign({},e,{ref:t,icon:a}))};o.displayName="QuestionCircleFilled";var i=r.forwardRef(o)},8061:function(e,t,n){"use strict";n.d(t,{C:function(){return L}});var r=n(1853),a=n(499),c=n(1970),o=n(8008),i=n(3804),l=n(2286),s=n.n(l),u=n(2835),f=n(5442),d=n(5675),m=n(9728),p=n(8684),v=n(8369),h=n(4237),g=n(1894),y=n(5643),b=n(7410),E=function(e){(0,m.Z)(n,e);var t=(0,p.Z)(n);function n(){var e;return(0,f.Z)(this,n),(e=t.apply(this,arguments)).resizeObserver=null,e.childNode=null,e.currentElement=null,e.state={width:0,height:0,offsetHeight:0,offsetWidth:0},e.onResize=function(t){var n=e.props.onResize,r=t[0].target,a=r.getBoundingClientRect(),c=a.width,o=a.height,i=r.offsetWidth,l=r.offsetHeight,s=Math.floor(c),f=Math.floor(o);if(e.state.width!==s||e.state.height!==f||e.state.offsetWidth!==i||e.state.offsetHeight!==l){var d={width:s,height:f,offsetWidth:i,offsetHeight:l};e.setState(d),n&&Promise.resolve().then((function(){n((0,u.Z)((0,u.Z)({},d),{},{offsetWidth:i,offsetHeight:l}),r)}))}},e.setChildNode=function(t){e.childNode=t},e}return(0,d.Z)(n,[{key:"componentDidMount",value:function(){this.onComponentUpdated()}},{key:"componentDidUpdate",value:function(){this.onComponentUpdated()}},{key:"componentWillUnmount",value:function(){this.destroyObserver()}},{key:"onComponentUpdated",value:function(){if(this.props.disabled)this.destroyObserver();else{var e=(0,v.Z)(this.childNode||this);e!==this.currentElement&&(this.destroyObserver(),this.currentElement=e),!this.resizeObserver&&e&&(this.resizeObserver=new b.Z(this.onResize),this.resizeObserver.observe(e))}}},{key:"destroyObserver",value:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"render",value:function(){var e=this.props.children,t=(0,h.Z)(e);if(t.length>1)(0,g.ZP)(!1,"Find more than one child node with `children` in ResizeObserver. Will only observe first one.");else if(0===t.length)return(0,g.ZP)(!1,"`children` of ResizeObserver is empty. Nothing is in observe."),null;var n=t[0];if(i.isValidElement(n)&&(0,y.Yr)(n)){var r=n.ref;t[0]=i.cloneElement(n,{ref:(0,y.sQ)(r,this.setChildNode)})}return 1===t.length?t[0]:t.map((function(e,t){return!i.isValidElement(e)||"key"in e&&null!==e.key?e:i.cloneElement(e,{key:"".concat("rc-observer-key","-").concat(t)})}))}}]),n}(i.Component);E.displayName="ResizeObserver";var Z=E,C=n(4178),O=n(7139),x=n(5e3),N=n(5806),w=i.createContext("default"),k=function(e){var t=e.children,n=e.size;return i.createElement(w.Consumer,null,(function(e){return i.createElement(w.Provider,{value:n||e},t)}))},P=w,R=function(e,t){var n,l,u=i.useContext(P),f=i.useState(1),d=(0,o.Z)(f,2),m=d[0],p=d[1],v=i.useState(!1),h=(0,o.Z)(v,2),g=h[0],b=h[1],E=i.useState(!0),w=(0,o.Z)(E,2),k=w[0],R=w[1],S=i.useRef(),_=i.useRef(),z=(0,y.sQ)(t,S),j=i.useContext(C.E_).getPrefixCls,W=function(){if(_.current&&S.current){var t=_.current.offsetWidth,n=S.current.offsetWidth;if(0!==t&&0!==n){var r=e.gap,a=void 0===r?4:r;2*a<n&&p(n-2*a<t?(n-2*a)/t:1)}}};i.useEffect((function(){b(!0)}),[]),i.useEffect((function(){R(!0),p(1)}),[e.src]),i.useEffect((function(){W()}),[e.gap]);var L=e.prefixCls,T=e.shape,A=e.size,F=e.src,B=e.srcSet,I=e.icon,U=e.className,H=e.alt,K=e.draggable,M=e.children,D=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children"]),V="default"===A?u:A,G=(0,N.Z)(),q=i.useMemo((function(){if("object"!==(0,c.Z)(V))return{};var e=x.c4.find((function(e){return G[e]})),t=V[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:I?t/2:18}:{}}),[G,V]);(0,O.Z)(!("string"==typeof I&&I.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(I,"` at https://ant.design/components/icon"));var Q,Y=j("avatar",L),X=s()((n={},(0,a.Z)(n,"".concat(Y,"-lg"),"large"===V),(0,a.Z)(n,"".concat(Y,"-sm"),"small"===V),n)),J=i.isValidElement(F),$=s()(Y,X,(l={},(0,a.Z)(l,"".concat(Y,"-").concat(T),!!T),(0,a.Z)(l,"".concat(Y,"-image"),J||F&&k),(0,a.Z)(l,"".concat(Y,"-icon"),!!I),l),U),ee="number"==typeof V?{width:V,height:V,lineHeight:"".concat(V,"px"),fontSize:I?V/2:18}:{};if("string"==typeof F&&k)Q=i.createElement("img",{src:F,draggable:K,srcSet:B,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&R(!1)},alt:H});else if(J)Q=F;else if(I)Q=I;else if(g||1!==m){var te="scale(".concat(m,") translateX(-50%)"),ne={msTransform:te,WebkitTransform:te,transform:te},re="number"==typeof V?{lineHeight:"".concat(V,"px")}:{};Q=i.createElement(Z,{onResize:W},i.createElement("span",{className:"".concat(Y,"-string"),ref:function(e){_.current=e},style:(0,r.Z)((0,r.Z)({},re),ne)},M))}else Q=i.createElement("span",{className:"".concat(Y,"-string"),style:{opacity:0},ref:function(e){_.current=e}},M);return delete D.onError,delete D.gap,i.createElement("span",(0,r.Z)({},D,{style:(0,r.Z)((0,r.Z)((0,r.Z)({},ee),q),D.style),className:$,ref:z}),Q)},S=i.forwardRef(R);S.displayName="Avatar",S.defaultProps={shape:"circle",size:"default"};var _=S,z=n(8929),j=n(7109),W=_;W.Group=function(e){var t=i.useContext(C.E_),n=t.getPrefixCls,r=t.direction,c=e.prefixCls,o=e.className,l=void 0===o?"":o,u=e.maxCount,f=e.maxStyle,d=e.size,m=n("avatar-group",c),p=s()(m,(0,a.Z)({},"".concat(m,"-rtl"),"rtl"===r),l),v=e.children,g=e.maxPopoverPlacement,y=void 0===g?"top":g,b=(0,h.Z)(v).map((function(e,t){return(0,z.Tm)(e,{key:"avatar-key-".concat(t)})})),E=b.length;if(u&&u<E){var Z=b.slice(0,u),O=b.slice(u,E);return Z.push(i.createElement(j.Z,{key:"avatar-popover-key",content:O,trigger:"hover",placement:y,overlayClassName:"".concat(m,"-popover")},i.createElement(_,{style:f},"+".concat(E-u)))),i.createElement(k,{size:d},i.createElement("div",{className:p,style:e.style},Z))}return i.createElement(k,{size:d},i.createElement("div",{className:p,style:e.style},b))};var L=W},3735:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(499),a=n(1853),c=n(3804),o=n(2286),i=n.n(o),l=n(733),s=n(4178),u=function(e){var t=e.prefixCls,n=e.className,o=e.hoverable,l=void 0===o||o,u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["prefixCls","className","hoverable"]);return c.createElement(s.C,null,(function(e){var o=(0,e.getPrefixCls)("card",t),s=i()("".concat(o,"-grid"),n,(0,r.Z)({},"".concat(o,"-grid-hoverable"),l));return c.createElement("div",(0,a.Z)({},u,{className:s}))}))},f=n(9440),d=n(5489),m=n(8503),p=n(8533),v=function(e){var t,n,o,v=c.useContext(s.E_),h=v.getPrefixCls,g=v.direction,y=c.useContext(p.Z),b=e.prefixCls,E=e.className,Z=e.extra,C=e.headStyle,O=void 0===C?{}:C,x=e.bodyStyle,N=void 0===x?{}:x,w=e.title,k=e.loading,P=e.bordered,R=void 0===P||P,S=e.size,_=e.type,z=e.cover,j=e.actions,W=e.tabList,L=e.children,T=e.activeTabKey,A=e.defaultActiveTabKey,F=e.tabBarExtraContent,B=e.hoverable,I=e.tabProps,U=void 0===I?{}:I,H=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),K=h("card",b),M=0===N.padding||"0px"===N.padding?{padding:24}:void 0,D=c.createElement("div",{className:"".concat(K,"-loading-block")}),V=c.createElement("div",{className:"".concat(K,"-loading-content"),style:M},c.createElement(d.Z,{gutter:8},c.createElement(m.Z,{span:22},D)),c.createElement(d.Z,{gutter:8},c.createElement(m.Z,{span:8},D),c.createElement(m.Z,{span:15},D)),c.createElement(d.Z,{gutter:8},c.createElement(m.Z,{span:6},D),c.createElement(m.Z,{span:18},D)),c.createElement(d.Z,{gutter:8},c.createElement(m.Z,{span:13},D),c.createElement(m.Z,{span:9},D)),c.createElement(d.Z,{gutter:8},c.createElement(m.Z,{span:4},D),c.createElement(m.Z,{span:3},D),c.createElement(m.Z,{span:16},D))),G=void 0!==T,q=(0,a.Z)((0,a.Z)({},U),(t={},(0,r.Z)(t,G?"activeKey":"defaultActiveKey",G?T:A),(0,r.Z)(t,"tabBarExtraContent",F),t)),Q=W&&W.length?c.createElement(f.Z,(0,a.Z)({size:"large"},q,{className:"".concat(K,"-head-tabs"),onChange:function(t){var n;null===(n=e.onTabChange)||void 0===n||n.call(e,t)}}),W.map((function(e){return c.createElement(f.Z.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(w||Z||Q)&&(o=c.createElement("div",{className:"".concat(K,"-head"),style:O},c.createElement("div",{className:"".concat(K,"-head-wrapper")},w&&c.createElement("div",{className:"".concat(K,"-head-title")},w),Z&&c.createElement("div",{className:"".concat(K,"-extra")},Z)),Q));var Y,X=z?c.createElement("div",{className:"".concat(K,"-cover")},z):null,J=c.createElement("div",{className:"".concat(K,"-body"),style:N},k?V:L),$=j&&j.length?c.createElement("ul",{className:"".concat(K,"-actions")},function(e){return e.map((function(t,n){return c.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(n)},c.createElement("span",null,t))}))}(j)):null,ee=(0,l.Z)(H,["onTabChange"]),te=S||y,ne=i()(K,(n={},(0,r.Z)(n,"".concat(K,"-loading"),k),(0,r.Z)(n,"".concat(K,"-bordered"),R),(0,r.Z)(n,"".concat(K,"-hoverable"),B),(0,r.Z)(n,"".concat(K,"-contain-grid"),(c.Children.forEach(e.children,(function(e){e&&e.type&&e.type===u&&(Y=!0)})),Y)),(0,r.Z)(n,"".concat(K,"-contain-tabs"),W&&W.length),(0,r.Z)(n,"".concat(K,"-").concat(te),te),(0,r.Z)(n,"".concat(K,"-type-").concat(_),!!_),(0,r.Z)(n,"".concat(K,"-rtl"),"rtl"===g),n),E);return c.createElement("div",(0,a.Z)({},ee,{className:ne}),o,X,J,$)};v.Grid=u,v.Meta=function(e){return c.createElement(s.C,null,(function(t){var n=t.getPrefixCls,r=e.prefixCls,o=e.className,l=e.avatar,s=e.title,u=e.description,f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["prefixCls","className","avatar","title","description"]),d=n("card",r),m=i()("".concat(d,"-meta"),o),p=l?c.createElement("div",{className:"".concat(d,"-meta-avatar")},l):null,v=s?c.createElement("div",{className:"".concat(d,"-meta-title")},s):null,h=u?c.createElement("div",{className:"".concat(d,"-meta-description")},u):null,g=v||h?c.createElement("div",{className:"".concat(d,"-meta-detail")},v,h):null;return c.createElement("div",(0,a.Z)({},f,{className:m}),p,g)}))};var h=v},5806:function(e,t,n){"use strict";var r=n(8008),a=n(3804),c=n(5e3);t.Z=function(){var e=(0,a.useState)({}),t=(0,r.Z)(e,2),n=t[0],o=t[1];return(0,a.useEffect)((function(){var e=c.ZP.subscribe((function(e){o(e)}));return function(){return c.ZP.unsubscribe(e)}}),[]),n}},7109:function(e,t,n){"use strict";var r=n(1853),a=n(3804),c=n(1857),o=n(4178),i=n(5266),l=n(5670),s=a.forwardRef((function(e,t){var n=e.prefixCls,s=e.title,u=e.content,f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["prefixCls","title","content"]),d=a.useContext(o.E_).getPrefixCls,m=d("popover",n),p=d();return a.createElement(c.Z,(0,r.Z)({},f,{prefixCls:m,ref:t,overlay:function(e){return a.createElement(a.Fragment,null,s&&a.createElement("div",{className:"".concat(e,"-title")},(0,i.Z)(s)),a.createElement("div",{className:"".concat(e,"-inner-content")},(0,i.Z)(u)))}(m),transitionName:(0,l.m)(p,"zoom-big",f.transitionName)}))}));s.displayName="Popover",s.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}},t.Z=s}}]);
//# sourceMappingURL=chunk-config-tab-licensing.lite.js.map?ver=d166fd03c6ebb1b4d3bf