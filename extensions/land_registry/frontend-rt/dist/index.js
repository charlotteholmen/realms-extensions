var ba = Object.defineProperty;
var ei = (e) => {
  throw TypeError(e);
};
var ya = (e, t, r) => t in e ? ba(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var De = (e, t, r) => ya(e, typeof t != "symbol" ? t + "" : t, r), cn = (e, t, r) => t.has(e) || ei("Cannot " + r);
var l = (e, t, r) => (cn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), S = (e, t, r) => t.has(e) ? ei("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), O = (e, t, r, n) => (cn(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), j = (e, t, r) => (cn(e, t, "access private method"), r);
var Mn = Array.isArray, ma = Array.prototype.indexOf, Gt = Array.prototype.includes, Kr = Array.from, wa = Object.defineProperty, dr = Object.getOwnPropertyDescriptor, xa = Object.prototype, Ea = Array.prototype, ka = Object.getPrototypeOf, ti = Object.isExtensible;
const Ta = () => {
};
function Sa(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function vi() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
function La(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const oe = 2, Wt = 4, Xr = 8, pi = 1 << 24, Ve = 16, Fe = 32, _t = 64, gn = 128, Le = 512, K = 1024, le = 2048, $e = 4096, fe = 8192, Oe = 16384, zt = 32768, bn = 1 << 25, Kt = 65536, yn = 1 << 17, Oa = 1 << 18, tr = 1 << 19, Na = 1 << 20, Be = 1 << 25, Dt = 65536, Hr = 1 << 21, _r = 1 << 22, ct = 1 << 23, Vt = Symbol("$state"), Xe = new class extends Error {
  constructor() {
    super(...arguments);
    De(this, "name", "StaleReactionError");
    De(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Aa(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ca() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Da(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ma(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ra() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function za(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Fa() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ia() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Pa() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function qa() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ja() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Ua = 1, Ba = 2, _i = 4, Va = 8, $a = 16, Ha = 1, Za = 2, ee = Symbol(), Ja = "http://www.w3.org/1999/xhtml";
function Ya() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ga() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Wa() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function hi(e) {
  return e === this.v;
}
function Ka(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function gi(e) {
  return !Ka(e, this.v);
}
let pe = null;
function Xt(e) {
  pe = e;
}
function bi(e, t = !1, r) {
  pe = {
    p: pe,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      C
    ),
    l: null
  };
}
function yi(e) {
  var t = (
    /** @type {ComponentContext} */
    pe
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      ji(n);
  }
  return t.i = !0, pe = t.p, /** @type {T} */
  {};
}
function mi() {
  return !0;
}
let wt = [];
function wi() {
  var e = wt;
  wt = [], Sa(e);
}
function vt(e) {
  if (wt.length === 0 && !cr) {
    var t = wt;
    queueMicrotask(() => {
      t === wt && wi();
    });
  }
  wt.push(e);
}
function Xa() {
  for (; wt.length > 0; )
    wi();
}
function xi(e) {
  var t = C;
  if (t === null)
    return A.f |= ct, e;
  if ((t.f & zt) === 0 && (t.f & Wt) === 0)
    throw e;
  dt(e, t);
}
function dt(e, t) {
  for (; t !== null; ) {
    if ((t.f & gn) !== 0) {
      if ((t.f & zt) === 0)
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
const Qa = -7169;
function Y(e, t) {
  e.f = e.f & Qa | t;
}
function Rn(e) {
  (e.f & Le) !== 0 || e.deps === null ? Y(e, K) : Y(e, $e);
}
function Ei(e) {
  if (e !== null)
    for (const t of e)
      (t.f & oe) === 0 || (t.f & Dt) === 0 || (t.f ^= Dt, Ei(
        /** @type {Derived} */
        t.deps
      ));
}
function ki(e, t, r) {
  (e.f & le) !== 0 ? t.add(e) : (e.f & $e) !== 0 && r.add(e), Ei(e.deps), Y(e, K);
}
const yt = /* @__PURE__ */ new Set();
let k = null, Re = null, mn = null, cr = !1, vn = !1, Bt = null, Pr = null;
var ri = 0;
let es = 1;
var $t, Ht, kt, Qe, Pe, gr, be, br, ut, et, qe, Zt, Jt, Tt, W, qr, Ti, jr, wn, Ur, ts;
const Yr = class Yr {
  constructor() {
    S(this, W);
    De(this, "id", es++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    De(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    De(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    S(this, $t, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    S(this, Ht, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    S(this, kt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    S(this, Qe, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    S(this, Pe, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    S(this, gr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    S(this, be, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    S(this, br, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    S(this, ut, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    S(this, et, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    S(this, qe, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    S(this, Zt, /* @__PURE__ */ new Set());
    De(this, "is_fork", !1);
    S(this, Jt, !1);
    /** @type {Set<Batch>} */
    S(this, Tt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    l(this, qe).has(t) || l(this, qe).set(t, { d: [], m: [] }), l(this, Zt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = l(this, qe).get(t);
    if (n) {
      l(this, qe).delete(t);
      for (var i of n.d)
        Y(i, le), r(i);
      for (i of n.m)
        Y(i, $e), r(i);
    }
    l(this, Zt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== ee && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & ct) === 0 && (this.current.set(t, [r, n]), Re?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    k = this;
  }
  deactivate() {
    k = null, Re = null;
  }
  flush() {
    try {
      vn = !0, k = this, j(this, W, jr).call(this);
    } finally {
      ri = 0, mn = null, Bt = null, Pr = null, vn = !1, k = null, Re = null, Nt.clear();
    }
  }
  discard() {
    for (const t of l(this, Ht)) t(this);
    l(this, Ht).clear(), l(this, kt).clear(), yt.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    l(this, br).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = l(this, Qe).get(r) ?? 0;
    if (l(this, Qe).set(r, n + 1), t) {
      let i = l(this, Pe).get(r) ?? 0;
      l(this, Pe).set(r, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let i = l(this, Qe).get(r) ?? 0;
    if (i === 1 ? l(this, Qe).delete(r) : l(this, Qe).set(r, i - 1), t) {
      let a = l(this, Pe).get(r) ?? 0;
      a === 1 ? l(this, Pe).delete(r) : l(this, Pe).set(r, a - 1);
    }
    l(this, Jt) || n || (O(this, Jt, !0), vt(() => {
      O(this, Jt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      l(this, ut).add(n);
    for (const n of r)
      l(this, et).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    l(this, $t).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    l(this, Ht).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    l(this, kt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of l(this, kt)) t(this);
    l(this, kt).clear();
  }
  settled() {
    return (l(this, gr) ?? O(this, gr, vi())).promise;
  }
  static ensure() {
    if (k === null) {
      const t = k = new Yr();
      vn || (yt.add(k), cr || vt(() => {
        k === t && t.flush();
      }));
    }
    return k;
  }
  apply() {
    {
      Re = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (mn = t, t.b?.is_pending && (t.f & (Wt | Xr | pi)) !== 0 && (t.f & zt) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Bt !== null && r === C && (A === null || (A.f & oe) === 0))
        return;
      if ((n & (_t | Fe)) !== 0) {
        if ((n & K) === 0)
          return;
        r.f ^= K;
      }
    }
    l(this, be).push(r);
  }
};
$t = new WeakMap(), Ht = new WeakMap(), kt = new WeakMap(), Qe = new WeakMap(), Pe = new WeakMap(), gr = new WeakMap(), be = new WeakMap(), br = new WeakMap(), ut = new WeakMap(), et = new WeakMap(), qe = new WeakMap(), Zt = new WeakMap(), Jt = new WeakMap(), Tt = new WeakMap(), W = new WeakSet(), qr = function() {
  return this.is_fork || l(this, Pe).size > 0;
}, Ti = function() {
  for (const n of l(this, Tt))
    for (const i of l(n, Pe).keys()) {
      for (var t = !1, r = i; r.parent !== null; ) {
        if (l(this, qe).has(r)) {
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
  var f;
  if (ri++ > 1e3 && (yt.delete(this), ns()), !j(this, W, qr).call(this)) {
    for (const s of l(this, ut))
      l(this, et).delete(s), Y(s, le), this.schedule(s);
    for (const s of l(this, et))
      Y(s, $e), this.schedule(s);
  }
  const t = l(this, be);
  O(this, be, []), this.apply();
  var r = Bt = [], n = [], i = Pr = [];
  for (const s of t)
    try {
      j(this, W, wn).call(this, s, r, n);
    } catch (d) {
      throw Oi(s), d;
    }
  if (k = null, i.length > 0) {
    var a = Yr.ensure();
    for (const s of i)
      a.schedule(s);
  }
  if (Bt = null, Pr = null, j(this, W, qr).call(this) || j(this, W, Ti).call(this)) {
    j(this, W, Ur).call(this, n), j(this, W, Ur).call(this, r);
    for (const [s, d] of l(this, qe))
      Li(s, d);
  } else {
    l(this, Qe).size === 0 && yt.delete(this), l(this, ut).clear(), l(this, et).clear();
    for (const s of l(this, $t)) s(this);
    l(this, $t).clear(), ni(n), ni(r), l(this, gr)?.resolve();
  }
  var o = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    k
  );
  if (l(this, be).length > 0) {
    const s = o ?? (o = this);
    l(s, be).push(...l(this, be).filter((d) => !l(s, be).includes(d)));
  }
  o !== null && (yt.add(o), j(f = o, W, jr).call(f));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
wn = function(t, r, n) {
  t.f ^= K;
  for (var i = t.first; i !== null; ) {
    var a = i.f, o = (a & (Fe | _t)) !== 0, f = o && (a & K) !== 0, s = f || (a & fe) !== 0 || l(this, qe).has(i);
    if (!s && i.fn !== null) {
      o ? i.f ^= K : (a & Wt) !== 0 ? r.push(i) : kr(i) && ((a & Ve) !== 0 && l(this, et).add(i), er(i));
      var d = i.first;
      if (d !== null) {
        i = d;
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
Ur = function(t) {
  for (var r = 0; r < t.length; r += 1)
    ki(t[r], l(this, ut), l(this, et));
}, ts = function() {
  var c, b, _;
  for (const v of yt) {
    var t = v.id < this.id, r = [];
    for (const [h, [E, p]] of this.current) {
      if (v.current.has(h)) {
        var n = (
          /** @type {[any, boolean]} */
          v.current.get(h)[0]
        );
        if (t && E !== n)
          v.current.set(h, [E, p]);
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
        for (const h of l(this, Zt))
          v.unskip_effect(h, (E) => {
            var p;
            (E.f & (Ve | _r)) !== 0 ? v.schedule(E) : j(p = v, W, Ur).call(p, [E]);
          });
      v.activate();
      var a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
      for (var f of r)
        Si(f, i, a, o);
      o = /* @__PURE__ */ new Map();
      var s = [...v.current.keys()].filter(
        (h) => this.current.has(h) ? (
          /** @type {[any, boolean]} */
          this.current.get(h)[0] !== h
        ) : !0
      );
      for (const h of l(this, br))
        (h.f & (Oe | fe | yn)) === 0 && zn(h, s, o) && ((h.f & (_r | Ve)) !== 0 ? (Y(h, le), v.schedule(h)) : l(v, ut).add(h));
      if (l(v, be).length > 0) {
        v.apply();
        for (var d of l(v, be))
          j(c = v, W, wn).call(c, d, [], []);
        O(v, be, []);
      }
      v.deactivate();
    }
  }
  for (const v of yt)
    l(v, Tt).has(this) && (l(v, Tt).delete(this), l(v, Tt).size === 0 && !j(b = v, W, qr).call(b) && (v.activate(), j(_ = v, W, jr).call(_)));
};
let Mt = Yr;
function rs(e) {
  var t = cr;
  cr = !0;
  try {
    for (var r; ; ) {
      if (Xa(), k === null)
        return (
          /** @type {T} */
          r
        );
      k.flush();
    }
  } finally {
    cr = t;
  }
}
function ns() {
  try {
    Fa();
  } catch (e) {
    dt(e, mn);
  }
}
let Ke = null;
function ni(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Oe | fe)) === 0 && kr(n) && (Ke = /* @__PURE__ */ new Set(), er(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Vi(n), Ke?.size > 0)) {
        Nt.clear();
        for (const i of Ke) {
          if ((i.f & (Oe | fe)) !== 0) continue;
          const a = [i];
          let o = i.parent;
          for (; o !== null; )
            Ke.has(o) && (Ke.delete(o), a.push(o)), o = o.parent;
          for (let f = a.length - 1; f >= 0; f--) {
            const s = a[f];
            (s.f & (Oe | fe)) === 0 && er(s);
          }
        }
        Ke.clear();
      }
    }
    Ke = null;
  }
}
function Si(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const a = i.f;
      (a & oe) !== 0 ? Si(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (a & (_r | Ve)) !== 0 && (a & le) === 0 && zn(i, t, n) && (Y(i, le), Fn(
        /** @type {Effect} */
        i
      ));
    }
}
function zn(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Gt.call(t, i))
        return !0;
      if ((i.f & oe) !== 0 && zn(
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
function Fn(e) {
  k.schedule(e);
}
function Li(e, t) {
  if (!((e.f & Fe) !== 0 && (e.f & K) !== 0)) {
    (e.f & le) !== 0 ? t.d.push(e) : (e.f & $e) !== 0 && t.m.push(e), Y(e, K);
    for (var r = e.first; r !== null; )
      Li(r, t), r = r.next;
  }
}
function Oi(e) {
  Y(e, K);
  for (var t = e.first; t !== null; )
    Oi(t), t = t.next;
}
function is(e) {
  let t = 0, r = Rt(0), n;
  return () => {
    qn() && (u(r), Un(() => (t === 0 && (n = en(() => e(() => vr(r)))), t += 1, () => {
      vt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, vr(r));
      });
    })));
  };
}
var as = Kt | tr;
function ss(e, t, r, n) {
  new ls(e, t, r, n);
}
var Ee, Dn, ke, St, de, Te, ue, ye, tt, Lt, ft, Yt, yr, mr, rt, Gr, H, os, us, fs, xn, Br, Vr, En, kn;
class ls {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    S(this, H);
    /** @type {Boundary | null} */
    De(this, "parent");
    De(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    De(this, "transform_error");
    /** @type {TemplateNode} */
    S(this, Ee);
    /** @type {TemplateNode | null} */
    S(this, Dn, null);
    /** @type {BoundaryProps} */
    S(this, ke);
    /** @type {((anchor: Node) => void)} */
    S(this, St);
    /** @type {Effect} */
    S(this, de);
    /** @type {Effect | null} */
    S(this, Te, null);
    /** @type {Effect | null} */
    S(this, ue, null);
    /** @type {Effect | null} */
    S(this, ye, null);
    /** @type {DocumentFragment | null} */
    S(this, tt, null);
    S(this, Lt, 0);
    S(this, ft, 0);
    S(this, Yt, !1);
    /** @type {Set<Effect>} */
    S(this, yr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    S(this, mr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    S(this, rt, null);
    S(this, Gr, is(() => (O(this, rt, Rt(l(this, Lt))), () => {
      O(this, rt, null);
    })));
    O(this, Ee, t), O(this, ke, r), O(this, St, (a) => {
      var o = (
        /** @type {Effect} */
        C
      );
      o.b = this, o.f |= gn, n(a);
    }), this.parent = /** @type {Effect} */
    C.b, this.transform_error = i ?? this.parent?.transform_error ?? ((a) => a), O(this, de, Bn(() => {
      j(this, H, xn).call(this);
    }, as));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    ki(t, l(this, yr), l(this, mr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!l(this, ke).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    j(this, H, En).call(this, t, r), O(this, Lt, l(this, Lt) + t), !(!l(this, rt) || l(this, Yt)) && (O(this, Yt, !0), vt(() => {
      O(this, Yt, !1), l(this, rt) && Qt(l(this, rt), l(this, Lt));
    }));
  }
  get_effect_pending() {
    return l(this, Gr).call(this), u(
      /** @type {Source<number>} */
      l(this, rt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!l(this, ke).onerror && !l(this, ke).failed)
      throw t;
    k?.is_fork ? (l(this, Te) && k.skip_effect(l(this, Te)), l(this, ue) && k.skip_effect(l(this, ue)), l(this, ye) && k.skip_effect(l(this, ye)), k.on_fork_commit(() => {
      j(this, H, kn).call(this, t);
    })) : j(this, H, kn).call(this, t);
  }
}
Ee = new WeakMap(), Dn = new WeakMap(), ke = new WeakMap(), St = new WeakMap(), de = new WeakMap(), Te = new WeakMap(), ue = new WeakMap(), ye = new WeakMap(), tt = new WeakMap(), Lt = new WeakMap(), ft = new WeakMap(), Yt = new WeakMap(), yr = new WeakMap(), mr = new WeakMap(), rt = new WeakMap(), Gr = new WeakMap(), H = new WeakSet(), os = function() {
  try {
    O(this, Te, Se(() => l(this, St).call(this, l(this, Ee))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
us = function(t) {
  const r = l(this, ke).failed;
  r && O(this, ye, Se(() => {
    r(
      l(this, Ee),
      () => t,
      () => () => {
      }
    );
  }));
}, fs = function() {
  const t = l(this, ke).pending;
  t && (this.is_pending = !0, O(this, ue, Se(() => t(l(this, Ee)))), vt(() => {
    var r = O(this, tt, document.createDocumentFragment()), n = pt();
    r.append(n), O(this, Te, j(this, H, Vr).call(this, () => Se(() => l(this, St).call(this, n)))), l(this, ft) === 0 && (l(this, Ee).before(r), O(this, tt, null), At(
      /** @type {Effect} */
      l(this, ue),
      () => {
        O(this, ue, null);
      }
    ), j(this, H, Br).call(
      this,
      /** @type {Batch} */
      k
    ));
  }));
}, xn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), O(this, ft, 0), O(this, Lt, 0), O(this, Te, Se(() => {
      l(this, St).call(this, l(this, Ee));
    })), l(this, ft) > 0) {
      var t = O(this, tt, document.createDocumentFragment());
      Hn(l(this, Te), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        l(this, ke).pending
      );
      O(this, ue, Se(() => r(l(this, Ee))));
    } else
      j(this, H, Br).call(
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
Br = function(t) {
  this.is_pending = !1, t.transfer_effects(l(this, yr), l(this, mr));
}, /**
 * @template T
 * @param {() => T} fn
 */
Vr = function(t) {
  var r = C, n = A, i = pe;
  He(l(this, de)), Ae(l(this, de)), Xt(l(this, de).ctx);
  try {
    return Mt.ensure(), t();
  } catch (a) {
    return xi(a), null;
  } finally {
    He(r), Ae(n), Xt(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
En = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && j(n = this.parent, H, En).call(n, t, r);
    return;
  }
  O(this, ft, l(this, ft) + t), l(this, ft) === 0 && (j(this, H, Br).call(this, r), l(this, ue) && At(l(this, ue), () => {
    O(this, ue, null);
  }), l(this, tt) && (l(this, Ee).before(l(this, tt)), O(this, tt, null)));
}, /**
 * @param {unknown} error
 */
kn = function(t) {
  l(this, Te) && (ve(l(this, Te)), O(this, Te, null)), l(this, ue) && (ve(l(this, ue)), O(this, ue, null)), l(this, ye) && (ve(l(this, ye)), O(this, ye, null));
  var r = l(this, ke).onerror;
  let n = l(this, ke).failed;
  var i = !1, a = !1;
  const o = () => {
    if (i) {
      Wa();
      return;
    }
    i = !0, a && ja(), l(this, ye) !== null && At(l(this, ye), () => {
      O(this, ye, null);
    }), j(this, H, Vr).call(this, () => {
      j(this, H, xn).call(this);
    });
  }, f = (s) => {
    try {
      a = !0, r?.(s, o), a = !1;
    } catch (d) {
      dt(d, l(this, de) && l(this, de).parent);
    }
    n && O(this, ye, j(this, H, Vr).call(this, () => {
      try {
        return Se(() => {
          var d = (
            /** @type {Effect} */
            C
          );
          d.b = this, d.f |= gn, n(
            l(this, Ee),
            () => s,
            () => o
          );
        });
      } catch (d) {
        return dt(
          d,
          /** @type {Effect} */
          l(this, de).parent
        ), null;
      }
    }));
  };
  vt(() => {
    var s;
    try {
      s = this.transform_error(t);
    } catch (d) {
      dt(d, l(this, de) && l(this, de).parent);
      return;
    }
    s !== null && typeof s == "object" && typeof /** @type {any} */
    s.then == "function" ? s.then(
      f,
      /** @param {unknown} e */
      (d) => dt(d, l(this, de) && l(this, de).parent)
    ) : f(s);
  });
};
function ds(e, t, r, n) {
  const i = In;
  var a = e.filter((_) => !_.settled);
  if (r.length === 0 && a.length === 0) {
    n(t.map(i));
    return;
  }
  var o = (
    /** @type {Effect} */
    C
  ), f = cs(), s = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((_) => _.promise)) : null;
  function d(_) {
    f();
    try {
      n(_);
    } catch (v) {
      (o.f & Oe) === 0 && dt(v, o);
    }
    Zr();
  }
  if (r.length === 0) {
    s.then(() => d(t.map(i)));
    return;
  }
  var c = Ni();
  function b() {
    Promise.all(r.map((_) => /* @__PURE__ */ vs(_))).then((_) => d([...t.map(i), ..._])).catch((_) => dt(_, o)).finally(() => c());
  }
  s ? s.then(() => {
    f(), b(), Zr();
  }) : b();
}
function cs() {
  var e = (
    /** @type {Effect} */
    C
  ), t = A, r = pe, n = (
    /** @type {Batch} */
    k
  );
  return function(a = !0) {
    He(e), Ae(t), Xt(r), a && (e.f & Oe) === 0 && (n?.activate(), n?.apply());
  };
}
function Zr(e = !0) {
  He(null), Ae(null), Xt(null), e && k?.deactivate();
}
function Ni() {
  var e = (
    /** @type {Effect} */
    C
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    k
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (i = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function In(e) {
  var t = oe | le;
  return C !== null && (C.f |= tr), {
    ctx: pe,
    deps: null,
    effects: null,
    equals: hi,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ee
    ),
    wv: 0,
    parent: C,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function vs(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    C
  );
  n === null && Ca();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Rt(
    /** @type {V} */
    ee
  ), o = !A, f = /* @__PURE__ */ new Map();
  return Os(() => {
    var s = (
      /** @type {Effect} */
      C
    ), d = vi();
    i = d.promise;
    try {
      Promise.resolve(e()).then(d.resolve, d.reject).finally(Zr);
    } catch (v) {
      d.reject(v), Zr();
    }
    var c = (
      /** @type {Batch} */
      k
    );
    if (o) {
      if ((s.f & zt) !== 0)
        var b = Ni();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        f.get(c)?.reject(Xe), f.delete(c);
      else {
        for (const v of f.values())
          v.reject(Xe);
        f.clear();
      }
      f.set(c, d);
    }
    const _ = (v, h = void 0) => {
      if (b) {
        var E = h === Xe;
        b(E);
      }
      if (!(h === Xe || (s.f & Oe) !== 0)) {
        if (c.activate(), h)
          a.f |= ct, Qt(a, h);
        else {
          (a.f & ct) !== 0 && (a.f ^= ct), Qt(a, v);
          for (const [p, L] of f) {
            if (f.delete(p), p === c) break;
            L.reject(Xe);
          }
        }
        c.deactivate();
      }
    };
    d.promise.then(_, (v) => _(null, v || "unknown"));
  }), jn(() => {
    for (const s of f.values())
      s.reject(Xe);
  }), new Promise((s) => {
    function d(c) {
      function b() {
        c === i ? s(a) : d(i);
      }
      c.then(b, b);
    }
    d(i);
  });
}
// @__NO_SIDE_EFFECTS__
function pn(e) {
  const t = /* @__PURE__ */ In(e);
  return Zi(t), t;
}
// @__NO_SIDE_EFFECTS__
function ps(e) {
  const t = /* @__PURE__ */ In(e);
  return t.equals = gi, t;
}
function _s(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      ve(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Pn(e) {
  var t, r = C, n = e.parent;
  if (!ht && n !== null && (n.f & (Oe | fe)) !== 0)
    return Ya(), e.v;
  He(n);
  try {
    e.f &= ~Dt, _s(e), t = Wi(e);
  } finally {
    He(r);
  }
  return t;
}
function Ai(e) {
  var t = Pn(e);
  if (!e.equals(t) && (e.wv = Yi(), (!k?.is_fork || e.deps === null) && (k !== null ? k.capture(e, t, !0) : e.v = t, e.deps === null))) {
    Y(e, K);
    return;
  }
  ht || (Re !== null ? (qn() || k?.is_fork) && Re.set(e, t) : Rn(e));
}
function hs(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Xe), t.teardown = Ta, t.ac = null, hr(t, 0), Vn(t));
}
function Ci(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && er(t);
}
let Tn = /* @__PURE__ */ new Set();
const Nt = /* @__PURE__ */ new Map();
let Di = !1;
function Rt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: hi,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function J(e, t) {
  const r = Rt(e);
  return Zi(r), r;
}
// @__NO_SIDE_EFFECTS__
function gs(e, t = !1, r = !0) {
  const n = Rt(e);
  return t || (n.equals = gi), n;
}
function x(e, t, r = !1) {
  A !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ze || (A.f & yn) !== 0) && mi() && (A.f & (oe | Ve | _r | yn)) !== 0 && (Ne === null || !Gt.call(Ne, e)) && qa();
  let n = r ? Ue(t) : t;
  return Qt(e, n, Pr);
}
function Qt(e, t, r = null) {
  if (!e.equals(t)) {
    Nt.set(e, ht ? t : e.v);
    var n = Mt.ensure();
    if (n.capture(e, t), (e.f & oe) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & le) !== 0 && Pn(i), Re === null && Rn(i);
    }
    e.wv = Yi(), Mi(e, le, r), C !== null && (C.f & K) !== 0 && (C.f & (Fe | _t)) === 0 && (xe === null ? Cs([e]) : xe.push(e)), !n.is_fork && Tn.size > 0 && !Di && bs();
  }
  return t;
}
function bs() {
  Di = !1;
  for (const e of Tn)
    (e.f & K) !== 0 && Y(e, $e), kr(e) && er(e);
  Tn.clear();
}
function vr(e) {
  x(e, e.v + 1);
}
function Mi(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, a = 0; a < i; a++) {
      var o = n[a], f = o.f, s = (f & le) === 0;
      if (s && Y(o, t), (f & oe) !== 0) {
        var d = (
          /** @type {Derived} */
          o
        );
        Re?.delete(d), (f & Dt) === 0 && (f & Le && (C === null || (C.f & Hr) === 0) && (o.f |= Dt), Mi(d, $e, r));
      } else if (s) {
        var c = (
          /** @type {Effect} */
          o
        );
        (f & Ve) !== 0 && Ke !== null && Ke.add(c), r !== null ? r.push(c) : Fn(c);
      }
    }
}
function Ue(e) {
  if (typeof e != "object" || e === null || Vt in e)
    return e;
  const t = ka(e);
  if (t !== xa && t !== Ea)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Mn(e), i = /* @__PURE__ */ J(0), a = Ct, o = (f) => {
    if (Ct === a)
      return f();
    var s = A, d = Ct;
    Ae(null), oi(a);
    var c = f();
    return Ae(s), oi(d), c;
  };
  return n && r.set("length", /* @__PURE__ */ J(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, s, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Ia();
        var c = r.get(s);
        return c === void 0 ? o(() => {
          var b = /* @__PURE__ */ J(d.value);
          return r.set(s, b), b;
        }) : x(c, d.value, !0), !0;
      },
      deleteProperty(f, s) {
        var d = r.get(s);
        if (d === void 0) {
          if (s in f) {
            const c = o(() => /* @__PURE__ */ J(ee));
            r.set(s, c), vr(i);
          }
        } else
          x(d, ee), vr(i);
        return !0;
      },
      get(f, s, d) {
        if (s === Vt)
          return e;
        var c = r.get(s), b = s in f;
        if (c === void 0 && (!b || dr(f, s)?.writable) && (c = o(() => {
          var v = Ue(b ? f[s] : ee), h = /* @__PURE__ */ J(v);
          return h;
        }), r.set(s, c)), c !== void 0) {
          var _ = u(c);
          return _ === ee ? void 0 : _;
        }
        return Reflect.get(f, s, d);
      },
      getOwnPropertyDescriptor(f, s) {
        var d = Reflect.getOwnPropertyDescriptor(f, s);
        if (d && "value" in d) {
          var c = r.get(s);
          c && (d.value = u(c));
        } else if (d === void 0) {
          var b = r.get(s), _ = b?.v;
          if (b !== void 0 && _ !== ee)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return d;
      },
      has(f, s) {
        if (s === Vt)
          return !0;
        var d = r.get(s), c = d !== void 0 && d.v !== ee || Reflect.has(f, s);
        if (d !== void 0 || C !== null && (!c || dr(f, s)?.writable)) {
          d === void 0 && (d = o(() => {
            var _ = c ? Ue(f[s]) : ee, v = /* @__PURE__ */ J(_);
            return v;
          }), r.set(s, d));
          var b = u(d);
          if (b === ee)
            return !1;
        }
        return c;
      },
      set(f, s, d, c) {
        var b = r.get(s), _ = s in f;
        if (n && s === "length")
          for (var v = d; v < /** @type {Source<number>} */
          b.v; v += 1) {
            var h = r.get(v + "");
            h !== void 0 ? x(h, ee) : v in f && (h = o(() => /* @__PURE__ */ J(ee)), r.set(v + "", h));
          }
        if (b === void 0)
          (!_ || dr(f, s)?.writable) && (b = o(() => /* @__PURE__ */ J(void 0)), x(b, Ue(d)), r.set(s, b));
        else {
          _ = b.v !== ee;
          var E = o(() => Ue(d));
          x(b, E);
        }
        var p = Reflect.getOwnPropertyDescriptor(f, s);
        if (p?.set && p.set.call(c, d), !_) {
          if (n && typeof s == "string") {
            var L = (
              /** @type {Source<number>} */
              r.get("length")
            ), X = Number(s);
            Number.isInteger(X) && X >= L.v && x(L, X + 1);
          }
          vr(i);
        }
        return !0;
      },
      ownKeys(f) {
        u(i);
        var s = Reflect.ownKeys(f).filter((b) => {
          var _ = r.get(b);
          return _ === void 0 || _.v !== ee;
        });
        for (var [d, c] of r)
          c.v !== ee && !(d in f) && s.push(d);
        return s;
      },
      setPrototypeOf() {
        Pa();
      }
    }
  );
}
function ii(e) {
  try {
    if (e !== null && typeof e == "object" && Vt in e)
      return e[Vt];
  } catch {
  }
  return e;
}
function ys(e, t) {
  return Object.is(ii(e), ii(t));
}
var ai, Ri, zi, Fi;
function ms() {
  if (ai === void 0) {
    ai = window, Ri = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    zi = dr(t, "firstChild").get, Fi = dr(t, "nextSibling").get, ti(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ti(r) && (r.__t = void 0);
  }
}
function pt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Jr(e) {
  return (
    /** @type {TemplateNode | null} */
    zi.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Er(e) {
  return (
    /** @type {TemplateNode | null} */
    Fi.call(e)
  );
}
function m(e, t) {
  return /* @__PURE__ */ Jr(e);
}
function ws(e, t = !1) {
  {
    var r = /* @__PURE__ */ Jr(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Er(r) : r;
  }
}
function w(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Er(n);
  return n;
}
function xs(e) {
  e.textContent = "";
}
function Ii() {
  return !1;
}
function Es(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ja, e, void 0)
  );
}
let si = !1;
function ks() {
  si || (si = !0, document.addEventListener(
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
function Qr(e) {
  var t = A, r = C;
  Ae(null), He(null);
  try {
    return e();
  } finally {
    Ae(t), He(r);
  }
}
function Pi(e, t, r, n = r) {
  e.addEventListener(t, () => Qr(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), ks();
}
function Ts(e) {
  C === null && (A === null && za(), Ra()), ht && Ma();
}
function Ss(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function nt(e, t) {
  var r = C;
  r !== null && (r.f & fe) !== 0 && (e |= fe);
  var n = {
    ctx: pe,
    deps: null,
    nodes: null,
    f: e | le | Le,
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
  var i = n;
  if ((e & Wt) !== 0)
    Bt !== null ? Bt.push(n) : Mt.ensure().schedule(n);
  else if (t !== null) {
    try {
      er(n);
    } catch (o) {
      throw ve(n), o;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & tr) === 0 && (i = i.first, (e & Ve) !== 0 && (e & Kt) !== 0 && i !== null && (i.f |= Kt));
  }
  if (i !== null && (i.parent = r, r !== null && Ss(i, r), A !== null && (A.f & oe) !== 0 && (e & _t) === 0)) {
    var a = (
      /** @type {Derived} */
      A
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return n;
}
function qn() {
  return A !== null && !ze;
}
function jn(e) {
  const t = nt(Xr, null);
  return Y(t, K), t.teardown = e, t;
}
function qi(e) {
  Ts();
  var t = (
    /** @type {Effect} */
    C.f
  ), r = !A && (t & Fe) !== 0 && (t & zt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      pe
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return ji(e);
}
function ji(e) {
  return nt(Wt | Na, e);
}
function Ls(e) {
  Mt.ensure();
  const t = nt(_t | tr, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? At(t, () => {
      ve(t), n(void 0);
    }) : (ve(t), n(void 0));
  });
}
function Ui(e) {
  return nt(Wt, e);
}
function Os(e) {
  return nt(_r | tr, e);
}
function Un(e, t = 0) {
  return nt(Xr | t, e);
}
function he(e, t = [], r = [], n = []) {
  ds(n, t, r, (i) => {
    nt(Xr, () => e(...i.map(u)));
  });
}
function Bn(e, t = 0) {
  var r = nt(Ve | t, e);
  return r;
}
function Se(e) {
  return nt(Fe | tr, e);
}
function Bi(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = ht, n = A;
    li(!0), Ae(null);
    try {
      t.call(null);
    } finally {
      li(r), Ae(n);
    }
  }
}
function Vn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Qr(() => {
      i.abort(Xe);
    });
    var n = r.next;
    (r.f & _t) !== 0 ? r.parent = null : ve(r, t), r = n;
  }
}
function Ns(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Fe) === 0 && ve(t), t = r;
  }
}
function ve(e, t = !0) {
  var r = !1;
  (t || (e.f & Oa) !== 0) && e.nodes !== null && e.nodes.end !== null && (As(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), Y(e, bn), Vn(e, t && !r), hr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const a of n)
      a.stop();
  Bi(e), e.f ^= bn, e.f |= Oe;
  var i = e.parent;
  i !== null && i.first !== null && Vi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function As(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Er(e);
    e.remove(), e = r;
  }
}
function Vi(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function At(e, t, r = !0) {
  var n = [];
  $i(e, n, !0);
  var i = () => {
    r && ve(e), t && t();
  }, a = n.length;
  if (a > 0) {
    var o = () => --a || i();
    for (var f of n)
      f.out(o);
  } else
    i();
}
function $i(e, t, r) {
  if ((e.f & fe) === 0) {
    e.f ^= fe;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const f of n)
        (f.is_global || r) && t.push(f);
    for (var i = e.first; i !== null; ) {
      var a = i.next;
      if ((i.f & _t) === 0) {
        var o = (i.f & Kt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Fe) !== 0 && (e.f & Ve) !== 0;
        $i(i, t, o ? r : !1);
      }
      i = a;
    }
  }
}
function $n(e) {
  Hi(e, !0);
}
function Hi(e, t) {
  if ((e.f & fe) !== 0) {
    e.f ^= fe, (e.f & K) === 0 && (Y(e, le), Mt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Kt) !== 0 || (r.f & Fe) !== 0;
      Hi(r, i ? t : !1), r = n;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const o of a)
        (o.is_global || t) && o.in();
  }
}
function Hn(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Er(r);
      t.append(r), r = i;
    }
}
let $r = !1, ht = !1;
function li(e) {
  ht = e;
}
let A = null, ze = !1;
function Ae(e) {
  A = e;
}
let C = null;
function He(e) {
  C = e;
}
let Ne = null;
function Zi(e) {
  A !== null && (Ne === null ? Ne = [e] : Ne.push(e));
}
let ce = null, ge = 0, xe = null;
function Cs(e) {
  xe = e;
}
let Ji = 1, xt = 0, Ct = xt;
function oi(e) {
  Ct = e;
}
function Yi() {
  return ++Ji;
}
function kr(e) {
  var t = e.f;
  if ((t & le) !== 0)
    return !0;
  if (t & oe && (e.f &= ~Dt), (t & $e) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var a = r[i];
      if (kr(
        /** @type {Derived} */
        a
      ) && Ai(
        /** @type {Derived} */
        a
      ), a.wv > e.wv)
        return !0;
    }
    (t & Le) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Re === null && Y(e, K);
  }
  return !1;
}
function Gi(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Ne !== null && Gt.call(Ne, e)))
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      (a.f & oe) !== 0 ? Gi(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? Y(a, le) : (a.f & K) !== 0 && Y(a, $e), Fn(
        /** @type {Effect} */
        a
      ));
    }
}
function Wi(e) {
  var E;
  var t = ce, r = ge, n = xe, i = A, a = Ne, o = pe, f = ze, s = Ct, d = e.f;
  ce = /** @type {null | Value[]} */
  null, ge = 0, xe = null, A = (d & (Fe | _t)) === 0 ? e : null, Ne = null, Xt(e.ctx), ze = !1, Ct = ++xt, e.ac !== null && (Qr(() => {
    e.ac.abort(Xe);
  }), e.ac = null);
  try {
    e.f |= Hr;
    var c = (
      /** @type {Function} */
      e.fn
    ), b = c();
    e.f |= zt;
    var _ = e.deps, v = k?.is_fork;
    if (ce !== null) {
      var h;
      if (v || hr(e, ge), _ !== null && ge > 0)
        for (_.length = ge + ce.length, h = 0; h < ce.length; h++)
          _[ge + h] = ce[h];
      else
        e.deps = _ = ce;
      if (qn() && (e.f & Le) !== 0)
        for (h = ge; h < _.length; h++)
          ((E = _[h]).reactions ?? (E.reactions = [])).push(e);
    } else !v && _ !== null && ge < _.length && (hr(e, ge), _.length = ge);
    if (mi() && xe !== null && !ze && _ !== null && (e.f & (oe | $e | le)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      xe.length; h++)
        Gi(
          xe[h],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (xt++, i.deps !== null)
        for (let p = 0; p < r; p += 1)
          i.deps[p].rv = xt;
      if (t !== null)
        for (const p of t)
          p.rv = xt;
      xe !== null && (n === null ? n = xe : n.push(.../** @type {Source[]} */
      xe));
    }
    return (e.f & ct) !== 0 && (e.f ^= ct), b;
  } catch (p) {
    return xi(p);
  } finally {
    e.f ^= Hr, ce = t, ge = r, xe = n, A = i, Ne = a, Xt(o), ze = f, Ct = s;
  }
}
function Ds(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = ma.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & oe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ce === null || !Gt.call(ce, t))) {
    var a = (
      /** @type {Derived} */
      t
    );
    (a.f & Le) !== 0 && (a.f ^= Le, a.f &= ~Dt), a.v !== ee && Rn(a), hs(a), hr(a, 0);
  }
}
function hr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Ds(e, r[n]);
}
function er(e) {
  var t = e.f;
  if ((t & Oe) === 0) {
    Y(e, K);
    var r = C, n = $r;
    C = e, $r = !0;
    try {
      (t & (Ve | pi)) !== 0 ? Ns(e) : Vn(e), Bi(e);
      var i = Wi(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Ji;
      var a;
    } finally {
      $r = n, C = r;
    }
  }
}
async function Sn() {
  await Promise.resolve(), rs();
}
function u(e) {
  var t = e.f, r = (t & oe) !== 0;
  if (A !== null && !ze) {
    var n = C !== null && (C.f & Oe) !== 0;
    if (!n && (Ne === null || !Gt.call(Ne, e))) {
      var i = A.deps;
      if ((A.f & Hr) !== 0)
        e.rv < xt && (e.rv = xt, ce === null && i !== null && i[ge] === e ? ge++ : ce === null ? ce = [e] : ce.push(e));
      else {
        (A.deps ?? (A.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [A] : Gt.call(a, A) || a.push(A);
      }
    }
  }
  if (ht && Nt.has(e))
    return Nt.get(e);
  if (r) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (ht) {
      var f = o.v;
      return ((o.f & K) === 0 && o.reactions !== null || Xi(o)) && (f = Pn(o)), Nt.set(o, f), f;
    }
    var s = (o.f & Le) === 0 && !ze && A !== null && ($r || (A.f & Le) !== 0), d = (o.f & zt) === 0;
    kr(o) && (s && (o.f |= Le), Ai(o)), s && !d && (Ci(o), Ki(o));
  }
  if (Re?.has(e))
    return Re.get(e);
  if ((e.f & ct) !== 0)
    throw e.v;
  return e.v;
}
function Ki(e) {
  if (e.f |= Le, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & oe) !== 0 && (t.f & Le) === 0 && (Ci(
        /** @type {Derived} */
        t
      ), Ki(
        /** @type {Derived} */
        t
      ));
}
function Xi(e) {
  if (e.v === ee) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Nt.has(t) || (t.f & oe) !== 0 && Xi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function en(e) {
  var t = ze;
  try {
    return ze = !0, e();
  } finally {
    ze = t;
  }
}
const Ms = ["touchstart", "touchmove"];
function Rs(e) {
  return Ms.includes(e);
}
const Et = Symbol("events"), Qi = /* @__PURE__ */ new Set(), Ln = /* @__PURE__ */ new Set();
function zs(e, t, r, n = {}) {
  function i(a) {
    if (n.capture || On.call(t, a), !a.cancelBubble)
      return Qr(() => r?.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? vt(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function zr(e, t, r, n, i) {
  var a = { capture: n, passive: i }, o = zs(e, t, r, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && jn(() => {
    t.removeEventListener(e, o, a);
  });
}
function mt(e, t, r) {
  (t[Et] ?? (t[Et] = {}))[e] = r;
}
function Fs(e) {
  for (var t = 0; t < e.length; t++)
    Qi.add(e[t]);
  for (var r of Ln)
    r(e);
}
let ui = null;
function On(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  ui = e;
  var o = 0, f = ui === e && e[Et];
  if (f) {
    var s = i.indexOf(f);
    if (s !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Et] = t;
      return;
    }
    var d = i.indexOf(t);
    if (d === -1)
      return;
    s <= d && (o = s);
  }
  if (a = /** @type {Element} */
  i[o] || e.target, a !== t) {
    wa(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var c = A, b = C;
    Ae(null), He(null);
    try {
      for (var _, v = []; a !== null; ) {
        var h = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var E = a[Et]?.[n];
          E != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && E.call(a, e);
        } catch (p) {
          _ ? v.push(p) : _ = p;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        a = h;
      }
      if (_) {
        for (let p of v)
          queueMicrotask(() => {
            throw p;
          });
        throw _;
      }
    } finally {
      e[Et] = t, delete e.currentTarget, Ae(c), He(b);
    }
  }
}
const Is = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Ps(e) {
  return (
    /** @type {string} */
    Is?.createHTML(e) ?? e
  );
}
function qs(e) {
  var t = Es("template");
  return t.innerHTML = Ps(e.replaceAll("<!>", "<!---->")), t.content;
}
function Nn(e, t) {
  var r = (
    /** @type {Effect} */
    C
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function B(e, t) {
  var r = (t & Ha) !== 0, n = (t & Za) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = qs(a ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Jr(i)));
    var o = (
      /** @type {TemplateNode} */
      n || Ri ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Jr(o)
      ), s = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Nn(f, s);
    } else
      Nn(o, o);
    return o;
  };
}
function js(e = "") {
  {
    var t = pt(e + "");
    return Nn(t, t), t;
  }
}
function U(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function se(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Us(e, t) {
  return Bs(e, t);
}
const Fr = /* @__PURE__ */ new Map();
function Bs(e, { target: t, anchor: r, props: n = {}, events: i, context: a, intro: o = !0, transformError: f }) {
  ms();
  var s = void 0, d = Ls(() => {
    var c = r ?? t.appendChild(pt());
    ss(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (v) => {
        bi({});
        var h = (
          /** @type {ComponentContext} */
          pe
        );
        a && (h.c = a), i && (n.$$events = i), s = e(v, n) || {}, yi();
      },
      f
    );
    var b = /* @__PURE__ */ new Set(), _ = (v) => {
      for (var h = 0; h < v.length; h++) {
        var E = v[h];
        if (!b.has(E)) {
          b.add(E);
          var p = Rs(E);
          for (const D of [t, document]) {
            var L = Fr.get(D);
            L === void 0 && (L = /* @__PURE__ */ new Map(), Fr.set(D, L));
            var X = L.get(E);
            X === void 0 ? (D.addEventListener(E, On, { passive: p }), L.set(E, 1)) : L.set(E, X + 1);
          }
        }
      }
    };
    return _(Kr(Qi)), Ln.add(_), () => {
      for (var v of b)
        for (const p of [t, document]) {
          var h = (
            /** @type {Map<string, number>} */
            Fr.get(p)
          ), E = (
            /** @type {number} */
            h.get(v)
          );
          --E == 0 ? (p.removeEventListener(v, On), h.delete(v), h.size === 0 && Fr.delete(p)) : h.set(v, E);
        }
      Ln.delete(_), c !== r && c.parentNode?.removeChild(c);
    };
  });
  return An.set(s, d), s;
}
let An = /* @__PURE__ */ new WeakMap();
function Vs(e, t) {
  const r = An.get(e);
  return r ? (An.delete(e), r(t)) : Promise.resolve();
}
var Me, je, me, Ot, wr, xr, Wr;
class $s {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    De(this, "anchor");
    /** @type {Map<Batch, Key>} */
    S(this, Me, /* @__PURE__ */ new Map());
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
    S(this, je, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    S(this, me, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    S(this, Ot, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    S(this, wr, !0);
    /**
     * @param {Batch} batch
     */
    S(this, xr, (t) => {
      if (l(this, Me).has(t)) {
        var r = (
          /** @type {Key} */
          l(this, Me).get(t)
        ), n = l(this, je).get(r);
        if (n)
          $n(n), l(this, Ot).delete(r);
        else {
          var i = l(this, me).get(r);
          i && (l(this, je).set(r, i.effect), l(this, me).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [a, o] of l(this, Me)) {
          if (l(this, Me).delete(a), a === t)
            break;
          const f = l(this, me).get(o);
          f && (ve(f.effect), l(this, me).delete(o));
        }
        for (const [a, o] of l(this, je)) {
          if (a === r || l(this, Ot).has(a)) continue;
          const f = () => {
            if (Array.from(l(this, Me).values()).includes(a)) {
              var d = document.createDocumentFragment();
              Hn(o, d), d.append(pt()), l(this, me).set(a, { effect: o, fragment: d });
            } else
              ve(o);
            l(this, Ot).delete(a), l(this, je).delete(a);
          };
          l(this, wr) || !n ? (l(this, Ot).add(a), At(o, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    S(this, Wr, (t) => {
      l(this, Me).delete(t);
      const r = Array.from(l(this, Me).values());
      for (const [n, i] of l(this, me))
        r.includes(n) || (ve(i.effect), l(this, me).delete(n));
    });
    this.anchor = t, O(this, wr, r);
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
    ), i = Ii();
    if (r && !l(this, je).has(t) && !l(this, me).has(t))
      if (i) {
        var a = document.createDocumentFragment(), o = pt();
        a.append(o), l(this, me).set(t, {
          effect: Se(() => r(o)),
          fragment: a
        });
      } else
        l(this, je).set(
          t,
          Se(() => r(this.anchor))
        );
    if (l(this, Me).set(n, t), i) {
      for (const [f, s] of l(this, je))
        f === t ? n.unskip_effect(s) : n.skip_effect(s);
      for (const [f, s] of l(this, me))
        f === t ? n.unskip_effect(s.effect) : n.skip_effect(s.effect);
      n.oncommit(l(this, xr)), n.ondiscard(l(this, Wr));
    } else
      l(this, xr).call(this, n);
  }
}
Me = new WeakMap(), je = new WeakMap(), me = new WeakMap(), Ot = new WeakMap(), wr = new WeakMap(), xr = new WeakMap(), Wr = new WeakMap();
function We(e, t, r = !1) {
  var n = new $s(e), i = r ? Kt : 0;
  function a(o, f) {
    n.ensure(o, f);
  }
  Bn(() => {
    var o = !1;
    t((f, s = 0) => {
      o = !0, a(s, f);
    }), o || a(-1, null);
  }, i);
}
function lr(e, t) {
  return t;
}
function Hs(e, t, r) {
  for (var n = [], i = t.length, a, o = t.length, f = 0; f < i; f++) {
    let b = t[f];
    At(
      b,
      () => {
        if (a) {
          if (a.pending.delete(b), a.done.add(b), a.pending.size === 0) {
            var _ = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Cn(e, Kr(a.done)), _.delete(a), _.size === 0 && (e.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var s = n.length === 0 && r !== null;
    if (s) {
      var d = (
        /** @type {Element} */
        r
      ), c = (
        /** @type {Element} */
        d.parentNode
      );
      xs(c), c.append(d), e.items.clear();
    }
    Cn(e, t, !s);
  } else
    a = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function Cn(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const o of e.pending.values())
      for (const f of o)
        n.add(
          /** @type {EachItem} */
          e.items.get(f).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var a = t[i];
    if (n?.has(a)) {
      a.f |= Be;
      const o = document.createDocumentFragment();
      Hn(a, o);
    } else
      ve(t[i], r);
  }
}
var fi;
function or(e, t, r, n, i, a = null) {
  var o = e, f = /* @__PURE__ */ new Map(), s = (t & _i) !== 0;
  if (s) {
    var d = (
      /** @type {Element} */
      e
    );
    o = d.appendChild(pt());
  }
  var c = null, b = /* @__PURE__ */ ps(() => {
    var D = r();
    return Mn(D) ? D : D == null ? [] : Kr(D);
  }), _, v = /* @__PURE__ */ new Map(), h = !0;
  function E(D) {
    (X.effect.f & Oe) === 0 && (X.pending.delete(D), X.fallback = c, Zs(X, _, o, t, n), c !== null && (_.length === 0 ? (c.f & Be) === 0 ? $n(c) : (c.f ^= Be, fr(c, null, o)) : At(c, () => {
      c = null;
    })));
  }
  function p(D) {
    X.pending.delete(D);
  }
  var L = Bn(() => {
    _ = /** @type {V[]} */
    u(b);
    for (var D = _.length, M = /* @__PURE__ */ new Set(), V = (
      /** @type {Batch} */
      k
    ), te = Ii(), R = 0; R < D; R += 1) {
      var Ie = _[R], it = n(Ie, R), G = h ? null : f.get(it);
      G ? (G.v && Qt(G.v, Ie), G.i && Qt(G.i, R), te && V.unskip_effect(G.e)) : (G = Js(
        f,
        h ? o : fi ?? (fi = pt()),
        Ie,
        it,
        R,
        i,
        t,
        r
      ), h || (G.e.f |= Be), f.set(it, G)), M.add(it);
    }
    if (D === 0 && a && !c && (h ? c = Se(() => a(o)) : (c = Se(() => a(fi ?? (fi = pt()))), c.f |= Be)), D > M.size && Da(), !h)
      if (v.set(V, M), te) {
        for (const [Tr, Sr] of f)
          M.has(Tr) || V.skip_effect(Sr.e);
        V.oncommit(E), V.ondiscard(p);
      } else
        E(V);
    u(b);
  }), X = { effect: L, items: f, pending: v, outrogroups: null, fallback: c };
  h = !1;
}
function ur(e) {
  for (; e !== null && (e.f & Fe) === 0; )
    e = e.next;
  return e;
}
function Zs(e, t, r, n, i) {
  var a = (n & Va) !== 0, o = t.length, f = e.items, s = ur(e.effect.first), d, c = null, b, _ = [], v = [], h, E, p, L;
  if (a)
    for (L = 0; L < o; L += 1)
      h = t[L], E = i(h, L), p = /** @type {EachItem} */
      f.get(E).e, (p.f & Be) === 0 && (p.nodes?.a?.measure(), (b ?? (b = /* @__PURE__ */ new Set())).add(p));
  for (L = 0; L < o; L += 1) {
    if (h = t[L], E = i(h, L), p = /** @type {EachItem} */
    f.get(E).e, e.outrogroups !== null)
      for (const G of e.outrogroups)
        G.pending.delete(p), G.done.delete(p);
    if ((p.f & fe) !== 0 && ($n(p), a && (p.nodes?.a?.unfix(), (b ?? (b = /* @__PURE__ */ new Set())).delete(p))), (p.f & Be) !== 0)
      if (p.f ^= Be, p === s)
        fr(p, null, r);
      else {
        var X = c ? c.next : s;
        p === e.effect.last && (e.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), lt(e, c, p), lt(e, p, X), fr(p, X, r), c = p, _ = [], v = [], s = ur(c.next);
        continue;
      }
    if (p !== s) {
      if (d !== void 0 && d.has(p)) {
        if (_.length < v.length) {
          var D = v[0], M;
          c = D.prev;
          var V = _[0], te = _[_.length - 1];
          for (M = 0; M < _.length; M += 1)
            fr(_[M], D, r);
          for (M = 0; M < v.length; M += 1)
            d.delete(v[M]);
          lt(e, V.prev, te.next), lt(e, c, V), lt(e, te, D), s = D, c = te, L -= 1, _ = [], v = [];
        } else
          d.delete(p), fr(p, s, r), lt(e, p.prev, p.next), lt(e, p, c === null ? e.effect.first : c.next), lt(e, c, p), c = p;
        continue;
      }
      for (_ = [], v = []; s !== null && s !== p; )
        (d ?? (d = /* @__PURE__ */ new Set())).add(s), v.push(s), s = ur(s.next);
      if (s === null)
        continue;
    }
    (p.f & Be) === 0 && _.push(p), c = p, s = ur(p.next);
  }
  if (e.outrogroups !== null) {
    for (const G of e.outrogroups)
      G.pending.size === 0 && (Cn(e, Kr(G.done)), e.outrogroups?.delete(G));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (s !== null || d !== void 0) {
    var R = [];
    if (d !== void 0)
      for (p of d)
        (p.f & fe) === 0 && R.push(p);
    for (; s !== null; )
      (s.f & fe) === 0 && s !== e.fallback && R.push(s), s = ur(s.next);
    var Ie = R.length;
    if (Ie > 0) {
      var it = (n & _i) !== 0 && o === 0 ? r : null;
      if (a) {
        for (L = 0; L < Ie; L += 1)
          R[L].nodes?.a?.measure();
        for (L = 0; L < Ie; L += 1)
          R[L].nodes?.a?.fix();
      }
      Hs(e, R, it);
    }
  }
  a && vt(() => {
    if (b !== void 0)
      for (p of b)
        p.nodes?.a?.apply();
  });
}
function Js(e, t, r, n, i, a, o, f) {
  var s = (o & Ua) !== 0 ? (o & $a) === 0 ? /* @__PURE__ */ gs(r, !1, !1) : Rt(r) : null, d = (o & Ba) !== 0 ? Rt(i) : null;
  return {
    v: s,
    i: d,
    e: Se(() => (a(t, s ?? r, d ?? i, f), () => {
      e.delete(n);
    }))
  };
}
function fr(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, a = t && (t.f & Be) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Er(n)
      );
      if (a.before(n), n === i)
        return;
      n = o;
    }
}
function lt(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Ys(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function Gs(e, t) {
  return e == null ? null : String(e);
}
function Ut(e, t, r, n, i, a) {
  var o = e.__className;
  if (o !== r || o === void 0) {
    var f = Ys(r);
    f == null ? e.removeAttribute("class") : e.className = f, e.__className = r;
  }
  return a;
}
function Ws(e, t, r, n) {
  var i = e.__style;
  if (i !== t) {
    var a = Gs(t);
    a == null ? e.removeAttribute("style") : e.style.cssText = a, e.__style = t;
  }
  return n;
}
function ea(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Mn(t))
      return Ga();
    for (var n of e.options)
      n.selected = t.includes(pr(n));
    return;
  }
  for (n of e.options) {
    var i = pr(n);
    if (ys(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function Ks(e) {
  var t = new MutationObserver(() => {
    ea(e, e.__value);
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
  }), jn(() => {
    t.disconnect();
  });
}
function Ir(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), i = !0;
  Pi(e, "change", (a) => {
    var o = a ? "[selected]" : ":checked", f;
    if (e.multiple)
      f = [].map.call(e.querySelectorAll(o), pr);
    else {
      var s = e.querySelector(o) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      f = s && pr(s);
    }
    r(f), e.__value = f, k !== null && n.add(k);
  }), Ui(() => {
    var a = t();
    if (e === document.activeElement) {
      var o = (
        /** @type {Batch} */
        k
      );
      if (n.has(o))
        return;
    }
    if (ea(e, a, i), i && a === void 0) {
      var f = e.querySelector(":checked");
      f !== null && (a = pr(f), r(a));
    }
    e.__value = a, i = !1;
  }), Ks(e);
}
function pr(e) {
  return "__value" in e ? e.__value : e.value;
}
function ot(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Pi(e, "input", async (i) => {
    var a = i ? e.defaultValue : e.value;
    if (a = _n(e) ? hn(a) : a, r(a), k !== null && n.add(k), await Sn(), a !== (a = t())) {
      var o = e.selectionStart, f = e.selectionEnd, s = e.value.length;
      if (e.value = a ?? "", f !== null) {
        var d = e.value.length;
        o === f && f === s && d > s ? (e.selectionStart = d, e.selectionEnd = d) : (e.selectionStart = o, e.selectionEnd = Math.min(f, d));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  en(t) == null && e.value && (r(_n(e) ? hn(e.value) : e.value), k !== null && n.add(k)), Un(() => {
    var i = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        k
      );
      if (n.has(a))
        return;
    }
    _n(e) && i === hn(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function _n(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function hn(e) {
  return e === "" ? null : +e;
}
function di(e, t) {
  return e === t || e?.[Vt] === t;
}
function Xs(e = {}, t, r, n) {
  var i = (
    /** @type {ComponentContext} */
    pe.r
  ), a = (
    /** @type {Effect} */
    C
  );
  return Ui(() => {
    var o, f;
    return Un(() => {
      o = f, f = [], en(() => {
        e !== r(...f) && (t(e, ...f), o && di(r(...o), e) && t(null, ...o));
      });
    }), () => {
      let s = a;
      for (; s !== i && s.parent !== null && s.parent.f & bn; )
        s = s.parent;
      const d = () => {
        f && di(r(...f), e) && t(null, ...f);
      }, c = s.teardown;
      s.teardown = () => {
        d(), c?.();
      };
    };
  }), e;
}
function Qs(e) {
  pe === null && Aa(), qi(() => {
    const t = en(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
const el = "5";
var ci;
typeof window < "u" && ((ci = window.__svelte ?? (window.__svelte = {})).v ?? (ci.v = /* @__PURE__ */ new Set())).add(el);
var tl = /* @__PURE__ */ B('<div class="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded-lg mb-4 text-sm"> </div>'), rl = /* @__PURE__ */ B('<div class="bg-green-50 border border-green-300 text-green-800 px-4 py-3 rounded-lg mb-4 text-sm"> </div>'), nl = /* @__PURE__ */ B('<div class="flex items-center justify-center py-12"><svg class="animate-spin h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> <span class="ml-3 text-gray-500">Loading lands...</span></div>'), il = /* @__PURE__ */ B('<div class="flex items-center gap-1.5"><span class="w-3 h-3 rounded"></span> <span class="capitalize text-gray-600"> </span></div>'), al = /* @__PURE__ */ B('<div><div class="mb-4"><h3 class="text-lg font-semibold mb-2 text-gray-800">Land Registry Map</h3> <p class="text-sm text-gray-500 mb-3">Land parcels displayed as H3 hexagonal zones</p> <div class="flex flex-wrap gap-4 text-xs"></div></div> <div class="w-full rounded-lg border border-gray-300 relative z-0" style="height:500px;min-height:400px"></div> <div class="mt-3 flex items-center gap-4 text-xs text-gray-500"><div class="flex items-center gap-1"><span class="inline-block w-3 h-3 rounded border-2 border-gray-800"></span><span>Owned</span></div> <div class="flex items-center gap-1"><span class="inline-block w-3 h-3 rounded border border-gray-400"></span><span>Available</span></div> <button class="ml-auto px-3 py-1 bg-gray-100 border border-gray-300 rounded text-xs hover:bg-gray-200 transition-colors">Refresh</button></div></div>'), sl = /* @__PURE__ */ B('<span class="text-gray-400">-</span>'), ll = /* @__PURE__ */ B('<span class="text-green-600 font-medium">For Sale</span>'), ol = /* @__PURE__ */ B('<span class="text-gray-600">Owned</span>'), ul = /* @__PURE__ */ B('<span class="text-blue-600">Available</span>'), fl = /* @__PURE__ */ B('<span class="text-green-700 font-semibold"> </span>'), dl = /* @__PURE__ */ B('<span class="text-gray-400">-</span>'), cl = /* @__PURE__ */ B('<tr class="hover:bg-gray-50 transition-colors"><td class="px-4 py-3 text-sm font-medium text-gray-900"> </td><td class="px-4 py-3 text-sm"><span> </span></td><td class="px-4 py-3 text-sm text-gray-600"><!></td><td class="px-4 py-3 text-sm text-gray-600"> </td><td class="px-4 py-3 text-sm"><!></td><td class="px-4 py-3 text-sm"><!></td></tr>'), vl = /* @__PURE__ */ B('<div class="flex justify-center items-center mt-4 gap-2"><button>Previous</button> <span class="text-sm text-gray-600"> </span> <button>Next</button></div>'), pl = /* @__PURE__ */ B('<div class="overflow-x-auto rounded-lg border border-gray-200"><table class="min-w-full"><thead class="bg-gray-50"><tr><th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th><th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th><th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th><th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th><th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th><th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th></tr></thead><tbody class="bg-white divide-y divide-gray-200"></tbody></table></div> <!>', 1), _l = /* @__PURE__ */ B('<div class="text-center py-8 text-gray-500">No land parcels registered yet.</div>'), hl = /* @__PURE__ */ B('<div><div class="mb-4 flex items-center justify-between"><div><h3 class="text-lg font-semibold text-gray-800">Land Registry Table</h3> <p class="text-sm text-gray-500"> </p></div> <button class="px-3 py-1.5 bg-gray-100 border border-gray-300 rounded text-xs hover:bg-gray-200 transition-colors">Refresh</button></div> <!></div>'), gl = /* @__PURE__ */ B("<option> </option>"), bl = /* @__PURE__ */ B('<div><label for="own-uid" class="block text-sm font-medium text-gray-700 mb-1">User ID</label> <input id="own-uid" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Enter user ID" required=""/></div>'), yl = /* @__PURE__ */ B('<div><label for="own-oid" class="block text-sm font-medium text-gray-700 mb-1">Organization ID</label> <input id="own-oid" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Enter organization ID" required=""/></div>'), ml = /* @__PURE__ */ B("<option> </option>"), wl = /* @__PURE__ */ B("<option> </option>"), xl = /* @__PURE__ */ B('<div class="space-y-6"><div><h3 class="text-lg font-semibold text-gray-800">Admin Controls</h3> <p class="text-gray-500 text-sm">Create new land parcels and manage ownership</p></div> <div class="bg-white p-6 border border-gray-200 rounded-lg"><h4 class="font-semibold mb-4 text-gray-800">Create New Land Parcel</h4> <form class="space-y-4"><div class="grid grid-cols-2 gap-4"><div><label for="lr-x" class="block text-sm font-medium text-gray-700 mb-1">X Coordinate</label> <input id="lr-x" type="number" min="0" max="19" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" required=""/></div> <div><label for="lr-y" class="block text-sm font-medium text-gray-700 mb-1">Y Coordinate</label> <input id="lr-y" type="number" min="0" max="19" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" required=""/></div></div> <div><label for="lr-type" class="block text-sm font-medium text-gray-700 mb-1">Land Type</label> <select id="lr-type" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"></select></div> <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button></form></div> <div class="bg-white p-6 border border-gray-200 rounded-lg"><h4 class="font-semibold mb-4 text-gray-800">Update Land Ownership</h4> <form class="space-y-4"><div><label for="own-id" class="block text-sm font-medium text-gray-700 mb-1">Land ID</label> <input id="own-id" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Enter land ID" required=""/></div> <div><label for="own-type" class="block text-sm font-medium text-gray-700 mb-1">Owner Type</label> <select id="own-type" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"><option>No Owner</option><option>Citizen</option><option>Organization</option></select></div> <!> <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button></form></div> <div class="bg-white p-6 border border-gray-200 rounded-lg"><h4 class="font-semibold mb-4 text-gray-800">Update Land Properties</h4> <form class="space-y-4"><div><label for="upd-id" class="block text-sm font-medium text-gray-700 mb-1">Land ID</label> <input id="upd-id" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Enter land ID" required=""/></div> <div><label for="upd-type" class="block text-sm font-medium text-gray-700 mb-1">Land Type (optional)</label> <select id="upd-type" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"><option>-- No change --</option><!></select></div> <div><label for="upd-status" class="block text-sm font-medium text-gray-700 mb-1">Status (optional)</label> <select id="upd-status" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"><option>-- No change --</option><!></select></div> <button type="submit" class="px-4 py-2 bg-yellow-600 text-white rounded-lg text-sm hover:bg-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button></form></div> <div class="bg-white p-6 border border-gray-200 rounded-lg"><h4 class="font-semibold mb-2 text-gray-800">Mint Land NFT</h4> <p class="text-sm text-gray-500 mb-4">Register a land parcel and mint an NFT representing ownership</p> <form class="space-y-4"><div><label for="nft-lid" class="block text-sm font-medium text-gray-700 mb-1">Land ID</label> <input id="nft-lid" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Enter land ID to mint NFT for" required=""/></div> <div><label for="nft-own" class="block text-sm font-medium text-gray-700 mb-1">Owner Principal</label> <input id="nft-own" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Principal ID of the NFT owner" required=""/></div> <button type="submit" class="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button></form></div></div>'), El = /* @__PURE__ */ B('<div class="max-w-5xl mx-auto p-4"><div class="mb-6"><h2 class="text-2xl font-bold text-gray-900">Land Registry</h2> <p class="text-gray-600 text-sm mt-1">Manage land parcels, ownership, and NFT minting</p></div> <!> <!> <div class="border-b border-gray-200 mb-6"><nav class="-mb-px flex space-x-8"><button>Map View</button> <button>Table View</button> <button>Admin Controls</button></nav></div> <!></div>');
function kl(e, t) {
  bi(t, !0);
  const r = "land_registry";
  let n = /* @__PURE__ */ J("geographic"), i = /* @__PURE__ */ J(Ue([])), a = /* @__PURE__ */ J(!0), o = /* @__PURE__ */ J(""), f = /* @__PURE__ */ J(""), s = /* @__PURE__ */ J(void 0), d = /* @__PURE__ */ J(null), c = null, b = null, _ = null, v = null, h = null, E = /* @__PURE__ */ J(0);
  const p = 10;
  let L = /* @__PURE__ */ pn(() => Math.ceil(u(i).length / p)), X = /* @__PURE__ */ pn(() => u(i).slice(u(E) * p, (u(E) + 1) * p)), D = /* @__PURE__ */ J(Ue({
    x_coordinate: 0,
    y_coordinate: 0,
    land_type: "unassigned",
    size_width: 1,
    size_height: 1
  })), M = /* @__PURE__ */ J(Ue({
    land_id: "",
    owner_user_id: "",
    owner_organization_id: "",
    owner_type: "none"
  })), V = /* @__PURE__ */ J(Ue({ land_id: "", land_type: "", status: "" })), te = /* @__PURE__ */ J(Ue({ land_id: "", owner_principal: "" })), R = /* @__PURE__ */ J(!1);
  const Ie = [
    { value: "unassigned", label: "Unassigned" },
    { value: "residential", label: "Residential" },
    { value: "agricultural", label: "Agricultural" },
    { value: "industrial", label: "Industrial" },
    { value: "commercial", label: "Commercial" }
  ], it = [
    { value: "active", label: "Active" },
    { value: "disputed", label: "Disputed" },
    { value: "transferred", label: "Transferred" },
    { value: "revoked", label: "Revoked" }
  ], G = {
    residential: "#4ade80",
    agricultural: "#fbbf24",
    industrial: "#6b7280",
    commercial: "#3b82f6",
    unassigned: "#e5e7eb"
  }, Tr = "#f59e0b", Sr = 2;
  async function Ft(g, y = "{}") {
    const P = await t.ctx.backend.extension_sync_call(JSON.stringify({ extension_name: r, function_name: g, args: y }));
    return JSON.parse(P);
  }
  async function gt() {
    x(a, !0), x(o, "");
    try {
      const g = await Ft("get_lands", "{}");
      g?.success ? x(i, g.data ?? [], !0) : x(i, g?.data ?? (Array.isArray(g) ? g : []), !0);
    } catch (g) {
      x(o, g?.message || String(g), !0);
    } finally {
      x(a, !1);
    }
  }
  async function Zn() {
    if (!u(s) || u(d)) return;
    if (c = await import(
      /* @vite-ignore */
      "https://esm.sh/leaflet@1.9.4"
    ), b = await import(
      /* @vite-ignore */
      "https://esm.sh/h3-js@4.2.1"
    ), !document.querySelector('link[href*="leaflet"]')) {
      const y = document.createElement("link");
      y.rel = "stylesheet", y.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css", document.head.appendChild(y), await new Promise((P) => setTimeout(P, 150));
    }
    x(d, c.map(u(s)).setView([20, 0], 2), !0);
    const g = c.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 19
    });
    g.on("tileerror", () => {
      u(d)._fb || (u(d)._fb = !0, u(d).removeLayer(g), c.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19
      }).addTo(u(d)));
    }), g.addTo(u(d)), v = c.layerGroup().addTo(u(d)), _ = c.layerGroup().addTo(u(d)), h = c.layerGroup().addTo(u(d)), u(d).on("zoomend", tn), tn(), rn();
  }
  function tn() {
    if (!u(d) || !v || !_) return;
    u(d).getZoom() < 10 ? (v.addTo(u(d)), u(d).removeLayer(_)) : (_.addTo(u(d)), u(d).removeLayer(v));
  }
  function ta() {
    if (!c || !u(d) || !b || !h) return;
    h.clearLayers();
    const g = /* @__PURE__ */ new Map();
    for (const z of u(i)) {
      let N = null;
      if (z.metadata)
        try {
          N = (typeof z.metadata == "string" ? JSON.parse(z.metadata) : z.metadata).parent_zone;
        } catch {
        }
      if (!N) continue;
      g.has(N) || g.set(N, { landCount: 0, landTypes: {} });
      const $ = g.get(N);
      $.landCount++, $.landTypes[z.land_type] = ($.landTypes[z.land_type] || 0) + 1;
    }
    if (g.size === 0) return;
    const y = {};
    g.forEach((z, N) => {
      let $;
      try {
        $ = b.gridDisk(N, Sr);
      } catch {
        $ = [N];
      }
      for (const F of $) {
        let re;
        try {
          re = b.gridDistance(N, F);
        } catch {
          re = F === N ? 0 : 1;
        }
        y[F] ? y[F].minDistance = Math.min(y[F].minDistance, re) : y[F] = { minDistance: re, landCount: 0, landTypes: {} }, re === 0 && (y[F].landCount += z.landCount, y[F].landTypes = z.landTypes);
      }
    });
    const P = [];
    for (const [z, N] of Object.entries(y))
      try {
        const F = b.cellToBoundary(z).map((q) => [q[0], q[1]]), re = 1 - N.minDistance / (Sr + 1) * 0.7, Ze = N.minDistance === 0 ? 0.5 : 0.25, _e = c.polygon(F, {
          color: Tr,
          fillColor: Tr,
          fillOpacity: Ze * re,
          weight: N.minDistance === 0 ? 2 : 1,
          opacity: N.minDistance === 0 ? 0.8 : 0.4,
          dashArray: N.minDistance > 0 ? "4 4" : void 0
        });
        if (N.minDistance === 0) {
          const q = Object.entries(N.landTypes).map(([ne, we]) => `${ne}: ${we}`).join(", ");
          _e.bindPopup(`<div style="padding:4px"><strong>Land Zone</strong><br>Parcels: ${N.landCount}<br>${q ? `Types: ${q}<br>` : ""}<span style="font-size:10px;color:#9ca3af">H3: ${z}</span></div>`);
        }
        _e.addTo(h), P.push(...F);
      } catch {
      }
    P.length > 0 && u(d).fitBounds(c.latLngBounds(P), { padding: [50, 50], maxZoom: 12 });
  }
  function rn() {
    if (!c || !u(d) || !_ || !v) return;
    _.clearLayers(), v.clearLayers(), ta();
    const g = [];
    for (const y of u(i)) {
      const P = G[y.land_type] || G.unassigned, z = y.owner_user_id || y.owner_organization_id;
      let N = null, $ = null, F = y.h3_index;
      if (y.latitude && y.longitude)
        N = y.latitude, $ = y.longitude;
      else if (b && F && !F.includes("manual"))
        try {
          const q = b.cellToLatLng(F);
          N = q[0], $ = q[1];
        } catch {
          F = null;
        }
      if (N == null && b) {
        let q = null;
        if (y.metadata)
          try {
            q = (typeof y.metadata == "string" ? JSON.parse(y.metadata) : y.metadata).parent_zone;
          } catch {
          }
        if (q)
          try {
            const ne = b.cellToLatLng(q);
            N = ne[0], $ = ne[1], F = q;
          } catch {
          }
      }
      if (N == null || $ == null) continue;
      g.push([N, $]);
      const re = y.for_sale && y.price_realm_tokens ? `<br><span style="color:#16a34a;font-weight:600">${y.price_realm_tokens} REALM</span>` : "", Ze = y.owner_user_id ? `<br>Owner: User ${y.owner_user_id}` : y.owner_organization_id ? `<br>Owner: Org ${y.owner_organization_id}` : '<br><span style="color:#2563eb">Available</span>', _e = `<div style="padding:4px"><strong>${y.id}</strong><br>Type: <span style="color:${P}">${y.land_type}</span>${Ze}${re}${F ? `<br><span style="font-size:10px;color:#9ca3af">H3: ${F}</span>` : ""}</div>`;
      if (c.circleMarker([N, $], {
        radius: 18,
        fillColor: P,
        color: z ? "#1f2937" : "#22c55e",
        weight: 3,
        opacity: 1,
        fillOpacity: 0.85
      }).bindPopup(_e).addTo(v), b && F && !F.includes("manual"))
        try {
          const ne = b.cellToBoundary(F).map((we) => [we[0], we[1]]);
          c.polygon(ne, {
            color: z ? "#1f2937" : "#9ca3af",
            fillColor: P,
            fillOpacity: z ? 0.7 : 0.5,
            weight: z ? 2 : 1
          }).bindPopup(_e).addTo(_);
        } catch {
        }
    }
    g.length > 0 && h && h.getLayers().length === 0 && u(d).fitBounds(c.latLngBounds(g), { padding: [50, 50], maxZoom: 12 }), tn();
  }
  function ra(g) {
    return {
      residential: "bg-green-100 text-green-800",
      agricultural: "bg-yellow-100 text-yellow-800",
      industrial: "bg-gray-100 text-gray-800",
      commercial: "bg-blue-100 text-blue-800"
    }[g] || "bg-gray-100 text-gray-600";
  }
  async function na() {
    x(R, !0), x(o, ""), x(f, "");
    try {
      const g = await Ft("create_land", JSON.stringify(u(D)));
      g?.success ? (x(f, "Land created successfully!"), x(
        D,
        {
          x_coordinate: 0,
          y_coordinate: 0,
          land_type: "unassigned",
          size_width: 1,
          size_height: 1
        },
        !0
      ), await gt()) : x(o, g?.error || "Failed to create land", !0);
    } catch (g) {
      x(o, g?.message || String(g), !0);
    } finally {
      x(R, !1);
    }
  }
  async function ia() {
    x(R, !0), x(o, ""), x(f, "");
    try {
      const g = { land_id: u(M).land_id };
      u(M).owner_type === "user" ? g.owner_user_id = u(M).owner_user_id : u(M).owner_type === "organization" && (g.owner_organization_id = u(M).owner_organization_id);
      const y = await Ft("update_land_ownership", JSON.stringify(g));
      y?.success ? (x(f, "Ownership updated!"), x(
        M,
        {
          land_id: "",
          owner_user_id: "",
          owner_organization_id: "",
          owner_type: "none"
        },
        !0
      ), await gt()) : x(o, y?.error || "Failed to update ownership", !0);
    } catch (g) {
      x(o, g?.message || String(g), !0);
    } finally {
      x(R, !1);
    }
  }
  async function aa() {
    x(R, !0), x(o, ""), x(f, "");
    try {
      const g = { land_id: u(V).land_id };
      u(V).land_type && (g.land_type = u(V).land_type), u(V).status && (g.status = u(V).status);
      const y = await Ft("update_land", JSON.stringify(g));
      y?.success ? (x(f, y?.data?.message || "Land updated!", !0), x(V, { land_id: "", land_type: "", status: "" }, !0), await gt()) : x(o, y?.error || "Failed to update land", !0);
    } catch (g) {
      x(o, g?.message || String(g), !0);
    } finally {
      x(R, !1);
    }
  }
  async function sa() {
    x(R, !0), x(o, ""), x(f, "");
    try {
      const g = await Ft("register_land_nft", JSON.stringify({
        land_id: u(te).land_id,
        owner_principal: u(te).owner_principal,
        registered_by: t.ctx.principal || "admin"
      }));
      if (!g?.success) {
        x(o, g?.error || "Failed to prepare NFT", !0);
        return;
      }
      const y = g.data, P = await t.ctx.backend.mint_land_nft_for_parcel(u(te).land_id, u(te).owner_principal, BigInt(y.token_id), ""), z = JSON.parse(P);
      z.success ? (await Ft("update_land_nft_token", JSON.stringify({
        land_id: u(te).land_id,
        nft_token_id: z.token_id
      })), x(f, `NFT minted! Token ID: ${z.token_id}`), x(te, { land_id: "", owner_principal: "" }, !0), await gt()) : x(o, z.error || "Mint failed", !0);
    } catch (g) {
      x(o, g?.message || String(g), !0);
    } finally {
      x(R, !1);
    }
  }
  qi(() => {
    u(n) === "geographic" && u(i).length > 0 && u(d) && rn();
  }), Qs(async () => {
    await gt(), await Sn(), u(s) && await Zn();
  });
  var Jn = El(), Yn = w(m(Jn), 2);
  {
    var la = (g) => {
      var y = tl(), P = m(y);
      he(() => se(P, u(o))), U(g, y);
    };
    We(Yn, (g) => {
      u(o) && g(la);
    });
  }
  var Gn = w(Yn, 2);
  {
    var oa = (g) => {
      var y = rl(), P = m(y);
      he(() => se(P, u(f))), U(g, y);
    };
    We(Gn, (g) => {
      u(f) && g(oa);
    });
  }
  var Wn = w(Gn, 2), ua = m(Wn), nn = m(ua), an = w(nn, 2), Kn = w(an, 2), fa = w(Wn, 2);
  {
    var da = (g) => {
      var y = nl();
      U(g, y);
    }, ca = (g) => {
      var y = al(), P = m(y), z = w(m(P), 4);
      or(z, 21, () => Object.entries(G), lr, (re, Ze) => {
        var _e = /* @__PURE__ */ pn(() => La(u(Ze), 2));
        let q = () => u(_e)[0], ne = () => u(_e)[1];
        var we = il(), bt = m(we), It = w(bt, 2), Pt = m(It);
        he(() => {
          Ws(bt, `background-color:${ne() ?? ""}`), se(Pt, q());
        }), U(re, we);
      });
      var N = w(P, 2);
      Xs(N, (re) => x(s, re), () => u(s));
      var $ = w(N, 2), F = w(m($), 4);
      mt("click", F, gt), U(g, y);
    }, va = (g) => {
      var y = hl(), P = m(y), z = m(P), N = w(m(z), 2), $ = m(N), F = w(z, 2), re = w(P, 2);
      {
        var Ze = (q) => {
          var ne = pl(), we = ws(ne), bt = m(we), It = w(m(bt));
          or(It, 21, () => u(X), lr, (at, Z) => {
            var Ce = cl(), Je = m(Ce), qt = m(Je), Ye = w(Je), Lr = m(Ye), ln = m(Lr), rr = w(Ye), on = m(rr);
            {
              var Or = (I) => {
                var ie = js();
                he((jt, Rr) => se(ie, `${jt ?? ""}, ${Rr ?? ""}`), [
                  () => u(Z).latitude.toFixed(4),
                  () => u(Z).longitude.toFixed(4)
                ]), U(I, ie);
              }, Nr = (I) => {
                var ie = sl();
                U(I, ie);
              };
              We(on, (I) => {
                u(Z).latitude && u(Z).longitude ? I(Or) : I(Nr, -1);
              });
            }
            var nr = w(rr), un = m(nr), ir = w(nr), Ar = m(ir);
            {
              var ar = (I) => {
                var ie = ll();
                U(I, ie);
              }, fn = (I) => {
                var ie = ol();
                U(I, ie);
              }, Cr = (I) => {
                var ie = ul();
                U(I, ie);
              };
              We(Ar, (I) => {
                u(Z).for_sale ? I(ar) : u(Z).owner_user_id || u(Z).owner_organization_id ? I(fn, 1) : I(Cr, -1);
              });
            }
            var Dr = w(ir), sr = m(Dr);
            {
              var dn = (I) => {
                var ie = fl(), jt = m(ie);
                he(() => se(jt, `${u(Z).price_realm_tokens ?? ""} REALM`)), U(I, ie);
              }, Mr = (I) => {
                var ie = dl();
                U(I, ie);
              };
              We(sr, (I) => {
                u(Z).for_sale && u(Z).price_realm_tokens ? I(dn) : I(Mr, -1);
              });
            }
            he(
              (I) => {
                se(qt, u(Z).id), Ut(Lr, 1, `px-2 py-0.5 rounded-full text-xs font-medium ${I ?? ""}`), se(ln, u(Z).land_type), se(un, u(Z).owner_user_id || u(Z).owner_organization_id || "-");
              },
              [() => ra(u(Z).land_type)]
            ), U(at, Ce);
          });
          var Pt = w(we, 2);
          {
            var sn = (at) => {
              var Z = vl(), Ce = m(Z), Je = w(Ce, 2), qt = m(Je), Ye = w(Je, 2);
              he(() => {
                Ut(Ce, 1, `px-3 py-1 rounded border text-sm ${u(E) > 0 ? "bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200" : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"}`), Ce.disabled = u(E) === 0, se(qt, `Page ${u(E) + 1} of ${u(L) ?? ""}`), Ut(Ye, 1, `px-3 py-1 rounded border text-sm ${u(E) < u(L) - 1 ? "bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200" : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"}`), Ye.disabled = u(E) >= u(L) - 1;
              }), mt("click", Ce, () => x(E, Math.max(0, u(E) - 1), !0)), mt("click", Ye, () => x(E, Math.min(u(L) - 1, u(E) + 1), !0)), U(at, Z);
            };
            We(Pt, (at) => {
              u(L) > 1 && at(sn);
            });
          }
          U(q, ne);
        }, _e = (q) => {
          var ne = _l();
          U(q, ne);
        };
        We(re, (q) => {
          u(i).length > 0 ? q(Ze) : q(_e, -1);
        });
      }
      he(() => se($, `Showing ${u(X).length ?? ""} of ${u(i).length ?? ""} parcels`)), mt("click", F, gt), U(g, y);
    }, pa = (g) => {
      var y = xl(), P = w(m(y), 2), z = w(m(P), 2), N = m(z), $ = m(N), F = w(m($), 2), re = w($, 2), Ze = w(m(re), 2), _e = w(N, 2), q = w(m(_e), 2);
      or(q, 21, () => Ie, lr, (T, ae) => {
        var Q = gl(), Ge = m(Q), st = {};
        he(() => {
          se(Ge, u(ae).label), st !== (st = u(ae).value) && (Q.value = (Q.__value = u(ae).value) ?? "");
        }), U(T, Q);
      });
      var ne = w(_e, 2), we = m(ne), bt = w(P, 2), It = w(m(bt), 2), Pt = m(It), sn = w(m(Pt), 2), at = w(Pt, 2), Z = w(m(at), 2), Ce = m(Z);
      Ce.value = Ce.__value = "none";
      var Je = w(Ce);
      Je.value = Je.__value = "user";
      var qt = w(Je);
      qt.value = qt.__value = "organization";
      var Ye = w(at, 2);
      {
        var Lr = (T) => {
          var ae = bl(), Q = w(m(ae), 2);
          ot(Q, () => u(M).owner_user_id, (Ge) => u(M).owner_user_id = Ge), U(T, ae);
        }, ln = (T) => {
          var ae = yl(), Q = w(m(ae), 2);
          ot(Q, () => u(M).owner_organization_id, (Ge) => u(M).owner_organization_id = Ge), U(T, ae);
        };
        We(Ye, (T) => {
          u(M).owner_type === "user" ? T(Lr) : u(M).owner_type === "organization" && T(ln, 1);
        });
      }
      var rr = w(Ye, 2), on = m(rr), Or = w(bt, 2), Nr = w(m(Or), 2), nr = m(Nr), un = w(m(nr), 2), ir = w(nr, 2), Ar = w(m(ir), 2), ar = m(Ar);
      ar.value = ar.__value = "";
      var fn = w(ar);
      or(fn, 17, () => Ie, lr, (T, ae) => {
        var Q = ml(), Ge = m(Q), st = {};
        he(() => {
          se(Ge, u(ae).label), st !== (st = u(ae).value) && (Q.value = (Q.__value = u(ae).value) ?? "");
        }), U(T, Q);
      });
      var Cr = w(ir, 2), Dr = w(m(Cr), 2), sr = m(Dr);
      sr.value = sr.__value = "";
      var dn = w(sr);
      or(dn, 17, () => it, lr, (T, ae) => {
        var Q = wl(), Ge = m(Q), st = {};
        he(() => {
          se(Ge, u(ae).label), st !== (st = u(ae).value) && (Q.value = (Q.__value = u(ae).value) ?? "");
        }), U(T, Q);
      });
      var Mr = w(Cr, 2), I = m(Mr), ie = w(Or, 2), jt = w(m(ie), 4), Rr = m(jt), _a = w(m(Rr), 2), Xn = w(Rr, 2), ha = w(m(Xn), 2), Qn = w(Xn, 2), ga = m(Qn);
      he(() => {
        ne.disabled = u(R), se(we, u(R) ? "Creating..." : "Create Land Parcel"), rr.disabled = u(R), se(on, u(R) ? "Updating..." : "Update Ownership"), Mr.disabled = u(R), se(I, u(R) ? "Updating..." : "Update Land"), Qn.disabled = u(R), se(ga, u(R) ? "Minting..." : "Mint NFT");
      }), zr("submit", z, (T) => {
        T.preventDefault(), na();
      }), ot(F, () => u(D).x_coordinate, (T) => u(D).x_coordinate = T), ot(Ze, () => u(D).y_coordinate, (T) => u(D).y_coordinate = T), Ir(q, () => u(D).land_type, (T) => u(D).land_type = T), zr("submit", It, (T) => {
        T.preventDefault(), ia();
      }), ot(sn, () => u(M).land_id, (T) => u(M).land_id = T), Ir(Z, () => u(M).owner_type, (T) => u(M).owner_type = T), zr("submit", Nr, (T) => {
        T.preventDefault(), aa();
      }), ot(un, () => u(V).land_id, (T) => u(V).land_id = T), Ir(Ar, () => u(V).land_type, (T) => u(V).land_type = T), Ir(Dr, () => u(V).status, (T) => u(V).status = T), zr("submit", jt, (T) => {
        T.preventDefault(), sa();
      }), ot(_a, () => u(te).land_id, (T) => u(te).land_id = T), ot(ha, () => u(te).owner_principal, (T) => u(te).owner_principal = T), U(g, y);
    };
    We(fa, (g) => {
      u(a) ? g(da) : u(n) === "geographic" ? g(ca, 1) : u(n) === "table" ? g(va, 2) : u(n) === "admin" && g(pa, 3);
    });
  }
  he(() => {
    Ut(nn, 1, `py-2 px-1 border-b-2 font-medium text-sm transition-colors ${u(n) === "geographic" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`), Ut(an, 1, `py-2 px-1 border-b-2 font-medium text-sm transition-colors ${u(n) === "table" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`), Ut(Kn, 1, `py-2 px-1 border-b-2 font-medium text-sm transition-colors ${u(n) === "admin" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`);
  }), mt("click", nn, () => {
    x(n, "geographic"), Sn().then(() => {
      u(s) && !u(d) ? Zn() : u(d) && (u(d).invalidateSize(), rn());
    });
  }), mt("click", an, () => x(n, "table")), mt("click", Kn, () => x(n, "admin")), U(e, Jn), yi();
}
Fs(["click"]);
function Ll(e, t) {
  const r = Us(kl, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        Vs(r);
      } catch {
      }
    }
  };
}
export {
  Ll as default
};
