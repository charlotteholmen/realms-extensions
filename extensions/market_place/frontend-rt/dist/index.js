var Mi = Object.defineProperty;
var $n = (e) => {
  throw TypeError(e);
};
var Ni = (e, t, r) => t in e ? Mi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var We = (e, t, r) => Ni(e, typeof t != "symbol" ? t + "" : t, r), on = (e, t, r) => t.has(e) || $n("Cannot " + r);
var l = (e, t, r) => (on(e, t, "read from private field"), r ? r.call(e) : t.get(e)), T = (e, t, r) => t.has(e) ? $n("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), D = (e, t, r, n) => (on(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), G = (e, t, r) => (on(e, t, "access private method"), r);
var Mn = Array.isArray, Ai = Array.prototype.indexOf, nr = Array.prototype.includes, en = Array.from, Ti = Object.defineProperty, br = Object.getOwnPropertyDescriptor, Pi = Object.getOwnPropertyDescriptors, Oi = Object.prototype, Di = Array.prototype, pa = Object.getPrototypeOf, ea = Object.isExtensible;
const ji = () => {
};
function Ii(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function _a() {
  var e, t, r = new Promise((n, a) => {
    e = n, t = a;
  });
  return { promise: r, resolve: e, reject: t };
}
const ge = 2, ar = 4, tn = 8, ga = 1 << 24, rt = 16, Qe = 32, Mt = 64, hn = 128, Be = 512, le = 1024, _e = 2048, nt = 4096, ke = 8192, qe = 16384, Yt = 32768, ta = 1 << 25, ir = 65536, pn = 1 << 17, Fi = 1 << 18, fr = 1 << 19, Ri = 1 << 20, tt = 1 << 25, Ut = 65536, Kr = 1 << 21, kr = 1 << 22, St = 1 << 23, xr = Symbol("$state"), Li = Symbol(""), ut = new class extends Error {
  constructor() {
    super(...arguments);
    We(this, "name", "StaleReactionError");
    We(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function zi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Bi() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function qi(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Hi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Vi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ui(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ji() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Wi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Yi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Gi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ki() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Qi = 1, Xi = 2, ba = 4, Zi = 8, $i = 16, es = 1, ts = 2, ve = Symbol(), xa = "http://www.w3.org/1999/xhtml";
function rs() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function ns() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function as() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function ya(e) {
  return e === this.v;
}
function is(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ma(e) {
  return !is(e, this.v);
}
let Pe = null;
function sr(e) {
  Pe = e;
}
function wa(e, t = !1, r) {
  Pe = {
    p: Pe,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      F
    ),
    l: null
  };
}
function ka(e) {
  var t = (
    /** @type {ComponentContext} */
    Pe
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Ua(n);
  }
  return t.i = !0, Pe = t.p, /** @type {T} */
  {};
}
function Ea() {
  return !0;
}
let Dt = [];
function Sa() {
  var e = Dt;
  Dt = [], Ii(e);
}
function Ct(e) {
  if (Dt.length === 0 && !yr) {
    var t = Dt;
    queueMicrotask(() => {
      t === Dt && Sa();
    });
  }
  Dt.push(e);
}
function ss() {
  for (; Dt.length > 0; )
    Sa();
}
function Ca(e) {
  var t = F;
  if (t === null)
    return I.f |= St, e;
  if ((t.f & Yt) === 0 && (t.f & ar) === 0)
    throw e;
  Et(e, t);
}
function Et(e, t) {
  for (; t !== null; ) {
    if ((t.f & hn) !== 0) {
      if ((t.f & Yt) === 0)
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
const ls = -7169;
function ae(e, t) {
  e.f = e.f & ls | t;
}
function Nn(e) {
  (e.f & Be) !== 0 || e.deps === null ? ae(e, le) : ae(e, nt);
}
function Ma(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ge) === 0 || (t.f & Ut) === 0 || (t.f ^= Ut, Ma(
        /** @type {Derived} */
        t.deps
      ));
}
function Na(e, t, r) {
  (e.f & _e) !== 0 ? t.add(e) : (e.f & nt) !== 0 && r.add(e), Ma(e.deps), ae(e, le);
}
const Pt = /* @__PURE__ */ new Set();
let S = null, Ge = null, _n = null, yr = !1, un = !1, Xt = null, Hr = null;
var ra = 0;
let os = 1;
var Zt, $t, Ft, ft, Ze, Cr, Ne, Mr, wt, ct, $e, er, tr, Rt, ie, Vr, Aa, Ur, gn, Jr, us;
const Xr = class Xr {
  constructor() {
    T(this, ie);
    We(this, "id", os++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    We(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    We(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    T(this, Zt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    T(this, $t, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    T(this, Ft, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    T(this, ft, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    T(this, Ze, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    T(this, Cr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    T(this, Ne, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    T(this, Mr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    T(this, wt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    T(this, ct, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    T(this, $e, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    T(this, er, /* @__PURE__ */ new Set());
    We(this, "is_fork", !1);
    T(this, tr, !1);
    /** @type {Set<Batch>} */
    T(this, Rt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, $e).has(t) || l(this, $e).set(t, { d: [], m: [] }), l(this, er).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = l(this, $e).get(t);
    if (n) {
      l(this, $e).delete(t);
      for (var a of n.d)
        ae(a, _e), r(a);
      for (a of n.m)
        ae(a, nt), r(a);
    }
    l(this, er).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== ve && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & St) === 0 && (this.current.set(t, [r, n]), Ge?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    S = this;
  }
  deactivate() {
    S = null, Ge = null;
  }
  flush() {
    try {
      un = !0, S = this, G(this, ie, Ur).call(this);
    } finally {
      ra = 0, _n = null, Xt = null, Hr = null, un = !1, S = null, Ge = null, qt.clear();
    }
  }
  discard() {
    for (const t of l(this, $t)) t(this);
    l(this, $t).clear(), l(this, Ft).clear(), Pt.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, Mr).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = l(this, ft).get(r) ?? 0;
    if (l(this, ft).set(r, n + 1), t) {
      let a = l(this, Ze).get(r) ?? 0;
      l(this, Ze).set(r, a + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let a = l(this, ft).get(r) ?? 0;
    if (a === 1 ? l(this, ft).delete(r) : l(this, ft).set(r, a - 1), t) {
      let i = l(this, Ze).get(r) ?? 0;
      i === 1 ? l(this, Ze).delete(r) : l(this, Ze).set(r, i - 1);
    }
    l(this, tr) || n || (D(this, tr, !0), Ct(() => {
      D(this, tr, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      l(this, wt).add(n);
    for (const n of r)
      l(this, ct).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, Zt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, $t).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    l(this, Ft).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, Ft)) t(this);
    l(this, Ft).clear();
  }
  settled() {
    return (l(this, Cr) ?? D(this, Cr, _a())).promise;
  }
  static ensure() {
    if (S === null) {
      const t = S = new Xr();
      un || (Pt.add(S), yr || Ct(() => {
        S === t && t.flush();
      }));
    }
    return S;
  }
  apply() {
    {
      Ge = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (_n = t, t.b?.is_pending && (t.f & (ar | tn | ga)) !== 0 && (t.f & Yt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Xt !== null && r === F && (I === null || (I.f & ge) === 0))
        return;
      if ((n & (Mt | Qe)) !== 0) {
        if ((n & le) === 0)
          return;
        r.f ^= le;
      }
    }
    l(this, Ne).push(r);
  }
};
Zt = new WeakMap(), $t = new WeakMap(), Ft = new WeakMap(), ft = new WeakMap(), Ze = new WeakMap(), Cr = new WeakMap(), Ne = new WeakMap(), Mr = new WeakMap(), wt = new WeakMap(), ct = new WeakMap(), $e = new WeakMap(), er = new WeakMap(), tr = new WeakMap(), Rt = new WeakMap(), ie = new WeakSet(), Vr = function() {
  return this.is_fork || l(this, Ze).size > 0;
}, Aa = function() {
  for (const n of l(this, Rt))
    for (const a of l(n, Ze).keys()) {
      for (var t = !1, r = a; r.parent !== null; ) {
        if (l(this, $e).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, Ur = function() {
  var f;
  if (ra++ > 1e3 && (Pt.delete(this), cs()), !G(this, ie, Vr).call(this)) {
    for (const o of l(this, wt))
      l(this, ct).delete(o), ae(o, _e), this.schedule(o);
    for (const o of l(this, ct))
      ae(o, nt), this.schedule(o);
  }
  const t = l(this, Ne);
  D(this, Ne, []), this.apply();
  var r = Xt = [], n = [], a = Hr = [];
  for (const o of t)
    try {
      G(this, ie, gn).call(this, o, r, n);
    } catch (d) {
      throw Oa(o), d;
    }
  if (S = null, a.length > 0) {
    var i = Xr.ensure();
    for (const o of a)
      i.schedule(o);
  }
  if (Xt = null, Hr = null, G(this, ie, Vr).call(this) || G(this, ie, Aa).call(this)) {
    G(this, ie, Jr).call(this, n), G(this, ie, Jr).call(this, r);
    for (const [o, d] of l(this, $e))
      Pa(o, d);
  } else {
    l(this, ft).size === 0 && Pt.delete(this), l(this, wt).clear(), l(this, ct).clear();
    for (const o of l(this, Zt)) o(this);
    l(this, Zt).clear(), na(n), na(r), l(this, Cr)?.resolve();
  }
  var u = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    S
  );
  if (l(this, Ne).length > 0) {
    const o = u ?? (u = this);
    l(o, Ne).push(...l(this, Ne).filter((d) => !l(o, Ne).includes(d)));
  }
  u !== null && (Pt.add(u), G(f = u, ie, Ur).call(f));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
gn = function(t, r, n) {
  t.f ^= le;
  for (var a = t.first; a !== null; ) {
    var i = a.f, u = (i & (Qe | Mt)) !== 0, f = u && (i & le) !== 0, o = f || (i & ke) !== 0 || l(this, $e).has(a);
    if (!o && a.fn !== null) {
      u ? a.f ^= le : (i & ar) !== 0 ? r.push(a) : Dr(a) && ((i & rt) !== 0 && l(this, ct).add(a), ur(a));
      var d = a.first;
      if (d !== null) {
        a = d;
        continue;
      }
    }
    for (; a !== null; ) {
      var v = a.next;
      if (v !== null) {
        a = v;
        break;
      }
      a = a.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
Jr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Na(t[r], l(this, wt), l(this, ct));
}, us = function() {
  var v, w, x;
  for (const _ of Pt) {
    var t = _.id < this.id, r = [];
    for (const [b, [M, g]] of this.current) {
      if (_.current.has(b)) {
        var n = (
          /** @type {[any, boolean]} */
          _.current.get(b)[0]
        );
        if (t && M !== n)
          _.current.set(b, [M, g]);
        else
          continue;
      }
      r.push(b);
    }
    var a = [..._.current.keys()].filter((b) => !this.current.has(b));
    if (a.length === 0)
      t && _.discard();
    else if (r.length > 0) {
      if (t)
        for (const b of l(this, er))
          _.unskip_effect(b, (M) => {
            var g;
            (M.f & (rt | kr)) !== 0 ? _.schedule(M) : G(g = _, ie, Jr).call(g, [M]);
          });
      _.activate();
      var i = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
      for (var f of r)
        Ta(f, a, i, u);
      u = /* @__PURE__ */ new Map();
      var o = [..._.current.keys()].filter(
        (b) => this.current.has(b) ? (
          /** @type {[any, boolean]} */
          this.current.get(b)[0] !== b
        ) : !0
      );
      for (const b of l(this, Mr))
        (b.f & (qe | ke | pn)) === 0 && An(b, o, u) && ((b.f & (kr | rt)) !== 0 ? (ae(b, _e), _.schedule(b)) : l(_, wt).add(b));
      if (l(_, Ne).length > 0) {
        _.apply();
        for (var d of l(_, Ne))
          G(v = _, ie, gn).call(v, d, [], []);
        D(_, Ne, []);
      }
      _.deactivate();
    }
  }
  for (const _ of Pt)
    l(_, Rt).has(this) && (l(_, Rt).delete(this), l(_, Rt).size === 0 && !G(w = _, ie, Vr).call(w) && (_.activate(), G(x = _, ie, Ur).call(x)));
};
let Jt = Xr;
function fs(e) {
  var t = yr;
  yr = !0;
  try {
    for (var r; ; ) {
      if (ss(), S === null)
        return (
          /** @type {T} */
          r
        );
      S.flush();
    }
  } finally {
    yr = t;
  }
}
function cs() {
  try {
    Ji();
  } catch (e) {
    Et(e, _n);
  }
}
let ot = null;
function na(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (qe | ke)) === 0 && Dr(n) && (ot = /* @__PURE__ */ new Set(), ur(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Ya(n), ot?.size > 0)) {
        qt.clear();
        for (const a of ot) {
          if ((a.f & (qe | ke)) !== 0) continue;
          const i = [a];
          let u = a.parent;
          for (; u !== null; )
            ot.has(u) && (ot.delete(u), i.push(u)), u = u.parent;
          for (let f = i.length - 1; f >= 0; f--) {
            const o = i[f];
            (o.f & (qe | ke)) === 0 && ur(o);
          }
        }
        ot.clear();
      }
    }
    ot = null;
  }
}
function Ta(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const a of e.reactions) {
      const i = a.f;
      (i & ge) !== 0 ? Ta(
        /** @type {Derived} */
        a,
        t,
        r,
        n
      ) : (i & (kr | rt)) !== 0 && (i & _e) === 0 && An(a, t, n) && (ae(a, _e), Tn(
        /** @type {Effect} */
        a
      ));
    }
}
function An(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const a of e.deps) {
      if (nr.call(t, a))
        return !0;
      if ((a.f & ge) !== 0 && An(
        /** @type {Derived} */
        a,
        t,
        r
      ))
        return r.set(
          /** @type {Derived} */
          a,
          !0
        ), !0;
    }
  return r.set(e, !1), !1;
}
function Tn(e) {
  S.schedule(e);
}
function Pa(e, t) {
  if (!((e.f & Qe) !== 0 && (e.f & le) !== 0)) {
    (e.f & _e) !== 0 ? t.d.push(e) : (e.f & nt) !== 0 && t.m.push(e), ae(e, le);
    for (var r = e.first; r !== null; )
      Pa(r, t), r = r.next;
  }
}
function Oa(e) {
  ae(e, le);
  for (var t = e.first; t !== null; )
    Oa(t), t = t.next;
}
function ds(e) {
  let t = 0, r = Wt(0), n;
  return () => {
    Dn() && (s(r), Ja(() => (t === 0 && (n = zn(() => e(() => mr(r)))), t += 1, () => {
      Ct(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, mr(r));
      });
    })));
  };
}
var vs = ir | fr;
function hs(e, t, r, n) {
  new ps(e, t, r, n);
}
var Fe, Cn, Re, Lt, Ee, Le, we, Ae, dt, zt, kt, rr, Nr, Ar, vt, Zr, te, _s, gs, bs, bn, Wr, Yr, xn, yn;
class ps {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, a) {
    T(this, te);
    /** @type {Boundary | null} */
    We(this, "parent");
    We(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    We(this, "transform_error");
    /** @type {TemplateNode} */
    T(this, Fe);
    /** @type {TemplateNode | null} */
    T(this, Cn, null);
    /** @type {BoundaryProps} */
    T(this, Re);
    /** @type {((anchor: Node) => void)} */
    T(this, Lt);
    /** @type {Effect} */
    T(this, Ee);
    /** @type {Effect | null} */
    T(this, Le, null);
    /** @type {Effect | null} */
    T(this, we, null);
    /** @type {Effect | null} */
    T(this, Ae, null);
    /** @type {DocumentFragment | null} */
    T(this, dt, null);
    T(this, zt, 0);
    T(this, kt, 0);
    T(this, rr, !1);
    /** @type {Set<Effect>} */
    T(this, Nr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    T(this, Ar, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    T(this, vt, null);
    T(this, Zr, ds(() => (D(this, vt, Wt(l(this, zt))), () => {
      D(this, vt, null);
    })));
    D(this, Fe, t), D(this, Re, r), D(this, Lt, (i) => {
      var u = (
        /** @type {Effect} */
        F
      );
      u.b = this, u.f |= hn, n(i);
    }), this.parent = /** @type {Effect} */
    F.b, this.transform_error = a ?? this.parent?.transform_error ?? ((i) => i), D(this, Ee, In(() => {
      G(this, te, bn).call(this);
    }, vs));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Na(t, l(this, Nr), l(this, Ar));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, Re).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    G(this, te, xn).call(this, t, r), D(this, zt, l(this, zt) + t), !(!l(this, vt) || l(this, rr)) && (D(this, rr, !0), Ct(() => {
      D(this, rr, !1), l(this, vt) && lr(l(this, vt), l(this, zt));
    }));
  }
  get_effect_pending() {
    return l(this, Zr).call(this), s(
      /** @type {Source<number>} */
      l(this, vt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, Re).onerror && !l(this, Re).failed)
      throw t;
    S?.is_fork ? (l(this, Le) && S.skip_effect(l(this, Le)), l(this, we) && S.skip_effect(l(this, we)), l(this, Ae) && S.skip_effect(l(this, Ae)), S.on_fork_commit(() => {
      G(this, te, yn).call(this, t);
    })) : G(this, te, yn).call(this, t);
  }
}
Fe = new WeakMap(), Cn = new WeakMap(), Re = new WeakMap(), Lt = new WeakMap(), Ee = new WeakMap(), Le = new WeakMap(), we = new WeakMap(), Ae = new WeakMap(), dt = new WeakMap(), zt = new WeakMap(), kt = new WeakMap(), rr = new WeakMap(), Nr = new WeakMap(), Ar = new WeakMap(), vt = new WeakMap(), Zr = new WeakMap(), te = new WeakSet(), _s = function() {
  try {
    D(this, Le, ze(() => l(this, Lt).call(this, l(this, Fe))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
gs = function(t) {
  const r = l(this, Re).failed;
  r && D(this, Ae, ze(() => {
    r(
      l(this, Fe),
      () => t,
      () => () => {
      }
    );
  }));
}, bs = function() {
  const t = l(this, Re).pending;
  t && (this.is_pending = !0, D(this, we, ze(() => t(l(this, Fe)))), Ct(() => {
    var r = D(this, dt, document.createDocumentFragment()), n = pt();
    r.append(n), D(this, Le, G(this, te, Yr).call(this, () => ze(() => l(this, Lt).call(this, n)))), l(this, kt) === 0 && (l(this, Fe).before(r), D(this, dt, null), Ht(
      /** @type {Effect} */
      l(this, we),
      () => {
        D(this, we, null);
      }
    ), G(this, te, Wr).call(
      this,
      /** @type {Batch} */
      S
    ));
  }));
}, bn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), D(this, kt, 0), D(this, zt, 0), D(this, Le, ze(() => {
      l(this, Lt).call(this, l(this, Fe));
    })), l(this, kt) > 0) {
      var t = D(this, dt, document.createDocumentFragment());
      Ln(l(this, Le), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        l(this, Re).pending
      );
      D(this, we, ze(() => r(l(this, Fe))));
    } else
      G(this, te, Wr).call(
        this,
        /** @type {Batch} */
        S
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
Wr = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, Nr), l(this, Ar));
}, /**
 * @template T
 * @param {() => T} fn
 */
Yr = function(t) {
  var r = F, n = I, a = Pe;
  at(l(this, Ee)), Ve(l(this, Ee)), sr(l(this, Ee).ctx);
  try {
    return Jt.ensure(), t();
  } catch (i) {
    return Ca(i), null;
  } finally {
    at(r), Ve(n), sr(a);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
xn = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && G(n = this.parent, te, xn).call(n, t, r);
    return;
  }
  D(this, kt, l(this, kt) + t), l(this, kt) === 0 && (G(this, te, Wr).call(this, r), l(this, we) && Ht(l(this, we), () => {
    D(this, we, null);
  }), l(this, dt) && (l(this, Fe).before(l(this, dt)), D(this, dt, null)));
}, /**
 * @param {unknown} error
 */
yn = function(t) {
  l(this, Le) && (Ce(l(this, Le)), D(this, Le, null)), l(this, we) && (Ce(l(this, we)), D(this, we, null)), l(this, Ae) && (Ce(l(this, Ae)), D(this, Ae, null));
  var r = l(this, Re).onerror;
  let n = l(this, Re).failed;
  var a = !1, i = !1;
  const u = () => {
    if (a) {
      as();
      return;
    }
    a = !0, i && Ki(), l(this, Ae) !== null && Ht(l(this, Ae), () => {
      D(this, Ae, null);
    }), G(this, te, Yr).call(this, () => {
      G(this, te, bn).call(this);
    });
  }, f = (o) => {
    try {
      i = !0, r?.(o, u), i = !1;
    } catch (d) {
      Et(d, l(this, Ee) && l(this, Ee).parent);
    }
    n && D(this, Ae, G(this, te, Yr).call(this, () => {
      try {
        return ze(() => {
          var d = (
            /** @type {Effect} */
            F
          );
          d.b = this, d.f |= hn, n(
            l(this, Fe),
            () => o,
            () => u
          );
        });
      } catch (d) {
        return Et(
          d,
          /** @type {Effect} */
          l(this, Ee).parent
        ), null;
      }
    }));
  };
  Ct(() => {
    var o;
    try {
      o = this.transform_error(t);
    } catch (d) {
      Et(d, l(this, Ee) && l(this, Ee).parent);
      return;
    }
    o !== null && typeof o == "object" && typeof /** @type {any} */
    o.then == "function" ? o.then(
      f,
      /** @param {unknown} e */
      (d) => Et(d, l(this, Ee) && l(this, Ee).parent)
    ) : f(o);
  });
};
function xs(e, t, r, n) {
  const a = Pn;
  var i = e.filter((x) => !x.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(a));
    return;
  }
  var u = (
    /** @type {Effect} */
    F
  ), f = ys(), o = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((x) => x.promise)) : null;
  function d(x) {
    f();
    try {
      n(x);
    } catch (_) {
      (u.f & qe) === 0 && Et(_, u);
    }
    Qr();
  }
  if (r.length === 0) {
    o.then(() => d(t.map(a)));
    return;
  }
  var v = Da();
  function w() {
    Promise.all(r.map((x) => /* @__PURE__ */ ms(x))).then((x) => d([...t.map(a), ...x])).catch((x) => Et(x, u)).finally(() => v());
  }
  o ? o.then(() => {
    f(), w(), Qr();
  }) : w();
}
function ys() {
  var e = (
    /** @type {Effect} */
    F
  ), t = I, r = Pe, n = (
    /** @type {Batch} */
    S
  );
  return function(i = !0) {
    at(e), Ve(t), sr(r), i && (e.f & qe) === 0 && (n?.activate(), n?.apply());
  };
}
function Qr(e = !0) {
  at(null), Ve(null), sr(null), e && S?.deactivate();
}
function Da() {
  var e = (
    /** @type {Effect} */
    F
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    S
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (a = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, a);
  };
}
// @__NO_SIDE_EFFECTS__
function Pn(e) {
  var t = ge | _e;
  return F !== null && (F.f |= fr), {
    ctx: Pe,
    deps: null,
    effects: null,
    equals: ya,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ve
    ),
    wv: 0,
    parent: F,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ms(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    F
  );
  n === null && Bi();
  var a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Wt(
    /** @type {V} */
    ve
  ), u = !I, f = /* @__PURE__ */ new Map();
  return Fs(() => {
    var o = (
      /** @type {Effect} */
      F
    ), d = _a();
    a = d.promise;
    try {
      Promise.resolve(e()).then(d.resolve, d.reject).finally(Qr);
    } catch (_) {
      d.reject(_), Qr();
    }
    var v = (
      /** @type {Batch} */
      S
    );
    if (u) {
      if ((o.f & Yt) !== 0)
        var w = Da();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        f.get(v)?.reject(ut), f.delete(v);
      else {
        for (const _ of f.values())
          _.reject(ut);
        f.clear();
      }
      f.set(v, d);
    }
    const x = (_, b = void 0) => {
      if (w) {
        var M = b === ut;
        w(M);
      }
      if (!(b === ut || (o.f & qe) !== 0)) {
        if (v.activate(), b)
          i.f |= St, lr(i, b);
        else {
          (i.f & St) !== 0 && (i.f ^= St), lr(i, _);
          for (const [g, N] of f) {
            if (f.delete(g), g === v) break;
            N.reject(ut);
          }
        }
        v.deactivate();
      }
    };
    d.promise.then(x, (_) => x(null, _ || "unknown"));
  }), jn(() => {
    for (const o of f.values())
      o.reject(ut);
  }), new Promise((o) => {
    function d(v) {
      function w() {
        v === a ? o(i) : d(a);
      }
      v.then(w, w);
    }
    d(a);
  });
}
// @__NO_SIDE_EFFECTS__
function Xe(e) {
  const t = /* @__PURE__ */ Pn(e);
  return Qa(t), t;
}
// @__NO_SIDE_EFFECTS__
function ws(e) {
  const t = /* @__PURE__ */ Pn(e);
  return t.equals = ma, t;
}
function ks(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Ce(
        /** @type {Effect} */
        t[r]
      );
  }
}
function On(e) {
  var t, r = F, n = e.parent;
  if (!Nt && n !== null && (n.f & (qe | ke)) !== 0)
    return rs(), e.v;
  at(n);
  try {
    e.f &= ~Ut, ks(e), t = ei(e);
  } finally {
    at(r);
  }
  return t;
}
function ja(e) {
  var t = On(e);
  if (!e.equals(t) && (e.wv = Za(), (!S?.is_fork || e.deps === null) && (S !== null ? S.capture(e, t, !0) : e.v = t, e.deps === null))) {
    ae(e, le);
    return;
  }
  Nt || (Ge !== null ? (Dn() || S?.is_fork) && Ge.set(e, t) : Nn(e));
}
function Es(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(ut), t.teardown = ji, t.ac = null, Er(t, 0), Fn(t));
}
function Ia(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && ur(t);
}
let mn = /* @__PURE__ */ new Set();
const qt = /* @__PURE__ */ new Map();
let Fa = !1;
function Wt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ya,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function Y(e, t) {
  const r = Wt(e);
  return Qa(r), r;
}
// @__NO_SIDE_EFFECTS__
function Ss(e, t = !1, r = !0) {
  const n = Wt(e);
  return t || (n.equals = ma), n;
}
function y(e, t, r = !1) {
  I !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ke || (I.f & pn) !== 0) && Ea() && (I.f & (ge | rt | kr | pn)) !== 0 && (He === null || !nr.call(He, e)) && Gi();
  let n = r ? ht(t) : t;
  return lr(e, n, Hr);
}
function lr(e, t, r = null) {
  if (!e.equals(t)) {
    qt.set(e, Nt ? t : e.v);
    var n = Jt.ensure();
    if (n.capture(e, t), (e.f & ge) !== 0) {
      const a = (
        /** @type {Derived} */
        e
      );
      (e.f & _e) !== 0 && On(a), Ge === null && Nn(a);
    }
    e.wv = Za(), Ra(e, _e, r), F !== null && (F.f & le) !== 0 && (F.f & (Qe | Mt)) === 0 && (Ie === null ? zs([e]) : Ie.push(e)), !n.is_fork && mn.size > 0 && !Fa && Cs();
  }
  return t;
}
function Cs() {
  Fa = !1;
  for (const e of mn)
    (e.f & le) !== 0 && ae(e, nt), Dr(e) && ur(e);
  mn.clear();
}
function mr(e) {
  y(e, e.v + 1);
}
function Ra(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, i = 0; i < a; i++) {
      var u = n[i], f = u.f, o = (f & _e) === 0;
      if (o && ae(u, t), (f & ge) !== 0) {
        var d = (
          /** @type {Derived} */
          u
        );
        Ge?.delete(d), (f & Ut) === 0 && (f & Be && (F === null || (F.f & Kr) === 0) && (u.f |= Ut), Ra(d, nt, r));
      } else if (o) {
        var v = (
          /** @type {Effect} */
          u
        );
        (f & rt) !== 0 && ot !== null && ot.add(v), r !== null ? r.push(v) : Tn(v);
      }
    }
}
function ht(e) {
  if (typeof e != "object" || e === null || xr in e)
    return e;
  const t = pa(e);
  if (t !== Oi && t !== Di)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Mn(e), a = /* @__PURE__ */ Y(0), i = Vt, u = (f) => {
    if (Vt === i)
      return f();
    var o = I, d = Vt;
    Ve(null), oa(i);
    var v = f();
    return Ve(o), oa(d), v;
  };
  return n && r.set("length", /* @__PURE__ */ Y(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, o, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Wi();
        var v = r.get(o);
        return v === void 0 ? u(() => {
          var w = /* @__PURE__ */ Y(d.value);
          return r.set(o, w), w;
        }) : y(v, d.value, !0), !0;
      },
      deleteProperty(f, o) {
        var d = r.get(o);
        if (d === void 0) {
          if (o in f) {
            const v = u(() => /* @__PURE__ */ Y(ve));
            r.set(o, v), mr(a);
          }
        } else
          y(d, ve), mr(a);
        return !0;
      },
      get(f, o, d) {
        if (o === xr)
          return e;
        var v = r.get(o), w = o in f;
        if (v === void 0 && (!w || br(f, o)?.writable) && (v = u(() => {
          var _ = ht(w ? f[o] : ve), b = /* @__PURE__ */ Y(_);
          return b;
        }), r.set(o, v)), v !== void 0) {
          var x = s(v);
          return x === ve ? void 0 : x;
        }
        return Reflect.get(f, o, d);
      },
      getOwnPropertyDescriptor(f, o) {
        var d = Reflect.getOwnPropertyDescriptor(f, o);
        if (d && "value" in d) {
          var v = r.get(o);
          v && (d.value = s(v));
        } else if (d === void 0) {
          var w = r.get(o), x = w?.v;
          if (w !== void 0 && x !== ve)
            return {
              enumerable: !0,
              configurable: !0,
              value: x,
              writable: !0
            };
        }
        return d;
      },
      has(f, o) {
        if (o === xr)
          return !0;
        var d = r.get(o), v = d !== void 0 && d.v !== ve || Reflect.has(f, o);
        if (d !== void 0 || F !== null && (!v || br(f, o)?.writable)) {
          d === void 0 && (d = u(() => {
            var x = v ? ht(f[o]) : ve, _ = /* @__PURE__ */ Y(x);
            return _;
          }), r.set(o, d));
          var w = s(d);
          if (w === ve)
            return !1;
        }
        return v;
      },
      set(f, o, d, v) {
        var w = r.get(o), x = o in f;
        if (n && o === "length")
          for (var _ = d; _ < /** @type {Source<number>} */
          w.v; _ += 1) {
            var b = r.get(_ + "");
            b !== void 0 ? y(b, ve) : _ in f && (b = u(() => /* @__PURE__ */ Y(ve)), r.set(_ + "", b));
          }
        if (w === void 0)
          (!x || br(f, o)?.writable) && (w = u(() => /* @__PURE__ */ Y(void 0)), y(w, ht(d)), r.set(o, w));
        else {
          x = w.v !== ve;
          var M = u(() => ht(d));
          y(w, M);
        }
        var g = Reflect.getOwnPropertyDescriptor(f, o);
        if (g?.set && g.set.call(v, d), !x) {
          if (n && typeof o == "string") {
            var N = (
              /** @type {Source<number>} */
              r.get("length")
            ), B = Number(o);
            Number.isInteger(B) && B >= N.v && y(N, B + 1);
          }
          mr(a);
        }
        return !0;
      },
      ownKeys(f) {
        s(a);
        var o = Reflect.ownKeys(f).filter((w) => {
          var x = r.get(w);
          return x === void 0 || x.v !== ve;
        });
        for (var [d, v] of r)
          v.v !== ve && !(d in f) && o.push(d);
        return o;
      },
      setPrototypeOf() {
        Yi();
      }
    }
  );
}
function aa(e) {
  try {
    if (e !== null && typeof e == "object" && xr in e)
      return e[xr];
  } catch {
  }
  return e;
}
function Ms(e, t) {
  return Object.is(aa(e), aa(t));
}
var ia, La, za, Ba;
function Ns() {
  if (ia === void 0) {
    ia = window, La = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    za = br(t, "firstChild").get, Ba = br(t, "nextSibling").get, ea(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ea(r) && (r.__t = void 0);
  }
}
function pt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function or(e) {
  return (
    /** @type {TemplateNode | null} */
    za.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Or(e) {
  return (
    /** @type {TemplateNode | null} */
    Ba.call(e)
  );
}
function p(e, t) {
  return /* @__PURE__ */ or(e);
}
function fn(e, t = !1) {
  {
    var r = /* @__PURE__ */ or(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Or(r) : r;
  }
}
function m(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Or(n);
  return n;
}
function As(e) {
  e.textContent = "";
}
function qa() {
  return !1;
}
function Ts(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(xa, e, void 0)
  );
}
let sa = !1;
function Ps() {
  sa || (sa = !0, document.addEventListener(
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
function rn(e) {
  var t = I, r = F;
  Ve(null), at(null);
  try {
    return e();
  } finally {
    Ve(t), at(r);
  }
}
function Ha(e, t, r, n = r) {
  e.addEventListener(t, () => rn(r));
  const a = e.__on_r;
  a ? e.__on_r = () => {
    a(), n(!0);
  } : e.__on_r = () => n(!0), Ps();
}
function Os(e) {
  F === null && (I === null && Ui(), Vi()), Nt && Hi();
}
function Ds(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function _t(e, t) {
  var r = F;
  r !== null && (r.f & ke) !== 0 && (e |= ke);
  var n = {
    ctx: Pe,
    deps: null,
    nodes: null,
    f: e | _e | Be,
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
  S?.register_created_effect(n);
  var a = n;
  if ((e & ar) !== 0)
    Xt !== null ? Xt.push(n) : Jt.ensure().schedule(n);
  else if (t !== null) {
    try {
      ur(n);
    } catch (u) {
      throw Ce(n), u;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    (a.f & fr) === 0 && (a = a.first, (e & rt) !== 0 && (e & ir) !== 0 && a !== null && (a.f |= ir));
  }
  if (a !== null && (a.parent = r, r !== null && Ds(a, r), I !== null && (I.f & ge) !== 0 && (e & Mt) === 0)) {
    var i = (
      /** @type {Derived} */
      I
    );
    (i.effects ?? (i.effects = [])).push(a);
  }
  return n;
}
function Dn() {
  return I !== null && !Ke;
}
function jn(e) {
  const t = _t(tn, null);
  return ae(t, le), t.teardown = e, t;
}
function Va(e) {
  Os();
  var t = (
    /** @type {Effect} */
    F.f
  ), r = !I && (t & Qe) !== 0 && (t & Yt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Pe
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Ua(e);
}
function Ua(e) {
  return _t(ar | Ri, e);
}
function js(e) {
  Jt.ensure();
  const t = _t(Mt | fr, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Ht(t, () => {
      Ce(t), n(void 0);
    }) : (Ce(t), n(void 0));
  });
}
function Is(e) {
  return _t(ar, e);
}
function Fs(e) {
  return _t(kr | fr, e);
}
function Ja(e, t = 0) {
  return _t(tn | t, e);
}
function ne(e, t = [], r = [], n = []) {
  xs(n, t, r, (a) => {
    _t(tn, () => e(...a.map(s)));
  });
}
function In(e, t = 0) {
  var r = _t(rt | t, e);
  return r;
}
function ze(e) {
  return _t(Qe | fr, e);
}
function Wa(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Nt, n = I;
    la(!0), Ve(null);
    try {
      t.call(null);
    } finally {
      la(r), Ve(n);
    }
  }
}
function Fn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const a = r.ac;
    a !== null && rn(() => {
      a.abort(ut);
    });
    var n = r.next;
    (r.f & Mt) !== 0 ? r.parent = null : Ce(r, t), r = n;
  }
}
function Rs(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Qe) === 0 && Ce(t), t = r;
  }
}
function Ce(e, t = !0) {
  var r = !1;
  (t || (e.f & Fi) !== 0) && e.nodes !== null && e.nodes.end !== null && (Ls(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), ae(e, ta), Fn(e, t && !r), Er(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  Wa(e), e.f ^= ta, e.f |= qe;
  var a = e.parent;
  a !== null && a.first !== null && Ya(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Ls(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Or(e);
    e.remove(), e = r;
  }
}
function Ya(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Ht(e, t, r = !0) {
  var n = [];
  Ga(e, n, !0);
  var a = () => {
    r && Ce(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var u = () => --i || a();
    for (var f of n)
      f.out(u);
  } else
    a();
}
function Ga(e, t, r) {
  if ((e.f & ke) === 0) {
    e.f ^= ke;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const f of n)
        (f.is_global || r) && t.push(f);
    for (var a = e.first; a !== null; ) {
      var i = a.next;
      if ((a.f & Mt) === 0) {
        var u = (a.f & ir) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (a.f & Qe) !== 0 && (e.f & rt) !== 0;
        Ga(a, t, u ? r : !1);
      }
      a = i;
    }
  }
}
function Rn(e) {
  Ka(e, !0);
}
function Ka(e, t) {
  if ((e.f & ke) !== 0) {
    e.f ^= ke, (e.f & le) === 0 && (ae(e, _e), Jt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, a = (r.f & ir) !== 0 || (r.f & Qe) !== 0;
      Ka(r, a ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const u of i)
        (u.is_global || t) && u.in();
  }
}
function Ln(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var a = r === n ? null : /* @__PURE__ */ Or(r);
      t.append(r), r = a;
    }
}
let Gr = !1, Nt = !1;
function la(e) {
  Nt = e;
}
let I = null, Ke = !1;
function Ve(e) {
  I = e;
}
let F = null;
function at(e) {
  F = e;
}
let He = null;
function Qa(e) {
  I !== null && (He === null ? He = [e] : He.push(e));
}
let Se = null, Me = 0, Ie = null;
function zs(e) {
  Ie = e;
}
let Xa = 1, jt = 0, Vt = jt;
function oa(e) {
  Vt = e;
}
function Za() {
  return ++Xa;
}
function Dr(e) {
  var t = e.f;
  if ((t & _e) !== 0)
    return !0;
  if (t & ge && (e.f &= ~Ut), (t & nt) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, a = 0; a < n; a++) {
      var i = r[a];
      if (Dr(
        /** @type {Derived} */
        i
      ) && ja(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & Be) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ge === null && ae(e, le);
  }
  return !1;
}
function $a(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(He !== null && nr.call(He, e)))
    for (var a = 0; a < n.length; a++) {
      var i = n[a];
      (i.f & ge) !== 0 ? $a(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? ae(i, _e) : (i.f & le) !== 0 && ae(i, nt), Tn(
        /** @type {Effect} */
        i
      ));
    }
}
function ei(e) {
  var M;
  var t = Se, r = Me, n = Ie, a = I, i = He, u = Pe, f = Ke, o = Vt, d = e.f;
  Se = /** @type {null | Value[]} */
  null, Me = 0, Ie = null, I = (d & (Qe | Mt)) === 0 ? e : null, He = null, sr(e.ctx), Ke = !1, Vt = ++jt, e.ac !== null && (rn(() => {
    e.ac.abort(ut);
  }), e.ac = null);
  try {
    e.f |= Kr;
    var v = (
      /** @type {Function} */
      e.fn
    ), w = v();
    e.f |= Yt;
    var x = e.deps, _ = S?.is_fork;
    if (Se !== null) {
      var b;
      if (_ || Er(e, Me), x !== null && Me > 0)
        for (x.length = Me + Se.length, b = 0; b < Se.length; b++)
          x[Me + b] = Se[b];
      else
        e.deps = x = Se;
      if (Dn() && (e.f & Be) !== 0)
        for (b = Me; b < x.length; b++)
          ((M = x[b]).reactions ?? (M.reactions = [])).push(e);
    } else !_ && x !== null && Me < x.length && (Er(e, Me), x.length = Me);
    if (Ea() && Ie !== null && !Ke && x !== null && (e.f & (ge | nt | _e)) === 0)
      for (b = 0; b < /** @type {Source[]} */
      Ie.length; b++)
        $a(
          Ie[b],
          /** @type {Effect} */
          e
        );
    if (a !== null && a !== e) {
      if (jt++, a.deps !== null)
        for (let g = 0; g < r; g += 1)
          a.deps[g].rv = jt;
      if (t !== null)
        for (const g of t)
          g.rv = jt;
      Ie !== null && (n === null ? n = Ie : n.push(.../** @type {Source[]} */
      Ie));
    }
    return (e.f & St) !== 0 && (e.f ^= St), w;
  } catch (g) {
    return Ca(g);
  } finally {
    e.f ^= Kr, Se = t, Me = r, Ie = n, I = a, He = i, sr(u), Ke = f, Vt = o;
  }
}
function Bs(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Ai.call(r, e);
    if (n !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[n] = r[a], r.pop());
    }
  }
  if (r === null && (t.f & ge) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Se === null || !nr.call(Se, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & Be) !== 0 && (i.f ^= Be, i.f &= ~Ut), i.v !== ve && Nn(i), Es(i), Er(i, 0);
  }
}
function Er(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Bs(e, r[n]);
}
function ur(e) {
  var t = e.f;
  if ((t & qe) === 0) {
    ae(e, le);
    var r = F, n = Gr;
    F = e, Gr = !0;
    try {
      (t & (rt | ga)) !== 0 ? Rs(e) : Fn(e), Wa(e);
      var a = ei(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = Xa;
      var i;
    } finally {
      Gr = n, F = r;
    }
  }
}
async function qs() {
  await Promise.resolve(), fs();
}
function s(e) {
  var t = e.f, r = (t & ge) !== 0;
  if (I !== null && !Ke) {
    var n = F !== null && (F.f & qe) !== 0;
    if (!n && (He === null || !nr.call(He, e))) {
      var a = I.deps;
      if ((I.f & Kr) !== 0)
        e.rv < jt && (e.rv = jt, Se === null && a !== null && a[Me] === e ? Me++ : Se === null ? Se = [e] : Se.push(e));
      else {
        (I.deps ?? (I.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [I] : nr.call(i, I) || i.push(I);
      }
    }
  }
  if (Nt && qt.has(e))
    return qt.get(e);
  if (r) {
    var u = (
      /** @type {Derived} */
      e
    );
    if (Nt) {
      var f = u.v;
      return ((u.f & le) === 0 && u.reactions !== null || ri(u)) && (f = On(u)), qt.set(u, f), f;
    }
    var o = (u.f & Be) === 0 && !Ke && I !== null && (Gr || (I.f & Be) !== 0), d = (u.f & Yt) === 0;
    Dr(u) && (o && (u.f |= Be), ja(u)), o && !d && (Ia(u), ti(u));
  }
  if (Ge?.has(e))
    return Ge.get(e);
  if ((e.f & St) !== 0)
    throw e.v;
  return e.v;
}
function ti(e) {
  if (e.f |= Be, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ge) !== 0 && (t.f & Be) === 0 && (Ia(
        /** @type {Derived} */
        t
      ), ti(
        /** @type {Derived} */
        t
      ));
}
function ri(e) {
  if (e.v === ve) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (qt.has(t) || (t.f & ge) !== 0 && ri(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function zn(e) {
  var t = Ke;
  try {
    return Ke = !0, e();
  } finally {
    Ke = t;
  }
}
const Hs = ["touchstart", "touchmove"];
function Vs(e) {
  return Hs.includes(e);
}
const It = Symbol("events"), ni = /* @__PURE__ */ new Set(), wn = /* @__PURE__ */ new Set();
function Us(e, t, r, n = {}) {
  function a(i) {
    if (n.capture || kn.call(t, i), !i.cancelBubble)
      return rn(() => r?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Ct(() => {
    t.addEventListener(e, a, n);
  }) : t.addEventListener(e, a, n), a;
}
function Js(e, t, r, n, a) {
  var i = { capture: n, passive: a }, u = Us(e, t, r, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && jn(() => {
    t.removeEventListener(e, u, i);
  });
}
function de(e, t, r) {
  (t[It] ?? (t[It] = {}))[e] = r;
}
function Ws(e) {
  for (var t = 0; t < e.length; t++)
    ni.add(e[t]);
  for (var r of wn)
    r(e);
}
let ua = null;
function kn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, a = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    a[0] || e.target
  );
  ua = e;
  var u = 0, f = ua === e && e[It];
  if (f) {
    var o = a.indexOf(f);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[It] = t;
      return;
    }
    var d = a.indexOf(t);
    if (d === -1)
      return;
    o <= d && (u = o);
  }
  if (i = /** @type {Element} */
  a[u] || e.target, i !== t) {
    Ti(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var v = I, w = F;
    Ve(null), at(null);
    try {
      for (var x, _ = []; i !== null; ) {
        var b = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var M = i[It]?.[n];
          M != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && M.call(i, e);
        } catch (g) {
          x ? _.push(g) : x = g;
        }
        if (e.cancelBubble || b === t || b === null)
          break;
        i = b;
      }
      if (x) {
        for (let g of _)
          queueMicrotask(() => {
            throw g;
          });
        throw x;
      }
    } finally {
      e[It] = t, delete e.currentTarget, Ve(v), at(w);
    }
  }
}
const Ys = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Gs(e) {
  return (
    /** @type {string} */
    Ys?.createHTML(e) ?? e
  );
}
function ai(e) {
  var t = Ts("template");
  return t.innerHTML = Gs(e.replaceAll("<!>", "<!---->")), t.content;
}
function Sr(e, t) {
  var r = (
    /** @type {Effect} */
    F
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function C(e, t) {
  var r = (t & es) !== 0, n = (t & ts) !== 0, a, i = !e.startsWith("<!>");
  return () => {
    a === void 0 && (a = ai(i ? e : "<!>" + e), r || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ or(a)));
    var u = (
      /** @type {TemplateNode} */
      n || La ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ or(u)
      ), o = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Sr(f, o);
    } else
      Sr(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function Ks(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), a = `<${r}>${n ? e : "<!>" + e}</${r}>`, i;
  return () => {
    if (!i) {
      var u = (
        /** @type {DocumentFragment} */
        ai(a)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ or(u)
      );
      i = /** @type {Element} */
      /* @__PURE__ */ or(f);
    }
    var o = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    return Sr(o, o), o;
  };
}
// @__NO_SIDE_EFFECTS__
function jr(e, t) {
  return /* @__PURE__ */ Ks(e, t, "svg");
}
function fa(e = "") {
  {
    var t = pt(e + "");
    return Sr(t, t), t;
  }
}
function Qs() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = pt();
  return e.append(t, r), Sr(t, r), e;
}
function k(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function z(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Xs(e, t) {
  return Zs(e, t);
}
const qr = /* @__PURE__ */ new Map();
function Zs(e, { target: t, anchor: r, props: n = {}, events: a, context: i, intro: u = !0, transformError: f }) {
  Ns();
  var o = void 0, d = js(() => {
    var v = r ?? t.appendChild(pt());
    hs(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (_) => {
        wa({});
        var b = (
          /** @type {ComponentContext} */
          Pe
        );
        i && (b.c = i), a && (n.$$events = a), o = e(_, n) || {}, ka();
      },
      f
    );
    var w = /* @__PURE__ */ new Set(), x = (_) => {
      for (var b = 0; b < _.length; b++) {
        var M = _[b];
        if (!w.has(M)) {
          w.add(M);
          var g = Vs(M);
          for (const V of [t, document]) {
            var N = qr.get(V);
            N === void 0 && (N = /* @__PURE__ */ new Map(), qr.set(V, N));
            var B = N.get(M);
            B === void 0 ? (V.addEventListener(M, kn, { passive: g }), N.set(M, 1)) : N.set(M, B + 1);
          }
        }
      }
    };
    return x(en(ni)), wn.add(x), () => {
      for (var _ of w)
        for (const g of [t, document]) {
          var b = (
            /** @type {Map<string, number>} */
            qr.get(g)
          ), M = (
            /** @type {number} */
            b.get(_)
          );
          --M == 0 ? (g.removeEventListener(_, kn), b.delete(_), b.size === 0 && qr.delete(g)) : b.set(_, M);
        }
      wn.delete(x), v !== r && v.parentNode?.removeChild(v);
    };
  });
  return En.set(o, d), o;
}
let En = /* @__PURE__ */ new WeakMap();
function $s(e, t) {
  const r = En.get(e);
  return r ? (En.delete(e), r(t)) : Promise.resolve();
}
var Ye, et, Te, Bt, Tr, Pr, $r;
class el {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    We(this, "anchor");
    /** @type {Map<Batch, Key>} */
    T(this, Ye, /* @__PURE__ */ new Map());
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
    T(this, et, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    T(this, Te, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    T(this, Bt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    T(this, Tr, !0);
    /**
     * @param {Batch} batch
     */
    T(this, Pr, (t) => {
      if (l(this, Ye).has(t)) {
        var r = (
          /** @type {Key} */
          l(this, Ye).get(t)
        ), n = l(this, et).get(r);
        if (n)
          Rn(n), l(this, Bt).delete(r);
        else {
          var a = l(this, Te).get(r);
          a && (l(this, et).set(r, a.effect), l(this, Te).delete(r), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), n = a.effect);
        }
        for (const [i, u] of l(this, Ye)) {
          if (l(this, Ye).delete(i), i === t)
            break;
          const f = l(this, Te).get(u);
          f && (Ce(f.effect), l(this, Te).delete(u));
        }
        for (const [i, u] of l(this, et)) {
          if (i === r || l(this, Bt).has(i)) continue;
          const f = () => {
            if (Array.from(l(this, Ye).values()).includes(i)) {
              var d = document.createDocumentFragment();
              Ln(u, d), d.append(pt()), l(this, Te).set(i, { effect: u, fragment: d });
            } else
              Ce(u);
            l(this, Bt).delete(i), l(this, et).delete(i);
          };
          l(this, Tr) || !n ? (l(this, Bt).add(i), Ht(u, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    T(this, $r, (t) => {
      l(this, Ye).delete(t);
      const r = Array.from(l(this, Ye).values());
      for (const [n, a] of l(this, Te))
        r.includes(n) || (Ce(a.effect), l(this, Te).delete(n));
    });
    this.anchor = t, D(this, Tr, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      S
    ), a = qa();
    if (r && !l(this, et).has(t) && !l(this, Te).has(t))
      if (a) {
        var i = document.createDocumentFragment(), u = pt();
        i.append(u), l(this, Te).set(t, {
          effect: ze(() => r(u)),
          fragment: i
        });
      } else
        l(this, et).set(
          t,
          ze(() => r(this.anchor))
        );
    if (l(this, Ye).set(n, t), a) {
      for (const [f, o] of l(this, et))
        f === t ? n.unskip_effect(o) : n.skip_effect(o);
      for (const [f, o] of l(this, Te))
        f === t ? n.unskip_effect(o.effect) : n.skip_effect(o.effect);
      n.oncommit(l(this, Pr)), n.ondiscard(l(this, $r));
    } else
      l(this, Pr).call(this, n);
  }
}
Ye = new WeakMap(), et = new WeakMap(), Te = new WeakMap(), Bt = new WeakMap(), Tr = new WeakMap(), Pr = new WeakMap(), $r = new WeakMap();
function $(e, t, r = !1) {
  var n = new el(e), a = r ? ir : 0;
  function i(u, f) {
    n.ensure(u, f);
  }
  In(() => {
    var u = !1;
    t((f, o = 0) => {
      u = !0, i(o, f);
    }), u || i(-1, null);
  }, a);
}
function Qt(e, t) {
  return t;
}
function tl(e, t, r) {
  for (var n = [], a = t.length, i, u = t.length, f = 0; f < a; f++) {
    let w = t[f];
    Ht(
      w,
      () => {
        if (i) {
          if (i.pending.delete(w), i.done.add(w), i.pending.size === 0) {
            var x = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Sn(e, en(i.done)), x.delete(i), x.size === 0 && (e.outrogroups = null);
          }
        } else
          u -= 1;
      },
      !1
    );
  }
  if (u === 0) {
    var o = n.length === 0 && r !== null;
    if (o) {
      var d = (
        /** @type {Element} */
        r
      ), v = (
        /** @type {Element} */
        d.parentNode
      );
      As(v), v.append(d), e.items.clear();
    }
    Sn(e, t, !o);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function Sn(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const u of e.pending.values())
      for (const f of u)
        n.add(
          /** @type {EachItem} */
          e.items.get(f).e
        );
  }
  for (var a = 0; a < t.length; a++) {
    var i = t[a];
    if (n?.has(i)) {
      i.f |= tt;
      const u = document.createDocumentFragment();
      Ln(i, u);
    } else
      Ce(t[a], r);
  }
}
var ca;
function lt(e, t, r, n, a, i = null) {
  var u = e, f = /* @__PURE__ */ new Map(), o = (t & ba) !== 0;
  if (o) {
    var d = (
      /** @type {Element} */
      e
    );
    u = d.appendChild(pt());
  }
  var v = null, w = /* @__PURE__ */ ws(() => {
    var V = r();
    return Mn(V) ? V : V == null ? [] : en(V);
  }), x, _ = /* @__PURE__ */ new Map(), b = !0;
  function M(V) {
    (B.effect.f & qe) === 0 && (B.pending.delete(V), B.fallback = v, rl(B, x, u, t, n), v !== null && (x.length === 0 ? (v.f & tt) === 0 ? Rn(v) : (v.f ^= tt, gr(v, null, u)) : Ht(v, () => {
      v = null;
    })));
  }
  function g(V) {
    B.pending.delete(V);
  }
  var N = In(() => {
    x = /** @type {V[]} */
    s(w);
    for (var V = x.length, A = /* @__PURE__ */ new Set(), Oe = (
      /** @type {Batch} */
      S
    ), gt = qa(), be = 0; be < V; be += 1) {
      var De = x[be], it = n(De, be), oe = b ? null : f.get(it);
      oe ? (oe.v && lr(oe.v, De), oe.i && lr(oe.i, be), gt && Oe.unskip_effect(oe.e)) : (oe = nl(
        f,
        b ? u : ca ?? (ca = pt()),
        De,
        it,
        be,
        a,
        t,
        r
      ), b || (oe.e.f |= tt), f.set(it, oe)), A.add(it);
    }
    if (V === 0 && i && !v && (b ? v = ze(() => i(u)) : (v = ze(() => i(ca ?? (ca = pt()))), v.f |= tt)), V > A.size && qi(), !b)
      if (_.set(Oe, A), gt) {
        for (const [nn, Ir] of f)
          A.has(nn) || Oe.skip_effect(Ir.e);
        Oe.oncommit(M), Oe.ondiscard(g);
      } else
        M(Oe);
    s(w);
  }), B = { effect: N, items: f, pending: _, outrogroups: null, fallback: v };
  b = !1;
}
function pr(e) {
  for (; e !== null && (e.f & Qe) === 0; )
    e = e.next;
  return e;
}
function rl(e, t, r, n, a) {
  var i = (n & Zi) !== 0, u = t.length, f = e.items, o = pr(e.effect.first), d, v = null, w, x = [], _ = [], b, M, g, N;
  if (i)
    for (N = 0; N < u; N += 1)
      b = t[N], M = a(b, N), g = /** @type {EachItem} */
      f.get(M).e, (g.f & tt) === 0 && (g.nodes?.a?.measure(), (w ?? (w = /* @__PURE__ */ new Set())).add(g));
  for (N = 0; N < u; N += 1) {
    if (b = t[N], M = a(b, N), g = /** @type {EachItem} */
    f.get(M).e, e.outrogroups !== null)
      for (const oe of e.outrogroups)
        oe.pending.delete(g), oe.done.delete(g);
    if ((g.f & ke) !== 0 && (Rn(g), i && (g.nodes?.a?.unfix(), (w ?? (w = /* @__PURE__ */ new Set())).delete(g))), (g.f & tt) !== 0)
      if (g.f ^= tt, g === o)
        gr(g, null, r);
      else {
        var B = v ? v.next : o;
        g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), mt(e, v, g), mt(e, g, B), gr(g, B, r), v = g, x = [], _ = [], o = pr(v.next);
        continue;
      }
    if (g !== o) {
      if (d !== void 0 && d.has(g)) {
        if (x.length < _.length) {
          var V = _[0], A;
          v = V.prev;
          var Oe = x[0], gt = x[x.length - 1];
          for (A = 0; A < x.length; A += 1)
            gr(x[A], V, r);
          for (A = 0; A < _.length; A += 1)
            d.delete(_[A]);
          mt(e, Oe.prev, gt.next), mt(e, v, Oe), mt(e, gt, V), o = V, v = gt, N -= 1, x = [], _ = [];
        } else
          d.delete(g), gr(g, o, r), mt(e, g.prev, g.next), mt(e, g, v === null ? e.effect.first : v.next), mt(e, v, g), v = g;
        continue;
      }
      for (x = [], _ = []; o !== null && o !== g; )
        (d ?? (d = /* @__PURE__ */ new Set())).add(o), _.push(o), o = pr(o.next);
      if (o === null)
        continue;
    }
    (g.f & tt) === 0 && x.push(g), v = g, o = pr(g.next);
  }
  if (e.outrogroups !== null) {
    for (const oe of e.outrogroups)
      oe.pending.size === 0 && (Sn(e, en(oe.done)), e.outrogroups?.delete(oe));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || d !== void 0) {
    var be = [];
    if (d !== void 0)
      for (g of d)
        (g.f & ke) === 0 && be.push(g);
    for (; o !== null; )
      (o.f & ke) === 0 && o !== e.fallback && be.push(o), o = pr(o.next);
    var De = be.length;
    if (De > 0) {
      var it = (n & ba) !== 0 && u === 0 ? r : null;
      if (i) {
        for (N = 0; N < De; N += 1)
          be[N].nodes?.a?.measure();
        for (N = 0; N < De; N += 1)
          be[N].nodes?.a?.fix();
      }
      tl(e, be, it);
    }
  }
  i && Ct(() => {
    if (w !== void 0)
      for (g of w)
        g.nodes?.a?.apply();
  });
}
function nl(e, t, r, n, a, i, u, f) {
  var o = (u & Qi) !== 0 ? (u & $i) === 0 ? /* @__PURE__ */ Ss(r, !1, !1) : Wt(r) : null, d = (u & Xi) !== 0 ? Wt(a) : null;
  return {
    v: o,
    i: d,
    e: ze(() => (i(t, o ?? r, d ?? a, f), () => {
      e.delete(n);
    }))
  };
}
function gr(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, a = e.nodes.end, i = t && (t.f & tt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Or(n)
      );
      if (i.before(n), n === a)
        return;
      n = u;
    }
}
function mt(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function al(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function _r(e, t, r, n, a, i) {
  var u = e.__className;
  if (u !== r || u === void 0) {
    var f = al(r);
    f == null ? e.removeAttribute("class") : e.className = f, e.__className = r;
  }
  return i;
}
function ii(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Mn(t))
      return ns();
    for (var n of e.options)
      n.selected = t.includes(wr(n));
    return;
  }
  for (n of e.options) {
    var a = wr(n);
    if (Ms(a, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function il(e) {
  var t = new MutationObserver(() => {
    ii(e, e.__value);
  });
  t.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), jn(() => {
    t.disconnect();
  });
}
function da(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), a = !0;
  Ha(e, "change", (i) => {
    var u = i ? "[selected]" : ":checked", f;
    if (e.multiple)
      f = [].map.call(e.querySelectorAll(u), wr);
    else {
      var o = e.querySelector(u) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      f = o && wr(o);
    }
    r(f), e.__value = f, S !== null && n.add(S);
  }), Is(() => {
    var i = t();
    if (e === document.activeElement) {
      var u = (
        /** @type {Batch} */
        S
      );
      if (n.has(u))
        return;
    }
    if (ii(e, i, a), a && i === void 0) {
      var f = e.querySelector(":checked");
      f !== null && (i = wr(f), r(i));
    }
    e.__value = i, a = !1;
  }), il(e);
}
function wr(e) {
  return "__value" in e ? e.__value : e.value;
}
const sl = Symbol("is custom element"), ll = Symbol("is html");
function cn(e, t, r, n) {
  var a = ol(e);
  a[t] !== (a[t] = r) && (t === "loading" && (e[Li] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && ul(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function ol(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [sl]: e.nodeName.includes("-"),
      [ll]: e.namespaceURI === xa
    })
  );
}
var va = /* @__PURE__ */ new Map();
function ul(e) {
  var t = e.getAttribute("is") || e.nodeName, r = va.get(t);
  if (r) return r;
  va.set(t, r = []);
  for (var n, a = e, i = Element.prototype; i !== a; ) {
    n = Pi(a);
    for (var u in n)
      n[u].set && r.push(u);
    a = pa(a);
  }
  return r;
}
function Ot(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Ha(e, "input", async (a) => {
    var i = a ? e.defaultValue : e.value;
    if (i = dn(e) ? vn(i) : i, r(i), S !== null && n.add(S), await qs(), i !== (i = t())) {
      var u = e.selectionStart, f = e.selectionEnd, o = e.value.length;
      if (e.value = i ?? "", f !== null) {
        var d = e.value.length;
        u === f && f === o && d > o ? (e.selectionStart = d, e.selectionEnd = d) : (e.selectionStart = u, e.selectionEnd = Math.min(f, d));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  zn(t) == null && e.value && (r(dn(e) ? vn(e.value) : e.value), S !== null && n.add(S)), Ja(() => {
    var a = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        S
      );
      if (n.has(i))
        return;
    }
    dn(e) && a === vn(e.value) || e.type === "date" && !a && !e.value || a !== e.value && (e.value = a ?? "");
  });
}
function dn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function vn(e) {
  return e === "" ? null : +e;
}
function fl(e) {
  Pe === null && zi(), Va(() => {
    const t = zn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
const cl = "5";
var ha;
typeof window < "u" && ((ha = window.__svelte ?? (window.__svelte = {})).v ?? (ha.v = /* @__PURE__ */ new Set())).add(cl);
var dl = /* @__PURE__ */ C('<div class="flex items-center gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg text-sm"><svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span class="flex-1"> </span> <button class="text-red-500 hover:text-red-700">&times;</button></div>'), vl = /* @__PURE__ */ C('<div class="flex items-center gap-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg text-sm"><svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span class="flex-1"> </span> <button class="text-green-500 hover:text-green-700">&times;</button></div>'), hl = /* @__PURE__ */ C('<button><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> <!></button>'), pl = /* @__PURE__ */ C('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center"><p class="text-2xl font-bold text-gray-900 dark:text-white"> </p> <p class="text-sm text-gray-500 dark:text-gray-400"> </p></div>'), _l = /* @__PURE__ */ C('<div class="grid grid-cols-3 gap-4"></div>'), gl = /* @__PURE__ */ C('<div class="flex items-center justify-center py-16"><svg class="animate-spin h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span class="ml-3 text-gray-500">Loading marketplace...</span></div>'), bl = /* @__PURE__ */ C('<div class="text-center py-16"><svg class="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg> <p class="text-gray-500 dark:text-gray-400">No extensions available</p></div>'), xl = /* @__PURE__ */ C('<p class="text-sm text-gray-600 dark:text-gray-400 mb-3 flex-grow line-clamp-2"> </p>'), yl = /* @__PURE__ */ C('<div class="flex-grow"></div>'), ml = /* @__PURE__ */ C('<span class="px-2 py-0.5 rounded text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"> </span>'), wl = /* @__PURE__ */ C('<div class="flex flex-wrap gap-1 mb-3"></div>'), kl = /* @__PURE__ */ C('<span class="truncate max-w-[100px]"> </span>'), El = /* @__PURE__ */ C('<button disabled="" class="w-full py-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium cursor-default">Purchased</button>'), Sl = /* @__PURE__ */ C("<button> </button>"), Cl = /* @__PURE__ */ C('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 flex flex-col"><div class="flex justify-between items-start mb-3"><div class="flex items-center gap-3"><div class="w-11 h-11 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-xl"> </div> <div><h3 class="font-semibold text-gray-900 dark:text-white capitalize"> </h3> <p class="text-xs text-gray-500 dark:text-gray-400"> </p></div></div> <span> </span></div> <!> <!> <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3"><span> </span> <!></div> <!></div>'), Ml = /* @__PURE__ */ C('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"></div>'), Nl = /* @__PURE__ */ C('<div class="space-y-6"><div class="flex gap-3"><div class="flex-1 relative"><svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> <input type="text" placeholder="Search extensions..." class="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"/></div> <button class="px-5 py-2.5 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-lg transition-colors">Search</button></div> <!> <!></div>'), Al = /* @__PURE__ */ C('<div class="flex items-center justify-center py-16"><svg class="animate-spin h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>'), Tl = /* @__PURE__ */ C('<div class="text-center py-16 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl"><svg class="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg> <p class="text-gray-500 dark:text-gray-400 mb-4">No purchases yet</p> <button class="px-5 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-lg transition-colors">Browse Marketplace</button></div>'), Pl = /* @__PURE__ */ C('<span class="text-xs text-gray-500"> </span>'), Ol = /* @__PURE__ */ C('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex items-center justify-between"><div class="flex items-center gap-4"><div class="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center"><svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <div><h3 class="font-semibold text-gray-900 dark:text-white capitalize"> </h3> <p class="text-sm text-gray-500 dark:text-gray-400"> </p></div></div> <div class="flex items-center gap-3"><span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"> </span> <!></div></div>'), Dl = /* @__PURE__ */ C('<div class="space-y-3"></div>'), jl = /* @__PURE__ */ C(`<div class="space-y-6"><div><h2 class="text-xl font-semibold text-gray-900 dark:text-white">My Purchases</h2> <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Extensions you've acquired</p></div> <!></div>`), Il = /* @__PURE__ */ C('<div class="flex items-center justify-center py-16"><svg class="animate-spin h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span class="ml-3 text-gray-500">Checking developer license...</span></div>'), Fl = /* @__PURE__ */ jr('<svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>'), Rl = /* @__PURE__ */ C('<div class="text-center py-16"><div class="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6"><svg class="w-10 h-10 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg></div> <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Become a Developer</h3> <p class="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">Get a developer license to publish and sell extensions on the marketplace.</p> <p class="text-3xl font-bold text-gray-900 dark:text-white mb-6">100 ICP <span class="text-sm font-normal text-gray-500">/ year</span></p> <button class="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors"><!> Get Developer License</button></div>'), Ll = /* @__PURE__ */ C("<option> </option>"), zl = /* @__PURE__ */ C("<option> </option>"), Bl = /* @__PURE__ */ jr('<svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>'), ql = /* @__PURE__ */ C('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6"><h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-5">Publish Extension</h3> <form class="space-y-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label for="pub-ext-id" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Extension ID</label> <input id="pub-ext-id" type="text" placeholder="my_extension" required="" class="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"/></div> <div><label for="pub-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label> <input id="pub-name" type="text" placeholder="My Extension" required="" class="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"/></div></div> <div><label for="pub-desc" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label> <textarea id="pub-desc" placeholder="Describe your extension..." required="" class="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none"></textarea></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div><label for="pub-version" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Version</label> <input id="pub-version" type="text" placeholder="1.0.0" class="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"/></div> <div><label for="pub-price" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price (ICP)</label> <input id="pub-price" type="number" step="0.01" min="0" class="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"/></div> <div><label for="pub-icon" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Icon</label> <select id="pub-icon" class="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"></select></div></div> <div><label for="pub-url" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Download URL</label> <input id="pub-url" type="text" placeholder="https://..." required="" class="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"/></div> <div><label for="pub-cat" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label> <select id="pub-cat" class="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"><option>Select a category</option><!></select></div> <div class="flex justify-end gap-3 pt-2"><button type="button" class="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Cancel</button> <button type="submit" class="inline-flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors"><!> Publish</button></div></form></div>'), Hl = /* @__PURE__ */ C('<div class="text-center py-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl"><p class="text-gray-500 dark:text-gray-400">No published extensions yet</p></div>'), Vl = /* @__PURE__ */ C('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex items-center justify-between"><div class="flex items-center gap-4"><div class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-xl">📦</div> <div><h3 class="font-semibold text-gray-900 dark:text-white"> </h3> <p class="text-sm text-gray-500 dark:text-gray-400"> </p></div></div> <div class="flex items-center gap-3"><span> </span> <span class="text-sm text-gray-500"> </span> <button class="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors" title="Unpublish"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div></div>'), Ul = /* @__PURE__ */ C('<div class="space-y-3"></div>'), Jl = /* @__PURE__ */ C('<div class="space-y-6"><div class="flex justify-between items-center"><div><h2 class="text-xl font-semibold text-gray-900 dark:text-white">My Extensions</h2> <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage your published extensions</p></div> <button class="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> New Extension</button></div> <!> <!></div>'), Wl = /* @__PURE__ */ C('<div class="flex items-center justify-center py-16"><svg class="animate-spin h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>'), Yl = /* @__PURE__ */ C('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 text-center"><div><span class="text-2xl"> </span></div> <p class="text-3xl font-bold text-gray-900 dark:text-white"> </p> <p class="text-sm text-gray-500 dark:text-gray-400"> </p></div>'), Gl = /* @__PURE__ */ jr('<svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>'), Kl = /* @__PURE__ */ jr('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>'), Ql = /* @__PURE__ */ C('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"></div> <div class="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 text-white"><div class="flex items-center justify-between flex-wrap gap-4"><div><p class="text-gray-300 text-sm mb-1">Pending Balance</p> <p class="text-4xl font-bold"> </p> <p class="text-gray-400 text-xs mt-2">Revenue is subject to platform commission</p></div> <button class="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"><!> Withdraw</button></div></div>', 1), Xl = /* @__PURE__ */ C('<div class="text-center py-16 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl"><p class="text-gray-500 dark:text-gray-400">No earnings data available</p></div>'), Zl = /* @__PURE__ */ C('<div class="space-y-6"><div><h2 class="text-xl font-semibold text-gray-900 dark:text-white">Earnings</h2> <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Your developer revenue and payout info</p></div> <!></div>'), $l = /* @__PURE__ */ C('<p class="text-sm text-gray-600 dark:text-gray-400 mt-1"> </p>'), eo = /* @__PURE__ */ C('<p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Payment will be deducted from your ICP balance.</p>'), to = /* @__PURE__ */ jr('<svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>'), ro = /* @__PURE__ */ C('<div class="fixed inset-0 z-50 flex items-center justify-center p-4"><div class="absolute inset-0 bg-black/50"></div> <div class="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full p-6"><h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4"> </h3> <div class="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-4"><h4 class="font-semibold text-gray-900 dark:text-white capitalize"> </h4> <!></div> <div class="flex justify-between items-center py-4 border-t border-b border-gray-200 dark:border-gray-700 mb-4"><span class="text-gray-600 dark:text-gray-400">Price</span> <span class="text-2xl font-bold text-gray-900 dark:text-white"> </span></div> <!> <div class="flex justify-end gap-3"><button class="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50">Cancel</button> <button class="inline-flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors"><!> </button></div></div></div>'), no = /* @__PURE__ */ C('<div class="max-w-5xl mx-auto px-4 py-6 space-y-6"><div><h1 class="text-3xl font-bold text-gray-900 dark:text-white">Marketplace</h1> <p class="text-gray-500 dark:text-gray-400 mt-1">Discover, purchase, and publish extensions</p></div> <!> <!> <div class="border-b border-gray-200 dark:border-gray-700"><nav class="flex gap-1 -mb-px"></nav></div> <div class="min-h-[400px]"><!></div></div> <!>', 1);
function ao(e, t) {
  wa(t, !0);
  let r = /* @__PURE__ */ Y("browse"), n = /* @__PURE__ */ Y(!0), a = /* @__PURE__ */ Y(""), i = /* @__PURE__ */ Y(""), u = /* @__PURE__ */ Y(ht([])), f = /* @__PURE__ */ Y(null), o = /* @__PURE__ */ Y(ht([])), d = /* @__PURE__ */ Y(""), v = /* @__PURE__ */ Y(!1), w = /* @__PURE__ */ Y(!0), x = /* @__PURE__ */ Y(!1);
  ht([]);
  let _ = /* @__PURE__ */ Y(null), b = /* @__PURE__ */ Y(!1), M = /* @__PURE__ */ Y(!1), g = /* @__PURE__ */ Y(!1), N = /* @__PURE__ */ Y(!1), B = /* @__PURE__ */ Y(null), V = /* @__PURE__ */ Y(!1), A = /* @__PURE__ */ Y(ht({
    extension_id: "",
    name: "",
    description: "",
    version: "1.0.0",
    price_icp: 0,
    download_url: "",
    icon: "layers",
    categories: ""
  }));
  const Oe = [
    { value: "public_services", label: "Public Services" },
    { value: "finances", label: "Finances" },
    { value: "governance", label: "Governance" },
    { value: "other", label: "Other" }
  ], gt = [
    { value: "layers", label: "Layers" },
    { value: "wallet", label: "Wallet" },
    { value: "chart", label: "Chart" },
    { value: "shield", label: "Shield" },
    { value: "user", label: "User" },
    { value: "bell", label: "Bell" },
    { value: "cog", label: "Settings" }
  ];
  let be = /* @__PURE__ */ Xe(() => new Set(s(o).map((c) => c.extension_id || c.id)));
  function De(c) {
    const h = typeof c == "bigint" ? Number(c) : c;
    return h === 0 ? "Free" : `${(h / 1e8).toFixed(2)} ICP`;
  }
  function it(c) {
    return `${((typeof c == "bigint" ? Number(c) : c) / 1e8).toFixed(4)} ICP`;
  }
  function oe(c) {
    const h = typeof c == "bigint" ? Number(c) : c;
    return h >= 1e3 ? `${(h / 1e3).toFixed(1)}k` : h.toString();
  }
  function nn(c) {
    return c ? new Date(c / 1e6).toLocaleDateString() : "-";
  }
  function Ir(c) {
    try {
      return JSON.parse(c || "[]");
    } catch {
      return [];
    }
  }
  function si(c) {
    return Oe.find((h) => h.value === c)?.label || c;
  }
  function je() {
    y(a, ""), y(i, "");
  }
  async function cr() {
    y(n, !0), je();
    try {
      const [c, h] = await Promise.all([
        t.ctx.backend.list_extensions(),
        t.ctx.backend.marketplace_stats().catch(() => null)
      ]), P = typeof c == "string" ? JSON.parse(c) : c, q = P?.listings ?? P?.data ?? (Array.isArray(P) ? P : []);
      if (y(
        u,
        q.map((U) => ({
          ...U,
          price_e8s: Number(U.price_e8s ?? 0),
          downloads: Number(U.downloads ?? 0)
        })),
        !0
      ), h) {
        const U = typeof h == "string" ? JSON.parse(h) : h;
        y(
          f,
          {
            total_extensions: Number(U.total_extensions ?? 0),
            total_developers: Number(U.total_developers ?? 0),
            total_purchases: Number(U.total_purchases ?? 0)
          },
          !0
        );
      }
    } catch (c) {
      y(a, c?.message || String(c), !0);
    } finally {
      y(n, !1);
    }
  }
  async function Bn() {
    if (!s(d).trim()) {
      await cr();
      return;
    }
    y(n, !0), je();
    try {
      const c = await t.ctx.backend.search_marketplace(s(d).trim()), h = typeof c == "string" ? JSON.parse(c) : c, P = h?.listings ?? h?.data ?? (Array.isArray(h) ? h : []);
      y(
        u,
        P.map((q) => ({
          ...q,
          price_e8s: Number(q.price_e8s ?? 0),
          downloads: Number(q.downloads ?? 0)
        })),
        !0
      );
    } catch (c) {
      y(a, c?.message || String(c), !0);
    } finally {
      y(n, !1);
    }
  }
  async function qn() {
    y(n, !0), je();
    try {
      const c = await t.ctx.backend.get_my_purchases(), h = typeof c == "string" ? JSON.parse(c) : c;
      y(
        o,
        (h?.data ?? (Array.isArray(h) ? h : [])).map((P) => ({
          ...P,
          price_paid_e8s: Number(P.price_paid_e8s ?? 0),
          purchased_at: Number(P.purchased_at ?? 0)
        })),
        !0
      );
    } catch (c) {
      y(a, c?.message || String(c), !0);
    } finally {
      y(n, !1);
    }
  }
  async function li(c) {
    y(B, c, !0), y(N, !0), y(V, !1), je();
  }
  async function oi() {
    if (s(B)) {
      y(V, !0), je();
      try {
        const c = await t.ctx.backend.buy_extension(s(B).extension_id || s(B).id || s(B).name), h = typeof c == "string" ? JSON.parse(c) : c;
        h?.Err ? y(a, h.Err, !0) : (y(N, !1), y(B, null), await cr(), await qn());
      } catch (c) {
        y(a, c?.message || String(c), !0);
      } finally {
        y(V, !1);
      }
    }
  }
  async function Hn() {
    y(w, !0);
    try {
      const c = await t.ctx.backend.check_developer_license(), h = typeof c == "string" ? JSON.parse(c) : c;
      h?.Ok ? y(v, h.Ok.is_active !== !1) : typeof h == "boolean" ? y(v, h, !0) : y(v, !1);
    } catch {
      y(v, !1);
    } finally {
      y(w, !1);
    }
  }
  async function ui() {
    y(x, !0), je();
    try {
      const c = await t.ctx.backend.purchase_developer_license(), h = typeof c == "string" ? JSON.parse(c) : c;
      h?.Err ? y(a, h.Err, !0) : (y(v, !0), await Hn());
    } catch (c) {
      y(a, c?.message || String(c), !0);
    } finally {
      y(x, !1);
    }
  }
  async function Vn() {
    y(n, !0), je();
    try {
      const c = await t.ctx.backend.get_my_developer_stats(), h = typeof c == "string" ? JSON.parse(c) : c;
      h?.Ok ? y(
        _,
        {
          total_extensions: Number(h.Ok.total_extensions ?? 0),
          total_downloads: Number(h.Ok.total_downloads ?? 0),
          total_sales: Number(h.Ok.total_sales ?? 0),
          total_revenue_e8s: Number(h.Ok.total_revenue_e8s ?? 0),
          pending_payout_e8s: Number(h.Ok.pending_payout_e8s ?? 0)
        },
        !0
      ) : h && !h.Err && y(
        _,
        {
          total_extensions: Number(h.total_extensions ?? 0),
          total_downloads: Number(h.total_downloads ?? 0),
          total_sales: Number(h.total_sales ?? 0),
          total_revenue_e8s: Number(h.total_revenue_e8s ?? 0),
          pending_payout_e8s: Number(h.pending_payout_e8s ?? 0)
        },
        !0
      );
    } catch (c) {
      y(a, c?.message || String(c), !0);
    } finally {
      y(n, !1);
    }
  }
  function Un() {
    y(
      A,
      {
        extension_id: "",
        name: "",
        description: "",
        version: "1.0.0",
        price_icp: 0,
        download_url: "",
        icon: "layers",
        categories: ""
      },
      !0
    );
  }
  async function fi() {
    y(M, !0), je();
    try {
      const c = Math.floor(s(A).price_icp * 1e8), h = JSON.stringify({
        extension_id: s(A).extension_id,
        name: s(A).name,
        description: s(A).description,
        version: s(A).version,
        price_e8s: c,
        download_url: s(A).download_url,
        icon: s(A).icon,
        categories: s(A).categories ? s(A).categories.split(",").map((U) => U.trim()) : []
      }), P = await t.ctx.backend.publish_extension(h), q = typeof P == "string" ? JSON.parse(P) : P;
      q?.Err ? y(a, q.Err, !0) : (y(b, !1), Un(), y(i, "Extension published successfully!"), await cr());
    } catch (c) {
      y(a, c?.message || String(c), !0);
    } finally {
      y(M, !1);
    }
  }
  async function ci(c) {
    je();
    try {
      const h = await t.ctx.backend.unpublish_extension(c), P = typeof h == "string" ? JSON.parse(h) : h;
      P?.Err ? y(a, P.Err, !0) : (y(i, "Extension unpublished."), await cr());
    } catch (h) {
      y(a, h?.message || String(h), !0);
    }
  }
  async function di() {
    y(g, !0), je();
    try {
      const c = await t.ctx.backend.request_payout(), h = typeof c == "string" ? JSON.parse(c) : c;
      h?.Err ? y(a, h.Err, !0) : (y(i, "Payout requested successfully!"), await Vn());
    } catch (c) {
      y(a, c?.message || String(c), !0);
    } finally {
      y(g, !1);
    }
  }
  function Jn(c) {
    y(r, c, !0), je();
  }
  fl(async () => {
    await Promise.all([cr(), qn(), Hn()]);
  }), Va(() => {
    s(r) === "earnings" && s(v) && !s(_) && Vn();
  });
  const Wn = [
    {
      id: "browse",
      label: "Browse",
      icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
    },
    {
      id: "purchased",
      label: "Purchased",
      icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
    },
    {
      id: "publish",
      label: "Publish",
      icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
    },
    {
      id: "earnings",
      label: "Earnings",
      icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
      devOnly: !0
    }
  ];
  let vi = /* @__PURE__ */ Xe(() => s(v) ? Wn : Wn.filter((c) => !c.devOnly));
  var Yn = no(), Gn = fn(Yn), Kn = m(p(Gn), 2);
  {
    var hi = (c) => {
      var h = dl(), P = m(p(h), 2), q = p(P), U = m(P, 2);
      ne(() => z(q, s(a))), de("click", U, () => y(a, "")), k(c, h);
    };
    $(Kn, (c) => {
      s(a) && c(hi);
    });
  }
  var Qn = m(Kn, 2);
  {
    var pi = (c) => {
      var h = vl(), P = m(p(h), 2), q = p(P), U = m(P, 2);
      ne(() => z(q, s(i))), de("click", U, () => y(i, "")), k(c, h);
    };
    $(Qn, (c) => {
      s(i) && c(pi);
    });
  }
  var Xn = m(Qn, 2), _i = p(Xn);
  lt(_i, 21, () => s(vi), Qt, (c, h) => {
    const P = /* @__PURE__ */ Xe(() => s(r) === s(h).id);
    var q = hl(), U = p(q), Ue = p(U), O = m(U, 2);
    {
      var H = (K) => {
        var ue = fa("Become Developer");
        k(K, ue);
      }, Z = (K) => {
        var ue = fa();
        ne(() => z(ue, s(h).label)), k(K, ue);
      };
      $(O, (K) => {
        s(h).id === "publish" && !s(v) && !s(w) ? K(H) : K(Z, -1);
      });
    }
    ne(() => {
      _r(q, 1, `flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${s(P) ? "border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300"}`), cn(Ue, "d", s(h).icon);
    }), de("click", q, () => Jn(s(h).id)), k(c, q);
  });
  var gi = m(Xn, 2), bi = p(gi);
  {
    var xi = (c) => {
      var h = Nl(), P = p(h), q = p(P), U = m(p(q), 2), Ue = m(q, 2), O = m(P, 2);
      {
        var H = (J) => {
          var fe = _l();
          lt(
            fe,
            21,
            () => [
              { label: "Extensions", value: s(f).total_extensions },
              { label: "Developers", value: s(f).total_developers },
              { label: "Purchases", value: s(f).total_purchases }
            ],
            Qt,
            (ce, E) => {
              var se = pl(), re = p(se), j = p(re), Q = m(re, 2), xe = p(Q);
              ne(() => {
                z(j, s(E).value), z(xe, s(E).label);
              }), k(ce, se);
            }
          ), k(J, fe);
        };
        $(O, (J) => {
          s(f) && J(H);
        });
      }
      var Z = m(O, 2);
      {
        var K = (J) => {
          var fe = gl();
          k(J, fe);
        }, ue = (J) => {
          var fe = bl();
          k(J, fe);
        }, he = (J) => {
          var fe = Ml();
          lt(fe, 21, () => s(u), (ce) => ce.extension_id || ce.id || ce.name, (ce, E) => {
            const se = /* @__PURE__ */ Xe(() => s(E).extension_id || s(E).id || s(E).name), re = /* @__PURE__ */ Xe(() => s(be).has(s(se))), j = /* @__PURE__ */ Xe(() => Number(s(E).price_e8s) === 0);
            var Q = Cl(), xe = p(Q), ye = p(xe), R = p(ye), ee = p(R), pe = m(R, 2), st = p(pe), bt = p(st), At = m(st, 2), Gt = p(At), xt = m(ye, 2), dr = p(xt), yt = m(xe, 2);
            {
              var Kt = (L) => {
                var X = xl(), me = p(X);
                ne(() => z(me, s(E).description)), k(L, X);
              }, vr = (L) => {
                var X = yl();
                k(L, X);
              };
              $(yt, (L) => {
                s(E).description ? L(Kt) : L(vr, -1);
              });
            }
            var Tt = m(yt, 2);
            {
              var Fr = (L) => {
                var X = wl();
                lt(X, 21, () => Ir(s(E).categories), Qt, (me, ln) => {
                  var Zn = ml(), Si = p(Zn);
                  ne((Ci) => z(Si, Ci), [() => si(s(ln))]), k(me, Zn);
                }), k(L, X);
              }, hr = /* @__PURE__ */ Xe(() => Ir(s(E).categories).length > 0);
              $(Tt, (L) => {
                s(hr) && L(Fr);
              });
            }
            var Rr = m(Tt, 2), Lr = p(Rr), zr = p(Lr), Br = m(Lr, 2);
            {
              var an = (L) => {
                var X = kl(), me = p(X);
                ne(
                  (ln) => {
                    cn(X, "title", s(E).developer), z(me, `${ln ?? ""}...`);
                  },
                  [() => s(E).developer.slice(0, 8)]
                ), k(L, X);
              };
              $(Br, (L) => {
                s(E).developer && L(an);
              });
            }
            var sn = m(Rr, 2);
            {
              var W = (L) => {
                var X = El();
                k(L, X);
              }, Je = (L) => {
                var X = Sl(), me = p(X);
                ne(() => {
                  _r(X, 1, `w-full py-2 rounded-lg text-sm font-medium transition-colors ${s(j) ? "bg-gray-800 hover:bg-gray-900 text-white" : "bg-indigo-600 hover:bg-indigo-700 text-white"}`), z(me, s(j) ? "Install" : "Purchase");
                }), de("click", X, () => li(s(E))), k(L, X);
              };
              $(sn, (L) => {
                s(re) ? L(W) : L(Je, -1);
              });
            }
            ne(
              (L, X, me) => {
                z(ee, s(E).icon === "wallet" ? "💰" : s(E).icon === "chart" ? "📊" : s(E).icon === "shield" ? "🛡" : s(E).icon === "user" ? "👤" : s(E).icon === "bell" ? "🔔" : s(E).icon === "cog" ? "⚙" : "📦"), z(bt, L), z(Gt, `v${(s(E).version || "1.0") ?? ""}`), _r(xt, 1, `px-2.5 py-0.5 rounded-full text-xs font-medium ${s(j) ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"}`), z(dr, X), z(zr, `${me ?? ""} downloads`);
              },
              [
                () => (s(E).name || s(se)).replace(/_/g, " "),
                () => De(s(E).price_e8s),
                () => oe(s(E).downloads)
              ]
            ), k(ce, Q);
          }), k(J, fe);
        };
        $(Z, (J) => {
          s(n) ? J(K) : s(u).length === 0 ? J(ue, 1) : J(he, -1);
        });
      }
      de("keydown", U, (J) => J.key === "Enter" && Bn()), Ot(U, () => s(d), (J) => y(d, J)), de("click", Ue, Bn), k(c, h);
    }, yi = (c) => {
      var h = jl(), P = m(p(h), 2);
      {
        var q = (O) => {
          var H = Al();
          k(O, H);
        }, U = (O) => {
          var H = Tl(), Z = m(p(H), 4);
          de("click", Z, () => Jn("browse")), k(O, H);
        }, Ue = (O) => {
          var H = Dl();
          lt(H, 21, () => s(o), (Z) => Z.purchase_id || Z.extension_id || Z.id, (Z, K) => {
            var ue = Ol(), he = p(ue), J = m(p(he), 2), fe = p(J), ce = p(fe), E = m(fe, 2), se = p(E), re = m(he, 2), j = p(re), Q = p(j), xe = m(j, 2);
            {
              var ye = (R) => {
                var ee = Pl(), pe = p(ee);
                ne(() => z(pe, `v${s(K).version ?? ""}`)), k(R, ee);
              };
              $(xe, (R) => {
                s(K).version && R(ye);
              });
            }
            ne(
              (R, ee, pe) => {
                z(ce, R), z(se, `Purchased ${ee ?? ""}`), z(Q, pe);
              },
              [
                () => (s(K).name || s(K).extension_id || s(K).id).replace(/_/g, " "),
                () => nn(s(K).purchased_at),
                () => De(s(K).price_paid_e8s)
              ]
            ), k(Z, ue);
          }), k(O, H);
        };
        $(P, (O) => {
          s(n) ? O(q) : s(o).length === 0 ? O(U, 1) : O(Ue, -1);
        });
      }
      k(c, h);
    }, mi = (c) => {
      var h = Qs(), P = fn(h);
      {
        var q = (O) => {
          var H = Il();
          k(O, H);
        }, U = (O) => {
          var H = Rl(), Z = m(p(H), 8), K = p(Z);
          {
            var ue = (he) => {
              var J = Fl();
              k(he, J);
            };
            $(K, (he) => {
              s(x) && he(ue);
            });
          }
          ne(() => Z.disabled = s(x)), de("click", Z, ui), k(O, H);
        }, Ue = (O) => {
          var H = Jl(), Z = p(H), K = m(p(Z), 2), ue = m(Z, 2);
          {
            var he = (E) => {
              var se = ql(), re = m(p(se), 2), j = p(re), Q = p(j), xe = m(p(Q), 2), ye = m(Q, 2), R = m(p(ye), 2), ee = m(j, 2), pe = m(p(ee), 2);
              cn(pe, "rows", 3);
              var st = m(ee, 2), bt = p(st), At = m(p(bt), 2), Gt = m(bt, 2), xt = m(p(Gt), 2), dr = m(Gt, 2), yt = m(p(dr), 2);
              lt(yt, 21, () => gt, Qt, (W, Je) => {
                var L = Ll(), X = p(L), me = {};
                ne(() => {
                  z(X, s(Je).label), me !== (me = s(Je).value) && (L.value = (L.__value = s(Je).value) ?? "");
                }), k(W, L);
              });
              var Kt = m(st, 2), vr = m(p(Kt), 2), Tt = m(Kt, 2), Fr = m(p(Tt), 2), hr = p(Fr);
              hr.value = hr.__value = "";
              var Rr = m(hr);
              lt(Rr, 17, () => Oe, Qt, (W, Je) => {
                var L = zl(), X = p(L), me = {};
                ne(() => {
                  z(X, s(Je).label), me !== (me = s(Je).value) && (L.value = (L.__value = s(Je).value) ?? "");
                }), k(W, L);
              });
              var Lr = m(Tt, 2), zr = p(Lr), Br = m(zr, 2), an = p(Br);
              {
                var sn = (W) => {
                  var Je = Bl();
                  k(W, Je);
                };
                $(an, (W) => {
                  s(M) && W(sn);
                });
              }
              ne(() => Br.disabled = s(M)), Js("submit", re, (W) => {
                W.preventDefault(), fi();
              }), Ot(xe, () => s(A).extension_id, (W) => s(A).extension_id = W), Ot(R, () => s(A).name, (W) => s(A).name = W), Ot(pe, () => s(A).description, (W) => s(A).description = W), Ot(At, () => s(A).version, (W) => s(A).version = W), Ot(xt, () => s(A).price_icp, (W) => s(A).price_icp = W), da(yt, () => s(A).icon, (W) => s(A).icon = W), Ot(vr, () => s(A).download_url, (W) => s(A).download_url = W), da(Fr, () => s(A).categories, (W) => s(A).categories = W), de("click", zr, () => y(b, !1)), k(E, se);
            };
            $(ue, (E) => {
              s(b) && E(he);
            });
          }
          var J = m(ue, 2);
          {
            var fe = (E) => {
              var se = Hl();
              k(E, se);
            }, ce = (E) => {
              var se = Ul();
              lt(se, 21, () => s(u), (re) => re.extension_id || re.id || re.name, (re, j) => {
                const Q = /* @__PURE__ */ Xe(() => s(j).extension_id || s(j).id || s(j).name), xe = /* @__PURE__ */ Xe(() => Number(s(j).price_e8s) === 0);
                var ye = Vl(), R = p(ye), ee = m(p(R), 2), pe = p(ee), st = p(pe), bt = m(pe, 2), At = p(bt), Gt = m(R, 2), xt = p(Gt), dr = p(xt), yt = m(xt, 2), Kt = p(yt), vr = m(yt, 2);
                ne(
                  (Tt) => {
                    z(st, s(j).name || s(Q)), z(At, `v${(s(j).version || "1.0") ?? ""}`), _r(xt, 1, `px-2.5 py-0.5 rounded-full text-xs font-medium ${s(xe) ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"}`), z(dr, Tt), z(Kt, `${s(j).downloads ?? 0 ?? ""} downloads`);
                  },
                  [() => De(s(j).price_e8s)]
                ), de("click", vr, () => ci(s(Q))), k(re, ye);
              }), k(E, se);
            };
            $(J, (E) => {
              s(u).length === 0 && !s(b) ? E(fe) : E(ce, -1);
            });
          }
          de("click", K, () => {
            y(b, !0), Un(), je();
          }), k(O, H);
        };
        $(P, (O) => {
          s(w) ? O(q) : s(v) ? O(Ue, -1) : O(U, 1);
        });
      }
      k(c, h);
    }, wi = (c) => {
      var h = Zl(), P = m(p(h), 2);
      {
        var q = (O) => {
          var H = Wl();
          k(O, H);
        }, U = (O) => {
          var H = Ql(), Z = fn(H);
          lt(
            Z,
            21,
            () => [
              {
                label: "Extensions",
                value: s(_).total_extensions,
                bg: "bg-blue-100 dark:bg-blue-900/30",
                iconColor: "text-blue-600 dark:text-blue-400",
                emoji: "📦"
              },
              {
                label: "Downloads",
                value: s(_).total_downloads,
                bg: "bg-green-100 dark:bg-green-900/30",
                iconColor: "text-green-600 dark:text-green-400",
                emoji: "📈"
              },
              {
                label: "Sales",
                value: s(_).total_sales,
                bg: "bg-purple-100 dark:bg-purple-900/30",
                iconColor: "text-purple-600 dark:text-purple-400",
                emoji: "🛒"
              },
              {
                label: "Total Revenue",
                value: it(s(_).total_revenue_e8s),
                bg: "bg-amber-100 dark:bg-amber-900/30",
                iconColor: "text-amber-600 dark:text-amber-400",
                emoji: "💰"
              }
            ],
            Qt,
            (j, Q) => {
              var xe = Yl(), ye = p(xe), R = p(ye), ee = p(R), pe = m(ye, 2), st = p(pe), bt = m(pe, 2), At = p(bt);
              ne(() => {
                _r(ye, 1, `w-12 h-12 ${s(Q).bg ?? ""} rounded-full flex items-center justify-center mx-auto mb-3`), z(ee, s(Q).emoji), z(st, s(Q).value), z(At, s(Q).label);
              }), k(j, xe);
            }
          );
          var K = m(Z, 2), ue = p(K), he = p(ue), J = m(p(he), 2), fe = p(J), ce = m(he, 2), E = p(ce);
          {
            var se = (j) => {
              var Q = Gl();
              k(j, Q);
            }, re = (j) => {
              var Q = Kl();
              k(j, Q);
            };
            $(E, (j) => {
              s(g) ? j(se) : j(re, -1);
            });
          }
          ne(
            (j) => {
              z(fe, j), ce.disabled = s(g) || s(_).pending_payout_e8s === 0;
            },
            [() => it(s(_).pending_payout_e8s)]
          ), de("click", ce, di), k(O, H);
        }, Ue = (O) => {
          var H = Xl();
          k(O, H);
        };
        $(P, (O) => {
          s(n) ? O(q) : s(_) ? O(U, 1) : O(Ue, -1);
        });
      }
      k(c, h);
    };
    $(bi, (c) => {
      s(r) === "browse" ? c(xi) : s(r) === "purchased" ? c(yi, 1) : s(r) === "publish" ? c(mi, 2) : s(r) === "earnings" && c(wi, 3);
    });
  }
  var ki = m(Gn, 2);
  {
    var Ei = (c) => {
      const h = /* @__PURE__ */ Xe(() => Number(s(B).price_e8s) === 0);
      var P = ro(), q = m(p(P), 2), U = p(q), Ue = p(U), O = m(U, 2), H = p(O), Z = p(H), K = m(H, 2);
      {
        var ue = (R) => {
          var ee = $l(), pe = p(ee);
          ne(() => z(pe, s(B).description)), k(R, ee);
        };
        $(K, (R) => {
          s(B).description && R(ue);
        });
      }
      var he = m(O, 2), J = m(p(he), 2), fe = p(J), ce = m(he, 2);
      {
        var E = (R) => {
          var ee = eo();
          k(R, ee);
        };
        $(ce, (R) => {
          s(h) || R(E);
        });
      }
      var se = m(ce, 2), re = p(se), j = m(re, 2), Q = p(j);
      {
        var xe = (R) => {
          var ee = to();
          k(R, ee);
        };
        $(Q, (R) => {
          s(V) && R(xe);
        });
      }
      var ye = m(Q);
      ne(
        (R, ee) => {
          z(Ue, s(h) ? "Confirm Install" : "Confirm Purchase"), z(Z, R), z(fe, ee), re.disabled = s(V), j.disabled = s(V), z(ye, ` ${s(h) ? "Install" : "Purchase"}`);
        },
        [
          () => (s(B).name || s(B).extension_id || "").replace(/_/g, " "),
          () => De(s(B).price_e8s)
        ]
      ), de("click", P, () => {
        y(N, !1), y(B, null);
      }), de("keydown", P, (R) => R.key === "Escape" && (() => {
        y(N, !1), y(B, null);
      })()), de("click", q, (R) => R.stopPropagation()), de("keydown", q, () => {
      }), de("click", re, () => {
        y(N, !1), y(B, null);
      }), de("click", j, oi), k(c, P);
    };
    $(ki, (c) => {
      s(N) && s(B) && c(Ei);
    });
  }
  k(e, Yn), ka();
}
Ws(["click", "keydown"]);
function lo(e, t) {
  const r = Xs(ao, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        $s(r);
      } catch {
      }
    }
  };
}
export {
  lo as default
};
