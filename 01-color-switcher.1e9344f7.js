!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body");function r(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(t){timerId=setInterval((function(){n.style.backgroundColor=r}),1e3)})),e.addEventListener("click",(function(t){clearInterval(timerId)}))}();
//# sourceMappingURL=01-color-switcher.1e9344f7.js.map