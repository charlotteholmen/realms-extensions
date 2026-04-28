var Jr = Object.defineProperty;
var In = (e) => {
  throw TypeError(e);
};
var Wr = (e, t, n) => t in e ? Jr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var oe = (e, t, n) => Wr(e, typeof t != "symbol" ? t + "" : t, n), rn = (e, t, n) => t.has(e) || In("Cannot " + n);
var l = (e, t, n) => (rn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), p = (e, t, n) => t.has(e) ? In("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), y = (e, t, n, r) => (rn(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), T = (e, t, n) => (rn(e, t, "access private method"), n);
var Wn = Array.isArray, Xr = Array.prototype.indexOf, ht = Array.prototype.includes, Qt = Array.from, Qr = Object.defineProperty, St = Object.getOwnPropertyDescriptor, $r = Object.prototype, ei = Array.prototype, ti = Object.getPrototypeOf, Ln = Object.isExtensible;
const ni = () => {
};
function ri(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Xn() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const P = 2, _t = 4, $t = 8, Qn = 1 << 24, be = 16, he = 32, qe = 64, un = 128, re = 512, C = 1024, D = 2048, ye = 4096, L = 8192, ie = 16384, st = 32768, qn = 1 << 25, pt = 65536, cn = 1 << 17, ii = 1 << 18, bt = 1 << 19, si = 1 << 20, Ne = 1 << 25, nt = 65536, Kt = 1 << 21, zt = 1 << 22, Le = 1 << 23, sn = Symbol("$state"), ke = new class extends Error {
  constructor() {
    super(...arguments);
    oe(this, "name", "StaleReactionError");
    oe(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function li() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function fi(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function ai(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function oi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ui(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ci() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function vi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function di() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function hi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function _i() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const pi = 1, gi = 2, mi = 16, wi = 2, F = Symbol(), bi = "http://www.w3.org/1999/xhtml";
function yi() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ei() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function $n(e) {
  return e === this.v;
}
function xi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function er(e) {
  return !xi(e, this.v);
}
let le = null;
function gt(e) {
  le = e;
}
function tr(e, t = !1, n) {
  le = {
    p: le,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      k
    ),
    l: null
  };
}
function nr(e) {
  var t = (
    /** @type {ComponentContext} */
    le
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      kr(r);
  }
  return t.i = !0, le = t.p, /** @type {T} */
  {};
}
function rr() {
  return !0;
}
let Be = [];
function ir() {
  var e = Be;
  Be = [], ri(e);
}
function at(e) {
  if (Be.length === 0 && !Tt) {
    var t = Be;
    queueMicrotask(() => {
      t === Be && ir();
    });
  }
  Be.push(e);
}
function ki() {
  for (; Be.length > 0; )
    ir();
}
function sr(e) {
  var t = k;
  if (t === null)
    return E.f |= Le, e;
  if ((t.f & st) === 0 && (t.f & _t) === 0)
    throw e;
  Ie(e, t);
}
function Ie(e, t) {
  for (; t !== null; ) {
    if ((t.f & un) !== 0) {
      if ((t.f & st) === 0)
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
const Si = -7169;
function R(e, t) {
  e.f = e.f & Si | t;
}
function En(e) {
  (e.f & re) !== 0 || e.deps === null ? R(e, C) : R(e, ye);
}
function lr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & P) === 0 || (t.f & nt) === 0 || (t.f ^= nt, lr(
        /** @type {Derived} */
        t.deps
      ));
}
function fr(e, t, n) {
  (e.f & D) !== 0 ? t.add(e) : (e.f & ye) !== 0 && n.add(e), lr(e.deps), R(e, C);
}
const Ze = /* @__PURE__ */ new Set();
let m = null, ve = null, vn = null, Tt = !1, ln = !1, lt = null, Vt = null;
var Vn = 0;
let Ti = 1;
var ot, ut, Ke, Se, ge, Rt, K, Mt, De, Te, me, ct, vt, Ge, M, jt, ar, Zt, dn, Ht, Ai;
const Jt = class Jt {
  constructor() {
    p(this, M);
    oe(this, "id", Ti++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    oe(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    oe(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    p(this, ot, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    p(this, ut, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    p(this, Ke, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    p(this, Se, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    p(this, ge, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    p(this, Rt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    p(this, K, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    p(this, Mt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    p(this, De, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    p(this, Te, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    p(this, me, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    p(this, ct, /* @__PURE__ */ new Set());
    oe(this, "is_fork", !1);
    p(this, vt, !1);
    /** @type {Set<Batch>} */
    p(this, Ge, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, me).has(t) || l(this, me).set(t, { d: [], m: [] }), l(this, ct).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = l(this, me).get(t);
    if (r) {
      l(this, me).delete(t);
      for (var i of r.d)
        R(i, D), n(i);
      for (i of r.m)
        R(i, ye), n(i);
    }
    l(this, ct).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== F && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Le) === 0 && (this.current.set(t, [n, r]), ve?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    m = this;
  }
  deactivate() {
    m = null, ve = null;
  }
  flush() {
    try {
      ln = !0, m = this, T(this, M, Zt).call(this);
    } finally {
      Vn = 0, vn = null, lt = null, Vt = null, ln = !1, m = null, ve = null, Qe.clear();
    }
  }
  discard() {
    for (const t of l(this, ut)) t(this);
    l(this, ut).clear(), l(this, Ke).clear(), Ze.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, Mt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    let r = l(this, Se).get(n) ?? 0;
    if (l(this, Se).set(n, r + 1), t) {
      let i = l(this, ge).get(n) ?? 0;
      l(this, ge).set(n, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, r) {
    let i = l(this, Se).get(n) ?? 0;
    if (i === 1 ? l(this, Se).delete(n) : l(this, Se).set(n, i - 1), t) {
      let s = l(this, ge).get(n) ?? 0;
      s === 1 ? l(this, ge).delete(n) : l(this, ge).set(n, s - 1);
    }
    l(this, vt) || r || (y(this, vt, !0), at(() => {
      y(this, vt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      l(this, De).add(r);
    for (const r of n)
      l(this, Te).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, ot).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, ut).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    l(this, Ke).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, Ke)) t(this);
    l(this, Ke).clear();
  }
  settled() {
    return (l(this, Rt) ?? y(this, Rt, Xn())).promise;
  }
  static ensure() {
    if (m === null) {
      const t = m = new Jt();
      ln || (Ze.add(m), Tt || at(() => {
        m === t && t.flush();
      }));
    }
    return m;
  }
  apply() {
    {
      ve = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (vn = t, t.b?.is_pending && (t.f & (_t | $t | Qn)) !== 0 && (t.f & st) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (lt !== null && n === k && (E === null || (E.f & P) === 0))
        return;
      if ((r & (qe | he)) !== 0) {
        if ((r & C) === 0)
          return;
        n.f ^= C;
      }
    }
    l(this, K).push(n);
  }
};
ot = new WeakMap(), ut = new WeakMap(), Ke = new WeakMap(), Se = new WeakMap(), ge = new WeakMap(), Rt = new WeakMap(), K = new WeakMap(), Mt = new WeakMap(), De = new WeakMap(), Te = new WeakMap(), me = new WeakMap(), ct = new WeakMap(), vt = new WeakMap(), Ge = new WeakMap(), M = new WeakSet(), jt = function() {
  return this.is_fork || l(this, ge).size > 0;
}, ar = function() {
  for (const r of l(this, Ge))
    for (const i of l(r, ge).keys()) {
      for (var t = !1, n = i; n.parent !== null; ) {
        if (l(this, me).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, Zt = function() {
  var a;
  if (Vn++ > 1e3 && (Ze.delete(this), Ni()), !T(this, M, jt).call(this)) {
    for (const f of l(this, De))
      l(this, Te).delete(f), R(f, D), this.schedule(f);
    for (const f of l(this, Te))
      R(f, ye), this.schedule(f);
  }
  const t = l(this, K);
  y(this, K, []), this.apply();
  var n = lt = [], r = [], i = Vt = [];
  for (const f of t)
    try {
      T(this, M, dn).call(this, f, n, r);
    } catch (o) {
      throw cr(f), o;
    }
  if (m = null, i.length > 0) {
    var s = Jt.ensure();
    for (const f of i)
      s.schedule(f);
  }
  if (lt = null, Vt = null, T(this, M, jt).call(this) || T(this, M, ar).call(this)) {
    T(this, M, Ht).call(this, r), T(this, M, Ht).call(this, n);
    for (const [f, o] of l(this, me))
      ur(f, o);
  } else {
    l(this, Se).size === 0 && Ze.delete(this), l(this, De).clear(), l(this, Te).clear();
    for (const f of l(this, ot)) f(this);
    l(this, ot).clear(), jn(r), jn(n), l(this, Rt)?.resolve();
  }
  var u = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    m
  );
  if (l(this, K).length > 0) {
    const f = u ?? (u = this);
    l(f, K).push(...l(this, K).filter((o) => !l(f, K).includes(o)));
  }
  u !== null && (Ze.add(u), T(a = u, M, Zt).call(a));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
dn = function(t, n, r) {
  t.f ^= C;
  for (var i = t.first; i !== null; ) {
    var s = i.f, u = (s & (he | qe)) !== 0, a = u && (s & C) !== 0, f = a || (s & L) !== 0 || l(this, me).has(i);
    if (!f && i.fn !== null) {
      u ? i.f ^= C : (s & _t) !== 0 ? n.push(i) : Pt(i) && ((s & be) !== 0 && l(this, Te).add(i), wt(i));
      var o = i.first;
      if (o !== null) {
        i = o;
        continue;
      }
    }
    for (; i !== null; ) {
      var v = i.next;
      if (v !== null) {
        i = v;
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
    fr(t[n], l(this, De), l(this, Te));
}, Ai = function() {
  var v, h, _;
  for (const d of Ze) {
    var t = d.id < this.id, n = [];
    for (const [c, [g, w]] of this.current) {
      if (d.current.has(c)) {
        var r = (
          /** @type {[any, boolean]} */
          d.current.get(c)[0]
        );
        if (t && g !== r)
          d.current.set(c, [g, w]);
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
        for (const c of l(this, ct))
          d.unskip_effect(c, (g) => {
            var w;
            (g.f & (be | zt)) !== 0 ? d.schedule(g) : T(w = d, M, Ht).call(w, [g]);
          });
      d.activate();
      var s = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
      for (var a of n)
        or(a, i, s, u);
      u = /* @__PURE__ */ new Map();
      var f = [...d.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of l(this, Mt))
        (c.f & (ie | L | cn)) === 0 && xn(c, f, u) && ((c.f & (zt | be)) !== 0 ? (R(c, D), d.schedule(c)) : l(d, De).add(c));
      if (l(d, K).length > 0) {
        d.apply();
        for (var o of l(d, K))
          T(v = d, M, dn).call(v, o, [], []);
        y(d, K, []);
      }
      d.deactivate();
    }
  }
  for (const d of Ze)
    l(d, Ge).has(this) && (l(d, Ge).delete(this), l(d, Ge).size === 0 && !T(h = d, M, jt).call(h) && (d.activate(), T(_ = d, M, Zt).call(_)));
};
let rt = Jt;
function zi(e) {
  var t = Tt;
  Tt = !0;
  try {
    for (var n; ; ) {
      if (ki(), m === null)
        return (
          /** @type {T} */
          n
        );
      m.flush();
    }
  } finally {
    Tt = t;
  }
}
function Ni() {
  try {
    ci();
  } catch (e) {
    Ie(e, vn);
  }
}
let xe = null;
function jn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (ie | L)) === 0 && Pt(r) && (xe = /* @__PURE__ */ new Set(), wt(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Ar(r), xe?.size > 0)) {
        Qe.clear();
        for (const i of xe) {
          if ((i.f & (ie | L)) !== 0) continue;
          const s = [i];
          let u = i.parent;
          for (; u !== null; )
            xe.has(u) && (xe.delete(u), s.push(u)), u = u.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const f = s[a];
            (f.f & (ie | L)) === 0 && wt(f);
          }
        }
        xe.clear();
      }
    }
    xe = null;
  }
}
function or(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & P) !== 0 ? or(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (zt | be)) !== 0 && (s & D) === 0 && xn(i, t, r) && (R(i, D), kn(
        /** @type {Effect} */
        i
      ));
    }
}
function xn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (ht.call(t, i))
        return !0;
      if ((i.f & P) !== 0 && xn(
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
function kn(e) {
  m.schedule(e);
}
function ur(e, t) {
  if (!((e.f & he) !== 0 && (e.f & C) !== 0)) {
    (e.f & D) !== 0 ? t.d.push(e) : (e.f & ye) !== 0 && t.m.push(e), R(e, C);
    for (var n = e.first; n !== null; )
      ur(n, t), n = n.next;
  }
}
function cr(e) {
  R(e, C);
  for (var t = e.first; t !== null; )
    cr(t), t = t.next;
}
function Ri(e) {
  let t = 0, n = it(0), r;
  return () => {
    An() && (x(n), Sr(() => (t === 0 && (r = Pr(() => e(() => At(n)))), t += 1, () => {
      at(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, At(n));
      });
    })));
  };
}
var Mi = pt | bt;
function Ci(e, t, n, r) {
  new Fi(e, t, n, r);
}
var $, yn, ee, Je, j, te, I, G, Ae, We, Pe, dt, Ct, Ft, ze, Wt, z, Oi, Di, Pi, hn, Bt, Ut, _n, pn;
class Fi {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    p(this, z);
    /** @type {Boundary | null} */
    oe(this, "parent");
    oe(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    oe(this, "transform_error");
    /** @type {TemplateNode} */
    p(this, $);
    /** @type {TemplateNode | null} */
    p(this, yn, null);
    /** @type {BoundaryProps} */
    p(this, ee);
    /** @type {((anchor: Node) => void)} */
    p(this, Je);
    /** @type {Effect} */
    p(this, j);
    /** @type {Effect | null} */
    p(this, te, null);
    /** @type {Effect | null} */
    p(this, I, null);
    /** @type {Effect | null} */
    p(this, G, null);
    /** @type {DocumentFragment | null} */
    p(this, Ae, null);
    p(this, We, 0);
    p(this, Pe, 0);
    p(this, dt, !1);
    /** @type {Set<Effect>} */
    p(this, Ct, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    p(this, Ft, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    p(this, ze, null);
    p(this, Wt, Ri(() => (y(this, ze, it(l(this, We))), () => {
      y(this, ze, null);
    })));
    y(this, $, t), y(this, ee, n), y(this, Je, (s) => {
      var u = (
        /** @type {Effect} */
        k
      );
      u.b = this, u.f |= un, r(s);
    }), this.parent = /** @type {Effect} */
    k.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), y(this, j, zn(() => {
      T(this, z, hn).call(this);
    }, Mi));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    fr(t, l(this, Ct), l(this, Ft));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, ee).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    T(this, z, _n).call(this, t, n), y(this, We, l(this, We) + t), !(!l(this, ze) || l(this, dt)) && (y(this, dt, !0), at(() => {
      y(this, dt, !1), l(this, ze) && mt(l(this, ze), l(this, We));
    }));
  }
  get_effect_pending() {
    return l(this, Wt).call(this), x(
      /** @type {Source<number>} */
      l(this, ze)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, ee).onerror && !l(this, ee).failed)
      throw t;
    m?.is_fork ? (l(this, te) && m.skip_effect(l(this, te)), l(this, I) && m.skip_effect(l(this, I)), l(this, G) && m.skip_effect(l(this, G)), m.on_fork_commit(() => {
      T(this, z, pn).call(this, t);
    })) : T(this, z, pn).call(this, t);
  }
}
$ = new WeakMap(), yn = new WeakMap(), ee = new WeakMap(), Je = new WeakMap(), j = new WeakMap(), te = new WeakMap(), I = new WeakMap(), G = new WeakMap(), Ae = new WeakMap(), We = new WeakMap(), Pe = new WeakMap(), dt = new WeakMap(), Ct = new WeakMap(), Ft = new WeakMap(), ze = new WeakMap(), Wt = new WeakMap(), z = new WeakSet(), Oi = function() {
  try {
    y(this, te, ne(() => l(this, Je).call(this, l(this, $))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Di = function(t) {
  const n = l(this, ee).failed;
  n && y(this, G, ne(() => {
    n(
      l(this, $),
      () => t,
      () => () => {
      }
    );
  }));
}, Pi = function() {
  const t = l(this, ee).pending;
  t && (this.is_pending = !0, y(this, I, ne(() => t(l(this, $)))), at(() => {
    var n = y(this, Ae, document.createDocumentFragment()), r = $e();
    n.append(r), y(this, te, T(this, z, Ut).call(this, () => ne(() => l(this, Je).call(this, r)))), l(this, Pe) === 0 && (l(this, $).before(n), y(this, Ae, null), et(
      /** @type {Effect} */
      l(this, I),
      () => {
        y(this, I, null);
      }
    ), T(this, z, Bt).call(
      this,
      /** @type {Batch} */
      m
    ));
  }));
}, hn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), y(this, Pe, 0), y(this, We, 0), y(this, te, ne(() => {
      l(this, Je).call(this, l(this, $));
    })), l(this, Pe) > 0) {
      var t = y(this, Ae, document.createDocumentFragment());
      Mn(l(this, te), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        l(this, ee).pending
      );
      y(this, I, ne(() => n(l(this, $))));
    } else
      T(this, z, Bt).call(
        this,
        /** @type {Batch} */
        m
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
Bt = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, Ct), l(this, Ft));
}, /**
 * @template T
 * @param {() => T} fn
 */
Ut = function(t) {
  var n = k, r = E, i = le;
  Ee(l(this, j)), fe(l(this, j)), gt(l(this, j).ctx);
  try {
    return rt.ensure(), t();
  } catch (s) {
    return sr(s), null;
  } finally {
    Ee(n), fe(r), gt(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
_n = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && T(r = this.parent, z, _n).call(r, t, n);
    return;
  }
  y(this, Pe, l(this, Pe) + t), l(this, Pe) === 0 && (T(this, z, Bt).call(this, n), l(this, I) && et(l(this, I), () => {
    y(this, I, null);
  }), l(this, Ae) && (l(this, $).before(l(this, Ae)), y(this, Ae, null)));
}, /**
 * @param {unknown} error
 */
pn = function(t) {
  l(this, te) && (B(l(this, te)), y(this, te, null)), l(this, I) && (B(l(this, I)), y(this, I, null)), l(this, G) && (B(l(this, G)), y(this, G, null));
  var n = l(this, ee).onerror;
  let r = l(this, ee).failed;
  var i = !1, s = !1;
  const u = () => {
    if (i) {
      Ei();
      return;
    }
    i = !0, s && _i(), l(this, G) !== null && et(l(this, G), () => {
      y(this, G, null);
    }), T(this, z, Ut).call(this, () => {
      T(this, z, hn).call(this);
    });
  }, a = (f) => {
    try {
      s = !0, n?.(f, u), s = !1;
    } catch (o) {
      Ie(o, l(this, j) && l(this, j).parent);
    }
    r && y(this, G, T(this, z, Ut).call(this, () => {
      try {
        return ne(() => {
          var o = (
            /** @type {Effect} */
            k
          );
          o.b = this, o.f |= un, r(
            l(this, $),
            () => f,
            () => u
          );
        });
      } catch (o) {
        return Ie(
          o,
          /** @type {Effect} */
          l(this, j).parent
        ), null;
      }
    }));
  };
  at(() => {
    var f;
    try {
      f = this.transform_error(t);
    } catch (o) {
      Ie(o, l(this, j) && l(this, j).parent);
      return;
    }
    f !== null && typeof f == "object" && typeof /** @type {any} */
    f.then == "function" ? f.then(
      a,
      /** @param {unknown} e */
      (o) => Ie(o, l(this, j) && l(this, j).parent)
    ) : a(f);
  });
};
function Ii(e, t, n, r) {
  const i = dr;
  var s = e.filter((_) => !_.settled);
  if (n.length === 0 && s.length === 0) {
    r(t.map(i));
    return;
  }
  var u = (
    /** @type {Effect} */
    k
  ), a = Li(), f = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((_) => _.promise)) : null;
  function o(_) {
    a();
    try {
      r(_);
    } catch (d) {
      (u.f & ie) === 0 && Ie(d, u);
    }
    Gt();
  }
  if (n.length === 0) {
    f.then(() => o(t.map(i)));
    return;
  }
  var v = vr();
  function h() {
    Promise.all(n.map((_) => /* @__PURE__ */ qi(_))).then((_) => o([...t.map(i), ..._])).catch((_) => Ie(_, u)).finally(() => v());
  }
  f ? f.then(() => {
    a(), h(), Gt();
  }) : h();
}
function Li() {
  var e = (
    /** @type {Effect} */
    k
  ), t = E, n = le, r = (
    /** @type {Batch} */
    m
  );
  return function(s = !0) {
    Ee(e), fe(t), gt(n), s && (e.f & ie) === 0 && (r?.activate(), r?.apply());
  };
}
function Gt(e = !0) {
  Ee(null), fe(null), gt(null), e && m?.deactivate();
}
function vr() {
  var e = (
    /** @type {Effect} */
    k
  ), t = (
    /** @type {Boundary} */
    e.b
  ), n = (
    /** @type {Batch} */
    m
  ), r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
    t.update_pending_count(-1, n), n.decrement(r, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function dr(e) {
  var t = P | D;
  return k !== null && (k.f |= bt), {
    ctx: le,
    deps: null,
    effects: null,
    equals: $n,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      F
    ),
    wv: 0,
    parent: k,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function qi(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    k
  );
  r === null && li();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = it(
    /** @type {V} */
    F
  ), u = !E, a = /* @__PURE__ */ new Map();
  return ts(() => {
    var f = (
      /** @type {Effect} */
      k
    ), o = Xn();
    i = o.promise;
    try {
      Promise.resolve(e()).then(o.resolve, o.reject).finally(Gt);
    } catch (d) {
      o.reject(d), Gt();
    }
    var v = (
      /** @type {Batch} */
      m
    );
    if (u) {
      if ((f.f & st) !== 0)
        var h = vr();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        a.get(v)?.reject(ke), a.delete(v);
      else {
        for (const d of a.values())
          d.reject(ke);
        a.clear();
      }
      a.set(v, o);
    }
    const _ = (d, c = void 0) => {
      if (h) {
        var g = c === ke;
        h(g);
      }
      if (!(c === ke || (f.f & ie) !== 0)) {
        if (v.activate(), c)
          s.f |= Le, mt(s, c);
        else {
          (s.f & Le) !== 0 && (s.f ^= Le), mt(s, d);
          for (const [w, A] of a) {
            if (a.delete(w), w === v) break;
            A.reject(ke);
          }
        }
        v.deactivate();
      }
    };
    o.promise.then(_, (d) => _(null, d || "unknown"));
  }), Xi(() => {
    for (const f of a.values())
      f.reject(ke);
  }), new Promise((f) => {
    function o(v) {
      function h() {
        v === i ? f(s) : o(i);
      }
      v.then(h, h);
    }
    o(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Vi(e) {
  const t = /* @__PURE__ */ dr(e);
  return t.equals = er, t;
}
function ji(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      B(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Sn(e) {
  var t, n = k, r = e.parent;
  if (!Ve && r !== null && (r.f & (ie | L)) !== 0)
    return yi(), e.v;
  Ee(r);
  try {
    e.f &= ~nt, ji(e), t = Fr(e);
  } finally {
    Ee(n);
  }
  return t;
}
function hr(e) {
  var t = Sn(e);
  if (!e.equals(t) && (e.wv = Mr(), (!m?.is_fork || e.deps === null) && (m !== null ? m.capture(e, t, !0) : e.v = t, e.deps === null))) {
    R(e, C);
    return;
  }
  Ve || (ve !== null ? (An() || m?.is_fork) && ve.set(e, t) : En(e));
}
function Zi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(ke), t.teardown = ni, t.ac = null, Nt(t, 0), Nn(t));
}
function _r(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && wt(t);
}
let gn = /* @__PURE__ */ new Set();
const Qe = /* @__PURE__ */ new Map();
let pr = !1;
function it(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: $n,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Z(e, t) {
  const n = it(e);
  return is(n), n;
}
// @__NO_SIDE_EFFECTS__
function Hi(e, t = !1, n = !0) {
  const r = it(e);
  return t || (r.equals = er), r;
}
function N(e, t, n = !1) {
  E !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!de || (E.f & cn) !== 0) && rr() && (E.f & (P | be | zt | cn)) !== 0 && (se === null || !ht.call(se, e)) && hi();
  let r = n ? ft(t) : t;
  return mt(e, r, Vt);
}
function mt(e, t, n = null) {
  if (!e.equals(t)) {
    Qe.set(e, Ve ? t : e.v);
    var r = rt.ensure();
    if (r.capture(e, t), (e.f & P) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & D) !== 0 && Sn(i), ve === null && En(i);
    }
    e.wv = Mr(), gr(e, D, n), k !== null && (k.f & C) !== 0 && (k.f & (he | qe)) === 0 && (Q === null ? ss([e]) : Q.push(e)), !r.is_fork && gn.size > 0 && !pr && Bi();
  }
  return t;
}
function Bi() {
  pr = !1;
  for (const e of gn)
    (e.f & C) !== 0 && R(e, ye), Pt(e) && wt(e);
  gn.clear();
}
function At(e) {
  N(e, e.v + 1);
}
function gr(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, s = 0; s < i; s++) {
      var u = r[s], a = u.f, f = (a & D) === 0;
      if (f && R(u, t), (a & P) !== 0) {
        var o = (
          /** @type {Derived} */
          u
        );
        ve?.delete(o), (a & nt) === 0 && (a & re && (k === null || (k.f & Kt) === 0) && (u.f |= nt), gr(o, ye, n));
      } else if (f) {
        var v = (
          /** @type {Effect} */
          u
        );
        (a & be) !== 0 && xe !== null && xe.add(v), n !== null ? n.push(v) : kn(v);
      }
    }
}
function ft(e) {
  if (typeof e != "object" || e === null || sn in e)
    return e;
  const t = ti(e);
  if (t !== $r && t !== ei)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Wn(e), i = /* @__PURE__ */ Z(0), s = tt, u = (a) => {
    if (tt === s)
      return a();
    var f = E, o = tt;
    fe(null), Un(s);
    var v = a();
    return fe(f), Un(o), v;
  };
  return r && n.set("length", /* @__PURE__ */ Z(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, f, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && vi();
        var v = n.get(f);
        return v === void 0 ? u(() => {
          var h = /* @__PURE__ */ Z(o.value);
          return n.set(f, h), h;
        }) : N(v, o.value, !0), !0;
      },
      deleteProperty(a, f) {
        var o = n.get(f);
        if (o === void 0) {
          if (f in a) {
            const v = u(() => /* @__PURE__ */ Z(F));
            n.set(f, v), At(i);
          }
        } else
          N(o, F), At(i);
        return !0;
      },
      get(a, f, o) {
        if (f === sn)
          return e;
        var v = n.get(f), h = f in a;
        if (v === void 0 && (!h || St(a, f)?.writable) && (v = u(() => {
          var d = ft(h ? a[f] : F), c = /* @__PURE__ */ Z(d);
          return c;
        }), n.set(f, v)), v !== void 0) {
          var _ = x(v);
          return _ === F ? void 0 : _;
        }
        return Reflect.get(a, f, o);
      },
      getOwnPropertyDescriptor(a, f) {
        var o = Reflect.getOwnPropertyDescriptor(a, f);
        if (o && "value" in o) {
          var v = n.get(f);
          v && (o.value = x(v));
        } else if (o === void 0) {
          var h = n.get(f), _ = h?.v;
          if (h !== void 0 && _ !== F)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return o;
      },
      has(a, f) {
        if (f === sn)
          return !0;
        var o = n.get(f), v = o !== void 0 && o.v !== F || Reflect.has(a, f);
        if (o !== void 0 || k !== null && (!v || St(a, f)?.writable)) {
          o === void 0 && (o = u(() => {
            var _ = v ? ft(a[f]) : F, d = /* @__PURE__ */ Z(_);
            return d;
          }), n.set(f, o));
          var h = x(o);
          if (h === F)
            return !1;
        }
        return v;
      },
      set(a, f, o, v) {
        var h = n.get(f), _ = f in a;
        if (r && f === "length")
          for (var d = o; d < /** @type {Source<number>} */
          h.v; d += 1) {
            var c = n.get(d + "");
            c !== void 0 ? N(c, F) : d in a && (c = u(() => /* @__PURE__ */ Z(F)), n.set(d + "", c));
          }
        if (h === void 0)
          (!_ || St(a, f)?.writable) && (h = u(() => /* @__PURE__ */ Z(void 0)), N(h, ft(o)), n.set(f, h));
        else {
          _ = h.v !== F;
          var g = u(() => ft(o));
          N(h, g);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, f);
        if (w?.set && w.set.call(v, o), !_) {
          if (r && typeof f == "string") {
            var A = (
              /** @type {Source<number>} */
              n.get("length")
            ), S = Number(f);
            Number.isInteger(S) && S >= A.v && N(A, S + 1);
          }
          At(i);
        }
        return !0;
      },
      ownKeys(a) {
        x(i);
        var f = Reflect.ownKeys(a).filter((h) => {
          var _ = n.get(h);
          return _ === void 0 || _.v !== F;
        });
        for (var [o, v] of n)
          v.v !== F && !(o in a) && f.push(o);
        return f;
      },
      setPrototypeOf() {
        di();
      }
    }
  );
}
var Zn, mr, wr, br;
function Ui() {
  if (Zn === void 0) {
    Zn = window, mr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    wr = St(t, "firstChild").get, br = St(t, "nextSibling").get, Ln(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ln(n) && (n.__t = void 0);
  }
}
function $e(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function yr(e) {
  return (
    /** @type {TemplateNode | null} */
    wr.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function en(e) {
  return (
    /** @type {TemplateNode | null} */
    br.call(e)
  );
}
function V(e, t) {
  return /* @__PURE__ */ yr(e);
}
function ue(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ en(r);
  return r;
}
function Yi(e) {
  e.textContent = "";
}
function Er() {
  return !1;
}
function xr(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(bi, e, void 0)
  );
}
let Hn = !1;
function Ki() {
  Hn || (Hn = !0, document.addEventListener(
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
function Tn(e) {
  var t = E, n = k;
  fe(null), Ee(null);
  try {
    return e();
  } finally {
    fe(t), Ee(n);
  }
}
function Gi(e, t, n, r = n) {
  e.addEventListener(t, () => Tn(n));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), r(!0);
  } : e.__on_r = () => r(!0), Ki();
}
function Ji(e) {
  k === null && (E === null && ui(), oi()), Ve && ai();
}
function Wi(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Re(e, t) {
  var n = k;
  n !== null && (n.f & L) !== 0 && (e |= L);
  var r = {
    ctx: le,
    deps: null,
    nodes: null,
    f: e | D | re,
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
  m?.register_created_effect(r);
  var i = r;
  if ((e & _t) !== 0)
    lt !== null ? lt.push(r) : rt.ensure().schedule(r);
  else if (t !== null) {
    try {
      wt(r);
    } catch (u) {
      throw B(r), u;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & bt) === 0 && (i = i.first, (e & be) !== 0 && (e & pt) !== 0 && i !== null && (i.f |= pt));
  }
  if (i !== null && (i.parent = n, n !== null && Wi(i, n), E !== null && (E.f & P) !== 0 && (e & qe) === 0)) {
    var s = (
      /** @type {Derived} */
      E
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return r;
}
function An() {
  return E !== null && !de;
}
function Xi(e) {
  const t = Re($t, null);
  return R(t, C), t.teardown = e, t;
}
function Qi(e) {
  Ji();
  var t = (
    /** @type {Effect} */
    k.f
  ), n = !E && (t & he) !== 0 && (t & st) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      le
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return kr(e);
}
function kr(e) {
  return Re(_t | si, e);
}
function $i(e) {
  rt.ensure();
  const t = Re(qe | bt, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? et(t, () => {
      B(t), r(void 0);
    }) : (B(t), r(void 0));
  });
}
function es(e) {
  return Re(_t, e);
}
function ts(e) {
  return Re(zt | bt, e);
}
function Sr(e, t = 0) {
  return Re($t | t, e);
}
function Et(e, t = [], n = [], r = []) {
  Ii(r, t, n, (i) => {
    Re($t, () => e(...i.map(x)));
  });
}
function zn(e, t = 0) {
  var n = Re(be | t, e);
  return n;
}
function ne(e) {
  return Re(he | bt, e);
}
function Tr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ve, r = E;
    Bn(!0), fe(null);
    try {
      t.call(null);
    } finally {
      Bn(n), fe(r);
    }
  }
}
function Nn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Tn(() => {
      i.abort(ke);
    });
    var r = n.next;
    (n.f & qe) !== 0 ? n.parent = null : B(n, t), n = r;
  }
}
function ns(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & he) === 0 && B(t), t = n;
  }
}
function B(e, t = !0) {
  var n = !1;
  (t || (e.f & ii) !== 0) && e.nodes !== null && e.nodes.end !== null && (rs(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), R(e, qn), Nn(e, t && !n), Nt(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  Tr(e), e.f ^= qn, e.f |= ie;
  var i = e.parent;
  i !== null && i.first !== null && Ar(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function rs(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ en(e);
    e.remove(), e = n;
  }
}
function Ar(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function et(e, t, n = !0) {
  var r = [];
  zr(e, r, !0);
  var i = () => {
    n && B(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var u = () => --s || i();
    for (var a of r)
      a.out(u);
  } else
    i();
}
function zr(e, t, n) {
  if ((e.f & L) === 0) {
    e.f ^= L;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & qe) === 0) {
        var u = (i.f & pt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & he) !== 0 && (e.f & be) !== 0;
        zr(i, t, u ? n : !1);
      }
      i = s;
    }
  }
}
function Rn(e) {
  Nr(e, !0);
}
function Nr(e, t) {
  if ((e.f & L) !== 0) {
    e.f ^= L, (e.f & C) === 0 && (R(e, D), rt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & pt) !== 0 || (n.f & he) !== 0;
      Nr(n, i ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const u of s)
        (u.is_global || t) && u.in();
  }
}
function Mn(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ en(n);
      t.append(n), n = i;
    }
}
let Yt = !1, Ve = !1;
function Bn(e) {
  Ve = e;
}
let E = null, de = !1;
function fe(e) {
  E = e;
}
let k = null;
function Ee(e) {
  k = e;
}
let se = null;
function is(e) {
  E !== null && (se === null ? se = [e] : se.push(e));
}
let H = null, Y = 0, Q = null;
function ss(e) {
  Q = e;
}
let Rr = 1, Ue = 0, tt = Ue;
function Un(e) {
  tt = e;
}
function Mr() {
  return ++Rr;
}
function Pt(e) {
  var t = e.f;
  if ((t & D) !== 0)
    return !0;
  if (t & P && (e.f &= ~nt), (t & ye) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Pt(
        /** @type {Derived} */
        s
      ) && hr(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & re) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ve === null && R(e, C);
  }
  return !1;
}
function Cr(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(se !== null && ht.call(se, e)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & P) !== 0 ? Cr(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? R(s, D) : (s.f & C) !== 0 && R(s, ye), kn(
        /** @type {Effect} */
        s
      ));
    }
}
function Fr(e) {
  var g;
  var t = H, n = Y, r = Q, i = E, s = se, u = le, a = de, f = tt, o = e.f;
  H = /** @type {null | Value[]} */
  null, Y = 0, Q = null, E = (o & (he | qe)) === 0 ? e : null, se = null, gt(e.ctx), de = !1, tt = ++Ue, e.ac !== null && (Tn(() => {
    e.ac.abort(ke);
  }), e.ac = null);
  try {
    e.f |= Kt;
    var v = (
      /** @type {Function} */
      e.fn
    ), h = v();
    e.f |= st;
    var _ = e.deps, d = m?.is_fork;
    if (H !== null) {
      var c;
      if (d || Nt(e, Y), _ !== null && Y > 0)
        for (_.length = Y + H.length, c = 0; c < H.length; c++)
          _[Y + c] = H[c];
      else
        e.deps = _ = H;
      if (An() && (e.f & re) !== 0)
        for (c = Y; c < _.length; c++)
          ((g = _[c]).reactions ?? (g.reactions = [])).push(e);
    } else !d && _ !== null && Y < _.length && (Nt(e, Y), _.length = Y);
    if (rr() && Q !== null && !de && _ !== null && (e.f & (P | ye | D)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      Q.length; c++)
        Cr(
          Q[c],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Ue++, i.deps !== null)
        for (let w = 0; w < n; w += 1)
          i.deps[w].rv = Ue;
      if (t !== null)
        for (const w of t)
          w.rv = Ue;
      Q !== null && (r === null ? r = Q : r.push(.../** @type {Source[]} */
      Q));
    }
    return (e.f & Le) !== 0 && (e.f ^= Le), h;
  } catch (w) {
    return sr(w);
  } finally {
    e.f ^= Kt, H = t, Y = n, Q = r, E = i, se = s, gt(u), de = a, tt = f;
  }
}
function ls(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Xr.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & P) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (H === null || !ht.call(H, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & re) !== 0 && (s.f ^= re, s.f &= ~nt), s.v !== F && En(s), Zi(s), Nt(s, 0);
  }
}
function Nt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      ls(e, n[r]);
}
function wt(e) {
  var t = e.f;
  if ((t & ie) === 0) {
    R(e, C);
    var n = k, r = Yt;
    k = e, Yt = !0;
    try {
      (t & (be | Qn)) !== 0 ? ns(e) : Nn(e), Tr(e);
      var i = Fr(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Rr;
      var s;
    } finally {
      Yt = r, k = n;
    }
  }
}
async function fs() {
  await Promise.resolve(), zi();
}
function x(e) {
  var t = e.f, n = (t & P) !== 0;
  if (E !== null && !de) {
    var r = k !== null && (k.f & ie) !== 0;
    if (!r && (se === null || !ht.call(se, e))) {
      var i = E.deps;
      if ((E.f & Kt) !== 0)
        e.rv < Ue && (e.rv = Ue, H === null && i !== null && i[Y] === e ? Y++ : H === null ? H = [e] : H.push(e));
      else {
        (E.deps ?? (E.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [E] : ht.call(s, E) || s.push(E);
      }
    }
  }
  if (Ve && Qe.has(e))
    return Qe.get(e);
  if (n) {
    var u = (
      /** @type {Derived} */
      e
    );
    if (Ve) {
      var a = u.v;
      return ((u.f & C) === 0 && u.reactions !== null || Dr(u)) && (a = Sn(u)), Qe.set(u, a), a;
    }
    var f = (u.f & re) === 0 && !de && E !== null && (Yt || (E.f & re) !== 0), o = (u.f & st) === 0;
    Pt(u) && (f && (u.f |= re), hr(u)), f && !o && (_r(u), Or(u));
  }
  if (ve?.has(e))
    return ve.get(e);
  if ((e.f & Le) !== 0)
    throw e.v;
  return e.v;
}
function Or(e) {
  if (e.f |= re, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & P) !== 0 && (t.f & re) === 0 && (_r(
        /** @type {Derived} */
        t
      ), Or(
        /** @type {Derived} */
        t
      ));
}
function Dr(e) {
  if (e.v === F) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Qe.has(t) || (t.f & P) !== 0 && Dr(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Pr(e) {
  var t = de;
  try {
    return de = !0, e();
  } finally {
    de = t;
  }
}
const as = ["touchstart", "touchmove"];
function os(e) {
  return as.includes(e);
}
const Ye = Symbol("events"), Ir = /* @__PURE__ */ new Set(), mn = /* @__PURE__ */ new Set();
function fn(e, t, n) {
  (t[Ye] ?? (t[Ye] = {}))[e] = n;
}
function us(e) {
  for (var t = 0; t < e.length; t++)
    Ir.add(e[t]);
  for (var n of mn)
    n(e);
}
let Yn = null;
function Kn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Yn = e;
  var u = 0, a = Yn === e && e[Ye];
  if (a) {
    var f = i.indexOf(a);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Ye] = t;
      return;
    }
    var o = i.indexOf(t);
    if (o === -1)
      return;
    f <= o && (u = f);
  }
  if (s = /** @type {Element} */
  i[u] || e.target, s !== t) {
    Qr(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var v = E, h = k;
    fe(null), Ee(null);
    try {
      for (var _, d = []; s !== null; ) {
        var c = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var g = s[Ye]?.[r];
          g != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && g.call(s, e);
        } catch (w) {
          _ ? d.push(w) : _ = w;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        s = c;
      }
      if (_) {
        for (let w of d)
          queueMicrotask(() => {
            throw w;
          });
        throw _;
      }
    } finally {
      e[Ye] = t, delete e.currentTarget, fe(v), Ee(h);
    }
  }
}
const cs = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function vs(e) {
  return (
    /** @type {string} */
    cs?.createHTML(e) ?? e
  );
}
function ds(e) {
  var t = xr("template");
  return t.innerHTML = vs(e.replaceAll("<!>", "<!---->")), t.content;
}
function hs(e, t) {
  var n = (
    /** @type {Effect} */
    k
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function je(e, t) {
  var n = (t & wi) !== 0, r, i = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = ds(i ? e : "<!>" + e), r = /** @type {TemplateNode} */
    /* @__PURE__ */ yr(r));
    var s = (
      /** @type {TemplateNode} */
      n || mr ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return hs(s, s), s;
  };
}
function Fe(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function He(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function _s(e, t) {
  return ps(e, t);
}
const It = /* @__PURE__ */ new Map();
function ps(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: u = !0, transformError: a }) {
  Ui();
  var f = void 0, o = $i(() => {
    var v = n ?? t.appendChild($e());
    Ci(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (d) => {
        tr({});
        var c = (
          /** @type {ComponentContext} */
          le
        );
        s && (c.c = s), i && (r.$$events = i), f = e(d, r) || {}, nr();
      },
      a
    );
    var h = /* @__PURE__ */ new Set(), _ = (d) => {
      for (var c = 0; c < d.length; c++) {
        var g = d[c];
        if (!h.has(g)) {
          h.add(g);
          var w = os(g);
          for (const q of [t, document]) {
            var A = It.get(q);
            A === void 0 && (A = /* @__PURE__ */ new Map(), It.set(q, A));
            var S = A.get(g);
            S === void 0 ? (q.addEventListener(g, Kn, { passive: w }), A.set(g, 1)) : A.set(g, S + 1);
          }
        }
      }
    };
    return _(Qt(Ir)), mn.add(_), () => {
      for (var d of h)
        for (const w of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            It.get(w)
          ), g = (
            /** @type {number} */
            c.get(d)
          );
          --g == 0 ? (w.removeEventListener(d, Kn), c.delete(d), c.size === 0 && It.delete(w)) : c.set(d, g);
        }
      mn.delete(_), v !== n && v.parentNode?.removeChild(v);
    };
  });
  return wn.set(f, o), f;
}
let wn = /* @__PURE__ */ new WeakMap();
function gs(e, t) {
  const n = wn.get(e);
  return n ? (wn.delete(e), n(t)) : Promise.resolve();
}
var ce, we, J, Xe, Ot, Dt, Xt;
class ms {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    oe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    p(this, ce, /* @__PURE__ */ new Map());
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
    p(this, we, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    p(this, J, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    p(this, Xe, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    p(this, Ot, !0);
    /**
     * @param {Batch} batch
     */
    p(this, Dt, (t) => {
      if (l(this, ce).has(t)) {
        var n = (
          /** @type {Key} */
          l(this, ce).get(t)
        ), r = l(this, we).get(n);
        if (r)
          Rn(r), l(this, Xe).delete(n);
        else {
          var i = l(this, J).get(n);
          i && (l(this, we).set(n, i.effect), l(this, J).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, u] of l(this, ce)) {
          if (l(this, ce).delete(s), s === t)
            break;
          const a = l(this, J).get(u);
          a && (B(a.effect), l(this, J).delete(u));
        }
        for (const [s, u] of l(this, we)) {
          if (s === n || l(this, Xe).has(s)) continue;
          const a = () => {
            if (Array.from(l(this, ce).values()).includes(s)) {
              var o = document.createDocumentFragment();
              Mn(u, o), o.append($e()), l(this, J).set(s, { effect: u, fragment: o });
            } else
              B(u);
            l(this, Xe).delete(s), l(this, we).delete(s);
          };
          l(this, Ot) || !r ? (l(this, Xe).add(s), et(u, a, !1)) : a();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    p(this, Xt, (t) => {
      l(this, ce).delete(t);
      const n = Array.from(l(this, ce).values());
      for (const [r, i] of l(this, J))
        n.includes(r) || (B(i.effect), l(this, J).delete(r));
    });
    this.anchor = t, y(this, Ot, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      m
    ), i = Er();
    if (n && !l(this, we).has(t) && !l(this, J).has(t))
      if (i) {
        var s = document.createDocumentFragment(), u = $e();
        s.append(u), l(this, J).set(t, {
          effect: ne(() => n(u)),
          fragment: s
        });
      } else
        l(this, we).set(
          t,
          ne(() => n(this.anchor))
        );
    if (l(this, ce).set(r, t), i) {
      for (const [a, f] of l(this, we))
        a === t ? r.unskip_effect(f) : r.skip_effect(f);
      for (const [a, f] of l(this, J))
        a === t ? r.unskip_effect(f.effect) : r.skip_effect(f.effect);
      r.oncommit(l(this, Dt)), r.ondiscard(l(this, Xt));
    } else
      l(this, Dt).call(this, r);
  }
}
ce = new WeakMap(), we = new WeakMap(), J = new WeakMap(), Xe = new WeakMap(), Ot = new WeakMap(), Dt = new WeakMap(), Xt = new WeakMap();
function Lt(e, t, n = !1) {
  var r = new ms(e), i = n ? pt : 0;
  function s(u, a) {
    r.ensure(u, a);
  }
  zn(() => {
    var u = !1;
    t((a, f = 0) => {
      u = !0, s(f, a);
    }), u || s(-1, null);
  }, i);
}
function ws(e, t, n) {
  for (var r = [], i = t.length, s, u = t.length, a = 0; a < i; a++) {
    let h = t[a];
    et(
      h,
      () => {
        if (s) {
          if (s.pending.delete(h), s.done.add(h), s.pending.size === 0) {
            var _ = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            bn(e, Qt(s.done)), _.delete(s), _.size === 0 && (e.outrogroups = null);
          }
        } else
          u -= 1;
      },
      !1
    );
  }
  if (u === 0) {
    var f = r.length === 0 && n !== null;
    if (f) {
      var o = (
        /** @type {Element} */
        n
      ), v = (
        /** @type {Element} */
        o.parentNode
      );
      Yi(v), v.append(o), e.items.clear();
    }
    bn(e, t, !f);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function bn(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const u of e.pending.values())
      for (const a of u)
        r.add(
          /** @type {EachItem} */
          e.items.get(a).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (r?.has(s)) {
      s.f |= Ne;
      const u = document.createDocumentFragment();
      Mn(s, u);
    } else
      B(t[i], n);
  }
}
var Gn;
function bs(e, t, n, r, i, s = null) {
  var u = e, a = /* @__PURE__ */ new Map();
  {
    var f = (
      /** @type {Element} */
      e
    );
    u = f.appendChild($e());
  }
  var o = null, v = /* @__PURE__ */ Vi(() => {
    var S = n();
    return Wn(S) ? S : S == null ? [] : Qt(S);
  }), h, _ = /* @__PURE__ */ new Map(), d = !0;
  function c(S) {
    (A.effect.f & ie) === 0 && (A.pending.delete(S), A.fallback = o, ys(A, h, u, t, r), o !== null && (h.length === 0 ? (o.f & Ne) === 0 ? Rn(o) : (o.f ^= Ne, kt(o, null, u)) : et(o, () => {
      o = null;
    })));
  }
  function g(S) {
    A.pending.delete(S);
  }
  var w = zn(() => {
    h = /** @type {V[]} */
    x(v);
    for (var S = h.length, q = /* @__PURE__ */ new Set(), W = (
      /** @type {Batch} */
      m
    ), _e = Er(), pe = 0; pe < S; pe += 1) {
      var Me = h[pe], U = r(Me, pe), X = d ? null : a.get(U);
      X ? (X.v && mt(X.v, Me), X.i && mt(X.i, pe), _e && W.unskip_effect(X.e)) : (X = Es(
        a,
        d ? u : Gn ?? (Gn = $e()),
        Me,
        U,
        pe,
        i,
        t,
        n
      ), d || (X.e.f |= Ne), a.set(U, X)), q.add(U);
    }
    if (S === 0 && s && !o && (d ? o = ne(() => s(u)) : (o = ne(() => s(Gn ?? (Gn = $e()))), o.f |= Ne)), S > q.size && fi(), !d)
      if (_.set(W, q), _e) {
        for (const [yt, tn] of a)
          q.has(yt) || W.skip_effect(tn.e);
        W.oncommit(c), W.ondiscard(g);
      } else
        c(W);
    x(v);
  }), A = { effect: w, items: a, pending: _, outrogroups: null, fallback: o };
  d = !1;
}
function xt(e) {
  for (; e !== null && (e.f & he) === 0; )
    e = e.next;
  return e;
}
function ys(e, t, n, r, i) {
  var s = t.length, u = e.items, a = xt(e.effect.first), f, o = null, v = [], h = [], _, d, c, g;
  for (g = 0; g < s; g += 1) {
    if (_ = t[g], d = i(_, g), c = /** @type {EachItem} */
    u.get(d).e, e.outrogroups !== null)
      for (const U of e.outrogroups)
        U.pending.delete(c), U.done.delete(c);
    if ((c.f & L) !== 0 && Rn(c), (c.f & Ne) !== 0)
      if (c.f ^= Ne, c === a)
        kt(c, null, n);
      else {
        var w = o ? o.next : a;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), Oe(e, o, c), Oe(e, c, w), kt(c, w, n), o = c, v = [], h = [], a = xt(o.next);
        continue;
      }
    if (c !== a) {
      if (f !== void 0 && f.has(c)) {
        if (v.length < h.length) {
          var A = h[0], S;
          o = A.prev;
          var q = v[0], W = v[v.length - 1];
          for (S = 0; S < v.length; S += 1)
            kt(v[S], A, n);
          for (S = 0; S < h.length; S += 1)
            f.delete(h[S]);
          Oe(e, q.prev, W.next), Oe(e, o, q), Oe(e, W, A), a = A, o = W, g -= 1, v = [], h = [];
        } else
          f.delete(c), kt(c, a, n), Oe(e, c.prev, c.next), Oe(e, c, o === null ? e.effect.first : o.next), Oe(e, o, c), o = c;
        continue;
      }
      for (v = [], h = []; a !== null && a !== c; )
        (f ?? (f = /* @__PURE__ */ new Set())).add(a), h.push(a), a = xt(a.next);
      if (a === null)
        continue;
    }
    (c.f & Ne) === 0 && v.push(c), o = c, a = xt(c.next);
  }
  if (e.outrogroups !== null) {
    for (const U of e.outrogroups)
      U.pending.size === 0 && (bn(e, Qt(U.done)), e.outrogroups?.delete(U));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || f !== void 0) {
    var _e = [];
    if (f !== void 0)
      for (c of f)
        (c.f & L) === 0 && _e.push(c);
    for (; a !== null; )
      (a.f & L) === 0 && a !== e.fallback && _e.push(a), a = xt(a.next);
    var pe = _e.length;
    if (pe > 0) {
      var Me = s === 0 ? n : null;
      ws(e, _e, Me);
    }
  }
}
function Es(e, t, n, r, i, s, u, a) {
  var f = (u & pi) !== 0 ? (u & mi) === 0 ? /* @__PURE__ */ Hi(n, !1, !1) : it(n) : null, o = (u & gi) !== 0 ? it(i) : null;
  return {
    v: f,
    i: o,
    e: ne(() => (s(t, f ?? n, o ?? i, a), () => {
      e.delete(r);
    }))
  };
}
function kt(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & Ne) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ en(r)
      );
      if (s.before(r), r === i)
        return;
      r = u;
    }
}
function Oe(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function xs(e, t) {
  es(() => {
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
      const i = xr("style");
      i.id = t.hash, i.textContent = t.code, r.appendChild(i);
    }
  });
}
function ks(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  Gi(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = an(e) ? on(s) : s, n(s), m !== null && r.add(m), await fs(), s !== (s = t())) {
      var u = e.selectionStart, a = e.selectionEnd, f = e.value.length;
      if (e.value = s ?? "", a !== null) {
        var o = e.value.length;
        u === a && a === f && o > f ? (e.selectionStart = o, e.selectionEnd = o) : (e.selectionStart = u, e.selectionEnd = Math.min(a, o));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Pr(t) == null && e.value && (n(an(e) ? on(e.value) : e.value), m !== null && r.add(m)), Sr(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        m
      );
      if (r.has(s))
        return;
    }
    an(e) && i === on(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function an(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function on(e) {
  return e === "" ? null : +e;
}
function qt(e, t, n, r) {
  var i = (
    /** @type {V} */
    r
  ), s = !0, u = () => (s && (s = !1, i = /** @type {V} */
  r), i), a;
  a = /** @type {V} */
  e[t], a === void 0 && r !== void 0 && (a = u());
  var f;
  return f = () => {
    var o = (
      /** @type {V} */
      e[t]
    );
    return o === void 0 ? u() : (s = !0, o);
  }, f;
}
const Ss = "5";
var Jn;
typeof window < "u" && ((Jn = window.__svelte ?? (window.__svelte = {})).v ?? (Jn.v = /* @__PURE__ */ new Set())).add(Ss);
var Ts = /* @__PURE__ */ je('<div class="error svelte-1vwflcc"> </div>'), As = /* @__PURE__ */ je('<div class="success svelte-1vwflcc"> </div>'), zs = /* @__PURE__ */ je('<div class="empty svelte-1vwflcc">Loading zones…</div>'), Ns = /* @__PURE__ */ je('<div class="empty svelte-1vwflcc">No zones selected</div>'), Rs = /* @__PURE__ */ je('<span class="zone-name svelte-1vwflcc"> </span>'), Ms = /* @__PURE__ */ je('<div class="zone-item svelte-1vwflcc"><div class="zone-info svelte-1vwflcc"><span class="zone-id mono svelte-1vwflcc"> </span> <!></div> <button class="remove svelte-1vwflcc">Remove</button></div>'), Cs = /* @__PURE__ */ je('<div class="zone-list svelte-1vwflcc"></div>'), Fs = /* @__PURE__ */ je('<div class="rt-zs svelte-1vwflcc"><div class="header svelte-1vwflcc"><h2 class="svelte-1vwflcc">Zone Selector</h2> <span class="badge svelte-1vwflcc"> </span> <button class="refresh svelte-1vwflcc">↻</button></div> <!> <!> <div class="card svelte-1vwflcc"><h3 class="svelte-1vwflcc">Add Zone</h3> <div class="row svelte-1vwflcc"><input type="text" placeholder="H3 index or zone ID" class="svelte-1vwflcc"/> <button class="primary svelte-1vwflcc"> </button></div> <p class="hint svelte-1vwflcc">Enter an H3 hex index to select a geographic zone.</p></div> <div class="section svelte-1vwflcc"><h3 class="svelte-1vwflcc"> </h3> <!></div></div>');
const Os = {
  hash: "svelte-1vwflcc",
  code: ".rt-zs.svelte-1vwflcc {font-family:system-ui, -apple-system, sans-serif;max-width:640px;margin:0 auto;padding:1.5rem;}.header.svelte-1vwflcc {display:flex;align-items:center;gap:0.75rem;margin-bottom:1.5rem;flex-wrap:wrap;}.header.svelte-1vwflcc h2:where(.svelte-1vwflcc) {margin:0;font-size:1.5rem;}.badge.svelte-1vwflcc {background:#e0e7ff;color:#3730a3;padding:0.15rem 0.5rem;border-radius:9999px;font-size:0.75rem;}.refresh.svelte-1vwflcc {margin-left:auto;padding:0.35rem 0.75rem;background:#f3f4f6;border:1px solid #d1d5db;border-radius:0.5rem;cursor:pointer;font-size:0.8rem;}.error.svelte-1vwflcc {background:#fef2f2;color:#991b1b;border:1px solid #fecaca;padding:0.75rem;border-radius:0.5rem;margin-bottom:1rem;}.success.svelte-1vwflcc {background:#ecfdf5;color:#065f46;border:1px solid #a7f3d0;padding:0.75rem;border-radius:0.5rem;margin-bottom:1rem;}.card.svelte-1vwflcc {background:#fff;border:1px solid #e5e7eb;border-radius:0.75rem;padding:1.25rem;margin-bottom:1.5rem;}.card.svelte-1vwflcc h3:where(.svelte-1vwflcc) {margin:0 0 0.75rem;font-size:1rem;}.row.svelte-1vwflcc {display:flex;gap:0.5rem;}input.svelte-1vwflcc {flex:1;padding:0.5rem 0.75rem;border:1px solid #d1d5db;border-radius:0.5rem;font-size:0.85rem;font-family:ui-monospace, monospace;}.primary.svelte-1vwflcc {padding:0.5rem 1rem;background:#4f46e5;color:#fff;border:none;border-radius:0.5rem;cursor:pointer;font-size:0.85rem;white-space:nowrap;}.primary.svelte-1vwflcc:hover:not(:disabled) {background:#4338ca;}.primary.svelte-1vwflcc:disabled {opacity:0.5;cursor:not-allowed;}.hint.svelte-1vwflcc {margin:0.5rem 0 0;font-size:0.75rem;color:#9ca3af;}.section.svelte-1vwflcc h3:where(.svelte-1vwflcc) {margin:0 0 0.75rem;font-size:1rem;}.empty.svelte-1vwflcc {color:#6b7280;text-align:center;padding:1.5rem;}.zone-list.svelte-1vwflcc {display:flex;flex-direction:column;gap:0.4rem;}.zone-item.svelte-1vwflcc {display:flex;align-items:center;justify-content:space-between;background:#fff;border:1px solid #e5e7eb;border-radius:0.5rem;padding:0.6rem 0.75rem;}.zone-info.svelte-1vwflcc {display:flex;flex-direction:column;gap:0.15rem;}.zone-id.svelte-1vwflcc {font-size:0.8rem;}.zone-name.svelte-1vwflcc {font-size:0.75rem;color:#6b7280;}.mono.svelte-1vwflcc {font-family:ui-monospace, monospace;}.remove.svelte-1vwflcc {background:none;border:none;color:#dc2626;cursor:pointer;font-size:0.8rem;}.remove.svelte-1vwflcc:hover {text-decoration:underline;}"
};
function Ds(e, t) {
  tr(t, !0), xs(e, Os);
  let n = qt(t, "extensionId", 3, "zone_selector"), r = qt(t, "version", 3, "");
  qt(t, "principal", 3, ""), qt(t, "isAuthenticated", 3, !0);
  let i = /* @__PURE__ */ Z(ft([])), s = /* @__PURE__ */ Z(!0), u = /* @__PURE__ */ Z(""), a = /* @__PURE__ */ Z(!1), f = /* @__PURE__ */ Z(""), o = /* @__PURE__ */ Z("");
  async function v(b, O = "{}") {
    const ae = await t.backend.extension_sync_call(JSON.stringify({ extension_name: n(), function_name: b, args: O }));
    return JSON.parse(ae);
  }
  async function h() {
    N(s, !0), N(u, "");
    try {
      const b = await v("get_my_zones", "{}");
      N(i, b?.data ?? (Array.isArray(b) ? b : []), !0);
    } catch (b) {
      N(u, b?.message || String(b), !0);
    } finally {
      N(s, !1);
    }
  }
  async function _() {
    if (x(f).trim()) {
      N(a, !0), N(u, ""), N(o, "");
      try {
        await v("add_zone", JSON.stringify({ zone_id: x(f), h3_index: x(f) })), N(o, `Zone ${x(f)} added!`), N(f, ""), await h();
      } catch (b) {
        N(u, b?.message || String(b), !0);
      } finally {
        N(a, !1);
      }
    }
  }
  async function d(b) {
    if (confirm(`Remove zone ${b}?`))
      try {
        await v("remove_zone", JSON.stringify({ zone_id: b })), await h();
      } catch (O) {
        N(u, O?.message || String(O), !0);
      }
  }
  Qi(() => {
    h();
  });
  var c = Fs(), g = V(c), w = ue(V(g), 2), A = V(w), S = ue(w, 2), q = ue(g, 2);
  {
    var W = (b) => {
      var O = Ts(), ae = V(O);
      Et(() => He(ae, x(u))), Fe(b, O);
    };
    Lt(q, (b) => {
      x(u) && b(W);
    });
  }
  var _e = ue(q, 2);
  {
    var pe = (b) => {
      var O = As(), ae = V(O);
      Et(() => He(ae, x(o))), Fe(b, O);
    };
    Lt(_e, (b) => {
      x(o) && b(pe);
    });
  }
  var Me = ue(_e, 2), U = ue(V(Me), 2), X = V(U), yt = ue(X, 2), tn = V(yt), Lr = ue(Me, 2), Cn = V(Lr), qr = V(Cn), Vr = ue(Cn, 2);
  {
    var jr = (b) => {
      var O = zs();
      Fe(b, O);
    }, Zr = (b) => {
      var O = Ns();
      Fe(b, O);
    }, Hr = (b) => {
      var O = Cs();
      bs(O, 21, () => x(i), (ae) => ae.id || ae.h3_index || ae.zone_id, (ae, Ce) => {
        var Fn = Ms(), On = V(Fn), Dn = V(On), Br = V(Dn), Ur = ue(Dn, 2);
        {
          var Yr = (nn) => {
            var Pn = Rs(), Gr = V(Pn);
            Et(() => He(Gr, x(Ce).name)), Fe(nn, Pn);
          };
          Lt(Ur, (nn) => {
            x(Ce).name && nn(Yr);
          });
        }
        var Kr = ue(On, 2);
        Et(() => He(Br, x(Ce).h3_index || x(Ce).zone_id || x(Ce).id)), fn("click", Kr, () => d(x(Ce).id || x(Ce).zone_id || x(Ce).h3_index)), Fe(ae, Fn);
      }), Fe(b, O);
    };
    Lt(Vr, (b) => {
      x(s) ? b(jr) : x(i).length === 0 ? b(Zr, 1) : b(Hr, -1);
    });
  }
  Et(
    (b) => {
      He(A, `v${r() ?? ""}`), S.disabled = x(s), yt.disabled = b, He(tn, x(a) ? "Adding…" : "Add Zone"), He(qr, `My Zones (${x(i).length ?? ""})`);
    },
    [() => x(a) || !x(f).trim()]
  ), fn("click", S, h), ks(X, () => x(f), (b) => N(f, b)), fn("click", yt, _), Fe(e, c), nr();
}
us(["click"]);
function Ls(e, t) {
  const n = _s(Ds, { target: e, props: t });
  return {
    unmount() {
      try {
        gs(n);
      } catch {
      }
    }
  };
}
export {
  Ls as default
};
