var ia = Object.defineProperty;
var Pn = (e) => {
  throw TypeError(e);
};
var aa = (e, t, r) => t in e ? ia(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Se = (e, t, r) => aa(e, typeof t != "symbol" ? t + "" : t, r), Kr = (e, t, r) => t.has(e) || Pn("Cannot " + r);
var s = (e, t, r) => (Kr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), w = (e, t, r) => t.has(e) ? Pn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), C = (e, t, r, n) => (Kr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), F = (e, t, r) => (Kr(e, t, "access private method"), r);
var $n = Array.isArray, sa = Array.prototype.indexOf, Ot = Array.prototype.includes, Nr = Array.from, la = Object.defineProperty, Xt = Object.getOwnPropertyDescriptor, oa = Object.prototype, fa = Array.prototype, ua = Object.getPrototypeOf, zn = Object.isExtensible;
const da = () => {
};
function ca(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Jn() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const X = 2, er = 4, jr = 8, Xn = 1 << 24, Le = 16, Re = 32, ot = 64, tn = 128, ge = 512, q = 1024, J = 2048, Ve = 4096, ee = 8192, be = 16384, Mt = 32768, In = 1 << 25, qt = 65536, rn = 1 << 17, va = 1 << 18, Yt = 1 << 19, ha = 1 << 20, Je = 1 << 25, St = 65536, Tr = 1 << 21, tr = 1 << 22, lt = 1 << 23, Wr = Symbol("$state"), Ye = new class extends Error {
  constructor() {
    super(...arguments);
    Se(this, "name", "StaleReactionError");
    Se(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function _a() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function pa(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function ga(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ba() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ma(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function xa() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ya() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function wa() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ka() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ea() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Ca = 1, Sa = 2, Ta = 16, Aa = 1, Ma = 2, Y = Symbol(), Da = "http://www.w3.org/1999/xhtml";
function Ra() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Na() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Zn(e) {
  return e === this.v;
}
function ja(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Qn(e) {
  return !ja(e, this.v);
}
let xe = null;
function Bt(e) {
  xe = e;
}
function ei(e, t = !1, r) {
  xe = {
    p: xe,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      A
    ),
    l: null
  };
}
function ti(e) {
  var t = (
    /** @type {ComponentContext} */
    xe
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      xi(n);
  }
  return t.i = !0, xe = t.p, /** @type {T} */
  {};
}
function ri() {
  return !0;
}
let _t = [];
function ni() {
  var e = _t;
  _t = [], ca(e);
}
function Ft(e) {
  if (_t.length === 0 && !Zt) {
    var t = _t;
    queueMicrotask(() => {
      t === _t && ni();
    });
  }
  _t.push(e);
}
function Fa() {
  for (; _t.length > 0; )
    ni();
}
function ii(e) {
  var t = A;
  if (t === null)
    return T.f |= lt, e;
  if ((t.f & Mt) === 0 && (t.f & er) === 0)
    throw e;
  at(e, t);
}
function at(e, t) {
  for (; t !== null; ) {
    if ((t.f & tn) !== 0) {
      if ((t.f & Mt) === 0)
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
const Pa = -7169;
function I(e, t) {
  e.f = e.f & Pa | t;
}
function hn(e) {
  (e.f & ge) !== 0 || e.deps === null ? I(e, q) : I(e, Ve);
}
function ai(e) {
  if (e !== null)
    for (const t of e)
      (t.f & X) === 0 || (t.f & St) === 0 || (t.f ^= St, ai(
        /** @type {Derived} */
        t.deps
      ));
}
function si(e, t, r) {
  (e.f & J) !== 0 ? t.add(e) : (e.f & Ve) !== 0 && r.add(e), ai(e.deps), I(e, q);
}
const ht = /* @__PURE__ */ new Set();
let E = null, Me = null, nn = null, Zt = !1, $r = !1, Nt = null, xr = null;
var Ln = 0;
let za = 1;
var Pt, zt, bt, Ge, Pe, ir, se, ar, nt, Ke, ze, It, Lt, mt, L, yr, li, wr, an, kr, Ia;
const Mr = class Mr {
  constructor() {
    w(this, L);
    Se(this, "id", za++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Se(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Se(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    w(this, Pt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    w(this, zt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    w(this, bt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    w(this, Ge, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    w(this, Pe, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    w(this, ir, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    w(this, se, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    w(this, ar, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    w(this, nt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    w(this, Ke, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    w(this, ze, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    w(this, It, /* @__PURE__ */ new Set());
    Se(this, "is_fork", !1);
    w(this, Lt, !1);
    /** @type {Set<Batch>} */
    w(this, mt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    s(this, ze).has(t) || s(this, ze).set(t, { d: [], m: [] }), s(this, It).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = s(this, ze).get(t);
    if (n) {
      s(this, ze).delete(t);
      for (var i of n.d)
        I(i, J), r(i);
      for (i of n.m)
        I(i, Ve), r(i);
    }
    s(this, It).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== Y && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & lt) === 0 && (this.current.set(t, [r, n]), Me?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    E = this;
  }
  deactivate() {
    E = null, Me = null;
  }
  flush() {
    try {
      $r = !0, E = this, F(this, L, wr).call(this);
    } finally {
      Ln = 0, nn = null, Nt = null, xr = null, $r = !1, E = null, Me = null, kt.clear();
    }
  }
  discard() {
    for (const t of s(this, zt)) t(this);
    s(this, zt).clear(), s(this, bt).clear(), ht.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    s(this, ar).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = s(this, Ge).get(r) ?? 0;
    if (s(this, Ge).set(r, n + 1), t) {
      let i = s(this, Pe).get(r) ?? 0;
      s(this, Pe).set(r, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let i = s(this, Ge).get(r) ?? 0;
    if (i === 1 ? s(this, Ge).delete(r) : s(this, Ge).set(r, i - 1), t) {
      let a = s(this, Pe).get(r) ?? 0;
      a === 1 ? s(this, Pe).delete(r) : s(this, Pe).set(r, a - 1);
    }
    s(this, Lt) || n || (C(this, Lt, !0), Ft(() => {
      C(this, Lt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      s(this, nt).add(n);
    for (const n of r)
      s(this, Ke).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    s(this, Pt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    s(this, zt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    s(this, bt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of s(this, bt)) t(this);
    s(this, bt).clear();
  }
  settled() {
    return (s(this, ir) ?? C(this, ir, Jn())).promise;
  }
  static ensure() {
    if (E === null) {
      const t = E = new Mr();
      $r || (ht.add(E), Zt || Ft(() => {
        E === t && t.flush();
      }));
    }
    return E;
  }
  apply() {
    {
      Me = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (nn = t, t.b?.is_pending && (t.f & (er | jr | Xn)) !== 0 && (t.f & Mt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Nt !== null && r === A && (T === null || (T.f & X) === 0))
        return;
      if ((n & (ot | Re)) !== 0) {
        if ((n & q) === 0)
          return;
        r.f ^= q;
      }
    }
    s(this, se).push(r);
  }
};
Pt = new WeakMap(), zt = new WeakMap(), bt = new WeakMap(), Ge = new WeakMap(), Pe = new WeakMap(), ir = new WeakMap(), se = new WeakMap(), ar = new WeakMap(), nt = new WeakMap(), Ke = new WeakMap(), ze = new WeakMap(), It = new WeakMap(), Lt = new WeakMap(), mt = new WeakMap(), L = new WeakSet(), yr = function() {
  return this.is_fork || s(this, Pe).size > 0;
}, li = function() {
  for (const n of s(this, mt))
    for (const i of s(n, Pe).keys()) {
      for (var t = !1, r = i; r.parent !== null; ) {
        if (s(this, ze).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, wr = function() {
  var o;
  if (Ln++ > 1e3 && (ht.delete(this), Va()), !F(this, L, yr).call(this)) {
    for (const l of s(this, nt))
      s(this, Ke).delete(l), I(l, J), this.schedule(l);
    for (const l of s(this, Ke))
      I(l, Ve), this.schedule(l);
  }
  const t = s(this, se);
  C(this, se, []), this.apply();
  var r = Nt = [], n = [], i = xr = [];
  for (const l of t)
    try {
      F(this, L, an).call(this, l, r, n);
    } catch (f) {
      throw ui(l), f;
    }
  if (E = null, i.length > 0) {
    var a = Mr.ensure();
    for (const l of i)
      a.schedule(l);
  }
  if (Nt = null, xr = null, F(this, L, yr).call(this) || F(this, L, li).call(this)) {
    F(this, L, kr).call(this, n), F(this, L, kr).call(this, r);
    for (const [l, f] of s(this, ze))
      fi(l, f);
  } else {
    s(this, Ge).size === 0 && ht.delete(this), s(this, nt).clear(), s(this, Ke).clear();
    for (const l of s(this, Pt)) l(this);
    s(this, Pt).clear(), Vn(n), Vn(r), s(this, ir)?.resolve();
  }
  var u = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    E
  );
  if (s(this, se).length > 0) {
    const l = u ?? (u = this);
    s(l, se).push(...s(this, se).filter((f) => !s(l, se).includes(f)));
  }
  u !== null && (ht.add(u), F(o = u, L, wr).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
an = function(t, r, n) {
  t.f ^= q;
  for (var i = t.first; i !== null; ) {
    var a = i.f, u = (a & (Re | ot)) !== 0, o = u && (a & q) !== 0, l = o || (a & ee) !== 0 || s(this, ze).has(i);
    if (!l && i.fn !== null) {
      u ? i.f ^= q : (a & er) !== 0 ? r.push(i) : dr(i) && ((a & Le) !== 0 && s(this, Ke).add(i), Ut(i));
      var f = i.first;
      if (f !== null) {
        i = f;
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
kr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    si(t[r], s(this, nt), s(this, Ke));
}, Ia = function() {
  var v, g, p;
  for (const h of ht) {
    var t = h.id < this.id, r = [];
    for (const [d, [k, y]] of this.current) {
      if (h.current.has(d)) {
        var n = (
          /** @type {[any, boolean]} */
          h.current.get(d)[0]
        );
        if (t && k !== n)
          h.current.set(d, [k, y]);
        else
          continue;
      }
      r.push(d);
    }
    var i = [...h.current.keys()].filter((d) => !this.current.has(d));
    if (i.length === 0)
      t && h.discard();
    else if (r.length > 0) {
      if (t)
        for (const d of s(this, It))
          h.unskip_effect(d, (k) => {
            var y;
            (k.f & (Le | tr)) !== 0 ? h.schedule(k) : F(y = h, L, kr).call(y, [k]);
          });
      h.activate();
      var a = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
      for (var o of r)
        oi(o, i, a, u);
      u = /* @__PURE__ */ new Map();
      var l = [...h.current.keys()].filter(
        (d) => this.current.has(d) ? (
          /** @type {[any, boolean]} */
          this.current.get(d)[0] !== d
        ) : !0
      );
      for (const d of s(this, ar))
        (d.f & (be | ee | rn)) === 0 && _n(d, l, u) && ((d.f & (tr | Le)) !== 0 ? (I(d, J), h.schedule(d)) : s(h, nt).add(d));
      if (s(h, se).length > 0) {
        h.apply();
        for (var f of s(h, se))
          F(v = h, L, an).call(v, f, [], []);
        C(h, se, []);
      }
      h.deactivate();
    }
  }
  for (const h of ht)
    s(h, mt).has(this) && (s(h, mt).delete(this), s(h, mt).size === 0 && !F(g = h, L, yr).call(g) && (h.activate(), F(p = h, L, wr).call(p)));
};
let Tt = Mr;
function La(e) {
  var t = Zt;
  Zt = !0;
  try {
    for (var r; ; ) {
      if (Fa(), E === null)
        return (
          /** @type {T} */
          r
        );
      E.flush();
    }
  } finally {
    Zt = t;
  }
}
function Va() {
  try {
    xa();
  } catch (e) {
    at(e, nn);
  }
}
let Ue = null;
function Vn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (be | ee)) === 0 && dr(n) && (Ue = /* @__PURE__ */ new Set(), Ut(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && ki(n), Ue?.size > 0)) {
        kt.clear();
        for (const i of Ue) {
          if ((i.f & (be | ee)) !== 0) continue;
          const a = [i];
          let u = i.parent;
          for (; u !== null; )
            Ue.has(u) && (Ue.delete(u), a.push(u)), u = u.parent;
          for (let o = a.length - 1; o >= 0; o--) {
            const l = a[o];
            (l.f & (be | ee)) === 0 && Ut(l);
          }
        }
        Ue.clear();
      }
    }
    Ue = null;
  }
}
function oi(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const a = i.f;
      (a & X) !== 0 ? oi(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (a & (tr | Le)) !== 0 && (a & J) === 0 && _n(i, t, n) && (I(i, J), pn(
        /** @type {Effect} */
        i
      ));
    }
}
function _n(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Ot.call(t, i))
        return !0;
      if ((i.f & X) !== 0 && _n(
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
function pn(e) {
  E.schedule(e);
}
function fi(e, t) {
  if (!((e.f & Re) !== 0 && (e.f & q) !== 0)) {
    (e.f & J) !== 0 ? t.d.push(e) : (e.f & Ve) !== 0 && t.m.push(e), I(e, q);
    for (var r = e.first; r !== null; )
      fi(r, t), r = r.next;
  }
}
function ui(e) {
  I(e, q);
  for (var t = e.first; t !== null; )
    ui(t), t = t.next;
}
function Oa(e) {
  let t = 0, r = At(0), n;
  return () => {
    xn() && (c(r), yi(() => (t === 0 && (n = ji(() => e(() => Qt(r)))), t += 1, () => {
      Ft(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Qt(r));
      });
    })));
  };
}
var qa = qt | Yt;
function Ba(e, t, r, n) {
  new Ha(e, t, r, n);
}
var ve, vn, he, xt, re, _e, Q, le, We, yt, it, Vt, sr, lr, $e, Dr, z, Ua, Ya, Ga, sn, Er, Cr, ln, on;
class Ha {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    w(this, z);
    /** @type {Boundary | null} */
    Se(this, "parent");
    Se(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Se(this, "transform_error");
    /** @type {TemplateNode} */
    w(this, ve);
    /** @type {TemplateNode | null} */
    w(this, vn, null);
    /** @type {BoundaryProps} */
    w(this, he);
    /** @type {((anchor: Node) => void)} */
    w(this, xt);
    /** @type {Effect} */
    w(this, re);
    /** @type {Effect | null} */
    w(this, _e, null);
    /** @type {Effect | null} */
    w(this, Q, null);
    /** @type {Effect | null} */
    w(this, le, null);
    /** @type {DocumentFragment | null} */
    w(this, We, null);
    w(this, yt, 0);
    w(this, it, 0);
    w(this, Vt, !1);
    /** @type {Set<Effect>} */
    w(this, sr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    w(this, lr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    w(this, $e, null);
    w(this, Dr, Oa(() => (C(this, $e, At(s(this, yt))), () => {
      C(this, $e, null);
    })));
    C(this, ve, t), C(this, he, r), C(this, xt, (a) => {
      var u = (
        /** @type {Effect} */
        A
      );
      u.b = this, u.f |= tn, n(a);
    }), this.parent = /** @type {Effect} */
    A.b, this.transform_error = i ?? this.parent?.transform_error ?? ((a) => a), C(this, re, yn(() => {
      F(this, z, sn).call(this);
    }, qa));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    si(t, s(this, sr), s(this, lr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!s(this, he).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    F(this, z, ln).call(this, t, r), C(this, yt, s(this, yt) + t), !(!s(this, $e) || s(this, Vt)) && (C(this, Vt, !0), Ft(() => {
      C(this, Vt, !1), s(this, $e) && Ht(s(this, $e), s(this, yt));
    }));
  }
  get_effect_pending() {
    return s(this, Dr).call(this), c(
      /** @type {Source<number>} */
      s(this, $e)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!s(this, he).onerror && !s(this, he).failed)
      throw t;
    E?.is_fork ? (s(this, _e) && E.skip_effect(s(this, _e)), s(this, Q) && E.skip_effect(s(this, Q)), s(this, le) && E.skip_effect(s(this, le)), E.on_fork_commit(() => {
      F(this, z, on).call(this, t);
    })) : F(this, z, on).call(this, t);
  }
}
ve = new WeakMap(), vn = new WeakMap(), he = new WeakMap(), xt = new WeakMap(), re = new WeakMap(), _e = new WeakMap(), Q = new WeakMap(), le = new WeakMap(), We = new WeakMap(), yt = new WeakMap(), it = new WeakMap(), Vt = new WeakMap(), sr = new WeakMap(), lr = new WeakMap(), $e = new WeakMap(), Dr = new WeakMap(), z = new WeakSet(), Ua = function() {
  try {
    C(this, _e, pe(() => s(this, xt).call(this, s(this, ve))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Ya = function(t) {
  const r = s(this, he).failed;
  r && C(this, le, pe(() => {
    r(
      s(this, ve),
      () => t,
      () => () => {
      }
    );
  }));
}, Ga = function() {
  const t = s(this, he).pending;
  t && (this.is_pending = !0, C(this, Q, pe(() => t(s(this, ve)))), Ft(() => {
    var r = C(this, We, document.createDocumentFragment()), n = Xe();
    r.append(n), C(this, _e, F(this, z, Cr).call(this, () => pe(() => s(this, xt).call(this, n)))), s(this, it) === 0 && (s(this, ve).before(r), C(this, We, null), Et(
      /** @type {Effect} */
      s(this, Q),
      () => {
        C(this, Q, null);
      }
    ), F(this, z, Er).call(
      this,
      /** @type {Batch} */
      E
    ));
  }));
}, sn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), C(this, it, 0), C(this, yt, 0), C(this, _e, pe(() => {
      s(this, xt).call(this, s(this, ve));
    })), s(this, it) > 0) {
      var t = C(this, We, document.createDocumentFragment());
      En(s(this, _e), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        s(this, he).pending
      );
      C(this, Q, pe(() => r(s(this, ve))));
    } else
      F(this, z, Er).call(
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
Er = function(t) {
  this.is_pending = !1, t.transfer_effects(s(this, sr), s(this, lr));
}, /**
 * @template T
 * @param {() => T} fn
 */
Cr = function(t) {
  var r = A, n = T, i = xe;
  Oe(s(this, re)), ye(s(this, re)), Bt(s(this, re).ctx);
  try {
    return Tt.ensure(), t();
  } catch (a) {
    return ii(a), null;
  } finally {
    Oe(r), ye(n), Bt(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
ln = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && F(n = this.parent, z, ln).call(n, t, r);
    return;
  }
  C(this, it, s(this, it) + t), s(this, it) === 0 && (F(this, z, Er).call(this, r), s(this, Q) && Et(s(this, Q), () => {
    C(this, Q, null);
  }), s(this, We) && (s(this, ve).before(s(this, We)), C(this, We, null)));
}, /**
 * @param {unknown} error
 */
on = function(t) {
  s(this, _e) && (ie(s(this, _e)), C(this, _e, null)), s(this, Q) && (ie(s(this, Q)), C(this, Q, null)), s(this, le) && (ie(s(this, le)), C(this, le, null));
  var r = s(this, he).onerror;
  let n = s(this, he).failed;
  var i = !1, a = !1;
  const u = () => {
    if (i) {
      Na();
      return;
    }
    i = !0, a && Ea(), s(this, le) !== null && Et(s(this, le), () => {
      C(this, le, null);
    }), F(this, z, Cr).call(this, () => {
      F(this, z, sn).call(this);
    });
  }, o = (l) => {
    try {
      a = !0, r?.(l, u), a = !1;
    } catch (f) {
      at(f, s(this, re) && s(this, re).parent);
    }
    n && C(this, le, F(this, z, Cr).call(this, () => {
      try {
        return pe(() => {
          var f = (
            /** @type {Effect} */
            A
          );
          f.b = this, f.f |= tn, n(
            s(this, ve),
            () => l,
            () => u
          );
        });
      } catch (f) {
        return at(
          f,
          /** @type {Effect} */
          s(this, re).parent
        ), null;
      }
    }));
  };
  Ft(() => {
    var l;
    try {
      l = this.transform_error(t);
    } catch (f) {
      at(f, s(this, re) && s(this, re).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      o,
      /** @param {unknown} e */
      (f) => at(f, s(this, re) && s(this, re).parent)
    ) : o(l);
  });
};
function Ka(e, t, r, n) {
  const i = gn;
  var a = e.filter((p) => !p.settled);
  if (r.length === 0 && a.length === 0) {
    n(t.map(i));
    return;
  }
  var u = (
    /** @type {Effect} */
    A
  ), o = Wa(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((p) => p.promise)) : null;
  function f(p) {
    o();
    try {
      n(p);
    } catch (h) {
      (u.f & be) === 0 && at(h, u);
    }
    Ar();
  }
  if (r.length === 0) {
    l.then(() => f(t.map(i)));
    return;
  }
  var v = di();
  function g() {
    Promise.all(r.map((p) => /* @__PURE__ */ $a(p))).then((p) => f([...t.map(i), ...p])).catch((p) => at(p, u)).finally(() => v());
  }
  l ? l.then(() => {
    o(), g(), Ar();
  }) : g();
}
function Wa() {
  var e = (
    /** @type {Effect} */
    A
  ), t = T, r = xe, n = (
    /** @type {Batch} */
    E
  );
  return function(a = !0) {
    Oe(e), ye(t), Bt(r), a && (e.f & be) === 0 && (n?.activate(), n?.apply());
  };
}
function Ar(e = !0) {
  Oe(null), ye(null), Bt(null), e && E?.deactivate();
}
function di() {
  var e = (
    /** @type {Effect} */
    A
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
function gn(e) {
  var t = X | J;
  return A !== null && (A.f |= Yt), {
    ctx: xe,
    deps: null,
    effects: null,
    equals: Zn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Y
    ),
    wv: 0,
    parent: A,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function $a(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    A
  );
  n === null && _a();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = At(
    /** @type {V} */
    Y
  ), u = !T, o = /* @__PURE__ */ new Map();
  return us(() => {
    var l = (
      /** @type {Effect} */
      A
    ), f = Jn();
    i = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).finally(Ar);
    } catch (h) {
      f.reject(h), Ar();
    }
    var v = (
      /** @type {Batch} */
      E
    );
    if (u) {
      if ((l.f & Mt) !== 0)
        var g = di();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        o.get(v)?.reject(Ye), o.delete(v);
      else {
        for (const h of o.values())
          h.reject(Ye);
        o.clear();
      }
      o.set(v, f);
    }
    const p = (h, d = void 0) => {
      if (g) {
        var k = d === Ye;
        g(k);
      }
      if (!(d === Ye || (l.f & be) !== 0)) {
        if (v.activate(), d)
          a.f |= lt, Ht(a, d);
        else {
          (a.f & lt) !== 0 && (a.f ^= lt), Ht(a, h);
          for (const [y, M] of o) {
            if (o.delete(y), y === v) break;
            M.reject(Ye);
          }
        }
        v.deactivate();
      }
    };
    f.promise.then(p, (h) => p(null, h || "unknown"));
  }), os(() => {
    for (const l of o.values())
      l.reject(Ye);
  }), new Promise((l) => {
    function f(v) {
      function g() {
        v === i ? l(a) : f(i);
      }
      v.then(g, g);
    }
    f(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Jr(e) {
  const t = /* @__PURE__ */ gn(e);
  return Si(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ja(e) {
  const t = /* @__PURE__ */ gn(e);
  return t.equals = Qn, t;
}
function Xa(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      ie(
        /** @type {Effect} */
        t[r]
      );
  }
}
function bn(e) {
  var t, r = A, n = e.parent;
  if (!ft && n !== null && (n.f & (be | ee)) !== 0)
    return Ra(), e.v;
  Oe(n);
  try {
    e.f &= ~St, Xa(e), t = Di(e);
  } finally {
    Oe(r);
  }
  return t;
}
function ci(e) {
  var t = bn(e);
  if (!e.equals(t) && (e.wv = Ai(), (!E?.is_fork || e.deps === null) && (E !== null ? E.capture(e, t, !0) : e.v = t, e.deps === null))) {
    I(e, q);
    return;
  }
  ft || (Me !== null ? (xn() || E?.is_fork) && Me.set(e, t) : hn(e));
}
function Za(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Ye), t.teardown = da, t.ac = null, rr(t, 0), wn(t));
}
function vi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Ut(t);
}
let fn = /* @__PURE__ */ new Set();
const kt = /* @__PURE__ */ new Map();
let hi = !1;
function At(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Zn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function N(e, t) {
  const r = At(e);
  return Si(r), r;
}
// @__NO_SIDE_EFFECTS__
function Qa(e, t = !1, r = !0) {
  const n = At(e);
  return t || (n.equals = Qn), n;
}
function x(e, t, r = !1) {
  T !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!De || (T.f & rn) !== 0) && ri() && (T.f & (X | Le | tr | rn)) !== 0 && (me === null || !Ot.call(me, e)) && ka();
  let n = r ? jt(t) : t;
  return Ht(e, n, xr);
}
function Ht(e, t, r = null) {
  if (!e.equals(t)) {
    kt.set(e, ft ? t : e.v);
    var n = Tt.ensure();
    if (n.capture(e, t), (e.f & X) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & J) !== 0 && bn(i), Me === null && hn(i);
    }
    e.wv = Ai(), _i(e, J, r), A !== null && (A.f & q) !== 0 && (A.f & (Re | ot)) === 0 && (ce === null ? vs([e]) : ce.push(e)), !n.is_fork && fn.size > 0 && !hi && es();
  }
  return t;
}
function es() {
  hi = !1;
  for (const e of fn)
    (e.f & q) !== 0 && I(e, Ve), dr(e) && Ut(e);
  fn.clear();
}
function Qt(e) {
  x(e, e.v + 1);
}
function _i(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, a = 0; a < i; a++) {
      var u = n[a], o = u.f, l = (o & J) === 0;
      if (l && I(u, t), (o & X) !== 0) {
        var f = (
          /** @type {Derived} */
          u
        );
        Me?.delete(f), (o & St) === 0 && (o & ge && (A === null || (A.f & Tr) === 0) && (u.f |= St), _i(f, Ve, r));
      } else if (l) {
        var v = (
          /** @type {Effect} */
          u
        );
        (o & Le) !== 0 && Ue !== null && Ue.add(v), r !== null ? r.push(v) : pn(v);
      }
    }
}
function jt(e) {
  if (typeof e != "object" || e === null || Wr in e)
    return e;
  const t = ua(e);
  if (t !== oa && t !== fa)
    return e;
  var r = /* @__PURE__ */ new Map(), n = $n(e), i = /* @__PURE__ */ N(0), a = Ct, u = (o) => {
    if (Ct === a)
      return o();
    var l = T, f = Ct;
    ye(null), Un(a);
    var v = o();
    return ye(l), Un(f), v;
  };
  return n && r.set("length", /* @__PURE__ */ N(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && ya();
        var v = r.get(l);
        return v === void 0 ? u(() => {
          var g = /* @__PURE__ */ N(f.value);
          return r.set(l, g), g;
        }) : x(v, f.value, !0), !0;
      },
      deleteProperty(o, l) {
        var f = r.get(l);
        if (f === void 0) {
          if (l in o) {
            const v = u(() => /* @__PURE__ */ N(Y));
            r.set(l, v), Qt(i);
          }
        } else
          x(f, Y), Qt(i);
        return !0;
      },
      get(o, l, f) {
        if (l === Wr)
          return e;
        var v = r.get(l), g = l in o;
        if (v === void 0 && (!g || Xt(o, l)?.writable) && (v = u(() => {
          var h = jt(g ? o[l] : Y), d = /* @__PURE__ */ N(h);
          return d;
        }), r.set(l, v)), v !== void 0) {
          var p = c(v);
          return p === Y ? void 0 : p;
        }
        return Reflect.get(o, l, f);
      },
      getOwnPropertyDescriptor(o, l) {
        var f = Reflect.getOwnPropertyDescriptor(o, l);
        if (f && "value" in f) {
          var v = r.get(l);
          v && (f.value = c(v));
        } else if (f === void 0) {
          var g = r.get(l), p = g?.v;
          if (g !== void 0 && p !== Y)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return f;
      },
      has(o, l) {
        if (l === Wr)
          return !0;
        var f = r.get(l), v = f !== void 0 && f.v !== Y || Reflect.has(o, l);
        if (f !== void 0 || A !== null && (!v || Xt(o, l)?.writable)) {
          f === void 0 && (f = u(() => {
            var p = v ? jt(o[l]) : Y, h = /* @__PURE__ */ N(p);
            return h;
          }), r.set(l, f));
          var g = c(f);
          if (g === Y)
            return !1;
        }
        return v;
      },
      set(o, l, f, v) {
        var g = r.get(l), p = l in o;
        if (n && l === "length")
          for (var h = f; h < /** @type {Source<number>} */
          g.v; h += 1) {
            var d = r.get(h + "");
            d !== void 0 ? x(d, Y) : h in o && (d = u(() => /* @__PURE__ */ N(Y)), r.set(h + "", d));
          }
        if (g === void 0)
          (!p || Xt(o, l)?.writable) && (g = u(() => /* @__PURE__ */ N(void 0)), x(g, jt(f)), r.set(l, g));
        else {
          p = g.v !== Y;
          var k = u(() => jt(f));
          x(g, k);
        }
        var y = Reflect.getOwnPropertyDescriptor(o, l);
        if (y?.set && y.set.call(v, f), !p) {
          if (n && typeof l == "string") {
            var M = (
              /** @type {Source<number>} */
              r.get("length")
            ), S = Number(l);
            Number.isInteger(S) && S >= M.v && x(M, S + 1);
          }
          Qt(i);
        }
        return !0;
      },
      ownKeys(o) {
        c(i);
        var l = Reflect.ownKeys(o).filter((g) => {
          var p = r.get(g);
          return p === void 0 || p.v !== Y;
        });
        for (var [f, v] of r)
          v.v !== Y && !(f in o) && l.push(f);
        return l;
      },
      setPrototypeOf() {
        wa();
      }
    }
  );
}
var On, pi, gi, bi;
function ts() {
  if (On === void 0) {
    On = window, pi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    gi = Xt(t, "firstChild").get, bi = Xt(t, "nextSibling").get, zn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), zn(r) && (r.__t = void 0);
  }
}
function Xe(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function st(e) {
  return (
    /** @type {TemplateNode | null} */
    gi.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function ur(e) {
  return (
    /** @type {TemplateNode | null} */
    bi.call(e)
  );
}
function b(e, t) {
  return /* @__PURE__ */ st(e);
}
function Xr(e, t = !1) {
  {
    var r = /* @__PURE__ */ st(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ ur(r) : r;
  }
}
function m(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ ur(n);
  return n;
}
function rs(e) {
  e.textContent = "";
}
function mi() {
  return !1;
}
function ns(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Da, e, void 0)
  );
}
let qn = !1;
function is() {
  qn || (qn = !0, document.addEventListener(
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
function mn(e) {
  var t = T, r = A;
  ye(null), Oe(null);
  try {
    return e();
  } finally {
    ye(t), Oe(r);
  }
}
function as(e, t, r, n = r) {
  e.addEventListener(t, () => mn(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), is();
}
function ss(e) {
  A === null && (T === null && ma(), ba()), ft && ga();
}
function ls(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ut(e, t) {
  var r = A;
  r !== null && (r.f & ee) !== 0 && (e |= ee);
  var n = {
    ctx: xe,
    deps: null,
    nodes: null,
    f: e | J | ge,
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
  if ((e & er) !== 0)
    Nt !== null ? Nt.push(n) : Tt.ensure().schedule(n);
  else if (t !== null) {
    try {
      Ut(n);
    } catch (u) {
      throw ie(n), u;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Yt) === 0 && (i = i.first, (e & Le) !== 0 && (e & qt) !== 0 && i !== null && (i.f |= qt));
  }
  if (i !== null && (i.parent = r, r !== null && ls(i, r), T !== null && (T.f & X) !== 0 && (e & ot) === 0)) {
    var a = (
      /** @type {Derived} */
      T
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return n;
}
function xn() {
  return T !== null && !De;
}
function os(e) {
  const t = ut(jr, null);
  return I(t, q), t.teardown = e, t;
}
function Bn(e) {
  ss();
  var t = (
    /** @type {Effect} */
    A.f
  ), r = !T && (t & Re) !== 0 && (t & Mt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      xe
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return xi(e);
}
function xi(e) {
  return ut(er | ha, e);
}
function fs(e) {
  Tt.ensure();
  const t = ut(ot | Yt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Et(t, () => {
      ie(t), n(void 0);
    }) : (ie(t), n(void 0));
  });
}
function us(e) {
  return ut(tr | Yt, e);
}
function yi(e, t = 0) {
  return ut(jr | t, e);
}
function Te(e, t = [], r = [], n = []) {
  Ka(n, t, r, (i) => {
    ut(jr, () => e(...i.map(c)));
  });
}
function yn(e, t = 0) {
  var r = ut(Le | t, e);
  return r;
}
function pe(e) {
  return ut(Re | Yt, e);
}
function wi(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = ft, n = T;
    Hn(!0), ye(null);
    try {
      t.call(null);
    } finally {
      Hn(r), ye(n);
    }
  }
}
function wn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && mn(() => {
      i.abort(Ye);
    });
    var n = r.next;
    (r.f & ot) !== 0 ? r.parent = null : ie(r, t), r = n;
  }
}
function ds(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Re) === 0 && ie(t), t = r;
  }
}
function ie(e, t = !0) {
  var r = !1;
  (t || (e.f & va) !== 0) && e.nodes !== null && e.nodes.end !== null && (cs(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), I(e, In), wn(e, t && !r), rr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const a of n)
      a.stop();
  wi(e), e.f ^= In, e.f |= be;
  var i = e.parent;
  i !== null && i.first !== null && ki(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function cs(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ ur(e);
    e.remove(), e = r;
  }
}
function ki(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Et(e, t, r = !0) {
  var n = [];
  Ei(e, n, !0);
  var i = () => {
    r && ie(e), t && t();
  }, a = n.length;
  if (a > 0) {
    var u = () => --a || i();
    for (var o of n)
      o.out(u);
  } else
    i();
}
function Ei(e, t, r) {
  if ((e.f & ee) === 0) {
    e.f ^= ee;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var a = i.next;
      if ((i.f & ot) === 0) {
        var u = (i.f & qt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Re) !== 0 && (e.f & Le) !== 0;
        Ei(i, t, u ? r : !1);
      }
      i = a;
    }
  }
}
function kn(e) {
  Ci(e, !0);
}
function Ci(e, t) {
  if ((e.f & ee) !== 0) {
    e.f ^= ee, (e.f & q) === 0 && (I(e, J), Tt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & qt) !== 0 || (r.f & Re) !== 0;
      Ci(r, i ? t : !1), r = n;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const u of a)
        (u.is_global || t) && u.in();
  }
}
function En(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ ur(r);
      t.append(r), r = i;
    }
}
let Sr = !1, ft = !1;
function Hn(e) {
  ft = e;
}
let T = null, De = !1;
function ye(e) {
  T = e;
}
let A = null;
function Oe(e) {
  A = e;
}
let me = null;
function Si(e) {
  T !== null && (me === null ? me = [e] : me.push(e));
}
let ne = null, ae = 0, ce = null;
function vs(e) {
  ce = e;
}
let Ti = 1, pt = 0, Ct = pt;
function Un(e) {
  Ct = e;
}
function Ai() {
  return ++Ti;
}
function dr(e) {
  var t = e.f;
  if ((t & J) !== 0)
    return !0;
  if (t & X && (e.f &= ~St), (t & Ve) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var a = r[i];
      if (dr(
        /** @type {Derived} */
        a
      ) && ci(
        /** @type {Derived} */
        a
      ), a.wv > e.wv)
        return !0;
    }
    (t & ge) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Me === null && I(e, q);
  }
  return !1;
}
function Mi(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(me !== null && Ot.call(me, e)))
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      (a.f & X) !== 0 ? Mi(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? I(a, J) : (a.f & q) !== 0 && I(a, Ve), pn(
        /** @type {Effect} */
        a
      ));
    }
}
function Di(e) {
  var k;
  var t = ne, r = ae, n = ce, i = T, a = me, u = xe, o = De, l = Ct, f = e.f;
  ne = /** @type {null | Value[]} */
  null, ae = 0, ce = null, T = (f & (Re | ot)) === 0 ? e : null, me = null, Bt(e.ctx), De = !1, Ct = ++pt, e.ac !== null && (mn(() => {
    e.ac.abort(Ye);
  }), e.ac = null);
  try {
    e.f |= Tr;
    var v = (
      /** @type {Function} */
      e.fn
    ), g = v();
    e.f |= Mt;
    var p = e.deps, h = E?.is_fork;
    if (ne !== null) {
      var d;
      if (h || rr(e, ae), p !== null && ae > 0)
        for (p.length = ae + ne.length, d = 0; d < ne.length; d++)
          p[ae + d] = ne[d];
      else
        e.deps = p = ne;
      if (xn() && (e.f & ge) !== 0)
        for (d = ae; d < p.length; d++)
          ((k = p[d]).reactions ?? (k.reactions = [])).push(e);
    } else !h && p !== null && ae < p.length && (rr(e, ae), p.length = ae);
    if (ri() && ce !== null && !De && p !== null && (e.f & (X | Ve | J)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      ce.length; d++)
        Mi(
          ce[d],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (pt++, i.deps !== null)
        for (let y = 0; y < r; y += 1)
          i.deps[y].rv = pt;
      if (t !== null)
        for (const y of t)
          y.rv = pt;
      ce !== null && (n === null ? n = ce : n.push(.../** @type {Source[]} */
      ce));
    }
    return (e.f & lt) !== 0 && (e.f ^= lt), g;
  } catch (y) {
    return ii(y);
  } finally {
    e.f ^= Tr, ne = t, ae = r, ce = n, T = i, me = a, Bt(u), De = o, Ct = l;
  }
}
function hs(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = sa.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & X) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ne === null || !Ot.call(ne, t))) {
    var a = (
      /** @type {Derived} */
      t
    );
    (a.f & ge) !== 0 && (a.f ^= ge, a.f &= ~St), a.v !== Y && hn(a), Za(a), rr(a, 0);
  }
}
function rr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      hs(e, r[n]);
}
function Ut(e) {
  var t = e.f;
  if ((t & be) === 0) {
    I(e, q);
    var r = A, n = Sr;
    A = e, Sr = !0;
    try {
      (t & (Le | Xn)) !== 0 ? ds(e) : wn(e), wi(e);
      var i = Di(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Ti;
      var a;
    } finally {
      Sr = n, A = r;
    }
  }
}
async function _s() {
  await Promise.resolve(), La();
}
function c(e) {
  var t = e.f, r = (t & X) !== 0;
  if (T !== null && !De) {
    var n = A !== null && (A.f & be) !== 0;
    if (!n && (me === null || !Ot.call(me, e))) {
      var i = T.deps;
      if ((T.f & Tr) !== 0)
        e.rv < pt && (e.rv = pt, ne === null && i !== null && i[ae] === e ? ae++ : ne === null ? ne = [e] : ne.push(e));
      else {
        (T.deps ?? (T.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [T] : Ot.call(a, T) || a.push(T);
      }
    }
  }
  if (ft && kt.has(e))
    return kt.get(e);
  if (r) {
    var u = (
      /** @type {Derived} */
      e
    );
    if (ft) {
      var o = u.v;
      return ((u.f & q) === 0 && u.reactions !== null || Ni(u)) && (o = bn(u)), kt.set(u, o), o;
    }
    var l = (u.f & ge) === 0 && !De && T !== null && (Sr || (T.f & ge) !== 0), f = (u.f & Mt) === 0;
    dr(u) && (l && (u.f |= ge), ci(u)), l && !f && (vi(u), Ri(u));
  }
  if (Me?.has(e))
    return Me.get(e);
  if ((e.f & lt) !== 0)
    throw e.v;
  return e.v;
}
function Ri(e) {
  if (e.f |= ge, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & X) !== 0 && (t.f & ge) === 0 && (vi(
        /** @type {Derived} */
        t
      ), Ri(
        /** @type {Derived} */
        t
      ));
}
function Ni(e) {
  if (e.v === Y) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (kt.has(t) || (t.f & X) !== 0 && Ni(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ji(e) {
  var t = De;
  try {
    return De = !0, e();
  } finally {
    De = t;
  }
}
const ps = ["touchstart", "touchmove"];
function gs(e) {
  return ps.includes(e);
}
const gt = Symbol("events"), Fi = /* @__PURE__ */ new Set(), un = /* @__PURE__ */ new Set();
function He(e, t, r) {
  (t[gt] ?? (t[gt] = {}))[e] = r;
}
function bs(e) {
  for (var t = 0; t < e.length; t++)
    Fi.add(e[t]);
  for (var r of un)
    r(e);
}
let Yn = null;
function Gn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Yn = e;
  var u = 0, o = Yn === e && e[gt];
  if (o) {
    var l = i.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[gt] = t;
      return;
    }
    var f = i.indexOf(t);
    if (f === -1)
      return;
    l <= f && (u = l);
  }
  if (a = /** @type {Element} */
  i[u] || e.target, a !== t) {
    la(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var v = T, g = A;
    ye(null), Oe(null);
    try {
      for (var p, h = []; a !== null; ) {
        var d = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var k = a[gt]?.[n];
          k != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && k.call(a, e);
        } catch (y) {
          p ? h.push(y) : p = y;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        a = d;
      }
      if (p) {
        for (let y of h)
          queueMicrotask(() => {
            throw y;
          });
        throw p;
      }
    } finally {
      e[gt] = t, delete e.currentTarget, ye(v), Oe(g);
    }
  }
}
const ms = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function xs(e) {
  return (
    /** @type {string} */
    ms?.createHTML(e) ?? e
  );
}
function Pi(e) {
  var t = ns("template");
  return t.innerHTML = xs(e.replaceAll("<!>", "<!---->")), t.content;
}
function nr(e, t) {
  var r = (
    /** @type {Effect} */
    A
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function B(e, t) {
  var r = (t & Aa) !== 0, n = (t & Ma) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = Pi(a ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ st(i)));
    var u = (
      /** @type {TemplateNode} */
      n || pi ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ st(u)
      ), l = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      nr(o, l);
    } else
      nr(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function ys(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (!a) {
      var u = (
        /** @type {DocumentFragment} */
        Pi(i)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ st(u)
      );
      for (a = document.createDocumentFragment(); /* @__PURE__ */ st(o); )
        a.appendChild(
          /** @type {TemplateNode} */
          /* @__PURE__ */ st(o)
        );
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ st(l)
      ), v = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      nr(f, v);
    }
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function Cn(e, t) {
  return /* @__PURE__ */ ys(e, t, "svg");
}
function Zr(e = "") {
  {
    var t = Xe(e + "");
    return nr(t, t), t;
  }
}
function ws() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Xe();
  return e.append(t, r), nr(t, r), e;
}
function R(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function W(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function ks(e, t) {
  return Es(e, t);
}
const gr = /* @__PURE__ */ new Map();
function Es(e, { target: t, anchor: r, props: n = {}, events: i, context: a, intro: u = !0, transformError: o }) {
  ts();
  var l = void 0, f = fs(() => {
    var v = r ?? t.appendChild(Xe());
    Ba(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (h) => {
        ei({});
        var d = (
          /** @type {ComponentContext} */
          xe
        );
        a && (d.c = a), i && (n.$$events = i), l = e(h, n) || {}, ti();
      },
      o
    );
    var g = /* @__PURE__ */ new Set(), p = (h) => {
      for (var d = 0; d < h.length; d++) {
        var k = h[d];
        if (!g.has(k)) {
          g.add(k);
          var y = gs(k);
          for (const V of [t, document]) {
            var M = gr.get(V);
            M === void 0 && (M = /* @__PURE__ */ new Map(), gr.set(V, M));
            var S = M.get(k);
            S === void 0 ? (V.addEventListener(k, Gn, { passive: y }), M.set(k, 1)) : M.set(k, S + 1);
          }
        }
      }
    };
    return p(Nr(Fi)), un.add(p), () => {
      for (var h of g)
        for (const y of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            gr.get(y)
          ), k = (
            /** @type {number} */
            d.get(h)
          );
          --k == 0 ? (y.removeEventListener(h, Gn), d.delete(h), d.size === 0 && gr.delete(y)) : d.set(h, k);
        }
      un.delete(p), v !== r && v.parentNode?.removeChild(v);
    };
  });
  return dn.set(l, f), l;
}
let dn = /* @__PURE__ */ new WeakMap();
function Cs(e, t) {
  const r = dn.get(e);
  return r ? (dn.delete(e), r(t)) : Promise.resolve();
}
var Ae, Ie, oe, wt, or, fr, Rr;
class Ss {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Se(this, "anchor");
    /** @type {Map<Batch, Key>} */
    w(this, Ae, /* @__PURE__ */ new Map());
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
    w(this, Ie, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    w(this, oe, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    w(this, wt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    w(this, or, !0);
    /**
     * @param {Batch} batch
     */
    w(this, fr, (t) => {
      if (s(this, Ae).has(t)) {
        var r = (
          /** @type {Key} */
          s(this, Ae).get(t)
        ), n = s(this, Ie).get(r);
        if (n)
          kn(n), s(this, wt).delete(r);
        else {
          var i = s(this, oe).get(r);
          i && (s(this, Ie).set(r, i.effect), s(this, oe).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [a, u] of s(this, Ae)) {
          if (s(this, Ae).delete(a), a === t)
            break;
          const o = s(this, oe).get(u);
          o && (ie(o.effect), s(this, oe).delete(u));
        }
        for (const [a, u] of s(this, Ie)) {
          if (a === r || s(this, wt).has(a)) continue;
          const o = () => {
            if (Array.from(s(this, Ae).values()).includes(a)) {
              var f = document.createDocumentFragment();
              En(u, f), f.append(Xe()), s(this, oe).set(a, { effect: u, fragment: f });
            } else
              ie(u);
            s(this, wt).delete(a), s(this, Ie).delete(a);
          };
          s(this, or) || !n ? (s(this, wt).add(a), Et(u, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    w(this, Rr, (t) => {
      s(this, Ae).delete(t);
      const r = Array.from(s(this, Ae).values());
      for (const [n, i] of s(this, oe))
        r.includes(n) || (ie(i.effect), s(this, oe).delete(n));
    });
    this.anchor = t, C(this, or, r);
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
    ), i = mi();
    if (r && !s(this, Ie).has(t) && !s(this, oe).has(t))
      if (i) {
        var a = document.createDocumentFragment(), u = Xe();
        a.append(u), s(this, oe).set(t, {
          effect: pe(() => r(u)),
          fragment: a
        });
      } else
        s(this, Ie).set(
          t,
          pe(() => r(this.anchor))
        );
    if (s(this, Ae).set(n, t), i) {
      for (const [o, l] of s(this, Ie))
        o === t ? n.unskip_effect(l) : n.skip_effect(l);
      for (const [o, l] of s(this, oe))
        o === t ? n.unskip_effect(l.effect) : n.skip_effect(l.effect);
      n.oncommit(s(this, fr)), n.ondiscard(s(this, Rr));
    } else
      s(this, fr).call(this, n);
  }
}
Ae = new WeakMap(), Ie = new WeakMap(), oe = new WeakMap(), wt = new WeakMap(), or = new WeakMap(), fr = new WeakMap(), Rr = new WeakMap();
function O(e, t, r = !1) {
  var n = new Ss(e), i = r ? qt : 0;
  function a(u, o) {
    n.ensure(u, o);
  }
  yn(() => {
    var u = !1;
    t((o, l = 0) => {
      u = !0, a(l, o);
    }), u || a(-1, null);
  }, i);
}
function Ts(e, t, r) {
  for (var n = [], i = t.length, a, u = t.length, o = 0; o < i; o++) {
    let g = t[o];
    Et(
      g,
      () => {
        if (a) {
          if (a.pending.delete(g), a.done.add(g), a.pending.size === 0) {
            var p = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            cn(e, Nr(a.done)), p.delete(a), p.size === 0 && (e.outrogroups = null);
          }
        } else
          u -= 1;
      },
      !1
    );
  }
  if (u === 0) {
    var l = n.length === 0 && r !== null;
    if (l) {
      var f = (
        /** @type {Element} */
        r
      ), v = (
        /** @type {Element} */
        f.parentNode
      );
      rs(v), v.append(f), e.items.clear();
    }
    cn(e, t, !l);
  } else
    a = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function cn(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const u of e.pending.values())
      for (const o of u)
        n.add(
          /** @type {EachItem} */
          e.items.get(o).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var a = t[i];
    if (n?.has(a)) {
      a.f |= Je;
      const u = document.createDocumentFragment();
      En(a, u);
    } else
      ie(t[i], r);
  }
}
var Kn;
function As(e, t, r, n, i, a = null) {
  var u = e, o = /* @__PURE__ */ new Map();
  {
    var l = (
      /** @type {Element} */
      e
    );
    u = l.appendChild(Xe());
  }
  var f = null, v = /* @__PURE__ */ Ja(() => {
    var S = r();
    return $n(S) ? S : S == null ? [] : Nr(S);
  }), g, p = /* @__PURE__ */ new Map(), h = !0;
  function d(S) {
    (M.effect.f & be) === 0 && (M.pending.delete(S), M.fallback = f, Ms(M, g, u, t, n), f !== null && (g.length === 0 ? (f.f & Je) === 0 ? kn(f) : (f.f ^= Je, Jt(f, null, u)) : Et(f, () => {
      f = null;
    })));
  }
  function k(S) {
    M.pending.delete(S);
  }
  var y = yn(() => {
    g = /** @type {V[]} */
    c(v);
    for (var S = g.length, V = /* @__PURE__ */ new Set(), Z = (
      /** @type {Batch} */
      E
    ), qe = mi(), Ne = 0; Ne < S; Ne += 1) {
      var dt = g[Ne], G = n(dt, Ne), we = h ? null : o.get(G);
      we ? (we.v && Ht(we.v, dt), we.i && Ht(we.i, Ne), qe && Z.unskip_effect(we.e)) : (we = Ds(
        o,
        h ? u : Kn ?? (Kn = Xe()),
        dt,
        G,
        Ne,
        i,
        t,
        r
      ), h || (we.e.f |= Je), o.set(G, we)), V.add(G);
    }
    if (S === 0 && a && !f && (h ? f = pe(() => a(u)) : (f = pe(() => a(Kn ?? (Kn = Xe()))), f.f |= Je)), S > V.size && pa(), !h)
      if (p.set(Z, V), qe) {
        for (const [Dt, Fr] of o)
          V.has(Dt) || Z.skip_effect(Fr.e);
        Z.oncommit(d), Z.ondiscard(k);
      } else
        d(Z);
    c(v);
  }), M = { effect: y, items: o, pending: p, outrogroups: null, fallback: f };
  h = !1;
}
function $t(e) {
  for (; e !== null && (e.f & Re) === 0; )
    e = e.next;
  return e;
}
function Ms(e, t, r, n, i) {
  var a = t.length, u = e.items, o = $t(e.effect.first), l, f = null, v = [], g = [], p, h, d, k;
  for (k = 0; k < a; k += 1) {
    if (p = t[k], h = i(p, k), d = /** @type {EachItem} */
    u.get(h).e, e.outrogroups !== null)
      for (const G of e.outrogroups)
        G.pending.delete(d), G.done.delete(d);
    if ((d.f & ee) !== 0 && kn(d), (d.f & Je) !== 0)
      if (d.f ^= Je, d === o)
        Jt(d, null, r);
      else {
        var y = f ? f.next : o;
        d === e.effect.last && (e.effect.last = d.prev), d.prev && (d.prev.next = d.next), d.next && (d.next.prev = d.prev), rt(e, f, d), rt(e, d, y), Jt(d, y, r), f = d, v = [], g = [], o = $t(f.next);
        continue;
      }
    if (d !== o) {
      if (l !== void 0 && l.has(d)) {
        if (v.length < g.length) {
          var M = g[0], S;
          f = M.prev;
          var V = v[0], Z = v[v.length - 1];
          for (S = 0; S < v.length; S += 1)
            Jt(v[S], M, r);
          for (S = 0; S < g.length; S += 1)
            l.delete(g[S]);
          rt(e, V.prev, Z.next), rt(e, f, V), rt(e, Z, M), o = M, f = Z, k -= 1, v = [], g = [];
        } else
          l.delete(d), Jt(d, o, r), rt(e, d.prev, d.next), rt(e, d, f === null ? e.effect.first : f.next), rt(e, f, d), f = d;
        continue;
      }
      for (v = [], g = []; o !== null && o !== d; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(o), g.push(o), o = $t(o.next);
      if (o === null)
        continue;
    }
    (d.f & Je) === 0 && v.push(d), f = d, o = $t(d.next);
  }
  if (e.outrogroups !== null) {
    for (const G of e.outrogroups)
      G.pending.size === 0 && (cn(e, Nr(G.done)), e.outrogroups?.delete(G));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var qe = [];
    if (l !== void 0)
      for (d of l)
        (d.f & ee) === 0 && qe.push(d);
    for (; o !== null; )
      (o.f & ee) === 0 && o !== e.fallback && qe.push(o), o = $t(o.next);
    var Ne = qe.length;
    if (Ne > 0) {
      var dt = a === 0 ? r : null;
      Ts(e, qe, dt);
    }
  }
}
function Ds(e, t, r, n, i, a, u, o) {
  var l = (u & Ca) !== 0 ? (u & Ta) === 0 ? /* @__PURE__ */ Qa(r, !1, !1) : At(r) : null, f = (u & Sa) !== 0 ? At(i) : null;
  return {
    v: l,
    i: f,
    e: pe(() => (a(t, l ?? r, f ?? i, o), () => {
      e.delete(n);
    }))
  };
}
function Jt(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, a = t && (t.f & Je) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ur(n)
      );
      if (a.before(n), n === i)
        return;
      n = u;
    }
}
function rt(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Rs(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function br(e, t, r, n, i, a) {
  var u = e.__className;
  if (u !== r || u === void 0) {
    var o = Rs(r);
    o == null ? e.removeAttribute("class") : e.className = o, e.__className = r;
  }
  return a;
}
function mr(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  as(e, "input", async (i) => {
    var a = i ? e.defaultValue : e.value;
    if (a = Qr(e) ? en(a) : a, r(a), E !== null && n.add(E), await _s(), a !== (a = t())) {
      var u = e.selectionStart, o = e.selectionEnd, l = e.value.length;
      if (e.value = a ?? "", o !== null) {
        var f = e.value.length;
        u === o && o === l && f > l ? (e.selectionStart = f, e.selectionEnd = f) : (e.selectionStart = u, e.selectionEnd = Math.min(o, f));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  ji(t) == null && e.value && (r(Qr(e) ? en(e.value) : e.value), E !== null && n.add(E)), yi(() => {
    var i = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        E
      );
      if (n.has(a))
        return;
    }
    Qr(e) && i === en(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Qr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function en(e) {
  return e === "" ? null : +e;
}
const Ns = "5";
var Wn;
typeof window < "u" && ((Wn = window.__svelte ?? (window.__svelte = {})).v ?? (Wn.v = /* @__PURE__ */ new Set())).add(Ns);
var js = /* @__PURE__ */ Cn('<svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Loading…', 1), Fs = /* @__PURE__ */ B('<div class="mb-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-lg text-sm"><span class="font-medium">Error:</span> </div>'), Ps = /* @__PURE__ */ B('<div class="flex flex-col items-center justify-center py-16"><svg class="animate-spin h-10 w-10 text-indigo-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <p class="mt-4 text-gray-500 dark:text-gray-400 animate-pulse">Loading cases…</p></div>'), zs = /* @__PURE__ */ B('<div class="text-center py-12"><svg class="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg> <p class="text-gray-500 dark:text-gray-400"></p></div>'), Is = /* @__PURE__ */ B('<th class="px-4 py-3 rounded-tr-lg"></th>'), Ls = /* @__PURE__ */ B('<div class="text-xs text-gray-500 dark:text-gray-400 truncate max-w-xs"> </div>'), Vs = /* @__PURE__ */ B('<span class="text-xs text-gray-400">Resolved</span>'), Os = /* @__PURE__ */ B('<tr class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"><td class="px-4 py-3 font-mono text-xs text-indigo-600 dark:text-indigo-400"> </td><td class="px-4 py-3"><div class="font-medium text-gray-900 dark:text-white"> </div> <!></td><td class="px-4 py-3"><span> </span></td><td class="px-4 py-3 font-mono text-xs text-gray-600 dark:text-gray-400"> </td><!><td class="px-4 py-3 text-xs text-gray-600 dark:text-gray-400"> </td><td class="px-4 py-3"><!></td></tr>'), qs = /* @__PURE__ */ B('<div class="overflow-x-auto"><table class="w-full text-sm text-left"><thead class="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-100 dark:bg-gray-700"><tr><th class="px-4 py-3 rounded-tl-lg">Case ID</th><th class="px-4 py-3">Title</th><th class="px-4 py-3">Status</th><th class="px-4 py-3">Requester</th><!><th class="px-4 py-3">Date</th><!></tr></thead><tbody></tbody></table></div>'), Bs = /* @__PURE__ */ B('<div class="mt-4 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-lg text-sm"><span class="font-medium">Error:</span> </div>'), Hs = /* @__PURE__ */ B('<div class="mt-4 p-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 rounded-lg text-sm"><span class="font-medium">Success:</span> Litigation case created!</div>'), Us = /* @__PURE__ */ Cn('<svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Creating…', 1), Ys = /* @__PURE__ */ B(`<div class="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"><h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Create New Litigation Case</h3> <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Submit a new litigation request. All fields are required.</p> <div class="space-y-4"><div><label for="jl-defendant" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Defendant Principal ID</label> <input id="jl-defendant" type="text" placeholder="Enter defendant's principal ID" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none disabled:opacity-50"/></div> <div><label for="jl-title" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Case Title</label> <input id="jl-title" type="text" placeholder="Enter case title" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none disabled:opacity-50"/></div> <div><label for="jl-desc" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Case Description</label> <textarea id="jl-desc" placeholder="Provide detailed description of the dispute…" rows="4" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none disabled:opacity-50 resize-y"></textarea></div></div> <!> <!> <div class="flex justify-end gap-3 mt-6"><button class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors disabled:opacity-50">Reset</button> <button class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"><!></button></div></div>`), Gs = /* @__PURE__ */ B('<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"><div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5"><p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Total Cases</p> <p class="text-3xl font-bold text-indigo-600 dark:text-indigo-400"> </p></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5"><p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Pending</p> <p class="text-3xl font-bold text-yellow-600 dark:text-yellow-400"> </p></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5"><p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">In Review</p> <p class="text-3xl font-bold text-blue-600 dark:text-blue-400"> </p></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5"><p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Resolved</p> <p class="text-3xl font-bold text-green-600 dark:text-green-400"> </p></div></div>'), Ks = /* @__PURE__ */ B('<div class="mb-4 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400"><span>Profile: <span class="font-semibold capitalize"></span></span> <span>Total cases: <span class="font-semibold"> </span></span></div> <div class="flex border-b-2 border-gray-200 dark:border-gray-700 mb-6"><button><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg> </button> <button><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> Create Litigation</button> <button><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg> Statistics</button></div> <div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700"><!></div>', 1), Ws = /* @__PURE__ */ B('<div><span class="font-medium text-gray-700 dark:text-gray-300">Description:</span> <span class="text-gray-600 dark:text-gray-400"> </span></div>'), $s = /* @__PURE__ */ B('<div class="mb-4 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-lg text-sm"><span class="font-medium">Error:</span> </div>'), Js = /* @__PURE__ */ B('<div class="mb-4 p-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 rounded-lg text-sm"><span class="font-medium">Success:</span> Verdict executed!</div>'), Xs = /* @__PURE__ */ Cn('<svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Executing…', 1), Zs = /* @__PURE__ */ B('<div class="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-4 text-sm space-y-1"><div><span class="font-medium text-gray-700 dark:text-gray-300">ID:</span> <span class="text-gray-600 dark:text-gray-400"> </span></div> <div><span class="font-medium text-gray-700 dark:text-gray-300">Title:</span> <span class="text-gray-600 dark:text-gray-400"> </span></div> <!></div> <div class="mb-4"><label for="jl-verdict-code" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Decision</label> <textarea id="jl-verdict-code" rows="4" placeholder="Enter the formal decision summary…" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none disabled:opacity-50 resize-y"></textarea> <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Uses the first available judge with <code class="font-mono">issue_verdict</code>.</p></div> <!> <!> <div class="flex justify-end gap-3"><button class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors disabled:opacity-50">Cancel</button> <button class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"><!></button></div>', 1), Qs = /* @__PURE__ */ B('<div class="fixed inset-0 z-50 flex items-center justify-center p-4"><button class="absolute inset-0 bg-black/50" aria-label="Close"></button> <div class="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-lg max-h-[90vh] overflow-y-auto"><div class="p-6"><div class="flex items-center gap-2 mb-4"><svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg> <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Execute Verdict</h3></div> <!></div></div></div>'), el = /* @__PURE__ */ B('<div class="w-full max-w-5xl mx-auto px-4 py-6"><div class="flex items-center gap-3 mb-6"><div class="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center"><svg class="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg></div> <div class="flex-1"><h1 class="text-2xl font-bold text-gray-900 dark:text-white">Justice & Litigation</h1></div> <button class="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"><!></button></div> <!> <!> <!></div>');
function tl(e, t) {
  ei(t, !0);
  let r = /* @__PURE__ */ N("list"), n = /* @__PURE__ */ N(jt([])), i = /* @__PURE__ */ N(0), a = "member", u = /* @__PURE__ */ N(!0), o = /* @__PURE__ */ N(""), l = /* @__PURE__ */ N("");
  Bn(() => {
    const _ = t.ctx.principal;
    if (typeof _ == "string")
      x(l, _, !0);
    else if (_ && typeof _.subscribe == "function")
      return _.subscribe((H) => x(l, H || "", !0));
  });
  let f = /* @__PURE__ */ N(""), v = /* @__PURE__ */ N(""), g = /* @__PURE__ */ N(""), p = /* @__PURE__ */ N(!1), h = /* @__PURE__ */ N(""), d = /* @__PURE__ */ N(!1), k = /* @__PURE__ */ N(!1), y = /* @__PURE__ */ N(null), M = /* @__PURE__ */ N(""), S = /* @__PURE__ */ N(!1), V = /* @__PURE__ */ N(""), Z = /* @__PURE__ */ N(!1), qe = /* @__PURE__ */ Jr(() => c(n).filter((_) => _.status === "pending").length), Ne = /* @__PURE__ */ Jr(() => c(n).filter((_) => _.status === "in_review").length), dt = /* @__PURE__ */ Jr(() => c(n).filter((_) => _.status === "resolved").length);
  async function G(_, P = {}) {
    return await t.ctx.callSync(_, P);
  }
  function we(_) {
    return {
      id: _.id,
      case_number: _.case_number ?? "",
      case_title: _.title ?? "",
      description: _.description ?? "",
      status: _.status ?? "pending",
      requester_principal: _.plaintiff_id ?? "",
      defendant_principal: _.defendant_id ?? "",
      requested_at: _.filed_date ?? ""
    };
  }
  async function Dt() {
    x(u, !0), x(o, "");
    try {
      const _ = a === "admin" ? {} : { user_id: c(l) }, P = await G("get_cases", _), H = P?.data ?? P, ct = H?.cases ?? [];
      x(n, Array.isArray(ct) ? ct.map(we) : [], !0), x(i, H?.total_count ?? c(n).length, !0);
    } catch (_) {
      x(o, _?.message || String(_), !0);
    } finally {
      x(u, !1);
    }
  }
  async function Fr() {
    if (!c(f).trim() || !c(v).trim() || !c(g).trim()) {
      x(h, "All fields are required");
      return;
    }
    x(p, !0), x(h, ""), x(d, !1);
    try {
      const _ = await G("get_courts", {}), H = (_?.data?.courts ?? _?.courts ?? [])[0]?.id;
      if (!H) {
        x(h, "No court available. Create or seed a court first.");
        return;
      }
      await G("file_case", {
        court_id: H,
        plaintiff_id: c(l).trim(),
        defendant_id: c(g).trim(),
        title: c(f).trim(),
        description: c(v).trim()
      }), x(d, !0), x(f, ""), x(v, ""), x(g, ""), await Dt(), setTimeout(
        () => {
          x(d, !1), x(r, "list");
        },
        1500
      );
    } catch (_) {
      x(h, _?.message || String(_), !0);
    } finally {
      x(p, !1);
    }
  }
  function Pr() {
    x(k, !1), x(y, null), x(M, ""), x(V, ""), x(Z, !1);
  }
  async function zi() {
    if (!c(y) || !c(M).trim()) {
      x(V, "Decision text is required");
      return;
    }
    x(S, !0), x(V, ""), x(Z, !1);
    try {
      const _ = await G("get_judges", {}), H = (_?.data?.judges ?? _?.judges ?? [])[0]?.id;
      if (!H) {
        x(V, "No judge available. Assign a judge before issuing a verdict.");
        return;
      }
      await G("issue_verdict", {
        case_id: c(y).id,
        judge_id: H,
        decision: c(M).trim(),
        reasoning: "",
        penalties: []
      }), x(Z, !0), await Dt(), setTimeout(Pr, 1500);
    } catch (_) {
      x(V, _?.message || String(_), !0);
    } finally {
      x(S, !1);
    }
  }
  function Ii() {
    x(f, ""), x(v, ""), x(g, ""), x(h, ""), x(d, !1);
  }
  function Li(_) {
    switch (_) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300";
      case "in_review":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300";
      case "resolved":
        return "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  }
  function Vi(_) {
    return _ ? new Date(_).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }) : "";
  }
  function Oi(_) {
    return _ ? _.length > 16 ? `${_.slice(0, 8)}…${_.slice(-4)}` : _ : "Unknown";
  }
  Bn(() => {
    c(l) ? Dt() : (x(u, !1), x(o, "User not authenticated"));
  });
  var Sn = el(), Tn = b(Sn), zr = m(b(Tn), 4), qi = b(zr);
  {
    var Bi = (_) => {
      var P = js();
      R(_, P);
    }, Hi = (_) => {
      var P = Zr("↻ Refresh");
      R(_, P);
    };
    O(qi, (_) => {
      c(u) ? _(Bi) : _(Hi, -1);
    });
  }
  var An = m(Tn, 2);
  {
    var Ui = (_) => {
      var P = Fs(), H = m(b(P));
      Te(() => W(H, ` ${c(o) ?? ""}`)), R(_, P);
    };
    O(An, (_) => {
      c(o) && !c(u) && _(Ui);
    });
  }
  var Mn = m(An, 2);
  {
    var Yi = (_) => {
      var P = Ps();
      R(_, P);
    }, Gi = (_) => {
      var P = Ks(), H = Xr(P), ct = b(H), Ir = m(b(ct));
      Ir.textContent = "member";
      var Lr = m(ct, 2), Vr = m(b(Lr)), Gt = b(Vr), Kt = m(H, 2), vt = b(Kt), cr = m(b(vt));
      cr.nodeValue = " My Litigations";
      var Wt = m(vt, 2), vr = m(Wt, 2), hr = m(Kt, 2), Or = b(hr);
      {
        var qr = (fe) => {
          var ke = ws(), je = Xr(ke);
          {
            var Ze = (te) => {
              var ue = zs(), Ee = m(b(ue), 2);
              Ee.textContent = "You have no litigation cases.", R(te, ue);
            }, Be = (te) => {
              var ue = qs(), Ee = b(ue), de = b(Ee), Qe = b(de), et = m(b(Qe), 4);
              O(et, ($) => {
              });
              var tt = m(et, 2);
              {
                var D = ($) => {
                  var U = Is();
                  R($, U);
                };
                O(tt, ($) => {
                  $(D, -1);
                });
              }
              var K = m(de);
              As(K, 21, () => c(n), ($) => $.id, ($, U) => {
                var _r = Os(), pr = b(_r), Ur = b(pr), j = m(pr), Ce = b(j), Yr = b(Ce), $i = m(Ce, 2);
                {
                  var Ji = (Fe) => {
                    var Rt = Ls(), Gr = b(Rt);
                    Te(() => W(Gr, c(U).description)), R(Fe, Rt);
                  };
                  O($i, (Fe) => {
                    c(U).description && Fe(Ji);
                  });
                }
                var Dn = m(j), Rn = b(Dn), Xi = b(Rn), Nn = m(Dn), Zi = b(Nn), jn = m(Nn);
                O(jn, (Fe) => {
                });
                var Fn = m(jn), Qi = b(Fn), ea = m(Fn), ta = b(ea);
                {
                  var ra = (Fe) => {
                    var Rt = Vs();
                    R(Fe, Rt);
                  };
                  O(ta, (Fe) => {
                    c(U).status === "resolved" && Fe(ra, 1);
                  });
                }
                Te(
                  (Fe, Rt, Gr, na) => {
                    W(Ur, c(U).case_number || c(U).id), W(Yr, c(U).case_title), br(Rn, 1, `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${Fe ?? ""}`), W(Xi, Rt), W(Zi, Gr), W(Qi, na);
                  },
                  [
                    () => Li(c(U).status),
                    () => c(U).status?.replace("_", " ") || "unknown",
                    () => Oi(c(U).requester_principal),
                    () => Vi(c(U).requested_at)
                  ]
                ), R($, _r);
              }), R(te, ue);
            };
            O(je, (te) => {
              c(n).length === 0 ? te(Ze) : te(Be, -1);
            });
          }
          R(fe, ke);
        }, Br = (fe) => {
          var ke = Ys(), je = m(b(ke), 4), Ze = b(je), Be = m(b(Ze), 2), te = m(Ze, 2), ue = m(b(te), 2), Ee = m(te, 2), de = m(b(Ee), 2), Qe = m(je, 2);
          {
            var et = (j) => {
              var Ce = Bs(), Yr = m(b(Ce));
              Te(() => W(Yr, ` ${c(h) ?? ""}`)), R(j, Ce);
            };
            O(Qe, (j) => {
              c(h) && j(et);
            });
          }
          var tt = m(Qe, 2);
          {
            var D = (j) => {
              var Ce = Hs();
              R(j, Ce);
            };
            O(tt, (j) => {
              c(d) && j(D);
            });
          }
          var K = m(tt, 2), $ = b(K), U = m($, 2), _r = b(U);
          {
            var pr = (j) => {
              var Ce = Us();
              R(j, Ce);
            }, Ur = (j) => {
              var Ce = Zr("Create Litigation");
              R(j, Ce);
            };
            O(_r, (j) => {
              c(p) ? j(pr) : j(Ur, -1);
            });
          }
          Te(
            (j) => {
              Be.disabled = c(p), ue.disabled = c(p), de.disabled = c(p), $.disabled = c(p), U.disabled = j;
            },
            [
              () => c(p) || !c(f).trim() || !c(v).trim() || !c(g).trim()
            ]
          ), mr(Be, () => c(g), (j) => x(g, j)), mr(ue, () => c(f), (j) => x(f, j)), mr(de, () => c(v), (j) => x(v, j)), He("click", $, Ii), He("click", U, Fr), R(fe, ke);
        }, Hr = (fe) => {
          var ke = Gs(), je = b(ke), Ze = m(b(je), 2), Be = b(Ze), te = m(je, 2), ue = m(b(te), 2), Ee = b(ue), de = m(te, 2), Qe = m(b(de), 2), et = b(Qe), tt = m(de, 2), D = m(b(tt), 2), K = b(D);
          Te(() => {
            W(Be, c(i)), W(Ee, c(qe)), W(et, c(Ne)), W(K, c(dt));
          }), R(fe, ke);
        };
        O(Or, (fe) => {
          c(r) === "list" ? fe(qr) : c(r) === "create" ? fe(Br, 1) : c(r) === "stats" && fe(Hr, 2);
        });
      }
      Te(() => {
        W(Gt, c(i)), br(vt, 1, `flex items-center gap-2 px-4 py-2.5 text-sm font-medium -mb-0.5 border-b-2 transition-colors ${c(r) === "list" ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`), br(Wt, 1, `flex items-center gap-2 px-4 py-2.5 text-sm font-medium -mb-0.5 border-b-2 transition-colors ${c(r) === "create" ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`), br(vr, 1, `flex items-center gap-2 px-4 py-2.5 text-sm font-medium -mb-0.5 border-b-2 transition-colors ${c(r) === "stats" ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`);
      }), He("click", vt, () => x(r, "list")), He("click", Wt, () => x(r, "create")), He("click", vr, () => x(r, "stats")), R(_, P);
    };
    O(Mn, (_) => {
      c(u) ? _(Yi) : _(Gi, -1);
    });
  }
  var Ki = m(Mn, 2);
  {
    var Wi = (_) => {
      var P = Qs(), H = b(P), ct = m(H, 2), Ir = b(ct), Lr = m(b(Ir), 2);
      {
        var Vr = (Gt) => {
          var Kt = Zs(), vt = Xr(Kt), cr = b(vt), Wt = m(b(cr), 2), vr = b(Wt), hr = m(cr, 2), Or = m(b(hr), 2), qr = b(Or), Br = m(hr, 2);
          {
            var Hr = (D) => {
              var K = Ws(), $ = m(b(K), 2), U = b($);
              Te(() => W(U, c(y).description)), R(D, K);
            };
            O(Br, (D) => {
              c(y).description && D(Hr);
            });
          }
          var fe = m(vt, 2), ke = m(b(fe), 2), je = m(fe, 2);
          {
            var Ze = (D) => {
              var K = $s(), $ = m(b(K));
              Te(() => W($, ` ${c(V) ?? ""}`)), R(D, K);
            };
            O(je, (D) => {
              c(V) && D(Ze);
            });
          }
          var Be = m(je, 2);
          {
            var te = (D) => {
              var K = Js();
              R(D, K);
            };
            O(Be, (D) => {
              c(Z) && D(te);
            });
          }
          var ue = m(Be, 2), Ee = b(ue), de = m(Ee, 2), Qe = b(de);
          {
            var et = (D) => {
              var K = Xs();
              R(D, K);
            }, tt = (D) => {
              var K = Zr("Execute Verdict");
              R(D, K);
            };
            O(Qe, (D) => {
              c(S) ? D(et) : D(tt, -1);
            });
          }
          Te(
            (D) => {
              W(vr, c(y).id), W(qr, c(y).case_title), ke.disabled = c(S), Ee.disabled = c(S), de.disabled = D;
            },
            [() => c(S) || !c(M).trim()]
          ), mr(ke, () => c(M), (D) => x(M, D)), He("click", Ee, Pr), He("click", de, zi), R(Gt, Kt);
        };
        O(Lr, (Gt) => {
          c(y) && Gt(Vr);
        });
      }
      He("click", H, Pr), R(_, P);
    };
    O(Ki, (_) => {
      c(k) && _(Wi);
    });
  }
  Te(() => zr.disabled = c(u)), He("click", zr, Dt), R(e, Sn), ti();
}
bs(["click"]);
function il(e, t) {
  const r = ks(tl, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Cs(r);
      } catch {
      }
    }
  };
}
export {
  il as default
};
