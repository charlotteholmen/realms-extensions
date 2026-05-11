var zs = Object.defineProperty;
var qn = (e) => {
  throw TypeError(e);
};
var Ls = (e, t, n) => t in e ? zs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ie = (e, t, n) => Ls(e, typeof t != "symbol" ? t + "" : t, n), Qt = (e, t, n) => t.has(e) || qn("Cannot " + n);
var i = (e, t, n) => (Qt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), m = (e, t, n) => t.has(e) ? qn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), x = (e, t, n, r) => (Qt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), M = (e, t, n) => (Qt(e, t, "access private method"), n);
var Vs = Array.isArray, Bs = Array.prototype.indexOf, at = Array.prototype.includes, qs = Array.from, Us = Object.defineProperty, _t = Object.getOwnPropertyDescriptor, Ys = Object.prototype, Hs = Array.prototype, Gs = Object.getPrototypeOf, Un = Object.isExtensible;
const Js = () => {
};
function Ks(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function rr() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
const L = 2, lt = 4, Kt = 8, sr = 1 << 24, ve = 16, he = 32, Ce = 64, rn = 128, ee = 512, P = 1024, z = 2048, _e = 4096, te = 8192, fe = 16384, Ke = 32768, Yn = 1 << 25, ot = 65536, sn = 1 << 17, Ws = 1 << 18, ct = 1 << 19, $s = 1 << 20, Ge = 65536, Bt = 1 << 21, mt = 1 << 22, Oe = 1 << 23, Xt = Symbol("$state"), we = new class extends Error {
  constructor() {
    super(...arguments);
    ie(this, "name", "StaleReactionError");
    ie(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Zs() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Qs(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Xs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ei(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ti() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ni() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ri() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function si() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ii() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ai = 1, li = 2, I = Symbol(), oi = "http://www.w3.org/1999/xhtml";
function fi() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function ui() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function ir(e) {
  return e === this.v;
}
let re = null;
function ft(e) {
  re = e;
}
function ar(e, t = !1, n) {
  re = {
    p: re,
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
function lr(e) {
  var t = (
    /** @type {ComponentContext} */
    re
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Ar(r);
  }
  return t.i = !0, re = t.p, /** @type {T} */
  {};
}
function or() {
  return !0;
}
let Ie = [];
function fr() {
  var e = Ie;
  Ie = [], Ks(e);
}
function et(e) {
  if (Ie.length === 0 && !pt) {
    var t = Ie;
    queueMicrotask(() => {
      t === Ie && fr();
    });
  }
  Ie.push(e);
}
function di() {
  for (; Ie.length > 0; )
    fr();
}
function ur(e) {
  var t = E;
  if (t === null)
    return k.f |= Oe, e;
  if ((t.f & Ke) === 0 && (t.f & lt) === 0)
    throw e;
  Me(e, t);
}
function Me(e, t) {
  for (; t !== null; ) {
    if ((t.f & rn) !== 0) {
      if ((t.f & Ke) === 0)
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
const ci = -7169;
function C(e, t) {
  e.f = e.f & ci | t;
}
function pn(e) {
  (e.f & ee) !== 0 || e.deps === null ? C(e, P) : C(e, _e);
}
function dr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & L) === 0 || (t.f & Ge) === 0 || (t.f ^= Ge, dr(
        /** @type {Derived} */
        t.deps
      ));
}
function cr(e, t, n) {
  (e.f & z) !== 0 ? t.add(e) : (e.f & _e) !== 0 && n.add(e), dr(e.deps), C(e, P);
}
const Fe = /* @__PURE__ */ new Set();
let w = null, le = null, an = null, pt = !1, en = !1, Xe = null, Pt = null;
var Hn = 0;
let vi = 1;
var tt, nt, Le, xe, ue, wt, H, xt, Ne, ke, de, rt, st, Ve, D, Ft, vr, It, ln, jt, hi;
const Ht = class Ht {
  constructor() {
    m(this, D);
    ie(this, "id", vi++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    ie(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    ie(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, tt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, nt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, Le, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    m(this, xe, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    m(this, ue, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    m(this, wt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    m(this, H, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    m(this, xt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    m(this, Ne, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    m(this, ke, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    m(this, de, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    m(this, rt, /* @__PURE__ */ new Set());
    ie(this, "is_fork", !1);
    m(this, st, !1);
    /** @type {Set<Batch>} */
    m(this, Ve, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    i(this, de).has(t) || i(this, de).set(t, { d: [], m: [] }), i(this, rt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = i(this, de).get(t);
    if (r) {
      i(this, de).delete(t);
      for (var s of r.d)
        C(s, z), n(s);
      for (s of r.m)
        C(s, _e), n(s);
    }
    i(this, rt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== I && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Oe) === 0 && (this.current.set(t, [n, r]), le?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    w = this;
  }
  deactivate() {
    w = null, le = null;
  }
  flush() {
    try {
      en = !0, w = this, M(this, D, It).call(this);
    } finally {
      Hn = 0, an = null, Xe = null, Pt = null, en = !1, w = null, le = null, Ye.clear();
    }
  }
  discard() {
    for (const t of i(this, nt)) t(this);
    i(this, nt).clear(), i(this, Le).clear(), Fe.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    i(this, xt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    let r = i(this, xe).get(n) ?? 0;
    if (i(this, xe).set(n, r + 1), t) {
      let s = i(this, ue).get(n) ?? 0;
      i(this, ue).set(n, s + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, r) {
    let s = i(this, xe).get(n) ?? 0;
    if (s === 1 ? i(this, xe).delete(n) : i(this, xe).set(n, s - 1), t) {
      let a = i(this, ue).get(n) ?? 0;
      a === 1 ? i(this, ue).delete(n) : i(this, ue).set(n, a - 1);
    }
    i(this, st) || r || (x(this, st, !0), et(() => {
      x(this, st, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      i(this, Ne).add(r);
    for (const r of n)
      i(this, ke).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    i(this, tt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    i(this, nt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    i(this, Le).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of i(this, Le)) t(this);
    i(this, Le).clear();
  }
  settled() {
    return (i(this, wt) ?? x(this, wt, rr())).promise;
  }
  static ensure() {
    if (w === null) {
      const t = w = new Ht();
      en || (Fe.add(w), pt || et(() => {
        w === t && t.flush();
      }));
    }
    return w;
  }
  apply() {
    {
      le = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (an = t, t.b?.is_pending && (t.f & (lt | Kt | sr)) !== 0 && (t.f & Ke) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (Xe !== null && n === E && (k === null || (k.f & L) === 0))
        return;
      if ((r & (Ce | he)) !== 0) {
        if ((r & P) === 0)
          return;
        n.f ^= P;
      }
    }
    i(this, H).push(n);
  }
};
tt = new WeakMap(), nt = new WeakMap(), Le = new WeakMap(), xe = new WeakMap(), ue = new WeakMap(), wt = new WeakMap(), H = new WeakMap(), xt = new WeakMap(), Ne = new WeakMap(), ke = new WeakMap(), de = new WeakMap(), rt = new WeakMap(), st = new WeakMap(), Ve = new WeakMap(), D = new WeakSet(), Ft = function() {
  return this.is_fork || i(this, ue).size > 0;
}, vr = function() {
  for (const r of i(this, Ve))
    for (const s of i(r, ue).keys()) {
      for (var t = !1, n = s; n.parent !== null; ) {
        if (i(this, de).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, It = function() {
  var o;
  if (Hn++ > 1e3 && (Fe.delete(this), pi()), !M(this, D, Ft).call(this)) {
    for (const l of i(this, Ne))
      i(this, ke).delete(l), C(l, z), this.schedule(l);
    for (const l of i(this, ke))
      C(l, _e), this.schedule(l);
  }
  const t = i(this, H);
  x(this, H, []), this.apply();
  var n = Xe = [], r = [], s = Pt = [];
  for (const l of t)
    try {
      M(this, D, ln).call(this, l, n, r);
    } catch (u) {
      throw pr(l), u;
    }
  if (w = null, s.length > 0) {
    var a = Ht.ensure();
    for (const l of s)
      a.schedule(l);
  }
  if (Xe = null, Pt = null, M(this, D, Ft).call(this) || M(this, D, vr).call(this)) {
    M(this, D, jt).call(this, r), M(this, D, jt).call(this, n);
    for (const [l, u] of i(this, de))
      _r(l, u);
  } else {
    i(this, xe).size === 0 && Fe.delete(this), i(this, Ne).clear(), i(this, ke).clear();
    for (const l of i(this, tt)) l(this);
    i(this, tt).clear(), Gn(r), Gn(n), i(this, wt)?.resolve();
  }
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    w
  );
  if (i(this, H).length > 0) {
    const l = f ?? (f = this);
    i(l, H).push(...i(this, H).filter((u) => !i(l, H).includes(u)));
  }
  f !== null && (Fe.add(f), M(o = f, D, It).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
ln = function(t, n, r) {
  t.f ^= P;
  for (var s = t.first; s !== null; ) {
    var a = s.f, f = (a & (he | Ce)) !== 0, o = f && (a & P) !== 0, l = o || (a & te) !== 0 || i(this, de).has(s);
    if (!l && s.fn !== null) {
      f ? s.f ^= P : (a & lt) !== 0 ? n.push(s) : At(s) && ((a & ve) !== 0 && i(this, ke).add(s), dt(s));
      var u = s.first;
      if (u !== null) {
        s = u;
        continue;
      }
    }
    for (; s !== null; ) {
      var h = s.next;
      if (h !== null) {
        s = h;
        break;
      }
      s = s.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
jt = function(t) {
  for (var n = 0; n < t.length; n += 1)
    cr(t[n], i(this, Ne), i(this, ke));
}, hi = function() {
  var h, p, _;
  for (const c of Fe) {
    var t = c.id < this.id, n = [];
    for (const [d, [A, S]] of this.current) {
      if (c.current.has(d)) {
        var r = (
          /** @type {[any, boolean]} */
          c.current.get(d)[0]
        );
        if (t && A !== r)
          c.current.set(d, [A, S]);
        else
          continue;
      }
      n.push(d);
    }
    var s = [...c.current.keys()].filter((d) => !this.current.has(d));
    if (s.length === 0)
      t && c.discard();
    else if (n.length > 0) {
      if (t)
        for (const d of i(this, rt))
          c.unskip_effect(d, (A) => {
            var S;
            (A.f & (ve | mt)) !== 0 ? c.schedule(A) : M(S = c, D, jt).call(S, [A]);
          });
      c.activate();
      var a = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (var o of n)
        hr(o, s, a, f);
      f = /* @__PURE__ */ new Map();
      var l = [...c.current.keys()].filter(
        (d) => this.current.has(d) ? (
          /** @type {[any, boolean]} */
          this.current.get(d)[0] !== d
        ) : !0
      );
      for (const d of i(this, xt))
        (d.f & (fe | te | sn)) === 0 && bn(d, l, f) && ((d.f & (mt | ve)) !== 0 ? (C(d, z), c.schedule(d)) : i(c, Ne).add(d));
      if (i(c, H).length > 0) {
        c.apply();
        for (var u of i(c, H))
          M(h = c, D, ln).call(h, u, [], []);
        x(c, H, []);
      }
      c.deactivate();
    }
  }
  for (const c of Fe)
    i(c, Ve).has(this) && (i(c, Ve).delete(this), i(c, Ve).size === 0 && !M(p = c, D, Ft).call(p) && (c.activate(), M(_ = c, D, It).call(_)));
};
let Je = Ht;
function _i(e) {
  var t = pt;
  pt = !0;
  try {
    for (var n; ; ) {
      if (di(), w === null)
        return (
          /** @type {T} */
          n
        );
      w.flush();
    }
  } finally {
    pt = t;
  }
}
function pi() {
  try {
    ti();
  } catch (e) {
    Me(e, an);
  }
}
let me = null;
function Gn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (fe | te)) === 0 && At(r) && (me = /* @__PURE__ */ new Set(), dt(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Or(r), me?.size > 0)) {
        Ye.clear();
        for (const s of me) {
          if ((s.f & (fe | te)) !== 0) continue;
          const a = [s];
          let f = s.parent;
          for (; f !== null; )
            me.has(f) && (me.delete(f), a.push(f)), f = f.parent;
          for (let o = a.length - 1; o >= 0; o--) {
            const l = a[o];
            (l.f & (fe | te)) === 0 && dt(l);
          }
        }
        me.clear();
      }
    }
    me = null;
  }
}
function hr(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const a = s.f;
      (a & L) !== 0 ? hr(
        /** @type {Derived} */
        s,
        t,
        n,
        r
      ) : (a & (mt | ve)) !== 0 && (a & z) === 0 && bn(s, t, r) && (C(s, z), gn(
        /** @type {Effect} */
        s
      ));
    }
}
function bn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (at.call(t, s))
        return !0;
      if ((s.f & L) !== 0 && bn(
        /** @type {Derived} */
        s,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          s,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function gn(e) {
  w.schedule(e);
}
function _r(e, t) {
  if (!((e.f & he) !== 0 && (e.f & P) !== 0)) {
    (e.f & z) !== 0 ? t.d.push(e) : (e.f & _e) !== 0 && t.m.push(e), C(e, P);
    for (var n = e.first; n !== null; )
      _r(n, t), n = n.next;
  }
}
function pr(e) {
  C(e, P);
  for (var t = e.first; t !== null; )
    pr(t), t = t.next;
}
function bi(e) {
  let t = 0, n = Wt(0), r;
  return () => {
    wn() && (v(n), Nr(() => (t === 0 && (r = qr(() => e(() => bt(n)))), t += 1, () => {
      et(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, bt(n));
      });
    })));
  };
}
var gi = ot | ct;
function mi(e, t, n, r) {
  new yi(e, t, n, r);
}
var Z, _n, Q, Be, B, X, V, G, Ee, qe, Re, it, kt, Et, Se, Gt, O, wi, xi, ki, on, zt, Lt, fn, un;
class yi {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, s) {
    m(this, O);
    /** @type {Boundary | null} */
    ie(this, "parent");
    ie(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    ie(this, "transform_error");
    /** @type {TemplateNode} */
    m(this, Z);
    /** @type {TemplateNode | null} */
    m(this, _n, null);
    /** @type {BoundaryProps} */
    m(this, Q);
    /** @type {((anchor: Node) => void)} */
    m(this, Be);
    /** @type {Effect} */
    m(this, B);
    /** @type {Effect | null} */
    m(this, X, null);
    /** @type {Effect | null} */
    m(this, V, null);
    /** @type {Effect | null} */
    m(this, G, null);
    /** @type {DocumentFragment | null} */
    m(this, Ee, null);
    m(this, qe, 0);
    m(this, Re, 0);
    m(this, it, !1);
    /** @type {Set<Effect>} */
    m(this, kt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    m(this, Et, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    m(this, Se, null);
    m(this, Gt, bi(() => (x(this, Se, Wt(i(this, qe))), () => {
      x(this, Se, null);
    })));
    x(this, Z, t), x(this, Q, n), x(this, Be, (a) => {
      var f = (
        /** @type {Effect} */
        E
      );
      f.b = this, f.f |= rn, r(a);
    }), this.parent = /** @type {Effect} */
    E.b, this.transform_error = s ?? this.parent?.transform_error ?? ((a) => a), x(this, B, Rr(() => {
      M(this, O, on).call(this);
    }, gi));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    cr(t, i(this, kt), i(this, Et));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!i(this, Q).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    M(this, O, fn).call(this, t, n), x(this, qe, i(this, qe) + t), !(!i(this, Se) || i(this, it)) && (x(this, it, !0), et(() => {
      x(this, it, !1), i(this, Se) && Ut(i(this, Se), i(this, qe));
    }));
  }
  get_effect_pending() {
    return i(this, Gt).call(this), v(
      /** @type {Source<number>} */
      i(this, Se)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!i(this, Q).onerror && !i(this, Q).failed)
      throw t;
    w?.is_fork ? (i(this, X) && w.skip_effect(i(this, X)), i(this, V) && w.skip_effect(i(this, V)), i(this, G) && w.skip_effect(i(this, G)), w.on_fork_commit(() => {
      M(this, O, un).call(this, t);
    })) : M(this, O, un).call(this, t);
  }
}
Z = new WeakMap(), _n = new WeakMap(), Q = new WeakMap(), Be = new WeakMap(), B = new WeakMap(), X = new WeakMap(), V = new WeakMap(), G = new WeakMap(), Ee = new WeakMap(), qe = new WeakMap(), Re = new WeakMap(), it = new WeakMap(), kt = new WeakMap(), Et = new WeakMap(), Se = new WeakMap(), Gt = new WeakMap(), O = new WeakSet(), wi = function() {
  try {
    x(this, X, ye(() => i(this, Be).call(this, i(this, Z))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
xi = function(t) {
  const n = i(this, Q).failed;
  n && x(this, G, ye(() => {
    n(
      i(this, Z),
      () => t,
      () => () => {
      }
    );
  }));
}, ki = function() {
  const t = i(this, Q).pending;
  t && (this.is_pending = !0, x(this, V, ye(() => t(i(this, Z)))), et(() => {
    var n = x(this, Ee, document.createDocumentFragment()), r = Yt();
    n.append(r), x(this, X, M(this, O, Lt).call(this, () => ye(() => i(this, Be).call(this, r)))), i(this, Re) === 0 && (i(this, Z).before(n), x(this, Ee, null), gt(
      /** @type {Effect} */
      i(this, V),
      () => {
        x(this, V, null);
      }
    ), M(this, O, zt).call(
      this,
      /** @type {Batch} */
      w
    ));
  }));
}, on = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), x(this, Re, 0), x(this, qe, 0), x(this, X, ye(() => {
      i(this, Be).call(this, i(this, Z));
    })), i(this, Re) > 0) {
      var t = x(this, Ee, document.createDocumentFragment());
      Pr(i(this, X), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        i(this, Q).pending
      );
      x(this, V, ye(() => n(i(this, Z))));
    } else
      M(this, O, zt).call(
        this,
        /** @type {Batch} */
        w
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
zt = function(t) {
  this.is_pending = !1, t.transfer_effects(i(this, kt), i(this, Et));
}, /**
 * @template T
 * @param {() => T} fn
 */
Lt = function(t) {
  var n = E, r = k, s = re;
  pe(i(this, B)), se(i(this, B)), ft(i(this, B).ctx);
  try {
    return Je.ensure(), t();
  } catch (a) {
    return ur(a), null;
  } finally {
    pe(n), se(r), ft(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
fn = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && M(r = this.parent, O, fn).call(r, t, n);
    return;
  }
  x(this, Re, i(this, Re) + t), i(this, Re) === 0 && (M(this, O, zt).call(this, n), i(this, V) && gt(i(this, V), () => {
    x(this, V, null);
  }), i(this, Ee) && (i(this, Z).before(i(this, Ee)), x(this, Ee, null)));
}, /**
 * @param {unknown} error
 */
un = function(t) {
  i(this, X) && (K(i(this, X)), x(this, X, null)), i(this, V) && (K(i(this, V)), x(this, V, null)), i(this, G) && (K(i(this, G)), x(this, G, null));
  var n = i(this, Q).onerror;
  let r = i(this, Q).failed;
  var s = !1, a = !1;
  const f = () => {
    if (s) {
      ui();
      return;
    }
    s = !0, a && ii(), i(this, G) !== null && gt(i(this, G), () => {
      x(this, G, null);
    }), M(this, O, Lt).call(this, () => {
      M(this, O, on).call(this);
    });
  }, o = (l) => {
    try {
      a = !0, n?.(l, f), a = !1;
    } catch (u) {
      Me(u, i(this, B) && i(this, B).parent);
    }
    r && x(this, G, M(this, O, Lt).call(this, () => {
      try {
        return ye(() => {
          var u = (
            /** @type {Effect} */
            E
          );
          u.b = this, u.f |= rn, r(
            i(this, Z),
            () => l,
            () => f
          );
        });
      } catch (u) {
        return Me(
          u,
          /** @type {Effect} */
          i(this, B).parent
        ), null;
      }
    }));
  };
  et(() => {
    var l;
    try {
      l = this.transform_error(t);
    } catch (u) {
      Me(u, i(this, B) && i(this, B).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      o,
      /** @param {unknown} e */
      (u) => Me(u, i(this, B) && i(this, B).parent)
    ) : o(l);
  });
};
function Ei(e, t, n, r) {
  const s = gr;
  var a = e.filter((_) => !_.settled);
  if (n.length === 0 && a.length === 0) {
    r(t.map(s));
    return;
  }
  var f = (
    /** @type {Effect} */
    E
  ), o = Si(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((_) => _.promise)) : null;
  function u(_) {
    o();
    try {
      r(_);
    } catch (c) {
      (f.f & fe) === 0 && Me(c, f);
    }
    qt();
  }
  if (n.length === 0) {
    l.then(() => u(t.map(s)));
    return;
  }
  var h = br();
  function p() {
    Promise.all(n.map((_) => /* @__PURE__ */ Ti(_))).then((_) => u([...t.map(s), ..._])).catch((_) => Me(_, f)).finally(() => h());
  }
  l ? l.then(() => {
    o(), p(), qt();
  }) : p();
}
function Si() {
  var e = (
    /** @type {Effect} */
    E
  ), t = k, n = re, r = (
    /** @type {Batch} */
    w
  );
  return function(a = !0) {
    pe(e), se(t), ft(n), a && (e.f & fe) === 0 && (r?.activate(), r?.apply());
  };
}
function qt(e = !0) {
  pe(null), se(null), ft(null), e && w?.deactivate();
}
function br() {
  var e = (
    /** @type {Effect} */
    E
  ), t = (
    /** @type {Boundary} */
    e.b
  ), n = (
    /** @type {Batch} */
    w
  ), r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (s = !1) => {
    t.update_pending_count(-1, n), n.decrement(r, e, s);
  };
}
// @__NO_SIDE_EFFECTS__
function gr(e) {
  var t = L | z;
  return E !== null && (E.f |= ct), {
    ctx: re,
    deps: null,
    effects: null,
    equals: ir,
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
function Ti(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    E
  );
  r === null && Zs();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Wt(
    /** @type {V} */
    I
  ), f = !k, o = /* @__PURE__ */ new Map();
  return Vi(() => {
    var l = (
      /** @type {Effect} */
      E
    ), u = rr();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(qt);
    } catch (c) {
      u.reject(c), qt();
    }
    var h = (
      /** @type {Batch} */
      w
    );
    if (f) {
      if ((l.f & Ke) !== 0)
        var p = br();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        o.get(h)?.reject(we), o.delete(h);
      else {
        for (const c of o.values())
          c.reject(we);
        o.clear();
      }
      o.set(h, u);
    }
    const _ = (c, d = void 0) => {
      if (p) {
        var A = d === we;
        p(A);
      }
      if (!(d === we || (l.f & fe) !== 0)) {
        if (h.activate(), d)
          a.f |= Oe, Ut(a, d);
        else {
          (a.f & Oe) !== 0 && (a.f ^= Oe), Ut(a, c);
          for (const [S, U] of o) {
            if (o.delete(S), S === h) break;
            U.reject(we);
          }
        }
        h.deactivate();
      }
    };
    u.promise.then(_, (c) => _(null, c || "unknown"));
  }), Ii(() => {
    for (const l of o.values())
      l.reject(we);
  }), new Promise((l) => {
    function u(h) {
      function p() {
        h === s ? l(a) : u(s);
      }
      h.then(p, p);
    }
    u(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Jn(e) {
  const t = /* @__PURE__ */ gr(e);
  return Fr(t), t;
}
function Ai(e) {
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
function mn(e) {
  var t, n = E, r = e.parent;
  if (!De && r !== null && (r.f & (fe | te)) !== 0)
    return fi(), e.v;
  pe(r);
  try {
    e.f &= ~Ge, Ai(e), t = Lr(e);
  } finally {
    pe(n);
  }
  return t;
}
function mr(e) {
  var t = mn(e);
  if (!e.equals(t) && (e.wv = jr(), (!w?.is_fork || e.deps === null) && (w !== null ? w.capture(e, t, !0) : e.v = t, e.deps === null))) {
    C(e, P);
    return;
  }
  De || (le !== null ? (wn() || w?.is_fork) && le.set(e, t) : pn(e));
}
function Ni(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(we), t.teardown = Js, t.ac = null, yt(t, 0), xn(t));
}
function yr(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && dt(t);
}
let dn = /* @__PURE__ */ new Set();
const Ye = /* @__PURE__ */ new Map();
let wr = !1;
function Wt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ir,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function j(e, t) {
  const n = Wt(e);
  return Fr(n), n;
}
function y(e, t, n = !1) {
  k !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!oe || (k.f & sn) !== 0) && or() && (k.f & (L | ve | mt | sn)) !== 0 && (ne === null || !at.call(ne, e)) && si();
  let r = n ? ht(t) : t;
  return Ut(e, r, Pt);
}
function Ut(e, t, n = null) {
  if (!e.equals(t)) {
    Ye.set(e, De ? t : e.v);
    var r = Je.ensure();
    if (r.capture(e, t), (e.f & L) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & z) !== 0 && mn(s), le === null && pn(s);
    }
    e.wv = jr(), xr(e, z, n), E !== null && (E.f & P) !== 0 && (E.f & (he | Ce)) === 0 && ($ === null ? Yi([e]) : $.push(e)), !r.is_fork && dn.size > 0 && !wr && Ri();
  }
  return t;
}
function Ri() {
  wr = !1;
  for (const e of dn)
    (e.f & P) !== 0 && C(e, _e), At(e) && dt(e);
  dn.clear();
}
function bt(e) {
  y(e, e.v + 1);
}
function xr(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var s = r.length, a = 0; a < s; a++) {
      var f = r[a], o = f.f, l = (o & z) === 0;
      if (l && C(f, t), (o & L) !== 0) {
        var u = (
          /** @type {Derived} */
          f
        );
        le?.delete(u), (o & Ge) === 0 && (o & ee && (E === null || (E.f & Bt) === 0) && (f.f |= Ge), xr(u, _e, n));
      } else if (l) {
        var h = (
          /** @type {Effect} */
          f
        );
        (o & ve) !== 0 && me !== null && me.add(h), n !== null ? n.push(h) : gn(h);
      }
    }
}
function ht(e) {
  if (typeof e != "object" || e === null || Xt in e)
    return e;
  const t = Gs(e);
  if (t !== Ys && t !== Hs)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Vs(e), s = /* @__PURE__ */ j(0), a = He, f = (o) => {
    if (He === a)
      return o();
    var l = k, u = He;
    se(null), Qn(a);
    var h = o();
    return se(l), Qn(u), h;
  };
  return r && n.set("length", /* @__PURE__ */ j(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && ni();
        var h = n.get(l);
        return h === void 0 ? f(() => {
          var p = /* @__PURE__ */ j(u.value);
          return n.set(l, p), p;
        }) : y(h, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in o) {
            const h = f(() => /* @__PURE__ */ j(I));
            n.set(l, h), bt(s);
          }
        } else
          y(u, I), bt(s);
        return !0;
      },
      get(o, l, u) {
        if (l === Xt)
          return e;
        var h = n.get(l), p = l in o;
        if (h === void 0 && (!p || _t(o, l)?.writable) && (h = f(() => {
          var c = ht(p ? o[l] : I), d = /* @__PURE__ */ j(c);
          return d;
        }), n.set(l, h)), h !== void 0) {
          var _ = v(h);
          return _ === I ? void 0 : _;
        }
        return Reflect.get(o, l, u);
      },
      getOwnPropertyDescriptor(o, l) {
        var u = Reflect.getOwnPropertyDescriptor(o, l);
        if (u && "value" in u) {
          var h = n.get(l);
          h && (u.value = v(h));
        } else if (u === void 0) {
          var p = n.get(l), _ = p?.v;
          if (p !== void 0 && _ !== I)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return u;
      },
      has(o, l) {
        if (l === Xt)
          return !0;
        var u = n.get(l), h = u !== void 0 && u.v !== I || Reflect.has(o, l);
        if (u !== void 0 || E !== null && (!h || _t(o, l)?.writable)) {
          u === void 0 && (u = f(() => {
            var _ = h ? ht(o[l]) : I, c = /* @__PURE__ */ j(_);
            return c;
          }), n.set(l, u));
          var p = v(u);
          if (p === I)
            return !1;
        }
        return h;
      },
      set(o, l, u, h) {
        var p = n.get(l), _ = l in o;
        if (r && l === "length")
          for (var c = u; c < /** @type {Source<number>} */
          p.v; c += 1) {
            var d = n.get(c + "");
            d !== void 0 ? y(d, I) : c in o && (d = f(() => /* @__PURE__ */ j(I)), n.set(c + "", d));
          }
        if (p === void 0)
          (!_ || _t(o, l)?.writable) && (p = f(() => /* @__PURE__ */ j(void 0)), y(p, ht(u)), n.set(l, p));
        else {
          _ = p.v !== I;
          var A = f(() => ht(u));
          y(p, A);
        }
        var S = Reflect.getOwnPropertyDescriptor(o, l);
        if (S?.set && S.set.call(h, u), !_) {
          if (r && typeof l == "string") {
            var U = (
              /** @type {Source<number>} */
              n.get("length")
            ), Ae = Number(l);
            Number.isInteger(Ae) && Ae >= U.v && y(U, Ae + 1);
          }
          bt(s);
        }
        return !0;
      },
      ownKeys(o) {
        v(s);
        var l = Reflect.ownKeys(o).filter((p) => {
          var _ = n.get(p);
          return _ === void 0 || _.v !== I;
        });
        for (var [u, h] of n)
          h.v !== I && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        ri();
      }
    }
  );
}
var Kn, kr, Er, Sr;
function Mi() {
  if (Kn === void 0) {
    Kn = window, kr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Er = _t(t, "firstChild").get, Sr = _t(t, "nextSibling").get, Un(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Un(n) && (n.__t = void 0);
  }
}
function Yt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ut(e) {
  return (
    /** @type {TemplateNode | null} */
    Er.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
  return (
    /** @type {TemplateNode | null} */
    Sr.call(e)
  );
}
function g(e, t) {
  return /* @__PURE__ */ ut(e);
}
function Wn(e, t = !1) {
  {
    var n = /* @__PURE__ */ ut(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ $t(n) : n;
  }
}
function T(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ $t(r);
  return r;
}
function Oi() {
  return !1;
}
function Tr(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(oi, e, void 0)
  );
}
let $n = !1;
function Ci() {
  $n || ($n = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function yn(e) {
  var t = k, n = E;
  se(null), pe(null);
  try {
    return e();
  } finally {
    se(t), pe(n);
  }
}
function Di(e, t, n, r = n) {
  e.addEventListener(t, () => yn(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), r(!0);
  } : e.__on_r = () => r(!0), Ci();
}
function Pi(e) {
  E === null && (k === null && ei(), Xs()), De && Qs();
}
function Fi(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Te(e, t) {
  var n = E;
  n !== null && (n.f & te) !== 0 && (e |= te);
  var r = {
    ctx: re,
    deps: null,
    nodes: null,
    f: e | z | ee,
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
  w?.register_created_effect(r);
  var s = r;
  if ((e & lt) !== 0)
    Xe !== null ? Xe.push(r) : Je.ensure().schedule(r);
  else if (t !== null) {
    try {
      dt(r);
    } catch (f) {
      throw K(r), f;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & ct) === 0 && (s = s.first, (e & ve) !== 0 && (e & ot) !== 0 && s !== null && (s.f |= ot));
  }
  if (s !== null && (s.parent = n, n !== null && Fi(s, n), k !== null && (k.f & L) !== 0 && (e & Ce) === 0)) {
    var a = (
      /** @type {Derived} */
      k
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return r;
}
function wn() {
  return k !== null && !oe;
}
function Ii(e) {
  const t = Te(Kt, null);
  return C(t, P), t.teardown = e, t;
}
function ji(e) {
  Pi();
  var t = (
    /** @type {Effect} */
    E.f
  ), n = !k && (t & he) !== 0 && (t & Ke) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      re
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Ar(e);
}
function Ar(e) {
  return Te(lt | $s, e);
}
function zi(e) {
  Je.ensure();
  const t = Te(Ce | ct, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? gt(t, () => {
      K(t), r(void 0);
    }) : (K(t), r(void 0));
  });
}
function Li(e) {
  return Te(lt, e);
}
function Vi(e) {
  return Te(mt | ct, e);
}
function Nr(e, t = 0) {
  return Te(Kt | t, e);
}
function vt(e, t = [], n = [], r = []) {
  Ei(r, t, n, (s) => {
    Te(Kt, () => e(...s.map(v)));
  });
}
function Rr(e, t = 0) {
  var n = Te(ve | t, e);
  return n;
}
function ye(e) {
  return Te(he | ct, e);
}
function Mr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = De, r = k;
    Zn(!0), se(null);
    try {
      t.call(null);
    } finally {
      Zn(n), se(r);
    }
  }
}
function xn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && yn(() => {
      s.abort(we);
    });
    var r = n.next;
    (n.f & Ce) !== 0 ? n.parent = null : K(n, t), n = r;
  }
}
function Bi(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & he) === 0 && K(t), t = n;
  }
}
function K(e, t = !0) {
  var n = !1;
  (t || (e.f & Ws) !== 0) && e.nodes !== null && e.nodes.end !== null && (qi(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), C(e, Yn), xn(e, t && !n), yt(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const a of r)
      a.stop();
  Mr(e), e.f ^= Yn, e.f |= fe;
  var s = e.parent;
  s !== null && s.first !== null && Or(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function qi(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ $t(e);
    e.remove(), e = n;
  }
}
function Or(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function gt(e, t, n = !0) {
  var r = [];
  Cr(e, r, !0);
  var s = () => {
    n && K(e), t && t();
  }, a = r.length;
  if (a > 0) {
    var f = () => --a || s();
    for (var o of r)
      o.out(f);
  } else
    s();
}
function Cr(e, t, n) {
  if ((e.f & te) === 0) {
    e.f ^= te;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && t.push(o);
    for (var s = e.first; s !== null; ) {
      var a = s.next;
      if ((s.f & Ce) === 0) {
        var f = (s.f & ot) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & he) !== 0 && (e.f & ve) !== 0;
        Cr(s, t, f ? n : !1);
      }
      s = a;
    }
  }
}
function Ui(e) {
  Dr(e, !0);
}
function Dr(e, t) {
  if ((e.f & te) !== 0) {
    e.f ^= te, (e.f & P) === 0 && (C(e, z), Je.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & ot) !== 0 || (n.f & he) !== 0;
      Dr(n, s ? t : !1), n = r;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const f of a)
        (f.is_global || t) && f.in();
  }
}
function Pr(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var s = n === r ? null : /* @__PURE__ */ $t(n);
      t.append(n), n = s;
    }
}
let Vt = !1, De = !1;
function Zn(e) {
  De = e;
}
let k = null, oe = !1;
function se(e) {
  k = e;
}
let E = null;
function pe(e) {
  E = e;
}
let ne = null;
function Fr(e) {
  k !== null && (ne === null ? ne = [e] : ne.push(e));
}
let q = null, Y = 0, $ = null;
function Yi(e) {
  $ = e;
}
let Ir = 1, je = 0, He = je;
function Qn(e) {
  He = e;
}
function jr() {
  return ++Ir;
}
function At(e) {
  var t = e.f;
  if ((t & z) !== 0)
    return !0;
  if (t & L && (e.f &= ~Ge), (t & _e) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, s = 0; s < r; s++) {
      var a = n[s];
      if (At(
        /** @type {Derived} */
        a
      ) && mr(
        /** @type {Derived} */
        a
      ), a.wv > e.wv)
        return !0;
    }
    (t & ee) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    le === null && C(e, P);
  }
  return !1;
}
function zr(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(ne !== null && at.call(ne, e)))
    for (var s = 0; s < r.length; s++) {
      var a = r[s];
      (a.f & L) !== 0 ? zr(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? C(a, z) : (a.f & P) !== 0 && C(a, _e), gn(
        /** @type {Effect} */
        a
      ));
    }
}
function Lr(e) {
  var A;
  var t = q, n = Y, r = $, s = k, a = ne, f = re, o = oe, l = He, u = e.f;
  q = /** @type {null | Value[]} */
  null, Y = 0, $ = null, k = (u & (he | Ce)) === 0 ? e : null, ne = null, ft(e.ctx), oe = !1, He = ++je, e.ac !== null && (yn(() => {
    e.ac.abort(we);
  }), e.ac = null);
  try {
    e.f |= Bt;
    var h = (
      /** @type {Function} */
      e.fn
    ), p = h();
    e.f |= Ke;
    var _ = e.deps, c = w?.is_fork;
    if (q !== null) {
      var d;
      if (c || yt(e, Y), _ !== null && Y > 0)
        for (_.length = Y + q.length, d = 0; d < q.length; d++)
          _[Y + d] = q[d];
      else
        e.deps = _ = q;
      if (wn() && (e.f & ee) !== 0)
        for (d = Y; d < _.length; d++)
          ((A = _[d]).reactions ?? (A.reactions = [])).push(e);
    } else !c && _ !== null && Y < _.length && (yt(e, Y), _.length = Y);
    if (or() && $ !== null && !oe && _ !== null && (e.f & (L | _e | z)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      $.length; d++)
        zr(
          $[d],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (je++, s.deps !== null)
        for (let S = 0; S < n; S += 1)
          s.deps[S].rv = je;
      if (t !== null)
        for (const S of t)
          S.rv = je;
      $ !== null && (r === null ? r = $ : r.push(.../** @type {Source[]} */
      $));
    }
    return (e.f & Oe) !== 0 && (e.f ^= Oe), p;
  } catch (S) {
    return ur(S);
  } finally {
    e.f ^= Bt, q = t, Y = n, $ = r, k = s, ne = a, ft(f), oe = o, He = l;
  }
}
function Hi(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Bs.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & L) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (q === null || !at.call(q, t))) {
    var a = (
      /** @type {Derived} */
      t
    );
    (a.f & ee) !== 0 && (a.f ^= ee, a.f &= ~Ge), a.v !== I && pn(a), Ni(a), yt(a, 0);
  }
}
function yt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Hi(e, n[r]);
}
function dt(e) {
  var t = e.f;
  if ((t & fe) === 0) {
    C(e, P);
    var n = E, r = Vt;
    E = e, Vt = !0;
    try {
      (t & (ve | sr)) !== 0 ? Bi(e) : xn(e), Mr(e);
      var s = Lr(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Ir;
      var a;
    } finally {
      Vt = r, E = n;
    }
  }
}
async function Gi() {
  await Promise.resolve(), _i();
}
function v(e) {
  var t = e.f, n = (t & L) !== 0;
  if (k !== null && !oe) {
    var r = E !== null && (E.f & fe) !== 0;
    if (!r && (ne === null || !at.call(ne, e))) {
      var s = k.deps;
      if ((k.f & Bt) !== 0)
        e.rv < je && (e.rv = je, q === null && s !== null && s[Y] === e ? Y++ : q === null ? q = [e] : q.push(e));
      else {
        (k.deps ?? (k.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [k] : at.call(a, k) || a.push(k);
      }
    }
  }
  if (De && Ye.has(e))
    return Ye.get(e);
  if (n) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (De) {
      var o = f.v;
      return ((f.f & P) === 0 && f.reactions !== null || Br(f)) && (o = mn(f)), Ye.set(f, o), o;
    }
    var l = (f.f & ee) === 0 && !oe && k !== null && (Vt || (k.f & ee) !== 0), u = (f.f & Ke) === 0;
    At(f) && (l && (f.f |= ee), mr(f)), l && !u && (yr(f), Vr(f));
  }
  if (le?.has(e))
    return le.get(e);
  if ((e.f & Oe) !== 0)
    throw e.v;
  return e.v;
}
function Vr(e) {
  if (e.f |= ee, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & L) !== 0 && (t.f & ee) === 0 && (yr(
        /** @type {Derived} */
        t
      ), Vr(
        /** @type {Derived} */
        t
      ));
}
function Br(e) {
  if (e.v === I) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ye.has(t) || (t.f & L) !== 0 && Br(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function qr(e) {
  var t = oe;
  try {
    return oe = !0, e();
  } finally {
    oe = t;
  }
}
const Ji = ["touchstart", "touchmove"];
function Ki(e) {
  return Ji.includes(e);
}
const ze = Symbol("events"), Ur = /* @__PURE__ */ new Set(), cn = /* @__PURE__ */ new Set();
function Ot(e, t, n) {
  (t[ze] ?? (t[ze] = {}))[e] = n;
}
function Wi(e) {
  for (var t = 0; t < e.length; t++)
    Ur.add(e[t]);
  for (var n of cn)
    n(e);
}
let Xn = null;
function er(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, s = e.composedPath?.() || [], a = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  Xn = e;
  var f = 0, o = Xn === e && e[ze];
  if (o) {
    var l = s.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[ze] = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    l <= u && (f = l);
  }
  if (a = /** @type {Element} */
  s[f] || e.target, a !== t) {
    Us(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var h = k, p = E;
    se(null), pe(null);
    try {
      for (var _, c = []; a !== null; ) {
        var d = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var A = a[ze]?.[r];
          A != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && A.call(a, e);
        } catch (S) {
          _ ? c.push(S) : _ = S;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        a = d;
      }
      if (_) {
        for (let S of c)
          queueMicrotask(() => {
            throw S;
          });
        throw _;
      }
    } finally {
      e[ze] = t, delete e.currentTarget, se(h), pe(p);
    }
  }
}
const $i = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Zi(e) {
  return (
    /** @type {string} */
    $i?.createHTML(e) ?? e
  );
}
function Yr(e) {
  var t = Tr("template");
  return t.innerHTML = Zi(e.replaceAll("<!>", "<!---->")), t.content;
}
function vn(e, t) {
  var n = (
    /** @type {Effect} */
    E
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Pe(e, t) {
  var n = (t & ai) !== 0, r = (t & li) !== 0, s, a = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = Yr(a ? e : "<!>" + e), n || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ ut(s)));
    var f = (
      /** @type {TemplateNode} */
      r || kr ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ut(f)
      ), l = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      vn(o, l);
    } else
      vn(f, f);
    return f;
  };
}
// @__NO_SIDE_EFFECTS__
function Qi(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), s = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (!a) {
      var f = (
        /** @type {DocumentFragment} */
        Yr(s)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ ut(f)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ ut(o);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return vn(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Xi(e, t) {
  return /* @__PURE__ */ Qi(e, t, "svg");
}
function ge(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function F(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function ea(e, t) {
  return ta(e, t);
}
const Ct = /* @__PURE__ */ new Map();
function ta(e, { target: t, anchor: n, props: r = {}, events: s, context: a, intro: f = !0, transformError: o }) {
  Mi();
  var l = void 0, u = zi(() => {
    var h = n ?? t.appendChild(Yt());
    mi(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (c) => {
        ar({});
        var d = (
          /** @type {ComponentContext} */
          re
        );
        a && (d.c = a), s && (r.$$events = s), l = e(c, r) || {}, lr();
      },
      o
    );
    var p = /* @__PURE__ */ new Set(), _ = (c) => {
      for (var d = 0; d < c.length; d++) {
        var A = c[d];
        if (!p.has(A)) {
          p.add(A);
          var S = Ki(A);
          for (const We of [t, document]) {
            var U = Ct.get(We);
            U === void 0 && (U = /* @__PURE__ */ new Map(), Ct.set(We, U));
            var Ae = U.get(A);
            Ae === void 0 ? (We.addEventListener(A, er, { passive: S }), U.set(A, 1)) : U.set(A, Ae + 1);
          }
        }
      }
    };
    return _(qs(Ur)), cn.add(_), () => {
      for (var c of p)
        for (const S of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            Ct.get(S)
          ), A = (
            /** @type {number} */
            d.get(c)
          );
          --A == 0 ? (S.removeEventListener(c, er), d.delete(c), d.size === 0 && Ct.delete(S)) : d.set(c, A);
        }
      cn.delete(_), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return hn.set(l, u), l;
}
let hn = /* @__PURE__ */ new WeakMap();
function na(e, t) {
  const n = hn.get(e);
  return n ? (hn.delete(e), n(t)) : Promise.resolve();
}
var ae, ce, J, Ue, St, Tt, Jt;
class ra {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    ie(this, "anchor");
    /** @type {Map<Batch, Key>} */
    m(this, ae, /* @__PURE__ */ new Map());
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
    m(this, ce, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    m(this, J, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    m(this, Ue, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    m(this, St, !0);
    /**
     * @param {Batch} batch
     */
    m(this, Tt, (t) => {
      if (i(this, ae).has(t)) {
        var n = (
          /** @type {Key} */
          i(this, ae).get(t)
        ), r = i(this, ce).get(n);
        if (r)
          Ui(r), i(this, Ue).delete(n);
        else {
          var s = i(this, J).get(n);
          s && (i(this, ce).set(n, s.effect), i(this, J).delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), r = s.effect);
        }
        for (const [a, f] of i(this, ae)) {
          if (i(this, ae).delete(a), a === t)
            break;
          const o = i(this, J).get(f);
          o && (K(o.effect), i(this, J).delete(f));
        }
        for (const [a, f] of i(this, ce)) {
          if (a === n || i(this, Ue).has(a)) continue;
          const o = () => {
            if (Array.from(i(this, ae).values()).includes(a)) {
              var u = document.createDocumentFragment();
              Pr(f, u), u.append(Yt()), i(this, J).set(a, { effect: f, fragment: u });
            } else
              K(f);
            i(this, Ue).delete(a), i(this, ce).delete(a);
          };
          i(this, St) || !r ? (i(this, Ue).add(a), gt(f, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    m(this, Jt, (t) => {
      i(this, ae).delete(t);
      const n = Array.from(i(this, ae).values());
      for (const [r, s] of i(this, J))
        n.includes(r) || (K(s.effect), i(this, J).delete(r));
    });
    this.anchor = t, x(this, St, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      w
    ), s = Oi();
    if (n && !i(this, ce).has(t) && !i(this, J).has(t))
      if (s) {
        var a = document.createDocumentFragment(), f = Yt();
        a.append(f), i(this, J).set(t, {
          effect: ye(() => n(f)),
          fragment: a
        });
      } else
        i(this, ce).set(
          t,
          ye(() => n(this.anchor))
        );
    if (i(this, ae).set(r, t), s) {
      for (const [o, l] of i(this, ce))
        o === t ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [o, l] of i(this, J))
        o === t ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(i(this, Tt)), r.ondiscard(i(this, Jt));
    } else
      i(this, Tt).call(this, r);
  }
}
ae = new WeakMap(), ce = new WeakMap(), J = new WeakMap(), Ue = new WeakMap(), St = new WeakMap(), Tt = new WeakMap(), Jt = new WeakMap();
function Qe(e, t, n = !1) {
  var r = new ra(e), s = n ? ot : 0;
  function a(f, o) {
    r.ensure(f, o);
  }
  Rr(() => {
    var f = !1;
    t((o, l = 0) => {
      f = !0, a(l, o);
    }), f || a(-1, null);
  }, s);
}
function sa(e, t) {
  Li(() => {
    var n = e.getRootNode(), r = (
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
    if (!r.querySelector("#" + t.hash)) {
      const s = Tr("style");
      s.id = t.hash, s.textContent = t.code, r.appendChild(s);
    }
  });
}
function ia(e, t, n) {
  var r = e == null ? "" : "" + e;
  return r === "" ? null : r;
}
function aa(e, t) {
  return e == null ? null : String(e);
}
function tr(e, t, n, r, s, a) {
  var f = e.__className;
  if (f !== n || f === void 0) {
    var o = ia(n);
    o == null ? e.removeAttribute("class") : e.className = o, e.__className = n;
  }
  return a;
}
function la(e, t, n, r) {
  var s = e.__style;
  if (s !== t) {
    var a = aa(t);
    a == null ? e.removeAttribute("style") : e.style.cssText = a, e.__style = t;
  }
  return r;
}
function Dt(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  Di(e, "input", async (s) => {
    var a = s ? e.defaultValue : e.value;
    if (a = tn(e) ? nn(a) : a, n(a), w !== null && r.add(w), await Gi(), a !== (a = t())) {
      var f = e.selectionStart, o = e.selectionEnd, l = e.value.length;
      if (e.value = a ?? "", o !== null) {
        var u = e.value.length;
        f === o && o === l && u > l ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = f, e.selectionEnd = Math.min(o, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  qr(t) == null && e.value && (n(tn(e) ? nn(e.value) : e.value), w !== null && r.add(w)), Nr(() => {
    var s = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        w
      );
      if (r.has(a))
        return;
    }
    tn(e) && s === nn(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function tn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function nn(e) {
  return e === "" ? null : +e;
}
const oa = "5";
var nr;
typeof window < "u" && ((nr = window.__svelte ?? (window.__svelte = {})).v ?? (nr.v = /* @__PURE__ */ new Set())).add(oa);
var fa = /* @__PURE__ */ Pe("<span><span></span> </span>"), ua = /* @__PURE__ */ Pe('<div class="text-center py-12 text-gray-500 dark:text-gray-400">Loading...</div>'), da = /* @__PURE__ */ Pe(`<div class="mb-4 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg"><p class="text-sm text-amber-800 dark:text-amber-300"><strong>Note:</strong> TEST_MODE and TEST_MODE_DEMO_DATA are not both enabled in backend
					config. The simulator will not auto-activate on canister start, but can still be toggled
					manually.</p></div>`), ca = /* @__PURE__ */ Pe('<div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1"><span> </span> <span> </span></div> <div class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"><div class="h-full bg-indigo-500 dark:bg-indigo-400 rounded-full transition-all duration-500"></div></div>', 1), va = /* @__PURE__ */ Pe('<div class="text-xs text-gray-500 dark:text-gray-400"> </div>'), ha = /* @__PURE__ */ Xi('<svg class="inline-block w-4 h-4 mr-1.5 animate-spin" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), _a = /* @__PURE__ */ Pe('<div class="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"><p class="text-sm text-red-800 dark:text-red-300"> </p></div>'), pa = /* @__PURE__ */ Pe('<!> <div class="ds-stats-grid mb-4 svelte-1lbndni"><div class="ds-stat svelte-1lbndni"><span class="ds-stat-val svelte-1lbndni" style="color:#4f46e5"> </span><span class="ds-stat-lbl svelte-1lbndni">Users</span></div> <div class="ds-stat svelte-1lbndni"><span class="ds-stat-val svelte-1lbndni" style="color:#059669"> </span><span class="ds-stat-lbl svelte-1lbndni">Orgs</span></div> <div class="ds-stat svelte-1lbndni"><span class="ds-stat-val svelte-1lbndni" style="color:#7c3aed"> </span><span class="ds-stat-lbl svelte-1lbndni">Proposals</span></div> <div class="ds-stat svelte-1lbndni"><span class="ds-stat-val svelte-1lbndni" style="color:#0891b2"> </span><span class="ds-stat-lbl svelte-1lbndni">Transfers</span></div> <div class="ds-stat svelte-1lbndni"><span class="ds-stat-val svelte-1lbndni" style="color:#e11d48"> </span><span class="ds-stat-lbl svelte-1lbndni">Disputes</span></div> <div class="ds-stat svelte-1lbndni"><span class="ds-stat-val svelte-1lbndni" style="color:#4f46e5"> </span><span class="ds-stat-lbl svelte-1lbndni">Votes</span></div> <div class="ds-stat svelte-1lbndni"><span class="ds-stat-val svelte-1lbndni" style="color:#059669"> </span><span class="ds-stat-lbl svelte-1lbndni">Lands</span></div> <div class="ds-stat svelte-1lbndni"><span class="ds-stat-val svelte-1lbndni" style="color:#d97706"> </span><span class="ds-stat-lbl svelte-1lbndni">Courts</span></div> <div class="ds-stat svelte-1lbndni"><span class="ds-stat-val svelte-1lbndni" style="color:#dc2626"> </span><span class="ds-stat-lbl svelte-1lbndni">Cases</span></div> <div class="ds-stat svelte-1lbndni"><span class="ds-stat-val svelte-1lbndni" style="color:#374151"> </span><span class="ds-stat-lbl svelte-1lbndni">Batches</span></div></div> <div class="mb-6"><!></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 mb-4"><div class="flex items-center gap-3 mb-5"><button class="ds-btn ds-btn-primary flex-1 svelte-1lbndni"><!> </button> <button class="ds-btn ds-btn-secondary svelte-1lbndni"> </button></div> <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Configuration</h3> <div class="grid grid-cols-2 gap-3"><div><label for="ds-interval" class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Interval (s)</label> <input id="ds-interval" type="number" min="10" max="3600" class="ds-input svelte-1lbndni"/></div> <div><label for="ds-batch" class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Batch size</label> <input id="ds-batch" type="number" min="1" max="20" class="ds-input svelte-1lbndni"/></div> <div><label for="ds-max" class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Max entities</label> <input id="ds-max" type="text" placeholder="unlimited" class="ds-input svelte-1lbndni"/></div> <div><label for="ds-seed" class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Seed (deterministic)</label> <input id="ds-seed" type="text" placeholder="random" class="ds-input svelte-1lbndni"/></div></div> <div class="flex gap-3 mt-4"><button class="ds-btn ds-btn-secondary flex-1 svelte-1lbndni"> </button> <button class="ds-btn ds-btn-danger svelte-1lbndni">Reset Counters</button></div></div> <!>', 1), ba = /* @__PURE__ */ Pe('<div class="max-w-2xl mx-auto p-6"><div class="flex items-center justify-between mb-6"><h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Demo Simulator</h2> <!></div> <!></div>');
const ga = {
  hash: "svelte-1lbndni",
  code: ".ds-stats-grid.svelte-1lbndni {display:grid;grid-template-columns:repeat(5, 1fr);gap:0.375rem;}.ds-stat.svelte-1lbndni {display:flex;flex-direction:column;align-items:center;padding:0.375rem 0.25rem;border:1px solid #e5e7eb;border-radius:0.375rem;background:#fff;}.dark .ds-stat.svelte-1lbndni {background:#1f2937;border-color:#374151;}.ds-stat-val.svelte-1lbndni {font-size:1.125rem;font-weight:700;line-height:1.2;}.ds-stat-lbl.svelte-1lbndni {font-size:0.625rem;color:#6b7280;margin-top:0.125rem;}.dark .ds-stat-lbl.svelte-1lbndni {color:#9ca3af;}.ds-btn.svelte-1lbndni {padding:0.5rem 1rem;font-size:0.875rem;font-weight:500;border-radius:0.5rem;cursor:pointer;transition:all 150ms;border:none;}.ds-btn.svelte-1lbndni:disabled {opacity:0.5;cursor:not-allowed;}.ds-btn-primary.svelte-1lbndni {color:#fff !important;background-color:#4f46e5 !important;}.ds-btn-primary.svelte-1lbndni:hover:not(:disabled) {background-color:#4338ca !important;}.ds-btn-secondary.svelte-1lbndni {color:#374151 !important;background-color:#f3f4f6 !important;border:1px solid #d1d5db !important;}.ds-btn-secondary.svelte-1lbndni:hover:not(:disabled) {background-color:#e5e7eb !important;}.dark .ds-btn-secondary.svelte-1lbndni {color:#d1d5db !important;background-color:#374151 !important;border-color:#4b5563 !important;}.dark .ds-btn-secondary.svelte-1lbndni:hover:not(:disabled) {background-color:#4b5563 !important;}.ds-btn-danger.svelte-1lbndni {color:#dc2626 !important;background-color:transparent !important;border:1px solid #fca5a5 !important;}.ds-btn-danger.svelte-1lbndni:hover:not(:disabled) {background-color:#fef2f2 !important;}.dark .ds-btn-danger.svelte-1lbndni {color:#f87171 !important;border-color:#7f1d1d !important;}.dark .ds-btn-danger.svelte-1lbndni:hover:not(:disabled) {background-color:#7f1d1d33 !important;}.ds-input.svelte-1lbndni {width:100%;padding:0.375rem 0.625rem;font-size:0.875rem;border:1px solid #d1d5db;border-radius:0.375rem;background:#fff;color:#111827;transition:border-color 150ms;}.ds-input.svelte-1lbndni:focus {outline:none;border-color:#6366f1;box-shadow:0 0 0 2px rgba(99, 102, 241, 0.2);}.dark .ds-input.svelte-1lbndni {background:#1f2937;border-color:#4b5563;color:#f3f4f6;}"
};
function ma(e, t) {
  ar(t, !0), sa(e, ga);
  let n = /* @__PURE__ */ j(null), r = /* @__PURE__ */ j(!0), s = /* @__PURE__ */ j(!1), a = /* @__PURE__ */ j(!1), f = /* @__PURE__ */ j(!1), o = /* @__PURE__ */ j(""), l = /* @__PURE__ */ j(60), u = /* @__PURE__ */ j(3), h = /* @__PURE__ */ j(""), p = /* @__PURE__ */ j(""), _ = /* @__PURE__ */ Jn(() => v(n) ? v(n).stats.users + v(n).stats.organizations + v(n).stats.proposals + v(n).stats.transfers + v(n).stats.disputes : 0), c = /* @__PURE__ */ Jn(() => v(n) && v(n).max_entities ? Math.min(100, Math.round(v(_) / v(n).max_entities * 100)) : 0);
  async function d() {
    try {
      const b = await t.ctx.callSync("get_status", {}), N = typeof b == "string" ? JSON.parse(b) : b;
      N.success ? (y(n, N, !0), y(l, N.interval_seconds, !0), y(u, N.batch_size, !0), y(h, N.max_entities != null ? String(N.max_entities) : "", !0), y(p, String(N.seed ?? ""), !0)) : y(o, N.error || "Failed to fetch status", !0);
    } catch (b) {
      y(o, b?.message ?? String(b), !0);
    } finally {
      y(r, !1);
    }
  }
  async function A() {
    if (v(n)) {
      y(s, !0), y(o, "");
      try {
        const b = await t.ctx.callSync("toggle", { enabled: !v(n).running }), N = typeof b == "string" ? JSON.parse(b) : b;
        N.success ? await d() : y(o, N.error || "Toggle failed", !0);
      } catch (b) {
        y(o, b?.message ?? String(b), !0);
      } finally {
        y(s, !1);
      }
    }
  }
  async function S() {
    y(a, !0), y(o, "");
    try {
      const b = v(h).toString().trim(), N = {
        interval_seconds: v(l),
        batch_size: v(u),
        max_entities: b ? parseInt(b, 10) : null
      };
      v(p).trim() && (N.seed = parseInt(v(p), 10));
      const be = await t.ctx.callSync("update_config", N), $e = typeof be == "string" ? JSON.parse(be) : be;
      $e.success ? await d() : y(o, $e.error || "Save failed", !0);
    } catch (b) {
      y(o, b?.message ?? String(b), !0);
    } finally {
      y(a, !1);
    }
  }
  async function U() {
    y(f, !0), y(o, "");
    try {
      const b = await t.ctx.callSync("run_once", {}), N = typeof b == "string" ? JSON.parse(b) : b;
      await d(), N.error && y(o, N.error, !0);
    } catch (b) {
      y(o, b?.message ?? String(b), !0);
    } finally {
      y(f, !1);
    }
  }
  async function Ae() {
    y(o, "");
    try {
      const b = await t.ctx.callSync("reset", {}), N = typeof b == "string" ? JSON.parse(b) : b;
      N.success ? await d() : y(o, N.error || "Reset failed", !0);
    } catch (b) {
      y(o, b?.message ?? String(b), !0);
    }
  }
  ji(() => {
    d();
    const b = setInterval(d, 1e4);
    return () => clearInterval(b);
  });
  var We = ba(), kn = g(We), Hr = T(g(kn), 2);
  {
    var Gr = (b) => {
      var N = fa(), be = g(N), $e = T(be);
      vt(() => {
        tr(N, 1, `inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full
					${v(n).running ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"}`), tr(be, 1, `w-2 h-2 rounded-full ${v(n).running ? "bg-green-500 animate-pulse" : "bg-gray-400"}`), F($e, ` ${v(n).running ? "Running" : "Stopped"}`);
      }), ge(b, N);
    };
    Qe(Hr, (b) => {
      v(n) && b(Gr);
    });
  }
  var Jr = T(kn, 2);
  {
    var Kr = (b) => {
      var N = ua();
      ge(b, N);
    }, Wr = (b) => {
      var N = pa(), be = Wn(N);
      {
        var $e = (R) => {
          var W = da();
          ge(R, W);
        };
        Qe(be, (R) => {
          v(n).demo_mode_active || R($e);
        });
      }
      var En = T(be, 2), Sn = g(En), $r = g(Sn), Zr = g($r), Tn = T(Sn, 2), Qr = g(Tn), Xr = g(Qr), An = T(Tn, 2), es = g(An), ts = g(es), Nn = T(An, 2), ns = g(Nn), rs = g(ns), Rn = T(Nn, 2), ss = g(Rn), is = g(ss), Mn = T(Rn, 2), as = g(Mn), ls = g(as), On = T(Mn, 2), os = g(On), fs = g(os), Cn = T(On, 2), us = g(Cn), ds = g(us), Dn = T(Cn, 2), cs = g(Dn), vs = g(cs), hs = T(Dn, 2), _s = g(hs), ps = g(_s), Pn = T(En, 2), bs = g(Pn);
      {
        var gs = (R) => {
          var W = ca(), Ze = Wn(W), Mt = g(Ze), Ds = g(Mt), Ps = T(Mt, 2), Fs = g(Ps), Is = T(Ze, 2), js = g(Is);
          vt(() => {
            F(Ds, `${v(_) ?? ""} / ${v(n).max_entities ?? ""} entities`), F(Fs, `${v(c) ?? ""}%`), la(js, `width: ${v(c) ?? ""}%`);
          }), ge(R, W);
        }, ms = (R) => {
          var W = va(), Ze = g(W);
          vt(() => F(Ze, `${v(_) ?? ""} entities (unlimited)`)), ge(R, W);
        };
        Qe(bs, (R) => {
          v(n).max_entities ? R(gs) : R(ms, -1);
        });
      }
      var Fn = T(Pn, 2), In = g(Fn), Nt = g(In), jn = g(Nt);
      {
        var ys = (R) => {
          var W = ha();
          ge(R, W);
        };
        Qe(jn, (R) => {
          v(s) && R(ys);
        });
      }
      var ws = T(jn), Zt = T(Nt, 2), xs = g(Zt), zn = T(In, 4), Ln = g(zn), ks = T(g(Ln), 2), Vn = T(Ln, 2), Es = T(g(Vn), 2), Bn = T(Vn, 2), Ss = T(g(Bn), 2), Ts = T(Bn, 2), As = T(g(Ts), 2), Ns = T(zn, 2), Rt = g(Ns), Rs = g(Rt), Ms = T(Rt, 2), Os = T(Fn, 2);
      {
        var Cs = (R) => {
          var W = _a(), Ze = g(W), Mt = g(Ze);
          vt(() => F(Mt, v(o))), ge(R, W);
        };
        Qe(Os, (R) => {
          v(o) && R(Cs);
        });
      }
      vt(() => {
        F(Zr, v(n).stats.users), F(Xr, v(n).stats.organizations), F(ts, v(n).stats.proposals), F(rs, v(n).stats.transfers), F(is, v(n).stats.disputes), F(ls, v(n).stats.votes ?? 0), F(fs, v(n).stats.lands ?? 0), F(ds, v(n).stats.courts ?? 0), F(vs, v(n).stats.cases ?? 0), F(ps, v(n).batch_number), Nt.disabled = v(s), F(ws, ` ${v(n).running ? "Stop Simulator" : "Start Simulator"}`), Zt.disabled = v(f), F(xs, v(f) ? "Running..." : "Run Once"), Rt.disabled = v(a), F(Rs, v(a) ? "Saving..." : "Save Config");
      }), Ot("click", Nt, A), Ot("click", Zt, U), Dt(ks, () => v(l), (R) => y(l, R)), Dt(Es, () => v(u), (R) => y(u, R)), Dt(Ss, () => v(h), (R) => y(h, R)), Dt(As, () => v(p), (R) => y(p, R)), Ot("click", Rt, S), Ot("click", Ms, Ae), ge(b, N);
    };
    Qe(Jr, (b) => {
      v(r) ? b(Kr) : v(n) && b(Wr, 1);
    });
  }
  ge(e, We), lr();
}
Wi(["click"]);
function xa(e, t) {
  const n = ea(ma, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        na(n);
      } catch {
      }
    }
  };
}
export {
  xa as default
};
