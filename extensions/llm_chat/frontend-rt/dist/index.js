var vo = Object.defineProperty;
var Cr = (e) => {
  throw TypeError(e);
};
var po = (e, t, n) => t in e ? vo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Pe = (e, t, n) => po(e, typeof t != "symbol" ? t + "" : t, n), Fs = (e, t, n) => t.has(e) || Cr("Cannot " + n);
var a = (e, t, n) => (Fs(e, t, "read from private field"), n ? n.call(e) : t.get(e)), C = (e, t, n) => t.has(e) ? Cr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), A = (e, t, n, s) => (Fs(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), H = (e, t, n) => (Fs(e, t, "access private method"), n);
var Yr = Array.isArray, ho = Array.prototype.indexOf, ps = Array.prototype.includes, ys = Array.from, go = Object.defineProperty, qn = Object.getOwnPropertyDescriptor, bo = Object.getOwnPropertyDescriptors, _o = Object.prototype, ko = Array.prototype, Gr = Object.getPrototypeOf, Mr = Object.isExtensible;
const mo = () => {
};
function wo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Wr() {
  var e, t, n = new Promise((s, r) => {
    e = s, t = r;
  });
  return { promise: n, resolve: e, reject: t };
}
const ve = 2, kn = 4, Es = 8, $r = 1 << 24, We = 16, Je = 32, Pt = 64, Ys = 128, He = 512, oe = 1024, de = 2048, it = 4096, ye = 8192, Ue = 16384, En = 32768, Gs = 1 << 25, mn = 65536, hs = 1 << 17, xo = 1 << 18, Sn = 1 << 19, yo = 1 << 20, nt = 1 << 25, Kt = 65536, gs = 1 << 21, un = 1 << 22, Mt = 1 << 23, os = Symbol("$state"), Eo = Symbol(""), as = Symbol("attributes"), Ws = Symbol("class"), $s = Symbol("style"), jn = Symbol("text"), ls = Symbol("form reset"), Ss = new class extends Error {
  constructor() {
    super(...arguments);
    Pe(this, "name", "StaleReactionError");
    Pe(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function So(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function To() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ao(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Co(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Mo() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Po(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Io() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function No() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Lo() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Do() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ro() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Oo = 1, zo = 2, Kr = 4, jo = 8, Fo = 16, Ho = 1, Uo = 2, ie = Symbol("uninitialized"), Jr = "http://www.w3.org/1999/xhtml", Vo = "http://www.w3.org/2000/svg", Bo = "http://www.w3.org/1998/Math/MathML";
function qo() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Yo() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Qr(e) {
  return e === this.v;
}
function Go(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Xr(e) {
  return !Go(e, this.v);
}
let be = null;
function wn(e) {
  be = e;
}
function Zr(e, t = !1, n) {
  be = {
    p: be,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      R
    ),
    l: null
  };
}
function ei(e) {
  var t = (
    /** @type {ComponentContext} */
    be
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var s of n)
      wi(s);
  }
  return t.i = !0, be = t.p, /** @type {T} */
  {};
}
function ti() {
  return !0;
}
let zt = [];
function ni() {
  var e = zt;
  zt = [], wo(e);
}
function Yt(e) {
  if (zt.length === 0 && !Yn) {
    var t = zt;
    queueMicrotask(() => {
      t === zt && ni();
    });
  }
  zt.push(e);
}
function Wo() {
  for (; zt.length > 0; )
    ni();
}
function si(e) {
  var t = R;
  if (t === null)
    return D.f |= Mt, e;
  if ((t.f & En) === 0 && (t.f & kn) === 0)
    throw e;
  Ct(e, t);
}
function Ct(e, t) {
  if (!(t !== null && (t.f & Ue) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & Ys) !== 0) {
        if ((t.f & En) === 0)
          throw e;
        try {
          t.b.error(e);
          return;
        } catch (n) {
          e = n;
        }
      }
      t = t.parent;
    }
    throw e;
  }
}
const $o = -7169;
function ee(e, t) {
  e.f = e.f & $o | t;
}
function or(e) {
  (e.f & He) !== 0 || e.deps === null ? ee(e, oe) : ee(e, it);
}
function ri(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ve) === 0 || (t.f & Kt) === 0 || (t.f ^= Kt, ri(
        /** @type {Derived} */
        t.deps
      ));
}
function ii(e, t, n) {
  (e.f & de) !== 0 ? t.add(e) : (e.f & it) !== 0 && n.add(e), ri(e.deps), ee(e, oe);
}
function Ko(e) {
  let t = 0, n = Qt(0), s;
  return () => {
    dr() && (o(n), vr(() => (t === 0 && (s = Ts(() => e(() => Gn(n)))), t += 1, () => {
      Yt(() => {
        t -= 1, t === 0 && (s?.(), s = void 0, Gn(n));
      });
    })));
  };
}
var Jo = mn | Sn;
function Qo(e, t, n, s) {
  new Xo(e, t, n, s);
}
var Oe, ir, ze, Ht, Se, je, xe, Ne, vt, Ut, Tt, dn, $n, Kn, pt, ms, X, Zo, ea, ta, Ks, cs, fs, Js, Qs;
class Xo {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, s, r) {
    C(this, X);
    /** @type {Boundary | null} */
    Pe(this, "parent");
    Pe(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Pe(this, "transform_error");
    /** @type {TemplateNode} */
    C(this, Oe);
    /** @type {TemplateNode | null} */
    C(this, ir, null);
    /** @type {BoundaryProps} */
    C(this, ze);
    /** @type {((anchor: Node) => void)} */
    C(this, Ht);
    /** @type {Effect} */
    C(this, Se);
    /** @type {Effect | null} */
    C(this, je, null);
    /** @type {Effect | null} */
    C(this, xe, null);
    /** @type {Effect | null} */
    C(this, Ne, null);
    /** @type {DocumentFragment | null} */
    C(this, vt, null);
    C(this, Ut, 0);
    C(this, Tt, 0);
    C(this, dn, !1);
    /** @type {Set<Effect>} */
    C(this, $n, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    C(this, Kn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    C(this, pt, null);
    C(this, ms, Ko(() => (A(this, pt, Qt(a(this, Ut))), () => {
      A(this, pt, null);
    })));
    A(this, Oe, t), A(this, ze, n), A(this, Ht, (i) => {
      var c = (
        /** @type {Effect} */
        R
      );
      c.b = this, c.f |= Ys, s(i);
    }), this.parent = /** @type {Effect} */
    R.b, this.transform_error = r ?? this.parent?.transform_error ?? ((i) => i), A(this, Se, pr(() => {
      H(this, X, Ks).call(this);
    }, Jo));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    ii(t, a(this, $n), a(this, Kn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!a(this, ze).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    H(this, X, Js).call(this, t, n), A(this, Ut, a(this, Ut) + t), !(!a(this, pt) || a(this, dn)) && (A(this, dn, !0), Yt(() => {
      A(this, dn, !1), a(this, pt) && xn(a(this, pt), a(this, Ut));
    }));
  }
  get_effect_pending() {
    return a(this, ms).call(this), o(
      /** @type {Source<number>} */
      a(this, pt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!a(this, ze).onerror && !a(this, ze).failed)
      throw t;
    I?.is_fork ? (a(this, je) && I.skip_effect(a(this, je)), a(this, xe) && I.skip_effect(a(this, xe)), a(this, Ne) && I.skip_effect(a(this, Ne)), I.oncommit(() => {
      H(this, X, Qs).call(this, t);
    })) : H(this, X, Qs).call(this, t);
  }
}
Oe = new WeakMap(), ir = new WeakMap(), ze = new WeakMap(), Ht = new WeakMap(), Se = new WeakMap(), je = new WeakMap(), xe = new WeakMap(), Ne = new WeakMap(), vt = new WeakMap(), Ut = new WeakMap(), Tt = new WeakMap(), dn = new WeakMap(), $n = new WeakMap(), Kn = new WeakMap(), pt = new WeakMap(), ms = new WeakMap(), X = new WeakSet(), Zo = function() {
  try {
    A(this, je, Fe(() => a(this, Ht).call(this, a(this, Oe))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
ea = function(t) {
  const n = a(this, ze).failed;
  n && A(this, Ne, Fe(() => {
    n(
      a(this, Oe),
      () => t,
      () => () => {
      }
    );
  }));
}, ta = function() {
  const t = a(this, ze).pending;
  t && (this.is_pending = !0, A(this, xe, Fe(() => t(a(this, Oe)))), Yt(() => {
    var n = A(this, vt, document.createDocumentFragment()), s = bt();
    n.append(s), A(this, je, H(this, X, fs).call(this, () => Fe(() => a(this, Ht).call(this, s)))), a(this, Tt) === 0 && (a(this, Oe).before(n), A(this, vt, null), Wt(
      /** @type {Effect} */
      a(this, xe),
      () => {
        A(this, xe, null);
      }
    ), H(this, X, cs).call(
      this,
      /** @type {Batch} */
      I
    ));
  }));
}, Ks = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), A(this, Tt, 0), A(this, Ut, 0), A(this, je, Fe(() => {
      a(this, Ht).call(this, a(this, Oe));
    })), a(this, Tt) > 0) {
      var t = A(this, vt, document.createDocumentFragment());
      gr(a(this, je), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        a(this, ze).pending
      );
      A(this, xe, Fe(() => n(a(this, Oe))));
    } else
      H(this, X, cs).call(
        this,
        /** @type {Batch} */
        I
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
cs = function(t) {
  this.is_pending = !1, t.transfer_effects(a(this, $n), a(this, Kn));
}, /**
 * @template T
 * @param {() => T} fn
 */
fs = function(t) {
  var n = R, s = D, r = be;
  ot(a(this, Se)), Ve(a(this, Se)), wn(a(this, Se).ctx);
  try {
    return Jt.ensure(), t();
  } catch (i) {
    return si(i), null;
  } finally {
    ot(n), Ve(s), wn(r);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Js = function(t, n) {
  var s;
  if (!this.has_pending_snippet()) {
    this.parent && H(s = this.parent, X, Js).call(s, t, n);
    return;
  }
  A(this, Tt, a(this, Tt) + t), a(this, Tt) === 0 && (H(this, X, cs).call(this, n), a(this, xe) && Wt(a(this, xe), () => {
    A(this, xe, null);
  }), a(this, vt) && (a(this, Oe).before(a(this, vt)), A(this, vt, null)));
}, /**
 * @param {unknown} error
 */
Qs = function(t) {
  a(this, je) && (Ce(a(this, je)), A(this, je, null)), a(this, xe) && (Ce(a(this, xe)), A(this, xe, null)), a(this, Ne) && (Ce(a(this, Ne)), A(this, Ne, null));
  var n = a(this, ze).onerror;
  let s = a(this, ze).failed;
  var r = !1, i = !1;
  const c = () => {
    if (r) {
      Yo();
      return;
    }
    r = !0, i && Ro(), a(this, Ne) !== null && Wt(a(this, Ne), () => {
      A(this, Ne, null);
    }), H(this, X, fs).call(this, () => {
      H(this, X, Ks).call(this);
    });
  }, f = (l) => {
    try {
      i = !0, n?.(l, c), i = !1;
    } catch (u) {
      Ct(u, a(this, Se) && a(this, Se).parent);
    }
    s && A(this, Ne, H(this, X, fs).call(this, () => {
      try {
        return Fe(() => {
          var u = (
            /** @type {Effect} */
            R
          );
          u.b = this, u.f |= Ys, s(
            a(this, Oe),
            () => l,
            () => c
          );
        });
      } catch (u) {
        return Ct(
          u,
          /** @type {Effect} */
          a(this, Se).parent
        ), null;
      }
    }));
  };
  Yt(() => {
    var l;
    try {
      l = this.transform_error(t);
    } catch (u) {
      Ct(u, a(this, Se) && a(this, Se).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      f,
      /** @param {unknown} e */
      (u) => Ct(u, a(this, Se) && a(this, Se).parent)
    ) : f(l);
  });
};
function na(e, t, n, s) {
  const r = ai;
  var i = e.filter((h) => !h.settled), c = t.map(r);
  if (n.length === 0 && i.length === 0) {
    s(c);
    return;
  }
  var f = (
    /** @type {Effect} */
    R
  ), l = sa(), u = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((h) => h.promise)) : null;
  function p(h) {
    if ((f.f & Ue) === 0) {
      l();
      try {
        s([...c, ...h]);
      } catch (k) {
        Ct(k, f);
      }
      bs();
    }
  }
  var _ = oi();
  if (n.length === 0) {
    u.then(() => p([])).finally(_);
    return;
  }
  function d() {
    Promise.all(n.map((h) => /* @__PURE__ */ ra(h))).then(p).catch((h) => Ct(h, f)).finally(_);
  }
  u ? u.then(() => {
    l(), d(), bs();
  }) : d();
}
function sa() {
  var e = (
    /** @type {Effect} */
    R
  ), t = D, n = be, s = (
    /** @type {Batch} */
    I
  );
  return function(i = !0) {
    ot(e), Ve(t), wn(n), i && (e.f & Ue) === 0 && (s?.activate(), s?.apply());
  };
}
function bs(e = !0) {
  ot(null), Ve(null), wn(null), e && I?.deactivate();
}
function oi() {
  var e = (
    /** @type {Effect} */
    R
  ), t = e.b, n = (
    /** @type {Batch} */
    I
  ), s = !!t?.is_rendered();
  return t?.update_pending_count(1, n), n.increment(s, e), () => {
    t?.update_pending_count(-1, n), n.decrement(s, e);
  };
}
// @__NO_SIDE_EFFECTS__
function ai(e) {
  var t = ve | de;
  return R !== null && (R.f |= Sn), {
    ctx: be,
    deps: null,
    effects: null,
    equals: Qr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ie
    ),
    wv: 0,
    parent: R,
    ac: null
  };
}
const Fn = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function ra(e, t, n) {
  let s = (
    /** @type {Effect | null} */
    R
  );
  s === null && To();
  var r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Qt(
    /** @type {V} */
    ie
  ), c = !D, f = /* @__PURE__ */ new Set();
  return xa(() => {
    var l = (
      /** @type {Effect} */
      R
    ), u = Wr();
    r = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, (h) => {
        h !== Ss && u.reject(h);
      }).finally(bs);
    } catch (h) {
      u.reject(h), bs();
    }
    var p = (
      /** @type {Batch} */
      I
    );
    if (c) {
      if ((l.f & En) !== 0)
        var _ = oi();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        s.b?.is_rendered()
      )
        p.async_deriveds.get(l)?.reject(Fn);
      else
        for (const h of f.values())
          h.reject(Fn);
      f.add(u), p.async_deriveds.set(l, u);
    }
    const d = (h, k = void 0) => {
      _?.(), f.delete(u), k !== Fn && (p.activate(), k ? (i.f |= Mt, xn(i, k)) : ((i.f & Mt) !== 0 && (i.f ^= Mt), xn(i, h)), p.deactivate());
    };
    u.promise.then(d, (h) => d(null, h || "unknown"));
  }), ma(() => {
    for (const l of f)
      l.reject(Fn);
  }), new Promise((l) => {
    function u(p) {
      function _() {
        p === r ? l(i) : u(r);
      }
      p.then(_, _);
    }
    u(r);
  });
}
// @__NO_SIDE_EFFECTS__
function ia(e) {
  const t = /* @__PURE__ */ ai(e);
  return t.equals = Xr, t;
}
function oa(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Ce(
        /** @type {Effect} */
        t[n]
      );
  }
}
function ar(e) {
  var t, n = R, s = e.parent;
  if (!It && s !== null && e.v !== ie && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (s.f & (Ue | ye)) !== 0)
    return qo(), e.v;
  ot(s);
  try {
    e.f &= ~Kt, oa(e), t = Ii(e);
  } finally {
    ot(n);
  }
  return t;
}
function li(e) {
  var t = ar(e);
  if (!e.equals(t) && (e.wv = Mi(), (!I?.is_fork || e.deps === null) && (I !== null ? (I.capture(e, t, !0), Xs?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    ee(e, oe);
    return;
  }
  It || ($e !== null ? (dr() || I?.is_fork) && $e.set(e, t) : or(e));
}
function aa(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Ss), t.fn !== null && (t.teardown = mo), t.ac = null, Wn(t, 0), hr(t));
}
function ci(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && yn(t);
}
let Hs = null, nn = null, I = null, Xs = null, $e = null, Zs = null, Yn = !1, Us = !1, fn = null, us = null;
var Pr = 0;
let la = 1;
var vn, At, Vt, pn, hn, gn, ht, bn, Te, Jn, gt, qe, et, _n, Bt, V, er, Hn, tr, fi, ui, cn, ca, Un;
const ws = class ws {
  constructor() {
    C(this, V);
    Pe(this, "id", la++);
    /** True as soon as `#process` was called */
    C(this, vn, !1);
    Pe(this, "linked", !0);
    /** @type {Batch | null} */
    C(this, At, null);
    /** @type {Batch | null} */
    C(this, Vt, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    Pe(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Pe(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Pe(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    C(this, pn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    C(this, hn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    C(this, gn, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    C(this, ht, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    C(this, bn, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    C(this, Te, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    C(this, Jn, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    C(this, gt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    C(this, qe, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    C(this, et, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    C(this, _n, /* @__PURE__ */ new Set());
    Pe(this, "is_fork", !1);
    C(this, Bt, !1);
    nn === null ? Hs = nn = this : (A(nn, Vt, this), A(this, At, nn)), nn = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    a(this, et).has(t) || a(this, et).set(t, { d: [], m: [] }), a(this, _n).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (s) => this.schedule(s)) {
    var s = a(this, et).get(t);
    if (s) {
      a(this, et).delete(t);
      for (var r of s.d)
        ee(r, de), n(r);
      for (r of s.m)
        ee(r, it), n(r);
    }
    a(this, _n).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, s = !1) {
    t.v !== ie && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Mt) === 0 && (this.current.set(t, [n, s]), $e?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    I = this;
  }
  deactivate() {
    I = null, $e = null;
  }
  flush() {
    try {
      Us = !0, I = this, H(this, V, Hn).call(this);
    } finally {
      Pr = 0, Zs = null, fn = null, us = null, Us = !1, I = null, $e = null, Gt.clear();
    }
  }
  discard() {
    for (const t of a(this, hn)) t(this);
    a(this, hn).clear();
    for (const t of this.async_deriveds.values())
      t.reject(Fn);
    H(this, V, Un).call(this), a(this, bn)?.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    a(this, Jn).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    if (A(this, gn, a(this, gn) + 1), t) {
      let s = a(this, ht).get(n) ?? 0;
      a(this, ht).set(n, s + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, n) {
    if (A(this, gn, a(this, gn) - 1), t) {
      let s = a(this, ht).get(n) ?? 0;
      s === 1 ? a(this, ht).delete(n) : a(this, ht).set(n, s - 1);
    }
    a(this, Bt) || (A(this, Bt, !0), Yt(() => {
      A(this, Bt, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const s of t)
      a(this, gt).add(s);
    for (const s of n)
      a(this, qe).add(s);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    a(this, pn).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    a(this, hn).add(t);
  }
  settled() {
    return (a(this, bn) ?? A(this, bn, Wr())).promise;
  }
  static ensure() {
    if (I === null) {
      const t = I = new ws();
      !Us && !Yn && Yt(() => {
        a(t, vn) || t.flush();
      });
    }
    return I;
  }
  apply() {
    {
      $e = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Zs = t, t.b?.is_pending && (t.f & (kn | Es | $r)) !== 0 && (t.f & En) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var s = n.f;
      if (fn !== null && n === R && (D === null || (D.f & ve) === 0))
        return;
      if ((s & (Pt | Je)) !== 0) {
        if ((s & oe) === 0)
          return;
        n.f ^= oe;
      }
    }
    a(this, Te).push(n);
  }
};
vn = new WeakMap(), At = new WeakMap(), Vt = new WeakMap(), pn = new WeakMap(), hn = new WeakMap(), gn = new WeakMap(), ht = new WeakMap(), bn = new WeakMap(), Te = new WeakMap(), Jn = new WeakMap(), gt = new WeakMap(), qe = new WeakMap(), et = new WeakMap(), _n = new WeakMap(), Bt = new WeakMap(), V = new WeakSet(), er = function() {
  if (this.is_fork) return !0;
  for (const s of a(this, ht).keys()) {
    for (var t = s, n = !1; t.parent !== null; ) {
      if (a(this, et).has(t)) {
        n = !0;
        break;
      }
      t = t.parent;
    }
    if (!n)
      return !0;
  }
  return !1;
}, Hn = function() {
  var l, u, p;
  A(this, vn, !0), Pr++ > 1e3 && (H(this, V, Un).call(this), ua());
  for (const _ of a(this, gt))
    a(this, qe).delete(_), ee(_, de), this.schedule(_);
  for (const _ of a(this, qe))
    ee(_, it), this.schedule(_);
  const t = a(this, Te);
  A(this, Te, []), this.apply();
  var n = fn = [], s = [], r = us = [];
  for (const _ of t)
    try {
      H(this, V, tr).call(this, _, n, s);
    } catch (d) {
      throw pi(_), H(this, V, er).call(this) || this.discard(), d;
    }
  if (I = null, r.length > 0) {
    var i = ws.ensure();
    for (const _ of r)
      i.schedule(_);
  }
  if (fn = null, us = null, H(this, V, er).call(this)) {
    H(this, V, cn).call(this, s), H(this, V, cn).call(this, n);
    for (const [_, d] of a(this, et))
      vi(_, d);
    r.length > 0 && /** @type {unknown} */
    H(l = I, V, Hn).call(l);
    return;
  }
  const c = H(this, V, fi).call(this);
  if (c) {
    H(this, V, cn).call(this, s), H(this, V, cn).call(this, n), H(u = c, V, ui).call(u, this);
    return;
  }
  a(this, gt).clear(), a(this, qe).clear();
  for (const _ of a(this, pn)) _(this);
  a(this, pn).clear(), Xs = this, Ir(s), Ir(n), Xs = null, a(this, bn)?.resolve();
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    I
  );
  if (a(this, gn) === 0 && (a(this, Te).length === 0 || f !== null) && H(this, V, Un).call(this), a(this, Te).length > 0)
    if (f !== null) {
      const _ = f;
      a(_, Te).push(...a(this, Te).filter((d) => !a(_, Te).includes(d)));
    } else
      f = this;
  f !== null && H(p = f, V, Hn).call(p);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
tr = function(t, n, s) {
  t.f ^= oe;
  for (var r = t.first; r !== null; ) {
    var i = r.f, c = (i & (Je | Pt)) !== 0, f = c && (i & oe) !== 0, l = f || (i & ye) !== 0 || a(this, et).has(r);
    if (!l && r.fn !== null) {
      c ? r.f ^= oe : (i & kn) !== 0 ? n.push(r) : es(r) && ((i & We) !== 0 && a(this, qe).add(r), yn(r));
      var u = r.first;
      if (u !== null) {
        r = u;
        continue;
      }
    }
    for (; r !== null; ) {
      var p = r.next;
      if (p !== null) {
        r = p;
        break;
      }
      r = r.parent;
    }
  }
}, fi = function() {
  for (var t = a(this, At); t !== null; ) {
    if (!t.is_fork) {
      for (const [n, [, s]] of this.current)
        if (t.current.has(n) && !s)
          return t;
    }
    t = a(t, At);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
ui = function(t) {
  var s;
  for (const [r, i] of t.current)
    !this.previous.has(r) && t.previous.has(r) && this.previous.set(r, t.previous.get(r)), this.current.set(r, i);
  for (const [r, i] of t.async_deriveds) {
    const c = this.async_deriveds.get(r);
    c && i.promise.then(c.resolve).catch(c.reject);
  }
  t.async_deriveds.clear(), this.transfer_effects(a(t, gt), a(t, qe));
  const n = (r) => {
    var i = r.reactions;
    if (i !== null)
      for (const l of i) {
        var c = l.f;
        if ((c & ve) !== 0)
          n(
            /** @type {Derived} */
            l
          );
        else {
          var f = (
            /** @type {Effect} */
            l
          );
          c & (un | We) && !this.async_deriveds.has(f) && (a(this, qe).delete(f), ee(f, de), this.schedule(f));
        }
      }
  };
  for (const r of this.current.keys())
    n(r);
  this.oncommit(() => t.discard()), H(s = t, V, Un).call(s), I = this, H(this, V, Hn).call(this);
}, /**
 * @param {Effect[]} effects
 */
cn = function(t) {
  for (var n = 0; n < t.length; n += 1)
    ii(t[n], a(this, gt), a(this, qe));
}, ca = function() {
  var _;
  for (let d = Hs; d !== null; d = a(d, Vt)) {
    var t = d.id < this.id, n = [];
    for (const [h, [k, T]] of this.current) {
      if (d.current.has(h)) {
        var s = (
          /** @type {[any, boolean]} */
          d.current.get(h)[0]
        );
        if (t && k !== s)
          d.current.set(h, [k, T]);
        else
          continue;
      }
      n.push(h);
    }
    if (t)
      for (const [h, k] of this.async_deriveds) {
        const T = d.async_deriveds.get(h);
        T && k.promise.then(T.resolve).catch(T.reject);
      }
    var r = [...d.current.keys()].filter(
      (h) => !/** @type {[any, boolean]} */
      d.current.get(h)[1]
    );
    if (!(!a(d, vn) || r.length === 0)) {
      var i = r.filter((h) => !this.current.has(h));
      if (i.length === 0)
        t && d.discard();
      else if (n.length > 0) {
        if (t)
          for (const h of a(this, _n))
            d.unskip_effect(h, (k) => {
              var T;
              (k.f & (We | un)) !== 0 ? d.schedule(k) : H(T = d, V, cn).call(T, [k]);
            });
        d.activate();
        var c = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
        for (var l of n)
          di(l, i, c, f);
        f = /* @__PURE__ */ new Map();
        var u = [...d.current].filter(([h, k]) => {
          const T = this.current.get(h);
          return T ? T[0] !== k[0] || T[1] !== k[1] : !0;
        }).map(([h]) => h);
        if (u.length > 0)
          for (const h of a(this, Jn))
            (h.f & (Ue | ye | hs)) === 0 && lr(h, u, f) && ((h.f & (un | We)) !== 0 ? (ee(h, de), d.schedule(h)) : a(d, gt).add(h));
        if (a(d, Te).length > 0 && !a(d, Bt)) {
          d.apply();
          for (var p of a(d, Te))
            H(_ = d, V, tr).call(_, p, [], []);
          A(d, Te, []);
        }
        d.deactivate();
      }
    }
  }
}, Un = function() {
  if (this.linked) {
    var t = a(this, At), n = a(this, Vt);
    t === null ? Hs = n : A(t, Vt, n), n === null ? nn = t : A(n, At, t), this.linked = !1;
  }
};
let Jt = ws;
function fa(e) {
  var t = Yn;
  Yn = !0;
  try {
    for (var n; ; ) {
      if (Wo(), I === null)
        return (
          /** @type {T} */
          n
        );
      I.flush();
    }
  } finally {
    Yn = t;
  }
}
function ua() {
  try {
    Io();
  } catch (e) {
    Ct(e, Zs);
  }
}
let dt = null;
function Ir(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var s = e[n++];
      if ((s.f & (Ue | ye)) === 0 && es(s) && (dt = /* @__PURE__ */ new Set(), yn(s), s.deps === null && s.first === null && s.nodes === null && s.teardown === null && s.ac === null && Si(s), dt?.size > 0)) {
        Gt.clear();
        for (const r of dt) {
          if ((r.f & (Ue | ye)) !== 0) continue;
          const i = [r];
          let c = r.parent;
          for (; c !== null; )
            dt.has(c) && (dt.delete(c), i.push(c)), c = c.parent;
          for (let f = i.length - 1; f >= 0; f--) {
            const l = i[f];
            (l.f & (Ue | ye)) === 0 && yn(l);
          }
        }
        dt.clear();
      }
    }
    dt = null;
  }
}
function di(e, t, n, s) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const r of e.reactions) {
      const i = r.f;
      (i & ve) !== 0 ? di(
        /** @type {Derived} */
        r,
        t,
        n,
        s
      ) : (i & (un | We)) !== 0 && (i & de) === 0 && lr(r, t, s) && (ee(r, de), cr(
        /** @type {Effect} */
        r
      ));
    }
}
function lr(e, t, n) {
  const s = n.get(e);
  if (s !== void 0) return s;
  if (e.deps !== null)
    for (const r of e.deps) {
      if (ps.call(t, r))
        return !0;
      if ((r.f & ve) !== 0 && lr(
        /** @type {Derived} */
        r,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          r,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function cr(e) {
  I.schedule(e);
}
function vi(e, t) {
  if (!((e.f & Je) !== 0 && (e.f & oe) !== 0)) {
    (e.f & de) !== 0 ? t.d.push(e) : (e.f & it) !== 0 && t.m.push(e), ee(e, oe);
    for (var n = e.first; n !== null; )
      vi(n, t), n = n.next;
  }
}
function pi(e) {
  ee(e, oe);
  for (var t = e.first; t !== null; )
    pi(t), t = t.next;
}
let _s = /* @__PURE__ */ new Set();
const Gt = /* @__PURE__ */ new Map();
let hi = !1;
function Qt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Qr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function M(e, t) {
  const n = Qt(e);
  return Ea(n), n;
}
// @__NO_SIDE_EFFECTS__
function da(e, t = !1, n = !0) {
  const s = Qt(e);
  return t || (s.equals = Xr), s;
}
function g(e, t, n = !1) {
  D !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ke || (D.f & hs) !== 0) && ti() && (D.f & (ve | We | un | hs)) !== 0 && (rt === null || !rt.has(e)) && Do();
  let s = n ? Ge(t) : t;
  return xn(e, s, us);
}
function xn(e, t, n = null) {
  if (!e.equals(t)) {
    Gt.set(e, It ? t : e.v);
    var s = Jt.ensure();
    if (s.capture(e, t), (e.f & ve) !== 0) {
      const r = (
        /** @type {Derived} */
        e
      );
      (e.f & de) !== 0 && ar(r), $e === null && or(r);
    }
    e.wv = Mi(), gi(e, de, n), R !== null && (R.f & oe) !== 0 && (R.f & (Je | Pt)) === 0 && (Re === null ? Sa([e]) : Re.push(e)), !s.is_fork && _s.size > 0 && !hi && va();
  }
  return t;
}
function va() {
  hi = !1;
  for (const e of _s) {
    (e.f & oe) !== 0 && ee(e, it);
    let t;
    try {
      t = es(e);
    } catch {
      t = !0;
    }
    t && yn(e);
  }
  _s.clear();
}
function Gn(e) {
  g(e, e.v + 1);
}
function gi(e, t, n) {
  var s = e.reactions;
  if (s !== null)
    for (var r = s.length, i = 0; i < r; i++) {
      var c = s[i], f = c.f, l = (f & de) === 0;
      if (l && ee(c, t), (f & hs) !== 0)
        _s.add(
          /** @type {Effect} */
          c
        );
      else if ((f & ve) !== 0) {
        var u = (
          /** @type {Derived} */
          c
        );
        $e?.delete(u), (f & Kt) === 0 && (f & He && (R === null || (R.f & gs) === 0) && (c.f |= Kt), gi(u, it, n));
      } else if (l) {
        var p = (
          /** @type {Effect} */
          c
        );
        (f & We) !== 0 && dt !== null && dt.add(p), n !== null ? n.push(p) : cr(p);
      }
    }
}
function Ge(e) {
  if (typeof e != "object" || e === null || os in e)
    return e;
  const t = Gr(e);
  if (t !== _o && t !== ko)
    return e;
  var n = /* @__PURE__ */ new Map(), s = Yr(e), r = /* @__PURE__ */ M(0), i = $t, c = (f) => {
    if ($t === i)
      return f();
    var l = D, u = $t;
    Ve(null), Rr(i);
    var p = f();
    return Ve(l), Rr(u), p;
  };
  return s && n.set("length", /* @__PURE__ */ M(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && No();
        var p = n.get(l);
        return p === void 0 ? c(() => {
          var _ = /* @__PURE__ */ M(u.value);
          return n.set(l, _), _;
        }) : g(p, u.value, !0), !0;
      },
      deleteProperty(f, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in f) {
            const p = c(() => /* @__PURE__ */ M(ie));
            n.set(l, p), Gn(r);
          }
        } else
          g(u, ie), Gn(r);
        return !0;
      },
      get(f, l, u) {
        if (l === os)
          return e;
        var p = n.get(l), _ = l in f;
        if (p === void 0 && (!_ || qn(f, l)?.writable) && (p = c(() => {
          var h = Ge(_ ? f[l] : ie), k = /* @__PURE__ */ M(h);
          return k;
        }), n.set(l, p)), p !== void 0) {
          var d = o(p);
          return d === ie ? void 0 : d;
        }
        return Reflect.get(f, l, u);
      },
      getOwnPropertyDescriptor(f, l) {
        var u = Reflect.getOwnPropertyDescriptor(f, l);
        if (u && "value" in u) {
          var p = n.get(l);
          p && (u.value = o(p));
        } else if (u === void 0) {
          var _ = n.get(l), d = _?.v;
          if (_ !== void 0 && d !== ie)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return u;
      },
      has(f, l) {
        if (l === os)
          return !0;
        var u = n.get(l), p = u !== void 0 && u.v !== ie || Reflect.has(f, l);
        if (u !== void 0 || R !== null && (!p || qn(f, l)?.writable)) {
          u === void 0 && (u = c(() => {
            var d = p ? Ge(f[l]) : ie, h = /* @__PURE__ */ M(d);
            return h;
          }), n.set(l, u));
          var _ = o(u);
          if (_ === ie)
            return !1;
        }
        return p;
      },
      set(f, l, u, p) {
        var _ = n.get(l), d = l in f;
        if (s && l === "length")
          for (var h = u; h < /** @type {Source<number>} */
          _.v; h += 1) {
            var k = n.get(h + "");
            k !== void 0 ? g(k, ie) : h in f && (k = c(() => /* @__PURE__ */ M(ie)), n.set(h + "", k));
          }
        if (_ === void 0)
          (!d || qn(f, l)?.writable) && (_ = c(() => /* @__PURE__ */ M(void 0)), g(_, Ge(u)), n.set(l, _));
        else {
          d = _.v !== ie;
          var T = c(() => Ge(u));
          g(_, T);
        }
        var m = Reflect.getOwnPropertyDescriptor(f, l);
        if (m?.set && m.set.call(p, u), !d) {
          if (s && typeof l == "string") {
            var O = (
              /** @type {Source<number>} */
              n.get("length")
            ), te = Number(l);
            Number.isInteger(te) && te >= O.v && g(O, te + 1);
          }
          Gn(r);
        }
        return !0;
      },
      ownKeys(f) {
        o(r);
        var l = Reflect.ownKeys(f).filter((_) => {
          var d = n.get(_);
          return d === void 0 || d.v !== ie;
        });
        for (var [u, p] of n)
          p.v !== ie && !(u in f) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Lo();
      }
    }
  );
}
var Nr, bi, _i, ki;
function pa() {
  if (Nr === void 0) {
    Nr = window, bi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    _i = qn(t, "firstChild").get, ki = qn(t, "nextSibling").get, Mr(e) && (e[Ws] = void 0, e[as] = null, e[$s] = void 0, e.__e = void 0), Mr(n) && (n[jn] = void 0);
  }
}
function bt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function st(e) {
  return (
    /** @type {TemplateNode | null} */
    _i.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Zn(e) {
  return (
    /** @type {TemplateNode | null} */
    ki.call(e)
  );
}
function y(e, t) {
  return /* @__PURE__ */ st(e);
}
function Ot(e, t = !1) {
  {
    var n = /* @__PURE__ */ st(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Zn(n) : n;
  }
}
function P(e, t = 1, n = !1) {
  let s = e;
  for (; t--; )
    s = /** @type {TemplateNode} */
    /* @__PURE__ */ Zn(s);
  return s;
}
function ha(e) {
  e.textContent = "";
}
function mi() {
  return !1;
}
function fr(e, t, n) {
  return t == null || t === Jr ? (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElement(e)
  ) : (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(t, e)
  );
}
let Lr = !1;
function ga() {
  Lr || (Lr = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t[ls]?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function ur(e) {
  var t = D, n = R;
  Ve(null), ot(null);
  try {
    return e();
  } finally {
    Ve(t), ot(n);
  }
}
function ba(e, t, n, s = n) {
  e.addEventListener(t, () => ur(n));
  const r = (
    /** @type {any} */
    e[ls]
  );
  r ? e[ls] = () => {
    r(), s(!0);
  } : e[ls] = () => s(!0), ga();
}
function _a(e) {
  R === null && (D === null && Po(), Mo()), It && Co();
}
function ka(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function _t(e, t) {
  var n = R;
  n !== null && (n.f & ye) !== 0 && (e |= ye);
  var s = {
    ctx: be,
    deps: null,
    nodes: null,
    f: e | de | He,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  I?.register_created_effect(s);
  var r = s;
  if ((e & kn) !== 0)
    fn !== null ? fn.push(s) : Jt.ensure().schedule(s);
  else if (t !== null) {
    try {
      yn(s);
    } catch (c) {
      throw Ce(s), c;
    }
    r.deps === null && r.teardown === null && r.nodes === null && r.first === r.last && // either `null`, or a singular child
    (r.f & Sn) === 0 && (r = r.first, (e & We) !== 0 && (e & mn) !== 0 && r !== null && (r.f |= mn));
  }
  if (r !== null && (r.parent = n, n !== null && ka(r, n), D !== null && (D.f & ve) !== 0 && (e & Pt) === 0)) {
    var i = (
      /** @type {Derived} */
      D
    );
    (i.effects ?? (i.effects = [])).push(r);
  }
  return s;
}
function dr() {
  return D !== null && !Ke;
}
function ma(e) {
  const t = _t(Es, null);
  return ee(t, oe), t.teardown = e, t;
}
function ds(e) {
  _a();
  var t = (
    /** @type {Effect} */
    R.f
  ), n = !D && (t & Je) !== 0 && be !== null && !be.i;
  if (n) {
    var s = (
      /** @type {ComponentContext} */
      be
    );
    (s.e ?? (s.e = [])).push(e);
  } else
    return wi(e);
}
function wi(e) {
  return _t(kn | yo, e);
}
function wa(e) {
  Jt.ensure();
  const t = _t(Pt | Sn, e);
  return (n = {}) => new Promise((s) => {
    n.outro ? Wt(t, () => {
      Ce(t), s(void 0);
    }) : (Ce(t), s(void 0));
  });
}
function xi(e) {
  return _t(kn, e);
}
function xa(e) {
  return _t(un | Sn, e);
}
function vr(e, t = 0) {
  return _t(Es | t, e);
}
function ge(e, t = [], n = [], s = []) {
  na(s, t, n, (r) => {
    _t(Es, () => {
      e(...r.map(o));
    });
  });
}
function pr(e, t = 0) {
  var n = _t(We | t, e);
  return n;
}
function Fe(e) {
  return _t(Je | Sn, e);
}
function yi(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = It, s = D;
    Dr(!0), Ve(null);
    try {
      t.call(null);
    } finally {
      Dr(n), Ve(s);
    }
  }
}
function hr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const r = n.ac;
    r !== null && ur(() => {
      r.abort(Ss);
    });
    var s = n.next;
    (n.f & Pt) !== 0 ? n.parent = null : Ce(n, t), n = s;
  }
}
function ya(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Je) === 0 && Ce(t), t = n;
  }
}
function Ce(e, t = !0) {
  var n = !1;
  (t || (e.f & xo) !== 0) && e.nodes !== null && e.nodes.end !== null && (Ei(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), e.f |= Gs, hr(e, t && !n), Wn(e, 0);
  var s = e.nodes && e.nodes.t;
  if (s !== null)
    for (const i of s)
      i.stop();
  yi(e), e.f ^= Gs, e.f |= Ue;
  var r = e.parent;
  r !== null && r.first !== null && Si(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Ei(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Zn(e);
    e.remove(), e = n;
  }
}
function Si(e) {
  var t = e.parent, n = e.prev, s = e.next;
  n !== null && (n.next = s), s !== null && (s.prev = n), t !== null && (t.first === e && (t.first = s), t.last === e && (t.last = n));
}
function Wt(e, t, n = !0) {
  var s = [];
  Ti(e, s, !0);
  var r = () => {
    n && Ce(e), t && t();
  }, i = s.length;
  if (i > 0) {
    var c = () => --i || r();
    for (var f of s)
      f.out(c);
  } else
    r();
}
function Ti(e, t, n) {
  if ((e.f & ye) === 0) {
    e.f ^= ye;
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const f of s)
        (f.is_global || n) && t.push(f);
    for (var r = e.first; r !== null; ) {
      var i = r.next;
      if ((r.f & Pt) === 0) {
        var c = (r.f & mn) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (r.f & Je) !== 0 && (e.f & We) !== 0;
        Ti(r, t, c ? n : !1);
      }
      r = i;
    }
  }
}
function ks(e) {
  Ai(e, !0);
}
function Ai(e, t) {
  if ((e.f & ye) !== 0) {
    e.f ^= ye, (e.f & oe) === 0 && (ee(e, de), Jt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var s = n.next, r = (n.f & mn) !== 0 || (n.f & Je) !== 0;
      Ai(n, r ? t : !1), n = s;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const c of i)
        (c.is_global || t) && c.in();
  }
}
function gr(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, s = e.nodes.end; n !== null; ) {
      var r = n === s ? null : /* @__PURE__ */ Zn(n);
      t.append(n), n = r;
    }
}
let vs = !1, It = !1;
function Dr(e) {
  It = e;
}
let D = null, Ke = !1;
function Ve(e) {
  D = e;
}
let R = null;
function ot(e) {
  R = e;
}
let rt = null;
function Ea(e) {
  D !== null && (rt ?? (rt = /* @__PURE__ */ new Set())).add(e);
}
let Ae = null, Ie = 0, Re = null;
function Sa(e) {
  Re = e;
}
let Ci = 1, jt = 0, $t = jt;
function Rr(e) {
  $t = e;
}
function Mi() {
  return ++Ci;
}
function es(e) {
  var t = e.f;
  if ((t & de) !== 0)
    return !0;
  if (t & ve && (e.f &= ~Kt), (t & it) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), s = n.length, r = 0; r < s; r++) {
      var i = n[r];
      if (es(
        /** @type {Derived} */
        i
      ) && li(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & He) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    $e === null && ee(e, oe);
  }
  return !1;
}
function Pi(e, t, n = !0) {
  var s = e.reactions;
  if (s !== null && !(rt !== null && rt.has(e)))
    for (var r = 0; r < s.length; r++) {
      var i = s[r];
      (i.f & ve) !== 0 ? Pi(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? ee(i, de) : (i.f & oe) !== 0 && ee(i, it), cr(
        /** @type {Effect} */
        i
      ));
    }
}
function Ii(e) {
  var T;
  var t = Ae, n = Ie, s = Re, r = D, i = rt, c = be, f = Ke, l = $t, u = e.f;
  Ae = /** @type {null | Value[]} */
  null, Ie = 0, Re = null, D = (u & (Je | Pt)) === 0 ? e : null, rt = null, wn(e.ctx), Ke = !1, $t = ++jt, e.ac !== null && (ur(() => {
    e.ac.abort(Ss);
  }), e.ac = null);
  try {
    e.f |= gs;
    var p = (
      /** @type {Function} */
      e.fn
    ), _ = p();
    e.f |= En;
    var d = e.deps, h = I?.is_fork;
    if (Ae !== null) {
      var k;
      if (h || Wn(e, Ie), d !== null && Ie > 0)
        for (d.length = Ie + Ae.length, k = 0; k < Ae.length; k++)
          d[Ie + k] = Ae[k];
      else
        e.deps = d = Ae;
      if (dr() && (e.f & He) !== 0)
        for (k = Ie; k < d.length; k++)
          ((T = d[k]).reactions ?? (T.reactions = [])).push(e);
    } else !h && d !== null && Ie < d.length && (Wn(e, Ie), d.length = Ie);
    if (ti() && Re !== null && !Ke && d !== null && (e.f & (ve | it | de)) === 0)
      for (k = 0; k < /** @type {Source[]} */
      Re.length; k++)
        Pi(
          Re[k],
          /** @type {Effect} */
          e
        );
    if (r !== null && r !== e) {
      if (jt++, r.deps !== null)
        for (let m = 0; m < n; m += 1)
          r.deps[m].rv = jt;
      if (t !== null)
        for (const m of t)
          m.rv = jt;
      Re !== null && (s === null ? s = Re : s.push(.../** @type {Source[]} */
      Re));
    }
    return (e.f & Mt) !== 0 && (e.f ^= Mt), _;
  } catch (m) {
    return si(m);
  } finally {
    e.f ^= gs, Ae = t, Ie = n, Re = s, D = r, rt = i, wn(c), Ke = f, $t = l;
  }
}
function Ta(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var s = ho.call(n, e);
    if (s !== -1) {
      var r = n.length - 1;
      r === 0 ? n = t.reactions = null : (n[s] = n[r], n.pop());
    }
  }
  if (n === null && (t.f & ve) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ae === null || !ps.call(Ae, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & He) !== 0 && (i.f ^= He, i.f &= ~Kt), i.v !== ie && or(i), aa(i), Wn(i, 0);
  }
}
function Wn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var s = t; s < n.length; s++)
      Ta(e, n[s]);
}
function yn(e) {
  var t = e.f;
  if ((t & Ue) === 0) {
    ee(e, oe);
    var n = R, s = vs;
    R = e, vs = !0;
    try {
      (t & (We | $r)) !== 0 ? ya(e) : hr(e), yi(e);
      var r = Ii(e);
      e.teardown = typeof r == "function" ? r : null, e.wv = Ci;
      var i;
    } finally {
      vs = s, R = n;
    }
  }
}
async function Vn() {
  await Promise.resolve(), fa();
}
function o(e) {
  var t = e.f, n = (t & ve) !== 0;
  if (D !== null && !Ke) {
    var s = R !== null && (R.f & Ue) !== 0;
    if (!s && (rt === null || !rt.has(e))) {
      var r = D.deps;
      if ((D.f & gs) !== 0)
        e.rv < jt && (e.rv = jt, Ae === null && r !== null && r[Ie] === e ? Ie++ : Ae === null ? Ae = [e] : Ae.push(e));
      else {
        D.deps ?? (D.deps = []), ps.call(D.deps, e) || D.deps.push(e);
        var i = e.reactions;
        i === null ? e.reactions = [D] : ps.call(i, D) || i.push(D);
      }
    }
  }
  if (It && Gt.has(e))
    return Gt.get(e);
  if (n) {
    var c = (
      /** @type {Derived} */
      e
    );
    if (It) {
      var f = c.v;
      return ((c.f & oe) === 0 && c.reactions !== null || Li(c)) && (f = ar(c)), Gt.set(c, f), f;
    }
    var l = (c.f & He) === 0 && !Ke && D !== null && (vs || (D.f & He) !== 0), u = (c.f & En) === 0;
    es(c) && (l && (c.f |= He), li(c)), l && !u && (ci(c), Ni(c));
  }
  if ($e?.has(e))
    return $e.get(e);
  if ((e.f & Mt) !== 0)
    throw e.v;
  return e.v;
}
function Ni(e) {
  if (e.f |= He, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ve) !== 0 && (t.f & He) === 0 && (ci(
        /** @type {Derived} */
        t
      ), Ni(
        /** @type {Derived} */
        t
      ));
}
function Li(e) {
  if (e.v === ie) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Gt.has(t) || (t.f & ve) !== 0 && Li(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Ts(e) {
  var t = Ke;
  try {
    return Ke = !0, e();
  } finally {
    Ke = t;
  }
}
const Aa = ["touchstart", "touchmove"];
function Ca(e) {
  return Aa.includes(e);
}
const Ft = Symbol("events"), Di = /* @__PURE__ */ new Set(), nr = /* @__PURE__ */ new Set();
function ne(e, t, n) {
  (t[Ft] ?? (t[Ft] = {}))[e] = n;
}
function Ma(e) {
  for (var t = 0; t < e.length; t++)
    Di.add(e[t]);
  for (var n of nr)
    n(e);
}
let Or = null;
function zr(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), s = e.type, r = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    r[0] || e.target
  );
  Or = e;
  var c = 0, f = Or === e && e[Ft];
  if (f) {
    var l = r.indexOf(f);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Ft] = t;
      return;
    }
    var u = r.indexOf(t);
    if (u === -1)
      return;
    l <= u && (c = l);
  }
  if (i = /** @type {Element} */
  r[c] || e.target, i !== t) {
    go(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var p = D, _ = R;
    Ve(null), ot(null);
    try {
      for (var d, h = []; i !== null && i !== t; ) {
        try {
          var k = i[Ft]?.[s];
          k != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && k.call(i, e);
        } catch (T) {
          d ? h.push(T) : d = T;
        }
        if (e.cancelBubble) break;
        c++, i = c < r.length ? (
          /** @type {Element} */
          r[c]
        ) : null;
      }
      if (d) {
        for (let T of h)
          queueMicrotask(() => {
            throw T;
          });
        throw d;
      }
    } finally {
      e[Ft] = t, delete e.currentTarget, Ve(p), ot(_);
    }
  }
}
const Pa = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Ia(e) {
  return (
    /** @type {string} */
    Pa?.createHTML(e) ?? e
  );
}
function Ri(e) {
  var t = fr("template");
  return t.innerHTML = Ia(e.replaceAll("<!>", "<!---->")), t.content;
}
function Xt(e, t) {
  var n = (
    /** @type {Effect} */
    R
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function z(e, t) {
  var n = (t & Ho) !== 0, s = (t & Uo) !== 0, r, i = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = Ri(i ? e : "<!>" + e), n || (r = /** @type {TemplateNode} */
    /* @__PURE__ */ st(r)));
    var c = (
      /** @type {TemplateNode} */
      s || bi ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (n) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ st(c)
      ), l = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      Xt(f, l);
    } else
      Xt(c, c);
    return c;
  };
}
// @__NO_SIDE_EFFECTS__
function Na(e, t, n = "svg") {
  var s = !e.startsWith("<!>"), r = `<${n}>${s ? e : "<!>" + e}</${n}>`, i;
  return () => {
    if (!i) {
      var c = (
        /** @type {DocumentFragment} */
        Ri(r)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ st(c)
      );
      i = /** @type {Element} */
      /* @__PURE__ */ st(f);
    }
    var l = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    return Xt(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function As(e, t) {
  return /* @__PURE__ */ Na(e, t, "svg");
}
function sn(e = "") {
  {
    var t = bt(e + "");
    return Xt(t, t), t;
  }
}
function rn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = bt();
  return e.append(t, n), Xt(t, n), e;
}
function E(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function we(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== /** @type {any} */
  (e[jn] ?? (e[jn] = e.nodeValue)) && (e[jn] = n, e.nodeValue = `${n}`);
}
function La(e, t) {
  return Da(e, t);
}
const rs = /* @__PURE__ */ new Map();
function Da(e, { target: t, anchor: n, props: s = {}, events: r, context: i, intro: c = !0, transformError: f }) {
  pa();
  var l = void 0, u = wa(() => {
    var p = n ?? t.appendChild(bt());
    Qo(
      /** @type {TemplateNode} */
      p,
      {
        pending: () => {
        }
      },
      (h) => {
        Zr({});
        var k = (
          /** @type {ComponentContext} */
          be
        );
        i && (k.c = i), r && (s.$$events = r), l = e(h, s) || {}, ei();
      },
      f
    );
    var _ = /* @__PURE__ */ new Set(), d = (h) => {
      for (var k = 0; k < h.length; k++) {
        var T = h[k];
        if (!_.has(T)) {
          _.add(T);
          var m = Ca(T);
          for (const j of [t, document]) {
            var O = rs.get(j);
            O === void 0 && (O = /* @__PURE__ */ new Map(), rs.set(j, O));
            var te = O.get(T);
            te === void 0 ? (j.addEventListener(T, zr, { passive: m }), O.set(T, 1)) : O.set(T, te + 1);
          }
        }
      }
    };
    return d(ys(Di)), nr.add(d), () => {
      for (var h of _)
        for (const m of [t, document]) {
          var k = (
            /** @type {Map<string, number>} */
            rs.get(m)
          ), T = (
            /** @type {number} */
            k.get(h)
          );
          --T == 0 ? (m.removeEventListener(h, zr), k.delete(h), k.size === 0 && rs.delete(m)) : k.set(h, T);
        }
      nr.delete(d), p !== n && p.parentNode?.removeChild(p);
    };
  });
  return sr.set(l, u), l;
}
let sr = /* @__PURE__ */ new WeakMap();
function Ra(e, t) {
  const n = sr.get(e);
  return n ? (sr.delete(e), n(t)) : Promise.resolve();
}
var Ye, tt, Le, qt, Qn, Xn, xs;
class Oa {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    Pe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    C(this, Ye, /* @__PURE__ */ new Map());
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    C(this, tt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    C(this, Le, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    C(this, qt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    C(this, Qn, !0);
    /**
     * @param {Batch} batch
     */
    C(this, Xn, (t) => {
      if (a(this, Ye).has(t)) {
        var n = (
          /** @type {Key} */
          a(this, Ye).get(t)
        ), s = a(this, tt).get(n);
        if (s)
          ks(s), a(this, qt).delete(n);
        else {
          var r = a(this, Le).get(n);
          r && (ks(r.effect), a(this, tt).set(n, r.effect), a(this, Le).delete(n), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), s = r.effect);
        }
        for (const [i, c] of a(this, Ye)) {
          if (a(this, Ye).delete(i), i === t)
            break;
          const f = a(this, Le).get(c);
          f && (Ce(f.effect), a(this, Le).delete(c));
        }
        for (const [i, c] of a(this, tt)) {
          if (i === n || a(this, qt).has(i)) continue;
          const f = () => {
            if (Array.from(a(this, Ye).values()).includes(i)) {
              var u = document.createDocumentFragment();
              gr(c, u), u.append(bt()), a(this, Le).set(i, { effect: c, fragment: u });
            } else
              Ce(c);
            a(this, qt).delete(i), a(this, tt).delete(i);
          };
          a(this, Qn) || !s ? (a(this, qt).add(i), Wt(c, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    C(this, xs, (t) => {
      a(this, Ye).delete(t);
      const n = Array.from(a(this, Ye).values());
      for (const [s, r] of a(this, Le))
        n.includes(s) || (Ce(r.effect), a(this, Le).delete(s));
    });
    this.anchor = t, A(this, Qn, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var s = (
      /** @type {Batch} */
      I
    ), r = mi();
    if (n && !a(this, tt).has(t) && !a(this, Le).has(t))
      if (r) {
        var i = document.createDocumentFragment(), c = bt();
        i.append(c), a(this, Le).set(t, {
          effect: Fe(() => n(c)),
          fragment: i
        });
      } else
        a(this, tt).set(
          t,
          Fe(() => n(this.anchor))
        );
    if (a(this, Ye).set(s, t), r) {
      for (const [f, l] of a(this, tt))
        f === t ? s.unskip_effect(l) : s.skip_effect(l);
      for (const [f, l] of a(this, Le))
        f === t ? s.unskip_effect(l.effect) : s.skip_effect(l.effect);
      s.oncommit(a(this, Xn)), s.ondiscard(a(this, xs));
    } else
      a(this, Xn).call(this, s);
  }
}
Ye = new WeakMap(), tt = new WeakMap(), Le = new WeakMap(), qt = new WeakMap(), Qn = new WeakMap(), Xn = new WeakMap(), xs = new WeakMap();
function B(e, t, n = !1) {
  var s = new Oa(e), r = n ? mn : 0;
  function i(c, f) {
    s.ensure(c, f);
  }
  pr(() => {
    var c = !1;
    t((f, l = 0) => {
      c = !0, i(l, f);
    }), c || i(-1, null);
  }, r);
}
function on(e, t) {
  return t;
}
function za(e, t, n) {
  for (var s = [], r = t.length, i, c = t.length, f = 0; f < r; f++) {
    let _ = t[f];
    Wt(
      _,
      () => {
        if (i) {
          if (i.pending.delete(_), i.done.add(_), i.pending.size === 0) {
            var d = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            rr(e, ys(i.done)), d.delete(i), d.size === 0 && (e.outrogroups = null);
          }
        } else
          c -= 1;
      },
      !1
    );
  }
  if (c === 0) {
    var l = s.length === 0 && n !== null;
    if (l) {
      var u = (
        /** @type {Element} */
        n
      ), p = (
        /** @type {Element} */
        u.parentNode
      );
      ha(p), p.append(u), e.items.clear();
    }
    rr(e, t, !l);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function rr(e, t, n = !0) {
  var s;
  if (e.pending.size > 0) {
    s = /* @__PURE__ */ new Set();
    for (const c of e.pending.values())
      for (const f of c)
        s.add(
          /** @type {EachItem} */
          e.items.get(f).e
        );
  }
  for (var r = 0; r < t.length; r++) {
    var i = t[r];
    if (s?.has(i)) {
      i.f |= nt;
      const c = document.createDocumentFragment();
      gr(i, c);
    } else
      Ce(t[r], n);
  }
}
var jr;
function an(e, t, n, s, r, i = null) {
  var c = e, f = /* @__PURE__ */ new Map(), l = (t & Kr) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    c = u.appendChild(bt());
  }
  var p = null, _ = /* @__PURE__ */ ia(() => {
    var j = n();
    return (
      /** @type {V[]} */
      Yr(j) ? j : j == null ? [] : ys(j)
    );
  }), d, h = /* @__PURE__ */ new Map(), k = !0;
  function T(j) {
    (te.effect.f & Ue) === 0 && (te.pending.delete(j), te.fallback = p, ja(te, d, c, t, s), p !== null && (d.length === 0 ? (p.f & nt) === 0 ? ks(p) : (p.f ^= nt, Bn(p, null, c)) : Wt(p, () => {
      p = null;
    })));
  }
  function m(j) {
    te.pending.delete(j);
  }
  var O = pr(() => {
    d = /** @type {V[]} */
    o(_);
    for (var j = d.length, K = /* @__PURE__ */ new Set(), De = (
      /** @type {Batch} */
      I
    ), at = mi(), pe = 0; pe < j; pe += 1) {
      var ce = d[pe], fe = s(ce, pe), W = k ? null : f.get(fe);
      W ? (W.v && xn(W.v, ce), W.i && xn(W.i, pe), at && De.unskip_effect(W.e)) : (W = Fa(
        f,
        k ? c : jr ?? (jr = bt()),
        ce,
        fe,
        pe,
        r,
        t,
        n
      ), k || (W.e.f |= nt), f.set(fe, W)), K.add(fe);
    }
    if (j === 0 && i && !p && (k ? p = Fe(() => i(c)) : (p = Fe(() => i(jr ?? (jr = bt()))), p.f |= nt)), j > K.size && Ao(), !k)
      if (h.set(De, K), at) {
        for (const [Zt, Nt] of f)
          K.has(Zt) || De.skip_effect(Nt.e);
        De.oncommit(T), De.ondiscard(m);
      } else
        T(De);
    o(_);
  }), te = { effect: O, items: f, pending: h, outrogroups: null, fallback: p };
  k = !1;
}
function zn(e) {
  for (; e !== null && (e.f & Je) === 0; )
    e = e.next;
  return e;
}
function ja(e, t, n, s, r) {
  var i = (s & jo) !== 0, c = t.length, f = e.items, l = zn(e.effect.first), u, p = null, _, d = [], h = [], k, T, m, O;
  if (i)
    for (O = 0; O < c; O += 1)
      k = t[O], T = r(k, O), m = /** @type {EachItem} */
      f.get(T).e, (m.f & nt) === 0 && (m.nodes?.a?.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(m));
  for (O = 0; O < c; O += 1) {
    if (k = t[O], T = r(k, O), m = /** @type {EachItem} */
    f.get(T).e, e.outrogroups !== null)
      for (const W of e.outrogroups)
        W.pending.delete(m), W.done.delete(m);
    if ((m.f & ye) !== 0 && (ks(m), i && (m.nodes?.a?.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(m))), (m.f & nt) !== 0)
      if (m.f ^= nt, m === l)
        Bn(m, null, n);
      else {
        var te = p ? p.next : l;
        m === e.effect.last && (e.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), St(e, p, m), St(e, m, te), Bn(m, te, n), p = m, d = [], h = [], l = zn(p.next);
        continue;
      }
    if (m !== l) {
      if (u !== void 0 && u.has(m)) {
        if (d.length < h.length) {
          var j = h[0], K;
          p = j.prev;
          var De = d[0], at = d[d.length - 1];
          for (K = 0; K < d.length; K += 1)
            Bn(d[K], j, n);
          for (K = 0; K < h.length; K += 1)
            u.delete(h[K]);
          St(e, De.prev, at.next), St(e, p, De), St(e, at, j), l = j, p = at, O -= 1, d = [], h = [];
        } else
          u.delete(m), Bn(m, l, n), St(e, m.prev, m.next), St(e, m, p === null ? e.effect.first : p.next), St(e, p, m), p = m;
        continue;
      }
      for (d = [], h = []; l !== null && l !== m; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(l), h.push(l), l = zn(l.next);
      if (l === null)
        continue;
    }
    (m.f & nt) === 0 && d.push(m), p = m, l = zn(m.next);
  }
  if (e.outrogroups !== null) {
    for (const W of e.outrogroups)
      W.pending.size === 0 && (rr(e, ys(W.done)), e.outrogroups?.delete(W));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || u !== void 0) {
    var pe = [];
    if (u !== void 0)
      for (m of u)
        (m.f & ye) === 0 && pe.push(m);
    for (; l !== null; )
      (l.f & ye) === 0 && l !== e.fallback && pe.push(l), l = zn(l.next);
    var ce = pe.length;
    if (ce > 0) {
      var fe = (s & Kr) !== 0 && c === 0 ? n : null;
      if (i) {
        for (O = 0; O < ce; O += 1)
          pe[O].nodes?.a?.measure();
        for (O = 0; O < ce; O += 1)
          pe[O].nodes?.a?.fix();
      }
      za(e, pe, fe);
    }
  }
  i && Yt(() => {
    if (_ !== void 0)
      for (m of _)
        m.nodes?.a?.apply();
  });
}
function Fa(e, t, n, s, r, i, c, f) {
  var l = (c & Oo) !== 0 ? (c & Fo) === 0 ? /* @__PURE__ */ da(n, !1, !1) : Qt(n) : null, u = (c & zo) !== 0 ? Qt(r) : null;
  return {
    v: l,
    i: u,
    e: Fe(() => (i(t, l ?? n, u ?? r, f), () => {
      e.delete(s);
    }))
  };
}
function Bn(e, t, n) {
  if (e.nodes)
    for (var s = e.nodes.start, r = e.nodes.end, i = t && (t.f & nt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; s !== null; ) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Zn(s)
      );
      if (i.before(s), s === r)
        return;
      s = c;
    }
}
function St(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Ha(e, t, n = !1, s = !1, r = !1, i = !1) {
  var c = e, f = "";
  if (n)
    var l = (
      /** @type {Element} */
      e
    );
  ge(() => {
    var u = (
      /** @type {Effect} */
      R
    );
    if (f !== (f = t() ?? "")) {
      if (n) {
        u.nodes = null, l.innerHTML = /** @type {string} */
        f, f !== "" && Xt(
          /** @type {TemplateNode} */
          /* @__PURE__ */ st(l),
          /** @type {TemplateNode} */
          l.lastChild
        );
        return;
      }
      if (u.nodes !== null && (Ei(
        u.nodes.start,
        /** @type {TemplateNode} */
        u.nodes.end
      ), u.nodes = null), f !== "") {
        var p = s ? Vo : r ? Bo : void 0, _ = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          fr(s ? "svg" : r ? "math" : "template", p)
        );
        _.innerHTML = /** @type {any} */
        f;
        var d = s || r ? _ : (
          /** @type {HTMLTemplateElement} */
          _.content
        );
        if (Xt(
          /** @type {TemplateNode} */
          /* @__PURE__ */ st(d),
          /** @type {TemplateNode} */
          d.lastChild
        ), s || r)
          for (; /* @__PURE__ */ st(d); )
            c.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ st(d)
            );
        else
          c.before(d);
      }
    }
  });
}
function Ua(e, t) {
  xi(() => {
    var n = e.getRootNode(), s = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!s.querySelector("#" + t.hash)) {
      const r = fr("style");
      r.id = t.hash, r.textContent = t.code, s.appendChild(r);
    }
  });
}
function Va(e, t, n) {
  var s = e == null ? "" : "" + e;
  return s = s ? s + " " + t : t, s === "" ? null : s;
}
function Ba(e, t) {
  return e == null ? null : String(e);
}
function ln(e, t, n, s, r, i) {
  var c = (
    /** @type {any} */
    e[Ws]
  );
  if (c !== n || c === void 0) {
    var f = Va(n, s);
    f == null ? e.removeAttribute("class") : e.className = f, e[Ws] = n;
  }
  return i;
}
function Fr(e, t, n, s) {
  var r = (
    /** @type {any} */
    e[$s]
  );
  if (r !== t) {
    var i = Ba(t);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e[$s] = t;
  }
  return s;
}
const qa = Symbol("is custom element"), Ya = Symbol("is html");
function is(e, t, n, s) {
  var r = Ga(e);
  r[t] !== (r[t] = n) && (t === "loading" && (e[Eo] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Wa(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Ga(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[as] ?? (e[as] = {
      [qa]: e.nodeName.includes("-"),
      [Ya]: e.namespaceURI === Jr
    })
  );
}
var Hr = /* @__PURE__ */ new Map();
function Wa(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Hr.get(t);
  if (n) return n;
  Hr.set(t, n = []);
  for (var s, r = e, i = Element.prototype; i !== r; ) {
    s = bo(r);
    for (var c in s)
      s[c].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      c !== "innerHTML" && c !== "textContent" && c !== "innerText" && n.push(c);
    r = Gr(r);
  }
  return n;
}
function $a(e, t, n = t) {
  var s = /* @__PURE__ */ new WeakSet();
  ba(e, "input", async (r) => {
    var i = r ? e.defaultValue : e.value;
    if (i = Vs(e) ? Bs(i) : i, n(i), I !== null && s.add(I), await Vn(), i !== (i = t())) {
      var c = e.selectionStart, f = e.selectionEnd, l = e.value.length;
      if (e.value = i ?? "", f !== null) {
        var u = e.value.length;
        c === f && f === l && u > l ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = c, e.selectionEnd = Math.min(f, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Ts(t) == null && e.value && (n(Vs(e) ? Bs(e.value) : e.value), I !== null && s.add(I)), vr(() => {
    var r = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        I
      );
      if (s.has(i))
        return;
    }
    Vs(e) && r === Bs(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r ?? "");
  });
}
function Vs(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Bs(e) {
  return e === "" ? null : +e;
}
function qs(e, t) {
  return e === t || e?.[os] === t;
}
function Ur(e = {}, t, n, s) {
  var r = (
    /** @type {ComponentContext} */
    be.r
  ), i = (
    /** @type {Effect} */
    R
  );
  return xi(() => {
    var c, f;
    return vr(() => {
      c = f, f = [], Ts(() => {
        qs(n(...f), e) || (t(e, ...f), c && qs(n(...c), e) && t(null, ...c));
      });
    }), () => {
      let l = i;
      for (; l !== r && l.parent !== null && l.parent.f & Gs; )
        l = l.parent;
      const u = () => {
        f && qs(n(...f), e) && t(null, ...f);
      }, p = l.teardown;
      l.teardown = () => {
        u(), p?.();
      };
    };
  }), e;
}
function Ka(e) {
  be === null && So(), ds(() => {
    const t = Ts(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
const Ja = "5";
var qr;
typeof window < "u" && ((qr = window.__svelte ?? (window.__svelte = {})).v ?? (qr.v = /* @__PURE__ */ new Set())).add(Ja);
var Qa = /* @__PURE__ */ z('<button><span class="settings-assistant-emoji svelte-beco3k"> </span> <span class="settings-assistant-name svelte-beco3k"> </span></button>'), Xa = /* @__PURE__ */ z('<div class="settings-assistant-grid svelte-beco3k"></div>'), Za = /* @__PURE__ */ z('<p class="settings-section-desc svelte-beco3k">Loading assistants…</p>'), el = /* @__PURE__ */ z('<div class="settings-history-item svelte-beco3k"><div class="settings-history-body svelte-beco3k"><div class="settings-history-title svelte-beco3k"> </div> <div class="settings-history-meta svelte-beco3k"> </div></div> <button class="settings-history-delete svelte-beco3k" title="Delete"><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-beco3k"><path d="M3 4h10M6 4V3h4v1M5 4v8h6V4H5z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="svelte-beco3k"></path></svg></button></div>'), tl = /* @__PURE__ */ z('<div class="settings-history-list svelte-beco3k"></div>'), nl = /* @__PURE__ */ z('<p class="settings-section-desc svelte-beco3k"> </p>'), sl = /* @__PURE__ */ z('<section class="settings-section svelte-beco3k"><h2 class="settings-section-title svelte-beco3k">Conversation history</h2> <!> <button class="settings-danger-btn svelte-beco3k"><!></button></section>'), rl = /* @__PURE__ */ z(`<div class="settings-page svelte-beco3k"><h1 class="settings-title svelte-beco3k">AI Assistant — Settings</h1> <section class="settings-section svelte-beco3k"><h2 class="settings-section-title svelte-beco3k">Default assistant</h2> <p class="settings-section-desc svelte-beco3k">Which persona opens when you start a new conversation.</p> <!></section> <section class="settings-section svelte-beco3k"><h2 class="settings-section-title svelte-beco3k">Preferences</h2> <div class="settings-toggle svelte-beco3k"><div class="settings-toggle-info svelte-beco3k"><span class="settings-toggle-label svelte-beco3k">Show suggestion chips</span> <span class="settings-toggle-desc svelte-beco3k">Display quick-reply suggestions after each response.</span></div> <button role="switch" aria-label="Show suggestion chips"></button></div> <div class="settings-toggle svelte-beco3k"><div class="settings-toggle-info svelte-beco3k"><span class="settings-toggle-label svelte-beco3k">Share page context</span> <span class="settings-toggle-desc svelte-beco3k">Send the current page you're viewing as context to the assistant.</span></div> <button role="switch" aria-label="Share page context"></button></div></section> <!> <section class="settings-section svelte-beco3k"><h2 class="settings-section-title svelte-beco3k">About</h2> <div class="settings-about-row svelte-beco3k"><span class="settings-about-label svelte-beco3k">Extension version</span> <span class="settings-about-value svelte-beco3k">1.0.1</span></div> <div class="settings-about-row svelte-beco3k"><span class="settings-about-label svelte-beco3k">API status</span> <span><!></span></div> <button class="settings-link-btn svelte-beco3k">Check again</button></section></div>`), il = /* @__PURE__ */ z('<div class="chat-toolbar svelte-beco3k"><button class="toolbar-btn svelte-beco3k" title="New conversation"><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-beco3k"><path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" class="svelte-beco3k"></path></svg> <span class="svelte-beco3k">New chat</span></button> <button title="Conversation history"><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-beco3k"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.5" class="svelte-beco3k"></circle><path d="M10 6.5V10l2.5 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="svelte-beco3k"></path></svg> <span class="svelte-beco3k">History</span></button></div>'), ol = /* @__PURE__ */ z('<div class="focus-chip svelte-beco3k"><span class="focus-chip-label svelte-beco3k"> </span> <button class="focus-chip-btn svelte-beco3k" title="Explain current selection">Explain this</button></div>'), al = /* @__PURE__ */ z('<button><span class="text-lg svelte-beco3k"> </span> <span class="text-sm font-medium svelte-beco3k"> </span></button>'), ll = /* @__PURE__ */ z('<div class="assistant-selector svelte-beco3k"></div>'), cl = /* @__PURE__ */ z('<div class="history-loading svelte-beco3k">Loading conversations…</div>'), fl = /* @__PURE__ */ z('<div class="history-empty svelte-beco3k">No past conversations yet. Start chatting!</div>'), ul = /* @__PURE__ */ z('<div class="history-item svelte-beco3k" role="button" tabindex="0"><div class="history-item-body svelte-beco3k"><div class="history-title svelte-beco3k"> </div> <div class="history-meta svelte-beco3k"> </div></div> <button class="history-delete svelte-beco3k" title="Delete"><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-beco3k"><path d="M3 4h10M6 4V3h4v1M5 4v8h6V4H5z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="svelte-beco3k"></path></svg></button></div>'), dl = /* @__PURE__ */ z('<div class="history-panel svelte-beco3k"><!></div>'), vl = /* @__PURE__ */ z(`<p class="svelte-beco3k">Welcome back! I'm your AI assistant. Ask me anything about this realm — governance, proposals, codices, or general questions.</p>`), pl = /* @__PURE__ */ z(`<p class="svelte-beco3k">Hello! I'm the realm's AI assistant. Feel free to ask me about this realm, its governance structure, or anything you'd like to know.</p>`), hl = /* @__PURE__ */ z('<div class="welcome-message svelte-beco3k"><div class="assistant-content markdown-content svelte-beco3k"><!></div></div>'), Vr = /* @__PURE__ */ As('<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-beco3k"><path d="M3 8l3.5 3.5L13 4.5" stroke="#4f46e5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="svelte-beco3k"></path></svg>'), Br = /* @__PURE__ */ As('<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-beco3k"><rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.3" class="svelte-beco3k"></rect><path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" class="svelte-beco3k"></path></svg>'), gl = /* @__PURE__ */ z('<div class="message-row user-row svelte-beco3k"><div class="user-message-wrap svelte-beco3k"><button class="copy-btn svelte-beco3k" title="Copy"><!></button> <div class="bubble user-bubble svelte-beco3k"> </div></div></div>'), bl = /* @__PURE__ */ z('<details class="thinking-block svelte-beco3k"><summary class="svelte-beco3k">Reasoning</summary> <div class="thinking-text svelte-beco3k"> </div></details>'), _l = /* @__PURE__ */ z('<div class="message-row assistant-row svelte-beco3k"><div class="assistant-message-wrap svelte-beco3k"><div class="assistant-content markdown-content svelte-beco3k"><!> <!></div> <button class="copy-btn copy-btn--assistant svelte-beco3k" title="Copy"><!></button></div></div>'), kl = /* @__PURE__ */ z('<p class="explain-wait svelte-beco3k">Analyzing codex… if the GPU was idle, the backend may need up to 5 minutes to start.</p>'), ml = /* @__PURE__ */ z('<p class="explain-wait svelte-beco3k">Awakening the AI assistant. This may take a few minutes.</p>'), wl = /* @__PURE__ */ z('<p class="stream-status svelte-beco3k"> </p>'), xl = /* @__PURE__ */ z('<div class="typing-animation svelte-beco3k"><span class="svelte-beco3k"></span> <span class="svelte-beco3k"></span> <span class="svelte-beco3k"></span></div>'), yl = /* @__PURE__ */ z('<div class="message-row assistant-row svelte-beco3k"><div class="assistant-content svelte-beco3k"><!> <!> <!></div></div>'), El = /* @__PURE__ */ z('<div class="error-banner svelte-beco3k"><span class="svelte-beco3k"> </span> <button class="error-dismiss svelte-beco3k" title="Dismiss">&times;</button></div>'), Sl = /* @__PURE__ */ z("<!> <!> <!>", 1), Tl = /* @__PURE__ */ z('<span class="suggestion-loading svelte-beco3k">Loading suggestions...</span>'), Al = /* @__PURE__ */ z('<button class="suggestion-chip svelte-beco3k"> </button>'), Cl = /* @__PURE__ */ z('<div class="suggestions svelte-beco3k"><!></div>'), Ml = /* @__PURE__ */ As('<svg class="animate-spin h-5 w-5 svelte-beco3k" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25 svelte-beco3k" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75 svelte-beco3k" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>'), Pl = /* @__PURE__ */ As('<svg class="h-5 w-5 svelte-beco3k" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" class="svelte-beco3k"></path></svg>'), Il = /* @__PURE__ */ z('<div class="llm-chat-root svelte-beco3k"><!> <!> <!> <!> <div class="messages-area svelte-beco3k"><!></div> <div class="input-section svelte-beco3k"><!> <div class="input-row svelte-beco3k"><textarea class="chat-input svelte-beco3k" placeholder="Type a message..." rows="1"></textarea> <button class="send-btn svelte-beco3k" title="Send message (Enter)"><!></button></div></div></div>');
const Nl = {
  hash: "svelte-beco3k",
  code: `.llm-chat-root.svelte-beco3k {display:flex;flex-direction:column;
		/* height is set via inline style driven by visualViewport on mobile;
		   the fallback keeps it correct on desktop */max-height:100%;min-height:300px;overflow:hidden;background:transparent;
		/* Prevent the component itself from scrolling — only messages-area scrolls */overscroll-behavior:none;
		/* Flush to the top of the sidebar panel — no stray gap */margin-top:0;padding-top:0;}

	/* Top toolbar */.chat-toolbar.svelte-beco3k {display:flex;gap:6px;padding:6px 14px;border-bottom:1px solid #e5e7eb;flex-shrink:0;}.toolbar-btn.svelte-beco3k {display:flex;align-items:center;gap:5px;padding:5px 10px;border-radius:8px;border:1px solid #e5e7eb;background:#f9fafb;color:#4b5563;font-size:13px;cursor:pointer;transition:all 0.15s ease;}.toolbar-btn.svelte-beco3k svg:where(.svelte-beco3k) {width:15px;height:15px;flex-shrink:0;}.toolbar-btn.svelte-beco3k:hover {background:#eef2ff;border-color:#c7d2fe;color:#4338ca;}.toolbar-btn.active.svelte-beco3k {background:#eef2ff;border-color:#6366f1;color:#4338ca;}

	/* History panel */.history-panel.svelte-beco3k {flex:1;min-height:0;overflow-y:auto;padding:8px 14px;display:flex;flex-direction:column;gap:4px;}.history-loading.svelte-beco3k,
	.history-empty.svelte-beco3k {padding:24px 0;text-align:center;color:#9ca3af;font-size:13px;}.history-item.svelte-beco3k {display:flex;align-items:center;gap:8px;padding:10px 12px;border-radius:10px;border:1px solid #f3f4f6;background:#fafafa;cursor:pointer;transition:background 0.12s ease, border-color 0.12s ease;}.history-item.svelte-beco3k:hover {background:#eef2ff;border-color:#c7d2fe;}.history-item-body.svelte-beco3k {flex:1;min-width:0;}.history-title.svelte-beco3k {font-size:13px;font-weight:500;color:#1f2937;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.history-meta.svelte-beco3k {font-size:11px;color:#9ca3af;margin-top:2px;}.history-delete.svelte-beco3k {flex-shrink:0;display:flex;align-items:center;justify-content:center;width:26px;height:26px;border:none;background:transparent;color:#d1d5db;cursor:pointer;border-radius:6px;padding:4px;transition:color 0.15s ease, background 0.15s ease;}.history-delete.svelte-beco3k svg:where(.svelte-beco3k) {width:14px;height:14px;}.history-delete.svelte-beco3k:hover {color:#ef4444;background:#fef2f2;}

	/* Document focus chip */.focus-chip.svelte-beco3k {display:flex;align-items:center;gap:8px;padding:8px 14px;border-bottom:1px solid #e5e7eb;background:#f8fafc;flex-shrink:0;}.focus-chip-label.svelte-beco3k {flex:1;min-width:0;font-size:12px;color:#4b5563;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.focus-chip-btn.svelte-beco3k {flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:500;border-radius:9999px;border:1px solid #c7d2fe;background:#eef2ff;color:#4338ca;cursor:pointer;}.focus-chip-btn.svelte-beco3k:hover {background:#e0e7ff;}

	/* Assistant selector */.assistant-selector.svelte-beco3k {display:flex;gap:8px;padding:10px 0;border-bottom:1px solid #e5e7eb;flex-shrink:0;overflow-x:auto;}.assistant-btn.svelte-beco3k {display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:8px;border:1px solid #e5e7eb;background:#fff;cursor:pointer;transition:all 0.15s ease;white-space:nowrap;}.assistant-btn.svelte-beco3k:hover {background:#f3f4f6;border-color:#d1d5db;}.assistant-btn.active.svelte-beco3k {border-color:#6366f1;background:#eef2ff;color:#4338ca;}

	/* Messages area */.messages-area.svelte-beco3k {flex:1;min-height:0;overflow-y:auto;padding:8px 14px 16px;background:transparent;display:flex;flex-direction:column;gap:16px;}

	/* Welcome message */.welcome-message.svelte-beco3k {display:flex;align-items:flex-start;gap:12px;margin-top:4px;}

	/* Message rows */.message-row.svelte-beco3k {display:flex;gap:10px;max-width:100%;}.user-row.svelte-beco3k {justify-content:flex-end;}.assistant-row.svelte-beco3k {justify-content:flex-start;align-items:flex-start;}

	/* Avatar */.avatar.svelte-beco3k {flex-shrink:0;width:40px;height:40px;border-radius:50%;background:#fff;border:2px solid #e5e7eb;display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 1px 3px rgba(0, 0, 0, 0.08);}.avatar.small.svelte-beco3k {width:32px;height:32px;font-size:16px;}

	/* User message wrapper (bubble + copy) */.user-message-wrap.svelte-beco3k {display:flex;align-items:flex-end;gap:6px;max-width:80%;}

	/* Assistant message wrapper (content + copy) */.assistant-message-wrap.svelte-beco3k {display:flex;flex-direction:column;flex:1;min-width:0;gap:4px;}

	/* Copy button */.copy-btn.svelte-beco3k {flex-shrink:0;display:flex;align-items:center;justify-content:center;width:26px;height:26px;border:none;background:transparent;color:#9ca3af;cursor:pointer;border-radius:6px;padding:4px;transition:color 0.15s ease, background 0.15s ease;}.copy-btn.svelte-beco3k:hover {color:#4f46e5;background:#eef2ff;}.copy-btn.svelte-beco3k svg:where(.svelte-beco3k) {width:14px;height:14px;}.copy-btn--assistant.svelte-beco3k {align-self:flex-start;margin-left:2px;}

	/* Bubbles */.bubble.svelte-beco3k {padding:10px 14px;border-radius:16px;line-height:1.5;font-size:14px;word-wrap:break-word;overflow-wrap:break-word;}.user-bubble.svelte-beco3k {background:#4f46e5;color:#fff;border-bottom-right-radius:4px;box-shadow:0 1px 3px rgba(79, 70, 229, 0.3);white-space:pre-wrap;}

	/* Assistant content — no bubble, full width */.assistant-content.svelte-beco3k {flex:1;min-width:0;line-height:1.6;font-size:14px;color:#1f2937;word-wrap:break-word;overflow-wrap:break-word;padding:2px 0;}

	/* Markdown content inside assistant messages */.markdown-content.svelte-beco3k h1,
	.markdown-content.svelte-beco3k h2,
	.markdown-content.svelte-beco3k h3 {margin-top:12px;margin-bottom:4px;font-weight:600;}.markdown-content.svelte-beco3k h1 {font-size:1.125rem;}.markdown-content.svelte-beco3k h2 {font-size:1rem;}.markdown-content.svelte-beco3k h3 {font-size:0.9375rem;}.markdown-content.svelte-beco3k li {margin-left:16px;margin-bottom:2px;}.markdown-content.svelte-beco3k pre {margin:8px 0;border-radius:6px;}.markdown-content.svelte-beco3k strong {font-weight:600;}.markdown-content.svelte-beco3k a {color:#4f46e5;text-decoration:underline;}

	/* Error banner */.error-banner.svelte-beco3k {display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 14px;border-radius:8px;background:#fef2f2;border:1px solid #fecaca;color:#991b1b;font-size:13px;}.error-dismiss.svelte-beco3k {background:none;border:none;font-size:18px;cursor:pointer;color:#991b1b;padding:0 4px;line-height:1;opacity:0.7;}.error-dismiss.svelte-beco3k:hover {opacity:1;}.explain-wait.svelte-beco3k {margin:0 0 6px;font-size:12px;color:#6b7280;}.stream-status.svelte-beco3k {margin:0;font-size:13px;color:#4b5563;font-style:italic;
		animation: svelte-beco3k-status-pulse 1.6s ease-in-out infinite;}

	@keyframes svelte-beco3k-status-pulse {
		0%, 100% { opacity: 0.55; }
		50% { opacity: 1; }
	}.thinking-block.svelte-beco3k {margin:0 0 10px;padding:8px 10px;border-radius:8px;background:#f5f3ff;border:1px solid #ddd6fe;font-size:12px;}.thinking-block.svelte-beco3k summary:where(.svelte-beco3k) {cursor:pointer;font-weight:600;color:#6d28d9;user-select:none;list-style:none;}.thinking-block.svelte-beco3k summary:where(.svelte-beco3k)::-webkit-details-marker {display:none;}.thinking-block.svelte-beco3k summary:where(.svelte-beco3k)::before {content:'▸ ';display:inline-block;transition:transform 0.15s ease;}.thinking-block[open].svelte-beco3k summary:where(.svelte-beco3k)::before {transform:rotate(90deg);}.thinking-text.svelte-beco3k {margin-top:8px;color:#4c1d95;line-height:1.5;white-space:pre-wrap;word-break:break-word;max-height:240px;overflow-y:auto;}

	/* Typing animation */.typing-animation.svelte-beco3k {display:flex;align-items:center;gap:4px;padding:4px 0;}.typing-animation.svelte-beco3k span:where(.svelte-beco3k) {width:7px;height:7px;background-color:#9ca3af;border-radius:50%;
		animation: svelte-beco3k-typing 1.4s infinite ease-in-out;}.typing-animation.svelte-beco3k span:where(.svelte-beco3k):nth-child(1) {animation-delay:0s;}.typing-animation.svelte-beco3k span:where(.svelte-beco3k):nth-child(2) {animation-delay:0.2s;}.typing-animation.svelte-beco3k span:where(.svelte-beco3k):nth-child(3) {animation-delay:0.4s;}

	@keyframes svelte-beco3k-typing {
		0%, 60%, 100% {
			transform: translateY(0);
			opacity: 0.4;
		}
		30% {
			transform: translateY(-6px);
			opacity: 1;
		}
	}

	/* Input section */.input-section.svelte-beco3k {flex-shrink:0;padding:10px 14px;border-top:1px solid #e5e7eb;background:transparent;}.suggestions.svelte-beco3k {display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;justify-content:center;}.suggestion-loading.svelte-beco3k {font-size:12px;color:#9ca3af;}.suggestion-chip.svelte-beco3k {padding:5px 12px;font-size:12px;border-radius:16px;border:1px solid #e5e7eb;background:#f9fafb;color:#4b5563;cursor:pointer;transition:all 0.15s ease;white-space:nowrap;}.suggestion-chip.svelte-beco3k:hover {background:#eef2ff;border-color:#c7d2fe;color:#4338ca;}.input-row.svelte-beco3k {display:flex;gap:8px;align-items:flex-end;}.chat-input.svelte-beco3k {flex:1;resize:none;padding:10px 14px;border-radius:12px;border:1px solid #d1d5db;font-size:16px; /* 16px prevents iOS auto-zoom on focus */line-height:1.4;min-height:42px;max-height:120px;overflow-y:auto;transition:border-color 0.15s ease, box-shadow 0.15s ease;outline:none;touch-action:manipulation;}.chat-input.svelte-beco3k:focus {border-color:#6366f1;box-shadow:0 0 0 3px rgba(99, 102, 241, 0.1);}.chat-input.svelte-beco3k::placeholder {color:#9ca3af;}.send-btn.svelte-beco3k {display:flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:12px;border:none;background:#4f46e5;color:#fff;cursor:pointer;transition:background 0.15s ease, opacity 0.15s ease;flex-shrink:0;}.send-btn.svelte-beco3k:hover:not(:disabled) {background:#4338ca;}.send-btn.svelte-beco3k:disabled {opacity:0.4;cursor:not-allowed;}

	/* ══════════════════════ Settings page ══════════════════════ */.settings-page.svelte-beco3k {max-width:680px;margin:0 auto;padding:36px 24px 60px;font-family:inherit;color:#111;}.settings-title.svelte-beco3k {font-size:1.35rem;font-weight:700;margin:0 0 32px;color:#111;}.settings-section.svelte-beco3k {background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:20px 22px;margin-bottom:18px;display:flex;flex-direction:column;gap:14px;}.settings-section-title.svelte-beco3k {font-size:0.85rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#6b7280;margin:0;}.settings-section-desc.svelte-beco3k {font-size:0.875rem;color:#6b7280;margin:-8px 0 0;}

	/* Default assistant grid */.settings-assistant-grid.svelte-beco3k {display:flex;flex-wrap:wrap;gap:10px;}.settings-assistant-btn.svelte-beco3k {display:flex;flex-direction:column;align-items:center;gap:5px;padding:10px 16px;border:1.5px solid #e5e7eb;border-radius:10px;background:#f9fafb;cursor:pointer;transition:border-color 0.15s, background 0.15s;min-width:80px;}.settings-assistant-btn.selected.svelte-beco3k {border-color:#4f46e5;background:#eef2ff;}.settings-assistant-emoji.svelte-beco3k {font-size:1.5rem;}.settings-assistant-name.svelte-beco3k {font-size:0.8rem;font-weight:500;color:#374151;}

	/* Toggle rows */.settings-toggle.svelte-beco3k {display:flex;align-items:center;justify-content:space-between;gap:16px;cursor:pointer;}.settings-toggle-info.svelte-beco3k {display:flex;flex-direction:column;gap:2px;}.settings-toggle-label.svelte-beco3k {font-size:0.9rem;font-weight:500;color:#111;}.settings-toggle-desc.svelte-beco3k {font-size:0.8rem;color:#6b7280;}.settings-switch.svelte-beco3k {flex-shrink:0;width:40px;height:22px;border-radius:11px;background:#d1d5db;border:none;position:relative;cursor:pointer;transition:background 0.2s;outline:none;padding:0;}.settings-switch.svelte-beco3k::after {content:'';position:absolute;top:3px;left:3px;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,0.2);transition:transform 0.2s;}.settings-switch.on.svelte-beco3k {background:#4f46e5;}.settings-switch.on.svelte-beco3k::after {transform:translateX(18px);}

	/* History list */.settings-history-list.svelte-beco3k {display:flex;flex-direction:column;gap:6px;max-height:260px;overflow-y:auto;border:1px solid #e5e7eb;border-radius:8px;padding:6px;}.settings-history-item.svelte-beco3k {display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:7px;background:#f9fafb;}.settings-history-body.svelte-beco3k {flex:1;min-width:0;}.settings-history-title.svelte-beco3k {font-size:0.875rem;font-weight:500;color:#111;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.settings-history-meta.svelte-beco3k {font-size:0.75rem;color:#9ca3af;margin-top:2px;}.settings-history-delete.svelte-beco3k {flex-shrink:0;width:28px;height:28px;border:none;background:transparent;cursor:pointer;border-radius:6px;color:#9ca3af;display:flex;align-items:center;justify-content:center;transition:background 0.15s, color 0.15s;}.settings-history-delete.svelte-beco3k:hover {background:#fee2e2;color:#dc2626;}.settings-danger-btn.svelte-beco3k {align-self:flex-start;padding:7px 14px;border:1.5px solid #fca5a5;border-radius:8px;background:#fff;color:#dc2626;font-size:0.85rem;font-weight:500;cursor:pointer;transition:background 0.15s;}.settings-danger-btn.svelte-beco3k:hover:not(:disabled) {background:#fee2e2;}.settings-danger-btn.svelte-beco3k:disabled {opacity:0.5;cursor:not-allowed;}

	/* About */.settings-about-row.svelte-beco3k {display:flex;justify-content:space-between;align-items:center;font-size:0.875rem;}.settings-about-label.svelte-beco3k {color:#6b7280;}.settings-about-value.svelte-beco3k {font-weight:500;color:#111;}.settings-api-status.svelte-beco3k {font-size:0.85rem;font-weight:500;}.settings-api-status.online.svelte-beco3k {color:#16a34a;}.settings-api-status.offline.svelte-beco3k {color:#dc2626;}.settings-api-status.unknown.svelte-beco3k {color:#9ca3af;}.settings-link-btn.svelte-beco3k {align-self:flex-start;padding:6px 12px;border:1px solid #e5e7eb;border-radius:7px;background:#f9fafb;color:#4f46e5;font-size:0.8rem;cursor:pointer;transition:background 0.15s;}.settings-link-btn.svelte-beco3k:hover {background:#eef2ff;}`
};
function Ll(e, t) {
  Zr(t, !0), Ua(e, Nl);
  let n = /* @__PURE__ */ M(Ge([])), s = /* @__PURE__ */ M(""), r = /* @__PURE__ */ M(!1), i = /* @__PURE__ */ M(""), c = /* @__PURE__ */ M(!1), f = /* @__PURE__ */ M(Ge(typeof sessionStorage < "u" && sessionStorage.getItem("llm-chat-backend-awake") === "1")), l = /* @__PURE__ */ M(""), u = /* @__PURE__ */ M(void 0), p = /* @__PURE__ */ M(Ge([])), _ = /* @__PURE__ */ M(!1), d = /* @__PURE__ */ M(void 0), h = /* @__PURE__ */ M(Ge([])), k = /* @__PURE__ */ M(null), T = /* @__PURE__ */ M(!1), m = /* @__PURE__ */ M(null), O = /* @__PURE__ */ M("calc(100dvh - 102px)"), te = /* @__PURE__ */ M(null), j = /* @__PURE__ */ M(!1), K = /* @__PURE__ */ M(null), De = /* @__PURE__ */ M(0), at, pe, ce = /* @__PURE__ */ M(null), fe = /* @__PURE__ */ M(Ge([])), W = /* @__PURE__ */ M(!1), Zt = /* @__PURE__ */ M(!1);
  const Nt = "https://geister-api.realmsgos.dev/", Oi = 36e4;
  let zi = `${Nt}api/ask`, ji = `${Nt}suggestions`, Fi = `${Nt}api/personas/assistants`, Tn = `${Nt}api/conversations`;
  function Hi(v) {
    if (!v) return null;
    const b = v.match(/^realms:\/\/codex_viewer\/codex\/([^?]+)/);
    if (!b) return null;
    try {
      return decodeURIComponent(b[1]);
    } catch {
      return b[1];
    }
  }
  function Ui(v) {
    !v || v.id === o(De) || (g(De, v.id, !0), g(s, v.message, !0), g(j, !0), v.autoSend ? setTimeout(() => void tn(), 150) : Vn().then(Ds));
  }
  function Vi() {
    t.ctx.host?.dispatch?.({ type: "assistant.prompt", autoSend: !0 });
  }
  function Bi() {
    at = t.ctx.host?.pendingPrompt?.subscribe?.(Ui), pe = t.ctx.host?.focus?.subscribe?.((v) => {
      g(K, v, !0);
    });
  }
  function br(v, b) {
    if (b === 503 && v instanceof Error && v.message) {
      const x = v.message.toLowerCase();
      return x.includes("pod") || x.includes("llm backend") || x.includes("ollama") || x.includes("waking up") || x.includes("still starting") ? "The AI assistant is still waking up. Please try again in a few minutes." : v.message;
    }
    return b === 502 || b === 530 ? "The AI backend is temporarily offline. Please try again in a few minutes." : b === 504 || b === 524 ? "The request timed out before the server could respond. Please try again." : b && b >= 500 ? "Server error. Please try again later." : v instanceof DOMException && v.name === "TimeoutError" || v instanceof Error && v.name === "AbortError" ? "The request timed out before the server could respond. Please try again." : v instanceof TypeError || v instanceof Error && v.message.includes("fetch") ? "Could not reach the AI service. Check your network or try again shortly." : v instanceof Error && v.message.includes("HTTP error") ? br(v, Number(v.message.match(/Status:\s*(\d+)/)?.[1])) : "Failed to get a response. Please try again.";
  }
  function qi(v) {
    const b = v.toLowerCase();
    return b.includes("llm backend") || b.includes("cannot reach ollama") || b.includes("ollama at");
  }
  function An() {
    g(f, !0);
    try {
      sessionStorage.setItem("llm-chat-backend-awake", "1");
    } catch {
    }
  }
  function _r() {
    g(f, !1);
    try {
      sessionStorage.removeItem("llm-chat-backend-awake");
    } catch {
    }
  }
  function Yi(v) {
    const b = v.toLowerCase();
    return b.includes("waking up") || b.includes("still starting");
  }
  function Cs() {
    g(i, ""), g(c, !1);
  }
  function ts(v, b) {
    (v.trim() || b.trim()) && g(c, !0);
    const x = { text: v, isUser: !1, ...b.trim() ? { thinking: b } : {} }, w = o(n)[o(n).length - 1];
    !w || w.isUser ? g(n, [...o(n), x], !0) : g(n, o(n).map((N, wt) => wt === o(n).length - 1 ? { ...N, ...x } : N), !0), Vn().then(Ns);
  }
  function Gi(v, b) {
    const x = typeof v.type == "string" ? v.type : v.text ? "text" : "", w = typeof v.text == "string" ? v.text : "";
    if (x === "status" && w) {
      An(), g(i, w, !0);
      return;
    }
    if (x === "thinking" && w) {
      An(), b.thinking += w, ts(b.text, b.thinking);
      return;
    }
    w && (An(), b.text += w, ts(b.text, b.thinking));
  }
  let Cn = "", kt = "", kr, mr, mt = /* @__PURE__ */ M(!1);
  const Ms = !!t.ctx.sidebarPanel, wr = "llm_chat_prefs";
  function Wi() {
    try {
      return JSON.parse(localStorage.getItem(wr) || "{}");
    } catch {
      return {};
    }
  }
  function $i(v) {
    try {
      localStorage.setItem(wr, JSON.stringify(v));
    } catch {
    }
  }
  const Ps = Wi();
  let en = /* @__PURE__ */ M(Ge(Ps.defaultAssistant || "")), Lt = /* @__PURE__ */ M(Ps.showSuggestions !== !1), Mn = /* @__PURE__ */ M(Ps.sharePageContext !== !1);
  ds(() => {
    $i({
      defaultAssistant: o(en),
      showSuggestions: o(Lt),
      sharePageContext: o(Mn)
    });
  });
  let Pn = /* @__PURE__ */ M("unknown"), ns = /* @__PURE__ */ M(!1), Is = /* @__PURE__ */ M(!1);
  async function xr() {
    try {
      const v = await fetch(`${Nt}api/personas/assistants`, { method: "HEAD", signal: AbortSignal.timeout(5e3) });
      g(Pn, v.ok ? "online" : "offline", !0);
    } catch {
      g(Pn, "offline");
    }
  }
  async function Ki() {
    if (!(!kt || !o(mt))) {
      g(ns, !0);
      try {
        await Ls(), await Promise.all(o(fe).map((v) => fetch(`${Tn}/${v.conversation_id}`, { method: "DELETE" }))), g(fe, [], !0), g(n, [], !0), g(ce, null), g(Is, !0), setTimeout(
          () => {
            g(Is, !1);
          },
          2e3
        );
      } catch {
      } finally {
        g(ns, !1);
      }
    }
  }
  Ka(async () => {
    const v = globalThis.__CANISTER_IDS?.realm_backend || "", b = t.ctx.config?.canisterId || "";
    Cn = v || b, kr = t.ctx.principal?.subscribe?.((w) => {
      kt = w || "";
    }), mr = t.ctx.isAuthenticated?.subscribe?.((w) => {
      g(mt, w, !0);
    });
    const x = window.visualViewport;
    if (x) {
      const w = () => {
        g(O, `${x.height - x.offsetTop}px`);
      };
      w(), x.addEventListener("resize", w), x.addEventListener("scroll", w), window.__chatVpCleanup = () => {
        x.removeEventListener("resize", w), x.removeEventListener("scroll", w);
      };
    }
    if (Ji(), Bi(), await Qi(), o(en) && o(h).length > 0) {
      const w = o(h).find((N) => N.id === o(en));
      w && g(k, w, !0);
    }
    !o(j) && o(Lt) && await ss(), Ms || (xr(), o(mt) && await Ls());
  });
  function Ji() {
    try {
      const v = new URLSearchParams(window.location.search), b = v.get("explain");
      if (!b) return;
      const [x, w] = b.split(":");
      if (x === "codex" && w)
        g(j, !0), t.ctx.backend.extension_sync_call("codex_viewer", "get_codex_details", JSON.stringify({ codex_id: w })).then((N) => {
          if (N.success) {
            const ue = (typeof N.response == "string" ? JSON.parse(N.response) : N.response).codex?.name || `codex_${w}`, Qe = `/extensions/codex_viewer/${w}`;
            g(te, w, !0), g(s, `Please explain this codex: [${ue}](${Qe})`), setTimeout(() => tn(), 300);
          }
        }).catch((N) => {
          console.error("Failed to fetch codex for explanation:", N), g(j, !1);
        });
      else if (x === "financial_statements") {
        g(j, !0);
        const N = v.get("context") || "";
        g(s, `Please explain the following financial statements of this realm in plain language. Highlight key insights, any concerns, and the overall financial health:

${N}`), setTimeout(() => tn(), 300);
      }
    } catch (v) {
      console.error("Error handling explain param:", v);
    }
  }
  ds(() => {
    o(n), Vn().then(Ns);
  });
  function Ns() {
    o(u) && (o(u).scrollTop = o(u).scrollHeight);
  }
  async function Qi() {
    if (!o(T)) {
      g(T, !0);
      try {
        const v = await fetch(Fi, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        });
        if (!v.ok) throw new Error(`HTTP ${v.status}`);
        const b = await v.json();
        b.assistants && Array.isArray(b.assistants) && (g(h, b.assistants, !0), o(h).length > 0 && !o(k) && g(k, o(h)[0], !0));
      } catch (v) {
        console.error("Error fetching assistants:", v);
      } finally {
        g(T, !1);
      }
    }
  }
  async function ss() {
    if (!o(_)) {
      g(_, !0);
      try {
        const v = new URLSearchParams({
          user_principal: kt || "",
          realm_principal: Cn || "",
          persona: o(k)?.id || "ashoka"
        }), b = await fetch(`${ji}?${v.toString()}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        });
        if (!b.ok) throw new Error(`HTTP ${b.status}`);
        const x = await b.json();
        x.suggestions && Array.isArray(x.suggestions) && g(p, x.suggestions, !0);
      } catch (v) {
        console.error("Error fetching suggestions:", v);
      } finally {
        g(_, !1);
      }
    }
  }
  async function tn() {
    if (!o(s).trim()) return;
    g(l, ""), g(
      n,
      [
        ...o(n),
        { text: o(s), isUser: !0 }
      ],
      !0
    );
    const v = o(s);
    g(s, ""), g(r, !0), Cs(), g(i, o(f) ? "Thinking…" : "", !0);
    try {
      await to();
      const b = t.ctx.config?.network || globalThis.__CANISTER_IDS?.network || (window.location.hostname.includes("icp0.io") ? "test" : "staging"), x = {
        question: v,
        realm_principal: Cn,
        user_principal: kt,
        stream: !0,
        verbosity: 1,
        persona: o(k)?.id || "ashoka",
        network: b,
        ...o(ce) ? { conversation_id: o(ce) } : {}
      };
      if (o(te))
        x.explain_codex_id = o(te), g(te, null);
      else {
        const _e = Hi(o(K)?.uri);
        _e && (x.explain_codex_id = _e);
      }
      o(K) && (x.focus = {
        uri: o(K).uri,
        label: o(K).label,
        snapshot: o(K).snapshot
      });
      const w = await fetch(zi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/event-stream"
        },
        body: JSON.stringify(x),
        signal: AbortSignal.timeout(Oi)
      });
      if (!w.ok) {
        let _e = "";
        try {
          const ke = await w.json();
          _e = typeof ke?.error == "string" ? ke.error : "";
        } catch {
        }
        throw _e ? Object.assign(new Error(_e), { httpStatus: w.status }) : Object.assign(new Error(`HTTP error! Status: ${w.status}`), { httpStatus: w.status });
      }
      const N = w.body?.getReader();
      if (!N) throw new Error("Response body is not readable");
      const wt = new TextDecoder(), ue = { text: "", thinking: "" };
      try {
        for (; ; ) {
          const { done: _e, value: ke } = await N.read();
          if (_e) break;
          const Nn = wt.decode(ke, { stream: !0 }).split(`
`);
          for (const lt of Nn)
            if (lt.startsWith("data: ")) {
              const xt = lt.slice(6);
              if (xt === "[DONE]") continue;
              try {
                Gi(JSON.parse(xt), ue);
              } catch {
                ue.text += xt, ts(ue.text, ue.thinking);
              }
            } else lt.trim() && !lt.startsWith(":") && (ue.text += lt, ts(ue.text, ue.thinking));
        }
      } finally {
        N.releaseLock();
      }
      const Qe = ue.text, Dt = ue.thinking;
      Qe.trim() ? qi(Qe) ? (g(l, "The AI backend is temporarily offline. Please try again in a few minutes."), _r()) : Qe.trim() && An() : o(n).length > 0 && !o(n)[o(n).length - 1].isUser ? g(n, o(n).map((_e, ke) => ke === o(n).length - 1 ? { ..._e, text: "No response from LLM" } : _e), !0) : g(
        n,
        [
          ...o(n),
          { text: "No response from LLM", isUser: !1 }
        ],
        !0
      ), g(r, !1), Cs(), g(j, !1), await ss();
    } catch (b) {
      console.error("Error calling LLM:", b), g(l, br(b, b?.httpStatus), !0), Yi(o(l)) && _r(), o(n).length > 0 && !o(n)[o(n).length - 1].isUser && g(n, o(n).slice(0, -1), !0);
    } finally {
      g(r, !1), Cs(), g(j, !1);
    }
  }
  function Xi() {
    g(l, "");
  }
  async function Ls() {
    if (!(!kt || !o(mt))) {
      g(Zt, !0);
      try {
        const v = new URLSearchParams({
          user_principal: kt,
          realm_principal: Cn
        }), b = await fetch(`${Tn}?${v}`, { headers: { "Content-Type": "application/json" } });
        if (!b.ok) return;
        const x = await b.json();
        g(fe, (x.conversations || []).sort((w, N) => new Date(N.updated_at).getTime() - new Date(w.updated_at).getTime()), !0);
      } catch {
      } finally {
        g(Zt, !1);
      }
    }
  }
  async function yr(v) {
    g(W, !1), g(n, [], !0), g(ce, v.conversation_id, !0);
    const b = o(h).find((x) => x.id === v.persona);
    b && g(k, b, !0);
    try {
      const x = await fetch(`${Tn}/${v.conversation_id}/messages`, { headers: { "Content-Type": "application/json" } });
      if (!x.ok) return;
      const w = await x.json();
      g(n, no(w.messages || []), !0), o(n).some((N) => !N.isUser) && An(), await Vn(), Ns();
    } catch {
    }
  }
  async function Zi() {
    g(W, !1), g(n, [], !0), g(ce, null), g(l, ""), g(p, [], !0), await ss();
  }
  async function Er(v, b) {
    b.stopPropagation();
    try {
      await fetch(`${Tn}/${v}`, { method: "DELETE" }), g(fe, o(fe).filter((x) => x.conversation_id !== v), !0), o(ce) === v && (g(n, [], !0), g(ce, null));
    } catch {
    }
  }
  async function eo() {
    g(W, !0), await Ls();
  }
  function Sr(v) {
    const b = new Date(v), w = (/* @__PURE__ */ new Date()).getTime() - b.getTime(), N = Math.floor(w / 864e5);
    return N === 0 ? b.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : N === 1 ? "Yesterday" : N < 7 ? b.toLocaleDateString([], { weekday: "short" }) : b.toLocaleDateString([], { month: "short", day: "numeric" });
  }
  async function to() {
    if (!(o(ce) || !kt || !o(mt)))
      try {
        const v = await fetch(Tn, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_principal: kt,
            realm_principal: Cn,
            persona: o(k)?.id || "ashoka"
          })
        });
        if (v.ok) {
          const b = await v.json();
          g(ce, b.conversation_id || null, !0);
        }
      } catch {
      }
  }
  function Tr(v, b) {
    const x = () => {
      g(m, b, !0), setTimeout(
        () => {
          g(m, null);
        },
        1500
      );
    }, w = () => {
      const N = document.createElement("textarea");
      N.value = v, N.style.cssText = "position:fixed;top:-9999px;left:-9999px;opacity:0", document.body.appendChild(N), N.focus(), N.select();
      try {
        document.execCommand("copy"), x();
      } catch {
      }
      document.body.removeChild(N);
    };
    navigator.clipboard ? navigator.clipboard.writeText(v).then(x).catch(w) : w();
  }
  function no(v) {
    const b = [];
    for (const x of v) {
      if (!x || typeof x != "object") continue;
      const w = x;
      if (w.role && w.content != null) {
        b.push({ text: String(w.content), isUser: w.role === "user" });
        continue;
      }
      w.question != null && String(w.question).trim() && b.push({ text: String(w.question), isUser: !0 }), w.response != null && String(w.response).trim() && b.push({ text: String(w.response), isUser: !1 });
    }
    return b;
  }
  function so(v) {
    if (!v) return "";
    let b = v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return b = b.replace(/```([^`]*?)```/gs, '<pre class="bg-gray-100 dark:bg-gray-900 rounded-md p-3 my-2 overflow-x-auto text-xs font-mono"><code>$1</code></pre>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/`(.+?)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs font-mono">$1</code>').replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-800">$1</a>').replace(/^### (.+)$/gm, '<h3 class="text-base font-semibold mt-3 mb-1">$1</h3>').replace(/^## (.+)$/gm, '<h2 class="text-lg font-semibold mt-3 mb-1">$1</h2>').replace(/^# (.+)$/gm, '<h1 class="text-xl font-bold mt-3 mb-1">$1</h1>').replace(/^- (.+)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/^(\d+)\. (.+)$/gm, '<li class="ml-4 list-decimal">$2</li>').replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>"), b;
  }
  function Ds() {
    if (o(d)) {
      o(d).style.height = "auto";
      const v = Math.max(40, Math.min(o(d).scrollHeight, 120));
      o(d).style.height = v + "px";
    }
  }
  function ro(v) {
    v.key === "Enter" && !v.shiftKey && (v.preventDefault(), tn()), setTimeout(Ds, 0);
  }
  function io(v) {
    g(s, v, !0), tn();
  }
  function oo(v) {
    g(k, v, !0), g(n, [], !0), ss();
  }
  ds(() => () => {
    kr?.(), mr?.(), at?.(), pe?.(), window.__chatVpCleanup?.();
  });
  var Ar = rn(), ao = Ot(Ar);
  {
    var lo = (v) => {
      var b = rl(), x = P(y(b), 2), w = P(y(x), 4);
      {
        var N = (Q) => {
          var me = Xa();
          an(me, 21, () => o(h), on, (S, F) => {
            var $ = Qa(), q = y($), Z = y(q), se = P(q, 2), U = y(se);
            ge(() => {
              ln($, 1, `settings-assistant-btn ${o(en) === o(F).id || !o(en) && o(h)[0].id === o(F).id ? "selected" : ""}`, "svelte-beco3k"), we(Z, o(F).emoji), we(U, o(F).name);
            }), ne("click", $, () => g(en, o(F).id, !0)), E(S, $);
          }), E(Q, me);
        }, wt = (Q) => {
          var me = Za();
          E(Q, me);
        };
        B(w, (Q) => {
          o(h).length > 0 ? Q(N) : Q(wt, -1);
        });
      }
      var ue = P(x, 2), Qe = P(y(ue), 2), Dt = P(y(Qe), 2), _e = P(Qe, 2), ke = P(y(_e), 2), In = P(ue, 2);
      {
        var Nn = (Q) => {
          var me = sl(), S = P(y(me), 2);
          {
            var F = (L) => {
              var G = tl();
              an(G, 21, () => o(fe), on, (J, ae) => {
                var Xe = el(), ct = y(Xe), Me = y(ct), Be = y(Me), re = P(Me, 2), le = y(re), he = P(ct, 2);
                ge(
                  (ft) => {
                    we(Be, o(ae).title), we(le, `${ft ?? ""} · ${o(ae).message_count ?? ""} message${o(ae).message_count === 1 ? "" : "s"}`);
                  },
                  [() => Sr(o(ae).updated_at)]
                ), ne("click", he, (ft) => Er(o(ae).conversation_id, ft)), E(J, Xe);
              }), E(L, G);
            }, $ = (L) => {
              var G = nl(), J = y(G);
              ge(() => we(J, o(Zt) ? "Loading…" : "No conversations yet.")), E(L, G);
            };
            B(S, (L) => {
              o(fe).length > 0 ? L(F) : L($, -1);
            });
          }
          var q = P(S, 2), Z = y(q);
          {
            var se = (L) => {
              var G = sn("✓ History cleared");
              E(L, G);
            }, U = (L) => {
              var G = sn("Clearing…");
              E(L, G);
            }, Y = (L) => {
              var G = sn("Clear all history");
              E(L, G);
            };
            B(Z, (L) => {
              o(Is) ? L(se) : o(ns) ? L(U, 1) : L(Y, -1);
            });
          }
          ge(() => q.disabled = o(ns) || o(fe).length === 0), ne("click", q, Ki), E(Q, me);
        };
        B(In, (Q) => {
          o(mt) && Q(Nn);
        });
      }
      var lt = P(In, 2), xt = P(y(lt), 4), Ln = P(y(xt), 2), Rs = y(Ln);
      {
        var Os = (Q) => {
          var me = sn("● Online");
          E(Q, me);
        }, Rt = (Q) => {
          var me = sn("● Offline");
          E(Q, me);
        }, Dn = (Q) => {
          var me = sn("Checking…");
          E(Q, me);
        };
        B(Rs, (Q) => {
          o(Pn) === "online" ? Q(Os) : o(Pn) === "offline" ? Q(Rt, 1) : Q(Dn, -1);
        });
      }
      var zs = P(xt, 2);
      ge(() => {
        ln(Dt, 1, `settings-switch ${o(Lt) ? "on" : ""}`, "svelte-beco3k"), is(Dt, "aria-checked", o(Lt)), ln(ke, 1, `settings-switch ${o(Mn) ? "on" : ""}`, "svelte-beco3k"), is(ke, "aria-checked", o(Mn)), ln(Ln, 1, `settings-api-status ${o(Pn) ?? ""}`, "svelte-beco3k");
      }), ne("click", Dt, () => g(Lt, !o(Lt))), ne("click", ke, () => g(Mn, !o(Mn))), ne("click", zs, xr), E(v, b);
    }, co = (v) => {
      var b = Il(), x = y(b);
      {
        var w = (S) => {
          var F = il(), $ = y(F), q = P($, 2);
          ge(() => ln(q, 1, `toolbar-btn ${o(W) ? "active" : ""}`, "svelte-beco3k")), ne("click", $, Zi), ne("click", q, function(...Z) {
            (o(W) ? () => g(W, !1) : eo)?.apply(this, Z);
          }), E(S, F);
        };
        B(x, (S) => {
          o(mt) && S(w);
        });
      }
      var N = P(x, 2);
      {
        var wt = (S) => {
          var F = ol(), $ = y(F), q = y($), Z = P($, 2);
          ge(() => {
            is($, "title", o(K).uri), we(q, o(K).label);
          }), ne("click", Z, Vi), E(S, F);
        };
        B(N, (S) => {
          Ms && o(K)?.label && S(wt);
        });
      }
      var ue = P(N, 2);
      {
        var Qe = (S) => {
          var F = ll();
          an(F, 21, () => o(h), on, ($, q) => {
            var Z = al(), se = y(Z), U = y(se), Y = P(se, 2), L = y(Y);
            ge(() => {
              ln(Z, 1, `assistant-btn ${o(k)?.id === o(q).id ? "active" : ""}`, "svelte-beco3k"), is(Z, "title", o(q).description), we(U, o(q).emoji), we(L, o(q).name);
            }), ne("click", Z, () => oo(o(q))), E($, Z);
          }), E(S, F);
        };
        B(ue, (S) => {
          o(h).length > 1 && S(Qe);
        });
      }
      var Dt = P(ue, 2);
      {
        var _e = (S) => {
          var F = dl(), $ = y(F);
          {
            var q = (U) => {
              var Y = cl();
              E(U, Y);
            }, Z = (U) => {
              var Y = fl();
              E(U, Y);
            }, se = (U) => {
              var Y = rn(), L = Ot(Y);
              an(L, 17, () => o(fe), on, (G, J) => {
                var ae = ul(), Xe = y(ae), ct = y(Xe), Me = y(ct), Be = P(ct, 2), re = y(Be), le = P(Xe, 2);
                ge(
                  (he) => {
                    we(Me, o(J).title), we(re, `${he ?? ""} · ${o(J).message_count ?? ""} msg${o(J).message_count === 1 ? "" : "s"}`);
                  },
                  [() => Sr(o(J).updated_at)]
                ), ne("click", ae, () => yr(o(J))), ne("keydown", ae, (he) => he.key === "Enter" && yr(o(J))), ne("click", le, (he) => Er(o(J).conversation_id, he)), E(G, ae);
              }), E(U, Y);
            };
            B($, (U) => {
              o(Zt) ? U(q) : o(fe).length === 0 ? U(Z, 1) : U(se, -1);
            });
          }
          E(S, F);
        };
        B(Dt, (S) => {
          o(W) && S(_e);
        });
      }
      var ke = P(Dt, 2), In = y(ke);
      {
        var Nn = (S) => {
          var F = hl(), $ = y(F), q = y($);
          {
            var Z = (U) => {
              var Y = vl();
              E(U, Y);
            }, se = (U) => {
              var Y = pl();
              E(U, Y);
            };
            B(q, (U) => {
              o(mt) ? U(Z) : U(se, -1);
            });
          }
          E(S, F);
        }, lt = (S) => {
          var F = Sl(), $ = Ot(F);
          an($, 17, () => o(n), on, (Y, L, G) => {
            var J = rn(), ae = Ot(J);
            {
              var Xe = (Me) => {
                var Be = gl(), re = y(Be), le = y(re), he = y(le);
                {
                  var ft = (Et) => {
                    var On = Vr();
                    E(Et, On);
                  }, Rn = (Et) => {
                    var On = Br();
                    E(Et, On);
                  };
                  B(he, (Et) => {
                    o(m) === G ? Et(ft) : Et(Rn, -1);
                  });
                }
                var Ze = P(le, 2), yt = y(Ze);
                ge(() => we(yt, o(L).text)), ne("click", le, () => Tr(o(L).text, G)), E(Me, Be);
              }, ct = (Me) => {
                var Be = _l(), re = y(Be), le = y(re), he = y(le);
                {
                  var ft = (Ee) => {
                    var ut = bl(), js = P(y(ut), 2), uo = y(js);
                    ge(() => we(uo, o(L).thinking)), E(Ee, ut);
                  };
                  B(he, (Ee) => {
                    o(L).thinking && Ee(ft);
                  });
                }
                var Rn = P(he, 2);
                {
                  var Ze = (Ee) => {
                    var ut = rn(), js = Ot(ut);
                    Ha(js, () => so(o(L).text)), E(Ee, ut);
                  };
                  B(Rn, (Ee) => {
                    o(L).text && Ee(Ze);
                  });
                }
                var yt = P(le, 2), Et = y(yt);
                {
                  var On = (Ee) => {
                    var ut = Vr();
                    E(Ee, ut);
                  }, fo = (Ee) => {
                    var ut = Br();
                    E(Ee, ut);
                  };
                  B(Et, (Ee) => {
                    o(m) === G ? Ee(On) : Ee(fo, -1);
                  });
                }
                ne("click", yt, () => Tr(o(L).text, G)), E(Me, Be);
              };
              B(ae, (Me) => {
                o(L).isUser ? Me(Xe) : Me(ct, -1);
              });
            }
            E(Y, J);
          });
          var q = P($, 2);
          {
            var Z = (Y) => {
              var L = yl(), G = y(L), J = y(G);
              {
                var ae = (re) => {
                  var le = rn(), he = Ot(le);
                  {
                    var ft = (Ze) => {
                      var yt = kl();
                      E(Ze, yt);
                    }, Rn = (Ze) => {
                      var yt = ml();
                      E(Ze, yt);
                    };
                    B(he, (Ze) => {
                      o(j) ? Ze(ft) : !o(f) && !o(i) && Ze(Rn, 1);
                    });
                  }
                  E(re, le);
                };
                B(J, (re) => {
                  o(c) || re(ae);
                });
              }
              var Xe = P(J, 2);
              {
                var ct = (re) => {
                  var le = wl(), he = y(le);
                  ge(() => we(he, o(i))), E(re, le);
                };
                B(Xe, (re) => {
                  o(i) && re(ct);
                });
              }
              var Me = P(Xe, 2);
              {
                var Be = (re) => {
                  var le = xl();
                  E(re, le);
                };
                B(Me, (re) => {
                  !o(c) && !o(i) && o(f) && !o(j) && re(Be);
                });
              }
              E(Y, L);
            };
            B(q, (Y) => {
              o(r) && (!o(c) || o(i)) && Y(Z);
            });
          }
          var se = P(q, 2);
          {
            var U = (Y) => {
              var L = El(), G = y(L), J = y(G), ae = P(G, 2);
              ge(() => we(J, o(l))), ne("click", ae, Xi), E(Y, L);
            };
            B(se, (Y) => {
              o(l) && Y(U);
            });
          }
          E(S, F);
        };
        B(In, (S) => {
          o(n).length === 0 && !o(j) ? S(Nn) : S(lt, -1);
        });
      }
      Ur(ke, (S) => g(u, S), () => o(u));
      var xt = P(ke, 2), Ln = y(xt);
      {
        var Rs = (S) => {
          var F = Cl(), $ = y(F);
          {
            var q = (se) => {
              var U = Tl();
              E(se, U);
            }, Z = (se) => {
              var U = rn(), Y = Ot(U);
              an(Y, 17, () => o(p), on, (L, G) => {
                var J = Al(), ae = y(J);
                ge(() => we(ae, o(G))), ne("click", J, () => io(o(G))), E(L, J);
              }), E(se, U);
            };
            B($, (se) => {
              o(_) ? se(q) : se(Z, -1);
            });
          }
          E(S, F);
        };
        B(Ln, (S) => {
          o(Lt) && (o(p).length > 0 || o(_)) && S(Rs);
        });
      }
      var Os = P(Ln, 2), Rt = y(Os);
      Ur(Rt, (S) => g(d, S), () => o(d));
      var Dn = P(Rt, 2), zs = y(Dn);
      {
        var Q = (S) => {
          var F = Ml();
          E(S, F);
        }, me = (S) => {
          var F = Pl();
          E(S, F);
        };
        B(zs, (S) => {
          o(r) ? S(Q) : S(me, -1);
        });
      }
      ge(
        (S) => {
          Fr(b, `height: ${o(O) ?? ""}`), Fr(ke, o(W) ? "display:none" : ""), Dn.disabled = S;
        },
        [() => o(r) || !o(s).trim()]
      ), ne("keydown", Rt, ro), ne("input", Rt, () => Ds()), $a(Rt, () => o(s), (S) => g(s, S)), ne("click", Dn, () => tn()), E(v, b);
    };
    B(ao, (v) => {
      Ms ? v(co, -1) : v(lo);
    });
  }
  E(e, Ar), ei();
}
Ma(["click", "keydown", "input"]);
function Ol(e, t) {
  const n = La(Ll, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Ra(n);
      } catch {
      }
    }
  };
}
export {
  Ol as default
};
