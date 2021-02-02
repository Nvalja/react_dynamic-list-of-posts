(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),s=n.n(c),o=n(2),u=(n(13),n(14),n(15),n(4)),l=n.n(u),i=function(e){var t=e.posts,n=e.getPost,c=Object(a.useState)(!1),s=Object(o.a)(c,2),u=s[0],i=s[1],m=Object(a.useState)(0),p=Object(o.a)(m,2),f=p[0],b=p[1];return r.a.createElement("div",{className:"PostsList"},r.a.createElement("h2",null,"Posts:"),r.a.createElement("ul",{className:"PostsList__list"},t.map((function(e){return r.a.createElement("li",{className:"PostsList__item",key:e.id},r.a.createElement("div",null,r.a.createElement("b",null,"[User"," ",e.userId,"]:"," "),e.title),r.a.createElement("button",{type:"button",className:l()({PostsList__button:!0,button:!0,"PostsList__user-button":u&&f===e.id}),onClick:function(){var t;t=e.id,i(t!==f||!u),n(t),b(t)}},u&&f===e.id?"Close":"Open"))}))))},m=n(5),p=n(1),f=n.n(p),b=n(3),v=(n(17),function(e){var t=e.addComment,n=Object(a.useState)(""),c=Object(o.a)(n,2),s=c[0],u=c[1],i=Object(a.useState)(""),m=Object(o.a)(i,2),p=m[0],f=m[1],b=Object(a.useState)(""),v=Object(o.a)(b,2),d=v[0],E=v[1],h=Object(a.useState)(!1),_=Object(o.a)(h,2),O=_[0],j=_[1];return r.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),j(!0),s.trim()&&p.trim()&&d.trim()&&(t({name:s,email:p,body:d}),u(""),f(""),E(""),j(!1))}},r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"name",value:s,placeholder:"Your name",className:l()({NewCommentForm__input:!0,"NewCommentForm__input-error":!s&&O}),onChange:function(e){u(e.target.value)}})),r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"email",value:p,placeholder:"Your email",className:l()({NewCommentForm__input:!0,"NewCommentForm__input-error":!p&&O}),onChange:function(e){f(e.target.value)}})),r.a.createElement("div",{className:"form-field"},r.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:l()({NewCommentForm__input:!0,"NewCommentForm__input-error":!d&&O}),value:d,onChange:function(e){E(e.target.value)}})),r.a.createElement("button",{type:"submit",className:l()({"NewCommentForm__submit-button":!0,button:!0,"NewCommentForm__submit-button-active":d})},"Add a comment"))}),d=(n(18),function(){var e=Object(b.a)(f.a.mark((function e(t,n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://mate-api.herokuapp.com").concat(t),n);case 3:if((a=e.sent).ok){e.next=6;break}throw new Error("".concat(a.status,"---").concat(a.statusText));case 6:return e.abrupt("return",a.json());case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}()),E=function(){var e=Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/posts");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/posts/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/comments");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/comments",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/comments/".concat(t),{method:"DELETE"});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){var t=e.postID,n=Object(a.useState)({}),c=Object(o.a)(n,2),s=c[0],u=c[1],i=Object(a.useState)([]),p=Object(o.a)(i,2),d=p[0],E=p[1],N=Object(a.useState)(!1),w=Object(o.a)(N,2),y=w[0],x=w[1];Object(a.useEffect)((function(){t&&(C(),P())}),[t]);var C=function(){var e=Object(b.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:n=e.sent,u(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(b.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:n=e.sent,E(n.filter((function(e){return e.postId===t})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"PostDetails"},r.a.createElement("h2",null,"PostDetails"),r.a.createElement("h3",null,"User"," ",s.userId),r.a.createElement("section",{className:"PostDetails__post"},r.a.createElement("p",null,s.title)),r.a.createElement("section",{className:"PostDetails__comments"},r.a.createElement("button",{type:"button",className:l()({button:!0,"PostDetails__button-active":y}),onClick:function(){x(!y)}},"Hide"," ",d.length," ","comments"),r.a.createElement("ul",{className:"PostDetails__list"},!y&&d.map((function(e){return r.a.createElement("li",{className:"PostDetails__list-item",key:e.id},r.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){var t;t=e.id,j(t).then((function(){return P()}))}},"X"),r.a.createElement("p",null,e.body,r.a.createElement("span",{className:"PostDetails__name"},e.name)))})))),r.a.createElement("section",null,r.a.createElement("div",{className:"PostDetails__form-wrapper"},r.a.createElement(v,{addComment:function(e){O(Object(m.a)(Object(m.a)({},e),{},{postId:t})).then((function(){return P()}))}}))))},w=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),u=Object(o.a)(s,2),l=u[0],m=u[1],p=Object(a.useState)(null),f=Object(o.a)(p,2),b=f[0],v=f[1];Object(a.useEffect)((function(){l?E().then((function(e){return e.filter((function(e){return e.userId===l}))})).then(c):E().then(c)}),[l]);return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App__header"},r.a.createElement("label",null,"Select a user: \xa0",r.a.createElement("select",{className:"App__user-selector",onChange:function(e){m(+e.target.value),v(null)}},r.a.createElement("option",{value:"0"},"All users"),r.a.createElement("option",{value:"1"},"Leanne Graham"),r.a.createElement("option",{value:"2"},"Ervin Howell"),r.a.createElement("option",{value:"3"},"Clementine Bauch"),r.a.createElement("option",{value:"4"},"Patricia Lebsack"),r.a.createElement("option",{value:"5"},"Chelsey Dietrich"),r.a.createElement("option",{value:"6"},"Mrs. Dennis Schulist"),r.a.createElement("option",{value:"7"},"Kurtis Weissnat"),r.a.createElement("option",{value:"8"},"Nicholas Runolfsdottir V"),r.a.createElement("option",{value:"9"},"Glenna Reichert"),r.a.createElement("option",{value:"10"},"Leanne Graham")))),r.a.createElement("main",{className:"App__main"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(i,{posts:n,getPost:function(e){v(e!==b?e:null)}})),r.a.createElement("div",{className:"App__content"},b&&r.a.createElement(N,{postID:b}))))};s.a.render(r.a.createElement(w,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.0a65d98d.chunk.js.map