function cE() {
    import.meta.url, import('_').catch(() => 1);
    async function* e() {}
}
(function () {
    const t = document.createElement('link').relList;
    if (t && t.supports && t.supports('modulepreload')) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) o(i);
    new MutationObserver((i) => {
        for (const r of i)
            if (r.type === 'childList')
                for (const s of r.addedNodes)
                    s.tagName === 'LINK' && s.rel === 'modulepreload' && o(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
        const r = {};
        return (
            i.integrity && (r.integrity = i.integrity),
            i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === 'use-credentials'
                ? (r.credentials = 'include')
                : i.crossOrigin === 'anonymous'
                ? (r.credentials = 'omit')
                : (r.credentials = 'same-origin'),
            r
        );
    }
    function o(i) {
        if (i.ep) return;
        i.ep = !0;
        const r = n(i);
        fetch(i.href, r);
    }
})();
function Ai(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
        ? e.default
        : e;
}
var nh = { exports: {} },
    ps = {},
    oh = { exports: {} },
    F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zi = Symbol.for('react.element'),
    Tv = Symbol.for('react.portal'),
    Pv = Symbol.for('react.fragment'),
    Rv = Symbol.for('react.strict_mode'),
    _v = Symbol.for('react.profiler'),
    Lv = Symbol.for('react.provider'),
    Iv = Symbol.for('react.context'),
    Ov = Symbol.for('react.forward_ref'),
    Av = Symbol.for('react.suspense'),
    zv = Symbol.for('react.memo'),
    Mv = Symbol.for('react.lazy'),
    Au = Symbol.iterator;
function Nv(e) {
    return e === null || typeof e != 'object'
        ? null
        : ((e = (Au && e[Au]) || e['@@iterator']),
          typeof e == 'function' ? e : null);
}
var ih = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    rh = Object.assign,
    sh = {};
function Ao(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = sh), (this.updater = n || ih);
}
Ao.prototype.isReactComponent = {};
Ao.prototype.setState = function (e, t) {
    if (typeof e != 'object' && typeof e != 'function' && e != null)
        throw Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
    this.updater.enqueueSetState(this, e, t, 'setState');
};
Ao.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function lh() {}
lh.prototype = Ao.prototype;
function Za(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = sh), (this.updater = n || ih);
}
var Ja = (Za.prototype = new lh());
Ja.constructor = Za;
rh(Ja, Ao.prototype);
Ja.isPureReactComponent = !0;
var zu = Array.isArray,
    ah = Object.prototype.hasOwnProperty,
    ec = { current: null },
    ch = { key: !0, ref: !0, __self: !0, __source: !0 };
function uh(e, t, n) {
    var o,
        i = {},
        r = null,
        s = null;
    if (t != null)
        for (o in (t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (r = '' + t.key),
        t))
            ah.call(t, o) && !ch.hasOwnProperty(o) && (i[o] = t[o]);
    var l = arguments.length - 2;
    if (l === 1) i.children = n;
    else if (1 < l) {
        for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
        i.children = a;
    }
    if (e && e.defaultProps)
        for (o in ((l = e.defaultProps), l)) i[o] === void 0 && (i[o] = l[o]);
    return { $$typeof: zi, type: e, key: r, ref: s, props: i, _owner: ec.current };
}
function Dv(e, t) {
    return {
        $$typeof: zi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function tc(e) {
    return typeof e == 'object' && e !== null && e.$$typeof === zi;
}
function Bv(e) {
    var t = { '=': '=0', ':': '=2' };
    return (
        '$' +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var Mu = /\/+/g;
function il(e, t) {
    return typeof e == 'object' && e !== null && e.key != null
        ? Bv('' + e.key)
        : t.toString(36);
}
function vr(e, t, n, o, i) {
    var r = typeof e;
    (r === 'undefined' || r === 'boolean') && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else
        switch (r) {
            case 'string':
            case 'number':
                s = !0;
                break;
            case 'object':
                switch (e.$$typeof) {
                    case zi:
                    case Tv:
                        s = !0;
                }
        }
    if (s)
        return (
            (s = e),
            (i = i(s)),
            (e = o === '' ? '.' + il(s, 0) : o),
            zu(i)
                ? ((n = ''),
                  e != null && (n = e.replace(Mu, '$&/') + '/'),
                  vr(i, t, n, '', function (c) {
                      return c;
                  }))
                : i != null &&
                  (tc(i) &&
                      (i = Dv(
                          i,
                          n +
                              (!i.key || (s && s.key === i.key)
                                  ? ''
                                  : ('' + i.key).replace(Mu, '$&/') + '/') +
                              e
                      )),
                  t.push(i)),
            1
        );
    if (((s = 0), (o = o === '' ? '.' : o + ':'), zu(e)))
        for (var l = 0; l < e.length; l++) {
            r = e[l];
            var a = o + il(r, l);
            s += vr(r, t, n, a, i);
        }
    else if (((a = Nv(e)), typeof a == 'function'))
        for (e = a.call(e), l = 0; !(r = e.next()).done; )
            (r = r.value), (a = o + il(r, l++)), (s += vr(r, t, n, a, i));
    else if (r === 'object')
        throw (
            ((t = String(e)),
            Error(
                'Objects are not valid as a React child (found: ' +
                    (t === '[object Object]'
                        ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                        : t) +
                    '). If you meant to render a collection of children, use an array instead.'
            ))
        );
    return s;
}
function Yi(e, t, n) {
    if (e == null) return e;
    var o = [],
        i = 0;
    return (
        vr(e, o, '', '', function (r) {
            return t.call(n, r, i++);
        }),
        o
    );
}
function jv(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var Me = { current: null },
    yr = { transition: null },
    Hv = {
        ReactCurrentDispatcher: Me,
        ReactCurrentBatchConfig: yr,
        ReactCurrentOwner: ec,
    };
F.Children = {
    map: Yi,
    forEach: function (e, t, n) {
        Yi(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            Yi(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            Yi(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!tc(e))
            throw Error(
                'React.Children.only expected to receive a single React element child.'
            );
        return e;
    },
};
F.Component = Ao;
F.Fragment = Pv;
F.Profiler = _v;
F.PureComponent = Za;
F.StrictMode = Rv;
F.Suspense = Av;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hv;
F.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            'React.cloneElement(...): The argument must be a React element, but you passed ' +
                e +
                '.'
        );
    var o = rh({}, e.props),
        i = e.key,
        r = e.ref,
        s = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((r = t.ref), (s = ec.current)),
            t.key !== void 0 && (i = '' + t.key),
            e.type && e.type.defaultProps)
        )
            var l = e.type.defaultProps;
        for (a in t)
            ah.call(t, a) &&
                !ch.hasOwnProperty(a) &&
                (o[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
    }
    var a = arguments.length - 2;
    if (a === 1) o.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
        o.children = l;
    }
    return { $$typeof: zi, type: e.type, key: i, ref: r, props: o, _owner: s };
};
F.createContext = function (e) {
    return (
        (e = {
            $$typeof: Iv,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: Lv, _context: e }),
        (e.Consumer = e)
    );
};
F.createElement = uh;
F.createFactory = function (e) {
    var t = uh.bind(null, e);
    return (t.type = e), t;
};
F.createRef = function () {
    return { current: null };
};
F.forwardRef = function (e) {
    return { $$typeof: Ov, render: e };
};
F.isValidElement = tc;
F.lazy = function (e) {
    return { $$typeof: Mv, _payload: { _status: -1, _result: e }, _init: jv };
};
F.memo = function (e, t) {
    return { $$typeof: zv, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
    var t = yr.transition;
    yr.transition = {};
    try {
        e();
    } finally {
        yr.transition = t;
    }
};
F.unstable_act = function () {
    throw Error('act(...) is not supported in production builds of React.');
};
F.useCallback = function (e, t) {
    return Me.current.useCallback(e, t);
};
F.useContext = function (e) {
    return Me.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
    return Me.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
    return Me.current.useEffect(e, t);
};
F.useId = function () {
    return Me.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
    return Me.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
    return Me.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
    return Me.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
    return Me.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
    return Me.current.useReducer(e, t, n);
};
F.useRef = function (e) {
    return Me.current.useRef(e);
};
F.useState = function (e) {
    return Me.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
    return Me.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
    return Me.current.useTransition();
};
F.version = '18.2.0';
oh.exports = F;
var ut = oh.exports;
const b = Ai(ut);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fv = ut,
    Uv = Symbol.for('react.element'),
    Vv = Symbol.for('react.fragment'),
    Wv = Object.prototype.hasOwnProperty,
    Kv = Fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Qv = { key: !0, ref: !0, __self: !0, __source: !0 };
function dh(e, t, n) {
    var o,
        i = {},
        r = null,
        s = null;
    n !== void 0 && (r = '' + n),
        t.key !== void 0 && (r = '' + t.key),
        t.ref !== void 0 && (s = t.ref);
    for (o in t) Wv.call(t, o) && !Qv.hasOwnProperty(o) && (i[o] = t[o]);
    if (e && e.defaultProps)
        for (o in ((t = e.defaultProps), t)) i[o] === void 0 && (i[o] = t[o]);
    return { $$typeof: Uv, type: e, key: r, ref: s, props: i, _owner: Kv.current };
}
ps.Fragment = Vv;
ps.jsx = dh;
ps.jsxs = dh;
nh.exports = ps;
var D = nh.exports,
    fh = { exports: {} },
    et = {},
    hh = { exports: {} },
    ph = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(R, S) {
        var k = R.length;
        R.push(S);
        e: for (; 0 < k; ) {
            var z = (k - 1) >>> 1,
                A = R[z];
            if (0 < i(A, S)) (R[z] = S), (R[k] = A), (k = z);
            else break e;
        }
    }
    function n(R) {
        return R.length === 0 ? null : R[0];
    }
    function o(R) {
        if (R.length === 0) return null;
        var S = R[0],
            k = R.pop();
        if (k !== S) {
            R[0] = k;
            e: for (var z = 0, A = R.length, j = A >>> 1; z < j; ) {
                var X = 2 * (z + 1) - 1,
                    V = R[X],
                    le = X + 1,
                    fe = R[le];
                if (0 > i(V, k))
                    le < A && 0 > i(fe, V)
                        ? ((R[z] = fe), (R[le] = k), (z = le))
                        : ((R[z] = V), (R[X] = k), (z = X));
                else if (le < A && 0 > i(fe, k)) (R[z] = fe), (R[le] = k), (z = le);
                else break e;
            }
        }
        return S;
    }
    function i(R, S) {
        var k = R.sortIndex - S.sortIndex;
        return k !== 0 ? k : R.id - S.id;
    }
    if (typeof performance == 'object' && typeof performance.now == 'function') {
        var r = performance;
        e.unstable_now = function () {
            return r.now();
        };
    } else {
        var s = Date,
            l = s.now();
        e.unstable_now = function () {
            return s.now() - l;
        };
    }
    var a = [],
        c = [],
        u = 1,
        d = null,
        f = 3,
        m = !1,
        y = !1,
        w = !1,
        O = typeof setTimeout == 'function' ? setTimeout : null,
        p = typeof clearTimeout == 'function' ? clearTimeout : null,
        h = typeof setImmediate < 'u' ? setImmediate : null;
    typeof navigator < 'u' &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function g(R) {
        for (var S = n(c); S !== null; ) {
            if (S.callback === null) o(c);
            else if (S.startTime <= R)
                o(c), (S.sortIndex = S.expirationTime), t(a, S);
            else break;
            S = n(c);
        }
    }
    function x(R) {
        if (((w = !1), g(R), !y))
            if (n(a) !== null) (y = !0), Q(T);
            else {
                var S = n(c);
                S !== null && se(x, S.startTime - R);
            }
    }
    function T(R, S) {
        (y = !1), w && ((w = !1), p(C), (C = -1)), (m = !0);
        var k = f;
        try {
            for (
                g(S), d = n(a);
                d !== null && (!(d.expirationTime > S) || (R && !L()));

            ) {
                var z = d.callback;
                if (typeof z == 'function') {
                    (d.callback = null), (f = d.priorityLevel);
                    var A = z(d.expirationTime <= S);
                    (S = e.unstable_now()),
                        typeof A == 'function'
                            ? (d.callback = A)
                            : d === n(a) && o(a),
                        g(S);
                } else o(a);
                d = n(a);
            }
            if (d !== null) var j = !0;
            else {
                var X = n(c);
                X !== null && se(x, X.startTime - S), (j = !1);
            }
            return j;
        } finally {
            (d = null), (f = k), (m = !1);
        }
    }
    var P = !1,
        $ = null,
        C = -1,
        B = 5,
        N = -1;
    function L() {
        return !(e.unstable_now() - N < B);
    }
    function ue() {
        if ($ !== null) {
            var R = e.unstable_now();
            N = R;
            var S = !0;
            try {
                S = $(!0, R);
            } finally {
                S ? Ce() : ((P = !1), ($ = null));
            }
        } else P = !1;
    }
    var Ce;
    if (typeof h == 'function')
        Ce = function () {
            h(ue);
        };
    else if (typeof MessageChannel < 'u') {
        var de = new MessageChannel(),
            ie = de.port2;
        (de.port1.onmessage = ue),
            (Ce = function () {
                ie.postMessage(null);
            });
    } else
        Ce = function () {
            O(ue, 0);
        };
    function Q(R) {
        ($ = R), P || ((P = !0), Ce());
    }
    function se(R, S) {
        C = O(function () {
            R(e.unstable_now());
        }, S);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (R) {
            R.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            y || m || ((y = !0), Q(T));
        }),
        (e.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R
                ? console.error(
                      'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                  )
                : (B = 0 < R ? Math.floor(1e3 / R) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return f;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(a);
        }),
        (e.unstable_next = function (R) {
            switch (f) {
                case 1:
                case 2:
                case 3:
                    var S = 3;
                    break;
                default:
                    S = f;
            }
            var k = f;
            f = S;
            try {
                return R();
            } finally {
                f = k;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (R, S) {
            switch (R) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    R = 3;
            }
            var k = f;
            f = R;
            try {
                return S();
            } finally {
                f = k;
            }
        }),
        (e.unstable_scheduleCallback = function (R, S, k) {
            var z = e.unstable_now();
            switch (
                (typeof k == 'object' && k !== null
                    ? ((k = k.delay),
                      (k = typeof k == 'number' && 0 < k ? z + k : z))
                    : (k = z),
                R)
            ) {
                case 1:
                    var A = -1;
                    break;
                case 2:
                    A = 250;
                    break;
                case 5:
                    A = 1073741823;
                    break;
                case 4:
                    A = 1e4;
                    break;
                default:
                    A = 5e3;
            }
            return (
                (A = k + A),
                (R = {
                    id: u++,
                    callback: S,
                    priorityLevel: R,
                    startTime: k,
                    expirationTime: A,
                    sortIndex: -1,
                }),
                k > z
                    ? ((R.sortIndex = k),
                      t(c, R),
                      n(a) === null &&
                          R === n(c) &&
                          (w ? (p(C), (C = -1)) : (w = !0), se(x, k - z)))
                    : ((R.sortIndex = A), t(a, R), y || m || ((y = !0), Q(T))),
                R
            );
        }),
        (e.unstable_shouldYield = L),
        (e.unstable_wrapCallback = function (R) {
            var S = f;
            return function () {
                var k = f;
                f = S;
                try {
                    return R.apply(this, arguments);
                } finally {
                    f = k;
                }
            };
        });
})(ph);
hh.exports = ph;
var Yv = hh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mh = ut,
    Je = Yv;
function E(e) {
    for (
        var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
        n < arguments.length;
        n++
    )
        t += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
}
var gh = new Set(),
    hi = {};
function jn(e, t) {
    ko(e, t), ko(e + 'Capture', t);
}
function ko(e, t) {
    for (hi[e] = t, e = 0; e < t.length; e++) gh.add(t[e]);
}
var Wt = !(
        typeof window > 'u' ||
        typeof window.document > 'u' ||
        typeof window.document.createElement > 'u'
    ),
    Wl = Object.prototype.hasOwnProperty,
    Xv =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Nu = {},
    Du = {};
function qv(e) {
    return Wl.call(Du, e)
        ? !0
        : Wl.call(Nu, e)
        ? !1
        : Xv.test(e)
        ? (Du[e] = !0)
        : ((Nu[e] = !0), !1);
}
function Gv(e, t, n, o) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case 'function':
        case 'symbol':
            return !0;
        case 'boolean':
            return o
                ? !1
                : n !== null
                ? !n.acceptsBooleans
                : ((e = e.toLowerCase().slice(0, 5)),
                  e !== 'data-' && e !== 'aria-');
        default:
            return !1;
    }
}
function Zv(e, t, n, o) {
    if (t === null || typeof t > 'u' || Gv(e, t, n, o)) return !0;
    if (o) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function Ne(e, t, n, o, i, r, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = o),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = r),
        (this.removeEmptyString = s);
}
var Ee = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
        Ee[e] = new Ne(e, 0, !1, e, null, !1, !1);
    });
[
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
    var t = e[0];
    Ee[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
    Ee[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
    function (e) {
        Ee[e] = new Ne(e, 2, !1, e, null, !1, !1);
    }
);
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (e) {
        Ee[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
    Ee[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
    Ee[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
    Ee[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
    Ee[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var nc = /[\-:]([a-z])/g;
function oc(e) {
    return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
        var t = e.replace(nc, oc);
        Ee[t] = new Ne(t, 1, !1, e, null, !1, !1);
    });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (e) {
        var t = e.replace(nc, oc);
        Ee[t] = new Ne(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var t = e.replace(nc, oc);
    Ee[t] = new Ne(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
    Ee[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ee.xlinkHref = new Ne(
    'xlinkHref',
    1,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
    Ee[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ic(e, t, n, o) {
    var i = Ee.hasOwnProperty(t) ? Ee[t] : null;
    (i !== null
        ? i.type !== 0
        : o ||
          !(2 < t.length) ||
          (t[0] !== 'o' && t[0] !== 'O') ||
          (t[1] !== 'n' && t[1] !== 'N')) &&
        (Zv(t, n, i, o) && (n = null),
        o || i === null
            ? qv(t) &&
              (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
            : i.mustUseProperty
            ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
            : ((t = i.attributeName),
              (o = i.attributeNamespace),
              n === null
                  ? e.removeAttribute(t)
                  : ((i = i.type),
                    (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
                    o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n))));
}
var Xt = mh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Xi = Symbol.for('react.element'),
    to = Symbol.for('react.portal'),
    no = Symbol.for('react.fragment'),
    rc = Symbol.for('react.strict_mode'),
    Kl = Symbol.for('react.profiler'),
    vh = Symbol.for('react.provider'),
    yh = Symbol.for('react.context'),
    sc = Symbol.for('react.forward_ref'),
    Ql = Symbol.for('react.suspense'),
    Yl = Symbol.for('react.suspense_list'),
    lc = Symbol.for('react.memo'),
    Jt = Symbol.for('react.lazy'),
    bh = Symbol.for('react.offscreen'),
    Bu = Symbol.iterator;
function Ho(e) {
    return e === null || typeof e != 'object'
        ? null
        : ((e = (Bu && e[Bu]) || e['@@iterator']),
          typeof e == 'function' ? e : null);
}
var oe = Object.assign,
    rl;
function qo(e) {
    if (rl === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            rl = (t && t[1]) || '';
        }
    return '\n' + rl + e;
}
var sl = !1;
function ll(e, t) {
    if (!e || sl) return '';
    sl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, 'props', {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == 'object' && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (c) {
                    var o = c;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (c) {
                    o = c;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (c) {
                o = c;
            }
            e();
        }
    } catch (c) {
        if (c && o && typeof c.stack == 'string') {
            for (
                var i = c.stack.split('\n'),
                    r = o.stack.split('\n'),
                    s = i.length - 1,
                    l = r.length - 1;
                1 <= s && 0 <= l && i[s] !== r[l];

            )
                l--;
            for (; 1 <= s && 0 <= l; s--, l--)
                if (i[s] !== r[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if ((s--, l--, 0 > l || i[s] !== r[l])) {
                                var a = '\n' + i[s].replace(' at new ', ' at ');
                                return (
                                    e.displayName &&
                                        a.includes('<anonymous>') &&
                                        (a = a.replace(
                                            '<anonymous>',
                                            e.displayName
                                        )),
                                    a
                                );
                            }
                        while (1 <= s && 0 <= l);
                    break;
                }
        }
    } finally {
        (sl = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : '') ? qo(e) : '';
}
function Jv(e) {
    switch (e.tag) {
        case 5:
            return qo(e.type);
        case 16:
            return qo('Lazy');
        case 13:
            return qo('Suspense');
        case 19:
            return qo('SuspenseList');
        case 0:
        case 2:
        case 15:
            return (e = ll(e.type, !1)), e;
        case 11:
            return (e = ll(e.type.render, !1)), e;
        case 1:
            return (e = ll(e.type, !0)), e;
        default:
            return '';
    }
}
function Xl(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
        case no:
            return 'Fragment';
        case to:
            return 'Portal';
        case Kl:
            return 'Profiler';
        case rc:
            return 'StrictMode';
        case Ql:
            return 'Suspense';
        case Yl:
            return 'SuspenseList';
    }
    if (typeof e == 'object')
        switch (e.$$typeof) {
            case yh:
                return (e.displayName || 'Context') + '.Consumer';
            case vh:
                return (e._context.displayName || 'Context') + '.Provider';
            case sc:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ''),
                        (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
                    e
                );
            case lc:
                return (
                    (t = e.displayName || null),
                    t !== null ? t : Xl(e.type) || 'Memo'
                );
            case Jt:
                (t = e._payload), (e = e._init);
                try {
                    return Xl(e(t));
                } catch (n) {}
        }
    return null;
}
function ey(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return 'Cache';
        case 9:
            return (t.displayName || 'Context') + '.Consumer';
        case 10:
            return (t._context.displayName || 'Context') + '.Provider';
        case 18:
            return 'DehydratedFragment';
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ''),
                t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
            );
        case 7:
            return 'Fragment';
        case 5:
            return t;
        case 4:
            return 'Portal';
        case 3:
            return 'Root';
        case 6:
            return 'Text';
        case 16:
            return Xl(t);
        case 8:
            return t === rc ? 'StrictMode' : 'Mode';
        case 22:
            return 'Offscreen';
        case 12:
            return 'Profiler';
        case 21:
            return 'Scope';
        case 13:
            return 'Suspense';
        case 19:
            return 'SuspenseList';
        case 25:
            return 'TracingMarker';
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == 'function') return t.displayName || t.name || null;
            if (typeof t == 'string') return t;
    }
    return null;
}
function mn(e) {
    switch (typeof e) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
            return e;
        case 'object':
            return e;
        default:
            return '';
    }
}
function wh(e) {
    var t = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === 'input' &&
        (t === 'checkbox' || t === 'radio')
    );
}
function ty(e) {
    var t = wh(e) ? 'checked' : 'value',
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        o = '' + e[t];
    if (
        !e.hasOwnProperty(t) &&
        typeof n < 'u' &&
        typeof n.get == 'function' &&
        typeof n.set == 'function'
    ) {
        var i = n.get,
            r = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return i.call(this);
                },
                set: function (s) {
                    (o = '' + s), r.call(this, s);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return o;
                },
                setValue: function (s) {
                    o = '' + s;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function qi(e) {
    e._valueTracker || (e._valueTracker = ty(e));
}
function xh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        o = '';
    return (
        e && (o = wh(e) ? (e.checked ? 'true' : 'false') : e.value),
        (e = o),
        e !== n ? (t.setValue(e), !0) : !1
    );
}
function Lr(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
        return null;
    try {
        return e.activeElement || e.body;
    } catch (t) {
        return e.body;
    }
}
function ql(e, t) {
    var n = t.checked;
    return oe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n != null ? n : e._wrapperState.initialChecked,
    });
}
function ju(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
        o = t.checked != null ? t.checked : t.defaultChecked;
    (n = mn(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: o,
            initialValue: n,
            controlled:
                t.type === 'checkbox' || t.type === 'radio'
                    ? t.checked != null
                    : t.value != null,
        });
}
function $h(e, t) {
    (t = t.checked), t != null && ic(e, 'checked', t, !1);
}
function Gl(e, t) {
    $h(e, t);
    var n = mn(t.value),
        o = t.type;
    if (n != null)
        o === 'number'
            ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
    else if (o === 'submit' || o === 'reset') {
        e.removeAttribute('value');
        return;
    }
    t.hasOwnProperty('value')
        ? Zl(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && Zl(e, t.type, mn(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked);
}
function Hu(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var o = t.type;
        if (
            !(
                (o !== 'submit' && o !== 'reset') ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return;
        (t = '' + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (n = e.name),
        n !== '' && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== '' && (e.name = n);
}
function Zl(e, t, n) {
    (t !== 'number' || Lr(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Go = Array.isArray;
function po(e, t, n, o) {
    if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            (i = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && o && (e[n].defaultSelected = !0);
    } else {
        for (n = '' + mn(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                (e[i].selected = !0), o && (e[i].defaultSelected = !0);
                return;
            }
            t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
    }
}
function Jl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
    return oe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: '' + e._wrapperState.initialValue,
    });
}
function Fu(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(E(92));
            if (Go(n)) {
                if (1 < n.length) throw Error(E(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ''), (n = t);
    }
    e._wrapperState = { initialValue: mn(n) };
}
function kh(e, t) {
    var n = mn(t.value),
        o = mn(t.defaultValue);
    n != null &&
        ((n = '' + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        o != null && (e.defaultValue = '' + o);
}
function Uu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Eh(e) {
    switch (e) {
        case 'svg':
            return 'http://www.w3.org/2000/svg';
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
        default:
            return 'http://www.w3.org/1999/xhtml';
    }
}
function ea(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
        ? Eh(t)
        : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
}
var Gi,
    Sh = (function (e) {
        return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
            ? function (t, n, o, i) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, o, i);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
            e.innerHTML = t;
        else {
            for (
                Gi = Gi || document.createElement('div'),
                    Gi.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                    t = Gi.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function pi(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var ni = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    ny = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(ni).forEach(function (e) {
    ny.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ni[t] = ni[e]);
    });
});
function Ch(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
        ? ''
        : n || typeof t != 'number' || t === 0 || (ni.hasOwnProperty(e) && ni[e])
        ? ('' + t).trim()
        : t + 'px';
}
function Th(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var o = n.indexOf('--') === 0,
                i = Ch(n, t[n], o);
            n === 'float' && (n = 'cssFloat'), o ? e.setProperty(n, i) : (e[n] = i);
        }
}
var oy = oe(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function ta(e, t) {
    if (t) {
        if (oy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(E(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(E(60));
            if (
                typeof t.dangerouslySetInnerHTML != 'object' ||
                !('__html' in t.dangerouslySetInnerHTML)
            )
                throw Error(E(61));
        }
        if (t.style != null && typeof t.style != 'object') throw Error(E(62));
    }
}
function na(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
    switch (e) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
            return !1;
        default:
            return !0;
    }
}
var oa = null;
function ac(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var ia = null,
    mo = null,
    go = null;
function Vu(e) {
    if ((e = Di(e))) {
        if (typeof ia != 'function') throw Error(E(280));
        var t = e.stateNode;
        t && ((t = bs(t)), ia(e.stateNode, e.type, t));
    }
}
function Ph(e) {
    mo ? (go ? go.push(e) : (go = [e])) : (mo = e);
}
function Rh() {
    if (mo) {
        var e = mo,
            t = go;
        if (((go = mo = null), Vu(e), t)) for (e = 0; e < t.length; e++) Vu(t[e]);
    }
}
function _h(e, t) {
    return e(t);
}
function Lh() {}
var al = !1;
function Ih(e, t, n) {
    if (al) return e(t, n);
    al = !0;
    try {
        return _h(e, t, n);
    } finally {
        (al = !1), (mo !== null || go !== null) && (Lh(), Rh());
    }
}
function mi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var o = bs(n);
    if (o === null) return null;
    n = o[t];
    e: switch (t) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
            (o = !o.disabled) ||
                ((e = e.type),
                (o = !(
                    e === 'button' ||
                    e === 'input' ||
                    e === 'select' ||
                    e === 'textarea'
                ))),
                (e = !o);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function') throw Error(E(231, t, typeof n));
    return n;
}
var ra = !1;
if (Wt)
    try {
        var Fo = {};
        Object.defineProperty(Fo, 'passive', {
            get: function () {
                ra = !0;
            },
        }),
            window.addEventListener('test', Fo, Fo),
            window.removeEventListener('test', Fo, Fo);
    } catch (e) {
        ra = !1;
    }
function iy(e, t, n, o, i, r, s, l, a) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c);
    } catch (u) {
        this.onError(u);
    }
}
var oi = !1,
    Ir = null,
    Or = !1,
    sa = null,
    ry = {
        onError: function (e) {
            (oi = !0), (Ir = e);
        },
    };
function sy(e, t, n, o, i, r, s, l, a) {
    (oi = !1), (Ir = null), iy.apply(ry, arguments);
}
function ly(e, t, n, o, i, r, s, l, a) {
    if ((sy.apply(this, arguments), oi)) {
        if (oi) {
            var c = Ir;
            (oi = !1), (Ir = null);
        } else throw Error(E(198));
        Or || ((Or = !0), (sa = c));
    }
}
function Hn(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function Oh(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (
            (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated;
    }
    return null;
}
function Wu(e) {
    if (Hn(e) !== e) throw Error(E(188));
}
function ay(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = Hn(e)), t === null)) throw Error(E(188));
        return t !== e ? null : e;
    }
    for (var n = e, o = t; ; ) {
        var i = n.return;
        if (i === null) break;
        var r = i.alternate;
        if (r === null) {
            if (((o = i.return), o !== null)) {
                n = o;
                continue;
            }
            break;
        }
        if (i.child === r.child) {
            for (r = i.child; r; ) {
                if (r === n) return Wu(i), e;
                if (r === o) return Wu(i), t;
                r = r.sibling;
            }
            throw Error(E(188));
        }
        if (n.return !== o.return) (n = i), (o = r);
        else {
            for (var s = !1, l = i.child; l; ) {
                if (l === n) {
                    (s = !0), (n = i), (o = r);
                    break;
                }
                if (l === o) {
                    (s = !0), (o = i), (n = r);
                    break;
                }
                l = l.sibling;
            }
            if (!s) {
                for (l = r.child; l; ) {
                    if (l === n) {
                        (s = !0), (n = r), (o = i);
                        break;
                    }
                    if (l === o) {
                        (s = !0), (o = r), (n = i);
                        break;
                    }
                    l = l.sibling;
                }
                if (!s) throw Error(E(189));
            }
        }
        if (n.alternate !== o) throw Error(E(190));
    }
    if (n.tag !== 3) throw Error(E(188));
    return n.stateNode.current === n ? e : t;
}
function Ah(e) {
    return (e = ay(e)), e !== null ? zh(e) : null;
}
function zh(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = zh(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var Mh = Je.unstable_scheduleCallback,
    Ku = Je.unstable_cancelCallback,
    cy = Je.unstable_shouldYield,
    uy = Je.unstable_requestPaint,
    ce = Je.unstable_now,
    dy = Je.unstable_getCurrentPriorityLevel,
    cc = Je.unstable_ImmediatePriority,
    Nh = Je.unstable_UserBlockingPriority,
    Ar = Je.unstable_NormalPriority,
    fy = Je.unstable_LowPriority,
    Dh = Je.unstable_IdlePriority,
    ms = null,
    At = null;
function hy(e) {
    if (At && typeof At.onCommitFiberRoot == 'function')
        try {
            At.onCommitFiberRoot(ms, e, void 0, (e.current.flags & 128) === 128);
        } catch (t) {}
}
var $t = Math.clz32 ? Math.clz32 : gy,
    py = Math.log,
    my = Math.LN2;
function gy(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((py(e) / my) | 0)) | 0;
}
var Zi = 64,
    Ji = 4194304;
function Zo(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function zr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var o = 0,
        i = e.suspendedLanes,
        r = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var l = s & ~i;
        l !== 0 ? (o = Zo(l)) : ((r &= s), r !== 0 && (o = Zo(r)));
    } else (s = n & ~i), s !== 0 ? (o = Zo(s)) : r !== 0 && (o = Zo(r));
    if (o === 0) return 0;
    if (
        t !== 0 &&
        t !== o &&
        !(t & i) &&
        ((i = o & -o), (r = t & -t), i >= r || (i === 16 && (r & 4194240) !== 0))
    )
        return t;
    if ((o & 4 && (o |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= o; 0 < t; )
            (n = 31 - $t(t)), (i = 1 << n), (o |= e[n]), (t &= ~i);
    return o;
}
function vy(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function yy(e, t) {
    for (
        var n = e.suspendedLanes,
            o = e.pingedLanes,
            i = e.expirationTimes,
            r = e.pendingLanes;
        0 < r;

    ) {
        var s = 31 - $t(r),
            l = 1 << s,
            a = i[s];
        a === -1
            ? (!(l & n) || l & o) && (i[s] = vy(l, t))
            : a <= t && (e.expiredLanes |= l),
            (r &= ~l);
    }
}
function la(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function Bh() {
    var e = Zi;
    return (Zi <<= 1), !(Zi & 4194240) && (Zi = 64), e;
}
function cl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Mi(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - $t(t)),
        (e[t] = n);
}
function by(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var o = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - $t(n),
            r = 1 << i;
        (t[i] = 0), (o[i] = -1), (e[i] = -1), (n &= ~r);
    }
}
function uc(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var o = 31 - $t(n),
            i = 1 << o;
        (i & t) | (e[o] & t) && (e[o] |= t), (n &= ~i);
    }
}
var W = 0;
function jh(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Hh,
    dc,
    Fh,
    Uh,
    Vh,
    aa = !1,
    er = [],
    ln = null,
    an = null,
    cn = null,
    gi = new Map(),
    vi = new Map(),
    tn = [],
    wy =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' '
        );
function Qu(e, t) {
    switch (e) {
        case 'focusin':
        case 'focusout':
            ln = null;
            break;
        case 'dragenter':
        case 'dragleave':
            an = null;
            break;
        case 'mouseover':
        case 'mouseout':
            cn = null;
            break;
        case 'pointerover':
        case 'pointerout':
            gi.delete(t.pointerId);
            break;
        case 'gotpointercapture':
        case 'lostpointercapture':
            vi.delete(t.pointerId);
    }
}
function Uo(e, t, n, o, i, r) {
    return e === null || e.nativeEvent !== r
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: o,
              nativeEvent: r,
              targetContainers: [i],
          }),
          t !== null && ((t = Di(t)), t !== null && dc(t)),
          e)
        : ((e.eventSystemFlags |= o),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
}
function xy(e, t, n, o, i) {
    switch (t) {
        case 'focusin':
            return (ln = Uo(ln, e, t, n, o, i)), !0;
        case 'dragenter':
            return (an = Uo(an, e, t, n, o, i)), !0;
        case 'mouseover':
            return (cn = Uo(cn, e, t, n, o, i)), !0;
        case 'pointerover':
            var r = i.pointerId;
            return gi.set(r, Uo(gi.get(r) || null, e, t, n, o, i)), !0;
        case 'gotpointercapture':
            return (
                (r = i.pointerId),
                vi.set(r, Uo(vi.get(r) || null, e, t, n, o, i)),
                !0
            );
    }
    return !1;
}
function Wh(e) {
    var t = Sn(e.target);
    if (t !== null) {
        var n = Hn(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = Oh(n)), t !== null)) {
                    (e.blockedOn = t),
                        Vh(e.priority, function () {
                            Fh(n);
                        });
                    return;
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function br(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = ca(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var o = new n.constructor(n.type, n);
            (oa = o), n.target.dispatchEvent(o), (oa = null);
        } else return (t = Di(n)), t !== null && dc(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function Yu(e, t, n) {
    br(e) && n.delete(t);
}
function $y() {
    (aa = !1),
        ln !== null && br(ln) && (ln = null),
        an !== null && br(an) && (an = null),
        cn !== null && br(cn) && (cn = null),
        gi.forEach(Yu),
        vi.forEach(Yu);
}
function Vo(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        aa ||
            ((aa = !0),
            Je.unstable_scheduleCallback(Je.unstable_NormalPriority, $y)));
}
function yi(e) {
    function t(i) {
        return Vo(i, e);
    }
    if (0 < er.length) {
        Vo(er[0], e);
        for (var n = 1; n < er.length; n++) {
            var o = er[n];
            o.blockedOn === e && (o.blockedOn = null);
        }
    }
    for (
        ln !== null && Vo(ln, e),
            an !== null && Vo(an, e),
            cn !== null && Vo(cn, e),
            gi.forEach(t),
            vi.forEach(t),
            n = 0;
        n < tn.length;
        n++
    )
        (o = tn[n]), o.blockedOn === e && (o.blockedOn = null);
    for (; 0 < tn.length && ((n = tn[0]), n.blockedOn === null); )
        Wh(n), n.blockedOn === null && tn.shift();
}
var vo = Xt.ReactCurrentBatchConfig,
    Mr = !0;
function ky(e, t, n, o) {
    var i = W,
        r = vo.transition;
    vo.transition = null;
    try {
        (W = 1), fc(e, t, n, o);
    } finally {
        (W = i), (vo.transition = r);
    }
}
function Ey(e, t, n, o) {
    var i = W,
        r = vo.transition;
    vo.transition = null;
    try {
        (W = 4), fc(e, t, n, o);
    } finally {
        (W = i), (vo.transition = r);
    }
}
function fc(e, t, n, o) {
    if (Mr) {
        var i = ca(e, t, n, o);
        if (i === null) bl(e, t, o, Nr, n), Qu(e, o);
        else if (xy(i, e, t, n, o)) o.stopPropagation();
        else if ((Qu(e, o), t & 4 && -1 < wy.indexOf(e))) {
            for (; i !== null; ) {
                var r = Di(i);
                if (
                    (r !== null && Hh(r),
                    (r = ca(e, t, n, o)),
                    r === null && bl(e, t, o, Nr, n),
                    r === i)
                )
                    break;
                i = r;
            }
            i !== null && o.stopPropagation();
        } else bl(e, t, o, null, n);
    }
}
var Nr = null;
function ca(e, t, n, o) {
    if (((Nr = null), (e = ac(o)), (e = Sn(e)), e !== null))
        if (((t = Hn(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = Oh(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (Nr = e), null;
}
function Kh(e) {
    switch (e) {
        case 'cancel':
        case 'click':
        case 'close':
        case 'contextmenu':
        case 'copy':
        case 'cut':
        case 'auxclick':
        case 'dblclick':
        case 'dragend':
        case 'dragstart':
        case 'drop':
        case 'focusin':
        case 'focusout':
        case 'input':
        case 'invalid':
        case 'keydown':
        case 'keypress':
        case 'keyup':
        case 'mousedown':
        case 'mouseup':
        case 'paste':
        case 'pause':
        case 'play':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
        case 'ratechange':
        case 'reset':
        case 'resize':
        case 'seeked':
        case 'submit':
        case 'touchcancel':
        case 'touchend':
        case 'touchstart':
        case 'volumechange':
        case 'change':
        case 'selectionchange':
        case 'textInput':
        case 'compositionstart':
        case 'compositionend':
        case 'compositionupdate':
        case 'beforeblur':
        case 'afterblur':
        case 'beforeinput':
        case 'blur':
        case 'fullscreenchange':
        case 'focus':
        case 'hashchange':
        case 'popstate':
        case 'select':
        case 'selectstart':
            return 1;
        case 'drag':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'mousemove':
        case 'mouseout':
        case 'mouseover':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'scroll':
        case 'toggle':
        case 'touchmove':
        case 'wheel':
        case 'mouseenter':
        case 'mouseleave':
        case 'pointerenter':
        case 'pointerleave':
            return 4;
        case 'message':
            switch (dy()) {
                case cc:
                    return 1;
                case Nh:
                    return 4;
                case Ar:
                case fy:
                    return 16;
                case Dh:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var on = null,
    hc = null,
    wr = null;
function Qh() {
    if (wr) return wr;
    var e,
        t = hc,
        n = t.length,
        o,
        i = 'value' in on ? on.value : on.textContent,
        r = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var s = n - e;
    for (o = 1; o <= s && t[n - o] === i[r - o]; o++);
    return (wr = i.slice(e, 1 < o ? 1 - o : void 0));
}
function xr(e) {
    var t = e.keyCode;
    return (
        'charCode' in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function tr() {
    return !0;
}
function Xu() {
    return !1;
}
function tt(e) {
    function t(n, o, i, r, s) {
        (this._reactName = n),
            (this._targetInst = i),
            (this.type = o),
            (this.nativeEvent = r),
            (this.target = s),
            (this.currentTarget = null);
        for (var l in e)
            e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(r) : r[l]));
        return (
            (this.isDefaultPrevented = (
                r.defaultPrevented != null
                    ? r.defaultPrevented
                    : r.returnValue === !1
            )
                ? tr
                : Xu),
            (this.isPropagationStopped = Xu),
            this
        );
    }
    return (
        oe(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
                    (this.isDefaultPrevented = tr));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != 'unknown' &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = tr));
            },
            persist: function () {},
            isPersistent: tr,
        }),
        t
    );
}
var zo = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    pc = tt(zo),
    Ni = oe({}, zo, { view: 0, detail: 0 }),
    Sy = tt(Ni),
    ul,
    dl,
    Wo,
    gs = oe({}, Ni, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: mc,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return 'movementX' in e
                ? e.movementX
                : (e !== Wo &&
                      (Wo && e.type === 'mousemove'
                          ? ((ul = e.screenX - Wo.screenX),
                            (dl = e.screenY - Wo.screenY))
                          : (dl = ul = 0),
                      (Wo = e)),
                  ul);
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : dl;
        },
    }),
    qu = tt(gs),
    Cy = oe({}, gs, { dataTransfer: 0 }),
    Ty = tt(Cy),
    Py = oe({}, Ni, { relatedTarget: 0 }),
    fl = tt(Py),
    Ry = oe({}, zo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _y = tt(Ry),
    Ly = oe({}, zo, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
    }),
    Iy = tt(Ly),
    Oy = oe({}, zo, { data: 0 }),
    Gu = tt(Oy),
    Ay = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
    },
    zy = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
    },
    My = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function Ny(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = My[e]) ? !!t[e] : !1;
}
function mc() {
    return Ny;
}
var Dy = oe({}, Ni, {
        key: function (e) {
            if (e.key) {
                var t = Ay[e.key] || e.key;
                if (t !== 'Unidentified') return t;
            }
            return e.type === 'keypress'
                ? ((e = xr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
                : e.type === 'keydown' || e.type === 'keyup'
                ? zy[e.keyCode] || 'Unidentified'
                : '';
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: mc,
        charCode: function (e) {
            return e.type === 'keypress' ? xr(e) : 0;
        },
        keyCode: function (e) {
            return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === 'keypress'
                ? xr(e)
                : e.type === 'keydown' || e.type === 'keyup'
                ? e.keyCode
                : 0;
        },
    }),
    By = tt(Dy),
    jy = oe({}, gs, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    Zu = tt(jy),
    Hy = oe({}, Ni, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: mc,
    }),
    Fy = tt(Hy),
    Uy = oe({}, zo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Vy = tt(Uy),
    Wy = oe({}, gs, {
        deltaX: function (e) {
            return 'deltaX' in e
                ? e.deltaX
                : 'wheelDeltaX' in e
                ? -e.wheelDeltaX
                : 0;
        },
        deltaY: function (e) {
            return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                ? -e.wheelDeltaY
                : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    Ky = tt(Wy),
    Qy = [9, 13, 27, 32],
    gc = Wt && 'CompositionEvent' in window,
    ii = null;
Wt && 'documentMode' in document && (ii = document.documentMode);
var Yy = Wt && 'TextEvent' in window && !ii,
    Yh = Wt && (!gc || (ii && 8 < ii && 11 >= ii)),
    Ju = String.fromCharCode(32),
    ed = !1;
function Xh(e, t) {
    switch (e) {
        case 'keyup':
            return Qy.indexOf(t.keyCode) !== -1;
        case 'keydown':
            return t.keyCode !== 229;
        case 'keypress':
        case 'mousedown':
        case 'focusout':
            return !0;
        default:
            return !1;
    }
}
function qh(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var oo = !1;
function Xy(e, t) {
    switch (e) {
        case 'compositionend':
            return qh(t);
        case 'keypress':
            return t.which !== 32 ? null : ((ed = !0), Ju);
        case 'textInput':
            return (e = t.data), e === Ju && ed ? null : e;
        default:
            return null;
    }
}
function qy(e, t) {
    if (oo)
        return e === 'compositionend' || (!gc && Xh(e, t))
            ? ((e = Qh()), (wr = hc = on = null), (oo = !1), e)
            : null;
    switch (e) {
        case 'paste':
            return null;
        case 'keypress':
            if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case 'compositionend':
            return Yh && t.locale !== 'ko' ? null : t.data;
        default:
            return null;
    }
}
var Gy = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function td(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Gy[e.type] : t === 'textarea';
}
function Gh(e, t, n, o) {
    Ph(o),
        (t = Dr(t, 'onChange')),
        0 < t.length &&
            ((n = new pc('onChange', 'change', null, n, o)),
            e.push({ event: n, listeners: t }));
}
var ri = null,
    bi = null;
function Zy(e) {
    ap(e, 0);
}
function vs(e) {
    var t = so(e);
    if (xh(t)) return e;
}
function Jy(e, t) {
    if (e === 'change') return t;
}
var Zh = !1;
if (Wt) {
    var hl;
    if (Wt) {
        var pl = 'oninput' in document;
        if (!pl) {
            var nd = document.createElement('div');
            nd.setAttribute('oninput', 'return;'),
                (pl = typeof nd.oninput == 'function');
        }
        hl = pl;
    } else hl = !1;
    Zh = hl && (!document.documentMode || 9 < document.documentMode);
}
function od() {
    ri && (ri.detachEvent('onpropertychange', Jh), (bi = ri = null));
}
function Jh(e) {
    if (e.propertyName === 'value' && vs(bi)) {
        var t = [];
        Gh(t, bi, e, ac(e)), Ih(Zy, t);
    }
}
function e0(e, t, n) {
    e === 'focusin'
        ? (od(), (ri = t), (bi = n), ri.attachEvent('onpropertychange', Jh))
        : e === 'focusout' && od();
}
function t0(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return vs(bi);
}
function n0(e, t) {
    if (e === 'click') return vs(t);
}
function o0(e, t) {
    if (e === 'input' || e === 'change') return vs(t);
}
function i0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ct = typeof Object.is == 'function' ? Object.is : i0;
function wi(e, t) {
    if (Ct(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
        return !1;
    var n = Object.keys(e),
        o = Object.keys(t);
    if (n.length !== o.length) return !1;
    for (o = 0; o < n.length; o++) {
        var i = n[o];
        if (!Wl.call(t, i) || !Ct(e[i], t[i])) return !1;
    }
    return !0;
}
function id(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function rd(e, t) {
    var n = id(e);
    e = 0;
    for (var o; n; ) {
        if (n.nodeType === 3) {
            if (((o = e + n.textContent.length), e <= t && o >= t))
                return { node: n, offset: t - e };
            e = o;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = id(n);
    }
}
function ep(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
            ? ep(e, t.parentNode)
            : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : !1
        : !1;
}
function tp() {
    for (var e = window, t = Lr(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == 'string';
        } catch (o) {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Lr(e.document);
    }
    return t;
}
function vc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === 'input' &&
            (e.type === 'text' ||
                e.type === 'search' ||
                e.type === 'tel' ||
                e.type === 'url' ||
                e.type === 'password')) ||
            t === 'textarea' ||
            e.contentEditable === 'true')
    );
}
function r0(e) {
    var t = tp(),
        n = e.focusedElem,
        o = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ep(n.ownerDocument.documentElement, n)) {
        if (o !== null && vc(n)) {
            if (
                ((t = o.start),
                (e = o.end),
                e === void 0 && (e = t),
                'selectionStart' in n)
            )
                (n.selectionStart = t),
                    (n.selectionEnd = Math.min(e, n.value.length));
            else if (
                ((e =
                    ((t = n.ownerDocument || document) && t.defaultView) || window),
                e.getSelection)
            ) {
                e = e.getSelection();
                var i = n.textContent.length,
                    r = Math.min(o.start, i);
                (o = o.end === void 0 ? r : Math.min(o.end, i)),
                    !e.extend && r > o && ((i = o), (o = r), (r = i)),
                    (i = rd(n, r));
                var s = rd(n, o);
                i &&
                    s &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== i.node ||
                        e.anchorOffset !== i.offset ||
                        e.focusNode !== s.node ||
                        e.focusOffset !== s.offset) &&
                    ((t = t.createRange()),
                    t.setStart(i.node, i.offset),
                    e.removeAllRanges(),
                    r > o
                        ? (e.addRange(t), e.extend(s.node, s.offset))
                        : (t.setEnd(s.node, s.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
            (e = t[n]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
    }
}
var s0 = Wt && 'documentMode' in document && 11 >= document.documentMode,
    io = null,
    ua = null,
    si = null,
    da = !1;
function sd(e, t, n) {
    var o = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    da ||
        io == null ||
        io !== Lr(o) ||
        ((o = io),
        'selectionStart' in o && vc(o)
            ? (o = { start: o.selectionStart, end: o.selectionEnd })
            : ((o = (
                  (o.ownerDocument && o.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (o = {
                  anchorNode: o.anchorNode,
                  anchorOffset: o.anchorOffset,
                  focusNode: o.focusNode,
                  focusOffset: o.focusOffset,
              })),
        (si && wi(si, o)) ||
            ((si = o),
            (o = Dr(ua, 'onSelect')),
            0 < o.length &&
                ((t = new pc('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: o }),
                (t.target = io))));
}
function nr(e, t) {
    var n = {};
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n['Webkit' + e] = 'webkit' + t),
        (n['Moz' + e] = 'moz' + t),
        n
    );
}
var ro = {
        animationend: nr('Animation', 'AnimationEnd'),
        animationiteration: nr('Animation', 'AnimationIteration'),
        animationstart: nr('Animation', 'AnimationStart'),
        transitionend: nr('Transition', 'TransitionEnd'),
    },
    ml = {},
    np = {};
Wt &&
    ((np = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete ro.animationend.animation,
        delete ro.animationiteration.animation,
        delete ro.animationstart.animation),
    'TransitionEvent' in window || delete ro.transitionend.transition);
function ys(e) {
    if (ml[e]) return ml[e];
    if (!ro[e]) return e;
    var t = ro[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in np) return (ml[e] = t[n]);
    return e;
}
var op = ys('animationend'),
    ip = ys('animationiteration'),
    rp = ys('animationstart'),
    sp = ys('transitionend'),
    lp = new Map(),
    ld =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' '
        );
function bn(e, t) {
    lp.set(e, t), jn(t, [e]);
}
for (var gl = 0; gl < ld.length; gl++) {
    var vl = ld[gl],
        l0 = vl.toLowerCase(),
        a0 = vl[0].toUpperCase() + vl.slice(1);
    bn(l0, 'on' + a0);
}
bn(op, 'onAnimationEnd');
bn(ip, 'onAnimationIteration');
bn(rp, 'onAnimationStart');
bn('dblclick', 'onDoubleClick');
bn('focusin', 'onFocus');
bn('focusout', 'onBlur');
bn(sp, 'onTransitionEnd');
ko('onMouseEnter', ['mouseout', 'mouseover']);
ko('onMouseLeave', ['mouseout', 'mouseover']);
ko('onPointerEnter', ['pointerout', 'pointerover']);
ko('onPointerLeave', ['pointerout', 'pointerover']);
jn(
    'onChange',
    'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
jn(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
    )
);
jn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
jn(
    'onCompositionEnd',
    'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
jn(
    'onCompositionStart',
    'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
jn(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Jo =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' '
        ),
    c0 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Jo));
function ad(e, t, n) {
    var o = e.type || 'unknown-event';
    (e.currentTarget = n), ly(o, t, void 0, e), (e.currentTarget = null);
}
function ap(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var o = e[n],
            i = o.event;
        o = o.listeners;
        e: {
            var r = void 0;
            if (t)
                for (var s = o.length - 1; 0 <= s; s--) {
                    var l = o[s],
                        a = l.instance,
                        c = l.currentTarget;
                    if (((l = l.listener), a !== r && i.isPropagationStopped()))
                        break e;
                    ad(i, l, c), (r = a);
                }
            else
                for (s = 0; s < o.length; s++) {
                    if (
                        ((l = o[s]),
                        (a = l.instance),
                        (c = l.currentTarget),
                        (l = l.listener),
                        a !== r && i.isPropagationStopped())
                    )
                        break e;
                    ad(i, l, c), (r = a);
                }
        }
    }
    if (Or) throw ((e = sa), (Or = !1), (sa = null), e);
}
function G(e, t) {
    var n = t[ga];
    n === void 0 && (n = t[ga] = new Set());
    var o = e + '__bubble';
    n.has(o) || (cp(t, e, 2, !1), n.add(o));
}
function yl(e, t, n) {
    var o = 0;
    t && (o |= 4), cp(n, e, o, t);
}
var or = '_reactListening' + Math.random().toString(36).slice(2);
function xi(e) {
    if (!e[or]) {
        (e[or] = !0),
            gh.forEach(function (n) {
                n !== 'selectionchange' && (c0.has(n) || yl(n, !1, e), yl(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[or] || ((t[or] = !0), yl('selectionchange', !1, t));
    }
}
function cp(e, t, n, o) {
    switch (Kh(t)) {
        case 1:
            var i = ky;
            break;
        case 4:
            i = Ey;
            break;
        default:
            i = fc;
    }
    (n = i.bind(null, t, n, e)),
        (i = void 0),
        !ra ||
            (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
            (i = !0),
        o
            ? i !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
            : i !== void 0
            ? e.addEventListener(t, n, { passive: i })
            : e.addEventListener(t, n, !1);
}
function bl(e, t, n, o, i) {
    var r = o;
    if (!(t & 1) && !(t & 2) && o !== null)
        e: for (;;) {
            if (o === null) return;
            var s = o.tag;
            if (s === 3 || s === 4) {
                var l = o.stateNode.containerInfo;
                if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
                if (s === 4)
                    for (s = o.return; s !== null; ) {
                        var a = s.tag;
                        if (
                            (a === 3 || a === 4) &&
                            ((a = s.stateNode.containerInfo),
                            a === i || (a.nodeType === 8 && a.parentNode === i))
                        )
                            return;
                        s = s.return;
                    }
                for (; l !== null; ) {
                    if (((s = Sn(l)), s === null)) return;
                    if (((a = s.tag), a === 5 || a === 6)) {
                        o = r = s;
                        continue e;
                    }
                    l = l.parentNode;
                }
            }
            o = o.return;
        }
    Ih(function () {
        var c = r,
            u = ac(n),
            d = [];
        e: {
            var f = lp.get(e);
            if (f !== void 0) {
                var m = pc,
                    y = e;
                switch (e) {
                    case 'keypress':
                        if (xr(n) === 0) break e;
                    case 'keydown':
                    case 'keyup':
                        m = By;
                        break;
                    case 'focusin':
                        (y = 'focus'), (m = fl);
                        break;
                    case 'focusout':
                        (y = 'blur'), (m = fl);
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        m = fl;
                        break;
                    case 'click':
                        if (n.button === 2) break e;
                    case 'auxclick':
                    case 'dblclick':
                    case 'mousedown':
                    case 'mousemove':
                    case 'mouseup':
                    case 'mouseout':
                    case 'mouseover':
                    case 'contextmenu':
                        m = qu;
                        break;
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        m = Ty;
                        break;
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        m = Fy;
                        break;
                    case op:
                    case ip:
                    case rp:
                        m = _y;
                        break;
                    case sp:
                        m = Vy;
                        break;
                    case 'scroll':
                        m = Sy;
                        break;
                    case 'wheel':
                        m = Ky;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        m = Iy;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        m = Zu;
                }
                var w = (t & 4) !== 0,
                    O = !w && e === 'scroll',
                    p = w ? (f !== null ? f + 'Capture' : null) : f;
                w = [];
                for (var h = c, g; h !== null; ) {
                    g = h;
                    var x = g.stateNode;
                    if (
                        (g.tag === 5 &&
                            x !== null &&
                            ((g = x),
                            p !== null &&
                                ((x = mi(h, p)), x != null && w.push($i(h, x, g)))),
                        O)
                    )
                        break;
                    h = h.return;
                }
                0 < w.length &&
                    ((f = new m(f, y, null, n, u)),
                    d.push({ event: f, listeners: w }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((f = e === 'mouseover' || e === 'pointerover'),
                    (m = e === 'mouseout' || e === 'pointerout'),
                    f &&
                        n !== oa &&
                        (y = n.relatedTarget || n.fromElement) &&
                        (Sn(y) || y[Kt]))
                )
                    break e;
                if (
                    (m || f) &&
                    ((f =
                        u.window === u
                            ? u
                            : (f = u.ownerDocument)
                            ? f.defaultView || f.parentWindow
                            : window),
                    m
                        ? ((y = n.relatedTarget || n.toElement),
                          (m = c),
                          (y = y ? Sn(y) : null),
                          y !== null &&
                              ((O = Hn(y)),
                              y !== O || (y.tag !== 5 && y.tag !== 6)) &&
                              (y = null))
                        : ((m = null), (y = c)),
                    m !== y)
                ) {
                    if (
                        ((w = qu),
                        (x = 'onMouseLeave'),
                        (p = 'onMouseEnter'),
                        (h = 'mouse'),
                        (e === 'pointerout' || e === 'pointerover') &&
                            ((w = Zu),
                            (x = 'onPointerLeave'),
                            (p = 'onPointerEnter'),
                            (h = 'pointer')),
                        (O = m == null ? f : so(m)),
                        (g = y == null ? f : so(y)),
                        (f = new w(x, h + 'leave', m, n, u)),
                        (f.target = O),
                        (f.relatedTarget = g),
                        (x = null),
                        Sn(u) === c &&
                            ((w = new w(p, h + 'enter', y, n, u)),
                            (w.target = g),
                            (w.relatedTarget = O),
                            (x = w)),
                        (O = x),
                        m && y)
                    )
                        t: {
                            for (w = m, p = y, h = 0, g = w; g; g = Qn(g)) h++;
                            for (g = 0, x = p; x; x = Qn(x)) g++;
                            for (; 0 < h - g; ) (w = Qn(w)), h--;
                            for (; 0 < g - h; ) (p = Qn(p)), g--;
                            for (; h--; ) {
                                if (w === p || (p !== null && w === p.alternate))
                                    break t;
                                (w = Qn(w)), (p = Qn(p));
                            }
                            w = null;
                        }
                    else w = null;
                    m !== null && cd(d, f, m, w, !1),
                        y !== null && O !== null && cd(d, O, y, w, !0);
                }
            }
            e: {
                if (
                    ((f = c ? so(c) : window),
                    (m = f.nodeName && f.nodeName.toLowerCase()),
                    m === 'select' || (m === 'input' && f.type === 'file'))
                )
                    var T = Jy;
                else if (td(f))
                    if (Zh) T = o0;
                    else {
                        T = t0;
                        var P = e0;
                    }
                else
                    (m = f.nodeName) &&
                        m.toLowerCase() === 'input' &&
                        (f.type === 'checkbox' || f.type === 'radio') &&
                        (T = n0);
                if (T && (T = T(e, c))) {
                    Gh(d, T, n, u);
                    break e;
                }
                P && P(e, f, c),
                    e === 'focusout' &&
                        (P = f._wrapperState) &&
                        P.controlled &&
                        f.type === 'number' &&
                        Zl(f, 'number', f.value);
            }
            switch (((P = c ? so(c) : window), e)) {
                case 'focusin':
                    (td(P) || P.contentEditable === 'true') &&
                        ((io = P), (ua = c), (si = null));
                    break;
                case 'focusout':
                    si = ua = io = null;
                    break;
                case 'mousedown':
                    da = !0;
                    break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    (da = !1), sd(d, n, u);
                    break;
                case 'selectionchange':
                    if (s0) break;
                case 'keydown':
                case 'keyup':
                    sd(d, n, u);
            }
            var $;
            if (gc)
                e: {
                    switch (e) {
                        case 'compositionstart':
                            var C = 'onCompositionStart';
                            break e;
                        case 'compositionend':
                            C = 'onCompositionEnd';
                            break e;
                        case 'compositionupdate':
                            C = 'onCompositionUpdate';
                            break e;
                    }
                    C = void 0;
                }
            else
                oo
                    ? Xh(e, n) && (C = 'onCompositionEnd')
                    : e === 'keydown' &&
                      n.keyCode === 229 &&
                      (C = 'onCompositionStart');
            C &&
                (Yh &&
                    n.locale !== 'ko' &&
                    (oo || C !== 'onCompositionStart'
                        ? C === 'onCompositionEnd' && oo && ($ = Qh())
                        : ((on = u),
                          (hc = 'value' in on ? on.value : on.textContent),
                          (oo = !0))),
                (P = Dr(c, C)),
                0 < P.length &&
                    ((C = new Gu(C, e, null, n, u)),
                    d.push({ event: C, listeners: P }),
                    $ ? (C.data = $) : (($ = qh(n)), $ !== null && (C.data = $)))),
                ($ = Yy ? Xy(e, n) : qy(e, n)) &&
                    ((c = Dr(c, 'onBeforeInput')),
                    0 < c.length &&
                        ((u = new Gu('onBeforeInput', 'beforeinput', null, n, u)),
                        d.push({ event: u, listeners: c }),
                        (u.data = $)));
        }
        ap(d, t);
    });
}
function $i(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Dr(e, t) {
    for (var n = t + 'Capture', o = []; e !== null; ) {
        var i = e,
            r = i.stateNode;
        i.tag === 5 &&
            r !== null &&
            ((i = r),
            (r = mi(e, n)),
            r != null && o.unshift($i(e, r, i)),
            (r = mi(e, t)),
            r != null && o.push($i(e, r, i))),
            (e = e.return);
    }
    return o;
}
function Qn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function cd(e, t, n, o, i) {
    for (var r = t._reactName, s = []; n !== null && n !== o; ) {
        var l = n,
            a = l.alternate,
            c = l.stateNode;
        if (a !== null && a === o) break;
        l.tag === 5 &&
            c !== null &&
            ((l = c),
            i
                ? ((a = mi(n, r)), a != null && s.unshift($i(n, a, l)))
                : i || ((a = mi(n, r)), a != null && s.push($i(n, a, l)))),
            (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
}
var u0 = /\r\n?/g,
    d0 = /\u0000|\uFFFD/g;
function ud(e) {
    return (typeof e == 'string' ? e : '' + e).replace(u0, '\n').replace(d0, '');
}
function ir(e, t, n) {
    if (((t = ud(t)), ud(e) !== t && n)) throw Error(E(425));
}
function Br() {}
var fa = null,
    ha = null;
function pa(e, t) {
    return (
        e === 'textarea' ||
        e === 'noscript' ||
        typeof t.children == 'string' ||
        typeof t.children == 'number' ||
        (typeof t.dangerouslySetInnerHTML == 'object' &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var ma = typeof setTimeout == 'function' ? setTimeout : void 0,
    f0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    dd = typeof Promise == 'function' ? Promise : void 0,
    h0 =
        typeof queueMicrotask == 'function'
            ? queueMicrotask
            : typeof dd < 'u'
            ? function (e) {
                  return dd.resolve(null).then(e).catch(p0);
              }
            : ma;
function p0(e) {
    setTimeout(function () {
        throw e;
    });
}
function wl(e, t) {
    var n = t,
        o = 0;
    do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
            if (((n = i.data), n === '/$')) {
                if (o === 0) {
                    e.removeChild(i), yi(t);
                    return;
                }
                o--;
            } else (n !== '$' && n !== '$?' && n !== '$!') || o++;
        n = i;
    } while (n);
    yi(t);
}
function un(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
            if (t === '/$') return null;
        }
    }
    return e;
}
function fd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === '$' || n === '$!' || n === '$?') {
                if (t === 0) return e;
                t--;
            } else n === '/$' && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var Mo = Math.random().toString(36).slice(2),
    Ot = '__reactFiber$' + Mo,
    ki = '__reactProps$' + Mo,
    Kt = '__reactContainer$' + Mo,
    ga = '__reactEvents$' + Mo,
    m0 = '__reactListeners$' + Mo,
    g0 = '__reactHandles$' + Mo;
function Sn(e) {
    var t = e[Ot];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Kt] || n[Ot])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = fd(e); e !== null; ) {
                    if ((n = e[Ot])) return n;
                    e = fd(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function Di(e) {
    return (
        (e = e[Ot] || e[Kt]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
}
function so(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(E(33));
}
function bs(e) {
    return e[ki] || null;
}
var va = [],
    lo = -1;
function wn(e) {
    return { current: e };
}
function Z(e) {
    0 > lo || ((e.current = va[lo]), (va[lo] = null), lo--);
}
function q(e, t) {
    lo++, (va[lo] = e.current), (e.current = t);
}
var gn = {},
    Le = wn(gn),
    Fe = wn(!1),
    Ln = gn;
function Eo(e, t) {
    var n = e.type.contextTypes;
    if (!n) return gn;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
        return o.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        r;
    for (r in n) i[r] = t[r];
    return (
        o &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
    );
}
function Ue(e) {
    return (e = e.childContextTypes), e != null;
}
function jr() {
    Z(Fe), Z(Le);
}
function hd(e, t, n) {
    if (Le.current !== gn) throw Error(E(168));
    q(Le, t), q(Fe, n);
}
function up(e, t, n) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != 'function'))
        return n;
    o = o.getChildContext();
    for (var i in o) if (!(i in t)) throw Error(E(108, ey(e) || 'Unknown', i));
    return oe({}, n, o);
}
function Hr(e) {
    return (
        (e =
            ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
            gn),
        (Ln = Le.current),
        q(Le, e),
        q(Fe, Fe.current),
        !0
    );
}
function pd(e, t, n) {
    var o = e.stateNode;
    if (!o) throw Error(E(169));
    n
        ? ((e = up(e, t, Ln)),
          (o.__reactInternalMemoizedMergedChildContext = e),
          Z(Fe),
          Z(Le),
          q(Le, e))
        : Z(Fe),
        q(Fe, n);
}
var jt = null,
    ws = !1,
    xl = !1;
function dp(e) {
    jt === null ? (jt = [e]) : jt.push(e);
}
function v0(e) {
    (ws = !0), dp(e);
}
function xn() {
    if (!xl && jt !== null) {
        xl = !0;
        var e = 0,
            t = W;
        try {
            var n = jt;
            for (W = 1; e < n.length; e++) {
                var o = n[e];
                do o = o(!0);
                while (o !== null);
            }
            (jt = null), (ws = !1);
        } catch (i) {
            throw (jt !== null && (jt = jt.slice(e + 1)), Mh(cc, xn), i);
        } finally {
            (W = t), (xl = !1);
        }
    }
    return null;
}
var ao = [],
    co = 0,
    Fr = null,
    Ur = 0,
    lt = [],
    at = 0,
    In = null,
    Ft = 1,
    Ut = '';
function kn(e, t) {
    (ao[co++] = Ur), (ao[co++] = Fr), (Fr = e), (Ur = t);
}
function fp(e, t, n) {
    (lt[at++] = Ft), (lt[at++] = Ut), (lt[at++] = In), (In = e);
    var o = Ft;
    e = Ut;
    var i = 32 - $t(o) - 1;
    (o &= ~(1 << i)), (n += 1);
    var r = 32 - $t(t) + i;
    if (30 < r) {
        var s = i - (i % 5);
        (r = (o & ((1 << s) - 1)).toString(32)),
            (o >>= s),
            (i -= s),
            (Ft = (1 << (32 - $t(t) + i)) | (n << i) | o),
            (Ut = r + e);
    } else (Ft = (1 << r) | (n << i) | o), (Ut = e);
}
function yc(e) {
    e.return !== null && (kn(e, 1), fp(e, 1, 0));
}
function bc(e) {
    for (; e === Fr; )
        (Fr = ao[--co]), (ao[co] = null), (Ur = ao[--co]), (ao[co] = null);
    for (; e === In; )
        (In = lt[--at]),
            (lt[at] = null),
            (Ut = lt[--at]),
            (lt[at] = null),
            (Ft = lt[--at]),
            (lt[at] = null);
}
var Ze = null,
    Ge = null,
    ee = !1,
    bt = null;
function hp(e, t) {
    var n = ct(5, null, null, 0);
    (n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function md(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t =
                    t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                t !== null
                    ? ((e.stateNode = t), (Ze = e), (Ge = un(t.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (Ze = e), (Ge = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = In !== null ? { id: Ft, overflow: Ut } : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = ct(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (Ze = e),
                      (Ge = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function ya(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ba(e) {
    if (ee) {
        var t = Ge;
        if (t) {
            var n = t;
            if (!md(e, t)) {
                if (ya(e)) throw Error(E(418));
                t = un(n.nextSibling);
                var o = Ze;
                t && md(e, t)
                    ? hp(o, n)
                    : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Ze = e));
            }
        } else {
            if (ya(e)) throw Error(E(418));
            (e.flags = (e.flags & -4097) | 2), (ee = !1), (Ze = e);
        }
    }
}
function gd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ze = e;
}
function rr(e) {
    if (e !== Ze) return !1;
    if (!ee) return gd(e), (ee = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== 'head' && t !== 'body' && !pa(e.type, e.memoizedProps))),
        t && (t = Ge))
    ) {
        if (ya(e)) throw (pp(), Error(E(418)));
        for (; t; ) hp(e, t), (t = un(t.nextSibling));
    }
    if ((gd(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(E(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === '/$') {
                        if (t === 0) {
                            Ge = un(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
                }
                e = e.nextSibling;
            }
            Ge = null;
        }
    } else Ge = Ze ? un(e.stateNode.nextSibling) : null;
    return !0;
}
function pp() {
    for (var e = Ge; e; ) e = un(e.nextSibling);
}
function So() {
    (Ge = Ze = null), (ee = !1);
}
function wc(e) {
    bt === null ? (bt = [e]) : bt.push(e);
}
var y0 = Xt.ReactCurrentBatchConfig;
function vt(e, t) {
    if (e && e.defaultProps) {
        (t = oe({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
var Vr = wn(null),
    Wr = null,
    uo = null,
    xc = null;
function $c() {
    xc = uo = Wr = null;
}
function kc(e) {
    var t = Vr.current;
    Z(Vr), (e._currentValue = t);
}
function wa(e, t, n) {
    for (; e !== null; ) {
        var o = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
                : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function yo(e, t) {
    (Wr = e),
        (xc = uo = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & t && (je = !0), (e.firstContext = null));
}
function ft(e) {
    var t = e._currentValue;
    if (xc !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), uo === null)) {
            if (Wr === null) throw Error(E(308));
            (uo = e), (Wr.dependencies = { lanes: 0, firstContext: e });
        } else uo = uo.next = e;
    return t;
}
var Cn = null;
function Ec(e) {
    Cn === null ? (Cn = [e]) : Cn.push(e);
}
function mp(e, t, n, o) {
    var i = t.interleaved;
    return (
        i === null ? ((n.next = n), Ec(t)) : ((n.next = i.next), (i.next = n)),
        (t.interleaved = n),
        Qt(e, o)
    );
}
function Qt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (n = e.alternate),
            n !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var en = !1;
function Sc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function gp(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function Vt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function dn(e, t, n) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), U & 2)) {
        var i = o.pending;
        return (
            i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
            (o.pending = t),
            Qt(e, n)
        );
    }
    return (
        (i = o.interleaved),
        i === null ? ((t.next = t), Ec(o)) : ((t.next = i.next), (i.next = t)),
        (o.interleaved = t),
        Qt(e, n)
    );
}
function $r(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
        var o = t.lanes;
        (o &= e.pendingLanes), (n |= o), (t.lanes = n), uc(e, n);
    }
}
function vd(e, t) {
    var n = e.updateQueue,
        o = e.alternate;
    if (o !== null && ((o = o.updateQueue), n === o)) {
        var i = null,
            r = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                r === null ? (i = r = s) : (r = r.next = s), (n = n.next);
            } while (n !== null);
            r === null ? (i = r = t) : (r = r.next = t);
        } else i = r = t;
        (n = {
            baseState: o.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: r,
            shared: o.shared,
            effects: o.effects,
        }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
}
function Kr(e, t, n, o) {
    var i = e.updateQueue;
    en = !1;
    var r = i.firstBaseUpdate,
        s = i.lastBaseUpdate,
        l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var a = l,
            c = a.next;
        (a.next = null), s === null ? (r = c) : (s.next = c), (s = a);
        var u = e.alternate;
        u !== null &&
            ((u = u.updateQueue),
            (l = u.lastBaseUpdate),
            l !== s &&
                (l === null ? (u.firstBaseUpdate = c) : (l.next = c),
                (u.lastBaseUpdate = a)));
    }
    if (r !== null) {
        var d = i.baseState;
        (s = 0), (u = c = a = null), (l = r);
        do {
            var f = l.lane,
                m = l.eventTime;
            if ((o & f) === f) {
                u !== null &&
                    (u = u.next =
                        {
                            eventTime: m,
                            lane: 0,
                            tag: l.tag,
                            payload: l.payload,
                            callback: l.callback,
                            next: null,
                        });
                e: {
                    var y = e,
                        w = l;
                    switch (((f = t), (m = n), w.tag)) {
                        case 1:
                            if (((y = w.payload), typeof y == 'function')) {
                                d = y.call(m, d, f);
                                break e;
                            }
                            d = y;
                            break e;
                        case 3:
                            y.flags = (y.flags & -65537) | 128;
                        case 0:
                            if (
                                ((y = w.payload),
                                (f = typeof y == 'function' ? y.call(m, d, f) : y),
                                f == null)
                            )
                                break e;
                            d = oe({}, d, f);
                            break e;
                        case 2:
                            en = !0;
                    }
                }
                l.callback !== null &&
                    l.lane !== 0 &&
                    ((e.flags |= 64),
                    (f = i.effects),
                    f === null ? (i.effects = [l]) : f.push(l));
            } else
                (m = {
                    eventTime: m,
                    lane: f,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null,
                }),
                    u === null ? ((c = u = m), (a = d)) : (u = u.next = m),
                    (s |= f);
            if (((l = l.next), l === null)) {
                if (((l = i.shared.pending), l === null)) break;
                (f = l),
                    (l = f.next),
                    (f.next = null),
                    (i.lastBaseUpdate = f),
                    (i.shared.pending = null);
            }
        } while (1);
        if (
            (u === null && (a = d),
            (i.baseState = a),
            (i.firstBaseUpdate = c),
            (i.lastBaseUpdate = u),
            (t = i.shared.interleaved),
            t !== null)
        ) {
            i = t;
            do (s |= i.lane), (i = i.next);
            while (i !== t);
        } else r === null && (i.shared.lanes = 0);
        (An |= s), (e.lanes = s), (e.memoizedState = d);
    }
}
function yd(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var o = e[t],
                i = o.callback;
            if (i !== null) {
                if (((o.callback = null), (o = n), typeof i != 'function'))
                    throw Error(E(191, i));
                i.call(o);
            }
        }
}
var vp = new mh.Component().refs;
function xa(e, t, n, o) {
    (t = e.memoizedState),
        (n = n(o, t)),
        (n = n == null ? t : oe({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var xs = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Hn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var o = Ae(),
            i = hn(e),
            r = Vt(o, i);
        (r.payload = t),
            n != null && (r.callback = n),
            (t = dn(e, r, i)),
            t !== null && (kt(t, e, i, o), $r(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var o = Ae(),
            i = hn(e),
            r = Vt(o, i);
        (r.tag = 1),
            (r.payload = t),
            n != null && (r.callback = n),
            (t = dn(e, r, i)),
            t !== null && (kt(t, e, i, o), $r(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Ae(),
            o = hn(e),
            i = Vt(n, o);
        (i.tag = 2),
            t != null && (i.callback = t),
            (t = dn(e, i, o)),
            t !== null && (kt(t, e, o, n), $r(t, e, o));
    },
};
function bd(e, t, n, o, i, r, s) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == 'function'
            ? e.shouldComponentUpdate(o, r, s)
            : t.prototype && t.prototype.isPureReactComponent
            ? !wi(n, o) || !wi(i, r)
            : !0
    );
}
function yp(e, t, n) {
    var o = !1,
        i = gn,
        r = t.contextType;
    return (
        typeof r == 'object' && r !== null
            ? (r = ft(r))
            : ((i = Ue(t) ? Ln : Le.current),
              (o = t.contextTypes),
              (r = (o = o != null) ? Eo(e, i) : gn)),
        (t = new t(n, r)),
        (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = xs),
        (e.stateNode = t),
        (t._reactInternals = e),
        o &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = i),
            (e.__reactInternalMemoizedMaskedChildContext = r)),
        t
    );
}
function wd(e, t, n, o) {
    (e = t.state),
        typeof t.componentWillReceiveProps == 'function' &&
            t.componentWillReceiveProps(n, o),
        typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
            t.UNSAFE_componentWillReceiveProps(n, o),
        t.state !== e && xs.enqueueReplaceState(t, t.state, null);
}
function $a(e, t, n, o) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = vp), Sc(e);
    var r = t.contextType;
    typeof r == 'object' && r !== null
        ? (i.context = ft(r))
        : ((r = Ue(t) ? Ln : Le.current), (i.context = Eo(e, r))),
        (i.state = e.memoizedState),
        (r = t.getDerivedStateFromProps),
        typeof r == 'function' && (xa(e, t, r, n), (i.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == 'function' ||
            typeof i.getSnapshotBeforeUpdate == 'function' ||
            (typeof i.UNSAFE_componentWillMount != 'function' &&
                typeof i.componentWillMount != 'function') ||
            ((t = i.state),
            typeof i.componentWillMount == 'function' && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == 'function' &&
                i.UNSAFE_componentWillMount(),
            t !== i.state && xs.enqueueReplaceState(i, i.state, null),
            Kr(e, n, i, o),
            (i.state = e.memoizedState)),
        typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Ko(e, t, n) {
    if (
        ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(E(309));
                var o = n.stateNode;
            }
            if (!o) throw Error(E(147, e));
            var i = o,
                r = '' + e;
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == 'function' &&
                t.ref._stringRef === r
                ? t.ref
                : ((t = function (s) {
                      var l = i.refs;
                      l === vp && (l = i.refs = {}),
                          s === null ? delete l[r] : (l[r] = s);
                  }),
                  (t._stringRef = r),
                  t);
        }
        if (typeof e != 'string') throw Error(E(284));
        if (!n._owner) throw Error(E(290, e));
    }
    return e;
}
function sr(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
            E(
                31,
                e === '[object Object]'
                    ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                    : e
            )
        ))
    );
}
function xd(e) {
    var t = e._init;
    return t(e._payload);
}
function bp(e) {
    function t(p, h) {
        if (e) {
            var g = p.deletions;
            g === null ? ((p.deletions = [h]), (p.flags |= 16)) : g.push(h);
        }
    }
    function n(p, h) {
        if (!e) return null;
        for (; h !== null; ) t(p, h), (h = h.sibling);
        return null;
    }
    function o(p, h) {
        for (p = new Map(); h !== null; )
            h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
        return p;
    }
    function i(p, h) {
        return (p = pn(p, h)), (p.index = 0), (p.sibling = null), p;
    }
    function r(p, h, g) {
        return (
            (p.index = g),
            e
                ? ((g = p.alternate),
                  g !== null
                      ? ((g = g.index), g < h ? ((p.flags |= 2), h) : g)
                      : ((p.flags |= 2), h))
                : ((p.flags |= 1048576), h)
        );
    }
    function s(p) {
        return e && p.alternate === null && (p.flags |= 2), p;
    }
    function l(p, h, g, x) {
        return h === null || h.tag !== 6
            ? ((h = Pl(g, p.mode, x)), (h.return = p), h)
            : ((h = i(h, g)), (h.return = p), h);
    }
    function a(p, h, g, x) {
        var T = g.type;
        return T === no
            ? u(p, h, g.props.children, x, g.key)
            : h !== null &&
              (h.elementType === T ||
                  (typeof T == 'object' &&
                      T !== null &&
                      T.$$typeof === Jt &&
                      xd(T) === h.type))
            ? ((x = i(h, g.props)), (x.ref = Ko(p, h, g)), (x.return = p), x)
            : ((x = Pr(g.type, g.key, g.props, null, p.mode, x)),
              (x.ref = Ko(p, h, g)),
              (x.return = p),
              x);
    }
    function c(p, h, g, x) {
        return h === null ||
            h.tag !== 4 ||
            h.stateNode.containerInfo !== g.containerInfo ||
            h.stateNode.implementation !== g.implementation
            ? ((h = Rl(g, p.mode, x)), (h.return = p), h)
            : ((h = i(h, g.children || [])), (h.return = p), h);
    }
    function u(p, h, g, x, T) {
        return h === null || h.tag !== 7
            ? ((h = _n(g, p.mode, x, T)), (h.return = p), h)
            : ((h = i(h, g)), (h.return = p), h);
    }
    function d(p, h, g) {
        if ((typeof h == 'string' && h !== '') || typeof h == 'number')
            return (h = Pl('' + h, p.mode, g)), (h.return = p), h;
        if (typeof h == 'object' && h !== null) {
            switch (h.$$typeof) {
                case Xi:
                    return (
                        (g = Pr(h.type, h.key, h.props, null, p.mode, g)),
                        (g.ref = Ko(p, null, h)),
                        (g.return = p),
                        g
                    );
                case to:
                    return (h = Rl(h, p.mode, g)), (h.return = p), h;
                case Jt:
                    var x = h._init;
                    return d(p, x(h._payload), g);
            }
            if (Go(h) || Ho(h))
                return (h = _n(h, p.mode, g, null)), (h.return = p), h;
            sr(p, h);
        }
        return null;
    }
    function f(p, h, g, x) {
        var T = h !== null ? h.key : null;
        if ((typeof g == 'string' && g !== '') || typeof g == 'number')
            return T !== null ? null : l(p, h, '' + g, x);
        if (typeof g == 'object' && g !== null) {
            switch (g.$$typeof) {
                case Xi:
                    return g.key === T ? a(p, h, g, x) : null;
                case to:
                    return g.key === T ? c(p, h, g, x) : null;
                case Jt:
                    return (T = g._init), f(p, h, T(g._payload), x);
            }
            if (Go(g) || Ho(g)) return T !== null ? null : u(p, h, g, x, null);
            sr(p, g);
        }
        return null;
    }
    function m(p, h, g, x, T) {
        if ((typeof x == 'string' && x !== '') || typeof x == 'number')
            return (p = p.get(g) || null), l(h, p, '' + x, T);
        if (typeof x == 'object' && x !== null) {
            switch (x.$$typeof) {
                case Xi:
                    return (
                        (p = p.get(x.key === null ? g : x.key) || null),
                        a(h, p, x, T)
                    );
                case to:
                    return (
                        (p = p.get(x.key === null ? g : x.key) || null),
                        c(h, p, x, T)
                    );
                case Jt:
                    var P = x._init;
                    return m(p, h, g, P(x._payload), T);
            }
            if (Go(x) || Ho(x)) return (p = p.get(g) || null), u(h, p, x, T, null);
            sr(h, x);
        }
        return null;
    }
    function y(p, h, g, x) {
        for (
            var T = null, P = null, $ = h, C = (h = 0), B = null;
            $ !== null && C < g.length;
            C++
        ) {
            $.index > C ? ((B = $), ($ = null)) : (B = $.sibling);
            var N = f(p, $, g[C], x);
            if (N === null) {
                $ === null && ($ = B);
                break;
            }
            e && $ && N.alternate === null && t(p, $),
                (h = r(N, h, C)),
                P === null ? (T = N) : (P.sibling = N),
                (P = N),
                ($ = B);
        }
        if (C === g.length) return n(p, $), ee && kn(p, C), T;
        if ($ === null) {
            for (; C < g.length; C++)
                ($ = d(p, g[C], x)),
                    $ !== null &&
                        ((h = r($, h, C)),
                        P === null ? (T = $) : (P.sibling = $),
                        (P = $));
            return ee && kn(p, C), T;
        }
        for ($ = o(p, $); C < g.length; C++)
            (B = m($, p, C, g[C], x)),
                B !== null &&
                    (e &&
                        B.alternate !== null &&
                        $.delete(B.key === null ? C : B.key),
                    (h = r(B, h, C)),
                    P === null ? (T = B) : (P.sibling = B),
                    (P = B));
        return (
            e &&
                $.forEach(function (L) {
                    return t(p, L);
                }),
            ee && kn(p, C),
            T
        );
    }
    function w(p, h, g, x) {
        var T = Ho(g);
        if (typeof T != 'function') throw Error(E(150));
        if (((g = T.call(g)), g == null)) throw Error(E(151));
        for (
            var P = (T = null), $ = h, C = (h = 0), B = null, N = g.next();
            $ !== null && !N.done;
            C++, N = g.next()
        ) {
            $.index > C ? ((B = $), ($ = null)) : (B = $.sibling);
            var L = f(p, $, N.value, x);
            if (L === null) {
                $ === null && ($ = B);
                break;
            }
            e && $ && L.alternate === null && t(p, $),
                (h = r(L, h, C)),
                P === null ? (T = L) : (P.sibling = L),
                (P = L),
                ($ = B);
        }
        if (N.done) return n(p, $), ee && kn(p, C), T;
        if ($ === null) {
            for (; !N.done; C++, N = g.next())
                (N = d(p, N.value, x)),
                    N !== null &&
                        ((h = r(N, h, C)),
                        P === null ? (T = N) : (P.sibling = N),
                        (P = N));
            return ee && kn(p, C), T;
        }
        for ($ = o(p, $); !N.done; C++, N = g.next())
            (N = m($, p, C, N.value, x)),
                N !== null &&
                    (e &&
                        N.alternate !== null &&
                        $.delete(N.key === null ? C : N.key),
                    (h = r(N, h, C)),
                    P === null ? (T = N) : (P.sibling = N),
                    (P = N));
        return (
            e &&
                $.forEach(function (ue) {
                    return t(p, ue);
                }),
            ee && kn(p, C),
            T
        );
    }
    function O(p, h, g, x) {
        if (
            (typeof g == 'object' &&
                g !== null &&
                g.type === no &&
                g.key === null &&
                (g = g.props.children),
            typeof g == 'object' && g !== null)
        ) {
            switch (g.$$typeof) {
                case Xi:
                    e: {
                        for (var T = g.key, P = h; P !== null; ) {
                            if (P.key === T) {
                                if (((T = g.type), T === no)) {
                                    if (P.tag === 7) {
                                        n(p, P.sibling),
                                            (h = i(P, g.props.children)),
                                            (h.return = p),
                                            (p = h);
                                        break e;
                                    }
                                } else if (
                                    P.elementType === T ||
                                    (typeof T == 'object' &&
                                        T !== null &&
                                        T.$$typeof === Jt &&
                                        xd(T) === P.type)
                                ) {
                                    n(p, P.sibling),
                                        (h = i(P, g.props)),
                                        (h.ref = Ko(p, P, g)),
                                        (h.return = p),
                                        (p = h);
                                    break e;
                                }
                                n(p, P);
                                break;
                            } else t(p, P);
                            P = P.sibling;
                        }
                        g.type === no
                            ? ((h = _n(g.props.children, p.mode, x, g.key)),
                              (h.return = p),
                              (p = h))
                            : ((x = Pr(g.type, g.key, g.props, null, p.mode, x)),
                              (x.ref = Ko(p, h, g)),
                              (x.return = p),
                              (p = x));
                    }
                    return s(p);
                case to:
                    e: {
                        for (P = g.key; h !== null; ) {
                            if (h.key === P)
                                if (
                                    h.tag === 4 &&
                                    h.stateNode.containerInfo === g.containerInfo &&
                                    h.stateNode.implementation === g.implementation
                                ) {
                                    n(p, h.sibling),
                                        (h = i(h, g.children || [])),
                                        (h.return = p),
                                        (p = h);
                                    break e;
                                } else {
                                    n(p, h);
                                    break;
                                }
                            else t(p, h);
                            h = h.sibling;
                        }
                        (h = Rl(g, p.mode, x)), (h.return = p), (p = h);
                    }
                    return s(p);
                case Jt:
                    return (P = g._init), O(p, h, P(g._payload), x);
            }
            if (Go(g)) return y(p, h, g, x);
            if (Ho(g)) return w(p, h, g, x);
            sr(p, g);
        }
        return (typeof g == 'string' && g !== '') || typeof g == 'number'
            ? ((g = '' + g),
              h !== null && h.tag === 6
                  ? (n(p, h.sibling), (h = i(h, g)), (h.return = p), (p = h))
                  : (n(p, h), (h = Pl(g, p.mode, x)), (h.return = p), (p = h)),
              s(p))
            : n(p, h);
    }
    return O;
}
var Co = bp(!0),
    wp = bp(!1),
    Bi = {},
    zt = wn(Bi),
    Ei = wn(Bi),
    Si = wn(Bi);
function Tn(e) {
    if (e === Bi) throw Error(E(174));
    return e;
}
function Cc(e, t) {
    switch ((q(Si, t), q(Ei, e), q(zt, Bi), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ea(null, '');
            break;
        default:
            (e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = ea(t, e));
    }
    Z(zt), q(zt, t);
}
function To() {
    Z(zt), Z(Ei), Z(Si);
}
function xp(e) {
    Tn(Si.current);
    var t = Tn(zt.current),
        n = ea(t, e.type);
    t !== n && (q(Ei, e), q(zt, n));
}
function Tc(e) {
    Ei.current === e && (Z(zt), Z(Ei));
}
var te = wn(0);
function Qr(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === '$?' || n.data === '$!')
            )
                return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var $l = [];
function Pc() {
    for (var e = 0; e < $l.length; e++) $l[e]._workInProgressVersionPrimary = null;
    $l.length = 0;
}
var kr = Xt.ReactCurrentDispatcher,
    kl = Xt.ReactCurrentBatchConfig,
    On = 0,
    ne = null,
    me = null,
    ve = null,
    Yr = !1,
    li = !1,
    Ci = 0,
    b0 = 0;
function Te() {
    throw Error(E(321));
}
function Rc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ct(e[n], t[n])) return !1;
    return !0;
}
function _c(e, t, n, o, i, r) {
    if (
        ((On = r),
        (ne = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (kr.current = e === null || e.memoizedState === null ? k0 : E0),
        (e = n(o, i)),
        li)
    ) {
        r = 0;
        do {
            if (((li = !1), (Ci = 0), 25 <= r)) throw Error(E(301));
            (r += 1),
                (ve = me = null),
                (t.updateQueue = null),
                (kr.current = S0),
                (e = n(o, i));
        } while (li);
    }
    if (
        ((kr.current = Xr),
        (t = me !== null && me.next !== null),
        (On = 0),
        (ve = me = ne = null),
        (Yr = !1),
        t)
    )
        throw Error(E(300));
    return e;
}
function Lc() {
    var e = Ci !== 0;
    return (Ci = 0), e;
}
function Lt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return ve === null ? (ne.memoizedState = ve = e) : (ve = ve.next = e), ve;
}
function ht() {
    if (me === null) {
        var e = ne.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = me.next;
    var t = ve === null ? ne.memoizedState : ve.next;
    if (t !== null) (ve = t), (me = e);
    else {
        if (e === null) throw Error(E(310));
        (me = e),
            (e = {
                memoizedState: me.memoizedState,
                baseState: me.baseState,
                baseQueue: me.baseQueue,
                queue: me.queue,
                next: null,
            }),
            ve === null ? (ne.memoizedState = ve = e) : (ve = ve.next = e);
    }
    return ve;
}
function Ti(e, t) {
    return typeof t == 'function' ? t(e) : t;
}
function El(e) {
    var t = ht(),
        n = t.queue;
    if (n === null) throw Error(E(311));
    n.lastRenderedReducer = e;
    var o = me,
        i = o.baseQueue,
        r = n.pending;
    if (r !== null) {
        if (i !== null) {
            var s = i.next;
            (i.next = r.next), (r.next = s);
        }
        (o.baseQueue = i = r), (n.pending = null);
    }
    if (i !== null) {
        (r = i.next), (o = o.baseState);
        var l = (s = null),
            a = null,
            c = r;
        do {
            var u = c.lane;
            if ((On & u) === u)
                a !== null &&
                    (a = a.next =
                        {
                            lane: 0,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null,
                        }),
                    (o = c.hasEagerState ? c.eagerState : e(o, c.action));
            else {
                var d = {
                    lane: u,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                };
                a === null ? ((l = a = d), (s = o)) : (a = a.next = d),
                    (ne.lanes |= u),
                    (An |= u);
            }
            c = c.next;
        } while (c !== null && c !== r);
        a === null ? (s = o) : (a.next = l),
            Ct(o, t.memoizedState) || (je = !0),
            (t.memoizedState = o),
            (t.baseState = s),
            (t.baseQueue = a),
            (n.lastRenderedState = o);
    }
    if (((e = n.interleaved), e !== null)) {
        i = e;
        do (r = i.lane), (ne.lanes |= r), (An |= r), (i = i.next);
        while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function Sl(e) {
    var t = ht(),
        n = t.queue;
    if (n === null) throw Error(E(311));
    n.lastRenderedReducer = e;
    var o = n.dispatch,
        i = n.pending,
        r = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = (i = i.next);
        do (r = e(r, s.action)), (s = s.next);
        while (s !== i);
        Ct(r, t.memoizedState) || (je = !0),
            (t.memoizedState = r),
            t.baseQueue === null && (t.baseState = r),
            (n.lastRenderedState = r);
    }
    return [r, o];
}
function $p() {}
function kp(e, t) {
    var n = ne,
        o = ht(),
        i = t(),
        r = !Ct(o.memoizedState, i);
    if (
        (r && ((o.memoizedState = i), (je = !0)),
        (o = o.queue),
        Ic(Cp.bind(null, n, o, e), [e]),
        o.getSnapshot !== t || r || (ve !== null && ve.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            Pi(9, Sp.bind(null, n, o, i, t), void 0, null),
            ye === null)
        )
            throw Error(E(349));
        On & 30 || Ep(n, t, i);
    }
    return i;
}
function Ep(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = ne.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (ne.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Sp(e, t, n, o) {
    (t.value = n), (t.getSnapshot = o), Tp(t) && Pp(e);
}
function Cp(e, t, n) {
    return n(function () {
        Tp(t) && Pp(e);
    });
}
function Tp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ct(e, n);
    } catch (o) {
        return !0;
    }
}
function Pp(e) {
    var t = Qt(e, 1);
    t !== null && kt(t, e, 1, -1);
}
function $d(e) {
    var t = Lt();
    return (
        typeof e == 'function' && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ti,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = $0.bind(null, ne, e)),
        [t.memoizedState, e]
    );
}
function Pi(e, t, n, o) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: o, next: null }),
        (t = ne.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (ne.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((o = n.next), (n.next = e), (e.next = o), (t.lastEffect = e))),
        e
    );
}
function Rp() {
    return ht().memoizedState;
}
function Er(e, t, n, o) {
    var i = Lt();
    (ne.flags |= e),
        (i.memoizedState = Pi(1 | t, n, void 0, o === void 0 ? null : o));
}
function $s(e, t, n, o) {
    var i = ht();
    o = o === void 0 ? null : o;
    var r = void 0;
    if (me !== null) {
        var s = me.memoizedState;
        if (((r = s.destroy), o !== null && Rc(o, s.deps))) {
            i.memoizedState = Pi(t, n, r, o);
            return;
        }
    }
    (ne.flags |= e), (i.memoizedState = Pi(1 | t, n, r, o));
}
function kd(e, t) {
    return Er(8390656, 8, e, t);
}
function Ic(e, t) {
    return $s(2048, 8, e, t);
}
function _p(e, t) {
    return $s(4, 2, e, t);
}
function Lp(e, t) {
    return $s(4, 4, e, t);
}
function Ip(e, t) {
    if (typeof t == 'function')
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function Op(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), $s(4, 4, Ip.bind(null, t, e), n);
}
function Oc() {}
function Ap(e, t) {
    var n = ht();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    return o !== null && t !== null && Rc(t, o[1])
        ? o[0]
        : ((n.memoizedState = [e, t]), e);
}
function zp(e, t) {
    var n = ht();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    return o !== null && t !== null && Rc(t, o[1])
        ? o[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Mp(e, t, n) {
    return On & 21
        ? (Ct(n, t) || ((n = Bh()), (ne.lanes |= n), (An |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (je = !0)), (e.memoizedState = n));
}
function w0(e, t) {
    var n = W;
    (W = n !== 0 && 4 > n ? n : 4), e(!0);
    var o = kl.transition;
    kl.transition = {};
    try {
        e(!1), t();
    } finally {
        (W = n), (kl.transition = o);
    }
}
function Np() {
    return ht().memoizedState;
}
function x0(e, t, n) {
    var o = hn(e);
    if (
        ((n = {
            lane: o,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        Dp(e))
    )
        Bp(t, n);
    else if (((n = mp(e, t, n, o)), n !== null)) {
        var i = Ae();
        kt(n, e, o, i), jp(n, t, o);
    }
}
function $0(e, t, n) {
    var o = hn(e),
        i = { lane: o, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Dp(e)) Bp(t, i);
    else {
        var r = e.alternate;
        if (
            e.lanes === 0 &&
            (r === null || r.lanes === 0) &&
            ((r = t.lastRenderedReducer), r !== null)
        )
            try {
                var s = t.lastRenderedState,
                    l = r(s, n);
                if (((i.hasEagerState = !0), (i.eagerState = l), Ct(l, s))) {
                    var a = t.interleaved;
                    a === null
                        ? ((i.next = i), Ec(t))
                        : ((i.next = a.next), (a.next = i)),
                        (t.interleaved = i);
                    return;
                }
            } catch (c) {
            } finally {
            }
        (n = mp(e, t, i, o)),
            n !== null && ((i = Ae()), kt(n, e, o, i), jp(n, t, o));
    }
}
function Dp(e) {
    var t = e.alternate;
    return e === ne || (t !== null && t === ne);
}
function Bp(e, t) {
    li = Yr = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function jp(e, t, n) {
    if (n & 4194240) {
        var o = t.lanes;
        (o &= e.pendingLanes), (n |= o), (t.lanes = n), uc(e, n);
    }
}
var Xr = {
        readContext: ft,
        useCallback: Te,
        useContext: Te,
        useEffect: Te,
        useImperativeHandle: Te,
        useInsertionEffect: Te,
        useLayoutEffect: Te,
        useMemo: Te,
        useReducer: Te,
        useRef: Te,
        useState: Te,
        useDebugValue: Te,
        useDeferredValue: Te,
        useTransition: Te,
        useMutableSource: Te,
        useSyncExternalStore: Te,
        useId: Te,
        unstable_isNewReconciler: !1,
    },
    k0 = {
        readContext: ft,
        useCallback: function (e, t) {
            return (Lt().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: ft,
        useEffect: kd,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                Er(4194308, 4, Ip.bind(null, t, e), n)
            );
        },
        useLayoutEffect: function (e, t) {
            return Er(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return Er(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = Lt();
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
            );
        },
        useReducer: function (e, t, n) {
            var o = Lt();
            return (
                (t = n !== void 0 ? n(t) : t),
                (o.memoizedState = o.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (o.queue = e),
                (e = e.dispatch = x0.bind(null, ne, e)),
                [o.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = Lt();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: $d,
        useDebugValue: Oc,
        useDeferredValue: function (e) {
            return (Lt().memoizedState = e);
        },
        useTransition: function () {
            var e = $d(!1),
                t = e[0];
            return (e = w0.bind(null, e[1])), (Lt().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var o = ne,
                i = Lt();
            if (ee) {
                if (n === void 0) throw Error(E(407));
                n = n();
            } else {
                if (((n = t()), ye === null)) throw Error(E(349));
                On & 30 || Ep(o, t, n);
            }
            i.memoizedState = n;
            var r = { value: n, getSnapshot: t };
            return (
                (i.queue = r),
                kd(Cp.bind(null, o, r, e), [e]),
                (o.flags |= 2048),
                Pi(9, Sp.bind(null, o, r, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = Lt(),
                t = ye.identifierPrefix;
            if (ee) {
                var n = Ut,
                    o = Ft;
                (n = (o & ~(1 << (32 - $t(o) - 1))).toString(32) + n),
                    (t = ':' + t + 'R' + n),
                    (n = Ci++),
                    0 < n && (t += 'H' + n.toString(32)),
                    (t += ':');
            } else (n = b0++), (t = ':' + t + 'r' + n.toString(32) + ':');
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    E0 = {
        readContext: ft,
        useCallback: Ap,
        useContext: ft,
        useEffect: Ic,
        useImperativeHandle: Op,
        useInsertionEffect: _p,
        useLayoutEffect: Lp,
        useMemo: zp,
        useReducer: El,
        useRef: Rp,
        useState: function () {
            return El(Ti);
        },
        useDebugValue: Oc,
        useDeferredValue: function (e) {
            var t = ht();
            return Mp(t, me.memoizedState, e);
        },
        useTransition: function () {
            var e = El(Ti)[0],
                t = ht().memoizedState;
            return [e, t];
        },
        useMutableSource: $p,
        useSyncExternalStore: kp,
        useId: Np,
        unstable_isNewReconciler: !1,
    },
    S0 = {
        readContext: ft,
        useCallback: Ap,
        useContext: ft,
        useEffect: Ic,
        useImperativeHandle: Op,
        useInsertionEffect: _p,
        useLayoutEffect: Lp,
        useMemo: zp,
        useReducer: Sl,
        useRef: Rp,
        useState: function () {
            return Sl(Ti);
        },
        useDebugValue: Oc,
        useDeferredValue: function (e) {
            var t = ht();
            return me === null ? (t.memoizedState = e) : Mp(t, me.memoizedState, e);
        },
        useTransition: function () {
            var e = Sl(Ti)[0],
                t = ht().memoizedState;
            return [e, t];
        },
        useMutableSource: $p,
        useSyncExternalStore: kp,
        useId: Np,
        unstable_isNewReconciler: !1,
    };
function Po(e, t) {
    try {
        var n = '',
            o = t;
        do (n += Jv(o)), (o = o.return);
        while (o);
        var i = n;
    } catch (r) {
        i = '\nError generating stack: ' + r.message + '\n' + r.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
}
function Cl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n != null ? n : null,
        digest: t != null ? t : null,
    };
}
function ka(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var C0 = typeof WeakMap == 'function' ? WeakMap : Map;
function Hp(e, t, n) {
    (n = Vt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var o = t.value;
    return (
        (n.callback = function () {
            Gr || ((Gr = !0), (Oa = o)), ka(e, t);
        }),
        n
    );
}
function Fp(e, t, n) {
    (n = Vt(-1, n)), (n.tag = 3);
    var o = e.type.getDerivedStateFromError;
    if (typeof o == 'function') {
        var i = t.value;
        (n.payload = function () {
            return o(i);
        }),
            (n.callback = function () {
                ka(e, t);
            });
    }
    var r = e.stateNode;
    return (
        r !== null &&
            typeof r.componentDidCatch == 'function' &&
            (n.callback = function () {
                ka(e, t),
                    typeof o != 'function' &&
                        (fn === null ? (fn = new Set([this])) : fn.add(this));
                var s = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: s !== null ? s : '',
                });
            }),
        n
    );
}
function Ed(e, t, n) {
    var o = e.pingCache;
    if (o === null) {
        o = e.pingCache = new C0();
        var i = new Set();
        o.set(t, i);
    } else (i = o.get(t)), i === void 0 && ((i = new Set()), o.set(t, i));
    i.has(n) || (i.add(n), (e = j0.bind(null, e, t, n)), t.then(e, e));
}
function Sd(e) {
    do {
        var t;
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated !== null : !0)),
            t)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function Cd(e, t, n, o, i) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = i), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((t = Vt(-1, 1)), (t.tag = 2), dn(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var T0 = Xt.ReactCurrentOwner,
    je = !1;
function Oe(e, t, n, o) {
    t.child = e === null ? wp(t, null, n, o) : Co(t, e.child, n, o);
}
function Td(e, t, n, o, i) {
    n = n.render;
    var r = t.ref;
    return (
        yo(t, i),
        (o = _c(e, t, n, o, r, i)),
        (n = Lc()),
        e !== null && !je
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~i),
              Yt(e, t, i))
            : (ee && n && yc(t), (t.flags |= 1), Oe(e, t, o, i), t.child)
    );
}
function Pd(e, t, n, o, i) {
    if (e === null) {
        var r = n.type;
        return typeof r == 'function' &&
            !Hc(r) &&
            r.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = r), Up(e, t, r, o, i))
            : ((e = Pr(n.type, null, o, t, t.mode, i)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
    }
    if (((r = e.child), !(e.lanes & i))) {
        var s = r.memoizedProps;
        if (((n = n.compare), (n = n !== null ? n : wi), n(s, o) && e.ref === t.ref))
            return Yt(e, t, i);
    }
    return (
        (t.flags |= 1),
        (e = pn(r, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    );
}
function Up(e, t, n, o, i) {
    if (e !== null) {
        var r = e.memoizedProps;
        if (wi(r, o) && e.ref === t.ref)
            if (((je = !1), (t.pendingProps = o = r), (e.lanes & i) !== 0))
                e.flags & 131072 && (je = !0);
            else return (t.lanes = e.lanes), Yt(e, t, i);
    }
    return Ea(e, t, n, o, i);
}
function Vp(e, t, n) {
    var o = t.pendingProps,
        i = o.children,
        r = e !== null ? e.memoizedState : null;
    if (o.mode === 'hidden')
        if (!(t.mode & 1))
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                q(ho, Ye),
                (Ye |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = r !== null ? r.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                    }),
                    (t.updateQueue = null),
                    q(ho, Ye),
                    (Ye |= e),
                    null
                );
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (o = r !== null ? r.baseLanes : n),
                q(ho, Ye),
                (Ye |= o);
        }
    else
        r !== null ? ((o = r.baseLanes | n), (t.memoizedState = null)) : (o = n),
            q(ho, Ye),
            (Ye |= o);
    return Oe(e, t, i, n), t.child;
}
function Wp(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
}
function Ea(e, t, n, o, i) {
    var r = Ue(n) ? Ln : Le.current;
    return (
        (r = Eo(t, r)),
        yo(t, i),
        (n = _c(e, t, n, o, r, i)),
        (o = Lc()),
        e !== null && !je
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~i),
              Yt(e, t, i))
            : (ee && o && yc(t), (t.flags |= 1), Oe(e, t, n, i), t.child)
    );
}
function Rd(e, t, n, o, i) {
    if (Ue(n)) {
        var r = !0;
        Hr(t);
    } else r = !1;
    if ((yo(t, i), t.stateNode === null))
        Sr(e, t), yp(t, n, o), $a(t, n, o, i), (o = !0);
    else if (e === null) {
        var s = t.stateNode,
            l = t.memoizedProps;
        s.props = l;
        var a = s.context,
            c = n.contextType;
        typeof c == 'object' && c !== null
            ? (c = ft(c))
            : ((c = Ue(n) ? Ln : Le.current), (c = Eo(t, c)));
        var u = n.getDerivedStateFromProps,
            d =
                typeof u == 'function' ||
                typeof s.getSnapshotBeforeUpdate == 'function';
        d ||
            (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
                typeof s.componentWillReceiveProps != 'function') ||
            ((l !== o || a !== c) && wd(t, s, o, c)),
            (en = !1);
        var f = t.memoizedState;
        (s.state = f),
            Kr(t, o, s, i),
            (a = t.memoizedState),
            l !== o || f !== a || Fe.current || en
                ? (typeof u == 'function' && (xa(t, n, u, o), (a = t.memoizedState)),
                  (l = en || bd(t, n, l, o, f, a, c))
                      ? (d ||
                            (typeof s.UNSAFE_componentWillMount != 'function' &&
                                typeof s.componentWillMount != 'function') ||
                            (typeof s.componentWillMount == 'function' &&
                                s.componentWillMount(),
                            typeof s.UNSAFE_componentWillMount == 'function' &&
                                s.UNSAFE_componentWillMount()),
                        typeof s.componentDidMount == 'function' &&
                            (t.flags |= 4194308))
                      : (typeof s.componentDidMount == 'function' &&
                            (t.flags |= 4194308),
                        (t.memoizedProps = o),
                        (t.memoizedState = a)),
                  (s.props = o),
                  (s.state = a),
                  (s.context = c),
                  (o = l))
                : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
                  (o = !1));
    } else {
        (s = t.stateNode),
            gp(e, t),
            (l = t.memoizedProps),
            (c = t.type === t.elementType ? l : vt(t.type, l)),
            (s.props = c),
            (d = t.pendingProps),
            (f = s.context),
            (a = n.contextType),
            typeof a == 'object' && a !== null
                ? (a = ft(a))
                : ((a = Ue(n) ? Ln : Le.current), (a = Eo(t, a)));
        var m = n.getDerivedStateFromProps;
        (u =
            typeof m == 'function' ||
            typeof s.getSnapshotBeforeUpdate == 'function') ||
            (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
                typeof s.componentWillReceiveProps != 'function') ||
            ((l !== d || f !== a) && wd(t, s, o, a)),
            (en = !1),
            (f = t.memoizedState),
            (s.state = f),
            Kr(t, o, s, i);
        var y = t.memoizedState;
        l !== d || f !== y || Fe.current || en
            ? (typeof m == 'function' && (xa(t, n, m, o), (y = t.memoizedState)),
              (c = en || bd(t, n, c, o, f, y, a) || !1)
                  ? (u ||
                        (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                            typeof s.componentWillUpdate != 'function') ||
                        (typeof s.componentWillUpdate == 'function' &&
                            s.componentWillUpdate(o, y, a),
                        typeof s.UNSAFE_componentWillUpdate == 'function' &&
                            s.UNSAFE_componentWillUpdate(o, y, a)),
                    typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate == 'function' &&
                        (t.flags |= 1024))
                  : (typeof s.componentDidUpdate != 'function' ||
                        (l === e.memoizedProps && f === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate != 'function' ||
                        (l === e.memoizedProps && f === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = o),
                    (t.memoizedState = y)),
              (s.props = o),
              (s.state = y),
              (s.context = a),
              (o = c))
            : (typeof s.componentDidUpdate != 'function' ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != 'function' ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
              (o = !1));
    }
    return Sa(e, t, n, o, r, i);
}
function Sa(e, t, n, o, i, r) {
    Wp(e, t);
    var s = (t.flags & 128) !== 0;
    if (!o && !s) return i && pd(t, n, !1), Yt(e, t, r);
    (o = t.stateNode), (T0.current = t);
    var l = s && typeof n.getDerivedStateFromError != 'function' ? null : o.render();
    return (
        (t.flags |= 1),
        e !== null && s
            ? ((t.child = Co(t, e.child, null, r)), (t.child = Co(t, null, l, r)))
            : Oe(e, t, l, r),
        (t.memoizedState = o.state),
        i && pd(t, n, !0),
        t.child
    );
}
function Kp(e) {
    var t = e.stateNode;
    t.pendingContext
        ? hd(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && hd(e, t.context, !1),
        Cc(e, t.containerInfo);
}
function _d(e, t, n, o, i) {
    return So(), wc(i), (t.flags |= 256), Oe(e, t, n, o), t.child;
}
var Ca = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ta(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Qp(e, t, n) {
    var o = t.pendingProps,
        i = te.current,
        r = !1,
        s = (t.flags & 128) !== 0,
        l;
    if (
        ((l = s) ||
            (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
        l
            ? ((r = !0), (t.flags &= -129))
            : (e === null || e.memoizedState !== null) && (i |= 1),
        q(te, i & 1),
        e === null)
    )
        return (
            ba(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1
                      ? e.data === '$!'
                          ? (t.lanes = 8)
                          : (t.lanes = 1073741824)
                      : (t.lanes = 1),
                  null)
                : ((s = o.children),
                  (e = o.fallback),
                  r
                      ? ((o = t.mode),
                        (r = t.child),
                        (s = { mode: 'hidden', children: s }),
                        !(o & 1) && r !== null
                            ? ((r.childLanes = 0), (r.pendingProps = s))
                            : (r = Ss(s, o, 0, null)),
                        (e = _n(e, o, n, null)),
                        (r.return = t),
                        (e.return = t),
                        (r.sibling = e),
                        (t.child = r),
                        (t.child.memoizedState = Ta(n)),
                        (t.memoizedState = Ca),
                        e)
                      : Ac(t, s))
        );
    if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
        return P0(e, t, s, o, l, i, n);
    if (r) {
        (r = o.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
        var a = { mode: 'hidden', children: o.children };
        return (
            !(s & 1) && t.child !== i
                ? ((o = t.child),
                  (o.childLanes = 0),
                  (o.pendingProps = a),
                  (t.deletions = null))
                : ((o = pn(i, a)), (o.subtreeFlags = i.subtreeFlags & 14680064)),
            l !== null ? (r = pn(l, r)) : ((r = _n(r, s, n, null)), (r.flags |= 2)),
            (r.return = t),
            (o.return = t),
            (o.sibling = r),
            (t.child = o),
            (o = r),
            (r = t.child),
            (s = e.child.memoizedState),
            (s =
                s === null
                    ? Ta(n)
                    : {
                          baseLanes: s.baseLanes | n,
                          cachePool: null,
                          transitions: s.transitions,
                      }),
            (r.memoizedState = s),
            (r.childLanes = e.childLanes & ~n),
            (t.memoizedState = Ca),
            o
        );
    }
    return (
        (r = e.child),
        (e = r.sibling),
        (o = pn(r, { mode: 'visible', children: o.children })),
        !(t.mode & 1) && (o.lanes = n),
        (o.return = t),
        (o.sibling = null),
        e !== null &&
            ((n = t.deletions),
            n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = o),
        (t.memoizedState = null),
        o
    );
}
function Ac(e, t) {
    return (
        (t = Ss({ mode: 'visible', children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    );
}
function lr(e, t, n, o) {
    return (
        o !== null && wc(o),
        Co(t, e.child, null, n),
        (e = Ac(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function P0(e, t, n, o, i, r, s) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (o = Cl(Error(E(422)))), lr(e, t, s, o))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((r = o.fallback),
              (i = t.mode),
              (o = Ss({ mode: 'visible', children: o.children }, i, 0, null)),
              (r = _n(r, i, s, null)),
              (r.flags |= 2),
              (o.return = t),
              (r.return = t),
              (o.sibling = r),
              (t.child = o),
              t.mode & 1 && Co(t, e.child, null, s),
              (t.child.memoizedState = Ta(s)),
              (t.memoizedState = Ca),
              r);
    if (!(t.mode & 1)) return lr(e, t, s, null);
    if (i.data === '$!') {
        if (((o = i.nextSibling && i.nextSibling.dataset), o)) var l = o.dgst;
        return (o = l), (r = Error(E(419))), (o = Cl(r, o, void 0)), lr(e, t, s, o);
    }
    if (((l = (s & e.childLanes) !== 0), je || l)) {
        if (((o = ye), o !== null)) {
            switch (s & -s) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0;
            }
            (i = i & (o.suspendedLanes | s) ? 0 : i),
                i !== 0 &&
                    i !== r.retryLane &&
                    ((r.retryLane = i), Qt(e, i), kt(o, e, i, -1));
        }
        return jc(), (o = Cl(Error(E(421)))), lr(e, t, s, o);
    }
    return i.data === '$?'
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = H0.bind(null, e)),
          (i._reactRetry = t),
          null)
        : ((e = r.treeContext),
          (Ge = un(i.nextSibling)),
          (Ze = t),
          (ee = !0),
          (bt = null),
          e !== null &&
              ((lt[at++] = Ft),
              (lt[at++] = Ut),
              (lt[at++] = In),
              (Ft = e.id),
              (Ut = e.overflow),
              (In = t)),
          (t = Ac(t, o.children)),
          (t.flags |= 4096),
          t);
}
function Ld(e, t, n) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), wa(e.return, t, n);
}
function Tl(e, t, n, o, i) {
    var r = e.memoizedState;
    r === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: o,
              tail: n,
              tailMode: i,
          })
        : ((r.isBackwards = t),
          (r.rendering = null),
          (r.renderingStartTime = 0),
          (r.last = o),
          (r.tail = n),
          (r.tailMode = i));
}
function Yp(e, t, n) {
    var o = t.pendingProps,
        i = o.revealOrder,
        r = o.tail;
    if ((Oe(e, t, o.children, n), (o = te.current), o & 2))
        (o = (o & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && Ld(e, n, t);
                else if (e.tag === 19) Ld(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        o &= 1;
    }
    if ((q(te, o), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (i) {
            case 'forwards':
                for (n = t.child, i = null; n !== null; )
                    (e = n.alternate),
                        e !== null && Qr(e) === null && (i = n),
                        (n = n.sibling);
                (n = i),
                    n === null
                        ? ((i = t.child), (t.child = null))
                        : ((i = n.sibling), (n.sibling = null)),
                    Tl(t, !1, i, n, r);
                break;
            case 'backwards':
                for (n = null, i = t.child, t.child = null; i !== null; ) {
                    if (((e = i.alternate), e !== null && Qr(e) === null)) {
                        t.child = i;
                        break;
                    }
                    (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                Tl(t, !0, n, null, r);
                break;
            case 'together':
                Tl(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Sr(e, t) {
    !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Yt(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (An |= t.lanes),
        !(n & t.childLanes))
    )
        return null;
    if (e !== null && t.child !== e.child) throw Error(E(153));
    if (t.child !== null) {
        for (
            e = t.child, n = pn(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling), (n = n.sibling = pn(e, e.pendingProps)), (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function R0(e, t, n) {
    switch (t.tag) {
        case 3:
            Kp(t), So();
            break;
        case 5:
            xp(t);
            break;
        case 1:
            Ue(t.type) && Hr(t);
            break;
        case 4:
            Cc(t, t.stateNode.containerInfo);
            break;
        case 10:
            var o = t.type._context,
                i = t.memoizedProps.value;
            q(Vr, o._currentValue), (o._currentValue = i);
            break;
        case 13:
            if (((o = t.memoizedState), o !== null))
                return o.dehydrated !== null
                    ? (q(te, te.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                    ? Qp(e, t, n)
                    : (q(te, te.current & 1),
                      (e = Yt(e, t, n)),
                      e !== null ? e.sibling : null);
            q(te, te.current & 1);
            break;
        case 19:
            if (((o = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (o) return Yp(e, t, n);
                t.flags |= 128;
            }
            if (
                ((i = t.memoizedState),
                i !== null &&
                    ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
                q(te, te.current),
                o)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), Vp(e, t, n);
    }
    return Yt(e, t, n);
}
var Xp, Pa, qp, Gp;
Xp = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
Pa = function () {};
qp = function (e, t, n, o) {
    var i = e.memoizedProps;
    if (i !== o) {
        (e = t.stateNode), Tn(zt.current);
        var r = null;
        switch (n) {
            case 'input':
                (i = ql(e, i)), (o = ql(e, o)), (r = []);
                break;
            case 'select':
                (i = oe({}, i, { value: void 0 })),
                    (o = oe({}, o, { value: void 0 })),
                    (r = []);
                break;
            case 'textarea':
                (i = Jl(e, i)), (o = Jl(e, o)), (r = []);
                break;
            default:
                typeof i.onClick != 'function' &&
                    typeof o.onClick == 'function' &&
                    (e.onclick = Br);
        }
        ta(n, o);
        var s;
        n = null;
        for (c in i)
            if (!o.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
                if (c === 'style') {
                    var l = i[c];
                    for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
                } else
                    c !== 'dangerouslySetInnerHTML' &&
                        c !== 'children' &&
                        c !== 'suppressContentEditableWarning' &&
                        c !== 'suppressHydrationWarning' &&
                        c !== 'autoFocus' &&
                        (hi.hasOwnProperty(c)
                            ? r || (r = [])
                            : (r = r || []).push(c, null));
        for (c in o) {
            var a = o[c];
            if (
                ((l = i != null ? i[c] : void 0),
                o.hasOwnProperty(c) && a !== l && (a != null || l != null))
            )
                if (c === 'style')
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) ||
                                (a && a.hasOwnProperty(s)) ||
                                (n || (n = {}), (n[s] = ''));
                        for (s in a)
                            a.hasOwnProperty(s) &&
                                l[s] !== a[s] &&
                                (n || (n = {}), (n[s] = a[s]));
                    } else n || (r || (r = []), r.push(c, n)), (n = a);
                else
                    c === 'dangerouslySetInnerHTML'
                        ? ((a = a ? a.__html : void 0),
                          (l = l ? l.__html : void 0),
                          a != null && l !== a && (r = r || []).push(c, a))
                        : c === 'children'
                        ? (typeof a != 'string' && typeof a != 'number') ||
                          (r = r || []).push(c, '' + a)
                        : c !== 'suppressContentEditableWarning' &&
                          c !== 'suppressHydrationWarning' &&
                          (hi.hasOwnProperty(c)
                              ? (a != null && c === 'onScroll' && G('scroll', e),
                                r || l === a || (r = []))
                              : (r = r || []).push(c, a));
        }
        n && (r = r || []).push('style', n);
        var c = r;
        (t.updateQueue = c) && (t.flags |= 4);
    }
};
Gp = function (e, t, n, o) {
    n !== o && (t.flags |= 4);
};
function Qo(e, t) {
    if (!ee)
        switch (e.tailMode) {
            case 'hidden':
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case 'collapsed':
                n = e.tail;
                for (var o = null; n !== null; )
                    n.alternate !== null && (o = n), (n = n.sibling);
                o === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (o.sibling = null);
        }
}
function Pe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        o = 0;
    if (t)
        for (var i = e.child; i !== null; )
            (n |= i.lanes | i.childLanes),
                (o |= i.subtreeFlags & 14680064),
                (o |= i.flags & 14680064),
                (i.return = e),
                (i = i.sibling);
    else
        for (i = e.child; i !== null; )
            (n |= i.lanes | i.childLanes),
                (o |= i.subtreeFlags),
                (o |= i.flags),
                (i.return = e),
                (i = i.sibling);
    return (e.subtreeFlags |= o), (e.childLanes = n), t;
}
function _0(e, t, n) {
    var o = t.pendingProps;
    switch ((bc(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Pe(t), null;
        case 1:
            return Ue(t.type) && jr(), Pe(t), null;
        case 3:
            return (
                (o = t.stateNode),
                To(),
                Z(Fe),
                Z(Le),
                Pc(),
                o.pendingContext &&
                    ((o.context = o.pendingContext), (o.pendingContext = null)),
                (e === null || e.child === null) &&
                    (rr(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024), bt !== null && (Ma(bt), (bt = null)))),
                Pa(e, t),
                Pe(t),
                null
            );
        case 5:
            Tc(t);
            var i = Tn(Si.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                qp(e, t, n, o, i),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!o) {
                    if (t.stateNode === null) throw Error(E(166));
                    return Pe(t), null;
                }
                if (((e = Tn(zt.current)), rr(t))) {
                    (o = t.stateNode), (n = t.type);
                    var r = t.memoizedProps;
                    switch (
                        ((o[Ot] = t), (o[ki] = r), (e = (t.mode & 1) !== 0), n)
                    ) {
                        case 'dialog':
                            G('cancel', o), G('close', o);
                            break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            G('load', o);
                            break;
                        case 'video':
                        case 'audio':
                            for (i = 0; i < Jo.length; i++) G(Jo[i], o);
                            break;
                        case 'source':
                            G('error', o);
                            break;
                        case 'img':
                        case 'image':
                        case 'link':
                            G('error', o), G('load', o);
                            break;
                        case 'details':
                            G('toggle', o);
                            break;
                        case 'input':
                            ju(o, r), G('invalid', o);
                            break;
                        case 'select':
                            (o._wrapperState = { wasMultiple: !!r.multiple }),
                                G('invalid', o);
                            break;
                        case 'textarea':
                            Fu(o, r), G('invalid', o);
                    }
                    ta(n, r), (i = null);
                    for (var s in r)
                        if (r.hasOwnProperty(s)) {
                            var l = r[s];
                            s === 'children'
                                ? typeof l == 'string'
                                    ? o.textContent !== l &&
                                      (r.suppressHydrationWarning !== !0 &&
                                          ir(o.textContent, l, e),
                                      (i = ['children', l]))
                                    : typeof l == 'number' &&
                                      o.textContent !== '' + l &&
                                      (r.suppressHydrationWarning !== !0 &&
                                          ir(o.textContent, l, e),
                                      (i = ['children', '' + l]))
                                : hi.hasOwnProperty(s) &&
                                  l != null &&
                                  s === 'onScroll' &&
                                  G('scroll', o);
                        }
                    switch (n) {
                        case 'input':
                            qi(o), Hu(o, r, !0);
                            break;
                        case 'textarea':
                            qi(o), Uu(o);
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            typeof r.onClick == 'function' && (o.onclick = Br);
                    }
                    (o = i), (t.updateQueue = o), o !== null && (t.flags |= 4);
                } else {
                    (s = i.nodeType === 9 ? i : i.ownerDocument),
                        e === 'http://www.w3.org/1999/xhtml' && (e = Eh(n)),
                        e === 'http://www.w3.org/1999/xhtml'
                            ? n === 'script'
                                ? ((e = s.createElement('div')),
                                  (e.innerHTML = '<script></script>'),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof o.is == 'string'
                                ? (e = s.createElement(n, { is: o.is }))
                                : ((e = s.createElement(n)),
                                  n === 'select' &&
                                      ((s = e),
                                      o.multiple
                                          ? (s.multiple = !0)
                                          : o.size && (s.size = o.size)))
                            : (e = s.createElementNS(e, n)),
                        (e[Ot] = t),
                        (e[ki] = o),
                        Xp(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((s = na(n, o)), n)) {
                            case 'dialog':
                                G('cancel', e), G('close', e), (i = o);
                                break;
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                G('load', e), (i = o);
                                break;
                            case 'video':
                            case 'audio':
                                for (i = 0; i < Jo.length; i++) G(Jo[i], e);
                                i = o;
                                break;
                            case 'source':
                                G('error', e), (i = o);
                                break;
                            case 'img':
                            case 'image':
                            case 'link':
                                G('error', e), G('load', e), (i = o);
                                break;
                            case 'details':
                                G('toggle', e), (i = o);
                                break;
                            case 'input':
                                ju(e, o), (i = ql(e, o)), G('invalid', e);
                                break;
                            case 'option':
                                i = o;
                                break;
                            case 'select':
                                (e._wrapperState = { wasMultiple: !!o.multiple }),
                                    (i = oe({}, o, { value: void 0 })),
                                    G('invalid', e);
                                break;
                            case 'textarea':
                                Fu(e, o), (i = Jl(e, o)), G('invalid', e);
                                break;
                            default:
                                i = o;
                        }
                        ta(n, i), (l = i);
                        for (r in l)
                            if (l.hasOwnProperty(r)) {
                                var a = l[r];
                                r === 'style'
                                    ? Th(e, a)
                                    : r === 'dangerouslySetInnerHTML'
                                    ? ((a = a ? a.__html : void 0),
                                      a != null && Sh(e, a))
                                    : r === 'children'
                                    ? typeof a == 'string'
                                        ? (n !== 'textarea' || a !== '') && pi(e, a)
                                        : typeof a == 'number' && pi(e, '' + a)
                                    : r !== 'suppressContentEditableWarning' &&
                                      r !== 'suppressHydrationWarning' &&
                                      r !== 'autoFocus' &&
                                      (hi.hasOwnProperty(r)
                                          ? a != null &&
                                            r === 'onScroll' &&
                                            G('scroll', e)
                                          : a != null && ic(e, r, a, s));
                            }
                        switch (n) {
                            case 'input':
                                qi(e), Hu(e, o, !1);
                                break;
                            case 'textarea':
                                qi(e), Uu(e);
                                break;
                            case 'option':
                                o.value != null &&
                                    e.setAttribute('value', '' + mn(o.value));
                                break;
                            case 'select':
                                (e.multiple = !!o.multiple),
                                    (r = o.value),
                                    r != null
                                        ? po(e, !!o.multiple, r, !1)
                                        : o.defaultValue != null &&
                                          po(e, !!o.multiple, o.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == 'function' && (e.onclick = Br);
                        }
                        switch (n) {
                            case 'button':
                            case 'input':
                            case 'select':
                            case 'textarea':
                                o = !!o.autoFocus;
                                break e;
                            case 'img':
                                o = !0;
                                break e;
                            default:
                                o = !1;
                        }
                    }
                    o && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return Pe(t), null;
        case 6:
            if (e && t.stateNode != null) Gp(e, t, e.memoizedProps, o);
            else {
                if (typeof o != 'string' && t.stateNode === null)
                    throw Error(E(166));
                if (((n = Tn(Si.current)), Tn(zt.current), rr(t))) {
                    if (
                        ((o = t.stateNode),
                        (n = t.memoizedProps),
                        (o[Ot] = t),
                        (r = o.nodeValue !== n) && ((e = Ze), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                ir(o.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 &&
                                    ir(o.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    r && (t.flags |= 4);
                } else
                    (o = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(o)),
                        (o[Ot] = t),
                        (t.stateNode = o);
            }
            return Pe(t), null;
        case 13:
            if (
                (Z(te),
                (o = t.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if (ee && Ge !== null && t.mode & 1 && !(t.flags & 128))
                    pp(), So(), (t.flags |= 98560), (r = !1);
                else if (((r = rr(t)), o !== null && o.dehydrated !== null)) {
                    if (e === null) {
                        if (!r) throw Error(E(318));
                        if (
                            ((r = t.memoizedState),
                            (r = r !== null ? r.dehydrated : null),
                            !r)
                        )
                            throw Error(E(317));
                        r[Ot] = t;
                    } else
                        So(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            (t.flags |= 4);
                    Pe(t), (r = !1);
                } else bt !== null && (Ma(bt), (bt = null)), (r = !0);
                if (!r) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((o = o !== null),
                  o !== (e !== null && e.memoizedState !== null) &&
                      o &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 &&
                          (e === null || te.current & 1
                              ? ge === 0 && (ge = 3)
                              : jc())),
                  t.updateQueue !== null && (t.flags |= 4),
                  Pe(t),
                  null);
        case 4:
            return (
                To(),
                Pa(e, t),
                e === null && xi(t.stateNode.containerInfo),
                Pe(t),
                null
            );
        case 10:
            return kc(t.type._context), Pe(t), null;
        case 17:
            return Ue(t.type) && jr(), Pe(t), null;
        case 19:
            if ((Z(te), (r = t.memoizedState), r === null)) return Pe(t), null;
            if (((o = (t.flags & 128) !== 0), (s = r.rendering), s === null))
                if (o) Qo(r, !1);
                else {
                    if (ge !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((s = Qr(e)), s !== null)) {
                                for (
                                    t.flags |= 128,
                                        Qo(r, !1),
                                        o = s.updateQueue,
                                        o !== null &&
                                            ((t.updateQueue = o), (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        o = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (r = n),
                                        (e = o),
                                        (r.flags &= 14680066),
                                        (s = r.alternate),
                                        s === null
                                            ? ((r.childLanes = 0),
                                              (r.lanes = e),
                                              (r.child = null),
                                              (r.subtreeFlags = 0),
                                              (r.memoizedProps = null),
                                              (r.memoizedState = null),
                                              (r.updateQueue = null),
                                              (r.dependencies = null),
                                              (r.stateNode = null))
                                            : ((r.childLanes = s.childLanes),
                                              (r.lanes = s.lanes),
                                              (r.child = s.child),
                                              (r.subtreeFlags = 0),
                                              (r.deletions = null),
                                              (r.memoizedProps = s.memoizedProps),
                                              (r.memoizedState = s.memoizedState),
                                              (r.updateQueue = s.updateQueue),
                                              (r.type = s.type),
                                              (e = s.dependencies),
                                              (r.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return q(te, (te.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    r.tail !== null &&
                        ce() > Ro &&
                        ((t.flags |= 128), (o = !0), Qo(r, !1), (t.lanes = 4194304));
                }
            else {
                if (!o)
                    if (((e = Qr(s)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (o = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            Qo(r, !0),
                            r.tail === null &&
                                r.tailMode === 'hidden' &&
                                !s.alternate &&
                                !ee)
                        )
                            return Pe(t), null;
                    } else
                        2 * ce() - r.renderingStartTime > Ro &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (o = !0),
                            Qo(r, !1),
                            (t.lanes = 4194304));
                r.isBackwards
                    ? ((s.sibling = t.child), (t.child = s))
                    : ((n = r.last),
                      n !== null ? (n.sibling = s) : (t.child = s),
                      (r.last = s));
            }
            return r.tail !== null
                ? ((t = r.tail),
                  (r.rendering = t),
                  (r.tail = t.sibling),
                  (r.renderingStartTime = ce()),
                  (t.sibling = null),
                  (n = te.current),
                  q(te, o ? (n & 1) | 2 : n & 1),
                  t)
                : (Pe(t), null);
        case 22:
        case 23:
            return (
                Bc(),
                (o = t.memoizedState !== null),
                e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
                o && t.mode & 1
                    ? Ye & 1073741824 &&
                      (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : Pe(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(E(156, t.tag));
}
function L0(e, t) {
    switch ((bc(t), t.tag)) {
        case 1:
            return (
                Ue(t.type) && jr(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 3:
            return (
                To(),
                Z(Fe),
                Z(Le),
                Pc(),
                (e = t.flags),
                e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 5:
            return Tc(t), null;
        case 13:
            if (
                (Z(te), (e = t.memoizedState), e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error(E(340));
                So();
            }
            return (
                (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 19:
            return Z(te), null;
        case 4:
            return To(), null;
        case 10:
            return kc(t.type._context), null;
        case 22:
        case 23:
            return Bc(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var ar = !1,
    _e = !1,
    I0 = typeof WeakSet == 'function' ? WeakSet : Set,
    I = null;
function fo(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == 'function')
            try {
                n(null);
            } catch (o) {
                re(e, t, o);
            }
        else n.current = null;
}
function Ra(e, t, n) {
    try {
        n();
    } catch (o) {
        re(e, t, o);
    }
}
var Id = !1;
function O0(e, t) {
    if (((fa = Mr), (e = tp()), vc(e))) {
        if ('selectionStart' in e)
            var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var o = n.getSelection && n.getSelection();
                if (o && o.rangeCount !== 0) {
                    n = o.anchorNode;
                    var i = o.anchorOffset,
                        r = o.focusNode;
                    o = o.focusOffset;
                    try {
                        n.nodeType, r.nodeType;
                    } catch (x) {
                        n = null;
                        break e;
                    }
                    var s = 0,
                        l = -1,
                        a = -1,
                        c = 0,
                        u = 0,
                        d = e,
                        f = null;
                    t: for (;;) {
                        for (
                            var m;
                            d !== n || (i !== 0 && d.nodeType !== 3) || (l = s + i),
                                d !== r ||
                                    (o !== 0 && d.nodeType !== 3) ||
                                    (a = s + o),
                                d.nodeType === 3 && (s += d.nodeValue.length),
                                (m = d.firstChild) !== null;

                        )
                            (f = d), (d = m);
                        for (;;) {
                            if (d === e) break t;
                            if (
                                (f === n && ++c === i && (l = s),
                                f === r && ++u === o && (a = s),
                                (m = d.nextSibling) !== null)
                            )
                                break;
                            (d = f), (f = d.parentNode);
                        }
                        d = m;
                    }
                    n = l === -1 || a === -1 ? null : { start: l, end: a };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (ha = { focusedElem: e, selectionRange: n }, Mr = !1, I = t; I !== null; )
        if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
            (e.return = t), (I = e);
        else
            for (; I !== null; ) {
                t = I;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (y !== null) {
                                    var w = y.memoizedProps,
                                        O = y.memoizedState,
                                        p = t.stateNode,
                                        h = p.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? w
                                                : vt(t.type, w),
                                            O
                                        );
                                    p.__reactInternalSnapshotBeforeUpdate = h;
                                }
                                break;
                            case 3:
                                var g = t.stateNode.containerInfo;
                                g.nodeType === 1
                                    ? (g.textContent = '')
                                    : g.nodeType === 9 &&
                                      g.documentElement &&
                                      g.removeChild(g.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(E(163));
                        }
                } catch (x) {
                    re(t, t.return, x);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (I = e);
                    break;
                }
                I = t.return;
            }
    return (y = Id), (Id = !1), y;
}
function ai(e, t, n) {
    var o = t.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
        var i = (o = o.next);
        do {
            if ((i.tag & e) === e) {
                var r = i.destroy;
                (i.destroy = void 0), r !== void 0 && Ra(t, n, r);
            }
            i = i.next;
        } while (i !== o);
    }
}
function ks(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var o = n.create;
                n.destroy = o();
            }
            n = n.next;
        } while (n !== t);
    }
}
function _a(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == 'function' ? t(e) : (t.current = e);
    }
}
function Zp(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Zp(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[Ot],
                delete t[ki],
                delete t[ga],
                delete t[m0],
                delete t[g0])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function Jp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Od(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || Jp(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function La(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8
                      ? ((t = n.parentNode), t.insertBefore(e, n))
                      : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = Br));
    else if (o !== 4 && ((e = e.child), e !== null))
        for (La(e, t, n), e = e.sibling; e !== null; ) La(e, t, n), (e = e.sibling);
}
function Ia(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (o !== 4 && ((e = e.child), e !== null))
        for (Ia(e, t, n), e = e.sibling; e !== null; ) Ia(e, t, n), (e = e.sibling);
}
var $e = null,
    yt = !1;
function Zt(e, t, n) {
    for (n = n.child; n !== null; ) em(e, t, n), (n = n.sibling);
}
function em(e, t, n) {
    if (At && typeof At.onCommitFiberUnmount == 'function')
        try {
            At.onCommitFiberUnmount(ms, n);
        } catch (l) {}
    switch (n.tag) {
        case 5:
            _e || fo(n, t);
        case 6:
            var o = $e,
                i = yt;
            ($e = null),
                Zt(e, t, n),
                ($e = o),
                (yt = i),
                $e !== null &&
                    (yt
                        ? ((e = $e),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(n)
                              : e.removeChild(n))
                        : $e.removeChild(n.stateNode));
            break;
        case 18:
            $e !== null &&
                (yt
                    ? ((e = $e),
                      (n = n.stateNode),
                      e.nodeType === 8
                          ? wl(e.parentNode, n)
                          : e.nodeType === 1 && wl(e, n),
                      yi(e))
                    : wl($e, n.stateNode));
            break;
        case 4:
            (o = $e),
                (i = yt),
                ($e = n.stateNode.containerInfo),
                (yt = !0),
                Zt(e, t, n),
                ($e = o),
                (yt = i);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !_e &&
                ((o = n.updateQueue), o !== null && ((o = o.lastEffect), o !== null))
            ) {
                i = o = o.next;
                do {
                    var r = i,
                        s = r.destroy;
                    (r = r.tag),
                        s !== void 0 && (r & 2 || r & 4) && Ra(n, t, s),
                        (i = i.next);
                } while (i !== o);
            }
            Zt(e, t, n);
            break;
        case 1:
            if (
                !_e &&
                (fo(n, t),
                (o = n.stateNode),
                typeof o.componentWillUnmount == 'function')
            )
                try {
                    (o.props = n.memoizedProps),
                        (o.state = n.memoizedState),
                        o.componentWillUnmount();
                } catch (l) {
                    re(n, t, l);
                }
            Zt(e, t, n);
            break;
        case 21:
            Zt(e, t, n);
            break;
        case 22:
            n.mode & 1
                ? ((_e = (o = _e) || n.memoizedState !== null),
                  Zt(e, t, n),
                  (_e = o))
                : Zt(e, t, n);
            break;
        default:
            Zt(e, t, n);
    }
}
function Ad(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new I0()),
            t.forEach(function (o) {
                var i = F0.bind(null, e, o);
                n.has(o) || (n.add(o), o.then(i, i));
            });
    }
}
function mt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var o = 0; o < n.length; o++) {
            var i = n[o];
            try {
                var r = e,
                    s = t,
                    l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                        case 5:
                            ($e = l.stateNode), (yt = !1);
                            break e;
                        case 3:
                            ($e = l.stateNode.containerInfo), (yt = !0);
                            break e;
                        case 4:
                            ($e = l.stateNode.containerInfo), (yt = !0);
                            break e;
                    }
                    l = l.return;
                }
                if ($e === null) throw Error(E(160));
                em(r, s, i), ($e = null), (yt = !1);
                var a = i.alternate;
                a !== null && (a.return = null), (i.return = null);
            } catch (c) {
                re(i, t, c);
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) tm(t, e), (t = t.sibling);
}
function tm(e, t) {
    var n = e.alternate,
        o = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((mt(t, e), _t(e), o & 4)) {
                try {
                    ai(3, e, e.return), ks(3, e);
                } catch (w) {
                    re(e, e.return, w);
                }
                try {
                    ai(5, e, e.return);
                } catch (w) {
                    re(e, e.return, w);
                }
            }
            break;
        case 1:
            mt(t, e), _t(e), o & 512 && n !== null && fo(n, n.return);
            break;
        case 5:
            if (
                (mt(t, e),
                _t(e),
                o & 512 && n !== null && fo(n, n.return),
                e.flags & 32)
            ) {
                var i = e.stateNode;
                try {
                    pi(i, '');
                } catch (w) {
                    re(e, e.return, w);
                }
            }
            if (o & 4 && ((i = e.stateNode), i != null)) {
                var r = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : r,
                    l = e.type,
                    a = e.updateQueue;
                if (((e.updateQueue = null), a !== null))
                    try {
                        l === 'input' &&
                            r.type === 'radio' &&
                            r.name != null &&
                            $h(i, r),
                            na(l, s);
                        var c = na(l, r);
                        for (s = 0; s < a.length; s += 2) {
                            var u = a[s],
                                d = a[s + 1];
                            u === 'style'
                                ? Th(i, d)
                                : u === 'dangerouslySetInnerHTML'
                                ? Sh(i, d)
                                : u === 'children'
                                ? pi(i, d)
                                : ic(i, u, d, c);
                        }
                        switch (l) {
                            case 'input':
                                Gl(i, r);
                                break;
                            case 'textarea':
                                kh(i, r);
                                break;
                            case 'select':
                                var f = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!r.multiple;
                                var m = r.value;
                                m != null
                                    ? po(i, !!r.multiple, m, !1)
                                    : f !== !!r.multiple &&
                                      (r.defaultValue != null
                                          ? po(i, !!r.multiple, r.defaultValue, !0)
                                          : po(
                                                i,
                                                !!r.multiple,
                                                r.multiple ? [] : '',
                                                !1
                                            ));
                        }
                        i[ki] = r;
                    } catch (w) {
                        re(e, e.return, w);
                    }
            }
            break;
        case 6:
            if ((mt(t, e), _t(e), o & 4)) {
                if (e.stateNode === null) throw Error(E(162));
                (i = e.stateNode), (r = e.memoizedProps);
                try {
                    i.nodeValue = r;
                } catch (w) {
                    re(e, e.return, w);
                }
            }
            break;
        case 3:
            if (
                (mt(t, e),
                _t(e),
                o & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    yi(t.containerInfo);
                } catch (w) {
                    re(e, e.return, w);
                }
            break;
        case 4:
            mt(t, e), _t(e);
            break;
        case 13:
            mt(t, e),
                _t(e),
                (i = e.child),
                i.flags & 8192 &&
                    ((r = i.memoizedState !== null),
                    (i.stateNode.isHidden = r),
                    !r ||
                        (i.alternate !== null &&
                            i.alternate.memoizedState !== null) ||
                        (Nc = ce())),
                o & 4 && Ad(e);
            break;
        case 22:
            if (
                ((u = n !== null && n.memoizedState !== null),
                e.mode & 1 ? ((_e = (c = _e) || u), mt(t, e), (_e = c)) : mt(t, e),
                _t(e),
                o & 8192)
            ) {
                if (
                    ((c = e.memoizedState !== null),
                    (e.stateNode.isHidden = c) && !u && e.mode & 1)
                )
                    for (I = e, u = e.child; u !== null; ) {
                        for (d = I = u; I !== null; ) {
                            switch (((f = I), (m = f.child), f.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    ai(4, f, f.return);
                                    break;
                                case 1:
                                    fo(f, f.return);
                                    var y = f.stateNode;
                                    if (
                                        typeof y.componentWillUnmount == 'function'
                                    ) {
                                        (o = f), (n = f.return);
                                        try {
                                            (t = o),
                                                (y.props = t.memoizedProps),
                                                (y.state = t.memoizedState),
                                                y.componentWillUnmount();
                                        } catch (w) {
                                            re(o, n, w);
                                        }
                                    }
                                    break;
                                case 5:
                                    fo(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        Md(d);
                                        continue;
                                    }
                            }
                            m !== null ? ((m.return = f), (I = m)) : Md(d);
                        }
                        u = u.sibling;
                    }
                e: for (u = null, d = e; ; ) {
                    if (d.tag === 5) {
                        if (u === null) {
                            u = d;
                            try {
                                (i = d.stateNode),
                                    c
                                        ? ((r = i.style),
                                          typeof r.setProperty == 'function'
                                              ? r.setProperty(
                                                    'display',
                                                    'none',
                                                    'important'
                                                )
                                              : (r.display = 'none'))
                                        : ((l = d.stateNode),
                                          (a = d.memoizedProps.style),
                                          (s =
                                              a != null &&
                                              a.hasOwnProperty('display')
                                                  ? a.display
                                                  : null),
                                          (l.style.display = Ch('display', s)));
                            } catch (w) {
                                re(e, e.return, w);
                            }
                        }
                    } else if (d.tag === 6) {
                        if (u === null)
                            try {
                                d.stateNode.nodeValue = c ? '' : d.memoizedProps;
                            } catch (w) {
                                re(e, e.return, w);
                            }
                    } else if (
                        ((d.tag !== 22 && d.tag !== 23) ||
                            d.memoizedState === null ||
                            d === e) &&
                        d.child !== null
                    ) {
                        (d.child.return = d), (d = d.child);
                        continue;
                    }
                    if (d === e) break e;
                    for (; d.sibling === null; ) {
                        if (d.return === null || d.return === e) break e;
                        u === d && (u = null), (d = d.return);
                    }
                    u === d && (u = null),
                        (d.sibling.return = d.return),
                        (d = d.sibling);
                }
            }
            break;
        case 19:
            mt(t, e), _t(e), o & 4 && Ad(e);
            break;
        case 21:
            break;
        default:
            mt(t, e), _t(e);
    }
}
function _t(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Jp(n)) {
                        var o = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(E(160));
            }
            switch (o.tag) {
                case 5:
                    var i = o.stateNode;
                    o.flags & 32 && (pi(i, ''), (o.flags &= -33));
                    var r = Od(e);
                    Ia(e, r, i);
                    break;
                case 3:
                case 4:
                    var s = o.stateNode.containerInfo,
                        l = Od(e);
                    La(e, l, s);
                    break;
                default:
                    throw Error(E(161));
            }
        } catch (a) {
            re(e, e.return, a);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function A0(e, t, n) {
    (I = e), nm(e);
}
function nm(e, t, n) {
    for (var o = (e.mode & 1) !== 0; I !== null; ) {
        var i = I,
            r = i.child;
        if (i.tag === 22 && o) {
            var s = i.memoizedState !== null || ar;
            if (!s) {
                var l = i.alternate,
                    a = (l !== null && l.memoizedState !== null) || _e;
                l = ar;
                var c = _e;
                if (((ar = s), (_e = a) && !c))
                    for (I = i; I !== null; )
                        (s = I),
                            (a = s.child),
                            s.tag === 22 && s.memoizedState !== null
                                ? Nd(i)
                                : a !== null
                                ? ((a.return = s), (I = a))
                                : Nd(i);
                for (; r !== null; ) (I = r), nm(r), (r = r.sibling);
                (I = i), (ar = l), (_e = c);
            }
            zd(e);
        } else
            i.subtreeFlags & 8772 && r !== null ? ((r.return = i), (I = r)) : zd(e);
    }
}
function zd(e) {
    for (; I !== null; ) {
        var t = I;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            _e || ks(5, t);
                            break;
                        case 1:
                            var o = t.stateNode;
                            if (t.flags & 4 && !_e)
                                if (n === null) o.componentDidMount();
                                else {
                                    var i =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : vt(t.type, n.memoizedProps);
                                    o.componentDidUpdate(
                                        i,
                                        n.memoizedState,
                                        o.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var r = t.updateQueue;
                            r !== null && yd(t, r, o);
                            break;
                        case 3:
                            var s = t.updateQueue;
                            if (s !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                yd(t, s, n);
                            }
                            break;
                        case 5:
                            var l = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = l;
                                var a = t.memoizedProps;
                                switch (t.type) {
                                    case 'button':
                                    case 'input':
                                    case 'select':
                                    case 'textarea':
                                        a.autoFocus && n.focus();
                                        break;
                                    case 'img':
                                        a.src && (n.src = a.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var c = t.alternate;
                                if (c !== null) {
                                    var u = c.memoizedState;
                                    if (u !== null) {
                                        var d = u.dehydrated;
                                        d !== null && yi(d);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(E(163));
                    }
                _e || (t.flags & 512 && _a(t));
            } catch (f) {
                re(t, t.return, f);
            }
        }
        if (t === e) {
            I = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (I = n);
            break;
        }
        I = t.return;
    }
}
function Md(e) {
    for (; I !== null; ) {
        var t = I;
        if (t === e) {
            I = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (I = n);
            break;
        }
        I = t.return;
    }
}
function Nd(e) {
    for (; I !== null; ) {
        var t = I;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ks(4, t);
                    } catch (a) {
                        re(t, n, a);
                    }
                    break;
                case 1:
                    var o = t.stateNode;
                    if (typeof o.componentDidMount == 'function') {
                        var i = t.return;
                        try {
                            o.componentDidMount();
                        } catch (a) {
                            re(t, i, a);
                        }
                    }
                    var r = t.return;
                    try {
                        _a(t);
                    } catch (a) {
                        re(t, r, a);
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        _a(t);
                    } catch (a) {
                        re(t, s, a);
                    }
            }
        } catch (a) {
            re(t, t.return, a);
        }
        if (t === e) {
            I = null;
            break;
        }
        var l = t.sibling;
        if (l !== null) {
            (l.return = t.return), (I = l);
            break;
        }
        I = t.return;
    }
}
var z0 = Math.ceil,
    qr = Xt.ReactCurrentDispatcher,
    zc = Xt.ReactCurrentOwner,
    dt = Xt.ReactCurrentBatchConfig,
    U = 0,
    ye = null,
    he = null,
    ke = 0,
    Ye = 0,
    ho = wn(0),
    ge = 0,
    Ri = null,
    An = 0,
    Es = 0,
    Mc = 0,
    ci = null,
    Be = null,
    Nc = 0,
    Ro = 1 / 0,
    Dt = null,
    Gr = !1,
    Oa = null,
    fn = null,
    cr = !1,
    rn = null,
    Zr = 0,
    ui = 0,
    Aa = null,
    Cr = -1,
    Tr = 0;
function Ae() {
    return U & 6 ? ce() : Cr !== -1 ? Cr : (Cr = ce());
}
function hn(e) {
    return e.mode & 1
        ? U & 2 && ke !== 0
            ? ke & -ke
            : y0.transition !== null
            ? (Tr === 0 && (Tr = Bh()), Tr)
            : ((e = W),
              e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Kh(e.type))),
              e)
        : 1;
}
function kt(e, t, n, o) {
    if (50 < ui) throw ((ui = 0), (Aa = null), Error(E(185)));
    Mi(e, n, o),
        (!(U & 2) || e !== ye) &&
            (e === ye && (!(U & 2) && (Es |= n), ge === 4 && nn(e, ke)),
            Ve(e, o),
            n === 1 && U === 0 && !(t.mode & 1) && ((Ro = ce() + 500), ws && xn()));
}
function Ve(e, t) {
    var n = e.callbackNode;
    yy(e, t);
    var o = zr(e, e === ye ? ke : 0);
    if (o === 0)
        n !== null && Ku(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = o & -o), e.callbackPriority !== t)) {
        if ((n != null && Ku(n), t === 1))
            e.tag === 0 ? v0(Dd.bind(null, e)) : dp(Dd.bind(null, e)),
                h0(function () {
                    !(U & 6) && xn();
                }),
                (n = null);
        else {
            switch (jh(o)) {
                case 1:
                    n = cc;
                    break;
                case 4:
                    n = Nh;
                    break;
                case 16:
                    n = Ar;
                    break;
                case 536870912:
                    n = Dh;
                    break;
                default:
                    n = Ar;
            }
            n = um(n, om.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function om(e, t) {
    if (((Cr = -1), (Tr = 0), U & 6)) throw Error(E(327));
    var n = e.callbackNode;
    if (bo() && e.callbackNode !== n) return null;
    var o = zr(e, e === ye ? ke : 0);
    if (o === 0) return null;
    if (o & 30 || o & e.expiredLanes || t) t = Jr(e, o);
    else {
        t = o;
        var i = U;
        U |= 2;
        var r = rm();
        (ye !== e || ke !== t) && ((Dt = null), (Ro = ce() + 500), Rn(e, t));
        do
            try {
                D0();
                break;
            } catch (l) {
                im(e, l);
            }
        while (1);
        $c(),
            (qr.current = r),
            (U = i),
            he !== null ? (t = 0) : ((ye = null), (ke = 0), (t = ge));
    }
    if (t !== 0) {
        if (
            (t === 2 && ((i = la(e)), i !== 0 && ((o = i), (t = za(e, i)))), t === 1)
        )
            throw ((n = Ri), Rn(e, 0), nn(e, o), Ve(e, ce()), n);
        if (t === 6) nn(e, o);
        else {
            if (
                ((i = e.current.alternate),
                !(o & 30) &&
                    !M0(i) &&
                    ((t = Jr(e, o)),
                    t === 2 && ((r = la(e)), r !== 0 && ((o = r), (t = za(e, r)))),
                    t === 1))
            )
                throw ((n = Ri), Rn(e, 0), nn(e, o), Ve(e, ce()), n);
            switch (((e.finishedWork = i), (e.finishedLanes = o), t)) {
                case 0:
                case 1:
                    throw Error(E(345));
                case 2:
                    En(e, Be, Dt);
                    break;
                case 3:
                    if (
                        (nn(e, o),
                        (o & 130023424) === o && ((t = Nc + 500 - ce()), 10 < t))
                    ) {
                        if (zr(e, 0) !== 0) break;
                        if (((i = e.suspendedLanes), (i & o) !== o)) {
                            Ae(), (e.pingedLanes |= e.suspendedLanes & i);
                            break;
                        }
                        e.timeoutHandle = ma(En.bind(null, e, Be, Dt), t);
                        break;
                    }
                    En(e, Be, Dt);
                    break;
                case 4:
                    if ((nn(e, o), (o & 4194240) === o)) break;
                    for (t = e.eventTimes, i = -1; 0 < o; ) {
                        var s = 31 - $t(o);
                        (r = 1 << s), (s = t[s]), s > i && (i = s), (o &= ~r);
                    }
                    if (
                        ((o = i),
                        (o = ce() - o),
                        (o =
                            (120 > o
                                ? 120
                                : 480 > o
                                ? 480
                                : 1080 > o
                                ? 1080
                                : 1920 > o
                                ? 1920
                                : 3e3 > o
                                ? 3e3
                                : 4320 > o
                                ? 4320
                                : 1960 * z0(o / 1960)) - o),
                        10 < o)
                    ) {
                        e.timeoutHandle = ma(En.bind(null, e, Be, Dt), o);
                        break;
                    }
                    En(e, Be, Dt);
                    break;
                case 5:
                    En(e, Be, Dt);
                    break;
                default:
                    throw Error(E(329));
            }
        }
    }
    return Ve(e, ce()), e.callbackNode === n ? om.bind(null, e) : null;
}
function za(e, t) {
    var n = ci;
    return (
        e.current.memoizedState.isDehydrated && (Rn(e, t).flags |= 256),
        (e = Jr(e, t)),
        e !== 2 && ((t = Be), (Be = n), t !== null && Ma(t)),
        e
    );
}
function Ma(e) {
    Be === null ? (Be = e) : Be.push.apply(Be, e);
}
function M0(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var o = 0; o < n.length; o++) {
                    var i = n[o],
                        r = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Ct(r(), i)) return !1;
                    } catch (s) {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function nn(e, t) {
    for (
        t &= ~Mc,
            t &= ~Es,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - $t(t),
            o = 1 << n;
        (e[n] = -1), (t &= ~o);
    }
}
function Dd(e) {
    if (U & 6) throw Error(E(327));
    bo();
    var t = zr(e, 0);
    if (!(t & 1)) return Ve(e, ce()), null;
    var n = Jr(e, t);
    if (e.tag !== 0 && n === 2) {
        var o = la(e);
        o !== 0 && ((t = o), (n = za(e, o)));
    }
    if (n === 1) throw ((n = Ri), Rn(e, 0), nn(e, t), Ve(e, ce()), n);
    if (n === 6) throw Error(E(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        En(e, Be, Dt),
        Ve(e, ce()),
        null
    );
}
function Dc(e, t) {
    var n = U;
    U |= 1;
    try {
        return e(t);
    } finally {
        (U = n), U === 0 && ((Ro = ce() + 500), ws && xn());
    }
}
function zn(e) {
    rn !== null && rn.tag === 0 && !(U & 6) && bo();
    var t = U;
    U |= 1;
    var n = dt.transition,
        o = W;
    try {
        if (((dt.transition = null), (W = 1), e)) return e();
    } finally {
        (W = o), (dt.transition = n), (U = t), !(U & 6) && xn();
    }
}
function Bc() {
    (Ye = ho.current), Z(ho);
}
function Rn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), f0(n)), he !== null))
        for (n = he.return; n !== null; ) {
            var o = n;
            switch ((bc(o), o.tag)) {
                case 1:
                    (o = o.type.childContextTypes), o != null && jr();
                    break;
                case 3:
                    To(), Z(Fe), Z(Le), Pc();
                    break;
                case 5:
                    Tc(o);
                    break;
                case 4:
                    To();
                    break;
                case 13:
                    Z(te);
                    break;
                case 19:
                    Z(te);
                    break;
                case 10:
                    kc(o.type._context);
                    break;
                case 22:
                case 23:
                    Bc();
            }
            n = n.return;
        }
    if (
        ((ye = e),
        (he = e = pn(e.current, null)),
        (ke = Ye = t),
        (ge = 0),
        (Ri = null),
        (Mc = Es = An = 0),
        (Be = ci = null),
        Cn !== null)
    ) {
        for (t = 0; t < Cn.length; t++)
            if (((n = Cn[t]), (o = n.interleaved), o !== null)) {
                n.interleaved = null;
                var i = o.next,
                    r = n.pending;
                if (r !== null) {
                    var s = r.next;
                    (r.next = i), (o.next = s);
                }
                n.pending = o;
            }
        Cn = null;
    }
    return e;
}
function im(e, t) {
    do {
        var n = he;
        try {
            if (($c(), (kr.current = Xr), Yr)) {
                for (var o = ne.memoizedState; o !== null; ) {
                    var i = o.queue;
                    i !== null && (i.pending = null), (o = o.next);
                }
                Yr = !1;
            }
            if (
                ((On = 0),
                (ve = me = ne = null),
                (li = !1),
                (Ci = 0),
                (zc.current = null),
                n === null || n.return === null)
            ) {
                (ge = 1), (Ri = t), (he = null);
                break;
            }
            e: {
                var r = e,
                    s = n.return,
                    l = n,
                    a = t;
                if (
                    ((t = ke),
                    (l.flags |= 32768),
                    a !== null &&
                        typeof a == 'object' &&
                        typeof a.then == 'function')
                ) {
                    var c = a,
                        u = l,
                        d = u.tag;
                    if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = u.alternate;
                        f
                            ? ((u.updateQueue = f.updateQueue),
                              (u.memoizedState = f.memoizedState),
                              (u.lanes = f.lanes))
                            : ((u.updateQueue = null), (u.memoizedState = null));
                    }
                    var m = Sd(s);
                    if (m !== null) {
                        (m.flags &= -257),
                            Cd(m, s, l, r, t),
                            m.mode & 1 && Ed(r, c, t),
                            (t = m),
                            (a = c);
                        var y = t.updateQueue;
                        if (y === null) {
                            var w = new Set();
                            w.add(a), (t.updateQueue = w);
                        } else y.add(a);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            Ed(r, c, t), jc();
                            break e;
                        }
                        a = Error(E(426));
                    }
                } else if (ee && l.mode & 1) {
                    var O = Sd(s);
                    if (O !== null) {
                        !(O.flags & 65536) && (O.flags |= 256),
                            Cd(O, s, l, r, t),
                            wc(Po(a, l));
                        break e;
                    }
                }
                (r = a = Po(a, l)),
                    ge !== 4 && (ge = 2),
                    ci === null ? (ci = [r]) : ci.push(r),
                    (r = s);
                do {
                    switch (r.tag) {
                        case 3:
                            (r.flags |= 65536), (t &= -t), (r.lanes |= t);
                            var p = Hp(r, a, t);
                            vd(r, p);
                            break e;
                        case 1:
                            l = a;
                            var h = r.type,
                                g = r.stateNode;
                            if (
                                !(r.flags & 128) &&
                                (typeof h.getDerivedStateFromError == 'function' ||
                                    (g !== null &&
                                        typeof g.componentDidCatch == 'function' &&
                                        (fn === null || !fn.has(g))))
                            ) {
                                (r.flags |= 65536), (t &= -t), (r.lanes |= t);
                                var x = Fp(r, l, t);
                                vd(r, x);
                                break e;
                            }
                    }
                    r = r.return;
                } while (r !== null);
            }
            lm(n);
        } catch (T) {
            (t = T), he === n && n !== null && (he = n = n.return);
            continue;
        }
        break;
    } while (1);
}
function rm() {
    var e = qr.current;
    return (qr.current = Xr), e === null ? Xr : e;
}
function jc() {
    (ge === 0 || ge === 3 || ge === 2) && (ge = 4),
        ye === null || (!(An & 268435455) && !(Es & 268435455)) || nn(ye, ke);
}
function Jr(e, t) {
    var n = U;
    U |= 2;
    var o = rm();
    (ye !== e || ke !== t) && ((Dt = null), Rn(e, t));
    do
        try {
            N0();
            break;
        } catch (i) {
            im(e, i);
        }
    while (1);
    if (($c(), (U = n), (qr.current = o), he !== null)) throw Error(E(261));
    return (ye = null), (ke = 0), ge;
}
function N0() {
    for (; he !== null; ) sm(he);
}
function D0() {
    for (; he !== null && !cy(); ) sm(he);
}
function sm(e) {
    var t = cm(e.alternate, e, Ye);
    (e.memoizedProps = e.pendingProps),
        t === null ? lm(e) : (he = t),
        (zc.current = null);
}
function lm(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = L0(n, t)), n !== null)) {
                (n.flags &= 32767), (he = n);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (ge = 6), (he = null);
                return;
            }
        } else if (((n = _0(n, t, Ye)), n !== null)) {
            he = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            he = t;
            return;
        }
        he = t = e;
    } while (t !== null);
    ge === 0 && (ge = 5);
}
function En(e, t, n) {
    var o = W,
        i = dt.transition;
    try {
        (dt.transition = null), (W = 1), B0(e, t, n, o);
    } finally {
        (dt.transition = i), (W = o);
    }
    return null;
}
function B0(e, t, n, o) {
    do bo();
    while (rn !== null);
    if (U & 6) throw Error(E(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(E(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var r = n.lanes | n.childLanes;
    if (
        (by(e, r),
        e === ye && ((he = ye = null), (ke = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            cr ||
            ((cr = !0),
            um(Ar, function () {
                return bo(), null;
            })),
        (r = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || r)
    ) {
        (r = dt.transition), (dt.transition = null);
        var s = W;
        W = 1;
        var l = U;
        (U |= 4),
            (zc.current = null),
            O0(e, n),
            tm(n, e),
            r0(ha),
            (Mr = !!fa),
            (ha = fa = null),
            (e.current = n),
            A0(n),
            uy(),
            (U = l),
            (W = s),
            (dt.transition = r);
    } else e.current = n;
    if (
        (cr && ((cr = !1), (rn = e), (Zr = i)),
        (r = e.pendingLanes),
        r === 0 && (fn = null),
        hy(n.stateNode),
        Ve(e, ce()),
        t !== null)
    )
        for (o = e.onRecoverableError, n = 0; n < t.length; n++)
            (i = t[n]), o(i.value, { componentStack: i.stack, digest: i.digest });
    if (Gr) throw ((Gr = !1), (e = Oa), (Oa = null), e);
    return (
        Zr & 1 && e.tag !== 0 && bo(),
        (r = e.pendingLanes),
        r & 1 ? (e === Aa ? ui++ : ((ui = 0), (Aa = e))) : (ui = 0),
        xn(),
        null
    );
}
function bo() {
    if (rn !== null) {
        var e = jh(Zr),
            t = dt.transition,
            n = W;
        try {
            if (((dt.transition = null), (W = 16 > e ? 16 : e), rn === null))
                var o = !1;
            else {
                if (((e = rn), (rn = null), (Zr = 0), U & 6)) throw Error(E(331));
                var i = U;
                for (U |= 4, I = e.current; I !== null; ) {
                    var r = I,
                        s = r.child;
                    if (I.flags & 16) {
                        var l = r.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var c = l[a];
                                for (I = c; I !== null; ) {
                                    var u = I;
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ai(8, u, r);
                                    }
                                    var d = u.child;
                                    if (d !== null) (d.return = u), (I = d);
                                    else
                                        for (; I !== null; ) {
                                            u = I;
                                            var f = u.sibling,
                                                m = u.return;
                                            if ((Zp(u), u === c)) {
                                                I = null;
                                                break;
                                            }
                                            if (f !== null) {
                                                (f.return = m), (I = f);
                                                break;
                                            }
                                            I = m;
                                        }
                                }
                            }
                            var y = r.alternate;
                            if (y !== null) {
                                var w = y.child;
                                if (w !== null) {
                                    y.child = null;
                                    do {
                                        var O = w.sibling;
                                        (w.sibling = null), (w = O);
                                    } while (w !== null);
                                }
                            }
                            I = r;
                        }
                    }
                    if (r.subtreeFlags & 2064 && s !== null) (s.return = r), (I = s);
                    else
                        e: for (; I !== null; ) {
                            if (((r = I), r.flags & 2048))
                                switch (r.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ai(9, r, r.return);
                                }
                            var p = r.sibling;
                            if (p !== null) {
                                (p.return = r.return), (I = p);
                                break e;
                            }
                            I = r.return;
                        }
                }
                var h = e.current;
                for (I = h; I !== null; ) {
                    s = I;
                    var g = s.child;
                    if (s.subtreeFlags & 2064 && g !== null) (g.return = s), (I = g);
                    else
                        e: for (s = h; I !== null; ) {
                            if (((l = I), l.flags & 2048))
                                try {
                                    switch (l.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ks(9, l);
                                    }
                                } catch (T) {
                                    re(l, l.return, T);
                                }
                            if (l === s) {
                                I = null;
                                break e;
                            }
                            var x = l.sibling;
                            if (x !== null) {
                                (x.return = l.return), (I = x);
                                break e;
                            }
                            I = l.return;
                        }
                }
                if (
                    ((U = i),
                    xn(),
                    At && typeof At.onPostCommitFiberRoot == 'function')
                )
                    try {
                        At.onPostCommitFiberRoot(ms, e);
                    } catch (T) {}
                o = !0;
            }
            return o;
        } finally {
            (W = n), (dt.transition = t);
        }
    }
    return !1;
}
function Bd(e, t, n) {
    (t = Po(n, t)),
        (t = Hp(e, t, 1)),
        (e = dn(e, t, 1)),
        (t = Ae()),
        e !== null && (Mi(e, 1, t), Ve(e, t));
}
function re(e, t, n) {
    if (e.tag === 3) Bd(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Bd(t, e, n);
                break;
            } else if (t.tag === 1) {
                var o = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == 'function' ||
                    (typeof o.componentDidCatch == 'function' &&
                        (fn === null || !fn.has(o)))
                ) {
                    (e = Po(n, e)),
                        (e = Fp(t, e, 1)),
                        (t = dn(t, e, 1)),
                        (e = Ae()),
                        t !== null && (Mi(t, 1, e), Ve(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function j0(e, t, n) {
    var o = e.pingCache;
    o !== null && o.delete(t),
        (t = Ae()),
        (e.pingedLanes |= e.suspendedLanes & n),
        ye === e &&
            (ke & n) === n &&
            (ge === 4 || (ge === 3 && (ke & 130023424) === ke && 500 > ce() - Nc)
                ? Rn(e, 0)
                : (Mc |= n)),
        Ve(e, t);
}
function am(e, t) {
    t === 0 &&
        (e.mode & 1
            ? ((t = Ji), (Ji <<= 1), !(Ji & 130023424) && (Ji = 4194304))
            : (t = 1));
    var n = Ae();
    (e = Qt(e, t)), e !== null && (Mi(e, t, n), Ve(e, n));
}
function H0(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), am(e, n);
}
function F0(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var o = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            o = e.stateNode;
            break;
        default:
            throw Error(E(314));
    }
    o !== null && o.delete(t), am(e, n);
}
var cm;
cm = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Fe.current) je = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return (je = !1), R0(e, t, n);
            je = !!(e.flags & 131072);
        }
    else (je = !1), ee && t.flags & 1048576 && fp(t, Ur, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var o = t.type;
            Sr(e, t), (e = t.pendingProps);
            var i = Eo(t, Le.current);
            yo(t, n), (i = _c(null, t, o, e, i, n));
            var r = Lc();
            return (
                (t.flags |= 1),
                typeof i == 'object' &&
                i !== null &&
                typeof i.render == 'function' &&
                i.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      Ue(o) ? ((r = !0), Hr(t)) : (r = !1),
                      (t.memoizedState =
                          i.state !== null && i.state !== void 0 ? i.state : null),
                      Sc(t),
                      (i.updater = xs),
                      (t.stateNode = i),
                      (i._reactInternals = t),
                      $a(t, o, e, n),
                      (t = Sa(null, t, o, !0, r, n)))
                    : ((t.tag = 0),
                      ee && r && yc(t),
                      Oe(null, t, i, n),
                      (t = t.child)),
                t
            );
        case 16:
            o = t.elementType;
            e: {
                switch (
                    (Sr(e, t),
                    (e = t.pendingProps),
                    (i = o._init),
                    (o = i(o._payload)),
                    (t.type = o),
                    (i = t.tag = V0(o)),
                    (e = vt(o, e)),
                    i)
                ) {
                    case 0:
                        t = Ea(null, t, o, e, n);
                        break e;
                    case 1:
                        t = Rd(null, t, o, e, n);
                        break e;
                    case 11:
                        t = Td(null, t, o, e, n);
                        break e;
                    case 14:
                        t = Pd(null, t, o, vt(o.type, e), n);
                        break e;
                }
                throw Error(E(306, o, ''));
            }
            return t;
        case 0:
            return (
                (o = t.type),
                (i = t.pendingProps),
                (i = t.elementType === o ? i : vt(o, i)),
                Ea(e, t, o, i, n)
            );
        case 1:
            return (
                (o = t.type),
                (i = t.pendingProps),
                (i = t.elementType === o ? i : vt(o, i)),
                Rd(e, t, o, i, n)
            );
        case 3:
            e: {
                if ((Kp(t), e === null)) throw Error(E(387));
                (o = t.pendingProps),
                    (r = t.memoizedState),
                    (i = r.element),
                    gp(e, t),
                    Kr(t, o, null, n);
                var s = t.memoizedState;
                if (((o = s.element), r.isDehydrated))
                    if (
                        ((r = {
                            element: o,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions,
                        }),
                        (t.updateQueue.baseState = r),
                        (t.memoizedState = r),
                        t.flags & 256)
                    ) {
                        (i = Po(Error(E(423)), t)), (t = _d(e, t, o, n, i));
                        break e;
                    } else if (o !== i) {
                        (i = Po(Error(E(424)), t)), (t = _d(e, t, o, n, i));
                        break e;
                    } else
                        for (
                            Ge = un(t.stateNode.containerInfo.firstChild),
                                Ze = t,
                                ee = !0,
                                bt = null,
                                n = wp(t, null, o, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((So(), o === i)) {
                        t = Yt(e, t, n);
                        break e;
                    }
                    Oe(e, t, o, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                xp(t),
                e === null && ba(t),
                (o = t.type),
                (i = t.pendingProps),
                (r = e !== null ? e.memoizedProps : null),
                (s = i.children),
                pa(o, i) ? (s = null) : r !== null && pa(o, r) && (t.flags |= 32),
                Wp(e, t),
                Oe(e, t, s, n),
                t.child
            );
        case 6:
            return e === null && ba(t), null;
        case 13:
            return Qp(e, t, n);
        case 4:
            return (
                Cc(t, t.stateNode.containerInfo),
                (o = t.pendingProps),
                e === null ? (t.child = Co(t, null, o, n)) : Oe(e, t, o, n),
                t.child
            );
        case 11:
            return (
                (o = t.type),
                (i = t.pendingProps),
                (i = t.elementType === o ? i : vt(o, i)),
                Td(e, t, o, i, n)
            );
        case 7:
            return Oe(e, t, t.pendingProps, n), t.child;
        case 8:
            return Oe(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Oe(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((o = t.type._context),
                    (i = t.pendingProps),
                    (r = t.memoizedProps),
                    (s = i.value),
                    q(Vr, o._currentValue),
                    (o._currentValue = s),
                    r !== null)
                )
                    if (Ct(r.value, s)) {
                        if (r.children === i.children && !Fe.current) {
                            t = Yt(e, t, n);
                            break e;
                        }
                    } else
                        for (
                            r = t.child, r !== null && (r.return = t);
                            r !== null;

                        ) {
                            var l = r.dependencies;
                            if (l !== null) {
                                s = r.child;
                                for (var a = l.firstContext; a !== null; ) {
                                    if (a.context === o) {
                                        if (r.tag === 1) {
                                            (a = Vt(-1, n & -n)), (a.tag = 2);
                                            var c = r.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var u = c.pending;
                                                u === null
                                                    ? (a.next = a)
                                                    : ((a.next = u.next),
                                                      (u.next = a)),
                                                    (c.pending = a);
                                            }
                                        }
                                        (r.lanes |= n),
                                            (a = r.alternate),
                                            a !== null && (a.lanes |= n),
                                            wa(r.return, n, t),
                                            (l.lanes |= n);
                                        break;
                                    }
                                    a = a.next;
                                }
                            } else if (r.tag === 10)
                                s = r.type === t.type ? null : r.child;
                            else if (r.tag === 18) {
                                if (((s = r.return), s === null))
                                    throw Error(E(341));
                                (s.lanes |= n),
                                    (l = s.alternate),
                                    l !== null && (l.lanes |= n),
                                    wa(s, n, t),
                                    (s = r.sibling);
                            } else s = r.child;
                            if (s !== null) s.return = r;
                            else
                                for (s = r; s !== null; ) {
                                    if (s === t) {
                                        s = null;
                                        break;
                                    }
                                    if (((r = s.sibling), r !== null)) {
                                        (r.return = s.return), (s = r);
                                        break;
                                    }
                                    s = s.return;
                                }
                            r = s;
                        }
                Oe(e, t, i.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (i = t.type),
                (o = t.pendingProps.children),
                yo(t, n),
                (i = ft(i)),
                (o = o(i)),
                (t.flags |= 1),
                Oe(e, t, o, n),
                t.child
            );
        case 14:
            return (
                (o = t.type),
                (i = vt(o, t.pendingProps)),
                (i = vt(o.type, i)),
                Pd(e, t, o, i, n)
            );
        case 15:
            return Up(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (o = t.type),
                (i = t.pendingProps),
                (i = t.elementType === o ? i : vt(o, i)),
                Sr(e, t),
                (t.tag = 1),
                Ue(o) ? ((e = !0), Hr(t)) : (e = !1),
                yo(t, n),
                yp(t, o, i),
                $a(t, o, i, n),
                Sa(null, t, o, !0, e, n)
            );
        case 19:
            return Yp(e, t, n);
        case 22:
            return Vp(e, t, n);
    }
    throw Error(E(156, t.tag));
};
function um(e, t) {
    return Mh(e, t);
}
function U0(e, t, n, o) {
    (this.tag = e),
        (this.key = n),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = o),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function ct(e, t, n, o) {
    return new U0(e, t, n, o);
}
function Hc(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function V0(e) {
    if (typeof e == 'function') return Hc(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === sc)) return 11;
        if (e === lc) return 14;
    }
    return 2;
}
function pn(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = ct(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
            t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function Pr(e, t, n, o, i, r) {
    var s = 2;
    if (((o = e), typeof e == 'function')) Hc(e) && (s = 1);
    else if (typeof e == 'string') s = 5;
    else
        e: switch (e) {
            case no:
                return _n(n.children, i, r, t);
            case rc:
                (s = 8), (i |= 8);
                break;
            case Kl:
                return (
                    (e = ct(12, n, t, i | 2)), (e.elementType = Kl), (e.lanes = r), e
                );
            case Ql:
                return (e = ct(13, n, t, i)), (e.elementType = Ql), (e.lanes = r), e;
            case Yl:
                return (e = ct(19, n, t, i)), (e.elementType = Yl), (e.lanes = r), e;
            case bh:
                return Ss(n, i, r, t);
            default:
                if (typeof e == 'object' && e !== null)
                    switch (e.$$typeof) {
                        case vh:
                            s = 10;
                            break e;
                        case yh:
                            s = 9;
                            break e;
                        case sc:
                            s = 11;
                            break e;
                        case lc:
                            s = 14;
                            break e;
                        case Jt:
                            (s = 16), (o = null);
                            break e;
                    }
                throw Error(E(130, e == null ? e : typeof e, ''));
        }
    return (t = ct(s, n, t, i)), (t.elementType = e), (t.type = o), (t.lanes = r), t;
}
function _n(e, t, n, o) {
    return (e = ct(7, e, o, t)), (e.lanes = n), e;
}
function Ss(e, t, n, o) {
    return (
        (e = ct(22, e, o, t)),
        (e.elementType = bh),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}
function Pl(e, t, n) {
    return (e = ct(6, e, null, t)), (e.lanes = n), e;
}
function Rl(e, t, n) {
    return (
        (t = ct(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}
function W0(e, t, n, o, i) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = cl(0)),
        (this.expirationTimes = cl(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = cl(0)),
        (this.identifierPrefix = o),
        (this.onRecoverableError = i),
        (this.mutableSourceEagerHydrationData = null);
}
function Fc(e, t, n, o, i, r, s, l, a) {
    return (
        (e = new W0(e, t, n, l, a)),
        t === 1 ? ((t = 1), r === !0 && (t |= 8)) : (t = 0),
        (r = ct(3, null, null, t)),
        (e.current = r),
        (r.stateNode = e),
        (r.memoizedState = {
            element: o,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        Sc(r),
        e
    );
}
function K0(e, t, n) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: to,
        key: o == null ? null : '' + o,
        children: e,
        containerInfo: t,
        implementation: n,
    };
}
function dm(e) {
    if (!e) return gn;
    e = e._reactInternals;
    e: {
        if (Hn(e) !== e || e.tag !== 1) throw Error(E(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ue(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(E(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ue(n)) return up(e, n, t);
    }
    return t;
}
function fm(e, t, n, o, i, r, s, l, a) {
    return (
        (e = Fc(n, o, !0, e, i, r, s, l, a)),
        (e.context = dm(null)),
        (n = e.current),
        (o = Ae()),
        (i = hn(n)),
        (r = Vt(o, i)),
        (r.callback = t != null ? t : null),
        dn(n, r, i),
        (e.current.lanes = i),
        Mi(e, i, o),
        Ve(e, o),
        e
    );
}
function Cs(e, t, n, o) {
    var i = t.current,
        r = Ae(),
        s = hn(i);
    return (
        (n = dm(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = Vt(r, s)),
        (t.payload = { element: e }),
        (o = o === void 0 ? null : o),
        o !== null && (t.callback = o),
        (e = dn(i, t, s)),
        e !== null && (kt(e, i, s, r), $r(e, i, s)),
        s
    );
}
function es(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function jd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function Uc(e, t) {
    jd(e, t), (e = e.alternate) && jd(e, t);
}
function Q0() {
    return null;
}
var hm =
    typeof reportError == 'function'
        ? reportError
        : function (e) {
              console.error(e);
          };
function Vc(e) {
    this._internalRoot = e;
}
Ts.prototype.render = Vc.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(E(409));
    Cs(e, t, null, null);
};
Ts.prototype.unmount = Vc.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        zn(function () {
            Cs(null, e, null, null);
        }),
            (t[Kt] = null);
    }
};
function Ts(e) {
    this._internalRoot = e;
}
Ts.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Uh();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < tn.length && t !== 0 && t < tn[n].priority; n++);
        tn.splice(n, 0, e), n === 0 && Wh(e);
    }
};
function Wc(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ps(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
}
function Hd() {}
function Y0(e, t, n, o, i) {
    if (i) {
        if (typeof o == 'function') {
            var r = o;
            o = function () {
                var c = es(s);
                r.call(c);
            };
        }
        var s = fm(t, o, e, 0, null, !1, !1, '', Hd);
        return (
            (e._reactRootContainer = s),
            (e[Kt] = s.current),
            xi(e.nodeType === 8 ? e.parentNode : e),
            zn(),
            s
        );
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof o == 'function') {
        var l = o;
        o = function () {
            var c = es(a);
            l.call(c);
        };
    }
    var a = Fc(e, 0, !1, null, null, !1, !1, '', Hd);
    return (
        (e._reactRootContainer = a),
        (e[Kt] = a.current),
        xi(e.nodeType === 8 ? e.parentNode : e),
        zn(function () {
            Cs(t, a, n, o);
        }),
        a
    );
}
function Rs(e, t, n, o, i) {
    var r = n._reactRootContainer;
    if (r) {
        var s = r;
        if (typeof i == 'function') {
            var l = i;
            i = function () {
                var a = es(s);
                l.call(a);
            };
        }
        Cs(t, s, e, i);
    } else s = Y0(n, t, e, i, o);
    return es(s);
}
Hh = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Zo(t.pendingLanes);
                n !== 0 &&
                    (uc(t, n | 1),
                    Ve(t, ce()),
                    !(U & 6) && ((Ro = ce() + 500), xn()));
            }
            break;
        case 13:
            zn(function () {
                var o = Qt(e, 1);
                if (o !== null) {
                    var i = Ae();
                    kt(o, e, 1, i);
                }
            }),
                Uc(e, 1);
    }
};
dc = function (e) {
    if (e.tag === 13) {
        var t = Qt(e, 134217728);
        if (t !== null) {
            var n = Ae();
            kt(t, e, 134217728, n);
        }
        Uc(e, 134217728);
    }
};
Fh = function (e) {
    if (e.tag === 13) {
        var t = hn(e),
            n = Qt(e, t);
        if (n !== null) {
            var o = Ae();
            kt(n, e, t, o);
        }
        Uc(e, t);
    }
};
Uh = function () {
    return W;
};
Vh = function (e, t) {
    var n = W;
    try {
        return (W = e), t();
    } finally {
        W = n;
    }
};
ia = function (e, t, n) {
    switch (t) {
        case 'input':
            if ((Gl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var o = n[t];
                    if (o !== e && o.form === e.form) {
                        var i = bs(o);
                        if (!i) throw Error(E(90));
                        xh(o), Gl(o, i);
                    }
                }
            }
            break;
        case 'textarea':
            kh(e, n);
            break;
        case 'select':
            (t = n.value), t != null && po(e, !!n.multiple, t, !1);
    }
};
_h = Dc;
Lh = zn;
var X0 = { usingClientEntryPoint: !1, Events: [Di, so, bs, Ph, Rh, Dc] },
    Yo = {
        findFiberByHostInstance: Sn,
        bundleType: 0,
        version: '18.2.0',
        rendererPackageName: 'react-dom',
    },
    q0 = {
        bundleType: Yo.bundleType,
        version: Yo.version,
        rendererPackageName: Yo.rendererPackageName,
        rendererConfig: Yo.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Xt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Ah(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Yo.findFiberByHostInstance || Q0,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var ur = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ur.isDisabled && ur.supportsFiber)
        try {
            (ms = ur.inject(q0)), (At = ur);
        } catch (e) {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X0;
et.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Wc(t)) throw Error(E(200));
    return K0(e, t, null, n);
};
et.createRoot = function (e, t) {
    if (!Wc(e)) throw Error(E(299));
    var n = !1,
        o = '',
        i = hm;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = Fc(e, 1, !1, null, null, n, !1, o, i)),
        (e[Kt] = t.current),
        xi(e.nodeType === 8 ? e.parentNode : e),
        new Vc(t)
    );
};
et.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == 'function'
            ? Error(E(188))
            : ((e = Object.keys(e).join(',')), Error(E(268, e)));
    return (e = Ah(t)), (e = e === null ? null : e.stateNode), e;
};
et.flushSync = function (e) {
    return zn(e);
};
et.hydrate = function (e, t, n) {
    if (!Ps(t)) throw Error(E(200));
    return Rs(null, e, t, !0, n);
};
et.hydrateRoot = function (e, t, n) {
    if (!Wc(e)) throw Error(E(405));
    var o = (n != null && n.hydratedSources) || null,
        i = !1,
        r = '',
        s = hm;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (i = !0),
            n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        (t = fm(t, null, e, 1, n != null ? n : null, i, !1, r, s)),
        (e[Kt] = t.current),
        xi(e),
        o)
    )
        for (e = 0; e < o.length; e++)
            (n = o[e]),
                (i = n._getVersion),
                (i = i(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, i])
                    : t.mutableSourceEagerHydrationData.push(n, i);
    return new Ts(t);
};
et.render = function (e, t, n) {
    if (!Ps(t)) throw Error(E(200));
    return Rs(null, e, t, !1, n);
};
et.unmountComponentAtNode = function (e) {
    if (!Ps(e)) throw Error(E(40));
    return e._reactRootContainer
        ? (zn(function () {
              Rs(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[Kt] = null);
              });
          }),
          !0)
        : !1;
};
et.unstable_batchedUpdates = Dc;
et.unstable_renderSubtreeIntoContainer = function (e, t, n, o) {
    if (!Ps(n)) throw Error(E(200));
    if (e == null || e._reactInternals === void 0) throw Error(E(38));
    return Rs(e, t, n, !1, o);
};
et.version = '18.2.0-next-9e3b772b8-20220608';
function pm() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pm);
        } catch (e) {
            console.error(e);
        }
}
pm(), (fh.exports = et);
var Kc = fh.exports;
const G0 = Ai(Kc);
var mm,
    Fd = Kc;
(mm = Fd.createRoot), Fd.hydrateRoot;
function Na(e, t) {
    return (
        (Na = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (o, i) {
                  return (o.__proto__ = i), o;
              }),
        Na(e, t)
    );
}
function vn(e, t) {
    (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        Na(e, t);
}
var gm = { exports: {} },
    Z0 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
    J0 = Z0,
    eb = J0;
function vm() {}
function ym() {}
ym.resetWarningCache = vm;
var tb = function () {
    function e(o, i, r, s, l, a) {
        if (a !== eb) {
            var c = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            );
            throw ((c.name = 'Invariant Violation'), c);
        }
    }
    e.isRequired = e;
    function t() {
        return e;
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: ym,
        resetWarningCache: vm,
    };
    return (n.PropTypes = n), n;
};
gm.exports = tb();
var nb = gm.exports;
const Ud = Ai(nb);
function Ke() {
    return (
        (Ke = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var o in n)
                          Object.prototype.hasOwnProperty.call(n, o) &&
                              (e[o] = n[o]);
                  }
                  return e;
              }),
        Ke.apply(this, arguments)
    );
}
function dr(e) {
    return e.charAt(0) === '/';
}
function _l(e, t) {
    for (var n = t, o = n + 1, i = e.length; o < i; n += 1, o += 1) e[n] = e[o];
    e.pop();
}
function ob(e, t) {
    t === void 0 && (t = '');
    var n = (e && e.split('/')) || [],
        o = (t && t.split('/')) || [],
        i = e && dr(e),
        r = t && dr(t),
        s = i || r;
    if ((e && dr(e) ? (o = n) : n.length && (o.pop(), (o = o.concat(n))), !o.length))
        return '/';
    var l;
    if (o.length) {
        var a = o[o.length - 1];
        l = a === '.' || a === '..' || a === '';
    } else l = !1;
    for (var c = 0, u = o.length; u >= 0; u--) {
        var d = o[u];
        d === '.' ? _l(o, u) : d === '..' ? (_l(o, u), c++) : c && (_l(o, u), c--);
    }
    if (!s) for (; c--; c) o.unshift('..');
    s && o[0] !== '' && (!o[0] || !dr(o[0])) && o.unshift('');
    var f = o.join('/');
    return l && f.substr(-1) !== '/' && (f += '/'), f;
}
function Vd(e) {
    return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
}
function Rr(e, t) {
    if (e === t) return !0;
    if (e == null || t == null) return !1;
    if (Array.isArray(e))
        return (
            Array.isArray(t) &&
            e.length === t.length &&
            e.every(function (i, r) {
                return Rr(i, t[r]);
            })
        );
    if (typeof e == 'object' || typeof t == 'object') {
        var n = Vd(e),
            o = Vd(t);
        return n !== e || o !== t
            ? Rr(n, o)
            : Object.keys(Object.assign({}, e, t)).every(function (i) {
                  return Rr(e[i], t[i]);
              });
    }
    return !1;
}
var ib = !0,
    Ll = 'Invariant failed';
function Fn(e, t) {
    if (!e) {
        if (ib) throw new Error(Ll);
        var n = typeof t == 'function' ? t() : t,
            o = n ? ''.concat(Ll, ': ').concat(n) : Ll;
        throw new Error(o);
    }
}
function di(e) {
    return e.charAt(0) === '/' ? e : '/' + e;
}
function Wd(e) {
    return e.charAt(0) === '/' ? e.substr(1) : e;
}
function rb(e, t) {
    return (
        e.toLowerCase().indexOf(t.toLowerCase()) === 0 &&
        '/?#'.indexOf(e.charAt(t.length)) !== -1
    );
}
function bm(e, t) {
    return rb(e, t) ? e.substr(t.length) : e;
}
function wm(e) {
    return e.charAt(e.length - 1) === '/' ? e.slice(0, -1) : e;
}
function sb(e) {
    var t = e || '/',
        n = '',
        o = '',
        i = t.indexOf('#');
    i !== -1 && ((o = t.substr(i)), (t = t.substr(0, i)));
    var r = t.indexOf('?');
    return (
        r !== -1 && ((n = t.substr(r)), (t = t.substr(0, r))),
        { pathname: t, search: n === '?' ? '' : n, hash: o === '#' ? '' : o }
    );
}
function st(e) {
    var t = e.pathname,
        n = e.search,
        o = e.hash,
        i = t || '/';
    return (
        n && n !== '?' && (i += n.charAt(0) === '?' ? n : '?' + n),
        o && o !== '#' && (i += o.charAt(0) === '#' ? o : '#' + o),
        i
    );
}
function He(e, t, n, o) {
    var i;
    typeof e == 'string'
        ? ((i = sb(e)), (i.state = t))
        : ((i = Ke({}, e)),
          i.pathname === void 0 && (i.pathname = ''),
          i.search
              ? i.search.charAt(0) !== '?' && (i.search = '?' + i.search)
              : (i.search = ''),
          i.hash
              ? i.hash.charAt(0) !== '#' && (i.hash = '#' + i.hash)
              : (i.hash = ''),
          t !== void 0 && i.state === void 0 && (i.state = t));
    try {
        i.pathname = decodeURI(i.pathname);
    } catch (r) {
        throw r instanceof URIError
            ? new URIError(
                  'Pathname "' +
                      i.pathname +
                      '" could not be decoded. This is likely caused by an invalid percent-encoding.'
              )
            : r;
    }
    return (
        n && (i.key = n),
        o
            ? i.pathname
                ? i.pathname.charAt(0) !== '/' &&
                  (i.pathname = ob(i.pathname, o.pathname))
                : (i.pathname = o.pathname)
            : i.pathname || (i.pathname = '/'),
        i
    );
}
function lb(e, t) {
    return (
        e.pathname === t.pathname &&
        e.search === t.search &&
        e.hash === t.hash &&
        e.key === t.key &&
        Rr(e.state, t.state)
    );
}
function Qc() {
    var e = null;
    function t(s) {
        return (
            (e = s),
            function () {
                e === s && (e = null);
            }
        );
    }
    function n(s, l, a, c) {
        if (e != null) {
            var u = typeof e == 'function' ? e(s, l) : e;
            typeof u == 'string'
                ? typeof a == 'function'
                    ? a(u, c)
                    : c(!0)
                : c(u !== !1);
        } else c(!0);
    }
    var o = [];
    function i(s) {
        var l = !0;
        function a() {
            l && s.apply(void 0, arguments);
        }
        return (
            o.push(a),
            function () {
                (l = !1),
                    (o = o.filter(function (c) {
                        return c !== a;
                    }));
            }
        );
    }
    function r() {
        for (var s = arguments.length, l = new Array(s), a = 0; a < s; a++)
            l[a] = arguments[a];
        o.forEach(function (c) {
            return c.apply(void 0, l);
        });
    }
    return {
        setPrompt: t,
        confirmTransitionTo: n,
        appendListener: i,
        notifyListeners: r,
    };
}
var xm = !!(typeof window < 'u' && window.document && window.document.createElement);
function $m(e, t) {
    t(window.confirm(e));
}
function ab() {
    var e = window.navigator.userAgent;
    return (e.indexOf('Android 2.') !== -1 || e.indexOf('Android 4.0') !== -1) &&
        e.indexOf('Mobile Safari') !== -1 &&
        e.indexOf('Chrome') === -1 &&
        e.indexOf('Windows Phone') === -1
        ? !1
        : window.history && 'pushState' in window.history;
}
function cb() {
    return window.navigator.userAgent.indexOf('Trident') === -1;
}
function ub() {
    return window.navigator.userAgent.indexOf('Firefox') === -1;
}
function db(e) {
    return e.state === void 0 && navigator.userAgent.indexOf('CriOS') === -1;
}
var Kd = 'popstate',
    Qd = 'hashchange';
function Yd() {
    try {
        return window.history.state || {};
    } catch (e) {
        return {};
    }
}
function fb(e) {
    e === void 0 && (e = {}), xm || Fn(!1);
    var t = window.history,
        n = ab(),
        o = !cb(),
        i = e,
        r = i.forceRefresh,
        s = r === void 0 ? !1 : r,
        l = i.getUserConfirmation,
        a = l === void 0 ? $m : l,
        c = i.keyLength,
        u = c === void 0 ? 6 : c,
        d = e.basename ? wm(di(e.basename)) : '';
    function f(S) {
        var k = S || {},
            z = k.key,
            A = k.state,
            j = window.location,
            X = j.pathname,
            V = j.search,
            le = j.hash,
            fe = X + V + le;
        return d && (fe = bm(fe, d)), He(fe, A, z);
    }
    function m() {
        return Math.random().toString(36).substr(2, u);
    }
    var y = Qc();
    function w(S) {
        Ke(R, S), (R.length = t.length), y.notifyListeners(R.location, R.action);
    }
    function O(S) {
        db(S) || g(f(S.state));
    }
    function p() {
        g(f(Yd()));
    }
    var h = !1;
    function g(S) {
        if (h) (h = !1), w();
        else {
            var k = 'POP';
            y.confirmTransitionTo(S, k, a, function (z) {
                z ? w({ action: k, location: S }) : x(S);
            });
        }
    }
    function x(S) {
        var k = R.location,
            z = P.indexOf(k.key);
        z === -1 && (z = 0);
        var A = P.indexOf(S.key);
        A === -1 && (A = 0);
        var j = z - A;
        j && ((h = !0), N(j));
    }
    var T = f(Yd()),
        P = [T.key];
    function $(S) {
        return d + st(S);
    }
    function C(S, k) {
        var z = 'PUSH',
            A = He(S, k, m(), R.location);
        y.confirmTransitionTo(A, z, a, function (j) {
            if (j) {
                var X = $(A),
                    V = A.key,
                    le = A.state;
                if (n)
                    if ((t.pushState({ key: V, state: le }, null, X), s))
                        window.location.href = X;
                    else {
                        var fe = P.indexOf(R.location.key),
                            Nt = P.slice(0, fe + 1);
                        Nt.push(A.key), (P = Nt), w({ action: z, location: A });
                    }
                else window.location.href = X;
            }
        });
    }
    function B(S, k) {
        var z = 'REPLACE',
            A = He(S, k, m(), R.location);
        y.confirmTransitionTo(A, z, a, function (j) {
            if (j) {
                var X = $(A),
                    V = A.key,
                    le = A.state;
                if (n)
                    if ((t.replaceState({ key: V, state: le }, null, X), s))
                        window.location.replace(X);
                    else {
                        var fe = P.indexOf(R.location.key);
                        fe !== -1 && (P[fe] = A.key), w({ action: z, location: A });
                    }
                else window.location.replace(X);
            }
        });
    }
    function N(S) {
        t.go(S);
    }
    function L() {
        N(-1);
    }
    function ue() {
        N(1);
    }
    var Ce = 0;
    function de(S) {
        (Ce += S),
            Ce === 1 && S === 1
                ? (window.addEventListener(Kd, O),
                  o && window.addEventListener(Qd, p))
                : Ce === 0 &&
                  (window.removeEventListener(Kd, O),
                  o && window.removeEventListener(Qd, p));
    }
    var ie = !1;
    function Q(S) {
        S === void 0 && (S = !1);
        var k = y.setPrompt(S);
        return (
            ie || (de(1), (ie = !0)),
            function () {
                return ie && ((ie = !1), de(-1)), k();
            }
        );
    }
    function se(S) {
        var k = y.appendListener(S);
        return (
            de(1),
            function () {
                de(-1), k();
            }
        );
    }
    var R = {
        length: t.length,
        action: 'POP',
        location: T,
        createHref: $,
        push: C,
        replace: B,
        go: N,
        goBack: L,
        goForward: ue,
        block: Q,
        listen: se,
    };
    return R;
}
var Xd = 'hashchange',
    hb = {
        hashbang: {
            encodePath: function (t) {
                return t.charAt(0) === '!' ? t : '!/' + Wd(t);
            },
            decodePath: function (t) {
                return t.charAt(0) === '!' ? t.substr(1) : t;
            },
        },
        noslash: { encodePath: Wd, decodePath: di },
        slash: { encodePath: di, decodePath: di },
    };
function km(e) {
    var t = e.indexOf('#');
    return t === -1 ? e : e.slice(0, t);
}
function Xo() {
    var e = window.location.href,
        t = e.indexOf('#');
    return t === -1 ? '' : e.substring(t + 1);
}
function pb(e) {
    window.location.hash = e;
}
function Il(e) {
    window.location.replace(km(window.location.href) + '#' + e);
}
function mb(e) {
    e === void 0 && (e = {}), xm || Fn(!1);
    var t = window.history;
    ub();
    var n = e,
        o = n.getUserConfirmation,
        i = o === void 0 ? $m : o,
        r = n.hashType,
        s = r === void 0 ? 'slash' : r,
        l = e.basename ? wm(di(e.basename)) : '',
        a = hb[s],
        c = a.encodePath,
        u = a.decodePath;
    function d() {
        var k = u(Xo());
        return l && (k = bm(k, l)), He(k);
    }
    var f = Qc();
    function m(k) {
        Ke(S, k), (S.length = t.length), f.notifyListeners(S.location, S.action);
    }
    var y = !1,
        w = null;
    function O(k, z) {
        return (
            k.pathname === z.pathname && k.search === z.search && k.hash === z.hash
        );
    }
    function p() {
        var k = Xo(),
            z = c(k);
        if (k !== z) Il(z);
        else {
            var A = d(),
                j = S.location;
            if ((!y && O(j, A)) || w === st(A)) return;
            (w = null), h(A);
        }
    }
    function h(k) {
        if (y) (y = !1), m();
        else {
            var z = 'POP';
            f.confirmTransitionTo(k, z, i, function (A) {
                A ? m({ action: z, location: k }) : g(k);
            });
        }
    }
    function g(k) {
        var z = S.location,
            A = $.lastIndexOf(st(z));
        A === -1 && (A = 0);
        var j = $.lastIndexOf(st(k));
        j === -1 && (j = 0);
        var X = A - j;
        X && ((y = !0), L(X));
    }
    var x = Xo(),
        T = c(x);
    x !== T && Il(T);
    var P = d(),
        $ = [st(P)];
    function C(k) {
        var z = document.querySelector('base'),
            A = '';
        return (
            z && z.getAttribute('href') && (A = km(window.location.href)),
            A + '#' + c(l + st(k))
        );
    }
    function B(k, z) {
        var A = 'PUSH',
            j = He(k, void 0, void 0, S.location);
        f.confirmTransitionTo(j, A, i, function (X) {
            if (X) {
                var V = st(j),
                    le = c(l + V),
                    fe = Xo() !== le;
                if (fe) {
                    (w = V), pb(le);
                    var Nt = $.lastIndexOf(st(S.location)),
                        Ki = $.slice(0, Nt + 1);
                    Ki.push(V), ($ = Ki), m({ action: A, location: j });
                } else m();
            }
        });
    }
    function N(k, z) {
        var A = 'REPLACE',
            j = He(k, void 0, void 0, S.location);
        f.confirmTransitionTo(j, A, i, function (X) {
            if (X) {
                var V = st(j),
                    le = c(l + V),
                    fe = Xo() !== le;
                fe && ((w = V), Il(le));
                var Nt = $.indexOf(st(S.location));
                Nt !== -1 && ($[Nt] = V), m({ action: A, location: j });
            }
        });
    }
    function L(k) {
        t.go(k);
    }
    function ue() {
        L(-1);
    }
    function Ce() {
        L(1);
    }
    var de = 0;
    function ie(k) {
        (de += k),
            de === 1 && k === 1
                ? window.addEventListener(Xd, p)
                : de === 0 && window.removeEventListener(Xd, p);
    }
    var Q = !1;
    function se(k) {
        k === void 0 && (k = !1);
        var z = f.setPrompt(k);
        return (
            Q || (ie(1), (Q = !0)),
            function () {
                return Q && ((Q = !1), ie(-1)), z();
            }
        );
    }
    function R(k) {
        var z = f.appendListener(k);
        return (
            ie(1),
            function () {
                ie(-1), z();
            }
        );
    }
    var S = {
        length: t.length,
        action: 'POP',
        location: P,
        createHref: C,
        push: B,
        replace: N,
        go: L,
        goBack: ue,
        goForward: Ce,
        block: se,
        listen: R,
    };
    return S;
}
function qd(e, t, n) {
    return Math.min(Math.max(e, t), n);
}
function gb(e) {
    e === void 0 && (e = {});
    var t = e,
        n = t.getUserConfirmation,
        o = t.initialEntries,
        i = o === void 0 ? ['/'] : o,
        r = t.initialIndex,
        s = r === void 0 ? 0 : r,
        l = t.keyLength,
        a = l === void 0 ? 6 : l,
        c = Qc();
    function u(C) {
        Ke($, C),
            ($.length = $.entries.length),
            c.notifyListeners($.location, $.action);
    }
    function d() {
        return Math.random().toString(36).substr(2, a);
    }
    var f = qd(s, 0, i.length - 1),
        m = i.map(function (C) {
            return typeof C == 'string'
                ? He(C, void 0, d())
                : He(C, void 0, C.key || d());
        }),
        y = st;
    function w(C, B) {
        var N = 'PUSH',
            L = He(C, B, d(), $.location);
        c.confirmTransitionTo(L, N, n, function (ue) {
            if (ue) {
                var Ce = $.index,
                    de = Ce + 1,
                    ie = $.entries.slice(0);
                ie.length > de ? ie.splice(de, ie.length - de, L) : ie.push(L),
                    u({ action: N, location: L, index: de, entries: ie });
            }
        });
    }
    function O(C, B) {
        var N = 'REPLACE',
            L = He(C, B, d(), $.location);
        c.confirmTransitionTo(L, N, n, function (ue) {
            ue && (($.entries[$.index] = L), u({ action: N, location: L }));
        });
    }
    function p(C) {
        var B = qd($.index + C, 0, $.entries.length - 1),
            N = 'POP',
            L = $.entries[B];
        c.confirmTransitionTo(L, N, n, function (ue) {
            ue ? u({ action: N, location: L, index: B }) : u();
        });
    }
    function h() {
        p(-1);
    }
    function g() {
        p(1);
    }
    function x(C) {
        var B = $.index + C;
        return B >= 0 && B < $.entries.length;
    }
    function T(C) {
        return C === void 0 && (C = !1), c.setPrompt(C);
    }
    function P(C) {
        return c.appendListener(C);
    }
    var $ = {
        length: m.length,
        action: 'POP',
        location: m[f],
        index: f,
        entries: m,
        createHref: y,
        push: w,
        replace: O,
        go: p,
        goBack: h,
        goForward: g,
        canGo: x,
        block: T,
        listen: P,
    };
    return $;
}
var No = { exports: {} },
    vb =
        Array.isArray ||
        function (e) {
            return Object.prototype.toString.call(e) == '[object Array]';
        },
    ts = vb;
No.exports = Cm;
No.exports.parse = Yc;
No.exports.compile = bb;
No.exports.tokensToFunction = Em;
No.exports.tokensToRegExp = Sm;
var yb = new RegExp(
    [
        '(\\\\.)',
        '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
    ].join('|'),
    'g'
);
function Yc(e, t) {
    for (
        var n = [], o = 0, i = 0, r = '', s = (t && t.delimiter) || '/', l;
        (l = yb.exec(e)) != null;

    ) {
        var a = l[0],
            c = l[1],
            u = l.index;
        if (((r += e.slice(i, u)), (i = u + a.length), c)) {
            r += c[1];
            continue;
        }
        var d = e[i],
            f = l[2],
            m = l[3],
            y = l[4],
            w = l[5],
            O = l[6],
            p = l[7];
        r && (n.push(r), (r = ''));
        var h = f != null && d != null && d !== f,
            g = O === '+' || O === '*',
            x = O === '?' || O === '*',
            T = l[2] || s,
            P = y || w;
        n.push({
            name: m || o++,
            prefix: f || '',
            delimiter: T,
            optional: x,
            repeat: g,
            partial: h,
            asterisk: !!p,
            pattern: P ? $b(P) : p ? '.*' : '[^' + _r(T) + ']+?',
        });
    }
    return i < e.length && (r += e.substr(i)), r && n.push(r), n;
}
function bb(e, t) {
    return Em(Yc(e, t), t);
}
function wb(e) {
    return encodeURI(e).replace(/[\/?#]/g, function (t) {
        return '%' + t.charCodeAt(0).toString(16).toUpperCase();
    });
}
function xb(e) {
    return encodeURI(e).replace(/[?#]/g, function (t) {
        return '%' + t.charCodeAt(0).toString(16).toUpperCase();
    });
}
function Em(e, t) {
    for (var n = new Array(e.length), o = 0; o < e.length; o++)
        typeof e[o] == 'object' &&
            (n[o] = new RegExp('^(?:' + e[o].pattern + ')$', qc(t)));
    return function (i, r) {
        for (
            var s = '',
                l = i || {},
                a = r || {},
                c = a.pretty ? wb : encodeURIComponent,
                u = 0;
            u < e.length;
            u++
        ) {
            var d = e[u];
            if (typeof d == 'string') {
                s += d;
                continue;
            }
            var f = l[d.name],
                m;
            if (f == null)
                if (d.optional) {
                    d.partial && (s += d.prefix);
                    continue;
                } else
                    throw new TypeError('Expected "' + d.name + '" to be defined');
            if (ts(f)) {
                if (!d.repeat)
                    throw new TypeError(
                        'Expected "' +
                            d.name +
                            '" to not repeat, but received `' +
                            JSON.stringify(f) +
                            '`'
                    );
                if (f.length === 0) {
                    if (d.optional) continue;
                    throw new TypeError('Expected "' + d.name + '" to not be empty');
                }
                for (var y = 0; y < f.length; y++) {
                    if (((m = c(f[y])), !n[u].test(m)))
                        throw new TypeError(
                            'Expected all "' +
                                d.name +
                                '" to match "' +
                                d.pattern +
                                '", but received `' +
                                JSON.stringify(m) +
                                '`'
                        );
                    s += (y === 0 ? d.prefix : d.delimiter) + m;
                }
                continue;
            }
            if (((m = d.asterisk ? xb(f) : c(f)), !n[u].test(m)))
                throw new TypeError(
                    'Expected "' +
                        d.name +
                        '" to match "' +
                        d.pattern +
                        '", but received "' +
                        m +
                        '"'
                );
            s += d.prefix + m;
        }
        return s;
    };
}
function _r(e) {
    return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}
function $b(e) {
    return e.replace(/([=!:$\/()])/g, '\\$1');
}
function Xc(e, t) {
    return (e.keys = t), e;
}
function qc(e) {
    return e && e.sensitive ? '' : 'i';
}
function kb(e, t) {
    var n = e.source.match(/\((?!\?)/g);
    if (n)
        for (var o = 0; o < n.length; o++)
            t.push({
                name: o,
                prefix: null,
                delimiter: null,
                optional: !1,
                repeat: !1,
                partial: !1,
                asterisk: !1,
                pattern: null,
            });
    return Xc(e, t);
}
function Eb(e, t, n) {
    for (var o = [], i = 0; i < e.length; i++) o.push(Cm(e[i], t, n).source);
    var r = new RegExp('(?:' + o.join('|') + ')', qc(n));
    return Xc(r, t);
}
function Sb(e, t, n) {
    return Sm(Yc(e, n), t, n);
}
function Sm(e, t, n) {
    ts(t) || ((n = t || n), (t = [])), (n = n || {});
    for (var o = n.strict, i = n.end !== !1, r = '', s = 0; s < e.length; s++) {
        var l = e[s];
        if (typeof l == 'string') r += _r(l);
        else {
            var a = _r(l.prefix),
                c = '(?:' + l.pattern + ')';
            t.push(l),
                l.repeat && (c += '(?:' + a + c + ')*'),
                l.optional
                    ? l.partial
                        ? (c = a + '(' + c + ')?')
                        : (c = '(?:' + a + '(' + c + '))?')
                    : (c = a + '(' + c + ')'),
                (r += c);
        }
    }
    var u = _r(n.delimiter || '/'),
        d = r.slice(-u.length) === u;
    return (
        o || (r = (d ? r.slice(0, -u.length) : r) + '(?:' + u + '(?=$))?'),
        i ? (r += '$') : (r += o && d ? '' : '(?=' + u + '|$)'),
        Xc(new RegExp('^' + r, qc(n)), t)
    );
}
function Cm(e, t, n) {
    return (
        ts(t) || ((n = t || n), (t = [])),
        (n = n || {}),
        e instanceof RegExp ? kb(e, t) : ts(e) ? Eb(e, t, n) : Sb(e, t, n)
    );
}
var Cb = No.exports;
const Tm = Ai(Cb);
var Y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var be = typeof Symbol == 'function' && Symbol.for,
    Gc = be ? Symbol.for('react.element') : 60103,
    Zc = be ? Symbol.for('react.portal') : 60106,
    _s = be ? Symbol.for('react.fragment') : 60107,
    Ls = be ? Symbol.for('react.strict_mode') : 60108,
    Is = be ? Symbol.for('react.profiler') : 60114,
    Os = be ? Symbol.for('react.provider') : 60109,
    As = be ? Symbol.for('react.context') : 60110,
    Jc = be ? Symbol.for('react.async_mode') : 60111,
    zs = be ? Symbol.for('react.concurrent_mode') : 60111,
    Ms = be ? Symbol.for('react.forward_ref') : 60112,
    Ns = be ? Symbol.for('react.suspense') : 60113,
    Tb = be ? Symbol.for('react.suspense_list') : 60120,
    Ds = be ? Symbol.for('react.memo') : 60115,
    Bs = be ? Symbol.for('react.lazy') : 60116,
    Pb = be ? Symbol.for('react.block') : 60121,
    Rb = be ? Symbol.for('react.fundamental') : 60117,
    _b = be ? Symbol.for('react.responder') : 60118,
    Lb = be ? Symbol.for('react.scope') : 60119;
function nt(e) {
    if (typeof e == 'object' && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case Gc:
                switch (((e = e.type), e)) {
                    case Jc:
                    case zs:
                    case _s:
                    case Is:
                    case Ls:
                    case Ns:
                        return e;
                    default:
                        switch (((e = e && e.$$typeof), e)) {
                            case As:
                            case Ms:
                            case Bs:
                            case Ds:
                            case Os:
                                return e;
                            default:
                                return t;
                        }
                }
            case Zc:
                return t;
        }
    }
}
function Pm(e) {
    return nt(e) === zs;
}
Y.AsyncMode = Jc;
Y.ConcurrentMode = zs;
Y.ContextConsumer = As;
Y.ContextProvider = Os;
Y.Element = Gc;
Y.ForwardRef = Ms;
Y.Fragment = _s;
Y.Lazy = Bs;
Y.Memo = Ds;
Y.Portal = Zc;
Y.Profiler = Is;
Y.StrictMode = Ls;
Y.Suspense = Ns;
Y.isAsyncMode = function (e) {
    return Pm(e) || nt(e) === Jc;
};
Y.isConcurrentMode = Pm;
Y.isContextConsumer = function (e) {
    return nt(e) === As;
};
Y.isContextProvider = function (e) {
    return nt(e) === Os;
};
Y.isElement = function (e) {
    return typeof e == 'object' && e !== null && e.$$typeof === Gc;
};
Y.isForwardRef = function (e) {
    return nt(e) === Ms;
};
Y.isFragment = function (e) {
    return nt(e) === _s;
};
Y.isLazy = function (e) {
    return nt(e) === Bs;
};
Y.isMemo = function (e) {
    return nt(e) === Ds;
};
Y.isPortal = function (e) {
    return nt(e) === Zc;
};
Y.isProfiler = function (e) {
    return nt(e) === Is;
};
Y.isStrictMode = function (e) {
    return nt(e) === Ls;
};
Y.isSuspense = function (e) {
    return nt(e) === Ns;
};
Y.isValidElementType = function (e) {
    return (
        typeof e == 'string' ||
        typeof e == 'function' ||
        e === _s ||
        e === zs ||
        e === Is ||
        e === Ls ||
        e === Ns ||
        e === Tb ||
        (typeof e == 'object' &&
            e !== null &&
            (e.$$typeof === Bs ||
                e.$$typeof === Ds ||
                e.$$typeof === Os ||
                e.$$typeof === As ||
                e.$$typeof === Ms ||
                e.$$typeof === Rb ||
                e.$$typeof === _b ||
                e.$$typeof === Lb ||
                e.$$typeof === Pb))
    );
};
Y.typeOf = nt;
function Rm(e, t) {
    if (e == null) return {};
    var n = {},
        o = Object.keys(e),
        i,
        r;
    for (r = 0; r < o.length; r++) (i = o[r]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n;
}
var _m = { exports: {} },
    K = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var we = typeof Symbol == 'function' && Symbol.for,
    eu = we ? Symbol.for('react.element') : 60103,
    tu = we ? Symbol.for('react.portal') : 60106,
    js = we ? Symbol.for('react.fragment') : 60107,
    Hs = we ? Symbol.for('react.strict_mode') : 60108,
    Fs = we ? Symbol.for('react.profiler') : 60114,
    Us = we ? Symbol.for('react.provider') : 60109,
    Vs = we ? Symbol.for('react.context') : 60110,
    nu = we ? Symbol.for('react.async_mode') : 60111,
    Ws = we ? Symbol.for('react.concurrent_mode') : 60111,
    Ks = we ? Symbol.for('react.forward_ref') : 60112,
    Qs = we ? Symbol.for('react.suspense') : 60113,
    Ib = we ? Symbol.for('react.suspense_list') : 60120,
    Ys = we ? Symbol.for('react.memo') : 60115,
    Xs = we ? Symbol.for('react.lazy') : 60116,
    Ob = we ? Symbol.for('react.block') : 60121,
    Ab = we ? Symbol.for('react.fundamental') : 60117,
    zb = we ? Symbol.for('react.responder') : 60118,
    Mb = we ? Symbol.for('react.scope') : 60119;
function ot(e) {
    if (typeof e == 'object' && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case eu:
                switch (((e = e.type), e)) {
                    case nu:
                    case Ws:
                    case js:
                    case Fs:
                    case Hs:
                    case Qs:
                        return e;
                    default:
                        switch (((e = e && e.$$typeof), e)) {
                            case Vs:
                            case Ks:
                            case Xs:
                            case Ys:
                            case Us:
                                return e;
                            default:
                                return t;
                        }
                }
            case tu:
                return t;
        }
    }
}
function Lm(e) {
    return ot(e) === Ws;
}
K.AsyncMode = nu;
K.ConcurrentMode = Ws;
K.ContextConsumer = Vs;
K.ContextProvider = Us;
K.Element = eu;
K.ForwardRef = Ks;
K.Fragment = js;
K.Lazy = Xs;
K.Memo = Ys;
K.Portal = tu;
K.Profiler = Fs;
K.StrictMode = Hs;
K.Suspense = Qs;
K.isAsyncMode = function (e) {
    return Lm(e) || ot(e) === nu;
};
K.isConcurrentMode = Lm;
K.isContextConsumer = function (e) {
    return ot(e) === Vs;
};
K.isContextProvider = function (e) {
    return ot(e) === Us;
};
K.isElement = function (e) {
    return typeof e == 'object' && e !== null && e.$$typeof === eu;
};
K.isForwardRef = function (e) {
    return ot(e) === Ks;
};
K.isFragment = function (e) {
    return ot(e) === js;
};
K.isLazy = function (e) {
    return ot(e) === Xs;
};
K.isMemo = function (e) {
    return ot(e) === Ys;
};
K.isPortal = function (e) {
    return ot(e) === tu;
};
K.isProfiler = function (e) {
    return ot(e) === Fs;
};
K.isStrictMode = function (e) {
    return ot(e) === Hs;
};
K.isSuspense = function (e) {
    return ot(e) === Qs;
};
K.isValidElementType = function (e) {
    return (
        typeof e == 'string' ||
        typeof e == 'function' ||
        e === js ||
        e === Ws ||
        e === Fs ||
        e === Hs ||
        e === Qs ||
        e === Ib ||
        (typeof e == 'object' &&
            e !== null &&
            (e.$$typeof === Xs ||
                e.$$typeof === Ys ||
                e.$$typeof === Us ||
                e.$$typeof === Vs ||
                e.$$typeof === Ks ||
                e.$$typeof === Ab ||
                e.$$typeof === zb ||
                e.$$typeof === Mb ||
                e.$$typeof === Ob))
    );
};
K.typeOf = ot;
_m.exports = K;
var Nb = _m.exports,
    ou = Nb,
    Db = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
    },
    Bb = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0,
    },
    jb = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
    },
    Im = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0,
    },
    iu = {};
iu[ou.ForwardRef] = jb;
iu[ou.Memo] = Im;
function Gd(e) {
    return ou.isMemo(e) ? Im : iu[e.$$typeof] || Db;
}
var Hb = Object.defineProperty,
    Fb = Object.getOwnPropertyNames,
    Zd = Object.getOwnPropertySymbols,
    Ub = Object.getOwnPropertyDescriptor,
    Vb = Object.getPrototypeOf,
    Jd = Object.prototype;
function Om(e, t, n) {
    if (typeof t != 'string') {
        if (Jd) {
            var o = Vb(t);
            o && o !== Jd && Om(e, o, n);
        }
        var i = Fb(t);
        Zd && (i = i.concat(Zd(t)));
        for (var r = Gd(e), s = Gd(t), l = 0; l < i.length; ++l) {
            var a = i[l];
            if (!Bb[a] && !(n && n[a]) && !(s && s[a]) && !(r && r[a])) {
                var c = Ub(t, a);
                try {
                    Hb(e, a, c);
                } catch (u) {}
            }
        }
    }
    return e;
}
var Wb = Om;
const Kb = Ai(Wb);
var Ol = 1073741823,
    ef =
        typeof globalThis < 'u'
            ? globalThis
            : typeof window < 'u'
            ? window
            : typeof global < 'u'
            ? global
            : {};
function Qb() {
    var e = '__global_unique_id__';
    return (ef[e] = (ef[e] || 0) + 1);
}
function Yb(e, t) {
    return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Xb(e) {
    var t = [];
    return {
        on: function (o) {
            t.push(o);
        },
        off: function (o) {
            t = t.filter(function (i) {
                return i !== o;
            });
        },
        get: function () {
            return e;
        },
        set: function (o, i) {
            (e = o),
                t.forEach(function (r) {
                    return r(e, i);
                });
        },
    };
}
function qb(e) {
    return Array.isArray(e) ? e[0] : e;
}
function Gb(e, t) {
    var n,
        o,
        i = '__create-react-context-' + Qb() + '__',
        r = (function (l) {
            vn(a, l);
            function a() {
                for (
                    var u, d = arguments.length, f = new Array(d), m = 0;
                    m < d;
                    m++
                )
                    f[m] = arguments[m];
                return (
                    (u = l.call.apply(l, [this].concat(f)) || this),
                    (u.emitter = Xb(u.props.value)),
                    u
                );
            }
            var c = a.prototype;
            return (
                (c.getChildContext = function () {
                    var d;
                    return (d = {}), (d[i] = this.emitter), d;
                }),
                (c.componentWillReceiveProps = function (d) {
                    if (this.props.value !== d.value) {
                        var f = this.props.value,
                            m = d.value,
                            y;
                        Yb(f, m)
                            ? (y = 0)
                            : ((y = typeof t == 'function' ? t(f, m) : Ol),
                              (y |= 0),
                              y !== 0 && this.emitter.set(d.value, y));
                    }
                }),
                (c.render = function () {
                    return this.props.children;
                }),
                a
            );
        })(b.Component);
    r.childContextTypes = ((n = {}), (n[i] = Ud.object.isRequired), n);
    var s = (function (l) {
        vn(a, l);
        function a() {
            for (var u, d = arguments.length, f = new Array(d), m = 0; m < d; m++)
                f[m] = arguments[m];
            return (
                (u = l.call.apply(l, [this].concat(f)) || this),
                (u.observedBits = void 0),
                (u.state = { value: u.getValue() }),
                (u.onUpdate = function (y, w) {
                    var O = u.observedBits | 0;
                    O & w && u.setState({ value: u.getValue() });
                }),
                u
            );
        }
        var c = a.prototype;
        return (
            (c.componentWillReceiveProps = function (d) {
                var f = d.observedBits;
                this.observedBits = f == null ? Ol : f;
            }),
            (c.componentDidMount = function () {
                this.context[i] && this.context[i].on(this.onUpdate);
                var d = this.props.observedBits;
                this.observedBits = d == null ? Ol : d;
            }),
            (c.componentWillUnmount = function () {
                this.context[i] && this.context[i].off(this.onUpdate);
            }),
            (c.getValue = function () {
                return this.context[i] ? this.context[i].get() : e;
            }),
            (c.render = function () {
                return qb(this.props.children)(this.state.value);
            }),
            a
        );
    })(b.Component);
    return (
        (s.contextTypes = ((o = {}), (o[i] = Ud.object), o)),
        { Provider: r, Consumer: s }
    );
}
var Zb = b.createContext || Gb,
    Am = function (t) {
        var n = Zb();
        return (n.displayName = t), n;
    },
    Jb = Am('Router-History'),
    _o = Am('Router'),
    ji = (function (e) {
        vn(t, e),
            (t.computeRootMatch = function (i) {
                return { path: '/', url: '/', params: {}, isExact: i === '/' };
            });
        function t(o) {
            var i;
            return (
                (i = e.call(this, o) || this),
                (i.state = { location: o.history.location }),
                (i._isMounted = !1),
                (i._pendingLocation = null),
                o.staticContext ||
                    (i.unlisten = o.history.listen(function (r) {
                        i._pendingLocation = r;
                    })),
                i
            );
        }
        var n = t.prototype;
        return (
            (n.componentDidMount = function () {
                var i = this;
                (this._isMounted = !0),
                    this.unlisten && this.unlisten(),
                    this.props.staticContext ||
                        (this.unlisten = this.props.history.listen(function (r) {
                            i._isMounted && i.setState({ location: r });
                        })),
                    this._pendingLocation &&
                        this.setState({ location: this._pendingLocation });
            }),
            (n.componentWillUnmount = function () {
                this.unlisten &&
                    (this.unlisten(),
                    (this._isMounted = !1),
                    (this._pendingLocation = null));
            }),
            (n.render = function () {
                return b.createElement(
                    _o.Provider,
                    {
                        value: {
                            history: this.props.history,
                            location: this.state.location,
                            match: t.computeRootMatch(this.state.location.pathname),
                            staticContext: this.props.staticContext,
                        },
                    },
                    b.createElement(Jb.Provider, {
                        children: this.props.children || null,
                        value: this.props.history,
                    })
                );
            }),
            t
        );
    })(b.Component);
b.Component;
var e1 = (function (e) {
        vn(t, e);
        function t() {
            return e.apply(this, arguments) || this;
        }
        var n = t.prototype;
        return (
            (n.componentDidMount = function () {
                this.props.onMount && this.props.onMount.call(this, this);
            }),
            (n.componentDidUpdate = function (i) {
                this.props.onUpdate && this.props.onUpdate.call(this, this, i);
            }),
            (n.componentWillUnmount = function () {
                this.props.onUnmount && this.props.onUnmount.call(this, this);
            }),
            (n.render = function () {
                return null;
            }),
            t
        );
    })(b.Component),
    Al = {},
    t1 = 1e4,
    tf = 0;
function n1(e) {
    if (Al[e]) return Al[e];
    var t = Tm.compile(e);
    return tf < t1 && ((Al[e] = t), tf++), t;
}
function nf(e, t) {
    return (
        e === void 0 && (e = '/'),
        t === void 0 && (t = {}),
        e === '/' ? e : n1(e)(t, { pretty: !0 })
    );
}
function o1(e) {
    var t = e.computedMatch,
        n = e.to,
        o = e.push,
        i = o === void 0 ? !1 : o;
    return b.createElement(_o.Consumer, null, function (r) {
        r || Fn(!1);
        var s = r.history,
            l = r.staticContext,
            a = i ? s.push : s.replace,
            c = He(
                t
                    ? typeof n == 'string'
                        ? nf(n, t.params)
                        : Ke({}, n, { pathname: nf(n.pathname, t.params) })
                    : n
            );
        return l
            ? (a(c), null)
            : b.createElement(e1, {
                  onMount: function () {
                      a(c);
                  },
                  onUpdate: function (d, f) {
                      var m = He(f.to);
                      lb(m, Ke({}, c, { key: m.key })) || a(c);
                  },
                  to: n,
              });
    });
}
var of = {},
    i1 = 1e4,
    rf = 0;
function r1(e, t) {
    var n = '' + t.end + t.strict + t.sensitive,
        o = of[n] || (of[n] = {});
    if (o[e]) return o[e];
    var i = [],
        r = Tm(e, i, t),
        s = { regexp: r, keys: i };
    return rf < i1 && ((o[e] = s), rf++), s;
}
function Mn(e, t) {
    t === void 0 && (t = {}),
        (typeof t == 'string' || Array.isArray(t)) && (t = { path: t });
    var n = t,
        o = n.path,
        i = n.exact,
        r = i === void 0 ? !1 : i,
        s = n.strict,
        l = s === void 0 ? !1 : s,
        a = n.sensitive,
        c = a === void 0 ? !1 : a,
        u = [].concat(o);
    return u.reduce(function (d, f) {
        if (!f && f !== '') return null;
        if (d) return d;
        var m = r1(f, { end: r, strict: l, sensitive: c }),
            y = m.regexp,
            w = m.keys,
            O = y.exec(e);
        if (!O) return null;
        var p = O[0],
            h = O.slice(1),
            g = e === p;
        return r && !g
            ? null
            : {
                  path: f,
                  url: f === '/' && p === '' ? '/' : p,
                  isExact: g,
                  params: w.reduce(function (x, T, P) {
                      return (x[T.name] = h[P]), x;
                  }, {}),
              };
    }, null);
}
function s1(e) {
    return b.Children.count(e) === 0;
}
var ei = (function (e) {
    vn(t, e);
    function t() {
        return e.apply(this, arguments) || this;
    }
    var n = t.prototype;
    return (
        (n.render = function () {
            var i = this;
            return b.createElement(_o.Consumer, null, function (r) {
                r || Fn(!1);
                var s = i.props.location || r.location,
                    l = i.props.computedMatch
                        ? i.props.computedMatch
                        : i.props.path
                        ? Mn(s.pathname, i.props)
                        : r.match,
                    a = Ke({}, r, { location: s, match: l }),
                    c = i.props,
                    u = c.children,
                    d = c.component,
                    f = c.render;
                return (
                    Array.isArray(u) && s1(u) && (u = null),
                    b.createElement(
                        _o.Provider,
                        { value: a },
                        a.match
                            ? u
                                ? typeof u == 'function'
                                    ? u(a)
                                    : u
                                : d
                                ? b.createElement(d, a)
                                : f
                                ? f(a)
                                : null
                            : typeof u == 'function'
                            ? u(a)
                            : null
                    )
                );
            });
        }),
        t
    );
})(b.Component);
function ru(e) {
    return e.charAt(0) === '/' ? e : '/' + e;
}
function l1(e, t) {
    return e ? Ke({}, t, { pathname: ru(e) + t.pathname }) : t;
}
function a1(e, t) {
    if (!e) return t;
    var n = ru(e);
    return t.pathname.indexOf(n) !== 0
        ? t
        : Ke({}, t, { pathname: t.pathname.substr(n.length) });
}
function sf(e) {
    return typeof e == 'string' ? e : st(e);
}
function zl(e) {
    return function () {
        Fn(!1);
    };
}
function lf() {}
b.Component;
b.Component;
function c1(e) {
    var t = 'withRouter(' + (e.displayName || e.name) + ')',
        n = function (i) {
            var r = i.wrappedComponentRef,
                s = Rm(i, ['wrappedComponentRef']);
            return b.createElement(_o.Consumer, null, function (l) {
                return l || Fn(!1), b.createElement(e, Ke({}, s, l, { ref: r }));
            });
        };
    return (n.displayName = t), (n.WrappedComponent = e), Kb(n, e);
}
b.useContext;
const u1 = 'modulepreload',
    d1 = function (e) {
        return '/' + e;
    },
    af = {},
    It = function (t, n, o) {
        if (!n || n.length === 0) return t();
        const i = document.getElementsByTagName('link');
        return Promise.all(
            n.map((r) => {
                if (((r = d1(r)), r in af)) return;
                af[r] = !0;
                const s = r.endsWith('.css'),
                    l = s ? '[rel="stylesheet"]' : '';
                if (!!o)
                    for (let u = i.length - 1; u >= 0; u--) {
                        const d = i[u];
                        if (d.href === r && (!s || d.rel === 'stylesheet')) return;
                    }
                else if (
                    document.querySelector('link[href="'.concat(r, '"]').concat(l))
                )
                    return;
                const c = document.createElement('link');
                if (
                    ((c.rel = s ? 'stylesheet' : u1),
                    s || ((c.as = 'script'), (c.crossOrigin = '')),
                    (c.href = r),
                    document.head.appendChild(c),
                    s)
                )
                    return new Promise((u, d) => {
                        c.addEventListener('load', u),
                            c.addEventListener('error', () =>
                                d(new Error('Unable to preload CSS for '.concat(r)))
                            );
                    });
            })
        )
            .then(() => t())
            .catch((r) => {
                const s = new Event('vite:preloadError', { cancelable: !0 });
                if (((s.payload = r), window.dispatchEvent(s), !s.defaultPrevented))
                    throw r;
            });
    },
    Yn = {
        allRenderFn: !1,
        cmpDidLoad: !0,
        cmpDidUnload: !1,
        cmpDidUpdate: !0,
        cmpDidRender: !0,
        cmpWillLoad: !0,
        cmpWillUpdate: !0,
        cmpWillRender: !0,
        connectedCallback: !0,
        disconnectedCallback: !0,
        element: !0,
        event: !0,
        hasRenderFn: !0,
        lifecycle: !0,
        hostListener: !0,
        hostListenerTargetWindow: !0,
        hostListenerTargetDocument: !0,
        hostListenerTargetBody: !0,
        hostListenerTargetParent: !1,
        hostListenerTarget: !0,
        member: !0,
        method: !0,
        mode: !0,
        observeAttribute: !0,
        prop: !0,
        propMutable: !0,
        reflect: !0,
        scoped: !0,
        shadowDom: !0,
        slot: !0,
        cssAnnotations: !0,
        state: !0,
        style: !0,
        svg: !0,
        updatable: !0,
        vdomAttribute: !0,
        vdomXlink: !0,
        vdomClass: !0,
        vdomFunctional: !0,
        vdomKey: !0,
        vdomListener: !0,
        vdomRef: !0,
        vdomPropOrAttr: !0,
        vdomRender: !0,
        vdomStyle: !0,
        vdomText: !0,
        watchCallback: !0,
        taskQueue: !0,
        hotModuleReplacement: !1,
        isDebug: !1,
        isDev: !1,
        isTesting: !1,
        hydrateServerSide: !1,
        hydrateClientSide: !1,
        lifecycleDOMEvents: !1,
        lazyLoad: !1,
        profile: !1,
        slotRelocation: !0,
        appendChildSlotFix: !1,
        cloneNodeFix: !1,
        hydratedAttribute: !1,
        hydratedClass: !0,
        scriptDataOpts: !1,
        scopedSlotTextContentFix: !1,
        shadowDomShim: !1,
        slotChildNodesFix: !1,
        invisiblePrehydration: !0,
        propBoolean: !0,
        propNumber: !0,
        propString: !0,
        constructableCSS: !0,
        cmpShouldUpdate: !0,
        devTools: !1,
        shadowDelegatesFocus: !0,
        initializeNextTick: !1,
        asyncLoading: !1,
        asyncQueue: !1,
        transformTagName: !1,
        attachStyles: !0,
        patchPseudoShadowDom: !1,
    };
let Xn,
    zm,
    qs,
    Mm = !1,
    ns = !1,
    su = !1,
    Xe = !1,
    cf = null,
    Da = !1;
const f1 = { isDev: !1, isBrowser: !0, isServer: !1, isTesting: !1 },
    Nn =
        (e, t = '') =>
        () => {},
    uf = 'http://www.w3.org/1999/xlink',
    df = {},
    h1 = 'http://www.w3.org/2000/svg',
    p1 = 'http://www.w3.org/1999/xhtml',
    m1 = (e) => e != null,
    lu = (e) => ((e = typeof e), e === 'object' || e === 'function');
function g1(e) {
    var t, n, o;
    return (o =
        (n =
            (t = e.head) === null || t === void 0
                ? void 0
                : t.querySelector('meta[name="csp-nonce"]')) === null || n === void 0
            ? void 0
            : n.getAttribute('content')) !== null && o !== void 0
        ? o
        : void 0;
}
const H = (e, t, ...n) => {
        let o = null,
            i = null,
            r = null,
            s = !1,
            l = !1;
        const a = [],
            c = (d) => {
                for (let f = 0; f < d.length; f++)
                    (o = d[f]),
                        Array.isArray(o)
                            ? c(o)
                            : o != null &&
                              typeof o != 'boolean' &&
                              ((s = typeof e != 'function' && !lu(o)) &&
                                  (o = String(o)),
                              s && l
                                  ? (a[a.length - 1].$text$ += o)
                                  : a.push(s ? os(null, o) : o),
                              (l = s));
            };
        if ((c(n), t)) {
            t.key && (i = t.key), t.name && (r = t.name);
            {
                const d = t.className || t.class;
                d &&
                    (t.class =
                        typeof d != 'object'
                            ? d
                            : Object.keys(d)
                                  .filter((f) => d[f])
                                  .join(' '));
            }
        }
        if (typeof e == 'function') return e(t === null ? {} : t, a, y1);
        const u = os(e, null);
        return (
            (u.$attrs$ = t),
            a.length > 0 && (u.$children$ = a),
            (u.$key$ = i),
            (u.$name$ = r),
            u
        );
    },
    os = (e, t) => {
        const n = { $flags$: 0, $tag$: e, $text$: t, $elm$: null, $children$: null };
        return (n.$attrs$ = null), (n.$key$ = null), (n.$name$ = null), n;
    },
    Mt = {},
    v1 = (e) => e && e.$tag$ === Mt,
    y1 = {
        forEach: (e, t) => e.map(ff).forEach(t),
        map: (e, t) => e.map(ff).map(t).map(b1),
    },
    ff = (e) => ({
        vattrs: e.$attrs$,
        vchildren: e.$children$,
        vkey: e.$key$,
        vname: e.$name$,
        vtag: e.$tag$,
        vtext: e.$text$,
    }),
    b1 = (e) => {
        if (typeof e.vtag == 'function') {
            const n = Object.assign({}, e.vattrs);
            return (
                e.vkey && (n.key = e.vkey),
                e.vname && (n.name = e.vname),
                H(e.vtag, n, ...(e.vchildren || []))
            );
        }
        const t = os(e.vtag, e.vtext);
        return (
            (t.$attrs$ = e.vattrs),
            (t.$children$ = e.vchildren),
            (t.$key$ = e.vkey),
            (t.$name$ = e.vname),
            t
        );
    },
    w1 = (e) => Qm.map((t) => t(e)).find((t) => !!t),
    x1 = (e) => Qm.push(e),
    $1 = (e) => Un(e).$modeName$,
    k1 = (e, t) =>
        e != null && !lu(e)
            ? t & 4
                ? e === 'false'
                    ? !1
                    : e === '' || !!e
                : t & 2
                ? parseFloat(e)
                : t & 1
                ? String(e)
                : e
            : e,
    E1 = (e) => e,
    We = (e, t, n) => {
        const o = E1(e);
        return {
            emit: (i) =>
                S1(o, t, {
                    bubbles: !!(n & 4),
                    composed: !!(n & 2),
                    cancelable: !!(n & 1),
                    detail: i,
                }),
        };
    },
    S1 = (e, t, n) => {
        const o = Se.ce(t, n);
        return e.dispatchEvent(o), o;
    },
    hf = new WeakMap(),
    C1 = (e, t, n) => {
        let o = rs.get(e);
        Z1 && n
            ? ((o = o || new CSSStyleSheet()),
              typeof o == 'string' ? (o = t) : o.replaceSync(t))
            : (o = t),
            rs.set(e, o);
    },
    T1 = (e, t, n) => {
        var o;
        const i = Nm(t, n),
            r = rs.get(i);
        if (((e = e.nodeType === 11 ? e : Et), r))
            if (typeof r == 'string') {
                e = e.head || e;
                let s = hf.get(e),
                    l;
                if ((s || hf.set(e, (s = new Set())), !s.has(i))) {
                    {
                        (l = Et.createElement('style')), (l.innerHTML = r);
                        const a =
                            (o = Se.$nonce$) !== null && o !== void 0 ? o : g1(Et);
                        a != null && l.setAttribute('nonce', a),
                            e.insertBefore(l, e.querySelector('link'));
                    }
                    s && s.add(i);
                }
            } else
                e.adoptedStyleSheets.includes(r) ||
                    (e.adoptedStyleSheets = [...e.adoptedStyleSheets, r]);
        return i;
    },
    P1 = (e) => {
        const t = e.$cmpMeta$,
            n = e.$hostElement$,
            o = t.$flags$,
            i = Nn('attachStyles', t.$tagName$),
            r = T1(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t, e.$modeName$);
        o & 10 &&
            ((n['s-sc'] = r),
            n.classList.add(r + '-h'),
            o & 2 && n.classList.add(r + '-s')),
            i();
    },
    Nm = (e, t) =>
        'sc-' + (t && e.$flags$ & 32 ? e.$tagName$ + '-' + t : e.$tagName$),
    pf = (e, t, n, o, i, r) => {
        if (n !== o) {
            let s = bf(e, t),
                l = t.toLowerCase();
            if (t === 'class') {
                const a = e.classList,
                    c = mf(n),
                    u = mf(o);
                a.remove(...c.filter((d) => d && !u.includes(d))),
                    a.add(...u.filter((d) => d && !c.includes(d)));
            } else if (t === 'style') {
                for (const a in n)
                    (!o || o[a] == null) &&
                        (a.includes('-')
                            ? e.style.removeProperty(a)
                            : (e.style[a] = ''));
                for (const a in o)
                    (!n || o[a] !== n[a]) &&
                        (a.includes('-')
                            ? e.style.setProperty(a, o[a])
                            : (e.style[a] = o[a]));
            } else if (t !== 'key')
                if (t === 'ref') o && o(e);
                else if (!e.__lookupSetter__(t) && t[0] === 'o' && t[1] === 'n')
                    t[2] === '-'
                        ? (t = t.slice(3))
                        : bf(Gs, l)
                        ? (t = l.slice(2))
                        : (t = l[2] + t.slice(3)),
                        n && Se.rel(e, t, n, !1),
                        o && Se.ael(e, t, o, !1);
                else {
                    const a = lu(o);
                    if ((s || (a && o !== null)) && !i)
                        try {
                            if (e.tagName.includes('-')) e[t] = o;
                            else {
                                const u = o == null ? '' : o;
                                t === 'list'
                                    ? (s = !1)
                                    : (n == null || e[t] != u) && (e[t] = u);
                            }
                        } catch (u) {}
                    let c = !1;
                    l !== (l = l.replace(/^xlink\:?/, '')) && ((t = l), (c = !0)),
                        o == null || o === !1
                            ? (o !== !1 || e.getAttribute(t) === '') &&
                              (c ? e.removeAttributeNS(uf, t) : e.removeAttribute(t))
                            : (!s || r & 4 || i) &&
                              !a &&
                              ((o = o === !0 ? '' : o),
                              c ? e.setAttributeNS(uf, t, o) : e.setAttribute(t, o));
                }
        }
    },
    R1 = /\s/,
    mf = (e) => (e ? e.split(R1) : []),
    Dm = (e, t, n, o) => {
        const i = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$,
            r = (e && e.$attrs$) || df,
            s = t.$attrs$ || df;
        for (o in r) o in s || pf(i, o, r[o], void 0, n, t.$flags$);
        for (o in s) pf(i, o, r[o], s[o], n, t.$flags$);
    },
    is = (e, t, n, o) => {
        const i = t.$children$[n];
        let r = 0,
            s,
            l,
            a;
        if (
            (Mm ||
                ((su = !0),
                i.$tag$ === 'slot' &&
                    (Xn && o.classList.add(Xn + '-s'),
                    (i.$flags$ |= i.$children$ ? 2 : 1))),
            i.$text$ !== null)
        )
            s = i.$elm$ = Et.createTextNode(i.$text$);
        else if (i.$flags$ & 1) s = i.$elm$ = Et.createTextNode('');
        else {
            if (
                (Xe || (Xe = i.$tag$ === 'svg'),
                (s = i.$elm$ =
                    Et.createElementNS(
                        Xe ? h1 : p1,
                        i.$flags$ & 2 ? 'slot-fb' : i.$tag$
                    )),
                Xe && i.$tag$ === 'foreignObject' && (Xe = !1),
                Dm(null, i, Xe),
                m1(Xn) && s['s-si'] !== Xn && s.classList.add((s['s-si'] = Xn)),
                i.$children$)
            )
                for (r = 0; r < i.$children$.length; ++r)
                    (l = is(e, i, r, s)), l && s.appendChild(l);
            i.$tag$ === 'svg'
                ? (Xe = !1)
                : s.tagName === 'foreignObject' && (Xe = !0);
        }
        return (
            (s['s-hn'] = qs),
            i.$flags$ & 3 &&
                ((s['s-sr'] = !0),
                (s['s-cr'] = zm),
                (s['s-sn'] = i.$name$ || ''),
                (a = e && e.$children$ && e.$children$[n]),
                a && a.$tag$ === i.$tag$ && e.$elm$ && _i(e.$elm$, !1)),
            s
        );
    },
    _i = (e, t) => {
        Se.$flags$ |= 1;
        const n = e.childNodes;
        for (let o = n.length - 1; o >= 0; o--) {
            const i = n[o];
            i['s-hn'] !== qs &&
                i['s-ol'] &&
                (Hm(i).insertBefore(i, au(i)),
                i['s-ol'].remove(),
                (i['s-ol'] = void 0),
                (su = !0)),
                t && _i(i, t);
        }
        Se.$flags$ &= -2;
    },
    Bm = (e, t, n, o, i, r) => {
        let s = (e['s-cr'] && e['s-cr'].parentNode) || e,
            l;
        for (s.shadowRoot && s.tagName === qs && (s = s.shadowRoot); i <= r; ++i)
            o[i] &&
                ((l = is(null, n, i, e)),
                l && ((o[i].$elm$ = l), s.insertBefore(l, au(t))));
    },
    jm = (e, t, n) => {
        for (let o = t; o <= n; ++o) {
            const i = e[o];
            if (i) {
                const r = i.$elm$;
                Vm(i),
                    r &&
                        ((ns = !0),
                        r['s-ol'] ? r['s-ol'].remove() : _i(r, !0),
                        r.remove());
            }
        }
    },
    _1 = (e, t, n, o) => {
        let i = 0,
            r = 0,
            s = 0,
            l = 0,
            a = t.length - 1,
            c = t[0],
            u = t[a],
            d = o.length - 1,
            f = o[0],
            m = o[d],
            y,
            w;
        for (; i <= a && r <= d; )
            if (c == null) c = t[++i];
            else if (u == null) u = t[--a];
            else if (f == null) f = o[++r];
            else if (m == null) m = o[--d];
            else if (fr(c, f)) qn(c, f), (c = t[++i]), (f = o[++r]);
            else if (fr(u, m)) qn(u, m), (u = t[--a]), (m = o[--d]);
            else if (fr(c, m))
                (c.$tag$ === 'slot' || m.$tag$ === 'slot') &&
                    _i(c.$elm$.parentNode, !1),
                    qn(c, m),
                    e.insertBefore(c.$elm$, u.$elm$.nextSibling),
                    (c = t[++i]),
                    (m = o[--d]);
            else if (fr(u, f))
                (c.$tag$ === 'slot' || m.$tag$ === 'slot') &&
                    _i(u.$elm$.parentNode, !1),
                    qn(u, f),
                    e.insertBefore(u.$elm$, c.$elm$),
                    (u = t[--a]),
                    (f = o[++r]);
            else {
                for (s = -1, l = i; l <= a; ++l)
                    if (t[l] && t[l].$key$ !== null && t[l].$key$ === f.$key$) {
                        s = l;
                        break;
                    }
                s >= 0
                    ? ((w = t[s]),
                      w.$tag$ !== f.$tag$
                          ? (y = is(t && t[r], n, s, e))
                          : (qn(w, f), (t[s] = void 0), (y = w.$elm$)),
                      (f = o[++r]))
                    : ((y = is(t && t[r], n, r, e)), (f = o[++r])),
                    y && Hm(c.$elm$).insertBefore(y, au(c.$elm$));
            }
        i > a
            ? Bm(e, o[d + 1] == null ? null : o[d + 1].$elm$, n, o, r, d)
            : r > d && jm(t, i, a);
    },
    fr = (e, t) =>
        e.$tag$ === t.$tag$
            ? e.$tag$ === 'slot'
                ? e.$name$ === t.$name$
                : e.$key$ === t.$key$
            : !1,
    au = (e) => (e && e['s-ol']) || e,
    Hm = (e) => (e['s-ol'] ? e['s-ol'] : e).parentNode,
    qn = (e, t) => {
        const n = (t.$elm$ = e.$elm$),
            o = e.$children$,
            i = t.$children$,
            r = t.$tag$,
            s = t.$text$;
        let l;
        s === null
            ? ((Xe = r === 'svg' ? !0 : r === 'foreignObject' ? !1 : Xe),
              r === 'slot' || Dm(e, t, Xe),
              o !== null && i !== null
                  ? _1(n, o, t, i)
                  : i !== null
                  ? (e.$text$ !== null && (n.textContent = ''),
                    Bm(n, null, t, i, 0, i.length - 1))
                  : o !== null && jm(o, 0, o.length - 1),
              Xe && r === 'svg' && (Xe = !1))
            : (l = n['s-cr'])
            ? (l.parentNode.textContent = s)
            : e.$text$ !== s && (n.data = s);
    },
    Fm = (e) => {
        const t = e.childNodes;
        let n, o, i, r, s, l;
        for (o = 0, i = t.length; o < i; o++)
            if (((n = t[o]), n.nodeType === 1)) {
                if (n['s-sr']) {
                    for (s = n['s-sn'], n.hidden = !1, r = 0; r < i; r++)
                        if (
                            ((l = t[r].nodeType),
                            t[r]['s-hn'] !== n['s-hn'] || s !== '')
                        ) {
                            if (l === 1 && s === t[r].getAttribute('slot')) {
                                n.hidden = !0;
                                break;
                            }
                        } else if (
                            l === 1 ||
                            (l === 3 && t[r].textContent.trim() !== '')
                        ) {
                            n.hidden = !0;
                            break;
                        }
                }
                Fm(n);
            }
    },
    wt = [],
    Um = (e) => {
        let t,
            n,
            o,
            i,
            r,
            s,
            l = 0;
        const a = e.childNodes,
            c = a.length;
        for (; l < c; l++) {
            if (((t = a[l]), t['s-sr'] && (n = t['s-cr']) && n.parentNode))
                for (
                    o = n.parentNode.childNodes, i = t['s-sn'], s = o.length - 1;
                    s >= 0;
                    s--
                )
                    (n = o[s]),
                        !n['s-cn'] &&
                            !n['s-nr'] &&
                            n['s-hn'] !== t['s-hn'] &&
                            (gf(n, i)
                                ? ((r = wt.find((u) => u.$nodeToRelocate$ === n)),
                                  (ns = !0),
                                  (n['s-sn'] = n['s-sn'] || i),
                                  r
                                      ? (r.$slotRefNode$ = t)
                                      : wt.push({
                                            $slotRefNode$: t,
                                            $nodeToRelocate$: n,
                                        }),
                                  n['s-sr'] &&
                                      wt.map((u) => {
                                          gf(u.$nodeToRelocate$, n['s-sn']) &&
                                              ((r = wt.find(
                                                  (d) => d.$nodeToRelocate$ === n
                                              )),
                                              r &&
                                                  !u.$slotRefNode$ &&
                                                  (u.$slotRefNode$ =
                                                      r.$slotRefNode$));
                                      }))
                                : wt.some((u) => u.$nodeToRelocate$ === n) ||
                                  wt.push({ $nodeToRelocate$: n }));
            t.nodeType === 1 && Um(t);
        }
    },
    gf = (e, t) =>
        e.nodeType === 1
            ? (e.getAttribute('slot') === null && t === '') ||
              e.getAttribute('slot') === t
            : e['s-sn'] === t
            ? !0
            : t === '',
    Vm = (e) => {
        e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null),
            e.$children$ && e.$children$.map(Vm);
    },
    L1 = (e, t, n = !1) => {
        const o = e.$hostElement$,
            i = e.$cmpMeta$,
            r = e.$vnode$ || os(null, null),
            s = v1(t) ? t : H(null, null, t);
        if (
            ((qs = o.tagName),
            i.$attrsToReflect$ &&
                ((s.$attrs$ = s.$attrs$ || {}),
                i.$attrsToReflect$.map(([l, a]) => (s.$attrs$[a] = o[l]))),
            n && s.$attrs$)
        )
            for (const l of Object.keys(s.$attrs$))
                o.hasAttribute(l) &&
                    !['key', 'ref', 'style', 'class'].includes(l) &&
                    (s.$attrs$[l] = o[l]);
        (s.$tag$ = null),
            (s.$flags$ |= 4),
            (e.$vnode$ = s),
            (s.$elm$ = r.$elm$ = o.shadowRoot || o),
            (Xn = o['s-sc']),
            (zm = o['s-cr']),
            (Mm = (i.$flags$ & 1) !== 0),
            (ns = !1),
            qn(r, s);
        {
            if (((Se.$flags$ |= 1), su)) {
                Um(s.$elm$);
                let l,
                    a,
                    c,
                    u,
                    d,
                    f,
                    m = 0;
                for (; m < wt.length; m++)
                    (l = wt[m]),
                        (a = l.$nodeToRelocate$),
                        a['s-ol'] ||
                            ((c = Et.createTextNode('')),
                            (c['s-nr'] = a),
                            a.parentNode.insertBefore((a['s-ol'] = c), a));
                for (m = 0; m < wt.length; m++)
                    if (((l = wt[m]), (a = l.$nodeToRelocate$), l.$slotRefNode$)) {
                        for (
                            u = l.$slotRefNode$.parentNode,
                                d = l.$slotRefNode$.nextSibling,
                                c = a['s-ol'];
                            (c = c.previousSibling);

                        )
                            if (
                                ((f = c['s-nr']),
                                f &&
                                    f['s-sn'] === a['s-sn'] &&
                                    u === f.parentNode &&
                                    ((f = f.nextSibling), !f || !f['s-nr']))
                            ) {
                                d = f;
                                break;
                            }
                        ((!d && u !== a.parentNode) || a.nextSibling !== d) &&
                            a !== d &&
                            (!a['s-hn'] &&
                                a['s-ol'] &&
                                (a['s-hn'] = a['s-ol'].parentNode.nodeName),
                            u.insertBefore(a, d));
                    } else a.nodeType === 1 && (a.hidden = !0);
            }
            ns && Fm(s.$elm$), (Se.$flags$ &= -2), (wt.length = 0);
        }
    },
    I1 = (e, t) => {},
    cu = (e, t) => (
        (e.$flags$ |= 16), I1(e, e.$ancestorComponent$), yn(() => O1(e, t))
    ),
    O1 = (e, t) => {
        const n = e.$hostElement$,
            o = Nn('scheduleUpdate', e.$cmpMeta$.$tagName$),
            i = n;
        let r;
        return (
            t
                ? (r = wo(i, 'componentWillLoad'))
                : (r = wo(i, 'componentWillUpdate')),
            (r = vf(r, () => wo(i, 'componentWillRender'))),
            o(),
            vf(r, () => z1(e, i, t))
        );
    },
    vf = (e, t) => (A1(e) ? e.then(t) : t()),
    A1 = (e) => e instanceof Promise || (e && e.then && typeof e.then == 'function'),
    z1 = async (e, t, n) => {
        const o = e.$hostElement$,
            i = Nn('update', e.$cmpMeta$.$tagName$);
        o['s-rc'], n && P1(e);
        const r = Nn('render', e.$cmpMeta$.$tagName$);
        M1(e, t, o, n), r(), i(), N1(e);
    },
    M1 = (e, t, n, o) => {
        try {
            (cf = t),
                (t = t.render && t.render()),
                (e.$flags$ &= -17),
                (e.$flags$ |= 2),
                (Yn.hasRenderFn || Yn.reflect) &&
                    (Yn.vdomRender || Yn.reflect) &&
                    (Yn.hydrateServerSide || L1(e, t, o));
        } catch (a) {
            Hi(a, e.$hostElement$);
        }
        return (cf = null), null;
    },
    N1 = (e) => {
        const t = e.$cmpMeta$.$tagName$,
            n = e.$hostElement$,
            o = Nn('postUpdate', t),
            i = n;
        e.$ancestorComponent$,
            wo(i, 'componentDidRender'),
            e.$flags$ & 64
                ? (wo(i, 'componentDidUpdate'), o())
                : ((e.$flags$ |= 64), wo(i, 'componentDidLoad'), o());
    },
    Ba = (e) => {
        {
            const t = Un(e),
                n = t.$hostElement$.isConnected;
            return n && (t.$flags$ & 18) === 2 && cu(t, !1), n;
        }
    },
    wo = (e, t, n) => {
        if (e && e[t])
            try {
                return e[t](n);
            } catch (o) {
                Hi(o);
            }
    },
    D1 = (e, t) => Un(e).$instanceValues$.get(t),
    B1 = (e, t, n, o) => {
        const i = Un(e),
            r = e,
            s = i.$instanceValues$.get(t),
            l = i.$flags$,
            a = r;
        n = k1(n, o.$members$[t][0]);
        const c = Number.isNaN(s) && Number.isNaN(n);
        if (n !== s && !c) {
            i.$instanceValues$.set(t, n);
            {
                if (o.$watchers$ && l & 128) {
                    const d = o.$watchers$[t];
                    d &&
                        d.map((f) => {
                            try {
                                a[f](n, s, t);
                            } catch (m) {
                                Hi(m, r);
                            }
                        });
                }
                if ((l & 18) === 2) {
                    if (
                        a.componentShouldUpdate &&
                        a.componentShouldUpdate(n, s, t) === !1
                    )
                        return;
                    cu(i, !1);
                }
            }
        }
    },
    j1 = (e, t, n) => {
        var o;
        if (t.$members$) {
            e.watchers && (t.$watchers$ = e.watchers);
            const i = Object.entries(t.$members$),
                r = e.prototype;
            i.map(([s, [l]]) => {
                (l & 31 || l & 32) &&
                    Object.defineProperty(r, s, {
                        get() {
                            return D1(this, s);
                        },
                        set(a) {
                            B1(this, s, a, t);
                        },
                        configurable: !0,
                        enumerable: !0,
                    });
            });
            {
                const s = new Map();
                (r.attributeChangedCallback = function (l, a, c) {
                    Se.jmp(() => {
                        const u = s.get(l);
                        if (this.hasOwnProperty(u)) (c = this[u]), delete this[u];
                        else {
                            if (
                                r.hasOwnProperty(u) &&
                                typeof this[u] == 'number' &&
                                this[u] == c
                            )
                                return;
                            if (u == null) {
                                const d = Un(this),
                                    f = d == null ? void 0 : d.$flags$;
                                if (!(f & 8) && f & 128 && c !== a) {
                                    const y = this,
                                        w = t.$watchers$[l];
                                    w == null ||
                                        w.forEach((O) => {
                                            y[O] != null && y[O].call(y, c, a, l);
                                        });
                                }
                                return;
                            }
                        }
                        this[u] = c === null && typeof this[u] == 'boolean' ? !1 : c;
                    });
                }),
                    (e.observedAttributes = Array.from(
                        new Set([
                            ...Object.keys(
                                (o = t.$watchers$) !== null && o !== void 0 ? o : {}
                            ),
                            ...i
                                .filter(([l, a]) => a[0] & 15)
                                .map(([l, a]) => {
                                    const c = a[1] || l;
                                    return (
                                        s.set(c, l),
                                        a[0] & 512 &&
                                            t.$attrsToReflect$.push([l, c]),
                                        c
                                    );
                                }),
                        ])
                    ));
            }
        }
        return e;
    },
    H1 = async (e, t, n, o, i) => {
        if (
            !(t.$flags$ & 32) &&
            ((t.$flags$ |= 32),
            (i = e.constructor),
            customElements.whenDefined(n.$tagName$).then(() => (t.$flags$ |= 128)),
            i.style)
        ) {
            let s = i.style;
            typeof s != 'string' && (s = s[(t.$modeName$ = w1(e))]);
            const l = Nm(n, t.$modeName$);
            if (!rs.has(l)) {
                const a = Nn('registerStyles', n.$tagName$);
                C1(l, s, !!(n.$flags$ & 1)), a();
            }
        }
        t.$ancestorComponent$, (() => cu(t, !0))();
    },
    yf = (e) => {},
    F1 = (e) => {
        if (!(Se.$flags$ & 1)) {
            const t = Un(e),
                n = t.$cmpMeta$,
                o = Nn('connectedCallback', n.$tagName$);
            t.$flags$ & 1
                ? (Wm(e, t, n.$listeners$),
                  t != null && t.$lazyInstance$
                      ? yf(t.$lazyInstance$)
                      : t != null &&
                        t.$onReadyPromise$ &&
                        t.$onReadyPromise$.then(() => yf(t.$lazyInstance$)))
                : ((t.$flags$ |= 1),
                  n.$flags$ & 12 && U1(e),
                  n.$members$ &&
                      Object.entries(n.$members$).map(([i, [r]]) => {
                          if (r & 31 && e.hasOwnProperty(i)) {
                              const s = e[i];
                              delete e[i], (e[i] = s);
                          }
                      }),
                  H1(e, t, n)),
                o();
        }
    },
    U1 = (e) => {
        const t = (e['s-cr'] = Et.createComment(''));
        (t['s-cn'] = !0), e.insertBefore(t, e.firstChild);
    },
    V1 = async (e) => {
        if (!(Se.$flags$ & 1)) {
            const t = Un(e);
            t.$rmListeners$ &&
                (t.$rmListeners$.map((n) => n()), (t.$rmListeners$ = void 0));
        }
    },
    Tt = (e, t) => {
        const n = { $flags$: t[0], $tagName$: t[1] };
        (n.$members$ = t[2]),
            (n.$listeners$ = t[3]),
            (n.$watchers$ = e.$watchers$),
            (n.$attrsToReflect$ = []);
        const o = e.prototype.connectedCallback,
            i = e.prototype.disconnectedCallback;
        return (
            Object.assign(e.prototype, {
                __registerHost() {
                    Y1(this, n);
                },
                connectedCallback() {
                    F1(this), o && o.call(this);
                },
                disconnectedCallback() {
                    V1(this), i && i.call(this);
                },
                __attachShadow() {
                    this.attachShadow({
                        mode: 'open',
                        delegatesFocus: !!(n.$flags$ & 16),
                    });
                },
            }),
            (e.is = n.$tagName$),
            j1(e, n)
        );
    },
    Wm = (e, t, n, o) => {
        n &&
            n.map(([i, r, s]) => {
                const l = K1(e, i),
                    a = W1(t, s),
                    c = Q1(i);
                Se.ael(l, r, a, c),
                    (t.$rmListeners$ = t.$rmListeners$ || []).push(() =>
                        Se.rel(l, r, a, c)
                    );
            });
    },
    W1 = (e, t) => (n) => {
        try {
            Yn.lazyLoad || e.$hostElement$[t](n);
        } catch (o) {
            Hi(o);
        }
    },
    K1 = (e, t) => (t & 4 ? Et : t & 8 ? Gs : t & 16 ? Et.body : e),
    Q1 = (e) =>
        q1 ? { passive: (e & 1) !== 0, capture: (e & 2) !== 0 } : (e & 2) !== 0,
    Km = new WeakMap(),
    Un = (e) => Km.get(e),
    Y1 = (e, t) => {
        const n = {
            $flags$: 0,
            $hostElement$: e,
            $cmpMeta$: t,
            $instanceValues$: new Map(),
        };
        return Wm(e, n, t.$listeners$), Km.set(e, n);
    },
    bf = (e, t) => t in e,
    Hi = (e, t) => (0, console.error)(e, t),
    rs = new Map(),
    Qm = [],
    Gs = typeof window < 'u' ? window : {},
    Et = Gs.document || { head: {} },
    Pt = Gs.HTMLElement || class {},
    Se = {
        $flags$: 0,
        $resourcesUrl$: '',
        jmp: (e) => e(),
        raf: (e) => requestAnimationFrame(e),
        ael: (e, t, n, o) => e.addEventListener(t, n, o),
        rel: (e, t, n, o) => e.removeEventListener(t, n, o),
        ce: (e, t) => new CustomEvent(e, t),
    },
    X1 = (e) => {
        Object.assign(Se, e);
    },
    q1 = (() => {
        let e = !1;
        try {
            Et.addEventListener(
                'e',
                null,
                Object.defineProperty({}, 'passive', {
                    get() {
                        e = !0;
                    },
                })
            );
        } catch (t) {}
        return e;
    })(),
    G1 = (e) => Promise.resolve(e),
    Z1 = (() => {
        try {
            return (
                new CSSStyleSheet(),
                typeof new CSSStyleSheet().replaceSync == 'function'
            );
        } catch (e) {}
        return !1;
    })(),
    ja = [],
    Ym = [],
    Xm = (e, t) => (n) => {
        e.push(n), Da || ((Da = !0), t && Se.$flags$ & 4 ? J1(Ha) : Se.raf(Ha));
    },
    wf = (e) => {
        for (let t = 0; t < e.length; t++)
            try {
                e[t](performance.now());
            } catch (n) {
                Hi(n);
            }
        e.length = 0;
    },
    Ha = () => {
        wf(ja), wf(Ym), (Da = ja.length > 0) && Se.raf(Ha);
    },
    J1 = (e) => G1().then(e),
    Li = Xm(ja, !1),
    yn = Xm(Ym, !0);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const Re = typeof window < 'u' ? window : void 0,
    Ml = typeof document < 'u' ? document : void 0;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const Ii = (e, t) => {
        e.componentOnReady ? e.componentOnReady().then((n) => t(n)) : Bt(() => t(e));
    },
    ew = (e) => e.componentOnReady !== void 0,
    qm = (e, t = []) => {
        const n = {};
        return (
            t.forEach((o) => {
                e.hasAttribute(o) &&
                    (e.getAttribute(o) !== null && (n[o] = e.getAttribute(o)),
                    e.removeAttribute(o));
            }),
            n
        );
    },
    tw = [
        'role',
        'aria-activedescendant',
        'aria-atomic',
        'aria-autocomplete',
        'aria-braillelabel',
        'aria-brailleroledescription',
        'aria-busy',
        'aria-checked',
        'aria-colcount',
        'aria-colindex',
        'aria-colindextext',
        'aria-colspan',
        'aria-controls',
        'aria-current',
        'aria-describedby',
        'aria-description',
        'aria-details',
        'aria-disabled',
        'aria-errormessage',
        'aria-expanded',
        'aria-flowto',
        'aria-haspopup',
        'aria-hidden',
        'aria-invalid',
        'aria-keyshortcuts',
        'aria-label',
        'aria-labelledby',
        'aria-level',
        'aria-live',
        'aria-multiline',
        'aria-multiselectable',
        'aria-orientation',
        'aria-owns',
        'aria-placeholder',
        'aria-posinset',
        'aria-pressed',
        'aria-readonly',
        'aria-relevant',
        'aria-required',
        'aria-roledescription',
        'aria-rowcount',
        'aria-rowindex',
        'aria-rowindextext',
        'aria-rowspan',
        'aria-selected',
        'aria-setsize',
        'aria-sort',
        'aria-valuemax',
        'aria-valuemin',
        'aria-valuenow',
        'aria-valuetext',
    ],
    nw = (e, t) => {
        let n = tw;
        return t && t.length > 0 && (n = n.filter((o) => !t.includes(o))), qm(e, n);
    },
    uE = (e, t, n, o) => {
        var i;
        if (typeof window < 'u') {
            const r = window,
                s =
                    (i = r == null ? void 0 : r.Ionic) === null || i === void 0
                        ? void 0
                        : i.config;
            if (s) {
                const l = s.get('_ael');
                if (l) return l(e, t, n, o);
                if (s._ael) return s._ael(e, t, n, o);
            }
        }
        return e.addEventListener(t, n, o);
    },
    dE = (e, t, n, o) => {
        var i;
        if (typeof window < 'u') {
            const r = window,
                s =
                    (i = r == null ? void 0 : r.Ionic) === null || i === void 0
                        ? void 0
                        : i.config;
            if (s) {
                const l = s.get('_rel');
                if (l) return l(e, t, n, o);
                if (s._rel) return s._rel(e, t, n, o);
            }
        }
        return e.removeEventListener(t, n, o);
    },
    Bt = (e) =>
        typeof __zone_symbol__requestAnimationFrame == 'function'
            ? __zone_symbol__requestAnimationFrame(e)
            : typeof requestAnimationFrame == 'function'
            ? requestAnimationFrame(e)
            : setTimeout(e),
    Gm = (e, t, n) => Math.max(e, Math.min(t, n)),
    De = (e, t) => {
        if (!e) {
            const n = 'ASSERT: ' + t;
            console.error(n);
            debugger;
            throw new Error(n);
        }
    },
    fE = (e) => e.timeStamp || Date.now(),
    hE = (e) => {
        if (e) {
            const t = e.changedTouches;
            if (t && t.length > 0) {
                const n = t[0];
                return { x: n.clientX, y: n.clientY };
            }
            if (e.pageX !== void 0) return { x: e.pageX, y: e.pageY };
        }
        return { x: 0, y: 0 };
    },
    Zm = (e, t) => {
        if ((e != null || (e = {}), t != null || (t = {}), e === t)) return !0;
        const n = Object.keys(e);
        if (n.length !== Object.keys(t).length) return !1;
        for (const o of n) if (!(o in t) || e[o] !== t[o]) return !1;
        return !0;
    };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ let Nl;
const ow = (e) => (
        e.forEach((t) => {
            for (const n in t)
                if (t.hasOwnProperty(n)) {
                    const o = t[n];
                    if (n === 'easing') {
                        const i = 'animation-timing-function';
                        (t[i] = o), delete t[n];
                    } else {
                        const i = iw(n);
                        i !== n && ((t[i] = o), delete t[n]);
                    }
                }
        }),
        e
    ),
    iw = (e) => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
    uu = (e) => {
        if (Nl === void 0) {
            const t = e.style.animationName !== void 0,
                n = e.style.webkitAnimationName !== void 0;
            Nl = !t && n ? '-webkit-' : '';
        }
        return Nl;
    },
    J = (e, t, n) => {
        const o = t.startsWith('animation') ? uu(e) : '';
        e.style.setProperty(o + t, n);
    },
    gt = (e, t) => {
        const n = t.startsWith('animation') ? uu(e) : '';
        e.style.removeProperty(n + t);
    },
    rw = (e, t) => {
        let n;
        const o = { passive: !0 },
            i = () => {
                n && n();
            },
            r = (s) => {
                e === s.target && (i(), t(s));
            };
        return (
            e &&
                (e.addEventListener('webkitAnimationEnd', r, o),
                e.addEventListener('animationend', r, o),
                (n = () => {
                    e.removeEventListener('webkitAnimationEnd', r, o),
                        e.removeEventListener('animationend', r, o);
                })),
            i
        );
    },
    sw = (e = []) =>
        e
            .map((t) => {
                const n = t.offset,
                    o = [];
                for (const i in t)
                    t.hasOwnProperty(i) &&
                        i !== 'offset' &&
                        o.push(''.concat(i, ': ').concat(t[i], ';'));
                return ''.concat(n * 100, '% { ').concat(o.join(' '), ' }');
            })
            .join(' '),
    xf = [],
    lw = (e) => {
        let t = xf.indexOf(e);
        return t < 0 && (t = xf.push(e) - 1), 'ion-animation-'.concat(t);
    },
    aw = (e) => {
        const t = e.getRootNode !== void 0 ? e.getRootNode() : e;
        return t.head || t;
    },
    cw = (e, t, n) => {
        var o;
        const i = aw(n),
            r = uu(n),
            s = i.querySelector('#' + e);
        if (s) return s;
        const l = (
            (o = n.ownerDocument) !== null && o !== void 0 ? o : document
        ).createElement('style');
        return (
            (l.id = e),
            (l.textContent = '@'
                .concat(r, 'keyframes ')
                .concat(e, ' { ')
                .concat(t, ' } @')
                .concat(r, 'keyframes ')
                .concat(e, '-alt { ')
                .concat(t, ' }')),
            i.appendChild(l),
            l
        );
    },
    hr = (e = [], t) => {
        if (t !== void 0) {
            const n = Array.isArray(t) ? t : [t];
            return [...e, ...n];
        }
        return e;
    },
    uw = (e) => {
        let t,
            n,
            o,
            i,
            r,
            s,
            l = [],
            a = [],
            c = [],
            u = !1,
            d,
            f = {},
            m = [],
            y = [],
            w = {},
            O = 0,
            p = !1,
            h = !1,
            g,
            x,
            T,
            P,
            $ = !0,
            C = !1,
            B = !0,
            N,
            L,
            ue = !1;
        const Ce = e,
            de = [],
            ie = [],
            Q = [],
            se = [],
            R = [],
            S = [],
            k = [],
            z = [],
            A = [],
            j = [],
            X =
                typeof AnimationEffect == 'function' ||
                (Re !== void 0 && typeof Re.AnimationEffect == 'function'),
            V =
                typeof Element == 'function' &&
                typeof Element.prototype.animate == 'function' &&
                X,
            le = 100,
            fe = () => j,
            Nt = (v) => (
                se.forEach((_) => {
                    _.destroy(v);
                }),
                Ki(v),
                (Q.length = 0),
                (se.length = 0),
                (l.length = 0),
                Ug(),
                (u = !1),
                (B = !0),
                L
            ),
            Ki = (v) => {
                Su(), v && Cu();
            },
            Hg = () => {
                (p = !1),
                    (h = !1),
                    (B = !0),
                    (x = void 0),
                    (T = void 0),
                    (P = void 0),
                    (O = 0),
                    (C = !1),
                    ($ = !0),
                    (ue = !1);
            },
            Fg = () => O !== 0 && !ue,
            Qi = (v, _) => (
                (_ != null && _.oneTimeCallback ? ie : de).push({ c: v, o: _ }), L
            ),
            Ug = () => ((de.length = 0), (ie.length = 0), L),
            Su = () => {
                if (V)
                    j.forEach((v) => {
                        v.cancel();
                    }),
                        (j.length = 0);
                else {
                    const v = Q.slice();
                    Bt(() => {
                        v.forEach((_) => {
                            gt(_, 'animation-name'),
                                gt(_, 'animation-duration'),
                                gt(_, 'animation-timing-function'),
                                gt(_, 'animation-iteration-count'),
                                gt(_, 'animation-delay'),
                                gt(_, 'animation-play-state'),
                                gt(_, 'animation-fill-mode'),
                                gt(_, 'animation-direction');
                        });
                    });
                }
            },
            Cu = () => {
                R.forEach((v) => {
                    v != null && v.parentNode && v.parentNode.removeChild(v);
                }),
                    (R.length = 0);
            },
            Vg = (v) => (S.push(v), L),
            Wg = (v) => (k.push(v), L),
            Kg = (v) => (z.push(v), L),
            Qg = (v) => (A.push(v), L),
            Yg = (v) => ((a = hr(a, v)), L),
            Xg = (v) => ((c = hr(c, v)), L),
            qg = (v = {}) => ((f = v), L),
            Gg = (v = []) => {
                for (const _ of v) f[_] = '';
                return L;
            },
            Zg = (v) => ((m = hr(m, v)), L),
            Jg = (v) => ((y = hr(y, v)), L),
            ev = (v = {}) => ((w = v), L),
            tv = (v = []) => {
                for (const _ of v) w[_] = '';
                return L;
            },
            Do = () => (r !== void 0 ? r : d ? d.getFill() : 'both'),
            Vn = () =>
                x !== void 0
                    ? x
                    : s !== void 0
                    ? s
                    : d
                    ? d.getDirection()
                    : 'normal',
            Bo = () =>
                p ? 'linear' : o !== void 0 ? o : d ? d.getEasing() : 'linear',
            pt = () =>
                h
                    ? 0
                    : T !== void 0
                    ? T
                    : n !== void 0
                    ? n
                    : d
                    ? d.getDuration()
                    : 0,
            Gt = () => (i !== void 0 ? i : d ? d.getIterations() : 1),
            Wn = () => (P !== void 0 ? P : t !== void 0 ? t : d ? d.getDelay() : 0),
            nv = () => l,
            ov = (v) => ((s = v), it(!0), L),
            iv = (v) => ((r = v), it(!0), L),
            rv = (v) => ((t = v), it(!0), L),
            sv = (v) => ((o = v), it(!0), L),
            lv = (v) => (!V && v === 0 && (v = 1), (n = v), it(!0), L),
            av = (v) => ((i = v), it(!0), L),
            cv = (v) => ((d = v), L),
            uv = (v) => {
                if (v != null)
                    if (v.nodeType === 1) Q.push(v);
                    else if (v.length >= 0)
                        for (let _ = 0; _ < v.length; _++) Q.push(v[_]);
                    else console.error('Invalid addElement value');
                return L;
            },
            dv = (v) => {
                if (v != null)
                    if (Array.isArray(v)) for (const _ of v) _.parent(L), se.push(_);
                    else v.parent(L), se.push(v);
                return L;
            },
            fv = (v) => {
                const _ = l !== v;
                return (l = v), _ && hv(l), L;
            },
            hv = (v) => {
                V
                    ? fe().forEach((_) => {
                          if (_.effect.setKeyframes) _.effect.setKeyframes(v);
                          else {
                              const M = new KeyframeEffect(
                                  _.effect.target,
                                  v,
                                  _.effect.getTiming()
                              );
                              _.effect = M;
                          }
                      })
                    : Tu();
            },
            pv = () => {
                S.forEach((pe) => pe()), k.forEach((pe) => pe());
                const v = a,
                    _ = c,
                    M = f;
                Q.forEach((pe) => {
                    const xe = pe.classList;
                    v.forEach((rt) => xe.add(rt)), _.forEach((rt) => xe.remove(rt));
                    for (const rt in M) M.hasOwnProperty(rt) && J(pe, rt, M[rt]);
                });
            },
            mv = () => {
                ol(), z.forEach((xe) => xe()), A.forEach((xe) => xe());
                const v = $ ? 1 : 0,
                    _ = m,
                    M = y,
                    pe = w;
                Q.forEach((xe) => {
                    const rt = xe.classList;
                    _.forEach(($n) => rt.add($n)), M.forEach(($n) => rt.remove($n));
                    for (const $n in pe) pe.hasOwnProperty($n) && J(xe, $n, pe[$n]);
                }),
                    de.forEach((xe) => xe.c(v, L)),
                    ie.forEach((xe) => xe.c(v, L)),
                    (ie.length = 0),
                    (B = !0),
                    $ && (C = !0),
                    ($ = !0);
            },
            Kn = () => {
                O !== 0 && (O--, O === 0 && (mv(), d && d.animationFinish()));
            },
            Tu = (v = !0) => {
                Cu();
                const _ = ow(l);
                Q.forEach((M) => {
                    if (_.length > 0) {
                        const pe = sw(_);
                        N = e !== void 0 ? e : lw(pe);
                        const xe = cw(N, pe, M);
                        R.push(xe),
                            J(M, 'animation-duration', ''.concat(pt(), 'ms')),
                            J(M, 'animation-timing-function', Bo()),
                            J(M, 'animation-delay', ''.concat(Wn(), 'ms')),
                            J(M, 'animation-fill-mode', Do()),
                            J(M, 'animation-direction', Vn());
                        const rt = Gt() === 1 / 0 ? 'infinite' : Gt().toString();
                        J(M, 'animation-iteration-count', rt),
                            J(M, 'animation-play-state', 'paused'),
                            v && J(M, 'animation-name', ''.concat(xe.id, '-alt')),
                            Bt(() => {
                                J(M, 'animation-name', xe.id || null);
                            });
                    }
                });
            },
            gv = () => {
                Q.forEach((v) => {
                    const _ = v.animate(l, {
                        id: Ce,
                        delay: Wn(),
                        duration: pt(),
                        easing: Bo(),
                        iterations: Gt(),
                        fill: Do(),
                        direction: Vn(),
                    });
                    _.pause(), j.push(_);
                }),
                    j.length > 0 &&
                        (j[0].onfinish = () => {
                            Kn();
                        });
            },
            Pu = (v = !0) => {
                pv(), l.length > 0 && (V ? gv() : Tu(v)), (u = !0);
            },
            jo = (v) => {
                if (((v = Math.min(Math.max(v, 0), 0.9999)), V))
                    j.forEach((_) => {
                        (_.currentTime =
                            _.effect.getComputedTiming().delay + pt() * v),
                            _.pause();
                    });
                else {
                    const _ = '-'.concat(pt() * v, 'ms');
                    Q.forEach((M) => {
                        l.length > 0 &&
                            (J(M, 'animation-delay', _),
                            J(M, 'animation-play-state', 'paused'));
                    });
                }
            },
            Ru = (v) => {
                j.forEach((_) => {
                    _.effect.updateTiming({
                        delay: Wn(),
                        duration: pt(),
                        easing: Bo(),
                        iterations: Gt(),
                        fill: Do(),
                        direction: Vn(),
                    });
                }),
                    v !== void 0 && jo(v);
            },
            _u = (v = !0, _) => {
                Bt(() => {
                    Q.forEach((M) => {
                        J(M, 'animation-name', N || null),
                            J(M, 'animation-duration', ''.concat(pt(), 'ms')),
                            J(M, 'animation-timing-function', Bo()),
                            J(
                                M,
                                'animation-delay',
                                _ !== void 0
                                    ? '-'.concat(_ * pt(), 'ms')
                                    : ''.concat(Wn(), 'ms')
                            ),
                            J(M, 'animation-fill-mode', Do() || null),
                            J(M, 'animation-direction', Vn() || null);
                        const pe = Gt() === 1 / 0 ? 'infinite' : Gt().toString();
                        J(M, 'animation-iteration-count', pe),
                            v && J(M, 'animation-name', ''.concat(N, '-alt')),
                            Bt(() => {
                                J(M, 'animation-name', N || null);
                            });
                    });
                });
            },
            it = (v = !1, _ = !0, M) => (
                v &&
                    se.forEach((pe) => {
                        pe.update(v, _, M);
                    }),
                V ? Ru(M) : _u(_, M),
                L
            ),
            vv = (v = !1, _) => (
                se.forEach((M) => {
                    M.progressStart(v, _);
                }),
                Lu(),
                (p = v),
                u || Pu(),
                it(!1, !0, _),
                L
            ),
            yv = (v) => (
                se.forEach((_) => {
                    _.progressStep(v);
                }),
                jo(v),
                L
            ),
            bv = (v, _, M) => (
                (p = !1),
                se.forEach((pe) => {
                    pe.progressEnd(v, _, M);
                }),
                M !== void 0 && (T = M),
                (C = !1),
                ($ = !0),
                v === 0
                    ? ((x = Vn() === 'reverse' ? 'normal' : 'reverse'),
                      x === 'reverse' && ($ = !1),
                      V
                          ? (it(), jo(1 - _))
                          : ((P = (1 - _) * pt() * -1), it(!1, !1)))
                    : v === 1 &&
                      (V ? (it(), jo(_)) : ((P = _ * pt() * -1), it(!1, !1))),
                v !== void 0 &&
                    (Qi(
                        () => {
                            (T = void 0), (x = void 0), (P = void 0);
                        },
                        { oneTimeCallback: !0 }
                    ),
                    d || Iu()),
                L
            ),
            Lu = () => {
                u &&
                    (V
                        ? j.forEach((v) => {
                              v.pause();
                          })
                        : Q.forEach((v) => {
                              J(v, 'animation-play-state', 'paused');
                          }),
                    (ue = !0));
            },
            wv = () => (
                se.forEach((v) => {
                    v.pause();
                }),
                Lu(),
                L
            ),
            xv = () => {
                (g = void 0), Kn();
            },
            ol = () => {
                g && clearTimeout(g);
            },
            $v = () => {
                if (
                    (ol(),
                    Bt(() => {
                        Q.forEach((v) => {
                            l.length > 0 && J(v, 'animation-play-state', 'running');
                        });
                    }),
                    l.length === 0 || Q.length === 0)
                )
                    Kn();
                else {
                    const v = Wn() || 0,
                        _ = pt() || 0,
                        M = Gt() || 1;
                    isFinite(M) && (g = setTimeout(xv, v + _ * M + le)),
                        rw(Q[0], () => {
                            ol(),
                                Bt(() => {
                                    kv(), Bt(Kn);
                                });
                        });
                }
            },
            kv = () => {
                Q.forEach((v) => {
                    gt(v, 'animation-duration'),
                        gt(v, 'animation-delay'),
                        gt(v, 'animation-play-state');
                });
            },
            Ev = () => {
                j.forEach((v) => {
                    v.play();
                }),
                    (l.length === 0 || Q.length === 0) && Kn();
            },
            Sv = () => {
                V ? (jo(0), Ru()) : _u();
            },
            Iu = (v) =>
                new Promise((_) => {
                    v != null &&
                        v.sync &&
                        ((h = !0), Qi(() => (h = !1), { oneTimeCallback: !0 })),
                        u || Pu(),
                        C && (Sv(), (C = !1)),
                        B && ((O = se.length + 1), (B = !1)),
                        Qi(() => _(), { oneTimeCallback: !0 }),
                        se.forEach((M) => {
                            M.play();
                        }),
                        V ? Ev() : $v(),
                        (ue = !1);
                }),
            Cv = () => {
                se.forEach((v) => {
                    v.stop();
                }),
                    u && (Su(), (u = !1)),
                    Hg();
            },
            Ou = (v, _) => {
                const M = l[0];
                return (
                    M !== void 0 && (M.offset === void 0 || M.offset === 0)
                        ? (M[v] = _)
                        : (l = [{ offset: 0, [v]: _ }, ...l]),
                    L
                );
            };
        return (L = {
            parentAnimation: d,
            elements: Q,
            childAnimations: se,
            id: Ce,
            animationFinish: Kn,
            from: Ou,
            to: (v, _) => {
                const M = l[l.length - 1];
                return (
                    M !== void 0 && (M.offset === void 0 || M.offset === 1)
                        ? (M[v] = _)
                        : (l = [...l, { offset: 1, [v]: _ }]),
                    L
                );
            },
            fromTo: (v, _, M) => Ou(v, _).to(v, M),
            parent: cv,
            play: Iu,
            pause: wv,
            stop: Cv,
            destroy: Nt,
            keyframes: fv,
            addAnimation: dv,
            addElement: uv,
            update: it,
            fill: iv,
            direction: ov,
            iterations: av,
            duration: lv,
            easing: sv,
            delay: rv,
            getWebAnimations: fe,
            getKeyframes: nv,
            getFill: Do,
            getDirection: Vn,
            getDelay: Wn,
            getIterations: Gt,
            getEasing: Bo,
            getDuration: pt,
            afterAddRead: Kg,
            afterAddWrite: Qg,
            afterClearStyles: tv,
            afterStyles: ev,
            afterRemoveClass: Jg,
            afterAddClass: Zg,
            beforeAddRead: Vg,
            beforeAddWrite: Wg,
            beforeClearStyles: Gg,
            beforeStyles: qg,
            beforeRemoveClass: Xg,
            beforeAddClass: Yg,
            onFinish: Qi,
            isRunning: Fg,
            progressStart: vv,
            progressStep: yv,
            progressEnd: bv,
        });
    },
    dw = 'ionViewWillEnter',
    fw = 'ionViewDidEnter',
    Jm = 'ionViewWillLeave',
    eg = 'ionViewDidLeave',
    Dl = 'ionViewWillUnload',
    hw = () => It(() => import('./ios.transition-fc1630ca.js'), []),
    pw = () => It(() => import('./md.transition-17d95730.js'), []),
    tg = (e) =>
        new Promise((t, n) => {
            yn(() => {
                mw(e),
                    gw(e).then(
                        (o) => {
                            o.animation && o.animation.destroy(), $f(e), t(o);
                        },
                        (o) => {
                            $f(e), n(o);
                        }
                    );
            });
        }),
    mw = (e) => {
        const t = e.enteringEl,
            n = e.leavingEl;
        $w(t, n, e.direction),
            e.showGoBack
                ? t.classList.add('can-go-back')
                : t.classList.remove('can-go-back'),
            Ua(t, !1),
            t.style.setProperty('pointer-events', 'none'),
            n && (Ua(n, !1), n.style.setProperty('pointer-events', 'none'));
    },
    gw = async (e) => {
        const t = await vw(e);
        return t && f1.isBrowser ? yw(t, e) : bw(e);
    },
    $f = (e) => {
        const t = e.enteringEl,
            n = e.leavingEl;
        t.classList.remove('ion-page-invisible'),
            t.style.removeProperty('pointer-events'),
            n !== void 0 &&
                (n.classList.remove('ion-page-invisible'),
                n.style.removeProperty('pointer-events'));
    },
    vw = async (e) =>
        !e.leavingEl || !e.animated || e.duration === 0
            ? void 0
            : e.animationBuilder
            ? e.animationBuilder
            : e.mode === 'ios'
            ? (await hw()).iosTransitionAnimation
            : (await pw()).mdTransitionAnimation,
    yw = async (e, t) => {
        await ng(t, !0);
        const n = e(t.baseEl, t);
        og(t.enteringEl, t.leavingEl);
        const o = await xw(n, t);
        return (
            t.progressCallback && t.progressCallback(void 0),
            o && ig(t.enteringEl, t.leavingEl),
            { hasCompleted: o, animation: n }
        );
    },
    bw = async (e) => {
        const t = e.enteringEl,
            n = e.leavingEl;
        return await ng(e, !1), og(t, n), ig(t, n), { hasCompleted: !0 };
    },
    ng = async (e, t) => {
        (e.deepWait !== void 0 ? e.deepWait : t) &&
            (await Promise.all([Fa(e.enteringEl), Fa(e.leavingEl)])),
            await ww(e.viewIsReady, e.enteringEl);
    },
    ww = async (e, t) => {
        e && (await e(t));
    },
    xw = (e, t) => {
        const n = t.progressCallback,
            o = new Promise((i) => {
                e.onFinish((r) => i(r === 1));
            });
        return n ? (e.progressStart(!0), n(e)) : e.play(), o;
    },
    og = (e, t) => {
        Ht(t, Jm), Ht(e, dw);
    },
    ig = (e, t) => {
        Ht(e, fw), Ht(t, eg);
    },
    Ht = (e, t) => {
        if (e) {
            const n = new CustomEvent(t, { bubbles: !1, cancelable: !1 });
            e.dispatchEvent(n);
        }
    },
    Fa = async (e) => {
        const t = e;
        if (t) {
            if (t.componentOnReady != null) {
                if ((await t.componentOnReady()) != null) return;
            } else if (t.__registerHost != null) {
                await new Promise((o) => Bt(o));
                return;
            }
            await Promise.all(Array.from(t.children).map(Fa));
        }
    },
    Ua = (e, t) => {
        t
            ? (e.setAttribute('aria-hidden', 'true'),
              e.classList.add('ion-page-hidden'))
            : ((e.hidden = !1),
              e.removeAttribute('aria-hidden'),
              e.classList.remove('ion-page-hidden'));
    },
    $w = (e, t, n) => {
        e !== void 0 && (e.style.zIndex = n === 'back' ? '99' : '101'),
            t !== void 0 && (t.style.zIndex = '100');
    },
    pE = (e) => {
        if (e.classList.contains('ion-page')) return e;
        const t = e.querySelector(
            ':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'
        );
        return t || e;
    };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const ss = (e, t, n, o, i) =>
        Ew(e[1], t[1], n[1], o[1], i).map((r) => kw(e[0], t[0], n[0], o[0], r)),
    kw = (e, t, n, o, i) => {
        const r = 3 * t * Math.pow(i - 1, 2),
            s = -3 * n * i + 3 * n + o * i,
            l = e * Math.pow(i - 1, 3);
        return i * (r + i * s) - l;
    },
    Ew = (e, t, n, o, i) => (
        (e -= i),
        (t -= i),
        (n -= i),
        (o -= i),
        Cw(o - 3 * n + 3 * t - e, 3 * n - 6 * t + 3 * e, 3 * t - 3 * e, e).filter(
            (s) => s >= 0 && s <= 1
        )
    ),
    Sw = (e, t, n) => {
        const o = t * t - 4 * e * n;
        return o < 0
            ? []
            : [(-t + Math.sqrt(o)) / (2 * e), (-t - Math.sqrt(o)) / (2 * e)];
    },
    Cw = (e, t, n, o) => {
        if (e === 0) return Sw(t, n, o);
        (t /= e), (n /= e), (o /= e);
        const i = (3 * n - t * t) / 3,
            r = (2 * t * t * t - 9 * t * n + 27 * o) / 27;
        if (i === 0) return [Math.pow(-r, 1 / 3)];
        if (r === 0) return [Math.sqrt(-i), -Math.sqrt(-i)];
        const s = Math.pow(r / 2, 2) + Math.pow(i / 3, 3);
        if (s === 0) return [Math.pow(r / 2, 1 / 2) - t / 3];
        if (s > 0)
            return [
                Math.pow(-(r / 2) + Math.sqrt(s), 1 / 3) -
                    Math.pow(r / 2 + Math.sqrt(s), 1 / 3) -
                    t / 3,
            ];
        const l = Math.sqrt(Math.pow(-(i / 3), 3)),
            a = Math.acos(-(r / (2 * Math.sqrt(Math.pow(-(i / 3), 3))))),
            c = 2 * Math.pow(l, 1 / 3);
        return [
            c * Math.cos(a / 3) - t / 3,
            c * Math.cos((a + 2 * Math.PI) / 3) - t / 3,
            c * Math.cos((a + 4 * Math.PI) / 3) - t / 3,
        ];
    };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ class Tw {
    constructor() {
        this.m = new Map();
    }
    reset(t) {
        this.m = new Map(Object.entries(t));
    }
    get(t, n) {
        const o = this.m.get(t);
        return o !== void 0 ? o : n;
    }
    getBoolean(t, n = !1) {
        const o = this.m.get(t);
        return o === void 0 ? n : typeof o == 'string' ? o === 'true' : !!o;
    }
    getNumber(t, n) {
        const o = parseFloat(this.m.get(t));
        return isNaN(o) ? (n !== void 0 ? n : NaN) : o;
    }
    set(t, n) {
        this.m.set(t, n);
    }
}
const ae = new Tw(),
    Pw = (e) => {
        try {
            const t = e.sessionStorage.getItem(rg);
            return t !== null ? JSON.parse(t) : {};
        } catch (t) {
            return {};
        }
    },
    Rw = (e, t) => {
        try {
            e.sessionStorage.setItem(rg, JSON.stringify(t));
        } catch (n) {
            return;
        }
    },
    _w = (e) => {
        const t = {};
        return (
            e.location.search
                .slice(1)
                .split('&')
                .map((n) => n.split('='))
                .map(([n, o]) => [decodeURIComponent(n), decodeURIComponent(o)])
                .filter(([n]) => Lw(n, kf))
                .map(([n, o]) => [n.slice(kf.length), o])
                .forEach(([n, o]) => {
                    t[n] = o;
                }),
            t
        );
    },
    Lw = (e, t) => e.substr(0, t.length) === t,
    kf = 'ionic:',
    rg = 'ionic-persist-config',
    Iw = (e) => sg(e),
    sn = (e, t) => (
        typeof e == 'string' && ((t = e), (e = void 0)), Iw(e).includes(t)
    ),
    sg = (e = window) => {
        if (typeof e > 'u') return [];
        e.Ionic = e.Ionic || {};
        let t = e.Ionic.platforms;
        return (
            t == null &&
                ((t = e.Ionic.platforms = Ow(e)),
                t.forEach((n) =>
                    e.document.documentElement.classList.add('plt-'.concat(n))
                )),
            t
        );
    },
    Ow = (e) => {
        const t = ae.get('platform');
        return Object.keys(Ef).filter((n) => {
            const o = t == null ? void 0 : t[n];
            return typeof o == 'function' ? o(e) : Ef[n](e);
        });
    },
    Aw = (e) => Zs(e) && !ag(e),
    du = (e) => !!(Dn(e, /iPad/i) || (Dn(e, /Macintosh/i) && Zs(e))),
    zw = (e) => Dn(e, /iPhone/i),
    Mw = (e) => Dn(e, /iPhone|iPod/i) || du(e),
    lg = (e) => Dn(e, /android|sink/i),
    Nw = (e) => lg(e) && !Dn(e, /mobile/i),
    Dw = (e) => {
        const t = e.innerWidth,
            n = e.innerHeight,
            o = Math.min(t, n),
            i = Math.max(t, n);
        return o > 390 && o < 520 && i > 620 && i < 800;
    },
    Bw = (e) => {
        const t = e.innerWidth,
            n = e.innerHeight,
            o = Math.min(t, n),
            i = Math.max(t, n);
        return du(e) || Nw(e) || (o > 460 && o < 820 && i > 780 && i < 1400);
    },
    Zs = (e) => Uw(e, '(any-pointer:coarse)'),
    jw = (e) => !Zs(e),
    ag = (e) => cg(e) || ug(e),
    cg = (e) => !!(e.cordova || e.phonegap || e.PhoneGap),
    ug = (e) => {
        const t = e.Capacitor;
        return !!(t != null && t.isNative);
    },
    Hw = (e) => Dn(e, /electron/i),
    Fw = (e) => {
        var t;
        return !!(
            (!((t = e.matchMedia) === null || t === void 0) &&
                t.call(e, '(display-mode: standalone)').matches) ||
            e.navigator.standalone
        );
    },
    Dn = (e, t) => t.test(e.navigator.userAgent),
    Uw = (e, t) => {
        var n;
        return (n = e.matchMedia) === null || n === void 0
            ? void 0
            : n.call(e, t).matches;
    },
    Ef = {
        ipad: du,
        iphone: zw,
        ios: Mw,
        android: lg,
        phablet: Dw,
        tablet: Bw,
        cordova: cg,
        capacitor: ug,
        electron: Hw,
        pwa: Fw,
        mobile: Zs,
        mobileweb: Aw,
        desktop: jw,
        hybrid: ag,
    };
let Gn;
const Qe = (e) => (e && $1(e)) || Gn,
    Vw = (e = {}) => {
        if (typeof window > 'u') return;
        const t = window.document,
            n = window,
            o = (n.Ionic = n.Ionic || {}),
            i = {};
        e._ael && (i.ael = e._ael),
            e._rel && (i.rel = e._rel),
            e._ce && (i.ce = e._ce),
            X1(i);
        const r = Object.assign(
            Object.assign(
                Object.assign(
                    Object.assign(Object.assign({}, Pw(n)), { persistConfig: !1 }),
                    o.config
                ),
                _w(n)
            ),
            e
        );
        ae.reset(r),
            ae.getBoolean('persistConfig') && Rw(n, r),
            sg(n),
            (o.config = ae),
            (o.mode = Gn =
                ae.get(
                    'mode',
                    t.documentElement.getAttribute('mode') ||
                        (sn(n, 'ios') ? 'ios' : 'md')
                )),
            ae.set('mode', Gn),
            t.documentElement.setAttribute('mode', Gn),
            t.documentElement.classList.add(Gn),
            ae.getBoolean('_testing') && ae.set('animated', !1);
        const s = (a) => {
                var c;
                return (c = a.tagName) === null || c === void 0
                    ? void 0
                    : c.startsWith('ION-');
            },
            l = (a) => ['ios', 'md'].includes(a);
        x1((a) => {
            for (; a; ) {
                const c = a.mode || a.getAttribute('mode');
                if (c) {
                    if (l(c)) return c;
                    s(a) &&
                        console.warn(
                            'Invalid ionic mode: "' +
                                c +
                                '", expected: "ios" or "md"'
                        );
                }
                a = a.parentElement;
            }
            return Gn;
        });
    };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const dg = async (e, t, n, o, i, r) => {
        var s;
        if (e) return e.attachViewToDom(t, n, i, o);
        if (!r && typeof n != 'string' && !(n instanceof HTMLElement))
            throw new Error('framework delegate is missing');
        const l =
            typeof n == 'string'
                ? (s = t.ownerDocument) === null || s === void 0
                    ? void 0
                    : s.createElement(n)
                : n;
        return (
            o && o.forEach((a) => l.classList.add(a)),
            i && Object.assign(l, i),
            t.appendChild(l),
            await new Promise((a) => Ii(l, a)),
            l
        );
    },
    Ww = (e, t) => {
        if (t) {
            if (e) {
                const n = t.parentElement;
                return e.removeViewFromDom(n, t);
            }
            t.remove();
        }
        return Promise.resolve();
    };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const Kw = (e, ...t) =>
    console.error(
        '<'
            .concat(e.tagName.toLowerCase(), '> must be used inside ')
            .concat(t.join(' or '), '.')
    );
function ze(e, t) {
    var n = {};
    for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) &&
            t.indexOf(o) < 0 &&
            (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, o = Object.getOwnPropertySymbols(e); i < o.length; i++)
            t.indexOf(o[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[i]) &&
                (n[o[i]] = e[o[i]]);
    return n;
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const Js = (e, t) => t.closest(e) !== null,
    Fi = (e, t) =>
        typeof e == 'string' && e.length > 0
            ? Object.assign({ 'ion-color': !0, ['ion-color-'.concat(e)]: !0 }, t)
            : t;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const Qw =
        ':host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}',
    Yw = Tt(
        class extends Pt {
            constructor() {
                super(),
                    this.__registerHost(),
                    this.__attachShadow(),
                    (this.type = 'bounded');
            }
            async addRipple(t, n) {
                return new Promise((o) => {
                    Li(() => {
                        const i = this.el.getBoundingClientRect(),
                            r = i.width,
                            s = i.height,
                            l = Math.sqrt(r * r + s * s),
                            a = Math.max(s, r),
                            c = this.unbounded ? a : l + qw,
                            u = Math.floor(a * Gw),
                            d = c / u;
                        let f = t - i.left,
                            m = n - i.top;
                        this.unbounded && ((f = r * 0.5), (m = s * 0.5));
                        const y = f - u * 0.5,
                            w = m - u * 0.5,
                            O = r * 0.5 - f,
                            p = s * 0.5 - m;
                        yn(() => {
                            const h = document.createElement('div');
                            h.classList.add('ripple-effect');
                            const g = h.style;
                            (g.top = w + 'px'),
                                (g.left = y + 'px'),
                                (g.width = g.height = u + 'px'),
                                g.setProperty('--final-scale', ''.concat(d)),
                                g.setProperty(
                                    '--translate-end',
                                    ''.concat(O, 'px, ').concat(p, 'px')
                                ),
                                (this.el.shadowRoot || this.el).appendChild(h),
                                setTimeout(() => {
                                    o(() => {
                                        Xw(h);
                                    });
                                }, 225 + 100);
                        });
                    });
                });
            }
            get unbounded() {
                return this.type === 'unbounded';
            }
            render() {
                const t = Qe(this);
                return H(Mt, {
                    role: 'presentation',
                    class: { [t]: !0, unbounded: this.unbounded },
                });
            }
            get el() {
                return this;
            }
            static get style() {
                return Qw;
            }
        },
        [1, 'ion-ripple-effect', { type: [1], addRipple: [64] }]
    ),
    Xw = (e) => {
        e.classList.add('fade-out'),
            setTimeout(() => {
                e.remove();
            }, 200);
    },
    qw = 10,
    Gw = 0.5;
function Zw() {
    if (typeof customElements > 'u') return;
    ['ion-ripple-effect'].forEach((t) => {
        switch (t) {
            case 'ion-ripple-effect':
                customElements.get(t) || customElements.define(t, Yw);
                break;
        }
    });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const pr = typeof window < 'u' ? window : void 0;
pr && pr.CSS && pr.CSS.supports && pr.CSS.supports('--a: 0');
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const Jw = (e) =>
    e && e.dir !== ''
        ? e.dir.toLowerCase() === 'rtl'
        : (document == null ? void 0 : document.dir.toLowerCase()) === 'rtl';
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const ex =
        ':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50, #f2f2f2)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-ms-touch-action:pan-x pan-y pinch-zoom;touch-action:pan-x pan-y pinch-zoom}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);overscroll-behavior-x:contain}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:0;contain:none}:host(.content-sizing) .inner-scroll{position:relative;top:0;bottom:0;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1)}.transition-effect{display:none;position:absolute;width:100%;height:100vh;opacity:0;pointer-events:none}:host(.content-ltr) .transition-effect{left:-100%;}:host(.content-rtl) .transition-effect{right:-100%;}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;width:100%;height:100%;-webkit-box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03);box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03)}:host(.content-ltr) .transition-shadow{right:0;}:host(.content-rtl) .transition-shadow{left:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}::slotted([slot=fixed]){position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0)}',
    tx = Tt(
        class extends Pt {
            constructor() {
                super(),
                    this.__registerHost(),
                    this.__attachShadow(),
                    (this.ionScrollStart = We(this, 'ionScrollStart', 7)),
                    (this.ionScroll = We(this, 'ionScroll', 7)),
                    (this.ionScrollEnd = We(this, 'ionScrollEnd', 7)),
                    (this.watchDog = null),
                    (this.isScrolling = !1),
                    (this.lastScroll = 0),
                    (this.queued = !1),
                    (this.cTop = -1),
                    (this.cBottom = -1),
                    (this.isMainContent = !0),
                    (this.resizeTimeout = null),
                    (this.detail = {
                        scrollTop: 0,
                        scrollLeft: 0,
                        type: 'scroll',
                        event: void 0,
                        startX: 0,
                        startY: 0,
                        startTime: 0,
                        currentX: 0,
                        currentY: 0,
                        velocityX: 0,
                        velocityY: 0,
                        deltaX: 0,
                        deltaY: 0,
                        currentTime: 0,
                        data: void 0,
                        isScrolling: !0,
                    }),
                    (this.color = void 0),
                    (this.fullscreen = !1),
                    (this.forceOverscroll = void 0),
                    (this.scrollX = !1),
                    (this.scrollY = !0),
                    (this.scrollEvents = !1);
            }
            connectedCallback() {
                this.isMainContent =
                    this.el.closest('ion-menu, ion-popover, ion-modal') === null;
            }
            disconnectedCallback() {
                this.onScrollEnd();
            }
            onAppLoad() {
                this.resize();
            }
            onResize() {
                this.resizeTimeout &&
                    (clearTimeout(this.resizeTimeout), (this.resizeTimeout = null)),
                    (this.resizeTimeout = setTimeout(() => {
                        this.el.offsetParent !== null && this.resize();
                    }, 100));
            }
            shouldForceOverscroll() {
                const { forceOverscroll: t } = this,
                    n = Qe(this);
                return t === void 0 ? n === 'ios' && sn('ios') : t;
            }
            resize() {
                this.fullscreen
                    ? Li(() => this.readDimensions())
                    : (this.cTop !== 0 || this.cBottom !== 0) &&
                      ((this.cTop = this.cBottom = 0), Ba(this));
            }
            readDimensions() {
                const t = ox(this.el),
                    n = Math.max(this.el.offsetTop, 0),
                    o = Math.max(t.offsetHeight - n - this.el.offsetHeight, 0);
                (n !== this.cTop || o !== this.cBottom) &&
                    ((this.cTop = n), (this.cBottom = o), Ba(this));
            }
            onScroll(t) {
                const n = Date.now(),
                    o = !this.isScrolling;
                (this.lastScroll = n),
                    o && this.onScrollStart(),
                    !this.queued &&
                        this.scrollEvents &&
                        ((this.queued = !0),
                        Li((i) => {
                            (this.queued = !1),
                                (this.detail.event = t),
                                ix(this.detail, this.scrollEl, i, o),
                                this.ionScroll.emit(this.detail);
                        }));
            }
            async getScrollElement() {
                return (
                    this.scrollEl || (await new Promise((t) => Ii(this.el, t))),
                    Promise.resolve(this.scrollEl)
                );
            }
            async getBackgroundElement() {
                return (
                    this.backgroundContentEl ||
                        (await new Promise((t) => Ii(this.el, t))),
                    Promise.resolve(this.backgroundContentEl)
                );
            }
            scrollToTop(t = 0) {
                return this.scrollToPoint(void 0, 0, t);
            }
            async scrollToBottom(t = 0) {
                const n = await this.getScrollElement(),
                    o = n.scrollHeight - n.clientHeight;
                return this.scrollToPoint(void 0, o, t);
            }
            async scrollByPoint(t, n, o) {
                const i = await this.getScrollElement();
                return this.scrollToPoint(t + i.scrollLeft, n + i.scrollTop, o);
            }
            async scrollToPoint(t, n, o = 0) {
                const i = await this.getScrollElement();
                if (o < 32) {
                    n != null && (i.scrollTop = n), t != null && (i.scrollLeft = t);
                    return;
                }
                let r,
                    s = 0;
                const l = new Promise((m) => (r = m)),
                    a = i.scrollTop,
                    c = i.scrollLeft,
                    u = n != null ? n - a : 0,
                    d = t != null ? t - c : 0,
                    f = (m) => {
                        const y = Math.min(1, (m - s) / o) - 1,
                            w = Math.pow(y, 3) + 1;
                        u !== 0 && (i.scrollTop = Math.floor(w * u + a)),
                            d !== 0 && (i.scrollLeft = Math.floor(w * d + c)),
                            w < 1 ? requestAnimationFrame(f) : r();
                    };
                return (
                    requestAnimationFrame((m) => {
                        (s = m), f(m);
                    }),
                    l
                );
            }
            onScrollStart() {
                (this.isScrolling = !0),
                    this.ionScrollStart.emit({ isScrolling: !0 }),
                    this.watchDog && clearInterval(this.watchDog),
                    (this.watchDog = setInterval(() => {
                        this.lastScroll < Date.now() - 120 && this.onScrollEnd();
                    }, 100));
            }
            onScrollEnd() {
                this.watchDog && clearInterval(this.watchDog),
                    (this.watchDog = null),
                    this.isScrolling &&
                        ((this.isScrolling = !1),
                        this.ionScrollEnd.emit({ isScrolling: !1 }));
            }
            render() {
                const { isMainContent: t, scrollX: n, scrollY: o, el: i } = this,
                    r = Jw(i) ? 'rtl' : 'ltr',
                    s = Qe(this),
                    l = this.shouldForceOverscroll(),
                    a = s === 'ios',
                    c = t ? 'main' : 'div';
                return (
                    this.resize(),
                    H(
                        Mt,
                        {
                            class: Fi(this.color, {
                                [s]: !0,
                                'content-sizing': Js('ion-popover', this.el),
                                overscroll: l,
                                ['content-'.concat(r)]: !0,
                            }),
                            style: {
                                '--offset-top': ''.concat(this.cTop, 'px'),
                                '--offset-bottom': ''.concat(this.cBottom, 'px'),
                            },
                        },
                        H('div', {
                            ref: (u) => (this.backgroundContentEl = u),
                            id: 'background-content',
                            part: 'background',
                        }),
                        H(
                            c,
                            {
                                class: {
                                    'inner-scroll': !0,
                                    'scroll-x': n,
                                    'scroll-y': o,
                                    overscroll: (n || o) && l,
                                },
                                ref: (u) => (this.scrollEl = u),
                                onScroll: this.scrollEvents
                                    ? (u) => this.onScroll(u)
                                    : void 0,
                                part: 'scroll',
                            },
                            H('slot', null)
                        ),
                        a
                            ? H(
                                  'div',
                                  { class: 'transition-effect' },
                                  H('div', { class: 'transition-cover' }),
                                  H('div', { class: 'transition-shadow' })
                              )
                            : null,
                        H('slot', { name: 'fixed' })
                    )
                );
            }
            get el() {
                return this;
            }
            static get style() {
                return ex;
            }
        },
        [
            1,
            'ion-content',
            {
                color: [513],
                fullscreen: [4],
                forceOverscroll: [1028, 'force-overscroll'],
                scrollX: [4, 'scroll-x'],
                scrollY: [4, 'scroll-y'],
                scrollEvents: [4, 'scroll-events'],
                getScrollElement: [64],
                getBackgroundElement: [64],
                scrollToTop: [64],
                scrollToBottom: [64],
                scrollByPoint: [64],
                scrollToPoint: [64],
            },
            [
                [8, 'appload', 'onAppLoad'],
                [9, 'resize', 'onResize'],
            ],
        ]
    ),
    nx = (e) => {
        var t;
        return e.parentElement
            ? e.parentElement
            : !((t = e.parentNode) === null || t === void 0) && t.host
            ? e.parentNode.host
            : null;
    },
    ox = (e) => {
        const t = e.closest('ion-tabs');
        if (t) return t;
        const n = e.closest(
            'ion-app, ion-page, .ion-page, page-inner, .popover-content'
        );
        return n || nx(e);
    },
    ix = (e, t, n, o) => {
        const i = e.currentX,
            r = e.currentY,
            s = e.currentTime,
            l = t.scrollLeft,
            a = t.scrollTop,
            c = n - s;
        if (
            (o &&
                ((e.startTime = n),
                (e.startX = l),
                (e.startY = a),
                (e.velocityX = e.velocityY = 0)),
            (e.currentTime = n),
            (e.currentX = e.scrollLeft = l),
            (e.currentY = e.scrollTop = a),
            (e.deltaX = l - e.startX),
            (e.deltaY = a - e.startY),
            c > 0 && c < 100)
        ) {
            const u = (l - i) / c,
                d = (a - r) / c;
            (e.velocityX = u * 0.7 + e.velocityX * 0.3),
                (e.velocityY = d * 0.7 + e.velocityY * 0.3);
        }
    };
function rx() {
    if (typeof customElements > 'u') return;
    ['ion-content'].forEach((t) => {
        switch (t) {
            case 'ion-content':
                customElements.get(t) || customElements.define(t, tx);
                break;
        }
    });
}
const sx = rx;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const lx =
        '.item.sc-ion-label-ios-h,.item .sc-ion-label-ios-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-ios-h{color:var(--ion-color-base)}.ion-text-wrap.sc-ion-label-ios-h{white-space:normal}.item-interactive-disabled.sc-ion-label-ios-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-ios-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-ios-h,.item-input .sc-ion-label-ios-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-ios-h,.item-textarea .sc-ion-label-ios-h{-ms-flex-item-align:baseline;align-self:baseline}.label-fixed.sc-ion-label-ios-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-ios-h,.label-floating.sc-ion-label-ios-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-ios-h{-webkit-transition:none;transition:none}.sc-ion-label-ios-s h1,.sc-ion-label-ios-s h2,.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-ios-h{font-size:14px;line-height:1.5}.label-stacked.sc-ion-label-ios-h{margin-bottom:4px;font-size:14px}.label-floating.sc-ion-label-ios-h{margin-bottom:0;-webkit-transform:translate(0, 29px);transform:translate(0, 29px);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms ease-in-out;transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out}[dir=rtl].sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl] .sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl].label-floating.sc-ion-label-ios-h,[dir=rtl] .label-floating.sc-ion-label-ios-h{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.label-floating.sc-ion-label-ios-h:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}.item-textarea.label-floating.sc-ion-label-ios-h,.item-textarea .label-floating.sc-ion-label-ios-h{-webkit-transform:translate(0, 28px);transform:translate(0, 28px)}.item-has-focus.label-floating.sc-ion-label-ios-h,.item-has-focus .label-floating.sc-ion-label-ios-h,.item-has-placeholder.sc-ion-label-ios-h:not(.item-input).label-floating,.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-ios-h,.item-has-value.label-floating.sc-ion-label-ios-h,.item-has-value .label-floating.sc-ion-label-ios-h{-webkit-transform:scale(0.82);transform:scale(0.82)}.sc-ion-label-ios-s h1{margin-left:0;margin-right:0;margin-top:3px;margin-bottom:2px;font-size:22px;font-weight:normal}.sc-ion-label-ios-s h2{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:17px;font-weight:normal}.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{margin-left:0;margin-right:0;margin-top:0;margin-bottom:3px;font-size:14px;font-weight:normal;line-height:normal}.sc-ion-label-ios-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}.sc-ion-label-ios-s>p{color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.4)}.sc-ion-label-ios-h.in-item-color.sc-ion-label-ios-s>p{color:inherit}.sc-ion-label-ios-s h2:last-child,.sc-ion-label-ios-s h3:last-child,.sc-ion-label-ios-s h4:last-child,.sc-ion-label-ios-s h5:last-child,.sc-ion-label-ios-s h6:last-child,.sc-ion-label-ios-s p:last-child{margin-bottom:0}',
    ax =
        '.item.sc-ion-label-md-h,.item .sc-ion-label-md-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-md-h{color:var(--ion-color-base)}.ion-text-wrap.sc-ion-label-md-h{white-space:normal}.item-interactive-disabled.sc-ion-label-md-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-md-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-md-h,.item-input .sc-ion-label-md-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-md-h,.item-textarea .sc-ion-label-md-h{-ms-flex-item-align:baseline;align-self:baseline}.label-fixed.sc-ion-label-md-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-md-h{-webkit-transition:none;transition:none}.sc-ion-label-md-s h1,.sc-ion-label-md-s h2,.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-md-h{line-height:1.5}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:top left;transform-origin:top left}.label-stacked.label-rtl.sc-ion-label-md-h,.label-floating.label-rtl.sc-ion-label-md-h{-webkit-transform-origin:top right;transform-origin:top right}.label-stacked.sc-ion-label-md-h{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.label-floating.sc-ion-label-md-h{-webkit-transform:translateY(96%);transform:translateY(96%);-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1)}.ion-focused.label-floating.sc-ion-label-md-h,.ion-focused .label-floating.sc-ion-label-md-h,.item-has-focus.label-floating.sc-ion-label-md-h,.item-has-focus .label-floating.sc-ion-label-md-h,.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating,.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h,.item-has-value.label-floating.sc-ion-label-md-h,.item-has-value .label-floating.sc-ion-label-md-h{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75)}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h{-webkit-transform:translateY(-6px) scale(0.75);transform:translateY(-6px) scale(0.75);position:relative;max-width:-webkit-min-content;max-width:-moz-min-content;max-width:min-content;background-color:var(--ion-item-background, var(--ion-background-color, #fff));overflow:visible;z-index:3}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::before,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::before,.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::after,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::before,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::after,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::after{position:absolute;width:4px;height:100%;background-color:var(--ion-item-background, var(--ion-background-color, #fff));content:""}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::before,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::before,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::before{left:calc(-1 * 4px)}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::after,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::after,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::after{right:calc(-1 * 4px)}.item-fill-outline.ion-focused.item-has-start-slot.label-floating.sc-ion-label-md-h,.item-fill-outline.ion-focused.item-has-start-slot .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).item-has-start-slot.label-floating,.item-fill-outline.item-has-placeholder:not(.item-input).item-has-start-slot .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot .label-floating.sc-ion-label-md-h{-webkit-transform:translateX(-32px) translateY(-6px) scale(0.75);transform:translateX(-32px) translateY(-6px) scale(0.75)}.item-fill-outline.ion-focused.item-has-start-slot.label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.ion-focused.item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot.label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).item-has-start-slot.label-floating.label-rtl,.item-fill-outline.item-has-placeholder:not(.item-input).item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot.label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h{-webkit-transform:translateX(calc(-1 * -32px)) translateY(-6px) scale(0.75);transform:translateX(calc(-1 * -32px)) translateY(-6px) scale(0.75)}.ion-focused.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-focused .label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-primary, #3880ff)}.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-contrast)}.item-fill-solid.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-base)}.ion-invalid.ion-touched.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--highlight-color-invalid)}.sc-ion-label-md-s h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:normal}.sc-ion-label-md-s h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:normal}.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:normal;line-height:normal}.sc-ion-label-md-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;line-height:20px;text-overflow:inherit;overflow:inherit}.sc-ion-label-md-s>p{color:var(--ion-color-step-600, #666666)}.sc-ion-label-md-h.in-item-color.sc-ion-label-md-s>p{color:inherit}',
    cx = Tt(
        class extends Pt {
            constructor() {
                super(),
                    this.__registerHost(),
                    (this.ionColor = We(this, 'ionColor', 7)),
                    (this.ionStyle = We(this, 'ionStyle', 7)),
                    (this.inRange = !1),
                    (this.color = void 0),
                    (this.position = void 0),
                    (this.noAnimate = !1);
            }
            componentWillLoad() {
                (this.inRange = !!this.el.closest('ion-range')),
                    (this.noAnimate = this.position === 'floating'),
                    this.emitStyle(),
                    this.emitColor();
            }
            componentDidLoad() {
                this.noAnimate &&
                    setTimeout(() => {
                        this.noAnimate = !1;
                    }, 1e3);
            }
            colorChanged() {
                this.emitColor();
            }
            positionChanged() {
                this.emitStyle();
            }
            emitColor() {
                const { color: t } = this;
                this.ionColor.emit({
                    'item-label-color': t !== void 0,
                    ['ion-color-'.concat(t)]: t !== void 0,
                });
            }
            emitStyle() {
                const { inRange: t, position: n } = this;
                t ||
                    this.ionStyle.emit({
                        label: !0,
                        ['label-'.concat(n)]: n !== void 0,
                    });
            }
            render() {
                const t = this.position,
                    n = Qe(this);
                return H(Mt, {
                    class: Fi(this.color, {
                        [n]: !0,
                        'in-item-color': Js('ion-item.ion-color', this.el),
                        ['label-'.concat(t)]: t !== void 0,
                        'label-no-animate': this.noAnimate,
                        'label-rtl': document.dir === 'rtl',
                    }),
                });
            }
            get el() {
                return this;
            }
            static get watchers() {
                return { color: ['colorChanged'], position: ['positionChanged'] };
            }
            static get style() {
                return { ios: lx, md: ax };
            }
        },
        [
            34,
            'ion-label',
            { color: [513], position: [1], noAnimate: [32] },
            void 0,
            { color: ['colorChanged'], position: ['positionChanged'] },
        ]
    );
function ux() {
    if (typeof customElements > 'u') return;
    ['ion-label'].forEach((t) => {
        switch (t) {
            case 'ion-label':
                customElements.get(t) || customElements.define(t, cx);
                break;
        }
    });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const dx = () => {
    if (Re !== void 0) return Re.Capacitor;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const fx = 'ION-CONTENT',
    fg = 'ion-content',
    hg = '.ion-content-scroll-host',
    pg = ''.concat(fg, ', ').concat(hg),
    fu = (e) => e.tagName === fx,
    Sf = async (e) =>
        fu(e) ? (await new Promise((t) => Ii(e, t)), e.getScrollElement()) : e,
    Cf = (e) => {
        const t = e.querySelector(hg);
        return t || e.querySelector(pg);
    },
    yE = (e) => e.closest(pg),
    bE = (e, t) =>
        fu(e)
            ? e.scrollToTop(t)
            : Promise.resolve(
                  e.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: t > 0 ? 'smooth' : 'auto',
                  })
              ),
    wE = (e, t, n, o) =>
        fu(e)
            ? e.scrollByPoint(t, n, o)
            : Promise.resolve(
                  e.scrollBy({
                      top: n,
                      left: t,
                      behavior: o > 0 ? 'smooth' : 'auto',
                  })
              ),
    Tf = (e) => Kw(e, fg);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ var Va;
(function (e) {
    (e.Unimplemented = 'UNIMPLEMENTED'), (e.Unavailable = 'UNAVAILABLE');
})(Va || (Va = {}));
var Wa;
(function (e) {
    (e.Body = 'body'), (e.Ionic = 'ionic'), (e.Native = 'native'), (e.None = 'none');
})(Wa || (Wa = {}));
const hx = {
    getEngine() {
        const e = dx();
        if (e != null && e.isPluginAvailable('Keyboard')) return e.Plugins.Keyboard;
    },
    getResizeMode() {
        const e = this.getEngine();
        return e != null && e.getResizeMode
            ? e.getResizeMode().catch((t) => {
                  if (t.code !== Va.Unimplemented) throw t;
              })
            : Promise.resolve(void 0);
    },
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const mg = (e) => {
        if (Ml === void 0 || e === Wa.None || e === void 0) return null;
        const t = Ml.querySelector('ion-app');
        return t != null ? t : Ml.body;
    },
    Pf = (e) => {
        const t = mg(e);
        return t === null ? 0 : t.clientHeight;
    },
    px = async (e) => {
        let t, n, o, i;
        const r = async () => {
                const u = await hx.getResizeMode(),
                    d = u === void 0 ? void 0 : u.mode;
                (t = () => {
                    i === void 0 && (i = Pf(d)), (o = !0), s(o, d);
                }),
                    (n = () => {
                        (o = !1), s(o, d);
                    }),
                    Re == null || Re.addEventListener('keyboardWillShow', t),
                    Re == null || Re.addEventListener('keyboardWillHide', n);
            },
            s = (u, d) => {
                e && e(u, l(d));
            },
            l = (u) => {
                if (i === 0 || i === Pf(u)) return;
                const d = mg(u);
                if (d !== null)
                    return new Promise((f) => {
                        const m = () => {
                                d.clientHeight === i && (y.disconnect(), f());
                            },
                            y = new ResizeObserver(m);
                        y.observe(d);
                    });
            },
            a = () => {
                Re == null || Re.removeEventListener('keyboardWillShow', t),
                    Re == null || Re.removeEventListener('keyboardWillHide', n),
                    (t = n = void 0);
            },
            c = () => o;
        return await r(), { init: r, destroy: a, isKeyboardVisible: c };
    };
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const mx = 'all 0.2s ease-in-out',
    Rf = (e) => {
        const t = document.querySelector(''.concat(e, '.ion-cloned-element'));
        if (t !== null) return t;
        const n = document.createElement(e);
        return (
            n.classList.add('ion-cloned-element'),
            n.style.setProperty('display', 'none'),
            document.body.appendChild(n),
            n
        );
    },
    _f = (e) => {
        if (!e) return;
        const t = e.querySelectorAll('ion-toolbar');
        return {
            el: e,
            toolbars: Array.from(t).map((n) => {
                const o = n.querySelector('ion-title');
                return {
                    el: n,
                    background: n.shadowRoot.querySelector('.toolbar-background'),
                    ionTitleEl: o,
                    innerTitleEl: o
                        ? o.shadowRoot.querySelector('.toolbar-title')
                        : null,
                    ionButtonsEl: Array.from(n.querySelectorAll('ion-buttons')),
                };
            }),
        };
    },
    gx = (e, t, n) => {
        Li(() => {
            const o = e.scrollTop,
                i = Gm(1, 1 + -o / 500, 1.1);
            n.querySelector('ion-refresher.refresher-native') === null &&
                yn(() => {
                    bx(t.toolbars, i);
                });
        });
    },
    hu = (e, t) => {
        e.collapse !== 'fade' &&
            (t === void 0
                ? e.style.removeProperty('--opacity-scale')
                : e.style.setProperty('--opacity-scale', t.toString()));
    },
    vx = (e, t, n) => {
        if (!e[0].isIntersecting) return;
        const o =
            e[0].intersectionRatio > 0.9 || n <= 0
                ? 0
                : ((1 - e[0].intersectionRatio) * 100) / 75;
        hu(t.el, o === 1 ? void 0 : o);
    },
    yx = (e, t, n, o) => {
        yn(() => {
            const i = o.scrollTop;
            vx(e, t, i);
            const r = e[0],
                s = r.intersectionRect,
                l = s.width * s.height,
                a = r.rootBounds.width * r.rootBounds.height,
                c = l === 0 && a === 0,
                u = Math.abs(s.left - r.boundingClientRect.left),
                d = Math.abs(s.right - r.boundingClientRect.right),
                f = l > 0 && (u >= 5 || d >= 5);
            c ||
                f ||
                (r.isIntersecting
                    ? (ti(t, !1), ti(n))
                    : ((s.x === 0 && s.y === 0) ||
                          (s.width !== 0 && s.height !== 0)) &&
                      i > 0 &&
                      (ti(t), ti(n, !1), hu(t.el)));
        });
    },
    ti = (e, t = !0) => {
        const n = e.el;
        t
            ? (n.classList.remove('header-collapse-condense-inactive'),
              n.removeAttribute('aria-hidden'))
            : (n.classList.add('header-collapse-condense-inactive'),
              n.setAttribute('aria-hidden', 'true'));
    },
    bx = (e = [], t = 1, n = !1) => {
        e.forEach((o) => {
            const i = o.ionTitleEl,
                r = o.innerTitleEl;
            !i ||
                i.size !== 'large' ||
                ((r.style.transition = n ? mx : ''),
                (r.style.transform = 'scale3d('.concat(t, ', ').concat(t, ', 1)')));
        });
    },
    Lf = (e, t, n) => {
        Li(() => {
            const o = e.scrollTop,
                i = t.clientHeight,
                r = n ? n.clientHeight : 0;
            if (n !== null && o < r) {
                t.style.setProperty('--opacity-scale', '0'),
                    e.style.setProperty(
                        'clip-path',
                        'inset('.concat(i, 'px 0px 0px 0px)')
                    );
                return;
            }
            const s = o - r,
                a = Gm(0, s / 10, 1);
            yn(() => {
                e.style.removeProperty('clip-path'),
                    t.style.setProperty('--opacity-scale', a.toString());
            });
        });
    },
    wx =
        'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-fade ion-toolbar{--opacity-scale:inherit}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:1px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar:last-of-type{--border-width:0px}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0px;padding-bottom:13px}.header-collapse-main{--opacity-scale:1}.header-collapse-main ion-toolbar{--opacity-scale:inherit}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}',
    xx =
        'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md{-webkit-box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.header-collapse-condense{display:none}.header-md.ion-no-border{-webkit-box-shadow:none;box-shadow:none}',
    $x = Tt(
        class extends Pt {
            constructor() {
                super(),
                    this.__registerHost(),
                    (this.inheritedAttributes = {}),
                    (this.setupFadeHeader = async (t, n) => {
                        const o = (this.scrollEl = await Sf(t));
                        (this.contentScrollCallback = () => {
                            Lf(this.scrollEl, this.el, n);
                        }),
                            o.addEventListener('scroll', this.contentScrollCallback),
                            Lf(this.scrollEl, this.el, n);
                    }),
                    (this.collapse = void 0),
                    (this.translucent = !1);
            }
            componentWillLoad() {
                this.inheritedAttributes = nw(this.el);
            }
            componentDidLoad() {
                this.checkCollapsibleHeader();
            }
            componentDidUpdate() {
                this.checkCollapsibleHeader();
            }
            disconnectedCallback() {
                this.destroyCollapsibleHeader();
            }
            async checkCollapsibleHeader() {
                if (Qe(this) !== 'ios') return;
                const { collapse: n } = this,
                    o = n === 'condense',
                    i = n === 'fade';
                if ((this.destroyCollapsibleHeader(), o)) {
                    const r = this.el.closest(
                            'ion-app,ion-page,.ion-page,page-inner'
                        ),
                        s = r ? Cf(r) : null;
                    yn(() => {
                        const l = Rf('ion-title');
                        (l.size = 'large'), Rf('ion-back-button');
                    }),
                        await this.setupCondenseHeader(s, r);
                } else if (i) {
                    const r = this.el.closest(
                            'ion-app,ion-page,.ion-page,page-inner'
                        ),
                        s = r ? Cf(r) : null;
                    if (!s) {
                        Tf(this.el);
                        return;
                    }
                    const l = s.querySelector('ion-header[collapse="condense"]');
                    await this.setupFadeHeader(s, l);
                }
            }
            destroyCollapsibleHeader() {
                this.intersectionObserver &&
                    (this.intersectionObserver.disconnect(),
                    (this.intersectionObserver = void 0)),
                    this.scrollEl &&
                        this.contentScrollCallback &&
                        (this.scrollEl.removeEventListener(
                            'scroll',
                            this.contentScrollCallback
                        ),
                        (this.contentScrollCallback = void 0)),
                    this.collapsibleMainHeader &&
                        (this.collapsibleMainHeader.classList.remove(
                            'header-collapse-main'
                        ),
                        (this.collapsibleMainHeader = void 0));
            }
            async setupCondenseHeader(t, n) {
                if (!t || !n) {
                    Tf(this.el);
                    return;
                }
                if (typeof IntersectionObserver > 'u') return;
                this.scrollEl = await Sf(t);
                const o = n.querySelectorAll('ion-header');
                if (
                    ((this.collapsibleMainHeader = Array.from(o).find(
                        (l) => l.collapse !== 'condense'
                    )),
                    !this.collapsibleMainHeader)
                )
                    return;
                const i = _f(this.collapsibleMainHeader),
                    r = _f(this.el);
                if (!i || !r) return;
                ti(i, !1), hu(i.el, 0);
                const s = (l) => {
                    yx(l, i, r, this.scrollEl);
                };
                (this.intersectionObserver = new IntersectionObserver(s, {
                    root: t,
                    threshold: [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                })),
                    this.intersectionObserver.observe(
                        r.toolbars[r.toolbars.length - 1].el
                    ),
                    (this.contentScrollCallback = () => {
                        gx(this.scrollEl, r, t);
                    }),
                    this.scrollEl.addEventListener(
                        'scroll',
                        this.contentScrollCallback
                    ),
                    yn(() => {
                        this.collapsibleMainHeader !== void 0 &&
                            this.collapsibleMainHeader.classList.add(
                                'header-collapse-main'
                            );
                    });
            }
            render() {
                const { translucent: t, inheritedAttributes: n } = this,
                    o = Qe(this),
                    i = this.collapse || 'none',
                    r = Js('ion-menu', this.el) ? 'none' : 'banner';
                return H(
                    Mt,
                    Object.assign(
                        {
                            role: r,
                            class: {
                                [o]: !0,
                                ['header-'.concat(o)]: !0,
                                'header-translucent': this.translucent,
                                ['header-collapse-'.concat(i)]: !0,
                                ['header-translucent-'.concat(o)]: this.translucent,
                            },
                        },
                        n
                    ),
                    o === 'ios' && t && H('div', { class: 'header-background' }),
                    H('slot', null)
                );
            }
            get el() {
                return this;
            }
            static get style() {
                return { ios: wx, md: xx };
            }
        },
        [36, 'ion-header', { collapse: [1], translucent: [4] }]
    );
function kx() {
    if (typeof customElements > 'u') return;
    ['ion-header'].forEach((t) => {
        switch (t) {
            case 'ion-header':
                customElements.get(t) || customElements.define(t, $x);
                break;
        }
    });
}
const Ex = kx;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const Sx = ux,
    gg = 1,
    vg = 2,
    ls = 3;
class Ka {
    constructor(t, n) {
        (this.component = t), (this.params = n), (this.state = gg);
    }
    async init(t) {
        if (((this.state = vg), !this.element)) {
            const n = this.component;
            this.element = await dg(
                this.delegate,
                t,
                n,
                ['ion-page', 'ion-page-invisible'],
                this.params
            );
        }
    }
    _destroy() {
        De(this.state !== ls, 'view state must be ATTACHED');
        const t = this.element;
        t &&
            (this.delegate
                ? this.delegate.removeViewFromDom(t.parentElement, t)
                : t.remove()),
            (this.nav = void 0),
            (this.state = ls);
    }
}
const If = (e, t, n) => (!e || e.component !== t ? !1 : Zm(e.params, n)),
    Of = (e, t) => (e ? (e instanceof Ka ? e : new Ka(e, t)) : null),
    Cx = (e) =>
        e
            .map((t) =>
                t instanceof Ka
                    ? t
                    : 'component' in t
                    ? Of(
                          t.component,
                          t.componentProps === null ? void 0 : t.componentProps
                      )
                    : Of(t, void 0)
            )
            .filter((t) => t !== null),
    Tx =
        ':host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}',
    Px = Tt(
        class extends Pt {
            constructor() {
                super(),
                    this.__registerHost(),
                    this.__attachShadow(),
                    (this.ionNavWillLoad = We(this, 'ionNavWillLoad', 7)),
                    (this.ionNavWillChange = We(this, 'ionNavWillChange', 3)),
                    (this.ionNavDidChange = We(this, 'ionNavDidChange', 3)),
                    (this.transInstr = []),
                    (this.gestureOrAnimationInProgress = !1),
                    (this.useRouter = !1),
                    (this.isTransitioning = !1),
                    (this.destroyed = !1),
                    (this.views = []),
                    (this.didLoad = !1),
                    (this.delegate = void 0),
                    (this.swipeGesture = void 0),
                    (this.animated = !0),
                    (this.animation = void 0),
                    (this.rootParams = void 0),
                    (this.root = void 0);
            }
            swipeGestureChanged() {
                this.gesture && this.gesture.enable(this.swipeGesture === !0);
            }
            rootChanged() {
                this.root !== void 0 &&
                    this.didLoad !== !1 &&
                    (this.useRouter ||
                        (this.root !== void 0 &&
                            this.setRoot(this.root, this.rootParams)));
            }
            componentWillLoad() {
                if (
                    ((this.useRouter =
                        document.querySelector('ion-router') !== null &&
                        this.el.closest('[no-router]') === null),
                    this.swipeGesture === void 0)
                ) {
                    const t = Qe(this);
                    this.swipeGesture = ae.getBoolean(
                        'swipeBackEnabled',
                        t === 'ios'
                    );
                }
                this.ionNavWillLoad.emit();
            }
            async componentDidLoad() {
                (this.didLoad = !0),
                    this.rootChanged(),
                    (this.gesture = (
                        await It(() => import('./swipe-back-10988a03.js'), [])
                    ).createSwipeBackGesture(
                        this.el,
                        this.canStart.bind(this),
                        this.onStart.bind(this),
                        this.onMove.bind(this),
                        this.onEnd.bind(this)
                    )),
                    this.swipeGestureChanged();
            }
            connectedCallback() {
                this.destroyed = !1;
            }
            disconnectedCallback() {
                for (const t of this.views) Ht(t.element, Dl), t._destroy();
                this.gesture && (this.gesture.destroy(), (this.gesture = void 0)),
                    (this.transInstr.length = 0),
                    (this.views.length = 0),
                    (this.destroyed = !0);
            }
            push(t, n, o, i) {
                return this.insert(-1, t, n, o, i);
            }
            insert(t, n, o, i, r) {
                return this.insertPages(
                    t,
                    [{ component: n, componentProps: o }],
                    i,
                    r
                );
            }
            insertPages(t, n, o, i) {
                return this.queueTrns(
                    { insertStart: t, insertViews: n, opts: o },
                    i
                );
            }
            pop(t, n) {
                return this.removeIndex(-1, 1, t, n);
            }
            popTo(t, n, o) {
                const i = { removeStart: -1, removeCount: -1, opts: n };
                return (
                    typeof t == 'object' && t.component
                        ? ((i.removeView = t), (i.removeStart = 1))
                        : typeof t == 'number' && (i.removeStart = t + 1),
                    this.queueTrns(i, o)
                );
            }
            popToRoot(t, n) {
                return this.removeIndex(1, -1, t, n);
            }
            removeIndex(t, n = 1, o, i) {
                return this.queueTrns(
                    { removeStart: t, removeCount: n, opts: o },
                    i
                );
            }
            setRoot(t, n, o, i) {
                return this.setPages([{ component: t, componentProps: n }], o, i);
            }
            setPages(t, n, o) {
                return (
                    n != null || (n = {}),
                    n.animated !== !0 && (n.animated = !1),
                    this.queueTrns(
                        {
                            insertStart: 0,
                            insertViews: t,
                            removeStart: 0,
                            removeCount: -1,
                            opts: n,
                        },
                        o
                    )
                );
            }
            setRouteId(t, n, o, i) {
                const r = this.getActiveSync();
                if (If(r, t, n))
                    return Promise.resolve({ changed: !1, element: r.element });
                let s;
                const l = new Promise((u) => (s = u));
                let a;
                const c = {
                    updateURL: !1,
                    viewIsReady: (u) => {
                        let d;
                        const f = new Promise((m) => (d = m));
                        return (
                            s({
                                changed: !0,
                                element: u,
                                markVisible: async () => {
                                    d(), await a;
                                },
                            }),
                            f
                        );
                    },
                };
                if (o === 'root') a = this.setRoot(t, n, c);
                else {
                    const u = this.views.find((d) => If(d, t, n));
                    u
                        ? (a = this.popTo(
                              u,
                              Object.assign(Object.assign({}, c), {
                                  direction: 'back',
                                  animationBuilder: i,
                              })
                          ))
                        : o === 'forward'
                        ? (a = this.push(
                              t,
                              n,
                              Object.assign(Object.assign({}, c), {
                                  animationBuilder: i,
                              })
                          ))
                        : o === 'back' &&
                          (a = this.setRoot(
                              t,
                              n,
                              Object.assign(Object.assign({}, c), {
                                  direction: 'back',
                                  animated: !0,
                                  animationBuilder: i,
                              })
                          ));
                }
                return l;
            }
            async getRouteId() {
                const t = this.getActiveSync();
                if (t)
                    return {
                        id: t.element.tagName,
                        params: t.params,
                        element: t.element,
                    };
            }
            async getActive() {
                return this.getActiveSync();
            }
            async getByIndex(t) {
                return this.views[t];
            }
            async canGoBack(t) {
                return this.canGoBackSync(t);
            }
            async getPrevious(t) {
                return this.getPreviousSync(t);
            }
            getLength() {
                return this.views.length;
            }
            getActiveSync() {
                return this.views[this.views.length - 1];
            }
            canGoBackSync(t = this.getActiveSync()) {
                return !!(t && this.getPreviousSync(t));
            }
            getPreviousSync(t = this.getActiveSync()) {
                if (!t) return;
                const n = this.views,
                    o = n.indexOf(t);
                return o > 0 ? n[o - 1] : void 0;
            }
            async queueTrns(t, n) {
                var o, i;
                if (
                    this.isTransitioning &&
                    !((o = t.opts) === null || o === void 0) &&
                    o.skipIfBusy
                )
                    return !1;
                const r = new Promise((s, l) => {
                    (t.resolve = s), (t.reject = l);
                });
                if (
                    ((t.done = n),
                    t.opts && t.opts.updateURL !== !1 && this.useRouter)
                ) {
                    const s = document.querySelector('ion-router');
                    if (s) {
                        const l = await s.canTransition();
                        if (l === !1) return !1;
                        if (typeof l == 'string')
                            return s.push(l, t.opts.direction || 'back'), !1;
                    }
                }
                return (
                    ((i = t.insertViews) === null || i === void 0
                        ? void 0
                        : i.length) === 0 && (t.insertViews = void 0),
                    this.transInstr.push(t),
                    this.nextTrns(),
                    r
                );
            }
            success(t, n) {
                if (this.destroyed) {
                    this.fireError('nav controller was destroyed', n);
                    return;
                }
                if (
                    (n.done &&
                        n.done(
                            t.hasCompleted,
                            t.requiresTransition,
                            t.enteringView,
                            t.leavingView,
                            t.direction
                        ),
                    n.resolve(t.hasCompleted),
                    n.opts.updateURL !== !1 && this.useRouter)
                ) {
                    const o = document.querySelector('ion-router');
                    if (o) {
                        const i = t.direction === 'back' ? 'back' : 'forward';
                        o.navChanged(i);
                    }
                }
            }
            failed(t, n) {
                if (this.destroyed) {
                    this.fireError('nav controller was destroyed', n);
                    return;
                }
                (this.transInstr.length = 0), this.fireError(t, n);
            }
            fireError(t, n) {
                n.done && n.done(!1, !1, t),
                    n.reject && !this.destroyed ? n.reject(t) : n.resolve(!1);
            }
            nextTrns() {
                if (this.isTransitioning) return !1;
                const t = this.transInstr.shift();
                return t ? (this.runTransition(t), !0) : !1;
            }
            async runTransition(t) {
                try {
                    this.ionNavWillChange.emit(),
                        (this.isTransitioning = !0),
                        this.prepareTI(t);
                    const n = this.getActiveSync(),
                        o = this.getEnteringView(t, n);
                    if (!n && !o)
                        throw new Error('no views in the stack to be removed');
                    o && o.state === gg && (await o.init(this.el)),
                        this.postViewInit(o, n, t);
                    const i =
                        (t.enteringRequiresTransition ||
                            t.leavingRequiresTransition) &&
                        o !== n;
                    i &&
                        t.opts &&
                        n &&
                        (t.opts.direction === 'back' &&
                            (t.opts.animationBuilder =
                                t.opts.animationBuilder ||
                                (o == null ? void 0 : o.animationBuilder)),
                        (n.animationBuilder = t.opts.animationBuilder));
                    let r;
                    i
                        ? (r = await this.transition(o, n, t))
                        : (r = { hasCompleted: !0, requiresTransition: !1 }),
                        this.success(r, t),
                        this.ionNavDidChange.emit();
                } catch (n) {
                    this.failed(n, t);
                }
                (this.isTransitioning = !1), this.nextTrns();
            }
            prepareTI(t) {
                var n, o, i;
                const r = this.views.length;
                if (
                    (((n = t.opts) !== null && n !== void 0) || (t.opts = {}),
                    ((o = (i = t.opts).delegate) !== null && o !== void 0) ||
                        (i.delegate = this.delegate),
                    t.removeView !== void 0)
                ) {
                    De(t.removeStart !== void 0, 'removeView needs removeStart'),
                        De(t.removeCount !== void 0, 'removeView needs removeCount');
                    const a = this.views.indexOf(t.removeView);
                    if (a < 0) throw new Error('removeView was not found');
                    t.removeStart += a;
                }
                t.removeStart !== void 0 &&
                    (t.removeStart < 0 && (t.removeStart = r - 1),
                    t.removeCount < 0 && (t.removeCount = r - t.removeStart),
                    (t.leavingRequiresTransition =
                        t.removeCount > 0 && t.removeStart + t.removeCount === r)),
                    t.insertViews &&
                        ((t.insertStart < 0 || t.insertStart > r) &&
                            (t.insertStart = r),
                        (t.enteringRequiresTransition = t.insertStart === r));
                const s = t.insertViews;
                if (!s) return;
                De(s.length > 0, 'length can not be zero');
                const l = Cx(s);
                if (l.length === 0) throw new Error('invalid views to insert');
                for (const a of l) {
                    a.delegate = t.opts.delegate;
                    const c = a.nav;
                    if (c && c !== this)
                        throw new Error('inserted view was already inserted');
                    if (a.state === ls)
                        throw new Error('inserted view was already destroyed');
                }
                t.insertViews = l;
            }
            getEnteringView(t, n) {
                const o = t.insertViews;
                if (o !== void 0) return o[o.length - 1];
                const i = t.removeStart;
                if (i !== void 0) {
                    const r = this.views,
                        s = i + t.removeCount;
                    for (let l = r.length - 1; l >= 0; l--) {
                        const a = r[l];
                        if ((l < i || l >= s) && a !== n) return a;
                    }
                }
            }
            postViewInit(t, n, o) {
                var i, r, s;
                De(n || t, 'Both leavingView and enteringView are null'),
                    De(o.resolve, 'resolve must be valid'),
                    De(o.reject, 'reject must be valid');
                const l = o.opts,
                    { insertViews: a, removeStart: c, removeCount: u } = o;
                let d;
                if (c !== void 0 && u !== void 0) {
                    De(c >= 0, 'removeStart can not be negative'),
                        De(u >= 0, 'removeCount can not be negative'),
                        (d = []);
                    for (let m = c; m < c + u; m++) {
                        const y = this.views[m];
                        y !== void 0 && y !== t && y !== n && d.push(y);
                    }
                    ((i = l.direction) !== null && i !== void 0) ||
                        (l.direction = 'back');
                }
                const f =
                    this.views.length +
                    ((r = a == null ? void 0 : a.length) !== null && r !== void 0
                        ? r
                        : 0) -
                    (u != null ? u : 0);
                if ((De(f >= 0, 'final balance can not be negative'), f === 0))
                    throw (
                        (console.warn(
                            "You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",
                            this,
                            this.el
                        ),
                        new Error('navigation stack needs at least one root page'))
                    );
                if (a) {
                    let m = o.insertStart;
                    for (const y of a) this.insertViewAt(y, m), m++;
                    o.enteringRequiresTransition &&
                        (((s = l.direction) !== null && s !== void 0) ||
                            (l.direction = 'forward'));
                }
                if (d && d.length > 0) {
                    for (const m of d)
                        Ht(m.element, Jm), Ht(m.element, eg), Ht(m.element, Dl);
                    for (const m of d) this.destroyView(m);
                }
            }
            async transition(t, n, o) {
                const i = o.opts,
                    r = i.progressAnimation
                        ? (d) => {
                              d !== void 0 && !this.gestureOrAnimationInProgress
                                  ? ((this.gestureOrAnimationInProgress = !0),
                                    d.onFinish(
                                        () => {
                                            this.gestureOrAnimationInProgress = !1;
                                        },
                                        { oneTimeCallback: !0 }
                                    ),
                                    d.progressEnd(0, 0, 0))
                                  : (this.sbAni = d);
                          }
                        : void 0,
                    s = Qe(this),
                    l = t.element,
                    a = n && n.element,
                    c = Object.assign(
                        Object.assign(
                            {
                                mode: s,
                                showGoBack: this.canGoBackSync(t),
                                baseEl: this.el,
                                progressCallback: r,
                                animated:
                                    this.animated && ae.getBoolean('animated', !0),
                                enteringEl: l,
                                leavingEl: a,
                            },
                            i
                        ),
                        {
                            animationBuilder:
                                i.animationBuilder ||
                                this.animation ||
                                ae.get('navAnimation'),
                        }
                    ),
                    { hasCompleted: u } = await tg(c);
                return this.transitionFinish(u, t, n, i);
            }
            transitionFinish(t, n, o, i) {
                const r = t ? n : o;
                return (
                    r && this.unmountInactiveViews(r),
                    {
                        hasCompleted: t,
                        requiresTransition: !0,
                        enteringView: n,
                        leavingView: o,
                        direction: i.direction,
                    }
                );
            }
            insertViewAt(t, n) {
                const o = this.views,
                    i = o.indexOf(t);
                i > -1
                    ? (De(t.nav === this, 'view is not part of the nav'),
                      o.splice(i, 1),
                      o.splice(n, 0, t))
                    : (De(!t.nav, 'nav is used'), (t.nav = this), o.splice(n, 0, t));
            }
            removeView(t) {
                De(
                    t.state === vg || t.state === ls,
                    'view state should be loaded or destroyed'
                );
                const n = this.views,
                    o = n.indexOf(t);
                De(o > -1, 'view must be part of the stack'),
                    o >= 0 && n.splice(o, 1);
            }
            destroyView(t) {
                t._destroy(), this.removeView(t);
            }
            unmountInactiveViews(t) {
                if (this.destroyed) return;
                const n = this.views,
                    o = n.indexOf(t);
                for (let i = n.length - 1; i >= 0; i--) {
                    const r = n[i],
                        s = r.element;
                    s &&
                        (i > o
                            ? (Ht(s, Dl), this.destroyView(r))
                            : i < o && Ua(s, !0));
                }
            }
            canStart() {
                return (
                    !this.gestureOrAnimationInProgress &&
                    !!this.swipeGesture &&
                    !this.isTransitioning &&
                    this.transInstr.length === 0 &&
                    this.canGoBackSync()
                );
            }
            onStart() {
                (this.gestureOrAnimationInProgress = !0),
                    this.pop({ direction: 'back', progressAnimation: !0 });
            }
            onMove(t) {
                this.sbAni && this.sbAni.progressStep(t);
            }
            onEnd(t, n, o) {
                if (this.sbAni) {
                    this.sbAni.onFinish(
                        () => {
                            this.gestureOrAnimationInProgress = !1;
                        },
                        { oneTimeCallback: !0 }
                    );
                    let i = t ? -0.001 : 0.001;
                    t
                        ? (i += ss([0, 0], [0.32, 0.72], [0, 1], [1, 1], n)[0])
                        : (this.sbAni.easing('cubic-bezier(1, 0, 0.68, 0.28)'),
                          (i += ss([0, 0], [1, 0], [0.68, 0.28], [1, 1], n)[0])),
                        this.sbAni.progressEnd(t ? 1 : 0, i, o);
                } else this.gestureOrAnimationInProgress = !1;
            }
            render() {
                return H('slot', null);
            }
            get el() {
                return this;
            }
            static get watchers() {
                return {
                    swipeGesture: ['swipeGestureChanged'],
                    root: ['rootChanged'],
                };
            }
            static get style() {
                return Tx;
            }
        },
        [
            1,
            'ion-nav',
            {
                delegate: [16],
                swipeGesture: [1028, 'swipe-gesture'],
                animated: [4],
                animation: [16],
                rootParams: [16],
                root: [1],
                push: [64],
                insert: [64],
                insertPages: [64],
                pop: [64],
                popTo: [64],
                popToRoot: [64],
                removeIndex: [64],
                setRoot: [64],
                setPages: [64],
                setRouteId: [64],
                getRouteId: [64],
                getActive: [64],
                getByIndex: [64],
                canGoBack: [64],
                getPrevious: [64],
            },
            void 0,
            { swipeGesture: ['swipeGestureChanged'], root: ['rootChanged'] },
        ]
    );
function Rx() {
    if (typeof customElements > 'u') return;
    ['ion-nav'].forEach((t) => {
        switch (t) {
            case 'ion-nav':
                customElements.get(t) || customElements.define(t, Px);
                break;
        }
    });
}
const _x = Rx;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const Lx =
        ':host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{top:0;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host:dir(rtl){left:unset;right:unset;right:0}}}:host(.title-small){-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:13px;font-weight:normal}:host(.title-large){-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:0;-webkit-transform-origin:left center;transform-origin:left center;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;font-size:34px;font-weight:700;text-align:start}:host(.title-large.title-rtl){-webkit-transform-origin:right center;transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000)}:host(.title-large) .toolbar-title{-webkit-transform-origin:inherit;transform-origin:inherit}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}@supports selector(:dir(rtl)){:host(.title-large) .toolbar-title:dir(rtl){-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}}',
    Ix =
        ':host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:0.0125em}:host(.title-small){width:100%;height:100%;font-size:15px;font-weight:normal}',
    Ox = Tt(
        class extends Pt {
            constructor() {
                super(),
                    this.__registerHost(),
                    this.__attachShadow(),
                    (this.ionStyle = We(this, 'ionStyle', 7)),
                    (this.color = void 0),
                    (this.size = void 0);
            }
            sizeChanged() {
                this.emitStyle();
            }
            connectedCallback() {
                this.emitStyle();
            }
            emitStyle() {
                const t = this.getSize();
                this.ionStyle.emit({ ['title-'.concat(t)]: !0 });
            }
            getSize() {
                return this.size !== void 0 ? this.size : 'default';
            }
            render() {
                const t = Qe(this),
                    n = this.getSize();
                return H(
                    Mt,
                    {
                        class: Fi(this.color, {
                            [t]: !0,
                            ['title-'.concat(n)]: !0,
                            'title-rtl': document.dir === 'rtl',
                        }),
                    },
                    H('div', { class: 'toolbar-title' }, H('slot', null))
                );
            }
            get el() {
                return this;
            }
            static get watchers() {
                return { size: ['sizeChanged'] };
            }
            static get style() {
                return { ios: Lx, md: Ix };
            }
        },
        [
            33,
            'ion-title',
            { color: [513], size: [1] },
            void 0,
            { size: ['sizeChanged'] },
        ]
    );
function Ax() {
    if (typeof customElements > 'u') return;
    ['ion-title'].forEach((t) => {
        switch (t) {
            case 'ion-title':
                customElements.get(t) || customElements.define(t, Ox);
                break;
        }
    });
}
const zx = Ax;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const Mx =
        ':host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:-ms-inline-flexbox;display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}:host(.toolbar-searchbar) ::slotted(ion-back-button){height:38px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large){padding-bottom:7px}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}',
    Nx =
        ':host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(.buttons-first-slot){-webkit-margin-start:4px;margin-inline-start:4px}::slotted(.buttons-last-slot){-webkit-margin-end:4px;margin-inline-end:4px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}',
    Dx = Tt(
        class extends Pt {
            constructor() {
                super(),
                    this.__registerHost(),
                    this.__attachShadow(),
                    (this.childrenStyles = new Map()),
                    (this.color = void 0);
            }
            componentWillLoad() {
                const t = Array.from(this.el.querySelectorAll('ion-buttons')),
                    n = t.find((r) => r.slot === 'start');
                n && n.classList.add('buttons-first-slot');
                const o = t.reverse(),
                    i =
                        o.find((r) => r.slot === 'end') ||
                        o.find((r) => r.slot === 'primary') ||
                        o.find((r) => r.slot === 'secondary');
                i && i.classList.add('buttons-last-slot');
            }
            childrenStyle(t) {
                t.stopPropagation();
                const n = t.target.tagName,
                    o = t.detail,
                    i = {},
                    r = this.childrenStyles.get(n) || {};
                let s = !1;
                Object.keys(o).forEach((l) => {
                    const a = 'toolbar-'.concat(l),
                        c = o[l];
                    c !== r[a] && (s = !0), c && (i[a] = !0);
                }),
                    s && (this.childrenStyles.set(n, i), Ba(this));
            }
            render() {
                const t = Qe(this),
                    n = {};
                return (
                    this.childrenStyles.forEach((o) => {
                        Object.assign(n, o);
                    }),
                    H(
                        Mt,
                        {
                            class: Object.assign(
                                Object.assign({}, n),
                                Fi(this.color, {
                                    [t]: !0,
                                    'in-toolbar': Js('ion-toolbar', this.el),
                                })
                            ),
                        },
                        H('div', { class: 'toolbar-background' }),
                        H(
                            'div',
                            { class: 'toolbar-container' },
                            H('slot', { name: 'start' }),
                            H('slot', { name: 'secondary' }),
                            H('div', { class: 'toolbar-content' }, H('slot', null)),
                            H('slot', { name: 'primary' }),
                            H('slot', { name: 'end' })
                        )
                    )
                );
            }
            get el() {
                return this;
            }
            static get style() {
                return { ios: Mx, md: Nx };
            }
        },
        [33, 'ion-toolbar', { color: [513] }, [[0, 'ionStyle', 'childrenStyle']]]
    );
function Bx() {
    if (typeof customElements > 'u') return;
    ['ion-toolbar'].forEach((t) => {
        switch (t) {
            case 'ion-toolbar':
                customElements.get(t) || customElements.define(t, Dx);
                break;
        }
    });
}
const jx = Bx;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ var Af;
(function (e) {
    (e.Dark = 'DARK'), (e.Light = 'LIGHT'), (e.Default = 'DEFAULT');
})(Af || (Af = {}));
const Hx =
        'html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.plt-mobile ion-app [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}',
    Fx = Tt(
        class extends Pt {
            constructor() {
                super(), this.__registerHost();
            }
            componentDidLoad() {
                Vx(async () => {
                    const t = sn(window, 'hybrid');
                    if (
                        (ae.getBoolean('_testing') ||
                            It(() => import('./index9-b096edd0.js'), []).then((o) =>
                                o.startTapClick(ae)
                            ),
                        ae.getBoolean('statusTap', t) &&
                            It(() => import('./status-tap-7549bde2.js'), []).then(
                                (o) => o.startStatusTap()
                            ),
                        ae.getBoolean('inputShims', Ux()))
                    ) {
                        const o = sn(window, 'ios') ? 'ios' : 'android';
                        It(() => import('./input-shims-fa638649.js'), []).then((i) =>
                            i.startInputShims(ae, o)
                        );
                    }
                    const n = await It(
                        () => import('./hardware-back-button-77fd2980.js'),
                        []
                    );
                    ae.getBoolean('hardwareBackButton', t)
                        ? n.startHardwareBackButton()
                        : n.blockHardwareBackButton(),
                        typeof window < 'u' &&
                            It(() => import('./keyboard2-6b4b9f21.js'), []).then(
                                (o) => o.startKeyboardAssist(window)
                            ),
                        It(() => import('./focus-visible-9c13edeb.js'), []).then(
                            (o) => (this.focusVisible = o.startFocusVisible())
                        );
                });
            }
            async setFocus(t) {
                this.focusVisible && this.focusVisible.setFocus(t);
            }
            render() {
                const t = Qe(this);
                return H(Mt, {
                    class: {
                        [t]: !0,
                        'ion-page': !0,
                        'force-statusbar-padding': ae.getBoolean(
                            '_forceStatusbarPadding'
                        ),
                    },
                });
            }
            get el() {
                return this;
            }
            static get style() {
                return Hx;
            }
        },
        [0, 'ion-app', { setFocus: [64] }]
    ),
    Ux = () =>
        !!(
            (sn(window, 'ios') && sn(window, 'mobile')) ||
            (sn(window, 'android') && sn(window, 'mobileweb'))
        ),
    Vx = (e) => {
        'requestIdleCallback' in window
            ? window.requestIdleCallback(e)
            : setTimeout(e, 32);
    };
function Wx() {
    if (typeof customElements > 'u') return;
    ['ion-app'].forEach((t) => {
        switch (t) {
            case 'ion-app':
                customElements.get(t) || customElements.define(t, Fx);
                break;
        }
    });
}
const Kx = Wx,
    Qx =
        ':host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}',
    Yx = Tt(
        class extends Pt {
            constructor() {
                super(),
                    this.__registerHost(),
                    this.__attachShadow(),
                    (this.ionNavWillLoad = We(this, 'ionNavWillLoad', 7)),
                    (this.ionNavWillChange = We(this, 'ionNavWillChange', 3)),
                    (this.ionNavDidChange = We(this, 'ionNavDidChange', 3)),
                    (this.gestureOrAnimationInProgress = !1),
                    (this.mode = Qe(this)),
                    (this.delegate = void 0),
                    (this.animated = !0),
                    (this.animation = void 0),
                    (this.swipeHandler = void 0);
            }
            swipeHandlerChanged() {
                this.gesture && this.gesture.enable(this.swipeHandler !== void 0);
            }
            async connectedCallback() {
                const t = () => {
                    (this.gestureOrAnimationInProgress = !0),
                        this.swipeHandler && this.swipeHandler.onStart();
                };
                (this.gesture = (
                    await It(() => import('./swipe-back-10988a03.js'), [])
                ).createSwipeBackGesture(
                    this.el,
                    () =>
                        !this.gestureOrAnimationInProgress &&
                        !!this.swipeHandler &&
                        this.swipeHandler.canStart(),
                    () => t(),
                    (n) => {
                        var o;
                        return (o = this.ani) === null || o === void 0
                            ? void 0
                            : o.progressStep(n);
                    },
                    (n, o, i) => {
                        if (this.ani) {
                            this.ani.onFinish(
                                () => {
                                    (this.gestureOrAnimationInProgress = !1),
                                        this.swipeHandler &&
                                            this.swipeHandler.onEnd(n);
                                },
                                { oneTimeCallback: !0 }
                            );
                            let r = n ? -0.001 : 0.001;
                            n
                                ? (r += ss(
                                      [0, 0],
                                      [0.32, 0.72],
                                      [0, 1],
                                      [1, 1],
                                      o
                                  )[0])
                                : (this.ani.easing('cubic-bezier(1, 0, 0.68, 0.28)'),
                                  (r += ss(
                                      [0, 0],
                                      [1, 0],
                                      [0.68, 0.28],
                                      [1, 1],
                                      o
                                  )[0])),
                                this.ani.progressEnd(n ? 1 : 0, r, i);
                        } else this.gestureOrAnimationInProgress = !1;
                    }
                )),
                    this.swipeHandlerChanged();
            }
            componentWillLoad() {
                this.ionNavWillLoad.emit();
            }
            disconnectedCallback() {
                this.gesture && (this.gesture.destroy(), (this.gesture = void 0));
            }
            async commit(t, n, o) {
                const i = await this.lock();
                let r = !1;
                try {
                    r = await this.transition(t, n, o);
                } catch (s) {
                    console.error(s);
                }
                return i(), r;
            }
            async setRouteId(t, n, o, i) {
                return {
                    changed: await this.setRoot(t, n, {
                        duration: o === 'root' ? 0 : void 0,
                        direction: o === 'back' ? 'back' : 'forward',
                        animationBuilder: i,
                    }),
                    element: this.activeEl,
                };
            }
            async getRouteId() {
                const t = this.activeEl;
                return t
                    ? { id: t.tagName, element: t, params: this.activeParams }
                    : void 0;
            }
            async setRoot(t, n, o) {
                if (this.activeComponent === t && Zm(n, this.activeParams))
                    return !1;
                const i = this.activeEl,
                    r = await dg(
                        this.delegate,
                        this.el,
                        t,
                        ['ion-page', 'ion-page-invisible'],
                        n
                    );
                return (
                    (this.activeComponent = t),
                    (this.activeEl = r),
                    (this.activeParams = n),
                    await this.commit(r, i, o),
                    await Ww(this.delegate, i),
                    !0
                );
            }
            async transition(t, n, o = {}) {
                if (n === t) return !1;
                this.ionNavWillChange.emit();
                const { el: i, mode: r } = this,
                    s = this.animated && ae.getBoolean('animated', !0),
                    l =
                        o.animationBuilder ||
                        this.animation ||
                        ae.get('navAnimation');
                return (
                    await tg(
                        Object.assign(
                            Object.assign(
                                {
                                    mode: r,
                                    animated: s,
                                    enteringEl: t,
                                    leavingEl: n,
                                    baseEl: i,
                                    deepWait: ew(i),
                                    progressCallback: o.progressAnimation
                                        ? (a) => {
                                              a !== void 0 &&
                                              !this.gestureOrAnimationInProgress
                                                  ? ((this.gestureOrAnimationInProgress =
                                                        !0),
                                                    a.onFinish(
                                                        () => {
                                                            (this.gestureOrAnimationInProgress =
                                                                !1),
                                                                this.swipeHandler &&
                                                                    this.swipeHandler.onEnd(
                                                                        !1
                                                                    );
                                                        },
                                                        { oneTimeCallback: !0 }
                                                    ),
                                                    a.progressEnd(0, 0, 0))
                                                  : (this.ani = a);
                                          }
                                        : void 0,
                                },
                                o
                            ),
                            { animationBuilder: l }
                        )
                    ),
                    this.ionNavDidChange.emit(),
                    !0
                );
            }
            async lock() {
                const t = this.waitPromise;
                let n;
                return (
                    (this.waitPromise = new Promise((o) => (n = o))),
                    t !== void 0 && (await t),
                    n
                );
            }
            render() {
                return H('slot', null);
            }
            get el() {
                return this;
            }
            static get watchers() {
                return { swipeHandler: ['swipeHandlerChanged'] };
            }
            static get style() {
                return Qx;
            }
        },
        [
            1,
            'ion-router-outlet',
            {
                mode: [1025],
                delegate: [16],
                animated: [4],
                animation: [16],
                swipeHandler: [16],
                commit: [64],
                setRouteId: [64],
                getRouteId: [64],
            },
            void 0,
            { swipeHandler: ['swipeHandlerChanged'] },
        ]
    );
function Xx() {
    if (typeof customElements > 'u') return;
    ['ion-router-outlet'].forEach((t) => {
        switch (t) {
            case 'ion-router-outlet':
                customElements.get(t) || customElements.define(t, Yx);
                break;
        }
    });
}
const qx = Xx;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const Gx =
        ':host{-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom, 0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, #f7f7f7));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, #666666));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:50px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}',
    Zx =
        ':host{-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom, 0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.07))));--color:var(--ion-tab-bar-color, var(--ion-color-step-650, #595959));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:56px}',
    Jx = Tt(
        class extends Pt {
            constructor() {
                super(),
                    this.__registerHost(),
                    this.__attachShadow(),
                    (this.ionTabBarChanged = We(this, 'ionTabBarChanged', 7)),
                    (this.keyboardCtrl = null),
                    (this.keyboardVisible = !1),
                    (this.color = void 0),
                    (this.selectedTab = void 0),
                    (this.translucent = !1);
            }
            selectedTabChanged() {
                this.selectedTab !== void 0 &&
                    this.ionTabBarChanged.emit({ tab: this.selectedTab });
            }
            componentWillLoad() {
                this.selectedTabChanged();
            }
            async connectedCallback() {
                this.keyboardCtrl = await px(async (t, n) => {
                    t === !1 && n !== void 0 && (await n),
                        (this.keyboardVisible = t);
                });
            }
            disconnectedCallback() {
                this.keyboardCtrl && this.keyboardCtrl.destroy();
            }
            render() {
                const { color: t, translucent: n, keyboardVisible: o } = this,
                    i = Qe(this),
                    r = o && this.el.getAttribute('slot') !== 'top';
                return H(
                    Mt,
                    {
                        role: 'tablist',
                        'aria-hidden': r ? 'true' : null,
                        class: Fi(t, {
                            [i]: !0,
                            'tab-bar-translucent': n,
                            'tab-bar-hidden': r,
                        }),
                    },
                    H('slot', null)
                );
            }
            get el() {
                return this;
            }
            static get watchers() {
                return { selectedTab: ['selectedTabChanged'] };
            }
            static get style() {
                return { ios: Gx, md: Zx };
            }
        },
        [
            33,
            'ion-tab-bar',
            {
                color: [513],
                selectedTab: [1, 'selected-tab'],
                translucent: [4],
                keyboardVisible: [32],
            },
            void 0,
            { selectedTab: ['selectedTabChanged'] },
        ]
    );
function e$() {
    if (typeof customElements > 'u') return;
    ['ion-tab-bar'].forEach((t) => {
        switch (t) {
            case 'ion-tab-bar':
                customElements.get(t) || customElements.define(t, Jx);
                break;
        }
    });
}
const t$ = e$;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const n$ =
        ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}::slotted(ion-badge){-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px;padding-top:1px;padding-bottom:1px;top:4px;height:auto;font-size:12px;line-height:16px}@supports (inset-inline-start: 0){::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}}@supports not (inset-inline-start: 0){::slotted(ion-badge){left:calc(50% + 6px)}:host-context([dir=rtl]) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}[dir=rtl] ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}@supports selector(:dir(rtl)){::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 6px)}}}::slotted(ion-icon){margin-top:2px;margin-bottom:2px;font-size:30px}::slotted(ion-icon::before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px;font-weight:500}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:calc(50% + 12px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:calc(50% + 12px)}:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 12px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-bottom) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 12px)}}}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:10px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:calc(50% + 35px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){left:calc(50% + 35px)}:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 35px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-start) ::slotted(ion-badge):dir(rtl),:host(.tab-layout-icon-end) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 35px)}}}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:10px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:calc(50% + 30px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){left:calc(50% + 30px)}:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 30px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-hide) ::slotted(ion-badge):dir(rtl),:host(.tab-has-label-only) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 30px)}}}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}',
    o$ =
        ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:12px;--padding-bottom:0;--padding-start:12px;max-width:168px;font-size:12px;font-weight:normal;letter-spacing:0.03em}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;text-transform:none}::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;-webkit-transform-origin:center center;transform-origin:center center;font-size:22px}:host-context([dir=rtl]) ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){::slotted(ion-icon):dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}::slotted(ion-badge){border-radius:8px;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;padding-top:3px;padding-bottom:2px;top:8px;min-width:12px;font-size:8px;font-weight:normal}@supports (inset-inline-start: 0){::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}}@supports not (inset-inline-start: 0){::slotted(ion-badge){left:calc(50% + 6px)}:host-context([dir=rtl]) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}[dir=rtl] ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}@supports selector(:dir(rtl)){::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 6px)}}}::slotted(ion-badge:empty){display:block;min-width:8px;height:8px}:host(.tab-layout-icon-top) ::slotted(ion-icon){margin-top:6px;margin-bottom:2px}:host(.tab-layout-icon-top) ::slotted(ion-label){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){top:8px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:70%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:70%}:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge){left:unset;right:unset;right:70%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-bottom) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:70%}}}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:6px;margin-bottom:0}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:16px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:80%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){left:80%}:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge){left:unset;right:unset;right:80%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-start) ::slotted(ion-badge):dir(rtl),:host(.tab-layout-icon-end) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:80%}}}:host(.tab-layout-icon-start) ::slotted(ion-icon){-webkit-margin-end:6px;margin-inline-end:6px}:host(.tab-layout-icon-end) ::slotted(ion-icon){-webkit-margin-start:6px;margin-inline-start:6px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:16px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:70%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){left:70%}:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge){left:unset;right:unset;right:70%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-hide) ::slotted(ion-badge):dir(rtl),:host(.tab-has-label-only) ::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:70%}}}:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-has-label-only) ::slotted(ion-label){margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){margin-top:0;margin-bottom:0;font-size:24px}',
    i$ = Tt(
        class extends Pt {
            constructor() {
                super(),
                    this.__registerHost(),
                    this.__attachShadow(),
                    (this.ionTabButtonClick = We(this, 'ionTabButtonClick', 7)),
                    (this.inheritedAttributes = {}),
                    (this.onKeyUp = (t) => {
                        (t.key === 'Enter' || t.key === ' ') && this.selectTab(t);
                    }),
                    (this.onClick = (t) => {
                        this.selectTab(t);
                    }),
                    (this.disabled = !1),
                    (this.download = void 0),
                    (this.href = void 0),
                    (this.rel = void 0),
                    (this.layout = void 0),
                    (this.selected = !1),
                    (this.tab = void 0),
                    (this.target = void 0);
            }
            onTabBarChanged(t) {
                const n = t.target,
                    o = this.el.parentElement;
                (t.composedPath().includes(o) ||
                    (n != null && n.contains(this.el))) &&
                    (this.selected = this.tab === t.detail.tab);
            }
            componentWillLoad() {
                (this.inheritedAttributes = Object.assign(
                    {},
                    qm(this.el, ['aria-label'])
                )),
                    this.layout === void 0 &&
                        (this.layout = ae.get('tabButtonLayout', 'icon-top'));
            }
            selectTab(t) {
                this.tab !== void 0 &&
                    (this.disabled ||
                        this.ionTabButtonClick.emit({
                            tab: this.tab,
                            href: this.href,
                            selected: this.selected,
                        }),
                    t.preventDefault());
            }
            get hasLabel() {
                return !!this.el.querySelector('ion-label');
            }
            get hasIcon() {
                return !!this.el.querySelector('ion-icon');
            }
            render() {
                const {
                        disabled: t,
                        hasIcon: n,
                        hasLabel: o,
                        href: i,
                        rel: r,
                        target: s,
                        layout: l,
                        selected: a,
                        tab: c,
                        inheritedAttributes: u,
                    } = this,
                    d = Qe(this),
                    f = { download: this.download, href: i, rel: r, target: s };
                return H(
                    Mt,
                    {
                        onClick: this.onClick,
                        onKeyup: this.onKeyUp,
                        id: c !== void 0 ? 'tab-button-'.concat(c) : null,
                        class: {
                            [d]: !0,
                            'tab-selected': a,
                            'tab-disabled': t,
                            'tab-has-label': o,
                            'tab-has-icon': n,
                            'tab-has-label-only': o && !n,
                            'tab-has-icon-only': n && !o,
                            ['tab-layout-'.concat(l)]: !0,
                            'ion-activatable': !0,
                            'ion-selectable': !0,
                            'ion-focusable': !0,
                        },
                    },
                    H(
                        'a',
                        Object.assign(
                            {},
                            f,
                            {
                                class: 'button-native',
                                part: 'native',
                                role: 'tab',
                                'aria-selected': a ? 'true' : null,
                                'aria-disabled': t ? 'true' : null,
                                tabindex: t ? '-1' : void 0,
                            },
                            u
                        ),
                        H('span', { class: 'button-inner' }, H('slot', null)),
                        d === 'md' && H('ion-ripple-effect', { type: 'unbounded' })
                    )
                );
            }
            get el() {
                return this;
            }
            static get style() {
                return { ios: n$, md: o$ };
            }
        },
        [
            33,
            'ion-tab-button',
            {
                disabled: [4],
                download: [1],
                href: [1],
                rel: [1],
                layout: [1025],
                selected: [1028],
                tab: [1],
                target: [1],
            },
            [[8, 'ionTabBarChanged', 'onTabBarChanged']],
        ]
    );
function r$() {
    if (typeof customElements > 'u') return;
    ['ion-tab-button', 'ion-ripple-effect'].forEach((t) => {
        switch (t) {
            case 'ion-tab-button':
                customElements.get(t) || customElements.define(t, i$);
                break;
            case 'ion-ripple-effect':
                customElements.get(t) || Zw();
                break;
        }
    });
}
const s$ = r$,
    Zn = {
        allRenderFn: !1,
        cmpDidLoad: !0,
        cmpDidUnload: !1,
        cmpDidUpdate: !0,
        cmpDidRender: !0,
        cmpWillLoad: !0,
        cmpWillUpdate: !0,
        cmpWillRender: !0,
        connectedCallback: !0,
        disconnectedCallback: !0,
        element: !0,
        event: !0,
        hasRenderFn: !0,
        lifecycle: !0,
        hostListener: !0,
        hostListenerTargetWindow: !0,
        hostListenerTargetDocument: !0,
        hostListenerTargetBody: !0,
        hostListenerTargetParent: !1,
        hostListenerTarget: !0,
        member: !0,
        method: !0,
        mode: !0,
        observeAttribute: !0,
        prop: !0,
        propMutable: !0,
        reflect: !0,
        scoped: !0,
        shadowDom: !0,
        slot: !0,
        cssAnnotations: !0,
        state: !0,
        style: !0,
        svg: !0,
        updatable: !0,
        vdomAttribute: !0,
        vdomXlink: !0,
        vdomClass: !0,
        vdomFunctional: !0,
        vdomKey: !0,
        vdomListener: !0,
        vdomRef: !0,
        vdomPropOrAttr: !0,
        vdomRender: !0,
        vdomStyle: !0,
        vdomText: !0,
        watchCallback: !0,
        taskQueue: !0,
        hotModuleReplacement: !1,
        isDebug: !1,
        isDev: !1,
        isTesting: !1,
        hydrateServerSide: !1,
        hydrateClientSide: !1,
        lifecycleDOMEvents: !1,
        lazyLoad: !1,
        profile: !1,
        slotRelocation: !0,
        appendChildSlotFix: !1,
        cloneNodeFix: !1,
        hydratedAttribute: !1,
        hydratedClass: !0,
        safari10: !1,
        scriptDataOpts: !1,
        scopedSlotTextContentFix: !1,
        shadowDomShim: !1,
        slotChildNodesFix: !1,
        invisiblePrehydration: !0,
        propBoolean: !0,
        propNumber: !0,
        propString: !0,
        cssVarShim: !1,
        constructableCSS: !0,
        cmpShouldUpdate: !0,
        devTools: !1,
        dynamicImportShim: !1,
        shadowDelegatesFocus: !0,
        initializeNextTick: !1,
        asyncLoading: !1,
        asyncQueue: !1,
        transformTagName: !1,
        attachStyles: !0,
    };
let Jn,
    yg,
    el,
    bg = !1,
    as = !1,
    pu = !1,
    qe = !1,
    zf = null,
    Qa = !1;
const l$ = (e) => {
        const t = new URL(e, Ie.$resourcesUrl$);
        return t.origin !== Vi.location.origin ? t.href : t.pathname;
    },
    Bn =
        (e, t = '') =>
        () => {},
    Mf = 'http://www.w3.org/1999/xlink',
    Nf = {},
    a$ = 'http://www.w3.org/2000/svg',
    c$ = 'http://www.w3.org/1999/xhtml',
    u$ = (e) => e != null,
    mu = (e) => ((e = typeof e), e === 'object' || e === 'function');
function d$(e) {
    var t, n, o;
    return (o =
        (n =
            (t = e.head) === null || t === void 0
                ? void 0
                : t.querySelector('meta[name="csp-nonce"]')) === null || n === void 0
            ? void 0
            : n.getAttribute('content')) !== null && o !== void 0
        ? o
        : void 0;
}
const fi = (e, t, ...n) => {
        let o = null,
            i = null,
            r = null,
            s = !1,
            l = !1;
        const a = [],
            c = (d) => {
                for (let f = 0; f < d.length; f++)
                    (o = d[f]),
                        Array.isArray(o)
                            ? c(o)
                            : o != null &&
                              typeof o != 'boolean' &&
                              ((s = typeof e != 'function' && !mu(o)) &&
                                  (o = String(o)),
                              s && l
                                  ? (a[a.length - 1].$text$ += o)
                                  : a.push(s ? cs(null, o) : o),
                              (l = s));
            };
        if ((c(n), t)) {
            t.key && (i = t.key), t.name && (r = t.name);
            {
                const d = t.className || t.class;
                d &&
                    (t.class =
                        typeof d != 'object'
                            ? d
                            : Object.keys(d)
                                  .filter((f) => d[f])
                                  .join(' '));
            }
        }
        if (typeof e == 'function') return e(t === null ? {} : t, a, h$);
        const u = cs(e, null);
        return (
            (u.$attrs$ = t),
            a.length > 0 && (u.$children$ = a),
            (u.$key$ = i),
            (u.$name$ = r),
            u
        );
    },
    cs = (e, t) => {
        const n = { $flags$: 0, $tag$: e, $text$: t, $elm$: null, $children$: null };
        return (n.$attrs$ = null), (n.$key$ = null), (n.$name$ = null), n;
    },
    wg = {},
    f$ = (e) => e && e.$tag$ === wg,
    h$ = {
        forEach: (e, t) => e.map(Df).forEach(t),
        map: (e, t) => e.map(Df).map(t).map(p$),
    },
    Df = (e) => ({
        vattrs: e.$attrs$,
        vchildren: e.$children$,
        vkey: e.$key$,
        vname: e.$name$,
        vtag: e.$tag$,
        vtext: e.$text$,
    }),
    p$ = (e) => {
        if (typeof e.vtag == 'function') {
            const n = Object.assign({}, e.vattrs);
            return (
                e.vkey && (n.key = e.vkey),
                e.vname && (n.name = e.vname),
                fi(e.vtag, n, ...(e.vchildren || []))
            );
        }
        const t = cs(e.vtag, e.vtext);
        return (
            (t.$attrs$ = e.vattrs),
            (t.$children$ = e.vchildren),
            (t.$key$ = e.vkey),
            (t.$name$ = e.vname),
            t
        );
    },
    m$ = (e) => H$.map((t) => t(e)).find((t) => !!t),
    g$ = (e, t) =>
        e != null && !mu(e)
            ? t & 4
                ? e === 'false'
                    ? !1
                    : e === '' || !!e
                : t & 2
                ? parseFloat(e)
                : t & 1
                ? String(e)
                : e
            : e,
    Bf = new WeakMap(),
    v$ = (e, t, n) => {
        let o = ds.get(e);
        W$ && n
            ? ((o = o || new CSSStyleSheet()),
              typeof o == 'string' ? (o = t) : o.replaceSync(t))
            : (o = t),
            ds.set(e, o);
    },
    y$ = (e, t, n, o) => {
        var i;
        let r = xg(t, n);
        const s = ds.get(r);
        if (((e = e.nodeType === 11 ? e : St), s))
            if (typeof s == 'string') {
                e = e.head || e;
                let l = Bf.get(e),
                    a;
                if ((l || Bf.set(e, (l = new Set())), !l.has(r))) {
                    {
                        (a = St.createElement('style')), (a.innerHTML = s);
                        const c =
                            (i = Ie.$nonce$) !== null && i !== void 0 ? i : d$(St);
                        c != null && a.setAttribute('nonce', c),
                            e.insertBefore(a, e.querySelector('link'));
                    }
                    l && l.add(r);
                }
            } else
                e.adoptedStyleSheets.includes(s) ||
                    (e.adoptedStyleSheets = [...e.adoptedStyleSheets, s]);
        return r;
    },
    b$ = (e) => {
        const t = e.$cmpMeta$,
            n = e.$hostElement$,
            o = t.$flags$,
            i = Bn('attachStyles', t.$tagName$),
            r = y$(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t, e.$modeName$);
        o & 10 &&
            ((n['s-sc'] = r),
            n.classList.add(r + '-h'),
            o & 2 && n.classList.add(r + '-s')),
            i();
    },
    xg = (e, t) =>
        'sc-' + (t && e.$flags$ & 32 ? e.$tagName$ + '-' + t : e.$tagName$),
    jf = (e, t, n, o, i, r) => {
        if (n !== o) {
            let s = Vf(e, t),
                l = t.toLowerCase();
            if (t === 'class') {
                const a = e.classList,
                    c = Hf(n),
                    u = Hf(o);
                a.remove(...c.filter((d) => d && !u.includes(d))),
                    a.add(...u.filter((d) => d && !c.includes(d)));
            } else if (t === 'style') {
                for (const a in n)
                    (!o || o[a] == null) &&
                        (a.includes('-')
                            ? e.style.removeProperty(a)
                            : (e.style[a] = ''));
                for (const a in o)
                    (!n || o[a] !== n[a]) &&
                        (a.includes('-')
                            ? e.style.setProperty(a, o[a])
                            : (e.style[a] = o[a]));
            } else if (t !== 'key')
                if (t === 'ref') o && o(e);
                else if (!e.__lookupSetter__(t) && t[0] === 'o' && t[1] === 'n')
                    t[2] === '-'
                        ? (t = t.slice(3))
                        : Vf(Vi, l)
                        ? (t = l.slice(2))
                        : (t = l[2] + t.slice(3)),
                        n && Ie.rel(e, t, n, !1),
                        o && Ie.ael(e, t, o, !1);
                else {
                    const a = mu(o);
                    if ((s || (a && o !== null)) && !i)
                        try {
                            if (e.tagName.includes('-')) e[t] = o;
                            else {
                                const u = o == null ? '' : o;
                                t === 'list'
                                    ? (s = !1)
                                    : (n == null || e[t] != u) && (e[t] = u);
                            }
                        } catch (u) {}
                    let c = !1;
                    l !== (l = l.replace(/^xlink\:?/, '')) && ((t = l), (c = !0)),
                        o == null || o === !1
                            ? (o !== !1 || e.getAttribute(t) === '') &&
                              (c ? e.removeAttributeNS(Mf, t) : e.removeAttribute(t))
                            : (!s || r & 4 || i) &&
                              !a &&
                              ((o = o === !0 ? '' : o),
                              c ? e.setAttributeNS(Mf, t, o) : e.setAttribute(t, o));
                }
        }
    },
    w$ = /\s/,
    Hf = (e) => (e ? e.split(w$) : []),
    $g = (e, t, n, o) => {
        const i = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$,
            r = (e && e.$attrs$) || Nf,
            s = t.$attrs$ || Nf;
        for (o in r) o in s || jf(i, o, r[o], void 0, n, t.$flags$);
        for (o in s) jf(i, o, r[o], s[o], n, t.$flags$);
    },
    us = (e, t, n, o) => {
        const i = t.$children$[n];
        let r = 0,
            s,
            l,
            a;
        if (
            (bg ||
                ((pu = !0),
                i.$tag$ === 'slot' &&
                    (Jn && o.classList.add(Jn + '-s'),
                    (i.$flags$ |= i.$children$ ? 2 : 1))),
            i.$text$ !== null)
        )
            s = i.$elm$ = St.createTextNode(i.$text$);
        else if (i.$flags$ & 1) s = i.$elm$ = St.createTextNode('');
        else {
            if (
                (qe || (qe = i.$tag$ === 'svg'),
                (s = i.$elm$ =
                    St.createElementNS(
                        qe ? a$ : c$,
                        i.$flags$ & 2 ? 'slot-fb' : i.$tag$
                    )),
                qe && i.$tag$ === 'foreignObject' && (qe = !1),
                $g(null, i, qe),
                u$(Jn) && s['s-si'] !== Jn && s.classList.add((s['s-si'] = Jn)),
                i.$children$)
            )
                for (r = 0; r < i.$children$.length; ++r)
                    (l = us(e, i, r, s)), l && s.appendChild(l);
            i.$tag$ === 'svg'
                ? (qe = !1)
                : s.tagName === 'foreignObject' && (qe = !0);
        }
        return (
            (s['s-hn'] = el),
            i.$flags$ & 3 &&
                ((s['s-sr'] = !0),
                (s['s-cr'] = yg),
                (s['s-sn'] = i.$name$ || ''),
                (a = e && e.$children$ && e.$children$[n]),
                a && a.$tag$ === i.$tag$ && e.$elm$ && Oi(e.$elm$, !1)),
            s
        );
    },
    Oi = (e, t) => {
        Ie.$flags$ |= 1;
        const n = e.childNodes;
        for (let o = n.length - 1; o >= 0; o--) {
            const i = n[o];
            i['s-hn'] !== el &&
                i['s-ol'] &&
                (Sg(i).insertBefore(i, gu(i)),
                i['s-ol'].remove(),
                (i['s-ol'] = void 0),
                (pu = !0)),
                t && Oi(i, t);
        }
        Ie.$flags$ &= -2;
    },
    kg = (e, t, n, o, i, r) => {
        let s = (e['s-cr'] && e['s-cr'].parentNode) || e,
            l;
        for (s.shadowRoot && s.tagName === el && (s = s.shadowRoot); i <= r; ++i)
            o[i] &&
                ((l = us(null, n, i, e)),
                l && ((o[i].$elm$ = l), s.insertBefore(l, gu(t))));
    },
    Eg = (e, t, n, o, i) => {
        for (; t <= n; ++t)
            (o = e[t]) &&
                ((i = o.$elm$),
                Pg(o),
                (as = !0),
                i['s-ol'] ? i['s-ol'].remove() : Oi(i, !0),
                i.remove());
    },
    x$ = (e, t, n, o) => {
        let i = 0,
            r = 0,
            s = 0,
            l = 0,
            a = t.length - 1,
            c = t[0],
            u = t[a],
            d = o.length - 1,
            f = o[0],
            m = o[d],
            y,
            w;
        for (; i <= a && r <= d; )
            if (c == null) c = t[++i];
            else if (u == null) u = t[--a];
            else if (f == null) f = o[++r];
            else if (m == null) m = o[--d];
            else if (mr(c, f)) eo(c, f), (c = t[++i]), (f = o[++r]);
            else if (mr(u, m)) eo(u, m), (u = t[--a]), (m = o[--d]);
            else if (mr(c, m))
                (c.$tag$ === 'slot' || m.$tag$ === 'slot') &&
                    Oi(c.$elm$.parentNode, !1),
                    eo(c, m),
                    e.insertBefore(c.$elm$, u.$elm$.nextSibling),
                    (c = t[++i]),
                    (m = o[--d]);
            else if (mr(u, f))
                (c.$tag$ === 'slot' || m.$tag$ === 'slot') &&
                    Oi(u.$elm$.parentNode, !1),
                    eo(u, f),
                    e.insertBefore(u.$elm$, c.$elm$),
                    (u = t[--a]),
                    (f = o[++r]);
            else {
                for (s = -1, l = i; l <= a; ++l)
                    if (t[l] && t[l].$key$ !== null && t[l].$key$ === f.$key$) {
                        s = l;
                        break;
                    }
                s >= 0
                    ? ((w = t[s]),
                      w.$tag$ !== f.$tag$
                          ? (y = us(t && t[r], n, s, e))
                          : (eo(w, f), (t[s] = void 0), (y = w.$elm$)),
                      (f = o[++r]))
                    : ((y = us(t && t[r], n, r, e)), (f = o[++r])),
                    y && Sg(c.$elm$).insertBefore(y, gu(c.$elm$));
            }
        i > a
            ? kg(e, o[d + 1] == null ? null : o[d + 1].$elm$, n, o, r, d)
            : r > d && Eg(t, i, a);
    },
    mr = (e, t) =>
        e.$tag$ === t.$tag$
            ? e.$tag$ === 'slot'
                ? e.$name$ === t.$name$
                : e.$key$ === t.$key$
            : !1,
    gu = (e) => (e && e['s-ol']) || e,
    Sg = (e) => (e['s-ol'] ? e['s-ol'] : e).parentNode,
    eo = (e, t) => {
        const n = (t.$elm$ = e.$elm$),
            o = e.$children$,
            i = t.$children$,
            r = t.$tag$,
            s = t.$text$;
        let l;
        s === null
            ? ((qe = r === 'svg' ? !0 : r === 'foreignObject' ? !1 : qe),
              r === 'slot' || $g(e, t, qe),
              o !== null && i !== null
                  ? x$(n, o, t, i)
                  : i !== null
                  ? (e.$text$ !== null && (n.textContent = ''),
                    kg(n, null, t, i, 0, i.length - 1))
                  : o !== null && Eg(o, 0, o.length - 1),
              qe && r === 'svg' && (qe = !1))
            : (l = n['s-cr'])
            ? (l.parentNode.textContent = s)
            : e.$text$ !== s && (n.data = s);
    },
    Cg = (e) => {
        const t = e.childNodes;
        let n, o, i, r, s, l;
        for (o = 0, i = t.length; o < i; o++)
            if (((n = t[o]), n.nodeType === 1)) {
                if (n['s-sr']) {
                    for (s = n['s-sn'], n.hidden = !1, r = 0; r < i; r++)
                        if (
                            ((l = t[r].nodeType),
                            t[r]['s-hn'] !== n['s-hn'] || s !== '')
                        ) {
                            if (l === 1 && s === t[r].getAttribute('slot')) {
                                n.hidden = !0;
                                break;
                            }
                        } else if (
                            l === 1 ||
                            (l === 3 && t[r].textContent.trim() !== '')
                        ) {
                            n.hidden = !0;
                            break;
                        }
                }
                Cg(n);
            }
    },
    xt = [],
    Tg = (e) => {
        let t,
            n,
            o,
            i,
            r,
            s,
            l = 0;
        const a = e.childNodes,
            c = a.length;
        for (; l < c; l++) {
            if (((t = a[l]), t['s-sr'] && (n = t['s-cr']) && n.parentNode))
                for (
                    o = n.parentNode.childNodes, i = t['s-sn'], s = o.length - 1;
                    s >= 0;
                    s--
                )
                    (n = o[s]),
                        !n['s-cn'] &&
                            !n['s-nr'] &&
                            n['s-hn'] !== t['s-hn'] &&
                            (Ff(n, i)
                                ? ((r = xt.find((u) => u.$nodeToRelocate$ === n)),
                                  (as = !0),
                                  (n['s-sn'] = n['s-sn'] || i),
                                  r
                                      ? (r.$slotRefNode$ = t)
                                      : xt.push({
                                            $slotRefNode$: t,
                                            $nodeToRelocate$: n,
                                        }),
                                  n['s-sr'] &&
                                      xt.map((u) => {
                                          Ff(u.$nodeToRelocate$, n['s-sn']) &&
                                              ((r = xt.find(
                                                  (d) => d.$nodeToRelocate$ === n
                                              )),
                                              r &&
                                                  !u.$slotRefNode$ &&
                                                  (u.$slotRefNode$ =
                                                      r.$slotRefNode$));
                                      }))
                                : xt.some((u) => u.$nodeToRelocate$ === n) ||
                                  xt.push({ $nodeToRelocate$: n }));
            t.nodeType === 1 && Tg(t);
        }
    },
    Ff = (e, t) =>
        e.nodeType === 1
            ? (e.getAttribute('slot') === null && t === '') ||
              e.getAttribute('slot') === t
            : e['s-sn'] === t
            ? !0
            : t === '',
    Pg = (e) => {
        e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null),
            e.$children$ && e.$children$.map(Pg);
    },
    $$ = (e, t) => {
        const n = e.$hostElement$,
            o = e.$cmpMeta$,
            i = e.$vnode$ || cs(null, null),
            r = f$(t) ? t : fi(null, null, t);
        (el = n.tagName),
            o.$attrsToReflect$ &&
                ((r.$attrs$ = r.$attrs$ || {}),
                o.$attrsToReflect$.map(([s, l]) => (r.$attrs$[l] = n[s]))),
            (r.$tag$ = null),
            (r.$flags$ |= 4),
            (e.$vnode$ = r),
            (r.$elm$ = i.$elm$ = n.shadowRoot || n),
            (Jn = n['s-sc']),
            (yg = n['s-cr']),
            (bg = (o.$flags$ & 1) !== 0),
            (as = !1),
            eo(i, r);
        {
            if (((Ie.$flags$ |= 1), pu)) {
                Tg(r.$elm$);
                let s,
                    l,
                    a,
                    c,
                    u,
                    d,
                    f = 0;
                for (; f < xt.length; f++)
                    (s = xt[f]),
                        (l = s.$nodeToRelocate$),
                        l['s-ol'] ||
                            ((a = St.createTextNode('')),
                            (a['s-nr'] = l),
                            l.parentNode.insertBefore((l['s-ol'] = a), l));
                for (f = 0; f < xt.length; f++)
                    if (((s = xt[f]), (l = s.$nodeToRelocate$), s.$slotRefNode$)) {
                        for (
                            c = s.$slotRefNode$.parentNode,
                                u = s.$slotRefNode$.nextSibling,
                                a = l['s-ol'];
                            (a = a.previousSibling);

                        )
                            if (
                                ((d = a['s-nr']),
                                d &&
                                    d['s-sn'] === l['s-sn'] &&
                                    c === d.parentNode &&
                                    ((d = d.nextSibling), !d || !d['s-nr']))
                            ) {
                                u = d;
                                break;
                            }
                        ((!u && c !== l.parentNode) || l.nextSibling !== u) &&
                            l !== u &&
                            (!l['s-hn'] &&
                                l['s-ol'] &&
                                (l['s-hn'] = l['s-ol'].parentNode.nodeName),
                            c.insertBefore(l, u));
                    } else l.nodeType === 1 && (l.hidden = !0);
            }
            as && Cg(r.$elm$), (Ie.$flags$ &= -2), (xt.length = 0);
        }
    },
    k$ = (e, t) => {},
    Rg = (e, t) => (
        (e.$flags$ |= 16), k$(e, e.$ancestorComponent$), Y$(() => E$(e, t))
    ),
    E$ = (e, t) => {
        const n = e.$hostElement$,
            o = Bn('scheduleUpdate', e.$cmpMeta$.$tagName$),
            i = n;
        let r;
        return (
            t
                ? (r = xo(i, 'componentWillLoad'))
                : (r = xo(i, 'componentWillUpdate')),
            (r = Uf(r, () => xo(i, 'componentWillRender'))),
            o(),
            Uf(r, () => S$(e, i, t))
        );
    },
    S$ = async (e, t, n) => {
        const o = e.$hostElement$,
            i = Bn('update', e.$cmpMeta$.$tagName$);
        o['s-rc'], n && b$(e);
        const r = Bn('render', e.$cmpMeta$.$tagName$);
        C$(e, t, o), r(), i(), T$(e);
    },
    C$ = (e, t, n) => {
        try {
            (zf = t),
                (t = t.render && t.render()),
                (e.$flags$ &= -17),
                (e.$flags$ |= 2),
                (Zn.hasRenderFn || Zn.reflect) &&
                    (Zn.vdomRender || Zn.reflect) &&
                    (Zn.hydrateServerSide || $$(e, t));
        } catch (l) {
            Ui(l, e.$hostElement$);
        }
        return (zf = null), null;
    },
    T$ = (e) => {
        const t = e.$cmpMeta$.$tagName$,
            n = e.$hostElement$,
            o = Bn('postUpdate', t),
            i = n;
        e.$ancestorComponent$,
            xo(i, 'componentDidRender'),
            e.$flags$ & 64
                ? (xo(i, 'componentDidUpdate'), o())
                : ((e.$flags$ |= 64), xo(i, 'componentDidLoad'), o());
    },
    xo = (e, t, n) => {
        if (e && e[t])
            try {
                return e[t](n);
            } catch (o) {
                Ui(o);
            }
    },
    Uf = (e, t) => (e && e.then ? e.then(t) : t()),
    P$ = (e, t) => tl(e).$instanceValues$.get(t),
    R$ = (e, t, n, o) => {
        const i = tl(e),
            r = e,
            s = i.$instanceValues$.get(t),
            l = i.$flags$,
            a = r;
        n = g$(n, o.$members$[t][0]);
        const c = Number.isNaN(s) && Number.isNaN(n);
        if (n !== s && !c) {
            i.$instanceValues$.set(t, n);
            {
                if (o.$watchers$ && l & 128) {
                    const d = o.$watchers$[t];
                    d &&
                        d.map((f) => {
                            try {
                                a[f](n, s, t);
                            } catch (m) {
                                Ui(m, r);
                            }
                        });
                }
                if ((l & 18) === 2) {
                    if (
                        a.componentShouldUpdate &&
                        a.componentShouldUpdate(n, s, t) === !1
                    )
                        return;
                    Rg(i, !1);
                }
            }
        }
    },
    _$ = (e, t, n) => {
        if (t.$members$) {
            e.watchers && (t.$watchers$ = e.watchers);
            const o = Object.entries(t.$members$),
                i = e.prototype;
            o.map(([r, [s]]) => {
                (s & 31 || s & 32) &&
                    Object.defineProperty(i, r, {
                        get() {
                            return P$(this, r);
                        },
                        set(l) {
                            R$(this, r, l, t);
                        },
                        configurable: !0,
                        enumerable: !0,
                    });
            });
            {
                const r = new Map();
                (i.attributeChangedCallback = function (s, l, a) {
                    Ie.jmp(() => {
                        const c = r.get(s);
                        if (this.hasOwnProperty(c)) (a = this[c]), delete this[c];
                        else if (
                            i.hasOwnProperty(c) &&
                            typeof this[c] == 'number' &&
                            this[c] == a
                        )
                            return;
                        this[c] = a === null && typeof this[c] == 'boolean' ? !1 : a;
                    });
                }),
                    (e.observedAttributes = o
                        .filter(([s, l]) => l[0] & 15)
                        .map(([s, l]) => {
                            const a = l[1] || s;
                            return (
                                r.set(a, s),
                                l[0] & 512 && t.$attrsToReflect$.push([s, a]),
                                a
                            );
                        }));
            }
        }
        return e;
    },
    L$ = async (e, t, n, o, i) => {
        if (
            !(t.$flags$ & 32) &&
            ((i = e.constructor),
            (t.$flags$ |= 32),
            customElements.whenDefined(n.$tagName$).then(() => (t.$flags$ |= 128)),
            i.style)
        ) {
            let s = i.style;
            typeof s != 'string' && (s = s[(t.$modeName$ = m$(e))]);
            const l = xg(n, t.$modeName$);
            if (!ds.has(l)) {
                const a = Bn('registerStyles', n.$tagName$);
                v$(l, s, !!(n.$flags$ & 1)), a();
            }
        }
        t.$ancestorComponent$, (() => Rg(t, !0))();
    },
    I$ = (e) => {},
    O$ = (e) => {
        if (!(Ie.$flags$ & 1)) {
            const t = tl(e),
                n = t.$cmpMeta$,
                o = Bn('connectedCallback', n.$tagName$);
            t.$flags$ & 1
                ? (_g(e, t, n.$listeners$), I$(t.$lazyInstance$))
                : ((t.$flags$ |= 1),
                  n.$flags$ & 12 && A$(e),
                  n.$members$ &&
                      Object.entries(n.$members$).map(([i, [r]]) => {
                          if (r & 31 && e.hasOwnProperty(i)) {
                              const s = e[i];
                              delete e[i], (e[i] = s);
                          }
                      }),
                  L$(e, t, n)),
                o();
        }
    },
    A$ = (e) => {
        const t = (e['s-cr'] = St.createComment(''));
        (t['s-cn'] = !0), e.insertBefore(t, e.firstChild);
    },
    z$ = (e) => {
        if (!(Ie.$flags$ & 1)) {
            const t = tl(e);
            t.$rmListeners$ &&
                (t.$rmListeners$.map((n) => n()), (t.$rmListeners$ = void 0));
        }
    },
    M$ = (e, t) => {
        const n = { $flags$: t[0], $tagName$: t[1] };
        (n.$members$ = t[2]),
            (n.$listeners$ = t[3]),
            (n.$watchers$ = e.$watchers$),
            (n.$attrsToReflect$ = []);
        const o = e.prototype.connectedCallback,
            i = e.prototype.disconnectedCallback;
        return (
            Object.assign(e.prototype, {
                __registerHost() {
                    j$(this, n);
                },
                connectedCallback() {
                    O$(this), o && o.call(this);
                },
                disconnectedCallback() {
                    z$(this), i && i.call(this);
                },
                __attachShadow() {
                    this.attachShadow({
                        mode: 'open',
                        delegatesFocus: !!(n.$flags$ & 16),
                    });
                },
            }),
            (e.is = n.$tagName$),
            _$(e, n)
        );
    },
    _g = (e, t, n, o) => {
        n &&
            n.map(([i, r, s]) => {
                const l = D$(e, i),
                    a = N$(t, s),
                    c = B$(i);
                Ie.ael(l, r, a, c),
                    (t.$rmListeners$ = t.$rmListeners$ || []).push(() =>
                        Ie.rel(l, r, a, c)
                    );
            });
    },
    N$ = (e, t) => (n) => {
        try {
            Zn.lazyLoad || e.$hostElement$[t](n);
        } catch (o) {
            Ui(o);
        }
    },
    D$ = (e, t) => (t & 4 ? St : t & 8 ? Vi : t & 16 ? St.body : e),
    B$ = (e) =>
        U$ ? { passive: (e & 1) !== 0, capture: (e & 2) !== 0 } : (e & 2) !== 0,
    Lg = new WeakMap(),
    tl = (e) => Lg.get(e),
    j$ = (e, t) => {
        const n = {
            $flags$: 0,
            $hostElement$: e,
            $cmpMeta$: t,
            $instanceValues$: new Map(),
        };
        return _g(e, n, t.$listeners$), Lg.set(e, n);
    },
    Vf = (e, t) => t in e,
    Ui = (e, t) => (0, console.error)(e, t),
    ds = new Map(),
    H$ = [],
    Vi = typeof window < 'u' ? window : {},
    St = Vi.document || { head: {} },
    F$ = Vi.HTMLElement || class {},
    Ie = {
        $flags$: 0,
        $resourcesUrl$: '',
        jmp: (e) => e(),
        raf: (e) => requestAnimationFrame(e),
        ael: (e, t, n, o) => e.addEventListener(t, n, o),
        rel: (e, t, n, o) => e.removeEventListener(t, n, o),
        ce: (e, t) => new CustomEvent(e, t),
    },
    U$ = (() => {
        let e = !1;
        try {
            St.addEventListener(
                'e',
                null,
                Object.defineProperty({}, 'passive', {
                    get() {
                        e = !0;
                    },
                })
            );
        } catch (t) {}
        return e;
    })(),
    V$ = (e) => Promise.resolve(e),
    W$ = (() => {
        try {
            return (
                new CSSStyleSheet(),
                typeof new CSSStyleSheet().replaceSync == 'function'
            );
        } catch (e) {}
        return !1;
    })(),
    Wf = [],
    Ig = [],
    K$ = (e, t) => (n) => {
        e.push(n), Qa || ((Qa = !0), t && Ie.$flags$ & 4 ? Q$(Ya) : Ie.raf(Ya));
    },
    Kf = (e) => {
        for (let t = 0; t < e.length; t++)
            try {
                e[t](performance.now());
            } catch (n) {
                Ui(n);
            }
        e.length = 0;
    },
    Ya = () => {
        Kf(Wf), Kf(Ig), (Qa = Wf.length > 0) && Ie.raf(Ya);
    },
    Q$ = (e) => V$().then(e),
    Y$ = K$(Ig, !0);
let Bl;
const X$ = () => {
        if (typeof window > 'u') return new Map();
        if (!Bl) {
            const e = window;
            (e.Ionicons = e.Ionicons || {}),
                (Bl = e.Ionicons.map = e.Ionicons.map || new Map());
        }
        return Bl;
    },
    q$ = (e) => {
        let t = jl(e.src);
        return (
            t ||
            ((t = Og(e.name, e.icon, e.mode, e.ios, e.md)),
            t
                ? G$(t)
                : e.icon && ((t = jl(e.icon)), t || ((t = jl(e.icon[e.mode])), t))
                ? t
                : null)
        );
    },
    G$ = (e) => {
        const t = X$().get(e);
        return t || l$('svg/'.concat(e, '.svg'));
    },
    Og = (e, t, n, o, i) => (
        (n = (n && gr(n)) === 'ios' ? 'ios' : 'md'),
        o && n === 'ios'
            ? (e = gr(o))
            : i && n === 'md'
            ? (e = gr(i))
            : (!e && t && !Ag(t) && (e = t), fs(e) && (e = gr(e))),
        !fs(e) || e.trim() === '' || e.replace(/[a-z]|-|\d/gi, '') !== '' ? null : e
    ),
    jl = (e) => (fs(e) && ((e = e.trim()), Ag(e)) ? e : null),
    Ag = (e) => e.length > 0 && /(\/|\.)/.test(e),
    fs = (e) => typeof e == 'string',
    gr = (e) => e.toLowerCase(),
    Z$ = (e, t = []) => {
        const n = {};
        return (
            t.forEach((o) => {
                e.hasAttribute(o) &&
                    (e.getAttribute(o) !== null && (n[o] = e.getAttribute(o)),
                    e.removeAttribute(o));
            }),
            n
        );
    },
    J$ = (e) =>
        e && e.dir !== ''
            ? e.dir.toLowerCase() === 'rtl'
            : (document == null ? void 0 : document.dir.toLowerCase()) === 'rtl',
    ek = (e) => {
        const t = document.createElement('div');
        t.innerHTML = e;
        for (let o = t.childNodes.length - 1; o >= 0; o--)
            t.childNodes[o].nodeName.toLowerCase() !== 'svg' &&
                t.removeChild(t.childNodes[o]);
        const n = t.firstElementChild;
        if (n && n.nodeName.toLowerCase() === 'svg') {
            const o = n.getAttribute('class') || '';
            if ((n.setAttribute('class', (o + ' s-ion-icon').trim()), zg(n)))
                return t.innerHTML;
        }
        return '';
    },
    zg = (e) => {
        if (e.nodeType === 1) {
            if (e.nodeName.toLowerCase() === 'script') return !1;
            for (let t = 0; t < e.attributes.length; t++) {
                const n = e.attributes[t].name;
                if (fs(n) && n.toLowerCase().indexOf('on') === 0) return !1;
            }
            for (let t = 0; t < e.childNodes.length; t++)
                if (!zg(e.childNodes[t])) return !1;
        }
        return !0;
    },
    tk = (e) => e.startsWith('data:image/svg+xml'),
    nk = (e) => e.indexOf(';utf8,') !== -1,
    Pn = new Map(),
    Qf = new Map();
let Hl;
const ok = (e, t) => {
        let n = Qf.get(e);
        if (!n)
            if (typeof fetch < 'u' && typeof document < 'u')
                if (tk(e) && nk(e)) {
                    Hl || (Hl = new DOMParser());
                    const i = Hl.parseFromString(e, 'text/html').querySelector(
                        'svg'
                    );
                    return i && Pn.set(e, i.outerHTML), Promise.resolve();
                } else
                    (n = fetch(e).then((o) => {
                        if (o.ok)
                            return o.text().then((i) => {
                                i && t !== !1 && (i = ek(i)), Pn.set(e, i || '');
                            });
                        Pn.set(e, '');
                    })),
                        Qf.set(e, n);
            else return Pn.set(e, ''), Promise.resolve();
        return n;
    },
    ik =
        ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}",
    rk = M$(
        class extends F$ {
            constructor() {
                super(),
                    this.__registerHost(),
                    this.__attachShadow(),
                    (this.iconName = null),
                    (this.inheritedAttributes = {}),
                    (this.isVisible = !1),
                    (this.mode = sk()),
                    (this.lazy = !1),
                    (this.sanitize = !0);
            }
            componentWillLoad() {
                this.inheritedAttributes = Z$(this.el, ['aria-label']);
            }
            connectedCallback() {
                this.waitUntilVisible(this.el, '50px', () => {
                    (this.isVisible = !0), this.loadIcon();
                });
            }
            disconnectedCallback() {
                this.io && (this.io.disconnect(), (this.io = void 0));
            }
            waitUntilVisible(e, t, n) {
                if (
                    this.lazy &&
                    typeof window < 'u' &&
                    window.IntersectionObserver
                ) {
                    const o = (this.io = new window.IntersectionObserver(
                        (i) => {
                            i[0].isIntersecting &&
                                (o.disconnect(), (this.io = void 0), n());
                        },
                        { rootMargin: t }
                    ));
                    o.observe(e);
                } else n();
            }
            loadIcon() {
                if (this.isVisible) {
                    const e = q$(this);
                    e &&
                        (Pn.has(e)
                            ? (this.svgContent = Pn.get(e))
                            : ok(e, this.sanitize).then(
                                  () => (this.svgContent = Pn.get(e))
                              ));
                }
                this.iconName = Og(
                    this.name,
                    this.icon,
                    this.mode,
                    this.ios,
                    this.md
                );
            }
            render() {
                const {
                        flipRtl: e,
                        iconName: t,
                        inheritedAttributes: n,
                        el: o,
                    } = this,
                    i = this.mode || 'md',
                    r = t
                        ? (t.includes('arrow') || t.includes('chevron')) && e !== !1
                        : !1,
                    s = e || r;
                return fi(
                    wg,
                    Object.assign(
                        {
                            role: 'img',
                            class: Object.assign(
                                Object.assign({ [i]: !0 }, lk(this.color)),
                                {
                                    ['icon-'.concat(this.size)]: !!this.size,
                                    'flip-rtl': s,
                                    'icon-rtl': s && J$(o),
                                }
                            ),
                        },
                        n
                    ),
                    this.svgContent
                        ? fi('div', {
                              class: 'icon-inner',
                              innerHTML: this.svgContent,
                          })
                        : fi('div', { class: 'icon-inner' })
                );
            }
            static get assetsDirs() {
                return ['svg'];
            }
            get el() {
                return this;
            }
            static get watchers() {
                return {
                    name: ['loadIcon'],
                    src: ['loadIcon'],
                    icon: ['loadIcon'],
                    ios: ['loadIcon'],
                    md: ['loadIcon'],
                };
            }
            static get style() {
                return ik;
            }
        },
        [
            1,
            'ion-icon',
            {
                mode: [1025],
                color: [1],
                ios: [1],
                md: [1],
                flipRtl: [4, 'flip-rtl'],
                name: [513],
                src: [1],
                icon: [8],
                size: [1],
                lazy: [4],
                sanitize: [4],
                svgContent: [32],
                isVisible: [32],
            },
        ]
    ),
    sk = () =>
        (typeof document < 'u' && document.documentElement.getAttribute('mode')) ||
        'md',
    lk = (e) => (e ? { 'ion-color': !0, ['ion-color-'.concat(e)]: !0 } : null);
function ak() {
    if (typeof customElements > 'u') return;
    ['ion-icon'].forEach((t) => {
        switch (t) {
            case 'ion-icon':
                customElements.get(t) || customElements.define(t, rk);
                break;
        }
    });
}
const ck = ak,
    vu = b.createContext({
        onIonViewWillEnter: () => {},
        ionViewWillEnter: () => {},
        onIonViewDidEnter: () => {},
        ionViewDidEnter: () => {},
        onIonViewWillLeave: () => {},
        ionViewWillLeave: () => {},
        onIonViewDidLeave: () => {},
        ionViewDidLeave: () => {},
    }),
    uk = class {
        constructor() {
            (this.ionViewWillEnterCallbacks = []),
                (this.ionViewDidEnterCallbacks = []),
                (this.ionViewWillLeaveCallbacks = []),
                (this.ionViewDidLeaveCallbacks = []);
        }
        onIonViewWillEnter(e) {
            if (e.id) {
                const t = this.ionViewWillEnterCallbacks.findIndex(
                    (n) => n.id === e.id
                );
                t > -1
                    ? (this.ionViewWillEnterCallbacks[t] = e)
                    : this.ionViewWillEnterCallbacks.push(e);
            } else this.ionViewWillEnterCallbacks.push(e);
        }
        ionViewWillEnter() {
            this.ionViewWillEnterCallbacks.forEach((e) => e());
        }
        onIonViewDidEnter(e) {
            if (e.id) {
                const t = this.ionViewDidEnterCallbacks.findIndex(
                    (n) => n.id === e.id
                );
                t > -1
                    ? (this.ionViewDidEnterCallbacks[t] = e)
                    : this.ionViewDidEnterCallbacks.push(e);
            } else this.ionViewDidEnterCallbacks.push(e);
        }
        ionViewDidEnter() {
            this.ionViewDidEnterCallbacks.forEach((e) => e());
        }
        onIonViewWillLeave(e) {
            if (e.id) {
                const t = this.ionViewWillLeaveCallbacks.findIndex(
                    (n) => n.id === e.id
                );
                t > -1
                    ? (this.ionViewWillLeaveCallbacks[t] = e)
                    : this.ionViewWillLeaveCallbacks.push(e);
            } else this.ionViewWillLeaveCallbacks.push(e);
        }
        ionViewWillLeave() {
            this.ionViewWillLeaveCallbacks.forEach((e) => e());
        }
        onIonViewDidLeave(e) {
            if (e.id) {
                const t = this.ionViewDidLeaveCallbacks.findIndex(
                    (n) => n.id === e.id
                );
                t > -1
                    ? (this.ionViewDidLeaveCallbacks[t] = e)
                    : this.ionViewDidLeaveCallbacks.push(e);
            } else this.ionViewDidLeaveCallbacks.push(e);
        }
        ionViewDidLeave() {
            this.ionViewDidLeaveCallbacks.forEach((e) => e()),
                this.componentCanBeDestroyed();
        }
        onComponentCanBeDestroyed(e) {
            this.componentCanBeDestroyedCallback = e;
        }
        componentCanBeDestroyed() {
            this.componentCanBeDestroyedCallback &&
                this.componentCanBeDestroyedCallback();
        }
    },
    qt = b.createContext({
        getIonRedirect: () => {},
        getIonRoute: () => {},
        getPageManager: () => {},
        getStackManager: () => {},
        goBack: (e) => {
            typeof window < 'u' &&
                (typeof e == 'string'
                    ? (window.location.pathname = e)
                    : window.history.back());
        },
        navigate: (e) => {
            typeof window < 'u' && (window.location.pathname = e);
        },
        hasIonicRouter: () => !1,
        routeInfo: void 0,
        setCurrentTab: () => {},
        changeTab: (e, t) => {
            typeof window < 'u' && (window.location.pathname = t);
        },
        resetTab: (e, t) => {
            typeof window < 'u' && (window.location.pathname = t);
        },
    }),
    dk = (e) =>
        e
            .toLowerCase()
            .split('-')
            .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
            .join(''),
    Mg = (e) => e.replace(/([A-Z])/g, (t) => '-'.concat(t[0].toLowerCase())),
    fk = (e, t, n = {}) => {
        if (e instanceof Element) {
            const o = hk(e.classList, t, n);
            o !== '' && (e.className = o),
                Object.keys(t).forEach((i) => {
                    if (
                        !(
                            i === 'children' ||
                            i === 'style' ||
                            i === 'ref' ||
                            i === 'class' ||
                            i === 'className' ||
                            i === 'forwardedRef'
                        )
                    )
                        if (i.indexOf('on') === 0 && i[2] === i[2].toUpperCase()) {
                            const r = i.substring(2),
                                s = r[0].toLowerCase() + r.substring(1);
                            Ng(s) || mk(e, s, t[i]);
                        } else
                            (e[i] = t[i]),
                                typeof t[i] === 'string' &&
                                    e.setAttribute(Mg(i), t[i]);
                });
        }
    },
    hk = (e, t, n) => {
        const o = t.className || t.class,
            i = n.className || n.class,
            r = Fl(e),
            s = Fl(o ? o.split(' ') : []),
            l = Fl(i ? i.split(' ') : []),
            a = [];
        return (
            r.forEach((c) => {
                s.has(c) ? (a.push(c), s.delete(c)) : l.has(c) || a.push(c);
            }),
            s.forEach((c) => a.push(c)),
            a.join(' ')
        );
    },
    pk = (e) => {
        switch (e) {
            case 'doubleclick':
                return 'dblclick';
        }
        return e;
    };
/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */ const Ng = (e) => {
        if (typeof document > 'u') return !0;
        {
            const t = 'on' + pk(e);
            let n = t in document;
            if (!n) {
                const o = document.createElement('div');
                o.setAttribute(t, 'return;'), (n = typeof o[t] == 'function');
            }
            return n;
        }
    },
    mk = (e, t, n) => {
        const o = e.__events || (e.__events = {}),
            i = o[t];
        i && e.removeEventListener(t, i),
            e.addEventListener(
                t,
                (o[t] = function (s) {
                    n && n.call(this, s);
                })
            );
    },
    Fl = (e) => {
        const t = new Map();
        return e.forEach((n) => t.set(n, n)), t;
    },
    gk = (e, t) => {
        typeof e == 'function' ? e(t) : e != null && (e.current = t);
    },
    Dg =
        (...e) =>
        (t) => {
            e.forEach((n) => {
                gk(n, t);
            });
        },
    vk = (e, t) => {
        const n = (o, i) =>
            b.createElement(e, Object.assign({}, o, { forwardedRef: i }));
        return (n.displayName = t), b.forwardRef(n);
    },
    Rt = (e, t, n, o) => {
        o !== void 0 && o();
        const i = dk(e),
            r = class extends b.Component {
                constructor(s) {
                    super(s),
                        (this.setComponentElRef = (l) => {
                            this.componentEl = l;
                        });
                }
                componentDidMount() {
                    this.componentDidUpdate(this.props);
                }
                componentDidUpdate(s) {
                    fk(this.componentEl, this.props, s);
                }
                render() {
                    const s = this.props,
                        {
                            children: l,
                            forwardedRef: a,
                            style: c,
                            className: u,
                            ref: d,
                        } = s,
                        f = ze(s, [
                            'children',
                            'forwardedRef',
                            'style',
                            'className',
                            'ref',
                        ]);
                    let m = Object.keys(f).reduce((w, O) => {
                        const p = f[O];
                        if (O.indexOf('on') === 0 && O[2] === O[2].toUpperCase()) {
                            const h = O.substring(2).toLowerCase();
                            typeof document < 'u' && Ng(h) && (w[O] = p);
                        } else {
                            const h = typeof p;
                            (h === 'string' || h === 'boolean' || h === 'number') &&
                                (w[Mg(O)] = p);
                        }
                        return w;
                    }, {});
                    n && (m = n(this.props, m));
                    const y = Object.assign(Object.assign({}, m), {
                        ref: Dg(a, this.setComponentElRef),
                        style: c,
                    });
                    return ut.createElement(e, y, l);
                }
                static get displayName() {
                    return i;
                }
            };
        return t && (r.contextType = t), vk(r, i);
    },
    yu = Rt('ion-content', void 0, void 0, sx),
    Lo = Rt('ion-header', void 0, void 0, Ex),
    Ul = Rt('ion-label', void 0, void 0, Sx),
    Io = Rt('ion-title', void 0, void 0, zx),
    Oo = Rt('ion-toolbar', void 0, void 0, jx),
    Wi = (e, t) => {
        const n = (o, i) =>
            b.createElement(e, Object.assign({}, o, { forwardedRef: i }));
        return (n.displayName = t), b.forwardRef(n);
    },
    bu = () => {
        if (typeof window < 'u') {
            const e = window.Ionic;
            if (e && e.config) return e.config;
        }
        return null;
    },
    yk = b.createContext({ addOverlay: () => {}, removeOverlay: () => {} }),
    bk = ({ onAddOverlay: e, onRemoveOverlay: t }) => {
        const [n, o] = ut.useState({}),
            i = ut.useRef({});
        ut.useEffect(() => {
            e(r), t(s);
        }, []);
        const r = (a, c, u) => {
                const d = Object.assign({}, i.current);
                (d[a] = { component: c, containerElement: u }),
                    (i.current = d),
                    o(d);
            },
            s = (a) => {
                const c = Object.assign({}, i.current);
                delete c[a], (i.current = c), o(c);
            },
            l = Object.keys(n);
        return b.createElement(
            b.Fragment,
            null,
            l.map((a) => {
                const c = n[a];
                return G0.createPortal(
                    c.component,
                    c.containerElement,
                    'overlay-'.concat(a)
                );
            })
        );
    },
    wk = Rt('ion-tab-button', void 0, void 0, s$),
    xk = Rt('ion-tab-bar', void 0, void 0, t$),
    Xa = Rt('ion-router-outlet', void 0, void 0, qx),
    $k = Rt('ion-app', void 0, void 0, Kx),
    kk = Rt('ion-icon', void 0, void 0, ck),
    Ek = (() =>
        class extends b.Component {
            constructor(e) {
                super(e),
                    (this.ionContext = {
                        addOverlay: (t, n, o) => {
                            this.addOverlayCallback &&
                                this.addOverlayCallback(t, n, o);
                        },
                        removeOverlay: (t) => {
                            this.removeOverlayCallback &&
                                this.removeOverlayCallback(t);
                        },
                    });
            }
            render() {
                return b.createElement(
                    yk.Provider,
                    { value: this.ionContext },
                    b.createElement(
                        $k,
                        Object.assign({}, this.props),
                        this.props.children
                    ),
                    b.createElement(bk, {
                        onAddOverlay: (e) => {
                            this.addOverlayCallback = e;
                        },
                        onRemoveOverlay: (e) => {
                            this.removeOverlayCallback = e;
                        },
                    })
                );
            }
            static get displayName() {
                return 'IonApp';
            }
        })(),
    wu = b.createContext({ registerIonPage: () => {}, isInOutlet: () => !1 });
class xu extends b.PureComponent {
    constructor(t) {
        super(t),
            (this.ionPageElementRef = b.createRef()),
            (this.stableMergedRefs = Dg(
                this.ionPageElementRef,
                this.props.forwardedRef
            ));
    }
    componentDidMount() {
        this.ionPageElementRef.current &&
            (this.context.isInOutlet() &&
                this.ionPageElementRef.current.classList.add('ion-page-invisible'),
            this.context.registerIonPage(
                this.ionPageElementRef.current,
                this.props.routeInfo
            ),
            this.ionPageElementRef.current.addEventListener(
                'ionViewWillEnter',
                this.ionViewWillEnterHandler.bind(this)
            ),
            this.ionPageElementRef.current.addEventListener(
                'ionViewDidEnter',
                this.ionViewDidEnterHandler.bind(this)
            ),
            this.ionPageElementRef.current.addEventListener(
                'ionViewWillLeave',
                this.ionViewWillLeaveHandler.bind(this)
            ),
            this.ionPageElementRef.current.addEventListener(
                'ionViewDidLeave',
                this.ionViewDidLeaveHandler.bind(this)
            ));
    }
    componentWillUnmount() {
        this.ionPageElementRef.current &&
            (this.ionPageElementRef.current.removeEventListener(
                'ionViewWillEnter',
                this.ionViewWillEnterHandler.bind(this)
            ),
            this.ionPageElementRef.current.removeEventListener(
                'ionViewDidEnter',
                this.ionViewDidEnterHandler.bind(this)
            ),
            this.ionPageElementRef.current.removeEventListener(
                'ionViewWillLeave',
                this.ionViewWillLeaveHandler.bind(this)
            ),
            this.ionPageElementRef.current.removeEventListener(
                'ionViewDidLeave',
                this.ionViewDidLeaveHandler.bind(this)
            ));
    }
    ionViewWillEnterHandler() {
        this.ionLifeCycleContext.ionViewWillEnter();
    }
    ionViewDidEnterHandler() {
        this.ionLifeCycleContext.ionViewDidEnter();
    }
    ionViewWillLeaveHandler() {
        this.ionLifeCycleContext.ionViewWillLeave();
    }
    ionViewDidLeaveHandler() {
        this.ionLifeCycleContext.ionViewDidLeave();
    }
    render() {
        const t = this.props,
            { className: n, children: o, routeInfo: i, forwardedRef: r } = t,
            s = ze(t, ['className', 'children', 'routeInfo', 'forwardedRef']);
        return b.createElement(
            vu.Consumer,
            null,
            (l) => (
                (this.ionLifeCycleContext = l),
                b.createElement(
                    'div',
                    Object.assign(
                        {
                            className: n ? ''.concat(n, ' ion-page') : 'ion-page',
                            ref: this.stableMergedRefs,
                        },
                        s
                    ),
                    o
                )
            )
        );
    }
    static get contextType() {
        return wu;
    }
}
class Sk extends b.Component {
    constructor(t) {
        super(t);
    }
    render() {
        const t = this.props,
            { className: n, children: o, forwardedRef: i } = t,
            r = ze(t, ['className', 'children', 'forwardedRef']);
        return this.context.hasIonicRouter()
            ? b.createElement(
                  xu,
                  Object.assign(
                      {
                          className: n ? ''.concat(n) : '',
                          routeInfo: this.context.routeInfo,
                          forwardedRef: i,
                      },
                      r
                  ),
                  o
              )
            : b.createElement(
                  'div',
                  Object.assign(
                      { className: n ? 'ion-page '.concat(n) : 'ion-page', ref: i },
                      r
                  ),
                  o
              );
    }
    static get displayName() {
        return 'IonPage';
    }
    static get contextType() {
        return qt;
    }
}
const $u = Wi(Sk, 'IonPage'),
    Ck = (e, t) => {
        const n = new WeakMap();
        return {
            attachViewToDom: async (r, s, l, a) => {
                const c = document.createElement('div');
                a && c.classList.add(...a), r.appendChild(c);
                const u = s(l),
                    d = Kc.createPortal(u, c);
                return n.set(c, d), e(d), Promise.resolve(c);
            },
            removeViewFromDom: (r, s) => {
                const l = n.get(s);
                return l && t(l), s.remove(), Promise.resolve();
            },
        };
    },
    Tk = Rt('ion-nav', void 0, void 0, _x),
    Pk = (e) => {
        var { children: t, forwardedRef: n } = e,
            o = ze(e, ['children', 'forwardedRef']);
        const [i, r] = ut.useState([]),
            s = (c) => r((u) => [...u, c]),
            l = (c) => r((u) => u.filter((d) => d !== c)),
            a = ut.useMemo(() => Ck(s, l), []);
        return b.createElement(Tk, Object.assign({ delegate: a, ref: n }, o), i);
    };
Wi(Pk, 'IonNav');
const Rk = b.createContext({ activeTab: void 0, selectTab: () => !1 }),
    _k = typeof HTMLElement < 'u' ? HTMLElement : class {};
class Lk extends b.Component {
    constructor(t) {
        super(t), (this.outletIsReady = !1);
    }
    componentDidMount() {
        this.ionRouterOutlet &&
            (this.outletIsReady ||
                Ii(this.ionRouterOutlet, () => {
                    (this.outletIsReady = !0),
                        this.context.registerIonPage(
                            this.ionRouterOutlet,
                            this.props.routeInfo
                        );
                }),
            this.ionRouterOutlet.addEventListener(
                'ionViewWillEnter',
                this.ionViewWillEnterHandler.bind(this)
            ),
            this.ionRouterOutlet.addEventListener(
                'ionViewDidEnter',
                this.ionViewDidEnterHandler.bind(this)
            ),
            this.ionRouterOutlet.addEventListener(
                'ionViewWillLeave',
                this.ionViewWillLeaveHandler.bind(this)
            ),
            this.ionRouterOutlet.addEventListener(
                'ionViewDidLeave',
                this.ionViewDidLeaveHandler.bind(this)
            ));
    }
    componentWillUnmount() {
        this.ionRouterOutlet &&
            (this.ionRouterOutlet.removeEventListener(
                'ionViewWillEnter',
                this.ionViewWillEnterHandler.bind(this)
            ),
            this.ionRouterOutlet.removeEventListener(
                'ionViewDidEnter',
                this.ionViewDidEnterHandler.bind(this)
            ),
            this.ionRouterOutlet.removeEventListener(
                'ionViewWillLeave',
                this.ionViewWillLeaveHandler.bind(this)
            ),
            this.ionRouterOutlet.removeEventListener(
                'ionViewDidLeave',
                this.ionViewDidLeaveHandler.bind(this)
            ));
    }
    ionViewWillEnterHandler() {
        this.ionLifeCycleContext.ionViewWillEnter();
    }
    ionViewDidEnterHandler() {
        this.ionLifeCycleContext.ionViewDidEnter();
    }
    ionViewWillLeaveHandler() {
        this.ionLifeCycleContext.ionViewWillLeave();
    }
    ionViewDidLeaveHandler() {
        this.ionLifeCycleContext.ionViewDidLeave();
    }
    render() {
        const t = this.props,
            { StackManager: n, children: o, routeInfo: i } = t,
            r = ze(t, ['StackManager', 'children', 'routeInfo']);
        return b.createElement(
            vu.Consumer,
            null,
            (s) => (
                (this.ionLifeCycleContext = s),
                b.createElement(
                    n,
                    { routeInfo: i },
                    b.createElement(
                        Xa,
                        Object.assign(
                            { setRef: (l) => (this.ionRouterOutlet = l) },
                            r
                        ),
                        o
                    )
                )
            )
        );
    }
    static get contextType() {
        return wu;
    }
}
class Ik extends b.Component {
    constructor(t) {
        super(t);
    }
    render() {
        const t = this.context.getStackManager(),
            n = this.props,
            { children: o, forwardedRef: i } = n,
            r = ze(n, ['children', 'forwardedRef']);
        return this.context.hasIonicRouter()
            ? r.ionPage
                ? b.createElement(
                      Lk,
                      Object.assign(
                          { StackManager: t, routeInfo: this.context.routeInfo },
                          r
                      ),
                      o
                  )
                : b.createElement(
                      t,
                      { routeInfo: this.context.routeInfo },
                      b.createElement(
                          Xa,
                          Object.assign({}, r, { forwardedRef: i }),
                          o
                      )
                  )
            : b.createElement(
                  Xa,
                  Object.assign({ ref: i }, this.props),
                  this.props.children
              );
    }
    static get contextType() {
        return qt;
    }
}
const qa = Wi(Ik, 'IonRouterOutlet'),
    $o = (() =>
        class extends b.Component {
            constructor(e) {
                super(e),
                    (this.handleIonTabButtonClick =
                        this.handleIonTabButtonClick.bind(this));
            }
            handleIonTabButtonClick() {
                this.props.onClick &&
                    this.props.onClick(
                        new CustomEvent('ionTabButtonClick', {
                            detail: {
                                tab: this.props.tab,
                                href: this.props.href,
                                routeOptions: this.props.routerOptions,
                            },
                        })
                    );
            }
            render() {
                const e = this.props,
                    t = ze(e, ['onClick']);
                return b.createElement(
                    wk,
                    Object.assign(
                        { onIonTabButtonClick: this.handleIonTabButtonClick },
                        t
                    )
                );
            }
            static get displayName() {
                return 'IonTabButton';
            }
        })();
class Ok extends b.PureComponent {
    constructor(t) {
        super(t), (this.setActiveTabOnContext = (o) => {});
        const n = {};
        b.Children.forEach(t.children, (o) => {
            var i, r, s, l;
            o != null &&
                typeof o == 'object' &&
                o.props &&
                (o.type === $o || o.type.isTabButton) &&
                (n[o.props.tab] = {
                    originalHref: o.props.href,
                    currentHref: o.props.href,
                    originalRouteOptions:
                        o.props.href ===
                        ((i = t.routeInfo) === null || i === void 0
                            ? void 0
                            : i.pathname)
                            ? (r = t.routeInfo) === null || r === void 0
                                ? void 0
                                : r.routeOptions
                            : void 0,
                    currentRouteOptions:
                        o.props.href ===
                        ((s = t.routeInfo) === null || s === void 0
                            ? void 0
                            : s.pathname)
                            ? (l = t.routeInfo) === null || l === void 0
                                ? void 0
                                : l.routeOptions
                            : void 0,
                });
        }),
            (this.state = { tabs: n }),
            (this.onTabButtonClick = this.onTabButtonClick.bind(this)),
            (this.renderTabButton = this.renderTabButton.bind(this)),
            (this.setActiveTabOnContext = this.setActiveTabOnContext.bind(this)),
            (this.selectTab = this.selectTab.bind(this));
    }
    componentDidMount() {
        const t = this.state.tabs,
            o = Object.keys(t).find((i) => {
                const r = t[i].originalHref;
                return this.props.routeInfo.pathname.startsWith(r);
            });
        o && this.setState({ activeTab: o });
    }
    componentDidUpdate() {
        this.state.activeTab && this.setActiveTabOnContext(this.state.activeTab);
    }
    selectTab(t) {
        const n = this.state.tabs[t];
        return n
            ? (this.onTabButtonClick(
                  new CustomEvent('ionTabButtonClick', {
                      detail: {
                          href: n.currentHref,
                          tab: t,
                          selected: t === this.state.activeTab,
                          routeOptions: void 0,
                      },
                  })
              ),
              !0)
            : !1;
    }
    static getDerivedStateFromProps(t, n) {
        var o, i, r;
        const s = Object.assign({}, n.tabs),
            a = Object.keys(n.tabs).find((u) => {
                const d = n.tabs[u].originalHref;
                return t.routeInfo.pathname.startsWith(d);
            });
        b.Children.forEach(t.children, (u) => {
            if (
                u != null &&
                typeof u == 'object' &&
                u.props &&
                (u.type === $o || u.type.isTabButton)
            ) {
                const d = s[u.props.tab];
                (!d || d.originalHref !== u.props.href) &&
                    (s[u.props.tab] = {
                        originalHref: u.props.href,
                        currentHref: u.props.href,
                        originalRouteOptions: u.props.routeOptions,
                        currentRouteOptions: u.props.routeOptions,
                    });
            }
        });
        const { activeTab: c } = n;
        if (a && c) {
            const u = n.tabs[c].currentHref,
                d = n.tabs[c].currentRouteOptions;
            (a !== c ||
                u !==
                    ((o = t.routeInfo) === null || o === void 0
                        ? void 0
                        : o.pathname) ||
                d !==
                    ((i = t.routeInfo) === null || i === void 0
                        ? void 0
                        : i.routeOptions)) &&
                ((s[a] = {
                    originalHref: s[a].originalHref,
                    currentHref: t.routeInfo.pathname + (t.routeInfo.search || ''),
                    originalRouteOptions: s[a].originalRouteOptions,
                    currentRouteOptions:
                        (r = t.routeInfo) === null || r === void 0
                            ? void 0
                            : r.routeOptions,
                }),
                t.routeInfo.routeAction === 'pop' &&
                    a !== c &&
                    (s[c] = {
                        originalHref: s[c].originalHref,
                        currentHref: s[c].originalHref,
                        originalRouteOptions: s[c].originalRouteOptions,
                        currentRouteOptions: s[c].currentRouteOptions,
                    }));
        }
        return a && t.onSetCurrentTab(a, t.routeInfo), { activeTab: a, tabs: s };
    }
    onTabButtonClick(t, n) {
        const o = this.state.tabs[t.detail.tab],
            i = o.originalHref,
            r = t.detail.href,
            { activeTab: s } = this.state;
        n && n(t),
            s === t.detail.tab
                ? i !== r &&
                  this.context.resetTab(t.detail.tab, i, o.originalRouteOptions)
                : (this.props.onIonTabsWillChange &&
                      this.props.onIonTabsWillChange(
                          new CustomEvent('ionTabWillChange', {
                              detail: { tab: t.detail.tab },
                          })
                      ),
                  this.props.onIonTabsDidChange &&
                      this.props.onIonTabsDidChange(
                          new CustomEvent('ionTabDidChange', {
                              detail: { tab: t.detail.tab },
                          })
                      ),
                  this.setActiveTabOnContext(t.detail.tab),
                  this.context.changeTab(t.detail.tab, r, t.detail.routeOptions));
    }
    renderTabButton(t) {
        return (n) => {
            var o, i;
            if (n != null && n.props && (n.type === $o || n.type.isTabButton)) {
                const r =
                        n.props.tab === t
                            ? (o = this.props.routeInfo) === null || o === void 0
                                ? void 0
                                : o.pathname
                            : this.state.tabs[n.props.tab].currentHref,
                    s =
                        n.props.tab === t
                            ? (i = this.props.routeInfo) === null || i === void 0
                                ? void 0
                                : i.routeOptions
                            : this.state.tabs[n.props.tab].currentRouteOptions;
                return b.cloneElement(n, {
                    href: r,
                    routeOptions: s,
                    onClick: (l) => this.onTabButtonClick(l, n.props.onClick),
                });
            }
            return null;
        };
    }
    render() {
        const { activeTab: t } = this.state;
        return b.createElement(
            xk,
            Object.assign({}, this.props, { selectedTab: t }),
            b.Children.map(this.props.children, this.renderTabButton(t))
        );
    }
    static get contextType() {
        return qt;
    }
}
const Ak = b.memo((e) => {
        var { forwardedRef: t } = e,
            n = ze(e, ['forwardedRef']);
        const o = ut.useContext(qt);
        return b.createElement(
            Ok,
            Object.assign({ ref: t }, n, {
                routeInfo: n.routeInfo ||
                    o.routeInfo || { pathname: window.location.pathname },
                onSetCurrentTab: o.setCurrentTab,
            }),
            n.children
        );
    }),
    Ga = Wi(Ak, 'IonTabBar');
class zk extends _k {
    constructor() {
        super();
    }
}
typeof window < 'u' &&
    window.customElements &&
    (window.customElements.get('ion-tabs') ||
        window.customElements.define('ion-tabs', zk));
const Yf = {
        display: 'flex',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        contain: 'layout size style',
    },
    Xf = { position: 'relative', flex: 1, contain: 'layout size style' },
    Mk = (() =>
        class extends b.Component {
            constructor(e) {
                super(e),
                    (this.routerOutletRef = b.createRef()),
                    (this.tabBarRef = b.createRef()),
                    (this.ionTabContextState = {
                        activeTab: void 0,
                        selectTab: () => !1,
                    });
            }
            componentDidMount() {
                this.tabBarRef.current &&
                    ((this.ionTabContextState.activeTab =
                        this.tabBarRef.current.state.activeTab),
                    (this.tabBarRef.current.setActiveTabOnContext = (e) => {
                        this.ionTabContextState.activeTab = e;
                    }),
                    (this.ionTabContextState.selectTab =
                        this.tabBarRef.current.selectTab));
            }
            render() {
                let e, t;
                const n = this.props,
                    {
                        className: o,
                        onIonTabsDidChange: i,
                        onIonTabsWillChange: r,
                    } = n,
                    s = ze(n, [
                        'className',
                        'onIonTabsDidChange',
                        'onIonTabsWillChange',
                    ]),
                    l =
                        typeof this.props.children == 'function'
                            ? this.props.children(this.ionTabContextState)
                            : this.props.children;
                if (
                    (b.Children.forEach(l, (a) => {
                        if (
                            a == null ||
                            typeof a != 'object' ||
                            !a.hasOwnProperty('type')
                        )
                            return;
                        a.type === qa || a.type.isRouterOutlet
                            ? (e = b.cloneElement(a))
                            : a.type === ut.Fragment &&
                              a.props.children[0].type === qa &&
                              (e = a.props.children[0]);
                        let c = { ref: this.tabBarRef };
                        i !== void 0 &&
                            (c = Object.assign(Object.assign({}, c), {
                                onIonTabsDidChange: i,
                            })),
                            r !== void 0 &&
                                (c = Object.assign(Object.assign({}, c), {
                                    onIonTabsWillChange: r,
                                })),
                            a.type === Ga || a.type.isTabBar
                                ? (t = b.cloneElement(a, c))
                                : a.type === ut.Fragment &&
                                  (a.props.children[1].type === Ga ||
                                      a.props.children[1].type.isTabBar) &&
                                  (t = b.cloneElement(a.props.children[1], c));
                    }),
                    !e)
                )
                    throw new Error('IonTabs must contain an IonRouterOutlet');
                if (!t) throw new Error('IonTabs needs a IonTabBar');
                return b.createElement(
                    Rk.Provider,
                    { value: this.ionTabContextState },
                    this.context.hasIonicRouter()
                        ? b.createElement(
                              xu,
                              Object.assign(
                                  {
                                      className: o ? ''.concat(o) : '',
                                      routeInfo: this.context.routeInfo,
                                  },
                                  s
                              ),
                              b.createElement(
                                  'ion-tabs',
                                  { className: 'ion-tabs', style: Yf },
                                  t.props.slot === 'top' ? t : null,
                                  b.createElement(
                                      'div',
                                      { style: Xf, className: 'tabs-inner' },
                                      e
                                  ),
                                  t.props.slot === 'bottom' ? t : null
                              )
                          )
                        : b.createElement(
                              'div',
                              Object.assign(
                                  { className: o ? ''.concat(o) : 'ion-tabs' },
                                  s,
                                  { style: Yf }
                              ),
                              t.props.slot === 'top' ? t : null,
                              b.createElement(
                                  'div',
                                  { style: Xf, className: 'tabs-inner' },
                                  e
                              ),
                              t.props.slot === 'bottom' ? t : null
                          )
                );
            }
            static get contextType() {
                return qt;
            }
        })();
class Nk extends b.PureComponent {
    constructor(t) {
        super(t),
            this.props.name &&
                console.warn(
                    'In Ionic React, you import icons from "ionicons/icons" and set the icon you imported to the "icon" property. Setting the "name" property has no effect.'
                );
    }
    render() {
        var t, n;
        const o = this.props,
            { icon: i, ios: r, md: s, mode: l } = o,
            a = ze(o, ['icon', 'ios', 'md', 'mode']);
        let c;
        const u = bu(),
            d = l || (u == null ? void 0 : u.get('mode'));
        return (
            r || s
                ? d === 'ios'
                    ? (c = (t = r != null ? r : s) !== null && t !== void 0 ? t : i)
                    : (c = (n = s != null ? s : r) !== null && n !== void 0 ? n : i)
                : (c = i),
            b.createElement(
                kk,
                Object.assign({ ref: this.props.forwardedRef, icon: c }, a),
                this.props.children
            )
        );
    }
    static get contextType() {
        return qt;
    }
}
const Vl = Wi(Nk, 'IonIcon');
class ku extends b.PureComponent {
    render() {
        const t = this.context.getIonRoute();
        return !this.context.hasIonicRouter() || !ku
            ? (console.error(
                  'You either do not have an Ionic Router package, or your router does not support using <IonRoute>'
              ),
              null)
            : b.createElement(t, Object.assign({}, this.props));
    }
    static get contextType() {
        return qt;
    }
}
class Bg extends b.PureComponent {
    render() {
        const t = this.context.getIonRedirect();
        return !this.context.hasIonicRouter() || !Bg
            ? (console.error(
                  'You either do not have an Ionic Router package, or your router does not support using <IonRedirect>'
              ),
              null)
            : b.createElement(t, Object.assign({}, this.props));
    }
    static get contextType() {
        return qt;
    }
}
const Dk = b.createContext({
    routeInfo: void 0,
    push: () => {
        throw new Error('An Ionic Router is required for IonRouterContext');
    },
    back: () => {
        throw new Error('An Ionic Router is required for IonRouterContext');
    },
    canGoBack: () => {
        throw new Error('An Ionic Router is required for IonRouterContext');
    },
    nativeBack: () => {
        throw new Error('An Ionic Router is required for IonRouterContext');
    },
});
class RE extends b.PureComponent {
    constructor(t) {
        super(t), (this.nodes = new Map()), (this.animation = uw(t.id));
    }
    setupAnimation(t) {
        const n = this.animation;
        this.nodes.size > 0 && n.addElement(Array.from(this.nodes.values())),
            qf(n, t),
            Gf(n, t);
    }
    componentDidMount() {
        const t = this.props;
        this.setupAnimation(t);
    }
    componentDidUpdate(t) {
        const n = this.animation,
            o = this.props;
        qf(n, o, t), Bk(n, o, t), Gf(n, o, t);
    }
    render() {
        const { children: t } = this.props;
        return b.createElement(
            b.Fragment,
            null,
            b.Children.map(t, (n, o) =>
                b.cloneElement(n, { ref: (i) => this.nodes.set(o, i) })
            )
        );
    }
}
const qf = (e, t = {}, n = {}) => {
        const o = [
            'children',
            'progressStart',
            'progressStep',
            'progressEnd',
            'pause',
            'stop',
            'destroy',
            'play',
            'from',
            'to',
            'fromTo',
            'onFinish',
        ];
        for (const a in t)
            t.hasOwnProperty(a) && !o.includes(a) && t[a] !== n[a] && e[a](t[a]);
        const i = t.from;
        i &&
            i !== n.from &&
            (Array.isArray(i) ? i : [i]).forEach((c) => e.from(c.property, c.value));
        const r = t.to;
        r &&
            r !== n.to &&
            (Array.isArray(r) ? r : [r]).forEach((c) => e.to(c.property, c.value));
        const s = t.fromTo;
        s &&
            s !== n.fromTo &&
            (Array.isArray(s) ? s : [s]).forEach((c) =>
                e.fromTo(c.property, c.fromValue, c.toValue)
            );
        const l = t.onFinish;
        l &&
            l !== n.onFinish &&
            (Array.isArray(l) ? l : [l]).forEach((c) =>
                e.onFinish(c.callback, c.opts)
            );
    },
    Bk = (e, t = {}, n = {}) => {
        var o, i, r, s, l;
        const { progressStart: a, progressStep: c, progressEnd: u } = t;
        a &&
            (((o = n.progressStart) === null || o === void 0
                ? void 0
                : o.forceLinearEasing) !==
                (a == null ? void 0 : a.forceLinearEasing) ||
                ((i = n.progressStart) === null || i === void 0
                    ? void 0
                    : i.step) !== (a == null ? void 0 : a.step)) &&
            e.progressStart(a.forceLinearEasing, a.step),
            c &&
                ((r = n.progressStep) === null || r === void 0 ? void 0 : r.step) !==
                    (c == null ? void 0 : c.step) &&
                e.progressStep(c.step),
            u &&
                (((s = n.progressEnd) === null || s === void 0
                    ? void 0
                    : s.playTo) !== (u == null ? void 0 : u.playTo) ||
                    ((l = n.progressEnd) === null || l === void 0
                        ? void 0
                        : l.step) !== (u == null ? void 0 : u.step) ||
                    (n == null ? void 0 : n.dur) !== (u == null ? void 0 : u.dur)) &&
                e.progressEnd(u.playTo, u.step, u.dur);
    },
    Gf = (e, t = {}, n = {}) => {
        !n.play && t.play && e.play(),
            !n.pause && t.pause && e.pause(),
            !n.stop && t.stop && e.stop(),
            !n.destroy && t.destroy && e.destroy();
    },
    Zf = { main: 0 },
    hs = (e = 'main') => {
        var t;
        const n = ((t = Zf[e]) !== null && t !== void 0 ? t : 0) + 1;
        return (Zf[e] = n), n.toString();
    },
    jk = (e = {}) => {
        typeof document < 'u' && document.documentElement.classList.add('ion-ce'),
            Vw(Object.assign({}, e));
    },
    jg = b.createContext({
        addViewItem: () => {},
        canGoBack: () => {},
        clearOutlet: () => {},
        createViewItem: () => {},
        findViewItemByPathname: () => {},
        findLeavingViewItemByRouteInfo: () => {},
        findViewItemByRouteInfo: () => {},
        getChildrenToRender: () => {},
        goBack: () => {},
        unMountViewItem: () => {},
    });
class Jf extends b.Component {
    constructor(t) {
        super(t),
            (this.ionLifeCycleContext = new uk()),
            (this._isMounted = !1),
            this.ionLifeCycleContext.onComponentCanBeDestroyed(() => {
                this.props.mount ||
                    (this._isMounted &&
                        this.setState({ show: !1 }, () => this.props.removeView()));
            }),
            (this.state = { show: !0 });
    }
    componentDidMount() {
        this._isMounted = !0;
    }
    componentWillUnmount() {
        this._isMounted = !1;
    }
    render() {
        const { show: t } = this.state;
        return b.createElement(
            vu.Provider,
            { value: this.ionLifeCycleContext },
            t && this.props.children
        );
    }
}
class Hk {
    constructor() {
        (this.locationHistory = []), (this.tabHistory = {});
    }
    add(t) {
        t.routeAction === 'push' || t.routeAction == null
            ? this._add(t)
            : t.routeAction === 'pop'
            ? this._pop(t)
            : t.routeAction === 'replace' && this._replace(t),
            t.routeDirection === 'root' && (this._clear(), this._add(t));
    }
    clearTabStack(t) {
        const n = this._getRouteInfosByKey(t);
        n &&
            (n.forEach((o) => {
                this.locationHistory = this.locationHistory.filter(
                    (i) => i.id !== o.id
                );
            }),
            (this.tabHistory[t] = []));
    }
    update(t) {
        const n = this.locationHistory.findIndex((i) => i.id === t.id);
        n > -1 && this.locationHistory.splice(n, 1, t);
        const o = this.tabHistory[t.tab || ''];
        if (o) {
            const i = o.findIndex((r) => r.id === t.id);
            i > -1 ? o.splice(i, 1, t) : o.push(t);
        } else t.tab && (this.tabHistory[t.tab] = [t]);
    }
    _add(t) {
        const n = this._getRouteInfosByKey(t.tab);
        n && (this._areRoutesEqual(n[n.length - 1], t) && n.pop(), n.push(t)),
            this.locationHistory.push(t);
    }
    _areRoutesEqual(t, n) {
        return !t || !n ? !1 : t.pathname === n.pathname && t.search === n.search;
    }
    _pop(t) {
        const n = this._getRouteInfosByKey(t.tab);
        n && (n.pop(), n.pop(), n.push(t)),
            this.locationHistory.pop(),
            this.locationHistory.pop(),
            this.locationHistory.push(t);
    }
    _replace(t) {
        const n = this._getRouteInfosByKey(t.tab);
        n && n.pop(), this.locationHistory.pop(), this._add(t);
    }
    _clear() {
        Object.keys(this.tabHistory).forEach((n) => (this.tabHistory[n] = [])),
            (this.locationHistory = []);
    }
    _getRouteInfosByKey(t) {
        let n;
        return (
            t && ((n = this.tabHistory[t]), n || (n = this.tabHistory[t] = [])), n
        );
    }
    getFirstRouteInfoForTab(t) {
        const n = this._getRouteInfosByKey(t);
        if (n) return n[0];
    }
    getCurrentRouteInfoForTab(t) {
        const n = this._getRouteInfosByKey(t);
        if (n) return n[n.length - 1];
    }
    findLastLocation(t) {
        const n = this._getRouteInfosByKey(t.tab);
        if (n)
            for (let o = n.length - 2; o >= 0; o--) {
                const i = n[o];
                if (i && i.pathname === t.pushedByRoute) return i;
            }
        for (let o = this.locationHistory.length - 2; o >= 0; o--) {
            const i = this.locationHistory[o];
            if (i && i.pathname === t.pushedByRoute) return i;
        }
    }
    previous() {
        return (
            this.locationHistory[this.locationHistory.length - 2] ||
            this.locationHistory[this.locationHistory.length - 1]
        );
    }
    current() {
        return this.locationHistory[this.locationHistory.length - 1];
    }
    canGoBack() {
        return this.locationHistory.length > 1;
    }
}
class Fk extends b.PureComponent {
    constructor(t) {
        super(t),
            (this.ionRouterContextValue = {
                push: (n, o, i, r, s) => {
                    this.navigate(n, o, i, s, r);
                },
                back: (n) => {
                    this.goBack(void 0, n);
                },
                canGoBack: () => this.props.locationHistory.canGoBack(),
                nativeBack: () => this.props.onNativeBack(),
                routeInfo: this.props.routeInfo,
            }),
            (this.state = {
                goBack: this.goBack.bind(this),
                hasIonicRouter: () => !0,
                navigate: this.navigate.bind(this),
                getIonRedirect: this.getIonRedirect.bind(this),
                getIonRoute: this.getIonRoute.bind(this),
                getStackManager: this.getStackManager.bind(this),
                getPageManager: this.getPageManager.bind(this),
                routeInfo: this.props.routeInfo,
                setCurrentTab: this.props.onSetCurrentTab,
                changeTab: this.props.onChangeTab,
                resetTab: this.props.onResetTab,
            });
    }
    componentDidMount() {
        typeof document < 'u' &&
            ((this.handleHardwareBackButton =
                this.handleHardwareBackButton.bind(this)),
            document.addEventListener(
                'ionBackButton',
                this.handleHardwareBackButton
            ));
    }
    componentWillUnmount() {
        typeof document < 'u' &&
            document.removeEventListener(
                'ionBackButton',
                this.handleHardwareBackButton
            );
    }
    handleHardwareBackButton(t) {
        t.detail.register(0, (n) => {
            this.nativeGoBack(), n();
        });
    }
    goBack(t, n) {
        this.props.onNavigateBack(t, n);
    }
    nativeGoBack() {
        this.props.onNativeBack();
    }
    navigate(t, n = 'forward', o = 'push', i, r, s) {
        this.props.onNavigate(t, o, n, i, r, s);
    }
    getPageManager() {
        return xu;
    }
    getIonRedirect() {
        return this.props.ionRedirect;
    }
    getIonRoute() {
        return this.props.ionRoute;
    }
    getStackManager() {
        return this.props.stackManager;
    }
    render() {
        return b.createElement(
            qt.Provider,
            {
                value: Object.assign(Object.assign({}, this.state), {
                    routeInfo: this.props.routeInfo,
                }),
            },
            b.createElement(
                Dk.Provider,
                {
                    value: Object.assign(
                        Object.assign({}, this.ionRouterContextValue),
                        { routeInfo: this.props.routeInfo }
                    ),
                },
                this.props.children
            )
        );
    }
}
class Uk {
    constructor() {
        (this.viewStacks = {}),
            (this.add = this.add.bind(this)),
            (this.clear = this.clear.bind(this)),
            (this.getViewItemsForOutlet = this.getViewItemsForOutlet.bind(this)),
            (this.remove = this.remove.bind(this));
    }
    add(t) {
        const { outletId: n } = t;
        this.viewStacks[n] ? this.viewStacks[n].push(t) : (this.viewStacks[n] = [t]);
    }
    clear(t) {
        return setTimeout(() => {
            delete this.viewStacks[t];
        }, 500);
    }
    getViewItemsForOutlet(t) {
        return this.viewStacks[t] || [];
    }
    remove(t) {
        const { outletId: n } = t,
            o = this.viewStacks[n];
        if (o) {
            const i = o.find((r) => r.id === t.id);
            i &&
                ((i.mount = !1),
                (this.viewStacks[n] = o.filter((r) => r.id !== i.id)));
        }
    }
    getStackIds() {
        return Object.keys(this.viewStacks);
    }
    getAllViewItems() {
        const t = this.getStackIds(),
            n = [];
        return (
            t.forEach((o) => {
                n.push(...this.viewStacks[o]);
            }),
            n
        );
    }
}
class Vk extends b.PureComponent {
    render() {
        return b.createElement(
            ei,
            Object.assign(
                {
                    path: this.props.path,
                    exact: this.props.exact,
                    render: this.props.render,
                },
                this.props.computedMatch !== void 0
                    ? { computedMatch: this.props.computedMatch }
                    : {}
            )
        );
    }
}
class Wk extends Uk {
    constructor() {
        super(),
            (this.createViewItem = this.createViewItem.bind(this)),
            (this.findViewItemByRouteInfo = this.findViewItemByRouteInfo.bind(this)),
            (this.findLeavingViewItemByRouteInfo =
                this.findLeavingViewItemByRouteInfo.bind(this)),
            (this.getChildrenToRender = this.getChildrenToRender.bind(this)),
            (this.findViewItemByPathname = this.findViewItemByPathname.bind(this));
    }
    createViewItem(t, n, o, i) {
        const r = {
                id: hs('viewItem'),
                outletId: t,
                ionPageElement: i,
                reactElement: n,
                mount: !0,
                ionRoute: !1,
            },
            s = {
                exact: n.props.exact,
                path: n.props.path || n.props.from,
                component: n.props.component,
            },
            l = Mn(o.pathname, s);
        return (
            n.type === ku &&
                ((r.ionRoute = !0),
                (r.disableIonPageManagement = n.props.disableIonPageManagement)),
            (r.routeData = { match: l, childProps: n.props }),
            r
        );
    }
    getChildrenToRender(t, n, o) {
        const i = this.getViewItemsForOutlet(t);
        return (
            b.Children.forEach(n.props.children, (s) => {
                const l = i.find((a) =>
                    eh(s, a.routeData.childProps.path || a.routeData.childProps.from)
                );
                l && (l.reactElement = s);
            }),
            i.map((s) => {
                let l;
                if (s.ionRoute && !s.disableIonPageManagement)
                    l = b.createElement(
                        Jf,
                        {
                            key: 'view-'.concat(s.id),
                            mount: s.mount,
                            removeView: () => this.remove(s),
                        },
                        b.cloneElement(s.reactElement, {
                            computedMatch: s.routeData.match,
                        })
                    );
                else {
                    const a = eh(s.reactElement, o.pathname);
                    (l = b.createElement(
                        Jf,
                        {
                            key: 'view-'.concat(s.id),
                            mount: s.mount,
                            removeView: () => this.remove(s),
                        },
                        b.cloneElement(s.reactElement, {
                            computedMatch: s.routeData.match,
                        })
                    )),
                        !a &&
                            s.routeData.match &&
                            ((s.routeData.match = void 0), (s.mount = !1));
                }
                return l;
            })
        );
    }
    findViewItemByRouteInfo(t, n, o) {
        const { viewItem: i, match: r } = this.findViewItemByPath(t.pathname, n);
        return (o === void 0 || o === !0) && i && r && (i.routeData.match = r), i;
    }
    findLeavingViewItemByRouteInfo(t, n, o = !0) {
        const { viewItem: i } = this.findViewItemByPath(t.lastPathname, n, !1, o);
        return i;
    }
    findViewItemByPathname(t, n) {
        const { viewItem: o } = this.findViewItemByPath(t, n);
        return o;
    }
    findViewItemByPath(t, n, o, i) {
        let r, s, l;
        if (n) (l = this.getViewItemsForOutlet(n)), l.some(a), r || l.some(c);
        else {
            const u = this.getAllViewItems();
            u.some(a), r || u.some(c);
        }
        return { viewItem: r, match: s };
        function a(u) {
            if (i && !u.ionRoute) return !1;
            const d = {
                    exact: o ? !0 : u.routeData.childProps.exact,
                    path: u.routeData.childProps.path || u.routeData.childProps.from,
                    component: u.routeData.childProps.component,
                },
                f = Mn(t, d);
            return f ? ((r = u), (s = f), !0) : !1;
        }
        function c(u) {
            return !u.routeData.childProps.path && !u.routeData.childProps.from
                ? ((s = { path: t, url: t, isExact: !0, params: {} }), (r = u), !0)
                : !1;
        }
    }
}
function eh(e, t, n) {
    const o = {
        exact: n ? !0 : e.props.exact,
        path: e.props.path || e.props.from,
        component: e.props.component,
    };
    return Mn(t, o);
}
function Kk(e) {
    let t;
    if ((typeof e == 'string' ? (t = e) : (t = e.outerHTML), document)) {
        const n = document.createElement('div');
        (n.innerHTML = t), (n.style.zIndex = '');
        const o = n.getElementsByTagName('ion-back-button');
        return o[0] && o[0].remove(), n.firstChild;
    }
}
const th = (e) =>
    !e.classList.contains('ion-page-invisible') &&
    !e.classList.contains('ion-page-hidden');
class Qk extends b.PureComponent {
    constructor(t) {
        super(t),
            (this.stackContextValue = {
                registerIonPage: this.registerIonPage.bind(this),
                isInOutlet: () => !0,
            }),
            (this.pendingPageTransition = !1),
            (this.registerIonPage = this.registerIonPage.bind(this)),
            (this.transitionPage = this.transitionPage.bind(this)),
            (this.handlePageTransition = this.handlePageTransition.bind(this)),
            (this.id = hs('routerOutlet')),
            (this.prevProps = void 0),
            (this.skipTransition = !1);
    }
    componentDidMount() {
        this.clearOutletTimeout && clearTimeout(this.clearOutletTimeout),
            this.routerOutletElement &&
                (this.setupRouterOutlet(this.routerOutletElement),
                this.handlePageTransition(this.props.routeInfo));
    }
    componentDidUpdate(t) {
        const { pathname: n } = this.props.routeInfo,
            { pathname: o } = t.routeInfo;
        n !== o
            ? ((this.prevProps = t), this.handlePageTransition(this.props.routeInfo))
            : this.pendingPageTransition &&
              (this.handlePageTransition(this.props.routeInfo),
              (this.pendingPageTransition = !1));
    }
    componentWillUnmount() {
        this.clearOutletTimeout = this.context.clearOutlet(this.id);
    }
    async handlePageTransition(t) {
        var n, o;
        if (!this.routerOutletElement || !this.routerOutletElement.commit)
            this.pendingPageTransition = !0;
        else {
            let i = this.context.findViewItemByRouteInfo(t, this.id),
                r = this.context.findLeavingViewItemByRouteInfo(t, this.id);
            !r &&
                t.prevRouteLastPathname &&
                (r = this.context.findViewItemByPathname(
                    t.prevRouteLastPathname,
                    this.id
                )),
                r &&
                    (t.routeAction === 'replace'
                        ? (r.mount = !1)
                        : t.routeAction === 'push' && t.routeDirection === 'forward'
                        ? !((n = t.routeOptions) === null || n === void 0) &&
                          n.unmount &&
                          (r.mount = !1)
                        : t.routeDirection !== 'none' && i !== r && (r.mount = !1));
            const s = Yk(
                (o = this.ionRouterOutlet) === null || o === void 0
                    ? void 0
                    : o.props.children,
                t
            );
            if (
                (i
                    ? (i.reactElement = s)
                    : s &&
                      ((i = this.context.createViewItem(this.id, s, t)),
                      this.context.addViewItem(i)),
                i && i.ionPageElement)
            ) {
                if (
                    (i === r && i.routeData.match.url !== t.pathname) ||
                    (!r &&
                        this.props.routeInfo.prevRouteLastPathname &&
                        (r = this.context.findViewItemByPathname(
                            this.props.routeInfo.prevRouteLastPathname,
                            this.id
                        )),
                    th(i.ionPageElement) && r !== void 0 && !th(r.ionPageElement))
                )
                    return;
                this.transitionPage(t, i, r);
            } else
                r &&
                    !s &&
                    !i &&
                    r.ionPageElement &&
                    (r.ionPageElement.classList.add('ion-page-hidden'),
                    r.ionPageElement.setAttribute('aria-hidden', 'true'));
            this.forceUpdate();
        }
    }
    registerIonPage(t, n) {
        const o = this.context.findViewItemByRouteInfo(n, this.id);
        if (o) {
            const i = o.ionPageElement;
            if (((o.ionPageElement = t), (o.ionRoute = !0), i === t)) return;
        }
        this.handlePageTransition(n);
    }
    async setupRouterOutlet(t) {
        const n = () => {
                const r = bu();
                if (!(r && r.get('swipeBackEnabled', t.mode === 'ios'))) return !1;
                const { routeInfo: l } = this.props,
                    a =
                        this.prevProps &&
                        this.prevProps.routeInfo.pathname === l.pushedByRoute
                            ? this.prevProps.routeInfo
                            : { pathname: l.pushedByRoute || '' },
                    c = this.context.findViewItemByRouteInfo(a, this.id, !1);
                return !!c && c.mount && c.routeData.match.path !== l.pathname;
            },
            o = async () => {
                const { routeInfo: r } = this.props,
                    s =
                        this.prevProps &&
                        this.prevProps.routeInfo.pathname === r.pushedByRoute
                            ? this.prevProps.routeInfo
                            : { pathname: r.pushedByRoute || '' },
                    l = this.context.findViewItemByRouteInfo(s, this.id, !1),
                    a = this.context.findViewItemByRouteInfo(r, this.id, !1);
                return (
                    l && a && (await this.transitionPage(r, l, a, 'back', !0)),
                    Promise.resolve()
                );
            },
            i = (r) => {
                if (r) (this.skipTransition = !0), this.context.goBack();
                else {
                    const { routeInfo: s } = this.props,
                        l =
                            this.prevProps &&
                            this.prevProps.routeInfo.pathname === s.pushedByRoute
                                ? this.prevProps.routeInfo
                                : { pathname: s.pushedByRoute || '' },
                        a = this.context.findViewItemByRouteInfo(l, this.id, !1),
                        c = this.context.findViewItemByRouteInfo(s, this.id, !1);
                    if (
                        a !== c &&
                        (a == null ? void 0 : a.ionPageElement) !== void 0
                    ) {
                        const { ionPageElement: u } = a;
                        u.setAttribute('aria-hidden', 'true'),
                            u.classList.add('ion-page-hidden');
                    }
                }
            };
        t.swipeHandler = { canStart: n, onStart: o, onEnd: i };
    }
    async transitionPage(t, n, o, i, r = !1) {
        const s = async (u, d) => {
                const f = this.skipTransition;
                f
                    ? (this.skipTransition = !1)
                    : (u.classList.add('ion-page'),
                      u.classList.add('ion-page-invisible')),
                    await l.commit(u, d, {
                        duration: f || c === void 0 ? 0 : void 0,
                        direction: c,
                        showGoBack: !!t.pushedByRoute,
                        progressAnimation: r,
                        animationBuilder: t.routeAnimation,
                    });
            },
            l = this.routerOutletElement,
            a =
                t.routeDirection === 'none' || t.routeDirection === 'root'
                    ? void 0
                    : t.routeDirection,
            c = i != null ? i : a;
        if (n && n.ionPageElement && this.routerOutletElement)
            if (o && o.ionPageElement && n === o)
                if (Xk(o.reactElement, t.pathname, !0)) {
                    const d = Kk(o.ionPageElement.outerHTML);
                    d &&
                        (this.routerOutletElement.appendChild(d),
                        await s(n.ionPageElement, d),
                        this.routerOutletElement.removeChild(d));
                } else await s(n.ionPageElement, void 0);
            else
                await s(n.ionPageElement, o == null ? void 0 : o.ionPageElement),
                    o &&
                        o.ionPageElement &&
                        !r &&
                        (o.ionPageElement.classList.add('ion-page-hidden'),
                        o.ionPageElement.setAttribute('aria-hidden', 'true'));
    }
    render() {
        const { children: t } = this.props,
            n = b.Children.only(t);
        this.ionRouterOutlet = n;
        const o = this.context.getChildrenToRender(
            this.id,
            this.ionRouterOutlet,
            this.props.routeInfo,
            () => {
                this.forceUpdate();
            }
        );
        return b.createElement(
            wu.Provider,
            { value: this.stackContextValue },
            b.cloneElement(
                n,
                {
                    ref: (i) => {
                        n.props.setRef && n.props.setRef(i),
                            n.props.forwardedRef &&
                                (n.props.forwardedRef.current = i),
                            (this.routerOutletElement = i);
                        const { ref: r } = n;
                        typeof r == 'function' && r(i);
                    },
                },
                o
            )
        );
    }
    static get contextType() {
        return jg;
    }
}
function Yk(e, t) {
    let n;
    return (
        b.Children.forEach(e, (o) => {
            const i = {
                exact: o.props.exact,
                path: o.props.path || o.props.from,
                component: o.props.component,
            };
            Mn(t.pathname, i) && (n = o);
        }),
        n ||
            (b.Children.forEach(e, (o) => {
                o.props.path || o.props.from || (n = o);
            }),
            n)
    );
}
function Xk(e, t, n) {
    const o = {
        exact: n ? !0 : e.props.exact,
        path: e.props.path || e.props.from,
        component: e.props.component,
    };
    return Mn(t, o);
}
class qk extends b.PureComponent {
    constructor(t) {
        super(t),
            (this.exitViewFromOtherOutletHandlers = []),
            (this.locationHistory = new Hk()),
            (this.viewStack = new Wk()),
            (this.routeMangerContextState = {
                canGoBack: () => this.locationHistory.canGoBack(),
                clearOutlet: this.viewStack.clear,
                findViewItemByPathname: this.viewStack.findViewItemByPathname,
                getChildrenToRender: this.viewStack.getChildrenToRender,
                goBack: () => this.handleNavigateBack(),
                createViewItem: this.viewStack.createViewItem,
                findViewItemByRouteInfo: this.viewStack.findViewItemByRouteInfo,
                findLeavingViewItemByRouteInfo:
                    this.viewStack.findLeavingViewItemByRouteInfo,
                addViewItem: this.viewStack.add,
                unMountViewItem: this.viewStack.remove,
            });
        const n = {
            id: hs('routeInfo'),
            pathname: this.props.location.pathname,
            search: this.props.location.search,
        };
        this.locationHistory.add(n),
            (this.handleChangeTab = this.handleChangeTab.bind(this)),
            (this.handleResetTab = this.handleResetTab.bind(this)),
            (this.handleNativeBack = this.handleNativeBack.bind(this)),
            (this.handleNavigate = this.handleNavigate.bind(this)),
            (this.handleNavigateBack = this.handleNavigateBack.bind(this)),
            this.props.registerHistoryListener(this.handleHistoryChange.bind(this)),
            (this.handleSetCurrentTab = this.handleSetCurrentTab.bind(this)),
            (this.state = { routeInfo: n });
    }
    handleChangeTab(t, n, o) {
        if (!n) return;
        const i = this.locationHistory.getCurrentRouteInfoForTab(t),
            [r, s] = n.split('?');
        i
            ? ((this.incomingRouteParams = Object.assign(Object.assign({}, i), {
                  routeAction: 'push',
                  routeDirection: 'none',
              })),
              i.pathname === r
                  ? ((this.incomingRouteParams.routeOptions = o),
                    this.props.history.push(i.pathname + (i.search || '')))
                  : ((this.incomingRouteParams.pathname = r),
                    (this.incomingRouteParams.search = s ? '?' + s : void 0),
                    (this.incomingRouteParams.routeOptions = o),
                    this.props.history.push(r + (s ? '?' + s : ''))))
            : this.handleNavigate(r, 'push', 'none', void 0, o, t);
    }
    handleHistoryChange(t, n) {
        var o, i, r;
        let s;
        if (
            (this.incomingRouteParams
                ? this.incomingRouteParams.routeAction === 'replace'
                    ? (s = this.locationHistory.previous())
                    : (s = this.locationHistory.current())
                : (s = this.locationHistory.current()),
            s.pathname + s.search !== t.pathname)
        ) {
            if (!this.incomingRouteParams) {
                if (
                    (n === 'REPLACE' &&
                        (this.incomingRouteParams = {
                            routeAction: 'replace',
                            routeDirection: 'none',
                            tab: this.currentTab,
                        }),
                    n === 'POP')
                ) {
                    const c = this.locationHistory.current();
                    if (c && c.pushedByRoute) {
                        const u = this.locationHistory.findLastLocation(c);
                        this.incomingRouteParams = Object.assign(
                            Object.assign({}, u),
                            { routeAction: 'pop', routeDirection: 'back' }
                        );
                    } else
                        this.incomingRouteParams = {
                            routeAction: 'pop',
                            routeDirection: 'none',
                            tab: this.currentTab,
                        };
                }
                this.incomingRouteParams ||
                    (this.incomingRouteParams = {
                        routeAction: 'push',
                        routeDirection:
                            ((o = t.state) === null || o === void 0
                                ? void 0
                                : o.direction) || 'forward',
                        routeOptions:
                            (i = t.state) === null || i === void 0
                                ? void 0
                                : i.routerOptions,
                        tab: this.currentTab,
                    });
            }
            let a;
            if (!((r = this.incomingRouteParams) === null || r === void 0) && r.id)
                (a = Object.assign(Object.assign({}, this.incomingRouteParams), {
                    lastPathname: s.pathname,
                })),
                    this.locationHistory.add(a);
            else {
                const c =
                    this.incomingRouteParams.routeAction === 'push' &&
                    this.incomingRouteParams.routeDirection === 'forward';
                if (
                    ((a = Object.assign(
                        Object.assign(
                            { id: hs('routeInfo') },
                            this.incomingRouteParams
                        ),
                        {
                            lastPathname: s.pathname,
                            pathname: t.pathname,
                            search: t.search,
                            params: this.props.match.params,
                            prevRouteLastPathname: s.lastPathname,
                        }
                    )),
                    c)
                )
                    (a.tab = s.tab), (a.pushedByRoute = s.pathname);
                else if (a.routeAction === 'pop') {
                    const u = this.locationHistory.findLastLocation(a);
                    a.pushedByRoute = u == null ? void 0 : u.pushedByRoute;
                } else if (a.routeAction === 'push' && a.tab !== s.tab) {
                    const u = this.locationHistory.getCurrentRouteInfoForTab(a.tab);
                    a.pushedByRoute = u == null ? void 0 : u.pushedByRoute;
                } else if (a.routeAction === 'replace') {
                    const u = this.locationHistory.current(),
                        d = u == null ? void 0 : u.pushedByRoute,
                        f = d !== void 0 && d !== a.pathname ? d : a.pushedByRoute;
                    (a.lastPathname =
                        (u == null ? void 0 : u.pathname) || a.lastPathname),
                        (a.prevRouteLastPathname =
                            u == null ? void 0 : u.lastPathname),
                        (a.pushedByRoute = f),
                        (a.routeDirection =
                            (u == null ? void 0 : u.routeDirection) ||
                            a.routeDirection),
                        (a.routeAnimation =
                            (u == null ? void 0 : u.routeAnimation) ||
                            a.routeAnimation);
                }
                this.locationHistory.add(a);
            }
            this.setState({ routeInfo: a });
        }
        this.incomingRouteParams = void 0;
    }
    handleNativeBack() {
        const t = this.props.history;
        (t.goBack || t.back)();
    }
    handleNavigate(t, n, o, i, r, s) {
        (this.incomingRouteParams = Object.assign(this.incomingRouteParams || {}, {
            routeAction: n,
            routeDirection: o,
            routeOptions: r,
            routeAnimation: i,
            tab: s,
        })),
            n === 'push'
                ? this.props.history.push(t)
                : this.props.history.replace(t);
    }
    handleNavigateBack(t = '/', n) {
        const o = bu();
        t = t || (o && o.get('backButtonDefaultHref'));
        const i = this.locationHistory.current();
        if (i && i.pushedByRoute) {
            const r = this.locationHistory.findLastLocation(i);
            if (r)
                if (
                    ((this.incomingRouteParams = Object.assign(
                        Object.assign({}, r),
                        {
                            routeAction: 'pop',
                            routeDirection: 'back',
                            routeAnimation: n || i.routeAnimation,
                        }
                    )),
                    i.lastPathname === i.pushedByRoute ||
                        (r.pathname === i.pushedByRoute &&
                            i.tab === '' &&
                            r.tab === ''))
                ) {
                    const s = this.props.history;
                    (s.goBack || s.back)();
                } else
                    this.handleNavigate(
                        r.pathname + (r.search || ''),
                        'pop',
                        'back',
                        n
                    );
            else this.handleNavigate(t, 'pop', 'back', n);
        } else this.handleNavigate(t, 'pop', 'back', n);
    }
    handleResetTab(t, n, o) {
        const i = this.locationHistory.getFirstRouteInfoForTab(t);
        if (i) {
            const r = Object.assign({}, i);
            (r.pathname = n),
                (r.routeOptions = o),
                (this.incomingRouteParams = Object.assign(Object.assign({}, r), {
                    routeAction: 'pop',
                    routeDirection: 'back',
                })),
                this.props.history.push(r.pathname + (r.search || ''));
        }
    }
    handleSetCurrentTab(t) {
        this.currentTab = t;
        const n = Object.assign({}, this.locationHistory.current());
        n.tab !== t && ((n.tab = t), this.locationHistory.update(n));
    }
    render() {
        return b.createElement(
            jg.Provider,
            { value: this.routeMangerContextState },
            b.createElement(
                Fk,
                {
                    ionRoute: Vk,
                    ionRedirect: {},
                    stackManager: Qk,
                    routeInfo: this.state.routeInfo,
                    onNativeBack: this.handleNativeBack,
                    onNavigateBack: this.handleNavigateBack,
                    onNavigate: this.handleNavigate,
                    onSetCurrentTab: this.handleSetCurrentTab,
                    onChangeTab: this.handleChangeTab,
                    onResetTab: this.handleResetTab,
                    locationHistory: this.locationHistory,
                },
                this.props.children
            )
        );
    }
}
const nl = c1(qk);
nl.displayName = 'IonRouter';
class Gk extends b.Component {
    constructor(t) {
        super(t);
        const { history: n } = t,
            o = ze(t, ['history']);
        (this.history = n || fb(o)),
            this.history.listen(this.handleHistoryChange.bind(this)),
            (this.registerHistoryListener = this.registerHistoryListener.bind(this));
    }
    handleHistoryChange(t, n) {
        const o = t.location || t,
            i = t.action || n;
        this.historyListenHandler && this.historyListenHandler(o, i);
    }
    registerHistoryListener(t) {
        this.historyListenHandler = t;
    }
    render() {
        const t = this.props,
            { children: n } = t,
            o = ze(t, ['children']);
        return b.createElement(
            ji,
            Object.assign({ history: this.history }, o),
            b.createElement(
                nl,
                { registerHistoryListener: this.registerHistoryListener },
                n
            )
        );
    }
}
class _E extends b.Component {
    constructor(t) {
        super(t),
            (this.history = t.history),
            this.history.listen(this.handleHistoryChange.bind(this)),
            (this.registerHistoryListener = this.registerHistoryListener.bind(this));
    }
    handleHistoryChange(t, n) {
        const o = t.location || t,
            i = t.action || n;
        this.historyListenHandler && this.historyListenHandler(o, i);
    }
    registerHistoryListener(t) {
        this.historyListenHandler = t;
    }
    render() {
        const t = this.props,
            { children: n } = t,
            o = ze(t, ['children']);
        return b.createElement(
            ji,
            Object.assign({}, o),
            b.createElement(
                nl,
                { registerHistoryListener: this.registerHistoryListener },
                n
            )
        );
    }
}
class LE extends b.Component {
    constructor(t) {
        super(t);
        const { history: n } = t,
            o = ze(t, ['history']);
        (this.history = n || mb(o)),
            this.history.listen(this.handleHistoryChange.bind(this)),
            (this.registerHistoryListener = this.registerHistoryListener.bind(this));
    }
    handleHistoryChange(t, n) {
        const o = t.location || t,
            i = t.action || n;
        this.historyListenHandler && this.historyListenHandler(o, i);
    }
    registerHistoryListener(t) {
        this.historyListenHandler = t;
    }
    render() {
        const t = this.props,
            { children: n } = t,
            o = ze(t, ['children']);
        return b.createElement(
            ji,
            Object.assign({ history: this.history }, o),
            b.createElement(
                nl,
                { registerHistoryListener: this.registerHistoryListener },
                n
            )
        );
    }
}
const Zk =
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z'/></svg>",
    Jk =
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M416 464H96a48.05 48.05 0 01-48-48V96a48.05 48.05 0 0148-48h320a48.05 48.05 0 0148 48v320a48.05 48.05 0 01-48 48z'/></svg>",
    eE =
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 464H48a16 16 0 01-14.07-23.62l208-384a16 16 0 0128.14 0l208 384A16 16 0 01464 464z'/></svg>";
const Eu = ({ name: e }) =>
    D.jsxs('div', {
        className: 'container',
        children: [
            D.jsx('strong', { children: e }),
            D.jsxs('p', {
                children: [
                    'Explore ',
                    D.jsx('a', {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        href: 'https://ionicframework.com/docs/components',
                        children: 'UI Components',
                    }),
                ],
            }),
        ],
    });
const tE = () =>
    D.jsxs($u, {
        children: [
            D.jsx(Lo, {
                children: D.jsx(Oo, { children: D.jsx(Io, { children: 'Tab 1' }) }),
            }),
            D.jsxs(yu, {
                fullscreen: !0,
                children: [
                    D.jsx(Lo, {
                        collapse: 'condense',
                        children: D.jsx(Oo, {
                            children: D.jsx(Io, {
                                size: 'large',
                                children: 'Tab 1',
                            }),
                        }),
                    }),
                    D.jsx(Eu, { name: 'Tab 1 page' }),
                ],
            }),
        ],
    });
const nE = () =>
    D.jsxs($u, {
        children: [
            D.jsx(Lo, {
                children: D.jsx(Oo, { children: D.jsx(Io, { children: 'Tab 2' }) }),
            }),
            D.jsxs(yu, {
                fullscreen: !0,
                children: [
                    D.jsx(Lo, {
                        collapse: 'condense',
                        children: D.jsx(Oo, {
                            children: D.jsx(Io, {
                                size: 'large',
                                children: 'Tab 2',
                            }),
                        }),
                    }),
                    D.jsx(Eu, { name: 'Tab 2 page' }),
                ],
            }),
        ],
    });
const oE = () =>
    D.jsxs($u, {
        children: [
            D.jsx(Lo, {
                children: D.jsx(Oo, { children: D.jsx(Io, { children: 'Tab 3' }) }),
            }),
            D.jsxs(yu, {
                fullscreen: !0,
                children: [
                    D.jsx(Lo, {
                        collapse: 'condense',
                        children: D.jsx(Oo, {
                            children: D.jsx(Io, {
                                size: 'large',
                                children: 'Tab 3',
                            }),
                        }),
                    }),
                    D.jsx(Eu, { name: 'Tab 3 page' }),
                ],
            }),
        ],
    });
jk();
const iE = () =>
    D.jsx(Ek, {
        children: D.jsx(Gk, {
            children: D.jsxs(Mk, {
                children: [
                    D.jsxs(qa, {
                        children: [
                            D.jsx(ei, {
                                exact: !0,
                                path: '/Home',
                                children: D.jsx(tE, {}),
                            }),
                            D.jsx(ei, {
                                exact: !0,
                                path: '/tab2',
                                children: D.jsx(nE, {}),
                            }),
                            D.jsx(ei, { path: '/tab3', children: D.jsx(oE, {}) }),
                            D.jsx(ei, {
                                exact: !0,
                                path: '/',
                                children: D.jsx(o1, { to: '/Home' }),
                            }),
                        ],
                    }),
                    D.jsxs(Ga, {
                        slot: 'bottom',
                        children: [
                            D.jsxs($o, {
                                tab: 'Home',
                                href: '/Home',
                                children: [
                                    D.jsx(Vl, { 'aria-hidden': 'true', icon: eE }),
                                    D.jsx(Ul, { children: 'Tab 1' }),
                                ],
                            }),
                            D.jsxs($o, {
                                tab: 'tab2',
                                href: '/tab2',
                                children: [
                                    D.jsx(Vl, { 'aria-hidden': 'true', icon: Zk }),
                                    D.jsx(Ul, { children: 'Tab 2' }),
                                ],
                            }),
                            D.jsxs($o, {
                                tab: 'tab3',
                                href: '/tab3',
                                children: [
                                    D.jsx(Vl, { 'aria-hidden': 'true', icon: Jk }),
                                    D.jsx(Ul, { children: 'Tab 3' }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
const rE = document.getElementById('root'),
    sE = mm(rE);
sE.render(D.jsx(b.StrictMode, { children: D.jsx(iE, {}) }));
export {
    hx as K,
    cE as __vite_legacy_guard,
    Ii as a,
    uE as b,
    Gm as c,
    Ml as d,
    dE as e,
    yE as f,
    Wa as g,
    Re as h,
    Jw as i,
    Bt as j,
    Sf as k,
    wE as l,
    uw as m,
    fE as n,
    pE as o,
    hE as p,
    Li as r,
    bE as s,
    yn as w,
};
