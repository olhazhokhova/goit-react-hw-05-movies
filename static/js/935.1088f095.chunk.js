"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[935],{9645:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(6373),a="Loader_loader__+lRPl",c=t(184),o=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(r.g4,{heigth:"80",width:"80",color:"#3f51b5",secondaryColor:"lightGrey"})})}},2935:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(885),a=t(2791),c=t(501),o=t(6871),u="MoviesPage_form__Hzb4A",i="MoviesPage_input__h5lTQ",s="MoviesPage_button__HN2QC",l="MoviesPage_unstyled__iyR+l",f="MoviesPage_link__Kqtq6",h="MoviesPage_notFound__LX41k",d=t(4390),_=t(9645),g=t(184),v=function(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],v=n[1],m=(0,a.useState)(!1),p=(0,r.Z)(m,2),y=p[0],k=p[1],j=(0,a.useState)(!1),x=(0,r.Z)(j,2),b=x[0],S=x[1],q=(0,c.lr)(),w=(0,r.Z)(q,2),M=w[0],N=w[1],Z=(0,a.useState)(""),P=(0,r.Z)(Z,2),U=P[0],C=P[1],L=(0,o.TH)(),H=M.get("query");(0,a.useEffect)((function(){S(!1),H&&H.length>0&&(0,d.LI)(H).then((function(e){v(e.results),0===e.total_results&&S(!0)})).finally((function(){k(!1)}))}),[H]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("form",{className:u,onSubmit:function(e){e.preventDefault(),k(!0),N({query:e.currentTarget.elements.query.value}),C("")},children:[(0,g.jsx)("input",{type:"text",className:i,name:"query",value:U,onChange:function(e){C(e.currentTarget.value)}}),(0,g.jsx)("button",{className:s,disabled:0===U.length,children:"Search"})]}),y&&(0,g.jsx)(_.Z,{}),!y&&t.length>0&&(0,g.jsx)("ul",{className:l,children:t.map((function(e){var n=e.id,t=e.title,r=e.original_name;return(0,g.jsx)("li",{children:(0,g.jsx)(c.rU,{to:"/movies/".concat(n),state:{from:L},className:f,children:t||r})},n)}))}),!y&&b&&(0,g.jsxs)("div",{className:h,children:["Movies with query ",M.get("query")," not found"]})]})}},4390:function(e,n,t){t.d(n,{KS:function(){return l},Mc:function(){return f},LI:function(){return h},uV:function(){return d},Hx:function(){return _}});var r=t(5861),a=t(7757),c=t.n(a),o=t(4569),u=t.n(o);u().defaults.baseURL="https://api.themoviedb.org/3/";var i="https://api.themoviedb.org/3/",s="adf034e2dfe8e0fada717e58b9449dc8";function l(){return fetch("".concat(i,"trending/all/day?api_key=").concat(s)).then((function(e){if(e.ok)return e.json()}))}function f(e){return fetch("".concat(i,"movie/").concat(e,"?api_key=").concat(s,"&language=en-US")).then((function(e){if(e.ok)return e.json()}))}var h=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("search/movie/?api_key=".concat(s,"&query=").concat(n,"&language=en-US&page=1"));case 2:return t=e.sent,console.log(t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function d(e){return fetch("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US")).then((function(e){if(e.ok)return e.json()}))}function _(e){return fetch("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US")).then((function(e){if(e.ok)return e.json()}))}}}]);
//# sourceMappingURL=935.1088f095.chunk.js.map