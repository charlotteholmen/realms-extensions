var rs = Object.defineProperty;
var ba = (e) => {
  throw TypeError(e);
};
var ns = (e, t, r) => t in e ? rs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Fe = (e, t, r) => ns(e, typeof t != "symbol" ? t + "" : t, r), Tn = (e, t, r) => t.has(e) || ba("Cannot " + r);
var s = (e, t, r) => (Tn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), E = (e, t, r) => t.has(e) ? ba("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), T = (e, t, r, n) => (Tn(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), H = (e, t, r) => (Tn(e, t, "access private method"), r);
var Un = Array.isArray, as = Array.prototype.indexOf, Wt = Array.prototype.includes, on = Array.from, is = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, ss = Object.prototype, ls = Array.prototype, os = Object.getPrototypeOf, ya = Object.isExtensible;
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
const re = 2, Kt = 4, fn = 8, ja = 1 << 24, We = 16, Be = 32, pt = 64, Pn = 128, Ce = 512, W = 1024, te = 2048, Ke = 4096, se = 8192, Se = 16384, Lt = 32768, xa = 1 << 25, Jt = 65536, Dn = 1 << 17, ds = 1 << 18, er = 1 << 19, cs = 1 << 20, st = 1 << 25, Dt = 65536, rn = 1 << 21, mr = 1 << 22, ht = 1 << 23, gr = Symbol("$state"), et = new class extends Error {
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
function Zt(e) {
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
let wt = [];
function qa() {
  var e = wt;
  wt = [], us(e);
}
function qt(e) {
  if (wt.length === 0 && !br) {
    var t = wt;
    queueMicrotask(() => {
      t === wt && qa();
    });
  }
  wt.push(e);
}
function Ps() {
  for (; wt.length > 0; )
    qa();
}
function Va(e) {
  var t = P;
  if (t === null)
    return A.f |= ht, e;
  if ((t.f & Lt) === 0 && (t.f & Kt) === 0)
    throw e;
  vt(e, t);
}
function vt(e, t) {
  for (; t !== null; ) {
    if ((t.f & Pn) !== 0) {
      if ((t.f & Lt) === 0)
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
function $(e, t) {
  e.f = e.f & Ds | t;
}
function $n(e) {
  (e.f & Ce) !== 0 || e.deps === null ? $(e, W) : $(e, Ke);
}
function Ua(e) {
  if (e !== null)
    for (const t of e)
      (t.f & re) === 0 || (t.f & Dt) === 0 || (t.f ^= Dt, Ua(
        /** @type {Derived} */
        t.deps
      ));
}
function $a(e, t, r) {
  (e.f & te) !== 0 ? t.add(e) : (e.f & Ke) !== 0 && r.add(e), Ua(e.deps), $(e, W);
}
const xt = /* @__PURE__ */ new Set();
let k = null, Oe = null, Fn = null, br = !1, An = !1, Ht = null, Kr = null;
var ma = 0;
let Fs = 1;
var Vt, Ut, Ct, tt, $e, Er, ve, Cr, dt, rt, Ye, $t, Yt, St, G, Jr, Ya, Zr, jn, Xr, js;
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
    E(this, Vt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, Ut, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, Ct, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    E(this, tt, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    E(this, $e, /* @__PURE__ */ new Map());
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
    E(this, rt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    E(this, Ye, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    E(this, $t, /* @__PURE__ */ new Set());
    Fe(this, "is_fork", !1);
    E(this, Yt, !1);
    /** @type {Set<Batch>} */
    E(this, St, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    s(this, Ye).has(t) || s(this, Ye).set(t, { d: [], m: [] }), s(this, $t).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = s(this, Ye).get(t);
    if (n) {
      s(this, Ye).delete(t);
      for (var a of n.d)
        $(a, te), r(a);
      for (a of n.m)
        $(a, Ke), r(a);
    }
    s(this, $t).add(t);
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
      An = !0, k = this, H(this, G, Zr).call(this);
    } finally {
      ma = 0, Fn = null, Ht = null, Kr = null, An = !1, k = null, Oe = null, Nt.clear();
    }
  }
  discard() {
    for (const t of s(this, Ut)) t(this);
    s(this, Ut).clear(), s(this, Ct).clear(), xt.delete(this);
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
    let n = s(this, tt).get(r) ?? 0;
    if (s(this, tt).set(r, n + 1), t) {
      let a = s(this, $e).get(r) ?? 0;
      s(this, $e).set(r, a + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let a = s(this, tt).get(r) ?? 0;
    if (a === 1 ? s(this, tt).delete(r) : s(this, tt).set(r, a - 1), t) {
      let i = s(this, $e).get(r) ?? 0;
      i === 1 ? s(this, $e).delete(r) : s(this, $e).set(r, i - 1);
    }
    s(this, Yt) || n || (T(this, Yt, !0), qt(() => {
      T(this, Yt, !1), this.flush();
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
      s(this, rt).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    s(this, Vt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    s(this, Ut).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    s(this, Ct).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of s(this, Ct)) t(this);
    s(this, Ct).clear();
  }
  settled() {
    return (s(this, Er) ?? T(this, Er, Fa())).promise;
  }
  static ensure() {
    if (k === null) {
      const t = k = new an();
      An || (xt.add(k), br || qt(() => {
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
    if (Fn = t, t.b?.is_pending && (t.f & (Kt | fn | ja)) !== 0 && (t.f & Lt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Ht !== null && r === P && (A === null || (A.f & re) === 0))
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
Vt = new WeakMap(), Ut = new WeakMap(), Ct = new WeakMap(), tt = new WeakMap(), $e = new WeakMap(), Er = new WeakMap(), ve = new WeakMap(), Cr = new WeakMap(), dt = new WeakMap(), rt = new WeakMap(), Ye = new WeakMap(), $t = new WeakMap(), Yt = new WeakMap(), St = new WeakMap(), G = new WeakSet(), Jr = function() {
  return this.is_fork || s(this, $e).size > 0;
}, Ya = function() {
  for (const n of s(this, St))
    for (const a of s(n, $e).keys()) {
      for (var t = !1, r = a; r.parent !== null; ) {
        if (s(this, Ye).has(r)) {
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
  if (ma++ > 1e3 && (xt.delete(this), Os()), !H(this, G, Jr).call(this)) {
    for (const o of s(this, dt))
      s(this, rt).delete(o), $(o, te), this.schedule(o);
    for (const o of s(this, rt))
      $(o, Ke), this.schedule(o);
  }
  const t = s(this, ve);
  T(this, ve, []), this.apply();
  var r = Ht = [], n = [], a = Kr = [];
  for (const o of t)
    try {
      H(this, G, jn).call(this, o, r, n);
    } catch (u) {
      throw Ka(o), u;
    }
  if (k = null, a.length > 0) {
    var i = an.ensure();
    for (const o of a)
      i.schedule(o);
  }
  if (Ht = null, Kr = null, H(this, G, Jr).call(this) || H(this, G, Ya).call(this)) {
    H(this, G, Xr).call(this, n), H(this, G, Xr).call(this, r);
    for (const [o, u] of s(this, Ye))
      Wa(o, u);
  } else {
    s(this, tt).size === 0 && xt.delete(this), s(this, dt).clear(), s(this, rt).clear();
    for (const o of s(this, Vt)) o(this);
    s(this, Vt).clear(), wa(n), wa(r), s(this, Er)?.resolve();
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
  f !== null && (xt.add(f), H(l = f, G, Zr).call(l));
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
    var i = a.f, f = (i & (Be | pt)) !== 0, l = f && (i & W) !== 0, o = l || (i & se) !== 0 || s(this, Ye).has(a);
    if (!o && a.fn !== null) {
      f ? a.f ^= W : (i & Kt) !== 0 ? r.push(a) : Rr(a) && ((i & We) !== 0 && s(this, rt).add(a), Qt(a));
      var u = a.first;
      if (u !== null) {
        a = u;
        continue;
      }
    }
    for (; a !== null; ) {
      var h = a.next;
      if (h !== null) {
        a = h;
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
    $a(t[r], s(this, dt), s(this, rt));
}, js = function() {
  var h, b, g;
  for (const _ of xt) {
    var t = _.id < this.id, r = [];
    for (const [c, [S, w]] of this.current) {
      if (_.current.has(c)) {
        var n = (
          /** @type {[any, boolean]} */
          _.current.get(c)[0]
        );
        if (t && S !== n)
          _.current.set(c, [S, w]);
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
        for (const c of s(this, $t))
          _.unskip_effect(c, (S) => {
            var w;
            (S.f & (We | mr)) !== 0 ? _.schedule(S) : H(w = _, G, Xr).call(w, [S]);
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
        (c.f & (Se | se | Dn)) === 0 && Yn(c, o, f) && ((c.f & (mr | We)) !== 0 ? ($(c, te), _.schedule(c)) : s(_, dt).add(c));
      if (s(_, ve).length > 0) {
        _.apply();
        for (var u of s(_, ve))
          H(h = _, G, jn).call(h, u, [], []);
        T(_, ve, []);
      }
      _.deactivate();
    }
  }
  for (const _ of xt)
    s(_, St).has(this) && (s(_, St).delete(this), s(_, St).size === 0 && !H(b = _, G, Jr).call(b) && (_.activate(), H(g = _, G, Zr).call(g)));
};
let Ft = an;
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
let Qe = null;
function wa(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Se | se)) === 0 && Rr(n) && (Qe = /* @__PURE__ */ new Set(), Qt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && ci(n), Qe?.size > 0)) {
        Nt.clear();
        for (const a of Qe) {
          if ((a.f & (Se | se)) !== 0) continue;
          const i = [a];
          let f = a.parent;
          for (; f !== null; )
            Qe.has(f) && (Qe.delete(f), i.push(f)), f = f.parent;
          for (let l = i.length - 1; l >= 0; l--) {
            const o = i[l];
            (o.f & (Se | se)) === 0 && Qt(o);
          }
        }
        Qe.clear();
      }
    }
    Qe = null;
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
      ) : (i & (mr | We)) !== 0 && (i & te) === 0 && Yn(a, t, n) && ($(a, te), Gn(
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
      if (Wt.call(t, a))
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
    (e.f & te) !== 0 ? t.d.push(e) : (e.f & Ke) !== 0 && t.m.push(e), $(e, W);
    for (var r = e.first; r !== null; )
      Wa(r, t), r = r.next;
  }
}
function Ka(e) {
  $(e, W);
  for (var t = e.first; t !== null; )
    Ka(t), t = t.next;
}
function zs(e) {
  let t = 0, r = jt(0), n;
  return () => {
    Zn() && (d(r), ui(() => (t === 0 && (n = wi(() => e(() => yr(r)))), t += 1, () => {
      qt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, yr(r));
      });
    })));
  };
}
var Bs = Jt | er;
function Is(e, t, r, n) {
  new Hs(e, t, r, n);
}
var me, Vn, we, Mt, fe, ke, ie, he, nt, Tt, ct, Gt, Sr, Mr, at, sn, U, qs, Vs, Us, Ln, Qr, en, On, zn;
class Hs {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, a) {
    E(this, U);
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
    E(this, Mt);
    /** @type {Effect} */
    E(this, fe);
    /** @type {Effect | null} */
    E(this, ke, null);
    /** @type {Effect | null} */
    E(this, ie, null);
    /** @type {Effect | null} */
    E(this, he, null);
    /** @type {DocumentFragment | null} */
    E(this, nt, null);
    E(this, Tt, 0);
    E(this, ct, 0);
    E(this, Gt, !1);
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
    E(this, at, null);
    E(this, sn, zs(() => (T(this, at, jt(s(this, Tt))), () => {
      T(this, at, null);
    })));
    T(this, me, t), T(this, we, r), T(this, Mt, (i) => {
      var f = (
        /** @type {Effect} */
        P
      );
      f.b = this, f.f |= Pn, n(i);
    }), this.parent = /** @type {Effect} */
    P.b, this.transform_error = a ?? this.parent?.transform_error ?? ((i) => i), T(this, fe, Xn(() => {
      H(this, U, Ln).call(this);
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
    H(this, U, On).call(this, t, r), T(this, Tt, s(this, Tt) + t), !(!s(this, at) || s(this, Gt)) && (T(this, Gt, !0), qt(() => {
      T(this, Gt, !1), s(this, at) && Xt(s(this, at), s(this, Tt));
    }));
  }
  get_effect_pending() {
    return s(this, sn).call(this), d(
      /** @type {Source<number>} */
      s(this, at)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!s(this, we).onerror && !s(this, we).failed)
      throw t;
    k?.is_fork ? (s(this, ke) && k.skip_effect(s(this, ke)), s(this, ie) && k.skip_effect(s(this, ie)), s(this, he) && k.skip_effect(s(this, he)), k.on_fork_commit(() => {
      H(this, U, zn).call(this, t);
    })) : H(this, U, zn).call(this, t);
  }
}
me = new WeakMap(), Vn = new WeakMap(), we = new WeakMap(), Mt = new WeakMap(), fe = new WeakMap(), ke = new WeakMap(), ie = new WeakMap(), he = new WeakMap(), nt = new WeakMap(), Tt = new WeakMap(), ct = new WeakMap(), Gt = new WeakMap(), Sr = new WeakMap(), Mr = new WeakMap(), at = new WeakMap(), sn = new WeakMap(), U = new WeakSet(), qs = function() {
  try {
    T(this, ke, Ee(() => s(this, Mt).call(this, s(this, me))));
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
  t && (this.is_pending = !0, T(this, ie, Ee(() => t(s(this, me)))), qt(() => {
    var r = T(this, nt, document.createDocumentFragment()), n = _t();
    r.append(n), T(this, ke, H(this, U, en).call(this, () => Ee(() => s(this, Mt).call(this, n)))), s(this, ct) === 0 && (s(this, me).before(r), T(this, nt, null), Rt(
      /** @type {Effect} */
      s(this, ie),
      () => {
        T(this, ie, null);
      }
    ), H(this, U, Qr).call(
      this,
      /** @type {Batch} */
      k
    ));
  }));
}, Ln = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), T(this, ct, 0), T(this, Tt, 0), T(this, ke, Ee(() => {
      s(this, Mt).call(this, s(this, me));
    })), s(this, ct) > 0) {
      var t = T(this, nt, document.createDocumentFragment());
      ta(s(this, ke), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        s(this, we).pending
      );
      T(this, ie, Ee(() => r(s(this, me))));
    } else
      H(this, U, Qr).call(
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
  Je(s(this, fe)), Ae(s(this, fe)), Zt(s(this, fe).ctx);
  try {
    return Ft.ensure(), t();
  } catch (i) {
    return Va(i), null;
  } finally {
    Je(r), Ae(n), Zt(a);
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
    this.parent && H(n = this.parent, U, On).call(n, t, r);
    return;
  }
  T(this, ct, s(this, ct) + t), s(this, ct) === 0 && (H(this, U, Qr).call(this, r), s(this, ie) && Rt(s(this, ie), () => {
    T(this, ie, null);
  }), s(this, nt) && (s(this, me).before(s(this, nt)), T(this, nt, null)));
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
    a = !0, i && ws(), s(this, he) !== null && Rt(s(this, he), () => {
      T(this, he, null);
    }), H(this, U, en).call(this, () => {
      H(this, U, Ln).call(this);
    });
  }, l = (o) => {
    try {
      i = !0, r?.(o, f), i = !1;
    } catch (u) {
      vt(u, s(this, fe) && s(this, fe).parent);
    }
    n && T(this, he, H(this, U, en).call(this, () => {
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
  qt(() => {
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
  var h = Ja();
  function b() {
    Promise.all(r.map((g) => /* @__PURE__ */ Gs(g))).then((g) => u([...t.map(a), ...g])).catch((g) => vt(g, f)).finally(() => h());
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
    Je(e), Ae(t), Zt(r), i && (e.f & Se) === 0 && (n?.activate(), n?.apply());
  };
}
function nn(e = !0) {
  Je(null), Ae(null), Zt(null), e && k?.deactivate();
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
  return P !== null && (P.f |= er), {
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
  ), i = jt(
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
    var h = (
      /** @type {Batch} */
      k
    );
    if (f) {
      if ((o.f & Lt) !== 0)
        var b = Ja();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        l.get(h)?.reject(et), l.delete(h);
      else {
        for (const _ of l.values())
          _.reject(et);
        l.clear();
      }
      l.set(h, u);
    }
    const g = (_, c = void 0) => {
      if (b) {
        var S = c === et;
        b(S);
      }
      if (!(c === et || (o.f & Se) !== 0)) {
        if (h.activate(), c)
          i.f |= ht, Xt(i, c);
        else {
          (i.f & ht) !== 0 && (i.f ^= ht), Xt(i, _);
          for (const [w, M] of l) {
            if (l.delete(w), w === h) break;
            M.reject(et);
          }
        }
        h.deactivate();
      }
    };
    u.promise.then(g, (_) => g(null, _ || "unknown"));
  }), li(() => {
    for (const o of l.values())
      o.reject(et);
  }), new Promise((o) => {
    function u(h) {
      function b() {
        h === a ? o(i) : u(a);
      }
      h.then(b, b);
    }
    u(a);
  });
}
// @__NO_SIDE_EFFECTS__
function mt(e) {
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
  Je(n);
  try {
    e.f &= ~Dt, Ks(e), t = yi(e);
  } finally {
    Je(r);
  }
  return t;
}
function Za(e) {
  var t = Kn(e);
  if (!e.equals(t) && (e.wv = gi(), (!k?.is_fork || e.deps === null) && (k !== null ? k.capture(e, t, !0) : e.v = t, e.deps === null))) {
    $(e, W);
    return;
  }
  gt || (Oe !== null ? (Zn() || k?.is_fork) && Oe.set(e, t) : $n(e));
}
function Js(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(et), t.teardown = fs, t.ac = null, wr(t, 0), Qn(t));
}
function Xa(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Qt(t);
}
let Bn = /* @__PURE__ */ new Set();
const Nt = /* @__PURE__ */ new Map();
let Qa = !1;
function jt(e, t) {
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
function V(e, t) {
  const r = jt(e);
  return _i(r), r;
}
// @__NO_SIDE_EFFECTS__
function Zs(e, t = !1, r = !0) {
  const n = jt(e);
  return t || (n.equals = za), n;
}
function D(e, t, r = !1) {
  A !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ze || (A.f & Dn) !== 0) && Ha() && (A.f & (re | We | mr | Dn)) !== 0 && (Me === null || !Wt.call(Me, e)) && ms();
  let n = r ? Le(t) : t;
  return Xt(e, n, Kr);
}
function Xt(e, t, r = null) {
  if (!e.equals(t)) {
    Nt.set(e, gt ? t : e.v);
    var n = Ft.ensure();
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
    (e.f & W) !== 0 && $(e, Ke), Rr(e) && Qt(e);
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
      if (o && $(f, t), (l & re) !== 0) {
        var u = (
          /** @type {Derived} */
          f
        );
        Oe?.delete(u), (l & Dt) === 0 && (l & Ce && (P === null || (P.f & rn) === 0) && (f.f |= Dt), ei(u, Ke, r));
      } else if (o) {
        var h = (
          /** @type {Effect} */
          f
        );
        (l & We) !== 0 && Qe !== null && Qe.add(h), r !== null ? r.push(h) : Gn(h);
      }
    }
}
function Le(e) {
  if (typeof e != "object" || e === null || gr in e)
    return e;
  const t = os(e);
  if (t !== ss && t !== ls)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Un(e), a = /* @__PURE__ */ V(0), i = Pt, f = (l) => {
    if (Pt === i)
      return l();
    var o = A, u = Pt;
    Ae(null), Ma(i);
    var h = l();
    return Ae(o), Ma(u), h;
  };
  return n && r.set("length", /* @__PURE__ */ V(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, o, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && ys();
        var h = r.get(o);
        return h === void 0 ? f(() => {
          var b = /* @__PURE__ */ V(u.value);
          return r.set(o, b), b;
        }) : D(h, u.value, !0), !0;
      },
      deleteProperty(l, o) {
        var u = r.get(o);
        if (u === void 0) {
          if (o in l) {
            const h = f(() => /* @__PURE__ */ V(Z));
            r.set(o, h), yr(a);
          }
        } else
          D(u, Z), yr(a);
        return !0;
      },
      get(l, o, u) {
        if (o === gr)
          return e;
        var h = r.get(o), b = o in l;
        if (h === void 0 && (!b || pr(l, o)?.writable) && (h = f(() => {
          var _ = Le(b ? l[o] : Z), c = /* @__PURE__ */ V(_);
          return c;
        }), r.set(o, h)), h !== void 0) {
          var g = d(h);
          return g === Z ? void 0 : g;
        }
        return Reflect.get(l, o, u);
      },
      getOwnPropertyDescriptor(l, o) {
        var u = Reflect.getOwnPropertyDescriptor(l, o);
        if (u && "value" in u) {
          var h = r.get(o);
          h && (u.value = d(h));
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
        var u = r.get(o), h = u !== void 0 && u.v !== Z || Reflect.has(l, o);
        if (u !== void 0 || P !== null && (!h || pr(l, o)?.writable)) {
          u === void 0 && (u = f(() => {
            var g = h ? Le(l[o]) : Z, _ = /* @__PURE__ */ V(g);
            return _;
          }), r.set(o, u));
          var b = d(u);
          if (b === Z)
            return !1;
        }
        return h;
      },
      set(l, o, u, h) {
        var b = r.get(o), g = o in l;
        if (n && o === "length")
          for (var _ = u; _ < /** @type {Source<number>} */
          b.v; _ += 1) {
            var c = r.get(_ + "");
            c !== void 0 ? D(c, Z) : _ in l && (c = f(() => /* @__PURE__ */ V(Z)), r.set(_ + "", c));
          }
        if (b === void 0)
          (!g || pr(l, o)?.writable) && (b = f(() => /* @__PURE__ */ V(void 0)), D(b, Le(u)), r.set(o, b));
        else {
          g = b.v !== Z;
          var S = f(() => Le(u));
          D(b, S);
        }
        var w = Reflect.getOwnPropertyDescriptor(l, o);
        if (w?.set && w.set.call(h, u), !g) {
          if (n && typeof o == "string") {
            var M = (
              /** @type {Source<number>} */
              r.get("length")
            ), m = Number(o);
            Number.isInteger(m) && m >= M.v && D(M, m + 1);
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
        for (var [u, h] of r)
          h.v !== Z && !(u in l) && o.push(u);
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
function it(e) {
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
  return /* @__PURE__ */ it(e);
}
function ft(e, t = !1) {
  {
    var r = /* @__PURE__ */ it(e);
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
  Ae(null), Je(null);
  try {
    return e();
  } finally {
    Ae(t), Je(r);
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
function lt(e, t) {
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
  if ((e & Kt) !== 0)
    Ht !== null ? Ht.push(n) : Ft.ensure().schedule(n);
  else if (t !== null) {
    try {
      Qt(n);
    } catch (f) {
      throw de(n), f;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    (a.f & er) === 0 && (a = a.first, (e & We) !== 0 && (e & Jt) !== 0 && a !== null && (a.f |= Jt));
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
  const t = lt(fn, null);
  return $(t, W), t.teardown = e, t;
}
function sl(e) {
  al();
  var t = (
    /** @type {Effect} */
    P.f
  ), r = !A && (t & Be) !== 0 && (t & Lt) === 0;
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
  return lt(Kt | cs, e);
}
function ll(e) {
  Ft.ensure();
  const t = lt(pt | er, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? Rt(t, () => {
      de(t), n(void 0);
    }) : (de(t), n(void 0));
  });
}
function fi(e) {
  return lt(Kt, e);
}
function ol(e) {
  return lt(mr | er, e);
}
function ui(e, t = 0) {
  return lt(fn | t, e);
}
function ae(e, t = [], r = [], n = []) {
  $s(n, t, r, (a) => {
    lt(fn, () => e(...a.map(d)));
  });
}
function Xn(e, t = 0) {
  var r = lt(We | t, e);
  return r;
}
function Ee(e) {
  return lt(Be | er, e);
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
      a.abort(et);
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
  ), r = !0), $(e, xa), Qn(e, t && !r), wr(e, 0);
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
function Rt(e, t, r = !0) {
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
        var f = (a.f & Jt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (a.f & Be) !== 0 && (e.f & We) !== 0;
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
    e.f ^= se, (e.f & W) === 0 && ($(e, te), Ft.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, a = (r.f & Jt) !== 0 || (r.f & Be) !== 0;
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
function Je(e) {
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
let pi = 1, kt = 0, Pt = kt;
function Ma(e) {
  Pt = e;
}
function gi() {
  return ++pi;
}
function Rr(e) {
  var t = e.f;
  if ((t & te) !== 0)
    return !0;
  if (t & re && (e.f &= ~Dt), (t & Ke) !== 0) {
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
    Oe === null && $(e, W);
  }
  return !1;
}
function bi(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Me !== null && Wt.call(Me, e)))
    for (var a = 0; a < n.length; a++) {
      var i = n[a];
      (i.f & re) !== 0 ? bi(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? $(i, te) : (i.f & W) !== 0 && $(i, Ke), Gn(
        /** @type {Effect} */
        i
      ));
    }
}
function yi(e) {
  var S;
  var t = ue, r = ce, n = xe, a = A, i = Me, f = Te, l = ze, o = Pt, u = e.f;
  ue = /** @type {null | Value[]} */
  null, ce = 0, xe = null, A = (u & (Be | pt)) === 0 ? e : null, Me = null, Zt(e.ctx), ze = !1, Pt = ++kt, e.ac !== null && (Jn(() => {
    e.ac.abort(et);
  }), e.ac = null);
  try {
    e.f |= rn;
    var h = (
      /** @type {Function} */
      e.fn
    ), b = h();
    e.f |= Lt;
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
    if (Ha() && xe !== null && !ze && g !== null && (e.f & (re | Ke | te)) === 0)
      for (c = 0; c < /** @type {Source[]} */
      xe.length; c++)
        bi(
          xe[c],
          /** @type {Effect} */
          e
        );
    if (a !== null && a !== e) {
      if (kt++, a.deps !== null)
        for (let w = 0; w < r; w += 1)
          a.deps[w].rv = kt;
      if (t !== null)
        for (const w of t)
          w.rv = kt;
      xe !== null && (n === null ? n = xe : n.push(.../** @type {Source[]} */
      xe));
    }
    return (e.f & ht) !== 0 && (e.f ^= ht), b;
  } catch (w) {
    return Va(w);
  } finally {
    e.f ^= rn, ue = t, ce = r, xe = n, A = a, Me = i, Zt(f), ze = l, Pt = o;
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
  (ue === null || !Wt.call(ue, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & Ce) !== 0 && (i.f ^= Ce, i.f &= ~Dt), i.v !== Z && $n(i), Js(i), wr(i, 0);
  }
}
function wr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      cl(e, r[n]);
}
function Qt(e) {
  var t = e.f;
  if ((t & Se) === 0) {
    $(e, W);
    var r = P, n = tn;
    P = e, tn = !0;
    try {
      (t & (We | ja)) !== 0 ? fl(e) : Qn(e), di(e);
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
    if (!n && (Me === null || !Wt.call(Me, e))) {
      var a = A.deps;
      if ((A.f & rn) !== 0)
        e.rv < kt && (e.rv = kt, ue === null && a !== null && a[ce] === e ? ce++ : ue === null ? ue = [e] : ue.push(e));
      else {
        (A.deps ?? (A.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [A] : Wt.call(i, A) || i.push(A);
      }
    }
  }
  if (gt && Nt.has(e))
    return Nt.get(e);
  if (r) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (gt) {
      var l = f.v;
      return ((f.f & W) === 0 && f.reactions !== null || mi(f)) && (l = Kn(f)), Nt.set(f, l), l;
    }
    var o = (f.f & Ce) === 0 && !ze && A !== null && (tn || (A.f & Ce) !== 0), u = (f.f & Lt) === 0;
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
    if (Nt.has(t) || (t.f & re) !== 0 && mi(
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
const Et = Symbol("events"), ki = /* @__PURE__ */ new Set(), In = /* @__PURE__ */ new Set();
function ye(e, t, r) {
  (t[Et] ?? (t[Et] = {}))[e] = r;
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
  var f = 0, l = Ta === e && e[Et];
  if (l) {
    var o = a.indexOf(l);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Et] = t;
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
    var h = A, b = P;
    Ae(null), Je(null);
    try {
      for (var g, _ = []; i !== null; ) {
        var c = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var S = i[Et]?.[n];
          S != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && S.call(i, e);
        } catch (w) {
          g ? _.push(w) : g = w;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        i = c;
      }
      if (g) {
        for (let w of _)
          queueMicrotask(() => {
            throw w;
          });
        throw g;
      }
    } finally {
      e[Et] = t, delete e.currentTarget, Ae(h), Je(b);
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
function L(e, t) {
  var r = (t & La) !== 0, n = (t & Ss) !== 0, a, i = !e.startsWith("<!>");
  return () => {
    a === void 0 && (a = Ei(i ? e : "<!>" + e), r || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ it(a)));
    var f = (
      /** @type {TemplateNode} */
      n || ti ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ it(f)
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
        /* @__PURE__ */ it(l)
      );
      if (a)
        for (f = document.createDocumentFragment(); /* @__PURE__ */ it(o); )
          f.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ it(o)
          );
      else
        f = /** @type {Element} */
        /* @__PURE__ */ it(o);
    }
    var u = (
      /** @type {TemplateNode} */
      f.cloneNode(!0)
    );
    if (a) {
      var h = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ it(u)
      ), b = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      kr(h, b);
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
    var h = r ?? t.appendChild(_t());
    Is(
      /** @type {TemplateNode} */
      h,
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
          var w = _l(S);
          for (const Q of [t, document]) {
            var M = Gr.get(Q);
            M === void 0 && (M = /* @__PURE__ */ new Map(), Gr.set(Q, M));
            var m = M.get(S);
            m === void 0 ? (Q.addEventListener(S, Aa, { passive: w }), M.set(S, 1)) : M.set(S, m + 1);
          }
        }
      }
    };
    return g(on(ki)), In.add(g), () => {
      for (var _ of b)
        for (const w of [t, document]) {
          var c = (
            /** @type {Map<string, number>} */
            Gr.get(w)
          ), S = (
            /** @type {number} */
            c.get(_)
          );
          --S == 0 ? (w.removeEventListener(_, Aa), c.delete(_), c.size === 0 && Gr.delete(w)) : c.set(_, S);
        }
      In.delete(g), h !== r && h.parentNode?.removeChild(h);
    };
  });
  return Hn.set(o, u), o;
}
let Hn = /* @__PURE__ */ new WeakMap();
function kl(e, t) {
  const r = Hn.get(e);
  return r ? (Hn.delete(e), r(t)) : Promise.resolve();
}
var je, Ge, _e, At, Tr, Ar, ln;
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
    E(this, Ge, /* @__PURE__ */ new Map());
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
    E(this, At, /* @__PURE__ */ new Set());
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
        ), n = s(this, Ge).get(r);
        if (n)
          ea(n), s(this, At).delete(r);
        else {
          var a = s(this, _e).get(r);
          a && (s(this, Ge).set(r, a.effect), s(this, _e).delete(r), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), n = a.effect);
        }
        for (const [i, f] of s(this, je)) {
          if (s(this, je).delete(i), i === t)
            break;
          const l = s(this, _e).get(f);
          l && (de(l.effect), s(this, _e).delete(f));
        }
        for (const [i, f] of s(this, Ge)) {
          if (i === r || s(this, At).has(i)) continue;
          const l = () => {
            if (Array.from(s(this, je).values()).includes(i)) {
              var u = document.createDocumentFragment();
              ta(f, u), u.append(_t()), s(this, _e).set(i, { effect: f, fragment: u });
            } else
              de(f);
            s(this, At).delete(i), s(this, Ge).delete(i);
          };
          s(this, Tr) || !n ? (s(this, At).add(i), Rt(f, l, !1)) : l();
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
    if (r && !s(this, Ge).has(t) && !s(this, _e).has(t))
      if (a) {
        var i = document.createDocumentFragment(), f = _t();
        i.append(f), s(this, _e).set(t, {
          effect: Ee(() => r(f)),
          fragment: i
        });
      } else
        s(this, Ge).set(
          t,
          Ee(() => r(this.anchor))
        );
    if (s(this, je).set(n, t), a) {
      for (const [l, o] of s(this, Ge))
        l === t ? n.unskip_effect(o) : n.skip_effect(o);
      for (const [l, o] of s(this, _e))
        l === t ? n.unskip_effect(o.effect) : n.skip_effect(o.effect);
      n.oncommit(s(this, Ar)), n.ondiscard(s(this, ln));
    } else
      s(this, Ar).call(this, n);
  }
}
je = new WeakMap(), Ge = new WeakMap(), _e = new WeakMap(), At = new WeakMap(), Tr = new WeakMap(), Ar = new WeakMap(), ln = new WeakMap();
function q(e, t, r = !1) {
  var n = new El(e), a = r ? Jt : 0;
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
    Rt(
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
      ), h = (
        /** @type {Element} */
        u.parentNode
      );
      rl(h), h.append(u), e.items.clear();
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
      i.f |= st;
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
  var u = null, h = /* @__PURE__ */ Ws(() => {
    var m = r();
    return Un(m) ? m : m == null ? [] : on(m);
  }), b, g = /* @__PURE__ */ new Map(), _ = !0;
  function c(m) {
    (M.effect.f & Se) === 0 && (M.pending.delete(m), M.fallback = u, Sl(M, b, f, t, n), u !== null && (b.length === 0 ? (u.f & st) === 0 ? ea(u) : (u.f ^= st, _r(u, null, f)) : Rt(u, () => {
      u = null;
    })));
  }
  function S(m) {
    M.pending.delete(m);
  }
  var w = Xn(() => {
    b = /** @type {V[]} */
    d(h);
    for (var m = b.length, Q = /* @__PURE__ */ new Set(), le = (
      /** @type {Batch} */
      k
    ), oe = ai(), Ne = 0; Ne < m; Ne += 1) {
      var pe = b[Ne], K = n(pe, Ne), J = _ ? null : l.get(K);
      J ? (J.v && Xt(J.v, pe), J.i && Xt(J.i, Ne), oe && le.unskip_effect(J.e)) : (J = Ml(
        l,
        _ ? f : Ra ?? (Ra = _t()),
        pe,
        K,
        Ne,
        a,
        t,
        r
      ), _ || (J.e.f |= st), l.set(K, J)), Q.add(K);
    }
    if (m === 0 && i && !u && (_ ? u = Ee(() => i(f)) : (u = Ee(() => i(Ra ?? (Ra = _t()))), u.f |= st)), m > Q.size && hs(), !_)
      if (g.set(le, Q), oe) {
        for (const [un, dn] of l)
          Q.has(un) || le.skip_effect(dn.e);
        le.oncommit(c), le.ondiscard(S);
      } else
        c(le);
    d(h);
  }), M = { effect: w, items: l, pending: g, outrogroups: null, fallback: u };
  _ = !1;
}
function hr(e) {
  for (; e !== null && (e.f & Be) === 0; )
    e = e.next;
  return e;
}
function Sl(e, t, r, n, a) {
  var i = t.length, f = e.items, l = hr(e.effect.first), o, u = null, h = [], b = [], g, _, c, S;
  for (S = 0; S < i; S += 1) {
    if (g = t[S], _ = a(g, S), c = /** @type {EachItem} */
    f.get(_).e, e.outrogroups !== null)
      for (const K of e.outrogroups)
        K.pending.delete(c), K.done.delete(c);
    if ((c.f & se) !== 0 && ea(c), (c.f & st) !== 0)
      if (c.f ^= st, c === l)
        _r(c, null, r);
      else {
        var w = u ? u.next : l;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), ut(e, u, c), ut(e, c, w), _r(c, w, r), u = c, h = [], b = [], l = hr(u.next);
        continue;
      }
    if (c !== l) {
      if (o !== void 0 && o.has(c)) {
        if (h.length < b.length) {
          var M = b[0], m;
          u = M.prev;
          var Q = h[0], le = h[h.length - 1];
          for (m = 0; m < h.length; m += 1)
            _r(h[m], M, r);
          for (m = 0; m < b.length; m += 1)
            o.delete(b[m]);
          ut(e, Q.prev, le.next), ut(e, u, Q), ut(e, le, M), l = M, u = le, S -= 1, h = [], b = [];
        } else
          o.delete(c), _r(c, l, r), ut(e, c.prev, c.next), ut(e, c, u === null ? e.effect.first : u.next), ut(e, u, c), u = c;
        continue;
      }
      for (h = [], b = []; l !== null && l !== c; )
        (o ?? (o = /* @__PURE__ */ new Set())).add(l), b.push(l), l = hr(l.next);
      if (l === null)
        continue;
    }
    (c.f & st) === 0 && h.push(c), u = c, l = hr(c.next);
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
  var o = (f & ks) !== 0 ? (f & Cs) === 0 ? /* @__PURE__ */ Zs(r, !1, !1) : jt(r) : null, u = (f & Es) !== 0 ? jt(a) : null;
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
    for (var n = e.nodes.start, a = e.nodes.end, i = t && (t.f & st) === 0 ? (
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
function It(e, t, r, n, a, i) {
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
var jl = /* @__PURE__ */ Ie('<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), Ll = /* @__PURE__ */ Ie('<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'), Ol = /* @__PURE__ */ Ie('<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'), zl = /* @__PURE__ */ L("<div><!> </div>"), Bl = /* @__PURE__ */ L('<div class="fixed top-4 right-4 z-50 flex flex-col gap-2" style="min-width:300px"></div>'), Il = /* @__PURE__ */ L('<div class="flex justify-center py-16"><svg class="animate-spin h-8 w-8 text-blue-600" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg></div>'), Hl = /* @__PURE__ */ L("<span> </span>"), ql = /* @__PURE__ */ L('<p class="text-sm text-gray-600 dark:text-gray-400"> </p>'), Vl = /* @__PURE__ */ L('<span class="px-1.5 py-0.5 rounded text-xs bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300">Paused</span>'), Ul = /* @__PURE__ */ L('<div class="flex items-center justify-between bg-gray-50 dark:bg-gray-700/50 rounded-lg px-4 py-2 text-sm"><div class="flex items-center gap-2"><span> </span> <!></div> <button class="text-xs text-blue-600 dark:text-blue-400 hover:underline"> </button></div>'), $l = /* @__PURE__ */ L('<div><h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Schedules</h3> <div class="space-y-2"></div></div>'), Yl = /* @__PURE__ */ Ie('<svg class="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg> Starting...', 1), Gl = /* @__PURE__ */ Ie('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path></svg> Run Now', 1), Wl = /* @__PURE__ */ Ie('<svg class="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), Kl = /* @__PURE__ */ Ie('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>'), Jl = /* @__PURE__ */ L('<div class="px-6 py-3 flex items-start gap-3 text-sm"><span class="text-xs text-gray-400 font-mono whitespace-nowrap mt-0.5"> </span> <span class="text-gray-700 dark:text-gray-300 break-words"> </span></div>'), Zl = /* @__PURE__ */ L('<div class="mt-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"><div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700"><h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300">Execution History</h3></div> <div class="max-h-96 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-700"></div></div>'), Xl = /* @__PURE__ */ L('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"><div class="p-6 border-b border-gray-100 dark:border-gray-700"><div class="flex items-start justify-between gap-4"><div><h2 class="text-xl font-bold text-gray-900 dark:text-white"> </h2> <p class="text-xs text-gray-400 mt-1 font-mono"> </p></div> <!></div></div> <div class="p-6 space-y-4"><!> <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm"><div><span class="block text-gray-500 dark:text-gray-400">Created</span> <span class="font-medium text-gray-900 dark:text-white"> </span></div> <div><span class="block text-gray-500 dark:text-gray-400">Updated</span> <span class="font-medium text-gray-900 dark:text-white"> </span></div> <div><span class="block text-gray-500 dark:text-gray-400">Executions</span> <span class="font-medium text-gray-900 dark:text-white"> </span></div> <div><span class="block text-gray-500 dark:text-gray-400">Progress</span> <span class="font-medium text-gray-900 dark:text-white"> </span></div></div> <!></div> <div class="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700 flex gap-3"><button class="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg flex items-center gap-2"><!></button> <button class="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg flex items-center gap-2"><!> Delete</button></div></div> <!>', 1), Ql = /* @__PURE__ */ L('<div class="mb-4"><button class="inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:underline"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Back to tasks</button></div> <!>', 1), eo = /* @__PURE__ */ L('<div class="mb-4 p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg flex items-center gap-2 text-sm"><svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg> </div>'), to = /* @__PURE__ */ L('<div class="flex justify-center items-center py-16"><svg class="animate-spin h-10 w-10 text-blue-600" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg></div>'), ro = /* @__PURE__ */ L('<span class="relative flex h-3 w-3"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span></span>'), no = /* @__PURE__ */ L('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-12 text-center"><svg class="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg> <p class="text-gray-500 dark:text-gray-400"> </p></div>'), ao = /* @__PURE__ */ L('<span class="relative flex h-2.5 w-2.5"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span></span>'), io = /* @__PURE__ */ L('<p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 svelte-11d5b98"> </p>'), so = /* @__PURE__ */ L('<span class="px-1.5 py-0.5 rounded text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">Paused</span>'), lo = /* @__PURE__ */ L('<div class="flex items-center gap-1.5 text-gray-500 dark:text-gray-500"><span> </span></div>'), oo = /* @__PURE__ */ L('<div class="flex items-center gap-1.5 text-gray-600 dark:text-gray-400"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span> </span> <!></div> <!>', 1), fo = /* @__PURE__ */ L('<div class="flex items-center gap-1.5 text-gray-500 dark:text-gray-500"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>One-time task</span></div>'), uo = /* @__PURE__ */ Ie('<svg class="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), co = /* @__PURE__ */ Ie('<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path></svg>'), vo = /* @__PURE__ */ L("<button> </button>"), ho = /* @__PURE__ */ Ie('<svg class="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), _o = /* @__PURE__ */ Ie('<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>'), po = /* @__PURE__ */ L('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200 flex flex-col"><div class="p-4 border-b border-gray-100 dark:border-gray-700"><div class="flex justify-between items-start gap-2"><div class="flex-1 min-w-0"><h3 class="font-semibold text-gray-900 dark:text-white truncate"> </h3> <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5"> </p></div> <div class="flex items-center gap-2"><!> <span> </span></div></div></div> <div class="p-4 space-y-3 flex-1"><!> <div class="flex flex-wrap gap-3 text-sm"><!> <button class="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> </button></div></div> <div class="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700 rounded-b-xl flex gap-2"><button class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg> View</button> <button class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 rounded-lg transition-colors"><!> Run</button> <!> <button class="px-3 py-1.5 text-xs font-medium text-red-700 dark:text-red-400 border border-red-300 dark:border-red-700 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 disabled:opacity-50 transition-colors"><!></button></div></div>'), go = /* @__PURE__ */ L('<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"></div> <div class="flex items-center justify-between mt-6"><button class="text-sm px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">Previous</button> <span class="text-xs text-gray-500 dark:text-gray-400"> </span> <button class="text-sm px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">Next</button></div>', 1), bo = /* @__PURE__ */ L('<div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6"><div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"><div class="text-2xl font-bold text-gray-900 dark:text-white"> </div> <div class="text-sm text-gray-500 dark:text-gray-400">Total Tasks</div></div> <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"><div class="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2"> <!></div> <div class="text-sm text-gray-500 dark:text-gray-400">Running</div></div> <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"><div class="text-2xl font-bold text-yellow-600 dark:text-yellow-400"> </div> <div class="text-sm text-gray-500 dark:text-gray-400">Pending</div></div> <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"><div class="text-2xl font-bold text-green-600 dark:text-green-400"> </div> <div class="text-sm text-gray-500 dark:text-gray-400">Completed</div></div> <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"><div class="text-2xl font-bold text-red-600 dark:text-red-400"> </div> <div class="text-sm text-gray-500 dark:text-gray-400">Failed</div></div></div> <div class="flex flex-col sm:flex-row gap-3 mb-6"><div class="flex-1 relative"><svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> <input type="text" placeholder="Search tasks..." class="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"/></div> <select class="w-full sm:w-48 px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"><option>All Status</option><option>Running</option><option>Pending</option><option>Completed</option><option>Failed</option></select></div> <!>', 1), yo = /* @__PURE__ */ L('<div class="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"><h1 class="text-2xl font-bold text-gray-900 dark:text-white">Task Monitor</h1> <button class="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Refresh</button></div> <!> <!>', 1), xo = /* @__PURE__ */ L('<!> <div class="p-6 max-w-7xl mx-auto"><!></div>', 1);
const mo = {
  hash: "svelte-11d5b98",
  code: ".line-clamp-2.svelte-11d5b98 {display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}"
};
function wo(e, t) {
  Ba(t, !0), Tl(e, mo);
  let r = /* @__PURE__ */ V(Le([])), n = /* @__PURE__ */ V(!0), a = /* @__PURE__ */ V(""), i = /* @__PURE__ */ V(""), f = /* @__PURE__ */ V(""), l = /* @__PURE__ */ V(Le([])), o = /* @__PURE__ */ V(0), u = Le({}), h = Le({});
  const b = 10;
  let g = /* @__PURE__ */ V(1), _ = /* @__PURE__ */ V(0), c = /* @__PURE__ */ V(null), S = /* @__PURE__ */ V(!1), w = /* @__PURE__ */ V(Le([1])), M = /* @__PURE__ */ V(null), m = /* @__PURE__ */ V(null), Q = /* @__PURE__ */ V(Le([])), le = /* @__PURE__ */ V(!1), oe = /* @__PURE__ */ mt(() => ({
    total: d(r).length,
    running: d(r).filter((v) => v.status?.toLowerCase() === "running").length,
    pending: d(r).filter((v) => v.status?.toLowerCase() === "pending").length,
    completed: d(r).filter((v) => v.status?.toLowerCase() === "completed").length,
    failed: d(r).filter((v) => v.status?.toLowerCase() === "failed").length
  })), Ne = /* @__PURE__ */ mt(() => d(r).filter((v) => {
    const x = !d(i) || v.name.toLowerCase().includes(d(i).toLowerCase()) || Pr(v.metadata).toLowerCase().includes(d(i).toLowerCase()), O = !d(f) || v.status?.toLowerCase() === d(f).toLowerCase();
    return x && O;
  }));
  function pe(v, x = "info") {
    const O = Qs(o);
    D(l, [...d(l), { id: O, message: v, type: x }], !0), setTimeout(
      () => {
        D(l, d(l).filter((z) => z.id !== O), !0);
      },
      4e3
    );
  }
  async function K(v, x = {}) {
    return await t.ctx.callSync(v, x);
  }
  async function J() {
    try {
      const v = await K("get_all_tasks", { from_id: d(g), page_size: b });
      D(r, v?.tasks ?? v?.data?.tasks ?? (Array.isArray(v) ? v : []), !0), D(_, v?.max_id ?? 0, !0), D(c, v?.next_from_id ?? null, !0), D(S, v?.has_more ?? !1, !0), D(a, "");
    } catch (v) {
      D(a, "Error loading tasks: " + (v?.message || String(v)));
    } finally {
      D(n, !1);
    }
  }
  function un() {
    d(c) && (D(w, [...d(w), d(c)], !0), D(g, d(c), !0), J());
  }
  function dn() {
    d(w).length > 1 && (D(w, d(w).slice(0, -1), !0), D(g, d(w)[d(w).length - 1], !0), J());
  }
  async function cn(v) {
    D(M, v, !0), D(le, !0);
    try {
      const [x, O] = await Promise.all([
        K("get_task_details", { task_id: v }).catch(() => null),
        K("get_task_logs", { task_id: v }).catch(() => ({ data: [] }))
      ]), z = x?.task ?? x?.data?.task ?? x?.data ?? x;
      z && z.executions && (z.executions_count = z.executions.length, z.total_steps = z.steps?.length ?? 0), D(m, z, !0), D(Q, O?.data ?? (Array.isArray(O) ? O : []), !0);
    } catch (x) {
      D(a, x?.message || String(x), !0);
    } finally {
      D(le, !1);
    }
  }
  function ra() {
    D(M, null), D(m, null), D(Q, [], !0);
  }
  async function na(v, x) {
    try {
      const O = await K("toggle_schedule", { schedule_id: v, disabled: !x });
      pe(x ? "Schedule resumed" : "Schedule paused", "success"), await J();
    } catch (O) {
      pe(O?.message || "Error toggling schedule", "error");
    }
  }
  async function aa(v) {
    u[v] = !0;
    try {
      const x = await K("run_task_now", { task_id: v });
      pe(x?.message || "Task started", "success"), await J(), d(M) === v && await cn(v);
    } catch (x) {
      pe(x?.message || "Error running task", "error");
    } finally {
      delete u[v];
    }
  }
  async function ia(v) {
    h[v] = !0;
    try {
      const x = await K("delete_task", { task_id: v });
      pe(x?.message || "Task deleted", "success"), d(M) === v && ra(), await J();
    } catch (x) {
      pe(x?.message || "Error deleting task", "error");
    } finally {
      delete h[v];
    }
  }
  function sa(v) {
    const x = v?.toLowerCase();
    return x === "running" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" : x === "pending" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" : x === "completed" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" : x === "failed" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
  }
  function Pr(v) {
    if (!v) return "";
    try {
      const x = JSON.parse(v);
      return x.description || x.desc || "";
    } catch {
      return v.length > 80 ? v.substring(0, 80) + "..." : v;
    }
  }
  function Mi(v) {
    if (!v) return "-";
    const x = v > 1e15 ? v / 1e6 : v > 1e12 ? v : v * 1e3, O = Date.now() - x, z = Math.floor(O / 1e3), ge = Math.floor(z / 60), He = Math.floor(ge / 60), bt = Math.floor(He / 24);
    return z < 60 ? "Just now" : ge < 60 ? `${ge}m ago` : He < 24 ? `${He}h ago` : `${bt}d ago`;
  }
  function la(v) {
    if (!v) return "One-time";
    const x = Math.floor(v / 86400), O = Math.floor(v % 86400 / 3600), z = Math.floor(v % 3600 / 60);
    return x > 0 ? `Every ${x}d ${O}h` : O > 0 ? `Every ${O}h ${z}m` : z > 0 ? `Every ${z}m` : `Every ${v}s`;
  }
  function oa(v) {
    if (!v) return "-";
    const x = v > 1e15 ? v / 1e6 : v > 1e12 ? v : v * 1e3;
    return new Date(x).toLocaleString();
  }
  sl(() => {
    J();
    const v = setInterval(J, 1e4);
    return () => clearInterval(v);
  });
  var fa = xo(), ua = ft(fa);
  {
    var Ti = (v) => {
      var x = Bl();
      Wr(x, 21, () => d(l), (O) => O.id, (O, z) => {
        var ge = zl(), He = p(ge);
        {
          var bt = (Y) => {
            var be = jl();
            C(Y, be);
          }, qe = (Y) => {
            var be = Ll();
            C(Y, be);
          }, ot = (Y) => {
            var be = Ol();
            C(Y, be);
          };
          q(He, (Y) => {
            d(z).type === "success" ? Y(bt) : d(z).type === "error" ? Y(qe, 1) : Y(ot, -1);
          });
        }
        var ne = y(He);
        ae(() => {
          It(ge, 1, `px-4 py-3 rounded-lg shadow-lg text-sm font-medium flex items-center gap-2
					${d(z).type === "success" ? "bg-green-600 text-white" : ""}
					${d(z).type === "error" ? "bg-red-600 text-white" : ""}
					${d(z).type === "info" ? "bg-blue-600 text-white" : ""}`), j(ne, ` ${d(z).message ?? ""}`);
        }), C(O, ge);
      }), C(v, x);
    };
    q(ua, (v) => {
      d(l).length > 0 && v(Ti);
    });
  }
  var Ai = y(ua, 2), Ni = p(Ai);
  {
    var Ri = (v) => {
      var x = Ql(), O = ft(x), z = p(O), ge = y(O, 2);
      {
        var He = (qe) => {
          var ot = Il();
          C(qe, ot);
        }, bt = (qe) => {
          var ot = Xl(), ne = ft(ot), Y = p(ne), be = p(Y), tr = p(be), Dr = p(tr), vn = p(Dr), Fr = y(Dr, 2), hn = p(Fr), jr = y(tr, 2);
          {
            var _n = (N) => {
              var I = Hl(), F = p(I);
              ae(
                (Ve) => {
                  It(I, 1, `px-2.5 py-1 rounded-full text-xs font-medium ${Ve ?? ""}`, "svelte-11d5b98"), j(F, d(m).status);
                },
                [() => sa(d(m).status)]
              ), C(N, I);
            };
            q(jr, (N) => {
              d(m).status && N(_n);
            });
          }
          var Lr = y(Y, 2), rr = p(Lr);
          {
            var pn = (N) => {
              const I = /* @__PURE__ */ mt(() => Pr(d(m).metadata));
              var F = xl(), Ve = ft(F);
              {
                var X = (Pe) => {
                  var De = ql(), Ue = p(De);
                  ae(() => j(Ue, d(I))), C(Pe, De);
                };
                q(Ve, (Pe) => {
                  d(I) && Pe(X);
                });
              }
              C(N, F);
            };
            q(rr, (N) => {
              d(m).metadata && N(pn);
            });
          }
          var Or = y(rr, 2), nr = p(Or), gn = y(p(nr), 2), bn = p(gn), zr = y(nr, 2), yn = y(p(zr), 2), xn = p(yn), ar = y(zr, 2), Br = y(p(ar), 2), mn = p(Br), Ir = y(ar, 2), ir = y(p(Ir), 2), sr = p(ir), lr = y(Or, 2);
          {
            var or = (N) => {
              var I = $l(), F = y(p(I), 2);
              Wr(F, 21, () => d(m).schedules, Na, (Ve, X) => {
                var Pe = Ul(), De = p(Pe), Ue = p(De), dr = p(Ue), cr = y(Ue, 2);
                {
                  var vr = (yt) => {
                    var Cn = Vl();
                    C(yt, Cn);
                  };
                  q(cr, (yt) => {
                    d(X).disabled && yt(vr);
                  });
                }
                var Vr = y(De, 2), Ur = p(Vr);
                ae(
                  (yt) => {
                    It(Ue, 1, Pa(d(X).disabled ? "line-through text-gray-400" : "text-gray-700 dark:text-gray-300")), j(dr, yt), j(Ur, d(X).disabled ? "Resume" : "Pause");
                  },
                  [() => la(d(X).repeat_every)]
                ), ye("click", Vr, () => na(d(X)._id, d(X).disabled)), C(Ve, Pe);
              }), C(N, I);
            };
            q(lr, (N) => {
              d(m).schedules?.length > 0 && N(or);
            });
          }
          var Hr = y(Lr, 2), Ot = p(Hr), wn = p(Ot);
          {
            var kn = (N) => {
              var I = Yl();
              C(N, I);
            }, ee = (N) => {
              var I = Gl();
              C(N, I);
            };
            q(wn, (N) => {
              u[d(M)] ? N(kn) : N(ee, -1);
            });
          }
          var Re = y(Ot, 2), zt = p(Re);
          {
            var fr = (N) => {
              var I = Wl();
              C(N, I);
            }, ur = (N) => {
              var I = Kl();
              C(N, I);
            };
            q(zt, (N) => {
              h[d(M)] ? N(fr) : N(ur, -1);
            });
          }
          var qr = y(ne, 2);
          {
            var En = (N) => {
              var I = Zl(), F = y(p(I), 2);
              Wr(F, 21, () => d(Q), Na, (Ve, X) => {
                var Pe = Jl(), De = p(Pe), Ue = p(De), dr = y(De, 2), cr = p(dr);
                ae(
                  (vr) => {
                    j(Ue, d(X).timestamp || d(X).time || ""), j(cr, vr);
                  },
                  [
                    () => d(X).message || d(X).output || JSON.stringify(d(X))
                  ]
                ), C(Ve, Pe);
              }), C(N, I);
            };
            q(qr, (N) => {
              d(Q).length > 0 && N(En);
            });
          }
          ae(
            (N, I) => {
              j(vn, d(m).name || d(M)), j(hn, d(M)), j(bn, N), j(xn, I), j(mn, d(m).executions_count ?? "-"), j(sr, `${d(m).step_to_execute ?? 0 ?? ""} / ${d(m).total_steps ?? 0 ?? ""}`), Ot.disabled = u[d(M)], Re.disabled = h[d(M)];
            },
            [
              () => oa(d(m).created_at),
              () => oa(d(m).updated_at)
            ]
          ), ye("click", Ot, () => aa(d(M))), ye("click", Re, () => ia(d(M))), C(qe, ot);
        };
        q(ge, (qe) => {
          d(le) ? qe(He) : d(m) && qe(bt, 1);
        });
      }
      ye("click", z, ra), C(v, x);
    }, Pi = (v) => {
      var x = yo(), O = ft(x), z = y(p(O), 2), ge = y(O, 2);
      {
        var He = (ne) => {
          var Y = eo(), be = y(p(Y));
          ae(() => j(be, ` ${d(a) ?? ""}`)), C(ne, Y);
        };
        q(ge, (ne) => {
          d(a) && ne(He);
        });
      }
      var bt = y(ge, 2);
      {
        var qe = (ne) => {
          var Y = to();
          C(ne, Y);
        }, ot = (ne) => {
          var Y = bo(), be = ft(Y), tr = p(be), Dr = p(tr), vn = p(Dr), Fr = y(tr, 2), hn = p(Fr), jr = p(hn), _n = y(jr);
          {
            var Lr = (ee) => {
              var Re = ro();
              C(ee, Re);
            };
            q(_n, (ee) => {
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
          var Ot = y(ar, 2);
          {
            var wn = (ee) => {
              var Re = no(), zt = y(p(Re), 2), fr = p(zt);
              ae(() => j(fr, d(i) || d(f) ? "No matching tasks" : "No tasks found")), C(ee, Re);
            }, kn = (ee) => {
              var Re = go(), zt = ft(Re);
              Wr(zt, 21, () => d(Ne), (I) => I._id, (I, F) => {
                var Ve = po(), X = p(Ve), Pe = p(X), De = p(Pe), Ue = p(De), dr = p(Ue), cr = y(Ue, 2), vr = p(cr), Vr = y(De, 2), Ur = p(Vr);
                {
                  var yt = (R) => {
                    var B = ao();
                    C(R, B);
                  }, Cn = /* @__PURE__ */ mt(() => d(F).status?.toLowerCase() === "running");
                  q(Ur, (R) => {
                    d(Cn) && R(yt);
                  });
                }
                var da = y(Ur, 2), Di = p(da), ca = y(X, 2), va = p(ca);
                {
                  var Fi = (R) => {
                    var B = io(), Ze = p(B);
                    ae((Bt) => j(Ze, Bt), [() => Pr(d(F).metadata)]), C(R, B);
                  }, ji = /* @__PURE__ */ mt(() => Pr(d(F).metadata));
                  q(va, (R) => {
                    d(ji) && R(Fi);
                  });
                }
                var Li = y(va, 2), ha = p(Li);
                {
                  var Oi = (R) => {
                    const B = /* @__PURE__ */ mt(() => d(F).schedules[0]);
                    var Ze = oo(), Bt = ft(Ze), Mn = y(p(Bt), 2), Wi = p(Mn), Ki = y(Mn, 2);
                    {
                      var Ji = (Xe) => {
                        var Yr = so();
                        C(Xe, Yr);
                      };
                      q(Ki, (Xe) => {
                        d(B).disabled && Xe(Ji);
                      });
                    }
                    var Zi = y(Bt, 2);
                    {
                      var Xi = (Xe) => {
                        var Yr = lo(), Qi = p(Yr), es = p(Qi);
                        ae((ts) => j(es, `Last: ${ts ?? ""}`), [() => Mi(d(B).last_run_at)]), C(Xe, Yr);
                      };
                      q(Zi, (Xe) => {
                        d(B).last_run_at && Xe(Xi);
                      });
                    }
                    ae(
                      (Xe) => {
                        It(Mn, 1, Pa(d(B).disabled ? "line-through text-gray-400" : "")), j(Wi, Xe);
                      },
                      [() => la(d(B).repeat_every)]
                    ), C(R, Ze);
                  }, zi = (R) => {
                    var B = fo();
                    C(R, B);
                  };
                  q(ha, (R) => {
                    d(F).schedules?.length > 0 ? R(Oi) : R(zi, -1);
                  });
                }
                var _a = y(ha, 2), Bi = y(p(_a)), Ii = y(ca, 2), pa = p(Ii), $r = y(pa, 2), Hi = p($r);
                {
                  var qi = (R) => {
                    var B = uo();
                    C(R, B);
                  }, Vi = (R) => {
                    var B = co();
                    C(R, B);
                  };
                  q(Hi, (R) => {
                    u[d(F)._id] ? R(qi) : R(Vi, -1);
                  });
                }
                var ga = y($r, 2);
                {
                  var Ui = (R) => {
                    const B = /* @__PURE__ */ mt(() => d(F).schedules[0]);
                    var Ze = vo(), Bt = p(Ze);
                    ae(() => {
                      It(Ze, 1, `px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors
											${d(B).disabled ? "text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30" : "text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-700 hover:bg-yellow-50 dark:hover:bg-yellow-900/30"}`), j(Bt, d(B).disabled ? "Resume" : "Pause");
                    }), ye("click", Ze, () => na(d(B)._id, d(B).disabled)), C(R, Ze);
                  };
                  q(ga, (R) => {
                    d(F).schedules?.length > 0 && R(Ui);
                  });
                }
                var Sn = y(ga, 2), $i = p(Sn);
                {
                  var Yi = (R) => {
                    var B = ho();
                    C(R, B);
                  }, Gi = (R) => {
                    var B = _o();
                    C(R, B);
                  };
                  q($i, (R) => {
                    h[d(F)._id] ? R(Yi) : R(Gi, -1);
                  });
                }
                ae(
                  (R, B) => {
                    j(dr, d(F).name), j(vr, `ID: ${R ?? ""}`), It(da, 1, `px-2 py-0.5 rounded-full text-xs font-medium ${B ?? ""}`, "svelte-11d5b98"), j(Di, d(F).status || "Unknown"), j(Bi, ` ${d(F).executions_count ?? ""} runs`), $r.disabled = u[d(F)._id], Sn.disabled = h[d(F)._id];
                  },
                  [
                    () => d(F)._id.substring(0, 12),
                    () => sa(d(F).status)
                  ]
                ), ye("click", _a, () => cn(d(F)._id)), ye("click", pa, () => cn(d(F)._id)), ye("click", $r, () => aa(d(F)._id)), ye("click", Sn, () => ia(d(F)._id)), C(I, Ve);
              });
              var fr = y(zt, 2), ur = p(fr), qr = y(ur, 2), En = p(qr), N = y(qr, 2);
              ae(() => {
                ur.disabled = d(w).length <= 1, j(En, `Page ${d(w).length ?? ""}`), N.disabled = !d(S);
              }), ye("click", ur, dn), ye("click", N, un), C(ee, Re);
            };
            q(Ot, (ee) => {
              d(Ne).length === 0 ? ee(wn) : ee(kn, -1);
            });
          }
          ae(() => {
            j(vn, d(oe).total), j(jr, `${d(oe).running ?? ""} `), j(Or, d(oe).pending), j(bn, d(oe).completed), j(xn, d(oe).failed);
          }), Dl(mn, () => d(i), (ee) => D(i, ee)), Pl(Ir, () => d(f), (ee) => D(f, ee)), C(ne, Y);
        };
        q(bt, (ne) => {
          d(n) ? ne(qe) : ne(ot, -1);
        });
      }
      ye("click", z, J), C(v, x);
    };
    q(Ni, (v) => {
      d(M) ? v(Ri) : v(Pi, -1);
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
