"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(n,r,t){t.r(r);var e=t(861),a=t(439),c=t(757),u=t.n(c),s=t(791),i=t(689),o=t(970),p=t(363),f=t(13),v=t(184);r.default=function(){var n=(0,i.UO)().movieID,r=(0,s.useState)([]),t=(0,a.Z)(r,2),c=t[0],h=t[1],d=(0,s.useState)(!1),l=(0,a.Z)(d,2),x=l[0],m=l[1];return(0,s.useEffect)((function(){var r=function(){var r=(0,e.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,m(!0),r.next=4,(0,o.Hx)(n);case 4:t=r.sent,h(t),m(!1),r.next=11;break;case 9:r.prev=9,r.t0=r.catch(0);case 11:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(){return r.apply(this,arguments)}}();r()}),[n]),(0,v.jsxs)(v.Fragment,{children:[x&&(0,v.jsx)(p.Z,{}),c&&(0,v.jsx)(f.Z,{title:"Reviews",children:(0,v.jsx)("ul",{children:c.map((function(n){return(0,v.jsxs)("li",{children:[(0,v.jsx)("p",{children:n.author}),(0,v.jsx)("p",{children:n.content})]},n.id)}))})}),c&&0===c.length&&(0,v.jsx)("div",{children:"No reviews for this movie"})]})}},13:function(n,r,t){t.d(r,{Z:function(){return s}});var e,a=t(168),c=t(924).ZP.section(e||(e=(0,a.Z)(["\n  margin: 10px 20px;\n"]))),u=t(184),s=function(n){var r=n.title,t=void 0===r?null:r,e=n.children;return(0,u.jsxs)(c,{children:[t&&(0,u.jsx)("h2",{children:t}),e]})}},970:function(n,r,t){t.d(r,{Hx:function(){return v},Y5:function(){return o},uV:function(){return f},wr:function(){return i},z1:function(){return p}});var e=t(861),a=t(757),c=t.n(a),u=t(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=new URLSearchParams({api_key:"576d66aa4628b8c5efd23313b6537b33",language:"en-US"}),i=function(){var n=(0,e.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?".concat(s));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(r,"?").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(t=new URLSearchParams(s)).append("query",r),n.next=4,u.Z.get("/search/movie?".concat(t));case 4:return e=n.sent,n.abrupt("return",e.data.results);case 6:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(r,"/credits?").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(r,"/reviews?").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.89e3524b.chunk.js.map