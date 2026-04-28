var ii = Object.defineProperty;
var Kn = (e) => {
  throw TypeError(e);
};
var si = (e, t, n) => t in e ? ii(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var pe = (e, t, n) => si(e, typeof t != "symbol" ? t + "" : t, n), yn = (e, t, n) => t.has(e) || Kn("Cannot " + n);
var a = (e, t, n) => (yn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), g = (e, t, n) => t.has(e) ? Kn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), b = (e, t, n, r) => (yn(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), T = (e, t, n) => (yn(e, t, "access private method"), n);
var cr = Array.isArray, ai = Array.prototype.indexOf, xt = Array.prototype.includes, dn = Array.from, li = Object.defineProperty, zt = Object.getOwnPropertyDescriptor, fi = Object.prototype, oi = Array.prototype, ui = Object.getPrototypeOf, Gn = Object.isExtensible;
const ci = () => {
};
function di(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function dr() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const j = 2, kt = 4, vn = 8, vr = 1 << 24, Ae = 16, be = 32, Ze = 64, kn = 128, ce = 512, F = 1024, q = 2048, Ne = 4096, U = 8192, de = 16384, ht = 32768, Wn = 1 << 25, St = 65536, Sn = 1 << 17, vi = 1 << 18, Ct = 1 << 19, hi = 1 << 20, Ve = 1 << 25, ct = 65536, ln = 1 << 21, qt = 1 << 22, We = 1 << 23, En = Symbol("$state"), Ie = new class extends Error {
  constructor() {
    super(...arguments);
    pe(this, "name", "StaleReactionError");
    pe(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function _i() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function pi(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function gi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function mi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function wi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function bi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function yi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ei() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function xi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ki() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Si = 1, Ti = 2, Ai = 16, Ni = 2, I = Symbol(), Ci = "http://www.w3.org/1999/xhtml";
function Mi() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ri() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function hr(e) {
  return e === this.v;
}
function Oi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function _r(e) {
  return !Oi(e, this.v);
}
let he = null;
function Tt(e) {
  he = e;
}
function pr(e, t = !1, n) {
  he = {
    p: he,
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
function gr(e) {
  var t = (
    /** @type {ComponentContext} */
    he
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      zr(r);
  }
  return t.i = !0, he = t.p, /** @type {T} */
  {};
}
function mr() {
  return !0;
}
let _t = [];
function Fi() {
  var e = _t;
  _t = [], di(e);
}
function gt(e) {
  if (_t.length === 0) {
    var t = _t;
    queueMicrotask(() => {
      t === _t && Fi();
    });
  }
  _t.push(e);
}
function wr(e) {
  var t = E;
  if (t === null)
    return y.f |= We, e;
  if ((t.f & ht) === 0 && (t.f & kt) === 0)
    throw e;
  Ge(e, t);
}
function Ge(e, t) {
  for (; t !== null; ) {
    if ((t.f & kn) !== 0) {
      if ((t.f & ht) === 0)
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
const Di = -7169;
function M(e, t) {
  e.f = e.f & Di | t;
}
function In(e) {
  (e.f & ce) !== 0 || e.deps === null ? M(e, F) : M(e, Ne);
}
function br(e) {
  if (e !== null)
    for (const t of e)
      (t.f & j) === 0 || (t.f & ct) === 0 || (t.f ^= ct, br(
        /** @type {Derived} */
        t.deps
      ));
}
function yr(e, t, n) {
  (e.f & q) !== 0 ? t.add(e) : (e.f & Ne) !== 0 && n.add(e), br(e.deps), M(e, F);
}
const $e = /* @__PURE__ */ new Set();
let k = null, me = null, Tn = null, xn = !1, pt = null, $t = null;
var Xn = 0;
let Pi = 1;
var mt, wt, rt, ze, ke, Vt, Q, Bt, Je, Le, Se, bt, yt, it, O, en, Er, tn, An, nn, Ii;
const on = class on {
  constructor() {
    g(this, O);
    pe(this, "id", Pi++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    pe(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    pe(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, mt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, wt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, rt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    g(this, ze, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    g(this, ke, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    g(this, Vt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    g(this, Q, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    g(this, Bt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    g(this, Je, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    g(this, Le, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    g(this, Se, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    g(this, bt, /* @__PURE__ */ new Set());
    pe(this, "is_fork", !1);
    g(this, yt, !1);
    /** @type {Set<Batch>} */
    g(this, it, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    a(this, Se).has(t) || a(this, Se).set(t, { d: [], m: [] }), a(this, bt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = a(this, Se).get(t);
    if (r) {
      a(this, Se).delete(t);
      for (var i of r.d)
        M(i, q), n(i);
      for (i of r.m)
        M(i, Ne), n(i);
    }
    a(this, bt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== I && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & We) === 0 && (this.current.set(t, [n, r]), me?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    k = this;
  }
  deactivate() {
    k = null, me = null;
  }
  flush() {
    try {
      xn = !0, k = this, T(this, O, tn).call(this);
    } finally {
      Xn = 0, Tn = null, pt = null, $t = null, xn = !1, k = null, me = null, ft.clear();
    }
  }
  discard() {
    for (const t of a(this, wt)) t(this);
    a(this, wt).clear(), a(this, rt).clear(), $e.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    a(this, Bt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    let r = a(this, ze).get(n) ?? 0;
    if (a(this, ze).set(n, r + 1), t) {
      let i = a(this, ke).get(n) ?? 0;
      a(this, ke).set(n, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, r) {
    let i = a(this, ze).get(n) ?? 0;
    if (i === 1 ? a(this, ze).delete(n) : a(this, ze).set(n, i - 1), t) {
      let s = a(this, ke).get(n) ?? 0;
      s === 1 ? a(this, ke).delete(n) : a(this, ke).set(n, s - 1);
    }
    a(this, yt) || r || (b(this, yt, !0), gt(() => {
      b(this, yt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      a(this, Je).add(r);
    for (const r of n)
      a(this, Le).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    a(this, mt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    a(this, wt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    a(this, rt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of a(this, rt)) t(this);
    a(this, rt).clear();
  }
  settled() {
    return (a(this, Vt) ?? b(this, Vt, dr())).promise;
  }
  static ensure() {
    if (k === null) {
      const t = k = new on();
      xn || ($e.add(k), gt(() => {
        k === t && t.flush();
      }));
    }
    return k;
  }
  apply() {
    {
      me = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Tn = t, t.b?.is_pending && (t.f & (kt | vn | vr)) !== 0 && (t.f & ht) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (pt !== null && n === E && (y === null || (y.f & j) === 0))
        return;
      if ((r & (Ze | be)) !== 0) {
        if ((r & F) === 0)
          return;
        n.f ^= F;
      }
    }
    a(this, Q).push(n);
  }
};
mt = new WeakMap(), wt = new WeakMap(), rt = new WeakMap(), ze = new WeakMap(), ke = new WeakMap(), Vt = new WeakMap(), Q = new WeakMap(), Bt = new WeakMap(), Je = new WeakMap(), Le = new WeakMap(), Se = new WeakMap(), bt = new WeakMap(), yt = new WeakMap(), it = new WeakMap(), O = new WeakSet(), en = function() {
  return this.is_fork || a(this, ke).size > 0;
}, Er = function() {
  for (const r of a(this, it))
    for (const i of a(r, ke).keys()) {
      for (var t = !1, n = i; n.parent !== null; ) {
        if (a(this, Se).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, tn = function() {
  var f;
  if (Xn++ > 1e3 && ($e.delete(this), zi()), !T(this, O, en).call(this)) {
    for (const l of a(this, Je))
      a(this, Le).delete(l), M(l, q), this.schedule(l);
    for (const l of a(this, Le))
      M(l, Ne), this.schedule(l);
  }
  const t = a(this, Q);
  b(this, Q, []), this.apply();
  var n = pt = [], r = [], i = $t = [];
  for (const l of t)
    try {
      T(this, O, An).call(this, l, n, r);
    } catch (u) {
      throw Sr(l), u;
    }
  if (k = null, i.length > 0) {
    var s = on.ensure();
    for (const l of i)
      s.schedule(l);
  }
  if (pt = null, $t = null, T(this, O, en).call(this) || T(this, O, Er).call(this)) {
    T(this, O, nn).call(this, r), T(this, O, nn).call(this, n);
    for (const [l, u] of a(this, Se))
      kr(l, u);
  } else {
    a(this, ze).size === 0 && $e.delete(this), a(this, Je).clear(), a(this, Le).clear();
    for (const l of a(this, mt)) l(this);
    a(this, mt).clear(), Zn(r), Zn(n), a(this, Vt)?.resolve();
  }
  var o = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    k
  );
  if (a(this, Q).length > 0) {
    const l = o ?? (o = this);
    a(l, Q).push(...a(this, Q).filter((u) => !a(l, Q).includes(u)));
  }
  o !== null && ($e.add(o), T(f = o, O, tn).call(f));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
An = function(t, n, r) {
  t.f ^= F;
  for (var i = t.first; i !== null; ) {
    var s = i.f, o = (s & (be | Ze)) !== 0, f = o && (s & F) !== 0, l = f || (s & U) !== 0 || a(this, Se).has(i);
    if (!l && i.fn !== null) {
      o ? i.f ^= F : (s & kt) !== 0 ? n.push(i) : Gt(i) && ((s & Ae) !== 0 && a(this, Le).add(i), Nt(i));
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
nn = function(t) {
  for (var n = 0; n < t.length; n += 1)
    yr(t[n], a(this, Je), a(this, Le));
}, Ii = function() {
  var v, h, _;
  for (const d of $e) {
    var t = d.id < this.id, n = [];
    for (const [c, [m, w]] of this.current) {
      if (d.current.has(c)) {
        var r = (
          /** @type {[any, boolean]} */
          d.current.get(c)[0]
        );
        if (t && m !== r)
          d.current.set(c, [m, w]);
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
        for (const c of a(this, bt))
          d.unskip_effect(c, (m) => {
            var w;
            (m.f & (Ae | qt)) !== 0 ? d.schedule(m) : T(w = d, O, nn).call(w, [m]);
          });
      d.activate();
      var s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
      for (var f of n)
        xr(f, i, s, o);
      o = /* @__PURE__ */ new Map();
      var l = [...d.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of a(this, Bt))
        (c.f & (de | U | Sn)) === 0 && zn(c, l, o) && ((c.f & (qt | Ae)) !== 0 ? (M(c, q), d.schedule(c)) : a(d, Je).add(c));
      if (a(d, Q).length > 0) {
        d.apply();
        for (var u of a(d, Q))
          T(v = d, O, An).call(v, u, [], []);
        b(d, Q, []);
      }
      d.deactivate();
    }
  }
  for (const d of $e)
    a(d, it).has(this) && (a(d, it).delete(this), a(d, it).size === 0 && !T(h = d, O, en).call(h) && (d.activate(), T(_ = d, O, tn).call(_)));
};
let dt = on;
function zi() {
  try {
    bi();
  } catch (e) {
    Ge(e, Tn);
  }
}
let Pe = null;
function Zn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (de | U)) === 0 && Gt(r) && (Pe = /* @__PURE__ */ new Set(), Nt(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && qr(r), Pe?.size > 0)) {
        ft.clear();
        for (const i of Pe) {
          if ((i.f & (de | U)) !== 0) continue;
          const s = [i];
          let o = i.parent;
          for (; o !== null; )
            Pe.has(o) && (Pe.delete(o), s.push(o)), o = o.parent;
          for (let f = s.length - 1; f >= 0; f--) {
            const l = s[f];
            (l.f & (de | U)) === 0 && Nt(l);
          }
        }
        Pe.clear();
      }
    }
    Pe = null;
  }
}
function xr(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & j) !== 0 ? xr(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (qt | Ae)) !== 0 && (s & q) === 0 && zn(i, t, r) && (M(i, q), Ln(
        /** @type {Effect} */
        i
      ));
    }
}
function zn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (xt.call(t, i))
        return !0;
      if ((i.f & j) !== 0 && zn(
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
function Ln(e) {
  k.schedule(e);
}
function kr(e, t) {
  if (!((e.f & be) !== 0 && (e.f & F) !== 0)) {
    (e.f & q) !== 0 ? t.d.push(e) : (e.f & Ne) !== 0 && t.m.push(e), M(e, F);
    for (var n = e.first; n !== null; )
      kr(n, t), n = n.next;
  }
}
function Sr(e) {
  M(e, F);
  for (var t = e.first; t !== null; )
    Sr(t), t = t.next;
}
function Li(e) {
  let t = 0, n = vt(0), r;
  return () => {
    Bn() && (p(n), fs(() => (t === 0 && (r = vs(() => e(() => Lt(n)))), t += 1, () => {
      gt(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Lt(n));
      });
    })));
  };
}
var qi = St | Ct;
function ji(e, t, n, r) {
  new Vi(e, t, n, r);
}
var le, Pn, fe, st, J, oe, H, $, qe, at, Ke, Et, Ht, Ut, je, un, N, Bi, Hi, Ui, Nn, rn, sn, Cn, Mn;
class Vi {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    g(this, N);
    /** @type {Boundary | null} */
    pe(this, "parent");
    pe(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    pe(this, "transform_error");
    /** @type {TemplateNode} */
    g(this, le);
    /** @type {TemplateNode | null} */
    g(this, Pn, null);
    /** @type {BoundaryProps} */
    g(this, fe);
    /** @type {((anchor: Node) => void)} */
    g(this, st);
    /** @type {Effect} */
    g(this, J);
    /** @type {Effect | null} */
    g(this, oe, null);
    /** @type {Effect | null} */
    g(this, H, null);
    /** @type {Effect | null} */
    g(this, $, null);
    /** @type {DocumentFragment | null} */
    g(this, qe, null);
    g(this, at, 0);
    g(this, Ke, 0);
    g(this, Et, !1);
    /** @type {Set<Effect>} */
    g(this, Ht, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    g(this, Ut, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    g(this, je, null);
    g(this, un, Li(() => (b(this, je, vt(a(this, at))), () => {
      b(this, je, null);
    })));
    b(this, le, t), b(this, fe, n), b(this, st, (s) => {
      var o = (
        /** @type {Effect} */
        E
      );
      o.b = this, o.f |= kn, r(s);
    }), this.parent = /** @type {Effect} */
    E.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), b(this, J, Hn(() => {
      T(this, N, Nn).call(this);
    }, qi));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    yr(t, a(this, Ht), a(this, Ut));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!a(this, fe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    T(this, N, Cn).call(this, t, n), b(this, at, a(this, at) + t), !(!a(this, je) || a(this, Et)) && (b(this, Et, !0), gt(() => {
      b(this, Et, !1), a(this, je) && At(a(this, je), a(this, at));
    }));
  }
  get_effect_pending() {
    return a(this, un).call(this), p(
      /** @type {Source<number>} */
      a(this, je)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!a(this, fe).onerror && !a(this, fe).failed)
      throw t;
    k?.is_fork ? (a(this, oe) && k.skip_effect(a(this, oe)), a(this, H) && k.skip_effect(a(this, H)), a(this, $) && k.skip_effect(a(this, $)), k.on_fork_commit(() => {
      T(this, N, Mn).call(this, t);
    })) : T(this, N, Mn).call(this, t);
  }
}
le = new WeakMap(), Pn = new WeakMap(), fe = new WeakMap(), st = new WeakMap(), J = new WeakMap(), oe = new WeakMap(), H = new WeakMap(), $ = new WeakMap(), qe = new WeakMap(), at = new WeakMap(), Ke = new WeakMap(), Et = new WeakMap(), Ht = new WeakMap(), Ut = new WeakMap(), je = new WeakMap(), un = new WeakMap(), N = new WeakSet(), Bi = function() {
  try {
    b(this, oe, ue(() => a(this, st).call(this, a(this, le))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Hi = function(t) {
  const n = a(this, fe).failed;
  n && b(this, $, ue(() => {
    n(
      a(this, le),
      () => t,
      () => () => {
      }
    );
  }));
}, Ui = function() {
  const t = a(this, fe).pending;
  t && (this.is_pending = !0, b(this, H, ue(() => t(a(this, le)))), gt(() => {
    var n = b(this, qe, document.createDocumentFragment()), r = Xe();
    n.append(r), b(this, oe, T(this, N, sn).call(this, () => ue(() => a(this, st).call(this, r)))), a(this, Ke) === 0 && (a(this, le).before(n), b(this, qe, null), ot(
      /** @type {Effect} */
      a(this, H),
      () => {
        b(this, H, null);
      }
    ), T(this, N, rn).call(
      this,
      /** @type {Batch} */
      k
    ));
  }));
}, Nn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), b(this, Ke, 0), b(this, at, 0), b(this, oe, ue(() => {
      a(this, st).call(this, a(this, le));
    })), a(this, Ke) > 0) {
      var t = b(this, qe, document.createDocumentFragment());
      Jn(a(this, oe), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        a(this, fe).pending
      );
      b(this, H, ue(() => n(a(this, le))));
    } else
      T(this, N, rn).call(
        this,
        /** @type {Batch} */
        k
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
rn = function(t) {
  this.is_pending = !1, t.transfer_effects(a(this, Ht), a(this, Ut));
}, /**
 * @template T
 * @param {() => T} fn
 */
sn = function(t) {
  var n = E, r = y, i = he;
  Ce(a(this, J)), _e(a(this, J)), Tt(a(this, J).ctx);
  try {
    return dt.ensure(), t();
  } catch (s) {
    return wr(s), null;
  } finally {
    Ce(n), _e(r), Tt(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Cn = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && T(r = this.parent, N, Cn).call(r, t, n);
    return;
  }
  b(this, Ke, a(this, Ke) + t), a(this, Ke) === 0 && (T(this, N, rn).call(this, n), a(this, H) && ot(a(this, H), () => {
    b(this, H, null);
  }), a(this, qe) && (a(this, le).before(a(this, qe)), b(this, qe, null)));
}, /**
 * @param {unknown} error
 */
Mn = function(t) {
  a(this, oe) && (G(a(this, oe)), b(this, oe, null)), a(this, H) && (G(a(this, H)), b(this, H, null)), a(this, $) && (G(a(this, $)), b(this, $, null));
  var n = a(this, fe).onerror;
  let r = a(this, fe).failed;
  var i = !1, s = !1;
  const o = () => {
    if (i) {
      Ri();
      return;
    }
    i = !0, s && ki(), a(this, $) !== null && ot(a(this, $), () => {
      b(this, $, null);
    }), T(this, N, sn).call(this, () => {
      T(this, N, Nn).call(this);
    });
  }, f = (l) => {
    try {
      s = !0, n?.(l, o), s = !1;
    } catch (u) {
      Ge(u, a(this, J) && a(this, J).parent);
    }
    r && b(this, $, T(this, N, sn).call(this, () => {
      try {
        return ue(() => {
          var u = (
            /** @type {Effect} */
            E
          );
          u.b = this, u.f |= kn, r(
            a(this, le),
            () => l,
            () => o
          );
        });
      } catch (u) {
        return Ge(
          u,
          /** @type {Effect} */
          a(this, J).parent
        ), null;
      }
    }));
  };
  gt(() => {
    var l;
    try {
      l = this.transform_error(t);
    } catch (u) {
      Ge(u, a(this, J) && a(this, J).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      f,
      /** @param {unknown} e */
      (u) => Ge(u, a(this, J) && a(this, J).parent)
    ) : f(l);
  });
};
function Yi(e, t, n, r) {
  const i = qn;
  var s = e.filter((_) => !_.settled);
  if (n.length === 0 && s.length === 0) {
    r(t.map(i));
    return;
  }
  var o = (
    /** @type {Effect} */
    E
  ), f = Ji(), l = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((_) => _.promise)) : null;
  function u(_) {
    f();
    try {
      r(_);
    } catch (d) {
      (o.f & de) === 0 && Ge(d, o);
    }
    fn();
  }
  if (n.length === 0) {
    l.then(() => u(t.map(i)));
    return;
  }
  var v = Tr();
  function h() {
    Promise.all(n.map((_) => /* @__PURE__ */ Ki(_))).then((_) => u([...t.map(i), ..._])).catch((_) => Ge(_, o)).finally(() => v());
  }
  l ? l.then(() => {
    f(), h(), fn();
  }) : h();
}
function Ji() {
  var e = (
    /** @type {Effect} */
    E
  ), t = y, n = he, r = (
    /** @type {Batch} */
    k
  );
  return function(s = !0) {
    Ce(e), _e(t), Tt(n), s && (e.f & de) === 0 && (r?.activate(), r?.apply());
  };
}
function fn(e = !0) {
  Ce(null), _e(null), Tt(null), e && k?.deactivate();
}
function Tr() {
  var e = (
    /** @type {Effect} */
    E
  ), t = (
    /** @type {Boundary} */
    e.b
  ), n = (
    /** @type {Batch} */
    k
  ), r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
    t.update_pending_count(-1, n), n.decrement(r, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function qn(e) {
  var t = j | q;
  return E !== null && (E.f |= Ct), {
    ctx: he,
    deps: null,
    effects: null,
    equals: hr,
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
function Ki(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    E
  );
  r === null && _i();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = vt(
    /** @type {V} */
    I
  ), o = !y, f = /* @__PURE__ */ new Map();
  return ls(() => {
    var l = (
      /** @type {Effect} */
      E
    ), u = dr();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(fn);
    } catch (d) {
      u.reject(d), fn();
    }
    var v = (
      /** @type {Batch} */
      k
    );
    if (o) {
      if ((l.f & ht) !== 0)
        var h = Tr();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        f.get(v)?.reject(Ie), f.delete(v);
      else {
        for (const d of f.values())
          d.reject(Ie);
        f.clear();
      }
      f.set(v, u);
    }
    const _ = (d, c = void 0) => {
      if (h) {
        var m = c === Ie;
        h(m);
      }
      if (!(c === Ie || (l.f & de) !== 0)) {
        if (v.activate(), c)
          s.f |= We, At(s, c);
        else {
          (s.f & We) !== 0 && (s.f ^= We), At(s, d);
          for (const [w, A] of f) {
            if (f.delete(w), w === v) break;
            A.reject(Ie);
          }
        }
        v.deactivate();
      }
    };
    u.promise.then(_, (d) => _(null, d || "unknown"));
  }), rs(() => {
    for (const l of f.values())
      l.reject(Ie);
  }), new Promise((l) => {
    function u(v) {
      function h() {
        v === i ? l(s) : u(i);
      }
      v.then(h, h);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Qn(e) {
  const t = /* @__PURE__ */ qn(e);
  return Br(t), t;
}
// @__NO_SIDE_EFFECTS__
function Gi(e) {
  const t = /* @__PURE__ */ qn(e);
  return t.equals = _r, t;
}
function Wi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      G(
        /** @type {Effect} */
        t[n]
      );
  }
}
function jn(e) {
  var t, n = E, r = e.parent;
  if (!Qe && r !== null && (r.f & (de | U)) !== 0)
    return Mi(), e.v;
  Ce(r);
  try {
    e.f &= ~ct, Wi(e), t = Jr(e);
  } finally {
    Ce(n);
  }
  return t;
}
function Ar(e) {
  var t = jn(e);
  if (!e.equals(t) && (e.wv = Ur(), (!k?.is_fork || e.deps === null) && (k !== null ? k.capture(e, t, !0) : e.v = t, e.deps === null))) {
    M(e, F);
    return;
  }
  Qe || (me !== null ? (Bn() || k?.is_fork) && me.set(e, t) : In(e));
}
function Xi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Ie), t.teardown = ci, t.ac = null, jt(t, 0), Un(t));
}
function Nr(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Nt(t);
}
let Rn = /* @__PURE__ */ new Set();
const ft = /* @__PURE__ */ new Map();
let Cr = !1;
function vt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: hr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function te(e, t) {
  const n = vt(e);
  return Br(n), n;
}
// @__NO_SIDE_EFFECTS__
function Zi(e, t = !1, n = !0) {
  const r = vt(e);
  return t || (r.equals = _r), r;
}
function L(e, t, n = !1) {
  y !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!we || (y.f & Sn) !== 0) && mr() && (y.f & (j | Ae | qt | Sn)) !== 0 && (ve === null || !xt.call(ve, e)) && xi();
  let r = n ? et(t) : t;
  return At(e, r, $t);
}
function At(e, t, n = null) {
  if (!e.equals(t)) {
    ft.set(e, Qe ? t : e.v);
    var r = dt.ensure();
    if (r.capture(e, t), (e.f & j) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & q) !== 0 && jn(i), me === null && In(i);
    }
    e.wv = Ur(), Mr(e, q, n), E !== null && (E.f & F) !== 0 && (E.f & (be | Ze)) === 0 && (ae === null ? cs([e]) : ae.push(e)), !r.is_fork && Rn.size > 0 && !Cr && Qi();
  }
  return t;
}
function Qi() {
  Cr = !1;
  for (const e of Rn)
    (e.f & F) !== 0 && M(e, Ne), Gt(e) && Nt(e);
  Rn.clear();
}
function Lt(e) {
  L(e, e.v + 1);
}
function Mr(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, s = 0; s < i; s++) {
      var o = r[s], f = o.f, l = (f & q) === 0;
      if (l && M(o, t), (f & j) !== 0) {
        var u = (
          /** @type {Derived} */
          o
        );
        me?.delete(u), (f & ct) === 0 && (f & ce && (E === null || (E.f & ln) === 0) && (o.f |= ct), Mr(u, Ne, n));
      } else if (l) {
        var v = (
          /** @type {Effect} */
          o
        );
        (f & Ae) !== 0 && Pe !== null && Pe.add(v), n !== null ? n.push(v) : Ln(v);
      }
    }
}
function et(e) {
  if (typeof e != "object" || e === null || En in e)
    return e;
  const t = ui(e);
  if (t !== fi && t !== oi)
    return e;
  var n = /* @__PURE__ */ new Map(), r = cr(e), i = /* @__PURE__ */ te(0), s = ut, o = (f) => {
    if (ut === s)
      return f();
    var l = y, u = ut;
    _e(null), nr(s);
    var v = f();
    return _e(l), nr(u), v;
  };
  return r && n.set("length", /* @__PURE__ */ te(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && yi();
        var v = n.get(l);
        return v === void 0 ? o(() => {
          var h = /* @__PURE__ */ te(u.value);
          return n.set(l, h), h;
        }) : L(v, u.value, !0), !0;
      },
      deleteProperty(f, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in f) {
            const v = o(() => /* @__PURE__ */ te(I));
            n.set(l, v), Lt(i);
          }
        } else
          L(u, I), Lt(i);
        return !0;
      },
      get(f, l, u) {
        if (l === En)
          return e;
        var v = n.get(l), h = l in f;
        if (v === void 0 && (!h || zt(f, l)?.writable) && (v = o(() => {
          var d = et(h ? f[l] : I), c = /* @__PURE__ */ te(d);
          return c;
        }), n.set(l, v)), v !== void 0) {
          var _ = p(v);
          return _ === I ? void 0 : _;
        }
        return Reflect.get(f, l, u);
      },
      getOwnPropertyDescriptor(f, l) {
        var u = Reflect.getOwnPropertyDescriptor(f, l);
        if (u && "value" in u) {
          var v = n.get(l);
          v && (u.value = p(v));
        } else if (u === void 0) {
          var h = n.get(l), _ = h?.v;
          if (h !== void 0 && _ !== I)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return u;
      },
      has(f, l) {
        if (l === En)
          return !0;
        var u = n.get(l), v = u !== void 0 && u.v !== I || Reflect.has(f, l);
        if (u !== void 0 || E !== null && (!v || zt(f, l)?.writable)) {
          u === void 0 && (u = o(() => {
            var _ = v ? et(f[l]) : I, d = /* @__PURE__ */ te(_);
            return d;
          }), n.set(l, u));
          var h = p(u);
          if (h === I)
            return !1;
        }
        return v;
      },
      set(f, l, u, v) {
        var h = n.get(l), _ = l in f;
        if (r && l === "length")
          for (var d = u; d < /** @type {Source<number>} */
          h.v; d += 1) {
            var c = n.get(d + "");
            c !== void 0 ? L(c, I) : d in f && (c = o(() => /* @__PURE__ */ te(I)), n.set(d + "", c));
          }
        if (h === void 0)
          (!_ || zt(f, l)?.writable) && (h = o(() => /* @__PURE__ */ te(void 0)), L(h, et(u)), n.set(l, h));
        else {
          _ = h.v !== I;
          var m = o(() => et(u));
          L(h, m);
        }
        var w = Reflect.getOwnPropertyDescriptor(f, l);
        if (w?.set && w.set.call(v, u), !_) {
          if (r && typeof l == "string") {
            var A = (
              /** @type {Source<number>} */
              n.get("length")
            ), x = Number(l);
            Number.isInteger(x) && x >= A.v && L(A, x + 1);
          }
          Lt(i);
        }
        return !0;
      },
      ownKeys(f) {
        p(i);
        var l = Reflect.ownKeys(f).filter((h) => {
          var _ = n.get(h);
          return _ === void 0 || _.v !== I;
        });
        for (var [u, v] of n)
          v.v !== I && !(u in f) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Ei();
      }
    }
  );
}
var $n, Rr, Or, Fr;
function $i() {
  if ($n === void 0) {
    $n = window, Rr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Or = zt(t, "firstChild").get, Fr = zt(t, "nextSibling").get, Gn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Gn(n) && (n.__t = void 0);
  }
}
function Xe(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Vn(e) {
  return (
    /** @type {TemplateNode | null} */
    Or.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
  return (
    /** @type {TemplateNode | null} */
    Fr.call(e)
  );
}
function z(e, t) {
  return /* @__PURE__ */ Vn(e);
}
function er(e, t = !1) {
  {
    var n = /* @__PURE__ */ Vn(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Kt(n) : n;
  }
}
function se(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Kt(r);
  return r;
}
function es(e) {
  e.textContent = "";
}
function Dr() {
  return !1;
}
function Pr(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ci, e, void 0)
  );
}
function Ir(e) {
  var t = y, n = E;
  _e(null), Ce(null);
  try {
    return e();
  } finally {
    _e(t), Ce(n);
  }
}
function ts(e) {
  E === null && (y === null && wi(), mi()), Qe && gi();
}
function ns(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Be(e, t) {
  var n = E;
  n !== null && (n.f & U) !== 0 && (e |= U);
  var r = {
    ctx: he,
    deps: null,
    nodes: null,
    f: e | q | ce,
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
  k?.register_created_effect(r);
  var i = r;
  if ((e & kt) !== 0)
    pt !== null ? pt.push(r) : dt.ensure().schedule(r);
  else if (t !== null) {
    try {
      Nt(r);
    } catch (o) {
      throw G(r), o;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Ct) === 0 && (i = i.first, (e & Ae) !== 0 && (e & St) !== 0 && i !== null && (i.f |= St));
  }
  if (i !== null && (i.parent = n, n !== null && ns(i, n), y !== null && (y.f & j) !== 0 && (e & Ze) === 0)) {
    var s = (
      /** @type {Derived} */
      y
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return r;
}
function Bn() {
  return y !== null && !we;
}
function rs(e) {
  const t = Be(vn, null);
  return M(t, F), t.teardown = e, t;
}
function is(e) {
  ts();
  var t = (
    /** @type {Effect} */
    E.f
  ), n = !y && (t & be) !== 0 && (t & ht) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      he
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return zr(e);
}
function zr(e) {
  return Be(kt | hi, e);
}
function ss(e) {
  dt.ensure();
  const t = Be(Ze | Ct, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? ot(t, () => {
      G(t), r(void 0);
    }) : (G(t), r(void 0));
  });
}
function as(e) {
  return Be(kt, e);
}
function ls(e) {
  return Be(qt | Ct, e);
}
function fs(e, t = 0) {
  return Be(vn | t, e);
}
function De(e, t = [], n = [], r = []) {
  Yi(r, t, n, (i) => {
    Be(vn, () => e(...i.map(p)));
  });
}
function Hn(e, t = 0) {
  var n = Be(Ae | t, e);
  return n;
}
function ue(e) {
  return Be(be | Ct, e);
}
function Lr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Qe, r = y;
    tr(!0), _e(null);
    try {
      t.call(null);
    } finally {
      tr(n), _e(r);
    }
  }
}
function Un(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Ir(() => {
      i.abort(Ie);
    });
    var r = n.next;
    (n.f & Ze) !== 0 ? n.parent = null : G(n, t), n = r;
  }
}
function os(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & be) === 0 && G(t), t = n;
  }
}
function G(e, t = !0) {
  var n = !1;
  (t || (e.f & vi) !== 0) && e.nodes !== null && e.nodes.end !== null && (us(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), M(e, Wn), Un(e, t && !n), jt(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  Lr(e), e.f ^= Wn, e.f |= de;
  var i = e.parent;
  i !== null && i.first !== null && qr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function us(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Kt(e);
    e.remove(), e = n;
  }
}
function qr(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function ot(e, t, n = !0) {
  var r = [];
  jr(e, r, !0);
  var i = () => {
    n && G(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var o = () => --s || i();
    for (var f of r)
      f.out(o);
  } else
    i();
}
function jr(e, t, n) {
  if ((e.f & U) === 0) {
    e.f ^= U;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const f of r)
        (f.is_global || n) && t.push(f);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & Ze) === 0) {
        var o = (i.f & St) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & be) !== 0 && (e.f & Ae) !== 0;
        jr(i, t, o ? n : !1);
      }
      i = s;
    }
  }
}
function Yn(e) {
  Vr(e, !0);
}
function Vr(e, t) {
  if ((e.f & U) !== 0) {
    e.f ^= U, (e.f & F) === 0 && (M(e, q), dt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & St) !== 0 || (n.f & be) !== 0;
      Vr(n, i ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const o of s)
        (o.is_global || t) && o.in();
  }
}
function Jn(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Kt(n);
      t.append(n), n = i;
    }
}
let an = !1, Qe = !1;
function tr(e) {
  Qe = e;
}
let y = null, we = !1;
function _e(e) {
  y = e;
}
let E = null;
function Ce(e) {
  E = e;
}
let ve = null;
function Br(e) {
  y !== null && (ve === null ? ve = [e] : ve.push(e));
}
let K = null, Z = 0, ae = null;
function cs(e) {
  ae = e;
}
let Hr = 1, tt = 0, ut = tt;
function nr(e) {
  ut = e;
}
function Ur() {
  return ++Hr;
}
function Gt(e) {
  var t = e.f;
  if ((t & q) !== 0)
    return !0;
  if (t & j && (e.f &= ~ct), (t & Ne) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Gt(
        /** @type {Derived} */
        s
      ) && Ar(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & ce) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    me === null && M(e, F);
  }
  return !1;
}
function Yr(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(ve !== null && xt.call(ve, e)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & j) !== 0 ? Yr(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? M(s, q) : (s.f & F) !== 0 && M(s, Ne), Ln(
        /** @type {Effect} */
        s
      ));
    }
}
function Jr(e) {
  var m;
  var t = K, n = Z, r = ae, i = y, s = ve, o = he, f = we, l = ut, u = e.f;
  K = /** @type {null | Value[]} */
  null, Z = 0, ae = null, y = (u & (be | Ze)) === 0 ? e : null, ve = null, Tt(e.ctx), we = !1, ut = ++tt, e.ac !== null && (Ir(() => {
    e.ac.abort(Ie);
  }), e.ac = null);
  try {
    e.f |= ln;
    var v = (
      /** @type {Function} */
      e.fn
    ), h = v();
    e.f |= ht;
    var _ = e.deps, d = k?.is_fork;
    if (K !== null) {
      var c;
      if (d || jt(e, Z), _ !== null && Z > 0)
        for (_.length = Z + K.length, c = 0; c < K.length; c++)
          _[Z + c] = K[c];
      else
        e.deps = _ = K;
      if (Bn() && (e.f & ce) !== 0)
        for (c = Z; c < _.length; c++)
          ((m = _[c]).reactions ?? (m.reactions = [])).push(e);
    } else !d && _ !== null && Z < _.length && (jt(e, Z), _.length = Z);
    if (mr() && ae !== null && !we && _ !== null && (e.f & (j | Ne | q)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      ae.length; c++)
        Yr(
          ae[c],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (tt++, i.deps !== null)
        for (let w = 0; w < n; w += 1)
          i.deps[w].rv = tt;
      if (t !== null)
        for (const w of t)
          w.rv = tt;
      ae !== null && (r === null ? r = ae : r.push(.../** @type {Source[]} */
      ae));
    }
    return (e.f & We) !== 0 && (e.f ^= We), h;
  } catch (w) {
    return wr(w);
  } finally {
    e.f ^= ln, K = t, Z = n, ae = r, y = i, ve = s, Tt(o), we = f, ut = l;
  }
}
function ds(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = ai.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & j) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (K === null || !xt.call(K, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & ce) !== 0 && (s.f ^= ce, s.f &= ~ct), s.v !== I && In(s), Xi(s), jt(s, 0);
  }
}
function jt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      ds(e, n[r]);
}
function Nt(e) {
  var t = e.f;
  if ((t & de) === 0) {
    M(e, F);
    var n = E, r = an;
    E = e, an = !0;
    try {
      (t & (Ae | vr)) !== 0 ? os(e) : Un(e), Lr(e);
      var i = Jr(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Hr;
      var s;
    } finally {
      an = r, E = n;
    }
  }
}
function p(e) {
  var t = e.f, n = (t & j) !== 0;
  if (y !== null && !we) {
    var r = E !== null && (E.f & de) !== 0;
    if (!r && (ve === null || !xt.call(ve, e))) {
      var i = y.deps;
      if ((y.f & ln) !== 0)
        e.rv < tt && (e.rv = tt, K === null && i !== null && i[Z] === e ? Z++ : K === null ? K = [e] : K.push(e));
      else {
        (y.deps ?? (y.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [y] : xt.call(s, y) || s.push(y);
      }
    }
  }
  if (Qe && ft.has(e))
    return ft.get(e);
  if (n) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (Qe) {
      var f = o.v;
      return ((o.f & F) === 0 && o.reactions !== null || Gr(o)) && (f = jn(o)), ft.set(o, f), f;
    }
    var l = (o.f & ce) === 0 && !we && y !== null && (an || (y.f & ce) !== 0), u = (o.f & ht) === 0;
    Gt(o) && (l && (o.f |= ce), Ar(o)), l && !u && (Nr(o), Kr(o));
  }
  if (me?.has(e))
    return me.get(e);
  if ((e.f & We) !== 0)
    throw e.v;
  return e.v;
}
function Kr(e) {
  if (e.f |= ce, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & j) !== 0 && (t.f & ce) === 0 && (Nr(
        /** @type {Derived} */
        t
      ), Kr(
        /** @type {Derived} */
        t
      ));
}
function Gr(e) {
  if (e.v === I) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ft.has(t) || (t.f & j) !== 0 && Gr(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function vs(e) {
  var t = we;
  try {
    return we = !0, e();
  } finally {
    we = t;
  }
}
const hs = ["touchstart", "touchmove"];
function _s(e) {
  return hs.includes(e);
}
const nt = Symbol("events"), Wr = /* @__PURE__ */ new Set(), On = /* @__PURE__ */ new Set();
function Xt(e, t, n) {
  (t[nt] ?? (t[nt] = {}))[e] = n;
}
function ps(e) {
  for (var t = 0; t < e.length; t++)
    Wr.add(e[t]);
  for (var n of On)
    n(e);
}
let rr = null;
function ir(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  rr = e;
  var o = 0, f = rr === e && e[nt];
  if (f) {
    var l = i.indexOf(f);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[nt] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    l <= u && (o = l);
  }
  if (s = /** @type {Element} */
  i[o] || e.target, s !== t) {
    li(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var v = y, h = E;
    _e(null), Ce(null);
    try {
      for (var _, d = []; s !== null; ) {
        var c = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var m = s[nt]?.[r];
          m != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && m.call(s, e);
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
      e[nt] = t, delete e.currentTarget, _e(v), Ce(h);
    }
  }
}
const gs = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function ms(e) {
  return (
    /** @type {string} */
    gs?.createHTML(e) ?? e
  );
}
function ws(e) {
  var t = Pr("template");
  return t.innerHTML = ms(e.replaceAll("<!>", "<!---->")), t.content;
}
function Xr(e, t) {
  var n = (
    /** @type {Effect} */
    E
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function V(e, t) {
  var n = (t & Ni) !== 0, r, i = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = ws(i ? e : "<!>" + e), r = /** @type {TemplateNode} */
    /* @__PURE__ */ Vn(r));
    var s = (
      /** @type {TemplateNode} */
      n || Rr ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return Xr(s, s), s;
  };
}
function sr() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Xe();
  return e.append(t, n), Xr(t, n), e;
}
function P(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Ee(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function bs(e, t) {
  return ys(e, t);
}
const Zt = /* @__PURE__ */ new Map();
function ys(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: o = !0, transformError: f }) {
  $i();
  var l = void 0, u = ss(() => {
    var v = n ?? t.appendChild(Xe());
    ji(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (d) => {
        pr({});
        var c = (
          /** @type {ComponentContext} */
          he
        );
        s && (c.c = s), i && (r.$$events = i), l = e(d, r) || {}, gr();
      },
      f
    );
    var h = /* @__PURE__ */ new Set(), _ = (d) => {
      for (var c = 0; c < d.length; c++) {
        var m = d[c];
        if (!h.has(m)) {
          h.add(m);
          var w = _s(m);
          for (const Y of [t, document]) {
            var A = Zt.get(Y);
            A === void 0 && (A = /* @__PURE__ */ new Map(), Zt.set(Y, A));
            var x = A.get(m);
            x === void 0 ? (Y.addEventListener(m, ir, { passive: w }), A.set(m, 1)) : A.set(m, x + 1);
          }
        }
      }
    };
    return _(dn(Wr)), On.add(_), () => {
      for (var d of h)
        for (const w of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            Zt.get(w)
          ), m = (
            /** @type {number} */
            c.get(d)
          );
          --m == 0 ? (w.removeEventListener(d, ir), c.delete(d), c.size === 0 && Zt.delete(w)) : c.set(d, m);
        }
      On.delete(_), v !== n && v.parentNode?.removeChild(v);
    };
  });
  return Fn.set(l, u), l;
}
let Fn = /* @__PURE__ */ new WeakMap();
function Es(e, t) {
  const n = Fn.get(e);
  return n ? (Fn.delete(e), n(t)) : Promise.resolve();
}
var ge, Te, ee, lt, Yt, Jt, cn;
class xs {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    pe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    g(this, ge, /* @__PURE__ */ new Map());
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
    g(this, Te, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    g(this, ee, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    g(this, lt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    g(this, Yt, !0);
    /**
     * @param {Batch} batch
     */
    g(this, Jt, (t) => {
      if (a(this, ge).has(t)) {
        var n = (
          /** @type {Key} */
          a(this, ge).get(t)
        ), r = a(this, Te).get(n);
        if (r)
          Yn(r), a(this, lt).delete(n);
        else {
          var i = a(this, ee).get(n);
          i && (a(this, Te).set(n, i.effect), a(this, ee).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, o] of a(this, ge)) {
          if (a(this, ge).delete(s), s === t)
            break;
          const f = a(this, ee).get(o);
          f && (G(f.effect), a(this, ee).delete(o));
        }
        for (const [s, o] of a(this, Te)) {
          if (s === n || a(this, lt).has(s)) continue;
          const f = () => {
            if (Array.from(a(this, ge).values()).includes(s)) {
              var u = document.createDocumentFragment();
              Jn(o, u), u.append(Xe()), a(this, ee).set(s, { effect: o, fragment: u });
            } else
              G(o);
            a(this, lt).delete(s), a(this, Te).delete(s);
          };
          a(this, Yt) || !r ? (a(this, lt).add(s), ot(o, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    g(this, cn, (t) => {
      a(this, ge).delete(t);
      const n = Array.from(a(this, ge).values());
      for (const [r, i] of a(this, ee))
        n.includes(r) || (G(i.effect), a(this, ee).delete(r));
    });
    this.anchor = t, b(this, Yt, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      k
    ), i = Dr();
    if (n && !a(this, Te).has(t) && !a(this, ee).has(t))
      if (i) {
        var s = document.createDocumentFragment(), o = Xe();
        s.append(o), a(this, ee).set(t, {
          effect: ue(() => n(o)),
          fragment: s
        });
      } else
        a(this, Te).set(
          t,
          ue(() => n(this.anchor))
        );
    if (a(this, ge).set(r, t), i) {
      for (const [f, l] of a(this, Te))
        f === t ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [f, l] of a(this, ee))
        f === t ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(a(this, Jt)), r.ondiscard(a(this, cn));
    } else
      a(this, Jt).call(this, r);
  }
}
ge = new WeakMap(), Te = new WeakMap(), ee = new WeakMap(), lt = new WeakMap(), Yt = new WeakMap(), Jt = new WeakMap(), cn = new WeakMap();
function xe(e, t, n = !1) {
  var r = new xs(e), i = n ? St : 0;
  function s(o, f) {
    r.ensure(o, f);
  }
  Hn(() => {
    var o = !1;
    t((f, l = 0) => {
      o = !0, s(l, f);
    }), o || s(-1, null);
  }, i);
}
function ks(e, t, n) {
  for (var r = [], i = t.length, s, o = t.length, f = 0; f < i; f++) {
    let h = t[f];
    ot(
      h,
      () => {
        if (s) {
          if (s.pending.delete(h), s.done.add(h), s.pending.size === 0) {
            var _ = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Dn(e, dn(s.done)), _.delete(s), _.size === 0 && (e.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var l = r.length === 0 && n !== null;
    if (l) {
      var u = (
        /** @type {Element} */
        n
      ), v = (
        /** @type {Element} */
        u.parentNode
      );
      es(v), v.append(u), e.items.clear();
    }
    Dn(e, t, !l);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Dn(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const o of e.pending.values())
      for (const f of o)
        r.add(
          /** @type {EachItem} */
          e.items.get(f).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (r?.has(s)) {
      s.f |= Ve;
      const o = document.createDocumentFragment();
      Jn(s, o);
    } else
      G(t[i], n);
  }
}
var ar;
function lr(e, t, n, r, i, s = null) {
  var o = e, f = /* @__PURE__ */ new Map();
  {
    var l = (
      /** @type {Element} */
      e
    );
    o = l.appendChild(Xe());
  }
  var u = null, v = /* @__PURE__ */ Gi(() => {
    var x = n();
    return cr(x) ? x : x == null ? [] : dn(x);
  }), h, _ = /* @__PURE__ */ new Map(), d = !0;
  function c(x) {
    (A.effect.f & de) === 0 && (A.pending.delete(x), A.fallback = u, Ss(A, h, o, t, r), u !== null && (h.length === 0 ? (u.f & Ve) === 0 ? Yn(u) : (u.f ^= Ve, It(u, null, o)) : ot(u, () => {
      u = null;
    })));
  }
  function m(x) {
    A.pending.delete(x);
  }
  var w = Hn(() => {
    h = /** @type {V[]} */
    p(v);
    for (var x = h.length, Y = /* @__PURE__ */ new Set(), ne = (
      /** @type {Batch} */
      k
    ), ye = Dr(), re = 0; re < x; re += 1) {
      var He = h[re], B = r(He, re), ie = d ? null : f.get(B);
      ie ? (ie.v && At(ie.v, He), ie.i && At(ie.i, re), ye && ne.unskip_effect(ie.e)) : (ie = Ts(
        f,
        d ? o : ar ?? (ar = Xe()),
        He,
        B,
        re,
        i,
        t,
        n
      ), d || (ie.e.f |= Ve), f.set(B, ie)), Y.add(B);
    }
    if (x === 0 && s && !u && (d ? u = ue(() => s(o)) : (u = ue(() => s(ar ?? (ar = Xe()))), u.f |= Ve)), x > Y.size && pi(), !d)
      if (_.set(ne, Y), ye) {
        for (const [hn, _n] of f)
          Y.has(hn) || ne.skip_effect(_n.e);
        ne.oncommit(c), ne.ondiscard(m);
      } else
        c(ne);
    p(v);
  }), A = { effect: w, items: f, pending: _, outrogroups: null, fallback: u };
  d = !1;
}
function Pt(e) {
  for (; e !== null && (e.f & be) === 0; )
    e = e.next;
  return e;
}
function Ss(e, t, n, r, i) {
  var s = t.length, o = e.items, f = Pt(e.effect.first), l, u = null, v = [], h = [], _, d, c, m;
  for (m = 0; m < s; m += 1) {
    if (_ = t[m], d = i(_, m), c = /** @type {EachItem} */
    o.get(d).e, e.outrogroups !== null)
      for (const B of e.outrogroups)
        B.pending.delete(c), B.done.delete(c);
    if ((c.f & U) !== 0 && Yn(c), (c.f & Ve) !== 0)
      if (c.f ^= Ve, c === f)
        It(c, null, n);
      else {
        var w = u ? u.next : f;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), Ye(e, u, c), Ye(e, c, w), It(c, w, n), u = c, v = [], h = [], f = Pt(u.next);
        continue;
      }
    if (c !== f) {
      if (l !== void 0 && l.has(c)) {
        if (v.length < h.length) {
          var A = h[0], x;
          u = A.prev;
          var Y = v[0], ne = v[v.length - 1];
          for (x = 0; x < v.length; x += 1)
            It(v[x], A, n);
          for (x = 0; x < h.length; x += 1)
            l.delete(h[x]);
          Ye(e, Y.prev, ne.next), Ye(e, u, Y), Ye(e, ne, A), f = A, u = ne, m -= 1, v = [], h = [];
        } else
          l.delete(c), It(c, f, n), Ye(e, c.prev, c.next), Ye(e, c, u === null ? e.effect.first : u.next), Ye(e, u, c), u = c;
        continue;
      }
      for (v = [], h = []; f !== null && f !== c; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(f), h.push(f), f = Pt(f.next);
      if (f === null)
        continue;
    }
    (c.f & Ve) === 0 && v.push(c), u = c, f = Pt(c.next);
  }
  if (e.outrogroups !== null) {
    for (const B of e.outrogroups)
      B.pending.size === 0 && (Dn(e, dn(B.done)), e.outrogroups?.delete(B));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (f !== null || l !== void 0) {
    var ye = [];
    if (l !== void 0)
      for (c of l)
        (c.f & U) === 0 && ye.push(c);
    for (; f !== null; )
      (f.f & U) === 0 && f !== e.fallback && ye.push(f), f = Pt(f.next);
    var re = ye.length;
    if (re > 0) {
      var He = s === 0 ? n : null;
      ks(e, ye, He);
    }
  }
}
function Ts(e, t, n, r, i, s, o, f) {
  var l = (o & Si) !== 0 ? (o & Ai) === 0 ? /* @__PURE__ */ Zi(n, !1, !1) : vt(n) : null, u = (o & Ti) !== 0 ? vt(i) : null;
  return {
    v: l,
    i: u,
    e: ue(() => (s(t, l ?? n, u ?? i, f), () => {
      e.delete(r);
    }))
  };
}
function It(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & Ve) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Kt(r)
      );
      if (s.before(r), r === i)
        return;
      r = o;
    }
}
function Ye(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function As(e, t) {
  as(() => {
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
      const i = Pr("style");
      i.id = t.hash, i.textContent = t.code, r.appendChild(i);
    }
  });
}
const fr = [...` 	
\r\f \v\uFEFF`];
function Ns(e, t, n) {
  var r = "" + e;
  if (n) {
    for (var i of Object.keys(n))
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var f = o + s;
          (o === 0 || fr.includes(r[o - 1])) && (f === r.length || fr.includes(r[f])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(f + 1) : o = f;
        }
  }
  return r === "" ? null : r;
}
function or(e, t, n, r, i, s) {
  var o = e.__className;
  if (o !== n || o === void 0) {
    var f = Ns(n, r, s);
    f == null ? e.removeAttribute("class") : e.className = f, e.__className = n;
  } else if (s && i !== s)
    for (var l in s) {
      var u = !!s[l];
      (i == null || u !== !!i[l]) && e.classList.toggle(l, u);
    }
  return s;
}
function Qt(e, t, n, r) {
  var i = (
    /** @type {V} */
    r
  ), s = !0, o = () => (s && (s = !1, i = /** @type {V} */
  r), i), f;
  f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = o());
  var l;
  return l = () => {
    var u = (
      /** @type {V} */
      e[t]
    );
    return u === void 0 ? o() : (s = !0, u);
  }, l;
}
const Cs = "5";
var ur;
typeof window < "u" && ((ur = window.__svelte ?? (window.__svelte = {})).v ?? (ur.v = /* @__PURE__ */ new Set())).add(Cs);
var Ms = /* @__PURE__ */ V('<div class="error svelte-dcga1m"> </div>'), Rs = /* @__PURE__ */ V('<div class="empty svelte-dcga1m">Loading marketplace…</div>'), Os = /* @__PURE__ */ V('<div class="empty svelte-dcga1m">No extensions available</div>'), Fs = /* @__PURE__ */ V('<p class="desc svelte-dcga1m"> </p>'), Ds = /* @__PURE__ */ V('<span class="price svelte-dcga1m"> </span>'), Ps = /* @__PURE__ */ V('<span class="tag svelte-dcga1m"> </span>'), Is = /* @__PURE__ */ V('<span class="owned svelte-dcga1m">Owned</span>'), zs = /* @__PURE__ */ V('<button class="buy-btn svelte-dcga1m">Buy</button>'), Ls = /* @__PURE__ */ V('<div class="card svelte-dcga1m"><h4 class="svelte-dcga1m"> </h4> <!> <div class="card-footer svelte-dcga1m"><!> <!> <!></div></div>'), qs = /* @__PURE__ */ V('<div class="grid svelte-dcga1m"></div>'), js = /* @__PURE__ */ V('<div class="empty svelte-dcga1m">No purchases yet</div>'), Vs = /* @__PURE__ */ V('<div class="meta svelte-dcga1m"> </div>'), Bs = /* @__PURE__ */ V('<span class="tag svelte-dcga1m"> </span>'), Hs = /* @__PURE__ */ V('<div class="card svelte-dcga1m"><h4 class="svelte-dcga1m"> </h4> <!> <!></div>'), Us = /* @__PURE__ */ V('<div class="grid svelte-dcga1m"></div>'), Ys = /* @__PURE__ */ V('<div class="rt-mp svelte-dcga1m"><div class="header svelte-dcga1m"><h2 class="svelte-dcga1m">Marketplace</h2> <span class="badge svelte-dcga1m"> </span> <button class="refresh svelte-dcga1m">↻</button></div> <!> <div class="tabs svelte-dcga1m"><button>Browse</button> <button> </button></div> <!></div>');
const Js = {
  hash: "svelte-dcga1m",
  code: ".rt-mp.svelte-dcga1m {font-family:system-ui, -apple-system, sans-serif;max-width:900px;margin:0 auto;padding:1.5rem;}.header.svelte-dcga1m {display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;flex-wrap:wrap;}.header.svelte-dcga1m h2:where(.svelte-dcga1m) {margin:0;font-size:1.5rem;}.badge.svelte-dcga1m {background:#e0e7ff;color:#3730a3;padding:0.15rem 0.5rem;border-radius:9999px;font-size:0.75rem;}.refresh.svelte-dcga1m {margin-left:auto;padding:0.35rem 0.75rem;background:#f3f4f6;border:1px solid #d1d5db;border-radius:0.5rem;cursor:pointer;font-size:0.8rem;}.tabs.svelte-dcga1m {display:flex;border-bottom:2px solid #e5e7eb;margin-bottom:1rem;}.tabs.svelte-dcga1m button:where(.svelte-dcga1m) {padding:0.5rem 1rem;background:none;border:none;border-bottom:2px solid transparent;margin-bottom:-2px;cursor:pointer;font-size:0.875rem;color:#6b7280;}.tabs.svelte-dcga1m button.active:where(.svelte-dcga1m) {border-bottom-color:#4f46e5;color:#4f46e5;font-weight:500;}.error.svelte-dcga1m {background:#fef2f2;color:#991b1b;border:1px solid #fecaca;padding:0.75rem;border-radius:0.5rem;margin-bottom:1rem;}.empty.svelte-dcga1m {color:#6b7280;text-align:center;padding:2rem;}.grid.svelte-dcga1m {display:grid;grid-template-columns:repeat(auto-fill, minmax(260px, 1fr));gap:0.75rem;}.card.svelte-dcga1m {background:#fff;border:1px solid #e5e7eb;border-radius:0.75rem;padding:1rem;}.card.svelte-dcga1m h4:where(.svelte-dcga1m) {margin:0 0 0.35rem;font-size:0.95rem;}.desc.svelte-dcga1m {margin:0 0 0.5rem;color:#6b7280;font-size:0.8rem;line-height:1.4;}.card-footer.svelte-dcga1m {display:flex;align-items:center;gap:0.5rem;margin-top:0.5rem;}.price.svelte-dcga1m {font-weight:600;font-size:0.9rem;}.tag.svelte-dcga1m {background:#f0fdf4;color:#166534;padding:0.1rem 0.4rem;border-radius:0.25rem;font-size:0.7rem;}.owned.svelte-dcga1m {color:#16a34a;font-size:0.8rem;font-weight:500;}.buy-btn.svelte-dcga1m {padding:0.3rem 0.7rem;background:#4f46e5;color:#fff;border:none;border-radius:0.375rem;cursor:pointer;font-size:0.8rem;margin-left:auto;}.buy-btn.svelte-dcga1m:hover {background:#4338ca;}.meta.svelte-dcga1m {font-size:0.75rem;color:#9ca3af;}"
};
function Ks(e, t) {
  pr(t, !0), As(e, Js);
  let n = Qt(t, "extensionId", 3, "market_place"), r = Qt(t, "version", 3, "");
  Qt(t, "principal", 3, ""), Qt(t, "isAuthenticated", 3, !0);
  let i = /* @__PURE__ */ te("browse"), s = /* @__PURE__ */ te(et([])), o = /* @__PURE__ */ te(et([])), f = /* @__PURE__ */ te(!0), l = /* @__PURE__ */ te("");
  async function u(S, C = "{}") {
    const Me = await t.backend.extension_sync_call(JSON.stringify({ extension_name: n(), function_name: S, args: C }));
    return JSON.parse(Me);
  }
  async function v(S, C = "{}") {
    const Me = await t.backend.extension_async_call(JSON.stringify({ extension_name: n(), function_name: S, args: C }));
    return JSON.parse(Me);
  }
  async function h() {
    L(f, !0), L(l, "");
    try {
      const [S, C] = await Promise.all([
        u("list_extensions", "{}").catch(() => ({ data: [] })),
        u("get_my_purchases", "{}").catch(() => ({ data: [] }))
      ]);
      L(s, S?.data ?? (Array.isArray(S) ? S : []), !0), L(o, C?.data ?? (Array.isArray(C) ? C : []), !0);
    } catch (S) {
      L(l, S?.message || String(S), !0);
    } finally {
      L(f, !1);
    }
  }
  async function _(S) {
    try {
      await v("buy_extension", JSON.stringify({ extension_id: S })), await h();
    } catch (C) {
      L(l, C?.message || String(C), !0);
    }
  }
  is(() => {
    h();
  });
  let d = /* @__PURE__ */ Qn(() => new Set(p(o).map((S) => S.extension_id || S.id)));
  var c = Ys(), m = z(c), w = se(z(m), 2), A = z(w), x = se(w, 2), Y = se(m, 2);
  {
    var ne = (S) => {
      var C = Ms(), Me = z(C);
      De(() => Ee(Me, p(l))), P(S, C);
    };
    xe(Y, (S) => {
      p(l) && S(ne);
    });
  }
  var ye = se(Y, 2), re = z(ye);
  let He;
  var B = se(re, 2);
  let ie;
  var hn = z(B), _n = se(ye, 2);
  {
    var Zr = (S) => {
      var C = Rs();
      P(S, C);
    }, Qr = (S) => {
      var C = sr(), Me = er(C);
      {
        var pn = (W) => {
          var Re = Os();
          P(W, Re);
        }, gn = (W) => {
          var Re = qs();
          lr(Re, 21, () => p(s), (Oe) => Oe.id || Oe.name, (Oe, R) => {
            var Mt = Ls(), Rt = z(Mt), mn = z(Rt), Ot = se(Rt, 2);
            {
              var wn = (D) => {
                var X = Fs(), Dt = z(X);
                De(() => Ee(Dt, p(R).description)), P(D, X);
              };
              xe(Ot, (D) => {
                p(R).description && D(wn);
              });
            }
            var bn = se(Ot, 2), Wt = z(bn);
            {
              var Fe = (D) => {
                var X = Ds(), Dt = z(X);
                De(() => Ee(Dt, p(R).price)), P(D, X);
              };
              xe(Wt, (D) => {
                p(R).price !== void 0 && D(Fe);
              });
            }
            var Ue = se(Wt, 2);
            {
              var Ft = (D) => {
                var X = Ps(), Dt = z(X);
                De(() => Ee(Dt, p(R).version)), P(D, X);
              };
              xe(Ue, (D) => {
                p(R).version && D(Ft);
              });
            }
            var ei = se(Ue, 2);
            {
              var ti = (D) => {
                var X = Is();
                P(D, X);
              }, ni = /* @__PURE__ */ Qn(() => p(d).has(p(R).id || p(R).name)), ri = (D) => {
                var X = zs();
                Xt("click", X, () => _(p(R).id || p(R).name)), P(D, X);
              };
              xe(ei, (D) => {
                p(ni) ? D(ti) : D(ri, -1);
              });
            }
            De(() => Ee(mn, p(R).name || p(R).id)), P(Oe, Mt);
          }), P(W, Re);
        };
        xe(Me, (W) => {
          p(s).length === 0 ? W(pn) : W(gn, -1);
        });
      }
      P(S, C);
    }, $r = (S) => {
      var C = sr(), Me = er(C);
      {
        var pn = (W) => {
          var Re = js();
          P(W, Re);
        }, gn = (W) => {
          var Re = Us();
          lr(Re, 21, () => p(o), (Oe) => Oe.id || Oe.extension_id, (Oe, R) => {
            var Mt = Hs(), Rt = z(Mt), mn = z(Rt), Ot = se(Rt, 2);
            {
              var wn = (Fe) => {
                var Ue = Vs(), Ft = z(Ue);
                De(() => Ee(Ft, `Purchased: ${p(R).purchased_at ?? ""}`)), P(Fe, Ue);
              };
              xe(Ot, (Fe) => {
                p(R).purchased_at && Fe(wn);
              });
            }
            var bn = se(Ot, 2);
            {
              var Wt = (Fe) => {
                var Ue = Bs(), Ft = z(Ue);
                De(() => Ee(Ft, p(R).version)), P(Fe, Ue);
              };
              xe(bn, (Fe) => {
                p(R).version && Fe(Wt);
              });
            }
            De(() => Ee(mn, p(R).name || p(R).extension_id || p(R).id)), P(Oe, Mt);
          }), P(W, Re);
        };
        xe(Me, (W) => {
          p(o).length === 0 ? W(pn) : W(gn, -1);
        });
      }
      P(S, C);
    };
    xe(_n, (S) => {
      p(f) ? S(Zr) : p(i) === "browse" ? S(Qr, 1) : p(i) === "purchased" && S($r, 2);
    });
  }
  De(() => {
    Ee(A, `v${r() ?? ""}`), x.disabled = p(f), He = or(re, 1, "svelte-dcga1m", null, He, { active: p(i) === "browse" }), ie = or(B, 1, "svelte-dcga1m", null, ie, { active: p(i) === "purchased" }), Ee(hn, `Purchased (${p(o).length ?? ""})`);
  }), Xt("click", x, h), Xt("click", re, () => L(i, "browse")), Xt("click", B, () => L(i, "purchased")), P(e, c), gr();
}
ps(["click"]);
function Xs(e, t) {
  const n = bs(Ks, { target: e, props: t });
  return {
    unmount() {
      try {
        Es(n);
      } catch {
      }
    }
  };
}
export {
  Xs as default
};
