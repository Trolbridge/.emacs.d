"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{1046:function(e,t,A){A.d(t,{w_:function(){return s}});var a=A(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=a.createContext&&a.createContext(n),l=function(){return l=Object.assign||function(e){for(var t,A=1,a=arguments.length;A<a;A++)for(var n in t=arguments[A])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},l.apply(this,arguments)},c=function(e,t){var A={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(A[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(A[a[n]]=e[a[n]])}return A};function i(e){return e&&e.map((function(e,t){return a.createElement(e.tag,l({key:t},e.attr),i(e.child))}))}function s(e){return function(t){return a.createElement(o,l({attr:l({},e.attr)},t),i(e.child))}}function o(e){var t=function(t){var A,n=e.attr,r=e.size,i=e.title,s=c(e,["attr","size","title"]),o=r||t.size||"1em";return t.className&&(A=t.className),e.className&&(A=(A?A+" ":"")+e.className),a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,s,{className:A,style:l(l({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),i&&a.createElement("title",null,i),e.children)};return void 0!==r?a.createElement(r.Consumer,null,(function(e){return t(e)})):t(n)}},5213:function(e,t,A){A.d(t,{Z:function(){return c}});var a=A(7294),n=function(){return a.createElement("div",null,"this is TagsList")},r=A(2357),l=A(5444),c=function(){var e=(0,l.K2)("1058133876").allContentfulRecipe.nodes;return console.log(e),a.createElement("section",{className:"recipes-container"},a.createElement(n,{recipes:e}),a.createElement(r.Z,{recipes:e}))}},9109:function(e,t,A){A.d(t,{Z:function(){return s}});var a=A(7294),n=A(5444),r=A(3750),l=A.p+"static/logo-42d0a9bfc3a025a4e387ed1cc5d2ddda.svg",c=function(){var e=(0,a.useState)(!1),t=e[0],A=e[1];return a.createElement("nav",{className:"navbar"},a.createElement("div",{className:"nav-center"},a.createElement("div",{className:"nav-header"},a.createElement(n.rU,{to:"/"},a.createElement("img",{src:l,alt:"simply recipes"})),a.createElement("button",{className:"nav-btn",onClick:function(){return A(!t)}},a.createElement(r.X_s,null))),a.createElement("div",{className:t?"nav-links show-links":"nav-links"},a.createElement(n.rU,{to:"/",className:"nav-link",activeClassName:"active-link",onClick:function(){return A(!1)}},"home"),a.createElement(n.rU,{to:"/recipes",className:"nav-link",activeClassName:"active-link",onClick:function(){return A(!1)}},"recipes"),a.createElement(n.rU,{to:"/about",className:"nav-link",activeClassName:"active-link",onClick:function(){return A(!1)}},"about"),a.createElement(n.rU,{to:"/tags",className:"nav-link",activeClassName:"active-link",onClick:function(){return A(!1)}},"tags"),a.createElement("div",{className:"nav-link contact-link"},a.createElement(n.rU,{to:"/contact",className:"btn",onClick:function(){return A(!1)}},"contact")))))},i=function(){return a.createElement("footer",{className:"page-footer"},a.createElement("p",null,"© ",(new Date).getFullYear(),a.createElement("span",null,"SimplyRecipes"),"."))},s=function(e){var t=e.children;return a.createElement(a.Fragment,null,a.createElement(c,null),t,a.createElement(i,null))}},2357:function(e,t,A){var a=A(7294),n=A(5444),r=A(6125);t.Z=function(e){var t=e.recipes,A=void 0===t?[]:t;return a.createElement("div",{className:"recipes-list"},A.map((function(e){var t=e.id,A=e.title,l=e.image,c=e.prepTime,i=e.cookTime,s=(0,r.d)(l);return a.createElement(n.rU,{key:t,to:"/"+A,className:"recipe"},a.createElement(r.G,{image:s,className:"recipe-img",alt:A}),a.createElement("h5",null,A),a.createElement("p",null,"Prep : ",c,"min | Cook : ",i,"min"))})))}},7704:function(e,t,A){A.r(t),A.d(t,{default:function(){return c}});var a=A(7294),n=A(9109),r=A(6125),l=A(5213);function c(){return a.createElement(n.Z,null,a.createElement("main",{className:"page"},a.createElement("header",{className:"hero"},a.createElement(r.S,{src:"../assets/images/main.jpeg",alt:"eggs",className:"hero-img",placeholder:"blurred",layout:"fullWidth",__imageData:A(9472)}),a.createElement("div",{className:"hero-container"},a.createElement("div",{className:"hero-text"},a.createElement("h1",null,"Simply Recipes"),a.createElement("h4",null,"no fluff, just recipes")))),a.createElement(l.Z,null)))}},9472:function(e){e.exports=JSON.parse('{"layout":"fullWidth","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEEA//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGZqJNScP/EABsQAQACAgMAAAAAAAAAAAAAAAIBAwAREiEy/9oACAEBAAEFAidJcS7fdb3Fk9pZ/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8BJ//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/AWf/xAAZEAADAQEBAAAAAAAAAAAAAAAAAREhQRD/2gAIAQEABj8C1YWcNQ7xE8//xAAZEAEBAQEBAQAAAAAAAAAAAAABEQAhMUH/2gAIAQEAAT8hjFloipKZ5oEhXvM3p+Hcl/I5VF6zf//aAAwDAQACAAMAAAAQty//xAAWEQEBAQAAAAAAAAAAAAAAAAARACH/2gAIAQMBAT8QBsX/xAAWEQEBAQAAAAAAAAAAAAAAAAARACH/2gAIAQIBAT8QTk3/xAAeEAEAAgEEAwAAAAAAAAAAAAABABEhMUFRYYHB8P/aAAgBAQABPxBmYBVlg7X1GIVsM1VpBVIlDg+18zNjnBKyobmspsL1BJsFq8Y9T//Z"},"images":{"fallback":{"src":"/static/8dcb6bff31d873a27b626d006dda9a98/826b9/main.jpg","srcSet":"/static/8dcb6bff31d873a27b626d006dda9a98/7284f/main.jpg 750w,\\n/static/8dcb6bff31d873a27b626d006dda9a98/826b9/main.jpg 1000w","sizes":"100vw"},"sources":[{"srcSet":"/static/8dcb6bff31d873a27b626d006dda9a98/57584/main.webp 750w,\\n/static/8dcb6bff31d873a27b626d006dda9a98/323e8/main.webp 1000w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.666}')}}]);
//# sourceMappingURL=component---src-pages-index-js-ed097ba1d85ceae05887.js.map