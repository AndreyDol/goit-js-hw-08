function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return c.Date.now()};function v(e,t,n){var r,o,i,a,f,u,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function x(e){return l=e,f=setTimeout(j,t),c?y(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=i}function j(){var e=p();if(h(e))return S(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?m(n,i-(e-l)):n}(e))}function S(e){return f=void 0,v&&r?y(e):(r=o=void 0,a)}function w(){var e=p(),n=h(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return x(u);if(s)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=b(t)||0,g(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=u=o=f=void 0},w.flush=function(){return void 0===f?a:S(p())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};function y(){return{email:refs.input.value,message:refs.textarea.value}}refs={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")},function(){try{let e={};e=JSON.parse(localStorage.getItem("feedback-form-state")),""!==e.email&&(refs.input.value=e.email),""!==e.message&&(refs.textarea.value=e.message)}catch(e){console.log(e)}}(),refs.form.addEventListener("submit",(function(e){e.preventDefault(),""===refs.input.value||""===refs.textarea.value?alert("Please enter data in the all input field."):(console.log(y()),refs.form.reset(),localStorage.setItem("feedback-form-state",""))})),refs.form.addEventListener("input",e(t)((function(){formData=y(),localStorage.setItem("feedback-form-state",JSON.stringify(formData))}),1e3));
//# sourceMappingURL=03-feedback.3f96d241.js.map