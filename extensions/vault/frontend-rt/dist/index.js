var ps = Object.defineProperty;
var en = (e) => {
  throw TypeError(e);
};
var gs = (e, t, r) => t in e ? ps(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var he = (e, t, r) => gs(e, typeof t != "symbol" ? t + "" : t, r), mr = (e, t, r) => t.has(e) || en("Cannot " + r);
var l = (e, t, r) => (mr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), w = (e, t, r) => t.has(e) ? en("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), E = (e, t, r, n) => (mr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), T = (e, t, r) => (mr(e, t, "access private method"), r);
var mn = Array.isArray, ws = Array.prototype.indexOf, bt = Array.prototype.includes, cr = Array.from, ms = Object.defineProperty, Pt = Object.getOwnPropertyDescriptor, bs = Object.prototype, ys = Array.prototype, Es = Object.getPrototypeOf, tn = Object.isExtensible;
const ks = () => {
};
function xs(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function bn() {
  var e, t, r = new Promise((n, s) => {
    e = n, t = s;
  });
  return { promise: r, resolve: e, reject: t };
}
const V = 2, yt = 4, dr = 8, yn = 1 << 24, Te = 16, me = 32, Ye = 64, Sr = 128, fe = 512, P = 1024, q = 2048, Ae = 4096, U = 8192, oe = 16384, ut = 32768, rn = 1 << 25, Et = 65536, Tr = 1 << 17, zs = 1 << 18, St = 1 << 19, Ss = 1 << 20, Pe = 1 << 25, at = 65536, lr = 1 << 21, jt = 1 << 22, He = 1 << 23, br = Symbol("$state"), Ce = new class extends Error {
  constructor() {
    super(...arguments);
    he(this, "name", "StaleReactionError");
    he(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Ts() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function As(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ns(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Rs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Cs(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ms() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Os() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Fs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ds() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ps() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Is = 1, Ls = 2, js = 16, qs = 2, L = Symbol(), Vs = "http://www.w3.org/1999/xhtml";
function Bs() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Hs() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function En(e) {
  return e === this.v;
}
function Us(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function kn(e) {
  return !Us(e, this.v);
}
let ce = null;
function kt(e) {
  ce = e;
}
function xn(e, t = !1, r) {
  ce = {
    p: ce,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      x
    ),
    l: null
  };
}
function zn(e) {
  var t = (
    /** @type {ComponentContext} */
    ce
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Jn(n);
  }
  return t.i = !0, ce = t.p, /** @type {T} */
  {};
}
function Sn() {
  return !0;
}
let Ge = [];
function Tn() {
  var e = Ge;
  Ge = [], xs(e);
}
function ht(e) {
  if (Ge.length === 0 && !It) {
    var t = Ge;
    queueMicrotask(() => {
      t === Ge && Tn();
    });
  }
  Ge.push(e);
}
function Ys() {
  for (; Ge.length > 0; )
    Tn();
}
function An(e) {
  var t = x;
  if (t === null)
    return k.f |= He, e;
  if ((t.f & ut) === 0 && (t.f & yt) === 0)
    throw e;
  Be(e, t);
}
function Be(e, t) {
  for (; t !== null; ) {
    if ((t.f & Sr) !== 0) {
      if ((t.f & ut) === 0)
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
const Js = -7169;
function F(e, t) {
  e.f = e.f & Js | t;
}
function Lr(e) {
  (e.f & fe) !== 0 || e.deps === null ? F(e, P) : F(e, Ae);
}
function Nn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & V) === 0 || (t.f & at) === 0 || (t.f ^= at, Nn(
        /** @type {Derived} */
        t.deps
      ));
}
function Rn(e, t, r) {
  (e.f & q) !== 0 ? t.add(e) : (e.f & Ae) !== 0 && r.add(e), Nn(e.deps), F(e, P);
}
const We = /* @__PURE__ */ new Set();
let y = null, ge = null, Ar = null, It = !1, yr = !1, vt = null, $t = null;
var nn = 0;
let Ks = 1;
var _t, pt, $e, Me, xe, Vt, $, Bt, qe, Oe, ze, gt, wt, et, D, er, Cn, tr, Nr, rr, Ws;
const fr = class fr {
  constructor() {
    w(this, D);
    he(this, "id", Ks++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    he(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    he(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    w(this, _t, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    w(this, pt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    w(this, $e, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    w(this, Me, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    w(this, xe, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    w(this, Vt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    w(this, $, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    w(this, Bt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    w(this, qe, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    w(this, Oe, /* @__PURE__ */ new Set());
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
    w(this, gt, /* @__PURE__ */ new Set());
    he(this, "is_fork", !1);
    w(this, wt, !1);
    /** @type {Set<Batch>} */
    w(this, et, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, ze).has(t) || l(this, ze).set(t, { d: [], m: [] }), l(this, gt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = l(this, ze).get(t);
    if (n) {
      l(this, ze).delete(t);
      for (var s of n.d)
        F(s, q), r(s);
      for (s of n.m)
        F(s, Ae), r(s);
    }
    l(this, gt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== L && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & He) === 0 && (this.current.set(t, [r, n]), ge?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    y = this;
  }
  deactivate() {
    y = null, ge = null;
  }
  flush() {
    try {
      yr = !0, y = this, T(this, D, tr).call(this);
    } finally {
      nn = 0, Ar = null, vt = null, $t = null, yr = !1, y = null, ge = null, st.clear();
    }
  }
  discard() {
    for (const t of l(this, pt)) t(this);
    l(this, pt).clear(), l(this, $e).clear(), We.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, Bt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = l(this, Me).get(r) ?? 0;
    if (l(this, Me).set(r, n + 1), t) {
      let s = l(this, xe).get(r) ?? 0;
      l(this, xe).set(r, s + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let s = l(this, Me).get(r) ?? 0;
    if (s === 1 ? l(this, Me).delete(r) : l(this, Me).set(r, s - 1), t) {
      let i = l(this, xe).get(r) ?? 0;
      i === 1 ? l(this, xe).delete(r) : l(this, xe).set(r, i - 1);
    }
    l(this, wt) || n || (E(this, wt, !0), ht(() => {
      E(this, wt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      l(this, qe).add(n);
    for (const n of r)
      l(this, Oe).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, _t).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, pt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    l(this, $e).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, $e)) t(this);
    l(this, $e).clear();
  }
  settled() {
    return (l(this, Vt) ?? E(this, Vt, bn())).promise;
  }
  static ensure() {
    if (y === null) {
      const t = y = new fr();
      yr || (We.add(y), It || ht(() => {
        y === t && t.flush();
      }));
    }
    return y;
  }
  apply() {
    {
      ge = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Ar = t, t.b?.is_pending && (t.f & (yt | dr | yn)) !== 0 && (t.f & ut) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (vt !== null && r === x && (k === null || (k.f & V) === 0))
        return;
      if ((n & (Ye | me)) !== 0) {
        if ((n & P) === 0)
          return;
        r.f ^= P;
      }
    }
    l(this, $).push(r);
  }
};
_t = new WeakMap(), pt = new WeakMap(), $e = new WeakMap(), Me = new WeakMap(), xe = new WeakMap(), Vt = new WeakMap(), $ = new WeakMap(), Bt = new WeakMap(), qe = new WeakMap(), Oe = new WeakMap(), ze = new WeakMap(), gt = new WeakMap(), wt = new WeakMap(), et = new WeakMap(), D = new WeakSet(), er = function() {
  return this.is_fork || l(this, xe).size > 0;
}, Cn = function() {
  for (const n of l(this, et))
    for (const s of l(n, xe).keys()) {
      for (var t = !1, r = s; r.parent !== null; ) {
        if (l(this, ze).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, tr = function() {
  var f;
  if (nn++ > 1e3 && (We.delete(this), Xs()), !T(this, D, er).call(this)) {
    for (const a of l(this, qe))
      l(this, Oe).delete(a), F(a, q), this.schedule(a);
    for (const a of l(this, Oe))
      F(a, Ae), this.schedule(a);
  }
  const t = l(this, $);
  E(this, $, []), this.apply();
  var r = vt = [], n = [], s = $t = [];
  for (const a of t)
    try {
      T(this, D, Nr).call(this, a, r, n);
    } catch (o) {
      throw Fn(a), o;
    }
  if (y = null, s.length > 0) {
    var i = fr.ensure();
    for (const a of s)
      i.schedule(a);
  }
  if (vt = null, $t = null, T(this, D, er).call(this) || T(this, D, Cn).call(this)) {
    T(this, D, rr).call(this, n), T(this, D, rr).call(this, r);
    for (const [a, o] of l(this, ze))
      On(a, o);
  } else {
    l(this, Me).size === 0 && We.delete(this), l(this, qe).clear(), l(this, Oe).clear();
    for (const a of l(this, _t)) a(this);
    l(this, _t).clear(), sn(n), sn(r), l(this, Vt)?.resolve();
  }
  var u = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    y
  );
  if (l(this, $).length > 0) {
    const a = u ?? (u = this);
    l(a, $).push(...l(this, $).filter((o) => !l(a, $).includes(o)));
  }
  u !== null && (We.add(u), T(f = u, D, tr).call(f));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Nr = function(t, r, n) {
  t.f ^= P;
  for (var s = t.first; s !== null; ) {
    var i = s.f, u = (i & (me | Ye)) !== 0, f = u && (i & P) !== 0, a = f || (i & U) !== 0 || l(this, ze).has(s);
    if (!a && s.fn !== null) {
      u ? s.f ^= P : (i & yt) !== 0 ? r.push(s) : Wt(s) && ((i & Te) !== 0 && l(this, Oe).add(s), zt(s));
      var o = s.first;
      if (o !== null) {
        s = o;
        continue;
      }
    }
    for (; s !== null; ) {
      var d = s.next;
      if (d !== null) {
        s = d;
        break;
      }
      s = s.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
rr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Rn(t[r], l(this, qe), l(this, Oe));
}, Ws = function() {
  var d, h, _;
  for (const v of We) {
    var t = v.id < this.id, r = [];
    for (const [c, [m, b]] of this.current) {
      if (v.current.has(c)) {
        var n = (
          /** @type {[any, boolean]} */
          v.current.get(c)[0]
        );
        if (t && m !== n)
          v.current.set(c, [m, b]);
        else
          continue;
      }
      r.push(c);
    }
    var s = [...v.current.keys()].filter((c) => !this.current.has(c));
    if (s.length === 0)
      t && v.discard();
    else if (r.length > 0) {
      if (t)
        for (const c of l(this, gt))
          v.unskip_effect(c, (m) => {
            var b;
            (m.f & (Te | jt)) !== 0 ? v.schedule(m) : T(b = v, D, rr).call(b, [m]);
          });
      v.activate();
      var i = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
      for (var f of r)
        Mn(f, s, i, u);
      u = /* @__PURE__ */ new Map();
      var a = [...v.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of l(this, Bt))
        (c.f & (oe | U | Tr)) === 0 && jr(c, a, u) && ((c.f & (jt | Te)) !== 0 ? (F(c, q), v.schedule(c)) : l(v, qe).add(c));
      if (l(v, $).length > 0) {
        v.apply();
        for (var o of l(v, $))
          T(d = v, D, Nr).call(d, o, [], []);
        E(v, $, []);
      }
      v.deactivate();
    }
  }
  for (const v of We)
    l(v, et).has(this) && (l(v, et).delete(this), l(v, et).size === 0 && !T(h = v, D, er).call(h) && (v.activate(), T(_ = v, D, tr).call(_)));
};
let ft = fr;
function Gs(e) {
  var t = It;
  It = !0;
  try {
    for (var r; ; ) {
      if (Ys(), y === null)
        return (
          /** @type {T} */
          r
        );
      y.flush();
    }
  } finally {
    It = t;
  }
}
function Xs() {
  try {
    Ms();
  } catch (e) {
    Be(e, Ar);
  }
}
let Re = null;
function sn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (oe | U)) === 0 && Wt(n) && (Re = /* @__PURE__ */ new Set(), zt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Gn(n), Re?.size > 0)) {
        st.clear();
        for (const s of Re) {
          if ((s.f & (oe | U)) !== 0) continue;
          const i = [s];
          let u = s.parent;
          for (; u !== null; )
            Re.has(u) && (Re.delete(u), i.push(u)), u = u.parent;
          for (let f = i.length - 1; f >= 0; f--) {
            const a = i[f];
            (a.f & (oe | U)) === 0 && zt(a);
          }
        }
        Re.clear();
      }
    }
    Re = null;
  }
}
function Mn(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & V) !== 0 ? Mn(
        /** @type {Derived} */
        s,
        t,
        r,
        n
      ) : (i & (jt | Te)) !== 0 && (i & q) === 0 && jr(s, t, n) && (F(s, q), qr(
        /** @type {Effect} */
        s
      ));
    }
}
function jr(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (bt.call(t, s))
        return !0;
      if ((s.f & V) !== 0 && jr(
        /** @type {Derived} */
        s,
        t,
        r
      ))
        return r.set(
          /** @type {Derived} */
          s,
          !0
        ), !0;
    }
  return r.set(e, !1), !1;
}
function qr(e) {
  y.schedule(e);
}
function On(e, t) {
  if (!((e.f & me) !== 0 && (e.f & P) !== 0)) {
    (e.f & q) !== 0 ? t.d.push(e) : (e.f & Ae) !== 0 && t.m.push(e), F(e, P);
    for (var r = e.first; r !== null; )
      On(r, t), r = r.next;
  }
}
function Fn(e) {
  F(e, P);
  for (var t = e.first; t !== null; )
    Fn(t), t = t.next;
}
function Zs(e) {
  let t = 0, r = ot(0), n;
  return () => {
    Ur() && (p(r), Kn(() => (t === 0 && (n = ss(() => e(() => Lt(r)))), t += 1, () => {
      ht(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Lt(r));
      });
    })));
  };
}
var Qs = Et | St;
function $s(e, t, r, n) {
  new ei(e, t, r, n);
}
var se, Ir, ie, tt, K, le, H, ee, Fe, rt, Ve, mt, Ht, Ut, De, or, M, ti, ri, ni, Rr, nr, sr, Cr, Mr;
class ei {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, s) {
    w(this, M);
    /** @type {Boundary | null} */
    he(this, "parent");
    he(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    he(this, "transform_error");
    /** @type {TemplateNode} */
    w(this, se);
    /** @type {TemplateNode | null} */
    w(this, Ir, null);
    /** @type {BoundaryProps} */
    w(this, ie);
    /** @type {((anchor: Node) => void)} */
    w(this, tt);
    /** @type {Effect} */
    w(this, K);
    /** @type {Effect | null} */
    w(this, le, null);
    /** @type {Effect | null} */
    w(this, H, null);
    /** @type {Effect | null} */
    w(this, ee, null);
    /** @type {DocumentFragment | null} */
    w(this, Fe, null);
    w(this, rt, 0);
    w(this, Ve, 0);
    w(this, mt, !1);
    /** @type {Set<Effect>} */
    w(this, Ht, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    w(this, Ut, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    w(this, De, null);
    w(this, or, Zs(() => (E(this, De, ot(l(this, rt))), () => {
      E(this, De, null);
    })));
    E(this, se, t), E(this, ie, r), E(this, tt, (i) => {
      var u = (
        /** @type {Effect} */
        x
      );
      u.b = this, u.f |= Sr, n(i);
    }), this.parent = /** @type {Effect} */
    x.b, this.transform_error = s ?? this.parent?.transform_error ?? ((i) => i), E(this, K, Yr(() => {
      T(this, M, Rr).call(this);
    }, Qs));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Rn(t, l(this, Ht), l(this, Ut));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, ie).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    T(this, M, Cr).call(this, t, r), E(this, rt, l(this, rt) + t), !(!l(this, De) || l(this, mt)) && (E(this, mt, !0), ht(() => {
      E(this, mt, !1), l(this, De) && xt(l(this, De), l(this, rt));
    }));
  }
  get_effect_pending() {
    return l(this, or).call(this), p(
      /** @type {Source<number>} */
      l(this, De)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, ie).onerror && !l(this, ie).failed)
      throw t;
    y?.is_fork ? (l(this, le) && y.skip_effect(l(this, le)), l(this, H) && y.skip_effect(l(this, H)), l(this, ee) && y.skip_effect(l(this, ee)), y.on_fork_commit(() => {
      T(this, M, Mr).call(this, t);
    })) : T(this, M, Mr).call(this, t);
  }
}
se = new WeakMap(), Ir = new WeakMap(), ie = new WeakMap(), tt = new WeakMap(), K = new WeakMap(), le = new WeakMap(), H = new WeakMap(), ee = new WeakMap(), Fe = new WeakMap(), rt = new WeakMap(), Ve = new WeakMap(), mt = new WeakMap(), Ht = new WeakMap(), Ut = new WeakMap(), De = new WeakMap(), or = new WeakMap(), M = new WeakSet(), ti = function() {
  try {
    E(this, le, ae(() => l(this, tt).call(this, l(this, se))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
ri = function(t) {
  const r = l(this, ie).failed;
  r && E(this, ee, ae(() => {
    r(
      l(this, se),
      () => t,
      () => () => {
      }
    );
  }));
}, ni = function() {
  const t = l(this, ie).pending;
  t && (this.is_pending = !0, E(this, H, ae(() => t(l(this, se)))), ht(() => {
    var r = E(this, Fe, document.createDocumentFragment()), n = Ue();
    r.append(n), E(this, le, T(this, M, sr).call(this, () => ae(() => l(this, tt).call(this, n)))), l(this, Ve) === 0 && (l(this, se).before(r), E(this, Fe, null), it(
      /** @type {Effect} */
      l(this, H),
      () => {
        E(this, H, null);
      }
    ), T(this, M, nr).call(
      this,
      /** @type {Batch} */
      y
    ));
  }));
}, Rr = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), E(this, Ve, 0), E(this, rt, 0), E(this, le, ae(() => {
      l(this, tt).call(this, l(this, se));
    })), l(this, Ve) > 0) {
      var t = E(this, Fe, document.createDocumentFragment());
      Wr(l(this, le), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        l(this, ie).pending
      );
      E(this, H, ae(() => r(l(this, se))));
    } else
      T(this, M, nr).call(
        this,
        /** @type {Batch} */
        y
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
nr = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, Ht), l(this, Ut));
}, /**
 * @template T
 * @param {() => T} fn
 */
sr = function(t) {
  var r = x, n = k, s = ce;
  Ne(l(this, K)), de(l(this, K)), kt(l(this, K).ctx);
  try {
    return ft.ensure(), t();
  } catch (i) {
    return An(i), null;
  } finally {
    Ne(r), de(n), kt(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Cr = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && T(n = this.parent, M, Cr).call(n, t, r);
    return;
  }
  E(this, Ve, l(this, Ve) + t), l(this, Ve) === 0 && (T(this, M, nr).call(this, r), l(this, H) && it(l(this, H), () => {
    E(this, H, null);
  }), l(this, Fe) && (l(this, se).before(l(this, Fe)), E(this, Fe, null)));
}, /**
 * @param {unknown} error
 */
Mr = function(t) {
  l(this, le) && (G(l(this, le)), E(this, le, null)), l(this, H) && (G(l(this, H)), E(this, H, null)), l(this, ee) && (G(l(this, ee)), E(this, ee, null));
  var r = l(this, ie).onerror;
  let n = l(this, ie).failed;
  var s = !1, i = !1;
  const u = () => {
    if (s) {
      Hs();
      return;
    }
    s = !0, i && Ps(), l(this, ee) !== null && it(l(this, ee), () => {
      E(this, ee, null);
    }), T(this, M, sr).call(this, () => {
      T(this, M, Rr).call(this);
    });
  }, f = (a) => {
    try {
      i = !0, r?.(a, u), i = !1;
    } catch (o) {
      Be(o, l(this, K) && l(this, K).parent);
    }
    n && E(this, ee, T(this, M, sr).call(this, () => {
      try {
        return ae(() => {
          var o = (
            /** @type {Effect} */
            x
          );
          o.b = this, o.f |= Sr, n(
            l(this, se),
            () => a,
            () => u
          );
        });
      } catch (o) {
        return Be(
          o,
          /** @type {Effect} */
          l(this, K).parent
        ), null;
      }
    }));
  };
  ht(() => {
    var a;
    try {
      a = this.transform_error(t);
    } catch (o) {
      Be(o, l(this, K) && l(this, K).parent);
      return;
    }
    a !== null && typeof a == "object" && typeof /** @type {any} */
    a.then == "function" ? a.then(
      f,
      /** @param {unknown} e */
      (o) => Be(o, l(this, K) && l(this, K).parent)
    ) : f(a);
  });
};
function si(e, t, r, n) {
  const s = Pn;
  var i = e.filter((_) => !_.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(s));
    return;
  }
  var u = (
    /** @type {Effect} */
    x
  ), f = ii(), a = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((_) => _.promise)) : null;
  function o(_) {
    f();
    try {
      n(_);
    } catch (v) {
      (u.f & oe) === 0 && Be(v, u);
    }
    ar();
  }
  if (r.length === 0) {
    a.then(() => o(t.map(s)));
    return;
  }
  var d = Dn();
  function h() {
    Promise.all(r.map((_) => /* @__PURE__ */ li(_))).then((_) => o([...t.map(s), ..._])).catch((_) => Be(_, u)).finally(() => d());
  }
  a ? a.then(() => {
    f(), h(), ar();
  }) : h();
}
function ii() {
  var e = (
    /** @type {Effect} */
    x
  ), t = k, r = ce, n = (
    /** @type {Batch} */
    y
  );
  return function(i = !0) {
    Ne(e), de(t), kt(r), i && (e.f & oe) === 0 && (n?.activate(), n?.apply());
  };
}
function ar(e = !0) {
  Ne(null), de(null), kt(null), e && y?.deactivate();
}
function Dn() {
  var e = (
    /** @type {Effect} */
    x
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    y
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (s = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, s);
  };
}
// @__NO_SIDE_EFFECTS__
function Pn(e) {
  var t = V | q;
  return x !== null && (x.f |= St), {
    ctx: ce,
    deps: null,
    effects: null,
    equals: En,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      L
    ),
    wv: 0,
    parent: x,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function li(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    x
  );
  n === null && Ts();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = ot(
    /** @type {V} */
    L
  ), u = !k, f = /* @__PURE__ */ new Map();
  return Ei(() => {
    var a = (
      /** @type {Effect} */
      x
    ), o = bn();
    s = o.promise;
    try {
      Promise.resolve(e()).then(o.resolve, o.reject).finally(ar);
    } catch (v) {
      o.reject(v), ar();
    }
    var d = (
      /** @type {Batch} */
      y
    );
    if (u) {
      if ((a.f & ut) !== 0)
        var h = Dn();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        f.get(d)?.reject(Ce), f.delete(d);
      else {
        for (const v of f.values())
          v.reject(Ce);
        f.clear();
      }
      f.set(d, o);
    }
    const _ = (v, c = void 0) => {
      if (h) {
        var m = c === Ce;
        h(m);
      }
      if (!(c === Ce || (a.f & oe) !== 0)) {
        if (d.activate(), c)
          i.f |= He, xt(i, c);
        else {
          (i.f & He) !== 0 && (i.f ^= He), xt(i, v);
          for (const [b, A] of f) {
            if (f.delete(b), b === d) break;
            A.reject(Ce);
          }
        }
        d.deactivate();
      }
    };
    o.promise.then(_, (v) => _(null, v || "unknown"));
  }), wi(() => {
    for (const a of f.values())
      a.reject(Ce);
  }), new Promise((a) => {
    function o(d) {
      function h() {
        d === s ? a(i) : o(s);
      }
      d.then(h, h);
    }
    o(s);
  });
}
// @__NO_SIDE_EFFECTS__
function ai(e) {
  const t = /* @__PURE__ */ Pn(e);
  return t.equals = kn, t;
}
function fi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      G(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Vr(e) {
  var t, r = x, n = e.parent;
  if (!Je && n !== null && (n.f & (oe | U)) !== 0)
    return Bs(), e.v;
  Ne(n);
  try {
    e.f &= ~at, fi(e), t = ts(e);
  } finally {
    Ne(r);
  }
  return t;
}
function In(e) {
  var t = Vr(e);
  if (!e.equals(t) && (e.wv = $n(), (!y?.is_fork || e.deps === null) && (y !== null ? y.capture(e, t, !0) : e.v = t, e.deps === null))) {
    F(e, P);
    return;
  }
  Je || (ge !== null ? (Ur() || y?.is_fork) && ge.set(e, t) : Lr(e));
}
function oi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Ce), t.teardown = ks, t.ac = null, qt(t, 0), Jr(t));
}
function Ln(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && zt(t);
}
let Or = /* @__PURE__ */ new Set();
const st = /* @__PURE__ */ new Map();
let jn = !1;
function ot(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: En,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function j(e, t) {
  const r = ot(e);
  return zi(r), r;
}
// @__NO_SIDE_EFFECTS__
function ui(e, t = !1, r = !0) {
  const n = ot(e);
  return t || (n.equals = kn), n;
}
function S(e, t, r = !1) {
  k !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!we || (k.f & Tr) !== 0) && Sn() && (k.f & (V | Te | jt | Tr)) !== 0 && (ue === null || !bt.call(ue, e)) && Ds();
  let n = r ? Xe(t) : t;
  return xt(e, n, $t);
}
function xt(e, t, r = null) {
  if (!e.equals(t)) {
    st.set(e, Je ? t : e.v);
    var n = ft.ensure();
    if (n.capture(e, t), (e.f & V) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & q) !== 0 && Vr(s), ge === null && Lr(s);
    }
    e.wv = $n(), qn(e, q, r), x !== null && (x.f & P) !== 0 && (x.f & (me | Ye)) === 0 && (ne === null ? Si([e]) : ne.push(e)), !n.is_fork && Or.size > 0 && !jn && ci();
  }
  return t;
}
function ci() {
  jn = !1;
  for (const e of Or)
    (e.f & P) !== 0 && F(e, Ae), Wt(e) && zt(e);
  Or.clear();
}
function Lt(e) {
  S(e, e.v + 1);
}
function qn(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var s = n.length, i = 0; i < s; i++) {
      var u = n[i], f = u.f, a = (f & q) === 0;
      if (a && F(u, t), (f & V) !== 0) {
        var o = (
          /** @type {Derived} */
          u
        );
        ge?.delete(o), (f & at) === 0 && (f & fe && (x === null || (x.f & lr) === 0) && (u.f |= at), qn(o, Ae, r));
      } else if (a) {
        var d = (
          /** @type {Effect} */
          u
        );
        (f & Te) !== 0 && Re !== null && Re.add(d), r !== null ? r.push(d) : qr(d);
      }
    }
}
function Xe(e) {
  if (typeof e != "object" || e === null || br in e)
    return e;
  const t = Es(e);
  if (t !== bs && t !== ys)
    return e;
  var r = /* @__PURE__ */ new Map(), n = mn(e), s = /* @__PURE__ */ j(0), i = lt, u = (f) => {
    if (lt === i)
      return f();
    var a = k, o = lt;
    de(null), un(i);
    var d = f();
    return de(a), un(o), d;
  };
  return n && r.set("length", /* @__PURE__ */ j(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, a, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && Os();
        var d = r.get(a);
        return d === void 0 ? u(() => {
          var h = /* @__PURE__ */ j(o.value);
          return r.set(a, h), h;
        }) : S(d, o.value, !0), !0;
      },
      deleteProperty(f, a) {
        var o = r.get(a);
        if (o === void 0) {
          if (a in f) {
            const d = u(() => /* @__PURE__ */ j(L));
            r.set(a, d), Lt(s);
          }
        } else
          S(o, L), Lt(s);
        return !0;
      },
      get(f, a, o) {
        if (a === br)
          return e;
        var d = r.get(a), h = a in f;
        if (d === void 0 && (!h || Pt(f, a)?.writable) && (d = u(() => {
          var v = Xe(h ? f[a] : L), c = /* @__PURE__ */ j(v);
          return c;
        }), r.set(a, d)), d !== void 0) {
          var _ = p(d);
          return _ === L ? void 0 : _;
        }
        return Reflect.get(f, a, o);
      },
      getOwnPropertyDescriptor(f, a) {
        var o = Reflect.getOwnPropertyDescriptor(f, a);
        if (o && "value" in o) {
          var d = r.get(a);
          d && (o.value = p(d));
        } else if (o === void 0) {
          var h = r.get(a), _ = h?.v;
          if (h !== void 0 && _ !== L)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return o;
      },
      has(f, a) {
        if (a === br)
          return !0;
        var o = r.get(a), d = o !== void 0 && o.v !== L || Reflect.has(f, a);
        if (o !== void 0 || x !== null && (!d || Pt(f, a)?.writable)) {
          o === void 0 && (o = u(() => {
            var _ = d ? Xe(f[a]) : L, v = /* @__PURE__ */ j(_);
            return v;
          }), r.set(a, o));
          var h = p(o);
          if (h === L)
            return !1;
        }
        return d;
      },
      set(f, a, o, d) {
        var h = r.get(a), _ = a in f;
        if (n && a === "length")
          for (var v = o; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var c = r.get(v + "");
            c !== void 0 ? S(c, L) : v in f && (c = u(() => /* @__PURE__ */ j(L)), r.set(v + "", c));
          }
        if (h === void 0)
          (!_ || Pt(f, a)?.writable) && (h = u(() => /* @__PURE__ */ j(void 0)), S(h, Xe(o)), r.set(a, h));
        else {
          _ = h.v !== L;
          var m = u(() => Xe(o));
          S(h, m);
        }
        var b = Reflect.getOwnPropertyDescriptor(f, a);
        if (b?.set && b.set.call(d, o), !_) {
          if (n && typeof a == "string") {
            var A = (
              /** @type {Source<number>} */
              r.get("length")
            ), z = Number(a);
            Number.isInteger(z) && z >= A.v && S(A, z + 1);
          }
          Lt(s);
        }
        return !0;
      },
      ownKeys(f) {
        p(s);
        var a = Reflect.ownKeys(f).filter((h) => {
          var _ = r.get(h);
          return _ === void 0 || _.v !== L;
        });
        for (var [o, d] of r)
          d.v !== L && !(o in f) && a.push(o);
        return a;
      },
      setPrototypeOf() {
        Fs();
      }
    }
  );
}
var ln, Vn, Bn, Hn;
function di() {
  if (ln === void 0) {
    ln = window, Vn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Bn = Pt(t, "firstChild").get, Hn = Pt(t, "nextSibling").get, tn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), tn(r) && (r.__t = void 0);
  }
}
function Ue(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Br(e) {
  return (
    /** @type {TemplateNode | null} */
    Bn.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
  return (
    /** @type {TemplateNode | null} */
    Hn.call(e)
  );
}
function N(e, t) {
  return /* @__PURE__ */ Br(e);
}
function an(e, t = !1) {
  {
    var r = /* @__PURE__ */ Br(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Kt(r) : r;
  }
}
function O(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Kt(n);
  return n;
}
function vi(e) {
  e.textContent = "";
}
function Un() {
  return !1;
}
function Yn(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Vs, e, void 0)
  );
}
let fn = !1;
function hi() {
  fn || (fn = !0, document.addEventListener(
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
function Hr(e) {
  var t = k, r = x;
  de(null), Ne(null);
  try {
    return e();
  } finally {
    de(t), Ne(r);
  }
}
function _i(e, t, r, n = r) {
  e.addEventListener(t, () => Hr(r));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), n(!0);
  } : e.__on_r = () => n(!0), hi();
}
function pi(e) {
  x === null && (k === null && Cs(), Rs()), Je && Ns();
}
function gi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Ie(e, t) {
  var r = x;
  r !== null && (r.f & U) !== 0 && (e |= U);
  var n = {
    ctx: ce,
    deps: null,
    nodes: null,
    f: e | q | fe,
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
  y?.register_created_effect(n);
  var s = n;
  if ((e & yt) !== 0)
    vt !== null ? vt.push(n) : ft.ensure().schedule(n);
  else if (t !== null) {
    try {
      zt(n);
    } catch (u) {
      throw G(n), u;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & St) === 0 && (s = s.first, (e & Te) !== 0 && (e & Et) !== 0 && s !== null && (s.f |= Et));
  }
  if (s !== null && (s.parent = r, r !== null && gi(s, r), k !== null && (k.f & V) !== 0 && (e & Ye) === 0)) {
    var i = (
      /** @type {Derived} */
      k
    );
    (i.effects ?? (i.effects = [])).push(s);
  }
  return n;
}
function Ur() {
  return k !== null && !we;
}
function wi(e) {
  const t = Ie(dr, null);
  return F(t, P), t.teardown = e, t;
}
function mi(e) {
  pi();
  var t = (
    /** @type {Effect} */
    x.f
  ), r = !k && (t & me) !== 0 && (t & ut) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ce
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Jn(e);
}
function Jn(e) {
  return Ie(yt | Ss, e);
}
function bi(e) {
  ft.ensure();
  const t = Ie(Ye | St, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? it(t, () => {
      G(t), n(void 0);
    }) : (G(t), n(void 0));
  });
}
function yi(e) {
  return Ie(yt, e);
}
function Ei(e) {
  return Ie(jt | St, e);
}
function Kn(e, t = 0) {
  return Ie(dr | t, e);
}
function dt(e, t = [], r = [], n = []) {
  si(n, t, r, (s) => {
    Ie(dr, () => e(...s.map(p)));
  });
}
function Yr(e, t = 0) {
  var r = Ie(Te | t, e);
  return r;
}
function ae(e) {
  return Ie(me | St, e);
}
function Wn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Je, n = k;
    on(!0), de(null);
    try {
      t.call(null);
    } finally {
      on(r), de(n);
    }
  }
}
function Jr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && Hr(() => {
      s.abort(Ce);
    });
    var n = r.next;
    (r.f & Ye) !== 0 ? r.parent = null : G(r, t), r = n;
  }
}
function ki(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & me) === 0 && G(t), t = r;
  }
}
function G(e, t = !0) {
  var r = !1;
  (t || (e.f & zs) !== 0) && e.nodes !== null && e.nodes.end !== null && (xi(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), F(e, rn), Jr(e, t && !r), qt(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  Wn(e), e.f ^= rn, e.f |= oe;
  var s = e.parent;
  s !== null && s.first !== null && Gn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function xi(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Kt(e);
    e.remove(), e = r;
  }
}
function Gn(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function it(e, t, r = !0) {
  var n = [];
  Xn(e, n, !0);
  var s = () => {
    r && G(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var u = () => --i || s();
    for (var f of n)
      f.out(u);
  } else
    s();
}
function Xn(e, t, r) {
  if ((e.f & U) === 0) {
    e.f ^= U;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const f of n)
        (f.is_global || r) && t.push(f);
    for (var s = e.first; s !== null; ) {
      var i = s.next;
      if ((s.f & Ye) === 0) {
        var u = (s.f & Et) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & me) !== 0 && (e.f & Te) !== 0;
        Xn(s, t, u ? r : !1);
      }
      s = i;
    }
  }
}
function Kr(e) {
  Zn(e, !0);
}
function Zn(e, t) {
  if ((e.f & U) !== 0) {
    e.f ^= U, (e.f & P) === 0 && (F(e, q), ft.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & Et) !== 0 || (r.f & me) !== 0;
      Zn(r, s ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const u of i)
        (u.is_global || t) && u.in();
  }
}
function Wr(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var s = r === n ? null : /* @__PURE__ */ Kt(r);
      t.append(r), r = s;
    }
}
let ir = !1, Je = !1;
function on(e) {
  Je = e;
}
let k = null, we = !1;
function de(e) {
  k = e;
}
let x = null;
function Ne(e) {
  x = e;
}
let ue = null;
function zi(e) {
  k !== null && (ue === null ? ue = [e] : ue.push(e));
}
let W = null, Q = 0, ne = null;
function Si(e) {
  ne = e;
}
let Qn = 1, Ze = 0, lt = Ze;
function un(e) {
  lt = e;
}
function $n() {
  return ++Qn;
}
function Wt(e) {
  var t = e.f;
  if ((t & q) !== 0)
    return !0;
  if (t & V && (e.f &= ~at), (t & Ae) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, s = 0; s < n; s++) {
      var i = r[s];
      if (Wt(
        /** @type {Derived} */
        i
      ) && In(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & fe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ge === null && F(e, P);
  }
  return !1;
}
function es(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(ue !== null && bt.call(ue, e)))
    for (var s = 0; s < n.length; s++) {
      var i = n[s];
      (i.f & V) !== 0 ? es(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? F(i, q) : (i.f & P) !== 0 && F(i, Ae), qr(
        /** @type {Effect} */
        i
      ));
    }
}
function ts(e) {
  var m;
  var t = W, r = Q, n = ne, s = k, i = ue, u = ce, f = we, a = lt, o = e.f;
  W = /** @type {null | Value[]} */
  null, Q = 0, ne = null, k = (o & (me | Ye)) === 0 ? e : null, ue = null, kt(e.ctx), we = !1, lt = ++Ze, e.ac !== null && (Hr(() => {
    e.ac.abort(Ce);
  }), e.ac = null);
  try {
    e.f |= lr;
    var d = (
      /** @type {Function} */
      e.fn
    ), h = d();
    e.f |= ut;
    var _ = e.deps, v = y?.is_fork;
    if (W !== null) {
      var c;
      if (v || qt(e, Q), _ !== null && Q > 0)
        for (_.length = Q + W.length, c = 0; c < W.length; c++)
          _[Q + c] = W[c];
      else
        e.deps = _ = W;
      if (Ur() && (e.f & fe) !== 0)
        for (c = Q; c < _.length; c++)
          ((m = _[c]).reactions ?? (m.reactions = [])).push(e);
    } else !v && _ !== null && Q < _.length && (qt(e, Q), _.length = Q);
    if (Sn() && ne !== null && !we && _ !== null && (e.f & (V | Ae | q)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      ne.length; c++)
        es(
          ne[c],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (Ze++, s.deps !== null)
        for (let b = 0; b < r; b += 1)
          s.deps[b].rv = Ze;
      if (t !== null)
        for (const b of t)
          b.rv = Ze;
      ne !== null && (n === null ? n = ne : n.push(.../** @type {Source[]} */
      ne));
    }
    return (e.f & He) !== 0 && (e.f ^= He), h;
  } catch (b) {
    return An(b);
  } finally {
    e.f ^= lr, W = t, Q = r, ne = n, k = s, ue = i, kt(u), we = f, lt = a;
  }
}
function Ti(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = ws.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  if (r === null && (t.f & V) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (W === null || !bt.call(W, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & fe) !== 0 && (i.f ^= fe, i.f &= ~at), i.v !== L && Lr(i), oi(i), qt(i, 0);
  }
}
function qt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Ti(e, r[n]);
}
function zt(e) {
  var t = e.f;
  if ((t & oe) === 0) {
    F(e, P);
    var r = x, n = ir;
    x = e, ir = !0;
    try {
      (t & (Te | yn)) !== 0 ? ki(e) : Jr(e), Wn(e);
      var s = ts(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Qn;
      var i;
    } finally {
      ir = n, x = r;
    }
  }
}
async function Ai() {
  await Promise.resolve(), Gs();
}
function p(e) {
  var t = e.f, r = (t & V) !== 0;
  if (k !== null && !we) {
    var n = x !== null && (x.f & oe) !== 0;
    if (!n && (ue === null || !bt.call(ue, e))) {
      var s = k.deps;
      if ((k.f & lr) !== 0)
        e.rv < Ze && (e.rv = Ze, W === null && s !== null && s[Q] === e ? Q++ : W === null ? W = [e] : W.push(e));
      else {
        (k.deps ?? (k.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [k] : bt.call(i, k) || i.push(k);
      }
    }
  }
  if (Je && st.has(e))
    return st.get(e);
  if (r) {
    var u = (
      /** @type {Derived} */
      e
    );
    if (Je) {
      var f = u.v;
      return ((u.f & P) === 0 && u.reactions !== null || ns(u)) && (f = Vr(u)), st.set(u, f), f;
    }
    var a = (u.f & fe) === 0 && !we && k !== null && (ir || (k.f & fe) !== 0), o = (u.f & ut) === 0;
    Wt(u) && (a && (u.f |= fe), In(u)), a && !o && (Ln(u), rs(u));
  }
  if (ge?.has(e))
    return ge.get(e);
  if ((e.f & He) !== 0)
    throw e.v;
  return e.v;
}
function rs(e) {
  if (e.f |= fe, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & V) !== 0 && (t.f & fe) === 0 && (Ln(
        /** @type {Derived} */
        t
      ), rs(
        /** @type {Derived} */
        t
      ));
}
function ns(e) {
  if (e.v === L) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (st.has(t) || (t.f & V) !== 0 && ns(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ss(e) {
  var t = we;
  try {
    return we = !0, e();
  } finally {
    we = t;
  }
}
const Ni = ["touchstart", "touchmove"];
function Ri(e) {
  return Ni.includes(e);
}
const Qe = Symbol("events"), is = /* @__PURE__ */ new Set(), Fr = /* @__PURE__ */ new Set();
function Mt(e, t, r) {
  (t[Qe] ?? (t[Qe] = {}))[e] = r;
}
function Ci(e) {
  for (var t = 0; t < e.length; t++)
    is.add(e[t]);
  for (var r of Fr)
    r(e);
}
let cn = null;
function dn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  cn = e;
  var u = 0, f = cn === e && e[Qe];
  if (f) {
    var a = s.indexOf(f);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Qe] = t;
      return;
    }
    var o = s.indexOf(t);
    if (o === -1)
      return;
    a <= o && (u = a);
  }
  if (i = /** @type {Element} */
  s[u] || e.target, i !== t) {
    ms(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var d = k, h = x;
    de(null), Ne(null);
    try {
      for (var _, v = []; i !== null; ) {
        var c = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var m = i[Qe]?.[n];
          m != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && m.call(i, e);
        } catch (b) {
          _ ? v.push(b) : _ = b;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        i = c;
      }
      if (_) {
        for (let b of v)
          queueMicrotask(() => {
            throw b;
          });
        throw _;
      }
    } finally {
      e[Qe] = t, delete e.currentTarget, de(d), Ne(h);
    }
  }
}
const Mi = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Oi(e) {
  return (
    /** @type {string} */
    Mi?.createHTML(e) ?? e
  );
}
function Fi(e) {
  var t = Yn("template");
  return t.innerHTML = Oi(e.replaceAll("<!>", "<!---->")), t.content;
}
function ls(e, t) {
  var r = (
    /** @type {Effect} */
    x
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function be(e, t) {
  var r = (t & qs) !== 0, n, s = !e.startsWith("<!>");
  return () => {
    n === void 0 && (n = Fi(s ? e : "<!>" + e), n = /** @type {TemplateNode} */
    /* @__PURE__ */ Br(n));
    var i = (
      /** @type {TemplateNode} */
      r || Vn ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return ls(i, i), i;
  };
}
function vn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Ue();
  return e.append(t, r), ls(t, r), e;
}
function Z(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function _e(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Di(e, t) {
  return Pi(e, t);
}
const Zt = /* @__PURE__ */ new Map();
function Pi(e, { target: t, anchor: r, props: n = {}, events: s, context: i, intro: u = !0, transformError: f }) {
  di();
  var a = void 0, o = bi(() => {
    var d = r ?? t.appendChild(Ue());
    $s(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (v) => {
        xn({});
        var c = (
          /** @type {ComponentContext} */
          ce
        );
        i && (c.c = i), s && (n.$$events = s), a = e(v, n) || {}, zn();
      },
      f
    );
    var h = /* @__PURE__ */ new Set(), _ = (v) => {
      for (var c = 0; c < v.length; c++) {
        var m = v[c];
        if (!h.has(m)) {
          h.add(m);
          var b = Ri(m);
          for (const Y of [t, document]) {
            var A = Zt.get(Y);
            A === void 0 && (A = /* @__PURE__ */ new Map(), Zt.set(Y, A));
            var z = A.get(m);
            z === void 0 ? (Y.addEventListener(m, dn, { passive: b }), A.set(m, 1)) : A.set(m, z + 1);
          }
        }
      }
    };
    return _(cr(is)), Fr.add(_), () => {
      for (var v of h)
        for (const b of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            Zt.get(b)
          ), m = (
            /** @type {number} */
            c.get(v)
          );
          --m == 0 ? (b.removeEventListener(v, dn), c.delete(v), c.size === 0 && Zt.delete(b)) : c.set(v, m);
        }
      Fr.delete(_), d !== r && d.parentNode?.removeChild(d);
    };
  });
  return Dr.set(a, o), a;
}
let Dr = /* @__PURE__ */ new WeakMap();
function Ii(e, t) {
  const r = Dr.get(e);
  return r ? (Dr.delete(e), r(t)) : Promise.resolve();
}
var pe, Se, te, nt, Yt, Jt, ur;
class Li {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    he(this, "anchor");
    /** @type {Map<Batch, Key>} */
    w(this, pe, /* @__PURE__ */ new Map());
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
    w(this, Se, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    w(this, te, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    w(this, nt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    w(this, Yt, !0);
    /**
     * @param {Batch} batch
     */
    w(this, Jt, (t) => {
      if (l(this, pe).has(t)) {
        var r = (
          /** @type {Key} */
          l(this, pe).get(t)
        ), n = l(this, Se).get(r);
        if (n)
          Kr(n), l(this, nt).delete(r);
        else {
          var s = l(this, te).get(r);
          s && (l(this, Se).set(r, s.effect), l(this, te).delete(r), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), n = s.effect);
        }
        for (const [i, u] of l(this, pe)) {
          if (l(this, pe).delete(i), i === t)
            break;
          const f = l(this, te).get(u);
          f && (G(f.effect), l(this, te).delete(u));
        }
        for (const [i, u] of l(this, Se)) {
          if (i === r || l(this, nt).has(i)) continue;
          const f = () => {
            if (Array.from(l(this, pe).values()).includes(i)) {
              var o = document.createDocumentFragment();
              Wr(u, o), o.append(Ue()), l(this, te).set(i, { effect: u, fragment: o });
            } else
              G(u);
            l(this, nt).delete(i), l(this, Se).delete(i);
          };
          l(this, Yt) || !n ? (l(this, nt).add(i), it(u, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    w(this, ur, (t) => {
      l(this, pe).delete(t);
      const r = Array.from(l(this, pe).values());
      for (const [n, s] of l(this, te))
        r.includes(n) || (G(s.effect), l(this, te).delete(n));
    });
    this.anchor = t, E(this, Yt, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      y
    ), s = Un();
    if (r && !l(this, Se).has(t) && !l(this, te).has(t))
      if (s) {
        var i = document.createDocumentFragment(), u = Ue();
        i.append(u), l(this, te).set(t, {
          effect: ae(() => r(u)),
          fragment: i
        });
      } else
        l(this, Se).set(
          t,
          ae(() => r(this.anchor))
        );
    if (l(this, pe).set(n, t), s) {
      for (const [f, a] of l(this, Se))
        f === t ? n.unskip_effect(a) : n.skip_effect(a);
      for (const [f, a] of l(this, te))
        f === t ? n.unskip_effect(a.effect) : n.skip_effect(a.effect);
      n.oncommit(l(this, Jt)), n.ondiscard(l(this, ur));
    } else
      l(this, Jt).call(this, n);
  }
}
pe = new WeakMap(), Se = new WeakMap(), te = new WeakMap(), nt = new WeakMap(), Yt = new WeakMap(), Jt = new WeakMap(), ur = new WeakMap();
function Ot(e, t, r = !1) {
  var n = new Li(e), s = r ? Et : 0;
  function i(u, f) {
    n.ensure(u, f);
  }
  Yr(() => {
    var u = !1;
    t((f, a = 0) => {
      u = !0, i(a, f);
    }), u || i(-1, null);
  }, s);
}
function hn(e, t) {
  return t;
}
function ji(e, t, r) {
  for (var n = [], s = t.length, i, u = t.length, f = 0; f < s; f++) {
    let h = t[f];
    it(
      h,
      () => {
        if (i) {
          if (i.pending.delete(h), i.done.add(h), i.pending.size === 0) {
            var _ = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Pr(e, cr(i.done)), _.delete(i), _.size === 0 && (e.outrogroups = null);
          }
        } else
          u -= 1;
      },
      !1
    );
  }
  if (u === 0) {
    var a = n.length === 0 && r !== null;
    if (a) {
      var o = (
        /** @type {Element} */
        r
      ), d = (
        /** @type {Element} */
        o.parentNode
      );
      vi(d), d.append(o), e.items.clear();
    }
    Pr(e, t, !a);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function Pr(e, t, r = !0) {
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
  for (var s = 0; s < t.length; s++) {
    var i = t[s];
    if (n?.has(i)) {
      i.f |= Pe;
      const u = document.createDocumentFragment();
      Wr(i, u);
    } else
      G(t[s], r);
  }
}
var _n;
function pn(e, t, r, n, s, i = null) {
  var u = e, f = /* @__PURE__ */ new Map();
  {
    var a = (
      /** @type {Element} */
      e
    );
    u = a.appendChild(Ue());
  }
  var o = null, d = /* @__PURE__ */ ai(() => {
    var z = r();
    return mn(z) ? z : z == null ? [] : cr(z);
  }), h, _ = /* @__PURE__ */ new Map(), v = !0;
  function c(z) {
    (A.effect.f & oe) === 0 && (A.pending.delete(z), A.fallback = o, qi(A, h, u, t, n), o !== null && (h.length === 0 ? (o.f & Pe) === 0 ? Kr(o) : (o.f ^= Pe, Dt(o, null, u)) : it(o, () => {
      o = null;
    })));
  }
  function m(z) {
    A.pending.delete(z);
  }
  var b = Yr(() => {
    h = /** @type {V[]} */
    p(d);
    for (var z = h.length, Y = /* @__PURE__ */ new Set(), X = (
      /** @type {Batch} */
      y
    ), ye = Un(), Ee = 0; Ee < z; Ee += 1) {
      var Le = h[Ee], J = n(Le, Ee), ve = v ? null : f.get(J);
      ve ? (ve.v && xt(ve.v, Le), ve.i && xt(ve.i, Ee), ye && X.unskip_effect(ve.e)) : (ve = Vi(
        f,
        v ? u : _n ?? (_n = Ue()),
        Le,
        J,
        Ee,
        s,
        t,
        r
      ), v || (ve.e.f |= Pe), f.set(J, ve)), Y.add(J);
    }
    if (z === 0 && i && !o && (v ? o = ae(() => i(u)) : (o = ae(() => i(_n ?? (_n = Ue()))), o.f |= Pe)), z > Y.size && As(), !v)
      if (_.set(X, Y), ye) {
        for (const [Gt, vr] of f)
          Y.has(Gt) || X.skip_effect(vr.e);
        X.oncommit(c), X.ondiscard(m);
      } else
        c(X);
    p(d);
  }), A = { effect: b, items: f, pending: _, outrogroups: null, fallback: o };
  v = !1;
}
function Ft(e) {
  for (; e !== null && (e.f & me) === 0; )
    e = e.next;
  return e;
}
function qi(e, t, r, n, s) {
  var i = t.length, u = e.items, f = Ft(e.effect.first), a, o = null, d = [], h = [], _, v, c, m;
  for (m = 0; m < i; m += 1) {
    if (_ = t[m], v = s(_, m), c = /** @type {EachItem} */
    u.get(v).e, e.outrogroups !== null)
      for (const J of e.outrogroups)
        J.pending.delete(c), J.done.delete(c);
    if ((c.f & U) !== 0 && Kr(c), (c.f & Pe) !== 0)
      if (c.f ^= Pe, c === f)
        Dt(c, null, r);
      else {
        var b = o ? o.next : f;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), je(e, o, c), je(e, c, b), Dt(c, b, r), o = c, d = [], h = [], f = Ft(o.next);
        continue;
      }
    if (c !== f) {
      if (a !== void 0 && a.has(c)) {
        if (d.length < h.length) {
          var A = h[0], z;
          o = A.prev;
          var Y = d[0], X = d[d.length - 1];
          for (z = 0; z < d.length; z += 1)
            Dt(d[z], A, r);
          for (z = 0; z < h.length; z += 1)
            a.delete(h[z]);
          je(e, Y.prev, X.next), je(e, o, Y), je(e, X, A), f = A, o = X, m -= 1, d = [], h = [];
        } else
          a.delete(c), Dt(c, f, r), je(e, c.prev, c.next), je(e, c, o === null ? e.effect.first : o.next), je(e, o, c), o = c;
        continue;
      }
      for (d = [], h = []; f !== null && f !== c; )
        (a ?? (a = /* @__PURE__ */ new Set())).add(f), h.push(f), f = Ft(f.next);
      if (f === null)
        continue;
    }
    (c.f & Pe) === 0 && d.push(c), o = c, f = Ft(c.next);
  }
  if (e.outrogroups !== null) {
    for (const J of e.outrogroups)
      J.pending.size === 0 && (Pr(e, cr(J.done)), e.outrogroups?.delete(J));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (f !== null || a !== void 0) {
    var ye = [];
    if (a !== void 0)
      for (c of a)
        (c.f & U) === 0 && ye.push(c);
    for (; f !== null; )
      (f.f & U) === 0 && f !== e.fallback && ye.push(f), f = Ft(f.next);
    var Ee = ye.length;
    if (Ee > 0) {
      var Le = i === 0 ? r : null;
      ji(e, ye, Le);
    }
  }
}
function Vi(e, t, r, n, s, i, u, f) {
  var a = (u & Is) !== 0 ? (u & js) === 0 ? /* @__PURE__ */ ui(r, !1, !1) : ot(r) : null, o = (u & Ls) !== 0 ? ot(s) : null;
  return {
    v: a,
    i: o,
    e: ae(() => (i(t, a ?? r, o ?? s, f), () => {
      e.delete(n);
    }))
  };
}
function Dt(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, s = e.nodes.end, i = t && (t.f & Pe) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Kt(n)
      );
      if (i.before(n), n === s)
        return;
      n = u;
    }
}
function je(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Bi(e, t) {
  yi(() => {
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
      const s = Yn("style");
      s.id = t.hash, s.textContent = t.code, n.appendChild(s);
    }
  });
}
const gn = [...` 	
\r\f \v\uFEFF`];
function Hi(e, t, r) {
  var n = "" + e;
  if (r) {
    for (var s of Object.keys(r))
      if (r[s])
        n = n ? n + " " + s : s;
      else if (n.length)
        for (var i = s.length, u = 0; (u = n.indexOf(s, u)) >= 0; ) {
          var f = u + i;
          (u === 0 || gn.includes(n[u - 1])) && (f === n.length || gn.includes(n[f])) ? n = (u === 0 ? "" : n.substring(0, u)) + n.substring(f + 1) : u = f;
        }
  }
  return n === "" ? null : n;
}
function Er(e, t, r, n, s, i) {
  var u = e.__className;
  if (u !== r || u === void 0) {
    var f = Hi(r, n, i);
    f == null ? e.removeAttribute("class") : e.className = f, e.__className = r;
  } else if (i && s !== i)
    for (var a in i) {
      var o = !!i[a];
      (s == null || o !== !!s[a]) && e.classList.toggle(a, o);
    }
  return i;
}
function kr(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  _i(e, "input", async (s) => {
    var i = s ? e.defaultValue : e.value;
    if (i = xr(e) ? zr(i) : i, r(i), y !== null && n.add(y), await Ai(), i !== (i = t())) {
      var u = e.selectionStart, f = e.selectionEnd, a = e.value.length;
      if (e.value = i ?? "", f !== null) {
        var o = e.value.length;
        u === f && f === a && o > a ? (e.selectionStart = o, e.selectionEnd = o) : (e.selectionStart = u, e.selectionEnd = Math.min(f, o));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  ss(t) == null && e.value && (r(xr(e) ? zr(e.value) : e.value), y !== null && n.add(y)), Kn(() => {
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        y
      );
      if (n.has(i))
        return;
    }
    xr(e) && s === zr(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function xr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function zr(e) {
  return e === "" ? null : +e;
}
function Qt(e, t, r, n) {
  var s = (
    /** @type {V} */
    n
  ), i = !0, u = () => (i && (i = !1, s = /** @type {V} */
  n), s), f;
  f = /** @type {V} */
  e[t], f === void 0 && n !== void 0 && (f = u());
  var a;
  return a = () => {
    var o = (
      /** @type {V} */
      e[t]
    );
    return o === void 0 ? u() : (i = !0, o);
  }, a;
}
const Ui = "5";
var wn;
typeof window < "u" && ((wn = window.__svelte ?? (window.__svelte = {})).v ?? (wn.v = /* @__PURE__ */ new Set())).add(Ui);
var Yi = /* @__PURE__ */ be('<div class="error svelte-1twzaof"> </div>'), Ji = /* @__PURE__ */ be('<div class="success svelte-1twzaof"> </div>'), Ki = /* @__PURE__ */ be('<div class="empty svelte-1twzaof">Loading vault data…</div>'), Wi = /* @__PURE__ */ be('<div class="empty svelte-1twzaof">No balances found</div>'), Gi = /* @__PURE__ */ be('<tr><td class="fw svelte-1twzaof"> </td><td class="svelte-1twzaof"> </td><td class="svelte-1twzaof"> </td></tr>'), Xi = /* @__PURE__ */ be('<div class="table-wrap svelte-1twzaof"><table class="svelte-1twzaof"><thead><tr><th class="svelte-1twzaof">Token</th><th class="svelte-1twzaof">Balance</th><th class="svelte-1twzaof">Available</th></tr></thead><tbody></tbody></table></div>'), Zi = /* @__PURE__ */ be('<div class="empty svelte-1twzaof">No transfers found</div>'), Qi = /* @__PURE__ */ be('<tr><td class="mono svelte-1twzaof"> </td><td class="mono svelte-1twzaof"> </td><td class="svelte-1twzaof"> </td><td class="svelte-1twzaof"> </td></tr>'), $i = /* @__PURE__ */ be('<div class="table-wrap svelte-1twzaof"><table class="svelte-1twzaof"><thead><tr><th class="svelte-1twzaof">From</th><th class="svelte-1twzaof">To</th><th class="svelte-1twzaof">Amount</th><th class="svelte-1twzaof">Status</th></tr></thead><tbody></tbody></table></div>'), el = /* @__PURE__ */ be('<div class="card svelte-1twzaof"><label class="svelte-1twzaof">Token (optional) <input type="text" placeholder="Token symbol" class="svelte-1twzaof"/></label> <label class="svelte-1twzaof">Recipient <input type="text" placeholder="Principal ID" class="svelte-1twzaof"/></label> <label class="svelte-1twzaof">Amount <input type="text" placeholder="Amount" class="svelte-1twzaof"/></label> <button class="primary svelte-1twzaof"> </button></div>'), tl = /* @__PURE__ */ be('<div class="rt-vault svelte-1twzaof"><div class="header svelte-1twzaof"><h2 class="svelte-1twzaof">Vault</h2> <span class="badge svelte-1twzaof"> </span> <button class="refresh svelte-1twzaof">↻ Refresh</button></div> <!> <!> <div class="tabs svelte-1twzaof"><button>Balances</button> <button>Transfers</button> <button>Send</button></div> <!></div>');
const rl = {
  hash: "svelte-1twzaof",
  code: ".rt-vault.svelte-1twzaof {font-family:system-ui, -apple-system, sans-serif;max-width:760px;margin:0 auto;padding:1.5rem;}.header.svelte-1twzaof {display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;flex-wrap:wrap;}.header.svelte-1twzaof h2:where(.svelte-1twzaof) {margin:0;font-size:1.5rem;}.badge.svelte-1twzaof {background:#e0e7ff;color:#3730a3;padding:0.15rem 0.5rem;border-radius:9999px;font-size:0.75rem;}.refresh.svelte-1twzaof {margin-left:auto;padding:0.35rem 0.75rem;background:#f3f4f6;border:1px solid #d1d5db;border-radius:0.5rem;cursor:pointer;font-size:0.8rem;}.tabs.svelte-1twzaof {display:flex;border-bottom:2px solid #e5e7eb;margin-bottom:1rem;}.tabs.svelte-1twzaof button:where(.svelte-1twzaof) {padding:0.5rem 1rem;background:none;border:none;border-bottom:2px solid transparent;margin-bottom:-2px;cursor:pointer;font-size:0.875rem;color:#6b7280;}.tabs.svelte-1twzaof button.active:where(.svelte-1twzaof) {border-bottom-color:#4f46e5;color:#4f46e5;font-weight:500;}.error.svelte-1twzaof {background:#fef2f2;color:#991b1b;border:1px solid #fecaca;padding:0.75rem;border-radius:0.5rem;margin-bottom:1rem;}.success.svelte-1twzaof {background:#ecfdf5;color:#065f46;border:1px solid #a7f3d0;padding:0.75rem;border-radius:0.5rem;margin-bottom:1rem;}.empty.svelte-1twzaof {color:#6b7280;text-align:center;padding:2rem;}.table-wrap.svelte-1twzaof {overflow-x:auto;}table.svelte-1twzaof {width:100%;border-collapse:collapse;font-size:0.8rem;}th.svelte-1twzaof {text-align:left;padding:0.5rem;border-bottom:2px solid #e5e7eb;color:#6b7280;font-weight:500;}td.svelte-1twzaof {padding:0.5rem;border-bottom:1px solid #f3f4f6;}.fw.svelte-1twzaof {font-weight:500;}.mono.svelte-1twzaof {font-family:ui-monospace, monospace;font-size:0.75rem;}.card.svelte-1twzaof {background:#fff;border:1px solid #e5e7eb;border-radius:0.75rem;padding:1.25rem;}label.svelte-1twzaof {display:block;font-size:0.8rem;font-weight:500;color:#374151;margin-bottom:0.75rem;}input.svelte-1twzaof {display:block;width:100%;margin-top:0.25rem;padding:0.5rem 0.75rem;border:1px solid #d1d5db;border-radius:0.5rem;font-size:0.85rem;box-sizing:border-box;}.primary.svelte-1twzaof {padding:0.5rem 1.25rem;background:#4f46e5;color:#fff;border:none;border-radius:0.5rem;cursor:pointer;font-size:0.85rem;}.primary.svelte-1twzaof:hover:not(:disabled) {background:#4338ca;}.primary.svelte-1twzaof:disabled {opacity:0.5;cursor:not-allowed;}"
};
function nl(e, t) {
  xn(t, !0), Bi(e, rl);
  let r = Qt(t, "extensionId", 3, "vault"), n = Qt(t, "version", 3, "");
  Qt(t, "principal", 3, ""), Qt(t, "isAuthenticated", 3, !0);
  let s = /* @__PURE__ */ j("balances"), i = /* @__PURE__ */ j(Xe([])), u = /* @__PURE__ */ j(Xe([])), f = /* @__PURE__ */ j(!0), a = /* @__PURE__ */ j(""), o = /* @__PURE__ */ j(""), d = /* @__PURE__ */ j(""), h = /* @__PURE__ */ j(""), _ = /* @__PURE__ */ j(!1), v = /* @__PURE__ */ j("");
  async function c(g, R = "{}") {
    const I = await t.backend.extension_sync_call(JSON.stringify({ extension_name: r(), function_name: g, args: R }));
    return JSON.parse(I);
  }
  async function m(g, R = "{}") {
    const I = await t.backend.extension_async_call(JSON.stringify({ extension_name: r(), function_name: g, args: R }));
    return JSON.parse(I);
  }
  async function b() {
    S(f, !0), S(a, "");
    try {
      const [g, R] = await Promise.all([
        c("get_vault_balance", "{}").catch(() => null),
        t.backend.get_objects_paginated("WalletTransfer", 0, 50, "desc").then((I) => JSON.parse(I)?.data ?? []).catch(() => [])
      ]);
      S(i, g?.data?.balances ?? g?.balances ?? (Array.isArray(g?.data) ? g.data : []), !0), Array.isArray(p(i)) || S(
        i,
        typeof g?.data == "object" && g.data ? Object.entries(g.data).map(([I, ke]) => ({ token: I, ...typeof ke == "object" ? ke : { balance: ke } })) : [],
        !0
      ), S(u, Array.isArray(R) ? R : [], !0);
    } catch (g) {
      S(a, g?.message || String(g), !0);
    } finally {
      S(f, !1);
    }
  }
  async function A() {
    if (!(!p(d).trim() || !p(h).trim())) {
      S(_, !0), S(v, ""), S(a, "");
      try {
        await m("transfer", JSON.stringify({
          token: p(o) || void 0,
          to: p(d),
          amount: p(h)
        })), S(v, "Transfer submitted!"), S(d, ""), S(h, ""), await b();
      } catch (g) {
        S(a, g?.message || String(g), !0);
      } finally {
        S(_, !1);
      }
    }
  }
  async function z() {
    try {
      await m("refresh", "{}"), await b();
    } catch (g) {
      S(a, g?.message || String(g), !0);
    }
  }
  mi(() => {
    b();
  });
  var Y = tl(), X = N(Y), ye = O(N(X), 2), Ee = N(ye), Le = O(ye, 2), J = O(X, 2);
  {
    var ve = (g) => {
      var R = Yi(), I = N(R);
      dt(() => _e(I, p(a))), Z(g, R);
    };
    Ot(J, (g) => {
      p(a) && g(ve);
    });
  }
  var Gt = O(J, 2);
  {
    var vr = (g) => {
      var R = Ji(), I = N(R);
      dt(() => _e(I, p(v))), Z(g, R);
    };
    Ot(Gt, (g) => {
      p(v) && g(vr);
    });
  }
  var Gr = O(Gt, 2), hr = N(Gr);
  let Xr;
  var _r = O(hr, 2);
  let Zr;
  var Qr = O(_r, 2);
  let $r;
  var as = O(Gr, 2);
  {
    var fs = (g) => {
      var R = Ki();
      Z(g, R);
    }, os = (g) => {
      var R = vn(), I = an(R);
      {
        var ke = (B) => {
          var re = Wi();
          Z(B, re);
        }, ct = (B) => {
          var re = Xi(), Tt = N(re), Ke = O(N(Tt));
          pn(Ke, 21, () => p(i), hn, (At, C) => {
            var Nt = Gi(), Rt = N(Nt), pr = N(Rt), Ct = O(Rt), gr = N(Ct), Xt = O(Ct), wr = N(Xt);
            dt(() => {
              _e(pr, p(C).token || p(C).symbol || p(C).name || "—"), _e(gr, p(C).balance ?? p(C).total ?? "—"), _e(wr, p(C).available ?? p(C).balance ?? "—");
            }), Z(At, Nt);
          }), Z(B, re);
        };
        Ot(I, (B) => {
          p(i).length === 0 ? B(ke) : B(ct, -1);
        });
      }
      Z(g, R);
    }, us = (g) => {
      var R = vn(), I = an(R);
      {
        var ke = (B) => {
          var re = Zi();
          Z(B, re);
        }, ct = (B) => {
          var re = $i(), Tt = N(re), Ke = O(N(Tt));
          pn(Ke, 21, () => p(u), hn, (At, C) => {
            var Nt = Qi(), Rt = N(Nt), pr = N(Rt), Ct = O(Rt), gr = N(Ct), Xt = O(Ct), wr = N(Xt), ds = O(Xt), vs = N(ds);
            dt(
              (hs, _s) => {
                _e(pr, `${hs ?? ""}…`), _e(gr, `${_s ?? ""}…`), _e(wr, p(C).amount ?? "—"), _e(vs, p(C).status ?? "—");
              },
              [
                () => (p(C).from || p(C).sender || "").slice(0, 12),
                () => (p(C).to || p(C).recipient || "").slice(0, 12)
              ]
            ), Z(At, Nt);
          }), Z(B, re);
        };
        Ot(I, (B) => {
          p(u).length === 0 ? B(ke) : B(ct, -1);
        });
      }
      Z(g, R);
    }, cs = (g) => {
      var R = el(), I = N(R), ke = O(N(I)), ct = O(I, 2), B = O(N(ct)), re = O(ct, 2), Tt = O(N(re)), Ke = O(re, 2), At = N(Ke);
      dt(
        (C) => {
          Ke.disabled = C, _e(At, p(_) ? "Sending…" : "Send");
        },
        [
          () => p(_) || !p(d).trim() || !p(h).trim()
        ]
      ), kr(ke, () => p(o), (C) => S(o, C)), kr(B, () => p(d), (C) => S(d, C)), kr(Tt, () => p(h), (C) => S(h, C)), Mt("click", Ke, A), Z(g, R);
    };
    Ot(as, (g) => {
      p(f) ? g(fs) : p(s) === "balances" ? g(os, 1) : p(s) === "transfers" ? g(us, 2) : p(s) === "send" && g(cs, 3);
    });
  }
  dt(() => {
    _e(Ee, `v${n() ?? ""}`), Le.disabled = p(f), Xr = Er(hr, 1, "svelte-1twzaof", null, Xr, { active: p(s) === "balances" }), Zr = Er(_r, 1, "svelte-1twzaof", null, Zr, { active: p(s) === "transfers" }), $r = Er(Qr, 1, "svelte-1twzaof", null, $r, { active: p(s) === "send" });
  }), Mt("click", Le, z), Mt("click", hr, () => S(s, "balances")), Mt("click", _r, () => S(s, "transfers")), Mt("click", Qr, () => S(s, "send")), Z(e, Y), zn();
}
Ci(["click"]);
function ll(e, t) {
  const r = Di(nl, { target: e, props: t });
  return {
    unmount() {
      try {
        Ii(r);
      } catch {
      }
    }
  };
}
export {
  ll as default
};
