var ga = Object.defineProperty;
var Qn = (e) => {
  throw TypeError(e);
};
var ba = (e, t, r) => t in e ? ga(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ne = (e, t, r) => ba(e, typeof t != "symbol" ? t + "" : t, r), dn = (e, t, r) => t.has(e) || Qn("Cannot " + r);
var l = (e, t, r) => (dn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), T = (e, t, r) => t.has(e) ? Qn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), C = (e, t, r, n) => (dn(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), P = (e, t, r) => (dn(e, t, "access private method"), r);
var Nn = Array.isArray, ya = Array.prototype.indexOf, Wt = Array.prototype.includes, Kr = Array.from, ma = Object.defineProperty, dr = Object.getOwnPropertyDescriptor, wa = Object.prototype, xa = Array.prototype, Ea = Object.getPrototypeOf, ei = Object.isExtensible;
const ka = () => {
};
function Ta(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ci() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
function Sa(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const oe = 2, Kt = 4, Jr = 8, vi = 1 << 24, Ve = 16, Fe = 32, ht = 64, hn = 128, Le = 512, X = 1024, le = 2048, $e = 4096, fe = 8192, Ae = 16384, Ft = 32768, gn = 1 << 25, Jt = 65536, bn = 1 << 17, La = 1 << 18, tr = 1 << 19, Aa = 1 << 20, Be = 1 << 25, Mt = 65536, $r = 1 << 21, _r = 1 << 22, vt = 1 << 23, Vt = Symbol("$state"), Qe = new class extends Error {
  constructor() {
    super(...arguments);
    Ne(this, "name", "StaleReactionError");
    Ne(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Ca(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Oa() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Da(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Na(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ma() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ra(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function za() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Fa() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ia() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Pa() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function qa() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ja = 1, Ua = 2, pi = 4, Ba = 8, Va = 16, $a = 1, Ha = 2, ee = Symbol(), Za = "http://www.w3.org/1999/xhtml";
function Ya() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ga() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Wa() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function _i(e) {
  return e === this.v;
}
function Ka(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function hi(e) {
  return !Ka(e, this.v);
}
let pe = null;
function Xt(e) {
  pe = e;
}
function gi(e, t = !1, r) {
  pe = {
    p: pe,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      N
    ),
    l: null
  };
}
function bi(e) {
  var t = (
    /** @type {ComponentContext} */
    pe
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      qi(n);
  }
  return t.i = !0, pe = t.p, /** @type {T} */
  {};
}
function yi() {
  return !0;
}
let xt = [];
function mi() {
  var e = xt;
  xt = [], Ta(e);
}
function pt(e) {
  if (xt.length === 0 && !cr) {
    var t = xt;
    queueMicrotask(() => {
      t === xt && mi();
    });
  }
  xt.push(e);
}
function Ja() {
  for (; xt.length > 0; )
    mi();
}
function wi(e) {
  var t = N;
  if (t === null)
    return D.f |= vt, e;
  if ((t.f & Ft) === 0 && (t.f & Kt) === 0)
    throw e;
  ct(e, t);
}
function ct(e, t) {
  for (; t !== null; ) {
    if ((t.f & hn) !== 0) {
      if ((t.f & Ft) === 0)
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
const Xa = -7169;
function G(e, t) {
  e.f = e.f & Xa | t;
}
function Mn(e) {
  (e.f & Le) !== 0 || e.deps === null ? G(e, X) : G(e, $e);
}
function xi(e) {
  if (e !== null)
    for (const t of e)
      (t.f & oe) === 0 || (t.f & Mt) === 0 || (t.f ^= Mt, xi(
        /** @type {Derived} */
        t.deps
      ));
}
function Ei(e, t, r) {
  (e.f & le) !== 0 ? t.add(e) : (e.f & $e) !== 0 && r.add(e), xi(e.deps), G(e, X);
}
const mt = /* @__PURE__ */ new Set();
let E = null, Re = null, yn = null, cr = !1, cn = !1, Bt = null, Ir = null;
var ti = 0;
let Qa = 1;
var $t, Ht, Tt, et, Pe, gr, be, br, ft, tt, qe, Zt, Yt, St, K, Pr, ki, qr, mn, jr, es;
const Yr = class Yr {
  constructor() {
    T(this, K);
    Ne(this, "id", Qa++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Ne(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Ne(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    T(this, $t, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    T(this, Ht, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    T(this, Tt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    T(this, et, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    T(this, Pe, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    T(this, gr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    T(this, be, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    T(this, br, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    T(this, ft, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    T(this, tt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    T(this, qe, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    T(this, Zt, /* @__PURE__ */ new Set());
    Ne(this, "is_fork", !1);
    T(this, Yt, !1);
    /** @type {Set<Batch>} */
    T(this, St, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, qe).has(t) || l(this, qe).set(t, { d: [], m: [] }), l(this, Zt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = l(this, qe).get(t);
    if (n) {
      l(this, qe).delete(t);
      for (var i of n.d)
        G(i, le), r(i);
      for (i of n.m)
        G(i, $e), r(i);
    }
    l(this, Zt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== ee && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & vt) === 0 && (this.current.set(t, [r, n]), Re?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    E = this;
  }
  deactivate() {
    E = null, Re = null;
  }
  flush() {
    try {
      cn = !0, E = this, P(this, K, qr).call(this);
    } finally {
      ti = 0, yn = null, Bt = null, Ir = null, cn = !1, E = null, Re = null, Ot.clear();
    }
  }
  discard() {
    for (const t of l(this, Ht)) t(this);
    l(this, Ht).clear(), l(this, Tt).clear(), mt.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, br).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = l(this, et).get(r) ?? 0;
    if (l(this, et).set(r, n + 1), t) {
      let i = l(this, Pe).get(r) ?? 0;
      l(this, Pe).set(r, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let i = l(this, et).get(r) ?? 0;
    if (i === 1 ? l(this, et).delete(r) : l(this, et).set(r, i - 1), t) {
      let a = l(this, Pe).get(r) ?? 0;
      a === 1 ? l(this, Pe).delete(r) : l(this, Pe).set(r, a - 1);
    }
    l(this, Yt) || n || (C(this, Yt, !0), pt(() => {
      C(this, Yt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      l(this, ft).add(n);
    for (const n of r)
      l(this, tt).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, $t).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, Ht).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    l(this, Tt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, Tt)) t(this);
    l(this, Tt).clear();
  }
  settled() {
    return (l(this, gr) ?? C(this, gr, ci())).promise;
  }
  static ensure() {
    if (E === null) {
      const t = E = new Yr();
      cn || (mt.add(E), cr || pt(() => {
        E === t && t.flush();
      }));
    }
    return E;
  }
  apply() {
    {
      Re = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (yn = t, t.b?.is_pending && (t.f & (Kt | Jr | vi)) !== 0 && (t.f & Ft) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Bt !== null && r === N && (D === null || (D.f & oe) === 0))
        return;
      if ((n & (ht | Fe)) !== 0) {
        if ((n & X) === 0)
          return;
        r.f ^= X;
      }
    }
    l(this, be).push(r);
  }
};
$t = new WeakMap(), Ht = new WeakMap(), Tt = new WeakMap(), et = new WeakMap(), Pe = new WeakMap(), gr = new WeakMap(), be = new WeakMap(), br = new WeakMap(), ft = new WeakMap(), tt = new WeakMap(), qe = new WeakMap(), Zt = new WeakMap(), Yt = new WeakMap(), St = new WeakMap(), K = new WeakSet(), Pr = function() {
  return this.is_fork || l(this, Pe).size > 0;
}, ki = function() {
  for (const n of l(this, St))
    for (const i of l(n, Pe).keys()) {
      for (var t = !1, r = i; r.parent !== null; ) {
        if (l(this, qe).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, qr = function() {
  var f;
  if (ti++ > 1e3 && (mt.delete(this), rs()), !P(this, K, Pr).call(this)) {
    for (const s of l(this, ft))
      l(this, tt).delete(s), G(s, le), this.schedule(s);
    for (const s of l(this, tt))
      G(s, $e), this.schedule(s);
  }
  const t = l(this, be);
  C(this, be, []), this.apply();
  var r = Bt = [], n = [], i = Ir = [];
  for (const s of t)
    try {
      P(this, K, mn).call(this, s, r, n);
    } catch (d) {
      throw Li(s), d;
    }
  if (E = null, i.length > 0) {
    var a = Yr.ensure();
    for (const s of i)
      a.schedule(s);
  }
  if (Bt = null, Ir = null, P(this, K, Pr).call(this) || P(this, K, ki).call(this)) {
    P(this, K, jr).call(this, n), P(this, K, jr).call(this, r);
    for (const [s, d] of l(this, qe))
      Si(s, d);
  } else {
    l(this, et).size === 0 && mt.delete(this), l(this, ft).clear(), l(this, tt).clear();
    for (const s of l(this, $t)) s(this);
    l(this, $t).clear(), ri(n), ri(r), l(this, gr)?.resolve();
  }
  var u = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    E
  );
  if (l(this, be).length > 0) {
    const s = u ?? (u = this);
    l(s, be).push(...l(this, be).filter((d) => !l(s, be).includes(d)));
  }
  u !== null && (mt.add(u), P(f = u, K, qr).call(f));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
mn = function(t, r, n) {
  t.f ^= X;
  for (var i = t.first; i !== null; ) {
    var a = i.f, u = (a & (Fe | ht)) !== 0, f = u && (a & X) !== 0, s = f || (a & fe) !== 0 || l(this, qe).has(i);
    if (!s && i.fn !== null) {
      u ? i.f ^= X : (a & Kt) !== 0 ? r.push(i) : kr(i) && ((a & Ve) !== 0 && l(this, tt).add(i), er(i));
      var d = i.first;
      if (d !== null) {
        i = d;
        continue;
      }
    }
    for (; i !== null; ) {
      var c = i.next;
      if (c !== null) {
        i = c;
        break;
      }
      i = i.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
jr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Ei(t[r], l(this, ft), l(this, tt));
}, es = function() {
  var c, y, h;
  for (const _ of mt) {
    var t = _.id < this.id, r = [];
    for (const [v, [S, p]] of this.current) {
      if (_.current.has(v)) {
        var n = (
          /** @type {[any, boolean]} */
          _.current.get(v)[0]
        );
        if (t && S !== n)
          _.current.set(v, [S, p]);
        else
          continue;
      }
      r.push(v);
    }
    var i = [..._.current.keys()].filter((v) => !this.current.has(v));
    if (i.length === 0)
      t && _.discard();
    else if (r.length > 0) {
      if (t)
        for (const v of l(this, Zt))
          _.unskip_effect(v, (S) => {
            var p;
            (S.f & (Ve | _r)) !== 0 ? _.schedule(S) : P(p = _, K, jr).call(p, [S]);
          });
      _.activate();
      var a = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
      for (var f of r)
        Ti(f, i, a, u);
      u = /* @__PURE__ */ new Map();
      var s = [..._.current.keys()].filter(
        (v) => this.current.has(v) ? (
          /** @type {[any, boolean]} */
          this.current.get(v)[0] !== v
        ) : !0
      );
      for (const v of l(this, br))
        (v.f & (Ae | fe | bn)) === 0 && Rn(v, s, u) && ((v.f & (_r | Ve)) !== 0 ? (G(v, le), _.schedule(v)) : l(_, ft).add(v));
      if (l(_, be).length > 0) {
        _.apply();
        for (var d of l(_, be))
          P(c = _, K, mn).call(c, d, [], []);
        C(_, be, []);
      }
      _.deactivate();
    }
  }
  for (const _ of mt)
    l(_, St).has(this) && (l(_, St).delete(this), l(_, St).size === 0 && !P(y = _, K, Pr).call(y) && (_.activate(), P(h = _, K, qr).call(h)));
};
let Rt = Yr;
function ts(e) {
  var t = cr;
  cr = !0;
  try {
    for (var r; ; ) {
      if (Ja(), E === null)
        return (
          /** @type {T} */
          r
        );
      E.flush();
    }
  } finally {
    cr = t;
  }
}
function rs() {
  try {
    za();
  } catch (e) {
    ct(e, yn);
  }
}
let Xe = null;
function ri(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Ae | fe)) === 0 && kr(n) && (Xe = /* @__PURE__ */ new Set(), er(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Bi(n), Xe?.size > 0)) {
        Ot.clear();
        for (const i of Xe) {
          if ((i.f & (Ae | fe)) !== 0) continue;
          const a = [i];
          let u = i.parent;
          for (; u !== null; )
            Xe.has(u) && (Xe.delete(u), a.push(u)), u = u.parent;
          for (let f = a.length - 1; f >= 0; f--) {
            const s = a[f];
            (s.f & (Ae | fe)) === 0 && er(s);
          }
        }
        Xe.clear();
      }
    }
    Xe = null;
  }
}
function Ti(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const a = i.f;
      (a & oe) !== 0 ? Ti(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (a & (_r | Ve)) !== 0 && (a & le) === 0 && Rn(i, t, n) && (G(i, le), zn(
        /** @type {Effect} */
        i
      ));
    }
}
function Rn(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Wt.call(t, i))
        return !0;
      if ((i.f & oe) !== 0 && Rn(
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
function zn(e) {
  E.schedule(e);
}
function Si(e, t) {
  if (!((e.f & Fe) !== 0 && (e.f & X) !== 0)) {
    (e.f & le) !== 0 ? t.d.push(e) : (e.f & $e) !== 0 && t.m.push(e), G(e, X);
    for (var r = e.first; r !== null; )
      Si(r, t), r = r.next;
  }
}
function Li(e) {
  G(e, X);
  for (var t = e.first; t !== null; )
    Li(t), t = t.next;
}
function ns(e) {
  let t = 0, r = zt(0), n;
  return () => {
    Pn() && (o(r), jn(() => (t === 0 && (n = Qr(() => e(() => vr(r)))), t += 1, () => {
      pt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, vr(r));
      });
    })));
  };
}
var is = Jt | tr;
function as(e, t, r, n) {
  new ss(e, t, r, n);
}
var Ee, Dn, ke, Lt, de, Te, ue, ye, rt, At, dt, Gt, yr, mr, nt, Gr, H, ls, os, us, wn, Ur, Br, xn, En;
class ss {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    T(this, H);
    /** @type {Boundary | null} */
    Ne(this, "parent");
    Ne(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Ne(this, "transform_error");
    /** @type {TemplateNode} */
    T(this, Ee);
    /** @type {TemplateNode | null} */
    T(this, Dn, null);
    /** @type {BoundaryProps} */
    T(this, ke);
    /** @type {((anchor: Node) => void)} */
    T(this, Lt);
    /** @type {Effect} */
    T(this, de);
    /** @type {Effect | null} */
    T(this, Te, null);
    /** @type {Effect | null} */
    T(this, ue, null);
    /** @type {Effect | null} */
    T(this, ye, null);
    /** @type {DocumentFragment | null} */
    T(this, rt, null);
    T(this, At, 0);
    T(this, dt, 0);
    T(this, Gt, !1);
    /** @type {Set<Effect>} */
    T(this, yr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    T(this, mr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    T(this, nt, null);
    T(this, Gr, ns(() => (C(this, nt, zt(l(this, At))), () => {
      C(this, nt, null);
    })));
    C(this, Ee, t), C(this, ke, r), C(this, Lt, (a) => {
      var u = (
        /** @type {Effect} */
        N
      );
      u.b = this, u.f |= hn, n(a);
    }), this.parent = /** @type {Effect} */
    N.b, this.transform_error = i ?? this.parent?.transform_error ?? ((a) => a), C(this, de, Un(() => {
      P(this, H, wn).call(this);
    }, is));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Ei(t, l(this, yr), l(this, mr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, ke).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    P(this, H, xn).call(this, t, r), C(this, At, l(this, At) + t), !(!l(this, nt) || l(this, Gt)) && (C(this, Gt, !0), pt(() => {
      C(this, Gt, !1), l(this, nt) && Qt(l(this, nt), l(this, At));
    }));
  }
  get_effect_pending() {
    return l(this, Gr).call(this), o(
      /** @type {Source<number>} */
      l(this, nt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, ke).onerror && !l(this, ke).failed)
      throw t;
    E?.is_fork ? (l(this, Te) && E.skip_effect(l(this, Te)), l(this, ue) && E.skip_effect(l(this, ue)), l(this, ye) && E.skip_effect(l(this, ye)), E.on_fork_commit(() => {
      P(this, H, En).call(this, t);
    })) : P(this, H, En).call(this, t);
  }
}
Ee = new WeakMap(), Dn = new WeakMap(), ke = new WeakMap(), Lt = new WeakMap(), de = new WeakMap(), Te = new WeakMap(), ue = new WeakMap(), ye = new WeakMap(), rt = new WeakMap(), At = new WeakMap(), dt = new WeakMap(), Gt = new WeakMap(), yr = new WeakMap(), mr = new WeakMap(), nt = new WeakMap(), Gr = new WeakMap(), H = new WeakSet(), ls = function() {
  try {
    C(this, Te, Se(() => l(this, Lt).call(this, l(this, Ee))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
os = function(t) {
  const r = l(this, ke).failed;
  r && C(this, ye, Se(() => {
    r(
      l(this, Ee),
      () => t,
      () => () => {
      }
    );
  }));
}, us = function() {
  const t = l(this, ke).pending;
  t && (this.is_pending = !0, C(this, ue, Se(() => t(l(this, Ee)))), pt(() => {
    var r = C(this, rt, document.createDocumentFragment()), n = _t();
    r.append(n), C(this, Te, P(this, H, Br).call(this, () => Se(() => l(this, Lt).call(this, n)))), l(this, dt) === 0 && (l(this, Ee).before(r), C(this, rt, null), Dt(
      /** @type {Effect} */
      l(this, ue),
      () => {
        C(this, ue, null);
      }
    ), P(this, H, Ur).call(
      this,
      /** @type {Batch} */
      E
    ));
  }));
}, wn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), C(this, dt, 0), C(this, At, 0), C(this, Te, Se(() => {
      l(this, Lt).call(this, l(this, Ee));
    })), l(this, dt) > 0) {
      var t = C(this, rt, document.createDocumentFragment());
      $n(l(this, Te), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        l(this, ke).pending
      );
      C(this, ue, Se(() => r(l(this, Ee))));
    } else
      P(this, H, Ur).call(
        this,
        /** @type {Batch} */
        E
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
Ur = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, yr), l(this, mr));
}, /**
 * @template T
 * @param {() => T} fn
 */
Br = function(t) {
  var r = N, n = D, i = pe;
  He(l(this, de)), Oe(l(this, de)), Xt(l(this, de).ctx);
  try {
    return Rt.ensure(), t();
  } catch (a) {
    return wi(a), null;
  } finally {
    He(r), Oe(n), Xt(i);
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
    this.parent && P(n = this.parent, H, xn).call(n, t, r);
    return;
  }
  C(this, dt, l(this, dt) + t), l(this, dt) === 0 && (P(this, H, Ur).call(this, r), l(this, ue) && Dt(l(this, ue), () => {
    C(this, ue, null);
  }), l(this, rt) && (l(this, Ee).before(l(this, rt)), C(this, rt, null)));
}, /**
 * @param {unknown} error
 */
En = function(t) {
  l(this, Te) && (ve(l(this, Te)), C(this, Te, null)), l(this, ue) && (ve(l(this, ue)), C(this, ue, null)), l(this, ye) && (ve(l(this, ye)), C(this, ye, null));
  var r = l(this, ke).onerror;
  let n = l(this, ke).failed;
  var i = !1, a = !1;
  const u = () => {
    if (i) {
      Wa();
      return;
    }
    i = !0, a && qa(), l(this, ye) !== null && Dt(l(this, ye), () => {
      C(this, ye, null);
    }), P(this, H, Br).call(this, () => {
      P(this, H, wn).call(this);
    });
  }, f = (s) => {
    try {
      a = !0, r?.(s, u), a = !1;
    } catch (d) {
      ct(d, l(this, de) && l(this, de).parent);
    }
    n && C(this, ye, P(this, H, Br).call(this, () => {
      try {
        return Se(() => {
          var d = (
            /** @type {Effect} */
            N
          );
          d.b = this, d.f |= hn, n(
            l(this, Ee),
            () => s,
            () => u
          );
        });
      } catch (d) {
        return ct(
          d,
          /** @type {Effect} */
          l(this, de).parent
        ), null;
      }
    }));
  };
  pt(() => {
    var s;
    try {
      s = this.transform_error(t);
    } catch (d) {
      ct(d, l(this, de) && l(this, de).parent);
      return;
    }
    s !== null && typeof s == "object" && typeof /** @type {any} */
    s.then == "function" ? s.then(
      f,
      /** @param {unknown} e */
      (d) => ct(d, l(this, de) && l(this, de).parent)
    ) : f(s);
  });
};
function fs(e, t, r, n) {
  const i = Fn;
  var a = e.filter((h) => !h.settled);
  if (r.length === 0 && a.length === 0) {
    n(t.map(i));
    return;
  }
  var u = (
    /** @type {Effect} */
    N
  ), f = ds(), s = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((h) => h.promise)) : null;
  function d(h) {
    f();
    try {
      n(h);
    } catch (_) {
      (u.f & Ae) === 0 && ct(_, u);
    }
    Hr();
  }
  if (r.length === 0) {
    s.then(() => d(t.map(i)));
    return;
  }
  var c = Ai();
  function y() {
    Promise.all(r.map((h) => /* @__PURE__ */ cs(h))).then((h) => d([...t.map(i), ...h])).catch((h) => ct(h, u)).finally(() => c());
  }
  s ? s.then(() => {
    f(), y(), Hr();
  }) : y();
}
function ds() {
  var e = (
    /** @type {Effect} */
    N
  ), t = D, r = pe, n = (
    /** @type {Batch} */
    E
  );
  return function(a = !0) {
    He(e), Oe(t), Xt(r), a && (e.f & Ae) === 0 && (n?.activate(), n?.apply());
  };
}
function Hr(e = !0) {
  He(null), Oe(null), Xt(null), e && E?.deactivate();
}
function Ai() {
  var e = (
    /** @type {Effect} */
    N
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    E
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (i = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function Fn(e) {
  var t = oe | le;
  return N !== null && (N.f |= tr), {
    ctx: pe,
    deps: null,
    effects: null,
    equals: _i,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ee
    ),
    wv: 0,
    parent: N,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function cs(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    N
  );
  n === null && Oa();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = zt(
    /** @type {V} */
    ee
  ), u = !D, f = /* @__PURE__ */ new Map();
  return Ls(() => {
    var s = (
      /** @type {Effect} */
      N
    ), d = ci();
    i = d.promise;
    try {
      Promise.resolve(e()).then(d.resolve, d.reject).finally(Hr);
    } catch (_) {
      d.reject(_), Hr();
    }
    var c = (
      /** @type {Batch} */
      E
    );
    if (u) {
      if ((s.f & Ft) !== 0)
        var y = Ai();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        f.get(c)?.reject(Qe), f.delete(c);
      else {
        for (const _ of f.values())
          _.reject(Qe);
        f.clear();
      }
      f.set(c, d);
    }
    const h = (_, v = void 0) => {
      if (y) {
        var S = v === Qe;
        y(S);
      }
      if (!(v === Qe || (s.f & Ae) !== 0)) {
        if (c.activate(), v)
          a.f |= vt, Qt(a, v);
        else {
          (a.f & vt) !== 0 && (a.f ^= vt), Qt(a, _);
          for (const [p, A] of f) {
            if (f.delete(p), p === c) break;
            A.reject(Qe);
          }
        }
        c.deactivate();
      }
    };
    d.promise.then(h, (_) => h(null, _ || "unknown"));
  }), qn(() => {
    for (const s of f.values())
      s.reject(Qe);
  }), new Promise((s) => {
    function d(c) {
      function y() {
        c === i ? s(a) : d(i);
      }
      c.then(y, y);
    }
    d(i);
  });
}
// @__NO_SIDE_EFFECTS__
function vn(e) {
  const t = /* @__PURE__ */ Fn(e);
  return Hi(t), t;
}
// @__NO_SIDE_EFFECTS__
function vs(e) {
  const t = /* @__PURE__ */ Fn(e);
  return t.equals = hi, t;
}
function ps(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      ve(
        /** @type {Effect} */
        t[r]
      );
  }
}
function In(e) {
  var t, r = N, n = e.parent;
  if (!gt && n !== null && (n.f & (Ae | fe)) !== 0)
    return Ya(), e.v;
  He(n);
  try {
    e.f &= ~Mt, ps(e), t = Wi(e);
  } finally {
    He(r);
  }
  return t;
}
function Ci(e) {
  var t = In(e);
  if (!e.equals(t) && (e.wv = Yi(), (!E?.is_fork || e.deps === null) && (E !== null ? E.capture(e, t, !0) : e.v = t, e.deps === null))) {
    G(e, X);
    return;
  }
  gt || (Re !== null ? (Pn() || E?.is_fork) && Re.set(e, t) : Mn(e));
}
function _s(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Qe), t.teardown = ka, t.ac = null, hr(t, 0), Bn(t));
}
function Oi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && er(t);
}
let kn = /* @__PURE__ */ new Set();
const Ot = /* @__PURE__ */ new Map();
let Di = !1;
function zt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: _i,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function Y(e, t) {
  const r = zt(e);
  return Hi(r), r;
}
// @__NO_SIDE_EFFECTS__
function hs(e, t = !1, r = !0) {
  const n = zt(e);
  return t || (n.equals = hi), n;
}
function x(e, t, r = !1) {
  D !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ze || (D.f & bn) !== 0) && yi() && (D.f & (oe | Ve | _r | bn)) !== 0 && (Ce === null || !Wt.call(Ce, e)) && Pa();
  let n = r ? Ue(t) : t;
  return Qt(e, n, Ir);
}
function Qt(e, t, r = null) {
  if (!e.equals(t)) {
    Ot.set(e, gt ? t : e.v);
    var n = Rt.ensure();
    if (n.capture(e, t), (e.f & oe) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & le) !== 0 && In(i), Re === null && Mn(i);
    }
    e.wv = Yi(), Ni(e, le, r), N !== null && (N.f & X) !== 0 && (N.f & (Fe | ht)) === 0 && (xe === null ? Os([e]) : xe.push(e)), !n.is_fork && kn.size > 0 && !Di && gs();
  }
  return t;
}
function gs() {
  Di = !1;
  for (const e of kn)
    (e.f & X) !== 0 && G(e, $e), kr(e) && er(e);
  kn.clear();
}
function vr(e) {
  x(e, e.v + 1);
}
function Ni(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, a = 0; a < i; a++) {
      var u = n[a], f = u.f, s = (f & le) === 0;
      if (s && G(u, t), (f & oe) !== 0) {
        var d = (
          /** @type {Derived} */
          u
        );
        Re?.delete(d), (f & Mt) === 0 && (f & Le && (N === null || (N.f & $r) === 0) && (u.f |= Mt), Ni(d, $e, r));
      } else if (s) {
        var c = (
          /** @type {Effect} */
          u
        );
        (f & Ve) !== 0 && Xe !== null && Xe.add(c), r !== null ? r.push(c) : zn(c);
      }
    }
}
function Ue(e) {
  if (typeof e != "object" || e === null || Vt in e)
    return e;
  const t = Ea(e);
  if (t !== wa && t !== xa)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Nn(e), i = /* @__PURE__ */ Y(0), a = Nt, u = (f) => {
    if (Nt === a)
      return f();
    var s = D, d = Nt;
    Oe(null), li(a);
    var c = f();
    return Oe(s), li(d), c;
  };
  return n && r.set("length", /* @__PURE__ */ Y(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, s, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Fa();
        var c = r.get(s);
        return c === void 0 ? u(() => {
          var y = /* @__PURE__ */ Y(d.value);
          return r.set(s, y), y;
        }) : x(c, d.value, !0), !0;
      },
      deleteProperty(f, s) {
        var d = r.get(s);
        if (d === void 0) {
          if (s in f) {
            const c = u(() => /* @__PURE__ */ Y(ee));
            r.set(s, c), vr(i);
          }
        } else
          x(d, ee), vr(i);
        return !0;
      },
      get(f, s, d) {
        if (s === Vt)
          return e;
        var c = r.get(s), y = s in f;
        if (c === void 0 && (!y || dr(f, s)?.writable) && (c = u(() => {
          var _ = Ue(y ? f[s] : ee), v = /* @__PURE__ */ Y(_);
          return v;
        }), r.set(s, c)), c !== void 0) {
          var h = o(c);
          return h === ee ? void 0 : h;
        }
        return Reflect.get(f, s, d);
      },
      getOwnPropertyDescriptor(f, s) {
        var d = Reflect.getOwnPropertyDescriptor(f, s);
        if (d && "value" in d) {
          var c = r.get(s);
          c && (d.value = o(c));
        } else if (d === void 0) {
          var y = r.get(s), h = y?.v;
          if (y !== void 0 && h !== ee)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return d;
      },
      has(f, s) {
        if (s === Vt)
          return !0;
        var d = r.get(s), c = d !== void 0 && d.v !== ee || Reflect.has(f, s);
        if (d !== void 0 || N !== null && (!c || dr(f, s)?.writable)) {
          d === void 0 && (d = u(() => {
            var h = c ? Ue(f[s]) : ee, _ = /* @__PURE__ */ Y(h);
            return _;
          }), r.set(s, d));
          var y = o(d);
          if (y === ee)
            return !1;
        }
        return c;
      },
      set(f, s, d, c) {
        var y = r.get(s), h = s in f;
        if (n && s === "length")
          for (var _ = d; _ < /** @type {Source<number>} */
          y.v; _ += 1) {
            var v = r.get(_ + "");
            v !== void 0 ? x(v, ee) : _ in f && (v = u(() => /* @__PURE__ */ Y(ee)), r.set(_ + "", v));
          }
        if (y === void 0)
          (!h || dr(f, s)?.writable) && (y = u(() => /* @__PURE__ */ Y(void 0)), x(y, Ue(d)), r.set(s, y));
        else {
          h = y.v !== ee;
          var S = u(() => Ue(d));
          x(y, S);
        }
        var p = Reflect.getOwnPropertyDescriptor(f, s);
        if (p?.set && p.set.call(c, d), !h) {
          if (n && typeof s == "string") {
            var A = (
              /** @type {Source<number>} */
              r.get("length")
            ), q = Number(s);
            Number.isInteger(q) && q >= A.v && x(A, q + 1);
          }
          vr(i);
        }
        return !0;
      },
      ownKeys(f) {
        o(i);
        var s = Reflect.ownKeys(f).filter((y) => {
          var h = r.get(y);
          return h === void 0 || h.v !== ee;
        });
        for (var [d, c] of r)
          c.v !== ee && !(d in f) && s.push(d);
        return s;
      },
      setPrototypeOf() {
        Ia();
      }
    }
  );
}
function ni(e) {
  try {
    if (e !== null && typeof e == "object" && Vt in e)
      return e[Vt];
  } catch {
  }
  return e;
}
function bs(e, t) {
  return Object.is(ni(e), ni(t));
}
var ii, Mi, Ri, zi;
function ys() {
  if (ii === void 0) {
    ii = window, Mi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Ri = dr(t, "firstChild").get, zi = dr(t, "nextSibling").get, ei(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ei(r) && (r.__t = void 0);
  }
}
function _t(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Zr(e) {
  return (
    /** @type {TemplateNode | null} */
    Ri.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Er(e) {
  return (
    /** @type {TemplateNode | null} */
    zi.call(e)
  );
}
function m(e, t) {
  return /* @__PURE__ */ Zr(e);
}
function ms(e, t = !1) {
  {
    var r = /* @__PURE__ */ Zr(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Er(r) : r;
  }
}
function w(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Er(n);
  return n;
}
function ws(e) {
  e.textContent = "";
}
function Fi() {
  return !1;
}
function xs(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Za, e, void 0)
  );
}
let ai = !1;
function Es() {
  ai || (ai = !0, document.addEventListener(
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
function Xr(e) {
  var t = D, r = N;
  Oe(null), He(null);
  try {
    return e();
  } finally {
    Oe(t), He(r);
  }
}
function Ii(e, t, r, n = r) {
  e.addEventListener(t, () => Xr(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), Es();
}
function ks(e) {
  N === null && (D === null && Ra(), Ma()), gt && Na();
}
function Ts(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function it(e, t) {
  var r = N;
  r !== null && (r.f & fe) !== 0 && (e |= fe);
  var n = {
    ctx: pe,
    deps: null,
    nodes: null,
    f: e | le | Le,
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
  E?.register_created_effect(n);
  var i = n;
  if ((e & Kt) !== 0)
    Bt !== null ? Bt.push(n) : Rt.ensure().schedule(n);
  else if (t !== null) {
    try {
      er(n);
    } catch (u) {
      throw ve(n), u;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & tr) === 0 && (i = i.first, (e & Ve) !== 0 && (e & Jt) !== 0 && i !== null && (i.f |= Jt));
  }
  if (i !== null && (i.parent = r, r !== null && Ts(i, r), D !== null && (D.f & oe) !== 0 && (e & ht) === 0)) {
    var a = (
      /** @type {Derived} */
      D
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return n;
}
function Pn() {
  return D !== null && !ze;
}
function qn(e) {
  const t = it(Jr, null);
  return G(t, X), t.teardown = e, t;
}
function Pi(e) {
  ks();
  var t = (
    /** @type {Effect} */
    N.f
  ), r = !D && (t & Fe) !== 0 && (t & Ft) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      pe
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return qi(e);
}
function qi(e) {
  return it(Kt | Aa, e);
}
function Ss(e) {
  Rt.ensure();
  const t = it(ht | tr, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Dt(t, () => {
      ve(t), n(void 0);
    }) : (ve(t), n(void 0));
  });
}
function ji(e) {
  return it(Kt, e);
}
function Ls(e) {
  return it(_r | tr, e);
}
function jn(e, t = 0) {
  return it(Jr | t, e);
}
function he(e, t = [], r = [], n = []) {
  fs(n, t, r, (i) => {
    it(Jr, () => e(...i.map(o)));
  });
}
function Un(e, t = 0) {
  var r = it(Ve | t, e);
  return r;
}
function Se(e) {
  return it(Fe | tr, e);
}
function Ui(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = gt, n = D;
    si(!0), Oe(null);
    try {
      t.call(null);
    } finally {
      si(r), Oe(n);
    }
  }
}
function Bn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Xr(() => {
      i.abort(Qe);
    });
    var n = r.next;
    (r.f & ht) !== 0 ? r.parent = null : ve(r, t), r = n;
  }
}
function As(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Fe) === 0 && ve(t), t = r;
  }
}
function ve(e, t = !0) {
  var r = !1;
  (t || (e.f & La) !== 0) && e.nodes !== null && e.nodes.end !== null && (Cs(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), G(e, gn), Bn(e, t && !r), hr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const a of n)
      a.stop();
  Ui(e), e.f ^= gn, e.f |= Ae;
  var i = e.parent;
  i !== null && i.first !== null && Bi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Cs(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Er(e);
    e.remove(), e = r;
  }
}
function Bi(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Dt(e, t, r = !0) {
  var n = [];
  Vi(e, n, !0);
  var i = () => {
    r && ve(e), t && t();
  }, a = n.length;
  if (a > 0) {
    var u = () => --a || i();
    for (var f of n)
      f.out(u);
  } else
    i();
}
function Vi(e, t, r) {
  if ((e.f & fe) === 0) {
    e.f ^= fe;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const f of n)
        (f.is_global || r) && t.push(f);
    for (var i = e.first; i !== null; ) {
      var a = i.next;
      if ((i.f & ht) === 0) {
        var u = (i.f & Jt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Fe) !== 0 && (e.f & Ve) !== 0;
        Vi(i, t, u ? r : !1);
      }
      i = a;
    }
  }
}
function Vn(e) {
  $i(e, !0);
}
function $i(e, t) {
  if ((e.f & fe) !== 0) {
    e.f ^= fe, (e.f & X) === 0 && (G(e, le), Rt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Jt) !== 0 || (r.f & Fe) !== 0;
      $i(r, i ? t : !1), r = n;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const u of a)
        (u.is_global || t) && u.in();
  }
}
function $n(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Er(r);
      t.append(r), r = i;
    }
}
let Vr = !1, gt = !1;
function si(e) {
  gt = e;
}
let D = null, ze = !1;
function Oe(e) {
  D = e;
}
let N = null;
function He(e) {
  N = e;
}
let Ce = null;
function Hi(e) {
  D !== null && (Ce === null ? Ce = [e] : Ce.push(e));
}
let ce = null, ge = 0, xe = null;
function Os(e) {
  xe = e;
}
let Zi = 1, Et = 0, Nt = Et;
function li(e) {
  Nt = e;
}
function Yi() {
  return ++Zi;
}
function kr(e) {
  var t = e.f;
  if ((t & le) !== 0)
    return !0;
  if (t & oe && (e.f &= ~Mt), (t & $e) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var a = r[i];
      if (kr(
        /** @type {Derived} */
        a
      ) && Ci(
        /** @type {Derived} */
        a
      ), a.wv > e.wv)
        return !0;
    }
    (t & Le) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Re === null && G(e, X);
  }
  return !1;
}
function Gi(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Ce !== null && Wt.call(Ce, e)))
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      (a.f & oe) !== 0 ? Gi(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? G(a, le) : (a.f & X) !== 0 && G(a, $e), zn(
        /** @type {Effect} */
        a
      ));
    }
}
function Wi(e) {
  var S;
  var t = ce, r = ge, n = xe, i = D, a = Ce, u = pe, f = ze, s = Nt, d = e.f;
  ce = /** @type {null | Value[]} */
  null, ge = 0, xe = null, D = (d & (Fe | ht)) === 0 ? e : null, Ce = null, Xt(e.ctx), ze = !1, Nt = ++Et, e.ac !== null && (Xr(() => {
    e.ac.abort(Qe);
  }), e.ac = null);
  try {
    e.f |= $r;
    var c = (
      /** @type {Function} */
      e.fn
    ), y = c();
    e.f |= Ft;
    var h = e.deps, _ = E?.is_fork;
    if (ce !== null) {
      var v;
      if (_ || hr(e, ge), h !== null && ge > 0)
        for (h.length = ge + ce.length, v = 0; v < ce.length; v++)
          h[ge + v] = ce[v];
      else
        e.deps = h = ce;
      if (Pn() && (e.f & Le) !== 0)
        for (v = ge; v < h.length; v++)
          ((S = h[v]).reactions ?? (S.reactions = [])).push(e);
    } else !_ && h !== null && ge < h.length && (hr(e, ge), h.length = ge);
    if (yi() && xe !== null && !ze && h !== null && (e.f & (oe | $e | le)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      xe.length; v++)
        Gi(
          xe[v],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Et++, i.deps !== null)
        for (let p = 0; p < r; p += 1)
          i.deps[p].rv = Et;
      if (t !== null)
        for (const p of t)
          p.rv = Et;
      xe !== null && (n === null ? n = xe : n.push(.../** @type {Source[]} */
      xe));
    }
    return (e.f & vt) !== 0 && (e.f ^= vt), y;
  } catch (p) {
    return wi(p);
  } finally {
    e.f ^= $r, ce = t, ge = r, xe = n, D = i, Ce = a, Xt(u), ze = f, Nt = s;
  }
}
function Ds(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = ya.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & oe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ce === null || !Wt.call(ce, t))) {
    var a = (
      /** @type {Derived} */
      t
    );
    (a.f & Le) !== 0 && (a.f ^= Le, a.f &= ~Mt), a.v !== ee && Mn(a), _s(a), hr(a, 0);
  }
}
function hr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Ds(e, r[n]);
}
function er(e) {
  var t = e.f;
  if ((t & Ae) === 0) {
    G(e, X);
    var r = N, n = Vr;
    N = e, Vr = !0;
    try {
      (t & (Ve | vi)) !== 0 ? As(e) : Bn(e), Ui(e);
      var i = Wi(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Zi;
      var a;
    } finally {
      Vr = n, N = r;
    }
  }
}
async function Tn() {
  await Promise.resolve(), ts();
}
function o(e) {
  var t = e.f, r = (t & oe) !== 0;
  if (D !== null && !ze) {
    var n = N !== null && (N.f & Ae) !== 0;
    if (!n && (Ce === null || !Wt.call(Ce, e))) {
      var i = D.deps;
      if ((D.f & $r) !== 0)
        e.rv < Et && (e.rv = Et, ce === null && i !== null && i[ge] === e ? ge++ : ce === null ? ce = [e] : ce.push(e));
      else {
        (D.deps ?? (D.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [D] : Wt.call(a, D) || a.push(D);
      }
    }
  }
  if (gt && Ot.has(e))
    return Ot.get(e);
  if (r) {
    var u = (
      /** @type {Derived} */
      e
    );
    if (gt) {
      var f = u.v;
      return ((u.f & X) === 0 && u.reactions !== null || Ji(u)) && (f = In(u)), Ot.set(u, f), f;
    }
    var s = (u.f & Le) === 0 && !ze && D !== null && (Vr || (D.f & Le) !== 0), d = (u.f & Ft) === 0;
    kr(u) && (s && (u.f |= Le), Ci(u)), s && !d && (Oi(u), Ki(u));
  }
  if (Re?.has(e))
    return Re.get(e);
  if ((e.f & vt) !== 0)
    throw e.v;
  return e.v;
}
function Ki(e) {
  if (e.f |= Le, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & oe) !== 0 && (t.f & Le) === 0 && (Oi(
        /** @type {Derived} */
        t
      ), Ki(
        /** @type {Derived} */
        t
      ));
}
function Ji(e) {
  if (e.v === ee) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ot.has(t) || (t.f & oe) !== 0 && Ji(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Qr(e) {
  var t = ze;
  try {
    return ze = !0, e();
  } finally {
    ze = t;
  }
}
const Ns = ["touchstart", "touchmove"];
function Ms(e) {
  return Ns.includes(e);
}
const kt = Symbol("events"), Xi = /* @__PURE__ */ new Set(), Sn = /* @__PURE__ */ new Set();
function Rs(e, t, r, n = {}) {
  function i(a) {
    if (n.capture || Ln.call(t, a), !a.cancelBubble)
      return Xr(() => r?.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? pt(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function Rr(e, t, r, n, i) {
  var a = { capture: n, passive: i }, u = Rs(e, t, r, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && qn(() => {
    t.removeEventListener(e, u, a);
  });
}
function wt(e, t, r) {
  (t[kt] ?? (t[kt] = {}))[e] = r;
}
function zs(e) {
  for (var t = 0; t < e.length; t++)
    Xi.add(e[t]);
  for (var r of Sn)
    r(e);
}
let oi = null;
function Ln(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  oi = e;
  var u = 0, f = oi === e && e[kt];
  if (f) {
    var s = i.indexOf(f);
    if (s !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[kt] = t;
      return;
    }
    var d = i.indexOf(t);
    if (d === -1)
      return;
    s <= d && (u = s);
  }
  if (a = /** @type {Element} */
  i[u] || e.target, a !== t) {
    ma(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var c = D, y = N;
    Oe(null), He(null);
    try {
      for (var h, _ = []; a !== null; ) {
        var v = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var S = a[kt]?.[n];
          S != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && S.call(a, e);
        } catch (p) {
          h ? _.push(p) : h = p;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        a = v;
      }
      if (h) {
        for (let p of _)
          queueMicrotask(() => {
            throw p;
          });
        throw h;
      }
    } finally {
      e[kt] = t, delete e.currentTarget, Oe(c), He(y);
    }
  }
}
const Fs = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Is(e) {
  return (
    /** @type {string} */
    Fs?.createHTML(e) ?? e
  );
}
function Ps(e) {
  var t = xs("template");
  return t.innerHTML = Is(e.replaceAll("<!>", "<!---->")), t.content;
}
function An(e, t) {
  var r = (
    /** @type {Effect} */
    N
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function V(e, t) {
  var r = (t & $a) !== 0, n = (t & Ha) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = Ps(a ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Zr(i)));
    var u = (
      /** @type {TemplateNode} */
      n || Mi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Zr(u)
      ), s = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      An(f, s);
    } else
      An(u, u);
    return u;
  };
}
function qs(e = "") {
  {
    var t = _t(e + "");
    return An(t, t), t;
  }
}
function U(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function ae(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function js(e, t) {
  return Us(e, t);
}
const zr = /* @__PURE__ */ new Map();
function Us(e, { target: t, anchor: r, props: n = {}, events: i, context: a, intro: u = !0, transformError: f }) {
  ys();
  var s = void 0, d = Ss(() => {
    var c = r ?? t.appendChild(_t());
    as(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (_) => {
        gi({});
        var v = (
          /** @type {ComponentContext} */
          pe
        );
        a && (v.c = a), i && (n.$$events = i), s = e(_, n) || {}, bi();
      },
      f
    );
    var y = /* @__PURE__ */ new Set(), h = (_) => {
      for (var v = 0; v < _.length; v++) {
        var S = _[v];
        if (!y.has(S)) {
          y.add(S);
          var p = Ms(S);
          for (const L of [t, document]) {
            var A = zr.get(L);
            A === void 0 && (A = /* @__PURE__ */ new Map(), zr.set(L, A));
            var q = A.get(S);
            q === void 0 ? (L.addEventListener(S, Ln, { passive: p }), A.set(S, 1)) : A.set(S, q + 1);
          }
        }
      }
    };
    return h(Kr(Xi)), Sn.add(h), () => {
      for (var _ of y)
        for (const p of [t, document]) {
          var v = (
            /** @type {Map<string, number>} */
            zr.get(p)
          ), S = (
            /** @type {number} */
            v.get(_)
          );
          --S == 0 ? (p.removeEventListener(_, Ln), v.delete(_), v.size === 0 && zr.delete(p)) : v.set(_, S);
        }
      Sn.delete(h), c !== r && c.parentNode?.removeChild(c);
    };
  });
  return Cn.set(s, d), s;
}
let Cn = /* @__PURE__ */ new WeakMap();
function Bs(e, t) {
  const r = Cn.get(e);
  return r ? (Cn.delete(e), r(t)) : Promise.resolve();
}
var Me, je, me, Ct, wr, xr, Wr;
class Vs {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Ne(this, "anchor");
    /** @type {Map<Batch, Key>} */
    T(this, Me, /* @__PURE__ */ new Map());
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
    T(this, je, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    T(this, me, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    T(this, Ct, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    T(this, wr, !0);
    /**
     * @param {Batch} batch
     */
    T(this, xr, (t) => {
      if (l(this, Me).has(t)) {
        var r = (
          /** @type {Key} */
          l(this, Me).get(t)
        ), n = l(this, je).get(r);
        if (n)
          Vn(n), l(this, Ct).delete(r);
        else {
          var i = l(this, me).get(r);
          i && (l(this, je).set(r, i.effect), l(this, me).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [a, u] of l(this, Me)) {
          if (l(this, Me).delete(a), a === t)
            break;
          const f = l(this, me).get(u);
          f && (ve(f.effect), l(this, me).delete(u));
        }
        for (const [a, u] of l(this, je)) {
          if (a === r || l(this, Ct).has(a)) continue;
          const f = () => {
            if (Array.from(l(this, Me).values()).includes(a)) {
              var d = document.createDocumentFragment();
              $n(u, d), d.append(_t()), l(this, me).set(a, { effect: u, fragment: d });
            } else
              ve(u);
            l(this, Ct).delete(a), l(this, je).delete(a);
          };
          l(this, wr) || !n ? (l(this, Ct).add(a), Dt(u, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    T(this, Wr, (t) => {
      l(this, Me).delete(t);
      const r = Array.from(l(this, Me).values());
      for (const [n, i] of l(this, me))
        r.includes(n) || (ve(i.effect), l(this, me).delete(n));
    });
    this.anchor = t, C(this, wr, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      E
    ), i = Fi();
    if (r && !l(this, je).has(t) && !l(this, me).has(t))
      if (i) {
        var a = document.createDocumentFragment(), u = _t();
        a.append(u), l(this, me).set(t, {
          effect: Se(() => r(u)),
          fragment: a
        });
      } else
        l(this, je).set(
          t,
          Se(() => r(this.anchor))
        );
    if (l(this, Me).set(n, t), i) {
      for (const [f, s] of l(this, je))
        f === t ? n.unskip_effect(s) : n.skip_effect(s);
      for (const [f, s] of l(this, me))
        f === t ? n.unskip_effect(s.effect) : n.skip_effect(s.effect);
      n.oncommit(l(this, xr)), n.ondiscard(l(this, Wr));
    } else
      l(this, xr).call(this, n);
  }
}
Me = new WeakMap(), je = new WeakMap(), me = new WeakMap(), Ct = new WeakMap(), wr = new WeakMap(), xr = new WeakMap(), Wr = new WeakMap();
function Je(e, t, r = !1) {
  var n = new Vs(e), i = r ? Jt : 0;
  function a(u, f) {
    n.ensure(u, f);
  }
  Un(() => {
    var u = !1;
    t((f, s = 0) => {
      u = !0, a(s, f);
    }), u || a(-1, null);
  }, i);
}
function lr(e, t) {
  return t;
}
function $s(e, t, r) {
  for (var n = [], i = t.length, a, u = t.length, f = 0; f < i; f++) {
    let y = t[f];
    Dt(
      y,
      () => {
        if (a) {
          if (a.pending.delete(y), a.done.add(y), a.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            On(e, Kr(a.done)), h.delete(a), h.size === 0 && (e.outrogroups = null);
          }
        } else
          u -= 1;
      },
      !1
    );
  }
  if (u === 0) {
    var s = n.length === 0 && r !== null;
    if (s) {
      var d = (
        /** @type {Element} */
        r
      ), c = (
        /** @type {Element} */
        d.parentNode
      );
      ws(c), c.append(d), e.items.clear();
    }
    On(e, t, !s);
  } else
    a = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function On(e, t, r = !0) {
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
  for (var i = 0; i < t.length; i++) {
    var a = t[i];
    if (n?.has(a)) {
      a.f |= Be;
      const u = document.createDocumentFragment();
      $n(a, u);
    } else
      ve(t[i], r);
  }
}
var ui;
function or(e, t, r, n, i, a = null) {
  var u = e, f = /* @__PURE__ */ new Map(), s = (t & pi) !== 0;
  if (s) {
    var d = (
      /** @type {Element} */
      e
    );
    u = d.appendChild(_t());
  }
  var c = null, y = /* @__PURE__ */ vs(() => {
    var L = r();
    return Nn(L) ? L : L == null ? [] : Kr(L);
  }), h, _ = /* @__PURE__ */ new Map(), v = !0;
  function S(L) {
    (q.effect.f & Ae) === 0 && (q.pending.delete(L), q.fallback = c, Hs(q, h, u, t, n), c !== null && (h.length === 0 ? (c.f & Be) === 0 ? Vn(c) : (c.f ^= Be, fr(c, null, u)) : Dt(c, () => {
      c = null;
    })));
  }
  function p(L) {
    q.pending.delete(L);
  }
  var A = Un(() => {
    h = /** @type {V[]} */
    o(y);
    for (var L = h.length, F = /* @__PURE__ */ new Set(), W = (
      /** @type {Batch} */
      E
    ), B = Fi(), se = 0; se < L; se += 1) {
      var Ze = h[se], Ie = n(Ze, se), J = v ? null : f.get(Ie);
      J ? (J.v && Qt(J.v, Ze), J.i && Qt(J.i, se), B && W.unskip_effect(J.e)) : (J = Zs(
        f,
        v ? u : ui ?? (ui = _t()),
        Ze,
        Ie,
        se,
        i,
        t,
        r
      ), v || (J.e.f |= Be), f.set(Ie, J)), F.add(Ie);
    }
    if (L === 0 && a && !c && (v ? c = Se(() => a(u)) : (c = Se(() => a(ui ?? (ui = _t()))), c.f |= Be)), L > F.size && Da(), !v)
      if (_.set(W, F), B) {
        for (const [Tr, at] of f)
          F.has(Tr) || W.skip_effect(at.e);
        W.oncommit(S), W.ondiscard(p);
      } else
        S(W);
    o(y);
  }), q = { effect: A, items: f, pending: _, outrogroups: null, fallback: c };
  v = !1;
}
function ur(e) {
  for (; e !== null && (e.f & Fe) === 0; )
    e = e.next;
  return e;
}
function Hs(e, t, r, n, i) {
  var a = (n & Ba) !== 0, u = t.length, f = e.items, s = ur(e.effect.first), d, c = null, y, h = [], _ = [], v, S, p, A;
  if (a)
    for (A = 0; A < u; A += 1)
      v = t[A], S = i(v, A), p = /** @type {EachItem} */
      f.get(S).e, (p.f & Be) === 0 && (p.nodes?.a?.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(p));
  for (A = 0; A < u; A += 1) {
    if (v = t[A], S = i(v, A), p = /** @type {EachItem} */
    f.get(S).e, e.outrogroups !== null)
      for (const J of e.outrogroups)
        J.pending.delete(p), J.done.delete(p);
    if ((p.f & fe) !== 0 && (Vn(p), a && (p.nodes?.a?.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(p))), (p.f & Be) !== 0)
      if (p.f ^= Be, p === s)
        fr(p, null, r);
      else {
        var q = c ? c.next : s;
        p === e.effect.last && (e.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), ot(e, c, p), ot(e, p, q), fr(p, q, r), c = p, h = [], _ = [], s = ur(c.next);
        continue;
      }
    if (p !== s) {
      if (d !== void 0 && d.has(p)) {
        if (h.length < _.length) {
          var L = _[0], F;
          c = L.prev;
          var W = h[0], B = h[h.length - 1];
          for (F = 0; F < h.length; F += 1)
            fr(h[F], L, r);
          for (F = 0; F < _.length; F += 1)
            d.delete(_[F]);
          ot(e, W.prev, B.next), ot(e, c, W), ot(e, B, L), s = L, c = B, A -= 1, h = [], _ = [];
        } else
          d.delete(p), fr(p, s, r), ot(e, p.prev, p.next), ot(e, p, c === null ? e.effect.first : c.next), ot(e, c, p), c = p;
        continue;
      }
      for (h = [], _ = []; s !== null && s !== p; )
        (d ?? (d = /* @__PURE__ */ new Set())).add(s), _.push(s), s = ur(s.next);
      if (s === null)
        continue;
    }
    (p.f & Be) === 0 && h.push(p), c = p, s = ur(p.next);
  }
  if (e.outrogroups !== null) {
    for (const J of e.outrogroups)
      J.pending.size === 0 && (On(e, Kr(J.done)), e.outrogroups?.delete(J));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (s !== null || d !== void 0) {
    var se = [];
    if (d !== void 0)
      for (p of d)
        (p.f & fe) === 0 && se.push(p);
    for (; s !== null; )
      (s.f & fe) === 0 && s !== e.fallback && se.push(s), s = ur(s.next);
    var Ze = se.length;
    if (Ze > 0) {
      var Ie = (n & pi) !== 0 && u === 0 ? r : null;
      if (a) {
        for (A = 0; A < Ze; A += 1)
          se[A].nodes?.a?.measure();
        for (A = 0; A < Ze; A += 1)
          se[A].nodes?.a?.fix();
      }
      $s(e, se, Ie);
    }
  }
  a && pt(() => {
    if (y !== void 0)
      for (p of y)
        p.nodes?.a?.apply();
  });
}
function Zs(e, t, r, n, i, a, u, f) {
  var s = (u & ja) !== 0 ? (u & Va) === 0 ? /* @__PURE__ */ hs(r, !1, !1) : zt(r) : null, d = (u & Ua) !== 0 ? zt(i) : null;
  return {
    v: s,
    i: d,
    e: Se(() => (a(t, s ?? r, d ?? i, f), () => {
      e.delete(n);
    }))
  };
}
function fr(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, a = t && (t.f & Be) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Er(n)
      );
      if (a.before(n), n === i)
        return;
      n = u;
    }
}
function ot(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Ys(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function Gs(e, t) {
  return e == null ? null : String(e);
}
function Ut(e, t, r, n, i, a) {
  var u = e.__className;
  if (u !== r || u === void 0) {
    var f = Ys(r);
    f == null ? e.removeAttribute("class") : e.className = f, e.__className = r;
  }
  return a;
}
function Ws(e, t, r, n) {
  var i = e.__style;
  if (i !== t) {
    var a = Gs(t);
    a == null ? e.removeAttribute("style") : e.style.cssText = a, e.__style = t;
  }
  return n;
}
function Qi(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Nn(t))
      return Ga();
    for (var n of e.options)
      n.selected = t.includes(pr(n));
    return;
  }
  for (n of e.options) {
    var i = pr(n);
    if (bs(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function Ks(e) {
  var t = new MutationObserver(() => {
    Qi(e, e.__value);
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
  }), qn(() => {
    t.disconnect();
  });
}
function Fr(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), i = !0;
  Ii(e, "change", (a) => {
    var u = a ? "[selected]" : ":checked", f;
    if (e.multiple)
      f = [].map.call(e.querySelectorAll(u), pr);
    else {
      var s = e.querySelector(u) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      f = s && pr(s);
    }
    r(f), e.__value = f, E !== null && n.add(E);
  }), ji(() => {
    var a = t();
    if (e === document.activeElement) {
      var u = (
        /** @type {Batch} */
        E
      );
      if (n.has(u))
        return;
    }
    if (Qi(e, a, i), i && a === void 0) {
      var f = e.querySelector(":checked");
      f !== null && (a = pr(f), r(a));
    }
    e.__value = a, i = !1;
  }), Ks(e);
}
function pr(e) {
  return "__value" in e ? e.__value : e.value;
}
function ut(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Ii(e, "input", async (i) => {
    var a = i ? e.defaultValue : e.value;
    if (a = pn(e) ? _n(a) : a, r(a), E !== null && n.add(E), await Tn(), a !== (a = t())) {
      var u = e.selectionStart, f = e.selectionEnd, s = e.value.length;
      if (e.value = a ?? "", f !== null) {
        var d = e.value.length;
        u === f && f === s && d > s ? (e.selectionStart = d, e.selectionEnd = d) : (e.selectionStart = u, e.selectionEnd = Math.min(f, d));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Qr(t) == null && e.value && (r(pn(e) ? _n(e.value) : e.value), E !== null && n.add(E)), jn(() => {
    var i = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        E
      );
      if (n.has(a))
        return;
    }
    pn(e) && i === _n(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function pn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function _n(e) {
  return e === "" ? null : +e;
}
function fi(e, t) {
  return e === t || e?.[Vt] === t;
}
function Js(e = {}, t, r, n) {
  var i = (
    /** @type {ComponentContext} */
    pe.r
  ), a = (
    /** @type {Effect} */
    N
  );
  return ji(() => {
    var u, f;
    return jn(() => {
      u = f, f = [], Qr(() => {
        e !== r(...f) && (t(e, ...f), u && fi(r(...u), e) && t(null, ...u));
      });
    }), () => {
      let s = a;
      for (; s !== i && s.parent !== null && s.parent.f & gn; )
        s = s.parent;
      const d = () => {
        f && fi(r(...f), e) && t(null, ...f);
      }, c = s.teardown;
      s.teardown = () => {
        d(), c?.();
      };
    };
  }), e;
}
function Xs(e) {
  pe === null && Ca(), Pi(() => {
    const t = Qr(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
const Qs = "5";
var di;
typeof window < "u" && ((di = window.__svelte ?? (window.__svelte = {})).v ?? (di.v = /* @__PURE__ */ new Set())).add(Qs);
var el = /* @__PURE__ */ V('<div class="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded-lg mb-4 text-sm"> </div>'), tl = /* @__PURE__ */ V('<div class="bg-green-50 border border-green-300 text-green-800 px-4 py-3 rounded-lg mb-4 text-sm"> </div>'), rl = /* @__PURE__ */ V('<div class="flex items-center justify-center py-12"><svg class="animate-spin h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span class="ml-3 text-gray-500">Loading lands...</span></div>'), nl = /* @__PURE__ */ V('<div class="flex items-center gap-1.5"><span class="w-3 h-3 rounded"></span> <span class="capitalize text-gray-600"> </span></div>'), il = /* @__PURE__ */ V('<div><div class="mb-4"><h3 class="text-lg font-semibold mb-2 text-gray-800">Land Registry Map</h3> <p class="text-sm text-gray-500 mb-3">Land parcels displayed as H3 hexagonal zones</p> <div class="flex flex-wrap gap-4 text-xs"></div></div> <div class="w-full rounded-lg border border-gray-300 relative z-0" style="height:500px;min-height:400px"></div> <div class="mt-3 flex items-center gap-4 text-xs text-gray-500"><div class="flex items-center gap-1"><span class="inline-block w-3 h-3 rounded border-2 border-gray-800"></span><span>Owned</span></div> <div class="flex items-center gap-1"><span class="inline-block w-3 h-3 rounded border border-gray-400"></span><span>Available</span></div> <button class="ml-auto px-3 py-1 bg-gray-100 border border-gray-300 rounded text-xs hover:bg-gray-200 transition-colors">Refresh</button></div></div>'), al = /* @__PURE__ */ V('<span class="text-gray-400">-</span>'), sl = /* @__PURE__ */ V('<span class="text-green-600 font-medium">For Sale</span>'), ll = /* @__PURE__ */ V('<span class="text-gray-600">Owned</span>'), ol = /* @__PURE__ */ V('<span class="text-blue-600">Available</span>'), ul = /* @__PURE__ */ V('<span class="text-green-700 font-semibold"> </span>'), fl = /* @__PURE__ */ V('<span class="text-gray-400">-</span>'), dl = /* @__PURE__ */ V('<tr class="hover:bg-gray-50 transition-colors"><td class="px-4 py-3 text-sm font-medium text-gray-900"> </td><td class="px-4 py-3 text-sm"><span> </span></td><td class="px-4 py-3 text-sm text-gray-600"><!></td><td class="px-4 py-3 text-sm text-gray-600"> </td><td class="px-4 py-3 text-sm"><!></td><td class="px-4 py-3 text-sm"><!></td></tr>'), cl = /* @__PURE__ */ V('<div class="flex justify-center items-center mt-4 gap-2"><button>Previous</button> <span class="text-sm text-gray-600"> </span> <button>Next</button></div>'), vl = /* @__PURE__ */ V('<div class="overflow-x-auto rounded-lg border border-gray-200"><table class="min-w-full"><thead class="bg-gray-50"><tr><th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th><th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th><th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th><th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th><th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th><th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th></tr></thead><tbody class="bg-white divide-y divide-gray-200"></tbody></table></div> <!>', 1), pl = /* @__PURE__ */ V('<div class="text-center py-8 text-gray-500">No land parcels registered yet.</div>'), _l = /* @__PURE__ */ V('<div><div class="mb-4 flex items-center justify-between"><div><h3 class="text-lg font-semibold text-gray-800">Land Registry Table</h3> <p class="text-sm text-gray-500"> </p></div> <button class="px-3 py-1.5 bg-gray-100 border border-gray-300 rounded text-xs hover:bg-gray-200 transition-colors">Refresh</button></div> <!></div>'), hl = /* @__PURE__ */ V("<option> </option>"), gl = /* @__PURE__ */ V('<div><label for="own-uid" class="block text-sm font-medium text-gray-700 mb-1">User ID</label> <input id="own-uid" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Enter user ID" required=""/></div>'), bl = /* @__PURE__ */ V('<div><label for="own-oid" class="block text-sm font-medium text-gray-700 mb-1">Organization ID</label> <input id="own-oid" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Enter organization ID" required=""/></div>'), yl = /* @__PURE__ */ V("<option> </option>"), ml = /* @__PURE__ */ V("<option> </option>"), wl = /* @__PURE__ */ V('<div class="space-y-6"><div><h3 class="text-lg font-semibold text-gray-800">Admin Controls</h3> <p class="text-gray-500 text-sm">Create new land parcels and manage ownership</p></div> <div class="bg-white p-6 border border-gray-200 rounded-lg"><h4 class="font-semibold mb-4 text-gray-800">Create New Land Parcel</h4> <form class="space-y-4"><div class="grid grid-cols-2 gap-4"><div><label for="lr-x" class="block text-sm font-medium text-gray-700 mb-1">X Coordinate</label> <input id="lr-x" type="number" min="0" max="19" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" required=""/></div> <div><label for="lr-y" class="block text-sm font-medium text-gray-700 mb-1">Y Coordinate</label> <input id="lr-y" type="number" min="0" max="19" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" required=""/></div></div> <div><label for="lr-type" class="block text-sm font-medium text-gray-700 mb-1">Land Type</label> <select id="lr-type" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"></select></div> <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button></form></div> <div class="bg-white p-6 border border-gray-200 rounded-lg"><h4 class="font-semibold mb-4 text-gray-800">Update Land Ownership</h4> <form class="space-y-4"><div><label for="own-id" class="block text-sm font-medium text-gray-700 mb-1">Land ID</label> <input id="own-id" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Enter land ID" required=""/></div> <div><label for="own-type" class="block text-sm font-medium text-gray-700 mb-1">Owner Type</label> <select id="own-type" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"><option>No Owner</option><option>Citizen</option><option>Organization</option></select></div> <!> <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button></form></div> <div class="bg-white p-6 border border-gray-200 rounded-lg"><h4 class="font-semibold mb-4 text-gray-800">Update Land Properties</h4> <form class="space-y-4"><div><label for="upd-id" class="block text-sm font-medium text-gray-700 mb-1">Land ID</label> <input id="upd-id" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Enter land ID" required=""/></div> <div><label for="upd-type" class="block text-sm font-medium text-gray-700 mb-1">Land Type (optional)</label> <select id="upd-type" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"><option>-- No change --</option><!></select></div> <div><label for="upd-status" class="block text-sm font-medium text-gray-700 mb-1">Status (optional)</label> <select id="upd-status" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"><option>-- No change --</option><!></select></div> <button type="submit" class="px-4 py-2 bg-yellow-600 text-white rounded-lg text-sm hover:bg-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button></form></div> <div class="bg-white p-6 border border-gray-200 rounded-lg"><h4 class="font-semibold mb-2 text-gray-800">Mint Land NFT</h4> <p class="text-sm text-gray-500 mb-4">Register a land parcel and mint an NFT representing ownership</p> <form class="space-y-4"><div><label for="nft-lid" class="block text-sm font-medium text-gray-700 mb-1">Land ID</label> <input id="nft-lid" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Enter land ID to mint NFT for" required=""/></div> <div><label for="nft-own" class="block text-sm font-medium text-gray-700 mb-1">Owner Principal</label> <input id="nft-own" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Principal ID of the NFT owner" required=""/></div> <button type="submit" class="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button></form></div></div>'), xl = /* @__PURE__ */ V('<div class="max-w-5xl mx-auto p-4"><div class="mb-6"><h2 class="text-2xl font-bold text-gray-900">Land Registry</h2> <p class="text-gray-600 text-sm mt-1">Manage land parcels, ownership, and NFT minting</p></div> <!> <!> <div class="border-b border-gray-200 mb-6"><nav class="-mb-px flex space-x-8"><button>Map View</button> <button>Table View</button> <button>Admin Controls</button></nav></div> <!></div>');
function El(e, t) {
  gi(t, !0);
  let r = /* @__PURE__ */ Y("geographic"), n = /* @__PURE__ */ Y(Ue([])), i = /* @__PURE__ */ Y(!0), a = /* @__PURE__ */ Y(""), u = /* @__PURE__ */ Y(""), f = /* @__PURE__ */ Y(void 0), s = /* @__PURE__ */ Y(null), d = null, c = null, y = null, h = null, _ = null, v = /* @__PURE__ */ Y(0);
  const S = 10;
  let p = /* @__PURE__ */ vn(() => Math.ceil(o(n).length / S)), A = /* @__PURE__ */ vn(() => o(n).slice(o(v) * S, (o(v) + 1) * S)), q = /* @__PURE__ */ Y(Ue({
    x_coordinate: 0,
    y_coordinate: 0,
    land_type: "unassigned",
    size_width: 1,
    size_height: 1
  })), L = /* @__PURE__ */ Y(Ue({
    land_id: "",
    owner_user_id: "",
    owner_organization_id: "",
    owner_type: "none"
  })), F = /* @__PURE__ */ Y(Ue({ land_id: "", land_type: "", status: "" })), W = /* @__PURE__ */ Y(Ue({ land_id: "", owner_principal: "" })), B = /* @__PURE__ */ Y(!1);
  const se = [
    { value: "unassigned", label: "Unassigned" },
    { value: "residential", label: "Residential" },
    { value: "agricultural", label: "Agricultural" },
    { value: "industrial", label: "Industrial" },
    { value: "commercial", label: "Commercial" }
  ], Ze = [
    { value: "active", label: "Active" },
    { value: "disputed", label: "Disputed" },
    { value: "transferred", label: "Transferred" },
    { value: "revoked", label: "Revoked" }
  ], Ie = {
    residential: "#4ade80",
    agricultural: "#fbbf24",
    industrial: "#6b7280",
    commercial: "#3b82f6",
    unassigned: "#e5e7eb"
  }, J = "#f59e0b", Tr = 2;
  async function at(g, b = {}) {
    return await t.ctx.callSync(g, b);
  }
  async function bt() {
    x(i, !0), x(a, "");
    try {
      const g = await at("get_lands");
      g?.success ? x(n, g.data ?? [], !0) : x(n, g?.data ?? (Array.isArray(g) ? g : []), !0);
    } catch (g) {
      x(a, g?.message || String(g), !0);
    } finally {
      x(i, !1);
    }
  }
  async function Hn() {
    if (!o(f) || o(s)) return;
    if (d = await import(
      /* @vite-ignore */
      "https://esm.sh/leaflet@1.9.4"
    ), c = await import(
      /* @vite-ignore */
      "https://esm.sh/h3-js@4.2.1"
    ), !document.querySelector('link[href*="leaflet"]')) {
      const b = document.createElement("link");
      b.rel = "stylesheet", b.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css", document.head.appendChild(b), await new Promise((j) => setTimeout(j, 150));
    }
    x(s, d.map(o(f)).setView([20, 0], 2), !0);
    const g = d.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 19
    });
    g.on("tileerror", () => {
      o(s)._fb || (o(s)._fb = !0, o(s).removeLayer(g), d.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19
      }).addTo(o(s)));
    }), g.addTo(o(s)), h = d.layerGroup().addTo(o(s)), y = d.layerGroup().addTo(o(s)), _ = d.layerGroup().addTo(o(s)), o(s).on("zoomend", en), en(), tn();
  }
  function en() {
    if (!o(s) || !h || !y) return;
    o(s).getZoom() < 10 ? (h.addTo(o(s)), o(s).removeLayer(y)) : (y.addTo(o(s)), o(s).removeLayer(h));
  }
  function ea() {
    if (!d || !o(s) || !c || !_) return;
    _.clearLayers();
    const g = /* @__PURE__ */ new Map();
    for (const M of o(n)) {
      let O = null;
      if (M.metadata)
        try {
          O = (typeof M.metadata == "string" ? JSON.parse(M.metadata) : M.metadata).parent_zone;
        } catch {
        }
      if (!O) continue;
      g.has(O) || g.set(O, { landCount: 0, landTypes: {} });
      const $ = g.get(O);
      $.landCount++, $.landTypes[M.land_type] = ($.landTypes[M.land_type] || 0) + 1;
    }
    if (g.size === 0) return;
    const b = {};
    g.forEach((M, O) => {
      let $;
      try {
        $ = c.gridDisk(O, Tr);
      } catch {
        $ = [O];
      }
      for (const R of $) {
        let te;
        try {
          te = c.gridDistance(O, R);
        } catch {
          te = R === O ? 0 : 1;
        }
        b[R] ? b[R].minDistance = Math.min(b[R].minDistance, te) : b[R] = { minDistance: te, landCount: 0, landTypes: {} }, te === 0 && (b[R].landCount += M.landCount, b[R].landTypes = M.landTypes);
      }
    });
    const j = [];
    for (const [M, O] of Object.entries(b))
      try {
        const R = c.cellToBoundary(M).map((I) => [I[0], I[1]]), te = 1 - O.minDistance / (Tr + 1) * 0.7, Ye = O.minDistance === 0 ? 0.5 : 0.25, _e = d.polygon(R, {
          color: J,
          fillColor: J,
          fillOpacity: Ye * te,
          weight: O.minDistance === 0 ? 2 : 1,
          opacity: O.minDistance === 0 ? 0.8 : 0.4,
          dashArray: O.minDistance > 0 ? "4 4" : void 0
        });
        if (O.minDistance === 0) {
          const I = Object.entries(O.landTypes).map(([re, we]) => `${re}: ${we}`).join(", ");
          _e.bindPopup(`<div style="padding:4px"><strong>Land Zone</strong><br>Parcels: ${O.landCount}<br>${I ? `Types: ${I}<br>` : ""}<span style="font-size:10px;color:#9ca3af">H3: ${M}</span></div>`);
        }
        _e.addTo(_), j.push(...R);
      } catch {
      }
    j.length > 0 && o(s).fitBounds(d.latLngBounds(j), { padding: [50, 50], maxZoom: 12 });
  }
  function tn() {
    if (!d || !o(s) || !y || !h) return;
    y.clearLayers(), h.clearLayers(), ea();
    const g = [];
    for (const b of o(n)) {
      const j = Ie[b.land_type] || Ie.unassigned, M = b.owner_user_id || b.owner_organization_id;
      let O = null, $ = null, R = b.h3_index;
      if (b.latitude && b.longitude)
        O = b.latitude, $ = b.longitude;
      else if (c && R && !R.includes("manual"))
        try {
          const I = c.cellToLatLng(R);
          O = I[0], $ = I[1];
        } catch {
          R = null;
        }
      if (O == null && c) {
        let I = null;
        if (b.metadata)
          try {
            I = (typeof b.metadata == "string" ? JSON.parse(b.metadata) : b.metadata).parent_zone;
          } catch {
          }
        if (I)
          try {
            const re = c.cellToLatLng(I);
            O = re[0], $ = re[1], R = I;
          } catch {
          }
      }
      if (O == null || $ == null) continue;
      g.push([O, $]);
      const te = b.for_sale && b.price_realm_tokens ? `<br><span style="color:#16a34a;font-weight:600">${b.price_realm_tokens} REALM</span>` : "", Ye = b.owner_user_id ? `<br>Owner: User ${b.owner_user_id}` : b.owner_organization_id ? `<br>Owner: Org ${b.owner_organization_id}` : '<br><span style="color:#2563eb">Available</span>', _e = `<div style="padding:4px"><strong>${b.id}</strong><br>Type: <span style="color:${j}">${b.land_type}</span>${Ye}${te}${R ? `<br><span style="font-size:10px;color:#9ca3af">H3: ${R}</span>` : ""}</div>`;
      if (d.circleMarker([O, $], {
        radius: 18,
        fillColor: j,
        color: M ? "#1f2937" : "#22c55e",
        weight: 3,
        opacity: 1,
        fillOpacity: 0.85
      }).bindPopup(_e).addTo(h), c && R && !R.includes("manual"))
        try {
          const re = c.cellToBoundary(R).map((we) => [we[0], we[1]]);
          d.polygon(re, {
            color: M ? "#1f2937" : "#9ca3af",
            fillColor: j,
            fillOpacity: M ? 0.7 : 0.5,
            weight: M ? 2 : 1
          }).bindPopup(_e).addTo(y);
        } catch {
        }
    }
    g.length > 0 && _ && _.getLayers().length === 0 && o(s).fitBounds(d.latLngBounds(g), { padding: [50, 50], maxZoom: 12 }), en();
  }
  function ta(g) {
    return {
      residential: "bg-green-100 text-green-800",
      agricultural: "bg-yellow-100 text-yellow-800",
      industrial: "bg-gray-100 text-gray-800",
      commercial: "bg-blue-100 text-blue-800"
    }[g] || "bg-gray-100 text-gray-600";
  }
  async function ra() {
    x(B, !0), x(a, ""), x(u, "");
    try {
      const g = await at("create_land", o(q));
      g?.success ? (x(u, "Land created successfully!"), x(
        q,
        {
          x_coordinate: 0,
          y_coordinate: 0,
          land_type: "unassigned",
          size_width: 1,
          size_height: 1
        },
        !0
      ), await bt()) : x(a, g?.error || "Failed to create land", !0);
    } catch (g) {
      x(a, g?.message || String(g), !0);
    } finally {
      x(B, !1);
    }
  }
  async function na() {
    x(B, !0), x(a, ""), x(u, "");
    try {
      const g = { land_id: o(L).land_id };
      o(L).owner_type === "user" ? g.owner_user_id = o(L).owner_user_id : o(L).owner_type === "organization" && (g.owner_organization_id = o(L).owner_organization_id);
      const b = await at("update_land_ownership", g);
      b?.success ? (x(u, "Ownership updated!"), x(
        L,
        {
          land_id: "",
          owner_user_id: "",
          owner_organization_id: "",
          owner_type: "none"
        },
        !0
      ), await bt()) : x(a, b?.error || "Failed to update ownership", !0);
    } catch (g) {
      x(a, g?.message || String(g), !0);
    } finally {
      x(B, !1);
    }
  }
  async function ia() {
    x(B, !0), x(a, ""), x(u, "");
    try {
      const g = { land_id: o(F).land_id };
      o(F).land_type && (g.land_type = o(F).land_type), o(F).status && (g.status = o(F).status);
      const b = await at("update_land", g);
      b?.success ? (x(u, b?.data?.message || "Land updated!", !0), x(F, { land_id: "", land_type: "", status: "" }, !0), await bt()) : x(a, b?.error || "Failed to update land", !0);
    } catch (g) {
      x(a, g?.message || String(g), !0);
    } finally {
      x(B, !1);
    }
  }
  async function aa() {
    x(B, !0), x(a, ""), x(u, "");
    try {
      const g = await at("register_land_nft", {
        land_id: o(W).land_id,
        owner_principal: o(W).owner_principal,
        registered_by: t.ctx.principal || "admin"
      });
      if (!g?.success) {
        x(a, g?.error || "Failed to prepare NFT", !0);
        return;
      }
      const b = g.data, j = await t.ctx.backend.mint_land_nft_for_parcel(o(W).land_id, o(W).owner_principal, BigInt(b.token_id), ""), M = JSON.parse(j);
      M.success ? (await at("update_land_nft_token", {
        land_id: o(W).land_id,
        nft_token_id: M.token_id
      }), x(u, `NFT minted! Token ID: ${M.token_id}`), x(W, { land_id: "", owner_principal: "" }, !0), await bt()) : x(a, M.error || "Mint failed", !0);
    } catch (g) {
      x(a, g?.message || String(g), !0);
    } finally {
      x(B, !1);
    }
  }
  Pi(() => {
    o(r) === "geographic" && o(n).length > 0 && o(s) && tn();
  }), Xs(async () => {
    await bt(), await Tn(), o(f) && await Hn();
  });
  var Zn = xl(), Yn = w(m(Zn), 2);
  {
    var sa = (g) => {
      var b = el(), j = m(b);
      he(() => ae(j, o(a))), U(g, b);
    };
    Je(Yn, (g) => {
      o(a) && g(sa);
    });
  }
  var Gn = w(Yn, 2);
  {
    var la = (g) => {
      var b = tl(), j = m(b);
      he(() => ae(j, o(u))), U(g, b);
    };
    Je(Gn, (g) => {
      o(u) && g(la);
    });
  }
  var Wn = w(Gn, 2), oa = m(Wn), rn = m(oa), nn = w(rn, 2), Kn = w(nn, 2), ua = w(Wn, 2);
  {
    var fa = (g) => {
      var b = rl();
      U(g, b);
    }, da = (g) => {
      var b = il(), j = m(b), M = w(m(j), 4);
      or(M, 21, () => Object.entries(Ie), lr, (te, Ye) => {
        var _e = /* @__PURE__ */ vn(() => Sa(o(Ye), 2));
        let I = () => o(_e)[0], re = () => o(_e)[1];
        var we = nl(), yt = m(we), It = w(yt, 2), Pt = m(It);
        he(() => {
          Ws(yt, `background-color:${re() ?? ""}`), ae(Pt, I());
        }), U(te, we);
      });
      var O = w(j, 2);
      Js(O, (te) => x(f, te), () => o(f));
      var $ = w(O, 2), R = w(m($), 4);
      wt("click", R, bt), U(g, b);
    }, ca = (g) => {
      var b = _l(), j = m(b), M = m(j), O = w(m(M), 2), $ = m(O), R = w(M, 2), te = w(j, 2);
      {
        var Ye = (I) => {
          var re = vl(), we = ms(re), yt = m(we), It = w(m(yt));
          or(It, 21, () => o(A), lr, (st, Z) => {
            var De = dl(), Ge = m(De), qt = m(Ge), We = w(Ge), Sr = m(We), sn = m(Sr), rr = w(We), ln = m(rr);
            {
              var Lr = (z) => {
                var ne = qs();
                he((jt, Mr) => ae(ne, `${jt ?? ""}, ${Mr ?? ""}`), [
                  () => o(Z).latitude.toFixed(4),
                  () => o(Z).longitude.toFixed(4)
                ]), U(z, ne);
              }, Ar = (z) => {
                var ne = al();
                U(z, ne);
              };
              Je(ln, (z) => {
                o(Z).latitude && o(Z).longitude ? z(Lr) : z(Ar, -1);
              });
            }
            var nr = w(rr), on = m(nr), ir = w(nr), Cr = m(ir);
            {
              var ar = (z) => {
                var ne = sl();
                U(z, ne);
              }, un = (z) => {
                var ne = ll();
                U(z, ne);
              }, Or = (z) => {
                var ne = ol();
                U(z, ne);
              };
              Je(Cr, (z) => {
                o(Z).for_sale ? z(ar) : o(Z).owner_user_id || o(Z).owner_organization_id ? z(un, 1) : z(Or, -1);
              });
            }
            var Dr = w(ir), sr = m(Dr);
            {
              var fn = (z) => {
                var ne = ul(), jt = m(ne);
                he(() => ae(jt, `${o(Z).price_realm_tokens ?? ""} REALM`)), U(z, ne);
              }, Nr = (z) => {
                var ne = fl();
                U(z, ne);
              };
              Je(sr, (z) => {
                o(Z).for_sale && o(Z).price_realm_tokens ? z(fn) : z(Nr, -1);
              });
            }
            he(
              (z) => {
                ae(qt, o(Z).id), Ut(Sr, 1, `px-2 py-0.5 rounded-full text-xs font-medium ${z ?? ""}`), ae(sn, o(Z).land_type), ae(on, o(Z).owner_user_id || o(Z).owner_organization_id || "-");
              },
              [() => ta(o(Z).land_type)]
            ), U(st, De);
          });
          var Pt = w(we, 2);
          {
            var an = (st) => {
              var Z = cl(), De = m(Z), Ge = w(De, 2), qt = m(Ge), We = w(Ge, 2);
              he(() => {
                Ut(De, 1, `px-3 py-1 rounded border text-sm ${o(v) > 0 ? "bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200" : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"}`), De.disabled = o(v) === 0, ae(qt, `Page ${o(v) + 1} of ${o(p) ?? ""}`), Ut(We, 1, `px-3 py-1 rounded border text-sm ${o(v) < o(p) - 1 ? "bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200" : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"}`), We.disabled = o(v) >= o(p) - 1;
              }), wt("click", De, () => x(v, Math.max(0, o(v) - 1), !0)), wt("click", We, () => x(v, Math.min(o(p) - 1, o(v) + 1), !0)), U(st, Z);
            };
            Je(Pt, (st) => {
              o(p) > 1 && st(an);
            });
          }
          U(I, re);
        }, _e = (I) => {
          var re = pl();
          U(I, re);
        };
        Je(te, (I) => {
          o(n).length > 0 ? I(Ye) : I(_e, -1);
        });
      }
      he(() => ae($, `Showing ${o(A).length ?? ""} of ${o(n).length ?? ""} parcels`)), wt("click", R, bt), U(g, b);
    }, va = (g) => {
      var b = wl(), j = w(m(b), 2), M = w(m(j), 2), O = m(M), $ = m(O), R = w(m($), 2), te = w($, 2), Ye = w(m(te), 2), _e = w(O, 2), I = w(m(_e), 2);
      or(I, 21, () => se, lr, (k, ie) => {
        var Q = hl(), Ke = m(Q), lt = {};
        he(() => {
          ae(Ke, o(ie).label), lt !== (lt = o(ie).value) && (Q.value = (Q.__value = o(ie).value) ?? "");
        }), U(k, Q);
      });
      var re = w(_e, 2), we = m(re), yt = w(j, 2), It = w(m(yt), 2), Pt = m(It), an = w(m(Pt), 2), st = w(Pt, 2), Z = w(m(st), 2), De = m(Z);
      De.value = De.__value = "none";
      var Ge = w(De);
      Ge.value = Ge.__value = "user";
      var qt = w(Ge);
      qt.value = qt.__value = "organization";
      var We = w(st, 2);
      {
        var Sr = (k) => {
          var ie = gl(), Q = w(m(ie), 2);
          ut(Q, () => o(L).owner_user_id, (Ke) => o(L).owner_user_id = Ke), U(k, ie);
        }, sn = (k) => {
          var ie = bl(), Q = w(m(ie), 2);
          ut(Q, () => o(L).owner_organization_id, (Ke) => o(L).owner_organization_id = Ke), U(k, ie);
        };
        Je(We, (k) => {
          o(L).owner_type === "user" ? k(Sr) : o(L).owner_type === "organization" && k(sn, 1);
        });
      }
      var rr = w(We, 2), ln = m(rr), Lr = w(yt, 2), Ar = w(m(Lr), 2), nr = m(Ar), on = w(m(nr), 2), ir = w(nr, 2), Cr = w(m(ir), 2), ar = m(Cr);
      ar.value = ar.__value = "";
      var un = w(ar);
      or(un, 17, () => se, lr, (k, ie) => {
        var Q = yl(), Ke = m(Q), lt = {};
        he(() => {
          ae(Ke, o(ie).label), lt !== (lt = o(ie).value) && (Q.value = (Q.__value = o(ie).value) ?? "");
        }), U(k, Q);
      });
      var Or = w(ir, 2), Dr = w(m(Or), 2), sr = m(Dr);
      sr.value = sr.__value = "";
      var fn = w(sr);
      or(fn, 17, () => Ze, lr, (k, ie) => {
        var Q = ml(), Ke = m(Q), lt = {};
        he(() => {
          ae(Ke, o(ie).label), lt !== (lt = o(ie).value) && (Q.value = (Q.__value = o(ie).value) ?? "");
        }), U(k, Q);
      });
      var Nr = w(Or, 2), z = m(Nr), ne = w(Lr, 2), jt = w(m(ne), 4), Mr = m(jt), pa = w(m(Mr), 2), Jn = w(Mr, 2), _a = w(m(Jn), 2), Xn = w(Jn, 2), ha = m(Xn);
      he(() => {
        re.disabled = o(B), ae(we, o(B) ? "Creating..." : "Create Land Parcel"), rr.disabled = o(B), ae(ln, o(B) ? "Updating..." : "Update Ownership"), Nr.disabled = o(B), ae(z, o(B) ? "Updating..." : "Update Land"), Xn.disabled = o(B), ae(ha, o(B) ? "Minting..." : "Mint NFT");
      }), Rr("submit", M, (k) => {
        k.preventDefault(), ra();
      }), ut(R, () => o(q).x_coordinate, (k) => o(q).x_coordinate = k), ut(Ye, () => o(q).y_coordinate, (k) => o(q).y_coordinate = k), Fr(I, () => o(q).land_type, (k) => o(q).land_type = k), Rr("submit", It, (k) => {
        k.preventDefault(), na();
      }), ut(an, () => o(L).land_id, (k) => o(L).land_id = k), Fr(Z, () => o(L).owner_type, (k) => o(L).owner_type = k), Rr("submit", Ar, (k) => {
        k.preventDefault(), ia();
      }), ut(on, () => o(F).land_id, (k) => o(F).land_id = k), Fr(Cr, () => o(F).land_type, (k) => o(F).land_type = k), Fr(Dr, () => o(F).status, (k) => o(F).status = k), Rr("submit", jt, (k) => {
        k.preventDefault(), aa();
      }), ut(pa, () => o(W).land_id, (k) => o(W).land_id = k), ut(_a, () => o(W).owner_principal, (k) => o(W).owner_principal = k), U(g, b);
    };
    Je(ua, (g) => {
      o(i) ? g(fa) : o(r) === "geographic" ? g(da, 1) : o(r) === "table" ? g(ca, 2) : o(r) === "admin" && g(va, 3);
    });
  }
  he(() => {
    Ut(rn, 1, `py-2 px-1 border-b-2 font-medium text-sm transition-colors ${o(r) === "geographic" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`), Ut(nn, 1, `py-2 px-1 border-b-2 font-medium text-sm transition-colors ${o(r) === "table" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`), Ut(Kn, 1, `py-2 px-1 border-b-2 font-medium text-sm transition-colors ${o(r) === "admin" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`);
  }), wt("click", rn, () => {
    x(r, "geographic"), Tn().then(() => {
      o(f) && !o(s) ? Hn() : o(s) && (o(s).invalidateSize(), tn());
    });
  }), wt("click", nn, () => x(r, "table")), wt("click", Kn, () => x(r, "admin")), U(e, Zn), bi();
}
zs(["click"]);
function Sl(e, t) {
  const r = js(El, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Bs(r);
      } catch {
      }
    }
  };
}
export {
  Sl as default
};
