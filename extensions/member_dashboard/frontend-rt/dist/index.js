var ri = Object.defineProperty;
var Gr = (e) => {
  throw TypeError(e);
};
var ni = (e, t, r) => t in e ? ri(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var pe = (e, t, r) => ni(e, typeof t != "symbol" ? t + "" : t, r), wr = (e, t, r) => t.has(e) || Gr("Cannot " + r);
var l = (e, t, r) => (wr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), m = (e, t, r) => t.has(e) ? Gr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), b = (e, t, r, n) => (wr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), N = (e, t, r) => (wr(e, t, "access private method"), r);
var un = Array.isArray, ii = Array.prototype.indexOf, Nt = Array.prototype.includes, hr = Array.from, si = Object.defineProperty, jt = Object.getOwnPropertyDescriptor, li = Object.prototype, fi = Array.prototype, ai = Object.getPrototypeOf, Jr = Object.isExtensible;
const oi = () => {
};
function ui(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function cn() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
function Kr(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const q = 2, Ct = 4, _r = 8, dn = 1 << 24, Te = 16, be = 32, Ke = 64, kr = 128, ue = 512, F = 1024, j = 2048, Ae = 4096, J = 8192, ce = 16384, mt = 32768, Wr = 1 << 25, Mt = 65536, xr = 1 << 17, ci = 1 << 18, Ft = 1 << 19, di = 1 << 20, Se = 1 << 25, ht = 65536, ar = 1 << 21, Vt = 1 << 22, Je = 1 << 23, br = Symbol("$state"), Fe = new class extends Error {
  constructor() {
    super(...arguments);
    pe(this, "name", "StaleReactionError");
    pe(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function vi() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function hi(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function _i(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function pi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function mi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function gi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function wi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function bi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function yi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ei() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ki = 1, xi = 2, vn = 4, Si = 8, Ti = 16, Ai = 1, Ni = 2, z = Symbol(), Ci = "http://www.w3.org/1999/xhtml";
function Mi() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ri() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function hn(e) {
  return e === this.v;
}
function Oi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function _n(e) {
  return !Oi(e, this.v);
}
let ve = null;
function Rt(e) {
  ve = e;
}
function pn(e, t = !1, r) {
  ve = {
    p: ve,
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
function mn(e) {
  var t = (
    /** @type {ComponentContext} */
    ve
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      zn(n);
  }
  return t.i = !0, ve = t.p, /** @type {T} */
  {};
}
function gn() {
  return !0;
}
let bt = [];
function Di() {
  var e = bt;
  bt = [], ui(e);
}
function ot(e) {
  if (bt.length === 0) {
    var t = bt;
    queueMicrotask(() => {
      t === bt && Di();
    });
  }
  bt.push(e);
}
function wn(e) {
  var t = x;
  if (t === null)
    return k.f |= Je, e;
  if ((t.f & mt) === 0 && (t.f & Ct) === 0)
    throw e;
  Ge(e, t);
}
function Ge(e, t) {
  for (; t !== null; ) {
    if ((t.f & kr) !== 0) {
      if ((t.f & mt) === 0)
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
const Fi = -7169;
function R(e, t) {
  e.f = e.f & Fi | t;
}
function Ir(e) {
  (e.f & ue) !== 0 || e.deps === null ? R(e, F) : R(e, Ae);
}
function bn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & q) === 0 || (t.f & ht) === 0 || (t.f ^= ht, bn(
        /** @type {Derived} */
        t.deps
      ));
}
function yn(e, t, r) {
  (e.f & j) !== 0 ? t.add(e) : (e.f & Ae) !== 0 && r.add(e), bn(e.deps), R(e, F);
}
const et = /* @__PURE__ */ new Set();
let S = null, ge = null, Sr = null, yr = !1, yt = null, tr = null;
var Xr = 0;
let Ii = 1;
var kt, xt, it, Ie, Ee, Bt, te, Ut, Ue, Pe, ke, St, Tt, st, D, rr, En, nr, Tr, ir, Pi;
const cr = class cr {
  constructor() {
    m(this, D);
    pe(this, "id", Ii++);
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
    m(this, kt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, xt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    m(this, it, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    m(this, Ie, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    m(this, Ee, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    m(this, Bt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    m(this, te, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    m(this, Ut, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    m(this, Ue, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    m(this, Pe, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    m(this, ke, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    m(this, St, /* @__PURE__ */ new Set());
    pe(this, "is_fork", !1);
    m(this, Tt, !1);
    /** @type {Set<Batch>} */
    m(this, st, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, ke).has(t) || l(this, ke).set(t, { d: [], m: [] }), l(this, St).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = l(this, ke).get(t);
    if (n) {
      l(this, ke).delete(t);
      for (var i of n.d)
        R(i, j), r(i);
      for (i of n.m)
        R(i, Ae), r(i);
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
    t.v !== z && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Je) === 0 && (this.current.set(t, [r, n]), ge?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    S = this;
  }
  deactivate() {
    S = null, ge = null;
  }
  flush() {
    try {
      yr = !0, S = this, N(this, D, nr).call(this);
    } finally {
      Xr = 0, Sr = null, yt = null, tr = null, yr = !1, S = null, ge = null, ut.clear();
    }
  }
  discard() {
    for (const t of l(this, xt)) t(this);
    l(this, xt).clear(), l(this, it).clear(), et.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, Ut).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = l(this, Ie).get(r) ?? 0;
    if (l(this, Ie).set(r, n + 1), t) {
      let i = l(this, Ee).get(r) ?? 0;
      l(this, Ee).set(r, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let i = l(this, Ie).get(r) ?? 0;
    if (i === 1 ? l(this, Ie).delete(r) : l(this, Ie).set(r, i - 1), t) {
      let s = l(this, Ee).get(r) ?? 0;
      s === 1 ? l(this, Ee).delete(r) : l(this, Ee).set(r, s - 1);
    }
    l(this, Tt) || n || (b(this, Tt, !0), ot(() => {
      b(this, Tt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      l(this, Ue).add(n);
    for (const n of r)
      l(this, Pe).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, kt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, xt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    l(this, it).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, it)) t(this);
    l(this, it).clear();
  }
  settled() {
    return (l(this, Bt) ?? b(this, Bt, cn())).promise;
  }
  static ensure() {
    if (S === null) {
      const t = S = new cr();
      yr || (et.add(S), ot(() => {
        S === t && t.flush();
      }));
    }
    return S;
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
    if (Sr = t, t.b?.is_pending && (t.f & (Ct | _r | dn)) !== 0 && (t.f & mt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (yt !== null && r === x && (k === null || (k.f & q) === 0))
        return;
      if ((n & (Ke | be)) !== 0) {
        if ((n & F) === 0)
          return;
        r.f ^= F;
      }
    }
    l(this, te).push(r);
  }
};
kt = new WeakMap(), xt = new WeakMap(), it = new WeakMap(), Ie = new WeakMap(), Ee = new WeakMap(), Bt = new WeakMap(), te = new WeakMap(), Ut = new WeakMap(), Ue = new WeakMap(), Pe = new WeakMap(), ke = new WeakMap(), St = new WeakMap(), Tt = new WeakMap(), st = new WeakMap(), D = new WeakSet(), rr = function() {
  return this.is_fork || l(this, Ee).size > 0;
}, En = function() {
  for (const n of l(this, st))
    for (const i of l(n, Ee).keys()) {
      for (var t = !1, r = i; r.parent !== null; ) {
        if (l(this, ke).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, nr = function() {
  var o;
  if (Xr++ > 1e3 && (et.delete(this), zi()), !N(this, D, rr).call(this)) {
    for (const f of l(this, Ue))
      l(this, Pe).delete(f), R(f, j), this.schedule(f);
    for (const f of l(this, Pe))
      R(f, Ae), this.schedule(f);
  }
  const t = l(this, te);
  b(this, te, []), this.apply();
  var r = yt = [], n = [], i = tr = [];
  for (const f of t)
    try {
      N(this, D, Tr).call(this, f, r, n);
    } catch (u) {
      throw Sn(f), u;
    }
  if (S = null, i.length > 0) {
    var s = cr.ensure();
    for (const f of i)
      s.schedule(f);
  }
  if (yt = null, tr = null, N(this, D, rr).call(this) || N(this, D, En).call(this)) {
    N(this, D, ir).call(this, n), N(this, D, ir).call(this, r);
    for (const [f, u] of l(this, ke))
      xn(f, u);
  } else {
    l(this, Ie).size === 0 && et.delete(this), l(this, Ue).clear(), l(this, Pe).clear();
    for (const f of l(this, kt)) f(this);
    l(this, kt).clear(), Zr(n), Zr(r), l(this, Bt)?.resolve();
  }
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    S
  );
  if (l(this, te).length > 0) {
    const f = a ?? (a = this);
    l(f, te).push(...l(this, te).filter((u) => !l(f, te).includes(u)));
  }
  a !== null && (et.add(a), N(o = a, D, nr).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Tr = function(t, r, n) {
  t.f ^= F;
  for (var i = t.first; i !== null; ) {
    var s = i.f, a = (s & (be | Ke)) !== 0, o = a && (s & F) !== 0, f = o || (s & J) !== 0 || l(this, ke).has(i);
    if (!f && i.fn !== null) {
      a ? i.f ^= F : (s & Ct) !== 0 ? r.push(i) : Xt(i) && ((s & Te) !== 0 && l(this, Pe).add(i), Dt(i));
      var u = i.first;
      if (u !== null) {
        i = u;
        continue;
      }
    }
    for (; i !== null; ) {
      var c = i.next;
      if (c !== null) {
        i = c;
        break;
      }
      i = i.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
ir = function(t) {
  for (var r = 0; r < t.length; r += 1)
    yn(t[r], l(this, Ue), l(this, Pe));
}, Pi = function() {
  var c, p, _;
  for (const v of et) {
    var t = v.id < this.id, r = [];
    for (const [h, [w, d]] of this.current) {
      if (v.current.has(h)) {
        var n = (
          /** @type {[any, boolean]} */
          v.current.get(h)[0]
        );
        if (t && w !== n)
          v.current.set(h, [w, d]);
        else
          continue;
      }
      r.push(h);
    }
    var i = [...v.current.keys()].filter((h) => !this.current.has(h));
    if (i.length === 0)
      t && v.discard();
    else if (r.length > 0) {
      if (t)
        for (const h of l(this, St))
          v.unskip_effect(h, (w) => {
            var d;
            (w.f & (Te | Vt)) !== 0 ? v.schedule(w) : N(d = v, D, ir).call(d, [w]);
          });
      v.activate();
      var s = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
      for (var o of r)
        kn(o, i, s, a);
      a = /* @__PURE__ */ new Map();
      var f = [...v.current.keys()].filter(
        (h) => this.current.has(h) ? (
          /** @type {[any, boolean]} */
          this.current.get(h)[0] !== h
        ) : !0
      );
      for (const h of l(this, Ut))
        (h.f & (ce | J | xr)) === 0 && Pr(h, f, a) && ((h.f & (Vt | Te)) !== 0 ? (R(h, j), v.schedule(h)) : l(v, Ue).add(h));
      if (l(v, te).length > 0) {
        v.apply();
        for (var u of l(v, te))
          N(c = v, D, Tr).call(c, u, [], []);
        b(v, te, []);
      }
      v.deactivate();
    }
  }
  for (const v of et)
    l(v, st).has(this) && (l(v, st).delete(this), l(v, st).size === 0 && !N(p = v, D, rr).call(p) && (v.activate(), N(_ = v, D, nr).call(_)));
};
let _t = cr;
function zi() {
  try {
    gi();
  } catch (e) {
    Ge(e, Sr);
  }
}
let De = null;
function Zr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (ce | J)) === 0 && Xt(n) && (De = /* @__PURE__ */ new Set(), Dt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && jn(n), De?.size > 0)) {
        ut.clear();
        for (const i of De) {
          if ((i.f & (ce | J)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            De.has(a) && (De.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const f = s[o];
            (f.f & (ce | J)) === 0 && Dt(f);
          }
        }
        De.clear();
      }
    }
    De = null;
  }
}
function kn(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & q) !== 0 ? kn(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (s & (Vt | Te)) !== 0 && (s & j) === 0 && Pr(i, t, n) && (R(i, j), zr(
        /** @type {Effect} */
        i
      ));
    }
}
function Pr(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Nt.call(t, i))
        return !0;
      if ((i.f & q) !== 0 && Pr(
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
function zr(e) {
  S.schedule(e);
}
function xn(e, t) {
  if (!((e.f & be) !== 0 && (e.f & F) !== 0)) {
    (e.f & j) !== 0 ? t.d.push(e) : (e.f & Ae) !== 0 && t.m.push(e), R(e, F);
    for (var r = e.first; r !== null; )
      xn(r, t), r = r.next;
  }
}
function Sn(e) {
  R(e, F);
  for (var t = e.first; t !== null; )
    Sn(t), t = t.next;
}
function Li(e) {
  let t = 0, r = pt(0), n;
  return () => {
    qr() && (g(r), os(() => (t === 0 && (n = hs(() => e(() => qt(r)))), t += 1, () => {
      ot(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, qt(r));
      });
    })));
  };
}
var ji = Mt | Ft;
function qi(e, t, r, n) {
  new Vi(e, t, r, n);
}
var le, Fr, fe, lt, X, ae, Y, re, ze, ft, Ye, At, Yt, Gt, Le, dr, M, Hi, Bi, Ui, Ar, sr, lr, Nr, Cr;
class Vi {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    m(this, M);
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
    m(this, le);
    /** @type {TemplateNode | null} */
    m(this, Fr, null);
    /** @type {BoundaryProps} */
    m(this, fe);
    /** @type {((anchor: Node) => void)} */
    m(this, lt);
    /** @type {Effect} */
    m(this, X);
    /** @type {Effect | null} */
    m(this, ae, null);
    /** @type {Effect | null} */
    m(this, Y, null);
    /** @type {Effect | null} */
    m(this, re, null);
    /** @type {DocumentFragment | null} */
    m(this, ze, null);
    m(this, ft, 0);
    m(this, Ye, 0);
    m(this, At, !1);
    /** @type {Set<Effect>} */
    m(this, Yt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    m(this, Gt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    m(this, Le, null);
    m(this, dr, Li(() => (b(this, Le, pt(l(this, ft))), () => {
      b(this, Le, null);
    })));
    b(this, le, t), b(this, fe, r), b(this, lt, (s) => {
      var a = (
        /** @type {Effect} */
        x
      );
      a.b = this, a.f |= kr, n(s);
    }), this.parent = /** @type {Effect} */
    x.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), b(this, X, Vr(() => {
      N(this, M, Ar).call(this);
    }, ji));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    yn(t, l(this, Yt), l(this, Gt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, fe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    N(this, M, Nr).call(this, t, r), b(this, ft, l(this, ft) + t), !(!l(this, Le) || l(this, At)) && (b(this, At, !0), ot(() => {
      b(this, At, !1), l(this, Le) && Ot(l(this, Le), l(this, ft));
    }));
  }
  get_effect_pending() {
    return l(this, dr).call(this), g(
      /** @type {Source<number>} */
      l(this, Le)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, fe).onerror && !l(this, fe).failed)
      throw t;
    S?.is_fork ? (l(this, ae) && S.skip_effect(l(this, ae)), l(this, Y) && S.skip_effect(l(this, Y)), l(this, re) && S.skip_effect(l(this, re)), S.on_fork_commit(() => {
      N(this, M, Cr).call(this, t);
    })) : N(this, M, Cr).call(this, t);
  }
}
le = new WeakMap(), Fr = new WeakMap(), fe = new WeakMap(), lt = new WeakMap(), X = new WeakMap(), ae = new WeakMap(), Y = new WeakMap(), re = new WeakMap(), ze = new WeakMap(), ft = new WeakMap(), Ye = new WeakMap(), At = new WeakMap(), Yt = new WeakMap(), Gt = new WeakMap(), Le = new WeakMap(), dr = new WeakMap(), M = new WeakSet(), Hi = function() {
  try {
    b(this, ae, oe(() => l(this, lt).call(this, l(this, le))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Bi = function(t) {
  const r = l(this, fe).failed;
  r && b(this, re, oe(() => {
    r(
      l(this, le),
      () => t,
      () => () => {
      }
    );
  }));
}, Ui = function() {
  const t = l(this, fe).pending;
  t && (this.is_pending = !0, b(this, Y, oe(() => t(l(this, le)))), ot(() => {
    var r = b(this, ze, document.createDocumentFragment()), n = ct();
    r.append(n), b(this, ae, N(this, M, lr).call(this, () => oe(() => l(this, lt).call(this, n)))), l(this, Ye) === 0 && (l(this, le).before(r), b(this, ze, null), dt(
      /** @type {Effect} */
      l(this, Y),
      () => {
        b(this, Y, null);
      }
    ), N(this, M, sr).call(
      this,
      /** @type {Batch} */
      S
    ));
  }));
}, Ar = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), b(this, Ye, 0), b(this, ft, 0), b(this, ae, oe(() => {
      l(this, lt).call(this, l(this, le));
    })), l(this, Ye) > 0) {
      var t = b(this, ze, document.createDocumentFragment());
      Ur(l(this, ae), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        l(this, fe).pending
      );
      b(this, Y, oe(() => r(l(this, le))));
    } else
      N(this, M, sr).call(
        this,
        /** @type {Batch} */
        S
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
sr = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, Yt), l(this, Gt));
}, /**
 * @template T
 * @param {() => T} fn
 */
lr = function(t) {
  var r = x, n = k, i = ve;
  Ne(l(this, X)), he(l(this, X)), Rt(l(this, X).ctx);
  try {
    return _t.ensure(), t();
  } catch (s) {
    return wn(s), null;
  } finally {
    Ne(r), he(n), Rt(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Nr = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && N(n = this.parent, M, Nr).call(n, t, r);
    return;
  }
  b(this, Ye, l(this, Ye) + t), l(this, Ye) === 0 && (N(this, M, sr).call(this, r), l(this, Y) && dt(l(this, Y), () => {
    b(this, Y, null);
  }), l(this, ze) && (l(this, le).before(l(this, ze)), b(this, ze, null)));
}, /**
 * @param {unknown} error
 */
Cr = function(t) {
  l(this, ae) && (Q(l(this, ae)), b(this, ae, null)), l(this, Y) && (Q(l(this, Y)), b(this, Y, null)), l(this, re) && (Q(l(this, re)), b(this, re, null));
  var r = l(this, fe).onerror;
  let n = l(this, fe).failed;
  var i = !1, s = !1;
  const a = () => {
    if (i) {
      Ri();
      return;
    }
    i = !0, s && Ei(), l(this, re) !== null && dt(l(this, re), () => {
      b(this, re, null);
    }), N(this, M, lr).call(this, () => {
      N(this, M, Ar).call(this);
    });
  }, o = (f) => {
    try {
      s = !0, r?.(f, a), s = !1;
    } catch (u) {
      Ge(u, l(this, X) && l(this, X).parent);
    }
    n && b(this, re, N(this, M, lr).call(this, () => {
      try {
        return oe(() => {
          var u = (
            /** @type {Effect} */
            x
          );
          u.b = this, u.f |= kr, n(
            l(this, le),
            () => f,
            () => a
          );
        });
      } catch (u) {
        return Ge(
          u,
          /** @type {Effect} */
          l(this, X).parent
        ), null;
      }
    }));
  };
  ot(() => {
    var f;
    try {
      f = this.transform_error(t);
    } catch (u) {
      Ge(u, l(this, X) && l(this, X).parent);
      return;
    }
    f !== null && typeof f == "object" && typeof /** @type {any} */
    f.then == "function" ? f.then(
      o,
      /** @param {unknown} e */
      (u) => Ge(u, l(this, X) && l(this, X).parent)
    ) : o(f);
  });
};
function Yi(e, t, r, n) {
  const i = Lr;
  var s = e.filter((_) => !_.settled);
  if (r.length === 0 && s.length === 0) {
    n(t.map(i));
    return;
  }
  var a = (
    /** @type {Effect} */
    x
  ), o = Gi(), f = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((_) => _.promise)) : null;
  function u(_) {
    o();
    try {
      n(_);
    } catch (v) {
      (a.f & ce) === 0 && Ge(v, a);
    }
    or();
  }
  if (r.length === 0) {
    f.then(() => u(t.map(i)));
    return;
  }
  var c = Tn();
  function p() {
    Promise.all(r.map((_) => /* @__PURE__ */ Ji(_))).then((_) => u([...t.map(i), ..._])).catch((_) => Ge(_, a)).finally(() => c());
  }
  f ? f.then(() => {
    o(), p(), or();
  }) : p();
}
function Gi() {
  var e = (
    /** @type {Effect} */
    x
  ), t = k, r = ve, n = (
    /** @type {Batch} */
    S
  );
  return function(s = !0) {
    Ne(e), he(t), Rt(r), s && (e.f & ce) === 0 && (n?.activate(), n?.apply());
  };
}
function or(e = !0) {
  Ne(null), he(null), Rt(null), e && S?.deactivate();
}
function Tn() {
  var e = (
    /** @type {Effect} */
    x
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    S
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (i = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function Lr(e) {
  var t = q | j;
  return x !== null && (x.f |= Ft), {
    ctx: ve,
    deps: null,
    effects: null,
    equals: hn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      z
    ),
    wv: 0,
    parent: x,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ji(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    x
  );
  n === null && vi();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = pt(
    /** @type {V} */
    z
  ), a = !k, o = /* @__PURE__ */ new Map();
  return as(() => {
    var f = (
      /** @type {Effect} */
      x
    ), u = cn();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(or);
    } catch (v) {
      u.reject(v), or();
    }
    var c = (
      /** @type {Batch} */
      S
    );
    if (a) {
      if ((f.f & mt) !== 0)
        var p = Tn();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        o.get(c)?.reject(Fe), o.delete(c);
      else {
        for (const v of o.values())
          v.reject(Fe);
        o.clear();
      }
      o.set(c, u);
    }
    const _ = (v, h = void 0) => {
      if (p) {
        var w = h === Fe;
        p(w);
      }
      if (!(h === Fe || (f.f & ce) !== 0)) {
        if (c.activate(), h)
          s.f |= Je, Ot(s, h);
        else {
          (s.f & Je) !== 0 && (s.f ^= Je), Ot(s, v);
          for (const [d, y] of o) {
            if (o.delete(d), d === c) break;
            y.reject(Fe);
          }
        }
        c.deactivate();
      }
    };
    u.promise.then(_, (v) => _(null, v || "unknown"));
  }), is(() => {
    for (const f of o.values())
      f.reject(Fe);
  }), new Promise((f) => {
    function u(c) {
      function p() {
        c === i ? f(s) : u(i);
      }
      c.then(p, p);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
  const t = /* @__PURE__ */ Lr(e);
  return Hn(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ki(e) {
  const t = /* @__PURE__ */ Lr(e);
  return t.equals = _n, t;
}
function Wi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Q(
        /** @type {Effect} */
        t[r]
      );
  }
}
function jr(e) {
  var t, r = x, n = e.parent;
  if (!We && n !== null && (n.f & (ce | J)) !== 0)
    return Mi(), e.v;
  Ne(n);
  try {
    e.f &= ~ht, Wi(e), t = Gn(e);
  } finally {
    Ne(r);
  }
  return t;
}
function An(e) {
  var t = jr(e);
  if (!e.equals(t) && (e.wv = Un(), (!S?.is_fork || e.deps === null) && (S !== null ? S.capture(e, t, !0) : e.v = t, e.deps === null))) {
    R(e, F);
    return;
  }
  We || (ge !== null ? (qr() || S?.is_fork) && ge.set(e, t) : Ir(e));
}
function Xi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Fe), t.teardown = oi, t.ac = null, Ht(t, 0), Hr(t));
}
function Nn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Dt(t);
}
let Mr = /* @__PURE__ */ new Set();
const ut = /* @__PURE__ */ new Map();
let Cn = !1;
function pt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: hn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function ie(e, t) {
  const r = pt(e);
  return Hn(r), r;
}
// @__NO_SIDE_EFFECTS__
function Zi(e, t = !1, r = !0) {
  const n = pt(e);
  return t || (n.equals = _n), n;
}
function G(e, t, r = !1) {
  k !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!we || (k.f & xr) !== 0) && gn() && (k.f & (q | Te | Vt | xr)) !== 0 && (de === null || !Nt.call(de, e)) && yi();
  let n = r ? Et(t) : t;
  return Ot(e, n, tr);
}
function Ot(e, t, r = null) {
  if (!e.equals(t)) {
    ut.set(e, We ? t : e.v);
    var n = _t.ensure();
    if (n.capture(e, t), (e.f & q) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & j) !== 0 && jr(i), ge === null && Ir(i);
    }
    e.wv = Un(), Mn(e, j, r), x !== null && (x.f & F) !== 0 && (x.f & (be | Ke)) === 0 && (se === null ? ds([e]) : se.push(e)), !n.is_fork && Mr.size > 0 && !Cn && Qi();
  }
  return t;
}
function Qi() {
  Cn = !1;
  for (const e of Mr)
    (e.f & F) !== 0 && R(e, Ae), Xt(e) && Dt(e);
  Mr.clear();
}
function qt(e) {
  G(e, e.v + 1);
}
function Mn(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var a = n[s], o = a.f, f = (o & j) === 0;
      if (f && R(a, t), (o & q) !== 0) {
        var u = (
          /** @type {Derived} */
          a
        );
        ge?.delete(u), (o & ht) === 0 && (o & ue && (x === null || (x.f & ar) === 0) && (a.f |= ht), Mn(u, Ae, r));
      } else if (f) {
        var c = (
          /** @type {Effect} */
          a
        );
        (o & Te) !== 0 && De !== null && De.add(c), r !== null ? r.push(c) : zr(c);
      }
    }
}
function Et(e) {
  if (typeof e != "object" || e === null || br in e)
    return e;
  const t = ai(e);
  if (t !== li && t !== fi)
    return e;
  var r = /* @__PURE__ */ new Map(), n = un(e), i = /* @__PURE__ */ ie(0), s = vt, a = (o) => {
    if (vt === s)
      return o();
    var f = k, u = vt;
    he(null), en(s);
    var c = o();
    return he(f), en(u), c;
  };
  return n && r.set("length", /* @__PURE__ */ ie(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && wi();
        var c = r.get(f);
        return c === void 0 ? a(() => {
          var p = /* @__PURE__ */ ie(u.value);
          return r.set(f, p), p;
        }) : G(c, u.value, !0), !0;
      },
      deleteProperty(o, f) {
        var u = r.get(f);
        if (u === void 0) {
          if (f in o) {
            const c = a(() => /* @__PURE__ */ ie(z));
            r.set(f, c), qt(i);
          }
        } else
          G(u, z), qt(i);
        return !0;
      },
      get(o, f, u) {
        if (f === br)
          return e;
        var c = r.get(f), p = f in o;
        if (c === void 0 && (!p || jt(o, f)?.writable) && (c = a(() => {
          var v = Et(p ? o[f] : z), h = /* @__PURE__ */ ie(v);
          return h;
        }), r.set(f, c)), c !== void 0) {
          var _ = g(c);
          return _ === z ? void 0 : _;
        }
        return Reflect.get(o, f, u);
      },
      getOwnPropertyDescriptor(o, f) {
        var u = Reflect.getOwnPropertyDescriptor(o, f);
        if (u && "value" in u) {
          var c = r.get(f);
          c && (u.value = g(c));
        } else if (u === void 0) {
          var p = r.get(f), _ = p?.v;
          if (p !== void 0 && _ !== z)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return u;
      },
      has(o, f) {
        if (f === br)
          return !0;
        var u = r.get(f), c = u !== void 0 && u.v !== z || Reflect.has(o, f);
        if (u !== void 0 || x !== null && (!c || jt(o, f)?.writable)) {
          u === void 0 && (u = a(() => {
            var _ = c ? Et(o[f]) : z, v = /* @__PURE__ */ ie(_);
            return v;
          }), r.set(f, u));
          var p = g(u);
          if (p === z)
            return !1;
        }
        return c;
      },
      set(o, f, u, c) {
        var p = r.get(f), _ = f in o;
        if (n && f === "length")
          for (var v = u; v < /** @type {Source<number>} */
          p.v; v += 1) {
            var h = r.get(v + "");
            h !== void 0 ? G(h, z) : v in o && (h = a(() => /* @__PURE__ */ ie(z)), r.set(v + "", h));
          }
        if (p === void 0)
          (!_ || jt(o, f)?.writable) && (p = a(() => /* @__PURE__ */ ie(void 0)), G(p, Et(u)), r.set(f, p));
        else {
          _ = p.v !== z;
          var w = a(() => Et(u));
          G(p, w);
        }
        var d = Reflect.getOwnPropertyDescriptor(o, f);
        if (d?.set && d.set.call(c, u), !_) {
          if (n && typeof f == "string") {
            var y = (
              /** @type {Source<number>} */
              r.get("length")
            ), I = Number(f);
            Number.isInteger(I) && I >= y.v && G(y, I + 1);
          }
          qt(i);
        }
        return !0;
      },
      ownKeys(o) {
        g(i);
        var f = Reflect.ownKeys(o).filter((p) => {
          var _ = r.get(p);
          return _ === void 0 || _.v !== z;
        });
        for (var [u, c] of r)
          c.v !== z && !(u in o) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        bi();
      }
    }
  );
}
var Qr, Rn, On, Dn;
function $i() {
  if (Qr === void 0) {
    Qr = window, Rn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    On = jt(t, "firstChild").get, Dn = jt(t, "nextSibling").get, Jr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Jr(r) && (r.__t = void 0);
  }
}
function ct(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ur(e) {
  return (
    /** @type {TemplateNode | null} */
    On.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
  return (
    /** @type {TemplateNode | null} */
    Dn.call(e)
  );
}
function O(e, t) {
  return /* @__PURE__ */ ur(e);
}
function es(e, t = !1) {
  {
    var r = /* @__PURE__ */ ur(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Wt(r) : r;
  }
}
function W(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Wt(n);
  return n;
}
function ts(e) {
  e.textContent = "";
}
function Fn() {
  return !1;
}
function In(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ci, e, void 0)
  );
}
function Pn(e) {
  var t = k, r = x;
  he(null), Ne(null);
  try {
    return e();
  } finally {
    he(t), Ne(r);
  }
}
function rs(e) {
  x === null && (k === null && mi(), pi()), We && _i();
}
function ns(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function je(e, t) {
  var r = x;
  r !== null && (r.f & J) !== 0 && (e |= J);
  var n = {
    ctx: ve,
    deps: null,
    nodes: null,
    f: e | j | ue,
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
  S?.register_created_effect(n);
  var i = n;
  if ((e & Ct) !== 0)
    yt !== null ? yt.push(n) : _t.ensure().schedule(n);
  else if (t !== null) {
    try {
      Dt(n);
    } catch (a) {
      throw Q(n), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Ft) === 0 && (i = i.first, (e & Te) !== 0 && (e & Mt) !== 0 && i !== null && (i.f |= Mt));
  }
  if (i !== null && (i.parent = r, r !== null && ns(i, r), k !== null && (k.f & q) !== 0 && (e & Ke) === 0)) {
    var s = (
      /** @type {Derived} */
      k
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function qr() {
  return k !== null && !we;
}
function is(e) {
  const t = je(_r, null);
  return R(t, F), t.teardown = e, t;
}
function ss(e) {
  rs();
  var t = (
    /** @type {Effect} */
    x.f
  ), r = !k && (t & be) !== 0 && (t & mt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ve
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return zn(e);
}
function zn(e) {
  return je(Ct | di, e);
}
function ls(e) {
  _t.ensure();
  const t = je(Ke | Ft, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? dt(t, () => {
      Q(t), n(void 0);
    }) : (Q(t), n(void 0));
  });
}
function fs(e) {
  return je(Ct, e);
}
function as(e) {
  return je(Vt | Ft, e);
}
function os(e, t = 0) {
  return je(_r | t, e);
}
function tt(e, t = [], r = [], n = []) {
  Yi(n, t, r, (i) => {
    je(_r, () => e(...i.map(g)));
  });
}
function Vr(e, t = 0) {
  var r = je(Te | t, e);
  return r;
}
function oe(e) {
  return je(be | Ft, e);
}
function Ln(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = We, n = k;
    $r(!0), he(null);
    try {
      t.call(null);
    } finally {
      $r(r), he(n);
    }
  }
}
function Hr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Pn(() => {
      i.abort(Fe);
    });
    var n = r.next;
    (r.f & Ke) !== 0 ? r.parent = null : Q(r, t), r = n;
  }
}
function us(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & be) === 0 && Q(t), t = r;
  }
}
function Q(e, t = !0) {
  var r = !1;
  (t || (e.f & ci) !== 0) && e.nodes !== null && e.nodes.end !== null && (cs(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), R(e, Wr), Hr(e, t && !r), Ht(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  Ln(e), e.f ^= Wr, e.f |= ce;
  var i = e.parent;
  i !== null && i.first !== null && jn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function cs(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Wt(e);
    e.remove(), e = r;
  }
}
function jn(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function dt(e, t, r = !0) {
  var n = [];
  qn(e, n, !0);
  var i = () => {
    r && Q(e), t && t();
  }, s = n.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var o of n)
      o.out(a);
  } else
    i();
}
function qn(e, t, r) {
  if ((e.f & J) === 0) {
    e.f ^= J;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if ((i.f & Ke) === 0) {
        var a = (i.f & Mt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & be) !== 0 && (e.f & Te) !== 0;
        qn(i, t, a ? r : !1);
      }
      i = s;
    }
  }
}
function Br(e) {
  Vn(e, !0);
}
function Vn(e, t) {
  if ((e.f & J) !== 0) {
    e.f ^= J, (e.f & F) === 0 && (R(e, j), _t.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Mt) !== 0 || (r.f & be) !== 0;
      Vn(r, i ? t : !1), r = n;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || t) && a.in();
  }
}
function Ur(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Wt(r);
      t.append(r), r = i;
    }
}
let fr = !1, We = !1;
function $r(e) {
  We = e;
}
let k = null, we = !1;
function he(e) {
  k = e;
}
let x = null;
function Ne(e) {
  x = e;
}
let de = null;
function Hn(e) {
  k !== null && (de === null ? de = [e] : de.push(e));
}
let Z = null, ee = 0, se = null;
function ds(e) {
  se = e;
}
let Bn = 1, rt = 0, vt = rt;
function en(e) {
  vt = e;
}
function Un() {
  return ++Bn;
}
function Xt(e) {
  var t = e.f;
  if ((t & j) !== 0)
    return !0;
  if (t & q && (e.f &= ~ht), (t & Ae) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (Xt(
        /** @type {Derived} */
        s
      ) && An(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & ue) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ge === null && R(e, F);
  }
  return !1;
}
function Yn(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(de !== null && Nt.call(de, e)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & q) !== 0 ? Yn(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? R(s, j) : (s.f & F) !== 0 && R(s, Ae), zr(
        /** @type {Effect} */
        s
      ));
    }
}
function Gn(e) {
  var w;
  var t = Z, r = ee, n = se, i = k, s = de, a = ve, o = we, f = vt, u = e.f;
  Z = /** @type {null | Value[]} */
  null, ee = 0, se = null, k = (u & (be | Ke)) === 0 ? e : null, de = null, Rt(e.ctx), we = !1, vt = ++rt, e.ac !== null && (Pn(() => {
    e.ac.abort(Fe);
  }), e.ac = null);
  try {
    e.f |= ar;
    var c = (
      /** @type {Function} */
      e.fn
    ), p = c();
    e.f |= mt;
    var _ = e.deps, v = S?.is_fork;
    if (Z !== null) {
      var h;
      if (v || Ht(e, ee), _ !== null && ee > 0)
        for (_.length = ee + Z.length, h = 0; h < Z.length; h++)
          _[ee + h] = Z[h];
      else
        e.deps = _ = Z;
      if (qr() && (e.f & ue) !== 0)
        for (h = ee; h < _.length; h++)
          ((w = _[h]).reactions ?? (w.reactions = [])).push(e);
    } else !v && _ !== null && ee < _.length && (Ht(e, ee), _.length = ee);
    if (gn() && se !== null && !we && _ !== null && (e.f & (q | Ae | j)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      se.length; h++)
        Yn(
          se[h],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (rt++, i.deps !== null)
        for (let d = 0; d < r; d += 1)
          i.deps[d].rv = rt;
      if (t !== null)
        for (const d of t)
          d.rv = rt;
      se !== null && (n === null ? n = se : n.push(.../** @type {Source[]} */
      se));
    }
    return (e.f & Je) !== 0 && (e.f ^= Je), p;
  } catch (d) {
    return wn(d);
  } finally {
    e.f ^= ar, Z = t, ee = r, se = n, k = i, de = s, Rt(a), we = o, vt = f;
  }
}
function vs(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = ii.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & q) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Z === null || !Nt.call(Z, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & ue) !== 0 && (s.f ^= ue, s.f &= ~ht), s.v !== z && Ir(s), Xi(s), Ht(s, 0);
  }
}
function Ht(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      vs(e, r[n]);
}
function Dt(e) {
  var t = e.f;
  if ((t & ce) === 0) {
    R(e, F);
    var r = x, n = fr;
    x = e, fr = !0;
    try {
      (t & (Te | dn)) !== 0 ? us(e) : Hr(e), Ln(e);
      var i = Gn(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Bn;
      var s;
    } finally {
      fr = n, x = r;
    }
  }
}
function g(e) {
  var t = e.f, r = (t & q) !== 0;
  if (k !== null && !we) {
    var n = x !== null && (x.f & ce) !== 0;
    if (!n && (de === null || !Nt.call(de, e))) {
      var i = k.deps;
      if ((k.f & ar) !== 0)
        e.rv < rt && (e.rv = rt, Z === null && i !== null && i[ee] === e ? ee++ : Z === null ? Z = [e] : Z.push(e));
      else {
        (k.deps ?? (k.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [k] : Nt.call(s, k) || s.push(k);
      }
    }
  }
  if (We && ut.has(e))
    return ut.get(e);
  if (r) {
    var a = (
      /** @type {Derived} */
      e
    );
    if (We) {
      var o = a.v;
      return ((a.f & F) === 0 && a.reactions !== null || Kn(a)) && (o = jr(a)), ut.set(a, o), o;
    }
    var f = (a.f & ue) === 0 && !we && k !== null && (fr || (k.f & ue) !== 0), u = (a.f & mt) === 0;
    Xt(a) && (f && (a.f |= ue), An(a)), f && !u && (Nn(a), Jn(a));
  }
  if (ge?.has(e))
    return ge.get(e);
  if ((e.f & Je) !== 0)
    throw e.v;
  return e.v;
}
function Jn(e) {
  if (e.f |= ue, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & q) !== 0 && (t.f & ue) === 0 && (Nn(
        /** @type {Derived} */
        t
      ), Jn(
        /** @type {Derived} */
        t
      ));
}
function Kn(e) {
  if (e.v === z) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ut.has(t) || (t.f & q) !== 0 && Kn(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function hs(e) {
  var t = we;
  try {
    return we = !0, e();
  } finally {
    we = t;
  }
}
const _s = ["touchstart", "touchmove"];
function ps(e) {
  return _s.includes(e);
}
const nt = Symbol("events"), Wn = /* @__PURE__ */ new Set(), Rr = /* @__PURE__ */ new Set();
function tn(e, t, r) {
  (t[nt] ?? (t[nt] = {}))[e] = r;
}
function ms(e) {
  for (var t = 0; t < e.length; t++)
    Wn.add(e[t]);
  for (var r of Rr)
    r(e);
}
let rn = null;
function nn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  rn = e;
  var a = 0, o = rn === e && e[nt];
  if (o) {
    var f = i.indexOf(o);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[nt] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    f <= u && (a = f);
  }
  if (s = /** @type {Element} */
  i[a] || e.target, s !== t) {
    si(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var c = k, p = x;
    he(null), Ne(null);
    try {
      for (var _, v = []; s !== null; ) {
        var h = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var w = s[nt]?.[n];
          w != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && w.call(s, e);
        } catch (d) {
          _ ? v.push(d) : _ = d;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        s = h;
      }
      if (_) {
        for (let d of v)
          queueMicrotask(() => {
            throw d;
          });
        throw _;
      }
    } finally {
      e[nt] = t, delete e.currentTarget, he(c), Ne(p);
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
function ws(e) {
  return (
    /** @type {string} */
    gs?.createHTML(e) ?? e
  );
}
function bs(e) {
  var t = In("template");
  return t.innerHTML = ws(e.replaceAll("<!>", "<!---->")), t.content;
}
function sn(e, t) {
  var r = (
    /** @type {Effect} */
    x
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function V(e, t) {
  var r = (t & Ai) !== 0, n = (t & Ni) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = bs(s ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ ur(i)));
    var a = (
      /** @type {TemplateNode} */
      n || Rn ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ur(a)
      ), f = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      sn(o, f);
    } else
      sn(a, a);
    return a;
  };
}
function L(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Oe(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function ys(e, t) {
  return Es(e, t);
}
const $t = /* @__PURE__ */ new Map();
function Es(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: a = !0, transformError: o }) {
  $i();
  var f = void 0, u = ls(() => {
    var c = r ?? t.appendChild(ct());
    qi(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (v) => {
        pn({});
        var h = (
          /** @type {ComponentContext} */
          ve
        );
        s && (h.c = s), i && (n.$$events = i), f = e(v, n) || {}, mn();
      },
      o
    );
    var p = /* @__PURE__ */ new Set(), _ = (v) => {
      for (var h = 0; h < v.length; h++) {
        var w = v[h];
        if (!p.has(w)) {
          p.add(w);
          var d = ps(w);
          for (const C of [t, document]) {
            var y = $t.get(C);
            y === void 0 && (y = /* @__PURE__ */ new Map(), $t.set(C, y));
            var I = y.get(w);
            I === void 0 ? (C.addEventListener(w, nn, { passive: d }), y.set(w, 1)) : y.set(w, I + 1);
          }
        }
      }
    };
    return _(hr(Wn)), Rr.add(_), () => {
      for (var v of p)
        for (const d of [t, document]) {
          var h = (
            /** @type {Map<string, number>} */
            $t.get(d)
          ), w = (
            /** @type {number} */
            h.get(v)
          );
          --w == 0 ? (d.removeEventListener(v, nn), h.delete(v), h.size === 0 && $t.delete(d)) : h.set(v, w);
        }
      Rr.delete(_), c !== r && c.parentNode?.removeChild(c);
    };
  });
  return Or.set(f, u), f;
}
let Or = /* @__PURE__ */ new WeakMap();
function ks(e, t) {
  const r = Or.get(e);
  return r ? (Or.delete(e), r(t)) : Promise.resolve();
}
var me, xe, ne, at, Jt, Kt, vr;
class xs {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    pe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    m(this, me, /* @__PURE__ */ new Map());
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
    m(this, xe, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    m(this, ne, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    m(this, at, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    m(this, Jt, !0);
    /**
     * @param {Batch} batch
     */
    m(this, Kt, (t) => {
      if (l(this, me).has(t)) {
        var r = (
          /** @type {Key} */
          l(this, me).get(t)
        ), n = l(this, xe).get(r);
        if (n)
          Br(n), l(this, at).delete(r);
        else {
          var i = l(this, ne).get(r);
          i && (l(this, xe).set(r, i.effect), l(this, ne).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, a] of l(this, me)) {
          if (l(this, me).delete(s), s === t)
            break;
          const o = l(this, ne).get(a);
          o && (Q(o.effect), l(this, ne).delete(a));
        }
        for (const [s, a] of l(this, xe)) {
          if (s === r || l(this, at).has(s)) continue;
          const o = () => {
            if (Array.from(l(this, me).values()).includes(s)) {
              var u = document.createDocumentFragment();
              Ur(a, u), u.append(ct()), l(this, ne).set(s, { effect: a, fragment: u });
            } else
              Q(a);
            l(this, at).delete(s), l(this, xe).delete(s);
          };
          l(this, Jt) || !n ? (l(this, at).add(s), dt(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    m(this, vr, (t) => {
      l(this, me).delete(t);
      const r = Array.from(l(this, me).values());
      for (const [n, i] of l(this, ne))
        r.includes(n) || (Q(i.effect), l(this, ne).delete(n));
    });
    this.anchor = t, b(this, Jt, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      S
    ), i = Fn();
    if (r && !l(this, xe).has(t) && !l(this, ne).has(t))
      if (i) {
        var s = document.createDocumentFragment(), a = ct();
        s.append(a), l(this, ne).set(t, {
          effect: oe(() => r(a)),
          fragment: s
        });
      } else
        l(this, xe).set(
          t,
          oe(() => r(this.anchor))
        );
    if (l(this, me).set(n, t), i) {
      for (const [o, f] of l(this, xe))
        o === t ? n.unskip_effect(f) : n.skip_effect(f);
      for (const [o, f] of l(this, ne))
        o === t ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(l(this, Kt)), n.ondiscard(l(this, vr));
    } else
      l(this, Kt).call(this, n);
  }
}
me = new WeakMap(), xe = new WeakMap(), ne = new WeakMap(), at = new WeakMap(), Jt = new WeakMap(), Kt = new WeakMap(), vr = new WeakMap();
function He(e, t, r = !1) {
  var n = new xs(e), i = r ? Mt : 0;
  function s(a, o) {
    n.ensure(a, o);
  }
  Vr(() => {
    var a = !1;
    t((o, f = 0) => {
      a = !0, s(f, o);
    }), a || s(-1, null);
  }, i);
}
function ln(e, t) {
  return t;
}
function Ss(e, t, r) {
  for (var n = [], i = t.length, s, a = t.length, o = 0; o < i; o++) {
    let p = t[o];
    dt(
      p,
      () => {
        if (s) {
          if (s.pending.delete(p), s.done.add(p), s.pending.size === 0) {
            var _ = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Dr(e, hr(s.done)), _.delete(s), _.size === 0 && (e.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var f = n.length === 0 && r !== null;
    if (f) {
      var u = (
        /** @type {Element} */
        r
      ), c = (
        /** @type {Element} */
        u.parentNode
      );
      ts(c), c.append(u), e.items.clear();
    }
    Dr(e, t, !f);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Dr(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const a of e.pending.values())
      for (const o of a)
        n.add(
          /** @type {EachItem} */
          e.items.get(o).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (n?.has(s)) {
      s.f |= Se;
      const a = document.createDocumentFragment();
      Ur(s, a);
    } else
      Q(t[i], r);
  }
}
var fn;
function Er(e, t, r, n, i, s = null) {
  var a = e, o = /* @__PURE__ */ new Map(), f = (t & vn) !== 0;
  if (f) {
    var u = (
      /** @type {Element} */
      e
    );
    a = u.appendChild(ct());
  }
  var c = null, p = /* @__PURE__ */ Ki(() => {
    var C = r();
    return un(C) ? C : C == null ? [] : hr(C);
  }), _, v = /* @__PURE__ */ new Map(), h = !0;
  function w(C) {
    (I.effect.f & ce) === 0 && (I.pending.delete(C), I.fallback = c, Ts(I, _, a, t, n), c !== null && (_.length === 0 ? (c.f & Se) === 0 ? Br(c) : (c.f ^= Se, Lt(c, null, a)) : dt(c, () => {
      c = null;
    })));
  }
  function d(C) {
    I.pending.delete(C);
  }
  var y = Vr(() => {
    _ = /** @type {V[]} */
    g(p);
    for (var C = _.length, H = /* @__PURE__ */ new Set(), _e = (
      /** @type {Batch} */
      S
    ), qe = Fn(), B = 0; B < C; B += 1) {
      var E = _[B], T = n(E, B), A = h ? null : o.get(T);
      A ? (A.v && Ot(A.v, E), A.i && Ot(A.i, B), qe && _e.unskip_effect(A.e)) : (A = As(
        o,
        h ? a : fn ?? (fn = ct()),
        E,
        T,
        B,
        i,
        t,
        r
      ), h || (A.e.f |= Se), o.set(T, A)), H.add(T);
    }
    if (C === 0 && s && !c && (h ? c = oe(() => s(a)) : (c = oe(() => s(fn ?? (fn = ct()))), c.f |= Se)), C > H.size && hi(), !h)
      if (v.set(_e, H), qe) {
        for (const [Ve, Zt] of o)
          H.has(Ve) || _e.skip_effect(Zt.e);
        _e.oncommit(w), _e.ondiscard(d);
      } else
        w(_e);
    g(p);
  }), I = { effect: y, items: o, pending: v, outrogroups: null, fallback: c };
  h = !1;
}
function zt(e) {
  for (; e !== null && (e.f & be) === 0; )
    e = e.next;
  return e;
}
function Ts(e, t, r, n, i) {
  var s = (n & Si) !== 0, a = t.length, o = e.items, f = zt(e.effect.first), u, c = null, p, _ = [], v = [], h, w, d, y;
  if (s)
    for (y = 0; y < a; y += 1)
      h = t[y], w = i(h, y), d = /** @type {EachItem} */
      o.get(w).e, (d.f & Se) === 0 && (d.nodes?.a?.measure(), (p ?? (p = /* @__PURE__ */ new Set())).add(d));
  for (y = 0; y < a; y += 1) {
    if (h = t[y], w = i(h, y), d = /** @type {EachItem} */
    o.get(w).e, e.outrogroups !== null)
      for (const A of e.outrogroups)
        A.pending.delete(d), A.done.delete(d);
    if ((d.f & J) !== 0 && (Br(d), s && (d.nodes?.a?.unfix(), (p ?? (p = /* @__PURE__ */ new Set())).delete(d))), (d.f & Se) !== 0)
      if (d.f ^= Se, d === f)
        Lt(d, null, r);
      else {
        var I = c ? c.next : f;
        d === e.effect.last && (e.effect.last = d.prev), d.prev && (d.prev.next = d.next), d.next && (d.next.prev = d.prev), Be(e, c, d), Be(e, d, I), Lt(d, I, r), c = d, _ = [], v = [], f = zt(c.next);
        continue;
      }
    if (d !== f) {
      if (u !== void 0 && u.has(d)) {
        if (_.length < v.length) {
          var C = v[0], H;
          c = C.prev;
          var _e = _[0], qe = _[_.length - 1];
          for (H = 0; H < _.length; H += 1)
            Lt(_[H], C, r);
          for (H = 0; H < v.length; H += 1)
            u.delete(v[H]);
          Be(e, _e.prev, qe.next), Be(e, c, _e), Be(e, qe, C), f = C, c = qe, y -= 1, _ = [], v = [];
        } else
          u.delete(d), Lt(d, f, r), Be(e, d.prev, d.next), Be(e, d, c === null ? e.effect.first : c.next), Be(e, c, d), c = d;
        continue;
      }
      for (_ = [], v = []; f !== null && f !== d; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(f), v.push(f), f = zt(f.next);
      if (f === null)
        continue;
    }
    (d.f & Se) === 0 && _.push(d), c = d, f = zt(d.next);
  }
  if (e.outrogroups !== null) {
    for (const A of e.outrogroups)
      A.pending.size === 0 && (Dr(e, hr(A.done)), e.outrogroups?.delete(A));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (f !== null || u !== void 0) {
    var B = [];
    if (u !== void 0)
      for (d of u)
        (d.f & J) === 0 && B.push(d);
    for (; f !== null; )
      (f.f & J) === 0 && f !== e.fallback && B.push(f), f = zt(f.next);
    var E = B.length;
    if (E > 0) {
      var T = (n & vn) !== 0 && a === 0 ? r : null;
      if (s) {
        for (y = 0; y < E; y += 1)
          B[y].nodes?.a?.measure();
        for (y = 0; y < E; y += 1)
          B[y].nodes?.a?.fix();
      }
      Ss(e, B, T);
    }
  }
  s && ot(() => {
    if (p !== void 0)
      for (d of p)
        d.nodes?.a?.apply();
  });
}
function As(e, t, r, n, i, s, a, o) {
  var f = (a & ki) !== 0 ? (a & Ti) === 0 ? /* @__PURE__ */ Zi(r, !1, !1) : pt(r) : null, u = (a & xi) !== 0 ? pt(i) : null;
  return {
    v: f,
    i: u,
    e: oe(() => (s(t, f ?? r, u ?? i, o), () => {
      e.delete(n);
    }))
  };
}
function Lt(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, s = t && (t.f & Se) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Wt(n)
      );
      if (s.before(n), n === i)
        return;
      n = a;
    }
}
function Be(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Ns(e, t) {
  fs(() => {
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
      const i = In("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
const an = [...` 	
\r\f \v\uFEFF`];
function Cs(e, t, r) {
  var n = "" + e;
  if (r) {
    for (var i of Object.keys(r))
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var s = i.length, a = 0; (a = n.indexOf(i, a)) >= 0; ) {
          var o = a + s;
          (a === 0 || an.includes(n[a - 1])) && (o === n.length || an.includes(n[o])) ? n = (a === 0 ? "" : n.substring(0, a)) + n.substring(o + 1) : a = o;
        }
  }
  return n === "" ? null : n;
}
function Ms(e, t, r, n, i, s) {
  var a = e.__className;
  if (a !== r || a === void 0) {
    var o = Cs(r, n, s);
    o == null ? e.removeAttribute("class") : e.className = o, e.__className = r;
  } else if (s && i !== s)
    for (var f in s) {
      var u = !!s[f];
      (i == null || u !== !!i[f]) && e.classList.toggle(f, u);
    }
  return s;
}
function er(e, t, r, n) {
  var i = (
    /** @type {V} */
    n
  ), s = !0, a = () => (s && (s = !1, i = /** @type {V} */
  n), i), o;
  o = /** @type {V} */
  e[t], o === void 0 && n !== void 0 && (o = a());
  var f;
  return f = () => {
    var u = (
      /** @type {V} */
      e[t]
    );
    return u === void 0 ? a() : (s = !0, u);
  }, f;
}
const Rs = "5";
var on;
typeof window < "u" && ((on = window.__svelte ?? (window.__svelte = {})).v ?? (on.v = /* @__PURE__ */ new Set())).add(Rs);
var Os = /* @__PURE__ */ V('<div class="empty svelte-1tlmor1">Please log in to view your dashboard.</div>'), Ds = /* @__PURE__ */ V('<div class="error svelte-1tlmor1"> </div>'), Fs = /* @__PURE__ */ V('<div class="empty svelte-1tlmor1">Loading dashboard…</div>'), Is = /* @__PURE__ */ V('<div class="kv svelte-1tlmor1"><span class="k svelte-1tlmor1"> </span><span class="v svelte-1tlmor1"> </span></div>'), Ps = /* @__PURE__ */ V('<div class="empty small svelte-1tlmor1">No citizenship data</div>'), zs = /* @__PURE__ */ V('<div class="section svelte-1tlmor1"><h3 class="svelte-1tlmor1">Citizenship</h3> <div class="card svelte-1tlmor1"><!> <!></div></div>'), Ls = /* @__PURE__ */ V('<div class="kv svelte-1tlmor1"><span class="k svelte-1tlmor1"> </span><span class="v svelte-1tlmor1"> </span></div>'), js = /* @__PURE__ */ V('<div class="empty small svelte-1tlmor1">No summary data</div>'), qs = /* @__PURE__ */ V('<div class="section svelte-1tlmor1"><h3 class="svelte-1tlmor1">Summary</h3> <div class="card svelte-1tlmor1"><!> <!></div></div>'), Vs = /* @__PURE__ */ V('<div class="empty svelte-1tlmor1">No notifications</div>'), Hs = /* @__PURE__ */ V('<button class="link svelte-1tlmor1">Mark read</button>'), Bs = /* @__PURE__ */ V('<p class="notif-body svelte-1tlmor1"> </p>'), Us = /* @__PURE__ */ V('<div><div class="notif-top svelte-1tlmor1"><span class="notif-title svelte-1tlmor1"> </span> <!></div> <!></div>'), Ys = /* @__PURE__ */ V('<div class="notif-list svelte-1tlmor1"></div>'), Gs = /* @__PURE__ */ V('<!> <!> <div class="section svelte-1tlmor1"><h3 class="svelte-1tlmor1"> </h3> <!></div>', 1), Js = /* @__PURE__ */ V('<div class="rt-md svelte-1tlmor1"><div class="header svelte-1tlmor1"><h2 class="svelte-1tlmor1">Member Dashboard</h2> <span class="badge svelte-1tlmor1"> </span> <button class="refresh svelte-1tlmor1">↻</button></div> <!></div>');
const Ks = {
  hash: "svelte-1tlmor1",
  code: ".rt-md.svelte-1tlmor1 {font-family:system-ui, -apple-system, sans-serif;max-width:760px;margin:0 auto;padding:1.5rem;}.header.svelte-1tlmor1 {display:flex;align-items:center;gap:0.75rem;margin-bottom:1.5rem;flex-wrap:wrap;}.header.svelte-1tlmor1 h2:where(.svelte-1tlmor1) {margin:0;font-size:1.5rem;}.badge.svelte-1tlmor1 {background:#e0e7ff;color:#3730a3;padding:0.15rem 0.5rem;border-radius:9999px;font-size:0.75rem;}.refresh.svelte-1tlmor1 {margin-left:auto;padding:0.35rem 0.75rem;background:#f3f4f6;border:1px solid #d1d5db;border-radius:0.5rem;cursor:pointer;font-size:0.8rem;}.error.svelte-1tlmor1 {background:#fef2f2;color:#991b1b;border:1px solid #fecaca;padding:0.75rem;border-radius:0.5rem;margin-bottom:1rem;}.empty.svelte-1tlmor1 {color:#6b7280;text-align:center;padding:2rem;}.empty.small.svelte-1tlmor1 {padding:0.75rem;font-size:0.8rem;}.section.svelte-1tlmor1 {margin-bottom:1.5rem;}.section.svelte-1tlmor1 h3:where(.svelte-1tlmor1) {margin:0 0 0.75rem;font-size:1rem;}.card.svelte-1tlmor1 {background:#fff;border:1px solid #e5e7eb;border-radius:0.75rem;padding:1rem 1.25rem;}.kv.svelte-1tlmor1 {display:flex;justify-content:space-between;padding:0.3rem 0;border-bottom:1px solid #f3f4f6;font-size:0.85rem;}.k.svelte-1tlmor1 {color:#6b7280;text-transform:capitalize;}.v.svelte-1tlmor1 {font-weight:500;max-width:60%;text-align:right;word-break:break-word;}.notif-list.svelte-1tlmor1 {display:flex;flex-direction:column;gap:0.5rem;}.notif.svelte-1tlmor1 {background:#fff;border:1px solid #e5e7eb;border-radius:0.5rem;padding:0.75rem 1rem;}.notif.unread.svelte-1tlmor1 {border-left:3px solid #4f46e5;}.notif-top.svelte-1tlmor1 {display:flex;justify-content:space-between;align-items:center;}.notif-title.svelte-1tlmor1 {font-weight:500;font-size:0.85rem;}.link.svelte-1tlmor1 {background:none;border:none;color:#4f46e5;cursor:pointer;font-size:0.75rem;padding:0;}.link.svelte-1tlmor1:hover {text-decoration:underline;}.notif-body.svelte-1tlmor1 {margin:0.25rem 0 0;color:#4b5563;font-size:0.8rem;line-height:1.4;}"
};
function Ws(e, t) {
  pn(t, !0), Ns(e, Ks);
  let r = er(t, "extensionId", 3, "member_dashboard"), n = er(t, "version", 3, "");
  er(t, "principal", 3, "");
  let i = er(t, "isAuthenticated", 3, !0), s = /* @__PURE__ */ ie(null), a = /* @__PURE__ */ ie(null), o = /* @__PURE__ */ ie(Et([])), f = /* @__PURE__ */ ie(!0), u = /* @__PURE__ */ ie("");
  async function c(E, T = "{}", A = r()) {
    const Ve = await t.backend.extension_sync_call(JSON.stringify({ extension_name: A, function_name: E, args: T }));
    return JSON.parse(Ve);
  }
  async function p() {
    G(f, !0), G(u, "");
    try {
      const [E, T, A] = await Promise.all([
        c("get_dashboard_summary", "{}").catch(() => null),
        c("get_citizenship_status", "{}").catch(() => null),
        c("get_notifications", "{}", "notifications").catch(() => ({ data: [] }))
      ]);
      G(s, E?.data ?? E, !0), G(a, T?.data ?? T, !0);
      const Ve = A?.data ?? A?.notifications ?? A;
      G(o, Array.isArray(Ve) ? Ve : [], !0);
    } catch (E) {
      G(u, E?.message || String(E), !0);
    } finally {
      G(f, !1);
    }
  }
  async function _(E) {
    try {
      await c("mark_as_read", JSON.stringify({ id: E, read: !0 }), "notifications"), G(o, g(o).map((T) => T.id === E ? { ...T, read: !0 } : T), !0);
    } catch {
    }
  }
  ss(() => {
    p();
  });
  function v(E) {
    return !E || typeof E != "object" ? [] : Object.entries(E).filter(([T]) => !T.startsWith("_"));
  }
  var h = Js(), w = O(h), d = W(O(w), 2), y = O(d), I = W(d, 2), C = W(w, 2);
  {
    var H = (E) => {
      var T = Os();
      L(E, T);
    }, _e = (E) => {
      var T = Ds(), A = O(T);
      tt(() => Oe(A, g(u))), L(E, T);
    }, qe = (E) => {
      var T = Fs();
      L(E, T);
    }, B = (E) => {
      var T = Gs(), A = es(T);
      {
        var Ve = (P) => {
          var ye = zs(), Xe = W(O(ye), 2), U = O(Xe);
          Er(U, 17, () => v(g(a)), ln, (K, Ce) => {
            var Qe = /* @__PURE__ */ Qt(() => Kr(g(Ce), 2));
            let It = () => g(Qe)[0], Me = () => g(Qe)[1];
            var $e = Is(), $ = O($e), Re = O($), Pt = W($), pr = O(Pt);
            tt(
              (mr, gr) => {
                Oe(Re, mr), Oe(pr, gr);
              },
              [
                () => It().replace(/_/g, " "),
                () => typeof Me() == "object" ? JSON.stringify(Me()) : Me()
              ]
            ), L(K, $e);
          });
          var Ze = W(U, 2);
          {
            var gt = (K) => {
              var Ce = Ps();
              L(K, Ce);
            }, wt = /* @__PURE__ */ Qt(() => v(g(a)).length === 0);
            He(Ze, (K) => {
              g(wt) && K(gt);
            });
          }
          L(P, ye);
        };
        He(A, (P) => {
          g(a) && P(Ve);
        });
      }
      var Zt = W(A, 2);
      {
        var Xn = (P) => {
          var ye = qs(), Xe = W(O(ye), 2), U = O(Xe);
          Er(U, 17, () => v(g(s)), ln, (K, Ce) => {
            var Qe = /* @__PURE__ */ Qt(() => Kr(g(Ce), 2));
            let It = () => g(Qe)[0], Me = () => g(Qe)[1];
            var $e = Ls(), $ = O($e), Re = O($), Pt = W($), pr = O(Pt);
            tt(
              (mr, gr) => {
                Oe(Re, mr), Oe(pr, gr);
              },
              [
                () => It().replace(/_/g, " "),
                () => typeof Me() == "object" ? JSON.stringify(Me()) : Me()
              ]
            ), L(K, $e);
          });
          var Ze = W(U, 2);
          {
            var gt = (K) => {
              var Ce = js();
              L(K, Ce);
            }, wt = /* @__PURE__ */ Qt(() => v(g(s)).length === 0);
            He(Ze, (K) => {
              g(wt) && K(gt);
            });
          }
          L(P, ye);
        };
        He(Zt, (P) => {
          g(s) && P(Xn);
        });
      }
      var Zn = W(Zt, 2), Yr = O(Zn), Qn = O(Yr), $n = W(Yr, 2);
      {
        var ei = (P) => {
          var ye = Vs();
          L(P, ye);
        }, ti = (P) => {
          var ye = Ys();
          Er(ye, 21, () => g(o).slice(0, 10), (Xe) => Xe.id, (Xe, U) => {
            var Ze = Us();
            let gt;
            var wt = O(Ze), K = O(wt), Ce = O(K), Qe = W(K, 2);
            {
              var It = ($) => {
                var Re = Hs();
                tn("click", Re, () => _(g(U).id)), L($, Re);
              };
              He(Qe, ($) => {
                g(U).read || $(It);
              });
            }
            var Me = W(wt, 2);
            {
              var $e = ($) => {
                var Re = Bs(), Pt = O(Re);
                tt(() => Oe(Pt, g(U).message || g(U).body)), L($, Re);
              };
              He(Me, ($) => {
                (g(U).message || g(U).body) && $($e);
              });
            }
            tt(() => {
              gt = Ms(Ze, 1, "notif svelte-1tlmor1", null, gt, { unread: !g(U).read }), Oe(Ce, g(U).title || g(U).type || "Notification");
            }), L(Xe, Ze);
          }), L(P, ye);
        };
        He($n, (P) => {
          g(o).length === 0 ? P(ei) : P(ti, -1);
        });
      }
      tt((P) => Oe(Qn, `Notifications (${P ?? ""} unread)`), [() => g(o).filter((P) => !P.read).length]), L(E, T);
    };
    He(C, (E) => {
      i() ? g(u) ? E(_e, 1) : g(f) ? E(qe, 2) : E(B, -1) : E(H);
    });
  }
  tt(() => {
    Oe(y, `v${n() ?? ""}`), I.disabled = g(f);
  }), tn("click", I, p), L(e, h), mn();
}
ms(["click"]);
function Qs(e, t) {
  const r = ys(Ws, { target: e, props: t });
  return {
    unmount() {
      try {
        ks(r);
      } catch {
      }
    }
  };
}
export {
  Qs as default
};
