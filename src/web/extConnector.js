{
  const e = window.infoBox.sharedObjectId,
    o = window[e],
    n = window.infoBox.extID,
    r = new Proxy(
      {},
      {
        get:
          (e, o) =>
          (...e) =>
            new Promise((r, i) =>
              chrome.runtime.sendMessage(n, { cmd: o, args: e }, (e) =>
                !e || "error" in e ? i(e && e.error) : r(e.data)
              )
            ),
      }
    );
  o.extension = r;
}
