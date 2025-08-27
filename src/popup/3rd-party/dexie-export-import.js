!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports, require("dexie"))
    : "function" == typeof define && define.amd
    ? define(["exports", "dexie"], t)
    : t((e.DexieExportImport = {}), e.Dexie);
})(this || globalThis, function (e, t) {
  "use strict";
  var n, r, i, o, a, s, u, c, f, l, p, d, y, h, b, v, g, m, w, O, E;
  function A(e, t, n, r) {
    return new (n || (n = Promise))(function (i, o) {
      function a(e) {
        try {
          u(r.next(e));
        } catch (e) {
          o(e);
        }
      }
      function s(e) {
        try {
          u(r.throw(e));
        } catch (e) {
          o(e);
        }
      }
      function u(e) {
        e.done
          ? i(e.value)
          : new n(function (t) {
              t(e.value);
            }).then(a, s);
      }
      u((r = r.apply(e, t || [])).next());
    });
  }
  function S(e, t) {
    var n,
      r,
      i,
      o,
      a = {
        label: 0,
        sent: function () {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (o = { next: s(0), throw: s(1), return: s(2) }),
      "function" == typeof Symbol &&
        (o[Symbol.iterator] = function () {
          return this;
        }),
      o
    );
    function s(o) {
      return function (s) {
        return (function (o) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; a; )
            try {
              if (
                ((n = 1),
                r &&
                  (i =
                    2 & o[0]
                      ? r.return
                      : o[0]
                      ? r.throw || ((i = r.return) && i.call(r), 0)
                      : r.next) &&
                  !(i = i.call(r, o[1])).done)
              )
                return i;
              switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                case 0:
                case 1:
                  i = o;
                  break;
                case 4:
                  return a.label++, { value: o[1], done: !1 };
                case 5:
                  a.label++, (r = o[1]), (o = [0]);
                  continue;
                case 7:
                  (o = a.ops.pop()), a.trys.pop();
                  continue;
                default:
                  if (
                    !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                    (6 === o[0] || 2 === o[0])
                  ) {
                    a = 0;
                    continue;
                  }
                  if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                    a.label = o[1];
                    break;
                  }
                  if (6 === o[0] && a.label < i[1]) {
                    (a.label = i[1]), (i = o);
                    break;
                  }
                  if (i && a.label < i[2]) {
                    (a.label = i[2]), a.ops.push(o);
                    break;
                  }
                  i[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }
              o = t.call(e, a);
            } catch (e) {
              (o = [6, e]), (r = 0);
            } finally {
              n = i = 0;
            }
          if (5 & o[0]) throw o[1];
          return { value: o[0] ? o[1] : void 0, done: !0 };
        })([o, s]);
      };
    }
  }
  function T(e, t) {
    return new Promise(function (n, r) {
      var i = new FileReader();
      (i.onabort = function (e) {
        return r(new Error("file read aborted"));
      }),
        (i.onerror = function (e) {
          return r(e.target.error);
        }),
        (i.onload = function (e) {
          return n(e.target.result);
        }),
        "binary" === t ? i.readAsArrayBuffer(e) : i.readAsText(e);
    });
  }
  function N(e, t) {
    var n;
    if ("undefined" == typeof FileReaderSync)
      throw new Error(
        "FileReaderSync missing. Reading blobs synchronously requires code to run from within a web worker. Use TSON.encapsulateAsync() to do it from the main thread."
      );
    return (
      (n = new FileReaderSync()),
      "binary" === t ? n.readAsArrayBuffer(e) : n.readAsText(e)
    );
  }
  function j(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  for (
    t = t && t.hasOwnProperty("default") ? t.default : t,
      n =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      r = j(function (e, t) {
        e.exports = (function () {
          var e =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  },
            t = function (e, t) {
              if (Array.isArray(e)) return e;
              if ((Symbol.iterator in Object(e)))
                return (function (e, t) {
                  var n,
                    r,
                    i = [],
                    o = !0,
                    a = !1,
                    s = void 0;
                  try {
                    for (
                      r = e[Symbol.iterator]();
                      !(o = (n = r.next()).done) &&
                      (i.push(n.value), !t || i.length !== t);
                      o = !0
                    );
                  } catch (e) {
                    (a = !0), (s = e);
                  } finally {
                    try {
                      !o && r.return && r.return();
                    } finally {
                      if (a) throw s;
                    }
                  }
                  return i;
                })(e, t);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            },
            n = function (e) {
              if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++)
                  n[t] = e[t];
                return n;
              }
              return Array.from(e);
            },
            r = Object.keys,
            i = Array.isArray,
            o = {}.toString,
            a = Object.getPrototypeOf,
            s = {}.hasOwnProperty,
            u = s.toString,
            c = ["type", "replaced", "iterateIn", "iterateUnsetNumeric"];
          function f(e, t) {
            return (
              h.isObject(e) &&
              "function" == typeof e.then &&
              (!t || "function" == typeof e.catch)
            );
          }
          function l(e) {
            return o.call(e).slice(8, -1);
          }
          function p(t, n) {
            var r, i;
            return !(
              !t ||
              "object" !== (void 0 === t ? "undefined" : e(t)) ||
              !(r = a(t)) ||
              ("function" !=
              typeof (i = s.call(r, "constructor") && r.constructor)
                ? null !== n
                : "function" != typeof i ||
                  null === n ||
                  u.call(i) !== u.call(n))
            );
          }
          function d(e) {
            return !(!e || "Object" !== l(e)) && (!a(e) || p(e, Object));
          }
          function y(t) {
            return t && "object" === (void 0 === t ? "undefined" : e(t));
          }
          function h(o) {
            var a,
              s,
              u,
              l = [],
              g = [],
              E = {},
              A = (this.types = {}),
              S = (this.stringify = function (e, t, n, r) {
                r = Object.assign({}, o, r, { stringification: !0 });
                var a = s(e, null, r);
                return i(a)
                  ? JSON.stringify(a[0], t, n)
                  : a.then(function (e) {
                      return JSON.stringify(e, t, n);
                    });
              });
            (this.stringifySync = function (e, t, n, r) {
              return S(
                e,
                t,
                n,
                Object.assign({}, { throwOnBadSyncType: !0 }, r, { sync: !0 })
              );
            }),
              (this.stringifyAsync = function (e, t, n, r) {
                return S(
                  e,
                  t,
                  n,
                  Object.assign({}, { throwOnBadSyncType: !0 }, r, { sync: !1 })
                );
              }),
              (a = this.parse =
                function (e, t, n) {
                  return (
                    (n = Object.assign({}, o, n, { parse: !0 })),
                    u(JSON.parse(e, t), n)
                  );
                }),
              (this.parseSync = function (e, t, n) {
                return a(
                  e,
                  t,
                  Object.assign({}, { throwOnBadSyncType: !0 }, n, { sync: !0 })
                );
              }),
              (this.parseAsync = function (e, t, n) {
                return a(
                  e,
                  t,
                  Object.assign({}, { throwOnBadSyncType: !0 }, n, { sync: !1 })
                );
              }),
              (this.specialTypeNames = function (e, t) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                return (n.returnTypeNames = !0), this.encapsulate(e, t, n);
              }),
              (this.rootTypeName = function (e, t) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                return (n.iterateNone = !0), this.encapsulate(e, t, n);
              }),
              (s = this.encapsulate =
                function (a, s, u) {
                  var f = (u = Object.assign({ sync: !0 }, o, u)).sync,
                    b = {},
                    m = [],
                    w = [],
                    A = [],
                    S = !(u && ("cyclic" in u)) || u.cyclic,
                    T = u.encapsulateObserver,
                    N = B("", a, S, s || {}, A);
                  function j(e) {
                    var t = Object.values(b);
                    if (u.iterateNone)
                      return t.length ? t[0] : h.getJSONType(e);
                    if (t.length) {
                      if (u.returnTypeNames) return [].concat(n(new Set(t)));
                      e && d(e) && !e.hasOwnProperty("$types")
                        ? (e.$types = b)
                        : (e = { $: e, $types: { $: b } });
                    } else
                      y(e) &&
                        e.hasOwnProperty("$types") &&
                        (e = { $: e, $types: !0 });
                    return !u.returnTypeNames && e;
                  }
                  return A.length
                    ? f && u.throwOnBadSyncType
                      ? (function () {
                          throw new TypeError(
                            "Sync method requested but async result obtained"
                          );
                        })()
                      : Promise.resolve(
                          (function e(n, r) {
                            return Promise.all(
                              r.map(function (e) {
                                return e[1].p;
                              })
                            )
                              .then(function (i) {
                                return Promise.all(
                                  i.map(function (i) {
                                    var o = [],
                                      a = r.splice(0, 1)[0],
                                      s = t(a, 7),
                                      u = s[0],
                                      c = s[2],
                                      f = s[3],
                                      l = s[4],
                                      d = s[5],
                                      y = s[6],
                                      h = B(u, i, c, f, o, !0, y),
                                      b = p(h, O);
                                    return u && b
                                      ? h.p.then(function (t) {
                                          return (l[d] = t), e(n, o);
                                        })
                                      : (u ? (l[d] = h) : (n = b ? h.p : h),
                                        e(n, o));
                                  })
                                );
                              })
                              .then(function () {
                                return n;
                              });
                          })(N, A)
                        ).then(j)
                    : !f && u.throwOnBadSyncType
                    ? (function () {
                        throw new TypeError(
                          "Async method requested but sync result obtained"
                        );
                      })()
                    : u.stringification && f
                    ? [j(N)]
                    : f
                    ? j(N)
                    : Promise.resolve(j(N));
                  function _(e, t, n) {
                    Object.assign(e, t);
                    var r = c.map(function (t) {
                      var n = e[t];
                      return delete e[t], n;
                    });
                    n(),
                      c.forEach(function (t, n) {
                        e[t] = r[n];
                      });
                  }
                  function B(t, n, o, a, s, c, f) {
                    var y,
                      g,
                      E,
                      A,
                      S,
                      N,
                      j,
                      C,
                      U,
                      I,
                      L = void 0,
                      P = {},
                      k = void 0 === n ? "undefined" : e(n),
                      R = T
                        ? function (e) {
                            var r = f || a.type || h.getJSONType(n);
                            T(
                              Object.assign(
                                e || P,
                                {
                                  keypath: t,
                                  value: n,
                                  cyclic: o,
                                  stateObj: a,
                                  promisesData: s,
                                  resolvingTypesonPromise: c,
                                  awaitingTypesonPromise: p(n, O),
                                },
                                void 0 !== r ? { type: r } : {}
                              )
                            );
                          }
                        : null;
                    if (
                      (k in { string: 1, boolean: 1, number: 1, undefined: 1 })
                    )
                      return (
                        void 0 === n ||
                        ("number" === k &&
                          (isNaN(n) || n === -1 / 0 || n === 1 / 0))
                          ? (L = x(t, n, a, s, !1, c, R)) !== n &&
                            (P = { replaced: L })
                          : (L = n),
                        R && R(),
                        L
                      );
                    if (null === n) return R && R(), n;
                    if (o && !a.iterateIn && !a.iterateUnsetNumeric) {
                      if (!((y = m.indexOf(n)) < 0))
                        return (
                          (b[t] = "#"),
                          R && R({ cyclicKeypath: w[y] }),
                          "#" + w[y]
                        );
                      !0 === o && (m.push(n), w.push(t));
                    }
                    if (
                      ((g = d(n)),
                      (E = i(n)),
                      (A =
                        ((g || E) && (!l.length || a.replaced)) || a.iterateIn
                          ? n
                          : x(t, n, a, s, g || E, null, R)),
                      (S = void 0),
                      A !== n
                        ? ((L = A), (P = { replaced: A }))
                        : E || "array" === a.iterateIn
                        ? ((S = new Array(n.length)), (P = { clone: S }))
                        : g || "object" === a.iterateIn
                        ? (P = { clone: (S = {}) })
                        : "" === t && p(n, O)
                        ? (s.push([t, n, o, a, void 0, void 0, a.type]),
                          (L = n))
                        : (L = n),
                      R && R(),
                      u.iterateNone)
                    )
                      return S || L;
                    if (!S) return L;
                    if (a.iterateIn) {
                      for (j in ((N = function (e) {
                        var r = { ownKeys: n.hasOwnProperty(e) };
                        _(a, r, function () {
                          var r = t + (t ? "." : "") + v(e),
                            i = B(r, n[e], !!o, a, s, c);
                          p(i, O)
                            ? s.push([r, i, !!o, a, S, e, a.type])
                            : void 0 !== i && (S[e] = i);
                        });
                      }),
                      n))
                        N(j);
                      R && R({ endIterateIn: !0, end: !0 });
                    } else
                      r(n).forEach(function (e) {
                        var r = t + (t ? "." : "") + v(e);
                        _(a, { ownKeys: !0 }, function () {
                          var t = B(r, n[e], !!o, a, s, c);
                          p(t, O)
                            ? s.push([r, t, !!o, a, S, e, a.type])
                            : void 0 !== t && (S[e] = t);
                        });
                      }),
                        R && R({ endIterateOwn: !0, end: !0 });
                    if (a.iterateUnsetNumeric) {
                      for (
                        C = n.length,
                          U = function (e) {
                            if (!(e in n)) {
                              var r = t + (t ? "." : "") + e;
                              _(a, { ownKeys: !1 }, function () {
                                var t = B(r, void 0, !!o, a, s, c);
                                p(t, O)
                                  ? s.push([r, t, !!o, a, S, e, a.type])
                                  : void 0 !== t && (S[e] = t);
                              });
                            }
                          },
                          I = 0;
                        I < C;
                        I++
                      )
                        U(I);
                      R && R({ endIterateUnsetNumeric: !0, end: !0 });
                    }
                    return S;
                  }
                  function x(e, t, n, r, i, o, a) {
                    var s, u, c, p, d;
                    for (u = (s = i ? l : g).length; u--; )
                      if ((c = s[u]).test(t, n))
                        return (
                          (p = c.type),
                          E[p] && ((d = b[e]), (b[e] = d ? [p].concat(d) : p)),
                          Object.assign(n, { type: p, replaced: !0 }),
                          (!f && c.replaceAsync) || c.replace
                            ? (a && a({ replacing: !0 }),
                              B(
                                e,
                                c[
                                  f || !c.replaceAsync
                                    ? "replace"
                                    : "replaceAsync"
                                ](t, n),
                                S && "readonly",
                                n,
                                r,
                                o,
                                p
                              ))
                            : (a && a({ typeDetected: !0 }),
                              B(e, t, S && "readonly", n, r, o, p))
                        );
                    return t;
                  }
                }),
              (this.encapsulateSync = function (e, t, n) {
                return s(
                  e,
                  t,
                  Object.assign({}, { throwOnBadSyncType: !0 }, n, { sync: !0 })
                );
              }),
              (this.encapsulateAsync = function (e, t, n) {
                return s(
                  e,
                  t,
                  Object.assign({}, { throwOnBadSyncType: !0 }, n, { sync: !1 })
                );
              }),
              (u = this.revive =
                function (e, n) {
                  var a,
                    s,
                    u,
                    c = (n = Object.assign({ sync: !0 }, o, n)).sync,
                    l = e && e.$types,
                    y = !0;
                  return l
                    ? !0 === l
                      ? e.$
                      : (l.$ && d(l.$) && ((e = e.$), (l = l.$), (y = !1)),
                        (a = []),
                        (s = {}),
                        f(
                          (u = p(
                            (u = (function e(n, o, u, c, f, h) {
                              var b, g, O, A, S, T, N, j, _, B;
                              if (!y || "$types" !== n) {
                                if (((b = l[n]), i(o) || d(o)))
                                  for (
                                    g = i(o) ? new Array(o.length) : {},
                                      r(o).forEach(function (t) {
                                        var r = e(
                                          n + (n ? "." : "") + v(t),
                                          o[t],
                                          u || g,
                                          c,
                                          g,
                                          t
                                        );
                                        p(r, w)
                                          ? (g[t] = void 0)
                                          : void 0 !== r && (g[t] = r);
                                      }),
                                      o = g;
                                    a.length;

                                  ) {
                                    if (
                                      ((O = t(a[0], 4)),
                                      (A = O[0]),
                                      (S = O[1]),
                                      (T = O[2]),
                                      (N = O[3]),
                                      p((j = m(A, S)), w))
                                    )
                                      T[N] = void 0;
                                    else {
                                      if (void 0 === j) break;
                                      T[N] = j;
                                    }
                                    a.splice(0, 1);
                                  }
                                return b
                                  ? "#" === b
                                    ? (void 0 === (_ = m(u, o.substr(1))) &&
                                        a.push([u, o.substr(1), f, h]),
                                      _)
                                    : ((B = c.sync),
                                      [].concat(b).reduce(function (e, t) {
                                        var n = E[t];
                                        if (!n)
                                          throw new Error(
                                            "Unregistered type: " + t
                                          );
                                        return n[
                                          B && n.revive
                                            ? "revive"
                                            : !B && n.reviveAsync
                                            ? "reviveAsync"
                                            : "revive"
                                        ](e, s);
                                      }, o))
                                  : o;
                              }
                            })("", e, null, n)),
                            w
                          )
                            ? void 0
                            : u)
                        )
                          ? c && n.throwOnBadSyncType
                            ? (function () {
                                throw new TypeError(
                                  "Sync method requested but async result obtained"
                                );
                              })()
                            : u
                          : !c && n.throwOnBadSyncType
                          ? (function () {
                              throw new TypeError(
                                "Async method requested but sync result obtained"
                              );
                            })()
                          : c
                          ? u
                          : Promise.resolve(u))
                    : e;
                }),
              (this.reviveSync = function (e, t) {
                return u(
                  e,
                  Object.assign({}, { throwOnBadSyncType: !0 }, t, { sync: !0 })
                );
              }),
              (this.reviveAsync = function (e, t) {
                return u(
                  e,
                  Object.assign({}, { throwOnBadSyncType: !0 }, t, { sync: !1 })
                );
              }),
              (this.register = function (e, t) {
                return (
                  (t = t || {}),
                  [].concat(e).forEach(function e(n) {
                    if (i(n)) return n.map(e);
                    n &&
                      r(n).forEach(function (e) {
                        var r, o, a, s, u, c, f;
                        if ("#" === e)
                          throw new TypeError(
                            "# cannot be used as a type name as it is reserved for cyclic objects"
                          );
                        if (h.JSON_TYPES.includes(e))
                          throw new TypeError(
                            "Plain JSON object types are reserved as type names"
                          );
                        (r = n[e]),
                          (o = r.testPlainObjects ? l : g),
                          (a = o.filter(function (t) {
                            return t.type === e;
                          })).length &&
                            (o.splice(o.indexOf(a[0]), 1),
                            delete E[e],
                            delete A[e]),
                          r &&
                            ("function" == typeof r
                              ? ((s = r),
                                (r = {
                                  test: function (e) {
                                    return e && e.constructor === s;
                                  },
                                  replace: function (e) {
                                    return b({}, e);
                                  },
                                  revive: function (e) {
                                    return b(Object.create(s.prototype), e);
                                  },
                                }))
                              : i(r) &&
                                (r = {
                                  test: r[0],
                                  replace: r[1],
                                  revive: r[2],
                                }),
                            (u = { type: e, test: r.test.bind(r) }),
                            r.replace && (u.replace = r.replace.bind(r)),
                            r.replaceAsync &&
                              (u.replaceAsync = r.replaceAsync.bind(r)),
                            (c =
                              "number" == typeof t.fallback
                                ? t.fallback
                                : t.fallback
                                ? 0
                                : 1 / 0),
                            r.testPlainObjects
                              ? l.splice(c, 0, u)
                              : g.splice(c, 0, u),
                            (r.revive || r.reviveAsync) &&
                              ((f = {}),
                              r.revive && (f.revive = r.revive.bind(r)),
                              r.reviveAsync &&
                                (f.reviveAsync = r.reviveAsync.bind(r)),
                              (E[e] = f)),
                            (A[e] = r));
                      });
                  }),
                  this
                );
              });
          }
          function b(e, t) {
            return (
              r(t).map(function (n) {
                e[n] = t[n];
              }),
              e
            );
          }
          function v(e) {
            return e.replace(/~/g, "~0").replace(/\./g, "~1");
          }
          function g(e) {
            return e.replace(/~1/g, ".").replace(/~0/g, "~");
          }
          function m(e, t) {
            var n, r;
            return "" === t
              ? e
              : (n = t.indexOf(".")) > -1
              ? void 0 === (r = e[g(t.substr(0, n))])
                ? void 0
                : m(r, t.substr(n + 1))
              : e[g(t)];
          }
          function w() {}
          function O(e) {
            this.p = new Promise(e);
          }
          return (
            (O.prototype.then = function (e, t) {
              var n = this;
              return new O(function (r, i) {
                n.p.then(
                  function (t) {
                    r(e ? e(t) : t);
                  },
                  function (e) {
                    n.p
                      .catch(function (e) {
                        return t ? t(e) : Promise.reject(e);
                      })
                      .then(r, i);
                  }
                );
              });
            }),
            (O.prototype.catch = function (e) {
              return this.then(null, e);
            }),
            (O.resolve = function (e) {
              return new O(function (t) {
                t(e);
              });
            }),
            (O.reject = function (e) {
              return new O(function (t, n) {
                n(e);
              });
            }),
            ["all", "race"].map(function (e) {
              O[e] = function (t) {
                return new O(function (n, r) {
                  Promise[e](
                    t.map(function (e) {
                      return e.p;
                    })
                  ).then(n, r);
                });
              };
            }),
            (h.Undefined = w),
            (h.Promise = O),
            (h.isThenable = f),
            (h.toStringTag = l),
            (h.hasConstructorOf = p),
            (h.isObject = y),
            (h.isPlainObject = d),
            (h.isUserObject = function e(t) {
              if (!t || "Object" !== l(t)) return !1;
              var n = a(t);
              return !n || p(t, Object) || e(n);
            }),
            (h.escapeKeyPathComponent = v),
            (h.unescapeKeyPathComponent = g),
            (h.getByKeyPath = m),
            (h.getJSONType = function (t) {
              return null === t
                ? "null"
                : i(t)
                ? "array"
                : void 0 === t
                ? "undefined"
                : e(t);
            }),
            (h.JSON_TYPES = [
              "null",
              "boolean",
              "number",
              "string",
              "array",
              "object",
            ]),
            h
          );
        })();
      }),
      i = j(function (e, t) {
        e.exports = (function () {
          var e,
            t,
            r,
            i,
            o,
            a,
            s,
            u,
            c,
            f,
            l,
            p,
            d,
            y,
            h,
            b,
            v,
            g,
            m,
            w =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  },
            O = function (e, t) {
              if (Array.isArray(e)) return e;
              if ((Symbol.iterator in Object(e)))
                return (function (e, t) {
                  var n,
                    r,
                    i = [],
                    o = !0,
                    a = !1,
                    s = void 0;
                  try {
                    for (
                      r = e[Symbol.iterator]();
                      !(o = (n = r.next()).done) &&
                      (i.push(n.value), !t || i.length !== t);
                      o = !0
                    );
                  } catch (e) {
                    (a = !0), (s = e);
                  } finally {
                    try {
                      !o && r.return && r.return();
                    } finally {
                      if (a) throw s;
                    }
                  }
                  return i;
                })(e, t);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            },
            E = function (e) {
              if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++)
                  n[t] = e[t];
                return n;
              }
              return Array.from(e);
            },
            A = Object.keys,
            S = Array.isArray,
            T = {}.toString,
            N = Object.getPrototypeOf,
            j = {}.hasOwnProperty,
            _ = j.toString,
            B = ["type", "replaced", "iterateIn", "iterateUnsetNumeric"];
          function x(e, t) {
            return (
              P.isObject(e) &&
              "function" == typeof e.then &&
              (!t || "function" == typeof e.catch)
            );
          }
          function C(e) {
            return T.call(e).slice(8, -1);
          }
          function U(e, t) {
            var n, r;
            return !(
              !e ||
              "object" !== (void 0 === e ? "undefined" : w(e)) ||
              !(n = N(e)) ||
              ("function" !=
              typeof (r = j.call(n, "constructor") && n.constructor)
                ? null !== t
                : "function" != typeof r ||
                  null === t ||
                  _.call(r) !== _.call(t))
            );
          }
          function I(e) {
            return !(!e || "Object" !== C(e)) && (!N(e) || U(e, Object));
          }
          function L(e) {
            return e && "object" === (void 0 === e ? "undefined" : w(e));
          }
          function P(e) {
            var t,
              n,
              r,
              i = [],
              o = [],
              a = {},
              s = (this.types = {}),
              u = (this.stringify = function (t, r, i, o) {
                o = Object.assign({}, e, o, { stringification: !0 });
                var a = n(t, null, o);
                return S(a)
                  ? JSON.stringify(a[0], r, i)
                  : a.then(function (e) {
                      return JSON.stringify(e, r, i);
                    });
              });
            (this.stringifySync = function (e, t, n, r) {
              return u(
                e,
                t,
                n,
                Object.assign({}, { throwOnBadSyncType: !0 }, r, { sync: !0 })
              );
            }),
              (this.stringifyAsync = function (e, t, n, r) {
                return u(
                  e,
                  t,
                  n,
                  Object.assign({}, { throwOnBadSyncType: !0 }, r, { sync: !1 })
                );
              }),
              (t = this.parse =
                function (t, n, i) {
                  return (
                    (i = Object.assign({}, e, i, { parse: !0 })),
                    r(JSON.parse(t, n), i)
                  );
                }),
              (this.parseSync = function (e, n, r) {
                return t(
                  e,
                  n,
                  Object.assign({}, { throwOnBadSyncType: !0 }, r, { sync: !0 })
                );
              }),
              (this.parseAsync = function (e, n, r) {
                return t(
                  e,
                  n,
                  Object.assign({}, { throwOnBadSyncType: !0 }, r, { sync: !1 })
                );
              }),
              (this.specialTypeNames = function (e, t) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                return (n.returnTypeNames = !0), this.encapsulate(e, t, n);
              }),
              (this.rootTypeName = function (e, t) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                return (n.iterateNone = !0), this.encapsulate(e, t, n);
              }),
              (n = this.encapsulate =
                function (t, n, r) {
                  var s = (r = Object.assign({ sync: !0 }, e, r)).sync,
                    u = {},
                    c = [],
                    f = [],
                    l = [],
                    p = !(r && ("cyclic" in r)) || r.cyclic,
                    d = r.encapsulateObserver,
                    y = v("", t, p, n || {}, l);
                  function h(e) {
                    var t = Object.values(u);
                    if (r.iterateNone)
                      return t.length ? t[0] : P.getJSONType(e);
                    if (t.length) {
                      if (r.returnTypeNames) return [].concat(E(new Set(t)));
                      e && I(e) && !e.hasOwnProperty("$types")
                        ? (e.$types = u)
                        : (e = { $: e, $types: { $: u } });
                    } else
                      L(e) &&
                        e.hasOwnProperty("$types") &&
                        (e = { $: e, $types: !0 });
                    return !r.returnTypeNames && e;
                  }
                  return l.length
                    ? s && r.throwOnBadSyncType
                      ? (function () {
                          throw new TypeError(
                            "Sync method requested but async result obtained"
                          );
                        })()
                      : Promise.resolve(
                          (function e(t, n) {
                            return Promise.all(
                              n.map(function (e) {
                                return e[1].p;
                              })
                            )
                              .then(function (r) {
                                return Promise.all(
                                  r.map(function (r) {
                                    var i = [],
                                      o = n.splice(0, 1)[0],
                                      a = O(o, 7),
                                      s = a[0],
                                      u = a[2],
                                      c = a[3],
                                      f = a[4],
                                      l = a[5],
                                      p = a[6],
                                      d = v(s, r, u, c, i, !0, p),
                                      y = U(d, M);
                                    return s && y
                                      ? d.p.then(function (n) {
                                          return (f[l] = n), e(t, i);
                                        })
                                      : (s ? (f[l] = d) : (t = y ? d.p : d),
                                        e(t, i));
                                  })
                                );
                              })
                              .then(function () {
                                return t;
                              });
                          })(y, l)
                        ).then(h)
                    : !s && r.throwOnBadSyncType
                    ? (function () {
                        throw new TypeError(
                          "Async method requested but sync result obtained"
                        );
                      })()
                    : r.stringification && s
                    ? [h(y)]
                    : s
                    ? h(y)
                    : Promise.resolve(h(y));
                  function b(e, t, n) {
                    Object.assign(e, t);
                    var r = B.map(function (t) {
                      var n = e[t];
                      return delete e[t], n;
                    });
                    n(),
                      B.forEach(function (t, n) {
                        e[t] = r[n];
                      });
                  }
                  function v(e, t, n, o, a, s, l) {
                    var p,
                      y,
                      h,
                      m,
                      O,
                      E,
                      T,
                      N,
                      j,
                      _,
                      B = void 0,
                      x = {},
                      C = void 0 === t ? "undefined" : w(t),
                      L = d
                        ? function (r) {
                            var i = l || o.type || P.getJSONType(t);
                            d(
                              Object.assign(
                                r || x,
                                {
                                  keypath: e,
                                  value: t,
                                  cyclic: n,
                                  stateObj: o,
                                  promisesData: a,
                                  resolvingTypesonPromise: s,
                                  awaitingTypesonPromise: U(t, M),
                                },
                                void 0 !== i ? { type: i } : {}
                              )
                            );
                          }
                        : null;
                    if (
                      (C in { string: 1, boolean: 1, number: 1, undefined: 1 })
                    )
                      return (
                        void 0 === t ||
                        ("number" === C &&
                          (isNaN(t) || t === -1 / 0 || t === 1 / 0))
                          ? (B = g(e, t, o, a, !1, s, L)) !== t &&
                            (x = { replaced: B })
                          : (B = t),
                        L && L(),
                        B
                      );
                    if (null === t) return L && L(), t;
                    if (n && !o.iterateIn && !o.iterateUnsetNumeric) {
                      if (!((p = c.indexOf(t)) < 0))
                        return (
                          (u[e] = "#"),
                          L && L({ cyclicKeypath: f[p] }),
                          "#" + f[p]
                        );
                      !0 === n && (c.push(t), f.push(e));
                    }
                    if (
                      ((y = I(t)),
                      (h = S(t)),
                      (m =
                        ((y || h) && (!i.length || o.replaced)) || o.iterateIn
                          ? t
                          : g(e, t, o, a, y || h, null, L)),
                      (O = void 0),
                      m !== t
                        ? ((B = m), (x = { replaced: m }))
                        : h || "array" === o.iterateIn
                        ? ((O = new Array(t.length)), (x = { clone: O }))
                        : y || "object" === o.iterateIn
                        ? (x = { clone: (O = {}) })
                        : "" === e && U(t, M)
                        ? (a.push([e, t, n, o, void 0, void 0, o.type]),
                          (B = t))
                        : (B = t),
                      L && L(),
                      r.iterateNone)
                    )
                      return O || B;
                    if (!O) return B;
                    if (o.iterateIn) {
                      for (T in ((E = function (r) {
                        var i = { ownKeys: t.hasOwnProperty(r) };
                        b(o, i, function () {
                          var i = e + (e ? "." : "") + R(r),
                            u = v(i, t[r], !!n, o, a, s);
                          U(u, M)
                            ? a.push([i, u, !!n, o, O, r, o.type])
                            : void 0 !== u && (O[r] = u);
                        });
                      }),
                      t))
                        E(T);
                      L && L({ endIterateIn: !0, end: !0 });
                    } else
                      A(t).forEach(function (r) {
                        var i = e + (e ? "." : "") + R(r);
                        b(o, { ownKeys: !0 }, function () {
                          var e = v(i, t[r], !!n, o, a, s);
                          U(e, M)
                            ? a.push([i, e, !!n, o, O, r, o.type])
                            : void 0 !== e && (O[r] = e);
                        });
                      }),
                        L && L({ endIterateOwn: !0, end: !0 });
                    if (o.iterateUnsetNumeric) {
                      for (
                        N = t.length,
                          j = function (r) {
                            if (!(r in t)) {
                              var i = e + (e ? "." : "") + r;
                              b(o, { ownKeys: !1 }, function () {
                                var e = v(i, void 0, !!n, o, a, s);
                                U(e, M)
                                  ? a.push([i, e, !!n, o, O, r, o.type])
                                  : void 0 !== e && (O[r] = e);
                              });
                            }
                          },
                          _ = 0;
                        _ < N;
                        _++
                      )
                        j(_);
                      L && L({ endIterateUnsetNumeric: !0, end: !0 });
                    }
                    return O;
                  }
                  function g(e, t, n, r, c, f, l) {
                    var d, y, h, b, g;
                    for (y = (d = c ? i : o).length; y--; )
                      if ((h = d[y]).test(t, n))
                        return (
                          (b = h.type),
                          a[b] && ((g = u[e]), (u[e] = g ? [b].concat(g) : b)),
                          Object.assign(n, { type: b, replaced: !0 }),
                          (!s && h.replaceAsync) || h.replace
                            ? (l && l({ replacing: !0 }),
                              v(
                                e,
                                h[
                                  s || !h.replaceAsync
                                    ? "replace"
                                    : "replaceAsync"
                                ](t, n),
                                p && "readonly",
                                n,
                                r,
                                f,
                                b
                              ))
                            : (l && l({ typeDetected: !0 }),
                              v(e, t, p && "readonly", n, r, f, b))
                        );
                    return t;
                  }
                }),
              (this.encapsulateSync = function (e, t, r) {
                return n(
                  e,
                  t,
                  Object.assign({}, { throwOnBadSyncType: !0 }, r, { sync: !0 })
                );
              }),
              (this.encapsulateAsync = function (e, t, r) {
                return n(
                  e,
                  t,
                  Object.assign({}, { throwOnBadSyncType: !0 }, r, { sync: !1 })
                );
              }),
              (r = this.revive =
                function (t, n) {
                  var r,
                    i,
                    o,
                    s = (n = Object.assign({ sync: !0 }, e, n)).sync,
                    u = t && t.$types,
                    c = !0;
                  return u
                    ? !0 === u
                      ? t.$
                      : (u.$ && I(u.$) && ((t = t.$), (u = u.$), (c = !1)),
                        (r = []),
                        (i = {}),
                        x(
                          (o = U(
                            (o = (function e(t, n, o, s, f, l) {
                              var p, d, y, h, b, v, g, m, w, E;
                              if (!c || "$types" !== t) {
                                if (((p = u[t]), S(n) || I(n)))
                                  for (
                                    d = S(n) ? new Array(n.length) : {},
                                      A(n).forEach(function (r) {
                                        var i = e(
                                          t + (t ? "." : "") + R(r),
                                          n[r],
                                          o || d,
                                          s,
                                          d,
                                          r
                                        );
                                        U(i, J)
                                          ? (d[r] = void 0)
                                          : void 0 !== i && (d[r] = i);
                                      }),
                                      n = d;
                                    r.length;

                                  ) {
                                    if (
                                      ((y = O(r[0], 4)),
                                      (h = y[0]),
                                      (b = y[1]),
                                      (v = y[2]),
                                      (g = y[3]),
                                      U((m = D(h, b)), J))
                                    )
                                      v[g] = void 0;
                                    else {
                                      if (void 0 === m) break;
                                      v[g] = m;
                                    }
                                    r.splice(0, 1);
                                  }
                                return p
                                  ? "#" === p
                                    ? (void 0 === (w = D(o, n.substr(1))) &&
                                        r.push([o, n.substr(1), f, l]),
                                      w)
                                    : ((E = s.sync),
                                      [].concat(p).reduce(function (e, t) {
                                        var n = a[t];
                                        if (!n)
                                          throw new Error(
                                            "Unregistered type: " + t
                                          );
                                        return n[
                                          E && n.revive
                                            ? "revive"
                                            : !E && n.reviveAsync
                                            ? "reviveAsync"
                                            : "revive"
                                        ](e, i);
                                      }, n))
                                  : n;
                              }
                            })("", t, null, n)),
                            J
                          )
                            ? void 0
                            : o)
                        )
                          ? s && n.throwOnBadSyncType
                            ? (function () {
                                throw new TypeError(
                                  "Sync method requested but async result obtained"
                                );
                              })()
                            : o
                          : !s && n.throwOnBadSyncType
                          ? (function () {
                              throw new TypeError(
                                "Async method requested but sync result obtained"
                              );
                            })()
                          : s
                          ? o
                          : Promise.resolve(o))
                    : t;
                }),
              (this.reviveSync = function (e, t) {
                return r(
                  e,
                  Object.assign({}, { throwOnBadSyncType: !0 }, t, { sync: !0 })
                );
              }),
              (this.reviveAsync = function (e, t) {
                return r(
                  e,
                  Object.assign({}, { throwOnBadSyncType: !0 }, t, { sync: !1 })
                );
              }),
              (this.register = function (e, t) {
                return (
                  (t = t || {}),
                  [].concat(e).forEach(function e(n) {
                    if (S(n)) return n.map(e);
                    n &&
                      A(n).forEach(function (e) {
                        var r, u, c, f, l, p, d;
                        if ("#" === e)
                          throw new TypeError(
                            "# cannot be used as a type name as it is reserved for cyclic objects"
                          );
                        if (P.JSON_TYPES.includes(e))
                          throw new TypeError(
                            "Plain JSON object types are reserved as type names"
                          );
                        (r = n[e]),
                          (u = r.testPlainObjects ? i : o),
                          (c = u.filter(function (t) {
                            return t.type === e;
                          })).length &&
                            (u.splice(u.indexOf(c[0]), 1),
                            delete a[e],
                            delete s[e]),
                          r &&
                            ("function" == typeof r
                              ? ((f = r),
                                (r = {
                                  test: function (e) {
                                    return e && e.constructor === f;
                                  },
                                  replace: function (e) {
                                    return k({}, e);
                                  },
                                  revive: function (e) {
                                    return k(Object.create(f.prototype), e);
                                  },
                                }))
                              : S(r) &&
                                (r = {
                                  test: r[0],
                                  replace: r[1],
                                  revive: r[2],
                                }),
                            (l = { type: e, test: r.test.bind(r) }),
                            r.replace && (l.replace = r.replace.bind(r)),
                            r.replaceAsync &&
                              (l.replaceAsync = r.replaceAsync.bind(r)),
                            (p =
                              "number" == typeof t.fallback
                                ? t.fallback
                                : t.fallback
                                ? 0
                                : 1 / 0),
                            r.testPlainObjects
                              ? i.splice(p, 0, l)
                              : o.splice(p, 0, l),
                            (r.revive || r.reviveAsync) &&
                              ((d = {}),
                              r.revive && (d.revive = r.revive.bind(r)),
                              r.reviveAsync &&
                                (d.reviveAsync = r.reviveAsync.bind(r)),
                              (a[e] = d)),
                            (s[e] = r));
                      });
                  }),
                  this
                );
              });
          }
          function k(e, t) {
            return (
              A(t).map(function (n) {
                e[n] = t[n];
              }),
              e
            );
          }
          function R(e) {
            return e.replace(/~/g, "~0").replace(/\./g, "~1");
          }
          function F(e) {
            return e.replace(/~1/g, ".").replace(/~0/g, "~");
          }
          function D(e, t) {
            var n, r;
            return "" === t
              ? e
              : (n = t.indexOf(".")) > -1
              ? void 0 === (r = e[F(t.substr(0, n))])
                ? void 0
                : D(r, t.substr(n + 1))
              : e[F(t)];
          }
          function J() {}
          function M(e) {
            this.p = new Promise(e);
          }
          for (
            M.prototype.then = function (e, t) {
              var n = this;
              return new M(function (r, i) {
                n.p.then(
                  function (t) {
                    r(e ? e(t) : t);
                  },
                  function (e) {
                    n.p
                      .catch(function (e) {
                        return t ? t(e) : Promise.reject(e);
                      })
                      .then(r, i);
                  }
                );
              });
            },
              M.prototype.catch = function (e) {
                return this.then(null, e);
              },
              M.resolve = function (e) {
                return new M(function (t) {
                  t(e);
                });
              },
              M.reject = function (e) {
                return new M(function (t, n) {
                  n(e);
                });
              },
              ["all", "race"].map(function (e) {
                M[e] = function (t) {
                  return new M(function (n, r) {
                    Promise[e](
                      t.map(function (e) {
                        return e.p;
                      })
                    ).then(n, r);
                  });
                };
              }),
              P.Undefined = J,
              P.Promise = M,
              P.isThenable = x,
              P.toStringTag = C,
              P.hasConstructorOf = U,
              P.isObject = L,
              P.isPlainObject = I,
              P.isUserObject = function e(t) {
                if (!t || "Object" !== C(t)) return !1;
                var n = N(t);
                return !n || U(t, Object) || e(n);
              },
              P.escapeKeyPathComponent = R,
              P.unescapeKeyPathComponent = F,
              P.getByKeyPath = D,
              P.getJSONType = function (e) {
                return null === e
                  ? "null"
                  : S(e)
                  ? "array"
                  : void 0 === e
                  ? "undefined"
                  : w(e);
              },
              P.JSON_TYPES = [
                "null",
                "boolean",
                "number",
                "string",
                "array",
                "object",
              ],
              e = {
                userObject: {
                  test: function (e, t) {
                    return P.isUserObject(e);
                  },
                  replace: function (e) {
                    return Object.assign({}, e);
                  },
                  revive: function (e) {
                    return e;
                  },
                },
              },
              t = [
                [
                  {
                    sparseArrays: {
                      testPlainObjects: !0,
                      test: function (e) {
                        return Array.isArray(e);
                      },
                      replace: function (e, t) {
                        return (t.iterateUnsetNumeric = !0), e;
                      },
                    },
                  },
                  {
                    sparseUndefined: {
                      test: function (e, t) {
                        return void 0 === e && !1 === t.ownKeys;
                      },
                      replace: function (e) {
                        return null;
                      },
                      revive: function (e) {},
                    },
                  },
                ],
                {
                  undef: {
                    test: function (e, t) {
                      return void 0 === e && (t.ownKeys || !("ownKeys" in t));
                    },
                    replace: function (e) {
                      return null;
                    },
                    revive: function (e) {
                      return new P.Undefined();
                    },
                  },
                },
              ],
              r = {
                StringObject: {
                  test: function (e) {
                    return (
                      "String" === P.toStringTag(e) &&
                      "object" === (void 0 === e ? "undefined" : w(e))
                    );
                  },
                  replace: function (e) {
                    return String(e);
                  },
                  revive: function (e) {
                    return new String(e);
                  },
                },
                BooleanObject: {
                  test: function (e) {
                    return (
                      "Boolean" === P.toStringTag(e) &&
                      "object" === (void 0 === e ? "undefined" : w(e))
                    );
                  },
                  replace: function (e) {
                    return Boolean(e);
                  },
                  revive: function (e) {
                    return new Boolean(e);
                  },
                },
                NumberObject: {
                  test: function (e) {
                    return (
                      "Number" === P.toStringTag(e) &&
                      "object" === (void 0 === e ? "undefined" : w(e))
                    );
                  },
                  replace: function (e) {
                    return Number(e);
                  },
                  revive: function (e) {
                    return new Number(e);
                  },
                },
              },
              i = [
                {
                  nan: {
                    test: function (e) {
                      return "number" == typeof e && isNaN(e);
                    },
                    replace: function (e) {
                      return "NaN";
                    },
                    revive: function (e) {
                      return NaN;
                    },
                  },
                },
                {
                  infinity: {
                    test: function (e) {
                      return e === 1 / 0;
                    },
                    replace: function (e) {
                      return "Infinity";
                    },
                    revive: function (e) {
                      return 1 / 0;
                    },
                  },
                },
                {
                  negativeInfinity: {
                    test: function (e) {
                      return e === -1 / 0;
                    },
                    replace: function (e) {
                      return "-Infinity";
                    },
                    revive: function (e) {
                      return -1 / 0;
                    },
                  },
                },
              ],
              o = {
                date: {
                  test: function (e) {
                    return "Date" === P.toStringTag(e);
                  },
                  replace: function (e) {
                    var t = e.getTime();
                    return isNaN(t) ? "NaN" : t;
                  },
                  revive: function (e) {
                    return "NaN" === e ? new Date(NaN) : new Date(e);
                  },
                },
              },
              a = {
                regexp: {
                  test: function (e) {
                    return "RegExp" === P.toStringTag(e);
                  },
                  replace: function (e) {
                    return {
                      source: e.source,
                      flags:
                        (e.global ? "g" : "") +
                        (e.ignoreCase ? "i" : "") +
                        (e.multiline ? "m" : "") +
                        (e.sticky ? "y" : "") +
                        (e.unicode ? "u" : ""),
                    };
                  },
                  revive: function (e) {
                    var t = e.source,
                      n = e.flags;
                    return new RegExp(t, n);
                  },
                },
              },
              s = {
                map: {
                  test: function (e) {
                    return "Map" === P.toStringTag(e);
                  },
                  replace: function (e) {
                    return Array.from(e.entries());
                  },
                  revive: function (e) {
                    return new Map(e);
                  },
                },
              },
              u = {
                set: {
                  test: function (e) {
                    return "Set" === P.toStringTag(e);
                  },
                  replace: function (e) {
                    return Array.from(e.values());
                  },
                  revive: function (e) {
                    return new Set(e);
                  },
                },
              },
              c =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              f = new Uint8Array(256),
              l = 0;
            l < c.length;
            l++
          )
            f[c.charCodeAt(l)] = l;
          function K(e) {
            for (var t = new Uint16Array(e.length), n = 0; n < e.length; n++)
              t[n] = e.charCodeAt(n);
            return t.buffer;
          }
          return (
            (p = function (e, t, n) {
              for (
                var r = new Uint8Array(e, t, n), i = r.length, o = "", a = 0;
                a < i;
                a += 3
              )
                (o += c[r[a] >> 2]),
                  (o += c[((3 & r[a]) << 4) | (r[a + 1] >> 4)]),
                  (o += c[((15 & r[a + 1]) << 2) | (r[a + 2] >> 6)]),
                  (o += c[63 & r[a + 2]]);
              return (
                i % 3 == 2
                  ? (o = o.substring(0, o.length - 1) + "=")
                  : i % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="),
                o
              );
            }),
            (d = function (e) {
              var t,
                n,
                r,
                i = e.length,
                o = 0.75 * e.length,
                a = 0,
                s = void 0,
                u = void 0,
                c = void 0,
                l = void 0;
              for (
                "=" === e[e.length - 1] &&
                  (o--, "=" === e[e.length - 2] && o--),
                  t = new ArrayBuffer(o),
                  n = new Uint8Array(t),
                  r = 0;
                r < i;
                r += 4
              )
                (s = f[e.charCodeAt(r)]),
                  (u = f[e.charCodeAt(r + 1)]),
                  (c = f[e.charCodeAt(r + 2)]),
                  (l = f[e.charCodeAt(r + 3)]),
                  (n[a++] = (s << 2) | (u >> 4)),
                  (n[a++] = ((15 & u) << 4) | (c >> 2)),
                  (n[a++] = ((3 & c) << 6) | (63 & l));
              return t;
            }),
            (y = {
              arraybuffer: {
                test: function (e) {
                  return "ArrayBuffer" === P.toStringTag(e);
                },
                replace: function (e, t) {
                  t.buffers || (t.buffers = []);
                  var n = t.buffers.indexOf(e);
                  return n > -1 ? { index: n } : (t.buffers.push(e), p(e));
                },
                revive: function (e, t) {
                  if (
                    (t.buffers || (t.buffers = []),
                    "object" === (void 0 === e ? "undefined" : w(e)))
                  )
                    return t.buffers[e.index];
                  var n = d(e);
                  return t.buffers.push(n), n;
                },
              },
            }),
            (h = "undefined" == typeof self ? n : self),
            (b = {}),
            [
              "Int8Array",
              "Uint8Array",
              "Uint8ClampedArray",
              "Int16Array",
              "Uint16Array",
              "Int32Array",
              "Uint32Array",
              "Float32Array",
              "Float64Array",
            ].forEach(function (e) {
              var t = e,
                n = h[t];
              n &&
                (b[e.toLowerCase()] = {
                  test: function (e) {
                    return P.toStringTag(e) === t;
                  },
                  replace: function (e, t) {
                    var n,
                      r = e.buffer,
                      i = e.byteOffset,
                      o = e.length;
                    return (
                      t.buffers || (t.buffers = []),
                      (n = t.buffers.indexOf(r)) > -1
                        ? { index: n, byteOffset: i, length: o }
                        : (t.buffers.push(r),
                          { encoded: p(r), byteOffset: i, length: o })
                    );
                  },
                  revive: function (e, t) {
                    t.buffers || (t.buffers = []);
                    var r = e.byteOffset,
                      i = e.length,
                      o = e.encoded,
                      a = e.index,
                      s = void 0;
                    return (
                      ("index" in e)
                        ? (s = t.buffers[a])
                        : ((s = d(o)), t.buffers.push(s)),
                      new n(s, r, i)
                    );
                  },
                });
            }),
            (v = {
              dataview: {
                test: function (e) {
                  return "DataView" === P.toStringTag(e);
                },
                replace: function (e, t) {
                  var n,
                    r = e.buffer,
                    i = e.byteOffset,
                    o = e.byteLength;
                  return (
                    t.buffers || (t.buffers = []),
                    (n = t.buffers.indexOf(r)) > -1
                      ? { index: n, byteOffset: i, byteLength: o }
                      : (t.buffers.push(r),
                        { encoded: p(r), byteOffset: i, byteLength: o })
                  );
                },
                revive: function (e, t) {
                  t.buffers || (t.buffers = []);
                  var n = e.byteOffset,
                    r = e.byteLength,
                    i = e.encoded,
                    o = e.index,
                    a = void 0;
                  return (
                    ("index" in e)
                      ? (a = t.buffers[o])
                      : ((a = d(i)), t.buffers.push(a)),
                    new DataView(a, n, r)
                  );
                },
              },
            }),
            (g = {
              IntlCollator: {
                test: function (e) {
                  return P.hasConstructorOf(e, Intl.Collator);
                },
                replace: function (e) {
                  return e.resolvedOptions();
                },
                revive: function (e) {
                  return new Intl.Collator(e.locale, e);
                },
              },
              IntlDateTimeFormat: {
                test: function (e) {
                  return P.hasConstructorOf(e, Intl.DateTimeFormat);
                },
                replace: function (e) {
                  return e.resolvedOptions();
                },
                revive: function (e) {
                  return new Intl.DateTimeFormat(e.locale, e);
                },
              },
              IntlNumberFormat: {
                test: function (e) {
                  return P.hasConstructorOf(e, Intl.NumberFormat);
                },
                replace: function (e) {
                  return e.resolvedOptions();
                },
                revive: function (e) {
                  return new Intl.NumberFormat(e.locale, e);
                },
              },
            }),
            [
              e,
              t,
              r,
              i,
              o,
              a,
              {
                imagedata: {
                  test: function (e) {
                    return "ImageData" === P.toStringTag(e);
                  },
                  replace: function (e) {
                    return {
                      array: Array.from(e.data),
                      width: e.width,
                      height: e.height,
                    };
                  },
                  revive: function (e) {
                    return new ImageData(
                      new Uint8ClampedArray(e.array),
                      e.width,
                      e.height
                    );
                  },
                },
              },
              {
                imagebitmap: {
                  test: function (e) {
                    return (
                      "ImageBitmap" === P.toStringTag(e) ||
                      (e &&
                        e.dataset &&
                        "ImageBitmap" === e.dataset.toStringTag)
                    );
                  },
                  replace: function (e) {
                    var t = document.createElement("canvas");
                    return t.getContext("2d").drawImage(e, 0, 0), t.toDataURL();
                  },
                  revive: function (e) {
                    var t = document.createElement("canvas"),
                      n = t.getContext("2d"),
                      r = document.createElement("img");
                    return (
                      (r.onload = function () {
                        n.drawImage(r, 0, 0);
                      }),
                      (r.src = e),
                      t
                    );
                  },
                  reviveAsync: function (e) {
                    var t = document.createElement("canvas"),
                      n = t.getContext("2d"),
                      r = document.createElement("img");
                    return (
                      (r.onload = function () {
                        n.drawImage(r, 0, 0);
                      }),
                      (r.src = e),
                      createImageBitmap(t)
                    );
                  },
                },
              },
              (m = {
                file: {
                  test: function (e) {
                    return "File" === P.toStringTag(e);
                  },
                  replace: function (e) {
                    var t = new XMLHttpRequest();
                    if (
                      (t.open("GET", URL.createObjectURL(e), !1),
                      "undefined" != typeof TextEncoder &&
                        t.overrideMimeType("text/plain; charset=utf-16le"),
                      200 !== t.status && 0 !== t.status)
                    )
                      throw new Error("Bad Blob access: " + t.status);
                    return (
                      t.send(),
                      {
                        type: e.type,
                        stringContents: t.responseText,
                        name: e.name,
                        lastModified: e.lastModified,
                      }
                    );
                  },
                  revive: function (e) {
                    var t = e.name,
                      n = e.type,
                      r = e.stringContents,
                      i = e.lastModified,
                      o = K(r);
                    return new File([o], t, { type: n, lastModified: i });
                  },
                  replaceAsync: function (e) {
                    return new P.Promise(function (t, n) {
                      if (e.isClosed) n(new Error("The File is closed"));
                      else {
                        var r = new FileReader();
                        r.addEventListener("load", function () {
                          t({
                            type: e.type,
                            stringContents: r.result,
                            name: e.name,
                            lastModified: e.lastModified,
                          });
                        }),
                          r.addEventListener("error", function () {
                            n(r.error);
                          }),
                          r.readAsText(e, "UTF-16");
                      }
                    });
                  },
                },
              }),
              {
                file: m.file,
                filelist: {
                  test: function (e) {
                    return "FileList" === P.toStringTag(e);
                  },
                  replace: function (e) {
                    for (var t = [], n = 0; n < e.length; n++) t[n] = e.item(n);
                    return t;
                  },
                  revive: function (e) {
                    function t() {
                      (this._files = arguments[0]),
                        (this.length = this._files.length);
                    }
                    return (
                      (t.prototype.item = function (e) {
                        return this._files[e];
                      }),
                      (t.prototype[Symbol.toStringTag] = "FileList"),
                      new t(e)
                    );
                  },
                },
              },
              {
                blob: {
                  test: function (e) {
                    return "Blob" === P.toStringTag(e);
                  },
                  replace: function (e) {
                    var t = new XMLHttpRequest();
                    if (
                      (t.open("GET", URL.createObjectURL(e), !1),
                      "undefined" != typeof TextEncoder &&
                        t.overrideMimeType("text/plain; charset=utf-16le"),
                      200 !== t.status && 0 !== t.status)
                    )
                      throw new Error("Bad Blob access: " + t.status);
                    return (
                      t.send(), { type: e.type, stringContents: t.responseText }
                    );
                  },
                  revive: function (e) {
                    var t = e.type,
                      n = e.stringContents;
                    return new Blob([K(n)], { type: t });
                  },
                  replaceAsync: function (e) {
                    return new P.Promise(function (t, n) {
                      if (e.isClosed) n(new Error("The Blob is closed"));
                      else {
                        var r = new FileReader();
                        r.addEventListener("load", function () {
                          t({ type: e.type, stringContents: r.result });
                        }),
                          r.addEventListener("error", function () {
                            n(r.error);
                          }),
                          r.readAsText(e, "UTF-16");
                      }
                    });
                  },
                },
              },
            ].concat(
              "function" == typeof Map ? s : [],
              "function" == typeof Set ? u : [],
              "function" == typeof ArrayBuffer ? y : [],
              "function" == typeof Uint8Array ? b : [],
              "function" == typeof DataView ? v : [],
              "undefined" != typeof Intl ? g : []
            )
          );
        })();
      }),
      o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      a = new Uint8Array(256),
      s = 0;
    s < o.length;
    s++
  )
    a[o.charCodeAt(s)] = s;
  function _(e, n) {
    return A(this, void 0, void 0, function () {
      function r() {
        return A(this, void 0, void 0, function () {
          var r, f, l, p, y, h, b, g, m;
          return S(this, function (w) {
            switch (w.label) {
              case 0:
                return [
                  4,
                  Promise.all(
                    e.tables.map(function (e) {
                      return e.count();
                    })
                  ),
                ];
              case 1:
                (r = w.sent()).forEach(function (e, t) {
                  return (o[t].rowCount = e);
                }),
                  (c.totalRows = r.reduce(function (e, t) {
                    return e + t;
                  })),
                  (f = JSON.stringify(s, void 0, a ? 2 : void 0)),
                  (l = f.lastIndexOf("]")),
                  (p = f.substring(0, l)),
                  i.push(p),
                  (y = n.filter),
                  (h = function (r) {
                    var o, s, f, l, p, h, b, g, m, w, O;
                    return S(this, function (E) {
                      switch (E.label) {
                        case 0:
                          (o = e.table(r)),
                            (s = o.schema.primKey),
                            (f = !!s.keyPath),
                            (l = n.numRowsPerChunk || v),
                            (p = f
                              ? { tableName: o.name, inbound: !0, rows: [] }
                              : { tableName: o.name, inbound: !1, rows: [] }),
                            (h = JSON.stringify(p, void 0, a ? 2 : void 0)),
                            a && (h = h.split("\n").join("\n    ")),
                            (b = h.lastIndexOf("]")),
                            i.push(h.substring(0, b)),
                            (g = null),
                            (m = 0),
                            (w = !0),
                            (O = function () {
                              var e, n, p, h, b, v, O, E;
                              return S(this, function (A) {
                                switch (A.label) {
                                  case 0:
                                    return (
                                      u &&
                                        t.ignoreTransaction(function () {
                                          return u(c);
                                        }),
                                      [
                                        4,
                                        (e =
                                          null == g
                                            ? o.limit(l)
                                            : o
                                                .where(":id")
                                                .above(g)
                                                .limit(l)).toArray(),
                                      ]
                                    );
                                  case 1:
                                    return 0 === (n = A.sent()).length
                                      ? [2, "break"]
                                      : (null != g &&
                                          m > 0 &&
                                          (i.push(","),
                                          a && i.push("\n      ")),
                                        (w = n.length === l),
                                        f
                                          ? ((p = y
                                              ? n.filter(function (e) {
                                                  return y(r, e);
                                                })
                                              : n),
                                            (h = p.map(function (e) {
                                              return d.encapsulate(e);
                                            })),
                                            d.mustFinalize()
                                              ? [4, t.waitFor(d.finalize(h))]
                                              : [3, 3])
                                          : [3, 4]);
                                  case 2:
                                    A.sent(), (A.label = 3);
                                  case 3:
                                    return (
                                      (E = JSON.stringify(
                                        h,
                                        void 0,
                                        a ? 2 : void 0
                                      )),
                                      a && (E = E.split("\n").join("\n      ")),
                                      i.push(
                                        new Blob([E.substring(1, E.length - 1)])
                                      ),
                                      (m = p.length),
                                      (g =
                                        n.length > 0
                                          ? t.getByKeyPath(
                                              n[n.length - 1],
                                              s.keyPath
                                            )
                                          : null),
                                      [3, 8]
                                    );
                                  case 4:
                                    return [4, e.primaryKeys()];
                                  case 5:
                                    return (
                                      (b = A.sent()),
                                      (v = b.map(function (e, t) {
                                        return [e, n[t]];
                                      })),
                                      y &&
                                        (v = v.filter(function (e) {
                                          var t = e[0],
                                            n = e[1];
                                          return y(r, n, t);
                                        })),
                                      (O = v.map(function (e) {
                                        return d.encapsulate(e);
                                      })),
                                      d.mustFinalize()
                                        ? [4, t.waitFor(d.finalize(O))]
                                        : [3, 7]
                                    );
                                  case 6:
                                    A.sent(), (A.label = 7);
                                  case 7:
                                    (E = JSON.stringify(
                                      O,
                                      void 0,
                                      a ? 2 : void 0
                                    )),
                                      a && (E = E.split("\n").join("\n      ")),
                                      i.push(
                                        new Blob([E.substring(1, E.length - 1)])
                                      ),
                                      (m = v.length),
                                      (g =
                                        b.length > 0 ? b[b.length - 1] : null),
                                      (A.label = 8);
                                  case 8:
                                    return (c.completedRows += n.length), [2];
                                }
                              });
                            }),
                            (E.label = 1);
                        case 1:
                          return w ? [5, O()] : [3, 3];
                        case 2:
                          return "break" === E.sent() ? [3, 3] : [3, 1];
                        case 3:
                          return (
                            i.push(h.substr(b)),
                            (c.completedTables += 1),
                            c.completedTables < c.totalTables && i.push(","),
                            [2]
                          );
                      }
                    });
                  }),
                  (b = 0),
                  (g = o),
                  (w.label = 2);
              case 2:
                return b < g.length ? ((m = g[b].name), [5, h(m)]) : [3, 5];
              case 3:
                w.sent(), (w.label = 4);
              case 4:
                return b++, [3, 2];
              case 5:
                return (
                  i.push(f.substr(l)),
                  (c.done = !0),
                  u &&
                    t.ignoreTransaction(function () {
                      return u(c);
                    }),
                  [2]
                );
            }
          });
        });
      }
      var i, o, a, s, u, c;
      return S(this, function (f) {
        switch (f.label) {
          case 0:
            (n = n || {}),
              (i = []),
              (o = e.tables.map(function (e) {
                return {
                  name: e.name,
                  schema: (function (e) {
                    return [e.schema.primKey]
                      .concat(e.schema.indexes)
                      .map(function (e) {
                        return e.src;
                      })
                      .join(",");
                  })(e),
                  rowCount: 0,
                };
              })),
              (a = n.prettyJson),
              (s = {
                formatName: "dexie",
                formatVersion: 1,
                data: {
                  databaseName: e.name,
                  databaseVersion: e.verno,
                  tables: o,
                  data: [],
                },
              }),
              (u = n.progressCallback),
              (c = {
                done: !1,
                completedRows: 0,
                completedTables: 0,
                totalRows: NaN,
                totalTables: e.tables.length,
              }),
              (f.label = 1);
          case 1:
            return (
              f.trys.push([1, , 6, 7]), n.noTransaction ? [4, r()] : [3, 3]
            );
          case 2:
            return f.sent(), [3, 5];
          case 3:
            return [4, e.transaction("r", e.tables, r)];
          case 4:
            f.sent(), (f.label = 5);
          case 5:
            return [3, 7];
          case 6:
            return d.finalize(), [7];
          case 7:
            return (
              u &&
                t.ignoreTransaction(function () {
                  return u(c);
                }),
              [2, new Blob(i, { type: "text/json" })]
            );
        }
      });
    });
  }
  function B(e) {
    var t = 0,
      n = (function (e) {
        var t,
          n,
          r,
          i = w.parser(),
          o = 0,
          a = [],
          s = !1,
          u = !1;
        return (
          (i.onopenobject = function (i) {
            var s = { incomplete: !0 };
            t || (t = s),
              n && (a.push([r, n, u]), e && (u ? n.push(s) : (n[r] = s))),
              (n = s),
              (r = i),
              (u = !1),
              ++o;
          }),
          (i.onkey = function (e) {
            return (r = e);
          }),
          (i.onvalue = function (e) {
            return u ? n.push(e) : (n[r] = e);
          }),
          (i.oncloseobject = function () {
            var t, i;
            delete n.incomplete,
              (r = null),
              0 == --o
                ? (s = !0)
                : ((i = n),
                  (t = a.pop()),
                  (r = t[0]),
                  (n = t[1]),
                  (u = t[2]),
                  e || (u ? n.push(i) : (n[r] = i)));
          }),
          (i.onopenarray = function () {
            var i = [];
            (i.incomplete = !0),
              t || (t = i),
              n && (a.push([r, n, u]), e && (u ? n.push(i) : (n[r] = i))),
              (n = i),
              (u = !0),
              (r = null),
              ++o;
          }),
          (i.onclosearray = function () {
            var t, i;
            delete n.incomplete,
              (r = null),
              0 == --o
                ? (s = !0)
                : ((i = n),
                  (t = a.pop()),
                  (r = t[0]),
                  (n = t[1]),
                  (u = t[2]),
                  e || (u ? n.push(i) : (n[r] = i)));
          }),
          {
            write: function (e) {
              return i.write(e), t;
            },
            done: function () {
              return s;
            },
          }
        );
      })(!0),
      r = {
        pullAsync: function (i) {
          return A(this, void 0, void 0, function () {
            var o, a, s;
            return S(this, function (u) {
              switch (u.label) {
                case 0:
                  return (o = e.slice(t, t + i)), (t += i), [4, T(o, "text")];
                case 1:
                  return (
                    (a = u.sent()),
                    (s = n.write(a)),
                    (r.result = s || {}),
                    [2, s]
                  );
              }
            });
          });
        },
        pullSync: function (i) {
          var o,
            a,
            s = e.slice(t, t + i);
          return (
            (t += i),
            (o = N(s, "text")),
            (a = n.write(o)),
            (r.result = a || {}),
            a
          );
        },
        done: function () {
          return n.done();
        },
        eof: function () {
          return t >= e.size;
        },
        result: {},
      };
    return r;
  }
  function x(e, n) {
    return A(this, void 0, void 0, function () {
      var r, i, o, a;
      return S(this, function (s) {
        switch (s.label) {
          case 0:
            return (r = (n = n || {}).chunkSizeBytes || 1024 * O), [4, U(e, r)];
          case 1:
            return (
              (i = s.sent()),
              (o = i.result.data),
              (a = new t(o.databaseName)).version(o.databaseVersion).stores(
                (function (e) {
                  var t,
                    n,
                    r,
                    i = {};
                  for (t = 0, n = e.tables; t < n.length; t++)
                    i[(r = n[t]).name] = r.schema;
                  return i;
                })(o)
              ),
              [4, C(a, i, n)]
            );
          case 2:
            return s.sent(), [2, a];
        }
      });
    });
  }
  function C(e, n, r) {
    return A(this, void 0, void 0, function () {
      function i() {
        return A(this, void 0, void 0, function () {
          var n, i, s, p;
          return S(this, function (y) {
            switch (y.label) {
              case 0:
                (n = function (n) {
                  var i, o, a, s, u, p, y, h, b, v, g, m;
                  return S(this, function (w) {
                    switch (w.label) {
                      case 0:
                        if (!n.rows) return [2, "break"];
                        if (!n.rows.incomplete && 0 === n.rows.length)
                          return [2, "continue"];
                        if (
                          (f &&
                            t.ignoreTransaction(function () {
                              return f(l);
                            }),
                          (i = n.tableName),
                          (o = e.table(i)),
                          (a = c.tables.filter(function (e) {
                            return e.name === i;
                          })[0].schema),
                          !o)
                        ) {
                          if (r.acceptMissingTables) return [2, "continue"];
                          throw new Error(
                            "Exported table " +
                              n.tableName +
                              " is missing in installed database"
                          );
                        }
                        if (
                          !r.acceptChangedPrimaryKey &&
                          a.split(",")[0] != o.schema.primKey.src
                        )
                          throw new Error(
                            "Primary key differs for table " +
                              n.tableName +
                              ". "
                          );
                        for (
                          s = n.rows, u = [], p = 0;
                          p < s.length && !(y = s[p]).incomplete;
                          p++
                        )
                          u.push(d.revive(y));
                        return (
                          (h = r.filter),
                          (b = h
                            ? n.inbound
                              ? u.filter(function (e) {
                                  return h(i, e);
                                })
                              : u.filter(function (e) {
                                  var t = e[0],
                                    n = e[1];
                                  return h(i, n, t);
                                })
                            : u),
                          (v = n.inbound
                            ? [void 0, b]
                            : [
                                b.map(function (e) {
                                  return e[0];
                                }),
                                u.map(function (e) {
                                  return e[1];
                                }),
                              ]),
                          (g = v[0]),
                          (m = v[1]),
                          r.clearTablesBeforeImport ? [4, o.clear()] : [3, 2]
                        );
                      case 1:
                        w.sent(), (w.label = 2);
                      case 2:
                        return r.overwriteValues
                          ? [4, o.bulkPut(m, g)]
                          : [3, 4];
                      case 3:
                        return w.sent(), [3, 6];
                      case 4:
                        return [4, o.bulkAdd(m, g)];
                      case 5:
                        w.sent(), (w.label = 6);
                      case 6:
                        return (
                          (l.completedRows += u.length),
                          u.incomplete || (l.completedTables += 1),
                          s.splice(0, u.length),
                          [2]
                        );
                    }
                  });
                }),
                  (i = 0),
                  (s = c.data),
                  (y.label = 1);
              case 1:
                return i < s.length ? ((p = s[i]), [5, n(p)]) : [3, 4];
              case 2:
                if ("break" === y.sent()) return [3, 4];
                y.label = 3;
              case 3:
                return i++, [3, 1];
              case 4:
                for (
                  ;
                  c.data.length > 0 &&
                  c.data[0].rows &&
                  !c.data[0].rows.incomplete;

                )
                  c.data.splice(0, 1);
                return a.done() || a.eof()
                  ? [3, 8]
                  : u
                  ? (a.pullSync(o), [3, 7])
                  : [3, 5];
              case 5:
                return [4, t.waitFor(a.pullAsync(o))];
              case 6:
                y.sent(), (y.label = 7);
              case 7:
                return [3, 9];
              case 8:
                return [3, 10];
              case 9:
                return [3, 0];
              case 10:
                return [2];
            }
          });
        });
      }
      var o, a, s, u, c, f, l;
      return S(this, function (p) {
        switch (p.label) {
          case 0:
            return (o = (r = r || {}).chunkSizeBytes || 1024 * O), [4, U(n, o)];
          case 1:
            if (
              ((a = p.sent()),
              (s = a.result),
              (u = "FileReaderSync" in self),
              (c = s.data),
              !r.acceptNameDiff && e.name !== c.databaseName)
            )
              throw new Error(
                "Name differs. Current database name is " +
                  e.name +
                  " but export is " +
                  c.databaseName
              );
            if (!r.acceptVersionDiff && e.verno !== c.databaseVersion)
              throw new Error(
                "Database version differs. Current database is in version " +
                  e.verno +
                  " but export is " +
                  c.databaseVersion
              );
            return (
              (f = r.progressCallback),
              (l = {
                done: !1,
                completedRows: 0,
                completedTables: 0,
                totalRows: c.tables.reduce(function (e, t) {
                  return e + t.rowCount;
                }, 0),
                totalTables: c.tables.length,
              }),
              f &&
                t.ignoreTransaction(function () {
                  return f(l);
                }),
              r.noTransaction ? [4, i()] : [3, 3]
            );
          case 2:
            return p.sent(), [3, 5];
          case 3:
            return [4, e.transaction("rw", e.tables, i)];
          case 4:
            p.sent(), (p.label = 5);
          case 5:
            return (
              (l.done = !0),
              f &&
                t.ignoreTransaction(function () {
                  return f(l);
                }),
              [2]
            );
        }
      });
    });
  }
  function U(e, t) {
    return A(this, void 0, void 0, function () {
      var n, r;
      return S(this, function (i) {
        switch (i.label) {
          case 0:
            (n = "slice" in e ? B(e) : e), (i.label = 1);
          case 1:
            return n.eof() ? [3, 3] : [4, n.pullAsync(t)];
          case 2:
            return (
              i.sent(), n.result.data && n.result.data.data ? [3, 3] : [3, 1]
            );
          case 3:
            if (!(r = n.result) || "dexie" != r.formatName)
              throw new Error("Given file is not a dexie export");
            if (r.formatVersion > g)
              throw new Error(
                "Format version " + r.formatVersion + " not supported"
              );
            if (!r.data) throw new Error("No data in export file");
            if (!r.data.databaseName)
              throw new Error("Missing databaseName in export file");
            if (!r.data.databaseVersion)
              throw new Error("Missing databaseVersion in export file");
            if (!r.data.tables)
              throw new Error("Missing tables in export file");
            return [2, n];
        }
      });
    });
  }
  (u = function (e, t, n) {
    var r, i, a, s;
    for (
      null == n && (n = e.byteLength),
        i = (r = new Uint8Array(e, t || 0, n)).length,
        a = "",
        s = 0;
      s < i;
      s += 3
    )
      (a += o[r[s] >> 2]),
        (a += o[((3 & r[s]) << 4) | (r[s + 1] >> 4)]),
        (a += o[((15 & r[s + 1]) << 2) | (r[s + 2] >> 6)]),
        (a += o[63 & r[s + 2]]);
    return (
      i % 3 == 2
        ? (a = a.substring(0, a.length - 1) + "=")
        : i % 3 == 1 && (a = a.substring(0, a.length - 2) + "=="),
      a
    );
  }),
    (c = function (e) {
      var t,
        n,
        r,
        i,
        o,
        s,
        u,
        c = e.length,
        f = 0.75 * e.length,
        l = 0;
      for (
        "=" === e[e.length - 1] && (f--, "=" === e[e.length - 2] && f--),
          o = new ArrayBuffer(f),
          s = new Uint8Array(o),
          u = 0;
        u < c;
        u += 4
      )
        (t = a[e.charCodeAt(u)]),
          (n = a[e.charCodeAt(u + 1)]),
          (r = a[e.charCodeAt(u + 2)]),
          (i = a[e.charCodeAt(u + 3)]),
          (s[l++] = (t << 2) | (n >> 4)),
          (s[l++] = ((15 & n) << 4) | (r >> 2)),
          (s[l++] = ((3 & r) << 6) | (63 & i));
      return o;
    }),
    (f = "undefined" == typeof self ? global : self),
    (l = {}),
    [
      "Int8Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Int16Array",
      "Uint16Array",
      "Int32Array",
      "Uint32Array",
      "Float32Array",
      "Float64Array",
    ].forEach(function (e) {
      var t = e,
        n = f[t];
      n &&
        (l[e.toLowerCase() + "2"] = {
          test: function (e) {
            return r.toStringTag(e) === t;
          },
          replace: function (e) {
            return {
              buffer: e.buffer,
              byteOffset: e.byteOffset,
              length: e.length,
            };
          },
          revive: function (e) {
            var t = e.buffer,
              r = e.byteOffset,
              i = e.length;
            return new n(t, r, i);
          },
        });
    }),
    (p = {
      arraybuffer: {
        test: function (e) {
          return "ArrayBuffer" === r.toStringTag(e);
        },
        replace: function (e) {
          return u(e, 0, e.byteLength);
        },
        revive: function (e) {
          return c(e);
        },
      },
    }),
    (d = new r().register(i)),
    (y = "FileReaderSync" in self),
    (h = []),
    (b = 0),
    d.register([
      p,
      l,
      {
        blob2: {
          test: function (e) {
            return "Blob" === r.toStringTag(e);
          },
          replace: function (e) {
            var t, n, r;
            if (e.isClosed) throw new Error("The Blob is closed");
            return y
              ? ((t = N(e, "binary")),
                (n = u(t, 0, t.byteLength)),
                { type: e.type, data: n })
              : (h.push(e),
                (r = { type: e.type, data: { start: b, end: b + e.size } }),
                console.log("b.size: " + e.size),
                (b += e.size),
                r);
          },
          finalize: function (e, t) {
            e.data = u(t, 0, t.byteLength);
          },
          revive: function (e) {
            var t = e.type,
              n = e.data;
            return new Blob([c(n)], { type: t });
          },
        },
      },
    ]),
    (d.mustFinalize = function () {
      return h.length > 0;
    }),
    (d.finalize = function (e) {
      return A(void 0, void 0, void 0, function () {
        var n, r, i, o, a, s, u, c, f, l;
        return S(this, function (p) {
          switch (p.label) {
            case 0:
              return [4, T(new Blob(h), "binary")];
            case 1:
              if (((n = p.sent()), e))
                for (r = 0, i = e; r < i.length; r++)
                  if ((o = i[r]).$types)
                    for (u in ((a = o.$types), (s = a.$) && (a = a.$), a))
                      (c = a[u]),
                        (f = d.types[c]) &&
                          f.finalize &&
                          ((l = t.getByKeyPath(o, s ? "$." + u : u)),
                          f.finalize(l, n.slice(l.start, l.end)));
              return (h = []), [2];
          }
        });
      });
    }),
    (v = 2e3),
    (g = 1),
    (m = function () {}),
    (w = j(function (e, t) {
      !(function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s = "object" == typeof process && process.env ? process.env : self;
        for (o in ((e.parser = function (e) {
          return new f(e);
        }),
        (e.CParser = f),
        (e.CStream = l),
        (e.createStream = function (e) {
          return new l(e);
        }),
        (e.MAX_BUFFER_LENGTH = 10485760),
        (e.DEBUG = "debug" === s.CDEBUG),
        (e.INFO = "debug" === s.CDEBUG || "info" === s.CDEBUG),
        (e.EVENTS = [
          "value",
          "string",
          "key",
          "openobject",
          "closeobject",
          "openarray",
          "closearray",
          "error",
          "end",
          "ready",
        ]),
        (t = { textNode: void 0, numberNode: "" }),
        (n = e.EVENTS.filter(function (e) {
          return "error" !== e && "end" !== e;
        })),
        (r = 0),
        (e.STATE = {
          BEGIN: r++,
          VALUE: r++,
          OPEN_OBJECT: r++,
          CLOSE_OBJECT: r++,
          OPEN_ARRAY: r++,
          CLOSE_ARRAY: r++,
          TEXT_ESCAPE: r++,
          STRING: r++,
          BACKSLASH: r++,
          END: r++,
          OPEN_KEY: r++,
          CLOSE_KEY: r++,
          TRUE: r++,
          TRUE2: r++,
          TRUE3: r++,
          FALSE: r++,
          FALSE2: r++,
          FALSE3: r++,
          FALSE4: r++,
          NULL: r++,
          NULL2: r++,
          NULL3: r++,
          NUMBER_DECIMAL_POINT: r++,
          NUMBER_DIGIT: r++,
        }),
        e.STATE))
          e.STATE[e.STATE[o]] = o;
        r = e.STATE;
        const u = {
          tab: 9,
          lineFeed: 10,
          carriageReturn: 13,
          space: 32,
          doubleQuote: 34,
          plus: 43,
          comma: 44,
          minus: 45,
          period: 46,
          _0: 48,
          _9: 57,
          colon: 58,
          E: 69,
          openBracket: 91,
          backslash: 92,
          closeBracket: 93,
          a: 97,
          b: 98,
          e: 101,
          f: 102,
          l: 108,
          n: 110,
          r: 114,
          s: 115,
          t: 116,
          u: 117,
          openBrace: 123,
          closeBrace: 125,
        };
        function c(e) {
          for (var n in t) e[n] = t[n];
        }
        function f(t) {
          if (!(this instanceof f)) return new f(t);
          c(this),
            (this.bufferCheckPosition = e.MAX_BUFFER_LENGTH),
            (this.q = this.c = this.p = ""),
            (this.opt = t || {}),
            (this.closed = this.closedRoot = this.sawRoot = !1),
            (this.tag = this.error = null),
            (this.state = r.BEGIN),
            (this.stack = new Array()),
            (this.position = this.column = 0),
            (this.line = 1),
            (this.slashed = !1),
            (this.unicodeI = 0),
            (this.unicodeS = null),
            (this.depth = 0),
            p(this, "onready");
        }
        Object.create ||
          (Object.create = function (e) {
            function t() {
              this.__proto__ = e;
            }
            return (t.prototype = e), new t();
          }),
          Object.getPrototypeOf ||
            (Object.getPrototypeOf = function (e) {
              return e.__proto__;
            }),
          Object.keys ||
            (Object.keys = function (e) {
              var t,
                n = [];
              for (t in e) e.hasOwnProperty(t) && n.push(t);
              return n;
            }),
          (a = /[\\"\n]/g),
          (f.prototype = {
            end: function () {
              v(this);
            },
            write: function (n) {
              var i,
                o,
                s,
                c,
                f,
                l,
                m,
                w = this;
              if (this.error) throw this.error;
              if (w.closed)
                return b(
                  w,
                  "Cannot write after close. Assign an onready handler."
                );
              if (null === n) return v(w);
              (i = 0), (o = n.charCodeAt(0)), (s = w.p);
              e.DEBUG && console.log("write -> [" + n + "]");
              for (
                ;
                o &&
                ((s = o),
                (w.c = o = n.charCodeAt(i++)),
                s !== o ? (w.p = s) : (s = w.p),
                o);

              )
                switch (
                  (e.DEBUG && console.log(i, o, e.STATE[w.state]),
                  w.position++,
                  o === u.lineFeed ? (w.line++, (w.column = 0)) : w.column++,
                  w.state)
                ) {
                  case r.BEGIN:
                    o === u.openBrace
                      ? (w.state = r.OPEN_OBJECT)
                      : o === u.openBracket
                      ? (w.state = r.OPEN_ARRAY)
                      : g(o) || b(w, "Non-whitespace before {[.");
                    continue;
                  case r.OPEN_KEY:
                  case r.OPEN_OBJECT:
                    if (g(o)) continue;
                    if (w.state === r.OPEN_KEY) w.stack.push(r.CLOSE_KEY);
                    else {
                      if (o === u.closeBrace) {
                        p(w, "onopenobject"),
                          this.depth++,
                          p(w, "oncloseobject"),
                          this.depth--,
                          (w.state = w.stack.pop() || r.VALUE);
                        continue;
                      }
                      w.stack.push(r.CLOSE_OBJECT);
                    }
                    o === u.doubleQuote
                      ? (w.state = r.STRING)
                      : b(w, 'Malformed object key should start with "');
                    continue;
                  case r.CLOSE_KEY:
                  case r.CLOSE_OBJECT:
                    if (g(o)) continue;
                    w.state === r.CLOSE_KEY ? "key" : "object",
                      o === u.colon
                        ? (w.state === r.CLOSE_OBJECT
                            ? (w.stack.push(r.CLOSE_OBJECT),
                              y(w, "onopenobject"),
                              this.depth++)
                            : y(w, "onkey"),
                          (w.state = r.VALUE))
                        : o === u.closeBrace
                        ? (d(w, "oncloseobject"),
                          this.depth--,
                          (w.state = w.stack.pop() || r.VALUE))
                        : o === u.comma
                        ? (w.state === r.CLOSE_OBJECT &&
                            w.stack.push(r.CLOSE_OBJECT),
                          y(w),
                          (w.state = r.OPEN_KEY))
                        : b(w, "Bad object");
                    continue;
                  case r.OPEN_ARRAY:
                  case r.VALUE:
                    if (g(o)) continue;
                    if (w.state === r.OPEN_ARRAY) {
                      if (
                        (p(w, "onopenarray"),
                        this.depth++,
                        (w.state = r.VALUE),
                        o === u.closeBracket)
                      ) {
                        p(w, "onclosearray"),
                          this.depth--,
                          (w.state = w.stack.pop() || r.VALUE);
                        continue;
                      }
                      w.stack.push(r.CLOSE_ARRAY);
                    }
                    o === u.doubleQuote
                      ? (w.state = r.STRING)
                      : o === u.openBrace
                      ? (w.state = r.OPEN_OBJECT)
                      : o === u.openBracket
                      ? (w.state = r.OPEN_ARRAY)
                      : o === u.t
                      ? (w.state = r.TRUE)
                      : o === u.f
                      ? (w.state = r.FALSE)
                      : o === u.n
                      ? (w.state = r.NULL)
                      : o === u.minus
                      ? (w.numberNode += "-")
                      : u._0 <= o && o <= u._9
                      ? ((w.numberNode += String.fromCharCode(o)),
                        (w.state = r.NUMBER_DIGIT))
                      : b(w, "Bad value");
                    continue;
                  case r.CLOSE_ARRAY:
                    if (o === u.comma)
                      w.stack.push(r.CLOSE_ARRAY),
                        y(w, "onvalue"),
                        (w.state = r.VALUE);
                    else if (o === u.closeBracket)
                      d(w, "onclosearray"),
                        this.depth--,
                        (w.state = w.stack.pop() || r.VALUE);
                    else {
                      if (g(o)) continue;
                      b(w, "Bad array");
                    }
                    continue;
                  case r.STRING:
                    void 0 === w.textNode && (w.textNode = ""),
                      (c = i - 1),
                      (f = w.slashed),
                      (l = w.unicodeI);
                    e: for (;;) {
                      for (
                        e.DEBUG && console.log(i, o, e.STATE[w.state], f);
                        l > 0;

                      )
                        if (
                          ((w.unicodeS += String.fromCharCode(o)),
                          (o = n.charCodeAt(i++)),
                          w.position++,
                          4 === l
                            ? ((w.textNode += String.fromCharCode(
                                parseInt(w.unicodeS, 16)
                              )),
                              (l = 0),
                              (c = i - 1))
                            : l++,
                          !o)
                        )
                          break e;
                      if (o === u.doubleQuote && !f) {
                        (w.state = w.stack.pop() || r.VALUE),
                          (w.textNode += n.substring(c, i - 1)),
                          (w.position += i - 1 - c);
                        break;
                      }
                      if (
                        o === u.backslash &&
                        !f &&
                        ((f = !0),
                        (w.textNode += n.substring(c, i - 1)),
                        (w.position += i - 1 - c),
                        (o = n.charCodeAt(i++)),
                        w.position++,
                        !o)
                      )
                        break;
                      if (f) {
                        if (
                          ((f = !1),
                          o === u.n
                            ? (w.textNode += "\n")
                            : o === u.r
                            ? (w.textNode += "\r")
                            : o === u.t
                            ? (w.textNode += "\t")
                            : o === u.f
                            ? (w.textNode += "\f")
                            : o === u.b
                            ? (w.textNode += "\b")
                            : o === u.u
                            ? ((l = 1), (w.unicodeS = ""))
                            : (w.textNode += String.fromCharCode(o)),
                          (o = n.charCodeAt(i++)),
                          w.position++,
                          (c = i - 1),
                          o)
                        )
                          continue;
                        break;
                      }
                      if (((a.lastIndex = i), null === (m = a.exec(n)))) {
                        (i = n.length + 1),
                          (w.textNode += n.substring(c, i - 1)),
                          (w.position += i - 1 - c);
                        break;
                      }
                      if (((i = m.index + 1), !(o = n.charCodeAt(m.index)))) {
                        (w.textNode += n.substring(c, i - 1)),
                          (w.position += i - 1 - c);
                        break;
                      }
                    }
                    (w.slashed = f), (w.unicodeI = l);
                    continue;
                  case r.TRUE:
                    o === u.r
                      ? (w.state = r.TRUE2)
                      : b(w, "Invalid true started with t" + o);
                    continue;
                  case r.TRUE2:
                    o === u.u
                      ? (w.state = r.TRUE3)
                      : b(w, "Invalid true started with tr" + o);
                    continue;
                  case r.TRUE3:
                    o === u.e
                      ? (p(w, "onvalue", !0),
                        (w.state = w.stack.pop() || r.VALUE))
                      : b(w, "Invalid true started with tru" + o);
                    continue;
                  case r.FALSE:
                    o === u.a
                      ? (w.state = r.FALSE2)
                      : b(w, "Invalid false started with f" + o);
                    continue;
                  case r.FALSE2:
                    o === u.l
                      ? (w.state = r.FALSE3)
                      : b(w, "Invalid false started with fa" + o);
                    continue;
                  case r.FALSE3:
                    o === u.s
                      ? (w.state = r.FALSE4)
                      : b(w, "Invalid false started with fal" + o);
                    continue;
                  case r.FALSE4:
                    o === u.e
                      ? (p(w, "onvalue", !1),
                        (w.state = w.stack.pop() || r.VALUE))
                      : b(w, "Invalid false started with fals" + o);
                    continue;
                  case r.NULL:
                    o === u.u
                      ? (w.state = r.NULL2)
                      : b(w, "Invalid null started with n" + o);
                    continue;
                  case r.NULL2:
                    o === u.l
                      ? (w.state = r.NULL3)
                      : b(w, "Invalid null started with nu" + o);
                    continue;
                  case r.NULL3:
                    o === u.l
                      ? (p(w, "onvalue", null),
                        (w.state = w.stack.pop() || r.VALUE))
                      : b(w, "Invalid null started with nul" + o);
                    continue;
                  case r.NUMBER_DECIMAL_POINT:
                    o === u.period
                      ? ((w.numberNode += "."), (w.state = r.NUMBER_DIGIT))
                      : b(w, "Leading zero not followed by .");
                    continue;
                  case r.NUMBER_DIGIT:
                    u._0 <= o && o <= u._9
                      ? (w.numberNode += String.fromCharCode(o))
                      : o === u.period
                      ? (-1 !== w.numberNode.indexOf(".") &&
                          b(w, "Invalid number has two dots"),
                        (w.numberNode += "."))
                      : o === u.e || o === u.E
                      ? ((-1 === w.numberNode.indexOf("e") &&
                          -1 === w.numberNode.indexOf("E")) ||
                          b(w, "Invalid number has two exponential"),
                        (w.numberNode += "e"))
                      : o === u.plus || o === u.minus
                      ? (s !== u.e &&
                          s !== u.E &&
                          b(w, "Invalid symbol in number"),
                        (w.numberNode += String.fromCharCode(o)))
                      : (h(w), i--, (w.state = w.stack.pop() || r.VALUE));
                    continue;
                  default:
                    b(w, "Unknown state: " + w.state);
                }
              w.position >= w.bufferCheckPosition &&
                (function (n) {
                  var r,
                    i,
                    o = Math.max(e.MAX_BUFFER_LENGTH, 10),
                    a = 0;
                  for (r in t) {
                    if ((i = void 0 === n[r] ? 0 : n[r].length) > o)
                      switch (r) {
                        case "text":
                          closeText(n);
                          break;
                        default:
                          b(n, "Max buffer length exceeded: " + r);
                      }
                    a = Math.max(a, i);
                  }
                  n.bufferCheckPosition = e.MAX_BUFFER_LENGTH - a + n.position;
                })(w);
              return w;
            },
            resume: function () {
              return (this.error = null), this;
            },
            close: function () {
              return this.write(null);
            },
          });
        try {
          i = m;
        } catch (e) {
          i = function () {};
        }
        function l(e) {
          if (!(this instanceof l)) return new l(e);
          (this._parser = new f(e)),
            (this.writable = !0),
            (this.readable = !0),
            (this.bytes_remaining = 0),
            (this.bytes_in_sequence = 0),
            (this.temp_buffs = {
              2: new Buffer(2),
              3: new Buffer(3),
              4: new Buffer(4),
            }),
            (this.string = "");
          var t = this;
          i.apply(t),
            (this._parser.onend = function () {
              t.emit("end");
            }),
            (this._parser.onerror = function (e) {
              t.emit("error", e), (t._parser.error = null);
            }),
            n.forEach(function (e) {
              Object.defineProperty(t, "on" + e, {
                get: function () {
                  return t._parser["on" + e];
                },
                set: function (n) {
                  if (!n)
                    return (
                      t.removeAllListeners(e), (t._parser["on" + e] = n), n
                    );
                  t.on(e, n);
                },
                enumerable: !0,
                configurable: !1,
              });
            });
        }
        function p(t, n, r) {
          e.INFO && console.log("-- emit", n, r), t[n] && t[n](r);
        }
        function d(e, t, n) {
          y(e), p(e, t, n);
        }
        function y(e, t) {
          (e.textNode = (function (e, t) {
            if (void 0 === t) return t;
            e.trim && (t = t.trim());
            e.normalize && (t = t.replace(/\s+/g, " "));
            return t;
          })(e.opt, e.textNode)),
            void 0 !== e.textNode && p(e, t || "onvalue", e.textNode),
            (e.textNode = void 0);
        }
        function h(e) {
          e.numberNode && p(e, "onvalue", parseFloat(e.numberNode)),
            (e.numberNode = "");
        }
        function b(e, t) {
          return (
            y(e),
            (t +=
              "\nLine: " + e.line + "\nColumn: " + e.column + "\nChar: " + e.c),
            (t = new Error(t)),
            (e.error = t),
            p(e, "onerror", t),
            e
          );
        }
        function v(e) {
          return (
            (e.state === r.VALUE && 0 === e.depth) || b(e, "Unexpected end"),
            y(e),
            (e.c = ""),
            (e.closed = !0),
            p(e, "onend"),
            f.call(e, e.opt),
            e
          );
        }
        function g(e) {
          return (
            e === u.carriageReturn ||
            e === u.lineFeed ||
            e === u.space ||
            e === u.tab
          );
        }
        (l.prototype = Object.create(i.prototype, {
          constructor: { value: l },
        })),
          (l.prototype.write = function (e) {
            var t, n, r, i, o;
            for (e = new Buffer(e), t = 0; t < e.length; t++)
              if (((n = e[t]), this.bytes_remaining > 0)) {
                for (r = 0; r < this.bytes_remaining; r++)
                  this.temp_buffs[this.bytes_in_sequence][
                    this.bytes_in_sequence - this.bytes_remaining + r
                  ] = e[r];
                (this.string =
                  this.temp_buffs[this.bytes_in_sequence].toString()),
                  (this.bytes_in_sequence = this.bytes_remaining = 0),
                  (t = t + r - 1),
                  this._parser.write(this.string),
                  this.emit("data", this.string);
              } else if (0 === this.bytes_remaining && n >= 128) {
                if (
                  (n >= 194 && n <= 223 && (this.bytes_in_sequence = 2),
                  n >= 224 && n <= 239 && (this.bytes_in_sequence = 3),
                  n >= 240 && n <= 244 && (this.bytes_in_sequence = 4),
                  this.bytes_in_sequence + t > e.length)
                ) {
                  for (i = 0; i <= e.length - 1 - t; i++)
                    this.temp_buffs[this.bytes_in_sequence][i] = e[t + i];
                  return (
                    (this.bytes_remaining =
                      t + this.bytes_in_sequence - e.length),
                    !0
                  );
                }
                (this.string = e
                  .slice(t, t + this.bytes_in_sequence)
                  .toString()),
                  (t = t + this.bytes_in_sequence - 1),
                  this._parser.write(this.string),
                  this.emit("data", this.string);
              } else {
                for (o = t; o < e.length && !(e[o] >= 128); o++);
                (this.string = e.slice(t, o).toString()),
                  this._parser.write(this.string),
                  this.emit("data", this.string),
                  (t = o - 1);
              }
          }),
          (l.prototype.end = function (e) {
            return (
              e && e.length && this._parser.write(e.toString()),
              this._parser.end(),
              !0
            );
          }),
          (l.prototype.on = function (e, t) {
            var r = this;
            return (
              r._parser["on" + e] ||
                -1 === n.indexOf(e) ||
                (r._parser["on" + e] = function () {
                  var t =
                    1 === arguments.length
                      ? [arguments[0]]
                      : Array.apply(null, arguments);
                  t.splice(0, 0, e), r.emit.apply(r, t);
                }),
              i.prototype.on.call(r, e, t)
            );
          }),
          (l.prototype.destroy = function () {
            c(this._parser), this.emit("close");
          });
      })(t);
    })),
    (O = 1024),
    (t.prototype.export = function (e) {
      return _(this, e);
    }),
    (t.prototype.import = function (e, t) {
      return C(this, e, t);
    }),
    (t.import = function (e, t) {
      return x(e, t);
    }),
    (E = function () {
      throw new Error(
        "This addon extends Dexie.prototype globally and does not have be included in Dexie constructor's addons options."
      );
    }),
    (e.exportDB = _),
    (e.importDB = x),
    (e.importInto = C),
    (e.peakImportFile = function (e) {
      return A(this, void 0, void 0, function () {
        var t;
        return S(this, function (n) {
          switch (n.label) {
            case 0:
              (t = B(e)), (n.label = 1);
            case 1:
              return t.eof() ? [3, 3] : [4, t.pullAsync(5120)];
            case 2:
              return (
                n.sent(),
                t.result.data && t.result.data.data
                  ? (delete t.result.data.data, [3, 3])
                  : [3, 1]
              );
            case 3:
              return [2, t.result];
          }
        });
      });
    }),
    (e.default = E),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
