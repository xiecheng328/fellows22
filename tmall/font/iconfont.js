(function(window){var svgSprite='<svg><symbol id="icon-gouwuche" viewBox="0 0 1024 1024"><path d="M935.488 179.904c18.752 19.744 27.2 47.264 23.744 76.096l-50.336 268.448c-5.504 41.76-45.824 75.584-91.872 75.584l-430.88 29.568c-0.832 0.224-1.792 0.224-2.496 0.224-16.576 0-30.656-11.968-31.84-27.616-1.216-16.512 12.032-30.624 29.44-31.936l433.152-29.792c15.872-0.128 29.216-11.744 31.04-25.024l50.336-268.416c1.184-10.048-1.792-21.056-8.128-27.776a20.8 20.8 0 0 0-15.392-6.464H319.456c-17.664 0-32-13.376-32-29.76 0-16.416 14.464-29.792 32-29.792h552.928c24.448 0 46.752 9.44 63.104 26.656z m-73.28 509.504c14.528 0 32 15.232 32 31.872 0 16.384-14.208 32-32 32H343.68c-46.08 0-86.496-38.144-92.096-81.472L197.408 316.16l-30.784-166.272C164.704 135.296 150.496 128 136.64 128H95.968C78.304 128 64 110.176 64 93.76 64 77.44 78.432 64 96 64h40.64c46.528 0 87.52 29.76 94.08 85.888l29.76 166.272 54.336 347.776c1.792 13.856 15.264 25.472 28.736 25.472h518.688zM320 896s0 35.36 0 0a64 64 0 1 1 128 0 64 64 0 0 1-128 0z m384 0s0 35.36 0 0a64 64 0 1 1 128 0 64 64 0 0 1-128 0z" fill="#000000" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)