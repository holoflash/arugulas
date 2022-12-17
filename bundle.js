(()=>{"use strict";var e={319:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(81),o=t.n(a),r=t(645),i=t.n(r)()(o());i.push([e.id,".description {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    margin: 0px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.181);\n    padding: 10px;\n    margin: 20px;\n}\n\n.contact,\n.description {\n    font-family: 'Courier New', Courier, monospace;\n    color: white;\n    font-size: min(35px, 3vw);\n}\n\n.contact > {\n    margin: 0px;\n    display: flex;\n}\n\n.material-icons {\n    font-size: 3vh;\n    color: white;\n    font-display: block;\n}\n",""]);const s=i},840:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(81),o=t.n(a),r=t(645),i=t.n(r),s=t(667),c=t.n(s),l=new URL(t(811),t.b),d=i()(o()),p=c()(l);d.push([e.id,"@font-face {\n    font-family: 'Ferrum';\n    src: url '(../fonts/ferrum.otf)' format('otf');\n}\n\nhtml {\n    font-family: 'Ferrum', Times, serif;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\nbody {\n    background-image: url("+p+");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n}\n\n#content {\n    text-align: center;\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    align-items: center;\n}\n\n.middleContent {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.header {\n    width: 100vw;\n    background-color: rgba(0, 0, 0, 0.305);\n    display: flex;\n    flex-direction: row;\n}\n\n.subHeader {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    gap: 10px;\n}\n\n.tabs,\n.main {\n    font-size: min(6vw, 80px);\n    color: rgb(255, 255, 255);\n    height: fit-content;\n    width: fit-content;\n    padding: 2vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    transition: transform 0.2s;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n.main {\n    color: rgb(255, 255, 255);\n    font-style: italic;\n    align-self: flex-start;\n}\n.tabs:hover,\n.main:hover {\n    color: rgb(254, 153, 0);\n    transform: translateY(5%);\n}\n\n.active {\n    color: rgb(254, 153, 0);\n    transform: translateY(5%);\n}\n\n.footer {\n    font-family: 'Courier New', Courier, monospace;\n    font-size: min(35px, 3vw);\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    width: 100%;\n    height: 3vh;\n    color: rgba(255, 255, 255, 0.572);\n    background-color: rgba(0, 0, 0, 0.181);\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.swipeInfo {\n    font-family: 'Courier New', Courier, monospace;\n    font-size: min(100px, 5vw);\n    position: absolute;\n    bottom: 100px;\n    left: 0px;\n    right: 0px;\n    width: 100%;\n    height: 3vh;\n    color: rgba(255, 255, 255, 0.597);\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n@media screen and (min-width: 800px) {\n    .swipeInfo {\n        display: none;\n    }\n}\n",""]);const u=d},838:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(81),o=t.n(a),r=t(645),i=t.n(r)()(o());i.push([e.id,".howdy {\n    margin: 20px;\n    align-self: flex-start;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.379);\n    padding: 10px;\n    width: min(1000px, 85%);\n}\n\n.howdyText {\n    font-family: 'Courier New', Courier, monospace;\n    color: white;\n    font-size: min(35px, 3vw);\n}\n\n@media screen and (max-width: 500px) {\n    .howdy {\n        align-self: center;\n        margin: 20px;\n        line-height: 18px;\n    }\n}\n",""]);const s=i},239:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(81),o=t.n(a),r=t(645),i=t.n(r)()(o());i.push([e.id,".menuItems {\n    font-family: 'Courier New', Courier, monospace;\n    color: white;\n    font-size: min(35px, 3vw);\n    list-style-type: none;\n    padding-left: 0px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.181);\n    padding: 10px;\n    margin: 20px;\n    width: fit-content;\n}\n\n.menuItems > * {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    margin: 20px;\n}\n\n.pizzaTitle {\n    font-size: min(50px, 4vw);\n}\n\n.pizzaDescription {\n    text-align: center;\n}\n",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);a&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},i=[],s=0;s<e.length;s++){var c=e[s],l=a.base?c[0]+a.base:c[0],d=r[l]||0,p="".concat(l," ").concat(d);r[l]=d+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,a);a.byIndex=s,n.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var s=t(r[i]);n[s].references--}for(var c=a(e,o),l=0;l<r.length;l++){var d=t(r[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}r=c}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},811:(e,n,t)=>{e.exports=t.p+"9539ef89c98f23e0eab5.jpg"}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),o=t.n(a),r=t(569),i=t.n(r),s=t(565),c=t.n(s),l=t(216),d=t.n(l),p=t(589),u=t.n(p),m=t(838),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=document.createElement("span"),g=document.createElement("span"),y=document.createElement("span"),v=()=>{const e=document.createElement("div");e.className="middleContent";const n=document.createElement("p");n.className="howdy";const t=document.createElement("tabOne");t.className="howdyText",t.innerText="Looking for a slice of the good life?\n\n    Come on down to Arugula's! We've got all your classic pizzas like margherita, pepperoni, and veggie, but we've also got some unique options like our organic cherry tomato and goat cheese pie or our spicy sausage and mushroom slice.\n\n    Trust us, we take our pizzas seriously. Our dough is made fresh daily and our sauce is made from ripe, organic tomatoes. Plus, we load each pie up with a generous amount of high-quality cheese and meats and fresh veggies. In other words, our pizzas are delicious.\n\n    So don't miss out - come on in and try one today!\n    ",n.appendChild(t),e.appendChild(n),content.appendChild(e)};var x=t(239),b={};b.styleTagTransform=u(),b.setAttributes=c(),b.insert=i().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=d(),n()(x.Z,b),x.Z&&x.Z.locals&&x.Z.locals;var w=t(319),C={};C.styleTagTransform=u(),C.setAttributes=c(),C.insert=i().bind(null,"head"),C.domAPI=o(),C.insertStyleElement=d(),n()(w.Z,C),w.Z&&w.Z.locals&&w.Z.locals;var E=t(840),N={};N.styleTagTransform=u(),N.setAttributes=c(),N.insert=i().bind(null,"head"),N.domAPI=o(),N.insertStyleElement=d(),n()(E.Z,N),E.Z&&E.Z.locals&&E.Z.locals,function(){const e=document.getElementById("content"),n=document.createElement("header");n.className="header";const t=document.createElement("div");t.className="subHeader",h.className="main active",h.textContent="ARUGULA'S",g.className="tabs",g.textContent="- MENU",y.className="tabs",y.textContent="- CONTACT";const a=document.createElement("footer");a.className="footer",a.innerText=`Copyright © ${(new Date).getFullYear()} holoflash`;const o=document.createElement("swipeInfo");o.className="swipeInfo",o.innerText="← SWIPE TO NAVIGATE →",n.appendChild(h),n.appendChild(t),t.appendChild(g),t.appendChild(y),e.appendChild(o),e.appendChild(n),e.appendChild(a)}(),v();let T="frontPage";const z=()=>{const e=document.getElementById("content");e.removeChild(e.lastChild),document.querySelector(".swipeInfo").style.display="none"};h.addEventListener("click",(()=>{T="frontPage",z(),v(),h.classList="main active",g.className="tabs",y.className="tabs"})),g.addEventListener("click",(()=>{T="menuPage",z(),(()=>{const e=document.createElement("div"),n=document.createElement("ol");n.className="menuItems";const t=(e,t,a)=>{const o=document.createElement("li");o.className=`pizza${e}`;const r=document.createElement("div");r.className="pizzaTitle",r.textContent=`${t}`;const i=document.createElement("div");i.className="pizzaDescription",i.textContent=`${a}`,o.appendChild(r),o.appendChild(i),n.appendChild(o)};t("1","Margherita Magic:","Mozzarella, tomatoes, and fresh basil on a traditional pizza crust."),t("2","Pepperoni Party:","Mozzarella and spicy pepperoni on a crispy crust."),t("3","Veggie Delight:","A medley of vegetables, including bell peppers, onions, and mushrooms, on a delicious crust."),t("4","Tomato Goat-o:","Sweet cherry tomatoes, creamy goat cheese, and fresh basil on a crispy crust."),t("5","Sizzlin' Sausage:","Spicy sausage, savory mushrooms, and melty mozzarella on a classic pizza crust."),e.appendChild(n),content.appendChild(e)})(),g.classList="tabs active",h.className="main",y.className="tabs"})),y.addEventListener("click",(()=>{T="contactPage",z(),(()=>{const e=document.createElement("div"),n=document.createElement("div");n.className="contactInfo";const t=document.createElement("div");t.className="location",n.appendChild(t);const a=document.createElement("i");a.className="material-icons",a.innerText="location_on",t.appendChild(a);const o=document.createElement("p");t.className="description",o.innerText="\n    Arugula's Pizzeria\n    12 St. Marks Street\n    Portland Island\n    Liberty City",t.appendChild(o);const r=document.createElement("div");r.className="phone";const i=document.createElement("i");i.className="material-icons",i.innerText="phone",r.appendChild(i);const s=document.createElement("p");r.className="description",s.innerText="\n    555-PIZZA (555-74992)\n    info@arugulas.com",r.appendChild(s),n.appendChild(r);const c=document.createElement("div");c.className="hours";const l=document.createElement("i");l.className="material-icons",l.innerText="schedule",c.appendChild(l);const d=document.createElement("p");c.className="description",d.innerText="\n    Monday-Thursday: 11:00 AM-10:00 PM\n    Friday-Saturday: 11:00 AM-11:00 PM\n    Sunday: 12:00 PM-9:00 PM",c.appendChild(d),n.appendChild(c),e.appendChild(n),content.appendChild(e)})(),y.classList="tabs active",h.className="main",g.className="tabs"}));let P=0,I=0;document.addEventListener("touchstart",(e=>{P=e.changedTouches[0].screenX})),document.addEventListener("touchend",(e=>{I=e.changedTouches[0].screenX,I<P?"frontPage"===T?g.click():"menuPage"===T&&y.click():I>P&&("menuPage"===T?h.click():"contactPage"===T&&g.click())}))})()})();