(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{288:function(e,t,c){"use strict";c.r(t);c(67);var o=c(18),n=c(19),r=c(29),l=c(30),h=c(14),f=c(8),d=(c(26),c(11));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var c,o=Object(h.a)(e);if(t){var n=Object(h.a)(this).constructor;c=Reflect.construct(o,arguments,n)}else c=o.apply(this,arguments);return Object(l.a)(this,c)}}var v=function(e,t,c,desc){var o,n=arguments.length,r=n<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,c):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,c,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(r=(n<3?o(r):n>3?o(t,c,r):o(t,c))||r);return n>3&&r&&Object.defineProperty(t,c,r),r},y=function(e){Object(r.a)(c,e);var t=m(c);function c(){var e;return Object(o.a)(this,c),(e=t.apply(this,arguments)).activeTheme="system",e.classes="",e}return Object(n.a)(c,[{key:"activateSystem",value:function(){localStorage.theme="system",window.matchMedia("(prefers-color-scheme: dark)").matches?this.activateDarkMode():this.activateLightMode()}},{key:"activateDarkMode",value:function(){localStorage.theme="dark",this.activeTheme="dark",document.documentElement.classList.add("dark"),this.postActivate()}},{key:"activateLightMode",value:function(){localStorage.theme="light",this.activeTheme="light",document.documentElement.classList.remove("dark"),this.postActivate()}},{key:"postActivate",value:function(){"system"===localStorage.theme?document.documentElement.classList.add("system"):document.documentElement.classList.remove("system")}},{key:"mounted",value:function(){void 0===localStorage.theme||"system"===localStorage.theme?this.activateSystem():"dark"===localStorage.theme?this.activateDarkMode():this.activateLightMode(),console.log("/"==this.$nuxt.$route.path),this.classes="/"==this.$nuxt.$route.path?"text-white":"text-green-500"}}]),c}(d.Vue);y=v([d.Component],y),t.default=y}}]);