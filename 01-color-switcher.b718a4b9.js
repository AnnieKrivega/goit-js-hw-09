const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};let n;function e(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.startBtn.addEventListener("click",(function(){n=setInterval(e,1e3),t.startBtn.disabled=!0})),t.stopBtn.addEventListener("click",(function(){clearInterval(n),t.startBtn.disabled=!1}));
//# sourceMappingURL=01-color-switcher.b718a4b9.js.map