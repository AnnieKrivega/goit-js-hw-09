!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("6JpON"),u={button:document.querySelector("button"),form:document.querySelector("form"),delayInput:document.querySelector('input[name="delay"]'),stepInput:document.querySelector('input[name="step"]'),amountInput:document.querySelector('input[name="amount"]')};function i(e,n){var t=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){t?o({position:e,delay:n}):r({position:e,delay:n})}),n)}))}u.form.addEventListener("submit",(function(e){e.preventDefault();var n=Number(u.delayInput.value),t=Number(u.stepInput.value),o=Number(u.amountInput.value);if(n<0||t<0||o<0)r.Notify.warning("Enter number more than 0");else if(0===Number(o))r.Notify.warning("Enter number more than 0");else for(var a=0;a<o;a++)i(a,n+t*a).then((function(e){var n=e.position,t=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(n+1," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;r.Notify.failure("❌ Rejected promise ".concat(n+1," in ").concat(t,"ms"))}))}))}();
//# sourceMappingURL=03-promises.d12e6562.js.map