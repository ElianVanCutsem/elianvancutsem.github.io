(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3],{263:function(t,e,r){var content=r(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("5f352924",content,!0,{sourceMap:!1})},266:function(t,e,r){"use strict";r.r(e);r(67);var n=r(18),o=r(19),c=r(29),l=r(30),f=r(14),d=r(8),h=(r(26),r(11));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var v=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},w=r(262),y=function(t){Object(c.a)(r,t);var e=m(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).likes=997,t.tweetLink="https://twitter.com/intent/tweet?text=Just read an article by @vancutsemelian. https://elian.codes"+t.$nuxt.$route.path,t}return Object(o.a)(r,[{key:"addLike",value:function(){this.likes=this.likes+1}},{key:"formatedLikes",value:function(){return this.likes<1e3?w(this.likes).format("0 a"):w(this.likes).format("0.0 a")}}]),r}(h.Vue);v([Object(h.Watch)("likes")],y.prototype,"formatedLikes",null);var x=y=v([h.Component],y),k=r(12),component=Object(k.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"blog-footer"},[r("a",{staticClass:"blog-action",attrs:{href:"/blog.xml"}},[r("svg",{attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"}})])]),t._v(" "),r("a",{staticClass:"blog-action",attrs:{href:this.tweetLink}},[r("svg",{attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"}})])]),t._v(" "),r("script",{attrs:{async:"",src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}})])}),[],!1,null,null,null);e.default=component.exports},267:function(t,e,r){"use strict";r(263)},268:function(t,e,r){var n=r(44)(!1);n.push([t.i,".blogpost-enter-active[data-v-430fcbb7],.blogpost-leave-active[data-v-430fcbb7]{transition:opacity .5s}.blogpost-enter[data-v-430fcbb7],.blogpost-leave-active[data-v-430fcbb7]{opacity:0}",""]),t.exports=n},293:function(t,e,r){"use strict";r.r(e);var n=r(4),o=(r(35),r(54),r(43),r(266)),c={components:{sidebar:r(96).default,ArticleFooter:o.default},name:"Article",data:function(){return{articles:[]}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("blog",n.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()},layout:"blog",fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nuxt.$content("blog").sortBy("createdAt","desc").fetch();case 2:t.articles=e.sent;case 3:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.article.title,meta:[{hid:"description",name:"description",content:this.article.description},{hid:"og:locale",property:"og:locale",content:"en_US"},{hid:"og:type",property:"og:type",content:"website"},{hid:"og:title",property:"og:title",content:this.article.title},{hid:"og:description",property:"og:description",content:this.article.description},{hid:"twitter:title",name:"twitter:title",content:this.article.title},{hid:"twitter:card",name:"twitter:card",content:this.article.description},{hid:"twitter:image",name:"twitter:image",content:this.article.imgUrl},{hid:"twitter:description",name:"twitter:description",content:this.article.longDescription},{hid:"twitter:site",name:"twitter:site",content:"@vancutsemelian"}]}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},transition:{name:"blogpost",mode:"out-in"}},l=(r(267),r(12)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"flex-1 z-50 overflow-y-auto focus:outline-none",attrs:{tabindex:"0"}},[r("nav",{staticClass:"flex lg:hidden items-start py-3",attrs:{"aria-label":"Breadcrumb"}},[r("nuxt-link",{staticClass:"inline-flex items-center space-x-3 text-sm font-medium text-gray-900",attrs:{to:"/blog"},on:{click:function(e){return t.$emit("toggleNavBar",!0)}}},[r("svg",{staticClass:"-ml-2 h-5 w-5 text-gray-400 dark:text-gray-300",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})]),t._v(" "),r("span",{staticClass:"dark:text-gray-300"},[t._v("All articles")])])],1),t._v(" "),r("article",{staticClass:"mb-8"},[r("nuxt-content",{staticClass:"mx-auto prose max-w-96 prose-green",attrs:{document:t.article}}),t._v(" "),r("article-footer")],1)])}),[],!1,null,"430fcbb7",null);e.default=component.exports}}]);