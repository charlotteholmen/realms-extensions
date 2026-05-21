var rs = Object.defineProperty;
var Zn = (e) => {
  throw TypeError(e);
};
var ns = (e, t, r) => t in e ? rs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var We = (e, t, r) => ns(e, typeof t != "symbol" ? t + "" : t, r), sn = (e, t, r) => t.has(e) || Zn("Cannot " + r);
var s = (e, t, r) => (sn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), T = (e, t, r) => t.has(e) ? Zn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), N = (e, t, r, n) => (sn(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), q = (e, t, r) => (sn(e, t, "access private method"), r);
var En = Array.isArray, as = Array.prototype.indexOf, $t = Array.prototype.includes, Wr = Array.from, is = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, ss = Object.getOwnPropertyDescriptors, ls = Object.prototype, os = Array.prototype, ha = Object.getPrototypeOf, Qn = Object.isExtensible;
const us = () => {
};
function fs(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function _a() {
  var e, t, r = new Promise((n, a) => {
    e = n, t = a;
  });
  return { promise: r, resolve: e, reject: t };
}
function ds(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const ve = 2, er = 4, Jr = 8, ga = 1 << 24, at = 16, Ze = 32, Bt = 64, dn = 128, qe = 512, ae = 1024, ce = 2048, it = 4096, ye = 8192, ze = 16384, Ut = 32768, $n = 1 << 25, tr = 65536, cn = 1 << 17, cs = 1 << 18, ir = 1 << 19, vs = 1 << 20, ht = 1 << 25, Ht = 65536, vn = 1 << 21, wr = 1 << 22, wt = 1 << 23, br = Symbol("$state"), ut = new class extends Error {
  constructor() {
    super(...arguments);
    We(this, "name", "StaleReactionError");
    We(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function hs() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function _s(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function gs(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ps() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function bs(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ys() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function xs() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ms() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ws() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ks() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Es = 1, Ss = 2, As = 16, Cs = 1, Ts = 2, le = Symbol(), pa = "http://www.w3.org/1999/xhtml", Ms = "http://www.w3.org/2000/svg", Ps = "http://www.w3.org/1998/Math/MathML";
function Ns() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ds() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Is() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function ba(e) {
  return e === this.v;
}
function Rs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ya(e) {
  return !Rs(e, this.v);
}
let Ve = null;
function rr(e) {
  Ve = e;
}
function xa(e, t = !1, r) {
  Ve = {
    p: Ve,
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
function ma(e) {
  var t = (
    /** @type {ComponentContext} */
    Ve
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Ua(n);
  }
  return t.i = !0, Ve = t.p, /** @type {T} */
  {};
}
function wa() {
  return !0;
}
let At = [];
function ka() {
  var e = At;
  At = [], fs(e);
}
function Wt(e) {
  if (At.length === 0 && !yr) {
    var t = At;
    queueMicrotask(() => {
      t === At && ka();
    });
  }
  At.push(e);
}
function Os() {
  for (; At.length > 0; )
    ka();
}
function Ea(e) {
  var t = F;
  if (t === null)
    return D.f |= wt, e;
  if (!(t.f & Ut) && !(t.f & er))
    throw e;
  xt(e, t);
}
function xt(e, t) {
  for (; t !== null; ) {
    if (t.f & dn) {
      if (!(t.f & Ut))
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
const Fs = -7169;
function J(e, t) {
  e.f = e.f & Fs | t;
}
function Sn(e) {
  e.f & qe || e.deps === null ? J(e, ae) : J(e, it);
}
function Sa(e) {
  if (e !== null)
    for (const t of e)
      !(t.f & ve) || !(t.f & Ht) || (t.f ^= Ht, Sa(
        /** @type {Derived} */
        t.deps
      ));
}
function Aa(e, t, r) {
  e.f & ce ? t.add(e) : e.f & it && r.add(e), Sa(e.deps), J(e, ae);
}
const St = /* @__PURE__ */ new Set();
let C = null, Ke = null, hn = null, yr = !1, ln = !1, Yt = null, Or = null;
var ea = 0;
let js = 1;
var Jt, Kt, Pt, ft, tt, Er, De, Sr, bt, dt, rt, Xt, Zt, Nt, Q, Fr, Ca, jr, _n, Lr, Ls;
const Vr = class Vr {
  constructor() {
    T(this, Q);
    We(this, "id", js++);
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
    T(this, Jt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    T(this, Kt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    T(this, Pt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    T(this, ft, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    T(this, tt, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    T(this, Er, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    T(this, De, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    T(this, Sr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    T(this, bt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    T(this, dt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    T(this, rt, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    T(this, Xt, /* @__PURE__ */ new Set());
    We(this, "is_fork", !1);
    T(this, Zt, !1);
    /** @type {Set<Batch>} */
    T(this, Nt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    s(this, rt).has(t) || s(this, rt).set(t, { d: [], m: [] }), s(this, Xt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = s(this, rt).get(t);
    if (n) {
      s(this, rt).delete(t);
      for (var a of n.d)
        J(a, ce), r(a);
      for (a of n.m)
        J(a, it), r(a);
    }
    s(this, Xt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== le && !this.previous.has(t) && this.previous.set(t, t.v), t.f & wt || (this.current.set(t, [r, n]), Ke?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    C = this;
  }
  deactivate() {
    C = null, Ke = null;
  }
  flush() {
    try {
      ln = !0, C = this, q(this, Q, jr).call(this);
    } finally {
      ea = 0, hn = null, Yt = null, Or = null, ln = !1, C = null, Ke = null, Ot.clear();
    }
  }
  discard() {
    for (const t of s(this, Kt)) t(this);
    s(this, Kt).clear(), s(this, Pt).clear(), St.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    s(this, Sr).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = s(this, ft).get(r) ?? 0;
    if (s(this, ft).set(r, n + 1), t) {
      let a = s(this, tt).get(r) ?? 0;
      s(this, tt).set(r, a + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let a = s(this, ft).get(r) ?? 0;
    if (a === 1 ? s(this, ft).delete(r) : s(this, ft).set(r, a - 1), t) {
      let i = s(this, tt).get(r) ?? 0;
      i === 1 ? s(this, tt).delete(r) : s(this, tt).set(r, i - 1);
    }
    s(this, Zt) || n || (N(this, Zt, !0), Wt(() => {
      N(this, Zt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      s(this, bt).add(n);
    for (const n of r)
      s(this, dt).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    s(this, Jt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    s(this, Kt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    s(this, Pt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of s(this, Pt)) t(this);
    s(this, Pt).clear();
  }
  settled() {
    return (s(this, Er) ?? N(this, Er, _a())).promise;
  }
  static ensure() {
    if (C === null) {
      const t = C = new Vr();
      ln || (St.add(C), yr || Wt(() => {
        C === t && t.flush();
      }));
    }
    return C;
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
    if (hn = t, t.b?.is_pending && t.f & (er | Jr | ga) && !(t.f & Ut)) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Yt !== null && r === F && (D === null || !(D.f & ve)))
        return;
      if (n & (Bt | Ze)) {
        if (!(n & ae))
          return;
        r.f ^= ae;
      }
    }
    s(this, De).push(r);
  }
};
Jt = new WeakMap(), Kt = new WeakMap(), Pt = new WeakMap(), ft = new WeakMap(), tt = new WeakMap(), Er = new WeakMap(), De = new WeakMap(), Sr = new WeakMap(), bt = new WeakMap(), dt = new WeakMap(), rt = new WeakMap(), Xt = new WeakMap(), Zt = new WeakMap(), Nt = new WeakMap(), Q = new WeakSet(), Fr = function() {
  return this.is_fork || s(this, tt).size > 0;
}, Ca = function() {
  for (const n of s(this, Nt))
    for (const a of s(n, tt).keys()) {
      for (var t = !1, r = a; r.parent !== null; ) {
        if (s(this, rt).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, jr = function() {
  var l;
  if (ea++ > 1e3 && (St.delete(this), Hs()), !q(this, Q, Fr).call(this)) {
    for (const o of s(this, bt))
      s(this, dt).delete(o), J(o, ce), this.schedule(o);
    for (const o of s(this, dt))
      J(o, it), this.schedule(o);
  }
  const t = s(this, De);
  N(this, De, []), this.apply();
  var r = Yt = [], n = [], a = Or = [];
  for (const o of t)
    try {
      q(this, Q, _n).call(this, o, r, n);
    } catch (d) {
      throw Pa(o), d;
    }
  if (C = null, a.length > 0) {
    var i = Vr.ensure();
    for (const o of a)
      i.schedule(o);
  }
  if (Yt = null, Or = null, q(this, Q, Fr).call(this) || q(this, Q, Ca).call(this)) {
    q(this, Q, Lr).call(this, n), q(this, Q, Lr).call(this, r);
    for (const [o, d] of s(this, rt))
      Ma(o, d);
  } else {
    s(this, ft).size === 0 && St.delete(this), s(this, bt).clear(), s(this, dt).clear();
    for (const o of s(this, Jt)) o(this);
    s(this, Jt).clear(), ta(n), ta(r), s(this, Er)?.resolve();
  }
  var u = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    C
  );
  if (s(this, De).length > 0) {
    const o = u ?? (u = this);
    s(o, De).push(...s(this, De).filter((d) => !s(o, De).includes(d)));
  }
  u !== null && (St.add(u), q(l = u, Q, jr).call(l));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
_n = function(t, r, n) {
  t.f ^= ae;
  for (var a = t.first; a !== null; ) {
    var i = a.f, u = (i & (Ze | Bt)) !== 0, l = u && (i & ae) !== 0, o = l || (i & ye) !== 0 || s(this, rt).has(a);
    if (!o && a.fn !== null) {
      u ? a.f ^= ae : i & er ? r.push(a) : Nr(a) && (i & at && s(this, dt).add(a), ar(a));
      var d = a.first;
      if (d !== null) {
        a = d;
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
Lr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Aa(t[r], s(this, bt), s(this, dt));
}, Ls = function() {
  var _, p, b;
  for (const g of St) {
    var t = g.id < this.id, r = [];
    for (const [c, [E, M]] of this.current) {
      if (g.current.has(c)) {
        var n = (
          /** @type {[any, boolean]} */
          g.current.get(c)[0]
        );
        if (t && E !== n)
          g.current.set(c, [E, M]);
        else
          continue;
      }
      r.push(c);
    }
    var a = [...g.current.keys()].filter((c) => !this.current.has(c));
    if (a.length === 0)
      t && g.discard();
    else if (r.length > 0) {
      if (t)
        for (const c of s(this, Xt))
          g.unskip_effect(c, (E) => {
            var M;
            E.f & (at | wr) ? g.schedule(E) : q(M = g, Q, Lr).call(M, [E]);
          });
      g.activate();
      var i = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
      for (var l of r)
        Ta(l, a, i, u);
      u = /* @__PURE__ */ new Map();
      var o = [...g.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of s(this, Sr))
        !(c.f & (ze | ye | cn)) && An(c, o, u) && (c.f & (wr | at) ? (J(c, ce), g.schedule(c)) : s(g, bt).add(c));
      if (s(g, De).length > 0) {
        g.apply();
        for (var d of s(g, De))
          q(_ = g, Q, _n).call(_, d, [], []);
        N(g, De, []);
      }
      g.deactivate();
    }
  }
  for (const g of St)
    s(g, Nt).has(this) && (s(g, Nt).delete(this), s(g, Nt).size === 0 && !q(p = g, Q, Fr).call(p) && (g.activate(), q(b = g, Q, jr).call(b)));
};
let qt = Vr;
function Bs(e) {
  var t = yr;
  yr = !0;
  try {
    for (var r; ; ) {
      if (Os(), C === null)
        return (
          /** @type {T} */
          r
        );
      C.flush();
    }
  } finally {
    yr = t;
  }
}
function Hs() {
  try {
    ys();
  } catch (e) {
    xt(e, hn);
  }
}
let ot = null;
function ta(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if (!(n.f & (ze | ye)) && Nr(n) && (ot = /* @__PURE__ */ new Set(), ar(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Wa(n), ot?.size > 0)) {
        Ot.clear();
        for (const a of ot) {
          if (a.f & (ze | ye)) continue;
          const i = [a];
          let u = a.parent;
          for (; u !== null; )
            ot.has(u) && (ot.delete(u), i.push(u)), u = u.parent;
          for (let l = i.length - 1; l >= 0; l--) {
            const o = i[l];
            o.f & (ze | ye) || ar(o);
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
      i & ve ? Ta(
        /** @type {Derived} */
        a,
        t,
        r,
        n
      ) : i & (wr | at) && !(i & ce) && An(a, t, n) && (J(a, ce), Cn(
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
      if ($t.call(t, a))
        return !0;
      if (a.f & ve && An(
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
function Cn(e) {
  C.schedule(e);
}
function Ma(e, t) {
  if (!(e.f & Ze && e.f & ae)) {
    e.f & ce ? t.d.push(e) : e.f & it && t.m.push(e), J(e, ae);
    for (var r = e.first; r !== null; )
      Ma(r, t), r = r.next;
  }
}
function Pa(e) {
  J(e, ae);
  for (var t = e.first; t !== null; )
    Pa(t), t = t.next;
}
function qs(e) {
  let t = 0, r = zt(0), n;
  return () => {
    Nn() && (f(r), Va(() => (t === 0 && (n = ni(() => e(() => xr(r)))), t += 1, () => {
      Wt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, xr(r));
      });
    })));
  };
}
var zs = tr | ir;
function Us(e, t, r, n) {
  new Vs(e, t, r, n);
}
var je, kn, Le, Dt, ke, Be, be, Ie, ct, It, yt, Qt, Ar, Cr, vt, Gr, G, Gs, Ys, Ws, gn, Br, Hr, pn, bn;
class Vs {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, a) {
    T(this, G);
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
    T(this, je);
    /** @type {TemplateNode | null} */
    T(this, kn, null);
    /** @type {BoundaryProps} */
    T(this, Le);
    /** @type {((anchor: Node) => void)} */
    T(this, Dt);
    /** @type {Effect} */
    T(this, ke);
    /** @type {Effect | null} */
    T(this, Be, null);
    /** @type {Effect | null} */
    T(this, be, null);
    /** @type {Effect | null} */
    T(this, Ie, null);
    /** @type {DocumentFragment | null} */
    T(this, ct, null);
    T(this, It, 0);
    T(this, yt, 0);
    T(this, Qt, !1);
    /** @type {Set<Effect>} */
    T(this, Ar, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    T(this, Cr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    T(this, vt, null);
    T(this, Gr, qs(() => (N(this, vt, zt(s(this, It))), () => {
      N(this, vt, null);
    })));
    N(this, je, t), N(this, Le, r), N(this, Dt, (i) => {
      var u = (
        /** @type {Effect} */
        F
      );
      u.b = this, u.f |= dn, n(i);
    }), this.parent = /** @type {Effect} */
    F.b, this.transform_error = a ?? this.parent?.transform_error ?? ((i) => i), N(this, ke, Dn(() => {
      q(this, G, gn).call(this);
    }, zs));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Aa(t, s(this, Ar), s(this, Cr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!s(this, Le).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    q(this, G, pn).call(this, t, r), N(this, It, s(this, It) + t), !(!s(this, vt) || s(this, Qt)) && (N(this, Qt, !0), Wt(() => {
      N(this, Qt, !1), s(this, vt) && nr(s(this, vt), s(this, It));
    }));
  }
  get_effect_pending() {
    return s(this, Gr).call(this), f(
      /** @type {Source<number>} */
      s(this, vt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!s(this, Le).onerror && !s(this, Le).failed)
      throw t;
    C?.is_fork ? (s(this, Be) && C.skip_effect(s(this, Be)), s(this, be) && C.skip_effect(s(this, be)), s(this, Ie) && C.skip_effect(s(this, Ie)), C.on_fork_commit(() => {
      q(this, G, bn).call(this, t);
    })) : q(this, G, bn).call(this, t);
  }
}
je = new WeakMap(), kn = new WeakMap(), Le = new WeakMap(), Dt = new WeakMap(), ke = new WeakMap(), Be = new WeakMap(), be = new WeakMap(), Ie = new WeakMap(), ct = new WeakMap(), It = new WeakMap(), yt = new WeakMap(), Qt = new WeakMap(), Ar = new WeakMap(), Cr = new WeakMap(), vt = new WeakMap(), Gr = new WeakMap(), G = new WeakSet(), Gs = function() {
  try {
    N(this, Be, He(() => s(this, Dt).call(this, s(this, je))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Ys = function(t) {
  const r = s(this, Le).failed;
  r && N(this, Ie, He(() => {
    r(
      s(this, je),
      () => t,
      () => () => {
      }
    );
  }));
}, Ws = function() {
  const t = s(this, Le).pending;
  t && (this.is_pending = !0, N(this, be, He(() => t(s(this, je)))), Wt(() => {
    var r = N(this, ct, document.createDocumentFragment()), n = Ft();
    r.append(n), N(this, Be, q(this, G, Hr).call(this, () => He(() => s(this, Dt).call(this, n)))), s(this, yt) === 0 && (s(this, je).before(r), N(this, ct, null), jt(
      /** @type {Effect} */
      s(this, be),
      () => {
        N(this, be, null);
      }
    ), q(this, G, Br).call(
      this,
      /** @type {Batch} */
      C
    ));
  }));
}, gn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), N(this, yt, 0), N(this, It, 0), N(this, Be, He(() => {
      s(this, Dt).call(this, s(this, je));
    })), s(this, yt) > 0) {
      var t = N(this, ct, document.createDocumentFragment());
      On(s(this, Be), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        s(this, Le).pending
      );
      N(this, be, He(() => r(s(this, je))));
    } else
      q(this, G, Br).call(
        this,
        /** @type {Batch} */
        C
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
Br = function(t) {
  this.is_pending = !1, t.transfer_effects(s(this, Ar), s(this, Cr));
}, /**
 * @template T
 * @param {() => T} fn
 */
Hr = function(t) {
  var r = F, n = D, a = Ve;
  st(s(this, ke)), Ge(s(this, ke)), rr(s(this, ke).ctx);
  try {
    return qt.ensure(), t();
  } catch (i) {
    return Ea(i), null;
  } finally {
    st(r), Ge(n), rr(a);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
pn = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && q(n = this.parent, G, pn).call(n, t, r);
    return;
  }
  N(this, yt, s(this, yt) + t), s(this, yt) === 0 && (q(this, G, Br).call(this, r), s(this, be) && jt(s(this, be), () => {
    N(this, be, null);
  }), s(this, ct) && (s(this, je).before(s(this, ct)), N(this, ct, null)));
}, /**
 * @param {unknown} error
 */
bn = function(t) {
  s(this, Be) && (Se(s(this, Be)), N(this, Be, null)), s(this, be) && (Se(s(this, be)), N(this, be, null)), s(this, Ie) && (Se(s(this, Ie)), N(this, Ie, null));
  var r = s(this, Le).onerror;
  let n = s(this, Le).failed;
  var a = !1, i = !1;
  const u = () => {
    if (a) {
      Is();
      return;
    }
    a = !0, i && ks(), s(this, Ie) !== null && jt(s(this, Ie), () => {
      N(this, Ie, null);
    }), q(this, G, Hr).call(this, () => {
      q(this, G, gn).call(this);
    });
  }, l = (o) => {
    try {
      i = !0, r?.(o, u), i = !1;
    } catch (d) {
      xt(d, s(this, ke) && s(this, ke).parent);
    }
    n && N(this, Ie, q(this, G, Hr).call(this, () => {
      try {
        return He(() => {
          var d = (
            /** @type {Effect} */
            F
          );
          d.b = this, d.f |= dn, n(
            s(this, je),
            () => o,
            () => u
          );
        });
      } catch (d) {
        return xt(
          d,
          /** @type {Effect} */
          s(this, ke).parent
        ), null;
      }
    }));
  };
  Wt(() => {
    var o;
    try {
      o = this.transform_error(t);
    } catch (d) {
      xt(d, s(this, ke) && s(this, ke).parent);
      return;
    }
    o !== null && typeof o == "object" && typeof /** @type {any} */
    o.then == "function" ? o.then(
      l,
      /** @param {unknown} e */
      (d) => xt(d, s(this, ke) && s(this, ke).parent)
    ) : l(o);
  });
};
function Js(e, t, r, n) {
  const a = Tn;
  var i = e.filter((b) => !b.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(a));
    return;
  }
  var u = (
    /** @type {Effect} */
    F
  ), l = Ks(), o = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((b) => b.promise)) : null;
  function d(b) {
    l();
    try {
      n(b);
    } catch (g) {
      u.f & ze || xt(g, u);
    }
    zr();
  }
  if (r.length === 0) {
    o.then(() => d(t.map(a)));
    return;
  }
  var _ = Na();
  function p() {
    Promise.all(r.map((b) => /* @__PURE__ */ Xs(b))).then((b) => d([...t.map(a), ...b])).catch((b) => xt(b, u)).finally(() => _());
  }
  o ? o.then(() => {
    l(), p(), zr();
  }) : p();
}
function Ks() {
  var e = (
    /** @type {Effect} */
    F
  ), t = D, r = Ve, n = (
    /** @type {Batch} */
    C
  );
  return function(i = !0) {
    st(e), Ge(t), rr(r), i && !(e.f & ze) && (n?.activate(), n?.apply());
  };
}
function zr(e = !0) {
  st(null), Ge(null), rr(null), e && C?.deactivate();
}
function Na() {
  var e = (
    /** @type {Effect} */
    F
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    C
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (a = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, a);
  };
}
// @__NO_SIDE_EFFECTS__
function Tn(e) {
  var t = ve | ce;
  return F !== null && (F.f |= ir), {
    ctx: Ve,
    deps: null,
    effects: null,
    equals: ba,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      le
    ),
    wv: 0,
    parent: F,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Xs(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    F
  );
  n === null && hs();
  var a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = zt(
    /** @type {V} */
    le
  ), u = !D, l = /* @__PURE__ */ new Map();
  return fl(() => {
    var o = (
      /** @type {Effect} */
      F
    ), d = _a();
    a = d.promise;
    try {
      Promise.resolve(e()).then(d.resolve, d.reject).finally(zr);
    } catch (g) {
      d.reject(g), zr();
    }
    var _ = (
      /** @type {Batch} */
      C
    );
    if (u) {
      if (o.f & Ut)
        var p = Na();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        l.get(_)?.reject(ut), l.delete(_);
      else {
        for (const g of l.values())
          g.reject(ut);
        l.clear();
      }
      l.set(_, d);
    }
    const b = (g, c = void 0) => {
      if (p) {
        var E = c === ut;
        p(E);
      }
      if (!(c === ut || o.f & ze)) {
        if (_.activate(), c)
          i.f |= wt, nr(i, c);
        else {
          i.f & wt && (i.f ^= wt), nr(i, g);
          for (const [M, z] of l) {
            if (l.delete(M), M === _) break;
            z.reject(ut);
          }
        }
        _.deactivate();
      }
    };
    d.promise.then(b, (g) => b(null, g || "unknown"));
  }), za(() => {
    for (const o of l.values())
      o.reject(ut);
  }), new Promise((o) => {
    function d(_) {
      function p() {
        _ === a ? o(i) : d(a);
      }
      _.then(p, p);
    }
    d(a);
  });
}
// @__NO_SIDE_EFFECTS__
function dr(e) {
  const t = /* @__PURE__ */ Tn(e);
  return Xa(t), t;
}
// @__NO_SIDE_EFFECTS__
function Zs(e) {
  const t = /* @__PURE__ */ Tn(e);
  return t.equals = ya, t;
}
function Qs(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Se(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Mn(e) {
  var t, r = F, n = e.parent;
  if (!kt && n !== null && n.f & (ze | ye))
    return Ns(), e.v;
  st(n);
  try {
    e.f &= ~Ht, Qs(e), t = ei(e);
  } finally {
    st(r);
  }
  return t;
}
function Da(e) {
  var t = Mn(e);
  if (!e.equals(t) && (e.wv = Qa(), (!C?.is_fork || e.deps === null) && (C !== null ? C.capture(e, t, !0) : e.v = t, e.deps === null))) {
    J(e, ae);
    return;
  }
  kt || (Ke !== null ? (Nn() || C?.is_fork) && Ke.set(e, t) : Sn(e));
}
function $s(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(ut), t.teardown = us, t.ac = null, kr(t, 0), In(t));
}
function Ia(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && ar(t);
}
let yn = /* @__PURE__ */ new Set();
const Ot = /* @__PURE__ */ new Map();
let Ra = !1;
function zt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ba,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function O(e, t) {
  const r = zt(e);
  return Xa(r), r;
}
// @__NO_SIDE_EFFECTS__
function el(e, t = !1, r = !0) {
  const n = zt(e);
  return t || (n.equals = ya), n;
}
function y(e, t, r = !1) {
  D !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Xe || D.f & cn) && wa() && D.f & (ve | at | wr | cn) && (Ue === null || !$t.call(Ue, e)) && ws();
  let n = r ? Ct(t) : t;
  return nr(e, n, Or);
}
function nr(e, t, r = null) {
  if (!e.equals(t)) {
    Ot.set(e, kt ? t : e.v);
    var n = qt.ensure();
    if (n.capture(e, t), e.f & ve) {
      const a = (
        /** @type {Derived} */
        e
      );
      e.f & ce && Mn(a), Ke === null && Sn(a);
    }
    e.wv = Qa(), Oa(e, ce, r), F !== null && F.f & ae && !(F.f & (Ze | Bt)) && (Fe === null ? cl([e]) : Fe.push(e)), !n.is_fork && yn.size > 0 && !Ra && tl();
  }
  return t;
}
function tl() {
  Ra = !1;
  for (const e of yn)
    e.f & ae && J(e, it), Nr(e) && ar(e);
  yn.clear();
}
function xr(e) {
  y(e, e.v + 1);
}
function Oa(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, i = 0; i < a; i++) {
      var u = n[i], l = u.f, o = (l & ce) === 0;
      if (o && J(u, t), l & ve) {
        var d = (
          /** @type {Derived} */
          u
        );
        Ke?.delete(d), l & Ht || (l & qe && (u.f |= Ht), Oa(d, it, r));
      } else if (o) {
        var _ = (
          /** @type {Effect} */
          u
        );
        l & at && ot !== null && ot.add(_), r !== null ? r.push(_) : Cn(_);
      }
    }
}
function Ct(e) {
  if (typeof e != "object" || e === null || br in e)
    return e;
  const t = ha(e);
  if (t !== ls && t !== os)
    return e;
  var r = /* @__PURE__ */ new Map(), n = En(e), a = /* @__PURE__ */ O(0), i = Lt, u = (l) => {
    if (Lt === i)
      return l();
    var o = D, d = Lt;
    Ge(null), sa(i);
    var _ = l();
    return Ge(o), sa(d), _;
  };
  return n && r.set("length", /* @__PURE__ */ O(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, o, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && xs();
        var _ = r.get(o);
        return _ === void 0 ? u(() => {
          var p = /* @__PURE__ */ O(d.value);
          return r.set(o, p), p;
        }) : y(_, d.value, !0), !0;
      },
      deleteProperty(l, o) {
        var d = r.get(o);
        if (d === void 0) {
          if (o in l) {
            const _ = u(() => /* @__PURE__ */ O(le));
            r.set(o, _), xr(a);
          }
        } else
          y(d, le), xr(a);
        return !0;
      },
      get(l, o, d) {
        if (o === br)
          return e;
        var _ = r.get(o), p = o in l;
        if (_ === void 0 && (!p || pr(l, o)?.writable) && (_ = u(() => {
          var g = Ct(p ? l[o] : le), c = /* @__PURE__ */ O(g);
          return c;
        }), r.set(o, _)), _ !== void 0) {
          var b = f(_);
          return b === le ? void 0 : b;
        }
        return Reflect.get(l, o, d);
      },
      getOwnPropertyDescriptor(l, o) {
        var d = Reflect.getOwnPropertyDescriptor(l, o);
        if (d && "value" in d) {
          var _ = r.get(o);
          _ && (d.value = f(_));
        } else if (d === void 0) {
          var p = r.get(o), b = p?.v;
          if (p !== void 0 && b !== le)
            return {
              enumerable: !0,
              configurable: !0,
              value: b,
              writable: !0
            };
        }
        return d;
      },
      has(l, o) {
        if (o === br)
          return !0;
        var d = r.get(o), _ = d !== void 0 && d.v !== le || Reflect.has(l, o);
        if (d !== void 0 || F !== null && (!_ || pr(l, o)?.writable)) {
          d === void 0 && (d = u(() => {
            var b = _ ? Ct(l[o]) : le, g = /* @__PURE__ */ O(b);
            return g;
          }), r.set(o, d));
          var p = f(d);
          if (p === le)
            return !1;
        }
        return _;
      },
      set(l, o, d, _) {
        var p = r.get(o), b = o in l;
        if (n && o === "length")
          for (var g = d; g < /** @type {Source<number>} */
          p.v; g += 1) {
            var c = r.get(g + "");
            c !== void 0 ? y(c, le) : g in l && (c = u(() => /* @__PURE__ */ O(le)), r.set(g + "", c));
          }
        if (p === void 0)
          (!b || pr(l, o)?.writable) && (p = u(() => /* @__PURE__ */ O(void 0)), y(p, Ct(d)), r.set(o, p));
        else {
          b = p.v !== le;
          var E = u(() => Ct(d));
          y(p, E);
        }
        var M = Reflect.getOwnPropertyDescriptor(l, o);
        if (M?.set && M.set.call(_, d), !b) {
          if (n && typeof o == "string") {
            var z = (
              /** @type {Source<number>} */
              r.get("length")
            ), I = Number(o);
            Number.isInteger(I) && I >= z.v && y(z, I + 1);
          }
          xr(a);
        }
        return !0;
      },
      ownKeys(l) {
        f(a);
        var o = Reflect.ownKeys(l).filter((p) => {
          var b = r.get(p);
          return b === void 0 || b.v !== le;
        });
        for (var [d, _] of r)
          _.v !== le && !(d in l) && o.push(d);
        return o;
      },
      setPrototypeOf() {
        ms();
      }
    }
  );
}
function ra(e) {
  try {
    if (e !== null && typeof e == "object" && br in e)
      return e[br];
  } catch {
  }
  return e;
}
function rl(e, t) {
  return Object.is(ra(e), ra(t));
}
var na, Fa, ja, La;
function nl() {
  if (na === void 0) {
    na = window, Fa = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    ja = pr(t, "firstChild").get, La = pr(t, "nextSibling").get, Qn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Qn(r) && (r.__t = void 0);
  }
}
function Ft(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function mt(e) {
  return (
    /** @type {TemplateNode | null} */
    ja.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Pr(e) {
  return (
    /** @type {TemplateNode | null} */
    La.call(e)
  );
}
function v(e, t) {
  return /* @__PURE__ */ mt(e);
}
function Dr(e, t = !1) {
  {
    var r = /* @__PURE__ */ mt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Pr(r) : r;
  }
}
function x(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Pr(n);
  return n;
}
function al(e) {
  e.textContent = "";
}
function Ba() {
  return !1;
}
function Ha(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(t ?? pa, e, void 0)
  );
}
let aa = !1;
function il() {
  aa || (aa = !0, document.addEventListener(
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
function Pn(e) {
  var t = D, r = F;
  Ge(null), st(null);
  try {
    return e();
  } finally {
    Ge(t), st(r);
  }
}
function qa(e, t, r, n = r) {
  e.addEventListener(t, () => Pn(r));
  const a = e.__on_r;
  a ? e.__on_r = () => {
    a(), n(!0);
  } : e.__on_r = () => n(!0), il();
}
function sl(e) {
  F === null && (D === null && bs(), ps()), kt && gs();
}
function ll(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function _t(e, t) {
  var r = F;
  r !== null && r.f & ye && (e |= ye);
  var n = {
    ctx: Ve,
    deps: null,
    nodes: null,
    f: e | ce | qe,
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
  C?.register_created_effect(n);
  var a = n;
  if (e & er)
    Yt !== null ? Yt.push(n) : qt.ensure().schedule(n);
  else if (t !== null) {
    try {
      ar(n);
    } catch (u) {
      throw Se(n), u;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    !(a.f & ir) && (a = a.first, e & at && e & tr && a !== null && (a.f |= tr));
  }
  if (a !== null && (a.parent = r, r !== null && ll(a, r), D !== null && D.f & ve && !(e & Bt))) {
    var i = (
      /** @type {Derived} */
      D
    );
    (i.effects ?? (i.effects = [])).push(a);
  }
  return n;
}
function Nn() {
  return D !== null && !Xe;
}
function za(e) {
  const t = _t(Jr, null);
  return J(t, ae), t.teardown = e, t;
}
function Ir(e) {
  sl();
  var t = (
    /** @type {Effect} */
    F.f
  ), r = !D && (t & Ze) !== 0 && (t & Ut) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Ve
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Ua(e);
}
function Ua(e) {
  return _t(er | vs, e);
}
function ol(e) {
  qt.ensure();
  const t = _t(Bt | ir, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? jt(t, () => {
      Se(t), n(void 0);
    }) : (Se(t), n(void 0));
  });
}
function ul(e) {
  return _t(er, e);
}
function fl(e) {
  return _t(wr | ir, e);
}
function Va(e, t = 0) {
  return _t(Jr | t, e);
}
function Z(e, t = [], r = [], n = []) {
  Js(n, t, r, (a) => {
    _t(Jr, () => e(...a.map(f)));
  });
}
function Dn(e, t = 0) {
  var r = _t(at | t, e);
  return r;
}
function He(e) {
  return _t(Ze | ir, e);
}
function Ga(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = kt, n = D;
    ia(!0), Ge(null);
    try {
      t.call(null);
    } finally {
      ia(r), Ge(n);
    }
  }
}
function In(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const a = r.ac;
    a !== null && Pn(() => {
      a.abort(ut);
    });
    var n = r.next;
    r.f & Bt ? r.parent = null : Se(r, t), r = n;
  }
}
function dl(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & Ze || Se(t), t = r;
  }
}
function Se(e, t = !0) {
  var r = !1;
  (t || e.f & cs) && e.nodes !== null && e.nodes.end !== null && (Ya(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), J(e, $n), In(e, t && !r), kr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  Ga(e), e.f ^= $n, e.f |= ze;
  var a = e.parent;
  a !== null && a.first !== null && Wa(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Ya(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Pr(e);
    e.remove(), e = r;
  }
}
function Wa(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function jt(e, t, r = !0) {
  var n = [];
  Ja(e, n, !0);
  var a = () => {
    r && Se(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var u = () => --i || a();
    for (var l of n)
      l.out(u);
  } else
    a();
}
function Ja(e, t, r) {
  if (!(e.f & ye)) {
    e.f ^= ye;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const l of n)
        (l.is_global || r) && t.push(l);
    for (var a = e.first; a !== null; ) {
      var i = a.next, u = (a.f & tr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (a.f & Ze) !== 0 && (e.f & at) !== 0;
      Ja(a, t, u ? r : !1), a = i;
    }
  }
}
function Rn(e) {
  Ka(e, !0);
}
function Ka(e, t) {
  if (e.f & ye) {
    e.f ^= ye, e.f & ae || (J(e, ce), qt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, a = (r.f & tr) !== 0 || (r.f & Ze) !== 0;
      Ka(r, a ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const u of i)
        (u.is_global || t) && u.in();
  }
}
function On(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var a = r === n ? null : /* @__PURE__ */ Pr(r);
      t.append(r), r = a;
    }
}
let qr = !1, kt = !1;
function ia(e) {
  kt = e;
}
let D = null, Xe = !1;
function Ge(e) {
  D = e;
}
let F = null;
function st(e) {
  F = e;
}
let Ue = null;
function Xa(e) {
  D !== null && (Ue === null ? Ue = [e] : Ue.push(e));
}
let Ee = null, Ne = 0, Fe = null;
function cl(e) {
  Fe = e;
}
let Za = 1, Tt = 0, Lt = Tt;
function sa(e) {
  Lt = e;
}
function Qa() {
  return ++Za;
}
function Nr(e) {
  var t = e.f;
  if (t & ce)
    return !0;
  if (t & ve && (e.f &= ~Ht), t & it) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, a = 0; a < n; a++) {
      var i = r[a];
      if (Nr(
        /** @type {Derived} */
        i
      ) && Da(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    t & qe && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ke === null && J(e, ae);
  }
  return !1;
}
function $a(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Ue !== null && $t.call(Ue, e)))
    for (var a = 0; a < n.length; a++) {
      var i = n[a];
      i.f & ve ? $a(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? J(i, ce) : i.f & ae && J(i, it), Cn(
        /** @type {Effect} */
        i
      ));
    }
}
function ei(e) {
  var E;
  var t = Ee, r = Ne, n = Fe, a = D, i = Ue, u = Ve, l = Xe, o = Lt, d = e.f;
  Ee = /** @type {null | Value[]} */
  null, Ne = 0, Fe = null, D = d & (Ze | Bt) ? null : e, Ue = null, rr(e.ctx), Xe = !1, Lt = ++Tt, e.ac !== null && (Pn(() => {
    e.ac.abort(ut);
  }), e.ac = null);
  try {
    e.f |= vn;
    var _ = (
      /** @type {Function} */
      e.fn
    ), p = _();
    e.f |= Ut;
    var b = e.deps, g = C?.is_fork;
    if (Ee !== null) {
      var c;
      if (g || kr(e, Ne), b !== null && Ne > 0)
        for (b.length = Ne + Ee.length, c = 0; c < Ee.length; c++)
          b[Ne + c] = Ee[c];
      else
        e.deps = b = Ee;
      if (Nn() && e.f & qe)
        for (c = Ne; c < b.length; c++)
          ((E = b[c]).reactions ?? (E.reactions = [])).push(e);
    } else !g && b !== null && Ne < b.length && (kr(e, Ne), b.length = Ne);
    if (wa() && Fe !== null && !Xe && b !== null && !(e.f & (ve | it | ce)))
      for (c = 0; c < /** @type {Source[]} */
      Fe.length; c++)
        $a(
          Fe[c],
          /** @type {Effect} */
          e
        );
    if (a !== null && a !== e) {
      if (Tt++, a.deps !== null)
        for (let M = 0; M < r; M += 1)
          a.deps[M].rv = Tt;
      if (t !== null)
        for (const M of t)
          M.rv = Tt;
      Fe !== null && (n === null ? n = Fe : n.push(.../** @type {Source[]} */
      Fe));
    }
    return e.f & wt && (e.f ^= wt), p;
  } catch (M) {
    return Ea(M);
  } finally {
    e.f ^= vn, Ee = t, Ne = r, Fe = n, D = a, Ue = i, rr(u), Xe = l, Lt = o;
  }
}
function vl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = as.call(r, e);
    if (n !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[n] = r[a], r.pop());
    }
  }
  if (r === null && t.f & ve && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ee === null || !$t.call(Ee, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    i.f & qe && (i.f ^= qe, i.f &= ~Ht), i.v !== le && Sn(i), $s(i), kr(i, 0);
  }
}
function kr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      vl(e, r[n]);
}
function ar(e) {
  var t = e.f;
  if (!(t & ze)) {
    J(e, ae);
    var r = F, n = qr;
    F = e, qr = !0;
    try {
      t & (at | ga) ? dl(e) : In(e), Ga(e);
      var a = ei(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = Za;
      var i;
    } finally {
      qr = n, F = r;
    }
  }
}
async function hl() {
  await Promise.resolve(), Bs();
}
function f(e) {
  var t = e.f, r = (t & ve) !== 0;
  if (D !== null && !Xe) {
    var n = F !== null && (F.f & ze) !== 0;
    if (!n && (Ue === null || !$t.call(Ue, e))) {
      var a = D.deps;
      if (D.f & vn)
        e.rv < Tt && (e.rv = Tt, Ee === null && a !== null && a[Ne] === e ? Ne++ : Ee === null ? Ee = [e] : Ee.push(e));
      else {
        (D.deps ?? (D.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [D] : $t.call(i, D) || i.push(D);
      }
    }
  }
  if (kt && Ot.has(e))
    return Ot.get(e);
  if (r) {
    var u = (
      /** @type {Derived} */
      e
    );
    if (kt) {
      var l = u.v;
      return (!(u.f & ae) && u.reactions !== null || ri(u)) && (l = Mn(u)), Ot.set(u, l), l;
    }
    var o = (u.f & qe) === 0 && !Xe && D !== null && (qr || (D.f & qe) !== 0), d = (u.f & Ut) === 0;
    Nr(u) && (o && (u.f |= qe), Da(u)), o && !d && (Ia(u), ti(u));
  }
  if (Ke?.has(e))
    return Ke.get(e);
  if (e.f & wt)
    throw e.v;
  return e.v;
}
function ti(e) {
  if (e.f |= qe, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), t.f & ve && !(t.f & qe) && (Ia(
        /** @type {Derived} */
        t
      ), ti(
        /** @type {Derived} */
        t
      ));
}
function ri(e) {
  if (e.v === le) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ot.has(t) || t.f & ve && ri(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ni(e) {
  var t = Xe;
  try {
    return Xe = !0, e();
  } finally {
    Xe = t;
  }
}
const _l = ["touchstart", "touchmove"];
function gl(e) {
  return _l.includes(e);
}
const Mt = Symbol("events"), ai = /* @__PURE__ */ new Set(), xn = /* @__PURE__ */ new Set();
function se(e, t, r) {
  (t[Mt] ?? (t[Mt] = {}))[e] = r;
}
function pl(e) {
  for (var t = 0; t < e.length; t++)
    ai.add(e[t]);
  for (var r of xn)
    r(e);
}
let la = null;
function oa(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, a = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    a[0] || e.target
  );
  la = e;
  var u = 0, l = la === e && e[Mt];
  if (l) {
    var o = a.indexOf(l);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Mt] = t;
      return;
    }
    var d = a.indexOf(t);
    if (d === -1)
      return;
    o <= d && (u = o);
  }
  if (i = /** @type {Element} */
  a[u] || e.target, i !== t) {
    is(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var _ = D, p = F;
    Ge(null), st(null);
    try {
      for (var b, g = []; i !== null; ) {
        var c = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var E = i[Mt]?.[n];
          E != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && E.call(i, e);
        } catch (M) {
          b ? g.push(M) : b = M;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        i = c;
      }
      if (b) {
        for (let M of g)
          queueMicrotask(() => {
            throw M;
          });
        throw b;
      }
    } finally {
      e[Mt] = t, delete e.currentTarget, Ge(_), st(p);
    }
  }
}
const bl = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function yl(e) {
  return (
    /** @type {string} */
    bl?.createHTML(e) ?? e
  );
}
function xl(e) {
  var t = Ha("template");
  return t.innerHTML = yl(e.replaceAll("<!>", "<!---->")), t.content;
}
function Ur(e, t) {
  var r = (
    /** @type {Effect} */
    F
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function A(e, t) {
  var r = (t & Cs) !== 0, n = (t & Ts) !== 0, a, i = !e.startsWith("<!>");
  return () => {
    a === void 0 && (a = xl(i ? e : "<!>" + e), r || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ mt(a)));
    var u = (
      /** @type {TemplateNode} */
      n || Fa ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ mt(u)
      ), o = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Ur(l, o);
    } else
      Ur(u, u);
    return u;
  };
}
function S(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function R(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function ml(e, t) {
  return wl(e, t);
}
const Rr = /* @__PURE__ */ new Map();
function wl(e, { target: t, anchor: r, props: n = {}, events: a, context: i, intro: u = !0, transformError: l }) {
  nl();
  var o = void 0, d = ol(() => {
    var _ = r ?? t.appendChild(Ft());
    Us(
      /** @type {TemplateNode} */
      _,
      {
        pending: () => {
        }
      },
      (g) => {
        xa({});
        var c = (
          /** @type {ComponentContext} */
          Ve
        );
        i && (c.c = i), a && (n.$$events = a), o = e(g, n) || {}, ma();
      },
      l
    );
    var p = /* @__PURE__ */ new Set(), b = (g) => {
      for (var c = 0; c < g.length; c++) {
        var E = g[c];
        if (!p.has(E)) {
          p.add(E);
          var M = gl(E);
          for (const $ of [t, document]) {
            var z = Rr.get($);
            z === void 0 && (z = /* @__PURE__ */ new Map(), Rr.set($, z));
            var I = z.get(E);
            I === void 0 ? ($.addEventListener(E, oa, { passive: M }), z.set(E, 1)) : z.set(E, I + 1);
          }
        }
      }
    };
    return b(Wr(ai)), xn.add(b), () => {
      for (var g of p)
        for (const M of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            Rr.get(M)
          ), E = (
            /** @type {number} */
            c.get(g)
          );
          --E == 0 ? (M.removeEventListener(g, oa), c.delete(g), c.size === 0 && Rr.delete(M)) : c.set(g, E);
        }
      xn.delete(b), _ !== r && _.parentNode?.removeChild(_);
    };
  });
  return mn.set(o, d), o;
}
let mn = /* @__PURE__ */ new WeakMap();
function kl(e, t) {
  const r = mn.get(e);
  return r ? (mn.delete(e), r(t)) : Promise.resolve();
}
var Je, nt, Re, Rt, Tr, Mr, Yr;
class El {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    We(this, "anchor");
    /** @type {Map<Batch, Key>} */
    T(this, Je, /* @__PURE__ */ new Map());
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
    T(this, nt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    T(this, Re, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    T(this, Rt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    T(this, Tr, !0);
    /**
     * @param {Batch} batch
     */
    T(this, Mr, (t) => {
      if (s(this, Je).has(t)) {
        var r = (
          /** @type {Key} */
          s(this, Je).get(t)
        ), n = s(this, nt).get(r);
        if (n)
          Rn(n), s(this, Rt).delete(r);
        else {
          var a = s(this, Re).get(r);
          a && (s(this, nt).set(r, a.effect), s(this, Re).delete(r), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), n = a.effect);
        }
        for (const [i, u] of s(this, Je)) {
          if (s(this, Je).delete(i), i === t)
            break;
          const l = s(this, Re).get(u);
          l && (Se(l.effect), s(this, Re).delete(u));
        }
        for (const [i, u] of s(this, nt)) {
          if (i === r || s(this, Rt).has(i)) continue;
          const l = () => {
            if (Array.from(s(this, Je).values()).includes(i)) {
              var d = document.createDocumentFragment();
              On(u, d), d.append(Ft()), s(this, Re).set(i, { effect: u, fragment: d });
            } else
              Se(u);
            s(this, Rt).delete(i), s(this, nt).delete(i);
          };
          s(this, Tr) || !n ? (s(this, Rt).add(i), jt(u, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    T(this, Yr, (t) => {
      s(this, Je).delete(t);
      const r = Array.from(s(this, Je).values());
      for (const [n, a] of s(this, Re))
        r.includes(n) || (Se(a.effect), s(this, Re).delete(n));
    });
    this.anchor = t, N(this, Tr, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      C
    ), a = Ba();
    if (r && !s(this, nt).has(t) && !s(this, Re).has(t))
      if (a) {
        var i = document.createDocumentFragment(), u = Ft();
        i.append(u), s(this, Re).set(t, {
          effect: He(() => r(u)),
          fragment: i
        });
      } else
        s(this, nt).set(
          t,
          He(() => r(this.anchor))
        );
    if (s(this, Je).set(n, t), a) {
      for (const [l, o] of s(this, nt))
        l === t ? n.unskip_effect(o) : n.skip_effect(o);
      for (const [l, o] of s(this, Re))
        l === t ? n.unskip_effect(o.effect) : n.skip_effect(o.effect);
      n.oncommit(s(this, Mr)), n.ondiscard(s(this, Yr));
    } else
      s(this, Mr).call(this, n);
  }
}
Je = new WeakMap(), nt = new WeakMap(), Re = new WeakMap(), Rt = new WeakMap(), Tr = new WeakMap(), Mr = new WeakMap(), Yr = new WeakMap();
function W(e, t, r = !1) {
  var n = new El(e), a = r ? tr : 0;
  function i(u, l) {
    n.ensure(u, l);
  }
  Dn(() => {
    var u = !1;
    t((l, o = 0) => {
      u = !0, i(o, l);
    }), u || i(-1, null);
  }, a);
}
function cr(e, t) {
  return t;
}
function Sl(e, t, r) {
  for (var n = [], a = t.length, i, u = t.length, l = 0; l < a; l++) {
    let p = t[l];
    jt(
      p,
      () => {
        if (i) {
          if (i.pending.delete(p), i.done.add(p), i.pending.size === 0) {
            var b = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            wn(e, Wr(i.done)), b.delete(i), b.size === 0 && (e.outrogroups = null);
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
      ), _ = (
        /** @type {Element} */
        d.parentNode
      );
      al(_), _.append(d), e.items.clear();
    }
    wn(e, t, !o);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function wn(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const u of e.pending.values())
      for (const l of u)
        n.add(
          /** @type {EachItem} */
          e.items.get(l).e
        );
  }
  for (var a = 0; a < t.length; a++) {
    var i = t[a];
    if (n?.has(i)) {
      i.f |= ht;
      const u = document.createDocumentFragment();
      On(i, u);
    } else
      Se(t[a], r);
  }
}
var ua;
function Gt(e, t, r, n, a, i = null) {
  var u = e, l = /* @__PURE__ */ new Map();
  {
    var o = (
      /** @type {Element} */
      e
    );
    u = o.appendChild(Ft());
  }
  var d = null, _ = /* @__PURE__ */ Zs(() => {
    var I = r();
    return En(I) ? I : I == null ? [] : Wr(I);
  }), p, b = /* @__PURE__ */ new Map(), g = !0;
  function c(I) {
    z.effect.f & ze || (z.pending.delete(I), z.fallback = d, Al(z, p, u, t, n), d !== null && (p.length === 0 ? d.f & ht ? (d.f ^= ht, gr(d, null, u)) : Rn(d) : jt(d, () => {
      d = null;
    })));
  }
  function E(I) {
    z.pending.delete(I);
  }
  var M = Dn(() => {
    p = /** @type {V[]} */
    f(_);
    for (var I = p.length, $ = /* @__PURE__ */ new Set(), ie = (
      /** @type {Batch} */
      C
    ), xe = Ba(), he = 0; he < I; he += 1) {
      var Qe = p[he], oe = n(Qe, he), L = g ? null : l.get(oe);
      L ? (L.v && nr(L.v, Qe), L.i && nr(L.i, he), xe && ie.unskip_effect(L.e)) : (L = Cl(
        l,
        g ? u : ua ?? (ua = Ft()),
        Qe,
        oe,
        he,
        a,
        t,
        r
      ), g || (L.e.f |= ht), l.set(oe, L)), $.add(oe);
    }
    if (I === 0 && i && !d && (g ? d = He(() => i(u)) : (d = He(() => i(ua ?? (ua = Ft()))), d.f |= ht)), I > $.size && _s(), !g)
      if (b.set(ie, $), xe) {
        for (const [sr, Kr] of l)
          $.has(sr) || ie.skip_effect(Kr.e);
        ie.oncommit(c), ie.ondiscard(E);
      } else
        c(ie);
    f(_);
  }), z = { effect: M, items: l, pending: b, outrogroups: null, fallback: d };
  g = !1;
}
function vr(e) {
  for (; e !== null && !(e.f & Ze); )
    e = e.next;
  return e;
}
function Al(e, t, r, n, a) {
  var i = t.length, u = e.items, l = vr(e.effect.first), o, d = null, _ = [], p = [], b, g, c, E;
  for (E = 0; E < i; E += 1) {
    if (b = t[E], g = a(b, E), c = /** @type {EachItem} */
    u.get(g).e, e.outrogroups !== null)
      for (const oe of e.outrogroups)
        oe.pending.delete(c), oe.done.delete(c);
    if (c.f & ye && Rn(c), c.f & ht)
      if (c.f ^= ht, c === l)
        gr(c, null, r);
      else {
        var M = d ? d.next : l;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), pt(e, d, c), pt(e, c, M), gr(c, M, r), d = c, _ = [], p = [], l = vr(d.next);
        continue;
      }
    if (c !== l) {
      if (o !== void 0 && o.has(c)) {
        if (_.length < p.length) {
          var z = p[0], I;
          d = z.prev;
          var $ = _[0], ie = _[_.length - 1];
          for (I = 0; I < _.length; I += 1)
            gr(_[I], z, r);
          for (I = 0; I < p.length; I += 1)
            o.delete(p[I]);
          pt(e, $.prev, ie.next), pt(e, d, $), pt(e, ie, z), l = z, d = ie, E -= 1, _ = [], p = [];
        } else
          o.delete(c), gr(c, l, r), pt(e, c.prev, c.next), pt(e, c, d === null ? e.effect.first : d.next), pt(e, d, c), d = c;
        continue;
      }
      for (_ = [], p = []; l !== null && l !== c; )
        (o ?? (o = /* @__PURE__ */ new Set())).add(l), p.push(l), l = vr(l.next);
      if (l === null)
        continue;
    }
    c.f & ht || _.push(c), d = c, l = vr(c.next);
  }
  if (e.outrogroups !== null) {
    for (const oe of e.outrogroups)
      oe.pending.size === 0 && (wn(e, Wr(oe.done)), e.outrogroups?.delete(oe));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || o !== void 0) {
    var xe = [];
    if (o !== void 0)
      for (c of o)
        c.f & ye || xe.push(c);
    for (; l !== null; )
      !(l.f & ye) && l !== e.fallback && xe.push(l), l = vr(l.next);
    var he = xe.length;
    if (he > 0) {
      var Qe = i === 0 ? r : null;
      Sl(e, xe, Qe);
    }
  }
}
function Cl(e, t, r, n, a, i, u, l) {
  var o = u & Es ? u & As ? zt(r) : /* @__PURE__ */ el(r, !1, !1) : null, d = u & Ss ? zt(a) : null;
  return {
    v: o,
    i: d,
    e: He(() => (i(t, o ?? r, d ?? a, l), () => {
      e.delete(n);
    }))
  };
}
function gr(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, a = e.nodes.end, i = t && !(t.f & ht) ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Pr(n)
      );
      if (i.before(n), n === a)
        return;
      n = u;
    }
}
function pt(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Tl(e, t, r = !1, n = !1, a = !1, i = !1) {
  var u = e, l = "";
  if (r)
    var o = (
      /** @type {Element} */
      e
    );
  Z(() => {
    var d = (
      /** @type {Effect} */
      F
    );
    if (l !== (l = t() ?? "")) {
      if (r) {
        d.nodes = null, o.innerHTML = /** @type {string} */
        l, l !== "" && Ur(
          /** @type {TemplateNode} */
          /* @__PURE__ */ mt(o),
          /** @type {TemplateNode} */
          o.lastChild
        );
        return;
      }
      if (d.nodes !== null && (Ya(
        d.nodes.start,
        /** @type {TemplateNode} */
        d.nodes.end
      ), d.nodes = null), l !== "") {
        var _ = n ? Ms : a ? Ps : void 0, p = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          Ha(n ? "svg" : a ? "math" : "template", _)
        );
        p.innerHTML = /** @type {any} */
        l;
        var b = n || a ? p : (
          /** @type {HTMLTemplateElement} */
          p.content
        );
        if (Ur(
          /** @type {TemplateNode} */
          /* @__PURE__ */ mt(b),
          /** @type {TemplateNode} */
          b.lastChild
        ), n || a)
          for (; /* @__PURE__ */ mt(b); )
            u.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ mt(b)
            );
        else
          u.before(b);
      }
    }
  });
}
function ii(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (r = ii(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Ml() {
  for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = ii(e)) && (n && (n += " "), n += t);
  return n;
}
function hr(e) {
  return typeof e == "object" ? Ml(e) : e ?? "";
}
function Pl(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function _r(e, t, r, n, a, i) {
  var u = e.__className;
  if (u !== r || u === void 0) {
    var l = Pl(r);
    l == null ? e.removeAttribute("class") : e.className = l, e.__className = r;
  }
  return i;
}
function si(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!En(t))
      return Ds();
    for (var n of e.options)
      n.selected = t.includes(mr(n));
    return;
  }
  for (n of e.options) {
    var a = mr(n);
    if (rl(a, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function Nl(e) {
  var t = new MutationObserver(() => {
    si(e, e.__value);
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
  }), za(() => {
    t.disconnect();
  });
}
function fa(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), a = !0;
  qa(e, "change", (i) => {
    var u = i ? "[selected]" : ":checked", l;
    if (e.multiple)
      l = [].map.call(e.querySelectorAll(u), mr);
    else {
      var o = e.querySelector(u) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      l = o && mr(o);
    }
    r(l), e.__value = l, C !== null && n.add(C);
  }), ul(() => {
    var i = t();
    if (e === document.activeElement) {
      var u = (
        /** @type {Batch} */
        C
      );
      if (n.has(u))
        return;
    }
    if (si(e, i, a), a && i === void 0) {
      var l = e.querySelector(":checked");
      l !== null && (i = mr(l), r(i));
    }
    e.__value = i, a = !1;
  }), Nl(e);
}
function mr(e) {
  return "__value" in e ? e.__value : e.value;
}
const Dl = Symbol("is custom element"), Il = Symbol("is html");
function on(e, t, r, n) {
  var a = Rl(e);
  a[t] !== (a[t] = r) && (r == null ? e.removeAttribute(t) : typeof r != "string" && Ol(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Rl(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Dl]: e.nodeName.includes("-"),
      [Il]: e.namespaceURI === pa
    })
  );
}
var da = /* @__PURE__ */ new Map();
function Ol(e) {
  var t = e.getAttribute("is") || e.nodeName, r = da.get(t);
  if (r) return r;
  da.set(t, r = []);
  for (var n, a = e, i = Element.prototype; i !== a; ) {
    n = ss(a);
    for (var u in n)
      n[u].set && r.push(u);
    a = ha(a);
  }
  return r;
}
function ca(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  qa(e, "input", async (a) => {
    var i = a ? e.defaultValue : e.value;
    if (i = un(e) ? fn(i) : i, r(i), C !== null && n.add(C), await hl(), i !== (i = t())) {
      var u = e.selectionStart, l = e.selectionEnd, o = e.value.length;
      if (e.value = i ?? "", l !== null) {
        var d = e.value.length;
        u === l && l === o && d > o ? (e.selectionStart = d, e.selectionEnd = d) : (e.selectionStart = u, e.selectionEnd = Math.min(l, d));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  ni(t) == null && e.value && (r(un(e) ? fn(e.value) : e.value), C !== null && n.add(C)), Va(() => {
    var a = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        C
      );
      if (n.has(i))
        return;
    }
    un(e) && a === fn(e.value) || e.type === "date" && !a && !e.value || a !== e.value && (e.value = a ?? "");
  });
}
function un(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function fn(e) {
  return e === "" ? null : +e;
}
const Fl = "5";
var va;
typeof window < "u" && ((va = window.__svelte ?? (window.__svelte = {})).v ?? (va.v = /* @__PURE__ */ new Set())).add(Fl);
var jl = /* @__PURE__ */ A('<div class="flex flex-col items-center justify-center py-20 px-6"><div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-10 max-w-md w-full text-center space-y-5"><div class="mx-auto w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-3xl">🔔</div> <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Welcome to your Dashboard</h2> <p class="text-gray-500 dark:text-gray-400">Please log in to access your member dashboard, notifications, invoices, and more.</p> <button class="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">Log In</button></div></div>'), Ll = /* @__PURE__ */ A(', <span class="text-gray-500 dark:text-gray-400"> </span>', 1), Bl = /* @__PURE__ */ A('<div class="flex flex-col justify-center items-center p-16 bg-white dark:bg-gray-800 rounded-2xl shadow-sm"><div class="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div> <p class="mt-4 text-lg text-gray-500 dark:text-gray-400">Loading dashboard…</p></div>'), Hl = /* @__PURE__ */ A('<div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-red-700 dark:text-red-300"><span class="font-medium">Error:</span> </div>'), ql = /* @__PURE__ */ A("<span> </span>"), zl = /* @__PURE__ */ A('<div class="flex justify-between text-sm border-b border-gray-100 dark:border-gray-700 pb-1"><span class="text-gray-500 dark:text-gray-400 capitalize"> </span> <span class="font-medium text-gray-800 dark:text-gray-200"> </span></div>'), Ul = /* @__PURE__ */ A('<div class="mt-4 space-y-2"></div>'), Vl = /* @__PURE__ */ A('<section><div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"><div class="flex items-center justify-between"><h2 class="text-xl font-bold text-gray-900 dark:text-white">Citizenship Status</h2> <!></div> <!></div></section>'), Gl = /* @__PURE__ */ A('<span class="inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold text-white bg-red-500 rounded-full"> </span>'), Yl = /* @__PURE__ */ A('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 flex justify-center"><div class="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div></div>'), Wl = /* @__PURE__ */ A('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center text-gray-500 dark:text-gray-400"><div class="text-3xl mb-2">🔔</div> No notifications</div>'), Jl = /* @__PURE__ */ A('<div class="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>'), Kl = /* @__PURE__ */ A('<div class="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"></div>'), Xl = /* @__PURE__ */ A('<tr><td class="px-3 py-3 align-top"><!></td><td class="px-3 py-3"><div> </div> <!></td><td class="px-3 py-3 align-top text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap hidden md:table-cell"> </td><td class="px-3 py-3 align-top text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap hidden sm:table-cell"> </td><td class="px-3 py-3 align-top"><div class="flex justify-end gap-1"><button> </button> <button class="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"> </button> <button title="Delete" class="p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-400 hover:text-red-500 transition-colors">🗑</button></div></td></tr>'), Zl = /* @__PURE__ */ A('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-x-auto"><table class="w-full"><thead><tr class="bg-gray-50 dark:bg-gray-750 border-b border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"><th class="w-8 px-3 py-2"></th><th class="text-left px-3 py-2">Subject</th><th class="text-left px-3 py-2 whitespace-nowrap hidden md:table-cell">From</th><th class="text-left px-3 py-2 whitespace-nowrap hidden sm:table-cell">Date</th><th class="w-24 px-3 py-2 text-right">Actions</th></tr></thead><tbody></tbody></table></div>'), Ql = /* @__PURE__ */ A('<div class="flex flex-col justify-center items-center p-12 bg-gray-50 dark:bg-gray-800/50 rounded-xl"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div> <p class="mt-4 text-gray-500 dark:text-gray-400">Loading invoices…</p></div>'), $l = /* @__PURE__ */ A('<div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-red-700 dark:text-red-300"> </div>'), eo = /* @__PURE__ */ A('<div class="flex items-center gap-2 flex-wrap"><button class="px-3 py-1 text-xs font-medium bg-gray-800 dark:bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors">💳 Pay</button> <button class="px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors">↻ Refresh</button> <button class="px-2 py-1 text-xs border border-gray-200 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors">Demo Pay</button></div>'), to = /* @__PURE__ */ A('<span class="text-xs text-gray-400 dark:text-gray-500"> </span>'), ro = /* @__PURE__ */ A('<tr class="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750"><td class="px-4 py-3"><div class="font-medium text-gray-900 dark:text-white text-sm"> </div></td><td class="px-4 py-3 font-semibold text-gray-900 dark:text-white"> </td><td class="px-4 py-3 text-gray-700 dark:text-gray-300"> </td><td class="px-4 py-3"><span> </span></td><td class="px-4 py-3"><!></td></tr>'), no = /* @__PURE__ */ A('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-x-auto"><table class="w-full text-sm text-left"><thead class="text-xs text-gray-700 dark:text-gray-400 uppercase bg-gray-50 dark:bg-gray-750"><tr><th class="px-4 py-3">Description</th><th class="px-4 py-3">Amount</th><th class="px-4 py-3">Currency</th><th class="px-4 py-3">Status</th><th class="px-4 py-3">Actions</th></tr></thead><tbody></tbody></table></div>'), ao = /* @__PURE__ */ A('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 text-center text-gray-500 dark:text-gray-400">No invoices yet.</div>'), io = /* @__PURE__ */ A('<div class="flex justify-center py-8"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>'), so = /* @__PURE__ */ A('<div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Exact Amount to Send</label> <code class="block px-3 py-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded font-mono text-lg font-bold text-blue-800 dark:text-blue-200"> </code> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">The unique last digits identify your invoice — send this <strong>exact</strong> amount.</p></div>'), lo = /* @__PURE__ */ A('<div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subaccount (Hex)</label> <code class="block px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded font-mono text-xs break-all text-gray-800 dark:text-gray-200"> </code></div>'), oo = /* @__PURE__ */ A('<div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3"><p class="text-sm text-amber-800 dark:text-amber-200"> </p></div>'), uo = /* @__PURE__ */ A('<div class="bg-gray-50 dark:bg-gray-750 rounded-lg p-4"><div class="grid grid-cols-2 gap-4 text-sm"><div><span class="text-gray-500 dark:text-gray-400">Invoice ID:</span> <span class="ml-2 font-medium text-gray-900 dark:text-white"> </span></div> <div><span class="text-gray-500 dark:text-gray-400">Currency:</span> <span class="ml-2 font-bold text-gray-900 dark:text-white"> </span></div></div></div> <div><h4 class="font-semibold text-gray-900 dark:text-white mb-3">Transfer Details</h4> <div class="space-y-3"><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Recipient (Canister ID)</label> <code class="block px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded font-mono text-sm break-all text-gray-800 dark:text-gray-200"> </code></div> <!> <!></div></div> <!> <div><h4 class="font-semibold text-gray-900 dark:text-white mb-2">DFX CLI Command</h4> <div class="bg-gray-900 rounded-lg p-4 relative"><pre class="text-green-400 font-mono text-sm whitespace-pre-wrap"> </pre> <button class="absolute top-2 right-2 p-2 rounded hover:bg-gray-700 transition-colors text-gray-400 hover:text-white text-sm"> </button></div></div>', 1), fo = /* @__PURE__ */ A('<div class="text-red-600 dark:text-red-400 text-center py-4">Failed to load payment details.</div>'), co = /* @__PURE__ */ A('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"><div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto"><div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-900 dark:text-white">💳 Payment Instructions</h3> <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xl">&times;</button></div> <div class="p-6 space-y-5"><!></div> <div class="flex justify-end px-6 py-4 border-t border-gray-200 dark:border-gray-700"><button class="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors">Close</button></div></div></div>'), vo = /* @__PURE__ */ A("<option> </option>"), ho = /* @__PURE__ */ A("<option> </option>"), _o = /* @__PURE__ */ A('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-4 space-y-4"><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Label</label> <input type="text" placeholder="e.g. My ICP Wallet" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"/></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Network</label> <select class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 outline-none"></select></div> <div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Currency</label> <select class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 outline-none"></select></div></div> <div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Address</label> <input type="text" placeholder="Wallet address or IBAN" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"/></div> <div class="flex justify-end gap-2"><button class="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors">Cancel</button> <button class="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg transition-colors"> </button></div></div>'), go = /* @__PURE__ */ A('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 flex justify-center"><div class="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div></div>'), po = /* @__PURE__ */ A('<div class="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center"><p class="text-gray-600 dark:text-gray-400">No payment accounts yet.</p> <p class="text-sm text-gray-500 dark:text-gray-500 mt-2">Add a payment account to receive and send payments.</p></div>'), bo = /* @__PURE__ */ A('<span class="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">✓ Verified</span>'), yo = /* @__PURE__ */ A('<span class="text-xs text-gray-500 dark:text-gray-400"> </span>'), xo = /* @__PURE__ */ A("<span></span>"), mo = /* @__PURE__ */ A('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-md transition-shadow"><div class="flex items-center justify-between mb-2"><strong class="text-lg text-gray-900 dark:text-white"> </strong> <!></div> <div class="flex gap-2 mb-3"><span class="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full"> </span> <span class="text-xs px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full"> </span></div> <div class="bg-gray-50 dark:bg-gray-750 rounded-lg px-3 py-2 mb-3 overflow-x-auto"><code class="font-mono text-sm text-gray-700 dark:text-gray-300 break-all"> </code></div> <div class="flex items-center justify-between"><!> <button class="text-xs px-2 py-1 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors">🗑 Remove</button></div></div>'), wo = /* @__PURE__ */ A('<div class="grid grid-cols-1 md:grid-cols-2 gap-4"></div>'), ko = /* @__PURE__ */ A('<!> <section><div class="flex items-center justify-between mb-4"><div class="flex items-center gap-2"><h2 class="text-xl font-bold text-gray-900 dark:text-white">Notifications</h2> <!></div></div> <!></section> <section><h2 class="text-xl font-bold text-gray-900 dark:text-white mb-1">Invoices</h2> <p class="text-gray-500 dark:text-gray-400 text-sm mb-4">Manage your invoices and payment records</p> <!></section> <!> <section><div class="flex items-center justify-between mb-4"><h2 class="text-xl font-bold text-gray-900 dark:text-white">Payment Accounts</h2> <button class="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors">+ Add Account</button></div> <!> <!></section>', 1), Eo = /* @__PURE__ */ A('<div><h1 class="text-3xl font-bold text-gray-900 dark:text-white"> <!></h1></div> <!>', 1), So = /* @__PURE__ */ A('<div class="w-full max-w-5xl mx-auto px-4 py-6 font-sans space-y-8"><!></div>');
function Ao(e, t) {
  xa(t, !0);
  const r = t.ctx.theme?.cn ?? ((...h) => h.filter(Boolean).join(" "));
  let n = /* @__PURE__ */ O(!1), a = /* @__PURE__ */ O("");
  Ir(() => {
    const h = t.ctx.isAuthenticated?.subscribe?.((m) => {
      y(n, !!m);
    });
    return () => h?.();
  }), Ir(() => {
    const h = t.ctx.principal?.subscribe?.((m) => {
      y(a, m || "", !0);
    });
    return () => h?.();
  });
  let i = /* @__PURE__ */ O(null), u = /* @__PURE__ */ O(null), l = /* @__PURE__ */ O(Ct([])), o = /* @__PURE__ */ O(!0), d = /* @__PURE__ */ O(""), _ = /* @__PURE__ */ O(!0), p = /* @__PURE__ */ O(null), b = /* @__PURE__ */ O(null), g = /* @__PURE__ */ O(!0), c = /* @__PURE__ */ O(""), E = /* @__PURE__ */ O(Ct([])), M = /* @__PURE__ */ O(!0), z = /* @__PURE__ */ O(""), I = /* @__PURE__ */ O(!1), $ = /* @__PURE__ */ O(""), ie = /* @__PURE__ */ O(""), xe = /* @__PURE__ */ O("ICP"), he = /* @__PURE__ */ O("ICP"), Qe = /* @__PURE__ */ O(!1), oe = /* @__PURE__ */ O(!1), L = /* @__PURE__ */ O(null), sr = /* @__PURE__ */ O(!1), Kr = /* @__PURE__ */ O(null), Xr = /* @__PURE__ */ O(!1);
  const li = [
    { value: "ICP", label: "Internet Computer (ICP)" },
    { value: "Bitcoin", label: "Bitcoin" },
    { value: "Ethereum", label: "Ethereum" },
    { value: "SEPA", label: "SEPA Bank Transfer" }
  ], Fn = {
    ICP: [
      { value: "ICP", label: "ICP" },
      { value: "ckBTC", label: "ckBTC" },
      { value: "ckETH", label: "ckETH" }
    ],
    Bitcoin: [{ value: "BTC", label: "Bitcoin (BTC)" }],
    Ethereum: [
      { value: "ETH", label: "Ethereum (ETH)" },
      { value: "USDC", label: "USDC" },
      { value: "USDT", label: "USDT" }
    ],
    SEPA: [{ value: "EUR", label: "Euro (EUR)" }]
  };
  let oi = /* @__PURE__ */ dr(() => Fn[f(xe)] || []);
  Ir(() => {
    const h = Fn[f(xe)] || [];
    h.length > 0 && !h.find((m) => m.value === f(he)) && y(he, h[0].value, !0);
  });
  function ui() {
    const h = (/* @__PURE__ */ new Date()).getHours();
    return h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";
  }
  let jn = /* @__PURE__ */ dr(() => f(l).filter((h) => !h.read).length);
  async function Zr(h, m, B = {}) {
    const Ae = await t.ctx.backend.extension_sync_call(h, m, JSON.stringify(B)), Ye = typeof Ae == "string" ? JSON.parse(Ae) : Ae;
    return Ye?.success && Ye?.response ? JSON.parse(Ye.response) : Ye;
  }
  async function fi() {
    y(o, !0), y(d, "");
    try {
      const h = { user_id: f(a) }, [m, B] = await Promise.all([
        t.ctx.callSync("get_dashboard_summary", h).catch(() => null),
        t.ctx.callSync("get_citizenship_status", h).catch(() => null)
      ]);
      y(i, m?.data ?? m, !0), y(u, B?.data ?? B, !0);
    } catch (h) {
      y(d, h?.message || String(h), !0);
    } finally {
      y(o, !1);
    }
  }
  async function di() {
    y(_, !0);
    try {
      const h = { user_id: f(a) }, m = await Zr("notifications", "get_notifications", h).catch(() => ({ data: [] })), B = m?.data ?? m?.notifications ?? m;
      y(l, Array.isArray(B) ? B : [], !0);
    } catch {
      y(l, [], !0);
    } finally {
      y(_, !1);
    }
  }
  async function Qr() {
    y(g, !0), y(c, "");
    try {
      const h = await t.ctx.callSync("get_invoice_information", { user_id: f(a) });
      h?.success ? y(b, h.data, !0) : y(c, h?.error || "Failed to load invoices", !0);
    } catch (h) {
      y(c, h?.message || String(h), !0);
    } finally {
      y(g, !1);
    }
  }
  async function $r() {
    y(M, !0), y(z, "");
    try {
      const h = await t.ctx.callSync("list_payment_accounts", { user_id: f(a) });
      h?.success && h?.data ? y(E, h.data, !0) : y(E, [], !0);
    } catch {
      y(E, [], !0);
    } finally {
      y(M, !1);
    }
  }
  Ir(() => {
    if (!f(n) || !f(a)) {
      y(o, !1), y(_, !1), y(g, !1), y(M, !1);
      return;
    }
    Promise.all([
      fi(),
      di(),
      Qr(),
      $r()
    ]);
  });
  async function Ln(h) {
    try {
      const m = !h.read;
      await Zr("notifications", "mark_as_read", { id: h.id, read: m }), y(l, f(l).map((B) => B.id === h.id ? { ...B, read: m } : B), !0);
    } catch {
    }
  }
  async function ci(h) {
    try {
      await Zr("notifications", "delete_notification", { id: h.id }), y(l, f(l).filter((m) => m.id !== h.id), !0);
    } catch {
    }
  }
  function Bn(h) {
    f(p) === h.id ? y(p, null) : (y(p, h.id, !0), h.read || Ln(h));
  }
  function vi(h) {
    return h ? h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener">$1</a>').replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">$1</code>').replace(/^\s*[-*]\s+(.+)$/gm, '<li class="ml-4">$1</li>').replace(/(<li.*<\/li>\n?)+/g, (m) => '<ul class="list-disc ml-2 space-y-1">' + m + "</ul>").replace(/\n{2,}/g, '</p><p class="mt-2">').replace(/\n/g, "<br>").replace(/^/, "<p>").replace(/$/, "</p>") : "";
  }
  function hi(h) {
    if (!h) return "";
    const m = Date.now() - h;
    if (m < 0) return "just now";
    const B = Math.floor(m / 1e3);
    if (B < 60) return "just now";
    const Ae = Math.floor(B / 60);
    if (Ae < 60) return `${Ae}m ago`;
    const Ye = Math.floor(Ae / 60);
    if (Ye < 24) return `${Ye}h ago`;
    const lr = Math.floor(Ye / 24);
    if (lr < 30) return `${lr}d ago`;
    const or = Math.floor(lr / 30);
    return or < 12 ? `${or}mo ago` : `${Math.floor(or / 12)}y ago`;
  }
  function _i(h) {
    if (!h) return "";
    const m = new Date(h), B = (Ae) => String(Ae).padStart(2, "0");
    return `${m.getFullYear()}-${B(m.getMonth() + 1)}-${B(m.getDate())} ${B(m.getHours())}:${B(m.getMinutes())}`;
  }
  function gi(h) {
    switch (h?.toLowerCase()) {
      case "paid":
        return "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400";
      case "pending":
        return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400";
      case "overdue":
        return "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400";
      case "processing":
        return "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400";
      default:
        return "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400";
    }
  }
  function Hn(h) {
    return h ? h.amount_raw != null ? `dfx canister call ${(h.currency || "token").toLowerCase()}_backend icrc1_transfer '(record { to = record { owner = principal "${h.principal}" }; amount = ${h.amount_raw} })' --network ic` : `dfx canister call token_backend icrc1_transfer '(record { to = record { owner = principal "${h.principal}"; subaccount = opt blob "${h.subaccount}" }; amount = ${h.amount_raw || 0} })' --network ic` : "";
  }
  async function pi(h) {
    y(Kr, h, !0), y(oe, !0), y(sr, !0), y(L, null);
    try {
      const m = await t.ctx.callSync("get_invoice_deposit_address", { invoice_id: h.id });
      m?.success && y(L, m.data, !0);
    } catch {
    } finally {
      y(sr, !1);
    }
  }
  function bi(h) {
    try {
      const m = document.createElement("textarea");
      m.value = h, m.style.position = "fixed", m.style.left = "-9999px", document.body.appendChild(m), m.select(), document.execCommand("copy"), document.body.removeChild(m), y(Xr, !0), setTimeout(
        () => {
          y(Xr, !1);
        },
        2e3
      );
    } catch {
    }
  }
  async function yi(h) {
    try {
      const m = await t.ctx.backend.refresh_invoice(JSON.stringify({ invoice_id: h.id }));
      (typeof m == "string" ? JSON.parse(m) : m)?.success && await Qr();
    } catch {
    }
  }
  async function xi(h) {
    try {
      (await t.ctx.callSync("demo_mark_invoice_paid", { invoice_id: h.id }))?.success && await Qr();
    } catch {
    }
  }
  async function mi() {
    if (!(!f(ie) || !f($))) {
      y(Qe, !0);
      try {
        (await t.ctx.callSync("add_payment_account", {
          user_id: f(a),
          address: f(ie),
          label: f($),
          network: f(xe),
          currency: f(he)
        }))?.success && (await $r(), y($, ""), y(ie, ""), y(xe, "ICP"), y(he, "ICP"), y(I, !1));
      } catch {
      } finally {
        y(Qe, !1);
      }
    }
  }
  async function wi(h) {
    try {
      (await t.ctx.callSync("remove_payment_account", { user_id: f(a), account_id: h }))?.success && await $r();
    } catch {
    }
  }
  function en(h) {
    return !h || typeof h != "object" ? [] : Object.entries(h).filter(([m]) => !m.startsWith("_"));
  }
  var qn = So(), ki = v(qn);
  {
    var Ei = (h) => {
      var m = jl(), B = v(m), Ae = x(v(B), 6);
      se("click", Ae, () => t.ctx.navigate?.("/join")), S(h, m);
    }, Si = (h) => {
      var m = Eo(), B = Dr(m), Ae = v(B), Ye = v(Ae), lr = x(Ye);
      {
        var or = (_e) => {
          var $e = Ll(), Vt = x(Dr($e)), tn = v(Vt);
          Z(() => R(tn, f(i).user_name)), S(_e, $e);
        };
        W(lr, (_e) => {
          f(i)?.user_name && f(i).user_name !== f(a) && _e(or);
        });
      }
      var Ai = x(B, 2);
      {
        var Ci = (_e) => {
          var $e = Bl();
          S(_e, $e);
        }, Ti = (_e) => {
          var $e = Hl(), Vt = x(v($e));
          Z(() => R(Vt, ` ${f(d) ?? ""}`)), S(_e, $e);
        }, Mi = (_e) => {
          var $e = ko(), Vt = Dr($e);
          {
            var tn = (w) => {
              var P = Vl(), ue = v(P), K = v(ue), ge = x(v(K), 2);
              {
                var k = (Y) => {
                  var ee = ql(), te = v(ee);
                  Z(
                    (H) => {
                      _r(ee, 1, H), R(te, `${f(u).status === "active" ? "✓" : "✗"}
									${(f(u).status_label || f(u).status) ?? ""}`);
                    },
                    [
                      () => hr(r("inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold", f(u).status === "active" ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400" : "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400"))
                    ]
                  ), S(Y, ee);
                };
                W(ge, (Y) => {
                  f(u).status && Y(k);
                });
              }
              var fe = x(K, 2);
              {
                var Ce = (Y) => {
                  var ee = Ul();
                  Gt(ee, 21, () => en(f(u)).filter(([te]) => te !== "status" && te !== "status_label"), cr, (te, H) => {
                    var re = /* @__PURE__ */ dr(() => ds(f(H), 2));
                    let Te = () => f(re)[0], j = () => f(re)[1];
                    var ne = zl(), U = v(ne), Me = v(U), de = x(U, 2), et = v(de);
                    Z(
                      (X, me) => {
                        R(Me, X), R(et, me);
                      },
                      [
                        () => Te().replace(/_/g, " "),
                        () => typeof j() == "object" ? JSON.stringify(j()) : j()
                      ]
                    ), S(te, ne);
                  }), S(Y, ee);
                }, Oe = /* @__PURE__ */ dr(() => en(f(u)).filter(([Y]) => Y !== "status" && Y !== "status_label").length > 0);
                W(fe, (Y) => {
                  f(Oe) && Y(Ce);
                });
              }
              S(w, P);
            }, Pi = /* @__PURE__ */ dr(() => f(u) && en(f(u)).length > 0);
            W(Vt, (w) => {
              f(Pi) && w(tn);
            });
          }
          var zn = x(Vt, 2), Un = v(zn), Ni = v(Un), Di = x(v(Ni), 2);
          {
            var Ii = (w) => {
              var P = Gl(), ue = v(P);
              Z(() => R(ue, f(jn))), S(w, P);
            };
            W(Di, (w) => {
              f(jn) > 0 && w(Ii);
            });
          }
          var Ri = x(Un, 2);
          {
            var Oi = (w) => {
              var P = Yl();
              S(w, P);
            }, Fi = (w) => {
              var P = Wl();
              S(w, P);
            }, ji = (w) => {
              var P = Zl(), ue = v(P), K = x(v(ue));
              Gt(K, 21, () => f(l), (ge) => ge.id, (ge, k) => {
                var fe = Xl(), Ce = v(fe), Oe = v(Ce);
                {
                  var Y = (pe) => {
                    var lt = Jl();
                    S(pe, lt);
                  };
                  W(Oe, (pe) => {
                    f(k).read || pe(Y);
                  });
                }
                var ee = x(Ce), te = v(ee), H = v(te), re = x(te, 2);
                {
                  var Te = (pe) => {
                    var lt = Kl();
                    Tl(lt, () => vi(f(k).message || f(k).body), !0), S(pe, lt);
                  };
                  W(re, (pe) => {
                    f(p) === f(k).id && (f(k).message || f(k).body) && pe(Te);
                  });
                }
                var j = x(ee), ne = v(j), U = x(j), Me = v(U), de = x(U), et = v(de), X = v(et), me = v(X), V = x(X, 2), we = v(V), Et = x(V, 2);
                Z(
                  (pe, lt, rn, nn, an) => {
                    _r(fe, 1, pe), _r(te, 1, lt), R(H, f(k).title || "Notification"), R(ne, f(k).sender || "—"), on(U, "title", rn), R(Me, nn), on(X, "title", f(p) === f(k).id ? "Collapse" : "Read message"), _r(X, 1, an), R(me, f(p) === f(k).id ? "👁‍🗨" : "👁"), on(V, "title", f(k).read ? "Mark as unread" : "Mark as read"), R(we, f(k).read ? "✉" : "📬");
                  },
                  [
                    () => hr(r("border-b border-gray-100 dark:border-gray-700 last:border-b-0 cursor-pointer transition-colors", f(k).read ? "hover:bg-gray-50 dark:hover:bg-gray-750" : "bg-blue-50/50 dark:bg-blue-900/10 hover:bg-blue-50 dark:hover:bg-blue-900/20")),
                    () => hr(r("truncate text-sm", f(k).read ? "text-gray-600 dark:text-gray-400" : "font-semibold text-gray-900 dark:text-white")),
                    () => _i(f(k).timestamp_ms),
                    () => hi(f(k).timestamp_ms),
                    () => hr(r("p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors", f(p) === f(k).id ? "text-blue-500" : "text-gray-400"))
                  ]
                ), se("click", fe, () => Bn(f(k))), se("click", et, (pe) => pe.stopPropagation()), se("click", X, () => Bn(f(k))), se("click", V, () => Ln(f(k))), se("click", Et, () => ci(f(k))), S(ge, fe);
              }), S(w, P);
            };
            W(Ri, (w) => {
              f(_) ? w(Oi) : f(l).length === 0 ? w(Fi, 1) : w(ji, -1);
            });
          }
          var Vn = x(zn, 2), Li = x(v(Vn), 4);
          {
            var Bi = (w) => {
              var P = Ql();
              S(w, P);
            }, Hi = (w) => {
              var P = $l(), ue = v(P);
              Z(() => R(ue, f(c))), S(w, P);
            }, qi = (w) => {
              var P = no(), ue = v(P), K = x(v(ue));
              Gt(K, 21, () => f(b).invoices, cr, (ge, k) => {
                var fe = ro(), Ce = v(fe), Oe = v(Ce), Y = v(Oe), ee = x(Ce), te = v(ee), H = x(ee), re = v(H), Te = x(H), j = v(Te), ne = v(j), U = x(Te), Me = v(U);
                {
                  var de = (X) => {
                    var me = eo(), V = v(me), we = x(V, 2), Et = x(we, 2);
                    se("click", V, () => pi(f(k))), se("click", we, () => yi(f(k))), se("click", Et, () => xi(f(k))), S(X, me);
                  }, et = (X) => {
                    var me = to(), V = v(me);
                    Z(() => R(V, f(k).paid_on || "—")), S(X, me);
                  };
                  W(Me, (X) => {
                    f(k).status === "Pending" || f(k).status === "Overdue" ? X(de) : X(et, -1);
                  });
                }
                Z(
                  (X) => {
                    R(Y, f(k).metadata || "Invoice"), R(te, f(k).amount), R(re, f(k).currency), _r(j, 1, X), R(ne, f(k).status);
                  },
                  [
                    () => hr(r("px-2.5 py-0.5 text-xs font-medium rounded-full", gi(f(k).status)))
                  ]
                ), S(ge, fe);
              }), S(w, P);
            }, zi = (w) => {
              var P = ao();
              S(w, P);
            };
            W(Li, (w) => {
              f(g) ? w(Bi) : f(c) ? w(Hi, 1) : f(b)?.invoices?.length > 0 ? w(qi, 2) : w(zi, -1);
            });
          }
          var Gn = x(Vn, 2);
          {
            var Ui = (w) => {
              var P = co(), ue = v(P), K = v(ue), ge = x(v(K), 2), k = x(K, 2), fe = v(k);
              {
                var Ce = (H) => {
                  var re = io();
                  S(H, re);
                }, Oe = (H) => {
                  var re = uo(), Te = Dr(re), j = v(Te), ne = v(j), U = x(v(ne), 2), Me = v(U), de = x(ne, 2), et = x(v(de), 2), X = v(et), me = x(Te, 2), V = x(v(me), 2), we = v(V), Et = x(v(we), 2), pe = v(Et), lt = x(we, 2);
                  {
                    var rn = (Pe) => {
                      var gt = so(), ur = x(v(gt), 2), fr = v(ur);
                      Z(() => R(fr, `${f(L).amount_human ?? ""} ${f(L).currency ?? ""}`)), S(Pe, gt);
                    };
                    W(lt, (Pe) => {
                      f(L).amount_human != null && Pe(rn);
                    });
                  }
                  var nn = x(lt, 2);
                  {
                    var an = (Pe) => {
                      var gt = lo(), ur = x(v(gt), 2), fr = v(ur);
                      Z(() => R(fr, f(L).subaccount)), S(Pe, gt);
                    };
                    W(nn, (Pe) => {
                      f(L).subaccount && Pe(an);
                    });
                  }
                  var Jn = x(me, 2);
                  {
                    var Zi = (Pe) => {
                      var gt = oo(), ur = v(gt), fr = v(ur);
                      Z(() => R(fr, f(L).note)), S(Pe, gt);
                    };
                    W(Jn, (Pe) => {
                      f(L).note && Pe(Zi);
                    });
                  }
                  var Qi = x(Jn, 2), $i = x(v(Qi), 2), Kn = v($i), es = v(Kn), Xn = x(Kn, 2), ts = v(Xn);
                  Z(
                    (Pe) => {
                      R(Me, f(L).invoice_id), R(X, f(L).currency), R(pe, f(L).principal), R(es, Pe), R(ts, f(Xr) ? "✓" : "📋");
                    },
                    [() => Hn(f(L))]
                  ), se("click", Xn, () => bi(Hn(f(L)))), S(H, re);
                }, Y = (H) => {
                  var re = fo();
                  S(H, re);
                };
                W(fe, (H) => {
                  f(sr) ? H(Ce) : f(L) ? H(Oe, 1) : H(Y, -1);
                });
              }
              var ee = x(k, 2), te = v(ee);
              se("click", P, () => y(oe, !1)), se("click", ue, (H) => H.stopPropagation()), se("click", ge, () => y(oe, !1)), se("click", te, () => y(oe, !1)), S(w, P);
            };
            W(Gn, (w) => {
              f(oe) && w(Ui);
            });
          }
          var Vi = x(Gn, 2), Yn = v(Vi), Gi = x(v(Yn), 2), Wn = x(Yn, 2);
          {
            var Yi = (w) => {
              var P = _o(), ue = v(P), K = x(v(ue), 2), ge = x(ue, 2), k = v(ge), fe = x(v(k), 2);
              Gt(fe, 21, () => li, cr, (j, ne) => {
                var U = vo(), Me = v(U), de = {};
                Z(() => {
                  R(Me, f(ne).label), de !== (de = f(ne).value) && (U.value = (U.__value = f(ne).value) ?? "");
                }), S(j, U);
              });
              var Ce = x(k, 2), Oe = x(v(Ce), 2);
              Gt(Oe, 21, () => f(oi), cr, (j, ne) => {
                var U = ho(), Me = v(U), de = {};
                Z(() => {
                  R(Me, f(ne).label), de !== (de = f(ne).value) && (U.value = (U.__value = f(ne).value) ?? "");
                }), S(j, U);
              });
              var Y = x(ge, 2), ee = x(v(Y), 2), te = x(Y, 2), H = v(te), re = x(H, 2), Te = v(re);
              Z(() => {
                re.disabled = f(Qe) || !f($) || !f(ie), R(Te, f(Qe) ? "Saving…" : "Save");
              }), ca(K, () => f($), (j) => y($, j)), fa(fe, () => f(xe), (j) => y(xe, j)), fa(Oe, () => f(he), (j) => y(he, j)), ca(ee, () => f(ie), (j) => y(ie, j)), se("click", H, () => {
                y(I, !1), y($, ""), y(ie, "");
              }), se("click", re, mi), S(w, P);
            };
            W(Wn, (w) => {
              f(I) && w(Yi);
            });
          }
          var Wi = x(Wn, 2);
          {
            var Ji = (w) => {
              var P = go();
              S(w, P);
            }, Ki = (w) => {
              var P = po();
              S(w, P);
            }, Xi = (w) => {
              var P = wo();
              Gt(P, 21, () => f(E), cr, (ue, K) => {
                var ge = mo(), k = v(ge), fe = v(k), Ce = v(fe), Oe = x(fe, 2);
                {
                  var Y = (V) => {
                    var we = bo();
                    S(V, we);
                  };
                  W(Oe, (V) => {
                    f(K).is_verified && V(Y);
                  });
                }
                var ee = x(k, 2), te = v(ee), H = v(te), re = x(te, 2), Te = v(re), j = x(ee, 2), ne = v(j), U = v(ne), Me = x(j, 2), de = v(Me);
                {
                  var et = (V) => {
                    var we = yo(), Et = v(we);
                    Z((pe) => R(Et, `Created: ${pe ?? ""}`), [
                      () => new Date(f(K).created_at).toLocaleDateString()
                    ]), S(V, we);
                  }, X = (V) => {
                    var we = xo();
                    S(V, we);
                  };
                  W(de, (V) => {
                    f(K).created_at ? V(et) : V(X, -1);
                  });
                }
                var me = x(de, 2);
                Z(() => {
                  R(Ce, f(K).label), R(H, f(K).network), R(Te, f(K).currency), R(U, f(K).address);
                }), se("click", me, () => wi(f(K).id)), S(ue, ge);
              }), S(w, P);
            };
            W(Wi, (w) => {
              f(M) && f(E).length === 0 ? w(Ji) : f(E).length === 0 ? w(Ki, 1) : w(Xi, -1);
            });
          }
          se("click", Gi, () => y(I, !f(I))), S(_e, $e);
        };
        W(Ai, (_e) => {
          f(o) ? _e(Ci) : f(d) ? _e(Ti, 1) : _e(Mi, -1);
        });
      }
      Z((_e) => R(Ye, _e), [() => ui()]), S(h, m);
    };
    W(ki, (h) => {
      f(n) ? h(Si, -1) : h(Ei);
    });
  }
  S(e, qn), ma();
}
pl(["click"]);
function Mo(e, t) {
  const r = ml(Ao, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        kl(r);
      } catch {
      }
    }
  };
}
export {
  Mo as default
};
