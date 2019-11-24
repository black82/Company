(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
    0: function (t, e, n) {
        t.exports = n("zUnb")
    }, zUnb: function (t, e, n) {
        "use strict";
        n.r(e);
        var r = function (t, e) {
            return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(t, e)
        };

        function i(t, e) {
            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }

        var o = function () {
            return (o = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }).apply(this, arguments)
        };

        function a(t, e, n, r) {
            var i, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a);
            return o > 3 && a && Object.defineProperty(e, n, a), a
        }

        function s(t, e) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
        }

        function l(t) {
            var e = "function" == typeof Symbol && t[Symbol.iterator], n = 0;
            return e ? e.call(t) : {
                next: function () {
                    return t && n >= t.length && (t = void 0), {value: t && t[n++], done: !t}
                }
            }
        }

        function u(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var r, i, o = n.call(t), a = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(r = o.next()).done;) a.push(r.value)
            } catch (s) {
                i = {error: s}
            } finally {
                try {
                    r && !r.done && (n = o.return) && n.call(o)
                } finally {
                    if (i) throw i.error
                }
            }
            return a
        }

        function c() {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(u(arguments[e]));
            return t
        }

        var h = Array.isArray || function (t) {
            return t && "number" == typeof t.length
        };

        function p(t) {
            return null !== t && "object" == typeof t
        }

        function f(t) {
            return "function" == typeof t
        }

        function d(t) {
            return Error.call(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function (t, e) {
                return e + 1 + ") " + t.toString()
            }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t, this
        }

        d.prototype = Object.create(Error.prototype);
        var m = d, y = function () {
            function t(t) {
                this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, t && (this._unsubscribe = t)
            }

            var e;
            return t.prototype.unsubscribe = function () {
                var t, e = !1;
                if (!this.closed) {
                    var n = this._parent, r = this._parents, i = this._unsubscribe, o = this._subscriptions;
                    this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null;
                    for (var a = -1, s = r ? r.length : 0; n;) n.remove(this), n = ++a < s && r[a] || null;
                    if (f(i)) try {
                        i.call(this)
                    } catch (u) {
                        e = !0, t = u instanceof m ? g(u.errors) : [u]
                    }
                    if (h(o)) for (a = -1, s = o.length; ++a < s;) {
                        var l = o[a];
                        if (p(l)) try {
                            l.unsubscribe()
                        } catch (u) {
                            e = !0, t = t || [], u instanceof m ? t = t.concat(g(u.errors)) : t.push(u)
                        }
                    }
                    if (e) throw new m(t)
                }
            }, t.prototype.add = function (e) {
                var n = e;
                switch (typeof e) {
                    case"function":
                        n = new t(e);
                    case"object":
                        if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                        if (this.closed) return n.unsubscribe(), n;
                        if (!(n instanceof t)) {
                            var r = n;
                            (n = new t)._subscriptions = [r]
                        }
                        break;
                    default:
                        if (!e) return t.EMPTY;
                        throw new Error("unrecognized teardown " + e + " added to Subscription.")
                }
                if (n._addParent(this)) {
                    var i = this._subscriptions;
                    i ? i.push(n) : this._subscriptions = [n]
                }
                return n
            }, t.prototype.remove = function (t) {
                var e = this._subscriptions;
                if (e) {
                    var n = e.indexOf(t);
                    -1 !== n && e.splice(n, 1)
                }
            }, t.prototype._addParent = function (t) {
                var e = this._parent, n = this._parents;
                return e !== t && (e ? n ? -1 === n.indexOf(t) && (n.push(t), !0) : (this._parents = [t], !0) : (this._parent = t, !0))
            }, t.EMPTY = ((e = new t).closed = !0, e), t
        }();

        function g(t) {
            return t.reduce(function (t, e) {
                return t.concat(e instanceof m ? e.errors : e)
            }, [])
        }

        var v = !1, _ = {
            Promise: void 0, set useDeprecatedSynchronousErrorHandling(t) {
                v = t
            }, get useDeprecatedSynchronousErrorHandling() {
                return v
            }
        };

        function b(t) {
            setTimeout(function () {
                throw t
            })
        }

        var w = {
                closed: !0, next: function (t) {
                }, error: function (t) {
                    if (_.useDeprecatedSynchronousErrorHandling) throw t;
                    b(t)
                }, complete: function () {
                }
            }, C = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random(),
            S = function (t) {
                function e(n, r, i) {
                    var o = t.call(this) || this;
                    switch (o.syncErrorValue = null, o.syncErrorThrown = !1, o.syncErrorThrowable = !1, o.isStopped = !1, arguments.length) {
                        case 0:
                            o.destination = w;
                            break;
                        case 1:
                            if (!n) {
                                o.destination = w;
                                break
                            }
                            if ("object" == typeof n) {
                                n instanceof e ? (o.syncErrorThrowable = n.syncErrorThrowable, o.destination = n, n.add(o)) : (o.syncErrorThrowable = !0, o.destination = new E(o, n));
                                break
                            }
                        default:
                            o.syncErrorThrowable = !0, o.destination = new E(o, n, r, i)
                    }
                    return o
                }

                return i(e, t), e.prototype[C] = function () {
                    return this
                }, e.create = function (t, n, r) {
                    var i = new e(t, n, r);
                    return i.syncErrorThrowable = !1, i
                }, e.prototype.next = function (t) {
                    this.isStopped || this._next(t)
                }, e.prototype.error = function (t) {
                    this.isStopped || (this.isStopped = !0, this._error(t))
                }, e.prototype.complete = function () {
                    this.isStopped || (this.isStopped = !0, this._complete())
                }, e.prototype.unsubscribe = function () {
                    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this))
                }, e.prototype._next = function (t) {
                    this.destination.next(t)
                }, e.prototype._error = function (t) {
                    this.destination.error(t), this.unsubscribe()
                }, e.prototype._complete = function () {
                    this.destination.complete(), this.unsubscribe()
                }, e.prototype._unsubscribeAndRecycle = function () {
                    var t = this._parent, e = this._parents;
                    return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = t, this._parents = e, this
                }, e
            }(y), E = function (t) {
                function e(e, n, r, i) {
                    var o, a = t.call(this) || this;
                    a._parentSubscriber = e;
                    var s = a;
                    return f(n) ? o = n : n && (o = n.next, r = n.error, i = n.complete, n !== w && (f((s = Object.create(n)).unsubscribe) && a.add(s.unsubscribe.bind(s)), s.unsubscribe = a.unsubscribe.bind(a))), a._context = s, a._next = o, a._error = r, a._complete = i, a
                }

                return i(e, t), e.prototype.next = function (t) {
                    if (!this.isStopped && this._next) {
                        var e = this._parentSubscriber;
                        _.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                    }
                }, e.prototype.error = function (t) {
                    if (!this.isStopped) {
                        var e = this._parentSubscriber, n = _.useDeprecatedSynchronousErrorHandling;
                        if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe()); else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : b(t), this.unsubscribe(); else {
                            if (this.unsubscribe(), n) throw t;
                            b(t)
                        }
                    }
                }, e.prototype.complete = function () {
                    var t = this;
                    if (!this.isStopped) {
                        var e = this._parentSubscriber;
                        if (this._complete) {
                            var n = function () {
                                return t._complete.call(t._context)
                            };
                            _.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                        } else this.unsubscribe()
                    }
                }, e.prototype.__tryOrUnsub = function (t, e) {
                    try {
                        t.call(this._context, e)
                    } catch (n) {
                        if (this.unsubscribe(), _.useDeprecatedSynchronousErrorHandling) throw n;
                        b(n)
                    }
                }, e.prototype.__tryOrSetError = function (t, e, n) {
                    if (!_.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                    try {
                        e.call(this._context, n)
                    } catch (r) {
                        return _.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = r, t.syncErrorThrown = !0, !0) : (b(r), !0)
                    }
                    return !1
                }, e.prototype._unsubscribe = function () {
                    var t = this._parentSubscriber;
                    this._context = null, this._parentSubscriber = null, t.unsubscribe()
                }, e
            }(S), x = "function" == typeof Symbol && Symbol.observable || "@@observable";

        function A() {
        }

        function k() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return O(t)
        }

        function O(t) {
            return t ? 1 === t.length ? t[0] : function (e) {
                return t.reduce(function (t, e) {
                    return e(t)
                }, e)
            } : A
        }

        var P = function () {
            function t(t) {
                this._isScalar = !1, t && (this._subscribe = t)
            }

            return t.prototype.lift = function (e) {
                var n = new t;
                return n.source = this, n.operator = e, n
            }, t.prototype.subscribe = function (t, e, n) {
                var r = this.operator, i = function (t, e, n) {
                    if (t) {
                        if (t instanceof S) return t;
                        if (t[C]) return t[C]()
                    }
                    return t || e || n ? new S(t, e, n) : new S(w)
                }(t, e, n);
                if (i.add(r ? r.call(i, this.source) : this.source || _.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)), _.useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown)) throw i.syncErrorValue;
                return i
            }, t.prototype._trySubscribe = function (t) {
                try {
                    return this._subscribe(t)
                } catch (e) {
                    _.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), function (t) {
                        for (; t;) {
                            var e = t.destination;
                            if (t.closed || t.isStopped) return !1;
                            t = e && e instanceof S ? e : null
                        }
                        return !0
                    }(t) ? t.error(e) : console.warn(e)
                }
            }, t.prototype.forEach = function (t, e) {
                var n = this;
                return new (e = T(e))(function (e, r) {
                    var i;
                    i = n.subscribe(function (e) {
                        try {
                            t(e)
                        } catch (n) {
                            r(n), i && i.unsubscribe()
                        }
                    }, r, e)
                })
            }, t.prototype._subscribe = function (t) {
                var e = this.source;
                return e && e.subscribe(t)
            }, t.prototype[x] = function () {
                return this
            }, t.prototype.pipe = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return 0 === t.length ? this : O(t)(this)
            }, t.prototype.toPromise = function (t) {
                var e = this;
                return new (t = T(t))(function (t, n) {
                    var r;
                    e.subscribe(function (t) {
                        return r = t
                    }, function (t) {
                        return n(t)
                    }, function () {
                        return t(r)
                    })
                })
            }, t.create = function (e) {
                return new t(e)
            }, t
        }();

        function T(t) {
            if (t || (t = _.Promise || Promise), !t) throw new Error("no Promise impl found");
            return t
        }

        function I() {
            return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
        }

        I.prototype = Object.create(Error.prototype);
        var R = I, N = function (t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.subject = e, r.subscriber = n, r.closed = !1, r
            }

            return i(e, t), e.prototype.unsubscribe = function () {
                if (!this.closed) {
                    this.closed = !0;
                    var t = this.subject, e = t.observers;
                    if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
                        var n = e.indexOf(this.subscriber);
                        -1 !== n && e.splice(n, 1)
                    }
                }
            }, e
        }(y), D = function (t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.destination = e, n
            }

            return i(e, t), e
        }(S), B = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e
            }

            return i(e, t), e.prototype[C] = function () {
                return new D(this)
            }, e.prototype.lift = function (t) {
                var e = new M(this, this);
                return e.operator = t, e
            }, e.prototype.next = function (t) {
                if (this.closed) throw new R;
                if (!this.isStopped) for (var e = this.observers, n = e.length, r = e.slice(), i = 0; i < n; i++) r[i].next(t)
            }, e.prototype.error = function (t) {
                if (this.closed) throw new R;
                this.hasError = !0, this.thrownError = t, this.isStopped = !0;
                for (var e = this.observers, n = e.length, r = e.slice(), i = 0; i < n; i++) r[i].error(t);
                this.observers.length = 0
            }, e.prototype.complete = function () {
                if (this.closed) throw new R;
                this.isStopped = !0;
                for (var t = this.observers, e = t.length, n = t.slice(), r = 0; r < e; r++) n[r].complete();
                this.observers.length = 0
            }, e.prototype.unsubscribe = function () {
                this.isStopped = !0, this.closed = !0, this.observers = null
            }, e.prototype._trySubscribe = function (e) {
                if (this.closed) throw new R;
                return t.prototype._trySubscribe.call(this, e)
            }, e.prototype._subscribe = function (t) {
                if (this.closed) throw new R;
                return this.hasError ? (t.error(this.thrownError), y.EMPTY) : this.isStopped ? (t.complete(), y.EMPTY) : (this.observers.push(t), new N(this, t))
            }, e.prototype.asObservable = function () {
                var t = new P;
                return t.source = this, t
            }, e.create = function (t, e) {
                return new M(t, e)
            }, e
        }(P), M = function (t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.destination = e, r.source = n, r
            }

            return i(e, t), e.prototype.next = function (t) {
                var e = this.destination;
                e && e.next && e.next(t)
            }, e.prototype.error = function (t) {
                var e = this.destination;
                e && e.error && this.destination.error(t)
            }, e.prototype.complete = function () {
                var t = this.destination;
                t && t.complete && this.destination.complete()
            }, e.prototype._subscribe = function (t) {
                return this.source ? this.source.subscribe(t) : y.EMPTY
            }, e
        }(B);

        function V(t) {
            return t && "function" == typeof t.schedule
        }

        var F = function (t) {
            function e(e, n, r) {
                var i = t.call(this) || this;
                return i.parent = e, i.outerValue = n, i.outerIndex = r, i.index = 0, i
            }

            return i(e, t), e.prototype._next = function (t) {
                this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
            }, e.prototype._error = function (t) {
                this.parent.notifyError(t, this), this.unsubscribe()
            }, e.prototype._complete = function () {
                this.parent.notifyComplete(this), this.unsubscribe()
            }, e
        }(S), j = function (t) {
            return function (e) {
                for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
                e.closed || e.complete()
            }
        }, L = function (t) {
            return function (e) {
                return t.then(function (t) {
                    e.closed || (e.next(t), e.complete())
                }, function (t) {
                    return e.error(t)
                }).then(null, b), e
            }
        };

        function z() {
            return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
        }

        var U = z(), H = function (t) {
            return function (e) {
                for (var n = t[U](); ;) {
                    var r = n.next();
                    if (r.done) {
                        e.complete();
                        break
                    }
                    if (e.next(r.value), e.closed) break
                }
                return "function" == typeof n.return && e.add(function () {
                    n.return && n.return()
                }), e
            }
        }, q = function (t) {
            return function (e) {
                var n = t[x]();
                if ("function" != typeof n.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                return n.subscribe(e)
            }
        }, G = function (t) {
            return t && "number" == typeof t.length && "function" != typeof t
        };

        function W(t) {
            return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
        }

        var K = function (t) {
            if (t instanceof P) return function (e) {
                return t._isScalar ? (e.next(t.value), void e.complete()) : t.subscribe(e)
            };
            if (t && "function" == typeof t[x]) return q(t);
            if (G(t)) return j(t);
            if (W(t)) return L(t);
            if (t && "function" == typeof t[U]) return H(t);
            var e = p(t) ? "an invalid object" : "'" + t + "'";
            throw new TypeError("You provided " + e + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
        };

        function Q(t, e, n, r, i) {
            if (void 0 === i && (i = new F(t, n, r)), !i.closed) return K(e)(i)
        }

        var Z = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.prototype.notifyNext = function (t, e, n, r, i) {
                this.destination.next(e)
            }, e.prototype.notifyError = function (t, e) {
                this.destination.error(t)
            }, e.prototype.notifyComplete = function (t) {
                this.destination.complete()
            }, e
        }(S);

        function Y(t, e) {
            return function (n) {
                if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                return n.lift(new $(t, e))
            }
        }

        var $ = function () {
            function t(t, e) {
                this.project = t, this.thisArg = e
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new X(t, this.project, this.thisArg))
            }, t
        }(), X = function (t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.project = n, i.count = 0, i.thisArg = r || i, i
            }

            return i(e, t), e.prototype._next = function (t) {
                var e;
                try {
                    e = this.project.call(this.thisArg, t, this.count++)
                } catch (n) {
                    return void this.destination.error(n)
                }
                this.destination.next(e)
            }, e
        }(S);

        function J(t, e) {
            return new P(e ? function (n) {
                var r = new y, i = 0;
                return r.add(e.schedule(function () {
                    i !== t.length ? (n.next(t[i++]), n.closed || r.add(this.schedule())) : n.complete()
                })), r
            } : j(t))
        }

        function tt(t, e) {
            if (!e) return t instanceof P ? t : new P(K(t));
            if (null != t) {
                if (function (t) {
                    return t && "function" == typeof t[x]
                }(t)) return function (t, e) {
                    return new P(e ? function (n) {
                        var r = new y;
                        return r.add(e.schedule(function () {
                            var i = t[x]();
                            r.add(i.subscribe({
                                next: function (t) {
                                    r.add(e.schedule(function () {
                                        return n.next(t)
                                    }))
                                }, error: function (t) {
                                    r.add(e.schedule(function () {
                                        return n.error(t)
                                    }))
                                }, complete: function () {
                                    r.add(e.schedule(function () {
                                        return n.complete()
                                    }))
                                }
                            }))
                        })), r
                    } : q(t))
                }(t, e);
                if (W(t)) return function (t, e) {
                    return new P(e ? function (n) {
                        var r = new y;
                        return r.add(e.schedule(function () {
                            return t.then(function (t) {
                                r.add(e.schedule(function () {
                                    n.next(t), r.add(e.schedule(function () {
                                        return n.complete()
                                    }))
                                }))
                            }, function (t) {
                                r.add(e.schedule(function () {
                                    return n.error(t)
                                }))
                            })
                        })), r
                    } : L(t))
                }(t, e);
                if (G(t)) return J(t, e);
                if (function (t) {
                    return t && "function" == typeof t[U]
                }(t) || "string" == typeof t) return function (t, e) {
                    if (!t) throw new Error("Iterable cannot be null");
                    return new P(e ? function (n) {
                        var r, i = new y;
                        return i.add(function () {
                            r && "function" == typeof r.return && r.return()
                        }), i.add(e.schedule(function () {
                            r = t[U](), i.add(e.schedule(function () {
                                if (!n.closed) {
                                    var t, e;
                                    try {
                                        var i = r.next();
                                        t = i.value, e = i.done
                                    } catch (o) {
                                        return void n.error(o)
                                    }
                                    e ? n.complete() : (n.next(t), this.schedule())
                                }
                            }))
                        })), i
                    } : H(t))
                }(t, e)
            }
            throw new TypeError((null !== t && typeof t || t) + " is not observable")
        }

        function et(t, e, n) {
            return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof e ? function (r) {
                return r.pipe(et(function (n, r) {
                    return tt(t(n, r)).pipe(Y(function (t, i) {
                        return e(n, t, r, i)
                    }))
                }, n))
            } : ("number" == typeof e && (n = e), function (e) {
                return e.lift(new nt(t, n))
            })
        }

        var nt = function () {
            function t(t, e) {
                void 0 === e && (e = Number.POSITIVE_INFINITY), this.project = t, this.concurrent = e
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new rt(t, this.project, this.concurrent))
            }, t
        }(), rt = function (t) {
            function e(e, n, r) {
                void 0 === r && (r = Number.POSITIVE_INFINITY);
                var i = t.call(this, e) || this;
                return i.project = n, i.concurrent = r, i.hasCompleted = !1, i.buffer = [], i.active = 0, i.index = 0, i
            }

            return i(e, t), e.prototype._next = function (t) {
                this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
            }, e.prototype._tryNext = function (t) {
                var e, n = this.index++;
                try {
                    e = this.project(t, n)
                } catch (r) {
                    return void this.destination.error(r)
                }
                this.active++, this._innerSub(e, t, n)
            }, e.prototype._innerSub = function (t, e, n) {
                var r = new F(this, void 0, void 0);
                this.destination.add(r), Q(this, t, e, n, r)
            }, e.prototype._complete = function () {
                this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
            }, e.prototype.notifyNext = function (t, e, n, r, i) {
                this.destination.next(e)
            }, e.prototype.notifyComplete = function (t) {
                var e = this.buffer;
                this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
            }, e
        }(Z);

        function it(t) {
            return t
        }

        function ot(t) {
            return void 0 === t && (t = Number.POSITIVE_INFINITY), et(it, t)
        }

        function at() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var n = Number.POSITIVE_INFINITY, r = null, i = t[t.length - 1];
            return V(i) ? (r = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (n = t.pop())) : "number" == typeof i && (n = t.pop()), null === r && 1 === t.length && t[0] instanceof P ? t[0] : ot(n)(J(t, r))
        }

        function st() {
            return function (t) {
                return t.lift(new lt(t))
            }
        }

        var lt = function () {
            function t(t) {
                this.connectable = t
            }

            return t.prototype.call = function (t, e) {
                var n = this.connectable;
                n._refCount++;
                var r = new ut(t, n), i = e.subscribe(r);
                return r.closed || (r.connection = n.connect()), i
            }, t
        }(), ut = function (t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.connectable = n, r
            }

            return i(e, t), e.prototype._unsubscribe = function () {
                var t = this.connectable;
                if (t) {
                    this.connectable = null;
                    var e = t._refCount;
                    if (e <= 0) this.connection = null; else if (t._refCount = e - 1, e > 1) this.connection = null; else {
                        var n = this.connection, r = t._connection;
                        this.connection = null, !r || n && r !== n || r.unsubscribe()
                    }
                } else this.connection = null
            }, e
        }(S), ct = function (t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.source = e, r.subjectFactory = n, r._refCount = 0, r._isComplete = !1, r
            }

            return i(e, t), e.prototype._subscribe = function (t) {
                return this.getSubject().subscribe(t)
            }, e.prototype.getSubject = function () {
                var t = this._subject;
                return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
            }, e.prototype.connect = function () {
                var t = this._connection;
                return t || (this._isComplete = !1, (t = this._connection = new y).add(this.source.subscribe(new pt(this.getSubject(), this))), t.closed ? (this._connection = null, t = y.EMPTY) : this._connection = t), t
            }, e.prototype.refCount = function () {
                return st()(this)
            }, e
        }(P).prototype, ht = {
            operator: {value: null},
            _refCount: {value: 0, writable: !0},
            _subject: {value: null, writable: !0},
            _connection: {value: null, writable: !0},
            _subscribe: {value: ct._subscribe},
            _isComplete: {value: ct._isComplete, writable: !0},
            getSubject: {value: ct.getSubject},
            connect: {value: ct.connect},
            refCount: {value: ct.refCount}
        }, pt = function (t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.connectable = n, r
            }

            return i(e, t), e.prototype._error = function (e) {
                this._unsubscribe(), t.prototype._error.call(this, e)
            }, e.prototype._complete = function () {
                this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this)
            }, e.prototype._unsubscribe = function () {
                var t = this.connectable;
                if (t) {
                    this.connectable = null;
                    var e = t._connection;
                    t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
                }
            }, e
        }(D);

        function ft() {
            return new B
        }

        var dt = "__parameters__";

        function mt(t, e, n) {
            var r = function (t) {
                return function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    if (t) {
                        var r = t.apply(void 0, c(e));
                        for (var i in r) this[i] = r[i]
                    }
                }
            }(e);

            function i() {
                for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                if (this instanceof i) return r.apply(this, e), this;
                var o = new ((t = i).bind.apply(t, c([void 0], e)));
                return a.annotation = o, a;

                function a(t, e, n) {
                    for (var r = t.hasOwnProperty(dt) ? t[dt] : Object.defineProperty(t, dt, {value: []})[dt]; r.length <= n;) r.push(null);
                    return (r[n] = r[n] || []).push(o), t
                }
            }

            return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = t, i.annotationCls = i, i
        }

        var yt = mt("Inject", function (t) {
            return {token: t}
        }), gt = mt("Optional"), vt = mt("Self"), _t = mt("SkipSelf"), bt = function (t) {
            return t[t.Default = 0] = "Default", t[t.Host = 1] = "Host", t[t.Self = 2] = "Self", t[t.SkipSelf = 4] = "SkipSelf", t[t.Optional = 8] = "Optional", t
        }({});

        function wt(t) {
            for (var e in t) if (t[e] === wt) return e;
            throw Error("Could not find renamed property on target object.")
        }

        function Ct(t) {
            return {providedIn: t.providedIn || null, factory: t.factory, value: void 0}
        }

        function St(t) {
            return t && t.hasOwnProperty(Et) ? t[Et] : null
        }

        var Et = wt({ngInjectableDef: wt});

        function xt(t) {
            if ("string" == typeof t) return t;
            if (t instanceof Array) return "[" + t.map(xt).join(", ") + "]";
            if (null == t) return "" + t;
            if (t.overriddenName) return "" + t.overriddenName;
            if (t.name) return "" + t.name;
            var e = t.toString();
            if (null == e) return "" + e;
            var n = e.indexOf("\n");
            return -1 === n ? e : e.substring(0, n)
        }

        var At = wt({__forward_ref__: wt});

        function kt(t) {
            return t.__forward_ref__ = kt, t.toString = function () {
                return xt(this())
            }, t
        }

        function Ot(t) {
            var e = t;
            return "function" == typeof e && e.hasOwnProperty(At) && e.__forward_ref__ === kt ? e() : t
        }

        function Pt() {
            var t = "undefined" != typeof globalThis && globalThis, e = "undefined" != typeof window && window,
                n = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                r = "undefined" != typeof global && global;
            return t || r || e || n
        }

        var Tt, It = Pt(), Rt = void 0;

        function Nt(t) {
            var e = Rt;
            return Rt = t, e
        }

        function Dt(t, e) {
            return void 0 === e && (e = bt.Default), (Tt || function (t, e) {
                if (void 0 === e && (e = bt.Default), void 0 === Rt) throw new Error("inject() must be called from an injection context");
                return null === Rt ? function (t, e, n) {
                    var r = St(t);
                    if (r && "root" == r.providedIn) return void 0 === r.value ? r.value = r.factory() : r.value;
                    if (n & bt.Optional) return null;
                    throw new Error("Injector: NOT_FOUND [" + xt(t) + "]")
                }(t, 0, e) : Rt.get(t, e & bt.Optional ? null : void 0, e)
            })(t, e)
        }

        var Bt = Dt, Mt = function () {
            function t(t, e) {
                this._desc = t, this.ngMetadataName = "InjectionToken", this.ngInjectableDef = void 0, "number" == typeof e ? this.__NG_ELEMENT_ID__ = e : void 0 !== e && (this.ngInjectableDef = Ct({
                    providedIn: e.providedIn || "root",
                    factory: e.factory
                }))
            }

            return t.prototype.toString = function () {
                return "InjectionToken " + this._desc
            }, t
        }(), Vt = "__source", Ft = new Object, jt = new Mt("INJECTOR", -1), Lt = function () {
            function t() {
            }

            return t.prototype.get = function (t, e) {
                if (void 0 === e && (e = Ft), e === Ft) {
                    var n = new Error("NullInjectorError: No provider for " + xt(t) + "!");
                    throw n.name = "NullInjectorError", n
                }
                return e
            }, t
        }(), zt = function () {
            function t() {
            }

            return t.create = function (t, e) {
                return Array.isArray(t) ? new Zt(t, e) : new Zt(t.providers, t.parent, t.name || null)
            }, t.THROW_IF_NOT_FOUND = Ft, t.NULL = new Lt, t.ngInjectableDef = Ct({
                providedIn: "any", factory: function () {
                    return Dt(jt)
                }
            }), t.__NG_ELEMENT_ID__ = -1, t
        }(), Ut = function (t) {
            return t
        }, Ht = [], qt = Ut, Gt = function () {
            return Array.prototype.slice.call(arguments)
        }, Wt = wt({provide: String, useValue: wt}), Kt = /\n/gm, Qt = "\u0275", Zt = function () {
            function t(t, e, n) {
                void 0 === e && (e = zt.NULL), void 0 === n && (n = null), this.parent = e, this.source = n;
                var r = this._records = new Map;
                r.set(zt, {token: zt, fn: Ut, deps: Ht, value: this, useNew: !1}), r.set(jt, {
                    token: jt,
                    fn: Ut,
                    deps: Ht,
                    value: this,
                    useNew: !1
                }), function t(e, n) {
                    if (n) if ((n = Ot(n)) instanceof Array) for (var r = 0; r < n.length; r++) t(e, n[r]); else {
                        if ("function" == typeof n) throw Xt("Function/Class not supported", n);
                        if (!n || "object" != typeof n || !n.provide) throw Xt("Unexpected provider", n);
                        var i = Ot(n.provide), o = function (t) {
                            var e = function (t) {
                                var e = Ht, n = t.deps;
                                if (n && n.length) {
                                    e = [];
                                    for (var r = 0; r < n.length; r++) {
                                        var i = 6;
                                        if ((l = Ot(n[r])) instanceof Array) for (var o = 0, a = l; o < a.length; o++) {
                                            var s = a[o];
                                            s instanceof gt || s == gt ? i |= 1 : s instanceof _t || s == _t ? i &= -3 : s instanceof vt || s == vt ? i &= -5 : l = s instanceof yt ? s.token : Ot(s)
                                        }
                                        e.push({token: l, options: i})
                                    }
                                } else if (t.useExisting) {
                                    var l;
                                    e = [{token: l = Ot(t.useExisting), options: 6}]
                                } else if (!(n || Wt in t)) throw Xt("'deps' required", t);
                                return e
                            }(t), n = Ut, r = Ht, i = !1, o = Ot(t.provide);
                            if (Wt in t) r = t.useValue; else if (t.useFactory) n = t.useFactory; else if (t.useExisting) ; else if (t.useClass) i = !0, n = Ot(t.useClass); else {
                                if ("function" != typeof o) throw Xt("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable", t);
                                i = !0, n = o
                            }
                            return {deps: e, fn: n, useNew: i, value: r}
                        }(n);
                        if (!0 === n.multi) {
                            var a = e.get(i);
                            if (a) {
                                if (a.fn !== Gt) throw Yt(i)
                            } else e.set(i, a = {token: n.provide, deps: [], useNew: !1, fn: Gt, value: Ht});
                            a.deps.push({token: i = n, options: 6})
                        }
                        var s = e.get(i);
                        if (s && s.fn == Gt) throw Yt(i);
                        e.set(i, o)
                    }
                }(r, t)
            }

            return t.prototype.get = function (t, e, n) {
                void 0 === n && (n = bt.Default);
                var r = this._records.get(t);
                try {
                    return function t(e, n, r, i, o, a) {
                        try {
                            return function (e, n, r, i, o, a) {
                                var s, l;
                                if (!n || a & bt.SkipSelf) a & bt.Self || (l = i.get(e, o, bt.Default)); else {
                                    if ((l = n.value) == qt) throw Error(Qt + "Circular dependency");
                                    if (l === Ht) {
                                        n.value = qt;
                                        var u = n.useNew, h = n.fn, p = n.deps, f = Ht;
                                        if (p.length) {
                                            f = [];
                                            for (var d = 0; d < p.length; d++) {
                                                var m = p[d], y = m.options, g = 2 & y ? r.get(m.token) : void 0;
                                                f.push(t(m.token, g, r, g || 4 & y ? i : zt.NULL, 1 & y ? null : zt.THROW_IF_NOT_FOUND, bt.Default))
                                            }
                                        }
                                        n.value = l = u ? new ((s = h).bind.apply(s, c([void 0], f))) : h.apply(void 0, f)
                                    }
                                }
                                return l
                            }(e, n, r, i, o, a)
                        } catch (s) {
                            throw s instanceof Error || (s = new Error(s)), (s.ngTempTokenPath = s.ngTempTokenPath || []).unshift(e), n && n.value == qt && (n.value = Ht), s
                        }
                    }(t, r, this._records, this.parent, e, n)
                } catch (i) {
                    return function (t, e, n, r) {
                        var i = t.ngTempTokenPath;
                        throw e[Vt] && i.unshift(e[Vt]), t.message = $t("\n" + t.message, i, "StaticInjectorError", r), t.ngTokenPath = i, t.ngTempTokenPath = null, t
                    }(i, t, 0, this.source)
                }
            }, t.prototype.toString = function () {
                var t = [];
                return this._records.forEach(function (e, n) {
                    return t.push(xt(n))
                }), "StaticInjector[" + t.join(", ") + "]"
            }, t
        }();

        function Yt(t) {
            return Xt("Cannot mix multi providers and regular providers", t)
        }

        function $t(t, e, n, r) {
            void 0 === r && (r = null), t = t && "\n" === t.charAt(0) && t.charAt(1) == Qt ? t.substr(2) : t;
            var i = xt(e);
            if (e instanceof Array) i = e.map(xt).join(" -> "); else if ("object" == typeof e) {
                var o = [];
                for (var a in e) if (e.hasOwnProperty(a)) {
                    var s = e[a];
                    o.push(a + ":" + ("string" == typeof s ? JSON.stringify(s) : xt(s)))
                }
                i = "{" + o.join(", ") + "}"
            }
            return n + (r ? "(" + r + ")" : "") + "[" + i + "]: " + t.replace(Kt, "\n  ")
        }

        function Xt(t, e) {
            return new Error($t(t, e, "StaticInjectorError"))
        }

        var Jt = "ngDebugContext", te = "ngOriginalError", ee = "ngErrorLogger",
            ne = new Mt("AnalyzeForEntryComponents"),
            re = function (t) {
                return t[t.Emulated = 0] = "Emulated", t[t.Native = 1] = "Native", t[t.None = 2] = "None", t[t.ShadowDom = 3] = "ShadowDom", t
            }({}), ie = function () {
                return ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(It)
            }();

        function oe(t) {
            return t[Jt]
        }

        function ae(t) {
            return t[te]
        }

        function se(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            t.error.apply(t, c(e))
        }

        var le = function () {
            function t() {
                this._console = console
            }

            return t.prototype.handleError = function (t) {
                var e = this._findOriginalError(t), n = this._findContext(t), r = function (t) {
                    return t[ee] || se
                }(t);
                r(this._console, "ERROR", t), e && r(this._console, "ORIGINAL ERROR", e), n && r(this._console, "ERROR CONTEXT", n)
            }, t.prototype._findContext = function (t) {
                return t ? oe(t) ? oe(t) : this._findContext(ae(t)) : null
            }, t.prototype._findOriginalError = function (t) {
                for (var e = ae(t); e && ae(e);) e = ae(e);
                return e
            }, t
        }(), ue = !0, ce = !1;

        function he() {
            return ce = !0, ue
        }

        var pe = function () {
                function t(t) {
                    if (this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"), this.inertBodyElement = this.inertDocument.body, null == this.inertBodyElement) {
                        var e = this.inertDocument.createElement("html");
                        this.inertDocument.appendChild(e), this.inertBodyElement = this.inertDocument.createElement("body"), e.appendChild(this.inertBodyElement)
                    }
                    this.inertBodyElement.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>', !this.inertBodyElement.querySelector || this.inertBodyElement.querySelector("svg") ? (this.inertBodyElement.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">', this.getInertBodyElement = this.inertBodyElement.querySelector && this.inertBodyElement.querySelector("svg img") && function () {
                        try {
                            return !!window.DOMParser
                        } catch (t) {
                            return !1
                        }
                    }() ? this.getInertBodyElement_DOMParser : this.getInertBodyElement_InertDocument) : this.getInertBodyElement = this.getInertBodyElement_XHR
                }

                return t.prototype.getInertBodyElement_XHR = function (t) {
                    t = "<body><remove></remove>" + t + "</body>";
                    try {
                        t = encodeURI(t)
                    } catch (r) {
                        return null
                    }
                    var e = new XMLHttpRequest;
                    e.responseType = "document", e.open("GET", "data:text/html;charset=utf-8," + t, !1), e.send(void 0);
                    var n = e.response.body;
                    return n.removeChild(n.firstChild), n
                }, t.prototype.getInertBodyElement_DOMParser = function (t) {
                    t = "<body><remove></remove>" + t + "</body>";
                    try {
                        var e = (new window.DOMParser).parseFromString(t, "text/html").body;
                        return e.removeChild(e.firstChild), e
                    } catch (n) {
                        return null
                    }
                }, t.prototype.getInertBodyElement_InertDocument = function (t) {
                    var e = this.inertDocument.createElement("template");
                    return "content" in e ? (e.innerHTML = t, e) : (this.inertBodyElement.innerHTML = t, this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement), this.inertBodyElement)
                }, t.prototype.stripCustomNsAttrs = function (t) {
                    for (var e = t.attributes, n = e.length - 1; 0 < n; n--) {
                        var r = e.item(n).name;
                        "xmlns:ns1" !== r && 0 !== r.indexOf("ns1:") || t.removeAttribute(r)
                    }
                    for (var i = t.firstChild; i;) i.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(i), i = i.nextSibling
                }, t
            }(), fe = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
            de = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

        function me(t) {
            return (t = String(t)).match(fe) || t.match(de) ? t : (he() && console.warn("WARNING: sanitizing unsafe URL value " + t + " (see http://g.co/ng/security#xss)"), "unsafe:" + t)
        }

        function ye(t) {
            var e, n, r = {};
            try {
                for (var i = l(t.split(",")), o = i.next(); !o.done; o = i.next()) r[o.value] = !0
            } catch (a) {
                e = {error: a}
            } finally {
                try {
                    o && !o.done && (n = i.return) && n.call(i)
                } finally {
                    if (e) throw e.error
                }
            }
            return r
        }

        function ge() {
            for (var t, e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            var i = {};
            try {
                for (var o = l(n), a = o.next(); !a.done; a = o.next()) {
                    var s = a.value;
                    for (var u in s) s.hasOwnProperty(u) && (i[u] = !0)
                }
            } catch (c) {
                t = {error: c}
            } finally {
                try {
                    a && !a.done && (e = o.return) && e.call(o)
                } finally {
                    if (t) throw t.error
                }
            }
            return i
        }

        var ve, _e = ye("area,br,col,hr,img,wbr"), be = ye("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
            we = ye("rp,rt"), Ce = ge(we, be),
            Se = ge(_e, ge(be, ye("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), ge(we, ye("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), Ce),
            Ee = ye("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), xe = ye("srcset"),
            Ae = ge(Ee, xe, ye("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), ye("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),
            ke = ye("script,style,template"), Oe = function () {
                function t() {
                    this.sanitizedSomething = !1, this.buf = []
                }

                return t.prototype.sanitizeChildren = function (t) {
                    for (var e = t.firstChild, n = !0; e;) if (e.nodeType === Node.ELEMENT_NODE ? n = this.startElement(e) : e.nodeType === Node.TEXT_NODE ? this.chars(e.nodeValue) : this.sanitizedSomething = !0, n && e.firstChild) e = e.firstChild; else for (; e;) {
                        e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                        var r = this.checkClobberedElement(e, e.nextSibling);
                        if (r) {
                            e = r;
                            break
                        }
                        e = this.checkClobberedElement(e, e.parentNode)
                    }
                    return this.buf.join("")
                }, t.prototype.startElement = function (t) {
                    var e, n = t.nodeName.toLowerCase();
                    if (!Se.hasOwnProperty(n)) return this.sanitizedSomething = !0, !ke.hasOwnProperty(n);
                    this.buf.push("<"), this.buf.push(n);
                    for (var r = t.attributes, i = 0; i < r.length; i++) {
                        var o = r.item(i), a = o.name, s = a.toLowerCase();
                        if (Ae.hasOwnProperty(s)) {
                            var l = o.value;
                            Ee[s] && (l = me(l)), xe[s] && (e = l, l = (e = String(e)).split(",").map(function (t) {
                                return me(t.trim())
                            }).join(", ")), this.buf.push(" ", a, '="', Ie(l), '"')
                        } else this.sanitizedSomething = !0
                    }
                    return this.buf.push(">"), !0
                }, t.prototype.endElement = function (t) {
                    var e = t.nodeName.toLowerCase();
                    Se.hasOwnProperty(e) && !_e.hasOwnProperty(e) && (this.buf.push("</"), this.buf.push(e), this.buf.push(">"))
                }, t.prototype.chars = function (t) {
                    this.buf.push(Ie(t))
                }, t.prototype.checkClobberedElement = function (t, e) {
                    if (e && (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error("Failed to sanitize html because the element is clobbered: " + t.outerHTML);
                    return e
                }, t
            }(), Pe = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, Te = /([^\#-~ |!])/g;

        function Ie(t) {
            return t.replace(/&/g, "&amp;").replace(Pe, function (t) {
                return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";"
            }).replace(Te, function (t) {
                return "&#" + t.charCodeAt(0) + ";"
            }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function Re(t) {
            return "content" in t && function (t) {
                return t.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === t.nodeName
            }(t) ? t.content : null
        }

        var Ne = function (t) {
                return t[t.NONE = 0] = "NONE", t[t.HTML = 1] = "HTML", t[t.STYLE = 2] = "STYLE", t[t.SCRIPT = 3] = "SCRIPT", t[t.URL = 4] = "URL", t[t.RESOURCE_URL = 5] = "RESOURCE_URL", t
            }({}), De = function () {
                return function () {
                }
            }(),
            Be = new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$", "g"),
            Me = /^url\(([^)]+)\)$/, Ve = /([A-Z])/g;

        function Fe(t) {
            try {
                return null != t ? t.toString().slice(0, 30) : t
            } catch (e) {
                return "[ERROR] Exception while trying to serialize the value"
            }
        }

        function je(t) {
            return !!t && "function" == typeof t.then
        }

        function Le(t) {
            return !!t && "function" == typeof t.subscribe
        }

        var ze = null;

        function Ue() {
            if (!ze) {
                var t = It.Symbol;
                if (t && t.iterator) ze = t.iterator; else for (var e = Object.getOwnPropertyNames(Map.prototype), n = 0; n < e.length; ++n) {
                    var r = e[n];
                    "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (ze = r)
                }
            }
            return ze
        }

        function He(t, e) {
            return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e)
        }

        function qe(t, e) {
            var n = We(t), r = We(e);
            return n && r ? function (t, e, n) {
                for (var r = t[Ue()](), i = e[Ue()](); ;) {
                    var o = r.next(), a = i.next();
                    if (o.done && a.done) return !0;
                    if (o.done || a.done) return !1;
                    if (!n(o.value, a.value)) return !1
                }
            }(t, e, qe) : !(n || !t || "object" != typeof t && "function" != typeof t || r || !e || "object" != typeof e && "function" != typeof e) || He(t, e)
        }

        var Ge = function () {
            function t(t) {
                this.wrapped = t
            }

            return t.wrap = function (e) {
                return new t(e)
            }, t.unwrap = function (e) {
                return t.isWrapped(e) ? e.wrapped : e
            }, t.isWrapped = function (e) {
                return e instanceof t
            }, t
        }();

        function We(t) {
            return !!Ke(t) && (Array.isArray(t) || !(t instanceof Map) && Ue() in t)
        }

        function Ke(t) {
            return null !== t && ("function" == typeof t || "object" == typeof t)
        }

        var Qe = function () {
            function t(t, e, n) {
                this.previousValue = t, this.currentValue = e, this.firstChange = n
            }

            return t.prototype.isFirstChange = function () {
                return this.firstChange
            }, t
        }(), Ze = new Mt("The presence of this token marks an injector as being the root injector."), Ye = function () {
            return function () {
            }
        }(), $e = function () {
            return function () {
            }
        }();

        function Xe(t) {
            var e = Error("No component factory found for " + xt(t) + ". Did you add it to @NgModule.entryComponents?");
            return e[Je] = t, e
        }

        var Je = "ngComponent", tn = function () {
            function t() {
            }

            return t.prototype.resolveComponentFactory = function (t) {
                throw Xe(t)
            }, t
        }(), en = function () {
            function t() {
            }

            return t.NULL = new tn, t
        }(), nn = function () {
            function t(t, e, n) {
                this._parent = e, this._ngModule = n, this._factories = new Map;
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    this._factories.set(i.componentType, i)
                }
            }

            return t.prototype.resolveComponentFactory = function (t) {
                var e = this._factories.get(t);
                if (!e && this._parent && (e = this._parent.resolveComponentFactory(t)), !e) throw Xe(t);
                return new rn(e, this._ngModule)
            }, t
        }(), rn = function (t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.factory = e, r.ngModule = n, r.selector = e.selector, r.componentType = e.componentType, r.ngContentSelectors = e.ngContentSelectors, r.inputs = e.inputs, r.outputs = e.outputs, r
            }

            return i(e, t), e.prototype.create = function (t, e, n, r) {
                return this.factory.create(t, e, n, r || this.ngModule)
            }, e
        }($e), on = function () {
            return function () {
            }
        }(), an = function () {
            return function () {
            }
        }();

        function sn() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
        }

        var ln = function () {
            function t(t) {
                this.nativeElement = t
            }

            return t.__NG_ELEMENT_ID__ = function () {
                return un(t)
            }, t
        }(), un = sn, cn = function () {
            return function () {
            }
        }(), hn = function () {
            return function () {
            }
        }(), pn = function (t) {
            return t[t.Important = 1] = "Important", t[t.DashCase = 2] = "DashCase", t
        }({}), fn = function () {
            function t() {
            }

            return t.__NG_ELEMENT_ID__ = function () {
                return dn()
            }, t
        }(), dn = sn, mn = new (function () {
            return function (t) {
                this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".")
            }
        }())("8.0.0"), yn = function () {
            function t() {
            }

            return t.prototype.supports = function (t) {
                return We(t)
            }, t.prototype.create = function (t) {
                return new vn(t)
            }, t
        }(), gn = function (t, e) {
            return e
        }, vn = function () {
            function t(t) {
                this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || gn
            }

            return t.prototype.forEachItem = function (t) {
                var e;
                for (e = this._itHead; null !== e; e = e._next) t(e)
            }, t.prototype.forEachOperation = function (t) {
                for (var e = this._itHead, n = this._removalsHead, r = 0, i = null; e || n;) {
                    var o = !n || e && e.currentIndex < Cn(n, r, i) ? e : n, a = Cn(o, r, i), s = o.currentIndex;
                    if (o === n) r--, n = n._nextRemoved; else if (e = e._next, null == o.previousIndex) r++; else {
                        i || (i = []);
                        var l = a - r, u = s - r;
                        if (l != u) {
                            for (var c = 0; c < l; c++) {
                                var h = c < i.length ? i[c] : i[c] = 0, p = h + c;
                                u <= p && p < l && (i[c] = h + 1)
                            }
                            i[o.previousIndex] = u - l
                        }
                    }
                    a !== s && t(o, a, s)
                }
            }, t.prototype.forEachPreviousItem = function (t) {
                var e;
                for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e)
            }, t.prototype.forEachAddedItem = function (t) {
                var e;
                for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
            }, t.prototype.forEachMovedItem = function (t) {
                var e;
                for (e = this._movesHead; null !== e; e = e._nextMoved) t(e)
            }, t.prototype.forEachRemovedItem = function (t) {
                var e;
                for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
            }, t.prototype.forEachIdentityChange = function (t) {
                var e;
                for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e)
            }, t.prototype.diff = function (t) {
                if (null == t && (t = []), !We(t)) throw new Error("Error trying to diff '" + xt(t) + "'. Only arrays and iterables are allowed");
                return this.check(t) ? this : null
            }, t.prototype.onDestroy = function () {
            }, t.prototype.check = function (t) {
                var e = this;
                this._reset();
                var n, r, i, o = this._itHead, a = !1;
                if (Array.isArray(t)) {
                    this.length = t.length;
                    for (var s = 0; s < this.length; s++) i = this._trackByFn(s, r = t[s]), null !== o && He(o.trackById, i) ? (a && (o = this._verifyReinsertion(o, r, i, s)), He(o.item, r) || this._addIdentityChange(o, r)) : (o = this._mismatch(o, r, i, s), a = !0), o = o._next
                } else n = 0, function (t, e) {
                    if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e(t[n]); else for (var r = t[Ue()](), i = void 0; !(i = r.next()).done;) e(i.value)
                }(t, function (t) {
                    i = e._trackByFn(n, t), null !== o && He(o.trackById, i) ? (a && (o = e._verifyReinsertion(o, t, i, n)), He(o.item, t) || e._addIdentityChange(o, t)) : (o = e._mismatch(o, t, i, n), a = !0), o = o._next, n++
                }), this.length = n;
                return this._truncate(o), this.collection = t, this.isDirty
            }, Object.defineProperty(t.prototype, "isDirty", {
                get: function () {
                    return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
                }, enumerable: !0, configurable: !0
            }), t.prototype._reset = function () {
                if (this.isDirty) {
                    var t = void 0, e = void 0;
                    for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
                    for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
                    for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e) t.previousIndex = t.currentIndex, e = t._nextMoved;
                    this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
                }
            }, t.prototype._mismatch = function (t, e, n, r) {
                var i;
                return null === t ? i = this._itTail : (i = t._prev, this._remove(t)), null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (He(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, i, r)) : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (He(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, i, r)) : t = this._addAfter(new _n(e, n), i, r), t
            }, t.prototype._verifyReinsertion = function (t, e, n, r) {
                var i = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
                return null !== i ? t = this._reinsertAfter(i, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t
            }, t.prototype._truncate = function (t) {
                for (; null !== t;) {
                    var e = t._next;
                    this._addToRemovals(this._unlink(t)), t = e
                }
                null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
            }, t.prototype._reinsertAfter = function (t, e, n) {
                null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
                var r = t._prevRemoved, i = t._nextRemoved;
                return null === r ? this._removalsHead = i : r._nextRemoved = i, null === i ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(t, e, n), this._addToMoves(t, n), t
            }, t.prototype._moveAfter = function (t, e, n) {
                return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t
            }, t.prototype._addAfter = function (t, e, n) {
                return this._insertAfter(t, e, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t
            }, t.prototype._insertAfter = function (t, e, n) {
                var r = null === e ? this._itHead : e._next;
                return t._next = r, t._prev = e, null === r ? this._itTail = t : r._prev = t, null === e ? this._itHead = t : e._next = t, null === this._linkedRecords && (this._linkedRecords = new wn), this._linkedRecords.put(t), t.currentIndex = n, t
            }, t.prototype._remove = function (t) {
                return this._addToRemovals(this._unlink(t))
            }, t.prototype._unlink = function (t) {
                null !== this._linkedRecords && this._linkedRecords.remove(t);
                var e = t._prev, n = t._next;
                return null === e ? this._itHead = n : e._next = n, null === n ? this._itTail = e : n._prev = e, t
            }, t.prototype._addToMoves = function (t, e) {
                return t.previousIndex === e ? t : (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t, t)
            }, t.prototype._addToRemovals = function (t) {
                return null === this._unlinkedRecords && (this._unlinkedRecords = new wn), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t
            }, t.prototype._addIdentityChange = function (t, e) {
                return t.item = e, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t
            }, t
        }(), _n = function () {
            return function (t, e) {
                this.item = t, this.trackById = e, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
            }
        }(), bn = function () {
            function t() {
                this._head = null, this._tail = null
            }

            return t.prototype.add = function (t) {
                null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t)
            }, t.prototype.get = function (t, e) {
                var n;
                for (n = this._head; null !== n; n = n._nextDup) if ((null === e || e <= n.currentIndex) && He(n.trackById, t)) return n;
                return null
            }, t.prototype.remove = function (t) {
                var e = t._prevDup, n = t._nextDup;
                return null === e ? this._head = n : e._nextDup = n, null === n ? this._tail = e : n._prevDup = e, null === this._head
            }, t
        }(), wn = function () {
            function t() {
                this.map = new Map
            }

            return t.prototype.put = function (t) {
                var e = t.trackById, n = this.map.get(e);
                n || (n = new bn, this.map.set(e, n)), n.add(t)
            }, t.prototype.get = function (t, e) {
                var n = this.map.get(t);
                return n ? n.get(t, e) : null
            }, t.prototype.remove = function (t) {
                var e = t.trackById;
                return this.map.get(e).remove(t) && this.map.delete(e), t
            }, Object.defineProperty(t.prototype, "isEmpty", {
                get: function () {
                    return 0 === this.map.size
                }, enumerable: !0, configurable: !0
            }), t.prototype.clear = function () {
                this.map.clear()
            }, t
        }();

        function Cn(t, e, n) {
            var r = t.previousIndex;
            if (null === r) return r;
            var i = 0;
            return n && r < n.length && (i = n[r]), r + e + i
        }

        var Sn = function () {
            function t() {
            }

            return t.prototype.supports = function (t) {
                return t instanceof Map || Ke(t)
            }, t.prototype.create = function () {
                return new En
            }, t
        }(), En = function () {
            function t() {
                this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
            }

            return Object.defineProperty(t.prototype, "isDirty", {
                get: function () {
                    return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
                }, enumerable: !0, configurable: !0
            }), t.prototype.forEachItem = function (t) {
                var e;
                for (e = this._mapHead; null !== e; e = e._next) t(e)
            }, t.prototype.forEachPreviousItem = function (t) {
                var e;
                for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e)
            }, t.prototype.forEachChangedItem = function (t) {
                var e;
                for (e = this._changesHead; null !== e; e = e._nextChanged) t(e)
            }, t.prototype.forEachAddedItem = function (t) {
                var e;
                for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
            }, t.prototype.forEachRemovedItem = function (t) {
                var e;
                for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
            }, t.prototype.diff = function (t) {
                if (t) {
                    if (!(t instanceof Map || Ke(t))) throw new Error("Error trying to diff '" + xt(t) + "'. Only maps and objects are allowed")
                } else t = new Map;
                return this.check(t) ? this : null
            }, t.prototype.onDestroy = function () {
            }, t.prototype.check = function (t) {
                var e = this;
                this._reset();
                var n = this._mapHead;
                if (this._appendAfter = null, this._forEach(t, function (t, r) {
                    if (n && n.key === r) e._maybeAddToChanges(n, t), e._appendAfter = n, n = n._next; else {
                        var i = e._getOrCreateRecordForKey(r, t);
                        n = e._insertBeforeOrAppend(n, i)
                    }
                }), n) {
                    n._prev && (n._prev._next = null), this._removalsHead = n;
                    for (var r = n; null !== r; r = r._nextRemoved) r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null
                }
                return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
            }, t.prototype._insertBeforeOrAppend = function (t, e) {
                if (t) {
                    var n = t._prev;
                    return e._next = t, e._prev = n, t._prev = e, n && (n._next = e), t === this._mapHead && (this._mapHead = e), this._appendAfter = t, t
                }
                return this._appendAfter ? (this._appendAfter._next = e, e._prev = this._appendAfter) : this._mapHead = e, this._appendAfter = e, null
            }, t.prototype._getOrCreateRecordForKey = function (t, e) {
                if (this._records.has(t)) {
                    var n = this._records.get(t);
                    this._maybeAddToChanges(n, e);
                    var r = n._prev, i = n._next;
                    return r && (r._next = i), i && (i._prev = r), n._next = null, n._prev = null, n
                }
                var o = new xn(t);
                return this._records.set(t, o), o.currentValue = e, this._addToAdditions(o), o
            }, t.prototype._reset = function () {
                if (this.isDirty) {
                    var t = void 0;
                    for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next;
                    for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
                    for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
                    this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
                }
            }, t.prototype._maybeAddToChanges = function (t, e) {
                He(e, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = e, this._addToChanges(t))
            }, t.prototype._addToAdditions = function (t) {
                null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t)
            }, t.prototype._addToChanges = function (t) {
                null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t)
            }, t.prototype._forEach = function (t, e) {
                t instanceof Map ? t.forEach(e) : Object.keys(t).forEach(function (n) {
                    return e(t[n], n)
                })
            }, t
        }(), xn = function () {
            return function (t) {
                this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
            }
        }(), An = function () {
            function t(t) {
                this.factories = t
            }

            return t.create = function (e, n) {
                if (null != n) {
                    var r = n.factories.slice();
                    e = e.concat(r)
                }
                return new t(e)
            }, t.extend = function (e) {
                return {
                    provide: t, useFactory: function (n) {
                        if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector");
                        return t.create(e, n)
                    }, deps: [[t, new _t, new gt]]
                }
            }, t.prototype.find = function (t) {
                var e, n = this.factories.find(function (e) {
                    return e.supports(t)
                });
                if (null != n) return n;
                throw new Error("Cannot find a differ supporting object '" + t + "' of type '" + ((e = t).name || typeof e) + "'")
            }, t.ngInjectableDef = Ct({
                providedIn: "root", factory: function () {
                    return new t([new yn])
                }
            }), t
        }(), kn = function () {
            function t(t) {
                this.factories = t
            }

            return t.create = function (e, n) {
                if (n) {
                    var r = n.factories.slice();
                    e = e.concat(r)
                }
                return new t(e)
            }, t.extend = function (e) {
                return {
                    provide: t, useFactory: function (n) {
                        if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector");
                        return t.create(e, n)
                    }, deps: [[t, new _t, new gt]]
                }
            }, t.prototype.find = function (t) {
                var e = this.factories.find(function (e) {
                    return e.supports(t)
                });
                if (e) return e;
                throw new Error("Cannot find a differ supporting object '" + t + "'")
            }, t.ngInjectableDef = Ct({
                providedIn: "root", factory: function () {
                    return new t([new Sn])
                }
            }), t
        }(), On = function () {
            function t() {
            }

            return t.__NG_ELEMENT_ID__ = function () {
                return Pn()
            }, t
        }(), Pn = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
        }, Tn = [new Sn], In = new An([new yn]), Rn = new kn(Tn), Nn = function () {
            function t() {
            }

            return t.__NG_ELEMENT_ID__ = function () {
                return Dn(t, ln)
            }, t
        }(), Dn = sn, Bn = function () {
            function t() {
            }

            return t.__NG_ELEMENT_ID__ = function () {
                return Mn(t, ln)
            }, t
        }(), Mn = sn;

        function Vn(t, e, n, r) {
            var i = "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" + e + "'. Current value: '" + n + "'.";
            return r && (i += " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"), function (t, e) {
                var n = new Error(t);
                return Fn(n, e), n
            }(i, t)
        }

        function Fn(t, e) {
            t[Jt] = e, t[ee] = e.logError.bind(e)
        }

        function jn(t) {
            return new Error("ViewDestroyedError: Attempt to use a destroyed view: " + t)
        }

        function Ln(t, e, n) {
            var r = t.state, i = 1792 & r;
            return i === e ? (t.state = -1793 & r | n, t.initIndex = -1, !0) : i === n
        }

        function zn(t, e, n) {
            return (1792 & t.state) === e && t.initIndex <= n && (t.initIndex = n + 1, !0)
        }

        function Un(t, e) {
            return t.nodes[e]
        }

        function Hn(t, e) {
            return t.nodes[e]
        }

        function qn(t, e) {
            return t.nodes[e]
        }

        function Gn(t, e) {
            return t.nodes[e]
        }

        function Wn(t, e) {
            return t.nodes[e]
        }

        var Kn = {
            setCurrentNode: void 0,
            createRootView: void 0,
            createEmbeddedView: void 0,
            createComponentView: void 0,
            createNgModuleRef: void 0,
            overrideProvider: void 0,
            overrideComponentView: void 0,
            clearOverrides: void 0,
            checkAndUpdateView: void 0,
            checkNoChangesView: void 0,
            destroyView: void 0,
            resolveDep: void 0,
            createDebugContext: void 0,
            handleEvent: void 0,
            updateDirectives: void 0,
            updateRenderer: void 0,
            dirtyParentQueries: void 0
        }, Qn = function () {
        }, Zn = new Map;

        function Yn(t) {
            var e = Zn.get(t);
            return e || (e = xt(t) + "_" + Zn.size, Zn.set(t, e)), e
        }

        function $n(t, e, n, r) {
            if (Ge.isWrapped(r)) {
                r = Ge.unwrap(r);
                var i = t.def.nodes[e].bindingIndex + n, o = Ge.unwrap(t.oldValues[i]);
                t.oldValues[i] = new Ge(o)
            }
            return r
        }

        var Xn = "$$undefined", Jn = "$$empty";

        function tr(t) {
            return {id: Xn, styles: t.styles, encapsulation: t.encapsulation, data: t.data}
        }

        var er = 0;

        function nr(t, e, n, r) {
            return !(!(2 & t.state) && He(t.oldValues[e.bindingIndex + n], r))
        }

        function rr(t, e, n, r) {
            return !!nr(t, e, n, r) && (t.oldValues[e.bindingIndex + n] = r, !0)
        }

        function ir(t, e, n, r) {
            var i = t.oldValues[e.bindingIndex + n];
            if (1 & t.state || !qe(i, r)) {
                var o = e.bindings[n].name;
                throw Vn(Kn.createDebugContext(t, e.nodeIndex), o + ": " + i, o + ": " + r, 0 != (1 & t.state))
            }
        }

        function or(t) {
            for (var e = t; e;) 2 & e.def.flags && (e.state |= 8), e = e.viewContainerParent || e.parent
        }

        function ar(t, e) {
            for (var n = t; n && n !== e;) n.state |= 64, n = n.viewContainerParent || n.parent
        }

        function sr(t, e, n, r) {
            try {
                return or(33554432 & t.def.nodes[e].flags ? Hn(t, e).componentView : t), Kn.handleEvent(t, e, n, r)
            } catch (i) {
                t.root.errorHandler.handleError(i)
            }
        }

        function lr(t) {
            return t.parent ? Hn(t.parent, t.parentNodeDef.nodeIndex) : null
        }

        function ur(t) {
            return t.parent ? t.parentNodeDef.parent : null
        }

        function cr(t, e) {
            switch (201347067 & e.flags) {
                case 1:
                    return Hn(t, e.nodeIndex).renderElement;
                case 2:
                    return Un(t, e.nodeIndex).renderText
            }
        }

        function hr(t) {
            return !!t.parent && !!(32768 & t.parentNodeDef.flags)
        }

        function pr(t) {
            return !(!t.parent || 32768 & t.parentNodeDef.flags)
        }

        function fr(t) {
            return 1 << t % 32
        }

        function dr(t) {
            var e = {}, n = 0, r = {};
            return t && t.forEach(function (t) {
                var i = u(t, 2), o = i[0], a = i[1];
                "number" == typeof o ? (e[o] = a, n |= fr(o)) : r[o] = a
            }), {matchedQueries: e, references: r, matchedQueryIds: n}
        }

        function mr(t, e) {
            return t.map(function (t) {
                var n, r, i;
                return Array.isArray(t) ? (i = (n = u(t, 2))[0], r = n[1]) : (i = 0, r = t), r && ("function" == typeof r || "object" == typeof r) && e && Object.defineProperty(r, Vt, {
                    value: e,
                    configurable: !0
                }), {flags: i, token: r, tokenKey: Yn(r)}
            })
        }

        function yr(t, e, n) {
            var r = n.renderParent;
            return r ? 0 == (1 & r.flags) || 0 == (33554432 & r.flags) || r.element.componentRendererType && r.element.componentRendererType.encapsulation === re.Native ? Hn(t, n.renderParent.nodeIndex).renderElement : void 0 : e
        }

        var gr = new WeakMap;

        function vr(t) {
            var e = gr.get(t);
            return e || ((e = t(function () {
                return Qn
            })).factory = t, gr.set(t, e)), e
        }

        function _r(t, e, n, r, i) {
            3 === e && (n = t.renderer.parentNode(cr(t, t.def.lastRenderRootNode))), br(t, e, 0, t.def.nodes.length - 1, n, r, i)
        }

        function br(t, e, n, r, i, o, a) {
            for (var s = n; s <= r; s++) {
                var l = t.def.nodes[s];
                11 & l.flags && Cr(t, l, e, i, o, a), s += l.childCount
            }
        }

        function wr(t, e, n, r, i, o) {
            for (var a = t; a && !hr(a);) a = a.parent;
            for (var s = a.parent, l = ur(a), u = l.nodeIndex + l.childCount, c = l.nodeIndex + 1; c <= u; c++) {
                var h = s.def.nodes[c];
                h.ngContentIndex === e && Cr(s, h, n, r, i, o), c += h.childCount
            }
            if (!s.parent) {
                var p = t.root.projectableNodes[e];
                if (p) for (c = 0; c < p.length; c++) Sr(t, p[c], n, r, i, o)
            }
        }

        function Cr(t, e, n, r, i, o) {
            if (8 & e.flags) wr(t, e.ngContent.index, n, r, i, o); else {
                var a = cr(t, e);
                if (3 === n && 33554432 & e.flags && 48 & e.bindingFlags ? (16 & e.bindingFlags && Sr(t, a, n, r, i, o), 32 & e.bindingFlags && Sr(Hn(t, e.nodeIndex).componentView, a, n, r, i, o)) : Sr(t, a, n, r, i, o), 16777216 & e.flags) for (var s = Hn(t, e.nodeIndex).viewContainer._embeddedViews, l = 0; l < s.length; l++) _r(s[l], n, r, i, o);
                1 & e.flags && !e.element.name && br(t, n, e.nodeIndex + 1, e.nodeIndex + e.childCount, r, i, o)
            }
        }

        function Sr(t, e, n, r, i, o) {
            var a = t.renderer;
            switch (n) {
                case 1:
                    a.appendChild(r, e);
                    break;
                case 2:
                    a.insertBefore(r, e, i);
                    break;
                case 3:
                    a.removeChild(r, e);
                    break;
                case 0:
                    o.push(e)
            }
        }

        var Er = /^:([^:]+):(.+)$/;

        function xr(t) {
            if (":" === t[0]) {
                var e = t.match(Er);
                return [e[1], e[2]]
            }
            return ["", t]
        }

        function Ar(t) {
            for (var e = 0, n = 0; n < t.length; n++) e |= t[n].flags;
            return e
        }

        var kr = {}, Or = new Object, Pr = Yn(zt), Tr = Yn(jt), Ir = Yn(on);

        function Rr(t, e, n, r) {
            return n = Ot(n), {index: -1, deps: mr(r, xt(e)), flags: t, token: e, value: n}
        }

        function Nr(t, e, n) {
            void 0 === n && (n = zt.THROW_IF_NOT_FOUND);
            var r, i, o = Nt(t);
            try {
                if (8 & e.flags) return e.token;
                if (2 & e.flags && (n = null), 1 & e.flags) return t._parent.get(e.token, n);
                var a = e.tokenKey;
                switch (a) {
                    case Pr:
                    case Tr:
                    case Ir:
                        return t
                }
                var s, l = t._def.providersByKey[a];
                if (l) {
                    var u = t._providers[l.index];
                    return void 0 === u && (u = t._providers[l.index] = Dr(t, l)), u === Or ? void 0 : u
                }
                if ((s = St(e.token)) && (r = t, null != (i = s).providedIn && (function (t, e) {
                    return t._def.modules.indexOf(i.providedIn) > -1
                }(r) || "root" === i.providedIn && r._def.isRoot))) {
                    var c = t._providers.length;
                    return t._def.providers[c] = t._def.providersByKey[e.tokenKey] = {
                        flags: 5120,
                        value: s.factory,
                        deps: [],
                        index: c,
                        token: e.token
                    }, t._providers[c] = Or, t._providers[c] = Dr(t, t._def.providersByKey[e.tokenKey])
                }
                return 4 & e.flags ? n : t._parent.get(e.token, n)
            } finally {
                Nt(o)
            }
        }

        function Dr(t, e) {
            var n;
            switch (201347067 & e.flags) {
                case 512:
                    n = function (t, e, n) {
                        var r = n.length;
                        switch (r) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(Nr(t, n[0]));
                            case 2:
                                return new e(Nr(t, n[0]), Nr(t, n[1]));
                            case 3:
                                return new e(Nr(t, n[0]), Nr(t, n[1]), Nr(t, n[2]));
                            default:
                                for (var i = new Array(r), o = 0; o < r; o++) i[o] = Nr(t, n[o]);
                                return new (e.bind.apply(e, c([void 0], i)))
                        }
                    }(t, e.value, e.deps);
                    break;
                case 1024:
                    n = function (t, e, n) {
                        var r = n.length;
                        switch (r) {
                            case 0:
                                return e();
                            case 1:
                                return e(Nr(t, n[0]));
                            case 2:
                                return e(Nr(t, n[0]), Nr(t, n[1]));
                            case 3:
                                return e(Nr(t, n[0]), Nr(t, n[1]), Nr(t, n[2]));
                            default:
                                for (var i = Array(r), o = 0; o < r; o++) i[o] = Nr(t, n[o]);
                                return e.apply(void 0, c(i))
                        }
                    }(t, e.value, e.deps);
                    break;
                case 2048:
                    n = Nr(t, e.deps[0]);
                    break;
                case 256:
                    n = e.value
            }
            return n === Or || null === n || "object" != typeof n || 131072 & e.flags || "function" != typeof n.ngOnDestroy || (e.flags |= 131072), void 0 === n ? Or : n
        }

        function Br(t, e) {
            var n = t.viewContainer._embeddedViews;
            if ((null == e || e >= n.length) && (e = n.length - 1), e < 0) return null;
            var r = n[e];
            return r.viewContainerParent = null, jr(n, e), Kn.dirtyParentQueries(r), Vr(r), r
        }

        function Mr(t, e, n) {
            var r = e ? cr(e, e.def.lastRenderRootNode) : t.renderElement, i = n.renderer.parentNode(r),
                o = n.renderer.nextSibling(r);
            _r(n, 2, i, o, void 0)
        }

        function Vr(t) {
            _r(t, 3, null, null, void 0)
        }

        function Fr(t, e, n) {
            e >= t.length ? t.push(n) : t.splice(e, 0, n)
        }

        function jr(t, e) {
            e >= t.length - 1 ? t.pop() : t.splice(e, 1)
        }

        var Lr = new Object;

        function zr(t, e, n, r, i, o) {
            return new Ur(t, e, n, r, i, o)
        }

        var Ur = function (t) {
            function e(e, n, r, i, o, a) {
                var s = t.call(this) || this;
                return s.selector = e, s.componentType = n, s._inputs = i, s._outputs = o, s.ngContentSelectors = a, s.viewDefFactory = r, s
            }

            return i(e, t), Object.defineProperty(e.prototype, "inputs", {
                get: function () {
                    var t = [], e = this._inputs;
                    for (var n in e) t.push({propName: n, templateName: e[n]});
                    return t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "outputs", {
                get: function () {
                    var t = [];
                    for (var e in this._outputs) t.push({propName: e, templateName: this._outputs[e]});
                    return t
                }, enumerable: !0, configurable: !0
            }), e.prototype.create = function (t, e, n, r) {
                if (!r) throw new Error("ngModule should be provided");
                var i = vr(this.viewDefFactory), o = i.nodes[0].element.componentProvider.nodeIndex,
                    a = Kn.createRootView(t, e || [], n, i, r, Lr), s = qn(a, o).instance;
                return n && a.renderer.setAttribute(Hn(a, 0).renderElement, "ng-version", mn.full), new Hr(a, new Kr(a), s)
            }, e
        }($e), Hr = function (t) {
            function e(e, n, r) {
                var i = t.call(this) || this;
                return i._view = e, i._viewRef = n, i._component = r, i._elDef = i._view.def.nodes[0], i.hostView = n, i.changeDetectorRef = n, i.instance = r, i
            }

            return i(e, t), Object.defineProperty(e.prototype, "location", {
                get: function () {
                    return new ln(Hn(this._view, this._elDef.nodeIndex).renderElement)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "injector", {
                get: function () {
                    return new $r(this._view, this._elDef)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "componentType", {
                get: function () {
                    return this._component.constructor
                }, enumerable: !0, configurable: !0
            }), e.prototype.destroy = function () {
                this._viewRef.destroy()
            }, e.prototype.onDestroy = function (t) {
                this._viewRef.onDestroy(t)
            }, e
        }(Ye);

        function qr(t, e, n) {
            return new Gr(t, e, n)
        }

        var Gr = function () {
            function t(t, e, n) {
                this._view = t, this._elDef = e, this._data = n, this._embeddedViews = []
            }

            return Object.defineProperty(t.prototype, "element", {
                get: function () {
                    return new ln(this._data.renderElement)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "injector", {
                get: function () {
                    return new $r(this._view, this._elDef)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "parentInjector", {
                get: function () {
                    for (var t = this._view, e = this._elDef.parent; !e && t;) e = ur(t), t = t.parent;
                    return t ? new $r(t, e) : new $r(this._view, null)
                }, enumerable: !0, configurable: !0
            }), t.prototype.clear = function () {
                for (var t = this._embeddedViews.length - 1; t >= 0; t--) {
                    var e = Br(this._data, t);
                    Kn.destroyView(e)
                }
            }, t.prototype.get = function (t) {
                var e = this._embeddedViews[t];
                if (e) {
                    var n = new Kr(e);
                    return n.attachToViewContainerRef(this), n
                }
                return null
            }, Object.defineProperty(t.prototype, "length", {
                get: function () {
                    return this._embeddedViews.length
                }, enumerable: !0, configurable: !0
            }), t.prototype.createEmbeddedView = function (t, e, n) {
                var r = t.createEmbeddedView(e || {});
                return this.insert(r, n), r
            }, t.prototype.createComponent = function (t, e, n, r, i) {
                var o = n || this.parentInjector;
                i || t instanceof rn || (i = o.get(on));
                var a = t.create(o, r, void 0, i);
                return this.insert(a.hostView, e), a
            }, t.prototype.insert = function (t, e) {
                if (t.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
                var n, r, i, o, a = t;
                return o = (n = this._data).viewContainer._embeddedViews, null == (r = e) && (r = o.length), (i = a._view).viewContainerParent = this._view, Fr(o, r, i), function (t, e) {
                    var n = lr(e);
                    if (n && n !== t && !(16 & e.state)) {
                        e.state |= 16;
                        var r = n.template._projectedViews;
                        r || (r = n.template._projectedViews = []), r.push(e), function (t, n) {
                            if (!(4 & n.flags)) {
                                e.parent.def.nodeFlags |= 4, n.flags |= 4;
                                for (var r = n.parent; r;) r.childFlags |= 4, r = r.parent
                            }
                        }(0, e.parentNodeDef)
                    }
                }(n, i), Kn.dirtyParentQueries(i), Mr(n, r > 0 ? o[r - 1] : null, i), a.attachToViewContainerRef(this), t
            }, t.prototype.move = function (t, e) {
                if (t.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
                var n, r, i, o, a, s = this._embeddedViews.indexOf(t._view);
                return i = e, a = (o = (n = this._data).viewContainer._embeddedViews)[r = s], jr(o, r), null == i && (i = o.length), Fr(o, i, a), Kn.dirtyParentQueries(a), Vr(a), Mr(n, i > 0 ? o[i - 1] : null, a), t
            }, t.prototype.indexOf = function (t) {
                return this._embeddedViews.indexOf(t._view)
            }, t.prototype.remove = function (t) {
                var e = Br(this._data, t);
                e && Kn.destroyView(e)
            }, t.prototype.detach = function (t) {
                var e = Br(this._data, t);
                return e ? new Kr(e) : null
            }, t
        }();

        function Wr(t) {
            return new Kr(t)
        }

        var Kr = function () {
            function t(t) {
                this._view = t, this._viewContainerRef = null, this._appRef = null
            }

            return Object.defineProperty(t.prototype, "rootNodes", {
                get: function () {
                    return _r(this._view, 0, void 0, void 0, t = []), t;
                    var t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "context", {
                get: function () {
                    return this._view.context
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "destroyed", {
                get: function () {
                    return 0 != (128 & this._view.state)
                }, enumerable: !0, configurable: !0
            }), t.prototype.markForCheck = function () {
                or(this._view)
            }, t.prototype.detach = function () {
                this._view.state &= -5
            }, t.prototype.detectChanges = function () {
                var t = this._view.root.rendererFactory;
                t.begin && t.begin();
                try {
                    Kn.checkAndUpdateView(this._view)
                } finally {
                    t.end && t.end()
                }
            }, t.prototype.checkNoChanges = function () {
                Kn.checkNoChangesView(this._view)
            }, t.prototype.reattach = function () {
                this._view.state |= 4
            }, t.prototype.onDestroy = function (t) {
                this._view.disposables || (this._view.disposables = []), this._view.disposables.push(t)
            }, t.prototype.destroy = function () {
                this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), Kn.destroyView(this._view)
            }, t.prototype.detachFromAppRef = function () {
                this._appRef = null, Vr(this._view), Kn.dirtyParentQueries(this._view)
            }, t.prototype.attachToAppRef = function (t) {
                if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
                this._appRef = t
            }, t.prototype.attachToViewContainerRef = function (t) {
                if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                this._viewContainerRef = t
            }, t
        }();

        function Qr(t, e) {
            return new Zr(t, e)
        }

        var Zr = function (t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r._parentView = e, r._def = n, r
            }

            return i(e, t), e.prototype.createEmbeddedView = function (t) {
                return new Kr(Kn.createEmbeddedView(this._parentView, this._def, this._def.element.template, t))
            }, Object.defineProperty(e.prototype, "elementRef", {
                get: function () {
                    return new ln(Hn(this._parentView, this._def.nodeIndex).renderElement)
                }, enumerable: !0, configurable: !0
            }), e
        }(Nn);

        function Yr(t, e) {
            return new $r(t, e)
        }

        var $r = function () {
            function t(t, e) {
                this.view = t, this.elDef = e
            }

            return t.prototype.get = function (t, e) {
                return void 0 === e && (e = zt.THROW_IF_NOT_FOUND), Kn.resolveDep(this.view, this.elDef, !!this.elDef && 0 != (33554432 & this.elDef.flags), {
                    flags: 0,
                    token: t,
                    tokenKey: Yn(t)
                }, e)
            }, t
        }();

        function Xr(t, e) {
            var n = t.def.nodes[e];
            if (1 & n.flags) {
                var r = Hn(t, n.nodeIndex);
                return n.element.template ? r.template : r.renderElement
            }
            if (2 & n.flags) return Un(t, n.nodeIndex).renderText;
            if (20240 & n.flags) return qn(t, n.nodeIndex).instance;
            throw new Error("Illegal state: read nodeValue for node index " + e)
        }

        function Jr(t) {
            return new ti(t.renderer)
        }

        var ti = function () {
            function t(t) {
                this.delegate = t
            }

            return t.prototype.selectRootElement = function (t) {
                return this.delegate.selectRootElement(t)
            }, t.prototype.createElement = function (t, e) {
                var n = u(xr(e), 2), r = this.delegate.createElement(n[1], n[0]);
                return t && this.delegate.appendChild(t, r), r
            }, t.prototype.createViewRoot = function (t) {
                return t
            }, t.prototype.createTemplateAnchor = function (t) {
                var e = this.delegate.createComment("");
                return t && this.delegate.appendChild(t, e), e
            }, t.prototype.createText = function (t, e) {
                var n = this.delegate.createText(e);
                return t && this.delegate.appendChild(t, n), n
            }, t.prototype.projectNodes = function (t, e) {
                for (var n = 0; n < e.length; n++) this.delegate.appendChild(t, e[n])
            }, t.prototype.attachViewAfter = function (t, e) {
                for (var n = this.delegate.parentNode(t), r = this.delegate.nextSibling(t), i = 0; i < e.length; i++) this.delegate.insertBefore(n, e[i], r)
            }, t.prototype.detachView = function (t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e], r = this.delegate.parentNode(n);
                    this.delegate.removeChild(r, n)
                }
            }, t.prototype.destroyView = function (t, e) {
                for (var n = 0; n < e.length; n++) this.delegate.destroyNode(e[n])
            }, t.prototype.listen = function (t, e, n) {
                return this.delegate.listen(t, e, n)
            }, t.prototype.listenGlobal = function (t, e, n) {
                return this.delegate.listen(t, e, n)
            }, t.prototype.setElementProperty = function (t, e, n) {
                this.delegate.setProperty(t, e, n)
            }, t.prototype.setElementAttribute = function (t, e, n) {
                var r = u(xr(e), 2), i = r[0], o = r[1];
                null != n ? this.delegate.setAttribute(t, o, n, i) : this.delegate.removeAttribute(t, o, i)
            }, t.prototype.setBindingDebugInfo = function (t, e, n) {
            }, t.prototype.setElementClass = function (t, e, n) {
                n ? this.delegate.addClass(t, e) : this.delegate.removeClass(t, e)
            }, t.prototype.setElementStyle = function (t, e, n) {
                null != n ? this.delegate.setStyle(t, e, n) : this.delegate.removeStyle(t, e)
            }, t.prototype.invokeElementMethod = function (t, e, n) {
                t[e].apply(t, n)
            }, t.prototype.setText = function (t, e) {
                this.delegate.setValue(t, e)
            }, t.prototype.animate = function () {
                throw new Error("Renderer.animate is no longer supported!")
            }, t
        }();

        function ei(t, e, n, r) {
            return new ni(t, e, n, r)
        }

        var ni = function () {
            function t(t, e, n, r) {
                this._moduleType = t, this._parent = e, this._bootstrapComponents = n, this._def = r, this._destroyListeners = [], this._destroyed = !1, this.injector = this, function (t) {
                    for (var e = t._def, n = t._providers = new Array(e.providers.length), r = 0; r < e.providers.length; r++) {
                        var i = e.providers[r];
                        4096 & i.flags || void 0 === n[r] && (n[r] = Dr(t, i))
                    }
                }(this)
            }

            return t.prototype.get = function (t, e, n) {
                void 0 === e && (e = zt.THROW_IF_NOT_FOUND), void 0 === n && (n = bt.Default);
                var r = 0;
                return n & bt.SkipSelf ? r |= 1 : n & bt.Self && (r |= 4), Nr(this, {
                    token: t,
                    tokenKey: Yn(t),
                    flags: r
                }, e)
            }, Object.defineProperty(t.prototype, "instance", {
                get: function () {
                    return this.get(this._moduleType)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "componentFactoryResolver", {
                get: function () {
                    return this.get(en)
                }, enumerable: !0, configurable: !0
            }), t.prototype.destroy = function () {
                if (this._destroyed) throw new Error("The ng module " + xt(this.instance.constructor) + " has already been destroyed.");
                this._destroyed = !0, function (t, e) {
                    for (var n = t._def, r = new Set, i = 0; i < n.providers.length; i++) if (131072 & n.providers[i].flags) {
                        var o = t._providers[i];
                        if (o && o !== Or) {
                            var a = o.ngOnDestroy;
                            "function" != typeof a || r.has(o) || (a.apply(o), r.add(o))
                        }
                    }
                }(this), this._destroyListeners.forEach(function (t) {
                    return t()
                })
            }, t.prototype.onDestroy = function (t) {
                this._destroyListeners.push(t)
            }, t
        }(), ri = Yn(cn), ii = Yn(fn), oi = Yn(ln), ai = Yn(Bn), si = Yn(Nn), li = Yn(On), ui = Yn(zt), ci = Yn(jt);

        function hi(t, e, n, r, i, o, a, s) {
            var l = [];
            if (a) for (var c in a) {
                var h = u(a[c], 2);
                l[h[0]] = {flags: 8, name: c, nonMinifiedName: h[1], ns: null, securityContext: null, suffix: null}
            }
            var p = [];
            if (s) for (var f in s) p.push({type: 1, propName: f, target: null, eventName: s[f]});
            return di(t, e |= 16384, n, r, i, i, o, l, p)
        }

        function pi(t, e, n) {
            return di(-1, t |= 16, null, 0, e, e, n)
        }

        function fi(t, e, n, r, i) {
            return di(-1, t, e, 0, n, r, i)
        }

        function di(t, e, n, r, i, o, a, s, l) {
            var u = dr(n), c = u.matchedQueries, h = u.references, p = u.matchedQueryIds;
            l || (l = []), s || (s = []), o = Ot(o);
            var f = mr(a, xt(i));
            return {
                nodeIndex: -1,
                parent: null,
                renderParent: null,
                bindingIndex: -1,
                outputIndex: -1,
                checkIndex: t,
                flags: e,
                childFlags: 0,
                directChildFlags: 0,
                childMatchedQueries: 0,
                matchedQueries: c,
                matchedQueryIds: p,
                references: h,
                ngContentIndex: -1,
                childCount: r,
                bindings: s,
                bindingFlags: Ar(s),
                outputs: l,
                element: null,
                provider: {token: i, value: o, deps: f},
                text: null,
                query: null,
                ngContent: null
            }
        }

        function mi(t, e) {
            return _i(t, e)
        }

        function yi(t, e) {
            for (var n = t; n.parent && !hr(n);) n = n.parent;
            return bi(n.parent, ur(n), !0, e.provider.value, e.provider.deps)
        }

        function gi(t, e) {
            var n = bi(t, e.parent, (32768 & e.flags) > 0, e.provider.value, e.provider.deps);
            if (e.outputs.length) for (var r = 0; r < e.outputs.length; r++) {
                var i = e.outputs[r], o = n[i.propName];
                if (!Le(o)) throw new Error("@Output " + i.propName + " not initialized in '" + n.constructor.name + "'.");
                var a = o.subscribe(vi(t, e.parent.nodeIndex, i.eventName));
                t.disposables[e.outputIndex + r] = a.unsubscribe.bind(a)
            }
            return n
        }

        function vi(t, e, n) {
            return function (r) {
                return sr(t, e, n, r)
            }
        }

        function _i(t, e) {
            var n = (8192 & e.flags) > 0, r = e.provider;
            switch (201347067 & e.flags) {
                case 512:
                    return bi(t, e.parent, n, r.value, r.deps);
                case 1024:
                    return function (t, e, n, r, i) {
                        var o = i.length;
                        switch (o) {
                            case 0:
                                return r();
                            case 1:
                                return r(Ci(t, e, n, i[0]));
                            case 2:
                                return r(Ci(t, e, n, i[0]), Ci(t, e, n, i[1]));
                            case 3:
                                return r(Ci(t, e, n, i[0]), Ci(t, e, n, i[1]), Ci(t, e, n, i[2]));
                            default:
                                for (var a = Array(o), s = 0; s < o; s++) a[s] = Ci(t, e, n, i[s]);
                                return r.apply(void 0, c(a))
                        }
                    }(t, e.parent, n, r.value, r.deps);
                case 2048:
                    return Ci(t, e.parent, n, r.deps[0]);
                case 256:
                    return r.value
            }
        }

        function bi(t, e, n, r, i) {
            var o = i.length;
            switch (o) {
                case 0:
                    return new r;
                case 1:
                    return new r(Ci(t, e, n, i[0]));
                case 2:
                    return new r(Ci(t, e, n, i[0]), Ci(t, e, n, i[1]));
                case 3:
                    return new r(Ci(t, e, n, i[0]), Ci(t, e, n, i[1]), Ci(t, e, n, i[2]));
                default:
                    for (var a = new Array(o), s = 0; s < o; s++) a[s] = Ci(t, e, n, i[s]);
                    return new (r.bind.apply(r, c([void 0], a)))
            }
        }

        var wi = {};

        function Ci(t, e, n, r, i) {
            if (void 0 === i && (i = zt.THROW_IF_NOT_FOUND), 8 & r.flags) return r.token;
            var o = t;
            2 & r.flags && (i = null);
            var a = r.tokenKey;
            a === li && (n = !(!e || !e.element.componentView)), e && 1 & r.flags && (n = !1, e = e.parent);
            for (var s = t; s;) {
                if (e) switch (a) {
                    case ri:
                        return Jr(Si(s, e, n));
                    case ii:
                        return Si(s, e, n).renderer;
                    case oi:
                        return new ln(Hn(s, e.nodeIndex).renderElement);
                    case ai:
                        return Hn(s, e.nodeIndex).viewContainer;
                    case si:
                        if (e.element.template) return Hn(s, e.nodeIndex).template;
                        break;
                    case li:
                        return Wr(Si(s, e, n));
                    case ui:
                    case ci:
                        return Yr(s, e);
                    default:
                        var l = (n ? e.element.allProviders : e.element.publicProviders)[a];
                        if (l) {
                            var u = qn(s, l.nodeIndex);
                            return u || (u = {instance: _i(s, l)}, s.nodes[l.nodeIndex] = u), u.instance
                        }
                }
                n = hr(s), e = ur(s), s = s.parent, 4 & r.flags && (s = null)
            }
            var c = o.root.injector.get(r.token, wi);
            return c !== wi || i === wi ? c : o.root.ngModule.injector.get(r.token, i)
        }

        function Si(t, e, n) {
            var r;
            if (n) r = Hn(t, e.nodeIndex).componentView; else for (r = t; r.parent && !hr(r);) r = r.parent;
            return r
        }

        function Ei(t, e, n, r, i, o) {
            if (32768 & n.flags) {
                var a = Hn(t, n.parent.nodeIndex).componentView;
                2 & a.def.flags && (a.state |= 8)
            }
            if (e.instance[n.bindings[r].name] = i, 524288 & n.flags) {
                o = o || {};
                var s = Ge.unwrap(t.oldValues[n.bindingIndex + r]);
                o[n.bindings[r].nonMinifiedName] = new Qe(s, i, 0 != (2 & t.state))
            }
            return t.oldValues[n.bindingIndex + r] = i, o
        }

        function xi(t, e) {
            if (t.def.nodeFlags & e) for (var n = t.def.nodes, r = 0, i = 0; i < n.length; i++) {
                var o = n[i], a = o.parent;
                for (!a && o.flags & e && ki(t, i, o.flags & e, r++), 0 == (o.childFlags & e) && (i += o.childCount); a && 1 & a.flags && i === a.nodeIndex + a.childCount;) a.directChildFlags & e && (r = Ai(t, a, e, r)), a = a.parent
            }
        }

        function Ai(t, e, n, r) {
            for (var i = e.nodeIndex + 1; i <= e.nodeIndex + e.childCount; i++) {
                var o = t.def.nodes[i];
                o.flags & n && ki(t, i, o.flags & n, r++), i += o.childCount
            }
            return r
        }

        function ki(t, e, n, r) {
            var i = qn(t, e);
            if (i) {
                var o = i.instance;
                o && (Kn.setCurrentNode(t, e), 1048576 & n && zn(t, 512, r) && o.ngAfterContentInit(), 2097152 & n && o.ngAfterContentChecked(), 4194304 & n && zn(t, 768, r) && o.ngAfterViewInit(), 8388608 & n && o.ngAfterViewChecked(), 131072 & n && o.ngOnDestroy())
            }
        }

        var Oi = new Mt("SCHEDULER_TOKEN", {
            providedIn: "root", factory: function () {
                return ie
            }
        }), Pi = function (t) {
            function e(e) {
                void 0 === e && (e = !1);
                var n = t.call(this) || this;
                return n.__isAsync = e, n
            }

            return i(e, t), e.prototype.emit = function (e) {
                t.prototype.next.call(this, e)
            }, e.prototype.subscribe = function (e, n, r) {
                var i, o = function (t) {
                    return null
                }, a = function () {
                    return null
                };
                e && "object" == typeof e ? (i = this.__isAsync ? function (t) {
                    setTimeout(function () {
                        return e.next(t)
                    })
                } : function (t) {
                    e.next(t)
                }, e.error && (o = this.__isAsync ? function (t) {
                    setTimeout(function () {
                        return e.error(t)
                    })
                } : function (t) {
                    e.error(t)
                }), e.complete && (a = this.__isAsync ? function () {
                    setTimeout(function () {
                        return e.complete()
                    })
                } : function () {
                    e.complete()
                })) : (i = this.__isAsync ? function (t) {
                    setTimeout(function () {
                        return e(t)
                    })
                } : function (t) {
                    e(t)
                }, n && (o = this.__isAsync ? function (t) {
                    setTimeout(function () {
                        return n(t)
                    })
                } : function (t) {
                    n(t)
                }), r && (a = this.__isAsync ? function () {
                    setTimeout(function () {
                        return r()
                    })
                } : function () {
                    r()
                }));
                var s = t.prototype.subscribe.call(this, i, o, a);
                return e instanceof y && e.add(s), s
            }, e
        }(B), Ti = function () {
            function t() {
                this.dirty = !0, this._results = [], this.changes = new Pi, this.length = 0
            }

            return t.prototype.map = function (t) {
                return this._results.map(t)
            }, t.prototype.filter = function (t) {
                return this._results.filter(t)
            }, t.prototype.find = function (t) {
                return this._results.find(t)
            }, t.prototype.reduce = function (t, e) {
                return this._results.reduce(t, e)
            }, t.prototype.forEach = function (t) {
                this._results.forEach(t)
            }, t.prototype.some = function (t) {
                return this._results.some(t)
            }, t.prototype.toArray = function () {
                return this._results.slice()
            }, t.prototype[Ue()] = function () {
                return this._results[Ue()]()
            }, t.prototype.toString = function () {
                return this._results.toString()
            }, t.prototype.reset = function (t) {
                this._results = function t(e, n) {
                    void 0 === n && (n = e);
                    for (var r = 0; r < e.length; r++) {
                        var i = e[r];
                        Array.isArray(i) ? (n === e && (n = e.slice(0, r)), t(i, n)) : n !== e && n.push(i)
                    }
                    return n
                }(t), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0]
            }, t.prototype.notifyOnChanges = function () {
                this.changes.emit(this)
            }, t.prototype.setDirty = function () {
                this.dirty = !0
            }, t.prototype.destroy = function () {
                this.changes.complete(), this.changes.unsubscribe()
            }, t
        }(), Ii = function () {
            return function () {
            }
        }(), Ri = new Mt("Application Initializer"), Ni = function () {
            function t(t) {
                var e = this;
                this.appInits = t, this.initialized = !1, this.done = !1, this.donePromise = new Promise(function (t, n) {
                    e.resolve = t, e.reject = n
                })
            }

            return t.prototype.runInitializers = function () {
                var t = this;
                if (!this.initialized) {
                    var e = [], n = function () {
                        t.done = !0, t.resolve()
                    };
                    if (this.appInits) for (var r = 0; r < this.appInits.length; r++) {
                        var i = this.appInits[r]();
                        je(i) && e.push(i)
                    }
                    Promise.all(e).then(function () {
                        n()
                    }).catch(function (e) {
                        t.reject(e)
                    }), 0 === e.length && n(), this.initialized = !0
                }
            }, t
        }(), Di = new Mt("AppId");

        function Bi() {
            return "" + Mi() + Mi() + Mi()
        }

        function Mi() {
            return String.fromCharCode(97 + Math.floor(25 * Math.random()))
        }

        var Vi = new Mt("Platform Initializer"), Fi = new Mt("Platform ID"), ji = new Mt("appBootstrapListener"),
            Li = function () {
                function t() {
                }

                return t.prototype.log = function (t) {
                    console.log(t)
                }, t.prototype.warn = function (t) {
                    console.warn(t)
                }, t
            }();

        function zi() {
            throw new Error("Runtime compiler is not loaded")
        }

        var Ui, Hi, qi = zi, Gi = zi, Wi = zi, Ki = zi, Qi = function () {
            function t() {
                this.compileModuleSync = qi, this.compileModuleAsync = Gi, this.compileModuleAndAllComponentsSync = Wi, this.compileModuleAndAllComponentsAsync = Ki
            }

            return t.prototype.clearCache = function () {
            }, t.prototype.clearCacheFor = function (t) {
            }, t.prototype.getModuleId = function (t) {
            }, t
        }(), Zi = function () {
            return function () {
            }
        }();

        function Yi() {
            var t = It.wtf;
            return !(!t || !(Ui = t.trace) || (Hi = Ui.events, 0))
        }

        var $i = Yi();

        function Xi(t, e) {
            return null
        }

        var Ji = $i ? function (t, e) {
            return void 0 === e && (e = null), Hi.createScope(t, e)
        } : function (t, e) {
            return Xi
        }, to = $i ? function (t, e) {
            return Ui.leaveScope(t, e), e
        } : function (t, e) {
            return e
        }, eo = function () {
            return Promise.resolve(0)
        }();

        function no(t) {
            "undefined" == typeof Zone ? eo.then(function () {
                t && t.apply(null, null)
            }) : Zone.current.scheduleMicroTask("scheduleMicrotask", t)
        }

        var ro = function () {
            function t(t) {
                var e, n = t.enableLongStackTrace, r = void 0 !== n && n;
                if (this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Pi(!1), this.onMicrotaskEmpty = new Pi(!1), this.onStable = new Pi(!1), this.onError = new Pi(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), r && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), (e = this)._inner = e._inner.fork({
                    name: "angular",
                    properties: {isAngularZone: !0},
                    onInvokeTask: function (t, n, r, i, o, a) {
                        try {
                            return so(e), t.invokeTask(r, i, o, a)
                        } finally {
                            lo(e)
                        }
                    },
                    onInvoke: function (t, n, r, i, o, a, s) {
                        try {
                            return so(e), t.invoke(r, i, o, a, s)
                        } finally {
                            lo(e)
                        }
                    },
                    onHasTask: function (t, n, r, i) {
                        t.hasTask(r, i), n === r && ("microTask" == i.change ? (e.hasPendingMicrotasks = i.microTask, ao(e)) : "macroTask" == i.change && (e.hasPendingMacrotasks = i.macroTask))
                    },
                    onHandleError: function (t, n, r, i) {
                        return t.handleError(r, i), e.runOutsideAngular(function () {
                            return e.onError.emit(i)
                        }), !1
                    }
                })
            }

            return t.isInAngularZone = function () {
                return !0 === Zone.current.get("isAngularZone")
            }, t.assertInAngularZone = function () {
                if (!t.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
            }, t.assertNotInAngularZone = function () {
                if (t.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
            }, t.prototype.run = function (t, e, n) {
                return this._inner.run(t, e, n)
            }, t.prototype.runTask = function (t, e, n, r) {
                var i = this._inner, o = i.scheduleEventTask("NgZoneEvent: " + r, t, oo, io, io);
                try {
                    return i.runTask(o, e, n)
                } finally {
                    i.cancelTask(o)
                }
            }, t.prototype.runGuarded = function (t, e, n) {
                return this._inner.runGuarded(t, e, n)
            }, t.prototype.runOutsideAngular = function (t) {
                return this._outer.run(t)
            }, t
        }();

        function io() {
        }

        var oo = {};

        function ao(t) {
            if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable) try {
                t._nesting++, t.onMicrotaskEmpty.emit(null)
            } finally {
                if (t._nesting--, !t.hasPendingMicrotasks) try {
                    t.runOutsideAngular(function () {
                        return t.onStable.emit(null)
                    })
                } finally {
                    t.isStable = !0
                }
            }
        }

        function so(t) {
            t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null))
        }

        function lo(t) {
            t._nesting--, ao(t)
        }

        var uo, co = function () {
            function t() {
                this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Pi, this.onMicrotaskEmpty = new Pi, this.onStable = new Pi, this.onError = new Pi
            }

            return t.prototype.run = function (t) {
                return t()
            }, t.prototype.runGuarded = function (t) {
                return t()
            }, t.prototype.runOutsideAngular = function (t) {
                return t()
            }, t.prototype.runTask = function (t) {
                return t()
            }, t
        }(), ho = function () {
            function t(t) {
                var e = this;
                this._ngZone = t, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), t.run(function () {
                    e.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
                })
            }

            return t.prototype._watchAngularEvents = function () {
                var t = this;
                this._ngZone.onUnstable.subscribe({
                    next: function () {
                        t._didWork = !0, t._isZoneStable = !1
                    }
                }), this._ngZone.runOutsideAngular(function () {
                    t._ngZone.onStable.subscribe({
                        next: function () {
                            ro.assertNotInAngularZone(), no(function () {
                                t._isZoneStable = !0, t._runCallbacksIfReady()
                            })
                        }
                    })
                })
            }, t.prototype.increasePendingRequestCount = function () {
                return this._pendingCount += 1, this._didWork = !0, this._pendingCount
            }, t.prototype.decreasePendingRequestCount = function () {
                if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
                return this._runCallbacksIfReady(), this._pendingCount
            }, t.prototype.isStable = function () {
                return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
            }, t.prototype._runCallbacksIfReady = function () {
                var t = this;
                if (this.isStable()) no(function () {
                    for (; 0 !== t._callbacks.length;) {
                        var e = t._callbacks.pop();
                        clearTimeout(e.timeoutId), e.doneCb(t._didWork)
                    }
                    t._didWork = !1
                }); else {
                    var e = this.getPendingTasks();
                    this._callbacks = this._callbacks.filter(function (t) {
                        return !t.updateCb || !t.updateCb(e) || (clearTimeout(t.timeoutId), !1)
                    }), this._didWork = !0
                }
            }, t.prototype.getPendingTasks = function () {
                return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(function (t) {
                    return {source: t.source, creationLocation: t.creationLocation, data: t.data}
                }) : []
            }, t.prototype.addCallback = function (t, e, n) {
                var r = this, i = -1;
                e && e > 0 && (i = setTimeout(function () {
                    r._callbacks = r._callbacks.filter(function (t) {
                        return t.timeoutId !== i
                    }), t(r._didWork, r.getPendingTasks())
                }, e)), this._callbacks.push({doneCb: t, timeoutId: i, updateCb: n})
            }, t.prototype.whenStable = function (t, e, n) {
                if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                this.addCallback(t, e, n), this._runCallbacksIfReady()
            }, t.prototype.getPendingRequestCount = function () {
                return this._pendingCount
            }, t.prototype.findProviders = function (t, e, n) {
                return []
            }, t
        }(), po = function () {
            function t() {
                this._applications = new Map, fo.addToWindow(this)
            }

            return t.prototype.registerApplication = function (t, e) {
                this._applications.set(t, e)
            }, t.prototype.unregisterApplication = function (t) {
                this._applications.delete(t)
            }, t.prototype.unregisterAllApplications = function () {
                this._applications.clear()
            }, t.prototype.getTestability = function (t) {
                return this._applications.get(t) || null
            }, t.prototype.getAllTestabilities = function () {
                return Array.from(this._applications.values())
            }, t.prototype.getAllRootElements = function () {
                return Array.from(this._applications.keys())
            }, t.prototype.findTestabilityInTree = function (t, e) {
                return void 0 === e && (e = !0), fo.findTestabilityInTree(this, t, e)
            }, a([s("design:paramtypes", [])], t)
        }(), fo = new (function () {
            function t() {
            }

            return t.prototype.addToWindow = function (t) {
            }, t.prototype.findTestabilityInTree = function (t, e, n) {
                return null
            }, t
        }()), mo = new Mt("AllowMultipleToken"), yo = function () {
            return function (t, e) {
                this.name = t, this.token = e
            }
        }();

        function go(t, e, n) {
            void 0 === n && (n = []);
            var r = "Platform: " + e, i = new Mt(r);
            return function (e) {
                void 0 === e && (e = []);
                var o = vo();
                if (!o || o.injector.get(mo, !1)) if (t) t(n.concat(e).concat({provide: i, useValue: !0})); else {
                    var a = n.concat(e).concat({provide: i, useValue: !0});
                    !function (t) {
                        if (uo && !uo.destroyed && !uo.injector.get(mo, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                        uo = t.get(_o);
                        var e = t.get(Vi, null);
                        e && e.forEach(function (t) {
                            return t()
                        })
                    }(zt.create({providers: a, name: r}))
                }
                return function (t) {
                    var e = vo();
                    if (!e) throw new Error("No platform exists!");
                    if (!e.injector.get(t, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
                    return e
                }(i)
            }
        }

        function vo() {
            return uo && !uo.destroyed ? uo : null
        }

        var _o = function () {
            function t(t) {
                this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1
            }

            return t.prototype.bootstrapModuleFactory = function (t, e) {
                var n, r = this,
                    i = "noop" === (n = e ? e.ngZone : void 0) ? new co : ("zone.js" === n ? void 0 : n) || new ro({enableLongStackTrace: he()}),
                    o = [{provide: ro, useValue: i}];
                return i.run(function () {
                    var e = zt.create({providers: o, parent: r.injector, name: t.moduleType.name}), n = t.create(e),
                        a = n.injector.get(le, null);
                    if (!a) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                    return n.onDestroy(function () {
                        return Co(r._modules, n)
                    }), i.runOutsideAngular(function () {
                        return i.onError.subscribe({
                            next: function (t) {
                                a.handleError(t)
                            }
                        })
                    }), function (t, e, i) {
                        try {
                            var o = ((a = n.injector.get(Ni)).runInitializers(), a.donePromise.then(function () {
                                return r._moduleDoBootstrap(n), n
                            }));
                            return je(o) ? o.catch(function (n) {
                                throw e.runOutsideAngular(function () {
                                    return t.handleError(n)
                                }), n
                            }) : o
                        } catch (s) {
                            throw e.runOutsideAngular(function () {
                                return t.handleError(s)
                            }), s
                        }
                        var a
                    }(a, i)
                })
            }, t.prototype.bootstrapModule = function (t, e) {
                var n = this;
                void 0 === e && (e = []);
                var r = bo({}, e);
                return function (t, e, n) {
                    return t.get(Zi).createCompiler([e]).compileModuleAsync(n)
                }(this.injector, r, t).then(function (t) {
                    return n.bootstrapModuleFactory(t, r)
                })
            }, t.prototype._moduleDoBootstrap = function (t) {
                var e = t.injector.get(wo);
                if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach(function (t) {
                    return e.bootstrap(t)
                }); else {
                    if (!t.instance.ngDoBootstrap) throw new Error("The module " + xt(t.instance.constructor) + ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.');
                    t.instance.ngDoBootstrap(e)
                }
                this._modules.push(t)
            }, t.prototype.onDestroy = function (t) {
                this._destroyListeners.push(t)
            }, Object.defineProperty(t.prototype, "injector", {
                get: function () {
                    return this._injector
                }, enumerable: !0, configurable: !0
            }), t.prototype.destroy = function () {
                if (this._destroyed) throw new Error("The platform has already been destroyed!");
                this._modules.slice().forEach(function (t) {
                    return t.destroy()
                }), this._destroyListeners.forEach(function (t) {
                    return t()
                }), this._destroyed = !0
            }, Object.defineProperty(t.prototype, "destroyed", {
                get: function () {
                    return this._destroyed
                }, enumerable: !0, configurable: !0
            }), t
        }();

        function bo(t, e) {
            return Array.isArray(e) ? e.reduce(bo, t) : o({}, t, e)
        }

        var wo = function () {
            function t(t, e, n, r, i, o) {
                var a = this;
                this._zone = t, this._console = e, this._injector = n, this._exceptionHandler = r, this._componentFactoryResolver = i, this._initStatus = o, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = he(), this._zone.onMicrotaskEmpty.subscribe({
                    next: function () {
                        a._zone.run(function () {
                            a.tick()
                        })
                    }
                });
                var s = new P(function (t) {
                    a._stable = a._zone.isStable && !a._zone.hasPendingMacrotasks && !a._zone.hasPendingMicrotasks, a._zone.runOutsideAngular(function () {
                        t.next(a._stable), t.complete()
                    })
                }), l = new P(function (t) {
                    var e;
                    a._zone.runOutsideAngular(function () {
                        e = a._zone.onStable.subscribe(function () {
                            ro.assertNotInAngularZone(), no(function () {
                                a._stable || a._zone.hasPendingMacrotasks || a._zone.hasPendingMicrotasks || (a._stable = !0, t.next(!0))
                            })
                        })
                    });
                    var n = a._zone.onUnstable.subscribe(function () {
                        ro.assertInAngularZone(), a._stable && (a._stable = !1, a._zone.runOutsideAngular(function () {
                            t.next(!1)
                        }))
                    });
                    return function () {
                        e.unsubscribe(), n.unsubscribe()
                    }
                });
                this.isStable = at(s, l.pipe(function (t) {
                    return st()((e = ft, function (t) {
                        var n;
                        n = "function" == typeof e ? e : function () {
                            return e
                        };
                        var r = Object.create(t, ht);
                        return r.source = t, r.subjectFactory = n, r
                    })(t));
                    var e
                }))
            }

            var e;
            return e = t, t.prototype.bootstrap = function (t, e) {
                var n, r = this;
                if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                n = t instanceof $e ? t : this._componentFactoryResolver.resolveComponentFactory(t), this.componentTypes.push(n.componentType);
                var i = n instanceof rn ? null : this._injector.get(on), o = n.create(zt.NULL, [], e || n.selector, i);
                o.onDestroy(function () {
                    r._unloadComponent(o)
                });
                var a = o.injector.get(ho, null);
                return a && o.injector.get(po).registerApplication(o.location.nativeElement, a), this._loadComponent(o), he() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), o
            }, t.prototype.tick = function () {
                var t, n, r, i, o = this;
                if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
                var a = e._tickScope();
                try {
                    this._runningTick = !0;
                    try {
                        for (var s = l(this._views), u = s.next(); !u.done; u = s.next()) u.value.detectChanges()
                    } catch (p) {
                        t = {error: p}
                    } finally {
                        try {
                            u && !u.done && (n = s.return) && n.call(s)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    if (this._enforceNoNewChanges) try {
                        for (var c = l(this._views), h = c.next(); !h.done; h = c.next()) h.value.checkNoChanges()
                    } catch (f) {
                        r = {error: f}
                    } finally {
                        try {
                            h && !h.done && (i = c.return) && i.call(c)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                } catch (d) {
                    this._zone.runOutsideAngular(function () {
                        return o._exceptionHandler.handleError(d)
                    })
                } finally {
                    this._runningTick = !1, to(a)
                }
            }, t.prototype.attachView = function (t) {
                var e = t;
                this._views.push(e), e.attachToAppRef(this)
            }, t.prototype.detachView = function (t) {
                var e = t;
                Co(this._views, e), e.detachFromAppRef()
            }, t.prototype._loadComponent = function (t) {
                this.attachView(t.hostView), this.tick(), this.components.push(t), this._injector.get(ji, []).concat(this._bootstrapListeners).forEach(function (e) {
                    return e(t)
                })
            }, t.prototype._unloadComponent = function (t) {
                this.detachView(t.hostView), Co(this.components, t)
            }, t.prototype.ngOnDestroy = function () {
                this._views.slice().forEach(function (t) {
                    return t.destroy()
                })
            }, Object.defineProperty(t.prototype, "viewCount", {
                get: function () {
                    return this._views.length
                }, enumerable: !0, configurable: !0
            }), t._tickScope = Ji("ApplicationRef#tick()"), t
        }();

        function Co(t, e) {
            var n = t.indexOf(e);
            n > -1 && t.splice(n, 1)
        }

        var So = function () {
            return function () {
            }
        }(), Eo = {factoryPathPrefix: "", factoryPathSuffix: ".ngfactory"}, xo = function () {
            function t(t, e) {
                this._compiler = t, this._config = e || Eo
            }

            return t.prototype.load = function (t) {
                return this._compiler instanceof Qi ? this.loadFactory(t) : this.loadAndCompile(t)
            }, t.prototype.loadAndCompile = function (t) {
                var e = this, r = u(t.split("#"), 2), i = r[0], o = r[1];
                return void 0 === o && (o = "default"), n("zn8P")(i).then(function (t) {
                    return t[o]
                }).then(function (t) {
                    return Ao(t, i, o)
                }).then(function (t) {
                    return e._compiler.compileModuleAsync(t)
                })
            }, t.prototype.loadFactory = function (t) {
                var e = u(t.split("#"), 2), r = e[0], i = e[1], o = "NgFactory";
                return void 0 === i && (i = "default", o = ""), n("zn8P")(this._config.factoryPathPrefix + r + this._config.factoryPathSuffix).then(function (t) {
                    return t[i + o]
                }).then(function (t) {
                    return Ao(t, r, i)
                })
            }, t
        }();

        function Ao(t, e, n) {
            if (!t) throw new Error("Cannot find '" + n + "' in '" + e + "'");
            return t
        }

        var ko = function () {
            return function (t, e) {
                this.name = t, this.callback = e
            }
        }(), Oo = function () {
            function t(t, e, n) {
                this.listeners = [], this.parent = null, this._debugContext = n, this.nativeNode = t, e && e instanceof Po && e.addChild(this)
            }

            return Object.defineProperty(t.prototype, "injector", {
                get: function () {
                    return this._debugContext.injector
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "componentInstance", {
                get: function () {
                    return this._debugContext.component
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "context", {
                get: function () {
                    return this._debugContext.context
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "references", {
                get: function () {
                    return this._debugContext.references
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "providerTokens", {
                get: function () {
                    return this._debugContext.providerTokens
                }, enumerable: !0, configurable: !0
            }), t
        }(), Po = function (t) {
            function e(e, n, r) {
                var i = t.call(this, e, n, r) || this;
                return i.properties = {}, i.attributes = {}, i.classes = {}, i.styles = {}, i.childNodes = [], i.nativeElement = e, i
            }

            return i(e, t), e.prototype.addChild = function (t) {
                t && (this.childNodes.push(t), t.parent = this)
            }, e.prototype.removeChild = function (t) {
                var e = this.childNodes.indexOf(t);
                -1 !== e && (t.parent = null, this.childNodes.splice(e, 1))
            }, e.prototype.insertChildrenAfter = function (t, e) {
                var n, r = this, i = this.childNodes.indexOf(t);
                -1 !== i && ((n = this.childNodes).splice.apply(n, c([i + 1, 0], e)), e.forEach(function (e) {
                    e.parent && e.parent.removeChild(e), t.parent = r
                }))
            }, e.prototype.insertBefore = function (t, e) {
                var n = this.childNodes.indexOf(t);
                -1 === n ? this.addChild(e) : (e.parent && e.parent.removeChild(e), e.parent = this, this.childNodes.splice(n, 0, e))
            }, e.prototype.query = function (t) {
                return this.queryAll(t)[0] || null
            }, e.prototype.queryAll = function (t) {
                var e = [];
                return function t(e, n, r) {
                    e.childNodes.forEach(function (e) {
                        e instanceof Po && (n(e) && r.push(e), t(e, n, r))
                    })
                }(this, t, e), e
            }, e.prototype.queryAllNodes = function (t) {
                var e = [];
                return function t(e, n, r) {
                    e instanceof Po && e.childNodes.forEach(function (e) {
                        n(e) && r.push(e), e instanceof Po && t(e, n, r)
                    })
                }(this, t, e), e
            }, Object.defineProperty(e.prototype, "children", {
                get: function () {
                    return this.childNodes.filter(function (t) {
                        return t instanceof e
                    })
                }, enumerable: !0, configurable: !0
            }), e.prototype.triggerEventHandler = function (t, e) {
                this.listeners.forEach(function (n) {
                    n.name == t && n.callback(e)
                })
            }, e
        }(Oo), To = new Map, Io = function (t) {
            return To.get(t) || null
        };

        function Ro(t) {
            To.set(t.nativeNode, t)
        }

        var No = go(null, "core", [{provide: Fi, useValue: "unknown"}, {provide: _o, deps: [zt]}, {
            provide: po,
            deps: []
        }, {provide: Li, deps: []}]), Do = new Mt("LocaleId");

        function Bo() {
            return In
        }

        function Mo() {
            return Rn
        }

        function Vo(t) {
            return t || "en-US"
        }

        function Fo(t) {
            var e = [];
            return t.onStable.subscribe(function () {
                for (; e.length;) e.pop()()
            }), function (t) {
                e.push(t)
            }
        }

        var jo = function () {
            return function (t) {
            }
        }();

        function Lo(t, e, n, r, i, o) {
            t |= 1;
            var a = dr(e);
            return {
                nodeIndex: -1,
                parent: null,
                renderParent: null,
                bindingIndex: -1,
                outputIndex: -1,
                flags: t,
                checkIndex: -1,
                childFlags: 0,
                directChildFlags: 0,
                childMatchedQueries: 0,
                matchedQueries: a.matchedQueries,
                matchedQueryIds: a.matchedQueryIds,
                references: a.references,
                ngContentIndex: n,
                childCount: r,
                bindings: [],
                bindingFlags: 0,
                outputs: [],
                element: {
                    ns: null,
                    name: null,
                    attrs: null,
                    template: o ? vr(o) : null,
                    componentProvider: null,
                    componentView: null,
                    componentRendererType: null,
                    publicProviders: null,
                    allProviders: null,
                    handleEvent: i || Qn
                },
                provider: null,
                text: null,
                query: null,
                ngContent: null
            }
        }

        function zo(t, e, n, r, i, o, a, s, l, c, h, p) {
            var f;
            void 0 === a && (a = []), c || (c = Qn);
            var d = dr(n), m = d.matchedQueries, y = d.references, g = d.matchedQueryIds, v = null, _ = null;
            o && (v = (f = u(xr(o), 2))[0], _ = f[1]), s = s || [];
            for (var b = new Array(s.length), w = 0; w < s.length; w++) {
                var C = u(s[w], 3), S = C[0], E = C[2], x = u(xr(C[1]), 2), A = x[0], k = x[1], O = void 0, P = void 0;
                switch (15 & S) {
                    case 4:
                        P = E;
                        break;
                    case 1:
                    case 8:
                        O = E
                }
                b[w] = {flags: S, ns: A, name: k, nonMinifiedName: k, securityContext: O, suffix: P}
            }
            l = l || [];
            var T = new Array(l.length);
            for (w = 0; w < l.length; w++) {
                var I = u(l[w], 2);
                T[w] = {type: 0, target: I[0], eventName: I[1], propName: null}
            }
            var R = (a = a || []).map(function (t) {
                var e = u(t, 2), n = e[1], r = u(xr(e[0]), 2);
                return [r[0], r[1], n]
            });
            return p = function (t) {
                if (t && t.id === Xn) {
                    var e = null != t.encapsulation && t.encapsulation !== re.None || t.styles.length || Object.keys(t.data).length;
                    t.id = e ? "c" + er++ : Jn
                }
                return t && t.id === Jn && (t = null), t || null
            }(p), h && (e |= 33554432), {
                nodeIndex: -1,
                parent: null,
                renderParent: null,
                bindingIndex: -1,
                outputIndex: -1,
                checkIndex: t,
                flags: e |= 1,
                childFlags: 0,
                directChildFlags: 0,
                childMatchedQueries: 0,
                matchedQueries: m,
                matchedQueryIds: g,
                references: y,
                ngContentIndex: r,
                childCount: i,
                bindings: b,
                bindingFlags: Ar(b),
                outputs: T,
                element: {
                    ns: v,
                    name: _,
                    attrs: R,
                    template: null,
                    componentProvider: null,
                    componentView: h || null,
                    componentRendererType: p,
                    publicProviders: null,
                    allProviders: null,
                    handleEvent: c || Qn
                },
                provider: null,
                text: null,
                query: null,
                ngContent: null
            }
        }

        function Uo(t, e, n) {
            var r, i = n.element, o = t.root.selectorOrNode, a = t.renderer;
            if (t.parent || !o) {
                r = i.name ? a.createElement(i.name, i.ns) : a.createComment("");
                var s = yr(t, e, n);
                s && a.appendChild(s, r)
            } else r = a.selectRootElement(o, !!i.componentRendererType && i.componentRendererType.encapsulation === re.ShadowDom);
            if (i.attrs) for (var l = 0; l < i.attrs.length; l++) {
                var c = u(i.attrs[l], 3);
                a.setAttribute(r, c[1], c[2], c[0])
            }
            return r
        }

        function Ho(t, e, n, r) {
            for (var i = 0; i < n.outputs.length; i++) {
                var o = n.outputs[i], a = qo(t, n.nodeIndex, (h = o.eventName, (c = o.target) ? c + ":" + h : h)),
                    s = o.target,
                    l = t;
                "component" === o.target && (s = null, l = e);
                var u = l.renderer.listen(s || r, o.eventName, a);
                t.disposables[n.outputIndex + i] = u
            }
            var c, h
        }

        function qo(t, e, n) {
            return function (r) {
                return sr(t, e, n, r)
            }
        }

        function Go(t, e, n, r) {
            if (!rr(t, e, n, r)) return !1;
            var i = e.bindings[n], o = Hn(t, e.nodeIndex), a = o.renderElement, s = i.name;
            switch (15 & i.flags) {
                case 1:
                    !function (t, e, n, r, i, o) {
                        var a = e.securityContext, s = a ? t.root.sanitizer.sanitize(a, o) : o;
                        s = null != s ? s.toString() : null;
                        var l = t.renderer;
                        null != o ? l.setAttribute(n, i, s, r) : l.removeAttribute(n, i, r)
                    }(t, i, a, i.ns, s, r);
                    break;
                case 2:
                    !function (t, e, n, r) {
                        var i = t.renderer;
                        r ? i.addClass(e, n) : i.removeClass(e, n)
                    }(t, a, s, r);
                    break;
                case 4:
                    !function (t, e, n, r, i) {
                        var o = t.root.sanitizer.sanitize(Ne.STYLE, i);
                        if (null != o) {
                            o = o.toString();
                            var a = e.suffix;
                            null != a && (o += a)
                        } else o = null;
                        var s = t.renderer;
                        null != o ? s.setStyle(n, r, o) : s.removeStyle(n, r)
                    }(t, i, a, s, r);
                    break;
                case 8:
                    !function (t, e, n, r, i) {
                        var o = e.securityContext, a = o ? t.root.sanitizer.sanitize(o, i) : i;
                        t.renderer.setProperty(n, r, a)
                    }(33554432 & e.flags && 32 & i.flags ? o.componentView : t, i, a, s, r)
            }
            return !0
        }

        function Wo(t, e, n) {
            var r = [];
            for (var i in n) r.push({propName: i, bindingType: n[i]});
            return {
                nodeIndex: -1,
                parent: null,
                renderParent: null,
                bindingIndex: -1,
                outputIndex: -1,
                checkIndex: -1,
                flags: t,
                childFlags: 0,
                directChildFlags: 0,
                childMatchedQueries: 0,
                ngContentIndex: -1,
                matchedQueries: {},
                matchedQueryIds: 0,
                references: {},
                childCount: 0,
                bindings: [],
                bindingFlags: 0,
                outputs: [],
                element: null,
                provider: null,
                text: null,
                query: {id: e, filterId: fr(e), bindings: r},
                ngContent: null
            }
        }

        function Ko(t) {
            for (var e = t.def.nodeMatchedQueries; t.parent && pr(t);) {
                var n = t.parentNodeDef;
                t = t.parent;
                for (var r = n.nodeIndex + n.childCount, i = 0; i <= r; i++) 67108864 & (o = t.def.nodes[i]).flags && 536870912 & o.flags && (o.query.filterId & e) === o.query.filterId && Wn(t, i).setDirty(), !(1 & o.flags && i + o.childCount < n.nodeIndex) && 67108864 & o.childFlags && 536870912 & o.childFlags || (i += o.childCount)
            }
            if (134217728 & t.def.nodeFlags) for (i = 0; i < t.def.nodes.length; i++) {
                var o;
                134217728 & (o = t.def.nodes[i]).flags && 536870912 & o.flags && Wn(t, i).setDirty(), i += o.childCount
            }
        }

        function Qo(t, e) {
            var n = Wn(t, e.nodeIndex);
            if (n.dirty) {
                var r, i = void 0;
                if (67108864 & e.flags) {
                    var o = e.parent.parent;
                    i = Zo(t, o.nodeIndex, o.nodeIndex + o.childCount, e.query, []), r = qn(t, e.parent.nodeIndex).instance
                } else 134217728 & e.flags && (i = Zo(t, 0, t.def.nodes.length - 1, e.query, []), r = t.component);
                n.reset(i);
                for (var a = e.query.bindings, s = !1, l = 0; l < a.length; l++) {
                    var u = a[l], c = void 0;
                    switch (u.bindingType) {
                        case 0:
                            c = n.first;
                            break;
                        case 1:
                            c = n, s = !0
                    }
                    r[u.propName] = c
                }
                s && n.notifyOnChanges()
            }
        }

        function Zo(t, e, n, r, i) {
            for (var o = e; o <= n; o++) {
                var a = t.def.nodes[o], s = a.matchedQueries[r.id];
                if (null != s && i.push(Yo(t, a, s)), 1 & a.flags && a.element.template && (a.element.template.nodeMatchedQueries & r.filterId) === r.filterId) {
                    var l = Hn(t, o);
                    if ((a.childMatchedQueries & r.filterId) === r.filterId && (Zo(t, o + 1, o + a.childCount, r, i), o += a.childCount), 16777216 & a.flags) for (var u = l.viewContainer._embeddedViews, c = 0; c < u.length; c++) {
                        var h = u[c], p = lr(h);
                        p && p === l && Zo(h, 0, h.def.nodes.length - 1, r, i)
                    }
                    var f = l.template._projectedViews;
                    if (f) for (c = 0; c < f.length; c++) {
                        var d = f[c];
                        Zo(d, 0, d.def.nodes.length - 1, r, i)
                    }
                }
                (a.childMatchedQueries & r.filterId) !== r.filterId && (o += a.childCount)
            }
            return i
        }

        function Yo(t, e, n) {
            if (null != n) switch (n) {
                case 1:
                    return Hn(t, e.nodeIndex).renderElement;
                case 0:
                    return new ln(Hn(t, e.nodeIndex).renderElement);
                case 2:
                    return Hn(t, e.nodeIndex).template;
                case 3:
                    return Hn(t, e.nodeIndex).viewContainer;
                case 4:
                    return qn(t, e.nodeIndex).instance
            }
        }

        function $o(t, e) {
            return {
                nodeIndex: -1,
                parent: null,
                renderParent: null,
                bindingIndex: -1,
                outputIndex: -1,
                checkIndex: -1,
                flags: 8,
                childFlags: 0,
                directChildFlags: 0,
                childMatchedQueries: 0,
                matchedQueries: {},
                matchedQueryIds: 0,
                references: {},
                ngContentIndex: t,
                childCount: 0,
                bindings: [],
                bindingFlags: 0,
                outputs: [],
                element: null,
                provider: null,
                text: null,
                query: null,
                ngContent: {index: e}
            }
        }

        function Xo(t, e, n) {
            var r = yr(t, e, n);
            r && wr(t, n.ngContent.index, 1, r, null, void 0)
        }

        function Jo(t, e) {
            for (var n = Object.keys(e), r = n.length, i = new Array(r), o = 0; o < r; o++) {
                var a = n[o];
                i[e[a]] = a
            }
            return function (t, e, n) {
                for (var r = new Array(n.length), i = 0; i < n.length; i++) {
                    var o = n[i];
                    r[i] = {flags: 8, name: o, ns: null, nonMinifiedName: o, securityContext: null, suffix: null}
                }
                return {
                    nodeIndex: -1,
                    parent: null,
                    renderParent: null,
                    bindingIndex: -1,
                    outputIndex: -1,
                    checkIndex: e,
                    flags: 64,
                    childFlags: 0,
                    directChildFlags: 0,
                    childMatchedQueries: 0,
                    matchedQueries: {},
                    matchedQueryIds: 0,
                    references: {},
                    ngContentIndex: -1,
                    childCount: 0,
                    bindings: r,
                    bindingFlags: Ar(r),
                    outputs: [],
                    element: null,
                    provider: null,
                    text: null,
                    query: null,
                    ngContent: null
                }
            }(0, t, i)
        }

        function ta(t, e, n) {
            for (var r = new Array(n.length - 1), i = 1; i < n.length; i++) r[i - 1] = {
                flags: 8,
                name: null,
                ns: null,
                nonMinifiedName: null,
                securityContext: null,
                suffix: n[i]
            };
            return {
                nodeIndex: -1,
                parent: null,
                renderParent: null,
                bindingIndex: -1,
                outputIndex: -1,
                checkIndex: t,
                flags: 2,
                childFlags: 0,
                directChildFlags: 0,
                childMatchedQueries: 0,
                matchedQueries: {},
                matchedQueryIds: 0,
                references: {},
                ngContentIndex: e,
                childCount: 0,
                bindings: r,
                bindingFlags: 8,
                outputs: [],
                element: null,
                provider: null,
                text: {prefix: n[0]},
                query: null,
                ngContent: null
            }
        }

        function ea(t, e, n) {
            var r, i = t.renderer;
            r = i.createText(n.text.prefix);
            var o = yr(t, e, n);
            return o && i.appendChild(o, r), {renderText: r}
        }

        function na(t, e) {
            return (null != t ? t.toString() : "") + e.suffix
        }

        function ra(t, e, n, r) {
            for (var i = 0, o = 0, a = 0, s = 0, l = 0, u = null, c = null, h = !1, p = !1, f = null, d = 0; d < e.length; d++) {
                var m = e[d];
                if (m.nodeIndex = d, m.parent = u, m.bindingIndex = i, m.outputIndex = o, m.renderParent = c, a |= m.flags, l |= m.matchedQueryIds, m.element) {
                    var y = m.element;
                    y.publicProviders = u ? u.element.publicProviders : Object.create(null), y.allProviders = y.publicProviders, h = !1, p = !1, m.element.template && (l |= m.element.template.nodeMatchedQueries)
                }
                if (oa(u, m, e.length), i += m.bindings.length, o += m.outputs.length, !c && 3 & m.flags && (f = m), 20224 & m.flags) {
                    h || (h = !0, u.element.publicProviders = Object.create(u.element.publicProviders), u.element.allProviders = u.element.publicProviders);
                    var g = 0 != (32768 & m.flags);
                    0 == (8192 & m.flags) || g ? u.element.publicProviders[Yn(m.provider.token)] = m : (p || (p = !0, u.element.allProviders = Object.create(u.element.publicProviders)), u.element.allProviders[Yn(m.provider.token)] = m), g && (u.element.componentProvider = m)
                }
                if (u ? (u.childFlags |= m.flags, u.directChildFlags |= m.flags, u.childMatchedQueries |= m.matchedQueryIds, m.element && m.element.template && (u.childMatchedQueries |= m.element.template.nodeMatchedQueries)) : s |= m.flags, m.childCount > 0) u = m, ia(m) || (c = m); else for (; u && d === u.nodeIndex + u.childCount;) {
                    var v = u.parent;
                    v && (v.childFlags |= u.childFlags, v.childMatchedQueries |= u.childMatchedQueries), c = (u = v) && ia(u) ? u.renderParent : u
                }
            }
            return {
                factory: null,
                nodeFlags: a,
                rootNodeFlags: s,
                nodeMatchedQueries: l,
                flags: t,
                nodes: e,
                updateDirectives: n || Qn,
                updateRenderer: r || Qn,
                handleEvent: function (t, n, r, i) {
                    return e[n].element.handleEvent(t, r, i)
                },
                bindingCount: i,
                outputCount: o,
                lastRenderRootNode: f
            }
        }

        function ia(t) {
            return 0 != (1 & t.flags) && null === t.element.name
        }

        function oa(t, e, n) {
            var r = e.element && e.element.template;
            if (r) {
                if (!r.lastRenderRootNode) throw new Error("Illegal State: Embedded templates without nodes are not allowed!");
                if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags) throw new Error("Illegal State: Last root node of a template can't have embedded views, at index " + e.nodeIndex + "!")
            }
            if (20224 & e.flags && 0 == (1 & (t ? t.flags : 0))) throw new Error("Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index " + e.nodeIndex + "!");
            if (e.query) {
                if (67108864 & e.flags && (!t || 0 == (16384 & t.flags))) throw new Error("Illegal State: Content Query nodes need to be children of directives, at index " + e.nodeIndex + "!");
                if (134217728 & e.flags && t) throw new Error("Illegal State: View Query nodes have to be top level nodes, at index " + e.nodeIndex + "!")
            }
            if (e.childCount) {
                var i = t ? t.nodeIndex + t.childCount : n - 1;
                if (e.nodeIndex <= i && e.nodeIndex + e.childCount > i) throw new Error("Illegal State: childCount of node leads outside of parent, at index " + e.nodeIndex + "!")
            }
        }

        function aa(t, e, n, r) {
            var i = ua(t.root, t.renderer, t, e, n);
            return ca(i, t.component, r), ha(i), i
        }

        function sa(t, e, n) {
            var r = ua(t, t.renderer, null, null, e);
            return ca(r, n, n), ha(r), r
        }

        function la(t, e, n, r) {
            var i, o = e.element.componentRendererType;
            return i = o ? t.root.rendererFactory.createRenderer(r, o) : t.root.renderer, ua(t.root, i, t, e.element.componentProvider, n)
        }

        function ua(t, e, n, r, i) {
            var o = new Array(i.nodes.length), a = i.outputCount ? new Array(i.outputCount) : null;
            return {
                def: i,
                parent: n,
                viewContainerParent: null,
                parentNodeDef: r,
                context: null,
                component: null,
                nodes: o,
                state: 13,
                root: t,
                renderer: e,
                oldValues: new Array(i.bindingCount),
                disposables: a,
                initIndex: -1
            }
        }

        function ca(t, e, n) {
            t.component = e, t.context = n
        }

        function ha(t) {
            var e;
            hr(t) && (e = Hn(t.parent, t.parentNodeDef.parent.nodeIndex).renderElement);
            for (var n = t.def, r = t.nodes, i = 0; i < n.nodes.length; i++) {
                var o = n.nodes[i];
                Kn.setCurrentNode(t, i);
                var a = void 0;
                switch (201347067 & o.flags) {
                    case 1:
                        var s = Uo(t, e, o), l = void 0;
                        if (33554432 & o.flags) {
                            var u = vr(o.element.componentView);
                            l = Kn.createComponentView(t, o, u, s)
                        }
                        Ho(t, l, o, s), a = {
                            renderElement: s,
                            componentView: l,
                            viewContainer: null,
                            template: o.element.template ? Qr(t, o) : void 0
                        }, 16777216 & o.flags && (a.viewContainer = qr(t, o, a));
                        break;
                    case 2:
                        a = ea(t, e, o);
                        break;
                    case 512:
                    case 1024:
                    case 2048:
                    case 256:
                        (a = r[i]) || 4096 & o.flags || (a = {instance: mi(t, o)});
                        break;
                    case 16:
                        a = {instance: yi(t, o)};
                        break;
                    case 16384:
                        (a = r[i]) || (a = {instance: gi(t, o)}), 32768 & o.flags && ca(Hn(t, o.parent.nodeIndex).componentView, a.instance, a.instance);
                        break;
                    case 32:
                    case 64:
                    case 128:
                        a = {value: void 0};
                        break;
                    case 67108864:
                    case 134217728:
                        a = new Ti;
                        break;
                    case 8:
                        Xo(t, e, o), a = void 0
                }
                r[i] = a
            }
            ba(t, _a.CreateViewNodes), Ea(t, 201326592, 268435456, 0)
        }

        function pa(t) {
            ma(t), Kn.updateDirectives(t, 1), wa(t, _a.CheckNoChanges), Kn.updateRenderer(t, 1), ba(t, _a.CheckNoChanges), t.state &= -97
        }

        function fa(t) {
            1 & t.state ? (t.state &= -2, t.state |= 2) : t.state &= -3, Ln(t, 0, 256), ma(t), Kn.updateDirectives(t, 0), wa(t, _a.CheckAndUpdate), Ea(t, 67108864, 536870912, 0);
            var e = Ln(t, 256, 512);
            xi(t, 2097152 | (e ? 1048576 : 0)), Kn.updateRenderer(t, 0), ba(t, _a.CheckAndUpdate), Ea(t, 134217728, 536870912, 0), xi(t, 8388608 | ((e = Ln(t, 512, 768)) ? 4194304 : 0)), 2 & t.def.flags && (t.state &= -9), t.state &= -97, Ln(t, 768, 1024)
        }

        function da(t, e, n, r, i, o, a, s, l, u, h, p, f) {
            return 0 === n ? function (t, e, n, r, i, o, a, s, l, u, c, h) {
                switch (201347067 & e.flags) {
                    case 1:
                        return function (t, e, n, r, i, o, a, s, l, u, c, h) {
                            var p = e.bindings.length, f = !1;
                            return p > 0 && Go(t, e, 0, n) && (f = !0), p > 1 && Go(t, e, 1, r) && (f = !0), p > 2 && Go(t, e, 2, i) && (f = !0), p > 3 && Go(t, e, 3, o) && (f = !0), p > 4 && Go(t, e, 4, a) && (f = !0), p > 5 && Go(t, e, 5, s) && (f = !0), p > 6 && Go(t, e, 6, l) && (f = !0), p > 7 && Go(t, e, 7, u) && (f = !0), p > 8 && Go(t, e, 8, c) && (f = !0), p > 9 && Go(t, e, 9, h) && (f = !0), f
                        }(t, e, n, r, i, o, a, s, l, u, c, h);
                    case 2:
                        return function (t, e, n, r, i, o, a, s, l, u, c, h) {
                            var p = !1, f = e.bindings, d = f.length;
                            if (d > 0 && rr(t, e, 0, n) && (p = !0), d > 1 && rr(t, e, 1, r) && (p = !0), d > 2 && rr(t, e, 2, i) && (p = !0), d > 3 && rr(t, e, 3, o) && (p = !0), d > 4 && rr(t, e, 4, a) && (p = !0), d > 5 && rr(t, e, 5, s) && (p = !0), d > 6 && rr(t, e, 6, l) && (p = !0), d > 7 && rr(t, e, 7, u) && (p = !0), d > 8 && rr(t, e, 8, c) && (p = !0), d > 9 && rr(t, e, 9, h) && (p = !0), p) {
                                var m = e.text.prefix;
                                d > 0 && (m += na(n, f[0])), d > 1 && (m += na(r, f[1])), d > 2 && (m += na(i, f[2])), d > 3 && (m += na(o, f[3])), d > 4 && (m += na(a, f[4])), d > 5 && (m += na(s, f[5])), d > 6 && (m += na(l, f[6])), d > 7 && (m += na(u, f[7])), d > 8 && (m += na(c, f[8])), d > 9 && (m += na(h, f[9]));
                                var y = Un(t, e.nodeIndex).renderText;
                                t.renderer.setValue(y, m)
                            }
                            return p
                        }(t, e, n, r, i, o, a, s, l, u, c, h);
                    case 16384:
                        return function (t, e, n, r, i, o, a, s, l, u, c, h) {
                            var p = qn(t, e.nodeIndex), f = p.instance, d = !1, m = void 0, y = e.bindings.length;
                            return y > 0 && nr(t, e, 0, n) && (d = !0, m = Ei(t, p, e, 0, n, m)), y > 1 && nr(t, e, 1, r) && (d = !0, m = Ei(t, p, e, 1, r, m)), y > 2 && nr(t, e, 2, i) && (d = !0, m = Ei(t, p, e, 2, i, m)), y > 3 && nr(t, e, 3, o) && (d = !0, m = Ei(t, p, e, 3, o, m)), y > 4 && nr(t, e, 4, a) && (d = !0, m = Ei(t, p, e, 4, a, m)), y > 5 && nr(t, e, 5, s) && (d = !0, m = Ei(t, p, e, 5, s, m)), y > 6 && nr(t, e, 6, l) && (d = !0, m = Ei(t, p, e, 6, l, m)), y > 7 && nr(t, e, 7, u) && (d = !0, m = Ei(t, p, e, 7, u, m)), y > 8 && nr(t, e, 8, c) && (d = !0, m = Ei(t, p, e, 8, c, m)), y > 9 && nr(t, e, 9, h) && (d = !0, m = Ei(t, p, e, 9, h, m)), m && f.ngOnChanges(m), 65536 & e.flags && zn(t, 256, e.nodeIndex) && f.ngOnInit(), 262144 & e.flags && f.ngDoCheck(), d
                        }(t, e, n, r, i, o, a, s, l, u, c, h);
                    case 32:
                    case 64:
                    case 128:
                        return function (t, e, n, r, i, o, a, s, l, u, c, h) {
                            var p = e.bindings, f = !1, d = p.length;
                            if (d > 0 && rr(t, e, 0, n) && (f = !0), d > 1 && rr(t, e, 1, r) && (f = !0), d > 2 && rr(t, e, 2, i) && (f = !0), d > 3 && rr(t, e, 3, o) && (f = !0), d > 4 && rr(t, e, 4, a) && (f = !0), d > 5 && rr(t, e, 5, s) && (f = !0), d > 6 && rr(t, e, 6, l) && (f = !0), d > 7 && rr(t, e, 7, u) && (f = !0), d > 8 && rr(t, e, 8, c) && (f = !0), d > 9 && rr(t, e, 9, h) && (f = !0), f) {
                                var m = Gn(t, e.nodeIndex), y = void 0;
                                switch (201347067 & e.flags) {
                                    case 32:
                                        y = new Array(p.length), d > 0 && (y[0] = n), d > 1 && (y[1] = r), d > 2 && (y[2] = i), d > 3 && (y[3] = o), d > 4 && (y[4] = a), d > 5 && (y[5] = s), d > 6 && (y[6] = l), d > 7 && (y[7] = u), d > 8 && (y[8] = c), d > 9 && (y[9] = h);
                                        break;
                                    case 64:
                                        y = {}, d > 0 && (y[p[0].name] = n), d > 1 && (y[p[1].name] = r), d > 2 && (y[p[2].name] = i), d > 3 && (y[p[3].name] = o), d > 4 && (y[p[4].name] = a), d > 5 && (y[p[5].name] = s), d > 6 && (y[p[6].name] = l), d > 7 && (y[p[7].name] = u), d > 8 && (y[p[8].name] = c), d > 9 && (y[p[9].name] = h);
                                        break;
                                    case 128:
                                        var g = n;
                                        switch (d) {
                                            case 1:
                                                y = g.transform(n);
                                                break;
                                            case 2:
                                                y = g.transform(r);
                                                break;
                                            case 3:
                                                y = g.transform(r, i);
                                                break;
                                            case 4:
                                                y = g.transform(r, i, o);
                                                break;
                                            case 5:
                                                y = g.transform(r, i, o, a);
                                                break;
                                            case 6:
                                                y = g.transform(r, i, o, a, s);
                                                break;
                                            case 7:
                                                y = g.transform(r, i, o, a, s, l);
                                                break;
                                            case 8:
                                                y = g.transform(r, i, o, a, s, l, u);
                                                break;
                                            case 9:
                                                y = g.transform(r, i, o, a, s, l, u, c);
                                                break;
                                            case 10:
                                                y = g.transform(r, i, o, a, s, l, u, c, h)
                                        }
                                }
                                m.value = y
                            }
                            return f
                        }(t, e, n, r, i, o, a, s, l, u, c, h);
                    default:
                        throw"unreachable"
                }
            }(t, e, r, i, o, a, s, l, u, h, p, f) : function (t, e, n) {
                switch (201347067 & e.flags) {
                    case 1:
                        return function (t, e, n) {
                            for (var r = !1, i = 0; i < n.length; i++) Go(t, e, i, n[i]) && (r = !0);
                            return r
                        }(t, e, n);
                    case 2:
                        return function (t, e, n) {
                            for (var r = e.bindings, i = !1, o = 0; o < n.length; o++) rr(t, e, o, n[o]) && (i = !0);
                            if (i) {
                                var a = "";
                                for (o = 0; o < n.length; o++) a += na(n[o], r[o]);
                                a = e.text.prefix + a;
                                var s = Un(t, e.nodeIndex).renderText;
                                t.renderer.setValue(s, a)
                            }
                            return i
                        }(t, e, n);
                    case 16384:
                        return function (t, e, n) {
                            for (var r = qn(t, e.nodeIndex), i = r.instance, o = !1, a = void 0, s = 0; s < n.length; s++) nr(t, e, s, n[s]) && (o = !0, a = Ei(t, r, e, s, n[s], a));
                            return a && i.ngOnChanges(a), 65536 & e.flags && zn(t, 256, e.nodeIndex) && i.ngOnInit(), 262144 & e.flags && i.ngDoCheck(), o
                        }(t, e, n);
                    case 32:
                    case 64:
                    case 128:
                        return function (t, e, n) {
                            for (var r = e.bindings, i = !1, o = 0; o < n.length; o++) rr(t, e, o, n[o]) && (i = !0);
                            if (i) {
                                var a = Gn(t, e.nodeIndex), s = void 0;
                                switch (201347067 & e.flags) {
                                    case 32:
                                        s = n;
                                        break;
                                    case 64:
                                        for (s = {}, o = 0; o < n.length; o++) s[r[o].name] = n[o];
                                        break;
                                    case 128:
                                        var l = n[0], u = n.slice(1);
                                        s = l.transform.apply(l, c(u))
                                }
                                a.value = s
                            }
                            return i
                        }(t, e, n);
                    default:
                        throw"unreachable"
                }
            }(t, e, r)
        }

        function ma(t) {
            var e = t.def;
            if (4 & e.nodeFlags) for (var n = 0; n < e.nodes.length; n++) {
                var r = e.nodes[n];
                if (4 & r.flags) {
                    var i = Hn(t, n).template._projectedViews;
                    if (i) for (var o = 0; o < i.length; o++) {
                        var a = i[o];
                        a.state |= 32, ar(a, t)
                    }
                } else 0 == (4 & r.childFlags) && (n += r.childCount)
            }
        }

        function ya(t, e, n, r, i, o, a, s, l, u, c, h, p) {
            return 0 === n ? function (t, e, n, r, i, o, a, s, l, u, c, h) {
                var p = e.bindings.length;
                p > 0 && ir(t, e, 0, n), p > 1 && ir(t, e, 1, r), p > 2 && ir(t, e, 2, i), p > 3 && ir(t, e, 3, o), p > 4 && ir(t, e, 4, a), p > 5 && ir(t, e, 5, s), p > 6 && ir(t, e, 6, l), p > 7 && ir(t, e, 7, u), p > 8 && ir(t, e, 8, c), p > 9 && ir(t, e, 9, h)
            }(t, e, r, i, o, a, s, l, u, c, h, p) : function (t, e, n) {
                for (var r = 0; r < n.length; r++) ir(t, e, r, n[r])
            }(t, e, r), !1
        }

        function ga(t, e) {
            if (Wn(t, e.nodeIndex).dirty) throw Vn(Kn.createDebugContext(t, e.nodeIndex), "Query " + e.query.id + " not dirty", "Query " + e.query.id + " dirty", 0 != (1 & t.state))
        }

        function va(t) {
            if (!(128 & t.state)) {
                if (wa(t, _a.Destroy), ba(t, _a.Destroy), xi(t, 131072), t.disposables) for (var e = 0; e < t.disposables.length; e++) t.disposables[e]();
                !function (t) {
                    if (16 & t.state) {
                        var e = lr(t);
                        if (e) {
                            var n = e.template._projectedViews;
                            n && (jr(n, n.indexOf(t)), Kn.dirtyParentQueries(t))
                        }
                    }
                }(t), t.renderer.destroyNode && function (t) {
                    for (var e = t.def.nodes.length, n = 0; n < e; n++) {
                        var r = t.def.nodes[n];
                        1 & r.flags ? t.renderer.destroyNode(Hn(t, n).renderElement) : 2 & r.flags ? t.renderer.destroyNode(Un(t, n).renderText) : (67108864 & r.flags || 134217728 & r.flags) && Wn(t, n).destroy()
                    }
                }(t), hr(t) && t.renderer.destroy(), t.state |= 128
            }
        }

        var _a = function (t) {
            return t[t.CreateViewNodes = 0] = "CreateViewNodes", t[t.CheckNoChanges = 1] = "CheckNoChanges", t[t.CheckNoChangesProjectedViews = 2] = "CheckNoChangesProjectedViews", t[t.CheckAndUpdate = 3] = "CheckAndUpdate", t[t.CheckAndUpdateProjectedViews = 4] = "CheckAndUpdateProjectedViews", t[t.Destroy = 5] = "Destroy", t
        }({});

        function ba(t, e) {
            var n = t.def;
            if (33554432 & n.nodeFlags) for (var r = 0; r < n.nodes.length; r++) {
                var i = n.nodes[r];
                33554432 & i.flags ? Ca(Hn(t, r).componentView, e) : 0 == (33554432 & i.childFlags) && (r += i.childCount)
            }
        }

        function wa(t, e) {
            var n = t.def;
            if (16777216 & n.nodeFlags) for (var r = 0; r < n.nodes.length; r++) {
                var i = n.nodes[r];
                if (16777216 & i.flags) for (var o = Hn(t, r).viewContainer._embeddedViews, a = 0; a < o.length; a++) Ca(o[a], e); else 0 == (16777216 & i.childFlags) && (r += i.childCount)
            }
        }

        function Ca(t, e) {
            var n = t.state;
            switch (e) {
                case _a.CheckNoChanges:
                    0 == (128 & n) && (12 == (12 & n) ? pa(t) : 64 & n && Sa(t, _a.CheckNoChangesProjectedViews));
                    break;
                case _a.CheckNoChangesProjectedViews:
                    0 == (128 & n) && (32 & n ? pa(t) : 64 & n && Sa(t, e));
                    break;
                case _a.CheckAndUpdate:
                    0 == (128 & n) && (12 == (12 & n) ? fa(t) : 64 & n && Sa(t, _a.CheckAndUpdateProjectedViews));
                    break;
                case _a.CheckAndUpdateProjectedViews:
                    0 == (128 & n) && (32 & n ? fa(t) : 64 & n && Sa(t, e));
                    break;
                case _a.Destroy:
                    va(t);
                    break;
                case _a.CreateViewNodes:
                    ha(t)
            }
        }

        function Sa(t, e) {
            wa(t, e), ba(t, e)
        }

        function Ea(t, e, n, r) {
            if (t.def.nodeFlags & e && t.def.nodeFlags & n) for (var i = t.def.nodes.length, o = 0; o < i; o++) {
                var a = t.def.nodes[o];
                if (a.flags & e && a.flags & n) switch (Kn.setCurrentNode(t, a.nodeIndex), r) {
                    case 0:
                        Qo(t, a);
                        break;
                    case 1:
                        ga(t, a)
                }
                a.childFlags & e && a.childFlags & n || (o += a.childCount)
            }
        }

        var xa = !1;

        function Aa(t, e, n, r, i, o) {
            var a = i.injector.get(hn);
            return sa(Oa(t, i, a, e, n), r, o)
        }

        function ka(t, e, n, r, i, o) {
            var a = i.injector.get(hn), s = Oa(t, i, new as(a), e, n), l = Fa(r);
            return is(Ka.create, sa, null, [s, l, o])
        }

        function Oa(t, e, n, r, i) {
            var o = e.injector.get(De), a = e.injector.get(le), s = n.createRenderer(null, null);
            return {
                ngModule: e,
                injector: t,
                projectableNodes: r,
                selectorOrNode: i,
                sanitizer: o,
                rendererFactory: n,
                renderer: s,
                errorHandler: a
            }
        }

        function Pa(t, e, n, r) {
            var i = Fa(n);
            return is(Ka.create, aa, null, [t, e, i, r])
        }

        function Ta(t, e, n, r) {
            return n = Da.get(e.element.componentProvider.provider.token) || Fa(n), is(Ka.create, la, null, [t, e, n, r])
        }

        function Ia(t, e, n, r) {
            return ei(t, e, n, function (t) {
                var e = function (t) {
                    var e = !1, n = !1;
                    return 0 === Ra.size ? {
                        hasOverrides: e,
                        hasDeprecatedOverrides: n
                    } : (t.providers.forEach(function (t) {
                        var r = Ra.get(t.token);
                        3840 & t.flags && r && (e = !0, n = n || r.deprecatedBehavior)
                    }), t.modules.forEach(function (t) {
                        Na.forEach(function (r, i) {
                            St(i).providedIn === t && (e = !0, n = n || r.deprecatedBehavior)
                        })
                    }), {hasOverrides: e, hasDeprecatedOverrides: n})
                }(t), n = e.hasDeprecatedOverrides;
                return e.hasOverrides ? (function (t) {
                    for (var e = 0; e < t.providers.length; e++) {
                        var r = t.providers[e];
                        n && (r.flags |= 4096);
                        var i = Ra.get(r.token);
                        i && (r.flags = -3841 & r.flags | i.flags, r.deps = mr(i.deps), r.value = i.value)
                    }
                    if (Na.size > 0) {
                        var o = new Set(t.modules);
                        Na.forEach(function (e, r) {
                            if (o.has(St(r).providedIn)) {
                                var i = {
                                    token: r,
                                    flags: e.flags | (n ? 4096 : 0),
                                    deps: mr(e.deps),
                                    value: e.value,
                                    index: t.providers.length
                                };
                                t.providers.push(i), t.providersByKey[Yn(r)] = i
                            }
                        })
                    }
                }(t = t.factory(function () {
                    return Qn
                })), t) : t
            }(r))
        }

        var Ra = new Map, Na = new Map, Da = new Map;

        function Ba(t) {
            var e;
            Ra.set(t.token, t), "function" == typeof t.token && (e = St(t.token)) && "function" == typeof e.providedIn && Na.set(t.token, t)
        }

        function Ma(t, e) {
            var n = vr(e.viewDefFactory), r = vr(n.nodes[0].element.componentView);
            Da.set(t, r)
        }

        function Va() {
            Ra.clear(), Na.clear(), Da.clear()
        }

        function Fa(t) {
            if (0 === Ra.size) return t;
            var e = function (t) {
                for (var e = [], n = null, r = 0; r < t.nodes.length; r++) {
                    var i = t.nodes[r];
                    1 & i.flags && (n = i), n && 3840 & i.flags && Ra.has(i.provider.token) && (e.push(n.nodeIndex), n = null)
                }
                return e
            }(t);
            if (0 === e.length) return t;
            t = t.factory(function () {
                return Qn
            });
            for (var n = 0; n < e.length; n++) r(t, e[n]);
            return t;

            function r(t, e) {
                for (var n = e + 1; n < t.nodes.length; n++) {
                    var r = t.nodes[n];
                    if (1 & r.flags) return;
                    if (3840 & r.flags) {
                        var i = r.provider, o = Ra.get(i.token);
                        o && (r.flags = -3841 & r.flags | o.flags, i.deps = mr(o.deps), i.value = o.value)
                    }
                }
            }
        }

        function ja(t, e, n, r, i, o, a, s, l, u, c, h, p) {
            var f = t.def.nodes[e];
            return da(t, f, n, r, i, o, a, s, l, u, c, h, p), 224 & f.flags ? Gn(t, e).value : void 0
        }

        function La(t, e, n, r, i, o, a, s, l, u, c, h, p) {
            var f = t.def.nodes[e];
            return ya(t, f, n, r, i, o, a, s, l, u, c, h, p), 224 & f.flags ? Gn(t, e).value : void 0
        }

        function za(t) {
            return is(Ka.detectChanges, fa, null, [t])
        }

        function Ua(t) {
            return is(Ka.checkNoChanges, pa, null, [t])
        }

        function Ha(t) {
            return is(Ka.destroy, va, null, [t])
        }

        var qa, Ga, Wa, Ka = function (t) {
            return t[t.create = 0] = "create", t[t.detectChanges = 1] = "detectChanges", t[t.checkNoChanges = 2] = "checkNoChanges", t[t.destroy = 3] = "destroy", t[t.handleEvent = 4] = "handleEvent", t
        }({});

        function Qa(t, e) {
            Ga = t, Wa = e
        }

        function Za(t, e, n, r) {
            return Qa(t, e), is(Ka.handleEvent, t.def.handleEvent, null, [t, e, n, r])
        }

        function Ya(t, e) {
            if (128 & t.state) throw jn(Ka[qa]);
            return Qa(t, ts(t, 0)), t.def.updateDirectives(function (t, n, r) {
                for (var i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
                var a = t.def.nodes[n];
                return 0 === e ? Xa(t, a, r, i) : Ja(t, a, r, i), 16384 & a.flags && Qa(t, ts(t, n)), 224 & a.flags ? Gn(t, a.nodeIndex).value : void 0
            }, t)
        }

        function $a(t, e) {
            if (128 & t.state) throw jn(Ka[qa]);
            return Qa(t, es(t, 0)), t.def.updateRenderer(function (t, n, r) {
                for (var i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
                var a = t.def.nodes[n];
                return 0 === e ? Xa(t, a, r, i) : Ja(t, a, r, i), 3 & a.flags && Qa(t, es(t, n)), 224 & a.flags ? Gn(t, a.nodeIndex).value : void 0
            }, t)
        }

        function Xa(t, e, n, r) {
            if (da.apply(void 0, c([t, e, n], r))) {
                var i = 1 === n ? r[0] : r;
                if (16384 & e.flags) {
                    for (var o = {}, a = 0; a < e.bindings.length; a++) {
                        var s = e.bindings[a], l = i[a];
                        8 & s.flags && (o[(f = s.nonMinifiedName, "ng-reflect-" + f.replace(/[$@]/g, "_").replace(Ve, function () {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            return "-" + t[1].toLowerCase()
                        }))] = Fe(l))
                    }
                    var u = e.parent, h = Hn(t, u.nodeIndex).renderElement;
                    if (u.element.name) for (var p in o) null != (l = o[p]) ? t.renderer.setAttribute(h, p, l) : t.renderer.removeAttribute(h, p); else t.renderer.setValue(h, "bindings=" + JSON.stringify(o, null, 2))
                }
            }
            var f
        }

        function Ja(t, e, n, r) {
            ya.apply(void 0, c([t, e, n], r))
        }

        function ts(t, e) {
            for (var n = e; n < t.def.nodes.length; n++) {
                var r = t.def.nodes[n];
                if (16384 & r.flags && r.bindings && r.bindings.length) return n
            }
            return null
        }

        function es(t, e) {
            for (var n = e; n < t.def.nodes.length; n++) {
                var r = t.def.nodes[n];
                if (3 & r.flags && r.bindings && r.bindings.length) return n
            }
            return null
        }

        var ns = function () {
            function t(t, e) {
                this.view = t, this.nodeIndex = e, null == e && (this.nodeIndex = e = 0), this.nodeDef = t.def.nodes[e];
                for (var n = this.nodeDef, r = t; n && 0 == (1 & n.flags);) n = n.parent;
                if (!n) for (; !n && r;) n = ur(r), r = r.parent;
                this.elDef = n, this.elView = r
            }

            return Object.defineProperty(t.prototype, "elOrCompView", {
                get: function () {
                    return Hn(this.elView, this.elDef.nodeIndex).componentView || this.view
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "injector", {
                get: function () {
                    return Yr(this.elView, this.elDef)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "component", {
                get: function () {
                    return this.elOrCompView.component
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "context", {
                get: function () {
                    return this.elOrCompView.context
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "providerTokens", {
                get: function () {
                    var t = [];
                    if (this.elDef) for (var e = this.elDef.nodeIndex + 1; e <= this.elDef.nodeIndex + this.elDef.childCount; e++) {
                        var n = this.elView.def.nodes[e];
                        20224 & n.flags && t.push(n.provider.token), e += n.childCount
                    }
                    return t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "references", {
                get: function () {
                    var t = {};
                    if (this.elDef) {
                        rs(this.elView, this.elDef, t);
                        for (var e = this.elDef.nodeIndex + 1; e <= this.elDef.nodeIndex + this.elDef.childCount; e++) {
                            var n = this.elView.def.nodes[e];
                            20224 & n.flags && rs(this.elView, n, t), e += n.childCount
                        }
                    }
                    return t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "componentRenderElement", {
                get: function () {
                    var t = function (t) {
                        for (; t && !hr(t);) t = t.parent;
                        return t.parent ? Hn(t.parent, ur(t).nodeIndex) : null
                    }(this.elOrCompView);
                    return t ? t.renderElement : void 0
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "renderNode", {
                get: function () {
                    return 2 & this.nodeDef.flags ? cr(this.view, this.nodeDef) : cr(this.elView, this.elDef)
                }, enumerable: !0, configurable: !0
            }), t.prototype.logError = function (t) {
                for (var e, n, r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
                2 & this.nodeDef.flags ? (e = this.view.def, n = this.nodeDef.nodeIndex) : (e = this.elView.def, n = this.elDef.nodeIndex);
                var o = function (t, e) {
                    for (var n = -1, r = 0; r <= e; r++) 3 & t.nodes[r].flags && n++;
                    return n
                }(e, n), a = -1;
                e.factory(function () {
                    var e;
                    return ++a === o ? (e = t.error).bind.apply(e, c([t], r)) : Qn
                }), a < o && (t.error("Illegal state: the ViewDefinitionFactory did not call the logger!"), t.error.apply(t, c(r)))
            }, t
        }();

        function rs(t, e, n) {
            for (var r in e.references) n[r] = Yo(t, e, e.references[r])
        }

        function is(t, e, n, r) {
            var i = qa, o = Ga, a = Wa;
            try {
                qa = t;
                var s = e.apply(n, r);
                return Ga = o, Wa = a, qa = i, s
            } catch (l) {
                if (oe(l) || !Ga) throw l;
                throw function (t, e) {
                    return t instanceof Error || (t = new Error(t.toString())), Fn(t, e), t
                }(l, os())
            }
        }

        function os() {
            return Ga ? new ns(Ga, Wa) : null
        }

        var as = function () {
            function t(t) {
                this.delegate = t
            }

            return t.prototype.createRenderer = function (t, e) {
                return new ss(this.delegate.createRenderer(t, e))
            }, t.prototype.begin = function () {
                this.delegate.begin && this.delegate.begin()
            }, t.prototype.end = function () {
                this.delegate.end && this.delegate.end()
            }, t.prototype.whenRenderingDone = function () {
                return this.delegate.whenRenderingDone ? this.delegate.whenRenderingDone() : Promise.resolve(null)
            }, t
        }(), ss = function () {
            function t(t) {
                this.delegate = t, this.debugContextFactory = os, this.data = this.delegate.data
            }

            return t.prototype.createDebugContext = function (t) {
                return this.debugContextFactory(t)
            }, t.prototype.destroyNode = function (t) {
                !function (t) {
                    To.delete(t.nativeNode)
                }(Io(t)), this.delegate.destroyNode && this.delegate.destroyNode(t)
            }, t.prototype.destroy = function () {
                this.delegate.destroy()
            }, t.prototype.createElement = function (t, e) {
                var n = this.delegate.createElement(t, e), r = this.createDebugContext(n);
                if (r) {
                    var i = new Po(n, null, r);
                    i.name = t, Ro(i)
                }
                return n
            }, t.prototype.createComment = function (t) {
                var e = this.delegate.createComment(t), n = this.createDebugContext(e);
                return n && Ro(new Oo(e, null, n)), e
            }, t.prototype.createText = function (t) {
                var e = this.delegate.createText(t), n = this.createDebugContext(e);
                return n && Ro(new Oo(e, null, n)), e
            }, t.prototype.appendChild = function (t, e) {
                var n = Io(t), r = Io(e);
                n && r && n instanceof Po && n.addChild(r), this.delegate.appendChild(t, e)
            }, t.prototype.insertBefore = function (t, e, n) {
                var r = Io(t), i = Io(e), o = Io(n);
                r && i && r instanceof Po && r.insertBefore(o, i), this.delegate.insertBefore(t, e, n)
            }, t.prototype.removeChild = function (t, e) {
                var n = Io(t), r = Io(e);
                n && r && n instanceof Po && n.removeChild(r), this.delegate.removeChild(t, e)
            }, t.prototype.selectRootElement = function (t, e) {
                var n = this.delegate.selectRootElement(t, e), r = os();
                return r && Ro(new Po(n, null, r)), n
            }, t.prototype.setAttribute = function (t, e, n, r) {
                var i = Io(t);
                i && i instanceof Po && (i.attributes[r ? r + ":" + e : e] = n), this.delegate.setAttribute(t, e, n, r)
            }, t.prototype.removeAttribute = function (t, e, n) {
                var r = Io(t);
                r && r instanceof Po && (r.attributes[n ? n + ":" + e : e] = null), this.delegate.removeAttribute(t, e, n)
            }, t.prototype.addClass = function (t, e) {
                var n = Io(t);
                n && n instanceof Po && (n.classes[e] = !0), this.delegate.addClass(t, e)
            }, t.prototype.removeClass = function (t, e) {
                var n = Io(t);
                n && n instanceof Po && (n.classes[e] = !1), this.delegate.removeClass(t, e)
            }, t.prototype.setStyle = function (t, e, n, r) {
                var i = Io(t);
                i && i instanceof Po && (i.styles[e] = n), this.delegate.setStyle(t, e, n, r)
            }, t.prototype.removeStyle = function (t, e, n) {
                var r = Io(t);
                r && r instanceof Po && (r.styles[e] = null), this.delegate.removeStyle(t, e, n)
            }, t.prototype.setProperty = function (t, e, n) {
                var r = Io(t);
                r && r instanceof Po && (r.properties[e] = n), this.delegate.setProperty(t, e, n)
            }, t.prototype.listen = function (t, e, n) {
                if ("string" != typeof t) {
                    var r = Io(t);
                    r && r.listeners.push(new ko(e, n))
                }
                return this.delegate.listen(t, e, n)
            }, t.prototype.parentNode = function (t) {
                return this.delegate.parentNode(t)
            }, t.prototype.nextSibling = function (t) {
                return this.delegate.nextSibling(t)
            }, t.prototype.setValue = function (t, e) {
                return this.delegate.setValue(t, e)
            }, t
        }();

        function ls(t, e, n) {
            return new us(t, e, n)
        }

        var us = function (t) {
            function e(e, n, r) {
                var i = t.call(this) || this;
                return i.moduleType = e, i._bootstrapComponents = n, i._ngModuleDefFactory = r, i
            }

            return i(e, t), e.prototype.create = function (t) {
                !function () {
                    if (!xa) {
                        xa = !0;
                        var t = he() ? {
                            setCurrentNode: Qa,
                            createRootView: ka,
                            createEmbeddedView: Pa,
                            createComponentView: Ta,
                            createNgModuleRef: Ia,
                            overrideProvider: Ba,
                            overrideComponentView: Ma,
                            clearOverrides: Va,
                            checkAndUpdateView: za,
                            checkNoChangesView: Ua,
                            destroyView: Ha,
                            createDebugContext: function (t, e) {
                                return new ns(t, e)
                            },
                            handleEvent: Za,
                            updateDirectives: Ya,
                            updateRenderer: $a
                        } : {
                            setCurrentNode: function () {
                            },
                            createRootView: Aa,
                            createEmbeddedView: aa,
                            createComponentView: la,
                            createNgModuleRef: ei,
                            overrideProvider: Qn,
                            overrideComponentView: Qn,
                            clearOverrides: Qn,
                            checkAndUpdateView: fa,
                            checkNoChangesView: pa,
                            destroyView: va,
                            createDebugContext: function (t, e) {
                                return new ns(t, e)
                            },
                            handleEvent: function (t, e, n, r) {
                                return t.def.handleEvent(t, e, n, r)
                            },
                            updateDirectives: function (t, e) {
                                return t.def.updateDirectives(0 === e ? ja : La, t)
                            },
                            updateRenderer: function (t, e) {
                                return t.def.updateRenderer(0 === e ? ja : La, t)
                            }
                        };
                        Kn.setCurrentNode = t.setCurrentNode, Kn.createRootView = t.createRootView, Kn.createEmbeddedView = t.createEmbeddedView, Kn.createComponentView = t.createComponentView, Kn.createNgModuleRef = t.createNgModuleRef, Kn.overrideProvider = t.overrideProvider, Kn.overrideComponentView = t.overrideComponentView, Kn.clearOverrides = t.clearOverrides, Kn.checkAndUpdateView = t.checkAndUpdateView, Kn.checkNoChangesView = t.checkNoChangesView, Kn.destroyView = t.destroyView, Kn.resolveDep = Ci, Kn.createDebugContext = t.createDebugContext, Kn.handleEvent = t.handleEvent, Kn.updateDirectives = t.updateDirectives, Kn.updateRenderer = t.updateRenderer, Kn.dirtyParentQueries = Ko
                    }
                }();
                var e = function (t) {
                    var e = Array.from(t.providers), n = Array.from(t.modules), r = {};
                    for (var i in t.providersByKey) r[i] = t.providersByKey[i];
                    return {factory: t.factory, isRoot: t.isRoot, providers: e, modules: n, providersByKey: r}
                }(vr(this._ngModuleDefFactory));
                return Kn.createNgModuleRef(this.moduleType, t || zt.NULL, this._bootstrapComponents, e)
            }, e
        }(an), cs = function () {
            return function () {
            }
        }(), hs = function () {
            function t(t) {
                this.http = t
            }

            return t.prototype.searcById = function () {
                var t = this;
                this.http.get("http://127.0.0.1:8081/get/" + this.id).subscribe(function (e) {
                    return t.response = e, e
                })
            }, t
        }(), ps = function () {
            return function () {
            }
        }(), fs = new Mt("Location Initialized"), ds = function () {
            return function () {
            }
        }(), ms = new Mt("appBaseHref"), ys = function () {
            function t(t, n) {
                var r = this;
                this._subject = new Pi, this._urlChangeListeners = [], this._platformStrategy = t;
                var i = this._platformStrategy.getBaseHref();
                this._platformLocation = n, this._baseHref = e.stripTrailingSlash(gs(i)), this._platformStrategy.onPopState(function (t) {
                    r._subject.emit({url: r.path(!0), pop: !0, state: t.state, type: t.type})
                })
            }

            var e;
            return e = t, t.prototype.path = function (t) {
                return void 0 === t && (t = !1), this.normalize(this._platformStrategy.path(t))
            }, t.prototype.getState = function () {
                return this._platformLocation.getState()
            }, t.prototype.isCurrentPathEqualTo = function (t, n) {
                return void 0 === n && (n = ""), this.path() == this.normalize(t + e.normalizeQueryParams(n))
            }, t.prototype.normalize = function (t) {
                return e.stripTrailingSlash(function (t, e) {
                    return t && e.startsWith(t) ? e.substring(t.length) : e
                }(this._baseHref, gs(t)))
            }, t.prototype.prepareExternalUrl = function (t) {
                return t && "/" !== t[0] && (t = "/" + t), this._platformStrategy.prepareExternalUrl(t)
            }, t.prototype.go = function (t, n, r) {
                void 0 === n && (n = ""), void 0 === r && (r = null), this._platformStrategy.pushState(r, "", t, n), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + e.normalizeQueryParams(n)), r)
            }, t.prototype.replaceState = function (t, n, r) {
                void 0 === n && (n = ""), void 0 === r && (r = null), this._platformStrategy.replaceState(r, "", t, n), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + e.normalizeQueryParams(n)), r)
            }, t.prototype.forward = function () {
                this._platformStrategy.forward()
            }, t.prototype.back = function () {
                this._platformStrategy.back()
            }, t.prototype.onUrlChange = function (t) {
                var e = this;
                this._urlChangeListeners.push(t), this.subscribe(function (t) {
                    e._notifyUrlChangeListeners(t.url, t.state)
                })
            }, t.prototype._notifyUrlChangeListeners = function (t, e) {
                void 0 === t && (t = ""), this._urlChangeListeners.forEach(function (n) {
                    return n(t, e)
                })
            }, t.prototype.subscribe = function (t, e, n) {
                return this._subject.subscribe({next: t, error: e, complete: n})
            }, t.normalizeQueryParams = function (t) {
                return t && "?" !== t[0] ? "?" + t : t
            }, t.joinWithSlash = function (t, e) {
                if (0 == t.length) return e;
                if (0 == e.length) return t;
                var n = 0;
                return t.endsWith("/") && n++, e.startsWith("/") && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
            }, t.stripTrailingSlash = function (t) {
                var e = t.match(/#|\?|$/), n = e && e.index || t.length;
                return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n)
            }, t
        }();

        function gs(t) {
            return t.replace(/\/index.html$/, "")
        }

        var vs = function (t) {
                function e(e, n) {
                    var r = t.call(this) || this;
                    return r._platformLocation = e, r._baseHref = "", null != n && (r._baseHref = n), r
                }

                return i(e, t), e.prototype.onPopState = function (t) {
                    this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
                }, e.prototype.getBaseHref = function () {
                    return this._baseHref
                }, e.prototype.path = function (t) {
                    void 0 === t && (t = !1);
                    var e = this._platformLocation.hash;
                    return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e
                }, e.prototype.prepareExternalUrl = function (t) {
                    var e = ys.joinWithSlash(this._baseHref, t);
                    return e.length > 0 ? "#" + e : e
                }, e.prototype.pushState = function (t, e, n, r) {
                    var i = this.prepareExternalUrl(n + ys.normalizeQueryParams(r));
                    0 == i.length && (i = this._platformLocation.pathname), this._platformLocation.pushState(t, e, i)
                }, e.prototype.replaceState = function (t, e, n, r) {
                    var i = this.prepareExternalUrl(n + ys.normalizeQueryParams(r));
                    0 == i.length && (i = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, i)
                }, e.prototype.forward = function () {
                    this._platformLocation.forward()
                }, e.prototype.back = function () {
                    this._platformLocation.back()
                }, e
            }(ds), _s = function (t) {
                function e(e, n) {
                    var r = t.call(this) || this;
                    if (r._platformLocation = e, null == n && (n = r._platformLocation.getBaseHrefFromDOM()), null == n) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                    return r._baseHref = n, r
                }

                return i(e, t), e.prototype.onPopState = function (t) {
                    this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
                }, e.prototype.getBaseHref = function () {
                    return this._baseHref
                }, e.prototype.prepareExternalUrl = function (t) {
                    return ys.joinWithSlash(this._baseHref, t)
                }, e.prototype.path = function (t) {
                    void 0 === t && (t = !1);
                    var e = this._platformLocation.pathname + ys.normalizeQueryParams(this._platformLocation.search),
                        n = this._platformLocation.hash;
                    return n && t ? "" + e + n : e
                }, e.prototype.pushState = function (t, e, n, r) {
                    var i = this.prepareExternalUrl(n + ys.normalizeQueryParams(r));
                    this._platformLocation.pushState(t, e, i)
                }, e.prototype.replaceState = function (t, e, n, r) {
                    var i = this.prepareExternalUrl(n + ys.normalizeQueryParams(r));
                    this._platformLocation.replaceState(t, e, i)
                }, e.prototype.forward = function () {
                    this._platformLocation.forward()
                }, e.prototype.back = function () {
                    this._platformLocation.back()
                }, e
            }(ds), bs = void 0,
            ws = ["en", [["a", "p"], ["AM", "PM"], bs], [["AM", "PM"], bs, bs], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], bs, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], bs, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", bs, "{1} 'at' {0}", bs], [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"], ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "$", "US Dollar", {}, function (t) {
                var e = Math.floor(Math.abs(t)), n = t.toString().replace(/^[^.]*\.?/, "").length;
                return 1 === e && 0 === n ? 1 : 5
            }], Cs = {}, Ss = function (t) {
                return t[t.Zero = 0] = "Zero", t[t.One = 1] = "One", t[t.Two = 2] = "Two", t[t.Few = 3] = "Few", t[t.Many = 4] = "Many", t[t.Other = 5] = "Other", t
            }({}), Es = new Mt("UseV4Plurals"), xs = function () {
                return function () {
                }
            }(), As = function (t) {
                function e(e, n) {
                    var r = t.call(this) || this;
                    return r.locale = e, r.deprecatedPluralFn = n, r
                }

                return i(e, t), e.prototype.getPluralCategory = function (t, e) {
                    switch (this.deprecatedPluralFn ? this.deprecatedPluralFn(e || this.locale, t) : function (t) {
                        return function (t) {
                            var e = t.toLowerCase().replace(/_/g, "-"), n = Cs[e];
                            if (n) return n;
                            var r = e.split("-")[0];
                            if (n = Cs[r]) return n;
                            if ("en" === r) return ws;
                            throw new Error('Missing locale data for the locale "' + t + '".')
                        }(t)[18]
                    }(e || this.locale)(t)) {
                        case Ss.Zero:
                            return "zero";
                        case Ss.One:
                            return "one";
                        case Ss.Two:
                            return "two";
                        case Ss.Few:
                            return "few";
                        case Ss.Many:
                            return "many";
                        default:
                            return "other"
                    }
                }, e
            }(xs);

        function ks(t, e) {
            var n, r;
            e = encodeURIComponent(e);
            try {
                for (var i = l(t.split(";")), o = i.next(); !o.done; o = i.next()) {
                    var a = o.value, s = a.indexOf("="), c = u(-1 == s ? [a, ""] : [a.slice(0, s), a.slice(s + 1)], 2),
                        h = c[1];
                    if (c[0].trim() === e) return decodeURIComponent(h)
                }
            } catch (p) {
                n = {error: p}
            } finally {
                try {
                    o && !o.done && (r = i.return) && r.call(i)
                } finally {
                    if (n) throw n.error
                }
            }
            return null
        }

        var Os = function () {
            return function () {
            }
        }(), Ps = function () {
            function t(t, e, n, r) {
                this._iterableDiffers = t, this._keyValueDiffers = e, this._ngEl = n, this._renderer = r, this._initialClasses = []
            }

            return t.prototype.getValue = function () {
                return null
            }, t.prototype.setClass = function (t) {
                this._removeClasses(this._initialClasses), this._initialClasses = "string" == typeof t ? t.split(/\s+/) : [], this._applyClasses(this._initialClasses), this._applyClasses(this._rawClass)
            }, t.prototype.setNgClass = function (t) {
                this._removeClasses(this._rawClass), this._applyClasses(this._initialClasses), this._iterableDiffer = null, this._keyValueDiffer = null, this._rawClass = "string" == typeof t ? t.split(/\s+/) : t, this._rawClass && (We(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create())
            }, t.prototype.applyChanges = function () {
                if (this._iterableDiffer) {
                    var t = this._iterableDiffer.diff(this._rawClass);
                    t && this._applyIterableChanges(t)
                } else if (this._keyValueDiffer) {
                    var e = this._keyValueDiffer.diff(this._rawClass);
                    e && this._applyKeyValueChanges(e)
                }
            }, t.prototype._applyKeyValueChanges = function (t) {
                var e = this;
                t.forEachAddedItem(function (t) {
                    return e._toggleClass(t.key, t.currentValue)
                }), t.forEachChangedItem(function (t) {
                    return e._toggleClass(t.key, t.currentValue)
                }), t.forEachRemovedItem(function (t) {
                    t.previousValue && e._toggleClass(t.key, !1)
                })
            }, t.prototype._applyIterableChanges = function (t) {
                var e = this;
                t.forEachAddedItem(function (t) {
                    if ("string" != typeof t.item) throw new Error("NgClass can only toggle CSS classes expressed as strings, got " + xt(t.item));
                    e._toggleClass(t.item, !0)
                }), t.forEachRemovedItem(function (t) {
                    return e._toggleClass(t.item, !1)
                })
            }, t.prototype._applyClasses = function (t) {
                var e = this;
                t && (Array.isArray(t) || t instanceof Set ? t.forEach(function (t) {
                    return e._toggleClass(t, !0)
                }) : Object.keys(t).forEach(function (n) {
                    return e._toggleClass(n, !!t[n])
                }))
            }, t.prototype._removeClasses = function (t) {
                var e = this;
                t && (Array.isArray(t) || t instanceof Set ? t.forEach(function (t) {
                    return e._toggleClass(t, !1)
                }) : Object.keys(t).forEach(function (t) {
                    return e._toggleClass(t, !1)
                }))
            }, t.prototype._toggleClass = function (t, e) {
                var n = this;
                (t = t.trim()) && t.split(/\s+/g).forEach(function (t) {
                    e ? n._renderer.addClass(n._ngEl.nativeElement, t) : n._renderer.removeClass(n._ngEl.nativeElement, t)
                })
            }, t
        }(), Ts = function (t) {
            function e(e) {
                return t.call(this, e) || this
            }

            return i(e, t), Object.defineProperty(e.prototype, "klass", {
                set: function (t) {
                    this._delegate.setClass(t)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "ngClass", {
                set: function (t) {
                    this._delegate.setNgClass(t)
                }, enumerable: !0, configurable: !0
            }), e.prototype.ngDoCheck = function () {
                this._delegate.applyChanges()
            }, e
        }(function () {
            function t(t) {
                this._delegate = t
            }

            return t.prototype.getValue = function () {
                return this._delegate.getValue()
            }, t.ngDirectiveDef = void 0, t
        }()), Is = function () {
            function t(t, e, n, r) {
                this.$implicit = t, this.ngForOf = e, this.index = n, this.count = r
            }

            return Object.defineProperty(t.prototype, "first", {
                get: function () {
                    return 0 === this.index
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "last", {
                get: function () {
                    return this.index === this.count - 1
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "even", {
                get: function () {
                    return this.index % 2 == 0
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "odd", {
                get: function () {
                    return !this.even
                }, enumerable: !0, configurable: !0
            }), t
        }(), Rs = function () {
            function t(t, e, n) {
                this._viewContainer = t, this._template = e, this._differs = n, this._ngForOfDirty = !0, this._differ = null
            }

            return Object.defineProperty(t.prototype, "ngForOf", {
                set: function (t) {
                    this._ngForOf = t, this._ngForOfDirty = !0
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "ngForTrackBy", {
                get: function () {
                    return this._trackByFn
                }, set: function (t) {
                    he() && null != t && "function" != typeof t && console && console.warn && console.warn("trackBy must be a function, but received " + JSON.stringify(t) + ". See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information."), this._trackByFn = t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "ngForTemplate", {
                set: function (t) {
                    t && (this._template = t)
                }, enumerable: !0, configurable: !0
            }), t.prototype.ngDoCheck = function () {
                if (this._ngForOfDirty) {
                    this._ngForOfDirty = !1;
                    var t = this._ngForOf;
                    if (!this._differ && t) try {
                        this._differ = this._differs.find(t).create(this.ngForTrackBy)
                    } catch (r) {
                        throw new Error("Cannot find a differ supporting object '" + t + "' of type '" + ((e = t).name || typeof e) + "'. NgFor only supports binding to Iterables such as Arrays.")
                    }
                }
                var e;
                if (this._differ) {
                    var n = this._differ.diff(this._ngForOf);
                    n && this._applyChanges(n)
                }
            }, t.prototype._applyChanges = function (t) {
                var e = this, n = [];
                t.forEachOperation(function (t, r, i) {
                    if (null == t.previousIndex) {
                        var o = e._viewContainer.createEmbeddedView(e._template, new Is(null, e._ngForOf, -1, -1), i),
                            a = new Ns(t, o);
                        n.push(a)
                    } else null == i ? e._viewContainer.remove(r) : (o = e._viewContainer.get(r), e._viewContainer.move(o, i), a = new Ns(t, o), n.push(a))
                });
                for (var r = 0; r < n.length; r++) this._perViewChange(n[r].view, n[r].record);
                r = 0;
                for (var i = this._viewContainer.length; r < i; r++) {
                    var o = this._viewContainer.get(r);
                    o.context.index = r, o.context.count = i, o.context.ngForOf = this._ngForOf
                }
                t.forEachIdentityChange(function (t) {
                    e._viewContainer.get(t.currentIndex).context.$implicit = t.item
                })
            }, t.prototype._perViewChange = function (t, e) {
                t.context.$implicit = e.item
            }, t.ngTemplateContextGuard = function (t, e) {
                return !0
            }, t
        }(), Ns = function () {
            return function (t, e) {
                this.record = t, this.view = e
            }
        }(), Ds = function () {
            function t(t, e) {
                this._viewContainer = t, this._context = new Bs, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = e
            }

            return Object.defineProperty(t.prototype, "ngIf", {
                set: function (t) {
                    this._context.$implicit = this._context.ngIf = t, this._updateView()
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "ngIfThen", {
                set: function (t) {
                    Ms("ngIfThen", t), this._thenTemplateRef = t, this._thenViewRef = null, this._updateView()
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "ngIfElse", {
                set: function (t) {
                    Ms("ngIfElse", t), this._elseTemplateRef = t, this._elseViewRef = null, this._updateView()
                }, enumerable: !0, configurable: !0
            }), t.prototype._updateView = function () {
                this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
            }, t.ngTemplateGuard_ngIf = function (t, e) {
                return !0
            }, t
        }(), Bs = function () {
            return function () {
                this.$implicit = null, this.ngIf = null
            }
        }();

        function Ms(t, e) {
            if (e && !e.createEmbeddedView) throw new Error(t + " must be a TemplateRef, but received '" + xt(e) + "'.")
        }

        var Vs = function () {
            function t(t, e) {
                this._viewContainerRef = t, this._templateRef = e, this._created = !1
            }

            return t.prototype.create = function () {
                this._created = !0, this._viewContainerRef.createEmbeddedView(this._templateRef)
            }, t.prototype.destroy = function () {
                this._created = !1, this._viewContainerRef.clear()
            }, t.prototype.enforceState = function (t) {
                t && !this._created ? this.create() : !t && this._created && this.destroy()
            }, t
        }(), Fs = function () {
            function t() {
                this._defaultUsed = !1, this._caseCount = 0, this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1
            }

            return Object.defineProperty(t.prototype, "ngSwitch", {
                set: function (t) {
                    this._ngSwitch = t, 0 === this._caseCount && this._updateDefaultCases(!0)
                }, enumerable: !0, configurable: !0
            }), t.prototype._addCase = function () {
                return this._caseCount++
            }, t.prototype._addDefault = function (t) {
                this._defaultViews || (this._defaultViews = []), this._defaultViews.push(t)
            }, t.prototype._matchCase = function (t) {
                var e = t == this._ngSwitch;
                return this._lastCasesMatched = this._lastCasesMatched || e, this._lastCaseCheckIndex++, this._lastCaseCheckIndex === this._caseCount && (this._updateDefaultCases(!this._lastCasesMatched), this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1), e
            }, t.prototype._updateDefaultCases = function (t) {
                if (this._defaultViews && t !== this._defaultUsed) {
                    this._defaultUsed = t;
                    for (var e = 0; e < this._defaultViews.length; e++) this._defaultViews[e].enforceState(t)
                }
            }, t
        }(), js = function () {
            function t(t, e, n) {
                this.ngSwitch = n, n._addCase(), this._view = new Vs(t, e)
            }

            return t.prototype.ngDoCheck = function () {
                this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))
            }, t
        }(), Ls = function () {
            function t() {
            }

            return t.prototype.createSubscription = function (t, e) {
                return t.subscribe({
                    next: e, error: function (t) {
                        throw t
                    }
                })
            }, t.prototype.dispose = function (t) {
                t.unsubscribe()
            }, t.prototype.onDestroy = function (t) {
                t.unsubscribe()
            }, t
        }(), zs = new (function () {
            function t() {
            }

            return t.prototype.createSubscription = function (t, e) {
                return t.then(e, function (t) {
                    throw t
                })
            }, t.prototype.dispose = function (t) {
            }, t.prototype.onDestroy = function (t) {
            }, t
        }()), Us = new Ls, Hs = function () {
            function t(t) {
                this._ref = t, this._latestValue = null, this._latestReturnedValue = null, this._subscription = null, this._obj = null, this._strategy = null
            }

            var e;
            return e = t, t.prototype.ngOnDestroy = function () {
                this._subscription && this._dispose()
            }, t.prototype.transform = function (t) {
                return this._obj ? t !== this._obj ? (this._dispose(), this.transform(t)) : He(this._latestValue, this._latestReturnedValue) ? this._latestReturnedValue : (this._latestReturnedValue = this._latestValue, Ge.wrap(this._latestValue)) : (t && this._subscribe(t), this._latestReturnedValue = this._latestValue, this._latestValue)
            }, t.prototype._subscribe = function (t) {
                var e = this;
                this._obj = t, this._strategy = this._selectStrategy(t), this._subscription = this._strategy.createSubscription(t, function (n) {
                    return e._updateLatestValue(t, n)
                })
            }, t.prototype._selectStrategy = function (t) {
                if (je(t)) return zs;
                if (Le(t)) return Us;
                throw Error("InvalidPipeArgument: '" + t + "' for pipe '" + xt(e) + "'")
            }, t.prototype._dispose = function () {
                this._strategy.dispose(this._subscription), this._latestValue = null, this._latestReturnedValue = null, this._subscription = null, this._obj = null
            }, t.prototype._updateLatestValue = function (t, e) {
                t === this._obj && (this._latestValue = e, this._ref.markForCheck())
            }, t
        }(), qs = function () {
            return function () {
            }
        }(), Gs = new Mt("DocumentToken"), Ws = "browser", Ks = "server", Qs = function () {
            function t() {
            }

            return t.ngInjectableDef = Ct({
                providedIn: "root", factory: function () {
                    return new Zs(Dt(Gs), window, Dt(le))
                }
            }), t
        }(), Zs = function () {
            function t(t, e, n) {
                this.document = t, this.window = e, this.errorHandler = n, this.offset = function () {
                    return [0, 0]
                }
            }

            return t.prototype.setOffset = function (t) {
                this.offset = Array.isArray(t) ? function () {
                    return t
                } : t
            }, t.prototype.getScrollPosition = function () {
                return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0]
            }, t.prototype.scrollToPosition = function (t) {
                this.supportScrollRestoration() && this.window.scrollTo(t[0], t[1])
            }, t.prototype.scrollToAnchor = function (t) {
                if (this.supportScrollRestoration()) {
                    t = this.window.CSS && this.window.CSS.escape ? this.window.CSS.escape(t) : t.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, "\\$1");
                    try {
                        var e = this.document.querySelector("#" + t);
                        if (e) return void this.scrollToElement(e);
                        var n = this.document.querySelector("[name='" + t + "']");
                        if (n) return void this.scrollToElement(n)
                    } catch (r) {
                        this.errorHandler.handleError(r)
                    }
                }
            }, t.prototype.setHistoryScrollRestoration = function (t) {
                if (this.supportScrollRestoration()) {
                    var e = this.window.history;
                    e && e.scrollRestoration && (e.scrollRestoration = t)
                }
            }, t.prototype.scrollToElement = function (t) {
                var e = t.getBoundingClientRect(), n = e.left + this.window.pageXOffset,
                    r = e.top + this.window.pageYOffset,
                    i = this.offset();
                this.window.scrollTo(n - i[0], r - i[1])
            }, t.prototype.supportScrollRestoration = function () {
                try {
                    return !!this.window && !!this.window.scrollTo
                } catch (t) {
                    return !1
                }
            }, t
        }(), Ys = new P(function (t) {
            return t.complete()
        });

        function $s(t) {
            return t ? function (t) {
                return new P(function (e) {
                    return t.schedule(function () {
                        return e.complete()
                    })
                })
            }(t) : Ys
        }

        function Xs(t) {
            var e = new P(function (e) {
                e.next(t), e.complete()
            });
            return e._isScalar = !0, e.value = t, e
        }

        function Js() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var n = t[t.length - 1];
            switch (V(n) ? t.pop() : n = void 0, t.length) {
                case 0:
                    return $s(n);
                case 1:
                    return n ? J(t, n) : Xs(t[0]);
                default:
                    return J(t, n)
            }
        }

        var tl = function (t) {
            function e(e) {
                var n = t.call(this) || this;
                return n._value = e, n
            }

            return i(e, t), Object.defineProperty(e.prototype, "value", {
                get: function () {
                    return this.getValue()
                }, enumerable: !0, configurable: !0
            }), e.prototype._subscribe = function (e) {
                var n = t.prototype._subscribe.call(this, e);
                return n && !n.closed && e.next(this._value), n
            }, e.prototype.getValue = function () {
                if (this.hasError) throw this.thrownError;
                if (this.closed) throw new R;
                return this._value
            }, e.prototype.next = function (e) {
                t.prototype.next.call(this, this._value = e)
            }, e
        }(B);

        function el() {
            return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
        }

        el.prototype = Object.create(Error.prototype);
        var nl = el, rl = {}, il = function () {
            function t(t) {
                this.resultSelector = t
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new ol(t, this.resultSelector))
            }, t
        }(), ol = function (t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.resultSelector = n, r.active = 0, r.values = [], r.observables = [], r
            }

            return i(e, t), e.prototype._next = function (t) {
                this.values.push(rl), this.observables.push(t)
            }, e.prototype._complete = function () {
                var t = this.observables, e = t.length;
                if (0 === e) this.destination.complete(); else {
                    this.active = e, this.toRespond = e;
                    for (var n = 0; n < e; n++) {
                        var r = t[n];
                        this.add(Q(this, r, r, n))
                    }
                }
            }, e.prototype.notifyComplete = function (t) {
                0 == (this.active -= 1) && this.destination.complete()
            }, e.prototype.notifyNext = function (t, e, n, r, i) {
                var o = this.values, a = this.toRespond ? o[n] === rl ? --this.toRespond : this.toRespond : 0;
                o[n] = e, 0 === a && (this.resultSelector ? this._tryResultSelector(o) : this.destination.next(o.slice()))
            }, e.prototype._tryResultSelector = function (t) {
                var e;
                try {
                    e = this.resultSelector.apply(this, t)
                } catch (n) {
                    return void this.destination.error(n)
                }
                this.destination.next(e)
            }, e
        }(Z);

        function al(t) {
            return new P(function (e) {
                var n;
                try {
                    n = t()
                } catch (r) {
                    return void e.error(r)
                }
                return (n ? tt(n) : $s()).subscribe(e)
            })
        }

        function sl() {
            return ot(1)
        }

        function ll(t, e) {
            return function (n) {
                return n.lift(new ul(t, e))
            }
        }

        var ul = function () {
            function t(t, e) {
                this.predicate = t, this.thisArg = e
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new cl(t, this.predicate, this.thisArg))
            }, t
        }(), cl = function (t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.predicate = n, i.thisArg = r, i.count = 0, i
            }

            return i(e, t), e.prototype._next = function (t) {
                var e;
                try {
                    e = this.predicate.call(this.thisArg, t, this.count++)
                } catch (n) {
                    return void this.destination.error(n)
                }
                e && this.destination.next(t)
            }, e
        }(S);

        function hl() {
            return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
        }

        hl.prototype = Object.create(Error.prototype);
        var pl = hl;

        function fl(t) {
            return function (e) {
                return 0 === t ? $s() : e.lift(new dl(t))
            }
        }

        var dl = function () {
            function t(t) {
                if (this.total = t, this.total < 0) throw new pl
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new ml(t, this.total))
            }, t
        }(), ml = function (t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.total = n, r.ring = new Array, r.count = 0, r
            }

            return i(e, t), e.prototype._next = function (t) {
                var e = this.ring, n = this.total, r = this.count++;
                e.length < n ? e.push(t) : e[r % n] = t
            }, e.prototype._complete = function () {
                var t = this.destination, e = this.count;
                if (e > 0) for (var n = this.count >= this.total ? this.total : this.count, r = this.ring, i = 0; i < n; i++) {
                    var o = e++ % n;
                    t.next(r[o])
                }
                t.complete()
            }, e
        }(S);

        function yl(t, e, n) {
            return function (r) {
                return r.lift(new gl(t, e, n))
            }
        }

        var gl = function () {
            function t(t, e, n) {
                this.nextOrObserver = t, this.error = e, this.complete = n
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new vl(t, this.nextOrObserver, this.error, this.complete))
            }, t
        }(), vl = function (t) {
            function e(e, n, r, i) {
                var o = t.call(this, e) || this;
                return o._tapNext = A, o._tapError = A, o._tapComplete = A, o._tapError = r || A, o._tapComplete = i || A, f(n) ? (o._context = o, o._tapNext = n) : n && (o._context = n, o._tapNext = n.next || A, o._tapError = n.error || A, o._tapComplete = n.complete || A), o
            }

            return i(e, t), e.prototype._next = function (t) {
                try {
                    this._tapNext.call(this._context, t)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this.destination.next(t)
            }, e.prototype._error = function (t) {
                try {
                    this._tapError.call(this._context, t)
                } catch (t) {
                    return void this.destination.error(t)
                }
                this.destination.error(t)
            }, e.prototype._complete = function () {
                try {
                    this._tapComplete.call(this._context)
                } catch (t) {
                    return void this.destination.error(t)
                }
                return this.destination.complete()
            }, e
        }(S), _l = function (t) {
            return void 0 === t && (t = bl), yl({
                hasValue: !1, next: function () {
                    this.hasValue = !0
                }, complete: function () {
                    if (!this.hasValue) throw t()
                }
            })
        };

        function bl() {
            return new nl
        }

        function wl(t) {
            return void 0 === t && (t = null), function (e) {
                return e.lift(new Cl(t))
            }
        }

        var Cl = function () {
            function t(t) {
                this.defaultValue = t
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new Sl(t, this.defaultValue))
            }, t
        }(), Sl = function (t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.defaultValue = n, r.isEmpty = !0, r
            }

            return i(e, t), e.prototype._next = function (t) {
                this.isEmpty = !1, this.destination.next(t)
            }, e.prototype._complete = function () {
                this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
            }, e
        }(S);

        function El(t, e) {
            var n = arguments.length >= 2;
            return function (r) {
                return r.pipe(t ? ll(function (e, n) {
                    return t(e, n, r)
                }) : it, fl(1), n ? wl(e) : _l(function () {
                    return new nl
                }))
            }
        }

        function xl(t) {
            return function (e) {
                var n = new Al(t), r = e.lift(n);
                return n.caught = r
            }
        }

        var Al = function () {
            function t(t) {
                this.selector = t
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new kl(t, this.selector, this.caught))
            }, t
        }(), kl = function (t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.selector = n, i.caught = r, i
            }

            return i(e, t), e.prototype.error = function (e) {
                if (!this.isStopped) {
                    var n = void 0;
                    try {
                        n = this.selector(e, this.caught)
                    } catch (i) {
                        return void t.prototype.error.call(this, i)
                    }
                    this._unsubscribeAndRecycle();
                    var r = new F(this, void 0, void 0);
                    this.add(r), Q(this, n, void 0, void 0, r)
                }
            }, e
        }(Z);

        function Ol(t) {
            return function (e) {
                return 0 === t ? $s() : e.lift(new Pl(t))
            }
        }

        var Pl = function () {
            function t(t) {
                if (this.total = t, this.total < 0) throw new pl
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new Tl(t, this.total))
            }, t
        }(), Tl = function (t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.total = n, r.count = 0, r
            }

            return i(e, t), e.prototype._next = function (t) {
                var e = this.total, n = ++this.count;
                n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()))
            }, e
        }(S);

        function Il(t, e) {
            var n = arguments.length >= 2;
            return function (r) {
                return r.pipe(t ? ll(function (e, n) {
                    return t(e, n, r)
                }) : it, Ol(1), n ? wl(e) : _l(function () {
                    return new nl
                }))
            }
        }

        var Rl = function () {
            function t(t, e, n) {
                this.predicate = t, this.thisArg = e, this.source = n
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new Nl(t, this.predicate, this.thisArg, this.source))
            }, t
        }(), Nl = function (t) {
            function e(e, n, r, i) {
                var o = t.call(this, e) || this;
                return o.predicate = n, o.thisArg = r, o.source = i, o.index = 0, o.thisArg = r || o, o
            }

            return i(e, t), e.prototype.notifyComplete = function (t) {
                this.destination.next(t), this.destination.complete()
            }, e.prototype._next = function (t) {
                var e = !1;
                try {
                    e = this.predicate.call(this.thisArg, t, this.index++, this.source)
                } catch (n) {
                    return void this.destination.error(n)
                }
                e || this.notifyComplete(!1)
            }, e.prototype._complete = function () {
                this.notifyComplete(!0)
            }, e
        }(S);

        function Dl(t, e) {
            return "function" == typeof e ? function (n) {
                return n.pipe(Dl(function (n, r) {
                    return tt(t(n, r)).pipe(Y(function (t, i) {
                        return e(n, t, r, i)
                    }))
                }))
            } : function (e) {
                return e.lift(new Bl(t))
            }
        }

        var Bl = function () {
            function t(t) {
                this.project = t
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new Ml(t, this.project))
            }, t
        }(), Ml = function (t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.project = n, r.index = 0, r
            }

            return i(e, t), e.prototype._next = function (t) {
                var e, n = this.index++;
                try {
                    e = this.project(t, n)
                } catch (r) {
                    return void this.destination.error(r)
                }
                this._innerSub(e, t, n)
            }, e.prototype._innerSub = function (t, e, n) {
                var r = this.innerSubscription;
                r && r.unsubscribe();
                var i = new F(this, void 0, void 0);
                this.destination.add(i), this.innerSubscription = Q(this, t, e, n, i)
            }, e.prototype._complete = function () {
                var e = this.innerSubscription;
                e && !e.closed || t.prototype._complete.call(this), this.unsubscribe()
            }, e.prototype._unsubscribe = function () {
                this.innerSubscription = null
            }, e.prototype.notifyComplete = function (e) {
                this.destination.remove(e), this.innerSubscription = null, this.isStopped && t.prototype._complete.call(this)
            }, e.prototype.notifyNext = function (t, e, n, r, i) {
                this.destination.next(e)
            }, e
        }(Z);

        function Vl() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return function (e) {
                var n = t[t.length - 1];
                V(n) ? t.pop() : n = null;
                var r = t.length;
                return function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return sl()(Js.apply(void 0, t))
                }(1 !== r || n ? r > 0 ? J(t, n) : $s(n) : Xs(t[0]), e)
            }
        }

        function Fl(t, e) {
            var n = !1;
            return arguments.length >= 2 && (n = !0), function (r) {
                return r.lift(new jl(t, e, n))
            }
        }

        var jl = function () {
            function t(t, e, n) {
                void 0 === n && (n = !1), this.accumulator = t, this.seed = e, this.hasSeed = n
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new Ll(t, this.accumulator, this.seed, this.hasSeed))
            }, t
        }(), Ll = function (t) {
            function e(e, n, r, i) {
                var o = t.call(this, e) || this;
                return o.accumulator = n, o._seed = r, o.hasSeed = i, o.index = 0, o
            }

            return i(e, t), Object.defineProperty(e.prototype, "seed", {
                get: function () {
                    return this._seed
                }, set: function (t) {
                    this.hasSeed = !0, this._seed = t
                }, enumerable: !0, configurable: !0
            }), e.prototype._next = function (t) {
                if (this.hasSeed) return this._tryNext(t);
                this.seed = t, this.destination.next(t)
            }, e.prototype._tryNext = function (t) {
                var e, n = this.index++;
                try {
                    e = this.accumulator(this.seed, t, n)
                } catch (r) {
                    this.destination.error(r)
                }
                this.seed = e, this.destination.next(e)
            }, e
        }(S);

        function zl(t, e) {
            return et(t, e, 1)
        }

        var Ul = function () {
            function t(t) {
                this.callback = t
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new Hl(t, this.callback))
            }, t
        }(), Hl = function (t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.add(new y(n)), r
            }

            return i(e, t), e
        }(S), ql = null;

        function Gl() {
            return ql
        }

        var Wl, Kl = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._animationPrefix = null, e._transitionEnd = null;
                try {
                    var n = e.createElement("div", document);
                    if (null != e.getStyle(n, "animationName")) e._animationPrefix = ""; else for (var r = ["Webkit", "Moz", "O", "ms"], i = 0; i < r.length; i++) if (null != e.getStyle(n, r[i] + "AnimationName")) {
                        e._animationPrefix = "-" + r[i].toLowerCase() + "-";
                        break
                    }
                    var o = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    };
                    Object.keys(o).forEach(function (t) {
                        null != e.getStyle(n, t) && (e._transitionEnd = o[t])
                    })
                } catch (a) {
                    e._animationPrefix = null, e._transitionEnd = null
                }
                return e
            }

            return i(e, t), e.prototype.getDistributedNodes = function (t) {
                return t.getDistributedNodes()
            }, e.prototype.resolveAndSetHref = function (t, e, n) {
                t.href = null == n ? e : e + "/../" + n
            }, e.prototype.supportsDOMEvents = function () {
                return !0
            }, e.prototype.supportsNativeShadowDOM = function () {
                return "function" == typeof document.body.createShadowRoot
            }, e.prototype.getAnimationPrefix = function () {
                return this._animationPrefix ? this._animationPrefix : ""
            }, e.prototype.getTransitionEnd = function () {
                return this._transitionEnd ? this._transitionEnd : ""
            }, e.prototype.supportsAnimation = function () {
                return null != this._animationPrefix && null != this._transitionEnd
            }, e
        }(function () {
            function t() {
                this.resourceLoaderType = null
            }

            return Object.defineProperty(t.prototype, "attrToPropMap", {
                get: function () {
                    return this._attrToPropMap
                }, set: function (t) {
                    this._attrToPropMap = t
                }, enumerable: !0, configurable: !0
            }), t
        }()), Ql = {class: "className", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex"}, Zl = {
            "\b": "Backspace",
            "\t": "Tab",
            "\x7f": "Delete",
            "\x1b": "Escape",
            Del: "Delete",
            Esc: "Escape",
            Left: "ArrowLeft",
            Right: "ArrowRight",
            Up: "ArrowUp",
            Down: "ArrowDown",
            Menu: "ContextMenu",
            Scroll: "ScrollLock",
            Win: "OS"
        }, Yl = {
            A: "1",
            B: "2",
            C: "3",
            D: "4",
            E: "5",
            F: "6",
            G: "7",
            H: "8",
            I: "9",
            J: "*",
            K: "+",
            M: "-",
            N: ".",
            O: "/",
            "`": "0",
            "\x90": "NumLock"
        }, $l = function () {
            if (It.Node) return It.Node.prototype.contains || function (t) {
                return !!(16 & this.compareDocumentPosition(t))
            }
        }(), Xl = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.prototype.parse = function (t) {
                throw new Error("parse not implemented")
            }, e.makeCurrent = function () {
                var t;
                t = new e, ql || (ql = t)
            }, e.prototype.hasProperty = function (t, e) {
                return e in t
            }, e.prototype.setProperty = function (t, e, n) {
                t[e] = n
            }, e.prototype.getProperty = function (t, e) {
                return t[e]
            }, e.prototype.invoke = function (t, e, n) {
                var r;
                (r = t)[e].apply(r, c(n))
            }, e.prototype.logError = function (t) {
                window.console && (console.error ? console.error(t) : console.log(t))
            }, e.prototype.log = function (t) {
                window.console && window.console.log && window.console.log(t)
            }, e.prototype.logGroup = function (t) {
                window.console && window.console.group && window.console.group(t)
            }, e.prototype.logGroupEnd = function () {
                window.console && window.console.groupEnd && window.console.groupEnd()
            }, Object.defineProperty(e.prototype, "attrToPropMap", {
                get: function () {
                    return Ql
                }, enumerable: !0, configurable: !0
            }), e.prototype.contains = function (t, e) {
                return $l.call(t, e)
            }, e.prototype.querySelector = function (t, e) {
                return t.querySelector(e)
            }, e.prototype.querySelectorAll = function (t, e) {
                return t.querySelectorAll(e)
            }, e.prototype.on = function (t, e, n) {
                t.addEventListener(e, n, !1)
            }, e.prototype.onAndCancel = function (t, e, n) {
                return t.addEventListener(e, n, !1), function () {
                    t.removeEventListener(e, n, !1)
                }
            }, e.prototype.dispatchEvent = function (t, e) {
                t.dispatchEvent(e)
            }, e.prototype.createMouseEvent = function (t) {
                var e = this.getDefaultDocument().createEvent("MouseEvent");
                return e.initEvent(t, !0, !0), e
            }, e.prototype.createEvent = function (t) {
                var e = this.getDefaultDocument().createEvent("Event");
                return e.initEvent(t, !0, !0), e
            }, e.prototype.preventDefault = function (t) {
                t.preventDefault(), t.returnValue = !1
            }, e.prototype.isPrevented = function (t) {
                return t.defaultPrevented || null != t.returnValue && !t.returnValue
            }, e.prototype.getInnerHTML = function (t) {
                return t.innerHTML
            }, e.prototype.getTemplateContent = function (t) {
                return "content" in t && this.isTemplateElement(t) ? t.content : null
            }, e.prototype.getOuterHTML = function (t) {
                return t.outerHTML
            }, e.prototype.nodeName = function (t) {
                return t.nodeName
            }, e.prototype.nodeValue = function (t) {
                return t.nodeValue
            }, e.prototype.type = function (t) {
                return t.type
            }, e.prototype.content = function (t) {
                return this.hasProperty(t, "content") ? t.content : t
            }, e.prototype.firstChild = function (t) {
                return t.firstChild
            }, e.prototype.nextSibling = function (t) {
                return t.nextSibling
            }, e.prototype.parentElement = function (t) {
                return t.parentNode
            }, e.prototype.childNodes = function (t) {
                return t.childNodes
            }, e.prototype.childNodesAsList = function (t) {
                for (var e = t.childNodes, n = new Array(e.length), r = 0; r < e.length; r++) n[r] = e[r];
                return n
            }, e.prototype.clearNodes = function (t) {
                for (; t.firstChild;) t.removeChild(t.firstChild)
            }, e.prototype.appendChild = function (t, e) {
                t.appendChild(e)
            }, e.prototype.removeChild = function (t, e) {
                t.removeChild(e)
            }, e.prototype.replaceChild = function (t, e, n) {
                t.replaceChild(e, n)
            }, e.prototype.remove = function (t) {
                return t.parentNode && t.parentNode.removeChild(t), t
            }, e.prototype.insertBefore = function (t, e, n) {
                t.insertBefore(n, e)
            }, e.prototype.insertAllBefore = function (t, e, n) {
                n.forEach(function (n) {
                    return t.insertBefore(n, e)
                })
            }, e.prototype.insertAfter = function (t, e, n) {
                t.insertBefore(n, e.nextSibling)
            }, e.prototype.setInnerHTML = function (t, e) {
                t.innerHTML = e
            }, e.prototype.getText = function (t) {
                return t.textContent
            }, e.prototype.setText = function (t, e) {
                t.textContent = e
            }, e.prototype.getValue = function (t) {
                return t.value
            }, e.prototype.setValue = function (t, e) {
                t.value = e
            }, e.prototype.getChecked = function (t) {
                return t.checked
            }, e.prototype.setChecked = function (t, e) {
                t.checked = e
            }, e.prototype.createComment = function (t) {
                return this.getDefaultDocument().createComment(t)
            }, e.prototype.createTemplate = function (t) {
                var e = this.getDefaultDocument().createElement("template");
                return e.innerHTML = t, e
            }, e.prototype.createElement = function (t, e) {
                return (e = e || this.getDefaultDocument()).createElement(t)
            }, e.prototype.createElementNS = function (t, e, n) {
                return (n = n || this.getDefaultDocument()).createElementNS(t, e)
            }, e.prototype.createTextNode = function (t, e) {
                return (e = e || this.getDefaultDocument()).createTextNode(t)
            }, e.prototype.createScriptTag = function (t, e, n) {
                var r = (n = n || this.getDefaultDocument()).createElement("SCRIPT");
                return r.setAttribute(t, e), r
            }, e.prototype.createStyleElement = function (t, e) {
                var n = (e = e || this.getDefaultDocument()).createElement("style");
                return this.appendChild(n, this.createTextNode(t, e)), n
            }, e.prototype.createShadowRoot = function (t) {
                return t.createShadowRoot()
            }, e.prototype.getShadowRoot = function (t) {
                return t.shadowRoot
            }, e.prototype.getHost = function (t) {
                return t.host
            }, e.prototype.clone = function (t) {
                return t.cloneNode(!0)
            }, e.prototype.getElementsByClassName = function (t, e) {
                return t.getElementsByClassName(e)
            }, e.prototype.getElementsByTagName = function (t, e) {
                return t.getElementsByTagName(e)
            }, e.prototype.classList = function (t) {
                return Array.prototype.slice.call(t.classList, 0)
            }, e.prototype.addClass = function (t, e) {
                t.classList.add(e)
            }, e.prototype.removeClass = function (t, e) {
                t.classList.remove(e)
            }, e.prototype.hasClass = function (t, e) {
                return t.classList.contains(e)
            }, e.prototype.setStyle = function (t, e, n) {
                t.style[e] = n
            }, e.prototype.removeStyle = function (t, e) {
                t.style[e] = ""
            }, e.prototype.getStyle = function (t, e) {
                return t.style[e]
            }, e.prototype.hasStyle = function (t, e, n) {
                var r = this.getStyle(t, e) || "";
                return n ? r == n : r.length > 0
            }, e.prototype.tagName = function (t) {
                return t.tagName
            }, e.prototype.attributeMap = function (t) {
                for (var e = new Map, n = t.attributes, r = 0; r < n.length; r++) {
                    var i = n.item(r);
                    e.set(i.name, i.value)
                }
                return e
            }, e.prototype.hasAttribute = function (t, e) {
                return t.hasAttribute(e)
            }, e.prototype.hasAttributeNS = function (t, e, n) {
                return t.hasAttributeNS(e, n)
            }, e.prototype.getAttribute = function (t, e) {
                return t.getAttribute(e)
            }, e.prototype.getAttributeNS = function (t, e, n) {
                return t.getAttributeNS(e, n)
            }, e.prototype.setAttribute = function (t, e, n) {
                t.setAttribute(e, n)
            }, e.prototype.setAttributeNS = function (t, e, n, r) {
                t.setAttributeNS(e, n, r)
            }, e.prototype.removeAttribute = function (t, e) {
                t.removeAttribute(e)
            }, e.prototype.removeAttributeNS = function (t, e, n) {
                t.removeAttributeNS(e, n)
            }, e.prototype.templateAwareRoot = function (t) {
                return this.isTemplateElement(t) ? this.content(t) : t
            }, e.prototype.createHtmlDocument = function () {
                return document.implementation.createHTMLDocument("fakeTitle")
            }, e.prototype.getDefaultDocument = function () {
                return document
            }, e.prototype.getBoundingClientRect = function (t) {
                try {
                    return t.getBoundingClientRect()
                } catch (e) {
                    return {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0}
                }
            }, e.prototype.getTitle = function (t) {
                return t.title
            }, e.prototype.setTitle = function (t, e) {
                t.title = e || ""
            }, e.prototype.elementMatches = function (t, e) {
                return !!this.isElementNode(t) && (t.matches && t.matches(e) || t.msMatchesSelector && t.msMatchesSelector(e) || t.webkitMatchesSelector && t.webkitMatchesSelector(e))
            }, e.prototype.isTemplateElement = function (t) {
                return this.isElementNode(t) && "TEMPLATE" === t.nodeName
            }, e.prototype.isTextNode = function (t) {
                return t.nodeType === Node.TEXT_NODE
            }, e.prototype.isCommentNode = function (t) {
                return t.nodeType === Node.COMMENT_NODE
            }, e.prototype.isElementNode = function (t) {
                return t.nodeType === Node.ELEMENT_NODE
            }, e.prototype.hasShadowRoot = function (t) {
                return null != t.shadowRoot && t instanceof HTMLElement
            }, e.prototype.isShadowRoot = function (t) {
                return t instanceof DocumentFragment
            }, e.prototype.importIntoDoc = function (t) {
                return document.importNode(this.templateAwareRoot(t), !0)
            }, e.prototype.adoptNode = function (t) {
                return document.adoptNode(t)
            }, e.prototype.getHref = function (t) {
                return t.getAttribute("href")
            }, e.prototype.getEventKey = function (t) {
                var e = t.key;
                if (null == e) {
                    if (null == (e = t.keyIdentifier)) return "Unidentified";
                    e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)), 3 === t.location && Yl.hasOwnProperty(e) && (e = Yl[e]))
                }
                return Zl[e] || e
            }, e.prototype.getGlobalEventTarget = function (t, e) {
                return "window" === e ? window : "document" === e ? t : "body" === e ? t.body : null
            }, e.prototype.getHistory = function () {
                return window.history
            }, e.prototype.getLocation = function () {
                return window.location
            }, e.prototype.getBaseHref = function (t) {
                var e, n = Jl || (Jl = document.querySelector("base")) ? Jl.getAttribute("href") : null;
                return null == n ? null : (e = n, Wl || (Wl = document.createElement("a")), Wl.setAttribute("href", e), "/" === Wl.pathname.charAt(0) ? Wl.pathname : "/" + Wl.pathname)
            },e.prototype.resetBaseElement = function () {
                Jl = null
            },e.prototype.getUserAgent = function () {
                return window.navigator.userAgent
            },e.prototype.setData = function (t, e, n) {
                this.setAttribute(t, "data-" + e, n)
            },e.prototype.getData = function (t, e) {
                return this.getAttribute(t, "data-" + e)
            },e.prototype.getComputedStyle = function (t) {
                return getComputedStyle(t)
            },e.prototype.supportsWebAnimation = function () {
                return "function" == typeof Element.prototype.animate
            },e.prototype.performanceNow = function () {
                return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
            },e.prototype.supportsCookies = function () {
                return !0
            },e.prototype.getCookie = function (t) {
                return ks(document.cookie, t)
            },e.prototype.setCookie = function (t, e) {
                document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            },e
        }(Kl), Jl = null;

        function tu() {
            return !!window.history.pushState
        }

        var eu = function (t) {
            function e(e) {
                var n = t.call(this) || this;
                return n._doc = e, n._init(), n
            }

            var n;
            return i(e, t), e.prototype._init = function () {
                this.location = Gl().getLocation(), this._history = Gl().getHistory()
            }, e.prototype.getBaseHrefFromDOM = function () {
                return Gl().getBaseHref(this._doc)
            }, e.prototype.onPopState = function (t) {
                Gl().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", t, !1)
            }, e.prototype.onHashChange = function (t) {
                Gl().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", t, !1)
            }, Object.defineProperty(e.prototype, "href", {
                get: function () {
                    return this.location.href
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "protocol", {
                get: function () {
                    return this.location.protocol
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "hostname", {
                get: function () {
                    return this.location.hostname
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "port", {
                get: function () {
                    return this.location.port
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "pathname", {
                get: function () {
                    return this.location.pathname
                }, set: function (t) {
                    this.location.pathname = t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "search", {
                get: function () {
                    return this.location.search
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "hash", {
                get: function () {
                    return this.location.hash
                }, enumerable: !0, configurable: !0
            }), e.prototype.pushState = function (t, e, n) {
                tu() ? this._history.pushState(t, e, n) : this.location.hash = n
            }, e.prototype.replaceState = function (t, e, n) {
                tu() ? this._history.replaceState(t, e, n) : this.location.hash = n
            }, e.prototype.forward = function () {
                this._history.forward()
            }, e.prototype.back = function () {
                this._history.back()
            }, e.prototype.getState = function () {
                return this._history.state
            }, a([(n = yt(Gs), function (t, e) {
                n(t, e, 0)
            }), s("design:paramtypes", [Object])], e)
        }(ps), nu = new Mt("TRANSITION_ID"), ru = [{
            provide: Ri, useFactory: function (t, e, n) {
                return function () {
                    n.get(Ni).donePromise.then(function () {
                        var n = Gl();
                        Array.prototype.slice.apply(n.querySelectorAll(e, "style[ng-transition]")).filter(function (e) {
                            return n.getAttribute(e, "ng-transition") === t
                        }).forEach(function (t) {
                            return n.remove(t)
                        })
                    })
                }
            }, deps: [nu, Gs, zt], multi: !0
        }], iu = function () {
            function t() {
            }

            return t.init = function () {
                var e;
                e = new t, fo = e
            }, t.prototype.addToWindow = function (t) {
                It.getAngularTestability = function (e, n) {
                    void 0 === n && (n = !0);
                    var r = t.findTestabilityInTree(e, n);
                    if (null == r) throw new Error("Could not find testability for element.");
                    return r
                }, It.getAllAngularTestabilities = function () {
                    return t.getAllTestabilities()
                }, It.getAllAngularRootElements = function () {
                    return t.getAllRootElements()
                }, It.frameworkStabilizers || (It.frameworkStabilizers = []), It.frameworkStabilizers.push(function (t) {
                    var e = It.getAllAngularTestabilities(), n = e.length, r = !1, i = function (e) {
                        r = r || e, 0 == --n && t(r)
                    };
                    e.forEach(function (t) {
                        t.whenStable(i)
                    })
                })
            }, t.prototype.findTestabilityInTree = function (t, e, n) {
                if (null == e) return null;
                var r = t.getTestability(e);
                return null != r ? r : n ? Gl().isShadowRoot(e) ? this.findTestabilityInTree(t, Gl().getHost(e), !0) : this.findTestabilityInTree(t, Gl().parentElement(e), !0) : null
            }, t
        }();

        function ou(t, e) {
            "undefined" != typeof COMPILED && COMPILED || ((It.ng = It.ng || {})[t] = e)
        }

        var au = function () {
            return {ApplicationRef: wo, NgZone: ro}
        }();

        function su(t) {
            return Io(t)
        }

        var lu = new Mt("EventManagerPlugins"), uu = function () {
            function t(t, e) {
                var n = this;
                this._zone = e, this._eventNameToPlugin = new Map, t.forEach(function (t) {
                    return t.manager = n
                }), this._plugins = t.slice().reverse()
            }

            return t.prototype.addEventListener = function (t, e, n) {
                return this._findPluginFor(e).addEventListener(t, e, n)
            }, t.prototype.addGlobalEventListener = function (t, e, n) {
                return this._findPluginFor(e).addGlobalEventListener(t, e, n)
            }, t.prototype.getZone = function () {
                return this._zone
            }, t.prototype._findPluginFor = function (t) {
                var e = this._eventNameToPlugin.get(t);
                if (e) return e;
                for (var n = this._plugins, r = 0; r < n.length; r++) {
                    var i = n[r];
                    if (i.supports(t)) return this._eventNameToPlugin.set(t, i), i
                }
                throw new Error("No event manager plugin found for event " + t)
            }, t
        }(), cu = function () {
            function t(t) {
                this._doc = t
            }

            return t.prototype.addGlobalEventListener = function (t, e, n) {
                var r = Gl().getGlobalEventTarget(this._doc, t);
                if (!r) throw new Error("Unsupported event target " + r + " for event " + e);
                return this.addEventListener(r, e, n)
            }, t
        }(), hu = function () {
            function t() {
                this._stylesSet = new Set
            }

            return t.prototype.addStyles = function (t) {
                var e = this, n = new Set;
                t.forEach(function (t) {
                    e._stylesSet.has(t) || (e._stylesSet.add(t), n.add(t))
                }), this.onStylesAdded(n)
            }, t.prototype.onStylesAdded = function (t) {
            }, t.prototype.getAllStyles = function () {
                return Array.from(this._stylesSet)
            }, t
        }(), pu = function (t) {
            function e(e) {
                var n = t.call(this) || this;
                return n._doc = e, n._hostNodes = new Set, n._styleNodes = new Set, n._hostNodes.add(e.head), n
            }

            return i(e, t), e.prototype._addStylesToHost = function (t, e) {
                var n = this;
                t.forEach(function (t) {
                    var r = n._doc.createElement("style");
                    r.textContent = t, n._styleNodes.add(e.appendChild(r))
                })
            }, e.prototype.addHost = function (t) {
                this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t)
            }, e.prototype.removeHost = function (t) {
                this._hostNodes.delete(t)
            }, e.prototype.onStylesAdded = function (t) {
                var e = this;
                this._hostNodes.forEach(function (n) {
                    return e._addStylesToHost(t, n)
                })
            }, e.prototype.ngOnDestroy = function () {
                this._styleNodes.forEach(function (t) {
                    return Gl().remove(t)
                })
            }, e
        }(hu), fu = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: "http://www.w3.org/1999/xhtml",
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        }, du = /%COMP%/g, mu = "_nghost-%COMP%", yu = "_ngcontent-%COMP%";

        function gu(t, e, n) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                Array.isArray(i) ? gu(t, i, n) : (i = i.replace(du, t), n.push(i))
            }
            return n
        }

        function vu(t) {
            return function (e) {
                !1 === t(e) && (e.preventDefault(), e.returnValue = !1)
            }
        }

        var _u = function () {
            function t(t, e, n) {
                this.eventManager = t, this.sharedStylesHost = e, this.appId = n, this.rendererByCompId = new Map, this.defaultRenderer = new bu(t)
            }

            return t.prototype.createRenderer = function (t, e) {
                if (!t || !e) return this.defaultRenderer;
                switch (e.encapsulation) {
                    case re.Emulated:
                        var n = this.rendererByCompId.get(e.id);
                        return n || (n = new Su(this.eventManager, this.sharedStylesHost, e, this.appId), this.rendererByCompId.set(e.id, n)), n.applyToHost(t), n;
                    case re.Native:
                    case re.ShadowDom:
                        return new Eu(this.eventManager, this.sharedStylesHost, t, e);
                    default:
                        if (!this.rendererByCompId.has(e.id)) {
                            var r = gu(e.id, e.styles, []);
                            this.sharedStylesHost.addStyles(r), this.rendererByCompId.set(e.id, this.defaultRenderer)
                        }
                        return this.defaultRenderer
                }
            }, t.prototype.begin = function () {
            }, t.prototype.end = function () {
            }, t
        }(), bu = function () {
            function t(t) {
                this.eventManager = t, this.data = Object.create(null)
            }

            return t.prototype.destroy = function () {
            }, t.prototype.createElement = function (t, e) {
                return e ? document.createElementNS(fu[e] || e, t) : document.createElement(t)
            }, t.prototype.createComment = function (t) {
                return document.createComment(t)
            }, t.prototype.createText = function (t) {
                return document.createTextNode(t)
            }, t.prototype.appendChild = function (t, e) {
                t.appendChild(e)
            }, t.prototype.insertBefore = function (t, e, n) {
                t && t.insertBefore(e, n)
            }, t.prototype.removeChild = function (t, e) {
                t && t.removeChild(e)
            }, t.prototype.selectRootElement = function (t, e) {
                var n = "string" == typeof t ? document.querySelector(t) : t;
                if (!n) throw new Error('The selector "' + t + '" did not match any elements');
                return e || (n.textContent = ""), n
            }, t.prototype.parentNode = function (t) {
                return t.parentNode
            }, t.prototype.nextSibling = function (t) {
                return t.nextSibling
            }, t.prototype.setAttribute = function (t, e, n, r) {
                if (r) {
                    e = r + ":" + e;
                    var i = fu[r];
                    i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n)
                } else t.setAttribute(e, n)
            }, t.prototype.removeAttribute = function (t, e, n) {
                if (n) {
                    var r = fu[n];
                    r ? t.removeAttributeNS(r, e) : t.removeAttribute(n + ":" + e)
                } else t.removeAttribute(e)
            }, t.prototype.addClass = function (t, e) {
                t.classList.add(e)
            }, t.prototype.removeClass = function (t, e) {
                t.classList.remove(e)
            }, t.prototype.setStyle = function (t, e, n, r) {
                r & pn.DashCase ? t.style.setProperty(e, n, r & pn.Important ? "important" : "") : t.style[e] = n
            }, t.prototype.removeStyle = function (t, e, n) {
                n & pn.DashCase ? t.style.removeProperty(e) : t.style[e] = ""
            }, t.prototype.setProperty = function (t, e, n) {
                Cu(e, "property"), t[e] = n
            }, t.prototype.setValue = function (t, e) {
                t.nodeValue = e
            }, t.prototype.listen = function (t, e, n) {
                return Cu(e, "listener"), "string" == typeof t ? this.eventManager.addGlobalEventListener(t, e, vu(n)) : this.eventManager.addEventListener(t, e, vu(n))
            }, t
        }(), wu = function () {
            return "@".charCodeAt(0)
        }();

        function Cu(t, e) {
            if (t.charCodeAt(0) === wu) throw new Error("Found the synthetic " + e + " " + t + '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.')
        }

        var Su = function (t) {
                function e(e, n, r, i) {
                    var o = t.call(this, e) || this;
                    o.component = r;
                    var a = gu(i + "-" + r.id, r.styles, []);
                    return n.addStyles(a), o.contentAttr = yu.replace(du, i + "-" + r.id), o.hostAttr = mu.replace(du, i + "-" + r.id), o
                }

                return i(e, t), e.prototype.applyToHost = function (e) {
                    t.prototype.setAttribute.call(this, e, this.hostAttr, "")
                }, e.prototype.createElement = function (e, n) {
                    var r = t.prototype.createElement.call(this, e, n);
                    return t.prototype.setAttribute.call(this, r, this.contentAttr, ""), r
                }, e
            }(bu), Eu = function (t) {
                function e(e, n, r, i) {
                    var o = t.call(this, e) || this;
                    o.sharedStylesHost = n, o.hostEl = r, o.component = i, o.shadowRoot = i.encapsulation === re.ShadowDom ? r.attachShadow({mode: "open"}) : r.createShadowRoot(), o.sharedStylesHost.addHost(o.shadowRoot);
                    for (var a = gu(i.id, i.styles, []), s = 0; s < a.length; s++) {
                        var l = document.createElement("style");
                        l.textContent = a[s], o.shadowRoot.appendChild(l)
                    }
                    return o
                }

                return i(e, t), e.prototype.nodeOrShadowRoot = function (t) {
                    return t === this.hostEl ? this.shadowRoot : t
                }, e.prototype.destroy = function () {
                    this.sharedStylesHost.removeHost(this.shadowRoot)
                }, e.prototype.appendChild = function (e, n) {
                    return t.prototype.appendChild.call(this, this.nodeOrShadowRoot(e), n)
                }, e.prototype.insertBefore = function (e, n, r) {
                    return t.prototype.insertBefore.call(this, this.nodeOrShadowRoot(e), n, r)
                }, e.prototype.removeChild = function (e, n) {
                    return t.prototype.removeChild.call(this, this.nodeOrShadowRoot(e), n)
                }, e.prototype.parentNode = function (e) {
                    return this.nodeOrShadowRoot(t.prototype.parentNode.call(this, this.nodeOrShadowRoot(e)))
                }, e
            }(bu), xu = function () {
                return "undefined" != typeof Zone && Zone.__symbol__ || function (t) {
                    return "__zone_symbol__" + t
                }
            }(), Au = xu("addEventListener"), ku = xu("removeEventListener"), Ou = {},
            Pu = "__zone_symbol__propagationStopped",
            Tu = function () {
                var t = "undefined" != typeof Zone && Zone[xu("BLACK_LISTED_EVENTS")];
                if (t) {
                    var e = {};
                    return t.forEach(function (t) {
                        e[t] = t
                    }), e
                }
            }(), Iu = function (t) {
                return !!Tu && Tu.hasOwnProperty(t)
            }, Ru = function (t) {
                var e = Ou[t.type];
                if (e) {
                    var n = this[e];
                    if (n) {
                        var r = [t];
                        if (1 === n.length) return (a = n[0]).zone !== Zone.current ? a.zone.run(a.handler, this, r) : a.handler.apply(this, r);
                        for (var i = n.slice(), o = 0; o < i.length && !0 !== t[Pu]; o++) {
                            var a;
                            (a = i[o]).zone !== Zone.current ? a.zone.run(a.handler, this, r) : a.handler.apply(this, r)
                        }
                    }
                }
            }, Nu = function (t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.ngZone = n, r && function (t) {
                        return t === Ks
                    }(r) || i.patchEvent(), i
                }

                return i(e, t), e.prototype.patchEvent = function () {
                    if ("undefined" != typeof Event && Event && Event.prototype && !Event.prototype.__zone_symbol__stopImmediatePropagation) {
                        var t = Event.prototype.__zone_symbol__stopImmediatePropagation = Event.prototype.stopImmediatePropagation;
                        Event.prototype.stopImmediatePropagation = function () {
                            this && (this[Pu] = !0), t && t.apply(this, arguments)
                        }
                    }
                }, e.prototype.supports = function (t) {
                    return !0
                }, e.prototype.addEventListener = function (t, e, n) {
                    var r = this, i = n;
                    if (!t[Au] || ro.isInAngularZone() && !Iu(e)) t.addEventListener(e, i, !1); else {
                        var o = Ou[e];
                        o || (o = Ou[e] = xu("ANGULAR" + e + "FALSE"));
                        var a = t[o], s = a && a.length > 0;
                        a || (a = t[o] = []);
                        var l = Iu(e) ? Zone.root : Zone.current;
                        if (0 === a.length) a.push({zone: l, handler: i}); else {
                            for (var u = !1, c = 0; c < a.length; c++) if (a[c].handler === i) {
                                u = !0;
                                break
                            }
                            u || a.push({zone: l, handler: i})
                        }
                        s || t[Au](e, Ru, !1)
                    }
                    return function () {
                        return r.removeEventListener(t, e, i)
                    }
                }, e.prototype.removeEventListener = function (t, e, n) {
                    var r = t[ku];
                    if (!r) return t.removeEventListener.apply(t, [e, n, !1]);
                    var i = Ou[e], o = i && t[i];
                    if (!o) return t.removeEventListener.apply(t, [e, n, !1]);
                    for (var a = !1, s = 0; s < o.length; s++) if (o[s].handler === n) {
                        a = !0, o.splice(s, 1);
                        break
                    }
                    a ? 0 === o.length && r.apply(t, [e, Ru, !1]) : t.removeEventListener.apply(t, [e, n, !1])
                }, e
            }(cu), Du = {
                pan: !0,
                panstart: !0,
                panmove: !0,
                panend: !0,
                pancancel: !0,
                panleft: !0,
                panright: !0,
                panup: !0,
                pandown: !0,
                pinch: !0,
                pinchstart: !0,
                pinchmove: !0,
                pinchend: !0,
                pinchcancel: !0,
                pinchin: !0,
                pinchout: !0,
                press: !0,
                pressup: !0,
                rotate: !0,
                rotatestart: !0,
                rotatemove: !0,
                rotateend: !0,
                rotatecancel: !0,
                swipe: !0,
                swipeleft: !0,
                swiperight: !0,
                swipeup: !0,
                swipedown: !0,
                tap: !0
            }, Bu = new Mt("HammerGestureConfig"), Mu = new Mt("HammerLoader"), Vu = function () {
                function t() {
                    this.events = [], this.overrides = {}
                }

                return t.prototype.buildHammer = function (t) {
                    var e = new Hammer(t, this.options);
                    for (var n in e.get("pinch").set({enable: !0}), e.get("rotate").set({enable: !0}), this.overrides) e.get(n).set(this.overrides[n]);
                    return e
                }, t
            }(), Fu = function (t) {
                function e(e, n, r, i) {
                    var o = t.call(this, e) || this;
                    return o._config = n, o.console = r, o.loader = i, o
                }

                return i(e, t), e.prototype.supports = function (t) {
                    return !(!Du.hasOwnProperty(t.toLowerCase()) && !this.isCustomEvent(t) || !window.Hammer && !this.loader && (this.console.warn('The "' + t + '" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.'), 1))
                }, e.prototype.addEventListener = function (t, e, n) {
                    var r = this, i = this.manager.getZone();
                    if (e = e.toLowerCase(), !window.Hammer && this.loader) {
                        var o = !1, a = function () {
                            o = !0
                        };
                        return this.loader().then(function () {
                            if (!window.Hammer) return r.console.warn("The custom HAMMER_LOADER completed, but Hammer.JS is not present."), void (a = function () {
                            });
                            o || (a = r.addEventListener(t, e, n))
                        }).catch(function () {
                            r.console.warn('The "' + e + '" event cannot be bound because the custom Hammer.JS loader failed.'), a = function () {
                            }
                        }), function () {
                            a()
                        }
                    }
                    return i.runOutsideAngular(function () {
                        var o = r._config.buildHammer(t), a = function (t) {
                            i.runGuarded(function () {
                                n(t)
                            })
                        };
                        return o.on(e, a), function () {
                            o.off(e, a), "function" == typeof o.destroy && o.destroy()
                        }
                    })
                }, e.prototype.isCustomEvent = function (t) {
                    return this._config.events.indexOf(t) > -1
                }, e
            }(cu), ju = ["alt", "control", "meta", "shift"], Lu = {
                alt: function (t) {
                    return t.altKey
                }, control: function (t) {
                    return t.ctrlKey
                }, meta: function (t) {
                    return t.metaKey
                }, shift: function (t) {
                    return t.shiftKey
                }
            }, zu = function (t) {
                function e(e) {
                    return t.call(this, e) || this
                }

                var n;
                return i(e, t), n = e, e.prototype.supports = function (t) {
                    return null != n.parseEventName(t)
                }, e.prototype.addEventListener = function (t, e, r) {
                    var i = n.parseEventName(e), o = n.eventCallback(i.fullKey, r, this.manager.getZone());
                    return this.manager.getZone().runOutsideAngular(function () {
                        return Gl().onAndCancel(t, i.domEventName, o)
                    })
                }, e.parseEventName = function (t) {
                    var e = t.toLowerCase().split("."), r = e.shift();
                    if (0 === e.length || "keydown" !== r && "keyup" !== r) return null;
                    var i = n._normalizeKey(e.pop()), o = "";
                    if (ju.forEach(function (t) {
                        var n = e.indexOf(t);
                        n > -1 && (e.splice(n, 1), o += t + ".")
                    }), o += i, 0 != e.length || 0 === i.length) return null;
                    var a = {};
                    return a.domEventName = r, a.fullKey = o, a
                }, e.getEventFullKey = function (t) {
                    var e = "", n = Gl().getEventKey(t);
                    return " " === (n = n.toLowerCase()) ? n = "space" : "." === n && (n = "dot"), ju.forEach(function (r) {
                        r != n && (0, Lu[r])(t) && (e += r + ".")
                    }), e += n
                }, e.eventCallback = function (t, e, r) {
                    return function (i) {
                        n.getEventFullKey(i) === t && r.runGuarded(function () {
                            return e(i)
                        })
                    }
                }, e._normalizeKey = function (t) {
                    switch (t) {
                        case"esc":
                            return "escape";
                        default:
                            return t
                    }
                }, e
            }(cu), Uu = function () {
                return function () {
                }
            }(), Hu = function (t) {
                function e(e) {
                    var n = t.call(this) || this;
                    return n._doc = e, n
                }

                return i(e, t), e.prototype.sanitize = function (t, e) {
                    if (null == e) return null;
                    switch (t) {
                        case Ne.NONE:
                            return e;
                        case Ne.HTML:
                            return e instanceof Gu ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "HTML"), function (t, e) {
                                var n = null;
                                try {
                                    ve = ve || new pe(t);
                                    var r = e ? String(e) : "";
                                    n = ve.getInertBodyElement(r);
                                    var i = 5, o = r;
                                    do {
                                        if (0 === i) throw new Error("Failed to sanitize html because the input is unstable");
                                        i--, r = o, o = n.innerHTML, n = ve.getInertBodyElement(r)
                                    } while (r !== o);
                                    var a = new Oe, s = a.sanitizeChildren(Re(n) || n);
                                    return he() && a.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"), s
                                } finally {
                                    if (n) for (var l = Re(n) || n; l.firstChild;) l.removeChild(l.firstChild)
                                }
                            }(this._doc, String(e)));
                        case Ne.STYLE:
                            return e instanceof Wu ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "Style"), function (t) {
                                if (!(t = String(t).trim())) return "";
                                var e = t.match(Me);
                                return e && me(e[1]) === e[1] || t.match(Be) && function (t) {
                                    for (var e = !0, n = !0, r = 0; r < t.length; r++) {
                                        var i = t.charAt(r);
                                        "'" === i && n ? e = !e : '"' === i && e && (n = !n)
                                    }
                                    return e && n
                                }(t) ? t : (he() && console.warn("WARNING: sanitizing unsafe style value " + t + " (see http://g.co/ng/security#xss)."), "unsafe")
                            }(e));
                        case Ne.SCRIPT:
                            if (e instanceof Ku) return e.changingThisBreaksApplicationSecurity;
                            throw this.checkNotSafeValue(e, "Script"), new Error("unsafe value used in a script context");
                        case Ne.URL:
                            return e instanceof Zu || e instanceof Qu ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "URL"), me(String(e)));
                        case Ne.RESOURCE_URL:
                            if (e instanceof Zu) return e.changingThisBreaksApplicationSecurity;
                            throw this.checkNotSafeValue(e, "ResourceURL"), new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)");
                        default:
                            throw new Error("Unexpected SecurityContext " + t + " (see http://g.co/ng/security#xss)")
                    }
                }, e.prototype.checkNotSafeValue = function (t, e) {
                    if (t instanceof qu) throw new Error("Required a safe " + e + ", got a " + t.getTypeName() + " (see http://g.co/ng/security#xss)")
                }, e.prototype.bypassSecurityTrustHtml = function (t) {
                    return new Gu(t)
                }, e.prototype.bypassSecurityTrustStyle = function (t) {
                    return new Wu(t)
                }, e.prototype.bypassSecurityTrustScript = function (t) {
                    return new Ku(t)
                }, e.prototype.bypassSecurityTrustUrl = function (t) {
                    return new Qu(t)
                }, e.prototype.bypassSecurityTrustResourceUrl = function (t) {
                    return new Zu(t)
                }, e
            }(Uu), qu = function () {
                function t(t) {
                    this.changingThisBreaksApplicationSecurity = t
                }

                return t.prototype.toString = function () {
                    return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity + " (see http://g.co/ng/security#xss)"
                }, t
            }(), Gu = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return i(e, t), e.prototype.getTypeName = function () {
                    return "HTML"
                }, e
            }(qu), Wu = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return i(e, t), e.prototype.getTypeName = function () {
                    return "Style"
                }, e
            }(qu), Ku = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return i(e, t), e.prototype.getTypeName = function () {
                    return "Script"
                }, e
            }(qu), Qu = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return i(e, t), e.prototype.getTypeName = function () {
                    return "URL"
                }, e
            }(qu), Zu = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return i(e, t), e.prototype.getTypeName = function () {
                    return "ResourceURL"
                }, e
            }(qu), Yu = go(No, "browser", [{provide: Fi, useValue: Ws}, {
                provide: Vi, useValue: function () {
                    Xl.makeCurrent(), iu.init()
                }, multi: !0
            }, {provide: ps, useClass: eu, deps: [Gs]}, {
                provide: Gs, useFactory: function () {
                    return document
                }, deps: []
            }]);

        function $u() {
            return new le
        }

        var Xu = function () {
            function t(t) {
                if (t) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
            }

            var e;
            return e = t, t.withServerTransition = function (t) {
                return {ngModule: e, providers: [{provide: Di, useValue: t.appId}, {provide: nu, useExisting: Di}, ru]}
            }, t
        }();
        "undefined" != typeof window && window;
        var Ju = function () {
            return function (t, e) {
                this.id = t, this.url = e
            }
        }(), tc = function (t) {
            function e(e, n, r, i) {
                void 0 === r && (r = "imperative"), void 0 === i && (i = null);
                var o = t.call(this, e, n) || this;
                return o.navigationTrigger = r, o.restoredState = i, o
            }

            return i(e, t), e.prototype.toString = function () {
                return "NavigationStart(id: " + this.id + ", url: '" + this.url + "')"
            }, e
        }(Ju), ec = function (t) {
            function e(e, n, r) {
                var i = t.call(this, e, n) || this;
                return i.urlAfterRedirects = r, i
            }

            return i(e, t), e.prototype.toString = function () {
                return "NavigationEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "')"
            }, e
        }(Ju), nc = function (t) {
            function e(e, n, r) {
                var i = t.call(this, e, n) || this;
                return i.reason = r, i
            }

            return i(e, t), e.prototype.toString = function () {
                return "NavigationCancel(id: " + this.id + ", url: '" + this.url + "')"
            }, e
        }(Ju), rc = function (t) {
            function e(e, n, r) {
                var i = t.call(this, e, n) || this;
                return i.error = r, i
            }

            return i(e, t), e.prototype.toString = function () {
                return "NavigationError(id: " + this.id + ", url: '" + this.url + "', error: " + this.error + ")"
            }, e
        }(Ju), ic = function (t) {
            function e(e, n, r, i) {
                var o = t.call(this, e, n) || this;
                return o.urlAfterRedirects = r, o.state = i, o
            }

            return i(e, t), e.prototype.toString = function () {
                return "RoutesRecognized(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
            }, e
        }(Ju), oc = function (t) {
            function e(e, n, r, i) {
                var o = t.call(this, e, n) || this;
                return o.urlAfterRedirects = r, o.state = i, o
            }

            return i(e, t), e.prototype.toString = function () {
                return "GuardsCheckStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
            }, e
        }(Ju), ac = function (t) {
            function e(e, n, r, i, o) {
                var a = t.call(this, e, n) || this;
                return a.urlAfterRedirects = r, a.state = i, a.shouldActivate = o, a
            }

            return i(e, t), e.prototype.toString = function () {
                return "GuardsCheckEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ", shouldActivate: " + this.shouldActivate + ")"
            }, e
        }(Ju), sc = function (t) {
            function e(e, n, r, i) {
                var o = t.call(this, e, n) || this;
                return o.urlAfterRedirects = r, o.state = i, o
            }

            return i(e, t), e.prototype.toString = function () {
                return "ResolveStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
            }, e
        }(Ju), lc = function (t) {
            function e(e, n, r, i) {
                var o = t.call(this, e, n) || this;
                return o.urlAfterRedirects = r, o.state = i, o
            }

            return i(e, t), e.prototype.toString = function () {
                return "ResolveEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
            }, e
        }(Ju), uc = function () {
            function t(t) {
                this.route = t
            }

            return t.prototype.toString = function () {
                return "RouteConfigLoadStart(path: " + this.route.path + ")"
            }, t
        }(), cc = function () {
            function t(t) {
                this.route = t
            }

            return t.prototype.toString = function () {
                return "RouteConfigLoadEnd(path: " + this.route.path + ")"
            }, t
        }(), hc = function () {
            function t(t) {
                this.snapshot = t
            }

            return t.prototype.toString = function () {
                return "ChildActivationStart(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
            }, t
        }(), pc = function () {
            function t(t) {
                this.snapshot = t
            }

            return t.prototype.toString = function () {
                return "ChildActivationEnd(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
            }, t
        }(), fc = function () {
            function t(t) {
                this.snapshot = t
            }

            return t.prototype.toString = function () {
                return "ActivationStart(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
            }, t
        }(), dc = function () {
            function t(t) {
                this.snapshot = t
            }

            return t.prototype.toString = function () {
                return "ActivationEnd(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
            }, t
        }(), mc = function () {
            function t(t, e, n) {
                this.routerEvent = t, this.position = e, this.anchor = n
            }

            return t.prototype.toString = function () {
                return "Scroll(anchor: '" + this.anchor + "', position: '" + (this.position ? this.position[0] + ", " + this.position[1] : null) + "')"
            }, t
        }(), yc = function () {
            return function () {
            }
        }(), gc = "primary", vc = function () {
            function t(t) {
                this.params = t || {}
            }

            return t.prototype.has = function (t) {
                return this.params.hasOwnProperty(t)
            }, t.prototype.get = function (t) {
                if (this.has(t)) {
                    var e = this.params[t];
                    return Array.isArray(e) ? e[0] : e
                }
                return null
            }, t.prototype.getAll = function (t) {
                if (this.has(t)) {
                    var e = this.params[t];
                    return Array.isArray(e) ? e : [e]
                }
                return []
            }, Object.defineProperty(t.prototype, "keys", {
                get: function () {
                    return Object.keys(this.params)
                }, enumerable: !0, configurable: !0
            }), t
        }();

        function _c(t) {
            return new vc(t)
        }

        var bc = "ngNavigationCancelingError";

        function wc(t) {
            var e = Error("NavigationCancelingError: " + t);
            return e[bc] = !0, e
        }

        function Cc(t, e, n) {
            var r = n.path.split("/");
            if (r.length > t.length) return null;
            if ("full" === n.pathMatch && (e.hasChildren() || r.length < t.length)) return null;
            for (var i = {}, o = 0; o < r.length; o++) {
                var a = r[o], s = t[o];
                if (a.startsWith(":")) i[a.substring(1)] = s; else if (a !== s.path) return null
            }
            return {consumed: t.slice(0, r.length), posParams: i}
        }

        var Sc = function () {
            return function (t, e) {
                this.routes = t, this.module = e
            }
        }();

        function Ec(t, e) {
            void 0 === e && (e = "");
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                xc(r, Ac(e, r))
            }
        }

        function xc(t, e) {
            if (!t) throw new Error("\n      Invalid configuration of route '" + e + "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    ");
            if (Array.isArray(t)) throw new Error("Invalid configuration of route '" + e + "': Array cannot be specified");
            if (!t.component && !t.children && !t.loadChildren && t.outlet && t.outlet !== gc) throw new Error("Invalid configuration of route '" + e + "': a componentless route without children or loadChildren cannot have a named outlet set");
            if (t.redirectTo && t.children) throw new Error("Invalid configuration of route '" + e + "': redirectTo and children cannot be used together");
            if (t.redirectTo && t.loadChildren) throw new Error("Invalid configuration of route '" + e + "': redirectTo and loadChildren cannot be used together");
            if (t.children && t.loadChildren) throw new Error("Invalid configuration of route '" + e + "': children and loadChildren cannot be used together");
            if (t.redirectTo && t.component) throw new Error("Invalid configuration of route '" + e + "': redirectTo and component cannot be used together");
            if (t.path && t.matcher) throw new Error("Invalid configuration of route '" + e + "': path and matcher cannot be used together");
            if (void 0 === t.redirectTo && !t.component && !t.children && !t.loadChildren) throw new Error("Invalid configuration of route '" + e + "'. One of the following must be provided: component, redirectTo, children or loadChildren");
            if (void 0 === t.path && void 0 === t.matcher) throw new Error("Invalid configuration of route '" + e + "': routes must have either a path or a matcher specified");
            if ("string" == typeof t.path && "/" === t.path.charAt(0)) throw new Error("Invalid configuration of route '" + e + "': path cannot start with a slash");
            if ("" === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch) throw new Error("Invalid configuration of route '{path: \"" + e + '", redirectTo: "' + t.redirectTo + "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.");
            if (void 0 !== t.pathMatch && "full" !== t.pathMatch && "prefix" !== t.pathMatch) throw new Error("Invalid configuration of route '" + e + "': pathMatch can only be set to 'prefix' or 'full'");
            t.children && Ec(t.children, e)
        }

        function Ac(t, e) {
            return e ? t || e.path ? t && !e.path ? t + "/" : !t && e.path ? e.path : t + "/" + e.path : "" : t
        }

        function kc(t) {
            var e = t.children && t.children.map(kc), n = e ? o({}, t, {children: e}) : o({}, t);
            return !n.component && (e || n.loadChildren) && n.outlet && n.outlet !== gc && (n.component = yc), n
        }

        function Oc(t, e) {
            var n, r = Object.keys(t), i = Object.keys(e);
            if (!r || !i || r.length != i.length) return !1;
            for (var o = 0; o < r.length; o++) if (t[n = r[o]] !== e[n]) return !1;
            return !0
        }

        function Pc(t) {
            return Array.prototype.concat.apply([], t)
        }

        function Tc(t) {
            return t.length > 0 ? t[t.length - 1] : null
        }

        function Ic(t, e) {
            for (var n in t) t.hasOwnProperty(n) && e(t[n], n)
        }

        function Rc(t) {
            return Le(t) ? t : je(t) ? tt(Promise.resolve(t)) : Js(t)
        }

        function Nc(t, e, n) {
            return n ? function (t, e) {
                return Oc(t, e)
            }(t.queryParams, e.queryParams) && function t(e, n) {
                if (!Vc(e.segments, n.segments)) return !1;
                if (e.numberOfChildren !== n.numberOfChildren) return !1;
                for (var r in n.children) {
                    if (!e.children[r]) return !1;
                    if (!t(e.children[r], n.children[r])) return !1
                }
                return !0
            }(t.root, e.root) : function (t, e) {
                return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every(function (n) {
                    return e[n] === t[n]
                })
            }(t.queryParams, e.queryParams) && function t(e, n) {
                return function e(n, r, i) {
                    if (n.segments.length > i.length) return !!Vc(a = n.segments.slice(0, i.length), i) && !r.hasChildren();
                    if (n.segments.length === i.length) {
                        if (!Vc(n.segments, i)) return !1;
                        for (var o in r.children) {
                            if (!n.children[o]) return !1;
                            if (!t(n.children[o], r.children[o])) return !1
                        }
                        return !0
                    }
                    var a = i.slice(0, n.segments.length), s = i.slice(n.segments.length);
                    return !!Vc(n.segments, a) && !!n.children[gc] && e(n.children[gc], r, s)
                }(e, n, n.segments)
            }(t.root, e.root)
        }

        var Dc = function () {
            function t(t, e, n) {
                this.root = t, this.queryParams = e, this.fragment = n
            }

            return Object.defineProperty(t.prototype, "queryParamMap", {
                get: function () {
                    return this._queryParamMap || (this._queryParamMap = _c(this.queryParams)), this._queryParamMap
                }, enumerable: !0, configurable: !0
            }), t.prototype.toString = function () {
                return zc.serialize(this)
            }, t
        }(), Bc = function () {
            function t(t, e) {
                var n = this;
                this.segments = t, this.children = e, this.parent = null, Ic(e, function (t, e) {
                    return t.parent = n
                })
            }

            return t.prototype.hasChildren = function () {
                return this.numberOfChildren > 0
            }, Object.defineProperty(t.prototype, "numberOfChildren", {
                get: function () {
                    return Object.keys(this.children).length
                }, enumerable: !0, configurable: !0
            }), t.prototype.toString = function () {
                return Uc(this)
            }, t
        }(), Mc = function () {
            function t(t, e) {
                this.path = t, this.parameters = e
            }

            return Object.defineProperty(t.prototype, "parameterMap", {
                get: function () {
                    return this._parameterMap || (this._parameterMap = _c(this.parameters)), this._parameterMap
                }, enumerable: !0, configurable: !0
            }), t.prototype.toString = function () {
                return Qc(this)
            }, t
        }();

        function Vc(t, e) {
            return t.length === e.length && t.every(function (t, n) {
                return t.path === e[n].path
            })
        }

        function Fc(t, e) {
            var n = [];
            return Ic(t.children, function (t, r) {
                r === gc && (n = n.concat(e(t, r)))
            }), Ic(t.children, function (t, r) {
                r !== gc && (n = n.concat(e(t, r)))
            }), n
        }

        var jc = function () {
            return function () {
            }
        }(), Lc = function () {
            function t() {
            }

            return t.prototype.parse = function (t) {
                var e = new Jc(t);
                return new Dc(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment())
            }, t.prototype.serialize = function (t) {
                var e, n;
                return "/" + function t(e, n) {
                    if (!e.hasChildren()) return Uc(e);
                    if (n) {
                        var r = e.children[gc] ? t(e.children[gc], !1) : "", i = [];
                        return Ic(e.children, function (e, n) {
                            n !== gc && i.push(n + ":" + t(e, !1))
                        }), i.length > 0 ? r + "(" + i.join("//") + ")" : r
                    }
                    var o = Fc(e, function (n, r) {
                        return r === gc ? [t(e.children[gc], !1)] : [r + ":" + t(n, !1)]
                    });
                    return Uc(e) + "/(" + o.join("//") + ")"
                }(t.root, !0) + (e = t.queryParams, (n = Object.keys(e).map(function (t) {
                    var n = e[t];
                    return Array.isArray(n) ? n.map(function (e) {
                        return qc(t) + "=" + qc(e)
                    }).join("&") : qc(t) + "=" + qc(n)
                })).length ? "?" + n.join("&") : "") + ("string" == typeof t.fragment ? "#" + encodeURI(t.fragment) : "")
            }, t
        }(), zc = new Lc;

        function Uc(t) {
            return t.segments.map(function (t) {
                return Qc(t)
            }).join("/")
        }

        function Hc(t) {
            return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
        }

        function qc(t) {
            return Hc(t).replace(/%3B/gi, ";")
        }

        function Gc(t) {
            return Hc(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
        }

        function Wc(t) {
            return decodeURIComponent(t)
        }

        function Kc(t) {
            return Wc(t.replace(/\+/g, "%20"))
        }

        function Qc(t) {
            return "" + Gc(t.path) + (e = t.parameters, Object.keys(e).map(function (t) {
                return ";" + Gc(t) + "=" + Gc(e[t])
            }).join(""));
            var e
        }

        var Zc = /^[^\/()?;=#]+/;

        function Yc(t) {
            var e = t.match(Zc);
            return e ? e[0] : ""
        }

        var $c = /^[^=?&#]+/, Xc = /^[^?&#]+/, Jc = function () {
            function t(t) {
                this.url = t, this.remaining = t
            }

            return t.prototype.parseRootSegment = function () {
                return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new Bc([], {}) : new Bc([], this.parseChildren())
            }, t.prototype.parseQueryParams = function () {
                var t = {};
                if (this.consumeOptional("?")) do {
                    this.parseQueryParam(t)
                } while (this.consumeOptional("&"));
                return t
            }, t.prototype.parseFragment = function () {
                return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
            }, t.prototype.parseChildren = function () {
                if ("" === this.remaining) return {};
                this.consumeOptional("/");
                var t = [];
                for (this.peekStartsWith("(") || t.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), t.push(this.parseSegment());
                var e = {};
                this.peekStartsWith("/(") && (this.capture("/"), e = this.parseParens(!0));
                var n = {};
                return this.peekStartsWith("(") && (n = this.parseParens(!1)), (t.length > 0 || Object.keys(e).length > 0) && (n[gc] = new Bc(t, e)), n
            }, t.prototype.parseSegment = function () {
                var t = Yc(this.remaining);
                if ("" === t && this.peekStartsWith(";")) throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
                return this.capture(t), new Mc(Wc(t), this.parseMatrixParams())
            }, t.prototype.parseMatrixParams = function () {
                for (var t = {}; this.consumeOptional(";");) this.parseParam(t);
                return t
            }, t.prototype.parseParam = function (t) {
                var e = Yc(this.remaining);
                if (e) {
                    this.capture(e);
                    var n = "";
                    if (this.consumeOptional("=")) {
                        var r = Yc(this.remaining);
                        r && this.capture(n = r)
                    }
                    t[Wc(e)] = Wc(n)
                }
            }, t.prototype.parseQueryParam = function (t) {
                var e, n = (e = this.remaining.match($c)) ? e[0] : "";
                if (n) {
                    this.capture(n);
                    var r = "";
                    if (this.consumeOptional("=")) {
                        var i = function (t) {
                            var e = t.match(Xc);
                            return e ? e[0] : ""
                        }(this.remaining);
                        i && this.capture(r = i)
                    }
                    var o = Kc(n), a = Kc(r);
                    if (t.hasOwnProperty(o)) {
                        var s = t[o];
                        Array.isArray(s) || (t[o] = s = [s]), s.push(a)
                    } else t[o] = a
                }
            }, t.prototype.parseParens = function (t) {
                var e = {};
                for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
                    var n = Yc(this.remaining), r = this.remaining[n.length];
                    if ("/" !== r && ")" !== r && ";" !== r) throw new Error("Cannot parse url '" + this.url + "'");
                    var i = void 0;
                    n.indexOf(":") > -1 ? (i = n.substr(0, n.indexOf(":")), this.capture(i), this.capture(":")) : t && (i = gc);
                    var o = this.parseChildren();
                    e[i] = 1 === Object.keys(o).length ? o[gc] : new Bc([], o), this.consumeOptional("//")
                }
                return e
            }, t.prototype.peekStartsWith = function (t) {
                return this.remaining.startsWith(t)
            }, t.prototype.consumeOptional = function (t) {
                return !!this.peekStartsWith(t) && (this.remaining = this.remaining.substring(t.length), !0)
            }, t.prototype.capture = function (t) {
                if (!this.consumeOptional(t)) throw new Error('Expected "' + t + '".')
            }, t
        }(), th = function () {
            function t(t) {
                this._root = t
            }

            return Object.defineProperty(t.prototype, "root", {
                get: function () {
                    return this._root.value
                }, enumerable: !0, configurable: !0
            }), t.prototype.parent = function (t) {
                var e = this.pathFromRoot(t);
                return e.length > 1 ? e[e.length - 2] : null
            }, t.prototype.children = function (t) {
                var e = eh(t, this._root);
                return e ? e.children.map(function (t) {
                    return t.value
                }) : []
            }, t.prototype.firstChild = function (t) {
                var e = eh(t, this._root);
                return e && e.children.length > 0 ? e.children[0].value : null
            }, t.prototype.siblings = function (t) {
                var e = nh(t, this._root);
                return e.length < 2 ? [] : e[e.length - 2].children.map(function (t) {
                    return t.value
                }).filter(function (e) {
                    return e !== t
                })
            }, t.prototype.pathFromRoot = function (t) {
                return nh(t, this._root).map(function (t) {
                    return t.value
                })
            }, t
        }();

        function eh(t, e) {
            var n, r;
            if (t === e.value) return e;
            try {
                for (var i = l(e.children), o = i.next(); !o.done; o = i.next()) {
                    var a = eh(t, o.value);
                    if (a) return a
                }
            } catch (s) {
                n = {error: s}
            } finally {
                try {
                    o && !o.done && (r = i.return) && r.call(i)
                } finally {
                    if (n) throw n.error
                }
            }
            return null
        }

        function nh(t, e) {
            var n, r;
            if (t === e.value) return [e];
            try {
                for (var i = l(e.children), o = i.next(); !o.done; o = i.next()) {
                    var a = nh(t, o.value);
                    if (a.length) return a.unshift(e), a
                }
            } catch (s) {
                n = {error: s}
            } finally {
                try {
                    o && !o.done && (r = i.return) && r.call(i)
                } finally {
                    if (n) throw n.error
                }
            }
            return []
        }

        var rh = function () {
            function t(t, e) {
                this.value = t, this.children = e
            }

            return t.prototype.toString = function () {
                return "TreeNode(" + this.value + ")"
            }, t
        }();

        function ih(t) {
            var e = {};
            return t && t.children.forEach(function (t) {
                return e[t.value.outlet] = t
            }), e
        }

        var oh = function (t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.snapshot = n, hh(r, e), r
            }

            return i(e, t), e.prototype.toString = function () {
                return this.snapshot.toString()
            }, e
        }(th);

        function ah(t, e) {
            var n = function (t, e) {
                    var n = new uh([], {}, {}, "", {}, gc, e, null, t.root, -1, {});
                    return new ch("", new rh(n, []))
                }(t, e), r = new tl([new Mc("", {})]), i = new tl({}), o = new tl({}), a = new tl({}), s = new tl(""),
                l = new sh(r, i, a, s, o, gc, e, n.root);
            return l.snapshot = n.root, new oh(new rh(l, []), n)
        }

        var sh = function () {
            function t(t, e, n, r, i, o, a, s) {
                this.url = t, this.params = e, this.queryParams = n, this.fragment = r, this.data = i, this.outlet = o, this.component = a, this._futureSnapshot = s
            }

            return Object.defineProperty(t.prototype, "routeConfig", {
                get: function () {
                    return this._futureSnapshot.routeConfig
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "root", {
                get: function () {
                    return this._routerState.root
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "parent", {
                get: function () {
                    return this._routerState.parent(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "firstChild", {
                get: function () {
                    return this._routerState.firstChild(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "children", {
                get: function () {
                    return this._routerState.children(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "pathFromRoot", {
                get: function () {
                    return this._routerState.pathFromRoot(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "paramMap", {
                get: function () {
                    return this._paramMap || (this._paramMap = this.params.pipe(Y(function (t) {
                        return _c(t)
                    }))), this._paramMap
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "queryParamMap", {
                get: function () {
                    return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(Y(function (t) {
                        return _c(t)
                    }))), this._queryParamMap
                }, enumerable: !0, configurable: !0
            }), t.prototype.toString = function () {
                return this.snapshot ? this.snapshot.toString() : "Future(" + this._futureSnapshot + ")"
            }, t
        }();

        function lh(t, e) {
            void 0 === e && (e = "emptyOnly");
            var n = t.pathFromRoot, r = 0;
            if ("always" !== e) for (r = n.length - 1; r >= 1;) {
                var i = n[r], a = n[r - 1];
                if (i.routeConfig && "" === i.routeConfig.path) r--; else {
                    if (a.component) break;
                    r--
                }
            }
            return function (t) {
                return t.reduce(function (t, e) {
                    return {
                        params: o({}, t.params, e.params),
                        data: o({}, t.data, e.data),
                        resolve: o({}, t.resolve, e._resolvedData)
                    }
                }, {params: {}, data: {}, resolve: {}})
            }(n.slice(r))
        }

        var uh = function () {
            function t(t, e, n, r, i, o, a, s, l, u, c) {
                this.url = t, this.params = e, this.queryParams = n, this.fragment = r, this.data = i, this.outlet = o, this.component = a, this.routeConfig = s, this._urlSegment = l, this._lastPathIndex = u, this._resolve = c
            }

            return Object.defineProperty(t.prototype, "root", {
                get: function () {
                    return this._routerState.root
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "parent", {
                get: function () {
                    return this._routerState.parent(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "firstChild", {
                get: function () {
                    return this._routerState.firstChild(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "children", {
                get: function () {
                    return this._routerState.children(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "pathFromRoot", {
                get: function () {
                    return this._routerState.pathFromRoot(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "paramMap", {
                get: function () {
                    return this._paramMap || (this._paramMap = _c(this.params)), this._paramMap
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "queryParamMap", {
                get: function () {
                    return this._queryParamMap || (this._queryParamMap = _c(this.queryParams)), this._queryParamMap
                }, enumerable: !0, configurable: !0
            }), t.prototype.toString = function () {
                return "Route(url:'" + this.url.map(function (t) {
                    return t.toString()
                }).join("/") + "', path:'" + (this.routeConfig ? this.routeConfig.path : "") + "')"
            }, t
        }(), ch = function (t) {
            function e(e, n) {
                var r = t.call(this, n) || this;
                return r.url = e, hh(r, n), r
            }

            return i(e, t), e.prototype.toString = function () {
                return ph(this._root)
            }, e
        }(th);

        function hh(t, e) {
            e.value._routerState = t, e.children.forEach(function (e) {
                return hh(t, e)
            })
        }

        function ph(t) {
            var e = t.children.length > 0 ? " { " + t.children.map(ph).join(", ") + " } " : "";
            return "" + t.value + e
        }

        function fh(t) {
            if (t.snapshot) {
                var e = t.snapshot, n = t._futureSnapshot;
                t.snapshot = n, Oc(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams), e.fragment !== n.fragment && t.fragment.next(n.fragment), Oc(e.params, n.params) || t.params.next(n.params), function (t, e) {
                    if (t.length !== e.length) return !1;
                    for (var n = 0; n < t.length; ++n) if (!Oc(t[n], e[n])) return !1;
                    return !0
                }(e.url, n.url) || t.url.next(n.url), Oc(e.data, n.data) || t.data.next(n.data)
            } else t.snapshot = t._futureSnapshot, t.data.next(t._futureSnapshot.data)
        }

        function dh(t, e) {
            var n, r;
            return Oc(t.params, e.params) && Vc(n = t.url, r = e.url) && n.every(function (t, e) {
                return Oc(t.parameters, r[e].parameters)
            }) && !(!t.parent != !e.parent) && (!t.parent || dh(t.parent, e.parent))
        }

        function mh(t) {
            return "object" == typeof t && null != t && !t.outlets && !t.segmentPath
        }

        function yh(t, e, n, r, i) {
            var o = {};
            return r && Ic(r, function (t, e) {
                o[e] = Array.isArray(t) ? t.map(function (t) {
                    return "" + t
                }) : "" + t
            }), new Dc(n.root === t ? e : function t(e, n, r) {
                var i = {};
                return Ic(e.children, function (e, o) {
                    i[o] = e === n ? r : t(e, n, r)
                }), new Bc(e.segments, i)
            }(n.root, t, e), o, i)
        }

        var gh = function () {
            function t(t, e, n) {
                if (this.isAbsolute = t, this.numberOfDoubleDots = e, this.commands = n, t && n.length > 0 && mh(n[0])) throw new Error("Root segment cannot have matrix parameters");
                var r = n.find(function (t) {
                    return "object" == typeof t && null != t && t.outlets
                });
                if (r && r !== Tc(n)) throw new Error("{outlets:{}} has to be the last command")
            }

            return t.prototype.toRoot = function () {
                return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
            }, t
        }(), vh = function () {
            return function (t, e, n) {
                this.segmentGroup = t, this.processChildren = e, this.index = n
            }
        }();

        function _h(t) {
            return "object" == typeof t && null != t && t.outlets ? t.outlets[gc] : "" + t
        }

        function bh(t, e, n) {
            if (t || (t = new Bc([], {})), 0 === t.segments.length && t.hasChildren()) return wh(t, e, n);
            var r = function (t, e, n) {
                for (var r = 0, i = e, o = {match: !1, pathIndex: 0, commandIndex: 0}; i < t.segments.length;) {
                    if (r >= n.length) return o;
                    var a = t.segments[i], s = _h(n[r]), l = r < n.length - 1 ? n[r + 1] : null;
                    if (i > 0 && void 0 === s) break;
                    if (s && l && "object" == typeof l && void 0 === l.outlets) {
                        if (!xh(s, l, a)) return o;
                        r += 2
                    } else {
                        if (!xh(s, {}, a)) return o;
                        r++
                    }
                    i++
                }
                return {match: !0, pathIndex: i, commandIndex: r}
            }(t, e, n), i = n.slice(r.commandIndex);
            if (r.match && r.pathIndex < t.segments.length) {
                var o = new Bc(t.segments.slice(0, r.pathIndex), {});
                return o.children[gc] = new Bc(t.segments.slice(r.pathIndex), t.children), wh(o, 0, i)
            }
            return r.match && 0 === i.length ? new Bc(t.segments, {}) : r.match && !t.hasChildren() ? Ch(t, e, n) : r.match ? wh(t, 0, i) : Ch(t, e, n)
        }

        function wh(t, e, n) {
            if (0 === n.length) return new Bc(t.segments, {});
            var r = function (t) {
                var e, n;
                return "object" != typeof t[0] ? ((e = {})[gc] = t, e) : void 0 === t[0].outlets ? ((n = {})[gc] = t, n) : t[0].outlets
            }(n), i = {};
            return Ic(r, function (n, r) {
                null !== n && (i[r] = bh(t.children[r], e, n))
            }), Ic(t.children, function (t, e) {
                void 0 === r[e] && (i[e] = t)
            }), new Bc(t.segments, i)
        }

        function Ch(t, e, n) {
            for (var r = t.segments.slice(0, e), i = 0; i < n.length;) {
                if ("object" == typeof n[i] && void 0 !== n[i].outlets) {
                    var o = Sh(n[i].outlets);
                    return new Bc(r, o)
                }
                if (0 === i && mh(n[0])) r.push(new Mc(t.segments[e].path, n[0])), i++; else {
                    var a = _h(n[i]), s = i < n.length - 1 ? n[i + 1] : null;
                    a && s && mh(s) ? (r.push(new Mc(a, Eh(s))), i += 2) : (r.push(new Mc(a, {})), i++)
                }
            }
            return new Bc(r, {})
        }

        function Sh(t) {
            var e = {};
            return Ic(t, function (t, n) {
                null !== t && (e[n] = Ch(new Bc([], {}), 0, t))
            }), e
        }

        function Eh(t) {
            var e = {};
            return Ic(t, function (t, n) {
                return e[n] = "" + t
            }), e
        }

        function xh(t, e, n) {
            return t == n.path && Oc(e, n.parameters)
        }

        var Ah = function () {
            function t(t, e, n, r) {
                this.routeReuseStrategy = t, this.futureState = e, this.currState = n, this.forwardEvent = r
            }

            return t.prototype.activate = function (t) {
                var e = this.futureState._root, n = this.currState ? this.currState._root : null;
                this.deactivateChildRoutes(e, n, t), fh(this.futureState.root), this.activateChildRoutes(e, n, t)
            }, t.prototype.deactivateChildRoutes = function (t, e, n) {
                var r = this, i = ih(e);
                t.children.forEach(function (t) {
                    var e = t.value.outlet;
                    r.deactivateRoutes(t, i[e], n), delete i[e]
                }), Ic(i, function (t, e) {
                    r.deactivateRouteAndItsChildren(t, n)
                })
            }, t.prototype.deactivateRoutes = function (t, e, n) {
                var r = t.value, i = e ? e.value : null;
                if (r === i) if (r.component) {
                    var o = n.getContext(r.outlet);
                    o && this.deactivateChildRoutes(t, e, o.children)
                } else this.deactivateChildRoutes(t, e, n); else i && this.deactivateRouteAndItsChildren(e, n)
            }, t.prototype.deactivateRouteAndItsChildren = function (t, e) {
                this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, e) : this.deactivateRouteAndOutlet(t, e)
            }, t.prototype.detachAndStoreRouteSubtree = function (t, e) {
                var n = e.getContext(t.value.outlet);
                if (n && n.outlet) {
                    var r = n.outlet.detach(), i = n.children.onOutletDeactivated();
                    this.routeReuseStrategy.store(t.value.snapshot, {componentRef: r, route: t, contexts: i})
                }
            }, t.prototype.deactivateRouteAndOutlet = function (t, e) {
                var n = this, r = e.getContext(t.value.outlet);
                if (r) {
                    var i = ih(t), o = t.value.component ? r.children : e;
                    Ic(i, function (t, e) {
                        return n.deactivateRouteAndItsChildren(t, o)
                    }), r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated())
                }
            }, t.prototype.activateChildRoutes = function (t, e, n) {
                var r = this, i = ih(e);
                t.children.forEach(function (t) {
                    r.activateRoutes(t, i[t.value.outlet], n), r.forwardEvent(new dc(t.value.snapshot))
                }), t.children.length && this.forwardEvent(new pc(t.value.snapshot))
            }, t.prototype.activateRoutes = function (t, e, n) {
                var r = t.value, i = e ? e.value : null;
                if (fh(r), r === i) if (r.component) {
                    var o = n.getOrCreateContext(r.outlet);
                    this.activateChildRoutes(t, e, o.children)
                } else this.activateChildRoutes(t, e, n); else if (r.component) if (o = n.getOrCreateContext(r.outlet), this.routeReuseStrategy.shouldAttach(r.snapshot)) {
                    var a = this.routeReuseStrategy.retrieve(r.snapshot);
                    this.routeReuseStrategy.store(r.snapshot, null), o.children.onOutletReAttached(a.contexts), o.attachRef = a.componentRef, o.route = a.route.value, o.outlet && o.outlet.attach(a.componentRef, a.route.value), kh(a.route)
                } else {
                    var s = function (t) {
                        for (var e = r.snapshot.parent; e; e = e.parent) {
                            var n = e.routeConfig;
                            if (n && n._loadedConfig) return n._loadedConfig;
                            if (n && n.component) return null
                        }
                        return null
                    }(), l = s ? s.module.componentFactoryResolver : null;
                    o.attachRef = null, o.route = r, o.resolver = l, o.outlet && o.outlet.activateWith(r, l), this.activateChildRoutes(t, null, o.children)
                } else this.activateChildRoutes(t, null, n)
            }, t
        }();

        function kh(t) {
            fh(t.value), t.children.forEach(kh)
        }

        function Oh(t) {
            return "function" == typeof t
        }

        function Ph(t) {
            return t instanceof Dc
        }

        var Th = function () {
            return function (t) {
                this.segmentGroup = t || null
            }
        }(), Ih = function () {
            return function (t) {
                this.urlTree = t
            }
        }();

        function Rh(t) {
            return new P(function (e) {
                return e.error(new Th(t))
            })
        }

        function Nh(t) {
            return new P(function (e) {
                return e.error(new Ih(t))
            })
        }

        function Dh(t) {
            return new P(function (e) {
                return e.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + t + "'"))
            })
        }

        var Bh = function () {
            function t(t, e, n, r, i) {
                this.configLoader = e, this.urlSerializer = n, this.urlTree = r, this.config = i, this.allowRedirects = !0, this.ngModule = t.get(on)
            }

            return t.prototype.apply = function () {
                var t = this;
                return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, gc).pipe(Y(function (e) {
                    return t.createUrlTree(e, t.urlTree.queryParams, t.urlTree.fragment)
                })).pipe(xl(function (e) {
                    if (e instanceof Ih) return t.allowRedirects = !1, t.match(e.urlTree);
                    if (e instanceof Th) throw t.noMatchError(e);
                    throw e
                }))
            }, t.prototype.match = function (t) {
                var e = this;
                return this.expandSegmentGroup(this.ngModule, this.config, t.root, gc).pipe(Y(function (n) {
                    return e.createUrlTree(n, t.queryParams, t.fragment)
                })).pipe(xl(function (t) {
                    if (t instanceof Th) throw e.noMatchError(t);
                    throw t
                }))
            }, t.prototype.noMatchError = function (t) {
                return new Error("Cannot match any routes. URL Segment: '" + t.segmentGroup + "'")
            }, t.prototype.createUrlTree = function (t, e, n) {
                var r, i = t.segments.length > 0 ? new Bc([], ((r = {})[gc] = t, r)) : t;
                return new Dc(i, e, n)
            }, t.prototype.expandSegmentGroup = function (t, e, n, r) {
                return 0 === n.segments.length && n.hasChildren() ? this.expandChildren(t, e, n).pipe(Y(function (t) {
                    return new Bc([], t)
                })) : this.expandSegment(t, n, e, n.segments, r, !0)
            }, t.prototype.expandChildren = function (t, e, n) {
                var r = this;
                return function (n, i) {
                    if (0 === Object.keys(n).length) return Js({});
                    var o = [], a = [], s = {};
                    return Ic(n, function (n, i) {
                        var l, u, c = (l = i, u = n, r.expandSegmentGroup(t, e, u, l)).pipe(Y(function (t) {
                            return s[i] = t
                        }));
                        i === gc ? o.push(c) : a.push(c)
                    }), Js.apply(null, o.concat(a)).pipe(sl(), El(), Y(function () {
                        return s
                    }))
                }(n.children)
            }, t.prototype.expandSegment = function (t, e, n, r, i, o) {
                var a = this;
                return Js.apply(void 0, c(n)).pipe(Y(function (s) {
                    return a.expandSegmentAgainstRoute(t, e, n, s, r, i, o).pipe(xl(function (t) {
                        if (t instanceof Th) return Js(null);
                        throw t
                    }))
                }), sl(), Il(function (t) {
                    return !!t
                }), xl(function (t, n) {
                    if (t instanceof nl || "EmptyError" === t.name) {
                        if (a.noLeftoversInUrl(e, r, i)) return Js(new Bc([], {}));
                        throw new Th(e)
                    }
                    throw t
                }))
            }, t.prototype.noLeftoversInUrl = function (t, e, n) {
                return 0 === e.length && !t.children[n]
            }, t.prototype.expandSegmentAgainstRoute = function (t, e, n, r, i, o, a) {
                return jh(r) !== o ? Rh(e) : void 0 === r.redirectTo ? this.matchSegmentAgainstRoute(t, e, r, i) : a && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, i, o) : Rh(e)
            }, t.prototype.expandSegmentAgainstRouteUsingRedirect = function (t, e, n, r, i, o) {
                return "**" === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, o) : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, i, o)
            }, t.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function (t, e, n, r) {
                var i = this, o = this.applyRedirectCommands([], n.redirectTo, {});
                return n.redirectTo.startsWith("/") ? Nh(o) : this.lineralizeSegments(n, o).pipe(et(function (n) {
                    var o = new Bc(n, {});
                    return i.expandSegment(t, o, e, n, r, !1)
                }))
            }, t.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function (t, e, n, r, i, o) {
                var a = this, s = Mh(e, r, i), l = s.consumedSegments, u = s.lastChild, c = s.positionalParamSegments;
                if (!s.matched) return Rh(e);
                var h = this.applyRedirectCommands(l, r.redirectTo, c);
                return r.redirectTo.startsWith("/") ? Nh(h) : this.lineralizeSegments(r, h).pipe(et(function (r) {
                    return a.expandSegment(t, e, n, r.concat(i.slice(u)), o, !1)
                }))
            }, t.prototype.matchSegmentAgainstRoute = function (t, e, n, r) {
                var i = this;
                if ("**" === n.path) return n.loadChildren ? this.configLoader.load(t.injector, n).pipe(Y(function (t) {
                    return n._loadedConfig = t, new Bc(r, {})
                })) : Js(new Bc(r, {}));
                var a = Mh(e, n, r), s = a.consumedSegments, u = a.lastChild;
                if (!a.matched) return Rh(e);
                var c = r.slice(u);
                return this.getChildConfig(t, n, r).pipe(et(function (t) {
                    var n = t.module, r = t.routes, a = function (t, e, n, r) {
                        return n.length > 0 && function (t, e, n) {
                            return r.some(function (n) {
                                return Fh(t, e, n) && jh(n) !== gc
                            })
                        }(t, n) ? {
                            segmentGroup: Vh(new Bc(e, function (t, e) {
                                var n, r, i = {};
                                i[gc] = e;
                                try {
                                    for (var o = l(t), a = o.next(); !a.done; a = o.next()) {
                                        var s = a.value;
                                        "" === s.path && jh(s) !== gc && (i[jh(s)] = new Bc([], {}))
                                    }
                                } catch (u) {
                                    n = {error: u}
                                } finally {
                                    try {
                                        a && !a.done && (r = o.return) && r.call(o)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                                return i
                            }(r, new Bc(n, t.children)))), slicedSegments: []
                        } : 0 === n.length && function (t, e, n) {
                            return r.some(function (n) {
                                return Fh(t, e, n)
                            })
                        }(t, n) ? {
                            segmentGroup: Vh(new Bc(t.segments, function (t, e, n, r) {
                                var i, a, s = {};
                                try {
                                    for (var u = l(n), c = u.next(); !c.done; c = u.next()) {
                                        var h = c.value;
                                        Fh(t, e, h) && !r[jh(h)] && (s[jh(h)] = new Bc([], {}))
                                    }
                                } catch (p) {
                                    i = {error: p}
                                } finally {
                                    try {
                                        c && !c.done && (a = u.return) && a.call(u)
                                    } finally {
                                        if (i) throw i.error
                                    }
                                }
                                return o({}, r, s)
                            }(t, n, r, t.children))), slicedSegments: n
                        } : {segmentGroup: t, slicedSegments: n}
                    }(e, s, c, r), u = a.segmentGroup, h = a.slicedSegments;
                    return 0 === h.length && u.hasChildren() ? i.expandChildren(n, r, u).pipe(Y(function (t) {
                        return new Bc(s, t)
                    })) : 0 === r.length && 0 === h.length ? Js(new Bc(s, {})) : i.expandSegment(n, u, r, h, gc, !0).pipe(Y(function (t) {
                        return new Bc(s.concat(t.segments), t.children)
                    }))
                }))
            }, t.prototype.getChildConfig = function (t, e, n) {
                var r = this;
                return e.children ? Js(new Sc(e.children, t)) : e.loadChildren ? void 0 !== e._loadedConfig ? Js(e._loadedConfig) : function (t, e, n) {
                    var r, i = e.canLoad;
                    return i && 0 !== i.length ? tt(i).pipe(Y(function (r) {
                        var i, o = t.get(r);
                        if (function (t) {
                            return t && Oh(t.canLoad)
                        }(o)) i = o.canLoad(e, n); else {
                            if (!Oh(o)) throw new Error("Invalid CanLoad guard");
                            i = o(e, n)
                        }
                        return Rc(i)
                    })).pipe(sl(), (r = function (t) {
                        return !0 === t
                    }, function (t) {
                        return t.lift(new Rl(r, void 0, t))
                    })) : Js(!0)
                }(t.injector, e, n).pipe(et(function (n) {
                    return n ? r.configLoader.load(t.injector, e).pipe(Y(function (t) {
                        return e._loadedConfig = t, t
                    })) : function (t) {
                        return new P(function (e) {
                            return e.error(wc("Cannot load children because the guard of the route \"path: '" + t.path + "'\" returned false"))
                        })
                    }(e)
                })) : Js(new Sc([], t))
            }, t.prototype.lineralizeSegments = function (t, e) {
                for (var n = [], r = e.root; ;) {
                    if (n = n.concat(r.segments), 0 === r.numberOfChildren) return Js(n);
                    if (r.numberOfChildren > 1 || !r.children[gc]) return Dh(t.redirectTo);
                    r = r.children[gc]
                }
            }, t.prototype.applyRedirectCommands = function (t, e, n) {
                return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n)
            }, t.prototype.applyRedirectCreatreUrlTree = function (t, e, n, r) {
                var i = this.createSegmentGroup(t, e.root, n, r);
                return new Dc(i, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment)
            }, t.prototype.createQueryParams = function (t, e) {
                var n = {};
                return Ic(t, function (t, r) {
                    if ("string" == typeof t && t.startsWith(":")) {
                        var i = t.substring(1);
                        n[r] = e[i]
                    } else n[r] = t
                }), n
            }, t.prototype.createSegmentGroup = function (t, e, n, r) {
                var i = this, o = this.createSegments(t, e.segments, n, r), a = {};
                return Ic(e.children, function (e, o) {
                    a[o] = i.createSegmentGroup(t, e, n, r)
                }), new Bc(o, a)
            }, t.prototype.createSegments = function (t, e, n, r) {
                var i = this;
                return e.map(function (e) {
                    return e.path.startsWith(":") ? i.findPosParam(t, e, r) : i.findOrReturn(e, n)
                })
            }, t.prototype.findPosParam = function (t, e, n) {
                var r = n[e.path.substring(1)];
                if (!r) throw new Error("Cannot redirect to '" + t + "'. Cannot find '" + e.path + "'.");
                return r
            }, t.prototype.findOrReturn = function (t, e) {
                var n, r, i = 0;
                try {
                    for (var o = l(e), a = o.next(); !a.done; a = o.next()) {
                        var s = a.value;
                        if (s.path === t.path) return e.splice(i), s;
                        i++
                    }
                } catch (u) {
                    n = {error: u}
                } finally {
                    try {
                        a && !a.done && (r = o.return) && r.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return t
            }, t
        }();

        function Mh(t, e, n) {
            if ("" === e.path) return "full" === e.pathMatch && (t.hasChildren() || n.length > 0) ? {
                matched: !1,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {}
            } : {matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {}};
            var r = (e.matcher || Cc)(n, t, e);
            return r ? {
                matched: !0,
                consumedSegments: r.consumed,
                lastChild: r.consumed.length,
                positionalParamSegments: r.posParams
            } : {matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {}}
        }

        function Vh(t) {
            if (1 === t.numberOfChildren && t.children[gc]) {
                var e = t.children[gc];
                return new Bc(t.segments.concat(e.segments), e.children)
            }
            return t
        }

        function Fh(t, e, n) {
            return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 !== n.redirectTo
        }

        function jh(t) {
            return t.outlet || gc
        }

        var Lh = function () {
            return function (t) {
                this.path = t, this.route = this.path[this.path.length - 1]
            }
        }(), zh = function () {
            return function (t, e) {
                this.component = t, this.route = e
            }
        }();

        function Uh(t, e, n) {
            var r = function (t) {
                if (!t) return null;
                for (var e = t.parent; e; e = e.parent) {
                    var n = e.routeConfig;
                    if (n && n._loadedConfig) return n._loadedConfig
                }
                return null
            }(e);
            return (r ? r.module.injector : n).get(t)
        }

        function Hh(t, e, n, r, i) {
            void 0 === i && (i = {canDeactivateChecks: [], canActivateChecks: []});
            var o = ih(e);
            return t.children.forEach(function (t) {
                !function (t, e, n, r, i) {
                    void 0 === i && (i = {canDeactivateChecks: [], canActivateChecks: []});
                    var o = t.value, a = e ? e.value : null, s = n ? n.getContext(t.value.outlet) : null;
                    if (a && o.routeConfig === a.routeConfig) {
                        var l = function (t, e, n) {
                            if ("function" == typeof n) return n(t, e);
                            switch (n) {
                                case"pathParamsChange":
                                    return !Vc(t.url, e.url);
                                case"pathParamsOrQueryParamsChange":
                                    return !Vc(t.url, e.url) || !Oc(t.queryParams, e.queryParams);
                                case"always":
                                    return !0;
                                case"paramsOrQueryParamsChange":
                                    return !dh(t, e) || !Oc(t.queryParams, e.queryParams);
                                case"paramsChange":
                                default:
                                    return !dh(t, e)
                            }
                        }(a, o, o.routeConfig.runGuardsAndResolvers);
                        l ? i.canActivateChecks.push(new Lh(r)) : (o.data = a.data, o._resolvedData = a._resolvedData), Hh(t, e, o.component ? s ? s.children : null : n, r, i), l && i.canDeactivateChecks.push(new zh(s && s.outlet && s.outlet.component || null, a))
                    } else a && qh(e, s, i), i.canActivateChecks.push(new Lh(r)), Hh(t, null, o.component ? s ? s.children : null : n, r, i)
                }(t, o[t.value.outlet], n, r.concat([t.value]), i), delete o[t.value.outlet]
            }), Ic(o, function (t, e) {
                return qh(t, n.getContext(e), i)
            }), i
        }

        function qh(t, e, n) {
            var r = ih(t), i = t.value;
            Ic(r, function (t, r) {
                qh(t, i.component ? e ? e.children.getContext(r) : null : e, n)
            }), n.canDeactivateChecks.push(new zh(i.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null, i))
        }

        var Gh = Symbol("INITIAL_VALUE");

        function Wh() {
            return Dl(function (t) {
                return (function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var n = null, r = null;
                    return V(t[t.length - 1]) && (r = t.pop()), "function" == typeof t[t.length - 1] && (n = t.pop()), 1 === t.length && h(t[0]) && (t = t[0]), J(t, r).lift(new il(n))
                }).apply(void 0, c(t.map(function (t) {
                    return t.pipe(Ol(1), Vl(Gh))
                }))).pipe(Fl(function (t, e) {
                    var n = !1;
                    return e.reduce(function (t, r, i) {
                        if (t !== Gh) return t;
                        if (r === Gh && (n = !0), !n) {
                            if (!1 === r) return r;
                            if (i === e.length - 1 || Ph(r)) return r
                        }
                        return t
                    }, t)
                }, Gh), ll(function (t) {
                    return t !== Gh
                }), Y(function (t) {
                    return Ph(t) ? t : !0 === t
                }), Ol(1))
            })
        }

        function Kh(t, e) {
            return null !== t && e && e(new fc(t)), Js(!0)
        }

        function Qh(t, e) {
            return null !== t && e && e(new hc(t)), Js(!0)
        }

        function Zh(t, e, n) {
            var r = e.routeConfig ? e.routeConfig.canActivate : null;
            return r && 0 !== r.length ? Js(r.map(function (r) {
                return al(function () {
                    var i, o = Uh(r, e, n);
                    if (function (t) {
                        return t && Oh(t.canActivate)
                    }(o)) i = Rc(o.canActivate(e, t)); else {
                        if (!Oh(o)) throw new Error("Invalid CanActivate guard");
                        i = Rc(o(e, t))
                    }
                    return i.pipe(Il())
                })
            })).pipe(Wh()) : Js(!0)
        }

        function Yh(t, e, n) {
            var r = e[e.length - 1], i = e.slice(0, e.length - 1).reverse().map(function (t) {
                return function (t) {
                    var e = t.routeConfig ? t.routeConfig.canActivateChild : null;
                    return e && 0 !== e.length ? {node: t, guards: e} : null
                }(t)
            }).filter(function (t) {
                return null !== t
            }).map(function (e) {
                return al(function () {
                    return Js(e.guards.map(function (i) {
                        var o, a = Uh(i, e.node, n);
                        if (function (t) {
                            return t && Oh(t.canActivateChild)
                        }(a)) o = Rc(a.canActivateChild(r, t)); else {
                            if (!Oh(a)) throw new Error("Invalid CanActivateChild guard");
                            o = Rc(a(r, t))
                        }
                        return o.pipe(Il())
                    })).pipe(Wh())
                })
            });
            return Js(i).pipe(Wh())
        }

        var $h = function () {
            return function () {
            }
        }(), Xh = function () {
            function t(t, e, n, r, i, o) {
                this.rootComponentType = t, this.config = e, this.urlTree = n, this.url = r, this.paramsInheritanceStrategy = i, this.relativeLinkResolution = o
            }

            return t.prototype.recognize = function () {
                try {
                    var t = ep(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
                        e = this.processSegmentGroup(this.config, t, gc),
                        n = new uh([], Object.freeze({}), Object.freeze(o({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, gc, this.rootComponentType, null, this.urlTree.root, -1, {}),
                        r = new rh(n, e), i = new ch(this.url, r);
                    return this.inheritParamsAndData(i._root), Js(i)
                } catch (a) {
                    return new P(function (t) {
                        return t.error(a)
                    })
                }
            }, t.prototype.inheritParamsAndData = function (t) {
                var e = this, n = t.value, r = lh(n, this.paramsInheritanceStrategy);
                n.params = Object.freeze(r.params), n.data = Object.freeze(r.data), t.children.forEach(function (t) {
                    return e.inheritParamsAndData(t)
                })
            }, t.prototype.processSegmentGroup = function (t, e, n) {
                return 0 === e.segments.length && e.hasChildren() ? this.processChildren(t, e) : this.processSegment(t, e, e.segments, n)
            }, t.prototype.processChildren = function (t, e) {
                var n, r = this, i = Fc(e, function (e, n) {
                    return r.processSegmentGroup(t, e, n)
                });
                return n = {}, i.forEach(function (t) {
                    var e = n[t.value.outlet];
                    if (e) {
                        var r = e.url.map(function (t) {
                            return t.toString()
                        }).join("/"), i = t.value.url.map(function (t) {
                            return t.toString()
                        }).join("/");
                        throw new Error("Two segments cannot have the same outlet name: '" + r + "' and '" + i + "'.")
                    }
                    n[t.value.outlet] = t.value
                }), i.sort(function (t, e) {
                    return t.value.outlet === gc ? -1 : e.value.outlet === gc ? 1 : t.value.outlet.localeCompare(e.value.outlet)
                }), i
            }, t.prototype.processSegment = function (t, e, n, r) {
                var i, o;
                try {
                    for (var a = l(t), s = a.next(); !s.done; s = a.next()) {
                        var u = s.value;
                        try {
                            return this.processSegmentAgainstRoute(u, e, n, r)
                        } catch (c) {
                            if (!(c instanceof $h)) throw c
                        }
                    }
                } catch (h) {
                    i = {error: h}
                } finally {
                    try {
                        s && !s.done && (o = a.return) && o.call(a)
                    } finally {
                        if (i) throw i.error
                    }
                }
                if (this.noLeftoversInUrl(e, n, r)) return [];
                throw new $h
            }, t.prototype.noLeftoversInUrl = function (t, e, n) {
                return 0 === e.length && !t.children[n]
            }, t.prototype.processSegmentAgainstRoute = function (t, e, n, r) {
                if (t.redirectTo) throw new $h;
                if ((t.outlet || gc) !== r) throw new $h;
                var i, a = [], s = [];
                if ("**" === t.path) {
                    var l = n.length > 0 ? Tc(n).parameters : {};
                    i = new uh(n, l, Object.freeze(o({}, this.urlTree.queryParams)), this.urlTree.fragment, ip(t), r, t.component, t, Jh(e), tp(e) + n.length, op(t))
                } else {
                    var u = function (t, e, n) {
                        if ("" === e.path) {
                            if ("full" === e.pathMatch && (t.hasChildren() || n.length > 0)) throw new $h;
                            return {consumedSegments: [], lastChild: 0, parameters: {}}
                        }
                        var r = (e.matcher || Cc)(n, t, e);
                        if (!r) throw new $h;
                        var i = {};
                        Ic(r.posParams, function (t, e) {
                            i[e] = t.path
                        });
                        var a = r.consumed.length > 0 ? o({}, i, r.consumed[r.consumed.length - 1].parameters) : i;
                        return {consumedSegments: r.consumed, lastChild: r.consumed.length, parameters: a}
                    }(e, t, n);
                    a = u.consumedSegments, s = n.slice(u.lastChild), i = new uh(a, u.parameters, Object.freeze(o({}, this.urlTree.queryParams)), this.urlTree.fragment, ip(t), r, t.component, t, Jh(e), tp(e) + a.length, op(t))
                }
                var c = function (t) {
                    return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : []
                }(t), h = ep(e, a, s, c, this.relativeLinkResolution), p = h.segmentGroup, f = h.slicedSegments;
                if (0 === f.length && p.hasChildren()) {
                    var d = this.processChildren(c, p);
                    return [new rh(i, d)]
                }
                if (0 === c.length && 0 === f.length) return [new rh(i, [])];
                var m = this.processSegment(c, p, f, gc);
                return [new rh(i, m)]
            }, t
        }();

        function Jh(t) {
            for (var e = t; e._sourceSegment;) e = e._sourceSegment;
            return e
        }

        function tp(t) {
            for (var e = t, n = e._segmentIndexShift ? e._segmentIndexShift : 0; e._sourceSegment;) n += (e = e._sourceSegment)._segmentIndexShift ? e._segmentIndexShift : 0;
            return n - 1
        }

        function ep(t, e, n, r, i) {
            if (n.length > 0 && function (t, e, n) {
                return r.some(function (n) {
                    return np(t, e, n) && rp(n) !== gc
                })
            }(t, n)) {
                var a = new Bc(e, function (t, e, n, r) {
                    var i, o, a = {};
                    a[gc] = r, r._sourceSegment = t, r._segmentIndexShift = e.length;
                    try {
                        for (var s = l(n), u = s.next(); !u.done; u = s.next()) {
                            var c = u.value;
                            if ("" === c.path && rp(c) !== gc) {
                                var h = new Bc([], {});
                                h._sourceSegment = t, h._segmentIndexShift = e.length, a[rp(c)] = h
                            }
                        }
                    } catch (p) {
                        i = {error: p}
                    } finally {
                        try {
                            u && !u.done && (o = s.return) && o.call(s)
                        } finally {
                            if (i) throw i.error
                        }
                    }
                    return a
                }(t, e, r, new Bc(n, t.children)));
                return a._sourceSegment = t, a._segmentIndexShift = e.length, {segmentGroup: a, slicedSegments: []}
            }
            if (0 === n.length && function (t, e, n) {
                return r.some(function (n) {
                    return np(t, e, n)
                })
            }(t, n)) {
                var s = new Bc(t.segments, function (t, e, n, r, i, a) {
                    var s, u, c = {};
                    try {
                        for (var h = l(r), p = h.next(); !p.done; p = h.next()) {
                            var f = p.value;
                            if (np(t, n, f) && !i[rp(f)]) {
                                var d = new Bc([], {});
                                d._sourceSegment = t, d._segmentIndexShift = "legacy" === a ? t.segments.length : e.length, c[rp(f)] = d
                            }
                        }
                    } catch (m) {
                        s = {error: m}
                    } finally {
                        try {
                            p && !p.done && (u = h.return) && u.call(h)
                        } finally {
                            if (s) throw s.error
                        }
                    }
                    return o({}, i, c)
                }(t, e, n, r, t.children, i));
                return s._sourceSegment = t, s._segmentIndexShift = e.length, {segmentGroup: s, slicedSegments: n}
            }
            var u = new Bc(t.segments, t.children);
            return u._sourceSegment = t, u._segmentIndexShift = e.length, {segmentGroup: u, slicedSegments: n}
        }

        function np(t, e, n) {
            return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 === n.redirectTo
        }

        function rp(t) {
            return t.outlet || gc
        }

        function ip(t) {
            return t.data || {}
        }

        function op(t) {
            return t.resolve || {}
        }

        function ap(t, e, n, r) {
            var i = Uh(t, e, r);
            return Rc(i.resolve ? i.resolve(e, n) : i(e, n))
        }

        function sp(t) {
            return function (e) {
                return e.pipe(Dl(function (e) {
                    var n = t(e);
                    return n ? tt(n).pipe(Y(function () {
                        return e
                    })) : tt([e])
                }))
            }
        }

        var lp = function () {
            return function () {
            }
        }(), up = function () {
            function t() {
            }

            return t.prototype.shouldDetach = function (t) {
                return !1
            }, t.prototype.store = function (t, e) {
            }, t.prototype.shouldAttach = function (t) {
                return !1
            }, t.prototype.retrieve = function (t) {
                return null
            }, t.prototype.shouldReuseRoute = function (t, e) {
                return t.routeConfig === e.routeConfig
            }, t
        }(), cp = new Mt("ROUTES"), hp = function () {
            function t(t, e, n, r) {
                this.loader = t, this.compiler = e, this.onLoadStartListener = n, this.onLoadEndListener = r
            }

            return t.prototype.load = function (t, e) {
                var n = this;
                return this.onLoadStartListener && this.onLoadStartListener(e), this.loadModuleFactory(e.loadChildren).pipe(Y(function (r) {
                    n.onLoadEndListener && n.onLoadEndListener(e);
                    var i = r.create(t);
                    return new Sc(Pc(i.injector.get(cp)).map(kc), i)
                }))
            }, t.prototype.loadModuleFactory = function (t) {
                var e = this;
                return "string" == typeof t ? tt(this.loader.load(t)) : Rc(t()).pipe(et(function (t) {
                    return t instanceof an ? Js(t) : tt(e.compiler.compileModuleAsync(t))
                }))
            }, t
        }(), pp = function () {
            return function () {
            }
        }(), fp = function () {
            function t() {
            }

            return t.prototype.shouldProcessUrl = function (t) {
                return !0
            }, t.prototype.extract = function (t) {
                return t
            }, t.prototype.merge = function (t, e) {
                return t
            }, t
        }();

        function dp(t) {
            throw t
        }

        function mp(t, e, n) {
            return e.parse("/")
        }

        function yp(t, e) {
            return Js(null)
        }

        var gp = function () {
                function t(t, e, n, r, i, o, a, s) {
                    var l = this;
                    this.rootComponentType = t, this.urlSerializer = e, this.rootContexts = n, this.location = r, this.config = s, this.lastSuccessfulNavigation = null, this.currentNavigation = null, this.navigationId = 0, this.isNgZoneEnabled = !1, this.events = new B, this.errorHandler = dp, this.malformedUriErrorHandler = mp, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = {
                        beforePreactivation: yp,
                        afterPreactivation: yp
                    }, this.urlHandlingStrategy = new fp, this.routeReuseStrategy = new up, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "legacy", this.ngModule = i.get(on), this.console = i.get(Li);
                    var u = i.get(ro);
                    this.isNgZoneEnabled = u instanceof ro, this.resetConfig(s), this.currentUrlTree = new Dc(new Bc([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, this.configLoader = new hp(o, a, function (t) {
                        return l.triggerEvent(new uc(t))
                    }, function (t) {
                        return l.triggerEvent(new cc(t))
                    }), this.routerState = ah(this.currentUrlTree, this.rootComponentType), this.transitions = new tl({
                        id: 0,
                        currentUrlTree: this.currentUrlTree,
                        currentRawUrl: this.currentUrlTree,
                        extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
                        urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
                        rawUrl: this.currentUrlTree,
                        extras: {},
                        resolve: null,
                        reject: null,
                        promise: Promise.resolve(!0),
                        source: "imperative",
                        restoredState: null,
                        currentSnapshot: this.routerState.snapshot,
                        targetSnapshot: null,
                        currentRouterState: this.routerState,
                        targetRouterState: null,
                        guards: {canActivateChecks: [], canDeactivateChecks: []},
                        guardsResult: null
                    }), this.navigations = this.setupNavigations(this.transitions), this.processNavigations()
                }

                return t.prototype.setupNavigations = function (t) {
                    var e = this, n = this.events;
                    return t.pipe(ll(function (t) {
                        return 0 !== t.id
                    }), Y(function (t) {
                        return o({}, t, {extractedUrl: e.urlHandlingStrategy.extract(t.rawUrl)})
                    }), Dl(function (t) {
                        var r, i, a, s, u = !1, c = !1;
                        return Js(t).pipe(yl(function (t) {
                            e.currentNavigation = {
                                id: t.id,
                                initialUrl: t.currentRawUrl,
                                extractedUrl: t.extractedUrl,
                                trigger: t.source,
                                extras: t.extras,
                                previousNavigation: e.lastSuccessfulNavigation ? o({}, e.lastSuccessfulNavigation, {previousNavigation: null}) : null
                            }
                        }), Dl(function (t) {
                            var r, i, a, s, l = !e.navigated || t.extractedUrl.toString() !== e.browserUrlTree.toString();
                            if (("reload" === e.onSameUrlNavigation || l) && e.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)) return Js(t).pipe(Dl(function (t) {
                                var r = e.transitions.getValue();
                                return n.next(new tc(t.id, e.serializeUrl(t.extractedUrl), t.source, t.restoredState)), r !== e.transitions.getValue() ? Ys : [t]
                            }), Dl(function (t) {
                                return Promise.resolve(t)
                            }), (r = e.ngModule.injector, i = e.configLoader, a = e.urlSerializer, s = e.config, function (t) {
                                return t.pipe(Dl(function (t) {
                                    return function (e, n, r, i, o) {
                                        return new Bh(e, n, r, t.extractedUrl, o).apply()
                                    }(r, i, a, 0, s).pipe(Y(function (e) {
                                        return o({}, t, {urlAfterRedirects: e})
                                    }))
                                }))
                            }), yl(function (t) {
                                e.currentNavigation = o({}, e.currentNavigation, {finalUrl: t.urlAfterRedirects})
                            }), function (t, n, r, i, a) {
                                return function (r) {
                                    return r.pipe(et(function (r) {
                                        return function (t, e, n, r, i, o) {
                                            return void 0 === i && (i = "emptyOnly"), void 0 === o && (o = "legacy"), new Xh(t, e, n, r, i, o).recognize()
                                        }(t, n, r.urlAfterRedirects, (s = r.urlAfterRedirects, e.serializeUrl(s)), i, a).pipe(Y(function (t) {
                                            return o({}, r, {targetSnapshot: t})
                                        }));
                                        var s
                                    }))
                                }
                            }(e.rootComponentType, e.config, 0, e.paramsInheritanceStrategy, e.relativeLinkResolution), yl(function (t) {
                                "eager" === e.urlUpdateStrategy && (t.extras.skipLocationChange || e.setBrowserUrl(t.urlAfterRedirects, !!t.extras.replaceUrl, t.id, t.extras.state), e.browserUrlTree = t.urlAfterRedirects)
                            }), yl(function (t) {
                                var r = new ic(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                                n.next(r)
                            }));
                            if (l && e.rawUrlTree && e.urlHandlingStrategy.shouldProcessUrl(e.rawUrlTree)) {
                                var u = t.extractedUrl, c = t.source, h = t.restoredState, p = t.extras,
                                    f = new tc(t.id, e.serializeUrl(u), c, h);
                                n.next(f);
                                var d = ah(u, e.rootComponentType).snapshot;
                                return Js(o({}, t, {
                                    targetSnapshot: d,
                                    urlAfterRedirects: u,
                                    extras: o({}, p, {skipLocationChange: !1, replaceUrl: !1})
                                }))
                            }
                            return e.rawUrlTree = t.rawUrl, e.browserUrlTree = t.urlAfterRedirects, t.resolve(null), Ys
                        }), sp(function (t) {
                            var n = t.extras;
                            return e.hooks.beforePreactivation(t.targetSnapshot, {
                                navigationId: t.id,
                                appliedUrlTree: t.extractedUrl,
                                rawUrlTree: t.rawUrl,
                                skipLocationChange: !!n.skipLocationChange,
                                replaceUrl: !!n.replaceUrl
                            })
                        }), yl(function (t) {
                            var n = new oc(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                            e.triggerEvent(n)
                        }), Y(function (t) {
                            return o({}, t, {guards: (n = t.targetSnapshot, r = t.currentSnapshot, i = e.rootContexts, a = n._root, Hh(a, r ? r._root : null, i, [a.value]))});
                            var n, r, i, a
                        }), function (t, e) {
                            return function (n) {
                                return n.pipe(et(function (n) {
                                    var r = n.targetSnapshot, i = n.currentSnapshot, a = n.guards, s = a.canActivateChecks,
                                        l = a.canDeactivateChecks;
                                    return 0 === l.length && 0 === s.length ? Js(o({}, n, {guardsResult: !0})) : function (t, e, n, r) {
                                        return tt(l).pipe(et(function (t) {
                                            return function (t, e, n, r, i) {
                                                var o = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
                                                return o && 0 !== o.length ? Js(o.map(function (o) {
                                                    var a, s = Uh(o, e, i);
                                                    if (function (t) {
                                                        return t && Oh(t.canDeactivate)
                                                    }(s)) a = Rc(s.canDeactivate(t, e, n, r)); else {
                                                        if (!Oh(s)) throw new Error("Invalid CanDeactivate guard");
                                                        a = Rc(s(t, e, n, r))
                                                    }
                                                    return a.pipe(Il())
                                                })).pipe(Wh()) : Js(!0)
                                            }(t.component, t.route, n, e, r)
                                        }), Il(function (t) {
                                            return !0 !== t
                                        }, !0))
                                    }(0, r, i, t).pipe(et(function (n) {
                                        return n && "boolean" == typeof n ? function (t, e, n, r) {
                                            return tt(s).pipe(zl(function (e) {
                                                return tt([Qh(e.route.parent, r), Kh(e.route, r), Yh(t, e.path, n), Zh(t, e.route, n)]).pipe(sl(), Il(function (t) {
                                                    return !0 !== t
                                                }, !0))
                                            }), Il(function (t) {
                                                return !0 !== t
                                            }, !0))
                                        }(r, 0, t, e) : Js(n)
                                    }), Y(function (t) {
                                        return o({}, n, {guardsResult: t})
                                    }))
                                }))
                            }
                        }(e.ngModule.injector, function (t) {
                            return e.triggerEvent(t)
                        }), yl(function (t) {
                            if (Ph(t.guardsResult)) {
                                var n = wc('Redirecting to "' + e.serializeUrl(t.guardsResult) + '"');
                                throw n.url = t.guardsResult, n
                            }
                        }), yl(function (t) {
                            var n = new ac(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
                            e.triggerEvent(n)
                        }), ll(function (t) {
                            if (!t.guardsResult) {
                                e.resetUrlToCurrentUrlTree();
                                var r = new nc(t.id, e.serializeUrl(t.extractedUrl), "");
                                return n.next(r), t.resolve(!1), !1
                            }
                            return !0
                        }), sp(function (t) {
                            if (t.guards.canActivateChecks.length) return Js(t).pipe(yl(function (t) {
                                var n = new sc(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                                e.triggerEvent(n)
                            }), (n = e.paramsInheritanceStrategy, r = e.ngModule.injector, function (t) {
                                return t.pipe(et(function (t) {
                                    var e = t.targetSnapshot, i = t.guards.canActivateChecks;
                                    return i.length ? tt(i).pipe(zl(function (t) {
                                        return function (t, n, r, i) {
                                            return function (t, e, n, r) {
                                                var i = Object.keys(t);
                                                if (0 === i.length) return Js({});
                                                if (1 === i.length) {
                                                    var o = i[0];
                                                    return ap(t[o], e, n, r).pipe(Y(function (t) {
                                                        var e;
                                                        return (e = {})[o] = t, e
                                                    }))
                                                }
                                                var a = {};
                                                return tt(i).pipe(et(function (i) {
                                                    return ap(t[i], e, n, r).pipe(Y(function (t) {
                                                        return a[i] = t, t
                                                    }))
                                                })).pipe(El(), Y(function () {
                                                    return a
                                                }))
                                            }(t._resolve, t, e, i).pipe(Y(function (e) {
                                                return t._resolvedData = e, t.data = o({}, t.data, lh(t, r).resolve), null
                                            }))
                                        }(t.route, 0, n, r)
                                    }), function (t, e) {
                                        return arguments.length >= 2 ? function (e) {
                                            return k(Fl(t, void 0), fl(1), wl(void 0))(e)
                                        } : function (e) {
                                            return k(Fl(function (e, n, r) {
                                                return t(e)
                                            }), fl(1))(e)
                                        }
                                    }(function (t, e) {
                                        return t
                                    }), Y(function (e) {
                                        return t
                                    })) : Js(t)
                                }))
                            }), yl(function (t) {
                                var n = new lc(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                                e.triggerEvent(n)
                            }));
                            var n, r
                        }), sp(function (t) {
                            var n = t.extras;
                            return e.hooks.afterPreactivation(t.targetSnapshot, {
                                navigationId: t.id,
                                appliedUrlTree: t.extractedUrl,
                                rawUrlTree: t.rawUrl,
                                skipLocationChange: !!n.skipLocationChange,
                                replaceUrl: !!n.replaceUrl
                            })
                        }), Y(function (t) {
                            var n, r, i, a = (i = function t(e, n, r) {
                                if (r && e.shouldReuseRoute(n.value, r.value.snapshot)) {
                                    (u = r.value)._futureSnapshot = n.value;
                                    var i = function (e, n, r) {
                                        return n.children.map(function (n) {
                                            var i, o;
                                            try {
                                                for (var a = l(r.children), s = a.next(); !s.done; s = a.next()) {
                                                    var u = s.value;
                                                    if (e.shouldReuseRoute(u.value.snapshot, n.value)) return t(e, n, u)
                                                }
                                            } catch (c) {
                                                i = {error: c}
                                            } finally {
                                                try {
                                                    s && !s.done && (o = a.return) && o.call(a)
                                                } finally {
                                                    if (i) throw i.error
                                                }
                                            }
                                            return t(e, n)
                                        })
                                    }(e, n, r);
                                    return new rh(u, i)
                                }
                                var o = e.retrieve(n.value);
                                if (o) {
                                    var a = o.route;
                                    return function t(e, n) {
                                        if (e.value.routeConfig !== n.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
                                        if (e.children.length !== n.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                                        n.value._futureSnapshot = e.value;
                                        for (var r = 0; r < e.children.length; ++r) t(e.children[r], n.children[r])
                                    }(n, a), a
                                }
                                var s,
                                    u = new sh(new tl((s = n.value).url), new tl(s.params), new tl(s.queryParams), new tl(s.fragment), new tl(s.data), s.outlet, s.component, s);
                                return i = n.children.map(function (n) {
                                    return t(e, n)
                                }), new rh(u, i)
                            }(e.routeReuseStrategy, (n = t.targetSnapshot)._root, (r = t.currentRouterState) ? r._root : void 0), new oh(i, n));
                            return o({}, t, {targetRouterState: a})
                        }), yl(function (t) {
                            e.currentUrlTree = t.urlAfterRedirects, e.rawUrlTree = e.urlHandlingStrategy.merge(e.currentUrlTree, t.rawUrl), e.routerState = t.targetRouterState, "deferred" === e.urlUpdateStrategy && (t.extras.skipLocationChange || e.setBrowserUrl(e.rawUrlTree, !!t.extras.replaceUrl, t.id, t.extras.state), e.browserUrlTree = t.urlAfterRedirects)
                        }), (i = e.rootContexts, a = e.routeReuseStrategy, s = function (t) {
                            return e.triggerEvent(t)
                        }, Y(function (t) {
                            return new Ah(a, t.targetRouterState, t.currentRouterState, s).activate(i), t
                        })), yl({
                            next: function () {
                                u = !0
                            }, complete: function () {
                                u = !0
                            }
                        }), (r = function () {
                            if (!u && !c) {
                                e.resetUrlToCurrentUrlTree();
                                var r = new nc(t.id, e.serializeUrl(t.extractedUrl), "Navigation ID " + t.id + " is not equal to the current navigation id " + e.navigationId);
                                n.next(r), t.resolve(!1)
                            }
                            e.currentNavigation = null
                        }, function (t) {
                            return t.lift(new Ul(r))
                        }), xl(function (r) {
                            if (c = !0, (s = r) && s[bc]) {
                                var i = Ph(r.url);
                                i || (e.navigated = !0, e.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl));
                                var o = new nc(t.id, e.serializeUrl(t.extractedUrl), r.message);
                                n.next(o), t.resolve(!1), i && e.navigateByUrl(r.url)
                            } else {
                                e.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
                                var a = new rc(t.id, e.serializeUrl(t.extractedUrl), r);
                                n.next(a);
                                try {
                                    t.resolve(e.errorHandler(r))
                                } catch (l) {
                                    t.reject(l)
                                }
                            }
                            var s;
                            return Ys
                        }))
                    }))
                }, t.prototype.resetRootComponentType = function (t) {
                    this.rootComponentType = t, this.routerState.root.component = this.rootComponentType
                }, t.prototype.getTransition = function () {
                    var t = this.transitions.value;
                    return t.urlAfterRedirects = this.browserUrlTree, t
                }, t.prototype.setTransition = function (t) {
                    this.transitions.next(o({}, this.getTransition(), t))
                }, t.prototype.initialNavigation = function () {
                    this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {replaceUrl: !0})
                }, t.prototype.setUpLocationChangeListener = function () {
                    var t = this;
                    this.locationSubscription || (this.locationSubscription = this.location.subscribe(function (e) {
                        var n = t.parseUrl(e.url), r = "popstate" === e.type ? "popstate" : "hashchange",
                            i = e.state && e.state.navigationId ? e.state : null;
                        setTimeout(function () {
                            t.scheduleNavigation(n, r, i, {replaceUrl: !0})
                        }, 0)
                    }))
                }, Object.defineProperty(t.prototype, "url", {
                    get: function () {
                        return this.serializeUrl(this.currentUrlTree)
                    }, enumerable: !0, configurable: !0
                }), t.prototype.getCurrentNavigation = function () {
                    return this.currentNavigation
                }, t.prototype.triggerEvent = function (t) {
                    this.events.next(t)
                }, t.prototype.resetConfig = function (t) {
                    Ec(t), this.config = t.map(kc), this.navigated = !1, this.lastSuccessfulId = -1
                }, t.prototype.ngOnDestroy = function () {
                    this.dispose()
                }, t.prototype.dispose = function () {
                    this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = null)
                }, t.prototype.createUrlTree = function (t, e) {
                    void 0 === e && (e = {});
                    var n = e.relativeTo, r = e.queryParams, i = e.fragment, a = e.preserveQueryParams,
                        s = e.queryParamsHandling,
                        l = e.preserveFragment;
                    he() && a && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
                    var u = n || this.routerState.root, h = l ? this.currentUrlTree.fragment : i, p = null;
                    if (s) switch (s) {
                        case"merge":
                            p = o({}, this.currentUrlTree.queryParams, r);
                            break;
                        case"preserve":
                            p = this.currentUrlTree.queryParams;
                            break;
                        default:
                            p = r || null
                    } else p = a ? this.currentUrlTree.queryParams : r || null;
                    return null !== p && (p = this.removeEmptyProps(p)), function (t, e, n, r, i) {
                        if (0 === n.length) return yh(e.root, e.root, e, r, i);
                        var o = function (t) {
                            if ("string" == typeof t[0] && 1 === t.length && "/" === t[0]) return new gh(!0, 0, t);
                            var e = 0, n = !1, r = t.reduce(function (t, r, i) {
                                if ("object" == typeof r && null != r) {
                                    if (r.outlets) {
                                        var o = {};
                                        return Ic(r.outlets, function (t, e) {
                                            o[e] = "string" == typeof t ? t.split("/") : t
                                        }), c(t, [{outlets: o}])
                                    }
                                    if (r.segmentPath) return c(t, [r.segmentPath])
                                }
                                return "string" != typeof r ? c(t, [r]) : 0 === i ? (r.split("/").forEach(function (r, i) {
                                    0 == i && "." === r || (0 == i && "" === r ? n = !0 : ".." === r ? e++ : "" != r && t.push(r))
                                }), t) : c(t, [r])
                            }, []);
                            return new gh(n, e, r)
                        }(n);
                        if (o.toRoot()) return yh(e.root, new Bc([], {}), e, r, i);
                        var a = function (t, n, r) {
                                if (t.isAbsolute) return new vh(e.root, !0, 0);
                                if (-1 === r.snapshot._lastPathIndex) return new vh(r.snapshot._urlSegment, !0, 0);
                                var i = mh(t.commands[0]) ? 0 : 1;
                                return function (e, n, o) {
                                    for (var a = r.snapshot._urlSegment, s = r.snapshot._lastPathIndex + i, l = t.numberOfDoubleDots; l > s;) {
                                        if (l -= s, !(a = a.parent)) throw new Error("Invalid number of '../'");
                                        s = a.segments.length
                                    }
                                    return new vh(a, !1, s - l)
                                }()
                            }(o, 0, t),
                            s = a.processChildren ? wh(a.segmentGroup, a.index, o.commands) : bh(a.segmentGroup, a.index, o.commands);
                        return yh(a.segmentGroup, s, e, r, i)
                    }(u, this.currentUrlTree, t, p, h)
                }, t.prototype.navigateByUrl = function (t, e) {
                    void 0 === e && (e = {skipLocationChange: !1}), he() && this.isNgZoneEnabled && !ro.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
                    var n = Ph(t) ? t : this.parseUrl(t), r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
                    return this.scheduleNavigation(r, "imperative", null, e)
                }, t.prototype.navigate = function (t, e) {
                    return void 0 === e && (e = {skipLocationChange: !1}), function (t) {
                        for (var e = 0; e < t.length; e++) {
                            var n = t[e];
                            if (null == n) throw new Error("The requested path contains " + n + " segment at index " + e)
                        }
                    }(t), this.navigateByUrl(this.createUrlTree(t, e), e)
                }, t.prototype.serializeUrl = function (t) {
                    return this.urlSerializer.serialize(t)
                }, t.prototype.parseUrl = function (t) {
                    var e;
                    try {
                        e = this.urlSerializer.parse(t)
                    } catch (n) {
                        e = this.malformedUriErrorHandler(n, this.urlSerializer, t)
                    }
                    return e
                }, t.prototype.isActive = function (t, e) {
                    if (Ph(t)) return Nc(this.currentUrlTree, t, e);
                    var n = this.parseUrl(t);
                    return Nc(this.currentUrlTree, n, e)
                }, t.prototype.removeEmptyProps = function (t) {
                    return Object.keys(t).reduce(function (e, n) {
                        var r = t[n];
                        return null != r && (e[n] = r), e
                    }, {})
                }, t.prototype.processNavigations = function () {
                    var t = this;
                    this.navigations.subscribe(function (e) {
                        t.navigated = !0, t.lastSuccessfulId = e.id, t.events.next(new ec(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(t.currentUrlTree))), t.lastSuccessfulNavigation = t.currentNavigation, t.currentNavigation = null, e.resolve(!0)
                    }, function (e) {
                        t.console.warn("Unhandled Navigation Error: ")
                    })
                }, t.prototype.scheduleNavigation = function (t, e, n, r) {
                    var i = this.getTransition();
                    if (i && "imperative" !== e && "imperative" === i.source && i.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
                    if (i && "hashchange" == e && "popstate" === i.source && i.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
                    if (i && "popstate" == e && "hashchange" === i.source && i.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
                    var o = null, a = null, s = new Promise(function (t, e) {
                        o = t, a = e
                    }), l = ++this.navigationId;
                    return this.setTransition({
                        id: l,
                        source: e,
                        restoredState: n,
                        currentUrlTree: this.currentUrlTree,
                        currentRawUrl: this.rawUrlTree,
                        rawUrl: t,
                        extras: r,
                        resolve: o,
                        reject: a,
                        promise: s,
                        currentSnapshot: this.routerState.snapshot,
                        currentRouterState: this.routerState
                    }), s.catch(function (t) {
                        return Promise.reject(t)
                    })
                }, t.prototype.setBrowserUrl = function (t, e, n, r) {
                    var i = this.urlSerializer.serialize(t);
                    r = r || {}, this.location.isCurrentPathEqualTo(i) || e ? this.location.replaceState(i, "", o({}, r, {navigationId: n})) : this.location.go(i, "", o({}, r, {navigationId: n}))
                }, t.prototype.resetStateAndUrl = function (t, e, n) {
                    this.routerState = t, this.currentUrlTree = e, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n), this.resetUrlToCurrentUrlTree()
                }, t.prototype.resetUrlToCurrentUrlTree = function () {
                    this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", {navigationId: this.lastSuccessfulId})
                }, t
            }(), vp = function () {
                return function () {
                    this.outlet = null, this.route = null, this.resolver = null, this.children = new _p, this.attachRef = null
                }
            }(), _p = function () {
                function t() {
                    this.contexts = new Map
                }

                return t.prototype.onChildOutletCreated = function (t, e) {
                    var n = this.getOrCreateContext(t);
                    n.outlet = e, this.contexts.set(t, n)
                }, t.prototype.onChildOutletDestroyed = function (t) {
                    var e = this.getContext(t);
                    e && (e.outlet = null)
                }, t.prototype.onOutletDeactivated = function () {
                    var t = this.contexts;
                    return this.contexts = new Map, t
                }, t.prototype.onOutletReAttached = function (t) {
                    this.contexts = t
                }, t.prototype.getOrCreateContext = function (t) {
                    var e = this.getContext(t);
                    return e || (e = new vp, this.contexts.set(t, e)), e
                }, t.prototype.getContext = function (t) {
                    return this.contexts.get(t) || null
                }, t
            }(), bp = function () {
                function t(t, e, n, r, i) {
                    this.parentContexts = t, this.location = e, this.resolver = n, this.changeDetector = i, this.activated = null, this._activatedRoute = null, this.activateEvents = new Pi, this.deactivateEvents = new Pi, this.name = r || gc, t.onChildOutletCreated(this.name, this)
                }

                return t.prototype.ngOnDestroy = function () {
                    this.parentContexts.onChildOutletDestroyed(this.name)
                }, t.prototype.ngOnInit = function () {
                    if (!this.activated) {
                        var t = this.parentContexts.getContext(this.name);
                        t && t.route && (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.resolver || null))
                    }
                }, Object.defineProperty(t.prototype, "isActivated", {
                    get: function () {
                        return !!this.activated
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "component", {
                    get: function () {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        return this.activated.instance
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "activatedRoute", {
                    get: function () {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        return this._activatedRoute
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(t.prototype, "activatedRouteData", {
                    get: function () {
                        return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
                    }, enumerable: !0, configurable: !0
                }), t.prototype.detach = function () {
                    if (!this.activated) throw new Error("Outlet is not activated");
                    this.location.detach();
                    var t = this.activated;
                    return this.activated = null, this._activatedRoute = null, t
                }, t.prototype.attach = function (t, e) {
                    this.activated = t, this._activatedRoute = e, this.location.insert(t.hostView)
                }, t.prototype.deactivate = function () {
                    if (this.activated) {
                        var t = this.component;
                        this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(t)
                    }
                }, t.prototype.activateWith = function (t, e) {
                    if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
                    this._activatedRoute = t;
                    var n = (e = e || this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),
                        r = this.parentContexts.getOrCreateContext(this.name).children,
                        i = new wp(t, r, this.location.injector);
                    this.activated = this.location.createComponent(n, this.location.length, i), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance)
                }, t
            }(), wp = function () {
                function t(t, e, n) {
                    this.route = t, this.childContexts = e, this.parent = n
                }

                return t.prototype.get = function (t, e) {
                    return t === sh ? this.route : t === _p ? this.childContexts : this.parent.get(t, e)
                }, t
            }(), Cp = function () {
                return function () {
                }
            }(), Sp = function () {
                function t() {
                }

                return t.prototype.preload = function (t, e) {
                    return e().pipe(xl(function () {
                        return Js(null)
                    }))
                }, t
            }(), Ep = function () {
                function t() {
                }

                return t.prototype.preload = function (t, e) {
                    return Js(null)
                }, t
            }(), xp = function () {
                function t(t, e, n, r, i) {
                    this.router = t, this.injector = r, this.preloadingStrategy = i, this.loader = new hp(e, n, function (e) {
                        return t.triggerEvent(new uc(e))
                    }, function (e) {
                        return t.triggerEvent(new cc(e))
                    })
                }

                return t.prototype.setUpPreloading = function () {
                    var t = this;
                    this.subscription = this.router.events.pipe(ll(function (t) {
                        return t instanceof ec
                    }), zl(function () {
                        return t.preload()
                    })).subscribe(function () {
                    })
                }, t.prototype.preload = function () {
                    var t = this.injector.get(on);
                    return this.processRoutes(t, this.router.config)
                }, t.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe()
                }, t.prototype.processRoutes = function (t, e) {
                    var n, r, i = [];
                    try {
                        for (var o = l(e), a = o.next(); !a.done; a = o.next()) {
                            var s = a.value;
                            if (s.loadChildren && !s.canLoad && s._loadedConfig) {
                                var u = s._loadedConfig;
                                i.push(this.processRoutes(u.module, u.routes))
                            } else s.loadChildren && !s.canLoad ? i.push(this.preloadConfig(t, s)) : s.children && i.push(this.processRoutes(t, s.children))
                        }
                    } catch (c) {
                        n = {error: c}
                    } finally {
                        try {
                            a && !a.done && (r = o.return) && r.call(o)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return tt(i).pipe(ot(), Y(function (t) {
                    }))
                }, t.prototype.preloadConfig = function (t, e) {
                    var n = this;
                    return this.preloadingStrategy.preload(e, function () {
                        return n.loader.load(t.injector, e).pipe(et(function (t) {
                            return e._loadedConfig = t, n.processRoutes(t.module, t.routes)
                        }))
                    })
                }, t
            }(), Ap = function () {
                function t(t, e, n) {
                    void 0 === n && (n = {}), this.router = t, this.viewportScroller = e, this.options = n, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, n.scrollPositionRestoration = n.scrollPositionRestoration || "disabled", n.anchorScrolling = n.anchorScrolling || "disabled"
                }

                return t.prototype.init = function () {
                    "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents()
                }, t.prototype.createScrollEvents = function () {
                    var t = this;
                    return this.router.events.subscribe(function (e) {
                        e instanceof tc ? (t.store[t.lastId] = t.viewportScroller.getScrollPosition(), t.lastSource = e.navigationTrigger, t.restoredId = e.restoredState ? e.restoredState.navigationId : 0) : e instanceof ec && (t.lastId = e.id, t.scheduleScrollEvent(e, t.router.parseUrl(e.urlAfterRedirects).fragment))
                    })
                }, t.prototype.consumeScrollEvents = function () {
                    var t = this;
                    return this.router.events.subscribe(function (e) {
                        e instanceof mc && (e.position ? "top" === t.options.scrollPositionRestoration ? t.viewportScroller.scrollToPosition([0, 0]) : "enabled" === t.options.scrollPositionRestoration && t.viewportScroller.scrollToPosition(e.position) : e.anchor && "enabled" === t.options.anchorScrolling ? t.viewportScroller.scrollToAnchor(e.anchor) : "disabled" !== t.options.scrollPositionRestoration && t.viewportScroller.scrollToPosition([0, 0]))
                    })
                }, t.prototype.scheduleScrollEvent = function (t, e) {
                    this.router.triggerEvent(new mc(t, "popstate" === this.lastSource ? this.store[this.restoredId] : null, e))
                }, t.prototype.ngOnDestroy = function () {
                    this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe()
                }, t
            }(), kp = new Mt("ROUTER_CONFIGURATION"), Op = new Mt("ROUTER_FORROOT_GUARD"),
            Pp = [ys, {provide: jc, useClass: Lc}, {
                provide: gp,
                useFactory: Mp,
                deps: [wo, jc, _p, ys, zt, Ii, Qi, cp, kp, [pp, new gt], [lp, new gt]]
            }, _p, {provide: sh, useFactory: Vp, deps: [gp]}, {provide: Ii, useClass: xo}, xp, Ep, Sp, {
                provide: kp,
                useValue: {enableTracing: !1}
            }];

        function Tp() {
            return new yo("Router", gp)
        }

        var Ip = function () {
            function t(t, e) {
            }

            var e;
            return e = t, t.forRoot = function (t, n) {
                return {
                    ngModule: e,
                    providers: [Pp, Bp(t), {provide: Op, useFactory: Dp, deps: [[gp, new gt, new _t]]}, {
                        provide: kp,
                        useValue: n || {}
                    }, {provide: ds, useFactory: Np, deps: [ps, [new yt(ms), new gt], kp]}, {
                        provide: Ap,
                        useFactory: Rp,
                        deps: [gp, Qs, kp]
                    }, {provide: Cp, useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : Ep}, {
                        provide: yo,
                        multi: !0,
                        useFactory: Tp
                    }, [Fp, {provide: Ri, multi: !0, useFactory: jp, deps: [Fp]}, {
                        provide: zp,
                        useFactory: Lp,
                        deps: [Fp]
                    }, {provide: ji, multi: !0, useExisting: zp}]]
                }
            }, t.forChild = function (t) {
                return {ngModule: e, providers: [Bp(t)]}
            }, t
        }();

        function Rp(t, e, n) {
            return n.scrollOffset && e.setOffset(n.scrollOffset), new Ap(t, e, n)
        }

        function Np(t, e, n) {
            return void 0 === n && (n = {}), n.useHash ? new vs(t, e) : new _s(t, e)
        }

        function Dp(t) {
            if (t) throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
            return "guarded"
        }

        function Bp(t) {
            return [{provide: ne, multi: !0, useValue: t}, {provide: cp, multi: !0, useValue: t}]
        }

        function Mp(t, e, n, r, i, o, a, s, l, u, c) {
            void 0 === l && (l = {});
            var h = new gp(null, e, n, r, i, o, a, Pc(s));
            if (u && (h.urlHandlingStrategy = u), c && (h.routeReuseStrategy = c), l.errorHandler && (h.errorHandler = l.errorHandler), l.malformedUriErrorHandler && (h.malformedUriErrorHandler = l.malformedUriErrorHandler), l.enableTracing) {
                var p = Gl();
                h.events.subscribe(function (t) {
                    p.logGroup("Router Event: " + t.constructor.name), p.log(t.toString()), p.log(t), p.logGroupEnd()
                })
            }
            return l.onSameUrlNavigation && (h.onSameUrlNavigation = l.onSameUrlNavigation), l.paramsInheritanceStrategy && (h.paramsInheritanceStrategy = l.paramsInheritanceStrategy), l.urlUpdateStrategy && (h.urlUpdateStrategy = l.urlUpdateStrategy), l.relativeLinkResolution && (h.relativeLinkResolution = l.relativeLinkResolution), h
        }

        function Vp(t) {
            return t.routerState.root
        }

        var Fp = function () {
            function t(t) {
                this.injector = t, this.initNavigation = !1, this.resultOfPreactivationDone = new B
            }

            return t.prototype.appInitializer = function () {
                var t = this;
                return this.injector.get(fs, Promise.resolve(null)).then(function () {
                    var e = null, n = new Promise(function (t) {
                        return e = t
                    }), r = t.injector.get(gp), i = t.injector.get(kp);
                    if (t.isLegacyDisabled(i) || t.isLegacyEnabled(i)) e(!0); else if ("disabled" === i.initialNavigation) r.setUpLocationChangeListener(), e(!0); else {
                        if ("enabled" !== i.initialNavigation) throw new Error("Invalid initialNavigation options: '" + i.initialNavigation + "'");
                        r.hooks.afterPreactivation = function () {
                            return t.initNavigation ? Js(null) : (t.initNavigation = !0, e(!0), t.resultOfPreactivationDone)
                        }, r.initialNavigation()
                    }
                    return n
                })
            }, t.prototype.bootstrapListener = function (t) {
                var e = this.injector.get(kp), n = this.injector.get(xp), r = this.injector.get(Ap),
                    i = this.injector.get(gp),
                    o = this.injector.get(wo);
                t === o.components[0] && (this.isLegacyEnabled(e) ? i.initialNavigation() : this.isLegacyDisabled(e) && i.setUpLocationChangeListener(), n.setUpPreloading(), r.init(), i.resetRootComponentType(o.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete())
            }, t.prototype.isLegacyEnabled = function (t) {
                return "legacy_enabled" === t.initialNavigation || !0 === t.initialNavigation || void 0 === t.initialNavigation
            }, t.prototype.isLegacyDisabled = function (t) {
                return "legacy_disabled" === t.initialNavigation || !1 === t.initialNavigation
            }, t
        }();

        function jp(t) {
            return t.appInitializer.bind(t)
        }

        function Lp(t) {
            return t.bootstrapListener.bind(t)
        }

        var zp = new Mt("Router Initializer"), Up = tr({encapsulation: 2, styles: [], data: {}});

        function Hp(t) {
            return ra(0, [(t()(), zo(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), hi(1, 212992, null, 0, bp, [_p, Bn, en, [8, null], On], null, null)], function (t, e) {
                t(e, 1, 0)
            }, null)
        }

        function qp(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 1, "ng-component", [], null, null, null, Hp, Up)), hi(1, 49152, null, 0, yc, [], null, null)], null, null)
        }

        var Gp = zr("ng-component", yc, qp, {}, {}, []), Wp = function () {
            function t() {
            }

            return t.prototype.ngOnInit = function () {
            }, t
        }(), Kp = tr({
            encapsulation: 0,
            styles: [["img[_ngcontent-%COMP%]{position:relative;border:1px solid #ddd;border-radius:4px;padding:5px;width:100%;height:100%}body[_ngcontent-%COMP%]{display:flex;min-height:100vh;flex-direction:column}"]],
            data: {}
        });

        function Qp(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 7, "body", [], null, null, null, null, null)), (t()(), zo(1, 0, null, null, 6, "div", [["class", "container1"]], null, null, null, null, null)), (t()(), zo(2, 0, null, null, 5, "div", [["class", "container"]], null, null, null, null, null)), (t()(), zo(3, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (t()(), zo(4, 0, null, null, 1, "div", [["class", "col-sm"]], null, null, null, null, null)), (t()(), zo(5, 0, null, null, 0, "img", [["alt", "Responsive image"], ["class", "img-fluid"], ["src", "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"]], null, null, null, null, null)), (t()(), zo(6, 0, null, null, 1, "div", [["class", "col-sm"]], null, null, null, null, null)), (t()(), zo(7, 0, null, null, 0, "img", [["alt", "Responsive image"], ["class", "img-fluid"], ["src", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1404&q=80"]], null, null, null, null, null))], null, null)
        }

        function Zp(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 1, "app-body", [], null, null, null, Qp, Kp)), hi(1, 114688, null, 0, Wp, [], null, null)], function (t, e) {
                t(e, 1, 0)
            }, null)
        }

        var Yp = zr("app-body", Wp, Zp, {}, {}, []), $p = function (t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                r.sources = n, r.completed = 0, r.haveValues = 0;
                var i = n.length;
                r.values = new Array(i);
                for (var o = 0; o < i; o++) {
                    var a = Q(r, n[o], null, o);
                    a && r.add(a)
                }
                return r
            }

            return i(e, t), e.prototype.notifyNext = function (t, e, n, r, i) {
                this.values[n] = e, i._hasValue || (i._hasValue = !0, this.haveValues++)
            }, e.prototype.notifyComplete = function (t) {
                var e = this.destination, n = this.haveValues, r = this.values, i = r.length;
                t._hasValue ? (this.completed++, this.completed === i && (n === i && e.next(r), e.complete())) : e.complete()
            }, e
        }(Z), Xp = new Mt("NgValueAccessor"), Jp = function () {
            function t(t, e) {
                this._renderer = t, this._elementRef = e, this.onChange = function (t) {
                }, this.onTouched = function () {
                }
            }

            return t.prototype.writeValue = function (t) {
                this._renderer.setProperty(this._elementRef.nativeElement, "checked", t)
            }, t.prototype.registerOnChange = function (t) {
                this.onChange = t
            }, t.prototype.registerOnTouched = function (t) {
                this.onTouched = t
            }, t.prototype.setDisabledState = function (t) {
                this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
            }, t
        }(), tf = new Mt("CompositionEventMode"), ef = function () {
            function t(t, e, n) {
                var r;
                this._renderer = t, this._elementRef = e, this._compositionMode = n, this.onChange = function (t) {
                }, this.onTouched = function () {
                }, this._composing = !1, null == this._compositionMode && (this._compositionMode = (r = Gl() ? Gl().getUserAgent() : "", !/android (\d+)/.test(r.toLowerCase())))
            }

            return t.prototype.writeValue = function (t) {
                this._renderer.setProperty(this._elementRef.nativeElement, "value", null == t ? "" : t)
            }, t.prototype.registerOnChange = function (t) {
                this.onChange = t
            }, t.prototype.registerOnTouched = function (t) {
                this.onTouched = t
            }, t.prototype.setDisabledState = function (t) {
                this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
            }, t.prototype._handleInput = function (t) {
                (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(t)
            }, t.prototype._compositionStart = function () {
                this._composing = !0
            }, t.prototype._compositionEnd = function (t) {
                this._composing = !1, this._compositionMode && this.onChange(t)
            }, t
        }(), nf = function () {
            function t() {
            }

            return Object.defineProperty(t.prototype, "value", {
                get: function () {
                    return this.control ? this.control.value : null
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "valid", {
                get: function () {
                    return this.control ? this.control.valid : null
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "invalid", {
                get: function () {
                    return this.control ? this.control.invalid : null
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "pending", {
                get: function () {
                    return this.control ? this.control.pending : null
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "disabled", {
                get: function () {
                    return this.control ? this.control.disabled : null
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "enabled", {
                get: function () {
                    return this.control ? this.control.enabled : null
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "errors", {
                get: function () {
                    return this.control ? this.control.errors : null
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "pristine", {
                get: function () {
                    return this.control ? this.control.pristine : null
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "dirty", {
                get: function () {
                    return this.control ? this.control.dirty : null
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "touched", {
                get: function () {
                    return this.control ? this.control.touched : null
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "status", {
                get: function () {
                    return this.control ? this.control.status : null
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "untouched", {
                get: function () {
                    return this.control ? this.control.untouched : null
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "statusChanges", {
                get: function () {
                    return this.control ? this.control.statusChanges : null
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "valueChanges", {
                get: function () {
                    return this.control ? this.control.valueChanges : null
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "path", {
                get: function () {
                    return null
                }, enumerable: !0, configurable: !0
            }), t.prototype.reset = function (t) {
                void 0 === t && (t = void 0), this.control && this.control.reset(t)
            }, t.prototype.hasError = function (t, e) {
                return !!this.control && this.control.hasError(t, e)
            }, t.prototype.getError = function (t, e) {
                return this.control ? this.control.getError(t, e) : null
            }, t
        }(), rf = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), Object.defineProperty(e.prototype, "formDirective", {
                get: function () {
                    return null
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "path", {
                get: function () {
                    return null
                }, enumerable: !0, configurable: !0
            }), e
        }(nf);

        function of() {
            throw new Error("unimplemented")
        }

        var af = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._parent = null, e.name = null, e.valueAccessor = null, e._rawValidators = [], e._rawAsyncValidators = [], e
            }

            return i(e, t), Object.defineProperty(e.prototype, "validator", {
                get: function () {
                    return of()
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "asyncValidator", {
                get: function () {
                    return of()
                }, enumerable: !0, configurable: !0
            }), e
        }(nf), sf = function () {
            function t(t) {
                this._cd = t
            }

            return Object.defineProperty(t.prototype, "ngClassUntouched", {
                get: function () {
                    return !!this._cd.control && this._cd.control.untouched
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "ngClassTouched", {
                get: function () {
                    return !!this._cd.control && this._cd.control.touched
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "ngClassPristine", {
                get: function () {
                    return !!this._cd.control && this._cd.control.pristine
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "ngClassDirty", {
                get: function () {
                    return !!this._cd.control && this._cd.control.dirty
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "ngClassValid", {
                get: function () {
                    return !!this._cd.control && this._cd.control.valid
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "ngClassInvalid", {
                get: function () {
                    return !!this._cd.control && this._cd.control.invalid
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "ngClassPending", {
                get: function () {
                    return !!this._cd.control && this._cd.control.pending
                }, enumerable: !0, configurable: !0
            }), t
        }(), lf = function (t) {
            function e(e) {
                return t.call(this, e) || this
            }

            return i(e, t), e
        }(sf), uf = function (t) {
            function e(e) {
                return t.call(this, e) || this
            }

            return i(e, t), e
        }(sf);

        function cf(t) {
            return null == t || 0 === t.length
        }

        var hf = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
            pf = function () {
                function t() {
                }

                return t.min = function (t) {
                    return function (e) {
                        if (cf(e.value) || cf(t)) return null;
                        var n = parseFloat(e.value);
                        return !isNaN(n) && n < t ? {min: {min: t, actual: e.value}} : null
                    }
                }, t.max = function (t) {
                    return function (e) {
                        if (cf(e.value) || cf(t)) return null;
                        var n = parseFloat(e.value);
                        return !isNaN(n) && n > t ? {max: {max: t, actual: e.value}} : null
                    }
                }, t.required = function (t) {
                    return cf(t.value) ? {required: !0} : null
                }, t.requiredTrue = function (t) {
                    return !0 === t.value ? null : {required: !0}
                }, t.email = function (t) {
                    return cf(t.value) ? null : hf.test(t.value) ? null : {email: !0}
                }, t.minLength = function (t) {
                    return function (e) {
                        if (cf(e.value)) return null;
                        var n = e.value ? e.value.length : 0;
                        return n < t ? {minlength: {requiredLength: t, actualLength: n}} : null
                    }
                }, t.maxLength = function (t) {
                    return function (e) {
                        var n = e.value ? e.value.length : 0;
                        return n > t ? {maxlength: {requiredLength: t, actualLength: n}} : null
                    }
                }, t.pattern = function (e) {
                    return e ? ("string" == typeof e ? (r = "", "^" !== e.charAt(0) && (r += "^"), r += e, "$" !== e.charAt(e.length - 1) && (r += "$"), n = new RegExp(r)) : (r = e.toString(), n = e), function (t) {
                        if (cf(t.value)) return null;
                        var e = t.value;
                        return n.test(e) ? null : {pattern: {requiredPattern: r, actualValue: e}}
                    }) : t.nullValidator;
                    var n, r
                }, t.nullValidator = function (t) {
                    return null
                }, t.compose = function (t) {
                    if (!t) return null;
                    var e = t.filter(ff);
                    return 0 == e.length ? null : function (t) {
                        return mf(function (t, n) {
                            return e.map(function (e) {
                                return e(t)
                            })
                        }(t))
                    }
                }, t.composeAsync = function (t) {
                    if (!t) return null;
                    var e = t.filter(ff);
                    return 0 == e.length ? null : function (t) {
                        return function t() {
                            for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            return "function" == typeof n[n.length - 1] && (e = n.pop()), 1 === n.length && h(n[0]) && (n = n[0]), 0 === n.length ? Ys : e ? t(n).pipe(Y(function (t) {
                                return e.apply(void 0, t)
                            })) : new P(function (t) {
                                return new $p(t, n)
                            })
                        }(function (t, n) {
                            return e.map(function (e) {
                                return e(t)
                            })
                        }(t).map(df)).pipe(Y(mf))
                    }
                }, t
            }();

        function ff(t) {
            return null != t
        }

        function df(t) {
            var e = je(t) ? tt(t) : t;
            if (!Le(e)) throw new Error("Expected validator to return Promise or Observable.");
            return e
        }

        function mf(t) {
            var e = t.reduce(function (t, e) {
                return null != e ? o({}, t, e) : t
            }, {});
            return 0 === Object.keys(e).length ? null : e
        }

        function yf(t) {
            return t.validate ? function (e) {
                return t.validate(e)
            } : t
        }

        function gf(t) {
            return t.validate ? function (e) {
                return t.validate(e)
            } : t
        }

        var vf = function () {
                function t(t, e) {
                    this._renderer = t, this._elementRef = e, this.onChange = function (t) {
                    }, this.onTouched = function () {
                    }
                }

                return t.prototype.writeValue = function (t) {
                    this._renderer.setProperty(this._elementRef.nativeElement, "value", null == t ? "" : t)
                }, t.prototype.registerOnChange = function (t) {
                    this.onChange = function (e) {
                        t("" == e ? null : parseFloat(e))
                    }
                }, t.prototype.registerOnTouched = function (t) {
                    this.onTouched = t
                }, t.prototype.setDisabledState = function (t) {
                    this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
                }, t
            }(), _f = function () {
                function t() {
                    this._accessors = []
                }

                return t.prototype.add = function (t, e) {
                    this._accessors.push([t, e])
                }, t.prototype.remove = function (t) {
                    for (var e = this._accessors.length - 1; e >= 0; --e) if (this._accessors[e][1] === t) return void this._accessors.splice(e, 1)
                }, t.prototype.select = function (t) {
                    var e = this;
                    this._accessors.forEach(function (n) {
                        e._isSameGroup(n, t) && n[1] !== t && n[1].fireUncheck(t.value)
                    })
                }, t.prototype._isSameGroup = function (t, e) {
                    return !!t[0].control && t[0]._parent === e._control._parent && t[1].name === e.name
                }, t
            }(), bf = function () {
                function t(t, e, n, r) {
                    this._renderer = t, this._elementRef = e, this._registry = n, this._injector = r, this.onChange = function () {
                    }, this.onTouched = function () {
                    }
                }

                return t.prototype.ngOnInit = function () {
                    this._control = this._injector.get(af), this._checkName(), this._registry.add(this._control, this)
                }, t.prototype.ngOnDestroy = function () {
                    this._registry.remove(this)
                }, t.prototype.writeValue = function (t) {
                    this._state = t === this.value, this._renderer.setProperty(this._elementRef.nativeElement, "checked", this._state)
                }, t.prototype.registerOnChange = function (t) {
                    var e = this;
                    this._fn = t, this.onChange = function () {
                        t(e.value), e._registry.select(e)
                    }
                }, t.prototype.fireUncheck = function (t) {
                    this.writeValue(t)
                }, t.prototype.registerOnTouched = function (t) {
                    this.onTouched = t
                }, t.prototype.setDisabledState = function (t) {
                    this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
                }, t.prototype._checkName = function () {
                    this.name && this.formControlName && this.name !== this.formControlName && this._throwNameError(), !this.name && this.formControlName && (this.name = this.formControlName)
                }, t.prototype._throwNameError = function () {
                    throw new Error('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ')
                }, t
            }(), wf = function () {
                function t(t, e) {
                    this._renderer = t, this._elementRef = e, this.onChange = function (t) {
                    }, this.onTouched = function () {
                    }
                }

                return t.prototype.writeValue = function (t) {
                    this._renderer.setProperty(this._elementRef.nativeElement, "value", parseFloat(t))
                }, t.prototype.registerOnChange = function (t) {
                    this.onChange = function (e) {
                        t("" == e ? null : parseFloat(e))
                    }
                }, t.prototype.registerOnTouched = function (t) {
                    this.onTouched = t
                }, t.prototype.setDisabledState = function (t) {
                    this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
                }, t
            }(),
            Cf = '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',
            Sf = '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',
            Ef = '\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>',
            xf = function () {
                function t() {
                }

                return t.controlParentException = function () {
                    throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Cf)
                }, t.ngModelGroupException = function () {
                    throw new Error('formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ' + Sf + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + Ef)
                }, t.missingFormException = function () {
                    throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + Cf)
                }, t.groupParentException = function () {
                    throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Sf)
                }, t.arrayParentException = function () {
                    throw new Error('formArrayName must be used with a parent formGroup directive.  You\'ll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        \n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });')
                }, t.disabledAttrWarning = function () {
                    console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ")
                }, t.ngModelWarning = function (t) {
                    console.warn("\n    It looks like you're using ngModel on the same form field as " + t + ". \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/" + ("formControl" === t ? "FormControlDirective" : "FormControlName") + "#use-with-ngmodel\n    ")
                }, t
            }();

        function Af(t, e) {
            return c(e.path, [t])
        }

        function kf(t, e) {
            t || If(e, "Cannot find control with"), e.valueAccessor || If(e, "No value accessor for form control with"), t.validator = pf.compose([t.validator, e.validator]), t.asyncValidator = pf.composeAsync([t.asyncValidator, e.asyncValidator]), e.valueAccessor.writeValue(t.value), function (t, e) {
                e.valueAccessor.registerOnChange(function (n) {
                    t._pendingValue = n, t._pendingChange = !0, t._pendingDirty = !0, "change" === t.updateOn && Of(t, e)
                })
            }(t, e), function (t, e) {
                t.registerOnChange(function (t, n) {
                    e.valueAccessor.writeValue(t), n && e.viewToModelUpdate(t)
                })
            }(t, e), function (t, e) {
                e.valueAccessor.registerOnTouched(function () {
                    t._pendingTouched = !0, "blur" === t.updateOn && t._pendingChange && Of(t, e), "submit" !== t.updateOn && t.markAsTouched()
                })
            }(t, e), e.valueAccessor.setDisabledState && t.registerOnDisabledChange(function (t) {
                e.valueAccessor.setDisabledState(t)
            }), e._rawValidators.forEach(function (e) {
                e.registerOnValidatorChange && e.registerOnValidatorChange(function () {
                    return t.updateValueAndValidity()
                })
            }), e._rawAsyncValidators.forEach(function (e) {
                e.registerOnValidatorChange && e.registerOnValidatorChange(function () {
                    return t.updateValueAndValidity()
                })
            })
        }

        function Of(t, e) {
            t._pendingDirty && t.markAsDirty(), t.setValue(t._pendingValue, {emitModelToViewChange: !1}), e.viewToModelUpdate(t._pendingValue), t._pendingChange = !1
        }

        function Pf(t, e) {
            null == t && If(e, "Cannot find control with"), t.validator = pf.compose([t.validator, e.validator]), t.asyncValidator = pf.composeAsync([t.asyncValidator, e.asyncValidator])
        }

        function Tf(t) {
            return If(t, "There is no FormControl instance attached to form control element with")
        }

        function If(t, e) {
            var n;
            throw n = t.path.length > 1 ? "path: '" + t.path.join(" -> ") + "'" : t.path[0] ? "name: '" + t.path + "'" : "unspecified name attribute", new Error(e + " " + n)
        }

        function Rf(t) {
            return null != t ? pf.compose(t.map(yf)) : null
        }

        function Nf(t) {
            return null != t ? pf.composeAsync(t.map(gf)) : null
        }

        function Df(t, e) {
            if (!t.hasOwnProperty("model")) return !1;
            var n = t.model;
            return !!n.isFirstChange() || !He(e, n.currentValue)
        }

        var Bf = [Jp, wf, vf, function () {
            function t(t, e) {
                this._renderer = t, this._elementRef = e, this._optionMap = new Map, this._idCounter = 0, this.onChange = function (t) {
                }, this.onTouched = function () {
                }, this._compareWith = He
            }

            return Object.defineProperty(t.prototype, "compareWith", {
                set: function (t) {
                    if ("function" != typeof t) throw new Error("compareWith must be a function, but received " + JSON.stringify(t));
                    this._compareWith = t
                }, enumerable: !0, configurable: !0
            }), t.prototype.writeValue = function (t) {
                this.value = t;
                var e = this._getOptionId(t);
                null == e && this._renderer.setProperty(this._elementRef.nativeElement, "selectedIndex", -1);
                var n = function (t, e) {
                    return null == t ? "" + e : (e && "object" == typeof e && (e = "Object"), (t + ": " + e).slice(0, 50))
                }(e, t);
                this._renderer.setProperty(this._elementRef.nativeElement, "value", n)
            }, t.prototype.registerOnChange = function (t) {
                var e = this;
                this.onChange = function (n) {
                    e.value = e._getOptionValue(n), t(e.value)
                }
            }, t.prototype.registerOnTouched = function (t) {
                this.onTouched = t
            }, t.prototype.setDisabledState = function (t) {
                this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
            }, t.prototype._registerOption = function () {
                return (this._idCounter++).toString()
            }, t.prototype._getOptionId = function (t) {
                var e, n;
                try {
                    for (var r = l(Array.from(this._optionMap.keys())), i = r.next(); !i.done; i = r.next()) {
                        var o = i.value;
                        if (this._compareWith(this._optionMap.get(o), t)) return o
                    }
                } catch (a) {
                    e = {error: a}
                } finally {
                    try {
                        i && !i.done && (n = r.return) && n.call(r)
                    } finally {
                        if (e) throw e.error
                    }
                }
                return null
            }, t.prototype._getOptionValue = function (t) {
                var e = function (t) {
                    return t.split(":")[0]
                }(t);
                return this._optionMap.has(e) ? this._optionMap.get(e) : t
            }, t
        }(), function () {
            function t(t, e) {
                this._renderer = t, this._elementRef = e, this._optionMap = new Map, this._idCounter = 0, this.onChange = function (t) {
                }, this.onTouched = function () {
                }, this._compareWith = He
            }

            return Object.defineProperty(t.prototype, "compareWith", {
                set: function (t) {
                    if ("function" != typeof t) throw new Error("compareWith must be a function, but received " + JSON.stringify(t));
                    this._compareWith = t
                }, enumerable: !0, configurable: !0
            }), t.prototype.writeValue = function (t) {
                var e, n = this;
                if (this.value = t, Array.isArray(t)) {
                    var r = t.map(function (t) {
                        return n._getOptionId(t)
                    });
                    e = function (t, e) {
                        t._setSelected(r.indexOf(e.toString()) > -1)
                    }
                } else e = function (t, e) {
                    t._setSelected(!1)
                };
                this._optionMap.forEach(e)
            }, t.prototype.registerOnChange = function (t) {
                var e = this;
                this.onChange = function (n) {
                    var r = [];
                    if (n.hasOwnProperty("selectedOptions")) for (var i = n.selectedOptions, o = 0; o < i.length; o++) {
                        var a = i.item(o), s = e._getOptionValue(a.value);
                        r.push(s)
                    } else for (i = n.options, o = 0; o < i.length; o++) (a = i.item(o)).selected && (s = e._getOptionValue(a.value), r.push(s));
                    e.value = r, t(r)
                }
            }, t.prototype.registerOnTouched = function (t) {
                this.onTouched = t
            }, t.prototype.setDisabledState = function (t) {
                this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
            }, t.prototype._registerOption = function (t) {
                var e = (this._idCounter++).toString();
                return this._optionMap.set(e, t), e
            }, t.prototype._getOptionId = function (t) {
                var e, n;
                try {
                    for (var r = l(Array.from(this._optionMap.keys())), i = r.next(); !i.done; i = r.next()) {
                        var o = i.value;
                        if (this._compareWith(this._optionMap.get(o)._value, t)) return o
                    }
                } catch (a) {
                    e = {error: a}
                } finally {
                    try {
                        i && !i.done && (n = r.return) && n.call(r)
                    } finally {
                        if (e) throw e.error
                    }
                }
                return null
            }, t.prototype._getOptionValue = function (t) {
                var e = function (t) {
                    return t.split(":")[0]
                }(t);
                return this._optionMap.has(e) ? this._optionMap.get(e)._value : t
            }, t
        }(), bf];

        function Mf(t, e) {
            t._syncPendingControls(), e.forEach(function (t) {
                var e = t.control;
                "submit" === e.updateOn && e._pendingChange && (t.viewToModelUpdate(e._pendingValue), e._pendingChange = !1)
            })
        }

        function Vf(t, e) {
            if (!e) return null;
            Array.isArray(e) || If(t, "Value accessor was not provided as an array for form control with");
            var n = void 0, r = void 0, i = void 0;
            return e.forEach(function (e) {
                var o;
                e.constructor === ef ? n = e : (o = e, Bf.some(function (t) {
                    return o.constructor === t
                }) ? (r && If(t, "More than one built-in value accessor matches form control with"), r = e) : (i && If(t, "More than one custom value accessor matches form control with"), i = e))
            }), i || r || n || (If(t, "No valid value accessor for form control with"), null)
        }

        function Ff(t, e) {
            var n = t.indexOf(e);
            n > -1 && t.splice(n, 1)
        }

        function jf(t) {
            var e = zf(t) ? t.validators : t;
            return Array.isArray(e) ? Rf(e) : e || null
        }

        function Lf(t, e) {
            var n = zf(e) ? e.asyncValidators : t;
            return Array.isArray(n) ? Nf(n) : n || null
        }

        function zf(t) {
            return null != t && !Array.isArray(t) && "object" == typeof t
        }

        var Uf = function () {
            function t(t, e) {
                this.validator = t, this.asyncValidator = e, this._onCollectionChange = function () {
                }, this.pristine = !0, this.touched = !1, this._onDisabledChange = []
            }

            return Object.defineProperty(t.prototype, "parent", {
                get: function () {
                    return this._parent
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "valid", {
                get: function () {
                    return "VALID" === this.status
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "invalid", {
                get: function () {
                    return "INVALID" === this.status
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "pending", {
                get: function () {
                    return "PENDING" == this.status
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "disabled", {
                get: function () {
                    return "DISABLED" === this.status
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "enabled", {
                get: function () {
                    return "DISABLED" !== this.status
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "dirty", {
                get: function () {
                    return !this.pristine
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "untouched", {
                get: function () {
                    return !this.touched
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "updateOn", {
                get: function () {
                    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change"
                }, enumerable: !0, configurable: !0
            }), t.prototype.setValidators = function (t) {
                this.validator = jf(t)
            }, t.prototype.setAsyncValidators = function (t) {
                this.asyncValidator = Lf(t)
            }, t.prototype.clearValidators = function () {
                this.validator = null
            }, t.prototype.clearAsyncValidators = function () {
                this.asyncValidator = null
            }, t.prototype.markAsTouched = function (t) {
                void 0 === t && (t = {}), this.touched = !0, this._parent && !t.onlySelf && this._parent.markAsTouched(t)
            }, t.prototype.markAllAsTouched = function () {
                this.markAsTouched({onlySelf: !0}), this._forEachChild(function (t) {
                    return t.markAllAsTouched()
                })
            }, t.prototype.markAsUntouched = function (t) {
                void 0 === t && (t = {}), this.touched = !1, this._pendingTouched = !1, this._forEachChild(function (t) {
                    t.markAsUntouched({onlySelf: !0})
                }), this._parent && !t.onlySelf && this._parent._updateTouched(t)
            }, t.prototype.markAsDirty = function (t) {
                void 0 === t && (t = {}), this.pristine = !1, this._parent && !t.onlySelf && this._parent.markAsDirty(t)
            }, t.prototype.markAsPristine = function (t) {
                void 0 === t && (t = {}), this.pristine = !0, this._pendingDirty = !1, this._forEachChild(function (t) {
                    t.markAsPristine({onlySelf: !0})
                }), this._parent && !t.onlySelf && this._parent._updatePristine(t)
            }, t.prototype.markAsPending = function (t) {
                void 0 === t && (t = {}), this.status = "PENDING", !1 !== t.emitEvent && this.statusChanges.emit(this.status), this._parent && !t.onlySelf && this._parent.markAsPending(t)
            }, t.prototype.disable = function (t) {
                void 0 === t && (t = {});
                var e = this._parentMarkedDirty(t.onlySelf);
                this.status = "DISABLED", this.errors = null, this._forEachChild(function (e) {
                    e.disable(o({}, t, {onlySelf: !0}))
                }), this._updateValue(), !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._updateAncestors(o({}, t, {skipPristineCheck: e})), this._onDisabledChange.forEach(function (t) {
                    return t(!0)
                })
            }, t.prototype.enable = function (t) {
                void 0 === t && (t = {});
                var e = this._parentMarkedDirty(t.onlySelf);
                this.status = "VALID", this._forEachChild(function (e) {
                    e.enable(o({}, t, {onlySelf: !0}))
                }), this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: t.emitEvent
                }), this._updateAncestors(o({}, t, {skipPristineCheck: e})), this._onDisabledChange.forEach(function (t) {
                    return t(!1)
                })
            }, t.prototype._updateAncestors = function (t) {
                this._parent && !t.onlySelf && (this._parent.updateValueAndValidity(t), t.skipPristineCheck || this._parent._updatePristine(), this._parent._updateTouched())
            }, t.prototype.setParent = function (t) {
                this._parent = t
            }, t.prototype.updateValueAndValidity = function (t) {
                void 0 === t && (t = {}), this._setInitialStatus(), this._updateValue(), this.enabled && (this._cancelExistingSubscription(), this.errors = this._runValidator(), this.status = this._calculateStatus(), "VALID" !== this.status && "PENDING" !== this.status || this._runAsyncValidator(t.emitEvent)), !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._parent && !t.onlySelf && this._parent.updateValueAndValidity(t)
            }, t.prototype._updateTreeValidity = function (t) {
                void 0 === t && (t = {emitEvent: !0}), this._forEachChild(function (e) {
                    return e._updateTreeValidity(t)
                }), this.updateValueAndValidity({onlySelf: !0, emitEvent: t.emitEvent})
            }, t.prototype._setInitialStatus = function () {
                this.status = this._allControlsDisabled() ? "DISABLED" : "VALID"
            }, t.prototype._runValidator = function () {
                return this.validator ? this.validator(this) : null
            }, t.prototype._runAsyncValidator = function (t) {
                var e = this;
                if (this.asyncValidator) {
                    this.status = "PENDING";
                    var n = df(this.asyncValidator(this));
                    this._asyncValidationSubscription = n.subscribe(function (n) {
                        return e.setErrors(n, {emitEvent: t})
                    })
                }
            }, t.prototype._cancelExistingSubscription = function () {
                this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe()
            }, t.prototype.setErrors = function (t, e) {
                void 0 === e && (e = {}), this.errors = t, this._updateControlsErrors(!1 !== e.emitEvent)
            }, t.prototype.get = function (t) {
                return function (t, e, n) {
                    return null == e ? null : (e instanceof Array || (e = e.split(".")), e instanceof Array && 0 === e.length ? null : e.reduce(function (t, e) {
                        return t instanceof qf ? t.controls.hasOwnProperty(e) ? t.controls[e] : null : t instanceof Gf && t.at(e) || null
                    }, t))
                }(this, t)
            }, t.prototype.getError = function (t, e) {
                var n = e ? this.get(e) : this;
                return n && n.errors ? n.errors[t] : null
            }, t.prototype.hasError = function (t, e) {
                return !!this.getError(t, e)
            }, Object.defineProperty(t.prototype, "root", {
                get: function () {
                    for (var t = this; t._parent;) t = t._parent;
                    return t
                }, enumerable: !0, configurable: !0
            }), t.prototype._updateControlsErrors = function (t) {
                this.status = this._calculateStatus(), t && this.statusChanges.emit(this.status), this._parent && this._parent._updateControlsErrors(t)
            }, t.prototype._initObservables = function () {
                this.valueChanges = new Pi, this.statusChanges = new Pi
            }, t.prototype._calculateStatus = function () {
                return this._allControlsDisabled() ? "DISABLED" : this.errors ? "INVALID" : this._anyControlsHaveStatus("PENDING") ? "PENDING" : this._anyControlsHaveStatus("INVALID") ? "INVALID" : "VALID"
            }, t.prototype._anyControlsHaveStatus = function (t) {
                return this._anyControls(function (e) {
                    return e.status === t
                })
            }, t.prototype._anyControlsDirty = function () {
                return this._anyControls(function (t) {
                    return t.dirty
                })
            }, t.prototype._anyControlsTouched = function () {
                return this._anyControls(function (t) {
                    return t.touched
                })
            }, t.prototype._updatePristine = function (t) {
                void 0 === t && (t = {}), this.pristine = !this._anyControlsDirty(), this._parent && !t.onlySelf && this._parent._updatePristine(t)
            }, t.prototype._updateTouched = function (t) {
                void 0 === t && (t = {}), this.touched = this._anyControlsTouched(), this._parent && !t.onlySelf && this._parent._updateTouched(t)
            }, t.prototype._isBoxedValue = function (t) {
                return "object" == typeof t && null !== t && 2 === Object.keys(t).length && "value" in t && "disabled" in t
            }, t.prototype._registerOnCollectionChange = function (t) {
                this._onCollectionChange = t
            }, t.prototype._setUpdateStrategy = function (t) {
                zf(t) && null != t.updateOn && (this._updateOn = t.updateOn)
            }, t.prototype._parentMarkedDirty = function (t) {
                return !t && this._parent && this._parent.dirty && !this._parent._anyControlsDirty()
            }, t
        }(), Hf = function (t) {
            function e(e, n, r) {
                void 0 === e && (e = null);
                var i = t.call(this, jf(n), Lf(r, n)) || this;
                return i._onChange = [], i._applyFormState(e), i._setUpdateStrategy(n), i.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: !1
                }), i._initObservables(), i
            }

            return i(e, t), e.prototype.setValue = function (t, e) {
                var n = this;
                void 0 === e && (e = {}), this.value = this._pendingValue = t, this._onChange.length && !1 !== e.emitModelToViewChange && this._onChange.forEach(function (t) {
                    return t(n.value, !1 !== e.emitViewToModelChange)
                }), this.updateValueAndValidity(e)
            }, e.prototype.patchValue = function (t, e) {
                void 0 === e && (e = {}), this.setValue(t, e)
            }, e.prototype.reset = function (t, e) {
                void 0 === t && (t = null), void 0 === e && (e = {}), this._applyFormState(t), this.markAsPristine(e), this.markAsUntouched(e), this.setValue(this.value, e), this._pendingChange = !1
            }, e.prototype._updateValue = function () {
            }, e.prototype._anyControls = function (t) {
                return !1
            }, e.prototype._allControlsDisabled = function () {
                return this.disabled
            }, e.prototype.registerOnChange = function (t) {
                this._onChange.push(t)
            }, e.prototype._clearChangeFns = function () {
                this._onChange = [], this._onDisabledChange = [], this._onCollectionChange = function () {
                }
            }, e.prototype.registerOnDisabledChange = function (t) {
                this._onDisabledChange.push(t)
            }, e.prototype._forEachChild = function (t) {
            }, e.prototype._syncPendingControls = function () {
                return !("submit" !== this.updateOn || (this._pendingDirty && this.markAsDirty(), this._pendingTouched && this.markAsTouched(), !this._pendingChange) || (this.setValue(this._pendingValue, {
                    onlySelf: !0,
                    emitModelToViewChange: !1
                }), 0))
            }, e.prototype._applyFormState = function (t) {
                this._isBoxedValue(t) ? (this.value = this._pendingValue = t.value, t.disabled ? this.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }) : this.enable({onlySelf: !0, emitEvent: !1})) : this.value = this._pendingValue = t
            }, e
        }(Uf), qf = function (t) {
            function e(e, n, r) {
                var i = t.call(this, jf(n), Lf(r, n)) || this;
                return i.controls = e, i._initObservables(), i._setUpdateStrategy(n), i._setUpControls(), i.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: !1
                }), i
            }

            return i(e, t), e.prototype.registerControl = function (t, e) {
                return this.controls[t] ? this.controls[t] : (this.controls[t] = e, e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange), e)
            }, e.prototype.addControl = function (t, e) {
                this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange()
            }, e.prototype.removeControl = function (t) {
                this.controls[t] && this.controls[t]._registerOnCollectionChange(function () {
                }), delete this.controls[t], this.updateValueAndValidity(), this._onCollectionChange()
            }, e.prototype.setControl = function (t, e) {
                this.controls[t] && this.controls[t]._registerOnCollectionChange(function () {
                }), delete this.controls[t], e && this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange()
            }, e.prototype.contains = function (t) {
                return this.controls.hasOwnProperty(t) && this.controls[t].enabled
            }, e.prototype.setValue = function (t, e) {
                var n = this;
                void 0 === e && (e = {}), this._checkAllValuesPresent(t), Object.keys(t).forEach(function (r) {
                    n._throwIfControlMissing(r), n.controls[r].setValue(t[r], {onlySelf: !0, emitEvent: e.emitEvent})
                }), this.updateValueAndValidity(e)
            }, e.prototype.patchValue = function (t, e) {
                var n = this;
                void 0 === e && (e = {}), Object.keys(t).forEach(function (r) {
                    n.controls[r] && n.controls[r].patchValue(t[r], {onlySelf: !0, emitEvent: e.emitEvent})
                }), this.updateValueAndValidity(e)
            }, e.prototype.reset = function (t, e) {
                void 0 === t && (t = {}), void 0 === e && (e = {}), this._forEachChild(function (n, r) {
                    n.reset(t[r], {onlySelf: !0, emitEvent: e.emitEvent})
                }), this._updatePristine(e), this._updateTouched(e), this.updateValueAndValidity(e)
            }, e.prototype.getRawValue = function () {
                return this._reduceChildren({}, function (t, e, n) {
                    return t[n] = e instanceof Hf ? e.value : e.getRawValue(), t
                })
            }, e.prototype._syncPendingControls = function () {
                var t = this._reduceChildren(!1, function (t, e) {
                    return !!e._syncPendingControls() || t
                });
                return t && this.updateValueAndValidity({onlySelf: !0}), t
            }, e.prototype._throwIfControlMissing = function (t) {
                if (!Object.keys(this.controls).length) throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
                if (!this.controls[t]) throw new Error("Cannot find form control with name: " + t + ".")
            }, e.prototype._forEachChild = function (t) {
                var e = this;
                Object.keys(this.controls).forEach(function (n) {
                    return t(e.controls[n], n)
                })
            }, e.prototype._setUpControls = function () {
                var t = this;
                this._forEachChild(function (e) {
                    e.setParent(t), e._registerOnCollectionChange(t._onCollectionChange)
                })
            }, e.prototype._updateValue = function () {
                this.value = this._reduceValue()
            }, e.prototype._anyControls = function (t) {
                var e = this, n = !1;
                return this._forEachChild(function (r, i) {
                    n = n || e.contains(i) && t(r)
                }), n
            }, e.prototype._reduceValue = function () {
                var t = this;
                return this._reduceChildren({}, function (e, n, r) {
                    return (n.enabled || t.disabled) && (e[r] = n.value), e
                })
            }, e.prototype._reduceChildren = function (t, e) {
                var n = t;
                return this._forEachChild(function (t, r) {
                    n = e(n, t, r)
                }), n
            }, e.prototype._allControlsDisabled = function () {
                var t, e;
                try {
                    for (var n = l(Object.keys(this.controls)), r = n.next(); !r.done; r = n.next()) if (this.controls[r.value].enabled) return !1
                } catch (i) {
                    t = {error: i}
                } finally {
                    try {
                        r && !r.done && (e = n.return) && e.call(n)
                    } finally {
                        if (t) throw t.error
                    }
                }
                return Object.keys(this.controls).length > 0 || this.disabled
            }, e.prototype._checkAllValuesPresent = function (t) {
                this._forEachChild(function (e, n) {
                    if (void 0 === t[n]) throw new Error("Must supply a value for form control with name: '" + n + "'.")
                })
            }, e
        }(Uf), Gf = function (t) {
            function e(e, n, r) {
                var i = t.call(this, jf(n), Lf(r, n)) || this;
                return i.controls = e, i._initObservables(), i._setUpdateStrategy(n), i._setUpControls(), i.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: !1
                }), i
            }

            return i(e, t), e.prototype.at = function (t) {
                return this.controls[t]
            }, e.prototype.push = function (t) {
                this.controls.push(t), this._registerControl(t), this.updateValueAndValidity(), this._onCollectionChange()
            }, e.prototype.insert = function (t, e) {
                this.controls.splice(t, 0, e), this._registerControl(e), this.updateValueAndValidity()
            }, e.prototype.removeAt = function (t) {
                this.controls[t] && this.controls[t]._registerOnCollectionChange(function () {
                }), this.controls.splice(t, 1), this.updateValueAndValidity()
            }, e.prototype.setControl = function (t, e) {
                this.controls[t] && this.controls[t]._registerOnCollectionChange(function () {
                }), this.controls.splice(t, 1), e && (this.controls.splice(t, 0, e), this._registerControl(e)), this.updateValueAndValidity(), this._onCollectionChange()
            }, Object.defineProperty(e.prototype, "length", {
                get: function () {
                    return this.controls.length
                }, enumerable: !0, configurable: !0
            }), e.prototype.setValue = function (t, e) {
                var n = this;
                void 0 === e && (e = {}), this._checkAllValuesPresent(t), t.forEach(function (t, r) {
                    n._throwIfControlMissing(r), n.at(r).setValue(t, {onlySelf: !0, emitEvent: e.emitEvent})
                }), this.updateValueAndValidity(e)
            }, e.prototype.patchValue = function (t, e) {
                var n = this;
                void 0 === e && (e = {}), t.forEach(function (t, r) {
                    n.at(r) && n.at(r).patchValue(t, {onlySelf: !0, emitEvent: e.emitEvent})
                }), this.updateValueAndValidity(e)
            }, e.prototype.reset = function (t, e) {
                void 0 === t && (t = []), void 0 === e && (e = {}), this._forEachChild(function (n, r) {
                    n.reset(t[r], {onlySelf: !0, emitEvent: e.emitEvent})
                }), this._updatePristine(e), this._updateTouched(e), this.updateValueAndValidity(e)
            }, e.prototype.getRawValue = function () {
                return this.controls.map(function (t) {
                    return t instanceof Hf ? t.value : t.getRawValue()
                })
            }, e.prototype.clear = function () {
                this.controls.length < 1 || (this._forEachChild(function (t) {
                    return t._registerOnCollectionChange(function () {
                    })
                }), this.controls.splice(0), this.updateValueAndValidity())
            }, e.prototype._syncPendingControls = function () {
                var t = this.controls.reduce(function (t, e) {
                    return !!e._syncPendingControls() || t
                }, !1);
                return t && this.updateValueAndValidity({onlySelf: !0}), t
            }, e.prototype._throwIfControlMissing = function (t) {
                if (!this.controls.length) throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
                if (!this.at(t)) throw new Error("Cannot find form control at index " + t)
            }, e.prototype._forEachChild = function (t) {
                this.controls.forEach(function (e, n) {
                    t(e, n)
                })
            }, e.prototype._updateValue = function () {
                var t = this;
                this.value = this.controls.filter(function (e) {
                    return e.enabled || t.disabled
                }).map(function (t) {
                    return t.value
                })
            }, e.prototype._anyControls = function (t) {
                return this.controls.some(function (e) {
                    return e.enabled && t(e)
                })
            }, e.prototype._setUpControls = function () {
                var t = this;
                this._forEachChild(function (e) {
                    return t._registerControl(e)
                })
            }, e.prototype._checkAllValuesPresent = function (t) {
                this._forEachChild(function (e, n) {
                    if (void 0 === t[n]) throw new Error("Must supply a value for form control at index: " + n + ".")
                })
            }, e.prototype._allControlsDisabled = function () {
                var t, e;
                try {
                    for (var n = l(this.controls), r = n.next(); !r.done; r = n.next()) if (r.value.enabled) return !1
                } catch (i) {
                    t = {error: i}
                } finally {
                    try {
                        r && !r.done && (e = n.return) && e.call(n)
                    } finally {
                        if (t) throw t.error
                    }
                }
                return this.controls.length > 0 || this.disabled
            }, e.prototype._registerControl = function (t) {
                t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange)
            }, e
        }(Uf), Wf = function () {
            return Promise.resolve(null)
        }(), Kf = function (t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.submitted = !1, r._directives = [], r.ngSubmit = new Pi, r.form = new qf({}, Rf(e), Nf(n)), r
            }

            return i(e, t), e.prototype.ngAfterViewInit = function () {
                this._setUpdateStrategy()
            }, Object.defineProperty(e.prototype, "formDirective", {
                get: function () {
                    return this
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "control", {
                get: function () {
                    return this.form
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "path", {
                get: function () {
                    return []
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "controls", {
                get: function () {
                    return this.form.controls
                }, enumerable: !0, configurable: !0
            }), e.prototype.addControl = function (t) {
                var e = this;
                Wf.then(function () {
                    var n = e._findContainer(t.path);
                    t.control = n.registerControl(t.name, t.control), kf(t.control, t), t.control.updateValueAndValidity({emitEvent: !1}), e._directives.push(t)
                })
            }, e.prototype.getControl = function (t) {
                return this.form.get(t.path)
            }, e.prototype.removeControl = function (t) {
                var e = this;
                Wf.then(function () {
                    var n = e._findContainer(t.path);
                    n && n.removeControl(t.name), Ff(e._directives, t)
                })
            }, e.prototype.addFormGroup = function (t) {
                var e = this;
                Wf.then(function () {
                    var n = e._findContainer(t.path), r = new qf({});
                    Pf(r, t), n.registerControl(t.name, r), r.updateValueAndValidity({emitEvent: !1})
                })
            }, e.prototype.removeFormGroup = function (t) {
                var e = this;
                Wf.then(function () {
                    var n = e._findContainer(t.path);
                    n && n.removeControl(t.name)
                })
            }, e.prototype.getFormGroup = function (t) {
                return this.form.get(t.path)
            }, e.prototype.updateModel = function (t, e) {
                var n = this;
                Wf.then(function () {
                    n.form.get(t.path).setValue(e)
                })
            }, e.prototype.setValue = function (t) {
                this.control.setValue(t)
            }, e.prototype.onSubmit = function (t) {
                return this.submitted = !0, Mf(this.form, this._directives), this.ngSubmit.emit(t), !1
            }, e.prototype.onReset = function () {
                this.resetForm()
            }, e.prototype.resetForm = function (t) {
                void 0 === t && (t = void 0), this.form.reset(t), this.submitted = !1
            }, e.prototype._setUpdateStrategy = function () {
                this.options && null != this.options.updateOn && (this.form._updateOn = this.options.updateOn)
            }, e.prototype._findContainer = function (t) {
                return t.pop(), t.length ? this.form.get(t) : this.form
            }, e
        }(rf), Qf = function () {
            function t() {
            }

            return t.modelParentException = function () {
                throw new Error('\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup\'s partner directive "formControlName" instead.  Example:\n\n      ' + Cf + '\n\n      Or, if you\'d like to avoid registering this form control, indicate that it\'s standalone in ngModelOptions:\n\n      Example:\n\n      \n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  ')
            }, t.formGroupNameException = function () {
                throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + Sf + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + Ef)
            }, t.missingNameException = function () {
                throw new Error('If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">')
            }, t.modelGroupParentException = function () {
                throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + Sf + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + Ef)
            }, t.ngFormWarning = function () {
                console.warn("\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    ")
            }, t
        }(), Zf = new Mt("NgFormSelectorWarning"), Yf = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.prototype.ngOnInit = function () {
                this._checkParentType(), this.formDirective.addFormGroup(this)
            }, e.prototype.ngOnDestroy = function () {
                this.formDirective && this.formDirective.removeFormGroup(this)
            }, Object.defineProperty(e.prototype, "control", {
                get: function () {
                    return this.formDirective.getFormGroup(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "path", {
                get: function () {
                    return Af(this.name, this._parent)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "formDirective", {
                get: function () {
                    return this._parent ? this._parent.formDirective : null
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "validator", {
                get: function () {
                    return Rf(this._validators)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "asyncValidator", {
                get: function () {
                    return Nf(this._asyncValidators)
                }, enumerable: !0, configurable: !0
            }), e.prototype._checkParentType = function () {
            }, e
        }(rf), $f = function (t) {
            function e(e, n, r) {
                var i = t.call(this) || this;
                return i._parent = e, i._validators = n, i._asyncValidators = r, i
            }

            var n;
            return i(e, t), n = e, e.prototype._checkParentType = function () {
                this._parent instanceof n || this._parent instanceof Kf || Qf.modelGroupParentException()
            }, e
        }(Yf), Xf = function () {
            return Promise.resolve(null)
        }(), Jf = function (t) {
            function e(e, n, r, i) {
                var o = t.call(this) || this;
                return o.control = new Hf, o._registered = !1, o.update = new Pi, o._parent = e, o._rawValidators = n || [], o._rawAsyncValidators = r || [], o.valueAccessor = Vf(o, i), o
            }

            return i(e, t), e.prototype.ngOnChanges = function (t) {
                this._checkForErrors(), this._registered || this._setUpControl(), "isDisabled" in t && this._updateDisabled(t), Df(t, this.viewModel) && (this._updateValue(this.model), this.viewModel = this.model)
            }, e.prototype.ngOnDestroy = function () {
                this.formDirective && this.formDirective.removeControl(this)
            }, Object.defineProperty(e.prototype, "path", {
                get: function () {
                    return this._parent ? Af(this.name, this._parent) : [this.name]
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "formDirective", {
                get: function () {
                    return this._parent ? this._parent.formDirective : null
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "validator", {
                get: function () {
                    return Rf(this._rawValidators)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "asyncValidator", {
                get: function () {
                    return Nf(this._rawAsyncValidators)
                }, enumerable: !0, configurable: !0
            }), e.prototype.viewToModelUpdate = function (t) {
                this.viewModel = t, this.update.emit(t)
            }, e.prototype._setUpControl = function () {
                this._setUpdateStrategy(), this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this), this._registered = !0
            }, e.prototype._setUpdateStrategy = function () {
                this.options && null != this.options.updateOn && (this.control._updateOn = this.options.updateOn)
            }, e.prototype._isStandalone = function () {
                return !this._parent || !(!this.options || !this.options.standalone)
            }, e.prototype._setUpStandalone = function () {
                kf(this.control, this), this.control.updateValueAndValidity({emitEvent: !1})
            }, e.prototype._checkForErrors = function () {
                this._isStandalone() || this._checkParentType(), this._checkName()
            }, e.prototype._checkParentType = function () {
                !(this._parent instanceof $f) && this._parent instanceof Yf ? Qf.formGroupNameException() : this._parent instanceof $f || this._parent instanceof Kf || Qf.modelParentException()
            }, e.prototype._checkName = function () {
                this.options && this.options.name && (this.name = this.options.name), this._isStandalone() || this.name || Qf.missingNameException()
            }, e.prototype._updateValue = function (t) {
                var e = this;
                Xf.then(function () {
                    e.control.setValue(t, {emitViewToModelChange: !1})
                })
            }, e.prototype._updateDisabled = function (t) {
                var e = this, n = t.isDisabled.currentValue, r = "" === n || n && "false" !== n;
                Xf.then(function () {
                    r && !e.control.disabled ? e.control.disable() : !r && e.control.disabled && e.control.enable()
                })
            }, e
        }(af), td = function () {
            return function () {
            }
        }(), ed = new Mt("NgModelWithFormControlWarning"), nd = function (t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r._validators = e, r._asyncValidators = n, r.submitted = !1, r.directives = [], r.form = null, r.ngSubmit = new Pi, r
            }

            return i(e, t), e.prototype.ngOnChanges = function (t) {
                this._checkFormPresent(), t.hasOwnProperty("form") && (this._updateValidators(), this._updateDomValue(), this._updateRegistrations())
            }, Object.defineProperty(e.prototype, "formDirective", {
                get: function () {
                    return this
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "control", {
                get: function () {
                    return this.form
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "path", {
                get: function () {
                    return []
                }, enumerable: !0, configurable: !0
            }), e.prototype.addControl = function (t) {
                var e = this.form.get(t.path);
                return kf(e, t), e.updateValueAndValidity({emitEvent: !1}), this.directives.push(t), e
            }, e.prototype.getControl = function (t) {
                return this.form.get(t.path)
            }, e.prototype.removeControl = function (t) {
                Ff(this.directives, t)
            }, e.prototype.addFormGroup = function (t) {
                var e = this.form.get(t.path);
                Pf(e, t), e.updateValueAndValidity({emitEvent: !1})
            }, e.prototype.removeFormGroup = function (t) {
            }, e.prototype.getFormGroup = function (t) {
                return this.form.get(t.path)
            }, e.prototype.addFormArray = function (t) {
                var e = this.form.get(t.path);
                Pf(e, t), e.updateValueAndValidity({emitEvent: !1})
            }, e.prototype.removeFormArray = function (t) {
            }, e.prototype.getFormArray = function (t) {
                return this.form.get(t.path)
            }, e.prototype.updateModel = function (t, e) {
                this.form.get(t.path).setValue(e)
            }, e.prototype.onSubmit = function (t) {
                return this.submitted = !0, Mf(this.form, this.directives), this.ngSubmit.emit(t), !1
            }, e.prototype.onReset = function () {
                this.resetForm()
            }, e.prototype.resetForm = function (t) {
                void 0 === t && (t = void 0), this.form.reset(t), this.submitted = !1
            }, e.prototype._updateDomValue = function () {
                var t = this;
                this.directives.forEach(function (e) {
                    var n = t.form.get(e.path);
                    e.control !== n && (function (t, e) {
                        e.valueAccessor.registerOnChange(function () {
                            return Tf(e)
                        }), e.valueAccessor.registerOnTouched(function () {
                            return Tf(e)
                        }), e._rawValidators.forEach(function (t) {
                            t.registerOnValidatorChange && t.registerOnValidatorChange(null)
                        }), e._rawAsyncValidators.forEach(function (t) {
                            t.registerOnValidatorChange && t.registerOnValidatorChange(null)
                        }), t && t._clearChangeFns()
                    }(e.control, e), n && kf(n, e), e.control = n)
                }), this.form._updateTreeValidity({emitEvent: !1})
            }, e.prototype._updateRegistrations = function () {
                var t = this;
                this.form._registerOnCollectionChange(function () {
                    return t._updateDomValue()
                }), this._oldForm && this._oldForm._registerOnCollectionChange(function () {
                }), this._oldForm = this.form
            }, e.prototype._updateValidators = function () {
                var t = Rf(this._validators);
                this.form.validator = pf.compose([this.form.validator, t]);
                var e = Nf(this._asyncValidators);
                this.form.asyncValidator = pf.composeAsync([this.form.asyncValidator, e])
            }, e.prototype._checkFormPresent = function () {
                this.form || xf.missingFormException()
            }, e
        }(rf), rd = function (t) {
            function e(e, n, r) {
                var i = t.call(this) || this;
                return i._parent = e, i._validators = n, i._asyncValidators = r, i
            }

            return i(e, t), e.prototype._checkParentType = function () {
                od(this._parent) && xf.groupParentException()
            }, e
        }(Yf), id = function (t) {
            function e(e, n, r) {
                var i = t.call(this) || this;
                return i._parent = e, i._validators = n, i._asyncValidators = r, i
            }

            return i(e, t), e.prototype.ngOnInit = function () {
                this._checkParentType(), this.formDirective.addFormArray(this)
            }, e.prototype.ngOnDestroy = function () {
                this.formDirective && this.formDirective.removeFormArray(this)
            }, Object.defineProperty(e.prototype, "control", {
                get: function () {
                    return this.formDirective.getFormArray(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "formDirective", {
                get: function () {
                    return this._parent ? this._parent.formDirective : null
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "path", {
                get: function () {
                    return Af(this.name, this._parent)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "validator", {
                get: function () {
                    return Rf(this._validators)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "asyncValidator", {
                get: function () {
                    return Nf(this._asyncValidators)
                }, enumerable: !0, configurable: !0
            }), e.prototype._checkParentType = function () {
                od(this._parent) && xf.arrayParentException()
            }, e
        }(rf);

        function od(t) {
            return !(t instanceof rd || t instanceof nd || t instanceof id)
        }

        var ad = function (t) {
            function e(e, n, r, i, o) {
                var a = t.call(this) || this;
                return a._ngModelWarningConfig = o, a._added = !1, a.update = new Pi, a._ngModelWarningSent = !1, a._parent = e, a._rawValidators = n || [], a._rawAsyncValidators = r || [], a.valueAccessor = Vf(a, i), a
            }

            var n;
            return i(e, t), n = e, Object.defineProperty(e.prototype, "isDisabled", {
                set: function (t) {
                    xf.disabledAttrWarning()
                }, enumerable: !0, configurable: !0
            }), e.prototype.ngOnChanges = function (t) {
                var e, r;
                this._added || this._setUpControl(), Df(t, this.viewModel) && ("formControlName", e = n, this, r = this._ngModelWarningConfig, he() && "never" !== r && ((null !== r && "once" !== r || e._ngModelWarningSentOnce) && ("always" !== r || this._ngModelWarningSent) || (xf.ngModelWarning("formControlName"), e._ngModelWarningSentOnce = !0, this._ngModelWarningSent = !0)), this.viewModel = this.model, this.formDirective.updateModel(this, this.model))
            }, e.prototype.ngOnDestroy = function () {
                this.formDirective && this.formDirective.removeControl(this)
            }, e.prototype.viewToModelUpdate = function (t) {
                this.viewModel = t, this.update.emit(t)
            }, Object.defineProperty(e.prototype, "path", {
                get: function () {
                    return Af(this.name, this._parent)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "formDirective", {
                get: function () {
                    return this._parent ? this._parent.formDirective : null
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "validator", {
                get: function () {
                    return Rf(this._rawValidators)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "asyncValidator", {
                get: function () {
                    return Nf(this._rawAsyncValidators)
                }, enumerable: !0, configurable: !0
            }), e.prototype._checkParentType = function () {
                !(this._parent instanceof rd) && this._parent instanceof Yf ? xf.ngModelGroupException() : this._parent instanceof rd || this._parent instanceof nd || this._parent instanceof id || xf.controlParentException()
            }, e.prototype._setUpControl = function () {
                this._checkParentType(), this.control = this.formDirective.addControl(this), this.control.disabled && this.valueAccessor.setDisabledState && this.valueAccessor.setDisabledState(!0), this._added = !0
            }, e._ngModelWarningSentOnce = !1, e
        }(af), sd = function () {
            return function () {
            }
        }(), ld = function () {
            function t() {
            }

            return t.prototype.group = function (t, e) {
                void 0 === e && (e = null);
                var n = this._reduceControls(t), r = null, i = null, o = void 0;
                return null != e && (function (t) {
                    return void 0 !== t.asyncValidators || void 0 !== t.validators || void 0 !== t.updateOn
                }(e) ? (r = null != e.validators ? e.validators : null, i = null != e.asyncValidators ? e.asyncValidators : null, o = null != e.updateOn ? e.updateOn : void 0) : (r = null != e.validator ? e.validator : null, i = null != e.asyncValidator ? e.asyncValidator : null)), new qf(n, {
                    asyncValidators: i,
                    updateOn: o,
                    validators: r
                })
            }, t.prototype.control = function (t, e, n) {
                return new Hf(t, e, n)
            }, t.prototype.array = function (t, e, n) {
                var r = this, i = t.map(function (t) {
                    return r._createControl(t)
                });
                return new Gf(i, e, n)
            }, t.prototype._reduceControls = function (t) {
                var e = this, n = {};
                return Object.keys(t).forEach(function (r) {
                    n[r] = e._createControl(t[r])
                }), n
            }, t.prototype._createControl = function (t) {
                return t instanceof Hf || t instanceof qf || t instanceof Gf ? t : Array.isArray(t) ? this.control(t[0], t.length > 1 ? t[1] : null, t.length > 2 ? t[2] : null) : this.control(t)
            }, t
        }(), ud = function () {
            function t() {
            }

            var e;
            return e = t, t.withConfig = function (t) {
                return {ngModule: e, providers: [{provide: Zf, useValue: t.warnOnDeprecatedNgFormSelector}]}
            }, t
        }(), cd = function () {
            function t() {
            }

            var e;
            return e = t, t.withConfig = function (t) {
                return {ngModule: e, providers: [{provide: ed, useValue: t.warnOnNgModelWithFormControl}]}
            }, t
        }(), hd = function () {
            return function () {
            }
        }(), pd = function () {
            return function () {
            }
        }(), fd = "*";

        function dd(t, e) {
            return void 0 === e && (e = null), {type: 2, steps: t, options: e}
        }

        function md(t) {
            return {type: 6, styles: t, offset: null}
        }

        function yd(t) {
            Promise.resolve(null).then(t)
        }

        var gd, vd = function () {
            function t(t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this._destroyed = !1, this._finished = !1, this.parentPlayer = null, this.totalTime = t + e
            }

            return t.prototype._onFinish = function () {
                this._finished || (this._finished = !0, this._onDoneFns.forEach(function (t) {
                    return t()
                }), this._onDoneFns = [])
            }, t.prototype.onStart = function (t) {
                this._onStartFns.push(t)
            }, t.prototype.onDone = function (t) {
                this._onDoneFns.push(t)
            }, t.prototype.onDestroy = function (t) {
                this._onDestroyFns.push(t)
            }, t.prototype.hasStarted = function () {
                return this._started
            }, t.prototype.init = function () {
            }, t.prototype.play = function () {
                this.hasStarted() || (this._onStart(), this.triggerMicrotask()), this._started = !0
            }, t.prototype.triggerMicrotask = function () {
                var t = this;
                yd(function () {
                    return t._onFinish()
                })
            }, t.prototype._onStart = function () {
                this._onStartFns.forEach(function (t) {
                    return t()
                }), this._onStartFns = []
            }, t.prototype.pause = function () {
            }, t.prototype.restart = function () {
            }, t.prototype.finish = function () {
                this._onFinish()
            }, t.prototype.destroy = function () {
                this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach(function (t) {
                    return t()
                }), this._onDestroyFns = [])
            }, t.prototype.reset = function () {
            }, t.prototype.setPosition = function (t) {
            }, t.prototype.getPosition = function () {
                return 0
            }, t.prototype.triggerCallback = function (t) {
                var e = "start" == t ? this._onStartFns : this._onDoneFns;
                e.forEach(function (t) {
                    return t()
                }), e.length = 0
            }, t
        }(), _d = function () {
            function t(t) {
                var e = this;
                this._onDoneFns = [], this._onStartFns = [], this._finished = !1, this._started = !1, this._destroyed = !1, this._onDestroyFns = [], this.parentPlayer = null, this.totalTime = 0, this.players = t;
                var n = 0, r = 0, i = 0, o = this.players.length;
                0 == o ? yd(function () {
                    return e._onFinish()
                }) : this.players.forEach(function (t) {
                    t.onDone(function () {
                        ++n == o && e._onFinish()
                    }), t.onDestroy(function () {
                        ++r == o && e._onDestroy()
                    }), t.onStart(function () {
                        ++i == o && e._onStart()
                    })
                }), this.totalTime = this.players.reduce(function (t, e) {
                    return Math.max(t, e.totalTime)
                }, 0)
            }

            return t.prototype._onFinish = function () {
                this._finished || (this._finished = !0, this._onDoneFns.forEach(function (t) {
                    return t()
                }), this._onDoneFns = [])
            }, t.prototype.init = function () {
                this.players.forEach(function (t) {
                    return t.init()
                })
            }, t.prototype.onStart = function (t) {
                this._onStartFns.push(t)
            }, t.prototype._onStart = function () {
                this.hasStarted() || (this._started = !0, this._onStartFns.forEach(function (t) {
                    return t()
                }), this._onStartFns = [])
            }, t.prototype.onDone = function (t) {
                this._onDoneFns.push(t)
            }, t.prototype.onDestroy = function (t) {
                this._onDestroyFns.push(t)
            }, t.prototype.hasStarted = function () {
                return this._started
            }, t.prototype.play = function () {
                this.parentPlayer || this.init(), this._onStart(), this.players.forEach(function (t) {
                    return t.play()
                })
            }, t.prototype.pause = function () {
                this.players.forEach(function (t) {
                    return t.pause()
                })
            }, t.prototype.restart = function () {
                this.players.forEach(function (t) {
                    return t.restart()
                })
            }, t.prototype.finish = function () {
                this._onFinish(), this.players.forEach(function (t) {
                    return t.finish()
                })
            }, t.prototype.destroy = function () {
                this._onDestroy()
            }, t.prototype._onDestroy = function () {
                this._destroyed || (this._destroyed = !0, this._onFinish(), this.players.forEach(function (t) {
                    return t.destroy()
                }), this._onDestroyFns.forEach(function (t) {
                    return t()
                }), this._onDestroyFns = [])
            }, t.prototype.reset = function () {
                this.players.forEach(function (t) {
                    return t.reset()
                }), this._destroyed = !1, this._finished = !1, this._started = !1
            }, t.prototype.setPosition = function (t) {
                var e = t * this.totalTime;
                this.players.forEach(function (t) {
                    var n = t.totalTime ? Math.min(1, e / t.totalTime) : 1;
                    t.setPosition(n)
                })
            }, t.prototype.getPosition = function () {
                var t = 0;
                return this.players.forEach(function (e) {
                    var n = e.getPosition();
                    t = Math.min(n, t)
                }), t
            }, t.prototype.beforeDestroy = function () {
                this.players.forEach(function (t) {
                    t.beforeDestroy && t.beforeDestroy()
                })
            }, t.prototype.triggerCallback = function (t) {
                var e = "start" == t ? this._onStartFns : this._onDoneFns;
                e.forEach(function (t) {
                    return t()
                }), e.length = 0
            }, t
        }(), bd = "!";

        function wd(t) {
            return null != t && "" + t != "false"
        }

        function Cd(t) {
            return Array.isArray(t) ? t : [t]
        }

        function Sd(t) {
            return null == t ? "" : "string" == typeof t ? t : t + "px"
        }

        function Ed(t) {
            return t instanceof ln ? t.nativeElement : t
        }

        try {
            gd = "undefined" != typeof Intl && Intl.v8BreakIterator
        } catch (aw) {
            gd = !1
        }
        var xd, Ad, kd = function () {
                function t(t) {
                    this._platformId = t, this.isBrowser = this._platformId ? this._platformId === Ws : "object" == typeof document && !!document, this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent), this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent), this.BLINK = this.isBrowser && !(!window.chrome && !gd) && "undefined" != typeof CSS && !this.EDGE && !this.TRIDENT, this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT, this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window), this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent), this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT, this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT
                }

                return t.ngInjectableDef = Ct({
                    factory: function () {
                        return new t(Dt(Fi, 8))
                    }, token: t, providedIn: "root"
                }), t
            }(), Od = function () {
                return function () {
                }
            }(),
            Pd = ["color", "button", "checkbox", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"];

        function Td() {
            if (xd) return xd;
            if ("object" != typeof document || !document) return xd = new Set(Pd);
            var t = document.createElement("input");
            return xd = new Set(Pd.filter(function (e) {
                return t.setAttribute("type", e), t.type === e
            }))
        }

        function Id(t) {
            return function () {
                if (null == Ad && "undefined" != typeof window) try {
                    window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                        get: function () {
                            return Ad = !0
                        }
                    }))
                } finally {
                    Ad = Ad || !1
                }
                return Ad
            }() ? t : !!t.capture
        }

        function Rd(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            return e.length ? e.some(function (e) {
                return t[e]
            }) : t.altKey || t.shiftKey || t.ctrlKey || t.metaKey
        }

        var Nd = function (t) {
            function e(e, n) {
                var r = t.call(this, e, n) || this;
                return r.scheduler = e, r.work = n, r.pending = !1, r
            }

            return i(e, t), e.prototype.schedule = function (t, e) {
                if (void 0 === e && (e = 0), this.closed) return this;
                this.state = t;
                var n = this.id, r = this.scheduler;
                return null != n && (this.id = this.recycleAsyncId(r, n, e)), this.pending = !0, this.delay = e, this.id = this.id || this.requestAsyncId(r, this.id, e), this
            }, e.prototype.requestAsyncId = function (t, e, n) {
                return void 0 === n && (n = 0), setInterval(t.flush.bind(t, this), n)
            }, e.prototype.recycleAsyncId = function (t, e, n) {
                if (void 0 === n && (n = 0), null !== n && this.delay === n && !1 === this.pending) return e;
                clearInterval(e)
            }, e.prototype.execute = function (t, e) {
                if (this.closed) return new Error("executing a cancelled action");
                this.pending = !1;
                var n = this._execute(t, e);
                if (n) return n;
                !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
            }, e.prototype._execute = function (t, e) {
                var n = !1, r = void 0;
                try {
                    this.work(t)
                } catch (i) {
                    n = !0, r = !!i && i || new Error(i)
                }
                if (n) return this.unsubscribe(), r
            }, e.prototype._unsubscribe = function () {
                var t = this.id, e = this.scheduler, n = e.actions, r = n.indexOf(this);
                this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== r && n.splice(r, 1), null != t && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null
            }, e
        }(function (t) {
            function e(e, n) {
                return t.call(this) || this
            }

            return i(e, t), e.prototype.schedule = function (t, e) {
                return void 0 === e && (e = 0), this
            }, e
        }(y)), Dd = function () {
            function t(e, n) {
                void 0 === n && (n = t.now), this.SchedulerAction = e, this.now = n
            }

            return t.prototype.schedule = function (t, e, n) {
                return void 0 === e && (e = 0), new this.SchedulerAction(this, t).schedule(n, e)
            }, t.now = function () {
                return Date.now()
            }, t
        }(), Bd = new (function (t) {
            function e(n, r) {
                void 0 === r && (r = Dd.now);
                var i = t.call(this, n, function () {
                    return e.delegate && e.delegate !== i ? e.delegate.now() : r()
                }) || this;
                return i.actions = [], i.active = !1, i.scheduled = void 0, i
            }

            return i(e, t), e.prototype.schedule = function (n, r, i) {
                return void 0 === r && (r = 0), e.delegate && e.delegate !== this ? e.delegate.schedule(n, r, i) : t.prototype.schedule.call(this, n, r, i)
            }, e.prototype.flush = function (t) {
                var e = this.actions;
                if (this.active) e.push(t); else {
                    var n;
                    this.active = !0;
                    do {
                        if (n = t.execute(t.state, t.delay)) break
                    } while (t = e.shift());
                    if (this.active = !1, n) {
                        for (; t = e.shift();) t.unsubscribe();
                        throw n
                    }
                }
            }, e
        }(Dd))(Nd);

        function Md(t, e) {
            return void 0 === e && (e = Bd), function (n) {
                return n.lift(new Vd(t, e))
            }
        }

        var Vd = function () {
            function t(t, e) {
                this.dueTime = t, this.scheduler = e
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new Fd(t, this.dueTime, this.scheduler))
            }, t
        }(), Fd = function (t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.dueTime = n, i.scheduler = r, i.debouncedSubscription = null, i.lastValue = null, i.hasValue = !1, i
            }

            return i(e, t), e.prototype._next = function (t) {
                this.clearDebounce(), this.lastValue = t, this.hasValue = !0, this.add(this.debouncedSubscription = this.scheduler.schedule(jd, this.dueTime, this))
            }, e.prototype._complete = function () {
                this.debouncedNext(), this.destination.complete()
            }, e.prototype.debouncedNext = function () {
                if (this.clearDebounce(), this.hasValue) {
                    var t = this.lastValue;
                    this.lastValue = null, this.hasValue = !1, this.destination.next(t)
                }
            }, e.prototype.clearDebounce = function () {
                var t = this.debouncedSubscription;
                null !== t && (this.remove(t), t.unsubscribe(), this.debouncedSubscription = null)
            }, e
        }(S);

        function jd(t) {
            t.debouncedNext()
        }

        var Ld = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.prototype.setActiveItem = function (e) {
                this.activeItem && this.activeItem.setInactiveStyles(), t.prototype.setActiveItem.call(this, e), this.activeItem && this.activeItem.setActiveStyles()
            }, e
        }(function () {
            function t(t) {
                var e = this;
                this._items = t, this._activeItemIndex = -1, this._activeItem = null, this._wrap = !1, this._letterKeyStream = new B, this._typeaheadSubscription = y.EMPTY, this._vertical = !0, this._allowedModifierKeys = [], this._skipPredicateFn = function (t) {
                    return t.disabled
                }, this._pressedLetters = [], this.tabOut = new B, this.change = new B, t instanceof Ti && t.changes.subscribe(function (t) {
                    if (e._activeItem) {
                        var n = t.toArray().indexOf(e._activeItem);
                        n > -1 && n !== e._activeItemIndex && (e._activeItemIndex = n)
                    }
                })
            }

            return t.prototype.skipPredicate = function (t) {
                return this._skipPredicateFn = t, this
            }, t.prototype.withWrap = function (t) {
                return void 0 === t && (t = !0), this._wrap = t, this
            }, t.prototype.withVerticalOrientation = function (t) {
                return void 0 === t && (t = !0), this._vertical = t, this
            }, t.prototype.withHorizontalOrientation = function (t) {
                return this._horizontal = t, this
            }, t.prototype.withAllowedModifierKeys = function (t) {
                return this._allowedModifierKeys = t, this
            }, t.prototype.withTypeAhead = function (t) {
                var e = this;
                if (void 0 === t && (t = 200), this._items.length && this._items.some(function (t) {
                    return "function" != typeof t.getLabel
                })) throw Error("ListKeyManager items in typeahead mode must implement the `getLabel` method.");
                return this._typeaheadSubscription.unsubscribe(), this._typeaheadSubscription = this._letterKeyStream.pipe(yl(function (t) {
                    return e._pressedLetters.push(t)
                }), Md(t), ll(function () {
                    return e._pressedLetters.length > 0
                }), Y(function () {
                    return e._pressedLetters.join("")
                })).subscribe(function (t) {
                    for (var n = e._getItemsArray(), r = 1; r < n.length + 1; r++) {
                        var i = (e._activeItemIndex + r) % n.length, o = n[i];
                        if (!e._skipPredicateFn(o) && 0 === o.getLabel().toUpperCase().trim().indexOf(t)) {
                            e.setActiveItem(i);
                            break
                        }
                    }
                    e._pressedLetters = []
                }), this
            }, t.prototype.setActiveItem = function (t) {
                var e = this._activeItemIndex;
                this.updateActiveItem(t), this._activeItemIndex !== e && this.change.next(this._activeItemIndex)
            }, t.prototype.onKeydown = function (t) {
                var e = this, n = t.keyCode, r = ["altKey", "ctrlKey", "metaKey", "shiftKey"].every(function (n) {
                    return !t[n] || e._allowedModifierKeys.indexOf(n) > -1
                });
                switch (n) {
                    case 9:
                        return void this.tabOut.next();
                    case 40:
                        if (this._vertical && r) {
                            this.setNextItemActive();
                            break
                        }
                        return;
                    case 38:
                        if (this._vertical && r) {
                            this.setPreviousItemActive();
                            break
                        }
                        return;
                    case 39:
                        if (this._horizontal && r) {
                            "rtl" === this._horizontal ? this.setPreviousItemActive() : this.setNextItemActive();
                            break
                        }
                        return;
                    case 37:
                        if (this._horizontal && r) {
                            "rtl" === this._horizontal ? this.setNextItemActive() : this.setPreviousItemActive();
                            break
                        }
                        return;
                    default:
                        return void ((r || Rd(t, "shiftKey")) && (t.key && 1 === t.key.length ? this._letterKeyStream.next(t.key.toLocaleUpperCase()) : (n >= 65 && n <= 90 || n >= 48 && n <= 57) && this._letterKeyStream.next(String.fromCharCode(n))))
                }
                this._pressedLetters = [], t.preventDefault()
            }, Object.defineProperty(t.prototype, "activeItemIndex", {
                get: function () {
                    return this._activeItemIndex
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "activeItem", {
                get: function () {
                    return this._activeItem
                }, enumerable: !0, configurable: !0
            }), t.prototype.setFirstItemActive = function () {
                this._setActiveItemByIndex(0, 1)
            }, t.prototype.setLastItemActive = function () {
                this._setActiveItemByIndex(this._items.length - 1, -1)
            }, t.prototype.setNextItemActive = function () {
                this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1)
            }, t.prototype.setPreviousItemActive = function () {
                this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1)
            }, t.prototype.updateActiveItem = function (t) {
                var e = this._getItemsArray(), n = "number" == typeof t ? t : e.indexOf(t), r = e[n];
                this._activeItem = null == r ? null : r, this._activeItemIndex = n
            }, t.prototype.updateActiveItemIndex = function (t) {
                this.updateActiveItem(t)
            }, t.prototype._setActiveItemByDelta = function (t) {
                this._wrap ? this._setActiveInWrapMode(t) : this._setActiveInDefaultMode(t)
            }, t.prototype._setActiveInWrapMode = function (t) {
                for (var e = this._getItemsArray(), n = 1; n <= e.length; n++) {
                    var r = (this._activeItemIndex + t * n + e.length) % e.length;
                    if (!this._skipPredicateFn(e[r])) return void this.setActiveItem(r)
                }
            }, t.prototype._setActiveInDefaultMode = function (t) {
                this._setActiveItemByIndex(this._activeItemIndex + t, t)
            }, t.prototype._setActiveItemByIndex = function (t, e) {
                var n = this._getItemsArray();
                if (n[t]) {
                    for (; this._skipPredicateFn(n[t]);) if (!n[t += e]) return;
                    this.setActiveItem(t)
                }
            }, t.prototype._getItemsArray = function () {
                return this._items instanceof Ti ? this._items.toArray() : this._items
            }, t
        }()), zd = new Mt("mat-sanity-checks", {
            providedIn: "root", factory: function () {
                return !0
            }
        }), Ud = function () {
            function t(t, e) {
                this._sanityChecksEnabled = t, this._hammerLoader = e, this._hasDoneGlobalChecks = !1, this._hasCheckedHammer = !1, this._document = "object" == typeof document && document ? document : null, this._window = "object" == typeof window && window ? window : null, this._areChecksEnabled() && !this._hasDoneGlobalChecks && (this._checkDoctypeIsDefined(), this._checkThemeIsPresent(), this._hasDoneGlobalChecks = !0)
            }

            return t.prototype._areChecksEnabled = function () {
                return this._sanityChecksEnabled && he() && !this._isTestEnv()
            }, t.prototype._isTestEnv = function () {
                var t = this._window;
                return t && (t.__karma__ || t.jasmine)
            }, t.prototype._checkDoctypeIsDefined = function () {
                this._document && !this._document.doctype && console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.")
            }, t.prototype._checkThemeIsPresent = function () {
                if (this._document && this._document.body && "function" == typeof getComputedStyle) {
                    var t = this._document.createElement("div");
                    t.classList.add("mat-theme-loaded-marker"), this._document.body.appendChild(t);
                    var e = getComputedStyle(t);
                    e && "none" !== e.display && console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"), this._document.body.removeChild(t)
                }
            }, t.prototype._checkHammerIsAvailable = function () {
                !this._hasCheckedHammer && this._window && (!this._areChecksEnabled() || this._window.Hammer || this._hammerLoader || console.warn("Could not find HammerJS. Certain Angular Material components may not work correctly."), this._hasCheckedHammer = !0)
            }, t
        }();

        function Hd(t) {
            return function (t) {
                function e() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    var r = t.apply(this, e) || this;
                    return r._disabled = !1, r
                }

                return i(e, t), Object.defineProperty(e.prototype, "disabled", {
                    get: function () {
                        return this._disabled
                    }, set: function (t) {
                        this._disabled = wd(t)
                    }, enumerable: !0, configurable: !0
                }), e
            }(t)
        }

        function qd(t, e) {
            return function (t) {
                function n() {
                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    var i = t.apply(this, n) || this;
                    return i.color = e, i
                }

                return i(n, t), Object.defineProperty(n.prototype, "color", {
                    get: function () {
                        return this._color
                    }, set: function (t) {
                        var n = t || e;
                        n !== this._color && (this._color && this._elementRef.nativeElement.classList.remove("mat-" + this._color), n && this._elementRef.nativeElement.classList.add("mat-" + n), this._color = n)
                    }, enumerable: !0, configurable: !0
                }), n
            }(t)
        }

        function Gd(t) {
            return function (t) {
                function e() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    var r = t.apply(this, e) || this;
                    return r._disableRipple = !1, r
                }

                return i(e, t), Object.defineProperty(e.prototype, "disableRipple", {
                    get: function () {
                        return this._disableRipple
                    }, set: function (t) {
                        this._disableRipple = wd(t)
                    }, enumerable: !0, configurable: !0
                }), e
            }(t)
        }

        function Wd(t) {
            return function (t) {
                function e() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    var r = t.apply(this, e) || this;
                    return r.errorState = !1, r.stateChanges = new B, r
                }

                return i(e, t), e.prototype.updateErrorState = function () {
                    var t = this.errorState,
                        e = (this.errorStateMatcher || this._defaultErrorStateMatcher).isErrorState(this.ngControl ? this.ngControl.control : null, this._parentFormGroup || this._parentForm);
                    e !== t && (this.errorState = e, this.stateChanges.next())
                }, e
            }(t)
        }

        var Kd = function () {
            function t() {
            }

            return t.prototype.isErrorState = function (t, e) {
                return !!(t && t.invalid && (t.touched || e && e.submitted))
            }, t.ngInjectableDef = Ct({
                factory: function () {
                    return new t
                }, token: t, providedIn: "root"
            }), t
        }(), Qd = function () {
            var t = {FADING_IN: 0, VISIBLE: 1, FADING_OUT: 2, HIDDEN: 3};
            return t[t.FADING_IN] = "FADING_IN", t[t.VISIBLE] = "VISIBLE", t[t.FADING_OUT] = "FADING_OUT", t[t.HIDDEN] = "HIDDEN", t
        }(), Zd = function () {
            function t(t, e, n) {
                this._renderer = t, this.element = e, this.config = n, this.state = Qd.HIDDEN
            }

            return t.prototype.fadeOut = function () {
                this._renderer.fadeOutRipple(this)
            }, t
        }(), Yd = {enterDuration: 450, exitDuration: 400}, $d = 800, Xd = Id({passive: !0}), Jd = function () {
            function t(t, e, n, r) {
                var i = this;
                this._target = t, this._ngZone = e, this._isPointerDown = !1, this._triggerEvents = new Map, this._activeRipples = new Set, this._onMousedown = function (t) {
                    var e = function (t) {
                        return 0 === t.buttons
                    }(t), n = i._lastTouchStartEvent && Date.now() < i._lastTouchStartEvent + $d;
                    i._target.rippleDisabled || e || n || (i._isPointerDown = !0, i.fadeInRipple(t.clientX, t.clientY, i._target.rippleConfig))
                }, this._onTouchStart = function (t) {
                    if (!i._target.rippleDisabled) {
                        i._lastTouchStartEvent = Date.now(), i._isPointerDown = !0;
                        for (var e = t.changedTouches, n = 0; n < e.length; n++) i.fadeInRipple(e[n].clientX, e[n].clientY, i._target.rippleConfig)
                    }
                }, this._onPointerUp = function () {
                    i._isPointerDown && (i._isPointerDown = !1, i._activeRipples.forEach(function (t) {
                        !t.config.persistent && (t.state === Qd.VISIBLE || t.config.terminateOnPointerUp && t.state === Qd.FADING_IN) && t.fadeOut()
                    }))
                }, r.isBrowser && (this._containerElement = n.nativeElement, this._triggerEvents.set("mousedown", this._onMousedown).set("mouseup", this._onPointerUp).set("mouseleave", this._onPointerUp).set("touchstart", this._onTouchStart).set("touchend", this._onPointerUp).set("touchcancel", this._onPointerUp))
            }

            return t.prototype.fadeInRipple = function (t, e, n) {
                var r = this;
                void 0 === n && (n = {});
                var i = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect(),
                    a = o({}, Yd, n.animation);
                n.centered && (t = i.left + i.width / 2, e = i.top + i.height / 2);
                var s = n.radius || function (t, e, n) {
                    var r = Math.max(Math.abs(t - n.left), Math.abs(t - n.right)),
                        i = Math.max(Math.abs(e - n.top), Math.abs(e - n.bottom));
                    return Math.sqrt(r * r + i * i)
                }(t, e, i), l = t - i.left, u = e - i.top, c = a.enterDuration, h = document.createElement("div");
                h.classList.add("mat-ripple-element"), h.style.left = l - s + "px", h.style.top = u - s + "px", h.style.height = 2 * s + "px", h.style.width = 2 * s + "px", h.style.backgroundColor = n.color || null, h.style.transitionDuration = c + "ms", this._containerElement.appendChild(h), window.getComputedStyle(h).getPropertyValue("opacity"), h.style.transform = "scale(1)";
                var p = new Zd(this, h, n);
                return p.state = Qd.FADING_IN, this._activeRipples.add(p), n.persistent || (this._mostRecentTransientRipple = p), this._runTimeoutOutsideZone(function () {
                    var t = p === r._mostRecentTransientRipple;
                    p.state = Qd.VISIBLE, n.persistent || t && r._isPointerDown || p.fadeOut()
                }, c), p
            }, t.prototype.fadeOutRipple = function (t) {
                var e = this._activeRipples.delete(t);
                if (t === this._mostRecentTransientRipple && (this._mostRecentTransientRipple = null), this._activeRipples.size || (this._containerRect = null), e) {
                    var n = t.element, r = o({}, Yd, t.config.animation);
                    n.style.transitionDuration = r.exitDuration + "ms", n.style.opacity = "0", t.state = Qd.FADING_OUT, this._runTimeoutOutsideZone(function () {
                        t.state = Qd.HIDDEN, n.parentNode.removeChild(n)
                    }, r.exitDuration)
                }
            }, t.prototype.fadeOutAll = function () {
                this._activeRipples.forEach(function (t) {
                    return t.fadeOut()
                })
            }, t.prototype.setupTriggerEvents = function (t) {
                var e = this;
                t && t !== this._triggerElement && (this._removeTriggerEvents(), this._ngZone.runOutsideAngular(function () {
                    e._triggerEvents.forEach(function (e, n) {
                        t.addEventListener(n, e, Xd)
                    })
                }), this._triggerElement = t)
            }, t.prototype._runTimeoutOutsideZone = function (t, e) {
                void 0 === e && (e = 0), this._ngZone.runOutsideAngular(function () {
                    return setTimeout(t, e)
                })
            }, t.prototype._removeTriggerEvents = function () {
                var t = this;
                this._triggerElement && this._triggerEvents.forEach(function (e, n) {
                    t._triggerElement.removeEventListener(n, e, Xd)
                })
            }, t
        }(), tm = new Mt("mat-ripple-global-options"), em = function () {
            function t(t, e, n, r, i) {
                this._elementRef = t, this.radius = 0, this._disabled = !1, this._isInitialized = !1, this._globalOptions = r || {}, this._rippleRenderer = new Jd(this, e, t, n), "NoopAnimations" === i && (this._globalOptions.animation = {
                    enterDuration: 0,
                    exitDuration: 0
                })
            }

            return Object.defineProperty(t.prototype, "disabled", {
                get: function () {
                    return this._disabled
                }, set: function (t) {
                    this._disabled = t, this._setupTriggerEventsIfEnabled()
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "trigger", {
                get: function () {
                    return this._trigger || this._elementRef.nativeElement
                }, set: function (t) {
                    this._trigger = t, this._setupTriggerEventsIfEnabled()
                }, enumerable: !0, configurable: !0
            }), t.prototype.ngOnInit = function () {
                this._isInitialized = !0, this._setupTriggerEventsIfEnabled()
            }, t.prototype.ngOnDestroy = function () {
                this._rippleRenderer._removeTriggerEvents()
            }, t.prototype.fadeOutAll = function () {
                this._rippleRenderer.fadeOutAll()
            }, Object.defineProperty(t.prototype, "rippleConfig", {
                get: function () {
                    return {
                        centered: this.centered,
                        radius: this.radius,
                        color: this.color,
                        animation: o({}, this._globalOptions.animation, this.animation),
                        terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
                    }
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "rippleDisabled", {
                get: function () {
                    return this.disabled || !!this._globalOptions.disabled
                }, enumerable: !0, configurable: !0
            }), t.prototype._setupTriggerEventsIfEnabled = function () {
                !this.disabled && this._isInitialized && this._rippleRenderer.setupTriggerEvents(this.trigger)
            }, t.prototype.launch = function (t, e, n) {
                return void 0 === e && (e = 0), "number" == typeof t ? this._rippleRenderer.fadeInRipple(t, e, o({}, this.rippleConfig, n)) : this._rippleRenderer.fadeInRipple(0, 0, o({}, this.rippleConfig, t))
            }, t
        }(), nm = function () {
            return function () {
            }
        }(), rm = function () {
            return function (t) {
                this._animationMode = t, this.state = "unchecked", this.disabled = !1
            }
        }(), im = function () {
            return function () {
            }
        }(), om = 0, am = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._labelId = "mat-optgroup-label-" + om++, e
            }

            return i(e, t), e
        }(Hd(function () {
            return function () {
            }
        }())), sm = 0, lm = function () {
            return function (t, e) {
                void 0 === e && (e = !1), this.source = t, this.isUserInput = e
            }
        }(), um = new Mt("MAT_OPTION_PARENT_COMPONENT"), cm = function () {
            function t(t, e, n, r) {
                this._element = t, this._changeDetectorRef = e, this._parent = n, this.group = r, this._selected = !1, this._active = !1, this._disabled = !1, this._mostRecentViewValue = "", this.id = "mat-option-" + sm++, this.onSelectionChange = new Pi, this._stateChanges = new B
            }

            return Object.defineProperty(t.prototype, "multiple", {
                get: function () {
                    return this._parent && this._parent.multiple
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "selected", {
                get: function () {
                    return this._selected
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "disabled", {
                get: function () {
                    return this.group && this.group.disabled || this._disabled
                }, set: function (t) {
                    this._disabled = wd(t)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "disableRipple", {
                get: function () {
                    return this._parent && this._parent.disableRipple
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "active", {
                get: function () {
                    return this._active
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "viewValue", {
                get: function () {
                    return (this._getHostElement().textContent || "").trim()
                }, enumerable: !0, configurable: !0
            }), t.prototype.select = function () {
                this._selected || (this._selected = !0, this._changeDetectorRef.markForCheck(), this._emitSelectionChangeEvent())
            }, t.prototype.deselect = function () {
                this._selected && (this._selected = !1, this._changeDetectorRef.markForCheck(), this._emitSelectionChangeEvent())
            }, t.prototype.focus = function () {
                var t = this._getHostElement();
                "function" == typeof t.focus && t.focus()
            }, t.prototype.setActiveStyles = function () {
                this._active || (this._active = !0, this._changeDetectorRef.markForCheck())
            }, t.prototype.setInactiveStyles = function () {
                this._active && (this._active = !1, this._changeDetectorRef.markForCheck())
            }, t.prototype.getLabel = function () {
                return this.viewValue
            }, t.prototype._handleKeydown = function (t) {
                13 !== t.keyCode && 32 !== t.keyCode || Rd(t) || (this._selectViaInteraction(), t.preventDefault())
            }, t.prototype._selectViaInteraction = function () {
                this.disabled || (this._selected = !this.multiple || !this._selected, this._changeDetectorRef.markForCheck(), this._emitSelectionChangeEvent(!0))
            }, t.prototype._getAriaSelected = function () {
                return this.selected || !this.multiple && null
            }, t.prototype._getTabIndex = function () {
                return this.disabled ? "-1" : "0"
            }, t.prototype._getHostElement = function () {
                return this._element.nativeElement
            }, t.prototype.ngAfterViewChecked = function () {
                if (this._selected) {
                    var t = this.viewValue;
                    t !== this._mostRecentViewValue && (this._mostRecentViewValue = t, this._stateChanges.next())
                }
            }, t.prototype.ngOnDestroy = function () {
                this._stateChanges.complete()
            }, t.prototype._emitSelectionChangeEvent = function (t) {
                void 0 === t && (t = !1), this.onSelectionChange.emit(new lm(this, t))
            }, t
        }(), hm = function () {
            return function () {
            }
        }(), pm = new Mt("mat-label-global-options");

        function fm(t, e, n, r) {
            return f(n) && (r = n, n = void 0), r ? fm(t, e, n).pipe(Y(function (t) {
                return h(t) ? r.apply(void 0, t) : r(t)
            })) : new P(function (r) {
                !function t(e, n, r, i, o) {
                    var a;
                    if (function (t) {
                        return t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
                    }(e)) {
                        var s = e;
                        e.addEventListener(n, r, o), a = function () {
                            return s.removeEventListener(n, r, o)
                        }
                    } else if (function (t) {
                        return t && "function" == typeof t.on && "function" == typeof t.off
                    }(e)) {
                        var l = e;
                        e.on(n, r), a = function () {
                            return l.off(n, r)
                        }
                    } else if (function (t) {
                        return t && "function" == typeof t.addListener && "function" == typeof t.removeListener
                    }(e)) {
                        var u = e;
                        e.addListener(n, r), a = function () {
                            return u.removeListener(n, r)
                        }
                    } else {
                        if (!e || !e.length) throw new TypeError("Invalid event target");
                        for (var c = 0, h = e.length; c < h; c++) t(e[c], n, r, i, o)
                    }
                    i.add(a)
                }(t, e, function (t) {
                    r.next(arguments.length > 1 ? Array.prototype.slice.call(arguments) : t)
                }, r, n)
            })
        }

        function dm(t) {
            return function (e) {
                return e.lift(new mm(t))
            }
        }

        var mm = function () {
            function t(t) {
                this.notifier = t
            }

            return t.prototype.call = function (t, e) {
                var n = new ym(t), r = Q(n, this.notifier);
                return r && !n.seenValue ? (n.add(r), e.subscribe(n)) : n
            }, t
        }(), ym = function (t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.seenValue = !1, n
            }

            return i(e, t), e.prototype.notifyNext = function (t, e, n, r, i) {
                this.seenValue = !0, this.complete()
            }, e.prototype.notifyComplete = function () {
            }, e
        }(Z), gm = function () {
            return function () {
            }
        }();

        function vm(t) {
            return Error("A hint was already declared for 'align=\"" + t + "\"'.")
        }

        var _m = 0, bm = qd(function () {
            return function (t) {
                this._elementRef = t
            }
        }(), "primary"), wm = new Mt("MAT_FORM_FIELD_DEFAULT_OPTIONS"), Cm = function (t) {
            function e(e, n, r, i, o, a, s, l) {
                var u = t.call(this, e) || this;
                return u._elementRef = e, u._changeDetectorRef = n, u._dir = i, u._defaults = o, u._platform = a, u._ngZone = s, u._outlineGapCalculationNeededImmediately = !1, u._outlineGapCalculationNeededOnStable = !1, u._destroyed = new B, u._showAlwaysAnimate = !1, u._subscriptAnimationState = "", u._hintLabel = "", u._hintLabelId = "mat-hint-" + _m++, u._labelId = "mat-form-field-label-" + _m++, u._labelOptions = r || {}, u.floatLabel = u._labelOptions.float || "auto", u._animationsEnabled = "NoopAnimations" !== l, u.appearance = o && o.appearance ? o.appearance : "legacy", u
            }

            return i(e, t), Object.defineProperty(e.prototype, "appearance", {
                get: function () {
                    return this._appearance
                }, set: function (t) {
                    var e = this._appearance;
                    this._appearance = t || this._defaults && this._defaults.appearance || "legacy", "outline" === this._appearance && e !== t && (this._outlineGapCalculationNeededOnStable = !0)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "hideRequiredMarker", {
                get: function () {
                    return this._hideRequiredMarker
                }, set: function (t) {
                    this._hideRequiredMarker = wd(t)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "_shouldAlwaysFloat", {
                get: function () {
                    return "always" === this.floatLabel && !this._showAlwaysAnimate
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "_canLabelFloat", {
                get: function () {
                    return "never" !== this.floatLabel
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "hintLabel", {
                get: function () {
                    return this._hintLabel
                }, set: function (t) {
                    this._hintLabel = t, this._processHints()
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "floatLabel", {
                get: function () {
                    return "legacy" !== this.appearance && "never" === this._floatLabel ? "auto" : this._floatLabel
                }, set: function (t) {
                    t !== this._floatLabel && (this._floatLabel = t || this._labelOptions.float || "auto", this._changeDetectorRef.markForCheck())
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "_control", {
                get: function () {
                    return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic
                }, set: function (t) {
                    this._explicitFormFieldControl = t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "_labelChild", {
                get: function () {
                    return this._labelChildNonStatic || this._labelChildStatic
                }, enumerable: !0, configurable: !0
            }), e.prototype.getConnectedOverlayOrigin = function () {
                return this._connectionContainerRef || this._elementRef
            }, e.prototype.ngAfterContentInit = function () {
                var t = this;
                this._validateControlChild();
                var e = this._control;
                e.controlType && this._elementRef.nativeElement.classList.add("mat-form-field-type-" + e.controlType), e.stateChanges.pipe(Vl(null)).subscribe(function () {
                    t._validatePlaceholders(), t._syncDescribedByIds(), t._changeDetectorRef.markForCheck()
                }), e.ngControl && e.ngControl.valueChanges && e.ngControl.valueChanges.pipe(dm(this._destroyed)).subscribe(function () {
                    return t._changeDetectorRef.markForCheck()
                }), this._ngZone.runOutsideAngular(function () {
                    t._ngZone.onStable.asObservable().pipe(dm(t._destroyed)).subscribe(function () {
                        t._outlineGapCalculationNeededOnStable && t.updateOutlineGap()
                    })
                }), at(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(function () {
                    t._outlineGapCalculationNeededOnStable = !0, t._changeDetectorRef.markForCheck()
                }), this._hintChildren.changes.pipe(Vl(null)).subscribe(function () {
                    t._processHints(), t._changeDetectorRef.markForCheck()
                }), this._errorChildren.changes.pipe(Vl(null)).subscribe(function () {
                    t._syncDescribedByIds(), t._changeDetectorRef.markForCheck()
                }), this._dir && this._dir.change.pipe(dm(this._destroyed)).subscribe(function () {
                    return t.updateOutlineGap()
                })
            }, e.prototype.ngAfterContentChecked = function () {
                this._validateControlChild(), this._outlineGapCalculationNeededImmediately && this.updateOutlineGap()
            }, e.prototype.ngAfterViewInit = function () {
                this._subscriptAnimationState = "enter", this._changeDetectorRef.detectChanges()
            }, e.prototype.ngOnDestroy = function () {
                this._destroyed.next(), this._destroyed.complete()
            }, e.prototype._shouldForward = function (t) {
                var e = this._control ? this._control.ngControl : null;
                return e && e[t]
            }, e.prototype._hasPlaceholder = function () {
                return !!(this._control && this._control.placeholder || this._placeholderChild)
            }, e.prototype._hasLabel = function () {
                return !!this._labelChild
            }, e.prototype._shouldLabelFloat = function () {
                return this._canLabelFloat && (this._control.shouldLabelFloat || this._shouldAlwaysFloat)
            }, e.prototype._hideControlPlaceholder = function () {
                return "legacy" === this.appearance && !this._hasLabel() || this._hasLabel() && !this._shouldLabelFloat()
            }, e.prototype._hasFloatingLabel = function () {
                return this._hasLabel() || "legacy" === this.appearance && this._hasPlaceholder()
            }, e.prototype._getDisplayedMessages = function () {
                return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? "error" : "hint"
            }, e.prototype._animateAndLockLabel = function () {
                var t = this;
                this._hasFloatingLabel() && this._canLabelFloat && (this._animationsEnabled && (this._showAlwaysAnimate = !0, fm(this._label.nativeElement, "transitionend").pipe(Ol(1)).subscribe(function () {
                    t._showAlwaysAnimate = !1
                })), this.floatLabel = "always", this._changeDetectorRef.markForCheck())
            }, e.prototype._validatePlaceholders = function () {
                if (this._control.placeholder && this._placeholderChild) throw Error("Placeholder attribute and child element were both specified.")
            }, e.prototype._processHints = function () {
                this._validateHints(), this._syncDescribedByIds()
            }, e.prototype._validateHints = function () {
                var t, e, n = this;
                this._hintChildren && this._hintChildren.forEach(function (r) {
                    if ("start" === r.align) {
                        if (t || n.hintLabel) throw vm("start");
                        t = r
                    } else if ("end" === r.align) {
                        if (e) throw vm("end");
                        e = r
                    }
                })
            }, e.prototype._syncDescribedByIds = function () {
                if (this._control) {
                    var t = [];
                    if ("hint" === this._getDisplayedMessages()) {
                        var e = this._hintChildren ? this._hintChildren.find(function (t) {
                            return "start" === t.align
                        }) : null, n = this._hintChildren ? this._hintChildren.find(function (t) {
                            return "end" === t.align
                        }) : null;
                        e ? t.push(e.id) : this._hintLabel && t.push(this._hintLabelId), n && t.push(n.id)
                    } else this._errorChildren && (t = this._errorChildren.map(function (t) {
                        return t.id
                    }));
                    this._control.setDescribedByIds(t)
                }
            }, e.prototype._validateControlChild = function () {
                if (!this._control) throw Error("mat-form-field must contain a MatFormFieldControl.")
            }, e.prototype.updateOutlineGap = function () {
                var t = this._label ? this._label.nativeElement : null;
                if ("outline" === this.appearance && t && t.children.length && t.textContent.trim() && this._platform.isBrowser) if (document.documentElement.contains(this._elementRef.nativeElement)) {
                    var e = 0, n = 0, r = this._connectionContainerRef.nativeElement,
                        i = r.querySelectorAll(".mat-form-field-outline-start"),
                        o = r.querySelectorAll(".mat-form-field-outline-gap");
                    if (this._label && this._label.nativeElement.children.length) {
                        var a = r.getBoundingClientRect();
                        if (0 === a.width && 0 === a.height) return this._outlineGapCalculationNeededOnStable = !0, void (this._outlineGapCalculationNeededImmediately = !1);
                        for (var s = this._getStartEnd(a), l = this._getStartEnd(t.children[0].getBoundingClientRect()), u = 0, c = 0, h = t.children; c < h.length; c++) u += h[c].offsetWidth;
                        e = l - s - 5, n = u > 0 ? .75 * u + 10 : 0
                    }
                    for (var p = 0; p < i.length; p++) i.item(p).style.width = e + "px";
                    for (p = 0; p < o.length; p++) o.item(p).style.width = n + "px";
                    this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = !1
                } else this._outlineGapCalculationNeededImmediately = !0
            }, e.prototype._getStartEnd = function (t) {
                return this._dir && "rtl" === this._dir.value ? t.right : t.left
            }, e
        }(bm), Sm = function () {
            return function () {
            }
        }(), Em = function () {
            function t() {
            }

            return t.prototype.create = function (t) {
                return "undefined" == typeof MutationObserver ? null : new MutationObserver(t)
            }, t.ngInjectableDef = Ct({
                factory: function () {
                    return new t
                }, token: t, providedIn: "root"
            }), t
        }(), xm = function () {
            function t(t) {
                this._mutationObserverFactory = t, this._observedElements = new Map
            }

            return t.prototype.ngOnDestroy = function () {
                var t = this;
                this._observedElements.forEach(function (e, n) {
                    return t._cleanupObserver(n)
                })
            }, t.prototype.observe = function (t) {
                var e = this, n = Ed(t);
                return new P(function (t) {
                    var r = e._observeElement(n).subscribe(t);
                    return function () {
                        r.unsubscribe(), e._unobserveElement(n)
                    }
                })
            }, t.prototype._observeElement = function (t) {
                if (this._observedElements.has(t)) this._observedElements.get(t).count++; else {
                    var e = new B, n = this._mutationObserverFactory.create(function (t) {
                        return e.next(t)
                    });
                    n && n.observe(t, {
                        characterData: !0,
                        childList: !0,
                        subtree: !0
                    }), this._observedElements.set(t, {observer: n, stream: e, count: 1})
                }
                return this._observedElements.get(t).stream
            }, t.prototype._unobserveElement = function (t) {
                this._observedElements.has(t) && (this._observedElements.get(t).count--, this._observedElements.get(t).count || this._cleanupObserver(t))
            }, t.prototype._cleanupObserver = function (t) {
                if (this._observedElements.has(t)) {
                    var e = this._observedElements.get(t), n = e.observer, r = e.stream;
                    n && n.disconnect(), r.complete(), this._observedElements.delete(t)
                }
            }, t.ngInjectableDef = Ct({
                factory: function () {
                    return new t(Dt(Em))
                }, token: t, providedIn: "root"
            }), t
        }(), Am = function () {
            function t(t, e, n) {
                this._contentObserver = t, this._elementRef = e, this._ngZone = n, this.event = new Pi, this._disabled = !1, this._currentSubscription = null
            }

            return Object.defineProperty(t.prototype, "disabled", {
                get: function () {
                    return this._disabled
                }, set: function (t) {
                    this._disabled = wd(t), this._disabled ? this._unsubscribe() : this._subscribe()
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "debounce", {
                get: function () {
                    return this._debounce
                }, set: function (t) {
                    this._debounce = function (t, e) {
                        return void 0 === e && (e = 0), function (t) {
                            return !isNaN(parseFloat(t)) && !isNaN(Number(t))
                        }(t) ? Number(t) : e
                    }(t), this._subscribe()
                }, enumerable: !0, configurable: !0
            }), t.prototype.ngAfterContentInit = function () {
                this._currentSubscription || this.disabled || this._subscribe()
            }, t.prototype.ngOnDestroy = function () {
                this._unsubscribe()
            }, t.prototype._subscribe = function () {
                var t = this;
                this._unsubscribe();
                var e = this._contentObserver.observe(this._elementRef);
                this._ngZone.runOutsideAngular(function () {
                    t._currentSubscription = (t.debounce ? e.pipe(Md(t.debounce)) : e).subscribe(t.event)
                })
            }, t.prototype._unsubscribe = function () {
                this._currentSubscription && this._currentSubscription.unsubscribe()
            }, t
        }(), km = function () {
            return function () {
            }
        }(), Om = new Mt("cdk-dir-doc", {
            providedIn: "root", factory: function () {
                return Bt(Gs)
            }
        }), Pm = function () {
            function t(t) {
                if (this.value = "ltr", this.change = new Pi, t) {
                    var e = (t.body ? t.body.dir : null) || (t.documentElement ? t.documentElement.dir : null);
                    this.value = "ltr" === e || "rtl" === e ? e : "ltr"
                }
            }

            return t.prototype.ngOnDestroy = function () {
                this.change.complete()
            }, t.ngInjectableDef = Ct({
                factory: function () {
                    return new t(Dt(Om, 8))
                }, token: t, providedIn: "root"
            }), t
        }(), Tm = function () {
            return function () {
            }
        }();

        function Im() {
            return "undefined" != typeof process
        }

        function Rm(t) {
            switch (t.length) {
                case 0:
                    return new vd;
                case 1:
                    return t[0];
                default:
                    return new _d(t)
            }
        }

        function Nm(t, e, n, r, i, o) {
            void 0 === i && (i = {}), void 0 === o && (o = {});
            var a = [], s = [], l = -1, u = null;
            if (r.forEach(function (t) {
                var n = t.offset, r = n == l, c = r && u || {};
                Object.keys(t).forEach(function (n) {
                    var r = n, s = t[n];
                    if ("offset" !== n) switch (r = e.normalizePropertyName(r, a), s) {
                        case bd:
                            s = i[n];
                            break;
                        case fd:
                            s = o[n];
                            break;
                        default:
                            s = e.normalizeStyleValue(n, r, s, a)
                    }
                    c[r] = s
                }), r || s.push(c), u = c, l = n
            }), a.length) throw new Error("Unable to animate due to the following errors:\n - " + a.join("\n - "));
            return s
        }

        function Dm(t, e, n, r) {
            switch (e) {
                case"start":
                    t.onStart(function () {
                        return r(n && Bm(n, "start", t))
                    });
                    break;
                case"done":
                    t.onDone(function () {
                        return r(n && Bm(n, "done", t))
                    });
                    break;
                case"destroy":
                    t.onDestroy(function () {
                        return r(n && Bm(n, "destroy", t))
                    })
            }
        }

        function Bm(t, e, n) {
            var r = n.totalTime,
                i = Mm(t.element, t.triggerName, t.fromState, t.toState, e || t.phaseName, null == r ? t.totalTime : r, !!n.disabled),
                o = t._data;
            return null != o && (i._data = o), i
        }

        function Mm(t, e, n, r, i, o, a) {
            return void 0 === i && (i = ""), void 0 === o && (o = 0), {
                element: t,
                triggerName: e,
                fromState: n,
                toState: r,
                phaseName: i,
                totalTime: o,
                disabled: !!a
            }
        }

        function Vm(t, e, n) {
            var r;
            return t instanceof Map ? (r = t.get(e)) || t.set(e, r = n) : (r = t[e]) || (r = t[e] = n), r
        }

        function Fm(t) {
            var e = t.indexOf(":");
            return [t.substring(1, e), t.substr(e + 1)]
        }

        var jm = function (t, e) {
            return !1
        }, Lm = function (t, e) {
            return !1
        }, zm = function (t, e, n) {
            return []
        }, Um = Im();
        (Um || "undefined" != typeof Element) && (jm = function (t, e) {
            return t.contains(e)
        }, Lm = function () {
            if (Um || Element.prototype.matches) return function (t, e) {
                return t.matches(e)
            };
            var t = Element.prototype,
                e = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector;
            return e ? function (t, n) {
                return e.apply(t, [n])
            } : Lm
        }(), zm = function (t, e, n) {
            var r = [];
            if (n) r.push.apply(r, c(t.querySelectorAll(e))); else {
                var i = t.querySelector(e);
                i && r.push(i)
            }
            return r
        });
        var Hm = null, qm = !1;

        function Gm(t) {
            Hm || (Hm = ("undefined" != typeof document ? document.body : null) || {}, qm = !!Hm.style && "WebkitAppearance" in Hm.style);
            var e = !0;
            return Hm.style && !function (t) {
                return "ebkit" == t.substring(1, 6)
            }(t) && !(e = t in Hm.style) && qm && (e = "Webkit" + t.charAt(0).toUpperCase() + t.substr(1) in Hm.style), e
        }

        var Wm = Lm, Km = jm, Qm = zm;

        function Zm(t) {
            var e = {};
            return Object.keys(t).forEach(function (n) {
                var r = n.replace(/([a-z])([A-Z])/g, "$1-$2");
                e[r] = t[n]
            }), e
        }

        var Ym = function () {
            function t() {
            }

            return t.prototype.validateStyleProperty = function (t) {
                return Gm(t)
            }, t.prototype.matchesElement = function (t, e) {
                return Wm(t, e)
            }, t.prototype.containsElement = function (t, e) {
                return Km(t, e)
            }, t.prototype.query = function (t, e, n) {
                return Qm(t, e, n)
            }, t.prototype.computeStyle = function (t, e, n) {
                return n || ""
            }, t.prototype.animate = function (t, e, n, r, i, o, a) {
                return void 0 === o && (o = []), new vd(n, r)
            }, t
        }(), $m = function () {
            function t() {
            }

            return t.NOOP = new Ym, t
        }(), Xm = 1e3;

        function Jm(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/^(-?[\.\d]+)(m?s)/);
            return !e || e.length < 2 ? 0 : ty(parseFloat(e[1]), e[2])
        }

        function ty(t, e) {
            switch (e) {
                case"s":
                    return t * Xm;
                default:
                    return t
            }
        }

        function ey(t, e, n) {
            return t.hasOwnProperty("duration") ? t : function (t, e, n) {
                var r, i = 0, o = "";
                if ("string" == typeof t) {
                    var a = t.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);
                    if (null === a) return e.push('The provided timing value "' + t + '" is invalid.'), {
                        duration: 0,
                        delay: 0,
                        easing: ""
                    };
                    r = ty(parseFloat(a[1]), a[2]);
                    var s = a[3];
                    null != s && (i = ty(parseFloat(s), a[4]));
                    var l = a[5];
                    l && (o = l)
                } else r = t;
                if (!n) {
                    var u = !1, c = e.length;
                    r < 0 && (e.push("Duration values below 0 are not allowed for this animation step."), u = !0), i < 0 && (e.push("Delay values below 0 are not allowed for this animation step."), u = !0), u && e.splice(c, 0, 'The provided timing value "' + t + '" is invalid.')
                }
                return {duration: r, delay: i, easing: o}
            }(t, e, n)
        }

        function ny(t, e) {
            return void 0 === e && (e = {}), Object.keys(t).forEach(function (n) {
                e[n] = t[n]
            }), e
        }

        function ry(t, e, n) {
            if (void 0 === n && (n = {}), e) for (var r in t) n[r] = t[r]; else ny(t, n);
            return n
        }

        function iy(t, e, n) {
            return n ? e + ":" + n + ";" : ""
        }

        function oy(t) {
            for (var e = "", n = 0; n < t.style.length; n++) e += iy(0, r = t.style.item(n), t.style.getPropertyValue(r));
            for (var r in t.style) t.style.hasOwnProperty(r) && !r.startsWith("_") && (e += iy(0, r.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), t.style[r]));
            t.setAttribute("style", e)
        }

        function ay(t, e, n) {
            t.style && (Object.keys(e).forEach(function (r) {
                var i = dy(r);
                n && !n.hasOwnProperty(r) && (n[r] = t.style[i]), t.style[i] = e[r]
            }), Im() && oy(t))
        }

        function sy(t, e) {
            t.style && (Object.keys(e).forEach(function (e) {
                var n = dy(e);
                t.style[n] = ""
            }), Im() && oy(t))
        }

        function ly(t) {
            return Array.isArray(t) ? 1 == t.length ? t[0] : dd(t) : t
        }

        var uy = new RegExp("{{\\s*(.+?)\\s*}}", "g");

        function cy(t) {
            var e = [];
            if ("string" == typeof t) {
                for (var n = t.toString(), r = void 0; r = uy.exec(n);) e.push(r[1]);
                uy.lastIndex = 0
            }
            return e
        }

        function hy(t, e, n) {
            var r = t.toString(), i = r.replace(uy, function (t, r) {
                var i = e[r];
                return e.hasOwnProperty(r) || (n.push("Please provide a value for the animation param " + r), i = ""), i.toString()
            });
            return i == r ? t : i
        }

        function py(t) {
            for (var e = [], n = t.next(); !n.done;) e.push(n.value), n = t.next();
            return e
        }

        var fy = /-+([a-z0-9])/g;

        function dy(t) {
            return t.replace(fy, function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return t[1].toUpperCase()
            })
        }

        function my(t, e) {
            return 0 === t || 0 === e
        }

        function yy(t, e, n) {
            var r = Object.keys(n);
            if (r.length && e.length) {
                var i = e[0], o = [];
                if (r.forEach(function (t) {
                    i.hasOwnProperty(t) || o.push(t), i[t] = n[t]
                }), o.length) for (var a = function () {
                    var n = e[s];
                    o.forEach(function (e) {
                        n[e] = vy(t, e)
                    })
                }, s = 1; s < e.length; s++) a()
            }
            return e
        }

        function gy(t, e, n) {
            switch (e.type) {
                case 7:
                    return t.visitTrigger(e, n);
                case 0:
                    return t.visitState(e, n);
                case 1:
                    return t.visitTransition(e, n);
                case 2:
                    return t.visitSequence(e, n);
                case 3:
                    return t.visitGroup(e, n);
                case 4:
                    return t.visitAnimate(e, n);
                case 5:
                    return t.visitKeyframes(e, n);
                case 6:
                    return t.visitStyle(e, n);
                case 8:
                    return t.visitReference(e, n);
                case 9:
                    return t.visitAnimateChild(e, n);
                case 10:
                    return t.visitAnimateRef(e, n);
                case 11:
                    return t.visitQuery(e, n);
                case 12:
                    return t.visitStagger(e, n);
                default:
                    throw new Error("Unable to resolve animation metadata node #" + e.type)
            }
        }

        function vy(t, e) {
            return window.getComputedStyle(t)[e]
        }

        var _y = "*", by = new Set(["true", "1"]), wy = new Set(["false", "0"]);

        function Cy(t, e) {
            var n = by.has(t) || wy.has(t), r = by.has(e) || wy.has(e);
            return function (i, o) {
                var a = t == _y || t == i, s = e == _y || e == o;
                return !a && n && "boolean" == typeof i && (a = i ? by.has(t) : wy.has(t)), !s && r && "boolean" == typeof o && (s = o ? by.has(e) : wy.has(e)), a && s
            }
        }

        var Sy = new RegExp("s*:selfs*,?", "g");

        function Ey(t, e, n) {
            return new xy(t).build(e, n)
        }

        var xy = function () {
            function t(t) {
                this._driver = t
            }

            return t.prototype.build = function (t, e) {
                var n = new Ay(e);
                return this._resetContextStyleTimingState(n), gy(this, ly(t), n)
            }, t.prototype._resetContextStyleTimingState = function (t) {
                t.currentQuerySelector = "", t.collectedStyles = {}, t.collectedStyles[""] = {}, t.currentTime = 0
            }, t.prototype.visitTrigger = function (t, e) {
                var n = this, r = e.queryCount = 0, i = e.depCount = 0, o = [], a = [];
                return "@" == t.name.charAt(0) && e.errors.push("animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"), t.definitions.forEach(function (t) {
                    if (n._resetContextStyleTimingState(e), 0 == t.type) {
                        var s = t, l = s.name;
                        l.toString().split(/\s*,\s*/).forEach(function (t) {
                            s.name = t, o.push(n.visitState(s, e))
                        }), s.name = l
                    } else if (1 == t.type) {
                        var u = n.visitTransition(t, e);
                        r += u.queryCount, i += u.depCount, a.push(u)
                    } else e.errors.push("only state() and transition() definitions can sit inside of a trigger()")
                }), {type: 7, name: t.name, states: o, transitions: a, queryCount: r, depCount: i, options: null}
            }, t.prototype.visitState = function (t, e) {
                var n = this.visitStyle(t.styles, e), r = t.options && t.options.params || null;
                if (n.containsDynamicStyles) {
                    var i = new Set, o = r || {};
                    if (n.styles.forEach(function (t) {
                        if (ky(t)) {
                            var e = t;
                            Object.keys(e).forEach(function (t) {
                                cy(e[t]).forEach(function (t) {
                                    o.hasOwnProperty(t) || i.add(t)
                                })
                            })
                        }
                    }), i.size) {
                        var a = py(i.values());
                        e.errors.push('state("' + t.name + '", ...) must define default values for all the following style substitutions: ' + a.join(", "))
                    }
                }
                return {type: 0, name: t.name, style: n, options: r ? {params: r} : null}
            }, t.prototype.visitTransition = function (t, e) {
                e.queryCount = 0, e.depCount = 0;
                var n, r, i, o = gy(this, ly(t.animation), e);
                return {
                    type: 1,
                    matchers: (n = t.expr, r = e.errors, i = [], "string" == typeof n ? n.split(/\s*,\s*/).forEach(function (t) {
                        return function (t, e, n) {
                            if (":" == t[0]) {
                                var r = function (t, e) {
                                    switch (t) {
                                        case":enter":
                                            return "void => *";
                                        case":leave":
                                            return "* => void";
                                        case":increment":
                                            return function (t, e) {
                                                return parseFloat(e) > parseFloat(t)
                                            };
                                        case":decrement":
                                            return function (t, e) {
                                                return parseFloat(e) < parseFloat(t)
                                            };
                                        default:
                                            return e.push('The transition alias value "' + t + '" is not supported'), "* => *"
                                    }
                                }(t, n);
                                if ("function" == typeof r) return void e.push(r);
                                t = r
                            }
                            var i = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                            if (null == i || i.length < 4) return n.push('The provided transition expression "' + t + '" is not supported'), e;
                            var o = i[1], a = i[2], s = i[3];
                            e.push(Cy(o, s)), "<" != a[0] || o == _y && s == _y || e.push(Cy(s, o))
                        }(t, i, r)
                    }) : i.push(n), i),
                    animation: o,
                    queryCount: e.queryCount,
                    depCount: e.depCount,
                    options: Oy(t.options)
                }
            }, t.prototype.visitSequence = function (t, e) {
                var n = this;
                return {
                    type: 2, steps: t.steps.map(function (t) {
                        return gy(n, t, e)
                    }), options: Oy(t.options)
                }
            }, t.prototype.visitGroup = function (t, e) {
                var n = this, r = e.currentTime, i = 0, o = t.steps.map(function (t) {
                    e.currentTime = r;
                    var o = gy(n, t, e);
                    return i = Math.max(i, e.currentTime), o
                });
                return e.currentTime = i, {type: 3, steps: o, options: Oy(t.options)}
            }, t.prototype.visitAnimate = function (t, e) {
                var n, r = function (t, e) {
                    var n = null;
                    if (t.hasOwnProperty("duration")) n = t; else if ("number" == typeof t) return Py(ey(t, e).duration, 0, "");
                    var r = t;
                    if (r.split(/\s+/).some(function (t) {
                        return "{" == t.charAt(0) && "{" == t.charAt(1)
                    })) {
                        var i = Py(0, 0, "");
                        return i.dynamic = !0, i.strValue = r, i
                    }
                    return Py((n = n || ey(r, e)).duration, n.delay, n.easing)
                }(t.timings, e.errors);
                e.currentAnimateTimings = r;
                var i = t.styles ? t.styles : md({});
                if (5 == i.type) n = this.visitKeyframes(i, e); else {
                    var o = t.styles, a = !1;
                    if (!o) {
                        a = !0;
                        var s = {};
                        r.easing && (s.easing = r.easing), o = md(s)
                    }
                    e.currentTime += r.duration + r.delay;
                    var l = this.visitStyle(o, e);
                    l.isEmptyStep = a, n = l
                }
                return e.currentAnimateTimings = null, {type: 4, timings: r, style: n, options: null}
            }, t.prototype.visitStyle = function (t, e) {
                var n = this._makeStyleAst(t, e);
                return this._validateStyleAst(n, e), n
            }, t.prototype._makeStyleAst = function (t, e) {
                var n = [];
                Array.isArray(t.styles) ? t.styles.forEach(function (t) {
                    "string" == typeof t ? t == fd ? n.push(t) : e.errors.push("The provided style string value " + t + " is not allowed.") : n.push(t)
                }) : n.push(t.styles);
                var r = !1, i = null;
                return n.forEach(function (t) {
                    if (ky(t)) {
                        var e = t, n = e.easing;
                        if (n && (i = n, delete e.easing), !r) for (var o in e) if (e[o].toString().indexOf("{{") >= 0) {
                            r = !0;
                            break
                        }
                    }
                }), {type: 6, styles: n, easing: i, offset: t.offset, containsDynamicStyles: r, options: null}
            }, t.prototype._validateStyleAst = function (t, e) {
                var n = this, r = e.currentAnimateTimings, i = e.currentTime, o = e.currentTime;
                r && o > 0 && (o -= r.duration + r.delay), t.styles.forEach(function (t) {
                    "string" != typeof t && Object.keys(t).forEach(function (r) {
                        if (n._driver.validateStyleProperty(r)) {
                            var a, s, l, u = e.collectedStyles[e.currentQuerySelector], c = u[r], h = !0;
                            c && (o != i && o >= c.startTime && i <= c.endTime && (e.errors.push('The CSS property "' + r + '" that exists between the times of "' + c.startTime + 'ms" and "' + c.endTime + 'ms" is also being animated in a parallel animation between the times of "' + o + 'ms" and "' + i + 'ms"'), h = !1), o = c.startTime), h && (u[r] = {
                                startTime: o,
                                endTime: i
                            }), e.options && (a = e.errors, s = e.options.params || {}, (l = cy(t[r])).length && l.forEach(function (t) {
                                s.hasOwnProperty(t) || a.push("Unable to resolve the local animation param " + t + " in the given list of values")
                            }))
                        } else e.errors.push('The provided animation property "' + r + '" is not a supported CSS property for animations')
                    })
                })
            }, t.prototype.visitKeyframes = function (t, e) {
                var n = this, r = {type: 5, styles: [], options: null};
                if (!e.currentAnimateTimings) return e.errors.push("keyframes() must be placed inside of a call to animate()"), r;
                var i = 0, o = [], a = !1, s = !1, l = 0, u = t.steps.map(function (t) {
                    var r = n._makeStyleAst(t, e), u = null != r.offset ? r.offset : function (t) {
                        if ("string" == typeof t) return null;
                        var e = null;
                        if (Array.isArray(t)) t.forEach(function (t) {
                            if (ky(t) && t.hasOwnProperty("offset")) {
                                var n = t;
                                e = parseFloat(n.offset), delete n.offset
                            }
                        }); else if (ky(t) && t.hasOwnProperty("offset")) {
                            var n = t;
                            e = parseFloat(n.offset), delete n.offset
                        }
                        return e
                    }(r.styles), c = 0;
                    return null != u && (i++, c = r.offset = u), s = s || c < 0 || c > 1, a = a || c < l, l = c, o.push(c), r
                });
                s && e.errors.push("Please ensure that all keyframe offsets are between 0 and 1"), a && e.errors.push("Please ensure that all keyframe offsets are in order");
                var c = t.steps.length, h = 0;
                i > 0 && i < c ? e.errors.push("Not all style() steps within the declared keyframes() contain offsets") : 0 == i && (h = 1 / (c - 1));
                var p = c - 1, f = e.currentTime, d = e.currentAnimateTimings, m = d.duration;
                return u.forEach(function (t, i) {
                    var a = h > 0 ? i == p ? 1 : h * i : o[i], s = a * m;
                    e.currentTime = f + d.delay + s, d.duration = s, n._validateStyleAst(t, e), t.offset = a, r.styles.push(t)
                }), r
            }, t.prototype.visitReference = function (t, e) {
                return {type: 8, animation: gy(this, ly(t.animation), e), options: Oy(t.options)}
            }, t.prototype.visitAnimateChild = function (t, e) {
                return e.depCount++, {type: 9, options: Oy(t.options)}
            }, t.prototype.visitAnimateRef = function (t, e) {
                return {type: 10, animation: this.visitReference(t.animation, e), options: Oy(t.options)}
            }, t.prototype.visitQuery = function (t, e) {
                var n = e.currentQuerySelector, r = t.options || {};
                e.queryCount++, e.currentQuery = t;
                var i = u(function (t) {
                    var e = !!t.split(/\s*,\s*/).find(function (t) {
                        return ":self" == t
                    });
                    return e && (t = t.replace(Sy, "")), [t = t.replace(/@\*/g, ".ng-trigger").replace(/@\w+/g, function (t) {
                        return ".ng-trigger-" + t.substr(1)
                    }).replace(/:animating/g, ".ng-animating"), e]
                }(t.selector), 2), o = i[0], a = i[1];
                e.currentQuerySelector = n.length ? n + " " + o : o, Vm(e.collectedStyles, e.currentQuerySelector, {});
                var s = gy(this, ly(t.animation), e);
                return e.currentQuery = null, e.currentQuerySelector = n, {
                    type: 11,
                    selector: o,
                    limit: r.limit || 0,
                    optional: !!r.optional,
                    includeSelf: a,
                    animation: s,
                    originalSelector: t.selector,
                    options: Oy(t.options)
                }
            }, t.prototype.visitStagger = function (t, e) {
                e.currentQuery || e.errors.push("stagger() can only be used inside of query()");
                var n = "full" === t.timings ? {duration: 0, delay: 0, easing: "full"} : ey(t.timings, e.errors, !0);
                return {type: 12, animation: gy(this, ly(t.animation), e), timings: n, options: null}
            }, t
        }(), Ay = function () {
            return function (t) {
                this.errors = t, this.queryCount = 0, this.depCount = 0, this.currentTransition = null, this.currentQuery = null, this.currentQuerySelector = null, this.currentAnimateTimings = null, this.currentTime = 0, this.collectedStyles = {}, this.options = null
            }
        }();

        function ky(t) {
            return !Array.isArray(t) && "object" == typeof t
        }

        function Oy(t) {
            var e;
            return t ? (t = ny(t)).params && (t.params = (e = t.params) ? ny(e) : null) : t = {}, t
        }

        function Py(t, e, n) {
            return {duration: t, delay: e, easing: n}
        }

        function Ty(t, e, n, r, i, o, a, s) {
            return void 0 === a && (a = null), void 0 === s && (s = !1), {
                type: 1,
                element: t,
                keyframes: e,
                preStyleProps: n,
                postStyleProps: r,
                duration: i,
                delay: o,
                totalTime: i + o,
                easing: a,
                subTimeline: s
            }
        }

        var Iy = function () {
            function t() {
                this._map = new Map
            }

            return t.prototype.consume = function (t) {
                var e = this._map.get(t);
                return e ? this._map.delete(t) : e = [], e
            }, t.prototype.append = function (t, e) {
                var n = this._map.get(t);
                n || this._map.set(t, n = []), n.push.apply(n, c(e))
            }, t.prototype.has = function (t) {
                return this._map.has(t)
            }, t.prototype.clear = function () {
                this._map.clear()
            }, t
        }(), Ry = new RegExp(":enter", "g"), Ny = new RegExp(":leave", "g");

        function Dy(t, e, n, r, i, o, a, s, l, u) {
            return void 0 === o && (o = {}), void 0 === a && (a = {}), void 0 === u && (u = []), (new By).buildKeyframes(t, e, n, r, i, o, a, s, l, u)
        }

        var By = function () {
            function t() {
            }

            return t.prototype.buildKeyframes = function (t, e, n, r, i, o, a, s, l, u) {
                void 0 === u && (u = []), l = l || new Iy;
                var c = new Vy(t, e, l, r, i, u, []);
                c.options = s, c.currentTimeline.setStyles([o], null, c.errors, s), gy(this, n, c);
                var h = c.timelines.filter(function (t) {
                    return t.containsAnimation()
                });
                if (h.length && Object.keys(a).length) {
                    var p = h[h.length - 1];
                    p.allowOnlyTimelineStyles() || p.setStyles([a], null, c.errors, s)
                }
                return h.length ? h.map(function (t) {
                    return t.buildKeyframes()
                }) : [Ty(e, [], [], [], 0, 0, "", !1)]
            }, t.prototype.visitTrigger = function (t, e) {
            }, t.prototype.visitState = function (t, e) {
            }, t.prototype.visitTransition = function (t, e) {
            }, t.prototype.visitAnimateChild = function (t, e) {
                var n = e.subInstructions.consume(e.element);
                if (n) {
                    var r = e.createSubContext(t.options), i = e.currentTimeline.currentTime,
                        o = this._visitSubInstructions(n, r, r.options);
                    i != o && e.transformIntoNewTimeline(o)
                }
                e.previousNode = t
            }, t.prototype.visitAnimateRef = function (t, e) {
                var n = e.createSubContext(t.options);
                n.transformIntoNewTimeline(), this.visitReference(t.animation, n), e.transformIntoNewTimeline(n.currentTimeline.currentTime), e.previousNode = t
            }, t.prototype._visitSubInstructions = function (t, e, n) {
                var r = e.currentTimeline.currentTime, i = null != n.duration ? Jm(n.duration) : null,
                    o = null != n.delay ? Jm(n.delay) : null;
                return 0 !== i && t.forEach(function (t) {
                    var n = e.appendInstructionToTimeline(t, i, o);
                    r = Math.max(r, n.duration + n.delay)
                }), r
            }, t.prototype.visitReference = function (t, e) {
                e.updateOptions(t.options, !0), gy(this, t.animation, e), e.previousNode = t
            }, t.prototype.visitSequence = function (t, e) {
                var n = this, r = e.subContextCount, i = e, o = t.options;
                if (o && (o.params || o.delay) && ((i = e.createSubContext(o)).transformIntoNewTimeline(), null != o.delay)) {
                    6 == i.previousNode.type && (i.currentTimeline.snapshotCurrentStyles(), i.previousNode = My);
                    var a = Jm(o.delay);
                    i.delayNextStep(a)
                }
                t.steps.length && (t.steps.forEach(function (t) {
                    return gy(n, t, i)
                }), i.currentTimeline.applyStylesToKeyframe(), i.subContextCount > r && i.transformIntoNewTimeline()), e.previousNode = t
            }, t.prototype.visitGroup = function (t, e) {
                var n = this, r = [], i = e.currentTimeline.currentTime,
                    o = t.options && t.options.delay ? Jm(t.options.delay) : 0;
                t.steps.forEach(function (a) {
                    var s = e.createSubContext(t.options);
                    o && s.delayNextStep(o), gy(n, a, s), i = Math.max(i, s.currentTimeline.currentTime), r.push(s.currentTimeline)
                }), r.forEach(function (t) {
                    return e.currentTimeline.mergeTimelineCollectedStyles(t)
                }), e.transformIntoNewTimeline(i), e.previousNode = t
            }, t.prototype._visitTiming = function (t, e) {
                if (t.dynamic) {
                    var n = t.strValue;
                    return ey(e.params ? hy(n, e.params, e.errors) : n, e.errors)
                }
                return {duration: t.duration, delay: t.delay, easing: t.easing}
            }, t.prototype.visitAnimate = function (t, e) {
                var n = e.currentAnimateTimings = this._visitTiming(t.timings, e), r = e.currentTimeline;
                n.delay && (e.incrementTime(n.delay), r.snapshotCurrentStyles());
                var i = t.style;
                5 == i.type ? this.visitKeyframes(i, e) : (e.incrementTime(n.duration), this.visitStyle(i, e), r.applyStylesToKeyframe()), e.currentAnimateTimings = null, e.previousNode = t
            }, t.prototype.visitStyle = function (t, e) {
                var n = e.currentTimeline, r = e.currentAnimateTimings;
                !r && n.getCurrentStyleProperties().length && n.forwardFrame();
                var i = r && r.easing || t.easing;
                t.isEmptyStep ? n.applyEmptyStep(i) : n.setStyles(t.styles, i, e.errors, e.options), e.previousNode = t
            }, t.prototype.visitKeyframes = function (t, e) {
                var n = e.currentAnimateTimings, r = e.currentTimeline.duration, i = n.duration,
                    o = e.createSubContext().currentTimeline;
                o.easing = n.easing, t.styles.forEach(function (t) {
                    o.forwardTime((t.offset || 0) * i), o.setStyles(t.styles, t.easing, e.errors, e.options), o.applyStylesToKeyframe()
                }), e.currentTimeline.mergeTimelineCollectedStyles(o), e.transformIntoNewTimeline(r + i), e.previousNode = t
            }, t.prototype.visitQuery = function (t, e) {
                var n = this, r = e.currentTimeline.currentTime, i = t.options || {}, o = i.delay ? Jm(i.delay) : 0;
                o && (6 === e.previousNode.type || 0 == r && e.currentTimeline.getCurrentStyleProperties().length) && (e.currentTimeline.snapshotCurrentStyles(), e.previousNode = My);
                var a = r,
                    s = e.invokeQuery(t.selector, t.originalSelector, t.limit, t.includeSelf, !!i.optional, e.errors);
                e.currentQueryTotal = s.length;
                var l = null;
                s.forEach(function (r, i) {
                    e.currentQueryIndex = i;
                    var s = e.createSubContext(t.options, r);
                    o && s.delayNextStep(o), r === e.element && (l = s.currentTimeline), gy(n, t.animation, s), s.currentTimeline.applyStylesToKeyframe(), a = Math.max(a, s.currentTimeline.currentTime)
                }), e.currentQueryIndex = 0, e.currentQueryTotal = 0, e.transformIntoNewTimeline(a), l && (e.currentTimeline.mergeTimelineCollectedStyles(l), e.currentTimeline.snapshotCurrentStyles()), e.previousNode = t
            }, t.prototype.visitStagger = function (t, e) {
                var n = e.parentContext, r = e.currentTimeline, i = t.timings, o = Math.abs(i.duration),
                    a = o * (e.currentQueryTotal - 1), s = o * e.currentQueryIndex;
                switch (i.duration < 0 ? "reverse" : i.easing) {
                    case"reverse":
                        s = a - s;
                        break;
                    case"full":
                        s = n.currentStaggerTime
                }
                var l = e.currentTimeline;
                s && l.delayNextStep(s);
                var u = l.currentTime;
                gy(this, t.animation, e), e.previousNode = t, n.currentStaggerTime = r.currentTime - u + (r.startTime - n.currentTimeline.startTime)
            }, t
        }(), My = {}, Vy = function () {
            function t(t, e, n, r, i, o, a, s) {
                this._driver = t, this.element = e, this.subInstructions = n, this._enterClassName = r, this._leaveClassName = i, this.errors = o, this.timelines = a, this.parentContext = null, this.currentAnimateTimings = null, this.previousNode = My, this.subContextCount = 0, this.options = {}, this.currentQueryIndex = 0, this.currentQueryTotal = 0, this.currentStaggerTime = 0, this.currentTimeline = s || new Fy(this._driver, e, 0), a.push(this.currentTimeline)
            }

            return Object.defineProperty(t.prototype, "params", {
                get: function () {
                    return this.options.params
                }, enumerable: !0, configurable: !0
            }), t.prototype.updateOptions = function (t, e) {
                var n = this;
                if (t) {
                    var r = t, i = this.options;
                    null != r.duration && (i.duration = Jm(r.duration)), null != r.delay && (i.delay = Jm(r.delay));
                    var o = r.params;
                    if (o) {
                        var a = i.params;
                        a || (a = this.options.params = {}), Object.keys(o).forEach(function (t) {
                            e && a.hasOwnProperty(t) || (a[t] = hy(o[t], a, n.errors))
                        })
                    }
                }
            }, t.prototype._copyOptions = function () {
                var t = {};
                if (this.options) {
                    var e = this.options.params;
                    if (e) {
                        var n = t.params = {};
                        Object.keys(e).forEach(function (t) {
                            n[t] = e[t]
                        })
                    }
                }
                return t
            }, t.prototype.createSubContext = function (e, n, r) {
                void 0 === e && (e = null);
                var i = n || this.element,
                    o = new t(this._driver, i, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(i, r || 0));
                return o.previousNode = this.previousNode, o.currentAnimateTimings = this.currentAnimateTimings, o.options = this._copyOptions(), o.updateOptions(e), o.currentQueryIndex = this.currentQueryIndex, o.currentQueryTotal = this.currentQueryTotal, o.parentContext = this, this.subContextCount++, o
            }, t.prototype.transformIntoNewTimeline = function (t) {
                return this.previousNode = My, this.currentTimeline = this.currentTimeline.fork(this.element, t), this.timelines.push(this.currentTimeline), this.currentTimeline
            }, t.prototype.appendInstructionToTimeline = function (t, e, n) {
                var r = {
                        duration: null != e ? e : t.duration,
                        delay: this.currentTimeline.currentTime + (null != n ? n : 0) + t.delay,
                        easing: ""
                    },
                    i = new jy(this._driver, t.element, t.keyframes, t.preStyleProps, t.postStyleProps, r, t.stretchStartingKeyframe);
                return this.timelines.push(i), r
            }, t.prototype.incrementTime = function (t) {
                this.currentTimeline.forwardTime(this.currentTimeline.duration + t)
            }, t.prototype.delayNextStep = function (t) {
                t > 0 && this.currentTimeline.delayNextStep(t)
            }, t.prototype.invokeQuery = function (t, e, n, r, i, o) {
                var a = [];
                if (r && a.push(this.element), t.length > 0) {
                    t = (t = t.replace(Ry, "." + this._enterClassName)).replace(Ny, "." + this._leaveClassName);
                    var s = this._driver.query(this.element, t, 1 != n);
                    0 !== n && (s = n < 0 ? s.slice(s.length + n, s.length) : s.slice(0, n)), a.push.apply(a, c(s))
                }
                return i || 0 != a.length || o.push('`query("' + e + '")` returned zero elements. (Use `query("' + e + '", { optional: true })` if you wish to allow this.)'), a
            }, t
        }(), Fy = function () {
            function t(t, e, n, r) {
                this._driver = t, this.element = e, this.startTime = n, this._elementTimelineStylesLookup = r, this.duration = 0, this._previousKeyframe = {}, this._currentKeyframe = {}, this._keyframes = new Map, this._styleSummary = {}, this._pendingStyles = {}, this._backFill = {}, this._currentEmptyStepKeyframe = null, this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map), this._localTimelineStyles = Object.create(this._backFill, {}), this._globalTimelineStyles = this._elementTimelineStylesLookup.get(e), this._globalTimelineStyles || (this._globalTimelineStyles = this._localTimelineStyles, this._elementTimelineStylesLookup.set(e, this._localTimelineStyles)), this._loadKeyframe()
            }

            return t.prototype.containsAnimation = function () {
                switch (this._keyframes.size) {
                    case 0:
                        return !1;
                    case 1:
                        return this.getCurrentStyleProperties().length > 0;
                    default:
                        return !0
                }
            }, t.prototype.getCurrentStyleProperties = function () {
                return Object.keys(this._currentKeyframe)
            }, Object.defineProperty(t.prototype, "currentTime", {
                get: function () {
                    return this.startTime + this.duration
                }, enumerable: !0, configurable: !0
            }), t.prototype.delayNextStep = function (t) {
                var e = 1 == this._keyframes.size && Object.keys(this._pendingStyles).length;
                this.duration || e ? (this.forwardTime(this.currentTime + t), e && this.snapshotCurrentStyles()) : this.startTime += t
            }, t.prototype.fork = function (e, n) {
                return this.applyStylesToKeyframe(), new t(this._driver, e, n || this.currentTime, this._elementTimelineStylesLookup)
            }, t.prototype._loadKeyframe = function () {
                this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe), this._currentKeyframe = this._keyframes.get(this.duration), this._currentKeyframe || (this._currentKeyframe = Object.create(this._backFill, {}), this._keyframes.set(this.duration, this._currentKeyframe))
            }, t.prototype.forwardFrame = function () {
                this.duration += 1, this._loadKeyframe()
            }, t.prototype.forwardTime = function (t) {
                this.applyStylesToKeyframe(), this.duration = t, this._loadKeyframe()
            }, t.prototype._updateStyle = function (t, e) {
                this._localTimelineStyles[t] = e, this._globalTimelineStyles[t] = e, this._styleSummary[t] = {
                    time: this.currentTime,
                    value: e
                }
            }, t.prototype.allowOnlyTimelineStyles = function () {
                return this._currentEmptyStepKeyframe !== this._currentKeyframe
            }, t.prototype.applyEmptyStep = function (t) {
                var e = this;
                t && (this._previousKeyframe.easing = t), Object.keys(this._globalTimelineStyles).forEach(function (t) {
                    e._backFill[t] = e._globalTimelineStyles[t] || fd, e._currentKeyframe[t] = fd
                }), this._currentEmptyStepKeyframe = this._currentKeyframe
            }, t.prototype.setStyles = function (t, e, n, r) {
                var i = this;
                e && (this._previousKeyframe.easing = e);
                var o = r && r.params || {}, a = function (t, e) {
                    var n, r = {};
                    return t.forEach(function (t) {
                        "*" === t ? (n = n || Object.keys(e)).forEach(function (t) {
                            r[t] = fd
                        }) : ry(t, !1, r)
                    }), r
                }(t, this._globalTimelineStyles);
                Object.keys(a).forEach(function (t) {
                    var e = hy(a[t], o, n);
                    i._pendingStyles[t] = e, i._localTimelineStyles.hasOwnProperty(t) || (i._backFill[t] = i._globalTimelineStyles.hasOwnProperty(t) ? i._globalTimelineStyles[t] : fd), i._updateStyle(t, e)
                })
            }, t.prototype.applyStylesToKeyframe = function () {
                var t = this, e = this._pendingStyles, n = Object.keys(e);
                0 != n.length && (this._pendingStyles = {}, n.forEach(function (n) {
                    t._currentKeyframe[n] = e[n]
                }), Object.keys(this._localTimelineStyles).forEach(function (e) {
                    t._currentKeyframe.hasOwnProperty(e) || (t._currentKeyframe[e] = t._localTimelineStyles[e])
                }))
            }, t.prototype.snapshotCurrentStyles = function () {
                var t = this;
                Object.keys(this._localTimelineStyles).forEach(function (e) {
                    var n = t._localTimelineStyles[e];
                    t._pendingStyles[e] = n, t._updateStyle(e, n)
                })
            }, t.prototype.getFinalKeyframe = function () {
                return this._keyframes.get(this.duration)
            }, Object.defineProperty(t.prototype, "properties", {
                get: function () {
                    var t = [];
                    for (var e in this._currentKeyframe) t.push(e);
                    return t
                }, enumerable: !0, configurable: !0
            }), t.prototype.mergeTimelineCollectedStyles = function (t) {
                var e = this;
                Object.keys(t._styleSummary).forEach(function (n) {
                    var r = e._styleSummary[n], i = t._styleSummary[n];
                    (!r || i.time > r.time) && e._updateStyle(n, i.value)
                })
            }, t.prototype.buildKeyframes = function () {
                var t = this;
                this.applyStylesToKeyframe();
                var e = new Set, n = new Set, r = 1 === this._keyframes.size && 0 === this.duration, i = [];
                this._keyframes.forEach(function (o, a) {
                    var s = ry(o, !0);
                    Object.keys(s).forEach(function (t) {
                        var r = s[t];
                        r == bd ? e.add(t) : r == fd && n.add(t)
                    }), r || (s.offset = a / t.duration), i.push(s)
                });
                var o = e.size ? py(e.values()) : [], a = n.size ? py(n.values()) : [];
                if (r) {
                    var s = i[0], l = ny(s);
                    s.offset = 0, l.offset = 1, i = [s, l]
                }
                return Ty(this.element, i, o, a, this.duration, this.startTime, this.easing, !1)
            }, t
        }(), jy = function (t) {
            function e(e, n, r, i, o, a, s) {
                void 0 === s && (s = !1);
                var l = t.call(this, e, n, a.delay) || this;
                return l.element = n, l.keyframes = r, l.preStyleProps = i, l.postStyleProps = o, l._stretchStartingKeyframe = s, l.timings = {
                    duration: a.duration,
                    delay: a.delay,
                    easing: a.easing
                }, l
            }

            return i(e, t), e.prototype.containsAnimation = function () {
                return this.keyframes.length > 1
            }, e.prototype.buildKeyframes = function () {
                var t = this.keyframes, e = this.timings, n = e.delay, r = e.duration, i = e.easing;
                if (this._stretchStartingKeyframe && n) {
                    var o = [], a = r + n, s = n / a, l = ry(t[0], !1);
                    l.offset = 0, o.push(l);
                    var u = ry(t[0], !1);
                    u.offset = Ly(s), o.push(u);
                    for (var c = t.length - 1, h = 1; h <= c; h++) {
                        var p = ry(t[h], !1);
                        p.offset = Ly((n + p.offset * r) / a), o.push(p)
                    }
                    r = a, n = 0, i = "", t = o
                }
                return Ty(this.element, t, this.preStyleProps, this.postStyleProps, r, n, i, !0)
            }, e
        }(Fy);

        function Ly(t, e) {
            void 0 === e && (e = 3);
            var n = Math.pow(10, e - 1);
            return Math.round(t * n) / n
        }

        var zy = function () {
            return function () {
            }
        }(), Uy = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.prototype.normalizePropertyName = function (t, e) {
                return dy(t)
            }, e.prototype.normalizeStyleValue = function (t, e, n, r) {
                var i = "", o = n.toString().trim();
                if (Hy[e] && 0 !== n && "0" !== n) if ("number" == typeof n) i = "px"; else {
                    var a = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
                    a && 0 == a[1].length && r.push("Please provide a CSS unit value for " + t + ":" + n)
                }
                return o + i
            }, e
        }(zy), Hy = function () {
            return t = "width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(","), e = {}, t.forEach(function (t) {
                return e[t] = !0
            }), e;
            var t, e
        }();

        function qy(t, e, n, r, i, o, a, s, l, u, c, h, p) {
            return {
                type: 0,
                element: t,
                triggerName: e,
                isRemovalTransition: i,
                fromState: n,
                fromStyles: o,
                toState: r,
                toStyles: a,
                timelines: s,
                queriedElements: l,
                preStyleProps: u,
                postStyleProps: c,
                totalTime: h,
                errors: p
            }
        }

        var Gy = {}, Wy = function () {
            function t(t, e, n) {
                this._triggerName = t, this.ast = e, this._stateStyles = n
            }

            return t.prototype.match = function (t, e, n, r) {
                return function (t, e, n, r, i) {
                    return t.some(function (t) {
                        return t(e, n, r, i)
                    })
                }(this.ast.matchers, t, e, n, r)
            }, t.prototype.buildStyles = function (t, e, n) {
                var r = this._stateStyles["*"], i = this._stateStyles[t], o = r ? r.buildStyles(e, n) : {};
                return i ? i.buildStyles(e, n) : o
            }, t.prototype.build = function (t, e, n, r, i, a, s, l, u, c) {
                var h = [], p = this.ast.options && this.ast.options.params || Gy,
                    f = this.buildStyles(n, s && s.params || Gy, h), d = l && l.params || Gy,
                    m = this.buildStyles(r, d, h),
                    y = new Set, g = new Map, v = new Map, _ = "void" === r, b = {params: o({}, p, d)},
                    w = c ? [] : Dy(t, e, this.ast.animation, i, a, f, m, b, u, h), C = 0;
                if (w.forEach(function (t) {
                    C = Math.max(t.duration + t.delay, C)
                }), h.length) return qy(e, this._triggerName, n, r, _, f, m, [], [], g, v, C, h);
                w.forEach(function (t) {
                    var n = t.element, r = Vm(g, n, {});
                    t.preStyleProps.forEach(function (t) {
                        return r[t] = !0
                    });
                    var i = Vm(v, n, {});
                    t.postStyleProps.forEach(function (t) {
                        return i[t] = !0
                    }), n !== e && y.add(n)
                });
                var S = py(y.values());
                return qy(e, this._triggerName, n, r, _, f, m, w, S, g, v, C)
            }, t
        }(), Ky = function () {
            function t(t, e) {
                this.styles = t, this.defaultParams = e
            }

            return t.prototype.buildStyles = function (t, e) {
                var n = {}, r = ny(this.defaultParams);
                return Object.keys(t).forEach(function (e) {
                    var n = t[e];
                    null != n && (r[e] = n)
                }), this.styles.styles.forEach(function (t) {
                    if ("string" != typeof t) {
                        var i = t;
                        Object.keys(i).forEach(function (t) {
                            var o = i[t];
                            o.length > 1 && (o = hy(o, r, e)), n[t] = o
                        })
                    }
                }), n
            }, t
        }(), Qy = function () {
            function t(t, e) {
                var n = this;
                this.name = t, this.ast = e, this.transitionFactories = [], this.states = {}, e.states.forEach(function (t) {
                    n.states[t.name] = new Ky(t.style, t.options && t.options.params || {})
                }), Zy(this.states, "true", "1"), Zy(this.states, "false", "0"), e.transitions.forEach(function (e) {
                    n.transitionFactories.push(new Wy(t, e, n.states))
                }), this.fallbackTransition = new Wy(t, {
                    type: 1,
                    animation: {type: 2, steps: [], options: null},
                    matchers: [function (t, e) {
                        return !0
                    }],
                    options: null,
                    queryCount: 0,
                    depCount: 0
                }, this.states)
            }

            return Object.defineProperty(t.prototype, "containsQueries", {
                get: function () {
                    return this.ast.queryCount > 0
                }, enumerable: !0, configurable: !0
            }), t.prototype.matchTransition = function (t, e, n, r) {
                return this.transitionFactories.find(function (i) {
                    return i.match(t, e, n, r)
                }) || null
            }, t.prototype.matchStyles = function (t, e, n) {
                return this.fallbackTransition.buildStyles(t, e, n)
            }, t
        }();

        function Zy(t, e, n) {
            t.hasOwnProperty(e) ? t.hasOwnProperty(n) || (t[n] = t[e]) : t.hasOwnProperty(n) && (t[e] = t[n])
        }

        var Yy = new Iy, $y = function () {
                function t(t, e, n) {
                    this.bodyNode = t, this._driver = e, this._normalizer = n, this._animations = {}, this._playersById = {}, this.players = []
                }

                return t.prototype.register = function (t, e) {
                    var n = [], r = Ey(this._driver, e, n);
                    if (n.length) throw new Error("Unable to build the animation due to the following errors: " + n.join("\n"));
                    this._animations[t] = r
                }, t.prototype._buildPlayer = function (t, e, n) {
                    var r = t.element, i = Nm(0, this._normalizer, 0, t.keyframes, e, n);
                    return this._driver.animate(r, i, t.duration, t.delay, t.easing, [], !0)
                }, t.prototype.create = function (t, e, n) {
                    var r = this;
                    void 0 === n && (n = {});
                    var i, o = [], a = this._animations[t], s = new Map;
                    if (a ? (i = Dy(this._driver, e, a, "ng-enter", "ng-leave", {}, {}, n, Yy, o)).forEach(function (t) {
                        var e = Vm(s, t.element, {});
                        t.postStyleProps.forEach(function (t) {
                            return e[t] = null
                        })
                    }) : (o.push("The requested animation doesn't exist or has already been destroyed"), i = []), o.length) throw new Error("Unable to create the animation due to the following errors: " + o.join("\n"));
                    s.forEach(function (t, e) {
                        Object.keys(t).forEach(function (n) {
                            t[n] = r._driver.computeStyle(e, n, fd)
                        })
                    });
                    var l = Rm(i.map(function (t) {
                        var e = s.get(t.element);
                        return r._buildPlayer(t, {}, e)
                    }));
                    return this._playersById[t] = l, l.onDestroy(function () {
                        return r.destroy(t)
                    }), this.players.push(l), l
                }, t.prototype.destroy = function (t) {
                    var e = this._getPlayer(t);
                    e.destroy(), delete this._playersById[t];
                    var n = this.players.indexOf(e);
                    n >= 0 && this.players.splice(n, 1)
                }, t.prototype._getPlayer = function (t) {
                    var e = this._playersById[t];
                    if (!e) throw new Error("Unable to find the timeline player referenced by " + t);
                    return e
                }, t.prototype.listen = function (t, e, n, r) {
                    var i = Mm(e, "", "", "");
                    return Dm(this._getPlayer(t), n, i, r), function () {
                    }
                }, t.prototype.command = function (t, e, n, r) {
                    if ("register" != n) if ("create" != n) {
                        var i = this._getPlayer(t);
                        switch (n) {
                            case"play":
                                i.play();
                                break;
                            case"pause":
                                i.pause();
                                break;
                            case"reset":
                                i.reset();
                                break;
                            case"restart":
                                i.restart();
                                break;
                            case"finish":
                                i.finish();
                                break;
                            case"init":
                                i.init();
                                break;
                            case"setPosition":
                                i.setPosition(parseFloat(r[0]));
                                break;
                            case"destroy":
                                this.destroy(t)
                        }
                    } else this.create(t, e, r[0] || {}); else this.register(t, r[0])
                }, t
            }(), Xy = [],
            Jy = {namespaceId: "", setForRemoval: !1, setForMove: !1, hasAnimation: !1, removedBeforeQueried: !1},
            tg = {namespaceId: "", setForMove: !1, setForRemoval: !1, hasAnimation: !1, removedBeforeQueried: !0},
            eg = "__ng_removed", ng = function () {
                function t(t, e) {
                    void 0 === e && (e = ""), this.namespaceId = e;
                    var n = t && t.hasOwnProperty("value");
                    if (this.value = function (t) {
                        return null != t ? t : null
                    }(n ? t.value : t), n) {
                        var r = ny(t);
                        delete r.value, this.options = r
                    } else this.options = {};
                    this.options.params || (this.options.params = {})
                }

                return Object.defineProperty(t.prototype, "params", {
                    get: function () {
                        return this.options.params
                    }, enumerable: !0, configurable: !0
                }), t.prototype.absorbOptions = function (t) {
                    var e = t.params;
                    if (e) {
                        var n = this.options.params;
                        Object.keys(e).forEach(function (t) {
                            null == n[t] && (n[t] = e[t])
                        })
                    }
                }, t
            }(), rg = new ng("void"), ig = function () {
                function t(t, e, n) {
                    this.id = t, this.hostElement = e, this._engine = n, this.players = [], this._triggers = {}, this._queue = [], this._elementListeners = new Map, this._hostClassName = "ng-tns-" + t, pg(e, this._hostClassName)
                }

                return t.prototype.listen = function (t, e, n, r) {
                    var i, o = this;
                    if (!this._triggers.hasOwnProperty(e)) throw new Error('Unable to listen on the animation trigger event "' + n + '" because the animation trigger "' + e + "\" doesn't exist!");
                    if (null == n || 0 == n.length) throw new Error('Unable to listen on the animation trigger "' + e + '" because the provided event is undefined!');
                    if ("start" != (i = n) && "done" != i) throw new Error('The provided animation trigger event "' + n + '" for the animation trigger "' + e + '" is not supported!');
                    var a = Vm(this._elementListeners, t, []), s = {name: e, phase: n, callback: r};
                    a.push(s);
                    var l = Vm(this._engine.statesByElement, t, {});
                    return l.hasOwnProperty(e) || (pg(t, "ng-trigger"), pg(t, "ng-trigger-" + e), l[e] = rg), function () {
                        o._engine.afterFlush(function () {
                            var t = a.indexOf(s);
                            t >= 0 && a.splice(t, 1), o._triggers[e] || delete l[e]
                        })
                    }
                }, t.prototype.register = function (t, e) {
                    return !this._triggers[t] && (this._triggers[t] = e, !0)
                }, t.prototype._getTrigger = function (t) {
                    var e = this._triggers[t];
                    if (!e) throw new Error('The provided animation trigger "' + t + '" has not been registered!');
                    return e
                }, t.prototype.trigger = function (t, e, n, r) {
                    var i = this;
                    void 0 === r && (r = !0);
                    var o = this._getTrigger(e), a = new ag(this.id, e, t), s = this._engine.statesByElement.get(t);
                    s || (pg(t, "ng-trigger"), pg(t, "ng-trigger-" + e), this._engine.statesByElement.set(t, s = {}));
                    var l = s[e], u = new ng(n, this.id);
                    if (!(n && n.hasOwnProperty("value")) && l && u.absorbOptions(l.options), s[e] = u, l || (l = rg), "void" === u.value || l.value !== u.value) {
                        var c = Vm(this._engine.playersByElement, t, []);
                        c.forEach(function (t) {
                            t.namespaceId == i.id && t.triggerName == e && t.queued && t.destroy()
                        });
                        var h = o.matchTransition(l.value, u.value, t, u.params), p = !1;
                        if (!h) {
                            if (!r) return;
                            h = o.fallbackTransition, p = !0
                        }
                        return this._engine.totalQueuedPlayers++, this._queue.push({
                            element: t,
                            triggerName: e,
                            transition: h,
                            fromState: l,
                            toState: u,
                            player: a,
                            isFallbackTransition: p
                        }), p || (pg(t, "ng-animate-queued"), a.onStart(function () {
                            fg(t, "ng-animate-queued")
                        })), a.onDone(function () {
                            var e = i.players.indexOf(a);
                            e >= 0 && i.players.splice(e, 1);
                            var n = i._engine.playersByElement.get(t);
                            if (n) {
                                var r = n.indexOf(a);
                                r >= 0 && n.splice(r, 1)
                            }
                        }), this.players.push(a), c.push(a), a
                    }
                    if (!function (t, e) {
                        var n = Object.keys(t), r = Object.keys(e);
                        if (n.length != r.length) return !1;
                        for (var i = 0; i < n.length; i++) {
                            var o = n[i];
                            if (!e.hasOwnProperty(o) || t[o] !== e[o]) return !1
                        }
                        return !0
                    }(l.params, u.params)) {
                        var f = [], d = o.matchStyles(l.value, l.params, f), m = o.matchStyles(u.value, u.params, f);
                        f.length ? this._engine.reportError(f) : this._engine.afterFlush(function () {
                            sy(t, d), ay(t, m)
                        })
                    }
                }, t.prototype.deregister = function (t) {
                    var e = this;
                    delete this._triggers[t], this._engine.statesByElement.forEach(function (e, n) {
                        delete e[t]
                    }), this._elementListeners.forEach(function (n, r) {
                        e._elementListeners.set(r, n.filter(function (e) {
                            return e.name != t
                        }))
                    })
                }, t.prototype.clearElementCache = function (t) {
                    this._engine.statesByElement.delete(t), this._elementListeners.delete(t);
                    var e = this._engine.playersByElement.get(t);
                    e && (e.forEach(function (t) {
                        return t.destroy()
                    }), this._engine.playersByElement.delete(t))
                }, t.prototype._signalRemovalForInnerTriggers = function (t, e, n) {
                    var r = this;
                    void 0 === n && (n = !1), this._engine.driver.query(t, ".ng-trigger", !0).forEach(function (t) {
                        if (!t[eg]) {
                            var n = r._engine.fetchNamespacesByElement(t);
                            n.size ? n.forEach(function (n) {
                                return n.triggerLeaveAnimation(t, e, !1, !0)
                            }) : r.clearElementCache(t)
                        }
                    })
                }, t.prototype.triggerLeaveAnimation = function (t, e, n, r) {
                    var i = this, o = this._engine.statesByElement.get(t);
                    if (o) {
                        var a = [];
                        if (Object.keys(o).forEach(function (e) {
                            if (i._triggers[e]) {
                                var n = i.trigger(t, e, "void", r);
                                n && a.push(n)
                            }
                        }), a.length) return this._engine.markElementAsRemoved(this.id, t, !0, e), n && Rm(a).onDone(function () {
                            return i._engine.processLeaveNode(t)
                        }), !0
                    }
                    return !1
                }, t.prototype.prepareLeaveAnimationListeners = function (t) {
                    var e = this, n = this._elementListeners.get(t);
                    if (n) {
                        var r = new Set;
                        n.forEach(function (n) {
                            var i = n.name;
                            if (!r.has(i)) {
                                r.add(i);
                                var o = e._triggers[i].fallbackTransition, a = e._engine.statesByElement.get(t)[i] || rg,
                                    s = new ng("void"), l = new ag(e.id, i, t);
                                e._engine.totalQueuedPlayers++, e._queue.push({
                                    element: t,
                                    triggerName: i,
                                    transition: o,
                                    fromState: a,
                                    toState: s,
                                    player: l,
                                    isFallbackTransition: !0
                                })
                            }
                        })
                    }
                }, t.prototype.removeNode = function (t, e) {
                    var n = this, r = this._engine;
                    if (t.childElementCount && this._signalRemovalForInnerTriggers(t, e, !0), !this.triggerLeaveAnimation(t, e, !0)) {
                        var i = !1;
                        if (r.totalAnimations) {
                            var o = r.players.length ? r.playersByQueriedElement.get(t) : [];
                            if (o && o.length) i = !0; else for (var a = t; a = a.parentNode;) if (r.statesByElement.get(a)) {
                                i = !0;
                                break
                            }
                        }
                        this.prepareLeaveAnimationListeners(t), i ? r.markElementAsRemoved(this.id, t, !1, e) : (r.afterFlush(function () {
                            return n.clearElementCache(t)
                        }), r.destroyInnerAnimations(t), r._onRemovalComplete(t, e))
                    }
                }, t.prototype.insertNode = function (t, e) {
                    pg(t, this._hostClassName)
                }, t.prototype.drainQueuedTransitions = function (t) {
                    var e = this, n = [];
                    return this._queue.forEach(function (r) {
                        var i = r.player;
                        if (!i.destroyed) {
                            var o = r.element, a = e._elementListeners.get(o);
                            a && a.forEach(function (e) {
                                if (e.name == r.triggerName) {
                                    var n = Mm(o, r.triggerName, r.fromState.value, r.toState.value);
                                    n._data = t, Dm(r.player, e.phase, n, e.callback)
                                }
                            }), i.markedForDestroy ? e._engine.afterFlush(function () {
                                i.destroy()
                            }) : n.push(r)
                        }
                    }), this._queue = [], n.sort(function (t, n) {
                        var r = t.transition.ast.depCount, i = n.transition.ast.depCount;
                        return 0 == r || 0 == i ? r - i : e._engine.driver.containsElement(t.element, n.element) ? 1 : -1
                    })
                }, t.prototype.destroy = function (t) {
                    this.players.forEach(function (t) {
                        return t.destroy()
                    }), this._signalRemovalForInnerTriggers(this.hostElement, t)
                }, t.prototype.elementContainsData = function (t) {
                    var e = !1;
                    return this._elementListeners.has(t) && (e = !0), !!this._queue.find(function (e) {
                        return e.element === t
                    }) || e
                }, t
            }(), og = function () {
                function t(t, e, n) {
                    this.bodyNode = t, this.driver = e, this._normalizer = n, this.players = [], this.newHostElements = new Map, this.playersByElement = new Map, this.playersByQueriedElement = new Map, this.statesByElement = new Map, this.disabledNodes = new Set, this.totalAnimations = 0, this.totalQueuedPlayers = 0, this._namespaceLookup = {}, this._namespaceList = [], this._flushFns = [], this._whenQuietFns = [], this.namespacesByHostElement = new Map, this.collectedEnterElements = [], this.collectedLeaveElements = [], this.onRemovalComplete = function (t, e) {
                    }
                }

                return t.prototype._onRemovalComplete = function (t, e) {
                    this.onRemovalComplete(t, e)
                }, Object.defineProperty(t.prototype, "queuedPlayers", {
                    get: function () {
                        var t = [];
                        return this._namespaceList.forEach(function (e) {
                            e.players.forEach(function (e) {
                                e.queued && t.push(e)
                            })
                        }), t
                    }, enumerable: !0, configurable: !0
                }), t.prototype.createNamespace = function (t, e) {
                    var n = new ig(t, e, this);
                    return e.parentNode ? this._balanceNamespaceList(n, e) : (this.newHostElements.set(e, n), this.collectEnterElement(e)), this._namespaceLookup[t] = n
                }, t.prototype._balanceNamespaceList = function (t, e) {
                    var n = this._namespaceList.length - 1;
                    if (n >= 0) {
                        for (var r = !1, i = n; i >= 0; i--) if (this.driver.containsElement(this._namespaceList[i].hostElement, e)) {
                            this._namespaceList.splice(i + 1, 0, t), r = !0;
                            break
                        }
                        r || this._namespaceList.splice(0, 0, t)
                    } else this._namespaceList.push(t);
                    return this.namespacesByHostElement.set(e, t), t
                }, t.prototype.register = function (t, e) {
                    var n = this._namespaceLookup[t];
                    return n || (n = this.createNamespace(t, e)), n
                }, t.prototype.registerTrigger = function (t, e, n) {
                    var r = this._namespaceLookup[t];
                    r && r.register(e, n) && this.totalAnimations++
                }, t.prototype.destroy = function (t, e) {
                    var n = this;
                    if (t) {
                        var r = this._fetchNamespace(t);
                        this.afterFlush(function () {
                            n.namespacesByHostElement.delete(r.hostElement), delete n._namespaceLookup[t];
                            var e = n._namespaceList.indexOf(r);
                            e >= 0 && n._namespaceList.splice(e, 1)
                        }), this.afterFlushAnimationsDone(function () {
                            return r.destroy(e)
                        })
                    }
                }, t.prototype._fetchNamespace = function (t) {
                    return this._namespaceLookup[t]
                }, t.prototype.fetchNamespacesByElement = function (t) {
                    var e = new Set, n = this.statesByElement.get(t);
                    if (n) for (var r = Object.keys(n), i = 0; i < r.length; i++) {
                        var o = n[r[i]].namespaceId;
                        if (o) {
                            var a = this._fetchNamespace(o);
                            a && e.add(a)
                        }
                    }
                    return e
                }, t.prototype.trigger = function (t, e, n, r) {
                    if (sg(e)) {
                        var i = this._fetchNamespace(t);
                        if (i) return i.trigger(e, n, r), !0
                    }
                    return !1
                }, t.prototype.insertNode = function (t, e, n, r) {
                    if (sg(e)) {
                        var i = e[eg];
                        if (i && i.setForRemoval) {
                            i.setForRemoval = !1, i.setForMove = !0;
                            var o = this.collectedLeaveElements.indexOf(e);
                            o >= 0 && this.collectedLeaveElements.splice(o, 1)
                        }
                        if (t) {
                            var a = this._fetchNamespace(t);
                            a && a.insertNode(e, n)
                        }
                        r && this.collectEnterElement(e)
                    }
                }, t.prototype.collectEnterElement = function (t) {
                    this.collectedEnterElements.push(t)
                }, t.prototype.markElementAsDisabled = function (t, e) {
                    e ? this.disabledNodes.has(t) || (this.disabledNodes.add(t), pg(t, "ng-animate-disabled")) : this.disabledNodes.has(t) && (this.disabledNodes.delete(t), fg(t, "ng-animate-disabled"))
                }, t.prototype.removeNode = function (t, e, n, r) {
                    if (sg(e)) {
                        var i = t ? this._fetchNamespace(t) : null;
                        if (i ? i.removeNode(e, r) : this.markElementAsRemoved(t, e, !1, r), n) {
                            var o = this.namespacesByHostElement.get(e);
                            o && o.id !== t && o.removeNode(e, r)
                        }
                    } else this._onRemovalComplete(e, r)
                }, t.prototype.markElementAsRemoved = function (t, e, n, r) {
                    this.collectedLeaveElements.push(e), e[eg] = {
                        namespaceId: t,
                        setForRemoval: r,
                        hasAnimation: n,
                        removedBeforeQueried: !1
                    }
                }, t.prototype.listen = function (t, e, n, r, i) {
                    return sg(e) ? this._fetchNamespace(t).listen(e, n, r, i) : function () {
                    }
                }, t.prototype._buildInstruction = function (t, e, n, r, i) {
                    return t.transition.build(this.driver, t.element, t.fromState.value, t.toState.value, n, r, t.fromState.options, t.toState.options, e, i)
                }, t.prototype.destroyInnerAnimations = function (t) {
                    var e = this, n = this.driver.query(t, ".ng-trigger", !0);
                    n.forEach(function (t) {
                        return e.destroyActiveAnimationsForElement(t)
                    }), 0 != this.playersByQueriedElement.size && (n = this.driver.query(t, ".ng-animating", !0)).forEach(function (t) {
                        return e.finishActiveQueriedAnimationOnElement(t)
                    })
                }, t.prototype.destroyActiveAnimationsForElement = function (t) {
                    var e = this.playersByElement.get(t);
                    e && e.forEach(function (t) {
                        t.queued ? t.markedForDestroy = !0 : t.destroy()
                    })
                }, t.prototype.finishActiveQueriedAnimationOnElement = function (t) {
                    var e = this.playersByQueriedElement.get(t);
                    e && e.forEach(function (t) {
                        return t.finish()
                    })
                }, t.prototype.whenRenderingDone = function () {
                    var t = this;
                    return new Promise(function (e) {
                        if (t.players.length) return Rm(t.players).onDone(function () {
                            return e()
                        });
                        e()
                    })
                }, t.prototype.processLeaveNode = function (t) {
                    var e = this, n = t[eg];
                    if (n && n.setForRemoval) {
                        if (t[eg] = Jy, n.namespaceId) {
                            this.destroyInnerAnimations(t);
                            var r = this._fetchNamespace(n.namespaceId);
                            r && r.clearElementCache(t)
                        }
                        this._onRemovalComplete(t, n.setForRemoval)
                    }
                    this.driver.matchesElement(t, ".ng-animate-disabled") && this.markElementAsDisabled(t, !1), this.driver.query(t, ".ng-animate-disabled", !0).forEach(function (t) {
                        e.markElementAsDisabled(t, !1)
                    })
                }, t.prototype.flush = function (t) {
                    var e = this;
                    void 0 === t && (t = -1);
                    var n = [];
                    if (this.newHostElements.size && (this.newHostElements.forEach(function (t, n) {
                        return e._balanceNamespaceList(t, n)
                    }), this.newHostElements.clear()), this.totalAnimations && this.collectedEnterElements.length) for (var r = 0; r < this.collectedEnterElements.length; r++) pg(this.collectedEnterElements[r], "ng-star-inserted");
                    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
                        var i = [];
                        try {
                            n = this._flushAnimations(i, t)
                        } finally {
                            for (r = 0; r < i.length; r++) i[r]()
                        }
                    } else for (r = 0; r < this.collectedLeaveElements.length; r++) this.processLeaveNode(this.collectedLeaveElements[r]);
                    if (this.totalQueuedPlayers = 0, this.collectedEnterElements.length = 0, this.collectedLeaveElements.length = 0, this._flushFns.forEach(function (t) {
                        return t()
                    }), this._flushFns = [], this._whenQuietFns.length) {
                        var o = this._whenQuietFns;
                        this._whenQuietFns = [], n.length ? Rm(n).onDone(function () {
                            o.forEach(function (t) {
                                return t()
                            })
                        }) : o.forEach(function (t) {
                            return t()
                        })
                    }
                }, t.prototype.reportError = function (t) {
                    throw new Error("Unable to process animations due to the following failed trigger transitions\n " + t.join("\n"))
                }, t.prototype._flushAnimations = function (t, e) {
                    var n = this, r = new Iy, i = [], a = new Map, s = [], l = new Map, u = new Map, h = new Map,
                        p = new Set;
                    this.disabledNodes.forEach(function (t) {
                        p.add(t);
                        for (var e = n.driver.query(t, ".ng-animate-queued", !0), r = 0; r < e.length; r++) p.add(e[r])
                    });
                    var f = this.bodyNode, d = Array.from(this.statesByElement.keys()),
                        m = cg(d, this.collectedEnterElements),
                        y = new Map, g = 0;
                    m.forEach(function (t, e) {
                        var n = "ng-enter" + g++;
                        y.set(e, n), t.forEach(function (t) {
                            return pg(t, n)
                        })
                    });
                    for (var v = [], _ = new Set, b = new Set, w = 0; w < this.collectedLeaveElements.length; w++) (F = (V = this.collectedLeaveElements[w])[eg]) && F.setForRemoval && (v.push(V), _.add(V), F.hasAnimation ? this.driver.query(V, ".ng-star-inserted", !0).forEach(function (t) {
                        return _.add(t)
                    }) : b.add(V));
                    var C = new Map, S = cg(d, Array.from(_));
                    S.forEach(function (t, e) {
                        var n = "ng-leave" + g++;
                        C.set(e, n), t.forEach(function (t) {
                            return pg(t, n)
                        })
                    }), t.push(function () {
                        m.forEach(function (t, e) {
                            var n = y.get(e);
                            t.forEach(function (t) {
                                return fg(t, n)
                            })
                        }), S.forEach(function (t, e) {
                            var n = C.get(e);
                            t.forEach(function (t) {
                                return fg(t, n)
                            })
                        }), v.forEach(function (t) {
                            n.processLeaveNode(t)
                        })
                    });
                    for (var E = [], x = [], A = this._namespaceList.length - 1; A >= 0; A--) this._namespaceList[A].drainQueuedTransitions(e).forEach(function (t) {
                        var e = t.player, o = t.element;
                        if (E.push(e), n.collectedEnterElements.length) {
                            var a = o[eg];
                            if (a && a.setForMove) return void e.destroy()
                        }
                        var c = !f || !n.driver.containsElement(f, o), p = C.get(o), d = y.get(o),
                            m = n._buildInstruction(t, r, d, p, c);
                        if (m.errors && m.errors.length) x.push(m); else {
                            if (c) return e.onStart(function () {
                                return sy(o, m.fromStyles)
                            }), e.onDestroy(function () {
                                return ay(o, m.toStyles)
                            }), void i.push(e);
                            if (t.isFallbackTransition) return e.onStart(function () {
                                return sy(o, m.fromStyles)
                            }), e.onDestroy(function () {
                                return ay(o, m.toStyles)
                            }), void i.push(e);
                            m.timelines.forEach(function (t) {
                                return t.stretchStartingKeyframe = !0
                            }), r.append(o, m.timelines), s.push({
                                instruction: m,
                                player: e,
                                element: o
                            }), m.queriedElements.forEach(function (t) {
                                return Vm(l, t, []).push(e)
                            }), m.preStyleProps.forEach(function (t, e) {
                                var n = Object.keys(t);
                                if (n.length) {
                                    var r = u.get(e);
                                    r || u.set(e, r = new Set), n.forEach(function (t) {
                                        return r.add(t)
                                    })
                                }
                            }), m.postStyleProps.forEach(function (t, e) {
                                var n = Object.keys(t), r = h.get(e);
                                r || h.set(e, r = new Set), n.forEach(function (t) {
                                    return r.add(t)
                                })
                            })
                        }
                    });
                    if (x.length) {
                        var k = [];
                        x.forEach(function (t) {
                            k.push("@" + t.triggerName + " has failed due to:\n"), t.errors.forEach(function (t) {
                                return k.push("- " + t + "\n")
                            })
                        }), E.forEach(function (t) {
                            return t.destroy()
                        }), this.reportError(k)
                    }
                    var O = new Map, P = new Map;
                    s.forEach(function (t) {
                        var e = t.element;
                        r.has(e) && (P.set(e, e), n._beforeAnimationBuild(t.player.namespaceId, t.instruction, O))
                    }), i.forEach(function (t) {
                        var e = t.element;
                        n._getPreviousPlayers(e, !1, t.namespaceId, t.triggerName, null).forEach(function (t) {
                            Vm(O, e, []).push(t), t.destroy()
                        })
                    });
                    var T = v.filter(function (t) {
                        return mg(t, u, h)
                    }), I = new Map;
                    ug(I, this.driver, b, h, fd).forEach(function (t) {
                        mg(t, u, h) && T.push(t)
                    });
                    var R = new Map;
                    m.forEach(function (t, e) {
                        ug(R, n.driver, new Set(t), u, bd)
                    }), T.forEach(function (t) {
                        var e = I.get(t), n = R.get(t);
                        I.set(t, o({}, e, n))
                    });
                    var N = [], D = [], B = {};
                    s.forEach(function (t) {
                        var e = t.element, o = t.player, s = t.instruction;
                        if (r.has(e)) {
                            if (p.has(e)) return o.onDestroy(function () {
                                return ay(e, s.toStyles)
                            }), o.disabled = !0, o.overrideTotalTime(s.totalTime), void i.push(o);
                            var l = B;
                            if (P.size > 1) {
                                for (var u = e, c = []; u = u.parentNode;) {
                                    var h = P.get(u);
                                    if (h) {
                                        l = h;
                                        break
                                    }
                                    c.push(u)
                                }
                                c.forEach(function (t) {
                                    return P.set(t, l)
                                })
                            }
                            var f = n._buildAnimation(o.namespaceId, s, O, a, R, I);
                            if (o.setRealPlayer(f), l === B) N.push(o); else {
                                var d = n.playersByElement.get(l);
                                d && d.length && (o.parentPlayer = Rm(d)), i.push(o)
                            }
                        } else sy(e, s.fromStyles), o.onDestroy(function () {
                            return ay(e, s.toStyles)
                        }), D.push(o), p.has(e) && i.push(o)
                    }), D.forEach(function (t) {
                        var e = a.get(t.element);
                        if (e && e.length) {
                            var n = Rm(e);
                            t.setRealPlayer(n)
                        }
                    }), i.forEach(function (t) {
                        t.parentPlayer ? t.syncPlayerEvents(t.parentPlayer) : t.destroy()
                    });
                    for (var M = 0; M < v.length; M++) {
                        var V, F = (V = v[M])[eg];
                        if (fg(V, "ng-leave"), !F || !F.hasAnimation) {
                            var j = [];
                            if (l.size) {
                                var L = l.get(V);
                                L && L.length && j.push.apply(j, c(L));
                                for (var z = this.driver.query(V, ".ng-animating", !0), U = 0; U < z.length; U++) {
                                    var H = l.get(z[U]);
                                    H && H.length && j.push.apply(j, c(H))
                                }
                            }
                            var q = j.filter(function (t) {
                                return !t.destroyed
                            });
                            q.length ? dg(this, V, q) : this.processLeaveNode(V)
                        }
                    }
                    return v.length = 0, N.forEach(function (t) {
                        n.players.push(t), t.onDone(function () {
                            t.destroy();
                            var e = n.players.indexOf(t);
                            n.players.splice(e, 1)
                        }), t.play()
                    }), N
                }, t.prototype.elementContainsData = function (t, e) {
                    var n = !1, r = e[eg];
                    return r && r.setForRemoval && (n = !0), this.playersByElement.has(e) && (n = !0), this.playersByQueriedElement.has(e) && (n = !0), this.statesByElement.has(e) && (n = !0), this._fetchNamespace(t).elementContainsData(e) || n
                }, t.prototype.afterFlush = function (t) {
                    this._flushFns.push(t)
                }, t.prototype.afterFlushAnimationsDone = function (t) {
                    this._whenQuietFns.push(t)
                }, t.prototype._getPreviousPlayers = function (t, e, n, r, i) {
                    var o = [];
                    if (e) {
                        var a = this.playersByQueriedElement.get(t);
                        a && (o = a)
                    } else {
                        var s = this.playersByElement.get(t);
                        if (s) {
                            var l = !i || "void" == i;
                            s.forEach(function (t) {
                                t.queued || (l || t.triggerName == r) && o.push(t)
                            })
                        }
                    }
                    return (n || r) && (o = o.filter(function (t) {
                        return !(n && n != t.namespaceId || r && r != t.triggerName)
                    })), o
                }, t.prototype._beforeAnimationBuild = function (t, e, n) {
                    var r, i, o = e.element, a = e.isRemovalTransition ? void 0 : t,
                        s = e.isRemovalTransition ? void 0 : e.triggerName, u = function (t) {
                            var r = t.element, i = r !== o, l = Vm(n, r, []);
                            c._getPreviousPlayers(r, i, a, s, e.toState).forEach(function (t) {
                                var e = t.getRealPlayer();
                                e.beforeDestroy && e.beforeDestroy(), t.destroy(), l.push(t)
                            })
                        }, c = this;
                    try {
                        for (var h = l(e.timelines), p = h.next(); !p.done; p = h.next()) u(p.value)
                    } catch (f) {
                        r = {error: f}
                    } finally {
                        try {
                            p && !p.done && (i = h.return) && i.call(h)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                    sy(o, e.fromStyles)
                }, t.prototype._buildAnimation = function (t, e, n, r, i, o) {
                    var a = this, s = e.triggerName, l = e.element, u = [], c = new Set, h = new Set,
                        p = e.timelines.map(function (e) {
                            var p = e.element;
                            c.add(p);
                            var f = p[eg];
                            if (f && f.removedBeforeQueried) return new vd(e.duration, e.delay);
                            var d, m, y = p !== l, g = (d = (n.get(p) || Xy).map(function (t) {
                                    return t.getRealPlayer()
                                }), m = [], function t(e, n) {
                                    for (var r = 0; r < e.length; r++) {
                                        var i = e[r];
                                        i instanceof _d ? t(i.players, n) : n.push(i)
                                    }
                                }(d, m), m).filter(function (t) {
                                    return !!t.element && t.element === p
                                }), v = i.get(p), _ = o.get(p), b = Nm(0, a._normalizer, 0, e.keyframes, v, _),
                                w = a._buildPlayer(e, b, g);
                            if (e.subTimeline && r && h.add(p), y) {
                                var C = new ag(t, s, p);
                                C.setRealPlayer(w), u.push(C)
                            }
                            return w
                        });
                    u.forEach(function (t) {
                        Vm(a.playersByQueriedElement, t.element, []).push(t), t.onDone(function () {
                            return function (t, e, n) {
                                var r;
                                if (t instanceof Map) {
                                    if (r = t.get(e)) {
                                        if (r.length) {
                                            var i = r.indexOf(n);
                                            r.splice(i, 1)
                                        }
                                        0 == r.length && t.delete(e)
                                    }
                                } else (r = t[e]) && (r.length && (i = r.indexOf(n), r.splice(i, 1)), 0 == r.length && delete t[e]);
                                return r
                            }(a.playersByQueriedElement, t.element, t)
                        })
                    }), c.forEach(function (t) {
                        return pg(t, "ng-animating")
                    });
                    var f = Rm(p);
                    return f.onDestroy(function () {
                        c.forEach(function (t) {
                            return fg(t, "ng-animating")
                        }), ay(l, e.toStyles)
                    }), h.forEach(function (t) {
                        Vm(r, t, []).push(f)
                    }), f
                }, t.prototype._buildPlayer = function (t, e, n) {
                    return e.length > 0 ? this.driver.animate(t.element, e, t.duration, t.delay, t.easing, n) : new vd(t.duration, t.delay)
                }, t
            }(), ag = function () {
                function t(t, e, n) {
                    this.namespaceId = t, this.triggerName = e, this.element = n, this._player = new vd, this._containsRealPlayer = !1, this._queuedCallbacks = {}, this.destroyed = !1, this.markedForDestroy = !1, this.disabled = !1, this.queued = !0, this.totalTime = 0
                }

                return t.prototype.setRealPlayer = function (t) {
                    var e = this;
                    this._containsRealPlayer || (this._player = t, Object.keys(this._queuedCallbacks).forEach(function (n) {
                        e._queuedCallbacks[n].forEach(function (e) {
                            return Dm(t, n, void 0, e)
                        })
                    }), this._queuedCallbacks = {}, this._containsRealPlayer = !0, this.overrideTotalTime(t.totalTime), this.queued = !1)
                }, t.prototype.getRealPlayer = function () {
                    return this._player
                }, t.prototype.overrideTotalTime = function (t) {
                    this.totalTime = t
                }, t.prototype.syncPlayerEvents = function (t) {
                    var e = this, n = this._player;
                    n.triggerCallback && t.onStart(function () {
                        return n.triggerCallback("start")
                    }), t.onDone(function () {
                        return e.finish()
                    }), t.onDestroy(function () {
                        return e.destroy()
                    })
                }, t.prototype._queueEvent = function (t, e) {
                    Vm(this._queuedCallbacks, t, []).push(e)
                }, t.prototype.onDone = function (t) {
                    this.queued && this._queueEvent("done", t), this._player.onDone(t)
                }, t.prototype.onStart = function (t) {
                    this.queued && this._queueEvent("start", t), this._player.onStart(t)
                }, t.prototype.onDestroy = function (t) {
                    this.queued && this._queueEvent("destroy", t), this._player.onDestroy(t)
                }, t.prototype.init = function () {
                    this._player.init()
                }, t.prototype.hasStarted = function () {
                    return !this.queued && this._player.hasStarted()
                }, t.prototype.play = function () {
                    !this.queued && this._player.play()
                }, t.prototype.pause = function () {
                    !this.queued && this._player.pause()
                }, t.prototype.restart = function () {
                    !this.queued && this._player.restart()
                }, t.prototype.finish = function () {
                    this._player.finish()
                }, t.prototype.destroy = function () {
                    this.destroyed = !0, this._player.destroy()
                }, t.prototype.reset = function () {
                    !this.queued && this._player.reset()
                }, t.prototype.setPosition = function (t) {
                    this.queued || this._player.setPosition(t)
                }, t.prototype.getPosition = function () {
                    return this.queued ? 0 : this._player.getPosition()
                }, t.prototype.triggerCallback = function (t) {
                    var e = this._player;
                    e.triggerCallback && e.triggerCallback(t)
                }, t
            }();

        function sg(t) {
            return t && 1 === t.nodeType
        }

        function lg(t, e) {
            var n = t.style.display;
            return t.style.display = null != e ? e : "none", n
        }

        function ug(t, e, n, r, i) {
            var o = [];
            n.forEach(function (t) {
                return o.push(lg(t))
            });
            var a = [];
            r.forEach(function (n, r) {
                var o = {};
                n.forEach(function (t) {
                    var n = o[t] = e.computeStyle(r, t, i);
                    n && 0 != n.length || (r[eg] = tg, a.push(r))
                }), t.set(r, o)
            });
            var s = 0;
            return n.forEach(function (t) {
                return lg(t, o[s++])
            }), a
        }

        function cg(t, e) {
            var n = new Map;
            if (t.forEach(function (t) {
                return n.set(t, [])
            }), 0 == e.length) return n;
            var r = new Set(e), i = new Map;
            return e.forEach(function (t) {
                var e = function t(e) {
                    if (!e) return 1;
                    var o = i.get(e);
                    if (o) return o;
                    var a = e.parentNode;
                    return o = n.has(a) ? a : r.has(a) ? 1 : t(a), i.set(e, o), o
                }(t);
                1 !== e && n.get(e).push(t)
            }), n
        }

        var hg = "$$classes";

        function pg(t, e) {
            if (t.classList) t.classList.add(e); else {
                var n = t[hg];
                n || (n = t[hg] = {}), n[e] = !0
            }
        }

        function fg(t, e) {
            if (t.classList) t.classList.remove(e); else {
                var n = t[hg];
                n && delete n[e]
            }
        }

        function dg(t, e, n) {
            Rm(n).onDone(function () {
                return t.processLeaveNode(e)
            })
        }

        function mg(t, e, n) {
            var r = n.get(t);
            if (!r) return !1;
            var i = e.get(t);
            return i ? r.forEach(function (t) {
                return i.add(t)
            }) : e.set(t, r), n.delete(t), !0
        }

        var yg = function () {
            function t(t, e, n) {
                var r = this;
                this.bodyNode = t, this._driver = e, this._triggerCache = {}, this.onRemovalComplete = function (t, e) {
                }, this._transitionEngine = new og(t, e, n), this._timelineEngine = new $y(t, e, n), this._transitionEngine.onRemovalComplete = function (t, e) {
                    return r.onRemovalComplete(t, e)
                }
            }

            return t.prototype.registerTrigger = function (t, e, n, r, i) {
                var o = t + "-" + r, a = this._triggerCache[o];
                if (!a) {
                    var s = [], l = Ey(this._driver, i, s);
                    if (s.length) throw new Error('The animation trigger "' + r + '" has failed to build due to the following errors:\n - ' + s.join("\n - "));
                    a = function (t, e) {
                        return new Qy(t, e)
                    }(r, l), this._triggerCache[o] = a
                }
                this._transitionEngine.registerTrigger(e, r, a)
            }, t.prototype.register = function (t, e) {
                this._transitionEngine.register(t, e)
            }, t.prototype.destroy = function (t, e) {
                this._transitionEngine.destroy(t, e)
            }, t.prototype.onInsert = function (t, e, n, r) {
                this._transitionEngine.insertNode(t, e, n, r)
            }, t.prototype.onRemove = function (t, e, n, r) {
                this._transitionEngine.removeNode(t, e, r || !1, n)
            }, t.prototype.disableAnimations = function (t, e) {
                this._transitionEngine.markElementAsDisabled(t, e)
            }, t.prototype.process = function (t, e, n, r) {
                if ("@" == n.charAt(0)) {
                    var i = u(Fm(n), 2);
                    this._timelineEngine.command(i[0], e, i[1], r)
                } else this._transitionEngine.trigger(t, e, n, r)
            }, t.prototype.listen = function (t, e, n, r, i) {
                if ("@" == n.charAt(0)) {
                    var o = u(Fm(n), 2);
                    return this._timelineEngine.listen(o[0], e, o[1], i)
                }
                return this._transitionEngine.listen(t, e, n, r, i)
            }, t.prototype.flush = function (t) {
                void 0 === t && (t = -1), this._transitionEngine.flush(t)
            }, Object.defineProperty(t.prototype, "players", {
                get: function () {
                    return this._transitionEngine.players.concat(this._timelineEngine.players)
                }, enumerable: !0, configurable: !0
            }), t.prototype.whenRenderingDone = function () {
                return this._transitionEngine.whenRenderingDone()
            }, t
        }();

        function gg(t, e) {
            var n = null, r = null;
            return Array.isArray(e) && e.length ? (n = _g(e[0]), e.length > 1 && (r = _g(e[e.length - 1]))) : e && (n = _g(e)), n || r ? new vg(t, n, r) : null
        }

        var vg = function () {
            function t(e, n, r) {
                this._element = e, this._startStyles = n, this._endStyles = r, this._state = 0;
                var i = t.initialStylesByElement.get(e);
                i || t.initialStylesByElement.set(e, i = {}), this._initialStyles = i
            }

            return t.prototype.start = function () {
                this._state < 1 && (this._startStyles && ay(this._element, this._startStyles, this._initialStyles), this._state = 1)
            }, t.prototype.finish = function () {
                this.start(), this._state < 2 && (ay(this._element, this._initialStyles), this._endStyles && (ay(this._element, this._endStyles), this._endStyles = null), this._state = 1)
            }, t.prototype.destroy = function () {
                this.finish(), this._state < 3 && (t.initialStylesByElement.delete(this._element), this._startStyles && (sy(this._element, this._startStyles), this._endStyles = null), this._endStyles && (sy(this._element, this._endStyles), this._endStyles = null), ay(this._element, this._initialStyles), this._state = 3)
            }, t.initialStylesByElement = new WeakMap, t
        }();

        function _g(t) {
            for (var e = null, n = Object.keys(t), r = 0; r < n.length; r++) {
                var i = n[r];
                bg(i) && ((e = e || {})[i] = t[i])
            }
            return e
        }

        function bg(t) {
            return "display" === t || "position" === t
        }

        var wg = "animation", Cg = "animationend", Sg = function () {
            function t(t, e, n, r, i, o, a) {
                var s = this;
                this._element = t, this._name = e, this._duration = n, this._delay = r, this._easing = i, this._fillMode = o, this._onDoneFn = a, this._finished = !1, this._destroyed = !1, this._startTime = 0, this._position = 0, this._eventFn = function (t) {
                    return s._handleCallback(t)
                }
            }

            return t.prototype.apply = function () {
                var t, e, n;
                e = this._duration + "ms " + this._easing + " " + this._delay + "ms 1 normal " + this._fillMode + " " + this._name, (n = Pg(t = this._element, "").trim()).length && (function (t, e) {
                    for (var n = 0; n < t.length; n++) "," === t.charAt(n) && 0
                }(n), e = n + ", " + e), Og(t, "", e), kg(this._element, this._eventFn, !1), this._startTime = Date.now()
            }, t.prototype.pause = function () {
                Eg(this._element, this._name, "paused")
            }, t.prototype.resume = function () {
                Eg(this._element, this._name, "running")
            }, t.prototype.setPosition = function (t) {
                var e = xg(this._element, this._name);
                this._position = t * this._duration, Og(this._element, "Delay", "-" + this._position + "ms", e)
            }, t.prototype.getPosition = function () {
                return this._position
            }, t.prototype._handleCallback = function (t) {
                var e = t._ngTestManualTimestamp || Date.now(), n = 1e3 * parseFloat(t.elapsedTime.toFixed(3));
                t.animationName == this._name && Math.max(e - this._startTime, 0) >= this._delay && n >= this._duration && this.finish()
            }, t.prototype.finish = function () {
                this._finished || (this._finished = !0, this._onDoneFn(), kg(this._element, this._eventFn, !0))
            }, t.prototype.destroy = function () {
                var t, e, n, r;
                this._destroyed || (this._destroyed = !0, this.finish(), e = this._name, (r = Ag(n = Pg(t = this._element, "").split(","), e)) >= 0 && (n.splice(r, 1), Og(t, "", n.join(","))))
            }, t
        }();

        function Eg(t, e, n) {
            Og(t, "PlayState", n, xg(t, e))
        }

        function xg(t, e) {
            var n = Pg(t, "");
            return n.indexOf(",") > 0 ? Ag(n.split(","), e) : Ag([n], e)
        }

        function Ag(t, e) {
            for (var n = 0; n < t.length; n++) if (t[n].indexOf(e) >= 0) return n;
            return -1
        }

        function kg(t, e, n) {
            n ? t.removeEventListener(Cg, e) : t.addEventListener(Cg, e)
        }

        function Og(t, e, n, r) {
            var i = wg + e;
            if (null != r) {
                var o = t.style[i];
                if (o.length) {
                    var a = o.split(",");
                    a[r] = n, n = a.join(",")
                }
            }
            t.style[i] = n
        }

        function Pg(t, e) {
            return t.style[wg + e]
        }

        var Tg = "linear", Ig = function () {
            function t(t, e, n, r, i, o, a, s) {
                this.element = t, this.keyframes = e, this.animationName = n, this._duration = r, this._delay = i, this._finalStyles = a, this._specialStyles = s, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this.currentSnapshot = {}, this._state = 0, this.easing = o || Tg, this.totalTime = r + i, this._buildStyler()
            }

            return t.prototype.onStart = function (t) {
                this._onStartFns.push(t)
            }, t.prototype.onDone = function (t) {
                this._onDoneFns.push(t)
            }, t.prototype.onDestroy = function (t) {
                this._onDestroyFns.push(t)
            }, t.prototype.destroy = function () {
                this.init(), this._state >= 4 || (this._state = 4, this._styler.destroy(), this._flushStartFns(), this._flushDoneFns(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach(function (t) {
                    return t()
                }), this._onDestroyFns = [])
            }, t.prototype._flushDoneFns = function () {
                this._onDoneFns.forEach(function (t) {
                    return t()
                }), this._onDoneFns = []
            }, t.prototype._flushStartFns = function () {
                this._onStartFns.forEach(function (t) {
                    return t()
                }), this._onStartFns = []
            }, t.prototype.finish = function () {
                this.init(), this._state >= 3 || (this._state = 3, this._styler.finish(), this._flushStartFns(), this._specialStyles && this._specialStyles.finish(), this._flushDoneFns())
            }, t.prototype.setPosition = function (t) {
                this._styler.setPosition(t)
            }, t.prototype.getPosition = function () {
                return this._styler.getPosition()
            }, t.prototype.hasStarted = function () {
                return this._state >= 2
            }, t.prototype.init = function () {
                this._state >= 1 || (this._state = 1, this._styler.apply(), this._delay && this._styler.pause())
            }, t.prototype.play = function () {
                this.init(), this.hasStarted() || (this._flushStartFns(), this._state = 2, this._specialStyles && this._specialStyles.start()), this._styler.resume()
            }, t.prototype.pause = function () {
                this.init(), this._styler.pause()
            }, t.prototype.restart = function () {
                this.reset(), this.play()
            }, t.prototype.reset = function () {
                this._styler.destroy(), this._buildStyler(), this._styler.apply()
            }, t.prototype._buildStyler = function () {
                var t = this;
                this._styler = new Sg(this.element, this.animationName, this._duration, this._delay, this.easing, "forwards", function () {
                    return t.finish()
                })
            }, t.prototype.triggerCallback = function (t) {
                var e = "start" == t ? this._onStartFns : this._onDoneFns;
                e.forEach(function (t) {
                    return t()
                }), e.length = 0
            }, t.prototype.beforeDestroy = function () {
                var t = this;
                this.init();
                var e = {};
                if (this.hasStarted()) {
                    var n = this._state >= 3;
                    Object.keys(this._finalStyles).forEach(function (r) {
                        "offset" != r && (e[r] = n ? t._finalStyles[r] : vy(t.element, r))
                    })
                }
                this.currentSnapshot = e
            }, t
        }(), Rg = function (t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r.element = e, r._startingStyles = {}, r.__initialized = !1, r._styles = Zm(n), r
            }

            return i(e, t), e.prototype.init = function () {
                var e = this;
                !this.__initialized && this._startingStyles && (this.__initialized = !0, Object.keys(this._styles).forEach(function (t) {
                    e._startingStyles[t] = e.element.style[t]
                }), t.prototype.init.call(this))
            }, e.prototype.play = function () {
                var e = this;
                this._startingStyles && (this.init(), Object.keys(this._styles).forEach(function (t) {
                    return e.element.style.setProperty(t, e._styles[t])
                }), t.prototype.play.call(this))
            }, e.prototype.destroy = function () {
                var e = this;
                this._startingStyles && (Object.keys(this._startingStyles).forEach(function (t) {
                    var n = e._startingStyles[t];
                    n ? e.element.style.setProperty(t, n) : e.element.style.removeProperty(t)
                }), this._startingStyles = null, t.prototype.destroy.call(this))
            }, e
        }(vd), Ng = function () {
            function t() {
                this._count = 0, this._head = document.querySelector("head"), this._warningIssued = !1
            }

            return t.prototype.validateStyleProperty = function (t) {
                return Gm(t)
            }, t.prototype.matchesElement = function (t, e) {
                return Wm(t, e)
            }, t.prototype.containsElement = function (t, e) {
                return Km(t, e)
            }, t.prototype.query = function (t, e, n) {
                return Qm(t, e, n)
            }, t.prototype.computeStyle = function (t, e, n) {
                return window.getComputedStyle(t)[e]
            }, t.prototype.buildKeyframeElement = function (t, e, n) {
                n = n.map(function (t) {
                    return Zm(t)
                });
                var r = "@keyframes " + e + " {\n", i = "";
                n.forEach(function (t) {
                    i = " ";
                    var e = parseFloat(t.offset);
                    r += "" + i + 100 * e + "% {\n", i += " ", Object.keys(t).forEach(function (e) {
                        var n = t[e];
                        switch (e) {
                            case"offset":
                                return;
                            case"easing":
                                return void (n && (r += i + "animation-timing-function: " + n + ";\n"));
                            default:
                                return void (r += "" + i + e + ": " + n + ";\n")
                        }
                    }), r += i + "}\n"
                }), r += "}\n";
                var o = document.createElement("style");
                return o.innerHTML = r, o
            }, t.prototype.animate = function (t, e, n, r, i, o, a) {
                void 0 === o && (o = []), a && this._notifyFaultyScrubber();
                var s = o.filter(function (t) {
                    return t instanceof Ig
                }), l = {};
                my(n, r) && s.forEach(function (t) {
                    var e = t.currentSnapshot;
                    Object.keys(e).forEach(function (t) {
                        return l[t] = e[t]
                    })
                });
                var u = function (t) {
                    var e = {};
                    return t && (Array.isArray(t) ? t : [t]).forEach(function (t) {
                        Object.keys(t).forEach(function (n) {
                            "offset" != n && "easing" != n && (e[n] = t[n])
                        })
                    }), e
                }(e = yy(t, e, l));
                if (0 == n) return new Rg(t, u);
                var c = "gen_css_kf_" + this._count++, h = this.buildKeyframeElement(t, c, e);
                document.querySelector("head").appendChild(h);
                var p = gg(t, e), f = new Ig(t, e, c, n, r, i, u, p);
                return f.onDestroy(function () {
                    var t;
                    (t = h).parentNode.removeChild(t)
                }), f
            }, t.prototype._notifyFaultyScrubber = function () {
                this._warningIssued || (console.warn("@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n", "  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill."), this._warningIssued = !0)
            }, t
        }(), Dg = function () {
            function t(t, e, n, r) {
                this.element = t, this.keyframes = e, this.options = n, this._specialStyles = r, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._initialized = !1, this._finished = !1, this._started = !1, this._destroyed = !1, this.time = 0, this.parentPlayer = null, this.currentSnapshot = {}, this._duration = n.duration, this._delay = n.delay || 0, this.time = this._duration + this._delay
            }

            return t.prototype._onFinish = function () {
                this._finished || (this._finished = !0, this._onDoneFns.forEach(function (t) {
                    return t()
                }), this._onDoneFns = [])
            }, t.prototype.init = function () {
                this._buildPlayer(), this._preparePlayerBeforeStart()
            }, t.prototype._buildPlayer = function () {
                var t = this;
                if (!this._initialized) {
                    this._initialized = !0;
                    var e = this.keyframes;
                    this.domPlayer = this._triggerWebAnimation(this.element, e, this.options), this._finalKeyframe = e.length ? e[e.length - 1] : {}, this.domPlayer.addEventListener("finish", function () {
                        return t._onFinish()
                    })
                }
            }, t.prototype._preparePlayerBeforeStart = function () {
                this._delay ? this._resetDomPlayerState() : this.domPlayer.pause()
            }, t.prototype._triggerWebAnimation = function (t, e, n) {
                return t.animate(e, n)
            }, t.prototype.onStart = function (t) {
                this._onStartFns.push(t)
            }, t.prototype.onDone = function (t) {
                this._onDoneFns.push(t)
            }, t.prototype.onDestroy = function (t) {
                this._onDestroyFns.push(t)
            }, t.prototype.play = function () {
                this._buildPlayer(), this.hasStarted() || (this._onStartFns.forEach(function (t) {
                    return t()
                }), this._onStartFns = [], this._started = !0, this._specialStyles && this._specialStyles.start()), this.domPlayer.play()
            }, t.prototype.pause = function () {
                this.init(), this.domPlayer.pause()
            }, t.prototype.finish = function () {
                this.init(), this._specialStyles && this._specialStyles.finish(), this._onFinish(), this.domPlayer.finish()
            }, t.prototype.reset = function () {
                this._resetDomPlayerState(), this._destroyed = !1, this._finished = !1, this._started = !1
            }, t.prototype._resetDomPlayerState = function () {
                this.domPlayer && this.domPlayer.cancel()
            }, t.prototype.restart = function () {
                this.reset(), this.play()
            }, t.prototype.hasStarted = function () {
                return this._started
            }, t.prototype.destroy = function () {
                this._destroyed || (this._destroyed = !0, this._resetDomPlayerState(), this._onFinish(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach(function (t) {
                    return t()
                }), this._onDestroyFns = [])
            }, t.prototype.setPosition = function (t) {
                this.domPlayer.currentTime = t * this.time
            }, t.prototype.getPosition = function () {
                return this.domPlayer.currentTime / this.time
            }, Object.defineProperty(t.prototype, "totalTime", {
                get: function () {
                    return this._delay + this._duration
                }, enumerable: !0, configurable: !0
            }), t.prototype.beforeDestroy = function () {
                var t = this, e = {};
                this.hasStarted() && Object.keys(this._finalKeyframe).forEach(function (n) {
                    "offset" != n && (e[n] = t._finished ? t._finalKeyframe[n] : vy(t.element, n))
                }), this.currentSnapshot = e
            }, t.prototype.triggerCallback = function (t) {
                var e = "start" == t ? this._onStartFns : this._onDoneFns;
                e.forEach(function (t) {
                    return t()
                }), e.length = 0
            }, t
        }(), Bg = function () {
            function t() {
                this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(Mg().toString()), this._cssKeyframesDriver = new Ng
            }

            return t.prototype.validateStyleProperty = function (t) {
                return Gm(t)
            }, t.prototype.matchesElement = function (t, e) {
                return Wm(t, e)
            }, t.prototype.containsElement = function (t, e) {
                return Km(t, e)
            }, t.prototype.query = function (t, e, n) {
                return Qm(t, e, n)
            }, t.prototype.computeStyle = function (t, e, n) {
                return window.getComputedStyle(t)[e]
            }, t.prototype.overrideWebAnimationsSupport = function (t) {
                this._isNativeImpl = t
            }, t.prototype.animate = function (t, e, n, r, i, o, a) {
                if (void 0 === o && (o = []), !a && !this._isNativeImpl) return this._cssKeyframesDriver.animate(t, e, n, r, i, o);
                var s = {duration: n, delay: r, fill: 0 == r ? "both" : "forwards"};
                i && (s.easing = i);
                var l = {}, u = o.filter(function (t) {
                    return t instanceof Dg
                });
                my(n, r) && u.forEach(function (t) {
                    var e = t.currentSnapshot;
                    Object.keys(e).forEach(function (t) {
                        return l[t] = e[t]
                    })
                });
                var c = gg(t, e = yy(t, e = e.map(function (t) {
                    return ry(t, !1)
                }), l));
                return new Dg(t, e, s, c)
            }, t
        }();

        function Mg() {
            return "undefined" != typeof window && void 0 !== window.document && Element.prototype.animate || {}
        }

        var Vg = function (t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r._nextAnimationId = 0, r._renderer = e.createRenderer(n.body, {
                    id: "0",
                    encapsulation: re.None,
                    styles: [],
                    data: {animation: []}
                }), r
            }

            return i(e, t), e.prototype.build = function (t) {
                var e = this._nextAnimationId.toString();
                this._nextAnimationId++;
                var n = Array.isArray(t) ? dd(t) : t;
                return Lg(this._renderer, null, e, "register", [n]), new Fg(e, this._renderer)
            }, e
        }(hd), Fg = function (t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r._id = e, r._renderer = n, r
            }

            return i(e, t), e.prototype.create = function (t, e) {
                return new jg(this._id, t, e || {}, this._renderer)
            }, e
        }(pd), jg = function () {
            function t(t, e, n, r) {
                this.id = t, this.element = e, this._renderer = r, this.parentPlayer = null, this._started = !1, this.totalTime = 0, this._command("create", n)
            }

            return t.prototype._listen = function (t, e) {
                return this._renderer.listen(this.element, "@@" + this.id + ":" + t, e)
            }, t.prototype._command = function (t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                return Lg(this._renderer, this.element, this.id, t, e)
            }, t.prototype.onDone = function (t) {
                this._listen("done", t)
            }, t.prototype.onStart = function (t) {
                this._listen("start", t)
            }, t.prototype.onDestroy = function (t) {
                this._listen("destroy", t)
            }, t.prototype.init = function () {
                this._command("init")
            }, t.prototype.hasStarted = function () {
                return this._started
            }, t.prototype.play = function () {
                this._command("play"), this._started = !0
            }, t.prototype.pause = function () {
                this._command("pause")
            }, t.prototype.restart = function () {
                this._command("restart")
            }, t.prototype.finish = function () {
                this._command("finish")
            }, t.prototype.destroy = function () {
                this._command("destroy")
            }, t.prototype.reset = function () {
                this._command("reset")
            }, t.prototype.setPosition = function (t) {
                this._command("setPosition", t)
            }, t.prototype.getPosition = function () {
                return 0
            }, t
        }();

        function Lg(t, e, n, r, i) {
            return t.setProperty(e, "@@" + n + ":" + r, i)
        }

        var zg = function () {
            function t(t, e, n) {
                this.delegate = t, this.engine = e, this._zone = n, this._currentId = 0, this._microtaskId = 1, this._animationCallbacksBuffer = [], this._rendererCache = new Map, this._cdRecurDepth = 0, this.promise = Promise.resolve(0), e.onRemovalComplete = function (t, e) {
                    e && e.parentNode(t) && e.removeChild(t.parentNode, t)
                }
            }

            return t.prototype.createRenderer = function (t, e) {
                var n = this, r = this.delegate.createRenderer(t, e);
                if (!(t && e && e.data && e.data.animation)) {
                    var i = this._rendererCache.get(r);
                    return i || (i = new Ug("", r, this.engine), this._rendererCache.set(r, i)), i
                }
                var o = e.id, a = e.id + "-" + this._currentId;
                return this._currentId++, this.engine.register(a, t), e.data.animation.forEach(function (e) {
                    return n.engine.registerTrigger(o, a, t, e.name, e)
                }), new Hg(this, a, r, this.engine)
            }, t.prototype.begin = function () {
                this._cdRecurDepth++, this.delegate.begin && this.delegate.begin()
            }, t.prototype._scheduleCountTask = function () {
                var t = this;
                this.promise.then(function () {
                    t._microtaskId++
                })
            }, t.prototype.scheduleListenerCallback = function (t, e, n) {
                var r = this;
                t >= 0 && t < this._microtaskId ? this._zone.run(function () {
                    return e(n)
                }) : (0 == this._animationCallbacksBuffer.length && Promise.resolve(null).then(function () {
                    r._zone.run(function () {
                        r._animationCallbacksBuffer.forEach(function (t) {
                            var e = u(t, 2);
                            (0, e[0])(e[1])
                        }), r._animationCallbacksBuffer = []
                    })
                }), this._animationCallbacksBuffer.push([e, n]))
            }, t.prototype.end = function () {
                var t = this;
                this._cdRecurDepth--, 0 == this._cdRecurDepth && this._zone.runOutsideAngular(function () {
                    t._scheduleCountTask(), t.engine.flush(t._microtaskId)
                }), this.delegate.end && this.delegate.end()
            }, t.prototype.whenRenderingDone = function () {
                return this.engine.whenRenderingDone()
            }, t
        }(), Ug = function () {
            function t(t, e, n) {
                this.namespaceId = t, this.delegate = e, this.engine = n, this.destroyNode = this.delegate.destroyNode ? function (t) {
                    return e.destroyNode(t)
                } : null
            }

            return Object.defineProperty(t.prototype, "data", {
                get: function () {
                    return this.delegate.data
                }, enumerable: !0, configurable: !0
            }), t.prototype.destroy = function () {
                this.engine.destroy(this.namespaceId, this.delegate), this.delegate.destroy()
            }, t.prototype.createElement = function (t, e) {
                return this.delegate.createElement(t, e)
            }, t.prototype.createComment = function (t) {
                return this.delegate.createComment(t)
            }, t.prototype.createText = function (t) {
                return this.delegate.createText(t)
            }, t.prototype.appendChild = function (t, e) {
                this.delegate.appendChild(t, e), this.engine.onInsert(this.namespaceId, e, t, !1)
            }, t.prototype.insertBefore = function (t, e, n) {
                this.delegate.insertBefore(t, e, n), this.engine.onInsert(this.namespaceId, e, t, !0)
            }, t.prototype.removeChild = function (t, e, n) {
                this.engine.onRemove(this.namespaceId, e, this.delegate, n)
            }, t.prototype.selectRootElement = function (t, e) {
                return this.delegate.selectRootElement(t, e)
            }, t.prototype.parentNode = function (t) {
                return this.delegate.parentNode(t)
            }, t.prototype.nextSibling = function (t) {
                return this.delegate.nextSibling(t)
            }, t.prototype.setAttribute = function (t, e, n, r) {
                this.delegate.setAttribute(t, e, n, r)
            }, t.prototype.removeAttribute = function (t, e, n) {
                this.delegate.removeAttribute(t, e, n)
            }, t.prototype.addClass = function (t, e) {
                this.delegate.addClass(t, e)
            }, t.prototype.removeClass = function (t, e) {
                this.delegate.removeClass(t, e)
            }, t.prototype.setStyle = function (t, e, n, r) {
                this.delegate.setStyle(t, e, n, r)
            }, t.prototype.removeStyle = function (t, e, n) {
                this.delegate.removeStyle(t, e, n)
            }, t.prototype.setProperty = function (t, e, n) {
                "@" == e.charAt(0) && "@.disabled" == e ? this.disableAnimations(t, !!n) : this.delegate.setProperty(t, e, n)
            }, t.prototype.setValue = function (t, e) {
                this.delegate.setValue(t, e)
            }, t.prototype.listen = function (t, e, n) {
                return this.delegate.listen(t, e, n)
            }, t.prototype.disableAnimations = function (t, e) {
                this.engine.disableAnimations(t, e)
            }, t
        }(), Hg = function (t) {
            function e(e, n, r, i) {
                var o = t.call(this, n, r, i) || this;
                return o.factory = e, o.namespaceId = n, o
            }

            return i(e, t), e.prototype.setProperty = function (t, e, n) {
                "@" == e.charAt(0) ? "." == e.charAt(1) && "@.disabled" == e ? this.disableAnimations(t, n = void 0 === n || !!n) : this.engine.process(this.namespaceId, t, e.substr(1), n) : this.delegate.setProperty(t, e, n)
            }, e.prototype.listen = function (t, e, n) {
                var r, i, o, a = this;
                if ("@" == e.charAt(0)) {
                    var s = function (t) {
                        switch (t) {
                            case"body":
                                return document.body;
                            case"document":
                                return document;
                            case"window":
                                return window;
                            default:
                                return t
                        }
                    }(t), l = e.substr(1), c = "";
                    return "@" != l.charAt(0) && (l = (r = u((i = l, o = i.indexOf("."), [i.substring(0, o), i.substr(o + 1)]), 2))[0], c = r[1]), this.engine.listen(this.namespaceId, s, l, c, function (t) {
                        a.factory.scheduleListenerCallback(t._data || -1, n, t)
                    })
                }
                return this.delegate.listen(t, e, n)
            }, e
        }(Ug), qg = function (t) {
            function e(e, n, r) {
                return t.call(this, e.body, n, r) || this
            }

            return i(e, t), e
        }(yg);

        function Gg() {
            return "function" == typeof Mg() ? new Bg : new Ng
        }

        function Wg() {
            return new Uy
        }

        function Kg(t, e, n) {
            return new zg(t, e, n)
        }

        var Qg = new Mt("AnimationModuleType"), Zg = function () {
            return function () {
            }
        }(), Yg = tr({
            encapsulation: 2,
            styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}@media (-ms-high-contrast:active){.mat-form-field-infix{border-image:linear-gradient(transparent,transparent)}}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform .4s cubic-bezier(.25,.8,.25,1),color .4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-empty.mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scaleY(1.0001)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform .3s cubic-bezier(.25,.8,.25,1),opacity .1s cubic-bezier(.25,.8,.25,1),background-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-label-wrapper .mat-icon,.mat-form-field-subscript-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}@media (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:'';display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}@media (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}", ".mat-input-element{font:inherit;background:0 0;color:currentColor;border:none;outline:0;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=month]::after,.mat-input-element[type=time]::after,.mat-input-element[type=week]::after{content:' ';white-space:pre;width:1px}.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button,.mat-input-element::-webkit-inner-spin-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:0 0}@media (-ms-high-contrast:active){.mat-focused select.mat-input-element::-ms-value{color:inherit}}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:'';width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-start{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start{border-width:2px;transition:border-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity .1s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline{transition:none}", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}"],
            data: {
                animation: [{
                    type: 7,
                    name: "transitionMessages",
                    definitions: [{
                        type: 0,
                        name: "enter",
                        styles: {type: 6, styles: {opacity: 1, transform: "translateY(0%)"}, offset: null},
                        options: void 0
                    }, {
                        type: 1,
                        expr: "void => enter",
                        animation: [{type: 6, styles: {opacity: 0, transform: "translateY(-100%)"}, offset: null}, {
                            type: 4,
                            styles: null,
                            timings: "300ms cubic-bezier(0.55, 0, 0.55, 0.2)"
                        }],
                        options: null
                    }],
                    options: {}
                }]
            }
        });

        function $g(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 8, null, null, null, null, null, null, null)), (t()(), zo(1, 0, null, null, 3, "div", [["class", "mat-form-field-outline"]], null, null, null, null, null)), (t()(), zo(2, 0, null, null, 0, "div", [["class", "mat-form-field-outline-start"]], null, null, null, null, null)), (t()(), zo(3, 0, null, null, 0, "div", [["class", "mat-form-field-outline-gap"]], null, null, null, null, null)), (t()(), zo(4, 0, null, null, 0, "div", [["class", "mat-form-field-outline-end"]], null, null, null, null, null)), (t()(), zo(5, 0, null, null, 3, "div", [["class", "mat-form-field-outline mat-form-field-outline-thick"]], null, null, null, null, null)), (t()(), zo(6, 0, null, null, 0, "div", [["class", "mat-form-field-outline-start"]], null, null, null, null, null)), (t()(), zo(7, 0, null, null, 0, "div", [["class", "mat-form-field-outline-gap"]], null, null, null, null, null)), (t()(), zo(8, 0, null, null, 0, "div", [["class", "mat-form-field-outline-end"]], null, null, null, null, null))], null, null)
        }

        function Xg(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 1, "div", [["class", "mat-form-field-prefix"]], null, null, null, null, null)), $o(null, 0)], null, null)
        }

        function Jg(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 2, null, null, null, null, null, null, null)), $o(null, 2), (t()(), ta(2, null, ["", ""]))], null, function (t, e) {
                t(e, 2, 0, e.component._control.placeholder)
            })
        }

        function tv(t) {
            return ra(0, [$o(null, 3), (t()(), Lo(0, null, null, 0))], null, null)
        }

        function ev(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 1, "span", [["aria-hidden", "true"], ["class", "mat-placeholder-required mat-form-field-required-marker"]], null, null, null, null, null)), (t()(), ta(-1, null, [" *"]))], null, null)
        }

        function nv(t) {
            return ra(0, [(t()(), zo(0, 0, [[4, 0], ["label", 1]], null, 8, "label", [["class", "mat-form-field-label"]], [[8, "id", 0], [1, "for", 0], [1, "aria-owns", 0], [2, "mat-empty", null], [2, "mat-form-field-empty", null], [2, "mat-accent", null], [2, "mat-warn", null]], [[null, "cdkObserveContent"]], function (t, e, n) {
                var r = !0;
                return "cdkObserveContent" === e && (r = !1 !== t.component.updateOutlineGap() && r), r
            }, null, null)), hi(1, 16384, null, 0, Fs, [], {ngSwitch: [0, "ngSwitch"]}, null), hi(2, 1196032, null, 0, Am, [xm, ln, ro], {disabled: [0, "disabled"]}, {event: "cdkObserveContent"}), (t()(), Lo(16777216, null, null, 1, null, Jg)), hi(4, 278528, null, 0, js, [Bn, Nn, Fs], {ngSwitchCase: [0, "ngSwitchCase"]}, null), (t()(), Lo(16777216, null, null, 1, null, tv)), hi(6, 278528, null, 0, js, [Bn, Nn, Fs], {ngSwitchCase: [0, "ngSwitchCase"]}, null), (t()(), Lo(16777216, null, null, 1, null, ev)), hi(8, 16384, null, 0, Ds, [Bn, Nn], {ngIf: [0, "ngIf"]}, null)], function (t, e) {
                var n = e.component;
                t(e, 1, 0, n._hasLabel()), t(e, 2, 0, "outline" != n.appearance), t(e, 4, 0, !1), t(e, 6, 0, !0), t(e, 8, 0, !n.hideRequiredMarker && n._control.required && !n._control.disabled)
            }, function (t, e) {
                var n = e.component;
                t(e, 0, 0, n._labelId, n._control.id, n._control.id, n._control.empty && !n._shouldAlwaysFloat, n._control.empty && !n._shouldAlwaysFloat, "accent" == n.color, "warn" == n.color)
            })
        }

        function rv(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 1, "div", [["class", "mat-form-field-suffix"]], null, null, null, null, null)), $o(null, 4)], null, null)
        }

        function iv(t) {
            return ra(0, [(t()(), zo(0, 0, [[1, 0], ["underline", 1]], null, 1, "div", [["class", "mat-form-field-underline"]], null, null, null, null, null)), (t()(), zo(1, 0, null, null, 0, "span", [["class", "mat-form-field-ripple"]], [[2, "mat-accent", null], [2, "mat-warn", null]], null, null, null, null))], null, function (t, e) {
                var n = e.component;
                t(e, 1, 0, "accent" == n.color, "warn" == n.color)
            })
        }

        function ov(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 1, "div", [], [[24, "@transitionMessages", 0]], null, null, null, null)), $o(null, 5)], null, function (t, e) {
                t(e, 0, 0, e.component._subscriptAnimationState)
            })
        }

        function av(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 1, "div", [["class", "mat-hint"]], [[8, "id", 0]], null, null, null, null)), (t()(), ta(1, null, ["", ""]))], null, function (t, e) {
                var n = e.component;
                t(e, 0, 0, n._hintLabelId), t(e, 1, 0, n.hintLabel)
            })
        }

        function sv(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 5, "div", [["class", "mat-form-field-hint-wrapper"]], [[24, "@transitionMessages", 0]], null, null, null, null)), (t()(), Lo(16777216, null, null, 1, null, av)), hi(2, 16384, null, 0, Ds, [Bn, Nn], {ngIf: [0, "ngIf"]}, null), $o(null, 6), (t()(), zo(4, 0, null, null, 0, "div", [["class", "mat-form-field-hint-spacer"]], null, null, null, null, null)), $o(null, 7)], function (t, e) {
                t(e, 2, 0, e.component.hintLabel)
            }, function (t, e) {
                t(e, 0, 0, e.component._subscriptAnimationState)
            })
        }

        function lv(t) {
            return ra(2, [Wo(671088640, 1, {underlineRef: 0}), Wo(402653184, 2, {_connectionContainerRef: 0}), Wo(671088640, 3, {_inputContainerRef: 0}), Wo(671088640, 4, {_label: 0}), (t()(), zo(4, 0, null, null, 20, "div", [["class", "mat-form-field-wrapper"]], null, null, null, null, null)), (t()(), zo(5, 0, [[2, 0], ["connectionContainer", 1]], null, 11, "div", [["class", "mat-form-field-flex"]], null, [[null, "click"]], function (t, e, n) {
                var r = !0, i = t.component;
                return "click" === e && (r = !1 !== (i._control.onContainerClick && i._control.onContainerClick(n)) && r), r
            }, null, null)), (t()(), Lo(16777216, null, null, 1, null, $g)), hi(7, 16384, null, 0, Ds, [Bn, Nn], {ngIf: [0, "ngIf"]}, null), (t()(), Lo(16777216, null, null, 1, null, Xg)), hi(9, 16384, null, 0, Ds, [Bn, Nn], {ngIf: [0, "ngIf"]}, null), (t()(), zo(10, 0, [[3, 0], ["inputContainer", 1]], null, 4, "div", [["class", "mat-form-field-infix"]], null, null, null, null, null)), $o(null, 1), (t()(), zo(12, 0, null, null, 2, "span", [["class", "mat-form-field-label-wrapper"]], null, null, null, null, null)), (t()(), Lo(16777216, null, null, 1, null, nv)), hi(14, 16384, null, 0, Ds, [Bn, Nn], {ngIf: [0, "ngIf"]}, null), (t()(), Lo(16777216, null, null, 1, null, rv)), hi(16, 16384, null, 0, Ds, [Bn, Nn], {ngIf: [0, "ngIf"]}, null), (t()(), Lo(16777216, null, null, 1, null, iv)), hi(18, 16384, null, 0, Ds, [Bn, Nn], {ngIf: [0, "ngIf"]}, null), (t()(), zo(19, 0, null, null, 5, "div", [["class", "mat-form-field-subscript-wrapper"]], null, null, null, null, null)), hi(20, 16384, null, 0, Fs, [], {ngSwitch: [0, "ngSwitch"]}, null), (t()(), Lo(16777216, null, null, 1, null, ov)), hi(22, 278528, null, 0, js, [Bn, Nn, Fs], {ngSwitchCase: [0, "ngSwitchCase"]}, null), (t()(), Lo(16777216, null, null, 1, null, sv)), hi(24, 278528, null, 0, js, [Bn, Nn, Fs], {ngSwitchCase: [0, "ngSwitchCase"]}, null)], function (t, e) {
                var n = e.component;
                t(e, 7, 0, "outline" == n.appearance), t(e, 9, 0, n._prefixChildren.length), t(e, 14, 0, n._hasFloatingLabel()), t(e, 16, 0, n._suffixChildren.length), t(e, 18, 0, "outline" != n.appearance), t(e, 20, 0, n._getDisplayedMessages()), t(e, 22, 0, "error"), t(e, 24, 0, "hint")
            }, null)
        }

        var uv = function () {
            function t(t) {
                this.durationSelector = t
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new cv(t, this.durationSelector))
            }, t
        }(), cv = function (t) {
            function e(e, n) {
                var r = t.call(this, e) || this;
                return r.durationSelector = n, r.hasValue = !1, r
            }

            return i(e, t), e.prototype._next = function (t) {
                if (this.value = t, this.hasValue = !0, !this.throttled) {
                    var e = void 0;
                    try {
                        e = (0, this.durationSelector)(t)
                    } catch (r) {
                        return this.destination.error(r)
                    }
                    var n = Q(this, e);
                    !n || n.closed ? this.clearThrottle() : this.add(this.throttled = n)
                }
            }, e.prototype.clearThrottle = function () {
                var t = this.value, e = this.hasValue, n = this.throttled;
                n && (this.remove(n), this.throttled = null, n.unsubscribe()), e && (this.value = null, this.hasValue = !1, this.destination.next(t))
            }, e.prototype.notifyNext = function (t, e, n, r) {
                this.clearThrottle()
            }, e.prototype.notifyComplete = function () {
                this.clearThrottle()
            }, e
        }(Z);

        function hv(t) {
            return !h(t) && t - parseFloat(t) + 1 >= 0
        }

        function pv(t) {
            var e = t.index, n = t.period, r = t.subscriber;
            if (r.next(e), !r.closed) {
                if (-1 === n) return r.complete();
                t.index = e + 1, this.schedule(t, n)
            }
        }

        function fv(t, e) {
            return void 0 === e && (e = Bd), n = function () {
                return function (t, e, n) {
                    void 0 === t && (t = 0);
                    var r = -1;
                    return hv(e) ? r = Number(e) < 1 ? 1 : Number(e) : V(e) && (n = e), V(n) || (n = Bd), new P(function (e) {
                        var i = hv(t) ? t : +t - n.now();
                        return n.schedule(pv, i, {index: 0, period: r, subscriber: e})
                    })
                }(t, e)
            }, function (t) {
                return t.lift(new uv(n))
            };
            var n
        }

        var dv = Id({passive: !0}), mv = function () {
                function t(t, e) {
                    this._platform = t, this._ngZone = e, this._monitoredElements = new Map
                }

                return t.prototype.monitor = function (t) {
                    var e = this;
                    if (!this._platform.isBrowser) return Ys;
                    var n = Ed(t), r = this._monitoredElements.get(n);
                    if (r) return r.subject.asObservable();
                    var i = new B, o = "cdk-text-field-autofilled", a = function (t) {
                        "cdk-text-field-autofill-start" !== t.animationName || n.classList.contains(o) ? "cdk-text-field-autofill-end" === t.animationName && n.classList.contains(o) && (n.classList.remove(o), e._ngZone.run(function () {
                            return i.next({target: t.target, isAutofilled: !1})
                        })) : (n.classList.add(o), e._ngZone.run(function () {
                            return i.next({target: t.target, isAutofilled: !0})
                        }))
                    };
                    return this._ngZone.runOutsideAngular(function () {
                        n.addEventListener("animationstart", a, dv), n.classList.add("cdk-text-field-autofill-monitored")
                    }), this._monitoredElements.set(n, {
                        subject: i, unlisten: function () {
                            n.removeEventListener("animationstart", a, dv)
                        }
                    }), i.asObservable()
                }, t.prototype.stopMonitoring = function (t) {
                    var e = Ed(t), n = this._monitoredElements.get(e);
                    n && (n.unlisten(), n.subject.complete(), e.classList.remove("cdk-text-field-autofill-monitored"), e.classList.remove("cdk-text-field-autofilled"), this._monitoredElements.delete(e))
                }, t.prototype.ngOnDestroy = function () {
                    var t = this;
                    this._monitoredElements.forEach(function (e, n) {
                        return t.stopMonitoring(n)
                    })
                }, t.ngInjectableDef = Ct({
                    factory: function () {
                        return new t(Dt(kd), Dt(ro))
                    }, token: t, providedIn: "root"
                }), t
            }(), yv = function () {
                return function () {
                }
            }(), gv = ["button", "checkbox", "file", "hidden", "image", "radio", "range", "reset", "submit"], vv = 0,
            _v = function (t) {
                function e(e, n, r, i, o, a, s, l, u) {
                    var c = t.call(this, a, i, o, r) || this;
                    c._elementRef = e, c._platform = n, c.ngControl = r, c._autofillMonitor = l, c._uid = "mat-input-" + vv++, c._isServer = !1, c._isNativeSelect = !1, c.focused = !1, c.stateChanges = new B, c.controlType = "mat-input", c.autofilled = !1, c._disabled = !1, c._required = !1, c._type = "text", c._readonly = !1, c._neverEmptyInputTypes = ["date", "datetime", "datetime-local", "month", "time", "week"].filter(function (t) {
                        return Td().has(t)
                    });
                    var h = c._elementRef.nativeElement;
                    return c._inputValueAccessor = s || h, c._previousNativeValue = c.value, c.id = c.id, n.IOS && u.runOutsideAngular(function () {
                        e.nativeElement.addEventListener("keyup", function (t) {
                            var e = t.target;
                            e.value || e.selectionStart || e.selectionEnd || (e.setSelectionRange(1, 1), e.setSelectionRange(0, 0))
                        })
                    }), c._isServer = !c._platform.isBrowser, c._isNativeSelect = "select" === h.nodeName.toLowerCase(), c._isNativeSelect && (c.controlType = h.multiple ? "mat-native-select-multiple" : "mat-native-select"), c
                }

                return i(e, t), Object.defineProperty(e.prototype, "disabled", {
                    get: function () {
                        return this.ngControl && null !== this.ngControl.disabled ? this.ngControl.disabled : this._disabled
                    }, set: function (t) {
                        this._disabled = wd(t), this.focused && (this.focused = !1, this.stateChanges.next())
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(e.prototype, "id", {
                    get: function () {
                        return this._id
                    }, set: function (t) {
                        this._id = t || this._uid
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(e.prototype, "required", {
                    get: function () {
                        return this._required
                    }, set: function (t) {
                        this._required = wd(t)
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(e.prototype, "type", {
                    get: function () {
                        return this._type
                    }, set: function (t) {
                        this._type = t || "text", this._validateType(), !this._isTextarea() && Td().has(this._type) && (this._elementRef.nativeElement.type = this._type)
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(e.prototype, "value", {
                    get: function () {
                        return this._inputValueAccessor.value
                    }, set: function (t) {
                        t !== this.value && (this._inputValueAccessor.value = t, this.stateChanges.next())
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(e.prototype, "readonly", {
                    get: function () {
                        return this._readonly
                    }, set: function (t) {
                        this._readonly = wd(t)
                    }, enumerable: !0, configurable: !0
                }), e.prototype.ngOnInit = function () {
                    var t = this;
                    this._platform.isBrowser && this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(function (e) {
                        t.autofilled = e.isAutofilled, t.stateChanges.next()
                    })
                }, e.prototype.ngOnChanges = function () {
                    this.stateChanges.next()
                }, e.prototype.ngOnDestroy = function () {
                    this.stateChanges.complete(), this._platform.isBrowser && this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement)
                }, e.prototype.ngDoCheck = function () {
                    this.ngControl && this.updateErrorState(), this._dirtyCheckNativeValue()
                }, e.prototype.focus = function () {
                    this._elementRef.nativeElement.focus()
                }, e.prototype._focusChanged = function (t) {
                    t === this.focused || this.readonly && t || (this.focused = t, this.stateChanges.next())
                }, e.prototype._onInput = function () {
                }, e.prototype._dirtyCheckNativeValue = function () {
                    var t = this._elementRef.nativeElement.value;
                    this._previousNativeValue !== t && (this._previousNativeValue = t, this.stateChanges.next())
                }, e.prototype._validateType = function () {
                    if (gv.indexOf(this._type) > -1) throw Error('Input type "' + this._type + "\" isn't supported by matInput.")
                }, e.prototype._isNeverEmpty = function () {
                    return this._neverEmptyInputTypes.indexOf(this._type) > -1
                }, e.prototype._isBadInput = function () {
                    var t = this._elementRef.nativeElement.validity;
                    return t && t.badInput
                }, e.prototype._isTextarea = function () {
                    return "textarea" === this._elementRef.nativeElement.nodeName.toLowerCase()
                }, Object.defineProperty(e.prototype, "empty", {
                    get: function () {
                        return !(this._isNeverEmpty() || this._elementRef.nativeElement.value || this._isBadInput() || this.autofilled)
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(e.prototype, "shouldLabelFloat", {
                    get: function () {
                        if (this._isNativeSelect) {
                            var t = this._elementRef.nativeElement, e = t.options[0];
                            return this.focused || t.multiple || !this.empty || !!(t.selectedIndex > -1 && e && e.label)
                        }
                        return this.focused || !this.empty
                    }, enumerable: !0, configurable: !0
                }), e.prototype.setDescribedByIds = function (t) {
                    this._ariaDescribedby = t.join(" ")
                }, e.prototype.onContainerClick = function () {
                    this.focused || this.focus()
                }, e
            }(Wd(function () {
                return function (t, e, n, r) {
                    this._defaultErrorStateMatcher = t, this._parentForm = e, this._parentFormGroup = n, this.ngControl = r
                }
            }())), bv = function () {
                return function () {
                }
            }(), wv = function () {
                function t() {
                }

                return t.prototype.ngOnInit = function () {
                }, t
            }(), Cv = tr({
                encapsulation: 0,
                styles: [["#errorAlert[_ngcontent-%COMP%]{display:flex;margin-left:420px}"]],
                data: {}
            });

        function Sv(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 2, "div", [["class", "alert alert-danger"]], null, null, null, null, null)), (t()(), zo(1, 0, null, null, 1, "div", [["id", "errorAlert"]], null, null, null, null, null)), (t()(), ta(2, null, ["", ""]))], null, function (t, e) {
                t(e, 2, 0, e.component.errorMessage)
            })
        }

        function Ev(t) {
            return ra(0, [(t()(), Lo(16777216, null, null, 1, null, Sv)), hi(1, 16384, null, 0, Ds, [Bn, Nn], {ngIf: [0, "ngIf"]}, null)], function (t, e) {
                var n = e.component;
                t(e, 1, 0, n.control && n.control.invalid && (n.control.dirty || n.control.touched))
            }, null)
        }

        var xv = function () {
            return function () {
            }
        }(), Av = function () {
            return function () {
            }
        }(), kv = function () {
            function t(t) {
                var e = this;
                this.normalizedNames = new Map, this.lazyUpdate = null, t ? this.lazyInit = "string" == typeof t ? function () {
                    e.headers = new Map, t.split("\n").forEach(function (t) {
                        var n = t.indexOf(":");
                        if (n > 0) {
                            var r = t.slice(0, n), i = r.toLowerCase(), o = t.slice(n + 1).trim();
                            e.maybeSetNormalizedName(r, i), e.headers.has(i) ? e.headers.get(i).push(o) : e.headers.set(i, [o])
                        }
                    })
                } : function () {
                    e.headers = new Map, Object.keys(t).forEach(function (n) {
                        var r = t[n], i = n.toLowerCase();
                        "string" == typeof r && (r = [r]), r.length > 0 && (e.headers.set(i, r), e.maybeSetNormalizedName(n, i))
                    })
                } : this.headers = new Map
            }

            return t.prototype.has = function (t) {
                return this.init(), this.headers.has(t.toLowerCase())
            }, t.prototype.get = function (t) {
                this.init();
                var e = this.headers.get(t.toLowerCase());
                return e && e.length > 0 ? e[0] : null
            }, t.prototype.keys = function () {
                return this.init(), Array.from(this.normalizedNames.values())
            }, t.prototype.getAll = function (t) {
                return this.init(), this.headers.get(t.toLowerCase()) || null
            }, t.prototype.append = function (t, e) {
                return this.clone({name: t, value: e, op: "a"})
            }, t.prototype.set = function (t, e) {
                return this.clone({name: t, value: e, op: "s"})
            }, t.prototype.delete = function (t, e) {
                return this.clone({name: t, value: e, op: "d"})
            }, t.prototype.maybeSetNormalizedName = function (t, e) {
                this.normalizedNames.has(e) || this.normalizedNames.set(e, t)
            }, t.prototype.init = function () {
                var e = this;
                this.lazyInit && (this.lazyInit instanceof t ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(function (t) {
                    return e.applyUpdate(t)
                }), this.lazyUpdate = null))
            }, t.prototype.copyFrom = function (t) {
                var e = this;
                t.init(), Array.from(t.headers.keys()).forEach(function (n) {
                    e.headers.set(n, t.headers.get(n)), e.normalizedNames.set(n, t.normalizedNames.get(n))
                })
            }, t.prototype.clone = function (e) {
                var n = new t;
                return n.lazyInit = this.lazyInit && this.lazyInit instanceof t ? this.lazyInit : this, n.lazyUpdate = (this.lazyUpdate || []).concat([e]), n
            }, t.prototype.applyUpdate = function (t) {
                var e = t.name.toLowerCase();
                switch (t.op) {
                    case"a":
                    case"s":
                        var n = t.value;
                        if ("string" == typeof n && (n = [n]), 0 === n.length) return;
                        this.maybeSetNormalizedName(t.name, e);
                        var r = ("a" === t.op ? this.headers.get(e) : void 0) || [];
                        r.push.apply(r, c(n)), this.headers.set(e, r);
                        break;
                    case"d":
                        var i = t.value;
                        if (i) {
                            var o = this.headers.get(e);
                            if (!o) return;
                            0 === (o = o.filter(function (t) {
                                return -1 === i.indexOf(t)
                            })).length ? (this.headers.delete(e), this.normalizedNames.delete(e)) : this.headers.set(e, o)
                        } else this.headers.delete(e), this.normalizedNames.delete(e)
                }
            }, t.prototype.forEach = function (t) {
                var e = this;
                this.init(), Array.from(this.normalizedNames.keys()).forEach(function (n) {
                    return t(e.normalizedNames.get(n), e.headers.get(n))
                })
            }, t
        }(), Ov = function () {
            function t() {
            }

            return t.prototype.encodeKey = function (t) {
                return Pv(t)
            }, t.prototype.encodeValue = function (t) {
                return Pv(t)
            }, t.prototype.decodeKey = function (t) {
                return decodeURIComponent(t)
            }, t.prototype.decodeValue = function (t) {
                return decodeURIComponent(t)
            }, t
        }();

        function Pv(t) {
            return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/gi, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%2B/gi, "+").replace(/%3D/gi, "=").replace(/%3F/gi, "?").replace(/%2F/gi, "/")
        }

        var Tv = function () {
            function t(t) {
                var e, n, r, i = this;
                if (void 0 === t && (t = {}), this.updates = null, this.cloneFrom = null, this.encoder = t.encoder || new Ov, t.fromString) {
                    if (t.fromObject) throw new Error("Cannot specify both fromString and fromObject.");
                    this.map = (e = t.fromString, n = this.encoder, r = new Map, e.length > 0 && e.split("&").forEach(function (t) {
                        var e = t.indexOf("="),
                            i = u(-1 == e ? [n.decodeKey(t), ""] : [n.decodeKey(t.slice(0, e)), n.decodeValue(t.slice(e + 1))], 2),
                            o = i[0], a = i[1], s = r.get(o) || [];
                        s.push(a), r.set(o, s)
                    }), r)
                } else t.fromObject ? (this.map = new Map, Object.keys(t.fromObject).forEach(function (e) {
                    var n = t.fromObject[e];
                    i.map.set(e, Array.isArray(n) ? n : [n])
                })) : this.map = null
            }

            return t.prototype.has = function (t) {
                return this.init(), this.map.has(t)
            }, t.prototype.get = function (t) {
                this.init();
                var e = this.map.get(t);
                return e ? e[0] : null
            }, t.prototype.getAll = function (t) {
                return this.init(), this.map.get(t) || null
            }, t.prototype.keys = function () {
                return this.init(), Array.from(this.map.keys())
            }, t.prototype.append = function (t, e) {
                return this.clone({param: t, value: e, op: "a"})
            }, t.prototype.set = function (t, e) {
                return this.clone({param: t, value: e, op: "s"})
            }, t.prototype.delete = function (t, e) {
                return this.clone({param: t, value: e, op: "d"})
            }, t.prototype.toString = function () {
                var t = this;
                return this.init(), this.keys().map(function (e) {
                    var n = t.encoder.encodeKey(e);
                    return t.map.get(e).map(function (e) {
                        return n + "=" + t.encoder.encodeValue(e)
                    }).join("&")
                }).join("&")
            }, t.prototype.clone = function (e) {
                var n = new t({encoder: this.encoder});
                return n.cloneFrom = this.cloneFrom || this, n.updates = (this.updates || []).concat([e]), n
            }, t.prototype.init = function () {
                var t = this;
                null === this.map && (this.map = new Map), null !== this.cloneFrom && (this.cloneFrom.init(), this.cloneFrom.keys().forEach(function (e) {
                    return t.map.set(e, t.cloneFrom.map.get(e))
                }), this.updates.forEach(function (e) {
                    switch (e.op) {
                        case"a":
                        case"s":
                            var n = ("a" === e.op ? t.map.get(e.param) : void 0) || [];
                            n.push(e.value), t.map.set(e.param, n);
                            break;
                        case"d":
                            if (void 0 === e.value) {
                                t.map.delete(e.param);
                                break
                            }
                            var r = t.map.get(e.param) || [], i = r.indexOf(e.value);
                            -1 !== i && r.splice(i, 1), r.length > 0 ? t.map.set(e.param, r) : t.map.delete(e.param)
                    }
                }), this.cloneFrom = this.updates = null)
            }, t
        }();

        function Iv(t) {
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
        }

        function Rv(t) {
            return "undefined" != typeof Blob && t instanceof Blob
        }

        function Nv(t) {
            return "undefined" != typeof FormData && t instanceof FormData
        }

        var Dv = function () {
            function t(t, e, n, r) {
                var i;
                if (this.url = e, this.body = null, this.reportProgress = !1, this.withCredentials = !1, this.responseType = "json", this.method = t.toUpperCase(), function (t) {
                    switch (t) {
                        case"DELETE":
                        case"GET":
                        case"HEAD":
                        case"OPTIONS":
                        case"JSONP":
                            return !1;
                        default:
                            return !0
                    }
                }(this.method) || r ? (this.body = void 0 !== n ? n : null, i = r) : i = n, i && (this.reportProgress = !!i.reportProgress, this.withCredentials = !!i.withCredentials, i.responseType && (this.responseType = i.responseType), i.headers && (this.headers = i.headers), i.params && (this.params = i.params)), this.headers || (this.headers = new kv), this.params) {
                    var o = this.params.toString();
                    if (0 === o.length) this.urlWithParams = e; else {
                        var a = e.indexOf("?");
                        this.urlWithParams = e + (-1 === a ? "?" : a < e.length - 1 ? "&" : "") + o
                    }
                } else this.params = new Tv, this.urlWithParams = e
            }

            return t.prototype.serializeBody = function () {
                return null === this.body ? null : Iv(this.body) || Rv(this.body) || Nv(this.body) || "string" == typeof this.body ? this.body : this.body instanceof Tv ? this.body.toString() : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
            }, t.prototype.detectContentTypeHeader = function () {
                return null === this.body ? null : Nv(this.body) ? null : Rv(this.body) ? this.body.type || null : Iv(this.body) ? null : "string" == typeof this.body ? "text/plain" : this.body instanceof Tv ? "application/x-www-form-urlencoded;charset=UTF-8" : "object" == typeof this.body || "number" == typeof this.body || Array.isArray(this.body) ? "application/json" : null
            }, t.prototype.clone = function (e) {
                void 0 === e && (e = {});
                var n = e.method || this.method, r = e.url || this.url, i = e.responseType || this.responseType,
                    o = void 0 !== e.body ? e.body : this.body,
                    a = void 0 !== e.withCredentials ? e.withCredentials : this.withCredentials,
                    s = void 0 !== e.reportProgress ? e.reportProgress : this.reportProgress,
                    l = e.headers || this.headers,
                    u = e.params || this.params;
                return void 0 !== e.setHeaders && (l = Object.keys(e.setHeaders).reduce(function (t, n) {
                    return t.set(n, e.setHeaders[n])
                }, l)), e.setParams && (u = Object.keys(e.setParams).reduce(function (t, n) {
                    return t.set(n, e.setParams[n])
                }, u)), new t(n, r, o, {params: u, headers: l, reportProgress: s, responseType: i, withCredentials: a})
            }, t
        }(), Bv = function (t) {
            return t[t.Sent = 0] = "Sent", t[t.UploadProgress = 1] = "UploadProgress", t[t.ResponseHeader = 2] = "ResponseHeader", t[t.DownloadProgress = 3] = "DownloadProgress", t[t.Response = 4] = "Response", t[t.User = 5] = "User", t
        }({}), Mv = function () {
            return function (t, e, n) {
                void 0 === e && (e = 200), void 0 === n && (n = "OK"), this.headers = t.headers || new kv, this.status = void 0 !== t.status ? t.status : e, this.statusText = t.statusText || n, this.url = t.url || null, this.ok = this.status >= 200 && this.status < 300
            }
        }(), Vv = function (t) {
            function e(e) {
                void 0 === e && (e = {});
                var n = t.call(this, e) || this;
                return n.type = Bv.ResponseHeader, n
            }

            return i(e, t), e.prototype.clone = function (t) {
                return void 0 === t && (t = {}), new e({
                    headers: t.headers || this.headers,
                    status: void 0 !== t.status ? t.status : this.status,
                    statusText: t.statusText || this.statusText,
                    url: t.url || this.url || void 0
                })
            }, e
        }(Mv), Fv = function (t) {
            function e(e) {
                void 0 === e && (e = {});
                var n = t.call(this, e) || this;
                return n.type = Bv.Response, n.body = void 0 !== e.body ? e.body : null, n
            }

            return i(e, t), e.prototype.clone = function (t) {
                return void 0 === t && (t = {}), new e({
                    body: void 0 !== t.body ? t.body : this.body,
                    headers: t.headers || this.headers,
                    status: void 0 !== t.status ? t.status : this.status,
                    statusText: t.statusText || this.statusText,
                    url: t.url || this.url || void 0
                })
            }, e
        }(Mv), jv = function (t) {
            function e(e) {
                var n = t.call(this, e, 0, "Unknown Error") || this;
                return n.name = "HttpErrorResponse", n.ok = !1, n.message = n.status >= 200 && n.status < 300 ? "Http failure during parsing for " + (e.url || "(unknown url)") : "Http failure response for " + (e.url || "(unknown url)") + ": " + e.status + " " + e.statusText, n.error = e.error || null, n
            }

            return i(e, t), e
        }(Mv);

        function Lv(t, e) {
            return {
                body: e,
                headers: t.headers,
                observe: t.observe,
                params: t.params,
                reportProgress: t.reportProgress,
                responseType: t.responseType,
                withCredentials: t.withCredentials
            }
        }

        var zv = function () {
            function t(t) {
                this.handler = t
            }

            return t.prototype.request = function (t, e, n) {
                var r, i = this;
                if (void 0 === n && (n = {}), t instanceof Dv) r = t; else {
                    var o;
                    o = n.headers instanceof kv ? n.headers : new kv(n.headers);
                    var a = void 0;
                    n.params && (a = n.params instanceof Tv ? n.params : new Tv({fromObject: n.params})), r = new Dv(t, e, void 0 !== n.body ? n.body : null, {
                        headers: o,
                        params: a,
                        reportProgress: n.reportProgress,
                        responseType: n.responseType || "json",
                        withCredentials: n.withCredentials
                    })
                }
                var s = Js(r).pipe(zl(function (t) {
                    return i.handler.handle(t)
                }));
                if (t instanceof Dv || "events" === n.observe) return s;
                var l = s.pipe(ll(function (t) {
                    return t instanceof Fv
                }));
                switch (n.observe || "body") {
                    case"body":
                        switch (r.responseType) {
                            case"arraybuffer":
                                return l.pipe(Y(function (t) {
                                    if (null !== t.body && !(t.body instanceof ArrayBuffer)) throw new Error("Response is not an ArrayBuffer.");
                                    return t.body
                                }));
                            case"blob":
                                return l.pipe(Y(function (t) {
                                    if (null !== t.body && !(t.body instanceof Blob)) throw new Error("Response is not a Blob.");
                                    return t.body
                                }));
                            case"text":
                                return l.pipe(Y(function (t) {
                                    if (null !== t.body && "string" != typeof t.body) throw new Error("Response is not a string.");
                                    return t.body
                                }));
                            case"json":
                            default:
                                return l.pipe(Y(function (t) {
                                    return t.body
                                }))
                        }
                    case"response":
                        return l;
                    default:
                        throw new Error("Unreachable: unhandled observe type " + n.observe + "}")
                }
            }, t.prototype.delete = function (t, e) {
                return void 0 === e && (e = {}), this.request("DELETE", t, e)
            }, t.prototype.get = function (t, e) {
                return void 0 === e && (e = {}), this.request("GET", t, e)
            }, t.prototype.head = function (t, e) {
                return void 0 === e && (e = {}), this.request("HEAD", t, e)
            }, t.prototype.jsonp = function (t, e) {
                return this.request("JSONP", t, {
                    params: (new Tv).append(e, "JSONP_CALLBACK"),
                    observe: "body",
                    responseType: "json"
                })
            }, t.prototype.options = function (t, e) {
                return void 0 === e && (e = {}), this.request("OPTIONS", t, e)
            }, t.prototype.patch = function (t, e, n) {
                return void 0 === n && (n = {}), this.request("PATCH", t, Lv(n, e))
            }, t.prototype.post = function (t, e, n) {
                return void 0 === n && (n = {}), this.request("POST", t, Lv(n, e))
            }, t.prototype.put = function (t, e, n) {
                return void 0 === n && (n = {}), this.request("PUT", t, Lv(n, e))
            }, t
        }(), Uv = function () {
            function t(t, e) {
                this.next = t, this.interceptor = e
            }

            return t.prototype.handle = function (t) {
                return this.interceptor.intercept(t, this.next)
            }, t
        }(), Hv = new Mt("HTTP_INTERCEPTORS"), qv = function () {
            function t() {
            }

            return t.prototype.intercept = function (t, e) {
                return e.handle(t)
            }, t
        }(), Gv = /^\)\]\}',?\n/, Wv = function () {
            return function () {
            }
        }(), Kv = function () {
            function t() {
            }

            return t.prototype.build = function () {
                return new XMLHttpRequest
            }, t
        }(), Qv = function () {
            function t(t) {
                this.xhrFactory = t
            }

            return t.prototype.handle = function (t) {
                var e = this;
                if ("JSONP" === t.method) throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
                return new P(function (n) {
                    var r = e.xhrFactory.build();
                    if (r.open(t.method, t.urlWithParams), t.withCredentials && (r.withCredentials = !0), t.headers.forEach(function (t, e) {
                        return r.setRequestHeader(t, e.join(","))
                    }), t.headers.has("Accept") || r.setRequestHeader("Accept", "application/json, text/plain, */*"), !t.headers.has("Content-Type")) {
                        var i = t.detectContentTypeHeader();
                        null !== i && r.setRequestHeader("Content-Type", i)
                    }
                    if (t.responseType) {
                        var o = t.responseType.toLowerCase();
                        r.responseType = "json" !== o ? o : "text"
                    }
                    var a = t.serializeBody(), s = null, l = function () {
                        if (null !== s) return s;
                        var e = 1223 === r.status ? 204 : r.status, n = r.statusText || "OK",
                            i = new kv(r.getAllResponseHeaders()),
                            o = function (t) {
                                return "responseURL" in t && t.responseURL ? t.responseURL : /^X-Request-URL:/m.test(t.getAllResponseHeaders()) ? t.getResponseHeader("X-Request-URL") : null
                            }(r) || t.url;
                        return s = new Vv({headers: i, status: e, statusText: n, url: o})
                    }, u = function () {
                        var e = l(), i = e.headers, o = e.status, a = e.statusText, s = e.url, u = null;
                        204 !== o && (u = void 0 === r.response ? r.responseText : r.response), 0 === o && (o = u ? 200 : 0);
                        var c = o >= 200 && o < 300;
                        if ("json" === t.responseType && "string" == typeof u) {
                            var h = u;
                            u = u.replace(Gv, "");
                            try {
                                u = "" !== u ? JSON.parse(u) : null
                            } catch (p) {
                                u = h, c && (c = !1, u = {error: p, text: u})
                            }
                        }
                        c ? (n.next(new Fv({
                            body: u,
                            headers: i,
                            status: o,
                            statusText: a,
                            url: s || void 0
                        })), n.complete()) : n.error(new jv({
                            error: u,
                            headers: i,
                            status: o,
                            statusText: a,
                            url: s || void 0
                        }))
                    }, c = function (t) {
                        var e = l().url, i = new jv({
                            error: t,
                            status: r.status || 0,
                            statusText: r.statusText || "Unknown Error",
                            url: e || void 0
                        });
                        n.error(i)
                    }, h = !1, p = function (e) {
                        h || (n.next(l()), h = !0);
                        var i = {type: Bv.DownloadProgress, loaded: e.loaded};
                        e.lengthComputable && (i.total = e.total), "text" === t.responseType && r.responseText && (i.partialText = r.responseText), n.next(i)
                    }, f = function (t) {
                        var e = {type: Bv.UploadProgress, loaded: t.loaded};
                        t.lengthComputable && (e.total = t.total), n.next(e)
                    };
                    return r.addEventListener("load", u), r.addEventListener("error", c), t.reportProgress && (r.addEventListener("progress", p), null !== a && r.upload && r.upload.addEventListener("progress", f)), r.send(a), n.next({type: Bv.Sent}), function () {
                        r.removeEventListener("error", c), r.removeEventListener("load", u), t.reportProgress && (r.removeEventListener("progress", p), null !== a && r.upload && r.upload.removeEventListener("progress", f)), r.abort()
                    }
                })
            }, t
        }(), Zv = new Mt("XSRF_COOKIE_NAME"), Yv = new Mt("XSRF_HEADER_NAME"), $v = function () {
            return function () {
            }
        }(), Xv = function () {
            function t(t, e, n) {
                this.doc = t, this.platform = e, this.cookieName = n, this.lastCookieString = "", this.lastToken = null, this.parseCount = 0
            }

            return t.prototype.getToken = function () {
                if ("server" === this.platform) return null;
                var t = this.doc.cookie || "";
                return t !== this.lastCookieString && (this.parseCount++, this.lastToken = ks(t, this.cookieName), this.lastCookieString = t), this.lastToken
            }, t
        }(), Jv = function () {
            function t(t, e) {
                this.tokenService = t, this.headerName = e
            }

            return t.prototype.intercept = function (t, e) {
                var n = t.url.toLowerCase();
                if ("GET" === t.method || "HEAD" === t.method || n.startsWith("http://") || n.startsWith("https://")) return e.handle(t);
                var r = this.tokenService.getToken();
                return null === r || t.headers.has(this.headerName) || (t = t.clone({headers: t.headers.set(this.headerName, r)})), e.handle(t)
            }, t
        }(), t_ = function () {
            function t(t, e) {
                this.backend = t, this.injector = e, this.chain = null
            }

            return t.prototype.handle = function (t) {
                if (null === this.chain) {
                    var e = this.injector.get(Hv, []);
                    this.chain = e.reduceRight(function (t, e) {
                        return new Uv(t, e)
                    }, this.backend)
                }
                return this.chain.handle(t)
            }, t
        }(), e_ = function () {
            function t() {
            }

            var e;
            return e = t, t.disable = function () {
                return {ngModule: e, providers: [{provide: Jv, useClass: qv}]}
            }, t.withOptions = function (t) {
                return void 0 === t && (t = {}), {
                    ngModule: e,
                    providers: [t.cookieName ? {provide: Zv, useValue: t.cookieName} : [], t.headerName ? {
                        provide: Yv,
                        useValue: t.headerName
                    } : []]
                }
            }, t
        }(), n_ = function () {
            return function () {
            }
        }();

        function r_(t) {
            return void 0 === t && (t = -1), function (e) {
                return e.lift(new i_(t, e))
            }
        }

        var i_ = function () {
            function t(t, e) {
                this.count = t, this.source = e
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new o_(t, this.count, this.source))
            }, t
        }(), o_ = function (t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.count = n, i.source = r, i
            }

            return i(e, t), e.prototype.error = function (e) {
                if (!this.isStopped) {
                    var n = this.source, r = this.count;
                    if (0 === r) return t.prototype.error.call(this, e);
                    r > -1 && (this.count = r - 1), n.subscribe(this._unsubscribeAndRecycle())
                }
            }, e
        }(S), a_ = function () {
            function t(t, e) {
                this.http = t, this.fb = e, this.notShouw = !0
            }

            return t.prototype.createForm = function () {
                this.formId = this.fb.group({id: [{value: null}, [pf.required, pf.pattern("^[0-9]*$")]]})
            }, t.prototype.searcById = function () {
                var t = this, e = new kv({"Content-Type": "application/json", responseType: "json"});
                this.http.get("http://127.0.0.1:8081/get/" + this.id, {headers: e}).pipe(r_(1)).subscribe(function (e) {
                    t.company = e
                }, function (e) {
                    t.notShouw = !1
                })
            }, t.prototype.ngOnInit = function () {
                this.createForm()
            }, t
        }(), s_ = tr({
            encapsulation: 0,
            styles: [["body[_ngcontent-%COMP%]{display:flex;min-height:auto;flex-direction:column}label[_ngcontent-%COMP%]{position:relative;left:29%}button[_ngcontent-%COMP%]{position:relative;left:30%}#companyShouw[_ngcontent-%COMP%]{color:#a9a9a9;font-family:Carme,sans-serif;font-size:16px;line-height:24px;margin:0 0 24px;padding-bottom:35px}#employForm[_ngcontent-%COMP%]{color:#a9a9a9;font-family:Carme,sans-serif;font-size:16px;line-height:24px;margin:0 0 24px}u[_ngcontent-%COMP%]{color:#dc143c;font-family:Carme,sans-serif;font-size:16px;line-height:24px;margin:0 0 24px}mat-form-field[_ngcontent-%COMP%]{position:relative;left:420px}#batonsSubmit[_ngcontent-%COMP%]{position:relative;left:430px}#errore[_ngcontent-%COMP%]{position:absolute;left:20%;height:400px;width:700px}"]],
            data: {}
        });

        function l_(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 89, "div", [["class", "col"], ["id", "companyShouw"]], null, null, null, null, null)), (t()(), zo(1, 0, null, null, 78, "ul", [], null, null, null, null, null)), (t()(), zo(2, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, ["Company Id - "])), (t()(), zo(4, 0, null, null, 1, "u", [], null, null, null, null, null)), (t()(), ta(5, null, ["", ""])), (t()(), zo(6, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, ["Company Name - "])), (t()(), zo(8, 0, null, null, 1, "u", [], null, null, null, null, null)), (t()(), ta(9, null, [" ", ""])), (t()(), zo(10, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, ["Company Current Status - "])), (t()(), zo(12, 0, null, null, 1, "u", [], null, null, null, null, null)), (t()(), ta(13, null, [" ", ""])), (t()(), zo(14, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, ["Company Land - "])), (t()(), zo(16, 0, null, null, 1, "u", [], null, null, null, null, null)), (t()(), ta(17, null, [" ", ""])), (t()(), zo(18, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, ["Company Jurisdiction - "])), (t()(), zo(20, 0, null, null, 1, "u", [], null, null, null, null, null)), (t()(), ta(21, null, ["", ""])), (t()(), zo(22, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, ["Company Number - "])), (t()(), zo(24, 0, null, null, 1, "u", [], null, null, null, null, null)), (t()(), ta(25, null, ["", ""])), (t()(), zo(26, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, ["Company Native Number - "])), (t()(), zo(28, 0, null, null, 1, "u", [], null, null, null, null, null)), (t()(), ta(29, null, ["", ""])), (t()(), zo(30, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, ["Company Registered Officer - "])), (t()(), zo(32, 0, null, null, 1, "u", [], null, null, null, null, null)), (t()(), ta(33, null, ["", ""])), (t()(), zo(34, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, ["Company Register Art - "])), (t()(), zo(36, 0, null, null, 1, "u", [], null, null, null, null, null)), (t()(), ta(37, null, ["", ""])), (t()(), zo(38, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, ["Company Former Registrar - "])), (t()(), zo(40, 0, null, null, 1, "u", [], null, null, null, null, null)), (t()(), ta(41, null, [" ", ""])), (t()(), zo(42, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, ["Company Phone - "])), (t()(), zo(44, 0, null, null, 1, "u", [], null, null, null, null, null)), (t()(), ta(45, null, ["", ""])), (t()(), zo(46, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, ["Company Fax - "])), (t()(), zo(48, 0, null, null, 1, "u", [], null, null, null, null, null)), (t()(), ta(49, null, [" ", ""])), (t()(), zo(50, 0, null, null, 4, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, ["Company SiteToWeb - "])), (t()(), zo(52, 0, null, null, 2, "u", [], null, null, null, null, null)), (t()(), zo(53, 0, null, null, 1, "a", [], [[8, "href", 4]], null, null, null, null)), (t()(), ta(54, null, ["", ""])), (t()(), zo(55, 0, null, null, 4, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, ["Company SiteToGoogle - "])), (t()(), zo(57, 0, null, null, 2, "u", [], null, null, null, null, null)), (t()(), zo(58, 0, null, null, 1, "a", [], [[8, "href", 4]], null, null, null, null)), (t()(), ta(59, null, ["", ""])), (t()(), zo(60, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, ["Company Industry Branch - "])), (t()(), zo(62, 0, null, null, 1, "u", [], null, null, null, null, null)), (t()(), ta(63, null, [" ", ""])), (t()(), zo(64, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, ["Company Industry Activity - "])), (t()(), zo(66, 0, null, null, 1, "u", [], null, null, null, null, null)), (t()(), ta(67, null, [" ", ""])), (t()(), zo(68, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, ["Company Industry Possibility Sector of Activity - "])), (t()(), zo(70, 0, null, null, 1, "u", [], null, null, null, null, null)), (t()(), ta(71, null, ["", ""])), (t()(), zo(72, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, ["Company Industry Catalog Activity - "])), (t()(), zo(74, 0, null, null, 1, "u", [], null, null, null, null, null)), (t()(), ta(75, null, ["", ""])), (t()(), zo(76, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, ["Company Capital - "])), (t()(), zo(78, 0, null, null, 1, "u", [], null, null, null, null, null)), (t()(), ta(79, null, ["", ""])), (t()(), zo(80, 0, null, null, 4, "ul", [], null, null, null, null, null)), (t()(), zo(81, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, ["Company Email - "])), (t()(), zo(83, 0, null, null, 1, "u", [], null, null, null, null, null)), (t()(), ta(84, null, [" ", ""])), (t()(), zo(85, 0, null, null, 4, "ul", [], null, null, null, null, null)), (t()(), zo(86, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, ["Company Email - "])), (t()(), zo(88, 0, null, null, 1, "u", [], null, null, null, null, null)), (t()(), ta(89, null, [" ", ""]))], null, function (t, e) {
                var n = e.component;
                t(e, 5, 0, n.company.id), t(e, 9, 0, n.company.name), t(e, 13, 0, n.company.current_status), t(e, 17, 0, n.company.registeredoffice), t(e, 21, 0, n.company.jurisdiction_code), t(e, 25, 0, n.company.company_number), t(e, 29, 0, n.company.native_company_number), t(e, 33, 0, n.company.registeredoffice), t(e, 37, 0, n.company.register_art), t(e, 41, 0, n.company.former_registrar), t(e, 45, 0, n.company.telephone), t(e, 49, 0, n.company.fax), t(e, 53, 0, n.company.url), t(e, 54, 0, n.company.url), t(e, 58, 0, n.company.googleUri), t(e, 59, 0, n.company.googleUri), t(e, 63, 0, n.company.keywordsIndustry), t(e, 67, 0, n.company.activity), t(e, 71, 0, n.company.sector_of_activity), t(e, 75, 0, n.company.catalog), t(e, 79, 0, n.company.kapital), t(e, 84, 0, n.company.email), t(e, 89, 0, n.company.emails)
            })
        }

        function u_(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 20, "ul", [], null, null, null, null, null)), (t()(), zo(1, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, ["Company Officer Last Name First Name - "])), (t()(), zo(3, 0, null, null, 1, "u", [], null, null, null, null, null)), (t()(), ta(4, null, [" ", " ", ""])), (t()(), zo(5, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, [" Company Officer City -"])), (t()(), zo(7, 0, null, null, 1, "u", [], null, null, null, null, null)), (t()(), ta(8, null, ["", ""])), (t()(), zo(9, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, [" Company Officer Position -"])), (t()(), zo(11, 0, null, null, 1, "u", [], null, null, null, null, null)), (t()(), ta(12, null, ["", ""])), (t()(), zo(13, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, [" Company Officer Title -"])), (t()(), zo(15, 0, null, null, 1, "u", [], null, null, null, null, null)), (t()(), ta(16, null, ["", ""])), (t()(), zo(17, 0, null, null, 3, "li", [], null, null, null, null, null)), (t()(), ta(-1, null, [" Company Officer Type -"])), (t()(), zo(19, 0, null, null, 1, "u", [], null, null, null, null, null)), (t()(), ta(20, null, ["", ""]))], null, function (t, e) {
                t(e, 4, 0, e.context.$implicit.lastname, e.context.$implicit.firstname), t(e, 8, 0, e.context.$implicit.city), t(e, 12, 0, e.context.$implicit.position), t(e, 16, 0, e.context.$implicit.title), t(e, 20, 0, e.context.$implicit.type)
            })
        }

        function c_(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 7, "div", [["class", "container"]], null, null, null, null, null)), (t()(), zo(1, 0, null, null, 6, "div", [["class", "row"]], null, null, null, null, null)), (t()(), Lo(16777216, null, null, 1, null, l_)), hi(3, 16384, null, 0, Ds, [Bn, Nn], {ngIf: [0, "ngIf"]}, null), (t()(), zo(4, 0, null, null, 3, "div", [["class", "col"], ["id", "employForm"]], null, null, null, null, null)), (t()(), ta(-1, null, [" Company Officer : "])), (t()(), Lo(16777216, null, null, 1, null, u_)), hi(7, 278528, null, 0, Rs, [Bn, Nn, An], {ngForOf: [0, "ngForOf"]}, null)], function (t, e) {
                var n = e.component;
                t(e, 3, 0, n.company != kr), t(e, 7, 0, n.company.officers)
            }, null)
        }

        function h_(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 31, "form", [["class", "form-inline md-form mr-auto mb-4"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (t, e, n) {
                var r = !0;
                return "submit" === e && (r = !1 !== Xr(t, 2).onSubmit(n) && r), "reset" === e && (r = !1 !== Xr(t, 2).onReset() && r), r
            }, null, null)), hi(1, 16384, null, 0, td, [], null, null), hi(2, 540672, null, 0, nd, [[8, null], [8, null]], {form: [0, "form"]}, null), fi(2048, null, rf, null, [nd]), hi(4, 16384, null, 0, uf, [[4, rf]], null, null), (t()(), zo(5, 0, null, null, 21, "mat-form-field", [["class", "example-full-width mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, lv, Yg)), hi(6, 7520256, null, 9, Cm, [ln, On, [2, pm], [2, Pm], [2, wm], kd, ro, [2, Qg]], null, null), Wo(603979776, 1, {_controlNonStatic: 0}), Wo(335544320, 2, {_controlStatic: 0}), Wo(603979776, 3, {_labelChildNonStatic: 0}), Wo(335544320, 4, {_labelChildStatic: 0}), Wo(603979776, 5, {_placeholderChild: 0}), Wo(603979776, 6, {_errorChildren: 1}), Wo(603979776, 7, {_hintChildren: 1}), Wo(603979776, 8, {_prefixChildren: 1}), Wo(603979776, 9, {_suffixChildren: 1}), (t()(), zo(16, 0, null, 1, 10, "input", [["aria-label", "Search"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "id"], ["matInput", ""], ["placeholder", "Input Id"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "submit"], [null, "reset"], [null, "focus"]], function (t, e, n) {
                var r = !0, i = t.component;
                return "input" === e && (r = !1 !== Xr(t, 17)._handleInput(n.target.value) && r), "blur" === e && (r = !1 !== Xr(t, 17).onTouched() && r), "compositionstart" === e && (r = !1 !== Xr(t, 17)._compositionStart() && r), "compositionend" === e && (r = !1 !== Xr(t, 17)._compositionEnd(n.target.value) && r), "submit" === e && (r = !1 !== Xr(t, 22).onSubmit(n) && r), "reset" === e && (r = !1 !== Xr(t, 22).onReset() && r), "blur" === e && (r = !1 !== Xr(t, 25)._focusChanged(!1) && r), "focus" === e && (r = !1 !== Xr(t, 25)._focusChanged(!0) && r), "input" === e && (r = !1 !== Xr(t, 25)._onInput() && r), "ngModelChange" === e && (r = !1 !== (i.id = n) && r), r
            }, null, null)), hi(17, 16384, null, 0, ef, [fn, ln, [2, tf]], null, null), fi(1024, null, Xp, function (t) {
                return [t]
            }, [ef]), hi(19, 671744, null, 0, ad, [[3, rf], [8, null], [8, null], [6, Xp], [2, ed]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {update: "ngModelChange"}), fi(2048, null, af, null, [ad]), hi(21, 16384, null, 0, lf, [[4, af]], null, null), hi(22, 540672, null, 0, nd, [[8, null], [8, null]], {form: [0, "form"]}, null), fi(2048, null, rf, null, [nd]), hi(24, 16384, null, 0, uf, [[4, rf]], null, null), hi(25, 999424, null, 0, _v, [ln, kd, [6, af], [2, Kf], [2, nd], Kd, [8, null], mv, ro], {placeholder: [0, "placeholder"]}, null), fi(2048, [[1, 4], [2, 4]], gm, null, [_v]), (t()(), zo(27, 0, null, null, 1, "button", [["class", "btn btn-outline-success"], ["id", "batonsSubmit"]], [[8, "disabled", 0]], [[null, "click"]], function (t, e, n) {
                var r = !0;
                return "click" === e && (r = !1 !== t.component.searcById() && r), r
            }, null, null)), (t()(), ta(-1, null, ["Search By Id "])), (t()(), Lo(16777216, null, null, 1, null, c_)), hi(30, 16384, null, 0, Ds, [Bn, Nn], {ngIf: [0, "ngIf"]}, null), (t()(), zo(31, 0, null, null, 0, "div", [], null, null, null, null, null))], function (t, e) {
                var n = e.component;
                t(e, 2, 0, n.formId), t(e, 19, 0, "id", n.id), t(e, 22, 0, n.formId), t(e, 25, 0, "Input Id"), t(e, 30, 0, n.company)
            }, function (t, e) {
                var n = e.component;
                t(e, 0, 0, Xr(e, 4).ngClassUntouched, Xr(e, 4).ngClassTouched, Xr(e, 4).ngClassPristine, Xr(e, 4).ngClassDirty, Xr(e, 4).ngClassValid, Xr(e, 4).ngClassInvalid, Xr(e, 4).ngClassPending), t(e, 5, 1, ["standard" == Xr(e, 6).appearance, "fill" == Xr(e, 6).appearance, "outline" == Xr(e, 6).appearance, "legacy" == Xr(e, 6).appearance, Xr(e, 6)._control.errorState, Xr(e, 6)._canLabelFloat, Xr(e, 6)._shouldLabelFloat(), Xr(e, 6)._hasFloatingLabel(), Xr(e, 6)._hideControlPlaceholder(), Xr(e, 6)._control.disabled, Xr(e, 6)._control.autofilled, Xr(e, 6)._control.focused, "accent" == Xr(e, 6).color, "warn" == Xr(e, 6).color, Xr(e, 6)._shouldForward("untouched"), Xr(e, 6)._shouldForward("touched"), Xr(e, 6)._shouldForward("pristine"), Xr(e, 6)._shouldForward("dirty"), Xr(e, 6)._shouldForward("valid"), Xr(e, 6)._shouldForward("invalid"), Xr(e, 6)._shouldForward("pending"), !Xr(e, 6)._animationsEnabled]), t(e, 16, 1, [Xr(e, 21).ngClassUntouched, Xr(e, 21).ngClassTouched, Xr(e, 21).ngClassPristine, Xr(e, 21).ngClassDirty, Xr(e, 21).ngClassValid, Xr(e, 21).ngClassInvalid, Xr(e, 21).ngClassPending, Xr(e, 24).ngClassUntouched, Xr(e, 24).ngClassTouched, Xr(e, 24).ngClassPristine, Xr(e, 24).ngClassDirty, Xr(e, 24).ngClassValid, Xr(e, 24).ngClassInvalid, Xr(e, 24).ngClassPending, Xr(e, 25)._isServer, Xr(e, 25).id, Xr(e, 25).placeholder, Xr(e, 25).disabled, Xr(e, 25).required, Xr(e, 25).readonly && !Xr(e, 25)._isNativeSelect || null, Xr(e, 25)._ariaDescribedby || null, Xr(e, 25).errorState, Xr(e, 25).required.toString()]), t(e, 27, 0, n.id < 1 || n.id > 6e6 || !n.formId.valid)
            })
        }

        function p_(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 6, "body", [], null, null, null, null, null)), (t()(), Lo(16777216, null, null, 1, null, h_)), hi(2, 16384, null, 0, Ds, [Bn, Nn], {ngIf: [0, "ngIf"]}, null), (t()(), zo(3, 0, null, null, 1, "app-app-alertvalitation-input", [["errorMessage", "Is input invalid"]], null, null, null, Ev, Cv)), hi(4, 114688, null, 0, wv, [], {
                control: [0, "control"],
                errorMessage: [1, "errorMessage"]
            }, null), (t()(), zo(5, 0, null, null, 1, "div", [["class", "alert"], ["id", "allertNotFound"]], [[8, "hidden", 0]], null, null, null, null)), (t()(), zo(6, 0, null, null, 0, "img", [["id", "errore"], ["src", "https://cdn.windowsreport.com/wp-content/uploads/2018/05/Error-message.jpg"]], null, null, null, null, null))], function (t, e) {
                var n = e.component;
                t(e, 2, 0, n.notShouw), t(e, 4, 0, n.formId, "Is input invalid")
            }, function (t, e) {
                t(e, 5, 0, e.component.notShouw)
            })
        }

        function f_(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 1, "app-search-by-name", [], null, null, null, p_, s_)), hi(1, 114688, null, 0, a_, [zv, ld], null, null)], function (t, e) {
                t(e, 1, 0)
            }, null)
        }

        var d_ = zr("app-search-by-name", a_, f_, {}, {}, []), m_ = tr({
            encapsulation: 2,
            styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:0;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}@media (-ms-high-contrast:active){.mat-option{margin:0 1px}.mat-option.mat-active{border:solid 1px currentColor;margin:0}}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}@media (-ms-high-contrast:active){.mat-option .mat-option-ripple{opacity:.5}}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}"],
            data: {}
        });

        function y_(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 1, "mat-pseudo-checkbox", [["class", "mat-option-pseudo-checkbox mat-pseudo-checkbox"]], [[2, "mat-pseudo-checkbox-indeterminate", null], [2, "mat-pseudo-checkbox-checked", null], [2, "mat-pseudo-checkbox-disabled", null], [2, "_mat-animation-noopable", null]], null, null, b_, __)), hi(1, 49152, null, 0, rm, [[2, Qg]], {
                state: [0, "state"],
                disabled: [1, "disabled"]
            }, null)], function (t, e) {
                var n = e.component;
                t(e, 1, 0, n.selected ? "checked" : "", n.disabled)
            }, function (t, e) {
                t(e, 0, 0, "indeterminate" === Xr(e, 1).state, "checked" === Xr(e, 1).state, Xr(e, 1).disabled, "NoopAnimations" === Xr(e, 1)._animationMode)
            })
        }

        function g_(t) {
            return ra(2, [(t()(), Lo(16777216, null, null, 1, null, y_)), hi(1, 16384, null, 0, Ds, [Bn, Nn], {ngIf: [0, "ngIf"]}, null), (t()(), zo(2, 0, null, null, 1, "span", [["class", "mat-option-text"]], null, null, null, null, null)), $o(null, 0), (t()(), zo(4, 0, null, null, 1, "div", [["class", "mat-option-ripple mat-ripple"], ["mat-ripple", ""]], [[2, "mat-ripple-unbounded", null]], null, null, null, null)), hi(5, 212992, null, 0, em, [ln, ro, kd, [2, tm], [2, Qg]], {
                disabled: [0, "disabled"],
                trigger: [1, "trigger"]
            }, null)], function (t, e) {
                var n = e.component;
                t(e, 1, 0, n.multiple), t(e, 5, 0, n.disabled || n.disableRipple, n._getHostElement())
            }, function (t, e) {
                t(e, 4, 0, Xr(e, 5).unbounded)
            })
        }

        var v_, __ = tr({
            encapsulation: 2,
            styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0,0,.2,.1),background-color 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:'';border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}"],
            data: {}
        });

        function b_(t) {
            return ra(2, [], null, null)
        }

        v_ || (v_ = {});
        var w_ = function () {
            function t(t, e, n) {
                this.kind = t, this.value = e, this.error = n, this.hasValue = "N" === t
            }

            return t.prototype.observe = function (t) {
                switch (this.kind) {
                    case"N":
                        return t.next && t.next(this.value);
                    case"E":
                        return t.error && t.error(this.error);
                    case"C":
                        return t.complete && t.complete()
                }
            }, t.prototype.do = function (t, e, n) {
                switch (this.kind) {
                    case"N":
                        return t && t(this.value);
                    case"E":
                        return e && e(this.error);
                    case"C":
                        return n && n()
                }
            }, t.prototype.accept = function (t, e, n) {
                return t && "function" == typeof t.next ? this.observe(t) : this.do(t, e, n)
            }, t.prototype.toObservable = function () {
                var t;
                switch (this.kind) {
                    case"N":
                        return Js(this.value);
                    case"E":
                        return t = this.error, new P(function (e) {
                            return e.error(t)
                        });
                    case"C":
                        return $s()
                }
                throw new Error("unexpected notification kind value")
            }, t.createNext = function (e) {
                return void 0 !== e ? new t("N", e) : t.undefinedValueNotification
            }, t.createError = function (e) {
                return new t("E", void 0, e)
            }, t.createComplete = function () {
                return t.completeNotification
            }, t.completeNotification = new t("C"), t.undefinedValueNotification = new t("N", void 0), t
        }(), C_ = function () {
            function t(t, e) {
                this._ngZone = t, this._platform = e, this._scrolled = new B, this._globalSubscription = null, this._scrolledCount = 0, this.scrollContainers = new Map
            }

            return t.prototype.register = function (t) {
                var e = this;
                this.scrollContainers.has(t) || this.scrollContainers.set(t, t.elementScrolled().subscribe(function () {
                    return e._scrolled.next(t)
                }))
            }, t.prototype.deregister = function (t) {
                var e = this.scrollContainers.get(t);
                e && (e.unsubscribe(), this.scrollContainers.delete(t))
            }, t.prototype.scrolled = function (t) {
                var e = this;
                return void 0 === t && (t = 20), this._platform.isBrowser ? new P(function (n) {
                    e._globalSubscription || e._addGlobalListener();
                    var r = t > 0 ? e._scrolled.pipe(fv(t)).subscribe(n) : e._scrolled.subscribe(n);
                    return e._scrolledCount++, function () {
                        r.unsubscribe(), e._scrolledCount--, e._scrolledCount || e._removeGlobalListener()
                    }
                }) : Js()
            }, t.prototype.ngOnDestroy = function () {
                var t = this;
                this._removeGlobalListener(), this.scrollContainers.forEach(function (e, n) {
                    return t.deregister(n)
                }), this._scrolled.complete()
            }, t.prototype.ancestorScrolled = function (t, e) {
                var n = this.getAncestorScrollContainers(t);
                return this.scrolled(e).pipe(ll(function (t) {
                    return !t || n.indexOf(t) > -1
                }))
            }, t.prototype.getAncestorScrollContainers = function (t) {
                var e = this, n = [];
                return this.scrollContainers.forEach(function (r, i) {
                    e._scrollableContainsElement(i, t) && n.push(i)
                }), n
            }, t.prototype._scrollableContainsElement = function (t, e) {
                var n = e.nativeElement, r = t.getElementRef().nativeElement;
                do {
                    if (n == r) return !0
                } while (n = n.parentElement);
                return !1
            }, t.prototype._addGlobalListener = function () {
                var t = this;
                this._globalSubscription = this._ngZone.runOutsideAngular(function () {
                    return fm(window.document, "scroll").subscribe(function () {
                        return t._scrolled.next()
                    })
                })
            }, t.prototype._removeGlobalListener = function () {
                this._globalSubscription && (this._globalSubscription.unsubscribe(), this._globalSubscription = null)
            }, t.ngInjectableDef = Ct({
                factory: function () {
                    return new t(Dt(ro), Dt(kd))
                }, token: t, providedIn: "root"
            }), t
        }(), S_ = function () {
            return function () {
            }
        }(), E_ = function () {
            function t(t, e) {
                var n = this;
                this._platform = t, e.runOutsideAngular(function () {
                    n._change = t.isBrowser ? at(fm(window, "resize"), fm(window, "orientationchange")) : Js(), n._invalidateCache = n.change().subscribe(function () {
                        return n._updateViewportSize()
                    })
                })
            }

            return t.prototype.ngOnDestroy = function () {
                this._invalidateCache.unsubscribe()
            }, t.prototype.getViewportSize = function () {
                this._viewportSize || this._updateViewportSize();
                var t = {width: this._viewportSize.width, height: this._viewportSize.height};
                return this._platform.isBrowser || (this._viewportSize = null), t
            }, t.prototype.getViewportRect = function () {
                var t = this.getViewportScrollPosition(), e = this.getViewportSize(), n = e.width, r = e.height;
                return {top: t.top, left: t.left, bottom: t.top + r, right: t.left + n, height: r, width: n}
            }, t.prototype.getViewportScrollPosition = function () {
                if (!this._platform.isBrowser) return {top: 0, left: 0};
                var t = document.documentElement, e = t.getBoundingClientRect();
                return {
                    top: -e.top || document.body.scrollTop || window.scrollY || t.scrollTop || 0,
                    left: -e.left || document.body.scrollLeft || window.scrollX || t.scrollLeft || 0
                }
            }, t.prototype.change = function (t) {
                return void 0 === t && (t = 20), t > 0 ? this._change.pipe(fv(t)) : this._change
            }, t.prototype._updateViewportSize = function () {
                this._viewportSize = this._platform.isBrowser ? {
                    width: window.innerWidth,
                    height: window.innerHeight
                } : {width: 0, height: 0}
            }, t.ngInjectableDef = Ct({
                factory: function () {
                    return new t(Dt(kd), Dt(ro))
                }, token: t, providedIn: "root"
            }), t
        }();

        function x_() {
            throw Error("Host already has a portal attached")
        }

        var A_ = function () {
            function t() {
            }

            return t.prototype.attach = function (t) {
                return null == t && function () {
                    throw Error("Attempting to attach a portal to a null PortalOutlet")
                }(), t.hasAttached() && x_(), this._attachedHost = t, t.attach(this)
            }, t.prototype.detach = function () {
                var t = this._attachedHost;
                null == t ? function () {
                    throw Error("Attempting to detach a portal that is not attached to a host")
                }() : (this._attachedHost = null, t.detach())
            }, Object.defineProperty(t.prototype, "isAttached", {
                get: function () {
                    return null != this._attachedHost
                }, enumerable: !0, configurable: !0
            }), t.prototype.setAttachedHost = function (t) {
                this._attachedHost = t
            }, t
        }(), k_ = function (t) {
            function e(e, n, r, i) {
                var o = t.call(this) || this;
                return o.component = e, o.viewContainerRef = n, o.injector = r, o.componentFactoryResolver = i, o
            }

            return i(e, t), e
        }(A_), O_ = function (t) {
            function e(e, n, r) {
                var i = t.call(this) || this;
                return i.templateRef = e, i.viewContainerRef = n, i.context = r, i
            }

            return i(e, t), Object.defineProperty(e.prototype, "origin", {
                get: function () {
                    return this.templateRef.elementRef
                }, enumerable: !0, configurable: !0
            }), e.prototype.attach = function (e, n) {
                return void 0 === n && (n = this.context), this.context = n, t.prototype.attach.call(this, e)
            }, e.prototype.detach = function () {
                return this.context = void 0, t.prototype.detach.call(this)
            }, e
        }(A_), P_ = function (t) {
            function e(e, n, r, i) {
                var o = t.call(this) || this;
                return o.outletElement = e, o._componentFactoryResolver = n, o._appRef = r, o._defaultInjector = i, o
            }

            return i(e, t), e.prototype.attachComponentPortal = function (t) {
                var e, n = this,
                    r = (t.componentFactoryResolver || this._componentFactoryResolver).resolveComponentFactory(t.component);
                return t.viewContainerRef ? (e = t.viewContainerRef.createComponent(r, t.viewContainerRef.length, t.injector || t.viewContainerRef.injector), this.setDisposeFn(function () {
                    return e.destroy()
                })) : (e = r.create(t.injector || this._defaultInjector), this._appRef.attachView(e.hostView), this.setDisposeFn(function () {
                    n._appRef.detachView(e.hostView), e.destroy()
                })), this.outletElement.appendChild(this._getComponentRootNode(e)), e
            }, e.prototype.attachTemplatePortal = function (t) {
                var e = this, n = t.viewContainerRef, r = n.createEmbeddedView(t.templateRef, t.context);
                return r.detectChanges(), r.rootNodes.forEach(function (t) {
                    return e.outletElement.appendChild(t)
                }), this.setDisposeFn(function () {
                    var t = n.indexOf(r);
                    -1 !== t && n.remove(t)
                }), r
            }, e.prototype.dispose = function () {
                t.prototype.dispose.call(this), null != this.outletElement.parentNode && this.outletElement.parentNode.removeChild(this.outletElement)
            }, e.prototype._getComponentRootNode = function (t) {
                return t.hostView.rootNodes[0]
            }, e
        }(function () {
            function t() {
                this._isDisposed = !1
            }

            return t.prototype.hasAttached = function () {
                return !!this._attachedPortal
            }, t.prototype.attach = function (t) {
                return t || function () {
                    throw Error("Must provide a portal to attach")
                }(), this.hasAttached() && x_(), this._isDisposed && function () {
                    throw Error("This PortalOutlet has already been disposed")
                }(), t instanceof k_ ? (this._attachedPortal = t, this.attachComponentPortal(t)) : t instanceof O_ ? (this._attachedPortal = t, this.attachTemplatePortal(t)) : void function () {
                    throw Error("Attempting to attach an unknown Portal type. BasePortalOutlet accepts either a ComponentPortal or a TemplatePortal.")
                }()
            }, t.prototype.detach = function () {
                this._attachedPortal && (this._attachedPortal.setAttachedHost(null), this._attachedPortal = null), this._invokeDisposeFn()
            }, t.prototype.dispose = function () {
                this.hasAttached() && this.detach(), this._invokeDisposeFn(), this._isDisposed = !0
            }, t.prototype.setDisposeFn = function (t) {
                this._disposeFn = t
            }, t.prototype._invokeDisposeFn = function () {
                this._disposeFn && (this._disposeFn(), this._disposeFn = null)
            }, t
        }()), T_ = function () {
            return function () {
            }
        }(), I_ = function () {
            function t(t, e) {
                this._viewportRuler = t, this._previousHTMLStyles = {
                    top: "",
                    left: ""
                }, this._isEnabled = !1, this._document = e
            }

            return t.prototype.attach = function () {
            }, t.prototype.enable = function () {
                if (this._canBeEnabled()) {
                    var t = this._document.documentElement;
                    this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(), this._previousHTMLStyles.left = t.style.left || "", this._previousHTMLStyles.top = t.style.top || "", t.style.left = Sd(-this._previousScrollPosition.left), t.style.top = Sd(-this._previousScrollPosition.top), t.classList.add("cdk-global-scrollblock"), this._isEnabled = !0
                }
            }, t.prototype.disable = function () {
                if (this._isEnabled) {
                    var t = this._document.documentElement, e = t.style, n = this._document.body.style,
                        r = e.scrollBehavior || "", i = n.scrollBehavior || "";
                    this._isEnabled = !1, e.left = this._previousHTMLStyles.left, e.top = this._previousHTMLStyles.top, t.classList.remove("cdk-global-scrollblock"), e.scrollBehavior = n.scrollBehavior = "auto", window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top), e.scrollBehavior = r, n.scrollBehavior = i
                }
            }, t.prototype._canBeEnabled = function () {
                if (this._document.documentElement.classList.contains("cdk-global-scrollblock") || this._isEnabled) return !1;
                var t = this._document.body, e = this._viewportRuler.getViewportSize();
                return t.scrollHeight > e.height || t.scrollWidth > e.width
            }, t
        }();

        function R_() {
            return Error("Scroll strategy has already been attached.")
        }

        var N_ = function () {
            function t(t, e, n, r) {
                var i = this;
                this._scrollDispatcher = t, this._ngZone = e, this._viewportRuler = n, this._config = r, this._scrollSubscription = null, this._detach = function () {
                    i.disable(), i._overlayRef.hasAttached() && i._ngZone.run(function () {
                        return i._overlayRef.detach()
                    })
                }
            }

            return t.prototype.attach = function (t) {
                if (this._overlayRef) throw R_();
                this._overlayRef = t
            }, t.prototype.enable = function () {
                var t = this;
                if (!this._scrollSubscription) {
                    var e = this._scrollDispatcher.scrolled(0);
                    this._config && this._config.threshold && this._config.threshold > 1 ? (this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top, this._scrollSubscription = e.subscribe(function () {
                        var e = t._viewportRuler.getViewportScrollPosition().top;
                        Math.abs(e - t._initialScrollPosition) > t._config.threshold ? t._detach() : t._overlayRef.updatePosition()
                    })) : this._scrollSubscription = e.subscribe(this._detach)
                }
            }, t.prototype.disable = function () {
                this._scrollSubscription && (this._scrollSubscription.unsubscribe(), this._scrollSubscription = null)
            }, t.prototype.detach = function () {
                this.disable(), this._overlayRef = null
            }, t
        }(), D_ = function () {
            function t() {
            }

            return t.prototype.enable = function () {
            }, t.prototype.disable = function () {
            }, t.prototype.attach = function () {
            }, t
        }();

        function B_(t, e) {
            return e.some(function (e) {
                return t.bottom < e.top || t.top > e.bottom || t.right < e.left || t.left > e.right
            })
        }

        function M_(t, e) {
            return e.some(function (e) {
                return t.top < e.top || t.bottom > e.bottom || t.left < e.left || t.right > e.right
            })
        }

        var V_ = function () {
            function t(t, e, n, r) {
                this._scrollDispatcher = t, this._viewportRuler = e, this._ngZone = n, this._config = r, this._scrollSubscription = null
            }

            return t.prototype.attach = function (t) {
                if (this._overlayRef) throw R_();
                this._overlayRef = t
            }, t.prototype.enable = function () {
                var t = this;
                this._scrollSubscription || (this._scrollSubscription = this._scrollDispatcher.scrolled(this._config ? this._config.scrollThrottle : 0).subscribe(function () {
                    if (t._overlayRef.updatePosition(), t._config && t._config.autoClose) {
                        var e = t._overlayRef.overlayElement.getBoundingClientRect(),
                            n = t._viewportRuler.getViewportSize(),
                            r = n.width, i = n.height;
                        B_(e, [{
                            width: r,
                            height: i,
                            bottom: i,
                            right: r,
                            top: 0,
                            left: 0
                        }]) && (t.disable(), t._ngZone.run(function () {
                            return t._overlayRef.detach()
                        }))
                    }
                }))
            }, t.prototype.disable = function () {
                this._scrollSubscription && (this._scrollSubscription.unsubscribe(), this._scrollSubscription = null)
            }, t.prototype.detach = function () {
                this.disable(), this._overlayRef = null
            }, t
        }(), F_ = function () {
            function t(t, e, n, r) {
                var i = this;
                this._scrollDispatcher = t, this._viewportRuler = e, this._ngZone = n, this.noop = function () {
                    return new D_
                }, this.close = function (t) {
                    return new N_(i._scrollDispatcher, i._ngZone, i._viewportRuler, t)
                }, this.block = function () {
                    return new I_(i._viewportRuler, i._document)
                }, this.reposition = function (t) {
                    return new V_(i._scrollDispatcher, i._viewportRuler, i._ngZone, t)
                }, this._document = r
            }

            return t.ngInjectableDef = Ct({
                factory: function () {
                    return new t(Dt(C_), Dt(E_), Dt(ro), Dt(Gs))
                }, token: t, providedIn: "root"
            }), t
        }(), j_ = function () {
            return function (t) {
                var e = this;
                this.scrollStrategy = new D_, this.panelClass = "", this.hasBackdrop = !1, this.backdropClass = "cdk-overlay-dark-backdrop", this.disposeOnNavigation = !1, t && Object.keys(t).forEach(function (n) {
                    void 0 !== t[n] && (e[n] = t[n])
                })
            }
        }(), L_ = function () {
            return function (t, e, n, r, i) {
                this.offsetX = n, this.offsetY = r, this.panelClass = i, this.originX = t.originX, this.originY = t.originY, this.overlayX = e.overlayX, this.overlayY = e.overlayY
            }
        }(), z_ = function () {
            return function (t, e) {
                this.connectionPair = t, this.scrollableViewProperties = e
            }
        }();

        function U_(t, e) {
            if ("top" !== e && "bottom" !== e && "center" !== e) throw Error("ConnectedPosition: Invalid " + t + ' "' + e + '". Expected "top", "bottom" or "center".')
        }

        function H_(t, e) {
            if ("start" !== e && "end" !== e && "center" !== e) throw Error("ConnectedPosition: Invalid " + t + ' "' + e + '". Expected "start", "end" or "center".')
        }

        var q_ = function () {
            function t(t) {
                var e = this;
                this._attachedOverlays = [], this._keydownListener = function (t) {
                    for (var n = e._attachedOverlays, r = n.length - 1; r > -1; r--) if (n[r]._keydownEventSubscriptions > 0) {
                        n[r]._keydownEvents.next(t);
                        break
                    }
                }, this._document = t
            }

            return t.prototype.ngOnDestroy = function () {
                this._detach()
            }, t.prototype.add = function (t) {
                this.remove(t), this._isAttached || (this._document.body.addEventListener("keydown", this._keydownListener), this._isAttached = !0), this._attachedOverlays.push(t)
            }, t.prototype.remove = function (t) {
                var e = this._attachedOverlays.indexOf(t);
                e > -1 && this._attachedOverlays.splice(e, 1), 0 === this._attachedOverlays.length && this._detach()
            }, t.prototype._detach = function () {
                this._isAttached && (this._document.body.removeEventListener("keydown", this._keydownListener), this._isAttached = !1)
            }, t.ngInjectableDef = Ct({
                factory: function () {
                    return new t(Dt(Gs))
                }, token: t, providedIn: "root"
            }), t
        }(), G_ = function () {
            function t(t) {
                this._document = t
            }

            return t.prototype.ngOnDestroy = function () {
                this._containerElement && this._containerElement.parentNode && this._containerElement.parentNode.removeChild(this._containerElement)
            }, t.prototype.getContainerElement = function () {
                return this._containerElement || this._createContainer(), this._containerElement
            }, t.prototype._createContainer = function () {
                var t = this._document.createElement("div");
                t.classList.add("cdk-overlay-container"), this._document.body.appendChild(t), this._containerElement = t
            }, t.ngInjectableDef = Ct({
                factory: function () {
                    return new t(Dt(Gs))
                }, token: t, providedIn: "root"
            }), t
        }(), W_ = function () {
            function t(t, e, n, r, i, o, a, s) {
                var l = this;
                this._portalOutlet = t, this._host = e, this._pane = n, this._config = r, this._ngZone = i, this._keyboardDispatcher = o, this._document = a, this._location = s, this._backdropElement = null, this._backdropClick = new B, this._attachments = new B, this._detachments = new B, this._locationChanges = y.EMPTY, this._keydownEventsObservable = new P(function (t) {
                    var e = l._keydownEvents.subscribe(t);
                    return l._keydownEventSubscriptions++, function () {
                        e.unsubscribe(), l._keydownEventSubscriptions--
                    }
                }), this._keydownEvents = new B, this._keydownEventSubscriptions = 0, r.scrollStrategy && (this._scrollStrategy = r.scrollStrategy, this._scrollStrategy.attach(this)), this._positionStrategy = r.positionStrategy
            }

            return Object.defineProperty(t.prototype, "overlayElement", {
                get: function () {
                    return this._pane
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "backdropElement", {
                get: function () {
                    return this._backdropElement
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "hostElement", {
                get: function () {
                    return this._host
                }, enumerable: !0, configurable: !0
            }), t.prototype.attach = function (t) {
                var e = this, n = this._portalOutlet.attach(t);
                return this._positionStrategy && this._positionStrategy.attach(this), !this._host.parentElement && this._previousHostParent && this._previousHostParent.appendChild(this._host), this._updateStackingOrder(), this._updateElementSize(), this._updateElementDirection(), this._scrollStrategy && this._scrollStrategy.enable(), this._ngZone.onStable.asObservable().pipe(Ol(1)).subscribe(function () {
                    e.hasAttached() && e.updatePosition()
                }), this._togglePointerEvents(!0), this._config.hasBackdrop && this._attachBackdrop(), this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !0), this._attachments.next(), this._keyboardDispatcher.add(this), this._config.disposeOnNavigation && this._location && (this._locationChanges = this._location.subscribe(function () {
                    return e.dispose()
                })), n
            }, t.prototype.detach = function () {
                if (this.hasAttached()) {
                    this.detachBackdrop(), this._togglePointerEvents(!1), this._positionStrategy && this._positionStrategy.detach && this._positionStrategy.detach(), this._scrollStrategy && this._scrollStrategy.disable();
                    var t = this._portalOutlet.detach();
                    return this._detachments.next(), this._keyboardDispatcher.remove(this), this._detachContentWhenStable(), this._locationChanges.unsubscribe(), t
                }
            }, t.prototype.dispose = function () {
                var t = this.hasAttached();
                this._positionStrategy && this._positionStrategy.dispose(), this._disposeScrollStrategy(), this.detachBackdrop(), this._locationChanges.unsubscribe(), this._keyboardDispatcher.remove(this), this._portalOutlet.dispose(), this._attachments.complete(), this._backdropClick.complete(), this._keydownEvents.complete(), this._host && this._host.parentNode && (this._host.parentNode.removeChild(this._host), this._host = null), this._previousHostParent = this._pane = null, t && this._detachments.next(), this._detachments.complete()
            }, t.prototype.hasAttached = function () {
                return this._portalOutlet.hasAttached()
            }, t.prototype.backdropClick = function () {
                return this._backdropClick.asObservable()
            }, t.prototype.attachments = function () {
                return this._attachments.asObservable()
            }, t.prototype.detachments = function () {
                return this._detachments.asObservable()
            }, t.prototype.keydownEvents = function () {
                return this._keydownEventsObservable
            }, t.prototype.getConfig = function () {
                return this._config
            }, t.prototype.updatePosition = function () {
                this._positionStrategy && this._positionStrategy.apply()
            }, t.prototype.updatePositionStrategy = function (t) {
                t !== this._positionStrategy && (this._positionStrategy && this._positionStrategy.dispose(), this._positionStrategy = t, this.hasAttached() && (t.attach(this), this.updatePosition()))
            }, t.prototype.updateSize = function (t) {
                this._config = o({}, this._config, t), this._updateElementSize()
            }, t.prototype.setDirection = function (t) {
                this._config = o({}, this._config, {direction: t}), this._updateElementDirection()
            }, t.prototype.addPanelClass = function (t) {
                this._pane && this._toggleClasses(this._pane, t, !0)
            }, t.prototype.removePanelClass = function (t) {
                this._pane && this._toggleClasses(this._pane, t, !1)
            }, t.prototype.getDirection = function () {
                var t = this._config.direction;
                return t ? "string" == typeof t ? t : t.value : "ltr"
            }, t.prototype.updateScrollStrategy = function (t) {
                t !== this._scrollStrategy && (this._disposeScrollStrategy(), this._scrollStrategy = t, this.hasAttached() && (t.attach(this), t.enable()))
            }, t.prototype._updateElementDirection = function () {
                this._host.setAttribute("dir", this.getDirection())
            }, t.prototype._updateElementSize = function () {
                var t = this._pane.style;
                t.width = Sd(this._config.width), t.height = Sd(this._config.height), t.minWidth = Sd(this._config.minWidth), t.minHeight = Sd(this._config.minHeight), t.maxWidth = Sd(this._config.maxWidth), t.maxHeight = Sd(this._config.maxHeight)
            }, t.prototype._togglePointerEvents = function (t) {
                this._pane.style.pointerEvents = t ? "auto" : "none"
            }, t.prototype._attachBackdrop = function () {
                var t = this;
                this._backdropElement = this._document.createElement("div"), this._backdropElement.classList.add("cdk-overlay-backdrop"), this._config.backdropClass && this._toggleClasses(this._backdropElement, this._config.backdropClass, !0), this._host.parentElement.insertBefore(this._backdropElement, this._host), this._backdropElement.addEventListener("click", function (e) {
                    return t._backdropClick.next(e)
                }), "undefined" != typeof requestAnimationFrame ? this._ngZone.runOutsideAngular(function () {
                    requestAnimationFrame(function () {
                        t._backdropElement && t._backdropElement.classList.add("cdk-overlay-backdrop-showing")
                    })
                }) : this._backdropElement.classList.add("cdk-overlay-backdrop-showing")
            }, t.prototype._updateStackingOrder = function () {
                this._host.nextSibling && this._host.parentNode.appendChild(this._host)
            }, t.prototype.detachBackdrop = function () {
                var t = this, e = this._backdropElement;
                if (e) {
                    var n, r = function () {
                        e && e.parentNode && e.parentNode.removeChild(e), t._backdropElement == e && (t._backdropElement = null), t._config.backdropClass && t._toggleClasses(e, t._config.backdropClass, !1), clearTimeout(n)
                    };
                    e.classList.remove("cdk-overlay-backdrop-showing"), this._ngZone.runOutsideAngular(function () {
                        e.addEventListener("transitionend", r)
                    }), e.style.pointerEvents = "none", n = this._ngZone.runOutsideAngular(function () {
                        return setTimeout(r, 500)
                    })
                }
            }, t.prototype._toggleClasses = function (t, e, n) {
                var r = t.classList;
                Cd(e).forEach(function (t) {
                    n ? r.add(t) : r.remove(t)
                })
            }, t.prototype._detachContentWhenStable = function () {
                var t = this;
                this._ngZone.runOutsideAngular(function () {
                    var e = t._ngZone.onStable.asObservable().pipe(dm(at(t._attachments, t._detachments))).subscribe(function () {
                        t._pane && t._host && 0 !== t._pane.children.length || (t._pane && t._config.panelClass && t._toggleClasses(t._pane, t._config.panelClass, !1), t._host && t._host.parentElement && (t._previousHostParent = t._host.parentElement, t._previousHostParent.removeChild(t._host)), e.unsubscribe())
                    })
                })
            }, t.prototype._disposeScrollStrategy = function () {
                var t = this._scrollStrategy;
                t && (t.disable(), t.detach && t.detach())
            }, t
        }(), K_ = function () {
            function t(t, e, n, r, i) {
                this._viewportRuler = e, this._document = n, this._platform = r, this._overlayContainer = i, this._lastBoundingBoxSize = {
                    width: 0,
                    height: 0
                }, this._isPushed = !1, this._canPush = !0, this._growAfterOpen = !1, this._hasFlexibleDimensions = !0, this._positionLocked = !1, this._viewportMargin = 0, this._scrollables = [], this._preferredPositions = [], this._positionChanges = new B, this._resizeSubscription = y.EMPTY, this._offsetX = 0, this._offsetY = 0, this._appliedPanelClasses = [], this.positionChanges = this._positionChanges.asObservable(), this.setOrigin(t)
            }

            return Object.defineProperty(t.prototype, "positions", {
                get: function () {
                    return this._preferredPositions
                }, enumerable: !0, configurable: !0
            }), t.prototype.attach = function (t) {
                var e = this;
                if (this._overlayRef && t !== this._overlayRef) throw Error("This position strategy is already attached to an overlay");
                this._validatePositions(), t.hostElement.classList.add("cdk-overlay-connected-position-bounding-box"), this._overlayRef = t, this._boundingBox = t.hostElement, this._pane = t.overlayElement, this._isDisposed = !1, this._isInitialRender = !0, this._lastPosition = null, this._resizeSubscription.unsubscribe(), this._resizeSubscription = this._viewportRuler.change().subscribe(function () {
                    e._isInitialRender = !0, e.apply()
                })
            }, t.prototype.apply = function () {
                if (!this._isDisposed && this._platform.isBrowser) if (!this._isInitialRender && this._positionLocked && this._lastPosition) this.reapplyLastPosition(); else {
                    this._clearPanelClasses(), this._resetOverlayElementStyles(), this._resetBoundingBoxStyles(), this._viewportRect = this._getNarrowedViewportRect(), this._originRect = this._getOriginRect(), this._overlayRect = this._pane.getBoundingClientRect();
                    for (var t, e = this._originRect, n = this._overlayRect, r = this._viewportRect, i = [], o = 0, a = this._preferredPositions; o < a.length; o++) {
                        var s = a[o], l = this._getOriginPoint(e, s), u = this._getOverlayPoint(l, n, s),
                            c = this._getOverlayFit(u, n, r, s);
                        if (c.isCompletelyWithinViewport) return this._isPushed = !1, void this._applyPosition(s, l);
                        this._canFitWithFlexibleDimensions(c, u, r) ? i.push({
                            position: s,
                            origin: l,
                            overlayRect: n,
                            boundingBoxRect: this._calculateBoundingBoxRect(l, s)
                        }) : (!t || t.overlayFit.visibleArea < c.visibleArea) && (t = {
                            overlayFit: c,
                            overlayPoint: u,
                            originPoint: l,
                            position: s,
                            overlayRect: n
                        })
                    }
                    if (i.length) {
                        for (var h = null, p = -1, f = 0, d = i; f < d.length; f++) {
                            var m = d[f],
                                y = m.boundingBoxRect.width * m.boundingBoxRect.height * (m.position.weight || 1);
                            y > p && (p = y, h = m)
                        }
                        return this._isPushed = !1, void this._applyPosition(h.position, h.origin)
                    }
                    if (this._canPush) return this._isPushed = !0, void this._applyPosition(t.position, t.originPoint);
                    this._applyPosition(t.position, t.originPoint)
                }
            }, t.prototype.detach = function () {
                this._clearPanelClasses(), this._lastPosition = null, this._previousPushAmount = null, this._resizeSubscription.unsubscribe()
            }, t.prototype.dispose = function () {
                this._isDisposed || (this._boundingBox && Q_(this._boundingBox.style, {
                    top: "",
                    left: "",
                    right: "",
                    bottom: "",
                    height: "",
                    width: "",
                    alignItems: "",
                    justifyContent: ""
                }), this._pane && this._resetOverlayElementStyles(), this._overlayRef && this._overlayRef.hostElement.classList.remove("cdk-overlay-connected-position-bounding-box"), this.detach(), this._positionChanges.complete(), this._overlayRef = this._boundingBox = null, this._isDisposed = !0)
            }, t.prototype.reapplyLastPosition = function () {
                if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
                    this._originRect = this._getOriginRect(), this._overlayRect = this._pane.getBoundingClientRect(), this._viewportRect = this._getNarrowedViewportRect();
                    var t = this._lastPosition || this._preferredPositions[0],
                        e = this._getOriginPoint(this._originRect, t);
                    this._applyPosition(t, e)
                }
            }, t.prototype.withScrollableContainers = function (t) {
                return this._scrollables = t, this
            }, t.prototype.withPositions = function (t) {
                return this._preferredPositions = t, -1 === t.indexOf(this._lastPosition) && (this._lastPosition = null), this._validatePositions(), this
            }, t.prototype.withViewportMargin = function (t) {
                return this._viewportMargin = t, this
            }, t.prototype.withFlexibleDimensions = function (t) {
                return void 0 === t && (t = !0), this._hasFlexibleDimensions = t, this
            }, t.prototype.withGrowAfterOpen = function (t) {
                return void 0 === t && (t = !0), this._growAfterOpen = t, this
            }, t.prototype.withPush = function (t) {
                return void 0 === t && (t = !0), this._canPush = t, this
            }, t.prototype.withLockedPosition = function (t) {
                return void 0 === t && (t = !0), this._positionLocked = t, this
            }, t.prototype.setOrigin = function (t) {
                return this._origin = t, this
            }, t.prototype.withDefaultOffsetX = function (t) {
                return this._offsetX = t, this
            }, t.prototype.withDefaultOffsetY = function (t) {
                return this._offsetY = t, this
            }, t.prototype.withTransformOriginOn = function (t) {
                return this._transformOriginSelector = t, this
            }, t.prototype._getOriginPoint = function (t, e) {
                var n;
                if ("center" == e.originX) n = t.left + t.width / 2; else {
                    var r = this._isRtl() ? t.right : t.left, i = this._isRtl() ? t.left : t.right;
                    n = "start" == e.originX ? r : i
                }
                return {x: n, y: "center" == e.originY ? t.top + t.height / 2 : "top" == e.originY ? t.top : t.bottom}
            }, t.prototype._getOverlayPoint = function (t, e, n) {
                var r;
                return r = "center" == n.overlayX ? -e.width / 2 : "start" === n.overlayX ? this._isRtl() ? -e.width : 0 : this._isRtl() ? 0 : -e.width, {
                    x: t.x + r,
                    y: t.y + ("center" == n.overlayY ? -e.height / 2 : "top" == n.overlayY ? 0 : -e.height)
                }
            }, t.prototype._getOverlayFit = function (t, e, n, r) {
                var i = t.x, o = t.y, a = this._getOffset(r, "x"), s = this._getOffset(r, "y");
                a && (i += a), s && (o += s);
                var l = 0 - o, u = o + e.height - n.height,
                    c = this._subtractOverflows(e.width, 0 - i, i + e.width - n.width),
                    h = this._subtractOverflows(e.height, l, u), p = c * h;
                return {
                    visibleArea: p,
                    isCompletelyWithinViewport: e.width * e.height === p,
                    fitsInViewportVertically: h === e.height,
                    fitsInViewportHorizontally: c == e.width
                }
            }, t.prototype._canFitWithFlexibleDimensions = function (t, e, n) {
                if (this._hasFlexibleDimensions) {
                    var r = n.bottom - e.y, i = n.right - e.x, o = this._overlayRef.getConfig().minHeight,
                        a = this._overlayRef.getConfig().minWidth;
                    return (t.fitsInViewportVertically || null != o && o <= r) && (t.fitsInViewportHorizontally || null != a && a <= i)
                }
            }, t.prototype._pushOverlayOnScreen = function (t, e, n) {
                if (this._previousPushAmount && this._positionLocked) return {
                    x: t.x + this._previousPushAmount.x,
                    y: t.y + this._previousPushAmount.y
                };
                var r, i, o = this._viewportRect, a = Math.max(t.x + e.width - o.right, 0),
                    s = Math.max(t.y + e.height - o.bottom, 0), l = Math.max(o.top - n.top - t.y, 0),
                    u = Math.max(o.left - n.left - t.x, 0);
                return this._previousPushAmount = {
                    x: r = e.width <= o.width ? u || -a : t.x < this._viewportMargin ? o.left - n.left - t.x : 0,
                    y: i = e.height <= o.height ? l || -s : t.y < this._viewportMargin ? o.top - n.top - t.y : 0
                }, {x: t.x + r, y: t.y + i}
            }, t.prototype._applyPosition = function (t, e) {
                if (this._setTransformOrigin(t), this._setOverlayElementStyles(e, t), this._setBoundingBoxStyles(e, t), t.panelClass && this._addPanelClasses(t.panelClass), this._lastPosition = t, this._positionChanges.observers.length) {
                    var n = this._getScrollVisibility(), r = new z_(t, n);
                    this._positionChanges.next(r)
                }
                this._isInitialRender = !1
            }, t.prototype._setTransformOrigin = function (t) {
                if (this._transformOriginSelector) {
                    var e, n = this._boundingBox.querySelectorAll(this._transformOriginSelector), r = t.overlayY;
                    e = "center" === t.overlayX ? "center" : this._isRtl() ? "start" === t.overlayX ? "right" : "left" : "start" === t.overlayX ? "left" : "right";
                    for (var i = 0; i < n.length; i++) n[i].style.transformOrigin = e + " " + r
                }
            }, t.prototype._calculateBoundingBoxRect = function (t, e) {
                var n, r, i, o, a, s, l = this._viewportRect, u = this._isRtl();
                if ("top" === e.overlayY) n = l.height - (r = t.y) + this._viewportMargin; else if ("bottom" === e.overlayY) n = l.height - (i = l.height - t.y + 2 * this._viewportMargin) + this._viewportMargin; else {
                    var c = Math.min(l.bottom - t.y + l.top, t.y), h = this._lastBoundingBoxSize.height;
                    r = t.y - c, (n = 2 * c) > h && !this._isInitialRender && !this._growAfterOpen && (r = t.y - h / 2)
                }
                if ("end" === e.overlayX && !u || "start" === e.overlayX && u) s = l.right - t.x + this._viewportMargin, o = t.x - l.left; else if ("start" === e.overlayX && !u || "end" === e.overlayX && u) a = t.x, o = l.right - t.x; else {
                    c = Math.min(l.right - t.x + l.left, t.x);
                    var p = this._lastBoundingBoxSize.width;
                    a = t.x - c, (o = 2 * c) > p && !this._isInitialRender && !this._growAfterOpen && (a = t.x - p / 2)
                }
                return {top: r, left: a, bottom: i, right: s, width: o, height: n}
            }, t.prototype._setBoundingBoxStyles = function (t, e) {
                var n = this._calculateBoundingBoxRect(t, e);
                this._isInitialRender || this._growAfterOpen || (n.height = Math.min(n.height, this._lastBoundingBoxSize.height), n.width = Math.min(n.width, this._lastBoundingBoxSize.width));
                var r = {};
                if (this._hasExactPosition()) r.top = r.left = "0", r.bottom = r.right = "", r.width = r.height = "100%"; else {
                    var i = this._overlayRef.getConfig().maxHeight, o = this._overlayRef.getConfig().maxWidth;
                    r.height = Sd(n.height), r.top = Sd(n.top), r.bottom = Sd(n.bottom), r.width = Sd(n.width), r.left = Sd(n.left), r.right = Sd(n.right), r.alignItems = "center" === e.overlayX ? "center" : "end" === e.overlayX ? "flex-end" : "flex-start", r.justifyContent = "center" === e.overlayY ? "center" : "bottom" === e.overlayY ? "flex-end" : "flex-start", i && (r.maxHeight = Sd(i)), o && (r.maxWidth = Sd(o))
                }
                this._lastBoundingBoxSize = n, Q_(this._boundingBox.style, r)
            }, t.prototype._resetBoundingBoxStyles = function () {
                Q_(this._boundingBox.style, {
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    height: "",
                    width: "",
                    alignItems: "",
                    justifyContent: ""
                })
            }, t.prototype._resetOverlayElementStyles = function () {
                Q_(this._pane.style, {top: "", left: "", bottom: "", right: "", position: "", transform: ""})
            }, t.prototype._setOverlayElementStyles = function (t, e) {
                var n = {};
                if (this._hasExactPosition()) {
                    var r = this._viewportRuler.getViewportScrollPosition();
                    Q_(n, this._getExactOverlayY(e, t, r)), Q_(n, this._getExactOverlayX(e, t, r))
                } else n.position = "static";
                var i = "", o = this._getOffset(e, "x"), a = this._getOffset(e, "y");
                o && (i += "translateX(" + o + "px) "), a && (i += "translateY(" + a + "px)"), n.transform = i.trim(), this._hasFlexibleDimensions && this._overlayRef.getConfig().maxHeight && (n.maxHeight = ""), this._hasFlexibleDimensions && this._overlayRef.getConfig().maxWidth && (n.maxWidth = ""), Q_(this._pane.style, n)
            }, t.prototype._getExactOverlayY = function (t, e, n) {
                var r = {top: null, bottom: null}, i = this._getOverlayPoint(e, this._overlayRect, t);
                this._isPushed && (i = this._pushOverlayOnScreen(i, this._overlayRect, n));
                var o = this._overlayContainer.getContainerElement().getBoundingClientRect().top;
                return i.y -= o, "bottom" === t.overlayY ? r.bottom = this._document.documentElement.clientHeight - (i.y + this._overlayRect.height) + "px" : r.top = Sd(i.y), r
            }, t.prototype._getExactOverlayX = function (t, e, n) {
                var r = {left: null, right: null}, i = this._getOverlayPoint(e, this._overlayRect, t);
                return this._isPushed && (i = this._pushOverlayOnScreen(i, this._overlayRect, n)), "right" == (this._isRtl() ? "end" === t.overlayX ? "left" : "right" : "end" === t.overlayX ? "right" : "left") ? r.right = this._document.documentElement.clientWidth - (i.x + this._overlayRect.width) + "px" : r.left = Sd(i.x), r
            }, t.prototype._getScrollVisibility = function () {
                var t = this._getOriginRect(), e = this._pane.getBoundingClientRect(),
                    n = this._scrollables.map(function (t) {
                        return t.getElementRef().nativeElement.getBoundingClientRect()
                    });
                return {
                    isOriginClipped: M_(t, n),
                    isOriginOutsideView: B_(t, n),
                    isOverlayClipped: M_(e, n),
                    isOverlayOutsideView: B_(e, n)
                }
            }, t.prototype._subtractOverflows = function (t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                return e.reduce(function (t, e) {
                    return t - Math.max(e, 0)
                }, t)
            }, t.prototype._getNarrowedViewportRect = function () {
                var t = this._document.documentElement.clientWidth, e = this._document.documentElement.clientHeight,
                    n = this._viewportRuler.getViewportScrollPosition();
                return {
                    top: n.top + this._viewportMargin,
                    left: n.left + this._viewportMargin,
                    right: n.left + t - this._viewportMargin,
                    bottom: n.top + e - this._viewportMargin,
                    width: t - 2 * this._viewportMargin,
                    height: e - 2 * this._viewportMargin
                }
            }, t.prototype._isRtl = function () {
                return "rtl" === this._overlayRef.getDirection()
            }, t.prototype._hasExactPosition = function () {
                return !this._hasFlexibleDimensions || this._isPushed
            }, t.prototype._getOffset = function (t, e) {
                return "x" === e ? null == t.offsetX ? this._offsetX : t.offsetX : null == t.offsetY ? this._offsetY : t.offsetY
            }, t.prototype._validatePositions = function () {
                if (!this._preferredPositions.length) throw Error("FlexibleConnectedPositionStrategy: At least one position is required.");
                this._preferredPositions.forEach(function (t) {
                    H_("originX", t.originX), U_("originY", t.originY), H_("overlayX", t.overlayX), U_("overlayY", t.overlayY)
                })
            }, t.prototype._addPanelClasses = function (t) {
                var e = this;
                this._pane && Cd(t).forEach(function (t) {
                    "" !== t && -1 === e._appliedPanelClasses.indexOf(t) && (e._appliedPanelClasses.push(t), e._pane.classList.add(t))
                })
            }, t.prototype._clearPanelClasses = function () {
                var t = this;
                this._pane && (this._appliedPanelClasses.forEach(function (e) {
                    t._pane.classList.remove(e)
                }), this._appliedPanelClasses = [])
            }, t.prototype._getOriginRect = function () {
                var t = this._origin;
                return t instanceof ln ? t.nativeElement.getBoundingClientRect() : t instanceof HTMLElement ? t.getBoundingClientRect() : {
                    top: t.y,
                    bottom: t.y,
                    left: t.x,
                    right: t.x,
                    height: 0,
                    width: 0
                }
            }, t
        }();

        function Q_(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        }

        var Z_ = function () {
            function t(t, e, n, r, i, o, a) {
                this._preferredPositions = [], this._positionStrategy = new K_(n, r, i, o, a).withFlexibleDimensions(!1).withPush(!1).withViewportMargin(0), this.withFallbackPosition(t, e)
            }

            return Object.defineProperty(t.prototype, "_isRtl", {
                get: function () {
                    return "rtl" === this._overlayRef.getDirection()
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "onPositionChange", {
                get: function () {
                    return this._positionStrategy.positionChanges
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "positions", {
                get: function () {
                    return this._preferredPositions
                }, enumerable: !0, configurable: !0
            }), t.prototype.attach = function (t) {
                this._overlayRef = t, this._positionStrategy.attach(t), this._direction && (t.setDirection(this._direction), this._direction = null)
            }, t.prototype.dispose = function () {
                this._positionStrategy.dispose()
            }, t.prototype.detach = function () {
                this._positionStrategy.detach()
            }, t.prototype.apply = function () {
                this._positionStrategy.apply()
            }, t.prototype.recalculateLastPosition = function () {
                this._positionStrategy.reapplyLastPosition()
            }, t.prototype.withScrollableContainers = function (t) {
                this._positionStrategy.withScrollableContainers(t)
            }, t.prototype.withFallbackPosition = function (t, e, n, r) {
                var i = new L_(t, e, n, r);
                return this._preferredPositions.push(i), this._positionStrategy.withPositions(this._preferredPositions), this
            }, t.prototype.withDirection = function (t) {
                return this._overlayRef ? this._overlayRef.setDirection(t) : this._direction = t, this
            }, t.prototype.withOffsetX = function (t) {
                return this._positionStrategy.withDefaultOffsetX(t), this
            }, t.prototype.withOffsetY = function (t) {
                return this._positionStrategy.withDefaultOffsetY(t), this
            }, t.prototype.withLockedPosition = function (t) {
                return this._positionStrategy.withLockedPosition(t), this
            }, t.prototype.withPositions = function (t) {
                return this._preferredPositions = t.slice(), this._positionStrategy.withPositions(this._preferredPositions), this
            }, t.prototype.setOrigin = function (t) {
                return this._positionStrategy.setOrigin(t), this
            }, t
        }(), Y_ = function () {
            function t() {
                this._cssPosition = "static", this._topOffset = "", this._bottomOffset = "", this._leftOffset = "", this._rightOffset = "", this._alignItems = "", this._justifyContent = "", this._width = "", this._height = ""
            }

            return t.prototype.attach = function (t) {
                var e = t.getConfig();
                this._overlayRef = t, this._width && !e.width && t.updateSize({width: this._width}), this._height && !e.height && t.updateSize({height: this._height}), t.hostElement.classList.add("cdk-global-overlay-wrapper"), this._isDisposed = !1
            }, t.prototype.top = function (t) {
                return void 0 === t && (t = ""), this._bottomOffset = "", this._topOffset = t, this._alignItems = "flex-start", this
            }, t.prototype.left = function (t) {
                return void 0 === t && (t = ""), this._rightOffset = "", this._leftOffset = t, this._justifyContent = "flex-start", this
            }, t.prototype.bottom = function (t) {
                return void 0 === t && (t = ""), this._topOffset = "", this._bottomOffset = t, this._alignItems = "flex-end", this
            }, t.prototype.right = function (t) {
                return void 0 === t && (t = ""), this._leftOffset = "", this._rightOffset = t, this._justifyContent = "flex-end", this
            }, t.prototype.width = function (t) {
                return void 0 === t && (t = ""), this._overlayRef ? this._overlayRef.updateSize({width: t}) : this._width = t, this
            }, t.prototype.height = function (t) {
                return void 0 === t && (t = ""), this._overlayRef ? this._overlayRef.updateSize({height: t}) : this._height = t, this
            }, t.prototype.centerHorizontally = function (t) {
                return void 0 === t && (t = ""), this.left(t), this._justifyContent = "center", this
            }, t.prototype.centerVertically = function (t) {
                return void 0 === t && (t = ""), this.top(t), this._alignItems = "center", this
            }, t.prototype.apply = function () {
                if (this._overlayRef && this._overlayRef.hasAttached()) {
                    var t = this._overlayRef.overlayElement.style, e = this._overlayRef.hostElement.style,
                        n = this._overlayRef.getConfig();
                    t.position = this._cssPosition, t.marginLeft = "100%" === n.width ? "0" : this._leftOffset, t.marginTop = "100%" === n.height ? "0" : this._topOffset, t.marginBottom = this._bottomOffset, t.marginRight = this._rightOffset, "100%" === n.width ? e.justifyContent = "flex-start" : "center" === this._justifyContent ? e.justifyContent = "center" : "rtl" === this._overlayRef.getConfig().direction ? "flex-start" === this._justifyContent ? e.justifyContent = "flex-end" : "flex-end" === this._justifyContent && (e.justifyContent = "flex-start") : e.justifyContent = this._justifyContent, e.alignItems = "100%" === n.height ? "flex-start" : this._alignItems
                }
            }, t.prototype.dispose = function () {
                if (!this._isDisposed && this._overlayRef) {
                    var t = this._overlayRef.overlayElement.style, e = this._overlayRef.hostElement, n = e.style;
                    e.classList.remove("cdk-global-overlay-wrapper"), n.justifyContent = n.alignItems = t.marginTop = t.marginBottom = t.marginLeft = t.marginRight = t.position = "", this._overlayRef = null, this._isDisposed = !0
                }
            }, t
        }(), $_ = function () {
            function t(t, e, n, r) {
                this._viewportRuler = t, this._document = e, this._platform = n, this._overlayContainer = r
            }

            return t.prototype.global = function () {
                return new Y_
            }, t.prototype.connectedTo = function (t, e, n) {
                return new Z_(e, n, t, this._viewportRuler, this._document, this._platform, this._overlayContainer)
            }, t.prototype.flexibleConnectedTo = function (t) {
                return new K_(t, this._viewportRuler, this._document, this._platform, this._overlayContainer)
            }, t.ngInjectableDef = Ct({
                factory: function () {
                    return new t(Dt(E_), Dt(Gs), Dt(kd), Dt(G_))
                }, token: t, providedIn: "root"
            }), t
        }(), X_ = 0, J_ = function () {
            function t(t, e, n, r, i, o, a, s, l, u) {
                this.scrollStrategies = t, this._overlayContainer = e, this._componentFactoryResolver = n, this._positionBuilder = r, this._keyboardDispatcher = i, this._injector = o, this._ngZone = a, this._document = s, this._directionality = l, this._location = u
            }

            return t.prototype.create = function (t) {
                var e = this._createHostElement(), n = this._createPaneElement(e), r = this._createPortalOutlet(n),
                    i = new j_(t);
                return i.direction = i.direction || this._directionality.value, new W_(r, e, n, i, this._ngZone, this._keyboardDispatcher, this._document, this._location)
            }, t.prototype.position = function () {
                return this._positionBuilder
            }, t.prototype._createPaneElement = function (t) {
                var e = this._document.createElement("div");
                return e.id = "cdk-overlay-" + X_++, e.classList.add("cdk-overlay-pane"), t.appendChild(e), e
            }, t.prototype._createHostElement = function () {
                var t = this._document.createElement("div");
                return this._overlayContainer.getContainerElement().appendChild(t), t
            }, t.prototype._createPortalOutlet = function (t) {
                return this._appRef || (this._appRef = this._injector.get(wo)), new P_(t, this._componentFactoryResolver, this._appRef, this._injector)
            }, t
        }(), tb = new Mt("cdk-connected-overlay-scroll-strategy");

        function eb(t) {
            return function () {
                return t.scrollStrategies.reposition()
            }
        }

        var nb = function () {
            return function () {
            }
        }(), rb = function () {
            function t(t, e) {
                this.delay = t, this.scheduler = e
            }

            return t.prototype.call = function (t, e) {
                return e.subscribe(new ib(t, this.delay, this.scheduler))
            }, t
        }(), ib = function (t) {
            function e(e, n, r) {
                var i = t.call(this, e) || this;
                return i.delay = n, i.scheduler = r, i.queue = [], i.active = !1, i.errored = !1, i
            }

            return i(e, t), e.dispatch = function (t) {
                for (var e = t.source, n = e.queue, r = t.scheduler, i = t.destination; n.length > 0 && n[0].time - r.now() <= 0;) n.shift().notification.observe(i);
                if (n.length > 0) {
                    var o = Math.max(0, n[0].time - r.now());
                    this.schedule(t, o)
                } else this.unsubscribe(), e.active = !1
            }, e.prototype._schedule = function (t) {
                this.active = !0, this.destination.add(t.schedule(e.dispatch, this.delay, {
                    source: this,
                    destination: this.destination,
                    scheduler: t
                }))
            }, e.prototype.scheduleNotification = function (t) {
                if (!0 !== this.errored) {
                    var e = this.scheduler, n = new ob(e.now() + this.delay, t);
                    this.queue.push(n), !1 === this.active && this._schedule(e)
                }
            }, e.prototype._next = function (t) {
                this.scheduleNotification(w_.createNext(t))
            }, e.prototype._error = function (t) {
                this.errored = !0, this.queue = [], this.destination.error(t), this.unsubscribe()
            }, e.prototype._complete = function () {
                this.scheduleNotification(w_.createComplete()), this.unsubscribe()
            }, e
        }(S), ob = function () {
            return function (t, e) {
                this.time = t, this.notification = e
            }
        }(), ab = 0, sb = function () {
            return function (t, e) {
                this.source = t, this.option = e
            }
        }(), lb = Gd(function () {
            return function () {
            }
        }()), ub = new Mt("mat-autocomplete-default-options", {
            providedIn: "root", factory: function () {
                return {autoActiveFirstOption: !1}
            }
        }), cb = function (t) {
            function e(e, n, r) {
                var i = t.call(this) || this;
                return i._changeDetectorRef = e, i._elementRef = n, i.showPanel = !1, i._isOpen = !1, i.displayWith = null, i.optionSelected = new Pi, i.opened = new Pi, i.closed = new Pi, i._classList = {}, i.id = "mat-autocomplete-" + ab++, i._autoActiveFirstOption = !!r.autoActiveFirstOption, i
            }

            return i(e, t), Object.defineProperty(e.prototype, "isOpen", {
                get: function () {
                    return this._isOpen && this.showPanel
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "autoActiveFirstOption", {
                get: function () {
                    return this._autoActiveFirstOption
                }, set: function (t) {
                    this._autoActiveFirstOption = wd(t)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "classList", {
                set: function (t) {
                    this._classList = t && t.length ? t.split(" ").reduce(function (t, e) {
                        return t[e.trim()] = !0, t
                    }, {}) : {}, this._setVisibilityClasses(this._classList), this._elementRef.nativeElement.className = ""
                }, enumerable: !0, configurable: !0
            }), e.prototype.ngAfterContentInit = function () {
                this._keyManager = new Ld(this.options).withWrap(), this._setVisibility()
            }, e.prototype._setScrollTop = function (t) {
                this.panel && (this.panel.nativeElement.scrollTop = t)
            }, e.prototype._getScrollTop = function () {
                return this.panel ? this.panel.nativeElement.scrollTop : 0
            }, e.prototype._setVisibility = function () {
                this.showPanel = !!this.options.length, this._setVisibilityClasses(this._classList), this._changeDetectorRef.markForCheck()
            }, e.prototype._emitSelectEvent = function (t) {
                var e = new sb(this, t);
                this.optionSelected.emit(e)
            }, e.prototype._setVisibilityClasses = function (t) {
                t["mat-autocomplete-visible"] = this.showPanel, t["mat-autocomplete-hidden"] = !this.showPanel
            }, e
        }(lb), hb = new Mt("mat-autocomplete-scroll-strategy");

        function pb(t) {
            return function () {
                return t.scrollStrategies.reposition()
            }
        }

        var fb = function () {
            function t(t, e, n, r, i, o, a, s, l, u) {
                var c = this;
                this._element = t, this._overlay = e, this._viewContainerRef = n, this._zone = r, this._changeDetectorRef = i, this._dir = a, this._formField = s, this._document = l, this._viewportRuler = u, this._componentDestroyed = !1, this._autocompleteDisabled = !1, this._manuallyFloatingLabel = !1, this._viewportSubscription = y.EMPTY, this._canOpenOnNextFocus = !0, this._closeKeyEventStream = new B, this._windowBlurHandler = function () {
                    c._canOpenOnNextFocus = c._document.activeElement !== c._element.nativeElement || c.panelOpen
                }, this._onChange = function () {
                }, this._onTouched = function () {
                }, this.position = "auto", this.autocompleteAttribute = "off", this._overlayAttached = !1, this.optionSelections = al(function () {
                    return c.autocomplete && c.autocomplete.options ? at.apply(void 0, c.autocomplete.options.map(function (t) {
                        return t.onSelectionChange
                    })) : c._zone.onStable.asObservable().pipe(Ol(1), Dl(function () {
                        return c.optionSelections
                    }))
                }), "undefined" != typeof window && r.runOutsideAngular(function () {
                    window.addEventListener("blur", c._windowBlurHandler)
                }), this._scrollStrategy = o
            }

            return Object.defineProperty(t.prototype, "autocompleteDisabled", {
                get: function () {
                    return this._autocompleteDisabled
                }, set: function (t) {
                    this._autocompleteDisabled = wd(t)
                }, enumerable: !0, configurable: !0
            }), t.prototype.ngOnChanges = function (t) {
                t.position && this._positionStrategy && (this._setStrategyPositions(this._positionStrategy), this.panelOpen && this._overlayRef.updatePosition())
            }, t.prototype.ngOnDestroy = function () {
                "undefined" != typeof window && window.removeEventListener("blur", this._windowBlurHandler), this._viewportSubscription.unsubscribe(), this._componentDestroyed = !0, this._destroyPanel(), this._closeKeyEventStream.complete()
            }, Object.defineProperty(t.prototype, "panelOpen", {
                get: function () {
                    return this._overlayAttached && this.autocomplete.showPanel
                }, enumerable: !0, configurable: !0
            }), t.prototype.openPanel = function () {
                this._attachOverlay(), this._floatLabel()
            }, t.prototype.closePanel = function () {
                this._resetLabel(), this._overlayAttached && (this.panelOpen && this.autocomplete.closed.emit(), this.autocomplete._isOpen = this._overlayAttached = !1, this._overlayRef && this._overlayRef.hasAttached() && (this._overlayRef.detach(), this._closingActionsSubscription.unsubscribe()), this._componentDestroyed || this._changeDetectorRef.detectChanges())
            }, t.prototype.updatePosition = function () {
                this._overlayAttached && this._overlayRef.updatePosition()
            }, Object.defineProperty(t.prototype, "panelClosingActions", {
                get: function () {
                    var t = this;
                    return at(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(ll(function () {
                        return t._overlayAttached
                    })), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe(ll(function () {
                        return t._overlayAttached
                    })) : Js()).pipe(Y(function (t) {
                        return t instanceof lm ? t : null
                    }))
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "activeOption", {
                get: function () {
                    return this.autocomplete && this.autocomplete._keyManager ? this.autocomplete._keyManager.activeItem : null
                }, enumerable: !0, configurable: !0
            }), t.prototype._getOutsideClickStream = function () {
                var t = this;
                return at(fm(this._document, "click"), fm(this._document, "touchend")).pipe(ll(function (e) {
                    var n = e.target, r = t._formField ? t._formField._elementRef.nativeElement : null;
                    return t._overlayAttached && n !== t._element.nativeElement && (!r || !r.contains(n)) && !!t._overlayRef && !t._overlayRef.overlayElement.contains(n)
                }))
            }, t.prototype.writeValue = function (t) {
                var e = this;
                Promise.resolve(null).then(function () {
                    return e._setTriggerValue(t)
                })
            }, t.prototype.registerOnChange = function (t) {
                this._onChange = t
            }, t.prototype.registerOnTouched = function (t) {
                this._onTouched = t
            }, t.prototype.setDisabledState = function (t) {
                this._element.nativeElement.disabled = t
            }, t.prototype._handleKeydown = function (t) {
                var e = t.keyCode;
                if (27 === e && t.preventDefault(), this.activeOption && 13 === e && this.panelOpen) this.activeOption._selectViaInteraction(), this._resetActiveItem(), t.preventDefault(); else if (this.autocomplete) {
                    var n = this.autocomplete._keyManager.activeItem, r = 38 === e || 40 === e;
                    this.panelOpen || 9 === e ? this.autocomplete._keyManager.onKeydown(t) : r && this._canOpen() && this.openPanel(), (r || this.autocomplete._keyManager.activeItem !== n) && this._scrollToOption()
                }
            }, t.prototype._handleInput = function (t) {
                var e = t.target, n = e.value;
                "number" === e.type && (n = "" == n ? null : parseFloat(n)), this._previousValue !== n && (this._previousValue = n, this._onChange(n), this._canOpen() && this._document.activeElement === t.target && this.openPanel())
            }, t.prototype._handleFocus = function () {
                this._canOpenOnNextFocus ? this._canOpen() && (this._previousValue = this._element.nativeElement.value, this._attachOverlay(), this._floatLabel(!0)) : this._canOpenOnNextFocus = !0
            }, t.prototype._floatLabel = function (t) {
                void 0 === t && (t = !1), this._formField && "auto" === this._formField.floatLabel && (t ? this._formField._animateAndLockLabel() : this._formField.floatLabel = "always", this._manuallyFloatingLabel = !0)
            }, t.prototype._resetLabel = function () {
                this._manuallyFloatingLabel && (this._formField.floatLabel = "auto", this._manuallyFloatingLabel = !1)
            }, t.prototype._scrollToOption = function () {
                var t, e, n = this.autocomplete._keyManager.activeItemIndex || 0,
                    r = (e = 48 * (n + function (t, e, n) {
                        if (n.length) {
                            for (var r = e.toArray(), i = n.toArray(), o = 0, a = 0; a < t + 1; a++) r[a].group && r[a].group === i[o] && o++;
                            return o
                        }
                        return 0
                    }(n, this.autocomplete.options, this.autocomplete.optionGroups))) < (t = this.autocomplete._getScrollTop()) ? e : e + 48 > t + 256 ? Math.max(0, e - 256 + 48) : t;
                this.autocomplete._setScrollTop(r)
            }, t.prototype._subscribeToClosingActions = function () {
                var t = this;
                return at(this._zone.onStable.asObservable().pipe(Ol(1)), this.autocomplete.options.changes.pipe(yl(function () {
                    return t._positionStrategy.reapplyLastPosition()
                }), function (t, e) {
                    void 0 === e && (e = Bd);
                    var n = 0 instanceof Date && !isNaN(0) ? 0 - e.now() : Math.abs(0);
                    return function (t) {
                        return t.lift(new rb(n, e))
                    }
                }())).pipe(Dl(function () {
                    var e = t.panelOpen;
                    return t._resetActiveItem(), t.autocomplete._setVisibility(), t.panelOpen && (t._overlayRef.updatePosition(), e !== t.panelOpen && t.autocomplete.opened.emit()), t.panelClosingActions
                }), Ol(1)).subscribe(function (e) {
                    return t._setValueAndClose(e)
                })
            }, t.prototype._destroyPanel = function () {
                this._overlayRef && (this.closePanel(), this._overlayRef.dispose(), this._overlayRef = null)
            }, t.prototype._setTriggerValue = function (t) {
                var e = this.autocomplete && this.autocomplete.displayWith ? this.autocomplete.displayWith(t) : t,
                    n = null != e ? e : "";
                this._formField ? this._formField._control.value = n : this._element.nativeElement.value = n, this._previousValue = n
            }, t.prototype._setValueAndClose = function (t) {
                t && t.source && (this._clearPreviousSelectedOption(t.source), this._setTriggerValue(t.source.value), this._onChange(t.source.value), this._element.nativeElement.focus(), this.autocomplete._emitSelectEvent(t.source)), this.closePanel()
            }, t.prototype._clearPreviousSelectedOption = function (t) {
                this.autocomplete.options.forEach(function (e) {
                    e != t && e.selected && e.deselect()
                })
            }, t.prototype._attachOverlay = function () {
                var t = this;
                if (!this.autocomplete) throw Error("Attempting to open an undefined instance of `mat-autocomplete`. Make sure that the id passed to the `matAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.");
                var e = this._overlayRef;
                e ? (this._positionStrategy.setOrigin(this._getConnectedElement()), e.updateSize({width: this._getPanelWidth()})) : (this._portal = new O_(this.autocomplete.template, this._viewContainerRef), e = this._overlay.create(this._getOverlayConfig()), this._overlayRef = e, e.keydownEvents().subscribe(function (e) {
                    (27 === e.keyCode || 38 === e.keyCode && e.altKey) && (t._resetActiveItem(), t._closeKeyEventStream.next())
                }), this._viewportRuler && (this._viewportSubscription = this._viewportRuler.change().subscribe(function () {
                    t.panelOpen && e && e.updateSize({width: t._getPanelWidth()})
                }))), e && !e.hasAttached() && (e.attach(this._portal), this._closingActionsSubscription = this._subscribeToClosingActions());
                var n = this.panelOpen;
                this.autocomplete._setVisibility(), this.autocomplete._isOpen = this._overlayAttached = !0, this.panelOpen && n !== this.panelOpen && this.autocomplete.opened.emit()
            }, t.prototype._getOverlayConfig = function () {
                return new j_({
                    positionStrategy: this._getOverlayPosition(),
                    scrollStrategy: this._scrollStrategy(),
                    width: this._getPanelWidth(),
                    direction: this._dir
                })
            }, t.prototype._getOverlayPosition = function () {
                var t = this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1);
                return this._setStrategyPositions(t), this._positionStrategy = t, t
            }, t.prototype._setStrategyPositions = function (t) {
                var e = {originX: "start", originY: "bottom", overlayX: "start", overlayY: "top"}, n = {
                    originX: "start",
                    originY: "top",
                    overlayX: "start",
                    overlayY: "bottom",
                    panelClass: "mat-autocomplete-panel-above"
                };
                t.withPositions("above" === this.position ? [n] : "below" === this.position ? [e] : [e, n])
            }, t.prototype._getConnectedElement = function () {
                return this.connectedTo ? this.connectedTo.elementRef : this._formField ? this._formField.getConnectedOverlayOrigin() : this._element
            }, t.prototype._getPanelWidth = function () {
                return this.autocomplete.panelWidth || this._getHostWidth()
            }, t.prototype._getHostWidth = function () {
                return this._getConnectedElement().nativeElement.getBoundingClientRect().width
            }, t.prototype._resetActiveItem = function () {
                this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption ? 0 : -1)
            }, t.prototype._canOpen = function () {
                var t = this._element.nativeElement;
                return !t.readOnly && !t.disabled && !this._autocompleteDisabled
            }, t
        }(), db = function () {
            return function () {
            }
        }(), mb = tr({
            encapsulation: 2,
            styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}@media (-ms-high-contrast:active){.mat-autocomplete-panel{outline:solid 1px}}"],
            data: {}
        });

        function yb(t) {
            return ra(0, [(t()(), zo(0, 0, [[2, 0], ["panel", 1]], null, 3, "div", [["class", "mat-autocomplete-panel"], ["role", "listbox"]], [[8, "id", 0]], null, null, null, null)), fi(512, null, Os, Ps, [An, kn, ln, fn]), hi(2, 278528, null, 0, Ts, [Os], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), $o(null, 0)], function (t, e) {
                t(e, 2, 0, "mat-autocomplete-panel", e.component._classList)
            }, function (t, e) {
                t(e, 0, 0, e.component.id)
            })
        }

        function gb(t) {
            return ra(2, [Wo(402653184, 1, {template: 0}), Wo(671088640, 2, {panel: 0}), (t()(), Lo(0, [[1, 2]], null, 0, null, yb))], null, null)
        }

        var vb = function () {
            function t(t) {
                this.http = t
            }

            return t.prototype.searchByCityConnection = function (t) {
                console.log(this.formByCity.controls.city.value), new kv({
                    "Content-Type": "application/json",
                    responseType: "json"
                })
            }, t.ngInjectableDef = Ct({
                factory: function () {
                    return new t(Dt(zv))
                }, token: t, providedIn: "root"
            }), t
        }(), _b = function () {
            function t(t, e) {
                this.http = t, this.fb = e, this.submitCompany = new Pi, this.notFound = !1, this.cityarr = ["Baabe", "Babenhausen", "Bacharach", "Backnang", "Bad Aibling", "Bad Alexandersbad", "Bad Arolsen", "Bad Belzig", "Bad Bentheim", "Bad Bergzabern", "Bad Berleburg", "Bad Berneck im Fichtelgebirge", "Bad Bertrich", "Bad Bevensen", "Bad Birnbach", "Bad Blankenburg", "Bad Boll", "Bad Bramstedt", "Bad Breisig", "Bad Br\xfcckenau", "Bad Buchau", "Bad Camberg", "Bad Doberan", "Bad Driburg", "Bad D\xfcben", "Bad D\xfcrkheim", "Bad D\xfcrrheim", "Bad Eilsen", "Bad Ems", "Bad Emstal", "Bad Endbach", "Bad Endorf", "Bad Essen", "Bad Fallingbostel", "Bad Feilnbach", "Bad Frankenhausen/Kyffh\xe4user", "Bad Friedrichshall", "Bad F\xfcssing", "Bad Gandersheim", "Bad Harzburg", "Bad Heilbrunn", "Bad Herrenalb", "Bad Hersfeld", "Bad Hindelang", "Bad Homburg", "Bad Honnef", "Bad H\xf6nningen", "Bad Iburg", "Bad Karlshafen", "Bad Kissingen", "Bad Kohlgrub", "Bad K\xf6nig", "Bad K\xf6tzting", "Bad Kreuznach", "Bad Laasphe", "Bad Laer", "Bad Langensalza", "Bad Lausick", "Bad Lauterberg im Harz", "Bad Liebenwerda", "Bad Liebenzell", "Bad Lippspringe", "Bad Marienberg (Westerwald)", "Bad Mergentheim", "Bad M\xfcnder am Deister", "Bad M\xfcnstereifel", "Bad Muskau", "Bad Nauheim", "Bad Nenndorf", "Bad Neuenahr-Ahrweiler", "Bad Oeynhausen", "Bad Oldesloe", "Bad Orb", "Bad Pyrmont", "Bad Rappenau", "Bad Reichenhall", "Bad Sachsa", "Bad S\xe4ckingen", "Bad Salzdetfurth", "Bad Salzuflen", "Bad Salzungen", "Bad Sassendorf", "Bad Saulgau", "Bad Sch\xf6nborn", "Bad Schussenried", "Bad Schwalbach", "Bad Schwartau", "Bad Segeberg", "Bad Soden am Taunus", "Bad Soden-Salm\xfcnster", "Bad Sooden-Allendorf", "Bad Staffelstein", "Bad T\xf6lz", "Bad Urach", "Bad Vilbel", "Bad Waldsee", "Bad Wiessee", "Bad Wildbad", "Bad Wildungen", "Bad Wimpfen", "Bad Windsheim", "Bad W\xf6rishofen", "Bad Wurzach", "Bad Zwischenahn", "Baden-Baden", "Badenweiler", "Baesweiler", "Bahlingen am Kaiserstuhl", "Baierbrunn", "Baiersbronn", "Baiersdorf", "Balingen", "Balve", "Balzheim", "Bamberg", "Bammental", "Bardowick", "Barendorf", "Bargteheide", "Barleben", "Barmstedt", "Barntrup", "Bar\xdfel", "Barsinghausen", "Barum", "Bassum", "Battenberg (Eder)", "Baumholder", "Baunatal", "Baustert", "Bautzen", "Bayerbach", "Bayreuth", "Bayrischzell", "Bebra", "Beckingen", "Beckum", "Bedburg", "Bedburg-Hau", "Beelen", "Beerfelden", "Beeskow", "Beilngries", "Bellenberg", "Bellheim", "Belm", "Bempflingen", "Benediktbeuern", "Benningen am Neckar", "Bensheim", "Beratzhausen", "Berching", "Berchtesgaden", "Berghausen", "Bergheim", "Bergholz", "Bergisch Gladbach", "Bergkamen", "Bergkirchen", "Berglen", "Berka vor dem Hainich", "Berkatal", "Berka/Werra", "Berkheim", "Berlin", "Berlingerode", "Bermatingen", "Bermbach", "Bernau bei Berlin", "Bernburg (Saale)", "Berne", "Berngau", "Bernhardswald", "Bernkastel-Kues", "Bersenbr\xfcck", "Beselich", "Besigheim", "Bessenbach", "Bestensee", "Bestwig", "Betzenstein", "Beverungen", "Bexbach", "Biberach", "Bibertal", "Biblis", "Biburg", "Bickenbach", "Biebergem\xfcnd", "Biebertal", "Biebesheim am Rhein", "Biedenkopf", "Biederitz", "Bielefeld", "Bienenb\xfcttel", "Bietigheim-Bissingen", "Billerbeck", "Billigheim", "Bindlach", "Bingen am Rhein", "Binzen", "Birenbach", "Birkenau", "Birkenfeld", "Birkenwerder", "Birkweiler", "Birnbach", "Birstein", "Bischofsheim", "Bischofswerda", "Bisingen", "Bispingen", "Bissendorf", "Bissingen", "Bitburg", "Bitterfeld-Wolfen", "Blaichach", "Blankenbach", "Blankenburg (Harz)", "Blankenheim", "Blaubeuren", "Blaufelden", "Blaustein", "Bleicherode", "Blieskastel", "Blomberg", "Blumberg", "Blumenthal", "Bobenheim am Berg", "Bobenheim-Roxheim", "B\xf6blingen", "B\xf6chingen", "Bocholt", "Bochum", "Bockhorn", "Bodelshausen", "Bodenheim", "Bodenmais", "Bodenwerder", "Bodenw\xf6hr", "Bodman-Ludwigshafen", "Bogen", "B\xf6hmenkirch", "Bokholt-Hanredder", "Bondorf", "B\xf6nen", "Bonn", "B\xf6nnigheim", "B\xf6nningstedt", "Bopfingen", "Boppard", "Borchen", "Bordesholm", "Borgentreich", "B\xf6rgerende", "Borgholzhausen", "Borken", "Borkum", "Borna", "Bornheim", "B\xf6rnichen", "Borod", "B\xf6rrstadt", "Bosau", "B\xf6sel", "B\xf6singen", "Bottrop", "B\xf6tzingen", "Bovenden", "Boxberg/Oberlausitz", "Braak", "Brachbach", "Brackel", "Brackenheim", "Brake (Unterweser)", "Brakel", "Bramsche", "Brand", "Brandenburg an der Havel", "Braubach", "Brauneberg", "Braunfels", "Braunlage", "Br\xe4unlingen", "Braunschweig", "Breckerfeld", "Bredstedt", "Breisach am Rhein", "Breitbrunn", "Breitscheid", "Bremen", "Bremerhaven", "Bremerv\xf6rde", "Brensbach", "Bretten", "Bretzfeld", "Breuberg", "Brieselang", "Brilon", "Brome", "Bromskirchen", "Bruchertseifen", "Bruchhausen-Vilsen", "Bruchk\xf6bel", "Bruchsal", "Bruchweiler-B\xe4renbach", "Br\xfccken (Pfalz", ")Bruckm\xfchl", "Br\xfcggen", "Br\xfchl", "Brunsb\xfcttel", "Bubenreuth", "Bucha", "B\xfcchel", "Buchen (Odenwald)", "Buchenbach", "Buchhofen", "Buchholz in der Nordheide", "Buchloe", "B\xfcckeburg", "B\xfcdelsdorf", "Budenheim", "B\xfcdingen", "B\xfchl", "B\xfchlertal", "B\xfcnde", "Burbach", "Burg", "Burgau", "Burgberg im Allg\xe4u", "Burgdorf", "Burgebrach", "B\xfcrgel", "Burgen", "Burghausen", "Burgkunstadt", "Burglengenfeld", "Burgoberbach", "Burgschwalbach", "Burgst\xe4dt", "Burgthann", "Burgwald", "Burgwedel", "Burladingen", "Burow", "Burscheid", "B\xfcrstadt", "Burtenbach", "Buseck", "B\xfcsum", "Butjadingen", "B\xfcttelborn", "Buttenheim", "Buttst\xe4dt", "Butzbach", "B\xfctzow", "Aachen", "Aalen", "Aarbergen", "Abenberg", "Abensberg", "Abtsgm\xfcnd", "Achern", "Achim", "Adelebsen", "Adelsdorf", "Adenau", "Adendorf", "Adlkofen", "Adorf", "Aerzen", "Ahaus", "Ahnsen", "Ahrbr\xfcck", "Ahrensburg", "Ahrensfelde", "Aichach", "Aichtal", "Aidlingen", "Ainring", "Aiterhofen", "Albbruck", "Albershausen", "Albig", "Albstadt", "Aldenhoven", "Aldingen", "Alfdorf", "Alfeld (Leine)", "AlfterAllendorf", "Allensbach", "Allersberg", "Alling", "Allmersbach im Tal", "Almdorf", "Alpen", "Alpirsbach", "Alsbach-H\xe4hnlein", "Alsdorf", "Alsenz", "Alsfeld", "Altbach", "Altdorf", "Altena", "Altenahr", "Altenberg", "Altenberge", "Altenbuch", "Altenburg", "Altendiez", "Altenkirchen (Westerwald)", "Altenkunstadt", "Altenstadt", "Altenstadt an der Waldnaab", "Altensteig", "Althegnenberg", "Althengstett", "Alth\xfctte", "Altlu\xdfheim", "Altmannstein", "Alt\xf6tting", "Altrip", "Alzenau", "Alzey", "Amberg", "Amerang", "Ammerbuch", "Am\xf6neburg", "Amorbach", "Ampfing", "Andechs", "Andernach", "Angelbachtal", "Ankum", "Annaberg-Buchholz", "Annweiler am Trifels", "Ansbach", "Apen", "Apensen", "Apolda", "Appenweier", "Arnsberg", "Arnstadt", "Arnstorf", "Artern/Unstrut", "Arzfeld", "Asbach", "Aschaffenburg", "Ascheberg", "Aschersleben", "Aschheim", "A\xdflar", "Aspach", "Asperg", "Attendorn", "Au", "Aue", "Auerbach", "Auetal", "Augsburg", "Auhausen", "Aulendorf", "Aum\xfchle", "Aurich", "Aystetten"]
            }

            return t.prototype.searchByCity = function (t) {
                var e = this;
                if (this.formByCity.valid) {
                    var n = new kv({"Content-Type": "application/json", responseType: "json"});
                    return this.http.get("http://127.0.0.1:8081/get1000/" + this.formByCity.controls.city.value, {headers: n}).pipe(r_(1)).subscribe(function (t) {
                        e.companies = t
                    }, function (t) {
                        e.notFound = !0
                    })
                }
            }, t.prototype.createForm = function () {
                this.formByCity = this.fb.group({city: [{value: null}, [pf.required, pf.pattern("^[$_a-zA-Z]+[$_w \\w]*$")]]})
            }, t.prototype.onSubmit = function (t) {
                this.submitCompany.emit(this.formByCity.controls.city.value)
            }, t.prototype.ngOnInit = function () {
                var t = this;
                this.createForm(), this.filteredOptions = this.formByCity.controls.city.valueChanges.pipe(Vl(""), Y(function (e) {
                    return t._filter(e)
                }))
            }, t.prototype._filter = function (t) {
                var e = t.toLowerCase();
                return this.cityarr.filter(function (t) {
                    return t.toLowerCase().includes(e)
                })
            }, t.prototype.checkedPresent = function (t) {
                return !this.cityarr.includes(t)
            }, t
        }(), bb = tr({
            encapsulation: 0,
            styles: [["body[_ngcontent-%COMP%]{display:flex;min-height:auto;flex-direction:column}mat-form-field[_ngcontent-%COMP%]{display:flex;left:420px}#batonsSubmit[_ngcontent-%COMP%]{position:relative;left:430px}u[_ngcontent-%COMP%]{position:relative;left:40%}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}#errore[_ngcontent-%COMP%]{position:absolute;left:20%;height:400px;width:700px}"]],
            data: {}
        });

        function wb(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 2, "mat-option", [["class", "mat-option"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (t, e, n) {
                var r = !0;
                return "click" === e && (r = !1 !== Xr(t, 1)._selectViaInteraction() && r), "keydown" === e && (r = !1 !== Xr(t, 1)._handleKeydown(n) && r), r
            }, g_, m_)), hi(1, 8568832, [[10, 4]], 0, cm, [ln, On, [2, um], [2, am]], {value: [0, "value"]}, null), (t()(), ta(2, 0, [" ", " "]))], function (t, e) {
                t(e, 1, 0, e.context.$implicit)
            }, function (t, e) {
                t(e, 0, 0, Xr(e, 1)._getTabIndex(), Xr(e, 1).selected, Xr(e, 1).multiple, Xr(e, 1).active, Xr(e, 1).id, Xr(e, 1)._getAriaSelected(), Xr(e, 1).disabled.toString(), Xr(e, 1).disabled), t(e, 2, 0, e.context.$implicit)
            })
        }

        function Cb(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 12, "tr", [], null, null, null, null, null)), (t()(), zo(1, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), ta(2, null, ["", ""])), (t()(), zo(3, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), ta(4, null, ["", ""])), (t()(), zo(5, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), ta(6, null, ["", ""])), (t()(), zo(7, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), ta(8, null, ["", ""])), (t()(), zo(9, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), ta(10, null, ["", ""])), (t()(), zo(11, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), ta(12, null, ["", ""]))], null, function (t, e) {
                t(e, 2, 0, e.context.$implicit.id), t(e, 4, 0, e.context.$implicit.name), t(e, 6, 0, e.context.$implicit.telephone), t(e, 8, 0, e.context.$implicit.keywordsIndustry), t(e, 10, 0, e.context.$implicit.googleUri + "\n" + e.context.$implicit.url), t(e, 12, 0, e.context.$implicit.emails)
            })
        }

        function Sb(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 17, "table", [["class", "table"]], null, null, null, null, null)), (t()(), zo(1, 0, null, null, 13, "thead", [["class", "table table-hover"]], null, null, null, null, null)), (t()(), zo(2, 0, null, null, 12, "tr", [], null, null, null, null, null)), (t()(), zo(3, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (t()(), ta(-1, null, ["Id"])), (t()(), zo(5, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (t()(), ta(-1, null, ["Name Company"])), (t()(), zo(7, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (t()(), ta(-1, null, ["Phone"])), (t()(), zo(9, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (t()(), ta(-1, null, ["Industry"])), (t()(), zo(11, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (t()(), ta(-1, null, ["Site"])), (t()(), zo(13, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (t()(), ta(-1, null, ["Email"])), (t()(), zo(15, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (t()(), Lo(16777216, null, null, 1, null, Cb)), hi(17, 278528, null, 0, Rs, [Bn, Nn, An], {ngForOf: [0, "ngForOf"]}, null)], function (t, e) {
                t(e, 17, 0, e.component.companies)
            }, null)
        }

        function Eb(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), zo(1, 0, null, null, 45, "body", [], null, null, null, null, null)), (t()(), zo(2, 0, null, null, 40, "form", [["class", "form-inline md-form mr-auto mb-4"], ["novalidate", ""]], [[8, "hidden", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (t, e, n) {
                var r = !0;
                return "submit" === e && (r = !1 !== Xr(t, 4).onSubmit(n) && r), "reset" === e && (r = !1 !== Xr(t, 4).onReset() && r), r
            }, null, null)), hi(3, 16384, null, 0, td, [], null, null), hi(4, 540672, null, 0, nd, [[8, null], [8, null]], {form: [0, "form"]}, null), fi(2048, null, rf, null, [nd]), hi(6, 16384, null, 0, uf, [[4, rf]], null, null), (t()(), zo(7, 0, null, null, 30, "mat-form-field", [["class", "example-full-width mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, lv, Yg)), hi(8, 7520256, null, 9, Cm, [ln, On, [2, pm], [2, Pm], [2, wm], kd, ro, [2, Qg]], null, null), Wo(603979776, 1, {_controlNonStatic: 0}), Wo(335544320, 2, {_controlStatic: 0}), Wo(603979776, 3, {_labelChildNonStatic: 0}), Wo(335544320, 4, {_labelChildStatic: 0}), Wo(603979776, 5, {_placeholderChild: 0}), Wo(603979776, 6, {_errorChildren: 1}), Wo(603979776, 7, {_hintChildren: 1}), Wo(603979776, 8, {_prefixChildren: 1}), Wo(603979776, 9, {_suffixChildren: 1}), (t()(), zo(18, 16777216, null, 1, 11, "input", [["aria-label", "Search"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "city"], ["matInput", ""], ["placeholder", "Search by City"], ["type", "text"]], [[1, "autocomplete", 0], [1, "role", 0], [1, "aria-autocomplete", 0], [1, "aria-activedescendant", 0], [1, "aria-expanded", 0], [1, "aria-owns", 0], [1, "aria-haspopup", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focusin"], [null, "keydown"], [null, "submit"], [null, "reset"], [null, "focus"]], function (t, e, n) {
                var r = !0, i = t.component;
                return "input" === e && (r = !1 !== Xr(t, 19)._handleInput(n.target.value) && r), "blur" === e && (r = !1 !== Xr(t, 19).onTouched() && r), "compositionstart" === e && (r = !1 !== Xr(t, 19)._compositionStart() && r), "compositionend" === e && (r = !1 !== Xr(t, 19)._compositionEnd(n.target.value) && r), "focusin" === e && (r = !1 !== Xr(t, 20)._handleFocus() && r), "blur" === e && (r = !1 !== Xr(t, 20)._onTouched() && r), "input" === e && (r = !1 !== Xr(t, 20)._handleInput(n) && r), "keydown" === e && (r = !1 !== Xr(t, 20)._handleKeydown(n) && r), "submit" === e && (r = !1 !== Xr(t, 25).onSubmit(n) && r), "reset" === e && (r = !1 !== Xr(t, 25).onReset() && r), "blur" === e && (r = !1 !== Xr(t, 28)._focusChanged(!1) && r), "focus" === e && (r = !1 !== Xr(t, 28)._focusChanged(!0) && r), "input" === e && (r = !1 !== Xr(t, 28)._onInput() && r), "ngModelChange" === e && (r = !1 !== (i.city = n) && r), r
            }, null, null)), hi(19, 16384, null, 0, ef, [fn, ln, [2, tf]], null, null), hi(20, 671744, null, 0, fb, [ln, J_, Bn, ro, On, hb, [2, Pm], [2, Cm], [2, Gs], E_], {autocomplete: [0, "autocomplete"]}, null), fi(1024, null, Xp, function (t, e) {
                return [t, e]
            }, [ef, fb]), hi(22, 671744, null, 0, ad, [[3, rf], [8, null], [8, null], [6, Xp], [2, ed]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {update: "ngModelChange"}), fi(2048, null, af, null, [ad]), hi(24, 16384, null, 0, lf, [[4, af]], null, null), hi(25, 540672, null, 0, nd, [[8, null], [8, null]], {form: [0, "form"]}, null), fi(2048, null, rf, null, [nd]), hi(27, 16384, null, 0, uf, [[4, rf]], null, null), hi(28, 999424, null, 0, _v, [ln, kd, [6, af], [2, Kf], [2, nd], Kd, [8, null], mv, ro], {
                placeholder: [0, "placeholder"],
                type: [1, "type"]
            }, null), fi(2048, [[1, 4], [2, 4]], gm, null, [_v]), (t()(), zo(30, 0, null, 1, 7, "mat-autocomplete", [["class", "mat-autocomplete"]], null, null, null, gb, mb)), fi(6144, null, um, null, [cb]), hi(32, 1097728, [["auto", 4]], 2, cb, [On, ln, ub], null, null), Wo(603979776, 10, {options: 1}), Wo(603979776, 11, {optionGroups: 1}), (t()(), Lo(16777216, null, 0, 2, null, wb)), hi(36, 278528, null, 0, Rs, [Bn, Nn, An], {ngForOf: [0, "ngForOf"]}, null), pi(131072, Hs, [On]), (t()(), zo(38, 0, null, null, 1, "button", [["class", "btn btn-outline-success"], ["id", "batonsSubmit"]], [[8, "disabled", 0]], [[null, "click"]], function (t, e, n) {
                var r = !0;
                return "click" === e && (r = !1 !== t.component.searchByCity(n) && r), r
            }, null, null)), (t()(), ta(-1, null, ["Search By City "])), (t()(), zo(40, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), Lo(16777216, null, null, 1, null, Sb)), hi(42, 16384, null, 0, Ds, [Bn, Nn], {ngIf: [0, "ngIf"]}, null), (t()(), zo(43, 0, null, null, 1, "app-app-alertvalitation-input", [["errorMessage", "Is input invalid"]], null, null, null, Ev, Cv)), hi(44, 114688, null, 0, wv, [], {
                control: [0, "control"],
                errorMessage: [1, "errorMessage"]
            }, null), (t()(), zo(45, 0, null, null, 1, "div", [["class", "alert"], ["id", "allertNotFound"]], [[8, "hidden", 0]], null, null, null, null)), (t()(), zo(46, 0, null, null, 0, "img", [["id", "errore"], ["src", "https://cdn.windowsreport.com/wp-content/uploads/2018/05/Error-message.jpg"]], null, null, null, null, null))], function (t, e) {
                var n = e.component;
                t(e, 4, 0, n.formByCity), t(e, 20, 0, Xr(e, 32)), t(e, 22, 0, "city", n.city), t(e, 25, 0, n.formByCity), t(e, 28, 0, "Search by City", "text"), t(e, 36, 0, $n(e, 36, 0, Xr(e, 37).transform(n.filteredOptions))), t(e, 42, 0, (null == n.companies ? null : n.companies.length) > 0), t(e, 44, 0, n.formByCity, "Is input invalid")
            }, function (t, e) {
                var n = e.component;
                t(e, 2, 0, n.notFound, Xr(e, 6).ngClassUntouched, Xr(e, 6).ngClassTouched, Xr(e, 6).ngClassPristine, Xr(e, 6).ngClassDirty, Xr(e, 6).ngClassValid, Xr(e, 6).ngClassInvalid, Xr(e, 6).ngClassPending), t(e, 7, 1, ["standard" == Xr(e, 8).appearance, "fill" == Xr(e, 8).appearance, "outline" == Xr(e, 8).appearance, "legacy" == Xr(e, 8).appearance, Xr(e, 8)._control.errorState, Xr(e, 8)._canLabelFloat, Xr(e, 8)._shouldLabelFloat(), Xr(e, 8)._hasFloatingLabel(), Xr(e, 8)._hideControlPlaceholder(), Xr(e, 8)._control.disabled, Xr(e, 8)._control.autofilled, Xr(e, 8)._control.focused, "accent" == Xr(e, 8).color, "warn" == Xr(e, 8).color, Xr(e, 8)._shouldForward("untouched"), Xr(e, 8)._shouldForward("touched"), Xr(e, 8)._shouldForward("pristine"), Xr(e, 8)._shouldForward("dirty"), Xr(e, 8)._shouldForward("valid"), Xr(e, 8)._shouldForward("invalid"), Xr(e, 8)._shouldForward("pending"), !Xr(e, 8)._animationsEnabled]), t(e, 18, 1, [Xr(e, 20).autocompleteAttribute, Xr(e, 20).autocompleteDisabled ? null : "combobox", Xr(e, 20).autocompleteDisabled ? null : "list", Xr(e, 20).panelOpen && Xr(e, 20).activeOption ? Xr(e, 20).activeOption.id : null, Xr(e, 20).autocompleteDisabled ? null : Xr(e, 20).panelOpen.toString(), Xr(e, 20).autocompleteDisabled || !Xr(e, 20).panelOpen ? null : null == Xr(e, 20).autocomplete ? null : Xr(e, 20).autocomplete.id, !Xr(e, 20).autocompleteDisabled, Xr(e, 24).ngClassUntouched, Xr(e, 24).ngClassTouched, Xr(e, 24).ngClassPristine, Xr(e, 24).ngClassDirty, Xr(e, 24).ngClassValid, Xr(e, 24).ngClassInvalid, Xr(e, 24).ngClassPending, Xr(e, 27).ngClassUntouched, Xr(e, 27).ngClassTouched, Xr(e, 27).ngClassPristine, Xr(e, 27).ngClassDirty, Xr(e, 27).ngClassValid, Xr(e, 27).ngClassInvalid, Xr(e, 27).ngClassPending, Xr(e, 28)._isServer, Xr(e, 28).id, Xr(e, 28).placeholder, Xr(e, 28).disabled, Xr(e, 28).required, Xr(e, 28).readonly && !Xr(e, 28)._isNativeSelect || null, Xr(e, 28)._ariaDescribedby || null, Xr(e, 28).errorState, Xr(e, 28).required.toString()]), t(e, 38, 0, null == n.city || n.formByCity.invalid || n.checkedPresent(n.city)), t(e, 45, 0, !n.notFound || (null == n.companies ? null : n.companies.length) < 0)
            })
        }

        function xb(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 1, "app-searchby-city", [], null, null, null, Eb, bb)), hi(1, 114688, null, 0, _b, [zv, ld], null, null)], function (t, e) {
                t(e, 1, 0)
            }, null)
        }

        var Ab = zr("app-searchby-city", _b, xb, {
            citiArr: "citiArr",
            service: "service",
            company: "company"
        }, {submitCompany: "submitCompany"}, []), kb = function () {
            function t(t, e) {
                this.http = t, this.fb = e, this.activity = ["Umzuge", "Apotek", "Abbeizarbeiten", "Abendgymnasium", "Abfallbeseitigung", "Abbeizarbeiten", "Abbrucharbeiten", "Abdichtungsunternehmen", "Abendgymnasium", "Abendrealschule", "Abendschule", "Abfallbeseitigung", "Abfallentsorgung", "Abgasuntersuchung", "Abschleppdienst", "Abschleppservice", "absicherungsdienst", "Abwasserentsorgung", "Abwasserentsorgungsdienst", "Abwasserreinigung", "Abwasserunternehmen", "Abwasserverband", "Abwasserzweckverband", "Achsvermessung", "Ackerbau", "ADAC", "Aerobic", "Agrargemeinschaft", "Agrargenossenschaft", "Agrarhandel", "Agrarhof", "Agraringenieur", "Agrarprodukte", "Agrarservice", "Agrofarm", "Agroservice", "Airbus", "Aircraft", "Akademie", "Akademische Vereine", "Aktenvernichtung", "Akupunktur", "Aldi", "Allergologe", "Allgemeinarzt", "Allgemeinbildende Schulen", "Allianz", "Alpenverein", "Altbausanierung", "Altenbetreuung", "Altenheim", "Altenpflege", "Altenpflegeheim", "Altersvorsorge", "Altmetall", "Gro\xdfhandel", "Altpapier", "Gro\xdfhandel", "ambulanter", "Pflegedienst", " ambulantes", "Operieren", "Ambulanz", "amerikanische", "K\xfcche", "Amtsgericht", "An\xe4sthesie", "Angelgesch\xe4ft", "Angelladen", "Angelshop", "Angelverein", "Angler", "und", "Fischersport", "Vereine", "Anh\xe4nger Verkauf", "Anh\xe4ngermarkt", "Anh\xe4ngerverleih", "Anlage und Verm\xf6gensberater", "Anlageberater", "Anlagenbau", "Anstreicher", "Antennenbau", "antike M\xf6bel", "Antikladen", "Antikschmuck", "Antikuhren", "Antiquariate", "Antiquit\xe4ten", "Antiquit\xe4tenh\xe4ndler", "Anwalt", "Anwaltskammer", "Anzeigenagentur", "Anzeigenannehmestellen", "AOK", "Apotheke", "Apparatebau", "Apple", "Aquaristik", "Arbeitgeberverband", "Arbeitsamt", "Arbeitsb\xfchnen", "Arbeitsb\xfchnenverleih", "Arbeitsgericht", "Arbeitskleidung", " arbeitsmedizinischer Dienst", "Arbeitsrecht", "Arbeitsvermittlung", "Architekt", "Architektenkammer", "Archivierung", "Arzneimittel", "Asia Imbiss", "asiatische K\xfcche", "asiatische Spezialit\xe4ten", "asiatisches Restaurant", "Atemtherapie", "Audi", "Augenarzt", "Augenklinik", "Augenoptiker", "Augenzentrum", "Auktionshaus", "Ausbildungszentrum", "Autoanh\xe4nger", "Autoankauf", "Autoaufbereitung", "Autobahnmeisterei", "Autobahnrastst\xe4tte", "Autobahntankstelle", "Autobeschriftung", "Autoersatzteile", "Autogaragen", "Autogenes Training", "Autohaus", "Autolackiererei", "Automatikuhren", "Automationsunternehmen", "Automobilclub", "Automobilzulieferer", " Autopflege", "Autoradio Einzelhandel", "Autoreinigung", "Autosattlerei", "Autoservice", "Autoteile", "Autotransportanh\xe4nger", "Auto", "Tuning", "Werkstatt", "Autovermietung", "Autoverwerter", "Autoverwertung", "Autowaschanlage", "Autowerkstatt", "Autozubeh\xf6r", "AWO", "Ayurveda"], this.notFound = !0
            }

            return t.prototype.createForm = function () {
                this.formByIndustry = this.fb.group({industry: [{value: null}, [pf.required, pf.pattern("^[$_a-zA-Z]+[$_w \\w]*$")]]})
            }, t.prototype.searchByActivity = function () {
                var t = this;
                if (this.formByIndustry.valid) {
                    var e = new kv({"Content-Type": "application/json", responseType: "json"});
                    return this.http.get("http://127.0.0.1:8081/industry/" + this.industry, {headers: e}).subscribe(function (e) {
                        t.companies = e
                    }, function (e) {
                        t.notFound = !1
                    })
                }
            }, t.prototype.ngOnInit = function () {
                var t = this;
                this.createForm(), this.filteredOptions = this.formByIndustry.controls.industry.valueChanges.pipe(Vl(""), Y(function (e) {
                    return t._filter(e)
                }))
            }, t.prototype._filter = function (t) {
                var e = t.toLowerCase();
                return this.activity.filter(function (t) {
                    return t.toLowerCase().includes(e)
                })
            }, t.prototype.checkedPresent = function (t) {
                return !this.activity.includes(t)
            }, t
        }(), Ob = tr({
            encapsulation: 0,
            styles: [["body[_ngcontent-%COMP%]{display:flex;min-height:auto;flex-direction:column}#butonsubmit[_ngcontent-%COMP%]{position:absolute;right:490px}mat-form-field[_ngcontent-%COMP%]{display:flex;left:420px}#errore[_ngcontent-%COMP%]{position:absolute;left:20%;height:400px;width:700px}#image[_ngcontent-%COMP%]{position:relative}"]],
            data: {}
        });

        function Pb(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 2, "mat-option", [["class", "mat-option"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (t, e, n) {
                var r = !0;
                return "click" === e && (r = !1 !== Xr(t, 1)._selectViaInteraction() && r), "keydown" === e && (r = !1 !== Xr(t, 1)._handleKeydown(n) && r), r
            }, g_, m_)), hi(1, 8568832, [[10, 4]], 0, cm, [ln, On, [2, um], [2, am]], {value: [0, "value"]}, null), (t()(), ta(2, 0, [" ", " "]))], function (t, e) {
                t(e, 1, 0, e.context.$implicit)
            }, function (t, e) {
                t(e, 0, 0, Xr(e, 1)._getTabIndex(), Xr(e, 1).selected, Xr(e, 1).multiple, Xr(e, 1).active, Xr(e, 1).id, Xr(e, 1)._getAriaSelected(), Xr(e, 1).disabled.toString(), Xr(e, 1).disabled), t(e, 2, 0, e.context.$implicit)
            })
        }

        function Tb(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 13, "tr", [], null, null, null, null, null)), (t()(), zo(1, 0, null, null, 2, "td", [], null, null, null, null, null)), (t()(), zo(2, 0, null, null, 1, "a", [], null, null, null, null, null)), (t()(), ta(3, null, ["", ""])), (t()(), zo(4, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), ta(5, null, ["", ""])), (t()(), zo(6, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), ta(7, null, ["", ""])), (t()(), zo(8, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), ta(9, null, ["", ""])), (t()(), zo(10, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), ta(11, null, ["", ""])), (t()(), zo(12, 0, null, null, 1, "td", [], null, null, null, null, null)), (t()(), ta(13, null, ["", ""]))], null, function (t, e) {
                t(e, 3, 0, e.context.$implicit.id), t(e, 5, 0, e.context.$implicit.name), t(e, 7, 0, e.context.$implicit.telephone), t(e, 9, 0, e.context.$implicit.keywordsIndustry), t(e, 11, 0, e.context.$implicit.googleUri + "\n" + e.context.$implicit.url), t(e, 13, 0, e.context.$implicit.emails)
            })
        }

        function Ib(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 17, "table", [["class", "table"]], null, null, null, null, null)), (t()(), zo(1, 0, null, null, 13, "thead", [["class", "table table-hover"]], null, null, null, null, null)), (t()(), zo(2, 0, null, null, 12, "tr", [], null, null, null, null, null)), (t()(), zo(3, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (t()(), ta(-1, null, ["Id"])), (t()(), zo(5, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (t()(), ta(-1, null, ["Name Company"])), (t()(), zo(7, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (t()(), ta(-1, null, ["Phone"])), (t()(), zo(9, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (t()(), ta(-1, null, ["Industry"])), (t()(), zo(11, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (t()(), ta(-1, null, ["Site"])), (t()(), zo(13, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (t()(), ta(-1, null, ["Email"])), (t()(), zo(15, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (t()(), Lo(16777216, null, null, 1, null, Tb)), hi(17, 278528, null, 0, Rs, [Bn, Nn, An], {ngForOf: [0, "ngForOf"]}, null)], function (t, e) {
                t(e, 17, 0, e.component.companies)
            }, null)
        }

        function Rb(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), zo(1, 0, null, null, 50, "body", [], null, null, null, null, null)), (t()(), zo(2, 0, null, null, 43, "form", [["class", "form-inline md-form mr-auto mb-4"], ["novalidate", ""]], [[8, "hidden", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (t, e, n) {
                var r = !0;
                return "submit" === e && (r = !1 !== Xr(t, 4).onSubmit(n) && r), "reset" === e && (r = !1 !== Xr(t, 4).onReset() && r), r
            }, null, null)), hi(3, 16384, null, 0, td, [], null, null), hi(4, 540672, null, 0, nd, [[8, null], [8, null]], {form: [0, "form"]}, null), fi(2048, null, rf, null, [nd]), hi(6, 16384, null, 0, uf, [[4, rf]], null, null), (t()(), zo(7, 0, null, null, 30, "mat-form-field", [["class", "example-full-width mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, lv, Yg)), hi(8, 7520256, null, 9, Cm, [ln, On, [2, pm], [2, Pm], [2, wm], kd, ro, [2, Qg]], null, null), Wo(603979776, 1, {_controlNonStatic: 0}), Wo(335544320, 2, {_controlStatic: 0}), Wo(603979776, 3, {_labelChildNonStatic: 0}), Wo(335544320, 4, {_labelChildStatic: 0}), Wo(603979776, 5, {_placeholderChild: 0}), Wo(603979776, 6, {_errorChildren: 1}), Wo(603979776, 7, {_hintChildren: 1}), Wo(603979776, 8, {_prefixChildren: 1}), Wo(603979776, 9, {_suffixChildren: 1}), (t()(), zo(18, 16777216, null, 1, 11, "input", [["aria-label", "Search"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "industry"], ["matInput", ""], ["placeholder", "Industry branch"], ["type", "text"]], [[1, "autocomplete", 0], [1, "role", 0], [1, "aria-autocomplete", 0], [1, "aria-activedescendant", 0], [1, "aria-expanded", 0], [1, "aria-owns", 0], [1, "aria-haspopup", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focusin"], [null, "keydown"], [null, "submit"], [null, "reset"], [null, "focus"]], function (t, e, n) {
                var r = !0, i = t.component;
                return "input" === e && (r = !1 !== Xr(t, 19)._handleInput(n.target.value) && r), "blur" === e && (r = !1 !== Xr(t, 19).onTouched() && r), "compositionstart" === e && (r = !1 !== Xr(t, 19)._compositionStart() && r), "compositionend" === e && (r = !1 !== Xr(t, 19)._compositionEnd(n.target.value) && r), "focusin" === e && (r = !1 !== Xr(t, 20)._handleFocus() && r), "blur" === e && (r = !1 !== Xr(t, 20)._onTouched() && r), "input" === e && (r = !1 !== Xr(t, 20)._handleInput(n) && r), "keydown" === e && (r = !1 !== Xr(t, 20)._handleKeydown(n) && r), "submit" === e && (r = !1 !== Xr(t, 25).onSubmit(n) && r), "reset" === e && (r = !1 !== Xr(t, 25).onReset() && r), "blur" === e && (r = !1 !== Xr(t, 28)._focusChanged(!1) && r), "focus" === e && (r = !1 !== Xr(t, 28)._focusChanged(!0) && r), "input" === e && (r = !1 !== Xr(t, 28)._onInput() && r), "ngModelChange" === e && (r = !1 !== (i.industry = n) && r), r
            }, null, null)), hi(19, 16384, null, 0, ef, [fn, ln, [2, tf]], null, null), hi(20, 671744, null, 0, fb, [ln, J_, Bn, ro, On, hb, [2, Pm], [2, Cm], [2, Gs], E_], {autocomplete: [0, "autocomplete"]}, null), fi(1024, null, Xp, function (t, e) {
                return [t, e]
            }, [ef, fb]), hi(22, 671744, null, 0, ad, [[3, rf], [8, null], [8, null], [6, Xp], [2, ed]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {update: "ngModelChange"}), fi(2048, null, af, null, [ad]), hi(24, 16384, null, 0, lf, [[4, af]], null, null), hi(25, 540672, null, 0, nd, [[8, null], [8, null]], {form: [0, "form"]}, null), fi(2048, null, rf, null, [nd]), hi(27, 16384, null, 0, uf, [[4, rf]], null, null), hi(28, 999424, null, 0, _v, [ln, kd, [6, af], [2, Kf], [2, nd], Kd, [8, null], mv, ro], {
                placeholder: [0, "placeholder"],
                type: [1, "type"]
            }, null), fi(2048, [[1, 4], [2, 4]], gm, null, [_v]), (t()(), zo(30, 0, null, 1, 7, "mat-autocomplete", [["class", "mat-autocomplete"]], null, null, null, gb, mb)), fi(6144, null, um, null, [cb]), hi(32, 1097728, [["auto", 4]], 2, cb, [On, ln, ub], null, null), Wo(603979776, 10, {options: 1}), Wo(603979776, 11, {optionGroups: 1}), (t()(), Lo(16777216, null, 0, 2, null, Pb)), hi(36, 278528, null, 0, Rs, [Bn, Nn, An], {ngForOf: [0, "ngForOf"]}, null), pi(131072, Hs, [On]), (t()(), zo(38, 0, null, null, 4, "button", [["class", "btn btn-outline-success"], ["id", "butonsubmit"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "click"]], function (t, e, n) {
                var r = !0, i = t.component;
                return "ngModelChange" === e && (r = !1 !== (i.industry = n) && r), "click" === e && (r = !1 !== i.searchByActivity() && r), r
            }, null, null)), hi(39, 671744, null, 0, Jf, [[2, rf], [8, null], [8, null], [8, null]], {model: [0, "model"]}, {update: "ngModelChange"}), fi(2048, null, af, null, [Jf]), hi(41, 16384, null, 0, lf, [[4, af]], null, null), (t()(), ta(-1, null, ["Search By Industry branch "])), (t()(), zo(43, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), Lo(16777216, null, null, 1, null, Ib)), hi(45, 16384, null, 0, Ds, [Bn, Nn], {ngIf: [0, "ngIf"]}, null), (t()(), zo(46, 0, null, null, 1, "app-app-alertvalitation-input", [["errorMessage", "The value entered is inaccessible"]], null, null, null, Ev, Cv)), hi(47, 114688, null, 0, wv, [], {
                control: [0, "control"],
                errorMessage: [1, "errorMessage"]
            }, null), (t()(), zo(48, 0, null, null, 1, "div", [["class", "alert"], ["id", "allertNotFound"]], [[8, "hidden", 0]], null, null, null, null)), (t()(), zo(49, 0, null, null, 0, "img", [["id", "errore"], ["src", "https://cdn.windowsreport.com/wp-content/uploads/2018/05/Error-message.jpg"]], null, null, null, null, null)), (t()(), zo(50, 0, null, null, 1, "div", [["id", "image"]], [[8, "hidden", 0]], null, null, null, null)), (t()(), zo(51, 0, null, null, 0, "img", [["alt", "Responsive image"], ["class", "img-fluid"], ["height", "400px"], ["src", "https://www.ft.com/__origami/service/image/v2/images/raw/http://prod-upp-image-read.ft.com/d2db4d4a-2329-11e9-8ce6-5db4543da632?source=next&fit=scale-down&quality=highest&width=1440"], ["width", "1349px"]], null, null, null, null, null))], function (t, e) {
                var n = e.component;
                t(e, 4, 0, n.formByIndustry), t(e, 20, 0, Xr(e, 32)), t(e, 22, 0, "industry", n.industry), t(e, 25, 0, n.formByIndustry), t(e, 28, 0, "Industry branch", "text"), t(e, 36, 0, $n(e, 36, 0, Xr(e, 37).transform(n.filteredOptions))), t(e, 39, 0, n.industry), t(e, 45, 0, (null == n.companies ? null : n.companies.length) > 0), t(e, 47, 0, n.formByIndustry, "The value entered is inaccessible")
            }, function (t, e) {
                var n = e.component;
                t(e, 2, 0, !n.notFound, Xr(e, 6).ngClassUntouched, Xr(e, 6).ngClassTouched, Xr(e, 6).ngClassPristine, Xr(e, 6).ngClassDirty, Xr(e, 6).ngClassValid, Xr(e, 6).ngClassInvalid, Xr(e, 6).ngClassPending), t(e, 7, 1, ["standard" == Xr(e, 8).appearance, "fill" == Xr(e, 8).appearance, "outline" == Xr(e, 8).appearance, "legacy" == Xr(e, 8).appearance, Xr(e, 8)._control.errorState, Xr(e, 8)._canLabelFloat, Xr(e, 8)._shouldLabelFloat(), Xr(e, 8)._hasFloatingLabel(), Xr(e, 8)._hideControlPlaceholder(), Xr(e, 8)._control.disabled, Xr(e, 8)._control.autofilled, Xr(e, 8)._control.focused, "accent" == Xr(e, 8).color, "warn" == Xr(e, 8).color, Xr(e, 8)._shouldForward("untouched"), Xr(e, 8)._shouldForward("touched"), Xr(e, 8)._shouldForward("pristine"), Xr(e, 8)._shouldForward("dirty"), Xr(e, 8)._shouldForward("valid"), Xr(e, 8)._shouldForward("invalid"), Xr(e, 8)._shouldForward("pending"), !Xr(e, 8)._animationsEnabled]), t(e, 18, 1, [Xr(e, 20).autocompleteAttribute, Xr(e, 20).autocompleteDisabled ? null : "combobox", Xr(e, 20).autocompleteDisabled ? null : "list", Xr(e, 20).panelOpen && Xr(e, 20).activeOption ? Xr(e, 20).activeOption.id : null, Xr(e, 20).autocompleteDisabled ? null : Xr(e, 20).panelOpen.toString(), Xr(e, 20).autocompleteDisabled || !Xr(e, 20).panelOpen ? null : null == Xr(e, 20).autocomplete ? null : Xr(e, 20).autocomplete.id, !Xr(e, 20).autocompleteDisabled, Xr(e, 24).ngClassUntouched, Xr(e, 24).ngClassTouched, Xr(e, 24).ngClassPristine, Xr(e, 24).ngClassDirty, Xr(e, 24).ngClassValid, Xr(e, 24).ngClassInvalid, Xr(e, 24).ngClassPending, Xr(e, 27).ngClassUntouched, Xr(e, 27).ngClassTouched, Xr(e, 27).ngClassPristine, Xr(e, 27).ngClassDirty, Xr(e, 27).ngClassValid, Xr(e, 27).ngClassInvalid, Xr(e, 27).ngClassPending, Xr(e, 28)._isServer, Xr(e, 28).id, Xr(e, 28).placeholder, Xr(e, 28).disabled, Xr(e, 28).required, Xr(e, 28).readonly && !Xr(e, 28)._isNativeSelect || null, Xr(e, 28)._ariaDescribedby || null, Xr(e, 28).errorState, Xr(e, 28).required.toString()]), t(e, 38, 0, Xr(e, 41).ngClassUntouched, Xr(e, 41).ngClassTouched, Xr(e, 41).ngClassPristine, Xr(e, 41).ngClassDirty, Xr(e, 41).ngClassValid, Xr(e, 41).ngClassInvalid, Xr(e, 41).ngClassPending), t(e, 48, 0, n.notFound), t(e, 50, 0, !n.notFound)
            })
        }

        function Nb(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 1, "app-searchby-industry", [], null, null, null, Rb, Ob)), hi(1, 114688, null, 0, kb, [zv, ld], null, null)], function (t, e) {
                t(e, 1, 0)
            }, null)
        }

        var Db = zr("app-searchby-industry", kb, Nb, {}, {}, []), Bb = function () {
            function t() {
            }

            return t.prototype.ngOnInit = function () {
            }, t
        }(), Mb = tr({
            encapsulation: 0,
            styles: [["div[_ngcontent-%COMP%]{position:absolute;left:30%}body[_ngcontent-%COMP%]{display:flex;min-height:auto;flex-direction:column}"]],
            data: {}
        });

        function Vb(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 3, "body", [], null, null, null, null, null)), (t()(), zo(1, 0, null, null, 2, "div", [], null, null, null, null, null)), (t()(), zo(2, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), zo(3, 0, null, null, 0, "img", [["alt", ""], ["src", "http://library.iitj.ac.in/images/error-img.png"]], null, null, null, null, null))], null, null)
        }

        function Fb(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 1, "app-not-fount", [], null, null, null, Vb, Mb)), hi(1, 114688, null, 0, Bb, [], null, null)], function (t, e) {
                t(e, 1, 0)
            }, null)
        }

        var jb = zr("app-not-fount", Bb, Fb, {}, {}, []), Lb = function () {
            function t() {
                var t = this;
                this.visibility = !0, setInterval(function () {
                    t.clock = (new Date).toLocaleTimeString().normalize(), t.date = (new Date).toDateString().normalize()
                }, 1e3)
            }

            return t.prototype.show = function () {
                this.visibility = !this.visibility
            }, t.prototype.ngOnInit = function () {
            }, t
        }(), zb = tr({
            encapsulation: 0,
            styles: [["p[_ngcontent-%COMP%]{font-family:Georgia,serif;font-size:15px;letter-spacing:-.8px;word-spacing:6px;color:-moz-buttonhoverface;font-weight:400;text-decoration:none;font-style:italic;font-variant:small-caps;text-transform:capitalize;position:absolute;left:75%;bottom:0}.invisibile[_ngcontent-%COMP%]{display:none}button[_ngcontent-%COMP%]{position:absolute;left:70%;bottom:0}"]],
            data: {}
        });

        function Ub(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 1, "button", [["class", "btn btn-light"], ["type", "button"]], null, [[null, "click"]], function (t, e, n) {
                var r = !0;
                return "click" === e && (r = !1 !== t.component.show() && r), r
            }, null, null)), (t()(), ta(-1, null, ["Show Time"]))], null, null)
        }

        function Hb(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 1, "button", [["class", "btn btn-light"], ["type", "button"]], null, [[null, "click"]], function (t, e, n) {
                var r = !0;
                return "click" === e && (r = !1 !== t.component.show() && r), r
            }, null, null)), (t()(), ta(-1, null, ["Hide"]))], null, null)
        }

        function qb(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 0, "link", [["crossorigin", "anonymous"], ["href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"], ["integrity", "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"], ["rel", "stylesheet"]], null, null, null, null, null)), (t()(), zo(1, 0, null, null, 5, "div", [], null, null, null, null, null)), fi(512, null, Os, Ps, [An, kn, ln, fn]), hi(3, 278528, null, 0, Ts, [Os], {ngClass: [0, "ngClass"]}, null), Jo(4, {invisibile: 0}), (t()(), zo(5, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), ta(6, null, [" Time:", "\n"])), (t()(), Lo(16777216, null, null, 1, null, Ub)), hi(8, 16384, null, 0, Ds, [Bn, Nn], {ngIf: [0, "ngIf"]}, null), (t()(), Lo(16777216, null, null, 1, null, Hb)), hi(10, 16384, null, 0, Ds, [Bn, Nn], {ngIf: [0, "ngIf"]}, null)], function (t, e) {
                var n = e.component, r = t(e, 4, 0, !n.visibility);
                t(e, 3, 0, r), t(e, 8, 0, !n.visibility), t(e, 10, 0, n.visibility)
            }, function (t, e) {
                var n = e.component;
                t(e, 6, 0, " " + n.clock + " Date: " + n.date)
            })
        }

        var Gb = function () {
            function t() {
                var t = this;
                this.url = "https://teox.eu/", this.isColapset = !0, setTimeout(function () {
                    t.message = "Teox DataBase"
                }, 3e3)
            }

            return t.prototype.ngOnInit = function () {
            }, t.prototype.teox = function (t) {
                this.isColapset = !this.isColapset
            }, t
        }(), Wb = tr({
            encapsulation: 0,
            styles: [["h1[_ngcontent-%COMP%]{position:absolute;left:40%;font-family:Georgia,serif;font-size:31px;letter-spacing:-.8px;word-spacing:6px;color:#333;font-weight:400;text-decoration:none;font-style:italic;font-variant:small-caps;text-transform:capitalize}.topnav[_ngcontent-%COMP%]{background-color:#333;overflow:hidden}.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{float:left;color:#f2f2f2;text-align:center;padding:14px 16px;text-decoration:none;font-size:17px}.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#ddd;color:#000;height:50px}.topnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff}"]],
            data: {}
        });

        function Kb(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 1, "button", [["class", "badge badge-light"]], null, [[null, "click"]], function (t, e, n) {
                var r = !0;
                return "click" === e && (r = !1 !== t.component.teox(n) && r), r
            }, null, null)), (t()(), zo(1, 0, null, null, 0, "img", [["alt", ""], ["class", "d-inline-block align-top"], ["height", "30"], ["src", "https://teox.eu/images/facicon.ico"], ["width", "30"]], null, null, null, null, null))], null, null)
        }

        function Qb(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 1, "button", [["class", "badge badge-light"]], null, [[null, "click"]], function (t, e, n) {
                var r = !0;
                return "click" === e && (r = !1 !== t.component.teox(n) && r), r
            }, null, null)), (t()(), zo(1, 0, null, null, 0, "img", [["alt", ""], ["class", "d-inline-block align-top"], ["height", "30"], ["src", "https://teox.eu/images/facicon.ico"], ["width", "30"]], null, null, null, null, null))], null, null)
        }

        function Zb(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 2, "div", [], null, null, null, null, null)), (t()(), zo(1, 0, null, null, 1, "a", [["class", "badge badge-light"], ["href", "https://teox.eu/"]], null, null, null, null, null)), (t()(), ta(-1, null, ["https://teox.eu/"]))], null, null)
        }

        function Yb(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 0, "link", [["crossorigin", "anonymous"], ["href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"], ["integrity", "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"], ["rel", "stylesheet"]], null, null, null, null, null)), (t()(), zo(1, 0, null, null, 12, "nav", [["class", "navbar navbar-light bg-light"]], null, null, null, null, null)), (t()(), zo(2, 0, null, null, 10, "a", [["class", "navbar-brand"]], null, null, null, null, null)), (t()(), zo(3, 0, null, null, 1, "h1", [], null, null, null, null, null)), (t()(), ta(4, null, [" ", ""])), (t()(), Lo(16777216, null, null, 1, null, Kb)), hi(6, 16384, null, 0, Ds, [Bn, Nn], {ngIf: [0, "ngIf"]}, null), (t()(), Lo(16777216, null, null, 1, null, Qb)), hi(8, 16384, null, 0, Ds, [Bn, Nn], {ngIf: [0, "ngIf"]}, null), (t()(), Lo(16777216, null, null, 1, null, Zb)), hi(10, 16384, null, 0, Ds, [Bn, Nn], {ngIf: [0, "ngIf"]}, null), (t()(), zo(11, 0, null, null, 1, "app-clock", [], null, null, null, qb, zb)), hi(12, 114688, null, 0, Lb, [], null, null), (t()(), zo(13, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), zo(14, 0, null, null, 8, "div", [["class", "topnav"]], null, null, null, null, null)), (t()(), zo(15, 0, null, null, 1, "a", [["class", "active"], ["href", ""]], null, null, null, null, null)), (t()(), ta(-1, null, ["Home"])), (t()(), zo(17, 0, null, null, 1, "a", [["href", "byid"]], null, null, null, null, null)), (t()(), ta(-1, null, ["Search by ID"])), (t()(), zo(19, 0, null, null, 1, "a", [["href", "bycity"]], null, null, null, null, null)), (t()(), ta(-1, null, ["Search by City"])), (t()(), zo(21, 0, null, null, 1, "a", [["href", "byindustry"]], null, null, null, null, null)), (t()(), ta(-1, null, ["Search by Industry"]))], function (t, e) {
                var n = e.component;
                t(e, 6, 0, n.isColapset), t(e, 8, 0, !n.isColapset), t(e, 10, 0, !n.isColapset), t(e, 12, 0)
            }, function (t, e) {
                t(e, 4, 0, e.component.message)
            })
        }

        var $b = function () {
            function t() {
            }

            return t.prototype.ngOnInit = function () {
            }, t
        }(), Xb = tr({
            encapsulation: 0,
            styles: [["footer[_ngcontent-%COMP%]{bottom:0;width:100%;background-color:#333;padding:10px;text-align:center;color:#fff;position:fixed;left:0;height:50px;clear:both}p[_ngcontent-%COMP%]{font-family:Georgia,serif;font-size:21px;letter-spacing:-.8px;word-spacing:6px;color:azure;font-weight:400;text-decoration:none;font-style:italic;font-variant:small-caps;text-transform:capitalize}"]],
            data: {}
        });

        function Jb(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 2, "footer", [], null, null, null, null, null)), (t()(), zo(1, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), ta(-1, null, ["Welcome to Teox Data Base"]))], null, null)
        }

        var tw = tr({encapsulation: 0, styles: [["br[_ngcontent-%COMP%]{background-color:#333}"]], data: {}});

        function ew(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 1, "app-header", [], null, null, null, Yb, Wb)), hi(1, 114688, null, 0, Gb, [], null, null), (t()(), zo(2, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), zo(3, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), hi(4, 212992, null, 0, bp, [_p, Bn, en, [8, null], On], null, null), (t()(), zo(5, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), zo(6, 0, null, null, 1, "app-footer", [], null, null, null, Jb, Xb)), hi(7, 114688, null, 0, $b, [], null, null)], function (t, e) {
                t(e, 1, 0), t(e, 4, 0), t(e, 7, 0)
            }, null)
        }

        function nw(t) {
            return ra(0, [(t()(), zo(0, 0, null, null, 1, "app-root", [], null, null, null, ew, tw)), hi(1, 49152, null, 0, hs, [zv], null, null)], null, null)
        }

        var rw = zr("app-root", hs, nw, {}, {}, []), iw = function () {
            return function () {
            }
        }(), ow = ls(cs, [hs], function (t) {
            return function (t) {
                for (var e = {}, n = [], r = !1, i = 0; i < t.length; i++) {
                    var o = t[i];
                    o.token === Ze && !0 === o.value && (r = !0), 1073741824 & o.flags && n.push(o.token), o.index = i, e[Yn(o.token)] = o
                }
                return {factory: null, providersByKey: e, providers: t, modules: n, isRoot: r}
            }([Rr(512, en, nn, [[8, [Gp, Yp, d_, Ab, Db, jb, rw]], [3, en], on]), Rr(5120, Do, Vo, [[3, Do]]), Rr(4608, xs, As, [Do, [2, Es]]), Rr(5120, Oi, Fo, [ro]), Rr(5120, Di, Bi, []), Rr(5120, An, Bo, []), Rr(5120, kn, Mo, []), Rr(4608, Uu, Hu, [Gs]), Rr(6144, De, null, [Uu]), Rr(4608, Bu, Vu, []), Rr(5120, lu, function (t, e, n, r, i, o, a, s) {
                return [new Nu(t, e, n), new zu(r), new Fu(i, o, a, s)]
            }, [Gs, ro, Fi, Gs, Gs, Bu, Li, [2, Mu]]), Rr(4608, uu, uu, [lu, ro]), Rr(135680, pu, pu, [Gs]), Rr(4608, _u, _u, [uu, pu, Di]), Rr(5120, $m, Gg, []), Rr(5120, zy, Wg, []), Rr(4608, yg, qg, [Gs, $m, zy]), Rr(5120, hn, Kg, [_u, yg, ro]), Rr(6144, hu, null, [pu]), Rr(4608, ho, ho, [ro]), Rr(4608, _f, _f, []), Rr(5120, sh, Vp, [gp]), Rr(4608, Ep, Ep, []), Rr(6144, Cp, null, [Ep]), Rr(135680, xp, xp, [gp, Ii, Qi, zt, Cp]), Rr(4608, Sp, Sp, []), Rr(5120, Ap, Rp, [gp, Qs, kp]), Rr(5120, zp, Lp, [Fp]), Rr(5120, ji, function (t) {
                return [t]
            }, [zp]), Rr(4608, $v, Xv, [Gs, Fi, Zv]), Rr(4608, Jv, Jv, [$v, Yv]), Rr(5120, Hv, function (t) {
                return [t]
            }, [Jv]), Rr(4608, Kv, Kv, []), Rr(6144, Wv, null, [Kv]), Rr(4608, Qv, Qv, [Wv]), Rr(6144, Av, null, [Qv]), Rr(4608, xv, t_, [Av, zt]), Rr(4608, zv, zv, [xv]), Rr(4608, ld, ld, []), Rr(4608, Em, Em, []), Rr(4608, J_, J_, [F_, G_, en, $_, q_, zt, ro, Gs, Pm, [2, ys]]), Rr(5120, tb, eb, [J_]), Rr(5120, hb, pb, [J_]), Rr(4608, hd, Vg, [hn, Gs]), Rr(4608, Kd, Kd, []), Rr(4608, vb, vb, [zv]), Rr(1073742336, qs, qs, []), Rr(1024, le, $u, []), Rr(1024, yo, function () {
                return [Tp()]
            }, []), Rr(512, Fp, Fp, [zt]), Rr(1024, Ri, function (t, e) {
                return [(n = t, ou("probe", su), ou("coreTokens", o({}, au, (n || []).reduce(function (t, e) {
                    return t[e.name] = e.token, t
                }, {}))), function () {
                    return su
                }), jp(e)];
                var n
            }, [[2, yo], Fp]), Rr(512, Ni, Ni, [[2, Ri]]), Rr(131584, wo, wo, [ro, Li, zt, le, en, Ni]), Rr(1073742336, jo, jo, [wo]), Rr(1073742336, Xu, Xu, [[3, Xu]]), Rr(1073742336, sd, sd, []), Rr(1073742336, ud, ud, []), Rr(1024, Op, Dp, [[3, gp]]), Rr(512, jc, Lc, []), Rr(512, _p, _p, []), Rr(256, kp, {}, []), Rr(1024, ds, Np, [ps, [2, ms], kp]), Rr(512, ys, ys, [ds, ps]), Rr(512, Qi, Qi, []), Rr(512, Ii, xo, [Qi, [2, So]]), Rr(1024, cp, function () {
                return [[{path: "", component: Wp}, {path: "byid", component: a_}, {
                    path: "bycity",
                    component: _b
                }, {path: "byindustry", component: kb}, {path: "**", component: Bb}]]
            }, []), Rr(1024, gp, Mp, [wo, jc, _p, ys, zt, Ii, Qi, cp, kp, [2, pp], [2, lp]]), Rr(1073742336, Ip, Ip, [[2, Op], [2, gp]]), Rr(1073742336, iw, iw, []), Rr(1073742336, e_, e_, []), Rr(1073742336, n_, n_, []), Rr(1073742336, cd, cd, []), Rr(1073742336, km, km, []), Rr(1073742336, Sm, Sm, []), Rr(1073742336, Tm, Tm, []), Rr(1073742336, Ud, Ud, [[2, zd], [2, Mu]]), Rr(1073742336, Od, Od, []), Rr(1073742336, nm, nm, []), Rr(1073742336, im, im, []), Rr(1073742336, hm, hm, []), Rr(1073742336, T_, T_, []), Rr(1073742336, S_, S_, []), Rr(1073742336, nb, nb, []), Rr(1073742336, db, db, []), Rr(1073742336, Zg, Zg, []), Rr(1073742336, yv, yv, []), Rr(1073742336, bv, bv, []), Rr(1073742336, cs, cs, []), Rr(256, Ze, !0, []), Rr(256, Zv, "XSRF-TOKEN", []), Rr(256, Yv, "X-XSRF-TOKEN", []), Rr(256, Qg, "BrowserAnimations", [])])
        });
        (function () {
            if (ce) throw new Error("Cannot enable prod mode after platform setup.");
            ue = !1
        })(), Yu().bootstrapModuleFactory(ow).catch(function (t) {
            return console.error(t)
        })
    }, zn8P: function (t, e) {
        function n(t) {
            return Promise.resolve().then(function () {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            })
        }

        n.keys = function () {
            return []
        }, n.resolve = n, t.exports = n, n.id = "zn8P"
    }
}, [[0, 0]]]);
