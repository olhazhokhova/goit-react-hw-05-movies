"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[39],{3039:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var r=t(885),c={trending:"HomePage_trending__ndZmo",link:"HomePage_link__V6y8d"},a=t(2791),o=t(501),i=t(6871),u=t(4390),s=t(9645),f=t(184),l=function(){var n=(0,a.useState)([]),e=(0,r.Z)(n,2),t=e[0],l=e[1],d=(0,a.useState)(!1),h=(0,r.Z)(d,2),g=h[0],_=h[1],v=(0,i.TH)();return(0,a.useEffect)((function(){_(!0),(0,u.KS)().then((function(n){return l(n.results)})).finally((function(){_(!1)}))}),[]),(0,f.jsxs)("div",{className:c.trending,children:[(0,f.jsx)("h1",{children:"Trending today"}),g&&(0,f.jsx)(s.Z,{}),(0,f.jsx)("ul",{className:c.unstyled,children:t.map((function(n){var e=n.id,t=n.title,r=n.original_name;return(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"/movies/".concat(e),state:{from:v},className:c.link,children:t||r})},e)}))})]})}},9645:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(6373),c="Loader_loader__+lRPl",a=t(184),o=function(){return(0,a.jsx)("div",{className:c,children:(0,a.jsx)(r.g4,{heigth:"80",width:"80",color:"#3f51b5",secondaryColor:"lightGrey"})})}},4390:function(n,e,t){t.d(e,{KS:function(){return f},Mc:function(){return l},LI:function(){return d},uV:function(){return h},Hx:function(){return g}});var r=t(5861),c=t(7757),a=t.n(c),o=t(4569),i=t.n(o);i().defaults.baseURL="https://api.themoviedb.org/3/";var u="https://api.themoviedb.org/3/",s="adf034e2dfe8e0fada717e58b9449dc8";function f(){return fetch("".concat(u,"trending/all/day?api_key=").concat(s)).then((function(n){if(n.ok)return n.json()}))}function l(n){return fetch("".concat(u,"movie/").concat(n,"?api_key=").concat(s,"&language=en-US")).then((function(n){if(n.ok)return n.json()}))}var d=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("search/movie/?api_key=".concat(s,"&query=").concat(e,"&language=en-US&page=1"));case 2:return t=n.sent,console.log(t.data),n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function h(n){return fetch("".concat(u,"movie/").concat(n,"/credits?api_key=").concat(s,"&language=en-US")).then((function(n){if(n.ok)return n.json()}))}function g(n){return fetch("".concat(u,"movie/").concat(n,"/reviews?api_key=").concat(s,"&language=en-US")).then((function(n){if(n.ok)return n.json()}))}}}]);
//# sourceMappingURL=39.f2e7eec2.chunk.js.map