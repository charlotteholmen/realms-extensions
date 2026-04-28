var dr = Object.defineProperty;
var cn = (e) => {
  throw TypeError(e);
};
var hr = (e, t, n) => t in e ? dr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var X = (e, t, n) => hr(e, typeof t != "symbol" ? t + "" : t, n), It = (e, t, n) => t.has(e) || cn("Cannot " + n);
var i = (e, t, n) => (It(e, t, "read from private field"), n ? n.call(e) : t.get(e)), p = (e, t, n) => t.has(e) ? cn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), m = (e, t, n, r) => (It(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), k = (e, t, n) => (It(e, t, "access private method"), n);
var vr = Array.isArray, _r = Array.prototype.indexOf, Ze = Array.prototype.includes, pr = Array.from, gr = Object.defineProperty, it = Object.getOwnPropertyDescriptor, mr = Object.prototype, br = Array.prototype, wr = Object.getPrototypeOf, dn = Object.isExtensible;
const yr = () => {
};
function Er(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function xn() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
const D = 2, Qe = 4, Ct = 8, Sn = 1 << 24, fe = 16, ge = 32, Se = 64, Bt = 128, G = 512, N = 1024, O = 2048, ae = 4096, J = 8192, ne = 16384, tt = 32768, hn = 1 << 25, Xe = 65536, Ut = 1 << 17, kr = 1 << 18, nt = 1 << 19, xr = 1 << 20, je = 65536, Nt = 1 << 21, ot = 1 << 22, xe = 1 << 23, jt = Symbol("$state"), de = new class extends Error {
  constructor() {
    super(...arguments);
    X(this, "name", "StaleReactionError");
    X(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Sr() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Tr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ar() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Nr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function qr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Rr() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Mr = 2, q = Symbol(), Or = "http://www.w3.org/1999/xhtml";
function Dr() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Pr() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Tn(e) {
  return e === this.v;
}
let re = null;
function $e(e) {
  re = e;
}
function An(e, t = !1, n) {
  re = {
    p: re,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      w
    ),
    l: null
  };
}
function Nn(e) {
  var t = (
    /** @type {ComponentContext} */
    re
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      fs(r);
  }
  return t.i = !0, re = t.p, /** @type {T} */
  {};
}
function qn() {
  return !0;
}
let Ne = [];
function Rn() {
  var e = Ne;
  Ne = [], Er(e);
}
function Be(e) {
  if (Ne.length === 0 && !lt) {
    var t = Ne;
    queueMicrotask(() => {
      t === Ne && Rn();
    });
  }
  Ne.push(e);
}
function Cr() {
  for (; Ne.length > 0; )
    Rn();
}
function Mn(e) {
  var t = w;
  if (t === null)
    return b.f |= xe, e;
  if ((t.f & tt) === 0 && (t.f & Qe) === 0)
    throw e;
  ke(e, t);
}
function ke(e, t) {
  for (; t !== null; ) {
    if ((t.f & Bt) !== 0) {
      if ((t.f & tt) === 0)
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
const Fr = -7169;
function S(e, t) {
  e.f = e.f & Fr | t;
}
function tn(e) {
  (e.f & G) !== 0 || e.deps === null ? S(e, N) : S(e, ae);
}
function On(e) {
  if (e !== null)
    for (const t of e)
      (t.f & D) === 0 || (t.f & je) === 0 || (t.f ^= je, On(
        /** @type {Derived} */
        t.deps
      ));
}
function Dn(e, t, n) {
  (e.f & O) !== 0 ? t.add(e) : (e.f & ae) !== 0 && n.add(e), On(e.deps), S(e, N);
}
const Ae = /* @__PURE__ */ new Set();
let g = null, ee = null, Wt = null, lt = !1, Lt = !1, Ye = null, yt = null;
var vn = 0;
let Ir = 1;
var Ue, We, Me, he, se, ct, L, dt, ye, ve, ie, Ke, Ge, Oe, A, Et, Pn, kt, Kt, xt, jr;
const Ot = class Ot {
  constructor() {
    p(this, A);
    X(this, "id", Ir++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    X(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    X(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    p(this, Ue, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    p(this, We, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    p(this, Me, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    p(this, he, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    p(this, se, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    p(this, ct, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    p(this, L, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    p(this, dt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    p(this, ye, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    p(this, ve, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    p(this, ie, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    p(this, Ke, /* @__PURE__ */ new Set());
    X(this, "is_fork", !1);
    p(this, Ge, !1);
    /** @type {Set<Batch>} */
    p(this, Oe, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    i(this, ie).has(t) || i(this, ie).set(t, { d: [], m: [] }), i(this, Ke).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = i(this, ie).get(t);
    if (r) {
      i(this, ie).delete(t);
      for (var s of r.d)
        S(s, O), n(s);
      for (s of r.m)
        S(s, ae), n(s);
    }
    i(this, Ke).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== q && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & xe) === 0 && (this.current.set(t, [n, r]), ee?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    g = this;
  }
  deactivate() {
    g = null, ee = null;
  }
  flush() {
    try {
      Lt = !0, g = this, k(this, A, kt).call(this);
    } finally {
      vn = 0, Wt = null, Ye = null, yt = null, Lt = !1, g = null, ee = null, Fe.clear();
    }
  }
  discard() {
    for (const t of i(this, We)) t(this);
    i(this, We).clear(), i(this, Me).clear(), Ae.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    i(this, dt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    let r = i(this, he).get(n) ?? 0;
    if (i(this, he).set(n, r + 1), t) {
      let s = i(this, se).get(n) ?? 0;
      i(this, se).set(n, s + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, r) {
    let s = i(this, he).get(n) ?? 0;
    if (s === 1 ? i(this, he).delete(n) : i(this, he).set(n, s - 1), t) {
      let l = i(this, se).get(n) ?? 0;
      l === 1 ? i(this, se).delete(n) : i(this, se).set(n, l - 1);
    }
    i(this, Ge) || r || (m(this, Ge, !0), Be(() => {
      m(this, Ge, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      i(this, ye).add(r);
    for (const r of n)
      i(this, ve).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    i(this, Ue).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    i(this, We).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    i(this, Me).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of i(this, Me)) t(this);
    i(this, Me).clear();
  }
  settled() {
    return (i(this, ct) ?? m(this, ct, xn())).promise;
  }
  static ensure() {
    if (g === null) {
      const t = g = new Ot();
      Lt || (Ae.add(g), lt || Be(() => {
        g === t && t.flush();
      }));
    }
    return g;
  }
  apply() {
    {
      ee = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Wt = t, t.b?.is_pending && (t.f & (Qe | Ct | Sn)) !== 0 && (t.f & tt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (Ye !== null && n === w && (b === null || (b.f & D) === 0))
        return;
      if ((r & (Se | ge)) !== 0) {
        if ((r & N) === 0)
          return;
        n.f ^= N;
      }
    }
    i(this, L).push(n);
  }
};
Ue = new WeakMap(), We = new WeakMap(), Me = new WeakMap(), he = new WeakMap(), se = new WeakMap(), ct = new WeakMap(), L = new WeakMap(), dt = new WeakMap(), ye = new WeakMap(), ve = new WeakMap(), ie = new WeakMap(), Ke = new WeakMap(), Ge = new WeakMap(), Oe = new WeakMap(), A = new WeakSet(), Et = function() {
  return this.is_fork || i(this, se).size > 0;
}, Pn = function() {
  for (const r of i(this, Oe))
    for (const s of i(r, se).keys()) {
      for (var t = !1, n = s; n.parent !== null; ) {
        if (i(this, ie).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, kt = function() {
  var o;
  if (vn++ > 1e3 && (Ae.delete(this), zr()), !k(this, A, Et).call(this)) {
    for (const f of i(this, ye))
      i(this, ve).delete(f), S(f, O), this.schedule(f);
    for (const f of i(this, ve))
      S(f, ae), this.schedule(f);
  }
  const t = i(this, L);
  m(this, L, []), this.apply();
  var n = Ye = [], r = [], s = yt = [];
  for (const f of t)
    try {
      k(this, A, Kt).call(this, f, n, r);
    } catch (u) {
      throw In(f), u;
    }
  if (g = null, s.length > 0) {
    var l = Ot.ensure();
    for (const f of s)
      l.schedule(f);
  }
  if (Ye = null, yt = null, k(this, A, Et).call(this) || k(this, A, Pn).call(this)) {
    k(this, A, xt).call(this, r), k(this, A, xt).call(this, n);
    for (const [f, u] of i(this, ie))
      Fn(f, u);
  } else {
    i(this, he).size === 0 && Ae.delete(this), i(this, ye).clear(), i(this, ve).clear();
    for (const f of i(this, Ue)) f(this);
    i(this, Ue).clear(), _n(r), _n(n), i(this, ct)?.resolve();
  }
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    g
  );
  if (i(this, L).length > 0) {
    const f = a ?? (a = this);
    i(f, L).push(...i(this, L).filter((u) => !i(f, L).includes(u)));
  }
  a !== null && (Ae.add(a), k(o = a, A, kt).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Kt = function(t, n, r) {
  t.f ^= N;
  for (var s = t.first; s !== null; ) {
    var l = s.f, a = (l & (ge | Se)) !== 0, o = a && (l & N) !== 0, f = o || (l & J) !== 0 || i(this, ie).has(s);
    if (!f && s.fn !== null) {
      a ? s.f ^= N : (l & Qe) !== 0 ? n.push(s) : gt(s) && ((l & fe) !== 0 && i(this, ve).add(s), et(s));
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
xt = function(t) {
  for (var n = 0; n < t.length; n += 1)
    Dn(t[n], i(this, ye), i(this, ve));
}, jr = function() {
  var h, _, v;
  for (const c of Ae) {
    var t = c.id < this.id, n = [];
    for (const [d, [E, y]] of this.current) {
      if (c.current.has(d)) {
        var r = (
          /** @type {[any, boolean]} */
          c.current.get(d)[0]
        );
        if (t && E !== r)
          c.current.set(d, [E, y]);
        else
          continue;
      }
      n.push(d);
    }
    var s = [...c.current.keys()].filter((d) => !this.current.has(d));
    if (s.length === 0)
      t && c.discard();
    else if (n.length > 0) {
      if (t)
        for (const d of i(this, Ke))
          c.unskip_effect(d, (E) => {
            var y;
            (E.f & (fe | ot)) !== 0 ? c.schedule(E) : k(y = c, A, xt).call(y, [E]);
          });
      c.activate();
      var l = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
      for (var o of n)
        Cn(o, s, l, a);
      a = /* @__PURE__ */ new Map();
      var f = [...c.current.keys()].filter(
        (d) => this.current.has(d) ? (
          /** @type {[any, boolean]} */
          this.current.get(d)[0] !== d
        ) : !0
      );
      for (const d of i(this, dt))
        (d.f & (ne | J | Ut)) === 0 && nn(d, f, a) && ((d.f & (ot | fe)) !== 0 ? (S(d, O), c.schedule(d)) : i(c, ye).add(d));
      if (i(c, L).length > 0) {
        c.apply();
        for (var u of i(c, L))
          k(h = c, A, Kt).call(h, u, [], []);
        m(c, L, []);
      }
      c.deactivate();
    }
  }
  for (const c of Ae)
    i(c, Oe).has(this) && (i(c, Oe).delete(this), i(c, Oe).size === 0 && !k(_ = c, A, Et).call(_) && (c.activate(), k(v = c, A, kt).call(v)));
};
let Le = Ot;
function Lr(e) {
  var t = lt;
  lt = !0;
  try {
    for (var n; ; ) {
      if (Cr(), g === null)
        return (
          /** @type {T} */
          n
        );
      g.flush();
    }
  } finally {
    lt = t;
  }
}
function zr() {
  try {
    Tr();
  } catch (e) {
    ke(e, Wt);
  }
}
let ue = null;
function _n(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (ne | J)) === 0 && gt(r) && (ue = /* @__PURE__ */ new Set(), et(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Qn(r), ue?.size > 0)) {
        Fe.clear();
        for (const s of ue) {
          if ((s.f & (ne | J)) !== 0) continue;
          const l = [s];
          let a = s.parent;
          for (; a !== null; )
            ue.has(a) && (ue.delete(a), l.push(a)), a = a.parent;
          for (let o = l.length - 1; o >= 0; o--) {
            const f = l[o];
            (f.f & (ne | J)) === 0 && et(f);
          }
        }
        ue.clear();
      }
    }
    ue = null;
  }
}
function Cn(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const l = s.f;
      (l & D) !== 0 ? Cn(
        /** @type {Derived} */
        s,
        t,
        n,
        r
      ) : (l & (ot | fe)) !== 0 && (l & O) === 0 && nn(s, t, r) && (S(s, O), rn(
        /** @type {Effect} */
        s
      ));
    }
}
function nn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Ze.call(t, s))
        return !0;
      if ((s.f & D) !== 0 && nn(
        /** @type {Derived} */
        s,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          s,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function rn(e) {
  g.schedule(e);
}
function Fn(e, t) {
  if (!((e.f & ge) !== 0 && (e.f & N) !== 0)) {
    (e.f & O) !== 0 ? t.d.push(e) : (e.f & ae) !== 0 && t.m.push(e), S(e, N);
    for (var n = e.first; n !== null; )
      Fn(n, t), n = n.next;
  }
}
function In(e) {
  S(e, N);
  for (var t = e.first; t !== null; )
    In(t), t = t.next;
}
function Vr(e) {
  let t = 0, n = Ft(0), r;
  return () => {
    an() && (M(n), Gn(() => (t === 0 && (r = fr(() => e(() => ft(n)))), t += 1, () => {
      Be(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, ft(n));
      });
    })));
  };
}
var Hr = Xe | nt;
function Yr(e, t, n, r) {
  new Br(e, t, n, r);
}
var B, en, U, De, C, W, P, z, _e, Pe, Ee, Je, ht, vt, pe, Dt, x, Ur, Wr, Kr, Gt, St, Tt, Jt, Zt;
class Br {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, s) {
    p(this, x);
    /** @type {Boundary | null} */
    X(this, "parent");
    X(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    X(this, "transform_error");
    /** @type {TemplateNode} */
    p(this, B);
    /** @type {TemplateNode | null} */
    p(this, en, null);
    /** @type {BoundaryProps} */
    p(this, U);
    /** @type {((anchor: Node) => void)} */
    p(this, De);
    /** @type {Effect} */
    p(this, C);
    /** @type {Effect | null} */
    p(this, W, null);
    /** @type {Effect | null} */
    p(this, P, null);
    /** @type {Effect | null} */
    p(this, z, null);
    /** @type {DocumentFragment | null} */
    p(this, _e, null);
    p(this, Pe, 0);
    p(this, Ee, 0);
    p(this, Je, !1);
    /** @type {Set<Effect>} */
    p(this, ht, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    p(this, vt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    p(this, pe, null);
    p(this, Dt, Vr(() => (m(this, pe, Ft(i(this, Pe))), () => {
      m(this, pe, null);
    })));
    m(this, B, t), m(this, U, n), m(this, De, (l) => {
      var a = (
        /** @type {Effect} */
        w
      );
      a.b = this, a.f |= Bt, r(l);
    }), this.parent = /** @type {Effect} */
    w.b, this.transform_error = s ?? this.parent?.transform_error ?? ((l) => l), m(this, C, Jn(() => {
      k(this, x, Gt).call(this);
    }, Hr));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Dn(t, i(this, ht), i(this, vt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!i(this, U).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    k(this, x, Jt).call(this, t, n), m(this, Pe, i(this, Pe) + t), !(!i(this, pe) || i(this, Je)) && (m(this, Je, !0), Be(() => {
      m(this, Je, !1), i(this, pe) && Rt(i(this, pe), i(this, Pe));
    }));
  }
  get_effect_pending() {
    return i(this, Dt).call(this), M(
      /** @type {Source<number>} */
      i(this, pe)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!i(this, U).onerror && !i(this, U).failed)
      throw t;
    g?.is_fork ? (i(this, W) && g.skip_effect(i(this, W)), i(this, P) && g.skip_effect(i(this, P)), i(this, z) && g.skip_effect(i(this, z)), g.on_fork_commit(() => {
      k(this, x, Zt).call(this, t);
    })) : k(this, x, Zt).call(this, t);
  }
}
B = new WeakMap(), en = new WeakMap(), U = new WeakMap(), De = new WeakMap(), C = new WeakMap(), W = new WeakMap(), P = new WeakMap(), z = new WeakMap(), _e = new WeakMap(), Pe = new WeakMap(), Ee = new WeakMap(), Je = new WeakMap(), ht = new WeakMap(), vt = new WeakMap(), pe = new WeakMap(), Dt = new WeakMap(), x = new WeakSet(), Ur = function() {
  try {
    m(this, W, ce(() => i(this, De).call(this, i(this, B))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Wr = function(t) {
  const n = i(this, U).failed;
  n && m(this, z, ce(() => {
    n(
      i(this, B),
      () => t,
      () => () => {
      }
    );
  }));
}, Kr = function() {
  const t = i(this, U).pending;
  t && (this.is_pending = !0, m(this, P, ce(() => t(i(this, B)))), Be(() => {
    var n = m(this, _e, document.createDocumentFragment()), r = Mt();
    n.append(r), m(this, W, k(this, x, Tt).call(this, () => ce(() => i(this, De).call(this, r)))), i(this, Ee) === 0 && (i(this, B).before(n), m(this, _e, null), at(
      /** @type {Effect} */
      i(this, P),
      () => {
        m(this, P, null);
      }
    ), k(this, x, St).call(
      this,
      /** @type {Batch} */
      g
    ));
  }));
}, Gt = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), m(this, Ee, 0), m(this, Pe, 0), m(this, W, ce(() => {
      i(this, De).call(this, i(this, B));
    })), i(this, Ee) > 0) {
      var t = m(this, _e, document.createDocumentFragment());
      er(i(this, W), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        i(this, U).pending
      );
      m(this, P, ce(() => n(i(this, B))));
    } else
      k(this, x, St).call(
        this,
        /** @type {Batch} */
        g
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
St = function(t) {
  this.is_pending = !1, t.transfer_effects(i(this, ht), i(this, vt));
}, /**
 * @template T
 * @param {() => T} fn
 */
Tt = function(t) {
  var n = w, r = b, s = re;
  oe(i(this, C)), Q(i(this, C)), $e(i(this, C).ctx);
  try {
    return Le.ensure(), t();
  } catch (l) {
    return Mn(l), null;
  } finally {
    oe(n), Q(r), $e(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Jt = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && k(r = this.parent, x, Jt).call(r, t, n);
    return;
  }
  m(this, Ee, i(this, Ee) + t), i(this, Ee) === 0 && (k(this, x, St).call(this, n), i(this, P) && at(i(this, P), () => {
    m(this, P, null);
  }), i(this, _e) && (i(this, B).before(i(this, _e)), m(this, _e, null)));
}, /**
 * @param {unknown} error
 */
Zt = function(t) {
  i(this, W) && (H(i(this, W)), m(this, W, null)), i(this, P) && (H(i(this, P)), m(this, P, null)), i(this, z) && (H(i(this, z)), m(this, z, null));
  var n = i(this, U).onerror;
  let r = i(this, U).failed;
  var s = !1, l = !1;
  const a = () => {
    if (s) {
      Pr();
      return;
    }
    s = !0, l && Rr(), i(this, z) !== null && at(i(this, z), () => {
      m(this, z, null);
    }), k(this, x, Tt).call(this, () => {
      k(this, x, Gt).call(this);
    });
  }, o = (f) => {
    try {
      l = !0, n?.(f, a), l = !1;
    } catch (u) {
      ke(u, i(this, C) && i(this, C).parent);
    }
    r && m(this, z, k(this, x, Tt).call(this, () => {
      try {
        return ce(() => {
          var u = (
            /** @type {Effect} */
            w
          );
          u.b = this, u.f |= Bt, r(
            i(this, B),
            () => f,
            () => a
          );
        });
      } catch (u) {
        return ke(
          u,
          /** @type {Effect} */
          i(this, C).parent
        ), null;
      }
    }));
  };
  Be(() => {
    var f;
    try {
      f = this.transform_error(t);
    } catch (u) {
      ke(u, i(this, C) && i(this, C).parent);
      return;
    }
    f !== null && typeof f == "object" && typeof /** @type {any} */
    f.then == "function" ? f.then(
      o,
      /** @param {unknown} e */
      (u) => ke(u, i(this, C) && i(this, C).parent)
    ) : o(f);
  });
};
function Gr(e, t, n, r) {
  const s = Zr;
  var l = e.filter((v) => !v.settled);
  if (n.length === 0 && l.length === 0) {
    r(t.map(s));
    return;
  }
  var a = (
    /** @type {Effect} */
    w
  ), o = Jr(), f = l.length === 1 ? l[0].promise : l.length > 1 ? Promise.all(l.map((v) => v.promise)) : null;
  function u(v) {
    o();
    try {
      r(v);
    } catch (c) {
      (a.f & ne) === 0 && ke(c, a);
    }
    qt();
  }
  if (n.length === 0) {
    f.then(() => u(t.map(s)));
    return;
  }
  var h = jn();
  function _() {
    Promise.all(n.map((v) => /* @__PURE__ */ Qr(v))).then((v) => u([...t.map(s), ...v])).catch((v) => ke(v, a)).finally(() => h());
  }
  f ? f.then(() => {
    o(), _(), qt();
  }) : _();
}
function Jr() {
  var e = (
    /** @type {Effect} */
    w
  ), t = b, n = re, r = (
    /** @type {Batch} */
    g
  );
  return function(l = !0) {
    oe(e), Q(t), $e(n), l && (e.f & ne) === 0 && (r?.activate(), r?.apply());
  };
}
function qt(e = !0) {
  oe(null), Q(null), $e(null), e && g?.deactivate();
}
function jn() {
  var e = (
    /** @type {Effect} */
    w
  ), t = (
    /** @type {Boundary} */
    e.b
  ), n = (
    /** @type {Batch} */
    g
  ), r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (s = !1) => {
    t.update_pending_count(-1, n), n.decrement(r, e, s);
  };
}
// @__NO_SIDE_EFFECTS__
function Zr(e) {
  var t = D | O;
  return w !== null && (w.f |= nt), {
    ctx: re,
    deps: null,
    effects: null,
    equals: Tn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      q
    ),
    wv: 0,
    parent: w,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Qr(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    w
  );
  r === null && Sr();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = Ft(
    /** @type {V} */
    q
  ), a = !b, o = /* @__PURE__ */ new Map();
  return us(() => {
    var f = (
      /** @type {Effect} */
      w
    ), u = xn();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(qt);
    } catch (c) {
      u.reject(c), qt();
    }
    var h = (
      /** @type {Batch} */
      g
    );
    if (a) {
      if ((f.f & tt) !== 0)
        var _ = jn();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        o.get(h)?.reject(de), o.delete(h);
      else {
        for (const c of o.values())
          c.reject(de);
        o.clear();
      }
      o.set(h, u);
    }
    const v = (c, d = void 0) => {
      if (_) {
        var E = d === de;
        _(E);
      }
      if (!(d === de || (f.f & ne) !== 0)) {
        if (h.activate(), d)
          l.f |= xe, Rt(l, d);
        else {
          (l.f & xe) !== 0 && (l.f ^= xe), Rt(l, c);
          for (const [y, R] of o) {
            if (o.delete(y), y === h) break;
            R.reject(de);
          }
        }
        h.deactivate();
      }
    };
    u.promise.then(v, (c) => v(null, c || "unknown"));
  }), ls(() => {
    for (const f of o.values())
      f.reject(de);
  }), new Promise((f) => {
    function u(h) {
      function _() {
        h === s ? f(l) : u(s);
      }
      h.then(_, _);
    }
    u(s);
  });
}
function Xr(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      H(
        /** @type {Effect} */
        t[n]
      );
  }
}
function sn(e) {
  var t, n = w, r = e.parent;
  if (!ze && r !== null && (r.f & (ne | J)) !== 0)
    return Dr(), e.v;
  oe(r);
  try {
    e.f &= ~je, Xr(e), t = sr(e);
  } finally {
    oe(n);
  }
  return t;
}
function Ln(e) {
  var t = sn(e);
  if (!e.equals(t) && (e.wv = nr(), (!g?.is_fork || e.deps === null) && (g !== null ? g.capture(e, t, !0) : e.v = t, e.deps === null))) {
    S(e, N);
    return;
  }
  ze || (ee !== null ? (an() || g?.is_fork) && ee.set(e, t) : tn(e));
}
function $r(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(de), t.teardown = yr, t.ac = null, ut(t, 0), on(t));
}
function zn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && et(t);
}
let Qt = /* @__PURE__ */ new Set();
const Fe = /* @__PURE__ */ new Map();
let Vn = !1;
function Ft(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Tn,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function K(e, t) {
  const n = Ft(e);
  return vs(n), n;
}
function I(e, t, n = !1) {
  b !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!te || (b.f & Ut) !== 0) && qn() && (b.f & (D | fe | ot | Ut)) !== 0 && (Z === null || !Ze.call(Z, e)) && qr();
  let r = n ? st(t) : t;
  return Rt(e, r, yt);
}
function Rt(e, t, n = null) {
  if (!e.equals(t)) {
    Fe.set(e, ze ? t : e.v);
    var r = Le.ensure();
    if (r.capture(e, t), (e.f & D) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & O) !== 0 && sn(s), ee === null && tn(s);
    }
    e.wv = nr(), Hn(e, O, n), w !== null && (w.f & N) !== 0 && (w.f & (ge | Se)) === 0 && (Y === null ? _s([e]) : Y.push(e)), !r.is_fork && Qt.size > 0 && !Vn && es();
  }
  return t;
}
function es() {
  Vn = !1;
  for (const e of Qt)
    (e.f & N) !== 0 && S(e, ae), gt(e) && et(e);
  Qt.clear();
}
function ft(e) {
  I(e, e.v + 1);
}
function Hn(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var s = r.length, l = 0; l < s; l++) {
      var a = r[l], o = a.f, f = (o & O) === 0;
      if (f && S(a, t), (o & D) !== 0) {
        var u = (
          /** @type {Derived} */
          a
        );
        ee?.delete(u), (o & je) === 0 && (o & G && (w === null || (w.f & Nt) === 0) && (a.f |= je), Hn(u, ae, n));
      } else if (f) {
        var h = (
          /** @type {Effect} */
          a
        );
        (o & fe) !== 0 && ue !== null && ue.add(h), n !== null ? n.push(h) : rn(h);
      }
    }
}
function st(e) {
  if (typeof e != "object" || e === null || jt in e)
    return e;
  const t = wr(e);
  if (t !== mr && t !== br)
    return e;
  var n = /* @__PURE__ */ new Map(), r = vr(e), s = /* @__PURE__ */ K(0), l = Ie, a = (o) => {
    if (Ie === l)
      return o();
    var f = b, u = Ie;
    Q(null), bn(l);
    var h = o();
    return Q(f), bn(u), h;
  };
  return r && n.set("length", /* @__PURE__ */ K(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Ar();
        var h = n.get(f);
        return h === void 0 ? a(() => {
          var _ = /* @__PURE__ */ K(u.value);
          return n.set(f, _), _;
        }) : I(h, u.value, !0), !0;
      },
      deleteProperty(o, f) {
        var u = n.get(f);
        if (u === void 0) {
          if (f in o) {
            const h = a(() => /* @__PURE__ */ K(q));
            n.set(f, h), ft(s);
          }
        } else
          I(u, q), ft(s);
        return !0;
      },
      get(o, f, u) {
        if (f === jt)
          return e;
        var h = n.get(f), _ = f in o;
        if (h === void 0 && (!_ || it(o, f)?.writable) && (h = a(() => {
          var c = st(_ ? o[f] : q), d = /* @__PURE__ */ K(c);
          return d;
        }), n.set(f, h)), h !== void 0) {
          var v = M(h);
          return v === q ? void 0 : v;
        }
        return Reflect.get(o, f, u);
      },
      getOwnPropertyDescriptor(o, f) {
        var u = Reflect.getOwnPropertyDescriptor(o, f);
        if (u && "value" in u) {
          var h = n.get(f);
          h && (u.value = M(h));
        } else if (u === void 0) {
          var _ = n.get(f), v = _?.v;
          if (_ !== void 0 && v !== q)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return u;
      },
      has(o, f) {
        if (f === jt)
          return !0;
        var u = n.get(f), h = u !== void 0 && u.v !== q || Reflect.has(o, f);
        if (u !== void 0 || w !== null && (!h || it(o, f)?.writable)) {
          u === void 0 && (u = a(() => {
            var v = h ? st(o[f]) : q, c = /* @__PURE__ */ K(v);
            return c;
          }), n.set(f, u));
          var _ = M(u);
          if (_ === q)
            return !1;
        }
        return h;
      },
      set(o, f, u, h) {
        var _ = n.get(f), v = f in o;
        if (r && f === "length")
          for (var c = u; c < /** @type {Source<number>} */
          _.v; c += 1) {
            var d = n.get(c + "");
            d !== void 0 ? I(d, q) : c in o && (d = a(() => /* @__PURE__ */ K(q)), n.set(c + "", d));
          }
        if (_ === void 0)
          (!v || it(o, f)?.writable) && (_ = a(() => /* @__PURE__ */ K(void 0)), I(_, st(u)), n.set(f, _));
        else {
          v = _.v !== q;
          var E = a(() => st(u));
          I(_, E);
        }
        var y = Reflect.getOwnPropertyDescriptor(o, f);
        if (y?.set && y.set.call(h, u), !v) {
          if (r && typeof f == "string") {
            var R = (
              /** @type {Source<number>} */
              n.get("length")
            ), be = Number(f);
            Number.isInteger(be) && be >= R.v && I(R, be + 1);
          }
          ft(s);
        }
        return !0;
      },
      ownKeys(o) {
        M(s);
        var f = Reflect.ownKeys(o).filter((_) => {
          var v = n.get(_);
          return v === void 0 || v.v !== q;
        });
        for (var [u, h] of n)
          h.v !== q && !(u in o) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        Nr();
      }
    }
  );
}
var pn, Yn, Bn, Un;
function ts() {
  if (pn === void 0) {
    pn = window, Yn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Bn = it(t, "firstChild").get, Un = it(t, "nextSibling").get, dn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), dn(n) && (n.__t = void 0);
  }
}
function Mt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Wn(e) {
  return (
    /** @type {TemplateNode | null} */
    Bn.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function ln(e) {
  return (
    /** @type {TemplateNode | null} */
    Un.call(e)
  );
}
function we(e, t) {
  return /* @__PURE__ */ Wn(e);
}
function He(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ ln(r);
  return r;
}
function ns() {
  return !1;
}
function Kn(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Or, e, void 0)
  );
}
let gn = !1;
function rs() {
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
function fn(e) {
  var t = b, n = w;
  Q(null), oe(null);
  try {
    return e();
  } finally {
    Q(t), oe(n);
  }
}
function ss(e, t, n, r = n) {
  e.addEventListener(t, () => fn(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), r(!0);
  } : e.__on_r = () => r(!0), rs();
}
function is(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function me(e, t) {
  var n = w;
  n !== null && (n.f & J) !== 0 && (e |= J);
  var r = {
    ctx: re,
    deps: null,
    nodes: null,
    f: e | O | G,
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
  g?.register_created_effect(r);
  var s = r;
  if ((e & Qe) !== 0)
    Ye !== null ? Ye.push(r) : Le.ensure().schedule(r);
  else if (t !== null) {
    try {
      et(r);
    } catch (a) {
      throw H(r), a;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & nt) === 0 && (s = s.first, (e & fe) !== 0 && (e & Xe) !== 0 && s !== null && (s.f |= Xe));
  }
  if (s !== null && (s.parent = n, n !== null && is(s, n), b !== null && (b.f & D) !== 0 && (e & Se) === 0)) {
    var l = (
      /** @type {Derived} */
      b
    );
    (l.effects ?? (l.effects = [])).push(s);
  }
  return r;
}
function an() {
  return b !== null && !te;
}
function ls(e) {
  const t = me(Ct, null);
  return S(t, N), t.teardown = e, t;
}
function fs(e) {
  return me(Qe | xr, e);
}
function as(e) {
  Le.ensure();
  const t = me(Se | nt, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? at(t, () => {
      H(t), r(void 0);
    }) : (H(t), r(void 0));
  });
}
function os(e) {
  return me(Qe, e);
}
function us(e) {
  return me(ot | nt, e);
}
function Gn(e, t = 0) {
  return me(Ct | t, e);
}
function zt(e, t = [], n = [], r = []) {
  Gr(r, t, n, (s) => {
    me(Ct, () => e(...s.map(M)));
  });
}
function Jn(e, t = 0) {
  var n = me(fe | t, e);
  return n;
}
function ce(e) {
  return me(ge | nt, e);
}
function Zn(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = ze, r = b;
    mn(!0), Q(null);
    try {
      t.call(null);
    } finally {
      mn(n), Q(r);
    }
  }
}
function on(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && fn(() => {
      s.abort(de);
    });
    var r = n.next;
    (n.f & Se) !== 0 ? n.parent = null : H(n, t), n = r;
  }
}
function cs(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & ge) === 0 && H(t), t = n;
  }
}
function H(e, t = !0) {
  var n = !1;
  (t || (e.f & kr) !== 0) && e.nodes !== null && e.nodes.end !== null && (ds(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), S(e, hn), on(e, t && !n), ut(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const l of r)
      l.stop();
  Zn(e), e.f ^= hn, e.f |= ne;
  var s = e.parent;
  s !== null && s.first !== null && Qn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ds(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ ln(e);
    e.remove(), e = n;
  }
}
function Qn(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function at(e, t, n = !0) {
  var r = [];
  Xn(e, r, !0);
  var s = () => {
    n && H(e), t && t();
  }, l = r.length;
  if (l > 0) {
    var a = () => --l || s();
    for (var o of r)
      o.out(a);
  } else
    s();
}
function Xn(e, t, n) {
  if ((e.f & J) === 0) {
    e.f ^= J;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && t.push(o);
    for (var s = e.first; s !== null; ) {
      var l = s.next;
      if ((s.f & Se) === 0) {
        var a = (s.f & Xe) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & ge) !== 0 && (e.f & fe) !== 0;
        Xn(s, t, a ? n : !1);
      }
      s = l;
    }
  }
}
function hs(e) {
  $n(e, !0);
}
function $n(e, t) {
  if ((e.f & J) !== 0) {
    e.f ^= J, (e.f & N) === 0 && (S(e, O), Le.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & Xe) !== 0 || (n.f & ge) !== 0;
      $n(n, s ? t : !1), n = r;
    }
    var l = e.nodes && e.nodes.t;
    if (l !== null)
      for (const a of l)
        (a.is_global || t) && a.in();
  }
}
function er(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var s = n === r ? null : /* @__PURE__ */ ln(n);
      t.append(n), n = s;
    }
}
let At = !1, ze = !1;
function mn(e) {
  ze = e;
}
let b = null, te = !1;
function Q(e) {
  b = e;
}
let w = null;
function oe(e) {
  w = e;
}
let Z = null;
function vs(e) {
  b !== null && (Z === null ? Z = [e] : Z.push(e));
}
let F = null, j = 0, Y = null;
function _s(e) {
  Y = e;
}
let tr = 1, qe = 0, Ie = qe;
function bn(e) {
  Ie = e;
}
function nr() {
  return ++tr;
}
function gt(e) {
  var t = e.f;
  if ((t & O) !== 0)
    return !0;
  if (t & D && (e.f &= ~je), (t & ae) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, s = 0; s < r; s++) {
      var l = n[s];
      if (gt(
        /** @type {Derived} */
        l
      ) && Ln(
        /** @type {Derived} */
        l
      ), l.wv > e.wv)
        return !0;
    }
    (t & G) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ee === null && S(e, N);
  }
  return !1;
}
function rr(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(Z !== null && Ze.call(Z, e)))
    for (var s = 0; s < r.length; s++) {
      var l = r[s];
      (l.f & D) !== 0 ? rr(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (n ? S(l, O) : (l.f & N) !== 0 && S(l, ae), rn(
        /** @type {Effect} */
        l
      ));
    }
}
function sr(e) {
  var E;
  var t = F, n = j, r = Y, s = b, l = Z, a = re, o = te, f = Ie, u = e.f;
  F = /** @type {null | Value[]} */
  null, j = 0, Y = null, b = (u & (ge | Se)) === 0 ? e : null, Z = null, $e(e.ctx), te = !1, Ie = ++qe, e.ac !== null && (fn(() => {
    e.ac.abort(de);
  }), e.ac = null);
  try {
    e.f |= Nt;
    var h = (
      /** @type {Function} */
      e.fn
    ), _ = h();
    e.f |= tt;
    var v = e.deps, c = g?.is_fork;
    if (F !== null) {
      var d;
      if (c || ut(e, j), v !== null && j > 0)
        for (v.length = j + F.length, d = 0; d < F.length; d++)
          v[j + d] = F[d];
      else
        e.deps = v = F;
      if (an() && (e.f & G) !== 0)
        for (d = j; d < v.length; d++)
          ((E = v[d]).reactions ?? (E.reactions = [])).push(e);
    } else !c && v !== null && j < v.length && (ut(e, j), v.length = j);
    if (qn() && Y !== null && !te && v !== null && (e.f & (D | ae | O)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      Y.length; d++)
        rr(
          Y[d],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (qe++, s.deps !== null)
        for (let y = 0; y < n; y += 1)
          s.deps[y].rv = qe;
      if (t !== null)
        for (const y of t)
          y.rv = qe;
      Y !== null && (r === null ? r = Y : r.push(.../** @type {Source[]} */
      Y));
    }
    return (e.f & xe) !== 0 && (e.f ^= xe), _;
  } catch (y) {
    return Mn(y);
  } finally {
    e.f ^= Nt, F = t, j = n, Y = r, b = s, Z = l, $e(a), te = o, Ie = f;
  }
}
function ps(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = _r.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & D) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (F === null || !Ze.call(F, t))) {
    var l = (
      /** @type {Derived} */
      t
    );
    (l.f & G) !== 0 && (l.f ^= G, l.f &= ~je), l.v !== q && tn(l), $r(l), ut(l, 0);
  }
}
function ut(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      ps(e, n[r]);
}
function et(e) {
  var t = e.f;
  if ((t & ne) === 0) {
    S(e, N);
    var n = w, r = At;
    w = e, At = !0;
    try {
      (t & (fe | Sn)) !== 0 ? cs(e) : on(e), Zn(e);
      var s = sr(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = tr;
      var l;
    } finally {
      At = r, w = n;
    }
  }
}
async function gs() {
  await Promise.resolve(), Lr();
}
function M(e) {
  var t = e.f, n = (t & D) !== 0;
  if (b !== null && !te) {
    var r = w !== null && (w.f & ne) !== 0;
    if (!r && (Z === null || !Ze.call(Z, e))) {
      var s = b.deps;
      if ((b.f & Nt) !== 0)
        e.rv < qe && (e.rv = qe, F === null && s !== null && s[j] === e ? j++ : F === null ? F = [e] : F.push(e));
      else {
        (b.deps ?? (b.deps = [])).push(e);
        var l = e.reactions;
        l === null ? e.reactions = [b] : Ze.call(l, b) || l.push(b);
      }
    }
  }
  if (ze && Fe.has(e))
    return Fe.get(e);
  if (n) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (ze) {
      var o = a.v;
      return ((a.f & N) === 0 && a.reactions !== null || lr(a)) && (o = sn(a)), Fe.set(a, o), o;
    }
    var f = (a.f & G) === 0 && !te && b !== null && (At || (b.f & G) !== 0), u = (a.f & tt) === 0;
    gt(a) && (f && (a.f |= G), Ln(a)), f && !u && (zn(a), ir(a));
  }
  if (ee?.has(e))
    return ee.get(e);
  if ((e.f & xe) !== 0)
    throw e.v;
  return e.v;
}
function ir(e) {
  if (e.f |= G, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & D) !== 0 && (t.f & G) === 0 && (zn(
        /** @type {Derived} */
        t
      ), ir(
        /** @type {Derived} */
        t
      ));
}
function lr(e) {
  if (e.v === q) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Fe.has(t) || (t.f & D) !== 0 && lr(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function fr(e) {
  var t = te;
  try {
    return te = !0, e();
  } finally {
    te = t;
  }
}
const ms = ["touchstart", "touchmove"];
function bs(e) {
  return ms.includes(e);
}
const Re = Symbol("events"), ar = /* @__PURE__ */ new Set(), Xt = /* @__PURE__ */ new Set();
function ws(e, t, n) {
  (t[Re] ?? (t[Re] = {}))[e] = n;
}
function ys(e) {
  for (var t = 0; t < e.length; t++)
    ar.add(e[t]);
  for (var n of Xt)
    n(e);
}
let wn = null;
function yn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, s = e.composedPath?.() || [], l = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  wn = e;
  var a = 0, o = wn === e && e[Re];
  if (o) {
    var f = s.indexOf(o);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Re] = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    f <= u && (a = f);
  }
  if (l = /** @type {Element} */
  s[a] || e.target, l !== t) {
    gr(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || n;
      }
    });
    var h = b, _ = w;
    Q(null), oe(null);
    try {
      for (var v, c = []; l !== null; ) {
        var d = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var E = l[Re]?.[r];
          E != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l) && E.call(l, e);
        } catch (y) {
          v ? c.push(y) : v = y;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        l = d;
      }
      if (v) {
        for (let y of c)
          queueMicrotask(() => {
            throw y;
          });
        throw v;
      }
    } finally {
      e[Re] = t, delete e.currentTarget, Q(h), oe(_);
    }
  }
}
const Es = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function ks(e) {
  return (
    /** @type {string} */
    Es?.createHTML(e) ?? e
  );
}
function xs(e) {
  var t = Kn("template");
  return t.innerHTML = ks(e.replaceAll("<!>", "<!---->")), t.content;
}
function Ss(e, t) {
  var n = (
    /** @type {Effect} */
    w
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function un(e, t) {
  var n = (t & Mr) !== 0, r, s = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = xs(s ? e : "<!>" + e), r = /** @type {TemplateNode} */
    /* @__PURE__ */ Wn(r));
    var l = (
      /** @type {TemplateNode} */
      n || Yn ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return Ss(l, l), l;
  };
}
function Vt(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function mt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function Ts(e, t) {
  return As(e, t);
}
const bt = /* @__PURE__ */ new Map();
function As(e, { target: t, anchor: n, props: r = {}, events: s, context: l, intro: a = !0, transformError: o }) {
  ts();
  var f = void 0, u = as(() => {
    var h = n ?? t.appendChild(Mt());
    Yr(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (c) => {
        An({});
        var d = (
          /** @type {ComponentContext} */
          re
        );
        l && (d.c = l), s && (r.$$events = s), f = e(c, r) || {}, Nn();
      },
      o
    );
    var _ = /* @__PURE__ */ new Set(), v = (c) => {
      for (var d = 0; d < c.length; d++) {
        var E = c[d];
        if (!_.has(E)) {
          _.add(E);
          var y = bs(E);
          for (const Ve of [t, document]) {
            var R = bt.get(Ve);
            R === void 0 && (R = /* @__PURE__ */ new Map(), bt.set(Ve, R));
            var be = R.get(E);
            be === void 0 ? (Ve.addEventListener(E, yn, { passive: y }), R.set(E, 1)) : R.set(E, be + 1);
          }
        }
      }
    };
    return v(pr(ar)), Xt.add(v), () => {
      for (var c of _)
        for (const y of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            bt.get(y)
          ), E = (
            /** @type {number} */
            d.get(c)
          );
          --E == 0 ? (y.removeEventListener(c, yn), d.delete(c), d.size === 0 && bt.delete(y)) : d.set(c, E);
        }
      Xt.delete(v), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return $t.set(f, u), f;
}
let $t = /* @__PURE__ */ new WeakMap();
function Ns(e, t) {
  const n = $t.get(e);
  return n ? ($t.delete(e), n(t)) : Promise.resolve();
}
var $, le, V, Ce, _t, pt, Pt;
class qs {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    X(this, "anchor");
    /** @type {Map<Batch, Key>} */
    p(this, $, /* @__PURE__ */ new Map());
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
    p(this, le, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    p(this, V, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    p(this, Ce, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    p(this, _t, !0);
    /**
     * @param {Batch} batch
     */
    p(this, pt, (t) => {
      if (i(this, $).has(t)) {
        var n = (
          /** @type {Key} */
          i(this, $).get(t)
        ), r = i(this, le).get(n);
        if (r)
          hs(r), i(this, Ce).delete(n);
        else {
          var s = i(this, V).get(n);
          s && (i(this, le).set(n, s.effect), i(this, V).delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), r = s.effect);
        }
        for (const [l, a] of i(this, $)) {
          if (i(this, $).delete(l), l === t)
            break;
          const o = i(this, V).get(a);
          o && (H(o.effect), i(this, V).delete(a));
        }
        for (const [l, a] of i(this, le)) {
          if (l === n || i(this, Ce).has(l)) continue;
          const o = () => {
            if (Array.from(i(this, $).values()).includes(l)) {
              var u = document.createDocumentFragment();
              er(a, u), u.append(Mt()), i(this, V).set(l, { effect: a, fragment: u });
            } else
              H(a);
            i(this, Ce).delete(l), i(this, le).delete(l);
          };
          i(this, _t) || !r ? (i(this, Ce).add(l), at(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    p(this, Pt, (t) => {
      i(this, $).delete(t);
      const n = Array.from(i(this, $).values());
      for (const [r, s] of i(this, V))
        n.includes(r) || (H(s.effect), i(this, V).delete(r));
    });
    this.anchor = t, m(this, _t, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      g
    ), s = ns();
    if (n && !i(this, le).has(t) && !i(this, V).has(t))
      if (s) {
        var l = document.createDocumentFragment(), a = Mt();
        l.append(a), i(this, V).set(t, {
          effect: ce(() => n(a)),
          fragment: l
        });
      } else
        i(this, le).set(
          t,
          ce(() => n(this.anchor))
        );
    if (i(this, $).set(r, t), s) {
      for (const [o, f] of i(this, le))
        o === t ? r.unskip_effect(f) : r.skip_effect(f);
      for (const [o, f] of i(this, V))
        o === t ? r.unskip_effect(f.effect) : r.skip_effect(f.effect);
      r.oncommit(i(this, pt)), r.ondiscard(i(this, Pt));
    } else
      i(this, pt).call(this, r);
  }
}
$ = new WeakMap(), le = new WeakMap(), V = new WeakMap(), Ce = new WeakMap(), _t = new WeakMap(), pt = new WeakMap(), Pt = new WeakMap();
function En(e, t, n = !1) {
  var r = new qs(e), s = n ? Xe : 0;
  function l(a, o) {
    r.ensure(a, o);
  }
  Jn(() => {
    var a = !1;
    t((o, f = 0) => {
      a = !0, l(f, o);
    }), a || l(-1, null);
  }, s);
}
function Rs(e, t) {
  os(() => {
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
      const s = Kn("style");
      s.id = t.hash, s.textContent = t.code, r.appendChild(s);
    }
  });
}
function Ms(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  ss(e, "input", async (s) => {
    var l = s ? e.defaultValue : e.value;
    if (l = Ht(e) ? Yt(l) : l, n(l), g !== null && r.add(g), await gs(), l !== (l = t())) {
      var a = e.selectionStart, o = e.selectionEnd, f = e.value.length;
      if (e.value = l ?? "", o !== null) {
        var u = e.value.length;
        a === o && o === f && u > f ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = a, e.selectionEnd = Math.min(o, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  fr(t) == null && e.value && (n(Ht(e) ? Yt(e.value) : e.value), g !== null && r.add(g)), Gn(() => {
    var s = t();
    if (e === document.activeElement) {
      var l = (
        /** @type {Batch} */
        g
      );
      if (r.has(l))
        return;
    }
    Ht(e) && s === Yt(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function Ht(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Yt(e) {
  return e === "" ? null : +e;
}
function wt(e, t, n, r) {
  var s = (
    /** @type {V} */
    r
  ), l = !0, a = () => (l && (l = !1, s = /** @type {V} */
  r), s), o;
  o = /** @type {V} */
  e[t], o === void 0 && r !== void 0 && (o = a());
  var f;
  return f = () => {
    var u = (
      /** @type {V} */
      e[t]
    );
    return u === void 0 ? a() : (l = !0, u);
  }, f;
}
const Os = "5";
var kn;
typeof window < "u" && ((kn = window.__svelte ?? (window.__svelte = {})).v ?? (kn.v = /* @__PURE__ */ new Set())).add(Os);
var Ds = /* @__PURE__ */ un('<div class="result success svelte-1usqlc3"> </div>'), Ps = /* @__PURE__ */ un('<div class="result error svelte-1usqlc3"> </div>'), Cs = /* @__PURE__ */ un('<div class="rt-hw svelte-1usqlc3"><div class="header svelte-1usqlc3"><h2 class="svelte-1usqlc3">Hello World</h2> <span class="badge svelte-1usqlc3"> </span></div> <div class="card svelte-1usqlc3"><label class="svelte-1usqlc3">Your name <input type="text" placeholder="Enter your name" class="svelte-1usqlc3"/></label> <button class="svelte-1usqlc3"> </button> <!> <!></div></div>');
const Fs = {
  hash: "svelte-1usqlc3",
  code: ".rt-hw.svelte-1usqlc3 {font-family:system-ui, -apple-system, sans-serif;max-width:480px;margin:0 auto;padding:1.5rem;}.header.svelte-1usqlc3 {display:flex;align-items:center;gap:0.75rem;margin-bottom:1.5rem;}.header.svelte-1usqlc3 h2:where(.svelte-1usqlc3) {margin:0;font-size:1.5rem;}.badge.svelte-1usqlc3 {background:#e0e7ff;color:#3730a3;padding:0.15rem 0.5rem;border-radius:9999px;font-size:0.75rem;}.card.svelte-1usqlc3 {background:#fff;border:1px solid #e5e7eb;border-radius:0.75rem;padding:1.5rem;}label.svelte-1usqlc3 {display:block;font-size:0.875rem;font-weight:500;color:#374151;margin-bottom:0.5rem;}input.svelte-1usqlc3 {display:block;width:100%;margin-top:0.25rem;padding:0.5rem 0.75rem;border:1px solid #d1d5db;border-radius:0.5rem;font-size:0.875rem;box-sizing:border-box;}input.svelte-1usqlc3:focus {outline:none;border-color:#6366f1;box-shadow:0 0 0 2px rgba(99,102,241,0.2);}button.svelte-1usqlc3 {margin-top:1rem;padding:0.5rem 1.25rem;background:#4f46e5;color:#fff;border:none;border-radius:0.5rem;cursor:pointer;font-size:0.875rem;}button.svelte-1usqlc3:hover:not(:disabled) {background:#4338ca;}button.svelte-1usqlc3:disabled {opacity:0.5;cursor:not-allowed;}.result.svelte-1usqlc3 {margin-top:1rem;padding:0.75rem;border-radius:0.5rem;font-size:0.875rem;}.success.svelte-1usqlc3 {background:#ecfdf5;color:#065f46;border:1px solid #a7f3d0;}.error.svelte-1usqlc3 {background:#fef2f2;color:#991b1b;border:1px solid #fecaca;}"
};
function Is(e, t) {
  An(t, !0), Rs(e, Fs);
  let n = wt(t, "extensionId", 3, "hello_world"), r = wt(t, "version", 3, "");
  wt(t, "principal", 3, ""), wt(t, "isAuthenticated", 3, !0);
  let s = /* @__PURE__ */ K("World"), l = /* @__PURE__ */ K(""), a = /* @__PURE__ */ K(!1), o = /* @__PURE__ */ K("");
  async function f(T, Te = "") {
    const rt = await t.backend.extension_sync_call(JSON.stringify({ extension_name: n(), function_name: T, args: Te }));
    return JSON.parse(rt);
  }
  async function u() {
    I(a, !0), I(o, ""), I(l, "");
    try {
      const T = await f("greet", M(s));
      I(l, T?.data ?? T?.message ?? JSON.stringify(T), !0);
    } catch (T) {
      I(o, T?.message || String(T), !0);
    } finally {
      I(a, !1);
    }
  }
  var h = Cs(), _ = we(h), v = He(we(_), 2), c = we(v), d = He(_, 2), E = we(d), y = He(we(E)), R = He(E, 2), be = we(R), Ve = He(R, 2);
  {
    var or = (T) => {
      var Te = Ds(), rt = we(Te);
      zt(() => mt(rt, M(l))), Vt(T, Te);
    };
    En(Ve, (T) => {
      M(l) && T(or);
    });
  }
  var ur = He(Ve, 2);
  {
    var cr = (T) => {
      var Te = Ps(), rt = we(Te);
      zt(() => mt(rt, M(o))), Vt(T, Te);
    };
    En(ur, (T) => {
      M(o) && T(cr);
    });
  }
  zt(
    (T) => {
      mt(c, `v${r() ?? ""}`), R.disabled = T, mt(be, M(a) ? "Sending…" : "Say Hello");
    },
    [() => M(a) || !M(s).trim()]
  ), Ms(y, () => M(s), (T) => I(s, T)), ws("click", R, u), Vt(e, h), Nn();
}
ys(["click"]);
function zs(e, t) {
  const n = Ts(Is, { target: e, props: t });
  return {
    unmount() {
      try {
        Ns(n);
      } catch {
      }
    }
  };
}
export {
  zs as default
};
