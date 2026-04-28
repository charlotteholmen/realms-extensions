var di = Object.defineProperty;
var Yr = (e) => {
  throw TypeError(e);
};
var hi = (e, t, r) => t in e ? di(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var de = (e, t, r) => hi(e, typeof t != "symbol" ? t + "" : t, r), _r = (e, t, r) => t.has(e) || Yr("Cannot " + r);
var l = (e, t, r) => (_r(e, t, "read from private field"), r ? r.call(e) : t.get(e)), b = (e, t, r) => t.has(e) ? Yr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), y = (e, t, r, n) => (_r(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), C = (e, t, r) => (_r(e, t, "access private method"), r);
var an = Array.isArray, vi = Array.prototype.indexOf, Et = Array.prototype.includes, or = Array.from, _i = Object.defineProperty, It = Object.getOwnPropertyDescriptor, pi = Object.getOwnPropertyDescriptors, gi = Object.prototype, bi = Array.prototype, on = Object.getPrototypeOf, Kr = Object.isExtensible;
const mi = () => {
};
function wi(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function fn() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const V = 2, jt = 4, fr = 8, un = 1 << 24, Ee = 16, ge = 32, $e = 64, mr = 128, le = 512, O = 1024, L = 2048, Se = 4096, H = 8192, ae = 16384, dt = 32768, Gr = 1 << 25, St = 65536, wr = 1 << 17, yi = 1 << 18, Nt = 1 << 19, xi = 1 << 20, je = 1 << 25, ft = 65536, nr = 1 << 21, Lt = 1 << 22, Ue = 1 << 23, pr = Symbol("$state"), De = new class extends Error {
  constructor() {
    super(...arguments);
    de(this, "name", "StaleReactionError");
    de(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function ki() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ei(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Si(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ti() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ai(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Mi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ni() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ci() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ri() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Di() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Fi = 1, Oi = 2, Ii = 16, Pi = 2, I = Symbol(), cn = "http://www.w3.org/1999/xhtml";
function ji() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Li() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function dn(e) {
  return e === this.v;
}
function Vi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function hn(e) {
  return !Vi(e, this.v);
}
let fe = null;
function Tt(e) {
  fe = e;
}
function vn(e, t = !1, r) {
  fe = {
    p: fe,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      E
    ),
    l: null
  };
}
function _n(e) {
  var t = (
    /** @type {ComponentContext} */
    fe
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      In(n);
  }
  return t.i = !0, fe = t.p, /** @type {T} */
  {};
}
function pn() {
  return !0;
}
let _t = [];
function zi() {
  var e = _t;
  _t = [], wi(e);
}
function bt(e) {
  if (_t.length === 0) {
    var t = _t;
    queueMicrotask(() => {
      t === _t && zi();
    });
  }
  _t.push(e);
}
function gn(e) {
  var t = E;
  if (t === null)
    return k.f |= Ue, e;
  if ((t.f & dt) === 0 && (t.f & jt) === 0)
    throw e;
  qe(e, t);
}
function qe(e, t) {
  for (; t !== null; ) {
    if ((t.f & mr) !== 0) {
      if ((t.f & dt) === 0)
        throw e;
      try {
        t.b.error(e);
        return;
      } catch (r) {
        e = r;
      }
    }
    t = t.parent;
  }
  throw e;
}
const Bi = -7169;
function D(e, t) {
  e.f = e.f & Bi | t;
}
function Rr(e) {
  (e.f & le) !== 0 || e.deps === null ? D(e, O) : D(e, Se);
}
function bn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & V) === 0 || (t.f & ft) === 0 || (t.f ^= ft, bn(
        /** @type {Derived} */
        t.deps
      ));
}
function mn(e, t, r) {
  (e.f & L) !== 0 ? t.add(e) : (e.f & Se) !== 0 && r.add(e), bn(e.deps), D(e, O);
}
const Ge = /* @__PURE__ */ new Set();
let A = null, _e = null, yr = null, gr = !1, pt = null, Xt = null;
var Wr = 0;
let Hi = 1;
var mt, wt, et, Fe, ye, zt, X, Bt, Be, Oe, xe, yt, xt, tt, F, Zt, wn, Jt, xr, Qt, qi;
const sr = class sr {
  constructor() {
    b(this, F);
    de(this, "id", Hi++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    de(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    de(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    b(this, mt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    b(this, wt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    b(this, et, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    b(this, Fe, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    b(this, ye, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    b(this, zt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    b(this, X, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    b(this, Bt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    b(this, Be, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    b(this, Oe, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    b(this, xe, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    b(this, yt, /* @__PURE__ */ new Set());
    de(this, "is_fork", !1);
    b(this, xt, !1);
    /** @type {Set<Batch>} */
    b(this, tt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, xe).has(t) || l(this, xe).set(t, { d: [], m: [] }), l(this, yt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = l(this, xe).get(t);
    if (n) {
      l(this, xe).delete(t);
      for (var i of n.d)
        D(i, L), r(i);
      for (i of n.m)
        D(i, Se), r(i);
    }
    l(this, yt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== I && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Ue) === 0 && (this.current.set(t, [r, n]), _e?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    A = this;
  }
  deactivate() {
    A = null, _e = null;
  }
  flush() {
    try {
      gr = !0, A = this, C(this, F, Jt).call(this);
    } finally {
      Wr = 0, yr = null, pt = null, Xt = null, gr = !1, A = null, _e = null, st.clear();
    }
  }
  discard() {
    for (const t of l(this, wt)) t(this);
    l(this, wt).clear(), l(this, et).clear(), Ge.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, Bt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = l(this, Fe).get(r) ?? 0;
    if (l(this, Fe).set(r, n + 1), t) {
      let i = l(this, ye).get(r) ?? 0;
      l(this, ye).set(r, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let i = l(this, Fe).get(r) ?? 0;
    if (i === 1 ? l(this, Fe).delete(r) : l(this, Fe).set(r, i - 1), t) {
      let s = l(this, ye).get(r) ?? 0;
      s === 1 ? l(this, ye).delete(r) : l(this, ye).set(r, s - 1);
    }
    l(this, xt) || n || (y(this, xt, !0), bt(() => {
      y(this, xt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      l(this, Be).add(n);
    for (const n of r)
      l(this, Oe).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, mt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, wt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    l(this, et).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, et)) t(this);
    l(this, et).clear();
  }
  settled() {
    return (l(this, zt) ?? y(this, zt, fn())).promise;
  }
  static ensure() {
    if (A === null) {
      const t = A = new sr();
      gr || (Ge.add(A), bt(() => {
        A === t && t.flush();
      }));
    }
    return A;
  }
  apply() {
    {
      _e = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (yr = t, t.b?.is_pending && (t.f & (jt | fr | un)) !== 0 && (t.f & dt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (pt !== null && r === E && (k === null || (k.f & V) === 0))
        return;
      if ((n & ($e | ge)) !== 0) {
        if ((n & O) === 0)
          return;
        r.f ^= O;
      }
    }
    l(this, X).push(r);
  }
};
mt = new WeakMap(), wt = new WeakMap(), et = new WeakMap(), Fe = new WeakMap(), ye = new WeakMap(), zt = new WeakMap(), X = new WeakMap(), Bt = new WeakMap(), Be = new WeakMap(), Oe = new WeakMap(), xe = new WeakMap(), yt = new WeakMap(), xt = new WeakMap(), tt = new WeakMap(), F = new WeakSet(), Zt = function() {
  return this.is_fork || l(this, ye).size > 0;
}, wn = function() {
  for (const n of l(this, tt))
    for (const i of l(n, ye).keys()) {
      for (var t = !1, r = i; r.parent !== null; ) {
        if (l(this, xe).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, Jt = function() {
  var o;
  if (Wr++ > 1e3 && (Ge.delete(this), Ui()), !C(this, F, Zt).call(this)) {
    for (const a of l(this, Be))
      l(this, Oe).delete(a), D(a, L), this.schedule(a);
    for (const a of l(this, Oe))
      D(a, Se), this.schedule(a);
  }
  const t = l(this, X);
  y(this, X, []), this.apply();
  var r = pt = [], n = [], i = Xt = [];
  for (const a of t)
    try {
      C(this, F, xr).call(this, a, r, n);
    } catch (f) {
      throw kn(a), f;
    }
  if (A = null, i.length > 0) {
    var s = sr.ensure();
    for (const a of i)
      s.schedule(a);
  }
  if (pt = null, Xt = null, C(this, F, Zt).call(this) || C(this, F, wn).call(this)) {
    C(this, F, Qt).call(this, n), C(this, F, Qt).call(this, r);
    for (const [a, f] of l(this, xe))
      xn(a, f);
  } else {
    l(this, Fe).size === 0 && Ge.delete(this), l(this, Be).clear(), l(this, Oe).clear();
    for (const a of l(this, mt)) a(this);
    l(this, mt).clear(), Xr(n), Xr(r), l(this, zt)?.resolve();
  }
  var u = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    A
  );
  if (l(this, X).length > 0) {
    const a = u ?? (u = this);
    l(a, X).push(...l(this, X).filter((f) => !l(a, X).includes(f)));
  }
  u !== null && (Ge.add(u), C(o = u, F, Jt).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
xr = function(t, r, n) {
  t.f ^= O;
  for (var i = t.first; i !== null; ) {
    var s = i.f, u = (s & (ge | $e)) !== 0, o = u && (s & O) !== 0, a = o || (s & H) !== 0 || l(this, xe).has(i);
    if (!a && i.fn !== null) {
      u ? i.f ^= O : (s & jt) !== 0 ? r.push(i) : Yt(i) && ((s & Ee) !== 0 && l(this, Oe).add(i), Mt(i));
      var f = i.first;
      if (f !== null) {
        i = f;
        continue;
      }
    }
    for (; i !== null; ) {
      var h = i.next;
      if (h !== null) {
        i = h;
        break;
      }
      i = i.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
Qt = function(t) {
  for (var r = 0; r < t.length; r += 1)
    mn(t[r], l(this, Be), l(this, Oe));
}, qi = function() {
  var h, _, v;
  for (const d of Ge) {
    var t = d.id < this.id, r = [];
    for (const [c, [m, w]] of this.current) {
      if (d.current.has(c)) {
        var n = (
          /** @type {[any, boolean]} */
          d.current.get(c)[0]
        );
        if (t && m !== n)
          d.current.set(c, [m, w]);
        else
          continue;
      }
      r.push(c);
    }
    var i = [...d.current.keys()].filter((c) => !this.current.has(c));
    if (i.length === 0)
      t && d.discard();
    else if (r.length > 0) {
      if (t)
        for (const c of l(this, yt))
          d.unskip_effect(c, (m) => {
            var w;
            (m.f & (Ee | Lt)) !== 0 ? d.schedule(m) : C(w = d, F, Qt).call(w, [m]);
          });
      d.activate();
      var s = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
      for (var o of r)
        yn(o, i, s, u);
      u = /* @__PURE__ */ new Map();
      var a = [...d.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of l(this, Bt))
        (c.f & (ae | H | wr)) === 0 && Dr(c, a, u) && ((c.f & (Lt | Ee)) !== 0 ? (D(c, L), d.schedule(c)) : l(d, Be).add(c));
      if (l(d, X).length > 0) {
        d.apply();
        for (var f of l(d, X))
          C(h = d, F, xr).call(h, f, [], []);
        y(d, X, []);
      }
      d.deactivate();
    }
  }
  for (const d of Ge)
    l(d, tt).has(this) && (l(d, tt).delete(this), l(d, tt).size === 0 && !C(_ = d, F, Zt).call(_) && (d.activate(), C(v = d, F, Jt).call(v)));
};
let ut = sr;
function Ui() {
  try {
    Mi();
  } catch (e) {
    qe(e, yr);
  }
}
let Re = null;
function Xr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (ae | H)) === 0 && Yt(n) && (Re = /* @__PURE__ */ new Set(), Mt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && jn(n), Re?.size > 0)) {
        st.clear();
        for (const i of Re) {
          if ((i.f & (ae | H)) !== 0) continue;
          const s = [i];
          let u = i.parent;
          for (; u !== null; )
            Re.has(u) && (Re.delete(u), s.push(u)), u = u.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const a = s[o];
            (a.f & (ae | H)) === 0 && Mt(a);
          }
        }
        Re.clear();
      }
    }
    Re = null;
  }
}
function yn(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & V) !== 0 ? yn(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (Lt | Ee)) !== 0 && (s & L) === 0 && Dr(i, t, n) && (D(i, L), Fr(
        /** @type {Effect} */
        i
      ));
    }
}
function Dr(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Et.call(t, i))
        return !0;
      if ((i.f & V) !== 0 && Dr(
        /** @type {Derived} */
        i,
        t,
        r
      ))
        return r.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return r.set(e, !1), !1;
}
function Fr(e) {
  A.schedule(e);
}
function xn(e, t) {
  if (!((e.f & ge) !== 0 && (e.f & O) !== 0)) {
    (e.f & L) !== 0 ? t.d.push(e) : (e.f & Se) !== 0 && t.m.push(e), D(e, O);
    for (var r = e.first; r !== null; )
      xn(r, t), r = r.next;
  }
}
function kn(e) {
  D(e, O);
  for (var t = e.first; t !== null; )
    kn(t), t = t.next;
}
function $i(e) {
  let t = 0, r = ct(0), n;
  return () => {
    Pr() && (p(r), vs(() => (t === 0 && (n = ms(() => e(() => Pt(r)))), t += 1, () => {
      bt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Pt(r));
      });
    })));
  };
}
var Yi = St | Nt;
function Ki(e, t, r, n) {
  new Gi(e, t, r, n);
}
var re, Cr, ne, rt, q, ie, B, Z, Ie, nt, He, kt, Ht, qt, Pe, lr, R, Wi, Xi, Zi, kr, er, tr, Er, Sr;
class Gi {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    b(this, R);
    /** @type {Boundary | null} */
    de(this, "parent");
    de(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    de(this, "transform_error");
    /** @type {TemplateNode} */
    b(this, re);
    /** @type {TemplateNode | null} */
    b(this, Cr, null);
    /** @type {BoundaryProps} */
    b(this, ne);
    /** @type {((anchor: Node) => void)} */
    b(this, rt);
    /** @type {Effect} */
    b(this, q);
    /** @type {Effect | null} */
    b(this, ie, null);
    /** @type {Effect | null} */
    b(this, B, null);
    /** @type {Effect | null} */
    b(this, Z, null);
    /** @type {DocumentFragment | null} */
    b(this, Ie, null);
    b(this, nt, 0);
    b(this, He, 0);
    b(this, kt, !1);
    /** @type {Set<Effect>} */
    b(this, Ht, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    b(this, qt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    b(this, Pe, null);
    b(this, lr, $i(() => (y(this, Pe, ct(l(this, nt))), () => {
      y(this, Pe, null);
    })));
    y(this, re, t), y(this, ne, r), y(this, rt, (s) => {
      var u = (
        /** @type {Effect} */
        E
      );
      u.b = this, u.f |= mr, n(s);
    }), this.parent = /** @type {Effect} */
    E.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), y(this, q, jr(() => {
      C(this, R, kr).call(this);
    }, Yi));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    mn(t, l(this, Ht), l(this, qt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, ne).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    C(this, R, Er).call(this, t, r), y(this, nt, l(this, nt) + t), !(!l(this, Pe) || l(this, kt)) && (y(this, kt, !0), bt(() => {
      y(this, kt, !1), l(this, Pe) && At(l(this, Pe), l(this, nt));
    }));
  }
  get_effect_pending() {
    return l(this, lr).call(this), p(
      /** @type {Source<number>} */
      l(this, Pe)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, ne).onerror && !l(this, ne).failed)
      throw t;
    A?.is_fork ? (l(this, ie) && A.skip_effect(l(this, ie)), l(this, B) && A.skip_effect(l(this, B)), l(this, Z) && A.skip_effect(l(this, Z)), A.on_fork_commit(() => {
      C(this, R, Sr).call(this, t);
    })) : C(this, R, Sr).call(this, t);
  }
}
re = new WeakMap(), Cr = new WeakMap(), ne = new WeakMap(), rt = new WeakMap(), q = new WeakMap(), ie = new WeakMap(), B = new WeakMap(), Z = new WeakMap(), Ie = new WeakMap(), nt = new WeakMap(), He = new WeakMap(), kt = new WeakMap(), Ht = new WeakMap(), qt = new WeakMap(), Pe = new WeakMap(), lr = new WeakMap(), R = new WeakSet(), Wi = function() {
  try {
    y(this, ie, se(() => l(this, rt).call(this, l(this, re))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Xi = function(t) {
  const r = l(this, ne).failed;
  r && y(this, Z, se(() => {
    r(
      l(this, re),
      () => t,
      () => () => {
      }
    );
  }));
}, Zi = function() {
  const t = l(this, ne).pending;
  t && (this.is_pending = !0, y(this, B, se(() => t(l(this, re)))), bt(() => {
    var r = y(this, Ie, document.createDocumentFragment()), n = lt();
    r.append(n), y(this, ie, C(this, R, tr).call(this, () => se(() => l(this, rt).call(this, n)))), l(this, He) === 0 && (l(this, re).before(r), y(this, Ie, null), at(
      /** @type {Effect} */
      l(this, B),
      () => {
        y(this, B, null);
      }
    ), C(this, R, er).call(
      this,
      /** @type {Batch} */
      A
    ));
  }));
}, kr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), y(this, He, 0), y(this, nt, 0), y(this, ie, se(() => {
      l(this, rt).call(this, l(this, re));
    })), l(this, He) > 0) {
      var t = y(this, Ie, document.createDocumentFragment());
      zr(l(this, ie), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        l(this, ne).pending
      );
      y(this, B, se(() => r(l(this, re))));
    } else
      C(this, R, er).call(
        this,
        /** @type {Batch} */
        A
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
er = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, Ht), l(this, qt));
}, /**
 * @template T
 * @param {() => T} fn
 */
tr = function(t) {
  var r = E, n = k, i = fe;
  Te(l(this, q)), ue(l(this, q)), Tt(l(this, q).ctx);
  try {
    return ut.ensure(), t();
  } catch (s) {
    return gn(s), null;
  } finally {
    Te(r), ue(n), Tt(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Er = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && C(n = this.parent, R, Er).call(n, t, r);
    return;
  }
  y(this, He, l(this, He) + t), l(this, He) === 0 && (C(this, R, er).call(this, r), l(this, B) && at(l(this, B), () => {
    y(this, B, null);
  }), l(this, Ie) && (l(this, re).before(l(this, Ie)), y(this, Ie, null)));
}, /**
 * @param {unknown} error
 */
Sr = function(t) {
  l(this, ie) && (Y(l(this, ie)), y(this, ie, null)), l(this, B) && (Y(l(this, B)), y(this, B, null)), l(this, Z) && (Y(l(this, Z)), y(this, Z, null));
  var r = l(this, ne).onerror;
  let n = l(this, ne).failed;
  var i = !1, s = !1;
  const u = () => {
    if (i) {
      Li();
      return;
    }
    i = !0, s && Di(), l(this, Z) !== null && at(l(this, Z), () => {
      y(this, Z, null);
    }), C(this, R, tr).call(this, () => {
      C(this, R, kr).call(this);
    });
  }, o = (a) => {
    try {
      s = !0, r?.(a, u), s = !1;
    } catch (f) {
      qe(f, l(this, q) && l(this, q).parent);
    }
    n && y(this, Z, C(this, R, tr).call(this, () => {
      try {
        return se(() => {
          var f = (
            /** @type {Effect} */
            E
          );
          f.b = this, f.f |= mr, n(
            l(this, re),
            () => a,
            () => u
          );
        });
      } catch (f) {
        return qe(
          f,
          /** @type {Effect} */
          l(this, q).parent
        ), null;
      }
    }));
  };
  bt(() => {
    var a;
    try {
      a = this.transform_error(t);
    } catch (f) {
      qe(f, l(this, q) && l(this, q).parent);
      return;
    }
    a !== null && typeof a == "object" && typeof /** @type {any} */
    a.then == "function" ? a.then(
      o,
      /** @param {unknown} e */
      (f) => qe(f, l(this, q) && l(this, q).parent)
    ) : o(a);
  });
};
function Ji(e, t, r, n) {
  const i = Or;
  var s = e.filter((v) => !v.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(i));
    return;
  }
  var u = (
    /** @type {Effect} */
    E
  ), o = Qi(), a = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((v) => v.promise)) : null;
  function f(v) {
    o();
    try {
      n(v);
    } catch (d) {
      (u.f & ae) === 0 && qe(d, u);
    }
    ir();
  }
  if (r.length === 0) {
    a.then(() => f(t.map(i)));
    return;
  }
  var h = En();
  function _() {
    Promise.all(r.map((v) => /* @__PURE__ */ es(v))).then((v) => f([...t.map(i), ...v])).catch((v) => qe(v, u)).finally(() => h());
  }
  a ? a.then(() => {
    o(), _(), ir();
  }) : _();
}
function Qi() {
  var e = (
    /** @type {Effect} */
    E
  ), t = k, r = fe, n = (
    /** @type {Batch} */
    A
  );
  return function(s = !0) {
    Te(e), ue(t), Tt(r), s && (e.f & ae) === 0 && (n?.activate(), n?.apply());
  };
}
function ir(e = !0) {
  Te(null), ue(null), Tt(null), e && A?.deactivate();
}
function En() {
  var e = (
    /** @type {Effect} */
    E
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    A
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (i = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function Or(e) {
  var t = V | L;
  return E !== null && (E.f |= Nt), {
    ctx: fe,
    deps: null,
    effects: null,
    equals: dn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      I
    ),
    wv: 0,
    parent: E,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function es(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    E
  );
  n === null && ki();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = ct(
    /** @type {V} */
    I
  ), u = !k, o = /* @__PURE__ */ new Map();
  return hs(() => {
    var a = (
      /** @type {Effect} */
      E
    ), f = fn();
    i = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).finally(ir);
    } catch (d) {
      f.reject(d), ir();
    }
    var h = (
      /** @type {Batch} */
      A
    );
    if (u) {
      if ((a.f & dt) !== 0)
        var _ = En();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        o.get(h)?.reject(De), o.delete(h);
      else {
        for (const d of o.values())
          d.reject(De);
        o.clear();
      }
      o.set(h, f);
    }
    const v = (d, c = void 0) => {
      if (_) {
        var m = c === De;
        _(m);
      }
      if (!(c === De || (a.f & ae) !== 0)) {
        if (h.activate(), c)
          s.f |= Ue, At(s, c);
        else {
          (s.f & Ue) !== 0 && (s.f ^= Ue), At(s, d);
          for (const [w, N] of o) {
            if (o.delete(w), w === h) break;
            N.reject(De);
          }
        }
        h.deactivate();
      }
    };
    f.promise.then(v, (d) => v(null, d || "unknown"));
  }), cs(() => {
    for (const a of o.values())
      a.reject(De);
  }), new Promise((a) => {
    function f(h) {
      function _() {
        h === i ? a(s) : f(i);
      }
      h.then(_, _);
    }
    f(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Zr(e) {
  const t = /* @__PURE__ */ Or(e);
  return zn(t), t;
}
// @__NO_SIDE_EFFECTS__
function ts(e) {
  const t = /* @__PURE__ */ Or(e);
  return t.equals = hn, t;
}
function rs(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Y(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Ir(e) {
  var t, r = E, n = e.parent;
  if (!Ye && n !== null && (n.f & (ae | H)) !== 0)
    return ji(), e.v;
  Te(n);
  try {
    e.f &= ~ft, rs(e), t = Un(e);
  } finally {
    Te(r);
  }
  return t;
}
function Sn(e) {
  var t = Ir(e);
  if (!e.equals(t) && (e.wv = Hn(), (!A?.is_fork || e.deps === null) && (A !== null ? A.capture(e, t, !0) : e.v = t, e.deps === null))) {
    D(e, O);
    return;
  }
  Ye || (_e !== null ? (Pr() || A?.is_fork) && _e.set(e, t) : Rr(e));
}
function ns(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(De), t.teardown = mi, t.ac = null, Vt(t, 0), Lr(t));
}
function Tn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Mt(t);
}
let Tr = /* @__PURE__ */ new Set();
const st = /* @__PURE__ */ new Map();
let An = !1;
function ct(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: dn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function Q(e, t) {
  const r = ct(e);
  return zn(r), r;
}
// @__NO_SIDE_EFFECTS__
function is(e, t = !1, r = !0) {
  const n = ct(e);
  return t || (n.equals = hn), n;
}
function $(e, t, r = !1) {
  k !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!pe || (k.f & wr) !== 0) && pn() && (k.f & (V | Ee | Lt | wr)) !== 0 && (oe === null || !Et.call(oe, e)) && Ri();
  let n = r ? gt(t) : t;
  return At(e, n, Xt);
}
function At(e, t, r = null) {
  if (!e.equals(t)) {
    st.set(e, Ye ? t : e.v);
    var n = ut.ensure();
    if (n.capture(e, t), (e.f & V) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & L) !== 0 && Ir(i), _e === null && Rr(i);
    }
    e.wv = Hn(), Mn(e, L, r), E !== null && (E.f & O) !== 0 && (E.f & (ge | $e)) === 0 && (te === null ? gs([e]) : te.push(e)), !n.is_fork && Tr.size > 0 && !An && ss();
  }
  return t;
}
function ss() {
  An = !1;
  for (const e of Tr)
    (e.f & O) !== 0 && D(e, Se), Yt(e) && Mt(e);
  Tr.clear();
}
function Pt(e) {
  $(e, e.v + 1);
}
function Mn(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var u = n[s], o = u.f, a = (o & L) === 0;
      if (a && D(u, t), (o & V) !== 0) {
        var f = (
          /** @type {Derived} */
          u
        );
        _e?.delete(f), (o & ft) === 0 && (o & le && (E === null || (E.f & nr) === 0) && (u.f |= ft), Mn(f, Se, r));
      } else if (a) {
        var h = (
          /** @type {Effect} */
          u
        );
        (o & Ee) !== 0 && Re !== null && Re.add(h), r !== null ? r.push(h) : Fr(h);
      }
    }
}
function gt(e) {
  if (typeof e != "object" || e === null || pr in e)
    return e;
  const t = on(e);
  if (t !== gi && t !== bi)
    return e;
  var r = /* @__PURE__ */ new Map(), n = an(e), i = /* @__PURE__ */ Q(0), s = ot, u = (o) => {
    if (ot === s)
      return o();
    var a = k, f = ot;
    ue(null), en(s);
    var h = o();
    return ue(a), en(f), h;
  };
  return n && r.set("length", /* @__PURE__ */ Q(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, a, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Ni();
        var h = r.get(a);
        return h === void 0 ? u(() => {
          var _ = /* @__PURE__ */ Q(f.value);
          return r.set(a, _), _;
        }) : $(h, f.value, !0), !0;
      },
      deleteProperty(o, a) {
        var f = r.get(a);
        if (f === void 0) {
          if (a in o) {
            const h = u(() => /* @__PURE__ */ Q(I));
            r.set(a, h), Pt(i);
          }
        } else
          $(f, I), Pt(i);
        return !0;
      },
      get(o, a, f) {
        if (a === pr)
          return e;
        var h = r.get(a), _ = a in o;
        if (h === void 0 && (!_ || It(o, a)?.writable) && (h = u(() => {
          var d = gt(_ ? o[a] : I), c = /* @__PURE__ */ Q(d);
          return c;
        }), r.set(a, h)), h !== void 0) {
          var v = p(h);
          return v === I ? void 0 : v;
        }
        return Reflect.get(o, a, f);
      },
      getOwnPropertyDescriptor(o, a) {
        var f = Reflect.getOwnPropertyDescriptor(o, a);
        if (f && "value" in f) {
          var h = r.get(a);
          h && (f.value = p(h));
        } else if (f === void 0) {
          var _ = r.get(a), v = _?.v;
          if (_ !== void 0 && v !== I)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return f;
      },
      has(o, a) {
        if (a === pr)
          return !0;
        var f = r.get(a), h = f !== void 0 && f.v !== I || Reflect.has(o, a);
        if (f !== void 0 || E !== null && (!h || It(o, a)?.writable)) {
          f === void 0 && (f = u(() => {
            var v = h ? gt(o[a]) : I, d = /* @__PURE__ */ Q(v);
            return d;
          }), r.set(a, f));
          var _ = p(f);
          if (_ === I)
            return !1;
        }
        return h;
      },
      set(o, a, f, h) {
        var _ = r.get(a), v = a in o;
        if (n && a === "length")
          for (var d = f; d < /** @type {Source<number>} */
          _.v; d += 1) {
            var c = r.get(d + "");
            c !== void 0 ? $(c, I) : d in o && (c = u(() => /* @__PURE__ */ Q(I)), r.set(d + "", c));
          }
        if (_ === void 0)
          (!v || It(o, a)?.writable) && (_ = u(() => /* @__PURE__ */ Q(void 0)), $(_, gt(f)), r.set(a, _));
        else {
          v = _.v !== I;
          var m = u(() => gt(f));
          $(_, m);
        }
        var w = Reflect.getOwnPropertyDescriptor(o, a);
        if (w?.set && w.set.call(h, f), !v) {
          if (n && typeof a == "string") {
            var N = (
              /** @type {Source<number>} */
              r.get("length")
            ), T = Number(a);
            Number.isInteger(T) && T >= N.v && $(N, T + 1);
          }
          Pt(i);
        }
        return !0;
      },
      ownKeys(o) {
        p(i);
        var a = Reflect.ownKeys(o).filter((_) => {
          var v = r.get(_);
          return v === void 0 || v.v !== I;
        });
        for (var [f, h] of r)
          h.v !== I && !(f in o) && a.push(f);
        return a;
      },
      setPrototypeOf() {
        Ci();
      }
    }
  );
}
var Jr, Nn, Cn, Rn;
function ls() {
  if (Jr === void 0) {
    Jr = window, Nn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Cn = It(t, "firstChild").get, Rn = It(t, "nextSibling").get, Kr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Kr(r) && (r.__t = void 0);
  }
}
function lt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Dn(e) {
  return (
    /** @type {TemplateNode | null} */
    Cn.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function ur(e) {
  return (
    /** @type {TemplateNode | null} */
    Rn.call(e)
  );
}
function M(e, t) {
  return /* @__PURE__ */ Dn(e);
}
function j(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ ur(n);
  return n;
}
function as(e) {
  e.textContent = "";
}
function Fn() {
  return !1;
}
function os(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(cn, e, void 0)
  );
}
function On(e) {
  var t = k, r = E;
  ue(null), Te(null);
  try {
    return e();
  } finally {
    ue(t), Te(r);
  }
}
function fs(e) {
  E === null && (k === null && Ai(), Ti()), Ye && Si();
}
function us(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Ke(e, t) {
  var r = E;
  r !== null && (r.f & H) !== 0 && (e |= H);
  var n = {
    ctx: fe,
    deps: null,
    nodes: null,
    f: e | L | le,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  A?.register_created_effect(n);
  var i = n;
  if ((e & jt) !== 0)
    pt !== null ? pt.push(n) : ut.ensure().schedule(n);
  else if (t !== null) {
    try {
      Mt(n);
    } catch (u) {
      throw Y(n), u;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Nt) === 0 && (i = i.first, (e & Ee) !== 0 && (e & St) !== 0 && i !== null && (i.f |= St));
  }
  if (i !== null && (i.parent = r, r !== null && us(i, r), k !== null && (k.f & V) !== 0 && (e & $e) === 0)) {
    var s = (
      /** @type {Derived} */
      k
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function Pr() {
  return k !== null && !pe;
}
function cs(e) {
  const t = Ke(fr, null);
  return D(t, O), t.teardown = e, t;
}
function br(e) {
  fs();
  var t = (
    /** @type {Effect} */
    E.f
  ), r = !k && (t & ge) !== 0 && (t & dt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      fe
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return In(e);
}
function In(e) {
  return Ke(jt | xi, e);
}
function ds(e) {
  ut.ensure();
  const t = Ke($e | Nt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? at(t, () => {
      Y(t), n(void 0);
    }) : (Y(t), n(void 0));
  });
}
function hs(e) {
  return Ke(Lt | Nt, e);
}
function vs(e, t = 0) {
  return Ke(fr | t, e);
}
function We(e, t = [], r = [], n = []) {
  Ji(n, t, r, (i) => {
    Ke(fr, () => e(...i.map(p)));
  });
}
function jr(e, t = 0) {
  var r = Ke(Ee | t, e);
  return r;
}
function se(e) {
  return Ke(ge | Nt, e);
}
function Pn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Ye, n = k;
    Qr(!0), ue(null);
    try {
      t.call(null);
    } finally {
      Qr(r), ue(n);
    }
  }
}
function Lr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && On(() => {
      i.abort(De);
    });
    var n = r.next;
    (r.f & $e) !== 0 ? r.parent = null : Y(r, t), r = n;
  }
}
function _s(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ge) === 0 && Y(t), t = r;
  }
}
function Y(e, t = !0) {
  var r = !1;
  (t || (e.f & yi) !== 0) && e.nodes !== null && e.nodes.end !== null && (ps(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), D(e, Gr), Lr(e, t && !r), Vt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  Pn(e), e.f ^= Gr, e.f |= ae;
  var i = e.parent;
  i !== null && i.first !== null && jn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ps(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ ur(e);
    e.remove(), e = r;
  }
}
function jn(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function at(e, t, r = !0) {
  var n = [];
  Ln(e, n, !0);
  var i = () => {
    r && Y(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var u = () => --s || i();
    for (var o of n)
      o.out(u);
  } else
    i();
}
function Ln(e, t, r) {
  if ((e.f & H) === 0) {
    e.f ^= H;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & $e) === 0) {
        var u = (i.f & St) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & ge) !== 0 && (e.f & Ee) !== 0;
        Ln(i, t, u ? r : !1);
      }
      i = s;
    }
  }
}
function Vr(e) {
  Vn(e, !0);
}
function Vn(e, t) {
  if ((e.f & H) !== 0) {
    e.f ^= H, (e.f & O) === 0 && (D(e, L), ut.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & St) !== 0 || (r.f & ge) !== 0;
      Vn(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const u of s)
        (u.is_global || t) && u.in();
  }
}
function zr(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ ur(r);
      t.append(r), r = i;
    }
}
let rr = !1, Ye = !1;
function Qr(e) {
  Ye = e;
}
let k = null, pe = !1;
function ue(e) {
  k = e;
}
let E = null;
function Te(e) {
  E = e;
}
let oe = null;
function zn(e) {
  k !== null && (oe === null ? oe = [e] : oe.push(e));
}
let U = null, W = 0, te = null;
function gs(e) {
  te = e;
}
let Bn = 1, Je = 0, ot = Je;
function en(e) {
  ot = e;
}
function Hn() {
  return ++Bn;
}
function Yt(e) {
  var t = e.f;
  if ((t & L) !== 0)
    return !0;
  if (t & V && (e.f &= ~ft), (t & Se) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (Yt(
        /** @type {Derived} */
        s
      ) && Sn(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & le) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    _e === null && D(e, O);
  }
  return !1;
}
function qn(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(oe !== null && Et.call(oe, e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & V) !== 0 ? qn(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? D(s, L) : (s.f & O) !== 0 && D(s, Se), Fr(
        /** @type {Effect} */
        s
      ));
    }
}
function Un(e) {
  var m;
  var t = U, r = W, n = te, i = k, s = oe, u = fe, o = pe, a = ot, f = e.f;
  U = /** @type {null | Value[]} */
  null, W = 0, te = null, k = (f & (ge | $e)) === 0 ? e : null, oe = null, Tt(e.ctx), pe = !1, ot = ++Je, e.ac !== null && (On(() => {
    e.ac.abort(De);
  }), e.ac = null);
  try {
    e.f |= nr;
    var h = (
      /** @type {Function} */
      e.fn
    ), _ = h();
    e.f |= dt;
    var v = e.deps, d = A?.is_fork;
    if (U !== null) {
      var c;
      if (d || Vt(e, W), v !== null && W > 0)
        for (v.length = W + U.length, c = 0; c < U.length; c++)
          v[W + c] = U[c];
      else
        e.deps = v = U;
      if (Pr() && (e.f & le) !== 0)
        for (c = W; c < v.length; c++)
          ((m = v[c]).reactions ?? (m.reactions = [])).push(e);
    } else !d && v !== null && W < v.length && (Vt(e, W), v.length = W);
    if (pn() && te !== null && !pe && v !== null && (e.f & (V | Se | L)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      te.length; c++)
        qn(
          te[c],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Je++, i.deps !== null)
        for (let w = 0; w < r; w += 1)
          i.deps[w].rv = Je;
      if (t !== null)
        for (const w of t)
          w.rv = Je;
      te !== null && (n === null ? n = te : n.push(.../** @type {Source[]} */
      te));
    }
    return (e.f & Ue) !== 0 && (e.f ^= Ue), _;
  } catch (w) {
    return gn(w);
  } finally {
    e.f ^= nr, U = t, W = r, te = n, k = i, oe = s, Tt(u), pe = o, ot = a;
  }
}
function bs(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = vi.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & V) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (U === null || !Et.call(U, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & le) !== 0 && (s.f ^= le, s.f &= ~ft), s.v !== I && Rr(s), ns(s), Vt(s, 0);
  }
}
function Vt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      bs(e, r[n]);
}
function Mt(e) {
  var t = e.f;
  if ((t & ae) === 0) {
    D(e, O);
    var r = E, n = rr;
    E = e, rr = !0;
    try {
      (t & (Ee | un)) !== 0 ? _s(e) : Lr(e), Pn(e);
      var i = Un(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Bn;
      var s;
    } finally {
      rr = n, E = r;
    }
  }
}
function p(e) {
  var t = e.f, r = (t & V) !== 0;
  if (k !== null && !pe) {
    var n = E !== null && (E.f & ae) !== 0;
    if (!n && (oe === null || !Et.call(oe, e))) {
      var i = k.deps;
      if ((k.f & nr) !== 0)
        e.rv < Je && (e.rv = Je, U === null && i !== null && i[W] === e ? W++ : U === null ? U = [e] : U.push(e));
      else {
        (k.deps ?? (k.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [k] : Et.call(s, k) || s.push(k);
      }
    }
  }
  if (Ye && st.has(e))
    return st.get(e);
  if (r) {
    var u = (
      /** @type {Derived} */
      e
    );
    if (Ye) {
      var o = u.v;
      return ((u.f & O) === 0 && u.reactions !== null || Yn(u)) && (o = Ir(u)), st.set(u, o), o;
    }
    var a = (u.f & le) === 0 && !pe && k !== null && (rr || (k.f & le) !== 0), f = (u.f & dt) === 0;
    Yt(u) && (a && (u.f |= le), Sn(u)), a && !f && (Tn(u), $n(u));
  }
  if (_e?.has(e))
    return _e.get(e);
  if ((e.f & Ue) !== 0)
    throw e.v;
  return e.v;
}
function $n(e) {
  if (e.f |= le, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & V) !== 0 && (t.f & le) === 0 && (Tn(
        /** @type {Derived} */
        t
      ), $n(
        /** @type {Derived} */
        t
      ));
}
function Yn(e) {
  if (e.v === I) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (st.has(t) || (t.f & V) !== 0 && Yn(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ms(e) {
  var t = pe;
  try {
    return pe = !0, e();
  } finally {
    pe = t;
  }
}
const ws = ["touchstart", "touchmove"];
function ys(e) {
  return ws.includes(e);
}
const Qe = Symbol("events"), Kn = /* @__PURE__ */ new Set(), Ar = /* @__PURE__ */ new Set();
function vt(e, t, r) {
  (t[Qe] ?? (t[Qe] = {}))[e] = r;
}
function xs(e) {
  for (var t = 0; t < e.length; t++)
    Kn.add(e[t]);
  for (var r of Ar)
    r(e);
}
let tn = null;
function rn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  tn = e;
  var u = 0, o = tn === e && e[Qe];
  if (o) {
    var a = i.indexOf(o);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Qe] = t;
      return;
    }
    var f = i.indexOf(t);
    if (f === -1)
      return;
    a <= f && (u = a);
  }
  if (s = /** @type {Element} */
  i[u] || e.target, s !== t) {
    _i(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var h = k, _ = E;
    ue(null), Te(null);
    try {
      for (var v, d = []; s !== null; ) {
        var c = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var m = s[Qe]?.[n];
          m != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && m.call(s, e);
        } catch (w) {
          v ? d.push(w) : v = w;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        s = c;
      }
      if (v) {
        for (let w of d)
          queueMicrotask(() => {
            throw w;
          });
        throw v;
      }
    } finally {
      e[Qe] = t, delete e.currentTarget, ue(h), Te(_);
    }
  }
}
const ks = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Es(e) {
  return (
    /** @type {string} */
    ks?.createHTML(e) ?? e
  );
}
function Ss(e) {
  var t = os("template");
  return t.innerHTML = Es(e.replaceAll("<!>", "<!---->")), t.content;
}
function Ts(e, t) {
  var r = (
    /** @type {Effect} */
    E
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function be(e, t) {
  var r = (t & Pi) !== 0, n, i = !e.startsWith("<!>");
  return () => {
    n === void 0 && (n = Ss(i ? e : "<!>" + e), n = /** @type {TemplateNode} */
    /* @__PURE__ */ Dn(n));
    var s = (
      /** @type {TemplateNode} */
      r || Nn ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return Ts(s, s), s;
  };
}
function he(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function we(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function As(e, t) {
  return Ms(e, t);
}
const Wt = /* @__PURE__ */ new Map();
function Ms(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: u = !0, transformError: o }) {
  ls();
  var a = void 0, f = ds(() => {
    var h = r ?? t.appendChild(lt());
    Ki(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (d) => {
        vn({});
        var c = (
          /** @type {ComponentContext} */
          fe
        );
        s && (c.c = s), i && (n.$$events = i), a = e(d, n) || {}, _n();
      },
      o
    );
    var _ = /* @__PURE__ */ new Set(), v = (d) => {
      for (var c = 0; c < d.length; c++) {
        var m = d[c];
        if (!_.has(m)) {
          _.add(m);
          var w = ys(m);
          for (const K of [t, document]) {
            var N = Wt.get(K);
            N === void 0 && (N = /* @__PURE__ */ new Map(), Wt.set(K, N));
            var T = N.get(m);
            T === void 0 ? (K.addEventListener(m, rn, { passive: w }), N.set(m, 1)) : N.set(m, T + 1);
          }
        }
      }
    };
    return v(or(Kn)), Ar.add(v), () => {
      for (var d of _)
        for (const w of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            Wt.get(w)
          ), m = (
            /** @type {number} */
            c.get(d)
          );
          --m == 0 ? (w.removeEventListener(d, rn), c.delete(d), c.size === 0 && Wt.delete(w)) : c.set(d, m);
        }
      Ar.delete(v), h !== r && h.parentNode?.removeChild(h);
    };
  });
  return Mr.set(a, f), a;
}
let Mr = /* @__PURE__ */ new WeakMap();
function Ns(e, t) {
  const r = Mr.get(e);
  return r ? (Mr.delete(e), r(t)) : Promise.resolve();
}
var ve, ke, J, it, Ut, $t, ar;
class Cs {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    de(this, "anchor");
    /** @type {Map<Batch, Key>} */
    b(this, ve, /* @__PURE__ */ new Map());
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
    b(this, ke, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    b(this, J, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    b(this, it, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    b(this, Ut, !0);
    /**
     * @param {Batch} batch
     */
    b(this, $t, (t) => {
      if (l(this, ve).has(t)) {
        var r = (
          /** @type {Key} */
          l(this, ve).get(t)
        ), n = l(this, ke).get(r);
        if (n)
          Vr(n), l(this, it).delete(r);
        else {
          var i = l(this, J).get(r);
          i && (l(this, ke).set(r, i.effect), l(this, J).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, u] of l(this, ve)) {
          if (l(this, ve).delete(s), s === t)
            break;
          const o = l(this, J).get(u);
          o && (Y(o.effect), l(this, J).delete(u));
        }
        for (const [s, u] of l(this, ke)) {
          if (s === r || l(this, it).has(s)) continue;
          const o = () => {
            if (Array.from(l(this, ve).values()).includes(s)) {
              var f = document.createDocumentFragment();
              zr(u, f), f.append(lt()), l(this, J).set(s, { effect: u, fragment: f });
            } else
              Y(u);
            l(this, it).delete(s), l(this, ke).delete(s);
          };
          l(this, Ut) || !n ? (l(this, it).add(s), at(u, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    b(this, ar, (t) => {
      l(this, ve).delete(t);
      const r = Array.from(l(this, ve).values());
      for (const [n, i] of l(this, J))
        r.includes(n) || (Y(i.effect), l(this, J).delete(n));
    });
    this.anchor = t, y(this, Ut, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      A
    ), i = Fn();
    if (r && !l(this, ke).has(t) && !l(this, J).has(t))
      if (i) {
        var s = document.createDocumentFragment(), u = lt();
        s.append(u), l(this, J).set(t, {
          effect: se(() => r(u)),
          fragment: s
        });
      } else
        l(this, ke).set(
          t,
          se(() => r(this.anchor))
        );
    if (l(this, ve).set(n, t), i) {
      for (const [o, a] of l(this, ke))
        o === t ? n.unskip_effect(a) : n.skip_effect(a);
      for (const [o, a] of l(this, J))
        o === t ? n.unskip_effect(a.effect) : n.skip_effect(a.effect);
      n.oncommit(l(this, $t)), n.ondiscard(l(this, ar));
    } else
      l(this, $t).call(this, n);
  }
}
ve = new WeakMap(), ke = new WeakMap(), J = new WeakMap(), it = new WeakMap(), Ut = new WeakMap(), $t = new WeakMap(), ar = new WeakMap();
function Xe(e, t, r = !1) {
  var n = new Cs(e), i = r ? St : 0;
  function s(u, o) {
    n.ensure(u, o);
  }
  jr(() => {
    var u = !1;
    t((o, a = 0) => {
      u = !0, s(a, o);
    }), u || s(-1, null);
  }, i);
}
function Rs(e, t, r) {
  for (var n = [], i = t.length, s, u = t.length, o = 0; o < i; o++) {
    let _ = t[o];
    at(
      _,
      () => {
        if (s) {
          if (s.pending.delete(_), s.done.add(_), s.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Nr(e, or(s.done)), v.delete(s), v.size === 0 && (e.outrogroups = null);
          }
        } else
          u -= 1;
      },
      !1
    );
  }
  if (u === 0) {
    var a = n.length === 0 && r !== null;
    if (a) {
      var f = (
        /** @type {Element} */
        r
      ), h = (
        /** @type {Element} */
        f.parentNode
      );
      as(h), h.append(f), e.items.clear();
    }
    Nr(e, t, !a);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Nr(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const u of e.pending.values())
      for (const o of u)
        n.add(
          /** @type {EachItem} */
          e.items.get(o).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (n?.has(s)) {
      s.f |= je;
      const u = document.createDocumentFragment();
      zr(s, u);
    } else
      Y(t[i], r);
  }
}
var nn;
function Ds(e, t, r, n, i, s = null) {
  var u = e, o = /* @__PURE__ */ new Map();
  {
    var a = (
      /** @type {Element} */
      e
    );
    u = a.appendChild(lt());
  }
  var f = null, h = /* @__PURE__ */ ts(() => {
    var T = r();
    return an(T) ? T : T == null ? [] : or(T);
  }), _, v = /* @__PURE__ */ new Map(), d = !0;
  function c(T) {
    (N.effect.f & ae) === 0 && (N.pending.delete(T), N.fallback = f, Fs(N, _, u, t, n), f !== null && (_.length === 0 ? (f.f & je) === 0 ? Vr(f) : (f.f ^= je, Ot(f, null, u)) : at(f, () => {
      f = null;
    })));
  }
  function m(T) {
    N.pending.delete(T);
  }
  var w = jr(() => {
    _ = /** @type {V[]} */
    p(h);
    for (var T = _.length, K = /* @__PURE__ */ new Set(), ee = (
      /** @type {Batch} */
      A
    ), Ae = Fn(), me = 0; me < T; me += 1) {
      var Le = _[me], P = n(Le, me), ce = d ? null : o.get(P);
      ce ? (ce.v && At(ce.v, Le), ce.i && At(ce.i, me), Ae && ee.unskip_effect(ce.e)) : (ce = Os(
        o,
        d ? u : nn ?? (nn = lt()),
        Le,
        P,
        me,
        i,
        t,
        r
      ), d || (ce.e.f |= je), o.set(P, ce)), K.add(P);
    }
    if (T === 0 && s && !f && (d ? f = se(() => s(u)) : (f = se(() => s(nn ?? (nn = lt()))), f.f |= je)), T > K.size && Ei(), !d)
      if (v.set(ee, K), Ae) {
        for (const [Ct, cr] of o)
          K.has(Ct) || ee.skip_effect(cr.e);
        ee.oncommit(c), ee.ondiscard(m);
      } else
        c(ee);
    p(h);
  }), N = { effect: w, items: o, pending: v, outrogroups: null, fallback: f };
  d = !1;
}
function Ft(e) {
  for (; e !== null && (e.f & ge) === 0; )
    e = e.next;
  return e;
}
function Fs(e, t, r, n, i) {
  var s = t.length, u = e.items, o = Ft(e.effect.first), a, f = null, h = [], _ = [], v, d, c, m;
  for (m = 0; m < s; m += 1) {
    if (v = t[m], d = i(v, m), c = /** @type {EachItem} */
    u.get(d).e, e.outrogroups !== null)
      for (const P of e.outrogroups)
        P.pending.delete(c), P.done.delete(c);
    if ((c.f & H) !== 0 && Vr(c), (c.f & je) !== 0)
      if (c.f ^= je, c === o)
        Ot(c, null, r);
      else {
        var w = f ? f.next : o;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), ze(e, f, c), ze(e, c, w), Ot(c, w, r), f = c, h = [], _ = [], o = Ft(f.next);
        continue;
      }
    if (c !== o) {
      if (a !== void 0 && a.has(c)) {
        if (h.length < _.length) {
          var N = _[0], T;
          f = N.prev;
          var K = h[0], ee = h[h.length - 1];
          for (T = 0; T < h.length; T += 1)
            Ot(h[T], N, r);
          for (T = 0; T < _.length; T += 1)
            a.delete(_[T]);
          ze(e, K.prev, ee.next), ze(e, f, K), ze(e, ee, N), o = N, f = ee, m -= 1, h = [], _ = [];
        } else
          a.delete(c), Ot(c, o, r), ze(e, c.prev, c.next), ze(e, c, f === null ? e.effect.first : f.next), ze(e, f, c), f = c;
        continue;
      }
      for (h = [], _ = []; o !== null && o !== c; )
        (a ?? (a = /* @__PURE__ */ new Set())).add(o), _.push(o), o = Ft(o.next);
      if (o === null)
        continue;
    }
    (c.f & je) === 0 && h.push(c), f = c, o = Ft(c.next);
  }
  if (e.outrogroups !== null) {
    for (const P of e.outrogroups)
      P.pending.size === 0 && (Nr(e, or(P.done)), e.outrogroups?.delete(P));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || a !== void 0) {
    var Ae = [];
    if (a !== void 0)
      for (c of a)
        (c.f & H) === 0 && Ae.push(c);
    for (; o !== null; )
      (o.f & H) === 0 && o !== e.fallback && Ae.push(o), o = Ft(o.next);
    var me = Ae.length;
    if (me > 0) {
      var Le = s === 0 ? r : null;
      Rs(e, Ae, Le);
    }
  }
}
function Os(e, t, r, n, i, s, u, o) {
  var a = (u & Fi) !== 0 ? (u & Ii) === 0 ? /* @__PURE__ */ is(r, !1, !1) : ct(r) : null, f = (u & Oi) !== 0 ? ct(i) : null;
  return {
    v: a,
    i: f,
    e: se(() => (s(t, a ?? r, f ?? i, o), () => {
      e.delete(n);
    }))
  };
}
function Ot(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & je) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ur(n)
      );
      if (s.before(n), n === i)
        return;
      n = u;
    }
}
function ze(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Is(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function Ze(e, t, r, n, i, s) {
  var u = e.__className;
  if (u !== r || u === void 0) {
    var o = Is(r);
    o == null ? e.removeAttribute("class") : t ? e.className = o : e.setAttribute("class", o), e.__className = r;
  }
  return s;
}
const Ps = Symbol("is custom element"), js = Symbol("is html");
function Ls(e, t, r, n) {
  var i = Vs(e);
  i[t] !== (i[t] = r) && (r == null ? e.removeAttribute(t) : typeof r != "string" && zs(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Vs(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Ps]: e.nodeName.includes("-"),
      [js]: e.namespaceURI === cn
    })
  );
}
var sn = /* @__PURE__ */ new Map();
function zs(e) {
  var t = e.getAttribute("is") || e.nodeName, r = sn.get(t);
  if (r) return r;
  sn.set(t, r = []);
  for (var n, i = e, s = Element.prototype; s !== i; ) {
    n = pi(i);
    for (var u in n)
      n[u].set && r.push(u);
    i = on(i);
  }
  return r;
}
const Bs = "5";
var ln;
typeof window < "u" && ((ln = window.__svelte ?? (window.__svelte = {})).v ?? (ln.v = /* @__PURE__ */ new Set())).add(Bs);
var Hs = /* @__PURE__ */ be('<button class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Mark all read</button>'), qs = /* @__PURE__ */ be('<div class="flex items-center justify-center py-16"><svg class="animate-spin h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span class="ml-3 text-gray-500 dark:text-gray-400">Loading notifications...</span></div>'), Us = /* @__PURE__ */ be('<div class="text-center py-16"><svg class="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg> <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2"> </h3> <p class="text-gray-500 dark:text-gray-400"> </p></div>'), $s = /* @__PURE__ */ be('<span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">New</span>'), Ys = /* @__PURE__ */ be('<span class="text-xs text-gray-400 dark:text-gray-500"> </span>'), Ks = /* @__PURE__ */ be('<p class="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap mb-3"> </p>'), Gs = /* @__PURE__ */ be('<div class="border-t border-gray-100 dark:border-gray-700 pt-3 mb-3"><button class="inline-flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg> </button></div>'), Ws = /* @__PURE__ */ be('<div class="px-4 pb-4 pt-0"><div class="pl-14"><!> <!> <div class="flex items-center justify-end gap-3 pt-3 border-t border-gray-100 dark:border-gray-700"><span class="text-xs text-gray-400 dark:text-gray-500"> </span> <button><span></span></button></div></div></div>'), Xs = /* @__PURE__ */ be('<div><button class="w-full text-left p-4"><div class="flex items-start gap-4"><div class="flex-shrink-0"><div><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg></div></div> <div class="flex-1 min-w-0"><div class="flex items-center gap-2 mb-1"><h4 class="text-sm font-semibold text-gray-900 dark:text-white truncate"> </h4> <!></div> <!></div> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div></button> <!></div>'), Zs = /* @__PURE__ */ be('<div class="space-y-3"></div>'), Js = /* @__PURE__ */ be('<div class="p-6 w-full max-w-3xl mx-auto"><div class="flex flex-wrap justify-between items-center mb-6 gap-3"><div><h1 class="text-2xl font-bold text-gray-900 dark:text-white">Notifications</h1> <p class="text-sm text-gray-500 dark:text-gray-400"> </p></div> <!></div> <div class="flex border-b border-gray-200 dark:border-gray-700 mb-6"><button> </button> <button> </button></div> <!></div>');
function Qs(e, t) {
  vn(t, !0);
  let r = /* @__PURE__ */ Q(gt([])), n = /* @__PURE__ */ Q(0), i = /* @__PURE__ */ Q(!0), s = /* @__PURE__ */ Q("all"), u = /* @__PURE__ */ Q(null);
  br(() => {
    const g = t.ctx.notifications?.items?.subscribe?.((S) => {
      $(r, S ?? [], !0);
    });
    return () => g?.();
  }), br(() => {
    const g = t.ctx.notifications?.unreadCount?.subscribe?.((S) => {
      $(n, S ?? 0, !0);
    });
    return () => g?.();
  }), br(() => {
    t.ctx.notifications?.load?.().then(() => {
      $(i, !1);
    }).catch(() => {
      $(i, !1);
    });
  });
  let o = /* @__PURE__ */ Zr(() => p(s) === "unread" ? p(r).filter((g) => !g.read) : p(r)), a = /* @__PURE__ */ Zr(() => p(r).filter((g) => !g.read).length);
  function f(g) {
    t.ctx.navigate(g);
  }
  async function h(g, S) {
    g.stopPropagation(), await t.ctx.notifications?.markAsRead?.(S.id, !S.read);
  }
  async function _() {
    const g = p(r).filter((S) => !S.read);
    for (const S of g)
      await t.ctx.notifications?.markAsRead?.(S.id);
  }
  function v(g) {
    $(u, p(u) === g ? null : g, !0);
  }
  function d(g) {
    switch (g) {
      case "green":
        return "text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300";
      case "blue":
        return "text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300";
      case "purple":
        return "text-purple-600 bg-purple-100 dark:bg-purple-900 dark:text-purple-300";
      case "red":
        return "text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-300";
      default:
        return "text-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-300";
    }
  }
  function c(g) {
    if (!g) return "";
    const S = typeof g == "number" ? g : Date.parse(String(g));
    if (isNaN(S)) return String(g);
    const z = Date.now() - S;
    if (z < 0) return "just now";
    const x = Math.floor(z / 1e3);
    if (x < 60) return "just now";
    const Me = Math.floor(x / 60);
    if (Me < 60) return `${Me}m ago`;
    const Ne = Math.floor(Me / 60);
    if (Ne < 24) return `${Ne}h ago`;
    const Rt = Math.floor(Ne / 24);
    if (Rt < 30) return `${Rt}d ago`;
    const ht = Math.floor(Rt / 30);
    return ht < 12 ? `${ht}mo ago` : `${Math.floor(ht / 12)}y ago`;
  }
  function m(g) {
    if (!g) return "";
    const S = new Date(typeof g == "number" ? g : Date.parse(String(g)));
    if (isNaN(S.getTime())) return String(g);
    const z = (x) => String(x).padStart(2, "0");
    return `${S.getFullYear()}-${z(S.getMonth() + 1)}-${z(S.getDate())} ${z(S.getHours())}:${z(S.getMinutes())}:${z(S.getSeconds())}`;
  }
  var w = Js(), N = M(w), T = M(N), K = j(M(T), 2), ee = M(K), Ae = j(T, 2);
  {
    var me = (g) => {
      var S = Hs();
      vt("click", S, _), he(g, S);
    };
    Xe(Ae, (g) => {
      p(a) > 0 && g(me);
    });
  }
  var Le = j(N, 2), P = M(Le), ce = M(P), Ct = j(P, 2), cr = M(Ct), Gn = j(Le, 2);
  {
    var Wn = (g) => {
      var S = qs();
      he(g, S);
    }, Xn = (g) => {
      var S = Us(), z = j(M(S), 2), x = M(z), Me = j(z, 2), Ne = M(Me);
      We(() => {
        we(x, p(s) === "unread" ? "No unread notifications" : "No notifications"), we(Ne, p(s) === "unread" ? "You're all caught up!" : "Notifications will appear here when available.");
      }), he(g, S);
    }, Zn = (g) => {
      var S = Zs();
      Ds(S, 21, () => p(o), (z) => z.id, (z, x) => {
        var Me = Xs(), Ne = M(Me), Rt = M(Ne), ht = M(Rt), Jn = M(ht), Br = j(ht, 2), Hr = M(Br), qr = M(Hr), Qn = M(qr), ei = j(qr, 2);
        {
          var ti = (G) => {
            var Ve = $s();
            he(G, Ve);
          };
          Xe(ei, (G) => {
            p(x).read || G(ti);
          });
        }
        var ri = j(Hr, 2);
        {
          var ni = (G) => {
            var Ve = Ys(), dr = M(Ve);
            We(
              (Kt, hr) => {
                Ls(Ve, "title", Kt), we(dr, hr);
              },
              [
                () => m(p(x).timestamp_ms || p(x).timestamp || p(x).created_at),
                () => c(p(x).timestamp_ms || p(x).timestamp || p(x).created_at)
              ]
            ), he(G, Ve);
          };
          Xe(ri, (G) => {
            (p(x).timestamp_ms || p(x).timestamp || p(x).created_at) && G(ni);
          });
        }
        var ii = j(Br, 2), si = j(Ne, 2);
        {
          var li = (G) => {
            var Ve = Ws(), dr = M(Ve), Kt = M(dr);
            {
              var hr = (Ce) => {
                var Dt = Ks(), Gt = M(Dt);
                We(() => we(Gt, p(x).message || p(x).body)), he(Ce, Dt);
              };
              Xe(Kt, (Ce) => {
                (p(x).message || p(x).body) && Ce(hr);
              });
            }
            var Ur = j(Kt, 2);
            {
              var ai = (Ce) => {
                var Dt = Gs(), Gt = M(Dt), ci = j(M(Gt));
                We(() => we(ci, ` ${p(x).href ?? ""}`)), vt("click", Gt, () => f(p(x).href)), he(Ce, Dt);
              };
              Xe(Ur, (Ce) => {
                p(x).href && Ce(ai);
              });
            }
            var oi = j(Ur, 2), $r = M(oi), fi = M($r), vr = j($r, 2), ui = M(vr);
            We(() => {
              we(fi, p(x).read ? "Read" : "Unread"), Ze(vr, 1, `relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${p(x).read ? "bg-indigo-600" : "bg-gray-300 dark:bg-gray-600"}`), Ze(ui, 1, `inline-block h-3.5 w-3.5 rounded-full bg-white shadow transition-transform ${p(x).read ? "translate-x-4.5" : "translate-x-0.5"}`);
            }), vt("click", vr, (Ce) => h(Ce, p(x))), he(G, Ve);
          };
          Xe(si, (G) => {
            p(u) === p(x).id && G(li);
          });
        }
        We(
          (G) => {
            Ze(Me, 1, `rounded-lg border bg-white dark:bg-gray-800 transition-colors hover:bg-gray-50 dark:hover:bg-gray-750 ${p(x).read ? "border border-gray-200 dark:border-gray-700" : "border-l-4 border-l-indigo-500 border-t border-r border-b border-gray-200 dark:border-gray-700"}`), Ze(Jn, 1, `w-10 h-10 rounded-full flex items-center justify-center ${G ?? ""}`), we(Qn, p(x).title || p(x).type || "Notification"), Ze(ii, 0, `w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${p(u) === p(x).id ? "rotate-180" : ""}`);
          },
          [() => d(p(x).color)]
        ), vt("click", Ne, () => v(p(x).id)), he(z, Me);
      }), he(g, S);
    };
    Xe(Gn, (g) => {
      p(i) ? g(Wn) : p(o).length === 0 ? g(Xn, 1) : g(Zn, -1);
    });
  }
  We(() => {
    we(ee, p(a) > 0 ? `${p(a)} unread notification${p(a) > 1 ? "s" : ""}` : "No unread notifications"), Ze(P, 1, `px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${p(s) === "all" ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`), we(ce, `All (${p(r).length ?? ""})`), Ze(Ct, 1, `px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${p(s) === "unread" ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`), we(cr, `Unread (${p(a) ?? ""})`);
  }), vt("click", P, () => $(s, "all")), vt("click", Ct, () => $(s, "unread")), he(e, w), _n();
}
xs(["click"]);
function rl(e, t) {
  const r = As(Qs, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Ns(r);
      } catch {
      }
    }
  };
}
export {
  rl as default
};
