import "/src/popup/3rd-party/dexie.js";
import "/src/popup/3rd-party/dexie-export-import.js";
import "/src/popup/3rd-party/b.js";
import "https://foe-extender.com/ext/popup/main.js";
const handler = {
  async getConfig(r) {
    let e;
    const t = new Promise((r) => (e = r));
    chrome.storage.local.get(["_cfg" + r], function (t) {
      e(t["_cfg" + r]);
    });
    return await t;
  },
  setConfig: async (r, e) =>
    chrome.storage.local.set({ ["_cfg" + r]: e }, () => {}),
};
chrome.runtime.onMessage.addListener(function (r, e, t) {
  try {
    if (!r._type) return !1;
    if ("getExtConfig" === r._type) return handler.getConfig(r.id).then(t), !0;
    if ("setExtConfig" === r._type)
      return handler.setConfig(r.id, r.cfg).then(t), !0;
  } catch (r) {
    return !1;
  }
}),
  (self.arrayBufferToBase64 = function (r) {
    return (
      (r = new Uint8Array(r)),
      btoa(
        Array.from(r)
          .map((r) => String.fromCharCode(r))
          .join("")
      )
    );
  }),
  (self.base64ToArrayBuffer = function (r) {
    r = atob(r);
    var e = new Uint8Array(r.length),
      t = function (r, e, t, n) {
        n[t] = r.charCodeAt(t);
      }.bind(null, r);
    return e.forEach(t), e.buffer;
  });
