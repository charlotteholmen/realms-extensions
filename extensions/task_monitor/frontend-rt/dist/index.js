var Qs = Object.defineProperty;
var pa = (e) => {
  throw TypeError(e);
};
var ei = (e, t, r) => t in e ? Qs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Pe = (e, t, r) => ei(e, typeof t != "symbol" ? t + "" : t, r), Tn = (e, t, r) => t.has(e) || pa("Cannot " + r);
var i = (e, t, r) => (Tn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), E = (e, t, r) => t.has(e) ? pa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), T = (e, t, r, n) => (Tn(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), I = (e, t, r) => (Tn(e, t, "access private method"), r);
var $n = Array.isArray, ti = Array.prototype.indexOf, Jt = Array.prototype.includes, dn = Array.from, ri = Object.defineProperty, gr = Object.getOwnPropertyDescriptor, ni = Object.prototype, ai = Array.prototype, si = Object.getPrototypeOf, ga = Object.isExtensible;
const ii = () => {
};
function li(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Pa() {
  var e, t, r = new Promise((n, a) => {
    e = n, t = a;
  });
  return { promise: r, resolve: e, reject: t };
}
const re = 2, Zt = 4, cn = 8, Da = 1 << 24, Ge = 16, Oe = 32, gt = 64, Pn = 128, Ce = 512, K = 1024, te = 2048, We = 4096, ie = 8192, Se = 16384, zt = 32768, ba = 1 << 25, Xt = 65536, Dn = 1 << 17, oi = 1 << 18, rr = 1 << 19, fi = 1 << 20, lt = 1 << 25, jt = 65536, sn = 1 << 21, wr = 1 << 22, _t = 1 << 23, br = Symbol("$state"), tt = new class extends Error {
  constructor() {
    super(...arguments);
    Pe(this, "name", "StaleReactionError");
    Pe(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function ui() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function di(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function ci(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function vi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function hi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function _i() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function pi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function gi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function bi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function mi() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const yi = 1, xi = 2, wi = 16, Fa = 1, ki = 2, X = Symbol(), Ei = "http://www.w3.org/1999/xhtml";
function Ci() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Si() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Mi() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function ja(e) {
  return e === this.v;
}
function Ti(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function La(e) {
  return !Ti(e, this.v);
}
let Te = null;
function Qt(e) {
  Te = e;
}
function Oa(e, t = !1, r) {
  Te = {
    p: Te,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      P
    ),
    l: null
  };
}
function za(e) {
  var t = (
    /** @type {ComponentContext} */
    Te
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      is(n);
  }
  return t.i = !0, Te = t.p, /** @type {T} */
  {};
}
function Ba() {
  return !0;
}
let Et = [];
function Ia() {
  var e = Et;
  Et = [], li(e);
}
function $t(e) {
  if (Et.length === 0 && !mr) {
    var t = Et;
    queueMicrotask(() => {
      t === Et && Ia();
    });
  }
  Et.push(e);
}
function Ai() {
  for (; Et.length > 0; )
    Ia();
}
function Ha(e) {
  var t = P;
  if (t === null)
    return A.f |= _t, e;
  if ((t.f & zt) === 0 && (t.f & Zt) === 0)
    throw e;
  ht(e, t);
}
function ht(e, t) {
  for (; t !== null; ) {
    if ((t.f & Pn) !== 0) {
      if ((t.f & zt) === 0)
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
const Ni = -7169;
function U(e, t) {
  e.f = e.f & Ni | t;
}
function Un(e) {
  (e.f & Ce) !== 0 || e.deps === null ? U(e, K) : U(e, We);
}
function qa(e) {
  if (e !== null)
    for (const t of e)
      (t.f & re) === 0 || (t.f & jt) === 0 || (t.f ^= jt, qa(
        /** @type {Derived} */
        t.deps
      ));
}
function Va(e, t, r) {
  (e.f & te) !== 0 ? t.add(e) : (e.f & We) !== 0 && r.add(e), qa(e.deps), U(e, K);
}
const wt = /* @__PURE__ */ new Set();
let k = null, je = null, Fn = null, mr = !1, An = !1, Vt = null, Xr = null;
var ma = 0;
let Ri = 1;
var Ut, Yt, Mt, rt, $e, Cr, ve, Sr, ct, nt, Ue, Gt, Wt, Tt, G, Qr, $a, en, jn, tn, Pi;
const on = class on {
  constructor() {
    E(this, G);
    Pe(this, "id", Ri++);
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
    E(this, Ut, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, Yt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, Mt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    E(this, rt, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    E(this, $e, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    E(this, Cr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    E(this, ve, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    E(this, Sr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    E(this, ct, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    E(this, nt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    E(this, Ue, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    E(this, Gt, /* @__PURE__ */ new Set());
    Pe(this, "is_fork", !1);
    E(this, Wt, !1);
    /** @type {Set<Batch>} */
    E(this, Tt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    i(this, Ue).has(t) || i(this, Ue).set(t, { d: [], m: [] }), i(this, Gt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = i(this, Ue).get(t);
    if (n) {
      i(this, Ue).delete(t);
      for (var a of n.d)
        U(a, te), r(a);
      for (a of n.m)
        U(a, We), r(a);
    }
    i(this, Gt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== X && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & _t) === 0 && (this.current.set(t, [r, n]), je?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    k = this;
  }
  deactivate() {
    k = null, je = null;
  }
  flush() {
    try {
      An = !0, k = this, I(this, G, en).call(this);
    } finally {
      ma = 0, Fn = null, Vt = null, Xr = null, An = !1, k = null, je = null, Pt.clear();
    }
  }
  discard() {
    for (const t of i(this, Yt)) t(this);
    i(this, Yt).clear(), i(this, Mt).clear(), wt.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    i(this, Sr).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = i(this, rt).get(r) ?? 0;
    if (i(this, rt).set(r, n + 1), t) {
      let a = i(this, $e).get(r) ?? 0;
      i(this, $e).set(r, a + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let a = i(this, rt).get(r) ?? 0;
    if (a === 1 ? i(this, rt).delete(r) : i(this, rt).set(r, a - 1), t) {
      let s = i(this, $e).get(r) ?? 0;
      s === 1 ? i(this, $e).delete(r) : i(this, $e).set(r, s - 1);
    }
    i(this, Wt) || n || (T(this, Wt, !0), $t(() => {
      T(this, Wt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      i(this, ct).add(n);
    for (const n of r)
      i(this, nt).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    i(this, Ut).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    i(this, Yt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    i(this, Mt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of i(this, Mt)) t(this);
    i(this, Mt).clear();
  }
  settled() {
    return (i(this, Cr) ?? T(this, Cr, Pa())).promise;
  }
  static ensure() {
    if (k === null) {
      const t = k = new on();
      An || (wt.add(k), mr || $t(() => {
        k === t && t.flush();
      }));
    }
    return k;
  }
  apply() {
    {
      je = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Fn = t, t.b?.is_pending && (t.f & (Zt | cn | Da)) !== 0 && (t.f & zt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Vt !== null && r === P && (A === null || (A.f & re) === 0))
        return;
      if ((n & (gt | Oe)) !== 0) {
        if ((n & K) === 0)
          return;
        r.f ^= K;
      }
    }
    i(this, ve).push(r);
  }
};
Ut = new WeakMap(), Yt = new WeakMap(), Mt = new WeakMap(), rt = new WeakMap(), $e = new WeakMap(), Cr = new WeakMap(), ve = new WeakMap(), Sr = new WeakMap(), ct = new WeakMap(), nt = new WeakMap(), Ue = new WeakMap(), Gt = new WeakMap(), Wt = new WeakMap(), Tt = new WeakMap(), G = new WeakSet(), Qr = function() {
  return this.is_fork || i(this, $e).size > 0;
}, $a = function() {
  for (const n of i(this, Tt))
    for (const a of i(n, $e).keys()) {
      for (var t = !1, r = a; r.parent !== null; ) {
        if (i(this, Ue).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, en = function() {
  var l;
  if (ma++ > 1e3 && (wt.delete(this), Fi()), !I(this, G, Qr).call(this)) {
    for (const o of i(this, ct))
      i(this, nt).delete(o), U(o, te), this.schedule(o);
    for (const o of i(this, nt))
      U(o, We), this.schedule(o);
  }
  const t = i(this, ve);
  T(this, ve, []), this.apply();
  var r = Vt = [], n = [], a = Xr = [];
  for (const o of t)
    try {
      I(this, G, jn).call(this, o, r, n);
    } catch (u) {
      throw Ga(o), u;
    }
  if (k = null, a.length > 0) {
    var s = on.ensure();
    for (const o of a)
      s.schedule(o);
  }
  if (Vt = null, Xr = null, I(this, G, Qr).call(this) || I(this, G, $a).call(this)) {
    I(this, G, tn).call(this, n), I(this, G, tn).call(this, r);
    for (const [o, u] of i(this, Ue))
      Ya(o, u);
  } else {
    i(this, rt).size === 0 && wt.delete(this), i(this, ct).clear(), i(this, nt).clear();
    for (const o of i(this, Ut)) o(this);
    i(this, Ut).clear(), ya(n), ya(r), i(this, Cr)?.resolve();
  }
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    k
  );
  if (i(this, ve).length > 0) {
    const o = f ?? (f = this);
    i(o, ve).push(...i(this, ve).filter((u) => !i(o, ve).includes(u)));
  }
  f !== null && (wt.add(f), I(l = f, G, en).call(l));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
jn = function(t, r, n) {
  t.f ^= K;
  for (var a = t.first; a !== null; ) {
    var s = a.f, f = (s & (Oe | gt)) !== 0, l = f && (s & K) !== 0, o = l || (s & ie) !== 0 || i(this, Ue).has(a);
    if (!o && a.fn !== null) {
      f ? a.f ^= K : (s & Zt) !== 0 ? r.push(a) : Pr(a) && ((s & Ge) !== 0 && i(this, nt).add(a), tr(a));
      var u = a.first;
      if (u !== null) {
        a = u;
        continue;
      }
    }
    for (; a !== null; ) {
      var h = a.next;
      if (h !== null) {
        a = h;
        break;
      }
      a = a.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
tn = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Va(t[r], i(this, ct), i(this, nt));
}, Pi = function() {
  var h, b, g;
  for (const _ of wt) {
    var t = _.id < this.id, r = [];
    for (const [c, [S, w]] of this.current) {
      if (_.current.has(c)) {
        var n = (
          /** @type {[any, boolean]} */
          _.current.get(c)[0]
        );
        if (t && S !== n)
          _.current.set(c, [S, w]);
        else
          continue;
      }
      r.push(c);
    }
    var a = [..._.current.keys()].filter((c) => !this.current.has(c));
    if (a.length === 0)
      t && _.discard();
    else if (r.length > 0) {
      if (t)
        for (const c of i(this, Gt))
          _.unskip_effect(c, (S) => {
            var w;
            (S.f & (Ge | wr)) !== 0 ? _.schedule(S) : I(w = _, G, tn).call(w, [S]);
          });
      _.activate();
      var s = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (var l of r)
        Ua(l, a, s, f);
      f = /* @__PURE__ */ new Map();
      var o = [..._.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of i(this, Sr))
        (c.f & (Se | ie | Dn)) === 0 && Yn(c, o, f) && ((c.f & (wr | Ge)) !== 0 ? (U(c, te), _.schedule(c)) : i(_, ct).add(c));
      if (i(_, ve).length > 0) {
        _.apply();
        for (var u of i(_, ve))
          I(h = _, G, jn).call(h, u, [], []);
        T(_, ve, []);
      }
      _.deactivate();
    }
  }
  for (const _ of wt)
    i(_, Tt).has(this) && (i(_, Tt).delete(this), i(_, Tt).size === 0 && !I(b = _, G, Qr).call(b) && (_.activate(), I(g = _, G, en).call(g)));
};
let Lt = on;
function Di(e) {
  var t = mr;
  mr = !0;
  try {
    for (var r; ; ) {
      if (Ai(), k === null)
        return (
          /** @type {T} */
          r
        );
      k.flush();
    }
  } finally {
    mr = t;
  }
}
function Fi() {
  try {
    _i();
  } catch (e) {
    ht(e, Fn);
  }
}
let et = null;
function ya(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Se | ie)) === 0 && Pr(n) && (et = /* @__PURE__ */ new Set(), tr(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && us(n), et?.size > 0)) {
        Pt.clear();
        for (const a of et) {
          if ((a.f & (Se | ie)) !== 0) continue;
          const s = [a];
          let f = a.parent;
          for (; f !== null; )
            et.has(f) && (et.delete(f), s.push(f)), f = f.parent;
          for (let l = s.length - 1; l >= 0; l--) {
            const o = s[l];
            (o.f & (Se | ie)) === 0 && tr(o);
          }
        }
        et.clear();
      }
    }
    et = null;
  }
}
function Ua(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const a of e.reactions) {
      const s = a.f;
      (s & re) !== 0 ? Ua(
        /** @type {Derived} */
        a,
        t,
        r,
        n
      ) : (s & (wr | Ge)) !== 0 && (s & te) === 0 && Yn(a, t, n) && (U(a, te), Gn(
        /** @type {Effect} */
        a
      ));
    }
}
function Yn(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const a of e.deps) {
      if (Jt.call(t, a))
        return !0;
      if ((a.f & re) !== 0 && Yn(
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
function Gn(e) {
  k.schedule(e);
}
function Ya(e, t) {
  if (!((e.f & Oe) !== 0 && (e.f & K) !== 0)) {
    (e.f & te) !== 0 ? t.d.push(e) : (e.f & We) !== 0 && t.m.push(e), U(e, K);
    for (var r = e.first; r !== null; )
      Ya(r, t), r = r.next;
  }
}
function Ga(e) {
  U(e, K);
  for (var t = e.first; t !== null; )
    Ga(t), t = t.next;
}
function ji(e) {
  let t = 0, r = Ot(0), n;
  return () => {
    Zn() && (d(r), os(() => (t === 0 && (n = ys(() => e(() => yr(r)))), t += 1, () => {
      $t(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, yr(r));
      });
    })));
  };
}
var Li = Xt | rr;
function Oi(e, t, r, n) {
  new zi(e, t, r, n);
}
var xe, Vn, we, At, fe, ke, se, he, at, Nt, vt, Kt, Mr, Tr, st, fn, $, Bi, Ii, Hi, Ln, rn, nn, On, zn;
class zi {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, a) {
    E(this, $);
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
    E(this, xe);
    /** @type {TemplateNode | null} */
    E(this, Vn, null);
    /** @type {BoundaryProps} */
    E(this, we);
    /** @type {((anchor: Node) => void)} */
    E(this, At);
    /** @type {Effect} */
    E(this, fe);
    /** @type {Effect | null} */
    E(this, ke, null);
    /** @type {Effect | null} */
    E(this, se, null);
    /** @type {Effect | null} */
    E(this, he, null);
    /** @type {DocumentFragment | null} */
    E(this, at, null);
    E(this, Nt, 0);
    E(this, vt, 0);
    E(this, Kt, !1);
    /** @type {Set<Effect>} */
    E(this, Mr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    E(this, Tr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    E(this, st, null);
    E(this, fn, ji(() => (T(this, st, Ot(i(this, Nt))), () => {
      T(this, st, null);
    })));
    T(this, xe, t), T(this, we, r), T(this, At, (s) => {
      var f = (
        /** @type {Effect} */
        P
      );
      f.b = this, f.f |= Pn, n(s);
    }), this.parent = /** @type {Effect} */
    P.b, this.transform_error = a ?? this.parent?.transform_error ?? ((s) => s), T(this, fe, Xn(() => {
      I(this, $, Ln).call(this);
    }, Li));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Va(t, i(this, Mr), i(this, Tr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!i(this, we).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    I(this, $, On).call(this, t, r), T(this, Nt, i(this, Nt) + t), !(!i(this, st) || i(this, Kt)) && (T(this, Kt, !0), $t(() => {
      T(this, Kt, !1), i(this, st) && er(i(this, st), i(this, Nt));
    }));
  }
  get_effect_pending() {
    return i(this, fn).call(this), d(
      /** @type {Source<number>} */
      i(this, st)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!i(this, we).onerror && !i(this, we).failed)
      throw t;
    k?.is_fork ? (i(this, ke) && k.skip_effect(i(this, ke)), i(this, se) && k.skip_effect(i(this, se)), i(this, he) && k.skip_effect(i(this, he)), k.on_fork_commit(() => {
      I(this, $, zn).call(this, t);
    })) : I(this, $, zn).call(this, t);
  }
}
xe = new WeakMap(), Vn = new WeakMap(), we = new WeakMap(), At = new WeakMap(), fe = new WeakMap(), ke = new WeakMap(), se = new WeakMap(), he = new WeakMap(), at = new WeakMap(), Nt = new WeakMap(), vt = new WeakMap(), Kt = new WeakMap(), Mr = new WeakMap(), Tr = new WeakMap(), st = new WeakMap(), fn = new WeakMap(), $ = new WeakSet(), Bi = function() {
  try {
    T(this, ke, Ee(() => i(this, At).call(this, i(this, xe))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Ii = function(t) {
  const r = i(this, we).failed;
  r && T(this, he, Ee(() => {
    r(
      i(this, xe),
      () => t,
      () => () => {
      }
    );
  }));
}, Hi = function() {
  const t = i(this, we).pending;
  t && (this.is_pending = !0, T(this, se, Ee(() => t(i(this, xe)))), $t(() => {
    var r = T(this, at, document.createDocumentFragment()), n = pt();
    r.append(n), T(this, ke, I(this, $, nn).call(this, () => Ee(() => i(this, At).call(this, n)))), i(this, vt) === 0 && (i(this, xe).before(r), T(this, at, null), Dt(
      /** @type {Effect} */
      i(this, se),
      () => {
        T(this, se, null);
      }
    ), I(this, $, rn).call(
      this,
      /** @type {Batch} */
      k
    ));
  }));
}, Ln = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), T(this, vt, 0), T(this, Nt, 0), T(this, ke, Ee(() => {
      i(this, At).call(this, i(this, xe));
    })), i(this, vt) > 0) {
      var t = T(this, at, document.createDocumentFragment());
      ta(i(this, ke), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        i(this, we).pending
      );
      T(this, se, Ee(() => r(i(this, xe))));
    } else
      I(this, $, rn).call(
        this,
        /** @type {Batch} */
        k
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
rn = function(t) {
  this.is_pending = !1, t.transfer_effects(i(this, Mr), i(this, Tr));
}, /**
 * @template T
 * @param {() => T} fn
 */
nn = function(t) {
  var r = P, n = A, a = Te;
  Ke(i(this, fe)), Ae(i(this, fe)), Qt(i(this, fe).ctx);
  try {
    return Lt.ensure(), t();
  } catch (s) {
    return Ha(s), null;
  } finally {
    Ke(r), Ae(n), Qt(a);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
On = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && I(n = this.parent, $, On).call(n, t, r);
    return;
  }
  T(this, vt, i(this, vt) + t), i(this, vt) === 0 && (I(this, $, rn).call(this, r), i(this, se) && Dt(i(this, se), () => {
    T(this, se, null);
  }), i(this, at) && (i(this, xe).before(i(this, at)), T(this, at, null)));
}, /**
 * @param {unknown} error
 */
zn = function(t) {
  i(this, ke) && (de(i(this, ke)), T(this, ke, null)), i(this, se) && (de(i(this, se)), T(this, se, null)), i(this, he) && (de(i(this, he)), T(this, he, null));
  var r = i(this, we).onerror;
  let n = i(this, we).failed;
  var a = !1, s = !1;
  const f = () => {
    if (a) {
      Mi();
      return;
    }
    a = !0, s && mi(), i(this, he) !== null && Dt(i(this, he), () => {
      T(this, he, null);
    }), I(this, $, nn).call(this, () => {
      I(this, $, Ln).call(this);
    });
  }, l = (o) => {
    try {
      s = !0, r?.(o, f), s = !1;
    } catch (u) {
      ht(u, i(this, fe) && i(this, fe).parent);
    }
    n && T(this, he, I(this, $, nn).call(this, () => {
      try {
        return Ee(() => {
          var u = (
            /** @type {Effect} */
            P
          );
          u.b = this, u.f |= Pn, n(
            i(this, xe),
            () => o,
            () => f
          );
        });
      } catch (u) {
        return ht(
          u,
          /** @type {Effect} */
          i(this, fe).parent
        ), null;
      }
    }));
  };
  $t(() => {
    var o;
    try {
      o = this.transform_error(t);
    } catch (u) {
      ht(u, i(this, fe) && i(this, fe).parent);
      return;
    }
    o !== null && typeof o == "object" && typeof /** @type {any} */
    o.then == "function" ? o.then(
      l,
      /** @param {unknown} e */
      (u) => ht(u, i(this, fe) && i(this, fe).parent)
    ) : l(o);
  });
};
function qi(e, t, r, n) {
  const a = Wn;
  var s = e.filter((g) => !g.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(a));
    return;
  }
  var f = (
    /** @type {Effect} */
    P
  ), l = Vi(), o = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((g) => g.promise)) : null;
  function u(g) {
    l();
    try {
      n(g);
    } catch (_) {
      (f.f & Se) === 0 && ht(_, f);
    }
    ln();
  }
  if (r.length === 0) {
    o.then(() => u(t.map(a)));
    return;
  }
  var h = Wa();
  function b() {
    Promise.all(r.map((g) => /* @__PURE__ */ $i(g))).then((g) => u([...t.map(a), ...g])).catch((g) => ht(g, f)).finally(() => h());
  }
  o ? o.then(() => {
    l(), b(), ln();
  }) : b();
}
function Vi() {
  var e = (
    /** @type {Effect} */
    P
  ), t = A, r = Te, n = (
    /** @type {Batch} */
    k
  );
  return function(s = !0) {
    Ke(e), Ae(t), Qt(r), s && (e.f & Se) === 0 && (n?.activate(), n?.apply());
  };
}
function ln(e = !0) {
  Ke(null), Ae(null), Qt(null), e && k?.deactivate();
}
function Wa() {
  var e = (
    /** @type {Effect} */
    P
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    k
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (a = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, a);
  };
}
// @__NO_SIDE_EFFECTS__
function Wn(e) {
  var t = re | te;
  return P !== null && (P.f |= rr), {
    ctx: Te,
    deps: null,
    effects: null,
    equals: ja,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      X
    ),
    wv: 0,
    parent: P,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function $i(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    P
  );
  n === null && ui();
  var a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Ot(
    /** @type {V} */
    X
  ), f = !A, l = /* @__PURE__ */ new Map();
  return sl(() => {
    var o = (
      /** @type {Effect} */
      P
    ), u = Pa();
    a = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(ln);
    } catch (_) {
      u.reject(_), ln();
    }
    var h = (
      /** @type {Batch} */
      k
    );
    if (f) {
      if ((o.f & zt) !== 0)
        var b = Wa();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        l.get(h)?.reject(tt), l.delete(h);
      else {
        for (const _ of l.values())
          _.reject(tt);
        l.clear();
      }
      l.set(h, u);
    }
    const g = (_, c = void 0) => {
      if (b) {
        var S = c === tt;
        b(S);
      }
      if (!(c === tt || (o.f & Se) !== 0)) {
        if (h.activate(), c)
          s.f |= _t, er(s, c);
        else {
          (s.f & _t) !== 0 && (s.f ^= _t), er(s, _);
          for (const [w, M] of l) {
            if (l.delete(w), w === h) break;
            M.reject(tt);
          }
        }
        h.deactivate();
      }
    };
    u.promise.then(g, (_) => g(null, _ || "unknown"));
  }), ss(() => {
    for (const o of l.values())
      o.reject(tt);
  }), new Promise((o) => {
    function u(h) {
      function b() {
        h === a ? o(s) : u(a);
      }
      h.then(b, b);
    }
    u(a);
  });
}
// @__NO_SIDE_EFFECTS__
function kt(e) {
  const t = /* @__PURE__ */ Wn(e);
  return vs(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ui(e) {
  const t = /* @__PURE__ */ Wn(e);
  return t.equals = La, t;
}
function Yi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      de(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Kn(e) {
  var t, r = P, n = e.parent;
  if (!bt && n !== null && (n.f & (Se | ie)) !== 0)
    return Ci(), e.v;
  Ke(n);
  try {
    e.f &= ~jt, Yi(e), t = gs(e);
  } finally {
    Ke(r);
  }
  return t;
}
function Ka(e) {
  var t = Kn(e);
  if (!e.equals(t) && (e.wv = _s(), (!k?.is_fork || e.deps === null) && (k !== null ? k.capture(e, t, !0) : e.v = t, e.deps === null))) {
    U(e, K);
    return;
  }
  bt || (je !== null ? (Zn() || k?.is_fork) && je.set(e, t) : Un(e));
}
function Gi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(tt), t.teardown = ii, t.ac = null, kr(t, 0), Qn(t));
}
function Ja(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && tr(t);
}
let Bn = /* @__PURE__ */ new Set();
const Pt = /* @__PURE__ */ new Map();
let Za = !1;
function Ot(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ja,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function q(e, t) {
  const r = Ot(e);
  return vs(r), r;
}
// @__NO_SIDE_EFFECTS__
function Wi(e, t = !1, r = !0) {
  const n = Ot(e);
  return t || (n.equals = La), n;
}
function D(e, t, r = !1) {
  A !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Le || (A.f & Dn) !== 0) && Ba() && (A.f & (re | Ge | wr | Dn)) !== 0 && (Me === null || !Jt.call(Me, e)) && bi();
  let n = r ? Fe(t) : t;
  return er(e, n, Xr);
}
function er(e, t, r = null) {
  if (!e.equals(t)) {
    Pt.set(e, bt ? t : e.v);
    var n = Lt.ensure();
    if (n.capture(e, t), (e.f & re) !== 0) {
      const a = (
        /** @type {Derived} */
        e
      );
      (e.f & te) !== 0 && Kn(a), je === null && Un(a);
    }
    e.wv = _s(), Xa(e, te, r), P !== null && (P.f & K) !== 0 && (P.f & (Oe | gt)) === 0 && (ye === null ? ol([e]) : ye.push(e)), !n.is_fork && Bn.size > 0 && !Za && Ki();
  }
  return t;
}
function Ki() {
  Za = !1;
  for (const e of Bn)
    (e.f & K) !== 0 && U(e, We), Pr(e) && tr(e);
  Bn.clear();
}
function Ji(e, t = 1) {
  var r = d(e);
  return D(e, t === 1 ? ++r : --r);
}
function yr(e) {
  D(e, e.v + 1);
}
function Xa(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, s = 0; s < a; s++) {
      var f = n[s], l = f.f, o = (l & te) === 0;
      if (o && U(f, t), (l & re) !== 0) {
        var u = (
          /** @type {Derived} */
          f
        );
        je?.delete(u), (l & jt) === 0 && (l & Ce && (P === null || (P.f & sn) === 0) && (f.f |= jt), Xa(u, We, r));
      } else if (o) {
        var h = (
          /** @type {Effect} */
          f
        );
        (l & Ge) !== 0 && et !== null && et.add(h), r !== null ? r.push(h) : Gn(h);
      }
    }
}
function Fe(e) {
  if (typeof e != "object" || e === null || br in e)
    return e;
  const t = si(e);
  if (t !== ni && t !== ai)
    return e;
  var r = /* @__PURE__ */ new Map(), n = $n(e), a = /* @__PURE__ */ q(0), s = Ft, f = (l) => {
    if (Ft === s)
      return l();
    var o = A, u = Ft;
    Ae(null), Ca(s);
    var h = l();
    return Ae(o), Ca(u), h;
  };
  return n && r.set("length", /* @__PURE__ */ q(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, o, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && pi();
        var h = r.get(o);
        return h === void 0 ? f(() => {
          var b = /* @__PURE__ */ q(u.value);
          return r.set(o, b), b;
        }) : D(h, u.value, !0), !0;
      },
      deleteProperty(l, o) {
        var u = r.get(o);
        if (u === void 0) {
          if (o in l) {
            const h = f(() => /* @__PURE__ */ q(X));
            r.set(o, h), yr(a);
          }
        } else
          D(u, X), yr(a);
        return !0;
      },
      get(l, o, u) {
        if (o === br)
          return e;
        var h = r.get(o), b = o in l;
        if (h === void 0 && (!b || gr(l, o)?.writable) && (h = f(() => {
          var _ = Fe(b ? l[o] : X), c = /* @__PURE__ */ q(_);
          return c;
        }), r.set(o, h)), h !== void 0) {
          var g = d(h);
          return g === X ? void 0 : g;
        }
        return Reflect.get(l, o, u);
      },
      getOwnPropertyDescriptor(l, o) {
        var u = Reflect.getOwnPropertyDescriptor(l, o);
        if (u && "value" in u) {
          var h = r.get(o);
          h && (u.value = d(h));
        } else if (u === void 0) {
          var b = r.get(o), g = b?.v;
          if (b !== void 0 && g !== X)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return u;
      },
      has(l, o) {
        if (o === br)
          return !0;
        var u = r.get(o), h = u !== void 0 && u.v !== X || Reflect.has(l, o);
        if (u !== void 0 || P !== null && (!h || gr(l, o)?.writable)) {
          u === void 0 && (u = f(() => {
            var g = h ? Fe(l[o]) : X, _ = /* @__PURE__ */ q(g);
            return _;
          }), r.set(o, u));
          var b = d(u);
          if (b === X)
            return !1;
        }
        return h;
      },
      set(l, o, u, h) {
        var b = r.get(o), g = o in l;
        if (n && o === "length")
          for (var _ = u; _ < /** @type {Source<number>} */
          b.v; _ += 1) {
            var c = r.get(_ + "");
            c !== void 0 ? D(c, X) : _ in l && (c = f(() => /* @__PURE__ */ q(X)), r.set(_ + "", c));
          }
        if (b === void 0)
          (!g || gr(l, o)?.writable) && (b = f(() => /* @__PURE__ */ q(void 0)), D(b, Fe(u)), r.set(o, b));
        else {
          g = b.v !== X;
          var S = f(() => Fe(u));
          D(b, S);
        }
        var w = Reflect.getOwnPropertyDescriptor(l, o);
        if (w?.set && w.set.call(h, u), !g) {
          if (n && typeof o == "string") {
            var M = (
              /** @type {Source<number>} */
              r.get("length")
            ), x = Number(o);
            Number.isInteger(x) && x >= M.v && D(M, x + 1);
          }
          yr(a);
        }
        return !0;
      },
      ownKeys(l) {
        d(a);
        var o = Reflect.ownKeys(l).filter((b) => {
          var g = r.get(b);
          return g === void 0 || g.v !== X;
        });
        for (var [u, h] of r)
          h.v !== X && !(u in l) && o.push(u);
        return o;
      },
      setPrototypeOf() {
        gi();
      }
    }
  );
}
function xa(e) {
  try {
    if (e !== null && typeof e == "object" && br in e)
      return e[br];
  } catch {
  }
  return e;
}
function Zi(e, t) {
  return Object.is(xa(e), xa(t));
}
var wa, Qa, es, ts;
function Xi() {
  if (wa === void 0) {
    wa = window, Qa = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    es = gr(t, "firstChild").get, ts = gr(t, "nextSibling").get, ga(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ga(r) && (r.__t = void 0);
  }
}
function pt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function it(e) {
  return (
    /** @type {TemplateNode | null} */
    es.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Rr(e) {
  return (
    /** @type {TemplateNode | null} */
    ts.call(e)
  );
}
function p(e, t) {
  return /* @__PURE__ */ it(e);
}
function ut(e, t = !1) {
  {
    var r = /* @__PURE__ */ it(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Rr(r) : r;
  }
}
function m(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Rr(n);
  return n;
}
function Qi(e) {
  e.textContent = "";
}
function rs() {
  return !1;
}
function ns(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ei, e, void 0)
  );
}
let ka = !1;
function el() {
  ka || (ka = !0, document.addEventListener(
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
function Jn(e) {
  var t = A, r = P;
  Ae(null), Ke(null);
  try {
    return e();
  } finally {
    Ae(t), Ke(r);
  }
}
function as(e, t, r, n = r) {
  e.addEventListener(t, () => Jn(r));
  const a = e.__on_r;
  a ? e.__on_r = () => {
    a(), n(!0);
  } : e.__on_r = () => n(!0), el();
}
function tl(e) {
  P === null && (A === null && hi(), vi()), bt && ci();
}
function rl(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ot(e, t) {
  var r = P;
  r !== null && (r.f & ie) !== 0 && (e |= ie);
  var n = {
    ctx: Te,
    deps: null,
    nodes: null,
    f: e | te | Ce,
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
  k?.register_created_effect(n);
  var a = n;
  if ((e & Zt) !== 0)
    Vt !== null ? Vt.push(n) : Lt.ensure().schedule(n);
  else if (t !== null) {
    try {
      tr(n);
    } catch (f) {
      throw de(n), f;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    (a.f & rr) === 0 && (a = a.first, (e & Ge) !== 0 && (e & Xt) !== 0 && a !== null && (a.f |= Xt));
  }
  if (a !== null && (a.parent = r, r !== null && rl(a, r), A !== null && (A.f & re) !== 0 && (e & gt) === 0)) {
    var s = (
      /** @type {Derived} */
      A
    );
    (s.effects ?? (s.effects = [])).push(a);
  }
  return n;
}
function Zn() {
  return A !== null && !Le;
}
function ss(e) {
  const t = ot(cn, null);
  return U(t, K), t.teardown = e, t;
}
function nl(e) {
  tl();
  var t = (
    /** @type {Effect} */
    P.f
  ), r = !A && (t & Oe) !== 0 && (t & zt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Te
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return is(e);
}
function is(e) {
  return ot(Zt | fi, e);
}
function al(e) {
  Lt.ensure();
  const t = ot(gt | rr, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Dt(t, () => {
      de(t), n(void 0);
    }) : (de(t), n(void 0));
  });
}
function ls(e) {
  return ot(Zt, e);
}
function sl(e) {
  return ot(wr | rr, e);
}
function os(e, t = 0) {
  return ot(cn | t, e);
}
function ae(e, t = [], r = [], n = []) {
  qi(n, t, r, (a) => {
    ot(cn, () => e(...a.map(d)));
  });
}
function Xn(e, t = 0) {
  var r = ot(Ge | t, e);
  return r;
}
function Ee(e) {
  return ot(Oe | rr, e);
}
function fs(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = bt, n = A;
    Ea(!0), Ae(null);
    try {
      t.call(null);
    } finally {
      Ea(r), Ae(n);
    }
  }
}
function Qn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const a = r.ac;
    a !== null && Jn(() => {
      a.abort(tt);
    });
    var n = r.next;
    (r.f & gt) !== 0 ? r.parent = null : de(r, t), r = n;
  }
}
function il(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Oe) === 0 && de(t), t = r;
  }
}
function de(e, t = !0) {
  var r = !1;
  (t || (e.f & oi) !== 0) && e.nodes !== null && e.nodes.end !== null && (ll(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), U(e, ba), Qn(e, t && !r), kr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  fs(e), e.f ^= ba, e.f |= Se;
  var a = e.parent;
  a !== null && a.first !== null && us(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ll(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Rr(e);
    e.remove(), e = r;
  }
}
function us(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Dt(e, t, r = !0) {
  var n = [];
  ds(e, n, !0);
  var a = () => {
    r && de(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var f = () => --s || a();
    for (var l of n)
      l.out(f);
  } else
    a();
}
function ds(e, t, r) {
  if ((e.f & ie) === 0) {
    e.f ^= ie;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const l of n)
        (l.is_global || r) && t.push(l);
    for (var a = e.first; a !== null; ) {
      var s = a.next;
      if ((a.f & gt) === 0) {
        var f = (a.f & Xt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (a.f & Oe) !== 0 && (e.f & Ge) !== 0;
        ds(a, t, f ? r : !1);
      }
      a = s;
    }
  }
}
function ea(e) {
  cs(e, !0);
}
function cs(e, t) {
  if ((e.f & ie) !== 0) {
    e.f ^= ie, (e.f & K) === 0 && (U(e, te), Lt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, a = (r.f & Xt) !== 0 || (r.f & Oe) !== 0;
      cs(r, a ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const f of s)
        (f.is_global || t) && f.in();
  }
}
function ta(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var a = r === n ? null : /* @__PURE__ */ Rr(r);
      t.append(r), r = a;
    }
}
let an = !1, bt = !1;
function Ea(e) {
  bt = e;
}
let A = null, Le = !1;
function Ae(e) {
  A = e;
}
let P = null;
function Ke(e) {
  P = e;
}
let Me = null;
function vs(e) {
  A !== null && (Me === null ? Me = [e] : Me.push(e));
}
let ue = null, ce = 0, ye = null;
function ol(e) {
  ye = e;
}
let hs = 1, Ct = 0, Ft = Ct;
function Ca(e) {
  Ft = e;
}
function _s() {
  return ++hs;
}
function Pr(e) {
  var t = e.f;
  if ((t & te) !== 0)
    return !0;
  if (t & re && (e.f &= ~jt), (t & We) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, a = 0; a < n; a++) {
      var s = r[a];
      if (Pr(
        /** @type {Derived} */
        s
      ) && Ka(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & Ce) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    je === null && U(e, K);
  }
  return !1;
}
function ps(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Me !== null && Jt.call(Me, e)))
    for (var a = 0; a < n.length; a++) {
      var s = n[a];
      (s.f & re) !== 0 ? ps(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? U(s, te) : (s.f & K) !== 0 && U(s, We), Gn(
        /** @type {Effect} */
        s
      ));
    }
}
function gs(e) {
  var S;
  var t = ue, r = ce, n = ye, a = A, s = Me, f = Te, l = Le, o = Ft, u = e.f;
  ue = /** @type {null | Value[]} */
  null, ce = 0, ye = null, A = (u & (Oe | gt)) === 0 ? e : null, Me = null, Qt(e.ctx), Le = !1, Ft = ++Ct, e.ac !== null && (Jn(() => {
    e.ac.abort(tt);
  }), e.ac = null);
  try {
    e.f |= sn;
    var h = (
      /** @type {Function} */
      e.fn
    ), b = h();
    e.f |= zt;
    var g = e.deps, _ = k?.is_fork;
    if (ue !== null) {
      var c;
      if (_ || kr(e, ce), g !== null && ce > 0)
        for (g.length = ce + ue.length, c = 0; c < ue.length; c++)
          g[ce + c] = ue[c];
      else
        e.deps = g = ue;
      if (Zn() && (e.f & Ce) !== 0)
        for (c = ce; c < g.length; c++)
          ((S = g[c]).reactions ?? (S.reactions = [])).push(e);
    } else !_ && g !== null && ce < g.length && (kr(e, ce), g.length = ce);
    if (Ba() && ye !== null && !Le && g !== null && (e.f & (re | We | te)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      ye.length; c++)
        ps(
          ye[c],
          /** @type {Effect} */
          e
        );
    if (a !== null && a !== e) {
      if (Ct++, a.deps !== null)
        for (let w = 0; w < r; w += 1)
          a.deps[w].rv = Ct;
      if (t !== null)
        for (const w of t)
          w.rv = Ct;
      ye !== null && (n === null ? n = ye : n.push(.../** @type {Source[]} */
      ye));
    }
    return (e.f & _t) !== 0 && (e.f ^= _t), b;
  } catch (w) {
    return Ha(w);
  } finally {
    e.f ^= sn, ue = t, ce = r, ye = n, A = a, Me = s, Qt(f), Le = l, Ft = o;
  }
}
function fl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = ti.call(r, e);
    if (n !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[n] = r[a], r.pop());
    }
  }
  if (r === null && (t.f & re) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ue === null || !Jt.call(ue, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & Ce) !== 0 && (s.f ^= Ce, s.f &= ~jt), s.v !== X && Un(s), Gi(s), kr(s, 0);
  }
}
function kr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      fl(e, r[n]);
}
function tr(e) {
  var t = e.f;
  if ((t & Se) === 0) {
    U(e, K);
    var r = P, n = an;
    P = e, an = !0;
    try {
      (t & (Ge | Da)) !== 0 ? il(e) : Qn(e), fs(e);
      var a = gs(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = hs;
      var s;
    } finally {
      an = n, P = r;
    }
  }
}
async function ul() {
  await Promise.resolve(), Di();
}
function d(e) {
  var t = e.f, r = (t & re) !== 0;
  if (A !== null && !Le) {
    var n = P !== null && (P.f & Se) !== 0;
    if (!n && (Me === null || !Jt.call(Me, e))) {
      var a = A.deps;
      if ((A.f & sn) !== 0)
        e.rv < Ct && (e.rv = Ct, ue === null && a !== null && a[ce] === e ? ce++ : ue === null ? ue = [e] : ue.push(e));
      else {
        (A.deps ?? (A.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [A] : Jt.call(s, A) || s.push(A);
      }
    }
  }
  if (bt && Pt.has(e))
    return Pt.get(e);
  if (r) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (bt) {
      var l = f.v;
      return ((f.f & K) === 0 && f.reactions !== null || ms(f)) && (l = Kn(f)), Pt.set(f, l), l;
    }
    var o = (f.f & Ce) === 0 && !Le && A !== null && (an || (A.f & Ce) !== 0), u = (f.f & zt) === 0;
    Pr(f) && (o && (f.f |= Ce), Ka(f)), o && !u && (Ja(f), bs(f));
  }
  if (je?.has(e))
    return je.get(e);
  if ((e.f & _t) !== 0)
    throw e.v;
  return e.v;
}
function bs(e) {
  if (e.f |= Ce, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & re) !== 0 && (t.f & Ce) === 0 && (Ja(
        /** @type {Derived} */
        t
      ), bs(
        /** @type {Derived} */
        t
      ));
}
function ms(e) {
  if (e.v === X) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Pt.has(t) || (t.f & re) !== 0 && ms(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ys(e) {
  var t = Le;
  try {
    return Le = !0, e();
  } finally {
    Le = t;
  }
}
const dl = ["touchstart", "touchmove"];
function cl(e) {
  return dl.includes(e);
}
const St = Symbol("events"), xs = /* @__PURE__ */ new Set(), In = /* @__PURE__ */ new Set();
function me(e, t, r) {
  (t[St] ?? (t[St] = {}))[e] = r;
}
function vl(e) {
  for (var t = 0; t < e.length; t++)
    xs.add(e[t]);
  for (var r of In)
    r(e);
}
let Sa = null;
function Ma(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, a = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    a[0] || e.target
  );
  Sa = e;
  var f = 0, l = Sa === e && e[St];
  if (l) {
    var o = a.indexOf(l);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[St] = t;
      return;
    }
    var u = a.indexOf(t);
    if (u === -1)
      return;
    o <= u && (f = o);
  }
  if (s = /** @type {Element} */
  a[f] || e.target, s !== t) {
    ri(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var h = A, b = P;
    Ae(null), Ke(null);
    try {
      for (var g, _ = []; s !== null; ) {
        var c = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var S = s[St]?.[n];
          S != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && S.call(s, e);
        } catch (w) {
          g ? _.push(w) : g = w;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        s = c;
      }
      if (g) {
        for (let w of _)
          queueMicrotask(() => {
            throw w;
          });
        throw g;
      }
    } finally {
      e[St] = t, delete e.currentTarget, Ae(h), Ke(b);
    }
  }
}
const hl = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function _l(e) {
  return (
    /** @type {string} */
    hl?.createHTML(e) ?? e
  );
}
function ws(e) {
  var t = ns("template");
  return t.innerHTML = _l(e.replaceAll("<!>", "<!---->")), t.content;
}
function Er(e, t) {
  var r = (
    /** @type {Effect} */
    P
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function j(e, t) {
  var r = (t & Fa) !== 0, n = (t & ki) !== 0, a, s = !e.startsWith("<!>");
  return () => {
    a === void 0 && (a = ws(s ? e : "<!>" + e), r || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ it(a)));
    var f = (
      /** @type {TemplateNode} */
      n || Qa ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ it(f)
      ), o = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      Er(l, o);
    } else
      Er(f, f);
    return f;
  };
}
// @__NO_SIDE_EFFECTS__
function pl(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), a = (t & Fa) !== 0, s = `<${r}>${n ? e : "<!>" + e}</${r}>`, f;
  return () => {
    if (!f) {
      var l = (
        /** @type {DocumentFragment} */
        ws(s)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ it(l)
      );
      if (a)
        for (f = document.createDocumentFragment(); /* @__PURE__ */ it(o); )
          f.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ it(o)
          );
      else
        f = /** @type {Element} */
        /* @__PURE__ */ it(o);
    }
    var u = (
      /** @type {TemplateNode} */
      f.cloneNode(!0)
    );
    if (a) {
      var h = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ it(u)
      ), b = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Er(h, b);
    } else
      Er(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function ze(e, t) {
  return /* @__PURE__ */ pl(e, t, "svg");
}
function gl() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = pt();
  return e.append(t, r), Er(t, r), e;
}
function C(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function F(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function bl(e, t) {
  return ml(e, t);
}
const Jr = /* @__PURE__ */ new Map();
function ml(e, { target: t, anchor: r, props: n = {}, events: a, context: s, intro: f = !0, transformError: l }) {
  Xi();
  var o = void 0, u = al(() => {
    var h = r ?? t.appendChild(pt());
    Oi(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (_) => {
        Oa({});
        var c = (
          /** @type {ComponentContext} */
          Te
        );
        s && (c.c = s), a && (n.$$events = a), o = e(_, n) || {}, za();
      },
      l
    );
    var b = /* @__PURE__ */ new Set(), g = (_) => {
      for (var c = 0; c < _.length; c++) {
        var S = _[c];
        if (!b.has(S)) {
          b.add(S);
          var w = cl(S);
          for (const ee of [t, document]) {
            var M = Jr.get(ee);
            M === void 0 && (M = /* @__PURE__ */ new Map(), Jr.set(ee, M));
            var x = M.get(S);
            x === void 0 ? (ee.addEventListener(S, Ma, { passive: w }), M.set(S, 1)) : M.set(S, x + 1);
          }
        }
      }
    };
    return g(dn(xs)), In.add(g), () => {
      for (var _ of b)
        for (const w of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            Jr.get(w)
          ), S = (
            /** @type {number} */
            c.get(_)
          );
          --S == 0 ? (w.removeEventListener(_, Ma), c.delete(_), c.size === 0 && Jr.delete(w)) : c.set(_, S);
        }
      In.delete(g), h !== r && h.parentNode?.removeChild(h);
    };
  });
  return Hn.set(o, u), o;
}
let Hn = /* @__PURE__ */ new WeakMap();
function yl(e, t) {
  const r = Hn.get(e);
  return r ? (Hn.delete(e), r(t)) : Promise.resolve();
}
var De, Ye, _e, Rt, Ar, Nr, un;
class xl {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Pe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    E(this, De, /* @__PURE__ */ new Map());
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
    E(this, Ye, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    E(this, _e, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    E(this, Rt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    E(this, Ar, !0);
    /**
     * @param {Batch} batch
     */
    E(this, Nr, (t) => {
      if (i(this, De).has(t)) {
        var r = (
          /** @type {Key} */
          i(this, De).get(t)
        ), n = i(this, Ye).get(r);
        if (n)
          ea(n), i(this, Rt).delete(r);
        else {
          var a = i(this, _e).get(r);
          a && (i(this, Ye).set(r, a.effect), i(this, _e).delete(r), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), n = a.effect);
        }
        for (const [s, f] of i(this, De)) {
          if (i(this, De).delete(s), s === t)
            break;
          const l = i(this, _e).get(f);
          l && (de(l.effect), i(this, _e).delete(f));
        }
        for (const [s, f] of i(this, Ye)) {
          if (s === r || i(this, Rt).has(s)) continue;
          const l = () => {
            if (Array.from(i(this, De).values()).includes(s)) {
              var u = document.createDocumentFragment();
              ta(f, u), u.append(pt()), i(this, _e).set(s, { effect: f, fragment: u });
            } else
              de(f);
            i(this, Rt).delete(s), i(this, Ye).delete(s);
          };
          i(this, Ar) || !n ? (i(this, Rt).add(s), Dt(f, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    E(this, un, (t) => {
      i(this, De).delete(t);
      const r = Array.from(i(this, De).values());
      for (const [n, a] of i(this, _e))
        r.includes(n) || (de(a.effect), i(this, _e).delete(n));
    });
    this.anchor = t, T(this, Ar, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      k
    ), a = rs();
    if (r && !i(this, Ye).has(t) && !i(this, _e).has(t))
      if (a) {
        var s = document.createDocumentFragment(), f = pt();
        s.append(f), i(this, _e).set(t, {
          effect: Ee(() => r(f)),
          fragment: s
        });
      } else
        i(this, Ye).set(
          t,
          Ee(() => r(this.anchor))
        );
    if (i(this, De).set(n, t), a) {
      for (const [l, o] of i(this, Ye))
        l === t ? n.unskip_effect(o) : n.skip_effect(o);
      for (const [l, o] of i(this, _e))
        l === t ? n.unskip_effect(o.effect) : n.skip_effect(o.effect);
      n.oncommit(i(this, Nr)), n.ondiscard(i(this, un));
    } else
      i(this, Nr).call(this, n);
  }
}
De = new WeakMap(), Ye = new WeakMap(), _e = new WeakMap(), Rt = new WeakMap(), Ar = new WeakMap(), Nr = new WeakMap(), un = new WeakMap();
function H(e, t, r = !1) {
  var n = new xl(e), a = r ? Xt : 0;
  function s(f, l) {
    n.ensure(f, l);
  }
  Xn(() => {
    var f = !1;
    t((l, o = 0) => {
      f = !0, s(o, l);
    }), f || s(-1, null);
  }, a);
}
function Ta(e, t) {
  return t;
}
function wl(e, t, r) {
  for (var n = [], a = t.length, s, f = t.length, l = 0; l < a; l++) {
    let b = t[l];
    Dt(
      b,
      () => {
        if (s) {
          if (s.pending.delete(b), s.done.add(b), s.pending.size === 0) {
            var g = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            qn(e, dn(s.done)), g.delete(s), g.size === 0 && (e.outrogroups = null);
          }
        } else
          f -= 1;
      },
      !1
    );
  }
  if (f === 0) {
    var o = n.length === 0 && r !== null;
    if (o) {
      var u = (
        /** @type {Element} */
        r
      ), h = (
        /** @type {Element} */
        u.parentNode
      );
      Qi(h), h.append(u), e.items.clear();
    }
    qn(e, t, !o);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function qn(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const f of e.pending.values())
      for (const l of f)
        n.add(
          /** @type {EachItem} */
          e.items.get(l).e
        );
  }
  for (var a = 0; a < t.length; a++) {
    var s = t[a];
    if (n?.has(s)) {
      s.f |= lt;
      const f = document.createDocumentFragment();
      ta(s, f);
    } else
      de(t[a], r);
  }
}
var Aa;
function Zr(e, t, r, n, a, s = null) {
  var f = e, l = /* @__PURE__ */ new Map();
  {
    var o = (
      /** @type {Element} */
      e
    );
    f = o.appendChild(pt());
  }
  var u = null, h = /* @__PURE__ */ Ui(() => {
    var x = r();
    return $n(x) ? x : x == null ? [] : dn(x);
  }), b, g = /* @__PURE__ */ new Map(), _ = !0;
  function c(x) {
    (M.effect.f & Se) === 0 && (M.pending.delete(x), M.fallback = u, kl(M, b, f, t, n), u !== null && (b.length === 0 ? (u.f & lt) === 0 ? ea(u) : (u.f ^= lt, pr(u, null, f)) : Dt(u, () => {
      u = null;
    })));
  }
  function S(x) {
    M.pending.delete(x);
  }
  var w = Xn(() => {
    b = /** @type {V[]} */
    d(h);
    for (var x = b.length, ee = /* @__PURE__ */ new Set(), le = (
      /** @type {Batch} */
      k
    ), oe = rs(), Ne = 0; Ne < x; Ne += 1) {
      var pe = b[Ne], J = n(pe, Ne), Z = _ ? null : l.get(J);
      Z ? (Z.v && er(Z.v, pe), Z.i && er(Z.i, Ne), oe && le.unskip_effect(Z.e)) : (Z = El(
        l,
        _ ? f : Aa ?? (Aa = pt()),
        pe,
        J,
        Ne,
        a,
        t,
        r
      ), _ || (Z.e.f |= lt), l.set(J, Z)), ee.add(J);
    }
    if (x === 0 && s && !u && (_ ? u = Ee(() => s(f)) : (u = Ee(() => s(Aa ?? (Aa = pt()))), u.f |= lt)), x > ee.size && di(), !_)
      if (g.set(le, ee), oe) {
        for (const [vn, hn] of l)
          ee.has(vn) || le.skip_effect(hn.e);
        le.oncommit(c), le.ondiscard(S);
      } else
        c(le);
    d(h);
  }), M = { effect: w, items: l, pending: g, outrogroups: null, fallback: u };
  _ = !1;
}
function _r(e) {
  for (; e !== null && (e.f & Oe) === 0; )
    e = e.next;
  return e;
}
function kl(e, t, r, n, a) {
  var s = t.length, f = e.items, l = _r(e.effect.first), o, u = null, h = [], b = [], g, _, c, S;
  for (S = 0; S < s; S += 1) {
    if (g = t[S], _ = a(g, S), c = /** @type {EachItem} */
    f.get(_).e, e.outrogroups !== null)
      for (const J of e.outrogroups)
        J.pending.delete(c), J.done.delete(c);
    if ((c.f & ie) !== 0 && ea(c), (c.f & lt) !== 0)
      if (c.f ^= lt, c === l)
        pr(c, null, r);
      else {
        var w = u ? u.next : l;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), dt(e, u, c), dt(e, c, w), pr(c, w, r), u = c, h = [], b = [], l = _r(u.next);
        continue;
      }
    if (c !== l) {
      if (o !== void 0 && o.has(c)) {
        if (h.length < b.length) {
          var M = b[0], x;
          u = M.prev;
          var ee = h[0], le = h[h.length - 1];
          for (x = 0; x < h.length; x += 1)
            pr(h[x], M, r);
          for (x = 0; x < b.length; x += 1)
            o.delete(b[x]);
          dt(e, ee.prev, le.next), dt(e, u, ee), dt(e, le, M), l = M, u = le, S -= 1, h = [], b = [];
        } else
          o.delete(c), pr(c, l, r), dt(e, c.prev, c.next), dt(e, c, u === null ? e.effect.first : u.next), dt(e, u, c), u = c;
        continue;
      }
      for (h = [], b = []; l !== null && l !== c; )
        (o ?? (o = /* @__PURE__ */ new Set())).add(l), b.push(l), l = _r(l.next);
      if (l === null)
        continue;
    }
    (c.f & lt) === 0 && h.push(c), u = c, l = _r(c.next);
  }
  if (e.outrogroups !== null) {
    for (const J of e.outrogroups)
      J.pending.size === 0 && (qn(e, dn(J.done)), e.outrogroups?.delete(J));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || o !== void 0) {
    var oe = [];
    if (o !== void 0)
      for (c of o)
        (c.f & ie) === 0 && oe.push(c);
    for (; l !== null; )
      (l.f & ie) === 0 && l !== e.fallback && oe.push(l), l = _r(l.next);
    var Ne = oe.length;
    if (Ne > 0) {
      var pe = s === 0 ? r : null;
      wl(e, oe, pe);
    }
  }
}
function El(e, t, r, n, a, s, f, l) {
  var o = (f & yi) !== 0 ? (f & wi) === 0 ? /* @__PURE__ */ Wi(r, !1, !1) : Ot(r) : null, u = (f & xi) !== 0 ? Ot(a) : null;
  return {
    v: o,
    i: u,
    e: Ee(() => (s(t, o ?? r, u ?? a, l), () => {
      e.delete(n);
    }))
  };
}
function pr(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, a = e.nodes.end, s = t && (t.f & lt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Rr(n)
      );
      if (s.before(n), n === a)
        return;
      n = f;
    }
}
function dt(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Cl(e, t) {
  ls(() => {
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
      const a = ns("style");
      a.id = t.hash, a.textContent = t.code, n.appendChild(a);
    }
  });
}
function ks(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (r = ks(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Sl() {
  for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = ks(e)) && (n && (n += " "), n += t);
  return n;
}
function Na(e) {
  return typeof e == "object" ? Sl(e) : e ?? "";
}
function Ml(e, t, r) {
  var n = e == null ? "" : "" + e;
  return t && (n = n ? n + " " + t : t), n === "" ? null : n;
}
function qt(e, t, r, n, a, s) {
  var f = e.__className;
  if (f !== r || f === void 0) {
    var l = Ml(r, n);
    l == null ? e.removeAttribute("class") : e.className = l, e.__className = r;
  }
  return s;
}
function Es(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!$n(t))
      return Si();
    for (var n of e.options)
      n.selected = t.includes(xr(n));
    return;
  }
  for (n of e.options) {
    var a = xr(n);
    if (Zi(a, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function Tl(e) {
  var t = new MutationObserver(() => {
    Es(e, e.__value);
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
  }), ss(() => {
    t.disconnect();
  });
}
function Al(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), a = !0;
  as(e, "change", (s) => {
    var f = s ? "[selected]" : ":checked", l;
    if (e.multiple)
      l = [].map.call(e.querySelectorAll(f), xr);
    else {
      var o = e.querySelector(f) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      l = o && xr(o);
    }
    r(l), e.__value = l, k !== null && n.add(k);
  }), ls(() => {
    var s = t();
    if (e === document.activeElement) {
      var f = (
        /** @type {Batch} */
        k
      );
      if (n.has(f))
        return;
    }
    if (Es(e, s, a), a && s === void 0) {
      var l = e.querySelector(":checked");
      l !== null && (s = xr(l), r(s));
    }
    e.__value = s, a = !1;
  }), Tl(e);
}
function xr(e) {
  return "__value" in e ? e.__value : e.value;
}
function Nl(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  as(e, "input", async (a) => {
    var s = a ? e.defaultValue : e.value;
    if (s = Nn(e) ? Rn(s) : s, r(s), k !== null && n.add(k), await ul(), s !== (s = t())) {
      var f = e.selectionStart, l = e.selectionEnd, o = e.value.length;
      if (e.value = s ?? "", l !== null) {
        var u = e.value.length;
        f === l && l === o && u > o ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = f, e.selectionEnd = Math.min(l, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  ys(t) == null && e.value && (r(Nn(e) ? Rn(e.value) : e.value), k !== null && n.add(k)), os(() => {
    var a = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        k
      );
      if (n.has(s))
        return;
    }
    Nn(e) && a === Rn(e.value) || e.type === "date" && !a && !e.value || a !== e.value && (e.value = a ?? "");
  });
}
function Nn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Rn(e) {
  return e === "" ? null : +e;
}
const Rl = "5";
var Ra;
typeof window < "u" && ((Ra = window.__svelte ?? (window.__svelte = {})).v ?? (Ra.v = /* @__PURE__ */ new Set())).add(Rl);
var Pl = /* @__PURE__ */ ze('<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), Dl = /* @__PURE__ */ ze('<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'), Fl = /* @__PURE__ */ ze('<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'), jl = /* @__PURE__ */ j("<div><!> </div>"), Ll = /* @__PURE__ */ j('<div class="fixed top-4 right-4 z-50 flex flex-col gap-2" style="min-width:300px"></div>'), Ol = /* @__PURE__ */ j('<div class="flex justify-center py-16"><svg class="animate-spin h-8 w-8 text-blue-600" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg></div>'), zl = /* @__PURE__ */ j("<span> </span>"), Bl = /* @__PURE__ */ j('<p class="text-sm text-gray-600 dark:text-gray-400"> </p>'), Il = /* @__PURE__ */ j('<span class="px-1.5 py-0.5 rounded text-xs bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300">Paused</span>'), Hl = /* @__PURE__ */ j('<div class="flex items-center justify-between bg-gray-50 dark:bg-gray-700/50 rounded-lg px-4 py-2 text-sm"><div class="flex items-center gap-2"><span> </span> <!></div> <button class="text-xs text-blue-600 dark:text-blue-400 hover:underline"> </button></div>'), ql = /* @__PURE__ */ j('<div><h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Schedules</h3> <div class="space-y-2"></div></div>'), Vl = /* @__PURE__ */ ze('<svg class="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg> Starting...', 1), $l = /* @__PURE__ */ ze('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path></svg> Run Now', 1), Ul = /* @__PURE__ */ ze('<svg class="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), Yl = /* @__PURE__ */ ze('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>'), Gl = /* @__PURE__ */ j('<div class="px-6 py-3 flex items-start gap-3 text-sm"><span class="text-xs text-gray-400 font-mono whitespace-nowrap mt-0.5"> </span> <span class="text-gray-700 dark:text-gray-300 break-words"> </span></div>'), Wl = /* @__PURE__ */ j('<div class="mt-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"><div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700"><h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300">Execution History</h3></div> <div class="max-h-96 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-700"></div></div>'), Kl = /* @__PURE__ */ j('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"><div class="p-6 border-b border-gray-100 dark:border-gray-700"><div class="flex items-start justify-between gap-4"><div><h2 class="text-xl font-bold text-gray-900 dark:text-white"> </h2> <p class="text-xs text-gray-400 mt-1 font-mono"> </p></div> <!></div></div> <div class="p-6 space-y-4"><!> <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm"><div><span class="block text-gray-500 dark:text-gray-400">Created</span> <span class="font-medium text-gray-900 dark:text-white"> </span></div> <div><span class="block text-gray-500 dark:text-gray-400">Updated</span> <span class="font-medium text-gray-900 dark:text-white"> </span></div> <div><span class="block text-gray-500 dark:text-gray-400">Executions</span> <span class="font-medium text-gray-900 dark:text-white"> </span></div> <div><span class="block text-gray-500 dark:text-gray-400">Progress</span> <span class="font-medium text-gray-900 dark:text-white"> </span></div></div> <!></div> <div class="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700 flex gap-3"><button class="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg flex items-center gap-2"><!></button> <button class="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg flex items-center gap-2"><!> Delete</button></div></div> <!>', 1), Jl = /* @__PURE__ */ j('<div class="mb-4"><button class="inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:underline"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Back to tasks</button></div> <!>', 1), Zl = /* @__PURE__ */ j('<div class="mb-4 p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg flex items-center gap-2 text-sm"><svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg> </div>'), Xl = /* @__PURE__ */ j('<div class="flex justify-center items-center py-16"><svg class="animate-spin h-10 w-10 text-blue-600" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg></div>'), Ql = /* @__PURE__ */ j('<span class="relative flex h-2 w-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span>'), eo = /* @__PURE__ */ j('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-12 text-center"><svg class="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg> <p class="text-gray-500 dark:text-gray-400"> </p></div>'), to = /* @__PURE__ */ j('<span class="relative flex h-2.5 w-2.5"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span></span>'), ro = /* @__PURE__ */ j('<p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 svelte-11d5b98"> </p>'), no = /* @__PURE__ */ j('<span class="px-1.5 py-0.5 rounded text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">Paused</span>'), ao = /* @__PURE__ */ j('<div class="flex items-center gap-1.5 text-gray-500 dark:text-gray-500"><span> </span></div>'), so = /* @__PURE__ */ j('<div class="flex items-center gap-1.5 text-gray-600 dark:text-gray-400"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span> </span> <!></div> <!>', 1), io = /* @__PURE__ */ j('<div class="flex items-center gap-1.5 text-gray-500 dark:text-gray-500"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>One-time task</span></div>'), lo = /* @__PURE__ */ ze('<svg class="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), oo = /* @__PURE__ */ ze('<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path></svg>'), fo = /* @__PURE__ */ j("<button> </button>"), uo = /* @__PURE__ */ ze('<svg class="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), co = /* @__PURE__ */ ze('<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>'), vo = /* @__PURE__ */ j('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200 flex flex-col"><div class="p-4 border-b border-gray-100 dark:border-gray-700"><div class="flex justify-between items-start gap-2"><div class="flex-1 min-w-0"><h3 class="font-semibold text-gray-900 dark:text-white truncate"> </h3> <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5"> </p></div> <div class="flex items-center gap-2"><!> <span> </span></div></div></div> <div class="p-4 space-y-3 flex-1"><!> <div class="flex flex-wrap gap-3 text-sm"><!> <button class="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> </button></div></div> <div class="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700 rounded-b-xl flex gap-2"><button class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg> View</button> <button class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 rounded-lg transition-colors"><!> Run</button> <!> <button class="px-3 py-1.5 text-xs font-medium text-red-700 dark:text-red-400 border border-red-300 dark:border-red-700 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 disabled:opacity-50 transition-colors"><!></button></div></div>'), ho = /* @__PURE__ */ j('<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"></div> <div class="flex items-center justify-between mt-6"><button class="text-sm px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">Previous</button> <span class="text-xs text-gray-500 dark:text-gray-400"> </span> <button class="text-sm px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">Next</button></div>', 1), _o = /* @__PURE__ */ j('<div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-3 mb-4"><div class="flex flex-wrap items-center gap-x-4 gap-y-2"><div class="flex items-center gap-4 text-sm"><span class="font-medium text-gray-700 dark:text-gray-300"> </span> <span class="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-medium"><!> </span> <span class="text-yellow-600 dark:text-yellow-400 font-medium"> </span> <span class="text-green-600 dark:text-green-400 font-medium"> </span> <span class="text-red-600 dark:text-red-400 font-medium"> </span></div> <div class="flex flex-1 items-center gap-2 ml-auto min-w-0"><div class="flex-1 relative min-w-[150px]"><svg class="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> <input type="text" placeholder="Search tasks..." class="w-full pl-8 pr-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"/></div> <select class="w-36 px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"><option>All Status</option><option>Running</option><option>Pending</option><option>Completed</option><option>Failed</option></select></div></div></div> <!>', 1), po = /* @__PURE__ */ j('<div class="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"><h1 class="text-2xl font-bold text-gray-900 dark:text-white">Task Monitor</h1> <button class="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Refresh</button></div> <!> <!>', 1), go = /* @__PURE__ */ j('<!> <div class="p-6 max-w-7xl mx-auto"><!></div>', 1);
const bo = {
  hash: "svelte-11d5b98",
  code: ".line-clamp-2.svelte-11d5b98 {display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}"
};
function mo(e, t) {
  Oa(t, !0), Cl(e, bo);
  let r = /* @__PURE__ */ q(Fe([])), n = /* @__PURE__ */ q(!0), a = /* @__PURE__ */ q(""), s = /* @__PURE__ */ q(""), f = /* @__PURE__ */ q(""), l = /* @__PURE__ */ q(Fe([])), o = /* @__PURE__ */ q(0), u = Fe({}), h = Fe({});
  const b = 10;
  let g = /* @__PURE__ */ q(1), _ = /* @__PURE__ */ q(0), c = /* @__PURE__ */ q(null), S = /* @__PURE__ */ q(!1), w = /* @__PURE__ */ q(Fe([1])), M = /* @__PURE__ */ q(null), x = /* @__PURE__ */ q(null), ee = /* @__PURE__ */ q(Fe([])), le = /* @__PURE__ */ q(!1), oe = /* @__PURE__ */ kt(() => ({
    total: d(r).length,
    running: d(r).filter((v) => v.status?.toLowerCase() === "running").length,
    pending: d(r).filter((v) => v.status?.toLowerCase() === "pending").length,
    completed: d(r).filter((v) => v.status?.toLowerCase() === "completed").length,
    failed: d(r).filter((v) => v.status?.toLowerCase() === "failed").length
  })), Ne = /* @__PURE__ */ kt(() => d(r).filter((v) => {
    const y = !d(s) || v.name.toLowerCase().includes(d(s).toLowerCase()) || Dr(v.metadata).toLowerCase().includes(d(s).toLowerCase()), L = !d(f) || v.status?.toLowerCase() === d(f).toLowerCase();
    return y && L;
  }));
  function pe(v, y = "info") {
    const L = Ji(o);
    D(l, [...d(l), { id: L, message: v, type: y }], !0), setTimeout(
      () => {
        D(l, d(l).filter((O) => O.id !== L), !0);
      },
      4e3
    );
  }
  async function J(v, y = {}) {
    return await t.ctx.callSync(v, y);
  }
  async function Z() {
    try {
      const v = await J("get_all_tasks", { from_id: d(g), page_size: b });
      D(r, v?.tasks ?? v?.data?.tasks ?? (Array.isArray(v) ? v : []), !0), D(_, v?.max_id ?? 0, !0), D(c, v?.next_from_id ?? null, !0), D(S, v?.has_more ?? !1, !0), D(a, "");
    } catch (v) {
      D(a, "Error loading tasks: " + (v?.message || String(v)));
    } finally {
      D(n, !1);
    }
  }
  function vn() {
    d(c) && (D(w, [...d(w), d(c)], !0), D(g, d(c), !0), Z());
  }
  function hn() {
    d(w).length > 1 && (D(w, d(w).slice(0, -1), !0), D(g, d(w)[d(w).length - 1], !0), Z());
  }
  async function _n(v) {
    D(M, v, !0), D(le, !0);
    try {
      const [y, L] = await Promise.all([
        J("get_task_details", { task_id: v }).catch(() => null),
        J("get_task_logs", { task_id: v }).catch(() => ({ data: [] }))
      ]), O = y?.task ?? y?.data?.task ?? y?.data ?? y;
      O && O.executions && (O.executions_count = O.executions.length, O.total_steps = O.steps?.length ?? 0), D(x, O, !0), D(ee, L?.data ?? (Array.isArray(L) ? L : []), !0);
    } catch (y) {
      D(a, y?.message || String(y), !0);
    } finally {
      D(le, !1);
    }
  }
  function ra() {
    D(M, null), D(x, null), D(ee, [], !0);
  }
  async function na(v, y) {
    try {
      const L = await J("toggle_schedule", { schedule_id: v, disabled: !y });
      pe(y ? "Schedule resumed" : "Schedule paused", "success"), await Z();
    } catch (L) {
      pe(L?.message || "Error toggling schedule", "error");
    }
  }
  async function aa(v) {
    u[v] = !0;
    try {
      const y = await J("run_task_now", { task_id: v });
      pe(y?.message || "Task started", "success"), await Z(), d(M) === v && await _n(v);
    } catch (y) {
      pe(y?.message || "Error running task", "error");
    } finally {
      delete u[v];
    }
  }
  async function sa(v) {
    h[v] = !0;
    try {
      const y = await J("delete_task", { task_id: v });
      pe(y?.message || "Task deleted", "success"), d(M) === v && ra(), await Z();
    } catch (y) {
      pe(y?.message || "Error deleting task", "error");
    } finally {
      delete h[v];
    }
  }
  function ia(v) {
    const y = v?.toLowerCase();
    return y === "running" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" : y === "pending" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" : y === "completed" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" : y === "failed" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
  }
  function Dr(v) {
    if (!v) return "";
    try {
      const y = JSON.parse(v);
      return y.description || y.desc || "";
    } catch {
      return v.length > 80 ? v.substring(0, 80) + "..." : v;
    }
  }
  function Cs(v) {
    if (!v) return "-";
    const y = v > 1e15 ? v / 1e6 : v > 1e12 ? v : v * 1e3, L = Date.now() - y, O = Math.floor(L / 1e3), ge = Math.floor(O / 60), Be = Math.floor(ge / 60), mt = Math.floor(Be / 24);
    return O < 60 ? "Just now" : ge < 60 ? `${ge}m ago` : Be < 24 ? `${Be}h ago` : `${mt}d ago`;
  }
  function la(v) {
    if (!v) return "One-time";
    const y = Math.floor(v / 86400), L = Math.floor(v % 86400 / 3600), O = Math.floor(v % 3600 / 60);
    return y > 0 ? `Every ${y}d ${L}h` : L > 0 ? `Every ${L}h ${O}m` : O > 0 ? `Every ${O}m` : `Every ${v}s`;
  }
  function oa(v) {
    if (!v) return "-";
    const y = v > 1e15 ? v / 1e6 : v > 1e12 ? v : v * 1e3;
    return new Date(y).toLocaleString();
  }
  nl(() => {
    Z();
    const v = setInterval(Z, 1e4);
    return () => clearInterval(v);
  });
  var fa = go(), ua = ut(fa);
  {
    var Ss = (v) => {
      var y = Ll();
      Zr(y, 21, () => d(l), (L) => L.id, (L, O) => {
        var ge = jl(), Be = p(ge);
        {
          var mt = (Y) => {
            var be = Pl();
            C(Y, be);
          }, Ie = (Y) => {
            var be = Dl();
            C(Y, be);
          }, ft = (Y) => {
            var be = Fl();
            C(Y, be);
          };
          H(Be, (Y) => {
            d(O).type === "success" ? Y(mt) : d(O).type === "error" ? Y(Ie, 1) : Y(ft, -1);
          });
        }
        var ne = m(Be);
        ae(() => {
          qt(ge, 1, `px-4 py-3 rounded-lg shadow-lg text-sm font-medium flex items-center gap-2
					${d(O).type === "success" ? "bg-green-600 text-white" : ""}
					${d(O).type === "error" ? "bg-red-600 text-white" : ""}
					${d(O).type === "info" ? "bg-blue-600 text-white" : ""}`), F(ne, ` ${d(O).message ?? ""}`);
        }), C(L, ge);
      }), C(v, y);
    };
    H(ua, (v) => {
      d(l).length > 0 && v(Ss);
    });
  }
  var Ms = m(ua, 2), Ts = p(Ms);
  {
    var As = (v) => {
      var y = Jl(), L = ut(y), O = p(L), ge = m(L, 2);
      {
        var Be = (Ie) => {
          var ft = Ol();
          C(Ie, ft);
        }, mt = (Ie) => {
          var ft = Kl(), ne = ut(ft), Y = p(ne), be = p(Y), Fr = p(be), nr = p(Fr), jr = p(nr), pn = m(nr, 2), Lr = p(pn), Or = m(Fr, 2);
          {
            var gn = (N) => {
              var B = zl(), He = p(B);
              ae(
                (qe) => {
                  qt(B, 1, `px-2.5 py-1 rounded-full text-xs font-medium ${qe ?? ""}`, "svelte-11d5b98"), F(He, d(x).status);
                },
                [() => ia(d(x).status)]
              ), C(N, B);
            };
            H(Or, (N) => {
              d(x).status && N(gn);
            });
          }
          var zr = m(Y, 2), ar = p(zr);
          {
            var bn = (N) => {
              const B = /* @__PURE__ */ kt(() => Dr(d(x).metadata));
              var He = gl(), qe = ut(He);
              {
                var Q = (Re) => {
                  var Ve = Bl(), Ze = p(Ve);
                  ae(() => F(Ze, d(B))), C(Re, Ve);
                };
                H(qe, (Re) => {
                  d(B) && Re(Q);
                });
              }
              C(N, He);
            };
            H(ar, (N) => {
              d(x).metadata && N(bn);
            });
          }
          var sr = m(ar, 2), Br = p(sr), mn = m(p(Br), 2), yn = p(mn), Ir = m(Br, 2), Hr = m(p(Ir), 2), xn = p(Hr), ir = m(Ir, 2), lr = m(p(ir), 2), or = p(lr), fr = m(ir, 2), ur = m(p(fr), 2), qr = p(ur), wn = m(sr, 2);
          {
            var kn = (N) => {
              var B = ql(), He = m(p(B), 2);
              Zr(He, 21, () => d(x).schedules, Ta, (qe, Q) => {
                var Re = Hl(), Ve = p(Re), Ze = p(Ve), vr = p(Ze), It = m(Ze, 2);
                {
                  var hr = (xt) => {
                    var Gr = Il();
                    C(xt, Gr);
                  };
                  H(It, (xt) => {
                    d(Q).disabled && xt(hr);
                  });
                }
                var Ur = m(Ve, 2), Yr = p(Ur);
                ae(
                  (xt) => {
                    qt(Ze, 1, Na(d(Q).disabled ? "line-through text-gray-400" : "text-gray-700 dark:text-gray-300")), F(vr, xt), F(Yr, d(Q).disabled ? "Resume" : "Pause");
                  },
                  [() => la(d(Q).repeat_every)]
                ), me("click", Ur, () => na(d(Q)._id, d(Q).disabled)), C(qe, Re);
              }), C(N, B);
            };
            H(wn, (N) => {
              d(x).schedules?.length > 0 && N(kn);
            });
          }
          var En = m(zr, 2), W = p(En), Je = p(W);
          {
            var Bt = (N) => {
              var B = Vl();
              C(N, B);
            }, dr = (N) => {
              var B = $l();
              C(N, B);
            };
            H(Je, (N) => {
              u[d(M)] ? N(Bt) : N(dr, -1);
            });
          }
          var yt = m(W, 2), Vr = p(yt);
          {
            var Cn = (N) => {
              var B = Ul();
              C(N, B);
            }, $r = (N) => {
              var B = Yl();
              C(N, B);
            };
            H(Vr, (N) => {
              h[d(M)] ? N(Cn) : N($r, -1);
            });
          }
          var cr = m(ne, 2);
          {
            var V = (N) => {
              var B = Wl(), He = m(p(B), 2);
              Zr(He, 21, () => d(ee), Ta, (qe, Q) => {
                var Re = Gl(), Ve = p(Re), Ze = p(Ve), vr = m(Ve, 2), It = p(vr);
                ae(
                  (hr) => {
                    F(Ze, d(Q).timestamp || d(Q).time || ""), F(It, hr);
                  },
                  [
                    () => d(Q).message || d(Q).output || JSON.stringify(d(Q))
                  ]
                ), C(qe, Re);
              }), C(N, B);
            };
            H(cr, (N) => {
              d(ee).length > 0 && N(V);
            });
          }
          ae(
            (N, B) => {
              F(jr, d(x).name || d(M)), F(Lr, d(M)), F(yn, N), F(xn, B), F(or, d(x).executions_count ?? "-"), F(qr, `${d(x).step_to_execute ?? 0 ?? ""} / ${d(x).total_steps ?? 0 ?? ""}`), W.disabled = u[d(M)], yt.disabled = h[d(M)];
            },
            [
              () => oa(d(x).created_at),
              () => oa(d(x).updated_at)
            ]
          ), me("click", W, () => aa(d(M))), me("click", yt, () => sa(d(M))), C(Ie, ft);
        };
        H(ge, (Ie) => {
          d(le) ? Ie(Be) : d(x) && Ie(mt, 1);
        });
      }
      me("click", O, ra), C(v, y);
    }, Ns = (v) => {
      var y = po(), L = ut(y), O = m(p(L), 2), ge = m(L, 2);
      {
        var Be = (ne) => {
          var Y = Zl(), be = m(p(Y));
          ae(() => F(be, ` ${d(a) ?? ""}`)), C(ne, Y);
        };
        H(ge, (ne) => {
          d(a) && ne(Be);
        });
      }
      var mt = m(ge, 2);
      {
        var Ie = (ne) => {
          var Y = Xl();
          C(ne, Y);
        }, ft = (ne) => {
          var Y = _o(), be = ut(Y), Fr = p(be), nr = p(Fr), jr = p(nr), pn = p(jr), Lr = m(jr, 2), Or = p(Lr);
          {
            var gn = (W) => {
              var Je = Ql();
              C(W, Je);
            };
            H(Or, (W) => {
              d(oe).running > 0 && W(gn);
            });
          }
          var zr = m(Or), ar = m(Lr, 2), bn = p(ar), sr = m(ar, 2), Br = p(sr), mn = m(sr, 2), yn = p(mn), Ir = m(nr, 2), Hr = p(Ir), xn = m(p(Hr), 2), ir = m(Hr, 2), lr = p(ir);
          lr.value = lr.__value = "";
          var or = m(lr);
          or.value = or.__value = "running";
          var fr = m(or);
          fr.value = fr.__value = "pending";
          var ur = m(fr);
          ur.value = ur.__value = "completed";
          var qr = m(ur);
          qr.value = qr.__value = "failed";
          var wn = m(be, 2);
          {
            var kn = (W) => {
              var Je = eo(), Bt = m(p(Je), 2), dr = p(Bt);
              ae(() => F(dr, d(s) || d(f) ? "No matching tasks" : "No tasks found")), C(W, Je);
            }, En = (W) => {
              var Je = ho(), Bt = ut(Je);
              Zr(Bt, 21, () => d(Ne), (cr) => cr._id, (cr, V) => {
                var N = vo(), B = p(N), He = p(B), qe = p(He), Q = p(qe), Re = p(Q), Ve = m(Q, 2), Ze = p(Ve), vr = m(qe, 2), It = p(vr);
                {
                  var hr = (R) => {
                    var z = to();
                    C(R, z);
                  }, Ur = /* @__PURE__ */ kt(() => d(V).status?.toLowerCase() === "running");
                  H(It, (R) => {
                    d(Ur) && R(hr);
                  });
                }
                var Yr = m(It, 2), xt = p(Yr), Gr = m(B, 2), da = p(Gr);
                {
                  var Rs = (R) => {
                    var z = ro(), Xe = p(z);
                    ae((Ht) => F(Xe, Ht), [() => Dr(d(V).metadata)]), C(R, z);
                  }, Ps = /* @__PURE__ */ kt(() => Dr(d(V).metadata));
                  H(da, (R) => {
                    d(Ps) && R(Rs);
                  });
                }
                var Ds = m(da, 2), ca = p(Ds);
                {
                  var Fs = (R) => {
                    const z = /* @__PURE__ */ kt(() => d(V).schedules[0]);
                    var Xe = so(), Ht = ut(Xe), Mn = m(p(Ht), 2), Us = p(Mn), Ys = m(Mn, 2);
                    {
                      var Gs = (Qe) => {
                        var Kr = no();
                        C(Qe, Kr);
                      };
                      H(Ys, (Qe) => {
                        d(z).disabled && Qe(Gs);
                      });
                    }
                    var Ws = m(Ht, 2);
                    {
                      var Ks = (Qe) => {
                        var Kr = ao(), Js = p(Kr), Zs = p(Js);
                        ae((Xs) => F(Zs, `Last: ${Xs ?? ""}`), [() => Cs(d(z).last_run_at)]), C(Qe, Kr);
                      };
                      H(Ws, (Qe) => {
                        d(z).last_run_at && Qe(Ks);
                      });
                    }
                    ae(
                      (Qe) => {
                        qt(Mn, 1, Na(d(z).disabled ? "line-through text-gray-400" : "")), F(Us, Qe);
                      },
                      [() => la(d(z).repeat_every)]
                    ), C(R, Xe);
                  }, js = (R) => {
                    var z = io();
                    C(R, z);
                  };
                  H(ca, (R) => {
                    d(V).schedules?.length > 0 ? R(Fs) : R(js, -1);
                  });
                }
                var va = m(ca, 2), Ls = m(p(va)), Os = m(Gr, 2), ha = p(Os), Wr = m(ha, 2), zs = p(Wr);
                {
                  var Bs = (R) => {
                    var z = lo();
                    C(R, z);
                  }, Is = (R) => {
                    var z = oo();
                    C(R, z);
                  };
                  H(zs, (R) => {
                    u[d(V)._id] ? R(Bs) : R(Is, -1);
                  });
                }
                var _a = m(Wr, 2);
                {
                  var Hs = (R) => {
                    const z = /* @__PURE__ */ kt(() => d(V).schedules[0]);
                    var Xe = fo(), Ht = p(Xe);
                    ae(() => {
                      qt(Xe, 1, `px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors
											${d(z).disabled ? "text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30" : "text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-700 hover:bg-yellow-50 dark:hover:bg-yellow-900/30"}`), F(Ht, d(z).disabled ? "Resume" : "Pause");
                    }), me("click", Xe, () => na(d(z)._id, d(z).disabled)), C(R, Xe);
                  };
                  H(_a, (R) => {
                    d(V).schedules?.length > 0 && R(Hs);
                  });
                }
                var Sn = m(_a, 2), qs = p(Sn);
                {
                  var Vs = (R) => {
                    var z = uo();
                    C(R, z);
                  }, $s = (R) => {
                    var z = co();
                    C(R, z);
                  };
                  H(qs, (R) => {
                    h[d(V)._id] ? R(Vs) : R($s, -1);
                  });
                }
                ae(
                  (R, z) => {
                    F(Re, d(V).name), F(Ze, `ID: ${R ?? ""}`), qt(Yr, 1, `px-2 py-0.5 rounded-full text-xs font-medium ${z ?? ""}`, "svelte-11d5b98"), F(xt, d(V).status || "Unknown"), F(Ls, ` ${d(V).executions_count ?? 0 ?? ""} runs`), Wr.disabled = u[d(V)._id], Sn.disabled = h[d(V)._id];
                  },
                  [
                    () => d(V)._id.substring(0, 12),
                    () => ia(d(V).status)
                  ]
                ), me("click", va, () => _n(d(V)._id)), me("click", ha, () => _n(d(V)._id)), me("click", Wr, () => aa(d(V)._id)), me("click", Sn, () => sa(d(V)._id)), C(cr, N);
              });
              var dr = m(Bt, 2), yt = p(dr), Vr = m(yt, 2), Cn = p(Vr), $r = m(Vr, 2);
              ae(() => {
                yt.disabled = d(w).length <= 1, F(Cn, `Page ${d(w).length ?? ""}`), $r.disabled = !d(S);
              }), me("click", yt, hn), me("click", $r, vn), C(W, Je);
            };
            H(wn, (W) => {
              d(Ne).length === 0 ? W(kn) : W(En, -1);
            });
          }
          ae(() => {
            F(pn, `${d(oe).total ?? ""} tasks`), F(zr, ` ${d(oe).running ?? ""} running`), F(bn, `${d(oe).pending ?? ""} pending`), F(Br, `${d(oe).completed ?? ""} completed`), F(yn, `${d(oe).failed ?? ""} failed`);
          }), Nl(xn, () => d(s), (W) => D(s, W)), Al(ir, () => d(f), (W) => D(f, W)), C(ne, Y);
        };
        H(mt, (ne) => {
          d(n) ? ne(Ie) : ne(ft, -1);
        });
      }
      me("click", O, Z), C(v, y);
    };
    H(Ts, (v) => {
      d(M) ? v(As) : v(Ns, -1);
    });
  }
  C(e, fa), za();
}
vl(["click"]);
function wo(e, t) {
  const r = bl(mo, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        yl(r);
      } catch {
      }
    }
  };
}
export {
  wo as default
};
