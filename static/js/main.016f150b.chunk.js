(this.webpackJsonprickandmortyapi=this.webpackJsonprickandmortyapi||[]).push([[0],{14:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(9),s=c.n(a),i=(c(14),c(3)),j=c(5),o=c(2),u=c.n(o),l=c(4),h=function(){var e=Object(l.a)(u.a.mark((function e(t){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),d=c(0),b=function(e){var t=e.char,c=e.setCharUrl,n=e.setModalOn;return Object(d.jsxs)("div",{className:"char-card",onClick:function(){c(t.url),n("modal-open")},children:[Object(d.jsx)("div",{className:"char-img-container",children:Object(d.jsx)("img",{className:"char-img",src:t.image,alt:t.name})}),Object(d.jsx)("h2",{children:t.name})]})},O=function(e){var t=e.char,c=e.modalOn,n=e.setModalOn,r=e.setCharData,a=e.setCharUrl;return Object(d.jsx)("div",{className:"char-modal ".concat(c),onClick:function(){n(""),r(null),a(null)},children:Object(d.jsxs)("div",{className:"char-modal-box",children:[Object(d.jsx)("img",{className:"char-modal-img",src:t.image,alt:t.name}),Object(d.jsxs)("div",{className:"char-modal-info",children:[Object(d.jsx)("h2",{children:t.name}),Object(d.jsx)("table",{children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Gender: "}),Object(d.jsx)("td",{children:t.gender})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Origin: "}),Object(d.jsx)("td",{children:t.origin.name})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Species: "}),Object(d.jsx)("td",{children:t.species})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Status: "}),Object(d.jsx)("td",{children:t.status})]})]})})]})]})})},p=function(e){var t=e.handleSearch,c=Object(n.useState)(""),r=Object(i.a)(c,2),a=r[0],s=r[1];return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a)},children:[Object(d.jsx)("h3",{children:"Search:"}),Object(d.jsx)("input",{className:"search-bar",type:"search",name:"search-bar",id:"search-bar",onChange:function(e){s(e.target.value)},value:a})]})},x=c.p+"static/media/rickandmortyportal.a218ca22.png",f=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(null),s=Object(i.a)(a,2),o=s[0],f=s[1],m=Object(n.useState)(""),v=Object(i.a)(m,2),S=v[0],g=v[1],k=Object(n.useState)(null),y=Object(i.a)(k,2),w=y[0],C=y[1],N=Object(n.useState)(!1),E=Object(i.a)(N,2),M=E[0],D=E[1],U=Object(n.useState)(null),A=Object(i.a)(U,2),I=(A[0],A[1]);Object(n.useEffect)((function(){o&&function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(o);case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[o]),Object(n.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("https://rickandmortyapi.com/api/character");case 2:t=e.sent,C(t.results),I(t.info.next),D(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(d.jsxs)("section",{className:"char-gallery",children:[Object(d.jsx)("h1",{children:"CHARACTERS"}),Object(d.jsx)(p,{handleSearch:function(e){D(!1),C([]);var t=function(){var e=Object(l.a)(u.a.mark((function e(c){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(c);case 2:(n=e.sent).error?C([]):C((function(e){return[].concat(Object(j.a)(e),Object(j.a)(n.results))})),n.info.next?t(n.info.next):D(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();""===e?function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("https://rickandmortyapi.com/api/character");case 2:t=e.sent,C(t.results),I(t.info.next),D(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():t("https://rickandmortyapi.com/api/character/?name=".concat(e))}}),Object(d.jsxs)("div",{className:"char-gallery-container",children:[M&&w.map((function(e){return Object(d.jsx)(b,{char:e,setCharUrl:f,setModalOn:g},e.id)})),w&&0===w.length||!M&&Object(d.jsx)("img",{className:"portal",src:x,alt:"portal"})]}),c&&Object(d.jsx)(O,{char:c,modalOn:S,setModalOn:g,setCharData:r,setCharUrl:f})]})},m=function(e){var t=e.episode;return Object(d.jsxs)("div",{className:"episode-card",children:[Object(d.jsx)("p",{children:t.episode}),Object(d.jsx)("p",{children:t.name}),Object(d.jsx)("p",{children:t.air_date})]})},v=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),s=Object(i.a)(a,2),o=s[0],b=s[1];Object(n.useEffect)((function(){r([]);var e=function(){var t=Object(l.a)(u.a.mark((function t(c){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(c);case 2:if(n=t.sent,r((function(e){return[].concat(Object(j.a)(e),Object(j.a)(n.results))})),!n.info.next){t.next=9;break}return t.next=7,e(n.info.next);case 7:t.next=10;break;case 9:b(!0);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e("https://rickandmortyapi.com/api/episode")}),[]);var O=function(e){var t=[];return c.map((function(c){return c.episode.includes(e)&&t.push(Object(d.jsx)(m,{episode:c},c.id))})),t};return Object(d.jsxs)("section",{className:"episode-list",children:[Object(d.jsx)("h1",{children:"EPISODES"}),Object(d.jsx)("h2",{children:"Season 1"}),o&&O("S01"),Object(d.jsx)("h2",{children:"Season 2"}),o&&O("S02"),Object(d.jsx)("h2",{children:"Season 3"}),o&&O("S03"),Object(d.jsx)("h2",{children:"Season 4"}),o&&O("S04")]})},S=c.p+"static/media/logo.027363c0.png",g=function(e){var t=e.setSection,c=function(e){t(e)};return Object(d.jsxs)("header",{children:[Object(d.jsx)("img",{className:"header-img",src:S,alt:"logo"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{onClick:function(){return c("character")},children:"Characters"}),Object(d.jsx)("li",{onClick:function(){return c("episode")},children:"Episodes"})]})]})},k=function(){var e=Object(n.useState)("character"),t=Object(i.a)(e,2),c=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(g,{setSection:r}),"character"===c?Object(d.jsx)(f,{}):Object(d.jsx)(v,{})]})};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.016f150b.chunk.js.map