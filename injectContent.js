{
  let e = {
    main: ["once"],
    vendor: ["once", "primed"],
    internal: ["once", "primed"],
  };
  const t = Date.now().toString(36) + Date.now();
  function scriptLoaded(n, i) {
    e[i].splice(e[i].indexOf(n), 1),
      1 == e.main.length &&
        (e.main.splice(e.main.indexOf("once"), 1),
        window.dispatchEvent(new CustomEvent(t)));
  }
  async function sleep(e) {
    return new Promise((t) => setTimeout(t, e));
  }
  function inject(n = chrome.runtime.getURL("")) {
    function i(t, n = "base", i, o) {
      return new Promise(async (r, a) => {
        let c = document.createElement("script");
        if (
          ((c.src = t),
          "main" === n &&
            (c.setAttribute("data-url", i),
            c.setAttribute("data-id", o),
            c.setAttribute("id", "injector")),
          (t.includes("main.js") || t.includes("loader.js")) &&
            c.setAttribute("type", "module"),
          e[n] && e[n].push(t),
          c.addEventListener("load", function () {
            e[n] && scriptLoaded(t, n), this.remove(), r();
          }),
          c.addEventListener("error", function () {
            this.remove(), a();
          }),
          document.documentElement)
        )
          document.documentElement.appendChild(c);
        else {
          for (; !document.head && !document.documentElement; ) await sleep(0);
          (document.head || document.documentElement).appendChild(c);
        }
      });
    }
    async function o(e) {
      const t = await fetch(e);
      if (200 !== t.status) throw "Error loading json file " + e;
      return t.json();
    }
    const r = new Promise((e) => {
      window.addEventListener(
        t,
        (t) => {
          e();
        },
        { capture: !1, once: !0, passive: !0 }
      );
    });
    chrome.runtime.getManifest().version;
    !(async function (e) {
      try {
        const t = chrome.runtime.id;
        await i(`${e}src/web/drawer.js`, "main", e, t);
        const n = o(`${e}vendor.json`),
          a = o(`${e}internal.json`);
        await r;
        const c = await n;
        for (let t = 0; t < c.length; t++)
          try {
            await i(`${e}src/vendor/${c[t]}.js`, "vendor");
          } catch (e) {}
        scriptLoaded("primed", "vendor");
        const s = await a;
        for (let t = 0; t < s.length; t++) {
          const n = s[t];
          if ("string" == typeof n)
            await i(`${e}src/web/${s[t]}.js`, "internal");
          else {
            const e = n[0],
              t = n[1];
            await i(`${t}/web/${e}.js`, "internal");
          }
        }
        scriptLoaded("primed", "internal");
      } catch (e) {}
    })(n);
    let a = setInterval(function () {
      if (null !== document.head) {
        let e = ["common", "bootstrap"];
        for (let t in e) {
          if (!e.hasOwnProperty(t)) break;
          let i = document.createElement("link");
          (i.href = n + `src/web/css/${e[t]}.css`),
            (i.rel = "stylesheet"),
            document.head.appendChild(i);
        }
        clearInterval(a);
      }
    }, 0);
  }
  inject();
}
