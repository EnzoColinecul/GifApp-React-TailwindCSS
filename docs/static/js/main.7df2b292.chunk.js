(this["webpackJsonpgift-app"]=this["webpackJsonpgift-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),s=n(7),i=n.n(s),o=n(2),u=n(9),l=n.p+"static/media/search.4880e187.svg",d=function(e){var t=e.setCategories,n=Object(r.useState)(""),c=Object(o.a)(n,2),s=c[0],i=c[1];return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),s.trim().length>2&&(t((function(e){return[s].concat(Object(u.a)(e))})),i(""))},children:Object(a.jsxs)("div",{className:"flex group",children:[Object(a.jsx)("input",{placeholder:"Buscar...",className:"font-semibold rounded-md border-2 pl-8 mb-4 mt-2 w-4/5 md:w-40 lg:max-w-lg  border-transparent",type:"text",value:s,onChange:function(e){i(e.target.value)}}),Object(a.jsx)("img",{className:"group-hover:animate-bounceEdit -ml-28  md:-ml-40 w-4 mb-2",src:l,alt:"searchIcon"})]})})},j=n(10),m=n(6),x=n.n(m),b=n(8),f=function(){var e=Object(b.a)(x.a.mark((function e(t){var n,a,r,c,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("https://api.giphy.com/v1/gifs/search","?q=").concat(encodeURI(t),"&limit=10&api_key=").concat("k16ASPVCoedoLPauW2yiLARxn6hBKFUu"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,s=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){e.id;var t=e.title,n=e.url;return Object(a.jsxs)("div",{className:"shadow-xl text-gray-600 bg-white  rounded-lg mb-4 mr-6 ",children:[Object(a.jsx)("img",{className:"max-w-sm max-h-64",src:n,alt:t}),Object(a.jsx)("p",{className:"text-center",children:t})]})},p=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){f(e).then((function(e){return c({data:e,loading:!1})}))}),[e]),a}(t),c=n.data,s=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"text-3xl font-bold uppercase text-green-600 text-center",children:t}),s&&Object(a.jsx)("div",{className:"animate-pulse font-sans text-center text-2xl transition ease-out duration-150 text-green-300 mt-16",children:"Cargando"}),Object(a.jsx)("div",{className:"overflow-hidden mx-auto flex flex-row\tflex-wrap animate-fadeIn content-center items-center justify-center",children:c.map((function(e){return Object(a.jsx)(h,Object(j.a)({},e),e.id)}))})]})};var g=function(){var e=Object(r.useState)([""]),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"flex space-x-4",children:[Object(a.jsx)("h2",{className:"py-2 px-4 text-3xl transition duration-500 ease-in-out text-green-600 text-red-600 transform hover:-translate-y-1 hover:scale-110",children:"GifApp"}),Object(a.jsx)(d,{setCategories:c})]}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(e){return Object(a.jsx)(p,{category:e},e)}))})]})},O=(n(17),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))});i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),O()}},[[18,1,2]]]);
//# sourceMappingURL=main.7df2b292.chunk.js.map