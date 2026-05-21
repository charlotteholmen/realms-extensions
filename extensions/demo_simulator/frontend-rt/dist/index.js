var Ys = Object.defineProperty;
var Yn = (e) => {
  throw TypeError(e);
};
var Hs = (e, t, n) => t in e ? Ys(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ie = (e, t, n) => Hs(e, typeof t != "symbol" ? t + "" : t, n), Zt = (e, t, n) => t.has(e) || Yn("Cannot " + n);
var i = (e, t, n) => (Zt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), m = (e, t, n) => t.has(e) ? Yn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), x = (e, t, n, r) => (Zt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), R = (e, t, n) => (Zt(e, t, "access private method"), n);
var Gs = Array.isArray, Js = Array.prototype.indexOf, at = Array.prototype.includes, Ks = Array.from, Ws = Object.defineProperty, _t = Object.getOwnPropertyDescriptor, $s = Object.prototype, Zs = Array.prototype, Qs = Object.getPrototypeOf, Hn = Object.isExtensible;
const Xs = () => {
};
function ei(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ir() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
const z = 2, lt = 4, Jt = 8, ar = 1 << 24, ve = 16, he = 32, He = 64, nn = 128, ee = 512, F = 1024, L = 2048, _e = 4096, te = 8192, fe = 16384, Ke = 32768, Gn = 1 << 25, ot = 65536, rn = 1 << 17, ti = 1 << 18, ct = 1 << 19, ni = 1 << 20, Ge = 65536, sn = 1 << 21, mt = 1 << 22, Oe = 1 << 23, Qt = Symbol("$state"), we = new class extends Error {
  constructor() {
    super(...arguments);
    ie(this, "name", "StaleReactionError");
    ie(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function ri() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function si(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ii() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ai(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function li() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function oi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function fi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ui() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function di() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ci = 1, vi = 2, I = Symbol(), hi = "http://www.w3.org/1999/xhtml";
function _i() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function pi() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function lr(e) {
  return e === this.v;
}
let re = null;
function ft(e) {
  re = e;
}
function or(e, t = !1, n) {
  re = {
    p: re,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      S
    ),
    l: null
  };
}
function fr(e) {
  var t = (
    /** @type {ComponentContext} */
    re
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Mr(r);
  }
  return t.i = !0, re = t.p, /** @type {T} */
  {};
}
function ur() {
  return !0;
}
let Fe = [];
function dr() {
  var e = Fe;
  Fe = [], ei(e);
}
function et(e) {
  if (Fe.length === 0 && !pt) {
    var t = Fe;
    queueMicrotask(() => {
      t === Fe && dr();
    });
  }
  Fe.push(e);
}
function bi() {
  for (; Fe.length > 0; )
    dr();
}
function cr(e) {
  var t = S;
  if (t === null)
    return k.f |= Oe, e;
  if (!(t.f & Ke) && !(t.f & lt))
    throw e;
  Re(e, t);
}
function Re(e, t) {
  for (; t !== null; ) {
    if (t.f & nn) {
      if (!(t.f & Ke))
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
const gi = -7169;
function C(e, t) {
  e.f = e.f & gi | t;
}
function pn(e) {
  e.f & ee || e.deps === null ? C(e, F) : C(e, _e);
}
function vr(e) {
  if (e !== null)
    for (const t of e)
      !(t.f & z) || !(t.f & Ge) || (t.f ^= Ge, vr(
        /** @type {Derived} */
        t.deps
      ));
}
function hr(e, t, n) {
  e.f & L ? t.add(e) : e.f & _e && n.add(e), vr(e.deps), C(e, F);
}
const Pe = /* @__PURE__ */ new Set();
let w = null, le = null, an = null, pt = !1, Xt = !1, Xe = null, Pt = null;
var Jn = 0;
let mi = 1;
var tt, nt, Le, xe, ue, wt, H, xt, Ne, ke, de, rt, st, ze, P, Ft, _r, It, ln, jt, yi;
const Yt = class Yt {
  constructor() {
    m(this, P);
    ie(this, "id", mi++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    ie(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    ie(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, tt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, nt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, Le, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    m(this, xe, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    m(this, ue, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    m(this, wt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    m(this, H, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    m(this, xt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    m(this, Ne, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    m(this, ke, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    m(this, de, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    m(this, rt, /* @__PURE__ */ new Set());
    ie(this, "is_fork", !1);
    m(this, st, !1);
    /** @type {Set<Batch>} */
    m(this, ze, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    i(this, de).has(t) || i(this, de).set(t, { d: [], m: [] }), i(this, rt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = i(this, de).get(t);
    if (r) {
      i(this, de).delete(t);
      for (var s of r.d)
        C(s, L), n(s);
      for (s of r.m)
        C(s, _e), n(s);
    }
    i(this, rt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== I && !this.previous.has(t) && this.previous.set(t, t.v), t.f & Oe || (this.current.set(t, [n, r]), le?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    w = this;
  }
  deactivate() {
    w = null, le = null;
  }
  flush() {
    try {
      Xt = !0, w = this, R(this, P, It).call(this);
    } finally {
      Jn = 0, an = null, Xe = null, Pt = null, Xt = !1, w = null, le = null, Ue.clear();
    }
  }
  discard() {
    for (const t of i(this, nt)) t(this);
    i(this, nt).clear(), i(this, Le).clear(), Pe.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    i(this, xt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    let r = i(this, xe).get(n) ?? 0;
    if (i(this, xe).set(n, r + 1), t) {
      let s = i(this, ue).get(n) ?? 0;
      i(this, ue).set(n, s + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, r) {
    let s = i(this, xe).get(n) ?? 0;
    if (s === 1 ? i(this, xe).delete(n) : i(this, xe).set(n, s - 1), t) {
      let a = i(this, ue).get(n) ?? 0;
      a === 1 ? i(this, ue).delete(n) : i(this, ue).set(n, a - 1);
    }
    i(this, st) || r || (x(this, st, !0), et(() => {
      x(this, st, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      i(this, Ne).add(r);
    for (const r of n)
      i(this, ke).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    i(this, tt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    i(this, nt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    i(this, Le).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of i(this, Le)) t(this);
    i(this, Le).clear();
  }
  settled() {
    return (i(this, wt) ?? x(this, wt, ir())).promise;
  }
  static ensure() {
    if (w === null) {
      const t = w = new Yt();
      Xt || (Pe.add(w), pt || et(() => {
        w === t && t.flush();
      }));
    }
    return w;
  }
  apply() {
    {
      le = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (an = t, t.b?.is_pending && t.f & (lt | Jt | ar) && !(t.f & Ke)) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (Xe !== null && n === S && (k === null || !(k.f & z)))
        return;
      if (r & (He | he)) {
        if (!(r & F))
          return;
        n.f ^= F;
      }
    }
    i(this, H).push(n);
  }
};
tt = new WeakMap(), nt = new WeakMap(), Le = new WeakMap(), xe = new WeakMap(), ue = new WeakMap(), wt = new WeakMap(), H = new WeakMap(), xt = new WeakMap(), Ne = new WeakMap(), ke = new WeakMap(), de = new WeakMap(), rt = new WeakMap(), st = new WeakMap(), ze = new WeakMap(), P = new WeakSet(), Ft = function() {
  return this.is_fork || i(this, ue).size > 0;
}, _r = function() {
  for (const r of i(this, ze))
    for (const s of i(r, ue).keys()) {
      for (var t = !1, n = s; n.parent !== null; ) {
        if (i(this, de).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, It = function() {
  var o;
  if (Jn++ > 1e3 && (Pe.delete(this), xi()), !R(this, P, Ft).call(this)) {
    for (const l of i(this, Ne))
      i(this, ke).delete(l), C(l, L), this.schedule(l);
    for (const l of i(this, ke))
      C(l, _e), this.schedule(l);
  }
  const t = i(this, H);
  x(this, H, []), this.apply();
  var n = Xe = [], r = [], s = Pt = [];
  for (const l of t)
    try {
      R(this, P, ln).call(this, l, n, r);
    } catch (u) {
      throw gr(l), u;
    }
  if (w = null, s.length > 0) {
    var a = Yt.ensure();
    for (const l of s)
      a.schedule(l);
  }
  if (Xe = null, Pt = null, R(this, P, Ft).call(this) || R(this, P, _r).call(this)) {
    R(this, P, jt).call(this, r), R(this, P, jt).call(this, n);
    for (const [l, u] of i(this, de))
      br(l, u);
  } else {
    i(this, xe).size === 0 && Pe.delete(this), i(this, Ne).clear(), i(this, ke).clear();
    for (const l of i(this, tt)) l(this);
    i(this, tt).clear(), Kn(r), Kn(n), i(this, wt)?.resolve();
  }
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    w
  );
  if (i(this, H).length > 0) {
    const l = f ?? (f = this);
    i(l, H).push(...i(this, H).filter((u) => !i(l, H).includes(u)));
  }
  f !== null && (Pe.add(f), R(o = f, P, It).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
ln = function(t, n, r) {
  t.f ^= F;
  for (var s = t.first; s !== null; ) {
    var a = s.f, f = (a & (he | He)) !== 0, o = f && (a & F) !== 0, l = o || (a & te) !== 0 || i(this, de).has(s);
    if (!l && s.fn !== null) {
      f ? s.f ^= F : a & lt ? n.push(s) : At(s) && (a & ve && i(this, ke).add(s), dt(s));
      var u = s.first;
      if (u !== null) {
        s = u;
        continue;
      }
    }
    for (; s !== null; ) {
      var v = s.next;
      if (v !== null) {
        s = v;
        break;
      }
      s = s.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
jt = function(t) {
  for (var n = 0; n < t.length; n += 1)
    hr(t[n], i(this, Ne), i(this, ke));
}, yi = function() {
  var v, g, _;
  for (const c of Pe) {
    var t = c.id < this.id, n = [];
    for (const [d, [N, T]] of this.current) {
      if (c.current.has(d)) {
        var r = (
          /** @type {[any, boolean]} */
          c.current.get(d)[0]
        );
        if (t && N !== r)
          c.current.set(d, [N, T]);
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
        for (const d of i(this, rt))
          c.unskip_effect(d, (N) => {
            var T;
            N.f & (ve | mt) ? c.schedule(N) : R(T = c, P, jt).call(T, [N]);
          });
      c.activate();
      var a = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (var o of n)
        pr(o, s, a, f);
      f = /* @__PURE__ */ new Map();
      var l = [...c.current.keys()].filter(
        (d) => this.current.has(d) ? (
          /** @type {[any, boolean]} */
          this.current.get(d)[0] !== d
        ) : !0
      );
      for (const d of i(this, xt))
        !(d.f & (fe | te | rn)) && bn(d, l, f) && (d.f & (mt | ve) ? (C(d, L), c.schedule(d)) : i(c, Ne).add(d));
      if (i(c, H).length > 0) {
        c.apply();
        for (var u of i(c, H))
          R(v = c, P, ln).call(v, u, [], []);
        x(c, H, []);
      }
      c.deactivate();
    }
  }
  for (const c of Pe)
    i(c, ze).has(this) && (i(c, ze).delete(this), i(c, ze).size === 0 && !R(g = c, P, Ft).call(g) && (c.activate(), R(_ = c, P, It).call(_)));
};
let Je = Yt;
function wi(e) {
  var t = pt;
  pt = !0;
  try {
    for (var n; ; ) {
      if (bi(), w === null)
        return (
          /** @type {T} */
          n
        );
      w.flush();
    }
  } finally {
    pt = t;
  }
}
function xi() {
  try {
    li();
  } catch (e) {
    Re(e, an);
  }
}
let me = null;
function Kn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (!(r.f & (fe | te)) && At(r) && (me = /* @__PURE__ */ new Set(), dt(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Dr(r), me?.size > 0)) {
        Ue.clear();
        for (const s of me) {
          if (s.f & (fe | te)) continue;
          const a = [s];
          let f = s.parent;
          for (; f !== null; )
            me.has(f) && (me.delete(f), a.push(f)), f = f.parent;
          for (let o = a.length - 1; o >= 0; o--) {
            const l = a[o];
            l.f & (fe | te) || dt(l);
          }
        }
        me.clear();
      }
    }
    me = null;
  }
}
function pr(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const a = s.f;
      a & z ? pr(
        /** @type {Derived} */
        s,
        t,
        n,
        r
      ) : a & (mt | ve) && !(a & L) && bn(s, t, r) && (C(s, L), gn(
        /** @type {Effect} */
        s
      ));
    }
}
function bn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (at.call(t, s))
        return !0;
      if (s.f & z && bn(
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
function gn(e) {
  w.schedule(e);
}
function br(e, t) {
  if (!(e.f & he && e.f & F)) {
    e.f & L ? t.d.push(e) : e.f & _e && t.m.push(e), C(e, F);
    for (var n = e.first; n !== null; )
      br(n, t), n = n.next;
  }
}
function gr(e) {
  C(e, F);
  for (var t = e.first; t !== null; )
    gr(t), t = t.next;
}
function ki(e) {
  let t = 0, n = Kt(0), r;
  return () => {
    wn() && (h(n), Rr(() => (t === 0 && (r = Yr(() => e(() => bt(n)))), t += 1, () => {
      et(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, bt(n));
      });
    })));
  };
}
var Ei = ot | ct;
function Si(e, t, n, r) {
  new Ti(e, t, n, r);
}
var Z, _n, Q, Ve, B, X, V, G, Ee, Be, Me, it, kt, Et, Se, Ht, O, Ai, Ni, Mi, on, Lt, zt, fn, un;
class Ti {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, s) {
    m(this, O);
    /** @type {Boundary | null} */
    ie(this, "parent");
    ie(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    ie(this, "transform_error");
    /** @type {TemplateNode} */
    m(this, Z);
    /** @type {TemplateNode | null} */
    m(this, _n, null);
    /** @type {BoundaryProps} */
    m(this, Q);
    /** @type {((anchor: Node) => void)} */
    m(this, Ve);
    /** @type {Effect} */
    m(this, B);
    /** @type {Effect | null} */
    m(this, X, null);
    /** @type {Effect | null} */
    m(this, V, null);
    /** @type {Effect | null} */
    m(this, G, null);
    /** @type {DocumentFragment | null} */
    m(this, Ee, null);
    m(this, Be, 0);
    m(this, Me, 0);
    m(this, it, !1);
    /** @type {Set<Effect>} */
    m(this, kt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    m(this, Et, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    m(this, Se, null);
    m(this, Ht, ki(() => (x(this, Se, Kt(i(this, Be))), () => {
      x(this, Se, null);
    })));
    x(this, Z, t), x(this, Q, n), x(this, Ve, (a) => {
      var f = (
        /** @type {Effect} */
        S
      );
      f.b = this, f.f |= nn, r(a);
    }), this.parent = /** @type {Effect} */
    S.b, this.transform_error = s ?? this.parent?.transform_error ?? ((a) => a), x(this, B, Or(() => {
      R(this, O, on).call(this);
    }, Ei));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    hr(t, i(this, kt), i(this, Et));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!i(this, Q).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    R(this, O, fn).call(this, t, n), x(this, Be, i(this, Be) + t), !(!i(this, Se) || i(this, it)) && (x(this, it, !0), et(() => {
      x(this, it, !1), i(this, Se) && qt(i(this, Se), i(this, Be));
    }));
  }
  get_effect_pending() {
    return i(this, Ht).call(this), h(
      /** @type {Source<number>} */
      i(this, Se)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!i(this, Q).onerror && !i(this, Q).failed)
      throw t;
    w?.is_fork ? (i(this, X) && w.skip_effect(i(this, X)), i(this, V) && w.skip_effect(i(this, V)), i(this, G) && w.skip_effect(i(this, G)), w.on_fork_commit(() => {
      R(this, O, un).call(this, t);
    })) : R(this, O, un).call(this, t);
  }
}
Z = new WeakMap(), _n = new WeakMap(), Q = new WeakMap(), Ve = new WeakMap(), B = new WeakMap(), X = new WeakMap(), V = new WeakMap(), G = new WeakMap(), Ee = new WeakMap(), Be = new WeakMap(), Me = new WeakMap(), it = new WeakMap(), kt = new WeakMap(), Et = new WeakMap(), Se = new WeakMap(), Ht = new WeakMap(), O = new WeakSet(), Ai = function() {
  try {
    x(this, X, ye(() => i(this, Ve).call(this, i(this, Z))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Ni = function(t) {
  const n = i(this, Q).failed;
  n && x(this, G, ye(() => {
    n(
      i(this, Z),
      () => t,
      () => () => {
      }
    );
  }));
}, Mi = function() {
  const t = i(this, Q).pending;
  t && (this.is_pending = !0, x(this, V, ye(() => t(i(this, Z)))), et(() => {
    var n = x(this, Ee, document.createDocumentFragment()), r = Ut();
    n.append(r), x(this, X, R(this, O, zt).call(this, () => ye(() => i(this, Ve).call(this, r)))), i(this, Me) === 0 && (i(this, Z).before(n), x(this, Ee, null), gt(
      /** @type {Effect} */
      i(this, V),
      () => {
        x(this, V, null);
      }
    ), R(this, O, Lt).call(
      this,
      /** @type {Batch} */
      w
    ));
  }));
}, on = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), x(this, Me, 0), x(this, Be, 0), x(this, X, ye(() => {
      i(this, Ve).call(this, i(this, Z));
    })), i(this, Me) > 0) {
      var t = x(this, Ee, document.createDocumentFragment());
      Ir(i(this, X), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        i(this, Q).pending
      );
      x(this, V, ye(() => n(i(this, Z))));
    } else
      R(this, O, Lt).call(
        this,
        /** @type {Batch} */
        w
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
Lt = function(t) {
  this.is_pending = !1, t.transfer_effects(i(this, kt), i(this, Et));
}, /**
 * @template T
 * @param {() => T} fn
 */
zt = function(t) {
  var n = S, r = k, s = re;
  pe(i(this, B)), se(i(this, B)), ft(i(this, B).ctx);
  try {
    return Je.ensure(), t();
  } catch (a) {
    return cr(a), null;
  } finally {
    pe(n), se(r), ft(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
fn = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && R(r = this.parent, O, fn).call(r, t, n);
    return;
  }
  x(this, Me, i(this, Me) + t), i(this, Me) === 0 && (R(this, O, Lt).call(this, n), i(this, V) && gt(i(this, V), () => {
    x(this, V, null);
  }), i(this, Ee) && (i(this, Z).before(i(this, Ee)), x(this, Ee, null)));
}, /**
 * @param {unknown} error
 */
un = function(t) {
  i(this, X) && (K(i(this, X)), x(this, X, null)), i(this, V) && (K(i(this, V)), x(this, V, null)), i(this, G) && (K(i(this, G)), x(this, G, null));
  var n = i(this, Q).onerror;
  let r = i(this, Q).failed;
  var s = !1, a = !1;
  const f = () => {
    if (s) {
      pi();
      return;
    }
    s = !0, a && di(), i(this, G) !== null && gt(i(this, G), () => {
      x(this, G, null);
    }), R(this, O, zt).call(this, () => {
      R(this, O, on).call(this);
    });
  }, o = (l) => {
    try {
      a = !0, n?.(l, f), a = !1;
    } catch (u) {
      Re(u, i(this, B) && i(this, B).parent);
    }
    r && x(this, G, R(this, O, zt).call(this, () => {
      try {
        return ye(() => {
          var u = (
            /** @type {Effect} */
            S
          );
          u.b = this, u.f |= nn, r(
            i(this, Z),
            () => l,
            () => f
          );
        });
      } catch (u) {
        return Re(
          u,
          /** @type {Effect} */
          i(this, B).parent
        ), null;
      }
    }));
  };
  et(() => {
    var l;
    try {
      l = this.transform_error(t);
    } catch (u) {
      Re(u, i(this, B) && i(this, B).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      o,
      /** @param {unknown} e */
      (u) => Re(u, i(this, B) && i(this, B).parent)
    ) : o(l);
  });
};
function Ri(e, t, n, r) {
  const s = yr;
  var a = e.filter((_) => !_.settled);
  if (n.length === 0 && a.length === 0) {
    r(t.map(s));
    return;
  }
  var f = (
    /** @type {Effect} */
    S
  ), o = Oi(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((_) => _.promise)) : null;
  function u(_) {
    o();
    try {
      r(_);
    } catch (c) {
      f.f & fe || Re(c, f);
    }
    Bt();
  }
  if (n.length === 0) {
    l.then(() => u(t.map(s)));
    return;
  }
  var v = mr();
  function g() {
    Promise.all(n.map((_) => /* @__PURE__ */ Ci(_))).then((_) => u([...t.map(s), ..._])).catch((_) => Re(_, f)).finally(() => v());
  }
  l ? l.then(() => {
    o(), g(), Bt();
  }) : g();
}
function Oi() {
  var e = (
    /** @type {Effect} */
    S
  ), t = k, n = re, r = (
    /** @type {Batch} */
    w
  );
  return function(a = !0) {
    pe(e), se(t), ft(n), a && !(e.f & fe) && (r?.activate(), r?.apply());
  };
}
function Bt(e = !0) {
  pe(null), se(null), ft(null), e && w?.deactivate();
}
function mr() {
  var e = (
    /** @type {Effect} */
    S
  ), t = (
    /** @type {Boundary} */
    e.b
  ), n = (
    /** @type {Batch} */
    w
  ), r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (s = !1) => {
    t.update_pending_count(-1, n), n.decrement(r, e, s);
  };
}
// @__NO_SIDE_EFFECTS__
function yr(e) {
  var t = z | L;
  return S !== null && (S.f |= ct), {
    ctx: re,
    deps: null,
    effects: null,
    equals: lr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      I
    ),
    wv: 0,
    parent: S,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ci(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    S
  );
  r === null && ri();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Kt(
    /** @type {V} */
    I
  ), f = !k, o = /* @__PURE__ */ new Map();
  return Gi(() => {
    var l = (
      /** @type {Effect} */
      S
    ), u = ir();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(Bt);
    } catch (c) {
      u.reject(c), Bt();
    }
    var v = (
      /** @type {Batch} */
      w
    );
    if (f) {
      if (l.f & Ke)
        var g = mr();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        o.get(v)?.reject(we), o.delete(v);
      else {
        for (const c of o.values())
          c.reject(we);
        o.clear();
      }
      o.set(v, u);
    }
    const _ = (c, d = void 0) => {
      if (g) {
        var N = d === we;
        g(N);
      }
      if (!(d === we || l.f & fe)) {
        if (v.activate(), d)
          a.f |= Oe, qt(a, d);
        else {
          a.f & Oe && (a.f ^= Oe), qt(a, c);
          for (const [T, U] of o) {
            if (o.delete(T), T === v) break;
            U.reject(we);
          }
        }
        v.deactivate();
      }
    };
    u.promise.then(_, (c) => _(null, c || "unknown"));
  }), qi(() => {
    for (const l of o.values())
      l.reject(we);
  }), new Promise((l) => {
    function u(v) {
      function g() {
        v === s ? l(a) : u(s);
      }
      v.then(g, g);
    }
    u(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Wn(e) {
  const t = /* @__PURE__ */ yr(e);
  return jr(t), t;
}
function Di(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      K(
        /** @type {Effect} */
        t[n]
      );
  }
}
function mn(e) {
  var t, n = S, r = e.parent;
  if (!Ce && r !== null && r.f & (fe | te))
    return _i(), e.v;
  pe(r);
  try {
    e.f &= ~Ge, Di(e), t = Br(e);
  } finally {
    pe(n);
  }
  return t;
}
function wr(e) {
  var t = mn(e);
  if (!e.equals(t) && (e.wv = zr(), (!w?.is_fork || e.deps === null) && (w !== null ? w.capture(e, t, !0) : e.v = t, e.deps === null))) {
    C(e, F);
    return;
  }
  Ce || (le !== null ? (wn() || w?.is_fork) && le.set(e, t) : pn(e));
}
function Pi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(we), t.teardown = Xs, t.ac = null, yt(t, 0), xn(t));
}
function xr(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && dt(t);
}
let dn = /* @__PURE__ */ new Set();
const Ue = /* @__PURE__ */ new Map();
let kr = !1;
function Kt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: lr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function j(e, t) {
  const n = Kt(e);
  return jr(n), n;
}
function y(e, t, n = !1) {
  k !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!oe || k.f & rn) && ur() && k.f & (z | ve | mt | rn) && (ne === null || !at.call(ne, e)) && ui();
  let r = n ? ht(t) : t;
  return qt(e, r, Pt);
}
function qt(e, t, n = null) {
  if (!e.equals(t)) {
    Ue.set(e, Ce ? t : e.v);
    var r = Je.ensure();
    if (r.capture(e, t), e.f & z) {
      const s = (
        /** @type {Derived} */
        e
      );
      e.f & L && mn(s), le === null && pn(s);
    }
    e.wv = zr(), Er(e, L, n), S !== null && S.f & F && !(S.f & (he | He)) && ($ === null ? $i([e]) : $.push(e)), !r.is_fork && dn.size > 0 && !kr && Fi();
  }
  return t;
}
function Fi() {
  kr = !1;
  for (const e of dn)
    e.f & F && C(e, _e), At(e) && dt(e);
  dn.clear();
}
function bt(e) {
  y(e, e.v + 1);
}
function Er(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var s = r.length, a = 0; a < s; a++) {
      var f = r[a], o = f.f, l = (o & L) === 0;
      if (l && C(f, t), o & z) {
        var u = (
          /** @type {Derived} */
          f
        );
        le?.delete(u), o & Ge || (o & ee && (f.f |= Ge), Er(u, _e, n));
      } else if (l) {
        var v = (
          /** @type {Effect} */
          f
        );
        o & ve && me !== null && me.add(v), n !== null ? n.push(v) : gn(v);
      }
    }
}
function ht(e) {
  if (typeof e != "object" || e === null || Qt in e)
    return e;
  const t = Qs(e);
  if (t !== $s && t !== Zs)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Gs(e), s = /* @__PURE__ */ j(0), a = Ye, f = (o) => {
    if (Ye === a)
      return o();
    var l = k, u = Ye;
    se(null), er(a);
    var v = o();
    return se(l), er(u), v;
  };
  return r && n.set("length", /* @__PURE__ */ j(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && oi();
        var v = n.get(l);
        return v === void 0 ? f(() => {
          var g = /* @__PURE__ */ j(u.value);
          return n.set(l, g), g;
        }) : y(v, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in o) {
            const v = f(() => /* @__PURE__ */ j(I));
            n.set(l, v), bt(s);
          }
        } else
          y(u, I), bt(s);
        return !0;
      },
      get(o, l, u) {
        if (l === Qt)
          return e;
        var v = n.get(l), g = l in o;
        if (v === void 0 && (!g || _t(o, l)?.writable) && (v = f(() => {
          var c = ht(g ? o[l] : I), d = /* @__PURE__ */ j(c);
          return d;
        }), n.set(l, v)), v !== void 0) {
          var _ = h(v);
          return _ === I ? void 0 : _;
        }
        return Reflect.get(o, l, u);
      },
      getOwnPropertyDescriptor(o, l) {
        var u = Reflect.getOwnPropertyDescriptor(o, l);
        if (u && "value" in u) {
          var v = n.get(l);
          v && (u.value = h(v));
        } else if (u === void 0) {
          var g = n.get(l), _ = g?.v;
          if (g !== void 0 && _ !== I)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return u;
      },
      has(o, l) {
        if (l === Qt)
          return !0;
        var u = n.get(l), v = u !== void 0 && u.v !== I || Reflect.has(o, l);
        if (u !== void 0 || S !== null && (!v || _t(o, l)?.writable)) {
          u === void 0 && (u = f(() => {
            var _ = v ? ht(o[l]) : I, c = /* @__PURE__ */ j(_);
            return c;
          }), n.set(l, u));
          var g = h(u);
          if (g === I)
            return !1;
        }
        return v;
      },
      set(o, l, u, v) {
        var g = n.get(l), _ = l in o;
        if (r && l === "length")
          for (var c = u; c < /** @type {Source<number>} */
          g.v; c += 1) {
            var d = n.get(c + "");
            d !== void 0 ? y(d, I) : c in o && (d = f(() => /* @__PURE__ */ j(I)), n.set(c + "", d));
          }
        if (g === void 0)
          (!_ || _t(o, l)?.writable) && (g = f(() => /* @__PURE__ */ j(void 0)), y(g, ht(u)), n.set(l, g));
        else {
          _ = g.v !== I;
          var N = f(() => ht(u));
          y(g, N);
        }
        var T = Reflect.getOwnPropertyDescriptor(o, l);
        if (T?.set && T.set.call(v, u), !_) {
          if (r && typeof l == "string") {
            var U = (
              /** @type {Source<number>} */
              n.get("length")
            ), Ae = Number(l);
            Number.isInteger(Ae) && Ae >= U.v && y(U, Ae + 1);
          }
          bt(s);
        }
        return !0;
      },
      ownKeys(o) {
        h(s);
        var l = Reflect.ownKeys(o).filter((g) => {
          var _ = n.get(g);
          return _ === void 0 || _.v !== I;
        });
        for (var [u, v] of n)
          v.v !== I && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        fi();
      }
    }
  );
}
var $n, Sr, Tr, Ar;
function Ii() {
  if ($n === void 0) {
    $n = window, Sr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Tr = _t(t, "firstChild").get, Ar = _t(t, "nextSibling").get, Hn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Hn(n) && (n.__t = void 0);
  }
}
function Ut(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ut(e) {
  return (
    /** @type {TemplateNode | null} */
    Tr.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
  return (
    /** @type {TemplateNode | null} */
    Ar.call(e)
  );
}
function b(e, t) {
  return /* @__PURE__ */ ut(e);
}
function Zn(e, t = !1) {
  {
    var n = /* @__PURE__ */ ut(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Wt(n) : n;
  }
}
function E(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Wt(r);
  return r;
}
function ji() {
  return !1;
}
function Nr(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(hi, e, void 0)
  );
}
let Qn = !1;
function Li() {
  Qn || (Qn = !0, document.addEventListener(
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
function yn(e) {
  var t = k, n = S;
  se(null), pe(null);
  try {
    return e();
  } finally {
    se(t), pe(n);
  }
}
function zi(e, t, n, r = n) {
  e.addEventListener(t, () => yn(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), r(!0);
  } : e.__on_r = () => r(!0), Li();
}
function Vi(e) {
  S === null && (k === null && ai(), ii()), Ce && si();
}
function Bi(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Te(e, t) {
  var n = S;
  n !== null && n.f & te && (e |= te);
  var r = {
    ctx: re,
    deps: null,
    nodes: null,
    f: e | L | ee,
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
  w?.register_created_effect(r);
  var s = r;
  if (e & lt)
    Xe !== null ? Xe.push(r) : Je.ensure().schedule(r);
  else if (t !== null) {
    try {
      dt(r);
    } catch (f) {
      throw K(r), f;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & ct) && (s = s.first, e & ve && e & ot && s !== null && (s.f |= ot));
  }
  if (s !== null && (s.parent = n, n !== null && Bi(s, n), k !== null && k.f & z && !(e & He))) {
    var a = (
      /** @type {Derived} */
      k
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return r;
}
function wn() {
  return k !== null && !oe;
}
function qi(e) {
  const t = Te(Jt, null);
  return C(t, F), t.teardown = e, t;
}
function Ui(e) {
  Vi();
  var t = (
    /** @type {Effect} */
    S.f
  ), n = !k && (t & he) !== 0 && (t & Ke) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      re
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Mr(e);
}
function Mr(e) {
  return Te(lt | ni, e);
}
function Yi(e) {
  Je.ensure();
  const t = Te(He | ct, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? gt(t, () => {
      K(t), r(void 0);
    }) : (K(t), r(void 0));
  });
}
function Hi(e) {
  return Te(lt, e);
}
function Gi(e) {
  return Te(mt | ct, e);
}
function Rr(e, t = 0) {
  return Te(Jt | t, e);
}
function vt(e, t = [], n = [], r = []) {
  Ri(r, t, n, (s) => {
    Te(Jt, () => e(...s.map(h)));
  });
}
function Or(e, t = 0) {
  var n = Te(ve | t, e);
  return n;
}
function ye(e) {
  return Te(he | ct, e);
}
function Cr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ce, r = k;
    Xn(!0), se(null);
    try {
      t.call(null);
    } finally {
      Xn(n), se(r);
    }
  }
}
function xn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && yn(() => {
      s.abort(we);
    });
    var r = n.next;
    n.f & He ? n.parent = null : K(n, t), n = r;
  }
}
function Ji(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & he || K(t), t = n;
  }
}
function K(e, t = !0) {
  var n = !1;
  (t || e.f & ti) && e.nodes !== null && e.nodes.end !== null && (Ki(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), C(e, Gn), xn(e, t && !n), yt(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const a of r)
      a.stop();
  Cr(e), e.f ^= Gn, e.f |= fe;
  var s = e.parent;
  s !== null && s.first !== null && Dr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Ki(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Wt(e);
    e.remove(), e = n;
  }
}
function Dr(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function gt(e, t, n = !0) {
  var r = [];
  Pr(e, r, !0);
  var s = () => {
    n && K(e), t && t();
  }, a = r.length;
  if (a > 0) {
    var f = () => --a || s();
    for (var o of r)
      o.out(f);
  } else
    s();
}
function Pr(e, t, n) {
  if (!(e.f & te)) {
    e.f ^= te;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && t.push(o);
    for (var s = e.first; s !== null; ) {
      var a = s.next, f = (s.f & ot) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & he) !== 0 && (e.f & ve) !== 0;
      Pr(s, t, f ? n : !1), s = a;
    }
  }
}
function Wi(e) {
  Fr(e, !0);
}
function Fr(e, t) {
  if (e.f & te) {
    e.f ^= te, e.f & F || (C(e, L), Je.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & ot) !== 0 || (n.f & he) !== 0;
      Fr(n, s ? t : !1), n = r;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const f of a)
        (f.is_global || t) && f.in();
  }
}
function Ir(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var s = n === r ? null : /* @__PURE__ */ Wt(n);
      t.append(n), n = s;
    }
}
let Vt = !1, Ce = !1;
function Xn(e) {
  Ce = e;
}
let k = null, oe = !1;
function se(e) {
  k = e;
}
let S = null;
function pe(e) {
  S = e;
}
let ne = null;
function jr(e) {
  k !== null && (ne === null ? ne = [e] : ne.push(e));
}
let q = null, Y = 0, $ = null;
function $i(e) {
  $ = e;
}
let Lr = 1, Ie = 0, Ye = Ie;
function er(e) {
  Ye = e;
}
function zr() {
  return ++Lr;
}
function At(e) {
  var t = e.f;
  if (t & L)
    return !0;
  if (t & z && (e.f &= ~Ge), t & _e) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, s = 0; s < r; s++) {
      var a = n[s];
      if (At(
        /** @type {Derived} */
        a
      ) && wr(
        /** @type {Derived} */
        a
      ), a.wv > e.wv)
        return !0;
    }
    t & ee && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    le === null && C(e, F);
  }
  return !1;
}
function Vr(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(ne !== null && at.call(ne, e)))
    for (var s = 0; s < r.length; s++) {
      var a = r[s];
      a.f & z ? Vr(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? C(a, L) : a.f & F && C(a, _e), gn(
        /** @type {Effect} */
        a
      ));
    }
}
function Br(e) {
  var N;
  var t = q, n = Y, r = $, s = k, a = ne, f = re, o = oe, l = Ye, u = e.f;
  q = /** @type {null | Value[]} */
  null, Y = 0, $ = null, k = u & (he | He) ? null : e, ne = null, ft(e.ctx), oe = !1, Ye = ++Ie, e.ac !== null && (yn(() => {
    e.ac.abort(we);
  }), e.ac = null);
  try {
    e.f |= sn;
    var v = (
      /** @type {Function} */
      e.fn
    ), g = v();
    e.f |= Ke;
    var _ = e.deps, c = w?.is_fork;
    if (q !== null) {
      var d;
      if (c || yt(e, Y), _ !== null && Y > 0)
        for (_.length = Y + q.length, d = 0; d < q.length; d++)
          _[Y + d] = q[d];
      else
        e.deps = _ = q;
      if (wn() && e.f & ee)
        for (d = Y; d < _.length; d++)
          ((N = _[d]).reactions ?? (N.reactions = [])).push(e);
    } else !c && _ !== null && Y < _.length && (yt(e, Y), _.length = Y);
    if (ur() && $ !== null && !oe && _ !== null && !(e.f & (z | _e | L)))
      for (d = 0; d < /** @type {Source[]} */
      $.length; d++)
        Vr(
          $[d],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (Ie++, s.deps !== null)
        for (let T = 0; T < n; T += 1)
          s.deps[T].rv = Ie;
      if (t !== null)
        for (const T of t)
          T.rv = Ie;
      $ !== null && (r === null ? r = $ : r.push(.../** @type {Source[]} */
      $));
    }
    return e.f & Oe && (e.f ^= Oe), g;
  } catch (T) {
    return cr(T);
  } finally {
    e.f ^= sn, q = t, Y = n, $ = r, k = s, ne = a, ft(f), oe = o, Ye = l;
  }
}
function Zi(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Js.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  if (n === null && t.f & z && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (q === null || !at.call(q, t))) {
    var a = (
      /** @type {Derived} */
      t
    );
    a.f & ee && (a.f ^= ee, a.f &= ~Ge), a.v !== I && pn(a), Pi(a), yt(a, 0);
  }
}
function yt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Zi(e, n[r]);
}
function dt(e) {
  var t = e.f;
  if (!(t & fe)) {
    C(e, F);
    var n = S, r = Vt;
    S = e, Vt = !0;
    try {
      t & (ve | ar) ? Ji(e) : xn(e), Cr(e);
      var s = Br(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Lr;
      var a;
    } finally {
      Vt = r, S = n;
    }
  }
}
async function Qi() {
  await Promise.resolve(), wi();
}
function h(e) {
  var t = e.f, n = (t & z) !== 0;
  if (k !== null && !oe) {
    var r = S !== null && (S.f & fe) !== 0;
    if (!r && (ne === null || !at.call(ne, e))) {
      var s = k.deps;
      if (k.f & sn)
        e.rv < Ie && (e.rv = Ie, q === null && s !== null && s[Y] === e ? Y++ : q === null ? q = [e] : q.push(e));
      else {
        (k.deps ?? (k.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [k] : at.call(a, k) || a.push(k);
      }
    }
  }
  if (Ce && Ue.has(e))
    return Ue.get(e);
  if (n) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (Ce) {
      var o = f.v;
      return (!(f.f & F) && f.reactions !== null || Ur(f)) && (o = mn(f)), Ue.set(f, o), o;
    }
    var l = (f.f & ee) === 0 && !oe && k !== null && (Vt || (k.f & ee) !== 0), u = (f.f & Ke) === 0;
    At(f) && (l && (f.f |= ee), wr(f)), l && !u && (xr(f), qr(f));
  }
  if (le?.has(e))
    return le.get(e);
  if (e.f & Oe)
    throw e.v;
  return e.v;
}
function qr(e) {
  if (e.f |= ee, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), t.f & z && !(t.f & ee) && (xr(
        /** @type {Derived} */
        t
      ), qr(
        /** @type {Derived} */
        t
      ));
}
function Ur(e) {
  if (e.v === I) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ue.has(t) || t.f & z && Ur(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Yr(e) {
  var t = oe;
  try {
    return oe = !0, e();
  } finally {
    oe = t;
  }
}
const Xi = ["touchstart", "touchmove"];
function ea(e) {
  return Xi.includes(e);
}
const je = Symbol("events"), Hr = /* @__PURE__ */ new Set(), cn = /* @__PURE__ */ new Set();
function Ot(e, t, n) {
  (t[je] ?? (t[je] = {}))[e] = n;
}
function ta(e) {
  for (var t = 0; t < e.length; t++)
    Hr.add(e[t]);
  for (var n of cn)
    n(e);
}
let tr = null;
function nr(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, s = e.composedPath?.() || [], a = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  tr = e;
  var f = 0, o = tr === e && e[je];
  if (o) {
    var l = s.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[je] = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    l <= u && (f = l);
  }
  if (a = /** @type {Element} */
  s[f] || e.target, a !== t) {
    Ws(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var v = k, g = S;
    se(null), pe(null);
    try {
      for (var _, c = []; a !== null; ) {
        var d = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var N = a[je]?.[r];
          N != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && N.call(a, e);
        } catch (T) {
          _ ? c.push(T) : _ = T;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        a = d;
      }
      if (_) {
        for (let T of c)
          queueMicrotask(() => {
            throw T;
          });
        throw _;
      }
    } finally {
      e[je] = t, delete e.currentTarget, se(v), pe(g);
    }
  }
}
const na = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function ra(e) {
  return (
    /** @type {string} */
    na?.createHTML(e) ?? e
  );
}
function Gr(e) {
  var t = Nr("template");
  return t.innerHTML = ra(e.replaceAll("<!>", "<!---->")), t.content;
}
function vn(e, t) {
  var n = (
    /** @type {Effect} */
    S
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function De(e, t) {
  var n = (t & ci) !== 0, r = (t & vi) !== 0, s, a = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = Gr(a ? e : "<!>" + e), n || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ ut(s)));
    var f = (
      /** @type {TemplateNode} */
      r || Sr ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ut(f)
      ), l = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      vn(o, l);
    } else
      vn(f, f);
    return f;
  };
}
// @__NO_SIDE_EFFECTS__
function sa(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), s = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (!a) {
      var f = (
        /** @type {DocumentFragment} */
        Gr(s)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ ut(f)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ ut(o);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return vn(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function ia(e, t) {
  return /* @__PURE__ */ sa(e, t, "svg");
}
function ge(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function D(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function aa(e, t) {
  return la(e, t);
}
const Ct = /* @__PURE__ */ new Map();
function la(e, { target: t, anchor: n, props: r = {}, events: s, context: a, intro: f = !0, transformError: o }) {
  Ii();
  var l = void 0, u = Yi(() => {
    var v = n ?? t.appendChild(Ut());
    Si(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (c) => {
        or({});
        var d = (
          /** @type {ComponentContext} */
          re
        );
        a && (d.c = a), s && (r.$$events = s), l = e(c, r) || {}, fr();
      },
      o
    );
    var g = /* @__PURE__ */ new Set(), _ = (c) => {
      for (var d = 0; d < c.length; d++) {
        var N = c[d];
        if (!g.has(N)) {
          g.add(N);
          var T = ea(N);
          for (const We of [t, document]) {
            var U = Ct.get(We);
            U === void 0 && (U = /* @__PURE__ */ new Map(), Ct.set(We, U));
            var Ae = U.get(N);
            Ae === void 0 ? (We.addEventListener(N, nr, { passive: T }), U.set(N, 1)) : U.set(N, Ae + 1);
          }
        }
      }
    };
    return _(Ks(Hr)), cn.add(_), () => {
      for (var c of g)
        for (const T of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            Ct.get(T)
          ), N = (
            /** @type {number} */
            d.get(c)
          );
          --N == 0 ? (T.removeEventListener(c, nr), d.delete(c), d.size === 0 && Ct.delete(T)) : d.set(c, N);
        }
      cn.delete(_), v !== n && v.parentNode?.removeChild(v);
    };
  });
  return hn.set(l, u), l;
}
let hn = /* @__PURE__ */ new WeakMap();
function oa(e, t) {
  const n = hn.get(e);
  return n ? (hn.delete(e), n(t)) : Promise.resolve();
}
var ae, ce, J, qe, St, Tt, Gt;
class fa {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    ie(this, "anchor");
    /** @type {Map<Batch, Key>} */
    m(this, ae, /* @__PURE__ */ new Map());
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
    m(this, ce, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    m(this, J, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    m(this, qe, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    m(this, St, !0);
    /**
     * @param {Batch} batch
     */
    m(this, Tt, (t) => {
      if (i(this, ae).has(t)) {
        var n = (
          /** @type {Key} */
          i(this, ae).get(t)
        ), r = i(this, ce).get(n);
        if (r)
          Wi(r), i(this, qe).delete(n);
        else {
          var s = i(this, J).get(n);
          s && (i(this, ce).set(n, s.effect), i(this, J).delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), r = s.effect);
        }
        for (const [a, f] of i(this, ae)) {
          if (i(this, ae).delete(a), a === t)
            break;
          const o = i(this, J).get(f);
          o && (K(o.effect), i(this, J).delete(f));
        }
        for (const [a, f] of i(this, ce)) {
          if (a === n || i(this, qe).has(a)) continue;
          const o = () => {
            if (Array.from(i(this, ae).values()).includes(a)) {
              var u = document.createDocumentFragment();
              Ir(f, u), u.append(Ut()), i(this, J).set(a, { effect: f, fragment: u });
            } else
              K(f);
            i(this, qe).delete(a), i(this, ce).delete(a);
          };
          i(this, St) || !r ? (i(this, qe).add(a), gt(f, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    m(this, Gt, (t) => {
      i(this, ae).delete(t);
      const n = Array.from(i(this, ae).values());
      for (const [r, s] of i(this, J))
        n.includes(r) || (K(s.effect), i(this, J).delete(r));
    });
    this.anchor = t, x(this, St, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      w
    ), s = ji();
    if (n && !i(this, ce).has(t) && !i(this, J).has(t))
      if (s) {
        var a = document.createDocumentFragment(), f = Ut();
        a.append(f), i(this, J).set(t, {
          effect: ye(() => n(f)),
          fragment: a
        });
      } else
        i(this, ce).set(
          t,
          ye(() => n(this.anchor))
        );
    if (i(this, ae).set(r, t), s) {
      for (const [o, l] of i(this, ce))
        o === t ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [o, l] of i(this, J))
        o === t ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(i(this, Tt)), r.ondiscard(i(this, Gt));
    } else
      i(this, Tt).call(this, r);
  }
}
ae = new WeakMap(), ce = new WeakMap(), J = new WeakMap(), qe = new WeakMap(), St = new WeakMap(), Tt = new WeakMap(), Gt = new WeakMap();
function Qe(e, t, n = !1) {
  var r = new fa(e), s = n ? ot : 0;
  function a(f, o) {
    r.ensure(f, o);
  }
  Or(() => {
    var f = !1;
    t((o, l = 0) => {
      f = !0, a(l, o);
    }), f || a(-1, null);
  }, s);
}
function ua(e, t) {
  Hi(() => {
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
      const s = Nr("style");
      s.id = t.hash, s.textContent = t.code, r.appendChild(s);
    }
  });
}
function da(e, t, n) {
  var r = e == null ? "" : "" + e;
  return r === "" ? null : r;
}
function ca(e, t) {
  return e == null ? null : String(e);
}
function rr(e, t, n, r, s, a) {
  var f = e.__className;
  if (f !== n || f === void 0) {
    var o = da(n);
    o == null ? e.removeAttribute("class") : e.className = o, e.__className = n;
  }
  return a;
}
function va(e, t, n, r) {
  var s = e.__style;
  if (s !== t) {
    var a = ca(t);
    a == null ? e.removeAttribute("style") : e.style.cssText = a, e.__style = t;
  }
  return r;
}
function Dt(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  zi(e, "input", async (s) => {
    var a = s ? e.defaultValue : e.value;
    if (a = en(e) ? tn(a) : a, n(a), w !== null && r.add(w), await Qi(), a !== (a = t())) {
      var f = e.selectionStart, o = e.selectionEnd, l = e.value.length;
      if (e.value = a ?? "", o !== null) {
        var u = e.value.length;
        f === o && o === l && u > l ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = f, e.selectionEnd = Math.min(o, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Yr(t) == null && e.value && (n(en(e) ? tn(e.value) : e.value), w !== null && r.add(w)), Rr(() => {
    var s = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        w
      );
      if (r.has(a))
        return;
    }
    en(e) && s === tn(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function en(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function tn(e) {
  return e === "" ? null : +e;
}
const ha = "5";
var sr;
typeof window < "u" && ((sr = window.__svelte ?? (window.__svelte = {})).v ?? (sr.v = /* @__PURE__ */ new Set())).add(ha);
var _a = /* @__PURE__ */ De("<span><span></span> </span>"), pa = /* @__PURE__ */ De('<div class="text-center py-12 text-gray-500 dark:text-gray-400">Loading...</div>'), ba = /* @__PURE__ */ De(`<div class="mb-4 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg"><p class="text-sm text-amber-800 dark:text-amber-300"><strong>Note:</strong> TEST_MODE and TEST_MODE_DEMO_DATA are not both enabled in backend
					config. The simulator will not auto-activate on canister start, but can still be toggled
					manually.</p></div>`), ga = /* @__PURE__ */ De('<div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1"><span> </span> <span> </span></div> <div class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"><div class="h-full bg-indigo-500 dark:bg-indigo-400 rounded-full transition-all duration-500"></div></div>', 1), ma = /* @__PURE__ */ De('<div class="text-xs text-gray-500 dark:text-gray-400"> </div>'), ya = /* @__PURE__ */ ia('<svg class="inline-block w-4 h-4 mr-1.5 animate-spin" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), wa = /* @__PURE__ */ De('<div class="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"><p class="text-sm text-red-800 dark:text-red-300"> </p></div>'), xa = /* @__PURE__ */ De('<!> <div class="ds-stats-grid mb-4 svelte-1lbndni"><div class="ds-stat svelte-1lbndni"><span class="ds-stat-val svelte-1lbndni" style="color:#4f46e5"> </span><span class="ds-stat-lbl svelte-1lbndni">Users</span></div> <div class="ds-stat svelte-1lbndni"><span class="ds-stat-val svelte-1lbndni" style="color:#059669"> </span><span class="ds-stat-lbl svelte-1lbndni">Orgs</span></div> <div class="ds-stat svelte-1lbndni"><span class="ds-stat-val svelte-1lbndni" style="color:#7c3aed"> </span><span class="ds-stat-lbl svelte-1lbndni">Proposals</span></div> <div class="ds-stat svelte-1lbndni"><span class="ds-stat-val svelte-1lbndni" style="color:#0891b2"> </span><span class="ds-stat-lbl svelte-1lbndni">Transfers</span></div> <div class="ds-stat svelte-1lbndni"><span class="ds-stat-val svelte-1lbndni" style="color:#e11d48"> </span><span class="ds-stat-lbl svelte-1lbndni">Disputes</span></div> <div class="ds-stat svelte-1lbndni"><span class="ds-stat-val svelte-1lbndni" style="color:#4f46e5"> </span><span class="ds-stat-lbl svelte-1lbndni">Votes</span></div> <div class="ds-stat svelte-1lbndni"><span class="ds-stat-val svelte-1lbndni" style="color:#059669"> </span><span class="ds-stat-lbl svelte-1lbndni">Lands</span></div> <div class="ds-stat svelte-1lbndni"><span class="ds-stat-val svelte-1lbndni" style="color:#d97706"> </span><span class="ds-stat-lbl svelte-1lbndni">Courts</span></div> <div class="ds-stat svelte-1lbndni"><span class="ds-stat-val svelte-1lbndni" style="color:#dc2626"> </span><span class="ds-stat-lbl svelte-1lbndni">Cases</span></div> <div class="ds-stat svelte-1lbndni"><span class="ds-stat-val svelte-1lbndni" style="color:#2563eb"> </span><span class="ds-stat-lbl svelte-1lbndni">Messages</span></div> <div class="ds-stat svelte-1lbndni"><span class="ds-stat-val svelte-1lbndni" style="color:#9333ea"> </span><span class="ds-stat-lbl svelte-1lbndni">Depts</span></div> <div class="ds-stat svelte-1lbndni"><span class="ds-stat-val svelte-1lbndni" style="color:#374151"> </span><span class="ds-stat-lbl svelte-1lbndni">Batches</span></div></div> <div class="mb-6"><!></div> <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 mb-4"><div class="flex items-center gap-3 mb-5"><button class="ds-btn ds-btn-primary flex-1 svelte-1lbndni"><!> </button> <button class="ds-btn ds-btn-secondary svelte-1lbndni"> </button></div> <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Configuration</h3> <div class="grid grid-cols-2 gap-3"><div><label for="ds-interval" class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Interval (s)</label> <input id="ds-interval" type="number" min="10" max="3600" class="ds-input svelte-1lbndni"/></div> <div><label for="ds-batch" class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Batch size</label> <input id="ds-batch" type="number" min="1" max="20" class="ds-input svelte-1lbndni"/></div> <div><label for="ds-max" class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Max entities</label> <input id="ds-max" type="text" placeholder="unlimited" class="ds-input svelte-1lbndni"/></div> <div><label for="ds-seed" class="block text-xs text-gray-500 dark:text-gray-400 mb-1">Seed (deterministic)</label> <input id="ds-seed" type="text" placeholder="random" class="ds-input svelte-1lbndni"/></div></div> <div class="flex gap-3 mt-4"><button class="ds-btn ds-btn-secondary flex-1 svelte-1lbndni"> </button> <button class="ds-btn ds-btn-danger svelte-1lbndni">Reset Counters</button></div></div> <!>', 1), ka = /* @__PURE__ */ De('<div class="max-w-2xl mx-auto p-6"><div class="flex items-center justify-between mb-6"><h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Demo Simulator</h2> <!></div> <!></div>');
const Ea = {
  hash: "svelte-1lbndni",
  code: ".ds-stats-grid.svelte-1lbndni {display:grid;grid-template-columns:repeat(6, 1fr);gap:0.375rem;}.ds-stat.svelte-1lbndni {display:flex;flex-direction:column;align-items:center;padding:0.375rem 0.25rem;border:1px solid #e5e7eb;border-radius:0.375rem;background:#fff;}.dark .ds-stat.svelte-1lbndni {background:#1f2937;border-color:#374151;}.ds-stat-val.svelte-1lbndni {font-size:1.125rem;font-weight:700;line-height:1.2;}.ds-stat-lbl.svelte-1lbndni {font-size:0.625rem;color:#6b7280;margin-top:0.125rem;}.dark .ds-stat-lbl.svelte-1lbndni {color:#9ca3af;}.ds-btn.svelte-1lbndni {padding:0.5rem 1rem;font-size:0.875rem;font-weight:500;border-radius:0.5rem;cursor:pointer;transition:all 150ms;border:none;}.ds-btn.svelte-1lbndni:disabled {opacity:0.5;cursor:not-allowed;}.ds-btn-primary.svelte-1lbndni {color:#fff !important;background-color:#4f46e5 !important;}.ds-btn-primary.svelte-1lbndni:hover:not(:disabled) {background-color:#4338ca !important;}.ds-btn-secondary.svelte-1lbndni {color:#374151 !important;background-color:#f3f4f6 !important;border:1px solid #d1d5db !important;}.ds-btn-secondary.svelte-1lbndni:hover:not(:disabled) {background-color:#e5e7eb !important;}.dark .ds-btn-secondary.svelte-1lbndni {color:#d1d5db !important;background-color:#374151 !important;border-color:#4b5563 !important;}.dark .ds-btn-secondary.svelte-1lbndni:hover:not(:disabled) {background-color:#4b5563 !important;}.ds-btn-danger.svelte-1lbndni {color:#dc2626 !important;background-color:transparent !important;border:1px solid #fca5a5 !important;}.ds-btn-danger.svelte-1lbndni:hover:not(:disabled) {background-color:#fef2f2 !important;}.dark .ds-btn-danger.svelte-1lbndni {color:#f87171 !important;border-color:#7f1d1d !important;}.dark .ds-btn-danger.svelte-1lbndni:hover:not(:disabled) {background-color:#7f1d1d33 !important;}.ds-input.svelte-1lbndni {width:100%;padding:0.375rem 0.625rem;font-size:0.875rem;border:1px solid #d1d5db;border-radius:0.375rem;background:#fff;color:#111827;transition:border-color 150ms;}.ds-input.svelte-1lbndni:focus {outline:none;border-color:#6366f1;box-shadow:0 0 0 2px rgba(99, 102, 241, 0.2);}.dark .ds-input.svelte-1lbndni {background:#1f2937;border-color:#4b5563;color:#f3f4f6;}"
};
function Sa(e, t) {
  or(t, !0), ua(e, Ea);
  let n = /* @__PURE__ */ j(null), r = /* @__PURE__ */ j(!0), s = /* @__PURE__ */ j(!1), a = /* @__PURE__ */ j(!1), f = /* @__PURE__ */ j(!1), o = /* @__PURE__ */ j(""), l = /* @__PURE__ */ j(60), u = /* @__PURE__ */ j(3), v = /* @__PURE__ */ j(""), g = /* @__PURE__ */ j(""), _ = /* @__PURE__ */ Wn(() => h(n) ? Object.values(h(n).stats).reduce((p, A) => p + (A ?? 0), 0) : 0), c = /* @__PURE__ */ Wn(() => h(n) && h(n).max_entities ? Math.min(100, Math.round(h(_) / h(n).max_entities * 100)) : 0);
  async function d() {
    try {
      const p = await t.ctx.callSync("get_status", {}), A = typeof p == "string" ? JSON.parse(p) : p;
      A.success ? (y(n, A, !0), y(l, A.interval_seconds, !0), y(u, A.batch_size, !0), y(v, A.max_entities != null ? String(A.max_entities) : "", !0), y(g, String(A.seed ?? ""), !0)) : y(o, A.error || "Failed to fetch status", !0);
    } catch (p) {
      y(o, p?.message ?? String(p), !0);
    } finally {
      y(r, !1);
    }
  }
  async function N() {
    if (h(n)) {
      y(s, !0), y(o, "");
      try {
        const p = await t.ctx.callSync("toggle", { enabled: !h(n).running }), A = typeof p == "string" ? JSON.parse(p) : p;
        A.success ? await d() : y(o, A.error || "Toggle failed", !0);
      } catch (p) {
        y(o, p?.message ?? String(p), !0);
      } finally {
        y(s, !1);
      }
    }
  }
  async function T() {
    y(a, !0), y(o, "");
    try {
      const p = h(v).toString().trim(), A = {
        interval_seconds: h(l),
        batch_size: h(u),
        max_entities: p ? parseInt(p, 10) : null
      };
      h(g).trim() && (A.seed = parseInt(h(g), 10));
      const be = await t.ctx.callSync("update_config", A), $e = typeof be == "string" ? JSON.parse(be) : be;
      $e.success ? await d() : y(o, $e.error || "Save failed", !0);
    } catch (p) {
      y(o, p?.message ?? String(p), !0);
    } finally {
      y(a, !1);
    }
  }
  async function U() {
    y(f, !0), y(o, "");
    try {
      const p = await t.ctx.callSync("run_once", {}), A = typeof p == "string" ? JSON.parse(p) : p;
      await d(), A.error && y(o, A.error, !0);
    } catch (p) {
      y(o, p?.message ?? String(p), !0);
    } finally {
      y(f, !1);
    }
  }
  async function Ae() {
    y(o, "");
    try {
      const p = await t.ctx.callSync("reset", {}), A = typeof p == "string" ? JSON.parse(p) : p;
      A.success ? await d() : y(o, A.error || "Reset failed", !0);
    } catch (p) {
      y(o, p?.message ?? String(p), !0);
    }
  }
  Ui(() => {
    d();
    const p = setInterval(d, 1e4);
    return () => clearInterval(p);
  });
  var We = ka(), kn = b(We), Jr = E(b(kn), 2);
  {
    var Kr = (p) => {
      var A = _a(), be = b(A), $e = E(be);
      vt(() => {
        rr(A, 1, `inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full
					${h(n).running ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"}`), rr(be, 1, `w-2 h-2 rounded-full ${h(n).running ? "bg-green-500 animate-pulse" : "bg-gray-400"}`), D($e, ` ${h(n).running ? "Running" : "Stopped"}`);
      }), ge(p, A);
    };
    Qe(Jr, (p) => {
      h(n) && p(Kr);
    });
  }
  var Wr = E(kn, 2);
  {
    var $r = (p) => {
      var A = pa();
      ge(p, A);
    }, Zr = (p) => {
      var A = xa(), be = Zn(A);
      {
        var $e = (M) => {
          var W = ba();
          ge(M, W);
        };
        Qe(be, (M) => {
          h(n).demo_mode_active || M($e);
        });
      }
      var En = E(be, 2), Sn = b(En), Qr = b(Sn), Xr = b(Qr), Tn = E(Sn, 2), es = b(Tn), ts = b(es), An = E(Tn, 2), ns = b(An), rs = b(ns), Nn = E(An, 2), ss = b(Nn), is = b(ss), Mn = E(Nn, 2), as = b(Mn), ls = b(as), Rn = E(Mn, 2), os = b(Rn), fs = b(os), On = E(Rn, 2), us = b(On), ds = b(us), Cn = E(On, 2), cs = b(Cn), vs = b(cs), Dn = E(Cn, 2), hs = b(Dn), _s = b(hs), Pn = E(Dn, 2), ps = b(Pn), bs = b(ps), Fn = E(Pn, 2), gs = b(Fn), ms = b(gs), ys = E(Fn, 2), ws = b(ys), xs = b(ws), In = E(En, 2), ks = b(In);
      {
        var Es = (M) => {
          var W = ga(), Ze = Zn(W), Rt = b(Ze), zs = b(Rt), Vs = E(Rt, 2), Bs = b(Vs), qs = E(Ze, 2), Us = b(qs);
          vt(() => {
            D(zs, `${h(_) ?? ""} / ${h(n).max_entities ?? ""} entities`), D(Bs, `${h(c) ?? ""}%`), va(Us, `width: ${h(c) ?? ""}%`);
          }), ge(M, W);
        }, Ss = (M) => {
          var W = ma(), Ze = b(W);
          vt(() => D(Ze, `${h(_) ?? ""} entities (unlimited)`)), ge(M, W);
        };
        Qe(ks, (M) => {
          h(n).max_entities ? M(Es) : M(Ss, -1);
        });
      }
      var jn = E(In, 2), Ln = b(jn), Nt = b(Ln), zn = b(Nt);
      {
        var Ts = (M) => {
          var W = ya();
          ge(M, W);
        };
        Qe(zn, (M) => {
          h(s) && M(Ts);
        });
      }
      var As = E(zn), $t = E(Nt, 2), Ns = b($t), Vn = E(Ln, 4), Bn = b(Vn), Ms = E(b(Bn), 2), qn = E(Bn, 2), Rs = E(b(qn), 2), Un = E(qn, 2), Os = E(b(Un), 2), Cs = E(Un, 2), Ds = E(b(Cs), 2), Ps = E(Vn, 2), Mt = b(Ps), Fs = b(Mt), Is = E(Mt, 2), js = E(jn, 2);
      {
        var Ls = (M) => {
          var W = wa(), Ze = b(W), Rt = b(Ze);
          vt(() => D(Rt, h(o))), ge(M, W);
        };
        Qe(js, (M) => {
          h(o) && M(Ls);
        });
      }
      vt(() => {
        D(Xr, h(n).stats.users), D(ts, h(n).stats.organizations), D(rs, h(n).stats.proposals), D(is, h(n).stats.transfers), D(ls, h(n).stats.disputes), D(fs, h(n).stats.votes ?? 0), D(ds, h(n).stats.lands ?? 0), D(vs, h(n).stats.courts ?? 0), D(_s, h(n).stats.cases ?? 0), D(bs, h(n).stats.messages ?? 0), D(ms, h(n).stats.departments ?? 0), D(xs, h(n).batch_number), Nt.disabled = h(s), D(As, ` ${h(n).running ? "Stop Simulator" : "Start Simulator"}`), $t.disabled = h(f), D(Ns, h(f) ? "Running..." : "Run Once"), Mt.disabled = h(a), D(Fs, h(a) ? "Saving..." : "Save Config");
      }), Ot("click", Nt, N), Ot("click", $t, U), Dt(Ms, () => h(l), (M) => y(l, M)), Dt(Rs, () => h(u), (M) => y(u, M)), Dt(Os, () => h(v), (M) => y(v, M)), Dt(Ds, () => h(g), (M) => y(g, M)), Ot("click", Mt, T), Ot("click", Is, Ae), ge(p, A);
    };
    Qe(Wr, (p) => {
      h(r) ? p($r) : h(n) && p(Zr, 1);
    });
  }
  ge(e, We), fr();
}
ta(["click"]);
function Na(e, t) {
  const n = aa(Sa, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        oa(n);
      } catch {
      }
    }
  };
}
export {
  Na as default
};
