"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[234],{234:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var c=t(885),i={},o=t(791),r=t(871),a=t(390),u=t(184),f=function(){var n=(0,o.useState)([]),e=(0,c.Z)(n,2),t=e[0],f=e[1],s=(0,o.useState)(!0),h=(0,c.Z)(s,2),l=h[0],d=h[1],v=(0,r.UO)().movieId;return(0,o.useEffect)((function(){d(!1),(0,a.Hx)(v).then((function(n){0===n.total_results&&d(!0),f(n.results)})).finally()}),[v]),l?(0,u.jsx)("div",{children:" This movie hasn't any review yet. "}):(0,u.jsx)("ul",{className:i.review,children:t.map((function(n){var e=n.id,t=n.author,c=n.content,o=n.updated_at;return(0,u.jsxs)("li",{className:i.item,children:[(0,u.jsxs)("h3",{className:i.name,children:["Author: ",t]}),(0,u.jsx)("p",{children:c}),(0,u.jsx)("p",{children:o})]},e)}))})}},390:function(n,e,t){t.d(e,{KS:function(){return o},Mc:function(){return r},LI:function(){return a},uV:function(){return u},Hx:function(){return f}});var c="https://api.themoviedb.org/3/",i="adf034e2dfe8e0fada717e58b9449dc8";function o(){return fetch("".concat(c,"trending/all/day?api_key=").concat(i)).then((function(n){if(n.ok)return n.json()}))}function r(n){return fetch("".concat(c,"movie/").concat(n,"?api_key=").concat(i,"&language=en-US")).then((function(n){if(n.ok)return n.json()}))}function a(n){return fetch("".concat(c,"search/movie/?api_key=").concat(i,"&query=").concat(n,"&language=en-US&page=1")).then((function(n){if(n.ok)return n.json()}))}function u(n){return fetch("".concat(c,"movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US")).then((function(n){if(n.ok)return n.json()}))}function f(n){return fetch("".concat(c,"movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US")).then((function(n){if(n.ok)return n.json()}))}}}]);
//# sourceMappingURL=234.5541d9df.chunk.js.map