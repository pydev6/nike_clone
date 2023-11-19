(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l) if (i.type === 'childList') for (const o of i.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return l.integrity && (i.integrity = l.integrity), l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy), l.crossOrigin === 'use-credentials' ? (i.credentials = 'include') : l.crossOrigin === 'anonymous' ? (i.credentials = 'omit') : (i.credentials = 'same-origin'), i;
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function u0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var Qu = { exports: {} },
  tl = {},
  Zu = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gn = Symbol.for('react.element'),
  s0 = Symbol.for('react.portal'),
  a0 = Symbol.for('react.fragment'),
  c0 = Symbol.for('react.strict_mode'),
  f0 = Symbol.for('react.profiler'),
  d0 = Symbol.for('react.provider'),
  p0 = Symbol.for('react.context'),
  m0 = Symbol.for('react.forward_ref'),
  h0 = Symbol.for('react.suspense'),
  v0 = Symbol.for('react.memo'),
  g0 = Symbol.for('react.lazy'),
  Fo = Symbol.iterator;
function y0(e) {
  return e === null || typeof e != 'object' ? null : ((e = (Fo && e[Fo]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Ku = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Yu = Object.assign,
  Gu = {};
function ln(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Gu), (this.updater = n || Ku);
}
ln.prototype.isReactComponent = {};
ln.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null) throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.');
  this.updater.enqueueSetState(this, e, t, 'setState');
};
ln.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Xu() {}
Xu.prototype = ln.prototype;
function Vi(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Gu), (this.updater = n || Ku);
}
var $i = (Vi.prototype = new Xu());
$i.constructor = Vi;
Yu($i, ln.prototype);
$i.isPureReactComponent = !0;
var Io = Array.isArray,
  Ju = Object.prototype.hasOwnProperty,
  Ai = { current: null },
  qu = { key: !0, ref: !0, __self: !0, __source: !0 };
function bu(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null) for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = '' + t.key), t)) Ju.call(t, r) && !qu.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Gn, type: e, key: i, ref: o, props: l, _owner: Ai.current };
}
function w0(e, t) {
  return { $$typeof: Gn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Bi(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Gn;
}
function x0(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ho = /\/+/g;
function Cl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? x0('' + e.key) : t.toString(36);
}
function wr(e, t, n, r, l) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        o = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Gn:
          case s0:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === '' ? '.' + Cl(o, 0) : r),
      Io(l)
        ? ((n = ''),
          e != null && (n = e.replace(Ho, '$&/') + '/'),
          wr(l, t, n, '', function (c) {
            return c;
          }))
        : l != null && (Bi(l) && (l = w0(l, n + (!l.key || (o && o.key === l.key) ? '' : ('' + l.key).replace(Ho, '$&/') + '/') + e)), t.push(l)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), Io(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Cl(i, u);
      o += wr(i, t, n, s, l);
    }
  else if (((s = y0(e)), typeof s == 'function')) for (e = s.call(e), u = 0; !(i = e.next()).done; ) (i = i.value), (s = r + Cl(i, u++)), (o += wr(i, t, n, s, l));
  else if (i === 'object') throw ((t = String(e)), Error('Objects are not valid as a React child (found: ' + (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) + '). If you meant to render a collection of children, use an array instead.'));
  return o;
}
function nr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    wr(e, r, '', '', function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function C0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  xr = { transition: null },
  k0 = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: xr, ReactCurrentOwner: Ai };
z.Children = {
  map: nr,
  forEach: function (e, t, n) {
    nr(
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
      nr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      nr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Bi(e)) throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
z.Component = ln;
z.Fragment = a0;
z.Profiler = f0;
z.PureComponent = Vi;
z.StrictMode = c0;
z.Suspense = h0;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = k0;
z.cloneElement = function (e, t, n) {
  if (e == null) throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
  var r = Yu({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if ((t.ref !== void 0 && ((i = t.ref), (o = Ai.current)), t.key !== void 0 && (l = '' + t.key), e.type && e.type.defaultProps)) var u = e.type.defaultProps;
    for (s in t) Ju.call(t, s) && !qu.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Gn, type: e.type, key: l, ref: i, props: r, _owner: o };
};
z.createContext = function (e) {
  return (e = { $$typeof: p0, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }), (e.Provider = { $$typeof: d0, _context: e }), (e.Consumer = e);
};
z.createElement = bu;
z.createFactory = function (e) {
  var t = bu.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: m0, render: e };
};
z.isValidElement = Bi;
z.lazy = function (e) {
  return { $$typeof: g0, _payload: { _status: -1, _result: e }, _init: C0 };
};
z.memo = function (e, t) {
  return { $$typeof: v0, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = xr.transition;
  xr.transition = {};
  try {
    e();
  } finally {
    xr.transition = t;
  }
};
z.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
z.useCallback = function (e, t) {
  return ue.current.useCallback(e, t);
};
z.useContext = function (e) {
  return ue.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return ue.current.useEffect(e, t);
};
z.useId = function () {
  return ue.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return ue.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return ue.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return ue.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return ue.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return ue.current.useRef(e);
};
z.useState = function (e) {
  return ue.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return ue.current.useTransition();
};
z.version = '18.2.0';
Zu.exports = z;
var nl = Zu.exports;
const S0 = u0(nl);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var E0 = nl,
  N0 = Symbol.for('react.element'),
  _0 = Symbol.for('react.fragment'),
  j0 = Object.prototype.hasOwnProperty,
  L0 = E0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  P0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function es(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = '' + n), t.key !== void 0 && (i = '' + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) j0.call(t, r) && !P0.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: N0, type: e, key: i, ref: o, props: l, _owner: L0.current };
}
tl.Fragment = _0;
tl.jsx = es;
tl.jsxs = es;
Qu.exports = tl;
var p = Qu.exports,
  Kl = {},
  ts = { exports: {} },
  ye = {},
  ns = { exports: {} },
  rs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, L) {
    var P = E.length;
    E.push(L);
    e: for (; 0 < P; ) {
      var W = (P - 1) >>> 1,
        G = E[W];
      if (0 < l(G, L)) (E[W] = L), (E[P] = G), (P = W);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var L = E[0],
      P = E.pop();
    if (P !== L) {
      E[0] = P;
      e: for (var W = 0, G = E.length, er = G >>> 1; W < er; ) {
        var vt = 2 * (W + 1) - 1,
          xl = E[vt],
          gt = vt + 1,
          tr = E[gt];
        if (0 > l(xl, P)) gt < G && 0 > l(tr, xl) ? ((E[W] = tr), (E[gt] = P), (W = gt)) : ((E[W] = xl), (E[vt] = P), (W = vt));
        else if (gt < G && 0 > l(tr, P)) (E[W] = tr), (E[gt] = P), (W = gt);
        else break e;
      }
    }
    return L;
  }
  function l(E, L) {
    var P = E.sortIndex - L.sortIndex;
    return P !== 0 ? P : E.id - L.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    c = [],
    v = 1,
    h = null,
    m = 3,
    w = !1,
    x = !1,
    C = !1,
    I = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    a = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(E) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= E) r(c), (L.sortIndex = L.expirationTime), t(s, L);
      else break;
      L = n(c);
    }
  }
  function g(E) {
    if (((C = !1), d(E), !x))
      if (n(s) !== null) (x = !0), yl(S);
      else {
        var L = n(c);
        L !== null && wl(g, L.startTime - E);
      }
  }
  function S(E, L) {
    (x = !1), C && ((C = !1), f(j), (j = -1)), (w = !0);
    var P = m;
    try {
      for (d(L), h = n(s); h !== null && (!(h.expirationTime > L) || (E && !_e())); ) {
        var W = h.callback;
        if (typeof W == 'function') {
          (h.callback = null), (m = h.priorityLevel);
          var G = W(h.expirationTime <= L);
          (L = e.unstable_now()), typeof G == 'function' ? (h.callback = G) : h === n(s) && r(s), d(L);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var er = !0;
      else {
        var vt = n(c);
        vt !== null && wl(g, vt.startTime - L), (er = !1);
      }
      return er;
    } finally {
      (h = null), (m = P), (w = !1);
    }
  }
  var N = !1,
    _ = null,
    j = -1,
    B = 5,
    T = -1;
  function _e() {
    return !(e.unstable_now() - T < B);
  }
  function sn() {
    if (_ !== null) {
      var E = e.unstable_now();
      T = E;
      var L = !0;
      try {
        L = _(!0, E);
      } finally {
        L ? an() : ((N = !1), (_ = null));
      }
    } else N = !1;
  }
  var an;
  if (typeof a == 'function')
    an = function () {
      a(sn);
    };
  else if (typeof MessageChannel < 'u') {
    var Do = new MessageChannel(),
      o0 = Do.port2;
    (Do.port1.onmessage = sn),
      (an = function () {
        o0.postMessage(null);
      });
  } else
    an = function () {
      I(sn, 0);
    };
  function yl(E) {
    (_ = E), N || ((N = !0), an());
  }
  function wl(E, L) {
    j = I(function () {
      E(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || w || ((x = !0), yl(S));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E ? console.error('forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported') : (B = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (E) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = m;
      }
      var P = m;
      m = L;
      try {
        return E();
      } finally {
        m = P;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, L) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var P = m;
      m = E;
      try {
        return L();
      } finally {
        m = P;
      }
    }),
    (e.unstable_scheduleCallback = function (E, L, P) {
      var W = e.unstable_now();
      switch ((typeof P == 'object' && P !== null ? ((P = P.delay), (P = typeof P == 'number' && 0 < P ? W + P : W)) : (P = W), E)) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (G = P + G), (E = { id: v++, callback: L, priorityLevel: E, startTime: P, expirationTime: G, sortIndex: -1 }), P > W ? ((E.sortIndex = P), t(c, E), n(s) === null && E === n(c) && (C ? (f(j), (j = -1)) : (C = !0), wl(g, P - W))) : ((E.sortIndex = G), t(s, E), x || w || ((x = !0), yl(S))), E;
    }),
    (e.unstable_shouldYield = _e),
    (e.unstable_wrapCallback = function (E) {
      var L = m;
      return function () {
        var P = m;
        m = L;
        try {
          return E.apply(this, arguments);
        } finally {
          m = P;
        }
      };
    });
})(rs);
ns.exports = rs;
var z0 = ns.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ls = nl,
  ge = z0;
function y(e) {
  for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++) t += '&args[]=' + encodeURIComponent(arguments[n]);
  return 'Minified React error #' + e + '; visit ' + t + ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.';
}
var is = new Set(),
  Tn = {};
function zt(e, t) {
  Jt(e, t), Jt(e + 'Capture', t);
}
function Jt(e, t) {
  for (Tn[e] = t, e = 0; e < t.length; e++) is.add(t[e]);
}
var We = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
  Yl = Object.prototype.hasOwnProperty,
  T0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Uo = {},
  Vo = {};
function M0(e) {
  return Yl.call(Vo, e) ? !0 : Yl.call(Uo, e) ? !1 : T0.test(e) ? (Vo[e] = !0) : ((Uo[e] = !0), !1);
}
function R0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function O0(e, t, n, r) {
  if (t === null || typeof t > 'u' || R0(e, t, n, r)) return !0;
  if (r) return !1;
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
function se(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4), (this.attributeName = r), (this.attributeNamespace = l), (this.mustUseProperty = n), (this.propertyName = e), (this.type = t), (this.sanitizeURL = i), (this.removeEmptyString = o);
}
var ee = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'.split(' ').forEach(function (e) {
  ee[e] = new se(e, 0, !1, e, null, !1, !1);
});
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  ee[t] = new se(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'.split(' ').forEach(function (e) {
  ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Wi = /[\-:]([a-z])/g;
function Qi(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Wi, Qi);
    ee[t] = new se(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
  var t = e.replace(Wi, Qi);
  ee[t] = new se(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Wi, Qi);
  ee[t] = new se(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Zi(e, t, n, r) {
  var l = ee.hasOwnProperty(t) ? ee[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) && (O0(t, n, l, r) && (n = null), r || l === null ? M0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n)) : l.mustUseProperty ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n) : ((t = l.attributeName), (r = l.attributeNamespace), n === null ? e.removeAttribute(t) : ((l = l.type), (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ye = ls.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  rr = Symbol.for('react.element'),
  Rt = Symbol.for('react.portal'),
  Ot = Symbol.for('react.fragment'),
  Ki = Symbol.for('react.strict_mode'),
  Gl = Symbol.for('react.profiler'),
  os = Symbol.for('react.provider'),
  us = Symbol.for('react.context'),
  Yi = Symbol.for('react.forward_ref'),
  Xl = Symbol.for('react.suspense'),
  Jl = Symbol.for('react.suspense_list'),
  Gi = Symbol.for('react.memo'),
  Xe = Symbol.for('react.lazy'),
  ss = Symbol.for('react.offscreen'),
  $o = Symbol.iterator;
function cn(e) {
  return e === null || typeof e != 'object' ? null : ((e = ($o && e[$o]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var $ = Object.assign,
  kl;
function yn(e) {
  if (kl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      kl = (t && t[1]) || '';
    }
  return (
    `
` +
    kl +
    e
  );
}
var Sl = !1;
function El(e, t) {
  if (!e || Sl) return '';
  Sl = !0;
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
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == 'string') {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(' at new ', ' at ');
                return e.displayName && s.includes('<anonymous>') && (s = s.replace('<anonymous>', e.displayName)), s;
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Sl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? yn(e) : '';
}
function D0(e) {
  switch (e.tag) {
    case 5:
      return yn(e.type);
    case 16:
      return yn('Lazy');
    case 13:
      return yn('Suspense');
    case 19:
      return yn('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = El(e.type, !1)), e;
    case 11:
      return (e = El(e.type.render, !1)), e;
    case 1:
      return (e = El(e.type, !0)), e;
    default:
      return '';
  }
}
function ql(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Ot:
      return 'Fragment';
    case Rt:
      return 'Portal';
    case Gl:
      return 'Profiler';
    case Ki:
      return 'StrictMode';
    case Xl:
      return 'Suspense';
    case Jl:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case us:
        return (e.displayName || 'Context') + '.Consumer';
      case os:
        return (e._context.displayName || 'Context') + '.Provider';
      case Yi:
        var t = e.render;
        return (e = e.displayName), e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')), e;
      case Gi:
        return (t = e.displayName || null), t !== null ? t : ql(e.type) || 'Memo';
      case Xe:
        (t = e._payload), (e = e._init);
        try {
          return ql(e(t));
        } catch {}
    }
  return null;
}
function F0(e) {
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
      return (e = t.render), (e = e.displayName || e.name || ''), t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef');
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
      return ql(t);
    case 8:
      return t === Ki ? 'StrictMode' : 'Mode';
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
function ft(e) {
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
function as(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function I0(e) {
  var t = as(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = '' + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function lr(e) {
  e._valueTracker || (e._valueTracker = I0(e));
}
function cs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return e && (r = as(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function Tr(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function bl(e, t) {
  var n = t.checked;
  return $({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ao(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ft(t.value != null ? t.value : n)), (e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null });
}
function fs(e, t) {
  (t = t.checked), t != null && Zi(e, 'checked', t, !1);
}
function ei(e, t) {
  fs(e, t);
  var n = ft(t.value),
    r = t.type;
  if (n != null) r === 'number' ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n) : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value') ? ti(e, t.type, n) : t.hasOwnProperty('defaultValue') && ti(e, t.type, ft(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Bo(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
    (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name), n !== '' && (e.name = ''), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== '' && (e.name = n);
}
function ti(e, t, n) {
  (t !== 'number' || Tr(e.ownerDocument) !== e) && (n == null ? (e.defaultValue = '' + e._wrapperState.initialValue) : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var wn = Array.isArray;
function Qt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++) (l = t.hasOwnProperty('$' + e[n].value)), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + ft(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ni(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return $({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Wo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (wn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: ft(n) };
}
function ds(e, t) {
  var n = ft(t.value),
    r = ft(t.defaultValue);
  n != null && ((n = '' + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = '' + r);
}
function Qo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function ps(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function ri(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml' ? ps(t) : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject' ? 'http://www.w3.org/1999/xhtml' : e;
}
var ir,
  ms = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
    else {
      for (ir = ir || document.createElement('div'), ir.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>', t = ir.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Mn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var kn = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
  H0 = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(kn).forEach(function (e) {
  H0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (kn[t] = kn[e]);
  });
});
function hs(e, t, n) {
  return t == null || typeof t == 'boolean' || t === '' ? '' : n || typeof t != 'number' || t === 0 || (kn.hasOwnProperty(e) && kn[e]) ? ('' + t).trim() : t + 'px';
}
function vs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = hs(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var U0 = $({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function li(e, t) {
  if (t) {
    if (U0[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(y(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(y(62));
  }
}
function ii(e, t) {
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
var oi = null;
function Xi(e) {
  return (e = e.target || e.srcElement || window), e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ui = null,
  Zt = null,
  Kt = null;
function Zo(e) {
  if ((e = qn(e))) {
    if (typeof ui != 'function') throw Error(y(280));
    var t = e.stateNode;
    t && ((t = ul(t)), ui(e.stateNode, e.type, t));
  }
}
function gs(e) {
  Zt ? (Kt ? Kt.push(e) : (Kt = [e])) : (Zt = e);
}
function ys() {
  if (Zt) {
    var e = Zt,
      t = Kt;
    if (((Kt = Zt = null), Zo(e), t)) for (e = 0; e < t.length; e++) Zo(t[e]);
  }
}
function ws(e, t) {
  return e(t);
}
function xs() {}
var Nl = !1;
function Cs(e, t, n) {
  if (Nl) return e(t, n);
  Nl = !0;
  try {
    return ws(e, t, n);
  } finally {
    (Nl = !1), (Zt !== null || Kt !== null) && (xs(), ys());
  }
}
function Rn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ul(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) || ((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))), (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(y(231, t, typeof n));
  return n;
}
var si = !1;
if (We)
  try {
    var fn = {};
    Object.defineProperty(fn, 'passive', {
      get: function () {
        si = !0;
      },
    }),
      window.addEventListener('test', fn, fn),
      window.removeEventListener('test', fn, fn);
  } catch {
    si = !1;
  }
function V0(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (v) {
    this.onError(v);
  }
}
var Sn = !1,
  Mr = null,
  Rr = !1,
  ai = null,
  $0 = {
    onError: function (e) {
      (Sn = !0), (Mr = e);
    },
  };
function A0(e, t, n, r, l, i, o, u, s) {
  (Sn = !1), (Mr = null), V0.apply($0, arguments);
}
function B0(e, t, n, r, l, i, o, u, s) {
  if ((A0.apply(this, arguments), Sn)) {
    if (Sn) {
      var c = Mr;
      (Sn = !1), (Mr = null);
    } else throw Error(y(198));
    Rr || ((Rr = !0), (ai = c));
  }
}
function Tt(e) {
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
function ks(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function Ko(e) {
  if (Tt(e) !== e) throw Error(y(188));
}
function W0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Tt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Ko(l), e;
        if (i === r) return Ko(l), t;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Ss(e) {
  return (e = W0(e)), e !== null ? Es(e) : null;
}
function Es(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Es(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ns = ge.unstable_scheduleCallback,
  Yo = ge.unstable_cancelCallback,
  Q0 = ge.unstable_shouldYield,
  Z0 = ge.unstable_requestPaint,
  Q = ge.unstable_now,
  K0 = ge.unstable_getCurrentPriorityLevel,
  Ji = ge.unstable_ImmediatePriority,
  _s = ge.unstable_UserBlockingPriority,
  Or = ge.unstable_NormalPriority,
  Y0 = ge.unstable_LowPriority,
  js = ge.unstable_IdlePriority,
  rl = null,
  Ie = null;
function G0(e) {
  if (Ie && typeof Ie.onCommitFiberRoot == 'function')
    try {
      Ie.onCommitFiberRoot(rl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Te = Math.clz32 ? Math.clz32 : q0,
  X0 = Math.log,
  J0 = Math.LN2;
function q0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((X0(e) / J0) | 0)) | 0;
}
var or = 64,
  ur = 4194304;
function xn(e) {
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
function Dr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = xn(u)) : ((i &= o), i !== 0 && (r = xn(i)));
  } else (o = n & ~l), o !== 0 ? (r = xn(o)) : i !== 0 && (r = xn(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))) return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0)) for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - Te(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function b0(e, t) {
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
function e2(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - Te(i),
      u = 1 << o,
      s = l[o];
    s === -1 ? (!(u & n) || u & r) && (l[o] = b0(u, t)) : s <= t && (e.expiredLanes |= u), (i &= ~u);
  }
}
function ci(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ls() {
  var e = or;
  return (or <<= 1), !(or & 4194240) && (or = 64), e;
}
function _l(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Xn(e, t, n) {
  (e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - Te(t)), (e[t] = n);
}
function t2(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= t), (e.mutableReadLanes &= t), (e.entangledLanes &= t), (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Te(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function qi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Te(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var R = 0;
function Ps(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var zs,
  bi,
  Ts,
  Ms,
  Rs,
  fi = !1,
  sr = [],
  rt = null,
  lt = null,
  it = null,
  On = new Map(),
  Dn = new Map(),
  qe = [],
  n2 = 'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(' ');
function Go(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      rt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      lt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      it = null;
      break;
    case 'pointerover':
    case 'pointerout':
      On.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Dn.delete(t.pointerId);
  }
}
function dn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }), t !== null && ((t = qn(t)), t !== null && bi(t)), e) : ((e.eventSystemFlags |= r), (t = e.targetContainers), l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function r2(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (rt = dn(rt, e, t, n, r, l)), !0;
    case 'dragenter':
      return (lt = dn(lt, e, t, n, r, l)), !0;
    case 'mouseover':
      return (it = dn(it, e, t, n, r, l)), !0;
    case 'pointerover':
      var i = l.pointerId;
      return On.set(i, dn(On.get(i) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (i = l.pointerId), Dn.set(i, dn(Dn.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Os(e) {
  var t = xt(e.target);
  if (t !== null) {
    var n = Tt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ks(n)), t !== null)) {
          (e.blockedOn = t),
            Rs(e.priority, function () {
              Ts(n);
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
function Cr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = di(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (oi = r), n.target.dispatchEvent(r), (oi = null);
    } else return (t = qn(n)), t !== null && bi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Xo(e, t, n) {
  Cr(e) && n.delete(t);
}
function l2() {
  (fi = !1), rt !== null && Cr(rt) && (rt = null), lt !== null && Cr(lt) && (lt = null), it !== null && Cr(it) && (it = null), On.forEach(Xo), Dn.forEach(Xo);
}
function pn(e, t) {
  e.blockedOn === t && ((e.blockedOn = null), fi || ((fi = !0), ge.unstable_scheduleCallback(ge.unstable_NormalPriority, l2)));
}
function Fn(e) {
  function t(l) {
    return pn(l, e);
  }
  if (0 < sr.length) {
    pn(sr[0], e);
    for (var n = 1; n < sr.length; n++) {
      var r = sr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (rt !== null && pn(rt, e), lt !== null && pn(lt, e), it !== null && pn(it, e), On.forEach(t), Dn.forEach(t), n = 0; n < qe.length; n++) (r = qe[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qe.length && ((n = qe[0]), n.blockedOn === null); ) Os(n), n.blockedOn === null && qe.shift();
}
var Yt = Ye.ReactCurrentBatchConfig,
  Fr = !0;
function i2(e, t, n, r) {
  var l = R,
    i = Yt.transition;
  Yt.transition = null;
  try {
    (R = 1), eo(e, t, n, r);
  } finally {
    (R = l), (Yt.transition = i);
  }
}
function o2(e, t, n, r) {
  var l = R,
    i = Yt.transition;
  Yt.transition = null;
  try {
    (R = 4), eo(e, t, n, r);
  } finally {
    (R = l), (Yt.transition = i);
  }
}
function eo(e, t, n, r) {
  if (Fr) {
    var l = di(e, t, n, r);
    if (l === null) Fl(e, t, r, Ir, n), Go(e, r);
    else if (r2(l, e, t, n, r)) r.stopPropagation();
    else if ((Go(e, r), t & 4 && -1 < n2.indexOf(e))) {
      for (; l !== null; ) {
        var i = qn(l);
        if ((i !== null && zs(i), (i = di(e, t, n, r)), i === null && Fl(e, t, r, Ir, n), i === l)) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Fl(e, t, r, null, n);
  }
}
var Ir = null;
function di(e, t, n, r) {
  if (((Ir = null), (e = Xi(r)), (e = xt(e)), e !== null))
    if (((t = Tt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ks(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ir = e), null;
}
function Ds(e) {
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
      switch (K0()) {
        case Ji:
          return 1;
        case _s:
          return 4;
        case Or:
        case Y0:
          return 16;
        case js:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var et = null,
  to = null,
  kr = null;
function Fs() {
  if (kr) return kr;
  var e,
    t = to,
    n = t.length,
    r,
    l = 'value' in et ? et.value : et.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (kr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Sr(e) {
  var t = e.keyCode;
  return 'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ar() {
  return !0;
}
function Jo() {
  return !1;
}
function we(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n), (this._targetInst = l), (this.type = r), (this.nativeEvent = i), (this.target = o), (this.currentTarget = null);
    for (var u in e) e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ar : Jo), (this.isPropagationStopped = Jo), this;
  }
  return (
    $(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1), (this.isDefaultPrevented = ar));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0), (this.isPropagationStopped = ar));
      },
      persist: function () {},
      isPersistent: ar,
    }),
    t
  );
}
var on = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  no = we(on),
  Jn = $({}, on, { view: 0, detail: 0 }),
  u2 = we(Jn),
  jl,
  Ll,
  mn,
  ll = $({}, Jn, {
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
    getModifierState: ro,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e ? e.movementX : (e !== mn && (mn && e.type === 'mousemove' ? ((jl = e.screenX - mn.screenX), (Ll = e.screenY - mn.screenY)) : (Ll = jl = 0), (mn = e)), jl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ll;
    },
  }),
  qo = we(ll),
  s2 = $({}, ll, { dataTransfer: 0 }),
  a2 = we(s2),
  c2 = $({}, Jn, { relatedTarget: 0 }),
  Pl = we(c2),
  f2 = $({}, on, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  d2 = we(f2),
  p2 = $({}, on, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  m2 = we(p2),
  h2 = $({}, on, { data: 0 }),
  bo = we(h2),
  v2 = { Esc: 'Escape', Spacebar: ' ', Left: 'ArrowLeft', Up: 'ArrowUp', Right: 'ArrowRight', Down: 'ArrowDown', Del: 'Delete', Win: 'OS', Menu: 'ContextMenu', Apps: 'ContextMenu', Scroll: 'ScrollLock', MozPrintableKey: 'Unidentified' },
  g2 = { 8: 'Backspace', 9: 'Tab', 12: 'Clear', 13: 'Enter', 16: 'Shift', 17: 'Control', 18: 'Alt', 19: 'Pause', 20: 'CapsLock', 27: 'Escape', 32: ' ', 33: 'PageUp', 34: 'PageDown', 35: 'End', 36: 'Home', 37: 'ArrowLeft', 38: 'ArrowUp', 39: 'ArrowRight', 40: 'ArrowDown', 45: 'Insert', 46: 'Delete', 112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4', 116: 'F5', 117: 'F6', 118: 'F7', 119: 'F8', 120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12', 144: 'NumLock', 145: 'ScrollLock', 224: 'Meta' },
  y2 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function w2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = y2[e]) ? !!t[e] : !1;
}
function ro() {
  return w2;
}
var x2 = $({}, Jn, {
    key: function (e) {
      if (e.key) {
        var t = v2[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress' ? ((e = Sr(e)), e === 13 ? 'Enter' : String.fromCharCode(e)) : e.type === 'keydown' || e.type === 'keyup' ? g2[e.keyCode] || 'Unidentified' : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ro,
    charCode: function (e) {
      return e.type === 'keypress' ? Sr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress' ? Sr(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
  }),
  C2 = we(x2),
  k2 = $({}, ll, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
  eu = we(k2),
  S2 = $({}, Jn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ro }),
  E2 = we(S2),
  N2 = $({}, on, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _2 = we(N2),
  j2 = $({}, ll, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  L2 = we(j2),
  P2 = [9, 13, 27, 32],
  lo = We && 'CompositionEvent' in window,
  En = null;
We && 'documentMode' in document && (En = document.documentMode);
var z2 = We && 'TextEvent' in window && !En,
  Is = We && (!lo || (En && 8 < En && 11 >= En)),
  tu = String.fromCharCode(32),
  nu = !1;
function Hs(e, t) {
  switch (e) {
    case 'keyup':
      return P2.indexOf(t.keyCode) !== -1;
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
function Us(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Dt = !1;
function T2(e, t) {
  switch (e) {
    case 'compositionend':
      return Us(t);
    case 'keypress':
      return t.which !== 32 ? null : ((nu = !0), tu);
    case 'textInput':
      return (e = t.data), e === tu && nu ? null : e;
    default:
      return null;
  }
}
function M2(e, t) {
  if (Dt) return e === 'compositionend' || (!lo && Hs(e, t)) ? ((e = Fs()), (kr = to = et = null), (Dt = !1), e) : null;
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
      return Is && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var R2 = { color: !0, date: !0, datetime: !0, 'datetime-local': !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ru(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!R2[e.type] : t === 'textarea';
}
function Vs(e, t, n, r) {
  gs(r), (t = Hr(t, 'onChange')), 0 < t.length && ((n = new no('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var Nn = null,
  In = null;
function O2(e) {
  Js(e, 0);
}
function il(e) {
  var t = Ht(e);
  if (cs(t)) return e;
}
function D2(e, t) {
  if (e === 'change') return t;
}
var $s = !1;
if (We) {
  var zl;
  if (We) {
    var Tl = 'oninput' in document;
    if (!Tl) {
      var lu = document.createElement('div');
      lu.setAttribute('oninput', 'return;'), (Tl = typeof lu.oninput == 'function');
    }
    zl = Tl;
  } else zl = !1;
  $s = zl && (!document.documentMode || 9 < document.documentMode);
}
function iu() {
  Nn && (Nn.detachEvent('onpropertychange', As), (In = Nn = null));
}
function As(e) {
  if (e.propertyName === 'value' && il(In)) {
    var t = [];
    Vs(t, In, e, Xi(e)), Cs(O2, t);
  }
}
function F2(e, t, n) {
  e === 'focusin' ? (iu(), (Nn = t), (In = n), Nn.attachEvent('onpropertychange', As)) : e === 'focusout' && iu();
}
function I2(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return il(In);
}
function H2(e, t) {
  if (e === 'click') return il(t);
}
function U2(e, t) {
  if (e === 'input' || e === 'change') return il(t);
}
function V2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Re = typeof Object.is == 'function' ? Object.is : V2;
function Hn(e, t) {
  if (Re(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Yl.call(t, l) || !Re(e[l], t[l])) return !1;
  }
  return !0;
}
function ou(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function uu(e, t) {
  var n = ou(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
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
    n = ou(n);
  }
}
function Bs(e, t) {
  return e && t ? (e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Bs(e, t.parentNode) : 'contains' in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1) : !1;
}
function Ws() {
  for (var e = window, t = Tr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Tr(e.document);
  }
  return t;
}
function io(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && ((t === 'input' && (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) || t === 'textarea' || e.contentEditable === 'true');
}
function $2(e) {
  var t = Ws(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Bs(n.ownerDocument.documentElement, n)) {
    if (r !== null && io(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n)) (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)), !e.extend && i > r && ((l = r), (r = i), (i = l)), (l = uu(n, i));
        var o = uu(n, r);
        l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && ((t = t.createRange()), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++) (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var A2 = We && 'documentMode' in document && 11 >= document.documentMode,
  Ft = null,
  pi = null,
  _n = null,
  mi = !1;
function su(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  mi || Ft == null || Ft !== Tr(r) || ((r = Ft), 'selectionStart' in r && io(r) ? (r = { start: r.selectionStart, end: r.selectionEnd }) : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()), (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })), (_n && Hn(_n, r)) || ((_n = r), (r = Hr(pi, 'onSelect')), 0 < r.length && ((t = new no('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = Ft))));
}
function cr(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
}
var It = { animationend: cr('Animation', 'AnimationEnd'), animationiteration: cr('Animation', 'AnimationIteration'), animationstart: cr('Animation', 'AnimationStart'), transitionend: cr('Transition', 'TransitionEnd') },
  Ml = {},
  Qs = {};
We && ((Qs = document.createElement('div').style), 'AnimationEvent' in window || (delete It.animationend.animation, delete It.animationiteration.animation, delete It.animationstart.animation), 'TransitionEvent' in window || delete It.transitionend.transition);
function ol(e) {
  if (Ml[e]) return Ml[e];
  if (!It[e]) return e;
  var t = It[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Qs) return (Ml[e] = t[n]);
  return e;
}
var Zs = ol('animationend'),
  Ks = ol('animationiteration'),
  Ys = ol('animationstart'),
  Gs = ol('transitionend'),
  Xs = new Map(),
  au = 'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(' ');
function pt(e, t) {
  Xs.set(e, t), zt(t, [e]);
}
for (var Rl = 0; Rl < au.length; Rl++) {
  var Ol = au[Rl],
    B2 = Ol.toLowerCase(),
    W2 = Ol[0].toUpperCase() + Ol.slice(1);
  pt(B2, 'on' + W2);
}
pt(Zs, 'onAnimationEnd');
pt(Ks, 'onAnimationIteration');
pt(Ys, 'onAnimationStart');
pt('dblclick', 'onDoubleClick');
pt('focusin', 'onFocus');
pt('focusout', 'onBlur');
pt(Gs, 'onTransitionEnd');
Jt('onMouseEnter', ['mouseout', 'mouseover']);
Jt('onMouseLeave', ['mouseout', 'mouseover']);
Jt('onPointerEnter', ['pointerout', 'pointerover']);
Jt('onPointerLeave', ['pointerout', 'pointerover']);
zt('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
zt('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '));
zt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
zt('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
zt('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
zt('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Cn = 'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(' '),
  Q2 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Cn));
function cu(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), B0(r, t, void 0, e), (e.currentTarget = null);
}
function Js(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          cu(l, u, c), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (((u = r[o]), (s = u.instance), (c = u.currentTarget), (u = u.listener), s !== i && l.isPropagationStopped())) break e;
          cu(l, u, c), (i = s);
        }
    }
  }
  if (Rr) throw ((e = ai), (Rr = !1), (ai = null), e);
}
function D(e, t) {
  var n = t[wi];
  n === void 0 && (n = t[wi] = new Set());
  var r = e + '__bubble';
  n.has(r) || (qs(t, e, 2, !1), n.add(r));
}
function Dl(e, t, n) {
  var r = 0;
  t && (r |= 4), qs(n, e, r, t);
}
var fr = '_reactListening' + Math.random().toString(36).slice(2);
function Un(e) {
  if (!e[fr]) {
    (e[fr] = !0),
      is.forEach(function (n) {
        n !== 'selectionchange' && (Q2.has(n) || Dl(n, !1, e), Dl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[fr] || ((t[fr] = !0), Dl('selectionchange', !1, t));
  }
}
function qs(e, t, n, r) {
  switch (Ds(t)) {
    case 1:
      var l = i2;
      break;
    case 4:
      l = o2;
      break;
    default:
      l = eo;
  }
  (n = l.bind(null, t, n, e)), (l = void 0), !si || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0), r ? (l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0)) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Fl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if ((s === 3 || s === 4) && ((s = o.stateNode.containerInfo), s === l || (s.nodeType === 8 && s.parentNode === l))) return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = xt(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Cs(function () {
    var c = i,
      v = Xi(n),
      h = [];
    e: {
      var m = Xs.get(e);
      if (m !== void 0) {
        var w = no,
          x = e;
        switch (e) {
          case 'keypress':
            if (Sr(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            w = C2;
            break;
          case 'focusin':
            (x = 'focus'), (w = Pl);
            break;
          case 'focusout':
            (x = 'blur'), (w = Pl);
            break;
          case 'beforeblur':
          case 'afterblur':
            w = Pl;
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
            w = qo;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            w = a2;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            w = E2;
            break;
          case Zs:
          case Ks:
          case Ys:
            w = d2;
            break;
          case Gs:
            w = _2;
            break;
          case 'scroll':
            w = u2;
            break;
          case 'wheel':
            w = L2;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            w = m2;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            w = eu;
        }
        var C = (t & 4) !== 0,
          I = !C && e === 'scroll',
          f = C ? (m !== null ? m + 'Capture' : null) : m;
        C = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var g = d.stateNode;
          if ((d.tag === 5 && g !== null && ((d = g), f !== null && ((g = Rn(a, f)), g != null && C.push(Vn(a, g, d)))), I)) break;
          a = a.return;
        }
        0 < C.length && ((m = new w(m, x, null, n, v)), h.push({ event: m, listeners: C }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (((m = e === 'mouseover' || e === 'pointerover'), (w = e === 'mouseout' || e === 'pointerout'), m && n !== oi && (x = n.relatedTarget || n.fromElement) && (xt(x) || x[Qe]))) break e;
        if ((w || m) && ((m = v.window === v ? v : (m = v.ownerDocument) ? m.defaultView || m.parentWindow : window), w ? ((x = n.relatedTarget || n.toElement), (w = c), (x = x ? xt(x) : null), x !== null && ((I = Tt(x)), x !== I || (x.tag !== 5 && x.tag !== 6)) && (x = null)) : ((w = null), (x = c)), w !== x)) {
          if (((C = qo), (g = 'onMouseLeave'), (f = 'onMouseEnter'), (a = 'mouse'), (e === 'pointerout' || e === 'pointerover') && ((C = eu), (g = 'onPointerLeave'), (f = 'onPointerEnter'), (a = 'pointer')), (I = w == null ? m : Ht(w)), (d = x == null ? m : Ht(x)), (m = new C(g, a + 'leave', w, n, v)), (m.target = I), (m.relatedTarget = d), (g = null), xt(v) === c && ((C = new C(f, a + 'enter', x, n, v)), (C.target = d), (C.relatedTarget = I), (g = C)), (I = g), w && x))
            t: {
              for (C = w, f = x, a = 0, d = C; d; d = Mt(d)) a++;
              for (d = 0, g = f; g; g = Mt(g)) d++;
              for (; 0 < a - d; ) (C = Mt(C)), a--;
              for (; 0 < d - a; ) (f = Mt(f)), d--;
              for (; a--; ) {
                if (C === f || (f !== null && C === f.alternate)) break t;
                (C = Mt(C)), (f = Mt(f));
              }
              C = null;
            }
          else C = null;
          w !== null && fu(h, m, w, C, !1), x !== null && I !== null && fu(h, I, x, C, !0);
        }
      }
      e: {
        if (((m = c ? Ht(c) : window), (w = m.nodeName && m.nodeName.toLowerCase()), w === 'select' || (w === 'input' && m.type === 'file'))) var S = D2;
        else if (ru(m))
          if ($s) S = U2;
          else {
            S = I2;
            var N = F2;
          }
        else (w = m.nodeName) && w.toLowerCase() === 'input' && (m.type === 'checkbox' || m.type === 'radio') && (S = H2);
        if (S && (S = S(e, c))) {
          Vs(h, S, n, v);
          break e;
        }
        N && N(e, m, c), e === 'focusout' && (N = m._wrapperState) && N.controlled && m.type === 'number' && ti(m, 'number', m.value);
      }
      switch (((N = c ? Ht(c) : window), e)) {
        case 'focusin':
          (ru(N) || N.contentEditable === 'true') && ((Ft = N), (pi = c), (_n = null));
          break;
        case 'focusout':
          _n = pi = Ft = null;
          break;
        case 'mousedown':
          mi = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (mi = !1), su(h, n, v);
          break;
        case 'selectionchange':
          if (A2) break;
        case 'keydown':
        case 'keyup':
          su(h, n, v);
      }
      var _;
      if (lo)
        e: {
          switch (e) {
            case 'compositionstart':
              var j = 'onCompositionStart';
              break e;
            case 'compositionend':
              j = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              j = 'onCompositionUpdate';
              break e;
          }
          j = void 0;
        }
      else Dt ? Hs(e, n) && (j = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (j = 'onCompositionStart');
      j && (Is && n.locale !== 'ko' && (Dt || j !== 'onCompositionStart' ? j === 'onCompositionEnd' && Dt && (_ = Fs()) : ((et = v), (to = 'value' in et ? et.value : et.textContent), (Dt = !0))), (N = Hr(c, j)), 0 < N.length && ((j = new bo(j, e, null, n, v)), h.push({ event: j, listeners: N }), _ ? (j.data = _) : ((_ = Us(n)), _ !== null && (j.data = _)))), (_ = z2 ? T2(e, n) : M2(e, n)) && ((c = Hr(c, 'onBeforeInput')), 0 < c.length && ((v = new bo('onBeforeInput', 'beforeinput', null, n, v)), h.push({ event: v, listeners: c }), (v.data = _)));
    }
    Js(h, t);
  });
}
function Vn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Hr(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 && i !== null && ((l = i), (i = Rn(e, n)), i != null && r.unshift(Vn(e, i, l)), (i = Rn(e, t)), i != null && r.push(Vn(e, i, l))), (e = e.return);
  }
  return r;
}
function Mt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function fu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && c !== null && ((u = c), l ? ((s = Rn(n, i)), s != null && o.unshift(Vn(n, s, u))) : l || ((s = Rn(n, i)), s != null && o.push(Vn(n, s, u)))), (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Z2 = /\r\n?/g,
  K2 = /\u0000|\uFFFD/g;
function du(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Z2,
      `
`
    )
    .replace(K2, '');
}
function dr(e, t, n) {
  if (((t = du(t)), du(e) !== t && n)) throw Error(y(425));
}
function Ur() {}
var hi = null,
  vi = null;
function gi(e, t) {
  return e === 'textarea' || e === 'noscript' || typeof t.children == 'string' || typeof t.children == 'number' || (typeof t.dangerouslySetInnerHTML == 'object' && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null);
}
var yi = typeof setTimeout == 'function' ? setTimeout : void 0,
  Y2 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  pu = typeof Promise == 'function' ? Promise : void 0,
  G2 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof pu < 'u'
      ? function (e) {
          return pu.resolve(null).then(e).catch(X2);
        }
      : yi;
function X2(e) {
  setTimeout(function () {
    throw e;
  });
}
function Il(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), Fn(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  Fn(t);
}
function ot(e) {
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
function mu(e) {
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
var un = Math.random().toString(36).slice(2),
  Fe = '__reactFiber$' + un,
  $n = '__reactProps$' + un,
  Qe = '__reactContainer$' + un,
  wi = '__reactEvents$' + un,
  J2 = '__reactListeners$' + un,
  q2 = '__reactHandles$' + un;
function xt(e) {
  var t = e[Fe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Qe] || n[Fe])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = mu(e); e !== null; ) {
          if ((n = e[Fe])) return n;
          e = mu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function qn(e) {
  return (e = e[Fe] || e[Qe]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Ht(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function ul(e) {
  return e[$n] || null;
}
var xi = [],
  Ut = -1;
function mt(e) {
  return { current: e };
}
function F(e) {
  0 > Ut || ((e.current = xi[Ut]), (xi[Ut] = null), Ut--);
}
function O(e, t) {
  Ut++, (xi[Ut] = e.current), (e.current = t);
}
var dt = {},
  le = mt(dt),
  fe = mt(!1),
  Nt = dt;
function qt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = l)), l;
}
function de(e) {
  return (e = e.childContextTypes), e != null;
}
function Vr() {
  F(fe), F(le);
}
function hu(e, t, n) {
  if (le.current !== dt) throw Error(y(168));
  O(le, t), O(fe, n);
}
function bs(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, F0(e) || 'Unknown', l));
  return $({}, n, r);
}
function $r(e) {
  return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dt), (Nt = le.current), O(le, e), O(fe, fe.current), !0;
}
function vu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n ? ((e = bs(e, t, Nt)), (r.__reactInternalMemoizedMergedChildContext = e), F(fe), F(le), O(le, e)) : F(fe), O(fe, n);
}
var Ve = null,
  sl = !1,
  Hl = !1;
function ea(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function b2(e) {
  (sl = !0), ea(e);
}
function ht() {
  if (!Hl && Ve !== null) {
    Hl = !0;
    var e = 0,
      t = R;
    try {
      var n = Ve;
      for (R = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ve = null), (sl = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), Ns(Ji, ht), l);
    } finally {
      (R = t), (Hl = !1);
    }
  }
  return null;
}
var Vt = [],
  $t = 0,
  Ar = null,
  Br = 0,
  xe = [],
  Ce = 0,
  _t = null,
  $e = 1,
  Ae = '';
function yt(e, t) {
  (Vt[$t++] = Br), (Vt[$t++] = Ar), (Ar = e), (Br = t);
}
function ta(e, t, n) {
  (xe[Ce++] = $e), (xe[Ce++] = Ae), (xe[Ce++] = _t), (_t = e);
  var r = $e;
  e = Ae;
  var l = 32 - Te(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Te(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)), (r >>= o), (l -= o), ($e = (1 << (32 - Te(t) + l)) | (n << l) | r), (Ae = i + e);
  } else ($e = (1 << i) | (n << l) | r), (Ae = e);
}
function oo(e) {
  e.return !== null && (yt(e, 1), ta(e, 1, 0));
}
function uo(e) {
  for (; e === Ar; ) (Ar = Vt[--$t]), (Vt[$t] = null), (Br = Vt[--$t]), (Vt[$t] = null);
  for (; e === _t; ) (_t = xe[--Ce]), (xe[Ce] = null), (Ae = xe[--Ce]), (xe[Ce] = null), ($e = xe[--Ce]), (xe[Ce] = null);
}
var ve = null,
  he = null,
  H = !1,
  ze = null;
function na(e, t) {
  var n = ke(5, null, null, 0);
  (n.elementType = 'DELETED'), (n.stateNode = t), (n.return = e), (t = e.deletions), t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function gu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t), t !== null ? ((e.stateNode = t), (ve = e), (he = ot(t.firstChild)), !0) : !1;
    case 6:
      return (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (ve = e), (he = null), !0) : !1;
    case 13:
      return (t = t.nodeType !== 8 ? null : t), t !== null ? ((n = _t !== null ? { id: $e, overflow: Ae } : null), (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }), (n = ke(18, null, null, 0)), (n.stateNode = t), (n.return = e), (e.child = n), (ve = e), (he = null), !0) : !1;
    default:
      return !1;
  }
}
function Ci(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ki(e) {
  if (H) {
    var t = he;
    if (t) {
      var n = t;
      if (!gu(e, t)) {
        if (Ci(e)) throw Error(y(418));
        t = ot(n.nextSibling);
        var r = ve;
        t && gu(e, t) ? na(r, n) : ((e.flags = (e.flags & -4097) | 2), (H = !1), (ve = e));
      }
    } else {
      if (Ci(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (ve = e);
    }
  }
}
function yu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ve = e;
}
function pr(e) {
  if (e !== ve) return !1;
  if (!H) return yu(e), (H = !0), !1;
  var t;
  if (((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== 'head' && t !== 'body' && !gi(e.type, e.memoizedProps))), t && (t = he))) {
    if (Ci(e)) throw (ra(), Error(y(418)));
    for (; t; ) na(e, t), (t = ot(t.nextSibling));
  }
  if ((yu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              he = ot(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else he = ve ? ot(e.stateNode.nextSibling) : null;
  return !0;
}
function ra() {
  for (var e = he; e; ) e = ot(e.nextSibling);
}
function bt() {
  (he = ve = null), (H = !1);
}
function so(e) {
  ze === null ? (ze = [e]) : ze.push(e);
}
var ec = Ye.ReactCurrentBatchConfig;
function Le(e, t) {
  if (e && e.defaultProps) {
    (t = $({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Wr = mt(null),
  Qr = null,
  At = null,
  ao = null;
function co() {
  ao = At = Qr = null;
}
function fo(e) {
  var t = Wr.current;
  F(Wr), (e._currentValue = t);
}
function Si(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (((e.childLanes & t) !== t ? ((e.childLanes |= t), r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)) break;
    e = e.return;
  }
}
function Gt(e, t) {
  (Qr = e), (ao = At = null), (e = e.dependencies), e !== null && e.firstContext !== null && (e.lanes & t && (ce = !0), (e.firstContext = null));
}
function Ee(e) {
  var t = e._currentValue;
  if (ao !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), At === null)) {
      if (Qr === null) throw Error(y(308));
      (At = e), (Qr.dependencies = { lanes: 0, firstContext: e });
    } else At = At.next = e;
  return t;
}
var Ct = null;
function po(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function la(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? ((n.next = n), po(t)) : ((n.next = l.next), (l.next = n)), (t.interleaved = n), Ze(e, r);
}
function Ze(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Je = !1;
function mo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ia(e, t) {
  (e = e.updateQueue), t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Be(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ut(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (r.pending = t), Ze(e, n);
  }
  return (l = r.interleaved), l === null ? ((t.next = t), po(r)) : ((t.next = l.next), (l.next = t)), (r.interleaved = t), Ze(e, n);
}
function Er(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qi(e, n);
  }
}
function wu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }), (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Zr(e, t, n, r) {
  var l = e.updateQueue;
  Je = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
    var v = e.alternate;
    v !== null && ((v = v.updateQueue), (u = v.lastBaseUpdate), u !== o && (u === null ? (v.firstBaseUpdate = c) : (u.next = c), (v.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (v = c = s = null), (u = i);
    do {
      var m = u.lane,
        w = u.eventTime;
      if ((r & m) === m) {
        v !== null && (v = v.next = { eventTime: w, lane: 0, tag: u.tag, payload: u.payload, callback: u.callback, next: null });
        e: {
          var x = e,
            C = u;
          switch (((m = t), (w = n), C.tag)) {
            case 1:
              if (((x = C.payload), typeof x == 'function')) {
                h = x.call(w, h, m);
                break e;
              }
              h = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (((x = C.payload), (m = typeof x == 'function' ? x.call(w, h, m) : x), m == null)) break e;
              h = $({}, h, m);
              break e;
            case 2:
              Je = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && ((e.flags |= 64), (m = l.effects), m === null ? (l.effects = [u]) : m.push(u));
      } else (w = { eventTime: w, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }), v === null ? ((c = v = w), (s = h)) : (v = v.next = w), (o |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u), (u = m.next), (m.next = null), (l.lastBaseUpdate = m), (l.shared.pending = null);
      }
    } while (1);
    if ((v === null && (s = h), (l.baseState = s), (l.firstBaseUpdate = c), (l.lastBaseUpdate = v), (t = l.shared.interleaved), t !== null)) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Lt |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function xu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function')) throw Error(y(191, l));
        l.call(r);
      }
    }
}
var oa = new ls.Component().refs;
function Ei(e, t, n, r) {
  (t = e.memoizedState), (n = n(r, t)), (n = n == null ? t : $({}, t, n)), (e.memoizedState = n), e.lanes === 0 && (e.updateQueue.baseState = n);
}
var al = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = at(e),
      i = Be(r, l);
    (i.payload = t), n != null && (i.callback = n), (t = ut(e, i, l)), t !== null && (Me(t, e, l, r), Er(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = at(e),
      i = Be(r, l);
    (i.tag = 1), (i.payload = t), n != null && (i.callback = n), (t = ut(e, i, l)), t !== null && (Me(t, e, l, r), Er(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = oe(),
      r = at(e),
      l = Be(n, r);
    (l.tag = 2), t != null && (l.callback = t), (t = ut(e, l, r)), t !== null && (Me(t, e, r, n), Er(t, e, r));
  },
};
function Cu(e, t, n, r, l, i, o) {
  return (e = e.stateNode), typeof e.shouldComponentUpdate == 'function' ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Hn(n, r) || !Hn(l, i) : !0;
}
function ua(e, t, n) {
  var r = !1,
    l = dt,
    i = t.contextType;
  return typeof i == 'object' && i !== null ? (i = Ee(i)) : ((l = de(t) ? Nt : le.current), (r = t.contextTypes), (i = (r = r != null) ? qt(e, l) : dt)), (t = new t(n, i)), (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null), (t.updater = al), (e.stateNode = t), (t._reactInternals = e), r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = l), (e.__reactInternalMemoizedMaskedChildContext = i)), t;
}
function ku(e, t, n, r) {
  (e = t.state), typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && al.enqueueReplaceState(t, t.state, null);
}
function Ni(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = oa), mo(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null ? (l.context = Ee(i)) : ((i = de(t) ? Nt : le.current), (l.context = qt(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Ei(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' || typeof l.getSnapshotBeforeUpdate == 'function' || (typeof l.UNSAFE_componentWillMount != 'function' && typeof l.componentWillMount != 'function') || ((t = l.state), typeof l.componentWillMount == 'function' && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount(), t !== l.state && al.enqueueReplaceState(l, l.state, null), Zr(e, n, l, r), (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function hn(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = '' + e;
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === oa && (u = l.refs = {}), o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function mr(e, t) {
  throw ((e = Object.prototype.toString.call(t)), Error(y(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)));
}
function Su(e) {
  var t = e._init;
  return t(e._payload);
}
function sa(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = ct(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, a, d) {
    return (f.index = d), e ? ((d = f.alternate), d !== null ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d) : ((f.flags |= 2), a)) : ((f.flags |= 1048576), a);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, g) {
    return a === null || a.tag !== 6 ? ((a = Ql(d, f.mode, g)), (a.return = f), a) : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, g) {
    var S = d.type;
    return S === Ot ? v(f, a, d.props.children, g, d.key) : a !== null && (a.elementType === S || (typeof S == 'object' && S !== null && S.$$typeof === Xe && Su(S) === a.type)) ? ((g = l(a, d.props)), (g.ref = hn(f, a, d)), (g.return = f), g) : ((g = zr(d.type, d.key, d.props, null, f.mode, g)), (g.ref = hn(f, a, d)), (g.return = f), g);
  }
  function c(f, a, d, g) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? ((a = Zl(d, f.mode, g)), (a.return = f), a) : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function v(f, a, d, g, S) {
    return a === null || a.tag !== 7 ? ((a = Et(d, f.mode, g, S)), (a.return = f), a) : ((a = l(a, d)), (a.return = f), a);
  }
  function h(f, a, d) {
    if ((typeof a == 'string' && a !== '') || typeof a == 'number') return (a = Ql('' + a, f.mode, d)), (a.return = f), a;
    if (typeof a == 'object' && a !== null) {
      switch (a.$$typeof) {
        case rr:
          return (d = zr(a.type, a.key, a.props, null, f.mode, d)), (d.ref = hn(f, null, a)), (d.return = f), d;
        case Rt:
          return (a = Zl(a, f.mode, d)), (a.return = f), a;
        case Xe:
          var g = a._init;
          return h(f, g(a._payload), d);
      }
      if (wn(a) || cn(a)) return (a = Et(a, f.mode, d, null)), (a.return = f), a;
      mr(f, a);
    }
    return null;
  }
  function m(f, a, d, g) {
    var S = a !== null ? a.key : null;
    if ((typeof d == 'string' && d !== '') || typeof d == 'number') return S !== null ? null : u(f, a, '' + d, g);
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case rr:
          return d.key === S ? s(f, a, d, g) : null;
        case Rt:
          return d.key === S ? c(f, a, d, g) : null;
        case Xe:
          return (S = d._init), m(f, a, S(d._payload), g);
      }
      if (wn(d) || cn(d)) return S !== null ? null : v(f, a, d, g, null);
      mr(f, d);
    }
    return null;
  }
  function w(f, a, d, g, S) {
    if ((typeof g == 'string' && g !== '') || typeof g == 'number') return (f = f.get(d) || null), u(a, f, '' + g, S);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case rr:
          return (f = f.get(g.key === null ? d : g.key) || null), s(a, f, g, S);
        case Rt:
          return (f = f.get(g.key === null ? d : g.key) || null), c(a, f, g, S);
        case Xe:
          var N = g._init;
          return w(f, a, d, N(g._payload), S);
      }
      if (wn(g) || cn(g)) return (f = f.get(d) || null), v(a, f, g, S, null);
      mr(a, g);
    }
    return null;
  }
  function x(f, a, d, g) {
    for (var S = null, N = null, _ = a, j = (a = 0), B = null; _ !== null && j < d.length; j++) {
      _.index > j ? ((B = _), (_ = null)) : (B = _.sibling);
      var T = m(f, _, d[j], g);
      if (T === null) {
        _ === null && (_ = B);
        break;
      }
      e && _ && T.alternate === null && t(f, _), (a = i(T, a, j)), N === null ? (S = T) : (N.sibling = T), (N = T), (_ = B);
    }
    if (j === d.length) return n(f, _), H && yt(f, j), S;
    if (_ === null) {
      for (; j < d.length; j++) (_ = h(f, d[j], g)), _ !== null && ((a = i(_, a, j)), N === null ? (S = _) : (N.sibling = _), (N = _));
      return H && yt(f, j), S;
    }
    for (_ = r(f, _); j < d.length; j++) (B = w(_, f, j, d[j], g)), B !== null && (e && B.alternate !== null && _.delete(B.key === null ? j : B.key), (a = i(B, a, j)), N === null ? (S = B) : (N.sibling = B), (N = B));
    return (
      e &&
        _.forEach(function (_e) {
          return t(f, _e);
        }),
      H && yt(f, j),
      S
    );
  }
  function C(f, a, d, g) {
    var S = cn(d);
    if (typeof S != 'function') throw Error(y(150));
    if (((d = S.call(d)), d == null)) throw Error(y(151));
    for (var N = (S = null), _ = a, j = (a = 0), B = null, T = d.next(); _ !== null && !T.done; j++, T = d.next()) {
      _.index > j ? ((B = _), (_ = null)) : (B = _.sibling);
      var _e = m(f, _, T.value, g);
      if (_e === null) {
        _ === null && (_ = B);
        break;
      }
      e && _ && _e.alternate === null && t(f, _), (a = i(_e, a, j)), N === null ? (S = _e) : (N.sibling = _e), (N = _e), (_ = B);
    }
    if (T.done) return n(f, _), H && yt(f, j), S;
    if (_ === null) {
      for (; !T.done; j++, T = d.next()) (T = h(f, T.value, g)), T !== null && ((a = i(T, a, j)), N === null ? (S = T) : (N.sibling = T), (N = T));
      return H && yt(f, j), S;
    }
    for (_ = r(f, _); !T.done; j++, T = d.next()) (T = w(_, f, j, T.value, g)), T !== null && (e && T.alternate !== null && _.delete(T.key === null ? j : T.key), (a = i(T, a, j)), N === null ? (S = T) : (N.sibling = T), (N = T));
    return (
      e &&
        _.forEach(function (sn) {
          return t(f, sn);
        }),
      H && yt(f, j),
      S
    );
  }
  function I(f, a, d, g) {
    if ((typeof d == 'object' && d !== null && d.type === Ot && d.key === null && (d = d.props.children), typeof d == 'object' && d !== null)) {
      switch (d.$$typeof) {
        case rr:
          e: {
            for (var S = d.key, N = a; N !== null; ) {
              if (N.key === S) {
                if (((S = d.type), S === Ot)) {
                  if (N.tag === 7) {
                    n(f, N.sibling), (a = l(N, d.props.children)), (a.return = f), (f = a);
                    break e;
                  }
                } else if (N.elementType === S || (typeof S == 'object' && S !== null && S.$$typeof === Xe && Su(S) === N.type)) {
                  n(f, N.sibling), (a = l(N, d.props)), (a.ref = hn(f, N, d)), (a.return = f), (f = a);
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            d.type === Ot ? ((a = Et(d.props.children, f.mode, g, d.key)), (a.return = f), (f = a)) : ((g = zr(d.type, d.key, d.props, null, f.mode, g)), (g.ref = hn(f, a, d)), (g.return = f), (f = g));
          }
          return o(f);
        case Rt:
          e: {
            for (N = d.key; a !== null; ) {
              if (a.key === N)
                if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  n(f, a.sibling), (a = l(a, d.children || [])), (a.return = f), (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = Zl(d, f.mode, g)), (a.return = f), (f = a);
          }
          return o(f);
        case Xe:
          return (N = d._init), I(f, a, N(d._payload), g);
      }
      if (wn(d)) return x(f, a, d, g);
      if (cn(d)) return C(f, a, d, g);
      mr(f, d);
    }
    return (typeof d == 'string' && d !== '') || typeof d == 'number' ? ((d = '' + d), a !== null && a.tag === 6 ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a)) : (n(f, a), (a = Ql(d, f.mode, g)), (a.return = f), (f = a)), o(f)) : n(f, a);
  }
  return I;
}
var en = sa(!0),
  aa = sa(!1),
  bn = {},
  He = mt(bn),
  An = mt(bn),
  Bn = mt(bn);
function kt(e) {
  if (e === bn) throw Error(y(174));
  return e;
}
function ho(e, t) {
  switch ((O(Bn, t), O(An, e), O(He, bn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ri(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = ri(t, e));
  }
  F(He), O(He, t);
}
function tn() {
  F(He), F(An), F(Bn);
}
function ca(e) {
  kt(Bn.current);
  var t = kt(He.current),
    n = ri(t, e.type);
  t !== n && (O(An, e), O(He, n));
}
function vo(e) {
  An.current === e && (F(He), F(An));
}
var U = mt(0);
function Kr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t;
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
var Ul = [];
function go() {
  for (var e = 0; e < Ul.length; e++) Ul[e]._workInProgressVersionPrimary = null;
  Ul.length = 0;
}
var Nr = Ye.ReactCurrentDispatcher,
  Vl = Ye.ReactCurrentBatchConfig,
  jt = 0,
  V = null,
  K = null,
  X = null,
  Yr = !1,
  jn = !1,
  Wn = 0,
  tc = 0;
function te() {
  throw Error(y(321));
}
function yo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Re(e[n], t[n])) return !1;
  return !0;
}
function wo(e, t, n, r, l, i) {
  if (((jt = i), (V = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (Nr.current = e === null || e.memoizedState === null ? ic : oc), (e = n(r, l)), jn)) {
    i = 0;
    do {
      if (((jn = !1), (Wn = 0), 25 <= i)) throw Error(y(301));
      (i += 1), (X = K = null), (t.updateQueue = null), (Nr.current = uc), (e = n(r, l));
    } while (jn);
  }
  if (((Nr.current = Gr), (t = K !== null && K.next !== null), (jt = 0), (X = K = V = null), (Yr = !1), t)) throw Error(y(300));
  return e;
}
function xo() {
  var e = Wn !== 0;
  return (Wn = 0), e;
}
function De() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return X === null ? (V.memoizedState = X = e) : (X = X.next = e), X;
}
function Ne() {
  if (K === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = K.next;
  var t = X === null ? V.memoizedState : X.next;
  if (t !== null) (X = t), (K = e);
  else {
    if (e === null) throw Error(y(310));
    (K = e), (e = { memoizedState: K.memoizedState, baseState: K.baseState, baseQueue: K.baseQueue, queue: K.queue, next: null }), X === null ? (V.memoizedState = X = e) : (X = X.next = e);
  }
  return X;
}
function Qn(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function $l(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = K,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      c = i;
    do {
      var v = c.lane;
      if ((jt & v) === v) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = { lane: v, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
        s === null ? ((u = s = h), (o = r)) : (s = s.next = h), (V.lanes |= v), (Lt |= v);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (o = r) : (s.next = u), Re(r, t.memoizedState) || (ce = !0), (t.memoizedState = r), (t.baseState = o), (t.baseQueue = s), (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (V.lanes |= i), (Lt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Al(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Re(i, t.memoizedState) || (ce = !0), (t.memoizedState = i), t.baseQueue === null && (t.baseState = i), (n.lastRenderedState = i);
  }
  return [i, r];
}
function fa() {}
function da(e, t) {
  var n = V,
    r = Ne(),
    l = t(),
    i = !Re(r.memoizedState, l);
  if ((i && ((r.memoizedState = l), (ce = !0)), (r = r.queue), Co(ha.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || (X !== null && X.memoizedState.tag & 1))) {
    if (((n.flags |= 2048), Zn(9, ma.bind(null, n, r, l, t), void 0, null), J === null)) throw Error(y(349));
    jt & 30 || pa(n, t, l);
  }
  return l;
}
function pa(e, t, n) {
  (e.flags |= 16384), (e = { getSnapshot: t, value: n }), (t = V.updateQueue), t === null ? ((t = { lastEffect: null, stores: null }), (V.updateQueue = t), (t.stores = [e])) : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ma(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), va(t) && ga(e);
}
function ha(e, t, n) {
  return n(function () {
    va(t) && ga(e);
  });
}
function va(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Re(e, n);
  } catch {
    return !0;
  }
}
function ga(e) {
  var t = Ze(e, 1);
  t !== null && Me(t, e, 1, -1);
}
function Eu(e) {
  var t = De();
  return typeof e == 'function' && (e = e()), (t.memoizedState = t.baseState = e), (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Qn, lastRenderedState: e }), (t.queue = e), (e = e.dispatch = lc.bind(null, V, e)), [t.memoizedState, e];
}
function Zn(e, t, n, r) {
  return (e = { tag: e, create: t, destroy: n, deps: r, next: null }), (t = V.updateQueue), t === null ? ((t = { lastEffect: null, stores: null }), (V.updateQueue = t), (t.lastEffect = e.next = e)) : ((n = t.lastEffect), n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))), e;
}
function ya() {
  return Ne().memoizedState;
}
function _r(e, t, n, r) {
  var l = De();
  (V.flags |= e), (l.memoizedState = Zn(1 | t, n, void 0, r === void 0 ? null : r));
}
function cl(e, t, n, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (K !== null) {
    var o = K.memoizedState;
    if (((i = o.destroy), r !== null && yo(r, o.deps))) {
      l.memoizedState = Zn(t, n, i, r);
      return;
    }
  }
  (V.flags |= e), (l.memoizedState = Zn(1 | t, n, i, r));
}
function Nu(e, t) {
  return _r(8390656, 8, e, t);
}
function Co(e, t) {
  return cl(2048, 8, e, t);
}
function wa(e, t) {
  return cl(4, 2, e, t);
}
function xa(e, t) {
  return cl(4, 4, e, t);
}
function Ca(e, t) {
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
function ka(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), cl(4, 4, Ca.bind(null, t, e), n);
}
function ko() {}
function Sa(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Ea(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yo(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Na(e, t, n) {
  return jt & 21 ? (Re(n, t) || ((n = Ls()), (V.lanes |= n), (Lt |= n), (e.baseState = !0)), t) : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = n));
}
function nc(e, t) {
  var n = R;
  (R = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Vl.transition;
  Vl.transition = {};
  try {
    e(!1), t();
  } finally {
    (R = n), (Vl.transition = r);
  }
}
function _a() {
  return Ne().memoizedState;
}
function rc(e, t, n) {
  var r = at(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), ja(e))) La(t, n);
  else if (((n = la(e, t, n, r)), n !== null)) {
    var l = oe();
    Me(n, e, r, l), Pa(n, t, r);
  }
}
function lc(e, t, n) {
  var r = at(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ja(e)) La(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Re(u, o))) {
          var s = t.interleaved;
          s === null ? ((l.next = l), po(t)) : ((l.next = s.next), (s.next = l)), (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = la(e, t, l, r)), n !== null && ((l = oe()), Me(n, e, r, l), Pa(n, t, r));
  }
}
function ja(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function La(e, t) {
  jn = Yr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Pa(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qi(e, n);
  }
}
var Gr = { readContext: Ee, useCallback: te, useContext: te, useEffect: te, useImperativeHandle: te, useInsertionEffect: te, useLayoutEffect: te, useMemo: te, useReducer: te, useRef: te, useState: te, useDebugValue: te, useDeferredValue: te, useTransition: te, useMutableSource: te, useSyncExternalStore: te, useId: te, unstable_isNewReconciler: !1 },
  ic = {
    readContext: Ee,
    useCallback: function (e, t) {
      return (De().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ee,
    useEffect: Nu,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), _r(4194308, 4, Ca.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return _r(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return _r(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = De();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = De();
      return (t = n !== void 0 ? n(t) : t), (r.memoizedState = r.baseState = t), (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }), (r.queue = e), (e = e.dispatch = rc.bind(null, V, e)), [r.memoizedState, e];
    },
    useRef: function (e) {
      var t = De();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Eu,
    useDebugValue: ko,
    useDeferredValue: function (e) {
      return (De().memoizedState = e);
    },
    useTransition: function () {
      var e = Eu(!1),
        t = e[0];
      return (e = nc.bind(null, e[1])), (De().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        l = De();
      if (H) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), J === null)) throw Error(y(349));
        jt & 30 || pa(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (l.queue = i), Nu(ha.bind(null, r, i, e), [e]), (r.flags |= 2048), Zn(9, ma.bind(null, r, i, n, t), void 0, null), n;
    },
    useId: function () {
      var e = De(),
        t = J.identifierPrefix;
      if (H) {
        var n = Ae,
          r = $e;
        (n = (r & ~(1 << (32 - Te(r) - 1))).toString(32) + n), (t = ':' + t + 'R' + n), (n = Wn++), 0 < n && (t += 'H' + n.toString(32)), (t += ':');
      } else (n = tc++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  oc = {
    readContext: Ee,
    useCallback: Sa,
    useContext: Ee,
    useEffect: Co,
    useImperativeHandle: ka,
    useInsertionEffect: wa,
    useLayoutEffect: xa,
    useMemo: Ea,
    useReducer: $l,
    useRef: ya,
    useState: function () {
      return $l(Qn);
    },
    useDebugValue: ko,
    useDeferredValue: function (e) {
      var t = Ne();
      return Na(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = $l(Qn)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: fa,
    useSyncExternalStore: da,
    useId: _a,
    unstable_isNewReconciler: !1,
  },
  uc = {
    readContext: Ee,
    useCallback: Sa,
    useContext: Ee,
    useEffect: Co,
    useImperativeHandle: ka,
    useInsertionEffect: wa,
    useLayoutEffect: xa,
    useMemo: Ea,
    useReducer: Al,
    useRef: ya,
    useState: function () {
      return Al(Qn);
    },
    useDebugValue: ko,
    useDeferredValue: function (e) {
      var t = Ne();
      return K === null ? (t.memoizedState = e) : Na(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = Al(Qn)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: fa,
    useSyncExternalStore: da,
    useId: _a,
    unstable_isNewReconciler: !1,
  };
function nn(e, t) {
  try {
    var n = '',
      r = t;
    do (n += D0(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Bl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function _i(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var sc = typeof WeakMap == 'function' ? WeakMap : Map;
function za(e, t, n) {
  (n = Be(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Jr || ((Jr = !0), (Fi = r)), _i(e, t);
    }),
    n
  );
}
function Ta(e, t, n) {
  (n = Be(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        _i(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        _i(e, t), typeof r != 'function' && (st === null ? (st = new Set([this])) : st.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' });
      }),
    n
  );
}
function _u(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new sc();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = kc.bind(null, e, t, n)), t.then(e, e));
}
function ju(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Lu(e, t, n, r, l) {
  return e.mode & 1 ? ((e.flags |= 65536), (e.lanes = l), e) : (e === t ? (e.flags |= 65536) : ((e.flags |= 128), (n.flags |= 131072), (n.flags &= -52805), n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Be(-1, 1)), (t.tag = 2), ut(n, t, 1))), (n.lanes |= 1)), e);
}
var ac = Ye.ReactCurrentOwner,
  ce = !1;
function ie(e, t, n, r) {
  t.child = e === null ? aa(t, null, n, r) : en(t, e.child, n, r);
}
function Pu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return Gt(t, l), (r = wo(e, t, n, r, i, l)), (n = xo()), e !== null && !ce ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Ke(e, t, l)) : (H && n && oo(t), (t.flags |= 1), ie(e, t, r, l), t.child);
}
function zu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' && !zo(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? ((t.tag = 15), (t.type = i), Ma(e, t, i, r, l)) : ((e = zr(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Hn), n(o, r) && e.ref === t.ref)) return Ke(e, t, l);
  }
  return (t.flags |= 1), (e = ct(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Ma(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Hn(i, r) && e.ref === t.ref)
      if (((ce = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0)) e.flags & 131072 && (ce = !0);
      else return (t.lanes = e.lanes), Ke(e, t, l);
  }
  return ji(e, t, n, r, l);
}
function Ra(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), O(Wt, me), (me |= n);
    else {
      if (!(n & 1073741824)) return (e = i !== null ? i.baseLanes | n : n), (t.lanes = t.childLanes = 1073741824), (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }), (t.updateQueue = null), O(Wt, me), (me |= e), null;
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = i !== null ? i.baseLanes : n), O(Wt, me), (me |= r);
    }
  else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), O(Wt, me), (me |= r);
  return ie(e, t, l, n), t.child;
}
function Oa(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function ji(e, t, n, r, l) {
  var i = de(n) ? Nt : le.current;
  return (i = qt(t, i)), Gt(t, l), (n = wo(e, t, n, r, i, l)), (r = xo()), e !== null && !ce ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Ke(e, t, l)) : (H && r && oo(t), (t.flags |= 1), ie(e, t, n, l), t.child);
}
function Tu(e, t, n, r, l) {
  if (de(n)) {
    var i = !0;
    $r(t);
  } else i = !1;
  if ((Gt(t, l), t.stateNode === null)) jr(e, t), ua(t, n, r), Ni(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      c = n.contextType;
    typeof c == 'object' && c !== null ? (c = Ee(c)) : ((c = de(n) ? Nt : le.current), (c = qt(t, c)));
    var v = n.getDerivedStateFromProps,
      h = typeof v == 'function' || typeof o.getSnapshotBeforeUpdate == 'function';
    h || (typeof o.UNSAFE_componentWillReceiveProps != 'function' && typeof o.componentWillReceiveProps != 'function') || ((u !== r || s !== c) && ku(t, o, r, c)), (Je = !1);
    var m = t.memoizedState;
    (o.state = m),
      Zr(t, r, o, l),
      (s = t.memoizedState),
      u !== r || m !== s || fe.current || Je ? (typeof v == 'function' && (Ei(t, n, v, r), (s = t.memoizedState)), (u = Je || Cu(t, n, u, r, m, s, c)) ? (h || (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') || (typeof o.componentWillMount == 'function' && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == 'function' && (t.flags |= 4194308)) : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = s)), (o.props = r), (o.state = s), (o.context = c), (r = u)) : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
  } else {
    (o = t.stateNode), ia(e, t), (u = t.memoizedProps), (c = t.type === t.elementType ? u : Le(t.type, u)), (o.props = c), (h = t.pendingProps), (m = o.context), (s = n.contextType), typeof s == 'object' && s !== null ? (s = Ee(s)) : ((s = de(n) ? Nt : le.current), (s = qt(t, s)));
    var w = n.getDerivedStateFromProps;
    (v = typeof w == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') || (typeof o.UNSAFE_componentWillReceiveProps != 'function' && typeof o.componentWillReceiveProps != 'function') || ((u !== h || m !== s) && ku(t, o, r, s)), (Je = !1), (m = t.memoizedState), (o.state = m), Zr(t, r, o, l);
    var x = t.memoizedState;
    u !== h || m !== x || fe.current || Je
      ? (typeof w == 'function' && (Ei(t, n, w, r), (x = t.memoizedState)),
        (c = Je || Cu(t, n, c, r, m, x, s) || !1) ? (v || (typeof o.UNSAFE_componentWillUpdate != 'function' && typeof o.componentWillUpdate != 'function') || (typeof o.componentWillUpdate == 'function' && o.componentWillUpdate(r, x, s), typeof o.UNSAFE_componentWillUpdate == 'function' && o.UNSAFE_componentWillUpdate(r, x, s)), typeof o.componentDidUpdate == 'function' && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024)) : (typeof o.componentDidUpdate != 'function' || (u === e.memoizedProps && m === e.memoizedState) || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != 'function' || (u === e.memoizedProps && m === e.memoizedState) || (t.flags |= 1024), (t.memoizedProps = r), (t.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != 'function' || (u === e.memoizedProps && m === e.memoizedState) || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != 'function' || (u === e.memoizedProps && m === e.memoizedState) || (t.flags |= 1024), (r = !1));
  }
  return Li(e, t, n, r, i, l);
}
function Li(e, t, n, r, l, i) {
  Oa(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && vu(t, n, !1), Ke(e, t, i);
  (r = t.stateNode), (ac.current = t);
  var u = o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (t.flags |= 1), e !== null && o ? ((t.child = en(t, e.child, null, i)), (t.child = en(t, null, u, i))) : ie(e, t, u, i), (t.memoizedState = r.state), l && vu(t, n, !0), t.child;
}
function Da(e) {
  var t = e.stateNode;
  t.pendingContext ? hu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && hu(e, t.context, !1), ho(e, t.containerInfo);
}
function Mu(e, t, n, r, l) {
  return bt(), so(l), (t.flags |= 256), ie(e, t, n, r), t.child;
}
var Pi = { dehydrated: null, treeContext: null, retryLane: 0 };
function zi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Fa(e, t, n) {
  var r = t.pendingProps,
    l = U.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1), O(U, l & 1), e === null))
    return ki(t), (e = t.memoizedState), e !== null && ((e = e.dehydrated), e !== null) ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null) : ((o = r.children), (e = r.fallback), i ? ((r = t.mode), (i = t.child), (o = { mode: 'hidden', children: o }), !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = o)) : (i = pl(o, r, 0, null)), (e = Et(e, r, n, null)), (i.return = t), (e.return = t), (i.sibling = e), (t.child = i), (t.child.memoizedState = zi(n)), (t.memoizedState = Pi), e) : So(t, o));
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null))) return cc(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: 'hidden', children: r.children };
    return !(o & 1) && t.child !== l ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null)) : ((r = ct(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)), u !== null ? (i = ct(u, i)) : ((i = Et(i, o, n, null)), (i.flags |= 2)), (i.return = t), (r.return = t), (r.sibling = i), (t.child = r), (r = i), (i = t.child), (o = e.child.memoizedState), (o = o === null ? zi(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }), (i.memoizedState = o), (i.childLanes = e.childLanes & ~n), (t.memoizedState = Pi), r;
  }
  return (i = e.child), (e = i.sibling), (r = ct(i, { mode: 'visible', children: r.children })), !(t.mode & 1) && (r.lanes = n), (r.return = t), (r.sibling = null), e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)), (t.child = r), (t.memoizedState = null), r;
}
function So(e, t) {
  return (t = pl({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function hr(e, t, n, r) {
  return r !== null && so(r), en(t, e.child, null, n), (e = So(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function cc(e, t, n, r, l, i, o) {
  if (n) return t.flags & 256 ? ((t.flags &= -257), (r = Bl(Error(y(422)))), hr(e, t, o, r)) : t.memoizedState !== null ? ((t.child = e.child), (t.flags |= 128), null) : ((i = r.fallback), (l = t.mode), (r = pl({ mode: 'visible', children: r.children }, l, 0, null)), (i = Et(i, l, o, null)), (i.flags |= 2), (r.return = t), (i.return = t), (r.sibling = i), (t.child = r), t.mode & 1 && en(t, e.child, null, o), (t.child.memoizedState = zi(o)), (t.memoizedState = Pi), i);
  if (!(t.mode & 1)) return hr(e, t, o, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(y(419))), (r = Bl(i, r, void 0)), hr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), ce || u)) {
    if (((r = J), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l), l !== 0 && l !== i.retryLane && ((i.retryLane = l), Ze(e, l), Me(r, e, l, -1));
    }
    return Po(), (r = Bl(Error(y(421)))), hr(e, t, o, r);
  }
  return l.data === '$?' ? ((t.flags |= 128), (t.child = e.child), (t = Sc.bind(null, e)), (l._reactRetry = t), null) : ((e = i.treeContext), (he = ot(l.nextSibling)), (ve = t), (H = !0), (ze = null), e !== null && ((xe[Ce++] = $e), (xe[Ce++] = Ae), (xe[Ce++] = _t), ($e = e.id), (Ae = e.overflow), (_t = t)), (t = So(t, r.children)), (t.flags |= 4096), t);
}
function Ru(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Si(e.return, t, n);
}
function Wl(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l }) : ((i.isBackwards = t), (i.rendering = null), (i.renderingStartTime = 0), (i.last = r), (i.tail = n), (i.tailMode = l));
}
function Ia(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ie(e, t, r.children, n), (r = U.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ru(e, n, t);
        else if (e.tag === 19) Ru(e, n, t);
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
    r &= 1;
  }
  if ((O(U, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; ) (e = n.alternate), e !== null && Kr(e) === null && (l = n), (n = n.sibling);
        (n = l), n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)), Wl(t, !1, l, n, i);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Kr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Wl(t, !0, n, null, i);
        break;
      case 'together':
        Wl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function jr(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ke(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Lt |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (e = t.child, n = ct(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) (e = e.sibling), (n = n.sibling = ct(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function fc(e, t, n) {
  switch (t.tag) {
    case 3:
      Da(t), bt();
      break;
    case 5:
      ca(t);
      break;
    case 1:
      de(t.type) && $r(t);
      break;
    case 4:
      ho(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      O(Wr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null)) return r.dehydrated !== null ? (O(U, U.current & 1), (t.flags |= 128), null) : n & t.child.childLanes ? Fa(e, t, n) : (O(U, U.current & 1), (e = Ke(e, t, n)), e !== null ? e.sibling : null);
      O(U, U.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ia(e, t, n);
        t.flags |= 128;
      }
      if (((l = t.memoizedState), l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)), O(U, U.current), r)) break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ra(e, t, n);
  }
  return Ke(e, t, n);
}
var Ha, Ti, Ua, Va;
Ha = function (e, t) {
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
Ti = function () {};
Ua = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), kt(He.current);
    var i = null;
    switch (n) {
      case 'input':
        (l = bl(e, l)), (r = bl(e, r)), (i = []);
        break;
      case 'select':
        (l = $({}, l, { value: void 0 })), (r = $({}, r, { value: void 0 })), (i = []);
        break;
      case 'textarea':
        (l = ni(e, l)), (r = ni(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = Ur);
    }
    li(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === 'style') {
          var u = l[c];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
        } else c !== 'dangerouslySetInnerHTML' && c !== 'children' && c !== 'suppressContentEditableWarning' && c !== 'suppressHydrationWarning' && c !== 'autoFocus' && (Tn.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (((u = l != null ? l[c] : void 0), r.hasOwnProperty(c) && s !== u && (s != null || u != null)))
        if (c === 'style')
          if (u) {
            for (o in u) !u.hasOwnProperty(o) || (s && s.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ''));
            for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = s);
        else c === 'dangerouslySetInnerHTML' ? ((s = s ? s.__html : void 0), (u = u ? u.__html : void 0), s != null && u !== s && (i = i || []).push(c, s)) : c === 'children' ? (typeof s != 'string' && typeof s != 'number') || (i = i || []).push(c, '' + s) : c !== 'suppressContentEditableWarning' && c !== 'suppressHydrationWarning' && (Tn.hasOwnProperty(c) ? (s != null && c === 'onScroll' && D('scroll', e), i || u === s || (i = [])) : (i = i || []).push(c, s));
    }
    n && (i = i || []).push('style', n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Va = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function vn(e, t) {
  if (!H)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t) for (var l = e.child; l !== null; ) (n |= l.lanes | l.childLanes), (r |= l.subtreeFlags & 14680064), (r |= l.flags & 14680064), (l.return = e), (l = l.sibling);
  else for (l = e.child; l !== null; ) (n |= l.lanes | l.childLanes), (r |= l.subtreeFlags), (r |= l.flags), (l.return = e), (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function dc(e, t, n) {
  var r = t.pendingProps;
  switch ((uo(t), t.tag)) {
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
      return ne(t), null;
    case 1:
      return de(t.type) && Vr(), ne(t), null;
    case 3:
      return (r = t.stateNode), tn(), F(fe), F(le), go(), r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)), (e === null || e.child === null) && (pr(t) ? (t.flags |= 4) : e === null || (e.memoizedState.isDehydrated && !(t.flags & 256)) || ((t.flags |= 1024), ze !== null && (Ui(ze), (ze = null)))), Ti(e, t), ne(t), null;
    case 5:
      vo(t);
      var l = kt(Bn.current);
      if (((n = t.type), e !== null && t.stateNode != null)) Ua(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return ne(t), null;
        }
        if (((e = kt(He.current)), pr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Fe] = t), (r[$n] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              D('cancel', r), D('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              D('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < Cn.length; l++) D(Cn[l], r);
              break;
            case 'source':
              D('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              D('error', r), D('load', r);
              break;
            case 'details':
              D('toggle', r);
              break;
            case 'input':
              Ao(r, i), D('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }), D('invalid', r);
              break;
            case 'textarea':
              Wo(r, i), D('invalid', r);
          }
          li(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === 'children' ? (typeof u == 'string' ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && dr(r.textContent, u, e), (l = ['children', u])) : typeof u == 'number' && r.textContent !== '' + u && (i.suppressHydrationWarning !== !0 && dr(r.textContent, u, e), (l = ['children', '' + u]))) : Tn.hasOwnProperty(o) && u != null && o === 'onScroll' && D('scroll', r);
            }
          switch (n) {
            case 'input':
              lr(r), Bo(r, i, !0);
              break;
            case 'textarea':
              lr(r), Qo(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = Ur);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument), e === 'http://www.w3.org/1999/xhtml' && (e = ps(n)), e === 'http://www.w3.org/1999/xhtml' ? (n === 'script' ? ((e = o.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild))) : typeof r.is == 'string' ? (e = o.createElement(n, { is: r.is })) : ((e = o.createElement(n)), n === 'select' && ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))) : (e = o.createElementNS(e, n)), (e[Fe] = t), (e[$n] = r), Ha(e, t, !1, !1), (t.stateNode = e);
          e: {
            switch (((o = ii(n, r)), n)) {
              case 'dialog':
                D('cancel', e), D('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                D('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < Cn.length; l++) D(Cn[l], e);
                l = r;
                break;
              case 'source':
                D('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                D('error', e), D('load', e), (l = r);
                break;
              case 'details':
                D('toggle', e), (l = r);
                break;
              case 'input':
                Ao(e, r), (l = bl(e, r)), D('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }), (l = $({}, r, { value: void 0 })), D('invalid', e);
                break;
              case 'textarea':
                Wo(e, r), (l = ni(e, r)), D('invalid', e);
                break;
              default:
                l = r;
            }
            li(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === 'style' ? vs(e, s) : i === 'dangerouslySetInnerHTML' ? ((s = s ? s.__html : void 0), s != null && ms(e, s)) : i === 'children' ? (typeof s == 'string' ? (n !== 'textarea' || s !== '') && Mn(e, s) : typeof s == 'number' && Mn(e, '' + s)) : i !== 'suppressContentEditableWarning' && i !== 'suppressHydrationWarning' && i !== 'autoFocus' && (Tn.hasOwnProperty(i) ? s != null && i === 'onScroll' && D('scroll', e) : s != null && Zi(e, i, s, o));
              }
            switch (n) {
              case 'input':
                lr(e), Bo(e, r, !1);
                break;
              case 'textarea':
                lr(e), Qo(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + ft(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple), (i = r.value), i != null ? Qt(e, !!r.multiple, i, !1) : r.defaultValue != null && Qt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Ur);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ne(t), null;
    case 6:
      if (e && t.stateNode != null) Va(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(y(166));
        if (((n = kt(Bn.current)), kt(He.current), pr(t))) {
          if (((r = t.stateNode), (n = t.memoizedProps), (r[Fe] = t), (i = r.nodeValue !== n) && ((e = ve), e !== null)))
            switch (e.tag) {
              case 3:
                dr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && dr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Fe] = t), (t.stateNode = r);
      }
      return ne(t), null;
    case 13:
      if ((F(U), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
        if (H && he !== null && t.mode & 1 && !(t.flags & 128)) ra(), bt(), (t.flags |= 98560), (i = !1);
        else if (((i = pr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(y(317));
            i[Fe] = t;
          } else bt(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ne(t), (i = !1);
        } else ze !== null && (Ui(ze), (ze = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? ((t.lanes = n), t) : ((r = r !== null), r !== (e !== null && e.memoizedState !== null) && r && ((t.child.flags |= 8192), t.mode & 1 && (e === null || U.current & 1 ? Y === 0 && (Y = 3) : Po())), t.updateQueue !== null && (t.flags |= 4), ne(t), null);
    case 4:
      return tn(), Ti(e, t), e === null && Un(t.stateNode.containerInfo), ne(t), null;
    case 10:
      return fo(t.type._context), ne(t), null;
    case 17:
      return de(t.type) && Vr(), ne(t), null;
    case 19:
      if ((F(U), (i = t.memoizedState), i === null)) return ne(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) vn(i, !1);
        else {
          if (Y !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Kr(e)), o !== null)) {
                for (t.flags |= 128, vn(i, !1), r = o.updateQueue, r !== null && ((t.updateQueue = r), (t.flags |= 4)), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  (i = n), (e = r), (i.flags &= 14680066), (o = i.alternate), o === null ? ((i.childLanes = 0), (i.lanes = e), (i.child = null), (i.subtreeFlags = 0), (i.memoizedProps = null), (i.memoizedState = null), (i.updateQueue = null), (i.dependencies = null), (i.stateNode = null)) : ((i.childLanes = o.childLanes), (i.lanes = o.lanes), (i.child = o.child), (i.subtreeFlags = 0), (i.deletions = null), (i.memoizedProps = o.memoizedProps), (i.memoizedState = o.memoizedState), (i.updateQueue = o.updateQueue), (i.type = o.type), (e = o.dependencies), (i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })), (n = n.sibling);
                return O(U, (U.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Q() > rn && ((t.flags |= 128), (r = !0), vn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Kr(o)), e !== null)) {
            if (((t.flags |= 128), (r = !0), (n = e.updateQueue), n !== null && ((t.updateQueue = n), (t.flags |= 4)), vn(i, !0), i.tail === null && i.tailMode === 'hidden' && !o.alternate && !H)) return ne(t), null;
          } else 2 * Q() - i.renderingStartTime > rn && n !== 1073741824 && ((t.flags |= 128), (r = !0), vn(i, !1), (t.lanes = 4194304));
        i.isBackwards ? ((o.sibling = t.child), (t.child = o)) : ((n = i.last), n !== null ? (n.sibling = o) : (t.child = o), (i.last = o));
      }
      return i.tail !== null ? ((t = i.tail), (i.rendering = t), (i.tail = t.sibling), (i.renderingStartTime = Q()), (t.sibling = null), (n = U.current), O(U, r ? (n & 1) | 2 : n & 1), t) : (ne(t), null);
    case 22:
    case 23:
      return Lo(), (r = t.memoizedState !== null), e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192), r && t.mode & 1 ? me & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ne(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function pc(e, t) {
  switch ((uo(t), t.tag)) {
    case 1:
      return de(t.type) && Vr(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return tn(), F(fe), F(le), go(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null;
    case 5:
      return vo(t), null;
    case 13:
      if ((F(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        bt();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return F(U), null;
    case 4:
      return tn(), null;
    case 10:
      return fo(t.type._context), null;
    case 22:
    case 23:
      return Lo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vr = !1,
  re = !1,
  mc = typeof WeakSet == 'function' ? WeakSet : Set,
  k = null;
function Bt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        A(e, t, r);
      }
    else n.current = null;
}
function Mi(e, t, n) {
  try {
    n();
  } catch (r) {
    A(e, t, r);
  }
}
var Ou = !1;
function hc(e, t) {
  if (((hi = Fr), (e = Ws()), io(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            c = 0,
            v = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (var w; h !== n || (l !== 0 && h.nodeType !== 3) || (u = o + l), h !== i || (r !== 0 && h.nodeType !== 3) || (s = o + r), h.nodeType === 3 && (o += h.nodeValue.length), (w = h.firstChild) !== null; ) (m = h), (h = w);
            for (;;) {
              if (h === e) break t;
              if ((m === n && ++c === l && (u = o), m === i && ++v === r && (s = o), (w = h.nextSibling) !== null)) break;
              (h = m), (m = h.parentNode);
            }
            h = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (vi = { focusedElem: e, selectionRange: n }, Fr = !1, k = t; k !== null; )
    if (((t = k), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (k = e);
    else
      for (; k !== null; ) {
        t = k;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var C = x.memoizedProps,
                    I = x.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? C : Le(t.type, C), I);
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1 ? (d.textContent = '') : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (g) {
          A(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (k = e);
          break;
        }
        k = t.return;
      }
  return (x = Ou), (Ou = !1), x;
}
function Ln(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Mi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function fl(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ri(e) {
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
function $a(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), $a(t)), (e.child = null), (e.deletions = null), (e.sibling = null), e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[Fe], delete t[$n], delete t[wi], delete t[J2], delete t[q2])), (e.stateNode = null), (e.return = null), (e.dependencies = null), (e.memoizedProps = null), (e.memoizedState = null), (e.pendingProps = null), (e.stateNode = null), (e.updateQueue = null);
}
function Aa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Du(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Aa(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Oi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? (n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t)) : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)), (n = n._reactRootContainer), n != null || t.onclick !== null || (t.onclick = Ur));
  else if (r !== 4 && ((e = e.child), e !== null)) for (Oi(e, t, n), e = e.sibling; e !== null; ) Oi(e, t, n), (e = e.sibling);
}
function Di(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null)) for (Di(e, t, n), e = e.sibling; e !== null; ) Di(e, t, n), (e = e.sibling);
}
var q = null,
  Pe = !1;
function Ge(e, t, n) {
  for (n = n.child; n !== null; ) Ba(e, t, n), (n = n.sibling);
}
function Ba(e, t, n) {
  if (Ie && typeof Ie.onCommitFiberUnmount == 'function')
    try {
      Ie.onCommitFiberUnmount(rl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      re || Bt(n, t);
    case 6:
      var r = q,
        l = Pe;
      (q = null), Ge(e, t, n), (q = r), (Pe = l), q !== null && (Pe ? ((e = q), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : q.removeChild(n.stateNode));
      break;
    case 18:
      q !== null && (Pe ? ((e = q), (n = n.stateNode), e.nodeType === 8 ? Il(e.parentNode, n) : e.nodeType === 1 && Il(e, n), Fn(e)) : Il(q, n.stateNode));
      break;
    case 4:
      (r = q), (l = Pe), (q = n.stateNode.containerInfo), (Pe = !0), Ge(e, t, n), (q = r), (Pe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!re && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag), o !== void 0 && (i & 2 || i & 4) && Mi(n, t, o), (l = l.next);
        } while (l !== r);
      }
      Ge(e, t, n);
      break;
    case 1:
      if (!re && (Bt(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (u) {
          A(n, t, u);
        }
      Ge(e, t, n);
      break;
    case 21:
      Ge(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((re = (r = re) || n.memoizedState !== null), Ge(e, t, n), (re = r)) : Ge(e, t, n);
      break;
    default:
      Ge(e, t, n);
  }
}
function Fu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new mc()),
      t.forEach(function (r) {
        var l = Ec.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function je(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (q = u.stateNode), (Pe = !1);
              break e;
            case 3:
              (q = u.stateNode.containerInfo), (Pe = !0);
              break e;
            case 4:
              (q = u.stateNode.containerInfo), (Pe = !0);
              break e;
          }
          u = u.return;
        }
        if (q === null) throw Error(y(160));
        Ba(i, o, l), (q = null), (Pe = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        A(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Wa(t, e), (t = t.sibling);
}
function Wa(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((je(t, e), Oe(e), r & 4)) {
        try {
          Ln(3, e, e.return), fl(3, e);
        } catch (C) {
          A(e, e.return, C);
        }
        try {
          Ln(5, e, e.return);
        } catch (C) {
          A(e, e.return, C);
        }
      }
      break;
    case 1:
      je(t, e), Oe(e), r & 512 && n !== null && Bt(n, n.return);
      break;
    case 5:
      if ((je(t, e), Oe(e), r & 512 && n !== null && Bt(n, n.return), e.flags & 32)) {
        var l = e.stateNode;
        try {
          Mn(l, '');
        } catch (C) {
          A(e, e.return, C);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && i.type === 'radio' && i.name != null && fs(l, i), ii(u, o);
            var c = ii(u, i);
            for (o = 0; o < s.length; o += 2) {
              var v = s[o],
                h = s[o + 1];
              v === 'style' ? vs(l, h) : v === 'dangerouslySetInnerHTML' ? ms(l, h) : v === 'children' ? Mn(l, h) : Zi(l, v, h, c);
            }
            switch (u) {
              case 'input':
                ei(l, i);
                break;
              case 'textarea':
                ds(l, i);
                break;
              case 'select':
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null ? Qt(l, !!i.multiple, w, !1) : m !== !!i.multiple && (i.defaultValue != null ? Qt(l, !!i.multiple, i.defaultValue, !0) : Qt(l, !!i.multiple, i.multiple ? [] : '', !1));
            }
            l[$n] = i;
          } catch (C) {
            A(e, e.return, C);
          }
      }
      break;
    case 6:
      if ((je(t, e), Oe(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (C) {
          A(e, e.return, C);
        }
      }
      break;
    case 3:
      if ((je(t, e), Oe(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Fn(t.containerInfo);
        } catch (C) {
          A(e, e.return, C);
        }
      break;
    case 4:
      je(t, e), Oe(e);
      break;
    case 13:
      je(t, e), Oe(e), (l = e.child), l.flags & 8192 && ((i = l.memoizedState !== null), (l.stateNode.isHidden = i), !i || (l.alternate !== null && l.alternate.memoizedState !== null) || (_o = Q())), r & 4 && Fu(e);
      break;
    case 22:
      if (((v = n !== null && n.memoizedState !== null), e.mode & 1 ? ((re = (c = re) || v), je(t, e), (re = c)) : je(t, e), Oe(e), r & 8192)) {
        if (((c = e.memoizedState !== null), (e.stateNode.isHidden = c) && !v && e.mode & 1))
          for (k = e, v = e.child; v !== null; ) {
            for (h = k = v; k !== null; ) {
              switch (((m = k), (w = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ln(4, m, m.return);
                  break;
                case 1:
                  Bt(m, m.return);
                  var x = m.stateNode;
                  if (typeof x.componentWillUnmount == 'function') {
                    (r = m), (n = m.return);
                    try {
                      (t = r), (x.props = t.memoizedProps), (x.state = t.memoizedState), x.componentWillUnmount();
                    } catch (C) {
                      A(r, n, C);
                    }
                  }
                  break;
                case 5:
                  Bt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Hu(h);
                    continue;
                  }
              }
              w !== null ? ((w.return = m), (k = w)) : Hu(h);
            }
            v = v.sibling;
          }
        e: for (v = null, h = e; ; ) {
          if (h.tag === 5) {
            if (v === null) {
              v = h;
              try {
                (l = h.stateNode), c ? ((i = l.style), typeof i.setProperty == 'function' ? i.setProperty('display', 'none', 'important') : (i.display = 'none')) : ((u = h.stateNode), (s = h.memoizedProps.style), (o = s != null && s.hasOwnProperty('display') ? s.display : null), (u.style.display = hs('display', o)));
              } catch (C) {
                A(e, e.return, C);
              }
            }
          } else if (h.tag === 6) {
            if (v === null)
              try {
                h.stateNode.nodeValue = c ? '' : h.memoizedProps;
              } catch (C) {
                A(e, e.return, C);
              }
          } else if (((h.tag !== 22 && h.tag !== 23) || h.memoizedState === null || h === e) && h.child !== null) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            v === h && (v = null), (h = h.return);
          }
          v === h && (v = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      je(t, e), Oe(e), r & 4 && Fu(e);
      break;
    case 21:
      break;
    default:
      je(t, e), Oe(e);
  }
}
function Oe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Aa(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Mn(l, ''), (r.flags &= -33));
          var i = Du(e);
          Di(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Du(e);
          Oi(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      A(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function vc(e, t, n) {
  (k = e), Qa(e);
}
function Qa(e, t, n) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
    var l = k,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || vr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || re;
        u = vr;
        var c = re;
        if (((vr = o), (re = s) && !c)) for (k = l; k !== null; ) (o = k), (s = o.child), o.tag === 22 && o.memoizedState !== null ? Uu(l) : s !== null ? ((s.return = o), (k = s)) : Uu(l);
        for (; i !== null; ) (k = i), Qa(i), (i = i.sibling);
        (k = l), (vr = u), (re = c);
      }
      Iu(e);
    } else l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (k = i)) : Iu(e);
  }
}
function Iu(e) {
  for (; k !== null; ) {
    var t = k;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              re || fl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !re)
                if (n === null) r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : Le(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && xu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                xu(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
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
                  var v = c.memoizedState;
                  if (v !== null) {
                    var h = v.dehydrated;
                    h !== null && Fn(h);
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
              throw Error(y(163));
          }
        re || (t.flags & 512 && Ri(t));
      } catch (m) {
        A(t, t.return, m);
      }
    }
    if (t === e) {
      k = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (k = n);
      break;
    }
    k = t.return;
  }
}
function Hu(e) {
  for (; k !== null; ) {
    var t = k;
    if (t === e) {
      k = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (k = n);
      break;
    }
    k = t.return;
  }
}
function Uu(e) {
  for (; k !== null; ) {
    var t = k;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            fl(4, t);
          } catch (s) {
            A(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              A(t, l, s);
            }
          }
          var i = t.return;
          try {
            Ri(t);
          } catch (s) {
            A(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ri(t);
          } catch (s) {
            A(t, o, s);
          }
      }
    } catch (s) {
      A(t, t.return, s);
    }
    if (t === e) {
      k = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (k = u);
      break;
    }
    k = t.return;
  }
}
var gc = Math.ceil,
  Xr = Ye.ReactCurrentDispatcher,
  Eo = Ye.ReactCurrentOwner,
  Se = Ye.ReactCurrentBatchConfig,
  M = 0,
  J = null,
  Z = null,
  b = 0,
  me = 0,
  Wt = mt(0),
  Y = 0,
  Kn = null,
  Lt = 0,
  dl = 0,
  No = 0,
  Pn = null,
  ae = null,
  _o = 0,
  rn = 1 / 0,
  Ue = null,
  Jr = !1,
  Fi = null,
  st = null,
  gr = !1,
  tt = null,
  qr = 0,
  zn = 0,
  Ii = null,
  Lr = -1,
  Pr = 0;
function oe() {
  return M & 6 ? Q() : Lr !== -1 ? Lr : (Lr = Q());
}
function at(e) {
  return e.mode & 1 ? (M & 2 && b !== 0 ? b & -b : ec.transition !== null ? (Pr === 0 && (Pr = Ls()), Pr) : ((e = R), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ds(e.type))), e)) : 1;
}
function Me(e, t, n, r) {
  if (50 < zn) throw ((zn = 0), (Ii = null), Error(y(185)));
  Xn(e, n, r), (!(M & 2) || e !== J) && (e === J && (!(M & 2) && (dl |= n), Y === 4 && be(e, b)), pe(e, r), n === 1 && M === 0 && !(t.mode & 1) && ((rn = Q() + 500), sl && ht()));
}
function pe(e, t) {
  var n = e.callbackNode;
  e2(e, t);
  var r = Dr(e, e === J ? b : 0);
  if (r === 0) n !== null && Yo(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Yo(n), t === 1))
      e.tag === 0 ? b2(Vu.bind(null, e)) : ea(Vu.bind(null, e)),
        G2(function () {
          !(M & 6) && ht();
        }),
        (n = null);
    else {
      switch (Ps(r)) {
        case 1:
          n = Ji;
          break;
        case 4:
          n = _s;
          break;
        case 16:
          n = Or;
          break;
        case 536870912:
          n = js;
          break;
        default:
          n = Or;
      }
      n = ba(n, Za.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Za(e, t) {
  if (((Lr = -1), (Pr = 0), M & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (Xt() && e.callbackNode !== n) return null;
  var r = Dr(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = br(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = Ya();
    (J !== e || b !== t) && ((Ue = null), (rn = Q() + 500), St(e, t));
    do
      try {
        xc();
        break;
      } catch (u) {
        Ka(e, u);
      }
    while (1);
    co(), (Xr.current = i), (M = l), Z !== null ? (t = 0) : ((J = null), (b = 0), (t = Y));
  }
  if (t !== 0) {
    if ((t === 2 && ((l = ci(e)), l !== 0 && ((r = l), (t = Hi(e, l)))), t === 1)) throw ((n = Kn), St(e, 0), be(e, r), pe(e, Q()), n);
    if (t === 6) be(e, r);
    else {
      if (((l = e.current.alternate), !(r & 30) && !yc(l) && ((t = br(e, r)), t === 2 && ((i = ci(e)), i !== 0 && ((r = i), (t = Hi(e, i)))), t === 1))) throw ((n = Kn), St(e, 0), be(e, r), pe(e, Q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          wt(e, ae, Ue);
          break;
        case 3:
          if ((be(e, r), (r & 130023424) === r && ((t = _o + 500 - Q()), 10 < t))) {
            if (Dr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              oe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = yi(wt.bind(null, e, ae, Ue), t);
            break;
          }
          wt(e, ae, Ue);
          break;
        case 4:
          if ((be(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Te(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (((r = l), (r = Q() - r), (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * gc(r / 1960)) - r), 10 < r)) {
            e.timeoutHandle = yi(wt.bind(null, e, ae, Ue), r);
            break;
          }
          wt(e, ae, Ue);
          break;
        case 5:
          wt(e, ae, Ue);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return pe(e, Q()), e.callbackNode === n ? Za.bind(null, e) : null;
}
function Hi(e, t) {
  var n = Pn;
  return e.current.memoizedState.isDehydrated && (St(e, t).flags |= 256), (e = br(e, t)), e !== 2 && ((t = ae), (ae = n), t !== null && Ui(t)), e;
}
function Ui(e) {
  ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function yc(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Re(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
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
function be(e, t) {
  for (t &= ~No, t &= ~dl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Te(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Vu(e) {
  if (M & 6) throw Error(y(327));
  Xt();
  var t = Dr(e, 0);
  if (!(t & 1)) return pe(e, Q()), null;
  var n = br(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ci(e);
    r !== 0 && ((t = r), (n = Hi(e, r)));
  }
  if (n === 1) throw ((n = Kn), St(e, 0), be(e, t), pe(e, Q()), n);
  if (n === 6) throw Error(y(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), wt(e, ae, Ue), pe(e, Q()), null;
}
function jo(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((rn = Q() + 500), sl && ht());
  }
}
function Pt(e) {
  tt !== null && tt.tag === 0 && !(M & 6) && Xt();
  var t = M;
  M |= 1;
  var n = Se.transition,
    r = R;
  try {
    if (((Se.transition = null), (R = 1), e)) return e();
  } finally {
    (R = r), (Se.transition = n), (M = t), !(M & 6) && ht();
  }
}
function Lo() {
  (me = Wt.current), F(Wt);
}
function St(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Y2(n)), Z !== null))
    for (n = Z.return; n !== null; ) {
      var r = n;
      switch ((uo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Vr();
          break;
        case 3:
          tn(), F(fe), F(le), go();
          break;
        case 5:
          vo(r);
          break;
        case 4:
          tn();
          break;
        case 13:
          F(U);
          break;
        case 19:
          F(U);
          break;
        case 10:
          fo(r.type._context);
          break;
        case 22:
        case 23:
          Lo();
      }
      n = n.return;
    }
  if (((J = e), (Z = e = ct(e.current, null)), (b = me = t), (Y = 0), (Kn = null), (No = dl = Lt = 0), (ae = Pn = null), Ct !== null)) {
    for (t = 0; t < Ct.length; t++)
      if (((n = Ct[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Ct = null;
  }
  return e;
}
function Ka(e, t) {
  do {
    var n = Z;
    try {
      if ((co(), (Nr.current = Gr), Yr)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Yr = !1;
      }
      if (((jt = 0), (X = K = V = null), (jn = !1), (Wn = 0), (Eo.current = null), n === null || n.return === null)) {
        (Y = 1), (Kn = t), (Z = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (((t = b), (u.flags |= 32768), s !== null && typeof s == 'object' && typeof s.then == 'function')) {
          var c = s,
            v = u,
            h = v.tag;
          if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = v.alternate;
            m ? ((v.updateQueue = m.updateQueue), (v.memoizedState = m.memoizedState), (v.lanes = m.lanes)) : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var w = ju(o);
          if (w !== null) {
            (w.flags &= -257), Lu(w, o, u, i, t), w.mode & 1 && _u(i, c, t), (t = w), (s = c);
            var x = t.updateQueue;
            if (x === null) {
              var C = new Set();
              C.add(s), (t.updateQueue = C);
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              _u(i, c, t), Po();
              break e;
            }
            s = Error(y(426));
          }
        } else if (H && u.mode & 1) {
          var I = ju(o);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256), Lu(I, o, u, i, t), so(nn(s, u));
            break e;
          }
        }
        (i = s = nn(s, u)), Y !== 4 && (Y = 2), Pn === null ? (Pn = [i]) : Pn.push(i), (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = za(i, s, t);
              wu(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type,
                d = i.stateNode;
              if (!(i.flags & 128) && (typeof a.getDerivedStateFromError == 'function' || (d !== null && typeof d.componentDidCatch == 'function' && (st === null || !st.has(d))))) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = Ta(i, u, t);
                wu(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Xa(n);
    } catch (S) {
      (t = S), Z === n && n !== null && (Z = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Ya() {
  var e = Xr.current;
  return (Xr.current = Gr), e === null ? Gr : e;
}
function Po() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4), J === null || (!(Lt & 268435455) && !(dl & 268435455)) || be(J, b);
}
function br(e, t) {
  var n = M;
  M |= 2;
  var r = Ya();
  (J !== e || b !== t) && ((Ue = null), St(e, t));
  do
    try {
      wc();
      break;
    } catch (l) {
      Ka(e, l);
    }
  while (1);
  if ((co(), (M = n), (Xr.current = r), Z !== null)) throw Error(y(261));
  return (J = null), (b = 0), Y;
}
function wc() {
  for (; Z !== null; ) Ga(Z);
}
function xc() {
  for (; Z !== null && !Q0(); ) Ga(Z);
}
function Ga(e) {
  var t = qa(e.alternate, e, me);
  (e.memoizedProps = e.pendingProps), t === null ? Xa(e) : (Z = t), (Eo.current = null);
}
function Xa(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = pc(n, t)), n !== null)) {
        (n.flags &= 32767), (Z = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Y = 6), (Z = null);
        return;
      }
    } else if (((n = dc(n, t, me)), n !== null)) {
      Z = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  Y === 0 && (Y = 5);
}
function wt(e, t, n) {
  var r = R,
    l = Se.transition;
  try {
    (Se.transition = null), (R = 1), Cc(e, t, n, r);
  } finally {
    (Se.transition = l), (R = r);
  }
  return null;
}
function Cc(e, t, n, r) {
  do Xt();
  while (tt !== null);
  if (M & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (t2(e, i),
    e === J && ((Z = J = null), (b = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      gr ||
      ((gr = !0),
      ba(Or, function () {
        return Xt(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Se.transition), (Se.transition = null);
    var o = R;
    R = 1;
    var u = M;
    (M |= 4), (Eo.current = null), hc(e, n), Wa(n, e), $2(vi), (Fr = !!hi), (vi = hi = null), (e.current = n), vc(n), Z0(), (M = u), (R = o), (Se.transition = i);
  } else e.current = n;
  if ((gr && ((gr = !1), (tt = e), (qr = l)), (i = e.pendingLanes), i === 0 && (st = null), G0(n.stateNode), pe(e, Q()), t !== null)) for (r = e.onRecoverableError, n = 0; n < t.length; n++) (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Jr) throw ((Jr = !1), (e = Fi), (Fi = null), e);
  return qr & 1 && e.tag !== 0 && Xt(), (i = e.pendingLanes), i & 1 ? (e === Ii ? zn++ : ((zn = 0), (Ii = e))) : (zn = 0), ht(), null;
}
function Xt() {
  if (tt !== null) {
    var e = Ps(qr),
      t = Se.transition,
      n = R;
    try {
      if (((Se.transition = null), (R = 16 > e ? 16 : e), tt === null)) var r = !1;
      else {
        if (((e = tt), (tt = null), (qr = 0), M & 6)) throw Error(y(331));
        var l = M;
        for (M |= 4, k = e.current; k !== null; ) {
          var i = k,
            o = i.child;
          if (k.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (k = c; k !== null; ) {
                  var v = k;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ln(8, v, i);
                  }
                  var h = v.child;
                  if (h !== null) (h.return = v), (k = h);
                  else
                    for (; k !== null; ) {
                      v = k;
                      var m = v.sibling,
                        w = v.return;
                      if (($a(v), v === c)) {
                        k = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = w), (k = m);
                        break;
                      }
                      k = w;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var C = x.child;
                if (C !== null) {
                  x.child = null;
                  do {
                    var I = C.sibling;
                    (C.sibling = null), (C = I);
                  } while (C !== null);
                }
              }
              k = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (k = o);
          else
            e: for (; k !== null; ) {
              if (((i = k), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ln(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (k = f);
                break e;
              }
              k = i.return;
            }
        }
        var a = e.current;
        for (k = a; k !== null; ) {
          o = k;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (k = d);
          else
            e: for (o = a; k !== null; ) {
              if (((u = k), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fl(9, u);
                  }
                } catch (S) {
                  A(u, u.return, S);
                }
              if (u === o) {
                k = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (k = g);
                break e;
              }
              k = u.return;
            }
        }
        if (((M = l), ht(), Ie && typeof Ie.onPostCommitFiberRoot == 'function'))
          try {
            Ie.onPostCommitFiberRoot(rl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (R = n), (Se.transition = t);
    }
  }
  return !1;
}
function $u(e, t, n) {
  (t = nn(n, t)), (t = za(e, t, 1)), (e = ut(e, t, 1)), (t = oe()), e !== null && (Xn(e, 1, t), pe(e, t));
}
function A(e, t, n) {
  if (e.tag === 3) $u(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        $u(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == 'function' || (typeof r.componentDidCatch == 'function' && (st === null || !st.has(r)))) {
          (e = nn(n, e)), (e = Ta(t, e, 1)), (t = ut(t, e, 1)), (e = oe()), t !== null && (Xn(t, 1, e), pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function kc(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), (t = oe()), (e.pingedLanes |= e.suspendedLanes & n), J === e && (b & n) === n && (Y === 4 || (Y === 3 && (b & 130023424) === b && 500 > Q() - _o) ? St(e, 0) : (No |= n)), pe(e, t);
}
function Ja(e, t) {
  t === 0 && (e.mode & 1 ? ((t = ur), (ur <<= 1), !(ur & 130023424) && (ur = 4194304)) : (t = 1));
  var n = oe();
  (e = Ze(e, t)), e !== null && (Xn(e, t, n), pe(e, n));
}
function Sc(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ja(e, n);
}
function Ec(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), Ja(e, n);
}
var qa;
qa = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || fe.current) ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ce = !1), fc(e, t, n);
      ce = !!(e.flags & 131072);
    }
  else (ce = !1), H && t.flags & 1048576 && ta(t, Br, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      jr(e, t), (e = t.pendingProps);
      var l = qt(t, le.current);
      Gt(t, n), (l = wo(null, t, r, e, l, n));
      var i = xo();
      return (t.flags |= 1), typeof l == 'object' && l !== null && typeof l.render == 'function' && l.$$typeof === void 0 ? ((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), de(r) ? ((i = !0), $r(t)) : (i = !1), (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null), mo(t), (l.updater = al), (t.stateNode = l), (l._reactInternals = t), Ni(t, r, e, n), (t = Li(null, t, r, !0, i, n))) : ((t.tag = 0), H && i && oo(t), ie(null, t, l, n), (t = t.child)), t;
    case 16:
      r = t.elementType;
      e: {
        switch ((jr(e, t), (e = t.pendingProps), (l = r._init), (r = l(r._payload)), (t.type = r), (l = t.tag = _c(r)), (e = Le(r, e)), l)) {
          case 0:
            t = ji(null, t, r, e, n);
            break e;
          case 1:
            t = Tu(null, t, r, e, n);
            break e;
          case 11:
            t = Pu(null, t, r, e, n);
            break e;
          case 14:
            t = zu(null, t, r, Le(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ''));
      }
      return t;
    case 0:
      return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : Le(r, l)), ji(e, t, r, l, n);
    case 1:
      return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : Le(r, l)), Tu(e, t, r, l, n);
    case 3:
      e: {
        if ((Da(t), e === null)) throw Error(y(387));
        (r = t.pendingProps), (i = t.memoizedState), (l = i.element), ia(e, t), Zr(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (((i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }), (t.updateQueue.baseState = i), (t.memoizedState = i), t.flags & 256)) {
            (l = nn(Error(y(423)), t)), (t = Mu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = nn(Error(y(424)), t)), (t = Mu(e, t, r, n, l));
            break e;
          } else for (he = ot(t.stateNode.containerInfo.firstChild), ve = t, H = !0, ze = null, n = aa(t, null, r, n), t.child = n; n; ) (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((bt(), r === l)) {
            t = Ke(e, t, n);
            break e;
          }
          ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ca(t), e === null && ki(t), (r = t.type), (l = t.pendingProps), (i = e !== null ? e.memoizedProps : null), (o = l.children), gi(r, l) ? (o = null) : i !== null && gi(r, i) && (t.flags |= 32), Oa(e, t), ie(e, t, o, n), t.child;
    case 6:
      return e === null && ki(t), null;
    case 13:
      return Fa(e, t, n);
    case 4:
      return ho(t, t.stateNode.containerInfo), (r = t.pendingProps), e === null ? (t.child = en(t, null, r, n)) : ie(e, t, r, n), t.child;
    case 11:
      return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : Le(r, l)), Pu(e, t, r, l, n);
    case 7:
      return ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (((r = t.type._context), (l = t.pendingProps), (i = t.memoizedProps), (o = l.value), O(Wr, r._currentValue), (r._currentValue = o), i !== null))
          if (Re(i.value, o)) {
            if (i.children === l.children && !fe.current) {
              t = Ke(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Be(-1, n & -n)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var v = c.pending;
                        v === null ? (s.next = s) : ((s.next = v.next), (v.next = s)), (c.pending = s);
                      }
                    }
                    (i.lanes |= n), (s = i.alternate), s !== null && (s.lanes |= n), Si(i.return, n, t), (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(y(341));
                (o.lanes |= n), (u = o.alternate), u !== null && (u.lanes |= n), Si(o, n, t), (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ie(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (l = t.type), (r = t.pendingProps.children), Gt(t, n), (l = Ee(l)), (r = r(l)), (t.flags |= 1), ie(e, t, r, n), t.child;
    case 14:
      return (r = t.type), (l = Le(r, t.pendingProps)), (l = Le(r.type, l)), zu(e, t, r, l, n);
    case 15:
      return Ma(e, t, t.type, t.pendingProps, n);
    case 17:
      return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : Le(r, l)), jr(e, t), (t.tag = 1), de(r) ? ((e = !0), $r(t)) : (e = !1), Gt(t, n), ua(t, r, l), Ni(t, r, l, n), Li(null, t, r, !0, e, n);
    case 19:
      return Ia(e, t, n);
    case 22:
      return Ra(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function ba(e, t) {
  return Ns(e, t);
}
function Nc(e, t, n, r) {
  (this.tag = e), (this.key = n), (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null), (this.index = 0), (this.ref = null), (this.pendingProps = t), (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null), (this.mode = r), (this.subtreeFlags = this.flags = 0), (this.deletions = null), (this.childLanes = this.lanes = 0), (this.alternate = null);
}
function ke(e, t, n, r) {
  return new Nc(e, t, n, r);
}
function zo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function _c(e) {
  if (typeof e == 'function') return zo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Yi)) return 11;
    if (e === Gi) return 14;
  }
  return 2;
}
function ct(e, t) {
  var n = e.alternate;
  return n === null ? ((n = ke(e.tag, t, e.key, e.mode)), (n.elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n)) : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)), (n.flags = e.flags & 14680064), (n.childLanes = e.childLanes), (n.lanes = e.lanes), (n.child = e.child), (n.memoizedProps = e.memoizedProps), (n.memoizedState = e.memoizedState), (n.updateQueue = e.updateQueue), (t = e.dependencies), (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), (n.sibling = e.sibling), (n.index = e.index), (n.ref = e.ref), n;
}
function zr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == 'function')) zo(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case Ot:
        return Et(n.children, l, i, t);
      case Ki:
        (o = 8), (l |= 8);
        break;
      case Gl:
        return (e = ke(12, n, t, l | 2)), (e.elementType = Gl), (e.lanes = i), e;
      case Xl:
        return (e = ke(13, n, t, l)), (e.elementType = Xl), (e.lanes = i), e;
      case Jl:
        return (e = ke(19, n, t, l)), (e.elementType = Jl), (e.lanes = i), e;
      case ss:
        return pl(n, l, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case os:
              o = 10;
              break e;
            case us:
              o = 9;
              break e;
            case Yi:
              o = 11;
              break e;
            case Gi:
              o = 14;
              break e;
            case Xe:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ''));
    }
  return (t = ke(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function Et(e, t, n, r) {
  return (e = ke(7, e, r, t)), (e.lanes = n), e;
}
function pl(e, t, n, r) {
  return (e = ke(22, e, r, t)), (e.elementType = ss), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function Ql(e, t, n) {
  return (e = ke(6, e, null, t)), (e.lanes = n), e;
}
function Zl(e, t, n) {
  return (t = ke(4, e.children !== null ? e.children : [], e.key, t)), (t.lanes = n), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
}
function jc(e, t, n, r, l) {
  (this.tag = t), (this.containerInfo = e), (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null), (this.timeoutHandle = -1), (this.callbackNode = this.pendingContext = this.context = null), (this.callbackPriority = 0), (this.eventTimes = _l(0)), (this.expirationTimes = _l(-1)), (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0), (this.entanglements = _l(0)), (this.identifierPrefix = r), (this.onRecoverableError = l), (this.mutableSourceEagerHydrationData = null);
}
function To(e, t, n, r, l, i, o, u, s) {
  return (e = new jc(e, t, n, u, s)), t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0), (i = ke(3, null, null, t)), (e.current = i), (i.stateNode = e), (i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }), mo(i), e;
}
function Lc(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Rt, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n };
}
function e0(e) {
  if (!e) return dt;
  e = e._reactInternals;
  e: {
    if (Tt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (de(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (de(n)) return bs(e, n, t);
  }
  return t;
}
function t0(e, t, n, r, l, i, o, u, s) {
  return (e = To(n, r, !0, e, l, i, o, u, s)), (e.context = e0(null)), (n = e.current), (r = oe()), (l = at(n)), (i = Be(r, l)), (i.callback = t ?? null), ut(n, i, l), (e.current.lanes = l), Xn(e, l, r), pe(e, r), e;
}
function ml(e, t, n, r) {
  var l = t.current,
    i = oe(),
    o = at(l);
  return (n = e0(n)), t.context === null ? (t.context = n) : (t.pendingContext = n), (t = Be(i, o)), (t.payload = { element: e }), (r = r === void 0 ? null : r), r !== null && (t.callback = r), (e = ut(l, t, o)), e !== null && (Me(e, l, o, i), Er(e, l, o)), o;
}
function el(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Au(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Mo(e, t) {
  Au(e, t), (e = e.alternate) && Au(e, t);
}
function Pc() {
  return null;
}
var n0 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ro(e) {
  this._internalRoot = e;
}
hl.prototype.render = Ro.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  ml(e, t, null, null);
};
hl.prototype.unmount = Ro.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Pt(function () {
      ml(null, e, null, null);
    }),
      (t[Qe] = null);
  }
};
function hl(e) {
  this._internalRoot = e;
}
hl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ms();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < qe.length && t !== 0 && t < qe[n].priority; n++);
    qe.splice(n, 0, e), n === 0 && Os(e);
  }
};
function Oo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function vl(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable ')));
}
function Bu() {}
function zc(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var c = el(o);
        i.call(c);
      };
    }
    var o = t0(t, r, e, 0, null, !1, !1, '', Bu);
    return (e._reactRootContainer = o), (e[Qe] = o.current), Un(e.nodeType === 8 ? e.parentNode : e), Pt(), o;
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var c = el(s);
      u.call(c);
    };
  }
  var s = To(e, 0, !1, null, null, !1, !1, '', Bu);
  return (
    (e._reactRootContainer = s),
    (e[Qe] = s.current),
    Un(e.nodeType === 8 ? e.parentNode : e),
    Pt(function () {
      ml(t, s, n, r);
    }),
    s
  );
}
function gl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == 'function') {
      var u = l;
      l = function () {
        var s = el(o);
        u.call(s);
      };
    }
    ml(t, o, e, l);
  } else o = zc(n, t, e, l, r);
  return el(o);
}
zs = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xn(t.pendingLanes);
        n !== 0 && (qi(t, n | 1), pe(t, Q()), !(M & 6) && ((rn = Q() + 500), ht()));
      }
      break;
    case 13:
      Pt(function () {
        var r = Ze(e, 1);
        if (r !== null) {
          var l = oe();
          Me(r, e, 1, l);
        }
      }),
        Mo(e, 1);
  }
};
bi = function (e) {
  if (e.tag === 13) {
    var t = Ze(e, 134217728);
    if (t !== null) {
      var n = oe();
      Me(t, e, 134217728, n);
    }
    Mo(e, 134217728);
  }
};
Ts = function (e) {
  if (e.tag === 13) {
    var t = at(e),
      n = Ze(e, t);
    if (n !== null) {
      var r = oe();
      Me(n, e, t, r);
    }
    Mo(e, t);
  }
};
Ms = function () {
  return R;
};
Rs = function (e, t) {
  var n = R;
  try {
    return (R = e), t();
  } finally {
    R = n;
  }
};
ui = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((ei(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ul(r);
            if (!l) throw Error(y(90));
            cs(r), ei(r, l);
          }
        }
      }
      break;
    case 'textarea':
      ds(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Qt(e, !!n.multiple, t, !1);
  }
};
ws = jo;
xs = Pt;
var Tc = { usingClientEntryPoint: !1, Events: [qn, Ht, ul, gs, ys, jo] },
  gn = { findFiberByHostInstance: xt, bundleType: 0, version: '18.2.0', rendererPackageName: 'react-dom' },
  Mc = {
    bundleType: gn.bundleType,
    version: gn.version,
    rendererPackageName: gn.rendererPackageName,
    rendererConfig: gn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ye.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ss(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: gn.findFiberByHostInstance || Pc,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var yr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yr.isDisabled && yr.supportsFiber)
    try {
      (rl = yr.inject(Mc)), (Ie = yr);
    } catch {}
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tc;
ye.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Oo(t)) throw Error(y(200));
  return Lc(e, t, null, n);
};
ye.createRoot = function (e, t) {
  if (!Oo(e)) throw Error(y(299));
  var n = !1,
    r = '',
    l = n0;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), (t = To(e, 1, !1, null, null, n, !1, r, l)), (e[Qe] = t.current), Un(e.nodeType === 8 ? e.parentNode : e), new Ro(t);
};
ye.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == 'function' ? Error(y(188)) : ((e = Object.keys(e).join(',')), Error(y(268, e)));
  return (e = Ss(t)), (e = e === null ? null : e.stateNode), e;
};
ye.flushSync = function (e) {
  return Pt(e);
};
ye.hydrate = function (e, t, n) {
  if (!vl(t)) throw Error(y(200));
  return gl(null, e, t, !0, n);
};
ye.hydrateRoot = function (e, t, n) {
  if (!Oo(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = '',
    o = n0;
  if ((n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), (t = t0(t, null, e, 1, n ?? null, l, !1, i, o)), (e[Qe] = t.current), Un(e), r)) for (e = 0; e < r.length; e++) (n = r[e]), (l = n._getVersion), (l = l(n._source)), t.mutableSourceEagerHydrationData == null ? (t.mutableSourceEagerHydrationData = [n, l]) : t.mutableSourceEagerHydrationData.push(n, l);
  return new hl(t);
};
ye.render = function (e, t, n) {
  if (!vl(t)) throw Error(y(200));
  return gl(null, e, t, !1, n);
};
ye.unmountComponentAtNode = function (e) {
  if (!vl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Pt(function () {
        gl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Qe] = null);
        });
      }),
      !0)
    : !1;
};
ye.unstable_batchedUpdates = jo;
ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!vl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return gl(e, t, n, !1, r);
};
ye.version = '18.2.0-next-9e3b772b8-20220608';
function r0() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r0);
    } catch (e) {
      console.error(e);
    }
}
r0(), (ts.exports = ye);
var Rc = ts.exports,
  Wu = Rc;
(Kl.createRoot = Wu.createRoot), (Kl.hydrateRoot = Wu.hydrateRoot);
const l0 =
    "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%2010C20%2015.5228%2015.5228%2020%2010%2020C4.47715%2020%200%2015.5228%200%2010C0%204.47715%204.47715%200%2010%200C15.5228%200%2020%204.47715%2020%2010Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.0886%206.18499C10.8717%206.43163%2010.8717%206.83153%2011.0886%207.07817L13.1032%209.36842H5.55556C5.24873%209.36842%205%209.65119%205%2010C5%2010.3488%205.24873%2010.6316%205.55556%2010.6316H13.1032L11.0886%2012.9218C10.8717%2013.1685%2010.8717%2013.5684%2011.0886%2013.815C11.3056%2014.0617%2011.6574%2014.0617%2011.8743%2013.815L14.8373%2010.4466C15.0542%2010.1999%2015.0542%209.80005%2014.8373%209.55341L11.8743%206.18499C11.6574%205.93834%2011.3056%205.93834%2011.0886%206.18499Z'%20fill='%23FF6452'/%3e%3c/svg%3e",
  Oc =
    "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.688%2016.096C9.57867%2016.096%208.576%2015.8507%207.68%2015.36C6.79467%2014.8693%206.096%2014.192%205.584%2013.328C5.08267%2012.4533%204.832%2011.4773%204.832%2010.4C4.832%209.32267%205.08267%208.352%205.584%207.488C6.096%206.61333%206.8%205.93067%207.696%205.44C8.592%204.94933%209.59467%204.704%2010.704%204.704C11.536%204.704%2012.304%204.84267%2013.008%205.12C13.712%205.39733%2014.3093%205.80267%2014.8%206.336L14.048%207.088C13.1733%206.20267%2012.0693%205.76%2010.736%205.76C9.85067%205.76%209.04533%205.96267%208.32%206.368C7.59467%206.77333%207.024%207.328%206.608%208.032C6.20267%208.736%206%209.52533%206%2010.4C6%2011.2747%206.20267%2012.064%206.608%2012.768C7.024%2013.472%207.59467%2014.0267%208.32%2014.432C9.04533%2014.8373%209.85067%2015.04%2010.736%2015.04C12.08%2015.04%2013.184%2014.592%2014.048%2013.696L14.8%2014.448C14.3093%2014.9813%2013.7067%2015.392%2012.992%2015.68C12.288%2015.9573%2011.52%2016.096%2010.688%2016.096Z'%20fill='white'/%3e%3ccircle%20cx='10'%20cy='10'%20r='9.5'%20stroke='white'/%3e%3c/svg%3e",
  Dc =
    "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.5648%201.00458L14.7875%201C11.6674%201%209.65099%203.12509%209.65099%206.41423V8.91055H6.85857C6.61728%208.91055%206.42188%209.1115%206.42188%209.35937V12.9763C6.42188%2013.2241%206.6175%2013.4249%206.85857%2013.4249H9.65099V22.5514C9.65099%2022.7993%209.84639%2023%2010.0877%2023H13.731C13.9723%2023%2014.1677%2022.799%2014.1677%2022.5514V13.4249H17.4327C17.674%2013.4249%2017.8694%2013.2241%2017.8694%2012.9763L17.8707%209.35937C17.8707%209.24036%2017.8246%209.12638%2017.7428%209.04215C17.661%208.95793%2017.5496%208.91055%2017.4338%208.91055H14.1677V6.79439C14.1677%205.77727%2014.4036%205.26094%2015.6935%205.26094L17.5643%205.26025C17.8054%205.26025%2018.0008%205.0593%2018.0008%204.81166V1.45317C18.0008%201.20576%2017.8056%201.00504%2017.5648%201.00458Z'%20fill='black'/%3e%3c/svg%3e",
  Fc =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%2020010904//EN'%20'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg%20version='1.0'%20xmlns='http://www.w3.org/2000/svg'%20width='512.000000pt'%20height='512.000000pt'%20viewBox='0%200%20512.000000%20512.000000'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cg%20transform='translate(0.000000,512.000000)%20scale(0.100000,-0.100000)'%20fill='%23000000'%20stroke='none'%3e%3cpath%20d='M95%204146%20c-67%20-29%20-105%20-106%20-91%20-181%209%20-47%2059%20-102%20104%20-115%2026%20-8%20785%20-10%202474%20-8%20l2437%203%2027%2021%20c53%2039%2069%2071%2069%20134%200%2063%20-16%2095%20-69%20134%20l-27%2021%20-2447%202%20c-2019%202%20-2452%200%20-2477%20-11z'/%3e%3cpath%20d='M95%202546%20c-67%20-29%20-105%20-106%20-91%20-181%209%20-47%2059%20-102%20104%20-115%2026%20-8%20785%20-10%202474%20-8%20l2437%203%2027%2021%20c53%2039%2069%2071%2069%20134%200%2063%20-16%2095%20-69%20134%20l-27%2021%20-2447%202%20c-2019%202%20-2452%200%20-2477%20-11z'/%3e%3cpath%20d='M95%20946%20c-67%20-29%20-105%20-106%20-91%20-181%209%20-47%2059%20-102%20104%20-115%2026%20-8%20785%20-10%202474%20-8%20l2437%203%2027%2021%20c53%2039%2069%2071%2069%20134%200%2063%20-16%2095%20-69%20134%20l-27%2021%20-2447%202%20c-2019%202%20-2452%200%20-2477%20-11z'/%3e%3c/g%3e%3c/svg%3e",
  Ic =
    "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2%2012C2%207.80863%202%205.71294%203.05041%204.26718C3.38964%203.80026%203.80026%203.38964%204.26718%203.05041C5.71294%202%207.80863%202%2012%202C16.1914%202%2018.2871%202%2019.7328%203.05041C20.1997%203.38964%2020.6104%203.80026%2020.9496%204.26718C22%205.71294%2022%207.80863%2022%2012C22%2016.1914%2022%2018.2871%2020.9496%2019.7328C20.6104%2020.1997%2020.1997%2020.6104%2019.7328%2020.9496C18.2871%2022%2016.1914%2022%2012%2022C7.80863%2022%205.71294%2022%204.26718%2020.9496C3.80026%2020.6104%203.38964%2020.1997%203.05041%2019.7328C2%2018.2871%202%2016.1914%202%2012ZM12.0011%206.70312C9.07747%206.70312%206.70703%209.07357%206.70703%2011.9972C6.70703%2014.9209%209.07747%2017.2914%2012.0011%2017.2914C14.9248%2017.2914%2017.2953%2014.9209%2017.2953%2011.9972C17.2953%209.07357%2014.9248%206.70312%2012.0011%206.70312ZM12.0011%2015.3061C10.1773%2015.3061%208.69233%2013.8211%208.69233%2011.9972C8.69233%2010.1721%2010.1773%208.68842%2012.0011%208.68842C13.825%208.68842%2015.31%2010.1721%2015.31%2011.9972C15.31%2013.8211%2013.825%2015.3061%2012.0011%2015.3061ZM18.3953%206.307C18.3953%206.69661%2018.0794%207.01244%2017.6898%207.01244C17.3002%207.01244%2016.9844%206.69661%2016.9844%206.307C16.9844%205.9174%2017.3002%205.60156%2017.6898%205.60156C18.0794%205.60156%2018.3953%205.9174%2018.3953%206.307Z'%20fill='black'/%3e%3c/svg%3e",
  Hc =
    "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.23576%200.0195141C8.27717%200.167622%207.66306%200.45699%207.06498%201.04233C5.56279%202.51266%205.47498%204.91504%206.85519%206.78199C6.9655%206.93126%207.31946%207.32504%207.64177%207.65709C8.66521%208.71149%2010.0762%209.8829%2012.1334%2011.3862L12.7104%2011.8078L13.3758%2011.3146C15.4311%209.79122%2016.7986%208.65449%2017.7468%207.6812C18.4867%206.92175%2018.779%206.53034%2019.0798%205.89619C19.4122%205.19519%2019.5241%204.69502%2019.522%203.91884C19.52%203.15071%2019.443%202.80603%2019.1195%202.11478C18.9137%201.67508%2018.8313%201.55779%2018.4554%201.16941C17.9748%200.672955%2017.5594%200.396078%2017.0182%200.21151C16.1133%20-0.0971494%2015.2038%20-0.0512363%2014.3696%200.345246C13.8865%200.574859%2013.6371%200.760103%2013.1394%201.25878L12.7064%201.69259L12.2252%201.21113C11.6926%200.678356%2011.2714%200.396319%2010.7313%200.210931C10.2294%200.0387088%209.61809%20-0.0395652%209.23576%200.0195141ZM7.7121%2013.547C7.11299%2013.6002%206.25303%2013.7491%205.65154%2013.904C4.95984%2014.082%204.03186%2014.4079%204.03186%2014.4727C4.03186%2014.5536%206.38084%2021.8036%206.42228%2021.8506C6.44131%2021.8722%206.676%2021.8521%206.94384%2021.8059C7.37516%2021.7316%207.97468%2021.7186%2012.1893%2021.6921L16.9479%2021.6622L17.3988%2021.5362C17.946%2021.3833%2018.4694%2021.1403%2018.8666%2020.8547C19.0297%2020.7374%2020.1602%2019.7775%2021.379%2018.7216C22.9433%2017.3663%2023.6347%2016.7371%2023.7306%2016.5817C24.1026%2015.9784%2024.0886%2015.3468%2023.6933%2014.8945C23.5794%2014.7642%2023.4001%2014.623%2023.289%2014.5763C23.0429%2014.4726%2022.6293%2014.4667%2022.4075%2014.5637C22.316%2014.6037%2021.5671%2015.0658%2020.7432%2015.5905C19.0719%2016.6548%2018.5405%2016.9463%2017.8454%2017.1799C16.7076%2017.5624%2016.3503%2017.5896%2012.4589%2017.5906L9.18888%2017.5915V16.8701V16.1487L11.5916%2016.1346C13.9158%2016.121%2014.0012%2016.1172%2014.2053%2016.0196C14.5171%2015.8705%2014.701%2015.6897%2014.8416%2015.3941C15.0971%2014.8568%2014.9636%2014.1955%2014.5209%2013.8057C14.1624%2013.4901%2014.1773%2013.4914%2011.0205%2013.4987C9.45873%2013.5024%207.96995%2013.5241%207.7121%2013.547ZM1.32545%2015.6528L0.00210969%2016.2652L0.00103141%2020.1326L0%2024L0.503982%2023.8168C0.781196%2023.7161%201.89403%2023.3232%202.97701%2022.9438C4.05999%2022.5643%204.96425%2022.2376%204.98647%2022.2177C5.02923%2022.1795%202.73369%2015.0336%202.68011%2015.0379C2.6629%2015.0393%202.05334%2015.316%201.32545%2015.6528Z'%20fill='white'/%3e%3c/svg%3e",
  Uc =
    "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.5408%204.12375L13.0408%202.06375C12.4708%201.85375%2011.5408%201.85375%2010.9708%202.06375L5.47078%204.12375C4.41078%204.52375%203.55078%205.76375%203.55078%206.89375V14.9937C3.55078%2015.8038%204.08078%2016.8738%204.73078%2017.3538L10.2308%2021.4637C11.2008%2022.1937%2012.7908%2022.1937%2013.7608%2021.4637L19.2608%2017.3538C19.9108%2016.8638%2020.4408%2015.8038%2020.4408%2014.9937V6.89375C20.4508%205.76375%2019.5908%204.52375%2018.5408%204.12375ZM15.4808%209.72375L11.1808%2014.0238C11.0308%2014.1737%2010.8408%2014.2437%2010.6508%2014.2437C10.4608%2014.2437%2010.2708%2014.1737%2010.1208%2014.0238L8.52078%2012.4037C8.23078%2012.1137%208.23078%2011.6337%208.52078%2011.3438C8.81078%2011.0538%209.29078%2011.0538%209.58078%2011.3438L10.6608%2012.4237L14.4308%208.65375C14.7208%208.36375%2015.2008%208.36375%2015.4908%208.65375C15.7808%208.94375%2015.7808%209.43375%2015.4808%209.72375Z'%20fill='white'/%3e%3c/svg%3e",
  nt =
    "data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.0755%201.24162C10.4158%200.416631%2011.5842%200.416631%2011.9245%201.24162L13.9694%206.20014C14.2507%206.88227%2014.8848%207.3541%2015.619%207.42766L20.796%207.94636C21.6527%208.03219%2022.0077%209.08845%2021.3767%209.67424L17.3747%2013.3897C16.8594%2013.8681%2016.6332%2014.582%2016.7789%2015.2699L17.9307%2020.7069C18.1132%2021.5686%2017.1733%2022.2283%2016.425%2021.7638L12.0548%2019.051C11.4088%2018.6499%2010.5912%2018.6499%209.94518%2019.051L5.57504%2021.7638C4.82673%2022.2283%203.88681%2021.5686%204.06934%2020.7069L5.22109%2015.2699C5.36681%2014.582%205.14058%2013.8681%204.62527%2013.3897L0.62328%209.67424C-0.00768149%209.08845%200.347297%208.03219%201.20397%207.94636L6.38103%207.42766C7.11522%207.3541%207.74926%206.88227%208.03058%206.20014L10.0755%201.24162Z'%20fill='%23FF6452'/%3e%3c/svg%3e",
  Vc =
    "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.5%2015.5C21.78%2015.5%2022%2015.72%2022%2016V17C22%2018.66%2020.66%2020%2019%2020C19%2018.35%2017.65%2017%2016%2017C14.35%2017%2013%2018.35%2013%2020H11C11%2018.35%209.65%2017%208%2017C6.35%2017%205%2018.35%205%2020C3.34%2020%202%2018.66%202%2017V15C2%2014.45%202.45%2014%203%2014H12.5C13.88%2014%2015%2012.88%2015%2011.5V6C15%205.45%2015.45%205%2016%205H16.84C17.56%205%2018.22%205.39%2018.58%206.01L19.22%207.13C19.31%207.29%2019.19%207.5%2019%207.5C17.62%207.5%2016.5%208.62%2016.5%2010V13C16.5%2014.38%2017.62%2015.5%2019%2015.5H21.5Z'%20fill='white'/%3e%3cpath%20d='M8%2022C9.10457%2022%2010%2021.1046%2010%2020C10%2018.8954%209.10457%2018%208%2018C6.89543%2018%206%2018.8954%206%2020C6%2021.1046%206.89543%2022%208%2022Z'%20fill='white'/%3e%3cpath%20d='M16%2022C17.1046%2022%2018%2021.1046%2018%2020C18%2018.8954%2017.1046%2018%2016%2018C14.8954%2018%2014%2018.8954%2014%2020C14%2021.1046%2014.8954%2022%2016%2022Z'%20fill='white'/%3e%3cpath%20d='M22%2012.53V14H19C18.45%2014%2018%2013.55%2018%2013V10C18%209.45%2018.45%209%2019%209H20.29L21.74%2011.54C21.91%2011.84%2022%2012.18%2022%2012.53Z'%20fill='white'/%3e%3cpath%20d='M13.08%202H5.69C3.9%202%202.4%203.28%202.07%204.98H6.44C6.82%204.98%207.12%205.29%207.12%205.67C7.12%206.05%206.82%206.35%206.44%206.35H2V7.73H4.6C4.98%207.73%205.29%208.04%205.29%208.42C5.29%208.8%204.98%209.1%204.6%209.1H2V10.48H2.77C3.15%2010.48%203.46%2010.79%203.46%2011.17C3.46%2011.55%203.15%2011.85%202.77%2011.85H2V12.08C2%2012.63%202.45%2013.08%203%2013.08H12.15C13.17%2013.08%2014%2012.25%2014%2011.23V2.92C14%202.41%2013.59%202%2013.08%202Z'%20fill='white'/%3e%3cpath%20d='M2.07%204.98438H1.92H0.94C0.56%204.98438%200.25%205.29438%200.25%205.67438C0.25%206.05438%200.56%206.35437%200.94%206.35437H1.85H2V5.69438C2%205.45438%202.03%205.21438%202.07%204.98438Z'%20fill='white'/%3e%3cpath%20d='M1.85%207.73438H0.94C0.56%207.73438%200.25%208.04438%200.25%208.42438C0.25%208.80438%200.56%209.10438%200.94%209.10438H1.85H2V7.73438H1.85Z'%20fill='white'/%3e%3cpath%20d='M1.85%2010.4844H0.94C0.56%2010.4844%200.25%2010.7944%200.25%2011.1744C0.25%2011.5544%200.56%2011.8544%200.94%2011.8544H1.85H2V10.4844H1.85Z'%20fill='white'/%3e%3c/svg%3e",
  $c =
    "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.5%205.77624C21.7271%206.10418%2020.8978%206.32658%2020.0264%206.42587C20.9161%205.91571%2021.5972%205.10654%2021.92%204.1453C21.0854%204.61774%2020.1642%204.96079%2019.1826%205.14675C18.3966%204.34385%2017.2785%203.84375%2016.0384%203.84375C13.6593%203.84375%2011.7303%205.69081%2011.7303%207.9676C11.7303%208.29051%2011.7683%208.6059%2011.8418%208.90748C8.26201%208.73532%205.08768%207.09308%202.96314%204.59763C2.59176%205.20579%202.38049%205.91443%202.38049%206.67088C2.38049%208.10205%203.14161%209.36484%204.2964%2010.1036C3.5904%2010.081%202.92639%209.89507%202.34508%209.58596V9.63748C2.34508%2011.6353%203.83056%2013.3027%205.80024%2013.6822C5.43936%2013.7752%205.05882%2013.8267%204.66514%2013.8267C4.38696%2013.8267%204.11794%2013.8003%203.85417%2013.75C4.40267%2015.3898%205.99315%2016.5822%207.87756%2016.6149C6.40388%2017.7206%204.54573%2018.3778%202.52749%2018.3778C2.17976%2018.3778%201.83724%2018.3576%201.5%2018.3212C3.40671%2019.4935%205.67036%2020.1771%208.10327%2020.1771C16.028%2020.1771%2020.3597%2013.892%2020.3597%208.44132L20.3453%207.90731C21.1917%207.32928%2021.9239%206.60303%2022.5%205.77624Z'%20fill='black'/%3e%3c/svg%3e",
  i0 = './assets/big-shoe1-t-kyWvQp.png',
  Ac = '/assets/big-shoe2-YLWdOy0_.png',
  Bc = '/assets/big-shoe3-E5eZfJ29.png',
  Wc = './assets/customer1-5wKu_-0p.jpeg',
  Qc = './assets/customer2-0epWXQut.svg',
  Zc =
    "data:image/svg+xml,%3csvg%20width='230'%20height='48'%20viewBox='0%200%20230%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M148.367%2013.4V47H143.231L124.703%2024.248V47H118.511V13.4H123.647L142.175%2036.152V13.4H148.367ZM156.794%2021.368H162.794V47H156.794V21.368ZM159.818%2017.144C158.73%2017.144%20157.818%2016.808%20157.082%2016.136C156.346%2015.432%20155.978%2014.568%20155.978%2013.544C155.978%2012.52%20156.346%2011.672%20157.082%2011C157.818%2010.296%20158.73%209.944%20159.818%209.944C160.906%209.944%20161.818%2010.28%20162.554%2010.952C163.29%2011.592%20163.658%2012.408%20163.658%2013.4C163.658%2014.456%20163.29%2015.352%20162.554%2016.088C161.85%2016.792%20160.938%2017.144%20159.818%2017.144ZM181.133%2036.008L176.669%2040.232V47H170.669V11.384H176.669V32.888L189.101%2021.368H196.301L185.597%2032.12L197.309%2047H190.013L181.133%2036.008ZM224.202%2034.328C224.202%2034.744%20224.17%2035.336%20224.106%2036.104H203.994C204.346%2037.992%20205.258%2039.496%20206.73%2040.616C208.234%2041.704%20210.09%2042.248%20212.298%2042.248C215.114%2042.248%20217.434%2041.32%20219.258%2039.464L222.474%2043.16C221.322%2044.536%20219.866%2045.576%20218.106%2046.28C216.346%2046.984%20214.362%2047.336%20212.154%2047.336C209.338%2047.336%20206.858%2046.776%20204.714%2045.656C202.57%2044.536%20200.906%2042.984%20199.722%2041C198.57%2038.984%20197.994%2036.712%20197.994%2034.184C197.994%2031.688%20198.554%2029.448%20199.674%2027.464C200.826%2025.448%20202.41%2023.88%20204.426%2022.76C206.442%2021.64%20208.714%2021.08%20211.242%2021.08C213.738%2021.08%20215.962%2021.64%20217.914%2022.76C219.898%2023.848%20221.434%2025.4%20222.522%2027.416C223.642%2029.4%20224.202%2031.704%20224.202%2034.328ZM211.242%2025.88C209.322%2025.88%20207.69%2026.456%20206.346%2027.608C205.034%2028.728%20204.234%2030.232%20203.946%2032.12H218.49C218.234%2030.264%20217.45%2028.76%20216.138%2027.608C214.826%2026.456%20213.194%2025.88%20211.242%2025.88Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M59.8456%2015.419C39.9949%2020.9424%2022.3902%2025.4554%2020.724%2025.4467C15.9305%2025.421%2011.4443%2021.6197%2010.7696%2017.013C10.4527%2014.8455%2010.5085%2011.7029%2010.8939%2010.0303L11.5947%206.98847L9.02521%2010.212C5.044%2015.2067%201.23385%2023.0622%200.463769%2027.864C-1.04903%2037.2942%206.50217%2043.5128%2016.6527%2041.1958C20.6759%2040.2779%2096.9941%207.06822%2098.3725%205.63565C99.4257%204.54144%2093.7956%205.97124%2059.8456%2015.419Z'%20fill='white'/%3e%3c/svg%3e",
  Kc =
    "data:image/svg+xml,%3csvg%20width='129'%20height='29'%20viewBox='0%200%20129%2029'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M89.0803%206.2V23H86.5123L77.2483%2011.624V23H74.1523V6.2H76.7203L85.9843%2017.576V6.2H89.0803ZM93.294%2010.184H96.294V23H93.294V10.184ZM94.806%208.072C94.262%208.072%2093.806%207.904%2093.438%207.568C93.07%207.216%2092.886%206.784%2092.886%206.272C92.886%205.76%2093.07%205.336%2093.438%205C93.806%204.648%2094.262%204.472%2094.806%204.472C95.35%204.472%2095.806%204.64%2096.174%204.976C96.542%205.296%2096.726%205.704%2096.726%206.2C96.726%206.728%2096.542%207.176%2096.174%207.544C95.822%207.896%2095.366%208.072%2094.806%208.072ZM105.463%2017.504L103.231%2019.616V23H100.231V5.192H103.231V15.944L109.447%2010.184H113.047L107.695%2015.56L113.551%2023H109.903L105.463%2017.504ZM126.998%2016.664C126.998%2016.872%20126.982%2017.168%20126.95%2017.552H116.894C117.07%2018.496%20117.526%2019.248%20118.262%2019.808C119.014%2020.352%20119.942%2020.624%20121.046%2020.624C122.454%2020.624%20123.614%2020.16%20124.526%2019.232L126.134%2021.08C125.558%2021.768%20124.83%2022.288%20123.95%2022.64C123.07%2022.992%20122.078%2023.168%20120.974%2023.168C119.566%2023.168%20118.326%2022.888%20117.254%2022.328C116.182%2021.768%20115.35%2020.992%20114.758%2020C114.182%2018.992%20113.894%2017.856%20113.894%2016.592C113.894%2015.344%20114.174%2014.224%20114.734%2013.232C115.31%2012.224%20116.102%2011.44%20117.11%2010.88C118.118%2010.32%20119.254%2010.04%20120.518%2010.04C121.766%2010.04%20122.878%2010.32%20123.854%2010.88C124.846%2011.424%20125.614%2012.2%20126.158%2013.208C126.718%2014.2%20126.998%2015.352%20126.998%2016.664ZM120.518%2012.44C119.558%2012.44%20118.742%2012.728%20118.07%2013.304C117.414%2013.864%20117.014%2014.616%20116.87%2015.56H124.142C124.014%2014.632%20123.622%2013.88%20122.966%2013.304C122.31%2012.728%20121.494%2012.44%20120.518%2012.44Z'%20fill='%23FF6452'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M37.6096%209.80468C25.1346%2013.2758%2014.071%2016.112%2013.0239%2016.1065C10.0114%2016.0904%207.19209%2013.7015%206.76806%2010.8064C6.56893%209.44425%206.60402%207.46928%206.84618%206.41814L7.28659%204.50653L5.67183%206.53232C3.16986%209.67124%200.775395%2014.608%200.291439%2017.6257C-0.65927%2023.552%204.08624%2027.46%2010.4653%2026.0039C12.9937%2025.4271%2060.9554%204.55665%2061.8216%203.65636C62.4835%202.96871%2058.9453%203.86726%2037.6096%209.80468Z'%20fill='%23FF6452'/%3e%3c/svg%3e",
  Yc = '/assets/offer-eTb6aWQ-.svg',
  Gc = '/assets/shoe4-ITTu7E0E.svg',
  Xc = '/assets/shoe5-7-zrw4nw.svg',
  Jc = '/assets/shoe6-hPwIYIrH.svg',
  qc = '/assets/shoe7-KkjaIAWD.svg',
  bc = '/assets/shoe8-1eCOC6UF.svg',
  e1 = '/assets/thumbnail-shoe1-Wikb5HTD.svg',
  t1 = '/assets/thumbnail-shoe2-uPtbhEJp.svg',
  n1 = '/assets/thumbnail-shoe3-CoCB3tGA.svg',
  r1 = [
    { href: '#home', label: 'Home' },
    { href: '#about-us', label: 'About Us' },
    { href: '#products', label: 'Products' },
    { href: '#contact-us', label: 'Contact Us' },
  ],
  l1 = [
    { thumbnail: e1, bigShoe: i0 },
    { thumbnail: t1, bigShoe: Ac },
    { thumbnail: n1, bigShoe: Bc },
  ],
  i1 = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
  ],
  o1 = [
    { imgURL: Gc, name: 'Nike Air Jordan-01', price: '$200.20' },
    { imgURL: Xc, name: 'Nike Air Jordan-10', price: '$210.20' },
    { imgURL: Jc, name: 'Nike Air Jordan-100', price: '$220.20' },
    { imgURL: qc, name: 'Nike Air Jordan-001', price: '$230.20' },
  ],
  u1 = [
    { imgURL: Vc, label: 'Free shipping', subtext: 'Enjoy seamless shopping with our complimentary shipping service.' },
    { imgURL: Uc, label: 'Secure Payment', subtext: 'Experience worry-free transactions with our secure payment options.' },
    { imgURL: Hc, label: 'Love to help you', subtext: 'Our dedicated team is here to assist you every step of the way.' },
  ],
  s1 = [
    { imgURL: Wc, customerName: 'Morich Brown', rating: 4.5, feedback: 'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!' },
    { imgURL: Qc, customerName: 'Lota Mongeskar', rating: 4.5, feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!" },
  ],
  a1 = [
    {
      title: 'Products',
      links: [
        { name: 'Air Force 1', link: '/' },
        { name: 'Air Max 1', link: '/' },
        { name: 'Air Jordan 1', link: '/' },
        { name: 'Air Force 2', link: '/' },
        { name: 'Nike Waffle Racer', link: '/' },
        { name: 'Nike Cortez', link: '/' },
      ],
    },
    {
      title: 'Help',
      links: [
        { name: 'About us', link: '/' },
        { name: 'FAQs', link: '/' },
        { name: 'How it works', link: '/' },
        { name: 'Privacy policy', link: '/' },
        { name: 'Payment policy', link: '/' },
      ],
    },
    {
      title: 'Get in touch',
      links: [
        { name: 'customer@nike.com', link: 'mailto:customer@nike.com' },
        { name: '+92554862354', link: 'tel:+92554862354' },
      ],
    },
  ],
  c1 = [
    { src: Dc, alt: 'facebook logo' },
    { src: $c, alt: 'twitter logo' },
    { src: Ic, alt: 'instagram logo' },
  ],
  f1 = () => p.jsx('header', { className: 'padding-x py-8 absolute z-10 w-full', children: p.jsxs('nav', { className: 'flex justify-between items-center max-container', children: [p.jsx('a', { href: '', children: p.jsx('img', { src: Kc, alt: 'logo', width: 130, height: 39 }) }), p.jsx('ul', { className: 'flex-1 flex justify-center items-center gap-16 max-lg:hidden', children: r1.map((e) => p.jsx('li', { children: p.jsx('a', { href: e.label, className: 'font-monserrat leading-normal text-lg text-slate-gray', children: e.label }) }, e.label)) }), p.jsx('div', { className: 'hidden max-lg:block', children: p.jsx('img', { src: Fc, alt: 'Hamburger', width: 25, height: 25 }) })] }) }),
  d1 = ({ imgURL: e, customerName: t, rating: n, feedback: r }) =>
    p.jsxs('div', {
      className: 'flex justify-center items-center flex-col',
      children: [
        p.jsx('img', { src: e, alt: 'customer', className: 'rounded-full object-cover w-[120px] h-[120px]' }),
        p.jsx('p', { className: 'mt-6 max-w-sm text-center info-text', children: r }),
        p.jsxs('div', { className: 'mt-3 flex justify-center items-center gap-2.5', children: [p.jsx('img', { src: nt, width: 24, height: 24, alt: 'rating star', className: 'object-contain m-0' }), p.jsx('img', { src: nt, width: 24, height: 24, alt: 'rating star', className: 'object-contain m-0' }), p.jsx('img', { src: nt, width: 24, height: 24, alt: 'rating star', className: 'object-contain m-0' }), p.jsx('img', { src: nt, width: 24, height: 24, alt: 'rating star', className: 'object-contain m-0' }), p.jsxs('p', { className: 'text-xl font-montserrat text-slate-gray', children: ['(', n, ')'] })] }),
        p.jsx('h3', { className: 'mt-1 font-palanquin text-3xl text-center font-bold', children: t }),
      ],
    }),
  p1 = () => p.jsxs('section', { className: 'max-container', children: [p.jsxs('h3', { className: 'font-palanquin text-center text-4xl font-bold', children: ['What Our', p.jsx('span', { className: 'text-coral-red', children: ' Customers ' }), 'Say?'] }), p.jsx('p', { className: 'm-auto mt-4 max-w-lg  text-center info-text', children: 'Hear genuine stories from our satisfied customers about their exceptional experiences with us.' }), p.jsx('div', { className: 'mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14', children: s1.map((e, t) => p.jsx(d1, { imgURL: e.imgURL, customerName: e.customerName, rating: e.rating, feedback: e.feedback }, t)) })] }),
  m1 = () =>
    p.jsxs('footer', {
      className: 'max-container',
      children: [
        p.jsxs('div', {
          className: 'flex justify-between items-start gap-20 flex-wrap max-lg:flex-col',
          children: [
            p.jsxs('div', { className: 'flex flex-col items-start', children: [p.jsx('a', { href: '/', children: p.jsx('img', { src: Zc, alt: 'logo', width: 150, height: 46, className: 'm-0' }) }), p.jsx('p', { className: 'mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm', children: 'Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards' }), p.jsx('div', { className: 'flex items-center gap-5 mt-8', children: c1.map((e) => p.jsx('div', { className: 'flex justify-center items-center w-12 h-12 bg-white rounded-full', children: p.jsx('img', { src: e.src, alt: e.alt, width: 24, height: 24 }) }, e.alt)) })] }),
            p.jsx('div', { className: 'flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap', children: a1.map((e) => p.jsxs('div', { children: [p.jsx('h4', { className: 'font-montserrat text-2xl leading-normal font-medium mb-6 text-white', children: e.title }), p.jsx('ul', { children: e.links.map((t) => p.jsx('li', { className: 'mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray', children: p.jsx('a', { href: t.link, children: t.name }) }, t.name)) })] }, e.title)) }),
          ],
        }),
        p.jsxs('div', { className: 'flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center', children: [p.jsxs('div', { className: 'flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer', children: [p.jsx('img', { src: Oc, alt: 'copyright sign', width: 20, height: 20, className: 'rounded-full m-0' }), p.jsx('p', { children: 'Copyright. All rights reserved.' })] }), p.jsx('p', { className: 'font-montserrat cursor-pointer', children: 'Terms & Conditions' })] }),
      ],
    }),
  Yn = ({ label: e, iconUrl: t, backgroundColor: n, textColor: r, borderColor: l, fullWidth: i }) => p.jsxs('button', { className: `flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${n ? `${n} ${r} ${l}` : 'bg-coral-red text-white border-coral-red'} ${i && 'w-full'}`, children: [e, ' ', t && p.jsx('img', { src: t, alt: 'arrwo right icon', className: 'ml-2 rounded-full w-5 h-5 ' })] }),
  h1 = ({ imgURL: e, changeBigShoeImage: t, bigShoeImg: n }) => {
    const r = () => {
      n !== e.bigshoe && t(e.bigShoe);
    };
    return p.jsx('div', { className: `border-2 rounded-xl ${n === e.bigShoe ? 'border-coral-red' : 'border-transparent '} cursor-pointer max-sm:flex-1`, onClick: r, children: p.jsx('div', { className: 'flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4', children: p.jsx('img', { src: e.thumbnail, alt: 'shoe collection thumbnail', width: 127, height: 103, className: 'object-contain' }) }) });
  },
  v1 = () => {
    const [e, t] = nl.useState(i0);
    return p.jsxs('section', {
      id: 'home',
      className: 'w-full  flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container',
      children: [
        p.jsxs('div', {
          className: 'relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28',
          children: [
            p.jsx('p', { className: 'text-xl font-montserrat text-coral-red', children: 'Our Summer Collection' }),
            p.jsxs('h1', { className: 'mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold', children: [p.jsx('span', { className: 'xl:bg-white xl:whitespace-nowrap relative z-10 pr-15 ', children: 'The New Arrival' }), p.jsx('br', {}), p.jsx('span', { className: 'text-coral-red inline-block mt-3 mr-5', children: 'Nike ' }), 'Shoes'] }),
            p.jsx('p', { className: 'font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm', children: 'Discover Stylish Nike arrivals, quality comfort, and innovation for your active life.' }),
            p.jsx(Yn, { label: 'Shop now', iconUrl: l0 }),
            p.jsx('div', { className: 'flex justify-start items-start flex-wrap w-full mt-20 gap-16 ', children: i1.map((n, r) => p.jsxs('div', { children: [p.jsx('p', { className: 'text-4xl font-palanquin font-bold', children: n.value }), p.jsx('p', { className: 'leading-7 font-montserrat text-slate-gray', children: n.label })] }, r)) }),
          ],
        }),
        p.jsxs('div', {
          className: 'relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center ',
          children: [
            p.jsx('img', { src: e, alt: 'bigshoe1', width: 610, height: 500, className: 'object-contain relative z-10' }),
            p.jsx('div', {
              className: 'flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6',
              children: l1.map((n, r) =>
                p.jsx(
                  'div',
                  {
                    children: p.jsx(h1, {
                      imgURL: n,
                      changeBigShoeImage: (l) => {
                        t(l);
                      },
                      bigShoeImg: e,
                    }),
                  },
                  r
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  g1 = ({ imgURL: e, name: t, price: n }) =>
    p.jsxs('div', {
      className: 'flex flex-1 flex-col w-full max-sm:w-full',
      children: [p.jsx('img', { src: e, alt: t, className: 'w-[280px] h-[280px]' }), p.jsxs('div', { className: 'mt-8 flex justify-start gap-2.5', children: [p.jsx('img', { src: nt, alt: 'rating', width: 24, height: 24 }), p.jsx('img', { src: nt, alt: 'rating', width: 24, height: 24 }), p.jsx('img', { src: nt, alt: 'rating', width: 24, height: 24 }), p.jsx('img', { src: nt, alt: 'rating', width: 24, height: 24 }), p.jsx('p', { className: 'font-montserrat text-xl leading-normal text-slate-gray', children: '(4.5)' })] }), p.jsx('h3', { className: 'text-2xl font-bold', children: t }), p.jsx('p', { className: 'mt-2 font-montserrat text-xl leading-normal text-coral-red', children: n })],
    }),
  y1 = () => p.jsxs('section', { id: 'products', className: 'max-container max-sm:mt-12', children: [p.jsxs('div', { className: 'flex flex-col justify-start gap-5', children: [p.jsxs('h2', { className: 'text-4xl font-palanquin font-bold', children: ['Our ', p.jsx('span', { className: 'text-coral-red', children: 'Popular ' }), ' Products'] }), p.jsx('p', { className: 'lg:max-w-lg mt-2 font-montserrat text-slate-gray', children: 'Experience top-notch quality and sytle with our sought-after selections, Discover a world of comfort, design, and value' })] }), p.jsx('div', { className: 'mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14', children: o1.map((e) => p.jsx(g1, { ...e }, e.name)) })] }),
  w1 = ({ imgURL: e, label: t, subtext: n }) => p.jsxs('div', { className: 'flex-1 sm:w-[350px] sm:min-w[350px] w-full rounded-[20px] shadow-3xl px-10 py-16', children: [p.jsx('div', { className: 'w-11 h-11 flex justify-center items-center bg-coral-red rounded-full', children: p.jsx('img', { src: e, alt: t, width: 24, height: 24 }) }), p.jsx('h3', { className: 'mt-5 font-palanquin text-3xl leading-normal font-bold ', children: t }), p.jsx('p', { className: 'mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray', children: n })] }, t),
  x1 = () => p.jsx('section', { className: 'max-container flex justify-center flex-wrap gap-9', children: u1.map((e) => p.jsx(w1, { ...e }, e.label)) }),
  C1 = () =>
    p.jsxs('section', {
      className: 'flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container',
      children: [
        p.jsx('div', { className: 'flex-1', children: p.jsx('img', { src: Yc, alt: 'Shoe Promotion', width: 773, height: 687, className: 'object-contain w-full' }) }),
        p.jsxs('div', {
          className: 'flex flex-1 flex-col',
          children: [
            p.jsxs('h2', { className: 'text-4xl font-palanquin font-bold', children: [p.jsx('span', { className: 'text-coral-red', children: 'Special ' }), 'Offer'] }),
            p.jsx('p', { className: 'mt-4 info-text', children: 'Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.' }),
            p.jsx('p', { className: 'mt-6 info-text', children: 'Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.' }),
            p.jsxs('div', { className: 'mt-11 flex flex-wrap gap-4', children: [p.jsx(Yn, { label: 'Shop now', iconUrl: l0 }), p.jsx(Yn, { label: 'Learn more', backgroundColor: 'bg-white', borderColor: 'border-slate-gray', textColor: 'text-slate-gray' })] }),
          ],
        }),
      ],
    }),
  k1 = () => p.jsxs('section', { id: 'contact-us', className: 'max-container flex justify-between items-center max-lg:flex-col gap-10', children: [p.jsxs('h3', { className: 'text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold', children: ['Sign Up for', p.jsx('span', { className: 'text-coral-red', children: ' Updates ' }), '& Newsletter'] }), p.jsxs('div', { className: 'lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full', children: [p.jsx('input', { type: 'text', placeholder: 'subscribe@nike.com', className: 'input' }), p.jsx('div', { className: 'flex max-sm:justify-end items-center max-sm:w-full', children: p.jsx(Yn, { label: 'Sign Up', fullWidth: !0 }) })] })] }),
  S1 = () =>
    p.jsxs('section', {
      id: 'about-us',
      className: 'flex justify-between items-center max-lg:flex-col gap-10 w-full max-container',
      children: [
        p.jsxs('div', {
          className: 'flex flex-1 flex-col',
          children: [
            p.jsxs('h2', { className: 'font-palanquin text-4xl capitalize font-bold lg:max-w-lg', children: ['We Provide You', p.jsx('span', { className: 'text-coral-red ml-2', children: 'Super' }), p.jsx('br', {}), p.jsx('span', { className: 'text-coral-red', children: 'Quality' }), ' Shoes'] }),
            p.jsx('p', { className: 'mt-4 lg:max-w-lg info-text font-montserrat', children: 'Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.' }),
            p.jsx('p', { className: 'mt-6 lg:max-w-lg info-text', children: 'Our dedication to detail and excellence ensures your satisfaction' }),
            p.jsx('div', { className: 'mt-11', children: p.jsx(Yn, { label: 'View details' }) }),
          ],
        }),
        p.jsx('div', { className: 'flex-1 flex justify-center items-center', children: p.jsx('img', { src: bc, alt: 'shoe8', width: 570, height: 522, className: 'object-contain' }) }),
      ],
    }),
  E1 = () =>
    p.jsxs('main', {
      className: 'relative',
      children: [p.jsx(f1, {}), p.jsx('section', { className: 'xl:padding-l wide:padding-r padding-b', children: p.jsx(v1, {}) }), p.jsx('section', { className: 'padding', children: p.jsx(y1, {}) }), p.jsxs('section', { className: 'padding', children: [p.jsx(S1, {}), ' '] }), p.jsx('section', { className: 'padding-x py-10', children: p.jsx(x1, {}) }), p.jsx('section', { className: 'padding', children: p.jsx(C1, {}) }), p.jsx('section', { className: 'bg-pale-blue padding', children: p.jsx(p1, {}) }), p.jsx('section', { className: 'padding-x sm:py-32 py-16 w-full', children: p.jsx(k1, {}) }), p.jsx('section', { className: 'padding bg-black padding-x padding-t pb-8 text-white', children: p.jsx(m1, {}) })],
    });
Kl.createRoot(document.getElementById('root')).render(p.jsx(S0.StrictMode, { children: p.jsx(E1, {}) }));
