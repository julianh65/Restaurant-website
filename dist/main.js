!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);const o=function(){const e=document.querySelector("#rightSide");console.log("yeeting"),e.innerHTML='\n        <img src="../src/images/sara-dubler-SdxnUyHEKGY-unsplash.jpg" id="image1">\n    '};console.log("page loaded in ✔");const r=document.querySelector("#homeLink"),i=document.querySelector("#menuLink"),c=document.querySelector("#contactLink");o(),r.addEventListener("click",o),i.addEventListener("click",(function(){const e=document.querySelector("#rightSide");console.log("loading menu"),e.innerHTML='\n\n    <div id="menu">\n    <div id="menuTitle"><h2>Menu</h2>\n    </div>\n    <div id="starters"><h3>Starters</h3>\n            <p>Aurier Tomatoes - $28.00</p>\n            <p>Ndombele Salad - $16.00</p>\n            <p>Candy Kane - $34.00</p>\n            <p>Sun Son - $29.00</p>\n    </div>\n    <div id="entrees"><h3>Entrees</h3>\n            <p>Lloris Steak - $58.00</p>\n            <p>Jose Bose - $94.00</p>\n            <p>Sess Chicken - $39.00</p>\n            <p>Sissoko Moussaka - $59.00 </p>\n    </div>\n    </div>\n\n    \n    '})),c.addEventListener("click",(function(){const e=document.querySelector("#rightSide");console.log("loading contact"),e.innerHTML='\n    <div id="contactContainer">\n    <h2>Phone</h2>\n    <p>937 485 39849</p>\n    <h2>Address</h2>\n    <p>459 White Hart Lane</p>\n    <h2>Email</h2>\n    <p>GedsonFernandes@gmoogle.com</p>\n</div>\n'}))}]);