{let d={main:["once"],vendor:["once","primed"],internal:["once","primed"]};const b=Date.now().toString(36)+Date.now();function scriptLoaded(e,t){d[t].splice(d[t].indexOf(e),1),1==d.main.length&&(d.main.splice(d.main.indexOf("once"),1),window.dispatchEvent(new CustomEvent(b)))}async function sleep(t){return new Promise(e=>setTimeout(e,t))}function inject(i=chrome.runtime.getURL("")){function a(i,r="base",o,a){return new Promise(async(e,t)=>{let n=document.createElement("script");if(n.src=i,"main"===r&&(n.setAttribute("data-url",o),n.setAttribute("data-id",a),n.setAttribute("id","injector")),i.includes("main.js")&&n.setAttribute("type","module"),d[r]&&d[r].push(i),n.addEventListener("load",function(){d[r]&&scriptLoaded(i,r),this.remove(),e()}),n.addEventListener("error",function(){this.remove(),t()}),document.documentElement)document.documentElement.appendChild(n);else{for(;!document.head&&!document.documentElement;)await sleep(0);(document.head||document.documentElement).appendChild(n)}})}async function c(e){const t=await fetch(e);if(200!==t.status)throw"Error loading json file "+e;return t.json()}const s=new Promise(t=>{window.addEventListener(b,e=>{t()},{capture:!1,once:!0,passive:!0})});chrome.runtime.getManifest().version;!async function(t){try{var e=chrome.runtime.id,n=(await a(t+"src/web/drawer.js","main",t,e),c(t+"vendor.json")),i=c(t+"internal.json"),r=(await s,await n);for(let e=0;e<r.length;e++)try{await a(`${t}src/vendor/${r[e]}.js`,"vendor")}catch(e){}scriptLoaded("primed","vendor");var o=await i;for(let e=0;e<o.length;e++)await a(`${t}src/web/${o[e]}.js`,"internal");scriptLoaded("primed","internal")}catch(e){}}(i);let e=setInterval(function(){if(null!==document.head){let t=["common","bootstrap"];for(var n in t){if(!t.hasOwnProperty(n))break;let e=document.createElement("link");e.href=i+`src/web/css/${t[n]}.css`,e.rel="stylesheet",document.head.appendChild(e)}clearInterval(e)}},0)}inject()}