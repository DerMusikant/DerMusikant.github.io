(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[553],{373:(t,e,n)=>{"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,{Z:()=>f});var f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(s,t);var e,n,o,f,l=(o=s,f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=u(o);if(f){var n=u(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return i(this,t)});function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=l.call(this,t)).handleIntersection=e.handleIntersection.bind(a(e)),e.state={trans:{fromLeft:"translate(-100px, 0)",fromRight:"translate(100px, 0)",fromBot:"translate(0, 100px)",flip:"rotateY(180deg)"}},e}return e=s,(n=[{key:"componentDidMount",value:function(){var t=this;this.observer=new IntersectionObserver(this.handleIntersection,{threshold:.2}),document.querySelectorAll(".anim").forEach((function(e){e.classList.add("hide"),e.style.transform="".concat(t.state.trans[e.dataset.trans]," scale(").concat(e.dataset.scale||1,")"),e.style.transition="all 1s ease ".concat(e.dataset.delay||"0s"),t.observer.observe(e)}))}},{key:"handleIntersection",value:function(t){var e=this;t.forEach((function(t){t.intersectionRatio>.2&&(t.target.classList.remove("hide"),t.target.style.transform="",e.observer.unobserve(t.target))}))}}])&&r(e.prototype,n),s}(n(294).Component)},553:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>ct});var o=n(294),r=n(373),c=n(497),i=n(344);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(h,t);var e,n,r,a,b=(r=h,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(r);if(a){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return s(this,t)});function h(){var t;u(this,h);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return m(p(t=b.call.apply(b,[this].concat(n))),"handleClick",(function(){document.getElementById("homeServices").scrollIntoView({behavior:"smooth"})})),t}return e=h,(n=[{key:"render",value:function(){return o.createElement(i.Z,{title:"A Dragon is inside your website",description:o.createElement("p",null,"I use the fire of wisdom to help your business outstand on the internet.",o.createElement("br",null),"Together we can make the best dragon for your future company's website."),img:c,alt:"Dragon logo",click:this.handleClick,button:"Learn More"})}}])&&f(e.prototype,n),h}(o.Component);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(a,t);var e,n,r,c,i=(r=a,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(c){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return g(this,t)});function a(){return d(this,a),i.apply(this,arguments)}return e=a,(n=[{key:"render",value:function(){return o.createElement("div",{className:this.props.className,"data-delay":this.props.delay,"data-trans":this.props.trans},o.createElement("div",{className:"card bg-gradient-to-r from-red-600 to-red-main plat flex flex-col items-center"},o.createElement("h3",{className:"my-2 underline font-bold text-xl"},this.props.title),o.createElement("div",{className:"bg-platinum p-3 w-2/3 rounded-3xl"},o.createElement("img",{src:this.props.img,alt:this.props.alt})),o.createElement("p",{className:"w-4/5 my-2 font-semibold"},this.props.info)))}}])&&v(e.prototype,n),a}(o.Component),_=n(727);function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function T(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function R(t,e){return(R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function P(t,e){return!e||"object"!==j(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}(a,t);var e,n,r,c,i=(r=a,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(r);if(c){var n=x(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return P(this,t)});function a(){return T(this,a),i.apply(this,arguments)}return e=a,(n=[{key:"render",value:function(){return o.createElement(_.rU,{to:this.props.link,className:"button button-content text-center h-auto w-full anim plat bg-gradient-to-r from-red-600 to-red-main p-2 rounded-full"},this.props.content)}}])&&S(e.prototype,n),a}(o.Component);function N(t){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function C(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function I(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function B(t,e){return(B=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function M(t,e){return!e||"object"!==N(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function D(t){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&B(t,e)}(u,t);var e,n,r,i,a=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=D(r);if(i){var n=D(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return M(this,t)});function u(){return C(this,u),a.apply(this,arguments)}return e=u,(n=[{key:"render",value:function(){return o.createElement("section",{id:"homeServices",className:"my-5"},o.createElement("div",{className:"grid grid-cols-2 lg:flex-row justify-items-center items-center text-center"},o.createElement("div",{className:"row-start-2 col-span-2 grid grid-cols-2 gap-y-5 justify-items-center items-start lg:col-auto lg:row-span-5"},o.createElement(E,{className:"anim w-3/4 col-span-2 xs:col-span-1 xs:row-span-2",img:c,alt:"",trans:"fromLeft",delay:"0.4s",title:"Test title",info:"Test info Test info Test info Test info Test info Test info Test"}),o.createElement(E,{className:"anim w-3/4 col-span-2 xs:col-span-1 xs:row-span-2",img:c,alt:"",trans:"fromRight",title:"Test title",info:"Test info Test info Test info Test info Test info Test info Test info Test info Test info Test info "}),o.createElement(E,{className:"anim w-3/4 col-span-2 xs:col-span-1 xs:row-span-2",img:c,alt:"",trans:"fromLeft",delay:"0.4s",title:"Test title",info:"Test info Test info Test info Test info Test info Test info Test info Test"}),o.createElement(E,{className:"anim w-3/4 col-span-2 xs:col-span-1 xs:row-span-2",img:c,alt:"",trans:"fromRight",title:"Test title",info:"Test info Test info Test info Test info Test info Test info Test info Test info Test info Test info "})),o.createElement("div",{className:"flex flex-col lg:text-left col-span-2 lg:col-auto lg:row-span-3 lg:self-end"},o.createElement("h3",{className:"rmain text-xl font-medium my-3"},"Main Services Title"),o.createElement("p",{className:"my-10"},"Main Details Information before cards Main Details Information before cards Main Details Information before cards Main Details Information before cards Main Details Information before cards Main Details Information before cards Main Details Information before cards Main Details Information before cards Main Details Information before cards ")),o.createElement("div",{className:"button col-span-2 my-8 lg:my-0 lg:self-start lg:col-auto lg:row-span-2"},o.createElement(k,{content:"Check out Services!",link:"/services"}))))}}])&&I(e.prototype,n),u}(o.Component),A=n(830);function Z(t){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function U(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function q(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function G(t,e){return(G=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function V(t,e){return!e||"object"!==Z(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function W(t){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&G(t,e)}(a,t);var e,n,r,c,i=(r=a,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=W(r);if(c){var n=W(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return V(this,t)});function a(){return U(this,a),i.apply(this,arguments)}return e=a,(n=[{key:"render",value:function(){return o.createElement("section",{className:"w-full flex flex-col items-center"},o.createElement("h3",null,"Technologies I work with:"),o.createElement(A.Z,null),o.createElement("p",null,"Want to know more about my skills?"),o.createElement("div",{className:"button my-5"},o.createElement(k,{link:"/about",content:"Go to: About"})))}}])&&q(e.prototype,n),a}(o.Component);function z(t){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function F(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function H(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function J(t,e){return(J=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function K(t,e){return!e||"object"!==z(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Q(t){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var X=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&J(t,e)}(u,t);var e,n,r,i,a=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Q(r);if(i){var n=Q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return K(this,t)});function u(){return F(this,u),a.apply(this,arguments)}return e=u,(n=[{key:"render",value:function(){return o.createElement("div",{className:"anim w-3/4 my-3 shadow-2xl grid justify-items-center items-center text-center sm:grid-cols-2","data-trans":"flip"},o.createElement("div",{className:"relative text-6xl my-5"},o.createElement("h3",{className:"font-style"},"Thank you!"),o.createElement("span",{className:"text-base absolute -right-6 -bottom-2"},"for visiting...")),o.createElement("p",{className:"sm:row-start-2"},"I really wish to build a long term relationship with you!"),o.createElement("img",{className:"anim w-3/5 py-5 sm:row-span-3","data-delay":"0.5s","data-trans":"flip",alt:"",src:c}),o.createElement("div",null,o.createElement("div",{className:"my-5"},o.createElement(_.rU,{to:"/contact",className:"contact-me plat bg-red-main p-3 w-full lg:w-auto hover:bg-platinum",onClick:this.handleClick},"Contact Me!")),o.createElement("p",null,"for more info... or just to say hello!")))}}])&&H(e.prototype,n),u}(o.Component);function $(t){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function tt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function et(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function nt(t,e){return(nt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ot(t,e){return!e||"object"!==$(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function rt(t){return(rt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var ct=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&nt(t,e)}(a,t);var e,n,r,c,i=(r=a,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=rt(r);if(c){var n=rt(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return ot(this,t)});function a(){return tt(this,a),i.apply(this,arguments)}return e=a,(n=[{key:"render",value:function(){return o.createElement("main",null,o.createElement(b,null),o.createElement(L,null),o.createElement(Y,null),o.createElement(X,null))}}])&&et(e.prototype,n),a}(r.Z)}}]);