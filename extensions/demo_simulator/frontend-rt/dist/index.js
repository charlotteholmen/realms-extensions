var Ls = Object.defineProperty;
var Br = (e) => {
  throw TypeError(e);
};
var zs = (e, t, r) => t in e ? Ls(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ie = (e, t, r) => zs(e, typeof t != "symbol" ? t + "" : t, r), Qt = (e, t, r) => t.has(e) || Br("Cannot " + r);
var i = (e, t, r) => (Qt(e, t, "read from private field"), r ? r.call(e) : t.get(e)), m = (e, t, r) => t.has(e) ? Br("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), w = (e, t, r, n) => (Qt(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), M = (e, t, r) => (Qt(e, t, "access private method"), r);
var Vs = Array.isArray, Bs = Array.prototype.indexOf, at = Array.prototype.includes, qs = Array.from, Us = Object.defineProperty, _t = Object.getOwnPropertyDescriptor, Ys = Object.prototype, Hs = Array.prototype, Gs = Object.getPrototypeOf, qr = Object.isExtensible;
const Js = () => {
};
function Ks(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function rn() {
  var e, t, r = new Promise((n, s) => {
    e = n, t = s;
  });
  return { promise: r, resolve: e, reject: t };
}
const z = 2, lt = 4, Kt = 8, nn = 1 << 24, ve = 16, he = 32, Ce = 64, nr = 128, ee = 512, P = 1024, L = 2048, _e = 4096, te = 8192, fe = 16384, Ke = 32768, Ur = 1 << 25, ot = 65536, sr = 1 << 17, Ws = 1 << 18, ct = 1 << 19, $s = 1 << 20, Ge = 65536, Bt = 1 << 21, mt = 1 << 22, Oe = 1 << 23, Xt = Symbol("$state"), xe = new class extends Error {
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
function ri() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ni() {
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
function sn(e) {
  return e === this.v;
}
let ne = null;
function ft(e) {
  ne = e;
}
function an(e, t = !1, r) {
  ne = {
    p: ne,
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
function ln(e) {
  var t = (
    /** @type {ComponentContext} */
    ne
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      An(n);
  }
  return t.i = !0, ne = t.p, /** @type {T} */
  {};
}
function on() {
  return !0;
}
let Ie = [];
function fn() {
  var e = Ie;
  Ie = [], Ks(e);
}
function et(e) {
  if (Ie.length === 0 && !pt) {
    var t = Ie;
    queueMicrotask(() => {
      t === Ie && fn();
    });
  }
  Ie.push(e);
}
function di() {
  for (; Ie.length > 0; )
    fn();
}
function un(e) {
  var t = E;
  if (t === null)
    return k.f |= Oe, e;
  if ((t.f & Ke) === 0 && (t.f & lt) === 0)
    throw e;
  Me(e, t);
}
function Me(e, t) {
  for (; t !== null; ) {
    if ((t.f & nr) !== 0) {
      if ((t.f & Ke) === 0)
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
const ci = -7169;
function C(e, t) {
  e.f = e.f & ci | t;
}
function _r(e) {
  (e.f & ee) !== 0 || e.deps === null ? C(e, P) : C(e, _e);
}
function dn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & z) === 0 || (t.f & Ge) === 0 || (t.f ^= Ge, dn(
        /** @type {Derived} */
        t.deps
      ));
}
function cn(e, t, r) {
  (e.f & L) !== 0 ? t.add(e) : (e.f & _e) !== 0 && r.add(e), dn(e.deps), C(e, P);
}
const Fe = /* @__PURE__ */ new Set();
let x = null, le = null, ir = null, pt = !1, er = !1, Xe = null, Pt = null;
var Yr = 0;
let vi = 1;
var tt, rt, ze, we, ue, xt, H, wt, Ne, ke, de, nt, st, Ve, D, Ft, vn, It, ar, jt, hi;
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
    m(this, rt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, ze, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    m(this, we, /* @__PURE__ */ new Map());
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
    m(this, xt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    m(this, H, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    m(this, wt, []);
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
    m(this, nt, /* @__PURE__ */ new Set());
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
    i(this, de).has(t) || i(this, de).set(t, { d: [], m: [] }), i(this, nt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = i(this, de).get(t);
    if (n) {
      i(this, de).delete(t);
      for (var s of n.d)
        C(s, L), r(s);
      for (s of n.m)
        C(s, _e), r(s);
    }
    i(this, nt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== I && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Oe) === 0 && (this.current.set(t, [r, n]), le?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    x = this;
  }
  deactivate() {
    x = null, le = null;
  }
  flush() {
    try {
      er = !0, x = this, M(this, D, It).call(this);
    } finally {
      Yr = 0, ir = null, Xe = null, Pt = null, er = !1, x = null, le = null, Ye.clear();
    }
  }
  discard() {
    for (const t of i(this, rt)) t(this);
    i(this, rt).clear(), i(this, ze).clear(), Fe.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    i(this, wt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = i(this, we).get(r) ?? 0;
    if (i(this, we).set(r, n + 1), t) {
      let s = i(this, ue).get(r) ?? 0;
      i(this, ue).set(r, s + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let s = i(this, we).get(r) ?? 0;
    if (s === 1 ? i(this, we).delete(r) : i(this, we).set(r, s - 1), t) {
      let a = i(this, ue).get(r) ?? 0;
      a === 1 ? i(this, ue).delete(r) : i(this, ue).set(r, a - 1);
    }
    i(this, st) || n || (w(this, st, !0), et(() => {
      w(this, st, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      i(this, Ne).add(n);
    for (const n of r)
      i(this, ke).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    i(this, tt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    i(this, rt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    i(this, ze).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of i(this, ze)) t(this);
    i(this, ze).clear();
  }
  settled() {
    return (i(this, xt) ?? w(this, xt, rn())).promise;
  }
  static ensure() {
    if (x === null) {
      const t = x = new Ht();
      er || (Fe.add(x), pt || et(() => {
        x === t && t.flush();
      }));
    }
    return x;
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
    if (ir = t, t.b?.is_pending && (t.f & (lt | Kt | nn)) !== 0 && (t.f & Ke) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Xe !== null && r === E && (k === null || (k.f & z) === 0))
        return;
      if ((n & (Ce | he)) !== 0) {
        if ((n & P) === 0)
          return;
        r.f ^= P;
      }
    }
    i(this, H).push(r);
  }
};
tt = new WeakMap(), rt = new WeakMap(), ze = new WeakMap(), we = new WeakMap(), ue = new WeakMap(), xt = new WeakMap(), H = new WeakMap(), wt = new WeakMap(), Ne = new WeakMap(), ke = new WeakMap(), de = new WeakMap(), nt = new WeakMap(), st = new WeakMap(), Ve = new WeakMap(), D = new WeakSet(), Ft = function() {
  return this.is_fork || i(this, ue).size > 0;
}, vn = function() {
  for (const n of i(this, Ve))
    for (const s of i(n, ue).keys()) {
      for (var t = !1, r = s; r.parent !== null; ) {
        if (i(this, de).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, It = function() {
  var o;
  if (Yr++ > 1e3 && (Fe.delete(this), pi()), !M(this, D, Ft).call(this)) {
    for (const l of i(this, Ne))
      i(this, ke).delete(l), C(l, L), this.schedule(l);
    for (const l of i(this, ke))
      C(l, _e), this.schedule(l);
  }
  const t = i(this, H);
  w(this, H, []), this.apply();
  var r = Xe = [], n = [], s = Pt = [];
  for (const l of t)
    try {
      M(this, D, ar).call(this, l, r, n);
    } catch (u) {
      throw pn(l), u;
    }
  if (x = null, s.length > 0) {
    var a = Ht.ensure();
    for (const l of s)
      a.schedule(l);
  }
  if (Xe = null, Pt = null, M(this, D, Ft).call(this) || M(this, D, vn).call(this)) {
    M(this, D, jt).call(this, n), M(this, D, jt).call(this, r);
    for (const [l, u] of i(this, de))
      _n(l, u);
  } else {
    i(this, we).size === 0 && Fe.delete(this), i(this, Ne).clear(), i(this, ke).clear();
    for (const l of i(this, tt)) l(this);
    i(this, tt).clear(), Hr(n), Hr(r), i(this, xt)?.resolve();
  }
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    x
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
ar = function(t, r, n) {
  t.f ^= P;
  for (var s = t.first; s !== null; ) {
    var a = s.f, f = (a & (he | Ce)) !== 0, o = f && (a & P) !== 0, l = o || (a & te) !== 0 || i(this, de).has(s);
    if (!l && s.fn !== null) {
      f ? s.f ^= P : (a & lt) !== 0 ? r.push(s) : At(s) && ((a & ve) !== 0 && i(this, ke).add(s), dt(s));
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
  for (var r = 0; r < t.length; r += 1)
    cn(t[r], i(this, Ne), i(this, ke));
}, hi = function() {
  var h, p, _;
  for (const c of Fe) {
    var t = c.id < this.id, r = [];
    for (const [d, [A, S]] of this.current) {
      if (c.current.has(d)) {
        var n = (
          /** @type {[any, boolean]} */
          c.current.get(d)[0]
        );
        if (t && A !== n)
          c.current.set(d, [A, S]);
        else
          continue;
      }
      r.push(d);
    }
    var s = [...c.current.keys()].filter((d) => !this.current.has(d));
    if (s.length === 0)
      t && c.discard();
    else if (r.length > 0) {
      if (t)
        for (const d of i(this, nt))
          c.unskip_effect(d, (A) => {
            var S;
            (A.f & (ve | mt)) !== 0 ? c.schedule(A) : M(S = c, D, jt).call(S, [A]);
          });
      c.activate();
      var a = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (var o of r)
        hn(o, s, a, f);
      f = /* @__PURE__ */ new Map();
      var l = [...c.current.keys()].filter(
        (d) => this.current.has(d) ? (
          /** @type {[any, boolean]} */
          this.current.get(d)[0] !== d
        ) : !0
      );
      for (const d of i(this, wt))
        (d.f & (fe | te | sr)) === 0 && pr(d, l, f) && ((d.f & (mt | ve)) !== 0 ? (C(d, L), c.schedule(d)) : i(c, Ne).add(d));
      if (i(c, H).length > 0) {
        c.apply();
        for (var u of i(c, H))
          M(h = c, D, ar).call(h, u, [], []);
        w(c, H, []);
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
    for (var r; ; ) {
      if (di(), x === null)
        return (
          /** @type {T} */
          r
        );
      x.flush();
    }
  } finally {
    pt = t;
  }
}
function pi() {
  try {
    ti();
  } catch (e) {
    Me(e, ir);
  }
}
let me = null;
function Hr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (fe | te)) === 0 && At(n) && (me = /* @__PURE__ */ new Set(), dt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && On(n), me?.size > 0)) {
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
function hn(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const a = s.f;
      (a & z) !== 0 ? hn(
        /** @type {Derived} */
        s,
        t,
        r,
        n
      ) : (a & (mt | ve)) !== 0 && (a & L) === 0 && pr(s, t, n) && (C(s, L), gr(
        /** @type {Effect} */
        s
      ));
    }
}
function pr(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (at.call(t, s))
        return !0;
      if ((s.f & z) !== 0 && pr(
        /** @type {Derived} */
        s,
        t,
        r
      ))
        return r.set(
          /** @type {Derived} */
          s,
          !0
        ), !0;
    }
  return r.set(e, !1), !1;
}
function gr(e) {
  x.schedule(e);
}
function _n(e, t) {
  if (!((e.f & he) !== 0 && (e.f & P) !== 0)) {
    (e.f & L) !== 0 ? t.d.push(e) : (e.f & _e) !== 0 && t.m.push(e), C(e, P);
    for (var r = e.first; r !== null; )
      _n(r, t), r = r.next;
  }
}
function pn(e) {
  C(e, P);
  for (var t = e.first; t !== null; )
    pn(t), t = t.next;
}
function gi(e) {
  let t = 0, r = Wt(0), n;
  return () => {
    yr() && (v(r), Nn(() => (t === 0 && (n = qn(() => e(() => gt(r)))), t += 1, () => {
      et(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, gt(r));
      });
    })));
  };
}
var bi = ot | ct;
function mi(e, t, r, n) {
  new yi(e, t, r, n);
}
var Z, hr, Q, Be, B, X, V, G, Ee, qe, Re, it, kt, Et, Se, Gt, O, xi, wi, ki, lr, Lt, zt, or, fr;
class yi {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, s) {
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
    m(this, hr, null);
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
    m(this, Gt, gi(() => (w(this, Se, Wt(i(this, qe))), () => {
      w(this, Se, null);
    })));
    w(this, Z, t), w(this, Q, r), w(this, Be, (a) => {
      var f = (
        /** @type {Effect} */
        E
      );
      f.b = this, f.f |= nr, n(a);
    }), this.parent = /** @type {Effect} */
    E.b, this.transform_error = s ?? this.parent?.transform_error ?? ((a) => a), w(this, B, Rn(() => {
      M(this, O, lr).call(this);
    }, bi));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    cn(t, i(this, kt), i(this, Et));
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
  update_pending_count(t, r) {
    M(this, O, or).call(this, t, r), w(this, qe, i(this, qe) + t), !(!i(this, Se) || i(this, it)) && (w(this, it, !0), et(() => {
      w(this, it, !1), i(this, Se) && Ut(i(this, Se), i(this, qe));
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
    x?.is_fork ? (i(this, X) && x.skip_effect(i(this, X)), i(this, V) && x.skip_effect(i(this, V)), i(this, G) && x.skip_effect(i(this, G)), x.on_fork_commit(() => {
      M(this, O, fr).call(this, t);
    })) : M(this, O, fr).call(this, t);
  }
}
Z = new WeakMap(), hr = new WeakMap(), Q = new WeakMap(), Be = new WeakMap(), B = new WeakMap(), X = new WeakMap(), V = new WeakMap(), G = new WeakMap(), Ee = new WeakMap(), qe = new WeakMap(), Re = new WeakMap(), it = new WeakMap(), kt = new WeakMap(), Et = new WeakMap(), Se = new WeakMap(), Gt = new WeakMap(), O = new WeakSet(), xi = function() {
  try {
    w(this, X, ye(() => i(this, Be).call(this, i(this, Z))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
wi = function(t) {
  const r = i(this, Q).failed;
  r && w(this, G, ye(() => {
    r(
      i(this, Z),
      () => t,
      () => () => {
      }
    );
  }));
}, ki = function() {
  const t = i(this, Q).pending;
  t && (this.is_pending = !0, w(this, V, ye(() => t(i(this, Z)))), et(() => {
    var r = w(this, Ee, document.createDocumentFragment()), n = Yt();
    r.append(n), w(this, X, M(this, O, zt).call(this, () => ye(() => i(this, Be).call(this, n)))), i(this, Re) === 0 && (i(this, Z).before(r), w(this, Ee, null), bt(
      /** @type {Effect} */
      i(this, V),
      () => {
        w(this, V, null);
      }
    ), M(this, O, Lt).call(
      this,
      /** @type {Batch} */
      x
    ));
  }));
}, lr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), w(this, Re, 0), w(this, qe, 0), w(this, X, ye(() => {
      i(this, Be).call(this, i(this, Z));
    })), i(this, Re) > 0) {
      var t = w(this, Ee, document.createDocumentFragment());
      Pn(i(this, X), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        i(this, Q).pending
      );
      w(this, V, ye(() => r(i(this, Z))));
    } else
      M(this, O, Lt).call(
        this,
        /** @type {Batch} */
        x
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
Lt = function(t) {
  this.is_pending = !1, t.transfer_effects(i(this, kt), i(this, Et));
}, /**
 * @template T
 * @param {() => T} fn
 */
zt = function(t) {
  var r = E, n = k, s = ne;
  pe(i(this, B)), se(i(this, B)), ft(i(this, B).ctx);
  try {
    return Je.ensure(), t();
  } catch (a) {
    return un(a), null;
  } finally {
    pe(r), se(n), ft(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
or = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && M(n = this.parent, O, or).call(n, t, r);
    return;
  }
  w(this, Re, i(this, Re) + t), i(this, Re) === 0 && (M(this, O, Lt).call(this, r), i(this, V) && bt(i(this, V), () => {
    w(this, V, null);
  }), i(this, Ee) && (i(this, Z).before(i(this, Ee)), w(this, Ee, null)));
}, /**
 * @param {unknown} error
 */
fr = function(t) {
  i(this, X) && (K(i(this, X)), w(this, X, null)), i(this, V) && (K(i(this, V)), w(this, V, null)), i(this, G) && (K(i(this, G)), w(this, G, null));
  var r = i(this, Q).onerror;
  let n = i(this, Q).failed;
  var s = !1, a = !1;
  const f = () => {
    if (s) {
      ui();
      return;
    }
    s = !0, a && ii(), i(this, G) !== null && bt(i(this, G), () => {
      w(this, G, null);
    }), M(this, O, zt).call(this, () => {
      M(this, O, lr).call(this);
    });
  }, o = (l) => {
    try {
      a = !0, r?.(l, f), a = !1;
    } catch (u) {
      Me(u, i(this, B) && i(this, B).parent);
    }
    n && w(this, G, M(this, O, zt).call(this, () => {
      try {
        return ye(() => {
          var u = (
            /** @type {Effect} */
            E
          );
          u.b = this, u.f |= nr, n(
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
function Ei(e, t, r, n) {
  const s = bn;
  var a = e.filter((_) => !_.settled);
  if (r.length === 0 && a.length === 0) {
    n(t.map(s));
    return;
  }
  var f = (
    /** @type {Effect} */
    E
  ), o = Si(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((_) => _.promise)) : null;
  function u(_) {
    o();
    try {
      n(_);
    } catch (c) {
      (f.f & fe) === 0 && Me(c, f);
    }
    qt();
  }
  if (r.length === 0) {
    l.then(() => u(t.map(s)));
    return;
  }
  var h = gn();
  function p() {
    Promise.all(r.map((_) => /* @__PURE__ */ Ti(_))).then((_) => u([...t.map(s), ..._])).catch((_) => Me(_, f)).finally(() => h());
  }
  l ? l.then(() => {
    o(), p(), qt();
  }) : p();
}
function Si() {
  var e = (
    /** @type {Effect} */
    E
  ), t = k, r = ne, n = (
    /** @type {Batch} */
    x
  );
  return function(a = !0) {
    pe(e), se(t), ft(r), a && (e.f & fe) === 0 && (n?.activate(), n?.apply());
  };
}
function qt(e = !0) {
  pe(null), se(null), ft(null), e && x?.deactivate();
}
function gn() {
  var e = (
    /** @type {Effect} */
    E
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    x
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (s = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, s);
  };
}
// @__NO_SIDE_EFFECTS__
function bn(e) {
  var t = z | L;
  return E !== null && (E.f |= ct), {
    ctx: ne,
    deps: null,
    effects: null,
    equals: sn,
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
function Ti(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    E
  );
  n === null && Zs();
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
    ), u = rn();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(qt);
    } catch (c) {
      u.reject(c), qt();
    }
    var h = (
      /** @type {Batch} */
      x
    );
    if (f) {
      if ((l.f & Ke) !== 0)
        var p = gn();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        o.get(h)?.reject(xe), o.delete(h);
      else {
        for (const c of o.values())
          c.reject(xe);
        o.clear();
      }
      o.set(h, u);
    }
    const _ = (c, d = void 0) => {
      if (p) {
        var A = d === xe;
        p(A);
      }
      if (!(d === xe || (l.f & fe) !== 0)) {
        if (h.activate(), d)
          a.f |= Oe, Ut(a, d);
        else {
          (a.f & Oe) !== 0 && (a.f ^= Oe), Ut(a, c);
          for (const [S, U] of o) {
            if (o.delete(S), S === h) break;
            U.reject(xe);
          }
        }
        h.deactivate();
      }
    };
    u.promise.then(_, (c) => _(null, c || "unknown"));
  }), Ii(() => {
    for (const l of o.values())
      l.reject(xe);
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
function Gr(e) {
  const t = /* @__PURE__ */ bn(e);
  return Fn(t), t;
}
function Ai(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      K(
        /** @type {Effect} */
        t[r]
      );
  }
}
function br(e) {
  var t, r = E, n = e.parent;
  if (!De && n !== null && (n.f & (fe | te)) !== 0)
    return fi(), e.v;
  pe(n);
  try {
    e.f &= ~Ge, Ai(e), t = zn(e);
  } finally {
    pe(r);
  }
  return t;
}
function mn(e) {
  var t = br(e);
  if (!e.equals(t) && (e.wv = jn(), (!x?.is_fork || e.deps === null) && (x !== null ? x.capture(e, t, !0) : e.v = t, e.deps === null))) {
    C(e, P);
    return;
  }
  De || (le !== null ? (yr() || x?.is_fork) && le.set(e, t) : _r(e));
}
function Ni(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(xe), t.teardown = Js, t.ac = null, yt(t, 0), xr(t));
}
function yn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && dt(t);
}
let ur = /* @__PURE__ */ new Set();
const Ye = /* @__PURE__ */ new Map();
let xn = !1;
function Wt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: sn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function j(e, t) {
  const r = Wt(e);
  return Fn(r), r;
}
function y(e, t, r = !1) {
  k !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!oe || (k.f & sr) !== 0) && on() && (k.f & (z | ve | mt | sr)) !== 0 && (re === null || !at.call(re, e)) && si();
  let n = r ? ht(t) : t;
  return Ut(e, n, Pt);
}
function Ut(e, t, r = null) {
  if (!e.equals(t)) {
    Ye.set(e, De ? t : e.v);
    var n = Je.ensure();
    if (n.capture(e, t), (e.f & z) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & L) !== 0 && br(s), le === null && _r(s);
    }
    e.wv = jn(), wn(e, L, r), E !== null && (E.f & P) !== 0 && (E.f & (he | Ce)) === 0 && ($ === null ? Yi([e]) : $.push(e)), !n.is_fork && ur.size > 0 && !xn && Ri();
  }
  return t;
}
function Ri() {
  xn = !1;
  for (const e of ur)
    (e.f & P) !== 0 && C(e, _e), At(e) && dt(e);
  ur.clear();
}
function gt(e) {
  y(e, e.v + 1);
}
function wn(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var s = n.length, a = 0; a < s; a++) {
      var f = n[a], o = f.f, l = (o & L) === 0;
      if (l && C(f, t), (o & z) !== 0) {
        var u = (
          /** @type {Derived} */
          f
        );
        le?.delete(u), (o & Ge) === 0 && (o & ee && (E === null || (E.f & Bt) === 0) && (f.f |= Ge), wn(u, _e, r));
      } else if (l) {
        var h = (
          /** @type {Effect} */
          f
        );
        (o & ve) !== 0 && me !== null && me.add(h), r !== null ? r.push(h) : gr(h);
      }
    }
}
function ht(e) {
  if (typeof e != "object" || e === null || Xt in e)
    return e;
  const t = Gs(e);
  if (t !== Ys && t !== Hs)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Vs(e), s = /* @__PURE__ */ j(0), a = He, f = (o) => {
    if (He === a)
      return o();
    var l = k, u = He;
    se(null), Zr(a);
    var h = o();
    return se(l), Zr(u), h;
  };
  return n && r.set("length", /* @__PURE__ */ j(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && ri();
        var h = r.get(l);
        return h === void 0 ? f(() => {
          var p = /* @__PURE__ */ j(u.value);
          return r.set(l, p), p;
        }) : y(h, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = r.get(l);
        if (u === void 0) {
          if (l in o) {
            const h = f(() => /* @__PURE__ */ j(I));
            r.set(l, h), gt(s);
          }
        } else
          y(u, I), gt(s);
        return !0;
      },
      get(o, l, u) {
        if (l === Xt)
          return e;
        var h = r.get(l), p = l in o;
        if (h === void 0 && (!p || _t(o, l)?.writable) && (h = f(() => {
          var c = ht(p ? o[l] : I), d = /* @__PURE__ */ j(c);
          return d;
        }), r.set(l, h)), h !== void 0) {
          var _ = v(h);
          return _ === I ? void 0 : _;
        }
        return Reflect.get(o, l, u);
      },
      getOwnPropertyDescriptor(o, l) {
        var u = Reflect.getOwnPropertyDescriptor(o, l);
        if (u && "value" in u) {
          var h = r.get(l);
          h && (u.value = v(h));
        } else if (u === void 0) {
          var p = r.get(l), _ = p?.v;
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
        var u = r.get(l), h = u !== void 0 && u.v !== I || Reflect.has(o, l);
        if (u !== void 0 || E !== null && (!h || _t(o, l)?.writable)) {
          u === void 0 && (u = f(() => {
            var _ = h ? ht(o[l]) : I, c = /* @__PURE__ */ j(_);
            return c;
          }), r.set(l, u));
          var p = v(u);
          if (p === I)
            return !1;
        }
        return h;
      },
      set(o, l, u, h) {
        var p = r.get(l), _ = l in o;
        if (n && l === "length")
          for (var c = u; c < /** @type {Source<number>} */
          p.v; c += 1) {
            var d = r.get(c + "");
            d !== void 0 ? y(d, I) : c in o && (d = f(() => /* @__PURE__ */ j(I)), r.set(c + "", d));
          }
        if (p === void 0)
          (!_ || _t(o, l)?.writable) && (p = f(() => /* @__PURE__ */ j(void 0)), y(p, ht(u)), r.set(l, p));
        else {
          _ = p.v !== I;
          var A = f(() => ht(u));
          y(p, A);
        }
        var S = Reflect.getOwnPropertyDescriptor(o, l);
        if (S?.set && S.set.call(h, u), !_) {
          if (n && typeof l == "string") {
            var U = (
              /** @type {Source<number>} */
              r.get("length")
            ), Ae = Number(l);
            Number.isInteger(Ae) && Ae >= U.v && y(U, Ae + 1);
          }
          gt(s);
        }
        return !0;
      },
      ownKeys(o) {
        v(s);
        var l = Reflect.ownKeys(o).filter((p) => {
          var _ = r.get(p);
          return _ === void 0 || _.v !== I;
        });
        for (var [u, h] of r)
          h.v !== I && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        ni();
      }
    }
  );
}
var Jr, kn, En, Sn;
function Mi() {
  if (Jr === void 0) {
    Jr = window, kn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    En = _t(t, "firstChild").get, Sn = _t(t, "nextSibling").get, qr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), qr(r) && (r.__t = void 0);
  }
}
function Yt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ut(e) {
  return (
    /** @type {TemplateNode | null} */
    En.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
  return (
    /** @type {TemplateNode | null} */
    Sn.call(e)
  );
}
function b(e, t) {
  return /* @__PURE__ */ ut(e);
}
function Kr(e, t = !1) {
  {
    var r = /* @__PURE__ */ ut(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ $t(r) : r;
  }
}
function T(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ $t(n);
  return n;
}
function Oi() {
  return !1;
}
function Tn(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(oi, e, void 0)
  );
}
let Wr = !1;
function Ci() {
  Wr || (Wr = !0, document.addEventListener(
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
function mr(e) {
  var t = k, r = E;
  se(null), pe(null);
  try {
    return e();
  } finally {
    se(t), pe(r);
  }
}
function Di(e, t, r, n = r) {
  e.addEventListener(t, () => mr(r));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), n(!0);
  } : e.__on_r = () => n(!0), Ci();
}
function Pi(e) {
  E === null && (k === null && ei(), Xs()), De && Qs();
}
function Fi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Te(e, t) {
  var r = E;
  r !== null && (r.f & te) !== 0 && (e |= te);
  var n = {
    ctx: ne,
    deps: null,
    nodes: null,
    f: e | L | ee,
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
  x?.register_created_effect(n);
  var s = n;
  if ((e & lt) !== 0)
    Xe !== null ? Xe.push(n) : Je.ensure().schedule(n);
  else if (t !== null) {
    try {
      dt(n);
    } catch (f) {
      throw K(n), f;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & ct) === 0 && (s = s.first, (e & ve) !== 0 && (e & ot) !== 0 && s !== null && (s.f |= ot));
  }
  if (s !== null && (s.parent = r, r !== null && Fi(s, r), k !== null && (k.f & z) !== 0 && (e & Ce) === 0)) {
    var a = (
      /** @type {Derived} */
      k
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return n;
}
function yr() {
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
  ), r = !k && (t & he) !== 0 && (t & Ke) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ne
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return An(e);
}
function An(e) {
  return Te(lt | $s, e);
}
function Li(e) {
  Je.ensure();
  const t = Te(Ce | ct, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? bt(t, () => {
      K(t), n(void 0);
    }) : (K(t), n(void 0));
  });
}
function zi(e) {
  return Te(lt, e);
}
function Vi(e) {
  return Te(mt | ct, e);
}
function Nn(e, t = 0) {
  return Te(Kt | t, e);
}
function vt(e, t = [], r = [], n = []) {
  Ei(n, t, r, (s) => {
    Te(Kt, () => e(...s.map(v)));
  });
}
function Rn(e, t = 0) {
  var r = Te(ve | t, e);
  return r;
}
function ye(e) {
  return Te(he | ct, e);
}
function Mn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = De, n = k;
    $r(!0), se(null);
    try {
      t.call(null);
    } finally {
      $r(r), se(n);
    }
  }
}
function xr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && mr(() => {
      s.abort(xe);
    });
    var n = r.next;
    (r.f & Ce) !== 0 ? r.parent = null : K(r, t), r = n;
  }
}
function Bi(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & he) === 0 && K(t), t = r;
  }
}
function K(e, t = !0) {
  var r = !1;
  (t || (e.f & Ws) !== 0) && e.nodes !== null && e.nodes.end !== null && (qi(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), C(e, Ur), xr(e, t && !r), yt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const a of n)
      a.stop();
  Mn(e), e.f ^= Ur, e.f |= fe;
  var s = e.parent;
  s !== null && s.first !== null && On(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function qi(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ $t(e);
    e.remove(), e = r;
  }
}
function On(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function bt(e, t, r = !0) {
  var n = [];
  Cn(e, n, !0);
  var s = () => {
    r && K(e), t && t();
  }, a = n.length;
  if (a > 0) {
    var f = () => --a || s();
    for (var o of n)
      o.out(f);
  } else
    s();
}
function Cn(e, t, r) {
  if ((e.f & te) === 0) {
    e.f ^= te;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var s = e.first; s !== null; ) {
      var a = s.next;
      if ((s.f & Ce) === 0) {
        var f = (s.f & ot) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & he) !== 0 && (e.f & ve) !== 0;
        Cn(s, t, f ? r : !1);
      }
      s = a;
    }
  }
}
function Ui(e) {
  Dn(e, !0);
}
function Dn(e, t) {
  if ((e.f & te) !== 0) {
    e.f ^= te, (e.f & P) === 0 && (C(e, L), Je.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & ot) !== 0 || (r.f & he) !== 0;
      Dn(r, s ? t : !1), r = n;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const f of a)
        (f.is_global || t) && f.in();
  }
}
function Pn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var s = r === n ? null : /* @__PURE__ */ $t(r);
      t.append(r), r = s;
    }
}
let Vt = !1, De = !1;
function $r(e) {
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
let re = null;
function Fn(e) {
  k !== null && (re === null ? re = [e] : re.push(e));
}
let q = null, Y = 0, $ = null;
function Yi(e) {
  $ = e;
}
let In = 1, je = 0, He = je;
function Zr(e) {
  He = e;
}
function jn() {
  return ++In;
}
function At(e) {
  var t = e.f;
  if ((t & L) !== 0)
    return !0;
  if (t & z && (e.f &= ~Ge), (t & _e) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, s = 0; s < n; s++) {
      var a = r[s];
      if (At(
        /** @type {Derived} */
        a
      ) && mn(
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
function Ln(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(re !== null && at.call(re, e)))
    for (var s = 0; s < n.length; s++) {
      var a = n[s];
      (a.f & z) !== 0 ? Ln(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? C(a, L) : (a.f & P) !== 0 && C(a, _e), gr(
        /** @type {Effect} */
        a
      ));
    }
}
function zn(e) {
  var A;
  var t = q, r = Y, n = $, s = k, a = re, f = ne, o = oe, l = He, u = e.f;
  q = /** @type {null | Value[]} */
  null, Y = 0, $ = null, k = (u & (he | Ce)) === 0 ? e : null, re = null, ft(e.ctx), oe = !1, He = ++je, e.ac !== null && (mr(() => {
    e.ac.abort(xe);
  }), e.ac = null);
  try {
    e.f |= Bt;
    var h = (
      /** @type {Function} */
      e.fn
    ), p = h();
    e.f |= Ke;
    var _ = e.deps, c = x?.is_fork;
    if (q !== null) {
      var d;
      if (c || yt(e, Y), _ !== null && Y > 0)
        for (_.length = Y + q.length, d = 0; d < q.length; d++)
          _[Y + d] = q[d];
      else
        e.deps = _ = q;
      if (yr() && (e.f & ee) !== 0)
        for (d = Y; d < _.length; d++)
          ((A = _[d]).reactions ?? (A.reactions = [])).push(e);
    } else !c && _ !== null && Y < _.length && (yt(e, Y), _.length = Y);
    if (on() && $ !== null && !oe && _ !== null && (e.f & (z | _e | L)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      $.length; d++)
        Ln(
          $[d],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (je++, s.deps !== null)
        for (let S = 0; S < r; S += 1)
          s.deps[S].rv = je;
      if (t !== null)
        for (const S of t)
          S.rv = je;
      $ !== null && (n === null ? n = $ : n.push(.../** @type {Source[]} */
      $));
    }
    return (e.f & Oe) !== 0 && (e.f ^= Oe), p;
  } catch (S) {
    return un(S);
  } finally {
    e.f ^= Bt, q = t, Y = r, $ = n, k = s, re = a, ft(f), oe = o, He = l;
  }
}
function Hi(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Bs.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  if (r === null && (t.f & z) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (q === null || !at.call(q, t))) {
    var a = (
      /** @type {Derived} */
      t
    );
    (a.f & ee) !== 0 && (a.f ^= ee, a.f &= ~Ge), a.v !== I && _r(a), Ni(a), yt(a, 0);
  }
}
function yt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Hi(e, r[n]);
}
function dt(e) {
  var t = e.f;
  if ((t & fe) === 0) {
    C(e, P);
    var r = E, n = Vt;
    E = e, Vt = !0;
    try {
      (t & (ve | nn)) !== 0 ? Bi(e) : xr(e), Mn(e);
      var s = zn(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = In;
      var a;
    } finally {
      Vt = n, E = r;
    }
  }
}
async function Gi() {
  await Promise.resolve(), _i();
}
function v(e) {
  var t = e.f, r = (t & z) !== 0;
  if (k !== null && !oe) {
    var n = E !== null && (E.f & fe) !== 0;
    if (!n && (re === null || !at.call(re, e))) {
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
  if (r) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (De) {
      var o = f.v;
      return ((f.f & P) === 0 && f.reactions !== null || Bn(f)) && (o = br(f)), Ye.set(f, o), o;
    }
    var l = (f.f & ee) === 0 && !oe && k !== null && (Vt || (k.f & ee) !== 0), u = (f.f & Ke) === 0;
    At(f) && (l && (f.f |= ee), mn(f)), l && !u && (yn(f), Vn(f));
  }
  if (le?.has(e))
    return le.get(e);
  if ((e.f & Oe) !== 0)
    throw e.v;
  return e.v;
}
function Vn(e) {
  if (e.f |= ee, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & z) !== 0 && (t.f & ee) === 0 && (yn(
        /** @type {Derived} */
        t
      ), Vn(
        /** @type {Derived} */
        t
      ));
}
function Bn(e) {
  if (e.v === I) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ye.has(t) || (t.f & z) !== 0 && Bn(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function qn(e) {
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
const Le = Symbol("events"), Un = /* @__PURE__ */ new Set(), dr = /* @__PURE__ */ new Set();
function Ot(e, t, r) {
  (t[Le] ?? (t[Le] = {}))[e] = r;
}
function Wi(e) {
  for (var t = 0; t < e.length; t++)
    Un.add(e[t]);
  for (var r of dr)
    r(e);
}
let Qr = null;
function Xr(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = e.composedPath?.() || [], a = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  Qr = e;
  var f = 0, o = Qr === e && e[Le];
  if (o) {
    var l = s.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Le] = t;
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
        return a || r;
      }
    });
    var h = k, p = E;
    se(null), pe(null);
    try {
      for (var _, c = []; a !== null; ) {
        var d = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var A = a[Le]?.[n];
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
      e[Le] = t, delete e.currentTarget, se(h), pe(p);
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
function Yn(e) {
  var t = Tn("template");
  return t.innerHTML = Zi(e.replaceAll("<!>", "<!---->")), t.content;
}
function cr(e, t) {
  var r = (
    /** @type {Effect} */
    E
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Pe(e, t) {
  var r = (t & ai) !== 0, n = (t & li) !== 0, s, a = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = Yn(a ? e : "<!>" + e), r || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ ut(s)));
    var f = (
      /** @type {TemplateNode} */
      n || kn ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ut(f)
      ), l = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      cr(o, l);
    } else
      cr(f, f);
    return f;
  };
}
// @__NO_SIDE_EFFECTS__
function Qi(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), s = `<${r}>${n ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (!a) {
      var f = (
        /** @type {DocumentFragment} */
        Yn(s)
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
    return cr(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Xi(e, t) {
  return /* @__PURE__ */ Qi(e, t, "svg");
}
function be(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function F(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function ea(e, t) {
  return ta(e, t);
}
const Ct = /* @__PURE__ */ new Map();
function ta(e, { target: t, anchor: r, props: n = {}, events: s, context: a, intro: f = !0, transformError: o }) {
  Mi();
  var l = void 0, u = Li(() => {
    var h = r ?? t.appendChild(Yt());
    mi(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (c) => {
        an({});
        var d = (
          /** @type {ComponentContext} */
          ne
        );
        a && (d.c = a), s && (n.$$events = s), l = e(c, n) || {}, ln();
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
            Ae === void 0 ? (We.addEventListener(A, Xr, { passive: S }), U.set(A, 1)) : U.set(A, Ae + 1);
          }
        }
      }
    };
    return _(qs(Un)), dr.add(_), () => {
      for (var c of p)
        for (const S of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            Ct.get(S)
          ), A = (
            /** @type {number} */
            d.get(c)
          );
          --A == 0 ? (S.removeEventListener(c, Xr), d.delete(c), d.size === 0 && Ct.delete(S)) : d.set(c, A);
        }
      dr.delete(_), h !== r && h.parentNode?.removeChild(h);
    };
  });
  return vr.set(l, u), l;
}
let vr = /* @__PURE__ */ new WeakMap();
function ra(e, t) {
  const r = vr.get(e);
  return r ? (vr.delete(e), r(t)) : Promise.resolve();
}
var ae, ce, J, Ue, St, Tt, Jt;
class na {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
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
        var r = (
          /** @type {Key} */
          i(this, ae).get(t)
        ), n = i(this, ce).get(r);
        if (n)
          Ui(n), i(this, Ue).delete(r);
        else {
          var s = i(this, J).get(r);
          s && (i(this, ce).set(r, s.effect), i(this, J).delete(r), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), n = s.effect);
        }
        for (const [a, f] of i(this, ae)) {
          if (i(this, ae).delete(a), a === t)
            break;
          const o = i(this, J).get(f);
          o && (K(o.effect), i(this, J).delete(f));
        }
        for (const [a, f] of i(this, ce)) {
          if (a === r || i(this, Ue).has(a)) continue;
          const o = () => {
            if (Array.from(i(this, ae).values()).includes(a)) {
              var u = document.createDocumentFragment();
              Pn(f, u), u.append(Yt()), i(this, J).set(a, { effect: f, fragment: u });
            } else
              K(f);
            i(this, Ue).delete(a), i(this, ce).delete(a);
          };
          i(this, St) || !n ? (i(this, Ue).add(a), bt(f, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    m(this, Jt, (t) => {
      i(this, ae).delete(t);
      const r = Array.from(i(this, ae).values());
      for (const [n, s] of i(this, J))
        r.includes(n) || (K(s.effect), i(this, J).delete(n));
    });
    this.anchor = t, w(this, St, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      x
    ), s = Oi();
    if (r && !i(this, ce).has(t) && !i(this, J).has(t))
      if (s) {
        var a = document.createDocumentFragment(), f = Yt();
        a.append(f), i(this, J).set(t, {
          effect: ye(() => r(f)),
          fragment: a
        });
      } else
        i(this, ce).set(
          t,
          ye(() => r(this.anchor))
        );
    if (i(this, ae).set(n, t), s) {
      for (const [o, l] of i(this, ce))
        o === t ? n.unskip_effect(l) : n.skip_effect(l);
      for (const [o, l] of i(this, J))
        o === t ? n.unskip_effect(l.effect) : n.skip_effect(l.effect);
      n.oncommit(i(this, Tt)), n.ondiscard(i(this, Jt));
    } else
      i(this, Tt).call(this, n);
  }
}
ae = new WeakMap(), ce = new WeakMap(), J = new WeakMap(), Ue = new WeakMap(), St = new WeakMap(), Tt = new WeakMap(), Jt = new WeakMap();
function Qe(e, t, r = !1) {
  var n = new na(e), s = r ? ot : 0;
  function a(f, o) {
    n.ensure(f, o);
  }
  Rn(() => {
    var f = !1;
    t((o, l = 0) => {
      f = !0, a(l, o);
    }), f || a(-1, null);
  }, s);
}
function sa(e, t) {
  zi(() => {
    var r = e.getRootNode(), n = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + t.hash)) {
      const s = Tn("style");
      s.id = t.hash, s.textContent = t.code, n.appendChild(s);
    }
  });
}
function ia(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function aa(e, t) {
  return e == null ? null : String(e);
}
function en(e, t, r, n, s, a) {
  var f = e.__className;
  if (f !== r || f === void 0) {
    var o = ia(r);
    o == null ? e.removeAttribute("class") : e.className = o, e.__className = r;
  }
  return a;
}
function la(e, t, r, n) {
  var s = e.__style;
  if (s !== t) {
    var a = aa(t);
    a == null ? e.removeAttribute("style") : e.style.cssText = a, e.__style = t;
  }
  return n;
}
function Dt(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Di(e, "input", async (s) => {
    var a = s ? e.defaultValue : e.value;
    if (a = tr(e) ? rr(a) : a, r(a), x !== null && n.add(x), await Gi(), a !== (a = t())) {
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
  qn(t) == null && e.value && (r(tr(e) ? rr(e.value) : e.value), x !== null && n.add(x)), Nn(() => {
    var s = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        x
      );
      if (n.has(a))
        return;
    }
    tr(e) && s === rr(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function tr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function rr(e) {
  return e === "" ? null : +e;
}
const oa = "5";
var tn;
typeof window < "u" && ((tn = window.__svelte ?? (window.__svelte = {})).v ?? (tn.v = /* @__PURE__ */ new Set())).add(oa);
var fa = /* @__PURE__ */ Pe("<span><span></span> </span>"), ua = /* @__PURE__ */ Pe('<div class="text-center py-12 text-gray-500 dark:text-gray-400">Loading...</div>'), da = /* @__PURE__ */ Pe(`<div class="mb-4 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg"><p class="text-sm text-amber-800 dark:text-amber-300"><strong>Note:</strong> TEST_MODE and TEST_MODE_DEMO_DATA are not both enabled in backend
					config. The simulator will not auto-activate on canister start, but can still be toggled
					manually.</p></div>`), ca = /* @__PURE__ */ Pe('<div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1"><span> </span> <span> </span></div> <div class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"><div class="h-full bg-indigo-500 dark:bg-indigo-400 rounded-full transition-all duration-500"></div></div>', 1), va = /* @__PURE__ */ Pe('<div class="text-xs text-gray-500 dark:text-gray-400"> </div>'), ha = /* @__PURE__ */ Xi('<svg class="inline-block w-4 h-4 mr-1.5 animate-spin" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), _a = /* @__PURE__ */ Pe('<div class="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"><p class="text-sm text-red-800 dark:text-red-300"> </p></div>'), pa = /* @__PURE__ */ Pe('<!> <div class="grid grid-cols-3 gap-3 mb-6"><div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center"><div class="text-2xl font-bold text-indigo-600 dark:text-indigo-400"> </div> <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Users</div></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center"><div class="text-2xl font-bold text-emerald-600 dark:text-emerald-400"> </div> <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Orgs</div></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center"><div class="text-2xl font-bold text-purple-600 dark:text-purple-400"> </div> <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Proposals</div></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center"><div class="text-2xl font-bold text-cyan-600 dark:text-cyan-400"> </div> <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Transfers</div></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center"><div class="text-2xl font-bold text-rose-600 dark:text-rose-400"> </div> <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Disputes</div></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center"><div class="text-2xl font-bold text-indigo-600 dark:text-indigo-400"> </div> <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Votes</div></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center"><div class="text-2xl font-bold text-emerald-600 dark:text-emerald-400"> </div> <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Lands</div></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center"><div class="text-2xl font-bold text-amber-600 dark:text-amber-400"> </div> <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Courts</div></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center"><div class="text-2xl font-bold text-red-600 dark:text-red-400"> </div> <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Cases</div></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center"><div class="text-2xl font-bold text-gray-700 dark:text-gray-200"> </div> <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Batches</div></div></div> <div class="mb-6"><!></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 mb-4"><div class="flex items-center gap-3 mb-5"><button class="ds-btn ds-btn-primary flex-1 svelte-1lbndni"><!> </button> <button class="ds-btn ds-btn-secondary svelte-1lbndni"> </button></div> <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Configuration</h3> <div class="grid grid-cols-2 gap-3"><div><label for="ds-interval" class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Interval (s)</label> <input id="ds-interval" type="number" min="10" max="3600" class="ds-input svelte-1lbndni"/></div> <div><label for="ds-batch" class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Batch size</label> <input id="ds-batch" type="number" min="1" max="20" class="ds-input svelte-1lbndni"/></div> <div><label for="ds-max" class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Max entities</label> <input id="ds-max" type="text" placeholder="unlimited" class="ds-input svelte-1lbndni"/></div> <div><label for="ds-seed" class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Seed (deterministic)</label> <input id="ds-seed" type="text" placeholder="random" class="ds-input svelte-1lbndni"/></div></div> <div class="flex gap-3 mt-4"><button class="ds-btn ds-btn-secondary flex-1 svelte-1lbndni"> </button> <button class="ds-btn ds-btn-danger svelte-1lbndni">Reset Counters</button></div></div> <!>', 1), ga = /* @__PURE__ */ Pe('<div class="max-w-2xl mx-auto p-6"><div class="flex items-center justify-between mb-6"><h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Demo Simulator</h2> <!></div> <!></div>');
const ba = {
  hash: "svelte-1lbndni",
  code: ".ds-btn.svelte-1lbndni {padding:0.5rem 1rem;font-size:0.875rem;font-weight:500;border-radius:0.5rem;cursor:pointer;transition:all 150ms;border:none;}.ds-btn.svelte-1lbndni:disabled {opacity:0.5;cursor:not-allowed;}.ds-btn-primary.svelte-1lbndni {color:#fff !important;background-color:#4f46e5 !important;}.ds-btn-primary.svelte-1lbndni:hover:not(:disabled) {background-color:#4338ca !important;}.ds-btn-secondary.svelte-1lbndni {color:#374151 !important;background-color:#f3f4f6 !important;border:1px solid #d1d5db !important;}.ds-btn-secondary.svelte-1lbndni:hover:not(:disabled) {background-color:#e5e7eb !important;}.dark .ds-btn-secondary.svelte-1lbndni {color:#d1d5db !important;background-color:#374151 !important;border-color:#4b5563 !important;}.dark .ds-btn-secondary.svelte-1lbndni:hover:not(:disabled) {background-color:#4b5563 !important;}.ds-btn-danger.svelte-1lbndni {color:#dc2626 !important;background-color:transparent !important;border:1px solid #fca5a5 !important;}.ds-btn-danger.svelte-1lbndni:hover:not(:disabled) {background-color:#fef2f2 !important;}.dark .ds-btn-danger.svelte-1lbndni {color:#f87171 !important;border-color:#7f1d1d !important;}.dark .ds-btn-danger.svelte-1lbndni:hover:not(:disabled) {background-color:#7f1d1d33 !important;}.ds-input.svelte-1lbndni {width:100%;padding:0.375rem 0.625rem;font-size:0.875rem;border:1px solid #d1d5db;border-radius:0.375rem;background:#fff;color:#111827;transition:border-color 150ms;}.ds-input.svelte-1lbndni:focus {outline:none;border-color:#6366f1;box-shadow:0 0 0 2px rgba(99, 102, 241, 0.2);}.dark .ds-input.svelte-1lbndni {background:#1f2937;border-color:#4b5563;color:#f3f4f6;}"
};
function ma(e, t) {
  an(t, !0), sa(e, ba);
  let r = /* @__PURE__ */ j(null), n = /* @__PURE__ */ j(!0), s = /* @__PURE__ */ j(!1), a = /* @__PURE__ */ j(!1), f = /* @__PURE__ */ j(!1), o = /* @__PURE__ */ j(""), l = /* @__PURE__ */ j(60), u = /* @__PURE__ */ j(3), h = /* @__PURE__ */ j(""), p = /* @__PURE__ */ j(""), _ = /* @__PURE__ */ Gr(() => v(r) ? v(r).stats.users + v(r).stats.organizations + v(r).stats.proposals + v(r).stats.transfers + v(r).stats.disputes : 0), c = /* @__PURE__ */ Gr(() => v(r) && v(r).max_entities ? Math.min(100, Math.round(v(_) / v(r).max_entities * 100)) : 0);
  async function d() {
    try {
      const g = await t.ctx.callSync("get_status", {}), N = typeof g == "string" ? JSON.parse(g) : g;
      N.success ? (y(r, N, !0), y(l, N.interval_seconds, !0), y(u, N.batch_size, !0), y(h, N.max_entities != null ? String(N.max_entities) : "", !0), y(p, String(N.seed ?? ""), !0)) : y(o, N.error || "Failed to fetch status", !0);
    } catch (g) {
      y(o, g?.message ?? String(g), !0);
    } finally {
      y(n, !1);
    }
  }
  async function A() {
    if (v(r)) {
      y(s, !0), y(o, "");
      try {
        const g = await t.ctx.callSync("toggle", { enabled: !v(r).running }), N = typeof g == "string" ? JSON.parse(g) : g;
        N.success ? await d() : y(o, N.error || "Toggle failed", !0);
      } catch (g) {
        y(o, g?.message ?? String(g), !0);
      } finally {
        y(s, !1);
      }
    }
  }
  async function S() {
    y(a, !0), y(o, "");
    try {
      const g = v(h).toString().trim(), N = {
        interval_seconds: v(l),
        batch_size: v(u),
        max_entities: g ? parseInt(g, 10) : null
      };
      v(p).trim() && (N.seed = parseInt(v(p), 10));
      const ge = await t.ctx.callSync("update_config", N), $e = typeof ge == "string" ? JSON.parse(ge) : ge;
      $e.success ? await d() : y(o, $e.error || "Save failed", !0);
    } catch (g) {
      y(o, g?.message ?? String(g), !0);
    } finally {
      y(a, !1);
    }
  }
  async function U() {
    y(f, !0), y(o, "");
    try {
      const g = await t.ctx.callSync("run_once", {}), N = typeof g == "string" ? JSON.parse(g) : g;
      await d(), N.error && y(o, N.error, !0);
    } catch (g) {
      y(o, g?.message ?? String(g), !0);
    } finally {
      y(f, !1);
    }
  }
  async function Ae() {
    y(o, "");
    try {
      const g = await t.ctx.callSync("reset", {}), N = typeof g == "string" ? JSON.parse(g) : g;
      N.success ? await d() : y(o, N.error || "Reset failed", !0);
    } catch (g) {
      y(o, g?.message ?? String(g), !0);
    }
  }
  ji(() => {
    d();
    const g = setInterval(d, 1e4);
    return () => clearInterval(g);
  });
  var We = ga(), wr = b(We), Hn = T(b(wr), 2);
  {
    var Gn = (g) => {
      var N = fa(), ge = b(N), $e = T(ge);
      vt(() => {
        en(N, 1, `inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full
					${v(r).running ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"}`), en(ge, 1, `w-2 h-2 rounded-full ${v(r).running ? "bg-green-500 animate-pulse" : "bg-gray-400"}`), F($e, ` ${v(r).running ? "Running" : "Stopped"}`);
      }), be(g, N);
    };
    Qe(Hn, (g) => {
      v(r) && g(Gn);
    });
  }
  var Jn = T(wr, 2);
  {
    var Kn = (g) => {
      var N = ua();
      be(g, N);
    }, Wn = (g) => {
      var N = pa(), ge = Kr(N);
      {
        var $e = (R) => {
          var W = da();
          be(R, W);
        };
        Qe(ge, (R) => {
          v(r).demo_mode_active || R($e);
        });
      }
      var kr = T(ge, 2), Er = b(kr), $n = b(Er), Zn = b($n), Sr = T(Er, 2), Qn = b(Sr), Xn = b(Qn), Tr = T(Sr, 2), es = b(Tr), ts = b(es), Ar = T(Tr, 2), rs = b(Ar), ns = b(rs), Nr = T(Ar, 2), ss = b(Nr), is = b(ss), Rr = T(Nr, 2), as = b(Rr), ls = b(as), Mr = T(Rr, 2), os = b(Mr), fs = b(os), Or = T(Mr, 2), us = b(Or), ds = b(us), Cr = T(Or, 2), cs = b(Cr), vs = b(cs), hs = T(Cr, 2), _s = b(hs), ps = b(_s), Dr = T(kr, 2), gs = b(Dr);
      {
        var bs = (R) => {
          var W = ca(), Ze = Kr(W), Mt = b(Ze), Ds = b(Mt), Ps = T(Mt, 2), Fs = b(Ps), Is = T(Ze, 2), js = b(Is);
          vt(() => {
            F(Ds, `${v(_) ?? ""} / ${v(r).max_entities ?? ""} entities`), F(Fs, `${v(c) ?? ""}%`), la(js, `width: ${v(c) ?? ""}%`);
          }), be(R, W);
        }, ms = (R) => {
          var W = va(), Ze = b(W);
          vt(() => F(Ze, `${v(_) ?? ""} entities (unlimited)`)), be(R, W);
        };
        Qe(gs, (R) => {
          v(r).max_entities ? R(bs) : R(ms, -1);
        });
      }
      var Pr = T(Dr, 2), Fr = b(Pr), Nt = b(Fr), Ir = b(Nt);
      {
        var ys = (R) => {
          var W = ha();
          be(R, W);
        };
        Qe(Ir, (R) => {
          v(s) && R(ys);
        });
      }
      var xs = T(Ir), Zt = T(Nt, 2), ws = b(Zt), jr = T(Fr, 4), Lr = b(jr), ks = T(b(Lr), 2), zr = T(Lr, 2), Es = T(b(zr), 2), Vr = T(zr, 2), Ss = T(b(Vr), 2), Ts = T(Vr, 2), As = T(b(Ts), 2), Ns = T(jr, 2), Rt = b(Ns), Rs = b(Rt), Ms = T(Rt, 2), Os = T(Pr, 2);
      {
        var Cs = (R) => {
          var W = _a(), Ze = b(W), Mt = b(Ze);
          vt(() => F(Mt, v(o))), be(R, W);
        };
        Qe(Os, (R) => {
          v(o) && R(Cs);
        });
      }
      vt(() => {
        F(Zn, v(r).stats.users), F(Xn, v(r).stats.organizations), F(ts, v(r).stats.proposals), F(ns, v(r).stats.transfers), F(is, v(r).stats.disputes), F(ls, v(r).stats.votes ?? 0), F(fs, v(r).stats.lands ?? 0), F(ds, v(r).stats.courts ?? 0), F(vs, v(r).stats.cases ?? 0), F(ps, v(r).batch_number), Nt.disabled = v(s), F(xs, ` ${v(r).running ? "Stop Simulator" : "Start Simulator"}`), Zt.disabled = v(f), F(ws, v(f) ? "Running..." : "Run Once"), Rt.disabled = v(a), F(Rs, v(a) ? "Saving..." : "Save Config");
      }), Ot("click", Nt, A), Ot("click", Zt, U), Dt(ks, () => v(l), (R) => y(l, R)), Dt(Es, () => v(u), (R) => y(u, R)), Dt(Ss, () => v(h), (R) => y(h, R)), Dt(As, () => v(p), (R) => y(p, R)), Ot("click", Rt, S), Ot("click", Ms, Ae), be(g, N);
    };
    Qe(Jn, (g) => {
      v(n) ? g(Kn) : v(r) && g(Wn, 1);
    });
  }
  be(e, We), ln();
}
Wi(["click"]);
function wa(e, t) {
  const r = ea(ma, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        ra(r);
      } catch {
      }
    }
  };
}
export {
  wa as default
};
