(function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Dexie = t()
})(this, function() {
    "use strict";
    var g = function() {
        return (g = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    };

    function i(e, t, n) {
        if (n || 2 === arguments.length)
            for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || ((r = r || Array.prototype.slice.call(t, 0, i))[i] = t[i]);
        return e.concat(r || Array.prototype.slice.call(t))
    }
    var h = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global,
        x = Object.keys,
        b = Array.isArray;

    function u(t, n) {
        return "object" != typeof n || x(n).forEach(function(e) {
            t[e] = n[e]
        }), t
    }
    "undefined" == typeof Promise || h.Promise || (h.Promise = Promise);
    var s = Object.getPrototypeOf,
        n = {}.hasOwnProperty;

    function m(e, t) {
        return n.call(e, t)
    }

    function r(t, n) {
        "function" == typeof n && (n = n(s(t))), ("undefined" == typeof Reflect ? x : Reflect.ownKeys)(n).forEach(function(e) {
            c(t, e, n[e])
        })
    }
    var a = Object.defineProperty;

    function c(e, t, n, r) {
        a(e, t, u(n && m(n, "get") && "function" == typeof n.get ? {
            get: n.get,
            set: n.set,
            configurable: !0
        } : {
            value: n,
            configurable: !0,
            writable: !0
        }, r))
    }

    function o(t) {
        return {
            from: function(e) {
                return t.prototype = Object.create(e.prototype), c(t.prototype, "constructor", t), {
                    extend: r.bind(null, t.prototype)
                }
            }
        }
    }
    var l = Object.getOwnPropertyDescriptor;

    function f(e, t) {
        return l(e, t) || (e = s(e)) && f(e, t)
    }
    var d = [].slice;

    function y(e, t, n) {
        return d.call(e, t, n)
    }

    function p(e, t) {
        return t(e)
    }

    function v(e) {
        if (!e) throw new Error("Assertion Failed")
    }

    function _(e) {
        h.setImmediate ? setImmediate(e) : setTimeout(e, 0)
    }

    function w(e, r) {
        return e.reduce(function(e, t, n) {
            n = r(t, n);
            return n && (e[n[0]] = n[1]), e
        }, {})
    }

    function k(e, t) {
        if (m(e, t)) return e[t];
        if (!t) return e;
        if ("string" != typeof t) {
            for (var n = [], r = 0, i = t.length; r < i; ++r) {
                var o = k(e, t[r]);
                n.push(o)
            }
            return n
        }
        var a = t.indexOf(".");
        if (-1 !== a) {
            var u = e[t.substr(0, a)];
            return void 0 === u ? void 0 : k(u, t.substr(a + 1))
        }
    }

    function E(e, t, n) {
        if (e && void 0 !== t && !("isFrozen" in Object && Object.isFrozen(e)))
            if ("string" != typeof t && "length" in t) {
                v("string" != typeof n && "length" in n);
                for (var r = 0, i = t.length; r < i; ++r) E(e, t[r], n[r])
            } else {
                var o, a = t.indexOf("."); - 1 !== a ? (o = t.substr(0, a), "" === (a = t.substr(a + 1)) ? void 0 === n ? b(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o] : e[o] = n : E(e[o] || (e[o] = {}), a, n)) : void 0 === n ? b(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n
            }
    }

    function P(e) {
        var t, n = {};
        for (t in e) m(e, t) && (n[t] = e[t]);
        return n
    }
    var t = [].concat;

    function K(e) {
        return t.apply([], e)
    }
    var e = "Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(K([8, 16, 32, 64].map(function(t) {
            return ["Int", "Uint", "Float"].map(function(e) {
                return e + t + "Array"
            })
        }))).filter(function(e) {
            return h[e]
        }),
        O = e.map(function(e) {
            return h[e]
        });
    w(e, function(e) {
        return [e, !0]
    });
    var S = null;

    function A(e) {
        S = "undefined" != typeof WeakMap && new WeakMap;
        e = function e(t) {
            if (!t || "object" != typeof t) return t;
            var n = S && S.get(t);
            if (n) return n;
            if (b(t)) {
                n = [], S && S.set(t, n);
                for (var r = 0, i = t.length; r < i; ++r) n.push(e(t[r]))
            } else if (0 <= O.indexOf(t.constructor)) n = t;
            else {
                var o, a = s(t);
                for (o in n = a === Object.prototype ? {} : Object.create(a), S && S.set(t, n), t) m(t, o) && (n[o] = e(t[o]))
            }
            return n
        }(e);
        return S = null, e
    }
    var C = {}.toString;

    function j(e) {
        return C.call(e).slice(8, -1)
    }
    var D = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator",
        I = "symbol" == typeof D ? function(e) {
            var t;
            return null != e && (t = e[D]) && t.apply(e)
        } : function() {
            return null
        },
        B = {};

    function T(e) {
        var t, n, r, i;
        if (1 === arguments.length) {
            if (b(e)) return e.slice();
            if (this === B && "string" == typeof e) return [e];
            if (i = I(e)) {
                for (n = []; !(r = i.next()).done;) n.push(r.value);
                return n
            }
            if (null == e) return [e];
            if ("number" != typeof(t = e.length)) return [e];
            for (n = new Array(t); t--;) n[t] = e[t];
            return n
        }
        for (t = arguments.length, n = new Array(t); t--;) n[t] = arguments[t];
        return n
    }
    var R = "undefined" != typeof Symbol ? function(e) {
            return "AsyncFunction" === e[Symbol.toStringTag]
        } : function() {
            return !1
        },
        F = "undefined" != typeof location && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);

    function M(e, t) {
        F = e, N = t
    }
    var N = function() {
            return !0
        },
        q = !new Error("").stack;

    function U() {
        if (q) try {
            throw new Error
        } catch (e) {
            return e
        }
        return new Error
    }

    function L(e, t) {
        var n = e.stack;
        return n ? (t = t || 0, 0 === n.indexOf(e.name) && (t += (e.name + e.message).split("\n").length), n.split("\n").slice(t).filter(N).map(function(e) {
            return "\n" + e
        }).join("")) : ""
    }
    var V = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"],
        e = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(V),
        W = {
            VersionChanged: "Database version changed by other database connection",
            DatabaseClosed: "Database has been closed",
            Abort: "Transaction aborted",
            TransactionInactive: "Transaction has already completed or failed",
            MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
        };

    function z(e, t) {
        this._e = U(), this.name = e, this.message = t
    }

    function Y(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(e) {
            return t[e].toString()
        }).filter(function(e, t, n) {
            return n.indexOf(e) === t
        }).join("\n")
    }

    function G(e, t, n, r) {
        this._e = U(), this.failures = t, this.failedKeys = r, this.successCount = n, this.message = Y(e, t)
    }

    function H(e, t) {
        this._e = U(), this.name = "BulkError", this.failures = Object.keys(t).map(function(e) {
            return t[e]
        }), this.failuresByPos = t, this.message = Y(e, t)
    }
    o(z).from(Error).extend({
        stack: {
            get: function() {
                return this._stack || (this._stack = this.name + ": " + this.message + L(this._e, 2))
            }
        },
        toString: function() {
            return this.name + ": " + this.message
        }
    }), o(G).from(z), o(H).from(z);
    var Q = e.reduce(function(e, t) {
            return e[t] = t + "Error", e
        }, {}),
        X = z,
        J = e.reduce(function(e, n) {
            var r = n + "Error";

            function t(e, t) {
                this._e = U(), this.name = r, e ? "string" == typeof e ? (this.message = e + (t ? "\n " + t : ""), this.inner = t || null) : "object" == typeof e && (this.message = e.name + " " + e.message, this.inner = e) : (this.message = W[n] || r, this.inner = null)
            }
            return o(t).from(X), e[n] = t, e
        }, {});
    J.Syntax = SyntaxError, J.Type = TypeError, J.Range = RangeError;
    var $ = V.reduce(function(e, t) {
        return e[t + "Error"] = J[t], e
    }, {});
    V = e.reduce(function(e, t) {
        return -1 === ["Syntax", "Type", "Range"].indexOf(t) && (e[t + "Error"] = J[t]), e
    }, {});

    function Z() {}

    function ee(e) {
        return e
    }

    function te(t, n) {
        return null == t || t === ee ? n : function(e) {
            return n(t(e))
        }
    }

    function ne(e, t) {
        return function() {
            e.apply(this, arguments), t.apply(this, arguments)
        }
    }

    function re(i, o) {
        return i === Z ? o : function() {
            var e = i.apply(this, arguments);
            void 0 !== e && (arguments[0] = e);
            var t = this.onsuccess,
                n = this.onerror;
            this.onsuccess = null, this.onerror = null;
            var r = o.apply(this, arguments);
            return t && (this.onsuccess = this.onsuccess ? ne(t, this.onsuccess) : t), n && (this.onerror = this.onerror ? ne(n, this.onerror) : n), void 0 !== r ? r : e
        }
    }

    function ie(n, r) {
        return n === Z ? r : function() {
            n.apply(this, arguments);
            var e = this.onsuccess,
                t = this.onerror;
            this.onsuccess = this.onerror = null, r.apply(this, arguments), e && (this.onsuccess = this.onsuccess ? ne(e, this.onsuccess) : e), t && (this.onerror = this.onerror ? ne(t, this.onerror) : t)
        }
    }

    function oe(i, o) {
        return i === Z ? o : function(e) {
            var t = i.apply(this, arguments);
            u(e, t);
            var n = this.onsuccess,
                r = this.onerror;
            this.onsuccess = null, this.onerror = null;
            e = o.apply(this, arguments);
            return n && (this.onsuccess = this.onsuccess ? ne(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? ne(r, this.onerror) : r), void 0 === t ? void 0 === e ? void 0 : e : u(t, e)
        }
    }

    function ae(e, t) {
        return e === Z ? t : function() {
            return !1 !== t.apply(this, arguments) && e.apply(this, arguments)
        }
    }

    function ue(i, o) {
        return i === Z ? o : function() {
            var e = i.apply(this, arguments);
            if (e && "function" == typeof e.then) {
                for (var t = this, n = arguments.length, r = new Array(n); n--;) r[n] = arguments[n];
                return e.then(function() {
                    return o.apply(t, r)
                })
            }
            return o.apply(this, arguments)
        }
    }
    V.ModifyError = G, V.DexieError = z, V.BulkError = H;
    var se = {},
        ce = 100,
        le = 100,
        e = "undefined" == typeof Promise ? [] : function() {
            var e = Promise.resolve();
            if ("undefined" == typeof crypto || !crypto.subtle) return [e, s(e), e];
            var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
            return [t, s(t), e]
        }(),
        fe = e[0],
        he = e[1],
        de = e[2],
        pe = he && he.then,
        ye = fe && fe.constructor,
        ve = !!de,
        me = !1,
        ge = de ? function() {
            de.then(Ne)
        } : h.setImmediate ? setImmediate.bind(null, Ne) : h.MutationObserver ? function() {
            var e = document.createElement("div");
            new MutationObserver(function() {
                Ne(), e = null
            }).observe(e, {
                attributes: !0
            }), e.setAttribute("i", "1")
        } : function() {
            setTimeout(Ne, 0)
        },
        be = function(e, t) {
            Se.push([e, t]), we && (ge(), we = !1)
        },
        _e = !0,
        we = !0,
        xe = [],
        ke = [],
        Ee = null,
        Pe = ee,
        Ke = {
            id: "global",
            global: !0,
            ref: 0,
            unhandleds: [],
            onunhandled: ct,
            pgp: !1,
            env: {},
            finalize: function() {
                this.unhandleds.forEach(function(e) {
                    try {
                        ct(e[0], e[1])
                    } catch (e) {}
                })
            }
        },
        Oe = Ke,
        Se = [],
        Ae = 0,
        Ce = [];

    function je(e) {
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this.onuncatched = Z, this._lib = !1;
        var t = this._PSD = Oe;
        if (F && (this._stackHolder = U(), this._prev = null, this._numPrev = 0), "function" != typeof e) {
            if (e !== se) throw new TypeError("Not a function");
            return this._state = arguments[1], this._value = arguments[2], void(!1 === this._state && Be(this, this._value))
        }
        this._state = null, this._value = null, ++t.ref,
            function t(r, e) {
                try {
                    e(function(n) {
                        if (null === r._state) {
                            if (n === r) throw new TypeError("A promise cannot be resolved with itself.");
                            var e = r._lib && qe();
                            n && "function" == typeof n.then ? t(r, function(e, t) {
                                n instanceof je ? n._then(e, t) : n.then(e, t)
                            }) : (r._state = !0, r._value = n, Te(r)), e && Ue()
                        }
                    }, Be.bind(null, r))
                } catch (e) {
                    Be(r, e)
                }
            }(this, e)
    }
    var De = {
        get: function() {
            var u = Oe,
                t = Qe;

            function e(n, r) {
                var i = this,
                    o = !u.global && (u !== Oe || t !== Qe),
                    a = o && !Ze(),
                    e = new je(function(e, t) {
                        Re(i, new Ie(at(n, u, o, a), at(r, u, o, a), e, t, u))
                    });
                return F && Me(e, this), e
            }
            return e.prototype = se, e
        },
        set: function(e) {
            c(this, "then", e && e.prototype === se ? De : {
                get: function() {
                    return e
                },
                set: De.set
            })
        }
    };

    function Ie(e, t, n, r, i) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = r, this.psd = i
    }

    function Be(t, n) {
        var e, r;
        ke.push(n), null === t._state && (e = t._lib && qe(), n = Pe(n), t._state = !1, t._value = n, F && null !== n && "object" == typeof n && !n._promise && function(e, t, n) {
            try {
                e.apply(null, n)
            } catch (e) {
                t && t(e)
            }
        }(function() {
            var e = f(n, "stack");
            n._promise = t, c(n, "stack", {
                get: function() {
                    return me ? e && (e.get ? e.get.apply(n) : e.value) : t.stack
                }
            })
        }), r = t, xe.some(function(e) {
            return e._value === r._value
        }) || xe.push(r), Te(t), e && Ue())
    }

    function Te(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var n = 0, r = t.length; n < r; ++n) Re(e, t[n]);
        var i = e._PSD;
        --i.ref || i.finalize(), 0 === Ae && (++Ae, be(function() {
            0 == --Ae && Le()
        }, []))
    }

    function Re(e, t) {
        if (null !== e._state) {
            var n = e._state ? t.onFulfilled : t.onRejected;
            if (null === n) return (e._state ? t.resolve : t.reject)(e._value);
            ++t.psd.ref, ++Ae, be(Fe, [n, e, t])
        } else e._listeners.push(t)
    }

    function Fe(e, t, n) {
        try {
            var r, i = (Ee = t)._value;
            t._state ? r = e(i) : (ke.length && (ke = []), r = e(i), -1 === ke.indexOf(i) && function(e) {
                var t = xe.length;
                for (; t;)
                    if (xe[--t]._value === e._value) return xe.splice(t, 1)
            }(t)), n.resolve(r)
        } catch (e) {
            n.reject(e)
        } finally {
            Ee = null, 0 == --Ae && Le(), --n.psd.ref || n.psd.finalize()
        }
    }

    function Me(e, t) {
        var n = t ? t._numPrev + 1 : 0;
        n < ce && (e._prev = t, e._numPrev = n)
    }

    function Ne() {
        qe() && Ue()
    }

    function qe() {
        var e = _e;
        return we = _e = !1, e
    }

    function Ue() {
        var e, t, n;
        do {
            for (; 0 < Se.length;)
                for (e = Se, Se = [], n = e.length, t = 0; t < n; ++t) {
                    var r = e[t];
                    r[0].apply(null, r[1])
                }
        } while (0 < Se.length);
        we = _e = !0
    }

    function Le() {
        var e = xe;
        xe = [], e.forEach(function(e) {
            e._PSD.onunhandled.call(null, e._value, e)
        });
        for (var t = Ce.slice(0), n = t.length; n;) t[--n]()
    }

    function Ve(e) {
        return new je(se, !1, e)
    }

    function We(n, r) {
        var i = Oe;
        return function() {
            var e = qe(),
                t = Oe;
            try {
                return nt(i, !0), n.apply(this, arguments)
            } catch (e) {
                r && r(e)
            } finally {
                nt(t, !1), e && Ue()
            }
        }
    }
    r(je.prototype, {
        then: De,
        _then: function(e, t) {
            Re(this, new Ie(null, null, e, t, Oe))
        },
        catch: function(e) {
            if (1 === arguments.length) return this.then(null, e);
            var t = e,
                n = arguments[1];
            return "function" == typeof t ? this.then(null, function(e) {
                return (e instanceof t ? n : Ve)(e)
            }) : this.then(null, function(e) {
                return (e && e.name === t ? n : Ve)(e)
            })
        },
        finally: function(t) {
            return this.then(function(e) {
                return t(), e
            }, function(e) {
                return t(), Ve(e)
            })
        },
        stack: {
            get: function() {
                if (this._stack) return this._stack;
                try {
                    me = !0;
                    var e = function e(t, n, r) {
                        if (n.length === r) return n;
                        var i = "";
                        {
                            var o, a, u;
                            !1 === t._state && (null != (o = t._value) ? (a = o.name || "Error", u = o.message || o, i = L(o, 0)) : (a = o, u = ""), n.push(a + (u ? ": " + u : "") + i))
                        }
                        F && ((i = L(t._stackHolder, 2)) && -1 === n.indexOf(i) && n.push(i), t._prev && e(t._prev, n, r));
                        return n
                    }(this, [], 20).join("\nFrom previous: ");
                    return null !== this._state && (this._stack = e), e
                } finally {
                    me = !1
                }
            }
        },
        timeout: function(r, i) {
            var o = this;
            return r < 1 / 0 ? new je(function(e, t) {
                var n = setTimeout(function() {
                    return t(new J.Timeout(i))
                }, r);
                o.then(e, t).finally(clearTimeout.bind(null, n))
            }) : this
        }
    }), "undefined" != typeof Symbol && Symbol.toStringTag && c(je.prototype, Symbol.toStringTag, "Dexie.Promise"), Ke.env = rt(), r(je, {
        all: function() {
            var o = T.apply(null, arguments).map(et);
            return new je(function(n, r) {
                0 === o.length && n([]);
                var i = o.length;
                o.forEach(function(e, t) {
                    return je.resolve(e).then(function(e) {
                        o[t] = e, --i || n(o)
                    }, r)
                })
            })
        },
        resolve: function(n) {
            if (n instanceof je) return n;
            if (n && "function" == typeof n.then) return new je(function(e, t) {
                n.then(e, t)
            });
            var e = new je(se, !0, n);
            return Me(e, Ee), e
        },
        reject: Ve,
        race: function() {
            var e = T.apply(null, arguments).map(et);
            return new je(function(t, n) {
                e.map(function(e) {
                    return je.resolve(e).then(t, n)
                })
            })
        },
        PSD: {
            get: function() {
                return Oe
            },
            set: function(e) {
                return Oe = e
            }
        },
        totalEchoes: {
            get: function() {
                return Qe
            }
        },
        newPSD: Je,
        usePSD: it,
        scheduler: {
            get: function() {
                return be
            },
            set: function(e) {
                be = e
            }
        },
        rejectionMapper: {
            get: function() {
                return Pe
            },
            set: function(e) {
                Pe = e
            }
        },
        follow: function(i, n) {
            return new je(function(e, t) {
                return Je(function(n, r) {
                    var e = Oe;
                    e.unhandleds = [], e.onunhandled = r, e.finalize = ne(function() {
                        var t, e = this;
                        t = function() {
                            0 === e.unhandleds.length ? n() : r(e.unhandleds[0])
                        }, Ce.push(function e() {
                            t(), Ce.splice(Ce.indexOf(e), 1)
                        }), ++Ae, be(function() {
                            0 == --Ae && Le()
                        }, [])
                    }, e.finalize), i()
                }, n, e, t)
            })
        }
    }), ye && (ye.allSettled && c(je, "allSettled", function() {
        var e = T.apply(null, arguments).map(et);
        return new je(function(n) {
            0 === e.length && n([]);
            var r = e.length,
                i = new Array(r);
            e.forEach(function(e, t) {
                return je.resolve(e).then(function(e) {
                    return i[t] = {
                        status: "fulfilled",
                        value: e
                    }
                }, function(e) {
                    return i[t] = {
                        status: "rejected",
                        reason: e
                    }
                }).then(function() {
                    return --r || n(i)
                })
            })
        })
    }), ye.any && "undefined" != typeof AggregateError && c(je, "any", function() {
        var e = T.apply(null, arguments).map(et);
        return new je(function(n, r) {
            0 === e.length && r(new AggregateError([]));
            var i = e.length,
                o = new Array(i);
            e.forEach(function(e, t) {
                return je.resolve(e).then(function(e) {
                    return n(e)
                }, function(e) {
                    o[t] = e, --i || r(new AggregateError(o))
                })
            })
        })
    }));
    var ze = {
            awaits: 0,
            echoes: 0,
            id: 0
        },
        Ye = 0,
        Ge = [],
        He = 0,
        Qe = 0,
        Xe = 0;

    function Je(e, t, n, r) {
        var i = Oe,
            o = Object.create(i);
        o.parent = i, o.ref = 0, o.global = !1, o.id = ++Xe;
        var a = Ke.env;
        o.env = ve ? {
            Promise: je,
            PromiseProp: {
                value: je,
                configurable: !0,
                writable: !0
            },
            all: je.all,
            race: je.race,
            allSettled: je.allSettled,
            any: je.any,
            resolve: je.resolve,
            reject: je.reject,
            nthen: ut(a.nthen, o),
            gthen: ut(a.gthen, o)
        } : {}, t && u(o, t), ++i.ref, o.finalize = function() {
            --this.parent.ref || this.parent.finalize()
        };
        r = it(o, e, n, r);
        return 0 === o.ref && o.finalize(), r
    }

    function $e() {
        return ze.id || (ze.id = ++Ye), ++ze.awaits, ze.echoes += le, ze.id
    }

    function Ze() {
        return !!ze.awaits && (0 == --ze.awaits && (ze.id = 0), ze.echoes = ze.awaits * le, !0)
    }

    function et(e) {
        return ze.echoes && e && e.constructor === ye ? ($e(), e.then(function(e) {
            return Ze(), e
        }, function(e) {
            return Ze(), lt(e)
        })) : e
    }

    function tt() {
        var e = Ge[Ge.length - 1];
        Ge.pop(), nt(e, !1)
    }

    function nt(e, t) {
        var n, r = Oe;
        (t ? !ze.echoes || He++ && e === Oe : !He || --He && e === Oe) || ot(t ? function(e) {
            ++Qe, ze.echoes && 0 != --ze.echoes || (ze.echoes = ze.id = 0), Ge.push(Oe), nt(e, !0)
        }.bind(null, e) : tt), e !== Oe && (Oe = e, r === Ke && (Ke.env = rt()), ve && (n = Ke.env.Promise, t = e.env, he.then = t.nthen, n.prototype.then = t.gthen, (r.global || e.global) && (Object.defineProperty(h, "Promise", t.PromiseProp), n.all = t.all, n.race = t.race, n.resolve = t.resolve, n.reject = t.reject, t.allSettled && (n.allSettled = t.allSettled), t.any && (n.any = t.any))))
    }

    function rt() {
        var e = h.Promise;
        return ve ? {
            Promise: e,
            PromiseProp: Object.getOwnPropertyDescriptor(h, "Promise"),
            all: e.all,
            race: e.race,
            allSettled: e.allSettled,
            any: e.any,
            resolve: e.resolve,
            reject: e.reject,
            nthen: he.then,
            gthen: e.prototype.then
        } : {}
    }

    function it(e, t, n, r, i) {
        var o = Oe;
        try {
            return nt(e, !0), t(n, r, i)
        } finally {
            nt(o, !1)
        }
    }

    function ot(e) {
        pe.call(fe, e)
    }

    function at(t, n, r, i) {
        return "function" != typeof t ? t : function() {
            var e = Oe;
            r && $e(), nt(n, !0);
            try {
                return t.apply(this, arguments)
            } finally {
                nt(e, !1), i && ot(Ze)
            }
        }
    }

    function ut(n, r) {
        return function(e, t) {
            return n.call(this, at(e, r), at(t, r))
        }
    } - 1 === ("" + pe).indexOf("[native code]") && ($e = Ze = Z);
    var st = "unhandledrejection";

    function ct(e, t) {
        var n;
        try {
            n = t.onuncatched(e)
        } catch (e) {}
        if (!1 !== n) try {
            var r, i = {
                promise: t,
                reason: e
            };
            if (h.document && document.createEvent ? ((r = document.createEvent("Event")).initEvent(st, !0, !0), u(r, i)) : h.CustomEvent && u(r = new CustomEvent(st, {
                    detail: i
                }), i), r && h.dispatchEvent && (dispatchEvent(r), !h.PromiseRejectionEvent && h.onunhandledrejection)) try {
                h.onunhandledrejection(r)
            } catch (e) {}
            F && r && !r.defaultPrevented && console.warn("Unhandled rejection: " + (e.stack || e))
        } catch (e) {}
    }
    var lt = je.reject;

    function ft(e) {
        return !/(dexie\.js|dexie\.min\.js)/.test(e)
    }
    var ht = String.fromCharCode(65535),
        dt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",
        pt = "String expected.",
        yt = [],
        vt = "undefined" != typeof navigator && /(MSIE|Trident|Edge)/.test(navigator.userAgent),
        mt = vt,
        gt = vt,
        bt = "__dbnames",
        _t = "readonly",
        wt = "readwrite";

    function xt(e, t) {
        return e ? t ? function() {
            return e.apply(this, arguments) && t.apply(this, arguments)
        } : e : t
    }
    var kt = {
        type: 3,
        lower: -1 / 0,
        lowerOpen: !1,
        upper: [
            []
        ],
        upperOpen: !1
    };

    function Et(t) {
        return "string" != typeof t || /\./.test(t) ? function(e) {
            return e
        } : function(e) {
            return void 0 === e[t] && t in e && delete(e = A(e))[t], e
        }
    }
    var Pt = (Kt.prototype._trans = function(e, r, t) {
        var n = this._tx || Oe.trans,
            i = this.name;

        function o(e, t, n) {
            if (!n.schema[i]) throw new J.NotFound("Table " + i + " not part of transaction");
            return r(n.idbtrans, n)
        }
        var a = qe();
        try {
            return n && n.db === this.db ? n === Oe.trans ? n._promise(e, o, t) : Je(function() {
                return n._promise(e, o, t)
            }, {
                trans: n,
                transless: Oe.transless || Oe
            }) : function t(n, r, i, o) {
                if (n.idbdb && (n._state.openComplete || Oe.letThrough || n._vip)) {
                    var a = n._createTransaction(r, i, n._dbSchema);
                    try {
                        a.create(), n._state.PR1398_maxLoop = 3
                    } catch (e) {
                        return e.name === Q.InvalidState && n.isOpen() && 0 < --n._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), n._close(), n.open().then(function() {
                            return t(n, r, i, o)
                        })) : lt(e)
                    }
                    return a._promise(r, function(e, t) {
                        return Je(function() {
                            return Oe.trans = a, o(e, t, a)
                        })
                    }).then(function(e) {
                        return a._completion.then(function() {
                            return e
                        })
                    })
                }
                if (n._state.openComplete) return lt(new J.DatabaseClosed(n._state.dbOpenError));
                if (!n._state.isBeingOpened) {
                    if (!n._options.autoOpen) return lt(new J.DatabaseClosed);
                    n.open().catch(Z)
                }
                return n._state.dbReadyPromise.then(function() {
                    return t(n, r, i, o)
                })
            }(this.db, e, [this.name], o)
        } finally {
            a && Ue()
        }
    }, Kt.prototype.get = function(t, e) {
        var n = this;
        return t && t.constructor === Object ? this.where(t).first(e) : this._trans("readonly", function(e) {
            return n.core.get({
                trans: e,
                key: t
            }).then(function(e) {
                return n.hook.reading.fire(e)
            })
        }).then(e)
    }, Kt.prototype.where = function(o) {
        if ("string" == typeof o) return new this.db.WhereClause(this, o);
        if (b(o)) return new this.db.WhereClause(this, "[" + o.join("+") + "]");
        var n = x(o);
        if (1 === n.length) return this.where(n[0]).equals(o[n[0]]);
        var e = this.schema.indexes.concat(this.schema.primKey).filter(function(t) {
            return t.compound && n.every(function(e) {
                return 0 <= t.keyPath.indexOf(e)
            }) && t.keyPath.every(function(e) {
                return 0 <= n.indexOf(e)
            })
        })[0];
        if (e && this.db._maxKey !== ht) return this.where(e.name).equals(e.keyPath.map(function(e) {
            return o[e]
        }));
        !e && F && console.warn("The query " + JSON.stringify(o) + " on " + this.name + " would benefit of a compound index [" + n.join("+") + "]");
        var a = this.schema.idxByName,
            r = this.db._deps.indexedDB;

        function u(e, t) {
            try {
                return 0 === r.cmp(e, t)
            } catch (e) {
                return !1
            }
        }
        var t = n.reduce(function(e, t) {
                var n = e[0],
                    r = e[1],
                    e = a[t],
                    i = o[t];
                return [n || e, n || !e ? xt(r, e && e.multi ? function(e) {
                    e = k(e, t);
                    return b(e) && e.some(function(e) {
                        return u(i, e)
                    })
                } : function(e) {
                    return u(i, k(e, t))
                }) : r]
            }, [null, null]),
            i = t[0],
            t = t[1];
        return i ? this.where(i.name).equals(o[i.keyPath]).filter(t) : e ? this.filter(t) : this.where(n).equals("")
    }, Kt.prototype.filter = function(e) {
        return this.toCollection().and(e)
    }, Kt.prototype.count = function(e) {
        return this.toCollection().count(e)
    }, Kt.prototype.offset = function(e) {
        return this.toCollection().offset(e)
    }, Kt.prototype.limit = function(e) {
        return this.toCollection().limit(e)
    }, Kt.prototype.each = function(e) {
        return this.toCollection().each(e)
    }, Kt.prototype.toArray = function(e) {
        return this.toCollection().toArray(e)
    }, Kt.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this))
    }, Kt.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, b(e) ? "[" + e.join("+") + "]" : e))
    }, Kt.prototype.reverse = function() {
        return this.toCollection().reverse()
    }, Kt.prototype.mapToClass = function(r) {
        this.schema.mappedClass = r;

        function e(e) {
            if (!e) return e;
            var t, n = Object.create(r.prototype);
            for (t in e)
                if (m(e, t)) try {
                    n[t] = e[t]
                } catch (e) {}
            return n
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = e, this.hook("reading", e), r
    }, Kt.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
            u(this, e)
        })
    }, Kt.prototype.add = function(t, n) {
        var r = this,
            e = this.schema.primKey,
            i = e.auto,
            o = e.keyPath,
            a = t;
        return o && i && (a = Et(o)(t)), this._trans("readwrite", function(e) {
            return r.core.mutate({
                trans: e,
                type: "add",
                keys: null != n ? [n] : null,
                values: [a]
            })
        }).then(function(e) {
            return e.numFailures ? je.reject(e.failures[0]) : e.lastResult
        }).then(function(e) {
            if (o) try {
                E(t, o, e)
            } catch (e) {}
            return e
        })
    }, Kt.prototype.update = function(t, n) {
        if ("object" != typeof t || b(t)) return this.where(":id").equals(t).modify(n);
        var e = k(t, this.schema.primKey.keyPath);
        if (void 0 === e) return lt(new J.InvalidArgument("Given object does not contain its primary key"));
        try {
            "function" != typeof n ? x(n).forEach(function(e) {
                E(t, e, n[e])
            }) : n(t, {
                value: t,
                primKey: e
            })
        } catch (e) {}
        return this.where(":id").equals(e).modify(n)
    }, Kt.prototype.put = function(t, n) {
        var r = this,
            e = this.schema.primKey,
            i = e.auto,
            o = e.keyPath,
            a = t;
        return o && i && (a = Et(o)(t)), this._trans("readwrite", function(e) {
            return r.core.mutate({
                trans: e,
                type: "put",
                values: [a],
                keys: null != n ? [n] : null
            })
        }).then(function(e) {
            return e.numFailures ? je.reject(e.failures[0]) : e.lastResult
        }).then(function(e) {
            if (o) try {
                E(t, o, e)
            } catch (e) {}
            return e
        })
    }, Kt.prototype.delete = function(t) {
        var n = this;
        return this._trans("readwrite", function(e) {
            return n.core.mutate({
                trans: e,
                type: "delete",
                keys: [t]
            })
        }).then(function(e) {
            return e.numFailures ? je.reject(e.failures[0]) : void 0
        })
    }, Kt.prototype.clear = function() {
        var t = this;
        return this._trans("readwrite", function(e) {
            return t.core.mutate({
                trans: e,
                type: "deleteRange",
                range: kt
            })
        }).then(function(e) {
            return e.numFailures ? je.reject(e.failures[0]) : void 0
        })
    }, Kt.prototype.bulkGet = function(t) {
        var n = this;
        return this._trans("readonly", function(e) {
            return n.core.getMany({
                keys: t,
                trans: e
            }).then(function(e) {
                return e.map(function(e) {
                    return n.hook.reading.fire(e)
                })
            })
        })
    }, Kt.prototype.bulkAdd = function(r, e, t) {
        var o = this,
            a = Array.isArray(e) ? e : void 0,
            u = (t = t || (a ? void 0 : e)) ? t.allKeys : void 0;
        return this._trans("readwrite", function(e) {
            var t = o.schema.primKey,
                n = t.auto,
                t = t.keyPath;
            if (t && a) throw new J.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
            if (a && a.length !== r.length) throw new J.InvalidArgument("Arguments objects and keys must have the same length");
            var i = r.length,
                t = t && n ? r.map(Et(t)) : r;
            return o.core.mutate({
                trans: e,
                type: "add",
                keys: a,
                values: t,
                wantResults: u
            }).then(function(e) {
                var t = e.numFailures,
                    n = e.results,
                    r = e.lastResult,
                    e = e.failures;
                if (0 === t) return u ? n : r;
                throw new H(o.name + ".bulkAdd(): " + t + " of " + i + " operations failed", e)
            })
        })
    }, Kt.prototype.bulkPut = function(r, e, t) {
        var o = this,
            a = Array.isArray(e) ? e : void 0,
            u = (t = t || (a ? void 0 : e)) ? t.allKeys : void 0;
        return this._trans("readwrite", function(e) {
            var t = o.schema.primKey,
                n = t.auto,
                t = t.keyPath;
            if (t && a) throw new J.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
            if (a && a.length !== r.length) throw new J.InvalidArgument("Arguments objects and keys must have the same length");
            var i = r.length,
                t = t && n ? r.map(Et(t)) : r;
            return o.core.mutate({
                trans: e,
                type: "put",
                keys: a,
                values: t,
                wantResults: u
            }).then(function(e) {
                var t = e.numFailures,
                    n = e.results,
                    r = e.lastResult,
                    e = e.failures;
                if (0 === t) return u ? n : r;
                throw new H(o.name + ".bulkPut(): " + t + " of " + i + " operations failed", e)
            })
        })
    }, Kt.prototype.bulkDelete = function(t) {
        var r = this,
            i = t.length;
        return this._trans("readwrite", function(e) {
            return r.core.mutate({
                trans: e,
                type: "delete",
                keys: t
            })
        }).then(function(e) {
            var t = e.numFailures,
                n = e.lastResult,
                e = e.failures;
            if (0 === t) return n;
            throw new H(r.name + ".bulkDelete(): " + t + " of " + i + " operations failed", e)
        })
    }, Kt);

    function Kt() {}

    function Ot(i) {
        function t(e, t) {
            if (t) {
                for (var n = arguments.length, r = new Array(n - 1); --n;) r[n - 1] = arguments[n];
                return a[e].subscribe.apply(null, r), i
            }
            if ("string" == typeof e) return a[e]
        }
        var a = {};
        t.addEventType = u;
        for (var e = 1, n = arguments.length; e < n; ++e) u(arguments[e]);
        return t;

        function u(e, n, r) {
            if ("object" != typeof e) {
                var i;
                n = n || ae;
                var o = {
                    subscribers: [],
                    fire: r = r || Z,
                    subscribe: function(e) {
                        -1 === o.subscribers.indexOf(e) && (o.subscribers.push(e), o.fire = n(o.fire, e))
                    },
                    unsubscribe: function(t) {
                        o.subscribers = o.subscribers.filter(function(e) {
                            return e !== t
                        }), o.fire = o.subscribers.reduce(n, r)
                    }
                };
                return a[e] = t[e] = o
            }
            x(i = e).forEach(function(e) {
                var t = i[e];
                if (b(t)) u(e, i[e][0], i[e][1]);
                else {
                    if ("asap" !== t) throw new J.InvalidArgument("Invalid event config");
                    var n = u(e, ee, function() {
                        for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
                        n.subscribers.forEach(function(e) {
                            _(function() {
                                e.apply(null, t)
                            })
                        })
                    })
                }
            })
        }
    }

    function St(e, t) {
        return o(t).from({
            prototype: e
        }), t
    }

    function At(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter)
    }

    function Ct(e, t) {
        e.filter = xt(e.filter, t)
    }

    function jt(e, t, n) {
        var r = e.replayFilter;
        e.replayFilter = r ? function() {
            return xt(r(), t())
        } : t, e.justLimit = n && !r
    }

    function Dt(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var n = t.getIndexByKeyPath(e.index);
        if (!n) throw new J.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return n
    }

    function It(e, t, n) {
        var r = Dt(e, t.schema);
        return t.openCursor({
            trans: n,
            values: !e.keysOnly,
            reverse: "prev" === e.dir,
            unique: !!e.unique,
            query: {
                index: r,
                range: e.range
            }
        })
    }

    function Bt(e, o, t, n) {
        var a = e.replayFilter ? xt(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
            var u = {},
                r = function(e, t, n) {
                    var r, i;
                    a && !a(t, n, function(e) {
                        return t.stop(e)
                    }, function(e) {
                        return t.fail(e)
                    }) || ("[object ArrayBuffer]" === (i = "" + (r = t.primaryKey)) && (i = "" + new Uint8Array(r)), m(u, i) || (u[i] = !0, o(e, t, n)))
                };
            return Promise.all([e.or._iterate(r, t), Tt(It(e, n, t), e.algorithm, r, !e.keysOnly && e.valueMapper)])
        }
        return Tt(It(e, n, t), xt(e.algorithm, a), o, !e.keysOnly && e.valueMapper)
    }

    function Tt(e, r, i, o) {
        var a = We(o ? function(e, t, n) {
            return i(o(e), t, n)
        } : i);
        return e.then(function(n) {
            if (n) return n.start(function() {
                var t = function() {
                    return n.continue()
                };
                r && !r(n, function(e) {
                    return t = e
                }, function(e) {
                    n.stop(e), t = Z
                }, function(e) {
                    n.fail(e), t = Z
                }) || a(n.value, n, function(e) {
                    return t = e
                }), t()
            })
        })
    }

    function Rt(e, t) {
        try {
            var n = Ft(e),
                r = Ft(t);
            if (n !== r) return "Array" === n ? 1 : "Array" === r ? -1 : "binary" === n ? 1 : "binary" === r ? -1 : "string" === n ? 1 : "string" === r ? -1 : "Date" === n ? 1 : "Date" !== r ? NaN : -1;
            switch (n) {
                case "number":
                case "Date":
                case "string":
                    return t < e ? 1 : e < t ? -1 : 0;
                case "binary":
                    return function(e, t) {
                        for (var n = e.length, r = t.length, i = n < r ? n : r, o = 0; o < i; ++o)
                            if (e[o] !== t[o]) return e[o] < t[o] ? -1 : 1;
                        return n === r ? 0 : n < r ? -1 : 1
                    }(Mt(e), Mt(t));
                case "Array":
                    return function(e, t) {
                        for (var n = e.length, r = t.length, i = n < r ? n : r, o = 0; o < i; ++o) {
                            var a = Rt(e[o], t[o]);
                            if (0 !== a) return a
                        }
                        return n === r ? 0 : n < r ? -1 : 1
                    }(e, t)
            }
        } catch (e) {}
        return NaN
    }

    function Ft(e) {
        var t = typeof e;
        if ("object" != t) return t;
        if (ArrayBuffer.isView(e)) return "binary";
        e = j(e);
        return "ArrayBuffer" === e ? "binary" : e
    }

    function Mt(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e)
    }
    var Nt = (qt.prototype._read = function(e, t) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, lt.bind(null, n.error)) : n.table._trans("readonly", e).then(t)
    }, qt.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, lt.bind(null, t.error)) : t.table._trans("readwrite", e, "locked")
    }, qt.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = xt(t.algorithm, e)
    }, qt.prototype._iterate = function(e, t) {
        return Bt(this._ctx, e, t, this._ctx.table.core)
    }, qt.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype),
            n = Object.create(this._ctx);
        return e && u(n, e), t._ctx = n, t
    }, qt.prototype.raw = function() {
        return this._ctx.valueMapper = null, this
    }, qt.prototype.each = function(t) {
        var n = this._ctx;
        return this._read(function(e) {
            return Bt(n, t, e, n.table.core)
        })
    }, qt.prototype.count = function(e) {
        var i = this;
        return this._read(function(e) {
            var t = i._ctx,
                n = t.table.core;
            if (At(t, !0)) return n.count({
                trans: e,
                query: {
                    index: Dt(t, n.schema),
                    range: t.range
                }
            }).then(function(e) {
                return Math.min(e, t.limit)
            });
            var r = 0;
            return Bt(t, function() {
                return ++r, !1
            }, e, n).then(function() {
                return r
            })
        }).then(e)
    }, qt.prototype.sortBy = function(e, t) {
        var n = e.split(".").reverse(),
            r = n[0],
            i = n.length - 1;

        function o(e, t) {
            return t ? o(e[n[t]], t - 1) : e[r]
        }
        var a = "next" === this._ctx.dir ? 1 : -1;

        function u(e, t) {
            e = o(e, i), t = o(t, i);
            return e < t ? -a : t < e ? a : 0
        }
        return this.toArray(function(e) {
            return e.sort(u)
        }).then(t)
    }, qt.prototype.toArray = function(e) {
        var o = this;
        return this._read(function(e) {
            var t = o._ctx;
            if ("next" === t.dir && At(t, !0) && 0 < t.limit) {
                var n = t.valueMapper,
                    r = Dt(t, t.table.core.schema);
                return t.table.core.query({
                    trans: e,
                    limit: t.limit,
                    values: !0,
                    query: {
                        index: r,
                        range: t.range
                    }
                }).then(function(e) {
                    e = e.result;
                    return n ? e.map(n) : e
                })
            }
            var i = [];
            return Bt(t, function(e) {
                return i.push(e)
            }, e, t.table.core).then(function() {
                return i
            })
        }, e)
    }, qt.prototype.offset = function(t) {
        var e = this._ctx;
        return t <= 0 || (e.offset += t, At(e) ? jt(e, function() {
            var n = t;
            return function(e, t) {
                return 0 === n || (1 === n ? --n : t(function() {
                    e.advance(n), n = 0
                }), !1)
            }
        }) : jt(e, function() {
            var e = t;
            return function() {
                return --e < 0
            }
        })), this
    }, qt.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), jt(this._ctx, function() {
            var r = e;
            return function(e, t, n) {
                return --r <= 0 && t(n), 0 <= r
            }
        }, !0), this
    }, qt.prototype.until = function(r, i) {
        return Ct(this._ctx, function(e, t, n) {
            return !r(e.value) || (t(n), i)
        }), this
    }, qt.prototype.first = function(e) {
        return this.limit(1).toArray(function(e) {
            return e[0]
        }).then(e)
    }, qt.prototype.last = function(e) {
        return this.reverse().first(e)
    }, qt.prototype.filter = function(t) {
        var e;
        return Ct(this._ctx, function(e) {
            return t(e.value)
        }), (e = this._ctx).isMatch = xt(e.isMatch, t), this
    }, qt.prototype.and = function(e) {
        return this.filter(e)
    }, qt.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this)
    }, qt.prototype.reverse = function() {
        return this._ctx.dir = "prev" === this._ctx.dir ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this
    }, qt.prototype.desc = function() {
        return this.reverse()
    }, qt.prototype.eachKey = function(n) {
        var e = this._ctx;
        return e.keysOnly = !e.isMatch, this.each(function(e, t) {
            n(t.key, t)
        })
    }, qt.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e)
    }, qt.prototype.eachPrimaryKey = function(n) {
        var e = this._ctx;
        return e.keysOnly = !e.isMatch, this.each(function(e, t) {
            n(t.primaryKey, t)
        })
    }, qt.prototype.keys = function(e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var n = [];
        return this.each(function(e, t) {
            n.push(t.key)
        }).then(function() {
            return n
        }).then(e)
    }, qt.prototype.primaryKeys = function(e) {
        var n = this._ctx;
        if ("next" === n.dir && At(n, !0) && 0 < n.limit) return this._read(function(e) {
            var t = Dt(n, n.table.core.schema);
            return n.table.core.query({
                trans: e,
                values: !1,
                limit: n.limit,
                query: {
                    index: t,
                    range: n.range
                }
            })
        }).then(function(e) {
            return e.result
        }).then(e);
        n.keysOnly = !n.isMatch;
        var r = [];
        return this.each(function(e, t) {
            r.push(t.primaryKey)
        }).then(function() {
            return r
        }).then(e)
    }, qt.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e)
    }, qt.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(e) {
            return e[0]
        }).then(e)
    }, qt.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e)
    }, qt.prototype.distinct = function() {
        var e = this._ctx,
            e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var n = {};
        return Ct(this._ctx, function(e) {
            var t = e.primaryKey.toString(),
                e = m(n, t);
            return n[t] = !0, !e
        }), this
    }, qt.prototype.modify = function(_) {
        var n = this,
            w = this._ctx;
        return this._write(function(d) {
            var o, a, p;
            p = "function" == typeof _ ? _ : (o = x(_), a = o.length, function(e) {
                for (var t = !1, n = 0; n < a; ++n) {
                    var r = o[n],
                        i = _[r];
                    k(e, r) !== i && (E(e, r, i), t = !0)
                }
                return t
            });

            function y(e, t) {
                var n = t.failures,
                    t = t.numFailures;
                s += e - t;
                for (var r = 0, i = x(n); r < i.length; r++) {
                    var o = i[r];
                    u.push(n[o])
                }
            }
            var v = w.table.core,
                e = v.schema.primaryKey,
                m = e.outbound,
                g = e.extractKey,
                b = n.db._options.modifyChunkSize || 200,
                u = [],
                s = 0,
                t = [];
            return n.clone().primaryKeys().then(function(f) {
                function h(c) {
                    var l = Math.min(b, f.length - c);
                    return v.getMany({
                        trans: d,
                        keys: f.slice(c, c + l),
                        cache: "immutable"
                    }).then(function(e) {
                        for (var n = [], t = [], r = m ? [] : null, i = [], o = 0; o < l; ++o) {
                            var a = e[o],
                                u = {
                                    value: A(a),
                                    primKey: f[c + o]
                                };
                            !1 !== p.call(u, u.value, u) && (null == u.value ? i.push(f[c + o]) : m || 0 === Rt(g(a), g(u.value)) ? (t.push(u.value), m && r.push(f[c + o])) : (i.push(f[c + o]), n.push(u.value)))
                        }
                        var s = At(w) && w.limit === 1 / 0 && ("function" != typeof _ || _ === Ut) && {
                            index: w.index,
                            range: w.range
                        };
                        return Promise.resolve(0 < n.length && v.mutate({
                            trans: d,
                            type: "add",
                            values: n
                        }).then(function(e) {
                            for (var t in e.failures) i.splice(parseInt(t), 1);
                            y(n.length, e)
                        })).then(function() {
                            return (0 < t.length || s && "object" == typeof _) && v.mutate({
                                trans: d,
                                type: "put",
                                keys: r,
                                values: t,
                                criteria: s,
                                changeSpec: "function" != typeof _ && _
                            }).then(function(e) {
                                return y(t.length, e)
                            })
                        }).then(function() {
                            return (0 < i.length || s && _ === Ut) && v.mutate({
                                trans: d,
                                type: "delete",
                                keys: i,
                                criteria: s
                            }).then(function(e) {
                                return y(i.length, e)
                            })
                        }).then(function() {
                            return f.length > c + l && h(c + b)
                        })
                    })
                }
                return h(0).then(function() {
                    if (0 < u.length) throw new G("Error modifying one or more objects", u, s, t);
                    return f.length
                })
            })
        })
    }, qt.prototype.delete = function() {
        var i = this._ctx,
            n = i.range;
        return At(i) && (i.isPrimKey && !gt || 3 === n.type) ? this._write(function(e) {
            var t = i.table.core.schema.primaryKey,
                r = n;
            return i.table.core.count({
                trans: e,
                query: {
                    index: t,
                    range: r
                }
            }).then(function(n) {
                return i.table.core.mutate({
                    trans: e,
                    type: "deleteRange",
                    range: r
                }).then(function(e) {
                    var t = e.failures;
                    e.lastResult, e.results;
                    e = e.numFailures;
                    if (e) throw new G("Could not delete some values", Object.keys(t).map(function(e) {
                        return t[e]
                    }), n - e);
                    return n - e
                })
            })
        }) : this.modify(Ut)
    }, qt);

    function qt() {}
    var Ut = function(e, t) {
        return t.value = null
    };

    function Lt(e, t) {
        return e < t ? -1 : e === t ? 0 : 1
    }

    function Vt(e, t) {
        return t < e ? -1 : e === t ? 0 : 1
    }

    function Wt(e, t, n) {
        e = e instanceof Qt ? new e.Collection(e) : e;
        return e._ctx.error = new(n || TypeError)(t), e
    }

    function zt(e) {
        return new e.Collection(e, function() {
            return Ht("")
        }).limit(0)
    }

    function Yt(e, s, n, r) {
        var i, c, l, f, h, d, p, y = n.length;
        if (!n.every(function(e) {
                return "string" == typeof e
            })) return Wt(e, pt);

        function t(e) {
            i = "next" === e ? function(e) {
                return e.toUpperCase()
            } : function(e) {
                return e.toLowerCase()
            }, c = "next" === e ? function(e) {
                return e.toLowerCase()
            } : function(e) {
                return e.toUpperCase()
            }, l = "next" === e ? Lt : Vt;
            var t = n.map(function(e) {
                return {
                    lower: c(e),
                    upper: i(e)
                }
            }).sort(function(e, t) {
                return l(e.lower, t.lower)
            });
            f = t.map(function(e) {
                return e.upper
            }), h = t.map(function(e) {
                return e.lower
            }), p = "next" === (d = e) ? "" : r
        }
        t("next");
        e = new e.Collection(e, function() {
            return Gt(f[0], h[y - 1] + r)
        });
        e._ondirectionchange = function(e) {
            t(e)
        };
        var v = 0;
        return e._addAlgorithm(function(e, t, n) {
            var r = e.key;
            if ("string" != typeof r) return !1;
            var i = c(r);
            if (s(i, h, v)) return !0;
            for (var o = null, a = v; a < y; ++a) {
                var u = function(e, t, n, r, i, o) {
                    for (var a = Math.min(e.length, r.length), u = -1, s = 0; s < a; ++s) {
                        var c = t[s];
                        if (c !== r[s]) return i(e[s], n[s]) < 0 ? e.substr(0, s) + n[s] + n.substr(s + 1) : i(e[s], r[s]) < 0 ? e.substr(0, s) + r[s] + n.substr(s + 1) : 0 <= u ? e.substr(0, u) + t[u] + n.substr(u + 1) : null;
                        i(e[s], c) < 0 && (u = s)
                    }
                    return a < r.length && "next" === o ? e + n.substr(e.length) : a < e.length && "prev" === o ? e.substr(0, n.length) : u < 0 ? null : e.substr(0, u) + r[u] + n.substr(u + 1)
                }(r, i, f[a], h[a], l, d);
                null === u && null === o ? v = a + 1 : (null === o || 0 < l(o, u)) && (o = u)
            }
            return t(null !== o ? function() {
                e.continue(o + p)
            } : n), !1
        }), e
    }

    function Gt(e, t, n, r) {
        return {
            type: 2,
            lower: e,
            upper: t,
            lowerOpen: n,
            upperOpen: r
        }
    }

    function Ht(e) {
        return {
            type: 1,
            lower: e,
            upper: e
        }
    }
    var Qt = (Object.defineProperty(Xt.prototype, "Collection", {
        get: function() {
            return this._ctx.table.db.Collection
        },
        enumerable: !1,
        configurable: !0
    }), Xt.prototype.between = function(e, t, n, r) {
        n = !1 !== n, r = !0 === r;
        try {
            return 0 < this._cmp(e, t) || 0 === this._cmp(e, t) && (n || r) && (!n || !r) ? zt(this) : new this.Collection(this, function() {
                return Gt(e, t, !n, !r)
            })
        } catch (e) {
            return Wt(this, dt)
        }
    }, Xt.prototype.equals = function(e) {
        return null == e ? Wt(this, dt) : new this.Collection(this, function() {
            return Ht(e)
        })
    }, Xt.prototype.above = function(e) {
        return null == e ? Wt(this, dt) : new this.Collection(this, function() {
            return Gt(e, void 0, !0)
        })
    }, Xt.prototype.aboveOrEqual = function(e) {
        return null == e ? Wt(this, dt) : new this.Collection(this, function() {
            return Gt(e, void 0, !1)
        })
    }, Xt.prototype.below = function(e) {
        return null == e ? Wt(this, dt) : new this.Collection(this, function() {
            return Gt(void 0, e, !1, !0)
        })
    }, Xt.prototype.belowOrEqual = function(e) {
        return null == e ? Wt(this, dt) : new this.Collection(this, function() {
            return Gt(void 0, e)
        })
    }, Xt.prototype.startsWith = function(e) {
        return "string" != typeof e ? Wt(this, pt) : this.between(e, e + ht, !0, !0)
    }, Xt.prototype.startsWithIgnoreCase = function(e) {
        return "" === e ? this.startsWith(e) : Yt(this, function(e, t) {
            return 0 === e.indexOf(t[0])
        }, [e], ht)
    }, Xt.prototype.equalsIgnoreCase = function(e) {
        return Yt(this, function(e, t) {
            return e === t[0]
        }, [e], "")
    }, Xt.prototype.anyOfIgnoreCase = function() {
        var e = T.apply(B, arguments);
        return 0 === e.length ? zt(this) : Yt(this, function(e, t) {
            return -1 !== t.indexOf(e)
        }, e, "")
    }, Xt.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = T.apply(B, arguments);
        return 0 === e.length ? zt(this) : Yt(this, function(t, e) {
            return e.some(function(e) {
                return 0 === t.indexOf(e)
            })
        }, e, ht)
    }, Xt.prototype.anyOf = function() {
        var t = this,
            i = T.apply(B, arguments),
            o = this._cmp;
        try {
            i.sort(o)
        } catch (e) {
            return Wt(this, dt)
        }
        if (0 === i.length) return zt(this);
        var e = new this.Collection(this, function() {
            return Gt(i[0], i[i.length - 1])
        });
        e._ondirectionchange = function(e) {
            o = "next" === e ? t._ascending : t._descending, i.sort(o)
        };
        var a = 0;
        return e._addAlgorithm(function(e, t, n) {
            for (var r = e.key; 0 < o(r, i[a]);)
                if (++a === i.length) return t(n), !1;
            return 0 === o(r, i[a]) || (t(function() {
                e.continue(i[a])
            }), !1)
        }), e
    }, Xt.prototype.notEqual = function(e) {
        return this.inAnyRange([
            [-1 / 0, e],
            [e, this.db._maxKey]
        ], {
            includeLowers: !1,
            includeUppers: !1
        })
    }, Xt.prototype.noneOf = function() {
        var e = T.apply(B, arguments);
        if (0 === e.length) return new this.Collection(this);
        try {
            e.sort(this._ascending)
        } catch (e) {
            return Wt(this, dt)
        }
        var t = e.reduce(function(e, t) {
            return e ? e.concat([
                [e[e.length - 1][1], t]
            ]) : [
                [-1 / 0, t]
            ]
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, {
            includeLowers: !1,
            includeUppers: !1
        })
    }, Xt.prototype.inAnyRange = function(e, t) {
        var o = this,
            a = this._cmp,
            u = this._ascending,
            n = this._descending,
            s = this._min,
            c = this._max;
        if (0 === e.length) return zt(this);
        if (!e.every(function(e) {
                return void 0 !== e[0] && void 0 !== e[1] && u(e[0], e[1]) <= 0
            })) return Wt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", J.InvalidArgument);
        var r = !t || !1 !== t.includeLowers,
            i = t && !0 === t.includeUppers;
        var l, f = u;

        function h(e, t) {
            return f(e[0], t[0])
        }
        try {
            (l = e.reduce(function(e, t) {
                for (var n = 0, r = e.length; n < r; ++n) {
                    var i = e[n];
                    if (a(t[0], i[1]) < 0 && 0 < a(t[1], i[0])) {
                        i[0] = s(i[0], t[0]), i[1] = c(i[1], t[1]);
                        break
                    }
                }
                return n === r && e.push(t), e
            }, [])).sort(h)
        } catch (e) {
            return Wt(this, dt)
        }
        var d = 0,
            p = i ? function(e) {
                return 0 < u(e, l[d][1])
            } : function(e) {
                return 0 <= u(e, l[d][1])
            },
            y = r ? function(e) {
                return 0 < n(e, l[d][0])
            } : function(e) {
                return 0 <= n(e, l[d][0])
            };
        var v = p,
            e = new this.Collection(this, function() {
                return Gt(l[0][0], l[l.length - 1][1], !r, !i)
            });
        return e._ondirectionchange = function(e) {
            f = "next" === e ? (v = p, u) : (v = y, n), l.sort(h)
        }, e._addAlgorithm(function(e, t, n) {
            for (var r, i = e.key; v(i);)
                if (++d === l.length) return t(n), !1;
            return !p(r = i) && !y(r) || (0 === o._cmp(i, l[d][1]) || 0 === o._cmp(i, l[d][0]) || t(function() {
                f === u ? e.continue(l[d][0]) : e.continue(l[d][1])
            }), !1)
        }), e
    }, Xt.prototype.startsWithAnyOf = function() {
        var e = T.apply(B, arguments);
        return e.every(function(e) {
            return "string" == typeof e
        }) ? 0 === e.length ? zt(this) : this.inAnyRange(e.map(function(e) {
            return [e, e + ht]
        })) : Wt(this, "startsWithAnyOf() only works with strings")
    }, Xt);

    function Xt() {}

    function Jt(t) {
        return We(function(e) {
            return $t(e), t(e.target.error), !1
        })
    }

    function $t(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault()
    }
    var Zt = "storagemutated",
        en = "x-storagemutated-1",
        tn = Ot(null, Zt),
        nn = (rn.prototype._lock = function() {
            return v(!Oe.global), ++this._reculock, 1 !== this._reculock || Oe.global || (Oe.lockOwnerFor = this), this
        }, rn.prototype._unlock = function() {
            if (v(!Oe.global), 0 == --this._reculock)
                for (Oe.global || (Oe.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked();) {
                    var e = this._blockedFuncs.shift();
                    try {
                        it(e[1], e[0])
                    } catch (e) {}
                }
            return this
        }, rn.prototype._locked = function() {
            return this._reculock && Oe.lockOwnerFor !== this
        }, rn.prototype.create = function(t) {
            var n = this;
            if (!this.mode) return this;
            var e = this.db.idbdb,
                r = this.db._state.dbOpenError;
            if (v(!this.idbtrans), !t && !e) switch (r && r.name) {
                case "DatabaseClosedError":
                    throw new J.DatabaseClosed(r);
                case "MissingAPIError":
                    throw new J.MissingAPI(r.message, r);
                default:
                    throw new J.OpenFailed(r)
            }
            if (!this.active) throw new J.TransactionInactive;
            return v(null === this._completion._state), (t = this.idbtrans = t || (this.db.core || e).transaction(this.storeNames, this.mode, {
                durability: this.chromeTransactionDurability
            })).onerror = We(function(e) {
                $t(e), n._reject(t.error)
            }), t.onabort = We(function(e) {
                $t(e), n.active && n._reject(new J.Abort(t.error)), n.active = !1, n.on("abort").fire(e)
            }), t.oncomplete = We(function() {
                n.active = !1, n._resolve(), "mutatedParts" in t && tn.storagemutated.fire(t.mutatedParts)
            }), this
        }, rn.prototype._promise = function(n, r, i) {
            var o = this;
            if ("readwrite" === n && "readwrite" !== this.mode) return lt(new J.ReadOnly("Transaction is readonly"));
            if (!this.active) return lt(new J.TransactionInactive);
            if (this._locked()) return new je(function(e, t) {
                o._blockedFuncs.push([function() {
                    o._promise(n, r, i).then(e, t)
                }, Oe])
            });
            if (i) return Je(function() {
                var e = new je(function(e, t) {
                    o._lock();
                    var n = r(e, t, o);
                    n && n.then && n.then(e, t)
                });
                return e.finally(function() {
                    return o._unlock()
                }), e._lib = !0, e
            });
            var e = new je(function(e, t) {
                var n = r(e, t, o);
                n && n.then && n.then(e, t)
            });
            return e._lib = !0, e
        }, rn.prototype._root = function() {
            return this.parent ? this.parent._root() : this
        }, rn.prototype.waitFor = function(e) {
            var t, r = this._root(),
                i = je.resolve(e);
            r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
                return i
            }) : (r._waitingFor = i, r._waitingQueue = [], t = r.idbtrans.objectStore(r.storeNames[0]), function e() {
                for (++r._spinCount; r._waitingQueue.length;) r._waitingQueue.shift()();
                r._waitingFor && (t.get(-1 / 0).onsuccess = e)
            }());
            var o = r._waitingFor;
            return new je(function(t, n) {
                i.then(function(e) {
                    return r._waitingQueue.push(We(t.bind(null, e)))
                }, function(e) {
                    return r._waitingQueue.push(We(n.bind(null, e)))
                }).finally(function() {
                    r._waitingFor === o && (r._waitingFor = null)
                })
            })
        }, rn.prototype.abort = function() {
            this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new J.Abort))
        }, rn.prototype.table = function(e) {
            var t = this._memoizedTables || (this._memoizedTables = {});
            if (m(t, e)) return t[e];
            var n = this.schema[e];
            if (!n) throw new J.NotFound("Table " + e + " not part of transaction");
            n = new this.db.Table(e, n, this);
            return n.core = this.db.core.table(e), t[e] = n
        }, rn);

    function rn() {}

    function on(e, t, n, r, i, o, a) {
        return {
            name: e,
            keyPath: t,
            unique: n,
            multi: r,
            auto: i,
            compound: o,
            src: (n && !a ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + an(t)
        }
    }

    function an(e) {
        return "string" == typeof e ? e : e ? "[" + [].join.call(e, "+") + "]" : ""
    }

    function un(e, t, n) {
        return {
            name: e,
            primKey: t,
            indexes: n,
            mappedClass: null,
            idxByName: w(n, function(e) {
                return [e.name, e]
            })
        }
    }
    var sn = function(e) {
        try {
            return e.only([
                []
            ]), sn = function() {
                return [
                    []
                ]
            }, [
                []
            ]
        } catch (e) {
            return sn = function() {
                return ht
            }, ht
        }
    };

    function cn(t) {
        return null == t ? function() {} : "string" == typeof t ? 1 === (n = t).split(".").length ? function(e) {
            return e[n]
        } : function(e) {
            return k(e, n)
        } : function(e) {
            return k(e, t)
        };
        var n
    }

    function ln(e) {
        return [].slice.call(e)
    }
    var fn = 0;

    function hn(e) {
        return null == e ? ":id" : "string" == typeof e ? e : "[" + e.join("+") + "]"
    }

    function dn(e, i, t) {
        function w(e) {
            if (3 === e.type) return null;
            if (4 === e.type) throw new Error("Cannot convert never type to IDBKeyRange");
            var t = e.lower,
                n = e.upper,
                r = e.lowerOpen,
                e = e.upperOpen;
            return void 0 === t ? void 0 === n ? null : i.upperBound(n, !!e) : void 0 === n ? i.lowerBound(t, !!r) : i.bound(t, n, !!r, !!e)
        }

        function n(e) {
            var h, _ = e.name;
            return {
                name: _,
                schema: e,
                mutate: function(e) {
                    var y = e.trans,
                        v = e.type,
                        m = e.keys,
                        g = e.values,
                        b = e.range;
                    return new Promise(function(t, e) {
                        t = We(t);
                        var n = y.objectStore(_),
                            r = null == n.keyPath,
                            i = "put" === v || "add" === v;
                        if (!i && "delete" !== v && "deleteRange" !== v) throw new Error("Invalid operation type: " + v);
                        var o, a = (m || g || {
                            length: 1
                        }).length;
                        if (m && g && m.length !== g.length) throw new Error("Given keys array must have same length as given values array.");
                        if (0 === a) return t({
                            numFailures: 0,
                            failures: {},
                            results: [],
                            lastResult: void 0
                        });

                        function u(e) {
                            ++l, $t(e)
                        }
                        var s = [],
                            c = [],
                            l = 0;
                        if ("deleteRange" === v) {
                            if (4 === b.type) return t({
                                numFailures: l,
                                failures: c,
                                results: [],
                                lastResult: void 0
                            });
                            3 === b.type ? s.push(o = n.clear()) : s.push(o = n.delete(w(b)))
                        } else {
                            var r = i ? r ? [g, m] : [g, null] : [m, null],
                                f = r[0],
                                h = r[1];
                            if (i)
                                for (var d = 0; d < a; ++d) s.push(o = h && void 0 !== h[d] ? n[v](f[d], h[d]) : n[v](f[d])), o.onerror = u;
                            else
                                for (d = 0; d < a; ++d) s.push(o = n[v](f[d])), o.onerror = u
                        }

                        function p(e) {
                            e = e.target.result, s.forEach(function(e, t) {
                                return null != e.error && (c[t] = e.error)
                            }), t({
                                numFailures: l,
                                failures: c,
                                results: "delete" === v ? m : s.map(function(e) {
                                    return e.result
                                }),
                                lastResult: e
                            })
                        }
                        o.onerror = function(e) {
                            u(e), p(e)
                        }, o.onsuccess = p
                    })
                },
                getMany: function(e) {
                    var f = e.trans,
                        h = e.keys;
                    return new Promise(function(t, e) {
                        t = We(t);
                        for (var n, r = f.objectStore(_), i = h.length, o = new Array(i), a = 0, u = 0, s = function(e) {
                                e = e.target;
                                o[e._pos] = e.result, ++u === a && t(o)
                            }, c = Jt(e), l = 0; l < i; ++l) null != h[l] && ((n = r.get(h[l]))._pos = l, n.onsuccess = s, n.onerror = c, ++a);
                        0 === a && t(o)
                    })
                },
                get: function(e) {
                    var r = e.trans,
                        i = e.key;
                    return new Promise(function(t, e) {
                        t = We(t);
                        var n = r.objectStore(_).get(i);
                        n.onsuccess = function(e) {
                            return t(e.target.result)
                        }, n.onerror = Jt(e)
                    })
                },
                query: (h = s, function(f) {
                    return new Promise(function(n, e) {
                        n = We(n);
                        var r, i, o, t = f.trans,
                            a = f.values,
                            u = f.limit,
                            s = f.query,
                            c = u === 1 / 0 ? void 0 : u,
                            l = s.index,
                            s = s.range,
                            t = t.objectStore(_),
                            l = l.isPrimaryKey ? t : t.index(l.name),
                            s = w(s);
                        if (0 === u) return n({
                            result: []
                        });
                        h ? ((c = a ? l.getAll(s, c) : l.getAllKeys(s, c)).onsuccess = function(e) {
                            return n({
                                result: e.target.result
                            })
                        }, c.onerror = Jt(e)) : (r = 0, i = !a && "openKeyCursor" in l ? l.openKeyCursor(s) : l.openCursor(s), o = [], i.onsuccess = function(e) {
                            var t = i.result;
                            return t ? (o.push(a ? t.value : t.primaryKey), ++r === u ? n({
                                result: o
                            }) : void t.continue()) : n({
                                result: o
                            })
                        }, i.onerror = Jt(e))
                    })
                }),
                openCursor: function(e) {
                    var c = e.trans,
                        o = e.values,
                        a = e.query,
                        u = e.reverse,
                        l = e.unique;
                    return new Promise(function(t, n) {
                        t = We(t);
                        var e = a.index,
                            r = a.range,
                            i = c.objectStore(_),
                            i = e.isPrimaryKey ? i : i.index(e.name),
                            e = u ? l ? "prevunique" : "prev" : l ? "nextunique" : "next",
                            s = !o && "openKeyCursor" in i ? i.openKeyCursor(w(r), e) : i.openCursor(w(r), e);
                        s.onerror = Jt(n), s.onsuccess = We(function(e) {
                            var r, i, o, a, u = s.result;
                            u ? (u.___id = ++fn, u.done = !1, r = u.continue.bind(u), i = (i = u.continuePrimaryKey) && i.bind(u), o = u.advance.bind(u), a = function() {
                                throw new Error("Cursor not stopped")
                            }, u.trans = c, u.stop = u.continue = u.continuePrimaryKey = u.advance = function() {
                                throw new Error("Cursor not started")
                            }, u.fail = We(n), u.next = function() {
                                var e = this,
                                    t = 1;
                                return this.start(function() {
                                    return t-- ? e.continue() : e.stop()
                                }).then(function() {
                                    return e
                                })
                            }, u.start = function(e) {
                                function t() {
                                    if (s.result) try {
                                        e()
                                    } catch (e) {
                                        u.fail(e)
                                    } else u.done = !0, u.start = function() {
                                        throw new Error("Cursor behind last entry")
                                    }, u.stop()
                                }
                                var n = new Promise(function(t, e) {
                                    t = We(t), s.onerror = Jt(e), u.fail = e, u.stop = function(e) {
                                        u.stop = u.continue = u.continuePrimaryKey = u.advance = a, t(e)
                                    }
                                });
                                return s.onsuccess = We(function(e) {
                                    s.onsuccess = t, t()
                                }), u.continue = r, u.continuePrimaryKey = i, u.advance = o, t(), n
                            }, t(u)) : t(null)
                        }, n)
                    })
                },
                count: function(e) {
                    var t = e.query,
                        i = e.trans,
                        o = t.index,
                        a = t.range;
                    return new Promise(function(t, e) {
                        var n = i.objectStore(_),
                            r = o.isPrimaryKey ? n : n.index(o.name),
                            n = w(a),
                            r = n ? r.count(n) : r.count();
                        r.onsuccess = We(function(e) {
                            return t(e.target.result)
                        }), r.onerror = Jt(e)
                    })
                }
            }
        }
        var r, o, a, u = (o = t, a = ln((r = e).objectStoreNames), {
                schema: {
                    name: r.name,
                    tables: a.map(function(e) {
                        return o.objectStore(e)
                    }).map(function(t) {
                        var e = t.keyPath,
                            n = t.autoIncrement,
                            r = b(e),
                            i = {},
                            n = {
                                name: t.name,
                                primaryKey: {
                                    name: null,
                                    isPrimaryKey: !0,
                                    outbound: null == e,
                                    compound: r,
                                    keyPath: e,
                                    autoIncrement: n,
                                    unique: !0,
                                    extractKey: cn(e)
                                },
                                indexes: ln(t.indexNames).map(function(e) {
                                    return t.index(e)
                                }).map(function(e) {
                                    var t = e.name,
                                        n = e.unique,
                                        r = e.multiEntry,
                                        e = e.keyPath,
                                        r = {
                                            name: t,
                                            compound: b(e),
                                            keyPath: e,
                                            unique: n,
                                            multiEntry: r,
                                            extractKey: cn(e)
                                        };
                                    return i[hn(e)] = r
                                }),
                                getIndexByKeyPath: function(e) {
                                    return i[hn(e)]
                                }
                            };
                        return i[":id"] = n.primaryKey, null != e && (i[hn(e)] = n.primaryKey), n
                    })
                },
                hasGetAll: 0 < a.length && "getAll" in o.objectStore(a[0]) && !("undefined" != typeof navigator && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
            }),
            t = u.schema,
            s = u.hasGetAll,
            u = t.tables.map(n),
            c = {};
        return u.forEach(function(e) {
            return c[e.name] = e
        }), {
            stack: "dbcore",
            transaction: e.transaction.bind(e),
            table: function(e) {
                if (!c[e]) throw new Error("Table '" + e + "' not found");
                return c[e]
            },
            MIN_KEY: -1 / 0,
            MAX_KEY: sn(i),
            schema: t
        }
    }

    function pn(e, t, n, r) {
        var i = n.IDBKeyRange;
        return n.indexedDB, {
            dbcore: (r = dn(t, i, r), e.dbcore.reduce(function(e, t) {
                t = t.create;
                return g(g({}, e), t(e))
            }, r))
        }
    }

    function yn(e, t) {
        var n = e._novip,
            e = t.db,
            t = pn(n._middlewares, e, n._deps, t);
        n.core = t.dbcore, n.tables.forEach(function(e) {
            var t = e.name;
            n.core.schema.tables.some(function(e) {
                return e.name === t
            }) && (e.core = n.core.table(t), n[t] instanceof n.Table && (n[t].core = e.core))
        })
    }

    function vn(e, t, n, i) {
        var o = e._novip;
        n.forEach(function(n) {
            var r = i[n];
            t.forEach(function(e) {
                var t = f(e, n);
                (!t || "value" in t && void 0 === t.value) && (e === o.Transaction.prototype || e instanceof o.Transaction ? c(e, n, {
                    get: function() {
                        return this.table(n)
                    },
                    set: function(e) {
                        a(this, n, {
                            value: e,
                            writable: !0,
                            configurable: !0,
                            enumerable: !0
                        })
                    }
                }) : e[n] = new o.Table(n, r))
            })
        })
    }

    function mn(e, t) {
        var n = e._novip;
        t.forEach(function(e) {
            for (var t in e) e[t] instanceof n.Table && delete e[t]
        })
    }

    function gn(e, t) {
        return e._cfg.version - t._cfg.version
    }

    function bn(n, r, i, e) {
        var o = n._dbSchema,
            a = n._createTransaction("readwrite", n._storeNames, o);
        a.create(i), a._completion.catch(e);
        var u = a._reject.bind(a),
            p = Oe.transless || Oe;
        Je(function() {
            var e, s, c, l, f, t, h, d;
            Oe.trans = a, Oe.transless = p, 0 === r ? (x(o).forEach(function(e) {
                wn(i, e, o[e].primKey, o[e].indexes)
            }), yn(n, i), je.follow(function() {
                return n.on.populate.fire(a)
            }).catch(u)) : (s = r, c = a, l = i, f = (e = n)._novip, t = [], e = f._versions, h = f._dbSchema = kn(0, f.idbdb, l), d = !1, e.filter(function(e) {
                return e._cfg.version >= s
            }).forEach(function(u) {
                t.push(function() {
                    var t = h,
                        e = u._cfg.dbschema;
                    En(f, t, l), En(f, e, l), h = f._dbSchema = e;
                    var n = _n(t, e);
                    n.add.forEach(function(e) {
                        wn(l, e[0], e[1].primKey, e[1].indexes)
                    }), n.change.forEach(function(e) {
                        if (e.recreate) throw new J.Upgrade("Not yet support for changing primary key");
                        var t = l.objectStore(e.name);
                        e.add.forEach(function(e) {
                            return xn(t, e)
                        }), e.change.forEach(function(e) {
                            t.deleteIndex(e.name), xn(t, e)
                        }), e.del.forEach(function(e) {
                            return t.deleteIndex(e)
                        })
                    });
                    var r = u._cfg.contentUpgrade;
                    if (r && u._cfg.version > s) {
                        yn(f, l), c._memoizedTables = {}, d = !0;
                        var i = P(e);
                        n.del.forEach(function(e) {
                            i[e] = t[e]
                        }), mn(f, [f.Transaction.prototype]), vn(f, [f.Transaction.prototype], x(i), i), c.schema = i;
                        var o, a = R(r);
                        a && $e();
                        n = je.follow(function() {
                            var e;
                            (o = r(c)) && a && (e = Ze.bind(null, null), o.then(e, e))
                        });
                        return o && "function" == typeof o.then ? je.resolve(o) : n.then(function() {
                            return o
                        })
                    }
                }), t.push(function(e) {
                    var t, n, r;
                    d && mt || (t = u._cfg.dbschema, n = t, r = e, [].slice.call(r.db.objectStoreNames).forEach(function(e) {
                        return null == n[e] && r.db.deleteObjectStore(e)
                    })), mn(f, [f.Transaction.prototype]), vn(f, [f.Transaction.prototype], f._storeNames, f._dbSchema), c.schema = f._dbSchema
                })
            }), function e() {
                return t.length ? je.resolve(t.shift()(c.idbtrans)).then(e) : je.resolve()
            }().then(function() {
                var t, n;
                n = l, x(t = h).forEach(function(e) {
                    n.db.objectStoreNames.contains(e) || wn(n, e, t[e].primKey, t[e].indexes)
                })
            }).catch(u))
        })
    }

    function _n(e, t) {
        var n, r = {
            del: [],
            add: [],
            change: []
        };
        for (n in e) t[n] || r.del.push(n);
        for (n in t) {
            var i = e[n],
                o = t[n];
            if (i) {
                var a = {
                    name: n,
                    def: o,
                    recreate: !1,
                    del: [],
                    add: [],
                    change: []
                };
                if ("" + (i.primKey.keyPath || "") != "" + (o.primKey.keyPath || "") || i.primKey.auto !== o.primKey.auto && !vt) a.recreate = !0, r.change.push(a);
                else {
                    var u = i.idxByName,
                        s = o.idxByName,
                        c = void 0;
                    for (c in u) s[c] || a.del.push(c);
                    for (c in s) {
                        var l = u[c],
                            f = s[c];
                        l ? l.src !== f.src && a.change.push(f) : a.add.push(f)
                    }(0 < a.del.length || 0 < a.add.length || 0 < a.change.length) && r.change.push(a)
                }
            } else r.add.push([n, o])
        }
        return r
    }

    function wn(e, t, n, r) {
        var i = e.db.createObjectStore(t, n.keyPath ? {
            keyPath: n.keyPath,
            autoIncrement: n.auto
        } : {
            autoIncrement: n.auto
        });
        return r.forEach(function(e) {
            return xn(i, e)
        }), i
    }

    function xn(e, t) {
        e.createIndex(t.name, t.keyPath, {
            unique: t.unique,
            multiEntry: t.multi
        })
    }

    function kn(e, t, u) {
        var s = {};
        return y(t.objectStoreNames, 0).forEach(function(e) {
            for (var t = u.objectStore(e), n = on(an(a = t.keyPath), a || "", !1, !1, !!t.autoIncrement, a && "string" != typeof a, !0), r = [], i = 0; i < t.indexNames.length; ++i) {
                var o = t.index(t.indexNames[i]),
                    a = o.keyPath,
                    o = on(o.name, a, !!o.unique, !!o.multiEntry, !1, a && "string" != typeof a, !1);
                r.push(o)
            }
            s[e] = un(e, n, r)
        }), s
    }

    function En(e, t, n) {
        for (var r = e._novip, i = n.db.objectStoreNames, o = 0; o < i.length; ++o) {
            var a = i[o],
                u = n.objectStore(a);
            r._hasGetAll = "getAll" in u;
            for (var s = 0; s < u.indexNames.length; ++s) {
                var c = u.indexNames[s],
                    l = u.index(c).keyPath,
                    f = "string" == typeof l ? l : "[" + y(l).join("+") + "]";
                !t[a] || (l = t[a].idxByName[f]) && (l.name = c, delete t[a].idxByName[f], t[a].idxByName[c] = l)
            }
        }
        "undefined" != typeof navigator && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && h.WorkerGlobalScope && h instanceof h.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (r._hasGetAll = !1)
    }
    var Pn = (Kn.prototype._parseStoresSpec = function(r, i) {
        x(r).forEach(function(e) {
            if (null !== r[e]) {
                var t = r[e].split(",").map(function(e, t) {
                        var n = (e = e.trim()).replace(/([&*]|\+\+)/g, ""),
                            r = /^\[/.test(n) ? n.match(/^\[(.*)\]$/)[1].split("+") : n;
                        return on(n, r || null, /\&/.test(e), /\*/.test(e), /\+\+/.test(e), b(r), 0 === t)
                    }),
                    n = t.shift();
                if (n.multi) throw new J.Schema("Primary key cannot be multi-valued");
                t.forEach(function(e) {
                    if (e.auto) throw new J.Schema("Only primary key can be marked as autoIncrement (++)");
                    if (!e.keyPath) throw new J.Schema("Index must have a name and cannot be an empty string")
                }), i[e] = un(e, n, t)
            }
        })
    }, Kn.prototype.stores = function(e) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? u(this._cfg.storesSource, e) : e;
        var e = t._versions,
            n = {},
            r = {};
        return e.forEach(function(e) {
            u(n, e._cfg.storesSource), r = e._cfg.dbschema = {}, e._parseStoresSpec(n, r)
        }), t._dbSchema = r, mn(t, [t._allTables, t, t.Transaction.prototype]), vn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], x(r), r), t._storeNames = x(r), this
    }, Kn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = ue(this._cfg.contentUpgrade || Z, e), this
    }, Kn);

    function Kn() {}

    function On(e, t) {
        var n = e._dbNamesDB;
        return n || (n = e._dbNamesDB = new Gn(bt, {
            addons: [],
            indexedDB: e,
            IDBKeyRange: t
        })).version(1).stores({
            dbnames: "name"
        }), n.table("dbnames")
    }

    function Sn(e) {
        return e && "function" == typeof e.databases
    }

    function An(e) {
        return Je(function() {
            return Oe.letThrough = !0, e()
        })
    }

    function Cn(f) {
        var h = f._state,
            r = f._deps.indexedDB;
        if (h.isBeingOpened || f.idbdb) return h.dbReadyPromise.then(function() {
            return h.dbOpenError ? lt(h.dbOpenError) : f
        });
        F && (h.openCanceller._stackHolder = U()), h.isBeingOpened = !0, h.dbOpenError = null, h.openComplete = !1;
        var t = h.openCanceller;

        function e() {
            if (h.openCanceller !== t) throw new J.DatabaseClosed("db.open() was cancelled")
        }
        var n, i = h.dbReadyResolve,
            d = null,
            p = !1;
        return je.race([t, ("undefined" == typeof navigator ? je.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(e) {
            function t() {
                return indexedDB.databases().finally(e)
            }
            n = setInterval(t, 100), t()
        }).finally(function() {
            return clearInterval(n)
        }) : Promise.resolve()).then(function() {
            return new je(function(s, n) {
                if (e(), !r) throw new J.MissingAPI;
                var c = f.name,
                    l = h.autoSchema ? r.open(c) : r.open(c, Math.round(10 * f.verno));
                if (!l) throw new J.MissingAPI;
                l.onerror = Jt(n), l.onblocked = We(f._fireOnBlocked), l.onupgradeneeded = We(function(e) {
                    var t;
                    d = l.transaction, h.autoSchema && !f._options.allowEmptyDB ? (l.onerror = $t, d.abort(), l.result.close(), (t = r.deleteDatabase(c)).onsuccess = t.onerror = We(function() {
                        n(new J.NoSuchDatabase("Database " + c + " doesnt exist"))
                    })) : (d.onerror = Jt(n), e = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion, p = e < 1, f._novip.idbdb = l.result, bn(f, e / 10, d, n))
                }, n), l.onsuccess = We(function() {
                    d = null;
                    var e, t, n, r, i, o = f._novip.idbdb = l.result,
                        a = y(o.objectStoreNames);
                    if (0 < a.length) try {
                        var u = o.transaction(1 === (r = a).length ? r[0] : r, "readonly");
                        h.autoSchema ? (t = o, n = u, (e = (e = f)._novip).verno = t.version / 10, n = e._dbSchema = kn(0, t, n), e._storeNames = y(t.objectStoreNames, 0), vn(e, [e._allTables], x(n), n)) : (En(f, f._dbSchema, u), ((i = _n(kn(0, (i = f).idbdb, u), i._dbSchema)).add.length || i.change.some(function(e) {
                            return e.add.length || e.change.length
                        })) && console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")), yn(f, u)
                    } catch (e) {}
                    yt.push(f), o.onversionchange = We(function(e) {
                        h.vcFired = !0, f.on("versionchange").fire(e)
                    }), o.onclose = We(function(e) {
                        f.on("close").fire(e)
                    }), p && (i = f._deps, u = c, o = i.indexedDB, i = i.IDBKeyRange, Sn(o) || u === bt || On(o, i).put({
                        name: u
                    }).catch(Z)), s()
                }, n)
            })
        })]).then(function() {
            return e(), h.onReadyBeingFired = [], je.resolve(An(function() {
                return f.on.ready.fire(f.vip)
            })).then(function e() {
                if (0 < h.onReadyBeingFired.length) {
                    var t = h.onReadyBeingFired.reduce(ue, Z);
                    return h.onReadyBeingFired = [], je.resolve(An(function() {
                        return t(f.vip)
                    })).then(e)
                }
            })
        }).finally(function() {
            h.onReadyBeingFired = null, h.isBeingOpened = !1
        }).then(function() {
            return f
        }).catch(function(e) {
            h.dbOpenError = e;
            try {
                d && d.abort()
            } catch (e) {}
            return t === h.openCanceller && f._close(), lt(e)
        }).finally(function() {
            h.openComplete = !0, i()
        })
    }

    function jn(t) {
        function e(e) {
            return t.next(e)
        }
        var r = n(e),
            i = n(function(e) {
                return t.throw(e)
            });

        function n(n) {
            return function(e) {
                var t = n(e),
                    e = t.value;
                return t.done ? e : e && "function" == typeof e.then ? e.then(r, i) : b(e) ? Promise.all(e).then(r, i) : r(e)
            }
        }
        return n(e)()
    }

    function Dn(e, t, n) {
        for (var r = b(e) ? e.slice() : [e], i = 0; i < n; ++i) r.push(t);
        return r
    }
    var In = {
        stack: "dbcore",
        name: "VirtualIndexMiddleware",
        level: 1,
        create: function(f) {
            return g(g({}, f), {
                table: function(e) {
                    var a = f.table(e),
                        t = a.schema,
                        u = {},
                        s = [];

                    function c(e, t, n) {
                        var r = hn(e),
                            i = u[r] = u[r] || [],
                            o = null == e ? 0 : "string" == typeof e ? 1 : e.length,
                            r = 0 < t,
                            r = g(g({}, n), {
                                isVirtual: r,
                                keyTail: t,
                                keyLength: o,
                                extractKey: cn(e),
                                unique: !r && n.unique
                            });
                        return i.push(r), r.isPrimaryKey || s.push(r), 1 < o && c(2 === o ? e[0] : e.slice(0, o - 1), t + 1, n), i.sort(function(e, t) {
                            return e.keyTail - t.keyTail
                        }), r
                    }
                    e = c(t.primaryKey.keyPath, 0, t.primaryKey);
                    u[":id"] = [e];
                    for (var n = 0, r = t.indexes; n < r.length; n++) {
                        var i = r[n];
                        c(i.keyPath, 0, i)
                    }

                    function l(e) {
                        var t, n = e.query.index;
                        return n.isVirtual ? g(g({}, e), {
                            query: {
                                index: n,
                                range: (t = e.query.range, n = n.keyTail, {
                                    type: 1 === t.type ? 2 : t.type,
                                    lower: Dn(t.lower, t.lowerOpen ? f.MAX_KEY : f.MIN_KEY, n),
                                    lowerOpen: !0,
                                    upper: Dn(t.upper, t.upperOpen ? f.MIN_KEY : f.MAX_KEY, n),
                                    upperOpen: !0
                                })
                            }
                        }) : e
                    }
                    return g(g({}, a), {
                        schema: g(g({}, t), {
                            primaryKey: e,
                            indexes: s,
                            getIndexByKeyPath: function(e) {
                                return (e = u[hn(e)]) && e[0]
                            }
                        }),
                        count: function(e) {
                            return a.count(l(e))
                        },
                        query: function(e) {
                            return a.query(l(e))
                        },
                        openCursor: function(t) {
                            var e = t.query.index,
                                r = e.keyTail,
                                n = e.isVirtual,
                                i = e.keyLength;
                            return n ? a.openCursor(l(t)).then(function(e) {
                                return e && o(e)
                            }) : a.openCursor(t);

                            function o(n) {
                                return Object.create(n, {
                                    continue: {
                                        value: function(e) {
                                            null != e ? n.continue(Dn(e, t.reverse ? f.MAX_KEY : f.MIN_KEY, r)) : t.unique ? n.continue(n.key.slice(0, i).concat(t.reverse ? f.MIN_KEY : f.MAX_KEY, r)) : n.continue()
                                        }
                                    },
                                    continuePrimaryKey: {
                                        value: function(e, t) {
                                            n.continuePrimaryKey(Dn(e, f.MAX_KEY, r), t)
                                        }
                                    },
                                    primaryKey: {
                                        get: function() {
                                            return n.primaryKey
                                        }
                                    },
                                    key: {
                                        get: function() {
                                            var e = n.key;
                                            return 1 === i ? e[0] : e.slice(0, i)
                                        }
                                    },
                                    value: {
                                        get: function() {
                                            return n.value
                                        }
                                    }
                                })
                            }
                        }
                    })
                }
            })
        }
    };

    function Bn(i, o, a, u) {
        return a = a || {}, u = u || "", x(i).forEach(function(e) {
            var t, n, r;
            m(o, e) ? (t = i[e], n = o[e], "object" == typeof t && "object" == typeof n && t && n ? (r = j(t)) !== j(n) ? a[u + e] = o[e] : "Object" === r ? Bn(t, n, a, u + e + ".") : t !== n && (a[u + e] = o[e]) : t !== n && (a[u + e] = o[e])) : a[u + e] = void 0
        }), x(o).forEach(function(e) {
            m(i, e) || (a[u + e] = o[e])
        }), a
    }
    var Tn = {
        stack: "dbcore",
        name: "HooksMiddleware",
        level: 2,
        create: function(e) {
            return g(g({}, e), {
                table: function(r) {
                    var y = e.table(r),
                        v = y.schema.primaryKey;
                    return g(g({}, y), {
                        mutate: function(e) {
                            var t = Oe.trans,
                                n = t.table(r).hook,
                                h = n.deleting,
                                d = n.creating,
                                p = n.updating;
                            switch (e.type) {
                                case "add":
                                    if (d.fire === Z) break;
                                    return t._promise("readwrite", function() {
                                        return a(e)
                                    }, !0);
                                case "put":
                                    if (d.fire === Z && p.fire === Z) break;
                                    return t._promise("readwrite", function() {
                                        return a(e)
                                    }, !0);
                                case "delete":
                                    if (h.fire === Z) break;
                                    return t._promise("readwrite", function() {
                                        return a(e)
                                    }, !0);
                                case "deleteRange":
                                    if (h.fire === Z) break;
                                    return t._promise("readwrite", function() {
                                        return function n(r, i, o) {
                                            return y.query({
                                                trans: r,
                                                values: !1,
                                                query: {
                                                    index: v,
                                                    range: i
                                                },
                                                limit: o
                                            }).then(function(e) {
                                                var t = e.result;
                                                return a({
                                                    type: "delete",
                                                    keys: t,
                                                    trans: r
                                                }).then(function(e) {
                                                    return 0 < e.numFailures ? Promise.reject(e.failures[0]) : t.length < o ? {
                                                        failures: [],
                                                        numFailures: 0,
                                                        lastResult: void 0
                                                    } : n(r, g(g({}, i), {
                                                        lower: t[t.length - 1],
                                                        lowerOpen: !0
                                                    }), o)
                                                })
                                            })
                                        }(e.trans, e.range, 1e4)
                                    }, !0)
                            }
                            return y.mutate(e);

                            function a(c) {
                                var e, t, n, l = Oe.trans,
                                    f = c.keys || (t = v, "delete" === (n = c).type ? n.keys : n.keys || n.values.map(t.extractKey));
                                if (!f) throw new Error("Keys missing");
                                return "delete" !== (c = "add" === c.type || "put" === c.type ? g(g({}, c), {
                                    keys: f
                                }) : g({}, c)).type && (c.values = i([], c.values, !0)), c.keys && (c.keys = i([], c.keys, !0)), e = y, n = f, ("add" === (t = c).type ? Promise.resolve([]) : e.getMany({
                                    trans: t.trans,
                                    keys: n,
                                    cache: "immutable"
                                })).then(function(u) {
                                    var s = f.map(function(e, t) {
                                        var n, r, i, o = u[t],
                                            a = {
                                                onerror: null,
                                                onsuccess: null
                                            };
                                        return "delete" === c.type ? h.fire.call(a, e, o, l) : "add" === c.type || void 0 === o ? (n = d.fire.call(a, e, c.values[t], l), null == e && null != n && (c.keys[t] = e = n, v.outbound || E(c.values[t], v.keyPath, e))) : (n = Bn(o, c.values[t]), (r = p.fire.call(a, n, e, o, l)) && (i = c.values[t], Object.keys(r).forEach(function(e) {
                                            m(i, e) ? i[e] = r[e] : E(i, e, r[e])
                                        }))), a
                                    });
                                    return y.mutate(c).then(function(e) {
                                        for (var t = e.failures, n = e.results, r = e.numFailures, e = e.lastResult, i = 0; i < f.length; ++i) {
                                            var o = (n || f)[i],
                                                a = s[i];
                                            null == o ? a.onerror && a.onerror(t[i]) : a.onsuccess && a.onsuccess("put" === c.type && u[i] ? c.values[i] : o)
                                        }
                                        return {
                                            failures: t,
                                            results: n,
                                            numFailures: r,
                                            lastResult: e
                                        }
                                    }).catch(function(t) {
                                        return s.forEach(function(e) {
                                            return e.onerror && e.onerror(t)
                                        }), Promise.reject(t)
                                    })
                                })
                            }
                        }
                    })
                }
            })
        }
    };

    function Rn(e, t, n) {
        try {
            if (!t) return null;
            if (t.keys.length < e.length) return null;
            for (var r = [], i = 0, o = 0; i < t.keys.length && o < e.length; ++i) 0 === Rt(t.keys[i], e[o]) && (r.push(n ? A(t.values[i]) : t.values[i]), ++o);
            return r.length === e.length ? r : null
        } catch (e) {
            return null
        }
    }
    var Fn = {
        stack: "dbcore",
        level: -1,
        create: function(t) {
            return {
                table: function(e) {
                    var n = t.table(e);
                    return g(g({}, n), {
                        getMany: function(t) {
                            if (!t.cache) return n.getMany(t);
                            var e = Rn(t.keys, t.trans._cache, "clone" === t.cache);
                            return e ? je.resolve(e) : n.getMany(t).then(function(e) {
                                return t.trans._cache = {
                                    keys: t.keys,
                                    values: "clone" === t.cache ? A(e) : e
                                }, e
                            })
                        },
                        mutate: function(e) {
                            return "add" !== e.type && (e.trans._cache = null), n.mutate(e)
                        }
                    })
                }
            }
        }
    };

    function Mn(e) {
        return !("from" in e)
    }
    var Nn = function(e, t) {
        if (!this) {
            var n = new Nn;
            return e && "d" in e && u(n, e), n
        }
        u(this, arguments.length ? {
            d: 1,
            from: e,
            to: 1 < arguments.length ? t : e
        } : {
            d: 0
        })
    };

    function qn(e, t, n) {
        var r = Rt(t, n);
        if (!isNaN(r)) {
            if (0 < r) throw RangeError();
            if (Mn(e)) return u(e, {
                from: t,
                to: n,
                d: 1
            });
            var i = e.l,
                r = e.r;
            if (Rt(n, e.from) < 0) return i ? qn(i, t, n) : e.l = {
                from: t,
                to: n,
                d: 1,
                l: null,
                r: null
            }, Wn(e);
            if (0 < Rt(t, e.to)) return r ? qn(r, t, n) : e.r = {
                from: t,
                to: n,
                d: 1,
                l: null,
                r: null
            }, Wn(e);
            Rt(t, e.from) < 0 && (e.from = t, e.l = null, e.d = r ? r.d + 1 : 1), 0 < Rt(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1);
            n = !e.r;
            i && !e.l && Un(e, i), r && n && Un(e, r)
        }
    }

    function Un(e, t) {
        Mn(t) || function e(t, n) {
            var r = n.from,
                i = n.to,
                o = n.l,
                n = n.r;
            qn(t, r, i), o && e(t, o), n && e(t, n)
        }(e, t)
    }

    function Ln(e, t) {
        var n = Vn(t),
            r = n.next();
        if (r.done) return !1;
        for (var i = r.value, o = Vn(e), a = o.next(i.from), u = a.value; !r.done && !a.done;) {
            if (Rt(u.from, i.to) <= 0 && 0 <= Rt(u.to, i.from)) return !0;
            Rt(i.from, u.from) < 0 ? i = (r = n.next(u.from)).value : u = (a = o.next(i.from)).value
        }
        return !1
    }

    function Vn(e) {
        var n = Mn(e) ? null : {
            s: 0,
            n: e
        };
        return {
            next: function(e) {
                for (var t = 0 < arguments.length; n;) switch (n.s) {
                    case 0:
                        if (n.s = 1, t)
                            for (; n.n.l && Rt(e, n.n.from) < 0;) n = {
                                up: n,
                                n: n.n.l,
                                s: 1
                            };
                        else
                            for (; n.n.l;) n = {
                                up: n,
                                n: n.n.l,
                                s: 1
                            };
                    case 1:
                        if (n.s = 2, !t || Rt(e, n.n.to) <= 0) return {
                            value: n.n,
                            done: !1
                        };
                    case 2:
                        if (n.n.r) {
                            n.s = 3, n = {
                                up: n,
                                n: n.n.r,
                                s: 0
                            };
                            continue
                        }
                    case 3:
                        n = n.up
                }
                return {
                    done: !0
                }
            }
        }
    }

    function Wn(e) {
        var t, n, r = ((null === (t = e.r) || void 0 === t ? void 0 : t.d) || 0) - ((null === (n = e.l) || void 0 === n ? void 0 : n.d) || 0),
            i = 1 < r ? "r" : r < -1 ? "l" : "";
        i && (t = "r" == i ? "l" : "r", n = g({}, e), r = e[i], e.from = r.from, e.to = r.to, e[i] = r[i], n[i] = r[t], (e[t] = n).d = zn(n)), e.d = zn(e)
    }

    function zn(e) {
        var t = e.r,
            e = e.l;
        return (t ? e ? Math.max(t.d, e.d) : t.d : e ? e.d : 0) + 1
    }
    r(Nn.prototype, ((e = {
        add: function(e) {
            return Un(this, e), this
        },
        addKey: function(e) {
            return qn(this, e, e), this
        },
        addKeys: function(e) {
            var t = this;
            return e.forEach(function(e) {
                return qn(t, e, e)
            }), this
        }
    })[D] = function() {
        return Vn(this)
    }, e));
    var Yn = {
        stack: "dbcore",
        level: 0,
        create: function(r) {
            var v = r.schema.name,
                m = new Nn(r.MIN_KEY, r.MAX_KEY);
            return g(g({}, r), {
                table: function(d) {
                    function e(e) {
                        var e = (t = e.query).index,
                            t = t.range;
                        return [e, new Nn(null !== (e = t.lower) && void 0 !== e ? e : r.MIN_KEY, null !== (t = t.upper) && void 0 !== t ? t : r.MAX_KEY)]
                    }
                    var p = r.table(d),
                        y = p.schema,
                        t = y.primaryKey,
                        c = t.extractKey,
                        l = t.outbound,
                        n = g(g({}, p), {
                            mutate: function(e) {
                                function n(e) {
                                    return r[e = "idb://" + v + "/" + d + "/" + e] || (r[e] = new Nn)
                                }
                                var t = e.trans,
                                    r = t.mutatedParts || (t.mutatedParts = {}),
                                    i = n(""),
                                    s = n(":dels"),
                                    c = e.type,
                                    t = "deleteRange" === e.type ? [e.range] : "delete" === e.type ? [e.keys] : e.values.length < 50 ? [
                                        [], e.values
                                    ] : [],
                                    l = t[0],
                                    f = t[1],
                                    h = e.trans._cache;
                                return p.mutate(e).then(function(e) {
                                    var t, o, a, u;
                                    return b(l) ? ("delete" !== c && (l = e.results), i.addKeys(l), (t = Rn(l, h)) || "add" === c || s.addKeys(l), (t || f) && (o = n, a = t, u = f, y.indexes.forEach(function(t) {
                                        var n = o(t.name || "");

                                        function r(e) {
                                            return null != e ? t.extractKey(e) : null
                                        }

                                        function i(e) {
                                            return t.multiEntry && b(e) ? e.forEach(function(e) {
                                                return n.addKey(e)
                                            }) : n.addKey(e)
                                        }(a || u).forEach(function(e, t) {
                                            var n = a && r(a[t]),
                                                t = u && r(u[t]);
                                            0 !== Rt(n, t) && (null != n && i(n), null != t && i(t))
                                        })
                                    }))) : l ? (t = {
                                        from: l.lower,
                                        to: l.upper
                                    }, s.add(t), i.add(t)) : (i.add(m), s.add(m), y.indexes.forEach(function(e) {
                                        return n(e.name).add(m)
                                    })), e
                                })
                            }
                        }),
                        f = {
                            get: function(e) {
                                return [t, new Nn(e.key)]
                            },
                            getMany: function(e) {
                                return [t, (new Nn).addKeys(e.keys)]
                            },
                            count: e,
                            query: e,
                            openCursor: e
                        };
                    return x(f).forEach(function(s) {
                        n[s] = function(i) {
                            var t = Oe.subscr;
                            if (t) {
                                var e = function(e) {
                                        e = "idb://" + v + "/" + d + "/" + e;
                                        return t[e] || (t[e] = new Nn)
                                    },
                                    o = e(""),
                                    a = e(":dels"),
                                    n = f[s](i),
                                    r = n[0],
                                    n = n[1];
                                if (e(r.name || "").add(n), !r.isPrimaryKey) {
                                    if ("count" !== s) {
                                        var u = "query" === s && l && i.values && p.query(g(g({}, i), {
                                            values: !1
                                        }));
                                        return p[s].apply(this, arguments).then(function(t) {
                                            if ("query" === s) {
                                                if (l && i.values) return u.then(function(e) {
                                                    e = e.result;
                                                    return o.addKeys(e), t
                                                });
                                                var e = i.values ? t.result.map(c) : t.result;
                                                (i.values ? o : a).addKeys(e)
                                            } else if ("openCursor" === s) {
                                                var n = t,
                                                    r = i.values;
                                                return n && Object.create(n, {
                                                    key: {
                                                        get: function() {
                                                            return a.addKey(n.primaryKey), n.key
                                                        }
                                                    },
                                                    primaryKey: {
                                                        get: function() {
                                                            var e = n.primaryKey;
                                                            return a.addKey(e), e
                                                        }
                                                    },
                                                    value: {
                                                        get: function() {
                                                            return r && o.addKey(n.primaryKey), n.value
                                                        }
                                                    }
                                                })
                                            }
                                            return t
                                        })
                                    }
                                    a.add(m)
                                }
                            }
                            return p[s].apply(this, arguments)
                        }
                    }), n
                }
            })
        }
    };
    var Gn = (Hn.prototype.version = function(t) {
        if (isNaN(t) || t < .1) throw new J.Type("Given version is not a positive number");
        if (t = Math.round(10 * t) / 10, this.idbdb || this._state.isBeingOpened) throw new J.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, t);
        var e = this._versions,
            n = e.filter(function(e) {
                return e._cfg.version === t
            })[0];
        return n || (n = new this.Version(t), e.push(n), e.sort(gn), n.stores({}), this._state.autoSchema = !1, n)
    }, Hn.prototype._whenReady = function(e) {
        var n = this;
        return this.idbdb && (this._state.openComplete || Oe.letThrough || this._vip) ? e() : new je(function(e, t) {
            if (n._state.openComplete) return t(new J.DatabaseClosed(n._state.dbOpenError));
            if (!n._state.isBeingOpened) {
                if (!n._options.autoOpen) return void t(new J.DatabaseClosed);
                n.open().catch(Z)
            }
            n._state.dbReadyPromise.then(e, t)
        }).then(e)
    }, Hn.prototype.use = function(e) {
        var t = e.stack,
            n = e.create,
            r = e.level,
            i = e.name;
        i && this.unuse({
            stack: t,
            name: i
        });
        e = this._middlewares[t] || (this._middlewares[t] = []);
        return e.push({
            stack: t,
            create: n,
            level: null == r ? 10 : r,
            name: i
        }), e.sort(function(e, t) {
            return e.level - t.level
        }), this
    }, Hn.prototype.unuse = function(e) {
        var t = e.stack,
            n = e.name,
            r = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(e) {
            return r ? e.create !== r : !!n && e.name !== n
        })), this
    }, Hn.prototype.open = function() {
        return Cn(this)
    }, Hn.prototype._close = function() {
        var n = this._state,
            e = yt.indexOf(this);
        if (0 <= e && yt.splice(e, 1), this.idbdb) {
            try {
                this.idbdb.close()
            } catch (e) {}
            this._novip.idbdb = null
        }
        n.dbReadyPromise = new je(function(e) {
            n.dbReadyResolve = e
        }), n.openCanceller = new je(function(e, t) {
            n.cancelOpen = t
        })
    }, Hn.prototype.close = function() {
        this._close();
        var e = this._state;
        this._options.autoOpen = !1, e.dbOpenError = new J.DatabaseClosed, e.isBeingOpened && e.cancelOpen(e.dbOpenError)
    }, Hn.prototype.delete = function() {
        var i = this,
            n = 0 < arguments.length,
            o = this._state;
        return new je(function(r, t) {
            function e() {
                i.close();
                var e = i._deps.indexedDB.deleteDatabase(i.name);
                e.onsuccess = We(function() {
                    var e, t, n;
                    e = i._deps, t = i.name, n = e.indexedDB, e = e.IDBKeyRange, Sn(n) || t === bt || On(n, e).delete(t).catch(Z), r()
                }), e.onerror = Jt(t), e.onblocked = i._fireOnBlocked
            }
            if (n) throw new J.InvalidArgument("Arguments not allowed in db.delete()");
            o.isBeingOpened ? o.dbReadyPromise.then(e) : e()
        })
    }, Hn.prototype.backendDB = function() {
        return this.idbdb
    }, Hn.prototype.isOpen = function() {
        return null !== this.idbdb
    }, Hn.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && "DatabaseClosed" === e.name
    }, Hn.prototype.hasFailed = function() {
        return null !== this._state.dbOpenError
    }, Hn.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema
    }, Object.defineProperty(Hn.prototype, "tables", {
        get: function() {
            var t = this;
            return x(this._allTables).map(function(e) {
                return t._allTables[e]
            })
        },
        enumerable: !1,
        configurable: !0
    }), Hn.prototype.transaction = function() {
        var e = function(e, t, n) {
            var r = arguments.length;
            if (r < 2) throw new J.InvalidArgument("Too few arguments");
            for (var i = new Array(r - 1); --r;) i[r - 1] = arguments[r];
            return n = i.pop(), [e, K(i), n]
        }.apply(this, arguments);
        return this._transaction.apply(this, e)
    }, Hn.prototype._transaction = function(e, t, n) {
        var r = this,
            i = Oe.trans;
        i && i.db === this && -1 === e.indexOf("!") || (i = null);
        var o, a, u = -1 !== e.indexOf("?");
        e = e.replace("!", "").replace("?", "");
        try {
            if (a = t.map(function(e) {
                    e = e instanceof r.Table ? e.name : e;
                    if ("string" != typeof e) throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                    return e
                }), "r" == e || e === _t) o = _t;
            else {
                if ("rw" != e && e != wt) throw new J.InvalidArgument("Invalid transaction mode: " + e);
                o = wt
            }
            if (i) {
                if (i.mode === _t && o === wt) {
                    if (!u) throw new J.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                    i = null
                }
                i && a.forEach(function(e) {
                    if (i && -1 === i.storeNames.indexOf(e)) {
                        if (!u) throw new J.SubTransaction("Table " + e + " not included in parent transaction.");
                        i = null
                    }
                }), u && i && !i.active && (i = null)
            }
        } catch (n) {
            return i ? i._promise(null, function(e, t) {
                t(n)
            }) : lt(n)
        }
        var s = function i(o, a, u, s, c) {
            return je.resolve().then(function() {
                var e = Oe.transless || Oe,
                    t = o._createTransaction(a, u, o._dbSchema, s),
                    e = {
                        trans: t,
                        transless: e
                    };
                if (s) t.idbtrans = s.idbtrans;
                else try {
                    t.create(), o._state.PR1398_maxLoop = 3
                } catch (e) {
                    return e.name === Q.InvalidState && o.isOpen() && 0 < --o._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), o._close(), o.open().then(function() {
                        return i(o, a, u, null, c)
                    })) : lt(e)
                }
                var n, r = R(c);
                return r && $e(), e = je.follow(function() {
                    var e;
                    (n = c.call(t, t)) && (r ? (e = Ze.bind(null, null), n.then(e, e)) : "function" == typeof n.next && "function" == typeof n.throw && (n = jn(n)))
                }, e), (n && "function" == typeof n.then ? je.resolve(n).then(function(e) {
                    return t.active ? e : lt(new J.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))
                }) : e.then(function() {
                    return n
                })).then(function(e) {
                    return s && t._resolve(), t._completion.then(function() {
                        return e
                    })
                }).catch(function(e) {
                    return t._reject(e), lt(e)
                })
            })
        }.bind(null, this, o, a, i, n);
        return i ? i._promise(o, s, "lock") : Oe.trans ? it(Oe.transless, function() {
            return r._whenReady(s)
        }) : this._whenReady(s)
    }, Hn.prototype.table = function(e) {
        if (!m(this._allTables, e)) throw new J.InvalidTable("Table " + e + " does not exist");
        return this._allTables[e]
    }, Hn);

    function Hn(e, t) {
        var o = this;
        this._middlewares = {}, this.verno = 0;
        var n = Hn.dependencies;
        this._options = t = g({
            addons: Hn.addons,
            autoOpen: !0,
            indexedDB: n.indexedDB,
            IDBKeyRange: n.IDBKeyRange
        }, t), this._deps = {
            indexedDB: t.indexedDB,
            IDBKeyRange: t.IDBKeyRange
        };
        n = t.addons;
        this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var a, r, u, i, s, c = {
            dbOpenError: null,
            isBeingOpened: !1,
            onReadyBeingFired: null,
            openComplete: !1,
            dbReadyResolve: Z,
            dbReadyPromise: null,
            cancelOpen: Z,
            openCanceller: null,
            autoSchema: !0,
            PR1398_maxLoop: 3
        };
        c.dbReadyPromise = new je(function(e) {
            c.dbReadyResolve = e
        }), c.openCanceller = new je(function(e, t) {
            c.cancelOpen = t
        }), this._state = c, this.name = e, this.on = Ot(this, "populate", "blocked", "versionchange", "close", {
            ready: [ue, Z]
        }), this.on.ready.subscribe = p(this.on.ready.subscribe, function(i) {
            return function(n, r) {
                Hn.vip(function() {
                    var t, e = o._state;
                    e.openComplete ? (e.dbOpenError || je.resolve().then(n), r && i(n)) : e.onReadyBeingFired ? (e.onReadyBeingFired.push(n), r && i(n)) : (i(n), t = o, r || i(function e() {
                        t.on.ready.unsubscribe(n), t.on.ready.unsubscribe(e)
                    }))
                })
            }
        }), this.Collection = (a = this, St(Nt.prototype, function(e, t) {
            this.db = a;
            var n = kt,
                r = null;
            if (t) try {
                n = t()
            } catch (e) {
                r = e
            }
            var i = e._ctx,
                t = i.table,
                e = t.hook.reading.fire;
            this._ctx = {
                table: t,
                index: i.index,
                isPrimKey: !i.index || t.schema.primKey.keyPath && i.index === t.schema.primKey.name,
                range: n,
                keysOnly: !1,
                dir: "next",
                unique: "",
                algorithm: null,
                filter: null,
                replayFilter: null,
                justLimit: !0,
                isMatch: null,
                offset: 0,
                limit: 1 / 0,
                error: r,
                or: i.or,
                valueMapper: e !== ee ? e : null
            }
        })), this.Table = (r = this, St(Pt.prototype, function(e, t, n) {
            this.db = r, this._tx = n, this.name = e, this.schema = t, this.hook = r._allTables[e] ? r._allTables[e].hook : Ot(null, {
                creating: [re, Z],
                reading: [te, ee],
                updating: [oe, Z],
                deleting: [ie, Z]
            })
        })), this.Transaction = (u = this, St(nn.prototype, function(e, t, n, r, i) {
            var o = this;
            this.db = u, this.mode = e, this.storeNames = t, this.schema = n, this.chromeTransactionDurability = r, this.idbtrans = null, this.on = Ot(this, "complete", "error", "abort"), this.parent = i || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new je(function(e, t) {
                o._resolve = e, o._reject = t
            }), this._completion.then(function() {
                o.active = !1, o.on.complete.fire()
            }, function(e) {
                var t = o.active;
                return o.active = !1, o.on.error.fire(e), o.parent ? o.parent._reject(e) : t && o.idbtrans && o.idbtrans.abort(), lt(e)
            })
        })), this.Version = (i = this, St(Pn.prototype, function(e) {
            this.db = i, this._cfg = {
                version: e,
                storesSource: null,
                dbschema: {},
                tables: {},
                contentUpgrade: null
            }
        })), this.WhereClause = (s = this, St(Qt.prototype, function(e, t, n) {
            this.db = s, this._ctx = {
                table: e,
                index: ":id" === t ? null : t,
                or: n
            };
            var r = s._deps.indexedDB;
            if (!r) throw new J.MissingAPI;
            this._cmp = this._ascending = r.cmp.bind(r), this._descending = function(e, t) {
                return r.cmp(t, e)
            }, this._max = function(e, t) {
                return 0 < r.cmp(e, t) ? e : t
            }, this._min = function(e, t) {
                return r.cmp(e, t) < 0 ? e : t
            }, this._IDBKeyRange = s._deps.IDBKeyRange
        })), this.on("versionchange", function(e) {
            0 < e.newVersion ? console.warn("Another connection wants to upgrade database '" + o.name + "'. Closing db now to resume the upgrade.") : console.warn("Another connection wants to delete database '" + o.name + "'. Closing db now to resume the delete request."), o.close()
        }), this.on("blocked", function(e) {
            !e.newVersion || e.newVersion < e.oldVersion ? console.warn("Dexie.delete('" + o.name + "') was blocked") : console.warn("Upgrade '" + o.name + "' blocked by other connection holding version " + e.oldVersion / 10)
        }), this._maxKey = sn(t.IDBKeyRange), this._createTransaction = function(e, t, n, r) {
            return new o.Transaction(e, t, n, o._options.chromeTransactionDurability, r)
        }, this._fireOnBlocked = function(t) {
            o.on("blocked").fire(t), yt.filter(function(e) {
                return e.name === o.name && e !== o && !e._state.vcFired
            }).map(function(e) {
                return e.on("versionchange").fire(t)
            })
        }, this.use(In), this.use(Tn), this.use(Yn), this.use(Fn), this.vip = Object.create(this, {
            _vip: {
                value: !0
            }
        }), n.forEach(function(e) {
            return e(o)
        })
    }
    var e = "undefined" != typeof Symbol && "observable" in Symbol ? Symbol.observable : "@@observable",
        Qn = (Xn.prototype.subscribe = function(e, t, n) {
            return this._subscribe(e && "function" != typeof e ? e : {
                next: e,
                error: t,
                complete: n
            })
        }, Xn.prototype[e] = function() {
            return this
        }, Xn);

    function Xn(e) {
        this._subscribe = e
    }

    function Jn(t, n) {
        return x(n).forEach(function(e) {
            Un(t[e] || (t[e] = new Nn), n[e])
        }), t
    }

    function $n(d) {
        return new Qn(function(n) {
            var r = R(d);
            var i = !1,
                o = {},
                a = {},
                u = {
                    get closed() {
                        return i
                    },
                    unsubscribe: function() {
                        i = !0, tn.storagemutated.unsubscribe(f)
                    }
                };
            n.start && n.start(u);
            var s = !1,
                c = !1;

            function l() {
                return x(a).some(function(e) {
                    return o[e] && Ln(o[e], a[e])
                })
            }
            var f = function(e) {
                    Jn(o, e), l() && h()
                },
                h = function() {
                    var t, e;
                    s || i || (o = {}, e = function(e) {
                        r && $e();
                        var t = function() {
                                return Je(d, {
                                    subscr: e,
                                    trans: null
                                })
                            },
                            t = Oe.trans ? it(Oe.transless, t) : t();
                        return r && t.then(Ze, Ze), t
                    }(t = {}), c || (tn(Zt, f), c = !0), s = !0, Promise.resolve(e).then(function(e) {
                        s = !1, i || (l() ? h() : (o = {}, a = t, n.next && n.next(e)))
                    }, function(e) {
                        s = !1, n.error && n.error(e), u.unsubscribe()
                    }))
                };
            return h(), u
        })
    }
    try {
        nr = {
            indexedDB: h.indexedDB || h.mozIndexedDB || h.webkitIndexedDB || h.msIndexedDB,
            IDBKeyRange: h.IDBKeyRange || h.webkitIDBKeyRange
        }
    } catch (e) {
        nr = {
            indexedDB: null,
            IDBKeyRange: null
        }
    }
    var Zn = Gn;

    function er(e) {
        var t = rr;
        try {
            rr = !0, tn.storagemutated.fire(e)
        } finally {
            rr = t
        }
    }
    r(Zn, g(g({}, V), {
        delete: function(e) {
            return new Zn(e, {
                addons: []
            }).delete()
        },
        exists: function(e) {
            return new Zn(e, {
                addons: []
            }).open().then(function(e) {
                return e.close(), !0
            }).catch("NoSuchDatabaseError", function() {
                return !1
            })
        },
        getDatabaseNames: function(e) {
            try {
                return t = Zn.dependencies, n = t.indexedDB, t = t.IDBKeyRange, (Sn(n) ? Promise.resolve(n.databases()).then(function(e) {
                    return e.map(function(e) {
                        return e.name
                    }).filter(function(e) {
                        return e !== bt
                    })
                }) : On(n, t).toCollection().primaryKeys()).then(e)
            } catch (e) {
                return lt(new J.MissingAPI)
            }
            var t, n
        },
        defineClass: function() {
            return function(e) {
                u(this, e)
            }
        },
        ignoreTransaction: function(e) {
            return Oe.trans ? it(Oe.transless, e) : e()
        },
        vip: An,
        async: function(t) {
            return function() {
                try {
                    var e = jn(t.apply(this, arguments));
                    return e && "function" == typeof e.then ? e : je.resolve(e)
                } catch (e) {
                    return lt(e)
                }
            }
        },
        spawn: function(e, t, n) {
            try {
                var r = jn(e.apply(n, t || []));
                return r && "function" == typeof r.then ? r : je.resolve(r)
            } catch (e) {
                return lt(e)
            }
        },
        currentTransaction: {
            get: function() {
                return Oe.trans || null
            }
        },
        waitFor: function(e, t) {
            t = je.resolve("function" == typeof e ? Zn.ignoreTransaction(e) : e).timeout(t || 6e4);
            return Oe.trans ? Oe.trans.waitFor(t) : t
        },
        Promise: je,
        debug: {
            get: function() {
                return F
            },
            set: function(e) {
                M(e, "dexie" === e ? function() {
                    return !0
                } : ft)
            }
        },
        derive: o,
        extend: u,
        props: r,
        override: p,
        Events: Ot,
        on: tn,
        liveQuery: $n,
        extendObservabilitySet: Jn,
        getByKeyPath: k,
        setByKeyPath: E,
        delByKeyPath: function(t, e) {
            "string" == typeof e ? E(t, e, void 0) : "length" in e && [].map.call(e, function(e) {
                E(t, e, void 0)
            })
        },
        shallowClone: P,
        deepClone: A,
        getObjectDiff: Bn,
        cmp: Rt,
        asap: _,
        minKey: -1 / 0,
        addons: [],
        connections: yt,
        errnames: Q,
        dependencies: nr,
        semVer: "3.2.1",
        version: "3.2.1".split(".").map(function(e) {
            return parseInt(e)
        }).reduce(function(e, t, n) {
            return e + t / Math.pow(10, 2 * n)
        })
    })), Zn.maxKey = sn(Zn.dependencies.IDBKeyRange), "undefined" != typeof dispatchEvent && "undefined" != typeof addEventListener && (tn(Zt, function(e) {
        var t;
        rr || (vt ? (t = document.createEvent("CustomEvent")).initCustomEvent(en, !0, !0, e) : t = new CustomEvent(en, {
            detail: e
        }), rr = !0, dispatchEvent(t), rr = !1)
    }), addEventListener(en, function(e) {
        e = e.detail;
        rr || er(e)
    }));
    var tr, nr, rr = !1;
    return "undefined" != typeof BroadcastChannel ? (tr = new BroadcastChannel(en), tn(Zt, function(e) {
        rr || tr.postMessage(e)
    }), tr.onmessage = function(e) {
        e.data && er(e.data)
    }) : "undefined" != typeof self && "undefined" != typeof navigator && (tn(Zt, function(t) {
        try {
            rr || ("undefined" != typeof localStorage && localStorage.setItem(en, JSON.stringify({
                trig: Math.random(),
                changedParts: t
            })), "object" == typeof self.clients && i([], self.clients.matchAll({
                includeUncontrolled: !0
            }), !0).forEach(function(e) {
                return e.postMessage({
                    type: en,
                    changedParts: t
                })
            }))
        } catch (e) {}
    }), addEventListener("storage", function(e) {
        e.key !== en || (e = JSON.parse(e.newValue)) && er(e.changedParts)
    }), (nr = self.document && navigator.serviceWorker) && nr.addEventListener("message", function(e) {
        e = e.data;
        e && e.type === en && er(e.changedParts)
    })), je.rejectionMapper = function(e, t) {
        return !e || e instanceof z || e instanceof TypeError || e instanceof SyntaxError || !e.name || !$[e.name] ? e : (t = new $[e.name](t || e.message, e), "stack" in e && c(t, "stack", {
            get: function() {
                return this.inner.stack
            }
        }), t)
    }, M(F, ft), g(Gn, Object.freeze({
        __proto__: null,
        Dexie: Gn,
        liveQuery: $n,
        default: Gn,
        RangeSet: Nn,
        mergeRanges: Un,
        rangesOverlap: Ln
    }), {
        default: Gn
    }), Gn
});