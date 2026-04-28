var yi = Object.defineProperty;
var dn = (e) => {
  throw TypeError(e);
};
var wi = (e, t, r) => t in e ? yi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var we = (e, t, r) => wi(e, typeof t != "symbol" ? t + "" : t, r), Rr = (e, t, r) => t.has(e) || dn("Cannot " + r);
var l = (e, t, r) => (Rr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), m = (e, t, r) => t.has(e) ? dn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), k = (e, t, r, n) => (Rr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), C = (e, t, r) => (Rr(e, t, "access private method"), r);
var An = Array.isArray, ki = Array.prototype.indexOf, Nt = Array.prototype.includes, xr = Array.from, xi = Object.defineProperty, Ht = Object.getOwnPropertyDescriptor, Ei = Object.prototype, qi = Array.prototype, Si = Object.getPrototypeOf, vn = Object.isExtensible;
const Ti = () => {
};
function Ai(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Nn() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const Y = 2, Ct = 4, Er = 8, Cn = 1 << 24, Ne = 16, qe = 32, Ze = 64, Vr = 128, _e = 512, L = 1024, U = 2048, Ce = 4096, X = 8192, pe = 16384, pt = 32768, hn = 1 << 25, Mt = 65536, jr = 1 << 17, Ni = 1 << 18, Ft = 1 << 19, Ci = 1 << 20, Ve = 1 << 25, vt = 65536, mr = 1 << 21, Jt = 1 << 22, We = 1 << 23, Or = Symbol("$state"), Fe = new class extends Error {
  constructor() {
    super(...arguments);
    we(this, "name", "StaleReactionError");
    we(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Mi() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Pi(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ri(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Oi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Fi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Di() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function zi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ii() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Li() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Vi() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ji = 1, Bi = 2, Hi = 16, Ui = 1, Yi = 2, j = Symbol(), Ji = "http://www.w3.org/1999/xhtml";
function Gi() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ki() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Mn(e) {
  return e === this.v;
}
function Wi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Pn(e) {
  return !Wi(e, this.v);
}
let ge = null;
function Pt(e) {
  ge = e;
}
function Rn(e, t = !1, r) {
  ge = {
    p: ge,
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
function On(e) {
  var t = (
    /** @type {ComponentContext} */
    ge
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      ti(n);
  }
  return t.i = !0, ge = t.p, /** @type {T} */
  {};
}
function Fn() {
  return !0;
}
let rt = [];
function Dn() {
  var e = rt;
  rt = [], Ai(e);
}
function xt(e) {
  if (rt.length === 0 && !Ut) {
    var t = rt;
    queueMicrotask(() => {
      t === rt && Dn();
    });
  }
  rt.push(e);
}
function Xi() {
  for (; rt.length > 0; )
    Dn();
}
function zn(e) {
  var t = E;
  if (t === null)
    return x.f |= We, e;
  if ((t.f & pt) === 0 && (t.f & Ct) === 0)
    throw e;
  Ke(e, t);
}
function Ke(e, t) {
  for (; t !== null; ) {
    if ((t.f & Vr) !== 0) {
      if ((t.f & pt) === 0)
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
const Zi = -7169;
function F(e, t) {
  e.f = e.f & Zi | t;
}
function $r(e) {
  (e.f & _e) !== 0 || e.deps === null ? F(e, L) : F(e, Ce);
}
function In(e) {
  if (e !== null)
    for (const t of e)
      (t.f & Y) === 0 || (t.f & vt) === 0 || (t.f ^= vt, In(
        /** @type {Derived} */
        t.deps
      ));
}
function Ln(e, t, r) {
  (e.f & U) !== 0 ? t.add(e) : (e.f & Ce) !== 0 && r.add(e), In(e.deps), F(e, L);
}
const tt = /* @__PURE__ */ new Set();
let b = null, xe = null, Br = null, Ut = !1, Fr = !1, wt = null, ur = null;
var _n = 0;
let Qi = 1;
var Et, qt, st, De, Se, Kt, ie, Wt, Je, ze, Te, St, Tt, lt, z, cr, Vn, dr, Hr, vr, $i;
const yr = class yr {
  constructor() {
    m(this, z);
    we(this, "id", Qi++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    we(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    we(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, Et, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, qt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, st, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    m(this, De, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    m(this, Se, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    m(this, Kt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    m(this, ie, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    m(this, Wt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    m(this, Je, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    m(this, ze, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    m(this, Te, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    m(this, St, /* @__PURE__ */ new Set());
    we(this, "is_fork", !1);
    m(this, Tt, !1);
    /** @type {Set<Batch>} */
    m(this, lt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, Te).has(t) || l(this, Te).set(t, { d: [], m: [] }), l(this, St).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = l(this, Te).get(t);
    if (n) {
      l(this, Te).delete(t);
      for (var i of n.d)
        F(i, U), r(i);
      for (i of n.m)
        F(i, Ce), r(i);
    }
    l(this, St).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== j && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & We) === 0 && (this.current.set(t, [r, n]), xe?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    b = this;
  }
  deactivate() {
    b = null, xe = null;
  }
  flush() {
    try {
      Fr = !0, b = this, C(this, z, dr).call(this);
    } finally {
      _n = 0, Br = null, wt = null, ur = null, Fr = !1, b = null, xe = null, ut.clear();
    }
  }
  discard() {
    for (const t of l(this, qt)) t(this);
    l(this, qt).clear(), l(this, st).clear(), tt.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, Wt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = l(this, De).get(r) ?? 0;
    if (l(this, De).set(r, n + 1), t) {
      let i = l(this, Se).get(r) ?? 0;
      l(this, Se).set(r, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let i = l(this, De).get(r) ?? 0;
    if (i === 1 ? l(this, De).delete(r) : l(this, De).set(r, i - 1), t) {
      let s = l(this, Se).get(r) ?? 0;
      s === 1 ? l(this, Se).delete(r) : l(this, Se).set(r, s - 1);
    }
    l(this, Tt) || n || (k(this, Tt, !0), xt(() => {
      k(this, Tt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      l(this, Je).add(n);
    for (const n of r)
      l(this, ze).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, Et).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, qt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    l(this, st).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, st)) t(this);
    l(this, st).clear();
  }
  settled() {
    return (l(this, Kt) ?? k(this, Kt, Nn())).promise;
  }
  static ensure() {
    if (b === null) {
      const t = b = new yr();
      Fr || (tt.add(b), Ut || xt(() => {
        b === t && t.flush();
      }));
    }
    return b;
  }
  apply() {
    {
      xe = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Br = t, t.b?.is_pending && (t.f & (Ct | Er | Cn)) !== 0 && (t.f & pt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (wt !== null && r === E && (x === null || (x.f & Y) === 0))
        return;
      if ((n & (Ze | qe)) !== 0) {
        if ((n & L) === 0)
          return;
        r.f ^= L;
      }
    }
    l(this, ie).push(r);
  }
};
Et = new WeakMap(), qt = new WeakMap(), st = new WeakMap(), De = new WeakMap(), Se = new WeakMap(), Kt = new WeakMap(), ie = new WeakMap(), Wt = new WeakMap(), Je = new WeakMap(), ze = new WeakMap(), Te = new WeakMap(), St = new WeakMap(), Tt = new WeakMap(), lt = new WeakMap(), z = new WeakSet(), cr = function() {
  return this.is_fork || l(this, Se).size > 0;
}, Vn = function() {
  for (const n of l(this, lt))
    for (const i of l(n, Se).keys()) {
      for (var t = !1, r = i; r.parent !== null; ) {
        if (l(this, Te).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, dr = function() {
  var a;
  if (_n++ > 1e3 && (tt.delete(this), ts()), !C(this, z, cr).call(this)) {
    for (const o of l(this, Je))
      l(this, ze).delete(o), F(o, U), this.schedule(o);
    for (const o of l(this, ze))
      F(o, Ce), this.schedule(o);
  }
  const t = l(this, ie);
  k(this, ie, []), this.apply();
  var r = wt = [], n = [], i = ur = [];
  for (const o of t)
    try {
      C(this, z, Hr).call(this, o, r, n);
    } catch (u) {
      throw Hn(o), u;
    }
  if (b = null, i.length > 0) {
    var s = yr.ensure();
    for (const o of i)
      s.schedule(o);
  }
  if (wt = null, ur = null, C(this, z, cr).call(this) || C(this, z, Vn).call(this)) {
    C(this, z, vr).call(this, n), C(this, z, vr).call(this, r);
    for (const [o, u] of l(this, Te))
      Bn(o, u);
  } else {
    l(this, De).size === 0 && tt.delete(this), l(this, Je).clear(), l(this, ze).clear();
    for (const o of l(this, Et)) o(this);
    l(this, Et).clear(), pn(n), pn(r), l(this, Kt)?.resolve();
  }
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    b
  );
  if (l(this, ie).length > 0) {
    const o = f ?? (f = this);
    l(o, ie).push(...l(this, ie).filter((u) => !l(o, ie).includes(u)));
  }
  f !== null && (tt.add(f), C(a = f, z, dr).call(a));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Hr = function(t, r, n) {
  t.f ^= L;
  for (var i = t.first; i !== null; ) {
    var s = i.f, f = (s & (qe | Ze)) !== 0, a = f && (s & L) !== 0, o = a || (s & X) !== 0 || l(this, Te).has(i);
    if (!o && i.fn !== null) {
      f ? i.f ^= L : (s & Ct) !== 0 ? r.push(i) : tr(i) && ((s & Ne) !== 0 && l(this, ze).add(i), Ot(i));
      var u = i.first;
      if (u !== null) {
        i = u;
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
vr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Ln(t[r], l(this, Je), l(this, ze));
}, $i = function() {
  var v, _, h;
  for (const d of tt) {
    var t = d.id < this.id, r = [];
    for (const [c, [g, y]] of this.current) {
      if (d.current.has(c)) {
        var n = (
          /** @type {[any, boolean]} */
          d.current.get(c)[0]
        );
        if (t && g !== n)
          d.current.set(c, [g, y]);
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
        for (const c of l(this, St))
          d.unskip_effect(c, (g) => {
            var y;
            (g.f & (Ne | Jt)) !== 0 ? d.schedule(g) : C(y = d, z, vr).call(y, [g]);
          });
      d.activate();
      var s = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (var a of r)
        jn(a, i, s, f);
      f = /* @__PURE__ */ new Map();
      var o = [...d.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of l(this, Wt))
        (c.f & (pe | X | jr)) === 0 && en(c, o, f) && ((c.f & (Jt | Ne)) !== 0 ? (F(c, U), d.schedule(c)) : l(d, Je).add(c));
      if (l(d, ie).length > 0) {
        d.apply();
        for (var u of l(d, ie))
          C(v = d, z, Hr).call(v, u, [], []);
        k(d, ie, []);
      }
      d.deactivate();
    }
  }
  for (const d of tt)
    l(d, lt).has(this) && (l(d, lt).delete(this), l(d, lt).size === 0 && !C(_ = d, z, cr).call(_) && (d.activate(), C(h = d, z, dr).call(h)));
};
let ht = yr;
function es(e) {
  var t = Ut;
  Ut = !0;
  try {
    for (var r; ; ) {
      if (Xi(), b === null)
        return (
          /** @type {T} */
          r
        );
      b.flush();
    }
  } finally {
    Ut = t;
  }
}
function ts() {
  try {
    Di();
  } catch (e) {
    Ke(e, Br);
  }
}
let Oe = null;
function pn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (pe | X)) === 0 && tr(n) && (Oe = /* @__PURE__ */ new Set(), Ot(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && ii(n), Oe?.size > 0)) {
        ut.clear();
        for (const i of Oe) {
          if ((i.f & (pe | X)) !== 0) continue;
          const s = [i];
          let f = i.parent;
          for (; f !== null; )
            Oe.has(f) && (Oe.delete(f), s.push(f)), f = f.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const o = s[a];
            (o.f & (pe | X)) === 0 && Ot(o);
          }
        }
        Oe.clear();
      }
    }
    Oe = null;
  }
}
function jn(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & Y) !== 0 ? jn(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (Jt | Ne)) !== 0 && (s & U) === 0 && en(i, t, n) && (F(i, U), tn(
        /** @type {Effect} */
        i
      ));
    }
}
function en(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Nt.call(t, i))
        return !0;
      if ((i.f & Y) !== 0 && en(
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
function tn(e) {
  b.schedule(e);
}
function Bn(e, t) {
  if (!((e.f & qe) !== 0 && (e.f & L) !== 0)) {
    (e.f & U) !== 0 ? t.d.push(e) : (e.f & Ce) !== 0 && t.m.push(e), F(e, L);
    for (var r = e.first; r !== null; )
      Bn(r, t), r = r.next;
  }
}
function Hn(e) {
  F(e, L);
  for (var t = e.first; t !== null; )
    Hn(t), t = t.next;
}
function rs(e) {
  let t = 0, r = _t(0), n;
  return () => {
    sn() && (p(r), ri(() => (t === 0 && (n = vi(() => e(() => Yt(r)))), t += 1, () => {
      xt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Yt(r));
      });
    })));
  };
}
var ns = Mt | Ft;
function is(e, t, r, n) {
  new ss(e, t, r, n);
}
var ce, Qr, de, at, ee, ve, W, se, Ie, ot, Ge, At, Xt, Zt, Le, wr, R, ls, as, os, Ur, hr, _r, Yr, Jr;
class ss {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    m(this, R);
    /** @type {Boundary | null} */
    we(this, "parent");
    we(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    we(this, "transform_error");
    /** @type {TemplateNode} */
    m(this, ce);
    /** @type {TemplateNode | null} */
    m(this, Qr, null);
    /** @type {BoundaryProps} */
    m(this, de);
    /** @type {((anchor: Node) => void)} */
    m(this, at);
    /** @type {Effect} */
    m(this, ee);
    /** @type {Effect | null} */
    m(this, ve, null);
    /** @type {Effect | null} */
    m(this, W, null);
    /** @type {Effect | null} */
    m(this, se, null);
    /** @type {DocumentFragment | null} */
    m(this, Ie, null);
    m(this, ot, 0);
    m(this, Ge, 0);
    m(this, At, !1);
    /** @type {Set<Effect>} */
    m(this, Xt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    m(this, Zt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    m(this, Le, null);
    m(this, wr, rs(() => (k(this, Le, _t(l(this, ot))), () => {
      k(this, Le, null);
    })));
    k(this, ce, t), k(this, de, r), k(this, at, (s) => {
      var f = (
        /** @type {Effect} */
        E
      );
      f.b = this, f.f |= Vr, n(s);
    }), this.parent = /** @type {Effect} */
    E.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), k(this, ee, ln(() => {
      C(this, R, Ur).call(this);
    }, ns));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Ln(t, l(this, Xt), l(this, Zt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, de).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    C(this, R, Yr).call(this, t, r), k(this, ot, l(this, ot) + t), !(!l(this, Le) || l(this, At)) && (k(this, At, !0), xt(() => {
      k(this, At, !1), l(this, Le) && Rt(l(this, Le), l(this, ot));
    }));
  }
  get_effect_pending() {
    return l(this, wr).call(this), p(
      /** @type {Source<number>} */
      l(this, Le)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, de).onerror && !l(this, de).failed)
      throw t;
    b?.is_fork ? (l(this, ve) && b.skip_effect(l(this, ve)), l(this, W) && b.skip_effect(l(this, W)), l(this, se) && b.skip_effect(l(this, se)), b.on_fork_commit(() => {
      C(this, R, Jr).call(this, t);
    })) : C(this, R, Jr).call(this, t);
  }
}
ce = new WeakMap(), Qr = new WeakMap(), de = new WeakMap(), at = new WeakMap(), ee = new WeakMap(), ve = new WeakMap(), W = new WeakMap(), se = new WeakMap(), Ie = new WeakMap(), ot = new WeakMap(), Ge = new WeakMap(), At = new WeakMap(), Xt = new WeakMap(), Zt = new WeakMap(), Le = new WeakMap(), wr = new WeakMap(), R = new WeakSet(), ls = function() {
  try {
    k(this, ve, he(() => l(this, at).call(this, l(this, ce))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
as = function(t) {
  const r = l(this, de).failed;
  r && k(this, se, he(() => {
    r(
      l(this, ce),
      () => t,
      () => () => {
      }
    );
  }));
}, os = function() {
  const t = l(this, de).pending;
  t && (this.is_pending = !0, k(this, W, he(() => t(l(this, ce)))), xt(() => {
    var r = k(this, Ie, document.createDocumentFragment()), n = Xe();
    r.append(n), k(this, ve, C(this, R, _r).call(this, () => he(() => l(this, at).call(this, n)))), l(this, Ge) === 0 && (l(this, ce).before(r), k(this, Ie, null), ct(
      /** @type {Effect} */
      l(this, W),
      () => {
        k(this, W, null);
      }
    ), C(this, R, hr).call(
      this,
      /** @type {Batch} */
      b
    ));
  }));
}, Ur = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), k(this, Ge, 0), k(this, ot, 0), k(this, ve, he(() => {
      l(this, at).call(this, l(this, ce));
    })), l(this, Ge) > 0) {
      var t = k(this, Ie, document.createDocumentFragment());
      fn(l(this, ve), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        l(this, de).pending
      );
      k(this, W, he(() => r(l(this, ce))));
    } else
      C(this, R, hr).call(
        this,
        /** @type {Batch} */
        b
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
hr = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, Xt), l(this, Zt));
}, /**
 * @template T
 * @param {() => T} fn
 */
_r = function(t) {
  var r = E, n = x, i = ge;
  Me(l(this, ee)), be(l(this, ee)), Pt(l(this, ee).ctx);
  try {
    return ht.ensure(), t();
  } catch (s) {
    return zn(s), null;
  } finally {
    Me(r), be(n), Pt(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Yr = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && C(n = this.parent, R, Yr).call(n, t, r);
    return;
  }
  k(this, Ge, l(this, Ge) + t), l(this, Ge) === 0 && (C(this, R, hr).call(this, r), l(this, W) && ct(l(this, W), () => {
    k(this, W, null);
  }), l(this, Ie) && (l(this, ce).before(l(this, Ie)), k(this, Ie, null)));
}, /**
 * @param {unknown} error
 */
Jr = function(t) {
  l(this, ve) && (re(l(this, ve)), k(this, ve, null)), l(this, W) && (re(l(this, W)), k(this, W, null)), l(this, se) && (re(l(this, se)), k(this, se, null));
  var r = l(this, de).onerror;
  let n = l(this, de).failed;
  var i = !1, s = !1;
  const f = () => {
    if (i) {
      Ki();
      return;
    }
    i = !0, s && Vi(), l(this, se) !== null && ct(l(this, se), () => {
      k(this, se, null);
    }), C(this, R, _r).call(this, () => {
      C(this, R, Ur).call(this);
    });
  }, a = (o) => {
    try {
      s = !0, r?.(o, f), s = !1;
    } catch (u) {
      Ke(u, l(this, ee) && l(this, ee).parent);
    }
    n && k(this, se, C(this, R, _r).call(this, () => {
      try {
        return he(() => {
          var u = (
            /** @type {Effect} */
            E
          );
          u.b = this, u.f |= Vr, n(
            l(this, ce),
            () => o,
            () => f
          );
        });
      } catch (u) {
        return Ke(
          u,
          /** @type {Effect} */
          l(this, ee).parent
        ), null;
      }
    }));
  };
  xt(() => {
    var o;
    try {
      o = this.transform_error(t);
    } catch (u) {
      Ke(u, l(this, ee) && l(this, ee).parent);
      return;
    }
    o !== null && typeof o == "object" && typeof /** @type {any} */
    o.then == "function" ? o.then(
      a,
      /** @param {unknown} e */
      (u) => Ke(u, l(this, ee) && l(this, ee).parent)
    ) : a(o);
  });
};
function fs(e, t, r, n) {
  const i = Yn;
  var s = e.filter((h) => !h.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(i));
    return;
  }
  var f = (
    /** @type {Effect} */
    E
  ), a = us(), o = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function u(h) {
    a();
    try {
      n(h);
    } catch (d) {
      (f.f & pe) === 0 && Ke(d, f);
    }
    gr();
  }
  if (r.length === 0) {
    o.then(() => u(t.map(i)));
    return;
  }
  var v = Un();
  function _() {
    Promise.all(r.map((h) => /* @__PURE__ */ cs(h))).then((h) => u([...t.map(i), ...h])).catch((h) => Ke(h, f)).finally(() => v());
  }
  o ? o.then(() => {
    a(), _(), gr();
  }) : _();
}
function us() {
  var e = (
    /** @type {Effect} */
    E
  ), t = x, r = ge, n = (
    /** @type {Batch} */
    b
  );
  return function(s = !0) {
    Me(e), be(t), Pt(r), s && (e.f & pe) === 0 && (n?.activate(), n?.apply());
  };
}
function gr(e = !0) {
  Me(null), be(null), Pt(null), e && b?.deactivate();
}
function Un() {
  var e = (
    /** @type {Effect} */
    E
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    b
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (i = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function Yn(e) {
  var t = Y | U;
  return E !== null && (E.f |= Ft), {
    ctx: ge,
    deps: null,
    effects: null,
    equals: Mn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      j
    ),
    wv: 0,
    parent: E,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function cs(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    E
  );
  n === null && Mi();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = _t(
    /** @type {V} */
    j
  ), f = !x, a = /* @__PURE__ */ new Map();
  return Ts(() => {
    var o = (
      /** @type {Effect} */
      E
    ), u = Nn();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(gr);
    } catch (d) {
      u.reject(d), gr();
    }
    var v = (
      /** @type {Batch} */
      b
    );
    if (f) {
      if ((o.f & pt) !== 0)
        var _ = Un();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        a.get(v)?.reject(Fe), a.delete(v);
      else {
        for (const d of a.values())
          d.reject(Fe);
        a.clear();
      }
      a.set(v, u);
    }
    const h = (d, c = void 0) => {
      if (_) {
        var g = c === Fe;
        _(g);
      }
      if (!(c === Fe || (o.f & pe) !== 0)) {
        if (v.activate(), c)
          s.f |= We, Rt(s, c);
        else {
          (s.f & We) !== 0 && (s.f ^= We), Rt(s, d);
          for (const [y, A] of a) {
            if (a.delete(y), y === v) break;
            A.reject(Fe);
          }
        }
        v.deactivate();
      }
    };
    u.promise.then(h, (d) => h(null, d || "unknown"));
  }), xs(() => {
    for (const o of a.values())
      o.reject(Fe);
  }), new Promise((o) => {
    function u(v) {
      function _() {
        v === i ? o(s) : u(i);
      }
      v.then(_, _);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function ds(e) {
  const t = /* @__PURE__ */ Yn(e);
  return t.equals = Pn, t;
}
function vs(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      re(
        /** @type {Effect} */
        t[r]
      );
  }
}
function rn(e) {
  var t, r = E, n = e.parent;
  if (!Qe && n !== null && (n.f & (pe | X)) !== 0)
    return Gi(), e.v;
  Me(n);
  try {
    e.f &= ~vt, vs(e), t = ui(e);
  } finally {
    Me(r);
  }
  return t;
}
function Jn(e) {
  var t = rn(e);
  if (!e.equals(t) && (e.wv = oi(), (!b?.is_fork || e.deps === null) && (b !== null ? b.capture(e, t, !0) : e.v = t, e.deps === null))) {
    F(e, L);
    return;
  }
  Qe || (xe !== null ? (sn() || b?.is_fork) && xe.set(e, t) : $r(e));
}
function hs(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Fe), t.teardown = Ti, t.ac = null, Gt(t, 0), an(t));
}
function Gn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Ot(t);
}
let Gr = /* @__PURE__ */ new Set();
const ut = /* @__PURE__ */ new Map();
let Kn = !1;
function _t(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Mn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function I(e, t) {
  const r = _t(e);
  return Cs(r), r;
}
// @__NO_SIDE_EFFECTS__
function _s(e, t = !1, r = !0) {
  const n = _t(e);
  return t || (n.equals = Pn), n;
}
function q(e, t, r = !1) {
  x !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ee || (x.f & jr) !== 0) && Fn() && (x.f & (Y | Ne | Jt | jr)) !== 0 && (me === null || !Nt.call(me, e)) && Li();
  let n = r ? kt(t) : t;
  return Rt(e, n, ur);
}
function Rt(e, t, r = null) {
  if (!e.equals(t)) {
    ut.set(e, Qe ? t : e.v);
    var n = ht.ensure();
    if (n.capture(e, t), (e.f & Y) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & U) !== 0 && rn(i), xe === null && $r(i);
    }
    e.wv = oi(), Wn(e, U, r), E !== null && (E.f & L) !== 0 && (E.f & (qe | Ze)) === 0 && (ue === null ? Ms([e]) : ue.push(e)), !n.is_fork && Gr.size > 0 && !Kn && ps();
  }
  return t;
}
function ps() {
  Kn = !1;
  for (const e of Gr)
    (e.f & L) !== 0 && F(e, Ce), tr(e) && Ot(e);
  Gr.clear();
}
function Yt(e) {
  q(e, e.v + 1);
}
function Wn(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var f = n[s], a = f.f, o = (a & U) === 0;
      if (o && F(f, t), (a & Y) !== 0) {
        var u = (
          /** @type {Derived} */
          f
        );
        xe?.delete(u), (a & vt) === 0 && (a & _e && (E === null || (E.f & mr) === 0) && (f.f |= vt), Wn(u, Ce, r));
      } else if (o) {
        var v = (
          /** @type {Effect} */
          f
        );
        (a & Ne) !== 0 && Oe !== null && Oe.add(v), r !== null ? r.push(v) : tn(v);
      }
    }
}
function kt(e) {
  if (typeof e != "object" || e === null || Or in e)
    return e;
  const t = Si(e);
  if (t !== Ei && t !== qi)
    return e;
  var r = /* @__PURE__ */ new Map(), n = An(e), i = /* @__PURE__ */ I(0), s = dt, f = (a) => {
    if (dt === s)
      return a();
    var o = x, u = dt;
    be(null), yn(s);
    var v = a();
    return be(o), yn(u), v;
  };
  return n && r.set("length", /* @__PURE__ */ I(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, o, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && zi();
        var v = r.get(o);
        return v === void 0 ? f(() => {
          var _ = /* @__PURE__ */ I(u.value);
          return r.set(o, _), _;
        }) : q(v, u.value, !0), !0;
      },
      deleteProperty(a, o) {
        var u = r.get(o);
        if (u === void 0) {
          if (o in a) {
            const v = f(() => /* @__PURE__ */ I(j));
            r.set(o, v), Yt(i);
          }
        } else
          q(u, j), Yt(i);
        return !0;
      },
      get(a, o, u) {
        if (o === Or)
          return e;
        var v = r.get(o), _ = o in a;
        if (v === void 0 && (!_ || Ht(a, o)?.writable) && (v = f(() => {
          var d = kt(_ ? a[o] : j), c = /* @__PURE__ */ I(d);
          return c;
        }), r.set(o, v)), v !== void 0) {
          var h = p(v);
          return h === j ? void 0 : h;
        }
        return Reflect.get(a, o, u);
      },
      getOwnPropertyDescriptor(a, o) {
        var u = Reflect.getOwnPropertyDescriptor(a, o);
        if (u && "value" in u) {
          var v = r.get(o);
          v && (u.value = p(v));
        } else if (u === void 0) {
          var _ = r.get(o), h = _?.v;
          if (_ !== void 0 && h !== j)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return u;
      },
      has(a, o) {
        if (o === Or)
          return !0;
        var u = r.get(o), v = u !== void 0 && u.v !== j || Reflect.has(a, o);
        if (u !== void 0 || E !== null && (!v || Ht(a, o)?.writable)) {
          u === void 0 && (u = f(() => {
            var h = v ? kt(a[o]) : j, d = /* @__PURE__ */ I(h);
            return d;
          }), r.set(o, u));
          var _ = p(u);
          if (_ === j)
            return !1;
        }
        return v;
      },
      set(a, o, u, v) {
        var _ = r.get(o), h = o in a;
        if (n && o === "length")
          for (var d = u; d < /** @type {Source<number>} */
          _.v; d += 1) {
            var c = r.get(d + "");
            c !== void 0 ? q(c, j) : d in a && (c = f(() => /* @__PURE__ */ I(j)), r.set(d + "", c));
          }
        if (_ === void 0)
          (!h || Ht(a, o)?.writable) && (_ = f(() => /* @__PURE__ */ I(void 0)), q(_, kt(u)), r.set(o, _));
        else {
          h = _.v !== j;
          var g = f(() => kt(u));
          q(_, g);
        }
        var y = Reflect.getOwnPropertyDescriptor(a, o);
        if (y?.set && y.set.call(v, u), !h) {
          if (n && typeof o == "string") {
            var A = (
              /** @type {Source<number>} */
              r.get("length")
            ), S = Number(o);
            Number.isInteger(S) && S >= A.v && q(A, S + 1);
          }
          Yt(i);
        }
        return !0;
      },
      ownKeys(a) {
        p(i);
        var o = Reflect.ownKeys(a).filter((_) => {
          var h = r.get(_);
          return h === void 0 || h.v !== j;
        });
        for (var [u, v] of r)
          v.v !== j && !(u in a) && o.push(u);
        return o;
      },
      setPrototypeOf() {
        Ii();
      }
    }
  );
}
var mn, Xn, Zn, Qn;
function ms() {
  if (mn === void 0) {
    mn = window, Xn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Zn = Ht(t, "firstChild").get, Qn = Ht(t, "nextSibling").get, vn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), vn(r) && (r.__t = void 0);
  }
}
function Xe(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function br(e) {
  return (
    /** @type {TemplateNode | null} */
    Zn.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function er(e) {
  return (
    /** @type {TemplateNode | null} */
    Qn.call(e)
  );
}
function N(e, t) {
  return /* @__PURE__ */ br(e);
}
function Dr(e, t = !1) {
  {
    var r = /* @__PURE__ */ br(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ er(r) : r;
  }
}
function M(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ er(n);
  return n;
}
function gs(e) {
  e.textContent = "";
}
function $n() {
  return !1;
}
function ei(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ji, e, void 0)
  );
}
let gn = !1;
function bs() {
  gn || (gn = !0, document.addEventListener(
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
function nn(e) {
  var t = x, r = E;
  be(null), Me(null);
  try {
    return e();
  } finally {
    be(t), Me(r);
  }
}
function ys(e, t, r, n = r) {
  e.addEventListener(t, () => nn(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), bs();
}
function ws(e) {
  E === null && (x === null && Fi(), Oi()), Qe && Ri();
}
function ks(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function je(e, t) {
  var r = E;
  r !== null && (r.f & X) !== 0 && (e |= X);
  var n = {
    ctx: ge,
    deps: null,
    nodes: null,
    f: e | U | _e,
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
  b?.register_created_effect(n);
  var i = n;
  if ((e & Ct) !== 0)
    wt !== null ? wt.push(n) : ht.ensure().schedule(n);
  else if (t !== null) {
    try {
      Ot(n);
    } catch (f) {
      throw re(n), f;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Ft) === 0 && (i = i.first, (e & Ne) !== 0 && (e & Mt) !== 0 && i !== null && (i.f |= Mt));
  }
  if (i !== null && (i.parent = r, r !== null && ks(i, r), x !== null && (x.f & Y) !== 0 && (e & Ze) === 0)) {
    var s = (
      /** @type {Derived} */
      x
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function sn() {
  return x !== null && !Ee;
}
function xs(e) {
  const t = je(Er, null);
  return F(t, L), t.teardown = e, t;
}
function Es(e) {
  ws();
  var t = (
    /** @type {Effect} */
    E.f
  ), r = !x && (t & qe) !== 0 && (t & pt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ge
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return ti(e);
}
function ti(e) {
  return je(Ct | Ci, e);
}
function qs(e) {
  ht.ensure();
  const t = je(Ze | Ft, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? ct(t, () => {
      re(t), n(void 0);
    }) : (re(t), n(void 0));
  });
}
function Ss(e) {
  return je(Ct, e);
}
function Ts(e) {
  return je(Jt | Ft, e);
}
function ri(e, t = 0) {
  return je(Er | t, e);
}
function $(e, t = [], r = [], n = []) {
  fs(n, t, r, (i) => {
    je(Er, () => e(...i.map(p)));
  });
}
function ln(e, t = 0) {
  var r = je(Ne | t, e);
  return r;
}
function he(e) {
  return je(qe | Ft, e);
}
function ni(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Qe, n = x;
    bn(!0), be(null);
    try {
      t.call(null);
    } finally {
      bn(r), be(n);
    }
  }
}
function an(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && nn(() => {
      i.abort(Fe);
    });
    var n = r.next;
    (r.f & Ze) !== 0 ? r.parent = null : re(r, t), r = n;
  }
}
function As(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & qe) === 0 && re(t), t = r;
  }
}
function re(e, t = !0) {
  var r = !1;
  (t || (e.f & Ni) !== 0) && e.nodes !== null && e.nodes.end !== null && (Ns(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), F(e, hn), an(e, t && !r), Gt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  ni(e), e.f ^= hn, e.f |= pe;
  var i = e.parent;
  i !== null && i.first !== null && ii(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Ns(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ er(e);
    e.remove(), e = r;
  }
}
function ii(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function ct(e, t, r = !0) {
  var n = [];
  si(e, n, !0);
  var i = () => {
    r && re(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var f = () => --s || i();
    for (var a of n)
      a.out(f);
  } else
    i();
}
function si(e, t, r) {
  if ((e.f & X) === 0) {
    e.f ^= X;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const a of n)
        (a.is_global || r) && t.push(a);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & Ze) === 0) {
        var f = (i.f & Mt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & qe) !== 0 && (e.f & Ne) !== 0;
        si(i, t, f ? r : !1);
      }
      i = s;
    }
  }
}
function on(e) {
  li(e, !0);
}
function li(e, t) {
  if ((e.f & X) !== 0) {
    e.f ^= X, (e.f & L) === 0 && (F(e, U), ht.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Mt) !== 0 || (r.f & qe) !== 0;
      li(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const f of s)
        (f.is_global || t) && f.in();
  }
}
function fn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ er(r);
      t.append(r), r = i;
    }
}
let pr = !1, Qe = !1;
function bn(e) {
  Qe = e;
}
let x = null, Ee = !1;
function be(e) {
  x = e;
}
let E = null;
function Me(e) {
  E = e;
}
let me = null;
function Cs(e) {
  x !== null && (me === null ? me = [e] : me.push(e));
}
let te = null, ne = 0, ue = null;
function Ms(e) {
  ue = e;
}
let ai = 1, nt = 0, dt = nt;
function yn(e) {
  dt = e;
}
function oi() {
  return ++ai;
}
function tr(e) {
  var t = e.f;
  if ((t & U) !== 0)
    return !0;
  if (t & Y && (e.f &= ~vt), (t & Ce) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (tr(
        /** @type {Derived} */
        s
      ) && Jn(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & _e) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    xe === null && F(e, L);
  }
  return !1;
}
function fi(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(me !== null && Nt.call(me, e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & Y) !== 0 ? fi(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? F(s, U) : (s.f & L) !== 0 && F(s, Ce), tn(
        /** @type {Effect} */
        s
      ));
    }
}
function ui(e) {
  var g;
  var t = te, r = ne, n = ue, i = x, s = me, f = ge, a = Ee, o = dt, u = e.f;
  te = /** @type {null | Value[]} */
  null, ne = 0, ue = null, x = (u & (qe | Ze)) === 0 ? e : null, me = null, Pt(e.ctx), Ee = !1, dt = ++nt, e.ac !== null && (nn(() => {
    e.ac.abort(Fe);
  }), e.ac = null);
  try {
    e.f |= mr;
    var v = (
      /** @type {Function} */
      e.fn
    ), _ = v();
    e.f |= pt;
    var h = e.deps, d = b?.is_fork;
    if (te !== null) {
      var c;
      if (d || Gt(e, ne), h !== null && ne > 0)
        for (h.length = ne + te.length, c = 0; c < te.length; c++)
          h[ne + c] = te[c];
      else
        e.deps = h = te;
      if (sn() && (e.f & _e) !== 0)
        for (c = ne; c < h.length; c++)
          ((g = h[c]).reactions ?? (g.reactions = [])).push(e);
    } else !d && h !== null && ne < h.length && (Gt(e, ne), h.length = ne);
    if (Fn() && ue !== null && !Ee && h !== null && (e.f & (Y | Ce | U)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      ue.length; c++)
        fi(
          ue[c],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (nt++, i.deps !== null)
        for (let y = 0; y < r; y += 1)
          i.deps[y].rv = nt;
      if (t !== null)
        for (const y of t)
          y.rv = nt;
      ue !== null && (n === null ? n = ue : n.push(.../** @type {Source[]} */
      ue));
    }
    return (e.f & We) !== 0 && (e.f ^= We), _;
  } catch (y) {
    return zn(y);
  } finally {
    e.f ^= mr, te = t, ne = r, ue = n, x = i, me = s, Pt(f), Ee = a, dt = o;
  }
}
function Ps(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = ki.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & Y) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (te === null || !Nt.call(te, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & _e) !== 0 && (s.f ^= _e, s.f &= ~vt), s.v !== j && $r(s), hs(s), Gt(s, 0);
  }
}
function Gt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Ps(e, r[n]);
}
function Ot(e) {
  var t = e.f;
  if ((t & pe) === 0) {
    F(e, L);
    var r = E, n = pr;
    E = e, pr = !0;
    try {
      (t & (Ne | Cn)) !== 0 ? As(e) : an(e), ni(e);
      var i = ui(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = ai;
      var s;
    } finally {
      pr = n, E = r;
    }
  }
}
async function Rs() {
  await Promise.resolve(), es();
}
function p(e) {
  var t = e.f, r = (t & Y) !== 0;
  if (x !== null && !Ee) {
    var n = E !== null && (E.f & pe) !== 0;
    if (!n && (me === null || !Nt.call(me, e))) {
      var i = x.deps;
      if ((x.f & mr) !== 0)
        e.rv < nt && (e.rv = nt, te === null && i !== null && i[ne] === e ? ne++ : te === null ? te = [e] : te.push(e));
      else {
        (x.deps ?? (x.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [x] : Nt.call(s, x) || s.push(x);
      }
    }
  }
  if (Qe && ut.has(e))
    return ut.get(e);
  if (r) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (Qe) {
      var a = f.v;
      return ((f.f & L) === 0 && f.reactions !== null || di(f)) && (a = rn(f)), ut.set(f, a), a;
    }
    var o = (f.f & _e) === 0 && !Ee && x !== null && (pr || (x.f & _e) !== 0), u = (f.f & pt) === 0;
    tr(f) && (o && (f.f |= _e), Jn(f)), o && !u && (Gn(f), ci(f));
  }
  if (xe?.has(e))
    return xe.get(e);
  if ((e.f & We) !== 0)
    throw e.v;
  return e.v;
}
function ci(e) {
  if (e.f |= _e, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & Y) !== 0 && (t.f & _e) === 0 && (Gn(
        /** @type {Derived} */
        t
      ), ci(
        /** @type {Derived} */
        t
      ));
}
function di(e) {
  if (e.v === j) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ut.has(t) || (t.f & Y) !== 0 && di(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function vi(e) {
  var t = Ee;
  try {
    return Ee = !0, e();
  } finally {
    Ee = t;
  }
}
const Os = ["touchstart", "touchmove"];
function Fs(e) {
  return Os.includes(e);
}
const it = Symbol("events"), hi = /* @__PURE__ */ new Set(), Kr = /* @__PURE__ */ new Set();
function Re(e, t, r) {
  (t[it] ?? (t[it] = {}))[e] = r;
}
function Ds(e) {
  for (var t = 0; t < e.length; t++)
    hi.add(e[t]);
  for (var r of Kr)
    r(e);
}
let wn = null;
function kn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  wn = e;
  var f = 0, a = wn === e && e[it];
  if (a) {
    var o = i.indexOf(a);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[it] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    o <= u && (f = o);
  }
  if (s = /** @type {Element} */
  i[f] || e.target, s !== t) {
    xi(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var v = x, _ = E;
    be(null), Me(null);
    try {
      for (var h, d = []; s !== null; ) {
        var c = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var g = s[it]?.[n];
          g != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && g.call(s, e);
        } catch (y) {
          h ? d.push(y) : h = y;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        s = c;
      }
      if (h) {
        for (let y of d)
          queueMicrotask(() => {
            throw y;
          });
        throw h;
      }
    } finally {
      e[it] = t, delete e.currentTarget, be(v), Me(_);
    }
  }
}
const zs = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Is(e) {
  return (
    /** @type {string} */
    zs?.createHTML(e) ?? e
  );
}
function Ls(e) {
  var t = ei("template");
  return t.innerHTML = Is(e.replaceAll("<!>", "<!---->")), t.content;
}
function Wr(e, t) {
  var r = (
    /** @type {Effect} */
    E
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function B(e, t) {
  var r = (t & Ui) !== 0, n = (t & Yi) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = Ls(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ br(i)));
    var f = (
      /** @type {TemplateNode} */
      n || Xn ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ br(f)
      ), o = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      Wr(a, o);
    } else
      Wr(f, f);
    return f;
  };
}
function Vs() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Xe();
  return e.append(t, r), Wr(t, r), e;
}
function V(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function K(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function js(e, t) {
  return Bs(e, t);
}
const or = /* @__PURE__ */ new Map();
function Bs(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: f = !0, transformError: a }) {
  ms();
  var o = void 0, u = qs(() => {
    var v = r ?? t.appendChild(Xe());
    is(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (d) => {
        Rn({});
        var c = (
          /** @type {ComponentContext} */
          ge
        );
        s && (c.c = s), i && (n.$$events = i), o = e(d, n) || {}, On();
      },
      a
    );
    var _ = /* @__PURE__ */ new Set(), h = (d) => {
      for (var c = 0; c < d.length; c++) {
        var g = d[c];
        if (!_.has(g)) {
          _.add(g);
          var y = Fs(g);
          for (const J of [t, document]) {
            var A = or.get(J);
            A === void 0 && (A = /* @__PURE__ */ new Map(), or.set(J, A));
            var S = A.get(g);
            S === void 0 ? (J.addEventListener(g, kn, { passive: y }), A.set(g, 1)) : A.set(g, S + 1);
          }
        }
      }
    };
    return h(xr(hi)), Kr.add(h), () => {
      for (var d of _)
        for (const y of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            or.get(y)
          ), g = (
            /** @type {number} */
            c.get(d)
          );
          --g == 0 ? (y.removeEventListener(d, kn), c.delete(d), c.size === 0 && or.delete(y)) : c.set(d, g);
        }
      Kr.delete(h), v !== r && v.parentNode?.removeChild(v);
    };
  });
  return Xr.set(o, u), o;
}
let Xr = /* @__PURE__ */ new WeakMap();
function Hs(e, t) {
  const r = Xr.get(e);
  return r ? (Xr.delete(e), r(t)) : Promise.resolve();
}
var ke, Ae, le, ft, Qt, $t, kr;
class Us {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    we(this, "anchor");
    /** @type {Map<Batch, Key>} */
    m(this, ke, /* @__PURE__ */ new Map());
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
    m(this, Ae, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    m(this, le, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    m(this, ft, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    m(this, Qt, !0);
    /**
     * @param {Batch} batch
     */
    m(this, $t, (t) => {
      if (l(this, ke).has(t)) {
        var r = (
          /** @type {Key} */
          l(this, ke).get(t)
        ), n = l(this, Ae).get(r);
        if (n)
          on(n), l(this, ft).delete(r);
        else {
          var i = l(this, le).get(r);
          i && (l(this, Ae).set(r, i.effect), l(this, le).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, f] of l(this, ke)) {
          if (l(this, ke).delete(s), s === t)
            break;
          const a = l(this, le).get(f);
          a && (re(a.effect), l(this, le).delete(f));
        }
        for (const [s, f] of l(this, Ae)) {
          if (s === r || l(this, ft).has(s)) continue;
          const a = () => {
            if (Array.from(l(this, ke).values()).includes(s)) {
              var u = document.createDocumentFragment();
              fn(f, u), u.append(Xe()), l(this, le).set(s, { effect: f, fragment: u });
            } else
              re(f);
            l(this, ft).delete(s), l(this, Ae).delete(s);
          };
          l(this, Qt) || !n ? (l(this, ft).add(s), ct(f, a, !1)) : a();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    m(this, kr, (t) => {
      l(this, ke).delete(t);
      const r = Array.from(l(this, ke).values());
      for (const [n, i] of l(this, le))
        r.includes(n) || (re(i.effect), l(this, le).delete(n));
    });
    this.anchor = t, k(this, Qt, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      b
    ), i = $n();
    if (r && !l(this, Ae).has(t) && !l(this, le).has(t))
      if (i) {
        var s = document.createDocumentFragment(), f = Xe();
        s.append(f), l(this, le).set(t, {
          effect: he(() => r(f)),
          fragment: s
        });
      } else
        l(this, Ae).set(
          t,
          he(() => r(this.anchor))
        );
    if (l(this, ke).set(n, t), i) {
      for (const [a, o] of l(this, Ae))
        a === t ? n.unskip_effect(o) : n.skip_effect(o);
      for (const [a, o] of l(this, le))
        a === t ? n.unskip_effect(o.effect) : n.skip_effect(o.effect);
      n.oncommit(l(this, $t)), n.ondiscard(l(this, kr));
    } else
      l(this, $t).call(this, n);
  }
}
ke = new WeakMap(), Ae = new WeakMap(), le = new WeakMap(), ft = new WeakMap(), Qt = new WeakMap(), $t = new WeakMap(), kr = new WeakMap();
function fe(e, t, r = !1) {
  var n = new Us(e), i = r ? Mt : 0;
  function s(f, a) {
    n.ensure(f, a);
  }
  ln(() => {
    var f = !1;
    t((a, o = 0) => {
      f = !0, s(o, a);
    }), f || s(-1, null);
  }, i);
}
function Ys(e, t, r) {
  for (var n = [], i = t.length, s, f = t.length, a = 0; a < i; a++) {
    let _ = t[a];
    ct(
      _,
      () => {
        if (s) {
          if (s.pending.delete(_), s.done.add(_), s.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Zr(e, xr(s.done)), h.delete(s), h.size === 0 && (e.outrogroups = null);
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
      ), v = (
        /** @type {Element} */
        u.parentNode
      );
      gs(v), v.append(u), e.items.clear();
    }
    Zr(e, t, !o);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Zr(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const f of e.pending.values())
      for (const a of f)
        n.add(
          /** @type {EachItem} */
          e.items.get(a).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (n?.has(s)) {
      s.f |= Ve;
      const f = document.createDocumentFragment();
      fn(s, f);
    } else
      re(t[i], r);
  }
}
var xn;
function Js(e, t, r, n, i, s = null) {
  var f = e, a = /* @__PURE__ */ new Map();
  {
    var o = (
      /** @type {Element} */
      e
    );
    f = o.appendChild(Xe());
  }
  var u = null, v = /* @__PURE__ */ ds(() => {
    var S = r();
    return An(S) ? S : S == null ? [] : xr(S);
  }), _, h = /* @__PURE__ */ new Map(), d = !0;
  function c(S) {
    (A.effect.f & pe) === 0 && (A.pending.delete(S), A.fallback = u, Gs(A, _, f, t, n), u !== null && (_.length === 0 ? (u.f & Ve) === 0 ? on(u) : (u.f ^= Ve, Bt(u, null, f)) : ct(u, () => {
      u = null;
    })));
  }
  function g(S) {
    A.pending.delete(S);
  }
  var y = ln(() => {
    _ = /** @type {V[]} */
    p(v);
    for (var S = _.length, J = /* @__PURE__ */ new Set(), ae = (
      /** @type {Batch} */
      b
    ), Pe = $n(), ye = 0; ye < S; ye += 1) {
      var Be = _[ye], Z = n(Be, ye), oe = d ? null : a.get(Z);
      oe ? (oe.v && Rt(oe.v, Be), oe.i && Rt(oe.i, ye), Pe && ae.unskip_effect(oe.e)) : (oe = Ks(
        a,
        d ? f : xn ?? (xn = Xe()),
        Be,
        Z,
        ye,
        i,
        t,
        r
      ), d || (oe.e.f |= Ve), a.set(Z, oe)), J.add(Z);
    }
    if (S === 0 && s && !u && (d ? u = he(() => s(f)) : (u = he(() => s(xn ?? (xn = Xe()))), u.f |= Ve)), S > J.size && Pi(), !d)
      if (h.set(ae, J), Pe) {
        for (const [qr, rr] of a)
          J.has(qr) || ae.skip_effect(rr.e);
        ae.oncommit(c), ae.ondiscard(g);
      } else
        c(ae);
    p(v);
  }), A = { effect: y, items: a, pending: h, outrogroups: null, fallback: u };
  d = !1;
}
function jt(e) {
  for (; e !== null && (e.f & qe) === 0; )
    e = e.next;
  return e;
}
function Gs(e, t, r, n, i) {
  var s = t.length, f = e.items, a = jt(e.effect.first), o, u = null, v = [], _ = [], h, d, c, g;
  for (g = 0; g < s; g += 1) {
    if (h = t[g], d = i(h, g), c = /** @type {EachItem} */
    f.get(d).e, e.outrogroups !== null)
      for (const Z of e.outrogroups)
        Z.pending.delete(c), Z.done.delete(c);
    if ((c.f & X) !== 0 && on(c), (c.f & Ve) !== 0)
      if (c.f ^= Ve, c === a)
        Bt(c, null, r);
      else {
        var y = u ? u.next : a;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), Ye(e, u, c), Ye(e, c, y), Bt(c, y, r), u = c, v = [], _ = [], a = jt(u.next);
        continue;
      }
    if (c !== a) {
      if (o !== void 0 && o.has(c)) {
        if (v.length < _.length) {
          var A = _[0], S;
          u = A.prev;
          var J = v[0], ae = v[v.length - 1];
          for (S = 0; S < v.length; S += 1)
            Bt(v[S], A, r);
          for (S = 0; S < _.length; S += 1)
            o.delete(_[S]);
          Ye(e, J.prev, ae.next), Ye(e, u, J), Ye(e, ae, A), a = A, u = ae, g -= 1, v = [], _ = [];
        } else
          o.delete(c), Bt(c, a, r), Ye(e, c.prev, c.next), Ye(e, c, u === null ? e.effect.first : u.next), Ye(e, u, c), u = c;
        continue;
      }
      for (v = [], _ = []; a !== null && a !== c; )
        (o ?? (o = /* @__PURE__ */ new Set())).add(a), _.push(a), a = jt(a.next);
      if (a === null)
        continue;
    }
    (c.f & Ve) === 0 && v.push(c), u = c, a = jt(c.next);
  }
  if (e.outrogroups !== null) {
    for (const Z of e.outrogroups)
      Z.pending.size === 0 && (Zr(e, xr(Z.done)), e.outrogroups?.delete(Z));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || o !== void 0) {
    var Pe = [];
    if (o !== void 0)
      for (c of o)
        (c.f & X) === 0 && Pe.push(c);
    for (; a !== null; )
      (a.f & X) === 0 && a !== e.fallback && Pe.push(a), a = jt(a.next);
    var ye = Pe.length;
    if (ye > 0) {
      var Be = s === 0 ? r : null;
      Ys(e, Pe, Be);
    }
  }
}
function Ks(e, t, r, n, i, s, f, a) {
  var o = (f & ji) !== 0 ? (f & Hi) === 0 ? /* @__PURE__ */ _s(r, !1, !1) : _t(r) : null, u = (f & Bi) !== 0 ? _t(i) : null;
  return {
    v: o,
    i: u,
    e: he(() => (s(t, o ?? r, u ?? i, a), () => {
      e.delete(n);
    }))
  };
}
function Bt(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & Ve) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ er(n)
      );
      if (s.before(n), n === i)
        return;
      n = f;
    }
}
function Ye(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Ws(e, t) {
  Ss(() => {
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
      const i = ei("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
const En = [...` 	
\r\f \v\uFEFF`];
function Xs(e, t, r) {
  var n = "" + e;
  if (r) {
    for (var i of Object.keys(r))
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var s = i.length, f = 0; (f = n.indexOf(i, f)) >= 0; ) {
          var a = f + s;
          (f === 0 || En.includes(n[f - 1])) && (a === n.length || En.includes(n[a])) ? n = (f === 0 ? "" : n.substring(0, f)) + n.substring(a + 1) : f = a;
        }
  }
  return n === "" ? null : n;
}
function Zs(e, t) {
  return e == null ? null : String(e);
}
function qn(e, t, r, n, i, s) {
  var f = e.__className;
  if (f !== r || f === void 0) {
    var a = Xs(r, n, s);
    a == null ? e.removeAttribute("class") : e.className = a, e.__className = r;
  } else if (s && i !== s)
    for (var o in s) {
      var u = !!s[o];
      (i == null || u !== !!i[o]) && e.classList.toggle(o, u);
    }
  return s;
}
function Sn(e, t, r, n) {
  var i = e.__style;
  if (i !== t) {
    var s = Zs(t);
    s == null ? e.removeAttribute("style") : e.style.cssText = s, e.__style = t;
  }
  return n;
}
function zr(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  ys(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = Ir(e) ? Lr(s) : s, r(s), b !== null && n.add(b), await Rs(), s !== (s = t())) {
      var f = e.selectionStart, a = e.selectionEnd, o = e.value.length;
      if (e.value = s ?? "", a !== null) {
        var u = e.value.length;
        f === a && a === o && u > o ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = f, e.selectionEnd = Math.min(a, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  vi(t) == null && e.value && (r(Ir(e) ? Lr(e.value) : e.value), b !== null && n.add(b)), ri(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        b
      );
      if (n.has(s))
        return;
    }
    Ir(e) && i === Lr(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Ir(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Lr(e) {
  return e === "" ? null : +e;
}
function fr(e, t, r, n) {
  var i = (
    /** @type {V} */
    n
  ), s = !0, f = () => (s && (s = !1, i = /** @type {V} */
  n), i), a;
  a = /** @type {V} */
  e[t], a === void 0 && n !== void 0 && (a = f());
  var o;
  return o = () => {
    var u = (
      /** @type {V} */
      e[t]
    );
    return u === void 0 ? f() : (s = !0, u);
  }, o;
}
const Qs = "5";
var Tn;
typeof window < "u" && ((Tn = window.__svelte ?? (window.__svelte = {})).v ?? (Tn.v = /* @__PURE__ */ new Set())).add(Qs);
var $s = /* @__PURE__ */ B('<div class="error svelte-rym1qk"> </div>'), el = /* @__PURE__ */ B('<div class="success svelte-rym1qk"> </div>'), tl = /* @__PURE__ */ B('<span class="status svelte-rym1qk"> </span>'), rl = /* @__PURE__ */ B('<p class="desc svelte-rym1qk"> </p>'), nl = /* @__PURE__ */ B("<span> </span>"), il = /* @__PURE__ */ B('<div class="vote-stats svelte-rym1qk"><span class="for svelte-rym1qk"> </span> <span class="against svelte-rym1qk"> </span> <!></div>'), sl = /* @__PURE__ */ B('<pre class="code svelte-rym1qk"> </pre>'), ll = /* @__PURE__ */ B('<button class="back svelte-rym1qk">← Back to proposals</button> <div class="card svelte-rym1qk"><h3> </h3> <!> <!> <!> <div class="vote-actions svelte-rym1qk"><button class="btn-for svelte-rym1qk">Vote For</button> <button class="btn-against svelte-rym1qk">Vote Against</button> <button class="btn-abstain svelte-rym1qk">Abstain</button></div> <!></div>', 1), al = /* @__PURE__ */ B('<div class="empty svelte-rym1qk">Loading proposals…</div>'), ol = /* @__PURE__ */ B('<div class="empty svelte-rym1qk">No proposals yet</div>'), fl = /* @__PURE__ */ B('<span class="status svelte-rym1qk"> </span>'), ul = /* @__PURE__ */ B('<p class="desc svelte-rym1qk"> </p>'), cl = /* @__PURE__ */ B('<button class="card clickable svelte-rym1qk"><div class="card-top svelte-rym1qk"><span class="card-title svelte-rym1qk"> </span> <!></div> <!></button>'), dl = /* @__PURE__ */ B('<div class="list svelte-rym1qk"></div>'), vl = /* @__PURE__ */ B('<div class="card svelte-rym1qk"><label class="svelte-rym1qk">Title <input type="text" placeholder="Proposal title" class="svelte-rym1qk"/></label> <label class="svelte-rym1qk">Description <textarea placeholder="Describe the proposal…" rows="3" class="svelte-rym1qk"></textarea></label> <label class="svelte-rym1qk">Code (optional) <textarea placeholder="Codex code…" rows="4" class="mono svelte-rym1qk"></textarea></label> <button class="primary svelte-rym1qk"> </button></div>'), hl = /* @__PURE__ */ B('<div class="tabs svelte-rym1qk"><button> </button> <button>New Proposal</button></div> <!>', 1), _l = /* @__PURE__ */ B('<div class="rt-vote svelte-rym1qk"><div class="header svelte-rym1qk"><h2 class="svelte-rym1qk">Voting</h2> <span class="badge svelte-rym1qk"> </span> <button class="refresh svelte-rym1qk">↻</button></div> <!> <!> <!></div>');
const pl = {
  hash: "svelte-rym1qk",
  code: ".rt-vote.svelte-rym1qk {font-family:system-ui, -apple-system, sans-serif;max-width:720px;margin:0 auto;padding:1.5rem;}.header.svelte-rym1qk {display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;flex-wrap:wrap;}.header.svelte-rym1qk h2:where(.svelte-rym1qk) {margin:0;font-size:1.5rem;}.badge.svelte-rym1qk {background:#e0e7ff;color:#3730a3;padding:0.15rem 0.5rem;border-radius:9999px;font-size:0.75rem;}.refresh.svelte-rym1qk {margin-left:auto;padding:0.25rem 0.5rem;background:#f3f4f6;border:1px solid #d1d5db;border-radius:0.375rem;cursor:pointer;}.tabs.svelte-rym1qk {display:flex;border-bottom:2px solid #e5e7eb;margin-bottom:1rem;}.tabs.svelte-rym1qk button:where(.svelte-rym1qk) {padding:0.5rem 1rem;background:none;border:none;border-bottom:2px solid transparent;margin-bottom:-2px;cursor:pointer;font-size:0.875rem;color:#6b7280;}.tabs.svelte-rym1qk button.active:where(.svelte-rym1qk) {border-bottom-color:#4f46e5;color:#4f46e5;font-weight:500;}.error.svelte-rym1qk {background:#fef2f2;color:#991b1b;border:1px solid #fecaca;padding:0.75rem;border-radius:0.5rem;margin-bottom:1rem;font-size:0.85rem;}.success.svelte-rym1qk {background:#ecfdf5;color:#065f46;border:1px solid #a7f3d0;padding:0.75rem;border-radius:0.5rem;margin-bottom:1rem;font-size:0.85rem;}.empty.svelte-rym1qk {color:#6b7280;text-align:center;padding:2rem;}.list.svelte-rym1qk {display:flex;flex-direction:column;gap:0.5rem;}.card.svelte-rym1qk {background:#fff;border:1px solid #e5e7eb;border-radius:0.75rem;padding:1rem 1.25rem;width:100%;text-align:left;font-family:inherit;}.clickable.svelte-rym1qk {cursor:pointer;}.clickable.svelte-rym1qk:hover {border-color:#a5b4fc;}.card-top.svelte-rym1qk {display:flex;justify-content:space-between;align-items:center;}.card-title.svelte-rym1qk {font-weight:500;font-size:0.9rem;}.status.svelte-rym1qk {font-size:0.75rem;font-weight:600;text-transform:uppercase;}.desc.svelte-rym1qk {margin:0.35rem 0 0;color:#4b5563;font-size:0.8rem;line-height:1.4;}.vote-stats.svelte-rym1qk {display:flex;gap:1rem;margin:0.75rem 0;font-size:0.85rem;}.for.svelte-rym1qk {color:#16a34a;font-weight:500;}.against.svelte-rym1qk {color:#dc2626;font-weight:500;}.vote-actions.svelte-rym1qk {display:flex;gap:0.5rem;margin:0.75rem 0;}.btn-for.svelte-rym1qk {padding:0.4rem 0.8rem;background:#16a34a;color:#fff;border:none;border-radius:0.375rem;cursor:pointer;font-size:0.8rem;}.btn-against.svelte-rym1qk {padding:0.4rem 0.8rem;background:#dc2626;color:#fff;border:none;border-radius:0.375rem;cursor:pointer;font-size:0.8rem;}.btn-abstain.svelte-rym1qk {padding:0.4rem 0.8rem;background:#6b7280;color:#fff;border:none;border-radius:0.375rem;cursor:pointer;font-size:0.8rem;}.back.svelte-rym1qk {background:none;border:none;color:#4f46e5;cursor:pointer;font-size:0.85rem;padding:0;margin-bottom:1rem;}.back.svelte-rym1qk:hover {text-decoration:underline;}label.svelte-rym1qk {display:block;font-size:0.8rem;font-weight:500;color:#374151;margin-bottom:0.75rem;}input.svelte-rym1qk, textarea.svelte-rym1qk {display:block;width:100%;margin-top:0.25rem;padding:0.5rem 0.75rem;border:1px solid #d1d5db;border-radius:0.5rem;font-size:0.85rem;box-sizing:border-box;font-family:inherit;}textarea.mono.svelte-rym1qk {font-family:ui-monospace, monospace;font-size:0.8rem;}.primary.svelte-rym1qk {padding:0.5rem 1.25rem;background:#4f46e5;color:#fff;border:none;border-radius:0.5rem;cursor:pointer;font-size:0.85rem;}.primary.svelte-rym1qk:hover:not(:disabled) {background:#4338ca;}.primary.svelte-rym1qk:disabled {opacity:0.5;cursor:not-allowed;}.code.svelte-rym1qk {background:#f9fafb;border:1px solid #e5e7eb;border-radius:0.5rem;padding:0.75rem;font-size:0.75rem;font-family:ui-monospace, monospace;overflow-x:auto;white-space:pre-wrap;max-height:300px;overflow-y:auto;margin-top:0.75rem;}"
};
function ml(e, t) {
  Rn(t, !0), Ws(e, pl);
  let r = fr(t, "extensionId", 3, "voting"), n = fr(t, "version", 3, "");
  fr(t, "principal", 3, ""), fr(t, "isAuthenticated", 3, !0);
  let i = /* @__PURE__ */ I(kt([])), s = /* @__PURE__ */ I(!0), f = /* @__PURE__ */ I(""), a = /* @__PURE__ */ I("list"), o = /* @__PURE__ */ I(""), u = /* @__PURE__ */ I(""), v = /* @__PURE__ */ I(""), _ = /* @__PURE__ */ I(!1), h = /* @__PURE__ */ I(""), d = /* @__PURE__ */ I(null), c = /* @__PURE__ */ I(!1);
  async function g(w, T = "{}") {
    const H = await t.backend.extension_sync_call(JSON.stringify({ extension_name: r(), function_name: w, args: T }));
    return JSON.parse(H);
  }
  async function y(w, T = "{}") {
    const H = await t.backend.extension_async_call(JSON.stringify({ extension_name: r(), function_name: w, args: T }));
    return JSON.parse(H);
  }
  async function A() {
    q(s, !0), q(f, "");
    try {
      const w = await g("get_proposals", "{}");
      q(i, w?.data ?? (Array.isArray(w) ? w : []), !0);
    } catch (w) {
      q(f, w?.message || String(w), !0);
    } finally {
      q(s, !1);
    }
  }
  async function S(w) {
    q(c, !0), q(f, "");
    try {
      const T = await g("get_proposal", JSON.stringify({ proposal_id: w }));
      q(d, T?.data ?? T, !0);
    } catch (T) {
      q(f, T?.message || String(T), !0);
    } finally {
      q(c, !1);
    }
  }
  async function J(w, T) {
    try {
      await y("cast_vote", JSON.stringify({ proposal_id: w, vote: T })), p(d) ? await S(w) : await A();
    } catch (H) {
      q(f, H?.message || String(H), !0);
    }
  }
  async function ae() {
    if (p(o).trim()) {
      q(_, !0), q(h, ""), q(f, "");
      try {
        await y("submit_proposal", JSON.stringify({
          title: p(o),
          description: p(u),
          code: p(v) || void 0
        })), q(h, "Proposal submitted successfully!"), q(o, ""), q(u, ""), q(v, ""), await A();
      } catch (w) {
        q(f, w?.message || String(w), !0);
      } finally {
        q(_, !1);
      }
    }
  }
  function Pe() {
    q(d, null);
  }
  Es(() => {
    A();
  });
  function ye(w) {
    if (!w) return "#6b7280";
    const T = w.toLowerCase();
    return T.includes("active") || T.includes("open") ? "#059669" : T.includes("passed") || T.includes("approved") || T.includes("executed") ? "#16a34a" : T.includes("rejected") || T.includes("failed") ? "#dc2626" : "#6b7280";
  }
  var Be = _l(), Z = N(Be), oe = M(N(Z), 2), qr = N(oe), rr = M(oe, 2), un = M(Z, 2);
  {
    var _i = (w) => {
      var T = $s(), H = N(T);
      $(() => K(H, p(f))), V(w, T);
    };
    fe(un, (w) => {
      p(f) && w(_i);
    });
  }
  var cn = M(un, 2);
  {
    var pi = (w) => {
      var T = el(), H = N(T);
      $(() => K(H, p(h))), V(w, T);
    };
    fe(cn, (w) => {
      p(h) && w(pi);
    });
  }
  var mi = M(cn, 2);
  {
    var gi = (w) => {
      var T = ll(), H = Dr(T), mt = M(H, 2), Dt = N(mt), Sr = N(Dt), zt = M(Dt, 2);
      {
        var nr = (P) => {
          var O = tl(), D = N(O);
          $(
            (G) => {
              Sn(O, `color:${G ?? ""}`), K(D, p(d).status);
            },
            [() => ye(p(d).status)]
          ), V(P, O);
        };
        fe(zt, (P) => {
          p(d).status && P(nr);
        });
      }
      var ir = M(zt, 2);
      {
        var Tr = (P) => {
          var O = rl(), D = N(O);
          $(() => K(D, p(d).description)), V(P, O);
        };
        fe(ir, (P) => {
          p(d).description && P(Tr);
        });
      }
      var sr = M(ir, 2);
      {
        var He = (P) => {
          var O = il(), D = N(O), G = N(D), Lt = M(D, 2), lr = N(Lt), Ar = M(Lt, 2);
          {
            var Nr = (Vt) => {
              var ar = nl(), Cr = N(ar);
              $(() => K(Cr, `Abstain: ${p(d).votes_abstain ?? ""}`)), V(Vt, ar);
            };
            fe(Ar, (Vt) => {
              p(d).votes_abstain !== void 0 && Vt(Nr);
            });
          }
          $(() => {
            K(G, `For: ${p(d).votes_for ?? 0 ?? ""}`), K(lr, `Against: ${p(d).votes_against ?? 0 ?? ""}`);
          }), V(P, O);
        };
        fe(sr, (P) => {
          (p(d).votes_for !== void 0 || p(d).votes_against !== void 0) && P(He);
        });
      }
      var Ue = M(sr, 2), $e = N(Ue), gt = M($e, 2), bt = M(gt, 2), It = M(Ue, 2);
      {
        var Q = (P) => {
          var O = sl(), D = N(O);
          $(() => K(D, p(d).code)), V(P, O);
        };
        fe(It, (P) => {
          p(d).code && P(Q);
        });
      }
      $(() => K(Sr, p(d).title || p(d).id)), Re("click", H, Pe), Re("click", $e, () => J(p(d).id, "for")), Re("click", gt, () => J(p(d).id, "against")), Re("click", bt, () => J(p(d).id, "abstain")), V(w, T);
    }, bi = (w) => {
      var T = hl(), H = Dr(T), mt = N(H);
      let Dt;
      var Sr = N(mt), zt = M(mt, 2);
      let nr;
      var ir = M(H, 2);
      {
        var Tr = (He) => {
          var Ue = Vs(), $e = Dr(Ue);
          {
            var gt = (Q) => {
              var P = al();
              V(Q, P);
            }, bt = (Q) => {
              var P = ol();
              V(Q, P);
            }, It = (Q) => {
              var P = dl();
              Js(P, 21, () => p(i), (O) => O.id || O.title, (O, D) => {
                var G = cl(), Lt = N(G), lr = N(Lt), Ar = N(lr), Nr = M(lr, 2);
                {
                  var Vt = (et) => {
                    var yt = fl(), Mr = N(yt);
                    $(
                      (Pr) => {
                        Sn(yt, `color:${Pr ?? ""}`), K(Mr, p(D).status);
                      },
                      [() => ye(p(D).status)]
                    ), V(et, yt);
                  };
                  fe(Nr, (et) => {
                    p(D).status && et(Vt);
                  });
                }
                var ar = M(Lt, 2);
                {
                  var Cr = (et) => {
                    var yt = ul(), Mr = N(yt);
                    $((Pr) => K(Mr, `${Pr ?? ""}${p(D).description.length > 120 ? "…" : ""}`), [() => p(D).description.slice(0, 120)]), V(et, yt);
                  };
                  fe(ar, (et) => {
                    p(D).description && et(Cr);
                  });
                }
                $(() => K(Ar, p(D).title || p(D).id)), Re("click", G, () => S(p(D).id)), V(O, G);
              }), V(Q, P);
            };
            fe($e, (Q) => {
              p(s) ? Q(gt) : p(i).length === 0 ? Q(bt, 1) : Q(It, -1);
            });
          }
          V(He, Ue);
        }, sr = (He) => {
          var Ue = vl(), $e = N(Ue), gt = M(N($e)), bt = M($e, 2), It = M(N(bt)), Q = M(bt, 2), P = M(N(Q)), O = M(Q, 2), D = N(O);
          $(
            (G) => {
              O.disabled = G, K(D, p(_) ? "Submitting…" : "Submit Proposal");
            },
            [() => p(_) || !p(o).trim()]
          ), zr(gt, () => p(o), (G) => q(o, G)), zr(It, () => p(u), (G) => q(u, G)), zr(P, () => p(v), (G) => q(v, G)), Re("click", O, ae), V(He, Ue);
        };
        fe(ir, (He) => {
          p(a) === "list" ? He(Tr) : He(sr, -1);
        });
      }
      $(() => {
        Dt = qn(mt, 1, "svelte-rym1qk", null, Dt, { active: p(a) === "list" }), K(Sr, `Proposals (${p(i).length ?? ""})`), nr = qn(zt, 1, "svelte-rym1qk", null, nr, { active: p(a) === "create" });
      }), Re("click", mt, () => q(a, "list")), Re("click", zt, () => q(a, "create")), V(w, T);
    };
    fe(mi, (w) => {
      p(d) ? w(gi) : w(bi, -1);
    });
  }
  $(() => {
    K(qr, `v${n() ?? ""}`), rr.disabled = p(s);
  }), Re("click", rr, A), V(e, Be), On();
}
Ds(["click"]);
function yl(e, t) {
  const r = js(ml, { target: e, props: t });
  return {
    unmount() {
      try {
        Hs(r);
      } catch {
      }
    }
  };
}
export {
  yl as default
};
