(self.webpackChunkrealCookieBanner_name_=self.webpackChunkrealCookieBanner_name_||[]).push([[625],{4518:function(e,t,a){"use strict";a.d(t,{A:function(){return n}});var n=(0,a(3554).Pi)((function(){return React.createElement("div",null)}))},8497:function(e,t,a){"use strict";a.r(t),a.d(t,{ConsentTabRouter:function(){return re}});var n=a(9440),r=a(3554),o=a(847),c=a(2982),l=a(4799),s=a(1944),i=a(5489),u=a(8503),_=a(2841),d=a(3828),m=a(499),h=a(3804),p=(0,r.Pi)((function(){return React.createElement("div",null)})),E=(0,r.Pi)((function(){return React.createElement("div",null)})),f=a(4518),R=a(4614),g=a(5990),y=a(2579),v=a(2470),b=a.n(v),k=(0,r.Pi)((function(){var e=(0,R.m)(),t=e.optionStore,a=t.others,n=a.isPro,r=a.assetsUrl,o=t.contexts,c=e.statsStore,v=c.filters,k=v.dates,T=v.context,w=Object.keys(o),Z=(0,h.useMemo)((function(){var e;return e={},(0,m.Z)(e,(0,l.__)("Today"),[b()(),b()()]),(0,m.Z)(e,(0,l.__)("This Year"),[b()().startOf("year"),b()().endOf("year")]),(0,m.Z)(e,(0,l.__)("This Month"),[b()().startOf("month"),b()().endOf("month")]),(0,m.Z)(e,(0,l.__)("This Week"),[b()().startOf("week"),b()().endOf("week")]),(0,m.Z)(e,(0,l.__)("Last 30 days"),[b()().subtract(30,"days"),b()()]),(0,m.Z)(e,(0,l.__)("Last 90 days"),[b()().subtract(30,"days"),b()()]),e}),[]);return n?React.createElement(React.Fragment,null,React.createElement("div",{style:{textAlign:"right"}},w.length>1&&React.createElement(React.Fragment,null,React.createElement("label",null,React.createElement(d.Z,{style:{width:200,textAlign:"left"},value:T,onSelect:function(e){return c.applyContext(e)}},w.map((function(e){return React.createElement(d.Z.Option,{value:e,key:e},o[e])})))),React.createElement(_.Z,{type:"vertical"})),React.createElement("label",null,(0,l.__)("Period"),":"," ",React.createElement(g.D,{value:k,ranges:Z,onChange:function(e){return c.applyDates(e)}}))),2===(null==k?void 0:k.length)?React.createElement(React.Fragment,null,React.createElement(i.Z,null,React.createElement(u.Z,{md:12,sm:24},React.createElement(_.Z,null,(0,l.__)("Consents by clicked button")),React.createElement(p,null)),React.createElement(u.Z,{md:12,sm:24},React.createElement(_.Z,null,(0,l.__)("Cookie banner bypass")),React.createElement(E,null))),React.createElement(i.Z,null,React.createElement(u.Z,{md:20,sm:24,style:{margin:"auto",paddingTop:20,marginTop:30}},React.createElement(_.Z,null,(0,l.__)("Consents by group")),React.createElement(f.A,null)))):React.createElement(s.Z,{description:(0,l.__)("Please provide a date range!")})):React.createElement(React.Fragment,null,React.createElement(y.B,{title:(0,l.__)("Want to see detailed statistics about the consents of your visitors?"),inContainer:"#rcb-stats-modal-mount",testDrive:!0,feature:"stats",description:(0,l.__)("You can get several statistics about how your users use the cookie banner. This helps you to calculate the total number of users who do not want to be tracked, for example, by extrapolating data from Google Analytics.")}),React.createElement("div",{id:"rcb-stats-modal-mount",className:"rcb-modal-mount",style:{height:800,backgroundImage:"url('".concat(r,"statistics-blured.png')")}}))})),T=a(1853),w=a(1857),Z=a(9943),C=a(6107),S=a(6625),I=a(8008),N=a(6795),x=a(4958),A=a(6158),P=a(4346),O=a(1320),D=(0,r.Pi)((function(e){e.record,e.visible,e.onClose})),F=a(9591),Y=a(2835),G=a(4097),B=(0,r.Pi)((function(e){var t=e.record,a=t.revision.data.options,n=t.revision_independent.data,r=n.options,o=n.countryBypassUserCountry,c=(0,G.Z)(t,["revision","revision_independent"]),s=(0,R.m)().optionStore.others,d=s.pageByIdUrl,m=s.iso3166OneAlpha2,h=(0,Y.Z)((0,Y.Z)((0,Y.Z)({},r),a),o?{countryBypassUserCountry:o}:{});return React.createElement(i.Z,null,React.createElement(u.Z,{span:24},React.createElement(_.Z,null,(0,l.__)("Settings at the time of consent"))),Object.keys(h).map((function(e){var t,a,n,r=e,o=h[e],s=!0;switch(e){case"SETTING_TCF_SCOPE_OF_CONSENT":case"SETTING_TCF":return null;case"SETTING_TCF_PUBLISHER_CC":if(!h.SETTING_TCF)return null;r=(0,l.__)("Country of the website operator"),o=m[o]||o;break;case"SETTING_BANNER_ACTIVE":r=(0,l.__)("Cookie Banner/Dialog"),o=o?(0,l.__)("Active"):(0,l.__)("Deactivated");break;case"SETTING_BLOCKER_ACTIVE":r=(0,l.__)("Content Blocker"),o=o?(0,l.__)("Active"):(0,l.__)("Deactivated");break;case"SETTING_REFRESH_SITE_AFTER_CONSENT":r=(0,l.__)("Refresh site after consent"),o=o?(0,l.__)("Refresh"):(0,l.__)("Do not refresh");break;case"SETTING_IMPRINT_ID":r=(0,l.__)("Imprint page"),o=o?React.createElement("a",{href:c.url_imprint,target:"_blank",rel:"noopener noreferrer"},(0,l.__)("Opened site")," (ID ",o,")"):(0,l.__)("Not defined");break;case"SETTING_PRIVACY_POLICY_ID":r=(0,l.__)("Privacy policy page"),o=o?React.createElement("a",{href:c.url_privacy_policy,target:"_blank",rel:"noopener noreferrer"},(0,l.__)("Opened site")," (ID ",o,")"):(0,l.__)("Not defined");break;case"SETTING_SET_COOKIES_VIA_MANAGER":r=(0,l.__)("Set cookies after consent via"),o="googleTagManager"===o?"Google Tag Manager":"matomoTagManager"===o?"Matomo Tag Manager":(0,l.__)("Disabled");break;case"SETTING_ACCEPT_ALL_FOR_BOTS":r=(0,l.__)("Automatically accept all services for bots"),o=o?(0,l.__)("Enabled"):(0,l.__)("Disabled");break;case"SETTING_RESPECT_DO_NOT_TRACK":r=(0,l.__)('Respect "Do Not Track"'),o=o?(0,l.__)("Enabled"):(0,l.__)("Disabled");break;case"SETTING_COOKIE_DURATION":r=(0,l.__)("Duration of cookie consent"),o="".concat(o," ").concat((0,l.__)("days"));break;case"SETTING_SAVE_IP":r=(0,l.__)("Save IP address on consent"),o=o?(0,l.__)("Enabled"):(0,l.__)("Disabled");break;case"SETTING_EPRIVACY_USA":r=(0,l.__)("Consent for data processing in the USA"),o=o?(0,l.__)("Enabled"):(0,l.__)("Disabled");break;case"SETTING_AGE_NOTICE":r=(0,l.__)("Age notice for consent"),o=o?(0,l.__)("Enabled"):(0,l.__)("Disabled");break;case"SETTING_CONSENT_FORWARDING":r=(0,l.__)("Consent Forwarding"),o=o?(0,l.__)("Enabled"):(0,l.__)("Disabled");break;case"SETTING_FORWARD_TO":r=(0,l.__)("Forward To"),o&&(o=o.split("|").filter(Boolean).map((function(e){return React.createElement("a",{key:e,href:e,target:"_blank",rel:"noopener noreferrer",style:{marginRight:5}},(0,l.__)("Open endpoint"))}))),o=null!==(t=o)&&void 0!==t&&t.length?o:(0,l.__)("Not defined");break;case"SETTING_CROSS_DOMAINS":r=(0,l.__)("Additional cross domain endpoints"),o&&(o=o.split("\n").filter(Boolean).map((function(e){return React.createElement("a",{key:e,href:e,target:"_blank",rel:"noopener noreferrer",style:{marginRight:5}},(0,l.__)("Open endpoint"))}))),o=null!==(a=o)&&void 0!==a&&a.length?o:(0,l.__)("Not defined");break;case"SETTING_HIDE_PAGE_IDS":r=(0,l.__)("Hide on additional pages"),o&&(o=o.split(",").filter(Boolean).map((function(e){return React.createElement("a",{key:e,href:"".concat(d,"=").concat(e),target:"_blank",rel:"noopener noreferrer",style:{marginRight:5}},(0,l.__)("Opened site")," (ID ",e,")")}))),o=null!==(n=o)&&void 0!==n&&n.length?o:(0,l.__)("Not defined");break;case"SETTING_COUNTRY_BYPASS_ACTIVE":r=(0,l.__)("Geo-restriction"),o=o?(0,l.__)("Enabled"):(0,l.__)("Disabled");break;case"SETTING_COUNTRY_BYPASS_COUNTRIES":if(!h.SETTING_COUNTRY_BYPASS_ACTIVE)return null;if(r=(0,l.__)("Only show banner users from these countries"),o){var i=o.split(",").map((function(e){return m[e]}));o=React.createElement(w.Z,{title:i.join(", ")},React.createElement(C.Z,null,(0,l.__)("%d countries",i.length)))}else o=(0,l.__)("Not defined");break;case"SETTING_COUNTRY_BYPASS_TYPE":if(!h.SETTING_COUNTRY_BYPASS_ACTIVE)return null;r=(0,l.__)("Implicit consent for users from third countries"),o="all"===o?(0,l.__)("Accept all"):(0,l.__)("Accept only essentials");break;case"countryBypassUserCountry":if(!h.SETTING_COUNTRY_BYPASS_ACTIVE)return null;r=(0,l.__)("Country of the website visitor"),o=m[o]||o;break;default:s=!1}return React.createElement(u.Z,{key:e,md:12,sm:24},React.createElement("div",{style:{padding:"0 10px"}},s?React.createElement("strong",null,r):React.createElement("code",null,r),": ",o))})))})),L=(0,r.Pi)((function(e){e.record})),U=a(8042),M=(0,r.Pi)((function(e){var t=e.record,a=e.onPreview,n=(0,R.m)().optionStore.others.isPro;return t.custom_bypass?React.createElement(React.Fragment,null,React.createElement(_.Z,null,(0,l.__)("Bypassed banner")),React.createElement("p",{className:"description"},(0,l._i)((0,l.__)("There is no preview for this consent, as it was given implicitly by {{strong}}%s bypass{{/strong}}.",t.custom_bypass_readable),{strong:React.createElement("strong",null)}))):t.blocker>0?React.createElement(React.Fragment,null,React.createElement(_.Z,null,(0,l.__)("Content Blocker like at the time of consent")),React.createElement("p",{className:"description"},(0,l.__)("The consent to the service was given via a content blocker. Below you can see how the content blocker looked like when the user consented.")),n?React.createElement("div",{className:"rcb-transparent-bg"},React.createElement(L,{record:t})):React.createElement(U.g,{title:(0,l.__)("You want to see what the visitor has seen?"),tagText:(0,l.__)("Unlock preview"),testDrive:!0,feature:"consent-preview-blocker",assetName:(0,l.__)("pro-modal/consent-preview-blocker.png"),description:(0,l.__)("We generate the content blocker that your visitor has seen from all settings, design preferences and services. You can see exactly how his or her consent was obtained and track clicks on buttons.")})):t.forwarded>0?React.createElement(React.Fragment,null,React.createElement(_.Z,null,(0,l.__)("Forwarded consent")),React.createElement("p",{className:"description"},(0,l._i)((0,l.__)("There is no preview for this consent, as it was given implicitly by forwarding the consent. The user has given his/her consent via {{a}}%s{{/a}}, and this consent has been forwarded automatically.",t.viewed_page),{a:React.createElement("a",{href:t.viewed_page,rel:"noopener noreferrer",target:"_blank"})}))):React.createElement(React.Fragment,null,React.createElement(_.Z,null,(0,l.__)("Cookie banner like at the time of consent")),React.createElement("p",{className:"description"},(0,l.__)("Use the button below to see what the cookie banner looked like at the time of user consent. The services/groups selected there also look like the ones the user has seen. Ein rot umrahmter Button zeigt, auf welchen Button der Nutzer zum Zeitpunkt der Einwilligung geklickt hat.")),n?React.createElement("button",{className:"button-primary button-large",onClick:function(){a(t)}},(0,l.__)("Open banner")):React.createElement(U.g,{title:(0,l.__)("You want to see what the visitor has seen?"),tagText:(0,l.__)("Unlock preview"),testDrive:!0,feature:"consent-preview-banner",assetName:(0,l.__)("pro-modal/consent-preview-banner.png"),description:(0,l.__)("We generate the cookie banner that your visitor has seen from all settings, design preferences and services. You can see exactly how his or her consent was obtained and track clicks on buttons.")}))})),W=a(8782),V=a(6042),K=(0,r.Pi)((function(e){var t=e.record;return React.createElement(React.Fragment,null,React.createElement(_.Z,null,(0,l.__)("Export consent")),React.createElement("p",{className:"description"},(0,l.__)("Use the button below to export all consents in a machine readable form.")),React.createElement("button",{className:"button button-large",onClick:function(){(0,V.v)(JSON.stringify(t.export)),W.ZP.success((0,l.__)("Successfully copied to the clipboard!"))}},(0,l.__)("Export to clipboard")))})),z=(0,r.Pi)((function(e){var t=e.record,a=e.onPreview,n=(0,h.useState)(!1),r=(0,I.Z)(n,2),o=r[0],c=r[1],s=t.viewed_page,_=t.context,d=t.viewport_width,m=t.viewport_height;return(0,h.useEffect)((function(){t.fetchRevisions().then((function(){c(!0)}))}),[t]),o?React.createElement("div",null,React.createElement("div",null,React.createElement("strong",null,(0,l.__)("Viewport (px)"),":")," ",d," x ",m),React.createElement("div",null,React.createElement("strong",null,(0,l.__)("Viewed page"),":")," ",React.createElement("a",{href:s,rel:"noopener noreferrer",target:"_blank"},s)),!!_&&React.createElement("div",null,React.createElement("strong",null,(0,l.__)("Context"),":")," ",React.createElement("code",null,_)),React.createElement(B,{record:t}),React.createElement(i.Z,null,React.createElement(u.Z,{md:12,sm:24},React.createElement("div",{style:{padding:10}},React.createElement(M,{record:t,onPreview:a}))),React.createElement(u.Z,{md:12,sm:24},React.createElement("div",{style:{padding:10}},React.createElement(K,{record:t}))))):React.createElement(F.Z,{spinning:!0})})),H=a(3612),q=N.Z.Column,j=(0,r.Pi)((function(){var e=(0,R.m)(),t=e.consentStore,a=e.optionStore.saveIp,n=t.busyConsent,r=t.pageCollection,o=t.perPage,c=t.count,i=(0,h.useState)(),u=(0,I.Z)(i,2),_=u[0],d=u[1],m=(0,h.useState)(!0),p=(0,I.Z)(m,2),E=p[0],f=p[1];(0,h.useEffect)((function(){t.fetchAll(1)}),[]);var g=(0,H.v)("list-of-consents"),y=(0,h.useCallback)((function(){return{filterDropdown:function(e){var t=e.setSelectedKeys,a=e.selectedKeys,n=e.confirm,r=e.clearFilters;return React.createElement("div",{style:{padding:8}},React.createElement(S.Z,{autoFocus:!0,value:a[0],onChange:function(e){return t(e.target.value?[e.target.value]:[])},style:{width:188,marginBottom:8,display:"block"}}),React.createElement("button",{className:"button-primary right",style:{marginLeft:10},onClick:function(){return n()}},React.createElement(x.Z,null)," ",(0,l.__)("Search")),React.createElement("button",{className:"button right",onClick:r},(0,l.__)("Reset")),React.createElement("div",{className:"clear"}))},filterIcon:function(e){return React.createElement(x.Z,{style:{color:e?"#1890ff":void 0}})}}}),[]);return React.createElement(React.Fragment,null,_&&React.createElement(D,{record:_,visible:E,onClose:function(){return f(!1)}}),React.createElement(N.Z,{pagination:{pageSize:o,total:c,showTotal:function(e,t){return"".concat(t[0],"-").concat(t[1]," / ").concat(e)},showSizeChanger:!1},locale:{emptyText:React.createElement(s.Z,{description:(0,l.__)("No data")})},loading:n,dataSource:Array.from(r.values()),rowKey:"id",size:"small",bordered:!0,expandable:{expandedRowRender:function(e){return React.createElement("div",{style:{background:"white",padding:10}},React.createElement(z,{record:e,onPreview:function(e){d(e),f(!0)}}))},rowExpandable:function(){return!0},expandIcon:function(e){var t=e.expanded,a=e.onExpand,n=e.record;return React.createElement(C.Z,{style:{cursor:"pointer"},onClick:function(e){return a(n,e)},icon:t?React.createElement(A.Z,null):React.createElement(P.Z,null)},t?(0,l.__)("Less"):(0,l.__)("More"))}},onChange:function(e,a){var n,r,o=e.current,c=(null===(n=a.uuid)||void 0===n?void 0:n[0])||"",l=(null===(r=a.ip)||void 0===r?void 0:r[0])||"";t.fetchAll(o,{uuid:c,ip:l})},footer:function(){return React.createElement(Z.Z,{overlayStyle:{maxWidth:300},arrowPointAtCenter:!0,title:(0,l._i)((0,l.__)("Are you sure you want to delete all consents? You should only do this if it is absolutely necessary. If you really want to continue, make sure you have {{a}}exported{{/a}} all the consents before for legal reasons."),{a:React.createElement("a",{href:"#/import"})}),okText:(0,l.__)("I am sure!"),cancelText:(0,l.__)("Cancel"),placement:"topRight",onConfirm:function(){return window.confirm((0,l.__)("Just to be safe, do you really want to delete all consents?"))&&t.deleteAll()}},React.createElement("button",{className:"button-link"},(0,l.__)("Delete all consents")))}},React.createElement(q,{title:(0,l.__)("Time of consent"),dataIndex:"created",key:"created",render:function(e,t){var a=t.created;return React.createElement(React.Fragment,null,new Date(a).toLocaleString(document.documentElement.lang)," ",t.dnt&&React.createElement(w.Z,{title:(0,l.__)("This consent was given automatically because the browser sent a 'Do Not Track' header. Accordingly, only essential services have been consented to.")},React.createElement(C.Z,{color:"magenta"},(0,l.__)("Do Not Track"))),t.blocker>0&&React.createElement(w.Z,{title:(0,l.__)("This consent has been given in a content blocker.")},React.createElement(C.Z,{color:"cyan"},(0,l.__)("Content Blocker"))),t.forwarded>0&&React.createElement(w.Z,{title:(0,l.__)("This consent was implicitly given by Consent Forwarding.")},React.createElement(C.Z,{color:"green"},t.forwarded_blocker?(0,l.__)("Forwarded through Content Blocker"):(0,l.__)("Forwarded"))),t.custom_bypass&&React.createElement(w.Z,{title:(0,l.__)("This consent was implicitly given by a configured bypass.")},React.createElement(C.Z,{color:"magenta"},t.custom_bypass_readable)))}}),React.createElement(q,(0,T.Z)({title:React.createElement(w.Z,{title:(0,l.__)("Pseudonymous unique user identification (truncated)")},React.createElement("span",null,(0,l.__)("UUID")," ",React.createElement(O.Z,{style:{color:"#9a9a9a"}}))),dataIndex:"uuid",key:"uuid",render:function(e,t){return React.createElement(w.Z,{title:t.uuid},React.createElement("code",null,t.uuid.substr(0,18)))}},y())),a&&React.createElement(q,(0,T.Z)({title:React.createElement(w.Z,{title:(0,l.__)("If you have allowed to log IP addresses, you can view them here. Otherwise you will see a salted hash of the IP address (truncated).")},React.createElement("span",null,(0,l.__)("IP")," ",React.createElement(O.Z,{style:{color:"#9a9a9a"}}))),dataIndex:"ip",key:"ip",render:function(e,t){return t.ipv4?React.createElement("code",null,t.ipv4):t.ipv6?React.createElement("code",null,t.ipv6):t.ipv4_hash?React.createElement(w.Z,{title:t.ipv4_hash},React.createElement("code",null,t.ipv4_hash.slice(0,8))):React.createElement(w.Z,{title:t.ipv6_hash},React.createElement("code",null,t.ipv4_hash.slice(0,8)))}},y())),React.createElement(q,{title:(0,l.__)("Accepted services"),dataIndex:"decision",key:"decision",render:function(e,t){return t.decision_labels.map((function(e){return React.createElement(C.Z,{key:e},e)}))}})),React.createElement("p",{className:"description",style:{maxWidth:800,margin:"30px auto 0",textAlign:"center"}},g))})),J=a(3735),Q=a(8920),X=a(6315),$={labelCol:{span:24},wrapperCol:{span:24}},ee=function(e){var t=e.type,a=(0,h.useState)(""),n=(0,I.Z)(a,2),r=n[0],o=n[1],c={tag:"a",id:"",text:"history"===t?(0,l.__)("Privacy settings history"):"revoke"===t?(0,l.__)("Revoke consents"):(0,l.__)("Change privacy settings"),successmessage:"revoke"===t?(0,l.__)("You have successfully revoked the consent. The page will be reloaded now."):""},s=X.Z.useForm(),i=(0,I.Z)(s,1)[0],u=(0,h.useCallback)((function(e,a){for(var n=[],r=0,c=Object.keys(a);r<c.length;r++){var l=c[r],s=a[l];s&&n.push("".concat(l,'="').concat(s.replace('"','\\"'),'"'))}o('[rcb-consent type="'.concat(t,'" ').concat(n.join(" "),"]"))}),[o]);(0,h.useEffect)((function(){u(c,c)}),[]);var d=(0,h.useCallback)((function(){(0,V.v)(r),W.ZP.success((0,l.__)("Successfully copied shortcode to clipboard!"))}),[r]);return React.createElement(X.Z,(0,T.Z)({name:"link-shortcode-".concat(t),form:i},$,{initialValues:c,onValuesChange:u}),React.createElement(X.Z.Item,{label:(0,l.__)("Appearance")},React.createElement(X.Z.Item,{name:"tag",noStyle:!0},React.createElement(Q.ZP.Group,null,React.createElement(Q.ZP.Button,{value:"a"},(0,l.__)("Link")),React.createElement(Q.ZP.Button,{value:"button"},(0,l.__)("Button")))),React.createElement("p",{className:"description"},(0,l.__)("It is recommended to use a simple link in your footer and privacy policy instead of a button to avoid visual misunderstandings."))),React.createElement(X.Z.Item,{label:(0,l.__)("HTML ID")},React.createElement(X.Z.Item,{name:"id",noStyle:!0},React.createElement(S.Z,null)),React.createElement("p",{className:"description"},(0,l.__)("If you want to apply a custom style to the link/button, the shortcode output should be tagged with an ID attribute."))),React.createElement(X.Z.Item,{label:(0,l.__)("Text")},React.createElement(X.Z.Item,{name:"text",noStyle:!0},React.createElement(S.Z,null)),React.createElement("p",{className:"description"},(0,l.__)("The user must be able to clearly understand the behaviour of the link/button from the name."))),"revoke"===t&&React.createElement(X.Z.Item,{label:(0,l.__)("Success message")},React.createElement(X.Z.Item,{name:"successmessage",noStyle:!0},React.createElement(S.Z.TextArea,{autoSize:!0})),React.createElement("p",{className:"description"},(0,l.__)("After the consent is revoked, the page will be reloaded. Let the user know what happened with a success message."))),React.createElement(X.Z.Item,null,React.createElement(X.Z.Item,{noStyle:!0},React.createElement(_.Z,{style:{marginTop:0}},(0,l.__)("Result")),React.createElement(S.Z.TextArea,{value:r,readOnly:!0,autoSize:!0})),React.createElement("p",{className:"description"},(0,l.__)("Copy the generated shortcode and paste it into your privacy policy.")),React.createElement("button",{className:"button alignright",onClick:d},(0,l.__)("Copy to clipboard"))))},te=(0,r.Pi)((function(){var e=(0,H.v)("shortcodes");return React.createElement(React.Fragment,null,React.createElement(i.Z,null,React.createElement(u.Z,{xl:8,sm:12,xs:24},React.createElement(J.Z,{style:{margin:5},title:(0,l.__)("Change privacy settings")},React.createElement(ee,{type:"change"}))),React.createElement(u.Z,{xl:8,sm:12,xs:24},React.createElement(J.Z,{style:{margin:5},title:(0,l.__)("Privacy settings history")},React.createElement(ee,{type:"history"}))),React.createElement(u.Z,{xl:8,sm:12,xs:24},React.createElement(J.Z,{style:{margin:5},title:(0,l.__)("Revoke consents")},React.createElement(ee,{type:"revoke"})))),React.createElement("span",{className:"description",style:{display:"block",maxWidth:800,margin:"30px auto 0",textAlign:"center"}},e,React.createElement("hr",{style:{marginTop:15}}),React.createElement("h4",null,(0,l.__)("Other useful shortcodes:")),React.createElement("code",null,'[rcb-consent-print-uuid fallback="',(0,l.__)("No consent given, yet"),'"]'),":"," ",(0,l.__)("Output the unique identification number of the current user (UUID). This can be useful, for example, if you want to offer a form for data deletion.")))})),ae=a(8439),ne=n.Z.TabPane,re=(0,r.Pi)((function(){var e=(0,o.useRouteMatch)(),t=e.params,a=e.path,r=t.tab||"",s=(0,o.useHistory)();return React.createElement(o.Switch,null,React.createElement(React.Fragment,null,React.createElement(n.Z,{defaultActiveKey:r,onChange:function(e){s.push(a.replace(":tab?",e))}},React.createElement(ne,{tab:(0,l.__)("Statistics"),key:""},React.createElement(c.f,{maxWidth:"fixed"},React.createElement(k,null))),React.createElement(ne,{tab:(0,l.__)("List of consents"),key:"list"},React.createElement(ae.K,{identifier:"list-of-consents"}),React.createElement(j,null)),React.createElement(ne,{tab:(0,l.__)("Legal shortcodes"),key:"legal"},React.createElement(ae.K,{identifier:"shortcodes"}),React.createElement(te,null)))))}))},2982:function(e,t,a){"use strict";a.d(t,{f:function(){return r}});var n=a(2835),r=function(e){var t=e.children,a=e.maxWidth,r=void 0===a?"auto":a,o=e.style,c=void 0===o?{}:o;return React.createElement("div",{className:"rcb-config-content",style:(0,n.Z)({maxWidth:"fixed"===r?1300:r},c)},t)}},8439:function(e,t,a){"use strict";a.d(t,{K:function(){return _}});var n=a(6069),r=a(8008),o=a(3804),c=a(3554),l=a(4799),s=a(5406),i=a(3612),u=a(4614),_=(0,c.Pi)((function(e){var t=e.identifier,a=(0,u.m)().optionStore,c=a.others.modalHints,_=(0,o.useState)(!1),d=(0,r.Z)(_,2),m=d[0],h=d[1];(0,o.useEffect)((function(){h(-1===c.indexOf(t))}),[c.length,t]);var p=(0,i.v)(t),E="string"==typeof p&&p.indexOf("?")>-1?p.split("?")[0]:"",f=E?"".concat(E,"?"):(0,l.__)("What you should definitely know!"),R="string"==typeof p&&"string"==typeof f&&E?p.replace(f,"").trim():p,g=(0,o.useCallback)((function(){a.setModalHintSeen(t)}),[t,a]);return React.createElement(n.Z,{visible:m,title:React.createElement("span",null,React.createElement(s.Z,{style:{color:"#1890ff"}})," ",f),closable:!1,onOk:g,okText:(0,l.__)("Okay, I got it"),cancelButtonProps:{style:{display:"none"}}},R)}))},5990:function(e,t,a){"use strict";a.d(t,{D:function(){return i}});var n=a(1853),r=a(6914),o=a(4799),c=a(2470),l=a.n(c),s=r.Z.RangePicker,i=function(e){var t=l().localeData();return React.createElement(s,(0,n.Z)({locale:{lang:{locale:l().locale(),placeholder:(0,o.__)("Select date"),rangePlaceholder:[(0,o.__)("Start date"),(0,o.__)("End date")],today:(0,o.__)("Today"),now:(0,o.__)("Now"),backToToday:(0,o.__)("Back to today"),ok:(0,o.__)("OK"),clear:(0,o.__)("Clear"),month:(0,o.__)("Month"),year:(0,o.__)("Year"),timeSelect:(0,o.__)("Select time"),dateSelect:(0,o.__)("Select date"),monthSelect:(0,o.__)("Choose a month"),yearSelect:(0,o.__)("Choose a year"),decadeSelect:(0,o.__)("Choose a decade"),yearFormat:"YYYY",dateFormat:t.longDateFormat("LL"),dayFormat:"D",dateTimeFormat:t.longDateFormat("LLL"),monthFormat:"MMMM",monthBeforeYear:!0,previousMonth:(0,o.__)("Previous month (PageUp)"),nextMonth:(0,o.__)("Next month (PageDown)"),previousYear:(0,o.__)("Last year (Control + left)"),nextYear:(0,o.__)("Next year (Control + right)"),previousDecade:(0,o.__)("Last decade"),nextDecade:(0,o.__)("Next decade"),previousCentury:(0,o.__)("Last century"),nextCentury:(0,o.__)("Next century")},timePickerLocale:{placeholder:(0,o.__)("Select time")},dateFormat:t.longDateFormat("LL"),dateTimeFormat:t.longDateFormat("LLL"),weekFormat:"YYYY-wo",monthFormat:"YYYY-MM"}},e))}},8042:function(e,t,a){"use strict";a.d(t,{g:function(){return o}});var n=a(4097),r=a(4522),o=function(e){e.children;var t=e.wrapperAttributes,a=void 0===t?{}:t,o=(0,n.Z)(e,["children","wrapperAttributes"]),c=(0,r.t)(o),l=c.modal,s=c.tag;return React.createElement(React.Fragment,null,l,React.createElement("span",a,s))}},3612:function(e,t,a){"use strict";a.d(t,{v:function(){return o}});var n=a(4614),r=a(4799);function o(e){var t=(0,n.m)().optionStore.tcf;switch(e){case"cookie":return(0,r.__)("What are services? Services can be external applications such as Google Analytics or WordPress plugins or themes that process personal data (e.g. IP address) and/or set cookies. Cookies (and similar technologies) are small text files that are stored on the device of visitors to your website. You can store information about the visitor in cookies, such as the language in which the website is to be made available to them, or unique advertising IDs to display personalized advertising. You, as the site owner, must ensure that cookies are only placed on your visitors' devices and personal data are only processed if they have given their explicit consent. Unless you have a legitimate interest in the legal sense to do so even without consent. You can define here all the services you use and their cookies with their legal and technical information.");case"blocker":return(0,r.__)("What is a content blocker? Imagine a user of your website does not accept all services. At the same time, you have integrated e. g. a YouTube video that would set cookies that the visitor has not agreed to. According to the ePrivacy Directive, this must not happen. Content blockers automatically replace iframes, script and link tags like YouTube videos for such users and offer the user to watch the video if he or she consents to load YouTube videos.");case"list-of-consents":return(0,r._i)((0,r.__)("Consents are automatically documented in order to be able to prove compliance with the legal requirements according to {{a}}Art. 5 GDPR{{/a}} and, in case of dispute, to prove how the consent was obtained."),{a:React.createElement("a",{href:"https://gdpr-info.eu/art-5-gdpr/",target:"_blank",rel:"noreferrer"})});case"shortcodes":return(0,r._i)((0,r.__)("To comply with the ePrivacy Directive, you must provide links in your footer and/or privacy policy to view the history of consents and to change and revoke the consent."),{strong:React.createElement("strong",null)})+(t?" ".concat((0,r.__)("To meet the requirements of the TCF standard, the shortcodes should be placed near the link to the privacy policy.")):"");case"tcf-vendor":return(0,r._i)((0,r.__)("What is a TCF vendor? According to the IAB Europe Transparency and Consent Framework (TCF), any service (e.g. Google for Google Ads) that wants to use consents according to the TCF standard must register as a vendor in the {{a}}Global Vendor List (GVL){{/a}}. All TCF vendors specify for which purposes they need consent to process data and set cookies and which features they can offer with these consents. They also provide a link to their privacy policy for further information. You, as a website operator, must obtain consent in your cookie banner for all vendors you work with. You can limit the requested purposes of vendors to keep consents as privacy-friendly as possible."),{a:React.createElement("a",{href:"https://iabeurope.eu/vendor-list-tcf-v2-0/",target:"_blank",rel:"noreferrer"})});default:return""}}},6042:function(e,t,a){"use strict";function n(e){var t=document.createElement("textarea");t.innerText=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()}a.d(t,{v:function(){return n}})}}]);
//# sourceMappingURL=chunk-config-tab-consent.lite.js.map?ver=6a38eea6b9dc3718b321