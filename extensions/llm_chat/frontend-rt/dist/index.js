var Ur = Object.defineProperty;
var qn = (e) => {
  throw TypeError(e);
};
var Kr = (e, t, n) => t in e ? Ur(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var se = (e, t, n) => Kr(e, typeof t != "symbol" ? t + "" : t, n), fn = (e, t, n) => t.has(e) || qn("Cannot " + n);
var l = (e, t, n) => (fn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), g = (e, t, n) => t.has(e) ? qn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), w = (e, t, n, r) => (fn(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), T = (e, t, n) => (fn(e, t, "access private method"), n);
var nr = Array.isArray, Jr = Array.prototype.indexOf, at = Array.prototype.includes, en = Array.from, Gr = Object.defineProperty, kt = Object.getOwnPropertyDescriptor, Wr = Object.prototype, Xr = Array.prototype, Zr = Object.getPrototypeOf, Vn = Object.isExtensible;
const Qr = () => {
};
function $r(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function rr() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const z = 2, ot = 4, tn = 8, ir = 1 << 24, ve = 16, _e = 32, Ie = 64, hn = 128, ee = 512, O = 1024, I = 2048, pe = 4096, q = 8192, te = 16384, _t = 32768, jn = 1 << 25, ut = 65536, vn = 1 << 17, ei = 1 << 18, pt = 1 << 19, ti = 1 << 20, Se = 1 << 25, We = 65536, Gt = 1 << 21, St = 1 << 22, Pe = 1 << 23, an = Symbol("$state"), we = new class extends Error {
  constructor() {
    super(...arguments);
    se(this, "name", "StaleReactionError");
    se(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function ni() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ri(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function ii() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function si() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function li() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function fi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ai() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const oi = 1, ui = 2, ci = 16, di = 1, hi = 2, F = Symbol(), vi = "http://www.w3.org/1999/xhtml";
function _i() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function pi() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function sr(e) {
  return e === this.v;
}
function gi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function lr(e) {
  return !gi(e, this.v);
}
let oe = null;
function ct(e) {
  oe = e;
}
function fr(e, t = !1, n) {
  oe = {
    p: oe,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      x
    ),
    l: null
  };
}
function ar(e) {
  var t = (
    /** @type {ComponentContext} */
    oe
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Ui(r);
  }
  return t.i = !0, oe = t.p, /** @type {T} */
  {};
}
function or() {
  return !0;
}
let Le = [];
function ur() {
  var e = Le;
  Le = [], $r(e);
}
function nt(e) {
  if (Le.length === 0 && !Et) {
    var t = Le;
    queueMicrotask(() => {
      t === Le && ur();
    });
  }
  Le.push(e);
}
function mi() {
  for (; Le.length > 0; )
    ur();
}
function cr(e) {
  var t = x;
  if (t === null)
    return k.f |= Pe, e;
  if ((t.f & _t) === 0 && (t.f & ot) === 0)
    throw e;
  Fe(e, t);
}
function Fe(e, t) {
  for (; t !== null; ) {
    if ((t.f & hn) !== 0) {
      if ((t.f & _t) === 0)
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
const bi = -7169;
function C(e, t) {
  e.f = e.f & bi | t;
}
function Sn(e) {
  (e.f & ee) !== 0 || e.deps === null ? C(e, O) : C(e, pe);
}
function dr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & z) === 0 || (t.f & We) === 0 || (t.f ^= We, dr(
        /** @type {Derived} */
        t.deps
      ));
}
function hr(e, t, n) {
  (e.f & I) !== 0 ? t.add(e) : (e.f & pe) !== 0 && n.add(e), dr(e.deps), C(e, O);
}
const ze = /* @__PURE__ */ new Set();
let b = null, fe = null, _n = null, Et = !1, on = !1, et = null, jt = null;
var Bn = 0;
let wi = 1;
var rt, it, je, ye, ce, At, K, Nt, Oe, ke, de, st, lt, Be, R, Bt, vr, Yt, pn, Ht, yi;
const Zt = class Zt {
  constructor() {
    g(this, R);
    se(this, "id", wi++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    se(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    se(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, rt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, it, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, je, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    g(this, ye, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    g(this, ce, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    g(this, At, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    g(this, K, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    g(this, Nt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    g(this, Oe, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    g(this, ke, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    g(this, de, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    g(this, st, /* @__PURE__ */ new Set());
    se(this, "is_fork", !1);
    g(this, lt, !1);
    /** @type {Set<Batch>} */
    g(this, Be, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, de).has(t) || l(this, de).set(t, { d: [], m: [] }), l(this, st).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = l(this, de).get(t);
    if (r) {
      l(this, de).delete(t);
      for (var i of r.d)
        C(i, I), n(i);
      for (i of r.m)
        C(i, pe), n(i);
    }
    l(this, st).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== F && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Pe) === 0 && (this.current.set(t, [n, r]), fe?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    b = this;
  }
  deactivate() {
    b = null, fe = null;
  }
  flush() {
    try {
      on = !0, b = this, T(this, R, Yt).call(this);
    } finally {
      Bn = 0, _n = null, et = null, jt = null, on = !1, b = null, fe = null, Ke.clear();
    }
  }
  discard() {
    for (const t of l(this, it)) t(this);
    l(this, it).clear(), l(this, je).clear(), ze.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, Nt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    let r = l(this, ye).get(n) ?? 0;
    if (l(this, ye).set(n, r + 1), t) {
      let i = l(this, ce).get(n) ?? 0;
      l(this, ce).set(n, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, r) {
    let i = l(this, ye).get(n) ?? 0;
    if (i === 1 ? l(this, ye).delete(n) : l(this, ye).set(n, i - 1), t) {
      let s = l(this, ce).get(n) ?? 0;
      s === 1 ? l(this, ce).delete(n) : l(this, ce).set(n, s - 1);
    }
    l(this, lt) || r || (w(this, lt, !0), nt(() => {
      w(this, lt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      l(this, Oe).add(r);
    for (const r of n)
      l(this, ke).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, rt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, it).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    l(this, je).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, je)) t(this);
    l(this, je).clear();
  }
  settled() {
    return (l(this, At) ?? w(this, At, rr())).promise;
  }
  static ensure() {
    if (b === null) {
      const t = b = new Zt();
      on || (ze.add(b), Et || nt(() => {
        b === t && t.flush();
      }));
    }
    return b;
  }
  apply() {
    {
      fe = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (_n = t, t.b?.is_pending && (t.f & (ot | tn | ir)) !== 0 && (t.f & _t) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (et !== null && n === x && (k === null || (k.f & z) === 0))
        return;
      if ((r & (Ie | _e)) !== 0) {
        if ((r & O) === 0)
          return;
        n.f ^= O;
      }
    }
    l(this, K).push(n);
  }
};
rt = new WeakMap(), it = new WeakMap(), je = new WeakMap(), ye = new WeakMap(), ce = new WeakMap(), At = new WeakMap(), K = new WeakMap(), Nt = new WeakMap(), Oe = new WeakMap(), ke = new WeakMap(), de = new WeakMap(), st = new WeakMap(), lt = new WeakMap(), Be = new WeakMap(), R = new WeakSet(), Bt = function() {
  return this.is_fork || l(this, ce).size > 0;
}, vr = function() {
  for (const r of l(this, Be))
    for (const i of l(r, ce).keys()) {
      for (var t = !1, n = i; n.parent !== null; ) {
        if (l(this, de).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, Yt = function() {
  var a;
  if (Bn++ > 1e3 && (ze.delete(this), Ei()), !T(this, R, Bt).call(this)) {
    for (const f of l(this, Oe))
      l(this, ke).delete(f), C(f, I), this.schedule(f);
    for (const f of l(this, ke))
      C(f, pe), this.schedule(f);
  }
  const t = l(this, K);
  w(this, K, []), this.apply();
  var n = et = [], r = [], i = jt = [];
  for (const f of t)
    try {
      T(this, R, pn).call(this, f, n, r);
    } catch (u) {
      throw gr(f), u;
    }
  if (b = null, i.length > 0) {
    var s = Zt.ensure();
    for (const f of i)
      s.schedule(f);
  }
  if (et = null, jt = null, T(this, R, Bt).call(this) || T(this, R, vr).call(this)) {
    T(this, R, Ht).call(this, r), T(this, R, Ht).call(this, n);
    for (const [f, u] of l(this, de))
      pr(f, u);
  } else {
    l(this, ye).size === 0 && ze.delete(this), l(this, Oe).clear(), l(this, ke).clear();
    for (const f of l(this, rt)) f(this);
    l(this, rt).clear(), Yn(r), Yn(n), l(this, At)?.resolve();
  }
  var o = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    b
  );
  if (l(this, K).length > 0) {
    const f = o ?? (o = this);
    l(f, K).push(...l(this, K).filter((u) => !l(f, K).includes(u)));
  }
  o !== null && (ze.add(o), T(a = o, R, Yt).call(a));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
pn = function(t, n, r) {
  t.f ^= O;
  for (var i = t.first; i !== null; ) {
    var s = i.f, o = (s & (_e | Ie)) !== 0, a = o && (s & O) !== 0, f = a || (s & q) !== 0 || l(this, de).has(i);
    if (!f && i.fn !== null) {
      o ? i.f ^= O : (s & ot) !== 0 ? n.push(i) : Ft(i) && ((s & ve) !== 0 && l(this, ke).add(i), vt(i));
      var u = i.first;
      if (u !== null) {
        i = u;
        continue;
      }
    }
    for (; i !== null; ) {
      var d = i.next;
      if (d !== null) {
        i = d;
        break;
      }
      i = i.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
Ht = function(t) {
  for (var n = 0; n < t.length; n += 1)
    hr(t[n], l(this, Oe), l(this, ke));
}, yi = function() {
  var d, _, v;
  for (const h of ze) {
    var t = h.id < this.id, n = [];
    for (const [c, [m, p]] of this.current) {
      if (h.current.has(c)) {
        var r = (
          /** @type {[any, boolean]} */
          h.current.get(c)[0]
        );
        if (t && m !== r)
          h.current.set(c, [m, p]);
        else
          continue;
      }
      n.push(c);
    }
    var i = [...h.current.keys()].filter((c) => !this.current.has(c));
    if (i.length === 0)
      t && h.discard();
    else if (n.length > 0) {
      if (t)
        for (const c of l(this, st))
          h.unskip_effect(c, (m) => {
            var p;
            (m.f & (ve | St)) !== 0 ? h.schedule(m) : T(p = h, R, Ht).call(p, [m]);
          });
      h.activate();
      var s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
      for (var a of n)
        _r(a, i, s, o);
      o = /* @__PURE__ */ new Map();
      var f = [...h.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of l(this, Nt))
        (c.f & (te | q | vn)) === 0 && Tn(c, f, o) && ((c.f & (St | ve)) !== 0 ? (C(c, I), h.schedule(c)) : l(h, Oe).add(c));
      if (l(h, K).length > 0) {
        h.apply();
        for (var u of l(h, K))
          T(d = h, R, pn).call(d, u, [], []);
        w(h, K, []);
      }
      h.deactivate();
    }
  }
  for (const h of ze)
    l(h, Be).has(this) && (l(h, Be).delete(this), l(h, Be).size === 0 && !T(_ = h, R, Bt).call(_) && (h.activate(), T(v = h, R, Yt).call(v)));
};
let Xe = Zt;
function ki(e) {
  var t = Et;
  Et = !0;
  try {
    for (var n; ; ) {
      if (mi(), b === null)
        return (
          /** @type {T} */
          n
        );
      b.flush();
    }
  } finally {
    Et = t;
  }
}
function Ei() {
  try {
    ii();
  } catch (e) {
    Fe(e, _n);
  }
}
let be = null;
function Yn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (te | q)) === 0 && Ft(r) && (be = /* @__PURE__ */ new Set(), vt(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Rr(r), be?.size > 0)) {
        Ke.clear();
        for (const i of be) {
          if ((i.f & (te | q)) !== 0) continue;
          const s = [i];
          let o = i.parent;
          for (; o !== null; )
            be.has(o) && (be.delete(o), s.push(o)), o = o.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const f = s[a];
            (f.f & (te | q)) === 0 && vt(f);
          }
        }
        be.clear();
      }
    }
    be = null;
  }
}
function _r(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & z) !== 0 ? _r(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (St | ve)) !== 0 && (s & I) === 0 && Tn(i, t, r) && (C(i, I), An(
        /** @type {Effect} */
        i
      ));
    }
}
function Tn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (at.call(t, i))
        return !0;
      if ((i.f & z) !== 0 && Tn(
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
function An(e) {
  b.schedule(e);
}
function pr(e, t) {
  if (!((e.f & _e) !== 0 && (e.f & O) !== 0)) {
    (e.f & I) !== 0 ? t.d.push(e) : (e.f & pe) !== 0 && t.m.push(e), C(e, O);
    for (var n = e.first; n !== null; )
      pr(n, t), n = n.next;
  }
}
function gr(e) {
  C(e, O);
  for (var t = e.first; t !== null; )
    gr(t), t = t.next;
}
function xi(e) {
  let t = 0, n = Ze(0), r;
  return () => {
    Mn() && (y(n), Rn(() => (t === 0 && (r = In(() => e(() => xt(n)))), t += 1, () => {
      nt(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, xt(n));
      });
    })));
  };
}
var Si = ut | pt;
function Ti(e, t, n, r) {
  new Ai(e, t, n, r);
}
var X, xn, Z, Ye, V, Q, L, J, Ee, He, De, ft, Ct, Mt, xe, Qt, N, Ni, Ci, Mi, gn, Ut, Kt, mn, bn;
class Ai {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    g(this, N);
    /** @type {Boundary | null} */
    se(this, "parent");
    se(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    se(this, "transform_error");
    /** @type {TemplateNode} */
    g(this, X);
    /** @type {TemplateNode | null} */
    g(this, xn, null);
    /** @type {BoundaryProps} */
    g(this, Z);
    /** @type {((anchor: Node) => void)} */
    g(this, Ye);
    /** @type {Effect} */
    g(this, V);
    /** @type {Effect | null} */
    g(this, Q, null);
    /** @type {Effect | null} */
    g(this, L, null);
    /** @type {Effect | null} */
    g(this, J, null);
    /** @type {DocumentFragment | null} */
    g(this, Ee, null);
    g(this, He, 0);
    g(this, De, 0);
    g(this, ft, !1);
    /** @type {Set<Effect>} */
    g(this, Ct, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    g(this, Mt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    g(this, xe, null);
    g(this, Qt, xi(() => (w(this, xe, Ze(l(this, He))), () => {
      w(this, xe, null);
    })));
    w(this, X, t), w(this, Z, n), w(this, Ye, (s) => {
      var o = (
        /** @type {Effect} */
        x
      );
      o.b = this, o.f |= hn, r(s);
    }), this.parent = /** @type {Effect} */
    x.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), w(this, V, On(() => {
      T(this, N, gn).call(this);
    }, Si));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    hr(t, l(this, Ct), l(this, Mt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, Z).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    T(this, N, mn).call(this, t, n), w(this, He, l(this, He) + t), !(!l(this, xe) || l(this, ft)) && (w(this, ft, !0), nt(() => {
      w(this, ft, !1), l(this, xe) && dt(l(this, xe), l(this, He));
    }));
  }
  get_effect_pending() {
    return l(this, Qt).call(this), y(
      /** @type {Source<number>} */
      l(this, xe)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, Z).onerror && !l(this, Z).failed)
      throw t;
    b?.is_fork ? (l(this, Q) && b.skip_effect(l(this, Q)), l(this, L) && b.skip_effect(l(this, L)), l(this, J) && b.skip_effect(l(this, J)), b.on_fork_commit(() => {
      T(this, N, bn).call(this, t);
    })) : T(this, N, bn).call(this, t);
  }
}
X = new WeakMap(), xn = new WeakMap(), Z = new WeakMap(), Ye = new WeakMap(), V = new WeakMap(), Q = new WeakMap(), L = new WeakMap(), J = new WeakMap(), Ee = new WeakMap(), He = new WeakMap(), De = new WeakMap(), ft = new WeakMap(), Ct = new WeakMap(), Mt = new WeakMap(), xe = new WeakMap(), Qt = new WeakMap(), N = new WeakSet(), Ni = function() {
  try {
    w(this, Q, $(() => l(this, Ye).call(this, l(this, X))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Ci = function(t) {
  const n = l(this, Z).failed;
  n && w(this, J, $(() => {
    n(
      l(this, X),
      () => t,
      () => () => {
      }
    );
  }));
}, Mi = function() {
  const t = l(this, Z).pending;
  t && (this.is_pending = !0, w(this, L, $(() => t(l(this, X)))), nt(() => {
    var n = w(this, Ee, document.createDocumentFragment()), r = ht();
    n.append(r), w(this, Q, T(this, N, Kt).call(this, () => $(() => l(this, Ye).call(this, r)))), l(this, De) === 0 && (l(this, X).before(n), w(this, Ee, null), Je(
      /** @type {Effect} */
      l(this, L),
      () => {
        w(this, L, null);
      }
    ), T(this, N, Ut).call(
      this,
      /** @type {Batch} */
      b
    ));
  }));
}, gn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), w(this, De, 0), w(this, He, 0), w(this, Q, $(() => {
      l(this, Ye).call(this, l(this, X));
    })), l(this, De) > 0) {
      var t = w(this, Ee, document.createDocumentFragment());
      Pn(l(this, Q), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        l(this, Z).pending
      );
      w(this, L, $(() => n(l(this, X))));
    } else
      T(this, N, Ut).call(
        this,
        /** @type {Batch} */
        b
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
Ut = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, Ct), l(this, Mt));
}, /**
 * @template T
 * @param {() => T} fn
 */
Kt = function(t) {
  var n = x, r = k, i = oe;
  ge(l(this, V)), re(l(this, V)), ct(l(this, V).ctx);
  try {
    return Xe.ensure(), t();
  } catch (s) {
    return cr(s), null;
  } finally {
    ge(n), re(r), ct(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
mn = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && T(r = this.parent, N, mn).call(r, t, n);
    return;
  }
  w(this, De, l(this, De) + t), l(this, De) === 0 && (T(this, N, Ut).call(this, n), l(this, L) && Je(l(this, L), () => {
    w(this, L, null);
  }), l(this, Ee) && (l(this, X).before(l(this, Ee)), w(this, Ee, null)));
}, /**
 * @param {unknown} error
 */
bn = function(t) {
  l(this, Q) && (Y(l(this, Q)), w(this, Q, null)), l(this, L) && (Y(l(this, L)), w(this, L, null)), l(this, J) && (Y(l(this, J)), w(this, J, null));
  var n = l(this, Z).onerror;
  let r = l(this, Z).failed;
  var i = !1, s = !1;
  const o = () => {
    if (i) {
      pi();
      return;
    }
    i = !0, s && ai(), l(this, J) !== null && Je(l(this, J), () => {
      w(this, J, null);
    }), T(this, N, Kt).call(this, () => {
      T(this, N, gn).call(this);
    });
  }, a = (f) => {
    try {
      s = !0, n?.(f, o), s = !1;
    } catch (u) {
      Fe(u, l(this, V) && l(this, V).parent);
    }
    r && w(this, J, T(this, N, Kt).call(this, () => {
      try {
        return $(() => {
          var u = (
            /** @type {Effect} */
            x
          );
          u.b = this, u.f |= hn, r(
            l(this, X),
            () => f,
            () => o
          );
        });
      } catch (u) {
        return Fe(
          u,
          /** @type {Effect} */
          l(this, V).parent
        ), null;
      }
    }));
  };
  nt(() => {
    var f;
    try {
      f = this.transform_error(t);
    } catch (u) {
      Fe(u, l(this, V) && l(this, V).parent);
      return;
    }
    f !== null && typeof f == "object" && typeof /** @type {any} */
    f.then == "function" ? f.then(
      a,
      /** @param {unknown} e */
      (u) => Fe(u, l(this, V) && l(this, V).parent)
    ) : a(f);
  });
};
function Ri(e, t, n, r) {
  const i = br;
  var s = e.filter((v) => !v.settled);
  if (n.length === 0 && s.length === 0) {
    r(t.map(i));
    return;
  }
  var o = (
    /** @type {Effect} */
    x
  ), a = Oi(), f = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((v) => v.promise)) : null;
  function u(v) {
    a();
    try {
      r(v);
    } catch (h) {
      (o.f & te) === 0 && Fe(h, o);
    }
    Wt();
  }
  if (n.length === 0) {
    f.then(() => u(t.map(i)));
    return;
  }
  var d = mr();
  function _() {
    Promise.all(n.map((v) => /* @__PURE__ */ Di(v))).then((v) => u([...t.map(i), ...v])).catch((v) => Fe(v, o)).finally(() => d());
  }
  f ? f.then(() => {
    a(), _(), Wt();
  }) : _();
}
function Oi() {
  var e = (
    /** @type {Effect} */
    x
  ), t = k, n = oe, r = (
    /** @type {Batch} */
    b
  );
  return function(s = !0) {
    ge(e), re(t), ct(n), s && (e.f & te) === 0 && (r?.activate(), r?.apply());
  };
}
function Wt(e = !0) {
  ge(null), re(null), ct(null), e && b?.deactivate();
}
function mr() {
  var e = (
    /** @type {Effect} */
    x
  ), t = (
    /** @type {Boundary} */
    e.b
  ), n = (
    /** @type {Batch} */
    b
  ), r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
    t.update_pending_count(-1, n), n.decrement(r, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function br(e) {
  var t = z | I;
  return x !== null && (x.f |= pt), {
    ctx: oe,
    deps: null,
    effects: null,
    equals: sr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      F
    ),
    wv: 0,
    parent: x,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Di(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    x
  );
  r === null && ni();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Ze(
    /** @type {V} */
    F
  ), o = !k, a = /* @__PURE__ */ new Map();
  return Gi(() => {
    var f = (
      /** @type {Effect} */
      x
    ), u = rr();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(Wt);
    } catch (h) {
      u.reject(h), Wt();
    }
    var d = (
      /** @type {Batch} */
      b
    );
    if (o) {
      if ((f.f & _t) !== 0)
        var _ = mr();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        a.get(d)?.reject(we), a.delete(d);
      else {
        for (const h of a.values())
          h.reject(we);
        a.clear();
      }
      a.set(d, u);
    }
    const v = (h, c = void 0) => {
      if (_) {
        var m = c === we;
        _(m);
      }
      if (!(c === we || (f.f & te) !== 0)) {
        if (d.activate(), c)
          s.f |= Pe, dt(s, c);
        else {
          (s.f & Pe) !== 0 && (s.f ^= Pe), dt(s, h);
          for (const [p, E] of a) {
            if (a.delete(p), p === d) break;
            E.reject(we);
          }
        }
        d.deactivate();
      }
    };
    u.promise.then(v, (h) => v(null, h || "unknown"));
  }), Hi(() => {
    for (const f of a.values())
      f.reject(we);
  }), new Promise((f) => {
    function u(d) {
      function _() {
        d === i ? f(s) : u(i);
      }
      d.then(_, _);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Fi(e) {
  const t = /* @__PURE__ */ br(e);
  return t.equals = lr, t;
}
function Pi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Y(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Nn(e) {
  var t, n = x, r = e.parent;
  if (!Qe && r !== null && (r.f & (te | q)) !== 0)
    return _i(), e.v;
  ge(r);
  try {
    e.f &= ~We, Pi(e), t = zr(e);
  } finally {
    ge(n);
  }
  return t;
}
function wr(e) {
  var t = Nn(e);
  if (!e.equals(t) && (e.wv = Pr(), (!b?.is_fork || e.deps === null) && (b !== null ? b.capture(e, t, !0) : e.v = t, e.deps === null))) {
    C(e, O);
    return;
  }
  Qe || (fe !== null ? (Mn() || b?.is_fork) && fe.set(e, t) : Sn(e));
}
function Ii(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(we), t.teardown = Qr, t.ac = null, Tt(t, 0), Dn(t));
}
function yr(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && vt(t);
}
let wn = /* @__PURE__ */ new Set();
const Ke = /* @__PURE__ */ new Map();
let kr = !1;
function Ze(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: sr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function j(e, t) {
  const n = Ze(e);
  return Zi(n), n;
}
// @__NO_SIDE_EFFECTS__
function zi(e, t = !1, n = !0) {
  const r = Ze(e);
  return t || (r.equals = lr), r;
}
function M(e, t, n = !1) {
  k !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ae || (k.f & vn) !== 0) && or() && (k.f & (z | ve | St | vn)) !== 0 && (ne === null || !at.call(ne, e)) && fi();
  let r = n ? tt(t) : t;
  return dt(e, r, jt);
}
function dt(e, t, n = null) {
  if (!e.equals(t)) {
    Ke.set(e, Qe ? t : e.v);
    var r = Xe.ensure();
    if (r.capture(e, t), (e.f & z) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & I) !== 0 && Nn(i), fe === null && Sn(i);
    }
    e.wv = Pr(), Er(e, I, n), x !== null && (x.f & O) !== 0 && (x.f & (_e | Ie)) === 0 && (W === null ? Qi([e]) : W.push(e)), !r.is_fork && wn.size > 0 && !kr && Li();
  }
  return t;
}
function Li() {
  kr = !1;
  for (const e of wn)
    (e.f & O) !== 0 && C(e, pe), Ft(e) && vt(e);
  wn.clear();
}
function xt(e) {
  M(e, e.v + 1);
}
function Er(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, s = 0; s < i; s++) {
      var o = r[s], a = o.f, f = (a & I) === 0;
      if (f && C(o, t), (a & z) !== 0) {
        var u = (
          /** @type {Derived} */
          o
        );
        fe?.delete(u), (a & We) === 0 && (a & ee && (x === null || (x.f & Gt) === 0) && (o.f |= We), Er(u, pe, n));
      } else if (f) {
        var d = (
          /** @type {Effect} */
          o
        );
        (a & ve) !== 0 && be !== null && be.add(d), n !== null ? n.push(d) : An(d);
      }
    }
}
function tt(e) {
  if (typeof e != "object" || e === null || an in e)
    return e;
  const t = Zr(e);
  if (t !== Wr && t !== Xr)
    return e;
  var n = /* @__PURE__ */ new Map(), r = nr(e), i = /* @__PURE__ */ j(0), s = Ge, o = (a) => {
    if (Ge === s)
      return a();
    var f = k, u = Ge;
    re(null), Gn(s);
    var d = a();
    return re(f), Gn(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ j(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && si();
        var d = n.get(f);
        return d === void 0 ? o(() => {
          var _ = /* @__PURE__ */ j(u.value);
          return n.set(f, _), _;
        }) : M(d, u.value, !0), !0;
      },
      deleteProperty(a, f) {
        var u = n.get(f);
        if (u === void 0) {
          if (f in a) {
            const d = o(() => /* @__PURE__ */ j(F));
            n.set(f, d), xt(i);
          }
        } else
          M(u, F), xt(i);
        return !0;
      },
      get(a, f, u) {
        if (f === an)
          return e;
        var d = n.get(f), _ = f in a;
        if (d === void 0 && (!_ || kt(a, f)?.writable) && (d = o(() => {
          var h = tt(_ ? a[f] : F), c = /* @__PURE__ */ j(h);
          return c;
        }), n.set(f, d)), d !== void 0) {
          var v = y(d);
          return v === F ? void 0 : v;
        }
        return Reflect.get(a, f, u);
      },
      getOwnPropertyDescriptor(a, f) {
        var u = Reflect.getOwnPropertyDescriptor(a, f);
        if (u && "value" in u) {
          var d = n.get(f);
          d && (u.value = y(d));
        } else if (u === void 0) {
          var _ = n.get(f), v = _?.v;
          if (_ !== void 0 && v !== F)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return u;
      },
      has(a, f) {
        if (f === an)
          return !0;
        var u = n.get(f), d = u !== void 0 && u.v !== F || Reflect.has(a, f);
        if (u !== void 0 || x !== null && (!d || kt(a, f)?.writable)) {
          u === void 0 && (u = o(() => {
            var v = d ? tt(a[f]) : F, h = /* @__PURE__ */ j(v);
            return h;
          }), n.set(f, u));
          var _ = y(u);
          if (_ === F)
            return !1;
        }
        return d;
      },
      set(a, f, u, d) {
        var _ = n.get(f), v = f in a;
        if (r && f === "length")
          for (var h = u; h < /** @type {Source<number>} */
          _.v; h += 1) {
            var c = n.get(h + "");
            c !== void 0 ? M(c, F) : h in a && (c = o(() => /* @__PURE__ */ j(F)), n.set(h + "", c));
          }
        if (_ === void 0)
          (!v || kt(a, f)?.writable) && (_ = o(() => /* @__PURE__ */ j(void 0)), M(_, tt(u)), n.set(f, _));
        else {
          v = _.v !== F;
          var m = o(() => tt(u));
          M(_, m);
        }
        var p = Reflect.getOwnPropertyDescriptor(a, f);
        if (p?.set && p.set.call(d, u), !v) {
          if (r && typeof f == "string") {
            var E = (
              /** @type {Source<number>} */
              n.get("length")
            ), A = Number(f);
            Number.isInteger(A) && A >= E.v && M(E, A + 1);
          }
          xt(i);
        }
        return !0;
      },
      ownKeys(a) {
        y(i);
        var f = Reflect.ownKeys(a).filter((_) => {
          var v = n.get(_);
          return v === void 0 || v.v !== F;
        });
        for (var [u, d] of n)
          d.v !== F && !(u in a) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        li();
      }
    }
  );
}
var Hn, xr, Sr, Tr;
function qi() {
  if (Hn === void 0) {
    Hn = window, xr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Sr = kt(t, "firstChild").get, Tr = kt(t, "nextSibling").get, Vn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Vn(n) && (n.__t = void 0);
  }
}
function ht(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
  return (
    /** @type {TemplateNode | null} */
    Sr.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Dt(e) {
  return (
    /** @type {TemplateNode | null} */
    Tr.call(e)
  );
}
function ue(e, t) {
  return /* @__PURE__ */ Xt(e);
}
function Vi(e, t = !1) {
  {
    var n = /* @__PURE__ */ Xt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Dt(n) : n;
  }
}
function Me(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Dt(r);
  return r;
}
function ji(e) {
  e.textContent = "";
}
function Ar() {
  return !1;
}
function Nr(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(vi, e, void 0)
  );
}
let Un = !1;
function Bi() {
  Un || (Un = !0, document.addEventListener(
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
function Cn(e) {
  var t = k, n = x;
  re(null), ge(null);
  try {
    return e();
  } finally {
    re(t), ge(n);
  }
}
function Cr(e, t, n, r = n) {
  e.addEventListener(t, () => Cn(n));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), r(!0);
  } : e.__on_r = () => r(!0), Bi();
}
function Yi(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Te(e, t) {
  var n = x;
  n !== null && (n.f & q) !== 0 && (e |= q);
  var r = {
    ctx: oe,
    deps: null,
    nodes: null,
    f: e | I | ee,
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
  b?.register_created_effect(r);
  var i = r;
  if ((e & ot) !== 0)
    et !== null ? et.push(r) : Xe.ensure().schedule(r);
  else if (t !== null) {
    try {
      vt(r);
    } catch (o) {
      throw Y(r), o;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & pt) === 0 && (i = i.first, (e & ve) !== 0 && (e & ut) !== 0 && i !== null && (i.f |= ut));
  }
  if (i !== null && (i.parent = n, n !== null && Yi(i, n), k !== null && (k.f & z) !== 0 && (e & Ie) === 0)) {
    var s = (
      /** @type {Derived} */
      k
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return r;
}
function Mn() {
  return k !== null && !ae;
}
function Hi(e) {
  const t = Te(tn, null);
  return C(t, O), t.teardown = e, t;
}
function Ui(e) {
  return Te(ot | ti, e);
}
function Ki(e) {
  Xe.ensure();
  const t = Te(Ie | pt, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? Je(t, () => {
      Y(t), r(void 0);
    }) : (Y(t), r(void 0));
  });
}
function Ji(e) {
  return Te(ot, e);
}
function Gi(e) {
  return Te(St | pt, e);
}
function Rn(e, t = 0) {
  return Te(tn | t, e);
}
function Kn(e, t = [], n = [], r = []) {
  Ri(r, t, n, (i) => {
    Te(tn, () => e(...i.map(y)));
  });
}
function On(e, t = 0) {
  var n = Te(ve | t, e);
  return n;
}
function $(e) {
  return Te(_e | pt, e);
}
function Mr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Qe, r = k;
    Jn(!0), re(null);
    try {
      t.call(null);
    } finally {
      Jn(n), re(r);
    }
  }
}
function Dn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Cn(() => {
      i.abort(we);
    });
    var r = n.next;
    (n.f & Ie) !== 0 ? n.parent = null : Y(n, t), n = r;
  }
}
function Wi(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & _e) === 0 && Y(t), t = n;
  }
}
function Y(e, t = !0) {
  var n = !1;
  (t || (e.f & ei) !== 0) && e.nodes !== null && e.nodes.end !== null && (Xi(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), C(e, jn), Dn(e, t && !n), Tt(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  Mr(e), e.f ^= jn, e.f |= te;
  var i = e.parent;
  i !== null && i.first !== null && Rr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Xi(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Dt(e);
    e.remove(), e = n;
  }
}
function Rr(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Je(e, t, n = !0) {
  var r = [];
  Or(e, r, !0);
  var i = () => {
    n && Y(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var o = () => --s || i();
    for (var a of r)
      a.out(o);
  } else
    i();
}
function Or(e, t, n) {
  if ((e.f & q) === 0) {
    e.f ^= q;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & Ie) === 0) {
        var o = (i.f & ut) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & _e) !== 0 && (e.f & ve) !== 0;
        Or(i, t, o ? n : !1);
      }
      i = s;
    }
  }
}
function Fn(e) {
  Dr(e, !0);
}
function Dr(e, t) {
  if ((e.f & q) !== 0) {
    e.f ^= q, (e.f & O) === 0 && (C(e, I), Xe.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & ut) !== 0 || (n.f & _e) !== 0;
      Dr(n, i ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const o of s)
        (o.is_global || t) && o.in();
  }
}
function Pn(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Dt(n);
      t.append(n), n = i;
    }
}
let Jt = !1, Qe = !1;
function Jn(e) {
  Qe = e;
}
let k = null, ae = !1;
function re(e) {
  k = e;
}
let x = null;
function ge(e) {
  x = e;
}
let ne = null;
function Zi(e) {
  k !== null && (ne === null ? ne = [e] : ne.push(e));
}
let B = null, U = 0, W = null;
function Qi(e) {
  W = e;
}
let Fr = 1, qe = 0, Ge = qe;
function Gn(e) {
  Ge = e;
}
function Pr() {
  return ++Fr;
}
function Ft(e) {
  var t = e.f;
  if ((t & I) !== 0)
    return !0;
  if (t & z && (e.f &= ~We), (t & pe) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Ft(
        /** @type {Derived} */
        s
      ) && wr(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & ee) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    fe === null && C(e, O);
  }
  return !1;
}
function Ir(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(ne !== null && at.call(ne, e)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & z) !== 0 ? Ir(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? C(s, I) : (s.f & O) !== 0 && C(s, pe), An(
        /** @type {Effect} */
        s
      ));
    }
}
function zr(e) {
  var m;
  var t = B, n = U, r = W, i = k, s = ne, o = oe, a = ae, f = Ge, u = e.f;
  B = /** @type {null | Value[]} */
  null, U = 0, W = null, k = (u & (_e | Ie)) === 0 ? e : null, ne = null, ct(e.ctx), ae = !1, Ge = ++qe, e.ac !== null && (Cn(() => {
    e.ac.abort(we);
  }), e.ac = null);
  try {
    e.f |= Gt;
    var d = (
      /** @type {Function} */
      e.fn
    ), _ = d();
    e.f |= _t;
    var v = e.deps, h = b?.is_fork;
    if (B !== null) {
      var c;
      if (h || Tt(e, U), v !== null && U > 0)
        for (v.length = U + B.length, c = 0; c < B.length; c++)
          v[U + c] = B[c];
      else
        e.deps = v = B;
      if (Mn() && (e.f & ee) !== 0)
        for (c = U; c < v.length; c++)
          ((m = v[c]).reactions ?? (m.reactions = [])).push(e);
    } else !h && v !== null && U < v.length && (Tt(e, U), v.length = U);
    if (or() && W !== null && !ae && v !== null && (e.f & (z | pe | I)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      W.length; c++)
        Ir(
          W[c],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (qe++, i.deps !== null)
        for (let p = 0; p < n; p += 1)
          i.deps[p].rv = qe;
      if (t !== null)
        for (const p of t)
          p.rv = qe;
      W !== null && (r === null ? r = W : r.push(.../** @type {Source[]} */
      W));
    }
    return (e.f & Pe) !== 0 && (e.f ^= Pe), _;
  } catch (p) {
    return cr(p);
  } finally {
    e.f ^= Gt, B = t, U = n, W = r, k = i, ne = s, ct(o), ae = a, Ge = f;
  }
}
function $i(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Jr.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & z) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (B === null || !at.call(B, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & ee) !== 0 && (s.f ^= ee, s.f &= ~We), s.v !== F && Sn(s), Ii(s), Tt(s, 0);
  }
}
function Tt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      $i(e, n[r]);
}
function vt(e) {
  var t = e.f;
  if ((t & te) === 0) {
    C(e, O);
    var n = x, r = Jt;
    x = e, Jt = !0;
    try {
      (t & (ve | ir)) !== 0 ? Wi(e) : Dn(e), Mr(e);
      var i = zr(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Fr;
      var s;
    } finally {
      Jt = r, x = n;
    }
  }
}
async function es() {
  await Promise.resolve(), ki();
}
function y(e) {
  var t = e.f, n = (t & z) !== 0;
  if (k !== null && !ae) {
    var r = x !== null && (x.f & te) !== 0;
    if (!r && (ne === null || !at.call(ne, e))) {
      var i = k.deps;
      if ((k.f & Gt) !== 0)
        e.rv < qe && (e.rv = qe, B === null && i !== null && i[U] === e ? U++ : B === null ? B = [e] : B.push(e));
      else {
        (k.deps ?? (k.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [k] : at.call(s, k) || s.push(k);
      }
    }
  }
  if (Qe && Ke.has(e))
    return Ke.get(e);
  if (n) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (Qe) {
      var a = o.v;
      return ((o.f & O) === 0 && o.reactions !== null || qr(o)) && (a = Nn(o)), Ke.set(o, a), a;
    }
    var f = (o.f & ee) === 0 && !ae && k !== null && (Jt || (k.f & ee) !== 0), u = (o.f & _t) === 0;
    Ft(o) && (f && (o.f |= ee), wr(o)), f && !u && (yr(o), Lr(o));
  }
  if (fe?.has(e))
    return fe.get(e);
  if ((e.f & Pe) !== 0)
    throw e.v;
  return e.v;
}
function Lr(e) {
  if (e.f |= ee, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & z) !== 0 && (t.f & ee) === 0 && (yr(
        /** @type {Derived} */
        t
      ), Lr(
        /** @type {Derived} */
        t
      ));
}
function qr(e) {
  if (e.v === F) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ke.has(t) || (t.f & z) !== 0 && qr(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function In(e) {
  var t = ae;
  try {
    return ae = !0, e();
  } finally {
    ae = t;
  }
}
const ts = ["touchstart", "touchmove"];
function ns(e) {
  return ts.includes(e);
}
const Ve = Symbol("events"), Vr = /* @__PURE__ */ new Set(), yn = /* @__PURE__ */ new Set();
function un(e, t, n) {
  (t[Ve] ?? (t[Ve] = {}))[e] = n;
}
function rs(e) {
  for (var t = 0; t < e.length; t++)
    Vr.add(e[t]);
  for (var n of yn)
    n(e);
}
let Wn = null;
function Xn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Wn = e;
  var o = 0, a = Wn === e && e[Ve];
  if (a) {
    var f = i.indexOf(a);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Ve] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    f <= u && (o = f);
  }
  if (s = /** @type {Element} */
  i[o] || e.target, s !== t) {
    Gr(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var d = k, _ = x;
    re(null), ge(null);
    try {
      for (var v, h = []; s !== null; ) {
        var c = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var m = s[Ve]?.[r];
          m != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && m.call(s, e);
        } catch (p) {
          v ? h.push(p) : v = p;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        s = c;
      }
      if (v) {
        for (let p of h)
          queueMicrotask(() => {
            throw p;
          });
        throw v;
      }
    } finally {
      e[Ve] = t, delete e.currentTarget, re(d), ge(_);
    }
  }
}
const is = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function ss(e) {
  return (
    /** @type {string} */
    is?.createHTML(e) ?? e
  );
}
function ls(e) {
  var t = Nr("template");
  return t.innerHTML = ss(e.replaceAll("<!>", "<!---->")), t.content;
}
function Zn(e, t) {
  var n = (
    /** @type {Effect} */
    x
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Pt(e, t) {
  var n = (t & di) !== 0, r = (t & hi) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = ls(s ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Xt(i)));
    var o = (
      /** @type {TemplateNode} */
      r || xr ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Xt(o)
      ), f = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Zn(a, f);
    } else
      Zn(o, o);
    return o;
  };
}
function bt(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Lt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function fs(e, t) {
  return as(e, t);
}
const qt = /* @__PURE__ */ new Map();
function as(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: o = !0, transformError: a }) {
  qi();
  var f = void 0, u = Ki(() => {
    var d = n ?? t.appendChild(ht());
    Ti(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (h) => {
        fr({});
        var c = (
          /** @type {ComponentContext} */
          oe
        );
        s && (c.c = s), i && (r.$$events = i), f = e(h, r) || {}, ar();
      },
      a
    );
    var _ = /* @__PURE__ */ new Set(), v = (h) => {
      for (var c = 0; c < h.length; c++) {
        var m = h[c];
        if (!_.has(m)) {
          _.add(m);
          var p = ns(m);
          for (const P of [t, document]) {
            var E = qt.get(P);
            E === void 0 && (E = /* @__PURE__ */ new Map(), qt.set(P, E));
            var A = E.get(m);
            A === void 0 ? (P.addEventListener(m, Xn, { passive: p }), E.set(m, 1)) : E.set(m, A + 1);
          }
        }
      }
    };
    return v(en(Vr)), yn.add(v), () => {
      for (var h of _)
        for (const p of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            qt.get(p)
          ), m = (
            /** @type {number} */
            c.get(h)
          );
          --m == 0 ? (p.removeEventListener(h, Xn), c.delete(h), c.size === 0 && qt.delete(p)) : c.set(h, m);
        }
      yn.delete(v), d !== n && d.parentNode?.removeChild(d);
    };
  });
  return kn.set(f, u), f;
}
let kn = /* @__PURE__ */ new WeakMap();
function os(e, t) {
  const n = kn.get(e);
  return n ? (kn.delete(e), n(t)) : Promise.resolve();
}
var le, he, G, Ue, Rt, Ot, $t;
class us {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    se(this, "anchor");
    /** @type {Map<Batch, Key>} */
    g(this, le, /* @__PURE__ */ new Map());
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
    g(this, he, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    g(this, G, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    g(this, Ue, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    g(this, Rt, !0);
    /**
     * @param {Batch} batch
     */
    g(this, Ot, (t) => {
      if (l(this, le).has(t)) {
        var n = (
          /** @type {Key} */
          l(this, le).get(t)
        ), r = l(this, he).get(n);
        if (r)
          Fn(r), l(this, Ue).delete(n);
        else {
          var i = l(this, G).get(n);
          i && (l(this, he).set(n, i.effect), l(this, G).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, o] of l(this, le)) {
          if (l(this, le).delete(s), s === t)
            break;
          const a = l(this, G).get(o);
          a && (Y(a.effect), l(this, G).delete(o));
        }
        for (const [s, o] of l(this, he)) {
          if (s === n || l(this, Ue).has(s)) continue;
          const a = () => {
            if (Array.from(l(this, le).values()).includes(s)) {
              var u = document.createDocumentFragment();
              Pn(o, u), u.append(ht()), l(this, G).set(s, { effect: o, fragment: u });
            } else
              Y(o);
            l(this, Ue).delete(s), l(this, he).delete(s);
          };
          l(this, Rt) || !r ? (l(this, Ue).add(s), Je(o, a, !1)) : a();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    g(this, $t, (t) => {
      l(this, le).delete(t);
      const n = Array.from(l(this, le).values());
      for (const [r, i] of l(this, G))
        n.includes(r) || (Y(i.effect), l(this, G).delete(r));
    });
    this.anchor = t, w(this, Rt, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      b
    ), i = Ar();
    if (n && !l(this, he).has(t) && !l(this, G).has(t))
      if (i) {
        var s = document.createDocumentFragment(), o = ht();
        s.append(o), l(this, G).set(t, {
          effect: $(() => n(o)),
          fragment: s
        });
      } else
        l(this, he).set(
          t,
          $(() => n(this.anchor))
        );
    if (l(this, le).set(r, t), i) {
      for (const [a, f] of l(this, he))
        a === t ? r.unskip_effect(f) : r.skip_effect(f);
      for (const [a, f] of l(this, G))
        a === t ? r.unskip_effect(f.effect) : r.skip_effect(f.effect);
      r.oncommit(l(this, Ot)), r.ondiscard(l(this, $t));
    } else
      l(this, Ot).call(this, r);
  }
}
le = new WeakMap(), he = new WeakMap(), G = new WeakMap(), Ue = new WeakMap(), Rt = new WeakMap(), Ot = new WeakMap(), $t = new WeakMap();
function Qn(e, t, n = !1) {
  var r = new us(e), i = n ? ut : 0;
  function s(o, a) {
    r.ensure(o, a);
  }
  On(() => {
    var o = !1;
    t((a, f = 0) => {
      o = !0, s(f, a);
    }), o || s(-1, null);
  }, i);
}
function cs(e, t) {
  return t;
}
function ds(e, t, n) {
  for (var r = [], i = t.length, s, o = t.length, a = 0; a < i; a++) {
    let _ = t[a];
    Je(
      _,
      () => {
        if (s) {
          if (s.pending.delete(_), s.done.add(_), s.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            En(e, en(s.done)), v.delete(s), v.size === 0 && (e.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var f = r.length === 0 && n !== null;
    if (f) {
      var u = (
        /** @type {Element} */
        n
      ), d = (
        /** @type {Element} */
        u.parentNode
      );
      ji(d), d.append(u), e.items.clear();
    }
    En(e, t, !f);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function En(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const o of e.pending.values())
      for (const a of o)
        r.add(
          /** @type {EachItem} */
          e.items.get(a).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (r?.has(s)) {
      s.f |= Se;
      const o = document.createDocumentFragment();
      Pn(s, o);
    } else
      Y(t[i], n);
  }
}
var $n;
function hs(e, t, n, r, i, s = null) {
  var o = e, a = /* @__PURE__ */ new Map(), f = null, u = /* @__PURE__ */ Fi(() => {
    var E = n();
    return nr(E) ? E : E == null ? [] : en(E);
  }), d, _ = /* @__PURE__ */ new Map(), v = !0;
  function h(E) {
    (p.effect.f & te) === 0 && (p.pending.delete(E), p.fallback = f, vs(p, d, o, t, r), f !== null && (d.length === 0 ? (f.f & Se) === 0 ? Fn(f) : (f.f ^= Se, yt(f, null, o)) : Je(f, () => {
      f = null;
    })));
  }
  function c(E) {
    p.pending.delete(E);
  }
  var m = On(() => {
    d = /** @type {V[]} */
    y(u);
    for (var E = d.length, A = /* @__PURE__ */ new Set(), P = (
      /** @type {Batch} */
      b
    ), Ae = Ar(), H = 0; H < E; H += 1) {
      var Ne = d[H], Ce = r(Ne, H), D = v ? null : a.get(Ce);
      D ? (D.v && dt(D.v, Ne), D.i && dt(D.i, H), Ae && P.unskip_effect(D.e)) : (D = _s(
        a,
        v ? o : $n ?? ($n = ht()),
        Ne,
        Ce,
        H,
        i,
        t,
        n
      ), v || (D.e.f |= Se), a.set(Ce, D)), A.add(Ce);
    }
    if (E === 0 && s && !f && (v ? f = $(() => s(o)) : (f = $(() => s($n ?? ($n = ht()))), f.f |= Se)), E > A.size && ri(), !v)
      if (_.set(P, A), Ae) {
        for (const [nn, rn] of a)
          A.has(nn) || P.skip_effect(rn.e);
        P.oncommit(h), P.ondiscard(c);
      } else
        h(P);
    y(u);
  }), p = { effect: m, items: a, pending: _, outrogroups: null, fallback: f };
  v = !1;
}
function wt(e) {
  for (; e !== null && (e.f & _e) === 0; )
    e = e.next;
  return e;
}
function vs(e, t, n, r, i) {
  var s = t.length, o = e.items, a = wt(e.effect.first), f, u = null, d = [], _ = [], v, h, c, m;
  for (m = 0; m < s; m += 1) {
    if (v = t[m], h = i(v, m), c = /** @type {EachItem} */
    o.get(h).e, e.outrogroups !== null)
      for (const D of e.outrogroups)
        D.pending.delete(c), D.done.delete(c);
    if ((c.f & q) !== 0 && Fn(c), (c.f & Se) !== 0)
      if (c.f ^= Se, c === a)
        yt(c, null, n);
      else {
        var p = u ? u.next : a;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), Re(e, u, c), Re(e, c, p), yt(c, p, n), u = c, d = [], _ = [], a = wt(u.next);
        continue;
      }
    if (c !== a) {
      if (f !== void 0 && f.has(c)) {
        if (d.length < _.length) {
          var E = _[0], A;
          u = E.prev;
          var P = d[0], Ae = d[d.length - 1];
          for (A = 0; A < d.length; A += 1)
            yt(d[A], E, n);
          for (A = 0; A < _.length; A += 1)
            f.delete(_[A]);
          Re(e, P.prev, Ae.next), Re(e, u, P), Re(e, Ae, E), a = E, u = Ae, m -= 1, d = [], _ = [];
        } else
          f.delete(c), yt(c, a, n), Re(e, c.prev, c.next), Re(e, c, u === null ? e.effect.first : u.next), Re(e, u, c), u = c;
        continue;
      }
      for (d = [], _ = []; a !== null && a !== c; )
        (f ?? (f = /* @__PURE__ */ new Set())).add(a), _.push(a), a = wt(a.next);
      if (a === null)
        continue;
    }
    (c.f & Se) === 0 && d.push(c), u = c, a = wt(c.next);
  }
  if (e.outrogroups !== null) {
    for (const D of e.outrogroups)
      D.pending.size === 0 && (En(e, en(D.done)), e.outrogroups?.delete(D));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || f !== void 0) {
    var H = [];
    if (f !== void 0)
      for (c of f)
        (c.f & q) === 0 && H.push(c);
    for (; a !== null; )
      (a.f & q) === 0 && a !== e.fallback && H.push(a), a = wt(a.next);
    var Ne = H.length;
    if (Ne > 0) {
      var Ce = null;
      ds(e, H, Ce);
    }
  }
}
function _s(e, t, n, r, i, s, o, a) {
  var f = (o & oi) !== 0 ? (o & ci) === 0 ? /* @__PURE__ */ zi(n, !1, !1) : Ze(n) : null, u = (o & ui) !== 0 ? Ze(i) : null;
  return {
    v: f,
    i: u,
    e: $(() => (s(t, f ?? n, u ?? i, a), () => {
      e.delete(r);
    }))
  };
}
function yt(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & Se) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Dt(r)
      );
      if (s.before(r), r === i)
        return;
      r = o;
    }
}
function Re(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function ps(e, t) {
  Ji(() => {
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
      const i = Nr("style");
      i.id = t.hash, i.textContent = t.code, r.appendChild(i);
    }
  });
}
const er = [...` 	
\r\f \v\uFEFF`];
function gs(e, t, n) {
  var r = "" + e;
  if (n) {
    for (var i of Object.keys(n))
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var a = o + s;
          (o === 0 || er.includes(r[o - 1])) && (a === r.length || er.includes(r[a])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(a + 1) : o = a;
        }
  }
  return r === "" ? null : r;
}
function ms(e, t, n, r, i, s) {
  var o = e.__className;
  if (o !== n || o === void 0) {
    var a = gs(n, r, s);
    a == null ? e.removeAttribute("class") : e.className = a, e.__className = n;
  } else if (s && i !== s)
    for (var f in s) {
      var u = !!s[f];
      (i == null || u !== !!i[f]) && e.classList.toggle(f, u);
    }
  return s;
}
function bs(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  Cr(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = cn(e) ? dn(s) : s, n(s), b !== null && r.add(b), await es(), s !== (s = t())) {
      var o = e.selectionStart, a = e.selectionEnd, f = e.value.length;
      if (e.value = s ?? "", a !== null) {
        var u = e.value.length;
        o === a && a === f && u > f ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = o, e.selectionEnd = Math.min(a, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  In(t) == null && e.value && (n(cn(e) ? dn(e.value) : e.value), b !== null && r.add(b)), Rn(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        b
      );
      if (r.has(s))
        return;
    }
    cn(e) && i === dn(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function ws(e, t, n = t) {
  Cr(e, "change", (r) => {
    var i = r ? e.defaultChecked : e.checked;
    n(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  In(t) == null && n(e.checked), Rn(() => {
    var r = t();
    e.checked = !!r;
  });
}
function cn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function dn(e) {
  return e === "" ? null : +e;
}
function Vt(e, t, n, r) {
  var i = (
    /** @type {V} */
    r
  ), s = !0, o = () => (s && (s = !1, i = /** @type {V} */
  r), i), a;
  a = /** @type {V} */
  e[t], a === void 0 && r !== void 0 && (a = o());
  var f;
  return f = () => {
    var u = (
      /** @type {V} */
      e[t]
    );
    return u === void 0 ? o() : (s = !0, u);
  }, f;
}
const ys = "5";
var tr;
typeof window < "u" && ((tr = window.__svelte ?? (window.__svelte = {})).v ?? (tr.v = /* @__PURE__ */ new Set())).add(ys);
var ks = /* @__PURE__ */ Pt('<div class="empty svelte-beco3k">Start a conversation…</div>'), Es = /* @__PURE__ */ Pt('<div><span class="role svelte-beco3k"> </span> <div class="content svelte-beco3k"> </div></div>'), xs = /* @__PURE__ */ Pt('<div class="msg assistant svelte-beco3k"><span class="role svelte-beco3k">Assistant</span> <div class="content typing svelte-beco3k">Thinking…</div></div>'), Ss = /* @__PURE__ */ Pt("<!> <!>", 1), Ts = /* @__PURE__ */ Pt('<div class="rt-chat svelte-beco3k"><div class="header svelte-beco3k"><h2 class="svelte-beco3k">LLM Chat</h2> <span class="badge svelte-beco3k"> </span> <label class="toggle svelte-beco3k"><input type="checkbox" class="svelte-beco3k"/> <span>Include realm context</span></label> <button class="clear svelte-beco3k">Clear</button></div> <div class="messages svelte-beco3k"><!></div> <div class="input-row svelte-beco3k"><textarea placeholder="Type a message… (Enter to send)" rows="2" class="svelte-beco3k"></textarea> <button class="send svelte-beco3k"> </button></div></div>');
const As = {
  hash: "svelte-beco3k",
  code: ".rt-chat.svelte-beco3k {font-family:system-ui, -apple-system, sans-serif;max-width:720px;margin:0 auto;padding:1.5rem;display:flex;flex-direction:column;height:100%;min-height:400px;}.header.svelte-beco3k {display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;flex-wrap:wrap;}.header.svelte-beco3k h2:where(.svelte-beco3k) {margin:0;font-size:1.5rem;}.badge.svelte-beco3k {background:#e0e7ff;color:#3730a3;padding:0.15rem 0.5rem;border-radius:9999px;font-size:0.75rem;}.toggle.svelte-beco3k {display:flex;align-items:center;gap:0.35rem;font-size:0.8rem;color:#6b7280;cursor:pointer;margin-left:auto;}.toggle.svelte-beco3k input:where(.svelte-beco3k) {accent-color:#4f46e5;}.clear.svelte-beco3k {padding:0.25rem 0.5rem;background:#f3f4f6;border:1px solid #d1d5db;border-radius:0.375rem;cursor:pointer;font-size:0.75rem;}.messages.svelte-beco3k {flex:1;overflow-y:auto;border:1px solid #e5e7eb;border-radius:0.75rem;padding:1rem;margin-bottom:1rem;background:#fafafa;min-height:200px;max-height:500px;}.empty.svelte-beco3k {color:#9ca3af;text-align:center;padding:3rem;}.msg.svelte-beco3k {margin-bottom:0.75rem;}.msg.user.svelte-beco3k {text-align:right;}.role.svelte-beco3k {font-size:0.7rem;color:#9ca3af;text-transform:uppercase;letter-spacing:0.05em;}.content.svelte-beco3k {display:inline-block;max-width:80%;padding:0.5rem 0.75rem;border-radius:0.75rem;font-size:0.85rem;line-height:1.5;text-align:left;white-space:pre-wrap;word-break:break-word;}.user.svelte-beco3k .content:where(.svelte-beco3k) {background:#4f46e5;color:#fff;border-bottom-right-radius:0.25rem;}.assistant.svelte-beco3k .content:where(.svelte-beco3k) {background:#fff;border:1px solid #e5e7eb;border-bottom-left-radius:0.25rem;}.typing.svelte-beco3k {color:#9ca3af;font-style:italic;}.input-row.svelte-beco3k {display:flex;gap:0.5rem;}textarea.svelte-beco3k {flex:1;padding:0.5rem 0.75rem;border:1px solid #d1d5db;border-radius:0.5rem;font-size:0.85rem;font-family:inherit;resize:none;}textarea.svelte-beco3k:focus {outline:none;border-color:#6366f1;box-shadow:0 0 0 2px rgba(99,102,241,0.2);}.send.svelte-beco3k {padding:0.5rem 1rem;background:#4f46e5;color:#fff;border:none;border-radius:0.5rem;cursor:pointer;font-size:0.85rem;white-space:nowrap;align-self:flex-end;}.send.svelte-beco3k:hover:not(:disabled) {background:#4338ca;}.send.svelte-beco3k:disabled {opacity:0.5;cursor:not-allowed;}"
};
function Ns(e, t) {
  fr(t, !0), ps(e, As);
  let n = Vt(t, "extensionId", 3, "llm_chat"), r = Vt(t, "version", 3, "");
  Vt(t, "principal", 3, ""), Vt(t, "isAuthenticated", 3, !0);
  let i = /* @__PURE__ */ j(tt([])), s = /* @__PURE__ */ j(""), o = /* @__PURE__ */ j(!1), a = /* @__PURE__ */ j(""), f = /* @__PURE__ */ j(!1), u = /* @__PURE__ */ j(null);
  async function d(S, ie = "{}") {
    const me = await t.backend.extension_async_call(JSON.stringify({ extension_name: n(), function_name: S, args: ie }));
    return JSON.parse(me);
  }
  async function _() {
    try {
      const S = await d("get_realm_data", "{}");
      M(u, S?.data ?? S, !0);
    } catch {
    }
  }
  async function v() {
    const S = y(s).trim();
    if (!(!S || y(o))) {
      M(i, [...y(i), { role: "user", content: S }], !0), M(s, ""), M(o, !0), M(a, "");
      try {
        y(f) && !y(u) && await _();
        const ie = y(f) && y(u) ? JSON.stringify(y(u)) : "", me = await d("chat", JSON.stringify({
          message: S,
          history: y(i).slice(0, -1).map((zt) => ({ role: zt.role, content: zt.content })),
          realm_context: ie || void 0
        })), gt = me?.data?.response ?? me?.response ?? me?.data ?? JSON.stringify(me);
        M(
          i,
          [
            ...y(i),
            {
              role: "assistant",
              content: typeof gt == "string" ? gt : JSON.stringify(gt)
            }
          ],
          !0
        );
      } catch (ie) {
        M(a, ie?.message || String(ie), !0), M(
          i,
          [
            ...y(i),
            { role: "assistant", content: `Error: ${y(a)}` }
          ],
          !0
        );
      } finally {
        M(o, !1);
      }
    }
  }
  function h() {
    M(i, [], !0), M(a, "");
  }
  function c(S) {
    S.key === "Enter" && !S.shiftKey && (S.preventDefault(), v());
  }
  var m = Ts(), p = ue(m), E = Me(ue(p), 2), A = ue(E), P = Me(E, 2), Ae = ue(P), H = Me(P, 2), Ne = Me(p, 2), Ce = ue(Ne);
  {
    var D = (S) => {
      var ie = ks();
      bt(S, ie);
    }, nn = (S) => {
      var ie = Ss(), me = Vi(ie);
      hs(me, 17, () => y(i), cs, (mt, $e) => {
        var ln = Es();
        let zn;
        var Ln = ue(ln), Br = ue(Ln), Yr = Me(Ln, 2), Hr = ue(Yr);
        Kn(() => {
          zn = ms(ln, 1, "msg svelte-beco3k", null, zn, {
            user: y($e).role === "user",
            assistant: y($e).role === "assistant"
          }), Lt(Br, y($e).role === "user" ? "You" : "Assistant"), Lt(Hr, y($e).content);
        }), bt(mt, ln);
      });
      var gt = Me(me, 2);
      {
        var zt = (mt) => {
          var $e = xs();
          bt(mt, $e);
        };
        Qn(gt, (mt) => {
          y(o) && mt(zt);
        });
      }
      bt(S, ie);
    };
    Qn(Ce, (S) => {
      y(i).length === 0 ? S(D) : S(nn, -1);
    });
  }
  var rn = Me(Ne, 2), It = ue(rn), sn = Me(It, 2), jr = ue(sn);
  Kn(
    (S) => {
      Lt(A, `v${r() ?? ""}`), It.disabled = y(o), sn.disabled = S, Lt(jr, y(o) ? "…" : "Send");
    },
    [() => y(o) || !y(s).trim()]
  ), ws(Ae, () => y(f), (S) => M(f, S)), un("click", H, h), un("keydown", It, c), bs(It, () => y(s), (S) => M(s, S)), un("click", sn, v), bt(e, m), ar();
}
rs(["click", "keydown"]);
function Rs(e, t) {
  const n = fs(Ns, { target: e, props: t });
  return {
    unmount() {
      try {
        os(n);
      } catch {
      }
    }
  };
}
export {
  Rs as default
};
