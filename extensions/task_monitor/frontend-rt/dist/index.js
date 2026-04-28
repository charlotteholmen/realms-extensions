var rs = Object.defineProperty;
var ba = (e) => {
  throw TypeError(e);
};
var ns = (e, t, r) => t in e ? rs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Fe = (e, t, r) => ns(e, typeof t != "symbol" ? t + "" : t, r), Tn = (e, t, r) => t.has(e) || ba("Cannot " + r);
var s = (e, t, r) => (Tn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), E = (e, t, r) => t.has(e) ? ba("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), T = (e, t, r, n) => (Tn(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), I = (e, t, r) => (Tn(e, t, "access private method"), r);
var Un = Array.isArray, as = Array.prototype.indexOf, Gt = Array.prototype.includes, on = Array.from, is = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, ss = Object.prototype, ls = Array.prototype, os = Object.getPrototypeOf, ya = Object.isExtensible;
const fs = () => {
};
function us(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Fa() {
  var e, t, r = new Promise((n, a) => {
    e = n, t = a;
  });
  return { promise: r, resolve: e, reject: t };
}
const re = 2, Wt = 4, fn = 8, ja = 1 << 24, Ge = 16, Be = 32, pt = 64, Pn = 128, Ce = 512, W = 1024, te = 2048, We = 4096, se = 8192, Se = 16384, jt = 32768, xa = 1 << 25, Kt = 65536, Dn = 1 << 17, ds = 1 << 18, Qt = 1 << 19, cs = 1 << 20, it = 1 << 25, Pt = 65536, rn = 1 << 21, mr = 1 << 22, ht = 1 << 23, gr = Symbol("$state"), Qe = new class extends Error {
  constructor() {
    super(...arguments);
    Fe(this, "name", "StaleReactionError");
    Fe(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function vs() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function hs(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function _s(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ps() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function gs(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function bs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ys() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function xs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ms() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ws() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ks = 1, Es = 2, Cs = 16, La = 1, Ss = 2, Z = Symbol(), Ms = "http://www.w3.org/1999/xhtml";
function Ts() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function As() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ns() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Oa(e) {
  return e === this.v;
}
function Rs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function za(e) {
  return !Rs(e, this.v);
}
let Te = null;
function Jt(e) {
  Te = e;
}
function Ba(e, t = !1, r) {
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
function Ia(e) {
  var t = (
    /** @type {ComponentContext} */
    Te
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      oi(n);
  }
  return t.i = !0, Te = t.p, /** @type {T} */
  {};
}
function Ha() {
  return !0;
}
let mt = [];
function qa() {
  var e = mt;
  mt = [], us(e);
}
function Ht(e) {
  if (mt.length === 0 && !br) {
    var t = mt;
    queueMicrotask(() => {
      t === mt && qa();
    });
  }
  mt.push(e);
}
function Ps() {
  for (; mt.length > 0; )
    qa();
}
function Va(e) {
  var t = P;
  if (t === null)
    return A.f |= ht, e;
  if ((t.f & jt) === 0 && (t.f & Wt) === 0)
    throw e;
  vt(e, t);
}
function vt(e, t) {
  for (; t !== null; ) {
    if ((t.f & Pn) !== 0) {
      if ((t.f & jt) === 0)
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
const Ds = -7169;
function U(e, t) {
  e.f = e.f & Ds | t;
}
function $n(e) {
  (e.f & Ce) !== 0 || e.deps === null ? U(e, W) : U(e, We);
}
function Ua(e) {
  if (e !== null)
    for (const t of e)
      (t.f & re) === 0 || (t.f & Pt) === 0 || (t.f ^= Pt, Ua(
        /** @type {Derived} */
        t.deps
      ));
}
function $a(e, t, r) {
  (e.f & te) !== 0 ? t.add(e) : (e.f & We) !== 0 && r.add(e), Ua(e.deps), U(e, W);
}
const yt = /* @__PURE__ */ new Set();
let k = null, Oe = null, Fn = null, br = !1, An = !1, It = null, Kr = null;
var ma = 0;
let Fs = 1;
var qt, Vt, Et, et, Ue, Er, ve, Cr, dt, tt, $e, Ut, $t, Ct, G, Jr, Ya, Zr, jn, Xr, js;
const an = class an {
  constructor() {
    E(this, G);
    Fe(this, "id", Fs++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Fe(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Fe(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, qt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, Vt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, Et, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    E(this, et, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    E(this, Ue, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    E(this, Er, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    E(this, ve, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    E(this, Cr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    E(this, dt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    E(this, tt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    E(this, $e, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    E(this, Ut, /* @__PURE__ */ new Set());
    Fe(this, "is_fork", !1);
    E(this, $t, !1);
    /** @type {Set<Batch>} */
    E(this, Ct, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    s(this, $e).has(t) || s(this, $e).set(t, { d: [], m: [] }), s(this, Ut).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = s(this, $e).get(t);
    if (n) {
      s(this, $e).delete(t);
      for (var a of n.d)
        U(a, te), r(a);
      for (a of n.m)
        U(a, We), r(a);
    }
    s(this, Ut).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== Z && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & ht) === 0 && (this.current.set(t, [r, n]), Oe?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    k = this;
  }
  deactivate() {
    k = null, Oe = null;
  }
  flush() {
    try {
      An = !0, k = this, I(this, G, Zr).call(this);
    } finally {
      ma = 0, Fn = null, It = null, Kr = null, An = !1, k = null, Oe = null, At.clear();
    }
  }
  discard() {
    for (const t of s(this, Vt)) t(this);
    s(this, Vt).clear(), s(this, Et).clear(), yt.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    s(this, Cr).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = s(this, et).get(r) ?? 0;
    if (s(this, et).set(r, n + 1), t) {
      let a = s(this, Ue).get(r) ?? 0;
      s(this, Ue).set(r, a + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let a = s(this, et).get(r) ?? 0;
    if (a === 1 ? s(this, et).delete(r) : s(this, et).set(r, a - 1), t) {
      let i = s(this, Ue).get(r) ?? 0;
      i === 1 ? s(this, Ue).delete(r) : s(this, Ue).set(r, i - 1);
    }
    s(this, $t) || n || (T(this, $t, !0), Ht(() => {
      T(this, $t, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      s(this, dt).add(n);
    for (const n of r)
      s(this, tt).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    s(this, qt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    s(this, Vt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    s(this, Et).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of s(this, Et)) t(this);
    s(this, Et).clear();
  }
  settled() {
    return (s(this, Er) ?? T(this, Er, Fa())).promise;
  }
  static ensure() {
    if (k === null) {
      const t = k = new an();
      An || (yt.add(k), br || Ht(() => {
        k === t && t.flush();
      }));
    }
    return k;
  }
  apply() {
    {
      Oe = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Fn = t, t.b?.is_pending && (t.f & (Wt | fn | ja)) !== 0 && (t.f & jt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (It !== null && r === P && (A === null || (A.f & re) === 0))
        return;
      if ((n & (pt | Be)) !== 0) {
        if ((n & W) === 0)
          return;
        r.f ^= W;
      }
    }
    s(this, ve).push(r);
  }
};
qt = new WeakMap(), Vt = new WeakMap(), Et = new WeakMap(), et = new WeakMap(), Ue = new WeakMap(), Er = new WeakMap(), ve = new WeakMap(), Cr = new WeakMap(), dt = new WeakMap(), tt = new WeakMap(), $e = new WeakMap(), Ut = new WeakMap(), $t = new WeakMap(), Ct = new WeakMap(), G = new WeakSet(), Jr = function() {
  return this.is_fork || s(this, Ue).size > 0;
}, Ya = function() {
  for (const n of s(this, Ct))
    for (const a of s(n, Ue).keys()) {
      for (var t = !1, r = a; r.parent !== null; ) {
        if (s(this, $e).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, Zr = function() {
  var l;
  if (ma++ > 1e3 && (yt.delete(this), Os()), !I(this, G, Jr).call(this)) {
    for (const o of s(this, dt))
      s(this, tt).delete(o), U(o, te), this.schedule(o);
    for (const o of s(this, tt))
      U(o, We), this.schedule(o);
  }
  const t = s(this, ve);
  T(this, ve, []), this.apply();
  var r = It = [], n = [], a = Kr = [];
  for (const o of t)
    try {
      I(this, G, jn).call(this, o, r, n);
    } catch (u) {
      throw Ka(o), u;
    }
  if (k = null, a.length > 0) {
    var i = an.ensure();
    for (const o of a)
      i.schedule(o);
  }
  if (It = null, Kr = null, I(this, G, Jr).call(this) || I(this, G, Ya).call(this)) {
    I(this, G, Xr).call(this, n), I(this, G, Xr).call(this, r);
    for (const [o, u] of s(this, $e))
      Wa(o, u);
  } else {
    s(this, et).size === 0 && yt.delete(this), s(this, dt).clear(), s(this, tt).clear();
    for (const o of s(this, qt)) o(this);
    s(this, qt).clear(), wa(n), wa(r), s(this, Er)?.resolve();
  }
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    k
  );
  if (s(this, ve).length > 0) {
    const o = f ?? (f = this);
    s(o, ve).push(...s(this, ve).filter((u) => !s(o, ve).includes(u)));
  }
  f !== null && (yt.add(f), I(l = f, G, Zr).call(l));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
jn = function(t, r, n) {
  t.f ^= W;
  for (var a = t.first; a !== null; ) {
    var i = a.f, f = (i & (Be | pt)) !== 0, l = f && (i & W) !== 0, o = l || (i & se) !== 0 || s(this, $e).has(a);
    if (!o && a.fn !== null) {
      f ? a.f ^= W : (i & Wt) !== 0 ? r.push(a) : Rr(a) && ((i & Ge) !== 0 && s(this, tt).add(a), Xt(a));
      var u = a.first;
      if (u !== null) {
        a = u;
        continue;
      }
    }
    for (; a !== null; ) {
      var v = a.next;
      if (v !== null) {
        a = v;
        break;
      }
      a = a.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
Xr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    $a(t[r], s(this, dt), s(this, tt));
}, js = function() {
  var v, b, g;
  for (const _ of yt) {
    var t = _.id < this.id, r = [];
    for (const [c, [S, m]] of this.current) {
      if (_.current.has(c)) {
        var n = (
          /** @type {[any, boolean]} */
          _.current.get(c)[0]
        );
        if (t && S !== n)
          _.current.set(c, [S, m]);
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
        for (const c of s(this, Ut))
          _.unskip_effect(c, (S) => {
            var m;
            (S.f & (Ge | mr)) !== 0 ? _.schedule(S) : I(m = _, G, Xr).call(m, [S]);
          });
      _.activate();
      var i = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (var l of r)
        Ga(l, a, i, f);
      f = /* @__PURE__ */ new Map();
      var o = [..._.current.keys()].filter(
        (c) => this.current.has(c) ? (
          /** @type {[any, boolean]} */
          this.current.get(c)[0] !== c
        ) : !0
      );
      for (const c of s(this, Cr))
        (c.f & (Se | se | Dn)) === 0 && Yn(c, o, f) && ((c.f & (mr | Ge)) !== 0 ? (U(c, te), _.schedule(c)) : s(_, dt).add(c));
      if (s(_, ve).length > 0) {
        _.apply();
        for (var u of s(_, ve))
          I(v = _, G, jn).call(v, u, [], []);
        T(_, ve, []);
      }
      _.deactivate();
    }
  }
  for (const _ of yt)
    s(_, Ct).has(this) && (s(_, Ct).delete(this), s(_, Ct).size === 0 && !I(b = _, G, Jr).call(b) && (_.activate(), I(g = _, G, Zr).call(g)));
};
let Dt = an;
function Ls(e) {
  var t = br;
  br = !0;
  try {
    for (var r; ; ) {
      if (Ps(), k === null)
        return (
          /** @type {T} */
          r
        );
      k.flush();
    }
  } finally {
    br = t;
  }
}
function Os() {
  try {
    bs();
  } catch (e) {
    vt(e, Fn);
  }
}
let Xe = null;
function wa(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Se | se)) === 0 && Rr(n) && (Xe = /* @__PURE__ */ new Set(), Xt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && ci(n), Xe?.size > 0)) {
        At.clear();
        for (const a of Xe) {
          if ((a.f & (Se | se)) !== 0) continue;
          const i = [a];
          let f = a.parent;
          for (; f !== null; )
            Xe.has(f) && (Xe.delete(f), i.push(f)), f = f.parent;
          for (let l = i.length - 1; l >= 0; l--) {
            const o = i[l];
            (o.f & (Se | se)) === 0 && Xt(o);
          }
        }
        Xe.clear();
      }
    }
    Xe = null;
  }
}
function Ga(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const a of e.reactions) {
      const i = a.f;
      (i & re) !== 0 ? Ga(
        /** @type {Derived} */
        a,
        t,
        r,
        n
      ) : (i & (mr | Ge)) !== 0 && (i & te) === 0 && Yn(a, t, n) && (U(a, te), Gn(
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
      if (Gt.call(t, a))
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
function Wa(e, t) {
  if (!((e.f & Be) !== 0 && (e.f & W) !== 0)) {
    (e.f & te) !== 0 ? t.d.push(e) : (e.f & We) !== 0 && t.m.push(e), U(e, W);
    for (var r = e.first; r !== null; )
      Wa(r, t), r = r.next;
  }
}
function Ka(e) {
  U(e, W);
  for (var t = e.first; t !== null; )
    Ka(t), t = t.next;
}
function zs(e) {
  let t = 0, r = Ft(0), n;
  return () => {
    Zn() && (d(r), ui(() => (t === 0 && (n = wi(() => e(() => yr(r)))), t += 1, () => {
      Ht(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, yr(r));
      });
    })));
  };
}
var Bs = Kt | Qt;
function Is(e, t, r, n) {
  new Hs(e, t, r, n);
}
var me, Vn, we, St, fe, ke, ie, he, rt, Mt, ct, Yt, Sr, Mr, nt, sn, V, qs, Vs, Us, Ln, Qr, en, On, zn;
class Hs {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, a) {
    E(this, V);
    /** @type {Boundary | null} */
    Fe(this, "parent");
    Fe(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Fe(this, "transform_error");
    /** @type {TemplateNode} */
    E(this, me);
    /** @type {TemplateNode | null} */
    E(this, Vn, null);
    /** @type {BoundaryProps} */
    E(this, we);
    /** @type {((anchor: Node) => void)} */
    E(this, St);
    /** @type {Effect} */
    E(this, fe);
    /** @type {Effect | null} */
    E(this, ke, null);
    /** @type {Effect | null} */
    E(this, ie, null);
    /** @type {Effect | null} */
    E(this, he, null);
    /** @type {DocumentFragment | null} */
    E(this, rt, null);
    E(this, Mt, 0);
    E(this, ct, 0);
    E(this, Yt, !1);
    /** @type {Set<Effect>} */
    E(this, Sr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    E(this, Mr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    E(this, nt, null);
    E(this, sn, zs(() => (T(this, nt, Ft(s(this, Mt))), () => {
      T(this, nt, null);
    })));
    T(this, me, t), T(this, we, r), T(this, St, (i) => {
      var f = (
        /** @type {Effect} */
        P
      );
      f.b = this, f.f |= Pn, n(i);
    }), this.parent = /** @type {Effect} */
    P.b, this.transform_error = a ?? this.parent?.transform_error ?? ((i) => i), T(this, fe, Xn(() => {
      I(this, V, Ln).call(this);
    }, Bs));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    $a(t, s(this, Sr), s(this, Mr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!s(this, we).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    I(this, V, On).call(this, t, r), T(this, Mt, s(this, Mt) + t), !(!s(this, nt) || s(this, Yt)) && (T(this, Yt, !0), Ht(() => {
      T(this, Yt, !1), s(this, nt) && Zt(s(this, nt), s(this, Mt));
    }));
  }
  get_effect_pending() {
    return s(this, sn).call(this), d(
      /** @type {Source<number>} */
      s(this, nt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!s(this, we).onerror && !s(this, we).failed)
      throw t;
    k?.is_fork ? (s(this, ke) && k.skip_effect(s(this, ke)), s(this, ie) && k.skip_effect(s(this, ie)), s(this, he) && k.skip_effect(s(this, he)), k.on_fork_commit(() => {
      I(this, V, zn).call(this, t);
    })) : I(this, V, zn).call(this, t);
  }
}
me = new WeakMap(), Vn = new WeakMap(), we = new WeakMap(), St = new WeakMap(), fe = new WeakMap(), ke = new WeakMap(), ie = new WeakMap(), he = new WeakMap(), rt = new WeakMap(), Mt = new WeakMap(), ct = new WeakMap(), Yt = new WeakMap(), Sr = new WeakMap(), Mr = new WeakMap(), nt = new WeakMap(), sn = new WeakMap(), V = new WeakSet(), qs = function() {
  try {
    T(this, ke, Ee(() => s(this, St).call(this, s(this, me))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Vs = function(t) {
  const r = s(this, we).failed;
  r && T(this, he, Ee(() => {
    r(
      s(this, me),
      () => t,
      () => () => {
      }
    );
  }));
}, Us = function() {
  const t = s(this, we).pending;
  t && (this.is_pending = !0, T(this, ie, Ee(() => t(s(this, me)))), Ht(() => {
    var r = T(this, rt, document.createDocumentFragment()), n = _t();
    r.append(n), T(this, ke, I(this, V, en).call(this, () => Ee(() => s(this, St).call(this, n)))), s(this, ct) === 0 && (s(this, me).before(r), T(this, rt, null), Nt(
      /** @type {Effect} */
      s(this, ie),
      () => {
        T(this, ie, null);
      }
    ), I(this, V, Qr).call(
      this,
      /** @type {Batch} */
      k
    ));
  }));
}, Ln = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), T(this, ct, 0), T(this, Mt, 0), T(this, ke, Ee(() => {
      s(this, St).call(this, s(this, me));
    })), s(this, ct) > 0) {
      var t = T(this, rt, document.createDocumentFragment());
      ta(s(this, ke), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        s(this, we).pending
      );
      T(this, ie, Ee(() => r(s(this, me))));
    } else
      I(this, V, Qr).call(
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
Qr = function(t) {
  this.is_pending = !1, t.transfer_effects(s(this, Sr), s(this, Mr));
}, /**
 * @template T
 * @param {() => T} fn
 */
en = function(t) {
  var r = P, n = A, a = Te;
  Ke(s(this, fe)), Ae(s(this, fe)), Jt(s(this, fe).ctx);
  try {
    return Dt.ensure(), t();
  } catch (i) {
    return Va(i), null;
  } finally {
    Ke(r), Ae(n), Jt(a);
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
    this.parent && I(n = this.parent, V, On).call(n, t, r);
    return;
  }
  T(this, ct, s(this, ct) + t), s(this, ct) === 0 && (I(this, V, Qr).call(this, r), s(this, ie) && Nt(s(this, ie), () => {
    T(this, ie, null);
  }), s(this, rt) && (s(this, me).before(s(this, rt)), T(this, rt, null)));
}, /**
 * @param {unknown} error
 */
zn = function(t) {
  s(this, ke) && (de(s(this, ke)), T(this, ke, null)), s(this, ie) && (de(s(this, ie)), T(this, ie, null)), s(this, he) && (de(s(this, he)), T(this, he, null));
  var r = s(this, we).onerror;
  let n = s(this, we).failed;
  var a = !1, i = !1;
  const f = () => {
    if (a) {
      Ns();
      return;
    }
    a = !0, i && ws(), s(this, he) !== null && Nt(s(this, he), () => {
      T(this, he, null);
    }), I(this, V, en).call(this, () => {
      I(this, V, Ln).call(this);
    });
  }, l = (o) => {
    try {
      i = !0, r?.(o, f), i = !1;
    } catch (u) {
      vt(u, s(this, fe) && s(this, fe).parent);
    }
    n && T(this, he, I(this, V, en).call(this, () => {
      try {
        return Ee(() => {
          var u = (
            /** @type {Effect} */
            P
          );
          u.b = this, u.f |= Pn, n(
            s(this, me),
            () => o,
            () => f
          );
        });
      } catch (u) {
        return vt(
          u,
          /** @type {Effect} */
          s(this, fe).parent
        ), null;
      }
    }));
  };
  Ht(() => {
    var o;
    try {
      o = this.transform_error(t);
    } catch (u) {
      vt(u, s(this, fe) && s(this, fe).parent);
      return;
    }
    o !== null && typeof o == "object" && typeof /** @type {any} */
    o.then == "function" ? o.then(
      l,
      /** @param {unknown} e */
      (u) => vt(u, s(this, fe) && s(this, fe).parent)
    ) : l(o);
  });
};
function $s(e, t, r, n) {
  const a = Wn;
  var i = e.filter((g) => !g.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(a));
    return;
  }
  var f = (
    /** @type {Effect} */
    P
  ), l = Ys(), o = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((g) => g.promise)) : null;
  function u(g) {
    l();
    try {
      n(g);
    } catch (_) {
      (f.f & Se) === 0 && vt(_, f);
    }
    nn();
  }
  if (r.length === 0) {
    o.then(() => u(t.map(a)));
    return;
  }
  var v = Ja();
  function b() {
    Promise.all(r.map((g) => /* @__PURE__ */ Gs(g))).then((g) => u([...t.map(a), ...g])).catch((g) => vt(g, f)).finally(() => v());
  }
  o ? o.then(() => {
    l(), b(), nn();
  }) : b();
}
function Ys() {
  var e = (
    /** @type {Effect} */
    P
  ), t = A, r = Te, n = (
    /** @type {Batch} */
    k
  );
  return function(i = !0) {
    Ke(e), Ae(t), Jt(r), i && (e.f & Se) === 0 && (n?.activate(), n?.apply());
  };
}
function nn(e = !0) {
  Ke(null), Ae(null), Jt(null), e && k?.deactivate();
}
function Ja() {
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
  return P !== null && (P.f |= Qt), {
    ctx: Te,
    deps: null,
    effects: null,
    equals: Oa,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Z
    ),
    wv: 0,
    parent: P,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Gs(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    P
  );
  n === null && vs();
  var a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Ft(
    /** @type {V} */
    Z
  ), f = !A, l = /* @__PURE__ */ new Map();
  return ol(() => {
    var o = (
      /** @type {Effect} */
      P
    ), u = Fa();
    a = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(nn);
    } catch (_) {
      u.reject(_), nn();
    }
    var v = (
      /** @type {Batch} */
      k
    );
    if (f) {
      if ((o.f & jt) !== 0)
        var b = Ja();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        l.get(v)?.reject(Qe), l.delete(v);
      else {
        for (const _ of l.values())
          _.reject(Qe);
        l.clear();
      }
      l.set(v, u);
    }
    const g = (_, c = void 0) => {
      if (b) {
        var S = c === Qe;
        b(S);
      }
      if (!(c === Qe || (o.f & Se) !== 0)) {
        if (v.activate(), c)
          i.f |= ht, Zt(i, c);
        else {
          (i.f & ht) !== 0 && (i.f ^= ht), Zt(i, _);
          for (const [m, M] of l) {
            if (l.delete(m), m === v) break;
            M.reject(Qe);
          }
        }
        v.deactivate();
      }
    };
    u.promise.then(g, (_) => g(null, _ || "unknown"));
  }), li(() => {
    for (const o of l.values())
      o.reject(Qe);
  }), new Promise((o) => {
    function u(v) {
      function b() {
        v === a ? o(i) : u(a);
      }
      v.then(b, b);
    }
    u(a);
  });
}
// @__NO_SIDE_EFFECTS__
function xt(e) {
  const t = /* @__PURE__ */ Wn(e);
  return _i(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ws(e) {
  const t = /* @__PURE__ */ Wn(e);
  return t.equals = za, t;
}
function Ks(e) {
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
  if (!gt && n !== null && (n.f & (Se | se)) !== 0)
    return Ts(), e.v;
  Ke(n);
  try {
    e.f &= ~Pt, Ks(e), t = yi(e);
  } finally {
    Ke(r);
  }
  return t;
}
function Za(e) {
  var t = Kn(e);
  if (!e.equals(t) && (e.wv = gi(), (!k?.is_fork || e.deps === null) && (k !== null ? k.capture(e, t, !0) : e.v = t, e.deps === null))) {
    U(e, W);
    return;
  }
  gt || (Oe !== null ? (Zn() || k?.is_fork) && Oe.set(e, t) : $n(e));
}
function Js(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Qe), t.teardown = fs, t.ac = null, wr(t, 0), Qn(t));
}
function Xa(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Xt(t);
}
let Bn = /* @__PURE__ */ new Set();
const At = /* @__PURE__ */ new Map();
let Qa = !1;
function Ft(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Oa,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function q(e, t) {
  const r = Ft(e);
  return _i(r), r;
}
// @__NO_SIDE_EFFECTS__
function Zs(e, t = !1, r = !0) {
  const n = Ft(e);
  return t || (n.equals = za), n;
}
function D(e, t, r = !1) {
  A !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ze || (A.f & Dn) !== 0) && Ha() && (A.f & (re | Ge | mr | Dn)) !== 0 && (Me === null || !Gt.call(Me, e)) && ms();
  let n = r ? Le(t) : t;
  return Zt(e, n, Kr);
}
function Zt(e, t, r = null) {
  if (!e.equals(t)) {
    At.set(e, gt ? t : e.v);
    var n = Dt.ensure();
    if (n.capture(e, t), (e.f & re) !== 0) {
      const a = (
        /** @type {Derived} */
        e
      );
      (e.f & te) !== 0 && Kn(a), Oe === null && $n(a);
    }
    e.wv = gi(), ei(e, te, r), P !== null && (P.f & W) !== 0 && (P.f & (Be | pt)) === 0 && (xe === null ? dl([e]) : xe.push(e)), !n.is_fork && Bn.size > 0 && !Qa && Xs();
  }
  return t;
}
function Xs() {
  Qa = !1;
  for (const e of Bn)
    (e.f & W) !== 0 && U(e, We), Rr(e) && Xt(e);
  Bn.clear();
}
function Qs(e, t = 1) {
  var r = d(e);
  return D(e, t === 1 ? ++r : --r);
}
function yr(e) {
  D(e, e.v + 1);
}
function ei(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, i = 0; i < a; i++) {
      var f = n[i], l = f.f, o = (l & te) === 0;
      if (o && U(f, t), (l & re) !== 0) {
        var u = (
          /** @type {Derived} */
          f
        );
        Oe?.delete(u), (l & Pt) === 0 && (l & Ce && (P === null || (P.f & rn) === 0) && (f.f |= Pt), ei(u, We, r));
      } else if (o) {
        var v = (
          /** @type {Effect} */
          f
        );
        (l & Ge) !== 0 && Xe !== null && Xe.add(v), r !== null ? r.push(v) : Gn(v);
      }
    }
}
function Le(e) {
  if (typeof e != "object" || e === null || gr in e)
    return e;
  const t = os(e);
  if (t !== ss && t !== ls)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Un(e), a = /* @__PURE__ */ q(0), i = Rt, f = (l) => {
    if (Rt === i)
      return l();
    var o = A, u = Rt;
    Ae(null), Ma(i);
    var v = l();
    return Ae(o), Ma(u), v;
  };
  return n && r.set("length", /* @__PURE__ */ q(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, o, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && ys();
        var v = r.get(o);
        return v === void 0 ? f(() => {
          var b = /* @__PURE__ */ q(u.value);
          return r.set(o, b), b;
        }) : D(v, u.value, !0), !0;
      },
      deleteProperty(l, o) {
        var u = r.get(o);
        if (u === void 0) {
          if (o in l) {
            const v = f(() => /* @__PURE__ */ q(Z));
            r.set(o, v), yr(a);
          }
        } else
          D(u, Z), yr(a);
        return !0;
      },
      get(l, o, u) {
        if (o === gr)
          return e;
        var v = r.get(o), b = o in l;
        if (v === void 0 && (!b || pr(l, o)?.writable) && (v = f(() => {
          var _ = Le(b ? l[o] : Z), c = /* @__PURE__ */ q(_);
          return c;
        }), r.set(o, v)), v !== void 0) {
          var g = d(v);
          return g === Z ? void 0 : g;
        }
        return Reflect.get(l, o, u);
      },
      getOwnPropertyDescriptor(l, o) {
        var u = Reflect.getOwnPropertyDescriptor(l, o);
        if (u && "value" in u) {
          var v = r.get(o);
          v && (u.value = d(v));
        } else if (u === void 0) {
          var b = r.get(o), g = b?.v;
          if (b !== void 0 && g !== Z)
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
        if (o === gr)
          return !0;
        var u = r.get(o), v = u !== void 0 && u.v !== Z || Reflect.has(l, o);
        if (u !== void 0 || P !== null && (!v || pr(l, o)?.writable)) {
          u === void 0 && (u = f(() => {
            var g = v ? Le(l[o]) : Z, _ = /* @__PURE__ */ q(g);
            return _;
          }), r.set(o, u));
          var b = d(u);
          if (b === Z)
            return !1;
        }
        return v;
      },
      set(l, o, u, v) {
        var b = r.get(o), g = o in l;
        if (n && o === "length")
          for (var _ = u; _ < /** @type {Source<number>} */
          b.v; _ += 1) {
            var c = r.get(_ + "");
            c !== void 0 ? D(c, Z) : _ in l && (c = f(() => /* @__PURE__ */ q(Z)), r.set(_ + "", c));
          }
        if (b === void 0)
          (!g || pr(l, o)?.writable) && (b = f(() => /* @__PURE__ */ q(void 0)), D(b, Le(u)), r.set(o, b));
        else {
          g = b.v !== Z;
          var S = f(() => Le(u));
          D(b, S);
        }
        var m = Reflect.getOwnPropertyDescriptor(l, o);
        if (m?.set && m.set.call(v, u), !g) {
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
          return g === void 0 || g.v !== Z;
        });
        for (var [u, v] of r)
          v.v !== Z && !(u in l) && o.push(u);
        return o;
      },
      setPrototypeOf() {
        xs();
      }
    }
  );
}
function ka(e) {
  try {
    if (e !== null && typeof e == "object" && gr in e)
      return e[gr];
  } catch {
  }
  return e;
}
function el(e, t) {
  return Object.is(ka(e), ka(t));
}
var Ea, ti, ri, ni;
function tl() {
  if (Ea === void 0) {
    Ea = window, ti = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    ri = pr(t, "firstChild").get, ni = pr(t, "nextSibling").get, ya(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ya(r) && (r.__t = void 0);
  }
}
function _t(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  return (
    /** @type {TemplateNode | null} */
    ri.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Nr(e) {
  return (
    /** @type {TemplateNode | null} */
    ni.call(e)
  );
}
function p(e, t) {
  return /* @__PURE__ */ at(e);
}
function ft(e, t = !1) {
  {
    var r = /* @__PURE__ */ at(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Nr(r) : r;
  }
}
function y(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Nr(n);
  return n;
}
function rl(e) {
  e.textContent = "";
}
function ai() {
  return !1;
}
function ii(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ms, e, void 0)
  );
}
let Ca = !1;
function nl() {
  Ca || (Ca = !0, document.addEventListener(
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
function si(e, t, r, n = r) {
  e.addEventListener(t, () => Jn(r));
  const a = e.__on_r;
  a ? e.__on_r = () => {
    a(), n(!0);
  } : e.__on_r = () => n(!0), nl();
}
function al(e) {
  P === null && (A === null && gs(), ps()), gt && _s();
}
function il(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function st(e, t) {
  var r = P;
  r !== null && (r.f & se) !== 0 && (e |= se);
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
  if ((e & Wt) !== 0)
    It !== null ? It.push(n) : Dt.ensure().schedule(n);
  else if (t !== null) {
    try {
      Xt(n);
    } catch (f) {
      throw de(n), f;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    (a.f & Qt) === 0 && (a = a.first, (e & Ge) !== 0 && (e & Kt) !== 0 && a !== null && (a.f |= Kt));
  }
  if (a !== null && (a.parent = r, r !== null && il(a, r), A !== null && (A.f & re) !== 0 && (e & pt) === 0)) {
    var i = (
      /** @type {Derived} */
      A
    );
    (i.effects ?? (i.effects = [])).push(a);
  }
  return n;
}
function Zn() {
  return A !== null && !ze;
}
function li(e) {
  const t = st(fn, null);
  return U(t, W), t.teardown = e, t;
}
function sl(e) {
  al();
  var t = (
    /** @type {Effect} */
    P.f
  ), r = !A && (t & Be) !== 0 && (t & jt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Te
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return oi(e);
}
function oi(e) {
  return st(Wt | cs, e);
}
function ll(e) {
  Dt.ensure();
  const t = st(pt | Qt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Nt(t, () => {
      de(t), n(void 0);
    }) : (de(t), n(void 0));
  });
}
function fi(e) {
  return st(Wt, e);
}
function ol(e) {
  return st(mr | Qt, e);
}
function ui(e, t = 0) {
  return st(fn | t, e);
}
function ae(e, t = [], r = [], n = []) {
  $s(n, t, r, (a) => {
    st(fn, () => e(...a.map(d)));
  });
}
function Xn(e, t = 0) {
  var r = st(Ge | t, e);
  return r;
}
function Ee(e) {
  return st(Be | Qt, e);
}
function di(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = gt, n = A;
    Sa(!0), Ae(null);
    try {
      t.call(null);
    } finally {
      Sa(r), Ae(n);
    }
  }
}
function Qn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const a = r.ac;
    a !== null && Jn(() => {
      a.abort(Qe);
    });
    var n = r.next;
    (r.f & pt) !== 0 ? r.parent = null : de(r, t), r = n;
  }
}
function fl(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Be) === 0 && de(t), t = r;
  }
}
function de(e, t = !0) {
  var r = !1;
  (t || (e.f & ds) !== 0) && e.nodes !== null && e.nodes.end !== null && (ul(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), U(e, xa), Qn(e, t && !r), wr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  di(e), e.f ^= xa, e.f |= Se;
  var a = e.parent;
  a !== null && a.first !== null && ci(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ul(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Nr(e);
    e.remove(), e = r;
  }
}
function ci(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Nt(e, t, r = !0) {
  var n = [];
  vi(e, n, !0);
  var a = () => {
    r && de(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var f = () => --i || a();
    for (var l of n)
      l.out(f);
  } else
    a();
}
function vi(e, t, r) {
  if ((e.f & se) === 0) {
    e.f ^= se;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const l of n)
        (l.is_global || r) && t.push(l);
    for (var a = e.first; a !== null; ) {
      var i = a.next;
      if ((a.f & pt) === 0) {
        var f = (a.f & Kt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (a.f & Be) !== 0 && (e.f & Ge) !== 0;
        vi(a, t, f ? r : !1);
      }
      a = i;
    }
  }
}
function ea(e) {
  hi(e, !0);
}
function hi(e, t) {
  if ((e.f & se) !== 0) {
    e.f ^= se, (e.f & W) === 0 && (U(e, te), Dt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, a = (r.f & Kt) !== 0 || (r.f & Be) !== 0;
      hi(r, a ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const f of i)
        (f.is_global || t) && f.in();
  }
}
function ta(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var a = r === n ? null : /* @__PURE__ */ Nr(r);
      t.append(r), r = a;
    }
}
let tn = !1, gt = !1;
function Sa(e) {
  gt = e;
}
let A = null, ze = !1;
function Ae(e) {
  A = e;
}
let P = null;
function Ke(e) {
  P = e;
}
let Me = null;
function _i(e) {
  A !== null && (Me === null ? Me = [e] : Me.push(e));
}
let ue = null, ce = 0, xe = null;
function dl(e) {
  xe = e;
}
let pi = 1, wt = 0, Rt = wt;
function Ma(e) {
  Rt = e;
}
function gi() {
  return ++pi;
}
function Rr(e) {
  var t = e.f;
  if ((t & te) !== 0)
    return !0;
  if (t & re && (e.f &= ~Pt), (t & We) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, a = 0; a < n; a++) {
      var i = r[a];
      if (Rr(
        /** @type {Derived} */
        i
      ) && Za(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & Ce) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Oe === null && U(e, W);
  }
  return !1;
}
function bi(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Me !== null && Gt.call(Me, e)))
    for (var a = 0; a < n.length; a++) {
      var i = n[a];
      (i.f & re) !== 0 ? bi(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? U(i, te) : (i.f & W) !== 0 && U(i, We), Gn(
        /** @type {Effect} */
        i
      ));
    }
}
function yi(e) {
  var S;
  var t = ue, r = ce, n = xe, a = A, i = Me, f = Te, l = ze, o = Rt, u = e.f;
  ue = /** @type {null | Value[]} */
  null, ce = 0, xe = null, A = (u & (Be | pt)) === 0 ? e : null, Me = null, Jt(e.ctx), ze = !1, Rt = ++wt, e.ac !== null && (Jn(() => {
    e.ac.abort(Qe);
  }), e.ac = null);
  try {
    e.f |= rn;
    var v = (
      /** @type {Function} */
      e.fn
    ), b = v();
    e.f |= jt;
    var g = e.deps, _ = k?.is_fork;
    if (ue !== null) {
      var c;
      if (_ || wr(e, ce), g !== null && ce > 0)
        for (g.length = ce + ue.length, c = 0; c < ue.length; c++)
          g[ce + c] = ue[c];
      else
        e.deps = g = ue;
      if (Zn() && (e.f & Ce) !== 0)
        for (c = ce; c < g.length; c++)
          ((S = g[c]).reactions ?? (S.reactions = [])).push(e);
    } else !_ && g !== null && ce < g.length && (wr(e, ce), g.length = ce);
    if (Ha() && xe !== null && !ze && g !== null && (e.f & (re | We | te)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      xe.length; c++)
        bi(
          xe[c],
          /** @type {Effect} */
          e
        );
    if (a !== null && a !== e) {
      if (wt++, a.deps !== null)
        for (let m = 0; m < r; m += 1)
          a.deps[m].rv = wt;
      if (t !== null)
        for (const m of t)
          m.rv = wt;
      xe !== null && (n === null ? n = xe : n.push(.../** @type {Source[]} */
      xe));
    }
    return (e.f & ht) !== 0 && (e.f ^= ht), b;
  } catch (m) {
    return Va(m);
  } finally {
    e.f ^= rn, ue = t, ce = r, xe = n, A = a, Me = i, Jt(f), ze = l, Rt = o;
  }
}
function cl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = as.call(r, e);
    if (n !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[n] = r[a], r.pop());
    }
  }
  if (r === null && (t.f & re) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ue === null || !Gt.call(ue, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & Ce) !== 0 && (i.f ^= Ce, i.f &= ~Pt), i.v !== Z && $n(i), Js(i), wr(i, 0);
  }
}
function wr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      cl(e, r[n]);
}
function Xt(e) {
  var t = e.f;
  if ((t & Se) === 0) {
    U(e, W);
    var r = P, n = tn;
    P = e, tn = !0;
    try {
      (t & (Ge | ja)) !== 0 ? fl(e) : Qn(e), di(e);
      var a = yi(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = pi;
      var i;
    } finally {
      tn = n, P = r;
    }
  }
}
async function vl() {
  await Promise.resolve(), Ls();
}
function d(e) {
  var t = e.f, r = (t & re) !== 0;
  if (A !== null && !ze) {
    var n = P !== null && (P.f & Se) !== 0;
    if (!n && (Me === null || !Gt.call(Me, e))) {
      var a = A.deps;
      if ((A.f & rn) !== 0)
        e.rv < wt && (e.rv = wt, ue === null && a !== null && a[ce] === e ? ce++ : ue === null ? ue = [e] : ue.push(e));
      else {
        (A.deps ?? (A.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [A] : Gt.call(i, A) || i.push(A);
      }
    }
  }
  if (gt && At.has(e))
    return At.get(e);
  if (r) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (gt) {
      var l = f.v;
      return ((f.f & W) === 0 && f.reactions !== null || mi(f)) && (l = Kn(f)), At.set(f, l), l;
    }
    var o = (f.f & Ce) === 0 && !ze && A !== null && (tn || (A.f & Ce) !== 0), u = (f.f & jt) === 0;
    Rr(f) && (o && (f.f |= Ce), Za(f)), o && !u && (Xa(f), xi(f));
  }
  if (Oe?.has(e))
    return Oe.get(e);
  if ((e.f & ht) !== 0)
    throw e.v;
  return e.v;
}
function xi(e) {
  if (e.f |= Ce, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & re) !== 0 && (t.f & Ce) === 0 && (Xa(
        /** @type {Derived} */
        t
      ), xi(
        /** @type {Derived} */
        t
      ));
}
function mi(e) {
  if (e.v === Z) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (At.has(t) || (t.f & re) !== 0 && mi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function wi(e) {
  var t = ze;
  try {
    return ze = !0, e();
  } finally {
    ze = t;
  }
}
const hl = ["touchstart", "touchmove"];
function _l(e) {
  return hl.includes(e);
}
const kt = Symbol("events"), ki = /* @__PURE__ */ new Set(), In = /* @__PURE__ */ new Set();
function ye(e, t, r) {
  (t[kt] ?? (t[kt] = {}))[e] = r;
}
function pl(e) {
  for (var t = 0; t < e.length; t++)
    ki.add(e[t]);
  for (var r of In)
    r(e);
}
let Ta = null;
function Aa(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, a = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    a[0] || e.target
  );
  Ta = e;
  var f = 0, l = Ta === e && e[kt];
  if (l) {
    var o = a.indexOf(l);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[kt] = t;
      return;
    }
    var u = a.indexOf(t);
    if (u === -1)
      return;
    o <= u && (f = o);
  }
  if (i = /** @type {Element} */
  a[f] || e.target, i !== t) {
    is(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var v = A, b = P;
    Ae(null), Ke(null);
    try {
      for (var g, _ = []; i !== null; ) {
        var c = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var S = i[kt]?.[n];
          S != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && S.call(i, e);
        } catch (m) {
          g ? _.push(m) : g = m;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        i = c;
      }
      if (g) {
        for (let m of _)
          queueMicrotask(() => {
            throw m;
          });
        throw g;
      }
    } finally {
      e[kt] = t, delete e.currentTarget, Ae(v), Ke(b);
    }
  }
}
const gl = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function bl(e) {
  return (
    /** @type {string} */
    gl?.createHTML(e) ?? e
  );
}
function Ei(e) {
  var t = ii("template");
  return t.innerHTML = bl(e.replaceAll("<!>", "<!---->")), t.content;
}
function kr(e, t) {
  var r = (
    /** @type {Effect} */
    P
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function O(e, t) {
  var r = (t & La) !== 0, n = (t & Ss) !== 0, a, i = !e.startsWith("<!>");
  return () => {
    a === void 0 && (a = Ei(i ? e : "<!>" + e), r || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ at(a)));
    var f = (
      /** @type {TemplateNode} */
      n || ti ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ at(f)
      ), o = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      kr(l, o);
    } else
      kr(f, f);
    return f;
  };
}
// @__NO_SIDE_EFFECTS__
function yl(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), a = (t & La) !== 0, i = `<${r}>${n ? e : "<!>" + e}</${r}>`, f;
  return () => {
    if (!f) {
      var l = (
        /** @type {DocumentFragment} */
        Ei(i)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ at(l)
      );
      if (a)
        for (f = document.createDocumentFragment(); /* @__PURE__ */ at(o); )
          f.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ at(o)
          );
      else
        f = /** @type {Element} */
        /* @__PURE__ */ at(o);
    }
    var u = (
      /** @type {TemplateNode} */
      f.cloneNode(!0)
    );
    if (a) {
      var v = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ at(u)
      ), b = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      kr(v, b);
    } else
      kr(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function Ie(e, t) {
  return /* @__PURE__ */ yl(e, t, "svg");
}
function xl() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = _t();
  return e.append(t, r), kr(t, r), e;
}
function C(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function j(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function ml(e, t) {
  return wl(e, t);
}
const Gr = /* @__PURE__ */ new Map();
function wl(e, { target: t, anchor: r, props: n = {}, events: a, context: i, intro: f = !0, transformError: l }) {
  tl();
  var o = void 0, u = ll(() => {
    var v = r ?? t.appendChild(_t());
    Is(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (_) => {
        Ba({});
        var c = (
          /** @type {ComponentContext} */
          Te
        );
        i && (c.c = i), a && (n.$$events = a), o = e(_, n) || {}, Ia();
      },
      l
    );
    var b = /* @__PURE__ */ new Set(), g = (_) => {
      for (var c = 0; c < _.length; c++) {
        var S = _[c];
        if (!b.has(S)) {
          b.add(S);
          var m = _l(S);
          for (const Q of [t, document]) {
            var M = Gr.get(Q);
            M === void 0 && (M = /* @__PURE__ */ new Map(), Gr.set(Q, M));
            var x = M.get(S);
            x === void 0 ? (Q.addEventListener(S, Aa, { passive: m }), M.set(S, 1)) : M.set(S, x + 1);
          }
        }
      }
    };
    return g(on(ki)), In.add(g), () => {
      for (var _ of b)
        for (const m of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            Gr.get(m)
          ), S = (
            /** @type {number} */
            c.get(_)
          );
          --S == 0 ? (m.removeEventListener(_, Aa), c.delete(_), c.size === 0 && Gr.delete(m)) : c.set(_, S);
        }
      In.delete(g), v !== r && v.parentNode?.removeChild(v);
    };
  });
  return Hn.set(o, u), o;
}
let Hn = /* @__PURE__ */ new WeakMap();
function kl(e, t) {
  const r = Hn.get(e);
  return r ? (Hn.delete(e), r(t)) : Promise.resolve();
}
var je, Ye, _e, Tt, Tr, Ar, ln;
class El {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Fe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    E(this, je, /* @__PURE__ */ new Map());
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
    E(this, Tt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    E(this, Tr, !0);
    /**
     * @param {Batch} batch
     */
    E(this, Ar, (t) => {
      if (s(this, je).has(t)) {
        var r = (
          /** @type {Key} */
          s(this, je).get(t)
        ), n = s(this, Ye).get(r);
        if (n)
          ea(n), s(this, Tt).delete(r);
        else {
          var a = s(this, _e).get(r);
          a && (s(this, Ye).set(r, a.effect), s(this, _e).delete(r), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), n = a.effect);
        }
        for (const [i, f] of s(this, je)) {
          if (s(this, je).delete(i), i === t)
            break;
          const l = s(this, _e).get(f);
          l && (de(l.effect), s(this, _e).delete(f));
        }
        for (const [i, f] of s(this, Ye)) {
          if (i === r || s(this, Tt).has(i)) continue;
          const l = () => {
            if (Array.from(s(this, je).values()).includes(i)) {
              var u = document.createDocumentFragment();
              ta(f, u), u.append(_t()), s(this, _e).set(i, { effect: f, fragment: u });
            } else
              de(f);
            s(this, Tt).delete(i), s(this, Ye).delete(i);
          };
          s(this, Tr) || !n ? (s(this, Tt).add(i), Nt(f, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    E(this, ln, (t) => {
      s(this, je).delete(t);
      const r = Array.from(s(this, je).values());
      for (const [n, a] of s(this, _e))
        r.includes(n) || (de(a.effect), s(this, _e).delete(n));
    });
    this.anchor = t, T(this, Tr, r);
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
    ), a = ai();
    if (r && !s(this, Ye).has(t) && !s(this, _e).has(t))
      if (a) {
        var i = document.createDocumentFragment(), f = _t();
        i.append(f), s(this, _e).set(t, {
          effect: Ee(() => r(f)),
          fragment: i
        });
      } else
        s(this, Ye).set(
          t,
          Ee(() => r(this.anchor))
        );
    if (s(this, je).set(n, t), a) {
      for (const [l, o] of s(this, Ye))
        l === t ? n.unskip_effect(o) : n.skip_effect(o);
      for (const [l, o] of s(this, _e))
        l === t ? n.unskip_effect(o.effect) : n.skip_effect(o.effect);
      n.oncommit(s(this, Ar)), n.ondiscard(s(this, ln));
    } else
      s(this, Ar).call(this, n);
  }
}
je = new WeakMap(), Ye = new WeakMap(), _e = new WeakMap(), Tt = new WeakMap(), Tr = new WeakMap(), Ar = new WeakMap(), ln = new WeakMap();
function H(e, t, r = !1) {
  var n = new El(e), a = r ? Kt : 0;
  function i(f, l) {
    n.ensure(f, l);
  }
  Xn(() => {
    var f = !1;
    t((l, o = 0) => {
      f = !0, i(o, l);
    }), f || i(-1, null);
  }, a);
}
function Na(e, t) {
  return t;
}
function Cl(e, t, r) {
  for (var n = [], a = t.length, i, f = t.length, l = 0; l < a; l++) {
    let b = t[l];
    Nt(
      b,
      () => {
        if (i) {
          if (i.pending.delete(b), i.done.add(b), i.pending.size === 0) {
            var g = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            qn(e, on(i.done)), g.delete(i), g.size === 0 && (e.outrogroups = null);
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
      rl(v), v.append(u), e.items.clear();
    }
    qn(e, t, !o);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
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
    var i = t[a];
    if (n?.has(i)) {
      i.f |= it;
      const f = document.createDocumentFragment();
      ta(i, f);
    } else
      de(t[a], r);
  }
}
var Ra;
function Wr(e, t, r, n, a, i = null) {
  var f = e, l = /* @__PURE__ */ new Map();
  {
    var o = (
      /** @type {Element} */
      e
    );
    f = o.appendChild(_t());
  }
  var u = null, v = /* @__PURE__ */ Ws(() => {
    var x = r();
    return Un(x) ? x : x == null ? [] : on(x);
  }), b, g = /* @__PURE__ */ new Map(), _ = !0;
  function c(x) {
    (M.effect.f & Se) === 0 && (M.pending.delete(x), M.fallback = u, Sl(M, b, f, t, n), u !== null && (b.length === 0 ? (u.f & it) === 0 ? ea(u) : (u.f ^= it, _r(u, null, f)) : Nt(u, () => {
      u = null;
    })));
  }
  function S(x) {
    M.pending.delete(x);
  }
  var m = Xn(() => {
    b = /** @type {V[]} */
    d(v);
    for (var x = b.length, Q = /* @__PURE__ */ new Set(), le = (
      /** @type {Batch} */
      k
    ), oe = ai(), Ne = 0; Ne < x; Ne += 1) {
      var pe = b[Ne], K = n(pe, Ne), J = _ ? null : l.get(K);
      J ? (J.v && Zt(J.v, pe), J.i && Zt(J.i, Ne), oe && le.unskip_effect(J.e)) : (J = Ml(
        l,
        _ ? f : Ra ?? (Ra = _t()),
        pe,
        K,
        Ne,
        a,
        t,
        r
      ), _ || (J.e.f |= it), l.set(K, J)), Q.add(K);
    }
    if (x === 0 && i && !u && (_ ? u = Ee(() => i(f)) : (u = Ee(() => i(Ra ?? (Ra = _t()))), u.f |= it)), x > Q.size && hs(), !_)
      if (g.set(le, Q), oe) {
        for (const [un, dn] of l)
          Q.has(un) || le.skip_effect(dn.e);
        le.oncommit(c), le.ondiscard(S);
      } else
        c(le);
    d(v);
  }), M = { effect: m, items: l, pending: g, outrogroups: null, fallback: u };
  _ = !1;
}
function hr(e) {
  for (; e !== null && (e.f & Be) === 0; )
    e = e.next;
  return e;
}
function Sl(e, t, r, n, a) {
  var i = t.length, f = e.items, l = hr(e.effect.first), o, u = null, v = [], b = [], g, _, c, S;
  for (S = 0; S < i; S += 1) {
    if (g = t[S], _ = a(g, S), c = /** @type {EachItem} */
    f.get(_).e, e.outrogroups !== null)
      for (const K of e.outrogroups)
        K.pending.delete(c), K.done.delete(c);
    if ((c.f & se) !== 0 && ea(c), (c.f & it) !== 0)
      if (c.f ^= it, c === l)
        _r(c, null, r);
      else {
        var m = u ? u.next : l;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), ut(e, u, c), ut(e, c, m), _r(c, m, r), u = c, v = [], b = [], l = hr(u.next);
        continue;
      }
    if (c !== l) {
      if (o !== void 0 && o.has(c)) {
        if (v.length < b.length) {
          var M = b[0], x;
          u = M.prev;
          var Q = v[0], le = v[v.length - 1];
          for (x = 0; x < v.length; x += 1)
            _r(v[x], M, r);
          for (x = 0; x < b.length; x += 1)
            o.delete(b[x]);
          ut(e, Q.prev, le.next), ut(e, u, Q), ut(e, le, M), l = M, u = le, S -= 1, v = [], b = [];
        } else
          o.delete(c), _r(c, l, r), ut(e, c.prev, c.next), ut(e, c, u === null ? e.effect.first : u.next), ut(e, u, c), u = c;
        continue;
      }
      for (v = [], b = []; l !== null && l !== c; )
        (o ?? (o = /* @__PURE__ */ new Set())).add(l), b.push(l), l = hr(l.next);
      if (l === null)
        continue;
    }
    (c.f & it) === 0 && v.push(c), u = c, l = hr(c.next);
  }
  if (e.outrogroups !== null) {
    for (const K of e.outrogroups)
      K.pending.size === 0 && (qn(e, on(K.done)), e.outrogroups?.delete(K));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || o !== void 0) {
    var oe = [];
    if (o !== void 0)
      for (c of o)
        (c.f & se) === 0 && oe.push(c);
    for (; l !== null; )
      (l.f & se) === 0 && l !== e.fallback && oe.push(l), l = hr(l.next);
    var Ne = oe.length;
    if (Ne > 0) {
      var pe = i === 0 ? r : null;
      Cl(e, oe, pe);
    }
  }
}
function Ml(e, t, r, n, a, i, f, l) {
  var o = (f & ks) !== 0 ? (f & Cs) === 0 ? /* @__PURE__ */ Zs(r, !1, !1) : Ft(r) : null, u = (f & Es) !== 0 ? Ft(a) : null;
  return {
    v: o,
    i: u,
    e: Ee(() => (i(t, o ?? r, u ?? a, l), () => {
      e.delete(n);
    }))
  };
}
function _r(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, a = e.nodes.end, i = t && (t.f & it) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Nr(n)
      );
      if (i.before(n), n === a)
        return;
      n = f;
    }
}
function ut(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Tl(e, t) {
  fi(() => {
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
      const a = ii("style");
      a.id = t.hash, a.textContent = t.code, n.appendChild(a);
    }
  });
}
function Ci(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (r = Ci(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Al() {
  for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = Ci(e)) && (n && (n += " "), n += t);
  return n;
}
function Pa(e) {
  return typeof e == "object" ? Al(e) : e ?? "";
}
function Nl(e, t, r) {
  var n = e == null ? "" : "" + e;
  return t && (n = n ? n + " " + t : t), n === "" ? null : n;
}
function Bt(e, t, r, n, a, i) {
  var f = e.__className;
  if (f !== r || f === void 0) {
    var l = Nl(r, n);
    l == null ? e.removeAttribute("class") : e.className = l, e.__className = r;
  }
  return i;
}
function Si(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Un(t))
      return As();
    for (var n of e.options)
      n.selected = t.includes(xr(n));
    return;
  }
  for (n of e.options) {
    var a = xr(n);
    if (el(a, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function Rl(e) {
  var t = new MutationObserver(() => {
    Si(e, e.__value);
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
  }), li(() => {
    t.disconnect();
  });
}
function Pl(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), a = !0;
  si(e, "change", (i) => {
    var f = i ? "[selected]" : ":checked", l;
    if (e.multiple)
      l = [].map.call(e.querySelectorAll(f), xr);
    else {
      var o = e.querySelector(f) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      l = o && xr(o);
    }
    r(l), e.__value = l, k !== null && n.add(k);
  }), fi(() => {
    var i = t();
    if (e === document.activeElement) {
      var f = (
        /** @type {Batch} */
        k
      );
      if (n.has(f))
        return;
    }
    if (Si(e, i, a), a && i === void 0) {
      var l = e.querySelector(":checked");
      l !== null && (i = xr(l), r(i));
    }
    e.__value = i, a = !1;
  }), Rl(e);
}
function xr(e) {
  return "__value" in e ? e.__value : e.value;
}
function Dl(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  si(e, "input", async (a) => {
    var i = a ? e.defaultValue : e.value;
    if (i = Nn(e) ? Rn(i) : i, r(i), k !== null && n.add(k), await vl(), i !== (i = t())) {
      var f = e.selectionStart, l = e.selectionEnd, o = e.value.length;
      if (e.value = i ?? "", l !== null) {
        var u = e.value.length;
        f === l && l === o && u > o ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = f, e.selectionEnd = Math.min(l, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  wi(t) == null && e.value && (r(Nn(e) ? Rn(e.value) : e.value), k !== null && n.add(k)), ui(() => {
    var a = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        k
      );
      if (n.has(i))
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
const Fl = "5";
var Da;
typeof window < "u" && ((Da = window.__svelte ?? (window.__svelte = {})).v ?? (Da.v = /* @__PURE__ */ new Set())).add(Fl);
var jl = /* @__PURE__ */ Ie('<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), Ll = /* @__PURE__ */ Ie('<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'), Ol = /* @__PURE__ */ Ie('<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'), zl = /* @__PURE__ */ O("<div><!> </div>"), Bl = /* @__PURE__ */ O('<div class="fixed top-4 right-4 z-50 flex flex-col gap-2" style="min-width:300px"></div>'), Il = /* @__PURE__ */ O('<div class="flex justify-center py-16"><svg class="animate-spin h-8 w-8 text-blue-600" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg></div>'), Hl = /* @__PURE__ */ O("<span> </span>"), ql = /* @__PURE__ */ O('<p class="text-sm text-gray-600 dark:text-gray-400"> </p>'), Vl = /* @__PURE__ */ O('<span class="px-1.5 py-0.5 rounded text-xs bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300">Paused</span>'), Ul = /* @__PURE__ */ O('<div class="flex items-center justify-between bg-gray-50 dark:bg-gray-700/50 rounded-lg px-4 py-2 text-sm"><div class="flex items-center gap-2"><span> </span> <!></div> <button class="text-xs text-blue-600 dark:text-blue-400 hover:underline"> </button></div>'), $l = /* @__PURE__ */ O('<div><h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Schedules</h3> <div class="space-y-2"></div></div>'), Yl = /* @__PURE__ */ Ie('<svg class="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg> Starting...', 1), Gl = /* @__PURE__ */ Ie('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path></svg> Run Now', 1), Wl = /* @__PURE__ */ Ie('<svg class="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), Kl = /* @__PURE__ */ Ie('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>'), Jl = /* @__PURE__ */ O('<div class="px-6 py-3 flex items-start gap-3 text-sm"><span class="text-xs text-gray-400 font-mono whitespace-nowrap mt-0.5"> </span> <span class="text-gray-700 dark:text-gray-300 break-words"> </span></div>'), Zl = /* @__PURE__ */ O('<div class="mt-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"><div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700"><h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300">Execution History</h3></div> <div class="max-h-96 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-700"></div></div>'), Xl = /* @__PURE__ */ O('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"><div class="p-6 border-b border-gray-100 dark:border-gray-700"><div class="flex items-start justify-between gap-4"><div><h2 class="text-xl font-bold text-gray-900 dark:text-white"> </h2> <p class="text-xs text-gray-400 mt-1 font-mono"> </p></div> <!></div></div> <div class="p-6 space-y-4"><!> <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm"><div><span class="block text-gray-500 dark:text-gray-400">Created</span> <span class="font-medium text-gray-900 dark:text-white"> </span></div> <div><span class="block text-gray-500 dark:text-gray-400">Updated</span> <span class="font-medium text-gray-900 dark:text-white"> </span></div> <div><span class="block text-gray-500 dark:text-gray-400">Executions</span> <span class="font-medium text-gray-900 dark:text-white"> </span></div> <div><span class="block text-gray-500 dark:text-gray-400">Progress</span> <span class="font-medium text-gray-900 dark:text-white"> </span></div></div> <!></div> <div class="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700 flex gap-3"><button class="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg flex items-center gap-2"><!></button> <button class="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg flex items-center gap-2"><!> Delete</button></div></div> <!>', 1), Ql = /* @__PURE__ */ O('<div class="mb-4"><button class="inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:underline"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Back to tasks</button></div> <!>', 1), eo = /* @__PURE__ */ O('<div class="mb-4 p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg flex items-center gap-2 text-sm"><svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg> </div>'), to = /* @__PURE__ */ O('<div class="flex justify-center items-center py-16"><svg class="animate-spin h-10 w-10 text-blue-600" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg></div>'), ro = /* @__PURE__ */ O('<span class="relative flex h-3 w-3"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span></span>'), no = /* @__PURE__ */ O('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-12 text-center"><svg class="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg> <p class="text-gray-500 dark:text-gray-400"> </p></div>'), ao = /* @__PURE__ */ O('<span class="relative flex h-2.5 w-2.5"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span></span>'), io = /* @__PURE__ */ O('<p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 svelte-11d5b98"> </p>'), so = /* @__PURE__ */ O('<span class="px-1.5 py-0.5 rounded text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">Paused</span>'), lo = /* @__PURE__ */ O('<div class="flex items-center gap-1.5 text-gray-500 dark:text-gray-500"><span> </span></div>'), oo = /* @__PURE__ */ O('<div class="flex items-center gap-1.5 text-gray-600 dark:text-gray-400"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span> </span> <!></div> <!>', 1), fo = /* @__PURE__ */ O('<div class="flex items-center gap-1.5 text-gray-500 dark:text-gray-500"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>One-time task</span></div>'), uo = /* @__PURE__ */ Ie('<svg class="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), co = /* @__PURE__ */ Ie('<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path></svg>'), vo = /* @__PURE__ */ O("<button> </button>"), ho = /* @__PURE__ */ Ie('<svg class="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), _o = /* @__PURE__ */ Ie('<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>'), po = /* @__PURE__ */ O('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200 flex flex-col"><div class="p-4 border-b border-gray-100 dark:border-gray-700"><div class="flex justify-between items-start gap-2"><div class="flex-1 min-w-0"><h3 class="font-semibold text-gray-900 dark:text-white truncate"> </h3> <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5"> </p></div> <div class="flex items-center gap-2"><!> <span> </span></div></div></div> <div class="p-4 space-y-3 flex-1"><!> <div class="flex flex-wrap gap-3 text-sm"><!> <button class="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> </button></div></div> <div class="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700 rounded-b-xl flex gap-2"><button class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg> View</button> <button class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 rounded-lg transition-colors"><!> Run</button> <!> <button class="px-3 py-1.5 text-xs font-medium text-red-700 dark:text-red-400 border border-red-300 dark:border-red-700 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 disabled:opacity-50 transition-colors"><!></button></div></div>'), go = /* @__PURE__ */ O('<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"></div> <div class="flex items-center justify-between mt-6"><button class="text-sm px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">Previous</button> <span class="text-xs text-gray-500 dark:text-gray-400"> </span> <button class="text-sm px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">Next</button></div>', 1), bo = /* @__PURE__ */ O('<div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6"><div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"><div class="text-2xl font-bold text-gray-900 dark:text-white"> </div> <div class="text-sm text-gray-500 dark:text-gray-400">Total Tasks</div></div> <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"><div class="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2"> <!></div> <div class="text-sm text-gray-500 dark:text-gray-400">Running</div></div> <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"><div class="text-2xl font-bold text-yellow-600 dark:text-yellow-400"> </div> <div class="text-sm text-gray-500 dark:text-gray-400">Pending</div></div> <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"><div class="text-2xl font-bold text-green-600 dark:text-green-400"> </div> <div class="text-sm text-gray-500 dark:text-gray-400">Completed</div></div> <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"><div class="text-2xl font-bold text-red-600 dark:text-red-400"> </div> <div class="text-sm text-gray-500 dark:text-gray-400">Failed</div></div></div> <div class="flex flex-col sm:flex-row gap-3 mb-6"><div class="flex-1 relative"><svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> <input type="text" placeholder="Search tasks..." class="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"/></div> <select class="w-full sm:w-48 px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"><option>All Status</option><option>Running</option><option>Pending</option><option>Completed</option><option>Failed</option></select></div> <!>', 1), yo = /* @__PURE__ */ O('<div class="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"><h1 class="text-2xl font-bold text-gray-900 dark:text-white">Task Monitor</h1> <button class="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Refresh</button></div> <!> <!>', 1), xo = /* @__PURE__ */ O('<!> <div class="p-6 max-w-7xl mx-auto"><!></div>', 1);
const mo = {
  hash: "svelte-11d5b98",
  code: ".line-clamp-2.svelte-11d5b98 {display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}"
};
function wo(e, t) {
  Ba(t, !0), Tl(e, mo);
  let r = /* @__PURE__ */ q(Le([])), n = /* @__PURE__ */ q(!0), a = /* @__PURE__ */ q(""), i = /* @__PURE__ */ q(""), f = /* @__PURE__ */ q(""), l = /* @__PURE__ */ q(Le([])), o = /* @__PURE__ */ q(0), u = Le({}), v = Le({});
  const b = 10;
  let g = /* @__PURE__ */ q(1), _ = /* @__PURE__ */ q(0), c = /* @__PURE__ */ q(null), S = /* @__PURE__ */ q(!1), m = /* @__PURE__ */ q(Le([1])), M = /* @__PURE__ */ q(null), x = /* @__PURE__ */ q(null), Q = /* @__PURE__ */ q(Le([])), le = /* @__PURE__ */ q(!1), oe = /* @__PURE__ */ xt(() => ({
    total: d(r).length,
    running: d(r).filter((h) => h.status?.toLowerCase() === "running").length,
    pending: d(r).filter((h) => h.status?.toLowerCase() === "pending").length,
    completed: d(r).filter((h) => h.status?.toLowerCase() === "completed").length,
    failed: d(r).filter((h) => h.status?.toLowerCase() === "failed").length
  })), Ne = /* @__PURE__ */ xt(() => d(r).filter((h) => {
    const w = !d(i) || h.name.toLowerCase().includes(d(i).toLowerCase()) || Pr(h.metadata).toLowerCase().includes(d(i).toLowerCase()), L = !d(f) || h.status?.toLowerCase() === d(f).toLowerCase();
    return w && L;
  }));
  function pe(h, w = "info") {
    const L = Qs(o);
    D(l, [...d(l), { id: L, message: h, type: w }], !0), setTimeout(
      () => {
        D(l, d(l).filter(($) => $.id !== L), !0);
      },
      4e3
    );
  }
  async function K(h, w = {}) {
    return await t.ctx.callSync(h, w);
  }
  async function J() {
    try {
      const h = await K("get_all_tasks", { from_id: d(g), page_size: b });
      D(r, h?.tasks ?? h?.data?.tasks ?? (Array.isArray(h) ? h : []), !0), D(_, h?.max_id ?? 0, !0), D(c, h?.next_from_id ?? null, !0), D(S, h?.has_more ?? !1, !0), D(a, "");
    } catch (h) {
      D(a, "Error loading tasks: " + (h?.message || String(h)));
    } finally {
      D(n, !1);
    }
  }
  function un() {
    d(c) && (D(m, [...d(m), d(c)], !0), D(g, d(c), !0), J());
  }
  function dn() {
    d(m).length > 1 && (D(m, d(m).slice(0, -1), !0), D(g, d(m)[d(m).length - 1], !0), J());
  }
  async function cn(h) {
    D(M, h, !0), D(le, !0);
    try {
      const [w, L] = await Promise.all([
        K("get_task_details", { task_id: h }).catch(() => null),
        K("get_task_logs", { task_id: h }).catch(() => ({ data: [] }))
      ]);
      D(x, w?.data ?? w, !0), D(Q, L?.data ?? (Array.isArray(L) ? L : []), !0);
    } catch (w) {
      D(a, w?.message || String(w), !0);
    } finally {
      D(le, !1);
    }
  }
  function ra() {
    D(M, null), D(x, null), D(Q, [], !0);
  }
  async function na(h, w) {
    try {
      const L = await K("toggle_schedule", { schedule_id: h, disabled: !w });
      pe(w ? "Schedule resumed" : "Schedule paused", "success"), await J();
    } catch (L) {
      pe(L?.message || "Error toggling schedule", "error");
    }
  }
  async function aa(h) {
    u[h] = !0;
    try {
      const w = await K("run_task_now", { task_id: h });
      pe(w?.message || "Task started", "success"), await J(), d(M) === h && await cn(h);
    } catch (w) {
      pe(w?.message || "Error running task", "error");
    } finally {
      delete u[h];
    }
  }
  async function ia(h) {
    v[h] = !0;
    try {
      const w = await K("delete_task", { task_id: h });
      pe(w?.message || "Task deleted", "success"), d(M) === h && ra(), await J();
    } catch (w) {
      pe(w?.message || "Error deleting task", "error");
    } finally {
      delete v[h];
    }
  }
  function sa(h) {
    const w = h?.toLowerCase();
    return w === "running" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" : w === "pending" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" : w === "completed" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" : w === "failed" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
  }
  function Pr(h) {
    if (!h) return "";
    try {
      const w = JSON.parse(h);
      return w.description || w.desc || "";
    } catch {
      return h.length > 80 ? h.substring(0, 80) + "..." : h;
    }
  }
  function Mi(h) {
    if (!h) return "-";
    const w = Date.now() - new Date(h).getTime(), L = Math.floor(w / 1e3), $ = Math.floor(L / 60), ge = Math.floor($ / 60), lt = Math.floor(ge / 24);
    return L < 60 ? "Just now" : $ < 60 ? `${$}m ago` : ge < 24 ? `${ge}h ago` : `${lt}d ago`;
  }
  function la(h) {
    if (!h) return "One-time";
    const w = Math.floor(h / 86400), L = Math.floor(h % 86400 / 3600), $ = Math.floor(h % 3600 / 60);
    return w > 0 ? `Every ${w}d ${L}h` : L > 0 ? `Every ${L}h ${$}m` : $ > 0 ? `Every ${$}m` : `Every ${h}s`;
  }
  function oa(h) {
    return h ? new Date(h).toLocaleString() : "-";
  }
  sl(() => {
    J();
    const h = setInterval(J, 1e4);
    return () => clearInterval(h);
  });
  var fa = xo(), ua = ft(fa);
  {
    var Ti = (h) => {
      var w = Bl();
      Wr(w, 21, () => d(l), (L) => L.id, (L, $) => {
        var ge = zl(), lt = p(ge);
        {
          var er = (Y) => {
            var be = jl();
            C(Y, be);
          }, He = (Y) => {
            var be = Ll();
            C(Y, be);
          }, ot = (Y) => {
            var be = Ol();
            C(Y, be);
          };
          H(lt, (Y) => {
            d($).type === "success" ? Y(er) : d($).type === "error" ? Y(He, 1) : Y(ot, -1);
          });
        }
        var ne = y(lt);
        ae(() => {
          Bt(ge, 1, `px-4 py-3 rounded-lg shadow-lg text-sm font-medium flex items-center gap-2
					${d($).type === "success" ? "bg-green-600 text-white" : ""}
					${d($).type === "error" ? "bg-red-600 text-white" : ""}
					${d($).type === "info" ? "bg-blue-600 text-white" : ""}`), j(ne, ` ${d($).message ?? ""}`);
        }), C(L, ge);
      }), C(h, w);
    };
    H(ua, (h) => {
      d(l).length > 0 && h(Ti);
    });
  }
  var Ai = y(ua, 2), Ni = p(Ai);
  {
    var Ri = (h) => {
      var w = Ql(), L = ft(w), $ = p(L), ge = y(L, 2);
      {
        var lt = (He) => {
          var ot = Il();
          C(He, ot);
        }, er = (He) => {
          var ot = Xl(), ne = ft(ot), Y = p(ne), be = p(Y), tr = p(be), Dr = p(tr), vn = p(Dr), Fr = y(Dr, 2), hn = p(Fr), jr = y(tr, 2);
          {
            var _n = (N) => {
              var B = Hl(), F = p(B);
              ae(
                (qe) => {
                  Bt(B, 1, `px-2.5 py-1 rounded-full text-xs font-medium ${qe ?? ""}`, "svelte-11d5b98"), j(F, d(x).status);
                },
                [() => sa(d(x).status)]
              ), C(N, B);
            };
            H(jr, (N) => {
              d(x).status && N(_n);
            });
          }
          var Lr = y(Y, 2), rr = p(Lr);
          {
            var pn = (N) => {
              const B = /* @__PURE__ */ xt(() => Pr(d(x).metadata));
              var F = xl(), qe = ft(F);
              {
                var X = (Pe) => {
                  var De = ql(), Ve = p(De);
                  ae(() => j(Ve, d(B))), C(Pe, De);
                };
                H(qe, (Pe) => {
                  d(B) && Pe(X);
                });
              }
              C(N, F);
            };
            H(rr, (N) => {
              d(x).metadata && N(pn);
            });
          }
          var Or = y(rr, 2), nr = p(Or), gn = y(p(nr), 2), bn = p(gn), zr = y(nr, 2), yn = y(p(zr), 2), xn = p(yn), ar = y(zr, 2), Br = y(p(ar), 2), mn = p(Br), Ir = y(ar, 2), ir = y(p(Ir), 2), sr = p(ir), lr = y(Or, 2);
          {
            var or = (N) => {
              var B = $l(), F = y(p(B), 2);
              Wr(F, 21, () => d(x).schedules, Na, (qe, X) => {
                var Pe = Ul(), De = p(Pe), Ve = p(De), dr = p(Ve), cr = y(Ve, 2);
                {
                  var vr = (bt) => {
                    var Cn = Vl();
                    C(bt, Cn);
                  };
                  H(cr, (bt) => {
                    d(X).disabled && bt(vr);
                  });
                }
                var Vr = y(De, 2), Ur = p(Vr);
                ae(
                  (bt) => {
                    Bt(Ve, 1, Pa(d(X).disabled ? "line-through text-gray-400" : "text-gray-700 dark:text-gray-300")), j(dr, bt), j(Ur, d(X).disabled ? "Resume" : "Pause");
                  },
                  [() => la(d(X).repeat_every)]
                ), ye("click", Vr, () => na(d(X)._id, d(X).disabled)), C(qe, Pe);
              }), C(N, B);
            };
            H(lr, (N) => {
              d(x).schedules?.length > 0 && N(or);
            });
          }
          var Hr = y(Lr, 2), Lt = p(Hr), wn = p(Lt);
          {
            var kn = (N) => {
              var B = Yl();
              C(N, B);
            }, ee = (N) => {
              var B = Gl();
              C(N, B);
            };
            H(wn, (N) => {
              u[d(M)] ? N(kn) : N(ee, -1);
            });
          }
          var Re = y(Lt, 2), Ot = p(Re);
          {
            var fr = (N) => {
              var B = Wl();
              C(N, B);
            }, ur = (N) => {
              var B = Kl();
              C(N, B);
            };
            H(Ot, (N) => {
              v[d(M)] ? N(fr) : N(ur, -1);
            });
          }
          var qr = y(ne, 2);
          {
            var En = (N) => {
              var B = Zl(), F = y(p(B), 2);
              Wr(F, 21, () => d(Q), Na, (qe, X) => {
                var Pe = Jl(), De = p(Pe), Ve = p(De), dr = y(De, 2), cr = p(dr);
                ae(
                  (vr) => {
                    j(Ve, d(X).timestamp || d(X).time || ""), j(cr, vr);
                  },
                  [
                    () => d(X).message || d(X).output || JSON.stringify(d(X))
                  ]
                ), C(qe, Pe);
              }), C(N, B);
            };
            H(qr, (N) => {
              d(Q).length > 0 && N(En);
            });
          }
          ae(
            (N, B) => {
              j(vn, d(x).name || d(M)), j(hn, d(M)), j(bn, N), j(xn, B), j(mn, d(x).executions_count ?? "-"), j(sr, `${d(x).step_to_execute ?? 0 ?? ""} / ${d(x).total_steps ?? 0 ?? ""}`), Lt.disabled = u[d(M)], Re.disabled = v[d(M)];
            },
            [
              () => oa(d(x).created_at),
              () => oa(d(x).updated_at)
            ]
          ), ye("click", Lt, () => aa(d(M))), ye("click", Re, () => ia(d(M))), C(He, ot);
        };
        H(ge, (He) => {
          d(le) ? He(lt) : d(x) && He(er, 1);
        });
      }
      ye("click", $, ra), C(h, w);
    }, Pi = (h) => {
      var w = yo(), L = ft(w), $ = y(p(L), 2), ge = y(L, 2);
      {
        var lt = (ne) => {
          var Y = eo(), be = y(p(Y));
          ae(() => j(be, ` ${d(a) ?? ""}`)), C(ne, Y);
        };
        H(ge, (ne) => {
          d(a) && ne(lt);
        });
      }
      var er = y(ge, 2);
      {
        var He = (ne) => {
          var Y = to();
          C(ne, Y);
        }, ot = (ne) => {
          var Y = bo(), be = ft(Y), tr = p(be), Dr = p(tr), vn = p(Dr), Fr = y(tr, 2), hn = p(Fr), jr = p(hn), _n = y(jr);
          {
            var Lr = (ee) => {
              var Re = ro();
              C(ee, Re);
            };
            H(_n, (ee) => {
              d(oe).running > 0 && ee(Lr);
            });
          }
          var rr = y(Fr, 2), pn = p(rr), Or = p(pn), nr = y(rr, 2), gn = p(nr), bn = p(gn), zr = y(nr, 2), yn = p(zr), xn = p(yn), ar = y(be, 2), Br = p(ar), mn = y(p(Br), 2), Ir = y(Br, 2), ir = p(Ir);
          ir.value = ir.__value = "";
          var sr = y(ir);
          sr.value = sr.__value = "running";
          var lr = y(sr);
          lr.value = lr.__value = "pending";
          var or = y(lr);
          or.value = or.__value = "completed";
          var Hr = y(or);
          Hr.value = Hr.__value = "failed";
          var Lt = y(ar, 2);
          {
            var wn = (ee) => {
              var Re = no(), Ot = y(p(Re), 2), fr = p(Ot);
              ae(() => j(fr, d(i) || d(f) ? "No matching tasks" : "No tasks found")), C(ee, Re);
            }, kn = (ee) => {
              var Re = go(), Ot = ft(Re);
              Wr(Ot, 21, () => d(Ne), (B) => B._id, (B, F) => {
                var qe = po(), X = p(qe), Pe = p(X), De = p(Pe), Ve = p(De), dr = p(Ve), cr = y(Ve, 2), vr = p(cr), Vr = y(De, 2), Ur = p(Vr);
                {
                  var bt = (R) => {
                    var z = ao();
                    C(R, z);
                  }, Cn = /* @__PURE__ */ xt(() => d(F).status?.toLowerCase() === "running");
                  H(Ur, (R) => {
                    d(Cn) && R(bt);
                  });
                }
                var da = y(Ur, 2), Di = p(da), ca = y(X, 2), va = p(ca);
                {
                  var Fi = (R) => {
                    var z = io(), Je = p(z);
                    ae((zt) => j(Je, zt), [() => Pr(d(F).metadata)]), C(R, z);
                  }, ji = /* @__PURE__ */ xt(() => Pr(d(F).metadata));
                  H(va, (R) => {
                    d(ji) && R(Fi);
                  });
                }
                var Li = y(va, 2), ha = p(Li);
                {
                  var Oi = (R) => {
                    const z = /* @__PURE__ */ xt(() => d(F).schedules[0]);
                    var Je = oo(), zt = ft(Je), Mn = y(p(zt), 2), Wi = p(Mn), Ki = y(Mn, 2);
                    {
                      var Ji = (Ze) => {
                        var Yr = so();
                        C(Ze, Yr);
                      };
                      H(Ki, (Ze) => {
                        d(z).disabled && Ze(Ji);
                      });
                    }
                    var Zi = y(zt, 2);
                    {
                      var Xi = (Ze) => {
                        var Yr = lo(), Qi = p(Yr), es = p(Qi);
                        ae((ts) => j(es, `Last: ${ts ?? ""}`), [() => Mi(d(z).last_run_at)]), C(Ze, Yr);
                      };
                      H(Zi, (Ze) => {
                        d(z).last_run_at && Ze(Xi);
                      });
                    }
                    ae(
                      (Ze) => {
                        Bt(Mn, 1, Pa(d(z).disabled ? "line-through text-gray-400" : "")), j(Wi, Ze);
                      },
                      [() => la(d(z).repeat_every)]
                    ), C(R, Je);
                  }, zi = (R) => {
                    var z = fo();
                    C(R, z);
                  };
                  H(ha, (R) => {
                    d(F).schedules?.length > 0 ? R(Oi) : R(zi, -1);
                  });
                }
                var _a = y(ha, 2), Bi = y(p(_a)), Ii = y(ca, 2), pa = p(Ii), $r = y(pa, 2), Hi = p($r);
                {
                  var qi = (R) => {
                    var z = uo();
                    C(R, z);
                  }, Vi = (R) => {
                    var z = co();
                    C(R, z);
                  };
                  H(Hi, (R) => {
                    u[d(F)._id] ? R(qi) : R(Vi, -1);
                  });
                }
                var ga = y($r, 2);
                {
                  var Ui = (R) => {
                    const z = /* @__PURE__ */ xt(() => d(F).schedules[0]);
                    var Je = vo(), zt = p(Je);
                    ae(() => {
                      Bt(Je, 1, `px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors
											${d(z).disabled ? "text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30" : "text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-700 hover:bg-yellow-50 dark:hover:bg-yellow-900/30"}`), j(zt, d(z).disabled ? "Resume" : "Pause");
                    }), ye("click", Je, () => na(d(z)._id, d(z).disabled)), C(R, Je);
                  };
                  H(ga, (R) => {
                    d(F).schedules?.length > 0 && R(Ui);
                  });
                }
                var Sn = y(ga, 2), $i = p(Sn);
                {
                  var Yi = (R) => {
                    var z = ho();
                    C(R, z);
                  }, Gi = (R) => {
                    var z = _o();
                    C(R, z);
                  };
                  H($i, (R) => {
                    v[d(F)._id] ? R(Yi) : R(Gi, -1);
                  });
                }
                ae(
                  (R, z) => {
                    j(dr, d(F).name), j(vr, `ID: ${R ?? ""}`), Bt(da, 1, `px-2 py-0.5 rounded-full text-xs font-medium ${z ?? ""}`, "svelte-11d5b98"), j(Di, d(F).status || "Unknown"), j(Bi, ` ${d(F).executions_count ?? ""} runs`), $r.disabled = u[d(F)._id], Sn.disabled = v[d(F)._id];
                  },
                  [
                    () => d(F)._id.substring(0, 12),
                    () => sa(d(F).status)
                  ]
                ), ye("click", _a, () => cn(d(F)._id)), ye("click", pa, () => cn(d(F)._id)), ye("click", $r, () => aa(d(F)._id)), ye("click", Sn, () => ia(d(F)._id)), C(B, qe);
              });
              var fr = y(Ot, 2), ur = p(fr), qr = y(ur, 2), En = p(qr), N = y(qr, 2);
              ae(() => {
                ur.disabled = d(m).length <= 1, j(En, `Page ${d(m).length ?? ""}`), N.disabled = !d(S);
              }), ye("click", ur, dn), ye("click", N, un), C(ee, Re);
            };
            H(Lt, (ee) => {
              d(Ne).length === 0 ? ee(wn) : ee(kn, -1);
            });
          }
          ae(() => {
            j(vn, d(oe).total), j(jr, `${d(oe).running ?? ""} `), j(Or, d(oe).pending), j(bn, d(oe).completed), j(xn, d(oe).failed);
          }), Dl(mn, () => d(i), (ee) => D(i, ee)), Pl(Ir, () => d(f), (ee) => D(f, ee)), C(ne, Y);
        };
        H(er, (ne) => {
          d(n) ? ne(He) : ne(ot, -1);
        });
      }
      ye("click", $, J), C(h, w);
    };
    H(Ni, (h) => {
      d(M) ? h(Ri) : h(Pi, -1);
    });
  }
  C(e, fa), Ia();
}
pl(["click"]);
function Co(e, t) {
  const r = ml(wo, { target: e, props: { ctx: t } });
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
  Co as default
};
