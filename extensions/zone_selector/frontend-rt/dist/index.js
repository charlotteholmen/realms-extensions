var ki = Object.defineProperty;
var tr = (e) => {
  throw TypeError(e);
};
var Ei = (e, t, n) => t in e ? ki(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var _e = (e, t, n) => Ei(e, typeof t != "symbol" ? t + "" : t, n), bn = (e, t, n) => t.has(e) || tr("Cannot " + n);
var l = (e, t, n) => (bn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), b = (e, t, n) => t.has(e) ? tr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), k = (e, t, n, r) => (bn(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), F = (e, t, n) => (bn(e, t, "access private method"), n);
var _r = Array.isArray, Ti = Array.prototype.indexOf, xt = Array.prototype.includes, pn = Array.from, Si = Object.defineProperty, Ot = Object.getOwnPropertyDescriptor, Ai = Object.prototype, Ci = Array.prototype, Mi = Object.getPrototypeOf, nr = Object.isExtensible;
const Fi = () => {
};
function Li(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function gr() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const j = 2, kt = 4, _n = 8, mr = 1 << 24, Te = 16, ye = 32, Ye = 64, kn = 128, ce = 512, z = 1024, q = 2048, Se = 4096, U = 8192, de = 16384, ut = 32768, En = 1 << 25, Et = 65536, Tn = 1 << 17, Ni = 1 << 18, Ct = 1 << 19, Ri = 1 << 20, Ie = 1 << 25, ot = 65536, fn = 1 << 21, Pt = 1 << 22, He = 1 << 23, en = Symbol("$state"), Le = new class extends Error {
  constructor() {
    super(...arguments);
    _e(this, "name", "StaleReactionError");
    _e(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Oi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function zi() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ii(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Pi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Di() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Bi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Vi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function qi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ji() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Zi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Hi() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Ui = 1, Yi = 2, $i = 16, Gi = 1, Ki = 2, I = Symbol(), Wi = "http://www.w3.org/1999/xhtml";
function Qi() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Xi() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function wr(e) {
  return e === this.v;
}
function Ji(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function yr(e) {
  return !Ji(e, this.v);
}
let W = null;
function Tt(e) {
  W = e;
}
function br(e, t = !1, n) {
  W = {
    p: W,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      T
    ),
    l: null
  };
}
function xr(e) {
  var t = (
    /** @type {ComponentContext} */
    W
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Zr(r);
  }
  return t.i = !0, W = t.p, /** @type {T} */
  {};
}
function kr() {
  return !0;
}
let We = [];
function Er() {
  var e = We;
  We = [], Li(e);
}
function _t(e) {
  if (We.length === 0 && !zt) {
    var t = We;
    queueMicrotask(() => {
      t === We && Er();
    });
  }
  We.push(e);
}
function es() {
  for (; We.length > 0; )
    Er();
}
function Tr(e) {
  var t = T;
  if (t === null)
    return E.f |= He, e;
  if ((t.f & ut) === 0 && (t.f & kt) === 0)
    throw e;
  Ze(e, t);
}
function Ze(e, t) {
  for (; t !== null; ) {
    if ((t.f & kn) !== 0) {
      if ((t.f & ut) === 0)
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
const ts = -7169;
function R(e, t) {
  e.f = e.f & ts | t;
}
function Pn(e) {
  (e.f & ce) !== 0 || e.deps === null ? R(e, z) : R(e, Se);
}
function Sr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & j) === 0 || (t.f & ot) === 0 || (t.f ^= ot, Sr(
        /** @type {Derived} */
        t.deps
      ));
}
function Ar(e, t, n) {
  (e.f & q) !== 0 ? t.add(e) : (e.f & Se) !== 0 && n.add(e), Sr(e.deps), R(e, z);
}
const Ge = /* @__PURE__ */ new Set();
let S = null, me = null, Sn = null, zt = !1, xn = !1, vt = null, tn = null;
var rr = 0;
let ns = 1;
var gt, mt, Je, Ne, xe, Bt, re, Vt, qe, Re, ke, wt, yt, et, O, nn, Cr, rn, An, sn, rs;
const dn = class dn {
  constructor() {
    b(this, O);
    _e(this, "id", ns++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    _e(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    _e(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    b(this, gt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    b(this, mt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    b(this, Je, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    b(this, Ne, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    b(this, xe, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    b(this, Bt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    b(this, re, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    b(this, Vt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    b(this, qe, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    b(this, Re, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    b(this, ke, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    b(this, wt, /* @__PURE__ */ new Set());
    _e(this, "is_fork", !1);
    b(this, yt, !1);
    /** @type {Set<Batch>} */
    b(this, et, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, ke).has(t) || l(this, ke).set(t, { d: [], m: [] }), l(this, wt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = l(this, ke).get(t);
    if (r) {
      l(this, ke).delete(t);
      for (var i of r.d)
        R(i, q), n(i);
      for (i of r.m)
        R(i, Se), n(i);
    }
    l(this, wt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== I && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & He) === 0 && (this.current.set(t, [n, r]), me?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    S = this;
  }
  deactivate() {
    S = null, me = null;
  }
  flush() {
    try {
      xn = !0, S = this, F(this, O, rn).call(this);
    } finally {
      rr = 0, Sn = null, vt = null, tn = null, xn = !1, S = null, me = null, it.clear();
    }
  }
  discard() {
    for (const t of l(this, mt)) t(this);
    l(this, mt).clear(), l(this, Je).clear(), Ge.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, Vt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    let r = l(this, Ne).get(n) ?? 0;
    if (l(this, Ne).set(n, r + 1), t) {
      let i = l(this, xe).get(n) ?? 0;
      l(this, xe).set(n, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, r) {
    let i = l(this, Ne).get(n) ?? 0;
    if (i === 1 ? l(this, Ne).delete(n) : l(this, Ne).set(n, i - 1), t) {
      let s = l(this, xe).get(n) ?? 0;
      s === 1 ? l(this, xe).delete(n) : l(this, xe).set(n, s - 1);
    }
    l(this, yt) || r || (k(this, yt, !0), _t(() => {
      k(this, yt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      l(this, qe).add(r);
    for (const r of n)
      l(this, Re).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, gt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, mt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    l(this, Je).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, Je)) t(this);
    l(this, Je).clear();
  }
  settled() {
    return (l(this, Bt) ?? k(this, Bt, gr())).promise;
  }
  static ensure() {
    if (S === null) {
      const t = S = new dn();
      xn || (Ge.add(S), zt || _t(() => {
        S === t && t.flush();
      }));
    }
    return S;
  }
  apply() {
    {
      me = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Sn = t, t.b?.is_pending && (t.f & (kt | _n | mr)) !== 0 && (t.f & ut) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (vt !== null && n === T && (E === null || (E.f & j) === 0))
        return;
      if ((r & (Ye | ye)) !== 0) {
        if ((r & z) === 0)
          return;
        n.f ^= z;
      }
    }
    l(this, re).push(n);
  }
};
gt = new WeakMap(), mt = new WeakMap(), Je = new WeakMap(), Ne = new WeakMap(), xe = new WeakMap(), Bt = new WeakMap(), re = new WeakMap(), Vt = new WeakMap(), qe = new WeakMap(), Re = new WeakMap(), ke = new WeakMap(), wt = new WeakMap(), yt = new WeakMap(), et = new WeakMap(), O = new WeakSet(), nn = function() {
  return this.is_fork || l(this, xe).size > 0;
}, Cr = function() {
  for (const r of l(this, et))
    for (const i of l(r, xe).keys()) {
      for (var t = !1, n = i; n.parent !== null; ) {
        if (l(this, ke).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, rn = function() {
  var a;
  if (rr++ > 1e3 && (Ge.delete(this), ss()), !F(this, O, nn).call(this)) {
    for (const o of l(this, qe))
      l(this, Re).delete(o), R(o, q), this.schedule(o);
    for (const o of l(this, Re))
      R(o, Se), this.schedule(o);
  }
  const t = l(this, re);
  k(this, re, []), this.apply();
  var n = vt = [], r = [], i = tn = [];
  for (const o of t)
    try {
      F(this, O, An).call(this, o, n, r);
    } catch (u) {
      throw Lr(o), u;
    }
  if (S = null, i.length > 0) {
    var s = dn.ensure();
    for (const o of i)
      s.schedule(o);
  }
  if (vt = null, tn = null, F(this, O, nn).call(this) || F(this, O, Cr).call(this)) {
    F(this, O, sn).call(this, r), F(this, O, sn).call(this, n);
    for (const [o, u] of l(this, ke))
      Fr(o, u);
  } else {
    l(this, Ne).size === 0 && Ge.delete(this), l(this, qe).clear(), l(this, Re).clear();
    for (const o of l(this, gt)) o(this);
    l(this, gt).clear(), ir(r), ir(n), l(this, Bt)?.resolve();
  }
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    S
  );
  if (l(this, re).length > 0) {
    const o = f ?? (f = this);
    l(o, re).push(...l(this, re).filter((u) => !l(o, re).includes(u)));
  }
  f !== null && (Ge.add(f), F(a = f, O, rn).call(a));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
An = function(t, n, r) {
  t.f ^= z;
  for (var i = t.first; i !== null; ) {
    var s = i.f, f = (s & (ye | Ye)) !== 0, a = f && (s & z) !== 0, o = a || (s & U) !== 0 || l(this, ke).has(i);
    if (!o && i.fn !== null) {
      f ? i.f ^= z : (s & kt) !== 0 ? n.push(i) : Yt(i) && ((s & Te) !== 0 && l(this, Re).add(i), At(i));
      var u = i.first;
      if (u !== null) {
        i = u;
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
sn = function(t) {
  for (var n = 0; n < t.length; n += 1)
    Ar(t[n], l(this, qe), l(this, Re));
}, rs = function() {
  var h, _, v;
  for (const d of Ge) {
    var t = d.id < this.id, n = [];
    for (const [c, [m, x]] of this.current) {
      if (d.current.has(c)) {
        var r = (
          /** @type {[any, boolean]} */
          d.current.get(c)[0]
        );
        if (t && m !== r)
          d.current.set(c, [m, x]);
        else
          continue;
      }
      n.push(c);
    }
    var i = [...d.current.keys()].filter((c) => !this.current.has(c));
    if (i.length === 0)
      t && d.discard();
    else if (n.length > 0) {
      if (t)
        for (const c of l(this, wt))
          d.unskip_effect(c, (m) => {
            var x;
            (m.f & (Te | Pt)) !== 0 ? d.schedule(m) : F(x = d, O, sn).call(x, [m]);
          });
      d.activate();
      var s = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (var a of n)
        Mr(a, i, s, f);
      f = /* @__PURE__ */ new Map();
      var o = [...d.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of l(this, Vt))
        (c.f & (de | U | Tn)) === 0 && Dn(c, o, f) && ((c.f & (Pt | Te)) !== 0 ? (R(c, q), d.schedule(c)) : l(d, qe).add(c));
      if (l(d, re).length > 0) {
        d.apply();
        for (var u of l(d, re))
          F(h = d, O, An).call(h, u, [], []);
        k(d, re, []);
      }
      d.deactivate();
    }
  }
  for (const d of Ge)
    l(d, et).has(this) && (l(d, et).delete(this), l(d, et).size === 0 && !F(_ = d, O, nn).call(_) && (d.activate(), F(v = d, O, rn).call(v)));
};
let at = dn;
function is(e) {
  var t = zt;
  zt = !0;
  try {
    for (var n; ; ) {
      if (es(), S === null)
        return (
          /** @type {T} */
          n
        );
      S.flush();
    }
  } finally {
    zt = t;
  }
}
function ss() {
  try {
    Vi();
  } catch (e) {
    Ze(e, Sn);
  }
}
let Fe = null;
function ir(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (de | U)) === 0 && Yt(r) && (Fe = /* @__PURE__ */ new Set(), At(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Yr(r), Fe?.size > 0)) {
        it.clear();
        for (const i of Fe) {
          if ((i.f & (de | U)) !== 0) continue;
          const s = [i];
          let f = i.parent;
          for (; f !== null; )
            Fe.has(f) && (Fe.delete(f), s.push(f)), f = f.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const o = s[a];
            (o.f & (de | U)) === 0 && At(o);
          }
        }
        Fe.clear();
      }
    }
    Fe = null;
  }
}
function Mr(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & j) !== 0 ? Mr(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (Pt | Te)) !== 0 && (s & q) === 0 && Dn(i, t, r) && (R(i, q), Bn(
        /** @type {Effect} */
        i
      ));
    }
}
function Dn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (xt.call(t, i))
        return !0;
      if ((i.f & j) !== 0 && Dn(
        /** @type {Derived} */
        i,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function Bn(e) {
  S.schedule(e);
}
function Fr(e, t) {
  if (!((e.f & ye) !== 0 && (e.f & z) !== 0)) {
    (e.f & q) !== 0 ? t.d.push(e) : (e.f & Se) !== 0 && t.m.push(e), R(e, z);
    for (var n = e.first; n !== null; )
      Fr(n, t), n = n.next;
  }
}
function Lr(e) {
  R(e, z);
  for (var t = e.first; t !== null; )
    Lr(t), t = t.next;
}
function ls(e) {
  let t = 0, n = ft(0), r;
  return () => {
    jn() && (p(n), Hr(() => (t === 0 && (r = $n(() => e(() => It(n)))), t += 1, () => {
      _t(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, It(n));
      });
    })));
  };
}
var os = Et | Ct;
function as(e, t, n, r) {
  new fs(e, t, n, r);
}
var oe, In, ae, tt, $, fe, H, ie, Oe, nt, je, bt, qt, jt, ze, hn, N, us, cs, ds, Cn, ln, on, Mn, Fn;
class fs {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    b(this, N);
    /** @type {Boundary | null} */
    _e(this, "parent");
    _e(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    _e(this, "transform_error");
    /** @type {TemplateNode} */
    b(this, oe);
    /** @type {TemplateNode | null} */
    b(this, In, null);
    /** @type {BoundaryProps} */
    b(this, ae);
    /** @type {((anchor: Node) => void)} */
    b(this, tt);
    /** @type {Effect} */
    b(this, $);
    /** @type {Effect | null} */
    b(this, fe, null);
    /** @type {Effect | null} */
    b(this, H, null);
    /** @type {Effect | null} */
    b(this, ie, null);
    /** @type {DocumentFragment | null} */
    b(this, Oe, null);
    b(this, nt, 0);
    b(this, je, 0);
    b(this, bt, !1);
    /** @type {Set<Effect>} */
    b(this, qt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    b(this, jt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    b(this, ze, null);
    b(this, hn, ls(() => (k(this, ze, ft(l(this, nt))), () => {
      k(this, ze, null);
    })));
    k(this, oe, t), k(this, ae, n), k(this, tt, (s) => {
      var f = (
        /** @type {Effect} */
        T
      );
      f.b = this, f.f |= kn, r(s);
    }), this.parent = /** @type {Effect} */
    T.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), k(this, $, Zn(() => {
      F(this, N, Cn).call(this);
    }, os));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Ar(t, l(this, qt), l(this, jt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, ae).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    F(this, N, Mn).call(this, t, n), k(this, nt, l(this, nt) + t), !(!l(this, ze) || l(this, bt)) && (k(this, bt, !0), _t(() => {
      k(this, bt, !1), l(this, ze) && St(l(this, ze), l(this, nt));
    }));
  }
  get_effect_pending() {
    return l(this, hn).call(this), p(
      /** @type {Source<number>} */
      l(this, ze)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, ae).onerror && !l(this, ae).failed)
      throw t;
    S?.is_fork ? (l(this, fe) && S.skip_effect(l(this, fe)), l(this, H) && S.skip_effect(l(this, H)), l(this, ie) && S.skip_effect(l(this, ie)), S.on_fork_commit(() => {
      F(this, N, Fn).call(this, t);
    })) : F(this, N, Fn).call(this, t);
  }
}
oe = new WeakMap(), In = new WeakMap(), ae = new WeakMap(), tt = new WeakMap(), $ = new WeakMap(), fe = new WeakMap(), H = new WeakMap(), ie = new WeakMap(), Oe = new WeakMap(), nt = new WeakMap(), je = new WeakMap(), bt = new WeakMap(), qt = new WeakMap(), jt = new WeakMap(), ze = new WeakMap(), hn = new WeakMap(), N = new WeakSet(), us = function() {
  try {
    k(this, fe, ue(() => l(this, tt).call(this, l(this, oe))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
cs = function(t) {
  const n = l(this, ae).failed;
  n && k(this, ie, ue(() => {
    n(
      l(this, oe),
      () => t,
      () => () => {
      }
    );
  }));
}, ds = function() {
  const t = l(this, ae).pending;
  t && (this.is_pending = !0, k(this, H, ue(() => t(l(this, oe)))), _t(() => {
    var n = k(this, Oe, document.createDocumentFragment()), r = Ue();
    n.append(r), k(this, fe, F(this, N, on).call(this, () => ue(() => l(this, tt).call(this, r)))), l(this, je) === 0 && (l(this, oe).before(n), k(this, Oe, null), st(
      /** @type {Effect} */
      l(this, H),
      () => {
        k(this, H, null);
      }
    ), F(this, N, ln).call(
      this,
      /** @type {Batch} */
      S
    ));
  }));
}, Cn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), k(this, je, 0), k(this, nt, 0), k(this, fe, ue(() => {
      l(this, tt).call(this, l(this, oe));
    })), l(this, je) > 0) {
      var t = k(this, Oe, document.createDocumentFragment());
      Yn(l(this, fe), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        l(this, ae).pending
      );
      k(this, H, ue(() => n(l(this, oe))));
    } else
      F(this, N, ln).call(
        this,
        /** @type {Batch} */
        S
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
ln = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, qt), l(this, jt));
}, /**
 * @template T
 * @param {() => T} fn
 */
on = function(t) {
  var n = T, r = E, i = W;
  Ae(l(this, $)), ve(l(this, $)), Tt(l(this, $).ctx);
  try {
    return at.ensure(), t();
  } catch (s) {
    return Tr(s), null;
  } finally {
    Ae(n), ve(r), Tt(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Mn = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && F(r = this.parent, N, Mn).call(r, t, n);
    return;
  }
  k(this, je, l(this, je) + t), l(this, je) === 0 && (F(this, N, ln).call(this, n), l(this, H) && st(l(this, H), () => {
    k(this, H, null);
  }), l(this, Oe) && (l(this, oe).before(l(this, Oe)), k(this, Oe, null)));
}, /**
 * @param {unknown} error
 */
Fn = function(t) {
  l(this, fe) && (K(l(this, fe)), k(this, fe, null)), l(this, H) && (K(l(this, H)), k(this, H, null)), l(this, ie) && (K(l(this, ie)), k(this, ie, null));
  var n = l(this, ae).onerror;
  let r = l(this, ae).failed;
  var i = !1, s = !1;
  const f = () => {
    if (i) {
      Xi();
      return;
    }
    i = !0, s && Hi(), l(this, ie) !== null && st(l(this, ie), () => {
      k(this, ie, null);
    }), F(this, N, on).call(this, () => {
      F(this, N, Cn).call(this);
    });
  }, a = (o) => {
    try {
      s = !0, n?.(o, f), s = !1;
    } catch (u) {
      Ze(u, l(this, $) && l(this, $).parent);
    }
    r && k(this, ie, F(this, N, on).call(this, () => {
      try {
        return ue(() => {
          var u = (
            /** @type {Effect} */
            T
          );
          u.b = this, u.f |= kn, r(
            l(this, oe),
            () => o,
            () => f
          );
        });
      } catch (u) {
        return Ze(
          u,
          /** @type {Effect} */
          l(this, $).parent
        ), null;
      }
    }));
  };
  _t(() => {
    var o;
    try {
      o = this.transform_error(t);
    } catch (u) {
      Ze(u, l(this, $) && l(this, $).parent);
      return;
    }
    o !== null && typeof o == "object" && typeof /** @type {any} */
    o.then == "function" ? o.then(
      a,
      /** @param {unknown} e */
      (u) => Ze(u, l(this, $) && l(this, $).parent)
    ) : a(o);
  });
};
function hs(e, t, n, r) {
  const i = Vn;
  var s = e.filter((v) => !v.settled);
  if (n.length === 0 && s.length === 0) {
    r(t.map(i));
    return;
  }
  var f = (
    /** @type {Effect} */
    T
  ), a = vs(), o = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((v) => v.promise)) : null;
  function u(v) {
    a();
    try {
      r(v);
    } catch (d) {
      (f.f & de) === 0 && Ze(d, f);
    }
    un();
  }
  if (n.length === 0) {
    o.then(() => u(t.map(i)));
    return;
  }
  var h = Nr();
  function _() {
    Promise.all(n.map((v) => /* @__PURE__ */ ps(v))).then((v) => u([...t.map(i), ...v])).catch((v) => Ze(v, f)).finally(() => h());
  }
  o ? o.then(() => {
    a(), _(), un();
  }) : _();
}
function vs() {
  var e = (
    /** @type {Effect} */
    T
  ), t = E, n = W, r = (
    /** @type {Batch} */
    S
  );
  return function(s = !0) {
    Ae(e), ve(t), Tt(n), s && (e.f & de) === 0 && (r?.activate(), r?.apply());
  };
}
function un(e = !0) {
  Ae(null), ve(null), Tt(null), e && S?.deactivate();
}
function Nr() {
  var e = (
    /** @type {Effect} */
    T
  ), t = (
    /** @type {Boundary} */
    e.b
  ), n = (
    /** @type {Batch} */
    S
  ), r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
    t.update_pending_count(-1, n), n.decrement(r, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function Vn(e) {
  var t = j | q;
  return T !== null && (T.f |= Ct), {
    ctx: W,
    deps: null,
    effects: null,
    equals: wr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      I
    ),
    wv: 0,
    parent: T,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ps(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    T
  );
  r === null && zi();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = ft(
    /** @type {V} */
    I
  ), f = !E, a = /* @__PURE__ */ new Map();
  return Fs(() => {
    var o = (
      /** @type {Effect} */
      T
    ), u = gr();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(un);
    } catch (d) {
      u.reject(d), un();
    }
    var h = (
      /** @type {Batch} */
      S
    );
    if (f) {
      if ((o.f & ut) !== 0)
        var _ = Nr();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        a.get(h)?.reject(Le), a.delete(h);
      else {
        for (const d of a.values())
          d.reject(Le);
        a.clear();
      }
      a.set(h, u);
    }
    const v = (d, c = void 0) => {
      if (_) {
        var m = c === Le;
        _(m);
      }
      if (!(c === Le || (o.f & de) !== 0)) {
        if (h.activate(), c)
          s.f |= He, St(s, c);
        else {
          (s.f & He) !== 0 && (s.f ^= He), St(s, d);
          for (const [x, M] of a) {
            if (a.delete(x), x === h) break;
            M.reject(Le);
          }
        }
        h.deactivate();
      }
    };
    u.promise.then(v, (d) => v(null, d || "unknown"));
  }), As(() => {
    for (const o of a.values())
      o.reject(Le);
  }), new Promise((o) => {
    function u(h) {
      function _() {
        h === i ? o(s) : u(i);
      }
      h.then(_, _);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function _s(e) {
  const t = /* @__PURE__ */ Vn(e);
  return Kr(t), t;
}
// @__NO_SIDE_EFFECTS__
function gs(e) {
  const t = /* @__PURE__ */ Vn(e);
  return t.equals = yr, t;
}
function ms(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      K(
        /** @type {Effect} */
        t[n]
      );
  }
}
function qn(e) {
  var t, n = T, r = e.parent;
  if (!$e && r !== null && (r.f & (de | U)) !== 0)
    return Qi(), e.v;
  Ae(r);
  try {
    e.f &= ~ot, ms(e), t = Jr(e);
  } finally {
    Ae(n);
  }
  return t;
}
function Rr(e) {
  var t = qn(e);
  if (!e.equals(t) && (e.wv = Qr(), (!S?.is_fork || e.deps === null) && (S !== null ? S.capture(e, t, !0) : e.v = t, e.deps === null))) {
    R(e, z);
    return;
  }
  $e || (me !== null ? (jn() || S?.is_fork) && me.set(e, t) : Pn(e));
}
function ws(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Le), t.teardown = Fi, t.ac = null, Dt(t, 0), Hn(t));
}
function Or(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && At(t);
}
let Ln = /* @__PURE__ */ new Set();
const it = /* @__PURE__ */ new Map();
let zr = !1;
function ft(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: wr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function P(e, t) {
  const n = ft(e);
  return Kr(n), n;
}
// @__NO_SIDE_EFFECTS__
function ys(e, t = !1, n = !0) {
  const r = ft(e);
  return t || (r.equals = yr), r;
}
function w(e, t, n = !1) {
  E !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!we || (E.f & Tn) !== 0) && kr() && (E.f & (j | Te | Pt | Tn)) !== 0 && (he === null || !xt.call(he, e)) && Zi();
  let r = n ? pt(t) : t;
  return St(e, r, tn);
}
function St(e, t, n = null) {
  if (!e.equals(t)) {
    it.set(e, $e ? t : e.v);
    var r = at.ensure();
    if (r.capture(e, t), (e.f & j) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & q) !== 0 && qn(i), me === null && Pn(i);
    }
    e.wv = Qr(), Ir(e, q, n), T !== null && (T.f & z) !== 0 && (T.f & (ye | Ye)) === 0 && (le === null ? Rs([e]) : le.push(e)), !r.is_fork && Ln.size > 0 && !zr && bs();
  }
  return t;
}
function bs() {
  zr = !1;
  for (const e of Ln)
    (e.f & z) !== 0 && R(e, Se), Yt(e) && At(e);
  Ln.clear();
}
function It(e) {
  w(e, e.v + 1);
}
function Ir(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, s = 0; s < i; s++) {
      var f = r[s], a = f.f, o = (a & q) === 0;
      if (o && R(f, t), (a & j) !== 0) {
        var u = (
          /** @type {Derived} */
          f
        );
        me?.delete(u), (a & ot) === 0 && (a & ce && (T === null || (T.f & fn) === 0) && (f.f |= ot), Ir(u, Se, n));
      } else if (o) {
        var h = (
          /** @type {Effect} */
          f
        );
        (a & Te) !== 0 && Fe !== null && Fe.add(h), n !== null ? n.push(h) : Bn(h);
      }
    }
}
function pt(e) {
  if (typeof e != "object" || e === null || en in e)
    return e;
  const t = Mi(e);
  if (t !== Ai && t !== Ci)
    return e;
  var n = /* @__PURE__ */ new Map(), r = _r(e), i = /* @__PURE__ */ P(0), s = lt, f = (a) => {
    if (lt === s)
      return a();
    var o = E, u = lt;
    ve(null), ar(s);
    var h = a();
    return ve(o), ar(u), h;
  };
  return r && n.set("length", /* @__PURE__ */ P(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, o, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && qi();
        var h = n.get(o);
        return h === void 0 ? f(() => {
          var _ = /* @__PURE__ */ P(u.value);
          return n.set(o, _), _;
        }) : w(h, u.value, !0), !0;
      },
      deleteProperty(a, o) {
        var u = n.get(o);
        if (u === void 0) {
          if (o in a) {
            const h = f(() => /* @__PURE__ */ P(I));
            n.set(o, h), It(i);
          }
        } else
          w(u, I), It(i);
        return !0;
      },
      get(a, o, u) {
        if (o === en)
          return e;
        var h = n.get(o), _ = o in a;
        if (h === void 0 && (!_ || Ot(a, o)?.writable) && (h = f(() => {
          var d = pt(_ ? a[o] : I), c = /* @__PURE__ */ P(d);
          return c;
        }), n.set(o, h)), h !== void 0) {
          var v = p(h);
          return v === I ? void 0 : v;
        }
        return Reflect.get(a, o, u);
      },
      getOwnPropertyDescriptor(a, o) {
        var u = Reflect.getOwnPropertyDescriptor(a, o);
        if (u && "value" in u) {
          var h = n.get(o);
          h && (u.value = p(h));
        } else if (u === void 0) {
          var _ = n.get(o), v = _?.v;
          if (_ !== void 0 && v !== I)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return u;
      },
      has(a, o) {
        if (o === en)
          return !0;
        var u = n.get(o), h = u !== void 0 && u.v !== I || Reflect.has(a, o);
        if (u !== void 0 || T !== null && (!h || Ot(a, o)?.writable)) {
          u === void 0 && (u = f(() => {
            var v = h ? pt(a[o]) : I, d = /* @__PURE__ */ P(v);
            return d;
          }), n.set(o, u));
          var _ = p(u);
          if (_ === I)
            return !1;
        }
        return h;
      },
      set(a, o, u, h) {
        var _ = n.get(o), v = o in a;
        if (r && o === "length")
          for (var d = u; d < /** @type {Source<number>} */
          _.v; d += 1) {
            var c = n.get(d + "");
            c !== void 0 ? w(c, I) : d in a && (c = f(() => /* @__PURE__ */ P(I)), n.set(d + "", c));
          }
        if (_ === void 0)
          (!v || Ot(a, o)?.writable) && (_ = f(() => /* @__PURE__ */ P(void 0)), w(_, pt(u)), n.set(o, _));
        else {
          v = _.v !== I;
          var m = f(() => pt(u));
          w(_, m);
        }
        var x = Reflect.getOwnPropertyDescriptor(a, o);
        if (x?.set && x.set.call(h, u), !v) {
          if (r && typeof o == "string") {
            var M = (
              /** @type {Source<number>} */
              n.get("length")
            ), A = Number(o);
            Number.isInteger(A) && A >= M.v && w(M, A + 1);
          }
          It(i);
        }
        return !0;
      },
      ownKeys(a) {
        p(i);
        var o = Reflect.ownKeys(a).filter((_) => {
          var v = n.get(_);
          return v === void 0 || v.v !== I;
        });
        for (var [u, h] of n)
          h.v !== I && !(u in a) && o.push(u);
        return o;
      },
      setPrototypeOf() {
        ji();
      }
    }
  );
}
var sr, Pr, Dr, Br;
function xs() {
  if (sr === void 0) {
    sr = window, Pr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Dr = Ot(t, "firstChild").get, Br = Ot(t, "nextSibling").get, nr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), nr(n) && (n.__t = void 0);
  }
}
function Ue(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function cn(e) {
  return (
    /** @type {TemplateNode | null} */
    Dr.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
  return (
    /** @type {TemplateNode | null} */
    Br.call(e)
  );
}
function B(e, t) {
  return /* @__PURE__ */ cn(e);
}
function lr(e, t = !1) {
  {
    var n = /* @__PURE__ */ cn(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ut(n) : n;
  }
}
function te(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ut(r);
  return r;
}
function ks(e) {
  e.textContent = "";
}
function Vr() {
  return !1;
}
function Es(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Wi, e, void 0)
  );
}
function qr(e) {
  var t = E, n = T;
  ve(null), Ae(null);
  try {
    return e();
  } finally {
    ve(t), Ae(n);
  }
}
function Ts(e) {
  T === null && (E === null && Bi(), Di()), $e && Pi();
}
function Ss(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Pe(e, t) {
  var n = T;
  n !== null && (n.f & U) !== 0 && (e |= U);
  var r = {
    ctx: W,
    deps: null,
    nodes: null,
    f: e | q | ce,
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
  S?.register_created_effect(r);
  var i = r;
  if ((e & kt) !== 0)
    vt !== null ? vt.push(r) : at.ensure().schedule(r);
  else if (t !== null) {
    try {
      At(r);
    } catch (f) {
      throw K(r), f;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Ct) === 0 && (i = i.first, (e & Te) !== 0 && (e & Et) !== 0 && i !== null && (i.f |= Et));
  }
  if (i !== null && (i.parent = n, n !== null && Ss(i, n), E !== null && (E.f & j) !== 0 && (e & Ye) === 0)) {
    var s = (
      /** @type {Derived} */
      E
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return r;
}
function jn() {
  return E !== null && !we;
}
function As(e) {
  const t = Pe(_n, null);
  return R(t, z), t.teardown = e, t;
}
function jr(e) {
  Ts();
  var t = (
    /** @type {Effect} */
    T.f
  ), n = !E && (t & ye) !== 0 && (t & ut) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      W
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Zr(e);
}
function Zr(e) {
  return Pe(kt | Ri, e);
}
function Cs(e) {
  at.ensure();
  const t = Pe(Ye | Ct, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? st(t, () => {
      K(t), r(void 0);
    }) : (K(t), r(void 0));
  });
}
function Ms(e) {
  return Pe(kt, e);
}
function Fs(e) {
  return Pe(Pt | Ct, e);
}
function Hr(e, t = 0) {
  return Pe(_n | t, e);
}
function Ke(e, t = [], n = [], r = []) {
  hs(r, t, n, (i) => {
    Pe(_n, () => e(...i.map(p)));
  });
}
function Zn(e, t = 0) {
  var n = Pe(Te | t, e);
  return n;
}
function ue(e) {
  return Pe(ye | Ct, e);
}
function Ur(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = $e, r = E;
    or(!0), ve(null);
    try {
      t.call(null);
    } finally {
      or(n), ve(r);
    }
  }
}
function Hn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && qr(() => {
      i.abort(Le);
    });
    var r = n.next;
    (n.f & Ye) !== 0 ? n.parent = null : K(n, t), n = r;
  }
}
function Ls(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & ye) === 0 && K(t), t = n;
  }
}
function K(e, t = !0) {
  var n = !1;
  (t || (e.f & Ni) !== 0) && e.nodes !== null && e.nodes.end !== null && (Ns(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), R(e, En), Hn(e, t && !n), Dt(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  Ur(e), e.f ^= En, e.f |= de;
  var i = e.parent;
  i !== null && i.first !== null && Yr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Ns(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Ut(e);
    e.remove(), e = n;
  }
}
function Yr(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function st(e, t, n = !0) {
  var r = [];
  $r(e, r, !0);
  var i = () => {
    n && K(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var f = () => --s || i();
    for (var a of r)
      a.out(f);
  } else
    i();
}
function $r(e, t, n) {
  if ((e.f & U) === 0) {
    e.f ^= U;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & Ye) === 0) {
        var f = (i.f & Et) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & ye) !== 0 && (e.f & Te) !== 0;
        $r(i, t, f ? n : !1);
      }
      i = s;
    }
  }
}
function Un(e) {
  Gr(e, !0);
}
function Gr(e, t) {
  if ((e.f & U) !== 0) {
    e.f ^= U, (e.f & z) === 0 && (R(e, q), at.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & Et) !== 0 || (n.f & ye) !== 0;
      Gr(n, i ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const f of s)
        (f.is_global || t) && f.in();
  }
}
function Yn(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Ut(n);
      t.append(n), n = i;
    }
}
let an = !1, $e = !1;
function or(e) {
  $e = e;
}
let E = null, we = !1;
function ve(e) {
  E = e;
}
let T = null;
function Ae(e) {
  T = e;
}
let he = null;
function Kr(e) {
  E !== null && (he === null ? he = [e] : he.push(e));
}
let G = null, ne = 0, le = null;
function Rs(e) {
  le = e;
}
let Wr = 1, Qe = 0, lt = Qe;
function ar(e) {
  lt = e;
}
function Qr() {
  return ++Wr;
}
function Yt(e) {
  var t = e.f;
  if ((t & q) !== 0)
    return !0;
  if (t & j && (e.f &= ~ot), (t & Se) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Yt(
        /** @type {Derived} */
        s
      ) && Rr(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & ce) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    me === null && R(e, z);
  }
  return !1;
}
function Xr(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(he !== null && xt.call(he, e)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & j) !== 0 ? Xr(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? R(s, q) : (s.f & z) !== 0 && R(s, Se), Bn(
        /** @type {Effect} */
        s
      ));
    }
}
function Jr(e) {
  var m;
  var t = G, n = ne, r = le, i = E, s = he, f = W, a = we, o = lt, u = e.f;
  G = /** @type {null | Value[]} */
  null, ne = 0, le = null, E = (u & (ye | Ye)) === 0 ? e : null, he = null, Tt(e.ctx), we = !1, lt = ++Qe, e.ac !== null && (qr(() => {
    e.ac.abort(Le);
  }), e.ac = null);
  try {
    e.f |= fn;
    var h = (
      /** @type {Function} */
      e.fn
    ), _ = h();
    e.f |= ut;
    var v = e.deps, d = S?.is_fork;
    if (G !== null) {
      var c;
      if (d || Dt(e, ne), v !== null && ne > 0)
        for (v.length = ne + G.length, c = 0; c < G.length; c++)
          v[ne + c] = G[c];
      else
        e.deps = v = G;
      if (jn() && (e.f & ce) !== 0)
        for (c = ne; c < v.length; c++)
          ((m = v[c]).reactions ?? (m.reactions = [])).push(e);
    } else !d && v !== null && ne < v.length && (Dt(e, ne), v.length = ne);
    if (kr() && le !== null && !we && v !== null && (e.f & (j | Se | q)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      le.length; c++)
        Xr(
          le[c],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Qe++, i.deps !== null)
        for (let x = 0; x < n; x += 1)
          i.deps[x].rv = Qe;
      if (t !== null)
        for (const x of t)
          x.rv = Qe;
      le !== null && (r === null ? r = le : r.push(.../** @type {Source[]} */
      le));
    }
    return (e.f & He) !== 0 && (e.f ^= He), _;
  } catch (x) {
    return Tr(x);
  } finally {
    e.f ^= fn, G = t, ne = n, le = r, E = i, he = s, Tt(f), we = a, lt = o;
  }
}
function Os(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Ti.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & j) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (G === null || !xt.call(G, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & ce) !== 0 && (s.f ^= ce, s.f &= ~ot), s.v !== I && Pn(s), ws(s), Dt(s, 0);
  }
}
function Dt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Os(e, n[r]);
}
function At(e) {
  var t = e.f;
  if ((t & de) === 0) {
    R(e, z);
    var n = T, r = an;
    T = e, an = !0;
    try {
      (t & (Te | mr)) !== 0 ? Ls(e) : Hn(e), Ur(e);
      var i = Jr(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Wr;
      var s;
    } finally {
      an = r, T = n;
    }
  }
}
async function fr() {
  await Promise.resolve(), is();
}
function p(e) {
  var t = e.f, n = (t & j) !== 0;
  if (E !== null && !we) {
    var r = T !== null && (T.f & de) !== 0;
    if (!r && (he === null || !xt.call(he, e))) {
      var i = E.deps;
      if ((E.f & fn) !== 0)
        e.rv < Qe && (e.rv = Qe, G === null && i !== null && i[ne] === e ? ne++ : G === null ? G = [e] : G.push(e));
      else {
        (E.deps ?? (E.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [E] : xt.call(s, E) || s.push(E);
      }
    }
  }
  if ($e && it.has(e))
    return it.get(e);
  if (n) {
    var f = (
      /** @type {Derived} */
      e
    );
    if ($e) {
      var a = f.v;
      return ((f.f & z) === 0 && f.reactions !== null || ti(f)) && (a = qn(f)), it.set(f, a), a;
    }
    var o = (f.f & ce) === 0 && !we && E !== null && (an || (E.f & ce) !== 0), u = (f.f & ut) === 0;
    Yt(f) && (o && (f.f |= ce), Rr(f)), o && !u && (Or(f), ei(f));
  }
  if (me?.has(e))
    return me.get(e);
  if ((e.f & He) !== 0)
    throw e.v;
  return e.v;
}
function ei(e) {
  if (e.f |= ce, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & j) !== 0 && (t.f & ce) === 0 && (Or(
        /** @type {Derived} */
        t
      ), ei(
        /** @type {Derived} */
        t
      ));
}
function ti(e) {
  if (e.v === I) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (it.has(t) || (t.f & j) !== 0 && ti(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function $n(e) {
  var t = we;
  try {
    return we = !0, e();
  } finally {
    we = t;
  }
}
const zs = ["touchstart", "touchmove"];
function Is(e) {
  return zs.includes(e);
}
const Xe = Symbol("events"), ni = /* @__PURE__ */ new Set(), Nn = /* @__PURE__ */ new Set();
function Xt(e, t, n) {
  (t[Xe] ?? (t[Xe] = {}))[e] = n;
}
function Ps(e) {
  for (var t = 0; t < e.length; t++)
    ni.add(e[t]);
  for (var n of Nn)
    n(e);
}
let ur = null;
function cr(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  ur = e;
  var f = 0, a = ur === e && e[Xe];
  if (a) {
    var o = i.indexOf(a);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Xe] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    o <= u && (f = o);
  }
  if (s = /** @type {Element} */
  i[f] || e.target, s !== t) {
    Si(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var h = E, _ = T;
    ve(null), Ae(null);
    try {
      for (var v, d = []; s !== null; ) {
        var c = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var m = s[Xe]?.[r];
          m != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && m.call(s, e);
        } catch (x) {
          v ? d.push(x) : v = x;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        s = c;
      }
      if (v) {
        for (let x of d)
          queueMicrotask(() => {
            throw x;
          });
        throw v;
      }
    } finally {
      e[Xe] = t, delete e.currentTarget, ve(h), Ae(_);
    }
  }
}
const Ds = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Bs(e) {
  return (
    /** @type {string} */
    Ds?.createHTML(e) ?? e
  );
}
function Vs(e) {
  var t = Es("template");
  return t.innerHTML = Bs(e.replaceAll("<!>", "<!---->")), t.content;
}
function Rn(e, t) {
  var n = (
    /** @type {Effect} */
    T
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Y(e, t) {
  var n = (t & Gi) !== 0, r = (t & Ki) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = Vs(s ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ cn(i)));
    var f = (
      /** @type {TemplateNode} */
      r || Pr ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ cn(f)
      ), o = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      Rn(a, o);
    } else
      Rn(f, f);
    return f;
  };
}
function qs() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Ue();
  return e.append(t, n), Rn(t, n), e;
}
function V(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Be(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function js(e, t) {
  return Zs(e, t);
}
const Jt = /* @__PURE__ */ new Map();
function Zs(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: f = !0, transformError: a }) {
  xs();
  var o = void 0, u = Cs(() => {
    var h = n ?? t.appendChild(Ue());
    as(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (d) => {
        br({});
        var c = (
          /** @type {ComponentContext} */
          W
        );
        s && (c.c = s), i && (r.$$events = i), o = e(d, r) || {}, xr();
      },
      a
    );
    var _ = /* @__PURE__ */ new Set(), v = (d) => {
      for (var c = 0; c < d.length; c++) {
        var m = d[c];
        if (!_.has(m)) {
          _.add(m);
          var x = Is(m);
          for (const Z of [t, document]) {
            var M = Jt.get(Z);
            M === void 0 && (M = /* @__PURE__ */ new Map(), Jt.set(Z, M));
            var A = M.get(m);
            A === void 0 ? (Z.addEventListener(m, cr, { passive: x }), M.set(m, 1)) : M.set(m, A + 1);
          }
        }
      }
    };
    return v(pn(ni)), Nn.add(v), () => {
      for (var d of _)
        for (const x of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            Jt.get(x)
          ), m = (
            /** @type {number} */
            c.get(d)
          );
          --m == 0 ? (x.removeEventListener(d, cr), c.delete(d), c.size === 0 && Jt.delete(x)) : c.set(d, m);
        }
      Nn.delete(v), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return On.set(o, u), o;
}
let On = /* @__PURE__ */ new WeakMap();
function Hs(e, t) {
  const n = On.get(e);
  return n ? (On.delete(e), n(t)) : Promise.resolve();
}
var ge, Ee, se, rt, Zt, Ht, vn;
class Us {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    _e(this, "anchor");
    /** @type {Map<Batch, Key>} */
    b(this, ge, /* @__PURE__ */ new Map());
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
    b(this, Ee, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    b(this, se, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    b(this, rt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    b(this, Zt, !0);
    /**
     * @param {Batch} batch
     */
    b(this, Ht, (t) => {
      if (l(this, ge).has(t)) {
        var n = (
          /** @type {Key} */
          l(this, ge).get(t)
        ), r = l(this, Ee).get(n);
        if (r)
          Un(r), l(this, rt).delete(n);
        else {
          var i = l(this, se).get(n);
          i && (l(this, Ee).set(n, i.effect), l(this, se).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, f] of l(this, ge)) {
          if (l(this, ge).delete(s), s === t)
            break;
          const a = l(this, se).get(f);
          a && (K(a.effect), l(this, se).delete(f));
        }
        for (const [s, f] of l(this, Ee)) {
          if (s === n || l(this, rt).has(s)) continue;
          const a = () => {
            if (Array.from(l(this, ge).values()).includes(s)) {
              var u = document.createDocumentFragment();
              Yn(f, u), u.append(Ue()), l(this, se).set(s, { effect: f, fragment: u });
            } else
              K(f);
            l(this, rt).delete(s), l(this, Ee).delete(s);
          };
          l(this, Zt) || !r ? (l(this, rt).add(s), st(f, a, !1)) : a();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    b(this, vn, (t) => {
      l(this, ge).delete(t);
      const n = Array.from(l(this, ge).values());
      for (const [r, i] of l(this, se))
        n.includes(r) || (K(i.effect), l(this, se).delete(r));
    });
    this.anchor = t, k(this, Zt, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      S
    ), i = Vr();
    if (n && !l(this, Ee).has(t) && !l(this, se).has(t))
      if (i) {
        var s = document.createDocumentFragment(), f = Ue();
        s.append(f), l(this, se).set(t, {
          effect: ue(() => n(f)),
          fragment: s
        });
      } else
        l(this, Ee).set(
          t,
          ue(() => n(this.anchor))
        );
    if (l(this, ge).set(r, t), i) {
      for (const [a, o] of l(this, Ee))
        a === t ? r.unskip_effect(o) : r.skip_effect(o);
      for (const [a, o] of l(this, se))
        a === t ? r.unskip_effect(o.effect) : r.skip_effect(o.effect);
      r.oncommit(l(this, Ht)), r.ondiscard(l(this, vn));
    } else
      l(this, Ht).call(this, r);
  }
}
ge = new WeakMap(), Ee = new WeakMap(), se = new WeakMap(), rt = new WeakMap(), Zt = new WeakMap(), Ht = new WeakMap(), vn = new WeakMap();
function Me(e, t, n = !1) {
  var r = new Us(e), i = n ? Et : 0;
  function s(f, a) {
    r.ensure(f, a);
  }
  Zn(() => {
    var f = !1;
    t((a, o = 0) => {
      f = !0, s(o, a);
    }), f || s(-1, null);
  }, i);
}
function Ys(e, t) {
  return t;
}
function $s(e, t, n) {
  for (var r = [], i = t.length, s, f = t.length, a = 0; a < i; a++) {
    let _ = t[a];
    st(
      _,
      () => {
        if (s) {
          if (s.pending.delete(_), s.done.add(_), s.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            zn(e, pn(s.done)), v.delete(s), v.size === 0 && (e.outrogroups = null);
          }
        } else
          f -= 1;
      },
      !1
    );
  }
  if (f === 0) {
    var o = r.length === 0 && n !== null;
    if (o) {
      var u = (
        /** @type {Element} */
        n
      ), h = (
        /** @type {Element} */
        u.parentNode
      );
      ks(h), h.append(u), e.items.clear();
    }
    zn(e, t, !o);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function zn(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const f of e.pending.values())
      for (const a of f)
        r.add(
          /** @type {EachItem} */
          e.items.get(a).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (r?.has(s)) {
      s.f |= Ie;
      const f = document.createDocumentFragment();
      Yn(s, f);
    } else
      K(t[i], n);
  }
}
var dr;
function Gs(e, t, n, r, i, s = null) {
  var f = e, a = /* @__PURE__ */ new Map();
  {
    var o = (
      /** @type {Element} */
      e
    );
    f = o.appendChild(Ue());
  }
  var u = null, h = /* @__PURE__ */ gs(() => {
    var A = n();
    return _r(A) ? A : A == null ? [] : pn(A);
  }), _, v = /* @__PURE__ */ new Map(), d = !0;
  function c(A) {
    (M.effect.f & de) === 0 && (M.pending.delete(A), M.fallback = u, Ks(M, _, f, t, r), u !== null && (_.length === 0 ? (u.f & Ie) === 0 ? Un(u) : (u.f ^= Ie, Rt(u, null, f)) : st(u, () => {
      u = null;
    })));
  }
  function m(A) {
    M.pending.delete(A);
  }
  var x = Zn(() => {
    _ = /** @type {V[]} */
    p(h);
    for (var A = _.length, Z = /* @__PURE__ */ new Set(), Q = (
      /** @type {Batch} */
      S
    ), Ce = Vr(), be = 0; be < A; be += 1) {
      var De = _[be], X = r(De, be), J = d ? null : a.get(X);
      J ? (J.v && St(J.v, De), J.i && St(J.i, be), Ce && Q.unskip_effect(J.e)) : (J = Ws(
        a,
        d ? f : dr ?? (dr = Ue()),
        De,
        X,
        be,
        i,
        t,
        n
      ), d || (J.e.f |= Ie), a.set(X, J)), Z.add(X);
    }
    if (A === 0 && s && !u && (d ? u = ue(() => s(f)) : (u = ue(() => s(dr ?? (dr = Ue()))), u.f |= Ie)), A > Z.size && Ii(), !d)
      if (v.set(Q, Z), Ce) {
        for (const [$t, gn] of a)
          Z.has($t) || Q.skip_effect(gn.e);
        Q.oncommit(c), Q.ondiscard(m);
      } else
        c(Q);
    p(h);
  }), M = { effect: x, items: a, pending: v, outrogroups: null, fallback: u };
  d = !1;
}
function Nt(e) {
  for (; e !== null && (e.f & ye) === 0; )
    e = e.next;
  return e;
}
function Ks(e, t, n, r, i) {
  var s = t.length, f = e.items, a = Nt(e.effect.first), o, u = null, h = [], _ = [], v, d, c, m;
  for (m = 0; m < s; m += 1) {
    if (v = t[m], d = i(v, m), c = /** @type {EachItem} */
    f.get(d).e, e.outrogroups !== null)
      for (const X of e.outrogroups)
        X.pending.delete(c), X.done.delete(c);
    if ((c.f & U) !== 0 && Un(c), (c.f & Ie) !== 0)
      if (c.f ^= Ie, c === a)
        Rt(c, null, n);
      else {
        var x = u ? u.next : a;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), Ve(e, u, c), Ve(e, c, x), Rt(c, x, n), u = c, h = [], _ = [], a = Nt(u.next);
        continue;
      }
    if (c !== a) {
      if (o !== void 0 && o.has(c)) {
        if (h.length < _.length) {
          var M = _[0], A;
          u = M.prev;
          var Z = h[0], Q = h[h.length - 1];
          for (A = 0; A < h.length; A += 1)
            Rt(h[A], M, n);
          for (A = 0; A < _.length; A += 1)
            o.delete(_[A]);
          Ve(e, Z.prev, Q.next), Ve(e, u, Z), Ve(e, Q, M), a = M, u = Q, m -= 1, h = [], _ = [];
        } else
          o.delete(c), Rt(c, a, n), Ve(e, c.prev, c.next), Ve(e, c, u === null ? e.effect.first : u.next), Ve(e, u, c), u = c;
        continue;
      }
      for (h = [], _ = []; a !== null && a !== c; )
        (o ?? (o = /* @__PURE__ */ new Set())).add(a), _.push(a), a = Nt(a.next);
      if (a === null)
        continue;
    }
    (c.f & Ie) === 0 && h.push(c), u = c, a = Nt(c.next);
  }
  if (e.outrogroups !== null) {
    for (const X of e.outrogroups)
      X.pending.size === 0 && (zn(e, pn(X.done)), e.outrogroups?.delete(X));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || o !== void 0) {
    var Ce = [];
    if (o !== void 0)
      for (c of o)
        (c.f & U) === 0 && Ce.push(c);
    for (; a !== null; )
      (a.f & U) === 0 && a !== e.fallback && Ce.push(a), a = Nt(a.next);
    var be = Ce.length;
    if (be > 0) {
      var De = s === 0 ? n : null;
      $s(e, Ce, De);
    }
  }
}
function Ws(e, t, n, r, i, s, f, a) {
  var o = (f & Ui) !== 0 ? (f & $i) === 0 ? /* @__PURE__ */ ys(n, !1, !1) : ft(n) : null, u = (f & Yi) !== 0 ? ft(i) : null;
  return {
    v: o,
    i: u,
    e: ue(() => (s(t, o ?? n, u ?? i, a), () => {
      e.delete(r);
    }))
  };
}
function Rt(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & Ie) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ut(r)
      );
      if (s.before(r), r === i)
        return;
      r = f;
    }
}
function Ve(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Qs(e, t, n) {
  var r = e == null ? "" : "" + e;
  return r === "" ? null : r;
}
function hr(e, t, n, r, i, s) {
  var f = e.__className;
  if (f !== n || f === void 0) {
    var a = Qs(n);
    a == null ? e.removeAttribute("class") : e.className = a, e.__className = n;
  }
  return s;
}
function vr(e, t) {
  return e === t || e?.[en] === t;
}
function Xs(e = {}, t, n, r) {
  var i = (
    /** @type {ComponentContext} */
    W.r
  ), s = (
    /** @type {Effect} */
    T
  );
  return Ms(() => {
    var f, a;
    return Hr(() => {
      f = a, a = [], $n(() => {
        e !== n(...a) && (t(e, ...a), f && vr(n(...f), e) && t(null, ...f));
      });
    }), () => {
      let o = s;
      for (; o !== i && o.parent !== null && o.parent.f & En; )
        o = o.parent;
      const u = () => {
        a && vr(n(...a), e) && t(null, ...a);
      }, h = o.teardown;
      o.teardown = () => {
        u(), h?.();
      };
    };
  }), e;
}
function Js(e) {
  W === null && Oi(), jr(() => {
    const t = $n(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
const el = "5";
var pr;
typeof window < "u" && ((pr = window.__svelte ?? (window.__svelte = {})).v ?? (pr.v = /* @__PURE__ */ new Set())).add(el);
var tl = /* @__PURE__ */ Y('<div class="bg-yellow-50 border border-yellow-300 text-yellow-800 px-4 py-3 rounded-lg mb-4 text-sm">Please log in to manage your zones of influence</div>'), nl = /* @__PURE__ */ Y('<svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span>Getting location...</span>', 1), rl = /* @__PURE__ */ Y('<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> <span>Use My Location</span>', 1), il = /* @__PURE__ */ Y('<p class="mt-2 text-xs text-amber-600"> </p>'), sl = /* @__PURE__ */ Y('<p class="mt-2 text-xs text-green-600"> </p>'), ll = /* @__PURE__ */ Y('<div class="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded-lg mb-4 text-sm"> </div>'), ol = /* @__PURE__ */ Y('<div class="bg-green-50 border border-green-300 text-green-800 px-4 py-3 rounded-lg mb-4 text-sm"> </div>'), al = /* @__PURE__ */ Y('<div class="flex items-center justify-center py-12"><svg class="animate-spin h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span class="ml-3 text-gray-500">Loading zones...</span></div>'), fl = /* @__PURE__ */ Y('<div><p class="text-sm text-gray-500 mb-3">Click on the map to add a zone of influence at that location</p> <div class="w-full rounded-lg border border-gray-200 relative z-0" style="height:400px;min-height:350px"></div> <div class="mt-3 flex items-center gap-4 text-xs text-gray-500"><div class="flex items-center gap-1"><span class="inline-block w-3 h-3 rounded-full bg-green-500"></span><span>Your zones</span></div> <div class="flex items-center gap-1"><span class="inline-block w-3 h-3 rounded-full bg-gray-500"></span><span>Other zones</span></div> <div class="flex items-center gap-1"><span class="inline-block w-3 h-3 rounded border-2 border-blue-500 border-dashed"></span><span>Click preview</span></div></div></div>'), ul = /* @__PURE__ */ Y(`<div class="text-center py-12 text-gray-500"><svg class="mx-auto h-12 w-12 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg> <p>You haven't added any zones yet</p></div>`), cl = /* @__PURE__ */ Y('<p class="text-xs text-gray-400 font-mono"> </p>'), dl = /* @__PURE__ */ Y('<div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200"><div><h4 class="font-medium text-gray-900"> </h4> <p class="text-sm text-gray-500"> </p> <!></div> <button class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Remove zone"><svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div>'), hl = /* @__PURE__ */ Y('<div class="space-y-3"></div>'), vl = /* @__PURE__ */ Y(`<div class="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200"><h3 class="text-base font-semibold mb-1 text-gray-800">Quick Add</h3> <p class="text-xs text-gray-500 mb-3">Use your device's location to quickly add a zone (permission required)</p> <button class="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"><!></button> <!> <!></div> <!> <!> <div class="border-b border-gray-200 mb-6"><nav class="-mb-px flex space-x-8"><button>Map Selection</button> <button> </button></nav></div> <!>`, 1), pl = /* @__PURE__ */ Y('<div class="max-w-3xl mx-auto p-4"><div class="mb-6"><h2 class="text-2xl font-bold text-gray-900">Zones of Influence</h2> <p class="text-gray-600 text-sm mt-1">Set your zones of influence to appear on the realm map</p></div> <!></div>');
function _l(e, t) {
  br(t, !0);
  const n = 6;
  let r = /* @__PURE__ */ P("map"), i = /* @__PURE__ */ P(pt([])), s = /* @__PURE__ */ P(!0), f = /* @__PURE__ */ P(""), a = /* @__PURE__ */ P(""), o = /* @__PURE__ */ P(!1), u = /* @__PURE__ */ P(""), h = /* @__PURE__ */ P(null), _ = /* @__PURE__ */ P(void 0), v = /* @__PURE__ */ P(null), d = null, c = null, m = null, x = null, M = /* @__PURE__ */ _s(() => t.ctx.principal || null);
  async function A(y, g = {}) {
    return await t.ctx.callSync(y, g);
  }
  async function Z() {
    if (p(M)) {
      w(s, !0), w(f, "");
      try {
        const y = await A("get_my_zones", { user_id: p(M) });
        y?.success ? w(i, y.data || [], !0) : w(i, y?.data ?? (Array.isArray(y) ? y : []), !0);
      } catch (y) {
        w(f, y?.message || String(y), !0);
      } finally {
        w(s, !1);
      }
    }
  }
  async function Q(y, g, ee = "My Zone") {
    if (!p(M)) {
      w(f, "You must be logged in to add zones");
      return;
    }
    w(s, !0), w(f, ""), w(a, "");
    try {
      const D = await A("add_zone", {
        user_id: p(M),
        latitude: y,
        longitude: g,
        name: ee,
        description: `Zone of influence at ${y.toFixed(4)}, ${g.toFixed(4)}`,
        resolution: n
      });
      D?.success ? (w(a, "Zone added successfully!"), await Z()) : w(f, D?.error || "Failed to add zone", !0);
    } catch (D) {
      w(f, D?.message || String(D), !0);
    } finally {
      w(s, !1);
    }
  }
  async function Ce(y) {
    if (p(M) && confirm("Are you sure you want to remove this zone?")) {
      w(s, !0), w(f, ""), w(a, "");
      try {
        const g = await A("remove_zone", { user_id: p(M), zone_id: y });
        g?.success ? (w(a, "Zone removed successfully!"), await Z()) : w(f, g?.error || "Failed to remove zone", !0);
      } catch (g) {
        w(f, g?.message || String(g), !0);
      } finally {
        w(s, !1);
      }
    }
  }
  function be() {
    if (!navigator.geolocation) {
      w(u, "Geolocation is not supported by your browser");
      return;
    }
    w(o, !0), w(u, ""), navigator.geolocation.getCurrentPosition(
      async (y) => {
        w(
          h,
          {
            lat: y.coords.latitude,
            lng: y.coords.longitude
          },
          !0
        ), w(o, !1), confirm(`Add your current location as a zone of influence?

Latitude: ${p(h).lat.toFixed(4)}
Longitude: ${p(h).lng.toFixed(4)}`) && await Q(p(h).lat, p(h).lng, "My Location");
      },
      (y) => {
        w(o, !1), y.code === y.PERMISSION_DENIED ? w(u, "Location permission denied. You can still select zones manually on the map.") : y.code === y.POSITION_UNAVAILABLE ? w(u, "Location information unavailable.") : y.code === y.TIMEOUT ? w(u, "Location request timed out.") : w(u, "An error occurred while getting your location.");
      },
      { enableHighAccuracy: !0, timeout: 1e4, maximumAge: 0 }
    );
  }
  async function De() {
    if (!p(_) || p(v)) return;
    if (d = await import(
      /* @vite-ignore */
      "https://esm.sh/leaflet@1.9.4"
    ), c = await import(
      /* @vite-ignore */
      "https://esm.sh/h3-js@4.2.1"
    ), !document.querySelector('link[href*="leaflet"]')) {
      const g = document.createElement("link");
      g.rel = "stylesheet", g.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css", document.head.appendChild(g), await new Promise((ee) => setTimeout(ee, 150));
    }
    w(v, d.map(p(_)).setView([20, 0], 2), !0);
    const y = d.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 19
    });
    y.on("tileerror", () => {
      p(v)._fb || (p(v)._fb = !0, p(v).removeLayer(y), d.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19
      }).addTo(p(v)));
    }), y.addTo(p(v)), m = d.layerGroup().addTo(p(v)), x = d.layerGroup().addTo(p(v)), p(v).on("click", X), J();
  }
  function X(y) {
    const { lat: g, lng: ee } = y.latlng;
    if (c) {
      x.clearLayers();
      const Gt = c.latLngToCell(g, ee, n), ct = c.cellToBoundary(Gt).map((Mt) => [Mt[0], Mt[1]]);
      d.polygon(ct, {
        color: "#3B82F6",
        fillColor: "#3B82F6",
        fillOpacity: 0.3,
        weight: 2,
        dashArray: "5, 5"
      }).addTo(x), J();
    }
    const D = prompt("Enter a name for this zone:", "My Zone");
    D !== null && Q(g, ee, D);
  }
  function J() {
    if (!d || !p(v) || !m) return;
    m.clearLayers();
    for (const g of p(i)) {
      if (!g.latitude || !g.longitude) continue;
      const ee = g.user_id === p(M), D = ee ? "#10B981" : "#6B7280";
      if (c && g.h3_index && !g.h3_index.startsWith("manual_"))
        try {
          const Kt = c.cellToBoundary(g.h3_index).map((ct) => [ct[0], ct[1]]);
          d.polygon(Kt, {
            color: D,
            fillColor: D,
            fillOpacity: ee ? 0.4 : 0.2,
            weight: ee ? 2 : 1
          }).addTo(m).bindPopup(`<b>${g.name}</b><br>H3: ${g.h3_index}`);
        } catch {
        }
      d.circleMarker([g.latitude, g.longitude], {
        radius: 8,
        fillColor: D,
        color: "#fff",
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
      }).addTo(m).bindPopup(`<div class="text-sm"><b>${g.name}</b><br><span class="text-gray-500">${g.latitude.toFixed(4)}, ${g.longitude.toFixed(4)}</span>${g.h3_index ? `<br><span class="text-xs font-mono">${g.h3_index}</span>` : ""}</div>`);
    }
    const y = p(i).filter((g) => g.latitude && g.longitude);
    y.length > 0 && p(v).fitBounds(d.latLngBounds(y.map((g) => [g.latitude, g.longitude])), { padding: [50, 50], maxZoom: 10 });
  }
  jr(() => {
    p(r) === "map" && p(i).length >= 0 && p(v) && J();
  }), Js(async () => {
    await Z(), await fr(), p(_) && await De();
  });
  var $t = pl(), gn = te(B($t), 2);
  {
    var ri = (y) => {
      var g = tl();
      V(y, g);
    }, ii = (y) => {
      var g = vl(), ee = lr(g), D = te(B(ee), 4), Gt = B(D);
      {
        var Kt = (C) => {
          var L = nl();
          V(C, L);
        }, ct = (C) => {
          var L = rl();
          V(C, L);
        };
        Me(Gt, (C) => {
          p(o) ? C(Kt) : C(ct, -1);
        });
      }
      var Mt = te(D, 2);
      {
        var si = (C) => {
          var L = il(), pe = B(L);
          Ke(() => Be(pe, p(u))), V(C, L);
        };
        Me(Mt, (C) => {
          p(u) && C(si);
        });
      }
      var li = te(Mt, 2);
      {
        var oi = (C) => {
          var L = sl(), pe = B(L);
          Ke((Ft, yn) => Be(pe, `Current location: ${Ft ?? ""}, ${yn ?? ""}`), [
            () => p(h).lat.toFixed(4),
            () => p(h).lng.toFixed(4)
          ]), V(C, L);
        };
        Me(li, (C) => {
          p(h) && C(oi);
        });
      }
      var Gn = te(ee, 2);
      {
        var ai = (C) => {
          var L = ll(), pe = B(L);
          Ke(() => Be(pe, p(f))), V(C, L);
        };
        Me(Gn, (C) => {
          p(f) && C(ai);
        });
      }
      var Kn = te(Gn, 2);
      {
        var fi = (C) => {
          var L = ol(), pe = B(L);
          Ke(() => Be(pe, p(a))), V(C, L);
        };
        Me(Kn, (C) => {
          p(a) && C(fi);
        });
      }
      var Wn = te(Kn, 2), ui = B(Wn), mn = B(ui), wn = te(mn, 2), ci = B(wn), di = te(Wn, 2);
      {
        var hi = (C) => {
          var L = al();
          V(C, L);
        }, vi = (C) => {
          var L = fl(), pe = te(B(L), 2);
          Xs(pe, (Ft) => w(_, Ft), () => p(_)), V(C, L);
        }, pi = (C) => {
          var L = qs(), pe = lr(L);
          {
            var Ft = (dt) => {
              var Wt = ul();
              V(dt, Wt);
            }, yn = (dt) => {
              var Wt = hl();
              Gs(Wt, 21, () => p(i), Ys, (_i, ht) => {
                var Qn = dl(), Xn = B(Qn), Jn = B(Xn), gi = B(Jn), er = te(Jn, 2), mi = B(er), wi = te(er, 2);
                {
                  var yi = (Lt) => {
                    var Qt = cl(), xi = B(Qt);
                    Ke(() => Be(xi, `H3: ${p(ht).h3_index ?? ""}`)), V(Lt, Qt);
                  };
                  Me(wi, (Lt) => {
                    p(ht).h3_index && Lt(yi);
                  });
                }
                var bi = te(Xn, 2);
                Ke(
                  (Lt, Qt) => {
                    Be(gi, p(ht).name), Be(mi, `${Lt ?? ""}, ${Qt ?? ""}`);
                  },
                  [
                    () => p(ht).latitude?.toFixed(4),
                    () => p(ht).longitude?.toFixed(4)
                  ]
                ), Xt("click", bi, () => Ce(p(ht).id)), V(_i, Qn);
              }), V(dt, Wt);
            };
            Me(pe, (dt) => {
              p(i).length === 0 ? dt(Ft) : dt(yn, -1);
            });
          }
          V(C, L);
        };
        Me(di, (C) => {
          p(s) ? C(hi) : p(r) === "map" ? C(vi, 1) : p(r) === "list" && C(pi, 2);
        });
      }
      Ke(() => {
        D.disabled = p(o), hr(mn, 1, `py-2 px-1 border-b-2 font-medium text-sm transition-colors ${p(r) === "map" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`), hr(wn, 1, `py-2 px-1 border-b-2 font-medium text-sm transition-colors ${p(r) === "list" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`), Be(ci, `My Zones (${p(i).length ?? ""})`);
      }), Xt("click", D, be), Xt("click", mn, () => {
        w(r, "map"), fr().then(() => {
          p(_) && !p(v) ? De() : p(v) && p(v).invalidateSize();
        });
      }), Xt("click", wn, () => w(r, "list")), V(y, g);
    };
    Me(gn, (y) => {
      p(M) ? y(ii, -1) : y(ri);
    });
  }
  V(e, $t), xr();
}
Ps(["click"]);
function wl(e, t) {
  const n = js(_l, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Hs(n);
      } catch {
      }
    }
  };
}
export {
  wl as default
};
