"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(t,n,r){r.r(n);var e=r(861),a=r(439),c=r(757),u=r.n(c),i=r(791),s=r(689),o=r(970),p=r(363),f=r(13),h=r(184);n.default=function(){var t=(0,s.UO)().movieID,n=(0,i.useState)([]),r=(0,a.Z)(n,2),c=r[0],l=r[1],v=(0,i.useState)(!1),d=(0,a.Z)(v,2),m=d[0],x=d[1];return(0,i.useEffect)((function(){x(!0);var n=function(){var n=(0,e.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,x(!0),n.next=4,(0,o.uV)(t);case 4:r=n.sent,l(r),x(!1),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,h.jsxs)(h.Fragment,{children:[m&&(0,h.jsx)(p.Z,{}),0!==c.length&&(0,h.jsx)(f.Z,{title:"Movie Cast",children:(0,h.jsx)("ul",{children:c&&c.map((function(t){return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{width:"200px",height:"300px",src:t.profile_path&&"https://image.tmdb.org/t/p/w300".concat(t.profile_path),alt:t.original_name}),(0,h.jsx)("p",{children:t.name})]},t.id)}))})}),c&&0===c.length&&(0,h.jsx)("div",{children:"No cast info for this movie"})]})}},13:function(t,n,r){r.d(n,{Z:function(){return i}});var e,a=r(168),c=r(924).ZP.section(e||(e=(0,a.Z)(["\n  margin: 10px 20px;\n"]))),u=r(184),i=function(t){var n=t.title,r=void 0===n?null:n,e=t.children;return(0,u.jsxs)(c,{children:[r&&(0,u.jsx)("h2",{children:r}),e]})}},970:function(t,n,r){r.d(n,{Hx:function(){return h},Y5:function(){return o},uV:function(){return f},wr:function(){return s},z1:function(){return p}});var e=r(861),a=r(757),c=r.n(a),u=r(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=new URLSearchParams({api_key:"576d66aa4628b8c5efd23313b6537b33",language:"en-US"}),s=function(){var t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"?").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=new URLSearchParams(i)).append("query",n),t.next=4,u.Z.get("/search/movie?".concat(r));case 4:return e=t.sent,t.abrupt("return",e.data.results);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/credits?").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/reviews?").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.bc969113.chunk.js.map