"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[778],{778:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(731),a=n(689),i=n(885),c=n(281),u=n(791),s=n(184),o=function(){var e,t,n=function(e){var t=(0,u.useState)([]),n=(0,i.Z)(t,2),r=n[0],a=n[1];return(0,u.useEffect)((function(){c.TP(e).then((function(e){return a(e)}))}),[e]),{movieDetails:r}}((0,a.UO)().movieId),o=n.movieDetails,d=null!==(e=null===(t=(0,a.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,s.jsxs)("div",{children:[(0,s.jsxs)(r.rU,{to:d,children:[" ",(0,s.jsx)("button",{type:"button",children:"Go back"})]}),(0,s.jsxs)("h2",{children:[o.title," (",o.release_date?o.release_date.substring(0,4):"",")"]}),(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2".concat(o.poster_path),alt:o.original_title}),(0,s.jsxs)("p",{children:["User Score:"," ",o.vote_average?Math.fround(10*o.vote_average).toFixed(0):"","%"]}),(0,s.jsx)("h3",{children:"Overview"}),(0,s.jsx)("p",{children:o.overview}),(0,s.jsx)("h4",{children:"Genres"}),(0,s.jsx)("p",{children:o.genres?o.genres.map((function(e){return e.name})).join(" "):""}),(0,s.jsx)("p",{children:"Additional information"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(r.rU,{to:"cast",children:"Cast"})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.rU,{to:"reviews",children:"Reviews"})})]}),(0,s.jsx)(a.j3,{})]})}},281:function(e,t,n){n.d(t,{Hg:function(){return s},TP:function(){return d},q5:function(){return f},z1:function(){return o},zv:function(){return p}});var r=n(861),a=n(757),i=n.n(a),c=n(44);c.ZP.defaults.baseURL="https://api.themoviedb.org/3";var u="?api_key=11517d6931d2b5137dd13eb45c72b984",s=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/trending/movie/day".concat(u));case 2:return t=e.sent,e.abrupt("return",t.data.results.map((function(e){return{id:e.id,title:e.title}})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/search/movie".concat(u,"&query=").concat(t,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results.map((function(e){return{id:e.id,title:e.title}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/movie/".concat(t).concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/movie/".concat(t,"/credits").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast.map((function(e){return{name:e.name,character:e.character,profile_path:e.profile_path,id:e.id}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/movie/".concat(t,"/reviews").concat(u,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results.map((function(e){return{author:e.author,content:e.content,id:e.id}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=778.840b33ef.chunk.js.map