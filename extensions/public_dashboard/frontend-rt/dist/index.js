var hs = Object.defineProperty;
var Kn = (e) => {
  throw TypeError(e);
};
var ps = (e, t, n) => t in e ? hs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var _e = (e, t, n) => ps(e, typeof t != "symbol" ? t + "" : t, n), pn = (e, t, n) => t.has(e) || Kn("Cannot " + n);
var f = (e, t, n) => (pn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), w = (e, t, n) => t.has(e) ? Kn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), k = (e, t, n, r) => (pn(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), N = (e, t, n) => (pn(e, t, "access private method"), n);
var lr = Array.isArray, _s = Array.prototype.indexOf, qt = Array.prototype.includes, vn = Array.from, ms = Object.defineProperty, It = Object.getOwnPropertyDescriptor, gs = Object.prototype, ws = Array.prototype, bs = Object.getPrototypeOf, Jn = Object.isExtensible;
const ys = () => {
};
function ks(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ar() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
const V = 2, St = 4, dn = 8, or = 1 << 24, Ae = 16, ye = 32, Je = 64, gn = 128, oe = 512, P = 1024, j = 2048, Ne = 4096, Y = 8192, ue = 16384, _t = 32768, Wn = 1 << 25, Tt = 65536, wn = 1 << 17, Es = 1 << 18, Ct = 1 << 19, xs = 1 << 20, Te = 1 << 25, dt = 65536, fn = 1 << 21, Lt = 1 << 22, Ke = 1 << 23, _n = Symbol("$state"), Oe = new class extends Error {
  constructor() {
    super(...arguments);
    _e(this, "name", "StaleReactionError");
    _e(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function qs() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ss(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ts(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function As() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ns(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Rs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Cs() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ms() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ds() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Os() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Fs = 1, Ps = 2, ur = 4, Is = 8, zs = 16, Ls = 1, js = 2, I = Symbol(), Vs = "http://www.w3.org/1999/xhtml";
function Us() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Hs() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function cr(e) {
  return e === this.v;
}
function Bs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function vr(e) {
  return !Bs(e, this.v);
}
let ve = null;
function At(e) {
  ve = e;
}
function dr(e, t = !1, n) {
  ve = {
    p: ve,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      q
    ),
    l: null
  };
}
function hr(e) {
  var t = (
    /** @type {ComponentContext} */
    ve
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Fr(r);
  }
  return t.i = !0, ve = t.p, /** @type {T} */
  {};
}
function pr() {
  return !0;
}
let gt = [];
function Ys() {
  var e = gt;
  gt = [], ks(e);
}
function at(e) {
  if (gt.length === 0) {
    var t = gt;
    queueMicrotask(() => {
      t === gt && Ys();
    });
  }
  gt.push(e);
}
function _r(e) {
  var t = q;
  if (t === null)
    return x.f |= Ke, e;
  if ((t.f & _t) === 0 && (t.f & St) === 0)
    throw e;
  Ge(e, t);
}
function Ge(e, t) {
  for (; t !== null; ) {
    if ((t.f & gn) !== 0) {
      if ((t.f & _t) === 0)
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
const Gs = -7169;
function D(e, t) {
  e.f = e.f & Gs | t;
}
function Rn(e) {
  (e.f & oe) !== 0 || e.deps === null ? D(e, P) : D(e, Ne);
}
function mr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & V) === 0 || (t.f & dt) === 0 || (t.f ^= dt, mr(
        /** @type {Derived} */
        t.deps
      ));
}
function gr(e, t, n) {
  (e.f & j) !== 0 ? t.add(e) : (e.f & Ne) !== 0 && n.add(e), mr(e.deps), D(e, P);
}
const Qe = /* @__PURE__ */ new Set();
let S = null, we = null, bn = null, mn = !1, wt = null, Qt = null;
var Zn = 0;
let Ks = 1;
var bt, yt, rt, Fe, xe, Vt, te, Ut, Be, Pe, qe, kt, Et, st, F, $t, wr, en, yn, tn, Js;
const on = class on {
  constructor() {
    w(this, F);
    _e(this, "id", Ks++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    _e(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    _e(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    w(this, bt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    w(this, yt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    w(this, rt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    w(this, Fe, /* @__PURE__ */ new Map());
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
    w(this, te, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    w(this, Ut, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    w(this, Be, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    w(this, Pe, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    w(this, qe, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    w(this, kt, /* @__PURE__ */ new Set());
    _e(this, "is_fork", !1);
    w(this, Et, !1);
    /** @type {Set<Batch>} */
    w(this, st, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    f(this, qe).has(t) || f(this, qe).set(t, { d: [], m: [] }), f(this, kt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = f(this, qe).get(t);
    if (r) {
      f(this, qe).delete(t);
      for (var s of r.d)
        D(s, j), n(s);
      for (s of r.m)
        D(s, Ne), n(s);
    }
    f(this, kt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== I && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Ke) === 0 && (this.current.set(t, [n, r]), we?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    S = this;
  }
  deactivate() {
    S = null, we = null;
  }
  flush() {
    try {
      mn = !0, S = this, N(this, F, en).call(this);
    } finally {
      Zn = 0, bn = null, wt = null, Qt = null, mn = !1, S = null, we = null, ot.clear();
    }
  }
  discard() {
    for (const t of f(this, yt)) t(this);
    f(this, yt).clear(), f(this, rt).clear(), Qe.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    f(this, Ut).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    let r = f(this, Fe).get(n) ?? 0;
    if (f(this, Fe).set(n, r + 1), t) {
      let s = f(this, xe).get(n) ?? 0;
      f(this, xe).set(n, s + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, r) {
    let s = f(this, Fe).get(n) ?? 0;
    if (s === 1 ? f(this, Fe).delete(n) : f(this, Fe).set(n, s - 1), t) {
      let i = f(this, xe).get(n) ?? 0;
      i === 1 ? f(this, xe).delete(n) : f(this, xe).set(n, i - 1);
    }
    f(this, Et) || r || (k(this, Et, !0), at(() => {
      k(this, Et, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      f(this, Be).add(r);
    for (const r of n)
      f(this, Pe).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    f(this, bt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    f(this, yt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    f(this, rt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of f(this, rt)) t(this);
    f(this, rt).clear();
  }
  settled() {
    return (f(this, Vt) ?? k(this, Vt, ar())).promise;
  }
  static ensure() {
    if (S === null) {
      const t = S = new on();
      mn || (Qe.add(S), at(() => {
        S === t && t.flush();
      }));
    }
    return S;
  }
  apply() {
    {
      we = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (bn = t, t.b?.is_pending && (t.f & (St | dn | or)) !== 0 && (t.f & _t) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (wt !== null && n === q && (x === null || (x.f & V) === 0))
        return;
      if ((r & (Je | ye)) !== 0) {
        if ((r & P) === 0)
          return;
        n.f ^= P;
      }
    }
    f(this, te).push(n);
  }
};
bt = new WeakMap(), yt = new WeakMap(), rt = new WeakMap(), Fe = new WeakMap(), xe = new WeakMap(), Vt = new WeakMap(), te = new WeakMap(), Ut = new WeakMap(), Be = new WeakMap(), Pe = new WeakMap(), qe = new WeakMap(), kt = new WeakMap(), Et = new WeakMap(), st = new WeakMap(), F = new WeakSet(), $t = function() {
  return this.is_fork || f(this, xe).size > 0;
}, wr = function() {
  for (const r of f(this, st))
    for (const s of f(r, xe).keys()) {
      for (var t = !1, n = s; n.parent !== null; ) {
        if (f(this, qe).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, en = function() {
  var o;
  if (Zn++ > 1e3 && (Qe.delete(this), Ws()), !N(this, F, $t).call(this)) {
    for (const l of f(this, Be))
      f(this, Pe).delete(l), D(l, j), this.schedule(l);
    for (const l of f(this, Pe))
      D(l, Ne), this.schedule(l);
  }
  const t = f(this, te);
  k(this, te, []), this.apply();
  var n = wt = [], r = [], s = Qt = [];
  for (const l of t)
    try {
      N(this, F, yn).call(this, l, n, r);
    } catch (u) {
      throw kr(l), u;
    }
  if (S = null, s.length > 0) {
    var i = on.ensure();
    for (const l of s)
      i.schedule(l);
  }
  if (wt = null, Qt = null, N(this, F, $t).call(this) || N(this, F, wr).call(this)) {
    N(this, F, tn).call(this, r), N(this, F, tn).call(this, n);
    for (const [l, u] of f(this, qe))
      yr(l, u);
  } else {
    f(this, Fe).size === 0 && Qe.delete(this), f(this, Be).clear(), f(this, Pe).clear();
    for (const l of f(this, bt)) l(this);
    f(this, bt).clear(), Xn(r), Xn(n), f(this, Vt)?.resolve();
  }
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    S
  );
  if (f(this, te).length > 0) {
    const l = a ?? (a = this);
    f(l, te).push(...f(this, te).filter((u) => !f(l, te).includes(u)));
  }
  a !== null && (Qe.add(a), N(o = a, F, en).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
yn = function(t, n, r) {
  t.f ^= P;
  for (var s = t.first; s !== null; ) {
    var i = s.f, a = (i & (ye | Je)) !== 0, o = a && (i & P) !== 0, l = o || (i & Y) !== 0 || f(this, qe).has(s);
    if (!l && s.fn !== null) {
      a ? s.f ^= P : (i & St) !== 0 ? n.push(s) : Jt(s) && ((i & Ae) !== 0 && f(this, Pe).add(s), Rt(s));
      var u = s.first;
      if (u !== null) {
        s = u;
        continue;
      }
    }
    for (; s !== null; ) {
      var c = s.next;
      if (c !== null) {
        s = c;
        break;
      }
      s = s.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
tn = function(t) {
  for (var n = 0; n < t.length; n += 1)
    gr(t[n], f(this, Be), f(this, Pe));
}, Js = function() {
  var c, _, h;
  for (const d of Qe) {
    var t = d.id < this.id, n = [];
    for (const [p, [b, v]] of this.current) {
      if (d.current.has(p)) {
        var r = (
          /** @type {[any, boolean]} */
          d.current.get(p)[0]
        );
        if (t && b !== r)
          d.current.set(p, [b, v]);
        else
          continue;
      }
      n.push(p);
    }
    var s = [...d.current.keys()].filter((p) => !this.current.has(p));
    if (s.length === 0)
      t && d.discard();
    else if (n.length > 0) {
      if (t)
        for (const p of f(this, kt))
          d.unskip_effect(p, (b) => {
            var v;
            (b.f & (Ae | Lt)) !== 0 ? d.schedule(b) : N(v = d, F, tn).call(v, [b]);
          });
      d.activate();
      var i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
      for (var o of n)
        br(o, s, i, a);
      a = /* @__PURE__ */ new Map();
      var l = [...d.current.keys()].filter(
        (p) => this.current.has(p) ? (
          /** @type {[any, boolean]} */
          this.current.get(p)[0] !== p
        ) : !0
      );
      for (const p of f(this, Ut))
        (p.f & (ue | Y | wn)) === 0 && Cn(p, l, a) && ((p.f & (Lt | Ae)) !== 0 ? (D(p, j), d.schedule(p)) : f(d, Be).add(p));
      if (f(d, te).length > 0) {
        d.apply();
        for (var u of f(d, te))
          N(c = d, F, yn).call(c, u, [], []);
        k(d, te, []);
      }
      d.deactivate();
    }
  }
  for (const d of Qe)
    f(d, st).has(this) && (f(d, st).delete(this), f(d, st).size === 0 && !N(_ = d, F, $t).call(_) && (d.activate(), N(h = d, F, en).call(h)));
};
let ht = on;
function Ws() {
  try {
    Rs();
  } catch (e) {
    Ge(e, bn);
  }
}
let De = null;
function Xn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (ue | Y)) === 0 && Jt(r) && (De = /* @__PURE__ */ new Set(), Rt(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Ir(r), De?.size > 0)) {
        ot.clear();
        for (const s of De) {
          if ((s.f & (ue | Y)) !== 0) continue;
          const i = [s];
          let a = s.parent;
          for (; a !== null; )
            De.has(a) && (De.delete(a), i.push(a)), a = a.parent;
          for (let o = i.length - 1; o >= 0; o--) {
            const l = i[o];
            (l.f & (ue | Y)) === 0 && Rt(l);
          }
        }
        De.clear();
      }
    }
    De = null;
  }
}
function br(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & V) !== 0 ? br(
        /** @type {Derived} */
        s,
        t,
        n,
        r
      ) : (i & (Lt | Ae)) !== 0 && (i & j) === 0 && Cn(s, t, r) && (D(s, j), Mn(
        /** @type {Effect} */
        s
      ));
    }
}
function Cn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (qt.call(t, s))
        return !0;
      if ((s.f & V) !== 0 && Cn(
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
function Mn(e) {
  S.schedule(e);
}
function yr(e, t) {
  if (!((e.f & ye) !== 0 && (e.f & P) !== 0)) {
    (e.f & j) !== 0 ? t.d.push(e) : (e.f & Ne) !== 0 && t.m.push(e), D(e, P);
    for (var n = e.first; n !== null; )
      yr(n, t), n = n.next;
  }
}
function kr(e) {
  D(e, P);
  for (var t = e.first; t !== null; )
    kr(t), t = t.next;
}
function Zs(e) {
  let t = 0, n = pt(0), r;
  return () => {
    On() && (g(n), yi(() => (t === 0 && (r = Ti(() => e(() => zt(n)))), t += 1, () => {
      at(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, zt(n));
      });
    })));
  };
}
var Xs = Tt | Ct;
function Qs(e, t, n, r) {
  new $s(e, t, n, r);
}
var ie, Nn, fe, it, K, le, H, ne, Ie, ft, Ye, xt, Ht, Bt, ze, un, M, ei, ti, ni, kn, nn, rn, En, xn;
class $s {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, s) {
    w(this, M);
    /** @type {Boundary | null} */
    _e(this, "parent");
    _e(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    _e(this, "transform_error");
    /** @type {TemplateNode} */
    w(this, ie);
    /** @type {TemplateNode | null} */
    w(this, Nn, null);
    /** @type {BoundaryProps} */
    w(this, fe);
    /** @type {((anchor: Node) => void)} */
    w(this, it);
    /** @type {Effect} */
    w(this, K);
    /** @type {Effect | null} */
    w(this, le, null);
    /** @type {Effect | null} */
    w(this, H, null);
    /** @type {Effect | null} */
    w(this, ne, null);
    /** @type {DocumentFragment | null} */
    w(this, Ie, null);
    w(this, ft, 0);
    w(this, Ye, 0);
    w(this, xt, !1);
    /** @type {Set<Effect>} */
    w(this, Ht, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    w(this, Bt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    w(this, ze, null);
    w(this, un, Zs(() => (k(this, ze, pt(f(this, ft))), () => {
      k(this, ze, null);
    })));
    k(this, ie, t), k(this, fe, n), k(this, it, (i) => {
      var a = (
        /** @type {Effect} */
        q
      );
      a.b = this, a.f |= gn, r(i);
    }), this.parent = /** @type {Effect} */
    q.b, this.transform_error = s ?? this.parent?.transform_error ?? ((i) => i), k(this, K, Fn(() => {
      N(this, M, kn).call(this);
    }, Xs));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    gr(t, f(this, Ht), f(this, Bt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!f(this, fe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    N(this, M, En).call(this, t, n), k(this, ft, f(this, ft) + t), !(!f(this, ze) || f(this, xt)) && (k(this, xt, !0), at(() => {
      k(this, xt, !1), f(this, ze) && Nt(f(this, ze), f(this, ft));
    }));
  }
  get_effect_pending() {
    return f(this, un).call(this), g(
      /** @type {Source<number>} */
      f(this, ze)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!f(this, fe).onerror && !f(this, fe).failed)
      throw t;
    S?.is_fork ? (f(this, le) && S.skip_effect(f(this, le)), f(this, H) && S.skip_effect(f(this, H)), f(this, ne) && S.skip_effect(f(this, ne)), S.on_fork_commit(() => {
      N(this, M, xn).call(this, t);
    })) : N(this, M, xn).call(this, t);
  }
}
ie = new WeakMap(), Nn = new WeakMap(), fe = new WeakMap(), it = new WeakMap(), K = new WeakMap(), le = new WeakMap(), H = new WeakMap(), ne = new WeakMap(), Ie = new WeakMap(), ft = new WeakMap(), Ye = new WeakMap(), xt = new WeakMap(), Ht = new WeakMap(), Bt = new WeakMap(), ze = new WeakMap(), un = new WeakMap(), M = new WeakSet(), ei = function() {
  try {
    k(this, le, ae(() => f(this, it).call(this, f(this, ie))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
ti = function(t) {
  const n = f(this, fe).failed;
  n && k(this, ne, ae(() => {
    n(
      f(this, ie),
      () => t,
      () => () => {
      }
    );
  }));
}, ni = function() {
  const t = f(this, fe).pending;
  t && (this.is_pending = !0, k(this, H, ae(() => t(f(this, ie)))), at(() => {
    var n = k(this, Ie, document.createDocumentFragment()), r = ut();
    n.append(r), k(this, le, N(this, M, rn).call(this, () => ae(() => f(this, it).call(this, r)))), f(this, Ye) === 0 && (f(this, ie).before(n), k(this, Ie, null), ct(
      /** @type {Effect} */
      f(this, H),
      () => {
        k(this, H, null);
      }
    ), N(this, M, nn).call(
      this,
      /** @type {Batch} */
      S
    ));
  }));
}, kn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), k(this, Ye, 0), k(this, ft, 0), k(this, le, ae(() => {
      f(this, it).call(this, f(this, ie));
    })), f(this, Ye) > 0) {
      var t = k(this, Ie, document.createDocumentFragment());
      zn(f(this, le), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        f(this, fe).pending
      );
      k(this, H, ae(() => n(f(this, ie))));
    } else
      N(this, M, nn).call(
        this,
        /** @type {Batch} */
        S
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
nn = function(t) {
  this.is_pending = !1, t.transfer_effects(f(this, Ht), f(this, Bt));
}, /**
 * @template T
 * @param {() => T} fn
 */
rn = function(t) {
  var n = q, r = x, s = ve;
  Re(f(this, K)), de(f(this, K)), At(f(this, K).ctx);
  try {
    return ht.ensure(), t();
  } catch (i) {
    return _r(i), null;
  } finally {
    Re(n), de(r), At(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
En = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && N(r = this.parent, M, En).call(r, t, n);
    return;
  }
  k(this, Ye, f(this, Ye) + t), f(this, Ye) === 0 && (N(this, M, nn).call(this, n), f(this, H) && ct(f(this, H), () => {
    k(this, H, null);
  }), f(this, Ie) && (f(this, ie).before(f(this, Ie)), k(this, Ie, null)));
}, /**
 * @param {unknown} error
 */
xn = function(t) {
  f(this, le) && (Z(f(this, le)), k(this, le, null)), f(this, H) && (Z(f(this, H)), k(this, H, null)), f(this, ne) && (Z(f(this, ne)), k(this, ne, null));
  var n = f(this, fe).onerror;
  let r = f(this, fe).failed;
  var s = !1, i = !1;
  const a = () => {
    if (s) {
      Hs();
      return;
    }
    s = !0, i && Os(), f(this, ne) !== null && ct(f(this, ne), () => {
      k(this, ne, null);
    }), N(this, M, rn).call(this, () => {
      N(this, M, kn).call(this);
    });
  }, o = (l) => {
    try {
      i = !0, n?.(l, a), i = !1;
    } catch (u) {
      Ge(u, f(this, K) && f(this, K).parent);
    }
    r && k(this, ne, N(this, M, rn).call(this, () => {
      try {
        return ae(() => {
          var u = (
            /** @type {Effect} */
            q
          );
          u.b = this, u.f |= gn, r(
            f(this, ie),
            () => l,
            () => a
          );
        });
      } catch (u) {
        return Ge(
          u,
          /** @type {Effect} */
          f(this, K).parent
        ), null;
      }
    }));
  };
  at(() => {
    var l;
    try {
      l = this.transform_error(t);
    } catch (u) {
      Ge(u, f(this, K) && f(this, K).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      o,
      /** @param {unknown} e */
      (u) => Ge(u, f(this, K) && f(this, K).parent)
    ) : o(l);
  });
};
function ri(e, t, n, r) {
  const s = xr;
  var i = e.filter((h) => !h.settled);
  if (n.length === 0 && i.length === 0) {
    r(t.map(s));
    return;
  }
  var a = (
    /** @type {Effect} */
    q
  ), o = si(), l = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((h) => h.promise)) : null;
  function u(h) {
    o();
    try {
      r(h);
    } catch (d) {
      (a.f & ue) === 0 && Ge(d, a);
    }
    ln();
  }
  if (n.length === 0) {
    l.then(() => u(t.map(s)));
    return;
  }
  var c = Er();
  function _() {
    Promise.all(n.map((h) => /* @__PURE__ */ ii(h))).then((h) => u([...t.map(s), ...h])).catch((h) => Ge(h, a)).finally(() => c());
  }
  l ? l.then(() => {
    o(), _(), ln();
  }) : _();
}
function si() {
  var e = (
    /** @type {Effect} */
    q
  ), t = x, n = ve, r = (
    /** @type {Batch} */
    S
  );
  return function(i = !0) {
    Re(e), de(t), At(n), i && (e.f & ue) === 0 && (r?.activate(), r?.apply());
  };
}
function ln(e = !0) {
  Re(null), de(null), At(null), e && S?.deactivate();
}
function Er() {
  var e = (
    /** @type {Effect} */
    q
  ), t = (
    /** @type {Boundary} */
    e.b
  ), n = (
    /** @type {Batch} */
    S
  ), r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (s = !1) => {
    t.update_pending_count(-1, n), n.decrement(r, e, s);
  };
}
// @__NO_SIDE_EFFECTS__
function xr(e) {
  var t = V | j;
  return q !== null && (q.f |= Ct), {
    ctx: ve,
    deps: null,
    effects: null,
    equals: cr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      I
    ),
    wv: 0,
    parent: q,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ii(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    q
  );
  r === null && qs();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = pt(
    /** @type {V} */
    I
  ), a = !x, o = /* @__PURE__ */ new Map();
  return bi(() => {
    var l = (
      /** @type {Effect} */
      q
    ), u = ar();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(ln);
    } catch (d) {
      u.reject(d), ln();
    }
    var c = (
      /** @type {Batch} */
      S
    );
    if (a) {
      if ((l.f & _t) !== 0)
        var _ = Er();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        o.get(c)?.reject(Oe), o.delete(c);
      else {
        for (const d of o.values())
          d.reject(Oe);
        o.clear();
      }
      o.set(c, u);
    }
    const h = (d, p = void 0) => {
      if (_) {
        var b = p === Oe;
        _(b);
      }
      if (!(p === Oe || (l.f & ue) !== 0)) {
        if (c.activate(), p)
          i.f |= Ke, Nt(i, p);
        else {
          (i.f & Ke) !== 0 && (i.f ^= Ke), Nt(i, d);
          for (const [v, y] of o) {
            if (o.delete(v), v === c) break;
            y.reject(Oe);
          }
        }
        c.deactivate();
      }
    };
    u.promise.then(h, (d) => h(null, d || "unknown"));
  }), _i(() => {
    for (const l of o.values())
      l.reject(Oe);
  }), new Promise((l) => {
    function u(c) {
      function _() {
        c === s ? l(i) : u(s);
      }
      c.then(_, _);
    }
    u(s);
  });
}
// @__NO_SIDE_EFFECTS__
function fi(e) {
  const t = /* @__PURE__ */ xr(e);
  return t.equals = vr, t;
}
function li(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Z(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Dn(e) {
  var t, n = q, r = e.parent;
  if (!We && r !== null && (r.f & (ue | Y)) !== 0)
    return Us(), e.v;
  Re(r);
  try {
    e.f &= ~dt, li(e), t = Hr(e);
  } finally {
    Re(n);
  }
  return t;
}
function qr(e) {
  var t = Dn(e);
  if (!e.equals(t) && (e.wv = Vr(), (!S?.is_fork || e.deps === null) && (S !== null ? S.capture(e, t, !0) : e.v = t, e.deps === null))) {
    D(e, P);
    return;
  }
  We || (we !== null ? (On() || S?.is_fork) && we.set(e, t) : Rn(e));
}
function ai(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Oe), t.teardown = ys, t.ac = null, jt(t, 0), Pn(t));
}
function Sr(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Rt(t);
}
let qn = /* @__PURE__ */ new Set();
const ot = /* @__PURE__ */ new Map();
let Tr = !1;
function pt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: cr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function J(e, t) {
  const n = pt(e);
  return xi(n), n;
}
// @__NO_SIDE_EFFECTS__
function oi(e, t = !1, n = !0) {
  const r = pt(e);
  return t || (r.equals = vr), r;
}
function B(e, t, n = !1) {
  x !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!be || (x.f & wn) !== 0) && pr() && (x.f & (V | Ae | Lt | wn)) !== 0 && (ce === null || !qt.call(ce, e)) && Ds();
  let r = n ? et(t) : t;
  return Nt(e, r, Qt);
}
function Nt(e, t, n = null) {
  if (!e.equals(t)) {
    ot.set(e, We ? t : e.v);
    var r = ht.ensure();
    if (r.capture(e, t), (e.f & V) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & j) !== 0 && Dn(s), we === null && Rn(s);
    }
    e.wv = Vr(), Ar(e, j, n), q !== null && (q.f & P) !== 0 && (q.f & (ye | Je)) === 0 && (se === null ? qi([e]) : se.push(e)), !r.is_fork && qn.size > 0 && !Tr && ui();
  }
  return t;
}
function ui() {
  Tr = !1;
  for (const e of qn)
    (e.f & P) !== 0 && D(e, Ne), Jt(e) && Rt(e);
  qn.clear();
}
function zt(e) {
  B(e, e.v + 1);
}
function Ar(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var s = r.length, i = 0; i < s; i++) {
      var a = r[i], o = a.f, l = (o & j) === 0;
      if (l && D(a, t), (o & V) !== 0) {
        var u = (
          /** @type {Derived} */
          a
        );
        we?.delete(u), (o & dt) === 0 && (o & oe && (q === null || (q.f & fn) === 0) && (a.f |= dt), Ar(u, Ne, n));
      } else if (l) {
        var c = (
          /** @type {Effect} */
          a
        );
        (o & Ae) !== 0 && De !== null && De.add(c), n !== null ? n.push(c) : Mn(c);
      }
    }
}
function et(e) {
  if (typeof e != "object" || e === null || _n in e)
    return e;
  const t = bs(e);
  if (t !== gs && t !== ws)
    return e;
  var n = /* @__PURE__ */ new Map(), r = lr(e), s = /* @__PURE__ */ J(0), i = vt, a = (o) => {
    if (vt === i)
      return o();
    var l = x, u = vt;
    de(null), er(i);
    var c = o();
    return de(l), er(u), c;
  };
  return r && n.set("length", /* @__PURE__ */ J(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Cs();
        var c = n.get(l);
        return c === void 0 ? a(() => {
          var _ = /* @__PURE__ */ J(u.value);
          return n.set(l, _), _;
        }) : B(c, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in o) {
            const c = a(() => /* @__PURE__ */ J(I));
            n.set(l, c), zt(s);
          }
        } else
          B(u, I), zt(s);
        return !0;
      },
      get(o, l, u) {
        if (l === _n)
          return e;
        var c = n.get(l), _ = l in o;
        if (c === void 0 && (!_ || It(o, l)?.writable) && (c = a(() => {
          var d = et(_ ? o[l] : I), p = /* @__PURE__ */ J(d);
          return p;
        }), n.set(l, c)), c !== void 0) {
          var h = g(c);
          return h === I ? void 0 : h;
        }
        return Reflect.get(o, l, u);
      },
      getOwnPropertyDescriptor(o, l) {
        var u = Reflect.getOwnPropertyDescriptor(o, l);
        if (u && "value" in u) {
          var c = n.get(l);
          c && (u.value = g(c));
        } else if (u === void 0) {
          var _ = n.get(l), h = _?.v;
          if (_ !== void 0 && h !== I)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return u;
      },
      has(o, l) {
        if (l === _n)
          return !0;
        var u = n.get(l), c = u !== void 0 && u.v !== I || Reflect.has(o, l);
        if (u !== void 0 || q !== null && (!c || It(o, l)?.writable)) {
          u === void 0 && (u = a(() => {
            var h = c ? et(o[l]) : I, d = /* @__PURE__ */ J(h);
            return d;
          }), n.set(l, u));
          var _ = g(u);
          if (_ === I)
            return !1;
        }
        return c;
      },
      set(o, l, u, c) {
        var _ = n.get(l), h = l in o;
        if (r && l === "length")
          for (var d = u; d < /** @type {Source<number>} */
          _.v; d += 1) {
            var p = n.get(d + "");
            p !== void 0 ? B(p, I) : d in o && (p = a(() => /* @__PURE__ */ J(I)), n.set(d + "", p));
          }
        if (_ === void 0)
          (!h || It(o, l)?.writable) && (_ = a(() => /* @__PURE__ */ J(void 0)), B(_, et(u)), n.set(l, _));
        else {
          h = _.v !== I;
          var b = a(() => et(u));
          B(_, b);
        }
        var v = Reflect.getOwnPropertyDescriptor(o, l);
        if (v?.set && v.set.call(c, u), !h) {
          if (r && typeof l == "string") {
            var y = (
              /** @type {Source<number>} */
              n.get("length")
            ), z = Number(l);
            Number.isInteger(z) && z >= y.v && B(y, z + 1);
          }
          zt(s);
        }
        return !0;
      },
      ownKeys(o) {
        g(s);
        var l = Reflect.ownKeys(o).filter((_) => {
          var h = n.get(_);
          return h === void 0 || h.v !== I;
        });
        for (var [u, c] of n)
          c.v !== I && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Ms();
      }
    }
  );
}
var Qn, Nr, Rr, Cr;
function ci() {
  if (Qn === void 0) {
    Qn = window, Nr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Rr = It(t, "firstChild").get, Cr = It(t, "nextSibling").get, Jn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Jn(n) && (n.__t = void 0);
  }
}
function ut(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function an(e) {
  return (
    /** @type {TemplateNode | null} */
    Rr.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
  return (
    /** @type {TemplateNode | null} */
    Cr.call(e)
  );
}
function m(e, t) {
  return /* @__PURE__ */ an(e);
}
function vi(e, t = !1) {
  {
    var n = /* @__PURE__ */ an(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Kt(n) : n;
  }
}
function E(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Kt(r);
  return r;
}
function di(e) {
  e.textContent = "";
}
function Mr() {
  return !1;
}
function Dr(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Vs, e, void 0)
  );
}
function Or(e) {
  var t = x, n = q;
  de(null), Re(null);
  try {
    return e();
  } finally {
    de(t), Re(n);
  }
}
function hi(e) {
  q === null && (x === null && Ns(), As()), We && Ts();
}
function pi(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Le(e, t) {
  var n = q;
  n !== null && (n.f & Y) !== 0 && (e |= Y);
  var r = {
    ctx: ve,
    deps: null,
    nodes: null,
    f: e | j | oe,
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
  S?.register_created_effect(r);
  var s = r;
  if ((e & St) !== 0)
    wt !== null ? wt.push(r) : ht.ensure().schedule(r);
  else if (t !== null) {
    try {
      Rt(r);
    } catch (a) {
      throw Z(r), a;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & Ct) === 0 && (s = s.first, (e & Ae) !== 0 && (e & Tt) !== 0 && s !== null && (s.f |= Tt));
  }
  if (s !== null && (s.parent = n, n !== null && pi(s, n), x !== null && (x.f & V) !== 0 && (e & Je) === 0)) {
    var i = (
      /** @type {Derived} */
      x
    );
    (i.effects ?? (i.effects = [])).push(s);
  }
  return r;
}
function On() {
  return x !== null && !be;
}
function _i(e) {
  const t = Le(dn, null);
  return D(t, P), t.teardown = e, t;
}
function mi(e) {
  hi();
  var t = (
    /** @type {Effect} */
    q.f
  ), n = !x && (t & ye) !== 0 && (t & _t) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ve
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Fr(e);
}
function Fr(e) {
  return Le(St | xs, e);
}
function gi(e) {
  ht.ensure();
  const t = Le(Je | Ct, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? ct(t, () => {
      Z(t), r(void 0);
    }) : (Z(t), r(void 0));
  });
}
function wi(e) {
  return Le(St, e);
}
function bi(e) {
  return Le(Lt | Ct, e);
}
function yi(e, t = 0) {
  return Le(dn | t, e);
}
function Me(e, t = [], n = [], r = []) {
  ri(r, t, n, (s) => {
    Le(dn, () => e(...s.map(g)));
  });
}
function Fn(e, t = 0) {
  var n = Le(Ae | t, e);
  return n;
}
function ae(e) {
  return Le(ye | Ct, e);
}
function Pr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = We, r = x;
    $n(!0), de(null);
    try {
      t.call(null);
    } finally {
      $n(n), de(r);
    }
  }
}
function Pn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && Or(() => {
      s.abort(Oe);
    });
    var r = n.next;
    (n.f & Je) !== 0 ? n.parent = null : Z(n, t), n = r;
  }
}
function ki(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & ye) === 0 && Z(t), t = n;
  }
}
function Z(e, t = !0) {
  var n = !1;
  (t || (e.f & Es) !== 0) && e.nodes !== null && e.nodes.end !== null && (Ei(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), D(e, Wn), Pn(e, t && !n), jt(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const i of r)
      i.stop();
  Pr(e), e.f ^= Wn, e.f |= ue;
  var s = e.parent;
  s !== null && s.first !== null && Ir(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Ei(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Kt(e);
    e.remove(), e = n;
  }
}
function Ir(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function ct(e, t, n = !0) {
  var r = [];
  zr(e, r, !0);
  var s = () => {
    n && Z(e), t && t();
  }, i = r.length;
  if (i > 0) {
    var a = () => --i || s();
    for (var o of r)
      o.out(a);
  } else
    s();
}
function zr(e, t, n) {
  if ((e.f & Y) === 0) {
    e.f ^= Y;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && t.push(o);
    for (var s = e.first; s !== null; ) {
      var i = s.next;
      if ((s.f & Je) === 0) {
        var a = (s.f & Tt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & ye) !== 0 && (e.f & Ae) !== 0;
        zr(s, t, a ? n : !1);
      }
      s = i;
    }
  }
}
function In(e) {
  Lr(e, !0);
}
function Lr(e, t) {
  if ((e.f & Y) !== 0) {
    e.f ^= Y, (e.f & P) === 0 && (D(e, j), ht.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & Tt) !== 0 || (n.f & ye) !== 0;
      Lr(n, s ? t : !1), n = r;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const a of i)
        (a.is_global || t) && a.in();
  }
}
function zn(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var s = n === r ? null : /* @__PURE__ */ Kt(n);
      t.append(n), n = s;
    }
}
let sn = !1, We = !1;
function $n(e) {
  We = e;
}
let x = null, be = !1;
function de(e) {
  x = e;
}
let q = null;
function Re(e) {
  q = e;
}
let ce = null;
function xi(e) {
  x !== null && (ce === null ? ce = [e] : ce.push(e));
}
let W = null, ee = 0, se = null;
function qi(e) {
  se = e;
}
let jr = 1, tt = 0, vt = tt;
function er(e) {
  vt = e;
}
function Vr() {
  return ++jr;
}
function Jt(e) {
  var t = e.f;
  if ((t & j) !== 0)
    return !0;
  if (t & V && (e.f &= ~dt), (t & Ne) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, s = 0; s < r; s++) {
      var i = n[s];
      if (Jt(
        /** @type {Derived} */
        i
      ) && qr(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & oe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    we === null && D(e, P);
  }
  return !1;
}
function Ur(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(ce !== null && qt.call(ce, e)))
    for (var s = 0; s < r.length; s++) {
      var i = r[s];
      (i.f & V) !== 0 ? Ur(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? D(i, j) : (i.f & P) !== 0 && D(i, Ne), Mn(
        /** @type {Effect} */
        i
      ));
    }
}
function Hr(e) {
  var b;
  var t = W, n = ee, r = se, s = x, i = ce, a = ve, o = be, l = vt, u = e.f;
  W = /** @type {null | Value[]} */
  null, ee = 0, se = null, x = (u & (ye | Je)) === 0 ? e : null, ce = null, At(e.ctx), be = !1, vt = ++tt, e.ac !== null && (Or(() => {
    e.ac.abort(Oe);
  }), e.ac = null);
  try {
    e.f |= fn;
    var c = (
      /** @type {Function} */
      e.fn
    ), _ = c();
    e.f |= _t;
    var h = e.deps, d = S?.is_fork;
    if (W !== null) {
      var p;
      if (d || jt(e, ee), h !== null && ee > 0)
        for (h.length = ee + W.length, p = 0; p < W.length; p++)
          h[ee + p] = W[p];
      else
        e.deps = h = W;
      if (On() && (e.f & oe) !== 0)
        for (p = ee; p < h.length; p++)
          ((b = h[p]).reactions ?? (b.reactions = [])).push(e);
    } else !d && h !== null && ee < h.length && (jt(e, ee), h.length = ee);
    if (pr() && se !== null && !be && h !== null && (e.f & (V | Ne | j)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      se.length; p++)
        Ur(
          se[p],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (tt++, s.deps !== null)
        for (let v = 0; v < n; v += 1)
          s.deps[v].rv = tt;
      if (t !== null)
        for (const v of t)
          v.rv = tt;
      se !== null && (r === null ? r = se : r.push(.../** @type {Source[]} */
      se));
    }
    return (e.f & Ke) !== 0 && (e.f ^= Ke), _;
  } catch (v) {
    return _r(v);
  } finally {
    e.f ^= fn, W = t, ee = n, se = r, x = s, ce = i, At(a), be = o, vt = l;
  }
}
function Si(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = _s.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & V) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (W === null || !qt.call(W, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & oe) !== 0 && (i.f ^= oe, i.f &= ~dt), i.v !== I && Rn(i), ai(i), jt(i, 0);
  }
}
function jt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Si(e, n[r]);
}
function Rt(e) {
  var t = e.f;
  if ((t & ue) === 0) {
    D(e, P);
    var n = q, r = sn;
    q = e, sn = !0;
    try {
      (t & (Ae | or)) !== 0 ? ki(e) : Pn(e), Pr(e);
      var s = Hr(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = jr;
      var i;
    } finally {
      sn = r, q = n;
    }
  }
}
function g(e) {
  var t = e.f, n = (t & V) !== 0;
  if (x !== null && !be) {
    var r = q !== null && (q.f & ue) !== 0;
    if (!r && (ce === null || !qt.call(ce, e))) {
      var s = x.deps;
      if ((x.f & fn) !== 0)
        e.rv < tt && (e.rv = tt, W === null && s !== null && s[ee] === e ? ee++ : W === null ? W = [e] : W.push(e));
      else {
        (x.deps ?? (x.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [x] : qt.call(i, x) || i.push(x);
      }
    }
  }
  if (We && ot.has(e))
    return ot.get(e);
  if (n) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (We) {
      var o = a.v;
      return ((a.f & P) === 0 && a.reactions !== null || Yr(a)) && (o = Dn(a)), ot.set(a, o), o;
    }
    var l = (a.f & oe) === 0 && !be && x !== null && (sn || (x.f & oe) !== 0), u = (a.f & _t) === 0;
    Jt(a) && (l && (a.f |= oe), qr(a)), l && !u && (Sr(a), Br(a));
  }
  if (we?.has(e))
    return we.get(e);
  if ((e.f & Ke) !== 0)
    throw e.v;
  return e.v;
}
function Br(e) {
  if (e.f |= oe, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & V) !== 0 && (t.f & oe) === 0 && (Sr(
        /** @type {Derived} */
        t
      ), Br(
        /** @type {Derived} */
        t
      ));
}
function Yr(e) {
  if (e.v === I) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ot.has(t) || (t.f & V) !== 0 && Yr(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Ti(e) {
  var t = be;
  try {
    return be = !0, e();
  } finally {
    be = t;
  }
}
const Ai = ["touchstart", "touchmove"];
function Ni(e) {
  return Ai.includes(e);
}
const nt = Symbol("events"), Gr = /* @__PURE__ */ new Set(), Sn = /* @__PURE__ */ new Set();
function Ri(e, t, n) {
  (t[nt] ?? (t[nt] = {}))[e] = n;
}
function Ci(e) {
  for (var t = 0; t < e.length; t++)
    Gr.add(e[t]);
  for (var n of Sn)
    n(e);
}
let tr = null;
function nr(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  tr = e;
  var a = 0, o = tr === e && e[nt];
  if (o) {
    var l = s.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[nt] = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    l <= u && (a = l);
  }
  if (i = /** @type {Element} */
  s[a] || e.target, i !== t) {
    ms(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var c = x, _ = q;
    de(null), Re(null);
    try {
      for (var h, d = []; i !== null; ) {
        var p = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var b = i[nt]?.[r];
          b != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && b.call(i, e);
        } catch (v) {
          h ? d.push(v) : h = v;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        i = p;
      }
      if (h) {
        for (let v of d)
          queueMicrotask(() => {
            throw v;
          });
        throw h;
      }
    } finally {
      e[nt] = t, delete e.currentTarget, de(c), Re(_);
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
function Di(e) {
  return (
    /** @type {string} */
    Mi?.createHTML(e) ?? e
  );
}
function Oi(e) {
  var t = Dr("template");
  return t.innerHTML = Di(e.replaceAll("<!>", "<!---->")), t.content;
}
function rr(e, t) {
  var n = (
    /** @type {Effect} */
    q
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function ke(e, t) {
  var n = (t & Ls) !== 0, r = (t & js) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = Oi(i ? e : "<!>" + e), n || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ an(s)));
    var a = (
      /** @type {TemplateNode} */
      r || Nr ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ an(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      rr(o, l);
    } else
      rr(a, a);
    return a;
  };
}
function me(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function O(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function Fi(e, t) {
  return Pi(e, t);
}
const Zt = /* @__PURE__ */ new Map();
function Pi(e, { target: t, anchor: n, props: r = {}, events: s, context: i, intro: a = !0, transformError: o }) {
  ci();
  var l = void 0, u = gi(() => {
    var c = n ?? t.appendChild(ut());
    Qs(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (d) => {
        dr({});
        var p = (
          /** @type {ComponentContext} */
          ve
        );
        i && (p.c = i), s && (r.$$events = s), l = e(d, r) || {}, hr();
      },
      o
    );
    var _ = /* @__PURE__ */ new Set(), h = (d) => {
      for (var p = 0; p < d.length; p++) {
        var b = d[p];
        if (!_.has(b)) {
          _.add(b);
          var v = Ni(b);
          for (const C of [t, document]) {
            var y = Zt.get(C);
            y === void 0 && (y = /* @__PURE__ */ new Map(), Zt.set(C, y));
            var z = y.get(b);
            z === void 0 ? (C.addEventListener(b, nr, { passive: v }), y.set(b, 1)) : y.set(b, z + 1);
          }
        }
      }
    };
    return h(vn(Gr)), Sn.add(h), () => {
      for (var d of _)
        for (const v of [t, document]) {
          var p = (
            /** @type {Map<string, number>} */
            Zt.get(v)
          ), b = (
            /** @type {number} */
            p.get(d)
          );
          --b == 0 ? (v.removeEventListener(d, nr), p.delete(d), p.size === 0 && Zt.delete(v)) : p.set(d, b);
        }
      Sn.delete(h), c !== n && c.parentNode?.removeChild(c);
    };
  });
  return Tn.set(l, u), l;
}
let Tn = /* @__PURE__ */ new WeakMap();
function Ii(e, t) {
  const n = Tn.get(e);
  return n ? (Tn.delete(e), n(t)) : Promise.resolve();
}
var ge, Se, re, lt, Yt, Gt, cn;
class zi {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    _e(this, "anchor");
    /** @type {Map<Batch, Key>} */
    w(this, ge, /* @__PURE__ */ new Map());
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
    w(this, re, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    w(this, lt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    w(this, Yt, !0);
    /**
     * @param {Batch} batch
     */
    w(this, Gt, (t) => {
      if (f(this, ge).has(t)) {
        var n = (
          /** @type {Key} */
          f(this, ge).get(t)
        ), r = f(this, Se).get(n);
        if (r)
          In(r), f(this, lt).delete(n);
        else {
          var s = f(this, re).get(n);
          s && (f(this, Se).set(n, s.effect), f(this, re).delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), r = s.effect);
        }
        for (const [i, a] of f(this, ge)) {
          if (f(this, ge).delete(i), i === t)
            break;
          const o = f(this, re).get(a);
          o && (Z(o.effect), f(this, re).delete(a));
        }
        for (const [i, a] of f(this, Se)) {
          if (i === n || f(this, lt).has(i)) continue;
          const o = () => {
            if (Array.from(f(this, ge).values()).includes(i)) {
              var u = document.createDocumentFragment();
              zn(a, u), u.append(ut()), f(this, re).set(i, { effect: a, fragment: u });
            } else
              Z(a);
            f(this, lt).delete(i), f(this, Se).delete(i);
          };
          f(this, Yt) || !r ? (f(this, lt).add(i), ct(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    w(this, cn, (t) => {
      f(this, ge).delete(t);
      const n = Array.from(f(this, ge).values());
      for (const [r, s] of f(this, re))
        n.includes(r) || (Z(s.effect), f(this, re).delete(r));
    });
    this.anchor = t, k(this, Yt, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      S
    ), s = Mr();
    if (n && !f(this, Se).has(t) && !f(this, re).has(t))
      if (s) {
        var i = document.createDocumentFragment(), a = ut();
        i.append(a), f(this, re).set(t, {
          effect: ae(() => n(a)),
          fragment: i
        });
      } else
        f(this, Se).set(
          t,
          ae(() => n(this.anchor))
        );
    if (f(this, ge).set(r, t), s) {
      for (const [o, l] of f(this, Se))
        o === t ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [o, l] of f(this, re))
        o === t ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(f(this, Gt)), r.ondiscard(f(this, cn));
    } else
      f(this, Gt).call(this, r);
  }
}
ge = new WeakMap(), Se = new WeakMap(), re = new WeakMap(), lt = new WeakMap(), Yt = new WeakMap(), Gt = new WeakMap(), cn = new WeakMap();
function $e(e, t, n = !1) {
  var r = new zi(e), s = n ? Tt : 0;
  function i(a, o) {
    r.ensure(a, o);
  }
  Fn(() => {
    var a = !1;
    t((o, l = 0) => {
      a = !0, i(l, o);
    }), a || i(-1, null);
  }, s);
}
function Li(e, t) {
  return t;
}
function ji(e, t, n) {
  for (var r = [], s = t.length, i, a = t.length, o = 0; o < s; o++) {
    let _ = t[o];
    ct(
      _,
      () => {
        if (i) {
          if (i.pending.delete(_), i.done.add(_), i.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            An(e, vn(i.done)), h.delete(i), h.size === 0 && (e.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var l = r.length === 0 && n !== null;
    if (l) {
      var u = (
        /** @type {Element} */
        n
      ), c = (
        /** @type {Element} */
        u.parentNode
      );
      di(c), c.append(u), e.items.clear();
    }
    An(e, t, !l);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function An(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const a of e.pending.values())
      for (const o of a)
        r.add(
          /** @type {EachItem} */
          e.items.get(o).e
        );
  }
  for (var s = 0; s < t.length; s++) {
    var i = t[s];
    if (r?.has(i)) {
      i.f |= Te;
      const a = document.createDocumentFragment();
      zn(i, a);
    } else
      Z(t[s], n);
  }
}
var sr;
function ir(e, t, n, r, s, i = null) {
  var a = e, o = /* @__PURE__ */ new Map(), l = (t & ur) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = u.appendChild(ut());
  }
  var c = null, _ = /* @__PURE__ */ fi(() => {
    var C = n();
    return lr(C) ? C : C == null ? [] : vn(C);
  }), h, d = /* @__PURE__ */ new Map(), p = !0;
  function b(C) {
    (z.effect.f & ue) === 0 && (z.pending.delete(C), z.fallback = c, Vi(z, h, a, t, r), c !== null && (h.length === 0 ? (c.f & Te) === 0 ? In(c) : (c.f ^= Te, Pt(c, null, a)) : ct(c, () => {
      c = null;
    })));
  }
  function v(C) {
    z.pending.delete(C);
  }
  var y = Fn(() => {
    h = /** @type {V[]} */
    g(_);
    for (var C = h.length, U = /* @__PURE__ */ new Set(), he = (
      /** @type {Batch} */
      S
    ), A = Mr(), T = 0; T < C; T += 1) {
      var L = h[T], X = r(L, T), R = p ? null : o.get(X);
      R ? (R.v && Nt(R.v, L), R.i && Nt(R.i, T), A && he.unskip_effect(R.e)) : (R = Ui(
        o,
        p ? a : sr ?? (sr = ut()),
        L,
        X,
        T,
        s,
        t,
        n
      ), p || (R.e.f |= Te), o.set(X, R)), U.add(X);
    }
    if (C === 0 && i && !c && (p ? c = ae(() => i(a)) : (c = ae(() => i(sr ?? (sr = ut()))), c.f |= Te)), C > U.size && Ss(), !p)
      if (d.set(he, U), A) {
        for (const [Ze, Wt] of o)
          U.has(Ze) || he.skip_effect(Wt.e);
        he.oncommit(b), he.ondiscard(v);
      } else
        b(he);
    g(_);
  }), z = { effect: y, items: o, pending: d, outrogroups: null, fallback: c };
  p = !1;
}
function Ft(e) {
  for (; e !== null && (e.f & ye) === 0; )
    e = e.next;
  return e;
}
function Vi(e, t, n, r, s) {
  var i = (r & Is) !== 0, a = t.length, o = e.items, l = Ft(e.effect.first), u, c = null, _, h = [], d = [], p, b, v, y;
  if (i)
    for (y = 0; y < a; y += 1)
      p = t[y], b = s(p, y), v = /** @type {EachItem} */
      o.get(b).e, (v.f & Te) === 0 && (v.nodes?.a?.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(v));
  for (y = 0; y < a; y += 1) {
    if (p = t[y], b = s(p, y), v = /** @type {EachItem} */
    o.get(b).e, e.outrogroups !== null)
      for (const R of e.outrogroups)
        R.pending.delete(v), R.done.delete(v);
    if ((v.f & Y) !== 0 && (In(v), i && (v.nodes?.a?.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(v))), (v.f & Te) !== 0)
      if (v.f ^= Te, v === l)
        Pt(v, null, n);
      else {
        var z = c ? c.next : l;
        v === e.effect.last && (e.effect.last = v.prev), v.prev && (v.prev.next = v.next), v.next && (v.next.prev = v.prev), He(e, c, v), He(e, v, z), Pt(v, z, n), c = v, h = [], d = [], l = Ft(c.next);
        continue;
      }
    if (v !== l) {
      if (u !== void 0 && u.has(v)) {
        if (h.length < d.length) {
          var C = d[0], U;
          c = C.prev;
          var he = h[0], A = h[h.length - 1];
          for (U = 0; U < h.length; U += 1)
            Pt(h[U], C, n);
          for (U = 0; U < d.length; U += 1)
            u.delete(d[U]);
          He(e, he.prev, A.next), He(e, c, he), He(e, A, C), l = C, c = A, y -= 1, h = [], d = [];
        } else
          u.delete(v), Pt(v, l, n), He(e, v.prev, v.next), He(e, v, c === null ? e.effect.first : c.next), He(e, c, v), c = v;
        continue;
      }
      for (h = [], d = []; l !== null && l !== v; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(l), d.push(l), l = Ft(l.next);
      if (l === null)
        continue;
    }
    (v.f & Te) === 0 && h.push(v), c = v, l = Ft(v.next);
  }
  if (e.outrogroups !== null) {
    for (const R of e.outrogroups)
      R.pending.size === 0 && (An(e, vn(R.done)), e.outrogroups?.delete(R));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || u !== void 0) {
    var T = [];
    if (u !== void 0)
      for (v of u)
        (v.f & Y) === 0 && T.push(v);
    for (; l !== null; )
      (l.f & Y) === 0 && l !== e.fallback && T.push(l), l = Ft(l.next);
    var L = T.length;
    if (L > 0) {
      var X = (r & ur) !== 0 && a === 0 ? n : null;
      if (i) {
        for (y = 0; y < L; y += 1)
          T[y].nodes?.a?.measure();
        for (y = 0; y < L; y += 1)
          T[y].nodes?.a?.fix();
      }
      ji(e, T, X);
    }
  }
  i && at(() => {
    if (_ !== void 0)
      for (v of _)
        v.nodes?.a?.apply();
  });
}
function Ui(e, t, n, r, s, i, a, o) {
  var l = (a & Fs) !== 0 ? (a & zs) === 0 ? /* @__PURE__ */ oi(n, !1, !1) : pt(n) : null, u = (a & Ps) !== 0 ? pt(s) : null;
  return {
    v: l,
    i: u,
    e: ae(() => (i(t, l ?? n, u ?? s, o), () => {
      e.delete(r);
    }))
  };
}
function Pt(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, s = e.nodes.end, i = t && (t.f & Te) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Kt(r)
      );
      if (i.before(r), r === s)
        return;
      r = a;
    }
}
function He(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Hi(e, t) {
  wi(() => {
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
      const s = Dr("style");
      s.id = t.hash, s.textContent = t.code, r.appendChild(s);
    }
  });
}
function Xt(e, t, n, r) {
  var s = (
    /** @type {V} */
    r
  ), i = !0, a = () => (i && (i = !1, s = /** @type {V} */
  r), s), o;
  o = /** @type {V} */
  e[t], o === void 0 && r !== void 0 && (o = a());
  var l;
  return l = () => {
    var u = (
      /** @type {V} */
      e[t]
    );
    return u === void 0 ? a() : (i = !0, u);
  }, l;
}
const Bi = "5";
var fr;
typeof window < "u" && ((fr = window.__svelte ?? (window.__svelte = {})).v ?? (fr.v = /* @__PURE__ */ new Set())).add(Bi);
var Yi = /* @__PURE__ */ ke('<div class="error svelte-fq8fhm"> </div>'), Gi = /* @__PURE__ */ ke('<div class="empty svelte-fq8fhm">Loading dashboard…</div>'), Ki = /* @__PURE__ */ ke('<div class="kv svelte-fq8fhm"><span>Description</span><span> </span></div>'), Ji = /* @__PURE__ */ ke('<div class="section svelte-fq8fhm"><h3 class="svelte-fq8fhm">Realm</h3> <div class="card svelte-fq8fhm"><div class="kv svelte-fq8fhm"><span>Name</span><span class="fw svelte-fq8fhm"> </span></div> <!> <div class="kv svelte-fq8fhm"><span>Version</span><span> </span></div> <div class="kv svelte-fq8fhm"><span>Status</span><span class="green svelte-fq8fhm"> </span></div></div></div>'), Wi = /* @__PURE__ */ ke('<div class="tag svelte-fq8fhm"> </div>'), Zi = /* @__PURE__ */ ke('<div class="note svelte-fq8fhm"> </div>'), Xi = /* @__PURE__ */ ke('<div class="section svelte-fq8fhm"><h3 class="svelte-fq8fhm"> </h3> <div class="grid svelte-fq8fhm"><!> <!></div></div>'), Qi = /* @__PURE__ */ ke('<tr><td class="fw svelte-fq8fhm"> </td><td class="mono svelte-fq8fhm"> </td><td class="svelte-fq8fhm"> </td></tr>'), $i = /* @__PURE__ */ ke('<div class="section svelte-fq8fhm"><h3 class="svelte-fq8fhm">Recent Users</h3> <div class="table-wrap svelte-fq8fhm"><table class="svelte-fq8fhm"><thead><tr><th class="svelte-fq8fhm">Name</th><th class="svelte-fq8fhm">Principal</th><th class="svelte-fq8fhm">Joined</th></tr></thead><tbody></tbody></table></div></div>'), ef = /* @__PURE__ */ ke('<div class="kpi-row svelte-fq8fhm"><div class="kpi svelte-fq8fhm"><span class="kpi-label svelte-fq8fhm">Users</span><span class="kpi-val svelte-fq8fhm"> </span></div> <div class="kpi svelte-fq8fhm"><span class="kpi-label svelte-fq8fhm">Organizations</span><span class="kpi-val svelte-fq8fhm"> </span></div> <div class="kpi svelte-fq8fhm"><span class="kpi-label svelte-fq8fhm">Proposals</span><span class="kpi-val svelte-fq8fhm"> </span></div> <div class="kpi svelte-fq8fhm"><span class="kpi-label svelte-fq8fhm">Votes</span><span class="kpi-val svelte-fq8fhm"> </span></div> <div class="kpi svelte-fq8fhm"><span class="kpi-label svelte-fq8fhm">Tasks</span><span class="kpi-val svelte-fq8fhm"> </span></div> <div class="kpi svelte-fq8fhm"><span class="kpi-label svelte-fq8fhm">Transfers</span><span class="kpi-val svelte-fq8fhm"> </span></div> <div class="kpi svelte-fq8fhm"><span class="kpi-label svelte-fq8fhm">Disputes</span><span class="kpi-val svelte-fq8fhm"> </span></div> <div class="kpi svelte-fq8fhm"><span class="kpi-label svelte-fq8fhm">Extensions</span><span class="kpi-val svelte-fq8fhm"> </span></div></div> <!> <!> <!>', 1), tf = /* @__PURE__ */ ke('<div class="rt-pd svelte-fq8fhm"><div class="header svelte-fq8fhm"><h2 class="svelte-fq8fhm">Dashboard</h2> <span class="badge svelte-fq8fhm"> </span> <button class="refresh svelte-fq8fhm">↻</button></div> <!> <!></div>');
const nf = {
  hash: "svelte-fq8fhm",
  code: ".rt-pd.svelte-fq8fhm {font-family:system-ui, -apple-system, sans-serif;max-width:900px;margin:0 auto;padding:1.5rem;}.header.svelte-fq8fhm {display:flex;align-items:center;gap:0.75rem;margin-bottom:1.5rem;flex-wrap:wrap;}.header.svelte-fq8fhm h2:where(.svelte-fq8fhm) {margin:0;font-size:1.5rem;}.badge.svelte-fq8fhm {background:#e0e7ff;color:#3730a3;padding:0.15rem 0.5rem;border-radius:9999px;font-size:0.75rem;}.refresh.svelte-fq8fhm {margin-left:auto;padding:0.35rem 0.75rem;background:#f3f4f6;border:1px solid #d1d5db;border-radius:0.5rem;cursor:pointer;font-size:0.8rem;}.error.svelte-fq8fhm {background:#fef2f2;color:#991b1b;border:1px solid #fecaca;padding:0.75rem;border-radius:0.5rem;margin-bottom:1rem;}.empty.svelte-fq8fhm {color:#6b7280;text-align:center;padding:2rem;}.kpi-row.svelte-fq8fhm {display:grid;grid-template-columns:repeat(auto-fit, minmax(130px, 1fr));gap:0.75rem;margin-bottom:1.5rem;}.kpi.svelte-fq8fhm {background:#fff;border:1px solid #e5e7eb;border-radius:0.75rem;padding:0.75rem;text-align:center;}.kpi-label.svelte-fq8fhm {display:block;font-size:0.7rem;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.2rem;}.kpi-val.svelte-fq8fhm {font-size:1.5rem;font-weight:700;color:#1f2937;}.section.svelte-fq8fhm {margin-bottom:1.5rem;}.section.svelte-fq8fhm h3:where(.svelte-fq8fhm) {margin:0 0 0.75rem;font-size:1rem;}.card.svelte-fq8fhm {background:#fff;border:1px solid #e5e7eb;border-radius:0.75rem;padding:1rem;}.kv.svelte-fq8fhm {display:flex;justify-content:space-between;padding:0.35rem 0;border-bottom:1px solid #f3f4f6;font-size:0.85rem;}.fw.svelte-fq8fhm {font-weight:500;}.green.svelte-fq8fhm {color:#16a34a;}.mono.svelte-fq8fhm {font-family:ui-monospace, monospace;font-size:0.75rem;}.grid.svelte-fq8fhm {display:flex;flex-wrap:wrap;gap:0.35rem;}.tag.svelte-fq8fhm {background:#f0fdf4;color:#166534;padding:0.2rem 0.5rem;border-radius:0.375rem;font-size:0.75rem;border:1px solid #bbf7d0;}.note.svelte-fq8fhm {color:#9ca3af;font-size:0.75rem;padding:0.25rem;}.table-wrap.svelte-fq8fhm {overflow-x:auto;}table.svelte-fq8fhm {width:100%;border-collapse:collapse;font-size:0.8rem;}th.svelte-fq8fhm {text-align:left;padding:0.5rem;border-bottom:2px solid #e5e7eb;color:#6b7280;font-weight:500;}td.svelte-fq8fhm {padding:0.4rem 0.5rem;border-bottom:1px solid #f3f4f6;}"
};
function rf(e, t) {
  dr(t, !0), Hi(e, nf), Xt(t, "extensionId", 3, "public_dashboard");
  let n = Xt(t, "version", 3, "");
  Xt(t, "principal", 3, ""), Xt(t, "isAuthenticated", 3, !0);
  let r = /* @__PURE__ */ J(null), s = /* @__PURE__ */ J(null), i = /* @__PURE__ */ J(et([])), a = /* @__PURE__ */ J(et([])), o = /* @__PURE__ */ J(!0), l = /* @__PURE__ */ J("");
  async function u(A, T = 0, L = 10, X = "desc") {
    const R = await t.backend.get_objects_paginated(A, T, L, X), Ze = typeof R == "string" ? JSON.parse(R) : R;
    return Ze?.data ?? (Array.isArray(Ze) ? Ze : []);
  }
  async function c() {
    B(o, !0), B(l, "");
    try {
      const A = await t.backend.status(), T = typeof A == "string" ? JSON.parse(A) : A;
      B(r, T?.data?.status ?? T, !0);
      const [L, X, R] = await Promise.all([
        u("Realm", 0, 1, "asc").catch(() => []),
        u("Zone", 0, 100, "asc").catch(() => []),
        u("User", 0, 8, "desc").catch(() => [])
      ]);
      B(s, L[0] ?? null, !0), B(i, X, !0), B(a, R, !0);
    } catch (A) {
      B(l, A?.message || String(A), !0);
    } finally {
      B(o, !1);
    }
  }
  mi(() => {
    c();
  });
  function _(A) {
    const T = g(r)?.[A];
    return T == null ? "—" : String(T).replace(/"/g, "");
  }
  var h = tf(), d = m(h), p = E(m(d), 2), b = m(p), v = E(p, 2), y = E(d, 2);
  {
    var z = (A) => {
      var T = Yi(), L = m(T);
      Me(() => O(L, g(l))), me(A, T);
    };
    $e(y, (A) => {
      g(l) && A(z);
    });
  }
  var C = E(y, 2);
  {
    var U = (A) => {
      var T = Gi();
      me(A, T);
    }, he = (A) => {
      var T = ef(), L = vi(T), X = m(L), R = E(m(X)), Ze = m(R), Wt = E(X, 2), Kr = E(m(Wt)), Jr = m(Kr), Ln = E(Wt, 2), Wr = E(m(Ln)), Zr = m(Wr), jn = E(Ln, 2), Xr = E(m(jn)), Qr = m(Xr), Vn = E(jn, 2), $r = E(m(Vn)), es = m($r), Un = E(Vn, 2), ts = E(m(Un)), ns = m(ts), Hn = E(Un, 2), rs = E(m(Hn)), ss = m(rs), is = E(Hn, 2), fs = E(m(is)), ls = m(fs), Bn = E(L, 2);
      {
        var as = (Q) => {
          var Ee = Ji(), je = E(m(Ee), 2), Ve = m(je), Xe = E(m(Ve)), Ue = m(Xe), $ = E(Ve, 2);
          {
            var mt = (Ot) => {
              var Gn = Ki(), vs = E(m(Gn)), ds = m(vs);
              Me(() => O(ds, g(s).description || g(r)?.realm_description)), me(Ot, Gn);
            };
            $e($, (Ot) => {
              (g(s).description || g(r)?.realm_description) && Ot(mt);
            });
          }
          var G = E($, 2), pe = E(m(G)), Ce = m(pe), Mt = E(G, 2), Dt = E(m(Mt)), hn = m(Dt);
          Me(() => {
            O(Ue, g(s).name || g(r)?.realm_name || "—"), O(Ce, g(r)?.version || "—"), O(hn, g(r)?.status || "—");
          }), me(Q, Ee);
        };
        $e(Bn, (Q) => {
          g(s) && Q(as);
        });
      }
      var Yn = E(Bn, 2);
      {
        var os = (Q) => {
          var Ee = Xi(), je = m(Ee), Ve = m(je), Xe = E(je, 2), Ue = m(Xe);
          ir(Ue, 17, () => g(i).slice(0, 20), (G) => G.id || G.name, (G, pe) => {
            var Ce = Wi(), Mt = m(Ce);
            Me((Dt) => O(Mt, Dt), [
              () => g(pe).name || g(pe).h3_index || g(pe).id || JSON.stringify(g(pe))
            ]), me(G, Ce);
          });
          var $ = E(Ue, 2);
          {
            var mt = (G) => {
              var pe = Zi(), Ce = m(pe);
              Me(() => O(Ce, `+${g(i).length - 20} more`)), me(G, pe);
            };
            $e($, (G) => {
              g(i).length > 20 && G(mt);
            });
          }
          Me(() => O(Ve, `Zones (${g(i).length ?? ""})`)), me(Q, Ee);
        };
        $e(Yn, (Q) => {
          g(i).length > 0 && Q(os);
        });
      }
      var us = E(Yn, 2);
      {
        var cs = (Q) => {
          var Ee = $i(), je = E(m(Ee), 2), Ve = m(je), Xe = E(m(Ve));
          ir(Xe, 21, () => g(a), Li, (Ue, $) => {
            var mt = Qi(), G = m(mt), pe = m(G), Ce = E(G), Mt = m(Ce), Dt = E(Ce), hn = m(Dt);
            Me(
              (Ot) => {
                O(pe, g($).name || g($).username || "—"), O(Mt, `${Ot ?? ""}…`), O(hn, g($).created_at || g($).joined || "—");
              },
              [() => (g($).principal || g($).id || "").slice(0, 16)]
            ), me(Ue, mt);
          }), me(Q, Ee);
        };
        $e(us, (Q) => {
          g(a).length > 0 && Q(cs);
        });
      }
      Me(
        (Q, Ee, je, Ve, Xe, Ue, $) => {
          O(Ze, Q), O(Jr, Ee), O(Zr, je), O(Qr, Ve), O(es, Xe), O(ns, Ue), O(ss, $), O(ls, (g(r)?.extensions ?? []).length);
        },
        [
          () => _("users_count"),
          () => _("organizations_count"),
          () => _("proposals_count"),
          () => _("votes_count"),
          () => _("tasks_count"),
          () => _("transfers_count"),
          () => _("disputes_count")
        ]
      ), me(A, T);
    };
    $e(C, (A) => {
      g(o) ? A(U) : A(he, -1);
    });
  }
  Me(() => {
    O(b, `v${n() ?? ""}`), v.disabled = g(o);
  }), Ri("click", v, c), me(e, h), hr();
}
Ci(["click"]);
function lf(e, t) {
  const n = Fi(rf, { target: e, props: t });
  return {
    unmount() {
      try {
        Ii(n);
      } catch {
      }
    }
  };
}
export {
  lf as default
};
