var Ms = Object.defineProperty;
var oa = (e) => {
  throw TypeError(e);
};
var Ps = (e, t, r) => t in e ? Ms(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ue = (e, t, r) => Ps(e, typeof t != "symbol" ? t + "" : t, r), wn = (e, t, r) => t.has(e) || oa("Cannot " + r);
var i = (e, t, r) => (wn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), A = (e, t, r) => t.has(e) ? oa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), F = (e, t, r, n) => (wn(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), z = (e, t, r) => (wn(e, t, "access private method"), r);
var ma = Array.isArray, Rs = Array.prototype.indexOf, rr = Array.prototype.includes, an = Array.from, Is = Object.defineProperty, br = Object.getOwnPropertyDescriptor, $s = Object.prototype, Bs = Array.prototype, Ls = Object.getPrototypeOf, da = Object.isExtensible;
const zs = () => {
};
function qs(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ka() {
  var e, t, r = new Promise((n, a) => {
    e = n, t = a;
  });
  return { promise: r, resolve: e, reject: t };
}
function pr(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const ge = 2, yr = 4, sn = 8, wa = 1 << 24, at = 16, We = 32, St = 64, Fn = 128, Le = 512, re = 1024, he = 2048, st = 4096, me = 8192, ze = 16384, Kt = 32768, fa = 1 << 25, nr = 65536, Cn = 1 << 17, Vs = 1 << 18, lr = 1 << 19, Hs = 1 << 20, nt = 1 << 25, Ht = 65536, Zr = 1 << 21, mr = 1 << 22, Et = 1 << 23, En = Symbol("$state"), ut = new class extends Error {
  constructor() {
    super(...arguments);
    Ue(this, "name", "StaleReactionError");
    Ue(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Us() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ys(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ks(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Gs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ws(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Js() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Xs() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Zs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Qs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ei() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ti = 1, ri = 2, Ea = 4, ni = 8, ai = 16, si = 1, ii = 2, fe = Symbol(), li = "http://www.w3.org/1999/xhtml";
function oi() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function di() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Aa(e) {
  return e === this.v;
}
function fi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Sa(e) {
  return !fi(e, this.v);
}
let Ve = null;
function ar(e) {
  Ve = e;
}
function Ta(e, t = !1, r) {
  Ve = {
    p: Ve,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      D
    ),
    l: null
  };
}
function Fa(e) {
  var t = (
    /** @type {ComponentContext} */
    Ve
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Ka(n);
  }
  return t.i = !0, Ve = t.p, /** @type {T} */
  {};
}
function Ca() {
  return !0;
}
let Wt = [];
function ui() {
  var e = Wt;
  Wt = [], qs(e);
}
function Lt(e) {
  if (Wt.length === 0) {
    var t = Wt;
    queueMicrotask(() => {
      t === Wt && ui();
    });
  }
  Wt.push(e);
}
function ja(e) {
  var t = D;
  if (t === null)
    return C.f |= Et, e;
  if ((t.f & Kt) === 0 && (t.f & yr) === 0)
    throw e;
  wt(e, t);
}
function wt(e, t) {
  for (; t !== null; ) {
    if ((t.f & Fn) !== 0) {
      if ((t.f & Kt) === 0)
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
function X(e, t) {
  e.f = e.f & ci | t;
}
function zn(e) {
  (e.f & Le) !== 0 || e.deps === null ? X(e, re) : X(e, st);
}
function Na(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ge) === 0 || (t.f & Ht) === 0 || (t.f ^= Ht, Na(
        /** @type {Derived} */
        t.deps
      ));
}
function Oa(e, t, r) {
  (e.f & he) !== 0 ? t.add(e) : (e.f & st) !== 0 && r.add(e), Na(e.deps), X(e, re);
}
const Ot = /* @__PURE__ */ new Set();
let P = null, Ke = null, jn = null, An = !1, Jt = null, Ur = null;
var ua = 0;
let vi = 1;
var Xt, Zt, Pt, ct, et, wr, Oe, Er, mt, vt, tt, Qt, er, Rt, Q, Yr, Da, Kr, Nn, Gr, pi;
const tn = class tn {
  constructor() {
    A(this, Q);
    Ue(this, "id", vi++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Ue(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Ue(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    A(this, Xt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    A(this, Zt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    A(this, Pt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    A(this, ct, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    A(this, et, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    A(this, wr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    A(this, Oe, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    A(this, Er, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    A(this, mt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    A(this, vt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    A(this, tt, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    A(this, Qt, /* @__PURE__ */ new Set());
    Ue(this, "is_fork", !1);
    A(this, er, !1);
    /** @type {Set<Batch>} */
    A(this, Rt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    i(this, tt).has(t) || i(this, tt).set(t, { d: [], m: [] }), i(this, Qt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = i(this, tt).get(t);
    if (n) {
      i(this, tt).delete(t);
      for (var a of n.d)
        X(a, he), r(a);
      for (a of n.m)
        X(a, st), r(a);
    }
    i(this, Qt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== fe && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Et) === 0 && (this.current.set(t, [r, n]), Ke?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    P = this;
  }
  deactivate() {
    P = null, Ke = null;
  }
  flush() {
    try {
      An = !0, P = this, z(this, Q, Kr).call(this);
    } finally {
      ua = 0, jn = null, Jt = null, Ur = null, An = !1, P = null, Ke = null, zt.clear();
    }
  }
  discard() {
    for (const t of i(this, Zt)) t(this);
    i(this, Zt).clear(), i(this, Pt).clear(), Ot.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    i(this, Er).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = i(this, ct).get(r) ?? 0;
    if (i(this, ct).set(r, n + 1), t) {
      let a = i(this, et).get(r) ?? 0;
      i(this, et).set(r, a + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let a = i(this, ct).get(r) ?? 0;
    if (a === 1 ? i(this, ct).delete(r) : i(this, ct).set(r, a - 1), t) {
      let s = i(this, et).get(r) ?? 0;
      s === 1 ? i(this, et).delete(r) : i(this, et).set(r, s - 1);
    }
    i(this, er) || n || (F(this, er, !0), Lt(() => {
      F(this, er, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      i(this, mt).add(n);
    for (const n of r)
      i(this, vt).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    i(this, Xt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    i(this, Zt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    i(this, Pt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of i(this, Pt)) t(this);
    i(this, Pt).clear();
  }
  settled() {
    return (i(this, wr) ?? F(this, wr, ka())).promise;
  }
  static ensure() {
    if (P === null) {
      const t = P = new tn();
      An || (Ot.add(P), Lt(() => {
        P === t && t.flush();
      }));
    }
    return P;
  }
  apply() {
    {
      Ke = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (jn = t, t.b?.is_pending && (t.f & (yr | sn | wa)) !== 0 && (t.f & Kt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Jt !== null && r === D && (C === null || (C.f & ge) === 0))
        return;
      if ((n & (St | We)) !== 0) {
        if ((n & re) === 0)
          return;
        r.f ^= re;
      }
    }
    i(this, Oe).push(r);
  }
};
Xt = new WeakMap(), Zt = new WeakMap(), Pt = new WeakMap(), ct = new WeakMap(), et = new WeakMap(), wr = new WeakMap(), Oe = new WeakMap(), Er = new WeakMap(), mt = new WeakMap(), vt = new WeakMap(), tt = new WeakMap(), Qt = new WeakMap(), er = new WeakMap(), Rt = new WeakMap(), Q = new WeakSet(), Yr = function() {
  return this.is_fork || i(this, et).size > 0;
}, Da = function() {
  for (const n of i(this, Rt))
    for (const a of i(n, et).keys()) {
      for (var t = !1, r = a; r.parent !== null; ) {
        if (i(this, tt).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, Kr = function() {
  var u;
  if (ua++ > 1e3 && (Ot.delete(this), _i()), !z(this, Q, Yr).call(this)) {
    for (const l of i(this, mt))
      i(this, vt).delete(l), X(l, he), this.schedule(l);
    for (const l of i(this, vt))
      X(l, st), this.schedule(l);
  }
  const t = i(this, Oe);
  F(this, Oe, []), this.apply();
  var r = Jt = [], n = [], a = Ur = [];
  for (const l of t)
    try {
      z(this, Q, Nn).call(this, l, r, n);
    } catch (c) {
      throw Ra(l), c;
    }
  if (P = null, a.length > 0) {
    var s = tn.ensure();
    for (const l of a)
      s.schedule(l);
  }
  if (Jt = null, Ur = null, z(this, Q, Yr).call(this) || z(this, Q, Da).call(this)) {
    z(this, Q, Gr).call(this, n), z(this, Q, Gr).call(this, r);
    for (const [l, c] of i(this, tt))
      Pa(l, c);
  } else {
    i(this, ct).size === 0 && Ot.delete(this), i(this, mt).clear(), i(this, vt).clear();
    for (const l of i(this, Xt)) l(this);
    i(this, Xt).clear(), ca(n), ca(r), i(this, wr)?.resolve();
  }
  var d = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    P
  );
  if (i(this, Oe).length > 0) {
    const l = d ?? (d = this);
    i(l, Oe).push(...i(this, Oe).filter((c) => !i(l, Oe).includes(c)));
  }
  d !== null && (Ot.add(d), z(u = d, Q, Kr).call(u));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Nn = function(t, r, n) {
  t.f ^= re;
  for (var a = t.first; a !== null; ) {
    var s = a.f, d = (s & (We | St)) !== 0, u = d && (s & re) !== 0, l = u || (s & me) !== 0 || i(this, tt).has(a);
    if (!l && a.fn !== null) {
      d ? a.f ^= re : (s & yr) !== 0 ? r.push(a) : jr(a) && ((s & at) !== 0 && i(this, vt).add(a), ir(a));
      var c = a.first;
      if (c !== null) {
        a = c;
        continue;
      }
    }
    for (; a !== null; ) {
      var _ = a.next;
      if (_ !== null) {
        a = _;
        break;
      }
      a = a.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
Gr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Oa(t[r], i(this, mt), i(this, vt));
}, pi = function() {
  var _, m, b;
  for (const v of Ot) {
    var t = v.id < this.id, r = [];
    for (const [g, [w, p]] of this.current) {
      if (v.current.has(g)) {
        var n = (
          /** @type {[any, boolean]} */
          v.current.get(g)[0]
        );
        if (t && w !== n)
          v.current.set(g, [w, p]);
        else
          continue;
      }
      r.push(g);
    }
    var a = [...v.current.keys()].filter((g) => !this.current.has(g));
    if (a.length === 0)
      t && v.discard();
    else if (r.length > 0) {
      if (t)
        for (const g of i(this, Qt))
          v.unskip_effect(g, (w) => {
            var p;
            (w.f & (at | mr)) !== 0 ? v.schedule(w) : z(p = v, Q, Gr).call(p, [w]);
          });
      v.activate();
      var s = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map();
      for (var u of r)
        Ma(u, a, s, d);
      d = /* @__PURE__ */ new Map();
      var l = [...v.current.keys()].filter(
        (g) => this.current.has(g) ? (
          /** @type {[any, boolean]} */
          this.current.get(g)[0] !== g
        ) : !0
      );
      for (const g of i(this, Er))
        (g.f & (ze | me | Cn)) === 0 && qn(g, l, d) && ((g.f & (mr | at)) !== 0 ? (X(g, he), v.schedule(g)) : i(v, mt).add(g));
      if (i(v, Oe).length > 0) {
        v.apply();
        for (var c of i(v, Oe))
          z(_ = v, Q, Nn).call(_, c, [], []);
        F(v, Oe, []);
      }
      v.deactivate();
    }
  }
  for (const v of Ot)
    i(v, Rt).has(this) && (i(v, Rt).delete(this), i(v, Rt).size === 0 && !z(m = v, Q, Yr).call(m) && (v.activate(), z(b = v, Q, Kr).call(b)));
};
let Ut = tn;
function _i() {
  try {
    Js();
  } catch (e) {
    wt(e, jn);
  }
}
let ft = null;
function ca(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (ze | me)) === 0 && jr(n) && (ft = /* @__PURE__ */ new Set(), ir(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Wa(n), ft?.size > 0)) {
        zt.clear();
        for (const a of ft) {
          if ((a.f & (ze | me)) !== 0) continue;
          const s = [a];
          let d = a.parent;
          for (; d !== null; )
            ft.has(d) && (ft.delete(d), s.push(d)), d = d.parent;
          for (let u = s.length - 1; u >= 0; u--) {
            const l = s[u];
            (l.f & (ze | me)) === 0 && ir(l);
          }
        }
        ft.clear();
      }
    }
    ft = null;
  }
}
function Ma(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const a of e.reactions) {
      const s = a.f;
      (s & ge) !== 0 ? Ma(
        /** @type {Derived} */
        a,
        t,
        r,
        n
      ) : (s & (mr | at)) !== 0 && (s & he) === 0 && qn(a, t, n) && (X(a, he), Vn(
        /** @type {Effect} */
        a
      ));
    }
}
function qn(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const a of e.deps) {
      if (rr.call(t, a))
        return !0;
      if ((a.f & ge) !== 0 && qn(
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
function Vn(e) {
  P.schedule(e);
}
function Pa(e, t) {
  if (!((e.f & We) !== 0 && (e.f & re) !== 0)) {
    (e.f & he) !== 0 ? t.d.push(e) : (e.f & st) !== 0 && t.m.push(e), X(e, re);
    for (var r = e.first; r !== null; )
      Pa(r, t), r = r.next;
  }
}
function Ra(e) {
  X(e, re);
  for (var t = e.first; t !== null; )
    Ra(t), t = t.next;
}
function hi(e) {
  let t = 0, r = Yt(0), n;
  return () => {
    Yn() && (o(r), Li(() => (t === 0 && (n = Ui(() => e(() => xr(r)))), t += 1, () => {
      Lt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, xr(r));
      });
    })));
  };
}
var gi = nr | lr;
function bi(e, t, r, n) {
  new xi(e, t, r, n);
}
var Re, Ln, Ie, It, Ae, $e, xe, De, pt, $t, kt, tr, Ar, Sr, _t, rn, G, yi, mi, ki, On, Wr, Jr, Dn, Mn;
class xi {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, a) {
    A(this, G);
    /** @type {Boundary | null} */
    Ue(this, "parent");
    Ue(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Ue(this, "transform_error");
    /** @type {TemplateNode} */
    A(this, Re);
    /** @type {TemplateNode | null} */
    A(this, Ln, null);
    /** @type {BoundaryProps} */
    A(this, Ie);
    /** @type {((anchor: Node) => void)} */
    A(this, It);
    /** @type {Effect} */
    A(this, Ae);
    /** @type {Effect | null} */
    A(this, $e, null);
    /** @type {Effect | null} */
    A(this, xe, null);
    /** @type {Effect | null} */
    A(this, De, null);
    /** @type {DocumentFragment | null} */
    A(this, pt, null);
    A(this, $t, 0);
    A(this, kt, 0);
    A(this, tr, !1);
    /** @type {Set<Effect>} */
    A(this, Ar, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    A(this, Sr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    A(this, _t, null);
    A(this, rn, hi(() => (F(this, _t, Yt(i(this, $t))), () => {
      F(this, _t, null);
    })));
    F(this, Re, t), F(this, Ie, r), F(this, It, (s) => {
      var d = (
        /** @type {Effect} */
        D
      );
      d.b = this, d.f |= Fn, n(s);
    }), this.parent = /** @type {Effect} */
    D.b, this.transform_error = a ?? this.parent?.transform_error ?? ((s) => s), F(this, Ae, Kn(() => {
      z(this, G, On).call(this);
    }, gi));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Oa(t, i(this, Ar), i(this, Sr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!i(this, Ie).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    z(this, G, Dn).call(this, t, r), F(this, $t, i(this, $t) + t), !(!i(this, _t) || i(this, tr)) && (F(this, tr, !0), Lt(() => {
      F(this, tr, !1), i(this, _t) && sr(i(this, _t), i(this, $t));
    }));
  }
  get_effect_pending() {
    return i(this, rn).call(this), o(
      /** @type {Source<number>} */
      i(this, _t)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!i(this, Ie).onerror && !i(this, Ie).failed)
      throw t;
    P?.is_fork ? (i(this, $e) && P.skip_effect(i(this, $e)), i(this, xe) && P.skip_effect(i(this, xe)), i(this, De) && P.skip_effect(i(this, De)), P.on_fork_commit(() => {
      z(this, G, Mn).call(this, t);
    })) : z(this, G, Mn).call(this, t);
  }
}
Re = new WeakMap(), Ln = new WeakMap(), Ie = new WeakMap(), It = new WeakMap(), Ae = new WeakMap(), $e = new WeakMap(), xe = new WeakMap(), De = new WeakMap(), pt = new WeakMap(), $t = new WeakMap(), kt = new WeakMap(), tr = new WeakMap(), Ar = new WeakMap(), Sr = new WeakMap(), _t = new WeakMap(), rn = new WeakMap(), G = new WeakSet(), yi = function() {
  try {
    F(this, $e, Be(() => i(this, It).call(this, i(this, Re))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
mi = function(t) {
  const r = i(this, Ie).failed;
  r && F(this, De, Be(() => {
    r(
      i(this, Re),
      () => t,
      () => () => {
      }
    );
  }));
}, ki = function() {
  const t = i(this, Ie).pending;
  t && (this.is_pending = !0, F(this, xe, Be(() => t(i(this, Re)))), Lt(() => {
    var r = F(this, pt, document.createDocumentFragment()), n = At();
    r.append(n), F(this, $e, z(this, G, Jr).call(this, () => Be(() => i(this, It).call(this, n)))), i(this, kt) === 0 && (i(this, Re).before(r), F(this, pt, null), qt(
      /** @type {Effect} */
      i(this, xe),
      () => {
        F(this, xe, null);
      }
    ), z(this, G, Wr).call(
      this,
      /** @type {Batch} */
      P
    ));
  }));
}, On = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), F(this, kt, 0), F(this, $t, 0), F(this, $e, Be(() => {
      i(this, It).call(this, i(this, Re));
    })), i(this, kt) > 0) {
      var t = F(this, pt, document.createDocumentFragment());
      Jn(i(this, $e), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        i(this, Ie).pending
      );
      F(this, xe, Be(() => r(i(this, Re))));
    } else
      z(this, G, Wr).call(
        this,
        /** @type {Batch} */
        P
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
Wr = function(t) {
  this.is_pending = !1, t.transfer_effects(i(this, Ar), i(this, Sr));
}, /**
 * @template T
 * @param {() => T} fn
 */
Jr = function(t) {
  var r = D, n = C, a = Ve;
  it(i(this, Ae)), He(i(this, Ae)), ar(i(this, Ae).ctx);
  try {
    return Ut.ensure(), t();
  } catch (s) {
    return ja(s), null;
  } finally {
    it(r), He(n), ar(a);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Dn = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && z(n = this.parent, G, Dn).call(n, t, r);
    return;
  }
  F(this, kt, i(this, kt) + t), i(this, kt) === 0 && (z(this, G, Wr).call(this, r), i(this, xe) && qt(i(this, xe), () => {
    F(this, xe, null);
  }), i(this, pt) && (i(this, Re).before(i(this, pt)), F(this, pt, null)));
}, /**
 * @param {unknown} error
 */
Mn = function(t) {
  i(this, $e) && (Te(i(this, $e)), F(this, $e, null)), i(this, xe) && (Te(i(this, xe)), F(this, xe, null)), i(this, De) && (Te(i(this, De)), F(this, De, null));
  var r = i(this, Ie).onerror;
  let n = i(this, Ie).failed;
  var a = !1, s = !1;
  const d = () => {
    if (a) {
      di();
      return;
    }
    a = !0, s && ei(), i(this, De) !== null && qt(i(this, De), () => {
      F(this, De, null);
    }), z(this, G, Jr).call(this, () => {
      z(this, G, On).call(this);
    });
  }, u = (l) => {
    try {
      s = !0, r?.(l, d), s = !1;
    } catch (c) {
      wt(c, i(this, Ae) && i(this, Ae).parent);
    }
    n && F(this, De, z(this, G, Jr).call(this, () => {
      try {
        return Be(() => {
          var c = (
            /** @type {Effect} */
            D
          );
          c.b = this, c.f |= Fn, n(
            i(this, Re),
            () => l,
            () => d
          );
        });
      } catch (c) {
        return wt(
          c,
          /** @type {Effect} */
          i(this, Ae).parent
        ), null;
      }
    }));
  };
  Lt(() => {
    var l;
    try {
      l = this.transform_error(t);
    } catch (c) {
      wt(c, i(this, Ae) && i(this, Ae).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      u,
      /** @param {unknown} e */
      (c) => wt(c, i(this, Ae) && i(this, Ae).parent)
    ) : u(l);
  });
};
function wi(e, t, r, n) {
  const a = Hn;
  var s = e.filter((b) => !b.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(a));
    return;
  }
  var d = (
    /** @type {Effect} */
    D
  ), u = Ei(), l = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((b) => b.promise)) : null;
  function c(b) {
    u();
    try {
      n(b);
    } catch (v) {
      (d.f & ze) === 0 && wt(v, d);
    }
    Qr();
  }
  if (r.length === 0) {
    l.then(() => c(t.map(a)));
    return;
  }
  var _ = Ia();
  function m() {
    Promise.all(r.map((b) => /* @__PURE__ */ Ai(b))).then((b) => c([...t.map(a), ...b])).catch((b) => wt(b, d)).finally(() => _());
  }
  l ? l.then(() => {
    u(), m(), Qr();
  }) : m();
}
function Ei() {
  var e = (
    /** @type {Effect} */
    D
  ), t = C, r = Ve, n = (
    /** @type {Batch} */
    P
  );
  return function(s = !0) {
    it(e), He(t), ar(r), s && (e.f & ze) === 0 && (n?.activate(), n?.apply());
  };
}
function Qr(e = !0) {
  it(null), He(null), ar(null), e && P?.deactivate();
}
function Ia() {
  var e = (
    /** @type {Effect} */
    D
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    P
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (a = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, a);
  };
}
// @__NO_SIDE_EFFECTS__
function Hn(e) {
  var t = ge | he;
  return D !== null && (D.f |= lr), {
    ctx: Ve,
    deps: null,
    effects: null,
    equals: Aa,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      fe
    ),
    wv: 0,
    parent: D,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ai(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    D
  );
  n === null && Us();
  var a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Yt(
    /** @type {V} */
    fe
  ), d = !C, u = /* @__PURE__ */ new Map();
  return Bi(() => {
    var l = (
      /** @type {Effect} */
      D
    ), c = ka();
    a = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, c.reject).finally(Qr);
    } catch (v) {
      c.reject(v), Qr();
    }
    var _ = (
      /** @type {Batch} */
      P
    );
    if (d) {
      if ((l.f & Kt) !== 0)
        var m = Ia();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        u.get(_)?.reject(ut), u.delete(_);
      else {
        for (const v of u.values())
          v.reject(ut);
        u.clear();
      }
      u.set(_, c);
    }
    const b = (v, g = void 0) => {
      if (m) {
        var w = g === ut;
        m(w);
      }
      if (!(g === ut || (l.f & ze) !== 0)) {
        if (_.activate(), g)
          s.f |= Et, sr(s, g);
        else {
          (s.f & Et) !== 0 && (s.f ^= Et), sr(s, v);
          for (const [p, E] of u) {
            if (u.delete(p), p === _) break;
            E.reject(ut);
          }
        }
        _.deactivate();
      }
    };
    c.promise.then(b, (v) => b(null, v || "unknown"));
  }), Ri(() => {
    for (const l of u.values())
      l.reject(ut);
  }), new Promise((l) => {
    function c(_) {
      function m() {
        _ === a ? l(s) : c(a);
      }
      _.then(m, m);
    }
    c(a);
  });
}
// @__NO_SIDE_EFFECTS__
function oe(e) {
  const t = /* @__PURE__ */ Hn(e);
  return Za(t), t;
}
// @__NO_SIDE_EFFECTS__
function Si(e) {
  const t = /* @__PURE__ */ Hn(e);
  return t.equals = Sa, t;
}
function Ti(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Te(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Un(e) {
  var t, r = D, n = e.parent;
  if (!Tt && n !== null && (n.f & (ze | me)) !== 0)
    return oi(), e.v;
  it(n);
  try {
    e.f &= ~Ht, Ti(e), t = rs(e);
  } finally {
    it(r);
  }
  return t;
}
function $a(e) {
  var t = Un(e);
  if (!e.equals(t) && (e.wv = es(), (!P?.is_fork || e.deps === null) && (P !== null ? P.capture(e, t, !0) : e.v = t, e.deps === null))) {
    X(e, re);
    return;
  }
  Tt || (Ke !== null ? (Yn() || P?.is_fork) && Ke.set(e, t) : zn(e));
}
function Fi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(ut), t.teardown = zs, t.ac = null, kr(t, 0), Gn(t));
}
function Ba(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && ir(t);
}
let Pn = /* @__PURE__ */ new Set();
const zt = /* @__PURE__ */ new Map();
let La = !1;
function Yt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Aa,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function ye(e, t) {
  const r = Yt(e);
  return Za(r), r;
}
// @__NO_SIDE_EFFECTS__
function Ci(e, t = !1, r = !0) {
  const n = Yt(e);
  return t || (n.equals = Sa), n;
}
function pe(e, t, r = !1) {
  C !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ge || (C.f & Cn) !== 0) && Ca() && (C.f & (ge | at | mr | Cn)) !== 0 && (qe === null || !rr.call(qe, e)) && Qs();
  let n = r ? ht(t) : t;
  return sr(e, n, Ur);
}
function sr(e, t, r = null) {
  if (!e.equals(t)) {
    zt.set(e, Tt ? t : e.v);
    var n = Ut.ensure();
    if (n.capture(e, t), (e.f & ge) !== 0) {
      const a = (
        /** @type {Derived} */
        e
      );
      (e.f & he) !== 0 && Un(a), Ke === null && zn(a);
    }
    e.wv = es(), za(e, he, r), D !== null && (D.f & re) !== 0 && (D.f & (We | St)) === 0 && (Pe === null ? Vi([e]) : Pe.push(e)), !n.is_fork && Pn.size > 0 && !La && ji();
  }
  return t;
}
function ji() {
  La = !1;
  for (const e of Pn)
    (e.f & re) !== 0 && X(e, st), jr(e) && ir(e);
  Pn.clear();
}
function xr(e) {
  pe(e, e.v + 1);
}
function za(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, s = 0; s < a; s++) {
      var d = n[s], u = d.f, l = (u & he) === 0;
      if (l && X(d, t), (u & ge) !== 0) {
        var c = (
          /** @type {Derived} */
          d
        );
        Ke?.delete(c), (u & Ht) === 0 && (u & Le && (D === null || (D.f & Zr) === 0) && (d.f |= Ht), za(c, st, r));
      } else if (l) {
        var _ = (
          /** @type {Effect} */
          d
        );
        (u & at) !== 0 && ft !== null && ft.add(_), r !== null ? r.push(_) : Vn(_);
      }
    }
}
function ht(e) {
  if (typeof e != "object" || e === null || En in e)
    return e;
  const t = Ls(e);
  if (t !== $s && t !== Bs)
    return e;
  var r = /* @__PURE__ */ new Map(), n = ma(e), a = /* @__PURE__ */ ye(0), s = Vt, d = (u) => {
    if (Vt === s)
      return u();
    var l = C, c = Vt;
    He(null), _a(s);
    var _ = u();
    return He(l), _a(c), _;
  };
  return n && r.set("length", /* @__PURE__ */ ye(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Xs();
        var _ = r.get(l);
        return _ === void 0 ? d(() => {
          var m = /* @__PURE__ */ ye(c.value);
          return r.set(l, m), m;
        }) : pe(_, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = r.get(l);
        if (c === void 0) {
          if (l in u) {
            const _ = d(() => /* @__PURE__ */ ye(fe));
            r.set(l, _), xr(a);
          }
        } else
          pe(c, fe), xr(a);
        return !0;
      },
      get(u, l, c) {
        if (l === En)
          return e;
        var _ = r.get(l), m = l in u;
        if (_ === void 0 && (!m || br(u, l)?.writable) && (_ = d(() => {
          var v = ht(m ? u[l] : fe), g = /* @__PURE__ */ ye(v);
          return g;
        }), r.set(l, _)), _ !== void 0) {
          var b = o(_);
          return b === fe ? void 0 : b;
        }
        return Reflect.get(u, l, c);
      },
      getOwnPropertyDescriptor(u, l) {
        var c = Reflect.getOwnPropertyDescriptor(u, l);
        if (c && "value" in c) {
          var _ = r.get(l);
          _ && (c.value = o(_));
        } else if (c === void 0) {
          var m = r.get(l), b = m?.v;
          if (m !== void 0 && b !== fe)
            return {
              enumerable: !0,
              configurable: !0,
              value: b,
              writable: !0
            };
        }
        return c;
      },
      has(u, l) {
        if (l === En)
          return !0;
        var c = r.get(l), _ = c !== void 0 && c.v !== fe || Reflect.has(u, l);
        if (c !== void 0 || D !== null && (!_ || br(u, l)?.writable)) {
          c === void 0 && (c = d(() => {
            var b = _ ? ht(u[l]) : fe, v = /* @__PURE__ */ ye(b);
            return v;
          }), r.set(l, c));
          var m = o(c);
          if (m === fe)
            return !1;
        }
        return _;
      },
      set(u, l, c, _) {
        var m = r.get(l), b = l in u;
        if (n && l === "length")
          for (var v = c; v < /** @type {Source<number>} */
          m.v; v += 1) {
            var g = r.get(v + "");
            g !== void 0 ? pe(g, fe) : v in u && (g = d(() => /* @__PURE__ */ ye(fe)), r.set(v + "", g));
          }
        if (m === void 0)
          (!b || br(u, l)?.writable) && (m = d(() => /* @__PURE__ */ ye(void 0)), pe(m, ht(c)), r.set(l, m));
        else {
          b = m.v !== fe;
          var w = d(() => ht(c));
          pe(m, w);
        }
        var p = Reflect.getOwnPropertyDescriptor(u, l);
        if (p?.set && p.set.call(_, c), !b) {
          if (n && typeof l == "string") {
            var E = (
              /** @type {Source<number>} */
              r.get("length")
            ), ee = Number(l);
            Number.isInteger(ee) && ee >= E.v && pe(E, ee + 1);
          }
          xr(a);
        }
        return !0;
      },
      ownKeys(u) {
        o(a);
        var l = Reflect.ownKeys(u).filter((m) => {
          var b = r.get(m);
          return b === void 0 || b.v !== fe;
        });
        for (var [c, _] of r)
          _.v !== fe && !(c in u) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Zs();
      }
    }
  );
}
var va, qa, Va, Ha;
function Ni() {
  if (va === void 0) {
    va = window, qa = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Va = br(t, "firstChild").get, Ha = br(t, "nextSibling").get, da(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), da(r) && (r.__t = void 0);
  }
}
function At(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function en(e) {
  return (
    /** @type {TemplateNode | null} */
    Va.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Cr(e) {
  return (
    /** @type {TemplateNode | null} */
    Ha.call(e)
  );
}
function f(e, t) {
  return /* @__PURE__ */ en(e);
}
function _r(e, t = !1) {
  {
    var r = /* @__PURE__ */ en(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Cr(r) : r;
  }
}
function h(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Cr(n);
  return n;
}
function Oi(e) {
  e.textContent = "";
}
function Ua() {
  return !1;
}
function Di(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(li, e, void 0)
  );
}
function Ya(e) {
  var t = C, r = D;
  He(null), it(null);
  try {
    return e();
  } finally {
    He(t), it(r);
  }
}
function Mi(e) {
  D === null && (C === null && Ws(), Gs()), Tt && Ks();
}
function Pi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Ft(e, t) {
  var r = D;
  r !== null && (r.f & me) !== 0 && (e |= me);
  var n = {
    ctx: Ve,
    deps: null,
    nodes: null,
    f: e | he | Le,
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
  P?.register_created_effect(n);
  var a = n;
  if ((e & yr) !== 0)
    Jt !== null ? Jt.push(n) : Ut.ensure().schedule(n);
  else if (t !== null) {
    try {
      ir(n);
    } catch (d) {
      throw Te(n), d;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    (a.f & lr) === 0 && (a = a.first, (e & at) !== 0 && (e & nr) !== 0 && a !== null && (a.f |= nr));
  }
  if (a !== null && (a.parent = r, r !== null && Pi(a, r), C !== null && (C.f & ge) !== 0 && (e & St) === 0)) {
    var s = (
      /** @type {Derived} */
      C
    );
    (s.effects ?? (s.effects = [])).push(a);
  }
  return n;
}
function Yn() {
  return C !== null && !Ge;
}
function Ri(e) {
  const t = Ft(sn, null);
  return X(t, re), t.teardown = e, t;
}
function Ii(e) {
  Mi();
  var t = (
    /** @type {Effect} */
    D.f
  ), r = !C && (t & We) !== 0 && (t & Kt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Ve
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Ka(e);
}
function Ka(e) {
  return Ft(yr | Hs, e);
}
function $i(e) {
  Ut.ensure();
  const t = Ft(St | lr, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? qt(t, () => {
      Te(t), n(void 0);
    }) : (Te(t), n(void 0));
  });
}
function Bi(e) {
  return Ft(mr | lr, e);
}
function Li(e, t = 0) {
  return Ft(sn | t, e);
}
function de(e, t = [], r = [], n = []) {
  wi(n, t, r, (a) => {
    Ft(sn, () => e(...a.map(o)));
  });
}
function Kn(e, t = 0) {
  var r = Ft(at | t, e);
  return r;
}
function Be(e) {
  return Ft(We | lr, e);
}
function Ga(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Tt, n = C;
    pa(!0), He(null);
    try {
      t.call(null);
    } finally {
      pa(r), He(n);
    }
  }
}
function Gn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const a = r.ac;
    a !== null && Ya(() => {
      a.abort(ut);
    });
    var n = r.next;
    (r.f & St) !== 0 ? r.parent = null : Te(r, t), r = n;
  }
}
function zi(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & We) === 0 && Te(t), t = r;
  }
}
function Te(e, t = !0) {
  var r = !1;
  (t || (e.f & Vs) !== 0) && e.nodes !== null && e.nodes.end !== null && (qi(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), X(e, fa), Gn(e, t && !r), kr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  Ga(e), e.f ^= fa, e.f |= ze;
  var a = e.parent;
  a !== null && a.first !== null && Wa(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function qi(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Cr(e);
    e.remove(), e = r;
  }
}
function Wa(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function qt(e, t, r = !0) {
  var n = [];
  Ja(e, n, !0);
  var a = () => {
    r && Te(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var d = () => --s || a();
    for (var u of n)
      u.out(d);
  } else
    a();
}
function Ja(e, t, r) {
  if ((e.f & me) === 0) {
    e.f ^= me;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const u of n)
        (u.is_global || r) && t.push(u);
    for (var a = e.first; a !== null; ) {
      var s = a.next;
      if ((a.f & St) === 0) {
        var d = (a.f & nr) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (a.f & We) !== 0 && (e.f & at) !== 0;
        Ja(a, t, d ? r : !1);
      }
      a = s;
    }
  }
}
function Wn(e) {
  Xa(e, !0);
}
function Xa(e, t) {
  if ((e.f & me) !== 0) {
    e.f ^= me, (e.f & re) === 0 && (X(e, he), Ut.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, a = (r.f & nr) !== 0 || (r.f & We) !== 0;
      Xa(r, a ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const d of s)
        (d.is_global || t) && d.in();
  }
}
function Jn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var a = r === n ? null : /* @__PURE__ */ Cr(r);
      t.append(r), r = a;
    }
}
let Xr = !1, Tt = !1;
function pa(e) {
  Tt = e;
}
let C = null, Ge = !1;
function He(e) {
  C = e;
}
let D = null;
function it(e) {
  D = e;
}
let qe = null;
function Za(e) {
  C !== null && (qe === null ? qe = [e] : qe.push(e));
}
let Se = null, Ne = 0, Pe = null;
function Vi(e) {
  Pe = e;
}
let Qa = 1, Dt = 0, Vt = Dt;
function _a(e) {
  Vt = e;
}
function es() {
  return ++Qa;
}
function jr(e) {
  var t = e.f;
  if ((t & he) !== 0)
    return !0;
  if (t & ge && (e.f &= ~Ht), (t & st) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, a = 0; a < n; a++) {
      var s = r[a];
      if (jr(
        /** @type {Derived} */
        s
      ) && $a(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & Le) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ke === null && X(e, re);
  }
  return !1;
}
function ts(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(qe !== null && rr.call(qe, e)))
    for (var a = 0; a < n.length; a++) {
      var s = n[a];
      (s.f & ge) !== 0 ? ts(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? X(s, he) : (s.f & re) !== 0 && X(s, st), Vn(
        /** @type {Effect} */
        s
      ));
    }
}
function rs(e) {
  var w;
  var t = Se, r = Ne, n = Pe, a = C, s = qe, d = Ve, u = Ge, l = Vt, c = e.f;
  Se = /** @type {null | Value[]} */
  null, Ne = 0, Pe = null, C = (c & (We | St)) === 0 ? e : null, qe = null, ar(e.ctx), Ge = !1, Vt = ++Dt, e.ac !== null && (Ya(() => {
    e.ac.abort(ut);
  }), e.ac = null);
  try {
    e.f |= Zr;
    var _ = (
      /** @type {Function} */
      e.fn
    ), m = _();
    e.f |= Kt;
    var b = e.deps, v = P?.is_fork;
    if (Se !== null) {
      var g;
      if (v || kr(e, Ne), b !== null && Ne > 0)
        for (b.length = Ne + Se.length, g = 0; g < Se.length; g++)
          b[Ne + g] = Se[g];
      else
        e.deps = b = Se;
      if (Yn() && (e.f & Le) !== 0)
        for (g = Ne; g < b.length; g++)
          ((w = b[g]).reactions ?? (w.reactions = [])).push(e);
    } else !v && b !== null && Ne < b.length && (kr(e, Ne), b.length = Ne);
    if (Ca() && Pe !== null && !Ge && b !== null && (e.f & (ge | st | he)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Pe.length; g++)
        ts(
          Pe[g],
          /** @type {Effect} */
          e
        );
    if (a !== null && a !== e) {
      if (Dt++, a.deps !== null)
        for (let p = 0; p < r; p += 1)
          a.deps[p].rv = Dt;
      if (t !== null)
        for (const p of t)
          p.rv = Dt;
      Pe !== null && (n === null ? n = Pe : n.push(.../** @type {Source[]} */
      Pe));
    }
    return (e.f & Et) !== 0 && (e.f ^= Et), m;
  } catch (p) {
    return ja(p);
  } finally {
    e.f ^= Zr, Se = t, Ne = r, Pe = n, C = a, qe = s, ar(d), Ge = u, Vt = l;
  }
}
function Hi(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Rs.call(r, e);
    if (n !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[n] = r[a], r.pop());
    }
  }
  if (r === null && (t.f & ge) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Se === null || !rr.call(Se, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & Le) !== 0 && (s.f ^= Le, s.f &= ~Ht), s.v !== fe && zn(s), Fi(s), kr(s, 0);
  }
}
function kr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Hi(e, r[n]);
}
function ir(e) {
  var t = e.f;
  if ((t & ze) === 0) {
    X(e, re);
    var r = D, n = Xr;
    D = e, Xr = !0;
    try {
      (t & (at | wa)) !== 0 ? zi(e) : Gn(e), Ga(e);
      var a = rs(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = Qa;
      var s;
    } finally {
      Xr = n, D = r;
    }
  }
}
function o(e) {
  var t = e.f, r = (t & ge) !== 0;
  if (C !== null && !Ge) {
    var n = D !== null && (D.f & ze) !== 0;
    if (!n && (qe === null || !rr.call(qe, e))) {
      var a = C.deps;
      if ((C.f & Zr) !== 0)
        e.rv < Dt && (e.rv = Dt, Se === null && a !== null && a[Ne] === e ? Ne++ : Se === null ? Se = [e] : Se.push(e));
      else {
        (C.deps ?? (C.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [C] : rr.call(s, C) || s.push(C);
      }
    }
  }
  if (Tt && zt.has(e))
    return zt.get(e);
  if (r) {
    var d = (
      /** @type {Derived} */
      e
    );
    if (Tt) {
      var u = d.v;
      return ((d.f & re) === 0 && d.reactions !== null || as(d)) && (u = Un(d)), zt.set(d, u), u;
    }
    var l = (d.f & Le) === 0 && !Ge && C !== null && (Xr || (C.f & Le) !== 0), c = (d.f & Kt) === 0;
    jr(d) && (l && (d.f |= Le), $a(d)), l && !c && (Ba(d), ns(d));
  }
  if (Ke?.has(e))
    return Ke.get(e);
  if ((e.f & Et) !== 0)
    throw e.v;
  return e.v;
}
function ns(e) {
  if (e.f |= Le, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ge) !== 0 && (t.f & Le) === 0 && (Ba(
        /** @type {Derived} */
        t
      ), ns(
        /** @type {Derived} */
        t
      ));
}
function as(e) {
  if (e.v === fe) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (zt.has(t) || (t.f & ge) !== 0 && as(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Ui(e) {
  var t = Ge;
  try {
    return Ge = !0, e();
  } finally {
    Ge = t;
  }
}
const Yi = ["touchstart", "touchmove"];
function Ki(e) {
  return Yi.includes(e);
}
const Mt = Symbol("events"), ss = /* @__PURE__ */ new Set(), Rn = /* @__PURE__ */ new Set();
function Sn(e, t, r) {
  (t[Mt] ?? (t[Mt] = {}))[e] = r;
}
function Gi(e) {
  for (var t = 0; t < e.length; t++)
    ss.add(e[t]);
  for (var r of Rn)
    r(e);
}
let ha = null;
function ga(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, a = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    a[0] || e.target
  );
  ha = e;
  var d = 0, u = ha === e && e[Mt];
  if (u) {
    var l = a.indexOf(u);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Mt] = t;
      return;
    }
    var c = a.indexOf(t);
    if (c === -1)
      return;
    l <= c && (d = l);
  }
  if (s = /** @type {Element} */
  a[d] || e.target, s !== t) {
    Is(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var _ = C, m = D;
    He(null), it(null);
    try {
      for (var b, v = []; s !== null; ) {
        var g = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var w = s[Mt]?.[n];
          w != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && w.call(s, e);
        } catch (p) {
          b ? v.push(p) : b = p;
        }
        if (e.cancelBubble || g === t || g === null)
          break;
        s = g;
      }
      if (b) {
        for (let p of v)
          queueMicrotask(() => {
            throw p;
          });
        throw b;
      }
    } finally {
      e[Mt] = t, delete e.currentTarget, He(_), it(m);
    }
  }
}
const Wi = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Ji(e) {
  return (
    /** @type {string} */
    Wi?.createHTML(e) ?? e
  );
}
function Xi(e) {
  var t = Di("template");
  return t.innerHTML = Ji(e.replaceAll("<!>", "<!---->")), t.content;
}
function In(e, t) {
  var r = (
    /** @type {Effect} */
    D
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function $(e, t) {
  var r = (t & si) !== 0, n = (t & ii) !== 0, a, s = !e.startsWith("<!>");
  return () => {
    a === void 0 && (a = Xi(s ? e : "<!>" + e), r || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ en(a)));
    var d = (
      /** @type {TemplateNode} */
      n || qa ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ en(d)
      ), l = (
        /** @type {TemplateNode} */
        d.lastChild
      );
      In(u, l);
    } else
      In(d, d);
    return d;
  };
}
function ba() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = At();
  return e.append(t, r), In(t, r), e;
}
function R(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function k(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Zi(e, t) {
  return Qi(e, t);
}
const Hr = /* @__PURE__ */ new Map();
function Qi(e, { target: t, anchor: r, props: n = {}, events: a, context: s, intro: d = !0, transformError: u }) {
  Ni();
  var l = void 0, c = $i(() => {
    var _ = r ?? t.appendChild(At());
    bi(
      /** @type {TemplateNode} */
      _,
      {
        pending: () => {
        }
      },
      (v) => {
        Ta({});
        var g = (
          /** @type {ComponentContext} */
          Ve
        );
        s && (g.c = s), a && (n.$$events = a), l = e(v, n) || {}, Fa();
      },
      u
    );
    var m = /* @__PURE__ */ new Set(), b = (v) => {
      for (var g = 0; g < v.length; g++) {
        var w = v[g];
        if (!m.has(w)) {
          m.add(w);
          var p = Ki(w);
          for (const B of [t, document]) {
            var E = Hr.get(B);
            E === void 0 && (E = /* @__PURE__ */ new Map(), Hr.set(B, E));
            var ee = E.get(w);
            ee === void 0 ? (B.addEventListener(w, ga, { passive: p }), E.set(w, 1)) : E.set(w, ee + 1);
          }
        }
      }
    };
    return b(an(ss)), Rn.add(b), () => {
      for (var v of m)
        for (const p of [t, document]) {
          var g = (
            /** @type {Map<string, number>} */
            Hr.get(p)
          ), w = (
            /** @type {number} */
            g.get(v)
          );
          --w == 0 ? (p.removeEventListener(v, ga), g.delete(v), g.size === 0 && Hr.delete(p)) : g.set(v, w);
        }
      Rn.delete(b), _ !== r && _.parentNode?.removeChild(_);
    };
  });
  return $n.set(l, c), l;
}
let $n = /* @__PURE__ */ new WeakMap();
function el(e, t) {
  const r = $n.get(e);
  return r ? ($n.delete(e), r(t)) : Promise.resolve();
}
var Ye, rt, Me, Bt, Tr, Fr, nn;
class tl {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Ue(this, "anchor");
    /** @type {Map<Batch, Key>} */
    A(this, Ye, /* @__PURE__ */ new Map());
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
    A(this, rt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    A(this, Me, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    A(this, Bt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    A(this, Tr, !0);
    /**
     * @param {Batch} batch
     */
    A(this, Fr, (t) => {
      if (i(this, Ye).has(t)) {
        var r = (
          /** @type {Key} */
          i(this, Ye).get(t)
        ), n = i(this, rt).get(r);
        if (n)
          Wn(n), i(this, Bt).delete(r);
        else {
          var a = i(this, Me).get(r);
          a && (i(this, rt).set(r, a.effect), i(this, Me).delete(r), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), n = a.effect);
        }
        for (const [s, d] of i(this, Ye)) {
          if (i(this, Ye).delete(s), s === t)
            break;
          const u = i(this, Me).get(d);
          u && (Te(u.effect), i(this, Me).delete(d));
        }
        for (const [s, d] of i(this, rt)) {
          if (s === r || i(this, Bt).has(s)) continue;
          const u = () => {
            if (Array.from(i(this, Ye).values()).includes(s)) {
              var c = document.createDocumentFragment();
              Jn(d, c), c.append(At()), i(this, Me).set(s, { effect: d, fragment: c });
            } else
              Te(d);
            i(this, Bt).delete(s), i(this, rt).delete(s);
          };
          i(this, Tr) || !n ? (i(this, Bt).add(s), qt(d, u, !1)) : u();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    A(this, nn, (t) => {
      i(this, Ye).delete(t);
      const r = Array.from(i(this, Ye).values());
      for (const [n, a] of i(this, Me))
        r.includes(n) || (Te(a.effect), i(this, Me).delete(n));
    });
    this.anchor = t, F(this, Tr, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      P
    ), a = Ua();
    if (r && !i(this, rt).has(t) && !i(this, Me).has(t))
      if (a) {
        var s = document.createDocumentFragment(), d = At();
        s.append(d), i(this, Me).set(t, {
          effect: Be(() => r(d)),
          fragment: s
        });
      } else
        i(this, rt).set(
          t,
          Be(() => r(this.anchor))
        );
    if (i(this, Ye).set(n, t), a) {
      for (const [u, l] of i(this, rt))
        u === t ? n.unskip_effect(l) : n.skip_effect(l);
      for (const [u, l] of i(this, Me))
        u === t ? n.unskip_effect(l.effect) : n.skip_effect(l.effect);
      n.oncommit(i(this, Fr)), n.ondiscard(i(this, nn));
    } else
      i(this, Fr).call(this, n);
  }
}
Ye = new WeakMap(), rt = new WeakMap(), Me = new WeakMap(), Bt = new WeakMap(), Tr = new WeakMap(), Fr = new WeakMap(), nn = new WeakMap();
function dt(e, t, r = !1) {
  var n = new tl(e), a = r ? nr : 0;
  function s(d, u) {
    n.ensure(d, u);
  }
  Kn(() => {
    var d = !1;
    t((u, l = 0) => {
      d = !0, s(l, u);
    }), d || s(-1, null);
  }, a);
}
function Ce(e, t) {
  return t;
}
function rl(e, t, r) {
  for (var n = [], a = t.length, s, d = t.length, u = 0; u < a; u++) {
    let m = t[u];
    qt(
      m,
      () => {
        if (s) {
          if (s.pending.delete(m), s.done.add(m), s.pending.size === 0) {
            var b = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Bn(e, an(s.done)), b.delete(s), b.size === 0 && (e.outrogroups = null);
          }
        } else
          d -= 1;
      },
      !1
    );
  }
  if (d === 0) {
    var l = n.length === 0 && r !== null;
    if (l) {
      var c = (
        /** @type {Element} */
        r
      ), _ = (
        /** @type {Element} */
        c.parentNode
      );
      Oi(_), _.append(c), e.items.clear();
    }
    Bn(e, t, !l);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Bn(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const d of e.pending.values())
      for (const u of d)
        n.add(
          /** @type {EachItem} */
          e.items.get(u).e
        );
  }
  for (var a = 0; a < t.length; a++) {
    var s = t[a];
    if (n?.has(s)) {
      s.f |= nt;
      const d = document.createDocumentFragment();
      Jn(s, d);
    } else
      Te(t[a], r);
  }
}
var xa;
function je(e, t, r, n, a, s = null) {
  var d = e, u = /* @__PURE__ */ new Map(), l = (t & Ea) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    d = c.appendChild(At());
  }
  var _ = null, m = /* @__PURE__ */ Si(() => {
    var B = r();
    return ma(B) ? B : B == null ? [] : an(B);
  }), b, v = /* @__PURE__ */ new Map(), g = !0;
  function w(B) {
    (ee.effect.f & ze) === 0 && (ee.pending.delete(B), ee.fallback = _, nl(ee, b, d, t, n), _ !== null && (b.length === 0 ? (_.f & nt) === 0 ? Wn(_) : (_.f ^= nt, gr(_, null, d)) : qt(_, () => {
      _ = null;
    })));
  }
  function p(B) {
    ee.pending.delete(B);
  }
  var E = Kn(() => {
    b = /** @type {V[]} */
    o(m);
    for (var B = b.length, ue = /* @__PURE__ */ new Set(), ce = (
      /** @type {Batch} */
      P
    ), Je = Ua(), _e = 0; _e < B; _e += 1) {
      var Xe = b[_e], gt = n(Xe, _e), Z = g ? null : u.get(gt);
      Z ? (Z.v && sr(Z.v, Xe), Z.i && sr(Z.i, _e), Je && ce.unskip_effect(Z.e)) : (Z = al(
        u,
        g ? d : xa ?? (xa = At()),
        Xe,
        gt,
        _e,
        a,
        t,
        r
      ), g || (Z.e.f |= nt), u.set(gt, Z)), ue.add(gt);
    }
    if (B === 0 && s && !_ && (g ? _ = Be(() => s(d)) : (_ = Be(() => s(xa ?? (xa = At()))), _.f |= nt)), B > ue.size && Ys(), !g)
      if (v.set(ce, ue), Je) {
        for (const [or, Nr] of u)
          ue.has(or) || ce.skip_effect(Nr.e);
        ce.oncommit(w), ce.ondiscard(p);
      } else
        w(ce);
    o(m);
  }), ee = { effect: E, items: u, pending: v, outrogroups: null, fallback: _ };
  g = !1;
}
function hr(e) {
  for (; e !== null && (e.f & We) === 0; )
    e = e.next;
  return e;
}
function nl(e, t, r, n, a) {
  var s = (n & ni) !== 0, d = t.length, u = e.items, l = hr(e.effect.first), c, _ = null, m, b = [], v = [], g, w, p, E;
  if (s)
    for (E = 0; E < d; E += 1)
      g = t[E], w = a(g, E), p = /** @type {EachItem} */
      u.get(w).e, (p.f & nt) === 0 && (p.nodes?.a?.measure(), (m ?? (m = /* @__PURE__ */ new Set())).add(p));
  for (E = 0; E < d; E += 1) {
    if (g = t[E], w = a(g, E), p = /** @type {EachItem} */
    u.get(w).e, e.outrogroups !== null)
      for (const Z of e.outrogroups)
        Z.pending.delete(p), Z.done.delete(p);
    if ((p.f & me) !== 0 && (Wn(p), s && (p.nodes?.a?.unfix(), (m ?? (m = /* @__PURE__ */ new Set())).delete(p))), (p.f & nt) !== 0)
      if (p.f ^= nt, p === l)
        gr(p, null, r);
      else {
        var ee = _ ? _.next : l;
        p === e.effect.last && (e.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), yt(e, _, p), yt(e, p, ee), gr(p, ee, r), _ = p, b = [], v = [], l = hr(_.next);
        continue;
      }
    if (p !== l) {
      if (c !== void 0 && c.has(p)) {
        if (b.length < v.length) {
          var B = v[0], ue;
          _ = B.prev;
          var ce = b[0], Je = b[b.length - 1];
          for (ue = 0; ue < b.length; ue += 1)
            gr(b[ue], B, r);
          for (ue = 0; ue < v.length; ue += 1)
            c.delete(v[ue]);
          yt(e, ce.prev, Je.next), yt(e, _, ce), yt(e, Je, B), l = B, _ = Je, E -= 1, b = [], v = [];
        } else
          c.delete(p), gr(p, l, r), yt(e, p.prev, p.next), yt(e, p, _ === null ? e.effect.first : _.next), yt(e, _, p), _ = p;
        continue;
      }
      for (b = [], v = []; l !== null && l !== p; )
        (c ?? (c = /* @__PURE__ */ new Set())).add(l), v.push(l), l = hr(l.next);
      if (l === null)
        continue;
    }
    (p.f & nt) === 0 && b.push(p), _ = p, l = hr(p.next);
  }
  if (e.outrogroups !== null) {
    for (const Z of e.outrogroups)
      Z.pending.size === 0 && (Bn(e, an(Z.done)), e.outrogroups?.delete(Z));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var _e = [];
    if (c !== void 0)
      for (p of c)
        (p.f & me) === 0 && _e.push(p);
    for (; l !== null; )
      (l.f & me) === 0 && l !== e.fallback && _e.push(l), l = hr(l.next);
    var Xe = _e.length;
    if (Xe > 0) {
      var gt = (n & Ea) !== 0 && d === 0 ? r : null;
      if (s) {
        for (E = 0; E < Xe; E += 1)
          _e[E].nodes?.a?.measure();
        for (E = 0; E < Xe; E += 1)
          _e[E].nodes?.a?.fix();
      }
      rl(e, _e, gt);
    }
  }
  s && Lt(() => {
    if (m !== void 0)
      for (p of m)
        p.nodes?.a?.apply();
  });
}
function al(e, t, r, n, a, s, d, u) {
  var l = (d & ti) !== 0 ? (d & ai) === 0 ? /* @__PURE__ */ Ci(r, !1, !1) : Yt(r) : null, c = (d & ri) !== 0 ? Yt(a) : null;
  return {
    v: l,
    i: c,
    e: Be(() => (s(t, l ?? r, c ?? a, u), () => {
      e.delete(n);
    }))
  };
}
function gr(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, a = e.nodes.end, s = t && (t.f & nt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Cr(n)
      );
      if (s.before(n), n === a)
        return;
      n = d;
    }
}
function yt(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function is(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (r = is(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function sl() {
  for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = is(e)) && (n && (n += " "), n += t);
  return n;
}
function Ze(e) {
  return typeof e == "object" ? sl(e) : e ?? "";
}
function il(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function ll(e, t) {
  return e == null ? null : String(e);
}
function Qe(e, t, r, n, a, s) {
  var d = e.__className;
  if (d !== r || d === void 0) {
    var u = il(r);
    u == null ? e.removeAttribute("class") : e.className = u, e.__className = r;
  }
  return s;
}
function Tn(e, t, r, n) {
  var a = e.__style;
  if (a !== t) {
    var s = ll(t);
    s == null ? e.removeAttribute("style") : e.style.cssText = s, e.__style = t;
  }
  return n;
}
const ol = "5";
var ya;
typeof window < "u" && ((ya = window.__svelte ?? (window.__svelte = {})).v ?? (ya.v = /* @__PURE__ */ new Set())).add(ol);
var dl = /* @__PURE__ */ $('<div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-700 dark:text-red-300 mb-6"> </div>'), fl = /* @__PURE__ */ $('<div class="flex flex-col items-center justify-center py-16"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div> <span class="mt-3 text-gray-500 dark:text-gray-400">Loading metrics…</span></div>'), ul = /* @__PURE__ */ $('<div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 text-center"><p class="text-gray-700 dark:text-gray-300 font-medium">No accounting data available yet.</p> <p class="text-gray-500 dark:text-gray-400 text-sm mt-2">Financial data will appear here once transactions are recorded.</p></div>'), cl = /* @__PURE__ */ $('<div class="flex justify-between text-sm"><span class="text-gray-600 dark:text-gray-400"> </span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div>'), vl = /* @__PURE__ */ $('<div class="flex justify-between text-sm"><span class="text-gray-600 dark:text-gray-400"> </span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div>'), pl = /* @__PURE__ */ $('<div class="flex justify-between text-sm"><span class="text-gray-600 dark:text-gray-400"> </span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div>'), _l = /* @__PURE__ */ $('<div class="flex justify-between text-sm"><span class="text-gray-600 dark:text-gray-400"> </span> <span class="font-medium text-blue-700 dark:text-blue-400"> </span></div>'), hl = /* @__PURE__ */ $('<div class="flex justify-between text-sm"><span class="text-gray-600 dark:text-gray-400"> </span> <span class="font-medium text-red-500 dark:text-red-400"> </span></div>'), gl = /* @__PURE__ */ $('<div class="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-750 rounded-lg"><div><span class="font-medium text-gray-700 dark:text-gray-300"> </span> <p class="text-xs text-gray-500 dark:text-gray-400"> </p></div> <span> </span></div>'), bl = /* @__PURE__ */ $('<div class="p-4 bg-gray-50 dark:bg-gray-750 rounded-lg border border-gray-200 dark:border-gray-600"><div class="flex items-center justify-between mb-2"><span class="font-semibold text-gray-800 dark:text-gray-200"> </span> <span class="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full"> </span></div> <p class="text-sm text-gray-600 dark:text-gray-400"> </p></div>'), xl = /* @__PURE__ */ $('<div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6"><div class="bg-gray-50 dark:bg-gray-750 px-6 py-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-800 dark:text-white">🏦 Funds Overview</h3></div> <div class="p-6"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div></div></div>'), yl = /* @__PURE__ */ $('<tr class="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750"><td class="py-3 px-4"><div class="font-medium text-gray-800 dark:text-gray-200"> </div> <div class="text-xs text-gray-500 dark:text-gray-400"> </div></td><td class="py-3 px-4 text-right text-gray-600 dark:text-gray-400"> </td><td class="py-3 px-4 text-right text-gray-800 dark:text-gray-200 font-medium"> </td><td> </td><td class="py-3 px-4 text-center"><span> </span></td></tr>'), ml = /* @__PURE__ */ $('<div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6"><div class="bg-gray-50 dark:bg-gray-750 px-6 py-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-800 dark:text-white">📊 Budget Performance</h3></div> <div class="p-6 overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-gray-200 dark:border-gray-600"><th class="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Category</th><th class="text-right py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Planned</th><th class="text-right py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Actual</th><th class="text-right py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Variance</th><th class="text-center py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th></tr></thead><tbody></tbody></table></div></div>'), kl = /* @__PURE__ */ $('<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"><div class="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm"><div class="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Total Assets</div> <div class="text-2xl font-bold text-gray-800 dark:text-white"> </div></div> <div class="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm"><div class="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Total Liabilities</div> <div class="text-2xl font-bold text-gray-600 dark:text-gray-300"> </div></div> <div class="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm"><div class="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Net Position</div> <div class="text-2xl font-bold text-gray-800 dark:text-white"> </div></div> <div class="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm"><div class="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Net Income</div> <div> </div></div></div> <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6"><div class="bg-gray-50 dark:bg-gray-750 px-6 py-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-800 dark:text-white">📋 Balance Sheet</h3></div> <div class="p-6"><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div><h4 class="font-semibold text-blue-800 dark:text-blue-400 mb-3 flex items-center"><span class="w-3 h-3 bg-blue-800 dark:bg-blue-500 rounded-full mr-2"></span> Assets</h4> <div class="space-y-2"><!> <div class="border-t dark:border-gray-600 pt-2 mt-2 flex justify-between font-semibold"><span class="text-gray-700 dark:text-gray-300">Total Assets</span> <span class="text-blue-800 dark:text-blue-400"> </span></div></div></div> <div><h4 class="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center"><span class="w-3 h-3 bg-red-500 rounded-full mr-2"></span> Liabilities</h4> <div class="space-y-2"><!> <div class="border-t dark:border-gray-600 pt-2 mt-2 flex justify-between font-semibold"><span class="text-gray-700 dark:text-gray-300">Total Liabilities</span> <span class="text-red-600 dark:text-red-400"> </span></div></div></div> <div><h4 class="font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center"><span class="w-3 h-3 bg-blue-400 rounded-full mr-2"></span> Fund Balance</h4> <div class="space-y-2"><!> <div class="border-t dark:border-gray-600 pt-2 mt-2 flex justify-between font-semibold"><span class="text-gray-700 dark:text-gray-300">Net Position</span> <span class="text-blue-800 dark:text-blue-400"> </span></div></div></div></div></div></div> <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6"><div class="bg-gray-50 dark:bg-gray-750 px-6 py-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-800 dark:text-white">📈 Income Statement</h3></div> <div class="p-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h4 class="font-semibold text-blue-800 dark:text-blue-400 mb-3 flex items-center"><span class="w-3 h-3 bg-blue-800 dark:bg-blue-500 rounded-full mr-2"></span> Revenues</h4> <div class="space-y-2"><!> <div class="border-t dark:border-gray-600 pt-2 mt-2 flex justify-between font-semibold"><span class="text-gray-700 dark:text-gray-300">Total Revenues</span> <span class="text-blue-800 dark:text-blue-400"> </span></div></div></div> <div><h4 class="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center"><span class="w-3 h-3 bg-red-500 rounded-full mr-2"></span> Expenses</h4> <div class="space-y-2"><!> <div class="border-t dark:border-gray-600 pt-2 mt-2 flex justify-between font-semibold"><span class="text-gray-700 dark:text-gray-300">Total Expenses</span> <span class="text-red-600 dark:text-red-400"> </span></div></div></div></div> <div class="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"><div class="flex justify-between items-center"><span class="font-semibold text-blue-700 dark:text-blue-300"> </span> <span> </span></div></div></div></div> <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6"><div class="bg-gray-50 dark:bg-gray-750 px-6 py-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-800 dark:text-white">💰 Cash Flow Statement</h3></div> <div class="p-6 space-y-4"><!> <div class="border-t dark:border-gray-600 pt-4 flex justify-between items-center"><span class="font-semibold text-gray-800 dark:text-gray-200">Net Change in Cash</span> <span> </span></div></div></div> <!> <!> <div class="text-center text-sm text-gray-500 dark:text-gray-400 py-4"> </div>', 1), wl = /* @__PURE__ */ $('<div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 text-center"><p class="text-gray-700 dark:text-gray-300 font-medium">No data available for visualizations.</p></div>'), El = /* @__PURE__ */ $('<p class="text-gray-500 dark:text-gray-400 text-sm text-center py-4">No expense budgets with actual amounts</p>'), Al = /* @__PURE__ */ $('<div><div class="flex justify-between text-sm mb-1"><span class="text-gray-700 dark:text-gray-300"> </span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div> <div class="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-4"><div class="h-4 rounded-full transition-all"></div></div></div>'), Sl = /* @__PURE__ */ $('<div class="space-y-3"></div>'), Tl = /* @__PURE__ */ $('<p class="text-gray-500 dark:text-gray-400 text-sm text-center py-4">No fund balance data</p>'), Fl = /* @__PURE__ */ $('<div><div class="flex justify-between text-sm mb-1"><span class="text-gray-700 dark:text-gray-300"> </span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div> <div class="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-4"><div class="h-4 rounded-full transition-all"></div></div></div>'), Cl = /* @__PURE__ */ $('<div class="text-center mb-4"><span class="text-2xl font-bold text-gray-800 dark:text-white"> </span> <span class="text-sm text-gray-500 dark:text-gray-400 ml-1">total</span></div> <div class="space-y-3"></div>', 1), jl = /* @__PURE__ */ $('<p class="text-gray-500 dark:text-gray-400 text-sm text-center py-4">No revenue contribution data</p>'), Nl = /* @__PURE__ */ $('<div><div class="flex justify-between text-sm mb-1"><span class="text-gray-700 dark:text-gray-300 flex items-center gap-2"> <span> </span></span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div> <div class="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3"><div class="h-3 rounded-full transition-all"></div></div></div>'), Ol = /* @__PURE__ */ $('<div class="space-y-3"></div>'), Dl = /* @__PURE__ */ $('<div class="flex justify-between text-gray-600 dark:text-gray-400"><span> </span> <span> </span></div>'), Ml = /* @__PURE__ */ $('<div class="flex justify-between text-gray-600 dark:text-gray-400"><span> </span> <span> </span></div>'), Pl = /* @__PURE__ */ $('<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"><div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"><h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-4">📊 Tax Allocation Breakdown</h4> <!></div> <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"><h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-4">💰 Asset Portfolio</h4> <!></div></div> <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6"><h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-4">🌳 Tax Contribution Analysis</h4> <!></div> <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6"><h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-4">💰 Cash Flow Breakdown</h4> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="bg-white dark:bg-gray-750 rounded-lg p-4 border border-gray-200 dark:border-gray-600"><div class="flex items-center justify-between mb-3"><span class="text-sm font-medium text-blue-700 dark:text-blue-400">📈 Income</span> <span class="text-lg font-bold text-blue-800 dark:text-blue-300"> </span></div> <div class="space-y-1 text-xs"></div></div> <div class="bg-white dark:bg-gray-750 rounded-lg p-4 border border-gray-200 dark:border-gray-600"><div class="flex items-center justify-between mb-3"><span class="text-sm font-medium text-red-600 dark:text-red-400">📉 Expenses</span> <span class="text-lg font-bold text-red-500 dark:text-red-400"> </span></div> <div class="space-y-1 text-xs"></div></div></div> <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"><div class="flex items-center justify-between"><span class="text-sm font-medium text-blue-700 dark:text-blue-300">💰 Net Flow</span> <span> </span></div></div></div>', 1), Rl = /* @__PURE__ */ $('<div class="w-full max-w-5xl mx-auto px-4 py-6 font-sans"><div class="mb-6 border-b border-gray-200 dark:border-gray-700"><nav class="flex space-x-8"><button>📊 Accounting</button> <button>📈 Visualizations</button> <button class="ml-auto py-3 px-3 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 disabled:opacity-50">↻ Refresh</button></nav></div> <!> <!></div>');
function Il(e, t) {
  Ta(t, !0);
  const r = t.ctx.theme?.cn ?? ((...x) => x.filter(Boolean).join(" "));
  let n = /* @__PURE__ */ ye("accounting"), a = /* @__PURE__ */ ye(ht([])), s = /* @__PURE__ */ ye(ht([])), d = /* @__PURE__ */ ye(ht([])), u = /* @__PURE__ */ ye(ht([])), l = /* @__PURE__ */ ye(!0), c = /* @__PURE__ */ ye("");
  const _ = {
    cash: "#1E40AF",
    receivable: "#1D4ED8",
    equipment: "#2563EB",
    land: "#3B82F6",
    bond: "#60A5FA",
    payable: "#1D4ED8",
    deferred_revenue: "#2563EB",
    fund_balance: "#1E40AF",
    tax: "#1E40AF",
    fee: "#1D4ED8",
    grant: "#2563EB",
    personnel: "#3B82F6",
    supplies: "#60A5FA",
    services: "#1D4ED8",
    debt: "#2563EB",
    capital: "#1E40AF",
    operating: "#93C5FD",
    general: "#1E40AF",
    special_revenue: "#2563EB",
    capital_projects: "#60A5FA"
  };
  async function m(x, y = 100, S = "desc") {
    const H = await t.ctx.backend.get_objects_paginated(x, 0, y, S), j = typeof H == "string" ? JSON.parse(H) : H;
    return j?.success && j?.data?.objectsListPaginated ? j.data.objectsListPaginated.objects.map((N) => JSON.parse(N)) : j?.data ?? (Array.isArray(j) ? j : []);
  }
  async function b() {
    pe(l, !0), pe(c, "");
    try {
      const [x, y, S, H] = await Promise.all([
        m("Budget", 100, "asc"),
        m("LedgerEntry", 1e3, "desc"),
        m("Fund", 100, "asc"),
        m("FiscalPeriod", 100, "desc")
      ]);
      pe(a, x, !0), pe(s, y, !0), pe(d, S, !0), pe(u, H, !0);
    } catch (x) {
      pe(c, x?.message || String(x), !0);
    } finally {
      pe(l, !1);
    }
  }
  Ii(() => {
    b();
  });
  function v(x) {
    return x >= 1e6 ? `${(x / 1e6).toFixed(2)}M` : x >= 1e3 ? `${(x / 1e3).toFixed(1)}K` : x.toLocaleString();
  }
  function g(x) {
    return x.split("_").map((y) => y.charAt(0).toUpperCase() + y.slice(1)).join(" ");
  }
  let w = /* @__PURE__ */ oe(() => {
    const x = {}, y = {}, S = {};
    for (const T of o(s)) {
      const M = T.category || "other", lt = T.debit || 0, Ct = T.credit || 0;
      switch (T.entry_type) {
        case "asset":
          x[M] = (x[M] || 0) + lt - Ct;
          break;
        case "liability":
          y[M] = (y[M] || 0) + Ct - lt;
          break;
        case "equity":
          S[M] = (S[M] || 0) + Ct - lt;
          break;
      }
    }
    const H = Object.values(x).reduce((T, M) => T + M, 0), j = Object.values(y).reduce((T, M) => T + M, 0), N = Object.values(S).reduce((T, M) => T + M, 0);
    return {
      assets: x,
      liabilities: y,
      equity: S,
      totalAssets: H,
      totalLiabilities: j,
      totalEquity: N,
      netPosition: H - j
    };
  }), p = /* @__PURE__ */ oe(() => {
    const x = {}, y = {};
    for (const j of o(s)) {
      const N = j.category || "other";
      j.entry_type === "revenue" ? x[N] = (x[N] || 0) + (j.credit || 0) - (j.debit || 0) : j.entry_type === "expense" && (y[N] = (y[N] || 0) + (j.debit || 0) - (j.credit || 0));
    }
    const S = Object.values(x).reduce((j, N) => j + N, 0), H = Object.values(y).reduce((j, N) => j + N, 0);
    return {
      revenues: x,
      expenses: y,
      totalRevenues: S,
      totalExpenses: H,
      netIncome: S - H
    };
  }), E = /* @__PURE__ */ oe(() => {
    let x = 0, y = 0, S = 0;
    for (const H of o(s).filter((j) => j.category === "cash")) {
      const j = (H.debit || 0) - (H.credit || 0), N = H.tags || "";
      N.includes("investing") || N.includes("capital") ? y += j : N.includes("financing") || N.includes("bond") ? S += j : x += j;
    }
    return {
      operating: x,
      investing: y,
      financing: S,
      netChange: x + y + S
    };
  }), ee = /* @__PURE__ */ oe(() => o(a).filter((x) => x.budget_type === "expense" && (x.actual_amount || 0) > 0).map((x, y) => ({
    label: x.name || x.category || "Other",
    amount: x.actual_amount || 0,
    color: _[x.category] || `hsl(217, 91%, ${30 + y * 10}%)`
  }))), B = /* @__PURE__ */ oe(() => {
    const x = {};
    for (const y of o(d))
      x[y.code] = {
        name: y.name || y.code,
        balance: 0,
        color: _[y.fund_type] || "#3B82F6"
      };
    for (const y of o(s))
      if (y.fund && y.category === "cash") {
        const S = typeof y.fund == "string" ? y.fund : y.fund.code;
        x[S] && (x[S].balance += (y.debit || 0) - (y.credit || 0));
      }
    return Object.entries(x).filter(([, y]) => y.balance > 0).map(([y, S]) => ({ symbol: y, ...S }));
  }), ue = /* @__PURE__ */ oe(() => {
    const x = {};
    for (const y of o(s).filter((S) => S.entry_type === "revenue" && (S.credit || 0) > 0)) {
      const S = y.description || y.category || "Other";
      x[S] || (x[S] = {
        name: S,
        type: y.category === "tax" ? "citizen" : "organization",
        contribution: 0,
        color: y.category === "tax" ? "#3B82F6" : "#10B981"
      }), x[S].contribution += y.credit;
    }
    return Object.values(x);
  }), ce = /* @__PURE__ */ oe(() => {
    const x = {}, y = {};
    for (const T of o(s))
      if (T.entry_type === "revenue" && (T.credit || 0) > 0) {
        const M = T.category || "other";
        x[M] = (x[M] || 0) + T.credit;
      } else if (T.entry_type === "expense" && (T.debit || 0) > 0) {
        const M = T.category || "other";
        y[M] = (y[M] || 0) + T.debit;
      }
    const S = Object.entries(x).map(([T, M]) => ({ category: g(T), amount: M })), H = Object.entries(y).map(([T, M]) => ({ category: g(T), amount: M })), j = S.reduce((T, M) => T + M.amount, 0), N = H.reduce((T, M) => T + M.amount, 0);
    return {
      income: S,
      expenses: H,
      totalIncome: j,
      totalExpenses: N,
      net: j - N
    };
  });
  function Je(x, y) {
    return y <= 0 ? "0%" : `${Math.min(100, x / y * 100).toFixed(1)}%`;
  }
  var _e = Rl(), Xe = f(_e), gt = f(Xe), Z = f(gt), or = h(Z, 2), Nr = h(or, 2), Xn = h(Xe, 2);
  {
    var ls = (x) => {
      var y = dl(), S = f(y);
      de(() => k(S, o(c))), R(x, y);
    };
    dt(Xn, (x) => {
      o(c) && x(ls);
    });
  }
  var os = h(Xn, 2);
  {
    var ds = (x) => {
      var y = fl();
      R(x, y);
    }, fs = (x) => {
      var y = ba(), S = _r(y);
      {
        var H = (N) => {
          var T = ul();
          R(N, T);
        }, j = (N) => {
          var T = kl(), M = _r(T), lt = f(M), Ct = h(f(lt), 2), ln = f(Ct), Or = h(lt, 2), on = h(f(Or), 2), dn = f(on), Dr = h(Or, 2), fn = h(f(Dr), 2), Mr = f(fn), un = h(Dr, 2), Pr = h(f(un), 2), cn = f(Pr), Rr = h(M, 2), Ir = h(f(Rr), 2), $r = f(Ir), dr = f($r), vn = h(f(dr), 2), Br = f(vn);
          je(Br, 17, () => Object.entries(o(w).assets), Ce, (W, q) => {
            var V = /* @__PURE__ */ oe(() => pr(o(q), 2));
            let ne = () => o(V)[0], ae = () => o(V)[1];
            var L = cl(), O = f(L), J = f(O), te = h(O, 2), se = f(te);
            de(
              (ie, le) => {
                k(J, ie), k(se, le);
              },
              [() => g(ne()), () => v(ae())]
            ), R(W, L);
          });
          var pn = h(Br, 2), _n = h(f(pn), 2), Lr = f(_n), zr = h(dr, 2), hn = h(f(zr), 2), qr = f(hn);
          je(qr, 17, () => Object.entries(o(w).liabilities), Ce, (W, q) => {
            var V = /* @__PURE__ */ oe(() => pr(o(q), 2));
            let ne = () => o(V)[0], ae = () => o(V)[1];
            var L = vl(), O = f(L), J = f(O), te = h(O, 2), se = f(te);
            de(
              (ie, le) => {
                k(J, ie), k(se, le);
              },
              [() => g(ne()), () => v(ae())]
            ), R(W, L);
          });
          var gn = h(qr, 2), bn = h(f(gn), 2), Vr = f(bn), xn = h(zr, 2), I = h(f(xn), 2), U = f(I);
          je(U, 17, () => Object.entries(o(w).equity), Ce, (W, q) => {
            var V = /* @__PURE__ */ oe(() => pr(o(q), 2));
            let ne = () => o(V)[0], ae = () => o(V)[1];
            var L = pl(), O = f(L), J = f(O), te = h(O, 2), se = f(te);
            de(
              (ie, le) => {
                k(J, ie), k(se, le);
              },
              [() => g(ne()), () => v(ae())]
            ), R(W, L);
          });
          var ve = h(U, 2), Y = h(f(ve), 2), K = f(Y), ke = h(Rr, 2), Fe = h(f(ke), 2), we = f(Fe), be = f(we), Ee = h(f(be), 2), ot = f(Ee);
          je(ot, 17, () => Object.entries(o(p).revenues), Ce, (W, q) => {
            var V = /* @__PURE__ */ oe(() => pr(o(q), 2));
            let ne = () => o(V)[0], ae = () => o(V)[1];
            var L = _l(), O = f(L), J = f(O), te = h(O, 2), se = f(te);
            de(
              (ie, le) => {
                k(J, ie), k(se, `+${le ?? ""}`);
              },
              [() => g(ne()), () => v(ae())]
            ), R(W, L);
          });
          var bt = h(ot, 2), xt = h(f(bt), 2), jt = f(xt), Nt = h(be, 2), fr = h(f(Nt), 2), Gt = f(fr);
          je(Gt, 17, () => Object.entries(o(p).expenses), Ce, (W, q) => {
            var V = /* @__PURE__ */ oe(() => pr(o(q), 2));
            let ne = () => o(V)[0], ae = () => o(V)[1];
            var L = hl(), O = f(L), J = f(O), te = h(O, 2), se = f(te);
            de(
              (ie, le) => {
                k(J, ie), k(se, `-${le ?? ""}`);
              },
              [() => g(ne()), () => v(ae())]
            ), R(W, L);
          });
          var ur = h(Gt, 2), yn = h(f(ur), 2), mn = f(yn), cs = h(we, 2), vs = f(cs), Zn = f(vs), ps = f(Zn), Qn = h(Zn, 2), _s = f(Qn), ea = h(ke, 2), hs = h(f(ea), 2), ta = f(hs);
          je(
            ta,
            17,
            () => [
              {
                label: "Operating Activities",
                sub: "Day-to-day operations",
                value: o(E).operating
              },
              {
                label: "Investing Activities",
                sub: "Capital expenditures",
                value: o(E).investing
              },
              {
                label: "Financing Activities",
                sub: "Bonds and debt",
                value: o(E).financing
              }
            ],
            Ce,
            (W, q) => {
              var V = gl(), ne = f(V), ae = f(ne), L = f(ae), O = h(ae, 2), J = f(O), te = h(ne, 2), se = f(te);
              de(
                (ie, le) => {
                  k(L, o(q).label), k(J, o(q).sub), Qe(te, 1, ie), k(se, `${o(q).value >= 0 ? "+" : ""}${le ?? ""}`);
                },
                [
                  () => Ze(r("text-lg font-semibold", o(q).value >= 0 ? "text-blue-800 dark:text-blue-400" : "text-red-600 dark:text-red-400")),
                  () => v(o(q).value)
                ]
              ), R(W, V);
            }
          );
          var gs = h(ta, 2), ra = h(f(gs), 2), bs = f(ra), na = h(ea, 2);
          {
            var xs = (W) => {
              var q = xl(), V = h(f(q), 2), ne = f(V);
              je(ne, 21, () => o(d), Ce, (ae, L) => {
                var O = bl(), J = f(O), te = f(J), se = f(te), ie = h(te, 2), le = f(ie), cr = h(J, 2), vr = f(cr);
                de(() => {
                  k(se, o(L).name || o(L).code), k(le, o(L).fund_type || "general"), k(vr, o(L).description || "No description");
                }), R(ae, O);
              }), R(W, q);
            };
            dt(na, (W) => {
              o(d).length > 0 && W(xs);
            });
          }
          var aa = h(na, 2);
          {
            var ys = (W) => {
              var q = ml(), V = h(f(q), 2), ne = f(V), ae = h(f(ne));
              je(ae, 21, () => o(a), Ce, (L, O) => {
                const J = /* @__PURE__ */ oe(() => (o(O).actual_amount || 0) - (o(O).planned_amount || 0)), te = /* @__PURE__ */ oe(() => o(O).planned_amount ? (o(J) / o(O).planned_amount * 100).toFixed(1) : "0");
                var se = yl(), ie = f(se), le = f(ie), cr = f(le), vr = h(le, 2), ws = f(vr), sa = h(ie), Es = f(sa), ia = h(sa), As = f(ia), kn = h(ia), Ss = f(kn), Ts = h(kn), la = f(Ts), Fs = f(la);
                de(
                  (Cs, js, Ns, Os, Ds) => {
                    k(cr, o(O).name || o(O).category), k(ws, o(O).budget_type || "expense"), k(Es, Cs), k(As, js), Qe(kn, 1, Ns), k(Ss, `${o(J) >= 0 ? "+" : ""}${Os ?? ""} (${o(te) ?? ""}%)`), Qe(la, 1, Ds), k(Fs, o(O).status || "draft");
                  },
                  [
                    () => v(o(O).planned_amount || 0),
                    () => v(o(O).actual_amount || 0),
                    () => Ze(r("py-3 px-4 text-right", o(J) >= 0 ? "text-blue-700 dark:text-blue-400" : "text-red-500 dark:text-red-400")),
                    () => v(o(J)),
                    () => Ze(r("px-2 py-1 text-xs rounded-full", o(O).status === "adopted" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400" : o(O).status === "draft" ? "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400" : "bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400"))
                  ]
                ), R(L, se);
              }), R(W, q);
            };
            dt(aa, (W) => {
              o(a).length > 0 && W(ys);
            });
          }
          var ms = h(aa, 2), ks = f(ms);
          de(
            (W, q, V, ne, ae, L, O, J, te, se, ie, le, cr, vr) => {
              k(ln, W), k(dn, q), k(Mr, V), Qe(Pr, 1, ne), k(cn, `${o(p).netIncome >= 0 ? "+" : ""}${ae ?? ""}`), k(Lr, L), k(Vr, O), k(K, J), k(jt, te), k(mn, se), k(ps, `Net Income (${o(p).netIncome >= 0 ? "Surplus" : "Deficit"})`), Qe(Qn, 1, ie), k(_s, `${o(p).netIncome >= 0 ? "+" : ""}${le ?? ""}`), Qe(ra, 1, cr), k(bs, `${o(E).netChange >= 0 ? "+" : ""}${vr ?? ""}`), k(ks, `${o(s).length ?? ""} ledger entries · ${o(d).length ?? ""} funds · ${o(a).length ?? ""} budgets`);
            },
            [
              () => v(o(w).totalAssets),
              () => v(o(w).totalLiabilities),
              () => v(o(w).netPosition),
              () => Ze(r("text-2xl font-bold", o(p).netIncome >= 0 ? "text-green-700 dark:text-green-400" : "text-red-600 dark:text-red-400")),
              () => v(o(p).netIncome),
              () => v(o(w).totalAssets),
              () => v(o(w).totalLiabilities),
              () => v(o(w).netPosition),
              () => v(o(p).totalRevenues),
              () => v(o(p).totalExpenses),
              () => Ze(r("text-xl font-bold", o(p).netIncome >= 0 ? "text-blue-800 dark:text-blue-300" : "text-red-600 dark:text-red-400")),
              () => v(o(p).netIncome),
              () => Ze(r("text-xl font-bold", o(E).netChange >= 0 ? "text-blue-800 dark:text-blue-400" : "text-red-600 dark:text-red-400")),
              () => v(o(E).netChange)
            ]
          ), R(N, T);
        };
        dt(S, (N) => {
          o(s).length === 0 && o(d).length === 0 && o(a).length === 0 ? N(H) : N(j, -1);
        });
      }
      R(x, y);
    }, us = (x) => {
      var y = ba(), S = _r(y);
      {
        var H = (N) => {
          var T = wl();
          R(N, T);
        }, j = (N) => {
          var T = Pl(), M = _r(T), lt = f(M), Ct = h(f(lt), 2);
          {
            var ln = (I) => {
              var U = El();
              R(I, U);
            }, Or = (I) => {
              const U = /* @__PURE__ */ oe(() => Math.max(...o(ee).map((Y) => Y.amount)));
              var ve = Sl();
              je(ve, 21, () => o(ee), Ce, (Y, K) => {
                var ke = Al(), Fe = f(ke), we = f(Fe), be = f(we), Ee = h(we, 2), ot = f(Ee), bt = h(Fe, 2), xt = f(bt);
                de(
                  (jt, Nt) => {
                    k(be, o(K).label), k(ot, jt), Tn(xt, `width: ${Nt ?? ""}; background: ${o(K).color ?? ""}`);
                  },
                  [
                    () => v(o(K).amount),
                    () => Je(o(K).amount, o(U))
                  ]
                ), R(Y, ke);
              }), R(I, ve);
            };
            dt(Ct, (I) => {
              o(ee).length === 0 ? I(ln) : I(Or, -1);
            });
          }
          var on = h(lt, 2), dn = h(f(on), 2);
          {
            var Dr = (I) => {
              var U = Tl();
              R(I, U);
            }, fn = (I) => {
              const U = /* @__PURE__ */ oe(() => Math.max(...o(B).map((be) => be.balance))), ve = /* @__PURE__ */ oe(() => o(B).reduce((be, Ee) => be + Ee.balance, 0));
              var Y = Cl(), K = _r(Y), ke = f(K), Fe = f(ke), we = h(K, 2);
              je(we, 21, () => o(B), Ce, (be, Ee) => {
                var ot = Fl(), bt = f(ot), xt = f(bt), jt = f(xt), Nt = h(xt, 2), fr = f(Nt), Gt = h(bt, 2), ur = f(Gt);
                de(
                  (yn, mn) => {
                    k(jt, `${o(Ee).name ?? ""} (${o(Ee).symbol ?? ""})`), k(fr, yn), Tn(ur, `width: ${mn ?? ""}; background: ${o(Ee).color ?? ""}`);
                  },
                  [
                    () => v(o(Ee).balance),
                    () => Je(o(Ee).balance, o(U))
                  ]
                ), R(be, ot);
              }), de((be) => k(Fe, be), [() => v(o(ve))]), R(I, Y);
            };
            dt(dn, (I) => {
              o(B).length === 0 ? I(Dr) : I(fn, -1);
            });
          }
          var Mr = h(M, 2), un = h(f(Mr), 2);
          {
            var Pr = (I) => {
              var U = jl();
              R(I, U);
            }, cn = (I) => {
              const U = /* @__PURE__ */ oe(() => Math.max(...o(ue).map((Y) => Y.contribution)));
              var ve = Ol();
              je(ve, 21, () => o(ue).sort((Y, K) => K.contribution - Y.contribution), Ce, (Y, K) => {
                var ke = Nl(), Fe = f(ke), we = f(Fe), be = f(we), Ee = h(be), ot = f(Ee), bt = h(we, 2), xt = f(bt), jt = h(Fe, 2), Nt = f(jt);
                de(
                  (fr, Gt, ur) => {
                    k(be, `${o(K).name ?? ""} `), Qe(Ee, 1, fr), k(ot, o(K).type), k(xt, Gt), Tn(Nt, `width: ${ur ?? ""}; background: ${o(K).color ?? ""}`);
                  },
                  [
                    () => Ze(r("text-xs px-1.5 py-0.5 rounded", o(K).type === "citizen" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" : "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400")),
                    () => v(o(K).contribution),
                    () => Je(o(K).contribution, o(U))
                  ]
                ), R(Y, ke);
              }), R(I, ve);
            };
            dt(un, (I) => {
              o(ue).length === 0 ? I(Pr) : I(cn, -1);
            });
          }
          var Rr = h(Mr, 2), Ir = h(f(Rr), 2), $r = f(Ir), dr = f($r), vn = h(f(dr), 2), Br = f(vn), pn = h(dr, 2);
          je(pn, 21, () => o(ce).income, Ce, (I, U) => {
            var ve = Dl(), Y = f(ve), K = f(Y), ke = h(Y, 2), Fe = f(ke);
            de(
              (we) => {
                k(K, o(U).category), k(Fe, we);
              },
              [() => v(o(U).amount)]
            ), R(I, ve);
          });
          var _n = h($r, 2), Lr = f(_n), zr = h(f(Lr), 2), hn = f(zr), qr = h(Lr, 2);
          je(qr, 21, () => o(ce).expenses, Ce, (I, U) => {
            var ve = Ml(), Y = f(ve), K = f(Y), ke = h(Y, 2), Fe = f(ke);
            de(
              (we) => {
                k(K, o(U).category), k(Fe, we);
              },
              [() => v(o(U).amount)]
            ), R(I, ve);
          });
          var gn = h(Ir, 2), bn = f(gn), Vr = h(f(bn), 2), xn = f(Vr);
          de(
            (I, U, ve, Y) => {
              k(Br, `+${I ?? ""}`), k(hn, `-${U ?? ""}`), Qe(Vr, 1, ve), k(xn, `${o(ce).net >= 0 ? "+" : ""}${Y ?? ""}`);
            },
            [
              () => v(o(ce).totalIncome),
              () => v(o(ce).totalExpenses),
              () => Ze(r("text-lg font-bold", o(ce).net >= 0 ? "text-blue-800 dark:text-blue-300" : "text-red-600 dark:text-red-400")),
              () => v(o(ce).net)
            ]
          ), R(N, T);
        };
        dt(S, (N) => {
          o(s).length === 0 && o(a).length === 0 ? N(H) : N(j, -1);
        });
      }
      R(x, y);
    };
    dt(os, (x) => {
      o(l) ? x(ds) : o(n) === "accounting" ? x(fs, 1) : x(us, -1);
    });
  }
  de(
    (x, y) => {
      Qe(Z, 1, x), Qe(or, 1, y), Nr.disabled = o(l);
    },
    [
      () => Ze(r("py-3 px-1 border-b-2 font-medium text-sm transition-colors", o(n) === "accounting" ? "border-blue-500 text-blue-600 dark:text-blue-400" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400")),
      () => Ze(r("py-3 px-1 border-b-2 font-medium text-sm transition-colors", o(n) === "visualizations" ? "border-blue-500 text-blue-600 dark:text-blue-400" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400"))
    ]
  ), Sn("click", Z, () => pe(n, "accounting")), Sn("click", or, () => pe(n, "visualizations")), Sn("click", Nr, b), R(e, _e), Fa();
}
Gi(["click"]);
function Ll(e, t) {
  const r = Zi(Il, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        el(r);
      } catch {
      }
    }
  };
}
export {
  Ll as default
};
