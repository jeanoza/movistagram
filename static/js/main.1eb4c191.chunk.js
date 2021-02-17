(this.webpackJsonpmovistagram=this.webpackJsonpmovistagram||[]).push([[0],{83:function(t,n,e){"use strict";e.r(n);var r=e(1),i=e(40),c=e.n(i),a=e(14),o=e(6),s=e(8),u=e.n(s),l=e(13),b=e(5),j=e(3),d=e(2),p=e(0);function g(){var t=Object(j.a)(["\n  display: none;\n"]);return g=function(){return t},t}var h=d.c.div(g()),f=function(t){return Object(p.jsx)(h,{children:document.title="".concat(t.title.length>20?"".concat(t.title.substring(0,20),"..."):t.title)})},x=e(16),v=e(17);function O(){var t=Object(j.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 28px;\n  margin-top: 20px;\n"]);return O=function(){return t},t}var m=d.c.div(O()),w=function(){return Object(p.jsxs)(m,{children:[Object(p.jsx)("span",{role:"img","aria-label":"Loading",children:Object(p.jsx)(x.a,{icon:v.c,spin:!0})}),Object(p.jsx)(f,{title:"Loading..."})]})};function _(){var t=Object(j.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]);return _=function(){return t},t}function y(){var t=Object(j.a)(["\n  font-size: 15px;\n  font-weight: 600;\n"]);return y=function(){return t},t}function k(){var t=Object(j.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]);return k=function(){return t},t}var z=d.c.div(k()),S=d.c.span(y()),U=d.c.div(_()),I=function(t){var n=t.title,e=t.children;return Object(p.jsxs)(z,{children:[Object(p.jsxs)(S,{children:[" ",n," "]}),Object(p.jsx)(U,{children:e})]})};function M(){var t=Object(j.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return M=function(){return t},t}function N(){var t=Object(j.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]);return N=function(){return t},t}function T(){var t=Object(j.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return T=function(){return t},t}function E(){var t=Object(j.a)(["\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  opacity: 0;\n  transition: opacity 0.1s ease-in-out;\n"]);return E=function(){return t},t}function P(){var t=Object(j.a)(["\n  background-image: url(",");\n  height: 180px;\n  border-radius: 10px;\n  background-size: cover;\n  background-position: center center;\n  transition: opacity 0.1s ease-in-out;\n"]);return P=function(){return t},t}function F(){var t=Object(j.a)(["\n  font-size: 12px;\n"]);return F=function(){return t},t}var R=d.c.div(F()),C=d.c.div(P(),(function(t){return t.bgUrl})),A=d.c.span(E()),D=d.c.div(T(),C,A),B=d.c.span(N()),L=d.c.span(M()),V=function(t){var n=t.id,e=t.imageUrl,r=t.title,i=t.rating,c=t.year,o=t.isMovie,s=void 0!==o&&o;return Object(p.jsx)(a.b,{to:s?"/movie/".concat(n):"/show/".concat(n),children:Object(p.jsxs)(R,{children:[Object(p.jsxs)(D,{children:[Object(p.jsx)(C,{bgUrl:e?"https://image.tmdb.org/t/p/w300/".concat(e):"https://www.lakeshorechamber.org/wp-content/uploads/2018/07/Photo-Not-Available.png"}),i?Object(p.jsxs)(A,{children:[Object(p.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50"})," ",i,"/10"]}):null]}),Object(p.jsx)(B,{children:r.length>17?"".concat(r.substring(0,17),"..."):r}),Object(p.jsx)(L,{children:c})]})})},q=function(t){var n=t.id,e=t.imageUrl,r=t.title,i=t.year;return Object(p.jsx)(a.b,{to:"/collection/".concat(n),children:Object(p.jsxs)(R,{children:[Object(p.jsx)(D,{children:Object(p.jsx)(C,{bgUrl:e?"https://image.tmdb.org/t/p/w300/".concat(e):"https://www.lakeshorechamber.org/wp-content/uploads/2018/07/Photo-Not-Available.png"})}),Object(p.jsx)(B,{children:r.length>17?"".concat(r.substring(0,17),"..."):r}),Object(p.jsx)(L,{children:i})]})})},J=function(t){var n=t.imageUrl,e=t.title,r=t.year;return Object(p.jsxs)(R,{children:[Object(p.jsx)(D,{children:Object(p.jsx)(C,{bgUrl:n?"https://image.tmdb.org/t/p/w300/".concat(n):"https://www.lakeshorechamber.org/wp-content/uploads/2018/07/Photo-Not-Available.png"})}),Object(p.jsx)(B,{children:e.length>17?"".concat(e.substring(0,17),"..."):e}),Object(p.jsx)(L,{children:r})]})},H=e(44),G=e.n(H).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"efe03a6d3db809fae4ff34eeb880e298",language:"en-EN"}}),K=function(){return G.get("movie/now_playing")},Q=function(){return G.get("movie/upcoming")},W=function(){return G.get("movie/popular")},X=function(t){return G.get("movie/".concat(t),{params:{append_to_response:"videos"}})},Y=function(t){return G.get("movie/".concat(t,"/videos"))},Z=function(t){return G.get("collection/".concat(t))},$=function(t){return G.get("search/movie",{params:{query:encodeURIComponent(t)}})},tt=function(){return G.get("tv/top_rated")},nt=function(){return G.get("tv/popular")},et=function(){return G.get("tv/airing_today")},rt=function(t){return G.get("tv/".concat(t),{params:{append_to_response:"videos"}})},it=function(t){return G.get("tv/".concat(t,"/videos"))},ct=function(t){return G.get("search/tv",{params:{query:encodeURIComponent(t)}})};function at(){var t=Object(j.a)(["\n  position: absolute;\n  width: 100%;\n  padding: 20px;\n"]);return at=function(){return t},t}var ot=d.c.div(at()),st=function(){var t=Object(r.useState)([]),n=Object(b.a)(t,2),e=n[0],i=n[1],c=Object(r.useState)([]),a=Object(b.a)(c,2),o=a[0],s=a[1],j=Object(r.useState)([]),d=Object(b.a)(j,2),g=d[0],h=d[1],x=Object(r.useState)(!0),v=Object(b.a)(x,2),O=v[0],m=v[1];return Object(r.useEffect)((function(){(function(){var t=Object(l.a)(u.a.mark((function t(){var n,e,r,c,a,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,K();case 3:return n=t.sent,e=n.data.results,t.next=7,Q();case 7:return r=t.sent,c=r.data.results,t.next=11,W();case 11:a=t.sent,o=a.data.results,i(e),s(c),h(o),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),console.error(t.t0.message);case 21:return t.prev=21,m(!1),t.finish(21);case 24:case"end":return t.stop()}}),t,null,[[0,18,21,24]])})));return function(){return t.apply(this,arguments)}})()()}),[]),O?Object(p.jsx)(w,{}):Object(p.jsxs)(ot,{children:[Object(p.jsx)(I,{title:"Now Playing",children:e.map((function(t){return Object(p.jsx)(V,{id:t.id,title:t.title,imageUrl:t.poster_path,rating:t.vote_average,year:t.release_date&&t.release_date.substring(0,4),isMovie:!0},t.id)}))}),Object(p.jsx)(I,{title:"Upcoming",children:o.map((function(t){return Object(p.jsx)(V,{id:t.id,title:t.title,imageUrl:t.poster_path,rating:t.vote_average,year:t.release_date&&t.release_date.substring(0,4),isMovie:!0},t.id)}))}),Object(p.jsx)(I,{title:"Popular",children:g.map((function(t){return Object(p.jsx)(V,{id:t.id,title:t.title,imageUrl:t.poster_path,rating:t.vote_average,year:t.release_date&&t.release_date.substring(0,4),isMovie:!0},t.id)}))}),Object(p.jsx)(f,{title:"Movies | Movistagram"})]})};function ut(){var t=Object(j.a)(["\n  position: absolute;\n  width: 100%;\n  padding: 20px;\n"]);return ut=function(){return t},t}var lt=d.c.div(ut()),bt=function(){var t=Object(r.useState)([]),n=Object(b.a)(t,2),e=n[0],i=n[1],c=Object(r.useState)([]),a=Object(b.a)(c,2),o=a[0],s=a[1],j=Object(r.useState)([]),d=Object(b.a)(j,2),g=d[0],h=d[1],x=Object(r.useState)(!0),v=Object(b.a)(x,2),O=v[0],m=v[1],_=function(){var t=Object(l.a)(u.a.mark((function t(){var n,e,r,c,a,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,tt();case 3:return n=t.sent,e=n.data.results,t.next=7,nt();case 7:return r=t.sent,c=r.data.results,t.next=11,et();case 11:a=t.sent,o=a.data.results,i(e),s(c),h(o),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),console.error(t.t0.message);case 21:return t.prev=21,m(!1),t.finish(21);case 24:case"end":return t.stop()}}),t,null,[[0,18,21,24]])})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){_()}),[]),O?Object(p.jsx)(w,{}):Object(p.jsxs)(lt,{children:[Object(p.jsx)(I,{title:"Top rated",children:e.map((function(t){return Object(p.jsx)(V,{id:t.id,title:t.name,imageUrl:t.poster_path,rating:t.vote_average,year:t.first_air_date&&t.first_air_date.substring(0,4),isMovie:!1},t.id)}))}),Object(p.jsx)(I,{title:"Popular",children:o.map((function(t){return Object(p.jsx)(V,{id:t.id,title:t.name,imageUrl:t.poster_path,rating:t.vote_average,year:t.first_air_date&&t.first_air_date.substring(0,4),isMovie:!1},t.id)}))}),Object(p.jsx)(I,{title:"On air Today",children:g.map((function(t){return Object(p.jsx)(V,{id:t.id,title:t.name,imageUrl:t.poster_path,rating:t.vote_average,year:t.first_air_date&&t.first_air_date.substring(0,4),isMovie:!1},t.id)}))}),Object(p.jsx)(f,{title:"TV Shows | Movistagram"})]})};function jt(){var t=Object(j.a)(["\n  font-weight: 600;\n  color: ",";\n"]);return jt=function(){return t},t}function dt(){var t=Object(j.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]);return dt=function(){return t},t}var pt=d.c.div(dt()),gt=d.c.span(jt(),(function(t){return t.color})),ht=function(t){var n=t.text,e=t.color;return Object(p.jsx)(pt,{children:Object(p.jsxs)(gt,{color:e,children:[" ",n]})})};function ft(){var t=Object(j.a)(["\n  all: unset;\n  width: 100%;\n  font-size: 28px;\n"]);return ft=function(){return t},t}function xt(){var t=Object(j.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]);return xt=function(){return t},t}function vt(){var t=Object(j.a)(["\n  width: 100%;\n  padding: 20px;\n"]);return vt=function(){return t},t}var Ot=Object(d.c)("div")(vt()),mt=(Object(d.c)("form")(xt()),Object(d.c)("input")(ft()),function(t){var n=t.match.params.searchTerm,e=Object(r.useState)(null),i=Object(b.a)(e,2),c=i[0],a=i[1],o=Object(r.useState)(null),s=Object(b.a)(o,2),j=s[0],d=s[1],g=Object(r.useState)(!1),h=Object(b.a)(g,2),x=h[0],v=h[1],O=Object(r.useState)(null),m=Object(b.a)(O,2),_=m[0],y=m[1],k=function(){var t=Object(l.a)(u.a.mark((function t(){var e,r,i,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!0),t.prev=1,t.next=4,$(n);case 4:return e=t.sent,r=e.data.results,t.next=8,ct(n);case 8:i=t.sent,c=i.data.results,a(r),d(c),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0),y(t.t0.message);case 18:return t.prev=18,v(!1),t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[1,14,18,21]])})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){k()}),[n]),x?Object(p.jsx)(w,{}):Object(p.jsxs)(Ot,{children:[Object(p.jsxs)(p.Fragment,{children:[c&&c.length>0&&Object(p.jsx)(I,{title:"Movie Results",children:c.map((function(t){return Object(p.jsx)(V,{id:t.id,title:t.title,imageUrl:t.poster_path,rating:t.vote_average,yaer:t.release_date&&t.release_date.substring(0,4),isMovie:!0},t.id)}))}),j&&j.length>0&&Object(p.jsx)(I,{title:"TV Show Results",children:j.map((function(t){return Object(p.jsx)(V,{id:t.id,title:t.name,imageUrl:t.poster_path,rating:t.vote_average,year:t.first_air_date&&t.first_air_date.substring(0,4)},t.id)}))}),_&&Object(p.jsx)(ht,{color:"#ee5253",text:_}),j&&c&&0===j.length&&0===c.length&&Object(p.jsx)(ht,{text:"Nothing found",color:"#8395a7"})]}),Object(p.jsx)(f,{title:"Search | Movistagram"})]})});function wt(){var t=Object(j.a)(["\n  width: 20%;\n  font-size: 20px;\n"]);return wt=function(){return t},t}function _t(){var t=Object(j.a)(["\n  all: unset;\n  width: 90%;\n"]);return _t=function(){return t},t}function yt(){var t=Object(j.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 20%;\n  font-size: 16px;\n"]);return yt=function(){return t},t}function kt(){var t=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  height: 50px;\n"]);return kt=function(){return t},t}function zt(){var t=Object(j.a)(["\n  width: 70px;\n  text-align: center;\n  border-bottom: 3px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"]);return zt=function(){return t},t}function St(){var t=Object(j.a)(["\n  display: flex;\n"]);return St=function(){return t},t}function Ut(){var t=Object(j.a)(["\n  color: rgba(255, 255, 255);\n  position: fixed;\n  font-size: 8px;\n  z-index: 10;\n  top: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 20px;\n\n  background-color: rgba(20, 20, 20, 0.9);\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return Ut=function(){return t},t}var It=d.c.header(Ut()),Mt=d.c.ul(St()),Nt=d.c.li(zt(),(function(t){return t.current?"#ff0000":"transparent"})),Tt=Object(d.c)(a.b)(kt()),Et=d.c.form(yt()),Pt=d.c.input(_t()),Ft=d.c.span(wt()),Rt=Object(o.g)((function(t){var n=t.location.pathname,e=t.history,i=Object(r.useState)(""),c=Object(b.a)(i,2),o=c[0],s=c[1];return Object(p.jsxs)(It,{children:[Object(p.jsx)(a.b,{to:"/",children:Object(p.jsx)(Ft,{children:"Movistagram"})}),Object(p.jsxs)(Et,{onSubmit:function(t){var n=t.target[0];t.preventDefault(),e.push("/search/".concat(o)),n.value=null},children:[Object(p.jsx)(x.a,{icon:v.b,size:"1x"}),Object(p.jsx)(Pt,{onChange:function(t){var n=t.target.value;s(n)},placeholder:"Search movie or TV show..."})]}),Object(p.jsxs)(Mt,{children:[Object(p.jsx)(Nt,{current:"/"===n,children:Object(p.jsx)(Tt,{to:"/",children:Object(p.jsx)(x.a,{icon:v.a,size:"3x"})})}),Object(p.jsx)(Nt,{current:"/tv"===n,children:Object(p.jsx)(Tt,{to:"/tv",children:Object(p.jsx)(x.a,{icon:v.d,size:"2x"})})})]})]})})),Ct=e(45),At=e.n(Ct);function Dt(){var t=Object(j.a)(["\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 120px;\n  height: 180px;\n  border-radius: 10px;\n  margin-right: 20px;\n  :hover {\n    opacity: 0.5;\n    transition: opacity 0.2s ease-in-out;\n  }\n"]);return Dt=function(){return t},t}function Bt(){var t=Object(j.a)(["\n  display: flex;\n"]);return Bt=function(){return t},t}function Lt(){var t=Object(j.a)(["\n  background-image: url(",");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 100px;\n  height: 30px;\n  margin-right: 10px;\n"]);return Lt=function(){return t},t}function Vt(){var t=Object(j.a)(["\n  margin-right: 10px;\n  &:hover {\n    opacity: 0.7;\n    transition: opacity 0.2s ease-in-out;\n  }\n"]);return Vt=function(){return t},t}function qt(){var t=Object(j.a)(["\n  display: flexbox;\n  flex-wrap: nowrap;\n  width: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]);return qt=function(){return t},t}function Jt(){var t=Object(j.a)(["\n  font-weight: 600;\n  font-size: 15px;\n  margin-bottom: 25px;\n  margin-top: 30px;\n"]);return Jt=function(){return t},t}function Ht(){var t=Object(j.a)(["\n  margin-bottom: 20px;\n"]);return Ht=function(){return t},t}function Gt(){var t=Object(j.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n"]);return Gt=function(){return t},t}function Kt(){var t=Object(j.a)(["\n  font-size: 12px;\n  opacity: 0.8;\n  line-height: 1.5;\n  width: 100%;\n  margin-bottom: 20px;\n"]);return Kt=function(){return t},t}function Qt(){var t=Object(j.a)(["\n  margin: 0px 10px;\n"]);return Qt=function(){return t},t}function Wt(){var t=Object(j.a)(['\n  background-image: url("http://img4.wikia.nocookie.net/__cb20130124112826/logopedia/images/8/8e/IMDB.png");\n  background-size: cover;\n  background-position: center center;\n  width: 42px;\n  height: 20px;\n  display: inline-block;\n  border-radius: 5px;\n  :hover {\n    opacity: 0.5;\n    transition: opacity 0.2s ease-in-out;\n  }\n']);return Wt=function(){return t},t}function Xt(){var t=Object(j.a)(["\n  display: flex;\n  align-items: center;\n"]);return Xt=function(){return t},t}function Yt(){var t=Object(j.a)(["\n  display: flex;\n  align-items: center;\n  margin: 20px 0px;\n"]);return Yt=function(){return t},t}function Zt(){var t=Object(j.a)(["\n  display: flex;\n  justify-content: space-between;\n  font-size: 32px;\n  margin-bottom: 10px;\n"]);return Zt=function(){return t},t}function $t(){var t=Object(j.a)(["\n  width: 70%;\n  height: 100%;\n  overflow-y: scroll;\n  margin-left: 10px;\n"]);return $t=function(){return t},t}function tn(){var t=Object(j.a)(["\n  background-image: url(",");\n  background-size: 100%;\n  width: 30%;\n  height: auto;\n  border-radius: 15px;\n  :hover {\n    opacity: 0.5;\n    transition: opacity 0.2s ease-in-out;\n  }\n"]);return tn=function(){return t},t}function nn(){var t=Object(j.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: relative;\n"]);return nn=function(){return t},t}function en(){var t=Object(j.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]);return en=function(){return t},t}var rn=d.c.div(en()),cn=d.c.div(nn()),an=d.c.div(tn(),(function(t){return t.bgImage})),on=d.c.div($t()),sn=d.c.h3(Zt()),un=d.c.div(Yt()),ln=d.c.span(Xt()),bn=d.c.span(Wt()),jn=d.c.span(Qt()),dn=d.c.p(Kt()),pn=d.c.div(Gt(),(function(t){return t.bgImage})),gn=d.c.div(Ht()),hn=d.c.div(Jt()),fn=d.c.div(qt()),xn=Object(d.c)(At.a)(Vt()),vn=d.c.div(Lt(),(function(t){return t.bgImage})),On=(d.c.div(Bt()),d.c.div(Dt(),(function(t){return t.bgImage})),function(t){var n=t.location.pathname,e=Object(r.useState)(null),i=Object(b.a)(e,2),c=i[0],a=i[1],o=Object(r.useState)([]),s=Object(b.a)(o,2),j=s[0],d=s[1],g=Object(r.useState)(!0),h=Object(b.a)(g,2),x=h[0],v=h[1],O=n.includes("/movie/");return Object(r.useEffect)((function(){(function(){var n=Object(l.a)(u.a.mark((function n(){var e,r,i,c,o,s,l,b,j,p,g;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.match.params.id,r=t.history.push,i=parseInt(e),!isNaN(i)){n.next=4;break}return n.abrupt("return",r("/"));case 4:if(n.prev=4,!O){n.next=18;break}return n.next=8,X(i);case 8:return c=n.sent,o=c.data,n.next=12,Y(i);case 12:s=n.sent,l=s.data.results,a(o),d(l),n.next=28;break;case 18:return n.next=20,rt(i);case 20:return b=n.sent,j=b.data,n.next=24,it(i);case 24:p=n.sent,g=p.data.results,a(j),d(g);case 28:n.next=33;break;case 30:n.prev=30,n.t0=n.catch(4),console.log(n.t0);case 33:return n.prev=33,v(!1),n.finish(33);case 36:case"end":return n.stop()}}),n,null,[[4,30,33,36]])})));return function(){return n.apply(this,arguments)}})()()}),[]),x?Object(p.jsx)(w,{}):Object(p.jsxs)(rn,{children:[Object(p.jsx)(pn,{bgImage:"https://image.tmdb.org/t/p/original/".concat(c.backdrop_path)}),Object(p.jsxs)(cn,{children:[Object(p.jsx)(an,{bgImage:c.poster_path?"https://image.tmdb.org/t/p/original/".concat(c.poster_path):"https://www.lakeshorechamber.org/wp-content/uploads/2018/07/Photo-Not-Available.png"}),Object(p.jsxs)(on,{children:[Object(p.jsxs)(sn,{children:[c.title?c.title:c.name,c.production_companies&&c.production_companies.length>0&&c.production_companies.map((function(t,n){return t.logo_path&&Object(p.jsx)(vn,{bgImage:"https://image.tmdb.org/t/p/original/".concat(t.logo_path)},n)}))]}),Object(p.jsxs)(un,{children:[(c.release_date||c.first_air_date)&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(ln,{children:c.release_date?c.release_date.substring(0,4):c.first_air_date.substring(0,4)}),Object(p.jsx)(jn,{children:"#"})]}),(c.runtime||c.episode_run_time)&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(ln,{children:[c.runtime?c.runtime:c.episode_run_time," ","min"]}),Object(p.jsx)(jn,{children:"#"})]}),Object(p.jsx)(ln,{children:c.genres&&c.genres.map((function(t,n){return n===c.genres.length-1?t.name:"".concat(t.name," / ")}))}),Object(p.jsx)(jn,{children:"#"}),O&&Object(p.jsx)(ln,{children:Object(p.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://www.imdb.com/title/".concat(c.imdb_id),children:Object(p.jsx)(bn,{})})})]}),Object(p.jsx)(dn,{children:c.overview}),j&&j.length>0&&Object(p.jsxs)(gn,{children:[Object(p.jsx)(hn,{children:"Traillers"}),Object(p.jsx)(fn,{children:j.map((function(t,n){return Object(p.jsx)(xn,{url:"https://www.youtube.com/watch?v=".concat(t.key),controls:!0,width:"480px",height:"320px"},n)}))})]}),c.seasons&&c.seasons.length>0&&Object(p.jsx)(I,{title:"Seasons",children:c.seasons.map((function(t,n){return Object(p.jsx)(J,{title:t.name,year:t.air_date&&t.air_date.substring(0,4),imageUrl:t.poster_path},n)}))}),c.belongs_to_collection&&Object(p.jsx)(I,{title:"Collection",children:Object(p.jsx)(q,{id:c.belongs_to_collection.id,title:c.belongs_to_collection.name,imageUrl:c.belongs_to_collection.poster_path},c.belongs_to_collection.id)})]})]}),Object(p.jsx)(f,{title:c.title?document.title=c.title:document.title=c.name})]})});function mn(){var t=Object(j.a)(["\n  width: 50%;\n  display: flex;\n  font-size: 30px;\n  justify-content: space-around;\n"]);return mn=function(){return t},t}function wn(){var t=Object(j.a)(["\n  font-size: 12px;\n  opacity: 0.8;\n  line-height: 1.5;\n  width: 100%;\n  margin-bottom: 20px;\n"]);return wn=function(){return t},t}function _n(){var t=Object(j.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n"]);return _n=function(){return t},t}function yn(){var t=Object(j.a)(["\n  display: flex;\n  justify-content: space-between;\n  font-size: 32px;\n  margin-bottom: 10px;\n"]);return yn=function(){return t},t}function kn(){var t=Object(j.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]);return kn=function(){return t},t}function zn(){var t=Object(j.a)(["\n  background-image: url(",");\n  background-size: 100%;\n  width: 30%;\n  height: auto;\n  border-radius: 15px;\n  :hover {\n    opacity: 0.5;\n    transition: opacity 0.2s ease-in-out;\n  }\n"]);return zn=function(){return t},t}function Sn(){var t=Object(j.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: relative;\n"]);return Sn=function(){return t},t}function Un(){var t=Object(j.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]);return Un=function(){return t},t}var In=d.c.div(Un()),Mn=d.c.div(Sn()),Nn=d.c.div(zn(),(function(t){return t.bgImage})),Tn=d.c.div(kn()),En=d.c.h3(yn()),Pn=d.c.div(_n(),(function(t){return t.bgImage})),Fn=d.c.p(wn()),Rn=d.c.div(mn()),Cn=function(t){var n=t.match.params.id,e=Object(r.useState)([]),i=Object(b.a)(e,2),c=i[0],a=i[1],o=Object(r.useState)(!0),s=Object(b.a)(o,2),j=s[0],d=s[1];return Object(r.useEffect)((function(){(function(){var t=Object(l.a)(u.a.mark((function t(){var e,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Z(n);case 3:e=t.sent,r=e.data,a(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:return t.prev=11,d(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}})()()}),[]),j?Object(p.jsx)(w,{}):Object(p.jsxs)(In,{children:[Object(p.jsx)(Pn,{bgImage:"https://image.tmdb.org/t/p/original/".concat(c.backdrop_path)}),Object(p.jsxs)(Mn,{children:[Object(p.jsx)(Nn,{bgImage:"https://image.tmdb.org/t/p/original/".concat(c.poster_path)}),Object(p.jsxs)(Tn,{children:[Object(p.jsx)(En,{children:c.name}),Object(p.jsx)(Fn,{children:c.overview}),Object(p.jsx)(I,{title:"Series",children:c.parts&&c.parts.map((function(t,n){return Object(p.jsx)(V,{id:t.id,imageUrl:t.poster_path,title:t.title,rating:t.vote_average,year:t.release_date&&t.release_date.substring(0,4),isMovie:!0},n)}))}),Object(p.jsxs)(Rn,{children:[Object(p.jsx)("div",{children:"big poster"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"genre(getDetail by id)"}),Object(p.jsx)("div",{children:"year"}),Object(p.jsx)("div",{children:"description(getDetail by id)"})]})]})]})]}),Object(p.jsx)(f,{title:c.name})]})},An=function(){return Object(p.jsx)(a.a,{children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Rt,{}),Object(p.jsxs)(o.d,{children:[Object(p.jsx)(o.b,{path:"/",exact:!0,component:st}),Object(p.jsx)(o.b,{path:"/tv",exact:!0,component:bt}),Object(p.jsx)(o.b,{path:"/search/:searchTerm",component:mt}),Object(p.jsx)(o.b,{path:"/movie/:id",component:On}),Object(p.jsx)(o.b,{path:"/show/:id",component:On}),Object(p.jsx)(o.b,{path:"/collection/:id",component:Cn}),Object(p.jsx)(o.a,{from:"*",to:"/"})]})]})})},Dn=e(46);function Bn(){var t=Object(j.a)(["\n    ","\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        color:rgb(255,255,255);\n        font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:14px;\n        background-color:rgba(20,20,20);\n        padding-top:50px;\n    }\n    div{\n        &::-webkit-scrollbar {\n            display: none;\n        }\n    }\n"]);return Bn=function(){return t},t}var Ln=Object(d.a)(Bn(),Dn.a),Vn=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(An,{}),Object(p.jsx)(Ln,{})]})};c.a.render(Object(p.jsx)(Vn,{}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.1eb4c191.chunk.js.map