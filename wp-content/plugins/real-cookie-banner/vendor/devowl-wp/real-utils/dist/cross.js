!function(){"use strict";var t={n:function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,{a:i}),i},d:function(e,i){for(var n in i)t.o(i,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:i[n]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}},e=jQuery,i=t.n(e);function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,i){return e&&o(t.prototype,e),i&&o(t,i),t}var r=devowlWp_utils,c=function(){return window[r.BaseOptions.getPureSlug({NODE_ENV:"production",env:"production",rootSlug:"devowl-wp",slug:"real-utils"},!0)].others},l=function(){function t(){n(this,t),this.requestMemo=void 0,this.localizationMemo=void 0}return a(t,[{key:"request",get:function(){return this.requestMemo?this.requestMemo:this.requestMemo=(0,r.createRequestFactory)(window[r.BaseOptions.getPureSlug({NODE_ENV:"production",env:"production",rootSlug:"devowl-wp",slug:"real-utils"},!0)])}},{key:"localization",get:function(){return this.localizationMemo?this.localizationMemo:this.localizationMemo=(0,r.createLocalizationFactory)("".concat("devowl-wp","-").concat("real-utils"))}}],[{key:"get",get:function(){return t.me?t.me:t.me=new t}}]),t}();l.me=void 0;var s=function(){var t;return(t=l.get.localization).__.apply(t,arguments)},u={path:"/cross/:slug/:action/dismiss",method:r.RouteHttpVerb.DELETE},p="crossSellingPointer",d=function(){function t(e,i,o,a){n(this,t),this.slug=void 0,this.action=void 0,this.position=void 0,this.$handler=void 0,this.slug=i,this.action=o,this.position=a,this.$handler=e,this.init()}return a(t,[{key:"close",value:function(t,e){t.preventDefault();var i=this.$handler.pointer("widget").find('input[type="checkbox"]').is(":checked");if(this.$handler.pointer("close"),this.$handler.pointer("destroy"),e){var n=this.getAction().link;window.open(n,"_blank")}!function(){var t;(t=l.get.request).request.apply(t,arguments)}({location:u,params:{slug:this.slug,action:this.action,force:i}})}},{key:"buttons",value:function(){var t=this,e=i()('<a class="button" href="#">'.concat(s("Not now"),"</a>")).click((function(e){t.close(e,!1)})),n=i()('<a class="button button-primary" href="#">'.concat(s("Learn more!"),"</a>")).click((function(e){t.close(e,!0)}));return i()('<div class="real-utils-pointer-buttons" />').append(n,e)}},{key:"getAction",value:function(){var t;return null===(t=c().cross)||void 0===t?void 0:t[this.slug][this.action]}},{key:"init",value:function(){var t=this,e=this.position,i=this.getAction(),n=i.title,o=i.description,a=i.image,r='<label><input type="checkbox" /> '.concat(s("Never show this popup again"),"</label>");this.$handler.pointer({pointerClass:"wp-pointer real-utils-cross-pointer",content:"<h3>".concat(n,'</h3><p><img src="').concat(a,'" />').concat(o).concat(r,"</p>"),buttons:this.buttons.bind(this),position:e}).pointer("open").pointer("widget").find("img").get(0).onload=function(){return t.$handler.pointer("reposition")}}}],[{key:"waitForVisibleElement",value:function(e,n,o,a){if(!this.isActionAvailable(n,o))return!1;var r=i()(e);return r.length&&!r.data(p)&&(r.data(p,!0),new t(r,n,o,a)),r.length>0}},{key:"isActionAvailable",value:function(t,e){var i,n;return!(null===(i=c().cross)||void 0===i||null===(n=i[t])||void 0===n||!n[e])}}]),t}(),h="real-media-library",m="real-category-library",f="real-physical-media",b=function(){function t(){n(this,t)}return a(t,null,[{key:"onChange",value:function(){new d(i()(this),m,"assign"),i()(t.SELECTOR).off("change",t.onChange)}},{key:"bind",value:function(){d.isActionAvailable(m,"assign")&&i()(this.SELECTOR).one("change",this.onChange)}}]),t}();b.SELECTOR='body.wp-admin.post-php:not(.post-type-attachment) #categorychecklist input[type="checkbox"]';var v=function(){function t(){n(this,t)}return a(t,null,[{key:"onClick",value:function(e){var n=i()(this).attr("href");return new d(i()(this),m,"pagination"),i()(this).pointer("widget").find(".button").click((function(){setTimeout((function(){return window.open(n,"_self")}),1e3)})),i()(t.SELECTOR).off("click",t.onClick),e.preventDefault(),!1}},{key:"bind",value:function(){d.isActionAvailable(m,"pagination")&&i()(this.SELECTOR).one("click",this.onClick)}}]),t}();v.SELECTOR="body.wp-admin.edit-php:not(.post-type-attachment) .tablenav-pages .pagination-links a",i()(document).ready((function(){var t;setTimeout((function t(){var e=!1;!e&&(e=d.waitForVisibleElement("body.wp-admin.upload-php .attachment-info > .details:visible, body.wp-admin.post-php.post-type-attachment #post-body-content #titlewrap:visible",h,"attachment-details")),!e&&(e=d.waitForVisibleElement("body.wp-admin.plugins-php #wpbody-content > div.wrap > h1:first","real-cookie-banner","gdpr-compliant")),!e&&(e=d.waitForVisibleElement('body > div > .media-modal.wp-core-ui .media-frame-router button[role="tab"]:eq(1).active',h,"insert-dialog")),!e&&(e=d.waitForVisibleElement("body.wp-admin .editor-post-taxonomies__hierarchical-terms-list:visible",m,"assign","bottom")),!e&&(e=d.waitForVisibleElement("body.wp-admin.upload-php #wpbody-content .upload-ui .button-hero:visible, body.wp-admin.media-new-php #media-items .media-item:first:visible",f,"upload")),!e&&setTimeout(t,1e3)}),1e3),i()("select#parent").length&&d.isActionAvailable(m,"add-category")&&i()("body.wp-admin.edit-tags-php:not(.woocommerce-page,.post-type-attachment) form#addtag #submit").one("click",(function(){new d(i()(this),m,"add-category","bottom")})),i()("select#parent").length&&d.isActionAvailable(m,"add-wc-category")&&i()("body.wp-admin.edit-tags-php.woocommerce-page form#addtag #submit").one("click",(function(){new d(i()(this),m,"add-wc-category","bottom")})),d.isActionAvailable(f,"move")&&(null===(t=window.rml)||void 0===t||t.hooks.register("attachment/move/finished",(function(t,e){new d(i()('.rml-container:visible li[data-li-id="'.concat(e,'"]')),f,"move")}))),b.bind(),v.bind()}))}();
//# sourceMappingURL=cross.js.map