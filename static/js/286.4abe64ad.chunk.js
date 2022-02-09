"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[286],{645:function(A,e,i){i.d(e,{Z:function(){return s}});var t=i(373),n="Loader_loader__+lRPl",a=i(184),s=function(){return(0,a.jsx)("div",{className:n,children:(0,a.jsx)(t.g4,{heigth:"80",width:"80",color:"#3f51b5",secondaryColor:"lightGrey"})})}},286:function(A,e,i){i.r(e),i.d(e,{default:function(){return g}});var t=i(885),n=i(791),a=i(501),s=i(871),c=i(185),E={movie:"MovieDetailsPage_movie__KlXwI",movieInfo:"MovieDetailsPage_movieInfo__NuFQu",heading:"MovieDetailsPage_heading__cvbCA",title:"MovieDetailsPage_title__MDJ+L",genres:"MovieDetailsPage_genres__HV3uS",additional:"MovieDetailsPage_additional__BCHVj",link:"MovieDetailsPage_link__ZE1Eo",imgWrap:"MovieDetailsPage_imgWrap__sC3MV",img:"MovieDetailsPage_img__jzc+4",back:"MovieDetailsPage_back__B440W"},o=i(390),r=i(645),R=i(927),I=i(184),g=function(){var A,e,i=(0,s.UO)().movieId,g=(0,n.useState)([]),u=(0,t.Z)(g,2),d=u[0],l=u[1],B=(0,n.useState)(!1),j=(0,t.Z)(B,2),Q=j[0],f=j[1],v=(0,s.TH)();(0,n.useEffect)((function(){f(!0),(0,o.Mc)(i).then((function(A){return l(A)})).finally((function(){f(!1)}))}),[i]);var h=d.title,H=d.release_date,x=d.vote_average,O=d.overview,m=d.genres;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(a.rU,{to:null!==(A=null===v||void 0===v||null===(e=v.state)||void 0===e?void 0:e.from)&&void 0!==A?A:"/movies",className:E.back,children:[(0,I.jsx)(c.And,{}),"Back"]}),Q&&(0,I.jsx)(r.Z,{}),d&&(0,I.jsxs)("div",{className:E.movie,children:[(0,I.jsxs)("div",{className:E.movieInfo,children:[(0,I.jsx)("div",{className:E.imgWrap,children:(0,I.jsx)("img",{src:"".concat(d.poster_path?"https://image.tmdb.org/t/p/w500"+d.poster_path:R),alt:h,className:E.img})}),(0,I.jsxs)("div",{children:[(0,I.jsxs)("h1",{className:E.heading,children:[h," (",H,")"]}),(0,I.jsxs)("p",{children:["User score: ",10*x,"%"]}),(0,I.jsx)("h2",{className:E.title,children:"Overview"}),(0,I.jsx)("p",{children:O}),m&&m.length>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("h2",{className:E.title,children:"Genres"}),(0,I.jsx)("ul",{className:E.genres,children:m.map((function(A){var e=A.id,i=A.name;return(0,I.jsx)("li",{children:i},e)}))})]})]})]}),(0,I.jsxs)("div",{className:E.additional,children:[(0,I.jsx)("h2",{children:"Additional information"}),(0,I.jsxs)("ul",{className:E.unstyled,children:[(0,I.jsx)("li",{children:(0,I.jsx)(a.rU,{to:"cast",state:{from:v},className:E.link,children:"Cast"})}),(0,I.jsx)("li",{children:(0,I.jsx)(a.rU,{to:"reviews",state:{from:v},className:E.link,children:"Reviews"})})]}),(0,I.jsx)(s.j3,{})]})]})]})}},390:function(A,e,i){i.d(e,{KS:function(){return a},Mc:function(){return s},LI:function(){return c},uV:function(){return E},Hx:function(){return o}});var t="https://api.themoviedb.org/3/",n="adf034e2dfe8e0fada717e58b9449dc8";function a(){return fetch("".concat(t,"trending/all/day?api_key=").concat(n)).then((function(A){if(A.ok)return A.json()}))}function s(A){return fetch("".concat(t,"movie/").concat(A,"?api_key=").concat(n,"&language=en-US")).then((function(A){if(A.ok)return A.json()}))}function c(A){return fetch("".concat(t,"search/movie/?api_key=").concat(n,"&query=").concat(A,"&language=en-US&page=1")).then((function(A){if(A.ok)return A.json()}))}function E(A){return fetch("".concat(t,"movie/").concat(A,"/credits?api_key=").concat(n,"&language=en-US")).then((function(A){if(A.ok)return A.json()}))}function o(A){return fetch("".concat(t,"movie/").concat(A,"/reviews?api_key=").concat(n,"&language=en-US")).then((function(A){if(A.ok)return A.json()}))}},927:function(A){A.exports="data:image/jpeg;base64,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kLXE+shWkQVYMZj6ry+vRrQuI3S6OJrSR04BR/UeI/sql/07PwV5EENerWpxmOrXigYTvFsTA0E9dApkRAWDP/OG00UQ4x1RvO8Rx+OgWvdstp1JJ3fcbwHU9wWbs7Wc2vJcl4yWHa6np+Z1QbKIiAur2Nkjcx41a4EEdQuyIMDFyOxWTkxsx/VyHeicfd7fiFvrNzWON2sHxcJ4vOYRzPoXOHyQv19yQ6WI+D2nv9KDRREQEREBERAREQEREBERAREQEREBEWdmMkKFfcjOtiTgxo7vSgo5SR2VyceNhP6uM70rh7/Z8St1jGxxtYwaNaAAOgWfhccaVYvl4zy+c8nmPQtJAREQEREBYeVoy1bH1pRGj28ZWDvHefxW4iCpj8hDka4kjOjhwezvaVbWFexk9Gwb+M4Hm+Icj4Dp6FexuVgyMejTuTAedGefq6hBfREQEREBERAREQEREBERARFQyWVgx0ejjvzEebGDx9fQIJMhkIcdXMkh1ceDGDm4rOxVGW1Y+tLw1e7jEw9w7j+C4o4ye9YF/J8TzZEeQ8R09C3UBERAREQEREBERAWTkcIyw/ymo7sLIOuo4Bx+R9K1kQYVbNzVJBWysTmOHKQDgfSfxC2o5Y5mB8T2vaeRadQutitDajMc8bZG9COSx5MHapvMuLtOb3mN55/I+tBuosJues1HbmSpPZ++wc/kfar8GYoWB5lljT0ed0+9BeRcBwcNWkEdQuUBERARcFwaNXEAdSqVjMUK48+yxx6MO8fcgvLpJLHCwvle1jRzLjoFivz1m27cxtJ7/wB945fIe1I8HauPEuUtOd3iNh5fIepAs5ua3Ia2KidI485COA9I/EqfHYRtd/lNt3b2SddTxDT8z6Vo160NWMRwRtY3oBzUqAiIgIiICIiAiIgIiICIiAiIg6ua17S1zQ4HmCNQqE+Cx9jUmARnrGd33cloogwzs0IzrVvTReP5aLj6qzLP6PKbw/ec781uogwvIM//AGhF7T/4p9VZl/8ASZTdH7rnfkt1EGGNmhIdbV6aXw/PVW4MFj6+hEAkPWQ73u5LRRB1a1rGhrWhoHIAaBdkRAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/Z"}}]);
//# sourceMappingURL=286.4abe64ad.chunk.js.map