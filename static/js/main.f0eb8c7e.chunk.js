(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={form:"Checkout_form__GPxAF",control:"Checkout_control__7SRpE",actions:"Checkout_actions__1y5v0",submit:"Checkout_submit__3b1JA",invalid:"Checkout_invalid__1JG9m"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1KY9o",total:"Cart_total__28c4S",actions:"Cart_actions__aeMgv","button--alt":"Cart_button--alt__2-9Wb",button:"Cart_button__1UFSL"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__GlatI",summary:"CartItem_summary__3tnpK",price:"CartItem_price__bvg6M",amount:"CartItem_amount__3txIA",actions:"CartItem_actions__1d0NS"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__2tg4P",icon:"HeaderCartButton_icon__XVG9u",badge:"HeaderCartButton_badge__3k91E",bump:"HeaderCartButton_bump__2cXII"}},,,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__3Rl4r",modal:"Modal_modal__2suad","slide-down":"Modal_slide-down__uhtRJ"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__bvPdX","meals-appear":"AvailableMeals_meals-appear__2i345",mealsLoading:"AvailableMeals_mealsLoading__1mJQH",mealsError:"AvailableMeals_mealsError__G5PRo"}},function(e,t,n){e.exports={meal:"MealItem_meal__2AYFR",description:"MealItem_description__20_eP",price:"MealItem_price__SusJ0"}},function(e,t,n){e.exports={header:"Header_header__1DdXQ","main-image":"Header_main-image__1DoKc"}},,,,function(e,t,n){e.exports={card:"Card_card__2pypR"}},function(e,t,n){e.exports={input:"Input_input__2Kg2Y"}},function(e,t,n){e.exports={form:"MealItemForm_form__1nRee"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__WzF_2"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(19),c=n.n(a),r=(n(31),n(2)),s=n(1),i=n(6),o=n(12),l=n(3),u=Object(s.createContext)({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),d=n(10),j=n(13),m=n.n(j),b=n(0),O=function(e){return Object(b.jsx)("div",{className:m.a.backdrop,onClick:e.onClose})},p=function(e){return Object(b.jsx)("div",{className:m.a.modal,children:Object(b.jsx)("div",{className:m.a.content,children:e.children})})},x=document.getElementById("overlays"),h=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(d.createPortal)(Object(b.jsx)(O,{onClose:e.onClose}),x),Object(d.createPortal)(Object(b.jsx)(p,{children:e.children}),x)]})},f=n(5),_=n.n(f),v=n(7),C=n.n(v),y=function(e){var t="$".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:C.a["cart-item"],children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:e.name}),Object(b.jsxs)("div",{className:C.a.summary,children:[Object(b.jsx)("span",{className:C.a.price,children:t}),Object(b.jsxs)("span",{className:C.a.amount,children:["x ",e.amount]})]})]}),Object(b.jsxs)("div",{className:C.a.actions,children:[Object(b.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(b.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},g=n(4),N=n.n(g),A=function(e){return""===e.trim()},I=function(e){var t=Object(s.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useRef)(),o=Object(s.useRef)(),l=Object(s.useRef)(),u=Object(s.useRef)(),d="".concat(N.a.control," ").concat(a.name?"":N.a.invalid),j="".concat(N.a.control," ").concat(a.street?"":N.a.invalid),m="".concat(N.a.control," ").concat(a.postalCode?"":N.a.invalid),O="".concat(N.a.control," ").concat(a.city?"":N.a.invalid);return Object(b.jsxs)("form",{className:N.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=o.current.value,r=l.current.value,s=u.current.value,d=!A(n),j=!A(a),m=5===r.trim().length,b=!A(s);c({name:d,street:j,city:b,postalCode:m}),d&&j&&m&&b&&e.onSubmit({name:n,city:s,street:a,postalCode:r})},children:[Object(b.jsxs)("div",{className:d,children:[Object(b.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(b.jsx)("input",{type:"text",id:"name",ref:i}),!a.name&&Object(b.jsx)("p",{children:"Please enter a valid name!"})]}),Object(b.jsxs)("div",{className:j,children:[Object(b.jsx)("label",{htmlFor:"street",children:"Street"}),Object(b.jsx)("input",{type:"text",id:"street",ref:o}),!a.street&&Object(b.jsx)("p",{children:"Please enter a valid street!"})]}),Object(b.jsxs)("div",{className:m,children:[Object(b.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(b.jsx)("input",{type:"text",id:"postal",ref:l}),!a.postalCode&&Object(b.jsx)("p",{children:"Please enter a valid postal code (5 characters long)!"})]}),Object(b.jsxs)("div",{className:O,children:[Object(b.jsx)("label",{htmlFor:"city",children:"City"}),Object(b.jsx)("input",{type:"text",id:"city",ref:u}),!a.city&&Object(b.jsx)("p",{children:"Please enter a valid city!"})]}),Object(b.jsxs)("div",{className:N.a.actions,children:[Object(b.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(b.jsx)("button",{type:"submit",className:N.a.submit,children:"Confirm"})]})]})},S=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],d=Object(s.useState)(!1),j=Object(r.a)(d,2),m=j[0],O=j[1],p=Object(s.useState)(!1),x=Object(r.a)(p,2),f=x[0],v=x[1],C=Object(s.useState)(null),g=Object(r.a)(C,2),N=g[0],A=g[1],S=Object(s.useContext)(u),k="$".concat(S.totalAmount.toFixed(2)),w=S.items.length>0,M=function(e){S.removeItem(e)},R=function(e){S.addItem(Object(l.a)(Object(l.a)({},e),{},{amount:1}))},E=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.prev=1,e.next=4,fetch("https://react-food-order-app-e92bb-default-rtdb.europe-west1.firebasedatabase.app/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:S.items})});case 4:if((n=e.sent).ok){e.next=7;break}throw new Error("Something went wrong!");case 7:return e.next=9,n.json();case 9:e.sent,O(!1),v(!0),S.clearCart(),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(1),O(!1),A(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}(),F=Object(b.jsx)("ul",{className:_.a["cart-items"],children:S.items.map((function(e){return Object(b.jsx)(y,{name:e.name,amount:e.amount,price:e.price,onRemove:M.bind(null,e.id),onAdd:R.bind(null,e)},e.id)}))}),P=Object(b.jsxs)("div",{className:_.a.actions,children:[Object(b.jsx)("button",{className:_.a["button--alt"],onClick:e.onClose,children:"Close"}),w&&Object(b.jsx)("button",{className:_.a.button,onClick:function(){c(!0)},children:"Order"})]}),H=Object(b.jsxs)(b.Fragment,{children:[F,Object(b.jsxs)("div",{className:_.a.total,children:[Object(b.jsx)("span",{children:"Total Amount"}),Object(b.jsx)("span",{children:k})]}),a&&Object(b.jsx)(I,{onCancel:e.onClose,onSubmit:E}),!a&&P]}),T=Object(b.jsx)("p",{children:"Sending order data..."}),D=Object(b.jsx)("p",{children:"It seems that there were some error. Please try again later."}),J=Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{children:"Successfully sent the order!"}),Object(b.jsx)("div",{className:_.a.actions,children:Object(b.jsx)("button",{className:_.a.button,onClick:e.onClose,children:"Close"})})]});return Object(b.jsxs)(h,{onClose:e.onClose,children:[!m&&!f&&!N&&H,m&&T,N&&D,f&&J]})},k=n.p+"static/media/meals.2971f633.jpg",w=n(16),M=n.n(w),R=function(){return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(b.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},E=n(9),F=n.n(E),P=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useContext)(u),o=i.items.reduce((function(e,t){return e+t.amount}),0),l="".concat(F.a.button," ").concat(a&&F.a.bump);return Object(s.useEffect)((function(){if(0!==i.items.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[i.items]),Object(b.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(b.jsx)("span",{className:F.a.icon,children:Object(b.jsx)(R,{})}),Object(b.jsx)("span",{children:"Your Cart"}),Object(b.jsx)("span",{className:F.a.badge,children:o})]})},H=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("header",{className:M.a.header,children:[Object(b.jsx)("h1",{children:"ReactMeals"}),Object(b.jsx)(P,{onClick:e.onShowCart})]}),Object(b.jsx)("div",{className:M.a["main-image"],children:Object(b.jsx)("img",{src:k,alt:"A table full of delicious food!"})})]})},T=n(20),D=n.n(T),J=function(e){return Object(b.jsx)("div",{className:"".concat(D.a.card," ").concat(e.className),children:e.children})},B=n(14),L=n.n(B),Y=n(15),G=n.n(Y),z=n(21),K=n.n(z),V=Object(s.forwardRef)((function(e,t){return Object(b.jsxs)("div",{className:K.a.input,children:[Object(b.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(b.jsx)("input",Object(l.a)({ref:t},e.input))]})})),X=n(22),$=n.n(X),Q=function(e){var t=Object(s.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useRef)();return Object(b.jsxs)("form",{className:$.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(b.jsx)(V,{ref:i,label:"Amount",input:{id:"amount_".concat(e.id),type:"number",min:1,max:5,step:1,defaultValue:"1"}}),Object(b.jsx)("button",{type:"submit",children:"+ Add"}),!a&&Object(b.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},W=function(e){var t=Object(s.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:G.a.meal,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("div",{className:G.a.description,children:e.description}),Object(b.jsx)("div",{className:G.a.price,children:n})]}),Object(b.jsx)("div",{children:Object(b.jsx)(Q,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},q=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(!0),u=Object(r.a)(c,2),d=u[0],j=u[1],m=Object(s.useState)(null),O=Object(r.a)(m,2),p=O[0],x=O[1];if(Object(s.useEffect)((function(){var e=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,n,c,r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-food-order-app-e92bb-default-rtdb.europe-west1.firebasedatabase.app/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)c.push(Object(l.a)({id:r},n[r]));a(c),j(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){j(!1),x(e.message)}))}),[]),d)return Object(b.jsx)("section",{className:L.a.mealsLoading,children:Object(b.jsx)("p",{children:"Loading..."})});if(p)return Object(b.jsx)("section",{className:L.a.mealsError,children:Object(b.jsx)("p",{children:p})});var h=n.map((function(e){return Object(b.jsx)(W,{id:e.id,name:e.name,price:e.price,description:e.description},e.id)}));return Object(b.jsx)("section",{className:L.a.meals,children:Object(b.jsx)(J,{children:Object(b.jsx)("ul",{children:h})})})},U=n(23),Z=n.n(U),ee=function(){return Object(b.jsxs)("section",{className:Z.a.summary,children:[Object(b.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(b.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(b.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},te=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(ee,{}),Object(b.jsx)(q,{})]})},ne=n(17),ae={items:[],totalAmount:0},ce=function(e,t){if("ADD_ITEM"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var s=Object(l.a)(Object(l.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ne.a)(e.items))[c]=s}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE_ITEM"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.id})),u=e.items[o],d=e.totalAmount-u.price;if(1===u.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var j=Object(l.a)(Object(l.a)({},u),{},{amount:u.amount-1});(i=Object(ne.a)(e.items))[o]=j}return{items:i,totalAmount:d}}return t.type,ae},re=function(e){var t=Object(s.useReducer)(ce,ae),n=Object(r.a)(t,2),a=n[0],c=n[1],i={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD_ITEM",item:e})},removeItem:function(e){c({type:"REMOVE_ITEM",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(b.jsx)(u.Provider,{value:i,children:e.children})};var se=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)(re,{children:[n&&Object(b.jsx)(S,{onClose:function(){a(!1)}}),Object(b.jsx)(H,{onShowCart:function(){a(!0)}}),Object(b.jsx)("main",{children:Object(b.jsx)(te,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(b.jsx)(se,{}))}],[[33,1,2]]]);
//# sourceMappingURL=main.f0eb8c7e.chunk.js.map